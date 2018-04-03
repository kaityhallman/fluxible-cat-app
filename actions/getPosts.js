export default function(context, payload, callback) {
  context.service.read('posts', {}, {}, (err, posts) => {
    if (err) {
      callback(err);
    } else {
      context.dispatch('POSTS_RECEIVED', {
        posts,
      });
      callback();
    }
  });
};
