import logo from './logo.svg';
import './App.css';
import { useQuery, gql } from '@apollo/client';


const query = gql`
query myfetchAllTododosQuery {
fetchAllTodos {
  title,
user {
 name
}
}
}`
function App() {
  const { data, loading } = useQuery(query)
  return (
    <div className="App">
      if(loading) return <h1>Loading...</h1>
      {JSON.stringify(data)}
    </div>
  );
}

export default App;
