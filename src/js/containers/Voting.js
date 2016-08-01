import React, { Component } from 'react';
import { connect } from 'react-redux';
import { upVote } from '../actions/index'

class Voting extends Component {

  render() {
    return (
      <aside className="voting">
        <button className="buttonVote" onClick = { e => {
           e.preventDefault()
           this.props.upVote(this.props.imageId)
           }} 
          > Vote <span className="vote">{this.props.imageInfo.vote}</span>
        </button>
      </aside>
    )
  }     
}

function mapStateToProps(state) {
  return {
    imageInformation: state.list
  }
}

export default connect(mapStateToProps, { upVote })(Voting);