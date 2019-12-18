import React, { useEffect } from 'react'
import {getApiStatus} from './services/status/Status'
import { connect } from 'react-redux'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.css';
import OrganizationContainer from './components/organization/containers/OrganizationContainer/OrganizationContainer'
import OrganizationShow from './components/organization/OrganizationShow/OrganizationShow'
import VenueShow from './components/venue/VenueShow/VenueShow'

export const App = (props) => {
  
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
  
  useEffect(() => {
    checkApiStatus()
  }, [])

  return (
    <BrowserRouter>    
      <div className="App">
        <div className="api-status">
          {renderApiStatus()}
        </div>
      </div>
      <Switch>
        <Route exact path='/organizations/:id' component={OrganizationShow}/>
        <Route exact path='/organizations'  component={OrganizationContainer}/>
        <Route exact path='/organizations/:organizationId/venues/:venueId'  component={VenueShow}/>
      </Switch>
    </BrowserRouter>
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
