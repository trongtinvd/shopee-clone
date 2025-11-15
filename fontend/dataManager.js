let user = {}

const dataManager = {
  saveUser: function (data) {
    ({ displayName: user.displayName, profilePicture: user.profilePicture } = data);
  },
  getUser: function () {
    return user;
  }
}

export default dataManager;