import React, { Component } from "react";

import Input from '../Input'
import Button from '../Button'

import "./TodoList.scss";



class TodoList extends Component {
    constructor(props){
        super(props)
    }
    render(){
        
        return (
            <div className="todo__list__container container-lg">
                <ul> 
                {this.props.list.map(item =>{
                    return(
                        <li key={item.id} id={item.id}>
                            <input type="checkbox"/>
                            <span>{item.value}</span>
                            <Button 
                            value="X"
                            onClick={this.deleteTodo(item.id)}
                            />
                        </li>
                    )
                })}
                </ul>
            </div>
        )
    }
}

export default TodoList;