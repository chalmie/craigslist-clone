import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('city', params.city_id);
  },
  actions: {
    saveCategory(params) {
      var newCategory = this.store.createRecord('category', params);
      var city = params.city;
      city.get('categories').addObject(newCategory);
      newCategory.save().then(function() {
        return city.save();
      });
      this.transitionTo('city', params.city);
    }
  }
});
