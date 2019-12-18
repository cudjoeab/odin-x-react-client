import React from 'react';
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'

export const OrganizationListItem = (props) => {
  let organization = props.organization.attributes
  let path = `/organizations/${props.organization.id}`
  return (
    <Link to={path} class="collection-item avatar" onClick={ () => { props.addBreadCrumb({path: path, name: organization.name}) }}>
      <img src="https://cdn0.iconfinder.com/data/icons/seo-ultra-2/1024/Global_Organization-01-512.png" alt="" class="circle"/>
      <span class="title">{organization.name}</span>
      <p>{organization.address} <br/>
         {organization.client_count} Clients<br/>
      </p>
      <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
    </Link>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    addBreadCrumb: (data) => dispatch({
      type: 'addBreadCrumb',
      value: data
    }), 
  }
}

const mapStateToProps = state => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrganizationListItem);
