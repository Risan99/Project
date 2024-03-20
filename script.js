const signInForm = document.getElementById('signin-form');
//const signupForm = document.getElementById('signup-form');
signInForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const username = signInForm.elements['username'].value;
    const password = signInForm.elements['password'].value;

    if (username && password) {
        // alert("Successfully logged in");

        window.location.href = "welcome.html";
    } else {
        alert("Invalid username or password."); // Display error message
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const signUpForm = document.getElementById('signup-form');
    
    signUpForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const fullname = signInForm.elements['new-fullnamename'].value;
        const email = signInForm.elements['new-email'].value;
    const username = signInForm.elements['new-username'].value;
    const password = signInForm.elements['new-password'].value;

    if (username && password&&fullname&&email) {
        // alert("Successfully logged in");

        window.location.href = "signin.html";
    } else {
        alert("Invalid username or password."); // Display error message
    }
    });
});
