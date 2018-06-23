import React from 'react';
import { Redirect } from 'react-router-dom';
import UserSearchContainer from '../search/user_search_container';

class Campaign extends React.Component {
  constructor(props) {
    super(props);
    this.endMembership = this.endMembership.bind(this);
  }


  componentDidMount() {
    this.props.removeMembershipErrors();
    this.props.fetchCampaign(this.props.match.params.id);
  }

  endMembership(campId, playerId) {
    return () => {
      let membershipId;
      const memKeys = Object.keys(this.props.memberships);
      memKeys.forEach(id => {
        const m = this.props.memberships[id];
        if (m.campaign_id === campId && m.player_id === playerId) {
          membershipId = id;
        }
      });
      this.props.destroyMembership(membershipId);
    };
  }

  render() {
    let redirect;
    if (this.props.validUser === false) {
      redirect = <Redirect to='/' />;
    }

    let title;
    let description;
    let id;
    if (this.props.hasCampaign) {
      title = this.props.campaign.title;
      description = this.props.campaign.description;
      id = this.props.campaign.id;
    }

    let leaveCampaign;
    if (this.props.isPlayer) {
      const campId = this.props.campaign.id;
      const playerId = this.props.currentUser.id;
      leaveCampaign = <button onClick={this.endMembership(campId, playerId)}>
        leave campaign
      </button>;
    }


    return (
      <div>
        { redirect }
        <div>
          { title }
        </div>
        <div>
          { description }
        </div>
        { leaveCampaign }
        <UserSearchContainer campId={id}/>
      </div>
    );
  }

}

export default Campaign;
