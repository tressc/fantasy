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

  handleSubmit(event) {
    event.preventDefault();
    const campaign = Object.assign({}, this.state);
    this.props.createCampaign({campaign: campaign}).then(() => {
      if (this.props.errors.length === 0) {
        this.props.closeModal();
      }
    });
  }

  render() {
    const errors = this.props.errors.map(error => {
      return (
        <li>{ error.toLowerCase() }</li>
      );
    });

    return (
      <div className='campaign-form-box'>
        <form onSubmit={this.handleSubmit}>
          <input placeholder='campaign title' type='text' value={this.state.title} onChange={this.update('title')}></input>
          <textarea placeholder='brief description of campaign' type='text' value={this.state.description} onChange={this.update('description')}></textarea>
        </form>
        <button onClick={this.props.closeModal}>cancel</button>
        <button onClick={this.handleSubmit}>create</button>
        <ul>
          { errors[0] }
        </ul>
      </div>
    );
  }

}

export default CampaignForm;
