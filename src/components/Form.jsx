import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        id: ''
    }
  }

  handleID(newID) {
    this.setState({id: newID});
  }
    
  render() {
    return (
      <div>
        <IDLabel id={this.state.id} handleID={this.handleID}/>
        <PwdLabel/>
        <ValidLabel/>
        <NameLabel/>
        <PhoneLabel/>
        <EmailLabel/>
        <p></p>
        <AdButton/>
      </div>
    )
  }

}