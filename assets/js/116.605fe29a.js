(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{503:function(s,a,t){"use strict";t.r(a);var e=t(46),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"如何使用-venus-messager"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何使用-venus-messager"}},[s._v("#")]),s._v(" 如何使用 Venus Messager")]),s._v(" "),t("p",[s._v("messager 是用于管理本地消息的组件，目的是保存地址消息，管理消息状态以及控制推送消息的频率。")]),s._v(" "),t("h2",{attrs:{id:"开始"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开始"}},[s._v("#")]),s._v(" 开始")]),s._v(" "),t("h3",{attrs:{id:"克隆代码到你的机器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#克隆代码到你的机器"}},[s._v("#")]),s._v(" 克隆代码到你的机器")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/filecoin-project/venus-messager.git\n")])])]),t("h3",{attrs:{id:"安装依赖及构建"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装依赖及构建"}},[s._v("#")]),s._v(" 安装依赖及构建")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v("\n")])])]),t("h3",{attrs:{id:"启动messager"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动messager"}},[s._v("#")]),s._v(" 启动messager")]),s._v(" "),t("blockquote",[t("p",[s._v("./venus-messager --config=xx.toml run [command options]")])]),s._v(" "),t("ul",[t("li",[s._v("可以通过 "),t("code",[s._v("--config=xx.toml")]),s._v(" 来指定配置文件的目录，默认目录是 "),t("code",[s._v("./messager.toml")])]),s._v(" "),t("li",[s._v("启动时指定的配置文件不存在，则会生成对应名称的配置文件，并把设置的参数的值写到配置文件")]),s._v(" "),t("li",[s._v("启动时指定的配置文件存在，设置的参数的值会被使用，但不会写到配置文件，未设置的参数则使用配置文件中参数的值")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("options:\n   --auth-url       auth服务的URL\n   --auth-token     auth服务的token\n   --node-url       lotus/venus 节点的URL\n   --node-token     auth服务的URL\n   --db-type        使用的数据库类型，sqlite 或者 mysql\n   --sqlite-file    sqlite 数据库的文件，例子：~/sqlite/message.db\n   --mysql-dsn      mysql dsn，eg. user:password@"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:3306"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("/messager?parseTime"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("loc")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("Local\n   --gateway-url    gateway的URL\n   --gateway-token  gateway的token\n   --rate-limit-redis 限流使用的redis\n")])])]),t("h2",{attrs:{id:"命令行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#命令行"}},[s._v("#")]),s._v(" 命令行")]),s._v(" "),t("h3",{attrs:{id:"消息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#消息"}},[s._v("#")]),s._v(" 消息")]),s._v(" "),t("ol",[t("li",[s._v("查询消息")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("./venus-messager msg search --id"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("message id"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" or --cid"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("message cid"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])])]),t("ol",{attrs:{start:"2"}},[t("li",[s._v("列出消息")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("./venus-messager msg list\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 列出相同地址的消息")]),s._v("\n./venus-messager msg list --from "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("address"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])])]),t("ol",{attrs:{start:"3"}},[t("li",[s._v("更新一个已上链消息（但数据库的状态未更新）的状态")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("./venus-messager msg update_filled_msg --id"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("message id"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])])]),t("ol",{attrs:{start:"4"}},[t("li",[s._v("更新所有已上链消息（但数据库的状态未更新）的状态")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("./venus-messager msg update_all_filled_msg\n")])])]),t("ol",{attrs:{start:"5"}},[t("li",[s._v("等待消息的结果")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("./venus-messager msg "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wait")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("message id"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])])]),t("ol",{attrs:{start:"6"}},[t("li",[s._v("通过ID重新发布消息")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("./venus-messager msg republish "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("message id"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])])]),t("ol",{attrs:{start:"7"}},[t("li",[s._v("替换消息")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("./venus-messager msg replace --gas-feecap"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("gas-feecap"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" --gas-premium"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("gas-premium"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" --gas-limit"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("gas-limit"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" --auto"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("auto"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" --max-fee"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("max-fee"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("message-id"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# or")]),s._v("\n./venus-messager msg replace --gas-feecap"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("gas-feecap"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" --gas-premium"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("gas-premium"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" --gas-limit"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("gas-limit"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" --auto"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("auto"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" --max-fee"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("max-fee"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("from"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("nonce"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])])]),t("ol",{attrs:{start:"8"}},[t("li",[s._v("列出失败的消息，可能是消息签名失败或gas估算失败")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("./venus-messager msg list-fail\n")])])]),t("ol",{attrs:{start:"9"}},[t("li",[s._v("列出一段时间未链接的消息")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("./venus-messager msg list-blocked\n")])])]),t("ol",{attrs:{start:"10"}},[t("li",[s._v("手动标记异常的消息")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("./venus-messager msg mark-bad "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("message id"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])])]),t("h3",{attrs:{id:"地址"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#地址"}},[s._v("#")]),s._v(" 地址")]),s._v(" "),t("ol",[t("li",[s._v("查询地址")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("./venus-messager address search "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("address"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])])]),t("ol",{attrs:{start:"2"}},[t("li",[s._v("列出地址")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("./venus-messager address list\n")])])]),t("ol",{attrs:{start:"3"}},[t("li",[s._v("重置地址")])]),s._v(" "),t("blockquote",[t("p",[s._v("把地址的nonce设置为链上的nonce，并且全部未上链消息都被标记为"),t("code",[s._v("错误消息")])])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("./venus-messager reset "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("address"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])])]),t("ol",{attrs:{start:"4"}},[t("li",[s._v("冻结地址，不再接收推送的消息")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("./venus-messager address forbidden "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("address"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])])]),t("ol",{attrs:{start:"5"}},[t("li",[s._v("激活冻结的地址")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("./venus-messager address active "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("address"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])])]),t("ol",{attrs:{start:"6"}},[t("li",[s._v("设置地址一轮推送选择消息的最大数量")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("./venus-messager address set-sel-msg-num --num"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("address"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])])]),t("ol",{attrs:{start:"7"}},[t("li",[s._v("设置地址fee相关参数")])]),s._v(" "),t("blockquote",[t("p",[s._v("venus message address set-fee-params [command options] address")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# options")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# --gas-overestimation   估算gas的系数 (default: 0)")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# --max-feecap           单个消息愿意付出的最多 feecap (包括燃烧和支付给矿工, attoFIL/GasUnit)")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# --max-fee              单个消息最多花费 X attoFIL")]),s._v("\n\n./venus-messager address set-fee-params "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("address"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])])]),t("h3",{attrs:{id:"共享参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#共享参数"}},[s._v("#")]),s._v(" 共享参数")]),s._v(" "),t("ol",[t("li",[s._v("获取共享的参数")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("./venus-messager share-params get\n")])])]),t("ol",{attrs:{start:"2"}},[t("li",[s._v("设置共享的参数")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("./venus-messager share-params "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" --gas-over-estimation"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.25")]),s._v(" --max-feecap"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0"')]),s._v(" --max-fee"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"7000000000000000"')]),s._v(" --sel-msg-num"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v("\n")])])]),t("ol",{attrs:{start:"3"}},[t("li",[s._v("从数据库手动刷新共享参数")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("./venus-messager share-params refresh\n")])])]),t("h3",{attrs:{id:"节点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#节点"}},[s._v("#")]),s._v(" 节点")]),s._v(" "),t("ol",[t("li",[s._v("按名称搜索节点信息")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("./venus-messager node search "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])])]),t("ol",{attrs:{start:"2"}},[t("li",[s._v("添加节点信息")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("./venus-messager node "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" --name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("node-name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" --url"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("node-url"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" --token"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("node-token"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])])]),t("ol",{attrs:{start:"3"}},[t("li",[s._v("节点信息列表")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("./venus-messager node list\n")])])]),t("ol",{attrs:{start:"4"}},[t("li",[s._v("根据名称删除节点信息")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("./venus-messager node del "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])])]),t("h3",{attrs:{id:"日志"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#日志"}},[s._v("#")]),s._v(" 日志")]),s._v(" "),t("ol",[t("li",[s._v("设置日志级别")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 支持的级别：trace,debug,info,warn|warning,error,fatal,panic")]),s._v("\n./venus-messager log set-level\n")])])]),t("h3",{attrs:{id:"send-命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#send-命令"}},[s._v("#")]),s._v(" send 命令")]),s._v(" "),t("blockquote",[t("p",[s._v("发送消息\nvenus-messager send [command options] [targetAddress] [amount]")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("   options:\n   --from value         optionally specify the address to send\n   --gas-premium value  specify gas price to use "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" AttoFIL "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n   --gas-feecap value   specify gas fee cap to use "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" AttoFIL "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n   --gas-limit value    specify gas limit "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n   --method value       specify method to invoke "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n   --params-json value  specify invocation parameters "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" json\n   --params-hex value   specify invocation parameters "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" hex\n   --account value      optionally specify the account to send\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);