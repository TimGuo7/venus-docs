(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{381:function(s,t,a){"use strict";a.r(t);var e=a(17),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"how-to-start-the-local-net"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-start-the-local-net"}},[s._v("#")]),s._v(" How to start the local net")]),s._v(" "),a("blockquote",[a("p",[s._v("This article takes the establishment of a 2k network as an example to deploy a venus cluster on a CentOS 7.* system.")])]),s._v(" "),a("h2",{attrs:{id:"service-layer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#service-layer"}},[s._v("#")]),s._v(" Service layer")]),s._v(" "),a("p",[s._v("   Please refer to the document for component download and compilation：https://venus.filecoin.io/guide/How-To-Deploy-MingPool.html#pre-requisites")]),s._v(" "),a("h3",{attrs:{id:"venus-auth"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#venus-auth"}},[s._v("#")]),s._v(" venus-auth")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("nohup")]),s._v(" ./venus-auth run "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" auth.log "),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("&1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# token list")]),s._v("\n$ ./venus-auth token list\n \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# user list")]),s._v("\n$ ./venus-auth user list\n")])])]),a("h3",{attrs:{id:"venus-gateway"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#venus-gateway"}},[s._v("#")]),s._v(" venus-gateway")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("nohup")]),s._v(" ./venus-gateway --listen"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/ip4/0.0.0.0/tcp/45132 run --auth-url"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("http://127.0.0.1:8989 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" gateway.log "),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("&1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# wallet")]),s._v("\n$ ./venus-gateway  wallet list\n \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# miner")]),s._v("\n$ ./venus-gateway  miner list\n")])])]),a("h3",{attrs:{id:"venus"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#venus"}},[s._v("#")]),s._v(" venus")]),s._v(" "),a("ul",[a("li",[s._v("Generate pre-sealed files and data")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ ./venus seed pre-seal --sector-size "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2048")]),s._v(" --num-sectors "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n$ ./venus seed genesis new localnet.json\n$ ./venus seed genesis add-miner localnet.json ~/.genesis-sectors/pre-seal-t01000.json\n")])])]),a("blockquote",[a("p",[a("code",[s._v("seed pre-seal")]),s._v(" need root privileges, please execute under root user.")])]),s._v(" "),a("ul",[a("li",[s._v("Run venus")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("nohup")]),s._v(" ./venus daemon --make-genesis"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("devgen.car --genesis-template"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("localnet.json --network"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("2k --auth-url"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("http://127.0.0.1:8989 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" venus.log "),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("&1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n")])])]),a("blockquote",[a("p",[s._v("As a public service component, venus needs to modify the configuration file when it needs to monitor different IPs. "),a("code",[s._v(".venus/config.json")])])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"apiAddress"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/ip4/0.0.0.0/tcp/3453"')]),s._v(",\n")])])]),a("h3",{attrs:{id:"venus-message"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#venus-message"}},[s._v("#")]),s._v(" venus-message")]),s._v(" "),a("p",[s._v("   venus-auth Manage the jwt tokens used by other venus modules so that they can communicate with each other securely on the network. Generate tokens for shared modules.")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# --perm specifies admin, sign, wirte or read permission of the token generated")]),s._v("\n$ ./venus-auth token gen --perm admin "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("SHARED"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("SHARED_ADMIN_AUTH_TOKEN"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])])]),a("blockquote",[a("p",[s._v("SHARED is the name of the token, and the shared component can be started at will.")])]),s._v(" "),a("ul",[a("li",[s._v("Generate tokens for miners t01000 and venus-wallet")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ ./venus-auth user "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" --name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("test --miner"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("t01000\n$ ./venus-auth token gen --perm "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("write")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("USER_WRITE_AUTH_TOKEN"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])])]),a("blockquote",[a("p",[s._v("test is the cluster alias")])]),s._v(" "),a("p",[s._v("query token or user")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ ./venus-auth user list\nnumber: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nname: "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\nminer: f01000\nsourceType: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("   // miner:1\nstate "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("         // "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(": disable, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(": "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v("\ncomment: \ncreateTime: Thu, 05 Aug "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v(" 09:36:00 CST\nupdateTime: Thu, 05 Aug "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v(" 09:36:00 CST\n\n$ ./venus-auth token list\nnum     name            perm            createTime              token\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("       share-test      admin   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v("-08-05 09:27:56     eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoic2hhcmUtdGVzdCIsInBlcm0iOiJhZG1pbiIsImV4dCI6IiJ9.q3Euz4CwlqlLCTUciT4gkee6au_zhhyUAkyTXlkG51E\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("       "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("            "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("write")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v("-08-05 09:36:44     eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoidGVzdCIsInBlcm0iOiJ3cml0ZSIsImV4dCI6IiJ9.X8L5SWVzoRpr5X5hEOAh17n22zOgfkla7POva0zCihY\n")])])]),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("nohup")]),s._v(" ./venus-messager run "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--auth-url"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("http://127.0.0.1:8989 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--node-url"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/ip4/127.0.0.1/tcp/3453 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--gateway-url"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/ip4/127.0.0.1/tcp/45132 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--auth-token"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("SHARED_ADMIN_AUTH_TOKEN"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--db-type"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("sqlite "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" msg.log "),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("&1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n")])])]),a("blockquote",[a("p",[s._v("db-type also supports mysql, the configuration is as follows：")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("--db-type"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("mysql --mysql-dsn "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<USER>:<PASSWORD>@(127.0.0.1:3306)/venus_messager?parseTime=true&loc=Local&readTimeout=10s&writeTimeout=10s"')]),s._v("\n")])])]),a("h3",{attrs:{id:"venus-miner"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#venus-miner"}},[s._v("#")]),s._v(" venus-miner")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# init miner repo")]),s._v("\n./venus-miner init --nettype"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("2k --auth-api"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("http://127.0.0.1:8989 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n --gateway-api"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/ip4/127.0.0.1/tcp/45132\n --api"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/ip4/127.0.0.1/tcp/3453 --token"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("SHARED_ADMIN_AUTH_TOKEN"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# run ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("nohup")]),s._v(" ./venus-miner run --nettype"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("2k --nosync "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" miner.log "),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n\n$ ./venus-miner address state\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Addr"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"f01000"')]),s._v(",\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"IsMining"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" true,\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Err"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n                        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2021-08-05 09:45:06 failed to compute proof: no connections for this miner t01000"')]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),a("blockquote",[a("p",[s._v("Because we have not started venus-sealer at this time, we ignore this error. Here we stop the block production first, and wait for sealer to start successfully before starting.")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ ./venus-miner address stop f01000\nstop mining success.\n")])])]),a("h2",{attrs:{id:"genesis-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#genesis-node"}},[s._v("#")]),s._v(" Genesis node")]),s._v(" "),a("h3",{attrs:{id:"venus-wallet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#venus-wallet"}},[s._v("#")]),s._v(" venus-wallet")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("nohup")]),s._v(" ./venus-wallet run "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" wallet.log "),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("&1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# set password")]),s._v("\n$ ./venus-wallet setpwd\nPassword:******\nEnter Password again:******\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# import wallet")]),s._v("\n$ ./venus-wallet "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("import")]),s._v(" ~/.genesis-sectors/pre-seal-t01000.key\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查询")]),s._v("\n$ ./venus-wallet list\nt3sjhgun7xcklmyga6x3c5sq6pbncdlmrjmepfz7ms4fuqimtk4fida37dhq7kpq3tn7nyu5hpnn7mtp3a7lia\n")])])]),a("p",[s._v("Set up access to venus-gateway, provide signature service")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改`~/.venus_wallet/config.toml`")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("APIRegisterHub"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nRegisterAPI "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/ip4/127.0.0.1/tcp/45132"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nToken "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<USER_WRITE_AUTH_TOKEN>"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Cluster alias")]),s._v("\nSupportAccounts "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),a("p",[a("em",[a("strong",[s._v("Restart venus-wallet after saving, you need to unlock")])])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ ./venus-wallet unlock\n")])])]),a("p",[s._v("Check whether it is successful, query in the log of venus-gateway:")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v("-08-05T10:01:07.665+0800    INFO    event_stream    walletevent/wallet_conn_mgr.go:89       "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" wallet connection   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"channel"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"58309445-87da-4160-831a-44e5236ab3c7"')]),s._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"walletName"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test"')]),s._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"addrs"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"t3sjhgun7xcklmyga6x3c5sq6pbncdlmrjmepfz7ms4fuqimtk4fida37dhq7kpq3tn7nyu5hpnn7mtp3a7lia"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"support"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test"')]),s._v(":"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"signBytes"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"6VzoKBejPzmFp/DvJzSO16s5SziYZKYjU2l2EkDUKy0="')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v("-08-05T10:01:07.666+0800    INFO    event_stream    walletevent/wallet_event.go:79  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" new connections "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("58309445")]),s._v("-87da-4160-831a-44e5236ab3c7\n")])])]),a("p",[s._v("Or use the command query")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ ./venus-gateway wallet list\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Account"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test"')]),s._v(",\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"SupportAccounts"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n                        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test"')]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(",\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ConnectStates"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n                        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                                "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Addrs"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n                                        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"t3sjhgun7xcklmyga6x3c5sq6pbncdlmrjmepfz7ms4fuqimtk4fida37dhq7kpq3tn7nyu5hpnn7mtp3a7lia"')]),s._v("\n                                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(",\n                                "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ChannelId"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"58309445-87da-4160-831a-44e5236ab3c7"')]),s._v(",\n                                "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Ip"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"127.0.0.1:45138"')]),s._v(",\n                                "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"RequestCount"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(",\n                                "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"CreateTime"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2021-08-05T10:01:06.261321253+08:00"')]),s._v("\n                        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),a("blockquote",[a("p",[s._v("The above log indicates that the wallet registration service component is successful and can provide signature services.")])]),s._v(" "),a("h3",{attrs:{id:"venus-sealer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#venus-sealer"}},[s._v("#")]),s._v(" venus-sealer")]),s._v(" "),a("ul",[a("li",[s._v("init genesis-miner t01000")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ ./venus-sealer init --genesis-miner --actor"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("t01000 --sector-size"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2048")]),s._v(" --pre-sealed-sectors"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("~/.genesis-sectors --pre-sealed-metadata"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("~/.genesis-sectors/pre-seal-t01000.json --nosync --network"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("2k "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--node-url"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/ip4/127.0.0.1/tcp/3453 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--messager-url"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/ip4/127.0.0.1/tcp/39812 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--gateway-url"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/ip4/127.0.0.1/tcp/45132 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--auth-token"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("USER_WRITE_AUTH_TOKEN"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n--no-local-storage\n")])])]),a("ul",[a("li",[s._v("start")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("nohup")]),s._v(" ./venus-sealer run --nosync --network"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("2k "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" sealer.log "),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("&1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n\n$ ./venus-sealer info\nChain: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("sync behind"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("15h45m53s behind"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("basefee "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v(" pFIL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nSealer: t01000 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" KiB sectors"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nPower: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("40")]),s._v(" Ki / "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("40")]),s._v(" Ki "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100.0000")]),s._v("%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        Raw: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" KiB / "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" KiB "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100.0000")]),s._v("%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        Committed: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" KiB\n        Proving: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" KiB\nProjected average block win rate: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20024.16")]),s._v("/week "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("every 30s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nProjected block win with "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("99.9")]),s._v("% probability every 41s\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("projections DO NOT account "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" future network and miner growth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nSealer Balance:    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.242")]),s._v(" μFIL\n      PreCommit:  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n      Pledge:     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.192")]),s._v(" μFIL\n      Vesting:    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n      Available:  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.05")]),s._v(" μFIL\nMarket Balance:   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n       Locked:    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n       Available: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\nWorker Balance:   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("50000000")]),s._v(" FIL\nTotal Spendable:  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("50000000")]),s._v(" FIL\n\nSectors:\n        Total: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n        Proving: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n")])])]),a("p",[s._v("Check whether the registration of the service component is successful")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v("-08-05T10:44:01.748+0800    INFO    proof_stream    proofevent/proof_event.go:71    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" new connections 278c6798-b6ed-4062-8bde-06b8406ce06a "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" miner t01000\n")])])]),a("p",[s._v("or")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ ./venus-gateway miner list\nt01000\n")])])]),a("ul",[a("li",[s._v("start winningPoSt")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ ./venus-miner address start t01000\nstart mining success.\n")])])]),a("p",[s._v("View venus-miner log")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('2021-08-05T12:04:28.562+0800    INFO    miner   miner/minerwpp.go:88    GenerateWinningPoSt took 3.202841ms\n2021-08-05T12:04:28.562+0800    INFO    miner   miner/warmup.go:94      winning PoSt warmup successful  {"took": 0.00494326}\n2021-08-05T12:04:28.695+0800    INFO    miner   miner/multiminer.go:592 attempting to mine a block      {"tipset": ["bafy2bzacebmqknjl3nzdqsfalfe57u6nzzg5c5uphf3ctm4p2gvdgg33lhels"], "miner": "t01000"}\n2021-08-05T12:04:28.699+0800    INFO    miner   miner/multiminer.go:628 Time delta between now and our mining base: 61560s (nulls: 0), miner: t01000\n2021-08-05T12:04:28.705+0800    INFO    miner   miner/minerwpp.go:72    Computing WinningPoSt ;[{SealProof:5 SectorNumber:0 SealedCID:bagboea4b5abcbicxvd7mvaigrtsinxy33tjgg6yu24brzazyfwrtoe4ca7efhkav}]; [46 110 203 67 43 156 84 228 212 143 45 167 11 151 84 34 99 202 39 85 145 136 126 180 78 134 159 125 210 112 219 223]\n2021-08-05T12:04:28.707+0800    INFO    miner   miner/minerwpp.go:88    GenerateWinningPoSt took 1.802124ms\n2021-08-05T12:04:28.707+0800    INFO    miner   miner/multiminer.go:704 mined new block ( -> Proof)     {"took": 0.012012063, "miner": "t01000"}\n2021-08-05T12:04:28.707+0800    INFO    miner   miner/multiminer.go:385 mining compute end      {"number of wins": 1, "total miner": 1}\n2021-08-05T12:04:28.707+0800    INFO    miner   miner/multiminer.go:394 select message  {"tickets": 1}\n2021-08-05T12:04:28.715+0800    INFO    miner   miner/multiminer.go:420 mined new block {"cid": "bafy2bzacedyy2xr3bvsyfd42qzpeiprojza2yyt7wdggeawj2cmtisfjnn4lo", "height": "1", "miner": "t01000", "parents": ["t00"], "took": 0.020098632}\n')])])]),a("p",[s._v("So far, the construction of public components and genesis node has been completed.")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ ./venus chain ls\n2: (2021-08-05 14:09:55) [ bafy2bzacect5pja2prfkugczbdv2jfpbou4qr3edxxr6g7oo5bny6qklzgama: t01000, ]\n3: (2021-08-05 14:09:59) [ bafy2bzacedsl7eyaaiu7oifsdy6zpj2zotbcsnuml45hu5n4erdhygiyeua6s: t01000, ]\n4: (2021-08-05 14:10:03) [ bafy2bzacea42xioz3ki33uw7bbjkc5ydt4qs2j55ku2aqy2box4wjcgmzxtny: t01000, ]\n5: (2021-08-05 14:10:07) [ bafy2bzacecbmetsiwgms7sbukkkgzstpie5wsdwqsw5hwjqt6eqkuaq23wugs: t01000, ]\n6: (2021-08-05 14:10:11) [ bafy2bzacea3ojun5fx2rpplsnevvedhgxgpvwy7afmubcvhf463hdhlfpw4ye: t01000, ]\n7: (2021-08-05 14:10:15) [ bafy2bzaced4jqw2p5cejdtlfi7cq4o2treiynkp2lnhfpyss352qlbcdtknti: t01000, ]\n8: (2021-08-05 14:10:19) [ bafy2bzacecpmmlobk6qrzoclzu2duy6t4irvnqryyq4libvrlh4ekz3lmihhm: t01000, ]\n9: (2021-08-05 14:10:23) [ bafy2bzaceadvy5inclxdbtd2hsd72mijarkzz3rwpzznisf2yhlghushlooeg: t01000, ]\n10: (2021-08-05 14:10:27) [ bafy2bzacea3rn3zuiqgp5kxbam3fc3dqnoccktpsfwaukko3amxerpjud2zns: t01000, ]\n11: (2021-08-05 14:10:31) [ bafy2bzaceay2tzyd45k3e7tisbbp47gkjsrqs23jgl64wkj6jqryk4grrr7ss: t01000, ]\n")])])]),a("h2",{attrs:{id:"normal-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#normal-node"}},[s._v("#")]),s._v(" Normal node")]),s._v(" "),a("p",[s._v("   Please refer to the doc: https://venus.filecoin.io/guide/Using-venus-Shared-Modules.html#pre-requisites")]),s._v(" "),a("p",[s._v("   The only thing that needs to be explained is the problem of transferring Fil to ordinary node wallets: because the venus service component restricts Send messages, and the original fil of the 2k private network is in the genesis-wallet, a sync node is required.")]),s._v(" "),a("ul",[a("li",[s._v("run a normal venus node")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("nohup")]),s._v(" ./venus daemon --genesisfile"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("devgen.car --network"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("2k "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" venus.log "),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("&1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n")])])]),a("ul",[a("li",[s._v("Import Genesis Wallet")])]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ ./venus-wallet export t3sjhgun7xcklmyga6x3c5sq6pbncdlmrjmepfz7ms4fuqimtk4fida37dhq7kpq3tn7nyu5hpnn7mtp3a7lia\nPassword:*\n7b2254797065223a22626c73222c22507269766174654b6579223a224541326e6a463363326b4f467977323079564f574b66733371794d6451767a35334c667459497347456b673d227d\n\n$ ./venus wallet set-password\nPassword:*\nEnter Password again:*\nPassword set successfully \nYou must REMEMBER your password! Without the password, it's impossible to decrypt the key!\n\n$ ./venus wallet import\nipfs: Reading from /dev/stdin; send Ctrl-d to stop.\n\n")])])]),a("ul",[a("li",[s._v("Send")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v(" ./venus send "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("to"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("\n")])])]),a("p",[s._v("-- Common commands")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ ./venus wallet list\n\n$ ./venus wallet balance <wallet>\n\n$ ./venus wallet default\n$ ./venus wallet set-default <wallet>\n")])])]),a("blockquote",[a("p",[s._v("The venus transfer node also needs to be unlocked after restarting, otherwise the transfer cannot be made.")])])])}),[],!1,null,null,null);t.default=n.exports}}]);