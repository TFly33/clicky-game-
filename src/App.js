import React, { Component } from "react";
import Checkmates from "./checkmates.json";
import Title from "./components/Title";
import Content from "./components/Content";
import Counter from "./components/Counter";


class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    Checkmates,
    id: [],
    counter: 0,
    topScore: 0
  };

  randomImage = () => {
    this.setState({ Checkmates: this.state.Checkmates.sort(() => Math.random() - 0.5) })
    //this.state.Checkmates.sort(() => Math.random() - 0.5);
  }

  handleClick = (id) => {
    console.log("has been clicked!");
    console.log(id);
    this.randomImage();
    this.handleIncrement();
  }

  handleIncrement = () => {
    // We always use the setState method to update a component's state
    this.setState({ counter: this.state.counter + 1 });
    console.log(this.state.counter)
  };
  // Map over this.state.Checkmates and render a Checkmate component for each friend object
  render() {
    return (
      <div>
        <Title>
          The Greatest Chess Games Ever Played </Title>
        <Counter counter={this.state.counter}/>
        {this.state.Checkmates.map(Checkmates => (
          <Content
            handleClick={() => this.handleClick(Checkmates.id)}
            id={Checkmates.id}
            key={Checkmates.id}
            name={Checkmates.name}
            image={Checkmates.image}
          />
        ))}
      </div>
    );
  }
}

export default App;
