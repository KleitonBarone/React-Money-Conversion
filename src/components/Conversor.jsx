import React, { useState } from 'react';
import './Conversor.css';

const Conversor = ({ moedaA, moedaB }) => {
    const [moedaA_valor, setMoedaA_valor] = useState("");
    const [moedaB_valor, setMoedaB_valor] = useState(0);

    const converter = () => {
        let de_para = `${moedaA}_${moedaB}`;

        // In a real app, you would fetch this from an API.
        // For this demo, we'll keep the hardcoded rates or fetch if possible.
        // Keeping the hardcoded rates for now as per original logic to ensure functionality first.
        const rates = {
            "USD_BRL": 5.31,
            "BRL_USD": 0.188,
            "CAD_BRL": 3.82,
            "BRL_CAD": 0.262,
            "EUR_BRL": 6.20,
            "BRL_EUR": 0.161
        };

        let cotacao = rates[de_para];

        if (cotacao) {
            let valorConvertido = (parseFloat(moedaA_valor) * cotacao).toFixed(2);
            setMoedaB_valor(valorConvertido);
        } else {
            // Fallback or API call could go here
            console.warn(`Rate for ${de_para} not found.`);
        }
    };

    return (
        <div className="conversor">
            <h2>{moedaA} para {moedaB}</h2>
            <div className="input-group">
                <input
                    type="number"
                    placeholder="0.00"
                    onChange={(event) => setMoedaA_valor(event.target.value)}
                />
                <span className="currency-label">{moedaA}</span>
            </div>

            <button onClick={converter}>Converter</button>

            <div className="result">
                <span className="value">{moedaB_valor}</span>
                <span className="currency">{moedaB}</span>
            </div>
        </div>
    );
};

export default Conversor;