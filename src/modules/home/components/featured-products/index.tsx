import { getProductsList } from "@lib/data"
import usePreviews from "@lib/hooks/use-previews"
import { ProductCollection } from "@medusajs/medusa"
// import ProductRail from "./product-rail"
import ProductPreview from "@modules/products/components/product-preview"
import { useInfiniteQuery } from "@tanstack/react-query"
import useEmblaCarousel from "embla-carousel-react/components/useEmblaCarousel"

const FeaturedProducts = ({
  collections,
}: {
  collections: ProductCollection[]
}) => {
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
      <div className="w-4/5 mx-auto">
        <span className="text-[#F97316] font-semibold text-[24px]">
          Featured Products
        </span>
        <div className="grid gap-8 md:gap-16 mt-5 grid-cols-1 md:grid-cols-4">
          <ProductPreview
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
          <ProductPreview
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
          <ProductPreview
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
          <ProductPreview
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
        </div>
      </div>

      <div className="w-4/5 mx-auto">
        <span className="text-[#F97316] font-semibold text-[24px]">
          Best Offers
        </span>
        <div className="grid gap-8 md:gap-16 mt-5 grid-cols-1 md:grid-cols-4">
          <ProductPreview
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
          <ProductPreview
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
          <ProductPreview
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
          <ProductPreview
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
        </div>
      </div>

      <div className="w-4/5  mx-auto">
        <span className="text-[#F97316] font-semibold text-[24px]">
          Whiskey
        </span>
        <div className="grid  gap-8 md:gap-16 mt-5 grid-cols-1 md:grid-cols-4">
          <ProductPreview
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
          <ProductPreview
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
          <ProductPreview
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
          <ProductPreview
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
        </div>
      </div>
    </div>
  )
}

export default FeaturedProducts
