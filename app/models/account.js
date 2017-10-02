import DS from 'ember-data';
import Ember from 'ember';

const { attr, hasMany } = DS;

export default DS.Model.extend({
    transactions: hasMany('transaction', {async: true}),
    
    account_id: attr('string'),
    balances: attr(),
    sequence: attr('number'),
    subentry_count: attr(),
    signers: attr(),
    flags: attr(),
    thresholds: attr(),

    getTransactions: Ember.computed(function(){

    })
});
