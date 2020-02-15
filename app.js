document.addEventListener("DOMContentLoaded", event => {
    const app = firebase.app();
});

function googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
        .then(result => {
            firebase.auth().onAuthStateChanged(user => {
                if (user) {
                    window.location = 'editEvents.html'; //After successful login, user will be redirected to editEvents.html
                }
            })
        })
}