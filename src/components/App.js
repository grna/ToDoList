import React from "react";
import axios from "axios";
import ToDoContainer from "./ToDoContainer";

const App = () => {
  axios
    .get("https://pokeapi.co/api/v2/pokemon/1")
    .then((res) => {
      const data = res.data;
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });

  return <ToDoContainer></ToDoContainer>;
};

export default App;
