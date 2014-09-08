import Base from 'simple-auth/authenticators/base';
import Ember from 'ember';

export default Base.extend({

  /**
   * @property serverEndpoint
   * @type {String}
   */
  serverEndpoint: '/session',

  /**
   * Authenticates the session with the specified credentials
   * If the credentials are valid and authentication succeeds, a
   * promise that resolves with the server's response is returned, otherwise a
   * promise that rejects with the server error is returned
   * @method authenticate
   * @param {Object} credentials
   * @param {String} credentials.identification
   * @param {String} credentials.password
   * @return {Ember.RSVP.Promise} A promise that resolves when the provider
   * successfully authenticates a user and rejects otherwise
   * @override
   */
  authenticate: function(credentials) {
    return new Ember.RSVP.Promise(function(resolve, reject) {
      var data = {
        username: credentials.identification,
        password: credentials.password
      };

      this.makeRequest(data).then(function(response) {
        Ember.run(function() {
          resolve(response);
        });
      }, function(xhr) {
        Ember.run(function() {
          reject(xhr.responseJSON || xhr.responseText);
        });
      });
    }.bind(this));
  },

  /**
   * @method makeRequest
   * @param {Object} data
   * @return {jqXHR}
   * @private
   */
  makeRequest: function(data) {
    return Ember.$.ajax({
      url:         this.serverEndpoint,
      type:        'POST',
      data:        data,
      dataType:    'json'
    });
  }
});