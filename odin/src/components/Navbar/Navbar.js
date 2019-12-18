import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {isMobile, isTablet} from "react-device-detect";
export const Navbar = (props) => {


  const renderNavbarContext = () => {
    if (isMobile) {
      return (
        <nav>
          <div class="nav-wrapper">
            <div class="input-field">
              <input id="search" type="search" required/>
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
              <input id="search" type="search" required/>
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
  }
}

const mapStateToProps = state => {
  return {
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
