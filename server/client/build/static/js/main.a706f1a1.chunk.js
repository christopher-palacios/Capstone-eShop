(this.webpackJsonpscoop=this.webpackJsonpscoop||[]).push([[0],{101:function(e,t,a){},126:function(e,t,a){},127:function(e,t,a){},134:function(e,t,a){},135:function(e,t,a){},136:function(e,t,a){},137:function(e,t,a){},138:function(e,t,a){},140:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(24),s=a.n(r),o=(a(95),a(96),a(165)),i=a(87),l=a(18),d=a(7),u=(a(97),a(163)),j=a.p+"static/media/clothing.a9f7d612.jpg",m=a.p+"static/media/jewelry.22b35d8e.jpg",b=a.p+"static/media/electronics.d7fbda90.jpg",h=a(1);var p=function(){var e=Object(c.useState)(0),t=Object(d.a)(e,2),a=t[0],n=t[1];return Object(h.jsxs)(u.a,{className:"hero",activeIndex:a,onSelect:function(e,t){n(e)},children:[Object(h.jsxs)(u.a.Item,{children:[Object(h.jsx)("img",{className:"d-block w-100 hero__img",src:j,alt:"First slide"}),Object(h.jsxs)(u.a.Caption,{className:"hero__cap",children:[Object(h.jsx)("h1",{className:"hero__cap--title",children:"Clothing"}),Object(h.jsx)("h3",{className:"hero__cap--text",children:"Browse our entire range of Women's and Men's clothing"})]})]}),Object(h.jsxs)(u.a.Item,{children:[Object(h.jsx)("img",{className:"d-block w-100 hero__img",src:m,alt:"Second slide"}),Object(h.jsxs)(u.a.Caption,{className:"hero__cap",children:[Object(h.jsx)("h1",{className:"hero__cap--title",children:"Jewelry"}),Object(h.jsx)("h3",{className:"hero__cap--text",children:"A unique selection of jewelry"})]})]}),Object(h.jsxs)(u.a.Item,{children:[Object(h.jsx)("img",{className:"d-block w-100 hero__img",src:b,alt:"Third slide"}),Object(h.jsxs)(u.a.Caption,{className:"hero__cap",children:[Object(h.jsx)("h1",{className:"hero__cap--title",children:"Electronics"}),Object(h.jsx)("h3",{className:"hero__cap--text",children:"All new electronics available"})]})]})]})},O=(a(101),a(17)),x=a.n(O),g=a(37),f=a(14),_=a.n(f),v=a(12),N=a.n(v),y="https://localhost:8080/api",C=Object(c.createContext)(),S=function(e){var t=e.children,a=localStorage.getItem("token"),n=Object(c.useState)([]),r=Object(d.a)(n,2),s=r[0],o=r[1],i=Object(c.useState)([]),l=Object(d.a)(i,2),u=l[0],j=l[1],m=Object(c.useState)([]),b=Object(d.a)(m,2),p=b[0],O=b[1],f=Object(c.useState)(!1),v=Object(d.a)(f,2),S=v[0],k=v[1],w=Object(c.useState)([]),I=Object(d.a)(w,2),T=I[0],q=I[1],L=Object(c.useState)([]),E=Object(d.a)(L,2),J=E[0],P=E[1],F=Object(c.useState)(),Q=Object(d.a)(F,2),B=Q[0],M=Q[1],U=Object(c.useState)(""),H=Object(d.a)(U,2),z=H[0],D=H[1],K=Object(c.useState)([]),A=Object(d.a)(K,2),R=A[0],Y=A[1],G=Object(c.useState)(),W=Object(d.a)(G,2),X=W[0],$=W[1],V=Object(c.useState)(!1),Z=Object(d.a)(V,2),ee=Z[0],te=Z[1],ae=Object(c.useState)(!1),ce=Object(d.a)(ae,2),ne=ce[0],re=ce[1],se=Object(c.useState)(!1),oe=Object(d.a)(se,2),ie=oe[0],le=oe[1],de=Object(c.useState)(!1),ue=Object(d.a)(de,2),je=ue[0],me=ue[1],be=JSON.parse(localStorage.getItem("guestCart")),he={isOpen:!0,products:[],cartQuantity:0,cartTotal:0},pe=function(){var e=Object(g.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:N.a.get("".concat(y,"/categories")).then((function(e){q(e.data)})).catch((function(e){return _()(e.message)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Oe=function(){var e=Object(g.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:N.a.get("".concat(y,"/product/list")).then((function(e){j(e.data)})).catch((function(e){return _()(e.message)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),xe=function(){var e=Object(g.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:N.a.get("".concat(y,"/cart"),{headers:{authorization:"Bearer ".concat(a)}}).then((function(e){return Y(e.data)})).catch((function(e){return _()("getCart",e.message)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ge=function(){var e=Object(g.a)(x.a.mark((function e(t,c){var n,r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a){e.next=11;break}n=JSON.parse(localStorage.getItem("guestCart")),r=n.products.map((function(e){return e.name})).indexOf(t.name),n.products[r].quantity=n.products[r].quantity+1,n.products[r].productTotal=n.products[r].productTotal+t.price,n.cartTotal=n.products.map((function(e){return e.productTotal})).reduce((function(e,t){return e+t})),n.cartQuantity=n.products.map((function(e){return e.quantity})).reduce((function(e,t){return e+t})),Y(n),localStorage.setItem("guestCart",JSON.stringify(n)),e.next=20;break;case 11:if(!a){e.next=20;break}return e.prev=12,e.next=15,N.a.put("".concat(y,"/cart/increase/").concat(c),{product:t,cartId:c},{headers:{authorization:"Bearer ".concat(a)}}).then((function(e){return Y(e.data)}),k(!1));case 15:e.next=20;break;case 17:e.prev=17,e.t0=e.catch(12),_()("Please login or create an account to add items to your cart",e.t0.message);case 20:case"end":return e.stop()}}),e,null,[[12,17]])})));return function(t,a){return e.apply(this,arguments)}}(),fe=function(){var e=Object(g.a)(x.a.mark((function e(t,c){var n,r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a){e.next=11;break}n=JSON.parse(localStorage.getItem("guestCart")),r=n.products.map((function(e){return e.name})).indexOf(t.name),n.products[r].quantity=n.products[r].quantity-1,n.products[r].productTotal=n.products[r].productTotal-t.price,n.cartTotal=n.products.map((function(e){return e.productTotal})).reduce((function(e,t){return e+t})),n.cartQuantity=n.products.map((function(e){return e.quantity})).reduce((function(e,t){return e+t})),Y(n),localStorage.setItem("guestCart",JSON.stringify(n)),e.next=19;break;case 11:return e.prev=11,e.next=14,N.a.put("".concat(y,"/cart/decrease/").concat(c),{product:t},{headers:{authorization:"Bearer ".concat(a)}}).then((function(e){return Y(e.data)})).catch((function(e){return _()(e.message)}));case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(11),_()(e.t0.message);case 19:case"end":return e.stop()}}),e,null,[[11,16]])})));return function(t,a){return e.apply(this,arguments)}}(),_e=function(){var e=Object(g.a)(x.a.mark((function e(t,c){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a){e.next=7;break}1===(n=JSON.parse(localStorage.getItem("guestCart"))).products.length?(n.products=[],n.cartTotal=0,n.cartQuantity=0):n.products.length>1&&(n.products=n.products.filter((function(e){return e.name!==t.name})),n.cartTotal=n.products.map((function(e){return e.productTotal})).reduce((function(e,t){return e+t})),n.cartQuantity=n.products.map((function(e){return e.quantity})).reduce((function(e,t){return e+t}))),Y(n),localStorage.setItem("guestCart",JSON.stringify(n)),e.next=15;break;case 7:return e.prev=7,e.next=10,N.a.put("".concat(y,"/cart/delete/").concat(c),{product:t,cartId:c},{headers:{authorization:"Bearer ".concat(a)}}).then((function(e){return Y(e.data)})).catch((function(e){return _()(e.message)}));case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(7),_()(e.t0.message);case 15:case"end":return e.stop()}}),e,null,[[7,12]])})));return function(t,a){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){if(pe(),Oe(),a||null!==be){if(!a&&be){var e=JSON.parse(localStorage.getItem("guestCart"));Y(e)}}else Y(he),localStorage.setItem("guestCart",JSON.stringify(he));a&&(localStorage.removeItem("guestCart"),xe())}),[a]),Object(h.jsx)(C.Provider,{value:{randomItems:J,setRandomItems:P,isSignedIn:je,setIsSignedIn:me,logInModalShow:ne,setLogInModalShow:re,signUpModalShow:ie,setSignUpModalShow:le,showCheckoutModal:ee,setShowCheckoutModal:te,selectedCategory:s,setSelectedCategory:o,selectedProduct:p,setSelectedProduct:O,loading:S,setLoading:k,categoryList:T,setCategoryList:q,productList:u,currentUser:B,setCurrentUser:M,getCategoryList:pe,drop:z,setDrop:D,cart:R,setCart:Y,token:a,increaseQty:ge,decreaseQty:fe,deleteProduct:_e,purchased:X,setPurchased:$},children:t})};var k=function(){var e=Object(c.useContext)(C).categoryList;return Object(c.useEffect)((function(){}),[]),Object(h.jsxs)("section",{className:"home",children:[Object(h.jsx)("div",{className:"home__carousel",children:Object(h.jsx)(p,{})}),Object(h.jsxs)(o.a,{className:"text-center home__feat",children:[Object(h.jsx)(o.a.Header,{className:"home__feat--head",children:"Categories"}),Object(h.jsxs)(o.a.Body,{className:"home__feat--body",children:[Object(h.jsx)(o.a.Text,{className:"home__feat--text",children:"Shop our categoriess below"}),Object(h.jsx)(l.b,{to:"/categories",children:Object(h.jsx)(i.a,{className:"home__feat--button",variant:"primary",children:"Shop Now"})})]}),Object(h.jsx)(o.a.Footer,{className:"text-muted home__feat--foot",children:null===e||void 0===e?void 0:e.map((function(e){return Object(h.jsx)(l.b,{to:"/categories/".concat(e._id),children:e.name},e._id)}))})]}),Object(h.jsx)("div",{className:"home__random",children:Object(h.jsx)("div",{className:"home__random--card"})})]})},w=a(76),I=a.n(w),T=a(40),q=a(15),L=a(161);a(126);var E=function(e){var t=Object(c.useContext)(C),a=t.setCurrentUser,n=t.setIsSignedIn,r=Object(c.useState)(),s=Object(d.a)(r,2),o=s[0],i=s[1],u=function(e){i(Object(q.a)(Object(q.a)({},o),{},Object(T.a)({},e.target.name,e.target.value)))};return Object(h.jsx)(L.a,Object(q.a)(Object(q.a)({},e),{},{className:"login",size:"lg",centered:!0,children:Object(h.jsxs)("div",{className:"login__card",children:[Object(h.jsxs)("div",{className:"login__welcome",children:[Object(h.jsx)("h1",{className:"login__welcome--title",children:"Log In"}),Object(h.jsx)("button",{className:"login__welcome--close",onClick:e.loginClose,children:"X"})]}),Object(h.jsx)("form",{className:"login__form",onSubmit:function(e){e.preventDefault(),N.a.post("https://localhost:8080/api/users/login",o).then((function(e){var t=e.data.token,c=e.data.user,r=c.firstName,s=c._id,o=r;localStorage.setItem("token",t),localStorage.setItem("user",o),localStorage.setItem("userId",s),n(!0),a(o),localStorage.removeItem("guestCart")})).catch((function(e){return _()({text:"Check your email/password and try again"})}))},children:Object(h.jsxs)("div",{className:"login__form--card",children:[Object(h.jsx)("label",{className:"login__form--label",children:"Email"}),Object(h.jsx)("input",{className:"login__form--input email",onChange:u,type:"email",name:"email"}),Object(h.jsx)("label",{className:"login__form--label",children:"Password"}),Object(h.jsx)("input",{className:"login__form--input password",onChange:u,type:"password",name:"password"}),Object(h.jsx)("button",{className:"login__form--button",onClick:e.loginClose,children:"Login"})]})}),Object(h.jsxs)("h5",{className:"login__redirect",children:["Not a member?",Object(h.jsxs)(l.b,{onClick:e.loginSwitch,to:"",children:[" ","Sign Up"," "]}),"here"]})]})}))};var J=function(e){var t=this,a=Object(c.useState)(),n=Object(d.a)(a,2),r=n[0],s=n[1],o=function(e){console.log(e.target.name),console.log(e.target.value),s(Object(q.a)(Object(q.a)({},r),{},Object(T.a)({},e.target.name,e.target.value)))};return Object(h.jsx)(L.a,Object(q.a)(Object(q.a)({},e),{},{className:"login",size:"lg",centered:!0,children:Object(h.jsxs)("div",{className:"login__card",children:[Object(h.jsx)("div",{className:"login__welcome",children:Object(h.jsx)("h1",{className:"login__welcome--title",children:"Get Started"})}),Object(h.jsx)("form",{className:"login__form",onSubmit:function(e){N.a.post("https://localhost:8080/api/users",r).then((function(e){var a=e.data.token;sessionStorage.setItem("token",a),t.props.history.push("/")})).catch((function(e){return alert(e)}))},children:Object(h.jsxs)("div",{className:"login__form--card",children:[Object(h.jsx)("label",{className:"login__form--label",children:"First Name"}),Object(h.jsx)("input",{className:"login__form--input firstName",onChange:o,type:"firstName",name:"firstName"}),Object(h.jsx)("label",{className:"login__form--label",children:"Last Name"}),Object(h.jsx)("input",{className:"login__form--input lastName",onChange:o,type:"lastName",name:"lastName"}),Object(h.jsx)("label",{className:"login__form--label",children:"Email"}),Object(h.jsx)("input",{className:"login__form--input email",onChange:o,type:"email",name:"email"}),Object(h.jsx)("label",{className:"login__form--label",children:"Password"}),Object(h.jsx)("input",{className:"login__form--input password",onChange:o,type:"password",name:"password"}),Object(h.jsx)("button",{className:"login__form--button",children:"Sign Up"})]})}),Object(h.jsxs)("h5",{className:"login__redirect",children:["If already registered.",Object(h.jsxs)(l.b,{onClick:e.signupSwitch,to:"",children:[" ","Log In"," "]}),"here"]})]})}))},P=(a(127),a(164)),F=a(166),Q=a(156),B=a(157);var M=function(){var e=Object(c.useContext)(C),t=e.currentUser,a=e.setCurrentUser,n=e.cart,r=(e.setCart,e.categoryList),s=e.setIsSignedIn,o=Object(c.useState)(!1),i=Object(d.a)(o,2),l=i[0],u=i[1],j=Object(c.useState)(!1),m=Object(d.a)(j,2),b=m[0],p=m[1],O=localStorage.getItem("user");Object(c.useEffect)((function(){a(O)}),[]);var x=function(){u(!1)},g=function(){p(!1)};return Object(h.jsx)("nav",{className:"nav",children:Object(h.jsxs)(P.a,{className:"nav__color",variant:"dark",expand:"sm",children:[Object(h.jsx)(F.a.Link,{className:"nav__brand",href:"/",children:"eShop"}),Object(h.jsx)(P.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(h.jsx)(P.a.Collapse,{id:"basic-navbar-nav",children:Object(h.jsxs)(F.a,{className:"mr-auto",children:[Object(h.jsxs)(Q.a,{className:"dropp",title:n.cartQuantity?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(I.a,{}),Object(h.jsx)(B.a,{pill:!0,variant:"light",children:n.cartQuantity})]}):Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(I.a,{})}),children:[r.map((function(e){return Object(h.jsxs)(Q.a.Item,{className:"nav__link",href:"/categories/".concat(e._id),children:["Shop ",e.name]},e._id)}))," ",Object(h.jsx)(Q.a.Divider,{}),Object(h.jsx)(Q.a.Item,{className:"nav__link",href:"/cart",children:"Your Cart"})]}),Object(h.jsx)(Q.a,{title:t||"Guest",id:"dropdown-menu-align-right",children:t?Object(h.jsx)(Q.a.Item,{className:"nav__link",onClick:function(){localStorage.removeItem("token"),localStorage.removeItem("user"),localStorage.removeItem("userId"),a(null),s(!1)},children:"Sign Out"}):Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(Q.a.Item,{onClick:function(){u(!0)},children:"Log In"}),Object(h.jsx)(Q.a.Item,{className:"nav__link",onClick:function(){p(!0)},children:"Create Account"})]})})]})}),Object(h.jsx)(E,{onHide:x,show:l,loginClose:x,loginSwitch:function(){u(!1),p(!0)}}),Object(h.jsx)(J,{onHide:g,show:b,showLogin:l,signupClose:g,signupSwitch:function(){p(!1),u(!0)}})]})})},U=(a(134),a.p+"static/media/mn.2a700655.jpg"),H=a.p+"static/media/wmn.481e8888.jpg",z=a.p+"static/media/jewel.bdcc5a0a.jpg",D=a.p+"static/media/tech.483f059c.jpg",K=a(158);var A=function(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),a=t[0],n=t[1];return Object(c.useEffect)((function(){N.a.get("".concat("https://localhost:8080/api","/categories")).then((function(e){n(e.data)}))}),[]),Object(h.jsx)("section",{children:Object(h.jsxs)("div",{className:"categories",children:[Object(h.jsx)("h1",{children:"Categories"}),Object(h.jsx)("div",{className:"categories__container",children:null===a||void 0===a?void 0:a.map((function(e){return Object(h.jsx)("div",{className:"categories__card",children:Object(h.jsx)(l.b,{to:"/categories/".concat(e._id),className:"categories__card--link",children:Object(h.jsx)(K.a,{children:Object(h.jsxs)(o.a,{className:"categories__card--card",children:[Object(h.jsxs)(o.a.Body,{className:"categories__card--body",children:[Object(h.jsx)(o.a.Title,{className:"categories__card--title",children:e.name}),Object(h.jsx)(o.a.Img,{src:"Women's clothing"===e.name?H:"Men's clothing"===e.name?U:"Jewelery"===e.name?z:D,className:"categories__card--img"})]}),Object(h.jsx)(o.a.Footer,{className:"categories__card--foot",children:Object(h.jsx)("small",{className:"text-muted",children:"Click here for more ".concat(e.name," bikes")})})]})})})},e._id)}))})]})})},R=(a(135),a(159)),Y=a(32),G=a(162),W=a(88);var X=function(e){var t=Object(c.useContext)(C).categoryList,a=Object(c.useState)([]),n=Object(d.a)(a,2),r=n[0],s=n[1],l=Object(c.useState)(""),u=Object(d.a)(l,2),j=u[0],m=u[1],b=Object(c.useState)(""),p=Object(d.a)(b,2),O=p[0],x=p[1],g=e.match.params.id;return Object(c.useEffect)((function(){var e;N.a.get("".concat("https://localhost:8080/api","/categories/").concat(g)).then((function(e){s(e.data)}));var a=t.filter((function(e){return e._id===g}));x(null===(e=a[0])||void 0===e?void 0:e.name)}),[t,g]),Object(h.jsxs)("section",{className:"itemList",children:[Object(h.jsx)("div",{className:"sub-nav",children:Object(h.jsxs)(F.a,{className:"sub-nav__links",activeKey:"/home",children:[Object(h.jsxs)(R.a,{id:"dropdown-basic-button",variant:"Secondary",title:O,children:[t.map((function(e){return Object(h.jsx)(Y.a.Item,{href:"/categories/".concat(e._id),children:e.name},e._id)})),Object(h.jsx)(Y.a.Item,{href:"/categories",children:"Categories"})]}),Object(h.jsx)("div",{className:"sub-nav__form",children:Object(h.jsxs)(G.a,{inline:!0,children:[Object(h.jsx)(W.a,{type:"text",onChange:function(e){m(e.target.value)},placeholder:"Search",className:"sub-nav__form--input"}),Object(h.jsx)(i.a,{className:"sub-nav__form--button",variant:"outline",children:"Search"})]})})]})}),Object(h.jsx)("div",{className:"shop",children:Object(h.jsx)("div",{className:"shop__container",children:Object(h.jsx)(K.a,{className:"shop__card",children:null===r||void 0===r?void 0:r.filter((function(e){return e.name.toLowerCase().includes(j.toLowerCase())})).map((function(e){return Object(h.jsxs)(o.a,{className:"shop__card--indv",children:[Object(h.jsx)(o.a.Body,{children:Object(h.jsx)(o.a.Link,{className:"shop__card--top",href:"/product/".concat(e._id),children:Object(h.jsx)(o.a.Img,{className:"shop__card--img",variant:"top",src:e.image})})}),Object(h.jsxs)(o.a.Footer,{className:"shop__card--footer",children:[Object(h.jsx)(o.a.Title,{children:e.name}),Object(h.jsx)("small",{className:"text-muted",children:Object(h.jsx)(o.a.Text,{children:e.price})})]})]},e._id)}))})})})]})},$=(a(136),"https://localhost:8080/api");var V=function(e){var t=Object(c.useState)([]),a=Object(d.a)(t,2),n=a[0],r=a[1],s=Object(c.useState)(1),o=Object(d.a)(s,1)[0],l=Object(c.useContext)(C),u=l.setCart,j=l.token;return l.currentUser,Object(c.useEffect)((function(){var t=e.match.params.id;N.a.get("".concat($,"/product/").concat(t)).then((function(e){var t=e.data;r(t)}))}),[e.match.params]),Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:"product",children:[Object(h.jsx)("img",{className:"product__img",alt:"product img",src:n.image}),Object(h.jsxs)("div",{className:"product__details",children:[Object(h.jsxs)("div",{className:"product__details--top",children:[Object(h.jsxs)("div",{className:"product__details--info",children:[Object(h.jsx)("h1",{className:"product__details--title",children:n.name}),Object(h.jsx)("h3",{className:"product__details--category",children:n.category}),Object(h.jsxs)("h4",{children:["Price: ",n.price]})]}),Object(h.jsxs)("div",{className:"product__details--action",children:[Object(h.jsx)("div",{className:"product__details--qty",children:Object(h.jsx)(G.a,{})}),Object(h.jsx)(i.a,{onClick:function(){!function(e){var t=e.price.slice(0,9).split(",").join("");if(!j){var a=localStorage.getItem("guestCart"),c=JSON.parse(a),n=c.products.map((function(e){return e.name})).includes(e.name);if(n){if(n){var r=c.products.map((function(e){return e.name})).indexOf(e.name);c.products[r].productTotal=Number(c.products[r].productTotal)+Number(e.price),c.products[r].quantity=Number(c.products[r].quantity)+1,c.cartTotal=c.products.map((function(e){return e.productTotal})).reduce((function(e,t){return e+t})),c.cartQuantity=c.products.map((function(e){return e.quantity})).reduce((function(e,t){return e+t})),u(c),_()("Success!","Item has beeen updated"),localStorage.setItem("guestCart",JSON.stringify(c))}}else{var s={quantity:1,productTotal:Number(e.price),productId:e._id,name:e.name,price:Number(e.price),image:e.image,category:e.category};c.products.push(s),c.cartTotal=c.products.map((function(e){return Number(e.productTotal)})).reduce((function(e,t){return e+t})),c.cartQuantity=c.products.map((function(e){return Number(e.quantity)})).reduce((function(e,t){return e+t})),localStorage.setItem("guestCart",JSON.stringify(c)),u(c),_()("Success!","Item has beeen added to cart")}}j&&N.a.post("".concat($,"/cart"),{quantity:o,product:e,price:t},{headers:{authorization:"Bearer ".concat(j)}}).then((function(e){u(e.data),_()("Success!","Item has beeen added to cart")})).catch((function(e){return _()("Please sign in to continue shopping")}))}(n)},className:"product__details--add",variant:"outline-dark",children:"ADD TO CART"})]})]}),Object(h.jsx)("div",{className:"product__details--footer",children:Object(h.jsx)("p",{children:n.description})})]})]})})},Z=a(160),ee=a(89),te=a(31),ae=(a(137),function(e){var t=e.label,a=e.id,c=e.type,n=e.placeholder,r=e.required,s=e.autoComplete,o=e.value,i=e.onChange,l=e.name;return Object(h.jsxs)("div",{className:"form-row",children:[Object(h.jsx)("label",{htmlFor:a,className:"form-row-label",children:t}),Object(h.jsx)("input",{className:"form-row-input",id:a,type:c,name:l,placeholder:n,required:r,autoComplete:s,value:o,onChange:i})]})}),ce="https://localhost:8080/api";var ne=function(e){var t,a=Object(c.useContext)(C),n=a.cart,r=a.token,s=a.loading,o=a.setLoading,l=a.setPurchased,u=a.setCart,j=Object(te.useStripe)(),m=Object(te.useElements)(),b=Object(c.useState)({}),p=Object(d.a)(b,2),O=p[0],f=p[1],_=function(e){f(Object(q.a)(Object(q.a)({},O),{},Object(T.a)({},e.target.name,e.target.value)))},v=function(){var t=Object(g.a)(x.a.mark((function t(){var a,c,s,i,d,b;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o(!0),t.next=3,j.createPaymentMethod({type:"card",card:m.getElement(te.CardElement),billing_details:{name:O.name,email:O.email,phone:O.phone,address:{city:O.city,country:"US",line1:O.line1,postal_code:O.postal_code,state:O.state}}});case 3:return a=t.sent,c=a.paymentMethod,t.next=7,N.a.post("".concat(ce,"/order/intent"),{cart:n,paymentMethod:c},{headers:{Authorization:"Bearer ".concat(r)}});case 7:return s=t.sent,i=s.data,t.next=11,j.confirmCardPayment(i,{payment_method:{card:m.getElement(te.CardElement),billing_details:{name:O.name,email:O.email,phone:O.phone,address:{city:O.city,country:"US",line1:O.line1,postal_code:O.postal_code,state:O.state}}}});case 11:if(d=t.sent,"succeeded"!==(b=d.paymentIntent).status){t.next=20;break}return t.next=16,N.a.post("".concat(ce,"/order"),{cart:n,transactionId:b.id},{headers:{Authorization:"Bearer ".concat(r)}}).then((function(e){return console.log(e.data)})).catch((function(e){return console.log(e.message)}));case 16:o(!1),u({}),l(!0),e.onHide();case 20:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(h.jsxs)(L.a,Object(q.a)(Object(q.a)({},e),{},{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[Object(h.jsx)(L.a.Header,{closeButton:!0,children:Object(h.jsx)(L.a.Title,{id:"contained-modal-title-vcenter",children:"Checkout"})}),Object(h.jsx)(L.a.Body,{children:Object(h.jsxs)("form",{className:"form",children:[Object(h.jsx)("h5",{className:"pl-2",children:"Billing Details"}),Object(h.jsxs)("fieldset",{className:"form-group",children:[Object(h.jsx)(ae,{label:"Name",id:"name",name:"name",type:"text",placeholder:"Jane Doe",required:!0,autoComplete:"name",onChange:_}),Object(h.jsx)(ae,{label:"Email",id:"email",name:"email",type:"email",placeholder:"janedoe@gmail.com",required:!0,autoComplete:"email",onChange:_}),Object(h.jsx)(ae,{label:"Phone",id:"phone",name:"phone",type:"tel",placeholder:"(941) 555-0123",required:!0,autoComplete:"tel",onChange:_}),Object(h.jsx)(ae,{label:"Shipping Address",id:"line1",name:"line1",type:"text",placeholder:"123 Main St",required:!0,autoComplete:"line1",onChange:_}),Object(h.jsx)(ae,{label:"City",id:"city",name:"city",type:"text",placeholder:"Miami",required:!0,autoComplete:"city",onChange:_}),Object(h.jsx)(ae,{label:"State",id:"state",name:"state",type:"text",placeholder:"FL",required:!0,autoComplete:"state",onChange:_})]}),Object(h.jsx)("fieldset",{className:"form-group",children:Object(h.jsx)(te.CardElement,{options:{iconStyle:"solid",style:{base:{iconColor:"#264653",fontWeight:700,fontFamily:"Roboto, Open Sans, Segoe UI, sans-serif",fontSize:"18px",fontSmoothing:"antialiased",":-webkit-autofill":{color:"#264653"},"::placeholder":{color:"#e0522f7a"}},invalid:{iconColor:"#e76f51",color:"#e0522f7a"}}}})})]})}),Object(h.jsxs)(L.a.Footer,{className:"d-flex justify-content-between",children:[Object(h.jsxs)("p",{children:["Total: $",null===n||void 0===n||null===(t=n.cartTotal)||void 0===t?void 0:t.toFixed(2)]}),Object(h.jsx)(i.a,{onClick:v,disabled:s,children:s?"Sending...":"Confirm Payment"})]})]}))},re=a(69),se=a(11),oe=(a(138),Object(re.a)("pk_test_51IiCNaCDpCm9ESLbqwa8cZK5HOsB3HbcuwGcvUoQCQ3moNEix44pe4RaxQPYoiJJuS8VbtT0HK29rxKxKovr4joy00ylNJkXCj"));var ie=function(){var e=Object(c.useContext)(C),t=e.showCheckoutModal,a=e.setShowCheckoutModal;return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(te.Elements,{stripe:oe,children:Object(h.jsx)(ne,{show:t,onHide:function(){return a(!1)}})})})},le=Object(re.a)("pk_test_51IiCNaCDpCm9ESLbqwa8cZK5HOsB3HbcuwGcvUoQCQ3moNEix44pe4RaxQPYoiJJuS8VbtT0HK29rxKxKovr4joy00ylNJkXCj");var de=function(){var e,t,a=Object(c.useContext)(C),n=a.cart,r=a.decreaseQty,s=a.increaseQty,u=a.deleteProduct,j=a.purchased,m=(a.currentUser,a.setCart),b=a.token,p=Object(c.useState)(!1),O=Object(d.a)(p,2),x=O[0],g=O[1],f=JSON.parse(localStorage.getItem("guestCart"));return Object(c.useEffect)((function(){console.log(f),b||m(f)}),[]),j?_()("Thank you for your purchase")(Object(h.jsx)(se.a,{to:"/"})):!(null===n||void 0===n?void 0:n.products)||(null===n||void 0===n||null===(e=n.products)||void 0===e?void 0:e.length)<1?Object(h.jsxs)("div",{className:"cart__alt",children:[Object(h.jsx)("h3",{className:"cart__alt--title",children:"Your cart"}),Object(h.jsx)("p",{className:"cart__alt--empty",children:"No items in your cart, please continue shopping!"})]}):Object(h.jsxs)("section",{className:"cart",children:[Object(h.jsxs)("div",{className:"cart__list",children:[Object(h.jsx)("div",{className:"cart__list--title"}),null===n||void 0===n||null===(t=n.products)||void 0===t?void 0:t.map((function(e){return Object(h.jsxs)(o.a,{className:"cart__card",children:[Object(h.jsx)(o.a.Img,{className:"cart__card--image",variant:"top",src:e.image}),Object(h.jsxs)(o.a.Body,{className:"cart__card--body",children:[Object(h.jsx)(l.b,{to:"/product/".concat(e.productId),children:Object(h.jsx)(o.a.Title,{children:e.name})}),Object(h.jsx)(l.b,{to:"/categories",children:Object(h.jsx)(o.a.Text,{children:"".concat(e.category)})})]}),Object(h.jsxs)(Z.a,{className:"cart__info",children:[Object(h.jsx)(ee.a,{className:"cart__info--price",children:"Price: $".concat(e.productTotal.toFixed(2))}),Object(h.jsxs)(ee.a,{className:"cart__info--qty",children:[Object(h.jsx)("div",{className:"cart__info--sub",onClick:function(){r(Object(q.a)({},e),n._id)},children:"-"}),"Qty: ".concat(e.quantity),Object(h.jsx)("div",{className:"cart__info--add",onClick:function(){s(Object(q.a)({},e),n._id)},children:"+"})]}),Object(h.jsx)(i.a,{className:"cart__info--remo",onClick:function(){u(Object(q.a)({},e),n._id)},children:"Remove"})]})]},e.productId)}))]}),n||n?Object(h.jsxs)("div",{className:"cart__footer",children:[Object(h.jsxs)("div",{className:"cart__footer--total",children:[Object(h.jsxs)("h2",{children:["Your total:"," "]}),Object(h.jsx)("h2",{children:"$".concat(null===n||void 0===n?void 0:n.cartTotal.toFixed(2))})]}),Object(h.jsxs)("div",{className:"cart__footer--qty",children:[Object(h.jsx)("h2",{children:"Total items:"}),Object(h.jsx)("h2",{children:null===n||void 0===n?void 0:n.cartQuantity})]}),Object(h.jsx)("button",{onClick:function(){b?g(!0):_()("Please sign in to checkout")},className:"cart__footer--checkout",children:"Checkout"})]}):Object(h.jsx)("div",{}),Object(h.jsx)(ie,{}),Object(h.jsx)(te.Elements,{stripe:le,children:Object(h.jsx)(ne,{show:x,onHide:function(){return g(!1)}})})]})};var ue=function(){return Object(h.jsx)(S,{children:Object(h.jsxs)(l.a,{children:[Object(h.jsx)(M,{}),Object(h.jsxs)(se.d,{children:[Object(h.jsx)(se.b,{path:"/",exact:!0,component:k}),Object(h.jsx)(se.b,{path:"/categories",exact:!0,component:A}),Object(h.jsx)(se.b,{path:"/categories/:id",exact:!0,component:X}),Object(h.jsx)(se.b,{path:"/product/:id",exact:!0,component:V}),Object(h.jsx)(se.b,{exact:!0,path:"/cart",component:de})]})]})})},je=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,167)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),r(e),s(e)}))};s.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(ue,{})}),document.getElementById("root")),je()},95:function(e,t,a){},97:function(e,t,a){}},[[140,1,2]]]);
//# sourceMappingURL=main.a706f1a1.chunk.js.map