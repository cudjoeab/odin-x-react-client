import React from 'react';
import { connect } from 'react-redux'

export const ClientListItem = (props) => {
  let client = props.client.attributes
  return (
    <li class="collection-item avatar">
      <img src="https://cdn2.iconfinder.com/data/icons/man-user-human-person-avatar-business-profile/100/18-1User_5-2-512.png" alt="" class="circle"/>
      <span class="title">{client.first_name} {client.last_name}</span>
      <p>Phone: {client.phone} <br/>
         Email: {client.email}<br/>
      </p>
      <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
    </li>
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

export default connect(mapStateToProps, mapDispatchToProps)(ClientListItem);
