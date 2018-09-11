const SHOWS = require('./shows.json');
const MEMBERS = require('./members.json');
const GROUPS = require('./groups.json');

function queryFromData(data, query) {
  const arrNames = data.filter(el => el.name.toLowerCase().indexOf(query.toLowerCase()) > -1);
  return arrNames;
}

function getSearch(category, query) {
  let result = {};
  if (category === 'show') {
    const { shows: data } = SHOWS;
    result.shows = queryFromData(data, query);
  } else if (category === 'member') {
    const { members: data } = MEMBERS;
    result.members = queryFromData(data, query);
  } if (category === 'group') {
    const { groups: data } = GROUPS;
    result.groups = queryFromData(data, query);
  }
  return result;
}

module.exports = getSearch;
