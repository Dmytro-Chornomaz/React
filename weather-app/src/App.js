import { useState } from 'react';

function App() {

    const [data, setData] = useState({});
    const [town, setTown] = useState("");

    const key = "9e3a7d4c14e2232663202f4152854f9a";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${town}&units=metric&appid=${key}`;

    function searchWeather(event) {
        if (event.key === "Enter") {
            fetch(url)
                .then(response => response.json())
                .then(json => console.log(json));
        }
    }

    return (
        <div className="App">
            <div className="inp-field">
                <input type="text" value={town} onChange={event => setTown(event.target.value)}
                    placeholder="Enter your town" onKeyDown={searchWeather} />
            </div>
        </div>
    );
}

export default App;
