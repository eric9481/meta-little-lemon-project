import { Box, Heading, Text } from '@chakra-ui/react'
import { useReducer, useState } from 'react'
import CallToAction from './CallToAction'
import Specials from './Specials'
import CardComp from './CardComp'
import CardTestimonial from './CardTestimonial'
import Testimonials from './Testimonials'
import Chicago from './Chicago'
import { Route, Routes, useNavigate, } from 'react-router-dom'
import Homepage from './Homepage'
import BookingPage from './BookingPage'
import Menu from './Menu'
import OrderOnline from './OrderOnline'
import Login from './Login'
import BookingForm from './BookingForm'
import ConfirmedBooking from './ConfirmedBooking'
import { Navigate } from 'react-router-dom'

const seededRandom = function (seed) {
  var m = 2**35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
      return (s = s * a % m) / m;
  };
}

const fetchAPI = function(date) {
  let result = [];
  let random = seededRandom(date.getDate());

  for(let i = 17; i <= 23; i++) {
      if(random() < 0.5) {
          result.push(i + ':00');
      }
      if(random() < 0.5) {
          result.push(i + ':30');
      }
  }
  return result;
};
const submitAPI = function(formData) {
  return true;
};


export const updateTimes = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      return fetchAPI(new Date(action.date)); 
    default:
      return state;
  }
};


export const initializeTimes = () => {
  const today = new Date();
  return fetchAPI(today); 
};


const Main = () => {
  

  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  const navigate = useNavigate()

  const submitForm = (formData) => {
    const isSubmitted = submitAPI(formData);
    if (isSubmitted) {
      navigate('/bookings/confirmed')
    }
    }

  return (
    <Box as='main'>
      
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/bookings' element={<BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/order' element={<OrderOnline />} />
          <Route path='/login' element={<Login />} />
          <Route path='/bookings/confirmed' element={<ConfirmedBooking />} />
        </Routes>
      
    </Box>
  )
}

export default Main