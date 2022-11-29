let id = (id) => {
    return document.getElementById(id);
}

let classes = (classes) => document.getElementsByClassName(classes);

let username = id('username'),
    email = id('email'),
    password = id('password'),
    form = id('form'),
    errorMsg = classes('error'),
    successIcon = classes('success-icon'),
    failureIcon = classes('failure-icon');

/*form.addEventListener('submit', (a) => {
    a.preventDefault();
    if (username.value === '') {
        errorMsg[0] = 'Username cannot be blank';
        failureIcon[0].style.opacity = '1';
        successIcon[0].style.opacity = '0';
    } else {
        successIcon[0].style.opacity = '1';
        failureIcon[0].style.opacity = '0';
    }
})*/

form.addEventListener('submit', (e) => {
    e.preventDefault();
    engine(username, 0, 'Username cannot be blank');
    engine(email, 1, 'Email cannot be blank');
    engine(password, 2, 'Password cannot be blank');
})

let engine = (id, serial, msg) => {
    if (id.value.trim() === "") {
        errorMsg[serial].innerHTML = msg;
        failureIcon[serial].style.opacity = "1";
        successIcon[serial].style.opacity = "0";
    } else {
        errorMsg[serial].innerHTML = "";
        successIcon[serial].style.opacity = "1";
        failureIcon[serial].style.opacity = "0";
    }
}