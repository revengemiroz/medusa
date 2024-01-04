"use client"

import clsx from "clsx"
import { useCollections, useProductCategories } from "medusa-react"
import { Text } from "@medusajs/ui"
import Link from "next/link"
import MedusaCTA from "../medusa-cta"

import FooterPaymentIcon from "@modules/common/icons/footer-payment-icon"
import InstagramIcon from "@modules/common/icons/instagram"
import FacebookIcon from "@modules/common/icons/facebook"
import TwitterIcon from "@modules/common/icons/twitter"
import YoutubeIcon from "@modules/common/icons/youtube"

const FooterNav = () => {
  const { collections } = useCollections()
  const { product_categories } = useProductCategories()

  return (
    <div className="border-t border-ui-border-base py-6 px-30 w-screen text-white bg-[#44403C] ">
      <div className=" flex flex-col gap-10 md:gap-16 w-4/5 mx-auto ">
        <div className=" grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-24 ">
          <div className=" flex flex-col gap-3 ">
            <span className="text-[#F97316] text-2xl font-bold">CHEERX</span>
            <span className="text-sm">
              We are Nepal&apos;s best online liquor store. Explore our latest
              brands, flavours and taste
            </span>

            <div className="flex flex-col ">
              <span className="mb-2 text-[#A1A1A1] font-semibold">
                Quick Links
              </span>

              <div className=" flex flex-row gap-2">
                <span>
                  <InstagramIcon />
                </span>
                <span>
                  <FacebookIcon />
                </span>
                <span>
                  <TwitterIcon />
                </span>
                <span>
                  <YoutubeIcon />
                </span>
              </div>
            </div>
          </div>

          <div className=" flex flex-col font-medium ">
            <span className="mb-4 text-[#A1A1A1] font-semibold">
              Quick Links
            </span>
            <div className="  flex flex-col text-sm gap-3 ">
              <span>About</span>
              <span>Shop</span>
              <span>Terms & Conditions</span>
              <span>Refund Policy</span>
              <span>Privacy Policy</span>
            </div>
          </div>
          <div className=" flex flex-col">
            <span className="text-[#A1A1A1] font-semibold mb-2">
              Payment Methods
            </span>

            <FooterPaymentIcon />
          </div>
          <div className=" flex flex-col">
            <span className="text-[#A1A1A1] font-semibold mb-4">
              Contact Us
            </span>
            <div className="  flex flex-col text-sm gap-3 ">
              <span>New Baneshwor, Kathmandu</span>
              <span>info@myemail.com</span>
              <span>01-543-235</span>
              <span>980000003</span>
            </div>
          </div>
        </div>
        <div className="text-sm ">
          Copyright © 2023 CHEERX. All Rights Reserverd.
        </div>
      </div>
    </div>
  )
}

export default FooterNav
