import { getProductsList } from "@lib/data"
import usePreviews from "@lib/hooks/use-previews"
import getNumberOfSkeletons from "@lib/util/get-number-of-skeletons"
import repeat from "@lib/util/repeat"
import { StoreGetProductsParams } from "@medusajs/medusa"
import ProductPreview from "@modules/products/components/product-preview"
import SkeletonProductPreview from "@modules/skeletons/components/skeleton-product-preview"
import { useCart } from "medusa-react"
import { useEffect, useMemo } from "react"
import { useInView } from "react-intersection-observer"
import { useInfiniteQuery } from "@tanstack/react-query"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/shadcn/ui/carousel"

export type InfiniteProductsType = {
  params: StoreGetProductsParams
  sortBy?: SortOptions
}

const InfiniteProducts = ({ params, sortBy }: InfiniteProductsType) => {
  const { cart } = useCart()

  const { ref, inView } = useInView()

  const queryParams = useMemo(() => {
    const p: StoreGetProductsParams = {}

    if (cart?.id) {
      p.cart_id = cart.id
    }

    if (cart?.region?.currency_code) {
      p.currency_code = cart.region.currency_code
    }

    p.is_giftcard = false

    return {
      ...p,
      ...params,
    }
  }, [cart?.id, cart?.region, params])

  const { data, hasNextPage, fetchNextPage, isLoading, isFetchingNextPage } =
    useInfiniteQuery(
      [`infinite-products-store`, queryParams, cart],
      ({ pageParam }) => getProductsList({ pageParam, queryParams }),
      {
        getNextPageParam: (lastPage) => lastPage.nextPage,
      }
    )

  const previews = usePreviews({
    pages: data?.pages,
    region: cart?.region,
    sortBy,
  })

  console.log({ previews })

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, hasNextPage])

  return (
    <div>
      <Carousel opts={{ align: "start" }}>
        <CarouselContent>
          {previews.map((p) => (
            <CarouselItem
              key={p.id}
              className="md:basis-1/2 lg:basis-1/3 2xl:basis-1/5 "
            >
              <ProductPreview {...p} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      {isLoading &&
        !previews.length &&
        repeat(8).map((index) => (
          <div key={index}>
            <SkeletonProductPreview />
          </div>
        ))}
      {isFetchingNextPage &&
        repeat(getNumberOfSkeletons(data?.pages)).map((index) => (
          <div key={index}>
            <SkeletonProductPreview />
          </div>
        ))}
      {/* <div
        className="py-16 flex justify-center items-center text-small-regular text-gray-700"
        ref={ref}
      >
        <span ref={ref}></span>
      </div> */}
    </div>
  )
}

export default InfiniteProducts
