(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[498], {
    2479: (e, t, n) => {
        Promise.resolve().then(n.bind(n, 1137))
    }
    ,
    1137: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => d
        });
        var o = n(5155)
          , i = n(2115)
          , a = n(1234)
          , r = n.n(a);
        n(9537);
        var s = n(5565);
        let c = {
            src: "/_next/static/media/LX.bbd99478.webp",
            height: 1024,
            width: 1024,
            blurDataURL: "data:image/webp;base64,UklGRrwAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSEEAAAAAAAAAAAAAAAAATUEHDUpOAAAh3mlx2h4AAABdkMBWAAAAAGzFmGUAAAAs1FtQzyUAAEQsBQIrPAAAAAAAAAAAAABWUDggVAAAABACAJ0BKggACAACQDglAE6AxQDhIzMIbvAA/vfHXo2Mq9BvnS4TkwTnu0kiRMsH48j8/pD/nQu3UR7LKuHdu2M4AWDUNWL548c3b/yzQXVZiAAAAA==",
            blurWidth: 8,
            blurHeight: 8
        }
          , u = {
            src: "/_next/static/media/footer-illustration.d3f176f6.svg",
            height: 378,
            width: 1076,
            blurWidth: 0,
            blurHeight: 0
        };
        function l() {
            return (0,
            o.jsx)("footer", {
                children: (0,
                o.jsxs)("div", {
                    className: "relative mx-auto max-w-6xl px-4 sm:px-6",
                    children: [(0,
                    o.jsx)("div", {
                        className: "pointer-events-none absolute bottom-0 left-1/2 -z-10 -translate-x-1/2",
                        "aria-hidden": "true",
                        children: (0,
                        o.jsx)(s.default, {
                            className: "max-w-none",
                            src: u,
                            width: 1076,
                            height: 378,
                            alt: "Footer illustration"
                        })
                    }), (0,
                    o.jsxs)("div", {
                        className: "flex items-center justify-center gap-4 py-8 sm:py-12 md:py-12 lg:py-12 xl:py-12",
                        children: [(0,
                        o.jsx)(s.default, {
                            className: "w-10",
                            src: c,
                            alt: "Logo"
                        }), (0,
                        o.jsxs)("p", {
                            className: "text-md text-gray-300/65",
                            children: ["\xa9 ", new Date().getFullYear(), " Lightning-X. All rights reserved."]
                        })]
                    })]
                })
            })
        }
        function d(e) {
            let {children: t} = e;
            return (0,
            i.useEffect)( () => {
                r().init({
                    once: !0,
                    disable: "phone",
                    duration: 600,
                    easing: "ease-out-sine"
                })
            }
            ),
            (0,
            o.jsxs)(o.Fragment, {
                children: [(0,
                o.jsx)("main", {
                    className: "relative flex grow flex-col",
                    children: t
                }), (0,
                o.jsx)(l, {})]
            })
        }
    }
    ,
    1234: function(e, t, n) {
        var o;
        o = function() {
            "use strict";
            var e = "undefined" != typeof window ? window : void 0 !== n.g ? n.g : "undefined" != typeof self ? self : {}
              , t = "Expected a function"
              , o = NaN
              , i = /^\s+|\s+$/g
              , a = /^[-+]0x[0-9a-f]+$/i
              , r = /^0b[01]+$/i
              , s = /^0o[0-7]+$/i
              , c = parseInt
              , u = "object" == typeof e && e && e.Object === Object && e
              , l = "object" == typeof self && self && self.Object === Object && self
              , d = u || l || Function("return this")()
              , m = Object.prototype.toString
              , f = Math.max
              , p = Math.min
              , b = function() {
                return d.Date.now()
            };
            function v(e) {
                var t = typeof e;
                return !!e && ("object" == t || "function" == t)
            }
            function g(e) {
                if ("number" == typeof e)
                    return e;
                if ("symbol" == typeof (t = e) || t && "object" == typeof t && "[object Symbol]" == m.call(t))
                    return o;
                if (v(e)) {
                    var t, n = "function" == typeof e.valueOf ? e.valueOf() : e;
                    e = v(n) ? n + "" : n
                }
                if ("string" != typeof e)
                    return 0 === e ? e : +e;
                e = e.replace(i, "");
                var u = r.test(e);
                return u || s.test(e) ? c(e.slice(2), u ? 2 : 8) : a.test(e) ? o : +e
            }
            var h = function(e, n, o) {
                var i = !0
                  , a = !0;
                if ("function" != typeof e)
                    throw TypeError(t);
                return v(o) && (i = "leading"in o ? !!o.leading : i,
                a = "trailing"in o ? !!o.trailing : a),
                function(e, n, o) {
                    var i, a, r, s, c, u, l = 0, d = !1, m = !1, h = !0;
                    if ("function" != typeof e)
                        throw TypeError(t);
                    function w(t) {
                        var n = i
                          , o = a;
                        return i = a = void 0,
                        l = t,
                        s = e.apply(o, n)
                    }
                    function y(e) {
                        var t = e - u;
                        return void 0 === u || t >= n || t < 0 || m && e - l >= r
                    }
                    function A() {
                        var e, t = b();
                        if (y(t))
                            return k(t);
                        c = setTimeout(A, (e = n - (t - u),
                        m ? p(e, r - (t - l)) : e))
                    }
                    function k(e) {
                        return c = void 0,
                        h && i ? w(e) : (i = a = void 0,
                        s)
                    }
                    function x() {
                        var e, t = b(), o = y(t);
                        if (i = arguments,
                        a = this,
                        u = t,
                        o) {
                            if (void 0 === c)
                                return l = e = u,
                                c = setTimeout(A, n),
                                d ? w(e) : s;
                            if (m)
                                return c = setTimeout(A, n),
                                w(u)
                        }
                        return void 0 === c && (c = setTimeout(A, n)),
                        s
                    }
                    return n = g(n) || 0,
                    v(o) && (d = !!o.leading,
                    r = (m = "maxWait"in o) ? f(g(o.maxWait) || 0, n) : r,
                    h = "trailing"in o ? !!o.trailing : h),
                    x.cancel = function() {
                        void 0 !== c && clearTimeout(c),
                        l = 0,
                        i = u = a = c = void 0
                    }
                    ,
                    x.flush = function() {
                        return void 0 === c ? s : k(b())
                    }
                    ,
                    x
                }(e, n, {
                    leading: i,
                    maxWait: n,
                    trailing: a
                })
            }
              , w = NaN
              , y = /^\s+|\s+$/g
              , A = /^[-+]0x[0-9a-f]+$/i
              , k = /^0b[01]+$/i
              , x = /^0o[0-7]+$/i
              , j = parseInt
              , O = "object" == typeof e && e && e.Object === Object && e
              , N = "object" == typeof self && self && self.Object === Object && self
              , E = O || N || Function("return this")()
              , z = Object.prototype.toString
              , C = Math.max
              , L = Math.min
              , M = function() {
                return E.Date.now()
            };
            function D(e) {
                var t = typeof e;
                return !!e && ("object" == t || "function" == t)
            }
            function S(e) {
                if ("number" == typeof e)
                    return e;
                if ("symbol" == typeof (t = e) || t && "object" == typeof t && "[object Symbol]" == z.call(t))
                    return w;
                if (D(e)) {
                    var t, n = "function" == typeof e.valueOf ? e.valueOf() : e;
                    e = D(n) ? n + "" : n
                }
                if ("string" != typeof e)
                    return 0 === e ? e : +e;
                e = e.replace(y, "");
                var o = k.test(e);
                return o || x.test(e) ? j(e.slice(2), o ? 2 : 8) : A.test(e) ? w : +e
            }
            var T = function(e, t, n) {
                var o, i, a, r, s, c, u = 0, l = !1, d = !1, m = !0;
                if ("function" != typeof e)
                    throw TypeError("Expected a function");
                function f(t) {
                    var n = o
                      , a = i;
                    return o = i = void 0,
                    u = t,
                    r = e.apply(a, n)
                }
                function p(e) {
                    var n = e - c;
                    return void 0 === c || n >= t || n < 0 || d && e - u >= a
                }
                function b() {
                    var e, n = M();
                    if (p(n))
                        return v(n);
                    s = setTimeout(b, (e = t - (n - c),
                    d ? L(e, a - (n - u)) : e))
                }
                function v(e) {
                    return s = void 0,
                    m && o ? f(e) : (o = i = void 0,
                    r)
                }
                function g() {
                    var e, n = M(), a = p(n);
                    if (o = arguments,
                    i = this,
                    c = n,
                    a) {
                        if (void 0 === s)
                            return u = e = c,
                            s = setTimeout(b, t),
                            l ? f(e) : r;
                        if (d)
                            return s = setTimeout(b, t),
                            f(c)
                    }
                    return void 0 === s && (s = setTimeout(b, t)),
                    r
                }
                return t = S(t) || 0,
                D(n) && (l = !!n.leading,
                a = (d = "maxWait"in n) ? C(S(n.maxWait) || 0, t) : a,
                m = "trailing"in n ? !!n.trailing : m),
                g.cancel = function() {
                    void 0 !== s && clearTimeout(s),
                    u = 0,
                    o = c = i = s = void 0
                }
                ,
                g.flush = function() {
                    return void 0 === s ? r : v(M())
                }
                ,
                g
            }
              , q = function() {};
            function H(e) {
                e && e.forEach(function(e) {
                    var t = Array.prototype.slice.call(e.addedNodes)
                      , n = Array.prototype.slice.call(e.removedNodes);
                    if (function e(t) {
                        var n = void 0
                          , o = void 0;
                        for (n = 0; n < t.length; n += 1)
                            if ((o = t[n]).dataset && o.dataset.aos || o.children && e(o.children))
                                return !0;
                        return !1
                    }(t.concat(n)))
                        return q()
                })
            }
            function _() {
                return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver
            }
            var W = {
                isSupported: function() {
                    return !!_()
                },
                ready: function(e, t) {
                    var n = window.document
                      , o = new (_())(H);
                    q = t,
                    o.observe(n.documentElement, {
                        childList: !0,
                        subtree: !0,
                        removedNodes: !0
                    })
                }
            }
              , B = function(e, t) {
                if (!(e instanceof t))
                    throw TypeError("Cannot call a class as a function")
            }
              , P = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var o = t[n];
                        o.enumerable = o.enumerable || !1,
                        o.configurable = !0,
                        "value"in o && (o.writable = !0),
                        Object.defineProperty(e, o.key, o)
                    }
                }
                return function(t, n, o) {
                    return n && e(t.prototype, n),
                    o && e(t, o),
                    t
                }
            }()
              , Q = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var o in n)
                        Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                }
                return e
            }
              , U = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i
              , I = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i
              , $ = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i
              , F = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;
            function R() {
                return navigator.userAgent || navigator.vendor || window.opera || ""
            }
            var X = new (function() {
                function e() {
                    B(this, e)
                }
                return P(e, [{
                    key: "phone",
                    value: function() {
                        var e = R();
                        return !(!U.test(e) && !I.test(e.substr(0, 4)))
                    }
                }, {
                    key: "mobile",
                    value: function() {
                        var e = R();
                        return !(!$.test(e) && !F.test(e.substr(0, 4)))
                    }
                }, {
                    key: "tablet",
                    value: function() {
                        return this.mobile() && !this.phone()
                    }
                }, {
                    key: "ie11",
                    value: function() {
                        return "-ms-scroll-limit"in document.documentElement.style && "-ms-ime-align"in document.documentElement.style
                    }
                }]),
                e
            }())
              , Y = function(e, t) {
                var n = void 0;
                return X.ie11() ? (n = document.createEvent("CustomEvent")).initCustomEvent(e, !0, !0, {
                    detail: t
                }) : n = new CustomEvent(e,{
                    detail: t
                }),
                document.dispatchEvent(n)
            }
              , G = function(e) {
                return e.forEach(function(e, t) {
                    var n, o, i, a, r, s;
                    return n = window.pageYOffset,
                    o = e.options,
                    i = e.position,
                    a = e.node,
                    e.data,
                    r = function() {
                        var t;
                        e.animated && ((t = o.animatedClassNames) && t.forEach(function(e) {
                            return a.classList.remove(e)
                        }),
                        Y("aos:out", a),
                        e.options.id && Y("aos:in:" + e.options.id, a),
                        e.animated = !1)
                    }
                    ,
                    void (o.mirror && n >= i.out && !o.once ? r() : n >= i.in ? e.animated || ((s = o.animatedClassNames) && s.forEach(function(e) {
                        return a.classList.add(e)
                    }),
                    Y("aos:in", a),
                    e.options.id && Y("aos:in:" + e.options.id, a),
                    e.animated = !0) : e.animated && !o.once && r())
                })
            }
              , V = function(e) {
                for (var t = 0, n = 0; e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop); )
                    t += e.offsetLeft - ("BODY" != e.tagName ? e.scrollLeft : 0),
                    n += e.offsetTop - ("BODY" != e.tagName ? e.scrollTop : 0),
                    e = e.offsetParent;
                return {
                    top: n,
                    left: t
                }
            }
              , K = function(e, t, n) {
                var o = e.getAttribute("data-aos-" + t);
                if (void 0 !== o) {
                    if ("true" === o)
                        return !0;
                    if ("false" === o)
                        return !1
                }
                return o || n
            }
              , J = function() {
                var e = document.querySelectorAll("[data-aos]");
                return Array.prototype.map.call(e, function(e) {
                    return {
                        node: e
                    }
                })
            }
              , Z = []
              , ee = !1
              , et = {
                offset: 120,
                delay: 0,
                easing: "ease",
                duration: 400,
                disable: !1,
                once: !1,
                mirror: !1,
                anchorPlacement: "top-bottom",
                startEvent: "DOMContentLoaded",
                animatedClassName: "aos-animate",
                initClassName: "aos-init",
                useClassNames: !1,
                disableMutationObserver: !1,
                throttleDelay: 99,
                debounceDelay: 50
            }
              , en = function() {
                return document.all && !window.atob
            }
              , eo = function() {
                var e, t;
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && (ee = !0),
                ee && (e = Z,
                t = et,
                e.forEach(function(e, n) {
                    var o, i, a, r, s, c = K(e.node, "mirror", t.mirror), u = K(e.node, "once", t.once), l = K(e.node, "id"), d = t.useClassNames && e.node.getAttribute("data-aos"), m = [t.animatedClassName].concat(d ? d.split(" ") : []).filter(function(e) {
                        return "string" == typeof e
                    });
                    t.initClassName && e.node.classList.add(t.initClassName),
                    e.position = {
                        in: function(e, t, n) {
                            var o = window.innerHeight
                              , i = K(e, "anchor")
                              , a = K(e, "anchor-placement")
                              , r = Number(K(e, "offset", a ? 0 : t))
                              , s = e;
                            i && document.querySelectorAll(i) && (s = document.querySelectorAll(i)[0]);
                            var c = V(s).top - o;
                            switch (a || n) {
                            case "top-bottom":
                                break;
                            case "center-bottom":
                                c += s.offsetHeight / 2;
                                break;
                            case "bottom-bottom":
                                c += s.offsetHeight;
                                break;
                            case "top-center":
                                c += o / 2;
                                break;
                            case "center-center":
                                c += o / 2 + s.offsetHeight / 2;
                                break;
                            case "bottom-center":
                                c += o / 2 + s.offsetHeight;
                                break;
                            case "top-top":
                                c += o;
                                break;
                            case "bottom-top":
                                c += o + s.offsetHeight;
                                break;
                            case "center-top":
                                c += o + s.offsetHeight / 2
                            }
                            return c + r
                        }(e.node, t.offset, t.anchorPlacement),
                        out: c && (o = e.node,
                        i = t.offset,
                        window.innerHeight,
                        a = K(o, "anchor"),
                        r = K(o, "offset", i),
                        s = o,
                        a && document.querySelectorAll(a) && (s = document.querySelectorAll(a)[0]),
                        V(s).top + s.offsetHeight - r)
                    },
                    e.options = {
                        once: u,
                        mirror: c,
                        animatedClassNames: m,
                        id: l
                    }
                }),
                G(Z = e),
                window.addEventListener("scroll", h(function() {
                    G(Z, et.once)
                }, et.throttleDelay)))
            }
              , ei = function() {
                if (Z = J(),
                er(et.disable) || en())
                    return ea();
                eo()
            }
              , ea = function() {
                Z.forEach(function(e, t) {
                    e.node.removeAttribute("data-aos"),
                    e.node.removeAttribute("data-aos-easing"),
                    e.node.removeAttribute("data-aos-duration"),
                    e.node.removeAttribute("data-aos-delay"),
                    et.initClassName && e.node.classList.remove(et.initClassName),
                    et.animatedClassName && e.node.classList.remove(et.animatedClassName)
                })
            }
              , er = function(e) {
                return !0 === e || "mobile" === e && X.mobile() || "phone" === e && X.phone() || "tablet" === e && X.tablet() || "function" == typeof e && !0 === e()
            };
            return {
                init: function(e) {
                    return et = Q(et, e),
                    Z = J(),
                    et.disableMutationObserver || W.isSupported() || (console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),
                    et.disableMutationObserver = !0),
                    et.disableMutationObserver || W.ready("[data-aos]", ei),
                    er(et.disable) || en() ? ea() : (document.querySelector("body").setAttribute("data-aos-easing", et.easing),
                    document.querySelector("body").setAttribute("data-aos-duration", et.duration),
                    document.querySelector("body").setAttribute("data-aos-delay", et.delay),
                    -1 === ["DOMContentLoaded", "load"].indexOf(et.startEvent) ? document.addEventListener(et.startEvent, function() {
                        eo(!0)
                    }) : window.addEventListener("load", function() {
                        eo(!0)
                    }),
                    "DOMContentLoaded" === et.startEvent && ["complete", "interactive"].indexOf(document.readyState) > -1 && eo(!0),
                    window.addEventListener("resize", T(eo, et.debounceDelay, !0)),
                    window.addEventListener("orientationchange", T(eo, et.debounceDelay, !0)),
                    Z)
                },
                refresh: eo,
                refreshHard: ei
            }
        }
        ,
        e.exports = o()
    },
    5565: (e, t, n) => {
        "use strict";
        n.d(t, {
            default: () => i.a
        });
        var o = n(4146)
          , i = n.n(o)
    }
    ,
    4146: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        function(e, t) {
            for (var n in t)
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
        }(t, {
            default: function() {
                return c
            },
            getImageProps: function() {
                return s
            }
        });
        let o = n(306)
          , i = n(666)
          , a = n(7970)
          , r = o._(n(5514));
        function s(e) {
            let {props: t} = (0,
            i.getImgProps)(e, {
                defaultLoader: r.default,
                imgConf: {
                    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                    path: "/_next/image",
                    loader: "default",
                    dangerouslyAllowSVG: !1,
                    unoptimized: !1
                }
            });
            for (let[e,n] of Object.entries(t))
                void 0 === n && delete t[e];
            return {
                props: t
            }
        }
        let c = a.Image
    }
    ,
    9537: () => {}
}, e => {
    var t = t => e(e.s = t);
    e.O(0, [96, 970, 441, 517, 358], () => t(2479)),
    _N_E = e.O()
}
]);
