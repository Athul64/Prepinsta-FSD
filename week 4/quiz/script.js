function navigateToLogin() {
    window.location.href = 'pages/login.html';
}

function navigateToIndex() {
    window.location.href = '../index.html';
}

function navigateToSignup() {
    window.location.href = 'pages/signup.html';
}

function navigateToStart() {
    window.location.href = 'pages/login.html';
}

//logout nav
function navigateToLogout() {
    window.location.href = '../index.html';
}

//1st quiz
function navigateToCarquiz(){
    window.location.href= 'f1.html';
}

//2nd quiz
function navigateTohisquiz(){
    window.location.href= 'indianhistory.html'
}

//3rd quiz
function navigateTogkquiz(){
    window.location.href= 'gk.html'
}

//4th quiz
function navigateTosportsquiz(){
    window.location.href= 'sports.html'
}

//5th quiz
function navigateTotechquiz(){
    window.location.href= 'technology.html'
}

//6th quiz
function navigateTogeoquiz(){
    window.location.href= 'geo.html'
}

//contact
 // JavaScript to show and hide popup
 document.getElementById('contactLink').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('contactPopup').style.display = 'flex';
});

function closePopup() {
    document.getElementById('contactPopup').style.display = 'none';
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the default way
    alert('Your message has been sent!');
    closePopup(); // Close the popup after form submission
});