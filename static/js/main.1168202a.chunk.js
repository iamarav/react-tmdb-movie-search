(this["webpackJsonpreact-tmdb-movie-search"]=this["webpackJsonpreact-tmdb-movie-search"]||[]).push([[0],{16:function(e){e.exports=JSON.parse('{"_settings":{"hash_routing":true,"production_url":"https://iamarav.github.io/react-tmdb-movie-search"},"home":{"path":"/","page_title":"Home Page"},"about":{"path":"/about","page_title":"About"},"movie_page":{"path":"/movie/:id","path_without_params":"/movie/","params":{"id":"id"}}}')},45:function(e,t,n){"use strict";var a="8890bd4b3d19d1a7564391dba80fac79",r={get_movie:function(e){return"https://api.themoviedb.org/3/movie/"+(e=atob(e))+"?&api_key="+a},search_movie:function(e){return"https://api.themoviedb.org/3/search/movie?query="+e+"&api_key="+a},get_image_500:function(e){return"https://image.tmdb.org/t/p/w500/"+e},get_image_original:function(e){return"https://image.tmdb.org/t/p/original/"+e}};t.a=r},46:function(e,t,n){"use strict";var a=n(17),r=n(18),c=n(20),o=n(19),i=n(6),s=n(0),u=n(55),h=n.n(u),j=n(45),l=n(61),b=(n(89),n(16)),d={processMovieURL:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],a="";return n&&(a+=b._settings.production_url),b._settings.hash_routing&&(a+="/#"),a+=!0===t?b.movie_page.path_without_params:"",a+=btoa(e)}},m=function(e){Object(c.a)(n,e);var t=Object(o.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).doSearch=function(e){""!==(e=e.trim())&&void 0!==e?fetch(j.a.search_movie(e)).then((function(e){return e.json()})).then((function(e){var t=e.results.filter((function(e,t){return t<=5&&t>0&&e}));r.setState({searchResults:t})})):r.setState({searchResults:[]})},r.searchQueryHandler=function(e){r.setState({searchQuery:e.trim()})},r.state={searchQuery:"",searchResults:[]},r}return Object(r.a)(n,[{key:"render",value:function(){var e=this;return Object(i.jsx)("div",{className:h.a.MovieSearchForm,children:Object(i.jsx)(l.a,{id:"tt_movie_search_input",onChange:function(t){console.log(t),void 0!==t[0]?e.setState({selectedMovie:t[0].id}):console.log("undefined"),console.log(d.processMovieURL(t[0].id,!0,!0)),window.location.assign(d.processMovieURL(t[0].id,!0,!0))},options:this.state.searchResults,minLength:2,labelKey:"title",onInputChange:function(t){e.searchQueryHandler(t.trim()),e.doSearch(t.trim())},placeholder:"Enter a movie name..."})})}}]),n}(s.Component);t.a=m},54:function(e,t,n){e.exports={HomePage:"HomePage_HomePage__1Xy_C"}},55:function(e,t,n){e.exports={MovieSearchForm:"MovieSearchForm_MovieSearchForm__UuCzT"}},59:function(e,t,n){e.exports={ErrorPageNotFound:"ErrorPageNotFound_ErrorPageNotFound__2u8iV"}},68:function(e,t,n){},69:function(e,t,n){},94:function(e,t,n){"use strict";n.r(t);var a=n(6),r=n(0),c=n.n(r),o=n(24),i=n.n(o),s=(n(68),n(25)),u=n(17),h=n(18),j=n(20),l=n(19),b=n(31),d=n(10),m=(n(69),n(16)),p=n(54),O=n.n(p),v=n(97),f=n(98),g=n(46),x=function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:O.a.HomePage,children:Object(a.jsxs)(v.a,{children:[Object(a.jsx)("div",{className:"text-center page-heading",children:Object(a.jsx)("h1",{children:"React TMDB Movie Search"})}),""!=="Search movies info for free, powered by TMDB API.".trim()?Object(a.jsx)("div",{className:"text-center page-description",children:Object(a.jsx)("p",{children:"Search movies info for free, powered by TMDB API."})}):null,Object(a.jsx)("hr",{}),Object(a.jsx)("div",{className:"mt-3",children:Object(a.jsx)(f.a,{children:Object(a.jsx)(g.a,{customPlaceholder:"Enter the movie name..."})})})]})})}}]),n}(r.Component),_=n(59),y=n.n(_),S=function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={},a}return Object(h.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:y.a.ErrorPageNotFound,children:void 0===this.props.customMessage?"Page Not found":this.props.customMessage})}}]),n}(r.Component),M=Object(r.lazy)((function(){return n.e(3).then(n.bind(null,106))})),N=function(e){return Object(a.jsx)(r.Suspense,{fallback:Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("div",{className:"mt-5 text-center",children:"Loading..."})}),children:Object(a.jsx)(M,Object(s.a)({},e))})},P=Object(r.lazy)((function(){return n.e(4).then(n.bind(null,104))})),k=function(e){return Object(a.jsx)(r.Suspense,{fallback:null,children:Object(a.jsx)(P,Object(s.a)({},e))})},F=n(99),C=n(100),R=function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={},a}return Object(h.a)(n,[{key:"render",value:function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)(F.a,{bg:"dark",variant:"dark",children:[Object(a.jsx)(F.a.Brand,{children:"React TMDB Movie Search"}),Object(a.jsxs)(C.a,{className:"mr-auto",children:[Object(a.jsx)(C.a.Item,{children:Object(a.jsx)(b.b,{to:m.home.path,className:"nav-link",children:"Home"})}),Object(a.jsx)(C.a.Item,{children:Object(a.jsx)(b.b,{className:"nav-link",to:m.about.path,children:"About"})})]})]})})}}]),n}(r.PureComponent),w=function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsxs)(b.a,{children:[Object(a.jsx)(R,{}),Object(a.jsxs)(d.c,{children:[Object(a.jsx)(d.a,{exact:!0,path:m.home.path,component:function(e){return Object(a.jsx)(x,Object(s.a)({},e))}}),Object(a.jsx)(d.a,{exact:!0,path:m.movie_page.path,component:function(e){return Object(a.jsx)(N,Object(s.a)({},e))}}),Object(a.jsx)(d.a,{exact:!0,path:m.about.path,component:function(e){return Object(a.jsx)(k,Object(s.a)({},e))}}),Object(a.jsx)(d.a,{component:function(){return Object(a.jsx)(S,{})}})]})]})})}}]),n}(r.Component),B=function(e){e&&e instanceof Function&&n.e(5).then(n.bind(null,105)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),a(e),r(e),c(e),o(e)}))};i.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(w,{})}),document.getElementById("root")),document.title="React TMDB Movie Search",B()}},[[94,1,2]]]);
//# sourceMappingURL=main.1168202a.chunk.js.map