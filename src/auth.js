const defaultUser = {
  name: 'Minni',
  avatarUrl: ''
};

export default {
  _user: null,
  loggedIn() {
    return !!this._user;
  },

  async logIn(name, password) {
    try {
      // Send request
      console.log(name, password);
      this._user = { ...defaultUser, name };

      return {
        isOk: true,
        data: this._user
      };
    }
    catch {
      return {
        isOk: false,
        message: "Authentication failed"
      };
    }
  },

  async logOut() {
    this._user = null;
  },

  async getUser() {
    try {
      return {
        isOk: true,
        data: this._user
      };
    }
    catch {
      return {
        isOk: false
      };
    }
  }
};
