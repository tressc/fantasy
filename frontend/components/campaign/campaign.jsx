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

    return (
      <div>
        hello from the campaign show page
      </div>
    );
  }

}

export default Campaign;
