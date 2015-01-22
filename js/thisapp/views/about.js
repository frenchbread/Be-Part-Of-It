define([
    'jquery',
    'underscore',
    'backbone'
], function($, _, Backbone){
    'user strict';

    var AboutView = Backbone.View.extend({

        html: [
            '<legend>About</legend>',
            '<div id="flow">Crafted with love by Damir Mustafin.</div>',
        ].join(''),


        initialize: function()
        {
            this.$el.append(this.html);
        },

        render: function(){
            return this;
        }
    });

    return AboutView;
});