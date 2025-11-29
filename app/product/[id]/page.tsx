"use client"

import type React from "react"

import Link from "next/link"
import { useState, useEffect } from "react"
import gsap from "gsap"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function ProductPage({ params }: { params: { id: string } }) {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    city: "Algiers",
    delivery: "home",
    quantity: 1,
  })

  useEffect(() => {
    // Product page animations
    const tl = gsap.timeline({ delay: 0.3 })

    tl.from(".product-header", 1.2, {
      y: 100,
      opacity: 0,
      ease: "power4.out",
    })

    tl.from(
      ".product-price",
      1.2,
      {
        y: 50,
        opacity: 0,
        ease: "power4.out",
      },
      "-=0.8",
    )

    tl.from(
      ".product-divider",
      1.2,
      {
        width: 0,
        ease: "power4.out",
      },
      "-=1",
    )

    tl.from(
      ".product-details",
      1.2,
      {
        y: 80,
        opacity: 0,
        ease: "power4.out",
      },
      "-=1",
    )

    tl.from(
      ".order-form",
      1.2,
      {
        y: 100,
        opacity: 0,
        ease: "power4.out",
      },
      "-=0.8",
    )
  }, [])

const productData: Record<string, { name: string; price: number; description: string; image: string }> = {
  "1": {
    name: "CBD Recovery Serum",
    price: 4500,
    description: "Premium CBD-infused serum for deep recovery and skin regeneration. Contains natural botanical extracts and advanced actives.",
    image: "https://i.pinimg.com/1200x/16/45/88/164588c531c41b5fd6af091beeb6cb88.jpg",
  },
  "2": {
    name: "Water Filtration Mask",
    price: 2800,
    description: "Luxurious facial mask with water filtration technology. Cleanses and balances skin naturally while providing deep hydration.",
    image: "https://i.pinimg.com/1200x/66/bb/f3/66bbf3d309fc9f90123c7d355c12f946.jpg",
  },
  "3": {
    name: "Bubble Tea Shampoo",
    price: 3200,
    description: "Nourishing shampoo enriched with bubble tea extracts. Gentle cleansing for all hair types with natural shine enhancement.",
    image: "https://i.pinimg.com/1200x/a4/33/21/a43321eb8a8b321c38f8e5a838a30a6e.jpg",
  },
  "4": {
    name: "Hydrating Cream",
    price: 3800,
    description: "Intensive hydrating cream with moisture-locking technology. Provides 24-hour hydration for soft, supple skin.",
    image: "https://i.pinimg.com/736x/ea/8f/52/ea8f52c5fa137df759e62092e922a996.jpg",
  },
  "5": {
    name: "Cleansing Oil",
    price: 2500,
    description: "Gentle yet effective cleansing oil that removes impurities while maintaining skin's natural moisture barrier.",
    image: "https://i.pinimg.com/1200x/d2/5c/0a/d25c0aca5ed85aaab84e07423b708c79.jpg",
  },
  "6": {
    name: "Toner Balance",
    price: 2200,
    description: "pH-balancing toner that refines pores and prepares skin for optimal absorption of subsequent treatments.",
    image: "https://i.pinimg.com/1200x/d4/e8/e9/d4e8e98d23db098d5e65d83a2e1e6335.jpg",
  }
}

  const product = productData[params.id] || productData["1"]
  const deliveryFee = formData.delivery === "home" ? 500 : 0
  const total = product.price * formData.quantity + deliveryFee

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: name === "quantity" ? Number.parseInt(value) : value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Order placed!\n\nCustomer: ${formData.fullName}\nPhone: ${formData.phone}\nTotal: ${total} DA`)
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-primary">
            THE THALASSO
          </Link>
          <Link href="/shop">
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              Back to Shop
            </Button>
          </Link>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Product Image */}
          <div className="flex items-center justify-center bg-muted rounded-lg overflow-hidden product-image">
            <Image src={product.image || "/placeholder.svg"} alt={product.name}
             className="w-full h-full object-cover"
             width={400}
             height={400}
             />
          </div>

          {/* Product Info */}
          <div>
            <div className="mb-4 flex items-center gap-4">
              <div className="product-divider h-px bg-primary/40 w-12"></div>
              <p className="text-sm font-semibold text-primary uppercase tracking-widest">Product</p>
            </div>

            <h1 className="product-header text-5xl font-light text-foreground mb-6 text-balance">{product.name}</h1>

            <div className="product-price flex items-baseline gap-4 mb-8">
              <span className="text-5xl font-bold text-primary">{product.price} DA</span>
            </div>

            <div className="product-divider h-px bg-border my-8"></div>

            <p className="product-details text-lg text-muted-foreground mb-8 leading-relaxed">{product.description}</p>

            <div className="mb-8">
              <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wide">Product Details</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span>Premium natural ingredients</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span>Dermatologically tested</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span>Suitable for all skin types</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span>Cruelty-free and eco-friendly</span>
                </li>
              </ul>
            </div>

            <div className="mb-8">
              <label className="text-sm font-semibold text-foreground mb-2 block">Quantity</label>
              <select
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground"
              >
                {[1, 2, 3, 4, 5].map((q) => (
                  <option key={q} value={q}>
                    {q}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Order Form */}
        <div className="order-form bg-card rounded-lg p-8 border border-border">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Customer Information */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-semibold text-foreground mb-6">Customer Information</h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Select City *</label>
                  <select
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="Algiers">Algiers</option>
                    <option value="Oran">Oran</option>
                    <option value="Constantine">Constantine</option>
                    <option value="Annaba">Annaba</option>
                    <option value="Setif">Setif</option>
                    <option value="Blida">Blida</option>
                    <option value="Tlemcen">Tlemcen</option>
                    <option value="Bejaia">Bejaia</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Delivery Options */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-semibold text-foreground mb-6">Delivery Method</h2>

              <div className="space-y-3">
                <label className="flex items-center p-4 border border-border rounded-lg cursor-pointer hover:bg-muted transition">
                  <input
                    type="radio"
                    name="delivery"
                    value="home"
                    checked={formData.delivery === "home"}
                    onChange={handleChange}
                    className="w-4 h-4 accent-primary"
                  />
                  <span className="ml-3 font-medium text-foreground">Home Delivery</span>
                </label>

                <label className="flex items-center p-4 border border-border rounded-lg cursor-pointer hover:bg-muted transition">
                  <input
                    type="radio"
                    name="delivery"
                    value="office"
                    checked={formData.delivery === "office"}
                    onChange={handleChange}
                    className="w-4 h-4 accent-primary"
                  />
                  <span className="ml-3 font-medium text-foreground">Office Delivery</span>
                </label>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-semibold text-foreground mb-6">Order Summary</h2>

              <div className="bg-background rounded-lg p-4 border border-border space-y-3 mb-6">
                <div className="flex justify-between text-foreground">
                  <span>Product Price:</span>
                  <span className="font-medium">{(product.price * formData.quantity).toLocaleString()} DA</span>
                </div>
                <div className="flex justify-between text-foreground">
                  <span>Delivery Fee:</span>
                  <span className="font-medium">{deliveryFee.toLocaleString()} DA</span>
                </div>
                <div className="border-t border-border pt-3 flex justify-between text-lg font-bold text-primary">
                  <span>Total:</span>
                  <span>{total.toLocaleString()} DA</span>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 font-semibold"
              >
                Place Order
              </Button>
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}
