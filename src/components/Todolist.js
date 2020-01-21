import React from 'react'
import './Todolist.css'
import Todoitem from './Todoitem'

export default class Todolist extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            
        }

    }



    render() {

        return (
            <div className="todolist">
                <h2>Todolist</h2>
                <input type="text" id="task"/>
                <input type="button" value="Add" />

                <Todoitem item="Aprender React"/>
                
            </div>
          )

    }
        
  }