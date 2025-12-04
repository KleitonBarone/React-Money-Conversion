# 💱 React Money Converter

A example project for money conversion using React 19 and Vite.

![React](https://img.shields.io/badge/React-19.2-61DAFB?style=flat-square&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.2-646CFF?style=flat-square&logo=vite&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)
![Node](https://img.shields.io/badge/Node-24.x-339933?style=flat-square&logo=node.js&logoColor=white)

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | React 19 |
| **Build Tool** | Vite 7 |
| **Testing** | Vitest + React Testing Library |
| **Styling** | Vanilla CSS with CSS Variables |
| **Typography** | Inter (Google Fonts) |

## 📁 Project Structure

```
React-Money-Conversion/
├── public/                    # Static assets
├── src/
│   ├── components/
│   │   └── Converter/         # Currency converter component
│   │       ├── index.jsx
│   │       └── Converter.css
│   ├── constants/
│   │   └── currencies.js      # Supported currencies & exchange rates
│   ├── hooks/
│   │   └── useCurrencyConverter.js  # Conversion logic hook
│   ├── styles/
│   │   └── global.css         # Global styles & CSS variables
│   ├── App.jsx                # Main application component
│   ├── App.css                # App-level styles
│   ├── App.test.jsx           # Application tests
│   └── index.jsx              # Entry point
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** 24.x or higher
- **npm** (comes with Node.js)

> 💡 **Tip:** Use [nvm](https://github.com/nvm-sh/nvm) to manage Node versions. A `.nvmrc` file is included in the project.

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/KleitonBarone/React-Money-Conversion.git
   cd React-Money-Conversion
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   
   Navigate to `http://localhost:3000`

## 📜 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start the development server with hot reload |
| `npm run build` | Build the production bundle |
| `npm run preview` | Preview the production build locally |
| `npm test` | Run tests with Vitest |

### Adding New Currencies

To add a new currency, edit `src/constants/currencies.js`:

```javascript
// 1. Add the currency code to the array
export const SUPPORTED_CURRENCIES = ['USD', 'BRL', 'CAD', 'EUR', 'GBP'];

// 2. Add exchange rates for the new currency
export const EXCHANGE_RATES = {
    // ... existing rates
    USD_GBP: 0.79,
    GBP_USD: 1.27,
    // Add rates for all other currency pairs
};
```

## 🧪 Testing

Run the test suite with:

```bash
npm test
```

The project uses **Vitest** with **React Testing Library** for component testing.
