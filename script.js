const loginButton = document.querySelector('.login-button');
const menuButton = document.querySelector('.menu-button');
const complaintButton = document.querySelector('.complaint-button');
const feedbackButton = document.querySelector('.feedback-button');

loginButton.addEventListener('click', () => {
    window.location.href = 'login.html';
});

menuButton.addEventListener('click', () => {
   
    alert('Today\'s menu: ...');
});

complaintButton.addEventListener('click', () => {
    
    alert('Complaint form');
});

feedbackButton.addEventListener('click', () => {
    
    alert('Feedback form');
});
