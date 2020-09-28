import firebase from "../../config/firebase.config";

export const firebaseSignUp = ({ name, email, password }) => {
  return firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((response) => {
      if (response.additionalUserInfo) {
        updateUserName(name);
      }
      return response;
    })
    .catch(function (error) {
      // Handle Errors here.
      const errorMessage = error.message;
      return errorMessage;
    });
};

export const firebaseLogin = ({ email, password }) => {
  return firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch(function (error) {
      return error.message;
    });
};

export const updateUserName = (name) => {
  const user = firebase.auth().currentUser;

  return user.updateProfile({
    displayName: name,
  });
};
