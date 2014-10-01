$(function(){
    var myview = Backbone.View.extend({
        className : 'red',
        tagName : 'section',
        attributes:{
            id : 'main',
            class:'blue',
            'data-record' : 'row1'

        }  ,
        initialize:function(){
            console.log('initial',this);
        },
        render:function(){
            var self = this;
            $.get('template/content.html',function(template){
                var data = {title:'abc',description:'xyz'} ;
                var compiled = _.template(template);
                self.$el.append(compiled(data));
            } );

            return this;
        },
        func : function(e){
            console.log(e);
            console.log(e.currentTarget);
        },
        events:{
            'click #btn' : 'func'

        }
    });
    var v1 = new myview();
    $('#container').append(v1.render().el);
});