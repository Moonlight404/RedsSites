(this.webpackJsonpredwebsite=this.webpackJsonpredwebsite||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/buttonclick.f464ffcf.wav"},,,,,function(e,t,a){e.exports=a.p+"static/media/back.265d6a7a.jpg"},function(e,t,a){e.exports=a.p+"static/media/steam_icon.429fb792.png"},,function(e,t,a){e.exports=a.p+"static/media/buttonclickrelease.1bead507.wav"},function(e,t,a){e.exports=a(40)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(8),s=a.n(i),r=(a(24),a(6)),c=a(1),o=a(2),u=a(4),m=a(3),d=(a(25),a(15)),h=a.n(d),E=(a(26),a(16)),b=a.n(E),f=a(17),p=a.n(f),v=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={open:!n.props.open},n}return Object(o.a)(a,[{key:"Close",value:function(){this.setState((function(e){return{open:!e.open}}))}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement(p.a,null,l.a.createElement("div",{className:"aba "+(this.state.open?"open":"closed")},l.a.createElement("div",{className:"header"},l.a.createElement("span",{className:"title"},l.a.createElement("img",{src:b.a}),this.props.title),l.a.createElement("span",{className:"close",onClick:function(){e.Close()}},l.a.createElement("i",{class:"fas fa-times"}))),l.a.createElement("div",{className:"data"},l.a.createElement(this.props.data,null)))))}}]),a}(l.a.Component),g=(a(33),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={},n}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("p",null,"Estou avan\xe7ando no meu conhecimento de Level Design. ",l.a.createElement("br",null),"Editores que eu sei usar: ",l.a.createElement("br",null),"-Hammer Editor ",l.a.createElement("br",null),"-CryEngine 2 Sandbox 2 ",l.a.createElement("br",null),"-J.A.C.K. (Half-Life 1) ",l.a.createElement("br",null)))}}]),a}(l.a.Component)),k=(a(34),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={},n}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("p",null,"I am advancing in my knowledge of level design",l.a.createElement("br",null),"Map editors I know how to use: Hammer Editor",l.a.createElement("br",null),"Cryengine 2 Sandbox 2",l.a.createElement("br",null),"and J.A.C.K Hammer (Half-life 1)",l.a.createElement("br",null)))}}]),a}(l.a.Component)),O=a(5),j=(a(35),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={value:"",exec:[]},n.handleChange=n.handleChange.bind(Object(O.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(O.a)(n)),n}return Object(o.a)(a,[{key:"handleSubmit",value:function(e){if(e.preventDefault(),this.state.value.trim().length>0){var t=Object(r.a)(this.state.exec);"help"==this.state.value&&t.push({title:this.state.value,desc:"All commands:",data:"\n    Available commands:\n    help,\n    clear,\n    owner\n"}),"owner"==this.state.value&&t.push({title:this.state.value,desc:"Who raised me?:",data:"\n    Created by Kaway404, SNOOP\n"}),"clear"==this.state.value&&(t=[]),this.setState({exec:t}),this.setState({value:""})}}},{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"console"},l.a.createElement("div",{className:"command"},this.state.exec.map((function(e,t){return l.a.createElement("div",{key:t},l.a.createElement("span",null," ",e.title," - ",e.desc," ",l.a.createElement("br",null)," ",e.data))}))),l.a.createElement("div",{className:"bottom"},l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("input",{value:this.state.value,onChange:this.handleChange,type:"text",placeholder:"Command"})))))}}]),a}(l.a.Component)),y=(a(36),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={},n}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("p",null,"Minhas Rede Sociais:",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("a",{href:"https://www.youtube.com/channel/UC-neZ4NvxLY5eRLPQTgO7OQ",target:"_blank"},"YouTube"),l.a.createElement("a",{href:"https://www.moddb.com/members/luizf34",target:"_blank"},"Mod DB"),l.a.createElement("a",{href:"https://steamcommunity.com/id/luizf34",target:"_blank"},"Steam")))}}]),a}(l.a.Component)),C=(a(37),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={},n}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("p",null,"My Social Networks:",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("a",{href:"https://www.moddb.com/members/luizf34",target:"_blank"},"Mod DB"),l.a.createElement("a",{href:"https://steamcommunity.com/id/luizf34",target:"_blank"},"Steam")))}}]),a}(l.a.Component)),w=(a(38),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={ano:new Date},n}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("p",null,"I am Red. I am ",this.state.ano.getFullYear()-2003," years old. I live in Brazil, Santa Catarina. And i like making maps, and videos. My favorite games are Half-life 2 and Crysis."))}}]),a}(l.a.Component)),N=(a(39),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={ano:new Date},n}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("p",null,"Eu sou Red. Eu tenho ",this.state.ano.getFullYear()-2003," anos. Eu moro no Brasil, Santa Catarina. E eu gosto de fazer mapas e v\xeddeos. Meus jogos favoritos s\xe3o Half-life 2 e Crysis."))}}]),a}(l.a.Component)),S=a(10),P=a.n(S),T=a(18),x=a.n(T),M=(new Audio(P.a),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={language:0,aceito:0,linksPT:[{title:"Aprendizagem",open:!1},{title:"Console",open:!1},{title:"Redes Sociais",open:!1},{title:"Sobre mim",open:!1},{title:"Mudar de idioma",open:!1}],linksEN:[{title:"Learning",open:!1},{title:"Console",open:!1},{title:"Social Network",open:!1},{title:"About me",open:!1},{title:"Change language",open:!1}]},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.audioPlay(),this.audioPlayRelease()}},{key:"audioPlay",value:function(){document.getElementsByClassName("audio-element-re")[0].play()}},{key:"audioPlayRelease",value:function(){document.getElementsByClassName("audio-element")[0].play()}},{key:"controlAbas",value:function(e){if(e!==this.state.linksPT.length-1){this.audioPlayRelease();var t=Object(r.a)(this.state.linksPT);t[e].open=!this.state.linksPT[e].open,this.setState({linksPT:t});var a=Object(r.a)(this.state.linksEN);a[e].open=!this.state.linksEN[e].open,this.setState({linksEN:a}),this.forceUpdate()}else this.audioPlayRelease(),0==this.state.language?this.setState({language:1}):this.setState({language:0})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("div",{className:"back"},l.a.createElement("div",{className:"transparent"}),l.a.createElement("img",{src:h.a})),l.a.createElement("div",{className:"leftBar"},0==this.state.language&&this.state.linksPT.map((function(t,a){return l.a.createElement("div",{onMouseDown:function(){e.audioPlay()},onMouseUp:function(){e.controlAbas(a)}},l.a.createElement(A,{key:a,language:e.state.language,title:t.title}))})),1==this.state.language&&this.state.linksEN.map((function(t,a){return l.a.createElement("div",{onClick:function(){e.controlAbas(a)}},l.a.createElement(A,{key:a,language:e.state.language,title:t.title}))}))),0==this.state.language&&this.state.linksPT[0].open&&l.a.createElement(v,{title:this.state.linksPT[0].title,data:g}),0==this.state.language&&this.state.linksPT[1].open&&l.a.createElement(v,{title:this.state.linksPT[1].title,data:j}),0==this.state.language&&this.state.linksPT[2].open&&l.a.createElement(v,{title:this.state.linksPT[2].title,data:y}),0==this.state.language&&this.state.linksPT[3].open&&l.a.createElement(v,{title:this.state.linksPT[3].title,data:N}),1==this.state.language&&this.state.linksEN[0].open&&l.a.createElement("div",null,l.a.createElement(v,{title:this.state.linksEN[0].title,data:k})),1==this.state.language&&this.state.linksEN[1].open&&l.a.createElement(v,{title:this.state.linksEN[1].title,data:j}),1==this.state.language&&this.state.linksPT[2].open&&l.a.createElement(v,{title:this.state.linksEN[2].title,data:C}),1==this.state.language&&this.state.linksEN[3].open&&l.a.createElement(v,{title:this.state.linksEN[3].title,data:w}),l.a.createElement("audio",{className:"audio-element"},l.a.createElement("source",{src:P.a})),l.a.createElement("audio",{className:"audio-element-re"},l.a.createElement("source",{src:x.a})))}}]),a}(l.a.Component)),A=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={},n}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"link"},l.a.createElement("li",null," ",this.props.title," "))}}]),a}(l.a.Component),B=M;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[19,1,2]]]);
//# sourceMappingURL=main.4cfbe9f3.chunk.js.map