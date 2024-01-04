"use client"

import { getCategoriesList, getProductsList } from "@lib/data"
import usePreviews from "@lib/hooks/use-previews"
import { ProductCollection } from "@medusajs/medusa"
// import ProductRail from "./product-rail"
import ProductPreview from "@modules/products/components/product-preview"
import { useInfiniteQuery } from "@tanstack/react-query"
import useEmblaCarousel from "embla-carousel-react/components/useEmblaCarousel"

import InfiniteProducts from "@modules/products/components/home-page"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../../@/shadcn/ui/carousel"

const FeaturedProducts = ({
  collections,
  product_categories,
}: {
  collections: ProductCollection[]
}) => {
  const home_page_category = product_categories && product_categories[0]
  console.log({ home_page_category })

  const featured = home_page_category?.category_children?.filter(
    (category) => category.handle == "featured"
  )

  const best_offers = home_page_category?.category_children?.filter(
    (category) => category.handle == "best-offers"
  )

  const whiskey = home_page_category?.category_children?.filter(
    (category) => category.handle == "whiskey"
  )

  console.log({ best_offers })
  return (
    <div className="flex flex-col gap-12 my-12">
      {/* <div className="py-12">
        <ul className="flex flex-col gap-x-6 gap-y-8">
          {collections.map((collection) => (
            <li key={collection.id}>
              <ProductRail collection={collection} />
            </li>
          ))}
        </ul>
      </div> */}
      <div className="w-4/5 mx-auto flex gap-2 flex-col">
        <span className="text-[#F97316] font-semibold text-[24px]">
          Featured Products
        </span>

        {featured?.map((bestOffer, index) => (
          <InfiniteProducts
            params={{
              limit: 10,
              category_id: [bestOffer.id],
              sales_channel_id: ["sc_01HJD6P3JF9VQN5B4KPGRA3DHD"],
            }}
          />
        ))}
      </div>

      <div className="w-4/5 mx-auto flex gap-2 flex-col">
        <span className="text-[#F97316] font-semibold text-[24px]">
          Best Offers
        </span>
        {best_offers?.map((bestOffer, index) => (
          <InfiniteProducts
            params={{
              limit: 10,
              category_id: [bestOffer.id],
              sales_channel_id: ["sc_01HJD6P3JF9VQN5B4KPGRA3DHD"],
            }}
          />
        ))}
      </div>

      <div className="w-4/5 mx-auto flex gap-2 flex-col">
        <span className="text-[#F97316] font-semibold text-[24px] ">
          Whiskey
        </span>
        {whiskey?.map((bestOffer, index) => (
          <InfiniteProducts
            params={{
              limit: 10,
              category_id: [bestOffer.id],
              sales_channel_id: ["sc_01HJD6P3JF9VQN5B4KPGRA3DHD"],
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default FeaturedProducts
