export default {
    actions: {
        userLogin() {
          firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
            .then(function() {
              commit(context, 'SET_LOGGEDIN')
              // Existing and future Auth states are now persisted in the current
              // session only. Closing the window would clear any existing state even
              // if a user forgets to sign out.
              // ...
              // New sign-in will be persisted with session persistence.
              return firebase.auth().signInWithEmailAndPassword(email, password);
            })
            .catch(function(error) {
              // Handle Errors here.
              var errorCode = error.code;
              var errorMessage = error.message;
            });
        }
    }
}