import React from 'react';

import { getPhotos, upVote } from '../actions/index'


class Voting extends React.Component {
  render() {
    return (
        <section>
          <aside>
            <button onClick = { e => {
                 e.preventDefault()
                 console.log('clicked',this.props.imageId)
                 upVote(this.props.imageId)
               
             }} 
             value="Vote"> Vote
            </button>
          </aside>
          <aside className = "upVote">
            {this.props.imageInfo.vote}
          </aside>
        </section>
    );
  }
}


export default Voting
