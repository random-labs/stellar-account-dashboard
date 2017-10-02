import DS from 'ember-data';

const { attr, belongsTo } = DS;

export default DS.Model.extend({
    source_account: attr(),
    
    paging_token: attr('string'),
    created_at: attr('string'),
    hash: attr('string'),
    ledger: attr('string'),
    account_sequence: attr('number'),
    fee_paid: attr('number'),
    operation_count: attr('number'),
    result_code: attr('number'),
    result_code_s: attr(),
    envelope_xdr: attr('string'),
    result_xdr: attr('string'),
    result_meta_xdr: attr('string'),
    fee_meta_xdr: attr('string'),
    signatures: attr(),
});
