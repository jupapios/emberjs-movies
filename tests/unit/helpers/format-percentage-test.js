import { formatPercentage } from 'movies/helpers/format-percentage';

module('Format Percentage Helper');

test('it formats to percentage', function() {
  var value = '9';
  var expected = '9%';
  var actual = formatPercentage(value);
  equal(actual, expected);
});

test('it validates non-numeric values', function() {
  expect(3);

  var values = ['', 'foo', undefined];

  values.forEach(function(value) {
    var actual = formatPercentage(value);
    equal(actual, undefined);
  });
});