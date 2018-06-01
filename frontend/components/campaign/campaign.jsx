import React from 'react';
import { Redirect } from 'react-router-dom';

class Campaign extends React.Component {
  constructor(props) {
    super(props);
  }


  componentDidMount() {
    this.props.fetchCampaign(this.props.match.params.id);
  }

  render() {

    let redirect;
    if (this.props.validUsers.length > 0) {
      if (!this.props.validUsers.includes(this.props.currentUser.id)) {
        redirect = <Redirect to='/' />;
      }
    }

    return (
      <div>
        { redirect }
        hello from the campaign show page
      </div>
    );
  }

}

export default Campaign;
