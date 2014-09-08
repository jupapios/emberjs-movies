import Ember from 'ember';
import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('controller:index', 'Index Controller');

test('it filters the 70 years older actors', function() {
  var controller = this.subject({
    actors: [
      Ember.Object.create({ age: 90 }),
      Ember.Object.create({ age: 1 })
    ]
  });
  equal(controller.get('filteredActors').length, 1);
});
