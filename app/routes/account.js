import Ember from 'ember';

export default Ember.Route.extend({
    model(params){
        return Ember.RSVP.hash({
            accountData: this.get('store').findRecord('account', params.accountNumber),
            transactions: this.get('store').query('transaction', {limit: 50, account: params.accountNumber})
        });
    }
});
