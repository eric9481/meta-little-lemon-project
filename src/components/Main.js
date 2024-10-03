import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import CallToAction from './CallToAction'
import Specials from './Specials'
import CardComp from './CardComp'
import CardTestimonial from './CardTestimonial'
import Testimonials from './Testimonials'
import Chicago from './Chicago'
import { Route, Routes, } from 'react-router-dom'
import Homepage from './Homepage'
import BookingPage from './BookingPage'
import Menu from './Menu'
import OrderOnline from './OrderOnline'
import Login from './Login'


const Main = () => {
  return (
    <Box as='main'>
      
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/bookings' element={<BookingPage/>} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/order' element={<OrderOnline />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      
    </Box>
  )
}

export default Main