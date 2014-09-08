import DS from 'ember-data';

var Movie = DS.Model.extend({
  title: DS.attr('string'),
  score: DS.attr('number'),
  release: DS.attr('date'),
  actors: DS.hasMany('actor', {async:true})
});

Movie.reopenClass({
  FIXTURES: [
    { id: '16521', title: 'First Blood', score: '89', actors: ['1', '2'], release: '2014-05-27T12:54:01' },
    { id: '14444', title: 'Missing in Action', score: '23', actors: ['3'], release: '2014-05-27T12:54:01' }
  ]
});

export default Movie;
