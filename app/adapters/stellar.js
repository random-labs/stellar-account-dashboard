import DS from 'ember-data';

export default DS.RESTAdapter.extend({
    host: "https://horizon-testnet.stellar.org"
});