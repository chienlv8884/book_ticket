import {rooms} from '../../mocks/rooms'
const IndexPage = () => (
  <ul>
    {rooms.map(room => (
      <li key={room.id}>{`${room.id} ${room.seats}`}</li>
    ))}
  </ul>
);
  
export default IndexPage;
