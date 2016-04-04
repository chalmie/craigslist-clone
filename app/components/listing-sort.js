import Ember from 'ember';

export default Ember.Component.extend({

  sortBy: ['posting_date:asc'],
  sortedListings: Ember.computed.sort('category.listings', 'sortBy'),

});
