let form = document.getElementById('contact-form');
form.onsubmit = submit;

function submit() {
    var name = document.getElementById('name').value
    var email = document.getElementById('email').value
    var subject = document.getElementById('subject').value
    var message = document.getElementById('message').value

    alert(`Following Message has been sent. \nName: ${name} \nEmail: ${email} \nSubject: ${subject} \nMessage: ${message}`)
    reset()
}

function reset() {
    document.getElementById('name').value = ""
    document.getElementById('email').value = ""
    document.getElementById('subject').value = ""
    document.getElementById('message').value = ""
}