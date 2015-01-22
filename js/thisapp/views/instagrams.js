define([
    'jquery',
    'underscore',
    'backbone',
    'thisapp/collections/instagrams',
    'thisapp/templates'
], function($, _, Backbone, InstaCollection, Templates){
    'use strict';

    var InstaView = Backbone.View.extend({

        html: [
            '<legend>Instagrams</legend>',
            '<div id="instagrams">Loading..</div>',
        ].join(''),

        collection: new InstaCollection(),

        initialize: function()
        {
            this.$el.append(this.html);
            this.$instagrams = this.$('#instagrams');
        },

        render: function(){
            var that = this;

            this.collection.fetch({
                success: function(collection, response){
                    that.renderInsta();
                },
                error: function(collection, response, options){
                    console.log('error');
                }
            });
            return this;
        },

        renderInsta: function(){
            if (this.collection.length){
                var inHTML = [];
                this.collection.each(function(element, index, list){
                    inHTML.push(Templates['instagrams'](element.toJSON()));
                });
                this.$instagrams.html(inHTML.join(''));
            }else{
                this.$instagrams.html('Nothing to show.');
            }
        }
    });

    return InstaView;
});