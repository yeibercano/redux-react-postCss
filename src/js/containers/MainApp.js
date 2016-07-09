import React, { Component } from 'react';
import Header from '../components/Header';
import Main   from '../components/MainContent';
import Footer from '../components/Footer';


export default class App extends Component {
  render() {
    return (
      <div style={{     "display": "flex",
    "flex-direction": "column"}}>
       <Header/>
       <Main />
       <Footer />
      </div>
    )
  }
}