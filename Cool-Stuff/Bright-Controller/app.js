let rangeInput = document.getElementById('range');
const container = document.getElementsByClassName('container')[0];

rangeInput.addEventListener('change', function() {
  container.style.filter = 'brightness(' + rangeInput.value + '%)';
});
