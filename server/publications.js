Meteor.publish('teams', function(){
  // only return logged in user's teams
  return Teams.find({ownerId: this.userId});
});

Meteor.publish('games', function(){
  return Games.find({ownerId: this.userId});
});
