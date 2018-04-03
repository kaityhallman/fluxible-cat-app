import createStore from 'fluxible/addons/createStore';

const UserStore = createStore({
  storeName: 'UserStore',
  handlers: {
    'USER_LOGGED_IN': 'handleUserReceived',
  },
  initialize: function(dispatcher) {
    this.username = null;
  },
  handleUserReceived: function(payload) {
    this.username = payload.username;
    this.emitChange();
  },
  getUsername: function() {
    return this.username;
  },
  dehydrate: function() {
    return {
      username: this.username,
    };
  },
  rehydrate: function(state) {
    this.username = state.username;
  }
});

export default UserStore;
