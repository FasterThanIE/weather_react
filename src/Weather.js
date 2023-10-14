import {Component} from "react";
import weatherData from "./data/weather.json";

class Weather extends Component
{

    constructor() {
        super();
        this.state = {
            city: "",
            temperature: "",
        }
    }

    handleChange = (e) => {

        this.setState({city: e.target.value});
        const cityMatch = weatherData.find(city => city.city.toLowerCase() === e.target.value.toLowerCase());

        if(cityMatch)
        {
            this.setState({temperature: cityMatch.temperature});
            this.setState({ city: cityMatch.city });
        } else {
            this.setState({temperature: ""});
        }
    }


    render() {
        return (
            <>
                <form>
                    <p>Trenutna temperatura: {this.state.temperature}</p>
                    <label>
                        Name:
                        <input value={this.state.city} type="text" onChange={this.handleChange} />
                    </label>

                    <input type="button" value="Submit" />
                </form>

                <select onChange={this.handleChange} value={this.state.city}>
                    {weatherData.map((city) => (
                        <option key={city.city.toLowerCase()} value={city.city}>
                            {city.city}
                        </option>
                    ))}
                </select>
            </>
        )
    }
}
export default Weather;
