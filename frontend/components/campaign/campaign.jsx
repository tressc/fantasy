import React from 'react';
import { Redirect } from 'react-router-dom';

class Campaign extends React.Component {
  constructor(props) {
    super(props);
    this.endMembership = this.endMembership.bind(this);
  }


  componentDidMount() {
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
    if (this.props.hasCampaign) {
      title = this.props.campaign.title;
      description = this.props.campaign.description;
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
      </div>
    );
  }

}

export default Campaign;
