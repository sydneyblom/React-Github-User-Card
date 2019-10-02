import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

class UserCard extends React.Component {
  render() {
    return (
      <div className='card-container'>
      <Card>
        <Image src={this.props.userData.avatar_url} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{this.props.userData.name}</Card.Header>
          <Card.Meta>{this.props.userData.login}</Card.Meta>
          <Card.Description>
            <p>
              {this.props.userData.location} <br />
              {this.props.userData.bio} <br />
              <a
                href={this.props.userData.html_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {this.props.userData.html_url}
              </a>
            </p>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name="user" />
            Followers: {this.props.userData.followers} <br />
            Following: {this.props.userData.following}
          </a>
        </Card.Content>
      </Card>
      </div>
    );
  }
}
export default UserCard;
