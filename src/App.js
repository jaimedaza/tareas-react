import React, { Component } from 'react';

/// Modifica el componente para que se puedan agregar tareas

class App extends Component {

  state = {
    tarea: "",
    todos: ["Sacar la ropa", "Hacer la cama", "Leer un rato" ]   
  }

  updateTask = (event) => {
    this.setState({
      tarea: event.target.value      
    });    
  }

  keyPress = (event) => {     
       event.preventDefault();
       
       this.setState({       
        todos: this.state.todos.concat(this.state.tarea),
        tarea: ""
      });   
 }

  render() {
    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo">
            {this.state.todos.map((task) =>
              <li key={task}>{task}</li>            
            )}            
          </ul>
           <form onSubmit={this.keyPress}>
             <input type="text" id="new-task" value={this.state.tarea} onChange={this.updateTask} placeholder="Ingresa una tarea y oprime Enter" />
           </form>           
        </div>
      </div>
    )
  }

}


export default App;
