const btn = document.getElementById('btn');

const text = document.getElementById('text');

btn.addEventListener('click', () => {
  text.textContent = 'ボタンをクリックしました';
  document.querySelector('body').appendChild(h2);
  text.style.display ='none';
});
