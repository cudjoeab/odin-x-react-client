import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {isMobile, isTablet} from "react-device-detect";
import {searchForClients} from '../../services/search/Search'

export const Navbar = (props) => {

  const searchInputHandler = (e) => {
    let input = e.target.value
    if (e.key === 'Enter') {
      searchForClients(input).then(response => response.json())
      .then(object => {
        if (object.data) {
          props.dispatchClientSearchResults(object.data)
        }
      })
    }
  }

  const renderNavbarContext = () => {
    if (isMobile) {
      return (
        <nav>
          <div class="nav-wrapper">
            <div class="input-field">
              <input onKeyUp={searchInputHandler}/>
              <label class="label-icon" for="search"><i class="material-icons">search</i></label>
              <i class="material-icons">close</i>
            </div>
          </div>
        </nav>
      )
    } else {
      return (
        <nav>
          <div class="nav-wrapper">
            <div class="input-field">
              <input onKeyUp={searchInputHandler}/>
              <label class="label-icon" for="search"><i class="material-icons">search</i></label>
              <i class="material-icons">close</i>
            </div>
          </div>
        </nav>
      )
    }
  }
  return (
    renderNavbarContext()
  );
}

const mapDispatchToProps = dispatch => {
  return {
    dispatchClientSearchResults: (data) => dispatch({
      type: 'dispatchClientSearchResults',
      value: data
    })
  }
}

const mapStateToProps = state => {
  return {
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
