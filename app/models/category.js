import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  city: DS.belongsTo('city', {async: true }),
  listings: DS.hasMany('listings', {async: true })
});
