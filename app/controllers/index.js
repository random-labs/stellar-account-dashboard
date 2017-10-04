import Ember from 'ember';

export default Ember.Controller.extend({
    accountNumberLongEnough: false,
    
    accountNumberLongEnough: Ember.computed('accountNumber', function(){
        if(this.get('accountNumber')){
            return this.get('accountNumber').length > 50;
        }
       
    })
});
