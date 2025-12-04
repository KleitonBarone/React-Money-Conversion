import React from 'react'
import './Conversor.css'

export default class Conversor extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            moedaA_valor: "",
            moedaB_valor: 0
        }

        this.converter = this.converter.bind(this)
    }

    converter() {

        let de_para = `${this.props.moedaA}_${this.props.moedaB}`

        const rates = {
            "USD_BRL": 5.31,
            "BRL_USD": 0.188,
            "CAD_BRL": 3.82,
            "BRL_CAD": 0.262,
            "EUR_BRL": 6.20,
            "BRL_EUR": 0.161
        }

        let cotacao = rates[de_para]

        if (cotacao) {
            let moedaB_valor = (parseFloat((this.state.moedaA_valor * cotacao).toFixed(2)))
            this.setState({ moedaB_valor })
        }

    }

    render() {

        return (
            <div className="conversor">
                <h2>{this.props.moedaA} para {this.props.moedaB}</h2>
                <input type="text" onChange={(event) => {
                    this.setState({ moedaA_valor: event.target.value })
                }}></input>
                <input type="button" value="Converter" onClick={this.converter}></input>
                <h2>{this.state.moedaB_valor}</h2>
            </div>
        )

    }

}