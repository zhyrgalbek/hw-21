(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var r=n(4),a=n.n(r),c=(n(10),n(5)),l=n(1),i=n(2);function u(e,t){return"ENTER_VALUE"===t.type?Object(l.a)(Object(l.a)({},e),{},{enteredValue:t.value}):"BLUR"===t.type?Object(l.a)(Object(l.a)({},e),{},{isTouched:t.isTouched}):void 0}var o=function(e){var t=Object(i.useReducer)(u,{enteredValue:"",isTouched:!1}),n=Object(c.a)(t,2),r=n[0],a=n[1],l=e(r.enteredValue),o=!l&&r.isTouched;return{value:r.enteredValue,isValid:l,hasError:o,valueChangeHandler:function(e){a({type:"ENTER_VALUE",value:e.target.value})},inputBlurHandler:function(e){a({type:"BLUR",isTouched:!0})}}},s=n(0),d=function(e){var t=o((function(e){return""!==e.trim()})),n=t.value,r=t.isValid,a=t.hasError,c=t.valueChangeHandler,l=t.inputBlurHandler,i=o((function(e){return e.includes("@")})),u=i.value,d=i.isValid,j=i.hasError,m=i.valueChangeHandler,b=i.inputBlurHandler,h=!1;r&&d&&(h=!0);var p=a?"form-control invalid":"form-control",v=j?"form-control invalid":"form-control";return Object(s.jsxs)("form",{onSubmit:function(e){e.preventDefault()},children:[Object(s.jsxs)("div",{className:p,children:[Object(s.jsx)("label",{htmlFor:"name",children:"Your Name"}),Object(s.jsx)("input",{type:"text",id:"name",value:n,onChange:c,onBlur:l}),a&&Object(s.jsx)("p",{children:"Name must not be empty"})]}),Object(s.jsxs)("div",{className:v,children:[Object(s.jsx)("label",{htmlFor:"email",children:"Your email"}),Object(s.jsx)("input",{type:"email",id:"email",value:u,onChange:m,onBlur:b}),j&&Object(s.jsx)("p",{children:"Name must not be empty"})]}),Object(s.jsx)("div",{className:"form-actions",children:Object(s.jsx)("button",{disabled:!h,children:"Submit"})})]})};var j=function(){return Object(s.jsx)("div",{className:"app",children:Object(s.jsx)(d,{})})};a.a.render(Object(s.jsx)(j,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.96e5c83e.chunk.js.map