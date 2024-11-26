// JavaScript can be used here for additional interactivity if needed
// For example, implementing a lightbox for the photo gallery
document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.querySelectorAll('.gallery img');

    gallery.forEach(img => {
        img.addEventListener('click', function() {
            const src = this.getAttribute('src');
            const modal = document.createElement('div');
            modal.className = 'modal';
            modal.innerHTML = `
                <div class="modal-content">
                    <span class="close">&times;</span>
                    <img src="${src}" alt="Expanded Image">
                </div>
            `;
            document.body.appendChild(modal);

            const closeBtn = modal.querySelector('.close');
            closeBtn.addEventListener('click', function() {
                document.body.removeChild(modal);
            });
        });
    });
});
