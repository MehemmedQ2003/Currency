import "../css/Currency.css";
import { useState } from "react";
import axios from "axios";

let BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
let API_KEY = "fca_live_OafGvsOXdaGVrnC8EV122vV8RCzWn8XNhOk05ZxU";

const Currency = () => {
    const [amount, setAmount] = useState('');
    const [fromCurrency, setFromCurrency] = useState("USD");
    const [toCurrency, setToCurrency] = useState("TRY");
    const [result, setResult] = useState('');
    // eslint-disable-next-line no-unused-vars
    const [currencyData, setCurrencyData] = useState({
        AUD: 1.5379601772,
        BGN: 1.8467603329,
        BRL: 6.0287808479,
        CAD: 1.4012801796,
        CHF: 0.8821401321,
        CNY: 7.2641013834,
        CZK: 23.9340446534,
        DKK: 7.074170905,
        EUR: 0.948410168,
        GBP: 0.7874401204,
        HKD: 7.7791509248,
        HRK: 6.6660607897,
        HUF: 392.4445689728,
        IDR: 15888.154942503,
        ILS: 3.6346104085,
        INR: 84.7866944678,
        ISK: 137.6269844254,
        JPY: 149.8661629223,
        KRW: 1397.54653787,
        MXN: 20.3704129761,
        MYR: 4.4579507175,
        NOK: 11.0632012391,
        NZD: 1.6931402655,
        PHP: 58.8104301461,
        PLN: 4.0710706216,
        RON: 4.7197006925,
        RUB: 107.9696838202,
        SEK: 10.9256314385,
        SGD: 1.3409202413,
        THB: 34.353125235,
        TRY: 34.6930666731,
        USD: 1,
        ZAR: 18.0987326819
    });

    const exchange = async () => {
        const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`);
        const rate = response.data.data[toCurrency];
        const calculatedResult = (rate * amount).toFixed(2);
        setResult(calculatedResult);
    };

    const currencyOptions = Object.keys(currencyData);

    return (
        <div className="currency-div">
            <div>
                <h2>Currency Converter</h2>
            </div>
            <div style={{ marginTop: "20px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", gap: "10px"}}>
                    <input
                        type="number"
                        min={0}
                        className="amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                    <select
                        className="from-currency-option"
                        value={fromCurrency}
                        onChange={(e) => setFromCurrency(e.target.value)}
                    >
                        {currencyOptions.map((currency) => (
                            <option key={currency} value={currency}>
                                {currency}
                            </option>
                        ))}
                    </select>
                </div>


                <div style={{ display: "flex", justifyContent: "space-between", gap: "10px"}}>
                    <select
                        className="to-currency-option"
                        value={toCurrency}
                        onChange={(e) => setToCurrency(e.target.value)}
                    >
                        {currencyOptions.map((currency) => (
                            <option key={currency} value={currency}>
                                {currency}
                            </option>
                        ))}
                    </select>
                    <input
                        type="number"
                        min={0}
                        className="result"
                        value={result}
                        readOnly
                    />
                </div>
            </div>

            <div>
                <button onClick={exchange} className="exchange-button">
                    Convert
                </button>
            </div>
        </div>
    );
};

export default Currency;
