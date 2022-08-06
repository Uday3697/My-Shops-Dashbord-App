import React from 'react'
import { Cards } from '../Cards/Cards';
import './MainDash.css';
import  Table from "../Table/Table"

export const MainDash = () => {
  return (
    <div className="MainDash">
        <h1>Dashboard</h1>
        <Cards/>
        <Table />
    </div>
  )
}
