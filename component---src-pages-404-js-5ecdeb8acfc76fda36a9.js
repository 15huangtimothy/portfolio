(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{146:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(159);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},156:function(e,t,n){var a;e.exports=(a=n(161))&&a.default||a},157:function(e,t,n){"use strict";var a=n(7),r=n.n(a),i=n(0),u=n.n(i),o=(n(163),function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={didMount:!1},t}r()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this;setTimeout(function(){e.setState({didMount:!0})},this.props.timeout)},n.render=function(){return u.a.createElement("div",{className:"fade-in "+(this.state.didMount&&"visible-1"),style:{transition:"opacity "+this.props.fadeTime+"ms ease-in"}},this.props.children)},t}(i.Component));t.a=o},158:function(e,t,n){"use strict";n.d(t,"b",function(){return l});var a=n(0),r=n.n(a),i=n(4),u=n.n(i),o=n(33),s=n.n(o);n.d(t,"a",function(){return s.a});n(156);var c=r.a.createContext({}),l=function(e){return r.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};l.propTypes={data:u.a.object,query:u.a.string.isRequired,render:u.a.func,children:u.a.func}},159:function(e,t,n){"use strict";var a=n(160),r=n(0),i=n.n(r),u=n(4),o=n.n(u),s=n(158),c=n(157),l=(n(164),{margin:"0 auto",maxWidth:"60rem",padding:"0px 1.0875rem 1.45rem",paddingTop:0}),d=function(e){var t=e.children;return i.a.createElement(s.b,{query:"3571648746",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"layout",style:l},i.a.createElement("main",null,t),i.a.createElement(c.a,{timeout:3e3,fadeTime:500},i.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",i.a.createElement("a",{className:"link-animation",href:"https://www.gatsbyjs.org"},"Gatsby")))))},data:a})};d.propTypes={children:o.a.node.isRequired},t.a=d},160:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter"}}}}},161:function(e,t,n){"use strict";n.r(t);n(34);var a=n(0),r=n.n(a),i=n(4),u=n.n(i),o=n(56),s=n(2),c=function(e){var t=e.location,n=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:n},n.json))};c.propTypes={location:u.a.shape({pathname:u.a.string.isRequired}).isRequired},t.default=c}}]);
//# sourceMappingURL=component---src-pages-404-js-5ecdeb8acfc76fda36a9.js.map