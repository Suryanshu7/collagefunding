document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signupForm');
    const loginForm = document.getElementById('loginForm');
    const profileSection = document.getElementById('profile');
    const userNameSpan = document.getElementById('userName');
    const notificationsList = document.getElementById('notifications');

    const userDatabase = {
        users: []
    };

    const notifications = [
        'Welcome to our platform!',
        'New funding opportunities available!',
        'Check out the latest updates in your profile!'
    ];

    signupForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = signupForm.name.value;
        const email = signupForm.email.value;
        const password = signupForm.password.value;

        userDatabase.users.push({ name, email, password });

        alert('Signup successful!');

        signupForm.reset();
    });

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const email = loginForm.email.value;
        const password = loginForm.password.value;

        const user = userDatabase.users.find(user => user.email === email && user.password === password);

        if (user) {
            userNameSpan.textContent = user.name;
            profileSection.style.display = 'block';
            loginForm.reset();
            notificationsList.innerHTML = notifications.map(note => `<li>${note}</li>`).join('');
        } else {
            alert('Invalid login credentials');
        }
    });
});
