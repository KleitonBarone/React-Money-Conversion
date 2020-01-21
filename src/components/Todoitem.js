import React from 'react'
import './Todoitem.css'

export default class Todoitem extends React.Component {

    constructor(props) {
        super(props)
    }



    render() {

        return (
            <div className="todoitem">
                <p><input type="checkbox"/>
                {this.props.item}</p>
                
            </div>
          )

    }
        
  }