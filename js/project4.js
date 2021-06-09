console.log('this is project 4 on validation');
// we have to listen blur event and then we have to validation.

const user = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
let validUser = false;
let validEmail = false;
let validPhone = false;

// console.log(name,email,phone);

user.addEventListener('blur', () => {
    console.log('name is blurred');
    // validate name here

    let regex = /^[a-z A-Z]([0-9 a-z A-Z]){2,10}$/;
    let str = user.value;
    console.log(regex, str);

    if (regex.test(str)) {
        console.log('your name is valid');
        user.classList.remove('is-invalid');
        validUser = true;
        // this will dynamically add class 'is-invalid'
    }
    else {
        console.log('your name is invalid');
        user.classList.add('is-invalid');
        // means incorrect name mate j ,this will dynamically add class 'is-invalid'
        validUser = false;

    }


})

email.addEventListener('blur', () => {
    console.log('email is blurred');
    // validate email here

    regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    str = email.value;
    console.log(regex, str);

    if (regex.test(str)) {
        console.log('your Id is valid');
        email.classList.remove('is-invalid');
        validEmail = true;
    }
    else {
        console.log('your Id is invalid');
        email.classList.add('is-invalid');
        validEmail = false;

    }
})

phone.addEventListener('blur', () => {
    console.log('phone is blurred');
    // validate phone here
    regex = /^[0-9]{10}$/;
    str = phone.value;
    console.log(regex, str);
    console.log(regex.test(str));

    if (regex.test(str)) {
        console.log('your phone is valid');
        phone.classList.remove('is-invalid');
        validPhone = true;
    }
    else {
        console.log('your phone is invalid');
        phone.classList.add('is-invalid');
        validPhone = false;


    }
})

let submit = document.getElementById('submit');
submit.addEventListener('click', (e) => {
    e.preventDefault();
    // preventDefault page reload no kare
    console.log('you clicked submit button');
    console.log(validUser, validEmail, validPhone);
    //submit your form here

    if (validEmail && validPhone && validUser) {
        console.log('phone,user,email all are valid.Submitting the form');
        let success = document.getElementById('success');

        success.classList.add('show');
        failure = document.getElementById('failure');
        failure.classList.remove('show');
    }
    else {
        console.log('one of phone,Email,user are not valid please check again.hence not submitting the form.so please check the details of above');

        let failure = document.getElementById('failure');
        failure.classList.add('show');
        success = document.getElementById('success');
        success.classList.remove('show');
    }


})

