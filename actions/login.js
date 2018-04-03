export default function(context, payload, callback) {
  context.dispatch('USER_LOGGED_IN', {
    username: payload.username,
  });
  callback();
}
