(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{10:function(e,a,t){},12:function(e,a,t){"use strict";t.r(a);var i=t(5),l=t.n(i),s=(t(10),t(3)),c=t(1),n=t(2),r=t(0);function m(e,a){if("VALIDNAME"===a.type){var t=!1;return t=-1!==a.value.search(/[^a-zA-Z]+/)||""===a.value,Object(c.a)(Object(c.a)({},e),{},{name:a.value,isValidName:t})}if("VALID_LASTNAME"===a.type){var i=!1;return i=-1!==a.value.search(/[^a-zA-Z]+/)||""===a.value,Object(c.a)(Object(c.a)({},e),{},{lastName:a.value,isValidLastName:i})}if("EMAIL"===a.type||""===a.value){var l=!1;return l=!a.value.includes("@"),Object(c.a)(Object(c.a)({},e),{},{email:a.value,isValidEmail:l})}if("DISABLED"===a.type){var s=!0;return!0!==e.isValidName&&!0!==e.isValidLastName&&!0!==e.isValidEmail&&""!==e.name&&""!==e.lastName&&""!==e.email&&(s=!1),Object(c.a)(Object(c.a)({},e),{},{submitDisabled:s})}return Object(c.a)({},e)}var u=function(e){var a=Object(n.useReducer)(m,{name:"",isValidName:!1,lastName:"",isValidLastName:!1,email:"",isValidEmail:!1,submitDisabled:!0}),t=Object(s.a)(a,2),i=t[0],l=t[1];Object(n.useEffect)((function(){l({type:"DISABLED"})}),[i.name,i.lastName,i.email]);var c=i.isValidName?"form-control invalid":"form-control",u=i.isValidLastName?"form-control invalid":"form-control",d=i.isValidEmail?"form-control invalid":"form-control";return Object(r.jsxs)("form",{children:[Object(r.jsxs)("div",{className:"control-group",children:[Object(r.jsxs)("div",{className:c,children:[Object(r.jsx)("label",{htmlFor:"name",children:"First Name"}),Object(r.jsx)("input",{type:"text",id:"name",onChange:function(e){l({type:"VALIDNAME",value:e.target.value})}})]}),Object(r.jsxs)("div",{className:u,children:[Object(r.jsx)("label",{htmlFor:"lastname",children:"Last Name"}),Object(r.jsx)("input",{type:"text",id:"lastname",onChange:function(e){l({type:"VALID_LASTNAME",value:e.target.value})}})]})]}),Object(r.jsxs)("div",{className:d,children:[Object(r.jsx)("label",{htmlFor:"email",children:"E-Mail Address"}),Object(r.jsx)("input",{type:"email",id:"email",onChange:function(e){l({type:"EMAIL",value:e.target.value})}})]}),Object(r.jsx)("div",{className:"form-actions",children:Object(r.jsx)("input",{type:"submit",value:"Submit",disabled:i.submitDisabled})})]})};var d=function(){return Object(r.jsx)("div",{className:"app",children:Object(r.jsx)(u,{})})};l.a.render(Object(r.jsx)(d,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.bf6f331c.chunk.js.map