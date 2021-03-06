
'use strict';

var BaseView = require('base/baseView');
// var CarouselView = require('modules/base/components/carousel/views/carouselView');
// var PostsView = require('modules/base/components/posts/views/postsView');
// var SiteCollection = require('modules/base/site/collections/siteCollection');


module.exports = BaseView.extend({

  tagName: 'div',
  className: 'home_container main_comp',
  attributes: {'data-page': 'home'},
  template: require('../templates/home.hbs'),
  events: {
    'click .home_title': 'clickHandler'
  },

  initialize: function() {

    // this.listenTo(Backbone.pubSub, 'collectionDone', this.render);
    this.listenTo(this.model, 'change', this.render);
    this.attachTo('.main_container');

    this.buildPage();
  },

  buildPage: function() {
    // var carouselView = new CarouselView({el: $('.carousel_container')});
    // var postsView = new PostsView({el: $('.posts_container')});
  },

  render: function() {
    // this.$el.html( this.template({collection: this.coverCollection.toJSON()}) );
    this.$el.html( this.template() );

    // Backbone.pubSub.trigger('viewRendered', 'helloooo payload');
    return this;
  },

  attachTo: function(arg) {
    BaseView.prototype.attachTo.apply(this, arguments);
    // console.log('home attachTo', arg)
  },

  clickHandler: function() {
    this.model.set({title: 'changed title'})
  }

});

