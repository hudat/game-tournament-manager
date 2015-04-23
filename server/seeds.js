Meteor.startup(function () {
  var dummyUserEmail = 'test@test.com'
  // check for users with registered email dummyUserEmail by searching through every email
  if (Meteor.users.find({"emails.address": dummyUserEmail}).count() == 0){

    //Create a test user. 'createuser' returns the id of the created user
    var ownerId = Accounts.createUser({
      email: dummyUserEmail,
      password: 'husam'
    });

    [
      {
        name: "Barcelona",
        gameIds: [],
        ownerId: ownerId
      },
      {
        name: "Real Madrid",
        gameIds: [],
        ownerId: ownerId
      },
      {
        name: "Matt's team",
        gameIds: [],
        ownerId: ownerId
      }
    ].forEach(function(team){
      Teams.insert(team);
    })

    // Create a game
    var team1 = Teams.find().fetch()[0];
    var team2 = Teams.find().fetch()[1];

    var game = {
      completed: false,
      createdAt: new Date,
      ownerId: ownerId,
      teams: [
        {name: team1.name, _id: team1._id, score: 0},
        {name: team2.name, _id: team2._id, score: 0}
      ]
    }

    gameId = Games.insert(game);

    // Add this game to both teams gameIds
    Teams.update({_id: team1._id}, {$addToSet: { gameIds: gameId}});
    Teams.update({_id: team2._id}, {$addToSet: { gameIds: gameId}});
  }
});
