(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{368:function(a,s,t){a.exports=t.p+"assets/img/error-message.e1f0dcdf.png"},369:function(a,s,t){a.exports=t.p+"assets/img/venus-sealer-start.12bc4f8d.jpg"},476:function(a,s,t){"use strict";t.r(s);var e=t(45),n=Object(e.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h3",{attrs:{id:"venus-wallet健康状态检查"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#venus-wallet健康状态检查"}},[a._v("#")]),a._v(" venus-wallet健康状态检查:")]),a._v(" "),e("h4",{attrs:{id:"_1、启动"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1、启动"}},[a._v("#")]),a._v(" 1、启动")]),a._v(" "),e("p",[a._v("可以看到venus-wallet连接到的gateway节点地址信息和venus-gateway建立连接的会话ID信息")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("wallet_event/listenevent.go:173\trestarting listenWalletRequestOnce\t"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"api hub"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/dns/gateway.filincubator.com/tcp/83/wss"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\nwallet_event/listenevent.go:200\tconnect to server 9ad36ec8-4a47-4f84-b618-e89cf03f6f38\t"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"api hub"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/dns/gateway.filincubator.com/tcp/83/wss"')]),a._v("\n")])])]),e("p",[a._v("但如果有类似如下的报错信息，则为异常启动:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v(" ERROR   wallet_event    wallet_event/listenevent.go:236 WalletSign error password not "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v("       "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"api hub"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/dns/gateway.filincubator.com/tcp/83/wss"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),e("p",[a._v("从日志报venus-wallet的密码没有设置，需要执行**./venus-wallet setpwd**来配置wallet的密码。")]),a._v(" "),e("h4",{attrs:{id:"_2、锁定钱包"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2、锁定钱包"}},[a._v("#")]),a._v(" 2、锁定钱包")]),a._v(" "),e("p",[a._v("如下执行以下命令，则可以上锁钱包，"),e("strong",[a._v("建议不要尝试")]),a._v(":")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("./venus-wallet  lock\nPassword:******\nwallet lock successfully\n")])])]),e("p",[a._v("此时，在日志中会有一条如下信息:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("WARN  rpc  go-jsonrpc@v1.1ec/handler.go:279  error "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("in")]),a._v(" RPC call to "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'Filecoin.Unlock'")]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" wallet already unlocked\n")])])]),e("p",[a._v("现在venus-wallet已经上锁了，这个会影响venus-sealer发送到venus-message的消息不会被签名,如下图:")]),a._v(" "),e("p",[e("img",{attrs:{src:t(368),alt:"error-message"}})]),a._v(" "),e("p",[a._v("可以执行如下命令，解锁venus-wallet，可以对venus-sealer发出来的消息进行签名后，由venus节点向链上发送")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("./venus-wallet  unlock\nPassword:******\nwallet unlock successfully\n")])])]),e("h3",{attrs:{id:"venus-sealer健康状态检查"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#venus-sealer健康状态检查"}},[a._v("#")]),a._v(" Venus-sealer健康状态检查:")]),a._v(" "),e("p",[a._v("主要可以从输出的日志中看到版本信息、节点同步状态、加载证明参数文件、本地存储id和venus-sealer连接到venus-gateway节点的会话建立等信息；")]),a._v(" "),e("p",[e("img",{attrs:{src:t(369),alt:""}})]),a._v(" "),e("h3",{attrs:{id:"venus-worker健康状态检查"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#venus-worker健康状态检查"}},[a._v("#")]),a._v(" venus-worker健康状态检查:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v(" INFO    main    venus-worker/main.go:158        Starting venus worker\n INFO    main    venus-worker/main.go:188        config: "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("~/.venusworker/config.toml ~/.venusworker "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("/ip4/10.108.2.42/tcp/6666 eyJhbGciOiJIUzaW4iXX0.4ZDslo6-8kD74"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("sqlite "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("    "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v(" 0s"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("worker.db"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n INFO    main    venus-worker/main.go:255        Remote version "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1.0")]),a._v(".2+api1.2.0\n WARN    paramfetch      go-paramfetch@v0.0.2-0.20210614165157-25a6c7769498/paramfetch.go:158    Assuming parameter files are ok. DO NOT USE IN PRODUCTION\n WARN    paramfetch      go-paramfetch@v0.0.2-0.20210614165157-25a6c7769498/paramfetch.go:158    Assuming parameter files are ok. DO NOT USE IN PRODUCTION\n INFO    paramfetch      go-paramfetch@v0.0.2-0.20210614165157-25a6c7769498/paramfetch.go:207    parameter and key-fetching complete\n INFO    main    venus-worker/main.go:306        Acceptable task types: "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("seal/v0/fetch seal/v0/commit/1 seal/v0/finalize seal/v0/commit/2"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n INFO    main    venus-worker/main.go:356        Opening "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("local")]),a._v(" storage"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" connecting to master\n INFO    main    venus-worker/main.go:408        Setting up control endpoint at "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("10.121")]),a._v(".2.214:5555\n INFO    main    venus-worker/main.go:507        Making sure no "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("local")]),a._v(" tasks are running\n INFO    main    venus-worker/main.go:530        Worker registered successfully, waiting "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),a._v(" tasks\n")])])]),e("p",[a._v("可以从venus-worker日志中，看到venus-worker启动后加载的配置文件目录，监控的端口号；以及在启动之后注册到venus-sealer上，等待获取任务。")]),a._v(" "),e("p",[a._v("如下输出以下信息，则说明venus-worker已经获得了新的任务:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("INFO filcrypto::proofs::api "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" seal_commit_phase2: start\nINFO filecoin_proofs::api::seal "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" seal_commit_phase2:start: SectorId"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1000054")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\nINFO filecoin_proofs::caches "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" trying parameters memory cache for: STACKED"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("34359738368")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\nINFO filecoin_proofs::caches "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" no params "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("in")]),a._v(" memory cache "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),a._v(" STACKED"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("34359738368")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\nINFO storage_proofs_core::parameter_cache "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" parameter "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" identifier "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),a._v(" cache: layered_drgporep::PublicParams"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" graph: stacked_graph::StackedGraph"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("expansion_degree: "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("8")]),a._v(" base_graph\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);