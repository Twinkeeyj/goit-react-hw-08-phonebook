(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[4],{110:function(e,t,n){"use strict";n.r(t);var a=n(39),s=n(6),i=n(17),o=n(18),c=n(20),r=n(19),h=n(1),l=n(0),p=n(27),u=n(38),b=n(12),d=n(29),j=function(e){Object(c.a)(n,e);var t=Object(r.a)(n);function n(){var e;Object(i.a)(this,n);for(var o=arguments.length,c=new Array(o),r=0;r<o;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={email:"",password:""},e.handleChange=function(t){var n=t.target,a=n.name,i=n.value;e.setState(Object(s.a)({},a,i))},e.handleSubmit=function(t){t.preventDefault(),e.props.onLogin(Object(a.a)({},e.state)),e.setState({name:"",email:"",password:""})},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.isAuthenticated&&this.props.history.replace("/contacts")}},{key:"componentDidUpdate",value:function(){this.props.isAuthenticated&&this.props.history.replace("/contacts")}},{key:"render",value:function(){var e=this.state,t=e.email,n=e.password;return Object(h.jsxs)("div",{children:[Object(h.jsx)(u.b,{to:p.a.HomeView,children:"back"}),Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"Login page"}),Object(h.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(h.jsxs)("label",{children:["Email",Object(h.jsx)("input",{type:"email",name:"email",value:t,onChange:this.handleChange})]}),Object(h.jsxs)("label",{children:["Password",Object(h.jsx)("input",{type:"password",name:"password",value:n,onChange:this.handleChange})]}),Object(h.jsx)("button",{type:"submit",children:"Login"})]})]})]})}}]),n}(l.Component);t.default=Object(b.b)((function(e){return{isAuthenticated:e.auth.token}}),{onLogin:d.a.logIn})(j)}}]);
//# sourceMappingURL=4.eeb6a907.chunk.js.map