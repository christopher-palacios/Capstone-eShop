(this.webpackJsonpscoop=this.webpackJsonpscoop||[]).push([[0],{103:function(e,t,a){},128:function(e,t,a){},129:function(e,t,a){},136:function(e,t,a){},137:function(e,t,a){},138:function(e,t,a){},139:function(e,t,a){},140:function(e,t,a){},141:function(e,t,a){},143:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),s=a(24),r=a.n(s),o=(a(97),a(98),a(171)),i=a(87),l=a(159),d=a(17),j=a(7),u=(a(99),a(169)),m=a.p+"static/media/clothing.a9f7d612.jpg",b=a.p+"static/media/jewelry.22b35d8e.jpg",h=a.p+"static/media/electronics.d7fbda90.jpg",p=a(1);var O=function(){var e=Object(c.useState)(0),t=Object(j.a)(e,2),a=t[0],n=t[1];return Object(p.jsxs)(u.a,{className:"hero",activeIndex:a,onSelect:function(e,t){n(e)},children:[Object(p.jsxs)(u.a.Item,{children:[Object(p.jsx)("img",{className:"d-block w-100 hero__img",src:m,alt:"First slide"}),Object(p.jsxs)(u.a.Caption,{className:"hero__cap",children:[Object(p.jsx)("h1",{className:"hero__cap--title",children:"Clothing"}),Object(p.jsx)("h3",{className:"hero__cap--text",children:"Browse our entire range of Women's and Men's clothing"})]})]}),Object(p.jsxs)(u.a.Item,{children:[Object(p.jsx)("img",{className:"d-block w-100 hero__img",src:b,alt:"Second slide"}),Object(p.jsxs)(u.a.Caption,{className:"hero__cap",children:[Object(p.jsx)("h1",{className:"hero__cap--title",children:"Jewelry"}),Object(p.jsx)("h3",{className:"hero__cap--text",children:"A unique selection of jewelry"})]})]}),Object(p.jsxs)(u.a.Item,{children:[Object(p.jsx)("img",{className:"d-block w-100 hero__img",src:h,alt:"Third slide"}),Object(p.jsxs)(u.a.Caption,{className:"hero__cap",children:[Object(p.jsx)("h1",{className:"hero__cap--title",children:"Electronics"}),Object(p.jsx)("h3",{className:"hero__cap--text",children:"All new electronics available"})]})]})]})},g=(a(103),a(18)),x=a.n(g),f=a(36),N=a(13),v=a.n(N),_=a(14),C=a.n(_),y=Object(c.createContext)(),A=function(e){var t=e.children,a="https://e-shop-cp.herokuapp.com/api",n=localStorage.getItem("token"),s=Object(c.useState)([]),r=Object(j.a)(s,2),o=r[0],i=r[1],l=Object(c.useState)([]),d=Object(j.a)(l,2),u=d[0],m=d[1],b=Object(c.useState)([]),h=Object(j.a)(b,2),O=h[0],g=h[1],N=Object(c.useState)(!1),_=Object(j.a)(N,2),A=_[0],w=_[1],E=Object(c.useState)([]),S=Object(j.a)(E,2),I=S[0],B=S[1],R=Object(c.useState)([]),k=Object(j.a)(R,2),G=k[0],Y=k[1],T=Object(c.useState)(),L=Object(j.a)(T,2),D=L[0],J=L[1],P=Object(c.useState)(""),z=Object(j.a)(P,2),Q=z[0],q=z[1],K=Object(c.useState)([]),M=Object(j.a)(K,2),F=M[0],H=M[1],U=Object(c.useState)(),Z=Object(j.a)(U,2),V=Z[0],X=Z[1],W=Object(c.useState)(!1),$=Object(j.a)(W,2),ee=$[0],te=$[1],ae=Object(c.useState)(!1),ce=Object(j.a)(ae,2),ne=ce[0],se=ce[1],re=Object(c.useState)(!1),oe=Object(j.a)(re,2),ie=oe[0],le=oe[1],de=JSON.parse(localStorage.getItem("guestCart")),je={isOpen:!0,products:[],cartQuantity:0,cartTotal:0},ue=function(){var e=Object(f.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:C.a.get("".concat(a,"/categories")).then((function(e){B(e.data)})).catch((function(e){return v()(e.message)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),me=function(){var e=Object(f.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:C.a.get("".concat(a,"/product/list")).then((function(e){m(e.data)})).catch((function(e){return v()(e.message)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),be=function(){var e=Object(f.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:C.a.get("".concat(a,"/cart"),{headers:{authorization:"Bearer ".concat(n)}}).then((function(e){return H(e.data)})).catch((function(e){return v()("getCart",e.message)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),he=function(){var e=Object(f.a)(x.a.mark((function e(t,c){var s,r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=12;break}console.log("no toke"),s=JSON.parse(localStorage.getItem("guestCart")),r=s.products.map((function(e){return e.name})).indexOf(t.name),s.products[r].quantity=s.products[r].quantity+1,s.products[r].productTotal=s.products[r].productTotal+t.price,s.cartTotal=s.products.map((function(e){return e.productTotal})).reduce((function(e,t){return e+t})),s.cartQuantity=s.products.map((function(e){return e.quantity})).reduce((function(e,t){return e+t})),H(s),localStorage.setItem("guestCart",JSON.stringify(s)),e.next=21;break;case 12:if(!n){e.next=21;break}return e.prev=13,e.next=16,C.a.put("".concat(a,"/cart/increase/").concat(c),{product:t,cartId:c},{headers:{authorization:"Bearer ".concat(n)}}).then((function(e){return H(e.data)}),w(!1));case 16:e.next=21;break;case 18:e.prev=18,e.t0=e.catch(13),v()("Please login or create an account to add items to your cart",e.t0.message);case 21:case"end":return e.stop()}}),e,null,[[13,18]])})));return function(t,a){return e.apply(this,arguments)}}(),pe=function(){var e=Object(f.a)(x.a.mark((function e(t,c){var s,r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=11;break}s=JSON.parse(localStorage.getItem("guestCart")),r=s.products.map((function(e){return e.name})).indexOf(t.name),s.products[r].quantity=s.products[r].quantity-1,s.products[r].productTotal=s.products[r].productTotal-t.price,s.cartTotal=s.products.map((function(e){return e.productTotal})).reduce((function(e,t){return e+t})),s.cartQuantity=s.products.map((function(e){return e.quantity})).reduce((function(e,t){return e+t})),H(s),localStorage.setItem("guestCart",JSON.stringify(s)),e.next=19;break;case 11:return e.prev=11,e.next=14,C.a.put("".concat(a,"/cart/decrease/").concat(c),{product:t},{headers:{authorization:"Bearer ".concat(n)}}).then((function(e){return H(e.data)})).catch((function(e){return v()(e.message)}));case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(11),v()(e.t0.message);case 19:case"end":return e.stop()}}),e,null,[[11,16]])})));return function(t,a){return e.apply(this,arguments)}}(),Oe=function(){var e=Object(f.a)(x.a.mark((function e(t,c){var s;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=7;break}1===(s=JSON.parse(localStorage.getItem("guestCart"))).products.length?(s.products=[],s.cartTotal=0,s.cartQuantity=0):s.products.length>1&&(s.products=s.products.filter((function(e){return e.name!==t.name})),s.cartTotal=s.products.map((function(e){return e.productTotal})).reduce((function(e,t){return e+t})),s.cartQuantity=s.products.map((function(e){return e.quantity})).reduce((function(e,t){return e+t}))),H(s),localStorage.setItem("guestCart",JSON.stringify(s)),e.next=15;break;case 7:return e.prev=7,e.next=10,C.a.put("".concat(a,"/cart/delete/").concat(c),{product:t,cartId:c},{headers:{authorization:"Bearer ".concat(n)}}).then((function(e){return H(e.data)})).catch((function(e){return v()(e.message)}));case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(7),v()(e.t0.message);case 15:case"end":return e.stop()}}),e,null,[[7,12]])})));return function(t,a){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){if(ue(),me(),n||null!==de){if(!n&&de){var e=JSON.parse(localStorage.getItem("guestCart"));H(e)}}else H(je),localStorage.setItem("guestCart",JSON.stringify(je));n&&(localStorage.removeItem("guestCart"),be())}),[n]),Object(p.jsx)(y.Provider,{value:{baseUrl:a,randomItems:G,setRandomItems:Y,isSignedIn:ie,setIsSignedIn:le,logInModalShow:ee,setLogInModalShow:te,signUpModalShow:ne,setSignUpModalShow:se,selectedCategory:o,setSelectedCategory:i,selectedProduct:O,setSelectedProduct:g,loading:A,setLoading:w,categoryList:I,setCategoryList:B,productList:u,currentUser:D,setCurrentUser:J,getCategoryList:ue,drop:Q,setDrop:q,cart:F,setCart:H,token:n,increaseQty:he,decreaseQty:pe,deleteProduct:Oe,purchased:V,setPurchased:X},children:t})};var w=function(){var e=Object(c.useContext)(y).categoryList;return Object(c.useEffect)((function(){}),[]),Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("section",{className:"home",children:[Object(p.jsx)("div",{className:"home__carousel",children:Object(p.jsx)(O,{})}),Object(p.jsx)("h2",{className:"home__title",children:"Welcome to eShop"}),Object(p.jsxs)("div",{className:"home__shop",children:[Object(p.jsxs)(o.a,{className:"text-center home__feat",children:[Object(p.jsx)(o.a.Header,{className:"home__feat--title",children:"Categories"}),Object(p.jsxs)(o.a.Body,{className:"home__feat--body",children:[Object(p.jsx)(o.a.Text,{className:"home__feat--text",children:"Shop categoriess below"}),Object(p.jsx)(d.b,{to:"/categories",children:Object(p.jsx)(i.a,{className:"home__feat--button",variant:"primary",children:"Shop Now"})})]})]}),Object(p.jsx)("div",{className:"home__categories",children:Object(p.jsx)("div",{className:"home__categories--card",children:Object(p.jsxs)(o.a,{className:"text-center",children:[Object(p.jsx)(o.a.Header,{className:"home__categories--title",children:"Featured"}),Object(p.jsx)(l.a,{children:null===e||void 0===e?void 0:e.map((function(e){return Object(p.jsx)(d.b,{className:"home__categories--link",to:"/categories/".concat(e._id),children:Object(p.jsx)(l.a.Item,{className:"home__categories--list-item",children:e.name})},e._id)}))})]})})})]})]})})},E=a(75),S=a.n(E),I=a(39),B=a(15),R=a(167);a(128);var k=function(e){var t=Object(c.useContext)(y),a=t.setCurrentUser,n=t.setIsSignedIn,s=t.baseUrl,r=Object(c.useState)(),o=Object(j.a)(r,2),i=o[0],l=o[1],u=function(e){l(Object(B.a)(Object(B.a)({},i),{},Object(I.a)({},e.target.name,e.target.value)))};return Object(p.jsx)(R.a,Object(B.a)(Object(B.a)({},e),{},{className:"login",size:"lg",centered:!0,children:Object(p.jsxs)("div",{className:"login__card",children:[Object(p.jsxs)("div",{className:"login__welcome",children:[Object(p.jsx)("h1",{className:"login__welcome--title",children:"Log In"}),Object(p.jsx)("button",{className:"login__welcome--close",onClick:e.loginClose,children:"X"})]}),Object(p.jsxs)("form",{className:"login__form",onSubmit:function(e){e.preventDefault(),C.a.post("".concat(s,"/users/login"),i).then((function(e){var t=e.data.token,c=e.data.user,s=c.firstName,r=c._id,o=s;localStorage.setItem("token",t),localStorage.setItem("user",o),localStorage.setItem("userId",r),n(!0),a(o),localStorage.removeItem("guestCart")})).catch((function(e){return v()({text:"Check your email/password and try again"})}))},children:[Object(p.jsxs)("div",{className:"login__form--card",children:[Object(p.jsx)("label",{className:"login__form--label",children:"Email"}),Object(p.jsx)("input",{className:"login__form--input email",onChange:u,type:"email",name:"email"}),Object(p.jsx)("label",{className:"login__form--label",children:"Password"}),Object(p.jsx)("input",{className:"login__form--input password",onChange:u,type:"password",name:"password"}),Object(p.jsx)("button",{className:"login__form--button",onClick:e.loginClose,children:"Login"})]}),Object(p.jsxs)("h5",{className:"login__redirect",children:["Not a member?",Object(p.jsxs)(d.b,{onClick:e.loginSwitch,to:"",children:[" ","Sign Up"," "]}),"here"]})]})]})}))};var G=function(e){var t=this,a=Object(c.useContext)(y).baseUrl,n=Object(c.useState)(),s=Object(j.a)(n,2),r=s[0],o=s[1],i=function(e){console.log(e.target.name),console.log(e.target.value),o(Object(B.a)(Object(B.a)({},r),{},Object(I.a)({},e.target.name,e.target.value)))};return Object(p.jsx)(R.a,Object(B.a)(Object(B.a)({},e),{},{className:"login",size:"lg",centered:!0,children:Object(p.jsxs)("div",{className:"login__card",children:[Object(p.jsxs)("div",{className:"login__welcome",children:[Object(p.jsx)("h1",{className:"login__welcome--title",children:"Get Started"}),Object(p.jsx)("button",{className:"login__welcome--close",onClick:e.signupClose,children:"X"})]}),Object(p.jsx)("form",{className:"login__form",children:Object(p.jsxs)("div",{className:"login__form--card",children:[Object(p.jsx)("label",{className:"login__form--label",children:"First Name"}),Object(p.jsx)("input",{className:"login__form--input firstName",onChange:i,type:"firstName",name:"firstName"}),Object(p.jsx)("label",{className:"login__form--label",children:"Last Name"}),Object(p.jsx)("input",{className:"login__form--input lastName",onChange:i,type:"lastName",name:"lastName"}),Object(p.jsx)("label",{className:"login__form--label",children:"Email"}),Object(p.jsx)("input",{className:"login__form--input email",onChange:i,type:"email",name:"email"}),Object(p.jsx)("label",{className:"login__form--label",children:"Password"}),Object(p.jsx)("input",{className:"login__form--input password",onChange:i,type:"password",name:"password"}),Object(p.jsx)("button",{onClick:function(e){C.a.post("".concat(a,"/users"),r).then((function(e){var a=e.data.token;sessionStorage.setItem("token",a),t.props.history.push("/")})).catch((function(e){return alert(e)}))},className:"login__form--button",children:"Sign Up"})]})}),Object(p.jsxs)("h5",{className:"login__redirect",children:["If already registered.",Object(p.jsxs)(d.b,{onClick:e.signupSwitch,to:"",children:[" ","Log In"," "]}),"here"]})]})}))},Y=(a(129),a(170)),T=a(172),L=a(160),D=a(161);var J=function(){var e=Object(c.useContext)(y),t=e.currentUser,a=e.setCurrentUser,n=e.cart,s=e.categoryList,r=e.setIsSignedIn,o=Object(c.useState)(!1),i=Object(j.a)(o,2),l=i[0],d=i[1],u=Object(c.useState)(!1),m=Object(j.a)(u,2),b=m[0],h=m[1],O=localStorage.getItem("user");Object(c.useEffect)((function(){a(O)}),[]);var g=function(){d(!1)},x=function(){h(!1)};return Object(p.jsx)("nav",{className:"nav",children:Object(p.jsxs)(Y.a,{className:"nav__color",variant:"dark",expand:"sm",children:[Object(p.jsx)(T.a.Link,{className:"nav__brand",href:"/",children:"eShop"}),Object(p.jsx)(Y.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(p.jsx)(Y.a.Collapse,{id:"basic-navbar-nav",children:Object(p.jsxs)(T.a,{className:"mr-auto",children:[Object(p.jsxs)(L.a,{className:"dropp",title:(null===n||void 0===n?void 0:n.cartQuantity)?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(S.a,{}),Object(p.jsx)(D.a,{pill:!0,variant:"light",children:n.cartQuantity})]}):Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(S.a,{})}),children:[s.map((function(e){return Object(p.jsxs)(L.a.Item,{className:"nav__link",href:"/categories/".concat(e._id),children:["Shop ",e.name]},e._id)}))," ",Object(p.jsx)(L.a.Divider,{}),Object(p.jsx)(L.a.Item,{className:"nav__link",href:"/cart",children:"Your Cart"})]}),Object(p.jsx)(L.a,{title:t||"Guest",id:"dropdown-menu-align-right",children:t?Object(p.jsx)(L.a.Item,{className:"nav__link",onClick:function(){localStorage.removeItem("token"),localStorage.removeItem("user"),localStorage.removeItem("userId"),a(null),r(!1)},children:"Sign Out"}):Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(L.a.Item,{onClick:function(){d(!0)},children:"Log In"}),Object(p.jsx)(L.a.Item,{className:"nav__link",onClick:function(){h(!0)},children:"Create Account"}),Object(p.jsx)(L.a.Divider,{}),Object(p.jsx)(L.a.Item,{href:"/about",children:"About Us"}),Object(p.jsx)(L.a.Item,{href:"/contact",children:"Contact Us"})]})})]})}),Object(p.jsx)(k,{onHide:g,show:l,loginClose:g,loginSwitch:function(){d(!1),h(!0)}}),Object(p.jsx)(G,{onHide:x,show:b,showLogin:l,signupClose:x,signupSwitch:function(){h(!1),d(!0)}})]})})},P=(a(86),a.p+"static/media/mongodb.347df767.png"),z=a.p+"static/media/express.0e7aa789.svg",Q=a.p+"static/media/react.1520bd67.svg",q=a.p+"static/media/nodejs.8d19172d.png",K=a.p+"static/media/bootstrap.153e83bc.svg",M=a.p+"static/media/sass.8aa78a83.svg",F=a.p+"static/media/stripe.49adcafa.svg",H=a.p+"static/media/javascript.218515fe.svg",U=a(162),Z=a(163),V=a(89),X=a(164);var W=function(){return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("section",{className:"about",children:[Object(p.jsxs)("h1",{className:"about__title",children:["This application was built using:",Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),"MERN stack, Bootstrap, Stripe, Sass"]}),Object(p.jsxs)(U.a,{className:"about__contain",children:[Object(p.jsxs)(Z.a,{children:[Object(p.jsx)(V.a,{children:Object(p.jsx)(X.a,{className:"about__contain--icon",src:P,rounded:!0})}),Object(p.jsx)(V.a,{children:Object(p.jsx)(X.a,{className:"about__contain--icon",src:z,rounded:!0})}),Object(p.jsx)(V.a,{children:Object(p.jsx)(X.a,{className:"about__contain--icon",src:Q,rounded:!0})}),Object(p.jsx)(V.a,{children:Object(p.jsx)(X.a,{className:"about__contain--icon",src:q,rounded:!0})})]}),Object(p.jsxs)(Z.a,{children:[Object(p.jsx)(V.a,{children:Object(p.jsx)(X.a,{className:"about__contain--icon",src:K,rounded:!0})}),Object(p.jsx)(V.a,{children:Object(p.jsx)(X.a,{className:"about__contain--icon",src:M,rounded:!0})}),Object(p.jsx)(V.a,{children:Object(p.jsx)(X.a,{className:"about__contain--icon",src:F,rounded:!0})}),Object(p.jsx)(V.a,{children:Object(p.jsx)(X.a,{className:"about__contain--icon",src:H,rounded:!0})})]})]})]})})},$=(a(136),a.p+"static/media/github.3da04868.png");var ee=function(){return Object(p.jsx)("section",{className:"contain",children:Object(p.jsxs)("div",{className:"contact",children:[Object(p.jsx)("h1",{className:"contact__title",children:" Reach us at:"}),Object(p.jsx)(U.a,{className:"contact__contain",children:Object(p.jsxs)(Z.a,{className:"contact__contain--row",children:[Object(p.jsx)(V.a,{className:"contact__contain__col",children:Object(p.jsx)("a",{href:"https://www.linkedin.com/in/christopher-palacios/",children:Object(p.jsx)(X.a,{className:"contact__contain--icon",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAADwCAYAAAA+VemSAAAABmJLR0QA/wD/AP+gvaeTAAATHklEQVR4nO3dfZRU5X0H8O9z78zsLLsry8vytrwIEnHfQJBT9XiCJUYBwylajiZRDE1ijdbE9DSmEPQ025wjLsYmPa00qT02VTSpob5EG6QaaVPT+m6FhUUqBLBIeFvAXZbdnZl7n/7x3DtzB5Zldndmn/vy/Zyzh51lmec3nPnO89znPve5ABEREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREFm9BdwJDd1zYNllwIIedDylmAuBDAGACVAOKaqyN/SAM4BaAdQuwF5P8CeBu2+Hesa/hIc21DEswA3791OtKx2yDkrQAu1l0OBZnYBcinAHMDWur26a5moIIV4DWts2Eb9wK4BZCm7nIoVGwAmwB8Dy2Nb+suplDBCPCa1vGwje8DcgWCUjMF2UYY8htY23RYdyHn4/8wrN7+RUj8HQSqdZdCkXICkHehpelp3YX0x78Bbt6RQLd8BAJ/rLsUijLxYyTxTTQ3pHRX0hd/BvjerRWIm89AYpHuUogAbEGy7EY0f6pDdyFn8l+A//yDKhiZVwBcrrsUohz5BpLGtWhuOKW7Ei9DdwF5mnckYGY2guEl3xFXoEf+At/4sEx3JV7+CnC3fITDZvKxz6Ai9de6i/DyzxB6VevNEMLXM35EiliBloandFcB+CXAa1rHwxIf8FQRBYP4BIaow9r63+muxB9DaNt4mOGl4JAjYdsP6q4C8EMPvKZtHmz7HV/UQlQ4CYm5WNe4VWcR+ntg214DhpeCR8CQa/QXodP9W6cjY+6GHz5IiAbOhmnMwAP1+3UVoDc4mdiXtNdANHgGLGuF3gK0krfobZ9oqMStWlvX1vKqHVMhpLahB1HRSDFN184e+npgA9doa5uoqOTv62pZ4xBaXqavbaIiEkLbe1lfgKWcpa1tomIS+t7LGntgMUNf20RFJHGRrqb1BZhLJyk8tL2XNQ6hUamtbaLiqtLVcExXwwASGtvugwRsG5AWICUgbefHEhDO2TZhqO+FCRgGdC9kI9/QdpG/zgD7g7QBKw3YVj+/I50/3d/JqD8MEzDjKthEGkQ3wP0F17YAOL2whNPRChVUw8z/PdtikEmb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GogGS8iNeKB+v84S9K+FNsUDAKTuMogGSELIB3UXoT/AaxveB7BBdxlEAyN+grVN23RXoT/AAJCxvg3ghO4yiAp0AqJ3te4iAL8E+OE5RwDxNd1lEBVEiq/jwXlHdZcB+CXAANDSsBEQP9ZdBlG/BNZjXYNvTn/6J8AAcLz7HgCbdZdB1CeJV1Em/kx3GV7+CvCj89NIipsA+YbuUojyiddRLm5Ac0NKdyVe/gowADQ3nELG/izYE5NfSLwK21yE5gbfbULhvwADwMNzupAUy3hMTNoJrMeJniV46BJtu270x/972a9u/TwgfgRglO5SKEIEjkOKO9Xkqn/5swf2aml6Gr1iJiD+Blw3TaUnAbEBaavO7+EFgtADe63a1gRhfhvALYAscNd0ooLYADYBdjNaZgdms4lgBdh1X9s0ZOzbIHALgDrd5VCgtQHyp5DGBnWNerAEM8Be97VOQUYshCHnQ4pZAC6EwFhIVKLU+05TUKQgcAoSxyCwF1LsgpTvQlpbdF6MT0REREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREQE/D/+F6PTyQ6XZAAAAABJRU5ErkJggg==",rounded:!0})})}),Object(p.jsx)(V.a,{className:"contact__contain__col",children:Object(p.jsx)("a",{href:"https://github.com/christopher-palacios",children:Object(p.jsx)(X.a,{className:"contact__contain--icon",src:$,rounded:!0})})})]})})]})})},te=(a(137),a.p+"static/media/mn.2a700655.jpg"),ae=a.p+"static/media/wmn.481e8888.jpg",ce=a.p+"static/media/jewel.bdcc5a0a.jpg",ne=a.p+"static/media/tech.483f059c.jpg",se=a(165);var re=function(){var e=Object(c.useContext)(y).categoryList;return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("section",{children:Object(p.jsxs)("div",{className:"categories",children:[Object(p.jsx)("h1",{className:"categories__title",children:"Categories"}),Object(p.jsx)("div",{className:"categories__container",children:null===e||void 0===e?void 0:e.map((function(e){return Object(p.jsx)("div",{className:"categories__card",children:Object(p.jsx)(d.b,{to:"/categories/".concat(e._id),className:"categories__card--link",children:Object(p.jsx)(se.a,{children:Object(p.jsxs)(o.a,{className:"categories__card--card",children:[Object(p.jsxs)(o.a.Body,{className:"categories__card--body",children:[Object(p.jsx)(o.a.Title,{className:"categories__card--title",children:e.name}),Object(p.jsx)(o.a.Img,{className:"categories__card--img",src:"Women's clothing"===e.name?ae:"Men's clothing"===e.name?te:"Jewelery"===e.name?ce:ne})]}),Object(p.jsx)(o.a.Footer,{className:"categories__card--foot",children:Object(p.jsx)("small",{className:"text-muted",children:"Click here for more ".concat(e.name," ")})})]})})})},e._id)}))})]})})})},oe=(a(138),a(166)),ie=a(32),le=a(168),de=a(90);var je=function(e){var t=Object(c.useContext)(y),a=t.categoryList,n=t.baseUrl,s=Object(c.useState)([]),r=Object(j.a)(s,2),l=r[0],d=r[1],u=Object(c.useState)(""),m=Object(j.a)(u,2),b=m[0],h=m[1],O=Object(c.useState)(""),g=Object(j.a)(O,2),x=g[0],f=g[1],N=e.match.params.id;return Object(c.useEffect)((function(){var e;C.a.get("".concat(n,"/categories/").concat(N)).then((function(e){d(e.data)}));var t=a.filter((function(e){return e._id===N}));f(null===(e=t[0])||void 0===e?void 0:e.name)}),[a,N]),Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("section",{className:"itemList",children:[Object(p.jsx)("div",{className:"sub-nav",children:Object(p.jsxs)(T.a,{className:"sub-nav__links",activeKey:"/home",children:[Object(p.jsxs)(oe.a,{id:"dropdown-basic-button",variant:"Secondary",title:x,children:[a.map((function(e){return Object(p.jsx)(ie.a.Item,{href:"/categories/".concat(e._id),children:e.name},e._id)})),Object(p.jsx)(ie.a.Item,{href:"/categories",children:"Categories"})]}),Object(p.jsx)("div",{className:"sub-nav__form",children:Object(p.jsxs)(le.a,{inline:!0,children:[Object(p.jsx)(de.a,{type:"text",onChange:function(e){h(e.target.value)},placeholder:"Search",className:"sub-nav__form--input"}),Object(p.jsx)(i.a,{className:"sub-nav__form--button",variant:"outline",children:"Search"})]})})]})}),Object(p.jsx)("div",{className:"shop",children:Object(p.jsx)("div",{className:"shop__container",children:Object(p.jsx)(se.a,{className:"shop__card",children:null===l||void 0===l?void 0:l.filter((function(e){return e.name.toLowerCase().includes(b.toLowerCase())})).map((function(e){return Object(p.jsxs)(o.a,{className:"shop__card--indv",children:[Object(p.jsx)(o.a.Body,{className:"shop__card--body",children:Object(p.jsx)(o.a.Link,{className:"shop__card--top",href:"/product/".concat(e._id),children:Object(p.jsx)(o.a.Img,{className:"shop__card--img",variant:"top",src:e.image})})}),Object(p.jsxs)(o.a.Footer,{className:"shop__card--footer",children:[Object(p.jsx)(o.a.Title,{children:e.name}),Object(p.jsx)("small",{className:"text-muted",children:Object(p.jsx)(o.a.Text,{children:"$".concat(e.price)})})]})]},e._id)}))})})})]})})};a(139);var ue=function(e){var t=Object(c.useState)([]),a=Object(j.a)(t,2),n=a[0],s=a[1],r=Object(c.useState)(1),o=Object(j.a)(r,1)[0],l=Object(c.useContext)(y),u=l.setCart,m=l.token,b=l.baseUrl;return Object(c.useEffect)((function(){var t=e.match.params.id;C.a.get("".concat(b,"/product/").concat(t)).then((function(e){var t=e.data;s(t)}))}),[e.match.params]),Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("section",{className:"section",children:[Object(p.jsxs)(d.b,{className:"product__back",to:"/categories/".concat(n.categoryId),children:[" ","Back To ".concat(n.category)]}),Object(p.jsxs)("div",{className:"product",children:[Object(p.jsx)("img",{className:"product__img",alt:"product img",src:n.image}),Object(p.jsxs)("div",{className:"product__details",children:[Object(p.jsxs)("div",{className:"product__details--top",children:[Object(p.jsxs)("div",{className:"product__details--info",children:[Object(p.jsx)("h1",{className:"product__details--title",children:n.name}),Object(p.jsx)("h3",{className:"product__details--category",children:n.category}),Object(p.jsx)("h4",{children:"Price: $".concat(n.price)})]}),Object(p.jsxs)("div",{className:"product__details--action",children:[Object(p.jsx)("div",{className:"product__details--qty"}),Object(p.jsx)(i.a,{onClick:function(){!function(e){var t=e.price.slice(0,9).split(",").join("");if(!m){var a=localStorage.getItem("guestCart"),c=JSON.parse(a),n=c.products.map((function(e){return e.name})).includes(e.name);if(n){if(n){var s=c.products.map((function(e){return e.name})).indexOf(e.name);c.products[s].productTotal=Number(c.products[s].productTotal)+Number(e.price),c.products[s].quantity=Number(c.products[s].quantity)+1,c.cartTotal=c.products.map((function(e){return e.productTotal})).reduce((function(e,t){return e+t})),c.cartQuantity=c.products.map((function(e){return e.quantity})).reduce((function(e,t){return e+t})),u(c),v()("Success!","Item has beeen updated"),localStorage.setItem("guestCart",JSON.stringify(c))}}else{var r={quantity:1,productTotal:Number(e.price),productId:e._id,name:e.name,price:Number(e.price),image:e.image,category:e.category};c.products.push(r),c.cartTotal=c.products.map((function(e){return Number(e.productTotal)})).reduce((function(e,t){return e+t})),c.cartQuantity=c.products.map((function(e){return Number(e.quantity)})).reduce((function(e,t){return e+t})),localStorage.setItem("guestCart",JSON.stringify(c)),u(c),v()("Success!","Item has beeen added to cart")}}m&&C.a.post("".concat(b,"/cart"),{quantity:o,product:e,price:t},{headers:{authorization:"Bearer ".concat(m)}}).then((function(e){u(e.data),v()("Success!","Item has beeen added to cart")})).catch((function(e){return v()("Please sign in to continue shopping")}))}(n)},className:"product__details--add",variant:"outline-dark",children:"ADD TO CART"})]})]}),Object(p.jsx)("div",{className:"product__details--footer",children:Object(p.jsx)("p",{className:"product__details--text",children:n.description})})]})]})]})})},me=a(88),be=a(41),he=(a(140),function(e){var t=e.label,a=e.id,c=e.type,n=e.placeholder,s=e.required,r=e.autoComplete,o=e.value,i=e.onChange,l=e.name;return Object(p.jsxs)("div",{className:"form-row",children:[Object(p.jsx)("label",{htmlFor:a,className:"form-row-label",children:t}),Object(p.jsx)("input",{className:"form-row-input",id:a,type:c,name:l,placeholder:n,required:s,autoComplete:r,value:o,onChange:i})]})});var pe=function(e){var t,a=Object(c.useContext)(y),n=a.cart,s=a.token,r=a.loading,o=a.setLoading,l=a.setPurchased,d=a.setCart,u=a.baseUrl,m=Object(be.useStripe)(),b=Object(be.useElements)(),h=Object(c.useState)({}),O=Object(j.a)(h,2),g=O[0],N=O[1],_=function(e){N(Object(B.a)(Object(B.a)({},g),{},Object(I.a)({},e.target.name,e.target.value)))},A=function(){var t=Object(f.a)(x.a.mark((function t(){var a,c,r,i,j,h;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o(!0),t.next=3,m.createPaymentMethod({type:"card",card:b.getElement(be.CardElement),billing_details:{name:g.name,email:g.email,phone:g.phone,address:{city:g.city,country:"US",line1:g.line1,postal_code:g.postal_code,state:g.state}}});case 3:return a=t.sent,c=a.paymentMethod,t.next=7,C.a.post("".concat(u,"/order/intent"),{cart:n,paymentMethod:c},{headers:{Authorization:"Bearer ".concat(s)}}).catch((function(e){return console.log(e.message)}));case 7:return r=t.sent,i=r.data,t.next=11,m.confirmCardPayment(i,{payment_method:{card:b.getElement(be.CardElement),billing_details:{name:g.name,email:g.email,phone:g.phone,address:{city:g.city,country:"US",line1:g.line1,postal_code:g.postal_code,state:g.state}}}});case 11:if(j=t.sent,"succeeded"!==(h=j.paymentIntent).status){t.next=21;break}return t.next=16,C.a.post("".concat(u,"/order"),{cart:n,transactionId:h.id},{headers:{Authorization:"Bearer ".concat(s)}}).then((function(e){return console.log(e.data)})).catch((function(e){return console.log(e.message)}));case 16:v()("Thank you for your purchase!","Come back soon!"),o(!1),d({}),l(!0),e.onHide();case 21:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(p.jsxs)(R.a,Object(B.a)(Object(B.a)({},e),{},{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[Object(p.jsx)(R.a.Header,{closeButton:!0,children:Object(p.jsx)(R.a.Title,{id:"contained-modal-title-vcenter",children:"Checkout"})}),Object(p.jsx)(R.a.Body,{children:Object(p.jsxs)("form",{className:"form",children:[Object(p.jsx)("h5",{className:"pl-2",children:"Billing Details"}),Object(p.jsxs)("fieldset",{className:"form-group",children:[Object(p.jsx)(he,{label:"Name",id:"name",name:"name",type:"text",placeholder:"Jane Doe",required:!0,autoComplete:"name",onChange:_}),Object(p.jsx)(he,{label:"Email",id:"email",name:"email",type:"email",placeholder:"janedoe@gmail.com",required:!0,autoComplete:"email",onChange:_}),Object(p.jsx)(he,{label:"Phone",id:"phone",name:"phone",type:"tel",placeholder:"(941) 555-0123",required:!0,autoComplete:"tel",onChange:_}),Object(p.jsx)(he,{label:"Shipping Address",id:"line1",name:"line1",type:"text",placeholder:"123 Main St",required:!0,autoComplete:"line1",onChange:_}),Object(p.jsx)(he,{label:"City",id:"city",name:"city",type:"text",placeholder:"Miami",required:!0,autoComplete:"city",onChange:_}),Object(p.jsx)(he,{label:"State",id:"state",name:"state",type:"text",placeholder:"FL",required:!0,autoComplete:"state",onChange:_})]}),Object(p.jsx)("fieldset",{className:"form-group",children:Object(p.jsx)(be.CardElement,{options:{iconStyle:"solid",style:{base:{iconColor:"#264653",fontWeight:700,fontFamily:"Roboto, Open Sans, Segoe UI, sans-serif",fontSize:"18px",fontSmoothing:"antialiased",":-webkit-autofill":{color:"#264653"},"::placeholder":{color:"#e0522f7a"}},invalid:{iconColor:"#e76f51",color:"#e0522f7a"}}}})})]})}),Object(p.jsxs)(R.a.Footer,{className:"d-flex justify-content-between",children:[Object(p.jsxs)("p",{children:["Total: $",null===n||void 0===n||null===(t=n.cartTotal)||void 0===t?void 0:t.toFixed(2)]}),Object(p.jsx)(i.a,{onClick:A,disabled:r,children:r?"Sending...":"Confirm Payment"})]})]}))},Oe=a(91),ge=a(11),xe=(a(141),Object(Oe.a)("pk_test_51IiCNaCDpCm9ESLbqwa8cZK5HOsB3HbcuwGcvUoQCQ3moNEix44pe4RaxQPYoiJJuS8VbtT0HK29rxKxKovr4joy00ylNJkXCj"));var fe=function(){var e,t=Object(c.useContext)(y),a=t.cart,n=t.decreaseQty,s=t.increaseQty,r=t.deleteProduct,u=t.purchased,m=t.setCart,b=t.token,h=Object(c.useState)(!1),O=Object(j.a)(h,2),g=O[0],x=O[1],f=JSON.parse(localStorage.getItem("guestCart"));return Object(c.useEffect)((function(){b||m(f)}),[b]),u?Object(p.jsx)(ge.a,{to:"/"}):!(null===a||void 0===a?void 0:a.products)||(null===a||void 0===a||null===(e=a.products)||void 0===e?void 0:e.length)<1?Object(p.jsxs)("div",{className:"cart__alt",children:[Object(p.jsx)("h3",{className:"cart__alt--title",children:"Your cart"}),Object(p.jsx)("p",{className:"cart__alt--empty",children:"No items in your cart, please continue shopping!"})]}):Object(p.jsxs)("section",{className:"cart",children:[Object(p.jsxs)("div",{className:"cart__list",children:[Object(p.jsx)("div",{className:"cart__list--title"}),null===a||void 0===a?void 0:a.products.map((function(e){return Object(p.jsxs)(o.a,{className:"cart__card",children:[Object(p.jsx)(o.a.Img,{className:"cart__card--image",variant:"top",src:e.image}),Object(p.jsxs)(o.a.Body,{className:"cart__card--body",children:[Object(p.jsx)(d.b,{to:"/product/".concat(e.productId),children:Object(p.jsx)(o.a.Title,{children:e.name})}),Object(p.jsx)(o.a.Text,{children:"".concat(e.category)})]}),Object(p.jsxs)(l.a,{className:"cart__info",children:[Object(p.jsx)(me.a,{className:"cart__info--price",children:"Price: $".concat(e.productTotal.toFixed(2))}),Object(p.jsxs)(me.a,{className:"cart__info--qty",children:[Object(p.jsx)("div",{className:"cart__info--sub",onClick:function(){n(Object(B.a)({},e),a._id)},children:"-"}),"Qty: ".concat(e.quantity),Object(p.jsx)("div",{className:"cart__info--add",onClick:function(){s(Object(B.a)({},e),a._id)},children:"+"})]}),Object(p.jsx)(i.a,{className:"cart__info--remo",onClick:function(){r(Object(B.a)({},e),a._id)},children:"Remove"})]})]},e.productId)}))]}),a||a?Object(p.jsxs)("div",{className:"cart__footer",children:[Object(p.jsxs)("div",{className:"cart__footer--total",children:[Object(p.jsxs)("h2",{children:["Your total:"," "]}),Object(p.jsx)("h2",{children:"$".concat(null===a||void 0===a?void 0:a.cartTotal.toFixed(2))})]}),Object(p.jsxs)("div",{className:"cart__footer--qty",children:[Object(p.jsx)("h2",{children:"Total items:"}),Object(p.jsx)("h2",{children:null===a||void 0===a?void 0:a.cartQuantity})]}),Object(p.jsxs)("div",{className:"cart__footer--action",children:[Object(p.jsx)("button",{onClick:function(){b?b&&x(!0):v()("Please sign in to checkout")},className:"cart__footer--checkout",children:"Checkout"}),Object(p.jsx)(d.b,{to:"/categories",children:Object(p.jsx)("button",{className:"cart__footer--checkout",children:"Continue Shopping"})})]})]}):Object(p.jsx)("div",{}),Object(p.jsx)(be.Elements,{stripe:xe,children:Object(p.jsx)(pe,{show:g,onHide:function(){return x(!1)}})})]})};var Ne=function(){return Object(p.jsx)(A,{children:Object(p.jsxs)(d.a,{children:[Object(p.jsx)(J,{}),Object(p.jsxs)(ge.d,{children:[Object(p.jsx)(ge.b,{path:"/",exact:!0,component:w}),Object(p.jsx)(ge.b,{path:"/categories",exact:!0,component:re}),Object(p.jsx)(ge.b,{path:"/categories/:id",exact:!0,component:je}),Object(p.jsx)(ge.b,{path:"/product/:id",exact:!0,component:ue}),Object(p.jsx)(ge.b,{path:"/about",exact:!0,component:W}),Object(p.jsx)(ge.b,{path:"/contact",exact:!0,component:ee}),Object(p.jsx)(ge.b,{exact:!0,path:"/cart",component:fe})]})]})})},ve=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,173)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),s(e),r(e)}))};r.a.render(Object(p.jsx)(n.a.StrictMode,{children:Object(p.jsx)(Ne,{})}),document.getElementById("root")),ve()},86:function(e,t,a){},97:function(e,t,a){},99:function(e,t,a){}},[[143,1,2]]]);
//# sourceMappingURL=main.0c046122.chunk.js.map