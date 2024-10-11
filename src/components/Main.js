import { Box, Heading, Text } from '@chakra-ui/react'
import { useReducer, useState } from 'react'
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
import BookingForm from './BookingForm'


export const updateTimes = (state, action) => {
  return state;
}

export const initializeTimes = () => {
  return [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]      
}

const Main = () => {
  

  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  return (
    <Box as='main'>
      
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/bookings' element={<BookingForm availableTimes={availableTimes} dispatch={dispatch} />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/order' element={<OrderOnline />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      
    </Box>
  )
}

export default Main