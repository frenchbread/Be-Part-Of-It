require.config({
   paths: {
       'jquery': 'libs/jquery-1.11.0.min',
       'underscore': 'libs/underscore',
       'backbone': 'libs/backbone',
       'bootstrap': 'libs/bootstrap.min',
       'moment': 'libs/moment.min',
       'livestamp': 'libs/livestamp'
   },

   shim: {
       'underscore': {
           exports: '_'
       },
       'backbone': {
           deps: [
               'underscore',
               'jquery'
           ],
           exports: 'Backbone'
       },
       'bootstrap': {
           deps: [
                'jquery'
           ]
       }
    }
});

require([
    'backbone',
    'thisapp/thisapp'
], function(Backbone, App){

    'use strict';
    App.initialize();


});