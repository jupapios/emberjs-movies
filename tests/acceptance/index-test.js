import Ember from 'ember';
import startApp from '../helpers/start-app';
import { login, goToMovie } from './utils/actions';

var App;

module('Acceptance: Index', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('it redirects to the login page signed out users', function() {
  visit('/');
  andThen(function() {
    equal(currentRouteName(), 'login');
    equal(currentURL(), '/login');
  });
});

test('actors don\'t have links', function() {
  login();
  andThen(function() {
    equal(find('.qa-actors-list a').length, 0);
  });
});

test('it goes to the movie detail page', function() {
  goToMovie();
  andThen(function() {
    equal(currentRouteName(), 'movie');
  });
});

test('it lists the movies', function() {
  login();
  andThen(function() {
    ok(find('.qa-movies-list li').length > 0);
  });
});

test('it lists the 70 years older actors', function() {
  login();
  andThen(function() {
    ok(find('.qa-actors-list li').length > 0);
  });
});
