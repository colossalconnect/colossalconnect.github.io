! function (e) {
   var t = {
      topSpacing: 0,
      bottomSpacing: 0,
      className: "is-menu",
      wrapperClassName: "colossal-wrapper"
   }, i = e(window),
      n = e(document),
      a = [],
      o = i.height(),
      r = function () {
         for (var e = i.scrollTop(),
               t = n.height(), r =
               t - o, s = e > r ?
               r - e : 0, l = 0; l <
            a.length; l++) {
            var p = a[l],
               c = p.stickyWrapper
                  .offset()
                  .top,
               d = c - p.topSpacing -
                  s;
       /*     if (d >= e) null !== p.currentTop &&
               (p.stickyElement.css(
                  "position", "")
               .css("top", "")
               .removeClass(
                  p.className), p
               .stickyElement.parent()
               .removeClass(p.className),
               p.currentTop = null
            );
            else {*/
               var u = t - p.stickyElement
                  .outerHeight() -
                  p.topSpacing -
                  p.bottomSpacing -
                  e - s;
               0 > u ? u += p.topSpacing :
                  u = p.topSpacing,
               p.currentTop !=
                  u && (p.stickyElement
                     .css(
                        "position",
                        "fixed"
                     )
                     .css("top",
                        u)
                     .addClass(
                        p.className
                     ), p.stickyElement
                     .parent()
                     .addClass(
                        p.className
                     ), p.currentTop =
                     u)
            //}
         }
      }, s = function () {
         o = i.height()
      }, l = {
         init: function (i) {
            var n = e.extend(t, i);
            return this.each(
               function () {
                  var t = e(this);
                  stickyId = t.attr(
                     "id"),
                  wrapper = e(
                     "<div></div>"
                  )
                     .attr("id",
                        stickyId +
                        "-sticky-wrapper"
                  )
                     .addClass(n.wrapperClassName),
                  t.wrapAll(
                     wrapper
                  );
                  var i = t.parent();
                  i.css("height",
                     t.outerHeight()
                  ), a.push({
                     topSpacing: n
                        .topSpacing,
                     bottomSpacing: n
                        .bottomSpacing,
                     stickyElement: t,
                     currentTop: null,
                     stickyWrapper: i,
                     className: n
                        .className
                  })
               })
         },
         update: r
      };
   window.addEventListener ? (window.addEventListener(
      "scroll", r, !1), window.addEventListener(
      "resize", s, !1)) : window.attachEvent &&
      (window.attachEvent("onscroll",
      r), window.attachEvent(
      "onresize", s)), e.fn.sticky =
      function (t) {
         return l[t] ? l[t].apply(
            this, Array.prototype.slice
            .call(arguments, 1)) :
            "object" != typeof t &&
            t ? (e.error("Method " +
               t +
               " does not exist on jQuery.sticky"
            ), void 0) : l.init.apply(
               this, arguments)
   }, e(function () {
      setTimeout(r, 0)
   })
}(jQuery), $(document)
   .ready(function () {
      function e() {
         var e = n.height(),
            t = $("#nav")
               .height() /
               2,
            i = e / 2,
            a = i - t;
         $("#nav")
            .css({
               top: a
            })
      }

      function t(e, t, i, n, a) {
         return e + "% " + -(t + i -
            n) * a + "px"
      }

      function i() {
         var e = n.scrollTop();
         a.hasClass("inview") && (a.css({
            backgroundPosition: t(
               0, u, e,
               500, 0)
         }), o.css({
            backgroundPosition: t(
               0, u, e,
               500, 0)
         })), r.hasClass("inview") &&
            (r.css({
            backgroundPosition: t(
               0, u, e,
               1550, 0)
         }), s.css({
            backgroundPosition: t(
               70, u, e,
               2010, .2)
         })), l.hasClass("inview") &&
            (l.css({
            backgroundPosition: t(
               0, u, e,
               500, 0)
         }), p.css({
            backgroundPosition: t(
               50, u, e, -
               1500, .2)
         })), c.hasClass("inview") &&
            (c.css({
            backgroundPosition: t(
               0, u, e,
               2550, 0)
         }), d.css({
            backgroundPosition: t(
               70, u, e,
               1050, .2)
         })), $("#pixels")
            .html(e)
      }
      var n = $(window),
         a = $("#intro"),
         o = $("#intro .bg1"),
         r = $("#separator1"),
         s = $("#separator1 .bg2"),
         l = $("#separator2"),
         p = $("#separator2 .bg3"),
         c = $("#separator3"),
         d = $("#separator3 .bg4"),
         u = n.height();
      $(
         "#intro, #separator1, #separator2, #separator3"
      )
         .bind("inview", function (e, t) {
            1 == t ? ("intro" == $(
                  this)
               .attr("id") &&
               $(
                  "#headerplaceholder"
               )
               .show(), $(this)
               .addClass(
                  "inview")) : ($(
                  this)
               .removeClass(
                  "inview"),
               "intro" == $(this)
               .attr(
                  "id") && $(
                  "#headerplaceholder"
               )
               .hide())
         }), e(), n.resize(function () {
            i(), e()
         }), n.bind("scroll", function () {
            i()
         })
   }),
function (e) {
   function t() {
      var t = window.innerHeight,
         i = document.compatMode;
      return (i || !e.support.boxModel) &&
         (t = "CSS1Compat" == i ?
         document.documentElement.clientHeight :
         document.body.clientHeight),
      t
   }
   e(window)
      .scroll(function () {
         var i = t(),
            n = document.documentElement
               .scrollTop ?
               document.documentElement
               .scrollTop :
               document.body.scrollTop,
            a = [];
         e.each(e.cache, function () {
            this.events && this
               .events.inview &&
               a.push(this.handle
                  .elem)
         }), a.length && e(a)
            .each(
               function () {
                  var t = e(this),
                     a = t.offset()
                        .top,
                     o = t.height(),
                     r = t.data(
                        "inview") || !
                        1;
                  n > a + o || a > n +
                     i ? r && (t.data(
                        "inview", !
                        1), t.trigger(
                        "inview", [!
              1
            ])) : a + o >
                     n && (r || (t.data(
                           "inview", !
                           0),
                        t.trigger(
                           "inview", [!
                0
              ])))
               })
      }), e(function () {
         e(window)
            .scroll()
      })
}(jQuery), $(document)
   .ready(function () {
      var e = navigator.userAgent.toLowerCase(),
         t = e.match(
            /(iphone|ipod|ipad)/);
      $("a[href*=#]")
         .on("click",
            function (e) {
               var i = $(this.hash)
                  .offset();
               if (i) var n = i.top;
               if (i && n && e.preventDefault(),
                  parseInt(n) !==
                  parseInt($(window)
                     .scrollTop())
               ) {
                  var a = $("nav");
                  t && a.hide(), $(
                     "html,body")
                     .animate({
                           scrollTop: n
                        }, 1e3, "swing",
                        function () {
                           if (t) {
                              0 == n ?
                                 a.css({
                                    position: "absolute",
                                    top: $(
                                       "#intro"
                                    )
                                       .height()
                                 }) :
                                 a.css({
                                    position: "absolute",
                                    top: n
                                 });
                              var e =
                                 $(
                                    "nav"
                              );
                              e.show()
                           }
                        })
               }
            }), t && $(document)
         .bind(
            "touchmove", function () {
               var e = $("#intro"),
                  t = $("nav");
               console.log(t.position()
                  .top), e.height() !=
                  t.position()
                  .top ?
                  (t.css({
                  position: "fixed",
                  top: "0px"
               }), console.log(t.position()
                  .top)) : t.css({
                     position: "relative",
                     top: ""
                  })
            })
   }),
function (e) {
   e.flexslider = function (t, i) {
      var n = e(t),
         a = e.extend({}, e.flexslider.defaults,
            i),
         o = a.namespace,
         r = "ontouchstart" in
            window || window.DocumentTouch &&
            document instanceof DocumentTouch,
         s = r ? "touchend" :
            "click",
         l = "vertical" === a.direction,
         p = a.reverse,
         c = a.itemWidth > 0,
         d = "fade" === a.animation,
         u = "" !== a.asNavFor,
         h = {};
      e.data(t, "flexslider", n), h = {
         init: function () {
            n.animating = !1, n.currentSlide =
               a.startAt, n.animatingTo =
               n.currentSlide, n.atEnd =
               0 === n.currentSlide ||
               n.currentSlide ===
               n.last, n.containerSelector =
               a.selector.substr(0,
                  a.selector.search(
                     " ")), n.slides =
               e(a.selector, n), n
               .container = e(n.containerSelector,
                  n), n.count = n
               .slides.length, n.syncExists =
               e(a.sync)
               .length >
               0, "slide" === a.animation &&
               (a.animation =
               "swing"), n.prop =
               l ? "top" :
               "marginLeft", n.args = {},
            n.manualPause = !1,
            n.transitions = !a.video && !
               d && a.useCSS &&
               function () {
                  var e =
                     document.createElement(
                        "div"),
                     t = [
                "perspectiveProperty",
                "WebkitPerspective",
                "MozPerspective",
                "OPerspective",
                "msPerspective"
              ];
                  for (var i in t)
                     if (void 0 !==
                        e.style[
                           t[i]
                           ])
                        return n
                           .pfx =
                           t[i]
                           .replace(
                              "Perspective",
                              ""
                        )
                           .toLowerCase(),
                  n.prop =
                     "-" +
                     n.pfx +
                     "-transform", !
                     0;
                  return !1
            }(), "" !== a.controlsContainer &&
               (n.controlsContainer =
               e(a.controlsContainer)
               .length > 0 && e(a.controlsContainer)
            ), "" !== a.manualControls &&
               (n.manualControls =
               e(a.manualControls)
               .length > 0 && e(a.manualControls)
            ), a.randomize && (n.slides
               .sort(function () {
                  return Math
                     .round(
                        Math
                        .random()
                  ) - .5
               }), n.container.empty()
               .append(n.slides)),
            n.doMath(), u && h.asNav
               .setup(), n.setup(
                  "init"), a.controlNav &&
               h.controlNav.setup(),
            a.directionNav && h
               .directionNav.setup(),
            a.keyboard && (1 ===
               e(n.containerSelector)
               .length || a.multipleKeyboard
            ) && e(document)
               .bind(
                  "keyup", function (
                     e) {
                     var t = e.keyCode;
                     if (!n.animating &&
                        (39 === t ||
                           37 ===
                           t)) {
                        var i = 39 ===
                           t ? n.getTarget(
                              "next"
                        ) : 37 ===
                           t ? n.getTarget(
                              "prev"
                        ) : !1;
                        n.flexAnimate(
                           i, a.pauseOnAction
                        )
                     }
                  }), a.mousewheel &&
               n.bind("mousewheel",
                  function (e, t) {
                     e.preventDefault();
                     var i = 0 >
                        t ? n.getTarget(
                           "next"
                     ) : n.getTarget(
                        "prev");
                     n.flexAnimate(
                        i, a.pauseOnAction
                     )
                  }), a.pausePlay &&
               h.pausePlay.setup(),
            a.slideshow && (a.pauseOnHover &&
               n.hover(
                  function () {
                     n.manualPlay ||
                        n.manualPause ||
                        n.pause()
                  }, function () {
                     n.manualPause ||
                        n.manualPlay ||
                        n.play()
                  }), a.initDelay >
               0 ? setTimeout(
                  n.play, a.initDelay
               ) : n.play()),
            r && a.touch && h.touch(), (!
               d || d && a.smoothHeight
            ) && e(window)
               .bind(
                  "resize focus", h.resize
            ), setTimeout(function () {
               a.start(n)
            }, 200)
         },
         asNav: {
            setup: function () {
               n.asNav = !0, n.animatingTo =
                  Math.floor(n.currentSlide /
                     n.move), n.currentItem =
                  n.currentSlide,
               n.slides.removeClass(
                  o +
                  "active-slide"
               )
                  .eq(n.currentItem)
                  .addClass(o +
                     "active-slide"
               ), n.slides.click(
                  function (t) {
                     t.preventDefault();
                     var i = e(
                        this),
                        o = i.index();
                     e(a.asNavFor)
                        .data(
                           "flexslider"
                     )
                        .animating ||
                        i.hasClass(
                           "active"
                     ) || (n.direction =
                        n.currentItem <
                        o ?
                        "next" :
                        "prev",
                        n.flexAnimate(
                           o,
                           a.pauseOnAction, !
                           1, !
                           0, !
                           0))
                  })
            }
         },
         controlNav: {
            setup: function () {
               n.manualControls ?
                  h.controlNav.setupManual() :
                  h.controlNav.setupPaging()
            },
            setupPaging: function () {
               var t, i =
                     "thumbnails" ===
                     a.controlNav ?
                     "control-thumbs" :
                     "control-paging",
                  l = 1;
               if (n.controlNavScaffold =
                  e('<ol class="' +
                     o +
                     "control-nav " +
                     o + i +
                     '"></ol>'),
                  n.pagingCount >
                  1)
                  for (var p = 0; p <
                     n.pagingCount; p++
                  ) t =
                     "thumbnails" ===
                     a.controlNav ?
                     '<img src="' +
                     n.slides.eq(
                        p)
                     .attr(
                        "data-thumb"
                  ) + '"/>' :
                     "<a>" + l +
                     "</a>", n.controlNavScaffold
                     .append(
                        "<li>" +
                        t +
                        "</li>"
                  ), l++;
               n.controlsContainer ?
                  e(n.controlsContainer)
                  .append(n.controlNavScaffold) :
                  n.append(n.controlNavScaffold),
               h.controlNav.set(),
               h.controlNav.active(),
               n.controlNavScaffold
                  .delegate(
                     "a, img", s,
                     function (t) {
                        t.preventDefault();
                        var i =
                           e(
                              this
                        ),
                           r =
                              n
                              .controlNav
                              .index(
                                 i
                           );
                        i.hasClass(
                           o +
                           "active"
                        ) || (n
                           .direction =
                           r >
                           n.currentSlide ?
                           "next" :
                           "prev",
                           n.flexAnimate(
                              r,
                              a
                              .pauseOnAction
                           ))
                     }), r && n.controlNavScaffold
                  .delegate("a",
                     "click touchstart",
                     function (e) {
                        e.preventDefault()
                     })
            },
            setupManual: function () {
               n.controlNav = n.manualControls,
               h.controlNav.active(),
               n.controlNav.live(
                  s, function (
                     t) {
                     t.preventDefault();
                     var i =
                        e(
                           this
                     ),
                        r =
                           n
                           .controlNav
                           .index(
                              i
                        );
                     i.hasClass(
                        o +
                        "active"
                     ) || (n
                        .direction =
                        r >
                        n.currentSlide ?
                        "next" :
                        "prev",
                        n.flexAnimate(
                           r,
                           a
                           .pauseOnAction
                        ))
                  }), r && n.controlNav
                  .live(
                     "click touchstart",
                     function (e) {
                        e.preventDefault()
                     })
            },
            set: function () {
               var t =
                  "thumbnails" ===
                  a.controlNav ?
                  "img" : "a";
               n.controlNav = e(
                  "." + o +
                  "control-nav li " +
                  t, n.controlsContainer ?
                  n.controlsContainer :
                  n)
            },
            active: function () {
               n.controlNav.removeClass(
                  o + "active")
                  .eq(
                     n.animatingTo)
                  .addClass(
                     o + "active")
            },
            update: function (t, i) {
               n.pagingCount > 1 &&
                  "add" === t ? n
                  .controlNavScaffold
                  .append(e(
                     "<li><a>" +
                     n.count +
                     "</a></li>"
                  )) : 1 === n.pagingCount ?
                  n.controlNavScaffold
                  .find("li")
                  .remove() :
                  n.controlNav.eq(
                     i)
                  .closest(
                     "li")
                  .remove(),
               h.controlNav.set(),
               n.pagingCount >
                  1 && n.pagingCount !==
                  n.controlNav.length ?
                  n.update(i, t) :
                  h.controlNav.active()
            }
         },
         directionNav: {
            setup: function () {
               var t = e(
                  '<ul class="' +
                  o +
                  'direction-nav"><li><a class="' +
                  o +
                  'prev" href="#">' +
                  a.prevText +
                  '</a></li><li><a class="' +
                  o +
                  'next" href="#">' +
                  a.nextText +
                  "</a></li></ul>"
               );
               n.controlsContainer ?
                  (e(n.controlsContainer)
                  .append(t), n.directionNav =
                  e("." + o +
                     "direction-nav li a",
                     n.controlsContainer
                  )) : (n.append(
                     t), n.directionNav =
                  e("." + o +
                     "direction-nav li a",
                     n)), h.directionNav
                  .update(), n.directionNav
                  .bind(s,
                     function (t) {
                        t.preventDefault();
                        var i =
                           e(
                              this
                        )
                           .hasClass(
                              o +
                              "next"
                        ) ? n.getTarget(
                           "next"
                        ) : n.getTarget(
                           "prev"
                        );
                        n.flexAnimate(
                           i,
                           a.pauseOnAction
                        )
                     }), r && n.directionNav
                  .bind(
                     "click touchstart",
                     function (e) {
                        e.preventDefault()
                     })
            },
            update: function () {
               var e = o +
                  "disabled";
               1 === n.pagingCount ?
                  n.directionNav.addClass(
                     e) : a.animationLoop ?
                  n.directionNav.removeClass(
                     e) : 0 ===
                  n.animatingTo ?
                  n.directionNav.removeClass(
                     e)
                  .filter(
                     "." + o +
                     "prev")
                  .addClass(
                     e) : n.animatingTo ===
                  n.last ? n.directionNav
                  .removeClass(e)
                  .filter("." + o +
                     "next")
                  .addClass(
                     e) : n.directionNav
                  .removeClass(e)
            }
         },
         pausePlay: {
            setup: function () {
               var t = e(
                  '<div class="' +
                  o +
                  'pauseplay"><a></a></div>'
               );
               n.controlsContainer ?
                  (n.controlsContainer
                  .append(t), n.pausePlay =
                  e("." + o +
                     "pauseplay a",
                     n.controlsContainer
                  )) : (n.append(
                     t), n.pausePlay =
                  e("." + o +
                     "pauseplay a",
                     n)), h.pausePlay
                  .update(a.slideshow ?
                     o + "pause" :
                     o + "play"),
               n.pausePlay.bind(
                  s, function (
                     t) {
                     t.preventDefault(),
                     e(
                        this
                     )
                        .hasClass(
                           o +
                           "pause"
                     ) ? (n.manualPause = !
                        0,
                        n.manualPlay = !
                        1,
                        n.pause()
                     ) : (n.manualPause = !
                        1,
                        n.manualPlay = !
                        0,
                        n.play()
                     )
                  }), r && n.pausePlay
                  .bind(
                     "click touchstart",
                     function (e) {
                        e.preventDefault()
                     })
            },
            update: function (e) {
               "play" === e ? n.pausePlay
                  .removeClass(o +
                     "pause")
                  .addClass(
                     o + "play")
                  .text(a.playText) :
                  n.pausePlay.removeClass(
                     o + "play")
                  .addClass(o +
                     "pause")
                  .text(
                     a.pauseText
               )
            }
         },
         touch: function () {
            function e(e) {
               n.animating ? e.preventDefault() :
                  1 === e.touches
                  .length && (n.pause(),
                     h = l ? n.h :
                     n.w, f =
                     Number(new Date),
                     u = c && p &&
                     n.animatingTo ===
                     n.last ? 0 :
                     c && p ? n.limit -
                     (n.itemW +
                        a.itemMargin
                     ) * n.move *
                     n.animatingTo :
                     c && n.currentSlide ===
                     n.last ? n.limit :
                     c ? (n.itemW +
                        a.itemMargin
                     ) * n.move *
                     n.currentSlide :
                     p ? (n.last -
                        n.currentSlide +
                        n.cloneOffset
                     ) * h : (n.currentSlide +
                        n.cloneOffset
                     ) * h, r =
                     l ? e.touches[
                        0].pageY :
                     e.touches[0]
                     .pageX, s =
                     l ? e.touches[
                        0].pageX :
                     e.touches[0]
                     .pageY, t.addEventListener(
                        "touchmove",
                        i, !1),
                     t.addEventListener(
                        "touchend",
                        o, !1))
            }

            function i(e) {
               m = l ? r - e.touches[
                  0].pageY : r -
                  e.touches[0].pageX,
               g = l ? Math.abs(
                  m) < Math.abs(
                  e.touches[0]
                  .pageX - s) :
                  Math.abs(m) <
                  Math.abs(e.touches[
                        0].pageY -
                     s), (!g ||
                     Number(new Date) -
                     f > 500) &&
                  (e.preventDefault(), !
                  d && n.transitions &&
                  (a.animationLoop ||
                     (m /= 0 ===
                        n.currentSlide &&
                        0 > m ||
                        n.currentSlide ===
                        n.last &&
                        m > 0 ?
                        Math.abs(
                           m) /
                        h + 2 :
                        1), n.setProps(
                        u + m,
                        "setTouch"
                     )))
            }

            function o() {
               if (n.animatingTo ===
                  n.currentSlide && !
                  g && null !== m
               ) {
                  var e = p ? -m :
                     m,
                     l = e > 0 ?
                        n.getTarget(
                           "next"
                     ) : n.getTarget(
                        "prev");
                  n.canAdvance(l) &&
                     (Number(new Date) -
                     f < 550 &&
                     Math.abs(e) >
                     50 || Math.abs(
                        e) > h /
                     2) ? n.flexAnimate(
                     l, a.pauseOnAction
                  ) : n.flexAnimate(
                     n.currentSlide,
                     a.pauseOnAction, !
                     0)
               }
               t.removeEventListener(
                  "touchmove", i, !
                  1), t.removeEventListener(
                  "touchend", o, !
                  1), r = null, s =
                  null, m = null,
               u = null
            }
            var r, s, u, h, m, f, g = !
                  1;
            t.addEventListener(
               "touchstart", e, !1
            )
         },
         resize: function () {
            !n.animating && n.is(
               ":visible") && (c ||
               n.doMath(), d ? h.smoothHeight() :
               c ? (n.slides.width(
                     n.computedW
                  ), n.update(n.pagingCount),
                  n.setProps()) :
               l ? (n.viewport.height(
                  n.h), n.setProps(
                  n.h,
                  "setTotal")) :
               (a.smoothHeight &&
                  h.smoothHeight(),
                  n.newSlides.width(
                     n.computedW
                  ), n.setProps(n
                     .computedW,
                     "setTotal")
               ))
         },
         smoothHeight: function (e) {
            if (!l || d) {
               var t = d ? n : n.viewport;
               e ? t.animate({
                  height: n.slides
                     .eq(n.animatingTo)
                     .height()
               }, e) : t.height(n.slides
                  .eq(n.animatingTo)
                  .height())
            }
         },
         sync: function (t) {
            var i = e(a.sync)
               .data(
                  "flexslider"),
               o = n.animatingTo;
            switch (t) {
            case "animate":
               i.flexAnimate(o, a.pauseOnAction, !
                  1, !0);
               break;
            case "play":
               i.playing || i.asNav ||
                  i.play();
               break;
            case "pause":
               i.pause()
            }
         }
      }, n.flexAnimate = function (t,
         i, r, s, m) {
         if (u && 1 === n.pagingCount &&
            (n.direction = n.currentItem <
               t ? "next" : "prev"
            ), !n.animating && (n.canAdvance(
               t, m) || r) && n.is(
               ":visible")) {
            if (u && s) {
               var f = e(a.asNavFor)
                  .data(
                     "flexslider"
               );
               if (n.atEnd = 0 ===
                  t || t === n.count -
                  1, f.flexAnimate(
                     t, !0, !1, !
                     0, m), n.direction =
                  n.currentItem <
                  t ? "next" :
                  "prev", f.direction =
                  n.direction,
                  Math.ceil((t +
                     1) / n.visible) -
                  1 === n.currentSlide ||
                  0 === t) return n
                  .currentItem =
                  t, n.slides.removeClass(
                     o +
                     "active-slide"
               )
                  .eq(t)
                  .addClass(o +
                     "active-slide"), !
                  1;
               n.currentItem = t,
               n.slides.removeClass(
                  o +
                  "active-slide"
               )
                  .eq(t)
                  .addClass(o +
                     "active-slide"),
               t = Math.floor(
                  t / n.visible
               )
            }
            if (n.animating = !0, n
               .animatingTo = t, a
               .before(n), i && n.pause(),
               n.syncExists && !m &&
               h.sync("animate"),
               a.controlNav && h.controlNav
               .active(), c || n.slides
               .removeClass(o +
                  "active-slide")
               .eq(t)
               .addClass(o +
                  "active-slide"),
               n.atEnd = 0 === t ||
               t === n.last, a.directionNav &&
               h.directionNav.update(),
               t === n.last && (a.end(
                     n), a.animationLoop ||
                  n.pause()), d) n
               .slides.eq(n.currentSlide)
               .fadeOut(a.animationSpeed,
                  a.easing), n.slides
               .eq(t)
               .fadeIn(a.animationSpeed,
                  a.easing, n.wrapup
            );
            else {
               var g, v, _, y = l ?
                     n.slides.filter(
                        ":first"
                  )
                     .height() : n.computedW;
               c ? (g = a.itemWidth >
                  n.w ? 2 * a.itemMargin :
                  a.itemMargin, _ =
                  (n.itemW + g) *
                  n.move * n.animatingTo,
                  v = _ > n.limit &&
                  1 !== n.visible ?
                  n.limit : _) :
                  v = 0 === n.currentSlide &&
                  t === n.count -
                  1 && a.animationLoop &&
                  "next" !== n.direction ?
                  p ? (n.count +
                     n.cloneOffset
               ) * y : 0 : n.currentSlide ===
                  n.last && 0 ===
                  t && a.animationLoop &&
                  "prev" !== n.direction ?
                  p ? 0 : (n.count +
                     1) * y : p ?
                  (n.count - 1 -
                  t + n.cloneOffset
               ) * y : (t + n.cloneOffset) *
                  y, n.setProps(v,
                     "", a.animationSpeed
               ), n.transitions ?
                  (a.animationLoop &&
                  n.atEnd || (n.animating = !
                     1, n.currentSlide =
                     n.animatingTo
                  ), n.container.unbind(
                     "webkitTransitionEnd transitionend"
                  ), n.container.bind(
                     "webkitTransitionEnd transitionend",
                     function () {
                        n.wrapup(
                           y)
                     })) : n.container
                  .animate(n.args,
                     a.animationSpeed,
                     a.easing,
                     function () {
                        n.wrapup(
                           y)
                     })
            }
            a.smoothHeight && h.smoothHeight(
               a.animationSpeed)
         }
      }, n.wrapup = function (e) {
         d || c || (0 === n.currentSlide &&
            n.animatingTo === n.last &&
            a.animationLoop ? n.setProps(
               e, "jumpEnd") : n.currentSlide ===
            n.last && 0 === n.animatingTo &&
            a.animationLoop && n.setProps(
               e, "jumpStart")), n
            .animating = !1, n.currentSlide =
            n.animatingTo, a.after(
               n)
      }, n.animateSlides = function () {
         n.animating || n.flexAnimate(
            n.getTarget("next"))
      }, n.pause = function () {
         clearInterval(n.animatedSlides),
         n.playing = !1, a.pausePlay &&
            h.pausePlay.update(
               "play"), n.syncExists &&
            h.sync("pause")
      }, n.play = function () {
         n.animatedSlides =
            setInterval(n.animateSlides,
               a.slideshowSpeed),
         n.playing = !0, a.pausePlay &&
            h.pausePlay.update(
               "pause"), n.syncExists &&
            h.sync("play")
      }, n.canAdvance = function (e,
         t) {
         var i = u ? n.pagingCount -
            1 : n.last;
         return t ? !0 : u && n.currentItem ===
            n.count - 1 && 0 === e &&
            "prev" === n.direction ? !
            0 : u && 0 === n.currentItem &&
            e === n.pagingCount - 1 &&
            "next" !== n.direction ? !
            1 : e !== n.currentSlide ||
            u ? a.animationLoop ? !
            0 : n.atEnd && 0 === n.currentSlide &&
            e === i && "next" !== n
            .direction ? !1 : n.atEnd &&
            n.currentSlide === i &&
            0 === e && "next" === n
            .direction ? !1 : !0 : !
            1
      }, n.getTarget = function (e) {
         return n.direction = e,
            "next" === e ? n.currentSlide ===
            n.last ? 0 : n.currentSlide +
            1 : 0 === n.currentSlide ?
            n.last : n.currentSlide -
            1
      }, n.setProps = function (e, t,
         i) {
         var o = function () {
            var i = e ? e : (n.itemW +
               a.itemMargin) * n.move *
               n.animatingTo,
               o = function () {
                  if (c) return "setTouch" ===
                     t ? e : p &&
                     n.animatingTo ===
                     n.last ? 0 :
                     p ? n.limit -
                     (n.itemW +
                     a.itemMargin
                  ) * n.move * n.animatingTo :
                     n.animatingTo ===
                     n.last ? n.limit :
                     i;
                  switch (t) {
                  case "setTotal":
                     return p ?
                        (n.count -
                        1 - n.currentSlide +
                        n.cloneOffset
                     ) * e : (n.currentSlide +
                        n.cloneOffset
                     ) * e;
                  case "setTouch":
                     return p ?
                        e : e;
                  case "jumpEnd":
                     return p ?
                        e : n.count *
                        e;
                  case "jumpStart":
                     return p ?
                        n.count *
                        e : e;
                  default:
                     return e
                  }
               }();
            return -1 * o + "px"
         }();
         n.transitions && (o = l ?
            "translate3d(0," + o +
            ",0)" : "translate3d(" +
            o + ",0,0)", i = void 0 !==
            i ? i / 1e3 + "s" :
            "0s", n.container.css(
               "-" + n.pfx +
               "-transition-duration",
               i)), n.args[n.prop] =
            o, (n.transitions ||
               void 0 === i) && n.container
            .css(n.args)
      }, n.setup = function (t) {
         if (d) n.slides.css({
            width: "100%",
            "float": "left",
            marginRight: "-100%",
            position: "relative"
         }), "init" === t && n.slides
            .eq(n.currentSlide)
            .fadeIn(
               a.animationSpeed, a
               .easing), a.smoothHeight &&
            h.smoothHeight();
         else {
            var i, r;
            "init" === t && (n.viewport =
               e('<div class="' +
                  o +
                  'viewport"></div>'
               )
               .css({
                  overflow: "hidden",
                  position: "relative"
               })
               .appendTo(n)
               .append(
                  n.container), n
               .cloneCount = 0, n.cloneOffset =
               0, p && (r = e.makeArray(
                     n.slides)
                  .reverse(),
                  n.slides = e(r),
                  n.container.empty()
                  .append(n.slides)
               )), a.animationLoop && !
               c && (n.cloneCount =
                  2, n.cloneOffset =
                  1, "init" !== t &&
                  n.container.find(
                     ".clone")
                  .remove(),
                  n.container.append(
                     n.slides.first()
                     .clone()
                     .addClass(
                        "clone"
                     ))
                  .prepend(
                     n.slides.last()
                     .clone()
                     .addClass(
                        "clone"
                     ))), n.newSlides =
               e(a.selector, n), i =
               p ? n.count - 1 - n
               .currentSlide + n.cloneOffset :
               n.currentSlide + n.cloneOffset,
            l && !c ? (n.container
               .height(200 * (
                  n.count +
                  n.cloneCount
               ) + "%")
               .css(
                  "position",
                  "absolute")
               .width("100%"),
               setTimeout(
                  function () {
                     n.newSlides
                        .css({
                           display: "block"
                        }),
                     n.doMath(),
                     n.viewport
                        .height(
                           n
                           .h
                     ), n.setProps(
                        i *
                        n.h,
                        "init"
                     )
                  }, "init" ===
                  t ? 100 : 0
               )) : (n.container
               .width(200 * (n
                  .count +
                  n.cloneCount
               ) + "%"), n.setProps(
                  i * n.computedW,
                  "init"),
               setTimeout(
                  function () {
                     n.doMath(),
                     n.newSlides
                        .css({
                           width: n
                              .computedW,
                           "float": "left",
                           display: "block"
                        }),
                     a.smoothHeight &&
                        h.smoothHeight()
                  }, "init" ===
                  t ? 100 : 0
               ))
         }
         c || n.slides.removeClass(o +
            "active-slide")
            .eq(n.currentSlide)
            .addClass(o +
               "active-slide")
      }, n.doMath = function () {
         var e = n.slides.first(),
            t = a.itemMargin,
            i = a.minItems,
            o = a.maxItems;
         n.w = n.width(), n.h = e.height(),
         n.boxPadding = e.outerWidth() -
            e.width(), c ? (n.itemT =
               a.itemWidth + t, n.minW =
               i ? i * n.itemT : n
               .w, n.maxW = o ? o *
               n.itemT : n.w, n.itemW =
               n.minW > n.w ? (n.w -
                  t * i) / i : n.maxW <
               n.w ? (n.w - t * o) /
               o : a.itemWidth > n
               .w ? n.w : a.itemWidth,
               n.visible = Math.floor(
                  n.w / (n.itemW +
                     t)), n.move =
               a.move > 0 && a.move <
               n.visible ? a.move :
               n.visible, n.pagingCount =
               Math.ceil((n.count -
                     n.visible) /
                  n.move + 1), n.last =
               n.pagingCount - 1,
               n.limit = 1 === n.pagingCount ?
               0 : a.itemWidth > n
               .w ? (n.itemW + 2 *
                  t) * n.count -
               n.w - t : (n.itemW +
                  t) * n.count -
               n.w - t) : (n.itemW =
               n.w, n.pagingCount =
               n.count, n.last = n
               .count - 1), n.computedW =
            n.itemW - n.boxPadding
      }, n.update = function (e, t) {
         n.doMath(), c || (e < n.currentSlide ?
            n.currentSlide += 1 : e <=
            n.currentSlide && 0 !==
            e && (n.currentSlide -=
               1), n.animatingTo =
            n.currentSlide), a.controlNav && !
            n.manualControls && (
               "add" === t && !c ||
               n.pagingCount > n.controlNav
               .length ? h.controlNav
               .update("add") : (
                  "remove" === t && !
                  c || n.pagingCount <
                  n.controlNav.length
               ) && (c && n.currentSlide >
                  n.last && (n.currentSlide -=
                     1, n.animatingTo -=
                     1), h.controlNav
                  .update(
                     "remove", n
                     .last))), a
            .directionNav && h.directionNav
            .update()
      }, n.addSlide = function (t, i) {
         var o = e(t);
         n.count += 1, n.last = n.count -
            1, l && p ? void 0 !==
            i ? n.slides.eq(n.count -
               i)
            .after(o) : n.container
            .prepend(o) : void 0 !==
            i ? n.slides.eq(i)
            .before(
               o) : n.container.append(
               o), n.update(i,
               "add"), n.slides =
            e(a.selector +
               ":not(.clone)", n),
         n.setup(), a.added(n)
      }, n.removeSlide = function (t) {
         var i = isNaN(t) ? n.slides
            .index(e(t)) : t;
         n.count -= 1, n.last = n.count -
            1, isNaN(t) ? e(t, n.slides)
            .remove() : l && p ? n.slides
            .eq(n.last)
            .remove() :
            n.slides.eq(t)
            .remove(),
         n.doMath(), n.update(i,
            "remove"), n.slides =
            e(a.selector +
               ":not(.clone)", n),
         n.setup(), a.removed(n)
      }, h.init()
   }, e.flexslider.defaults = {
      namespace: "flex-",
      selector: ".slides > li",
      animation: "fade",
      easing: "swing",
      direction: "horizontal",
      reverse: !1,
      animationLoop: !0,
      smoothHeight: !1,
      startAt: 0,
      slideshow: !0,
      slideshowSpeed: 7e3,
      animationSpeed: 600,
      initDelay: 0,
      randomize: !1,
      pauseOnAction: !0,
      pauseOnHover: !1,
      useCSS: !0,
      touch: !0,
      video: !1,
      controlNav: !0,
      directionNav: !0,
      prevText: "Previous",
      nextText: "Next",
      keyboard: !0,
      multipleKeyboard: !1,
      mousewheel: !1,
      pausePlay: !1,
      pauseText: "Pause",
      playText: "Play",
      controlsContainer: "",
      manualControls: "",
      sync: "",
      asNavFor: "",
      itemWidth: 0,
      itemMargin: 0,
      minItems: 0,
      maxItems: 0,
      move: 0,
      start: function () {},
      before: function () {},
      after: function () {},
      end: function () {},
      added: function () {},
      removed: function () {}
   }, e.fn.flexslider = function (t) {
      if (void 0 === t && (t = {}),
         "object" == typeof t) return this
         .each(function () {
            var i = e(this),
               n = t.selector ?
                  t.selector :
                  ".slides > li",
               a = i.find(n);
            1 === a.length ? (a
               .fadeIn(400), t
               .start && t.start(
                  i)) : void 0 ===
               i.data(
                  "flexslider"
            ) && new e.flexslider(
               this, t)
         });
      var i = e(this)
         .data(
            "flexslider");
      switch (t) {
      case "play":
         i.play();
         break;
      case "pause":
         i.pause();
         break;
      case "next":
         i.flexAnimate(i.getTarget(
            "next"), !0);
         break;
      case "prev":
      case "previous":
         i.flexAnimate(i.getTarget(
            "prev"), !0);
         break;
      default:
         "number" == typeof t && i.flexAnimate(
            t, !0)
      }
   }
}(jQuery),
function (e) {
   function t() {
      return url = location.href,
      hashtag = -1 !== url.indexOf(
         "#prettyPhoto") ?
         decodeURI(url.substring(url
            .indexOf(
               "#prettyPhoto") +
            1, url.length)) : !1
   }

   function i() {
      "undefined" != typeof theRel &&
         (location.hash = theRel +
         "/" + rel_index + "/")
   }

   function n() {
      -1 !== location.href.indexOf(
         "#prettyPhoto") && (
         location.hash =
         "prettyPhoto")
   }

   function a(e, t) {
      e = e.replace(/[\[]/, "\\[")
         .replace(
            /[\]]/, "\\]");
      var i = "[\\?&]" + e +
         "=([^&#]*)",
         n = new RegExp(i),
         a = n.exec(t);
      return null == a ? "" : a[1]
   }
   e.prettyPhoto = {
      version: "3.1.4"
   }, e.fn.prettyPhoto = function (o) {
      function r() {
         e(".pp_loaderIcon")
            .hide(),
         projectedTop =
            scroll_pos.scrollTop +
            (S / 2 - v.containerHeight /
            2), 0 > projectedTop &&
            (projectedTop = 0),
         $ppt.fadeTo(settings.animation_speed,
            1), $pp_pic_holder.find(
            ".pp_content")
            .animate({
               height: v.contentHeight,
               width: v.contentWidth
            }, settings.animation_speed),
         $pp_pic_holder.animate({
               top: projectedTop,
               left: T / 2 - v
                  .containerWidth /
                  2 < 0 ? 0 : T /
                  2 - v.containerWidth /
                  2,
               width: v.containerWidth
            }, settings.animation_speed,
            function () {
               $pp_pic_holder.find(
                  ".pp_hoverContainer,#fullResImage"
               )
                  .height(v.height)
                  .width(v.width),
               $pp_pic_holder
                  .find(
                     ".pp_fade"
               )
                  .fadeIn(
                     settings.animation_speed
               ), isSet &&
                  "image" ==
                  d(pp_images[
                     set_position
                     ]) ?
                  $pp_pic_holder
                  .find(
                     ".pp_hoverContainer"
               )
                  .show() :
                  $pp_pic_holder
                  .find(
                     ".pp_hoverContainer"
               )
                  .hide(),
               settings.allow_expand &&
                  (v.resized ?
                  e(
                     "a.pp_expand,a.pp_contract"
                  )
                  .show() :
                  e(
                     "a.pp_expand"
                  )
                  .hide()), !
                  settings.autoplay_slideshow ||
                  k || _ || e
                  .prettyPhoto
                  .startSlideshow(),
               settings.changepicturecallback(),
               _ = !0
            }), f(), o.ajaxcallback()
      }

      function s(t) {
         $pp_pic_holder.find(
            "#pp_full_res object,#pp_full_res embed"
         )
            .css("visibility",
               "hidden"),
         $pp_pic_holder.find(
            ".pp_fade")
            .fadeOut(
               settings.animation_speed,
               function () {
                  e(
                     ".pp_loaderIcon"
                  )
                     .show(), t()
               })
      }

      function l(t) {
         t > 1 ? e(".pp_nav")
            .show() :
            e(".pp_nav")
            .hide()
      }

      function p(e, t) {
         if (resized = !1, c(e, t),
            imageWidth = e,
            imageHeight = t, (x > T ||
               b > S) && doresize &&
            settings.allow_resize && !
            C) {
            for (resized = !0,
               fitting = !1; !
               fitting;) x > T ? (
               imageWidth = T -
               200, imageHeight =
               t / e * imageWidth) :
               b > S ? (
                  imageHeight = S -
                  200, imageWidth =
                  e / t *
                  imageHeight) :
               fitting = !0, b =
               imageHeight, x =
               imageWidth;
            c(imageWidth,
               imageHeight), (x >
               T || b > S) && p(x,
               b)
         }
         return {
            width: Math.floor(
               imageWidth),
            height: Math.floor(
               imageHeight),
            containerHeight: Math.floor(
               b),
            containerWidth: Math.floor(
               x) + 2 * settings.horizontal_padding,
            contentHeight: Math.floor(
               y),
            contentWidth: Math.floor(
               w),
            resized: resized
         }
      }

      function c(t, i) {
         t = parseFloat(t), i =
            parseFloat(i),
         $pp_details =
            $pp_pic_holder.find(
               ".pp_details"),
         $pp_details.width(t),
         detailsHeight =
            parseFloat($pp_details.css(
               "marginTop")) +
            parseFloat($pp_details.css(
               "marginBottom")),
         $pp_details =
            $pp_details.clone()
            .addClass(
               settings.theme)
            .width(
               t)
            .appendTo(e(
               "body"))
            .css({
               position: "absolute",
               top: -1e4
            }), detailsHeight +=
            $pp_details.height(),
         detailsHeight = 34 >=
            detailsHeight ? 36 :
            detailsHeight, e.browser
            .msie && 7 == e.browser
            .version && (
               detailsHeight += 8),
         $pp_details.remove(),
         $pp_title =
            $pp_pic_holder.find(
               ".ppt"), $pp_title.width(
               t), titleHeight =
            parseFloat($pp_title.css(
               "marginTop")) +
            parseFloat($pp_title.css(
               "marginBottom")),
         $pp_title = $pp_title.clone()
            .appendTo(e("body"))
            .css({
               position: "absolute",
               top: -1e4
            }), titleHeight +=
            $pp_title.height(),
         $pp_title.remove(), y =
            i + detailsHeight, w =
            t, b = y + titleHeight +
            $pp_pic_holder.find(
               ".pp_top")
            .height() +
            $pp_pic_holder.find(
               ".pp_bottom")
            .height(),
         x = t
      }

      function d(e) {
         return e.match(
            /youtube\.com\/watch/i) ||
            e.match(/youtu\.be/i) ?
            "youtube" : e.match(
               /vimeo\.com/i) ?
            "vimeo" : e.match(
               /\b.mov\b/i) ?
            "quicktime" : e.match(
               /\b.swf\b/i) ?
            "flash" : e.match(
               /\biframe=true\b/i) ?
            "iframe" : e.match(
               /\bajax=true\b/i) ?
            "ajax" : e.match(
               /\bcustom=true\b/i) ?
            "custom" : "#" == e.substr(
               0, 1) ? "inline" :
            "image"
      }

      function u() {
         if (doresize && "undefined" !=
            typeof $pp_pic_holder) {
            if (scroll_pos = h(),
               contentHeight =
               $pp_pic_holder.height(),
               contentwidth =
               $pp_pic_holder.width(),
               projectedTop = S /
               2 + scroll_pos.scrollTop -
               contentHeight / 2,
               0 > projectedTop &&
               (projectedTop = 0),
               contentHeight > S)
               return;
            $pp_pic_holder.css({
               top: projectedTop,
               left: T / 2 +
                  scroll_pos.scrollLeft -
                  contentwidth /
                  2
            })
         }
      }

      function h() {
         return self.pageYOffset ? {
            scrollTop: self.pageYOffset,
            scrollLeft: self.pageXOffset
         } : document.documentElement &&
            document.documentElement
            .scrollTop ? {
               scrollTop: document
                  .documentElement
                  .scrollTop,
               scrollLeft: document
                  .documentElement
                  .scrollLeft
         } : document.body ? {
            scrollTop: document.body
               .scrollTop,
            scrollLeft: document.body
               .scrollLeft
         } : void 0
      }

      function m() {
         S = e(window)
            .height(), T =
            e(window)
            .width(),
            "undefined" != typeof $pp_overlay &&
            $pp_overlay.height(e(
                  document)
               .height())
            .width(T)
      }

      function f() {
         isSet && settings.overlay_gallery &&
            "image" == d(pp_images[
               set_position]) &&
            settings.ie6_fallback &&
            (!e.browser.msie || 6 !=
            parseInt(e.browser.version)
         ) ? (itemWidth = 57,
            navWidth = "facebook" ==
            settings.theme ||
            "pp_default" ==
            settings.theme ? 50 :
            30, itemsPerPage = Math
            .floor((v.containerWidth -
                  100 - navWidth) /
               itemWidth),
            itemsPerPage =
            itemsPerPage <
            pp_images.length ?
            itemsPerPage :
            pp_images.length,
            totalPage = Math.ceil(
               pp_images.length /
               itemsPerPage) - 1,
            0 == totalPage ? (
               navWidth = 0,
               $pp_gallery.find(
                  ".pp_arrow_next,.pp_arrow_previous"
               )
               .hide()) :
            $pp_gallery.find(
               ".pp_arrow_next,.pp_arrow_previous"
            )
            .show(), galleryWidth =
            itemsPerPage *
            itemWidth,
            fullGalleryWidth =
            pp_images.length *
            itemWidth, $pp_gallery.css(
               "margin-left", -(
                  galleryWidth /
                  2 + navWidth /
                  2))
            .find(
               "div:first")
            .width(
               galleryWidth + 5)
            .find(
               "ul")
            .width(
               fullGalleryWidth)
            .find(
               "li.selected")
            .removeClass(
               "selected"),
            goToPage = Math.floor(
               set_position /
               itemsPerPage) <
            totalPage ? Math.floor(
               set_position /
               itemsPerPage) :
            totalPage, e.prettyPhoto
            .changeGalleryPage(
               goToPage),
            $pp_gallery_li.filter(
               ":eq(" +
               set_position + ")")
            .addClass("selected")) :
            $pp_pic_holder.find(
               ".pp_content")
            .unbind(
               "mouseenter mouseleave"
         )
      }

      function g() {
         if (settings.social_tools &&
            (facebook_like_link =
               settings.social_tools
               .replace(
                  "{location_href}",
                  encodeURIComponent(
                     location.href
                  ))), settings.markup =
            settings.markup.replace(
               "{pp_social}", ""),
            e("body")
            .append(
               settings.markup),
            $pp_pic_holder = e(
               ".pp_pic_holder"),
            $ppt = e(".ppt"),
            $pp_overlay = e(
               "div.pp_overlay"),
            isSet && settings.overlay_gallery
         ) {
            currentGalleryPage = 0,
            toInject = "";
            for (var t = 0; t <
               pp_images.length; t++
            ) pp_images[t].match(
               /\b(jpg|jpeg|png|gif)\b/gi
            ) ? (classname = "",
               img_src = pp_images[
                  t]) : (
               classname =
               "default", img_src =
               ""), toInject +=
               "<li class='" +
               classname +
               "'><a href='#'><img src='" +
               img_src +
               "' width='50' alt='' /></a></li>";
            toInject = settings.gallery_markup
               .replace(
                  /{gallery}/g,
                  toInject),
            $pp_pic_holder.find(
               "#pp_full_res")
               .after(toInject),
            $pp_gallery = e(
               ".pp_pic_holder .pp_gallery"
            ), $pp_gallery_li =
               $pp_gallery.find(
                  "li"),
            $pp_gallery.find(
               ".pp_arrow_next"
            )
               .click(function () {
                  return e.prettyPhoto
                     .changeGalleryPage(
                        "next"),
                  e.prettyPhoto
                     .stopSlideshow(), !
                     1
               }), $pp_gallery.find(
                  ".pp_arrow_previous"
            )
               .click(function () {
                  return e.prettyPhoto
                     .changeGalleryPage(
                        "previous"
                  ), e.prettyPhoto
                     .stopSlideshow(), !
                     1
               }), $pp_pic_holder.find(
                  ".pp_content")
               .hover(
                  function () {
                     $pp_pic_holder.find(
                        ".pp_gallery:not(.disabled)"
                     )
                        .fadeIn()
                  }, function () {
                     $pp_pic_holder.find(
                        ".pp_gallery:not(.disabled)"
                     )
                        .fadeOut()
                  }), itemWidth = 57,
            $pp_gallery_li.each(
               function (t) {
                  e(this)
                     .find(
                        "a")
                     .click(
                        function () {
                           return e
                              .prettyPhoto
                              .changePage(
                                 t
                           ),
                           e
                              .prettyPhoto
                              .stopSlideshow(), !
                              1
                        })
               })
         }
         settings.slideshow && (
            $pp_pic_holder.find(
               ".pp_nav")
            .prepend(
               '<a href="#" class="pp_play">Play</a>'
            ), $pp_pic_holder.find(
               ".pp_nav .pp_play")
            .click(function () {
               return e.prettyPhoto
                  .startSlideshow(), !
                  1
            })), $pp_pic_holder.attr(
            "class",
            "pp_pic_holder " +
            settings.theme),
         $pp_overlay.css({
            opacity: 0,
            height: e(
               document)
               .height(),
            width: e(window)
               .width()
         })
            .bind("click",
               function () {
                  settings.modal ||
                     e.prettyPhoto
                     .close()
               }), e("a.pp_close")
            .bind("click", function () {
               return e.prettyPhoto
                  .close(), !
                  1
            }), settings.allow_expand &&
            e("a.pp_expand")
            .bind(
               "click", function () {
                  return e(this)
                     .hasClass(
                        "pp_expand"
                  ) ? (e(this)
                     .removeClass(
                        "pp_expand"
                     )
                     .addClass(
                        "pp_contract"
                     ), doresize = !
                     1) : (e(
                        this)
                     .removeClass(
                        "pp_contract"
                     )
                     .addClass(
                        "pp_expand"
                     ), doresize = !
                     0), s(
                     function () {
                        e.prettyPhoto
                           .open()
                     }), !1
               }), $pp_pic_holder.find(
               ".pp_previous, .pp_nav .pp_arrow_previous"
         )
            .bind("click", function () {
               return e.prettyPhoto
                  .changePage(
                     "previous"),
               e.prettyPhoto.stopSlideshow(), !
                  1
            }), $pp_pic_holder.find(
               ".pp_next, .pp_nav .pp_arrow_next"
         )
            .bind("click", function () {
               return e.prettyPhoto
                  .changePage(
                     "next"), e.prettyPhoto
                  .stopSlideshow(), !
                  1
            }), u()
      }
      o = jQuery.extend({
         hook: "rel",
         animation_speed: "fast",
         ajaxcallback: function () {},
         slideshow: 5e3,
         autoplay_slideshow: !1,
         opacity: .8,
         show_title: !0,
         allow_resize: !0,
         allow_expand: !0,
         default_width: 500,
         default_height: 344,
         counter_separator_label: "/",
         theme: "pp_default",
         horizontal_padding: 20,
         hideflash: !1,
         wmode: "opaque",
         autoplay: !0,
         modal: !1,
         deeplinking: !0,
         overlay_gallery: !0,
         overlay_gallery_max: 30,
         keyboard_shortcuts: !0,
         changepicturecallback: function () {},
         callback: function () {},
         ie6_fallback: !0,
         markup: '<div class="pp_pic_holder">       <div class="ppt">&nbsp;</div>       <div class="pp_top">        <div class="pp_left"></div>        <div class="pp_middle"></div>        <div class="pp_right"></div>       </div>       <div class="pp_content_container">        <div class="pp_left">        <div class="pp_right">         <div class="pp_content">          <div class="pp_loaderIcon"></div>          <div class="pp_fade">           <a href="#" class="pp_expand" title="Expand the image">Expand</a>           <div class="pp_hoverContainer">            <a class="pp_next" href="#">next</a>            <a class="pp_previous" href="#">previous</a>           </div>           <div id="pp_full_res"></div>           <div class="pp_details">            <div class="pp_nav">             <a href="#" class="pp_arrow_previous">Previous</a>             <p class="currentTextHolder">0/0</p>             <a href="#" class="pp_arrow_next">Next</a>            </div>            <p class="pp_description"></p>            <div class="pp_social">{pp_social}</div>            <a class="pp_close" href="#">Close</a>           </div>          </div>         </div>        </div>        </div>       </div>       <div class="pp_bottom">        <div class="pp_left"></div>        <div class="pp_middle"></div>        <div class="pp_right"></div>       </div>      </div>      <div class="pp_overlay"></div>',
         gallery_markup: '<div class="pp_gallery">         <a href="#" class="pp_arrow_previous">Previous</a>         <div>          <ul>           {gallery}          </ul>         </div>         <a href="#" class="pp_arrow_next">Next</a>        </div>',
         image_markup: '<img id="fullResImage" src="{path}" />',
         flash_markup: '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="{width}" height="{height}"><param name="wmode" value="{wmode}" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="{path}" /><embed src="{path}" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="{width}" height="{height}" wmode="{wmode}"></embed></object>',
         quicktime_markup: '<object classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" height="{height}" width="{width}"><param name="src" value="{path}"><param name="autoplay" value="{autoplay}"><param name="type" value="video/quicktime"><embed src="{path}" height="{height}" width="{width}" autoplay="{autoplay}" type="video/quicktime" pluginspage="http://www.apple.com/quicktime/download/"></embed></object>',
         iframe_markup: '<iframe src ="{path}" width="{width}" height="{height}" frameborder="no"></iframe>',
         inline_markup: '<div class="pp_inline">{content}</div>',
         custom_markup: "",
         social_tools: '<div class="twitter"><a href="http://twitter.com/share" class="twitter-share-button" data-count="none">Tweet</a><script type="text/javascript" src="http://platform.twitter.com/widgets.js"></script></div><div class="facebook"><iframe src="//www.facebook.com/plugins/like.php?locale=en_US&href={location_href}&amp;layout=button_count&amp;show_faces=true&amp;width=500&amp;action=like&amp;font&amp;colorscheme=light&amp;height=23" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:500px; height:23px;" allowTransparency="true"></iframe></div>'
      }, o);
      var v, _, y, w, b, x, k, P =
            this,
         C = !1,
         S = e(window)
            .height(),
         T = e(window)
            .width();
      return doresize = !0,
      scroll_pos = h(), e(window)
         .unbind(
            "resize.prettyphoto")
         .bind(
            "resize.prettyphoto",
            function () {
               u(), m()
            }), o.keyboard_shortcuts &&
         e(document)
         .unbind(
            "keydown.prettyphoto")
         .bind(
            "keydown.prettyphoto",
            function (t) {
               if ("undefined" !=
                  typeof $pp_pic_holder &&
                  $pp_pic_holder.is(
                     ":visible")
               ) switch (t.keyCode) {
               case 37:
                  e.prettyPhoto.changePage(
                     "previous"),
                  t.preventDefault();
                  break;
               case 39:
                  e.prettyPhoto.changePage(
                     "next"), t.preventDefault();
                  break;
               case 27:
                  settings.modal ||
                     e.prettyPhoto
                     .close(), t
                     .preventDefault()
               }
            }), e.prettyPhoto.initialize =
         function () {
            return settings = o,
               "pp_default" ==
               settings.theme && (
                  settings.horizontal_padding =
                  16), settings.ie6_fallback &&
               e.browser.msie && 6 ==
               parseInt(e.browser.version) &&
               (settings.theme =
               "light_square"),
            theRel = e(this)
               .attr(
                  settings.hook),
            galleryRegExp =
               /\[(?:.*)\]/, isSet =
               galleryRegExp.exec(
                  theRel) ? !0 : !
               1, pp_images =
               isSet ? jQuery.map(
                  P, function (t) {
                     return -1 !=
                        e(t)
                        .attr(
                           settings
                           .hook
                     )
                        .indexOf(
                           theRel) ?
                        e(t)
                        .attr(
                           "href"
                     ) : void 0
                  }) : e.makeArray(
                  e(this)
                  .attr(
                     "href")),
            pp_titles = isSet ?
               jQuery.map(P,
                  function (t) {
                     return -1 !=
                        e(t)
                        .attr(
                           settings
                           .hook
                     )
                        .indexOf(
                           theRel) ?
                        e(t)
                        .find(
                           "img"
                     )
                        .attr(
                           "alt") ?
                        e(t)
                        .find(
                           "img"
                     )
                        .attr(
                           "alt") :
                        "" :
                        void 0
                  }) : e.makeArray(
                  e(this)
                  .find(
                     "img")
                  .attr(
                     "alt")),
            pp_descriptions =
               isSet ? jQuery.map(
                  P, function (t) {
                     return -1 !=
                        e(t)
                        .attr(
                           settings
                           .hook
                     )
                        .indexOf(
                           theRel) ?
                        e(t)
                        .attr(
                           "title"
                     ) ? e(t)
                        .attr(
                           "title"
                     ) : "" :
                        void 0
                  }) : e.makeArray(
                  e(this)
                  .attr(
                     "title")),
            pp_images.length >
               settings.overlay_gallery_max &&
               (settings.overlay_gallery = !
               1), set_position =
               jQuery.inArray(e(
                     this)
                  .attr(
                     "href"),
                  pp_images),
            rel_index = isSet ?
               set_position : e(
                  "a[" + settings
                  .hook + "^='" +
                  theRel + "']")
               .index(
                  e(this)), g(
                  this), settings
               .allow_resize && e(
                  window)
               .bind(
                  "scroll.prettyphoto",
                  function () {
                     u()
                  }), e.prettyPhoto
               .open(), !1
      }, e.prettyPhoto.open =
         function (t) {
            return "undefined" ==
               typeof settings &&
               (settings = o, e.browser
               .msie && 6 == e.browser
               .version && (
                  settings.theme =
                  "light_square"),
               pp_images = e.makeArray(
                  arguments[0]),
               pp_titles =
               arguments[1] ? e.makeArray(
                  arguments[1]) :
               e.makeArray(""),
               pp_descriptions =
               arguments[2] ? e.makeArray(
                  arguments[2]) :
               e.makeArray(""),
               isSet = pp_images.length >
               1 ? !0 : !1,
               set_position =
               arguments[3] ?
               arguments[3] : 0, g(
                  t.target)), e.browser
               .msie && 6 == e.browser
               .version && e(
                  "select")
               .css(
                  "visibility",
                  "hidden"),
            settings.hideflash &&
               e(
                  "object,embed,iframe[src*=youtube],iframe[src*=vimeo]"
            )
               .css("visibility",
                  "hidden"), l(e(
                     pp_images)
                  .size()),
            e(".pp_loaderIcon")
               .show(), settings.deeplinking &&
               i(), settings.social_tools &&
               (facebook_like_link =
               settings.social_tools
               .replace(
                  "{location_href}",
                  encodeURIComponent(
                     location.href
                  )),
               $pp_pic_holder.find(
                  ".pp_social")
               .html(
                  facebook_like_link
               )), $ppt.is(
                  ":hidden") &&
               $ppt.css("opacity",
                  0)
               .show(),
            $pp_overlay.show()
               .fadeTo(
                  settings.animation_speed,
                  settings.opacity
            ), $pp_pic_holder.find(
               ".currentTextHolder"
            )
               .text(set_position + 1 +
                  settings.counter_separator_label +
                  e(pp_images)
                  .size()
            ), "undefined" !=
               typeof pp_descriptions[
                  set_position] &&
               "" !=
               pp_descriptions[
                  set_position] ?
               $pp_pic_holder.find(
                  ".pp_description"
            )
               .show()
               .html(unescape(
                  pp_descriptions[
                     set_position
                     ])) :
               $pp_pic_holder.find(
                  ".pp_description"
            )
               .hide(), movie_width =
               parseFloat(a(
                  "width",
                  pp_images[
                     set_position
                     ])) ? a("width",
                  pp_images[
                     set_position
                     ]) : settings.default_width
               .toString(),
            movie_height =
               parseFloat(a(
                  "height",
                  pp_images[
                     set_position
                     ])) ? a(
                  "height",
                  pp_images[
                     set_position
                     ]) : settings.default_height
               .toString(), C = !1, -
               1 != movie_height.indexOf(
                  "%") && (
                  movie_height =
                  parseFloat(e(
                        window)
                     .height() *
                     parseFloat(
                        movie_height
                     ) / 100 -
                     150), C = !
                  0), -1 !=
               movie_width.indexOf(
                  "%") && (
                  movie_width =
                  parseFloat(e(
                        window)
                     .width() *
                     parseFloat(
                        movie_width
                     ) / 100 -
                     150), C = !
                  0),
            $pp_pic_holder.fadeIn(
               function () {
                  switch (
                     settings
                     .show_title &&
                     "" !=
                     pp_titles[
                        set_position
                        ] &&
                     "undefined" !=
                     typeof pp_titles[
                        set_position
                        ] ?
                     $ppt.html(
                        unescape(
                           pp_titles[
                              set_position
                              ]
                        )) :
                     $ppt.html(
                        "&nbsp;"
                     ),
                     imgPreloader =
                     "",
                     skipInjection = !
                     1, d(
                        pp_images[
                           set_position
                           ])) {
                  case "image":
                     imgPreloader =
                        new Image,
                     nextImage =
                        new Image,
                     isSet &&
                        set_position <
                        e(
                           pp_images
                     )
                        .size() -
                        1 &&
                        (
                        nextImage
                        .src =
                        pp_images[
                           set_position +
                           1
                           ]),
                     prevImage =
                        new Image,
                     isSet &&
                        pp_images[
                           set_position -
                           1
                           ] && (
                           prevImage
                           .src =
                           pp_images[
                              set_position -
                              1
                              ]),
                     $pp_pic_holder
                        .find(
                           "#pp_full_res"
                     )[0].innerHTML =
                        settings
                        .image_markup
                        .replace(
                           /{path}/g,
                           pp_images[
                              set_position
                              ]
                     ),
                     imgPreloader
                        .onload =
                        function () {
                           v =
                              p(
                                 imgPreloader
                                 .width,
                                 imgPreloader
                                 .height
                           ),
                           r()
                     },
                     imgPreloader
                        .onerror =
                        function () {
                           alert(
                              "Image cannot be loaded. Make sure the path is correct and image exist."
                           ),
                           e
                              .prettyPhoto
                              .close()
                     },
                     imgPreloader
                        .src =
                        pp_images[
                           set_position
                           ];
                     break;
                  case "youtube":
                     v = p(
                        movie_width,
                        movie_height
                     ),
                     movie_id =
                        a(
                           "v",
                           pp_images[
                              set_position
                              ]
                     ), "" ==
                        movie_id &&
                        (
                        movie_id =
                        pp_images[
                           set_position
                           ].split(
                           "youtu.be/"
                        ),
                        movie_id =
                        movie_id[
                           1
                           ],
                        movie_id
                        .indexOf(
                           "?"
                        ) >
                        0 &&
                        (
                           movie_id =
                           movie_id
                           .substr(
                              0,
                              movie_id
                              .indexOf(
                                 "?"
                              )
                           )
                        ),
                        movie_id
                        .indexOf(
                           "&"
                        ) >
                        0 &&
                        (
                           movie_id =
                           movie_id
                           .substr(
                              0,
                              movie_id
                              .indexOf(
                                 "&"
                              )
                           )
                        )),
                     movie =
                        "http://www.youtube.com/embed/" +
                        movie_id,
                     movie +=
                        a(
                           "rel",
                           pp_images[
                              set_position
                              ]
                     ) ?
                        "?rel=" +
                        a(
                           "rel",
                           pp_images[
                              set_position
                              ]
                     ) :
                        "?rel=1",
                     settings
                        .autoplay &&
                        (
                        movie +=
                        "&autoplay=1"
                     ),
                     toInject =
                        settings
                        .iframe_markup
                        .replace(
                           /{width}/g,
                           v
                           .width
                     )
                        .replace(
                           /{height}/g,
                           v.height
                     )
                        .replace(
                           /{wmode}/g,
                           settings
                           .wmode
                     )
                        .replace(
                           /{path}/g,
                           movie
                     );
                     break;
                  case "vimeo":
                     v = p(
                        movie_width,
                        movie_height
                     ),
                     movie_id =
                        pp_images[
                           set_position
                           ];
                     var t =
                        /http:\/\/(www\.)?vimeo.com\/(\d+)/,
                        i =
                           movie_id
                           .match(
                              t
                        );
                     movie =
                        "http://player.vimeo.com/video/" +
                        i[2] +
                        "?title=0&amp;byline=0&amp;portrait=0",
                     settings
                        .autoplay &&
                        (
                        movie +=
                        "&autoplay=1;"
                     ),
                     vimeo_width =
                        v.width +
                        "/embed/?moog_width=" +
                        v.width,
                     toInject =
                        settings
                        .iframe_markup
                        .replace(
                           /{width}/g,
                           vimeo_width
                     )
                        .replace(
                           /{height}/g,
                           v.height
                     )
                        .replace(
                           /{path}/g,
                           movie
                     );
                     break;
                  case "quicktime":
                     v = p(
                        movie_width,
                        movie_height
                     ), v.height +=
                        15,
                     v.contentHeight +=
                        15,
                     v.containerHeight +=
                        15,
                     toInject =
                        settings
                        .quicktime_markup
                        .replace(
                           /{width}/g,
                           v
                           .width
                     )
                        .replace(
                           /{height}/g,
                           v.height
                     )
                        .replace(
                           /{wmode}/g,
                           settings
                           .wmode
                     )
                        .replace(
                           /{path}/g,
                           pp_images[
                              set_position
                              ])
                        .replace(
                           /{autoplay}/g,
                           settings
                           .autoplay
                     );
                     break;
                  case "flash":
                     v = p(
                        movie_width,
                        movie_height
                     ),
                     flash_vars =
                        pp_images[
                           set_position
                           ],
                     flash_vars =
                        flash_vars
                        .substring(
                           pp_images[
                              set_position
                              ]
                           .indexOf(
                              "flashvars"
                           ) +
                           10,
                           pp_images[
                              set_position
                              ]
                           .length
                     ),
                     filename =
                        pp_images[
                           set_position
                           ],
                     filename =
                        filename
                        .substring(
                           0,
                           filename
                           .indexOf(
                              "?"
                           )
                     ),
                     toInject =
                        settings
                        .flash_markup
                        .replace(
                           /{width}/g,
                           v
                           .width
                     )
                        .replace(
                           /{height}/g,
                           v.height
                     )
                        .replace(
                           /{wmode}/g,
                           settings
                           .wmode
                     )
                        .replace(
                           /{path}/g,
                           filename +
                           "?" +
                           flash_vars
                     );
                     break;
                  case "iframe":
                     v = p(
                        movie_width,
                        movie_height
                     ),
                     frame_url =
                        pp_images[
                           set_position
                           ],
                     frame_url =
                        frame_url
                        .substr(
                           0,
                           frame_url
                           .indexOf(
                              "iframe"
                           ) -
                           1
                     ),
                     toInject =
                        settings
                        .iframe_markup
                        .replace(
                           /{width}/g,
                           v
                           .width
                     )
                        .replace(
                           /{height}/g,
                           v.height
                     )
                        .replace(
                           /{path}/g,
                           frame_url
                     );
                     break;
                  case "ajax":
                     doresize = !
                        1,
                     v =
                        p(
                           movie_width,
                           movie_height
                     ),
                     doresize = !
                        0,
                     skipInjection = !
                        0,
                     e.get(
                        pp_images[
                           set_position
                           ],
                        function (
                           e
                        ) {
                           toInject =
                              settings
                              .inline_markup
                              .replace(
                                 /{content}/g,
                                 e
                           ),
                           $pp_pic_holder
                              .find(
                                 "#pp_full_res"
                           )[
                              0
                              ]
                              .innerHTML =
                              toInject,
                           r()
                        }
                     );
                     break;
                  case "custom":
                     v = p(
                        movie_width,
                        movie_height
                     ),
                     toInject =
                        settings
                        .custom_markup;
                     break;
                  case "inline":
                     myClone =
                        e(
                           pp_images[
                              set_position
                              ]
                     )
                        .clone()
                        .append(
                           '<br clear="all" />'
                     )
                        .css({
                           width: settings
                              .default_width
                        })
                        .wrapInner(
                           '<div id="pp_full_res"><div class="pp_inline"></div></div>'
                     )
                        .appendTo(
                           e(
                              "body"
                           ))
                        .show(),
                     doresize = !
                        1,
                     v =
                        p(e(
                              myClone
                           )
                           .width(),
                           e(
                              myClone
                           )
                           .height()
                     ),
                     doresize = !
                        0,
                     e(
                        myClone
                     )
                        .remove(),
                     toInject =
                        settings
                        .inline_markup
                        .replace(
                           /{content}/g,
                           e(
                              pp_images[
                                 set_position
                                 ]
                           )
                           .html()
                     )
                  }
                  imgPreloader ||
                     skipInjection ||
                     (
                     $pp_pic_holder
                     .find(
                        "#pp_full_res"
                     )[0].innerHTML =
                     toInject,
                     r())
               }), !1
      }, e.prettyPhoto.changePage =
         function (t) {
            currentGalleryPage = 0,
               "previous" == t ? (
                  set_position--,
                  0 >
                  set_position &&
                  (set_position =
                     e(pp_images)
                     .size() - 1
                  )) : "next" ==
               t ? (set_position++,
                  set_position >
                  e(pp_images)
                  .size() -
                  1 && (
                     set_position =
                     0)) :
               set_position = t,
            rel_index =
               set_position,
            doresize || (
               doresize = !0),
            settings.allow_expand &&
               e(".pp_contract")
               .removeClass(
                  "pp_contract")
               .addClass(
                  "pp_expand"), s(
                  function () {
                     e.prettyPhoto
                        .open()
                  })
      }, e.prettyPhoto.changeGalleryPage =
         function (e) {
            "next" == e ? (
               currentGalleryPage++,
               currentGalleryPage >
               totalPage && (
                  currentGalleryPage =
                  0)) :
               "previous" == e ? (
                  currentGalleryPage--,
                  0 >
                  currentGalleryPage &&
                  (
                     currentGalleryPage =
                     totalPage)) :
               currentGalleryPage =
               e, slide_speed =
               "next" == e ||
               "previous" == e ?
               settings.animation_speed :
               0, slide_to =
               currentGalleryPage *
               itemsPerPage *
               itemWidth,
            $pp_gallery.find(
               "ul")
               .animate({
                  left: -
                     slide_to
               }, slide_speed)
      }, e.prettyPhoto.startSlideshow =
         function () {
            "undefined" == typeof k ?
               ($pp_pic_holder.find(
                  ".pp_play")
               .unbind(
                  "click")
               .removeClass(
                  "pp_play")
               .addClass(
                  "pp_pause")
               .click(
                  function () {
                     return e.prettyPhoto
                        .stopSlideshow(), !
                        1
                  }), k =
               setInterval(e.prettyPhoto
                  .startSlideshow,
                  settings.slideshow
               )) : e.prettyPhoto.changePage(
               "next")
      }, e.prettyPhoto.stopSlideshow =
         function () {
            $pp_pic_holder.find(
               ".pp_pause")
               .unbind(
                  "click")
               .removeClass(
                  "pp_pause")
               .addClass(
                  "pp_play")
               .click(
                  function () {
                     return e.prettyPhoto
                        .startSlideshow(), !
                        1
                  }), clearInterval(k),
            k = void 0
      }, e.prettyPhoto.close =
         function () {
            $pp_overlay.is(
               ":animated") || (e.prettyPhoto
               .stopSlideshow(),
               $pp_pic_holder.stop()
               .find(
                  "object,embed")
               .css("visibility",
                  "hidden"), e(
                  "div.pp_pic_holder,div.ppt,.pp_fade"
               )
               .fadeOut(settings.animation_speed,
                  function () {
                     e(this)
                        .remove()
                  }), $pp_overlay
               .fadeOut(settings.animation_speed,
                  function () {
                     e.browser.msie &&
                        6 == e.browser
                        .version &&
                        e(
                           "select"
                     )
                        .css(
                           "visibility",
                           "visible"
                     ), settings
                        .hideflash &&
                        e(
                           "object,embed,iframe[src*=youtube],iframe[src*=vimeo]"
                     )
                        .css(
                           "visibility",
                           "visible"
                     ), e(this)
                        .remove(),
                     e(
                        window
                     )
                        .unbind(
                           "scroll.prettyphoto"
                     ), n(),
                     settings
                        .callback(),
                     doresize = !
                        0, _ = !
                        1,
                     delete settings
                  }))
      }, !pp_alreadyInitialized && t() &&
         (pp_alreadyInitialized = !0,
         hashIndex = t(), hashRel =
         hashIndex, hashIndex =
         hashIndex.substring(
            hashIndex.indexOf("/") +
            1, hashIndex.length - 1
         ), hashRel = hashRel.substring(
            0, hashRel.indexOf("/")
         ), setTimeout(function () {
            e("a[" + o.hook +
               "^='" + hashRel +
               "']:eq(" +
               hashIndex + ")"
            )
               .trigger("click")
         }, 50)), this.unbind(
         "click.prettyphoto")
         .bind(
            "click.prettyphoto", e.prettyPhoto
            .initialize)
   }
}(jQuery);
var pp_alreadyInitialized = !1;
window.Modernizr = function (e, t, i) {
   function n(e) {
      y.cssText = e
   }

   function a(e, t) {
      return n(k.join(e + ";") + (t ||
         ""))
   }

   function o(e, t) {
      return typeof e === t
   }

   function r(e, t) {
      return !!~("" + e)
         .indexOf(t)
   }

   function s(e, t) {
      for (var n in e) {
         var a = e[n];
         if (!r(a, "-") && y[a] !==
            i) return "pfx" == t ?
            a : !0
      }
      return !1
   }

   function l(e, t, n) {
      for (var a in e) {
         var r = t[e[a]];
         if (r !== i) return n === !
            1 ? e[a] : o(r,
               "function") ? r.bind(
               n || t) : r
      }
      return !1
   }

   function p(e, t, i) {
      var n = e.charAt(0)
         .toUpperCase() +
         e.slice(1),
         a = (e + " " + C.join(n +
            " ") + n)
            .split(" ");
      return o(t, "string") || o(t,
         "undefined") ? s(a, t) : (a =
         (e + " " + S.join(n + " ") +
            n)
         .split(" "), l(a, t,
            i))
   }

   function c() {
      m.input = function (i) {
         for (var n = 0, a = i.length; a >
            n; n++) E[i[n]] = !! (i[
            n] in w);
         return E.list && (E.list = !
            (!t.createElement(
                  "datalist") || !
               e.HTMLDataListElement
            )), E
      }(
         "autocomplete autofocus list placeholder max min multiple pattern required step"
         .split(" ")), m.inputtypes =
         function (e) {
            for (var n, a, o, r = 0,
                  s = e.length; s >
               r; r++) w.setAttribute(
               "type", a = e[r]),
            n = "text" !== w.type,
            n && (w.value = b,
               w.style.cssText =
               "position:absolute;visibility:hidden;",
               /^range$/.test(
                  a) && w.style
               .WebkitAppearance !==
               i ? (g.appendChild(
                     w), o =
                  t.defaultView,
                  n = o.getComputedStyle &&
                  "textfield" !==
                  o.getComputedStyle(
                     w, null
                  )
                  .WebkitAppearance &&
                  0 !== w.offsetHeight,
                  g.removeChild(
                     w)) :
               /^(search|tel)$/
               .test(a) || (n =
                  /^(url|email)$/
                  .test(a) ?
                  w.checkValidity &&
                  w.checkValidity() === !
                  1 : w.value !=
                  b)), N[e[r]] = !!
               n;
            return N
      }(
         "search tel url email datetime date month week time datetime-local number range color"
         .split(" "))
   }
   var d, u, h = "2.6.2",
      m = {}, f = !0,
      g = t.documentElement,
      v = "modernizr",
      _ = t.createElement(v),
      y = _.style,
      w = t.createElement("input"),
      b = ":)",
      x = {}.toString,
      k = " -webkit- -moz- -o- -ms- "
         .split(" "),
      P = "Webkit Moz O ms",
      C = P.split(" "),
      S = P.toLowerCase()
         .split(" "),
      T = {
         svg: "http://www.w3.org/2000/svg"
      }, $ = {}, N = {}, E = {}, j = [],
      I = j.slice,
      W = function (e, i, n, a) {
         var o, r, s, l, p = t.createElement(
               "div"),
            c = t.body,
            d = c || t.createElement(
               "body");
         if (parseInt(n, 10))
            for (; n--;) s = t.createElement(
               "div"), s.id = a ?
               a[n] : v + (n + 1),
         p.appendChild(s);
         return o = ["&#173;",
        '<style id="s', v, '">',
        e, "</style>"
      ].join(""), p.id = v, (c ?
            p : d)
            .innerHTML += o,
         d.appendChild(p), c ||
            (d.style.background =
            "", d.style.overflow =
            "hidden", l = g.style.overflow,
            g.style.overflow =
            "hidden", g.appendChild(
               d)), r = i(p, e), c ?
            p.parentNode.removeChild(
               p) : (d.parentNode.removeChild(
                  d), g.style.overflow =
               l), !! r
      }, M = function () {
         function e(e, a) {
            a = a || t.createElement(
               n[e] || "div"), e =
               "on" + e;
            var r = e in a;
            return r || (a.setAttribute ||
               (a = t.createElement(
                  "div")), a.setAttribute &&
               a.removeAttribute &&
               (a.setAttribute(e,
                     ""), r = o(
                     a[e],
                     "function"),
                  o(a[e],
                     "undefined"
                  ) || (a[e] = i),
                  a.removeAttribute(
                     e))), a =
               null, r
         }
         var n = {
            select: "input",
            change: "input",
            submit: "form",
            reset: "form",
            error: "img",
            load: "img",
            abort: "img"
         };
         return e
      }(),
      O = {}.hasOwnProperty;
   u = o(O, "undefined") || o(O.call,
      "undefined") ? function (e, t) {
      return t in e && o(e.constructor
         .prototype[t], "undefined")
   } : function (e, t) {
      return O.call(e, t)
   }, Function.prototype.bind || (
      Function.prototype.bind =
      function (e) {
         var t = this;
         if ("function" != typeof t)
            throw new TypeError;
         var i = I.call(arguments, 1),
            n = function () {
               if (this instanceof n) {
                  var a =
                     function () {};
                  a.prototype = t
                     .prototype;
                  var o = new a,
                     r = t.apply(
                        o, i.concat(
                           I.call(
                              arguments
                           )));
                  return Object(r) ===
                     r ? r : o
               }
               return t.apply(e, i
                  .concat(I.call(
                     arguments
                  )))
            };
         return n
      }),/* $.flexbox = function () {
      return p("flexWrap")
   }, $.canvas = function () {
      var e = t.createElement(
         "canvas");
      return !(!e.getContext || !e.getContext(
         "2d"))
   }, $.canvastext = function () {
      return !(!m.canvas || !o(t.createElement(
            "canvas")
         .getContext(
            "2d")
         .fillText,
         "function"))
   }, $.webgl = function () {
      return !!e.WebGLRenderingContext
   }, $.touch = function () {
      var i;
      return "ontouchstart" in e || e
         .DocumentTouch && t instanceof DocumentTouch ?
         i = !0 : W(["@media (", k.join(
               "touch-enabled),("
        ), v, ")",
        "{#modernizr{top:9px;position:absolute}}"
      ].join(""), function (e) {
            i = 9 === e.offsetTop
         }), i
   }, $.geolocation = function () {
      return "geolocation" in
         navigator
   }, $.postmessage = function () {
      return !!e.postMessage
   }, $.websqldatabase = function () {
      return !!e.openDatabase
   }, $.indexedDB = function () {
      return !!p("indexedDB", e)
   }, $.hashchange = function () {
      return M("hashchange", e) && (t
         .documentMode === i || t.documentMode >
         7)
   }, $.history = function () {
      return !(!e.history || !history
         .pushState)
   }, $.draganddrop = function () {
      var e = t.createElement("div");
      return "draggable" in e ||
         "ondragstart" in e &&
         "ondrop" in e
   }, $.websockets = function () {
      return "WebSocket" in e ||
         "MozWebSocket" in e
   }, $.rgba = function () {
      return n(
         "background-color:rgba(150,255,150,.5)"
      ), r(y.backgroundColor, "rgba")
   }, $.hsla = function () {
      return n(
         "background-color:hsla(120,40%,100%,.5)"
      ), r(y.backgroundColor, "rgba") ||
         r(y.backgroundColor, "hsla")
   }, $.multiplebgs = function () {
      return n(
         "background:url(https://),url(https://),red url(https://)"
      ), /(url\s*\(.*?){3}/.test(y.background)
   }, $.backgroundsize = function () {
      return p("backgroundSize")
   }, $.borderimage = function () {
      return p("borderImage")
   }, $.borderradius = function () {
      return p("borderRadius")
   }, $.boxshadow = function () {
      return p("boxShadow")
   }, $.textshadow = function () {
      return "" === t.createElement(
         "div")
         .style.textShadow
   }, $.opacity = function () {
      return a("opacity:.55"),
         /^0.55$/.test(y.opacity)
   }, $.cssanimations = function () {
      return p("animationName")
   }, $.csscolumns = function () {
      return p("columnCount")
   }, $.cssgradients = function () {
      var e = "background-image:",
         t =
            "gradient(linear,left top,right bottom,from(#9f9),to(white));",
         i =
            "linear-gradient(left top,#9f9, white);";
      return n((e + "-webkit- ".split(
               " ")
            .join(t + e) +
            k.join(i + e))
         .slice(0, -
            e.length)), r(y.backgroundImage,
         "gradient")
   }, $.cssreflections = function () {
      return p("boxReflect")
   }, $.csstransforms = function () {
      return !!p("transform")
   }, $.csstransforms3d = function () {
      var e = !! p("perspective");
      return e && "webkitPerspective" in
         g.style && W(
            "@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",
            function (t) {
               e = 9 === t.offsetLeft &&
                  3 === t.offsetHeight
            }), e
   }, $.csstransitions = function () {
      return p("transition")
   }, $.fontface = function () {
      var e;
      return W(
         '@font-face {font-family:"font";src:url("https://")}',
         function (i, n) {
            var a = t.getElementById(
               "smodernizr"),
               o = a.sheet || a.styleSheet,
               r = o ? o.cssRules &&
                  o.cssRules[0] ?
                  o.cssRules[0].cssText :
                  o.cssText || "" :
                  "";
            e = /src/i.test(r) && 0 ===
               r.indexOf(n.split(
                  " ")[0])
         }), e
   }, $.generatedcontent = function () {
      var e;
      return W(["#", v,
      "{font:0/0 a}#", v,
      ':after{content:"', b,
      '";visibility:hidden;font:3px/1 a}'
    ].join(""), function (t) {
         e = t.offsetHeight >= 3
      }), e
   }, $.video = function () {
      var e = t.createElement("video"),
         i = !1;
      try {
         (i = !! e.canPlayType) && (
            i = new Boolean(i), i.ogg =
            e.canPlayType(
               'video/ogg; codecs="theora"'
            )
            .replace(/^no$/, ""),
            i.h264 = e.canPlayType(
               'video/mp4; codecs="avc1.42E01E"'
            )
            .replace(/^no$/, ""),
            i.webm = e.canPlayType(
               'video/webm; codecs="vp8, vorbis"'
            )
            .replace(/^no$/, ""))
      } catch (n) {}
      return i
   }, $.audio = function () {
      var e = t.createElement("audio"),
         i = !1;
      try {
         (i = !! e.canPlayType) && (
            i = new Boolean(i), i.ogg =
            e.canPlayType(
               'audio/ogg; codecs="vorbis"'
            )
            .replace(/^no$/, ""),
            i.mp3 = e.canPlayType(
               "audio/mpeg;")
            .replace(
               /^no$/, ""), i.wav =
            e.canPlayType(
               'audio/wav; codecs="1"'
            )
            .replace(/^no$/, ""),
            i.m4a = (e.canPlayType(
                  "audio/x-m4a;") ||
               e.canPlayType(
                  "audio/aac;"))
            .replace(
               /^no$/, ""))
      } catch (n) {}
      return i
   }, $.localstorage = function () {
      try {
         return localStorage.setItem(
            v, v), localStorage.removeItem(
            v), !0
      } catch (e) {
         return !1
      }
   }, $.sessionstorage = function () {
      try {
         return sessionStorage.setItem(
            v, v), sessionStorage.removeItem(
            v), !0
      } catch (e) {
         return !1
      }
   }, $.webworkers = function () {
      return !!e.Worker
   }, $.applicationcache = function () {
      return !!e.applicationCache
   }, $.svg = function () {
      return !!t.createElementNS && !!
         t.createElementNS(T.svg,
            "svg")
         .createSVGRect
   }, $.inlinesvg = function () {
      var e = t.createElement("div");
      return e.innerHTML = "<svg/>", (
         e.firstChild && e.firstChild
         .namespaceURI) == T.svg
   }, $.smil = function () {
      return !!t.createElementNS &&
         /SVGAnimate/.test(x.call(t.createElementNS(
            T.svg,
            "animate")))
   }, $.svgclippaths = function () {
      return !!t.createElementNS &&
         /SVGClipPath/.test(x.call(t
            .createElementNS(T.svg,
               "clipPath")))
   };
   for (var A in $) u($, A) && (d = A.toLowerCase(),
      m[d] = $[A](), j.push((m[d] ?
         "" : "no-") + d));
   return m.input || c(), m.addTest =
      function (e, t) {
         if ("object" == typeof e)
            for (var n in e) u(e, n) &&
               m.addTest(n, e[n]);
         else {
            if (e = e.toLowerCase(),
               m[e] !== i) return m;
            t = "function" ==
               typeof t ? t() : t,
               "undefined" !=
               typeof f && f && (g
                  .className +=
                  " " + (t ? "" :
                     "no-") + e),
            m[e] = t
         }
         return m
   },*/ n(""), _ = w = null,
   function (e, t) {
      function i(e, t) {
         var i = e.createElement("p"),
            n = e.getElementsByTagName(
               "head")[0] || e.documentElement;
         return i.innerHTML =
            "x<style>" + t +
            "</style>", n.insertBefore(
               i.lastChild, n.firstChild
         )
      }

      function n() {
         var e = v.elements;
         return "string" == typeof e ?
            e.split(" ") : e
      }

      function a(e) {
         var t = g[e[m]];
         return t || (t = {}, f++, e[
            m] = f, g[f] = t), t
      }

      function o(e, i, n) {
         if (i || (i = t), c) return i
            .createElement(e);
         n || (n = a(i));
         var o;
         return o = n.cache[e] ? n.cache[
            e].cloneNode() : h.test(
            e) ? (n.cache[e] = n.createElem(
            e))
            .cloneNode() : n.createElem(
               e), o.canHaveChildren && !
            u.test(e) ? n.frag.appendChild(
               o) : o
      }

      function r(e, i) {
         if (e || (e = t), c) return e
            .createDocumentFragment();
         i = i || a(e);
         for (var o = i.frag.cloneNode(),
               r = 0, s = n(), l =
               s.length; l > r; r++
         ) o.createElement(s[r]);
         return o
      }

      function s(e, t) {
         t.cache || (t.cache = {}, t
            .createElem = e.createElement,
            t.createFrag = e.createDocumentFragment,
            t.frag = t.createFrag()
         ), e.createElement =
            function (i) {
               return v.shivMethods ?
                  o(i, e, t) : t.createElem(
                     i)
         }, e.createDocumentFragment =
            Function("h,f",
               "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" +
               n()
               .join()
               .replace(
                  /\w+/g,
                  function (e) {
                     return t.createElem(
                        e), t.frag
                        .createElement(
                           e),
                        'c("' +
                        e +
                        '")'
                  }) +
               ");return n}")(v, t
               .frag)
      }

      function l(e) {
         e || (e = t);
         var n = a(e);
         return !v.shivCSS || p || n
            .hasCSS || (n.hasCSS = !!
               i(e,
                  "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}"
               )), c || s(e, n), e
      }
      var p, c, d = e.html5 || {}, u =
            /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
         h =
            /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
         m = "_html5shiv",
         f = 0,
         g = {};
      ! function () {
         try {
            var e = t.createElement(
               "a");
            e.innerHTML =
               "<xyz></xyz>", p =
               "hidden" in e, c =
               1 == e.childNodes.length ||
               function () {
                  t.createElement(
                     "a");
                  var e = t.createDocumentFragment();
                  return "undefined" ==
                     typeof e.cloneNode ||
                     "undefined" ==
                     typeof e.createDocumentFragment ||
                     "undefined" ==
                     typeof e.createElement
            }()
         } catch (i) {
            p = !0, c = !0
         }
      }();
      var v = {
         elements: d.elements ||
            "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
         shivCSS: d.shivCSS !== !1,
         supportsUnknownElements: c,
         shivMethods: d.shivMethods !== !
            1,
         type: "default",
         shivDocument: l,
         createElement: o,
         createDocumentFragment: r
      };
      e.html5 = v, l(t)
   }(this, t), m._version = h, m._prefixes =
      k, m._domPrefixes = S, m._cssomPrefixes =
      C, m.hasEvent = M, m.testProp =
      function (e) {
         return s([e])
   }, m.testAllProps = p, m.testStyles =
      W, m.prefixed = function (e, t,
         i) {
         return t ? p(e, t, i) : p(e,
            "pfx")
   }, /*g.className = g.className.replace(
      /(^|\s)no-js(\s|$)/, "$1$2") +
      (f ? " js " + j.join(" ") : ""),*/
   m
}(this, this.document),
function (e, t, i) {
   function n(e) {
      return "[object Function]" == g
         .call(e)
   }

   function a(e) {
      return "string" == typeof e
   }

   function o() {}

   function r(e) {
      return !e || "loaded" == e ||
         "complete" == e ||
         "uninitialized" == e
   }

   function s() {
      var e = v.shift();
      _ = 1, e ? e.t ? m(function () {
         ("c" == e.t ? u.injectCss :
            u.injectJs)(e.s, 0,
            e.a, e.x, e.e, 1)
      }, 0) : (e(), s()) : _ = 0
   }

   function l(e, i, n, a, o, l, p) {
      function c(t) {
         if (!h && r(d.readyState) &&
            (y.r = h = 1, !_ && s(),
               d.onload = d.onreadystatechange =
               null, t)) {
            "img" != e && m(
               function () {
                  b.removeChild(d)
               }, 50);
            for (var n in S[i]) S[i]
               .hasOwnProperty(n) &&
               S[i][n].onload()
         }
      }
      var p = p || u.errorTimeout,
         d = t.createElement(e),
         h = 0,
         g = 0,
         y = {
            t: n,
            s: i,
            e: o,
            a: l,
            x: p
         };
      1 === S[i] && (g = 1, S[i] = []),
         "object" == e ? d.data = i :
         (d.src = i, d.type = e), d.width =
         d.height = "0", d.onerror =
         d.onload = d.onreadystatechange =
         function () {
            c.call(this, g)
      }, v.splice(a, 0, y), "img" !=
         e && (g || 2 === S[i] ? (b.insertBefore(
            d, w ? null : f
         ), m(c, p)) : S[i].push(
            d))
   }

   function p(e, t, i, n, o) {
      return _ = 0, t = t || "j", a(e) ?
         l("c" == t ? k : x, e, t,
            this.i++, i, n, o) : (v
            .splice(this.i++, 0, e),
            1 == v.length && s()),
      this
   }

   function c() {
      var e = u;
      return e.loader = {
         load: p,
         i: 0
      }, e
   }
   var d, u, h = t.documentElement,
      m = e.setTimeout,
      f = t.getElementsByTagName(
         "script")[0],
      g = {}.toString,
      v = [],
      _ = 0,
      y = "MozAppearance" in h.style,
      w = y && !! t.createRange()
         .compareNode,
      b = w ? h : f.parentNode,
      h = e.opera && "[object Opera]" ==
         g.call(e.opera),
      h = !! t.attachEvent && !h,
      x = y ? "object" : h ? "script" :
         "img",
      k = h ? "script" : x,
      P = Array.isArray || function (
         e) {
         return "[object Array]" ==
            g.call(e)
      }, C = [],
      S = {}, T = {
         timeout: function (e, t) {
            return t.length && (e.timeout =
               t[0]), e
         }
      };
   u = function (e) {
      function t(e) {
         var t, i, n, e = e.split(
               "!"),
            a = C.length,
            o = e.pop(),
            r = e.length,
            o = {
               url: o,
               origUrl: o,
               prefixes: e
            };
         for (i = 0; r > i; i++) n =
            e[i].split("="), (t = T[
               n.shift()]) && (o =
               t(o, n));
         for (i = 0; a > i; i++) o =
            C[i](o);
         return o
      }

      function r(e, a, o, r, s) {
         var l = t(e),
            p = l.autoCallback;
         l.url.split(".")
            .pop()
            .split(
               "?")
            .shift(), l.bypass ||
            (a && (a = n(a) ? a : a[
               e] || a[r] || a[
               e.split("/")
               .pop()
               .split("?")[0]]), l
            .instead ? l.instead(e,
               a, o, r, s) : (S[l.url] ?
               l.noexec = !0 : S[l
                  .url] = 1, o.load(
                  l.url, l.forceCSS || !
                  l.forceJS &&
                  "css" == l.url.split(
                     ".")
                  .pop()
                  .split(
                     "?")
                  .shift() ?
                  "c" : i, l.noexec,
                  l.attrs, l.timeout
               ), (n(a) || n(p)) &&
               o.load(function () {
                  c(), a && a(
                     l.origUrl,
                     s, r),
                  p && p(
                     l.origUrl,
                     s,
                     r),
                  S[l.url] =
                     2
               })))
      }

      function s(e, t) {
         function i(e, i) {
            if (e) {
               if (a(e)) i || (d =
                  function () {
                     var e = [].slice
                        .call(
                           arguments
                     );
                     u.apply(
                        this, e
                     ), h()
                  }), r(e, d, t,
                  0, p);
               else if (Object(e) ===
                  e)
                  for (l in s =
                     function () {
                        var t,
                           i =
                              0;
                        for (t in
                           e) e
                           .hasOwnProperty(
                              t
                        ) && i++;
                        return i
                     }(), e) e.hasOwnProperty(
                     l) && (!i && !--
                     s && (n(d) ?
                        d =
                        function () {
                           var e = []
                              .slice
                              .call(
                                 arguments
                           );
                           u.apply(
                              this,
                              e
                           ),
                           h()
                        } : d[l] =
                        function (
                           e) {
                           return function () {
                              var t = []
                                 .slice
                                 .call(
                                    arguments
                              );
                              e &&
                                 e
                                 .apply(
                                    this,
                                    t
                              ),
                              h()
                           }
                        }(u[l])
                     ), r(e[l],
                        d, t, l,
                        p))
            } else !i && h()
         }
         var s, l, p = !! e.test,
            c = e.load || e.both,
            d = e.callback || o,
            u = d,
            h = e.complete || o;
         i(p ? e.yep : e.nope, !! c),
         c && i(c)
      }
      var l, p, d = this.yepnope.loader;
      if (a(e)) r(e, 0, d, 0);
      else if (P(e))
         for (l = 0; l < e.length; l++)
            p = e[l], a(p) ? r(p, 0,
               d, 0) : P(p) ? u(p) :
               Object(p) === p &&
               s(p, d);
      else Object(e) === e && s(e, d)
   }, u.addPrefix = function (e, t) {
      T[e] = t
   }, u.addFilter = function (e) {
      C.push(e)
   }, u.errorTimeout = 1e4, null == t.readyState &&
      t.addEventListener && (t.readyState =
         "loading", t.addEventListener(
            "DOMContentLoaded", d =
            function () {
               t.removeEventListener(
                  "DOMContentLoaded",
                  d, 0), t.readyState =
                  "complete"
            }, 0)), e.yepnope = c(),
   e.yepnope.executeStack = s, e.yepnope
      .injectJs = function (e, i, n,
         a, l, p) {
         var c, d, h = t.createElement(
               "script"),
            a = a || u.errorTimeout;
         h.src = e;
         for (d in n) h.setAttribute(
            d, n[d]);
         i = p ? s : i || o, h.onreadystatechange =
            h.onload = function () {
               !c && r(h.readyState) &&
                  (c = 1, i(), h.onload =
                  h.onreadystatechange =
                  null)
         }, m(function () {
            c || (c = 1, i(1))
         }, a), l ? h.onload() : f.parentNode
            .insertBefore(h, f)
   }, e.yepnope.injectCss = function (
      e, i, n, a, r, l) {
      var p, a = t.createElement(
            "link"),
         i = l ? s : i || o;
      a.href = e, a.rel =
         "stylesheet", a.type =
         "text/css";
      for (p in n) a.setAttribute(p,
         n[p]);
      r || (f.parentNode.insertBefore(
         a, f), m(i, 0))
   }
}(this, document), Modernizr.load =
   function () {
      yepnope.apply(window, [].slice.call(
         arguments, 0))
}, $(document)
   .ready(function () {
      $("#submit")
         .click(function () {
            var e = $(
               "input[name=name]"),
               t = $(
                  "input[name=email]"
               ),
               i = $(
                  "input[name=website]"
               ),
               n = $(
                  "textarea[name=comment]"
               );
            if ("" == e.val())
               return e.addClass(
                  "hightlight"), !
                  1;
            if (e.removeClass(
                  "hightlight"),
               "" == t.val())
               return t.addClass(
                  "hightlight"), !
                  1;
            if (t.removeClass(
                  "hightlight"),
               "" == n.val())
               return n.addClass(
                  "hightlight"), !
                  1;
            n.removeClass(
               "hightlight");
            var a = "name=" + e.val() +
               "&email=" + t.val() +
               "&website=" + i.val() +
               "&comment=" +
               encodeURIComponent(
                  n.val());
            return $(".text")
               .attr(
                  "disabled", "true"),
            $(".loading")
               .show(),
            $.ajax({
               url: "/contact",
               type: "POST",
               data: a,
               cache: !1,
               success: function (
                  e) {
                  1 == e ?
                     ($(
                        ".form"
                     )
                     .fadeOut(
                        "slow"
                     ),
                     $(
                        ".done"
                     )
                     .fadeIn(
                        "slow"
                     )) :
                     alert(
                        "Sorry, unexpected error. Please try again later."
                  )
               }
            }), !1
         })
   }),
function () {}.call(this);
