define([
    'jquery',
    'underscore',
    'backbone',
    'thisapp/collections/tweets',
    'thisapp/templates'
], function($, _, Backbone, TwCollection, Templates){
    'use strict';

    var TweetsView = Backbone.View.extend({

        html: [
            '<legend>Tweets</legend>',
            '<div id="tweets">Loading..</div>',
        ].join(''),

        collection: new TwCollection(),

        initialize: function()
        {
            this.$el.html(this.html);

            this.$tweets = this.$('#tweets');

        },

        render: function(){
            var that = this;

            this.collection.fetch({
                success: function(collection, response){
                    that.renderTw();
                },
                error: function(collection, response, options){
                    console.log('error');
                }
            });
            return this;
        },

        renderTw: function(){
            if (this.collection.length){
                var twHTML = [];
                this.collection.each(function(element, index, list){
                    twHTML.push(Templates['tweets'](element.toJSON()));
                });
                this.$tweets.html(twHTML.join(''));
            }else{
                this.$tweets.html('Nothing to show.');
            }
        }

    });

    return TweetsView;
});