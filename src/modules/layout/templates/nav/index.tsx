"use client"

import { useMobileMenu } from "@lib/context/mobile-menu-context"
import useToggleState from "@lib/hooks/use-toggle-state"
import Hamburger from "@modules/common/components/hamburger"
import CartDropdown from "@modules/layout/components/cart-dropdown"
import DropdownMenu from "@modules/layout/components/dropdown-menu"
import SideMenu from "@modules/layout/components/side-menu"
import MobileMenu from "@modules/mobile-menu/templates"
import DesktopSearchModal from "@modules/search/templates/desktop-search-modal"
import Link from "next/link"

const Nav = () => {
  const { toggle } = useMobileMenu()
  const {
    state: searchModalState,
    close: searchModalClose,
    open: searchModalOpen,
  } = useToggleState()

  return (
    <div className="sticky  top-0 inset-x-0 z-50 group">
      <header className="relative h-16   mx-auto border-b duration-200 bg-[#44403C] !text-white border-ui-border-base">
        <nav className=" flex justify-between items-center h-full w-4/5 mx-auto gap-4">
          <div className="flex-row gap-8 hidden md:flex flex-1">
            {/* order by phone */}
            <div className=" text-sm flex items-center justify-center gap-2">
              <span>Order by Phone: </span>
              <span className="text-[#F97316] font-medium">075-043-244</span>
            </div>

            {/* delivery */}
            <div className=" text-sm flex items-center justify-center gap-2">
              <span>Delivery Time: </span>
              <span className="text-[#F97316] font-medium">
                10:30 AM - 9:30 PM (NST)
              </span>
            </div>

            {/* cash or card */}
            <div className=" text-sm flex font-medium items-center justify-center gap-2">
              <span className="text-[#F97316]">CASH</span>
              <span>or</span>
              <span className="text-[#F97316]">CARD</span>
              <span>on Delivery</span>
            </div>
          </div>

          {/* right side */}
          <div className=" flex gap-3 font-medium text-sm  flex-1 md:justify-end justify-center">
            <span>Home</span>
            <span>Currency</span>
            <div>
              <span>Sign In /</span>
              <span className="text-[#F97316]"> Register</span>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Nav

{
  /* <header>
<nav className="txt-xsmall-plus text-ui-fg-subtle flex items-center justify-between w-full h-full text-small-regular">
          <div className="flex-1 basis-0 h-full flex items-center">
            <div className="block small:hidden">
              <Hamburger setOpen={toggle} />
            </div>
            <div className="hidden small:block h-full">
              <SideMenu searchModalOpen={searchModalOpen} />
            </div>
          </div>

          <div className="flex items-center h-full">
            <Link
              href="/"
              className="txt-compact-xlarge-plus hover:text-ui-fg-base uppercase"
            >
              Medusa Store
            </Link>
          </div>

          <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
            <div className="hidden small:flex items-center gap-x-6 h-full">
              {process.env.FEATURE_SEARCH_ENABLED && (
                <DesktopSearchModal
                  state={searchModalState}
                  close={searchModalClose}
                  open={searchModalOpen}
                />
              )}
              <Link className="hover:text-ui-fg-base" href="/account">
                Account
              </Link>
            </div>
            <CartDropdown />
          </div>
        </nav>
        <MobileMenu />
  </header> */
}
