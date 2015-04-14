Template.game.events({
  "click a.finish-game": function(e, tpl){
    e.preventDefault();
    Games.update({_id: this._id}, {$set: {completed: true}});
  },

  "click a.delete-game": function(e, tpl){
    e.preventDefault();
    Games.remove(this._id);
  },

  "click a.one-plus": function(e, tpl){
    e.preventDefault();
    Games.update({_id: this._id}, {$inc: {"teams.0.score": 1}});
  },

  "click a.two-plus": function(e, tpl){
    e.preventDefault();
    Games.update({_id: this._id}, {$inc: {"teams.1.score": 1}});
  },

  "click a.one-minus": function(e, tpl){
    e.preventDefault();
    Games.update({_id: this._id}, {$inc: {"teams.0.score": -1}});
  },

  "click a.two-minus": function(e, tpl){
    e.preventDefault();
    Games.update({_id: this._id}, {$inc: {"teams.1.score": -1}});
  },

  "click a.delete-game": function(e, tpl){
    e.preventDefault();
    var gameId = this._id;
    var teamIdA = this.teams[0].id;
    var teamIdB = this.teams[1].id;

    Games.remove(gameId, function (error) {
      if (!error) {
        Teams.update({_id: teamIdA}, {$pull: {gameIds: gameId}});
        Teams.update({_id: teamIdB}, {$pull: {gameIds: gameId}});
      }
    });
  }
});
