import DS from 'ember-data';

var Actor = DS.Model.extend({
  name: DS.attr('string'),
  age: DS.attr('number')
});

Actor.reopenClass({
  FIXTURES: [
    { id: '1', name: 'Sylvester Stallone', age: 68},
    { id: '2', name: 'Brian Dennehy', age: 76},
    { id: '3', name: 'Chuck Norris', age: 74 },
    { id: '4', name: 'Bill Murray', age: 63 },
    { id: '5', name: 'Robert De Niro', age: 71 }
  ]
});


export default Actor;
