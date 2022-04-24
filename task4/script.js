document.querySelector('#Link').addEventListener('click',
    (event) => {
        const userText = prompt('Введите текст');
        const userTextField = document.querySelector('#Link');
        userTextField.textContent = userText;
        console.log('Текст "измените текст ссылки" изменен на', userText);
        event.preventDefault();
    })