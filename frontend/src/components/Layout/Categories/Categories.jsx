import React from "react";
import "./Categories.css"
import Categoryitem from "./Categoryitem";
export default function Categories() {
  return (
    <section className="categories">
      <div className="container">
        <div className="section-title">
          <h2>All Categories</h2>
          <p>Summer Collection New Morden Design</p>
        </div>
        <ul className="category-list">
        <Categoryitem></Categoryitem>
        
        </ul>
      </div>
    </section>
  );
}
