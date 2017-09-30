import DS from 'ember-data';

const { attr } = DS;

export default DS.Model.extend({
    paging_token: attr('string'),
    hash: attr('string'),
    ledger: attr('string'),
    account: belongsTo('account'),
    account_sequence: attr('number'),
    

});
