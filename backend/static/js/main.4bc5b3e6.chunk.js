(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{12:function(e,t,n){e.exports={topPanel:"fullRecordRead_topPanel__l2ur3",buttonsBlock:"fullRecordRead_buttonsBlock__3yfk7",manageButton:"fullRecordRead_manageButton__2GM1w",recordTitle:"fullRecordRead_recordTitle__2i-_p",recordBody:"fullRecordRead_recordBody__kGYWa",buttonPanel:"fullRecordRead_buttonPanel__3RsGx",createdAt:"fullRecordRead_createdAt__ihhIJ"}},13:function(e,t,n){e.exports={inner:"fullRecordUpdateCreate_inner__2QqHa",topPanel:"fullRecordUpdateCreate_topPanel__3nHhu",bodyBlock:"fullRecordUpdateCreate_bodyBlock__2zszO",titleInput:"fullRecordUpdateCreate_titleInput__21Xnx",bodyInput:"fullRecordUpdateCreate_bodyInput__cGwsI",buttonBlock:"fullRecordUpdateCreate_buttonBlock__AKFhf",saveButton:"fullRecordUpdateCreate_saveButton__2hfMD"}},19:function(e,t,n){e.exports={overflow:"fullRecordBase_overflow__J6t8D",active:"fullRecordBase_active__2kLFt",record:"fullRecordBase_record__CuQP0"}},25:function(e,t,n){e.exports={header:"header_header__3zIYV",logo:"header_logo__1OAXh",logoutButton:"header_logoutButton__oObBh"}},31:function(e,t,n){e.exports={records:"Records_records__2azxT",recordsBlock:"Records_recordsBlock__2z3pC"}},32:function(e,t,n){e.exports={card:"addRecordCard_card__2qgKP",add_sign:"addRecordCard_add_sign__1I9Sw"}},46:function(e,t,n){e.exports={"lds-ring":"AnimatedPageLoading_lds-ring__1sRyI"}},48:function(e,t,n){e.exports={record:"RecordCard_record__2gN3b"}},49:function(e,t,n){e.exports={"lds-ellipsis":"AnimatedRecordsLoading_lds-ellipsis__1C7zP","lds-ellipsis1":"AnimatedRecordsLoading_lds-ellipsis1__3UTCj","lds-ellipsis2":"AnimatedRecordsLoading_lds-ellipsis2__3S3se","lds-ellipsis3":"AnimatedRecordsLoading_lds-ellipsis3__1v65G"}},83:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(20),o=n.n(c),i=(n(54),n(14)),s=n(5),d=n(16),u=n(21),l=n(22),j=n(24),b=n(23),h=n(2),p=n(7),f=n.n(p),O=n(33),m=n(13),v=n.n(m),g=n(4),x=n(0),_=Object(g.b)((function(e){return{authToken:e.auth.token}}),(function(e){return{createRecord:function(t){var n=t.title,a=t.body,r=t.authToken;return e(U({title:n,body:a,authToken:r}))},updateRecord:function(t){var n=t.title,a=t.body,r=t.authToken,c=t.id;return e(P({title:n,body:a,authToken:r,id:c}))}}}))((function(e){var t=new Date,n=t.getFullYear()+"-"+t.getMonth()+"-"+t.getDate(),a=r.a.createRef(),c=r.a.createRef();return Object(x.jsxs)("div",{className:v.a.inner,children:[Object(x.jsxs)("div",{className:v.a.topPanel,children:[Object(x.jsx)("input",{placeholder:n,className:v.a.titleInput,max:128,ref:a,defaultValue:e.title?e.title:null}),Object(x.jsx)("div",{className:v.a.buttonBlock,children:Object(x.jsx)("button",{className:"btn btn-success "+v.a.saveButton,onClick:function(t){return function(t){var n=a.current.value,r=c.current.textContent;e.onUpdate?e.updateRecord({title:n,body:r,authToken:e.authToken,id:e.id}):e.createRecord({title:n,body:r,authToken:e.authToken})}()},children:"Save"})})]}),Object(x.jsx)("hr",{}),Object(x.jsx)("div",{className:v.a.bodyBlock,children:Object(x.jsx)("div",{contentEditable:"true","data-placeholder":"Here goes my day",className:v.a.bodyInput,ref:c,children:e.body?e.body:null})})]})})),y=n(12),R=n.n(y),k=Object(g.b)((function(e){return{authToken:e.auth.token}}),(function(e){return{deleteRecord:function(t){var n=t.id,a=t.authToken;return e(I({id:n,authToken:a}))},showUpdateWindow:function(t){var n=t.title,a=t.body,r=t.id;return e(E({title:n,body:a,id:r}))}}}))((function(e){return Object(x.jsxs)("div",{children:[Object(x.jsxs)("div",{className:R.a.topPanel,children:[Object(x.jsx)("h2",{className:R.a.recordTitle,children:e.title}),Object(x.jsxs)("div",{className:R.a.buttonsBlock,children:[Object(x.jsx)("button",{className:"btn btn-primary "+R.a.manageButton,onClick:function(){e.showUpdateWindow({title:e.title,body:e.body,id:e.id})},children:"Edit"}),Object(x.jsx)("button",{className:"btn btn-danger "+R.a.manageButton,onClick:function(){e.deleteRecord({id:e.id,authToken:e.authToken})},children:"Delete"})]})]}),Object(x.jsx)("hr",{}),Object(x.jsx)("div",{className:R.a.recordBody,children:e.body}),Object(x.jsx)("div",{className:R.a.buttonPanel,children:Object(x.jsx)("div",{className:R.a.createdAt,children:e.created})})]})})),C="SHOW_READ_RECORD",N="SHOW_WRITE_RECORD",w="HIDE_RECORD",T={fullRecordActive:!1,detailWindowContent:null},A=function(e){e({type:w})},E=function(e){var t=e.title,n=e.body,a=e.id;return function(e){e({type:w}),e({type:N,content:Object(x.jsx)(_,{onUpdate:!0,title:t,body:n,id:a})})}};f.a.defaults.xsrfHeaderName="X-CSRFTOKEN",f.a.defaults.xsrfCookieName="csrftoken";var S="CREATE_RECORD",B="DELETE_RECORD",D="UPDATE_RECORD",L={},I=function(e){var t=e.id,n=e.authToken;return function(e){f.a.delete("http://127.0.0.1:8000/api/v1/records/"+t,{headers:{Authorization:"Token ".concat(n)}}).then((function(t){return e({type:B})})).catch((function(e){return alert("Error: ".concat(e))})),e({type:w})}},U=function(e){var t=e.title,n=e.body,a=e.authToken;return function(e){var r={"Content-Type":"application/json",Authorization:"Token ".concat(a)};f.a.post("http://127.0.0.1:8000/api/v1/records",JSON.stringify({title:t,body:n}),{headers:r}).then((function(t){return e({type:S})})),e({type:w})}},P=function(e){var t=e.title,n=e.body,a=e.id,r=e.authToken;return function(e){var c=JSON.stringify({title:t,body:n});f.a.put("http://127.0.0.1:8000/api/v1/records/"+a,c,{headers:{"Content-Type":"application/json",Authorization:"Token ".concat(r)}}).then((function(t){return e({type:D})})),e({type:w})}},W="GET_RECORDS",H="LOADING_RECORDS",z="CLEAR_THE_STATE",G={records:Object(O.a)(new Set([])),current_page:0,loading:!1};f.a.defaults.xsrfHeaderName="X-CSRFTOKEN",f.a.defaults.xsrfCookieName="csrftoken";var F="USER_LOADING",J="USER_LOADED",K=" AUTH_ERROR",X="LOGIN_SUCCESS",Y="LOGIN_FAIL",M="LOGOUT",q={token:localStorage.getItem("token"),isAuthenticated:null,isLoading:!1,user:null};var Q=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={username:"",email:"",password:"",password2:""},e.onSubmit=function(t){t.preventDefault();var n=e.state,a=n.username,r=n.email,c=n.password,o=n.password2;c!==o||e.props.register(a,r,c,o)},e.onChange=function(t){return e.setState(Object(d.a)({},t.target.name,t.target.value))},e}return Object(l.a)(n,[{key:"render",value:function(){if(this.props.isAuthenticated)return Object(x.jsx)(s.a,{to:"/"});var e=this.state,t=e.username,n=e.email,a=e.password,r=e.password2;return Object(x.jsx)("div",{className:"col-md-3 m-auto",children:Object(x.jsxs)("div",{className:"card card-body mt-5",children:[Object(x.jsx)("h2",{className:"text-center",children:"Register"}),Object(x.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{children:"Username"}),Object(x.jsx)("input",{type:"text",className:"form-control",name:"username",onChange:this.onChange,value:t})]}),Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{children:"Email"}),Object(x.jsx)("input",{type:"email",className:"form-control",name:"email",onChange:this.onChange,value:n})]}),Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{children:"Password"}),Object(x.jsx)("input",{type:"password",className:"form-control",name:"password",onChange:this.onChange,value:a})]}),Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{children:"Confirm Password"}),Object(x.jsx)("input",{type:"password",className:"form-control",name:"password2",onChange:this.onChange,value:r})]}),Object(x.jsx)("div",{className:"form-group",children:Object(x.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Register"})}),Object(x.jsxs)("p",{children:["Already have an account? ",Object(x.jsx)(i.b,{to:"/login",children:"Login"})]})]})]})})}}]),n}(a.Component),V=Object(g.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),(function(e){return{register:function(t,n,a,r){return e(function(e,t,n,a){return function(r){r({type:F});var c={username:e,email:t,password1:n,password2:a};f.a.post("http://127.0.0.1:8000/api/v1/rest-auth/registration/",JSON.stringify(c),{headers:{"Content-Type":"application/json"}}).then((function(e){return r({type:X,payload:e.data})})).catch((function(e){return console.log(e)}))}}(t,n,a,r))}}}))(Q),Z=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={username:"",password:""},e.onSubmit=function(t){t.preventDefault(),e.props.login(e.state.username,e.state.password)},e.onChange=function(t){return e.setState(Object(d.a)({},t.target.name,t.target.value))},e}return Object(l.a)(n,[{key:"render",value:function(){if(this.props.isAuthenticated)return Object(x.jsx)(s.a,{to:"/"});var e=this.state,t=e.username,n=e.password;return Object(x.jsx)("div",{className:"col-md-3 m-auto",children:Object(x.jsxs)("div",{className:"card card-body mt-5",children:[Object(x.jsx)("h2",{className:"text-center",children:"Login"}),Object(x.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{children:"Username"}),Object(x.jsx)("input",{type:"text",className:"form-control",name:"username",onChange:this.onChange,value:t})]}),Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{children:"Password"}),Object(x.jsx)("input",{type:"password",className:"form-control",name:"password",onChange:this.onChange,value:n})]}),Object(x.jsx)("div",{className:"form-group",children:Object(x.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Login"})}),Object(x.jsxs)("p",{children:["A new user? ",Object(x.jsx)(i.b,{to:"/register",children:"Register"})]})]})]})})}}]),n}(a.Component),$=Object(g.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{login:function(e,t){return function(n){n({type:F});var a=JSON.stringify({username:e,password:t,email:""});f.a.post("http://127.0.0.1:8000/api/v1/rest-auth/login/",a,{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){n({type:X,payload:e.data})})).catch((function(e){n({type:Y})}))}}})(Z),ee=n(45),te=n(46),ne=n.n(te),ae=function(){return Object(x.jsxs)("div",{className:ne.a["lds-ring"],children:[Object(x.jsx)("div",{}),Object(x.jsx)("div",{}),Object(x.jsx)("div",{}),Object(x.jsx)("div",{})]})},re=Object(g.b)((function(e){return{auth:e.auth}}))((function(e){var t=e.component,n=e.auth,a=Object(ee.a)(e,["component","auth"]);return Object(x.jsx)(s.b,Object(h.a)(Object(h.a)({},a),{},{render:function(e){return n.isLoading?Object(x.jsx)(ae,{}):n.isAuthenticated?Object(x.jsx)(t,Object(h.a)({},e)):Object(x.jsx)(s.a,{to:"/login"})}}))})),ce=n(17),oe=n(47),ie=Object(ce.d)(Object(ce.c)({records:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case H:return Object(h.a)(Object(h.a)({},e),{},{loading:!0});case W:if(0===t.recordsData.length)return Object(h.a)(Object(h.a)({},e),{},{loading:!1});var n=e.records,a=e.current_page;return Object(h.a)(Object(h.a)({},e),{},{records:Object(O.a)(new Set(n.concat(t.recordsData))),current_page:a+1,loading:!1});case S:case D:case B:return Object(h.a)(Object(h.a)({},e),{},{records:[],current_page:0,loading:!1});case z:return G;default:return Object(h.a)(Object(h.a)({},e),{},{loading:!1})}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case F:return Object(h.a)(Object(h.a)({},e),{},{isLoading:!0,isAuthenticated:!1});case J:return Object(h.a)(Object(h.a)({},e),{},{isAuthenticated:!0,isLoading:!1,user:t.payload});case X:return localStorage.setItem("token",t.payload.key),Object(h.a)(Object(h.a)({},e),{},{token:t.payload.key,isAuthenticated:!0,isLoading:!1});case K:case Y:case M:return localStorage.removeItem("token"),Object(h.a)(Object(h.a)({},e),{},{token:null,user:null,isAuthenticated:!1,isLoading:!1});default:return e}},showHideRecord:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:case N:return Object(h.a)(Object(h.a)({},e),{},{fullRecordActive:!0,detailWindowContent:t.content});case w:return Object(h.a)(Object(h.a)({},e),{},{fullRecordActive:!1,detailWindowContent:null});default:return Object(h.a)({},e)}},createUpdateDeleteRecord:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:case D:case B:default:return Object(h.a)({},e)}}}),Object(ce.a)(oe.a)),se=n(25),de=n.n(se),ue=Object(g.b)((function(e){return{authToken:e.auth.token}}),(function(e){return{logout:function(t){return e(function(e){return function(t){t({type:z}),t({type:F}),f.a.post("http://127.0.0.1:8000/api/v1/rest-auth/logout/",{},{headers:{Authorization:"Token ".concat(e)}}).then((function(e){return t({type:M})}))}}(t))}}}))((function(e){return Object(x.jsxs)("header",{className:de.a.header,children:[Object(x.jsx)("h2",{className:de.a.logo,children:"DIARY"}),Object(x.jsx)("button",{className:de.a.logoutButton+" btn btn-default",onClick:function(){return e.logout(e.authToken)},children:"Logout"})]})})),le=n(31),je=n.n(le),be=n(48),he=n.n(be),pe=Object(g.b)((function(e){return{authToken:e.auth.token}}),(function(e){return{showThisWindow:function(t){var n=t.title,a=t.body,r=t.created,c=t.id;return e(function(e){var t=e.title,n=e.body,a=e.id,r=e.created;return function(e){e({type:C,content:Object(x.jsx)(k,{body:n,title:t,created:r,id:a})})}}({title:n,body:a,created:r,id:c}))}}}))((function(e){return Object(x.jsxs)("div",{className:he.a.record,onClick:function(){return e.showThisWindow({title:e.title,body:e.body,created:e.created,id:e.id})},children:[Object(x.jsx)("h3",{children:e.title}),Object(x.jsx)("p",{children:e.body})]})})),fe=n(32),Oe=n.n(fe),me=Object(g.b)((function(e){return{authToken:e.auth.token}}),(function(e){return{showThisWindow:function(){return e((function(e){e({type:w}),e({type:N,content:Object(x.jsx)(_,{onUpdate:!1})})}))}}}))((function(e){return Object(x.jsx)("div",{className:Oe.a.card,onClick:e.showThisWindow,children:Object(x.jsx)("h1",{className:Oe.a.add_sign,children:"+"})})})),ve=n(19),ge=n.n(ve),xe=Object(g.b)((function(e){return{active:e.showHideRecord.fullRecordActive,child:e.showHideRecord.detailWindowContent}}),(function(e){return{hideWindow:function(){return e(A)}}}))((function(e){return Object(x.jsx)("div",{className:e.active?"".concat(ge.a.overflow," ").concat(ge.a.active):ge.a.overflow,onClick:function(){return e.hideWindow()},children:Object(x.jsx)("div",{className:ge.a.record,onClick:function(e){return e.stopPropagation()},children:e.child})})})),_e=n(49),ye=n.n(_e),Re=function(){return Object(x.jsxs)("div",{className:ye.a["lds-ellipsis"],children:[Object(x.jsx)("div",{}),Object(x.jsx)("div",{}),Object(x.jsx)("div",{}),Object(x.jsx)("div",{})]})},ke=Object(g.b)((function(e){return{records:e.records.records[0]?e.records.records:[],authToken:e.auth.token,current_page:e.records.current_page,loading:e.records.loading}}),(function(e){return{fetchRecords:function(t,n){e(function(e,t){return function(n){f.a.get("http://127.0.0.1:8000/api/v1/records?page="+t,{headers:{Authorization:"Token ".concat(e)}}).then((function(e){return n({type:W,recordsData:e.data})}))}}(t,n))}}}))((function(e){var t=Object(a.useRef)(),n=function(){e.fetchRecords(e.authToken,e.current_page)},r=Object(a.useCallback)((function(a){e.loading||(t.current&&t.current.disconnect(),t.current=new IntersectionObserver((function(e){e[0].isIntersecting&&n()})),a&&t.current.observe(a))}));return Object(x.jsxs)("div",{className:je.a.records,children:[Object(x.jsx)(xe,{}),Object(x.jsxs)("div",{className:je.a.recordsBlock,children:[Object(x.jsx)(me,{}),function(){if(0!==e.records.length)return e.records.map((function(t,n){return n===e.records.length-1?Object(x.jsx)("div",{ref:r,children:Object(x.jsx)(pe,{title:t.title,body:t.body,created:t.created,id:t.id})}):Object(x.jsx)("div",{children:Object(x.jsx)(pe,{title:t.title,body:t.body,created:t.created,id:t.id})})}));n()}()]}),e.loading&&Object(x.jsx)(Re,{})]})})),Ce=function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)(ue,{}),Object(x.jsx)(ke,{})]})};var Ne=function(){return Object(a.useEffect)((function(){ie.dispatch((function(e,t){e({type:F});var n={"Content-Type":"application/json",Accept:"application/json"},a=t().auth.token;a&&(n.Authorization="Token ".concat(a)),f.a.get("http://127.0.0.1:8000/api/v1/rest-auth/user",{method:"GET",headers:n}).then((function(t){200===t.status?e({type:J,payload:t.data}):e({type:K})})).catch((function(t){e({type:K})}))}))})),Object(x.jsx)(i.a,{children:Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)(re,{exact:!0,path:"/",component:Ce}),Object(x.jsx)(s.b,{exact:!0,path:"/register",render:function(){return Object(x.jsx)(V,{})}}),Object(x.jsx)(s.b,{exact:!0,path:"/login",render:function(){return Object(x.jsx)($,{})}})]})})},we=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,84)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),a(e),r(e),c(e),o(e)}))};o.a.render(Object(x.jsx)(g.a,{store:ie,children:Object(x.jsx)(Ne,{})}),document.getElementById("root")),we()}},[[83,1,2]]]);
//# sourceMappingURL=main.4bc5b3e6.chunk.js.map