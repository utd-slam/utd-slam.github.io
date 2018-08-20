/**
 * Load login to the internal section of website for lab members. Asks users for
 * login information in order to get access to member-only information.
 * NOTE: This functionality is not complete
 */
$(function() {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyBuBtm-lim5I635HwWwVjfdfJ6Wtwo-0I4",
        authDomain: "slam-lab.firebaseapp.com",
        databaseURL: "https://slam-lab.firebaseio.com",
        projectId: "slam-lab",
        storageBucket: "slam-lab.appspot.com",
        messagingSenderId: "762491185440"
    };
    firebase.initializeApp(config);

    // Get elements
    const internalSection = document.getElementById('internal');
    const loginSection = document.getElementById('loginSection');
    const userInfo = document.getElementById('userInfo');
    const emailTxt = document.getElementById('userEmail');
    const passTxt = document.getElementById('userPassword');
    const loginBtn = document.getElementById('signin');
    const logoutBtn = document.getElementById('signout');
    var error = document.getElementById('error');

    // Set section min height
    var height = "min-height:" + window.innerHeight + "px";
    internalSection.setAttribute('style', height);

    // Add log in event
    loginBtn.addEventListener('click', e => {
        const email = emailTxt.value;
        const pass = passTxt.value;
        const auth = firebase.auth();

        // Sign in
        const promise = auth.signInWithEmailAndPassword(email, pass);
        promise.catch(e => {
            console.log(e.message);
            error.innerHTML = "Email or password incorrect.";
        });
    });

    // Add log out event
    logoutBtn.addEventListener('click', e => {
        firebase.auth().signOut();
    });

    // Add realtime authentication state change listener
    firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser){
            loginSection.classList.add('hide');
            userInfo.classList.remove('hide');

            var welcome = document.getElementById('welcome');
            var content = document.getElementById('content');
            welcome.innerHTML = "Welcome, " + firebaseUser.email;
            content.innerHTML = "Private user content";
        } else {
            loginSection.classList.remove('hide');
            userInfo.classList.add('hide');
        }
    });
});