import Ember from 'ember';
import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('movie', 'Movie Model', {
  needs: ['model:actor']
});

test('actor relationship', function() {
  expect(2);

  var Movie = this.store().modelFor('movie');
  var relationship = Ember.get(Movie, 'relationshipsByName').get('actors');

  equal(relationship.key, 'actors');
  equal(relationship.kind, 'hasMany');
});
