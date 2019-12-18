import React from 'react';
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'

export const OrganizationListItem = (props) => {
  let organization = props.organization.attributes
  console.log(organization)
  return (
    <Link to={`/organizations/${props.organization.id}`} class="collection-item avatar">
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
  }
}

const mapStateToProps = state => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrganizationListItem);
