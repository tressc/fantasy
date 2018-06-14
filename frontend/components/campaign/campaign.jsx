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
    let title;
    let description;

    if (this.props.hasCampaign) {
      title = this.props.campaign.title;
      description = this.props.campaign.description;
    }

    let redirect;

    if (this.props.validUser === false) {
      redirect = <Redirect to='/' />;
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
      </div>
    );
  }

}

export default Campaign;
