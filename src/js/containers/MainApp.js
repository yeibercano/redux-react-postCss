import React, { Component } from 'react';
import Header from '../components/Header';
import Main   from '../components/MainContent';
import Footer from '../components/Footer';


export default class App extends Component {
  render() {
    return (
      <div className="appWrapper">
        <Header/>
        <Main />
        <Footer />
      </div>
    );
  }
}