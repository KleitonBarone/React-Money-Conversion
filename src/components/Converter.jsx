import React, { useState } from 'react';
import './Converter.css';

const Converter = () => {
    const [currencyA, setCurrencyA] = useState("USD");
    const [currencyB, setCurrencyB] = useState("BRL");
    const [currencyA_value, setCurrencyA_value] = useState("");
    const [currencyB_value, setCurrencyB_value] = useState(0);

    const convert = () => {
        let from_to = `${currencyA}_${currencyB}`;

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

        let rate = rates[from_to];

        if (rate) {
            let value = parseFloat(currencyA_value);
            if (isNaN(value)) {
                setCurrencyB_value(0);
            } else {
                let convertedValue = (value * rate).toFixed(2);
                setCurrencyB_value(convertedValue);
            }
        } else {
            // Fallback or API call could go here
            console.warn(`Rate for ${from_to} not found.`);
            setCurrencyB_value("---");
        }
    };

    return (
        <div className="converter">
            <div className="currency-selectors">
                <div className="selector-group">
                    <label>From:</label>
                    <select value={currencyA} onChange={(e) => { setCurrencyA(e.target.value); setCurrencyB_value(0); }}>
                        <option value="USD">USD</option>
                        <option value="BRL">BRL</option>
                        <option value="CAD">CAD</option>
                        <option value="EUR">EUR</option>
                    </select>
                </div>

                <div className="selector-group">
                    <label>To:</label>
                    <select value={currencyB} onChange={(e) => { setCurrencyB(e.target.value); setCurrencyB_value(0); }}>
                        <option value="USD">USD</option>
                        <option value="BRL">BRL</option>
                        <option value="CAD">CAD</option>
                        <option value="EUR">EUR</option>
                    </select>
                </div>
            </div>

            <div className="input-group">
                <input
                    type="number"
                    placeholder="0.00"
                    onChange={(event) => setCurrencyA_value(event.target.value)}
                />
            </div>

            <button onClick={convert}>Convert</button>

            <div className="result">
                <span className="value">{currencyB_value}</span>
                <span className="currency">{currencyB}</span>
            </div>
        </div>
    );
};

export default Converter;