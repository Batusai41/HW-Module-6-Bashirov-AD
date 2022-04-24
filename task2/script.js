document.querySelector('#consoleLog').addEventListener('click', 
  (event) => {
    console.log('Пример использования команды console.log');
    alert('Метод для вывода сообщения в веб-консоль');
})

document.querySelector('#Alert').addEventListener('click', 
  (event) => {
    console.log('Пример использования команды alert');
    alert('Функция alert() предназначена для вывода в браузере предупреждающего модального диалогового окна с некоторым сообщением и кнопкой «ОК»');
})

document.querySelector('#prompt').addEventListener('click', 
  (event) => {
    console.log('Пример использования команды promt');
    alert('Метод prompt() предназначен для вывода диалогового окна с сообщением, текстовым полем для ввода данных и кнопками «ОК» и «Отмена»');
})