const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const message = form.elements.message.value;
    alert(`Thanks for your review ${name}! We hope you have been enjoying the academy :)`)
    form.reset();
});