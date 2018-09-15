const SHOWS = require('./shows.json');
const MEMBERS = require('./members.json');
const GROUPS = require('./groups.json');

const RANDOM_VALUE = 6;

// Pick a number of items randomly from array. Returns new array
function getRandomItemsFromArray(arr, number) {
  if (number > arr.length) return [];
  let arrRandomVal = [];
  for (let i = 0; i < number; i++) {
    if (i === 0) {
      arrRandomVal[i] = Math.floor(Math.random() * arr.length);
    } else {
      let newRandVal = Math.floor(Math.random() * arr.length);
      while (arrRandomVal.indexOf(newRandVal) > -1) {
        newRandVal = Math.floor(Math.random() * arr.length);
      }
      arrRandomVal[i] = newRandVal;
    }
  }
  return arr.filter((item, index) => arrRandomVal.indexOf(index) > -1);
}

function getRandom(category) {
  let result = [];
  if (category === 'show') {
    const { shows: data } = SHOWS;
    result = getRandomItemsFromArray(data, RANDOM_VALUE);
  } else if (category === 'member') {
    const { members: data } = MEMBERS;
    result = getRandomItemsFromArray(data, RANDOM_VALUE);
  } if (category === 'group') {
    const { groups: data } = GROUPS;
    result = getRandomItemsFromArray(data, RANDOM_VALUE);
  }
  return result;
}

module.exports = getRandom;
