import React from 'react';
import FollowerCard from './FollowerCard';

class Followers extends React.Component {
    render() { 
        return ( 
            <div>
                {
                    this.props.follower.map(newFollower => {
                        return (
                            <FollowerCard newFollower={newFollower}/>
                        )
                    })
                }
            </div>
         );
    }
}

export default Followers; 