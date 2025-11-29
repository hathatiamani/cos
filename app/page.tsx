"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect } from "react"
import gsap from "gsap"
import { Button } from "@/components/ui/button"
import HeroSection from "@/components/hero-section"

export default function Home() {
  useEffect(() => {
    // Featured section animations
    const tl = gsap.timeline({ delay: 2 })

    tl.from(".featured-title", 1.2, {
      y: 100,
      opacity: 0,
      ease: "power4.out",
    })

    tl.from(
      ".featured-divider",
      1.2,
      {
        width: 0,
        ease: "power4.out",
      },
      "-=0.8",
    )

    tl.from(
      ".featured-item",
      1.2,
      {
        y: 80,
        opacity: 0,
        ease: "power4.out",
        stagger: {
          amount: 0.3,
        },
      },
      "-=1",
    )

    // About section animations
    setTimeout(() => {
      gsap.from(".about-title", {
        duration: 1.2,
        y: 100,
        opacity: 0,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".about-section",
          start: "top 80%",
        },
      })

      gsap.from(".about-divider", {
        duration: 1.2,
        width: 0,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".about-section",
          start: "top 80%",
        },
      })

      gsap.from(".about-content", {
        duration: 1.2,
        y: 80,
        opacity: 0,
        ease: "power4.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: ".about-section",
          start: "top 80%",
        },
      })
    }, 500)
  }, [])

  // Product data with real image URLs
  const products = [
    {
      id: 1,
      name: "CBD Recovery Serum",
      price: "4,500 DA",
      description: "Premium CBD-infused serum for skin recovery",
      image: "https://i.pinimg.com/736x/c7/cd/39/c7cd39ac05db6ab6c2eb01fd796452c4.jpg",
      code: "01"
    },
    {
      id: 2,
      name: "Water Filtration Mask",
      price: "2,800 DA",
      description: "Hydrating mask with water filtration technology",
      image: "https://i.pinimg.com/1200x/66/bb/f3/66bbf3d309fc9f90123c7d355c12f946.jpg",
      code: "02"
    },
    {
      id: 3,
      name: "Bubble Tea Shampoo",
      price: "3,200 DA",
      description: "Nourishing shampoo with bubble tea extracts",
      image: "https://i.pinimg.com/1200x/a4/33/21/a43321eb8a8b321c38f8e5a838a30a6e.jpg",
      code: "03"
    }
  ]

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">THE THALASSO</div>
          <div className="hidden md:flex gap-8">
            <Link href="/shop" className="text-foreground hover:text-primary transition">
              Shop
            </Link>
            <Link href="#about" className="text-foreground hover:text-primary transition">
              About
            </Link>
            <Link href="#contact" className="text-foreground hover:text-primary transition">
              Contact
            </Link>
          </div>
          <Link href="/shop">
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              Shop Now
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <HeroSection />

      {/* Featured Products */}
      <section className="py-24 bg-background relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-4 flex items-center gap-4">
            <div className="featured-divider h-px bg-primary/40 w-12"></div>
            <p className="text-sm font-semibold text-primary uppercase tracking-widest">Featured Collection</p>
          </div>

          <h2 className="featured-title text-5xl sm:text-6xl font-light text-foreground mb-4 text-balance">
            Our Best<span className="text-primary">sellers</span>
          </h2>

          <div className="featured-divider h-px bg-border my-12 w-full"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <Link key={product.id} href={`/product/${product.id}`} className="group featured-item">
                <div className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="aspect-square bg-muted flex items-center justify-center overflow-hidden relative">
                    <Image
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      width={400}
                      height={400}
                      priority={product.id === 1}
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-primary font-semibold mb-2">{product.code}</div>
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition">
                      {product.name}
                    </h3>
                    <p className="text-muted-foreground mb-4">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-primary">
                        {product.price}
                      </span>
                      <Button size="sm" variant="outline">
                        View
                      </Button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section py-24 bg-muted relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-4 flex items-center gap-4">
            <div className="about-divider h-px bg-primary/40 w-12"></div>
            <p className="text-sm font-semibold text-primary uppercase tracking-widest">About</p>
          </div>

          <h2 className="about-title text-5xl sm:text-6xl font-light text-foreground mb-12 text-balance">
            Luxury Skincare<span className="text-primary"> Redefined</span>
          </h2>

          <div className="about-content grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="https://i.pinimg.com/1200x/a4/5f/d8/a45fd8650325326d7cfc1a4348f66ba8.jpg"
                alt="Luxury skincare product in hand"
                className="rounded-lg shadow-lg w-full h-auto"
                width={600}
                height={400}
              />
            </div>
            <div className="space-y-6">
              <p className="text-lg text-foreground leading-relaxed">
                The Thalasso is dedicated to creating premium beauty and skincare solutions that combine nature with
                science. Our formulations are crafted with the finest ingredients, including CBD and botanical extracts.
              </p>

              <div className="h-px bg-border my-8"></div>

              <p className="text-lg text-foreground leading-relaxed">
                Every product is designed to deliver visible results while maintaining the integrity of your skins
                natural balance. We believe that true luxury is found in the details—from ingredient sourcing to
                packaging.
              </p>

              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground mt-4">Learn More</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-light text-foreground mb-4">Contact Us</h2>
          <p className="text-muted-foreground mb-12 text-lg">Get in touch with us for any inquiries</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-foreground mb-4">Email: contact@thethalasso.com</p>
              <p className="text-lg text-foreground mb-4">Phone: +213 123 456 789</p>
              <p className="text-lg text-foreground mb-4">Address: 123 Luxury Lane, Algiers, Algeria</p>
            </div>
            <div>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="mt-1 block w-full rounded-md border border-input bg-background py-2 px-3 text-sm focus:border-primary focus:ring-primary focus:ring-1 focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="mt-1 block w-full rounded-md border border-input bg-background py-2 px-3 text-sm focus:border-primary focus:ring-primary focus:ring-1 focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    className="mt-1 block w-full rounded-md border border-input bg-background py-2 px-3 text-sm focus:border-primary focus:ring-primary focus:ring-1 focus:outline-none"
                  />
                </div>
                <div>
                  <Button type="submit" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    Send Message
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">THE THALASSO</h3>
              <p className="text-sm opacity-80">Premium beauty and skincare solutions</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Shop</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/shop" className="hover:opacity-80 transition">
                    All Products
                  </Link>
                </li>
                <li>
                  <Link href="/shop" className="hover:opacity-80 transition">
                    Collections
                  </Link>
                </li>
                <li>
                  <Link href="/shop" className="hover:opacity-80 transition">
                    New Arrivals
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:opacity-80 transition">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-80 transition">
                    Shipping Info
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-80 transition">
                    Returns
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:opacity-80 transition">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-80 transition">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-center text-sm opacity-80">
            <p>&copy; 2025 The Thalasso. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}