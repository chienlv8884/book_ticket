import React, { useState } from 'react';


interface Ticket {
    id: number;
    customerName: string;
    movieId: number;
    roomId: number;
    seatNumber: number;
}

interface Movie {
    id: number;
    title: string;
}

interface Room {
    id: number;
    name: string;
    capacity: number;
}

const BookedTickets: React.FC = () => {

    const [tickets, setTickets] = useState<Ticket[]>([]);

    const [movies] = useState<Movie[]>([
        { id: 1, title: 'Movie 1' },
        { id: 2, title: 'Movie 2' },
    ]);
    const [rooms] = useState<Room[]>([
        { id: 1, name: 'Room 1', capacity: 50 },
        { id: 2, name: 'Room 2', capacity: 75 },
    ]);

    const [newBooking, setNewBooking] = useState({
        customerName: '',
        movieId: 0,
        roomId: 0,
        seatNumber: 0,
    });


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setNewBooking({
            ...newBooking,
            [name]: value,
        });
    };


    const handleAddBooking = () => {
        if (
            newBooking.customerName &&
            newBooking.movieId > 0 &&
            newBooking.roomId > 0 &&
            newBooking.seatNumber > 0
        ) {
            const newTicket: Ticket = {
                id: tickets.length + 1,
                customerName: newBooking.customerName,
                movieId: Number(newBooking.movieId),
                roomId: Number(newBooking.roomId),
                seatNumber: Number(newBooking.seatNumber),
            };
            setTickets([...tickets, newTicket]);
            setNewBooking({
                customerName: '',
                movieId: 0,
                roomId: 0,
                seatNumber: 0,
            });
        }
    };

    const handleCancelBooking = (id: number) => {
        setTickets(tickets.filter((ticket) => ticket.id !== id));
    };

    return (
        <div>
            <h1>Booked Tickets</h1>
            <div>
                <h2>Add New Booking</h2>
                <input
                    type="text"
                    name="customerName"
                    placeholder="Customer Name"
                    value={newBooking.customerName}
                    onChange={handleInputChange}
                />
                <select
                    name="movieId"
                    value={newBooking.movieId}
                    onChange={handleInputChange}
                >
                    <option value={0} disabled>Select a Movie</option>
                    {movies.map((movie) => (
                        <option key={movie.id} value={movie.id}>
                            {movie.title}
                        </option>
                    ))}
                </select>
                <select
                    name="roomId"
                    value={newBooking.roomId}
                    onChange={handleInputChange}
                >
                    <option value={0} disabled>Select a Room</option>
                    {rooms.map((room) => (
                        <option key={room.id} value={room.id}>
                            {room.name} (Capacity: {room.capacity})
                        </option>
                    ))}
                </select>
                <input
                    type="number"
                    name="seatNumber"
                    placeholder="Seat Number"
                    value={newBooking.seatNumber}
                    onChange={handleInputChange}
                />
                <button onClick={handleAddBooking}>Add Booking</button>
            </div>

            <div>
                <h2>Current Bookings</h2>
                <ul>
                    {tickets.map((ticket) => {
                        const movie = movies.find((movie) => movie.id === ticket.movieId);
                        const room = rooms.find((room) => room.id === ticket.roomId);
                        return (
                            <li key={ticket.id}>
                                {ticket.customerName} - {movie?.title} in {room?.name} (Seat: {ticket.seatNumber})
                                <button onClick={() => handleCancelBooking(ticket.id)} style={{ marginLeft: '10px' }}>
                                    Cancel Booking
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default BookedTickets;