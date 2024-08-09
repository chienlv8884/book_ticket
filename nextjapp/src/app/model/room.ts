
export type User = {
    id: string;                 
    name: string;               
    email: string;              
    bookedRooms: BookedRoom[];  
};


export type BookedRoom = {
    room: Room;                
    bookingDate: Date;          
    seatsBooked: number;        
};


export type Room = {
    name: string;              
    seats: number;              
};


export function bookRoom(user: User, room: Room, seatsToBook: number): User {
    if (room.seats < seatsToBook) {
        throw new Error('Not enough seats available');
    }
    

    room.seats -= seatsToBook;


    user.bookedRooms.push({
        room,
        bookingDate: new Date(),
        seatsBooked: seatsToBook,
    });

    return user;
}


export function getUserInfo(user: User): string {
    return `User: ${user.name}, Email: ${user.email}, Booked Rooms: ${user.bookedRooms.length}`;
}