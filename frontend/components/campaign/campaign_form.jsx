import React from 'react';

class CampaignForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
    };
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (event) => {
      this.setState({
        [field]: event.currentTarget.value
      });
    };
  }

  // TODO: createCampaign

  handleSubmit(event) {
    event.preventDefault();
    const campaign = Object.assign({}, this.state);
    this.props.createCampaign({campaign: campaign});
  }

  render() {
    const errors = this.props.errors.map(error => {
      return (
        <li>{ error }</li>
      );
    });

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input placeholder='campaign title' type='text' value={this.state.title} onChange={this.update('title')}></input>
          <input placeholder='brief description of campaign' type='text' value={this.state.description} onChange={this.update('description')}></input>
          <input type='submit' value='create'></input>
        </form>
        <button onClick={this.props.closeModal}>cancel</button>
        <ul>
          { errors }
        </ul>
      </div>
    );
  }

}

export default CampaignForm;
