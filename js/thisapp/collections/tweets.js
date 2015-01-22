define([
    'jquery',
    'backbone',
    'thisapp/models/tw'
], function($, Backbone, TweetModel){
    'user strict';

    var TwCollection = Backbone.Collection.extend({
        model: TweetModel,
        url: 'http://justbepartofit.com/tw/getTweets.php',
        sync: function(method, model, options){
            options.timeout = 15000;
            options.dataType = "json";
            return Backbone.sync(method, model, options);
        },
        parse: function(response){
            return response;
        }
    });

    return TwCollection;
});