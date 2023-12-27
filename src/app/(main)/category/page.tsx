import React from "react"

import SideFilter from "@modules/sideFilter"
import ProductPreview from "@modules/products/components/product-preview"

export const metadata = {
  title: "Category",
}

function Index() {
  return (
    <div className=" h-full py-6 md:py-16">
      <div className="w-full px-4 md:w-4/5  mx-auto flex flex-col md:flex-row gap-8">
        <div className="w-sm w-full md:w-1/3">
          <SideFilter />
        </div>

        <div className=" grid  gap-x-8 gap-y-8 grid-cols-1 md:grid-cols-4 w-full">
          {Array.from({ length: 12 }).map((data, index) => (
            <ProductPreview
              key={index}
              id=""
              thumbnail={""}
              title=""
              handle={""}
              price={{
                calculated_price: "2000",
                original_price: "2",
                difference: "2",
                price_type: "default",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Index
