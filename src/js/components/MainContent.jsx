import { connect } from 'react-redux';

import React from 'react';
import Photos from './Photos';
import { getPhotos } from '../actions/index'

class MainContent extends React.Component {
 
  componentWillMount() {
    console.log('inside component')
    this.props.dispatch(getPhotos())
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
  console.log('state mapTo',state)
  const allImg = state.list;
  return {
    allImg
  }

}

export default connect(mapStateToProps)(MainContent)