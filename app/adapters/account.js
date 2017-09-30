import DS from 'ember-data';
import StellarAPI from './stellar';

export default StellarAPI.extend({
    pathForType(){
        return 'accounts'
    }
});
