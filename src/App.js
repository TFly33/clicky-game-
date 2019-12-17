import React, { Component } from "react";
import Checkmates from "./checkmates.json";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Content from "./components/Content";


class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    Checkmates
  };

  // Map over this.state.friends and render a Checkmate component for each friend object
  render() {
    return (
      <Wrapper>
        <Title> The Greatest Chess Games Ever Played </Title>
        {this.state.Checkmates.map(Checkmates => (
          <Content
            id={Checkmates.id}
            key={Checkmates.id}
            name={Checkmates.name}
            image={Checkmates.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
