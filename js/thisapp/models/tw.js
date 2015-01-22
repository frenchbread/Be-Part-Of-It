define([
    'backbone'
],function(Backbone){
    'use strict';

    var TweetModel = Backbone.Model.extend({
        defaults: {
            'type': 'Tw',
            'text': null,
            'img': null,
            'username': null,
            'time': null
        },
        parse: function(data){
            var map = {
                'text': data.text,
                'img': data.img,
                'username': data.username,
                'time': data.time
            };
            return map;
        }
    });

    return TweetModel;
})