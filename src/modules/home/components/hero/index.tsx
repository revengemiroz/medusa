import { Button, Heading } from "@medusajs/ui"
import InteractiveLink from "@modules/common/components/interactive-link"
import { Github } from "@medusajs/icons"
import Image from "next/image"

import HeroImage from "@public/Hero/hero.png"

const Hero = () => {
  return (
    <div className=" h-full">
      <div className="relative flex items-center justify-center p-6 md:py-12">
        <Image
          src={HeroImage}
          alt="hero"
          className="md:h-[500px] object-scale-down bg-slate-100 rounded-md w-full md:w-4/5"
        />
      </div>
    </div>
  )
}

export default Hero
