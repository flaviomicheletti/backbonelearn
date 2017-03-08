/**
 * comentar
 */
window.userModel = Backbone.Model.extend({
  defaults: function() {
    return {
      nome: '',
      sobrenome: ''
    };
  }
});

/**
 * criamos uma collection e lincamos a model na collection.
 * (model userModel lincada na collection userCollections)
 */
window.userCollections = Backbone.Collection.extend({
    model: userModel
});