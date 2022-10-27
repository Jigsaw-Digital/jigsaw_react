"use strict";
exports.id = 545;
exports.ids = [545];
exports.modules = {

/***/ 5545:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ LayoutRenderer)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./constants/colours.js
var colours = __webpack_require__(9847);
;// CONCATENATED MODULE: ./components/section.js


const size = {
    full: "w-full",
    container: "container",
    "1/2": "w-1/2",
    "1/3": "w-1/3",
    "1/4": "w-1/4"
};
function Section(props) {
    console.log(props.block.attrs.data);
    let data = props.block.attrs.data;
    let size_class = size[data.jd_section_options_section_width];
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: `relative mx-auto overflow-hidden${size_class}`,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: `mx-auto `,
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "bg-primary_silver justify-center overflow-hidden",
                children: props.children
            })
        })
    });
}

;// CONCATENATED MODULE: ./components/layouts/layoutSpacing.js


function LayoutSpacing({ block  }) {
    let data = block.attrs.data;
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        style: {
            height: data.height + "px",
            backgroundColor: "green"
        }
    });
}

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./utils/utls.js
var utls = __webpack_require__(7107);
// EXTERNAL MODULE: external "react-type-animation"
var external_react_type_animation_ = __webpack_require__(4306);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/layouts/layoutHero.js








function LayoutHero({ block  }) {
    let data = block.attrs.data;
    return /*#__PURE__*/ jsx_runtime_.jsx(Section, {
        block: block,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: `overflow-hidden pt-20 pb-20 lg:pb-60 ${colours/* SectionColours.gray */.q.gray}`,
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                                    className: "text-4xl font-medium tracking-tight",
                                    children: [
                                        " ",
                                        data === null || data === void 0 ? void 0 : data.title
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                    className: "mt-6 text-lg",
                                    children: [
                                        " ",
                                        data === null || data === void 0 ? void 0 : data.description
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "mt-8 flex flex-wrap gap-x-6 gap-y-4",
                                    children: [
                                        ...Array(data.links)
                                    ].map((x, i)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: (0,utls/* abs_url */.v)(data[`links_${i}_link`].url),
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "inline-flex justify-center rounded-lg border py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-sm outline-2 outline-offset-2 transition-colors border-gray-300 hover:border-gray-400 active:bg-gray-100 active:text-gray-700/80",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: data[`links_${i}_link`].title
                                                })
                                            })
                                        }))
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "absolute left-1/2 top-4 h-[1026px] w-[1026px] -translate-x-1/3 stroke-gray-300/70 [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)] sm:top-16 sm:-translate-x-1/2 lg:-top-16 lg:ml-12 xl:-top-14 xl:ml-0",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                            viewBox: "0 0 1026 1026",
                                            fill: "none",
                                            "aria-hidden": "true",
                                            className: "absolute inset-0 h-full w-full animate-spin-slow",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                    d: "M1025 513c0 282.77-229.23 512-512 512S1 795.77 1 513 230.23 1 513 1s512 229.23 512 512Z",
                                                    stroke: "#D4D4D4",
                                                    "stroke-opacity": "0.7"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                    d: "M513 1025C230.23 1025 1 795.77 1 513",
                                                    stroke: "url(#:R65m:-gradient-1)",
                                                    "stroke-linecap": "round"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("defs", {
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("linearGradient", {
                                                        id: ":R65m:-gradient-1",
                                                        x1: "1",
                                                        y1: "513",
                                                        x2: "1",
                                                        y2: "1025",
                                                        gradientUnits: "userSpaceOnUse",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                                                "stop-color": "#06b6d4"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                                                offset: "1",
                                                                "stop-color": "#06b6d4",
                                                                "stop-opacity": "0"
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                            viewBox: "0 0 1026 1026",
                                            fill: "none",
                                            "aria-hidden": "true",
                                            className: "absolute inset-0 h-full w-full animate-spin-reverse-slower",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                    d: "M913 513c0 220.914-179.086 400-400 400S113 733.914 113 513s179.086-400 400-400 400 179.086 400 400Z",
                                                    stroke: "#D4D4D4",
                                                    "stroke-opacity": "0.7"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                    d: "M913 513c0 220.914-179.086 400-400 400",
                                                    stroke: "url(#:R65m:-gradient-2)",
                                                    "stroke-linecap": "round"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("defs", {
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("linearGradient", {
                                                        id: ":R65m:-gradient-2",
                                                        x1: "913",
                                                        y1: "513",
                                                        x2: "913",
                                                        y2: "913",
                                                        gradientUnits: "userSpaceOnUse",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                                                "stop-color": "#06b6d4"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                                                offset: "1",
                                                                "stop-color": "#06b6d4",
                                                                "stop-opacity": "0"
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "-mx-4 h-[448px] px-9 [mask-image:linear-gradient(to_bottom,white_85%,transparent)] sm:mx-0 lg:absolute lg:-inset-x-10 lg:-top-10 lg:-bottom-20 lg:h-auto lg:px-0 lg:pt-10 xl:-bottom-32",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "relative aspect-[366/729] mx-auto max-w-[366px]",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "absolute inset-y-[calc(1/729*100%)] right-[calc(5/729*100%)] left-[calc(7/729*100%)] rounded-[calc(58/366*100%)/calc(58/729*100%)] shadow-2xl"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "absolute top-[calc(23/729*100%)] left-[calc(23/366*100%)] grid h-[calc(686/729*100%)] w-[calc(318/366*100%)] transform grid-cols-1 overflow-hidden bg-gray-900 pt-[calc(23/318*100%)]"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                                viewBox: "0 0 366 729",
                                                "aria-hidden": "true",
                                                className: "pointer-events-none absolute inset-0 h-full w-full fill-gray-100",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                        fill: "#F2F2F2",
                                                        "fill-rule": "evenodd",
                                                        "clip-rule": "evenodd",
                                                        d: "M300.092 1c41.22 0 63.223 21.99 63.223 63.213V184.94c-.173.184-.329.476-.458.851.188-.282.404-.547.647-.791.844-.073 2.496.257 2.496 2.157V268.719c-.406 2.023-2.605 2.023-2.605 2.023a7.119 7.119 0 0 1-.08-.102v394.462c0 41.213-22.001 63.212-63.223 63.212h-95.074c-.881-.468-2.474-.795-4.323-.838l-33.704-.005-.049.001h-.231l-.141-.001c-2.028 0-3.798.339-4.745.843H66.751c-41.223 0-63.223-21.995-63.223-63.208V287.739c-.402-.024-2.165-.23-2.524-2.02v-.973A2.039 2.039 0 0 1 1 284.62v-47.611c0-.042.001-.084.004-.126v-.726c0-1.9 1.652-2.23 2.496-2.157l.028.028v-16.289c-.402-.024-2.165-.23-2.524-2.02v-.973A2.039 2.039 0 0 1 1 214.62v-47.611c0-.042.001-.084.004-.126v-.726c0-1.9 1.652-2.23 2.496-2.157l.028.028v-26.041a2.26 2.26 0 0 0 .093-.236l-.064-.01a3.337 3.337 0 0 1-.72-.12l-.166-.028A2 2 0 0 1 1 135.62v-24.611a2 2 0 0 1 1.671-1.973l.857-.143v-44.68C3.528 22.99 25.53 1 66.75 1h233.341ZM3.952 234.516a5.481 5.481 0 0 0-.229-.278c.082.071.159.163.228.278Zm89.99-206.304A4.213 4.213 0 0 0 89.727 24H56.864C38.714 24 24 38.708 24 56.852v618.296C24 693.292 38.714 708 56.864 708h250.272c18.15 0 32.864-14.708 32.864-32.852V56.852C340 38.708 325.286 24 307.136 24h-32.864a4.212 4.212 0 0 0-4.213 4.212v2.527c0 10.235-8.3 18.532-18.539 18.532H112.48c-10.239 0-18.539-8.297-18.539-18.532v-2.527Z"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                                        x: "154",
                                                        y: "29",
                                                        width: "56",
                                                        height: "5",
                                                        rx: "2.5",
                                                        fill: "#D4D4D4"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "/brackenwood.png",
                                                width: "336",
                                                height: "729",
                                                className: "rounded-2xl absolute top-[calc(16/729*100%)] left-[calc(23/366*100%)] grid h-[calc(686/729*100%)] w-[calc(318/366*100%)] transform grid-cols-1 overflow-hidden bg-[#17222d] pt-[calc(23/318*100%)]"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "/phone-frame.svg",
                                                width: "366",
                                                height: "729",
                                                className: "pointer-events-none absolute inset-0 h-full w-full"
                                            })
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "relative -mt-4 lg:col-span-7 lg:mt-0 xl:col-span-6",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "text-center text-sm font-semibold lg:text-left",
                                    children: data.links_with_images_title
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                    role: "list",
                                    className: "mx-auto mt-8 flex max-w-xl flex-wrap justify-center gap-x-10 gap-y-8 lg:mx-0 lg:justify-start",
                                    children: [
                                        ...Array(data.links_with_images)
                                    ].map((x, i)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: (0,utls/* abs_url */.v)(data[`links_with_images_${i}_link`].url),
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        alt: data[`links_with_images_${i}_link`].title,
                                                        src: data[`links_with_images_${i}_image`].url,
                                                        width: "82",
                                                        height: "32",
                                                        decoding: "async",
                                                        "data-nimg": "future",
                                                        className: "h-8",
                                                        loading: "lazy"
                                                    })
                                                })
                                            })
                                        }, `hero-image-link-${i}`))
                                })
                            ]
                        })
                    ]
                })
            })
        })
    });
}

;// CONCATENATED MODULE: ./components/layouts/layoutDebug.js

function LayoutDebug({ block  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("pre", {
        style: {
            outline: "1px solid yellow"
        },
        children: JSON.stringify(block, null, 2)
    });
}

;// CONCATENATED MODULE: ./components/layouts/layoutImage.js



function LayoutImage({ block  }) {
    let data = block.attrs.data;
    return /*#__PURE__*/ jsx_runtime_.jsx(Section, {
        block: block,
        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
            src: data.image.url,
            layout: "responsive",
            height: data.image.height,
            width: data.image.width,
            quality: 100
        })
    });
}

;// CONCATENATED MODULE: ./components/layouts/layoutText.js



function LayoutText({ block  }) {
    let data = block.attrs.data;
    return /*#__PURE__*/ jsx_runtime_.jsx(Section, {
        block: block,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "content",
            dangerouslySetInnerHTML: {
                __html: data.text
            }
        })
    });
}

// EXTERNAL MODULE: ./utils/wp.js
var wp = __webpack_require__(1266);
;// CONCATENATED MODULE: ./components/layouts/layoutPortfolio.js







function LayoutPortfolio({ block  }) {
    let data = block.attrs.data;
    const { 0: work , 1: setWork  } = (0,external_react_.useState)([]);
    (0,external_react_.useEffect)(()=>{
        async function fetchData() {
            try {
                const res = await (0,wp/* getPortfolio */.xp)();
                setWork(res);
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx(Section, {
        block: block,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: " bg-white dark:bg-shark-900 max-w-7xl mx-auto pt-20",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container mx-auto",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    role: "list",
                    className: "grid grid-cols-1 gap-x-14 gap-y-10 sm:grid-cols-2",
                    children: work.map((w)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "col-span-1 flex flex-col rounded-lg text-center cursor-pointer",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "absolute top-0 w-full h-full left-0",
                                            style: {
                                                "background-color": w.acf.work_colour
                                            }
                                        }, w.id),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "flex flex-1 flex-col z-1 transition-all ease-in-out hover:scale-105 py-10",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: (0,utls/* abs_url */.v)(w.link),
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "overflow-hidden h-[20rem]",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                            src: w.fimg_url.url,
                                                            layout: "responsive",
                                                            height: w.fimg_url.height,
                                                            width: w.fimg_url.width,
                                                            quality: 100,
                                                            alt: ""
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "text-left max-w-[75%]",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                            className: "my-2 text-shark-900 dark:text-white font-bold text-3xl",
                                            children: w.title.rendered
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "text-shark-900 dark:text-white text-md ",
                                            children: "flex flex-1 flex-col z-1 transition-all ease-in-out hover:scale-105 px-5 py-10 ease-in-out hover:scale-105."
                                        })
                                    ]
                                })
                            ]
                        }, w.id))
                })
            })
        })
    });
}

;// CONCATENATED MODULE: ./components/layoutRenderer.js







const components = {
    "acf/layout-hero": LayoutHero,
    "acf/layout-spacing": LayoutSpacing,
    "acf/layout-image": LayoutImage,
    "acf/layout-text": LayoutText,
    "acf/layout-portfolio": LayoutPortfolio
};
function LayoutRenderer({ blocks  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: [
            ...blocks
        ].map((block, index)=>{
            if (components.hasOwnProperty(block.blockName)) {
                let LayoutComponent = components[block.blockName];
                return /*#__PURE__*/ jsx_runtime_.jsx(LayoutComponent, {
                    block: block
                }, LayoutComponent + index);
            } else {
                if (block.blockName) {
                    return /*#__PURE__*/ jsx_runtime_.jsx(LayoutDebug, {
                        block: block
                    }, "Debug" + index);
                }
            }
        })
    });
    return /*#__PURE__*/ jsx_runtime_.jsx("pre", {
        children: JSON.stringify(blocks, null, 2)
    });
}


/***/ })

};
;