let message = document.querySelector("#message");
let duplicateField = document.querySelector("#duplicateField");
message.addEventListener('input', function () {
    duplicateField.textContent = this.value;
});

let clear = document.querySelector("#clear");
clear.addEventListener('click', function (click) {
    click.preventDefault();
    console.log(message.value);
    document.querySelector("#message").value = "";
    duplicateField.textContent = this.value;
});