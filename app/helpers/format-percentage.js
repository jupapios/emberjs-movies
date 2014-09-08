import Ember from 'ember';

/**
 * Adds the percentage symbol if the value is numeric
 * @param {String} value
 * @return {String|undefined} formatted percentage
 */
function formatPercentage(value) {
  if (value && !isNaN(value)) {
    return value + '%';
  }
}

export {
  formatPercentage
};

export default Ember.Handlebars.makeBoundHelper(formatPercentage);
