(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[3],{102:function(t,e,n){t.exports={container:"App_container__2MweG"}},103:function(t,e,n){t.exports={container:"ContactForm_container__3tnp5",label:"ContactForm_label__3h9Ix",input:"ContactForm_input__4oMAT"}},104:function(t,e,n){t.exports={container:"ContactList_container__2J0el",list:"ContactList_list__CCvTN",button:"ContactList_button__2GTzq"}},108:function(t,e,n){"use strict";n.r(e);var a=n(20),c=n(21),i=n(23),o=n(22),r=n(2),s=n(0),u=n(109),l=n(102),b=n.n(l),h=n(98),d=n(8),m=n(103),p=n.n(m),j=n(17),f=n(16),O=n(15),v=n.n(O);v.a.defaults.baseURL="https://goit-phonebook-api.herokuapp.com";var x={removeContact:function(t){return function(e){e(f.a.removeListRequest()),v.a.delete("/contacts/".concat(t)).then((function(){e(f.a.removeListSuccess(t))})).catch((function(t){return e(f.a.removeListError(t))}))}},addContact:function(t){var e=t.name,n=t.number;return function(t){t(f.a.addListRequest()),v.a.post("/contacts",{name:e,number:n}).then((function(e){t(f.a.addListSuccess(e.data))})).catch((function(e){return t(f.a.addListError(e))}))}},fetchContact:function(){return function(t){t(f.a.fetchListRequest()),v.a.get("/contacts").then((function(e){var n=e.data;t(f.a.fetchListSuccess(n))})).catch((function(e){return t(f.a.fetchListError(e))}))}}},C=(n(47),function(t){var e=t.isVisible;return Object(r.jsx)(u.a,{in:e,timeout:250,classNames:"answer",unmountOnExit:!0,children:Object(r.jsx)("div",{className:"answerContainer",children:Object(r.jsx)("p",{children:"Contact already declared"})})})}),_=function(t){return t.contacts.filter},g=function(t){return t.contacts.items},y=function(t){return t.contacts.items.filter((function(e){return e.name.toLowerCase().includes(t.contacts.filter.toLowerCase())}))},N=n(24),L=function(t){Object(i.a)(n,t);var e=Object(o.a)(n);function n(){var t;Object(a.a)(this,n);for(var c=arguments.length,i=new Array(c),o=0;o<c;o++)i[o]=arguments[o];return(t=e.call.apply(e,[this].concat(i))).state={name:"",number:"",isVisible:!1},t.handleChange=function(e){var n=e.target;t.setState(Object(d.a)({},n.name,n.value))},t.handleSubmit=function(e){if(e.preventDefault(),t.props.list.some((function(e){return e.name===t.state.name})))return t.setState({isVisible:!0}),void setTimeout((function(){t.setState({isVisible:!1})}),1500);t.props.addContact(Object(h.a)({},t.state)),t.setState({name:"",number:""})},t}return Object(c.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number,a=t.isVisible;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{children:Object(r.jsx)(C,{isVisible:a})}),Object(r.jsxs)("form",{className:p.a.container,action:"",onSubmit:this.handleSubmit,children:[Object(r.jsx)("label",{className:p.a.label,htmlFor:"name",children:"Name"}),Object(r.jsx)("input",{required:!0,className:p.a.input,type:"text",name:"name",placeholder:"name",value:e,onChange:this.handleChange}),Object(r.jsx)("label",{className:p.a.label,htmlFor:"number",children:"Number"}),Object(r.jsx)("input",{required:!0,className:p.a.input,type:"tel",name:"number",placeholder:"number",value:n,onChange:this.handleChange}),Object(r.jsx)("input",{className:"form-add",type:"submit",value:"Add contact"}),Object(r.jsx)("button",{className:"form-out",type:"button",onClick:this.props.onLogout,children:"Logout"})]})]})}}]),n}(s.Component),k={addContact:x.addContact,onLogout:N.a.logOut},w=Object(j.b)((function(t){return{list:g(t)}}),k)(L),F=n(104),S=n.n(F),A=n(110),q=function(t){Object(i.a)(n,t);var e=Object(o.a)(n);function n(){return Object(a.a)(this,n),e.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var t=this;return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(A.a,{component:"ul",className:S.a.container,children:this.props.list.map((function(e){return Object(r.jsx)(u.a,{classNames:"showbutton",timeout:250,children:Object(r.jsxs)("li",{className:S.a.list,children:[e.name," : ",e.number,Object(r.jsx)("button",{className:S.a.button,type:"button",onClick:function(){return t.props.delete(e.id)},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]},e.id)},e.id)}))})})}}]),n}(s.Component),R={delete:x.removeContact},V=Object(j.b)((function(t){return{list:y(t)}}),R)(q),E={filterRender:f.a.filterContact},T=Object(j.b)((function(t){return{filter:_(t)}}),E)((function(t){var e=t.filterRender,n=t.filter;return Object(r.jsxs)("div",{className:"filter-cont",children:[Object(r.jsx)("label",{children:"Find contacts by name"}),Object(r.jsx)("input",{type:"text",value:n,onChange:function(t){return e(t.target.value)}})]})})),D=n(48),J=function(t){Object(i.a)(n,t);var e=Object(o.a)(n);function n(){return Object(a.a)(this,n),e.apply(this,arguments)}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.props.isAuthenticated?this.props.onFetchContact():this.props.history.replace("/")}},{key:"componentDidUpdate",value:function(){this.props.isAuthenticated||this.props.history.replace("/")}},{key:"render",value:function(){return Object(r.jsxs)("div",{className:b.a.container,children:[this.props.isAuthenticated&&Object(r.jsx)(D.a,{}),Object(r.jsx)(u.a,{in:!0,classNames:"logo",timeout:250,appear:!0,unmountOnExit:!0,children:Object(r.jsx)("h1",{children:"Phonebook"})}),Object(r.jsx)(w,{}),Object(r.jsx)("h2",{children:"Contacts"}),Object(r.jsx)(T,{}),Object(r.jsx)(V,{})]})}}]),n}(s.Component),M={onFetchContact:x.fetchContact};e.default=Object(j.b)((function(t){return{isAuthenticated:t.auth.token}}),M)(J)}}]);
//# sourceMappingURL=3.bd78cedd.chunk.js.map