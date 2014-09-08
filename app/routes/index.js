import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return Ember.RSVP.hash({
      movies: this.store.find('movie'),
      actors: this.store.find('actor')
    });
  }
});
