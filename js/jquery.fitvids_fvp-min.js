(function(d){d.fn.fitVids=function(e){var c={customSelector:null},b=document.createElement("div"),f=document.getElementsByTagName("base")[0]||document.getElementsByTagName("script")[0];b.className="fit-vids-style";b.innerHTML="&shy;<style>               .fluid-width-video-wrapper {                 width: 100%;                              position: relative;                       padding: 0;                            }                                                                                   .fluid-width-video-wrapper iframe,        .fluid-width-video-wrapper object,        .fluid-width-video-wrapper embed {           position: absolute;                       top: 0;                                   left: 0;                                  width: 100%;                              height: 100%;                          }                                       </style>";
f.parentNode.insertBefore(b,f);e&&d.extend(c,e);return this.each(function(){var b="iframe[src*='player.vimeo.com'] iframe[src*='youtube.com'] iframe[src*='youtube-nocookie.com'] iframe[src*='kickstarter.com'] iframe[src*='liveleak.com'] iframe[src*='prochan.com'] iframe[src*='dailymotion.com'] object embed video".split(" ");c.customSelector&&b.push(c.customSelector);d(this).find(b.join(",")).each(function(){var a=d(this);if(!("embed"===this.tagName.toLowerCase()&&a.parent("object").length||a.parent(".fluid-width-video-wrapper").length)){var b=
"object"===this.tagName.toLowerCase()||a.attr("height")&&!isNaN(parseInt(a.attr("height"),10))?parseInt(a.attr("height"),10):a.height(),c=!isNaN(parseInt(a.attr("width"),10))?parseInt(a.attr("width"),10):a.width(),b=b/c;a.attr("id")||(c="fitvid"+Math.floor(999999*Math.random()),a.attr("id",c));a.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",100*b+"%");a.removeAttr("height").removeAttr("width");a.closest(".video-js").removeAttr("height").removeAttr("width").removeAttr("style")}})})}})(jQuery);
jQuery(document).ready(function(d){d(".featured_video_plus").fitVids()});