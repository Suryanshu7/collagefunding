document.addEventListener('DOMContentLoaded', function() {
    const profileForm = document.getElementById('profileForm');
    const userNameSpan = document.getElementById('userName');
    const notificationsList = document.getElementById('notifications');

    const notifications = [
        'Welcome to our platform!',
        'New funding opportunities available!',
        'Check out the latest updates in your profile!'
    ];

    profileForm.addEventListener('login', function(event) {
        event.preventDefault();
        const name = profileForm.profileName.value;
        const mobile = profileForm.profileMobile.value;
        const email = profileForm.profileEmail.value;

        userNameSpan.textContent = name;
        
        localStorage.setItem('profile', JSON.stringify({ name, mobile, email }));

        alert('Profile updated successfully!');
    });
/*
    // Load the profile data if available
    const storedProfile = localStorage.getItem('profile');
    if (storedProfile) {
        const profile = JSON.parse(storedProfile);
        profileForm.profileName.value = profile.name;
        profileForm.profileMobile.value = profile.mobile;
        profileForm.profileEmail.value = profile.email;
        userNameSpan.textContent = profile.name;
        document.getElementById('profile').style.display = 'block';
        notificationsList.innerHTML = notifications.map(note => `<li>${note}</li>`).join('');
    }
});
// new code
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const profileForm = document.getElementById('profileForm');
    const userNameSpan = document.getElementById('userName');
    const profileSection = document.getElementById('profile');
    const notificationsList = document.getElementById('notifications');
    const profileLink = document.getElementById('profileLink');

    const users = [
        { email: 'student@example.com', password: 'password123', name: 'Student Name', mobile: '1234567890' }
    ];

    const notifications = [
        'Welcome to our platform!',
        'New funding opportunities available!',
        'Check out the latest updates in your profile!'
    ];

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const email = loginForm.emailLogin.value;
        const password = loginForm.passwordLogin.value;
        const user = users.find(user => user.email === email && user.password === password);
        
        if (user) {
            userNameSpan.textContent = user.name;
            profileForm.profileName.value = user.name;
            profileForm.profileMobile.value = user.mobile;
            profileForm.profileEmail.value = user.email;
            profileSection.style.display = 'block';
            profileLink.style.display = 'inline';
            notificationsList.innerHTML = notifications.map(note => `<li>${note}</li>`).join('');
            loginForm.style.display = 'none';
        } else {
            alert('Invalid login credentials');
        }
    });

    profileForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = profileForm.profileName.value;
        const mobile = profileForm.profileMobile.value;
        const email = profileForm.profileEmail.value;
        
        const user = users.find(user => user.email === email);
        if (user) {
            user.name = name;
            user.mobile = mobile;
            alert('Profile updated successfully!');
            userNameSpan.textContent = name;
        }
    });*/
});
