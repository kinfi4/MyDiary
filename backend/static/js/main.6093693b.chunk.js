(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{12:function(e,t,n){e.exports={topPanel:"fullRecordRead_topPanel__l2ur3",buttonsBlock:"fullRecordRead_buttonsBlock__3yfk7",manageButton:"fullRecordRead_manageButton__2GM1w",recordTitle:"fullRecordRead_recordTitle__2i-_p",recordBody:"fullRecordRead_recordBody__kGYWa",buttonPanel:"fullRecordRead_buttonPanel__3RsGx",createdAt:"fullRecordRead_createdAt__ihhIJ"}},13:function(e,t,n){e.exports={inner:"fullRecordUpdateCreate_inner__2QqHa",topPanel:"fullRecordUpdateCreate_topPanel__3nHhu",bodyBlock:"fullRecordUpdateCreate_bodyBlock__2zszO",titleInput:"fullRecordUpdateCreate_titleInput__21Xnx",bodyInput:"fullRecordUpdateCreate_bodyInput__cGwsI",buttonBlock:"fullRecordUpdateCreate_buttonBlock__AKFhf",saveButton:"fullRecordUpdateCreate_saveButton__2hfMD"}},19:function(e,t,n){e.exports={overflow:"fullRecordBase_overflow__J6t8D",active:"fullRecordBase_active__2kLFt",record:"fullRecordBase_record__CuQP0"}},25:function(e,t,n){e.exports={header:"header_header__3zIYV",logo:"header_logo__1OAXh",logoutButton:"header_logoutButton__oObBh"}},31:function(e,t,n){e.exports={records:"Records_records__2azxT",recordsBlock:"Records_recordsBlock__2z3pC"}},32:function(e,t,n){e.exports={card:"addRecordCard_card__2qgKP",add_sign:"addRecordCard_add_sign__1I9Sw"}},46:function(e,t,n){e.exports={"lds-ring":"AnimatedPageLoading_lds-ring__1sRyI"}},48:function(e,t,n){e.exports={record:"RecordCard_record__2gN3b"}},49:function(e,t,n){e.exports={"lds-ellipsis":"AnimatedRecordsLoading_lds-ellipsis__1C7zP","lds-ellipsis1":"AnimatedRecordsLoading_lds-ellipsis1__3UTCj","lds-ellipsis2":"AnimatedRecordsLoading_lds-ellipsis2__3S3se","lds-ellipsis3":"AnimatedRecordsLoading_lds-ellipsis3__1v65G"}},84:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(20),o=n.n(r),i=(n(54),n(14)),s=n(4),d=n(16),u=n(21),l=n(22),j=n(24),b=n(23),h=n(0),p=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(u.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={username:"",email:"",password:"",password2:""},e.onSubmit=function(t){t.preventDefault();var n=e.state,c=n.username,a=n.email,r=n.password;r!==n.password2||fetch("http://localhost:8000/api/v1/rest-auth/registration/",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({username:c,email:a,password1:r,password2:r})}).catch((function(e){return alert(e)}))},e.onChange=function(t){return e.setState(Object(d.a)({},t.target.name,t.target.value))},e}return Object(l.a)(n,[{key:"render",value:function(){if(this.props.isAuthenticated)return Object(h.jsx)(s.a,{to:"/"});var e=this.state,t=e.username,n=e.email,c=e.password,a=e.password2;return Object(h.jsx)("div",{className:"col-md-3 m-auto",children:Object(h.jsxs)("div",{className:"card card-body mt-5",children:[Object(h.jsx)("h2",{className:"text-center",children:"Register"}),Object(h.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{children:"Username"}),Object(h.jsx)("input",{type:"text",className:"form-control",name:"username",onChange:this.onChange,value:t})]}),Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{children:"Email"}),Object(h.jsx)("input",{type:"email",className:"form-control",name:"email",onChange:this.onChange,value:n})]}),Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{children:"Password"}),Object(h.jsx)("input",{type:"password",className:"form-control",name:"password",onChange:this.onChange,value:c})]}),Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{children:"Confirm Password"}),Object(h.jsx)("input",{type:"password",className:"form-control",name:"password2",onChange:this.onChange,value:a})]}),Object(h.jsx)("div",{className:"form-group",children:Object(h.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Register"})}),Object(h.jsxs)("p",{children:["Already have an account? ",Object(h.jsx)(i.b,{to:"/login",children:"Login"})]})]})]})})}}]),n}(c.Component),f=n(5),O=n(2),m=(n(65),n(11)),v=n.n(m),g=n(33),x=n(13),_=n.n(x),y=Object(f.b)((function(e){return{authToken:e.auth.token}}),(function(e){return{createRecord:function(t){var n=t.title,c=t.body,a=t.authToken;return e(U({title:n,body:c,authToken:a}))},updateRecord:function(t){var n=t.title,c=t.body,a=t.authToken,r=t.id;return e(W({title:n,body:c,authToken:a,id:r}))}}}))((function(e){var t=new Date,n=t.getFullYear()+"-"+t.getMonth()+"-"+t.getDate(),c=a.a.createRef(),r=a.a.createRef();return Object(h.jsxs)("div",{className:_.a.inner,children:[Object(h.jsxs)("div",{className:_.a.topPanel,children:[Object(h.jsx)("input",{placeholder:n,className:_.a.titleInput,max:128,ref:c,defaultValue:e.title?e.title:null}),Object(h.jsx)("div",{className:_.a.buttonBlock,children:Object(h.jsx)("button",{className:"btn btn-success "+_.a.saveButton,onClick:function(t){return function(t){var n=c.current.value,a=r.current.textContent;e.onUpdate?e.updateRecord({title:n,body:a,authToken:e.authToken,id:e.id}):e.createRecord({title:n,body:a,authToken:e.authToken})}()},children:"Save"})})]}),Object(h.jsx)("hr",{}),Object(h.jsx)("div",{className:_.a.bodyBlock,children:Object(h.jsx)("div",{contentEditable:"true","data-placeholder":"Here goes my day",className:_.a.bodyInput,ref:r,children:e.body?e.body:null})})]})})),R=n(12),k=n.n(R),C=Object(f.b)((function(e){return{authToken:e.auth.token}}),(function(e){return{deleteRecord:function(t){var n=t.id,c=t.authToken;return e(P({id:n,authToken:c}))},showUpdateWindow:function(t){var n=t.title,c=t.body,a=t.id;return e(S({title:n,body:c,id:a}))}}}))((function(e){return Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{className:k.a.topPanel,children:[Object(h.jsx)("h2",{className:k.a.recordTitle,children:e.title}),Object(h.jsxs)("div",{className:k.a.buttonsBlock,children:[Object(h.jsx)("button",{className:"btn btn-primary "+k.a.manageButton,onClick:function(){e.showUpdateWindow({title:e.title,body:e.body,id:e.id})},children:"Edit"}),Object(h.jsx)("button",{className:"btn btn-danger "+k.a.manageButton,onClick:function(){e.deleteRecord({id:e.id,authToken:e.authToken})},children:"Delete"})]})]}),Object(h.jsx)("hr",{}),Object(h.jsx)("div",{className:k.a.recordBody,children:e.body}),Object(h.jsx)("div",{className:k.a.buttonPanel,children:Object(h.jsx)("div",{className:k.a.createdAt,children:e.created})})]})})),w="SHOW_READ_RECORD",N="SHOW_WRITE_RECORD",T="HIDE_RECORD",A={fullRecordActive:!1,detailWindowContent:null},E=function(e){e({type:T})},S=function(e){var t=e.title,n=e.body,c=e.id;return function(e){e({type:T}),e({type:N,content:Object(h.jsx)(y,{onUpdate:!0,title:t,body:n,id:c})})}},B="CREATE_RECORD",D="DELETE_RECORD",L="UPDATE_RECORD",I={},P=function(e){var t=e.id,n=e.authToken;return function(e){v.a.defaults.xsrfHeaderName="X-CSRFTOKEN",v.a.defaults.xsrfCookieName="csrftoken",v.a.delete("http://127.0.0.1:8000/api/v1/records/"+t,{headers:{Authorization:"Token ".concat(n)}}).then((function(t){return e({type:D})})).catch((function(e){return alert("Error: ".concat(e))})),e({type:T})}},U=function(e){var t=e.title,n=e.body,c=e.authToken;return function(e){var a={"Content-Type":"application/json",Authorization:"Token ".concat(c)};v.a.post("http://127.0.0.1:8000/api/v1/records",JSON.stringify({title:t,body:n}),{headers:a}).then((function(t){return e({type:B})})),e({type:T})}},W=function(e){var t=e.title,n=e.body,c=e.id,a=e.authToken;return function(e){var r=JSON.stringify({title:t,body:n});v.a.put("http://127.0.0.1:8000/api/v1/records/"+c,r,{headers:{"Content-Type":"application/json",Authorization:"Token ".concat(a)}}).then((function(t){return e({type:L})})),e({type:T})}},z="GET_RECORDS",G="LOADING_RECORDS",H="CLEAR_THE_STATE",F={records:Object(g.a)(new Set([])),current_page:0,loading:!1},J="USER_LOADING",Y="USER_LOADED",K=" AUTH_ERROR",M="LOGIN_SUCCESS",X="LOGIN_FAIL",q="LOGOUT",Q={token:localStorage.getItem("token"),isAuthenticated:null,isLoading:!1,user:null};var V=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(u.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={username:"",password:""},e.onSubmit=function(t){t.preventDefault(),e.props.login(e.state.username,e.state.password)},e.onChange=function(t){return e.setState(Object(d.a)({},t.target.name,t.target.value))},e}return Object(l.a)(n,[{key:"render",value:function(){if(this.props.isAuthenticated)return Object(h.jsx)(s.a,{to:"/"});var e=this.state,t=e.username,n=e.password;return Object(h.jsx)("div",{className:"col-md-3 m-auto",children:Object(h.jsxs)("div",{className:"card card-body mt-5",children:[Object(h.jsx)("h2",{className:"text-center",children:"Login"}),Object(h.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{children:"Username"}),Object(h.jsx)("input",{type:"text",className:"form-control",name:"username",onChange:this.onChange,value:t})]}),Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{children:"Password"}),Object(h.jsx)("input",{type:"password",className:"form-control",name:"password",onChange:this.onChange,value:n})]}),Object(h.jsx)("div",{className:"form-group",children:Object(h.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Login"})}),Object(h.jsxs)("p",{children:["A new user? ",Object(h.jsx)(i.b,{to:"/register",children:"Register"})]})]})]})})}}]),n}(c.Component),Z=Object(f.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{login:function(e,t){return function(n){n({type:J});var c=JSON.stringify({username:e,password:t,email:""});fetch("http://127.0.0.1:8000/api/v1/rest-auth/login/",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:c}).then((function(e){return e.json()})).then((function(e){n({type:M,payload:e})})).catch((function(e){n({type:X})}))}}})(V),$=n(45),ee=n(46),te=n.n(ee),ne=function(){return Object(h.jsxs)("div",{className:te.a["lds-ring"],children:[Object(h.jsx)("div",{}),Object(h.jsx)("div",{}),Object(h.jsx)("div",{}),Object(h.jsx)("div",{})]})},ce=Object(f.b)((function(e){return{auth:e.auth}}))((function(e){var t=e.component,n=e.auth,c=Object($.a)(e,["component","auth"]);return Object(h.jsx)(s.b,Object(O.a)(Object(O.a)({},c),{},{render:function(e){return n.isLoading?Object(h.jsx)(ne,{}):n.isAuthenticated?Object(h.jsx)(t,Object(O.a)({},e)):Object(h.jsx)(s.a,{to:"/login"})}}))})),ae=n(17),re=n(47),oe=Object(ae.d)(Object(ae.c)({records:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case G:return Object(O.a)(Object(O.a)({},e),{},{loading:!0});case z:if(0===t.recordsData.length)return Object(O.a)(Object(O.a)({},e),{},{loading:!1});var n=e.records,c=e.current_page;return Object(O.a)(Object(O.a)({},e),{},{records:Object(g.a)(new Set(n.concat(t.recordsData))),current_page:c+1,loading:!1});case B:case L:case D:return Object(O.a)(Object(O.a)({},e),{},{records:[],current_page:0,loading:!1});case H:return F;default:return Object(O.a)(Object(O.a)({},e),{},{loading:!1})}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case J:return Object(O.a)(Object(O.a)({},e),{},{isLoading:!0,isAuthenticated:!1});case Y:return Object(O.a)(Object(O.a)({},e),{},{isAuthenticated:!0,isLoading:!1,user:t.payload});case M:return localStorage.setItem("token",t.payload.key),Object(O.a)(Object(O.a)({},e),{},{token:t.payload.key,isAuthenticated:!0,isLoading:!1});case K:case X:case q:return localStorage.removeItem("token"),Object(O.a)(Object(O.a)({},e),{},{token:null,user:null,isAuthenticated:!1,isLoading:!1});default:return e}},showHideRecord:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:case N:return Object(O.a)(Object(O.a)({},e),{},{fullRecordActive:!0,detailWindowContent:t.content});case T:return Object(O.a)(Object(O.a)({},e),{},{fullRecordActive:!1,detailWindowContent:null});default:return Object(O.a)({},e)}},createUpdateDeleteRecord:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case B:case L:case D:default:return Object(O.a)({},e)}}}),Object(ae.a)(re.a)),ie=n(25),se=n.n(ie),de=Object(f.b)((function(e){return{authToken:e.auth.token}}),(function(e){return{logout:function(t){return e(function(e){return function(t){t({type:H}),t({type:J}),v.a.post("http://127.0.0.1:8000/api/v1/rest-auth/logout/",{},{headers:{Authorization:"Token ".concat(e)}}).then((function(e){return t({type:q})}))}}(t))}}}))((function(e){return Object(h.jsxs)("header",{className:se.a.header,children:[Object(h.jsx)("h2",{className:se.a.logo,children:"DIARY"}),Object(h.jsx)("button",{className:se.a.logoutButton+" btn btn-default",onClick:function(){return e.logout(e.authToken)},children:"Logout"})]})})),ue=n(31),le=n.n(ue),je=n(48),be=n.n(je),he=Object(f.b)((function(e){return{authToken:e.auth.token}}),(function(e){return{showThisWindow:function(t){var n=t.title,c=t.body,a=t.created,r=t.id;return e(function(e){var t=e.title,n=e.body,c=e.id,a=e.created;return function(e){e({type:w,content:Object(h.jsx)(C,{body:n,title:t,created:a,id:c})})}}({title:n,body:c,created:a,id:r}))}}}))((function(e){return Object(h.jsxs)("div",{className:be.a.record,onClick:function(){return e.showThisWindow({title:e.title,body:e.body,created:e.created,id:e.id})},children:[Object(h.jsx)("h3",{children:e.title}),Object(h.jsx)("p",{children:e.body})]})})),pe=n(32),fe=n.n(pe),Oe=Object(f.b)((function(e){return{authToken:e.auth.token}}),(function(e){return{showThisWindow:function(){return e((function(e){e({type:T}),e({type:N,content:Object(h.jsx)(y,{onUpdate:!1})})}))}}}))((function(e){return Object(h.jsx)("div",{className:fe.a.card,onClick:e.showThisWindow,children:Object(h.jsx)("h1",{className:fe.a.add_sign,children:"+"})})})),me=n(19),ve=n.n(me),ge=Object(f.b)((function(e){return{active:e.showHideRecord.fullRecordActive,child:e.showHideRecord.detailWindowContent}}),(function(e){return{hideWindow:function(){return e(E)}}}))((function(e){return Object(h.jsx)("div",{className:e.active?"".concat(ve.a.overflow," ").concat(ve.a.active):ve.a.overflow,onClick:function(){return e.hideWindow()},children:Object(h.jsx)("div",{className:ve.a.record,onClick:function(e){return e.stopPropagation()},children:e.child})})})),xe=n(49),_e=n.n(xe),ye=function(){return Object(h.jsxs)("div",{className:_e.a["lds-ellipsis"],children:[Object(h.jsx)("div",{}),Object(h.jsx)("div",{}),Object(h.jsx)("div",{}),Object(h.jsx)("div",{})]})},Re=Object(f.b)((function(e){return{records:e.records.records[0]?e.records.records:[],authToken:e.auth.token,current_page:e.records.current_page,loading:e.records.loading}}),(function(e){return{fetchRecords:function(t,n){e(function(e,t){return function(n){v.a.get("http://127.0.0.1:8000/api/v1/records?page="+t,{headers:{Authorization:"Token ".concat(e)}}).then((function(e){return n({type:z,recordsData:e.data})}))}}(t,n))}}}))((function(e){var t=Object(c.useRef)(),n=function(){e.fetchRecords(e.authToken,e.current_page)},a=Object(c.useCallback)((function(c){e.loading||(t.current&&t.current.disconnect(),t.current=new IntersectionObserver((function(e){e[0].isIntersecting&&n()})),c&&t.current.observe(c))}));return Object(h.jsxs)("div",{className:le.a.records,children:[Object(h.jsx)(ge,{}),Object(h.jsxs)("div",{className:le.a.recordsBlock,children:[Object(h.jsx)(Oe,{}),function(){if(0!==e.records.length)return e.records.map((function(t,n){return n===e.records.length-1?Object(h.jsx)("div",{ref:a,children:Object(h.jsx)(he,{title:t.title,body:t.body,created:t.created,id:t.id})}):Object(h.jsx)("div",{children:Object(h.jsx)(he,{title:t.title,body:t.body,created:t.created,id:t.id})})}));n()}()]}),e.loading&&Object(h.jsx)(ye,{})]})})),ke=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)(de,{}),Object(h.jsx)(Re,{})]})};var Ce=function(){return Object(c.useEffect)((function(){oe.dispatch((function(e,t){e({type:J});var n={"Content-Type":"application/json",Accept:"application/json"},c=t().auth.token;c&&(n.Authorization="Token ".concat(c)),fetch("http://127.0.0.1:8000/api/v1/rest-auth/user",{method:"GET",headers:n}).then((function(t){200===t.status?e({type:Y,payload:t.json()}):e({type:K})})).catch((function(t){e({type:K})}))}))})),Object(h.jsx)(i.a,{children:Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(ce,{exact:!0,path:"/",component:ke}),Object(h.jsx)(s.b,{exact:!0,path:"/register",render:function(){return Object(h.jsx)(p,{})}}),Object(h.jsx)(s.b,{exact:!0,path:"/login",render:function(){return Object(h.jsx)(Z,{})}})]})})},we=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,85)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),r(e),o(e)}))};o.a.render(Object(h.jsx)(f.a,{store:oe,children:Object(h.jsx)(Ce,{})}),document.getElementById("root")),we()}},[[84,1,2]]]);
//# sourceMappingURL=main.6093693b.chunk.js.map