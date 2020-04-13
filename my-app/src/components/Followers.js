import React from 'react';
import UserCard from './UserCard';

class Followers extends React.Component {


    render() { 
        return ( 
            <div>
                {
                    this.props.follower.map(newFollower => {
                        return (
                            <UserCard key={newFollower.id} userData={newFollower}/>
                        )
                    })
                }
            </div>
         );
    }
}

export default Followers; 