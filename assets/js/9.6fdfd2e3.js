(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{189:function(e,t,n){"use strict";n.r(t);var a=n(0),r=Object(a.a)({},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"join-the-public-testnet"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#join-the-public-testnet","aria-hidden":"true"}},[e._v("#")]),e._v(" Join the Public Testnet")]),e._v(" "),n("blockquote",[n("p",[e._v("Current Testnet."),n("br"),e._v("\nSee the "),n("a",{attrs:{href:"https://github.com/commercionetwork/testnets",target:"_blank",rel:"noopener noreferrer"}},[e._v("testnet repo"),n("OutboundLink")],1),e._v(" for information on the latest testnet, including the correct\nversion of the Commercio.network executable to use and the details about the genesis file.")])]),e._v(" "),n("blockquote",[n("p",[e._v("WARNING. You need to "),n("router-link",{attrs:{to:"/installation.html"}},[e._v("install Commercio.network")]),e._v(" before you go further.")],1)]),e._v(" "),n("h2",{attrs:{id:"starting-a-new-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#starting-a-new-node","aria-hidden":"true"}},[e._v("#")]),e._v(" Starting a new node")]),e._v(" "),n("blockquote",[n("p",[e._v("NOTE: If you ran a full node on previous testnet, please skip to "),n("a",{attrs:{href:"#upgrading-your-node"}},[e._v("Upgrading from Previous Testnet")]),e._v(".")])]),e._v(" "),n("p",[e._v("To start a new node, the mainnet instructions apply:")]),e._v(" "),n("ul",[n("li",[n("router-link",{attrs:{to:"/join-mainnet.html"}},[e._v("Join the mainnet")])],1),e._v(" "),n("li",[n("router-link",{attrs:{to:"/validator-setup.html"}},[e._v("Deploy a validator")])],1)]),e._v(" "),n("p",[e._v("The only difference is the executable version and the genesis file.\nSee the "),n("a",{attrs:{href:"https://github.com/commercionetwork/testnets",target:"_blank",rel:"noopener noreferrer"}},[e._v("testnet repo"),n("OutboundLink")],1),e._v(" for information on testnets, including\nthe correct version of the Commercio.network executable to use and the details about the genesis file.")]),e._v(" "),n("h2",{attrs:{id:"upgrading-your-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#upgrading-your-node","aria-hidden":"true"}},[e._v("#")]),e._v(" Upgrading your node")]),e._v(" "),n("p",[e._v("These instructions are for full nodes that have ran on previous versions of Commercio.network and would like to upgrade\nto the latest testnet.")]),e._v(" "),n("h3",{attrs:{id:"reset-the-data"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#reset-the-data","aria-hidden":"true"}},[e._v("#")]),e._v(" Reset the data")]),e._v(" "),n("p",[e._v("First, remove the outdated files and reset the current chain data.")]),e._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[e._v("rm")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$HOME")]),e._v("/.cnd/config/addrbook.json "),n("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$HOME")]),e._v("/.cnd/config/genesis.json\ncnd unsafe-reset-all\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br")])]),n("p",[e._v("Your node is now in a pristine state while keeping the original "),n("code",[e._v("priv_validator.json")]),e._v(" and "),n("code",[e._v("config.toml")]),e._v(".\nIf you had any sentry nodes or full nodes setup before, your node will still try to connect to them, but may fail if\nthey haven't also been upgraded.")]),e._v(" "),n("blockquote",[n("p",[e._v("WARNING.\nMake sure that every node has a unique "),n("code",[e._v("priv_validator.json")]),e._v(". Do not copy the "),n("code",[e._v("priv_validator.json")]),e._v(" from an old node to\nmultiple new nodes. Running two nodes with the same "),n("code",[e._v("priv_validator.json")]),e._v(" will cause you to double sign.")])]),e._v(" "),n("h2",{attrs:{id:"software-upgrade"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#software-upgrade","aria-hidden":"true"}},[e._v("#")]),e._v(" Software upgrade")]),e._v(" "),n("p",[e._v("Now it is time to upgrade the software:")]),e._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[e._v("cd")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$GOPATH")]),e._v("/src/github.com/commercionetwork/commercionetwork\n"),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" fetch --all "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" checkout master\n"),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" update_tools "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v("\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br")])]),n("blockquote",[n("p",[e._v("NOTE: If you have issues at this step, please check that you have the latest stable version of Go installed.")])]),e._v(" "),n("p",[e._v("Note we use "),n("code",[e._v("master")]),e._v(" here since it contains the latest stable release.\nSee the "),n("a",{attrs:{href:"https://github.com/commercionetwork/testnets",target:"_blank",rel:"noopener noreferrer"}},[e._v("testnet repo"),n("OutboundLink")],1),e._v(" for details on which version is needed for which\ntestnet, and the "),n("a",{attrs:{href:"https://github.com/Commercionetwork/Commercionetwork/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("chain release page"),n("OutboundLink")],1),e._v(" for details on\neach release.")]),e._v(" "),n("p",[e._v("Your full node has been cleanly upgraded!")])])},[],!1,null,null,null);t.default=r.exports}}]);