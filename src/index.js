document.addEventListener('DOMContentLoaded', () => {

  const emojiList = document.querySelector('.emojis-list')

  const endPoint = 'http://localhost:3000/api/v1/emojis';
  fetch(endPoint)
    .then(res => res.json())
    .then(json =>
      json.forEach(emoji => {
        const markup = `
        <li>
          <h3>${emoji.title}</h3>
        </li>`;

        emojiList.innerHTML += markup
      })
    );
});
