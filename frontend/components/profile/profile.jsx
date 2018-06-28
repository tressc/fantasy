import React from 'react';
import { Redirect, Link } from 'react-router-dom';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.openModal = this.openModal.bind(this);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.id);
  }

  openModal(val) {
    return () => {
      this.props.removeErrors();
      this.props.openModal(val);
    };
  }

  render() {
    let redirect;

    if (parseInt(this.props.userId) !== this.props.currentUserId) {
      redirect = <Redirect to='/' />;
    }

    let gmOf;
    let playerIn;

    if (this.props.hasCampaigns) {
      gmOf = this.props.runCampaigns.map(camp => {
        return (
          <li key={camp.id}>
            <Link to={`/campaigns/${camp.id}`}>{camp.title}</Link>
          </li>
        );
      });

      playerIn = this.props.memberCampaigns.map(camp => {
        return (
          <li key={camp.id}>
            <Link to={`/campaigns/${camp.id}`}>{camp.title}</Link>
          </li>
        );
      });
    }

    return (
      <div className='profile'>
        { redirect }
        <div className='profile-name'>
          { this.props.currentUser.username }
        </div>
        <div className='profile-home'>
          <div className='profile-home-list'>
            <span>game master of:</span>
            <ul>
              { gmOf }
            </ul>
            <button onClick={this.openModal('campaign')}>
              new campaign
            </button>
          </div>
          <div className='profile-home-list'>
            <span>player in:</span>
            <ul>
              { playerIn }
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
