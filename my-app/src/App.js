import React from 'react';
import axios from 'axios';
import UserCard from './components/UserCard';
import Followers from './components/Followers';
import './App.css';


import { Card } from 'semantic-ui-react';
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: {},
      followers: []
    }
  }


  componentDidMount() {
  axios.get(`https://api.github.com/users/sydneyblom`)
.then(res => {
  this.setState({
        userData: res.data,
  });
})

axios.get(`https://api.github.com/users/sydneyblom/followers`)
.then(res => {

  res.data.forEach(data => {
    axios.get(data.url)
    .then(resFollower => {
      this.setState({
       followers: [...this.state.followers, resFollower.data]
      });
    }
  ).catch(err => console.log(err));
})
}).catch(err => console.log(err));
 

}

  render() {
    return (

  
      <div className="App">

        <UserCard userData={this.state.userData}  />

<Followers follower={this.state.followers} />  

      </div>
  );
  }
}


export default App;