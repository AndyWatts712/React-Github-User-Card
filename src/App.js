import React from 'react';
import './App.css';
import Followers from './components/Followers'
import Axios from 'axios';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      githubUser: [],
      followers: []
    }
  }

  componentDidMount() {
    Axios
      .get('https://api.github.com/users/andywatts712')
      .then(res => {
        this.setState({
          githubUser: res.data
        })
      })
      .catch(err => {
        console.log(err)
      })
    Axios
      .get('https://api.github.com/users/andywatts712/followers')
      .then(res => {
        this.setState({
          followers: res.data
        })
      })
  }
  
  render() {
    return (
      <div>
        <h1>{this.state.githubUser.name}</h1>
        <Followers followers={this.state.followers} />
      </div>
    )
  }

}
export default App;
