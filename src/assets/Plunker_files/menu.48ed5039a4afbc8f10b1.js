atwpjp([226],{610:function(e,t,n){function a(e){return/(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/.test(e)}function o(e){var t=new Array;e:for(var n=0;n<e.length;n++){for(var a=0;a<t.length;a++)if(t[a]==e[n])continue e;t[t.length]=e[n]}return t}function i(e){var t,n=window.onkeydown||function(){},a=function(t){e(t),n(t)};A.msi?(t=document.onkeydown,document.onkeydown=function(){a(),null!==t&&t()}):(t=window.onkeydown,window.onkeydown=function(e){a(e),null!==t&&t()})}function r(e){if(l(e)){var t=w(!0),n=x();p(e),v(e,t[0]-n),b(e,t[1]-n)}}function s(e,t,n){return e.length>t&&(e=e.slice(0,t-1),n&&e[e.length-1]!==n&&e.push(n)),e}function c(e){if(e._e)return!0;for(var t in e)if("_e"!=t&&e.hasOwnProperty(t))return delete e._e,!1;return e._e=1,!0}function l(e){return"string"==typeof e&&(e=document.getElementById(e)),e}function u(e,t,n){e=l(e),e&&e.style&&(e.style[t]=n)}function d(e,t,n){n||u(e,"display","none"),t&&u(e,"visibility","hidden")}function p(e,t,n){n||u(e,"display","block"),t&&u(e,"visibility","visible")}function h(e,t){e=l(e),e&&(e.className?-1===e.className.indexOf(t)&&(e.className+=" "+t):e.className=t)}function f(e,t){if(e=l(e)){if(!e.className)return;-1!==e.className.indexOf(t)&&(e.className=e.className.split(t).join(" "))}}function m(e,t){return e=l(e),e?e.className?-1!==e.className.indexOf(t):!1:void 0}function g(e,t){return e=l(e),e&&e.parentNode&&(e.parentNode.className||"").indexOf(t)>-1}function v(e,t){u(e,"width",t+"px")}function b(e,t){u(e,"height",t+"px")}function w(e){var t=B.documentElement,n=B.body,a=0,o=0,i=0,r=0;return e&&(window.innerHeight&&window.scrollMaxY?(a=n.scrollWidth,o=window.innerHeight+window.scrollMaxY):n.scrollHeight>n.offsetHeight?(a=n.scrollWidth,o=n.scrollHeight):(a=n.offsetWidth,o=n.offsetHeight)),window.self&&window.self.innerHeight?(i=window.self.innerWidth,r=window.self.innerHeight):t&&t.clientHeight?(i=t.clientWidth,r=t.clientHeight):n&&(n.clientWidth||n.clientHeight)?(i=n.clientWidth,r=n.clientHeight):n&&(i=n.clientWidth,r=n.clientHeight),[e!==!0||i>a?i:a,e!==!0||r>o?r:o]}function _(){var e=B.documentElement,t=B.body;return"number"==typeof window.pageYOffset?[window.pageXOffset,window.pageYOffset]:t&&(t.scrollLeft||t.scrollTop)?[t.scrollLeft,t.scrollTop]:e&&(e.scrollLeft||e.scrollTop)?[e.scrollLeft,e.scrollTop]:[0,0]}function x(){if(U)return U;try{var e=document,t=e.ce("div"),n=e.ce("div"),a=e.getElementsByTagName("body")[0],o=t.style;o.width="50px",o.height="50px",o.overflow="hidden",o.position="absolute",o.top="-200px",o.left="-200px",n.style.height="100px",a.appendChild(t),t.appendChild(n);var i=n.innerWidth;t.style.overflow="scroll";var r=n.innerWidth;t.removeChild(n),a.removeChild(t),U=i&&r?i-r:20}catch(s){U=20}return U}function y(e){e&&(e.cancelBubble=!0,e.preventDefault&&e.preventDefault())}var k=n(17),C=n(62),M=n(611),E=n(573),A=n(4),S=n(46),I=n(74),z=n(349),O=k(),T=n(382),N=n(79),D=n(612),R=function(e){e||(e=window.event||event),e.keyCode?_ate.maf.key=e.keyCode:e.which&&(_ate.maf.key=e.which)},P=function(e){e||(e=window.event||event),e.keyCode?_ate.maf.key=e.keyCode:e.which&&(_ate.maf.key=e.which)},L=function(){9===_ate.maf.key?_ate.maf.key=null:(_ate.maf.key=null,addthis_close())},j=function(e,t){return t||(t=window.event||event||{}),M(t),addthis_sendto(e)};_ate.maf=_ate.maf||{};var U=A.msi?20:void 0;if(!window._atw){var B=document;window._atw={ver:300,show:1,css:{},conf:{},data:{auth:{},contacts:{all:{},origin:{}}},fe:null,plo:[],gps:function(e){_atw.evar();var t=window.addthis_options;e(t?t.replace(",more","").split(","):[])},ibt:function(){if(_atw.bti)return _atw.bti;var e=(window.addthis_product||"men").substr(0,3),t="bkm"==e||"bmt"==e||"fct"==e||"fxe"==e;return t&&(_atw.bti=t),t},lfy:0,rev:"$Rev$",lang:function(e,t){var a;if(a=I(!1,t,e),a===!1){var o=n(613);a=o[t]}return a},list:E(T.list),ibm:function(){var e=(_atw.conf||{}).product||window.addthis_product||"";return m(_atw.did,"mmborder")||e.indexOf("bkm")>-1},ics:function(e,t){var n,a,o,i;if(_atw.custom_list)return _atw.custom_list[e];if(t.services_custom){_atw.custom_list={},n=t.services_custom;for(o in n)n.hasOwnProperty(o)&&(a=n[o],_atw.custom_list[a.code]=a,e===a.code&&(i=a));return i}return!1},sag:function(){_ate.as(_atw.ibm()?"bkmore":"more")},hkd:function(e){"undefined"==typeof e&&(e=window.event),e&&27==e.keyCode&&(_atw.clb(),y(e))},div:null,xwa:function(){null!==_atw.cwa&&clearTimeout(_atw.cwa)},cwa:null,xhwa:function(){null!==_atw.hwa&&clearTimeout(_atw.hwa)},hwa:null,ost:!1,get:function(e){return"string"==typeof e&&(e=document.getElementById(e)),e},did:"at15s",rhv:function(e){e&&e.className&&(e.className=e.className.replace("athov",""))},shv:function(e){e&&-1==e.className.indexOf("athov")&&(e.className+=" athov")},mck:0,cef:function(){},rse:function(){},clo:function(){var e=l(_atw.did);return e&&d(e),_atw.sta&&"compact"===_atw.sta&&(_ate.ed.fire("addthis.menu.close",window.addthis||{},{pane:_atw.sta}),_atw.sta=null),!1},hash:window.location.hash,clb:function(){return _atw.mck=0,_atw.addthis_popup_mode?window.close():(d("at16lb"),d("at16p"),d("at15s"),f("at15s_head","at15s_head_success"),d("at15s"),(_ate.maf||{}).pre&&_ate.maf.pre.focus()),_atw.sta&&"compact"!==_atw.sta&&(_ate.ed.fire("addthis.menu.close",window.addthis||{},{pane:_atw.sta}),_atw.sta=null),!1},sho:function(e){var t="at16lb",n="at_hover",a="at_share",o=l(_atw.did),i=l("at16p"),s=l("at16ptc"),c=!1,u=!1;if(d(a),d("at_error"),d(n),d(o),d("at_success"),f("at15s_head","at15s_head_success"),"share"===e||""===e||"bkmore"===e?("bkmore"===e?(c=u=!0,h(_atw.did,"mmborder")):(e="share",o.style.display="",f(_atw.did,"mmborder")),d(i),_atw.conf.ui_use_vertical_menu&&d("at15s_head"),p(n),A.ipa&&r("at16lb"),s&&(s.innerHTML=addthis_caption_share)):(_atw.mck++,"more"!==e?(("bkemail"===e||_atw.ibm())&&(h(_atw.did,"mmborder"),u=!0),_atw.rse(),d(a),s.innerHTML=addthis_caption_email):(p(a),s&&(s.innerHTML=addthis_caption_share)),c=!0),c||u){var m="bkmore"===e;p(t);var g=w(!0),_=w(),y=x();if(v(t,g[0]-y),b(t,g[1]-y),i.style.marginTop=Math.max(0,_[1]/2-222.5)+"px",!m&&(p(i),"more"===e)){v(i,300);var k=l("at16filt");k&&"none"!=k.style.display&&k.focus()}}if(_atw.show-->0){var C=_atw.conf.services_compact_org||"",M=C.split(",").length,E=0,S=0,I=window.addthis_ssh;I&&_atw.csl&&(I=I.split(_atw.csl).shift().replace(/,$/,"")),I||_atw.crs||!C||C===addthis_options_default?I&&I!==_atw.crs&&(E=window.addthis_ssh):S=M,_ate.ed.fire("addthis-internal.compact",window.addthis||{},{svc:e,cmo:S,cso:E,crs:_atw.crs,pco:_atw.conf.product||addthis_product})}},dut:function(e,t){var n=(e||"").toLowerCase(),a=(t||"").toLowerCase();return addthis_url=e,addthis_title=t,(""===n||"[url]"===n||"<data:post.url/>"===n)&&(addthis_url=location.href),(""===a||"[title]"===a||"<data:post.title/>"===a)&&(addthis_title=document.title),[addthis_url,addthis_title]},menu:function(e,t,a,r){var c=_ate,d=document,p=n(357);if(_atw.ost){var v=l("at15s_brand"),b=l("at16_brand"),x=_atw.conf.ui_cobrand,y=l("at15ptc"),k=_atw.conf.ui_header_color,M=_atw.conf.ui_header_background;v&&(v.innerHTML=x),b&&(b.innerHTML=x),y&&(y.innerHTML=window.addthis_caption_share),u("at15s_head","backgroundColor",M),u("at16pt","backgroundColor",M),u("at16ptx","color",k),u("at16pt","color",k),u("at16ptc","color",k),u("at15s_brand","color",k),u("at16ptc","color",k),_atw.conf.ui_use_close_control?(h("at15s_brand","at15s_brandx"),f("at15sptx","at15dn")):(f("at15s_brand","at15s_brandx"),h("at15sptx","at15dn"))}else{if(i(_atw.hkd),!_atc.ostm){if(!window.addthis_product||0!==window.addthis_product.indexOf("f"))for(G in window.addthis_conf)window.addthis_conf.hasOwnProperty(G)&&(_atc[G]=window.addthis_conf[G]);for(G in window.addthis_config)if(window.addthis_config.hasOwnProperty(G)){if("product"==G||"services_compact"==G)continue;_atw.conf[G]=window.addthis_config[G]}_atc.ostm=1}_atw.ti=1;var E,I,z,O,T=(_atw.conf.services_exclude||"").replace(/\s/g,"").replace(/\*/,""),U=_atw.conf.product||window.addthis_product,B={},H="";if(T)for(var V=T.split(","),F=0;F<V.length;F++)B[V[F]]=1;_atw.excluded=B;var W=(_atw.conf.services_compact||addthis_options_default).replace(/\s/g,"").replace(/\*/,"");""===S()&&-1==U.indexOf("ffext")&&-1==U.indexOf("fxe")&&(W=W.replace(/^email(?:,)|,email/g,"")),W=W.split(",");for(var G=0;G<W.length;G++)if(G<W.length-1&&"more"===W[G]){var q=W.splice(G,1);W.push(q[0]);break}W=o(W);var Y=_atw.list,K=_atw.conf.services_expanded||[],Z=0;if(_atw.conf.services_expanded)K=K.replace(/ /g,"").split(",");else for(var E in Y)Y.hasOwnProperty(E)&&("string"!=typeof E||B[E]||K.push(E));for(K.sort(function(e,t){if("string"==typeof Y[e]&&"string"==typeof Y[t]){var n=(Y[e]||"").toLowerCase(),a=(Y[t]||"").toLowerCase();return(n>a?1:n==a?0:-1)||0}return 0}),G=0;G<K.length;G++)E=K[G],O=_atw.css[E],z=Y[E],"string"!=typeof z||B[E]||Z++;for(var Q,J,X=n(356)({campaign:"AddThis compact menu"}),$=n(28).isBrandingReduced(),ee=!A.ipa&&_atw.conf.ui_use_vertical_menu,te=p.div(X.generateBranding($)).css(ee?"atm-f":"").id("at15pf"),ne=p.div(p.span(addthis_caption_share).id("at15ptc"),p.span(_atw.conf.ui_cobrand).id("at15s_brand").css(_atw.conf.ui_use_close_control?"at15s_brandx":""),p.a("X").id("at15sptx").css(_atw.conf.ui_use_close_control?"":"at15dn").href("#").attr("tabindex","9000").attr("onclick","return _atw.clb()").attr("onkeydown","if(!e){var e = window.event||event;}if(e.keyCode){_ate.maf.key=e.keyCode;}else{if(e.which){_ate.maf.key=e.which;}}if(_ate.maf.key==9){ addthis_close(); _ate.maf.sib.tabIndex=9001;_ate.maf.sib.focus();}else{/*alert(_ate.maf.key)*/} _ate.maf.key=null")).id("at15s_head"),ae="ja,fr,he,it,af,ga,el,tl,ro,ru,ms,mk,az,zh,sq,te,be,ta,uk,ml,eu,se,su,aze,gre,tra,fre,gdh,jpn,mac,mak,msa,may,ron,rum,rus,tam,tgl,ukr,zho",oe=(window.addthis_ssh||"").split(","),ie={},re=[],G=0;G<oe.length;G++)ie[oe[G]]=1;W=A.ipa?s(W,7,"more"):ee?s(W,8,"more"):s(W,12,"more");for(var G=0;G<W.length;G++){E=W[G],O=_atw.css[E];var se=C(),ce=E.split("_").shift(),le=ie[ce]||ie[E];if(E in _atw.list){if(z=_atw.list[E],B[E]||"string"!=typeof z)continue;if(I=O?D(E,O):N({code:E,alt:z,title:z}),!I)continue;("email"!==E||""!==S()||U.indexOf("ffext")>-1||U.indexOf("fxe")>-1)&&(ee?(Q=p.a(I,p.span(_atw.list[E]+("more"===E&&-1===ae.indexOf(se)?" ("+Z+")":"")).css("at-label",le?" at_bold":"","at-size-16")).id("atic_"+E).href("#"),J=Q.element,J.addEventListener?(J.addEventListener("keypress",R,!1),J.addEventListener("keydown",P,!1),J.addEventListener("blur",L,!1),J.addEventListener("click",j.bind(null,E),!1)):J.attachEvent&&(J.attachEvent("onkeypress",R),J.attachEvent("onkeydown",P),J.attachEvent("onblur",L),J.attachEvent("onclick",j.bind(null,E)))):Q=p.a(I,p.span(_atw.list[E]+("more"===E&&-1===ae.indexOf(se)?" ("+Z+")":"")).css("at-label")).id("atic_"+E).href("#").css("at_item "+(A.ipa?"addthis_16x16_style ":"")+(le?" at_bold":"")+" at_col"+G%2).attr("onclick","return addthis_sendto('"+E+"');").attr("onmouseover",c.bro.ipa?"":"_atw.shv(this)").attr("onmouseout",c.bro.ipa?"":"_atw.rhv(this)").attr("tabindex",G+2),re.push(Q),0===G&&(_ate.maf.firstCompact="atic_"+E))}}re.push(p.div().style("clear:both;"));var ue=p.div().id("at20mc").style("z-index:1000000;position:static").css(A.ipa?"ipad":"").html(H).element,de=p.div(re).id("at_hover").css(ee?"atm-s":"").style("display:none;"),pe=p.div(ne,de,te);ee?pe.css("atm-i"):pe.id(_atw.did+"_inner");var he=p.div(pe).id(_atw.did).css(ee?" atm":"").attr("onmouseover","_atw.xwa()").attr("onmouseout","if (this.className.indexOf('border')==-1) addthis_close()").style("z-index:1000000;position:absolute;display:none;visibility:hidden;top:0px;left:0px;").element;ue.appendChild(he),d.body.appendChild(ue)}_atw.xwa(),_atw.dut(a,r);var fe,me,ge;e.getElementsByTagName&&(fe=e.getElementsByTagName("img"),me=e.getElementsByTagName("span")),ge=g(e,"addthis_counter")&&me&&me[0],fe&&fe[0]?e=fe[0]:(ge||m(e,"addthis_button")&&me&&me[0])&&(e=me[0]);var ve=offLeft=void 0;if(ve="undefined"!=typeof(window.addthis_config||{}).ui_offset_top?(window.addthis_config||{}).ui_offset_top||0:_atw.conf.ui_offset_top||0,"undefined"!=typeof(window.addthis_config||{}).ui_offset_left?offLeft=(window.addthis_config||{}).ui_offset_left||0:offLeft=_atw.conf.ui_offset_left||0,_atw.sho(t,a),"more"!==t&&"bkemail"!==t&&!m(_atw.did,"mmborder")){var be=void 0!=offLeft?offLeft:_atw.conf.ui_offset_left,we=void 0!=ve?ve:_atw.conf.ui_offset_top,_e=0,xe=0,ye=w(),ke=_(),Ce=l(_atw.did)||{style:0},Me=Ce.style,Ee=_atw.conf.ui_hover_direction||0,Ae=_atw.conf.ui_compact_direction||-1,Se="bkmore"==t||m(_atw.did,"mmborder"),Ie=-1!=Ae&&1&Ae,ze=-1!=Ae&&2&Ae,Oe=-1!=Ae&&4&Ae,Te=-1!=Ae&&8&Ae;if(0===Me)return _atw.ost=!0,!1;Me.display="";var Ne=Ce.clientWidth;if(Se){var De=l("at16p");_e=ye[0]/2-Ne/2,xe=De&&""!=De.style.marginTop?De.style.marginTop:Math.max(0,ye[1]/2-222.5)+"px",xe=xe.split("px").shift()-8}else{var Re=e.getBoundingClientRect(),Pe=window.scrollY||document.documentElement.scrollTop,Le=window.scrollX||document.documentElement.scrollLeft,je=window.innerHeight||document.documentElement.clientHeight;(0===Re.height||0===Re.width)&&(Re=e.parentElement.getBoundingClientRect());var Ue=Re.top>.66*je,Be=-1!==Ee&&!Te,He=Ue&&Be;if(Oe||1===Ee||He){var Ve=Ce.getBoundingClientRect(),Fe=Ve.bottom-Ve.top;_e=Le+Re.left,xe=Pe+Re.top-Fe}else _e=Le+Re.left,xe=Pe+Re.bottom;var We=_e-ke[0]+Ne+20>ye[0];(Ie||!ze&&We)&&(_e=_e-Ne+(e.clientWidth||50))}(ge&&((e.parentNode.parentNode.parentNode.parentNode||{}).className||"").indexOf("bar_vertical")>-1||!ge&&((e.parentNode.parentNode.parentNode||{}).className||"").indexOf("bar_vertical")>-1)&&(xe+=ke[1]+(ge?16:0)),f("at15s_head","at15s_head_success");var Ge=_ate.util.parent(e,".addthis_bar"),qe=_ate.util.parent(e,".addthis_toolbox"),Ye=function(e){return window.getComputedStyle&&null!=e&&e!=document?"fixed"===window.getComputedStyle(e).position:!1};_e+=parseInt(be,10),xe+=parseInt(we,10),Me.left=_e+"px",Ye(qe)||Ye(Ge)?Me.top=xe+ke[1]+"px":Me.top=xe+"px",Me.visibility="visible"}_ate.maf.key="9",_ate.maf&&_ate.maf.sib&&(_ate.maf.sib.tabIndex="1000");try{l("at_hover").getElementsByTagName("a")[0].focus()}catch(Ke){}_atw.ost=!0},evar:function(){try{var e,t=function(e,t,n){return(void 0===e[t]||""===e[t])&&(e[t]=n),e[t]},n=S(),o=_atw.ibt();(!_atw.conf||c(_atw.conf))&&(_atw.conf=window.addthis_config||{});var i=_atw.conf.services_custom;if(_atw.share=_atw.share||window.addthis_share||{},(_ate.bro.xp||_ate.bro.mob)&&delete _atw.list.mailto,t(_atw.conf,"ui_use_vertical_menu",!0),vertical=!A.ipa&&_atw.conf.ui_use_vertical_menu,t(window,"addthis_wpl"),t(window,"addthis_caption_email",_atw.lang(O,3)),t(window,"addthis_caption",_atw.lang(O,1)),t(window,"addthis_use_addressbook",!1),t(window,"addthis_product","men-"+_atw.ver),_atw.list.settings=_atw.lang(O,47)+"...",_atw.list.more=_atw.lang(O,2),_atw.list.email=_atw.lang(O,4),_atw.list.favorites=_atw.lang(O,5),_atw.list.print=_atw.lang(O,22),t(window,"addthis_popup",!1),t(window,"addthis_popup_mode",!1),t(window,"addthis_url",""),t(window,"addthis_append_data",!n||"addthis"==n.toLowerCase()),t(window,"addthis_brand",""),t(window,"addthis_title",""),t(window,"addthis_content",""),t(window,"addthis_email_note",_atc.enote?_atc.enote:""),t(window,"addthis_email_from",""),t(window,"addthis_email_to",""),t(window,"addthis_use_personalization",!0),t(window,"addthis_options_default",z.getPopServices().split(",").slice(0,11).join(",")+",more"),t(window,"addthis_options_rank",z.getPopServices()),t(window,"addthis_options",addthis_options_default),t(window,"addthis_exclude",""),t(window,"addthis_ssh",""),t(window,"addthis_logo",""),t(window,"addthis_logo_background",""),t(window,"addthis_logo_color",""),t(window,"addthis_header_background",""),t(window,"addthis_header_color",""),t(window,"addthis_caption_share",addthis_caption),t(window,"addthis_caption_feed",_atw.lang(O,14)),t(window,"addthis_share",{}),A.ipa&&(addthis_exclude&&-1==addthis_exclude.indexOf("print")&&(addthis_exclude+=","),addthis_exclude+="print"),t(_atw.share,"type","link"),t(_atw.share,"url",addthis_url),t(_atw.share,"title",addthis_title),t(_atw.share,"description",""),t(_atw.share,"swfurl",""),t(_atw.share,"modules",{}),t(_atw.share,"screenshot",""),t(_atw.share,"author",""),t(_atw.share,"email_template",window.addthis_email_template||""),t(_atw.share,"email_vars",window.addthis_email_vars?"string"==typeof addthis_email_vars?_ate.util.fromKV(addthis_email_vars):addthis_email_vars:{}),t(_atw.conf,"ui_cobrand",addthis_brand),t(_atw.conf,"ui_disable",!1),t(_atw.conf,"ui_508_compliant",!1),t(_atw.conf,"ui_window_panes",!1),t(_atw.conf,"ui_close_control",!_atw.conf.ui_cobrand&&(_atw.conf.ui_click||_atw.ver>=200)),t(_atw.conf,"ui_click",_atw.conf.ui_window_panes),t(_atw.conf,"ui_email_note",addthis_email_note),t(_atw.conf,"ui_email_from",_ate.cookie.rck("_atfrom")||addthis_email_from||""),t(_atw.conf,"ui_email_to",addthis_email_to),t(_atw.conf,"ui_hover_direction",0),t(_atw.conf,"ui_compact_direction",-1),t(_atw.conf,"ui_delay",window.addthis_hover_delay),t(_atw.conf,"ui_header_color",addthis_header_color),t(_atw.conf,"ui_header_background",addthis_header_background),t(_atw.conf,"ui_icons",!0),t(_atw.conf,"ui_use_mailto",!1),t(_atw.conf,"ui_use_addressbook",addthis_use_addressbook||o),t(_atw.conf,"ui_use_close_control",_atw.conf.ui_close_control),t(_atw.conf,"ui_open_windows",!1),t(_atw.conf,"data_ga_tracker",null),t(_atw.conf,"data_ga_property",null),t(_atw.conf,"data_omniture_collector",""),t(_atw.conf,"pubid",window.addthis_pub),t(_atw.conf,"username",_atw.conf.pubid),t(_atw.conf,"product",addthis_product),t(_atw.conf,"data_track_clickback",addthis_append_data||_atw.conf.data_track_linkback||_ate.track.ctp(_atw.conf.product)),t(_atw.conf,"services_custom",[]),t(_atw.conf,"services_localize",O),t(_atw.conf,"services_expanded",""),t(_atw.conf,"services_compact_org",_atw.conf.services_compact),t(_atw.conf,"services_exclude",addthis_exclude),_atw.conf.services_exclude=_atw.conf.services_exclude.replace(/\s/g,""),t("_atw.conf, services_exclude_natural",_atw.conf.services_exclude),_atw.conf.parentServices&&Object.keys(_atw.conf.parentServices).forEach(function(e){_atw.conf.services_exclude+=(_atw.conf.services_exclude.length>1?",":"")+e}),_ate.dbm=1,i)for(_atw.custom_list=_atw.custom_list||{},i instanceof Array||(i=[i]),e=0;e<i.length;e++){var r=i[e];r.name&&r.icon&&r.url&&a(r.url)&&(r.code=r.url=r.url.replace(/ /g,""),0===r.code.indexOf("http")&&(r.code=r.code.substr(0===r.code.indexOf("https")?8:7)),r.code=r.code.split("?").shift().split("/").shift().toLowerCase(),_atw.custom_list[r.code]=r,_atw.list[r.code]=r.name,_atw.css[r.code]={"background-image":"url("+r.icon+")","background-repeat":"no-repeat","background-position":"top left","background-color":"transparent !important","background-size":"16px"},i[e]=r)}else i=[];var s=_ate.share.services.init(_atw.conf)||{};_atw.crs=s.crs,_atw.csl=s.csl,_atw.conf.services_compact=(s.conf||{}).services_compact,t(_atw.conf,"services_compact",addthis_options)}catch(l){window.console&&console.log("evar",l)}return!1}},_ate.menu=n(614)(),addthis.menu=_ate.menu.open,addthis.menu.close=_ate.menu.close,_ate.ao=function(e,t,n,a,o,i,r){if(e===document.body)return _ate.menu.open(e,o,i,r);if(A.iph||A.dro||A.wph)return!0;if(o&&!c(o)&&(_atw.conf=o),i&&!c(i)&&(_atw.share=i),!_atw.evar()){n&&_ate.usu(n);var s=_atw.dut(n,a);_atw.share||(_atw.share={}),n&&(_atw.share.url=s[0]),a&&(_atw.share.title=s[1]);var l=_atw.conf.ui_delay;if(l&&""===t){if(l=Math.min(500,Math.max(50,l)),_atw.xhwa(),_atw.hwa=null,"hwe"!==e)return _atw.hwe=e,void(_atw.hwa=setTimeout(function(){_ate.ao("hwe",t,n||_atw.share.url,a||_atw.share.title||"")},l));e=_atw.hwe,_atw.hwe=null}return _atw.conf.ui_window_panes===!0?_ate.as("more",_atw.conf,_atw.share):_atw.menu(e,t,n,a),_atw.sta||("more"===t?t="expanded":t||(t="compact"),_atw.sta=t,_ate.ed.fire("addthis.menu.open",window.addthis||{},{element:e,pane:t,url:n,title:a,conf:o,share:i})),!1}},_ate.ac=function(){_atw.xhwa(),clearTimeout(_atw.cwa),_atw.cwa=setTimeout(_atw.clo,_atc.cwait)},_ate.as=function(e,t,n){var a,o=E(n),i=E(t);return n=_ate.util.extend(o||{},_atw.share||{}),t=_ate.util.extend(i||{},_atw.conf||{}),a=_ate.util.extend(n,t),_ate.share.cleanly(e,a),!1};for(;_ate.plo&&_ate.plo.length>0;){var H=_ate.plo.pop(),V=H[0];switch(V){case"open":addthis_open(H[1],H[2],H[3],H[4],H[5],H[6]),_atw.plo.push(H);break;case"cout":break;case"send":var F,W;H.length>2&&(F=H[2],W=H[3]),addthis_sendto(H[1],F,W);break;case"span":var G=l(H[1]);G&&(_atw.evar(),G.innerHTML='<a href="'+_ate.share.genurl("")+"\" onmouseover=\"return addthis_open(this, 'share', '"+H[2]+"', '"+(H[3]||"").replace(/'/g,"\\'")+'\')" onmouseout="addthis_close()" onclick="return addthis_to()" class="snap_noshots"><img src="'+_atr+'static/btn/v2/lg-bookmark-en.gif" width="125" height="16" style="border:none;padding:0px" alt="AddThis" /></a>');break;case"deco":_atw.evar(),H[1](H[2],H[3],H[4],H[5]);break;case"pref":_atw.gps(H[1])}}_ate.ed.fire("addthis.menu.ready",{atw:_atw})}},613:function(e,t){"use strict";var n=[["en"],"Bookmark &amp; Share","More...","Email a Friend","Email","Favorites","Multiple emails? Use commas.","To","From","Note","Privacy Policy: We never share your personal information.","Send","Please enter a valid email address.","Message sent!","Subscribe to Feed","Select from these web-based feed readers:","Please don't ask me again; send me directly to my favorite feed reader.","Done","Get your own button!","email address","optional","255 character limit","Print","What's this?","Privacy","Use Address Book","Cancel","Sign in to use your contacts","Username","Password","Remember me","Sign In","Select address book","Error signing in.","Please limit to 5 recipients.","Find a service","No matching services.","Share again.","Sign Out","Getting contacts","Suggest a service","Share successful!","Make sharing easier with AddThis for Firefox.","Download","Don't show these","Sending message...",'We hate spam too! Please <a id="at16ecmc" href="#" onclick="_atw.rse();_atw.cef();return true" target="_blank">click here</a>  to confirm you are a real-live person.',"Settings","Sorry, we couldn't send this email. Please try again in a few minutes.","Please help us prevent spam.","Type the two words:","Please enter a valid response.","Sorry, your response was incorrect. ","Sign in to customize","Subject","Send this email with different services","Type the moving letters","Sign in and make sharing easier","Watch a video","Successfully signed in!","Closing window in XXX seconds...","Customize","Account","Send Email","Feedback","Share an idea, report a bug, or just let us know what you think.","Need help?","Send Feedback","All Available Services","My Favorite Services","Reset services to default","Add","Remove","Save Changes","Personalize AddThis by selecting up to 10 of your favorite places to share.","","","Make sharing easier with the AddThis Toolbar","To stop receiving any emails from AddThis please visit","Sent","Your feedback is very important to us.","Thanks for using AddThis.","Hi","Connect social accounts to activate Instant Share for Twitter and Facebook.","Watch the video","All accounts can be used to sign in and access the rest.","Connect another account","We'd be sorry to see you go, but you can delete your account at any time.","Delete Account","Disconnect","Re-order this list using arrows","Share","Please enter a shorter note.","We weren't able to send your email.","Ok","Oops!","Follow","Thanks for sharing","Thanks for following","Recommended for you","Share to [x]","Follow on [x]","Enter your email address","Your email address","By clicking the button above, you agree to the information above being sent to AddThis US servers.","{count, plural, one{# SHARE} other{# SHARES}}","Whois Lookup","HTML Validator","Email App","Save","Copy Link","Top Services","Load More","By sending, I affirm I am permitted to send this email."];e.exports=n}});