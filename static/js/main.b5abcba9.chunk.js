(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,function(e,t,a){"use strict";function n(){var e=document.getElementById("mobile-menu"),t=document.querySelector(".nav-links");e.classList.toggle("active"),t.classList.toggle("mobile-effect")}function o(e,t){e&&new IntersectionObserver(function(t){!0===t[0].isIntersecting?e.style.opacity="1":e.style.opacity="0"}).observe(t.current)}function r(e,t,a){var n;e&&new IntersectionObserver(function(e){n=e[0],t&&t.forEach(function(e){!0===n.isIntersecting?e.style.scale="1":e.style.scale="0.2"})}).observe(a.current)}a.d(t,"a",function(){return n}),a.d(t,"b",function(){return o}),a.d(t,"c",function(){return r})},,function(e,t,a){e.exports=a.p+"static/media/github.07883e93.svg"},,function(e,t,a){"use strict";var n=a(1),o=a.n(n),r=a(7),i=a.n(r),s=a(10),c=a.n(s),l=a(11),m=a.n(l);t.a=function(){var e=[{name:"github",url:"https://github.com/cesarsiguencia",icon:i.a},{name:"email",url:"mailto:cd.siguencia@gmail.com",icon:m.a},{name:"linkedIn",url:"https://www.linkedin.com/in/cesar-siguencia/",icon:c.a}];return o.a.createElement("div",{className:"header-icons-block"},e.map(function(e){return o.a.createElement("a",{key:e.name,href:e.url,target:"_blank",rel:"noopener noreferrer"},o.a.createElement("img",{className:"header-icons",alt:"".concat(e.name," logo"),src:e.icon}))}))}},function(e,t,a){e.exports=a.p+"static/media/linkedin.df721c21.avif"},function(e,t,a){e.exports=a.p+"static/media/clear-mail.302beefb.avif"},,function(e,t,a){e.exports=a.p+"static/media/loading.c0adbf27.gif"},function(e,t,a){e.exports=a.p+"static/media/Cesar_Siguencia_Resume.b7fbdc55.pdf"},function(e,t,a){e.exports=a.p+"static/media/document.41e5fe22.avif"},function(e,t,a){e.exports=a.p+"static/media/title.dc8a8652.gif"},function(e,t,a){e.exports=a(30)},,,,,,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),r=a(12),i=a.n(r),s=(a(26),a(3)),c=(a(28),a(13)),l=a.n(c);var m=function(){return o.a.createElement("div",{className:"loader-wrapper"},o.a.createElement("div",{style:{display:"flex",margin:"0 auto"},className:"align-ver"},o.a.createElement("img",{style:{display:"block",height:"300px",borderRadius:"200px"},src:l.a})))},d=a(6),u=a(5),p=a(14),h=a.n(p),f=a(15),g=a.n(f),v=function(){return o.a.createElement("nav",{className:"Navigator"},o.a.createElement("div",{className:"mobile-toggle",id:"mobile-menu",onClick:u.a},o.a.createElement("div",{className:"mobile-options"}),o.a.createElement("div",{className:"mobile-options"}),o.a.createElement("div",{className:"mobile-options"})),o.a.createElement("div",{className:"nav-links"},[{name:"About Me",url:"#about"},{name:"Portfolio",url:"#projects"},{name:"Contact",url:"#contact"}].map(function(e){return o.a.createElement("div",{className:"navBtns align-ver",id:"navtab",key:e.name},o.a.createElement(d.b,{onClick:u.a,to:"/my-react-portfolio".concat(e.url)},o.a.createElement("p",{className:"links"},e.name)))}),o.a.createElement("a",{className:"navBtns align-ver",href:h.a,target:"'' download"},o.a.createElement("p",{className:"links"},"Resume PDF"),o.a.createElement("div",{className:"align-ver"},o.a.createElement("img",{alt:"document icon",src:g.a,style:{display:"block",height:"35px",margin:"0 10px"}})))))},y=a(16),b=a.n(y),E=a(4),w=function(){return o.a.createElement("header",{className:"App-header",id:"header"},o.a.createElement("div",{className:"Header-contents"},o.a.createElement(E.b,{to:"/my-react-portfolio",className:"align-ver center"},o.a.createElement("img",{alt:"Gif of Cesar's name typed out as logo of site",style:{height:"100px",borderRadius:"10px"},src:b.a})),o.a.createElement(v,null)))},k=a(9),S=function(){return o.a.createElement("footer",{className:"App-footer"},o.a.createElement("div",{className:"footer-font align-ver center"},o.a.createElement("p",{className:"body-texts"},"Developed By C\xe9sar Siguencia using React")),o.a.createElement(k.a,null),o.a.createElement("div",{className:"footer-font align-ver center"},o.a.createElement("p",{className:"body-texts"},"\xa9Copyright 2023, All Rights Reserved")))},N=a(0),x=o.a.lazy(function(){return a.e(1).then(a.bind(null,79))}),C=o.a.lazy(function(){return a.e(2).then(a.bind(null,78))}),I=o.a.lazy(function(){return a.e(3).then(a.bind(null,75))}),A=o.a.lazy(function(){return a.e(4).then(a.bind(null,76))});var P=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],r=t[1];Object(n.useEffect)(function(){r(!0),setTimeout(function(){r(!1)},1e3),setTimeout(function(){var e=document.querySelector(".App");e&&(e.style.opacity=1)},1200)},[]);var i=[{name:"iCanFixIt",short_des:"A MERN app for my side business repairing broken Apple devices, including screen and battery services on iPhones",description:"This is a full stack MERN website for my side business fixing broken electronic devices. From a young age, I've been fascinated with tearing down my portable devices and have decided to fix or upgrade a few I had in storage by myself. Eventually, others noticed and wanted my services on their devices. I specialize on a variety of Apple products with screen and battery' replacements, but not limited to those services.",technologies:["MERN model","MongoDB","Express","React","Node","Mongoose","React Bootstrap","React Router Dom","Dotenv","Concurrently","Cloudinary API Images","CSS","Javascript"],url:"https://icanfixit-by-cs-a17c7a1ff29b.herokuapp.com/",developer:"Sole Developer",heroku_cred:{username:"cez@gmail.com",password:"10001"},demo:"https://drive.google.com/file/d/1_0FVgUyds6AZcGe751tFelJHap19wQQb/preview"},{name:"10000-Days",short_des:"An MVC app for invited guests to RSVP and interact with each other for a one of a kind upcoming social gathering",description:"A full stack website all about my special event I'm hosting for when I turn 10,000 days old. Learn more about the venue of choice and RSVP to save your spot! Interact with invited guests who have confirmed their registation by sharing posts and loving posts to hype up the excitement for this once in a lifetime night! Login in with the sample credentials provided!",technologies:["MVC model","Express","Sequelize","PostgreSQL","Handlebars","Node","Bcrypt","Dotenv","link-preview-js","HTML","CSS","Javascript"],url:"https://cs-10000-days-33ee2045b3a6.herokuapp.com/",developer:"Sole Developer",heroku_cred:{username:"testbot@gmail.com",password:"password"},demo:"https://drive.google.com/file/d/1S-mit3Pax7fOO4-itVq0T8AfWKIcHFy-/preview"},{name:"Technify-In-Python",short_des:"An easy to use social media app for developers to communicate and share worthy tech related links",description:"A simple and intuitive social media website for tech enthusiasts to share valuable links with each other. Users can sign up to create, like, and comment on posts. Users have the freedom to delete and edit any of their posts while being logged in. Login in with the sample credentials provided!",technologies:["Python","Flask","PyMySQL","SQLAlchemy","Bcrypt","Dotenv","Gunicorn","HTML","CSS","Javascript"],url:"https://technify-by-cs.up.railway.app/",developer:"Sole Developer",heroku_cred:{username:"testbot@gmail.com",password:"password"},demo:"https://drive.google.com/file/d/1dgE4WgaUUo373DLhJAB0Ok5GjlZZDOFY/preview"},{name:"Taskmaster-Pro",short_des:"Stay organized and on time with your tasks using this JQuery powered web app with draggable UI",description:'Take notes the easy way using Taskmaster Pro. Created tasks can be edited, deleted, and assigned due dates which is color coded to show if a due date is approaching or past due. Tasks can also be dragged around the application interface to various statuses, including "Completed", "In Progress" or the trash bin.',technologies:["Javascript","JQuery","Moment.js","Bootstrap","HTML","CSS"],url:"https://cesarsiguencia.github.io/taskmaster-pro/",developer:"Sole Developer"},{name:"Dine-N-Wine",short_des:"Find quick international recipes using this app built with my first group project",description:'An application representing multiple hot plate recipes from all over the world! Users are able to save receipes under "Favorites", filter receipes by category, or allow the application to pick one by random. In addition, users can look up for macronutrient information, ingredients, and dosages.',technologies:["HTML","CSS","PureCSS","Javascript","APIs"],url:"https://cesarsiguencia.github.io/dine-n-wine/",developer:"GROUP PROJECT | Front End Developer"},{name:"Weather-Dashboard",short_des:"Search and save cities through their weekly weather forecast",description:"Need to check full weather conditions of any city quickly? Use this application that will give you just that along with the temperature, wind speed, UV levels, and humidity. The user can also view the conditions up to five days from today. A convienient city search history is displayed for the user to compare conditions across multiple conditions.",technologies:["Javascript","HTML","CSS","Moment.js","Bootstrap","APIs"],url:"https://cesarsiguencia.github.io/weather-dashboard/",developer:"Sole Developer"}],c={to_top:{url:"#header",font:"Return To The top",extend:!0},to_projects:{url:"#projects",font:"View Projects In Action!",extend:!0},to_more_projects:{url:"#projects",font:"View More Projects!",extend:!0},home:{url:"#header",font:"Return home",extend:!0},about:{url:"aboutme",font:"Still Curious? Read My Full Bio!",extend:!1}};return o.a.createElement(E.a,null,a?o.a.createElement(m,null):o.a.createElement("div",{className:"App"},o.a.createElement(w,null),o.a.createElement("div",null,o.a.createElement(N.c,null,o.a.createElement(N.a,{path:"/my-react-portfolio",element:o.a.createElement(o.a.Suspense,{fallback:o.a.createElement(m,null)},o.a.createElement(x,{apps:i,bodyBtnsData:c}))}),o.a.createElement(N.a,{path:"/my-react-portfolio/aboutme",element:o.a.createElement(o.a.Suspense,{fallback:o.a.createElement(m,null)},o.a.createElement(C,{bodyBtnsData:c}))}),i.map(function(e,t){return o.a.createElement(N.a,{key:t,path:"/my-react-portfolio/".concat(e.name),element:o.a.createElement(o.a.Suspense,{fallback:o.a.createElement(m,null)},o.a.createElement(I,{singleApp:e,bodyBtnsData:c.to_more_projects}))})}),o.a.createElement(N.a,{path:"/*",element:o.a.createElement(o.a.Suspense,{fallback:o.a.createElement(m,null)},o.a.createElement(A,{goHome:c.home}))}),o.a.createElement(N.a,{path:"/my-react-portfolio/*",element:o.a.createElement(o.a.Suspense,{fallback:o.a.createElement(m,null)},o.a.createElement(A,{goHome:c.home}))}))),o.a.createElement(S,null)))},D=function(e){e&&e instanceof Function&&a.e(5).then(a.bind(null,77)).then(function(t){var a=t.getCLS,n=t.getFID,o=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),n(e),o(e),r(e),i(e)})};i.a.createRoot(document.getElementById("root")).render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(P,null))),D()}],[[17,7,6]]]);
//# sourceMappingURL=main.b5abcba9.chunk.js.map