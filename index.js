var routes = require('./lib/routes.js');

module.exports = {

    dispatch: function (viewName, options) {

        function fn (req, res, next) {

            // expose routes to the client side
            // TODO: cache the routes
            res.expose(routes.extractClientRoutes(req.app), 'window.app.routes');

            // expose active route
            res.expose(viewName, 'window.app.activeView');

            // TODO: should we do anything special here to collect data?
            //       or the data should be collected thru middlewares?

            // render the view
            res.render(viewName, options);

        }

        // annotating the middleware with the dispatch signature
        fn.dispatch = {
            view: viewName,
            options: options
        };

        return fn;

    }

};
