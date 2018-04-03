import posts from '../mockData/posts.json';

export default {
  name: 'posts',
  read: function(req, res, params, config, callback) {
    // execute a db call
    callback(null, posts);
  }
}
