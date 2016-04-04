import Ember from 'ember';

export default Ember.Component.extend({
    addNewListing: false,
    actions: {
      listingFormShow() {
        this.set('addNewListing', true);
      },
      saveListing() {
          var params = {
          category: this.get('category') ? this.get('category') : "",
          email: this.get('email') ? this.get('email') : "",
          phone: this.get('phone') ? this.get('phone') : "",
          posting_title: this.get('posting-title') ? this.get('posting-title') : "",
          posting_body: this.get('posting-body') ? this.get('posting-body') : "",
          price: this.get('price') ? this.get('price') : "",
          image: this.get('image') ? this.get('image') : ""
          };
          this.set('addNewListing', false);
          this.sendAction('saveListing', params);
      }
    }
});
