YUI.add('yaf-dispatcher', function (Y) {

    'use strict';

    var ExpressApp = Y.Base.create('express-app', Y.App, [], {

        initializer: function (config) {
            console.log(app.router);
            var self = this;
            // attaching default routes coming from server side
            Y.Array.each(config.routes, function (route) {
                self.route(route.path, function (req, res) {
                    res.render(route.dispatch.name, route.dispatch.options);
                });
            });
        },

        render: function (options) {
            ExpressApp.superclass.render.apply(this, arguments);

            options = (options || {});

            var container, content, doc, place, placeData, placeText;

            // No need to re-render the initial server rendering.
            if (options.rendered) { return this; }

            doc       = Y.config.doc;
            container = this.get('container');
            place     = this.get('place');
            placeText = place.toString();

            placeData = place.isNew() ? null : {
                id  : place.get('id'),
                text: placeText
            };

            doc.title = this.titleTemplate({place: placeData});
            content   = this.headerTemplate({place: placeData});

            container.removeClass('loading').one('#header').setHTML(content);
            // Delay adding `located` class so the CSS transitions run.
            if (!place.isNew()) {
                Y.later(0, container, 'addClass', 'located');
            }

            return this;
        },

        /**
        Gets a request object that can be passed to a route handler.

        @method _getRequest
        @param {String} path Current path being dispatched.
        @param {String} url Current full URL being dispatched.
        @param {String} src What initiated the dispatch.
        @return {Object} Request object.
        @protected
        **/
        _getRequest: function (path, url, src) {
            var req = ExpressApp.superclass._getRequest.apply(this, arguments);
            // augmenting req object
            req.app = this;
            return req;
        },

        /**
        Gets a response object that can be passed to a route handler.

        @method _getResponse
        @param {Object} req Request object.
        @return {Object} Response Object.
        @protected
        **/
        _getResponse: function (req) {
            var self = this,
                res = ExpressApp.superclass._getResponse.apply(this, arguments);
            // augmenting res object
            res.render = function () {
                return self.render.apply(self, arguments);
            };
            return res;
        }

    }, {

        ATTRS: {}

    });

    Y.ExpressApp = ExpressApp;

}, '', { requires: ['app'] });
