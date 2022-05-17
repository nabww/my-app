(this["webpackJsonpreact-todo-app"]=this["webpackJsonpreact-todo-app"]||[]).push([[0],{17:function(e,t,c){e.exports={item:"TodoItem_item__1OxOM",checkbox:"TodoItem_checkbox__1V78p",textInput:"TodoItem_textInput__2dUXr"}},29:function(e,t,c){},44:function(e,t,c){"use strict";c.r(t);var n=c(2),o=c(1),a=c.n(o),i=(c(29),c(22)),s=c(8),r=c(21),l=c(11),u=c(9),d=function(){return Object(n.jsx)("header",{style:{padding:"20px 0",lineHeight:"1.5em"},children:Object(n.jsx)("h1",{style:{fontSize:"6rem",fontWeight:"600",marginBottom:"2rem",lineHeight:"1em",color:"#FF7F50",textTransform:"lowercase",textAlign:"center"},children:"todos"})})},j=c(15),b=c(16),h=function(e){var t=Object(o.useState)({title:""}),c=Object(u.a)(t,2),a=c[0],i=c[1];return Object(n.jsxs)("form",{onSubmit:function(t){t.preventDefault(),a.title.trim()?(e.addTodoProps(a.title),i({title:""})):alert("Please write item")},className:"form-container",children:[Object(n.jsx)("input",{type:"text",className:"input-text",placeholder:"Add todo...",value:a.title,name:"title",onChange:function(e){i(Object(l.a)(Object(l.a)({},a),{},Object(j.a)({},e.target.name,e.target.value)))}}),Object(n.jsx)("button",{className:"input-submit",children:Object(n.jsx)(b.a,{color:"darkcyan",size:"20px",className:"submit-icon"})})]})},p=c(17),O=c.n(p),x=function(e){var t=Object(o.useState)(!1),c=Object(u.a)(t,2),a=c[0],i=c[1],s=e.todo,r=s.completed,l=s.id,d=s.title,j={},h={};return a?j.display="none":h.display="none",Object(o.useEffect)((function(){return function(){console.log("Cleaning Up...")}}),[]),Object(n.jsxs)("li",{className:O.a.item,children:[Object(n.jsxs)("div",{onDoubleClick:function(){i(!0)},style:j,children:[Object(n.jsx)("input",{type:"checkbox",className:O.a.checkbox,checked:r,onChange:function(){return e.handleChangeProps(l)}}),Object(n.jsx)("button",{onClick:function(){return e.deleteTodoProps(l)},children:Object(n.jsx)(b.b,{style:{color:"orangered",fontSize:"16px"}})}),Object(n.jsx)("span",{style:r?{fontStyle:"italic",color:"#595959",opacity:.4,textDecoration:"line-through"}:null,children:d})]}),Object(n.jsx)("input",{type:"text",style:h,className:O.a.textInput,value:d,onChange:function(t){e.setUpdate(t.target.value,l)},onKeyDown:function(e){"Enter"===e.key&&i(!1)}})]})},f=function(e){return Object(n.jsx)("ul",{children:e.todos.map((function(t){return Object(n.jsx)(x,{todo:t,handleChangeProps:e.handleChangeProps,deleteTodoProps:e.deleteTodoProps,setUpdate:e.setUpdate},t.id)}))})},m=c(46),g=c(3),y=function(){console.log(Object(g.f)());var e=Object(g.f)().slug,t=[{slug:"about-app",title:"About the App",description:"In this app, you can add, delete, submit and edit items. To edit items, simply double click on it. Once you are done, press the enter key to resubmit. This app will persist your data in the browser local storage. So whether you reload, close your app or reopened it, you still have access to your to-dos items."},{slug:"about-author",title:"About the Author",description:"This app was developed by Nabel."}].find((function(t){return t.slug===e})),c=t.title,o=t.description;return Object(n.jsxs)("div",{className:"main__content",children:[Object(n.jsxs)("h1",{children:[" ",c]})," ",Object(n.jsx)("p",{children:o})]})},v=function(){console.log(g.g);var e=Object(g.g)(),t=e.url,c=e.path;return Object(n.jsxs)("div",{className:"about__content",children:[Object(n.jsxs)("ul",{className:"about__list",children:[Object(n.jsx)("li",{children:Object(n.jsx)(s.b,{to:"".concat(t,"/about-app"),children:"About App"})}),Object(n.jsx)("li",{children:Object(n.jsx)(s.b,{to:"".concat(t,"/about-author"),children:"About Author"})})]}),Object(n.jsx)(g.a,{path:"".concat(c,"/:slug"),children:Object(n.jsx)(y,{})})]})},N=function(){return Object(n.jsx)("div",{children:Object(n.jsx)("h3",{children:"No match for this page"})})},k=c(25),S=c(26),_=function(){var e=Object(o.useState)(!1),t=Object(u.a)(e,2),c=t[0],a=t[1];return Object(n.jsxs)("nav",{className:"navBar",children:[Object(n.jsx)("button",{onClick:function(){a((function(e){return!e}))},children:c?Object(n.jsx)(k.a,{style:{color:"#fff",width:"40px",height:"40px"}}):Object(n.jsx)(S.a,{style:{color:"#7b7b7b",width:"40px",height:"40px"}})}),Object(n.jsx)("ul",{className:"menuNav ".concat(c?" showMenu":""),children:[{id:1,path:"/",text:"Home"},{id:2,path:"/about",text:"About"}].map((function(e){return Object(n.jsx)("li",{children:Object(n.jsx)(s.c,{to:e.path,activeClassName:"active-link",onClick:function(){a(!1)},exact:!0,children:e.text})},e.id)}))})]})},C=function(){var e=Object(o.useState)(function(){var e=localStorage.getItem("todos");return JSON.parse(e)||[]}()),t=Object(u.a)(e,2),c=t[0],a=t[1];Object(o.useEffect)((function(){var e=localStorage.getItem("todos"),t=JSON.parse(e);t&&a(t)}),[a]),Object(o.useEffect)((function(){var e=JSON.stringify(c);localStorage.setItem("todos",e)}),[c]);return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)(s.a,{forceRefresh:!0,children:[Object(n.jsx)(_,{}),Object(n.jsxs)(g.c,{children:[Object(n.jsx)(g.a,{exact:!0,path:"/",children:Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"inner",children:[Object(n.jsx)(d,{}),Object(n.jsx)(h,{addTodoProps:function(e){var t={id:Object(m.a)(),title:e,completed:!1};a([].concat(Object(r.a)(c),[t]))}}),Object(n.jsx)(f,{todos:c,handleChangeProps:function(e){a((function(t){return t.map((function(t){return t.id===e?Object(l.a)(Object(l.a)({},t),{},{completed:!t.completed}):t}))}))},deleteTodoProps:function(e){a(Object(r.a)(c.filter((function(t){return t.id!==e}))))},setUpdate:function(e,t){a(c.map((function(c){return c.id===t&&(c.title=e),c})))}})]})})}),Object(n.jsx)(g.a,{path:"/about",children:Object(n.jsx)(v,{})}),Object(n.jsx)(g.a,{path:"*",children:Object(n.jsx)(N,{})})]})]})})};i.createRoot(document.getElementById("root")).render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(s.a,{forceRefresh:!0,children:Object(n.jsx)(C,{})})}))}},[[44,1,2]]]);
//# sourceMappingURL=main.10d563b2.chunk.js.map