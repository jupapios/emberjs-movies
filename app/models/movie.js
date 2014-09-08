import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  score: DS.attr('number'),
  release: DS.attr('date'),
  actors: DS.hasMany('actor', {async:true})
});
