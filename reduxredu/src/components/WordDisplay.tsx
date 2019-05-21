import * as React from "react";
import { IWord } from "../types";

export interface IWordDisplayProps {
  word: IWord;
}

export default class WordDisplay extends React.Component<IWordDisplayProps> {
  constructor(props: IWordDisplayProps) {
    super(props);
  }

  render() {
    return (
      <div>
        Vernacular: {this.props.word.vern}
        <br />
        Gloss: {this.props.word.gloss}
      </div>
    );
  }
}
