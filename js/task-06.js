const content = document.querySelector('#validation-input');
console.dir(content);

const maxLength = content.getAttribute('data-length');

const handleInput = (e) => {
    const contentLength = e.currentTarget.value.length;
    
    if (contentLength <= maxLength) {
        if (content.classList.contains('invalid')) {
            content.classList.replace('invalid', 'valid')
        }
        content.classList.add('valid');
    }
    if(contentLength >= maxLength){
        content.classList.replace('valid', 'invalid')
    }
}

content.addEventListener('blur', handleInput);