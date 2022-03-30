"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[418],{4418:(C,c,r)=>{r.r(c),r.d(c,{LoginModule:()=>f});var e=r(2382),n=r(5e3),a=r(1083),l=r(7053),p=r(2116),u=r(9808);const m=[{path:"",component:(()=>{class o{constructor(t,i,g,h){this.router=t,this.fb=i,this.authService=g,this.toast=h,this.isSignUp=!1}ngOnInit(){this.loginForm=this.fb.group({username:["",[e.kI.required,e.kI.minLength(5)]],password:["",[e.kI.required,e.kI.minLength(8)]]}),this.signupForm=this.fb.group({username:["",[e.kI.required,e.kI.minLength(5)]],email:["",[e.kI.required,e.kI.email]],password:["",[e.kI.required,e.kI.minLength(8)]]})}login(){for(const t in this.loginForm.controls)this.loginForm.controls[t].markAsDirty(),this.loginForm.controls[t].updateValueAndValidity();this.loginForm.invalid||this.authService.login(this.loginForm.value).subscribe({next:t=>{t&&(this.authService.setCredentials(t),this.toast.customToastr("success",t.message),this.router.navigate(["/tasks"]),this.authService.authName.next(!0))},error:t=>{this.toast.customToastr("error",t.message),this.loginForm.reset()}})}signUp(){for(const t in this.signupForm.controls)this.signupForm.controls[t].markAsDirty(),this.signupForm.controls[t].updateValueAndValidity();this.signupForm.invalid||this.authService.signUp(this.signupForm.value).subscribe({next:t=>{t&&this.toast.customToastr("success",t.message)},error:t=>{this.toast.customToastr("error",t.message),this.signupForm.reset()}})}}return o.\u0275fac=function(t){return new(t||o)(n.Y36(a.F0),n.Y36(e.qu),n.Y36(l.$),n.Y36(p.F))},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-login"]],decls:44,vars:3,consts:[[1,"row","container",3,"ngClass"],[1,"forms-container"],[1,"signin-signup"],[1,"sign-in-form",3,"formGroup"],[1,"title"],[1,"input-field"],[1,"fas","fa-user"],["type","text","formControlName","username","placeholder","T\xean \u0111\u0103ng nh\u1eadp"],[1,"fas","fa-lock"],["type","password","formControlName","password","placeholder","M\u1eadt kh\u1ea9u"],["type","button",1,"btn","solid",3,"click"],[1,"sign-up-form",3,"formGroup"],["type","button",1,"btn",3,"click"],[1,"panels-container"],[1,"panel","left-panel"],[1,"content"],["id","sign-up-btn",1,"btn","transparent",3,"click"],["src","img/log.svg","alt","",1,"image"],[1,"panel","right-panel"],["id","sign-in-btn",1,"btn","transparent",3,"click"],["src","img/register.svg","alt","",1,"image"]],template:function(t,i){1&t&&(n.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"form",3)(4,"h2",4),n._uU(5,"\u0110\u0103ng nh\u1eadp"),n.qZA(),n.TgZ(6,"div",5),n._UZ(7,"i",6)(8,"input",7),n.qZA(),n.TgZ(9,"div",5),n._UZ(10,"i",8)(11,"input",9),n.qZA(),n.TgZ(12,"button",10),n.NdJ("click",function(){return i.login()}),n._uU(13,"\u0110\u0103ng nh\u1eadp"),n.qZA()(),n.TgZ(14,"form",11)(15,"h2",4),n._uU(16,"\u0110\u0103ng k\xfd"),n.qZA(),n.TgZ(17,"div",5),n._UZ(18,"i",6)(19,"input",7),n.qZA(),n.TgZ(20,"div",5),n._UZ(21,"i",8)(22,"input",9),n.qZA(),n.TgZ(23,"button",12),n.NdJ("click",function(){return i.signUp()}),n._uU(24,"\u0110\u0103ng k\xfd"),n.qZA()()()(),n.TgZ(25,"div",13)(26,"div",14)(27,"div",15)(28,"h3"),n._uU(29,"B\u1ea1n m\u1edbi truy c\u1eadp ?"),n.qZA(),n.TgZ(30,"p"),n._uU(31," Nhanh tay \u0111\u0103ng k\xfd \u0111\u1ec3 s\u1eed d\u1ee5ng \u1ee9ng d\u1ee5ng nh\xe9! "),n.qZA(),n.TgZ(32,"button",16),n.NdJ("click",function(){return i.isSignUp=!i.isSignUp}),n._uU(33," \u0110\u0103ng k\xfd "),n.qZA()(),n._UZ(34,"img",17),n.qZA(),n.TgZ(35,"div",18)(36,"div",15)(37,"h3"),n._uU(38,"B\u1ea1n mu\u1ed1n qu\u1ea3n l\xfd t\xe1c v\u1ee5 t\u1ed1t h\u01a1n ?"),n.qZA(),n.TgZ(39,"p"),n._uU(40," C\xf2n ch\u1ea7n ch\u1eeb g\xec n\u1eefa, h\xe3y nhanh tay \u0111\u0103ng nh\u1eadp \u1ee9ng d\u1ee5ng "),n.qZA(),n.TgZ(41,"button",19),n.NdJ("click",function(){return i.isSignUp=!i.isSignUp}),n._uU(42," \u0110\u0103ng nh\u1eadp "),n.qZA()(),n._UZ(43,"img",20),n.qZA()()()),2&t&&(n.Q6J("ngClass",!0===i.isSignUp?"sign-up-mode":""),n.xp6(3),n.Q6J("formGroup",i.loginForm),n.xp6(11),n.Q6J("formGroup",i.signupForm))},directives:[u.mk,e._Y,e.JL,e.sg,e.Fj,e.JJ,e.u],styles:['@import"https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap";*[_ngcontent-%COMP%]{margin:0;padding:0;box-sizing:border-box}body[_ngcontent-%COMP%], input[_ngcontent-%COMP%]{font-family:Poppins,sans-serif}.container[_ngcontent-%COMP%]{position:relative;margin:0 auto;background-color:#fff;min-width:100vw;min-height:100vh;overflow:hidden}.forms-container[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%;top:0;left:0}.signin-signup[_ngcontent-%COMP%]{position:absolute;top:50%;transform:translate(-50%,-50%);left:75%;width:50%;transition:1s .7s ease-in-out;display:grid;grid-template-columns:1fr;-ms-grid-column:1fr;z-index:5}form[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;flex-direction:column;padding:0rem 5rem;transition:all .2s .7s;overflow:hidden;grid-column:1/2;grid-row:1/2}form.sign-up-form[_ngcontent-%COMP%]{opacity:0;z-index:1}form.sign-in-form[_ngcontent-%COMP%]{z-index:2}.title[_ngcontent-%COMP%]{font-size:2.2rem;color:#444;margin-bottom:10px}.input-field[_ngcontent-%COMP%]{max-width:380px;width:100%;background-color:#f0f0f0;margin:10px 0;height:55px;border-radius:55px;display:grid;grid-template-columns:15% 85%;padding:0 .4rem;position:relative}.input-field[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{text-align:center;line-height:55px;color:#acacac;transition:.5s;font-size:1.1rem}.input-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{background:none;outline:none;border:none;line-height:1;font-weight:600;font-size:1.1rem;color:#333}.input-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder{color:#aaa;font-weight:500}.social-text[_ngcontent-%COMP%]{padding:.7rem 0;font-size:1rem}.social-media[_ngcontent-%COMP%]{display:flex;justify-content:center}.social-icon[_ngcontent-%COMP%]{height:46px;width:46px;display:flex;justify-content:center;align-items:center;margin:0 .45rem;color:#333;border-radius:50%;border:1px solid #333;text-decoration:none;font-size:1.1rem;transition:.3s}.social-icon[_ngcontent-%COMP%]:hover{color:#4481eb;border-color:#4481eb}.btn[_ngcontent-%COMP%], button[_ngcontent-%COMP%]{width:150px;background-color:#5465ff;border:none;outline:none;height:49px;border-radius:49px;color:#fff;text-transform:uppercase;font-weight:600;margin:10px 0;cursor:pointer;transition:.5s}.btn[_ngcontent-%COMP%]:hover, button.btn[_ngcontent-%COMP%]:hover{background-color:#4d84e2}.panels-container[_ngcontent-%COMP%]{position:absolute;height:100%;width:100%;top:0;left:0;display:grid;grid-template-columns:repeat(2,1fr)}.container[_ngcontent-%COMP%]:before{content:"";position:absolute;height:2000px;width:2000px;top:-10%;right:48%;transform:translateY(-50%);background-image:linear-gradient(-45deg,#5465ff 0%,#04befe 100%);transition:1.8s ease-in-out;border-radius:50%;z-index:6}.image[_ngcontent-%COMP%]{width:100%;transition:transform 1.1s ease-in-out;transition-delay:.4s}.panel[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-end;justify-content:space-around;text-align:center;z-index:6}.left-panel[_ngcontent-%COMP%]{pointer-events:all;padding:3rem 17% 2rem 12%}.right-panel[_ngcontent-%COMP%]{pointer-events:none;padding:3rem 12% 2rem 17%}.panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{color:#fff;transition:transform .9s ease-in-out;transition-delay:.6s}.panel[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-weight:600;line-height:1;font-size:1.5rem}.panel[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.95rem;padding:.7rem 0}.btn.transparent[_ngcontent-%COMP%]{margin:0;background:none;border:2px solid #fff;width:130px;height:41px;font-weight:600;font-size:.8rem}.right-panel[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%], .right-panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{transform:translate(800px)}.container.sign-up-mode[_ngcontent-%COMP%]:before{transform:translate(100%,-50%);right:52%}.container.sign-up-mode[_ngcontent-%COMP%]   .left-panel[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%], .container.sign-up-mode[_ngcontent-%COMP%]   .left-panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{transform:translate(-800px)}.container.sign-up-mode[_ngcontent-%COMP%]   .signin-signup[_ngcontent-%COMP%]{left:25%}.container.sign-up-mode[_ngcontent-%COMP%]   form.sign-up-form[_ngcontent-%COMP%]{opacity:1;z-index:2}.container.sign-up-mode[_ngcontent-%COMP%]   form.sign-in-form[_ngcontent-%COMP%]{opacity:0;z-index:1}.container.sign-up-mode[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%], .container.sign-up-mode[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{transform:translate(0)}.container.sign-up-mode[_ngcontent-%COMP%]   .left-panel[_ngcontent-%COMP%]{pointer-events:none}.container.sign-up-mode[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]{pointer-events:all}@media (max-width: 870px){.container[_ngcontent-%COMP%]{min-height:800px;height:100vh}.container[_ngcontent-%COMP%]:before{width:1500px;height:1500px;transform:translate(-50%);left:30%;bottom:68%;right:initial;top:initial;transition:2s ease-in-out}.container.sign-up-mode[_ngcontent-%COMP%]:before{transform:translate(-50%,100%);bottom:32%;right:initial}.container.sign-up-mode[_ngcontent-%COMP%]   .signin-signup[_ngcontent-%COMP%]{top:5%;transform:translate(-50%)}.signin-signup[_ngcontent-%COMP%]{width:100%;top:95%;transform:translate(-50%,-100%);transition:1s .8s ease-in-out}.signin-signup[_ngcontent-%COMP%], .container.sign-up-mode[_ngcontent-%COMP%]   .signin-signup[_ngcontent-%COMP%]{left:50%}.panels-container[_ngcontent-%COMP%]{grid-template-columns:1fr;grid-template-rows:1fr 2fr 1fr}.panel[_ngcontent-%COMP%]{flex-direction:row;justify-content:space-around;align-items:center;padding:2.5rem 8%;grid-column:1/2}.panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{padding-right:15%;transition:transform .9s ease-in-out;transition-delay:.8s}.panel[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1.2rem}.panel[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.7rem;padding:.5rem 0}.right-panel[_ngcontent-%COMP%]{grid-row:3/4}.left-panel[_ngcontent-%COMP%]{grid-row:1/2}.image[_ngcontent-%COMP%]{width:200px;transition:transform .9s ease-in-out;transition-delay:.6s}.btn.transparent[_ngcontent-%COMP%]{width:110px;height:35px;font-size:.7rem}.container.sign-up-mode[_ngcontent-%COMP%]   .left-panel[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%], .container.sign-up-mode[_ngcontent-%COMP%]   .left-panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{transform:translateY(-300px)}.container.sign-up-mode[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%], .container.sign-up-mode[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{transform:translateY(0)}.right-panel[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%], .right-panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{transform:translateY(300px)}}@media (max-width: 570px){form[_ngcontent-%COMP%]{padding:0 1.5rem}.image[_ngcontent-%COMP%]{display:none}.panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{padding:.5rem 1rem}.container[_ngcontent-%COMP%]{padding:1.5rem}.container[_ngcontent-%COMP%]:before{bottom:72%;left:50%}.container.sign-up-mode[_ngcontent-%COMP%]:before{bottom:28%;left:50%}}']}),o})()}];let d=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[[a.Bz.forChild(m)],a.Bz]}),o})(),f=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[[u.ez,d,e.u5,e.UX]]}),o})()}}]);