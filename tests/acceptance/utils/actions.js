var user = 'tony';
var password = 'montana';

function login() {
  visit('/login');
  fillIn('.qa-username', user);
  fillIn('.qa-password', password);
  click('.qa-submit');
}

function goToMovie(movie) {
  var selector = movie ? 'contains('+movie+')' : 'eq(0)';

  login();
  click('.qa-movies-list a:'+selector);
}

export {
  login,
  goToMovie
};