import React from "react";
import axios from "axios";
import WeatherRow from './weather/Row';
import { ActivityIndicator, ListView } from "react-native";
import style from "../Style";

export default class List extends React.Component {

    static navigationOptions=({navigation}) => {
        return {
            title: `Météo / ${navigation.state.params.city}`
        }
    }

    constructor (props) {
        super(props)
        this.state = {
            city: this.props.navigation.state.params.city,
            report: null
        }

        setTimeout (() =>{
            this.fetchWeather()
        }, 1000)
    }

    fetchWeather () {
        axios.get(`https://samples.openweathermap.org/data/2.5/forecast/daily?q=${this.state.city},DE&appid=8385d56da9b3c6ec00d9d2bef7d3b1c4`)
        .then((response) => {
            this.setState({report: response.data})
        })
    }

    render() {
        if (this.state.report === null) {
            return (
                <ActivityIndicator color={style.color} size="large" />
            )

        } else {
            const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})

            return (
                <ListView
                    dataSource={ ds.cloneWithRows(this.state.report.list)}
                    renderRow={(row, j, k) => <WeatherRow day={row} index={parseInt(k, 10)} />}
                />
            )
        }

        
    }
}