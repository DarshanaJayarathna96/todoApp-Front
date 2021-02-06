import React, { Component } from 'react';
import axios from 'axios';

export default class CreateTodo extends Component {

    constructor(props) {
        super(props);

        this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            title: '',
            completed: false
        }
    }

    onChangeTodoDescription(e) {
        this.setState({
            title: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        
        console.log(`Form submitted:`);
        console.log(`Todo title: ${this.state.title}`);
        console.log(`Todo completed: ${this.state.completed}`);

        const newTodo = {
            title: this.state.title,
            completed:this.state.completed
        };

        axios.post('http://localhost:3001/tasks', newTodo)

        this.setState({
            title: '',
            completed: false
        })
    }

    render() {
        return (


            <form class="formStyle" onSubmit={this.onSubmit}>
                <input type="text"
                    className="todo-input"
                    value={this.state.title}
                    onChange={this.onChangeTodoDescription} />
                <button className="todo-button" type="submit">
                    <i className="fa fa-plus" Style="font-size:20px;color:white"></i>
                </button>
                
             </form>

        )
    }
}