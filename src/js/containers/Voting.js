import React, { PropTypes } from 'react';

import { getPhotos, upVote } from '../actions/index'


const Voting = ({ imageInfo, imageId }) => (
     

      <section>
        <aside>
          <button onClick = { e => {
             e.preventDefault()
             console.log('clicked id number: ', imageId)
             upVote(imageId)
             }} 
             value="Vote"> Vote
          </button>
        </aside>
        <aside className = "upVote">
          {imageInfo.vote}
        </aside>
      </section>
)


export default Voting
