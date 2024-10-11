import { render, screen } from "@testing-library/react";
import BookingPage from "../components/BookingPage";
import { initializeTimes } from '../components/Main'
import { updateTimes } from "../components/Main";

test('Renders the BookingForm heading', () => {
    render(<BookingPage />);
    const headingElement = screen.getByText(/Make a Reservation/i); 
    expect(headingElement).toBeInTheDocument();
});

test('initializeTimes returns expected value', () => {
    const expectedTimes = [
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00",
      ] ;
    const result = initializeTimes();
    expect(result).toEqual(expectedTimes);
});

test('updateTimes returns the same value that is provided in the state', () => {
    const initialState = [
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00",
      ];
    const action = { type: 'ANY_ACTION' };
    const result = updateTimes(initialState, action);
    expect(result).toEqual(initialState);
});