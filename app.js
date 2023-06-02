const uploadFile = document.querySelector('.upload>button');
const file = document.querySelector('.upload-file');
const dissuasion = document.querySelector('.dissuasion');
uploadFile.addEventListener('click', () => {
    file.style.display = 'block';
})

dissuasion.addEventListener('click', () => {
    file.style.display = 'none';
})