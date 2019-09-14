import React from "react";
import { TextInput, Button, View } from "react-native";
import style from "../Style";

export default class SearchScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "Abidjan",
      placeholder: "Ecrire le nom d'une ville"
    };
    this.setCity = this.setCity.bind(this);
  }

  setCity(city) {
    this.setState({ city: city.target.value });
  }

  submit() {
    this.props.navigation.navigate("Result", { city: this.state.city });
  }

  render() {
    return (
      <View style={style.container}>
        <TextInput
          style={style.textInput}
          placeholder={this.state.placeholder}
          underlineColorAndroid="transparent"
          onChange={this.setCity}
          style={style.textInput}
          value={this.state.city}
        />
        <Button
          color="#a2273c"
          onPress={() => this.submit()}
          title="Rechercher une ville"
        />
      </View>
    );
  }
}
