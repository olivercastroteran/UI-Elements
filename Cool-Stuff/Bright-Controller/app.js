let rangeInput = document.getElementById('range');
const lowBright = document.querySelector('.minus');
const moreBright = document.querySelector('.plus');
const container = document.getElementsByClassName('container')[0];

rangeInput.addEventListener('change', function() {
  container.style.filter = 'brightness(' + rangeInput.value + '%)';
});

lowBright.addEventListener('click', function() {
  rangeInput.value -= 5;
  console.log(rangeInput.value);
  container.style.filter = 'brightness(' + rangeInput.value + '%)';
});

moreBright.addEventListener('click', function() {
  rangeInput.value += 5;
  container.style.filter = 'brightness(' + rangeInput.value + '%)';
});
