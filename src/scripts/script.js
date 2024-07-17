window.onload = () => {
    let login = document.getElementById('login');
    document.getElementById('action-btn').addEventListener('click', function () {
        login.classList.add('open');
    });

    document.getElementById('close').addEventListener('click', function () {
        login.classList.remove('open');
    });

    let entranceElement = document.getElementById('element');
    let password = document.getElementById('password');
    function validateForm() {
        let isValid = true;
        if (entranceElement.value && entranceElement.value.match(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/) ||
            entranceElement.value.match(/^\+?[0-9]{3}-?[0-9]{6,12}$/)) {
            entranceElement.classList.remove('is-invalid');
        } else {
            entranceElement.classList.add('is-invalid');
            isValid = false;
        }

        if (password.value) {
            password.classList.remove('is-invalid');
        } else {
            password.classList.add('is-invalid');
            isValid = false;
        }

        return isValid;
    }

    document.getElementById('process-button').addEventListener('click', function () {
        if (validateForm() === true) {
            alert('Вы вошли в систему!');
        } else {
            alert("Что-то пошло не так...Проверьте правильность введенных данных!");
        }
    })

    document.getElementById('to-sign-up').addEventListener('click', function (){
        alert('Тут должна быть страница для регистрации!)');
        login.classList.remove('open');
    })
}