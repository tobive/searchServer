const GROUPS = require('./groups.json');
const MEMBERS = require('./members.json');
const SHOWS = require('./shows.json');

function listAllGroups() {
  return GROUPS.groups;
}

function listAllMembers() {
  return MEMBERS.members;
}

function listAllShows() {
  return SHOWS.shows;
}

function getList(category) {
  switch (category) {
    case 'group':
      return listAllGroups();
    case 'member':
      return listAllMembers();
    case 'show':
      return listAllShows();
    default:
      return [];
  }
}

module.exports = getList;
