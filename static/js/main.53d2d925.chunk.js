(this.webpackJsonpkefuno=this.webpackJsonpkefuno||[]).push([[0],{121:function(e){e.exports=JSON.parse('[{"url":"demo1","title":"\u30c7\u30e21","date":"2020-09-11","file":"demo1.md","type":"markdown","author":"\u4e09\u77f3\u30df\u30b2\u30fc\u30eb","copied":[],"tag":["\u304a\u77e5\u3089\u305b"]},{"url":"demo2","title":"\u30c7\u30e22","date":"2020-09-13","file":"demo2.md","type":"markdown","author":"\u4e09\u77f3\u30df\u30b2\u30fc\u30eb","copied":[],"tag":["\u304a\u77e5\u3089\u305b","\u30b3\u30e9\u30e0"]},{"url":"demo3","title":"\u30c7\u30e23","date":"2020-09-11","file":"demo3.md","type":"markdown","author":"\u4e09\u77f3\u30df\u30b2\u30fc\u30eb","copied":[],"tag":["\u304a\u77e5\u3089\u305b"]},{"url":"demo4","title":"\u30c7\u30e24","date":"2020-09-11","file":"demo4.md","type":"markdown","author":"\u4e09\u77f3\u30df\u30b2\u30fc\u30eb","copied":[],"tag":["\u304a\u77e5\u3089\u305b"]},{"url":"demo5","title":"\u30c7\u30e25","date":"2020-09-11","file":"demo5.md","type":"markdown","author":"\u4e09\u77f3\u30df\u30b2\u30fc\u30eb","copied":[],"tag":[]},{"url":"demo6","title":"\u30c7\u30e26","date":"2020-09-11","file":"demo6.md","type":"markdown","author":"\u4e09\u77f3\u30df\u30b2\u30fc\u30eb","copied":[],"tag":[]},{"url":"demo7","title":"\u30c7\u30e27","date":"2020-09-11","file":"demo7.md","type":"markdown","author":"\u4e09\u77f3\u30df\u30b2\u30fc\u30eb","copied":[],"tag":["\u304a\u77e5\u3089\u305b"]},{"url":"demo8","title":"\u30c7\u30e28","date":"2020-09-11","file":"demo8.md","type":"markdown","author":"\u4e09\u77f3\u30df\u30b2\u30fc\u30eb","copied":[],"tag":["\u30b3\u30e9\u30e0"]},{"url":"demo9","title":"\u30c7\u30e29","date":"2020-09-11","file":"demo9.md","type":"markdown","author":"\u4e09\u77f3\u30df\u30b2\u30fc\u30eb","copied":[],"tag":["\u304a\u77e5\u3089\u305b"]},{"url":"demo10","title":"\u30c7\u30e210","date":"2020-09-17","file":"demo10.md","type":"markdown","author":"\u4e09\u77f3\u30df\u30b2\u30fc\u30eb","copied":[],"tag":["\u304a\u77e5\u3089\u305b"]}]')},122:function(e){e.exports=JSON.parse('["\u304a\u77e5\u3089\u305b","\u30c1\u30b1\u30c3\u30c8","\u30b3\u30e9\u30e0"]')},123:function(e,t,a){e.exports=a.p+"static/media/homepic.90e2b8ce.png"},124:function(e,t,a){e.exports=a.p+"static/media/video.b7f7a972.mov"},145:function(e,t,a){e.exports=a(672)},160:function(e,t,a){},162:function(e,t,a){},163:function(e,t,a){},164:function(e,t,a){},165:function(e,t,a){},166:function(e,t,a){},167:function(e,t,a){},168:function(e,t,a){},169:function(e,t,a){},171:function(e,t,a){},669:function(e,t,a){e.exports=a.p+"static/media/demo1.dea51f2f.md"},670:function(e,t,a){},671:function(e,t,a){},672:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(57),c=a.n(r),o=a(39),i=a(6),s=a(32),u=a(26),m=a(120),d=a.n(m),p=a(46),f=Object(p.b)({name:"video",initialState:{played:!1},reducers:{savePlayed:function(e){e.played=!0}}}),h=f.actions.savePlayed,g=function(e){return e.video.played},E=f.reducer,v=a(35),y=a(36),k=a(38),b=a(37),N=a(121),T=a(122),S=a(59),O=a.n(S),w=a(699),x=a(700),j=a(20),C=Object(p.b)({name:"news",initialState:{start:0,selectedTag:null,tagDisp:!1,logPart:null,home:!1},reducers:{saveStart:function(e,t){e.start=t.payload},saveTag:function(e,t){e.selectedTag=t.payload.selectedTag,e.tagDisp=t.payload.tagDisp,e.logPart=t.payload.logPart},saveHome:function(e){e.home=!0},delHome:function(e){e.home=!1}}}),P=C.actions,B=P.saveStart,D=P.saveHome,R=P.saveTag,H=P.delHome,W=function(e){return e.news.home},U=C.reducer,M=a(30),L=(a(160),function(e){var t=e.to,a=e.children,n=e.className;return l.a.createElement(M.a,{to:t,className:"link "+n},a)}),A=function(e){Object(k.a)(a,e);var t=Object(b.a)(a);function a(e){var n;if(Object(v.a)(this,a),(n=t.call(this,e)).setSlice=function(e,t,a){n.setState({start:e,end:t,logSlice:a.slice(e,t),listTag:!0})},n.first=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n.state.logPart;n.setSlice(0,e,t)},n.previous=function(e,t){n.setSlice(e-t,e,n.state.logPart)},n.next=function(e,t){n.setSlice(e,e+t,n.state.logPart)},n.toUrl=function(e,t,a){var l=a.findIndex((function(t){return t.url===e})),r=5*Math.floor(l/t);n.setSlice(r,r+t,a)},n.selectTag=function(e,t,a){var l=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,c=e===a?null:e,i=null!==c?n.props.log.filter((function(e){return e.tag.includes(c)})):n.props.log;n.setState({selectedTag:c,logPart:i}),l||null===r?n.first(t,i):n.toUrl(r,t,i),o.a.event({category:"Tag",action:c})},n.switchTagDisp=function(e){n.setState({tagDisp:!e})},n.initializeTag=function(e){n.setState({selectedTag:null,logPart:n.props.log,tagDisp:!1}),n.first(e,n.props.log)},n.articleURL=function(e){return"/"+n.props.type+"/"+e},n.listRef=l.a.createRef(),n.state={start:e.start,selectedTag:e.selectedTag,tagDisp:e.tagDisp,logPart:null===e.logPart?e.log:e.logPart,listTag:!0},!1!==e.range){for(var r=0;r<e.range;r++)n["tagRef".concat(r)]=l.a.createRef();n.state.start<e.range?n.state.prevBut=!1:n.state.prevBut=!0,n.state.end=n.state.start+e.range,n.state.end>=n.state.logPart.length?n.state.nextBut=!1:n.state.nextBut=!0}else n.state.nextBut=!1,n.state.end=n.state.logPart.length;return n.state.logSlice=n.state.logPart.slice(n.state.start,n.state.end),n}return Object(y.a)(a,[{key:"componentDidMount",value:function(){if(!1!==this.props.tags){var e=this.listRef.current.offsetWidth;if(this.state.listTag)for(var t=0;t<this.state.logSlice.length;t++)try{e-this["tagRef".concat(t)].current.offsetWidth<170&&this.setState({listTag:!1})}catch(a){console.log(a)}}}},{key:"componentDidUpdate",value:function(e,t){if(!1!==this.props.tags){var a=this.listRef.current.offsetWidth;if(this.state.listTag)for(var n=0;n<this.state.logSlice.length;n++)try{a-this["tagRef".concat(n)].current.offsetWidth<170&&this.setState({listTag:!1})}catch(l){console.log(l)}}!1!==this.props.range&&(this.state.start<this.props.range?this.state.prevBut&&this.setState({prevBut:!1}):this.state.prevBut||this.setState({prevBut:!0}),this.state.end>=this.state.logPart.length?this.state.nextBut&&this.setState({nextBut:!1}):this.state.nextBut||this.setState({nextBut:!0}))}},{key:"componentWillUnmount",value:function(){this.props.saveStart(this.state.start,this.props.type),this.props.saveTag(this.state.selectedTag,this.state.tagDisp,this.state.logPart,this.props.type)}},{key:"render",value:function(){var e=this,t=this.props,a=t.type,n=t.title,r=t.range,c=t.tags,o=t.date,i=t.more,s=this.state,u=s.start,m=s.end,d=s.prevBut,p=s.nextBut,f=s.selectedTag,h=s.tagDisp,g=s.logSlice,E=s.listTag,v=g.map((function(t,a){var n=!1!==c&&E?t.tag.map((function(a){return l.a.createElement(j.a,{className:"tagSelector",variant:a===f?"secondary":"outline-secondary",onClick:function(){return e.selectTag(a,r,f,!1,t.url)},key:t.url+a},"#",a)})):null,s=l.a.createElement("div",{display:"inline-block",className:"tagDiv",key:a,ref:e["tagRef".concat(a)]},n);return l.a.createElement("li",{key:t.url,className:"articleList",style:{cursor:"pointer"}},l.a.createElement(L,{key:t.url+"button",to:e.articleURL(t.url),className:"articleListTitle"},l.a.createElement("h3",{key:t.url+"h2",className:"article-title"},t.title)),l.a.createElement("div",null,o?l.a.createElement(L,{key:t.url+"p",className:"article-date",to:e.articleURL(t.url)},l.a.createElement("span",null,"\u66f4\u65b0\u65e5:",t.date)):null,s),i?l.a.createElement(L,{key:t.url+"more",className:"article-more",to:e.articleURL(t.url)},"\u2026read more"):null)})),y=p||d?l.a.createElement("div",{className:"articleButton",height:"50px"},l.a.createElement(j.a,{className:"articlePrev",variant:"dark",style:{display:d?"block":"none"},onClick:function(){return e.previous(u,r)}},"\u2039 \u623b\u308b"),l.a.createElement(j.a,{className:"articleFirst",variant:"secondary",style:{display:0!==u?"inline-block":"none"},onClick:function(){return e.first(r)}},"\xab \u6700\u65b0\u3078"),l.a.createElement(j.a,{className:"articleNext",variant:"dark",style:{display:p?"block":"none"},onClick:function(){return e.next(m,r)}},"\u6b21\u3078 \u203a")):null,k=!1!==c?l.a.createElement(j.a,{className:"tagSearch",onClick:function(){return e.switchTagDisp(h)},style:{textAlign:"center"},variant:"link"},"Search",l.a.createElement(w.a,null)):null,b=!1!==c?c.map((function(t){return l.a.createElement(j.a,{className:"tagSelector tagSelector-main",variant:t===f?"secondary":"outline-secondary",onClick:function(){return e.selectTag(t,r,f)},key:t},"#",t)})).concat([l.a.createElement(j.a,{className:"tagSelector tagSelector-main",variant:"secondary",onClick:function(){return e.initializeTag(r)},key:"null"},l.a.createElement(x.a,null))]):null;return l.a.createElement("div",{className:"articleSec articleSec-"+a},l.a.createElement("h2",{className:"title"},n,k),l.a.createElement(O.a,{right:!0,collapse:!0,when:!1!==c&&!1!==h,children:l.a.createElement("div",null,b),duration:2e3}),l.a.createElement("ul",{className:"articles",ref:this.listRef},v),y)}}]),a}(n.Component);A.defaultProps={range:!1,tags:!1,date:!0,more:!1};var F=Object(u.b)((function(e){var t=e.news;return{start:t.start,selectedTag:t.selectedTag,tagDisp:t.tagDisp,logPart:t.logPart,home:t.home}}),(function(e){return{saveStart:function(t){e(B(t))},saveTag:function(t,a,n){e(R({selectedTag:t,tagDisp:a,logPart:n}))},saveHome:function(){e(D())}}}))(A),I=(a(162),function(e){Object(k.a)(a,e);var t=Object(b.a)(a);function a(){return Object(v.a)(this,a),t.apply(this,arguments)}return Object(y.a)(a,[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){return l.a.createElement(F,{title:"News",log:N,type:"news",range:5,tags:T})}}]),a}(n.Component)),J=a(142),X=(a(163),function(e){var t=e.account;return l.a.createElement("div",{className:"twitter"},l.a.createElement(J.a,{sourceType:"profile",screenName:t,options:{width:"100%",height:500},theme:"light",transparent:!0,noFooter:!0}))}),z=a(123),V=a.n(z),$=a(124),q=a.n($),G=(a(164),function(){var e=Object(u.d)(g),t=Object(u.c)(),a=Object(n.useState)(!1),r=Object(s.a)(a,2),c=r[0],o=r[1],i=Object(n.useState)(e),m=Object(s.a)(i,2),p=m[0],f=m[1];return Object(n.useEffect)((function(){e&&setTimeout((function(){f(!0)}),2e3)}),[e]),l.a.createElement("div",{className:"home"},p?null:l.a.createElement("div",{className:e?"topVideo played":"topVideo"},l.a.createElement(d.a,{url:q.a,playing:c,playsinline:!0,volume:0,muted:!0,onReady:function(){return o(!0)},width:"100%",height:"auto",onEnded:function(){return t(h())}})),l.a.createElement("img",{className:"topImage",src:V.a,alt:"kefuno. Home"}),l.a.createElement(I,null),l.a.createElement(X,{account:"twitter"}))}),K=a(125),Q=function(e,t){return{url:e,text:t}},Y=[Q("/news","News"),Q("about","About"),Q("/work","Work"),Q("/member","Member"),Q("/ticket","Ticket"),Q("/contact","Contact"),Q("/","Home")],Z=a(127),_=a(18);a(165);function ee(){var e=Object(Z.a)(["\n  div {\n    :first-child {\n      transform: ",";\n    }\n\n    :nth-child(2) {\n      opacity: ",";\n      transform: ",";\n    }\n\n    :nth-child(3) {\n      transform: ",";\n    }\n  }\n"]);return ee=function(){return e},e}var te=_.default.button(ee(),(function(e){return e.open?"rotate(45deg)":"rotate(0)"}),(function(e){return e.open?"0":"1"}),(function(e){return e.open?"translateX(20px)":"translateX(0)"}),(function(e){return e.open?"rotate(-45deg)":"rotate(0)"})),ae=function(e){var t=e.open,a=e.setOpen;return l.a.createElement(te,{open:t,onClick:function(){return a(!t)},className:"burger"},l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null))},ne=(a(166),function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],r=t[1],c=Object(i.f)().pathname,o=function(e){r(e)},u=l.a.createElement("ul",null,Y.map((function(e){return c===e.url?null:l.a.createElement(M.a,{key:e.text,to:e.url,onClick:function(){return o(!1)}},e.text)})));return l.a.createElement("div",{className:"sidebarContainer"},l.a.createElement(K.a,{sidebar:u,open:a,onSetOpen:o,styles:{overlay:{transform:a?"translateX(0%)":"translateX(100%)"}},pullRight:!0,sidebarClassName:"sidebarMenu",contentClassName:"sidebarContent",overlayClassName:"sidebarOverlay"},l.a.createElement("div",{className:"sidebarButton"},l.a.createElement(ae,{open:a,setOpen:o}),l.a.createElement("div",{className:"buttonText"},"MENU"))))}),le=(a(167),function(){var e="/"===Object(i.f)().pathname;return l.a.createElement("header",{className:e?"":"nothome"},l.a.createElement("div",{className:"logo"},l.a.createElement(L,{to:"/"},l.a.createElement("h1",null,"kefuno."))),l.a.createElement(ne,null))}),re=a(60),ce=(a(168),function(e){Object(k.a)(a,e);var t=Object(b.a)(a);function a(){return Object(v.a)(this,a),t.apply(this,arguments)}return Object(y.a)(a,[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){return l.a.createElement("div",{className:"contact-form"},l.a.createElement(re.a,null,l.a.createElement("title",null,"kefuno. \u304a\u554f\u3044\u5408\u308f\u305b")),l.a.createElement("h2",{className:"title"},"Contact"),l.a.createElement("form",{method:"POST",action:"https://formspree.io/manimigue0701@gmail.com"},l.a.createElement("p",null,"\u304a\u540d\u524d"),l.a.createElement("input",{type:"text",name:"\u304a\u540d\u524d",placeholder:"\u4f50\u85e4\u3000\u592a\u90ce"}),l.a.createElement("p",null,"\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9"),l.a.createElement("input",{type:"email",name:"\u8fd4\u4fe1\u5148",placeholder:"you@example.com"}),l.a.createElement("p",null,"\u4ef6\u540d"),l.a.createElement("input",{type:"text",name:"\u4ef6\u540d"}),l.a.createElement("p",null,"\u304a\u554f\u3044\u5408\u308f\u305b\u5185\u5bb9"),l.a.createElement("textarea",{name:"\u304a\u554f\u3044\u5408\u308f\u305b\u5185\u5bb9"}),l.a.createElement("input",{className:"submit",type:"submit",value:"Send"})))}}]),a}(n.Component)),oe=a(86),ie=function(){return l.a.createElement("div",{className:"tickets-info"},l.a.createElement("h3",null,"\u30c1\u30b1\u30c3\u30c8\u60c5\u5831"),l.a.createElement("p",null,l.a.createElement("b",null,"\u5148\u884c\u4e88\u7d04\u30c1\u30b1\u30c3\u30c8\uff08\u81ea\u7531\u5e2d\u30fb\u7121\u6599\uff09")),l.a.createElement("p",null,l.a.createElement("b",null,"\u5f53\u65e5\u30c1\u30b1\u30c3\u30c8\uff08\u81ea\u7531\u5e2d\u30fb\u7121\u6599\uff09")),l.a.createElement("ul",null,l.a.createElement("li",null,"\u5f53\u65e5\u30c1\u30b1\u30c3\u30c8\u306e\u5f15\u304d\u63db\u3048\u306f\u5f53\u65e5 13:00 \u3088\u308a\u958b\u59cb\u3057\u307e\u3059\u3002"),l.a.createElement("li",null,"\u5f53\u65e5\u30c1\u30b1\u30c3\u30c8\u306e\u679a\u6570\u306f\u5148\u884c\u4e88\u7d04\u30c1\u30b1\u30c3\u30c8\u306e\u72b6\u6cc1\u306b\u5fdc\u3058\u3066\u5909\u52d5\u3059\u308b\u305f\u3081\u3001\u4e88\u3081\u3054\u4e86\u627f\u304f\u3060\u3055\u3044\u3002")),l.a.createElement("p",null,"\u672c\u516c\u6f14\u3067\u306f\u672a\u5c31\u5b66\u5150\u306e\u30b2\u30b9\u30c8\u306e\u65b9\u3082\u3054\u6765\u5834\u3057\u3066\u9802\u304f\u3053\u3068\u304c\u51fa\u6765\u307e\u3059\u3002\u4e88\u3081\u3054\u4e86\u627f\u304f\u3060\u3055\u3044\u3002\u307e\u305f\u3001\u672a\u5c31\u5b66\u5150\u3092\u304a\u9023\u308c\u306e\u30b2\u30b9\u30c8\u306e\u65b9\u306f\u6f14\u594f\u4e2d\u3001\u5468\u308a\u306e\u65b9\u306b\u3054\u914d\u616e\u9802\u304d\u307e\u3059\u3088\u3046\u304a\u9858\u3044\u3044\u305f\u3057\u307e\u3059\u3002"))},se=["\u5927\u4eba","\u5b50\u4f9b"],ue=(a(169),function(e){Object(k.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(v.a)(this,a),(n=t.call(this,e)).addTicket=function(){n.state.ticketTypeNum<3&&n.setState({ticketTypeNum:n.state.ticketTypeNum+1})},n.reduceTicket=function(){n.state.ticketTypeNum>1&&n.setState({ticketTypeNum:n.state.ticketTypeNum-1})},n.onWhich=function(e,t){switch(e){case"on":return t;case"commingSoon":return l.a.createElement("h5",{style:{marginBottom:"30px"}},"Comming soon");case"end":return l.a.createElement("h5",{style:{marginBottom:"30px"}},"\u8ca9\u58f2\u7d42\u4e86\u3057\u307e\u3057\u305f\u3002");default:return}},n.gaSubmit=function(e){o.a.event({category:"User",action:e})},n.state={ticketTypeNum:1,on:"on"},n}return Object(y.a)(a,[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){var e=this,t=this.state.ticketTypeNum,a=function(e){return l.a.createElement("div",{className:"ticket-type type"+e.toString(),key:e},l.a.createElement("h5",null,"\u5238\u7a2e",t<2?null:e.toString()),l.a.createElement(oe.a.Control,{name:"\u5238\u7a2e"+e.toString(),as:"select",disabled:e>t},se.map((function(e){return l.a.createElement("option",{key:e,value:e},e)}))),l.a.createElement("h5",null,"\u679a\u6570"),l.a.createElement(oe.a.Control,{name:"\u679a\u6570"+e.toString(),as:"select",disabled:e>t},Array.from(Array(5),(function(t,a){return l.a.createElement("option",{key:5*e+a,value:a+1},a+1)}))))};return l.a.createElement("div",{className:"ticket"},l.a.createElement(re.a,null,l.a.createElement("title",null,"kefuno. \u30c1\u30b1\u30c3\u30c8\u60c5\u5831")),l.a.createElement("div",{className:"title"},l.a.createElement("h2",null,"Ticket")),l.a.createElement(ie,null),l.a.createElement("div",{className:"ticket-buy"},l.a.createElement("h4",null,"\u30c1\u30b1\u30c3\u30c8\u4e88\u7d04"),l.a.createElement("div",{className:"ticket-form"},this.onWhich(this.state.on,l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,"\u4e0b\u8a18\u306e\u30d5\u30a9\u30fc\u30e0\u306b\u5165\u529b\u3057\u3066\u3044\u305f\u305f\u3099\u304d\u3001\u9001\u4fe1\u3057\u3066\u304f\u305f\u3099\u3055\u3044\u3002",l.a.createElement("br",null),"1 \u9031\u9593\u4ee5\u5185\u306b\u78ba\u8a8d\u306e\u9023\u7d61\u3092\u9001\u3089\u305b\u3066\u9802\u304d\u307e\u3059\u3002"),l.a.createElement("form",{method:"POST",action:"https://formspree.io/orchestra.musicart.ticket@gmail.com"},l.a.createElement(l.a.Fragment,null,a(1),se.length>1?Array.from(Array(se.length-1),(function(e,n){return l.a.createElement(O.a,{key:n,collapse:!0,when:n+2<=t},a(n+2))})):null,se.length>1&&t<se.length?l.a.createElement(j.a,{onClick:e.addTicket,className:"add-ticketTypes"}," + "):null,se.length>1&&t>1?l.a.createElement(j.a,{onClick:e.reduceTicket,className:"reduce-ticketTypes"}," - "):null),l.a.createElement("h5",null,"\u4ee3\u8868\u8005\u540d"),l.a.createElement("input",{type:"text",name:"\u4ee3\u8868\u8005\u540d",placeholder:"\u4f50\u85e4\u3000\u592a\u90ce"}),l.a.createElement("h5",null,"\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9"),l.a.createElement("input",{type:"email",name:"\u8fd4\u4fe1\u5148\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9",placeholder:"you@example.com"}),l.a.createElement("h5",null,"\u96fb\u8a71\u756a\u53f7"),l.a.createElement("input",{type:"tel",name:"\u8fd4\u4fe1\u5148\u96fb\u8a71\u756a\u53f7",placeholder:"09012345678"}),l.a.createElement("h5",null,"\u305d\u306e\u4ed6\u304a\u554f\u3044\u5408\u308f\u305b"),l.a.createElement("textarea",{name:"\u304a\u554f\u3044\u5408\u308f\u305b\u5185\u5bb9"}),l.a.createElement("input",{className:"submit",type:"submit",value:"Send",onClick:function(){return e.gaSubmit("Tickets reservation")}})))))))}}]),a}(n.Component)),me=a(132),de=a(85),pe=a.n(de),fe=function(){var e=Object(me.a)(),t=Object(s.a)(e,2),a=t[0],n=t[1].width,r=parseInt(pe.a.totalWidth,10)*Y.length*100/parseInt(pe.a.ulWidth,10),c=Y.map((function(e){return l.a.createElement(L,{key:e.text,to:e.url,className:"footerLink"},e.text)})),o=Y.map((function(e){return l.a.createElement("div",{className:"filling-empty-space-childs"})}));return l.a.createElement("footer",{ref:a},l.a.createElement("div",{className:"footerTop"},l.a.createElement("div",{className:"title"},l.a.createElement("h2",null,"kefuno."))),l.a.createElement("div",{className:"footerLinks"},l.a.createElement("ul",null,c,n>r?null:o)),l.a.createElement("div",{className:"copyright"},l.a.createElement("p",null,"\u24b8 2020 kefuno.")))},he=function(e){var t=e.type,a=e.delHome,r=e.selectHome,c=e.children,o=Object(u.d)(r),s=Object(u.c)(),m=Object(i.e)();Object(n.useEffect)((function(){return function(){return s(a())}}));return l.a.createElement("button",{className:"back-button",onClick:function(){return function(e){e?m.goBack():m.push("/"+t)}(o)}},c)},ge=(a(171),function(e,t,a,n){return e.map((function(e,r){var c="/"+t+"/"+e.url;return l.a.createElement(i.a,{exact:!0,path:c,component:function(){return l.a.createElement("div",{className:"articleContent"},l.a.createElement(he,{type:t,delHome:a,selectHome:n},"\u2039 \u623b\u308b"),l.a.createElement(e.component,null),l.a.createElement(he,{type:t,delHome:a,selectHome:n},"\u2039 \u623b\u308b"))},key:r+"rout"})}))}),Ee=a(133),ve=a.n(Ee),ye=[{url:"demo1",component:function(){var e=Object(n.useState)("loading..."),t=Object(s.a)(e,2),r=t[0],c=t[1];return Object(n.useEffect)((function(){var e=a(669);fetch(e).then((function(e){return e.text()})).then((function(e){c(e)}))})),l.a.createElement(ve.a,{className:"article",source:r,escapeHtml:!1})}}],ke=function(){var e=ge(ye,"news",H,W);return l.a.createElement(l.a.Fragment,null,e)};var be=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(le,null),l.a.createElement("div",{className:"main"},l.a.createElement(i.a,{exact:!0,path:"/",component:G}),l.a.createElement(i.a,{exact:!0,path:"/news",component:I}),l.a.createElement(i.a,{exact:!0,path:"/ticket",component:ue}),l.a.createElement(i.a,{exact:!0,path:"/contact",component:ce}),l.a.createElement(ke,null)),l.a.createElement(fe,null))},Ne=Object(p.a)({reducer:{news:U,video:E}}),Te=a(10);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(670),a(671);o.a.initialize("UA-177620795-1");var Se=Object(Te.a)({basename:"/kefuno"});Se.listen((function(e){var t=e.pathname;o.a.set({page:t}),o.a.pageview(t)})),c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(u.a,{store:Ne},l.a.createElement(i.b,{history:Se,basename:"/kefuno"},l.a.createElement(be,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},85:function(e,t,a){e.exports={totalWidth:"120px",ulWidth:"80%"}}},[[145,13,14]]]);
//# sourceMappingURL=main.53d2d925.chunk.js.map