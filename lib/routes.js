/*
 * Copyright (c) 2013, Yahoo! Inc.  All rights reserved.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE.txt file for terms.
 */

/*jslint nomen:true, node:true */

"use strict";

module.exports = {

    extractClientRoutes: function (app) {

        var self = this,
            routes = app.routes.get || [],
            client = [],
            i;

        for (i = 0; i < routes.length; i += 1) {
            if (routes[i].path) {
                client.push({
                    path: routes[i].path,
                    regexp: routes[i].regexp,
                    keys: routes[i].keys,
                    dispatch: self.extractDispatcherAnnotations(routes[i])
                });
            }
        }
        console.log(1, app.routes.get, client);

        return client;

    },

    extractDispatcherAnnotations: function (route) {

        var fn = route && route.callbacks && route.callbacks.length && route.callbacks[route.callbacks.length - 1];

        return fn && fn.dispatch;

    }

};
