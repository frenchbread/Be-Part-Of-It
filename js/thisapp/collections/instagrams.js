define([
    'jquery',
    'backbone',
    'thisapp/models/insta'
], function($, Backbone, InstaModel){
    'user strict';

    var InstaCollection = Backbone.Collection.extend({
        model: InstaModel,
        url: 'http://justbepartofit.com/insta/getInstagrams.php',
        sync: function(method, model, options){
            options.timeout = 8000;
            options.dataType = "json";
            return Backbone.sync(method, model, options);
        },
        parse: function(response){
            return response;
        }
    });

    return InstaCollection;
});