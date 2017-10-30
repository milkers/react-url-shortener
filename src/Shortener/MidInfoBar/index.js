import React, { Component } from 'react';
import './MidInfoBar.css';

export default class MidInfoBar extends Component {

  render() {
    return (
      <div className="mid-info-bar">
        <div className="info-text section-headings">
          Previously shortened by you
        </div>
        <button className="clear-button normal-text"
          onClick={() => this.props.clearLinkList()}>
          Clear history
        </button>
      </div>
    );
  }
}
