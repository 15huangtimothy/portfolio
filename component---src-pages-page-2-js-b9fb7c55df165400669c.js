(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{147:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(158),o=n(159);t.default=function(){return r.a.createElement(o.a,null,r.a.createElement("h1",null,"Hi from the second page"),r.a.createElement("p",null,"Welcome to page 2"),r.a.createElement(i.a,{to:"/"},"Go back to the homepage"))}},156:function(e,t,n){var a;e.exports=(a=n(161))&&a.default||a},157:function(e,t,n){"use strict";var a=n(7),r=n.n(a),i=n(0),o=n.n(i),u=(n(163),function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={didMount:!1},t}r()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this;setTimeout(function(){e.setState({didMount:!0})},this.props.timeout)},n.render=function(){return o.a.createElement("div",{className:"fade-in "+(this.state.didMount&&"visible-1"),style:{transition:"opacity "+this.props.fadeTime+"ms ease-in"}},this.props.children)},t}(i.Component));t.a=u},158:function(e,t,n){"use strict";n.d(t,"b",function(){return l});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),u=n(33),c=n.n(u);n.d(t,"a",function(){return c.a});n(156);var s=r.a.createContext({}),l=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};l.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},159:function(e,t,n){"use strict";var a=n(160),r=n(0),i=n.n(r),o=n(4),u=n.n(o),c=n(158),s=n(157),l=(n(164),{margin:"0 auto",maxWidth:"60rem",padding:"0px 1.0875rem 1.45rem",paddingTop:0}),d=function(e){var t=e.children;return i.a.createElement(c.b,{query:"3571648746",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"layout",style:l},i.a.createElement("main",null,t),i.a.createElement(s.a,{timeout:3e3,fadeTime:500},i.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",i.a.createElement("a",{className:"link-animation",href:"https://www.gatsbyjs.org",target:"_blank",rel:"noopener noreferrer"},"Gatsby")))))},data:a})};d.propTypes={children:u.a.node.isRequired},t.a=d},160:function(e){e.exports={data:{site:{siteMetadata:{title:'"Tim Huang"'}}}}},161:function(e,t,n){"use strict";n.r(t);n(34);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),u=n(56),c=n(2),s=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return n?r.a.createElement(u.a,Object.assign({location:t,pageResources:n},n.json)):null};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s}}]);
//# sourceMappingURL=component---src-pages-page-2-js-b9fb7c55df165400669c.js.map