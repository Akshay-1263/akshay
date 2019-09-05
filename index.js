import React from 'react';
import ReactDOM from 'react-dom';
import './app1.css';

class MyHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          value: 'Please write an essay about your favorite DOM element.'
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        alert('An essay was submitted: ' + this.state.value);
        event.preventDefault();
      }
    
      render() {
        return (
          
          <form onSubmit={this.handleSubmit}>
              <h1>login page</h1>
            <label>
              Username:
              <input type="text"/>
            </label><br />
            <label>
                Password:
                <input type="text"/>
            </label><br />
            <input type="submit" value="Submit" />
          </form>
    );
  }
}

ReactDOM.render(<MyHeader />, document.getElementById('root'));
