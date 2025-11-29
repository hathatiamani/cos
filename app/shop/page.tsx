"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import gsap from "gsap"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function ShopPage() {
  const [filter, setFilter] = useState("all")

  useEffect(() => {
    // Shop page animations
    const tl = gsap.timeline({ delay: 0.3 })

    tl.from(".shop-title", 1.2, {
      y: 100,
      opacity: 0,
      ease: "power4.out",
    })

    tl.from(
      ".shop-divider",
      1.2,
      {
        width: 0,
        ease: "power4.out",
      },
      "-=0.8",
    )

    tl.from(
      ".filter-btn",
      1.2,
      {
        y: 50,
        opacity: 0,
        ease: "power4.out",
        stagger: {
          amount: 0.2,
        },
      },
      "-=1",
    )

    tl.from(
      ".product-card",
      1.2,
      {
        y: 80,
        opacity: 0,
        ease: "power4.out",
        stagger: {
          amount: 0.4,
        },
      },
      "-=0.8",
    )
  }, [])

  const products = [
    {
      id: 1,
      name: "CBD Recovery Serum",
      price: 4500,
      category: "serums",
      image: "https://i.pinimg.com/1200x/16/45/88/164588c531c41b5fd6af091beeb6cb88.jpg",
    },
    {
      id: 2,
      name: "Water Filtration Mask",
      price: 2800,
      category: "masks",
      image: "https://i.pinimg.com/1200x/66/bb/f3/66bbf3d309fc9f90123c7d355c12f946.jpg",
    },
    {
      id: 3,
      name: "Bubble Tea Shampoo",
      price: 3200,
      category: "hair",
      image: "https://i.pinimg.com/1200x/a4/33/21/a43321eb8a8b321c38f8e5a838a30a6e.jpg",
    },
    {
      id: 4,
      name: "Hydrating Cream",
      price: 3800,
      category: "creams",
      image: "https://i.pinimg.com/736x/ea/8f/52/ea8f52c5fa137df759e62092e922a996.jpg",
    },
    {
      id: 5,
      name: "Cleansing Oil",
      price: 2500,
      category: "cleansers",
      image: "https://i.pinimg.com/1200x/d2/5c/0a/d25c0aca5ed85aaab84e07423b708c79.jpg",
    },
    {
      id: 6,
      name: "Toner Balance",
      price: 2200,
      category: "toners",
      image: "https://i.pinimg.com/1200x/d4/e8/e9/d4e8e98d23db098d5e65d83a2e1e6335.jpg",
    },
  ]

  const filteredProducts = filter === "all" ? products : products.filter((p) => p.category === filter)

  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-primary">
            THE THALASSO
          </Link>
          <Link href="/">
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              Back Home
            </Button>
          </Link>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-4 flex items-center gap-4">
          <div className="shop-divider h-px bg-primary/40 w-12"></div>
          <p className="text-sm font-semibold text-primary uppercase tracking-widest">Collection</p>
        </div>

        <h1 className="shop-title text-5xl sm:text-6xl font-light text-foreground mb-4 text-balance">
          Our <span className="text-primary">Collection</span>
        </h1>

        <p className="text-muted-foreground mb-8 text-lg">Browse our premium skincare and beauty products</p>

        <div className="shop-divider h-px bg-border my-12"></div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-12">
          <button
            onClick={() => setFilter("all")}
            className={`filter-btn px-4 py-2 rounded-full transition ${
              filter === "all" ? "bg-primary text-primary-foreground" : "bg-muted text-foreground hover:bg-secondary"
            }`}
          >
            All Products
          </button>
          <button
            onClick={() => setFilter("serums")}
            className={`filter-btn px-4 py-2 rounded-full transition ${
              filter === "serums" ? "bg-primary text-primary-foreground" : "bg-muted text-foreground hover:bg-secondary"
            }`}
          >
            Serums
          </button>
          <button
            onClick={() => setFilter("masks")}
            className={`filter-btn px-4 py-2 rounded-full transition ${
              filter === "masks" ? "bg-primary text-primary-foreground" : "bg-muted text-foreground hover:bg-secondary"
            }`}
          >
            Masks
          </button>
          <button
            onClick={() => setFilter("creams")}
            className={`filter-btn px-4 py-2 rounded-full transition ${
              filter === "creams" ? "bg-primary text-primary-foreground" : "bg-muted text-foreground hover:bg-secondary"
            }`}
          >
            Creams
          </button>
          <button
            onClick={() => setFilter("hair")}
            className={`filter-btn px-4 py-2 rounded-full transition ${
              filter === "hair" ? "bg-primary text-primary-foreground" : "bg-muted text-foreground hover:bg-secondary"
            }`}
          >
            Hair Care
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <Link key={product.id} href={`/product/${product.id}`} className="group product-card">
              <div className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                <div className="aspect-square bg-muted flex items-center justify-center overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    width={400}
                    height={400}
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-primary font-semibold mb-2">{String(product.id).padStart(2, "0")}</div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{product.price} DA</span>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                    >
                      View
                    </Button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
