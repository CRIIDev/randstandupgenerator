(this.webpackJsonprandstandupgenerator=this.webpackJsonprandstandupgenerator||[]).push([[0],{151:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(35),l=n.n(c),o=(n(91),n(74)),i=n(75),s=n(36),u=n(82),m=n(83),h=n(155),d=n(153),E=(n(92),n(28)),v=h.a.Header,f=h.a.Content,p=new Date,S=function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).handleClick=a.handleClick.bind(Object(s.a)(a)),a.state={one:"",two:"",three:"",four:"",five:"",six:""},a}return Object(i.a)(n,[{key:"handleClick",value:function(){var e=["Eitan","Karthik","James","Josh","Reggie","Nom"];e.sort((function(e,t){return.5-Math.random()})),this.setState({one:e[0]}),this.setState({two:e[1]}),this.setState({three:e[2]}),this.setState({four:e[3]}),this.setState({five:e[4]}),this.setState({six:e[5]})}},{key:"render",value:function(){return window.onload=function(){var e=document.querySelector("#btnStart"),t=document.querySelector("#btnStop"),n=document.querySelector("#btnReset"),a=document.querySelector("#divTimer"),r=function(){var e,t=0,n=0,r=0;return{start:function(){e||(e=setInterval((function(){60==++r&&(r=0,60==(n+=1)&&(t+=1,n=0)),a.innerHTML="".concat(1==t.toString().length?"0"+t:t,"\n: ").concat(1==n.toString().length?"0"+n:n,"\n: ").concat(1==r.toString().length?"0"+r:r)}),25))},stop:function(){e&&(clearInterval(e),e=!1)},reset:function(){r=n=t=0,clearInterval(e),e=!1,a.innerHTML="0".concat(t," : 0").concat(n," : 0").concat(r)}}}();e.addEventListener("click",(function(){r.start()})),t.addEventListener("click",(function(){r.stop()})),n.addEventListener("click",(function(){r.reset()}))},r.a.createElement(h.a,{className:"App"},r.a.createElement(v,{className:"App-header"},r.a.createElement("p",{className:"header-class"},"Random StandUp Generator!")),r.a.createElement(f,{className:"App-content"},r.a.createElement(d.a,null,r.a.createElement("p",{style:{fontSize:"x-large"}},"Today's Date: ",p.toDateString()," ",p.toLocaleTimeString()),r.a.createElement("p",null,r.a.createElement("div",{className:"text-color",id:"divTimer"},"00 : 00 : 00")),r.a.createElement(E.a,{variant:"success",id:"btnStart"},"Start"),"\xa0",r.a.createElement(E.a,{variant:"danger",id:"btnStop"},"Stop"),"\xa0",r.a.createElement(E.a,{variant:"warning",id:"btnReset"},"Reset"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(d.a,null,r.a.createElement("h3",null,this.state.one),r.a.createElement("h3",null,this.state.two),r.a.createElement("h3",null,this.state.three),r.a.createElement("h3",null,this.state.four),r.a.createElement("h3",null,this.state.five),r.a.createElement("h3",null,this.state.six))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(E.a,{variant:"primary",onClick:this.handleClick.bind(this)},"Generate")),r.a.createElement("br",null),r.a.createElement("br",null))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},86:function(e,t,n){e.exports=n(151)},91:function(e,t,n){},92:function(e,t,n){}},[[86,1,2]]]);
//# sourceMappingURL=main.4ae0bbea.chunk.js.map