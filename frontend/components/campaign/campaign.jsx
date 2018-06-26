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

    let userSearch;
    if (this.props.isGm) {
      userSearch =
      <div>
        Invite more players:
        <UserSearchContainer campId={id}/>
      </div>;
    }

    let title;
    let description;
    let id;
    let gm;
    if (this.props.hasCampaign) {
      title = this.props.campaign.title;
      description = this.props.campaign.description;
      id = this.props.campaign.id;
      gm = this.props.campaign.gm_name;
    }

    let leaveCampaign;
    if (this.props.isActivePlayer) {
      const campId = this.props.campaign.id;
      const playerId = this.props.currentUser.id;
      leaveCampaign = <button onClick={this.endMembership(campId, playerId)}>
        leave campaign
      </button>;
    }


    return (
      <div className="campaign">
        <div>
          { redirect }
          <div className="campaign-title">
            { title }
          </div>
          <div className="campaign-gm">
            run by: { gm }
          </div>
          <div className="campaign-description">
            { description }
          </div>
        </div>
        { leaveCampaign }
        { userSearch }
      </div>
    );
  }

}

export default Campaign;
