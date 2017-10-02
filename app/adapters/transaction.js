import DS from 'ember-data';
import StellarAPI from './stellar';

export default StellarAPI.extend({

    buildURL(modelName, id, snapshot, requestType, query){
        let account = query.account;
        return `https://horizon-testnet.stellar.org/accounts/${account}/transactions`;
    }
});
