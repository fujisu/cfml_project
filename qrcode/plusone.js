var gapi=window.gapi=window.gapi||{};gapi._bs=new Date().getTime();(function(){var l=void 0,q=!0,r=null,t=!1,aa=encodeURIComponent,u=window,ba=Object,v=document,w=String,ca=decodeURIComponent;function da(a,b){return a.type=b}
var ea="appendChild",x="push",y="test",fa="exec",A="replace",ga="getElementById",B="concat",ha="JSON",C="indexOf",ia="match",ja="readyState",E="createElement",F="setAttribute",ka="getTime",la="getElementsByTagName",G="length",H="split",I="location",J="style",ma="call",K="getAttribute",L="href",na="action",M="apply",oa="attributes",N="parentNode",O="join",P="toLowerCase";var Q=u,R=v,pa=Q[I],qa=function(){},ra=/\[native code\]/,S=function(a,b,c){return a[b]=a[b]||c},sa=function(a){for(var b=0;b<this[G];b++)if(this[b]===a)return b;return-1},ta=/&/g,ua=/</g,va=/>/g,wa=/"/g,xa=/'/g,ya=function(a){return w(a)[A](ta,"&amp;")[A](ua,"&lt;")[A](va,"&gt;")[A](wa,"&quot;")[A](xa,"&#39;")},T=function(){var a;if((a=ba.create)&&ra[y](a))a=a(r);else{a={};for(var b in a)a[b]=l}return a},W=function(a,b){return ba.prototype.hasOwnProperty[ma](a,b)},za=function(a){if(ra[y](ba.keys))return ba.keys(a);
var b=[],c;for(c in a)W(a,c)&&b[x](c);return b},Aa=function(a,b){a=a||{};for(var c in a)W(a,c)&&(b[c]=a[c])},Ba=function(a,b){if(!a)throw Error(b||"");},X=S(Q,"gapi",{});var Ca=function(a,b,c){var e=RegExp("([#].*&|[#])"+b+"=([^&#]*)","g");b=RegExp("([?#].*&|[?#])"+b+"=([^&#]*)","g");if(a=a&&(e[fa](a)||b[fa](a)))try{c=ca(a[2])}catch(d){}return c},Da=/^([^?#]*)(\?([^#]*))?(\#(.*))?$/,Ea=function(a){a=a[ia](Da);var b=T();b.k=a[1];b.c=a[3]?[a[3]]:[];b.g=a[5]?[a[5]]:[];return b},Fa=function(a){return a.k+(0<a.c[G]?"?"+a.c[O]("&"):"")+(0<a.g[G]?"#"+a.g[O]("&"):"")},Ga=function(a){var b=[];if(a)for(var c in a)W(a,c)&&a[c]!=r&&b[x](aa(c)+"="+aa(a[c]));return b},Ha=function(a,
b,c){a=Ea(a);a.c[x][M](a.c,Ga(b));a.g[x][M](a.g,Ga(c));return Fa(a)};var Ia=function(a,b,c){if(Q[b+"EventListener"])Q[b+"EventListener"]("message",a,t);else if(Q[c+"tachEvent"])Q[c+"tachEvent"]("onmessage",a)};var Y;Y=S(Q,"___jsl",T());S(Y,"I",0);S(Y,"hel",10);var Ja=function(a){return!Y.dpo?Ca(a,"jsh",Y.h):Y.h},Ka=function(a){return S(S(Y,"H",T()),a,T())};var La=S(Y,"perf",T()),Na=S(La,"g",T()),Oa=S(La,"i",T());S(La,"r",[]);T();T();var Pa=function(a,b,c){var e=La.r;"function"===typeof e?e(a,b,c):e[x]([a,b,c])},Qa=function(a,b,c){Na[a]=!b&&Na[a]||c||(new Date)[ka]();Pa(a)},Sa=function(a,b,c){b&&0<b[G]&&(b=Ra(b),c&&0<c[G]&&(b+="___"+Ra(c)),28<b[G]&&(b=b.substr(0,28)+(b[G]-28)),c=b,b=S(Oa,"_p",T()),S(b,c,T())[a]=(new Date)[ka](),Pa(a,"_p",c))},Ra=function(a){return a[O]("__")[A](/\./g,"_")[A](/\-/g,"_")[A](/\,/g,"_")};var Ta=T(),Ua=[],Z;Z={b:"callback",p:"sync",n:"config",d:"_c",i:"h",q:"platform",l:"jsl",TIMEOUT:"timeout",o:"ontimeout",u:"mh",t:"u"};Ua[x]([Z.l,function(a){for(var b in a)if(W(a,b)){var c=a[b];"object"==typeof c?Y[b]=S(Y,b,[])[B](c):S(Y,b,c)}if(b=a[Z.t])a=S(Y,"us",[]),a[x](b),(b=/^https:(.*)$/[fa](b))&&a[x]("http:"+b[1])}]);var Va=decodeURI("%73cript");Ta.m=function(a){var b=Y.ms||"https://apis.google.com";a=a[0];if(!a||0<=a[C](".."))throw"Bad hint";return b+"/"+a[A](/^\//,"")};
var Wa=function(a){return a[O](",")[A](/\./g,"_")[A](/-/g,"_")},Xa=function(a,b){for(var c=[],e=0;e<a[G];++e){var d=a[e];d&&0>sa[ma](b,d)&&c[x](d)}return c},Ya=/^[\/_a-zA-Z0-9,.\-!:=]+$/,Za=/^https?:\/\/[^\/\?#]+\.google\.com(:\d+)?\/[^\?#]+$/,$a=/\/cb=/g,ab=/\/\//g,bb=function(a){var b=R[E](Va);b[F]("src",a);b.async="true";(a=R[la](Va)[0])?a[N].insertBefore(b,a):(R.head||R.body||R.documentElement)[ea](b)},db=function(a,b){var c=b||{};"function"==typeof b&&(c={},c[Z.b]=b);var e=c,d=e&&e[Z.d];if(d)for(var g=
0;g<Ua[G];g++){var k=Ua[g][0],h=Ua[g][1];h&&W(d,k)&&h(d[k],a,e)}e=a?a[H](":"):[];if(!(d=c[Z.i]))if(d=Ja(pa[L]),!d)throw"Bad hint";g=d;k=S(Y,"ah",T());if(!k["::"]||!e[G])cb(e||[],c,g);else{d=[];for(h=r;h=e.shift();){var f=h[H]("."),f=k[h]||k[f[1]&&"ns:"+f[0]||""]||g,j=d[G]&&d[d[G]-1]||r,n=j;if(!j||j.hint!=f)n={hint:f,j:[]},d[x](n);n.j[x](h)}var D=d[G];if(1<D){var m=c[Z.b];m&&(c[Z.b]=function(){0==--D&&m()})}for(;e=d.shift();)cb(e.j,c,e.hint)}},cb=function(a,b,c){var e=a.sort();a=[];for(var d=l,g=0;g<
e[G];g++){var k=e[g];k!=d&&a[x](k);d=k}a=a||[];var h=b[Z.b],f=b[Z.n],d=b[Z.TIMEOUT],j=b[Z.o],n=r,D=t;if(d&&!j||!d&&j)throw"Timeout requires both the timeout parameter and ontimeout parameter to be set";var e=S(Ka(c),"r",[]).sort(),m=S(Ka(c),"L",[]).sort(),p=[][B](e),s=function(a,b){if(D)return 0;Q.clearTimeout(n);m[x][M](m,z);var d=((X||{}).config||{}).update;d?d(f):f&&S(Y,"cu",[])[x](f);if(b){Sa("me0",a,p);try{eb(function(){var a;a=c===Ja(pa[L])?S(X,"_",T()):T();a=S(Ka(c),"_",a);b(a)})}finally{Sa("me1",
a,p)}}h&&h();return 1};0<d&&(n=Q.setTimeout(function(){D=q;j()},d));var z=Xa(a,m);if(z[G]){var z=Xa(a,e),U=S(Y,"CP",[]),V=U[G];U[V]=function(a){if(!a)return 0;Sa("ml1",z,p);var b=function(){U[V]=r;return s(z,a)};if(0<V&&U[V-1])U[V]=b;else for(b();(b=U[++V])&&b(););};if(z[G]){var Ma="loaded_"+Y.I++;X[Ma]=function(a){U[V](a);X[Ma]=r};a=c[H](";");a=(d=Ta[a.shift()])&&d(a);if(!a)throw"Bad hint:"+c;d=a=a[A]("__features__",Wa(z))[A](/\/$/,"")+(e[G]?"/ed=1/exm="+Wa(e):"")+("/cb=gapi."+Ma);g=d[ia](ab);k=
d[ia]($a);if(!k||!(1===k[G]&&Za[y](d)&&Ya[y](d)&&g&&1===g[G]))throw"Bad URL "+a;e[x][M](e,z);Sa("ml0",z,p);b[Z.p]||Q.___gapisync?(b=a,"loading"!=R[ja]?bb(b):R.write("<"+Va+' src="'+encodeURI(b)+'"></'+Va+">")):bb(a)}else U[V](qa)}else s(z)};var eb=function(a){if(Y.hee&&0<Y.hel)try{return a()}catch(b){Y.hel--,db("debug_error",function(){u.___jsl.hefn(b)})}else return a()};X.load=function(a,b){return eb(function(){return db(a,b)})};var fb=function(a){var b=u.___jsl=u.___jsl||{};b[a]=b[a]||[];return b[a]},gb=function(a){var b=u.___jsl=u.___jsl||{};b.cfg=!a&&b.cfg||{};return b.cfg},hb=function(a){return"object"===typeof a&&/\[native code\]/[y](a[x])},ib=function(a,b){if(b)for(var c in b)b.hasOwnProperty(c)&&(a[c]&&b[c]&&"object"===typeof a[c]&&"object"===typeof b[c]&&!hb(a[c])&&!hb(b[c])?ib(a[c],b[c]):b[c]&&"object"===typeof b[c]?(a[c]=hb(b[c])?[]:{},ib(a[c],b[c])):a[c]=b[c])},jb=function(a){if(a&&!/^\s+$/[y](a)){for(;0==a.charCodeAt(a[G]-
1);)a=a.substring(0,a[G]-1);var b;try{b=u[ha].parse(a)}catch(c){}if("object"===typeof b)return b;try{b=(new Function("return ("+a+"\n)"))()}catch(e){}if("object"===typeof b)return b;try{b=(new Function("return ({"+a+"\n})"))()}catch(d){}return"object"===typeof b?b:{}}},$=function(a){if(!a)return gb();a=a[H]("/");for(var b=gb(),c=0,e=a[G];b&&"object"===typeof b&&c<e;++c)b=b[a[c]];return c===a[G]&&b!==l?b:l};var kb=S(Y,"rw",T());var lb=function(a){var b;a[ia](/^https?%3A/i)&&(b=ca(a));a=b?b:a;b=v[E]("div");var c=v[E]("a");c.href=a;b[ea](c);b.innerHTML=b.innerHTML;a=w(b.firstChild[L]);b[N]&&b[N].removeChild(b);return a},mb=function(a){a=a||"canonical";for(var b=v[la]("link"),c=0,e=b[G];c<e;c++){var d=b[c],g=d[K]("rel");if(g&&g[P]()==a&&(d=d[K]("href")))return lb(d)}return u[I][L]};var nb=function(){var a=Y.onl;if(!a){a=T();Y.onl=a;var b=T();a.e=function(a){var e=b[a];e&&(delete b[a],e())};a.a=function(a,e){b[a]=e};a.r=function(a){delete b[a]}}return a};var ob={allowtransparency:"true",frameborder:"0",hspace:"0",marginheight:"0",marginwidth:"0",scrolling:"no",style:"",tabindex:"0",vspace:"0",width:"100%"},pb={allowtransparency:q,onload:q},qb=0,rb=function(a,b,c,e,d){var g,k;var h=c.onload;"function"===typeof h?(nb().a(e,h),k=h):k=r;k?(Ba(/^\w+$/[y](e),"Unsupported id - "+e),nb(),h='onload="window.___jsl.onl.e(&#34;'+e+'&#34;)"'):h="";try{g=a[E]('<iframe frameborder="'+ya(c.frameborder)+'" scrolling="'+ya(c.scrolling)+'" '+h+' name="'+ya(c.name)+
'"/>')}catch(f){g=a[E]("iframe"),k&&(g.onload=function(){g.onload=r;k[ma](this)},nb().r(e))}for(var j in c)a=c[j],"style"===j&&"object"===typeof a?Aa(a,g[J]):pb[j]||g[F](j,w(a));if(!d||!d.dontclear)for(;b.firstChild;)b.removeChild(b.firstChild);b[ea](g);g=b.lastChild;c.allowtransparency&&(g.allowTransparency=q);return g};var sb=/:([a-zA-Z_]+):/g,tb={style:"position:absolute;top:-10000px;width:300px;margin:0px;borderStyle:none"},ub="onPlusOne _ready _close,_open _resizeMe _renderstart oncircled".split(" "),vb=r,wb=S(Y,"WI",T()),xb=function(){var a=$("googleapis.config/sessionIndex");a==r&&(a=u.__X_GOOG_AUTHUSER);if(a==r){var b=u.google;b&&(a=b.authuser)}a==r&&(a=l,a==r&&(a=u[I][L]),a=a?Ca(a,"authuser")||r:r);return a==r?r:w(a)},yb=function(a,b){if(!vb){var c=$("iframes/:socialhost:"),e=xb()||"0",d=xb();vb={socialhost:c,
session_index:e,session_prefix:d!==l&&d!==r&&""!==d?"u/"+d+"/":"",im_prefix:$("googleapis.config/signedIn")===t?"_/im/":""}}return vb[b]||""},zb=["style","data-gapiscan"],Ab=function(a){var b=l;"number"===typeof a?b=a:"string"===typeof a&&(b=parseInt(a,10));return b},Bb=function(){};var Cb,Db,Eb,Fb,Gb,Hb=/(?:^|\s)g-((\S)*)(?:$|\s)/,Ib={div:q,span:q};Cb=S(Y,"SW",T());Db=S(Y,"SA",T());Eb=S(Y,"SM",T());Fb=S(Y,"FW",[]);Gb=r;
var Kb=function(a,b){Jb(l,t,a,b)},Jb=function(a,b,c,e){Qa("ps0",q);c=("string"===typeof c?v[ga](c):c)||R;var d;d=R.documentMode;if(c.querySelectorAll&&(!d||8<d)){d=e?[e]:za(Cb)[B](za(Db))[B](za(Eb));for(var g=[],k=0;k<d[G];k++){var h=d[k];g[x](".g-"+h,"g\\:"+h)}d=c.querySelectorAll(g[O](","))}else d=c[la]("*");c=T();for(g=0;g<d[G];g++){k=d[g];var f=k,h=e,j=f.nodeName[P](),n=l;f[K]("data-gapiscan")?h=r:(0==j[C]("g:")?n=j.substr(2):(f=(f=w(f.className||f[K]("class")))&&Hb[fa](f))&&(n=f[1]),h=n&&(Cb[n]||
Db[n]||Eb[n])&&(!h||n===h)?n:r);h&&(k[F]("data-gapiscan",q),S(c,h,[])[x](k))}if(b)for(var D in c){b=c[D];for(e=0;e<b[G];e++)b[e][F]("data-onload",q)}for(var m in c)Fb[x](m);Qa("ps1",q);((D=Fb[O](":"))||a)&&X.load(D,a);if(Lb(Gb||{}))for(var p in c){a=c[p];m=0;for(b=a[G];m<b;m++)a[m].removeAttribute("data-gapiscan");Mb(p)}else{e=[];for(p in c){a=c[p];m=0;for(b=a[G];m<b;m++){k=a[m];d=p;h=g=k;k=T();n=0!=h.nodeName[P]()[C]("g:");f=0;for(j=h[oa][G];f<j;f++){var s=h[oa][f],z=s.name,s=s.value;0<=sa[ma](zb,
z)||(n&&0!=z[C]("data-")||"null"===s)||(n&&(z=z.substr(5)),k[z[P]()]=s)}n=k;h=h[J];(f=Ab(h&&h.height))&&(n.height=w(f));(h=Ab(h&&h.width))&&(n.width=w(h));Nb(d,g,k,e,b)}}Ob(D,e)}},Pb=function(a){var b=S(X,a,{});b.go||(b.go=function(b){return Kb(b,a)},b.render=function(b,e){var d=e||{};da(d,a);var g=d.type;delete d.type;var k=("string"===typeof b?v[ga](b):b)||l,h={},f;for(f in d)W(d,f)&&(h[f[P]()]=d[f]);h.rd=1;d=[];Nb(g,k,h,d,0);Ob(g,d)})};var Mb=function(a,b){var c=S(Y,"watt",T())[a];b&&c?c(b):X.load(a,function(){var c=S(Y,"watt",T())[a],d=b&&b.iframeNode;!d||!c?(0,X[a].go)(d&&d[N]):c(b)})},Lb=function(){return t},Ob=function(){},Nb=function(a,b,c,e,d){switch(Qb(b,a)){case 0:Rb(a+"_annotation",b,c);break;case 1:Rb(a,b,c);break;case 2:if(b[N]){var g=q;c.dontclear&&(g=t);delete c.dontclear;var k,h,f;h=f=a;"plus"==a&&c[na]&&(f=a+"_"+c[na],h=a+"/"+c[na]);(f=$("iframes/"+f+"/url"))||(f=":socialhost:/_/widget/render/"+h);h=f[A](sb,yb);f=
{};Aa(c,f);f.hl=$("lang")||"en-US";f.origin=u[I].origin||u[I].protocol+"//"+u[I].host;f.exp=$("iframes/"+a+"/params/exp");var j=$("iframes/"+a+"/params/location");if(j)for(var n=0;n<j[G];n++){var D=j[n];f[D]=Q[I][D]}switch(a){case "plus":j=f[L];n=c[na]?l:"publisher";j=(j="string"==typeof j?j:l)?lb(j):mb(n);f.url=j;delete f[L];break;case "plusone":f.url=c[L]?lb(c[L]):mb();j=c.db;n=$();j==r&&n&&(j=n.db,j==r&&(j=n.gwidget&&n.gwidget.db));f.db=j||l;j=c.ecp;n=$();j==r&&n&&(j=n.ecp,j==r&&(j=n.gwidget&&
n.gwidget.ecp));f.ecp=j||l;delete f[L];break;case "signin":f.url=mb()}f.hl=$("lang")||"en-US";Y.ILI&&(f.iloader="1");delete f["data-onload"];delete f.rd;j=$("inline/css");"undefined"!==typeof j&&(0<d&&j>=d)&&(f.ic="1");j=/^#|^fr-/;d={};for(var m in f)W(f,m)&&j[y](m)&&(d[m[A](j,"")]=f[m],delete f[m]);m=[][B](ub);j=$("iframes/"+a+"/methods");"object"===typeof j&&ra[y](j[x])&&(m=m[B](j));for(k in c)if(W(c,k)&&/^on/[y](k)&&("plus"!=a||"onconnect"!=k))m[x](k),delete f[k];delete f.callback;d._methods=m[O](",");
k=Ha(h,f,d);c.rd?m=b:(m=v[E]("div"),b[F]("data-gapistub",q),m[J].cssText="position:absolute;width:100px;left:-10000px;",b[N].insertBefore(m,b));m.id||(b=m,S(wb,a,0),h="___"+a+"_"+wb[a]++,b.id=h);b=T();b[">type"]=a;Aa(c,b);m[F]("data-gwattr",Ga(b)[O](":"));b=m;m={allowPost:1,attributes:tb};m.dontclear=!g;var p;h=m||{};g=h[oa]||{};Ba(!h.allowPost||!g.onload,"onload is not supported by post iframe");g=b.ownerDocument||R;f=0;do m=h.id||["I",qb++,"_",(new Date)[ka]()][O]("");while(g[ga](m)&&5>++f);Ba(5>
f,"Error creating iframe id");d=g[I][L];f=T();(j=Ca(d,"_bsh",Y.bsh))&&(f._bsh=j);(d=Ja(d))&&(f.jsh=d);d=T();d.id=m;d.parent=g[I].protocol+"//"+g[I].host;j=Ca(g[I][L],"id","");n=Ca(g[I][L],"pfname","");(j=j?n+"/"+j:"")&&(d.pfname=j);h.hintInFragment?Aa(f,d):p=f;f=Ha(k,p,d);p=T();Aa(ob,p);Aa(h[oa],p);p.name=p.id=m;p.src=f;var s;if((h||{}).allowPost&&2E3<f[G]){f=Ea(f);p.src="";p["data-postorigin"]=f.k;p=rb(g,b,p,m);-1!=navigator.userAgent[C]("WebKit")&&(s=p.contentWindow.document,s.open(),d=s[E]("div"),
j={},n=m+"_inner",j.name=n,j.src="",j.style="display:none",rb(g,d,j,n,h));d=(h=f.c[0])?h[H]("&"):[];h=[];for(j=0;j<d[G];j++)n=d[j][H]("=",2),h[x]([ca(n[0]),ca(n[1])]);f.c=[];d=Fa(f);f=g[E]("form");f.action=d;f.method="POST";f.target=m;f[J].display="none";for(m=0;m<h[G];m++)d=g[E]("input"),da(d,"hidden"),d.name=h[m][0],d.value=h[m][1],f[ea](d);b[ea](f);f.submit();f[N].removeChild(f);s&&s.close();s=p}else s=rb(g,b,p,m,h);p=s;s={};s.userParams=c;s.url=k;da(s,a);s.iframeNode=p;s.id=p[K]("id");c=s.id;
p=T();p.id=c;p.userParams=s.userParams;p.url=s.url;da(p,s.type);p.state=1;kb[c]=p;c=s}else c=r;c&&((s=c.id)&&e[x](s),Mb(a,c))}},Qb=function(a,b){if(a&&1===a.nodeType&&b){if(Db[b])return 1;var c;if(c=Eb[b])if(c=!!Ib[a.nodeName[P]()])c=(c=a.innerHTML)&&c[A](/^[\s\xa0]+|[\s\xa0]+$/g,"")?q:t;if(c)return 0;if(Cb[b])return 2}return r},Rb=function(a,b,c){var e={};e.iframeNode=b;e.userParams=c;Mb(a,e)};S(X,"platform",{}).go=Kb;Lb=function(a){for(var b=[Z.d,Z.l,Z.i],c=0;c<b[G]&&a;c++)a=a[b[c]];b=Ja(pa[L]);return!a||0!=a[C]("n;")&&0!=b[C]("n;")&&a!==b};Ob=function(a,b){var c=function(){Ia(e,"remove","de")},e=function(e){var k=e.data,h=e.origin;if(Sb(k,b)){var f=d;d=t;f&&Qa("rqe");db(a,function(){f&&Qa("rqd");c();for(var a=S(Y,"RPMQ",[]),b=0;b<a[G];b++)a[b]({data:k,origin:h})})}};if(!(0===b[G]||!u[ha]||!u[ha].parse)){var d=q;Ia(e,"add","at");db(a,c)}};
Ua[x]([Z.q,function(a,b,c){Gb=c;b&&Fb[x](b);for(b=0;b<a[G];b++)Cb[a[b]]=q;var e=c[Z.d].annotation||[];for(b=0;b<e[G];++b)Db[e[b]]=q;e=c[Z.d].bimodal||[];for(b=0;b<e[G];++b)Eb[e[b]]=q;for(b=0;b<a[G];b++)Pb(a[b]);if(b=u.__GOOGLEAPIS)b.googleapis&&!b["googleapis.config"]&&(b["googleapis.config"]=b.googleapis),S(Y,"ci",[])[x](b),u.__GOOGLEAPIS=l;gb(q);e=u.___gcfg;b=fb("cu");if(e&&e!==u.___gu){var d={};ib(d,e);b[x](d);u.___gu=e}var e=fb("cu"),g=v.scripts||v[la]("script")||[],d=[],k=[];k[x][M](k,S(Y,"us",
[]));for(var h=0;h<g[G];++h)for(var f=g[h],j=0;j<k[G];++j)f.src&&0==f.src[C](k[j])&&d[x](f);0==d[G]&&(0<g[G]&&g[g[G]-1].src)&&d[x](g[g[G]-1]);for(g=0;g<d[G];++g)d[g][K]("gapi_processed")||(d[g][F]("gapi_processed",q),(k=d[g])?(h=k.nodeType,k=3==h||4==h?k.nodeValue:k.textContent||k.innerText||k.innerHTML||""):k=l,(k=jb(k))&&e[x](k));g=fb("cd");e=0;for(d=g[G];e<d;++e)ib(gb(),g[e]);g=fb("ci");e=0;for(d=g[G];e<d;++e)ib(gb(),g[e]);e=0;for(d=b[G];e<d;++e)ib(gb(),b[e]);if("explicit"!=$("parsetags")){b=S(Y,
"sws",[]);b[x][M](b,a);var n;if(c){var D=c[Z.b];D&&(n=function(){Q.setTimeout(D,0)},delete c[Z.b])}if("complete"!==R[ja])try{Jb(l,q)}catch(m){}var p=function(){Jb(n,q)};if("complete"===R[ja])p();else{var s=t,z=function(){if(!s)return s=q,p[M](this,arguments)};Q.addEventListener?(Q.addEventListener("load",z,t),Q.addEventListener("DOMContentLoaded",z,t)):Q.attachEvent&&(Q.attachEvent("onreadystatechange",function(){"complete"===R[ja]&&z[M](this,arguments)}),Q.attachEvent("onload",z))}}}]);var Tb=/^\{h\:'/,Ub=/^!_/,Sb=function(a,b){a=w(a);if(Tb[y](a))return q;a=a[A](Ub,"");if(!/^\{/[y](a))return t;try{var c=u[ha].parse(a)}catch(e){return t}if(!c)return t;var d=c.f;if(c.s&&d&&-1!=sa[ma](b,d)){if("_renderstart"===c.s){var c=c.a&&c.a[1],g=R[ga](d),k=kb[d];k&&2>k.state&&(k.state=2);(d=kb[d])&&(d.args=c);c&&g&&Bb(g[N],g,c)}return q}return t};Bb=function(a,b,c){if(c.width&&c.height){a[J].cssText="";var e=c||{};c=e.width;var e=e.height,d=a[J];d.textIndent="0";d.margin="0";d.padding="0";d.background="transparent";d.borderStyle="none";d.cssFloat="none";d.styleFloat="none";d.lineHeight="normal";d.fontSize="1px";d.verticalAlign="baseline";a[J].display="inline-block";a=b[J];a.position="static";a.left=0;a.top=0;a.visibility="visible";c&&(a.width=c+"px");e&&(a.height=e+"px");b["data-csi-wdt"]=(new Date)[ka]()}};Qa("bs0",q,u.gapi._bs);Qa("bs1",q);delete u.gapi._bs;})();
gapi.load("plusone",{callback:window["gapi_onload"],_c:{"jsl":{"ci":{"services":{},"deviceType":"desktop","lexps":[69,71,96,97,79,74,45,17,86,82,92,94,88,61,90,30],"inline":{"css":1},"report":{},"oauth-flow":{},"isPlusUser":false,"iframes":{"additnow":{"methods":["launchurl"],"url":"https://apis.google.com/additnow/additnow.html?bsv"},"savetowallet":{"url":"https://clients5.google.com/s2w/o/savetowallet?bsv"},"plus":{"methods":["onauth"],"url":":socialhost:/u/:session_index:/_/pages/badge?bsv"},":socialhost:":"https://plusone.google.com","hangout":{"url":"https://talkgadget.google.com/widget/go?bsv"},"plus_circle":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/widget/plus/circle?bsv"},"evwidget":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/events/widget?bsv"},":signuphost:":"https://plus.google.com","plus_followers":{"params":{"url":""},"url":":socialhost:/_/im/_/widget/render/plus/followers?bsv"},"plusone":{"preloadUrl":["https://ssl.gstatic.com/s2/oz/images/stars/po/Publisher/sprite4-a67f741843ffc4220554c34bd01bb0bb.png"],"params":{"count":"","size":"","url":""},"url":":socialhost:/:session_prefix:_/+1/fastbutton?bsv"},"plus_share":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/+1/sharebutton?plusShare\u003dtrue\u0026bsv"}},"debug":{"host":"https://plusone.google.com","reportExceptionRate":0.05,"rethrowException":true},"csi":{"rate":0.0},"googleapis.config":{"mobilesignupurl":"https://m.google.com/app/plus/oob?"}},"h":"m;/_/scs/apps-static/_/js/k\u003doz.gapi.en_GB.V7a_WieNeso.O/m\u003d__features__/am\u003dgQ/rt\u003dj/d\u003d1/rs\u003dAItRSTPoaph_LSG4E91NXF7EaQcQCC-rgA","u":"https://apis.google.com/js/plusone.js","hee":true,"fp":"b6f2dfd3b4d993d2f7546eba6d1a6d2d000d97e6","dpo":false},"platform":["plusone","plus","additnow","savetowallet","notifications","identity","hangout"],"fp":"b6f2dfd3b4d993d2f7546eba6d1a6d2d000d97e6","annotation":[],"bimodal":[]}});