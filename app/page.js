"use client"
import Image from "next/image"
import Hero from "@/components/Home"
import Navbar from "@/components/Navbar"
export default function Home() {
  return (
    <main className="h-full w-full">
      <Navbar />
      <Hero />
    </main>
  )
}
