define([
    'underscore',
    'livestamp'
], function(_, livestamp){

    var Templates = {};

    Templates['tweets'] = [
        '<div class="tweeet">',
            '<div class="twee_pic_box" style="background-image: url(\'<%= img %>\')"></div>',
            '<div class="twee_box">',
                '<div class="twee_body">',
                    '<a><%= text %></a>',
                '</div>',
                '<div class="twee_bot">',
                    '<div class="twee_bot_left">',
                        '<a class="min">Added by</a> <a class="link" href="http://twitter.com/<%= username %>" target="_blank" ><%= username %></a>',
                    '</div>',
                    '<div class="twee_bot_right">',
                        '<a class="min"><span data-livestamp="<%= time %>" ></span></a>',
                    '</div>',
                '</div>',
            '</div>',
        '</div>'
    ].join('');

    Templates['instagrams'] = [
        '<div class="instaa">',
            '<div class="instaa_media" style="background-image: url(\'<%= media %>\')"></div>',
            '<div class="instaa_box">',
                '<div class="instaa_box_user">',
                    '<div class="instaa_box_userpic" style="background-image: url(\'<%= img %>\')"></div>',
                    '<div class="instaa_box_userstuff">',
                        '<a href="http://instagram.com/<%= username %>" target="_blank" class="boldd"><%= username %></a>',
                        ' <a class="min">&#8226 <span data-livestamp="<%= time %>" ></span></a>',
                        '<br/>',
                        '<a class="min">&#9829; <%= likes %> people liked this</a>',
                    '</div>',
                '</div>',
                '<div class="instaa_box_caption"><%= text %></div>',
            '</div>',
        '</div>',
    ].join('');

    for (var tmpl in Templates){
        if (Templates.hasOwnProperty(tmpl)){
            Templates[tmpl] = _.template(Templates[tmpl]);
        }
    }

    return Templates;
});