(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[73], {
    142: (e, t, r) => {
        Promise.resolve().then(r.bind(r, 4444)),
        Promise.resolve().then(r.bind(r, 9836)),
        Promise.resolve().then(r.t.bind(r, 7970, 23)),
        Promise.resolve().then(r.bind(r, 9089)),
        Promise.resolve().then(r.bind(r, 7293)),
        Promise.resolve().then(r.bind(r, 6212)),
        Promise.resolve().then(r.bind(r, 4962)),
        Promise.resolve().then(r.bind(r, 64)),
        Promise.resolve().then(r.bind(r, 6037))
    }
    ,
    4444: (e, t, r) => {
        "use strict";
        r.d(t, {
            default: () => l
        });
        var a = r(5155)
          , i = r(2115)
          , n = r(5565);
        let s = {
            src: "/_next/static/media/Menu.8eca42ca.webp",
            height: 508,
            width: 439,
            blurDataURL: "data:image/webp;base64,UklGRmIAAABXRUJQVlA4WAoAAAAQAAAABgAABwAAQUxQSBIAAAABD9D/iAgIBJLV8tcaIqL/oQFWUDggKgAAALABAJ0BKgcACAACQDglpAAC52DlcAAA/vbhv8T3z/V0knR9EE3YXAwAAA==",
            blurWidth: 7,
            blurHeight: 8
        };
        function l() {
            let e = (0,
            i.useCallback)( () => {
                let e = window.innerHeight / 1.3;
                window.scrollTo({
                    top: e,
                    behavior: "smooth"
                })
            }
            , []);
            return (0,
            a.jsx)("section", {
                children: (0,
                a.jsx)("div", {
                    className: "mx-auto max-w-6xl px-4 sm:px-6",
                    children: (0,
                    a.jsxs)("div", {
                        className: "py-12 md:py-20",
                        children: [(0,
                        a.jsxs)("div", {
                            className: "pb-12 text-center md:pb-20",
                            children: [(0,
                            a.jsx)("h1", {
                                className: "animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl",
                                "data-aos": "fade-up",
                                children: "LIGHTNING-X Mod Menu"
                            }), (0,
                            a.jsxs)("div", {
                                className: "mx-auto max-w-3xl",
                                children: [(0,
                                a.jsx)("p", {
                                    className: "mb-8 text-xl text-indigo-200/65",
                                    "data-aos": "fade-up",
                                    "data-aos-delay": 200,
                                    children: "Lightning-X is a free mod menu for Grand Theft Auto V, highly regarded in the current modding community. It boasts a user-friendly interface and a wide array of features designed to enhance your game play experience."
                                }), (0,
                                a.jsxs)("div", {
                                    className: "mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center",
                                    children: [(0,
                                    a.jsx)("div", {
                                        "data-aos": "fade-up",
                                        "data-aos-delay": 400,
                                        children: (0,
                                        a.jsx)("a", {
                                            className: "btn group mb-4 w-full bg-gradient-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto",
                                            href: "https://github.com/Lightning-X/Files/releases/download/Launcher/LXLauncher.exe",
                                            children: (0,
                                            a.jsxs)("span", {
                                                className: "relative inline-flex items-center",
                                                children: ["Download", (0,
                                                a.jsx)("span", {
                                                    className: "ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5",
                                                    children: "->"
                                                })]
                                            })
                                        })
                                    }), (0,
                                    a.jsx)("div", {
                                        "data-aos": "fade-up",
                                        "data-aos-delay": 600,
                                        children: (0,
                                        a.jsx)("button", {
                                            className: "btn relative w-full bg-gradient-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%] sm:ml-4 sm:w-auto",
                                            onClick: e,
                                            children: "Features"
                                        })
                                    })]
                                })]
                            })]
                        }), (0,
                        a.jsx)("div", {
                            className: "relative mx-auto max-w-3xl flex justify-center",
                            "data-aos": "fade-up",
                            "data-aos-delay": 800,
                            children: (0,
                            a.jsx)(n.default, {
                                className: "rounded-lg shadow-xl",
                                src: s,
                                alt: "Screenshot of the Lightning-X Mod Menu",
                                width: 400,
                                height: 400
                            })
                        })]
                    })
                })
            })
        }
    }
    ,
    9836: (e, t, r) => {
        "use strict";
        r.d(t, {
            default: () => n
        });
        var a = r(5155)
          , i = r(2115);
        function n(e) {
            let {children: t, className: r=""} = e
              , n = (0,
            i.useRef)(null)
              , s = function() {
                let[e,t] = (0,
                i.useState)({
                    x: 0,
                    y: 0
                });
                return (0,
                i.useEffect)( () => {
                    let e = e => {
                        t({
                            x: e.clientX,
                            y: e.clientY
                        })
                    }
                    ;
                    return window.addEventListener("mousemove", e),
                    () => {
                        window.removeEventListener("mousemove", e)
                    }
                }
                , []),
                e
            }()
              , l = (0,
            i.useRef)({
                x: 0,
                y: 0
            })
              , o = (0,
            i.useRef)({
                w: 0,
                h: 0
            })
              , [A,d] = (0,
            i.useState)([]);
            (0,
            i.useEffect)( () => {
                n.current && d(Array.from(n.current.children).map(e => e))
            }
            , []),
            (0,
            i.useEffect)( () => (c(),
            window.addEventListener("resize", c),
            () => {
                window.removeEventListener("resize", c)
            }
            ), [A]),
            (0,
            i.useEffect)( () => {
                u()
            }
            , [s]);
            let c = () => {
                n.current && (o.current.w = n.current.offsetWidth,
                o.current.h = n.current.offsetHeight)
            }
              , u = () => {
                if (n.current) {
                    let e = n.current.getBoundingClientRect()
                      , {w: t, h: r} = o.current
                      , a = s.x - e.left
                      , i = s.y - e.top;
                    a < t && a > 0 && i < r && i > 0 && (l.current.x = a,
                    l.current.y = i,
                    A.forEach(t => {
                        let r = -(t.getBoundingClientRect().left - e.left) + l.current.x
                          , a = -(t.getBoundingClientRect().top - e.top) + l.current.y;
                        t.style.setProperty("--mouse-x", "".concat(r, "px")),
                        t.style.setProperty("--mouse-y", "".concat(a, "px"))
                    }
                    ))
                }
            }
            ;
            return (0,
            a.jsx)("div", {
                className: r,
                ref: n,
                children: t
            })
        }
    }
    ,
    5565: (e, t, r) => {
        "use strict";
        r.d(t, {
            default: () => i.a
        });
        var a = r(4146)
          , i = r.n(a)
    }
    ,
    4146: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        function(e, t) {
            for (var r in t)
                Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: t[r]
                })
        }(t, {
            default: function() {
                return o
            },
            getImageProps: function() {
                return l
            }
        });
        let a = r(306)
          , i = r(666)
          , n = r(7970)
          , s = a._(r(5514));
        function l(e) {
            let {props: t} = (0,
            i.getImgProps)(e, {
                defaultLoader: s.default,
                imgConf: {
                    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                    path: "/_next/image",
                    loader: "default",
                    dangerouslyAllowSVG: !1,
                    unoptimized: !1
                }
            });
            for (let[e,r] of Object.entries(t))
                void 0 === r && delete t[e];
            return {
                props: t
            }
        }
        let o = n.Image
    }
    ,
    6212: (e, t, r) => {
        "use strict";
        r.r(t),
        r.d(t, {
            default: () => a
        });
        let a = {
            src: "/_next/static/media/Changelog.31c78148.png",
            height: 4096,
            width: 4096,
            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAHlBMVEVMaXH5+fn+/v7////+/v7////////+/v7///////+H8P1zAAAACnRSTlMABjdRZQ4oQhR/FZWcigAAAAlwSFlzAAALEwAACxMBAJqcGAAAADJJREFUeJw1y0kOACAMAkAKXfT/HzZo5DSBAACBm2CrjeJiuozc6jKUolGz9KYZ8h8BHBMoAImUUbcrAAAAAElFTkSuQmCC",
            blurWidth: 8,
            blurHeight: 8
        }
    }
    ,
    4962: (e, t, r) => {
        "use strict";
        r.r(t),
        r.d(t, {
            default: () => a
        });
        let a = {
            src: "/_next/static/media/Discord.a8c32a8f.png",
            height: 5e3,
            width: 5e3,
            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAM1BMVEVQXu3Y3flBUu739/1qaulPXe6Hkv1MaXFIWOtzgP5Vaulcc/9IWO3Gy/9mdf+stP+ss/8kWzsRAAAADXRSTlNd+Wj5DGj8AGr+DAtoJtz05gAAAAlwSFlzAAALEwAACxMBAJqcGAAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAA1SURBVHicNYtZDgAQEMXK4Bliuf9pRUJ/26IH6tRKEmKWMhGKy2xHoTxCGPkqd/er2o/ffgA6sQGdyMIOcQAAAABJRU5ErkJggg==",
            blurWidth: 8,
            blurHeight: 8
        }
    }
    ,
    64: (e, t, r) => {
        "use strict";
        r.r(t),
        r.d(t, {
            default: () => a
        });
        let a = {
            src: "/_next/static/media/File_Save.1ad924c8.png",
            height: 4096,
            width: 4096,
            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAP1BMVEUDgNE9nuEAc9BEaIjDwL6wuLzSx8FMaXEFbKp2n7gAfOOvqKSCenXp4dn///+Uxd1+tth1v/RKksYgnPEfnPGMKWJDAAAAD3RSTlNi+QtaZvn8ACJoXP1iYPyw5dGlAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAOklEQVR4nGNghwIGdg5OXh5mJnYGdgZBPm4hLhBDmJFRhAHEEGBlFQAz+NnY+EEMDk4WFk4OdgaYdgBFrAHhileX+wAAAABJRU5ErkJggg==",
            blurWidth: 8,
            blurHeight: 8
        }
    }
    ,
    9089: (e, t, r) => {
        "use strict";
        r.r(t),
        r.d(t, {
            default: () => a
        });
        let a = {
            src: "/_next/static/media/blurred-shape-gray.4be07fa5.svg",
            height: 668,
            width: 760,
            blurWidth: 0,
            blurHeight: 0
        }
    }
    ,
    7293: (e, t, r) => {
        "use strict";
        r.r(t),
        r.d(t, {
            default: () => a
        });
        let a = {
            src: "/_next/static/media/blurred-shape.089e0f40.svg",
            height: 668,
            width: 760,
            blurWidth: 0,
            blurHeight: 0
        }
    }
    ,
    6037: (e, t, r) => {
        "use strict";
        r.r(t),
        r.d(t, {
            default: () => a
        });
        let a = {
            src: "/_next/static/media/page-illustration.3cec8b53.svg",
            height: 594,
            width: 846,
            blurWidth: 0,
            blurHeight: 0
        }
    }
}, e => {
    var t = t => e(e.s = t);
    e.O(0, [970, 441, 517, 358], () => t(142)),
    _N_E = e.O()
}
]);
