import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('transactions');
  this.route('account', {path: '/account/:accountNumber'});
});

export default Router;
