YUI.add("demo-templates-bar",function(e,t){var n=e.config.global.dust,r=e.Template._cache=e.Template._cache||{},i={};(function(){function e(e,t){return e.write("<h3>bar</h3><p>").reference(t.get("tagline"),t,"h").write("</p>")}return n.register("bar",e),e})(),e.Array.each([],function(e){r["demo/partials/"+e]&&(i[e]=r["demo/partials/"+e])}),r["demo/bar"]=function(e){var t;return n.render("bar",e,function(e,t){result=t}),result}},"@VERSION@",{requires:["template-dust"]});
