(this["webpackJsonpwestvilleassociates.com"]=this["webpackJsonpwestvilleassociates.com"]||[]).push([[0],{111:function(e,t){},112:function(e,t){},125:function(e,t,c){},126:function(e,t,c){},135:function(e,t,c){},136:function(e,t,c){},137:function(e,t,c){},138:function(e,t,c){},139:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c(27),a=c.n(n),i=c(6),r=(c(54),c(7)),l=c(3),j=c(28),o=c.n(j);o.a.configure({endpointUrl:"https://api.airtable.com",apiKey:"".concat("keyzVrv65fGIAfqc9")});var A=o.a.base("appkMw7tGgm3PYv4H"),d=(c(125),c.p+"static/media/logo.a9a596de.svg"),u=(c(126),c(0)),h=function(e){var t=e.action,c=e.setAction,n=Object(s.useState)([{name:"Home",slug:"/"},{name:"Party Wall Matters",slug:"/service/party-wall-matters"},{name:"Building Surveys",slug:"/service/building-surveys"},{name:"Defects Analysis",slug:"/service/defects-analysis"},{name:"Procurement and Tendering",slug:"/service/procurement-and-tendering"},{name:"Contract Administration",slug:"/service/contract-administration"},{name:"Planned Maintenance Programmes",slug:"/service/planned-maintenance-programmes"}]),a=Object(i.a)(n,1)[0];return Object(u.jsx)("div",{className:"nav-wrapper animate__animated ".concat(t?"open animate__slideInLeft":"close animate__slideOutLeft","  "),children:Object(u.jsxs)("nav",{children:[a.map((function(e,t){return Object(u.jsx)(r.c,{to:e.slug,exact:!0,onClick:function(){c(!1)},children:e.name},t)})),Object(u.jsx)("a",{href:"#Contact",onClick:function(){c(!1)},children:"Contact"})]})})},O=function(e){var t=e.Email,c=e.Phone;return t?Object(u.jsxs)("nav",{children:[Object(u.jsxs)("a",{href:"tel:+44".concat(c),children:[Object(u.jsx)("i",{className:"fas fa-phone-alt"}),Object(u.jsx)("span",{children:c})]}),Object(u.jsxs)("a",{href:"mailto:".concat(t),children:[Object(u.jsx)("i",{className:"fas fa-at"}),Object(u.jsx)("span",{children:t})]})]}):null},m=function(e){var t=e.Email,c=e.Phone,n=Object(s.useState)(!1),a=Object(i.a)(n,2),l=a[0],j=a[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("header",{children:Object(u.jsxs)("div",{className:"header-container",children:[Object(u.jsx)("div",{className:"logo",children:Object(u.jsx)(r.c,{to:"/",children:Object(u.jsx)("img",{src:d,alt:"Logo of Westville Associates"})})}),Object(u.jsx)(O,{Email:t,Phone:c}),Object(u.jsx)("div",{className:"navigation",children:Object(u.jsx)(r.b,{to:"#",onClick:function(){j(!l)},children:Object(u.jsx)("i",{className:"fas fa-bars"})})})]})}),Object(u.jsx)(h,{action:l,setAction:j})]})},b=c(47),g=c.p+"static/media/slide-1.1a1db02d.jpg",x=c.p+"static/media/slide-2.e45ad2e7.jpg",f=c.p+"static/media/slide-3.2ca5f26c.jpg",p=c.p+"static/media/slide-4.fcc72e8f.jpg",E=(c(135),function(e){var t=e.TagLine;return t?Object(u.jsx)("div",{className:"slide-container",children:Object(u.jsx)(b.Fade,{children:[g,x,f,p].map((function(e,c){return Object(u.jsx)("div",{className:"each-fade",children:Object(u.jsxs)("div",{className:"image-container",children:[Object(u.jsx)("div",{className:"image-container-inner",children:Object(u.jsx)("h1",{children:t})}),Object(u.jsx)("img",{src:e,alt:"Westville Associates Service"})]})},c)}))})}):null}),Q=c(17),I=(c(136),function(e){var t=e.Heading1,c=e.Heading2,s=e.Description;return t?Object(u.jsxs)("section",{className:"home_component",children:[Object(u.jsxs)(Q.a,{children:[Object(u.jsxs)("title",{children:[t," | ",c]}),Object(u.jsx)("link",{rel:"canonical",href:"https://westvilleassociates.com/"}),Object(u.jsx)("meta",{name:"description",content:s})]}),Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("h1",{children:t}),Object(u.jsx)("h2",{children:c}),Object(u.jsx)("p",{children:s})]})]}):null}),v=(c(137),c.p+"static/media/party-wall-matters.9c476e25.jpg"),M=c.p+"static/media/building-surveys.a953165b.jpg",K=c.p+"static/media/defects-analysis.119a780f.jpg",C=c.p+"static/media/procurement-and-tendering.63ea1f57.jpg",B=c.p+"static/media/contract-administration.abb563d1.jpg",G=c.p+"static/media/planned-maintenance-programmes.1abc2c80.jpg",y=function(e){var t=e.Services,c=Object(l.f)().slug,n=Object(s.useState)({"party-wall-matters":v,"building-surveys":M,"defects-analysis":K,"procurement-and-tendering":C,"contract-administration":B,"planned-maintenance-programmes":G}),a=Object(i.a)(n,1)[0];return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("section",{className:"service_component",children:Object(u.jsx)("div",{className:"container",children:t?c?t.filter((function(e){return e.slug===c})).map((function(e,t){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)(Q.a,{children:[Object(u.jsxs)("title",{children:[e.name," | Westville Associates"]}),Object(u.jsx)("link",{rel:"canonical",href:"https://westvilleassociates.com/service/".concat(e.slug)}),Object(u.jsx)("meta",{name:"description",content:e.meta})]},"helmet-".concat(t)),Object(u.jsxs)("div",{className:"item",children:[Object(u.jsx)("div",{className:"background",style:{backgroundImage:"url(".concat(a[e.slug],")")}}),Object(u.jsxs)("article",{children:[Object(u.jsx)("h1",{children:e.name}),Object(u.jsx)("div",{className:"separator"}),Object(u.jsx)("p",{children:e.description}),"party-wall-matters"===e.slug?Object(u.jsxs)("div",{className:"member",children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("p",{children:"We are members of the Faculty of Party Wall Surveyors."})]}),Object(u.jsx)("div",{children:Object(u.jsx)("img",{src:"data:image/gif;base64,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",alt:"fpws"})})]}):null]})]},t)]})})):t.map((function(e,t){return Object(u.jsxs)("div",{className:"item",children:[Object(u.jsx)("div",{className:"background",style:{backgroundImage:"url(".concat(e.image,")")}}),Object(u.jsxs)("article",{children:[Object(u.jsx)("h1",{children:e.name}),Object(u.jsx)("div",{className:"separator"}),Object(u.jsx)("p",{children:e.description})]})]},t)})):null})})})},P=c(18),R=c(31),L=(c(138),function(){var e={full_name:"",email:"",phone:"",message:""},t=Object(s.useState)(e),c=Object(i.a)(t,2),n=c[0],a=c[1],r=function(e){a(Object(R.a)(Object(R.a)({},n),{},Object(P.a)({},e.target.name,e.target.value)))};return Object(u.jsxs)("form",{name:"contactFrm",id:"contactFrm",autoComplete:"off",method:"POST",onSubmit:function(t){t.preventDefault(),A("contact").create([{fields:n}],(function(t,c){t&&alert("Sorry an error occurred. Please try again later."),c&&(alert("Your message has been sent. Thank you!"),a(e))}))},children:[Object(u.jsx)("fieldset",{children:Object(u.jsx)("input",{type:"text",id:"full_name",name:"full_name",placeholder:"* Your full name",required:!0,value:n.full_name,onChange:r})}),Object(u.jsx)("fieldset",{children:Object(u.jsx)("input",{type:"email",id:"email",name:"email",placeholder:"* Your Email address",required:!0,value:n.email,onChange:r})}),Object(u.jsx)("fieldset",{children:Object(u.jsx)("input",{type:"tel",id:"phone",name:"phone",placeholder:"* Your phone number",required:!0,value:n.phone,onChange:r})}),Object(u.jsx)("fieldset",{children:Object(u.jsx)("textarea",{id:"message",name:"message",placeholder:"* Please write your requirements here.",spellCheck:"false",required:!0,onChange:r,value:n.message})}),Object(u.jsx)("fieldset",{children:Object(u.jsx)("label",{id:"validation"})}),Object(u.jsx)("fieldset",{children:Object(u.jsx)("button",{type:"submit",children:"Get in touch"})})]})}),N=function(e){var t=e.Contact,c=e.Email,s=e.Phone;return Object(u.jsx)("section",{children:Object(u.jsx)("section",{className:"contact_component",children:Object(u.jsxs)("div",{className:"container",id:"Contact",children:[Object(u.jsxs)("div",{className:"content",children:[Object(u.jsx)("h1",{children:"Contact us"}),Object(u.jsx)("p",{children:t})]}),Object(u.jsx)(O,{Email:c,Phone:s}),Object(u.jsx)(L,{})]})})})};var k=function(){var e=Object(s.useState)(!0),t=Object(i.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(),j=Object(i.a)(a,2),o=j[0],d=j[1],h=Object(s.useState)(),O=Object(i.a)(h,2),b=O[0],g=O[1];return Object(s.useEffect)((function(){A("home").select().firstPage((function(e,t){e&&console.error(e);var c=[];t.forEach((function(e){c.push(e.fields)})),d(c),A("services").select().firstPage((function(e,t){e&&console.error(e);var c=[];t.forEach((function(e){c.push(e.fields)})),g(c),n(!1)}))}))}),[]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"sb_Loader ".concat(c?"enabled":"disabled"," "),children:Object(u.jsx)("div",{className:"loading",children:Object(u.jsx)("i",{className:"fas fa-circle-notch fa-spin"})})}),Object(u.jsxs)(r.a,{children:[Object(u.jsx)(m,{Phone:o?o.filter((function(e){return"phone"===e.name}))[0].description:null,Email:o?o.filter((function(e){return"email"===e.name}))[0].description:null}),Object(u.jsxs)(l.c,{children:[Object(u.jsxs)(l.a,{path:"/",exact:!0,children:[Object(u.jsx)(E,{TagLine:o?o.filter((function(e){return"slide"===e.name}))[0].description:null}),Object(u.jsx)(I,{Heading1:o?o.filter((function(e){return"heading1"===e.name}))[0].description:null,Heading2:o?o.filter((function(e){return"heading2"===e.name}))[0].description:null,Description:o?o.filter((function(e){return"description"===e.name}))[0].description:null})]}),Object(u.jsx)(l.a,{path:"/service/:slug",children:Object(u.jsx)(y,{Services:b})}),Object(u.jsx)(l.a,{path:"/service",children:Object(u.jsx)(y,{Services:b})})]}),Object(u.jsx)(N,{Contact:o?o.filter((function(e){return"contact"===e.name}))[0].description:null,Phone:o?o.filter((function(e){return"phone"===e.name}))[0].description:null,Email:o?o.filter((function(e){return"email"===e.name}))[0].description:null})]})]})},q=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,140)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),s(e),n(e),a(e),i(e)}))},w=document.getElementById("root");w.hasChildNodes()?a.a.hydrate(Object(u.jsx)(k,{}),w):a.a.render(Object(u.jsx)(k,{}),w),q()},54:function(e,t,c){}},[[139,1,2]]]);
//# sourceMappingURL=main.547cff53.chunk.js.map