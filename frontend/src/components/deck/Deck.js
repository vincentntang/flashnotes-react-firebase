import React, { Component } from "react";
import styled from "styled-components";
import MainData from "../data/MainData";
import Spinner from "../common/Spinner";
import Review from "./Review";

const DeckStyles = styled.div`
  display: flex;
  justify-content: center;
`;
const DeckBody = styled.div`
  border: 1px solid;
  text-align: center;
  padding: 40px;
`;

export default class Deck extends Component {
  state = {
    decks: []
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ decks: MainData.decks });
    }, 1000);
  }
  onReviewCards = () => {
    // this.setState({ toggled: !this.state.toggled });
    // Push to review
    this.props.history.push(`/decks/${this.props.match.params.handle}/review`);
  };

  render() {
    let deckContent = "";

    if (this.state.decks.length === 0) {
      deckContent = <Spinner />;
    } else {
      deckContent = (
        <div>
          <div> {this.props.match.params.handle}</div>
          <button onClick={this.onReviewCards}>Review Cards</button>
          <button>Edit Cards</button>
          <button>Options</button>
        </div>
      );
    }
    return (
      <DeckStyles>
        <DeckBody>{deckContent}</DeckBody>
      </DeckStyles>
    );
  }
}
