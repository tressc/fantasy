import React from 'react';
import { Redirect } from 'react-router-dom';
import UserSearchContainer from '../search/user_search_container';

class Campaign extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.endMembership = this.endMembership.bind(this);
    this.closeDropdown = this.closeDropdown.bind(this);
    this.changeDropdown = this.changeDropdown.bind(this);
    this.removePlayer = this.removePlayer.bind(this);
  }

  closeDropdown(id) {
    this.setState({[id]: "campaign-dropdown-closed"});
  }

  changeDropdown(id) {
    return () => {
      if (this.state[id].dropdown === "campaign-dropdown-closed") {
        this.setState({[id]: "campaign-dropdown-open"});
      } else {
        this.setState({[id]: "campaign-dropdown-closed"});
      }
    };
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

  removePlayer(id) {
    if (this.props.isGm) {
      return (
        <div
          className="remove-player-triangle"
          onClick={ this.changeDropdown(id) }
          >
        </div>
      );
    }
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
        <UserSearchContainer campId={ this.props.campaignId }/>
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

    let players;
    if (this.props.activePlayers.length > 0) {
      this.props.activePlayers.forEach(p => {
        debugger
         this.state[p.id] = "campaign-dropdown-closed";
        debugger
      });
      players = this.props.activePlayers.map(p => {
        return (
          <div
            key={ p.id }
            className="campaign-player"
            >
            { p.username }
            { this.removePlayer(p.id) }
          </div>
        );
      });
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
          <div className="campaign-players">
            <div>
              players:
            </div>
            { players }
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
