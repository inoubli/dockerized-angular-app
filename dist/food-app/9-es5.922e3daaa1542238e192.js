function _classCallCheck(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,r){for(var n=0;n<r.length;n++){var s=r[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function _createClass(e,r,n){return r&&_defineProperties(e.prototype,r),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{SuQF:function(e,r,n){"use strict";n.r(r),n.d(r,"SecurityModule",(function(){return J}));var s=n("ofXK"),t=n("tyNb"),o=n("3Pt+"),i=n("fXoL"),a=n("f4AX"),c=n("lPP5"),u=n("5eHb");function l(e,r){if(1&e&&(i.ac(0,"div",4),i.Bc(1),i.Zb()),2&e){var n=i.kc();i.Jb(1),i.Dc(" ",n.serverErrorMessages," ")}}function f(e,r){1&e&&(i.ac(0,"div",5),i.Wb(1,"img",6),i.Zb())}function m(e,r){1&e&&(i.ac(0,"p"),i.Bc(1,"Username field is required."),i.Zb())}function d(e,r){if(1&e&&(i.ac(0,"p"),i.Bc(1),i.Zb()),2&e){var n=i.kc(2);i.Jb(1),i.Dc("username must be 3 characters long, we need another ",n.f.username.errors.minlength.requiredLength-n.f.username.errors.minlength.actualLength," characters ")}}function b(e,r){1&e&&(i.ac(0,"p"),i.Bc(1,"Password field is required."),i.Zb())}function p(e,r){if(1&e&&(i.ac(0,"p"),i.Bc(1),i.Zb()),2&e){var n=i.kc(2);i.Jb(1),i.Dc("Password must be 3 characters long, we need another ",n.f.password.errors.minlength.requiredLength-n.f.password.errors.minlength.actualLength," characters ")}}var g=function(e,r){return{"is-invalid":e,"is-valid":r}};function h(e,r){if(1&e){var n=i.bc();i.ac(0,"div",7),i.ac(1,"div",8),i.ac(2,"h3"),i.Bc(3,"Sign-in"),i.Zb(),i.Zb(),i.ac(4,"div",9),i.ac(5,"form",10),i.ac(6,"fieldset"),i.ac(7,"div",11),i.ac(8,"label",12),i.Bc(9,"Email"),i.ac(10,"span",13),i.Bc(11,"*"),i.Zb(),i.Zb(),i.Wb(12,"input",14),i.ac(13,"div",15),i.Ac(14,m,2,0,"p",16),i.Ac(15,d,2,1,"p",16),i.Zb(),i.Zb(),i.ac(16,"div",11),i.ac(17,"label",17),i.Bc(18,"Password"),i.ac(19,"span",13),i.Bc(20,"*"),i.Zb(),i.Zb(),i.Wb(21,"input",18),i.ac(22,"div",15),i.Ac(23,b,2,0,"p",16),i.Ac(24,p,2,1,"p",16),i.Zb(),i.Zb(),i.ac(25,"div",11),i.ac(26,"div",19),i.Wb(27,"input",20),i.ac(28,"label",21),i.Bc(29,"Remember me"),i.Zb(),i.Zb(),i.Zb(),i.ac(30,"button",22),i.ic("click",(function(){return i.vc(n),i.kc().onSubmit()})),i.Bc(31,"Submit"),i.Zb(),i.ac(32,"button",23),i.ic("click",(function(){return i.vc(n),i.kc().form.reset()})),i.Bc(33,"Rest"),i.Zb(),i.Zb(),i.Zb(),i.Zb(),i.Zb()}if(2&e){var s=i.kc();i.Jb(5),i.oc("formGroup",s.form),i.Jb(7),i.oc("ngClass",i.rc(8,g,s.f.username.errors&&(s.f.username.dirty||s.f.username.touched),!s.f.username.errors&&(s.f.username.dirty||s.f.username.touched))),i.Jb(2),i.oc("ngIf",null==s.f.username.errors?null:s.f.username.errors.required),i.Jb(1),i.oc("ngIf",null==s.f.username.errors?null:s.f.username.errors.minlength),i.Jb(6),i.oc("ngClass",i.rc(11,g,s.f.password.errors&&(s.f.password.dirty||s.f.password.touched),!s.f.password.errors&&(s.f.password.dirty||s.f.password.touched))),i.Jb(2),i.oc("ngIf",null==s.f.password.errors?null:s.f.password.errors.required),i.Jb(1),i.oc("ngIf",null==s.f.password.errors?null:s.f.password.errors.minlength),i.Jb(6),i.oc("disabled",s.form.invalid)}}var v,w,y,k,Z,C=((v=function(){function e(r,n,s,t,o){_classCallCheck(this,e),this.userService=r,this.router=n,this.formBuilder=s,this.loadingService=t,this.toastr=o,this.submitted=!1}return _createClass(e,[{key:"ngOnInit",value:function(){this.userService.isLoggedIn()&&this.router.navigateByUrl("/home"),this.form=this.formBuilder.group({username:["",[o.o.required,o.o.minLength(4)]],password:["",[o.o.required,o.o.minLength(5)]],_remember_me:[""]})}},{key:"onSubmit",value:function(){var e=this;this.submitted=!0,this.form.invalid||this.userService.login(this.form.value).subscribe((function(r){e.userService.setToken(r.token),e.router.navigateByUrl("/home");var n=e.userService.getUserPayload1().username;e.toastr.success(n,"Logged in as",{timeOut:5e3,closeButton:!0})}),(function(r){e.serverErrorMessages=r.error.message}))}},{key:"isLoading",get:function(){return this.loadingService._pendingRequests}},{key:"f",get:function(){return this.form.controls}}]),e}()).\u0275fac=function(e){return new(e||v)(i.Vb(a.a),i.Vb(t.f),i.Vb(o.c),i.Vb(c.c),i.Vb(u.b))},v.\u0275cmp=i.Pb({type:v,selectors:[["app-sign-in"]],decls:4,vars:3,consts:[[1,"row"],["class","alert alert-dismissible alert-danger",4,"ngIf"],["class","row spinner",4,"ngIf"],["class","card border-info mb-3","style","max-width: 80rem; margin-top: 100px;",4,"ngIf"],[1,"alert","alert-dismissible","alert-danger"],[1,"row","spinner"],["src","./assets/images/spinner.svg","alt","Loading..."],[1,"card","border-info","mb-3",2,"max-width","80rem","margin-top","100px"],[1,"card-header"],[1,"card-body"],["novalidate","",3,"formGroup"],[1,"form-group"],["for","username",1,"form-control-label"],[1,"text-danger"],["id","username","type","text","name","username","formControlName","username",1,"form-control",3,"ngClass"],[1,"invalid-feedback"],[4,"ngIf"],["for","name",1,"form-control-label"],["id","password","type","password","name","password","formControlName","password",1,"form-control",3,"ngClass"],[1,"custom-control","custom-checkbox"],["type","checkbox","id","_remember_me","name","_remember_me","formControlName","_remember_me","checked","",1,"custom-control-input"],["for","_remember_me",1,"custom-control-label"],["type","submit",1,"btn","btn-primary",3,"disabled","click"],["type","button",1,"btn","btn-outline-primary","ml-md-3",3,"click"]],template:function(e,r){1&e&&(i.ac(0,"div",0),i.Ac(1,l,2,1,"div",1),i.Zb(),i.Ac(2,f,2,0,"div",2),i.Ac(3,h,34,14,"div",3)),2&e&&(i.Jb(1),i.oc("ngIf",r.serverErrorMessages),i.Jb(1),i.oc("ngIf",r.isLoading),i.Jb(1),i.oc("ngIf",!r.isLoading))},directives:[s.m,o.q,o.j,o.g,o.b,o.i,o.e,s.k,o.a],styles:[""]}),v),_=[{path:"",component:C,children:[{path:"",redirectTo:"signin",pathMatch:"full"},{path:"signin",component:C},{path:"signup",component:(y=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){}}]),e}(),y.\u0275fac=function(e){return new(e||y)},y.\u0275cmp=i.Pb({type:y,selectors:[["app-sign-up"]],decls:2,vars:0,template:function(e,r){1&e&&(i.ac(0,"p"),i.Bc(1,"sign-up works!"),i.Zb())},styles:[""]}),y)},{path:"profile",component:(w=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){}}]),e}(),w.\u0275fac=function(e){return new(e||w)},w.\u0275cmp=i.Pb({type:w,selectors:[["app-profile-edit"]],decls:2,vars:0,template:function(e,r){1&e&&(i.ac(0,"p"),i.Bc(1,"profile-edit works!"),i.Zb())},styles:[""]}),w)}]}],B=((Z=function e(){_classCallCheck(this,e)}).\u0275mod=i.Tb({type:Z}),Z.\u0275inj=i.Sb({factory:function(e){return new(e||Z)},imports:[[t.j.forChild(_)],t.j]}),Z),J=((k=function e(){_classCallCheck(this,e)}).\u0275mod=i.Tb({type:k}),k.\u0275inj=i.Sb({factory:function(e){return new(e||k)},imports:[[s.c,B,o.h,o.l]]}),k)}}]);