const dropBtn = document.querySelector('.dropbtn');
const dropdownContent = document.querySelector('.dropdown-content');

dropBtn.addEventListener('click', () => {
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
});
