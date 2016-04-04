import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  homes: DS.hasMany('home', {async: true })
});
