!function(t){var a={};function n(e){if(a[e])return a[e].exports;var i=a[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=a,n.d=function(t,a,e){n.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,a){if(1&a&&(t=n(t)),8&a)return t;if(4&a&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var i in t)n.d(e,i,function(a){return t[a]}.bind(null,i));return e},n.n=function(t){var a=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(a,"a",a),a},n.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},n.p="",n(n.s=2)}([function(t,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=a.body=$("body:first");a.Loading=function t(){this.loading_box=$('<div class="com-loading-box">\n        <div class="com-loading-main">\n            <div class="com-loading-item"></div>\n            <div class="com-loading-item"></div>\n            <div class="com-loading-item"></div>\n        </div>\n    </div>'),t.prototype.show=function(){return this.loading_box.appendTo($(document.body)),this},t.prototype.hide=function(){return this.loading_box.fadeOut(100,function(){$(this).remove()}),this}},a.Page=function t(a){this.el=a.par||$(),this.total=a.total||0,this.total<1||(this.page_size=a.page_size||0,this.now_page=a.now_page||1,this.url=a.url||"javascript:;",this.theme=a.theme||"#424e67",this.on_change=a.on_change||function(){},this.page_len=Math.ceil(this.total/this.page_size),t.prototype.init=function(){this.el.append('<div class="com-page-box">\n                <span class="com-page-total">共 '+this.total+' 条</span>\n                <div class="com-page-ul">'+this.create_page_num()+"</div>\n            </div>\n        ")},t.prototype.create_page_num=function(){var t=this.page_len,a="",n=1===this.now_page;a+='<a href="'+(n?"javascript:;":this.url+(this.now_page-1))+'" class="com-page-prev fa fa-angle-left'+(n?" disabled":"")+'"></a>',a+='<a href="'+this.url+'1" class="com-page-num" '+(n?'style="border: 1px solid '+this.theme+"; color: "+this.theme+'"':"")+' data-page="1">1</a>',this.now_page>5?a+='<a href="'+this.url+(this.now_page-5<1?1:this.now_page-5)+'" class="com-page-li-jump__prev">\n                <i class="page-ellipsis"></i>\n                <i class="page-arrow page-arrow-left fa fa-angle-double-left" style="color: '+this.theme+';"></i>\n            </a>':this.el.find(".com-page-li-jump__prev:first").remove();var e=1,i=0;this.now_page<=5?(e=2,i=this.now_page+2):this.now_page>t-5?(e=this.now_page-2,i=t-1):(e=this.now_page-2,i=this.now_page+2);for(var o=e;o<=i&&!(o>t-1);o++)a+='<a href="'+this.url+o+'" class="com-page-num" '+(o===this.now_page?'style="border: 1px solid '+this.theme+"; color: "+this.theme+'"':"")+'  data-page="'+o+'">'+o+"</a>";this.now_page<=t-5?a+='<a href="'+this.url+(this.now_page+5>t?t:this.now_page+5)+'" class="com-page-li-jump__next">\n                <i class="page-ellipsis"></i>\n                <i class="page-arrow page-arrow-right fa fa-angle-double-right" style="color: '+this.theme+';"></i>\n            </a>':this.el.find(".com-page-li-jump__next:first").remove();var s=this.now_page===t;return 1!==t&&(a+='<a href="'+this.url+t+'" class="com-page-num" '+(s?'style="border: 1px solid '+this.theme+"; color: "+this.theme+'"':"")+' data-page="'+t+'">'+t+"</a>"),a+='<a href="'+(s?"javascript:;":this.url+(this.now_page+1))+'" class="com-page-next fa fa-angle-right'+(s?" disabled":"")+'"></a>'},t.prototype.page_listener=function(){var t=this;this.el.find(".com-page-num").on("click",function(){t.on_change()}).on("mouseover",function(){t.now_page!==$(this).data("page")&&t.Page_add_active($(this))}).on("mouseout",function(){t.now_page!==$(this).data("page")&&t.Page_remove_active($(this))}),this.el.find(".com-page-prev:first").hover(function(){1!==t.now_page&&t.Page_add_active($(this))},function(){1!==t.now_page&&t.Page_remove_active($(this))}).on("click",function(){t.on_change()}),this.el.find(".com-page-next:first").hover(function(){t.now_page!==t.page_len&&t.Page_add_active($(this))},function(){t.now_page!==t.page_len&&t.Page_remove_active($(this))}).on("click",function(){t.on_change()})},t.prototype.Page_add_active=function(t){t.css({border:"1px solid "+this.theme,color:this.theme})},t.prototype.Page_remove_active=function(t){t.css({border:"1px solid #dcdee2",color:"#000"})},this.init(),this.page_listener())},a.Tooltip=function t(a){this.el=a.el||$(),this.theme=a.theme||"dark",this.content=a.content||"默认文字",this.tooltip_dis=10,this.ani_dis=10,t.prototype.event=function(){var t=this;t.el.hover(function(){t.show()},function(){t.hide()})},t.prototype.show=function(){this.tooltip_box=$('<div class="com-tooltip-box '+this.theme+'">'+this.content+"</div>");var t=this.tooltip_box;$(document.body).append(t);var a=(this.el.width()-t.outerWidth())/2+this.el.offset().left,n=this.el.offset().top-t.outerHeight()-this.tooltip_dis;t.css({left:a,top:n-this.ani_dis}).animate({opacity:1,top:n},250)},t.prototype.hide=function(){this.tooltip_box.animate({opacity:0,top:"-="+this.ani_dis+"px"},250,function(){$(this).remove()})},this.event()},a.PageUp=function t(a){this.scroll_el=a.scroll_el||e,this.parent_el=a.parent_el||e;var n=a.styles||{},i=n.right,o=n.bottom;this.pageup_btn=$('<div class="com-page-up" style="right: '+i+"px; bottom: "+o+'px;">\n        <i class="fa fa-caret-up"></i>\n    </div>'),this.parent_el.append(this.pageup_btn),t.prototype.animateEnd=function(){this.pageup_btn.on("animationEnd webkitAnimationEnd",function(){$(this).removeClass("rubberBand animated")})},t.prototype.handler=function(){var t=this;this.pageup_btn.click(function(){t.pageup_btn.addClass("rubberBand animated"),t.scroll_el.stop().animate({scrollTop:0},300)})},this.handler(),this.animateEnd()}},function(t,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.tmp=a.imgload=a.storage=a.toZero=a.formateDate=a.banner3d=a.getParmasByHash=a.ajax=a.navData=a.app=a.host=void 0;var e=n(0),i=a.host="",o=a.app=$("#app"),s=(a.navData=[{reg:/^article\?type=technology&page=(\d+)$/,name:"technology",href:"#article?type=technology&page=1",text:"前端",target:"",icon:"fa fa-html5",element:$('<section id="article-box" class="blog-element"></section>'),handler:{ajax:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return s("/index/article/getArticleList",t)},callback:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=t.articleList;a.map(function(t){t.date=t.date.split("T")[0]});var n=doT.template(l.articleTmp());this.element.html(n(a)),new e.Page({par:this.element,total:t.total,page_size:t.page_size,now_page:parseInt(c().page),theme:"#2e97ff",url:"#article?type=technology&page=",on_change:function(){o.animate({scrollTop:0},"fast")}})}}},{reg:/^article\?type=live&page=(\d+)$/,name:"live",href:"#article?type=live&page=1",text:"生活",target:"",icon:"fa fa-coffee",element:$('<section id="live-box" class="blog-element"></section>'),handler:{ajax:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return s("/index/article/getArticleList",t)},callback:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=t.articleList;a.map(function(t){t.date=t.date.split("T")[0]});var n=doT.template(l.articleTmp());this.element.html(n(a)),new e.Page({par:this.element,total:t.total,page_size:t.page_size,now_page:parseInt(c().page),url:"#article?type=live&page=",theme:"#2e97ff",on_change:function(){o.animate({scrollTop:0},"fast")}})}}},{reg:/^comment\?&page=(\d+)$/,name:"comment",href:"#comment?&page=1",text:"留言",target:"",icon:"fa fa-comment",element:$('<section id="comment-box" class="blog-element"></section>'),handler:{ajax:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0]},callback:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0]}}},{reg:/^aboutMe$/,href:"http://resume.caodj.cn",text:"简历",target:'target="_blank"',icon:"fa fa-book",element:$('<section id="mood-box" class="blog-element"></section>'),reqUrl:"/index/article/getArticleList"},{reg:/^article\?tag=(\w+)&page=(\d+)$/,name:"articleTagList",element:$('<section id="article-tag-box" class="blog-element"></section>'),handler:{ajax:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return s("/index/article/getArticleListByTag",t)},callback:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=t.articleList;a.map(function(t){t.date=t.date.split("T")[0]});var n=doT.template(l.articleTmp());this.element.html(n(a)),new e.Page({par:this.element,total:t.total,page_size:t.page_size,now_page:parseInt(c().page),url:"#article?tag="+c().tag+"&page=",theme:"#2e97ff",on_change:function(){o.animate({scrollTop:0},"fast")}})}}},{reg:/^article\?aid=(\w+)$/,name:"articleContent",element:$('<section id="markdown-box" class="blog-element"></section>'),fns:{createCatalog:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=/<(h[1-3])><a id="(\w+)"><\/a>(.+)<\/\1>/gi,n=void 0,e="";null!==(n=a.exec(t));){e+='<div class="catalog-item catalog-'+n[1]+'" data-id="'+n[2]+'">\n                    <a href="javascript:;" class="catalog-link">'+n[3]+"</a></div>"}return{catalogStr:e,handler:function(t){var a=$(".catalog-item");a.each(function(n,e){var i=$(this).data("id");$(e).data("top",$("#"+i).position().top-30),$(e).click(function(){a.removeClass("act"),$(this).addClass("act"),t.stop().animate({scrollTop:$(this).data("top")},400)})})}}},dateFormatter:function(t){return t.split("T")[0]}},tmps:{articleMainTmp:function(){return'<div id="markdown-main" class="markdown-main com-scroll">\n                    \x3c!-- 文字标题 --\x3e\n                    <div class="markdown-title">\n                        <h1>{{=it.title}}</h1>\n                    </div>\n                    \x3c!-- 文章元信息 --\x3e\n                    <div class="markdown-meta">\n                        \x3c!-- 文章发布时间 --\x3e\n                        <time class="com-icon meta-time">\n                            <i class="com-icon__pic calendar-icon">&nbsp;</i>\n                            <span class="com-icon__text">{{=it.date}}</span>\n                        </time>\n                        \x3c!-- 文章点赞 --\x3e\n                        <a href="javascript:;" class="com-icon art-heart art-icon {{? it.is_like }} act {{?}}" data-aid="{{=it.aid}}">\n                            <i class="com-icon__pic heart-icon__pic"></i>\n                            <span class="com-icon__text heart-icon__text">喜欢(<span class="like-num">{{=it.like_count}}</span>)</span>\n                        </a>\n                        \x3c!-- 文章阅读量 --\x3e\n                        <span class="com-icon meta-like">\n                            <i class="com-icon__pic eye-icon">&nbsp;</i>\n                            <span class="com-icon__text">阅读({{=it.read_count}})</span>\n                        </span>\n                        \x3c!-- 文章标签 --\x3e\n                        <a href="#article?tag={{=it.tag_name}}&page=1" class="com-icon art-tag art-icon">\n                            <i class="com-icon__pic tag-icon" style="background-image: url('+i+'/{{=it.tag_url}})"></i>\n                            <span class="com-icon__text">{{=it.tag_name}}</span>\n                        </a>\n                    </div>\n                    \x3c!-- 文章前言 --\x3e\n                    <div class="markdown-preface">{{=it.preface}}</div>\n                    \x3c!-- 文章封面 --\x3e\n                    <div class="markdown-cover" style="background-image: url('+i+'/{{=it.cover}})"></div>\n                    \x3c!-- 文章内容 --\x3e\n                    <div class="markdown-content">{{=it.markdownHtml}}</div>\n                    \x3c!-- 评论 --\x3e\n                    '+this.commentBox()+'\n                </div>\n                \x3c!-- 目录 --\x3e\n                <div class="markdown-action com-scroll">\n                    <div class="markdown-catalog">\n                        <div class="markdown-catalog-title">\n                            <span class="markdown-catalog-item">目录</span>\n                        </div>\n                        {{=it.catalog}}\n                    </div>\n                </div>'},commentBox:function(){return'<div class="markdown-comment">\n                    <div class="comment-line">\n                        <span>评论</span>\n                    </div>\n                    \x3c!-- 发布评论框 --\x3e\n                    <div class="publish-box">\n                        \x3c!-- 用户头像 --\x3e\n                        '+this.userFace()+'\n                        <div class="ml50">\n                            \x3c!-- 公共评论输入框 --\x3e\n                            '+this.pubPublishInput()+'\n                        </div>\n                    </div>\n                    \x3c!-- 评论列表 --\x3e\n                    <div class="comment-box">\n                        \x3c!-- 评论列表项 --\x3e\n                        '+this.commentList()+"\n                    </div>\n                </div>"},userFace:function(){return'<div class="user-face"></div>'},pubPublishInput:function(){return'<div class="pub-publish-submit mt10">\n                    <div class="publish-input">\n                        <input type="text" class="com-area comment-input" placeholder="'+(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"说点啥呗~")+'">\n                    </div>\n                    <div class="publish-action clear">\n                        <button type="button" class="publish-btn com-button blue mini"> <i class="fa fa-send"></i> 评论</button>\n                    </div>\n                </div>'},pubPublishContent:function(){return'<div class="pub-publish-content">\n                    <div class="user-name">翠花</div>\n                    <div class="comment-content">我要给你生猴子！</div>\n                    <div class="comment-bar clear mt10">\n                        <div class="com-icon fl">\n                            <i class="com-icon__pic calendar-icon"></i>\n                            <span class="com-icon__text">2018-12-31</span>\n                        </div>\n                        <div class="'+(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"comment")+'-action fr">\n                            <a href="javascript:;" class="art-heart art-icon act mr20">\n                                <i class="heart-icon__pic"></i>\n                                <span class="heart-icon__text">喜欢(<span class="like-num">5</span>)</span>\n                            </a>\n                            <a href="javascript:;" class="com-icon">\n                                <i class="com-icon__pic reply-icon">&nbsp;</i>\n                                <span class="com-icon__text">回复</span>\n                            </a>\n                        </div>\n                    </div>\n                </div>'},commentList:function(){var t=this;return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[1,2,3,4,5,6,7]).reduce(function(a,n){return a+'<div class="comment-item mt20">\n                        '+t.userFace()+'\n                        <div class="ml50">\n                            '+t.pubPublishContent()+'\n                            \x3c!-- 回复block，如果有回复内容 --\x3e\n                            <div class="reply-box mt10">\n                                '+t.replyList()+"\n                            </div>\n                        </div>\n                    </div>"},"")},replyList:function(){var t=this;return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[1,2]).reduce(function(a,n){return a+'<div class="reply-item">\n                        <div class="reply-wrap">\n                            '+t.userFace()+'\n                            <div class="ml50">\n                                '+t.pubPublishContent("reply")+"\n                            </div>\n                        </div>\n                    </div>"},"")}},handler:{ajax:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return s("/index/article/getArticleCnt",t)},callback:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t.date=this.fns.dateFormatter(t.date);var a=this.fns.createCatalog(t.markdownHtml);t.catalog=a.catalogStr;var n=doT.template(this.tmps.articleMainTmp())(t);$(n).appendTo($('<div id="markdown-wrap" class="clear"></div>').appendTo(this.element)),a.handler(o)}}}],function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(function(n,e){$.ajax({type:"get",url:""+i+t,data:a,dataType:"json"}).done(function(t){0===t.c?n(t.d):(e(),alert(t.m))}).catch(function(t){alert("请求超时！服务器发生异常！")})})});a.ajax=s;var c=a.getParmasByHash=function(){var t=window.location.hash.match(/(\w+)=[^&]+/g),a={};return t&&t.length?(t.forEach(function(t){var n=t.split("=");a[n[0]]=n[1]}),a):{}},r=(a.banner3d=function(t,a){var n=t.width(),e=t.height(),i=void 0,o=void 0;(function(t){return new Promise(function(a,n){var e=new Image;e.onload=function(){a({w:e.width,h:e.height})},e.onerror=function(t){n(t)},e.src=t})})(a[0]).then(function(s){i=s.w,o=s.h;var c=void 0,r=void 0;i<n?(c=n,r=e*n/i):o<e&&(r=e,c=n*e/o),function(i,o){var s=Math.floor(n/3),c=e/5,r="";new Array(15).fill("").forEach(function(t,n){var e="";a.forEach(function(t,a){var r="";0===a&&(r="transform: rotateY(0)"),1===a&&(r="transform: rotateY(90deg)"),2===a&&(r="transform: rotateY(180deg)"),3===a&&(r="transform: rotateY(270deg)");var l=n%3*s,d=Math.floor(n/3)*c;e+='<div style="position: absolute; width: 100%; height: 100%; left: 0; top: 0; background-image: url('+t+"); background-size: "+i+"px "+o+"px; background-position: "+-l+"px "+-d+"px; transform-origin: center center -"+s/2+"px; "+r+"; animation: picture3DSwitch"+(a+1)+" 20s "+(.04*n+2)+'s infinite"></div>'}),r+='<div style="transform-style: preserve-3d; float: left; position: relative; width: '+s+"px; height: "+c+'px;">'+e+"</div>"}),t.html(r)}(c,r)}).catch(function(t){})},a.formateDate=function(t){var a=t.slice(0,t.length-5).replace("T"," "),n=parseInt(a.match(/\s(\d+)/)),e=r(n+8);return a.replace(/\s(\d+)/," "+e)},a.toZero=function(t){return t<10?"0"+t:t}),l=(a.storage={set:function(t,a){window.localStorage.setItem(t,JSON.stringify(a))},get:function(t){return JSON.parse(window.localStorage.getItem(t))}},a.imgload=function(t){return new Promise(function(a,n){var e=new Image;e.onload=function(){a(e)},e.onerror=function(t){n(t)},e.src=t})},a.tmp={navTmp:'{{~it:nav}}\n        <li class="nav-item" data-reg="{{=nav.reg}}">\n            <a href="{{=nav.href}}" class="nav-outer" {{=nav.target}}>\n                <span class="nav-inner">\n                    <i class="nav-icon {{=nav.icon}}"></i>\n                    <span class="nav-text">{{=nav.text}}</span>\n                </span>\n            </a>\n        </li>\n    {{~}}',articleTmp:function(){return'{{~it:atc}}\n            <article class="article-item">\n                <div class="art-pretty">\n                    <b class="art-dotts"></b>\n                    <time class="art-time">\n                        {{=atc.date}}\n                    </time>\n                </div>\n                <div class="art-main">\n                    <a href="#article?aid={{=atc.aid}}" class="art-wrap">\n                        <div class="art-info">\n                            <h2 class="art-title">{{=atc.title}}</h2>\n                            <h3 class="art-note" title="{{=atc.preface}}">\n                                <span>{{=atc.preface}}</span>\n                            </h3>\n                        </div>\n                        <div class="art-img" style="background-image: url('+i+'/{{=atc.cover}})"></div>\n                    </a>\n                    <div class="art-meta">\n                        <a href="javascript:;" class="art-heart art-icon{{? atc.is_like }} act {{?}} mr20" data-aid="{{=atc.aid}}">\n                            <i class="heart-icon__pic"></i>\n                            <span class="heart-icon__text">喜欢(<span class="like-num">{{=atc.like_count}}</span>)</span>\n                        </a>\n                        <a href="javascript:;" class="com-icon art-comment art-icon mr20">\n                            <i class="com-icon__pic eye-icon"></i>\n                            <span class="com-icon__text">阅读({{=atc.read_count}})</span>\n                        </a>\n                        <a href="#article?tag={{=atc.tag_name}}&page=1" class="com-icon art-tag art-icon mr20">\n                            <i class="com-icon__pic tag-icon" style="background-image: url('+i+'/{{=atc.tag_url}})"></i>\n                            <span class="com-icon__text">{{=atc.tag_name}}</span>\n                        </a>\n                    </div>\n                </div>\n            </article>\n        {{~}}'}})},function(t,a,n){"use strict";n(3),n(4),n(5),n(6),n(11),n(13)},function(t,a,n){"use strict";var e=n(0),i=n(1);(0,i.imgload)("./assets/img/WeChat-qr-code.jpg").then(function(t){var a=$(t);a.attr({width:100,alt:"微信二维码"}),new e.Tooltip({el:$("#wechat__icon"),theme:"light",content:a.prop("outerHTML")})}),(0,i.imgload)("./assets/img/QQ-qr-code.jpg").then(function(t){var a=$(t);a.attr({width:100,alt:"QQ二维码"}),new e.Tooltip({el:$("#qq__icon"),theme:"light",content:a.prop("outerHTML")})}),new e.Tooltip({el:$("#github__icon"),theme:"light",content:"github"}),new e.Tooltip({el:$("#email__icon"),theme:"light",content:"597649635@qq.com"})},function(t,a,n){"use strict";var e=n(1);!function(){for(var t=$("#hour-num"),a=$("#anchor-box"),n="",i=0;i<60;i++)n+=i%5==0?'<i class="anchor anchor-num" style="transform: rotate('+6*i+'deg);">\n                <span style="transform: rotate('+6*-i+'deg);">'+(0,e.toZero)(i)+"</span>\n            </i>":'<i class="anchor anchor-bar" style="transform: rotate('+6*i+'deg);"></i>';a.html(n);for(var o="",s=1;s<=12;s++)o+='<span class="hour-text" style="transform: rotate('+30*s+'deg);">\n            <span style="'+(s>9?"left: -9px;":"")+" transform: rotate("+30*-s+'deg);">'+s+"</span>\n        </span>";t.html(o);var c=$("#hour-hand"),r=$("#min-hand"),l=$("#sec-hand");!function t(){var a=new Date;var n=6*a.getSeconds();var e=6*a.getMinutes()+n/360*6;var i=30*(a.getHours()>11?a.getHours()-12:a.getHours())+e/360*30;c.css("transform","rotate("+i+"deg)");r.css("transform","rotate("+e+"deg)");l.css("transform","rotate("+n+"deg)");setTimeout(function(){requestAnimationFrame(t)},1e3)}()}(),function(){var t=$("#tag-box");(0,e.ajax)("/index/article/getArticleTag").then(function(){var a="";(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).forEach(function(t){a+='<a href="#article?tag='+t.tag_name+'&page=1" class="com-icon tag-item">\n                <i class="com-icon__pic eye-icon" style="background-image: url('+e.host+"/tag-icon/"+t.tag_name+')"></i>\n                <span class="com-icon__text">'+t.tag_name+"</span>\n            </a>"}),t.html(a)})}()},function(t,a,n){"use strict";var e=n(1),i=n(0),o=$("#main-box");window.onhashchange=function(t){var a=t.newURL,n=t.oldURL,e=a.split("#")[1],i=n.split("#")[1];c(e,i)},$(window).on("resize.initBg",function(){var t=void 0;t=$(window).width()>800?"large":$(window).width()>600?"medium":"small",(0,e.banner3d)($("#intrude-bg"),[e.host+"/bg/"+t+"/bg1.jpg",e.host+"/bg/"+t+"/bg2.jpg",e.host+"/bg/"+t+"/bg3.jpg",e.host+"/bg/"+t+"/bg4.jpg"])}),setTimeout(function(){$(window).trigger("resize.initBg")},0),function(){function t(t,a,n,e,i){var o=e/2.5;t.beginPath();for(var s=0;s<5;s++)t.lineTo(Math.cos((18+72*s)/180*Math.PI)*e+a,-Math.sin((18+72*s)/180*Math.PI)*e+n),t.lineTo(Math.cos((54+72*s)/180*Math.PI)*o+a,-Math.sin((54+72*s)/180*Math.PI)*o+n);t.closePath(),t.fillStyle=i,t.fill()}var a=$("#canvasBg"),n=a[0].getContext("2d"),e="#6eaaff",i=[],o=$(window),s=Math.floor(o.width()/60);function c(){return Math.random()}s=s<10?10:s,a.attr({width:o.width(),height:o.height()}),function(){n.clearRect(0,0,a.attr("width"),a.attr("height"));for(var t=0;t<s;t++){var e=c()*a.attr("width");i.push({x:e,startX:e,y:c()*a.attr("height"),speedY:1,r:8*c()+8,xNum:0,range:40*c()})}}(),function c(){n.clearRect(0,0,a.attr("width"),a.attr("height"));for(var r=0;r<s;r++)i[r].y+=i[r].speedY,i[r].y>=o.height()&&(i[r].y=-i[r].r),i[r].xNum--,-360===i[r].xNum&&(i[r].xNum=0),i[r].x=i[r].startX-i[r].range*Math.sin(Math.PI/180*i[r].xNum),t(n,i[r].x,i[r].y,i[r].r,e);setTimeout(function(){requestAnimationFrame(c)},20)}()}();var s=null,c=function(t,a){var n=-1,c=-1;e.navData.forEach(function(e,i){e.reg.test(t)&&(n=i),e.reg.test(a)&&(c=i)}),n>-1?(s&&s.hide(),s=new i.Loading(o).show(),e.navData[n].handler.ajax.call(e.navData[n],(0,e.getParmasByHash)()).then(function(a){s.hide(),e.navData[n]!==e.navData[c]&&function(t,a){return new Promise(function(n){a.off("animationend webkitAnimationEnd").on("animationend webkitAnimationEnd",function(){$(this).off("animationend webkitAnimationEnd").empty().detach(),n()}),o.append(t),a.removeClass("enter").addClass("leave"),t.off("animationend webkitAnimationEnd").removeClass("leave").addClass("enter")})}(e.navData[n].element,e.navData[c]?e.navData[c].element:$()).then(function(){var a=e.storage.get("scrollTop")||{},n=a[t]?a[t]:0;e.app.animate({scrollTop:n},300)}),e.navData[n].handler.callback.call(e.navData[n],a)})):window.location.hash=e.navData[0].href};c(window.location.hash.substr(1)),$("#head-portrait").addClass("zoomInDown animated"),$("#intrude-info").addClass("bounceInLeft animated"),function(){var t=$("#nav-list"),a=doT.template(e.tmp.navTmp),n=e.navData.filter(function(t){return t.text});t.html(a(n));var i=$(".nav-item"),o=window.location.hash.substr(1);i.each(function(t,a){var n=$(a).data("reg").replace(/\//g,"");new RegExp(n).test(o)&&$(a).addClass("act")}),i.on("click",function(){$(this).addClass("act").siblings().removeClass("act")})}(),function(){var t=!0;o.delegate(".art-heart","click",function(){var a=this;if(t){t=!1;var n=$(this).data("aid");(0,e.ajax)("/index/article/givealike",{aid:n}).then(function(n){$(a).toggleClass("act"),$(a).find(".like-num:first").text(n),t=!0})}})}(),new i.PageUp({scroll_el:e.app}),function(){var t=null;e.app.on("scroll",function(){clearTimeout(t),t=setTimeout(function(){var t=e.storage.get("scrollTop")||{},a=window.location.hash;t[a=a.substr(1,a.length)]=e.app.scrollTop(),e.storage.set("scrollTop",t)},200)})}()},function(t,a){},,,,,function(t,a){},,function(t,a){}]);