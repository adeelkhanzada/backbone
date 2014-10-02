$(function(){
    var Mym1 = Backbone.Model.extend({

        defaults:{
            title:'Model title',
            description:'model dummy text'
        }

});
var m1 = new Mym1();

    var data = m1.toJSON();
   // console.log(data);

    var Myview = Backbone.View.extend({
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
               //var data = {title:'abc',description:'xyz'} ;
                var data = m1.toJSON();
                console.log(data);
                var compiled = _.template(template);
                self.$el.append(compiled(data));
            } );

            return this;
        },
        func : function(e){
            //console.log(e);
           // console.log(e.currentTarget);
        },
        events:{
            'click #btn' : 'func'

        }
    });
    var v1 = new Myview();
    $('#container').append(v1.render().el);


});


