(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{372:function(s,t,a){"use strict";a.r(t);var r=a(42),e=Object(r.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"环境依赖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#环境依赖"}},[s._v("#")]),s._v(" 环境依赖")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("环境依赖")]),s._v(" "),a("th",[s._v("版本")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("CPU")]),s._v(" "),a("td",[s._v("4")])]),s._v(" "),a("tr",[a("td",[s._v("内存")]),s._v(" "),a("td",[s._v("8G")])]),s._v(" "),a("tr",[a("td",[s._v("Centos")]),s._v(" "),a("td",[s._v("7.x")])]),s._v(" "),a("tr",[a("td",[s._v("MySQL")]),s._v(" "),a("td",[s._v(">= 5.7")])]),s._v(" "),a("tr",[a("td",[s._v("Redis")]),s._v(" "),a("td",[s._v(">= 5.0")])])])]),s._v(" "),a("h1",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),a("h2",{attrs:{id:"install"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install"}},[s._v("#")]),s._v(" Install")]),s._v(" "),a("h3",{attrs:{id:"自动脚本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自动脚本"}},[s._v("#")]),s._v(" 自动脚本")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /opt\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -sSL https://github.com/jumpserver/jumpserver/releases/download/v2.8.2/quick_start.sh "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\n\n")])])]),a("h3",{attrs:{id:"手动执行-如果需要修改配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#手动执行-如果需要修改配置"}},[s._v("#")]),s._v(" 手动执行（如果需要修改配置）")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /opt\nyum -y "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://github.com/jumpserver/installer/releases/download/v2.8.2/jumpserver-installer-v2.8.2.tar.gz\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -xf jumpserver-installer-v2.8.2.tar.gz\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" jumpserver-installer-v2.8.2\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" config-example.txt\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改配置")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" config-example.txt\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装")]),s._v("\n./jmsctl.sh "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n")])])]),a("h2",{attrs:{id:"help"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#help"}},[s._v("#")]),s._v(" Help")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("./jmsctl.sh -h\n")])])]),a("h2",{attrs:{id:"upgrade"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#upgrade"}},[s._v("#")]),s._v(" Upgrade")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("./jmsctl.sh check_update\n")])])]),a("h1",{attrs:{id:"配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[s._v("#")]),s._v(" 配置")]),s._v(" "),a("h2",{attrs:{id:"默认账号密码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#默认账号密码"}},[s._v("#")]),s._v(" 默认账号密码")]),s._v(" "),a("p",[s._v("默认用户: admin  默认密码: admin")]),s._v(" "),a("h1",{attrs:{id:"其他"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[s._v("#")]),s._v(" 其他")]),s._v(" "),a("h2",{attrs:{id:"常用的sudo权限控制模板"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用的sudo权限控制模板"}},[s._v("#")]),s._v(" 常用的sudo权限控制模板")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("ALL,"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("/bin/bash,"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("/bin/tcsh,"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("/bin/su,"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("/usr/bin/passwd,"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("/usr/bin/passwd root,"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("/bin/vim /etc/sudoers,"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("/usr/bin/vim /etc/sudoers,"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("/usr/sbin/visudo,"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("/usr/bin/sudo -i,"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("/bin/bi /etc/ssh/*,"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("/bin/chmod "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("777")]),s._v(" /etc/*,"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("/bin/chmod "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("777")]),s._v(" *,"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("/bin/chmod "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("777")]),s._v(","),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("/bin/chmod -R "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("777")]),s._v(" *,"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("/bin/rm /*,"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("/bin/rm /,"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("/bin/rm -rf /,"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("/bin/rm -rf /*,"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("/bin/rm /etc,"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("/bin/rm -r /etc,"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("/bin/rm -rf /etc,"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("/bin/rm /etc/*,"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("/bin/rm -r /etc/*,"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("/bin/rm -rf /etc/*,"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("/bin/rm /root,"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("/bin/rm -r /root,"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("/bin/rm -rf /root,"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("/bin/rm /root/*,"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("/bin/rm -r /root/*,"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("/bin/rm -rf /root/*,"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("/bin/rm /bin,"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("/bin/rm -r /bin,"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("/bin/rm -rf /bin,"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("/bin/rm /bin/*,"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("/bin/rm -r /bin/*,"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("/bin/rm -rf /bin/*\n")])])]),a("h1",{attrs:{id:"错误"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#错误"}},[s._v("#")]),s._v(" 错误")]),s._v(" "),a("h2",{attrs:{id:"django-db-utils-operationalerror-1050-table-django-cas-ng-sessionticket-already-exists"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#django-db-utils-operationalerror-1050-table-django-cas-ng-sessionticket-already-exists"}},[s._v("#")]),s._v(" django.db.utils.OperationalError: (1050, \"Table 'django_cas_ng_sessionticket' already exists\")")]),s._v(" "),a("p",[s._v("修改数据库 innodb_large_prefix 为 ON，重新建库。")]),s._v(" "),a("h1",{attrs:{id:"参考链接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考链接"}},[s._v("#")]),s._v(" 参考链接")]),s._v(" "),a("p",[s._v("https://docs.jumpserver.org/zh/master/install/setup_by_fast/")])])}),[],!1,null,null,null);t.default=e.exports}}]);