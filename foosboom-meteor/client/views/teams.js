Template.teams.helpers({
  isCreatingTeam: function(){
    return true;
  },
  teams: function() {
    return Teams.find();
  }
})
