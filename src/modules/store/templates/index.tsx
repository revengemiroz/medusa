"use client"

import { StoreGetProductsParams } from "@medusajs/medusa"
import InfiniteProducts from "@modules/products/components/infinite-products"
import RefinementList from "@modules/store/components/refinement-list"
import { useState } from "react"
import { SortOptions } from "../components/refinement-list/sort-products"

const StoreTemplate = () => {
  const [params, setParams] = useState<StoreGetProductsParams>({})
  const [sortBy, setSortBy] = useState<SortOptions>("created_at")

  return (
    <div className="flex flex-col h-full small:flex-row small:items-start py-6">
      <div className="w-4/5 mx-auto flex flex-row gap-12">
        <RefinementList
          refinementList={params}
          setRefinementList={setParams}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />
        <InfiniteProducts params={params} sortBy={sortBy} />
      </div>
    </div>
  )
}

export default StoreTemplate
