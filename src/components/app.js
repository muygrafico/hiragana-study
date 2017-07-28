import React, { Component } from 'react';
import {random} from 'lodash';

const Hirigana = [
  {romaji: 'a',hiragana: 'あ'},
  {romaji: 'i',hiragana: 'い'},
  {romaji: 'u',hiragana: 'う'},
  {romaji: 'e',hiragana: 'え'},
  {romaji: 'o',hiragana: 'お'}
]

export default class App extends Component {

  state = {
    selected: Hirigana[0].hiragana
  }


  randomHiragana(romaji = false) {
    console.log(romaji);
    const pos = random(0, Hirigana.length -1);
    const selected = romaji ?  Hirigana[pos].romaji : Hirigana[pos].hiragana;
    this.setState({selected});

  }


  render() {
    return (
      <div className="container">
        <div>
          <h1>{this.state.selected}</h1>
          <button onClick={() => this.randomHiragana()}> ランダムなひらがな </button>
          <button onClick={() => this.randomHiragana(true)}> ランダムなローマ字</button>
        </div>
      </div>
    );
  }
}
