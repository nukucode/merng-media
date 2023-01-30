import React from "react";

/* GRAPHQL AND APOLLO CLIENT */
import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";

/* SEMANTIC */
import { Grid } from "semantic-ui-react";

/* COMPONENTS */
import PostCard from "../components/PostCard";

function Home() {
  const { loding, data } = useQuery(FETCH_POSTS_QUERY);
  const posts = data?.getPosts;

  return (
    <Grid columns={3} divided>
      <Grid.Row className="page-title">
        <h1>Recent Posts</h1>
      </Grid.Row>
      <Grid.Row>
        {loding ? (
          <h1>Loding Posts</h1>
        ) : (
          posts &&
          posts.map((post) => (
            <Grid.Column key={post.id} style={{ marginBottom: "20px" }}>
              <PostCard post={post} />
            </Grid.Column>
          ))
        )}
      </Grid.Row>
    </Grid>
  );
}

const FETCH_POSTS_QUERY = gql`
  {
    getPosts {
      id
      body
      createdAt
      username
      likeCount
      likes {
        username
      }
      commentCount
      comments {
        id
        username
        createdAt
        body
      }
    }
  }
`;

export default Home;
