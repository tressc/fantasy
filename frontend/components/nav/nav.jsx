import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdown: 'closed-dropdown'
    };
    this.changeDropClass = this.changeDropClass.bind(this);
  }

  changeDropClass() {
    if (this.state.dropdown === "closed-dropdown") {
      this.setState({ dropdown: 'open-dropdown' });
    } else {
      this.setState({ dropdown: 'closed-dropdown' });
    }
  }

  render() {
    let dropdown;
    if (this.props.pendings.length === 0) {
      dropdown = <div>no mail at this time</div>;
    } else {
      this.props.pendings.map(membership => {
        return (
          <div key={ membership.id }>
            <span>campaign name</span>
            <span>gm name</span>
            <button>approve</button>
            <button>reject</button>
          </div>
        );
      });
    }

    const profileId = this.props.currentUser;
    return (
      <div className='nav-bar'>
        <div className='nav-left'>
          <div>
            <a href='/#/'>home</a>
          </div>
          <div>
            <a href={`/#/users/${profileId}`}>profile</a>
          </div>
          <div>
            <button
              onClick={ this.changeDropClass }
              >
              mail
            </button>
            <div className={ this.state.dropdown }>
              { dropdown }
            </div>
          </div>
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
