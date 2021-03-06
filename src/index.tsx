import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import Page from './Page';

export class Index {

  public renderApp() {
    ReactDOM.render(
      <Page />,
      document.getElementById('app-root')
    );
  }
}

new Index().renderApp();
