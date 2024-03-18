import { useState } from 'react'
import './App.css';
import data from './data.json'
import HotelCard from './components/HotelCard'

function App() {

  fetch('http://localhost:3001/hotelDetails')
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      console.log(data)
    })

  return (
    <>
      <nav className='nav-bar'>
        <h1>Booking.com</h1>
      </nav>
      {
        data.hotelDetails.map((item, index) => (
          <HotelCard items={item} key={index} />
        ))      
      }
    </>
  )
}


export default App
