const form = document.querySelector("form");
const username = document.querySelector("#username");
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const passwordConfirmation = document.querySelector('#password-confirmation');

const errors = []

const checkRequired = (input) => {
    if(!input.value.trim().length){
        showError(input, `This fiels is required`);
    }else{
        showSuccess(input);
    }
};

const checkLength = (input, min, max) => {
    if(input.value.trim()<min || input.value.trim()>max){
        showError(input, `Must between ${min} and ${max} characters`);
    }else{
        showSuccess(input);
    }
};

const checkEmail = (input) => {
    if (!input.value.trim().match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
        showError (input, `Must be a valid email`);
    }else{
        showSuccess(email);
    };
};

const checkMatch = (input1, input2) => {
    if(input1.value !== input2.value || !input2.value.length){
        showError(input2, `Passwords don't match`);
    } else {
        showSuccess(input2);
    }
}

const showError = (input, msg) => {
    input.parentElement.classList = "form-control error"
    input.nextElement.innerText = msg;
    errors.push(input);
}

const showSuccess = (input) => {
    input.parentElement.classList = "form-control success";
}

form.addEventListener("submit", (e) => {
    checkRequired(username);
    checkRequired(email);
    checkRequired(password);
    checkRequired(passwordConfirmation);

    checkLength(username, 5, 10);
    checkLength(password, 8, 15);
    checkMatch(password, password2);

    if (!errors.length) {
        console.log({
          username: username.value,
          email: email.value,
          password: password.value,
        });
      }
});
