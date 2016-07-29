import React, { Component } from 'react';
import { connect } from 'react-redux';
import { upVote } from '../actions/index'


class Voting extends Component {

 
render() {
  console.log('imageInfo', this.props.imageInformation)
    return (
      <section>
        <aside>
          <button onClick = { e => {
             e.preventDefault()
             console.log('clicked id number: ', this.props.imageId)
             this.props.upVote(this.props.imageId)
             }} 
             value="Vote"> Vote
          </button>
        </aside>
        <aside className = "upVote">
          {this.props.imageInfo.vote}
        </aside>
      </section>
    )
  }     
}

function mapStateToProps(state) {
  return {
    imageInformation: state.list
  }
}

export default connect(mapStateToProps, { upVote })(Voting);


//render() {
//     return (
//       <section>
//         <aside>
//           <button onClick = { e => {
//              e.preventDefault()
//              console.log('clicked id number: ', this.props.imageId)
//              this.upVote(this.props.imageId)
//              }} 
//              value="Vote"> Vote
//           </button>
//         </aside>
//         <aside className = "upVote">
//           {this.props.imageInfo.vote}
//         </aside>
//       </section>
//     )
//   }     
// }