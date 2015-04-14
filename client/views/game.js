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
  }
});
