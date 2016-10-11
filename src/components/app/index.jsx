import React, { Component } from 'react';
import electron, { ipcRenderer } from 'electron';
import axios from 'axios';

import * as actions from '../../actions';
import styles from './styles.css';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.getQuote(); 
    this.state = {
      image: ''
    };
  }
 
  getQuote() {
    axios.get('https://wisdomapi.herokuapp.com/v1/random')
      .then(res => {
        console.log('res', res.data);
        this.setState({image: res.data.picture_url})
      })
  }
  handleCommentsClick(story) {
    return (e) => {
      electron.shell.openExternal(`https://news.ycombinator.com/item?id=${story.id}`);
    };
  }

  render() {
    let output = this.state.image.length > 0 ? <image src={this.state.image}></image> : <span>Loading</span>
    return (
      <div>
        <image src={this.state.image} style={{height: 1120, width: 640 }}></image>
      </div>
    );
  }
}
