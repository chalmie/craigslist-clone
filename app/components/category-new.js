import Ember from 'ember';

export default Ember.Component.extend({
    addNewCategory: false,
    actions: {
      categoryFormShow() {
        this.set('addNewCategory', true);
      },
      saveCategory() {
          var params = {
          name: this.get('name') ? this.get('name') : "",
          city: this.get('city') ? this.get('city') : ""
          };
          this.set('addNewCategory', false);
          this.sendAction('saveCategory', params);
      }
    }
});
