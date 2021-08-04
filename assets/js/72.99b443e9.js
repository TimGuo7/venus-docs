(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{440:function(a,s,t){"use strict";t.r(s);var e=t(17),n=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h4",{attrs:{id:"一、服务器基础配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、服务器基础配置"}},[a._v("#")]),a._v(" 一、服务器基础配置:")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("systemctl stop firewalld \nsystemctl disbale firewalld\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("vim")]),a._v(" /etc/selinux/config\n\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("SELINUX")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("disabled //修改selinux为disabled\nsetenforce "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v(" //临时修改selinux状态\ngetenforce //查看selinux状态\n")])])]),t("h4",{attrs:{id:"二、安装相关软件包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、安装相关软件包"}},[a._v("#")]),a._v(" 二、安装相关软件包")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# rpm -Uvh https://repo.zabbix.com/zabbix/5.0/rhel/7/x86_64/zabbix-release-5.0-1.el7.noarch.rpm")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# yum clean all && yum makecache")]),a._v("\n\n// server端安装zabbix-server和zabbix-agent\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# yum install zabbix-server-mysql zabbix-agent -y")]),a._v("\n\n//安装zabbix默认的nginx\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# yum install centos-release-scl -y")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# yum install rh-php72-php-mysqlnd zabbix-nginx-conf-scl -y")]),a._v("\n")])])]),t("p",[a._v("修改zabbix的安装源配置文件，启用前端的源")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# vim /etc/yum.repos.d/zabbix.repo ")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("zabbix-frontend"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("name")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("Zabbix Official Repository frontend - "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$basearch")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("baseurl")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("http://repo.zabbix.com/zabbix/5.0/rhel/7/"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$basearch")]),a._v("/frontend\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("enabled")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" //此处改为1\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("gpgcheck")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("gpgkey")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("file:///etc/pki/rpm-gpg/RPM-GPG-KEY-ZABBIX-A14FE591\n")])])]),t("h4",{attrs:{id:"三、安装mysql"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、安装mysql"}},[a._v("#")]),a._v(" 三、安装MySQL")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" mysql-dir\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" mysql-dir\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v(" https://downloads.mysql.com/archives/get/p/23/file/mysql-5.7.30-1.el7.x86_64.rpm-bundle.tar\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" -zxvf mysql-5.7.32-1.el7.x86_64.rpm-bundle.tar\nyum "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" *.rpm -y\n")])])]),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("systemctl start mysqld\n")])])]),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cat")]),a._v(" /var/log/mysqld.log "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" root\n")])])]),t("p",[a._v("2021-07-26T10:50:49.538494Z 1 [Note] A temporary password is generated for root@localhost: "),t("strong",[a._v("20yyk:Ar67S;")])]),a._v(" "),t("p",[a._v("登录数据库:")]),a._v(" "),t("div",{staticClass:"language-mysql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("# mysql -uroot -p\nEnter password: 20yyk:Ar67S;\n")])])]),t("p",[a._v("配置数据库:")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" global "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("validate_password_policy")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" global "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("validate_password_length")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\nalter user "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'root'")]),a._v("@"),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'localhost'")]),a._v(" identified by "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'venus'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#修改root登录密码为venus")]),a._v("\n\nuse mysql"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\nupdate user "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("host")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'%'")]),a._v(" where user "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'root'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\ncreate user "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'zabbix'")]),a._v("@"),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'%'")]),a._v(" identified  by "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'123456'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\ngrant all privileges on zabbix.* to "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'zabbix'")]),a._v("@"),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'%'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\nflush privileges"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 创建zabbix所需的数据库")]),a._v("\ncreate database zabbix character "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" utf8 collate utf8_bin"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("p",[a._v("导入zabbix模版文件:")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("zcat /usr/share/doc/zabbix-server-mysql-5.0.14/create.sql.gz "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" mysql -uzabbix -p123456 zabbix\n")])])]),t("h4",{attrs:{id:"四、修改zabbix默认配置文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四、修改zabbix默认配置文件"}},[a._v("#")]),a._v(" 四、修改zabbix默认配置文件")]),a._v(" "),t("p",[a._v("1、修改连接数据库的密码:")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# vim /etc/zabbix/zabbix_server.conf")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("DBPassword")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("123456")]),a._v("\n")])])]),t("p",[a._v("2、修改nginx和所属地域")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# vim /etc/opt/rh/rh-php72/php-fpm.d/zabbix.conf")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 在第6行后边加上一个nginx")]),a._v("\nlisten.acl_users "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" apache,nginx\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 在第24行修改zabbix所属的地域")]),a._v("\nphp_value"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("date.timezone"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" Asia/shanghai\n")])])]),t("p",[a._v("3、配置监听端口和访问方式")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("vim")]),a._v(" /etc/opt/rh/rh-nginx116/nginx/conf.d/zabbix.conf\nserver "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        listen          "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("80")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("//取消注释\n        server_name     test.zabbix.com"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("//取消注释修改成IP或自己的域名\n")])])]),t("p",[a._v("4、如果是伪装域名则修改本地的hosts文件")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("vim")]),a._v(" /etc/hosts\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("192.168")]),a._v(".xx.xx test.zabbix.com\n\nwindow hosts文件也需要添加一下\nC:"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Windows"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("System32"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("drivers"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("etc"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("hosts\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("192.168")]),a._v(".xxx.xxx test.zabbix.com \n")])])]),t("p",[a._v("5、启动服务并设为开机自启")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 启动服务")]),a._v("\nsystemctl restart zabbix-server zabbix-agent rh-nginx116-nginx rh-php72-php-fpm\nsystemctl "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("enable")]),a._v(" zabbix-server zabbix-agent rh-nginx116-nginx rh-php72-php-fpm\n")])])]),t("p",[a._v("6、修改zabbix-agent的配置文件")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cat")]),a._v(" /etc/zabbix/zabbix_agentd.conf "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("egrep")]),a._v(" -v "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"^$|^#"')]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("PidFile")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/var/run/zabbix/zabbix_agentd.pid\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("LogFile")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/var/log/zabbix/zabbix_agentd.log\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("LogFileSize")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("Server")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("192.168")]),a._v(".88.11  //指定zabbix-server的ip地址\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("Hostname")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("venus-sealer\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("Include")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/etc/zabbix/zabbix_agentd.d/*.conf\n")])])]),t("h4",{attrs:{id:"四、配置zabbix监控主机"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四、配置zabbix监控主机"}},[a._v("#")]),a._v(" 四、配置zabbix监控主机")]),a._v(" "),t("p",[a._v("1、在浏览器输入zabbix-server的ip地址或者主机名\n"),t("img",{attrs:{src:"/01-zabbix-install.jpg",alt:""}}),a._v(" "),t("img",{attrs:{src:"/02-zabbix-install.jpg",alt:""}})]),a._v(" "),t("p",[a._v("2、配置数据库连接地址信息\n"),t("img",{attrs:{src:"/03-zabbix-config.jpg",alt:""}}),a._v(" "),t("img",{attrs:{src:"/04-zabbix-hostname.jpg",alt:""}}),a._v(" "),t("img",{attrs:{src:"/05-zabbix-all.jpg",alt:""}}),a._v(" "),t("img",{attrs:{src:"/06-zabbix-finished.jpg",alt:""}})]),a._v(" "),t("p",[a._v("3、登录到zabbix系统，默认的用户为Admin，密码为zabbix;注意Admin的A是大写字母\n"),t("img",{attrs:{src:"/07-zabbix-login.jpg",alt:""}}),a._v(" "),t("img",{attrs:{src:"/08-zabbix-dashboard.jpg",alt:""}})]),a._v(" "),t("p",[a._v("4、添加zabbix-agent主机\n"),t("img",{attrs:{src:"/09-zabbix-agent.jpg",alt:""}}),a._v(" "),t("img",{attrs:{src:"/10-zabbix-agent-add.jpg",alt:""}})]),a._v(" "),t("p",[a._v("5、查看zabbix监控机器的内存图\n"),t("img",{attrs:{src:"/11-zabbix-graphs.jpg",alt:""}}),a._v(" "),t("img",{attrs:{src:"/12-zabbix-memory.jpg",alt:""}})]),a._v(" "),t("p",[a._v("6、异常报警，需要处理的机器\n"),t("img",{attrs:{src:"/13-Alarm-information.jpg",alt:""}})])])}),[],!1,null,null,null);s.default=n.exports}}]);