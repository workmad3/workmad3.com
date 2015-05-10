import { Store } from 'flummox';

export default class UserStore extends Store {
  constructor(flux) {
    super();

    const userActionIds = flux.getActionIds('user');
    this.registerAsync(userActionIds.userLogon, this.userLogon, this.handleUserLogon, this.userLogonFailed);
    this.registerAsync(userActionIds.userSignUp, this.userSignUp, this.handleUserSignUp, this.signupFailed);

    this.state = {
      currentUser: {
        username: "testing"
      }
    }
  }

  userLogon(user) {

  }

  handleUserLogon(user) {

  }

  userLogonFailed(user) {

  }

  userSignUp(user) {

  }

  handleUserSignUp(user) {

  }

  signupFailed(user) {

  }
}
