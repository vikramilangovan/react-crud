import React,{ Components } from 'react';

class App extends Components{
	constructor(){
		super();
		this.addTodo = this.addTodo.bind(this);
		this.removeTodo = this.removeTodo.bind(this);
		this.state={
			todos:{},
			title:"This is the React app CRUD",
			counter:0
		}
	}
	addTodo(event){
		event.preventDefault();
		console.log(this.refs);
		let name=this.refs.name.value;
		let completed = this.refs.completed.value;
		let counter=this.state.counter;
		let todo ={
			name,
			completed,
			counter
		};
		counter++;
		todos.push(todo);
		this.setState({
			todos: todos
		});
		this.refs.todoForm.reset();
	}

	removeTodo(index){
		let todos = this.state.todos;
		let todo = todos.find(function(todo){
			return todo.counter === index;
		});
		todos.splice(todo,1);
		this.setState({
			todos: todos
		})

	}
	render(){
		let title = this.state.title;
		let todos = this.state.todos;
		return(
			<div classname="App">
				<form ref="todoForm">
					<input type="text" ref="name" placeholder="what do you what to do"/>
					<input type="text" ref="completed" placeholder="is it completed"/>
					<button onClick={this.addTodo}>Add todo</button>
				</form>
				<ul>
					{todos.map((todo => <li key={todo.counter}>{todo.name}
						<button onClick={this.removeTodo.bind(null,todo.counter)}>Remove</button>
						</li>))}
				</ul>
			</div>
		);
	}
}

export default App;
