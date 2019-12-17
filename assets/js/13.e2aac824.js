(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{215:function(t,e,i){"use strict";i.r(e);var a=i(0),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h1",{attrs:{id:"validator-hardware"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#validator-hardware"}},[t._v("#")]),t._v(" Validator hardware")]),t._v(" "),i("p",[t._v("This page contains three main hardware configurations that can be used in order to create a new Commercio.network\nvalidator machine. Please note that higher the effort you will put into creating a stable and robust machine and lower\nthe chances of getting slashed due to downtime.")]),t._v(" "),i("h2",{attrs:{id:"requirements"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[t._v("#")]),t._v(" Requirements")]),t._v(" "),i("ul",[i("li",[i("a",{attrs:{href:"#testnet"}},[t._v("Testnet")])]),t._v(" "),i("li",[i("a",{attrs:{href:"#mainnet"}},[t._v("Mainnet")])])]),t._v(" "),i("h2",{attrs:{id:"testnet"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#testnet"}},[t._v("#")]),t._v(" Testnet")]),t._v(" "),i("p",[t._v("While running a testnet node, you can use any hardware you want.")]),t._v(" "),i("p",[t._v("During this guide we will assume that you will use a simple cloud server, to avoid having to deal with\ncomplicated stuff that is not really necessary."),i("br"),t._v("\nDue to this reason, the following lines are written for Digital Ocean, but everything you will read is applicable to\nany other cloud provider like Amazon AWS, Google Cloud, Microsoft Azure, Alibaba Cloud or Scaleway.")]),t._v(" "),i("p",[t._v("Here's a friendly Digital Ocean $50 credit Coupon link: https://m.do.co/c/132ef6958ef7")]),t._v(" "),i("p",[t._v("For the sake of simplicity, we will assume you have selected the following DigitalOcean configuration.\nPlease not that this is just an example, but any configuration similar to this one will work perfectly fine.")]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",{staticStyle:{"text-align":"center"}},[t._v("Characteristic")]),t._v(" "),i("th",{staticStyle:{"text-align":"center"}},[t._v("Specification")])])]),t._v(" "),i("tbody",[i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Operative System")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[t._v("Ubuntu 18.04")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Number of CPUs")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[t._v("2")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("RAM")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[t._v("4GB")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("SSD")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[t._v("80GB")])])])]),t._v(" "),i("p",[t._v("Also, we need to make sure the following requirements are met:")]),t._v(" "),i("ul",[i("li",[t._v("Allow incoming connections on port "),i("code",[t._v("26656")])]),t._v(" "),i("li",[t._v("Have a static IP address")]),t._v(" "),i("li",[t._v("Have access to the root user")])]),t._v(" "),i("h2",{attrs:{id:"mainnet"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#mainnet"}},[t._v("#")]),t._v(" Mainnet")]),t._v(" "),i("h3",{attrs:{id:"low-level-not-recommended"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#low-level-not-recommended"}},[t._v("#")]),t._v(" Low level (Not Recommended)")]),t._v(" "),i("p",[t._v("This configuration is a basic level with low security level and low high availability configuration."),i("br"),t._v("\nIt is prone to intrusion and out of service in any moment due to hardware failure or network line problems.")]),t._v(" "),i("ul",[i("li",[t._v("1 Server with\n"),i("ul",[i("li",[i("strong",[t._v("CPU")]),t._v(": Bare minimum to support the last version of most common operative systems")]),t._v(" "),i("li",[i("strong",[t._v("Ram")]),t._v(": 32GB")]),t._v(" "),i("li",[i("strong",[t._v("Storage")]),t._v(": 1 x 1TB SSD")]),t._v(" "),i("li",[i("strong",[t._v("Power supply")]),t._v(": 1 power supply")]),t._v(" "),i("li",[i("strong",[t._v("Network")]),t._v(": 1 ethernet port with 100 Mbit speed capability")])])]),t._v(" "),i("li",[t._v("1 internet connection with 30/30Mbit bidirectional capability")]),t._v(" "),i("li",[t._v("1 Ledger Nano S")]),t._v(" "),i("li",[t._v("50,000 Commercio Tokens")])]),t._v(" "),i("h3",{attrs:{id:"mid-level-minimum-necessary"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#mid-level-minimum-necessary"}},[t._v("#")]),t._v(" Mid level  (Minimum Necessary)")]),t._v(" "),i("p",[t._v("This configuration guarantees a basic security level due to the fact that the validator node is not directly\nattached to the internet. It also guarantees a fair availability due to the double power supply and ethernet connection.")]),t._v(" "),i("ul",[i("li",[t._v("1 Server with\n"),i("ul",[i("li",[i("strong",[t._v("CPU")]),t._v(": Bare minimum to support the last version of most common operative systems")]),t._v(" "),i("li",[i("strong",[t._v("Ram")]),t._v(": 32GB")]),t._v(" "),i("li",[i("strong",[t._v("Storage")]),t._v(": 1 x 1TB SSD")]),t._v(" "),i("li",[i("strong",[t._v("Power supply")]),t._v(": 2 x power supplies (to prevent power down if one breaks)")]),t._v(" "),i("li",[i("strong",[t._v("Net")]),t._v(": 2 x Ethernet port with 100 Mbit speed capabilities")])])]),t._v(" "),i("li",[t._v("1 internet connection with 30/30Mbit bidirectional capability")]),t._v(" "),i("li",[t._v("1 firewall with an on-site VPN capability")]),t._v(" "),i("li",[t._v("1 sentry node configured on a major service provider (AWS, Azure, Google)")]),t._v(" "),i("li",[t._v("1 Ledger Nano S")]),t._v(" "),i("li",[t._v("1 UPS with 1000VA capacity for minimum resistance to power surges and out of power services")]),t._v(" "),i("li",[t._v("50,000 Commercio Tokens")])]),t._v(" "),i("h4",{attrs:{id:"nodes-configuration"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#nodes-configuration"}},[t._v("#")]),t._v(" Nodes configuration:")]),t._v(" "),i("h5",{attrs:{id:"validator-node"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#validator-node"}},[t._v("#")]),t._v(" Validator node")]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",[t._v("Config")]),t._v(" "),i("th",{staticStyle:{"text-align":"center"}},[t._v("Setting")])])]),t._v(" "),i("tbody",[i("tr",[i("td",[t._v("pex")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[t._v("false")])]),t._v(" "),i("tr",[i("td",[t._v("persistent_peers")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[t._v("private sentry node")])]),t._v(" "),i("tr",[i("td",[t._v("private_peer_ids")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[t._v("--")])]),t._v(" "),i("tr",[i("td",[t._v("addr_book_strict")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[t._v("false")])])])]),t._v(" "),i("h5",{attrs:{id:"private-sentry-node"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#private-sentry-node"}},[t._v("#")]),t._v(" Private sentry node")]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",[t._v("Config")]),t._v(" "),i("th",{staticStyle:{"text-align":"center"}},[t._v("Setting")])])]),t._v(" "),i("tbody",[i("tr",[i("td",[t._v("pex")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[t._v("true")])]),t._v(" "),i("tr",[i("td",[t._v("persistent_peers")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[t._v("validator node, own public node")])]),t._v(" "),i("tr",[i("td",[t._v("private_peer_ids")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[t._v("validator node id")])]),t._v(" "),i("tr",[i("td",[t._v("addr_book_strict")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[t._v("false")])])])]),t._v(" "),i("h5",{attrs:{id:"public-sentry-node"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#public-sentry-node"}},[t._v("#")]),t._v(" Public sentry node")]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",[t._v("Config")]),t._v(" "),i("th",{staticStyle:{"text-align":"center"}},[t._v("Setting")])])]),t._v(" "),i("tbody",[i("tr",[i("td",[t._v("pex")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[t._v("true")])]),t._v(" "),i("tr",[i("td",[t._v("persistent_peers")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[t._v("other public sentry nodes")])]),t._v(" "),i("tr",[i("td",[t._v("private_peer_ids")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[t._v("validator node id, private node id")])]),t._v(" "),i("tr",[i("td",[t._v("addr_book_strict")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[t._v("false")])])])]),t._v(" "),i("h3",{attrs:{id:"top-level-recommended"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#top-level-recommended"}},[t._v("#")]),t._v(" Top Level (Recommended)")]),t._v(" "),i("p",[t._v("This configuration ensures high availability and keeps the chances of getting slashed at the minimum possible. It works\nwith two different server to ensure that even if one fails completely the other one can kick in and replace it until\nthe first is properly fixed.")]),t._v(" "),i("ul",[i("li",[t._v("2 Servers\n"),i("ul",[i("li",[i("strong",[t._v("CPU")]),t._v(": Bare minimum to support the last version of most common operative systems")]),t._v(" "),i("li",[i("strong",[t._v("Ram")]),t._v(": 32GB")]),t._v(" "),i("li",[i("strong",[t._v("Storage")]),t._v(": 2/3 x 1TB SSD with RAID 1 or RAID 5 configuration")]),t._v(" "),i("li",[i("strong",[t._v("Power supply")]),t._v(": 2 x power supply (to prevent power down if one breaks)")]),t._v(" "),i("li",[i("strong",[t._v("Net")]),t._v(": 2 x ethernet port with 1000 Mbit speed capabilities")])])]),t._v(" "),i("li",[t._v("2 internet connections with 100/100Mbit bidirectional capability")]),t._v(" "),i("li",[t._v("2 dedicated switches")]),t._v(" "),i("li",[t._v("2 firewalls with an on-site VPN capability")]),t._v(" "),i("li",[t._v("1 AWS Load Balancer")]),t._v(" "),i("li",[t._v("2 sentry node configured on major service providers (AWS, Azure, Google)")]),t._v(" "),i("li",[t._v("2 Ledger Nano S (one per server)")]),t._v(" "),i("li",[t._v("50,000 Commercio Tokens")])])])}),[],!1,null,null,null);e.default=r.exports}}]);