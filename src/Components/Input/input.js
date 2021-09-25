import React, { Component } from "react";

import Button from '../Button'

import "./input.scss";


class Input extends Component {
    constructor(props){
        super(props);

    }
    handleChange = (e)=>{
        this.setState({
            [e.target.key]: e.target.value
        })
    }
    addNewTodo = ()=>{
        console.log("hola")
        const newTodo = {
            id: Math.floor(Math.random()),
            value: this.state.newTodo
        }
        const list = [...this.props.list]
        
        list.push(newTodo)

        this.setState({
            list,
            newTodo: ''
        })

    }
    render(){
        return(
            <div className="input-group mb-3">
                <input 
                    type="text"
                    placeholder="Add a todo please"
                    value={this.newTodo}
                    onChange={this.handleChange}
                />
                <div>
                    <button
                        value="Add"
                        onClick={this.addNewTodo}
                    ></button>
                </div>
            </div>
        )
    }
}

export default Input