YUI.add('demo-templates-baz', function (Y, NAME){
   var dust = Y.config.global.dust,
       cache = Y.Template._cache = Y.Template._cache || {},
       partials = {};

(function(){dust.register("baz",body_0);function body_0(chk,ctx){return chk.write("<h3>baz</h3><p>").reference(ctx.get("tagline"),ctx,"h").write("</p>");}return body_0;})();

   Y.Array.each([], function (name) {
       if (cache["demo/partials/" + name]) {
           partials[name] = cache["demo/partials/" + name];
       }
   });

   cache["demo/baz"] = function (data) {
       var content;
       dust.render("baz", data, function (err, content) {
           result = content;
       });
       return result; // hack to make dust sync
   };
}, '@VERSION@', {"requires": ["template-dust"]});
