import React, { Component } from 'react';
import electron, { ipcRenderer } from 'electron';
import moment from 'moment';

import * as actions from '../../actions';
import styles from './styles.css';


export default class App extends Component {

  handleClick(story) {
    return (e) => {
      electron.shell.openExternal(story.url);
      this.props.dispatch(actions.clickedStory(story));
    };
  }

  handleFavoriteClick(story) {
    return (e) => {
      if (this.props.getState().favoriteStories[story.id]) {
        this.props.dispatch(actions.removeFromFavorites(story));
      } else {
        this.props.dispatch(actions.addToFavorites(story));
      }
    };
  }

  handleCommentsClick(story) {
    return (e) => {
      electron.shell.openExternal(`https://news.ycombinator.com/item?id=${story.id}`);
    };
  }

  render() {
    
    return (
      <div>
        <h1>Hello from index.js</h1>
      </div>
    );
  }
}
