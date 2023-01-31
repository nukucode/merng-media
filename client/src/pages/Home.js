import React, { useContext, useEffect } from "react";

/* GRAPHQL AND APOLLO CLIENT & UI & AUTH */
import { useQuery } from "@apollo/client";
import { FETCH_POSTS_QUERY } from "../util/graphql";
import { Grid, Transition } from "semantic-ui-react";
import { AuthContext } from "../context/auth";

/* COMPONENTS */
import PostCard from "../components/PostCard";
import PostForm from "../components/PostForm";

function Home() {
  const { user } = useContext(AuthContext);
  const { loding, data } = useQuery(FETCH_POSTS_QUERY);
  const posts = data?.getPosts;

  return (
    <Grid columns={3} divided>
      <Grid.Row className="page-title">
        <h1>Recent Posts</h1>
      </Grid.Row>
      <Grid.Row>
        {user && (
          <Grid.Column>
            <PostForm />
          </Grid.Column>
        )}
        {loding ? (
          <h1>Loding Posts</h1>
        ) : (
          <Transition.Group>
           { posts && posts.map((post) => (
            <Grid.Column key={post.id} style={{ marginBottom: "20px" }}>
              <PostCard post={post} />
            </Grid.Column>
            ))}
          </Transition.Group>
        )}
      </Grid.Row>
    </Grid>
  );
}

export default Home;
