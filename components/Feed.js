import React from 'react';
import connectToStores from 'fluxible-addons-react/connectToStores';

import FeedStore from '../stores/FeedStore';

function Feed(props) {
  return (
    <div>
      <h2>Cat Feed</h2>
      {
        props.posts.map(post => {
          return (
            <span key={post.id}>
              <hr/>
              <p><strong>Post by: {post.user}</strong></p>
              {post.type === 'image' && <img src={post.url} alt={post.caption}/>}
              <p>{post.message}</p>
            </span>
          );
        })
      }
    </div>
  );
}

export default connectToStores(
  Feed,
  [FeedStore],
  (context, props) => ({
    posts: context.getStore(FeedStore).getPosts(),
  }),
);
