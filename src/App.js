import { useState } from "react";

import './App.css';
import List  from './List';
import data from './data'

function App() {
  const [people, setPeople] =useState(data);
  // console.log(people);
  const toggle =() =>{
    if(people.length === 0){
      setPeople(data);
    }
    else{
      setPeople([])

    }
  }
  return (
    <main>
       <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people}/>
        <button onClick={toggle}>
          {people.length ===0 ? "show all":"claer all"}
        </button>
       </section>
    </main>
  );
}

export default App;
