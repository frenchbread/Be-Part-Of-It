define([
    'jquery',
    'underscore',
    'backbone',
    'thisapp/collections/tweets',
    'thisapp/collections/instagrams'
], function($, _, Backbone, TwCollection, InstaCollection){
    'use strict';

    var FlowView = Backbone.View.extend({


        html: [
            '<legend>Welcome</legend>',
            '<div id="flow">Enjoy awesome feeds and just #bepartofit..</div>',
        ].join(''),


        initialize: function()
        {
            this.$el.append(this.html);
        },

        render: function(){
            return this;
        }
    });

    return FlowView;
});