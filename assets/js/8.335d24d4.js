(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{367:function(s,e,v){s.exports=v.p+"assets/img/venus-components.cd1bdac1.png"},429:function(s,e,v){"use strict";v.r(e);var t=v(17),a=Object(t.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"venus项目依赖与升级"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#venus项目依赖与升级"}},[s._v("#")]),s._v(" venus项目依赖与升级")]),s._v(" "),t("p",[s._v("venus库对应的项目有: venus-auth,venus-gateway,venus-wallet,venus,venus-messager,venus-miner,venus-sealer.其依赖关系如下图所示:\n"),t("img",{attrs:{src:v(367),alt:"venus-components"}})]),s._v(" "),t("h2",{attrs:{id:"升级顺序"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#升级顺序"}},[s._v("#")]),s._v(" 升级顺序")]),s._v(" "),t("p",[s._v("   根据各项目的依赖关系图可知升级的顺序是：")]),s._v(" "),t("ol",[t("li",[s._v("venus-auth")]),s._v(" "),t("li",[s._v("venus，venus-gateway")]),s._v(" "),t("li",[s._v("venus-sealer，venus-messager，venus-wallet")])]),s._v(" "),t("ul",[t("li",[s._v("venus-miner不依赖其他组件,也不被其他组件依赖,可以随时升级.")])]),s._v(" "),t("p",[s._v("   对于依赖其他组件的项目,须被依赖项目升级完成后才能最终确定升级版本,需要将go.mod更新为依赖组件的最新版本号,如venus-sealer依赖venus,venus-messager,venus-gateway,其对应的go.mod应具有以下格式:")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("...\ngithub.com/filecoin-project/venus v0.9.7\ngithub.com/filecoin-project/venus-messager v1.1.0\n...\ngithub.com/ipfs-force-community/venus-gateway v1.1.0\n")])])]),t("h2",{attrs:{id:"升级模块"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#升级模块"}},[s._v("#")]),s._v(" 升级模块")]),s._v(" "),t("p",[s._v("   为了避免合并代码遗漏,在此记录venus每个组件升级时应查验的模块及代码目录.这里的升级特指lotus的升级,不考虑venus各组件因自身功能变化后的升级.")]),s._v(" "),t("h3",{attrs:{id:"venus-auth"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#venus-auth"}},[s._v("#")]),s._v(" venus-auth")]),s._v(" "),t("p",[s._v("   lotus升级无影响")]),s._v(" "),t("h3",{attrs:{id:"venus"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#venus"}},[s._v("#")]),s._v(" venus")]),s._v(" "),t("ul",[t("li",[s._v("固定参数: 如升级高度,bootstrap,proof-params,car文件等;\n"),t("ul",[t("li",[s._v("venus: fixtures/networks;fixtures/_assets;")]),s._v(" "),t("li",[s._v("lotus: build")])])]),s._v(" "),t("li",[s._v("api及命令行: 重要功能的api及cmd变化;")]),s._v(" "),t("li",[s._v("spec-actor:\n"),t("ul",[t("li",[s._v("venus: pkg/specactors")]),s._v(" "),t("li",[s._v("lotus: chain/actors")]),s._v(" "),t("li",[s._v("go.mod 引用升级")])])]),s._v(" "),t("li",[s._v("fork:\n"),t("ul",[t("li",[s._v("venus: pkg/fork")]),s._v(" "),t("li",[s._v("lotus: chain/stmgr")])])]),s._v(" "),t("li",[s._v("vm:一般抓住版本变量及升级高度的引用位置即可,如: network::Version13,UpgradeHyperdriveHeight,StateTreeVersion3;")]),s._v(" "),t("li",[s._v("产生随机数逻辑,包括: ChainRandomness和BeaconRandomness;")]),s._v(" "),t("li",[s._v("mpool: 消息选择逻辑及消息池进出逻辑变化;")]),s._v(" "),t("li",[s._v("区块验证: 包括消息验证,涉及同步;\n"),t("ul",[t("li",[s._v("venus: pkg/consensus")]),s._v(" "),t("li",[s._v("lotus: chain/sync.go")])])]),s._v(" "),t("li",[s._v("filecoin-ffi")]),s._v(" "),t("li",[s._v("comm-util: lotus升级后引入的libp2p, ipld,cbor等公共库的版本升级，升级相应go.mod")])]),s._v(" "),t("h3",{attrs:{id:"venus-gateway"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#venus-gateway"}},[s._v("#")]),s._v(" venus-gateway")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("go.mod")])]),s._v(" "),t("li",[t("p",[s._v("凡spec-actors的引用与lotus对比看有没有升级,如: github.com/filecoin-project/specs-actors/actors/runtime/proof --\x3e github.com/filecoin-project/specs-actors/v5/actors/runtime/proof")])]),s._v(" "),t("li",[t("p",[s._v("BuildVersion升级")])])]),s._v(" "),t("h3",{attrs:{id:"venus-wallet"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#venus-wallet"}},[s._v("#")]),s._v(" venus-wallet")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("go.mod")])]),s._v(" "),t("li",[t("p",[s._v("core/method.go init中加入最新的BuiltinActors")])])]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("var actors []rt.VMActor\n...\nactors = append(actors, exported5.BuiltinActors()...)\n")])])]),t("ul",[t("li",[s._v("BuildVersion升级")])]),s._v(" "),t("h3",{attrs:{id:"venus-messager"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#venus-messager"}},[s._v("#")]),s._v(" venus-messager")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("go.mod")])]),s._v(" "),t("li",[t("p",[s._v("初始参数或消息处理逻辑有无变化")])])]),s._v(" "),t("h3",{attrs:{id:"venus-sealer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#venus-sealer"}},[s._v("#")]),s._v(" venus-sealer")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("go.mod")])]),s._v(" "),t("li",[t("p",[s._v("cmd,特别是关于Sectors状态管理相关的")])]),s._v(" "),t("li",[t("p",[s._v("storage-sealing: 可能会有配置项和依赖注入等变化")]),s._v(" "),t("ul",[t("li",[s._v("venus-sealer: storage-sealing;")]),s._v(" "),t("li",[s._v("lotus: extern/storage-sealing")])])]),s._v(" "),t("li",[t("p",[s._v("BuildVersion")])]),s._v(" "),t("li",[t("p",[s._v("sector-storage: 可能会有配置项的变化")])]),s._v(" "),t("li",[t("p",[s._v("filecoin-ffi")])])]),s._v(" "),t("h3",{attrs:{id:"venus-miner"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#venus-miner"}},[s._v("#")]),s._v(" venus-miner")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("go.mod")])]),s._v(" "),t("li",[t("p",[s._v("mining 基本流程有无变化")])]),s._v(" "),t("li",[t("p",[s._v("filecoin-ffi")])])]),s._v(" "),t("p",[s._v("= spec-actor: chain/actors下代码升级")]),s._v(" "),t("h2",{attrs:{id:"验证逻辑"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#验证逻辑"}},[s._v("#")]),s._v(" 验证逻辑")]),s._v(" "),t("p",[s._v("   在升级前必须通过以下验证:")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("在 cali/nerpa 网络搭建集群能够正常增长算力并出块;")])]),s._v(" "),t("li",[t("p",[s._v("定制的lotus正常工作;")])]),s._v(" "),t("li",[t("p",[s._v("定制的lotus-miner接入venus服务能正常增长算力并出块")])]),s._v(" "),t("li",[t("p",[s._v("RPC API Response 与 lotus 一致;")])])])])}),[],!1,null,null,null);e.default=a.exports}}]);