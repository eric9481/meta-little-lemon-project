import { initializeTimes, updateTimes, fetchAPI } from '../components/Main';
import { render, screen } from "@testing-library/react";
import BookingPage from "../components/BookingPage";


jest.mock('../components/Main', () => ({
  ...jest.requireActual('../components/Main'),
  fetchAPI: jest.fn(),
}));

test('Renders the BookingForm heading', () => {
    render(<BookingPage />);
    const headingElement = screen.getByText(/Make a Reservation/i); 
    expect(headingElement).toBeInTheDocument();
});

test('initializeTimes returns expected value', () => {
    
    const mockTimes = [
        "17:00",
        "17:30",
        "18:00",
        "18:30",
        "19:00",
        "19:30",
        "20:00",
        "20:30",
        "21:00",
        "21:30",
        "22:00",
        "23:30",
    ];
    fetchAPI.mockReturnValue(mockTimes);

    const result = initializeTimes();
    expect(result).toEqual(mockTimes);
});

test('updateTimes returns updated times based on the action date', () => {
    
    const mockTimes = [
        "17:00",
        "17:30",
        "18:00",
        "18:30",
        "19:00",
        "19:30",
        "20:00",
        "20:30",
        "21:00",
        "21:30",
        "22:00",
        "23:30",
    ];
    fetchAPI.mockReturnValue(mockTimes);

    const initialState = [];
    const action = { type: 'UPDATE_TIMES', date: new Date() };
    const result = updateTimes(initialState, action);

    expect(result).toEqual(mockTimes);
});