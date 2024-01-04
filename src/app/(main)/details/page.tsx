"use client"

import FacebookIcon from "@modules/common/icons/facebook"
import TwitterIcon from "@modules/common/icons/twitter"
import YoutubeIcon from "@modules/common/icons/youtube"
import InstagramIcon from "@modules/common/icons/instagram"
import ProductPreview from "@modules/products/components/product-preview"
import React from "react"
import {
  LucideInstagram,
  LucideYoutube,
  LucideFacebook,
  LucideTwitter,
} from "lucide-react"

function page() {
  return (
    <div className=" h-full py-12">
      <div className=" flex flex-col space-y-12 w-4/5 mx-auto h-full">
        <div className="  flex flex-row gap-12 ">
          <div className="w-1/3 ">
            <div className=" max-w-sm">
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

              <div className=" flex flex-col gap-1 mt-4">
                <span className="text-[#A1A1A1] font-medium text-base">
                  Share on:
                </span>

                <div className="flex flex-row gap-2">
                  <span>
                    <LucideInstagram color="#727272" size={20} />
                  </span>
                  <span>
                    <LucideFacebook color="#727272" size={20} />
                  </span>
                  <span>
                    <LucideTwitter color="#727272" size={20} />
                  </span>
                  <span>
                    <LucideYoutube color="#727272" size={20} />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex-1">
            <div className="text-[#F97316] font-bold text-xl">
              Monte alban Mezcal with Agave Worm 750ML
            </div>

            <div className="grid grid-cols-4 my-8">
              <div className="flex flex-col gap-2">
                <span className="text-[#A1A1A1] text-sm font-semibold">
                  Volume
                </span>
                <span className="text-[#A1A1A1] text-sm font-semibold">
                  Brand
                </span>
                <span className="text-[#A1A1A1] text-sm font-semibold">
                  Category
                </span>
                <span className="text-[#A1A1A1] text-sm font-semibold">
                  Country
                </span>
                <span className="text-[#A1A1A1] text-sm font-semibold">
                  Alcohol
                </span>
              </div>

              <div className="flex flex-col  gap-2">
                <span className="text-[#F97316] font-medium text-sm">
                  750ML
                </span>
                <span className="text-[#F97316] font-medium text-sm">
                  Monte Alban
                </span>
                <span className="text-[#F97316] font-medium text-sm">
                  Liquor / Tequilo
                </span>
                <span className="text-[#F97316] font-medium text-sm">
                  Mexico
                </span>
                <span className="text-[#F97316] font-medium text-sm">50%</span>
              </div>
            </div>

            <p className="text-[#727272] text-sm">
              Monte Alban Mezcal is made from 100% Espadin agave sourced from
              Oaxaca. This tequila possesses a moderately smoky and salty
              character with a mildly fruity finish. The authentic Mezcal with a
              worm in the bottle. A unique taste...and a strong appeal to
              today's trend-setting drinkers. ~ The Legend ~ Traditionally,
              every bottle of true Mezcal made in Oaxaca Province contains an
              agave worm. Since the agave worm inhabits only the certain species
              of agave cactus that Mezcal is made from the agave worm signifies
              genuine Mezcal, made the traditional way. The worm isn't there for
              looks. It is meant to be eaten. Because it is believed by many
              that within the worm lies the key. Some say it unlocks the door to
              a world of wondrous experiences. Others say it sets free a spirit
              of celebration. Still others say than eating the worm locks in the
              enchantment and excitement of Mezcal. The worm then holds
              different keys for different people. And there's only one way to
              see what yours will open.Try it!
            </p>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-2">
          {Array.from([1, 2, 3, 4]).map((product) => (
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
          ))}
        </div>
      </div>
    </div>
  )
}

export default page
