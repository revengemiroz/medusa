import {
  getCollectionsList,
  getCategoriesList,
  getCategoryByHandle,
} from "@lib/data"
import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import SkeletonHomepageProducts from "@modules/skeletons/components/skeleton-homepage-products"
import { Metadata } from "next"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Rakshi Pasal",
  description:
    "A performant frontend ecommerce starter template with Next.js 14 and Medusa.",
}

export default async function Home() {
  const { collections, count } = await getCollectionsList(0, 3)
  // const { product_categories } = await getCategoriesList(0, 10)
  const { product_categories } = await getCategoryByHandle(["rakshi-home-page"])
  console.log({ product_categories }, "1234")
  console.log(product_categories.length)

  return (
    <div>
      <Hero />
      <FeaturedProducts
        collections={collections}
        product_categories={product_categories}
      />
      {/* <Suspense fallback={<SkeletonHomepageProducts count={count} />}>
      </Suspense> */}
    </div>
  )
}
