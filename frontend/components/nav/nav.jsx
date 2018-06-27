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
    this.handleMove = this.handleMove.bind(this);
  }

  componentWillMount() {
    this.props.fetchUser(this.props.currentUser);
  }

  handleClickOutside(e) {
    if (this.state.dropdown === 'open-dropdown') {
      this.changeDropClass();
    }
  }

  handleMove() {
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
    let mailCount;
    if (this.props.hasUser) {
      if (this.props.pendings.length === 0) {
        dropdown = <div className='dropdown-item'>no mail at this time</div>;
        } else {
          let num = this.props.pendings.length;
          if (num > 99) {
            num = 99;
          }
          mailCount =
          <div className='nav-mail-count'>
            <span>
              { num }
            </span>
          </div>;
          dropdown = this.props.pendings.map(p => {
            return (
              <div key={ p.membershipId } className='dropdown-item'>
                <div>
                  { p.gm } has invited you to join their game,{ " "}
                  <a
                    href={`/#/campaigns/${p.campaignId}`}
                    onClick={ this.handleMove }
                    >{ p.name }</a>.
                </div>
                <div className='dropdown-item-buttons'>
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
              </div>
            );
          });
        }
    }

    const profileId = this.props.currentUser;
    return (
      <div className='nav-bar' onClick={ this.handleMove }>
        <div className='nav-left'>
          <div className='nav-left-home'>
            <a href='/#/' onClick={ this.handleMove }>home</a>
          </div>
          <div className='nav-left-profile'>
            <a href={`/#/users/${profileId}`} onClick={ this.handleMove }>profile</a>
          </div>
          <div className='nav-mail'>
            <a
              onClick={ this.changeDropClass }
              className='nav-mail-button'
              >
              mail
              { mailCount }
            </a>
            <div className={ this.state.dropdown }>
              <div className='nav-mail-triangle'></div>
              { dropdown }
            </div>
          </div>
        </div>
        <div className='nav-right'>
          <a onClick={this.props.logout}>
            log out
          </a>
        </div>
      </div>
    );
  }
}

export default onClickOutside(Nav);
