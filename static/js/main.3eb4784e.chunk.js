(this["webpackJsonpreact-tmdb-movie-search"]=this["webpackJsonpreact-tmdb-movie-search"]||[]).push([[0],{21:function(e){e.exports=JSON.parse('{"home":{"path":"/","page_title":"Home Page"},"about":{"path":"/about","page_title":"About"},"movie_page":{"path":"/movie/:id","path_without_params":"/#/movie/","params":{"id":"id"}}}')},45:function(e,t,n){"use strict";var a="8890bd4b3d19d1a7564391dba80fac79",c={get_movie:function(e){return"https://api.themoviedb.org/3/movie/"+(e=atob(e))+"?&api_key="+a},search_movie:function(e){return"https://api.themoviedb.org/3/search/movie?query="+e+"&api_key="+a},get_image_500:function(e){return"https://image.tmdb.org/t/p/w500/"+e},get_image_original:function(e){return"https://image.tmdb.org/t/p/original/"+e}};t.a=c},46:function(e,t,n){"use strict";var a=n(16),c=n(17),r=n(19),i=n(18),o=n(5),s=n(0),u=n(55),h=n.n(u),j=n(45),b=n(61),l=(n(89),n(21)),d={processMovieURL:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=!0===t?l.movie_page.path_without_params:"";return n+=btoa(e)}},m=n(10),p=function(e){Object(r.a)(n,e);var t=Object(i.a)(n);function n(e){var c;return Object(a.a)(this,n),(c=t.call(this,e)).doSearch=function(e){""!==(e=e.trim())&&void 0!==e?fetch(j.a.search_movie(e)).then((function(e){return e.json()})).then((function(e){var t=e.results.filter((function(e,t){return t<=5&&t>0&&e}));c.setState({searchResults:t})})):c.setState({searchResults:[]})},c.searchQueryHandler=function(e){c.setState({searchQuery:e.trim()})},c.state={searchQuery:"",searchResults:[]},c}return Object(c.a)(n,[{key:"render",value:function(){var e=this;return Object(o.jsxs)("div",{className:h.a.MovieSearchForm,children:[void 0!==this.state.selectedMovie&&""!==this.state.selectedMovie?Object(o.jsx)(m.a,{to:d.processMovieURL(this.state.selectedMovie,!0)}):null,Object(o.jsx)(b.a,{id:"tt_movie_search_input",onChange:function(t){e.setState({selectedMovie:t[0].id}),window.location.href=d.processMovieURL(t[0].id,!0)},options:this.state.searchResults,minLength:2,labelKey:"title",onInputChange:function(t){e.searchQueryHandler(t.trim()),e.doSearch(t.trim())},placeholder:"Enter a movie name..."})]})}}]),n}(s.Component);t.a=p},54:function(e,t,n){e.exports={HomePage:"HomePage_HomePage__1Xy_C"}},55:function(e,t,n){e.exports={MovieSearchForm:"MovieSearchForm_MovieSearchForm__UuCzT"}},60:function(e,t,n){e.exports={ErrorPageNotFound:"ErrorPageNotFound_ErrorPageNotFound__2u8iV"}},68:function(e,t,n){},69:function(e,t,n){},94:function(e,t,n){"use strict";n.r(t);var a=n(5),c=n(0),r=n.n(c),i=n(24),o=n.n(i),s=(n(68),n(25)),u=n(16),h=n(17),j=n(19),b=n(18),l=n(31),d=n(10),m=(n(69),n(21)),p=n(54),O=n.n(p),v=n(97),f=n(98),x=n(46),g=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:O.a.HomePage,children:Object(a.jsxs)(v.a,{children:[Object(a.jsx)("div",{className:"text-center page-heading",children:Object(a.jsx)("h1",{children:"React TMDB Movie Search"})}),""!=="Search movies info for free, powered by TMDB API.".trim()?Object(a.jsx)("div",{className:"text-center page-description",children:Object(a.jsx)("p",{children:"Search movies info for free, powered by TMDB API."})}):null,Object(a.jsx)("hr",{}),Object(a.jsx)("div",{className:"mt-3",children:Object(a.jsx)(f.a,{children:Object(a.jsx)(x.a,{customPlaceholder:"Enter the movie name..."})})})]})})}}]),n}(c.Component),_=n(60),M=n.n(_),y=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={},a}return Object(h.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:M.a.ErrorPageNotFound,children:void 0===this.props.customMessage?"Page Not found":this.props.customMessage})}}]),n}(c.Component),S=Object(c.lazy)((function(){return n.e(3).then(n.bind(null,106))})),N=function(e){return Object(a.jsx)(c.Suspense,{fallback:Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("div",{className:"mt-5 text-center",children:"Loading..."})}),children:Object(a.jsx)(S,Object(s.a)({},e))})},P=Object(c.lazy)((function(){return n.e(4).then(n.bind(null,104))})),k=function(e){return Object(a.jsx)(c.Suspense,{fallback:null,children:Object(a.jsx)(P,Object(s.a)({},e))})},F=n(99),C=n(100),R=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={},a}return Object(h.a)(n,[{key:"render",value:function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)(F.a,{bg:"dark",variant:"dark",children:[Object(a.jsx)(F.a.Brand,{children:"React TMDB Movie Search"}),Object(a.jsxs)(C.a,{className:"mr-auto",children:[Object(a.jsx)(C.a.Item,{children:Object(a.jsx)(l.b,{to:m.home.path,className:"nav-link",children:"Home"})}),Object(a.jsx)(C.a.Item,{children:Object(a.jsx)(l.b,{className:"nav-link",to:m.about.path,children:"About"})})]})]})})}}]),n}(c.PureComponent),w=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsxs)(l.a,{children:[Object(a.jsx)(R,{}),Object(a.jsxs)(d.d,{children:[Object(a.jsx)(d.b,{exact:!0,path:m.home.path,component:function(e){return Object(a.jsx)(g,Object(s.a)({},e))}}),Object(a.jsx)(d.b,{exact:!0,path:m.movie_page.path,component:function(e){return Object(a.jsx)(N,Object(s.a)({},e))}}),Object(a.jsx)(d.b,{exact:!0,path:m.about.path,component:function(e){return Object(a.jsx)(k,Object(s.a)({},e))}}),Object(a.jsx)(d.b,{component:function(){return Object(a.jsx)(y,{})}})]})]})})}}]),n}(c.Component),B=function(e){e&&e instanceof Function&&n.e(5).then(n.bind(null,105)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};o.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(w,{})}),document.getElementById("root")),document.title="React TMDB Movie Search",B()}},[[94,1,2]]]);
//# sourceMappingURL=main.3eb4784e.chunk.js.map