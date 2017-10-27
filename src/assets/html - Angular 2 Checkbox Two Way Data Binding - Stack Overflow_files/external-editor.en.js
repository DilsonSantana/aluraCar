"use strict";StackExchange.mockups=function(){function e(e,t,n,i,r){function a(e,t,n){for(var i=-1,r=-1;;){if(r=t.indexOf(e,r+1),-1==r)break;(0>i||Math.abs(r-n)<Math.abs(r-i))&&(i=r)}return i}return e.replace(new RegExp("<!-- Begin mockup[^>]*? -->\\s*!\\[[^\\]]*\\]\\((http://[^ )]+)[^)]*\\)\\s*<!-- End mockup -->","g"),function(e,o,s){var c={"payload":o.replace(/[^-A-Za-z0-9+&@#\/%?=~_|!:,.;\(\)]/g,""),"pos":a(e,t,s),"len":e.length};return-1===c.pos?e:(r.push(c),e+"\n\n"+n+i+"-"+(r.length-1)+"%")})}function t(){StackExchange.externalEditor.init({"thingName":"mockup","thingFinder":e,"getIframeUrl":function(e){var t="/plugins/mockups/editor";return e&&(t+="?edit="+encodeURIComponent(e)),t},"buttonTooltip":"UI wireframe","buttonImageUrl":"/content/Shared/Balsamiq/wmd-mockup-button.png","onShow":function(e){window.addMockupToEditor=e},"onRemove":function(){window.addMockupToEditor=null;try{delete window.addMockupToEditor}catch(e){}}})}return{"init":t}}(),StackExchange.schematics=function(){function e(){if(!window.postMessage)return i;var e=document.createElement("div");e.innerHTML="<svg/>";var t="http://www.w3.org/2000/svg"==(e.firstChild&&e.firstChild.namespaceURI);if(!t)return i;var n=navigator.userAgent;return/Firefox|Chrome/.test(n)?o:/Apple/.test(navigator.vendor)||/Opera/.test(n)?a:r}function t(e,t,n,i,r){function a(e,t,n){for(var i=-1,r=-1;;){if(r=t.indexOf(e,r+1),-1==r)break;(0>i||Math.abs(r-n)<Math.abs(r-i))&&(i=r)}return i}return e.replace(new RegExp("<!-- Begin schematic[^>]*? -->\\s*!\\[[^\\]]*\\]\\((http://[^ )]+)[^)]*\\)\\s*<!-- End schematic -->","g"),function(e,o,s){var c={"payload":o.replace(/[^-A-Za-z0-9+&@#\/%?=~_|!:,.;\(\)]/g,""),"pos":a(e,t,s),"len":e.length};return-1===c.pos?e:(r.push(c),e+"\n\n"+n+i+"-"+(r.length-1)+"%")})}function n(){var n;StackExchange.externalEditor.init({"thingName":"schematic","thingFinder":t,"getIframeUrl":function(e){var t="/plugins/schematics/editor";return e&&(t+="?edit="+encodeURIComponent(e)),t},"buttonTooltip":"Schematic","buttonImageUrl":"/content/Sites/electronics/img/wmd-schematic-button.png?v=1","checkSupport":function(){var t=e();switch(t){case o:return!0;case a:return confirm("Your browser is not officially supported by the schematics editor; however it has been reported to work. Launch the editor?");case r:return confirm("Your browser is not officially supported by the schematics editor; it may or may not work. Launch the editor anyway?");case i:return alert("Sorry, your browser does not support all the necessary features for the schematics editor."),!1}},"onShow":function(e){var t=$("<div class='popup' />").css("z-index",1111).text("Loading editor").appendTo("body").show().addSpinner({"marginLeft":5}).center({"dy":-200});$("<div style='text-align:right;margin-top: 10px' />").append($("<button>cancel</button>").click(function(){t.remove(),e()})).appendTo(t),n=function(n){if(n=n.originalEvent,"https://www.circuitlab.com"===n.origin){n.data||e();var i=$.parseJSON(n.data);if(i&&"success"===i.load)return t.remove(),void 0;if(i&&i.edit_url&&i.image_url){i.fkey=StackExchange.options.user.fkey;var r=$("<div class='popup' />").css("z-index",1111).appendTo("body").show(),a=function(){r.text("Storing image").addSpinner({"marginLeft":5}).center(),$.post("/plugins/schematics/save",i).done(function(t){r.remove(),e(t.img)}).fail(function(e){if(409===e.status){var t="Storing aborted";e.responseText.length<200&&(t=e.responseText),r.text(t+", will retry shortly").addSpinner({"marginLeft":5}).center(),setTimeout(a,1e4)}else r.remove(),alert("Failed to upload the schematic image.")})};a()}}},$(window).on("message",n)},"onRemove":function(){$(window).off("message",n)}})}var i=0,r=1,a=2,o=3;return{"init":n}}(),StackExchange.externalEditor=function(){function e(e){function t(e,t){function f(t){function i(){StackExchange.helpers.closePopups(v.add(r)),d()}var r,s=g||x.caret(),c=x[0].value||"",u=t?t.pos:s.start,p=t?t.len:s.end-s.start,f=c.substring(0,u),h=c.substring(u+p);g=null;var m=function(t,r){if(!t)return setTimeout(i,0),x.focus(),void 0;StackExchange.navPrevention.start();var a=void 0===r?n(t):r,o=f.replace(/(?:\r\n|\r|\n){1,2}$/,""),c=o+a+h.replace(/^(?:\r\n|\r|\n){1,2}/,""),l=s.start+a.length-f.length+o.length;setTimeout(function(){e.textOperation(function(){x.val(c).focus().caret(l,l)}),i()},0)},v=null;if(a){var b=a(t?t.payload:null);v=$("<iframe>",{"src":b})}else{var k=o(t?t.payload:null);v=$(k)}v.addClass("esc-remove").css({"position":"fixed","top":"2.5%","left":"2.5%","width":"95%","height":"95%","background":"white","z-index":1001}),$("body").loadPopup({"html":v,"target":$("body"),"lightbox":!0}).done(function(){$(window).resize(),l(m)})}$('<style type="text/css"> .wmd-'+i+"-button span { background-position: 0 0; } .wmd-"+i+"-button:hover span { background-position: 0 -40px; }</style>)").appendTo("head");var h,m,g,v=e.getConverter().hooks,x=$("#wmd-input"+t);v.chain("preConversion",function(e){var t=(e.match(/%/g)||[]).length,n=x.length?x[0].value||"":"";return h=new Array(t+2).join("%"),m=[],r(e,n,h,i,m)}),v.chain("postConversion",function(e){return e.replace(new RegExp(h+i+"-(\\d+)%","g"),function(e,t){return"<sup><a href='#' class='edit-"+i+"' data-id='"+t+"'>"+u+"</a></sup>"})});var b="The "+i+" editor does not support touch devices.",k=!1;$("#wmd-preview"+t).on("touchend",function(){k=!0}).on("click","a.edit-"+i,function(){return k?(alert(b),k=!1,!1):(k=!1,(!p||p())&&f(m[$(this).attr("data-id")]),!1)}),$("#wmd-input"+t).keyup(function(e){e.shiftKey||e.altKey||e.metaKey||!e.ctrlKey||77!==e.which||(!p||p())&&f()}),setTimeout(function(){var e=($("#wmd-button-bar"+t),$("#wmd-image-button"+t)),n=parseInt(e.css("left"));e.nextAll("li").each(function(){var e=$(this),t=parseInt(e.css("left"));e.prop("style").right||e.css("left",t+25)});var r=$("<li class='wmd-button wmd-"+i+"-button' style='left:"+(n+25)+"px' id='wmd-"+i+"-button"+t+"' title='"+s+" Ctrl-M' />").insertAfter(e),a=!1,o=$("<span />").css({"backgroundImage":"url("+c+")"}).appendTo(r).on("touchend",function(){a=!0}).click(function(){return a?(alert(b),a=!1,void 0):(a=!1,(!p||p())&&f(),void 0)});$.browser.msie&&o.mousedown(function(){g=x.caret()})},0)}function n(e){return('\n\n<!-- Begin {THING}: In order to preserve an editable {THING}, please\n     don\'t edit this section directly.\n     Click the "edit" link below the image in the preview instead. -->\n\n![{THING}]('+e+")\n\n<!-- End {THING} -->\n\n").replace(/{THING}/g,i)}var i=e.thingName,r=e.thingFinder,a=e.getIframeUrl,o=e.getDivContent,s=e.buttonTooltip,c=e.buttonImageUrl,l=e.onShow,d=e.onRemove||function(){},u=e.editLabel||"edit the above "+i,p=e.checkSupport;StackExchange.MarkdownEditor.creationCallbacks.add(t)}return{"init":e}}();