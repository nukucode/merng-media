import moment from "moment/moment";
import React from "react";

/* SEMANTIC UI */
import { Card, Icon, Label, Button, Image } from "semantic-ui-react";

/* REACT ROUTER DOM */
import { Link } from "react-router-dom";

function PostCard({
  post: { body, createdAt, id, username, commentCount, likes, likeCount },
}) {
  /* LIKE POST */
  const likePost = () => {
    console.log("likePost");
  };

  /* COMMENT ON POST */
  const commentOnPost = () => {
    console.log("Comment on post");
  };

  return (
    <Card fluid>
      <Card.Content>
        <Image
          floated="right"
          size="mini"
          src="https://react.semantic-ui.com/images/avatar/large/jenny.jpg"
        />
        <Card.Header>{username.toUpperCase()}</Card.Header>
        <Card.Meta as={Link} to={`/posts/${id}`}>
          {moment(createdAt).fromNow(true)}
        </Card.Meta>
        <Card.Description>{body}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button as="div" labelPosition="right" onClick={likePost}>
          <Button color="teal" basic>
            <Icon name="heart" />
          </Button>
          <Label basic color="teal" pointing="left">
            {likeCount}
          </Label>
        </Button>
        <Button as="div" labelPosition="right" onClick={commentOnPost}>
          <Button color="blue" basic>
            <Icon name="comments" />
          </Button>
          <Label basic color="blue" pointing="left">
            {commentCount}
          </Label>
        </Button>
      </Card.Content>
    </Card>
  );
}

export default PostCard;
