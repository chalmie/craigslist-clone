import Ember from 'ember';

export default Ember.Component.extend({

  sortBy: ['posting_date:desc'],
  sortedListings: Ember.computed.sort('category.listings', 'sortBy'),

});
