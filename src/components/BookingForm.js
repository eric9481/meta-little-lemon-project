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
} from "@chakra-ui/react";
import React, { useState } from "react";

const BookingForm = () => {
  const marg = 6;

  const [date, setDate] = useState("");
  const [times, setTimes] = useState("");
  const [guests, setGuests] = useState("");
  const [option, setOption] = useState("");
  const [availableTimes, setAvailableTimes] = useState(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'])

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for form submission can go here
    console.log({ date, times, guests, option });
  };

  return (
    <Box maxWidth="100%">
      <Box as="form" onSubmit={handleSubmit} maxWidth="860px" marginX="auto" paddingY={10}>
        <FormControl marginBottom={marg}>
          <FormLabel>Choose date</FormLabel>
          <Input type="date" onChange={(e) => setDate(e.target.value)}></Input>
        </FormControl>
        <FormControl marginBottom={marg}>
          <FormLabel>Choose Time</FormLabel>
          <Select placeholder="Select a time" onChange={(e) => setTimes(e.target.value)}>
            {availableTimes.map((time) => (
                <option key={time}>{time}</option>
            ))}
          </Select>
        </FormControl>
        <FormControl marginBottom={marg}>
          <FormLabel>Number of guests</FormLabel>
          <NumberInput defaultValue={1} min={1} max={10} onChange={(valueString) => setGuests(valueString)}>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>
        <FormControl marginBottom={10}>
          <FormLabel>Occasion</FormLabel>
          <Select placeholder="Select an option" onChange={(e) => setOption(e.target.value)}>
            <option>Birthday</option>
            <option>Anniversary</option>
            <option>Other</option>
          </Select>
        </FormControl>
        <Button type="submit" bg="brand.200" size="md">
          Make Your Reservation
        </Button>
      </Box>
    </Box>
  );
};

export default BookingForm;
