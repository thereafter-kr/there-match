// There Match — app.js
const matchList = document.getElementById('match-list');
const resultCount = document.getElementById('result-count');
const searchInput = document.getElementById('search-input');
const resetBtn = document.getElementById('reset-btn');

function init() {
  resultCount.textContent = '0건';
}

resetBtn.addEventListener('click', () => {
  searchInput.value = '';
  init();
});

init();
