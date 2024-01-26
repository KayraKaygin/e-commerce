import React from 'react'
import "./Campaigns.css"
import Campaignitem from './Campaignitem'
export default function Campaigns() {
  return (
    <section className="campaigns">
    <div className="container">
      <div className="campaigns-wrapper">
        <Campaignitem></Campaignitem>
        <Campaignitem></Campaignitem>
      </div>
      <div className="campaigns-wrapper">
      <Campaignitem></Campaignitem>
      <Campaignitem></Campaignitem>
      </div>
    </div>
  </section>
  )
}
