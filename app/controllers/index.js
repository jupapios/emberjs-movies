import Ember from 'ember';

export default Ember.ObjectController.extend({

  /**
   * Filters 70 years older actors
   * @return {Array.<DS.Model>} filtered actors
   */
  filteredActors: function() {
    return this.get('actors').filter(function(actor) {
      return actor.get('age') > 70;
    });
  }.property('actors')
});
