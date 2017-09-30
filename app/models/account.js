import DS from 'ember-data';

const { attr, belongsTo } = DS;

export default DS.Model.extend({
    account_id: attr('string'),
    balances: attr(),
    sequence: attr('number'),
    subentry_count: attr(),
    signers: attr()
});
