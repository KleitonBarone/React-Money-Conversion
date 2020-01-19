import React from 'react'
import './Todolist.css'

export default class Todolist extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            teste: 0
        }

    }



    render() {

        return (
            <div className="todolist">
                <h2>Todolist</h2>
                <input type="text" id="task"/>
                <input type="button" value="Add" />
                
            </div>
          )

    }
        
  }