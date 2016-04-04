import DS from 'ember-data';

export default DS.Model.extend({
  category: DS.belongsTo('category', {async: true }),
  email: DS.attr(),
  phone: DS.attr(),
  posting_title: DS.attr(),
  posting_body: DS.attr(),
  price: DS.attr('number'),
  image: DS.attr(),
  posting_date: DS.attr('date', {
    defaultValue() {return new Date(); }
  })
});
