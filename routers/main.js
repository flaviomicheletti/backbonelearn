window.AppRouter = Backbone.Router.extend({

    //
    // Definindo rotas
    //
    routes: {
        '':     'index',
        'foo1': 'doNothing1',
        'foo2': 'doNothing2'
    },

    index: function () {
        // instanciamos a collection lincada a model userModel;
        window.users = new userCollections();
        window.user_view = new userViewes({model: users});
    },
    doNothing1: function () {
        console.log('doNothing1()');
    },
    doNothing2: function () {
        console.log('doNothing2()');
    }
});

// Inicializar o Router
window.router = new AppRouter();
Backbone.history.start();