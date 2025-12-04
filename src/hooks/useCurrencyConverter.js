import { useState, useEffect, useCallback } from 'react';
import { getExchangeRate } from '../constants/currencies';

/**
 * Custom hook for currency conversion logic.
 * Handles state management and automatic conversion when inputs change.
 * 
 * @param {string} defaultFrom - Default source currency (default: 'USD')
 * @param {string} defaultTo - Default target currency (default: 'BRL')
 * @returns {Object} Conversion state and handlers
 */
const useCurrencyConverter = (defaultFrom = 'USD', defaultTo = 'BRL') => {
    const [sourceCurrency, setSourceCurrency] = useState(defaultFrom);
    const [targetCurrency, setTargetCurrency] = useState(defaultTo);
    const [inputAmount, setInputAmount] = useState('');
    const [convertedAmount, setConvertedAmount] = useState(0);
    const [error, setError] = useState(null);

    // Handle input change with validation
    const handleInputChange = useCallback((value) => {
        // Only allow positive numbers or empty string
        if (value === '' || parseFloat(value) >= 0) {
            setInputAmount(value);
        }
    }, []);

    // Perform conversion whenever inputs change
    useEffect(() => {
        const rate = getExchangeRate(sourceCurrency, targetCurrency);

        if (rate === null) {
            console.warn(`Rate for ${sourceCurrency}_${targetCurrency} not found.`);
            setConvertedAmount('---');
            setError(`Conversion rate not available for ${sourceCurrency} to ${targetCurrency}`);
            return;
        }

        setError(null);

        if (inputAmount === '' || isNaN(parseFloat(inputAmount))) {
            setConvertedAmount(0);
            return;
        }

        const value = parseFloat(inputAmount);
        const result = (value * rate).toFixed(2);
        setConvertedAmount(result);
    }, [inputAmount, sourceCurrency, targetCurrency]);

    // Swap source and target currencies
    const swapCurrencies = useCallback(() => {
        setSourceCurrency(targetCurrency);
        setTargetCurrency(sourceCurrency);
    }, [sourceCurrency, targetCurrency]);

    return {
        // State
        sourceCurrency,
        targetCurrency,
        inputAmount,
        convertedAmount,
        error,

        // Setters
        setSourceCurrency,
        setTargetCurrency,
        handleInputChange,
        swapCurrencies,
    };
};

export default useCurrencyConverter;
