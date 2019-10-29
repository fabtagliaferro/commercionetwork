(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{217:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"updating-a-validator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#updating-a-validator"}},[t._v("#")]),t._v(" Updating a validator")]),t._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("If you are a new validator you need follow the "),a("router-link",{attrs:{to:"/nodes/validator-node-installation.html"}},[a("em",[t._v('"Becoming a validator"')]),t._v(" procedure")]),t._v("."),a("br"),t._v(" "),a("strong",[t._v("DO NOT USE THIS UPDATE PROCEDURES")])],1)]),t._v(" "),a("p",[t._v("This section describes the procedure that needs to be followed in order to update a validator node from one\nversion to another.")]),t._v(" "),a("p",[t._v("Please note that each chain version has an update type associated to it.\nIn order to know which one is associated to the chain version you are currently running, please do the following:")]),t._v(" "),a("ol",[a("li",[t._v("Go to our "),a("a",{attrs:{href:"https://github.com/commercionetwork/chains",target:"_blank",rel:"noopener noreferrer"}},[t._v("chains repo"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("Enter the folder of you current chain's version")]),t._v(" "),a("li",[t._v("Open the "),a("code",[t._v(".data")]),t._v(" file")]),t._v(" "),a("li",[t._v("Read the  value associated to the "),a("code",[t._v("Update type")]),t._v(" field.")])]),t._v(" "),a("p",[t._v("Once you know the update type, please follow the related procedure:")]),t._v(" "),a("ul",[a("li",[t._v("Update type "),a("a",{attrs:{href:"#update-type-1---hard-fork"}},[a("code",[t._v("1 - Hard fork")])])]),t._v(" "),a("li",[t._v("Update type "),a("a",{attrs:{href:"#update-type-2---soft-fork"}},[a("code",[t._v("2 - Soft fork")])]),t._v(" (WIP)")]),t._v(" "),a("li",[t._v("Update type "),a("a",{attrs:{href:"#update-type-3---binaries-update"}},[a("code",[t._v("3 - Binaries update")])]),t._v(" (WIP)")])]),t._v(" "),a("h2",{attrs:{id:"update-type-1-hard-fork"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#update-type-1-hard-fork"}},[t._v("#")]),t._v(" Update type 1 - Hard fork")]),t._v(" "),a("p",[t._v("The procedure to follow in order to upgrade the chain using this update type is very similar to the\n"),a("router-link",{attrs:{to:"/nodes/validator-node-installation.html"}},[t._v("installation procedure")]),t._v(".")],1),t._v(" "),a("p",[t._v("Due to this procedure being a "),a("strong",[t._v("hard fork")]),t._v(", this means that any of the current chain data will be completely wiped\nand a new chain will start from scratch. However, if you want you can create a copy of the current chain state in order\nto use it for testing purposes.")]),t._v(" "),a("h3",{attrs:{id:"_1-wipe-the-current-chain-state"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-wipe-the-current-chain-state"}},[t._v("#")]),t._v(" 1. Wipe the current chain state")]),t._v(" "),a("p",[t._v("To start the procedure we need to kill the service running the chain:")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("systemctl stop cnd\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("pkill")]),t._v(" cnd\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("Now, we need to wipe the chain state. In order to do so, you have two options:")]),t._v(" "),a("ol",[a("li",[t._v("Backup your data"),a("br"),t._v(" "),a("code",[t._v("cp -r ~/.cnd ~/.cnd.back")])]),t._v(" "),a("li",[t._v("Delete the data without a backup\n"),a("code",[t._v("rm -rf ~/.cnd")])])]),t._v(" "),a("h3",{attrs:{id:"_2-start-a-new-chain"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-start-a-new-chain"}},[t._v("#")]),t._v(" 2. Start a new chain")]),t._v(" "),a("p",[t._v("Once you have properly cleaned up the previous chain state, you are ready to start the new chain version."),a("br"),t._v("\nTo do so, please refer to the "),a("router-link",{attrs:{to:"/nodes/full-node-installation.html"}},[t._v("full node installation guide")]),t._v(" but remember to apply the\nfollowing changes to the procedure described there:")],1),t._v(" "),a("p",[a("strong",[t._v("1.")]),t._v(" Inside the "),a("router-link",{attrs:{to:"/nodes/full-node-installation.html#1-installing-the-software-requirements"}},[t._v("first step")]),t._v("\nin order to update the OS so that you can work properly execute the following commands:")],1),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" update "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" upgrade -y\nsnap refresh --classic go\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[a("strong",[t._v("2.")]),t._v(" During the "),a("router-link",{attrs:{to:"/nodes/full-node-installation.html#3-install-binaries-genesis-file-and-setup-configuration"}},[t._v("4th step")]),t._v("\nyou "),a("strong",[t._v("don't need")]),t._v(" to change the follow rows of your "),a("code",[t._v("~/.profile")]),t._v(" file")],1),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("GOPATH")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"\\'),a("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$HOME")]),t._v('/go"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("PATH")])]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"\\'),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$GOPATH")]),t._v("/bin:\\"),a("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$PATH")]),t._v('"')]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("You also need to clean up the files from the previous chain configurations")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sed")]),t._v(" -i "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n-e "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/export NODENAME=.*/d'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n-e "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/export CHAINID=.*/d'")]),t._v(" ~/.profile\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("and add the new chain ones")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("NODENAME")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<your-moniker>"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("CHAINID")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("commercio-"),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" .data "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" -oP "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Name\\s+\\K\\S+'")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v("EOF "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" ~/.profile\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("NODENAME")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$NODENAME")]),t._v('"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("CHAINID")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$CHAINID")]),t._v('"')]),t._v("\nEOF\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("h2",{attrs:{id:"update-type-2-soft-fork"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#update-type-2-soft-fork"}},[t._v("#")]),t._v(" Update type 2 - Soft fork")]),t._v(" "),a("p",[a("strong",[t._v("WIP")]),a("br"),t._v("\nThe second update type is the one known as "),a("strong",[t._v("soft fork")]),t._v("."),a("br"),t._v("\nIn this case, the chain state will be preserved from its beginning to a certain point in time.")]),t._v(" "),a("h3",{attrs:{id:"preliminary-risks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#preliminary-risks"}},[t._v("#")]),t._v(" Preliminary/Risks")]),t._v(" "),a("p",[t._v("When signalling a required update that should follow this procedure, the following information will\nbe let known to all validators:")]),t._v(" "),a("ol",[a("li",[t._v("A specific block height")]),t._v(" "),a("li",[t._v("The genesis file checksum")]),t._v(" "),a("li",[t._v("The new chain software version")]),t._v(" "),a("li",[t._v("A deadline expressed in UTC format")])]),t._v(" "),a("p",[t._v("If you are a validator, please make sure that you know all those information before proceeding with the update.")]),t._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[t._v("Double signing")]),t._v(" "),a("p",[t._v("Due to the nature of the update operations, there is some risk of double signature.\nTo avoid every sort of risks please verify the software version, the hash of the "),a("code",[t._v("genesis.json")]),t._v(" file and the specific\nconfiguration present inside the "),a("code",[t._v("config.toml")]),t._v(" file.")])]),t._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[t._v("Update time")]),t._v(" "),a("p",[t._v("The deadline of the update must be respected: every validator that will not update just in time will be slashed.")])]),t._v(" "),a("h3",{attrs:{id:"backup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#backup"}},[t._v("#")]),t._v(" Backup")]),t._v(" "),a("p",[t._v("Before starting the update it ss recommended to take a full data snapshot of the chain state at the export height."),a("br"),t._v("\nTo do so please run:")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("systemctl stop cnd\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" -r ~/.cnd ~/.cnd.back\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" -r ~/.cncli ~/.cncli.back\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" -r /root/go/bin/cnd /root/go/bin/cnd.back\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" -r /root/go/bin/cncli /root/go/bin/cncli.back\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("h3",{attrs:{id:"update-procedure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#update-procedure"}},[t._v("#")]),t._v(" Update procedure")]),t._v(" "),a("h4",{attrs:{id:"_1-updating-the-software"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-updating-the-software"}},[t._v("#")]),t._v(" 1. Updating the software")]),t._v(" "),a("p",[t._v("In order to properly update your validator node, first of all you need to clone the\n"),a("a",{attrs:{href:"https://github.com/commercionetwork/chains",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("chains")]),t._v(" repo"),a("OutboundLink")],1),t._v(":")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" -rf commercio-chains\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" commercio-chains "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" commercio-chains\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/commercionetwork/chains.git "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" commercio-"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("chain-version"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# eg. cd commercio-testnet3000 ")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v("Once downloaded, you need to compile the binaries:")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" init "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" origin https://github.com/commercionetwork/commercionetwork.git\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" pull\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout tags/"),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" .data "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" -oP "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Release\\s+\\K\\S+'")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("After the compilation has finished successfully, please make sure you are running the correct software version:")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("cnd version\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Should output the same version written inside the .data file")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("h4",{attrs:{id:"_2-export-the-chain-state-wip"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-export-the-chain-state-wip"}},[t._v("#")]),t._v(" 2. Export the chain state ("),a("strong",[t._v("WIP")]),t._v(")")]),t._v(" "),a("p",[t._v("Once the software has properly been updated, we need to export the current chain state and later import it."),a("br"),t._v("\nIn order to do so, first of all you need to get the export height from the "),a("code",[t._v(".data")]),t._v(" file:")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("BLOCKHEIGHT")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" .data "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" -oP "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Height\\s+\\K\\S+'")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[a("strong",[t._v("WIP")])]),t._v(" "),a("h2",{attrs:{id:"update-type-3-binaries-update"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#update-type-3-binaries-update"}},[t._v("#")]),t._v(" Update type 3 - Binaries update")]),t._v(" "),a("p",[a("strong",[t._v("WIP")]),a("br"),t._v("\nIn order to update minor version of biniaries you need")]),t._v(" "),a("h4",{attrs:{id:"_1-stop-service"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-stop-service"}},[t._v("#")]),t._v(" 1. Stop service")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("systemctl stop cnd\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h4",{attrs:{id:"_2-chain-selection"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-chain-selection"}},[t._v("#")]),t._v(" 2. Chain selection")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" -rf commercio-chains\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" commercio-chains "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" commercio-chains\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/commercionetwork/chains.git "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" commercio-"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("chain-version"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("h4",{attrs:{id:"_3-install-new-binaries"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-install-new-binaries"}},[t._v("#")]),t._v(" 3. Install new binaries")]),t._v(" "),a("p",[t._v("Compile binaries")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("pkill")]),t._v(" cncli\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" init "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" origin https://github.com/commercionetwork/commercionetwork.git\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" pull\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout tags/"),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" .data "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" -oP "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Release\\s+\\K\\S+'")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("h4",{attrs:{id:"_4-restart-service"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-restart-service"}},[t._v("#")]),t._v(" 4. Restart service")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("systemctl "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("enable")]),t._v(" cnd\nsystemctl start cnd\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("h4",{attrs:{id:"_5-control-if-chain-works"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-control-if-chain-works"}},[t._v("#")]),t._v(" 5. Control if chain works")]),t._v(" "),a("p",[t._v("Control if the sync was started. Use "),a("code",[t._v("Ctrl + C")]),t._v(" to interrupt the "),a("code",[t._v("tail")]),t._v(" command")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("tail")]),t._v(" -100f /var/log/syslog\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# OUTPUT SHOULD BE LIKE BELOW")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Aug 13 16:30:20 commerciotestnet-node4 cnd[351]: I[2019-08-13|16:30:20.722] Executed block                               module=state height=1 validTxs=0 invalidTxs=0")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Aug 13 16:30:20 commerciotestnet-node4 cnd[351]: I[2019-08-13|16:30:20.728] Committed state                              module=state height=1 txs=0 appHash=9815044185EB222CE9084AA467A156DFE6B4A0B1BAAC6751DE86BB31C83C4B08")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Aug 13 16:30:20 commerciotestnet-node4 cnd[351]: I[2019-08-13|16:30:20.745] Executed block                               module=state height=2 validTxs=0 invalidTxs=0")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Aug 13 16:30:20 commerciotestnet-node4 cnd[351]: I[2019-08-13|16:30:20.751] Committed state                              module=state height=2 txs=0 appHash=96BFD9C8714A79193A7913E5F091470691B195E1E6F028BC46D6B1423F7508A5")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Aug 13 16:30:20 commerciotestnet-node4 cnd[351]: I[2019-08-13|16:30:20.771] Executed block                               module=state height=3 validTxs=0 invalidTxs=0")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("h3",{attrs:{id:"_6-restart-the-rest-api-if-you-need"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-restart-the-rest-api-if-you-need"}},[t._v("#")]),t._v(" 6. Restart the REST API if you need")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("cncli config chain-id $CHAINID\ncncli rest-server\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[a("strong",[t._v("WIP")])])])}),[],!1,null,null,null);s.default=n.exports}}]);