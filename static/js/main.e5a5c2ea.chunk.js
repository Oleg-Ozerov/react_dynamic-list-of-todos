(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(18)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(7),c=n.n(s),o=n(5),u=n(1),l=n(2),i=n(4),d=n(3),m=(n(14),n(15),n(8)),p=n.n(m),f=(n(16),function(e){var t=e.todos,n=e.setUserId,a=e.setTitle,s=e.setStatus,c=e.changeStatus;return r.a.createElement("div",{className:"TodoList"},r.a.createElement("h2",null,"Todos:"),r.a.createElement("select",{name:"select",onChange:function(e){s(e.target.value)}},r.a.createElement("option",{value:"All"},"All"),r.a.createElement("option",{value:"completed"},"Completed"),r.a.createElement("option",{value:"active"},"Active")),r.a.createElement("input",{type:"text",name:"title",onChange:function(e){a(e.target.value)}}),r.a.createElement("div",{className:"TodoList__list-container"},r.a.createElement("ul",{className:"TodoList__list"},t.map((function(e){return r.a.createElement("li",{key:e.id,className:p()({TodoList__item:!0,"TodoList__item--unchecked":!e.completed,"TodoList__item--checked":e.completed})},r.a.createElement("label",null,r.a.createElement("input",{type:"checkbox",readOnly:!0,checked:e.completed,onChange:function(){return c(e.id)}}),r.a.createElement("p",null,e.title)),r.a.createElement("button",{className:" TodoList__user-button TodoList__user-button--selected button",type:"button",onClick:function(){return n(e.userId)}},"User\xa0",e.userId))})))))}),h=(n(17),function(e){Object(i.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={user:""},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props;(0,t.getUser)(t.userId).then((function(t){return e.setState({user:t})}))}},{key:"componentDidUpdate",value:function(e){var t=this,n=this.props,a=n.getUser,r=n.userId;e.userId!==r&&a(r).then((function(e){return t.setState({user:e})}))}},{key:"render",value:function(){var e=this.props,t=e.clearUser,n=e.userId,a=this.state.user;return r.a.createElement("div",{className:"CurrentUser"},r.a.createElement("h2",{className:"CurrentUser__title"},r.a.createElement("span",null,"Selected user: ".concat(n))),r.a.createElement("h3",{className:"CurrentUser__name"},a.name),r.a.createElement("p",{className:"CurrentUser__email"},a.email),r.a.createElement("p",{className:"CurrentUser__phone"},a.phone),r.a.createElement("button",{type:"button",onClick:function(){return t()}},"Clear"))}}]),n}(r.a.Component)),v="https://mate-api.herokuapp.com",_=function(e){return fetch("".concat(v,"/users/").concat(e,"/")).then((function(e){return e.json()})).then((function(e){return e.data}))},E=function(e){Object(i.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={todos:[],selectedUserId:0,title:"",status:"All"},e.setUserId=function(t){e.setState({selectedUserId:t})},e.setTitle=function(t){e.setState({title:t})},e.setStatus=function(t){e.setState({status:t})},e.clearUser=function(){e.setState({selectedUserId:""})},e.changeStatus=function(t){e.setState((function(e){return{todos:e.todos.map((function(e){return e.id===t?Object(o.a)(Object(o.a)({},e),{},{completed:!e.completed}):Object(o.a)({},e)}))}}))},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("".concat(v,"/todos/")).then((function(e){return e.json()})).then((function(e){return e.data})).then((function(t){return e.setState({todos:t.filter((function(e){return e.title&&e.userId}))})}))}},{key:"render",value:function(){var e,t=this.state,n=t.todos,a=t.selectedUserId,s=t.title,c=t.status,o=n.filter((function(e){return e.title.includes(s)}));switch(c){case"completed":e=o.filter((function(e){return e.completed}));break;case"active":e=o.filter((function(e){return!e.completed}));break;default:e=o}return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"App__sidebar"},r.a.createElement(f,{todos:e,setUserId:this.setUserId,setTitle:this.setTitle,setStatus:this.setStatus,changeStatus:this.changeStatus})),r.a.createElement("div",{className:"App__content"},r.a.createElement("div",{className:"App__content-container"},a?r.a.createElement(h,{userId:a,getUser:_,clearUser:this.clearUser}):"No user selected")))}}]),n}(r.a.Component);c.a.render(r.a.createElement(E,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.e5a5c2ea.chunk.js.map