import React, { Component } from 'react';
import Voting from '../containers/Voting.js';
import { connect } from 'react-redux';
import { upVote } from '../actions/index'

class Photos extends Component {

  imageInfo(imageInfo, id) {
    return (
      <article className='photo-list-article' key={imageInfo.id}>
        <h2 className='photo-list-title'>{imageInfo.title}</h2>
        <a href="#fullSize">
          <img className='photo-list-images' src={'../images/' + imageInfo.filename} /> 
          <Voting imageInfo = {imageInfo} imageId={id} />
        </a>
        <div id="fullSize" className="fullSize">
            <a href="#close" title="Close" className="close">X</a>
            <img className="fullSizeImg" src={'../images/' + imageInfo.filename} /> 
        </div>
        <p className="movies-description">{imageInfo.synopsis}</p>
      </article>
    )
        // <Voting imageInfo = {imageInfo} imageId={id} />
  }
  render() {
    return (
      <div className='photo-list-wrapper'>
        <section className='photo-list'>
          {this.props.allImg.map(image => this.imageInfo(image.fileattributes, image.id))}
        </section>
      </div>
    );
  }
}

export default connect()(Photos);

