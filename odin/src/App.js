import React from 'react';
import {getApiStatus} from './services/status/Status'
import { connect } from 'react-redux'
import './App.css';

export const App = (props) => {
  
  const initialize = () => {
    checkApiStatus()
  }

  const checkApiStatus = () => {
    getApiStatus().then(response => response.json()).then(object => {
      if (object.code === 200) {
        props.toggleApiStatus()
      }
    })
  }

  const renderApiStatus = () => {
    let isApiDown = props.isApiDown
    if (!isApiDown) {
      return <span className="new badge blue" data-badge-caption="ODIN is active"></span>
    } else {
      return <span className="new badge red" data-badge-caption="ODIN is inactive"></span>
    }
  }
  
  initialize()


  return (
    <div className="App">
      <div className="api-status">
        {renderApiStatus()}
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    toggleApiStatus: () => dispatch({
      type: 'toggleApiStatus'
    })
  }
}

const mapStateToProps = state => {
  return {
    isApiDown: state.isApiDown,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
