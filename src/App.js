import React, { useReducer } from "react"
import { Container } from "reactstrap"
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./App.css";

import { TodoContext } from "./context/TodoContext"
import todoReducer from "./context/reducer"
import FromText from "./component/FromText";
import Todos from "./component/Todos";


const App = () => {
  const [todos, dispatch] = useReducer(todoReducer, []);
  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      <Container fluid>
        <h1>Todo App with React Context </h1>
        {/* <h1>git remote add origin https://github.com/prem-saini/Todo-List-with-React-Context-.git</h1> */}
        <Todos />
        <FromText />
      </Container>
    </TodoContext.Provider>
  )

};

export default App;