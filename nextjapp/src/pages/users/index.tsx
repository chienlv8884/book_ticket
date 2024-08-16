import {users} from '../../mocks/users'
const IndexPage = () => (
  <ul>
    {users.map(user => (
      <li key={user.id}>{`${user.id} ${user.name} ${user.email}`}</li>
    ))}
  </ul>
);
  
export default IndexPage;
