define([
    'thisapp/views/thisapp',
    'thisapp/routers/router',
    'thisapp/models/thisapp',
    'jquery'
], function(AppView, Router, AppModel, $){
    'use strict';

    var initialize = function(){

        var appModel = new AppModel();

        var appView = new AppView({model: appModel});

        $('.grabcont').html(appView.render().el);

        var router = new Router(appView);


        Backbone.history.start();

    };

    return {
        initialize: initialize
    }
});