(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{429:function(e,r,t){"use strict";t.r(r);var o=t(46),n=Object(o.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"q-a"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q-a"}},[e._v("#")]),e._v(" Q&A")]),e._v(" "),t("p",[e._v("Q&As are loosely broken into two categories, chain services (venus shared modules) and independent modules.")]),e._v(" "),t("h3",{attrs:{id:"chain-services-venus-shared-modules"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#chain-services-venus-shared-modules"}},[e._v("#")]),e._v(" chain services (venus shared modules)")]),e._v(" "),t("p",[e._v("**1)、**From venus node, "),t("code",[e._v("ERROR: must set url or token")]),e._v(", or")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token number"}},[e._v("2021")]),e._v("-09-08T11:05:33.796+0800 WARN cliutil apiinfo/apiinfo.go:125 parse libp2p address error , plz confirm this error failed to parse multiaddr "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('""')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(":")]),e._v(" empty multiaddr\n")])])]),t("p",[e._v("Please check if urls/tokens are configured properly. Urls are requried to follow formats defined in "),t("a",{attrs:{href:"https://github.com/multiformats/go-multiaddr",target:"_blank",rel:"noopener noreferrer"}},[e._v("multiaddr"),t("OutboundLink")],1),e._v(". Example: "),t("code",[e._v("--node-url=/ip4/127.0.0.1/tcp/3453")]),e._v(", don't do: "),t("code",[e._v("--node-url= /ip4/127.0.0.1/tcp/3453")]),e._v(".")]),e._v(" "),t("p",[e._v("**2)、**When connecting to venus from some shared modules, "),t("code",[e._v("connect to node failed cannot dialer to addr ws://192.168.10.73:3453/rpc/v0 due to unexpected EOF")])]),e._v(" "),t("p",[e._v("venus probably hasn't been configured to allow connection from other IP address. Example: "),t("code",[e._v("0.0.0.0:3453")]),e._v(", don't do: "),t("code",[e._v("198.172.0.3：3453")]),e._v(".")]),e._v(" "),t("p",[e._v("**3)、**From venus, "),t("code",[e._v("too many files open")]),t("a",{attrs:{href:"https://filecoinproject.slack.com/archives/CEHHJNJS3/p1631578830055000?thread_ts=1631506523.042700&cid=CEHHJNJS3",target:"_blank",rel:"noopener noreferrer"}},[e._v("*"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("Set the limit for number of open files to a larger number. "),t("code",[e._v("$ ulimit -n 1048576")])]),e._v(" "),t("p",[e._v("**4)、**From venus-messager or venus "),t("a",{attrs:{href:"https://filecoinproject.slack.com/archives/CEHHJNJS3/p1631597560068400?thread_ts=1631506523.042700&cid=CEHHJNJS3",target:"_blank",rel:"noopener noreferrer"}},[e._v("*"),t("OutboundLink")],1)]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("ERROR"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("2021")]),e._v("-09-14T01:30:03-04:00"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" listen "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("head")]),e._v(" changes errored: process new "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("head")]),e._v(" error: process apply failed got parent receipt failed amt load: failed to root: blockstore: block not found: amt load: failed to root: blockstore: block not found\n")])])]),t("p",[e._v("Synchronization issues. Check if venus is properly synced to latest height.")]),e._v(" "),t("p",[e._v("**5)、**From venus-messager, "),t("code",[e._v("WARN[2021-09-14T01:54:21-04:00] no broadcast node config")]),e._v(" "),t("a",{attrs:{href:"https://filecoinproject.slack.com/archives/CEHHJNJS3/p1631599790073100?thread_ts=1631506523.042700&cid=CEHHJNJS3",target:"_blank",rel:"noopener noreferrer"}},[e._v("*"),t("OutboundLink")],1),e._v("\nThis warning can be ignored.")]),e._v(" "),t("p",[e._v("**6)、**From venus-miner, "),t("code",[e._v("ERROR miner miner/baseinfo.go:355 [t01011] failed to compute winning post proof: no connections for this miner t01011")])]),e._v(" "),t("p",[e._v("The "),t("code",[e._v("venus-sealer")]),e._v(" for the miner id mentioned in the error is not properly connected to "),t("code",[e._v("venus-gateway")]),e._v(".")]),e._v(" "),t("p",[e._v("**7)、**From venus-miner, "),t("code",[e._v("ERROR miner miner/multiminer.go:168 create WinningPoStProver failed for [<empty>], err: getting sector size: not found resolve address")]),e._v(" "),t("a",{attrs:{href:"https://filecoinproject.slack.com/archives/CEHHJNJS3/p1631621284077800?thread_ts=1631506523.042700&cid=CEHHJNJS3",target:"_blank",rel:"noopener noreferrer"}},[e._v("*"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("Nertowrk doesn't support the sector size user specified during init. Check "),t("a",{attrs:{href:"https://network.filecoin.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("network.filecoin.io"),t("OutboundLink")],1),e._v(" for latest network configurations.")]),e._v(" "),t("p",[e._v("**8)、**From venus-messager, "),t("code",[e._v("ERROR[2021-09-14T08:54:29-04:00] listen head changes errored: RPC error (-32601): method 'Filecoin.ChainNotify' not supported in this mode (no out channel support)")]),e._v(" "),t("a",{attrs:{href:"https://filecoinproject.slack.com/archives/CEHHJNJS3/p1631624179079100?thread_ts=1631506523.042700&cid=CEHHJNJS3",target:"_blank",rel:"noopener noreferrer"}},[e._v("*"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("Choose either ws or wss as network protocol in url for use between shared modules. Urls are requried to follow formats defined in "),t("a",{attrs:{href:"https://github.com/multiformats/go-multiaddr",target:"_blank",rel:"noopener noreferrer"}},[e._v("multiaddr"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("**9)、**From venus or venus-messager, "),t("code",[e._v("bad handshake")]),e._v(" "),t("a",{attrs:{href:"https://filecoinproject.slack.com/archives/CEHHJNJS3/p1631626576083200?thread_ts=1631506523.042700&cid=CEHHJNJS3",target:"_blank",rel:"noopener noreferrer"}},[e._v("*"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("Check IP, ports, and token in venus-messager config file are properly configured. Urls are requried to follow formats defined in "),t("a",{attrs:{href:"https://github.com/multiformats/go-multiaddr",target:"_blank",rel:"noopener noreferrer"}},[e._v("multiaddr"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("**10)、**From venus, "),t("code",[e._v("Proof type 7 not allowed for new miner actors")]),e._v(" "),t("a",{attrs:{href:"https://filecoinproject.slack.com/archives/C02E95ZU5PG/p1631758710080500",target:"_blank",rel:"noopener noreferrer"}},[e._v("*"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("During sealer init, user chose wrong sector size for the network. Check "),t("a",{attrs:{href:"https://network.filecoin.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("network.filecoin.io"),t("OutboundLink")],1),e._v(" for latest network configurations.")]),e._v(" "),t("p",[e._v("**11)、**When sending a message, "),t("code",[e._v("Address txxxxxxx not exit")]),e._v(" "),t("a",{attrs:{href:"https://filecoinproject.slack.com/archives/C02E95ZU5PG/p1631762887093700",target:"_blank",rel:"noopener noreferrer"}},[e._v("*"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("Check if there is wallet addresses registered on gateway. Also see if connection between venus-messager and Venus-gateway is okay.")]),e._v(" "),t("h3",{attrs:{id:"venus-independent-modules"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#venus-independent-modules"}},[e._v("#")]),e._v(" venus independent modules")]),e._v(" "),t("p",[e._v("TBC")])])}),[],!1,null,null,null);r.default=n.exports}}]);