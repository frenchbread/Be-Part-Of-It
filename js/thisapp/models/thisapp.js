define([
    'backbone'
],function(Backbone){
    'use strict';

    var AppModel = Backbone.Model.extend({
        defaults: {
            'title': '#bepartofit'
        }
    });

    return AppModel;
})