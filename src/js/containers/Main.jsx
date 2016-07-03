import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as appActions from '../actions/index';
import MainApp from '../components/MainApp';



class MainContainer extends React.Component {

  render() {
    return (
        <MainApp {...this.props}/>
    );
  }
}


function mapStateToProps(state) {
  return {
    ...state
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      app: bindActionCreators(appActions, dispatch)
    }
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);























































// import React from 'react'
// import { connect } from 'react-redux'
// import { getChangeName, getChangeAge } from '../actions'

// let ChangeName = ({ dispatch }) => {
//   let input

//   return (
//     <main className="container">
//       <form onSubmit={e => {
//         e.preventDefault()
//         if (!input.value.trim()) {
//           return
//         }
//         dispatch(getChangeName(input.value))
//         input.value = ''
//       }}>
//         <input ref={node => {
//           input = node
//         }} />
//         <button type="submit">
//           Change Name
//         </button>
//       </form>
//     </main>
//   )
// }
// ChangeName = connect()(ChangeName)

// export default ChangeName