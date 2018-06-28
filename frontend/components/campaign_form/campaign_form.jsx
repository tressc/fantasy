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
        <div>{ error.toLowerCase() }</div>
      );
    });


    return (
      <div className='campaign-form-box'>
        <div className='campaign-form-cancel'>
          <button onClick={this.props.closeModal}>cancel</button>
        </div>
        <form onSubmit={this.handleSubmit} className='campaign-form-fields'>
          <input
            placeholder='campaign title'
            type='text' value={this.state.title}
            onChange={this.update('title')}
            maxLength='20'
          />
          <textarea
            placeholder='brief description of campaign'
            type='text'
            maxLength='75'
            rows='5'
            value={this.state.description}
            onChange={this.update('description')}
          />
        </form>
        <div className='campaign-form-create'>
          <button onClick={this.handleSubmit}>create</button>
        </div>
        <div className='campaign-form-errors'>
          { errors[0] }
        </div>
      </div>
    );
  }

}

export default CampaignForm;
