/**
 * comentar
 */
window.userView = Backbone.View.extend({
  //model: new userModel(),
  tagName : 'div',
  class : "userName",
  events :{
    'click .editar'  : 'editar',
    'click .remover' : 'remover',
    'blur .sobrenome': 'fechar',
     'keypress .sobrenome' : 'onEnterUpdate',
  },
  editar : function(ev) {
    ev.preventDefault();
    this.$('.sobrenome').attr('contenteditable', true).focus();
  },
  fechar : function(ev) {
    var sobrenome = $(".sobrenome").text();
    this.model.set("sobrenome", sobrenome);
    $(".sobrenome").val();
    this.$(".sobrenome").removeAttr("contenteditable");
  },
  onEnterUpdate : function(ev) {
    var self = this;
    if(ev.keyCode == 13) {
      self.fechar();
      _.delay(function(){
        self.$(".sobrenome").blur();
      }, 100);
    }
  },
  remover : function(ev) {
    ev.preventDefault();
    window.users.remove(this.model);
  },
  initialize: function(){
    this.template = _.template($("script#userTemplate").html());
  },
  render : function() {
     this.$el.html(this.template(this.model.toJSON()));
     return this;
  }
});

/**
 * comentar
 */
window.userViewes = Backbone.View.extend({
  // model: users,
  el: $("#userContainer"),
  initialize: function(){
    console.log(this);
    this.model.on("add", this.render, this);
    this.model.on("remove", this.render, this);
  },
  render: function() {
    var self = this;
    self.$el.html("");

   this.model.each(function(user, indice) {
       console.log(user.toJSON());
       self.$el.append((new userView({model:  user })).render().$el);
   });
  return this;
 }
});