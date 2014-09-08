import Ember from 'ember';
import startApp from '../helpers/start-app';
import { goToMovie } from './utils/actions';

var App;

module('Acceptance: Movie', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('it contains the details', function() {
  expect(3);

  goToMovie('First Blood');
  andThen(function() {
    var title = find('.qa-title').text().trim();
    var score = find('.qa-score').text().trim();
    var date = find('.qa-date').text().trim();

    equal(title, 'First Blood');
    equal(score, '89%');
    equal(date, '05/27/2014');
  });
});

test('it lists the actors', function() {
  goToMovie();
  andThen(function() {
    ok(find('.qa-actors-list li').length > 0);
  });
});

test('it contains the Main page link', function() {
  expect(2);

  goToMovie();
  andThen(function() {
    var homeLink = find('.qa-home');
    equal(homeLink.length, 1);
    equal(homeLink.text().trim(), 'Main page');
  });
});

test('main page link goes to the home', function() {
  expect(3);

  goToMovie();
  click('.qa-home');
  andThen(function() {
    equal(currentRouteName(), 'index');
    equal(currentPath(), 'index');
    equal(currentURL(), '/');
  });
});