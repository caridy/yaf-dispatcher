YUI.add("demo-templates-layout",function(Y, NAME){
   var dust = Y.config.global.dust,
       cache = Y.Template._cache = Y.Template._cache || {},
       partials = {};

(function(){dust.register("layout",body_0);function body_0(chk,ctx){return chk.write("<!DOCTYPE html><html lang=\"en\"><head><meta charset=\"utf-8\" /><title>locator-dust demo</title></head><body><h1>template `bar` rendered at the server side: </h1><div id=\"outlet\">").reference(ctx.get("outlet"),ctx,"h",["s"]).write("</div><script>").reference(ctx.get("state"),ctx,"h",["s"]).write("</script><script>app.yui.use('yaf-dispatcher', function (Y) {var a = new Y.ExpressApp({container    : '#outlet',viewContainer: '#outlet'});Y.Array.each(app.routes, function (route) {a.route(route.path, function (req, res) {res.render(route.dispatch.view, route.dispatch.options);});});a.render({rendered: true}).dispatch();});</script></body></html>");}return body_0;})();

   Y.Array.each([], function (name) {
       if (cache["demo/partials/" + name]) {
           partials[name] = cache["demo/partials/" + name];
       }
   });

   cache["demo/layout"] = function (data) {
       var content;
       dust.render("layout", data, function (err, content) {
           result = content;
       });
       return result; // hack to make dust sync
   };
}, "", {requires: ["template-dust"]});