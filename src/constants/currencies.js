/**
 * Supported currencies for conversion.
 * Add new currencies here along with their exchange rates.
 */
export const SUPPORTED_CURRENCIES = ['USD', 'BRL', 'CAD', 'EUR'];

/**
 * Exchange rates between currency pairs.
 * Format: "FROM_TO": rate
 * 
 * In a production app, these would be fetched from an API.
 * This serves as a fallback or demo data.
 */
export const EXCHANGE_RATES = {
    USD_BRL: 5.31,
    BRL_USD: 0.188,
    CAD_BRL: 3.82,
    BRL_CAD: 0.262,
    EUR_BRL: 6.20,
    BRL_EUR: 0.161,
    USD_CAD: 1.39,
    CAD_USD: 0.72,
    USD_EUR: 0.86,
    EUR_USD: 1.16,
    CAD_EUR: 0.62,
    EUR_CAD: 1.62,
};

/**
 * Get exchange rate for a currency pair.
 * @param {string} from - Source currency code
 * @param {string} to - Target currency code
 * @returns {number|null} Exchange rate or null if not found
 */
export const getExchangeRate = (from, to) => {
    if (from === to) return 1;
    const key = `${from}_${to}`;
    return EXCHANGE_RATES[key] || null;
};
