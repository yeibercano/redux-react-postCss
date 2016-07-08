import React from 'react';
import Voting from '../containers/Voting.js'

export default class Photos extends React.Component {

  imageInfo(imageInfo, id) {
    console.log('imageInfo, id', imageInfo, id)
    return (
      <article className='photo-list-article' key={imageInfo.id}>
        <h2 className='photo-list-title'>{imageInfo.title}</h2>
        <a href="#fullSize">
          <img className='photo-list-images' src={'../images/' + imageInfo.filename} /> 
        </a>

        <div id="fullSize" className="fullSize">
          <div>
            <a href="#close" title="Close" className="close">X</a>
            <img src={'../images/' + imageInfo.filename} /> 
          </div>
        </div>
        <p>{imageInfo.synopsis}</p>
      </article>
       //<Voting imageInfo = {imageInfo} imageId={id} />
      // make this into photo-items component that renders the voting as well.
      // the login comes from main
      // should have click handler dispatch action to main 
    )
  }
  render() {
    console.log('inside Photos', this.props.allImg)
    return (
        <div className='photo-list-wrapper'>
          <section className='photo-list'>
             {this.props.allImg.map(image => this.imageInfo(image.fileattributes, image.id))}
          </section>
        </div>
    );
  }
}
