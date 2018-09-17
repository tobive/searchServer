const SHOWS = require('./shows.json');
const MEMBERS = require('./members.json');
const GROUPS = require('./groups.json');

function queryFromData(data, query) {
  const arrNames = data.filter(el => el.name.toLowerCase().indexOf(query.toLowerCase()) > -1);
  return arrNames;
}

function getSearch(category, query) {
  let result = [];
  if (category === 'shows') {
    const { shows: data } = SHOWS;
    result = queryFromData(data, query);
  } else if (category === 'members') {
    const { members: data } = MEMBERS;
    result = queryFromData(data, query);
  } if (category === 'groups') {
    const { groups: data } = GROUPS;
    result = queryFromData(data, query);
  }
  return result;
}

module.exports = getSearch;
