const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const input3 = document.getElementById('input3');
const input4 = document.getElementById('input4');
const input5 = document.getElementById('input5');

function handleInput() {
    if (input1.value && input2.value && input3.value && input4.value && input5.value) {
        handleSubmit(); // Call the submit function
    }
}

function handleSubmit() {
    // Your submission logic here
    console.log('Form submitted:', input1.value + input2.value + input3.value + input4.value + input5.value);
    // You can add more complex logic like sending data to a server, etc.
}

function resendSms() {
    // sms ni qayta jo'natish
}


input1.addEventListener('input', handleInput);
input2.addEventListener('input', handleInput);
input3.addEventListener('input', handleInput);
input4.addEventListener('input', handleInput);
input5.addEventListener('input', handleInput);