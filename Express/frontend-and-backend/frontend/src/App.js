/*
  this React component interacts with a backend server
   using the fetch API and displays data received from the server
*/
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  // define state variable and function to update it
  // this variable will hold the data received from the backend server
  const [person, setPerson] = useState();

  // use  hook to run code after the component mounts
  // hook is used to perform side effects, such as making HTTP requests
  useEffect(() => {
    // make an HTTP GET request to the backend server
    fetch('http://127.0.0.1:5000')
      // parse response as JSON
      // this assumes that server is sending JSON data in response
      .then((res) => res.json()) 
      .then((data) => {
        console.log(data); // log the received data
        setPerson(data); // update state with received data
      })
      // handle any errors that occur during request
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
    {/*Conditional rendering: Display the following if 'person' exists (not null or undefined).*/}
      {person && (
        <>
          <h1>{person.name}</h1>
          <h2>{person.isInstructor ? 'Instructor' : 'Student'}</h2>
        </>
      )}
    </div>
  );
}

export default App;
