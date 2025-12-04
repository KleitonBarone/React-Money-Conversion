import React from 'react'
import './Placargol.css'

export default class Placargol extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            timeA_gol: 0,
            timeB_gol: 0
        }

        this.timegolA = this.timegolA.bind(this)

        this.timegolB = this.timegolB.bind(this)
    }

    timegolA() {
        this.setState({timeA_gol: this.state.timeA_gol + 1})
    }

    timegolB() {
        this.setState({timeB_gol: this.state.timeB_gol + 1}) 
    }

    render() {

        return (
            <div className="placargol">
                <h2 className="times">{this.props.timeA} X {this.props.timeB}</h2>
                <h2>{this.state.timeA_gol} Gols &nbsp;&nbsp;&nbsp; {this.state.timeB_gol} Gols</h2>
                <input type="button" value="Gol!" onClick={this.timegolA}/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="button" value="Gol!" onClick={this.timegolB}/>
            </div>
          )

    }
        
  }