(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{533:function(s,t,a){"use strict";a.r(t);var e=a(54),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"venus-worker用法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#venus-worker用法"}},[s._v("#")]),s._v(" venus-worker用法")]),s._v(" "),a("p",[s._v("venus-worker配合venus-sealer用于在多个机器上部署，sealing过程分成4个过程AddPiece,PreCommit1, PreCommit2, Commit2,通过worker的设置可以在不同的机器上运行sealing的不同阶段，这样能够更灵活的部署程序，利用不同机器的优势。\n这里给出一个测试网络venus-worker的搭建流程。")]),s._v(" "),a("h2",{attrs:{id:"需求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#需求"}},[s._v("#")]),s._v(" 需求")]),s._v(" "),a("h3",{attrs:{id:"机器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#机器"}},[s._v("#")]),s._v(" 机器")]),s._v(" "),a("ul",[a("li",[s._v("192.168.1.151 用于文件挂载")]),s._v(" "),a("li",[s._v("192.168.1.134 运行venus-worker")]),s._v(" "),a("li",[s._v("192.168.1.19  运行venus,venus-sealing,venus-miner")])]),s._v(" "),a("h3",{attrs:{id:"程序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#程序"}},[s._v("#")]),s._v(" 程序")]),s._v(" "),a("p",[s._v("运行此venus-worker测试流程需要一下几个程序。列出所需的项目地址，具体编译方式参考项目的README.md文件")]),s._v(" "),a("ol",[a("li",[s._v("venus-sealer "),a("a",{attrs:{href:"https://github.com/filecoin-project/venus-sealer",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/filecoin-project/venus-sealer"),a("OutboundLink")],1)]),s._v(" "),a("li",[s._v("venus-worker "),a("a",{attrs:{href:"https://github.com/filecoin-project/venus-worker",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/filecoin-project/venus-worker"),a("OutboundLink")],1)])]),s._v(" "),a("h2",{attrs:{id:"存储"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#存储"}},[s._v("#")]),s._v(" 存储")]),s._v(" "),a("p",[s._v("多机器运行需要共享存储，这里使用nfs来做共享存储。共享存储部署在192.168.1.151\n参考文档"),a("a",{attrs:{href:"https://docs.platform9.com/v5.0/openstack/tutorials-setup-nfs-server",target:"_blank",rel:"noopener noreferrer"}},[s._v("安装nfs"),a("OutboundLink")],1)]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("yum -y "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" rpcbind nfs-utils\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" /nfs "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("666")]),s._v(" /nfs\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/nfs *(rw,sync,no_root_squash,no_subtree_check,insecure)"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /etc/exports\nexportfs  -rv\nsystemctl start rpcbind\nsystemctl start nfs\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /var/lib/nfs/etab  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#检查nfs是否挂载成功")]),s._v("\n")])])]),a("h2",{attrs:{id:"环境准备"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#环境准备"}},[s._v("#")]),s._v(" 环境准备")]),s._v(" "),a("p",[s._v("文档默认已经部署完毕venus，venus-wallet和venus-messager")]),s._v(" "),a("h2",{attrs:{id:"启动venus-sealer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动venus-sealer"}},[s._v("#")]),s._v(" 启动venus-sealer")]),s._v(" "),a("p",[s._v("在机器192.168.1.19初始化并运行venus-sealer,运行后获取api及token用于venus-worker和venus-miner的配置")]),s._v(" "),a("h3",{attrs:{id:"挂载存储"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#挂载存储"}},[s._v("#")]),s._v(" 挂载存储")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" /nfs\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mount")]),s._v(" -t nfs "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".1.151:/nfs /nfs\n")])])]),a("h3",{attrs:{id:"运行venus-sealer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运行venus-sealer"}},[s._v("#")]),s._v(" 运行venus-sealer")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#初始化venus-sealer，这里不使用本地存储")]),s._v("\nvenus-sealer --network calibration init --actor"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("t01000 --sector-size"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("512M --no-local-storage --node-url "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("venus-api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" --node-token "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("venus-token"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" --messager-url http://"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("venus-message api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("/rpc/v0\n\nvenus-sealer run\n")])])]),a("h3",{attrs:{id:"attach存储"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#attach存储"}},[s._v("#")]),s._v(" attach存储")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("./venus-sealer storage attach --init --seal --store /nfs\n")])])]),a("h3",{attrs:{id:"获取api地址及token"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取api地址及token"}},[s._v("#")]),s._v(" 获取api地址及token")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" ~/.venussealer/api\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" ~/.venussealer/token\n")])])]),a("h2",{attrs:{id:"配置venus-worker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置venus-worker"}},[s._v("#")]),s._v(" 配置venus-worker")]),s._v(" "),a("p",[s._v("在192.168.1.134里面初始化并运行venus-worker")]),s._v(" "),a("h3",{attrs:{id:"挂载存储-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#挂载存储-2"}},[s._v("#")]),s._v(" 挂载存储")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" /nfs\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mount")]),s._v(" -t nfs "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".1.151:/nfs /nfs\n")])])]),a("h3",{attrs:{id:"运行venus-worker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运行venus-worker"}},[s._v("#")]),s._v(" 运行venus-worker")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用上面得到的sealer的api及token")]),s._v("\n./venus-worker run --no-local-storage --miner-addr /ip4/127.0.0.1/tcp/2345/http --miner-token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBbGxvdyI6WyJyZWFkIiwid3JpdGUiLCJzaWduIiwiYWRtaW4iXX0.gcqF6Pkm4bwGXzEx83NR7h8WPliEihJ3GyUKvhKryAQ\n")])])]),a("h3",{attrs:{id:"attach存储-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#attach存储-2"}},[s._v("#")]),s._v(" attach存储")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("./venus-worker storage attach  /nfs\n")])])]),a("h3",{attrs:{id:"检查是否正常"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#检查是否正常"}},[s._v("#")]),s._v(" 检查是否正常")]),s._v(" "),a("p",[s._v("运行"),a("code",[s._v("./venus-sealer sealing workers")]),s._v(", 得到类似下面的结果")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("Worker 8c814d19-ec36-4090-a03b-d4bc9314b39a, "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v(" lijunlongdeMacBook-Pro.local\n        CPU:  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("                                                                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("/12 core"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" use\n        RAM:  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v("                    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("69")]),s._v("% "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11.13")]),s._v(" GiB/16 GiB\n        VMEM: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("                         "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("61")]),s._v("% "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11.13")]),s._v(" GiB/18 GiB\nWorker a89d4156-d23e-44e6-b74b-8405e9496db0, "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v(" lijunlongdeMacBook-Pro.local\n        CPU:  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("                                                                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("/12 core"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" use\n        RAM:  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v("                        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("63")]),s._v("% "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.12")]),s._v(" GiB/16 GiB\n        VMEM: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("                             "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("56")]),s._v("% "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.12")]),s._v(" GiB/18 GiB\n\n")])])]),a("p",[s._v("运行"),a("code",[s._v("./venus-sealer storage list")]),s._v(", 得到类似下面的结果")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("7c046ce2-051f-4531-aa4d-76c1cd728acb:\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("######                                            ] 257.7 GiB/1.998 TiB 12%")]),s._v("\n        Unsealed: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" Sealed: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("17")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" Caches: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("17")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" Reserved: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" B\n        Weight: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" Use: Seal Store\n        Local: /nfs\n        URL: http://127.0.0.1:2345/remote\n        URL: http://127.0.0.1:3456/remote\n\n1dcfda12-fb3d-413c-b626-caf8b87e3b97:\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#############################                     ] 136.4 GiB/233.5 GiB 58%")]),s._v("\n        Unsealed: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" Sealed: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" Caches: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" Reserved: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" B\n        Use: ReadOnly   Local: /Users/lijunlong/.genesis-sectors\n        URL: http://127.0.0.1:2345/remote\n\n")])])]),a("h2",{attrs:{id:"pledge算力"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pledge算力"}},[s._v("#")]),s._v(" pledge算力")]),s._v(" "),a("p",[s._v("在venus-sealer运行"),a("code",[s._v("venus-sealer sectors pledge")]),s._v("命令进行算力积累. 运行"),a("code",[s._v("venus-sealer sectors list")]),s._v("查看sealing的进行状态。")]),s._v(" "),a("p",[a("em",[a("strong",[s._v("Note 如果RUST代码提示权限错误，可以加/var/tmp/filecoin-parents，/tmp/bellman.gpu.lock/bellman.priority.lock加777权限")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);