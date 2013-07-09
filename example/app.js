/*jslint node:true, nomen: true*/

'use strict';

var express = require('express'),
    params = require('express-params'),
    YUI = require('express-yui'),
    Locator = require('locator'),
    LocatorDust = require('locator-dust'),
    Dispatcher = require('../'), // yaf-dispatcher
    app = express();

params.extend(app);

app.yui.debugMode();
app.yui.setCoreFromAppOrigin();

// custom view engine to rely on yui templates
app.set('view', app.yui.view({
    defaultLayout: 'layout'
}));

// serving static yui modules
app.use(YUI['static']());

// creating a page with YUI embeded
app.get('/bar', YUI.expose(), Dispatcher.dispatch('bar', {
    tagline: 'rendering bar template'
}));
app.get('/baz', YUI.expose(), Dispatcher.dispatch('baz', {
    tagline: 'rendering baz template'
}));
app.get('/foo/:id', YUI.expose(), Dispatcher.dispatch('foo', {
    tagline: 'rendering foo template'
}));

app.param('range', /^(\w+)\.\.(\w+)?$/);
app.get('/bar/:range', YUI.expose(), Dispatcher.dispatch('bar', {
    tagline: 'rendering bar with range template'
}));

// locator initialiation
new Locator({
    buildDirectory: 'build'
})
    .plug(LocatorDust.yui())
    .plug(app.yui.plugin({
        registerGroup: true,
        registerServerModules: true
    }))
    .parseBundle(__dirname, {}).then(function () {

        // listening for traffic only after locator finishes the walking process
        app.listen(3000, function () {
            console.log("Server listening on port 3000");
        });

    }, function (err) {
        throw err;
    });