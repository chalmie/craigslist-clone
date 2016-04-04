import Ember from 'ember';

export default Ember.Component.extend({

  sortBy: ['price:asc'],
  sortedListings: Ember.computed.sort('category.listings', 'sortBy'),

});
