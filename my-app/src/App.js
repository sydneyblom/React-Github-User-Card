import React from 'react';
import axios from 'axios';
import UserCard from './components/UserCard';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: {}
    }
  }


  componentDidMount() {
  axios
   .get(`https://api.github.com/users/sydneyblom`)
.then(res => {
  this.setState({
        userData: res.data,
  });
  console.log(res);
})
      .catch(err => console.log(err));
  }



  render() {
    return (
      <div className="App">
        <UserCard userData={this.state.userData}  />
      </div>
    );
  }
}


export default App;