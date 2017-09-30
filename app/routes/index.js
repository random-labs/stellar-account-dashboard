import Ember from 'ember';

export default Ember.Route.extend({
    model(){
        return this.store.findRecord('account', 'GBKBXKR6HVU6TNGEH2TECKZBOYLG5L2I2UUB7JRBSVCAK4QQ33FXD25W');
    }
});
