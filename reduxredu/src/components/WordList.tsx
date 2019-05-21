import * as React from "react";
import { IWord } from "../types";
import WordDisplay from "./WordDisplay";

export interface IWordListProps {
  words: IWord[];
}

export default class WordList extends React.Component<IWordListProps> {
  constructor(props: IWordListProps) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.words.map((item, index) => (
          <WordDisplay key={index} word={item} />
        ))}
      </div>
    );
  }
}
