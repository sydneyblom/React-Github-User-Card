import React from 'react';
import axios from 'axios';
import UserCard from './components/UserCard';
import './App.css';


class App extends React.Component {
  state = {
    userData: [],
  };


  componentDidMount() {
  axios
      .get('https://api.github.com/users/sydneyblom')
      .then(res => {
        this.setState({
          userData: res.data.message
        });
      })
      .catch(err => console.log(err));
  }



  render() {
    return (
      <div className="App">
        <UserCard />
      </div>
    );
  }
}


export default App;