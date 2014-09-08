import Ember from 'ember';
import startApp from '../helpers/start-app';
import { login } from './utils/actions';

var App;

module('Acceptances: Login', {
  setup: function(){
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('it contains the sign in form', function() {
  expect(4);

  visit('/login');
  andThen(function() {
    var inputs = find('input');
    var username = find('.qa-username');
    var password = find('.qa-password');
    var submit = find('.qa-submit');

    equal(inputs.length, 3);
    equal(username.attr('type'), 'text');
    equal(password.attr('type'), 'password');
    equal(submit.attr('type'), 'submit');
  });
});

test('it shows a message for incorrect credentials', function() {
  expect(1);

  visit('/login');
  fillIn('.qa-username', 'foo');
  fillIn('.qa-password', 'foo');
  click('.qa-submit');
  andThen(function() {
    equal(find('.qa-message').length, 1);
  });

});

test('it redirects to the list of movies', function() {
  expect(3);

  login();
  andThen(function() {
    equal(currentRouteName(), 'index');
    equal(currentPath(), 'index');
    equal(currentURL(), '/');
  });
});