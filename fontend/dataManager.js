let user = {}

const dataManager = {
  saveUser: function (data) {
    user.displayName = data.displayName;
    user.profilePicture = data.profilePicture;
  },
  getUser: function () {
    return user;
  }
}

export default dataManager;