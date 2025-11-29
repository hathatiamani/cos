"use client"

import { useEffect } from "react"
import gsap from "gsap"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function HeroSection() {
  useEffect(() => {
    const tl = gsap.timeline()

    // Animate hero heading with staggered reveal
    tl.from(".hero-heading", 1.8, {
      y: 200,
      opacity: 0,
      ease: "power4.out",
      delay: 0.2,
    })

    // Animate horizontal dividers
    tl.from(
      ".hero-divider",
      1.8,
      {
        width: 0,
        ease: "power4.out",
      },
      "-=1.5",
    )

    // Animate subheading
    tl.from(
      ".hero-subheading",
      1.8,
      {
        opacity: 0,
        y: 100,
        ease: "power4.out",
      },
      "-=1.5",
    )

    // Animate CTA button
    tl.from(
      ".hero-cta",
      1.8,
      {
        opacity: 0,
        y: 50,
        ease: "power4.out",
      },
      "-=1.5",
    )

    // Animate product line items
    tl.from(
      ".product-line-item",
      1.8,
      {
        opacity: 0,
        x: -50,
        ease: "power4.out",
        stagger: {
          amount: 0.3,
        },
      },
      "-=1.2",
    )
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center from-background via-secondary/5 to-muted overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 -z-10">
        <Image src="https://i.pinimg.com/736x/29/8e/be/298ebe28db55a912733f3b45c9a2b0d5.jpg" alt="Hero background"
         className="w-full h-full object-cover"
         width={1920}
         height={1080}
         />
        <div className="absolute inset-0 bg-background/50"></div>
      </div>

      <div className="z-10 px-4 max-w-5xl w-full flex flex-col items-center">
        {/* Top divider */}
        <div className="hero-divider h-px bg-primary/40 mb-16 w-24"></div>

        {/* Main Heading with Reveal Effect */}
        <div className="text-center mb-8 overflow-hidden">
          <h1 className="hero-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-foreground leading-tight text-balance">
            Premium
            <span className="block text-primary font-light">Beauty & Skincare</span>
          </h1>
        </div>

        {/* Bottom divider */}
        <div className="hero-divider h-px bg-primary/40 mb-16 w-24"></div>

        {/* Subheading */}
        <div className="hero-subheading text-center mb-12">
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-4">
            Luxury formulations infused with CBD & botanical extracts
          </p>
          <p className="text-sm sm:text-base text-muted-foreground/80">
            Crafted to deliver visible results while maintaining your skins natural balance
          </p>
        </div>

        {/* CTA Button */}
        <div className="hero-cta mb-20">
          <Link href="/shop">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base font-medium transition-all hover:shadow-lg"
            >
              Explore Collection
            </Button>
          </Link>
        </div>

        
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
