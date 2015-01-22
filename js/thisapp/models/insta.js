define([
    'backbone'
],function(Backbone){
    'use strict';

    var InstaModel = Backbone.Model.extend({
        defaults: {
            'type': 'Insta',
            'media': null,
            'time': null,
            'text': null,
            'img': null,
            'username': null,
            'likes': null
        },
        parse: function(data){
            var map = {
                'media': data.media,
                'time': data.time,
                'text': data.text,
                'img': data.img,
                'username': data.username,
                'likes': data.likes
            };
            return map;
        }
    });

    return InstaModel;
})