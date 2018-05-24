import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const profileId = this.props.currentUser.id;
    return (
      <div className='nav-bar'>
        <div className='nav-left'>
          <a href={`/#/users/${profileId}`}>profile</a>
        </div>
        <div className='nav-right'>
          <button onClick={this.props.logout}>
            log out
          </button>
        </div>
      </div>
    );
  }
}

export default Nav;
