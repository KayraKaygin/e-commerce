import React from 'react'
import "./Brands.css"
import BrandItem from './BrandItem'
export default function Brands() {
  return (
    <section className="brands">
    <div className="container">
      <ul className="brand-list">
        <BrandItem></BrandItem>
        <BrandItem></BrandItem>
        <BrandItem></BrandItem>
        <BrandItem></BrandItem>
        <BrandItem></BrandItem>
        <BrandItem></BrandItem>
      </ul>
    </div>
  </section>
  )
}
