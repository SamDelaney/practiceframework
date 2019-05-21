import * as React from "react";
import { AddWord } from "../actions";
import { MaterialInputHelper } from "../types";

import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";

export interface IEntryFormProps {
  name: string;
  AddWord?: (vern: string, gloss: string) => void;
}

interface IEntryFormState {
  inputVern: string;
  inputGloss: string;
}

export default class EntryForm extends React.Component<
  IEntryFormProps,
  IEntryFormState
> {
  constructor(props: IEntryFormProps) {
    super(props);

    // This is to bind context when passing onClick as a callback
    this.onClick = this.onClick.bind(this);

    //default state
    this.state = {
      inputVern: "",
      inputGloss: ""
    };
  }

  onClick() {
    if (this.props.AddWord) {
      this.props.AddWord(this.state.inputVern, this.state.inputGloss);
    }
  }

  updateVern(evt: React.ChangeEvent<MaterialInputHelper>) {
    const newValue = evt.target.value;
    this.setState(state => ({
      inputVern: newValue
    }));
  }

  updateGloss(evt: React.ChangeEvent<MaterialInputHelper>) {
    const newValue = evt.target.value;
    this.setState(state => ({
      inputGloss: newValue
    }));
  }

  render() {
    return (
      <div>
        <h2>Enter {this.props.name} Words:</h2>
        <label>
          Vernacular:{" "}
          <Input type="text" onChange={evt => this.updateVern(evt)} />
        </label>
        <br />
        <label>
          Gloss: <Input type="text" onChange={evt => this.updateGloss(evt)} />
        </label>
        <br />
        <Button onClick={this.onClick}> Add Word </Button>
      </div>
    );
  }
}
