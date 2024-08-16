import {tickets} from '../../mocks/tickets'
const IndexPage = () => (
  <ul>
    {tickets.map(ticket => (
      <li key={ticket.id}>{`${ticket.id} ${ticket.room_id} ${ticket.time_from.toLocaleString()} ${ticket.time_end.toLocaleString()}`}</li>
    ))}
  </ul>
);
  
export default IndexPage;
