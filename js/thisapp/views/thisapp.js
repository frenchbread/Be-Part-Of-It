define([
    'jquery',
    'underscore',
    'backbone',
    'thisapp/views/flow',
    'thisapp/views/tweets',
    'thisapp/views/instagrams',
    'thisapp/views/about'
], function($, _, Backbone, FlowView, TweetsView, InstaView, AboutView){

    'use strict';

    var AppView = Backbone.View.extend({
        id: 'app-view',
        html: '<div id="cont"></div>',

        events: {

        },

        views: {

        },

        initialize: function()
        {
            this.listenTo(this.model, 'change', this.render);

            this.views['about'] = new AboutView({
                id: 'page-about',
                className: 'page-view'
            });

            this.views['welcome'] = new FlowView({
                id: 'page-welcome',
                className: 'page-view'
            });

            this.views['tweets'] = new TweetsView({
                id: 'page-tweets',
                className: 'page-view'
            });

            this.views['instagrams'] = new InstaView({
                id: 'page-instagrams',
                className: 'page-view'
            });

            this.$el.append(this.html);

            this.$('#cont').append(this.views['welcome'].render().el);
            this.$('#cont').append(this.views['tweets'].render().el);
            this.$('#cont').append(this.views['instagrams'].render().el);
            this.$('#cont').append(this.views['about'].render().el);
        },

        render: function(){
           //$('.cooll').html(this.model.get('welcomeMessage'));
            return this;
        },

        setPage: function(page){
            $('#menuu ul li').removeClass('active');
            this.$('.page-view').hide();
            this.$('#page-' + page).show();
            $('#menuu ul li#' + page + 'link').addClass('active');
        }

    });

    return AppView;
});