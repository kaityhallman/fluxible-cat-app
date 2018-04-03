import Feed from '../components/Feed';
import Login from '../components/Login';

import getPosts from '../actions/getPosts';

export default {
  login: {
    path: '/',
    method: 'get',
    page: 'login',
    title: 'Log In',
    handler: Login,
  },
  feed: {
    path: '/feed',
    method: 'get',
    page: 'feed',
    title: 'NewsFeed',
    handler: Feed,
    action: getPosts,
  },
};
