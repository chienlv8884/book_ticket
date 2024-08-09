import React, { useState } from 'react';

interface Room {
    id: number;
    name: string;
    capacity: number;
}

const RoomList: React.FC = () => {

    const [rooms, setRooms] = useState<Room[]>([]);

    const [newRoom, setNewRoom] = useState({ name: '', capacity: 0 });


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setNewRoom({
            ...newRoom,
            [name]: value,
        });
    };


    const handleAddRoom = () => {
        if (newRoom.name && newRoom.capacity > 0) {
            const newRoomEntry: Room = {
                id: rooms.length + 1,
                name: newRoom.name,
                capacity: newRoom.capacity,
            };
            setRooms([...rooms, newRoomEntry]);
            setNewRoom({ name: '', capacity: 0 });
        }
    };


    const handleDeleteRoom = (id: number) => {
        setRooms(rooms.filter((room) => room.id !== id));
    };

    return (
        <div>
            <h1>Room List</h1>
            <div>
                <input
                    type="text"
                    name="name"
                    placeholder="Room Name"
                    value={newRoom.name}
                    onChange={handleInputChange}
                />
                <input
                    type="number"
                    name="capacity"
                    placeholder="Capacity"
                    value={newRoom.capacity}
                    onChange={handleInputChange}
                />
                <button onClick={handleAddRoom}>Add Room</button>
            </div>
            <ul>
                {rooms.map((room) => (
                    <li key={room.id}>
                        {room.name} - Capacity: {room.capacity}
                        <button onClick={() => handleDeleteRoom(room.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RoomList;