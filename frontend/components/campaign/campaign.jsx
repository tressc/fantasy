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

    if (this.props.validUser === false) {
      redirect = <Redirect to='/' />;
    }

    return (
      <div>
        { redirect }
        <div>
          hello from the campaign show page
        </div>
      </div>
    );
  }

}

export default Campaign;