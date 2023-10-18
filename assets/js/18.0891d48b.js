(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{319:function(e,t,a){e.exports=a.p+"assets/img/usb11-chart.5b4b5b26.png"},415:function(e,t,a){e.exports=a.p+"assets/img/sonoma.384724f0.png"},466:function(e,t,a){"use strict";a.r(t);var r=a(25),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("p",[r("img",{attrs:{src:a(415),alt:""}})]),e._v(" "),r("p",[r("em",[e._v("Well here we are again, it's always such a pleasure~")])]),e._v(" "),r("p",[e._v("Apple has yet again dropped a bunch of models, continuing their journey on discontinuing Intel Macs. With the release of OpenCore Legacy Patcher v1.0.0, early support for macOS Sonoma has been implemented.")]),e._v(" "),r("h2",{attrs:{id:"versioning"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#versioning"}},[e._v("#")]),e._v(" Versioning")]),e._v(" "),r("p",[e._v("With v1.0.0, we'll be switching to a proper major, minor and bug fix system ("),r("a",{attrs:{href:"https://semver.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Semantic Versioning"),r("OutboundLink")],1),e._v("). This means the coming release will be version 1.0.0, and future releases plan to follow this scheme:")]),e._v(" "),r("ul",[r("li",[e._v("First digit: Major changes, including new OS support, API changes, and significant patch set changes, etc")]),e._v(" "),r("li",[e._v("Second digit: Minor changes, including incoming OS update fixes, minor patch set changes, etc")]),e._v(" "),r("li",[e._v("Third digit: Bug fixes, primarily hot fixes either due to a regression in prior release or resolving issues in already released OS updates")])]),e._v(" "),r("h2",{attrs:{id:"newly-dropped-hardware"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#newly-dropped-hardware"}},[e._v("#")]),e._v(" Newly dropped hardware")]),e._v(" "),r("ul",[r("li",[e._v("MacBook10,1:       MacBook (Retina, 12-inch, 2017)")]),e._v(" "),r("li",[e._v("MacBookPro14,1:    MacBook Pro (13-inch, 2017, Two Thunderbolt 3 ports)")]),e._v(" "),r("li",[e._v("MacBookPro14,2:    MacBook Pro (13-inch, 2017, Four Thunderbolt 3 Ports)")]),e._v(" "),r("li",[e._v("MacBookPro14,3:    MacBook Pro (15-inch, 2017)")]),e._v(" "),r("li",[e._v("iMac18,1:          iMac (21.5-inch, 2017)")]),e._v(" "),r("li",[e._v("iMac18,2:          iMac (Retina 4K, 21.5-inch, 2017)")]),e._v(" "),r("li",[e._v("iMac18,3:          iMac (Retina 5K, 27-inch, 2017)")])]),e._v(" "),r("h2",{attrs:{id:"current-status"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#current-status"}},[e._v("#")]),e._v(" Current status")]),e._v(" "),r("p",[e._v("OpenCore Legacy Patcher v1.0.0 will support Sonoma for all models normally supported by the Patcher, however some challenges remain. You can find information about them below.")]),e._v(" "),r("h2",{attrs:{id:"issues"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#issues"}},[e._v("#")]),e._v(" Issues")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#bluetooth"}},[e._v("Bluetooth")])]),e._v(" "),r("li",[r("a",{attrs:{href:"#t1-security-chip"}},[e._v("T1 Security chip")])]),e._v(" "),r("li",[r("a",{attrs:{href:"#usb-11-ohciuhci-support"}},[e._v("USB 1.1 (OHCI/UHCI) Support")])]),e._v(" "),r("li",[r("a",{attrs:{href:"#graphics-support-and-issues"}},[e._v("Graphics support and issues")])])]),e._v(" "),r("h3",{attrs:{id:"bluetooth"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#bluetooth"}},[e._v("#")]),e._v(" Bluetooth")]),e._v(" "),r("p",[e._v("Sometimes Bluetooth may not work after boot on pre-2012 models. Running NVRAM reset can alleviate it.")]),e._v(" "),r("p",[e._v("Dual boots may also bring the issue back even after the reset.")]),e._v(" "),r("h3",{attrs:{id:"t1-security-chip"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#t1-security-chip"}},[e._v("#")]),e._v(" T1 Security chip")]),e._v(" "),r("p",[e._v("Sonoma has removed support for T1 chips found in most 2016 and 2017 Macs. Therefore on these systems, the following will not function:")]),e._v(" "),r("ul",[r("li",[e._v("Enable or disable FileVault")]),e._v(" "),r("li",[e._v("Open the Password Settings window")]),e._v(" "),r("li",[e._v("Add fingerprints (if upgrading, existing fingerprints will be deleted)")]),e._v(" "),r("li",[e._v("Add cards to Apple Pay")])]),e._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),r("p",[e._v("Additionally, due to Sonoma no longer caring about T1, erasing the entire drive will remove the T1 firmware and it won't be reinstalled.")])]),e._v(" "),r("p",[e._v("No known solution to resolve supporting, a significant amount of time will be required to understand how both the T1 stack works, as well as where the core issue lies for support.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/dortania/OpenCore-Legacy-Patcher/issues/1103",target:"_blank",rel:"noopener noreferrer"}},[e._v("More information here"),r("OutboundLink")],1)]),e._v(" "),r("h3",{attrs:{id:"usb-1-1-ohci-uhci-support"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#usb-1-1-ohci-uhci-support"}},[e._v("#")]),e._v(" USB 1.1 (OHCI/UHCI) Support")]),e._v(" "),r("p",[e._v("For Penryn systems, pre-2013 Mac Pros and Xserve, USB 1.1 support was outright removed in macOS Ventura and naturally this continues in Sonoma.\nWhile USB 1.1 may seem unimportant, it handles many important devices on your system. These include:")]),e._v(" "),r("ul",[r("li",[e._v("Keyboard and Trackpad for laptops")]),e._v(" "),r("li",[e._v("IR Receivers")]),e._v(" "),r("li",[e._v("Bluetooth")])]),e._v(" "),r("p",[e._v("With OpenCore Legacy Patcher v0.6.0+, basic support has been implemented via Root Volume patching. However due to this, users will need to use a USB hub for installation and post-OS updates when patches are cleaned:")]),e._v(" "),r("p",[r("img",{attrs:{src:a(319),alt:""}})]),e._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[e._v("The following systems rely on USB 1.1")]),e._v(" "),r("ul",[r("li",[e._v("iMac10,x and older")]),e._v(" "),r("li",[e._v("Macmini3,1 and older")]),e._v(" "),r("li",[e._v("MacBook7,1 and older")]),e._v(" "),r("li",[e._v("MacBookAir3,1 and older")]),e._v(" "),r("li",[e._v("MacPro5,1 and older")]),e._v(" "),r("li",[e._v("Xserve 3,1 and older")])])]),e._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/dortania/OpenCore-Legacy-Patcher/issues/1021",target:"_blank",rel:"noopener noreferrer"}},[e._v("More information here"),r("OutboundLink")],1)]),e._v(" "),r("h3",{attrs:{id:"graphics-support-and-issues"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#graphics-support-and-issues"}},[e._v("#")]),e._v(" Graphics support and issues")]),e._v(" "),r("p",[e._v("This build includes both Legacy Metal and non-Metal patches for macOS Sonoma. Refer to the following links for more information about Legacy Metal and non-Metal support and their respective issues.")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/dortania/OpenCore-Legacy-Patcher/issues/1008",target:"_blank",rel:"noopener noreferrer"}},[e._v("Legacy Metal"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/dortania/OpenCore-Legacy-Patcher/issues/108",target:"_blank",rel:"noopener noreferrer"}},[e._v("Non-Metal"),r("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=s.exports}}]);