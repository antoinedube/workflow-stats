export default class Session {
  static setUser(user) {
    sessionStorage.setItem('userID', user.id);
    sessionStorage.setItem('username', user.username);
  }

  static getUserID() {
    return sessionStorage.getItem('userID');
  }

  static getUsername() {
    return sessionStorage.getItem('username');
  }

  static removeUser() {
    sessionStorage.removeItem('userID');
    sessionStorage.removeItem('username');
  }
}
