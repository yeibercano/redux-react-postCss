import { connect } from 'react-redux';
import React, { Component } from 'react';
import Photos from './Photos';
import { getPhotos } from '../actions/index'

class MainContent extends Component {
 
  componentWillMount() {
    this.props.getPhotos()
  }

  render() {
    return (
      <main className='container'>
        <div className='mainTitle'>Vote your favorite</div>
        <Photos allImg = {this.props.allImg} />
      </main>
    );
  }
}

function mapStateToProps (state) {
  const allImg = state.list;
  return {
    allImg
  }
}

export default connect(mapStateToProps, { getPhotos })(MainContent)