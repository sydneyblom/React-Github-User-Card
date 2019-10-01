import React from 'react';
import axios from 'axios';
import UserCard from './components/UserCard';
import Followers from './components/Followers';
import './App.css';
import { Grid } from 'semantic-ui-react';


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
  console.log(res);
})

axios.get(`https://api.github.com/users/sydneyblom/followers`)
.then(res => {
  this.setState({
    followers: res.data,
  });
  console.log(res);
})

      .catch(err => console.log(err));
  }



  render() {
    return (
      <div className="App">
  <Grid>
        <UserCard userData={this.state.userData}  />
</Grid>
<Followers follower={this.state.followers} />  

      </div>
    );
  }
}


export default App;