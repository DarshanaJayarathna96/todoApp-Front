import React, { Component } from 'react';
import axios from 'axios';
import Todo from './Todo';

const Todo2 = props => ( 
    <Todo id={props.todo.id} title={props.todo.title} completed={props.todo.completed} />
        
)

export default class TodosList extends Component {

    constructor(props) {
        super(props);
        this.state = {tasks: []};
    }

    componentDidMount() {
        axios.get('http://localhost:3001/tasks/')
            .then(response => {
                this.setState({ tasks: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    componentDidUpdate(){
        axios.get('http://localhost:3001/tasks/')
            .then(response => {
                this.setState({ tasks: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    todoList() {
        return this.state.tasks.map(function(currentTodo, i){
            return <Todo2 todo={currentTodo} key={i} />;
        })
    }

    render() {
        return (
            <div>
                { this.todoList() }
            </div>
        )
    }
}
