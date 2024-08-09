import React, { useState } from 'react';

interface Movie {
    id: number;
    title: string;
    duration: number; 
}

interface Room {
    id: number;
    name: string;
    capacity: number;
    assignedMovieId?: number;
}

const MovieManager: React.FC = () => {

    const [movies, setMovies] = useState<Movie[]>([]);

    const [rooms, setRooms] = useState<Room[]>([
        { id: 1, name: 'Room 1', capacity: 50 },
        { id: 2, name: 'Room 2', capacity: 75 },
    ]);

    const [newMovie, setNewMovie] = useState({ title: '', duration: 0 });


    const handleMovieInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setNewMovie({
            ...newMovie,
            [name]: value,
        });
    };


    const handleAddMovie = () => {
        if (newMovie.title && newMovie.duration > 0) {
            const newMovieEntry: Movie = {
                id: movies.length + 1,
                title: newMovie.title,
                duration: newMovie.duration,
            };
            setMovies([...movies, newMovieEntry]);
            setNewMovie({ title: '', duration: 0 });
        }
    };


    const handleAssignMovie = (roomId: number, movieId: number) => {
        setRooms(
            rooms.map((room) =>
                room.id === roomId ? { ...room, assignedMovieId: movieId } : room
            )
        );
    };

    const handleRemoveMovie = (roomId: number) => {
        setRooms(
            rooms.map((room) =>
                room.id === roomId ? { ...room, assignedMovieId: undefined } : room
            )
        );
    };

    return (
        <div>
            <h1>Movie Manager</h1>
            <div>
                <h2>Add New Movie</h2>
                <input
                    type="text"
                    name="title"
                    placeholder="Movie Title"
                    value={newMovie.title}
                    onChange={handleMovieInputChange}
                />
                <input
                    type="number"
                    name="duration"
                    placeholder="Duration (min)"
                    value={newMovie.duration}
                    onChange={handleMovieInputChange}
                />
                <button onClick={handleAddMovie}>Add Movie</button>
            </div>

            <div>
                <h2>Assign Movies to Rooms</h2>
                {rooms.map((room) => (
                    <div key={room.id} style={{ marginBottom: '10px' }}>
                        <h3>{room.name} (Capacity: {room.capacity})</h3>
                        <select
                            value={room.assignedMovieId || ''}
                            onChange={(e) =>
                                handleAssignMovie(room.id, Number(e.target.value))
                            }
                        >
                            <option value="" disabled>Select a Movie</option>
                            {movies.map((movie) => (
                                <option key={movie.id} value={movie.id}>
                                    {movie.title} ({movie.duration} min)
                                </option>
                            ))}
                        </select>
                        {room.assignedMovieId && (
                            <button
                                onClick={() => handleRemoveMovie(room.id)}
                                style={{ marginLeft: '10px' }}
                            >
                                Remove Movie
                            </button>
                        )}
                    </div>
                ))}
            </div>

            <div>
                <h2>Current Movie Assignments</h2>
                <ul>
                    {rooms.map((room) => {
                        const assignedMovie = movies.find(
                            (movie) => movie.id === room.assignedMovieId
                        );
                        return (
                            <li key={room.id}>
                                {room.name}: {assignedMovie ? assignedMovie.title : 'No movie assigned'}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default MovieManager;