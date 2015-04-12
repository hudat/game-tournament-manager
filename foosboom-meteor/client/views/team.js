Template.team.helpers({
  isEditingTeam: function(){
    return Session.get('isEditingTeam') === this._id;
  }
});

Template.team.events({
  'click a.remove': function(e, tpl){
    e.preventDefault();
    Teams.remove(this._id);
  }
})
