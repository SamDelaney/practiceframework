import * as React from "react";
import { AddVern } from "../actions";

export interface IReduProps {
  name: string;
  word?: string;
  AddVern?: (text: string) => void;
}

export interface IReduState {
  currentText: string;
}

export default class Redu extends React.Component<IReduProps, IReduState> {
  constructor(props: IReduProps) {
    super(props);

    // This is to bind context when passing onClick as a callback
    this.onClick = this.onClick.bind(this);

    //default state
    this.state = {
      currentText: ""
    };
  }

  onClick() {
    this.setState(state => ({
      currentText: "Set In Component"
    }));
    if (this.props.AddVern) {
      this.props.AddVern(this.state.currentText);
    }
  }

  // handleChange(){
  //   this.setState({})
  // }

  render() {
    return (
      <div className="wordDisplay">
        <button onClick={this.onClick}>Set Word</button>
        <br />
        <input />
        <br />
        The word is {this.props.word}.
      </div>
    );
  }
}
