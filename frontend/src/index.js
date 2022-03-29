import React from 'react';
import ReactDOM from 'react-dom';

class ReadName extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '', lastName: ''};
    //this.lastName = '';
  }
  handleChange = event => {
    this.setState({value: event.target.value});
    //fetch("http://127.0.0.1:5000/name/" + event.target.value)
    fetch("/name/" + event.target.value)
      .then(response => response.json())
      .then(data => {this.setState({lastName: data.lastName}); console.log(this.state.lastName);})
      .catch(error => {this.setState({lastName: 'User Not Found'}); console.log(this.state.lastName);})
  };
  render() {
    return (
      <div>
        <p>Write Hamza to see my last name!</p>
        <input
          type = "text"
          name = "username"
          value = {this.state.value}
          onChange={this.handleChange}
        />
        <p>{this.state.lastName}</p>
      </div>
    );
  }
}

ReactDOM.render(
  <ReadName />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
