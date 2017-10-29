import React, { Component } from 'react';
import './Shortener.css';

import LinkForm from './LinkForm';
import MidInfoBar from './MidInfoBar';
import UrlList from './UrlList';

export default class Shortener extends Component {

  render() {
    return (
      <div className="shortener-main">
        <LinkForm />
        <MidInfoBar />
        <UrlList />
      </div>
    );
  }
}
