/* global moment */
import Ember from 'ember';

/**
 * Formats a date in MM/DD/YYYY
 * @param {String} value
 * @return {String|undefined} formatted date
 */
function formatDate(value) {
  var date = moment(value);

  if (value && date.isValid()) {
    return date.format('MM/DD/YYYY');
  }
}

export {
  formatDate
};

export default Ember.Handlebars.makeBoundHelper(formatDate);
