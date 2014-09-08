import CustomAuthenticator from '../simple-auth/authenticator';

export default {
  name: 'authentication',

  initialize: function(container) {
    container.register('authenticator:custom', CustomAuthenticator);
  }
};
