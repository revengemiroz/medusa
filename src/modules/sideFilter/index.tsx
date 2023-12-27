import React from "react"

function Index() {
  return (
    <div className=" flex flex-col gap-6 h-full w-full">
      <div className="bg-[#F5F5F5] h-fit p-5">
        <span className="text-[#727272] font-bold text-sm">Categories</span>

        <div className="mt-3 flex flex-col gap-3">
          <div className="flex flex-row gap-2 items-center">
            <input type="checkbox" />
            <span className="text-[#727272] font-medium text-sm">
              Imported Vodka
            </span>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <input type="checkbox" />
            <span className="text-[#727272] font-medium text-sm">
              Imported Vodka
            </span>
          </div>
        </div>
      </div>

      <div className="bg-[#F5F5F5]  p-5">
        <span className="text-[#727272] font-bold text-sm">Brands</span>

        <div className="mt-3 flex flex-col gap-3">
          <div className="flex flex-row gap-2 items-center">
            <input type="checkbox" />
            <span className="text-[#727272] font-medium text-sm">
              100 Pipers
            </span>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <input type="checkbox" />
            <span className="text-[#727272] font-medium text-sm">Arna</span>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <input type="checkbox" />
            <span className="text-[#727272] font-medium text-sm">Gorkha</span>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <input type="checkbox" />
            <span className="text-[#727272] font-medium text-sm">
              Budweiser
            </span>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <input type="checkbox" />
            <span className="text-[#727272] font-medium text-sm">Corona</span>
          </div>
        </div>
      </div>

      <div className="bg-[#F5F5F5]  p-5">
        <span className="text-[#727272] font-bold text-sm">Country</span>

        <div className="mt-3 flex flex-col gap-3">
          <div className="flex flex-row gap-2 items-center">
            <input type="checkbox" id="myCheckbox" className="bg-red-200" />

            <span className="text-[#727272] font-medium text-sm">
              100 Pipers
            </span>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <input type="checkbox" />
            <span className="text-[#727272] font-medium text-sm">
              Netherland
            </span>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <input type="checkbox" />
            <span className="text-[#727272] font-medium text-sm">India</span>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <input type="checkbox" />
            <span className="text-[#727272] font-medium text-sm">Nepal</span>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <input type="checkbox" />
            <span className="text-[#727272] font-medium text-sm">Ireland</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index
