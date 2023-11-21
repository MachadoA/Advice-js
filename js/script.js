const message = document.getElementById('message');
const messageId = document.getElementById('messageId');
const btn = document.querySelector('.btn-icon');

btn.addEventListener('click', () => {

    fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {
        const notice = data.slip.advice
        const id = data.slip.id
        message.innerHTML = notice
        messageId.innerHTML = id
    })
    .catch(error => {
        console.error('Erro ao carregar o fetch:', error);
      });
})