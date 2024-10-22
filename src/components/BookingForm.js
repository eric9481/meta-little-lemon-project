import {
  FormControl,
  FormLabel,
  Input,
  Box,
  Select,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Button,
  Center,
} from "@chakra-ui/react";
import React, { useState } from "react";
import BookingPage from "./BookingPage";

const BookingForm = ({ availableTimes, dispatch, submitForm }) => {
  const marg = 6;

  const [date, setDate] = useState("");
  const [times, setTimes] = useState("");
  const [guests, setGuests] = useState("");
  const [option, setOption] = useState("");

  const handleDateChange = (event) => {
    const selectedDate = event.target.value;
    dispatch({ type: "UPDATE_TIMES", date: selectedDate });
    setDate(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { date, times, guests, option };
    submitForm(formData)
  };

  return (
    <>
      <BookingPage />

      <Box maxWidth="100%">
        <Box
          as="form"
          onSubmit={handleSubmit}
          maxWidth="860px"
          marginX="auto"
          paddingY={10}
        >
          <FormControl marginBottom={marg}>
            <FormLabel>Choose date</FormLabel>
            <Input type="date" onChange={handleDateChange}></Input>
          </FormControl>
          <FormControl marginBottom={marg}>
            <FormLabel>Choose Time</FormLabel>
            <Select
              placeholder="Select a time"
              onChange={(e) => setTimes(e.target.value)}
            >
              {availableTimes.map((time) => (
                <option key={time}>{time}</option>
              ))}
            </Select>
          </FormControl>
          <FormControl marginBottom={marg}>
            <FormLabel>Number of guests</FormLabel>
            <NumberInput
              defaultValue={1}
              min={1}
              max={10}
              onChange={(valueString) => setGuests(valueString)}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>
          <FormControl marginBottom={10}>
            <FormLabel>Occasion</FormLabel>
            <Select
              placeholder="Select an option"
              onChange={(e) => setOption(e.target.value)}
            >
              <option>Birthday</option>
              <option>Anniversary</option>
              <option>Other</option>
            </Select>
          </FormControl>
          <Center>
            <Button type="submit" bg="brand.200" size="md">
              Make Your Reservation
            </Button>
          </Center>
        </Box>
      </Box>
    </>
  );
};

export default BookingForm;
