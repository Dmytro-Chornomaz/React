import { useState } from 'react';
//import axios from 'axios';

function App() {

    const [data, setData] = useState({});
    const [town, setTown] = useState("");

    const key = "9e3a7d4c14e2232663202f4152854f9a";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${town}&units=metric&appid=${key}`;

    function searchWeather(event) {
        if (event.key === "Enter") {
            fetch(url)
                .then(response => response.json())
                .then(json => setData(json));

            //axios.get(url).then(response => {
            //    setData(response.data);
            //});

            setTown("");
        }
    }

    return (
        <div className="App">
            <div className="inp-field">
                <input type="text" value={town} onChange={event => setTown(event.target.value)}
                    placeholder="Enter your town" onKeyDown={searchWeather} />
            </div>
            <div className="container">
                <div className="header">
                    <div className="city">
                        {data.name ? (<h2>{data.name}</h2>) : null}
                    </div>
                </div>
                <div className="temperature">
                    {data.main ? (<h3>{data.main.temp.toFixed()} &deg;C</h3>) : null}
                </div>
                <div className="description">
                    {data.weather ? (<h3>{data.weather[0].main}</h3>) : null}
                </div>
                <div className="humidity">
                    {data.main ? (<h3>humidity: {data.main.humidity} %</h3>) : null}
                </div>                
                <div className="wind">
                    {data.wind ? (<h3>wind: {data.wind.speed} m/s</h3>) : null}
                </div>
            </div>
        </div>
    );
}

export default App;
