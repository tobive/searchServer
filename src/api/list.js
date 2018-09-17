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
    case 'groups':
      return listAllGroups();
    case 'members':
      return listAllMembers();
    case 'shows':
      return listAllShows();
    default:
      return [];
  }
}

module.exports = getList;
