import React from 'react';
import { Link } from 'react-router-dom';
import onClickOutside from 'react-onclickoutside';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdown: 'closed-dropdown'
    };
    this.changeDropClass = this.changeDropClass.bind(this);
    this.handleChoice = this.handleChoice.bind(this);
  }

  componentWillMount() {
    this.props.fetchUser(this.props.currentUser);
  }

  handleClickOutside(e) {
    if (this.state.dropdown === 'open-dropdown') {
      this.changeDropClass();
    }
  }

  handleChoice(choice, id) {
    return () => {
      if (choice === 'approve') {
        this.props.approveMembership(id);
      } else {
        this.props.destroyMembership(id);
      }
    };
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
    if (this.props.hasUser) {
      if (this.props.pendings.length === 0) {
        dropdown = <div>no mail at this time</div>;
        } else {
          dropdown = this.props.pendings.map(p => {
            return (
              <div key={ p.id }>
                <span>{ p.name }</span>
                <span>{ p.gm }</span>
                <button onClick={
                  this.handleChoice('approve', p.membershipId)
                }>
                  approve
                </button>
                <button onClick={
                  this.handleChoice('reject', p.membershipId)
                }>
                  reject
                </button>
              </div>
            );
          });
        }
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

export default onClickOutside(Nav);
