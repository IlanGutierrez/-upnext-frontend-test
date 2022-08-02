let selectSun = document.getElementById('select-sun'); 
let selectWateringcan = document.getElementById('select-wateringcan'); 
let selectPets = document.getElementById('select-pets'); 
let valueSun;
let valueWateringcan;
let valuePets;
let resultsElemenent = document.querySelector('.result-list');

selectSun.addEventListener('change', (event) => {
  valueSun = event.target.value;
  selectedValues();
  setTimeout(() => {
    selectSun.value = '';
  }, 3000);
  
});

selectWateringcan.addEventListener('change', (event) => {
  valueWateringcan = event.target.value;
  selectedValues();
  setTimeout(() => {
    selectSun.value = '';
  }, 3000);
});

selectPets.addEventListener('change', (event) => {
  valuePets = event.target.value;
  setTimeout(() => {
    selectSun.value = '';
  }, 3000);
});

function selectedValues() {
  if(valueSun === 'no') {
    const noFilter = document.querySelector('.no-filter');
    noFilter.classList.add('hide');

    const results = document.querySelector('.results');
    results.classList.remove('hide');

    const itemOne = document.querySelector('.no-one');
    itemOne.classList.remove('hide');

    const itemTwo = document.querySelector('.no-two');
    itemTwo.classList.remove('hide');

    const itemThree = document.querySelector('.no-three');
    itemThree.classList.remove('hide');

    setTimeout(() => {
      results.classList.add('hide');
      noFilter.classList.remove('hide');
    }, 8000);

  }

  if(valueSun === 'low') {
    const noFilter = document.querySelector('.no-filter');
    noFilter.classList.add('hide');

    const results = document.querySelector('.results');
    results.classList.remove('hide');

    const itemOne = document.querySelector('.low-one');
    itemOne.classList.remove('hide');

    const itemTwo = document.querySelector('.low-two');
    itemTwo.classList.remove('hide');

    setTimeout(() => {
      results.classList.add('hide');
      noFilter.classList.remove('hide');
    }, 8000);

  }

  if(valueSun === 'high') {
    const noFilter = document.querySelector('.no-filter');
    noFilter.classList.add('hide');

    const results = document.querySelector('.results');
    results.classList.remove('hide');

    const itemOne = document.querySelector('.high-one');
    itemOne.classList.remove('hide');

    const itemTwo = document.querySelector('.high-two');
    itemTwo.classList.remove('hide');

    const itemThree = document.querySelector('.high-three');
    itemThree.classList.remove('hide');

    const itemFour = document.querySelector('.high-four');
    itemFour.classList.remove('hide');

    setTimeout(() => {
      results.classList.add('hide');
      noFilter.classList.remove('hide');
    }, 8000);
  }

  if(valueWateringcan === 'regularly') {
    const noFilter = document.querySelector('.no-filter');
    noFilter.classList.add('hide');

    const results = document.querySelector('.results');
    results.classList.remove('hide');

    const itemOne = document.querySelector('.regularly-one');
    itemOne.classList.remove('hide');

    const itemTwo = document.querySelector('.regularly-two');
    itemTwo.classList.remove('hide');

    const itemThree = document.querySelector('.regularly-three');
    itemThree.classList.remove('hide');

    const itemFour = document.querySelector('.regularly-four');
    itemFour.classList.remove('hide');

    setTimeout(() => {
      results.classList.add('hide');
      noFilter.classList.remove('hide');
    }, 8000);
  }

  if(valueWateringcan === 'daily') {
    const noFilter = document.querySelector('.no-filter');
    noFilter.classList.add('hide');

    const results = document.querySelector('.results');
    results.classList.remove('hide');

    const itemOne = document.querySelector('.daily-one');
    itemOne.classList.remove('hide');

    const itemTwo = document.querySelector('.daily-two');
    itemTwo.classList.remove('hide');

    setTimeout(() => {
      results.classList.add('hide');
      noFilter.classList.remove('hide');
    }, 8000);
  }

  if(valueWateringcan === 'rarely') {
    const noFilter = document.querySelector('.no-filter');
    noFilter.classList.add('hide');

    const results = document.querySelector('.results');
    results.classList.remove('hide');

    const itemOne = document.querySelector('.rarely-one');
    itemOne.classList.remove('hide');

    const itemTwo = document.querySelector('.rarely-two');
    itemTwo.classList.remove('hide');

    const itemThree = document.querySelector('.rarely-three');
    itemThree.classList.remove('hide');

    setTimeout(() => {
      results.classList.add('hide');
      noFilter.classList.remove('hide');
    }, 8000);
  }

  if(valuePets === 'true') {
    const noFilter = document.querySelector('.no-filter');
    noFilter.classList.add('hide');

    const results = document.querySelector('.results');
    results.classList.remove('hide');

    const itemOne = document.querySelector('.true-one');
    itemOne.classList.remove('hide');

    const itemTwo = document.querySelector('.true-two');
    itemTwo.classList.remove('hide');

    const itemThree = document.querySelector('.true-three');
    itemThree.classList.remove('hide');

    setTimeout(() => {
      results.classList.add('hide');
      noFilter.classList.remove('hide');
    }, 8000);
  }

  if(valuePets === false) {
    const noFilter = document.querySelector('.no-filter');
    noFilter.classList.add('hide');

    const results = document.querySelector('.results');
    results.classList.remove('hide');

    const itemOne = document.querySelector('.false-one');
    itemOne.classList.remove('hide');

    const itemTwo = document.querySelector('.false-two');
    itemTwo.classList.remove('hide');

    const itemThree = document.querySelector('.false-three');
    itemThree.classList.remove('hide');

    const itemFour = document.querySelector('.false-four');
    itemFour.classList.remove('hide');

    const itemFive = document.querySelector('.false-five');
    itemFive.classList.remove('hide');

    const itemSix = document.querySelector('.false-six');
    itemSix.classList.remove('hide');

    setTimeout(() => {
      results.classList.add('hide');
      noFilter.classList.remove('hide');
    }, 8000);
  }
}