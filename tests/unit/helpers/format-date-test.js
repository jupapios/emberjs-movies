import { formatDate } from 'movies/helpers/format-date';

module('Format Date Helper');

test('it formats a give date to MM/DD/YYYY', function() {
  var date = '2014-09-07T23:56:25.255Z';
  var expected = '09/07/2014';
  var actual = formatDate(date);
  equal(actual, expected);
});

test('it validates the date', function() {
  expect(3);

  var values = ['', 'foo', undefined];

  values.forEach(function(value) {
    var actual = formatDate(value);
    equal(actual, undefined);
  });
});