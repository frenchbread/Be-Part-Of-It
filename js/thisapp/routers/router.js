define([
    'jquery',
    'underscore',
    'backbone'
], function($, _, Backbone){
    'user strict';

    var Router = Backbone.Router.extend({
        routes: {
            '': 'goToWelcome',
            'welcome': 'goToWelcome',
            'tweets': 'goToTweets',
            'instagrams': 'goToInstagrams',
            //'dash/:place': 'goToDash',
            'about': 'goToAbout'
        },

        initialize: function(view){
            this.appView = view;
        },

        goToWelcome: function(place){
            this.appView.setPage('welcome');
        },

        goToTweets: function(){
            this.appView.setPage('tweets');
        },

        goToInstagrams: function(){
            this.appView.setPage('instagrams');
        },

        goToAbout: function(){
            this.appView.setPage('about');
        }

    });

    return Router;
});