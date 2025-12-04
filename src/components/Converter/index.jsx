import React from 'react';
import useCurrencyConverter from '../../hooks/useCurrencyConverter';
import { SUPPORTED_CURRENCIES } from '../../constants/currencies';
import './Converter.css';

const Converter = () => {
    const {
        sourceCurrency,
        targetCurrency,
        inputAmount,
        convertedAmount,
        setSourceCurrency,
        setTargetCurrency,
        handleInputChange,
    } = useCurrencyConverter();

    return (
        <div className="converter">
            <div className="currency-selectors">
                <div className="selector-group">
                    <label>From:</label>
                    <select
                        value={sourceCurrency}
                        onChange={(e) => setSourceCurrency(e.target.value)}
                    >
                        {SUPPORTED_CURRENCIES.map((currency) => (
                            <option key={currency} value={currency}>
                                {currency}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="selector-group">
                    <label>To:</label>
                    <select
                        value={targetCurrency}
                        onChange={(e) => setTargetCurrency(e.target.value)}
                    >
                        {SUPPORTED_CURRENCIES.map((currency) => (
                            <option key={currency} value={currency}>
                                {currency}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="input-group">
                <input
                    type="number"
                    placeholder="0.00"
                    min="0"
                    step="0.01"
                    value={inputAmount}
                    onChange={(e) => handleInputChange(e.target.value)}
                />
            </div>

            <div className="result">
                <span className="value">{convertedAmount}</span>
                <span className="currency">{targetCurrency}</span>
            </div>
        </div>
    );
};

export default Converter;
