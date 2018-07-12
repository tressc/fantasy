import React from 'react';

class FolderForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      status: ''
    };
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (event) => {
      console.log(event.currentTarget.value);
      this.setState({
        [field]: event.currentTarget.value
      });
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    const folder = Object.assign({}, this.state);
    this.props.createFolder({folder: folder}).then(() => {
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
      <div className='folder-form-box'>
        <div className='folder-form-cancel'>
          <button onClick={this.props.closeModal}>
            cancel
          </button>
        </div>
        <form
          onSubmit={this.handleSubmit}
          className='folder-form-fields'
        >
          <input
            type='radio'
            name='status'
            value='private'
            onClick={this.update('status')}
          />
          <input
            type='radio'
            name='status'
            value='public'
            onClick={this.update('status')}
          />
          <input
            placeholder='chapter title'
            type='text'
            value={this.state.title}
            onChange={this.update('title')}
            maxLength='20'
          />
        </form>
      </div>
    );
  }
}

export default FolderForm;
