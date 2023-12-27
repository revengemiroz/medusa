"use client"

import clsx from "clsx"
import Link from "next/link"
import { ProductPreviewType } from "types/global"
import Thumbnail from "../thumbnail"
import { Text } from "@medusajs/ui"
import { useEffect, useState } from "react"

const ProductPreview = ({
  title,
  handle,
  thumbnail,
  price,
  isFeatured,
}: ProductPreviewType) => {
  const [count, setCount] = useState(0)
  const [isAddMouseDown, setIsAddMouseDown] = useState(false)
  const [addIntervalId, setAddIntervalId] = useState<NodeJS.Timer | null>(null)
  const [isMinusMouseDown, setIsMinusMouseDown] = useState(false)
  const [minusIntervalId, setMinusIntervalId] = useState<NodeJS.Timer | null>(
    null
  )

  const handleAddIncrement = () => {
    setCount((prevCount) => prevCount + 1)
  }

  const handleMinusIncrement = () => {
    setCount((prevCount) => prevCount - 1)
  }

  const handleAddMouseDown = () => {
    const id = setInterval(handleAddIncrement, 200) // Adjust the interval as needed
    setAddIntervalId(id)
    setIsAddMouseDown(true)

    // Trigger a single increment immediately
    handleAddIncrement()
  }

  const handleAddMouseUp = () => {
    if (addIntervalId) {
      clearInterval(addIntervalId)
    }
    setAddIntervalId(null)
    setIsAddMouseDown(false)
  }

  const handleMinusMouseDown = () => {
    const id = setInterval(handleMinusIncrement, 200) // Adjust the interval as needed
    setMinusIntervalId(id)
    setIsMinusMouseDown(true)

    // Trigger a single decrement immediately
    handleMinusIncrement()
  }

  const handleMinusMouseUp = () => {
    if (minusIntervalId) {
      clearInterval(minusIntervalId)
    }
    setMinusIntervalId(null)
    setIsMinusMouseDown(false)
  }

  // Cleanup the intervals when the component unmounts
  useEffect(() => {
    return () => {
      if (addIntervalId) {
        clearInterval(addIntervalId)
      }
      if (minusIntervalId) {
        clearInterval(minusIntervalId)
      }
    }
  }, [addIntervalId, minusIntervalId])

  return (
    <div className="  flex flex-col gap-3">
      <div className="">
        <div className=" flex items-center justify-center bg-[#F5F5F5] h-[300px] ">
          <img
            src={
              "https://cheers.com.np/uploads/products/576587409604141522350575875484557451796823.png"
            }
            alt="thumbnail"
            className="h-[250px] "
          />
        </div>
      </div>
      {/* <Thumbnail thumbnail={thumbnail} size="full" isFeatured={isFeatured} /> */}

      <div className="text-[#727272] text-[18px] font-medium leading-2">
        Rakshi
      </div>
      <div className=" text-sm text-[#F97316] font-medium">
        {price?.calculated_price}
      </div>

      <div className=" flex flex-row gap-4 text-md transition-all">
        <div className="flex-1 flex flex-row ">
          <button
            onMouseDown={handleMinusMouseDown}
            onMouseUp={handleMinusMouseUp}
            onMouseLeave={handleMinusMouseUp}
            // onClick={() => validation("-")}
            className="border border-[#F97316] px-3 text-[#727272] font-semibold hover:bg-[#F97316] hover:text-white"
          >
            -
          </button>
          <span className="h-full px-3 flex items-center py-1 text-[#F97316] font-bold border border-[#F97316] border-l-0 border-r-0">
            {count}
          </span>
          <button
            onMouseDown={handleAddMouseDown}
            onMouseUp={handleAddMouseUp}
            onMouseLeave={handleAddMouseUp}
            className="border border-[#F97316] px-3 text-[#727272] font-semibold hover:bg-[#F97316] hover:text-white"
          >
            +
          </button>
        </div>
        <button className="bg-[#F97316] text-white font-medium py-2 w-full !text-md">
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ProductPreview
