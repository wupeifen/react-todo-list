import React from "react"


const todos = [
    {
        description: 'buy apples',
        isDone: false
    },
    {
        description: 'buy oranges',
        isDone: true
    }
]


// we call a component a name call "app". state is an object. todos is an array
class App extends React.Component {
    state = {
        todos: [
            {
                description: 'buy apple',
                isDone: false
            },
            {
                description: 'buy oranges',
                isDone: true
            }
        ],
        newTodoDescription:"",
    };

    // new function
    handleTodoClick = (currentTodo) => {
        if (currentTodo.isDone){
            currentTodo.isDone = false;
        } else {
            currentTodo.isDone = true;
        }

        const updatedState = {
            todos: this.state.todos,
            newTodoDescription:""

        }

        this.setState(updatedState)
};

    handleAddTodo = () => {
        // Step 1: get new todo descripion
        const newTodoDescription = this.state.newTodoDescription
        // Step 2: Create new todo object from the description
        const newTodo = {
            descripion: newTodoDescription,
            isDone: false,
        };
      
        // Step 3: Update react component 
        const newTodos = [
            ...this.state.todos,
            newTodo,
        ];
    
    }


    render() {
    return (
        <div>
            <h1>My Awesome Todo List</h1>
            <label htmlFor="newTodoDescription">Add To Do</label>
            <input 
            type="text"
            value={this.state.newTodoDescription}
            name="newTodoDescription"
            id="newTodoDescription"
            onChange={this.handleOnChange}
            />
            <button onClick={this.handleAddTodo}>+</button>
            <ul>
                {this.state.todos.map((a) => {
                    
                    let completeClass = "";

                    if (a.isDone) {
                        completeClass = "complete";
                    }

                    return <li className={completeClass}
                    onClick={() => this.handleTodoClick(a)}>{a.description}</li>
                })}
            </ul>
        </div>)
    }

    
}

export default App