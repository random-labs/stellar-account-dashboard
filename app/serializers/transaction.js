import DS from 'ember-data';

export default DS.RESTSerializer.extend({
    normalizeResponse(store, primaryModelClass, payload, id, requestType){
        const normalizedPayload = payload._embedded.records;

        payload = {transactions: normalizedPayload};
        return this._super(store, primaryModelClass, payload, id, requestType);
    }
});
