import {useState, useEffect} from 'react'

const API_URL = 'http://localhost:3030/admin'

const TakeData = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {

    fetch(`${API_URL}`)

    .then((response) => response.json())

    .then((myJson) => 
  
    
    setTodos(Object.values(myJson))
    )

    .catch((myErr) => console.error(myErr));
  

},[])
return (
  <>
  <p>Data: {todos}</p>
  </>
)
}

// class MyComponent extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         error: null,
//         isLoaded: false,
//         items: []
//       };
//     }
  
//     componentDidMount() {
//       fetch("http://localhost:3030/admin")
//         .then(res => res.json())
//         .then(
//           (result) => {
//             this.setState({
//               isLoaded: true,
//               items: result.items
//             });
//           },
//           // Note: it's important to handle errors here
//           // instead of a catch() block so that we don't swallow
//           // exceptions from actual bugs in components.
//           (error) => {
//             this.setState({
//               isLoaded: true,
//               error
//             });
//           }
//         )
//     }
//     render() {
//         const { error, isLoaded, items } = this.state;
//         if (error) {
//           return <div>Error: {error.message}</div>;
//         } else if (!isLoaded) {
//           return <div>Loading...</div>;
//         } else {
//           return (
//             <ul>
//               {items.map(item => (
//                 <li key={item.id}>
//                   {item.name} {item.price}
//                 </li>
//               ))}
//             </ul>
//           );
//         }
//       }
//     }

    export default TakeData;