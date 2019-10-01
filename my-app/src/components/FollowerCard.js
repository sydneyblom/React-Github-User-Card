import React from "react"
import { Card, Icon, Image } from 'semantic-ui-react'

class FollowerCard extends React.Component {
        render() {
          return (
        <Card>
        <Image src= {this.props.newFollower.avatar_url} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{this.props.newFollower.login}</Card.Header>
          <Card.Meta>
          </Card.Meta>
          <Card.Description>
          <p>
            {this.props.newFollower.location} <br/> 
            {this.props.newFollower.html_url}
            
          </p>
         
          </Card.Description>
        </Card.Content>
      </Card>
          )
        } 
      }
      
      export default FollowerCard; 