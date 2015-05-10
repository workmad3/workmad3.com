import { Flux } from 'flummox';
import { UserActions } from 'actions';
import { UserStore } from 'stores';

export default class AppFlux extends Flux {
  constructor() {
    super();

    this.createActions('user', UserActions);
    this.createStore('user', UserStore, this);
  }
}

