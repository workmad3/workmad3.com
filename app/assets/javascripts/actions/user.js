import { Actions } from 'flummox';

class UserActions extends Actions {

  userLogon(username, password) {
    return {
      username: username,
      password: password
    }
  }

  userSignUp(username, password, passwordConfirmation) {
    return {
      username: username,
      password: password,
      passwordConfirmation: passwordConfirmation
    }
  }
}
