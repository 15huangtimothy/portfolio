(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{190:function(e,t,i){"use strict";i.r(t);var n=i(0),a=i.n(n),o=i(197),s=i(203),r=i(217),l=i.n(r),d=i(218),c=i.n(d),u=i(219),p=i.n(u),h=i(220),f=i.n(h);t.default=function(){return a.a.createElement(o.a,null,a.a.createElement("h3",{className:"interest-header"},"Data Science"),a.a.createElement("p",{className:"interest-intro"},"At UC Berkeley, I took the Data Science department's flagship course,"," ",a.a.createElement("a",{className:"link-animation",href:"http://www.ds100.org/",target:"_blank",rel:"noopener noreferrer"},"Data 100: Principles & Techniques of Data Science"),", where learned and applied exploratory data analysis, feature engineering, statistical inference, and predictive modeling to multiple projects, such as the ones listed below. Additionally, I worked at"," ",a.a.createElement("a",{className:"link-animation",href:"https://www.greatplacetowork.com/",target:"_blank",rel:"noopener noreferrer"},"Great Place to Work")," ","as a data science intern, where I got the opportunity to apply NLP and ML techniques to business analytics and workplace research.",a.a.createElement("br",null),a.a.createElement("br",null),"I'm currently pursuing an M.S. in Data Science at Columbia University to gain a stronger foundation and achieve a better understanding of advanced techniques in data science."),a.a.createElement(s.a,{title:"Great Place to Work Internship",image:l.a,learn_more:""},'Conducted a churn analysis by analyzing behaviours of GPTW customer churn and creating a predictive churn model. Presented key findings during company-wide meetings, resulting in my analysis receving high praise from top executives and being distributed to global affiliate companies. Produced research on identifying "belonging" in the workplace, using over 10 years of US employee data and applying natural language processing methods on employee comments.'),a.a.createElement(s.a,{title:"Twitter Sentiment Analysis",image:p.a,learn_more:""},"Produced a sentiment analysis on a celebrity’s tweet history. Used Twitter’s API to study historical tweeting patterns and to investigate the relationship between a tweet’s sentiment and its public engagement."),a.a.createElement(s.a,{title:"NYC Taxi Ride Model",image:c.a,learn_more:""},"Developed a model that predicts the ride duration of taxi trips in NYC using existing NYC taxi data. Conducted exploratory data analysis, feature engineering, and cross-validation to select a regularized linear model and create a data processing pipeline."),a.a.createElement(s.a,{title:"Spam Email Classification",image:f.a,learn_more:""},"Created a spam email classifier using existing email data to train a logistic classification model with 99.6% test accuracy, ranking within the top 3% of all class models."))}},196:function(e,t,i){"use strict";function n(e){try{return f.insertRule(e,f.cssRules.length)}catch(e){console.warn("react-reveal - animation failed")}}function a(){c||(t.globalHide=c=!0,window.removeEventListener("scroll",a,!0),n("."+o+" { opacity: 0; }"),window.removeEventListener("orientationchange",a,!0),window.document.removeEventListener("visibilitychange",a))}i(70),i(29),i(51),i(90),Object.defineProperty(t,"__esModule",{value:!0}),t.insertRule=n,t.cascade=function(e,t,i,n,a){var o=Math.log(n),s=(Math.log(a)-o)/(i-t);return Math.exp(o+s*(e-t))},t.animation=function(e){if(!f)return"";var t="@keyframes "+(v+p)+"{"+e+"}",i=h[e];return i?""+v+i:(f.insertRule(t,f.cssRules.length),h[e]=p,""+v+p++)},t.hideAll=a,t.default=function(e){var i=e.ssrFadeout;t.fadeOutEnabled=i};var o=t.namespace="react-reveal",s=(t.defaults={duration:1e3,delay:0,count:1},t.ssr=!0),r=t.observerMode=!1,l=t.raf=function(e){return window.setTimeout(e,66)},d=t.disableSsr=function(){return t.ssr=s=!1},c=(t.fadeOutEnabled=!1,t.ssrFadeout=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return t.fadeOutEnabled=e},t.globalHide=!1),u=(t.ie10=!1,t.collapseend=void 0),p=1,h={},f=!1,v=o+"-"+Math.floor(1e15*Math.random())+"-";if("undefined"!=typeof window&&"nodejs"!==window.name&&window.document&&"undefined"!=typeof navigator){t.observerMode=r="IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype&&/\{\s*\[native code\]\s*\}/.test(""+IntersectionObserver),t.raf=l=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||l,t.ssr=s=window.document.querySelectorAll("div[data-reactroot]").length>0,-1!==navigator.appVersion.indexOf("MSIE 10")&&(t.ie10=!0),s&&"performance"in window&&"timing"in window.performance&&"domContentLoadedEventEnd"in window.performance.timing&&window.performance.timing.domLoading&&Date.now()-window.performance.timing.domLoading<300&&(t.ssr=s=!1),s&&window.setTimeout(d,1500),r||(t.collapseend=u=document.createEvent("Event"),u.initEvent("collapseend",!0,!0));var m=document.createElement("style");document.head.appendChild(m),m.sheet&&m.sheet.cssRules&&m.sheet.insertRule&&(f=m.sheet,window.addEventListener("scroll",a,!0),window.addEventListener("orientationchange",a,!0),window.document.addEventListener("visibilitychange",a))}},197:function(e,t,i){"use strict";var n=i(0),a=i.n(n),o=i(198),s=i.n(o);t.a=function(e){var t=e.children;return a.a.createElement("div",{className:"container interest-layout-container"},a.a.createElement(s.a,{duration:1e3},t))}},198:function(e,t,i){"use strict";function n(e,t){var i=t.distance,n=t.left,a=t.right,o=t.up,s=t.down,l=t.top,d=t.bottom,c=t.big,p=t.mirror,h=t.opposite,f=(i?i.toString():0)+((n?1:0)|(a?2:0)|(l||s?4:0)|(d||o?8:0)|(p?16:0)|(h?32:0)|(e?64:0)|(c?128:0));if(u.hasOwnProperty(f))return u[f];var v=n||a||o||s||l||d,m=void 0,y=void 0;if(v){if(!p!=!(e&&h)){var w=[a,n,d,l,s,o];n=w[0],a=w[1],l=w[2],d=w[3],o=w[4],s=w[5]}var b=i||(c?"2000px":"100%");m=n?"-"+b:a?b:"0",y=s||l?"-"+b:o||d?b:"0"}return u[f]=(0,r.animation)((e?"to":"from")+" {opacity: 0;"+(v?" transform: translate3d("+m+", "+y+", 0);":"")+"}\n     "+(e?"from":"to")+" {opacity: 1;transform: none;} "),u[f]}function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r.defaults,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=e.children,a=(e.out,e.forever),o=e.timeout,s=e.duration,l=void 0===s?r.defaults.duration:s,c=e.delay,u=void 0===c?r.defaults.delay:c,p=e.count,h=void 0===p?r.defaults.count:p,f=function(e,t){var i={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(i[n]=e[n]);return i}(e,["children","out","forever","timeout","duration","delay","count"]),v={make:n,duration:void 0===o?l:o,delay:u,forever:a,count:h,style:{animationFillMode:"both"},reverse:f.left};return t?(0,d.default)(f,v,v,i):v}i(90),i(68),i(92),i(13),i(199),i(29),Object.defineProperty(t,"__esModule",{value:!0});var o,s=i(50),r=i(196),l=i(201),d=(o=l)&&o.__esModule?o:{default:o},c={out:s.bool,left:s.bool,right:s.bool,top:s.bool,bottom:s.bool,big:s.bool,mirror:s.bool,opposite:s.bool,duration:s.number,timeout:s.number,distance:s.string,delay:s.number,count:s.number,forever:s.bool},u={};a.propTypes=c,t.default=a,e.exports=t.default},199:function(e,t,i){"use strict";i(200)("big",function(e){return function(){return e(this,"big","","")}})},200:function(e,t,i){var n=i(1),a=i(8),o=i(32),s=/"/g,r=function(e,t,i,n){var a=String(o(e)),r="<"+t;return""!==i&&(r+=" "+i+'="'+String(n).replace(s,"&quot;")+'"'),r+">"+a+"</"+t+">"};e.exports=function(e,t){var i={};i[e]=t(r),n(n.P+n.F*a(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",i)}},201:function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}i(22),i(90),i(49),Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e};t.default=function(e,t,i,n){return"in"in e&&(e.when=e.in),o.default.Children.count(n)<2?o.default.createElement(s.default,a({},e,{inEffect:t,outEffect:i,children:n})):(n=o.default.Children.map(n,function(n){return o.default.createElement(s.default,a({},e,{inEffect:t,outEffect:i,children:n}))}),"Fragment"in o.default?o.default.createElement(o.default.Fragment,null,n):o.default.createElement("span",null,n))};var o=n(i(0)),s=n(i(202));e.exports=t.default},202:function(e,t,i){"use strict";i(39),i(49),i(69),i(22),i(67),i(30),i(53),i(38),i(130),i(91),i(90),Object.defineProperty(t,"__esModule",{value:!0});var n,a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var i=[],n=!0,a=!1,o=void 0;try{for(var s,r=e[Symbol.iterator]();!(n=(s=r.next()).done)&&(i.push(s.value),!t||i.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{!n&&r.return&&r.return()}finally{if(a)throw o}}return i}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},r=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),l=i(0),d=(n=l)&&n.__esModule?n:{default:n},c=i(50),u=i(196),p=(0,c.shape)({make:c.func,duration:c.number.isRequired,delay:c.number.isRequired,forever:c.bool,count:c.number.isRequired,style:c.object.isRequired,reverse:c.bool}),h={collapse:c.bool,collapseEl:c.element,cascade:c.bool,wait:c.number,force:c.bool,disabled:c.bool,appear:c.bool,enter:c.bool,exit:c.bool,fraction:c.number,refProp:c.string,innerRef:c.func,onReveal:c.func,unmountOnExit:c.bool,mountOnEnter:c.bool,inEffect:p.isRequired,outEffect:(0,c.oneOfType)([p,(0,c.oneOf)([!1])]).isRequired,ssrReveal:c.bool,collapseOnly:c.bool,ssrFadeout:c.bool},f={transitionGroup:c.object},v=function(e){function t(e,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,i));return n.isOn=void 0===e.when||!!e.when,n.state={collapse:e.collapse?t.getInitialCollapseStyle(e):void 0,style:{opacity:n.isOn&&!e.ssrReveal||!e.outEffect?void 0:0}},n.savedChild=!1,n.isShown=!1,u.observerMode?n.handleObserve=n.handleObserve.bind(n):(n.revealHandler=n.makeHandler(n.reveal),n.resizeHandler=n.makeHandler(n.resize)),n.saveRef=n.saveRef.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,d["default"].Component),r(t,[{key:"saveRef",value:function(e){this.childRef&&this.childRef(e),this.props.innerRef&&this.props.innerRef(e),this.el!==e&&(this.el=e&&"offsetHeight"in e?e:void 0,this.observe(this.props,!0))}},{key:"invisible",value:function(){this&&this.el&&(this.savedChild=!1,this.isShown||(this.setState({hasExited:!0,collapse:this.props.collapse?s({},this.state.collapse,{visibility:"hidden"}):null,style:{opacity:0}}),!u.observerMode&&this.props.collapse&&window.document.dispatchEvent(u.collapseend)))}},{key:"animationEnd",value:function(e,t,i){var n=this,a=i.forever,o=i.count,s=i.delay,r=i.duration;if(!a){this.animationEndTimeout=window.setTimeout(function(){n&&n.el&&(n.animationEndTimeout=void 0,e.call(n))},s+(r+(t?r:0)*o))}}},{key:"getDimensionValue",value:function(){return this.el.offsetHeight+parseInt(window.getComputedStyle(this.el,null).getPropertyValue("margin-top"),10)+parseInt(window.getComputedStyle(this.el,null).getPropertyValue("margin-bottom"),10)}},{key:"collapse",value:function(e,t,i){var n=i.duration+(t.cascade?i.duration:0),a=this.isOn?this.getDimensionValue():0,o=void 0,s=void 0;if(t.collapseOnly)o=i.duration/3,s=i.delay;else{var r=n>>2,l=r>>1;o=r,s=i.delay+(this.isOn?0:n-r-l),e.style.animationDuration=n-r+(this.isOn?l:-l)+"ms",e.style.animationDelay=i.delay+(this.isOn?r-l:0)+"ms"}return e.collapse={height:a,transition:"height "+o+"ms ease "+s+"ms",overflow:t.collapseOnly?"hidden":void 0},e}},{key:"animate",value:function(e){if(this&&this.el&&(this.unlisten(),this.isShown!==this.isOn)){this.isShown=this.isOn;var t=!this.isOn&&e.outEffect,i=e[t?"outEffect":"inEffect"],n="style"in i&&i.style.animationName||void 0,a=void 0;e.collapseOnly?a={hasAppeared:!0,hasExited:!1,style:{opacity:1}}:((e.outEffect||this.isOn)&&i.make&&(n=i.make),a={hasAppeared:!0,hasExited:!1,collapse:void 0,style:s({},i.style,{animationDuration:i.duration+"ms",animationDelay:i.delay+"ms",animationIterationCount:i.forever?"infinite":i.count,opacity:1,animationName:n}),className:i.className}),this.setState(e.collapse?this.collapse(a,e,i):a),t?(this.savedChild=d.default.cloneElement(this.getChild()),this.animationEnd(this.invisible,e.cascade,i)):this.savedChild=!1,this.onReveal(e)}}},{key:"onReveal",value:function(e){e.onReveal&&this.isOn&&(this.onRevealTimeout&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)),e.wait?this.onRevealTimeout=window.setTimeout(e.onReveal,e.wait):e.onReveal())}},{key:"componentWillUnmount",value:function(){this.unlisten(),u.ssr&&(0,u.disableSsr)()}},{key:"handleObserve",value:function(e,t){o(e,1)[0].intersectionRatio>0&&(t.disconnect(),this.observer=null,this.reveal(this.props,!0))}},{key:"observe",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(this.el&&u.observerMode){if(this.observer){if(!t)return;this.observer.disconnect()}else if(t)return;this.observer=new IntersectionObserver(this.handleObserve,{threshold:e.fraction}),this.observer.observe(this.el)}}},{key:"reveal",value:function(e){var t=this,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];u.globalHide||(0,u.hideAll)(),this&&this.el&&(e||(e=this.props),u.ssr&&(0,u.disableSsr)(),this.isOn&&this.isShown&&void 0!==e.spy?(this.isShown=!1,this.setState({style:{}}),window.setTimeout(function(){return t.reveal(e)},200)):i||this.inViewport(e)||e.force?this.animate(e):u.observerMode?this.observe(e):this.listen())}},{key:"componentDidMount",value:function(){var e=this;if(this.el&&!this.props.disabled){this.props.collapseOnly||("make"in this.props.inEffect&&this.props.inEffect.make(!1,this.props),void 0!==this.props.when&&this.props.outEffect&&"make"in this.props.outEffect&&this.props.outEffect.make(!0,this.props));var i=this.context.transitionGroup,n=i&&!i.isMounting?!("enter"in this.props&&!1===this.props.enter):this.props.appear;return this.isOn&&((void 0!==this.props.when||void 0!==this.props.spy)&&!n||u.ssr&&!u.fadeOutEnabled&&!this.props.ssrFadeout&&this.props.outEffect&&!this.props.ssrReveal&&t.getTop(this.el)<window.pageYOffset+window.innerHeight)?(this.isShown=!0,this.setState({hasAppeared:!0,collapse:this.props.collapse?{height:this.getDimensionValue()}:this.state.collapse,style:{opacity:1}}),void this.onReveal(this.props)):u.ssr&&(u.fadeOutEnabled||this.props.ssrFadeout)&&this.props.outEffect&&t.getTop(this.el)<window.pageYOffset+window.innerHeight?(this.setState({style:{opacity:0,transition:"opacity 1000ms 1000ms"}}),void window.setTimeout(function(){return e.reveal(e.props,!0)},2e3)):void(this.isOn&&(this.props.force?this.animate(this.props):this.reveal(this.props)))}}},{key:"cascade",value:function(e){var t=this,i=void 0;i="string"==typeof e?e.split("").map(function(e,t){return d.default.createElement("span",{key:t,style:{display:"inline-block",whiteSpace:"pre"}},e)}):d.default.Children.toArray(e);var n=this.props[this.isOn||!this.props.outEffect?"inEffect":"outEffect"],o=n.duration,r=n.reverse,l=i.length,c=2*o;this.props.collapse&&(c=parseInt(this.state.style.animationDuration,10),o=c/2);var p=r?l:0;return i.map(function(e){return"object"===(void 0===e?"undefined":a(e))&&e?d.default.cloneElement(e,{style:s({},e.props.style,t.state.style,{animationDuration:Math.round((0,u.cascade)(r?p--:p++,0,l,o,c))+"ms"})}):e})}},{key:"componentWillReceiveProps",value:function(e){void 0!==e.when&&(this.isOn=!!e.when),e.fraction!==this.props.fraction&&this.observe(e,!0),!this.isOn&&e.onExited&&"exit"in e&&!1===e.exit?e.onExited():e.disabled||(e.collapse&&!this.props.collapse&&(this.setState({style:{},collapse:t.getInitialCollapseStyle(e)}),this.isShown=!1),e.when===this.props.when&&e.spy===this.props.spy||this.reveal(e),this.onRevealTimeout&&!this.isOn&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)))}},{key:"getChild",value:function(){if(this.savedChild&&!this.props.disabled)return this.savedChild;if("object"===a(this.props.children)){var e=d.default.Children.only(this.props.children);return"type"in e&&"string"==typeof e.type||"ref"!==this.props.refProp?e:d.default.createElement("div",null,e)}return d.default.createElement("div",null,this.props.children)}},{key:"render",value:function(){var e;e=this.state.hasAppeared?!this.props.unmountOnExit||!this.state.hasExited||this.isOn:!this.props.mountOnEnter||this.isOn;var t=this.getChild();"function"==typeof t.ref&&(this.childRef=t.ref);var i=!1,n=t.props,a=n.style,o=n.className,r=n.children,l=this.props.disabled?o:(this.props.outEffect?u.namespace:"")+(this.state.className?" "+this.state.className:"")+(o?" "+o:"")||void 0,c=void 0;"function"==typeof this.state.style.animationName&&(this.state.style.animationName=this.state.style.animationName(!this.isOn,this.props)),this.props.cascade&&!this.props.disabled&&r&&this.state.style.animationName?(i=this.cascade(r),c=s({},a,{opacity:1})):c=this.props.disabled?a:s({},a,this.state.style);var p=s({},this.props.props,function(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}({className:l,style:c},this.props.refProp,this.saveRef)),h=d.default.cloneElement(t,p,e?i||r:void 0);return void 0!==this.props.collapse?this.props.collapseEl?d.default.cloneElement(this.props.collapseEl,{style:s({},this.props.collapseEl.style,this.props.disabled?void 0:this.state.collapse),children:h}):d.default.createElement("div",{style:this.props.disabled?void 0:this.state.collapse,children:h}):h}},{key:"makeHandler",value:function(e){var t=this,i=function(){e.call(t,t.props),t.ticking=!1};return function(){t.ticking||((0,u.raf)(i),t.ticking=!0)}}},{key:"inViewport",value:function(e){if(!this.el||window.document.hidden)return!1;var i=this.el.offsetHeight,n=window.pageYOffset-t.getTop(this.el),a=Math.min(i,window.innerHeight)*(u.globalHide?e.fraction:0);return n>a-window.innerHeight&&n<i-a}},{key:"resize",value:function(e){this&&this.el&&this.isOn&&this.inViewport(e)&&(this.unlisten(),this.isShown=this.isOn,this.setState({hasExited:!this.isOn,hasAppeared:!0,collapse:void 0,style:{opacity:this.isOn||!e.outEffect?1:0}}),this.onReveal(e))}},{key:"listen",value:function(){u.observerMode||this.isListener||(this.isListener=!0,window.addEventListener("scroll",this.revealHandler,{passive:!0}),window.addEventListener("orientationchange",this.revealHandler,{passive:!0}),window.document.addEventListener("visibilitychange",this.revealHandler,{passive:!0}),window.document.addEventListener("collapseend",this.revealHandler,{passive:!0}),window.addEventListener("resize",this.resizeHandler,{passive:!0}))}},{key:"unlisten",value:function(){!u.observerMode&&this.isListener&&(window.removeEventListener("scroll",this.revealHandler,{passive:!0}),window.removeEventListener("orientationchange",this.revealHandler,{passive:!0}),window.document.removeEventListener("visibilitychange",this.revealHandler,{passive:!0}),window.document.removeEventListener("collapseend",this.revealHandler,{passive:!0}),window.removeEventListener("resize",this.resizeHandler,{passive:!0}),this.isListener=!1),this.onRevealTimeout&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)),this.animationEndTimeout&&(this.animationEndTimeout=window.clearTimeout(this.animationEndTimeout))}}],[{key:"getInitialCollapseStyle",value:function(e){return{height:0,visibility:e.when?void 0:"hidden"}}},{key:"getTop",value:function(e){for(;void 0===e.offsetTop;)e=e.parentNode;for(var t=e.offsetTop;e.offsetParent;t+=e.offsetTop)e=e.offsetParent;return t}}]),t}();v.propTypes=h,v.defaultProps={fraction:.2,refProp:"ref"},v.contextTypes=f,v.displayName="RevealBase",t.default=v,e.exports=t.default},203:function(e,t,i){"use strict";var n=i(0),a=i.n(n);i(210);t.a=function(e){var t=a.a.createElement("a",{className:"btn button-2",href:e.learn_more,target:"_blank",rel:"noopener noreferrer"},"Learn More"),i={backgroundImage:"url("+e.image+")"};return a.a.createElement("div",{className:"card project"},a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col-sm-4"},a.a.createElement("div",{className:"card-image",style:i,alt:""})),a.a.createElement("div",{className:"col-sm-8 card-content"},a.a.createElement("h4",{className:"card-title"},e.title),a.a.createElement("p",{className:"card-text"},e.children),e.learn_more&&t)))}},217:function(e,t){e.exports="data:image/png;base64,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"},218:function(e,t,i){e.exports=i.p+"static/taxi-130a00c17bc25f1d6275dbf859a5d68b.png"},219:function(e,t,i){e.exports=i.p+"static/twitter-349e98df3f57e636bbb3625ab70e7bc0.png"},220:function(e,t,i){e.exports=i.p+"static/spam-e36822433a6ea1012153d2358d4bf9d6.png"}}]);
//# sourceMappingURL=component---src-pages-interests-data-science-js-b4d03aa3fd252762a2c2.js.map