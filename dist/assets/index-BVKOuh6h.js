(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const da="180",Jl=0,Da=1,Ql=2,Yo=1,ec=2,rn=3,yn=0,yt=1,on=2,Sn=0,oi=1,La=2,Ia=3,Ua=4,tc=5,Un=100,nc=101,ic=102,sc=103,rc=104,ac=200,oc=201,lc=202,cc=203,xr=204,Sr=205,hc=206,uc=207,dc=208,fc=209,pc=210,mc=211,gc=212,_c=213,vc=214,Mr=0,Er=1,yr=2,ci=3,Tr=4,br=5,Ar=6,wr=7,fa=0,xc=1,Sc=2,Mn=0,Mc=1,Ec=2,yc=3,Tc=4,bc=5,Ac=6,wc=7,Ko=300,hi=301,ui=302,Rr=303,Cr=304,ys=306,Pr=1e3,Fn=1001,Dr=1002,St=1003,Rc=1004,zi=1005,Kt=1006,Ds=1007,On=1008,Gt=1009,jo=1010,Zo=1011,Ri=1012,pa=1013,zn=1014,ln=1015,Ii=1016,ma=1017,ga=1018,Ci=1020,$o=35902,Jo=35899,Qo=1021,el=1022,Ut=1023,Pi=1026,Di=1027,tl=1028,_a=1029,nl=1030,va=1031,xa=1033,us=33776,ds=33777,fs=33778,ps=33779,Lr=35840,Ir=35841,Ur=35842,Nr=35843,Fr=36196,Or=37492,Br=37496,zr=37808,Hr=37809,Gr=37810,Vr=37811,kr=37812,Wr=37813,Xr=37814,qr=37815,Yr=37816,Kr=37817,jr=37818,Zr=37819,$r=37820,Jr=37821,Qr=36492,ea=36494,ta=36495,na=36283,ia=36284,sa=36285,ra=36286,Cc=3200,Pc=3201,il=0,Dc=1,xn="",Lt="srgb",di="srgb-linear",gs="linear",Ye="srgb",Vn=7680,Na=519,Lc=512,Ic=513,Uc=514,sl=515,Nc=516,Fc=517,Oc=518,Bc=519,aa=35044,Fa="300 es",jt=2e3,_s=2001;class pi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const mt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ls=Math.PI/180,oa=180/Math.PI;function En(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(mt[i&255]+mt[i>>8&255]+mt[i>>16&255]+mt[i>>24&255]+"-"+mt[e&255]+mt[e>>8&255]+"-"+mt[e>>16&15|64]+mt[e>>24&255]+"-"+mt[t&63|128]+mt[t>>8&255]+"-"+mt[t>>16&255]+mt[t>>24&255]+mt[n&255]+mt[n>>8&255]+mt[n>>16&255]+mt[n>>24&255]).toLowerCase()}function He(i,e,t){return Math.max(e,Math.min(t,i))}function zc(i,e){return(i%e+e)%e}function Is(i,e,t){return(1-t)*i+t*e}function Yt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ke(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Le{constructor(e=0,t=0){Le.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(He(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(He(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ui{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],f=n[s+3];const d=r[a+0],p=r[a+1],_=r[a+2],S=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=d,e[t+1]=p,e[t+2]=_,e[t+3]=S;return}if(f!==S||l!==d||c!==p||u!==_){let m=1-o;const h=l*d+c*p+u*_+f*S,b=h>=0?1:-1,y=1-h*h;if(y>Number.EPSILON){const C=Math.sqrt(y),w=Math.atan2(C,h*b);m=Math.sin(m*w)/C,o=Math.sin(o*w)/C}const E=o*b;if(l=l*m+d*E,c=c*m+p*E,u=u*m+_*E,f=f*m+S*E,m===1-o){const C=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=C,c*=C,u*=C,f*=C}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],f=r[a],d=r[a+1],p=r[a+2],_=r[a+3];return e[t]=o*_+u*f+l*p-c*d,e[t+1]=l*_+u*d+c*f-o*p,e[t+2]=c*_+u*p+o*d-l*f,e[t+3]=u*_-o*f-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),f=o(r/2),d=l(n/2),p=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=d*u*f+c*p*_,this._y=c*p*f-d*u*_,this._z=c*u*_+d*p*f,this._w=c*u*f-d*p*_;break;case"YXZ":this._x=d*u*f+c*p*_,this._y=c*p*f-d*u*_,this._z=c*u*_-d*p*f,this._w=c*u*f+d*p*_;break;case"ZXY":this._x=d*u*f-c*p*_,this._y=c*p*f+d*u*_,this._z=c*u*_+d*p*f,this._w=c*u*f-d*p*_;break;case"ZYX":this._x=d*u*f-c*p*_,this._y=c*p*f+d*u*_,this._z=c*u*_-d*p*f,this._w=c*u*f+d*p*_;break;case"YZX":this._x=d*u*f+c*p*_,this._y=c*p*f+d*u*_,this._z=c*u*_-d*p*f,this._w=c*u*f-d*p*_;break;case"XZY":this._x=d*u*f-c*p*_,this._y=c*p*f-d*u*_,this._z=c*u*_+d*p*f,this._w=c*u*f+d*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],d=n+o+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>f){const p=2*Math.sqrt(1+n-o-f);this._w=(u-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>f){const p=2*Math.sqrt(1+o-n-f);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(He(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=a*f+this._w*d,this._x=n*f+this._x*d,this._y=s*f+this._y*d,this._z=r*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,n=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Oa.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Oa.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),u=2*(o*t-r*s),f=2*(r*n-a*t);return this.x=t+l*c+a*f-o*u,this.y=n+l*u+o*c-r*f,this.z=s+l*f+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this.z=He(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this.z=He(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(He(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Us.copy(this).projectOnVector(e),this.sub(Us)}reflect(e){return this.sub(Us.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(He(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Us=new N,Oa=new Ui;class Ue{constructor(e,t,n,s,r,a,o,l,c){Ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],f=n[7],d=n[2],p=n[5],_=n[8],S=s[0],m=s[3],h=s[6],b=s[1],y=s[4],E=s[7],C=s[2],w=s[5],R=s[8];return r[0]=a*S+o*b+l*C,r[3]=a*m+o*y+l*w,r[6]=a*h+o*E+l*R,r[1]=c*S+u*b+f*C,r[4]=c*m+u*y+f*w,r[7]=c*h+u*E+f*R,r[2]=d*S+p*b+_*C,r[5]=d*m+p*y+_*w,r[8]=d*h+p*E+_*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,d=o*l-u*r,p=c*r-a*l,_=t*f+n*d+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/_;return e[0]=f*S,e[1]=(s*c-u*n)*S,e[2]=(o*n-s*a)*S,e[3]=d*S,e[4]=(u*t-s*l)*S,e[5]=(s*r-o*t)*S,e[6]=p*S,e[7]=(n*l-c*t)*S,e[8]=(a*t-n*r)*S,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ns.makeScale(e,t)),this}rotate(e){return this.premultiply(Ns.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ns.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ns=new Ue;function rl(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function vs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Hc(){const i=vs("canvas");return i.style.display="block",i}const Ba={};function Li(i){i in Ba||(Ba[i]=!0,console.warn(i))}function Gc(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const za=new Ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ha=new Ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Vc(){const i={enabled:!0,workingColorSpace:di,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Ye&&(s.r=cn(s.r),s.g=cn(s.g),s.b=cn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Ye&&(s.r=li(s.r),s.g=li(s.g),s.b=li(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===xn?gs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Li("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Li("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[di]:{primaries:e,whitePoint:n,transfer:gs,toXYZ:za,fromXYZ:Ha,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Lt},outputColorSpaceConfig:{drawingBufferColorSpace:Lt}},[Lt]:{primaries:e,whitePoint:n,transfer:Ye,toXYZ:za,fromXYZ:Ha,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Lt}}}),i}const ke=Vc();function cn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function li(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let kn;class kc{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{kn===void 0&&(kn=vs("canvas")),kn.width=e.width,kn.height=e.height;const s=kn.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=kn}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=vs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=cn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(cn(t[n]/255)*255):t[n]=cn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Wc=0;class Sa{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Wc++}),this.uuid=En(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Fs(s[a].image)):r.push(Fs(s[a]))}else r=Fs(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Fs(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?kc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Xc=0;const Os=new N;class Mt extends pi{constructor(e=Mt.DEFAULT_IMAGE,t=Mt.DEFAULT_MAPPING,n=Fn,s=Fn,r=Kt,a=On,o=Ut,l=Gt,c=Mt.DEFAULT_ANISOTROPY,u=xn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Xc++}),this.uuid=En(),this.name="",this.source=new Sa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Le(0,0),this.repeat=new Le(1,1),this.center=new Le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Os).x}get height(){return this.source.getSize(Os).y}get depth(){return this.source.getSize(Os).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ko)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Pr:e.x=e.x-Math.floor(e.x);break;case Fn:e.x=e.x<0?0:1;break;case Dr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Pr:e.y=e.y-Math.floor(e.y);break;case Fn:e.y=e.y<0?0:1;break;case Dr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Mt.DEFAULT_IMAGE=null;Mt.DEFAULT_MAPPING=Ko;Mt.DEFAULT_ANISOTROPY=1;class at{constructor(e=0,t=0,n=0,s=1){at.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],p=l[5],_=l[9],S=l[2],m=l[6],h=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-S)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+S)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,E=(p+1)/2,C=(h+1)/2,w=(u+d)/4,R=(f+S)/4,L=(_+m)/4;return y>E&&y>C?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=w/n,r=R/n):E>C?E<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),n=w/s,r=L/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=R/r,s=L/r),this.set(n,s,r,t),this}let b=Math.sqrt((m-_)*(m-_)+(f-S)*(f-S)+(d-u)*(d-u));return Math.abs(b)<.001&&(b=1),this.x=(m-_)/b,this.y=(f-S)/b,this.z=(d-u)/b,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this.z=He(this.z,e.z,t.z),this.w=He(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this.z=He(this.z,e,t),this.w=He(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(He(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class qc extends pi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new at(0,0,e,t),this.scissorTest=!1,this.viewport=new at(0,0,e,t);const s={width:e,height:t,depth:n.depth},r=new Mt(s);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Kt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Sa(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class hn extends qc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class al extends Mt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=St,this.minFilter=St,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Yc extends Mt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=St,this.minFilter=St,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ni{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ft.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ft.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Ft.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Ft):Ft.fromBufferAttribute(r,a),Ft.applyMatrix4(e.matrixWorld),this.expandByPoint(Ft);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Hi.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Hi.copy(n.boundingBox)),Hi.applyMatrix4(e.matrixWorld),this.union(Hi)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ft),Ft.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(vi),Gi.subVectors(this.max,vi),Wn.subVectors(e.a,vi),Xn.subVectors(e.b,vi),qn.subVectors(e.c,vi),dn.subVectors(Xn,Wn),fn.subVectors(qn,Xn),An.subVectors(Wn,qn);let t=[0,-dn.z,dn.y,0,-fn.z,fn.y,0,-An.z,An.y,dn.z,0,-dn.x,fn.z,0,-fn.x,An.z,0,-An.x,-dn.y,dn.x,0,-fn.y,fn.x,0,-An.y,An.x,0];return!Bs(t,Wn,Xn,qn,Gi)||(t=[1,0,0,0,1,0,0,0,1],!Bs(t,Wn,Xn,qn,Gi))?!1:(Vi.crossVectors(dn,fn),t=[Vi.x,Vi.y,Vi.z],Bs(t,Wn,Xn,qn,Gi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ft).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ft).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Qt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Qt=[new N,new N,new N,new N,new N,new N,new N,new N],Ft=new N,Hi=new Ni,Wn=new N,Xn=new N,qn=new N,dn=new N,fn=new N,An=new N,vi=new N,Gi=new N,Vi=new N,wn=new N;function Bs(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){wn.fromArray(i,r);const o=s.x*Math.abs(wn.x)+s.y*Math.abs(wn.y)+s.z*Math.abs(wn.z),l=e.dot(wn),c=t.dot(wn),u=n.dot(wn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Kc=new Ni,xi=new N,zs=new N;class Ts{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Kc.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;xi.subVectors(e,this.center);const t=xi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(xi,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(zs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(xi.copy(e.center).add(zs)),this.expandByPoint(xi.copy(e.center).sub(zs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const en=new N,Hs=new N,ki=new N,pn=new N,Gs=new N,Wi=new N,Vs=new N;class ol{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,en)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=en.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(en.copy(this.origin).addScaledVector(this.direction,t),en.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Hs.copy(e).add(t).multiplyScalar(.5),ki.copy(t).sub(e).normalize(),pn.copy(this.origin).sub(Hs);const r=e.distanceTo(t)*.5,a=-this.direction.dot(ki),o=pn.dot(this.direction),l=-pn.dot(ki),c=pn.lengthSq(),u=Math.abs(1-a*a);let f,d,p,_;if(u>0)if(f=a*l-o,d=a*o-l,_=r*u,f>=0)if(d>=-_)if(d<=_){const S=1/u;f*=S,d*=S,p=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=r,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+c;else d=-r,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+c;else d<=-_?(f=Math.max(0,-(-a*r+o)),d=f>0?-r:Math.min(Math.max(-r,-l),r),p=-f*f+d*(d+2*l)+c):d<=_?(f=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(f=Math.max(0,-(a*r+o)),d=f>0?r:Math.min(Math.max(-r,-l),r),p=-f*f+d*(d+2*l)+c);else d=a>0?-r:r,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Hs).addScaledVector(ki,d),p}intersectSphere(e,t){en.subVectors(e.center,this.origin);const n=en.dot(this.direction),s=en.dot(en)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,en)!==null}intersectTriangle(e,t,n,s,r){Gs.subVectors(t,e),Wi.subVectors(n,e),Vs.crossVectors(Gs,Wi);let a=this.direction.dot(Vs),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;pn.subVectors(this.origin,e);const l=o*this.direction.dot(Wi.crossVectors(pn,Wi));if(l<0)return null;const c=o*this.direction.dot(Gs.cross(pn));if(c<0||l+c>a)return null;const u=-o*pn.dot(Vs);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class st{constructor(e,t,n,s,r,a,o,l,c,u,f,d,p,_,S,m){st.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,u,f,d,p,_,S,m)}set(e,t,n,s,r,a,o,l,c,u,f,d,p,_,S,m){const h=this.elements;return h[0]=e,h[4]=t,h[8]=n,h[12]=s,h[1]=r,h[5]=a,h[9]=o,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=d,h[3]=p,h[7]=_,h[11]=S,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new st().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Yn.setFromMatrixColumn(e,0).length(),r=1/Yn.setFromMatrixColumn(e,1).length(),a=1/Yn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const d=a*u,p=a*f,_=o*u,S=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=p+_*c,t[5]=d-S*c,t[9]=-o*l,t[2]=S-d*c,t[6]=_+p*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,p=l*f,_=c*u,S=c*f;t[0]=d+S*o,t[4]=_*o-p,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=p*o-_,t[6]=S+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,p=l*f,_=c*u,S=c*f;t[0]=d-S*o,t[4]=-a*f,t[8]=_+p*o,t[1]=p+_*o,t[5]=a*u,t[9]=S-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,p=a*f,_=o*u,S=o*f;t[0]=l*u,t[4]=_*c-p,t[8]=d*c+S,t[1]=l*f,t[5]=S*c+d,t[9]=p*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,p=a*c,_=o*l,S=o*c;t[0]=l*u,t[4]=S-d*f,t[8]=_*f+p,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*f+_,t[10]=d-S*f}else if(e.order==="XZY"){const d=a*l,p=a*c,_=o*l,S=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=d*f+S,t[5]=a*u,t[9]=p*f-_,t[2]=_*f-p,t[6]=o*u,t[10]=S*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(jc,e,Zc)}lookAt(e,t,n){const s=this.elements;return At.subVectors(e,t),At.lengthSq()===0&&(At.z=1),At.normalize(),mn.crossVectors(n,At),mn.lengthSq()===0&&(Math.abs(n.z)===1?At.x+=1e-4:At.z+=1e-4,At.normalize(),mn.crossVectors(n,At)),mn.normalize(),Xi.crossVectors(At,mn),s[0]=mn.x,s[4]=Xi.x,s[8]=At.x,s[1]=mn.y,s[5]=Xi.y,s[9]=At.y,s[2]=mn.z,s[6]=Xi.z,s[10]=At.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],f=n[5],d=n[9],p=n[13],_=n[2],S=n[6],m=n[10],h=n[14],b=n[3],y=n[7],E=n[11],C=n[15],w=s[0],R=s[4],L=s[8],M=s[12],x=s[1],P=s[5],O=s[9],V=s[13],K=s[2],W=s[6],q=s[10],Z=s[14],H=s[3],re=s[7],ce=s[11],Ee=s[15];return r[0]=a*w+o*x+l*K+c*H,r[4]=a*R+o*P+l*W+c*re,r[8]=a*L+o*O+l*q+c*ce,r[12]=a*M+o*V+l*Z+c*Ee,r[1]=u*w+f*x+d*K+p*H,r[5]=u*R+f*P+d*W+p*re,r[9]=u*L+f*O+d*q+p*ce,r[13]=u*M+f*V+d*Z+p*Ee,r[2]=_*w+S*x+m*K+h*H,r[6]=_*R+S*P+m*W+h*re,r[10]=_*L+S*O+m*q+h*ce,r[14]=_*M+S*V+m*Z+h*Ee,r[3]=b*w+y*x+E*K+C*H,r[7]=b*R+y*P+E*W+C*re,r[11]=b*L+y*O+E*q+C*ce,r[15]=b*M+y*V+E*Z+C*Ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],p=e[14],_=e[3],S=e[7],m=e[11],h=e[15];return _*(+r*l*f-s*c*f-r*o*d+n*c*d+s*o*p-n*l*p)+S*(+t*l*p-t*c*d+r*a*d-s*a*p+s*c*u-r*l*u)+m*(+t*c*f-t*o*p-r*a*f+n*a*p+r*o*u-n*c*u)+h*(-s*o*u-t*l*f+t*o*d+s*a*f-n*a*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],p=e[11],_=e[12],S=e[13],m=e[14],h=e[15],b=f*m*c-S*d*c+S*l*p-o*m*p-f*l*h+o*d*h,y=_*d*c-u*m*c-_*l*p+a*m*p+u*l*h-a*d*h,E=u*S*c-_*f*c+_*o*p-a*S*p-u*o*h+a*f*h,C=_*f*l-u*S*l-_*o*d+a*S*d+u*o*m-a*f*m,w=t*b+n*y+s*E+r*C;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/w;return e[0]=b*R,e[1]=(S*d*r-f*m*r-S*s*p+n*m*p+f*s*h-n*d*h)*R,e[2]=(o*m*r-S*l*r+S*s*c-n*m*c-o*s*h+n*l*h)*R,e[3]=(f*l*r-o*d*r-f*s*c+n*d*c+o*s*p-n*l*p)*R,e[4]=y*R,e[5]=(u*m*r-_*d*r+_*s*p-t*m*p-u*s*h+t*d*h)*R,e[6]=(_*l*r-a*m*r-_*s*c+t*m*c+a*s*h-t*l*h)*R,e[7]=(a*d*r-u*l*r+u*s*c-t*d*c-a*s*p+t*l*p)*R,e[8]=E*R,e[9]=(_*f*r-u*S*r-_*n*p+t*S*p+u*n*h-t*f*h)*R,e[10]=(a*S*r-_*o*r+_*n*c-t*S*c-a*n*h+t*o*h)*R,e[11]=(u*o*r-a*f*r-u*n*c+t*f*c+a*n*p-t*o*p)*R,e[12]=C*R,e[13]=(u*S*s-_*f*s+_*n*d-t*S*d-u*n*m+t*f*m)*R,e[14]=(_*o*s-a*S*s-_*n*l+t*S*l+a*n*m-t*o*m)*R,e[15]=(a*f*s-u*o*s+u*n*l-t*f*l-a*n*d+t*o*d)*R,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,f=o+o,d=r*c,p=r*u,_=r*f,S=a*u,m=a*f,h=o*f,b=l*c,y=l*u,E=l*f,C=n.x,w=n.y,R=n.z;return s[0]=(1-(S+h))*C,s[1]=(p+E)*C,s[2]=(_-y)*C,s[3]=0,s[4]=(p-E)*w,s[5]=(1-(d+h))*w,s[6]=(m+b)*w,s[7]=0,s[8]=(_+y)*R,s[9]=(m-b)*R,s[10]=(1-(d+S))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=Yn.set(s[0],s[1],s[2]).length();const a=Yn.set(s[4],s[5],s[6]).length(),o=Yn.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Ot.copy(this);const c=1/r,u=1/a,f=1/o;return Ot.elements[0]*=c,Ot.elements[1]*=c,Ot.elements[2]*=c,Ot.elements[4]*=u,Ot.elements[5]*=u,Ot.elements[6]*=u,Ot.elements[8]*=f,Ot.elements[9]*=f,Ot.elements[10]*=f,t.setFromRotationMatrix(Ot),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=jt,l=!1){const c=this.elements,u=2*r/(t-e),f=2*r/(n-s),d=(t+e)/(t-e),p=(n+s)/(n-s);let _,S;if(l)_=r/(a-r),S=a*r/(a-r);else if(o===jt)_=-(a+r)/(a-r),S=-2*a*r/(a-r);else if(o===_s)_=-a/(a-r),S=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=jt,l=!1){const c=this.elements,u=2/(t-e),f=2/(n-s),d=-(t+e)/(t-e),p=-(n+s)/(n-s);let _,S;if(l)_=1/(a-r),S=a/(a-r);else if(o===jt)_=-2/(a-r),S=-(a+r)/(a-r);else if(o===_s)_=-1/(a-r),S=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=_,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Yn=new N,Ot=new st,jc=new N(0,0,0),Zc=new N(1,1,1),mn=new N,Xi=new N,At=new N,Ga=new st,Va=new Ui;class $t{constructor(e=0,t=0,n=0,s=$t.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],f=s[2],d=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(He(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-He(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(He(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-He(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(He(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-He(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ga.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ga,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Va.setFromEuler(this),this.setFromQuaternion(Va,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$t.DEFAULT_ORDER="XYZ";class ll{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let $c=0;const ka=new N,Kn=new Ui,tn=new st,qi=new N,Si=new N,Jc=new N,Qc=new Ui,Wa=new N(1,0,0),Xa=new N(0,1,0),qa=new N(0,0,1),Ya={type:"added"},eh={type:"removed"},jn={type:"childadded",child:null},ks={type:"childremoved",child:null};class ft extends pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$c++}),this.uuid=En(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ft.DEFAULT_UP.clone();const e=new N,t=new $t,n=new Ui,s=new N(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new st},normalMatrix:{value:new Ue}}),this.matrix=new st,this.matrixWorld=new st,this.matrixAutoUpdate=ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ll,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Kn.setFromAxisAngle(e,t),this.quaternion.multiply(Kn),this}rotateOnWorldAxis(e,t){return Kn.setFromAxisAngle(e,t),this.quaternion.premultiply(Kn),this}rotateX(e){return this.rotateOnAxis(Wa,e)}rotateY(e){return this.rotateOnAxis(Xa,e)}rotateZ(e){return this.rotateOnAxis(qa,e)}translateOnAxis(e,t){return ka.copy(e).applyQuaternion(this.quaternion),this.position.add(ka.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Wa,e)}translateY(e){return this.translateOnAxis(Xa,e)}translateZ(e){return this.translateOnAxis(qa,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(tn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?qi.copy(e):qi.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Si.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?tn.lookAt(Si,qi,this.up):tn.lookAt(qi,Si,this.up),this.quaternion.setFromRotationMatrix(tn),s&&(tn.extractRotation(s.matrixWorld),Kn.setFromRotationMatrix(tn),this.quaternion.premultiply(Kn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ya),jn.child=e,this.dispatchEvent(jn),jn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(eh),ks.child=e,this.dispatchEvent(ks),ks.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),tn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),tn.multiply(e.parent.matrixWorld)),e.applyMatrix4(tn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ya),jn.child=e,this.dispatchEvent(jn),jn.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Si,e,Jc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Si,Qc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),d=a(e.skeletons),p=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}ft.DEFAULT_UP=new N(0,1,0);ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Bt=new N,nn=new N,Ws=new N,sn=new N,Zn=new N,$n=new N,Ka=new N,Xs=new N,qs=new N,Ys=new N,Ks=new at,js=new at,Zs=new at;class It{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Bt.subVectors(e,t),s.cross(Bt);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Bt.subVectors(s,t),nn.subVectors(n,t),Ws.subVectors(e,t);const a=Bt.dot(Bt),o=Bt.dot(nn),l=Bt.dot(Ws),c=nn.dot(nn),u=nn.dot(Ws),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;const d=1/f,p=(c*l-o*u)*d,_=(a*u-o*l)*d;return r.set(1-p-_,_,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,sn)===null?!1:sn.x>=0&&sn.y>=0&&sn.x+sn.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,sn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,sn.x),l.addScaledVector(a,sn.y),l.addScaledVector(o,sn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Ks.setScalar(0),js.setScalar(0),Zs.setScalar(0),Ks.fromBufferAttribute(e,t),js.fromBufferAttribute(e,n),Zs.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Ks,r.x),a.addScaledVector(js,r.y),a.addScaledVector(Zs,r.z),a}static isFrontFacing(e,t,n,s){return Bt.subVectors(n,t),nn.subVectors(e,t),Bt.cross(nn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bt.subVectors(this.c,this.b),nn.subVectors(this.a,this.b),Bt.cross(nn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return It.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return It.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return It.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return It.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return It.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;Zn.subVectors(s,n),$n.subVectors(r,n),Xs.subVectors(e,n);const l=Zn.dot(Xs),c=$n.dot(Xs);if(l<=0&&c<=0)return t.copy(n);qs.subVectors(e,s);const u=Zn.dot(qs),f=$n.dot(qs);if(u>=0&&f<=u)return t.copy(s);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Zn,a);Ys.subVectors(e,r);const p=Zn.dot(Ys),_=$n.dot(Ys);if(_>=0&&p<=_)return t.copy(r);const S=p*c-l*_;if(S<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(n).addScaledVector($n,o);const m=u*_-p*f;if(m<=0&&f-u>=0&&p-_>=0)return Ka.subVectors(r,s),o=(f-u)/(f-u+(p-_)),t.copy(s).addScaledVector(Ka,o);const h=1/(m+S+d);return a=S*h,o=d*h,t.copy(n).addScaledVector(Zn,a).addScaledVector($n,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const cl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gn={h:0,s:0,l:0},Yi={h:0,s:0,l:0};function $s(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Oe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Lt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ke.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=ke.workingColorSpace){return this.r=e,this.g=t,this.b=n,ke.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=ke.workingColorSpace){if(e=zc(e,1),t=He(t,0,1),n=He(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=$s(a,r,e+1/3),this.g=$s(a,r,e),this.b=$s(a,r,e-1/3)}return ke.colorSpaceToWorking(this,s),this}setStyle(e,t=Lt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Lt){const n=cl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=cn(e.r),this.g=cn(e.g),this.b=cn(e.b),this}copyLinearToSRGB(e){return this.r=li(e.r),this.g=li(e.g),this.b=li(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Lt){return ke.workingToColorSpace(gt.copy(this),e),Math.round(He(gt.r*255,0,255))*65536+Math.round(He(gt.g*255,0,255))*256+Math.round(He(gt.b*255,0,255))}getHexString(e=Lt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ke.workingColorSpace){ke.workingToColorSpace(gt.copy(this),t);const n=gt.r,s=gt.g,r=gt.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ke.workingColorSpace){return ke.workingToColorSpace(gt.copy(this),t),e.r=gt.r,e.g=gt.g,e.b=gt.b,e}getStyle(e=Lt){ke.workingToColorSpace(gt.copy(this),e);const t=gt.r,n=gt.g,s=gt.b;return e!==Lt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(gn),this.setHSL(gn.h+e,gn.s+t,gn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(gn),e.getHSL(Yi);const n=Is(gn.h,Yi.h,t),s=Is(gn.s,Yi.s,t),r=Is(gn.l,Yi.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const gt=new Oe;Oe.NAMES=cl;let th=0;class Hn extends pi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:th++}),this.uuid=En(),this.name="",this.type="Material",this.blending=oi,this.side=yn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xr,this.blendDst=Sr,this.blendEquation=Un,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Oe(0,0,0),this.blendAlpha=0,this.depthFunc=ci,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Na,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vn,this.stencilZFail=Vn,this.stencilZPass=Vn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==oi&&(n.blending=this.blending),this.side!==yn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==xr&&(n.blendSrc=this.blendSrc),this.blendDst!==Sr&&(n.blendDst=this.blendDst),this.blendEquation!==Un&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ci&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Na&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Vn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Vn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Vn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class hl extends Hn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $t,this.combine=fa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const lt=new N,Ki=new Le;let nh=0;class Nt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:nh++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=aa,this.updateRanges=[],this.gpuType=ln,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ki.fromBufferAttribute(this,t),Ki.applyMatrix3(e),this.setXY(t,Ki.x,Ki.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.applyMatrix3(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.applyMatrix4(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.applyNormalMatrix(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.transformDirection(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Yt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ke(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Yt(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Yt(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Yt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Yt(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array),s=Ke(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array),s=Ke(s,this.array),r=Ke(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==aa&&(e.usage=this.usage),e}}class ul extends Nt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class dl extends Nt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Zt extends Nt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let ih=0;const Dt=new st,Js=new ft,Jn=new N,wt=new Ni,Mi=new Ni,dt=new N;class Vt extends pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ih++}),this.uuid=En(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(rl(e)?dl:ul)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ue().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Dt.makeRotationFromQuaternion(e),this.applyMatrix4(Dt),this}rotateX(e){return Dt.makeRotationX(e),this.applyMatrix4(Dt),this}rotateY(e){return Dt.makeRotationY(e),this.applyMatrix4(Dt),this}rotateZ(e){return Dt.makeRotationZ(e),this.applyMatrix4(Dt),this}translate(e,t,n){return Dt.makeTranslation(e,t,n),this.applyMatrix4(Dt),this}scale(e,t,n){return Dt.makeScale(e,t,n),this.applyMatrix4(Dt),this}lookAt(e){return Js.lookAt(e),Js.updateMatrix(),this.applyMatrix4(Js.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Jn).negate(),this.translate(Jn.x,Jn.y,Jn.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Zt(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ni);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];wt.setFromBufferAttribute(r),this.morphTargetsRelative?(dt.addVectors(this.boundingBox.min,wt.min),this.boundingBox.expandByPoint(dt),dt.addVectors(this.boundingBox.max,wt.max),this.boundingBox.expandByPoint(dt)):(this.boundingBox.expandByPoint(wt.min),this.boundingBox.expandByPoint(wt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ts);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const n=this.boundingSphere.center;if(wt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Mi.setFromBufferAttribute(o),this.morphTargetsRelative?(dt.addVectors(wt.min,Mi.min),wt.expandByPoint(dt),dt.addVectors(wt.max,Mi.max),wt.expandByPoint(dt)):(wt.expandByPoint(Mi.min),wt.expandByPoint(Mi.max))}wt.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)dt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(dt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)dt.fromBufferAttribute(o,c),l&&(Jn.fromBufferAttribute(e,c),dt.add(Jn)),s=Math.max(s,n.distanceToSquared(dt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Nt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let L=0;L<n.count;L++)o[L]=new N,l[L]=new N;const c=new N,u=new N,f=new N,d=new Le,p=new Le,_=new Le,S=new N,m=new N;function h(L,M,x){c.fromBufferAttribute(n,L),u.fromBufferAttribute(n,M),f.fromBufferAttribute(n,x),d.fromBufferAttribute(r,L),p.fromBufferAttribute(r,M),_.fromBufferAttribute(r,x),u.sub(c),f.sub(c),p.sub(d),_.sub(d);const P=1/(p.x*_.y-_.x*p.y);isFinite(P)&&(S.copy(u).multiplyScalar(_.y).addScaledVector(f,-p.y).multiplyScalar(P),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(P),o[L].add(S),o[M].add(S),o[x].add(S),l[L].add(m),l[M].add(m),l[x].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let L=0,M=b.length;L<M;++L){const x=b[L],P=x.start,O=x.count;for(let V=P,K=P+O;V<K;V+=3)h(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const y=new N,E=new N,C=new N,w=new N;function R(L){C.fromBufferAttribute(s,L),w.copy(C);const M=o[L];y.copy(M),y.sub(C.multiplyScalar(C.dot(M))).normalize(),E.crossVectors(w,M);const P=E.dot(l[L])<0?-1:1;a.setXYZW(L,y.x,y.y,y.z,P)}for(let L=0,M=b.length;L<M;++L){const x=b[L],P=x.start,O=x.count;for(let V=P,K=P+O;V<K;V+=3)R(e.getX(V+0)),R(e.getX(V+1)),R(e.getX(V+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Nt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const s=new N,r=new N,a=new N,o=new N,l=new N,c=new N,u=new N,f=new N;if(e)for(let d=0,p=e.count;d<p;d+=3){const _=e.getX(d+0),S=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,S),a.fromBufferAttribute(t,m),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,S),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(S,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)dt.fromBufferAttribute(e,t),dt.normalize(),e.setXYZ(t,dt.x,dt.y,dt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,d=new c.constructor(l.length*u);let p=0,_=0;for(let S=0,m=l.length;S<m;S++){o.isInterleavedBufferAttribute?p=l[S]*o.data.stride+o.offset:p=l[S]*u;for(let h=0;h<u;h++)d[_++]=c[p++]}return new Nt(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Vt,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,f=c.length;u<f;u++){const d=c[u],p=e(d,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],f=r[c];for(let d=0,p=f.length;d<p;d++)u.push(f[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ja=new st,Rn=new ol,ji=new Ts,Za=new N,Zi=new N,$i=new N,Ji=new N,Qs=new N,Qi=new N,$a=new N,es=new N;class Rt extends ft{constructor(e=new Vt,t=new hl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Qi.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],f=r[l];u!==0&&(Qs.fromBufferAttribute(f,e),a?Qi.addScaledVector(Qs,u):Qi.addScaledVector(Qs.sub(t),u))}t.add(Qi)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ji.copy(n.boundingSphere),ji.applyMatrix4(r),Rn.copy(e.ray).recast(e.near),!(ji.containsPoint(Rn.origin)===!1&&(Rn.intersectSphere(ji,Za)===null||Rn.origin.distanceToSquared(Za)>(e.far-e.near)**2))&&(ja.copy(r).invert(),Rn.copy(e.ray).applyMatrix4(ja),!(n.boundingBox!==null&&Rn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Rn)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,S=d.length;_<S;_++){const m=d[_],h=a[m.materialIndex],b=Math.max(m.start,p.start),y=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let E=b,C=y;E<C;E+=3){const w=o.getX(E),R=o.getX(E+1),L=o.getX(E+2);s=ts(this,h,e,n,c,u,f,w,R,L),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,p.start),S=Math.min(o.count,p.start+p.count);for(let m=_,h=S;m<h;m+=3){const b=o.getX(m),y=o.getX(m+1),E=o.getX(m+2);s=ts(this,a,e,n,c,u,f,b,y,E),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,S=d.length;_<S;_++){const m=d[_],h=a[m.materialIndex],b=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let E=b,C=y;E<C;E+=3){const w=E,R=E+1,L=E+2;s=ts(this,h,e,n,c,u,f,w,R,L),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,p.start),S=Math.min(l.count,p.start+p.count);for(let m=_,h=S;m<h;m+=3){const b=m,y=m+1,E=m+2;s=ts(this,a,e,n,c,u,f,b,y,E),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function sh(i,e,t,n,s,r,a,o){let l;if(e.side===yt?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===yn,o),l===null)return null;es.copy(o),es.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(es);return c<t.near||c>t.far?null:{distance:c,point:es.clone(),object:i}}function ts(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Zi),i.getVertexPosition(l,$i),i.getVertexPosition(c,Ji);const u=sh(i,e,t,n,Zi,$i,Ji,$a);if(u){const f=new N;It.getBarycoord($a,Zi,$i,Ji,f),s&&(u.uv=It.getInterpolatedAttribute(s,o,l,c,f,new Le)),r&&(u.uv1=It.getInterpolatedAttribute(r,o,l,c,f,new Le)),a&&(u.normal=It.getInterpolatedAttribute(a,o,l,c,f,new N),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new N,materialIndex:0};It.getNormal(Zi,$i,Ji,d.normal),u.face=d,u.barycoord=f}return u}class mi extends Vt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],f=[];let d=0,p=0;_("z","y","x",-1,-1,n,t,e,a,r,0),_("z","y","x",1,-1,n,t,-e,a,r,1),_("x","z","y",1,1,e,n,t,s,a,2),_("x","z","y",1,-1,e,n,-t,s,a,3),_("x","y","z",1,-1,e,t,n,s,r,4),_("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Zt(c,3)),this.setAttribute("normal",new Zt(u,3)),this.setAttribute("uv",new Zt(f,2));function _(S,m,h,b,y,E,C,w,R,L,M){const x=E/R,P=C/L,O=E/2,V=C/2,K=w/2,W=R+1,q=L+1;let Z=0,H=0;const re=new N;for(let ce=0;ce<q;ce++){const Ee=ce*P-V;for(let Be=0;Be<W;Be++){const Ze=Be*x-O;re[S]=Ze*b,re[m]=Ee*y,re[h]=K,c.push(re.x,re.y,re.z),re[S]=0,re[m]=0,re[h]=w>0?1:-1,u.push(re.x,re.y,re.z),f.push(Be/R),f.push(1-ce/L),Z+=1}}for(let ce=0;ce<L;ce++)for(let Ee=0;Ee<R;Ee++){const Be=d+Ee+W*ce,Ze=d+Ee+W*(ce+1),Qe=d+(Ee+1)+W*(ce+1),We=d+(Ee+1)+W*ce;l.push(Be,Ze,We),l.push(Ze,Qe,We),H+=6}o.addGroup(p,H,M),p+=H,d+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function fi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function xt(i){const e={};for(let t=0;t<i.length;t++){const n=fi(i[t]);for(const s in n)e[s]=n[s]}return e}function rh(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function fl(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ke.workingColorSpace}const pl={clone:fi,merge:xt};var ah=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,oh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class un extends Hn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ah,this.fragmentShader=oh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fi(e.uniforms),this.uniformsGroups=rh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class ml extends ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new st,this.projectionMatrix=new st,this.projectionMatrixInverse=new st,this.coordinateSystem=jt,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const _n=new N,Ja=new Le,Qa=new Le;class Ht extends ml{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=oa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ls*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return oa*2*Math.atan(Math.tan(Ls*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){_n.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(_n.x,_n.y).multiplyScalar(-e/_n.z),_n.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(_n.x,_n.y).multiplyScalar(-e/_n.z)}getViewSize(e,t){return this.getViewBounds(e,Ja,Qa),t.subVectors(Qa,Ja)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ls*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Qn=-90,ei=1;class lh extends ft{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ht(Qn,ei,e,t);s.layers=this.layers,this.add(s);const r=new Ht(Qn,ei,e,t);r.layers=this.layers,this.add(r);const a=new Ht(Qn,ei,e,t);a.layers=this.layers,this.add(a);const o=new Ht(Qn,ei,e,t);o.layers=this.layers,this.add(o);const l=new Ht(Qn,ei,e,t);l.layers=this.layers,this.add(l);const c=new Ht(Qn,ei,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===jt)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===_s)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=S,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(f,d,p),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class gl extends Mt{constructor(e=[],t=hi,n,s,r,a,o,l,c,u){super(e,t,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ch extends hn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new gl(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new mi(5,5,5),r=new un({name:"CubemapFromEquirect",uniforms:fi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:yt,blending:Sn});r.uniforms.tEquirect.value=t;const a=new Rt(s,r),o=t.minFilter;return t.minFilter===On&&(t.minFilter=Kt),new lh(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}class Ai extends ft{constructor(){super(),this.isGroup=!0,this.type="Group"}}const hh={type:"move"};class er{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ai,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ai,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ai,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const S of e.hand.values()){const m=t.getJointPose(S,n),h=this._getHandJoint(c,S);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),p=.02,_=.005;c.inputState.pinching&&d>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(hh)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ai;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class eo extends ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $t,this.environmentIntensity=1,this.environmentRotation=new $t,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class uh{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=aa,this.updateRanges=[],this.version=0,this.uuid=En()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=En()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=En()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const vt=new N;class xs{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix4(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyNormalMatrix(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.transformDirection(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Yt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ke(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Yt(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Yt(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Yt(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Yt(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array),s=Ke(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array),s=Ke(s,this.array),r=Ke(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Nt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new xs(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class zt extends Hn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Oe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ti;const Ei=new N,ni=new N,ii=new N,si=new Le,yi=new Le,_l=new st,ns=new N,Ti=new N,is=new N,to=new Le,tr=new Le,no=new Le;class bi extends ft{constructor(e=new zt){if(super(),this.isSprite=!0,this.type="Sprite",ti===void 0){ti=new Vt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new uh(t,5);ti.setIndex([0,1,2,0,2,3]),ti.setAttribute("position",new xs(n,3,0,!1)),ti.setAttribute("uv",new xs(n,2,3,!1))}this.geometry=ti,this.material=e,this.center=new Le(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ni.setFromMatrixScale(this.matrixWorld),_l.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ii.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ni.multiplyScalar(-ii.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;ss(ns.set(-.5,-.5,0),ii,a,ni,s,r),ss(Ti.set(.5,-.5,0),ii,a,ni,s,r),ss(is.set(.5,.5,0),ii,a,ni,s,r),to.set(0,0),tr.set(1,0),no.set(1,1);let o=e.ray.intersectTriangle(ns,Ti,is,!1,Ei);if(o===null&&(ss(Ti.set(-.5,.5,0),ii,a,ni,s,r),tr.set(0,1),o=e.ray.intersectTriangle(ns,is,Ti,!1,Ei),o===null))return;const l=e.ray.origin.distanceTo(Ei);l<e.near||l>e.far||t.push({distance:l,point:Ei.clone(),uv:It.getInterpolation(Ei,ns,Ti,is,to,tr,no,new Le),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function ss(i,e,t,n,s,r){si.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(yi.x=r*si.x-s*si.y,yi.y=s*si.x+r*si.y):yi.copy(si),i.copy(e),i.x+=yi.x,i.y+=yi.y,i.applyMatrix4(_l)}const nr=new N,dh=new N,fh=new Ue;class Ln{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=nr.subVectors(n,t).cross(dh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(nr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||fh.getNormalMatrix(e),s=this.coplanarPoint(nr).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Cn=new Ts,ph=new Le(.5,.5),rs=new N;class Ma{constructor(e=new Ln,t=new Ln,n=new Ln,s=new Ln,r=new Ln,a=new Ln){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=jt,n=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],f=r[5],d=r[6],p=r[7],_=r[8],S=r[9],m=r[10],h=r[11],b=r[12],y=r[13],E=r[14],C=r[15];if(s[0].setComponents(c-a,p-u,h-_,C-b).normalize(),s[1].setComponents(c+a,p+u,h+_,C+b).normalize(),s[2].setComponents(c+o,p+f,h+S,C+y).normalize(),s[3].setComponents(c-o,p-f,h-S,C-y).normalize(),n)s[4].setComponents(l,d,m,E).normalize(),s[5].setComponents(c-l,p-d,h-m,C-E).normalize();else if(s[4].setComponents(c-l,p-d,h-m,C-E).normalize(),t===jt)s[5].setComponents(c+l,p+d,h+m,C+E).normalize();else if(t===_s)s[5].setComponents(l,d,m,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Cn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Cn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Cn)}intersectsSprite(e){Cn.center.set(0,0,0);const t=ph.distanceTo(e.center);return Cn.radius=.7071067811865476+t,Cn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Cn)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(rs.x=s.normal.x>0?e.max.x:e.min.x,rs.y=s.normal.y>0?e.max.y:e.min.y,rs.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(rs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class vl extends Hn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Oe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const io=new st,la=new ol,as=new Ts,os=new N;class mh extends ft{constructor(e=new Vt,t=new vl){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),as.copy(n.boundingSphere),as.applyMatrix4(s),as.radius+=r,e.ray.intersectsSphere(as)===!1)return;io.copy(s).invert(),la.copy(e.ray).applyMatrix4(io);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,f=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let _=d,S=p;_<S;_++){const m=c.getX(_);os.fromBufferAttribute(f,m),so(os,m,l,s,e,t,this)}}else{const d=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let _=d,S=p;_<S;_++)os.fromBufferAttribute(f,_),so(os,_,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function so(i,e,t,n,s,r,a){const o=la.distanceSqToPoint(i);if(o<t){const l=new N;la.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class gh extends Mt{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class xl extends Mt{constructor(e,t,n=zn,s,r,a,o=St,l=St,c,u=Pi,f=1){if(u!==Pi&&u!==Di)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:f};super(d,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Sa(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Sl extends Mt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class bs extends Vt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],a=[];o(s),c(n),u(),this.setAttribute("position",new Zt(r,3)),this.setAttribute("normal",new Zt(r.slice(),3)),this.setAttribute("uv",new Zt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(b){const y=new N,E=new N,C=new N;for(let w=0;w<t.length;w+=3)p(t[w+0],y),p(t[w+1],E),p(t[w+2],C),l(y,E,C,b)}function l(b,y,E,C){const w=C+1,R=[];for(let L=0;L<=w;L++){R[L]=[];const M=b.clone().lerp(E,L/w),x=y.clone().lerp(E,L/w),P=w-L;for(let O=0;O<=P;O++)O===0&&L===w?R[L][O]=M:R[L][O]=M.clone().lerp(x,O/P)}for(let L=0;L<w;L++)for(let M=0;M<2*(w-L)-1;M++){const x=Math.floor(M/2);M%2===0?(d(R[L][x+1]),d(R[L+1][x]),d(R[L][x])):(d(R[L][x+1]),d(R[L+1][x+1]),d(R[L+1][x]))}}function c(b){const y=new N;for(let E=0;E<r.length;E+=3)y.x=r[E+0],y.y=r[E+1],y.z=r[E+2],y.normalize().multiplyScalar(b),r[E+0]=y.x,r[E+1]=y.y,r[E+2]=y.z}function u(){const b=new N;for(let y=0;y<r.length;y+=3){b.x=r[y+0],b.y=r[y+1],b.z=r[y+2];const E=m(b)/2/Math.PI+.5,C=h(b)/Math.PI+.5;a.push(E,1-C)}_(),f()}function f(){for(let b=0;b<a.length;b+=6){const y=a[b+0],E=a[b+2],C=a[b+4],w=Math.max(y,E,C),R=Math.min(y,E,C);w>.9&&R<.1&&(y<.2&&(a[b+0]+=1),E<.2&&(a[b+2]+=1),C<.2&&(a[b+4]+=1))}}function d(b){r.push(b.x,b.y,b.z)}function p(b,y){const E=b*3;y.x=e[E+0],y.y=e[E+1],y.z=e[E+2]}function _(){const b=new N,y=new N,E=new N,C=new N,w=new Le,R=new Le,L=new Le;for(let M=0,x=0;M<r.length;M+=9,x+=6){b.set(r[M+0],r[M+1],r[M+2]),y.set(r[M+3],r[M+4],r[M+5]),E.set(r[M+6],r[M+7],r[M+8]),w.set(a[x+0],a[x+1]),R.set(a[x+2],a[x+3]),L.set(a[x+4],a[x+5]),C.copy(b).add(y).add(E).divideScalar(3);const P=m(C);S(w,x+0,b,P),S(R,x+2,y,P),S(L,x+4,E,P)}}function S(b,y,E,C){C<0&&b.x===1&&(a[y]=b.x-1),E.x===0&&E.z===0&&(a[y]=C/2/Math.PI+.5)}function m(b){return Math.atan2(b.z,-b.x)}function h(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bs(e.vertices,e.indices,e.radius,e.details)}}class Ea extends bs{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ea(e.radius,e.detail)}}class ya extends bs{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ya(e.radius,e.detail)}}class Fi extends Vt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,f=e/o,d=t/l,p=[],_=[],S=[],m=[];for(let h=0;h<u;h++){const b=h*d-a;for(let y=0;y<c;y++){const E=y*f-r;_.push(E,-b,0),S.push(0,0,1),m.push(y/o),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let b=0;b<o;b++){const y=b+c*h,E=b+c*(h+1),C=b+1+c*(h+1),w=b+1+c*h;p.push(y,E,w),p.push(E,C,w)}this.setIndex(p),this.setAttribute("position",new Zt(_,3)),this.setAttribute("normal",new Zt(S,3)),this.setAttribute("uv",new Zt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fi(e.width,e.height,e.widthSegments,e.heightSegments)}}class ir extends Hn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=il,this.normalScale=new Le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $t,this.combine=fa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class _h extends Hn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Cc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class vh extends Hn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Ml extends ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Oe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const sr=new st,ro=new N,ao=new N;class xh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Le(512,512),this.mapType=Gt,this.map=null,this.mapPass=null,this.matrix=new st,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ma,this._frameExtents=new Le(1,1),this._viewportCount=1,this._viewports=[new at(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;ro.setFromMatrixPosition(e.matrixWorld),t.position.copy(ro),ao.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ao),t.updateMatrixWorld(),sr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sr,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(sr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Ss extends ml{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Sh extends xh{constructor(){super(new Ss(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Mh extends Ml{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.target=new ft,this.shadow=new Sh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Eh extends Ml{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class yh extends Ht{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Th{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function oo(i,e,t,n){const s=bh(n);switch(t){case Qo:return i*e;case tl:return i*e/s.components*s.byteLength;case _a:return i*e/s.components*s.byteLength;case nl:return i*e*2/s.components*s.byteLength;case va:return i*e*2/s.components*s.byteLength;case el:return i*e*3/s.components*s.byteLength;case Ut:return i*e*4/s.components*s.byteLength;case xa:return i*e*4/s.components*s.byteLength;case us:case ds:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case fs:case ps:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ir:case Nr:return Math.max(i,16)*Math.max(e,8)/4;case Lr:case Ur:return Math.max(i,8)*Math.max(e,8)/2;case Fr:case Or:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Br:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case zr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Hr:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Gr:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Vr:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case kr:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Wr:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Xr:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case qr:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Yr:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Kr:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case jr:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Zr:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case $r:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Jr:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Qr:case ea:case ta:return Math.ceil(i/4)*Math.ceil(e/4)*16;case na:case ia:return Math.ceil(i/4)*Math.ceil(e/4)*8;case sa:case ra:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function bh(i){switch(i){case Gt:case jo:return{byteLength:1,components:1};case Ri:case Zo:case Ii:return{byteLength:2,components:1};case ma:case ga:return{byteLength:2,components:4};case zn:case pa:case ln:return{byteLength:4,components:1};case $o:case Jo:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:da}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=da);function El(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Ah(i){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,f=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){const u=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,u);else{f.sort((p,_)=>p.start-_.start);let d=0;for(let p=1;p<f.length;p++){const _=f[d],S=f[p];S.start<=_.start+_.count+1?_.count=Math.max(_.count,S.start+S.count-_.start):(++d,f[d]=S)}f.length=d+1;for(let p=0,_=f.length;p<_;p++){const S=f[p];i.bufferSubData(c,S.start*u.BYTES_PER_ELEMENT,u,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var wh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Rh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ch=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ph=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Dh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Lh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ih=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Uh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Nh=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Fh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Oh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Bh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zh=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Hh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Gh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Vh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,kh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Yh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Kh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,jh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Zh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,$h=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Jh=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Qh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,eu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,iu="gl_FragColor = linearToOutputTexel( gl_FragColor );",su=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ru=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,au=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ou=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,lu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,hu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,uu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,du=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,mu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_u=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,xu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Su=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Mu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Eu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Tu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,bu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Au=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,wu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ru=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Cu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Pu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Du=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Iu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Uu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Nu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Fu=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ou=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Bu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Hu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vu=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ku=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Xu=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,qu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ku=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ju=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Zu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$u=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ju=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Qu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ed=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,td=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,nd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,id=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ad=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,od=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ld=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,cd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,hd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ud=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,dd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,pd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,md=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,gd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_d=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Sd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Md=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ed=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,yd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Td=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,bd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ad=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wd=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ld=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Id=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ud=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Nd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Fd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Od=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bd=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,zd=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Hd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Gd=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vd=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kd=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wd=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Xd=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qd=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Yd=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Kd=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jd=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zd=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,$d=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jd=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qd=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ef=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,tf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,rf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,af=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Fe={alphahash_fragment:wh,alphahash_pars_fragment:Rh,alphamap_fragment:Ch,alphamap_pars_fragment:Ph,alphatest_fragment:Dh,alphatest_pars_fragment:Lh,aomap_fragment:Ih,aomap_pars_fragment:Uh,batching_pars_vertex:Nh,batching_vertex:Fh,begin_vertex:Oh,beginnormal_vertex:Bh,bsdfs:zh,iridescence_fragment:Hh,bumpmap_pars_fragment:Gh,clipping_planes_fragment:Vh,clipping_planes_pars_fragment:kh,clipping_planes_pars_vertex:Wh,clipping_planes_vertex:Xh,color_fragment:qh,color_pars_fragment:Yh,color_pars_vertex:Kh,color_vertex:jh,common:Zh,cube_uv_reflection_fragment:$h,defaultnormal_vertex:Jh,displacementmap_pars_vertex:Qh,displacementmap_vertex:eu,emissivemap_fragment:tu,emissivemap_pars_fragment:nu,colorspace_fragment:iu,colorspace_pars_fragment:su,envmap_fragment:ru,envmap_common_pars_fragment:au,envmap_pars_fragment:ou,envmap_pars_vertex:lu,envmap_physical_pars_fragment:xu,envmap_vertex:cu,fog_vertex:hu,fog_pars_vertex:uu,fog_fragment:du,fog_pars_fragment:fu,gradientmap_pars_fragment:pu,lightmap_pars_fragment:mu,lights_lambert_fragment:gu,lights_lambert_pars_fragment:_u,lights_pars_begin:vu,lights_toon_fragment:Su,lights_toon_pars_fragment:Mu,lights_phong_fragment:Eu,lights_phong_pars_fragment:yu,lights_physical_fragment:Tu,lights_physical_pars_fragment:bu,lights_fragment_begin:Au,lights_fragment_maps:wu,lights_fragment_end:Ru,logdepthbuf_fragment:Cu,logdepthbuf_pars_fragment:Pu,logdepthbuf_pars_vertex:Du,logdepthbuf_vertex:Lu,map_fragment:Iu,map_pars_fragment:Uu,map_particle_fragment:Nu,map_particle_pars_fragment:Fu,metalnessmap_fragment:Ou,metalnessmap_pars_fragment:Bu,morphinstance_vertex:zu,morphcolor_vertex:Hu,morphnormal_vertex:Gu,morphtarget_pars_vertex:Vu,morphtarget_vertex:ku,normal_fragment_begin:Wu,normal_fragment_maps:Xu,normal_pars_fragment:qu,normal_pars_vertex:Yu,normal_vertex:Ku,normalmap_pars_fragment:ju,clearcoat_normal_fragment_begin:Zu,clearcoat_normal_fragment_maps:$u,clearcoat_pars_fragment:Ju,iridescence_pars_fragment:Qu,opaque_fragment:ed,packing:td,premultiplied_alpha_fragment:nd,project_vertex:id,dithering_fragment:sd,dithering_pars_fragment:rd,roughnessmap_fragment:ad,roughnessmap_pars_fragment:od,shadowmap_pars_fragment:ld,shadowmap_pars_vertex:cd,shadowmap_vertex:hd,shadowmask_pars_fragment:ud,skinbase_vertex:dd,skinning_pars_vertex:fd,skinning_vertex:pd,skinnormal_vertex:md,specularmap_fragment:gd,specularmap_pars_fragment:_d,tonemapping_fragment:vd,tonemapping_pars_fragment:xd,transmission_fragment:Sd,transmission_pars_fragment:Md,uv_pars_fragment:Ed,uv_pars_vertex:yd,uv_vertex:Td,worldpos_vertex:bd,background_vert:Ad,background_frag:wd,backgroundCube_vert:Rd,backgroundCube_frag:Cd,cube_vert:Pd,cube_frag:Dd,depth_vert:Ld,depth_frag:Id,distanceRGBA_vert:Ud,distanceRGBA_frag:Nd,equirect_vert:Fd,equirect_frag:Od,linedashed_vert:Bd,linedashed_frag:zd,meshbasic_vert:Hd,meshbasic_frag:Gd,meshlambert_vert:Vd,meshlambert_frag:kd,meshmatcap_vert:Wd,meshmatcap_frag:Xd,meshnormal_vert:qd,meshnormal_frag:Yd,meshphong_vert:Kd,meshphong_frag:jd,meshphysical_vert:Zd,meshphysical_frag:$d,meshtoon_vert:Jd,meshtoon_frag:Qd,points_vert:ef,points_frag:tf,shadow_vert:nf,shadow_frag:sf,sprite_vert:rf,sprite_frag:af},se={common:{diffuse:{value:new Oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},envMapRotation:{value:new Ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new Le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new Oe(16777215)},opacity:{value:1},center:{value:new Le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},qt={basic:{uniforms:xt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:xt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Oe(0)}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:xt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Oe(0)},specular:{value:new Oe(1118481)},shininess:{value:30}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:xt([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new Oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:xt([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new Oe(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:xt([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:xt([se.points,se.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:xt([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:xt([se.common,se.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:xt([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:xt([se.sprite,se.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ue}},vertexShader:Fe.backgroundCube_vert,fragmentShader:Fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distanceRGBA:{uniforms:xt([se.common,se.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distanceRGBA_vert,fragmentShader:Fe.distanceRGBA_frag},shadow:{uniforms:xt([se.lights,se.fog,{color:{value:new Oe(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};qt.physical={uniforms:xt([qt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new Le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new Oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new Le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new Oe(0)},specularColor:{value:new Oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new Le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};const ls={r:0,b:0,g:0},Pn=new $t,of=new st;function lf(i,e,t,n,s,r,a){const o=new Oe(0);let l=r===!0?0:1,c,u,f=null,d=0,p=null;function _(y){let E=y.isScene===!0?y.background:null;return E&&E.isTexture&&(E=(y.backgroundBlurriness>0?t:e).get(E)),E}function S(y){let E=!1;const C=_(y);C===null?h(o,l):C&&C.isColor&&(h(C,1),E=!0);const w=i.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(y,E){const C=_(E);C&&(C.isCubeTexture||C.mapping===ys)?(u===void 0&&(u=new Rt(new mi(1,1,1),new un({name:"BackgroundCubeMaterial",uniforms:fi(qt.backgroundCube.uniforms),vertexShader:qt.backgroundCube.vertexShader,fragmentShader:qt.backgroundCube.fragmentShader,side:yt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,R,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Pn.copy(E.backgroundRotation),Pn.x*=-1,Pn.y*=-1,Pn.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Pn.y*=-1,Pn.z*=-1),u.material.uniforms.envMap.value=C,u.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(of.makeRotationFromEuler(Pn)),u.material.toneMapped=ke.getTransfer(C.colorSpace)!==Ye,(f!==C||d!==C.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,f=C,d=C.version,p=i.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new Rt(new Fi(2,2),new un({name:"BackgroundMaterial",uniforms:fi(qt.background.uniforms),vertexShader:qt.background.vertexShader,fragmentShader:qt.background.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=ke.getTransfer(C.colorSpace)!==Ye,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(f!==C||d!==C.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,f=C,d=C.version,p=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function h(y,E){y.getRGB(ls,fl(i)),n.buffers.color.setClear(ls.r,ls.g,ls.b,E,a)}function b(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,E=1){o.set(y),l=E,h(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,h(o,l)},render:S,addToRenderList:m,dispose:b}}function cf(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function o(x,P,O,V,K){let W=!1;const q=f(V,O,P);r!==q&&(r=q,c(r.object)),W=p(x,V,O,K),W&&_(x,V,O,K),K!==null&&e.update(K,i.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,E(x,P,O,V),K!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function l(){return i.createVertexArray()}function c(x){return i.bindVertexArray(x)}function u(x){return i.deleteVertexArray(x)}function f(x,P,O){const V=O.wireframe===!0;let K=n[x.id];K===void 0&&(K={},n[x.id]=K);let W=K[P.id];W===void 0&&(W={},K[P.id]=W);let q=W[V];return q===void 0&&(q=d(l()),W[V]=q),q}function d(x){const P=[],O=[],V=[];for(let K=0;K<t;K++)P[K]=0,O[K]=0,V[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:O,attributeDivisors:V,object:x,attributes:{},index:null}}function p(x,P,O,V){const K=r.attributes,W=P.attributes;let q=0;const Z=O.getAttributes();for(const H in Z)if(Z[H].location>=0){const ce=K[H];let Ee=W[H];if(Ee===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(Ee=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(Ee=x.instanceColor)),ce===void 0||ce.attribute!==Ee||Ee&&ce.data!==Ee.data)return!0;q++}return r.attributesNum!==q||r.index!==V}function _(x,P,O,V){const K={},W=P.attributes;let q=0;const Z=O.getAttributes();for(const H in Z)if(Z[H].location>=0){let ce=W[H];ce===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(ce=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(ce=x.instanceColor));const Ee={};Ee.attribute=ce,ce&&ce.data&&(Ee.data=ce.data),K[H]=Ee,q++}r.attributes=K,r.attributesNum=q,r.index=V}function S(){const x=r.newAttributes;for(let P=0,O=x.length;P<O;P++)x[P]=0}function m(x){h(x,0)}function h(x,P){const O=r.newAttributes,V=r.enabledAttributes,K=r.attributeDivisors;O[x]=1,V[x]===0&&(i.enableVertexAttribArray(x),V[x]=1),K[x]!==P&&(i.vertexAttribDivisor(x,P),K[x]=P)}function b(){const x=r.newAttributes,P=r.enabledAttributes;for(let O=0,V=P.length;O<V;O++)P[O]!==x[O]&&(i.disableVertexAttribArray(O),P[O]=0)}function y(x,P,O,V,K,W,q){q===!0?i.vertexAttribIPointer(x,P,O,K,W):i.vertexAttribPointer(x,P,O,V,K,W)}function E(x,P,O,V){S();const K=V.attributes,W=O.getAttributes(),q=P.defaultAttributeValues;for(const Z in W){const H=W[Z];if(H.location>=0){let re=K[Z];if(re===void 0&&(Z==="instanceMatrix"&&x.instanceMatrix&&(re=x.instanceMatrix),Z==="instanceColor"&&x.instanceColor&&(re=x.instanceColor)),re!==void 0){const ce=re.normalized,Ee=re.itemSize,Be=e.get(re);if(Be===void 0)continue;const Ze=Be.buffer,Qe=Be.type,We=Be.bytesPerElement,X=Qe===i.INT||Qe===i.UNSIGNED_INT||re.gpuType===pa;if(re.isInterleavedBufferAttribute){const $=re.data,de=$.stride,Ce=re.offset;if($.isInstancedInterleavedBuffer){for(let Me=0;Me<H.locationSize;Me++)h(H.location+Me,$.meshPerAttribute);x.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let Me=0;Me<H.locationSize;Me++)m(H.location+Me);i.bindBuffer(i.ARRAY_BUFFER,Ze);for(let Me=0;Me<H.locationSize;Me++)y(H.location+Me,Ee/H.locationSize,Qe,ce,de*We,(Ce+Ee/H.locationSize*Me)*We,X)}else{if(re.isInstancedBufferAttribute){for(let $=0;$<H.locationSize;$++)h(H.location+$,re.meshPerAttribute);x.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let $=0;$<H.locationSize;$++)m(H.location+$);i.bindBuffer(i.ARRAY_BUFFER,Ze);for(let $=0;$<H.locationSize;$++)y(H.location+$,Ee/H.locationSize,Qe,ce,Ee*We,Ee/H.locationSize*$*We,X)}}else if(q!==void 0){const ce=q[Z];if(ce!==void 0)switch(ce.length){case 2:i.vertexAttrib2fv(H.location,ce);break;case 3:i.vertexAttrib3fv(H.location,ce);break;case 4:i.vertexAttrib4fv(H.location,ce);break;default:i.vertexAttrib1fv(H.location,ce)}}}}b()}function C(){L();for(const x in n){const P=n[x];for(const O in P){const V=P[O];for(const K in V)u(V[K].object),delete V[K];delete P[O]}delete n[x]}}function w(x){if(n[x.id]===void 0)return;const P=n[x.id];for(const O in P){const V=P[O];for(const K in V)u(V[K].object),delete V[K];delete P[O]}delete n[x.id]}function R(x){for(const P in n){const O=n[P];if(O[x.id]===void 0)continue;const V=O[x.id];for(const K in V)u(V[K].object),delete V[K];delete O[x.id]}}function L(){M(),a=!0,r!==s&&(r=s,c(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:L,resetDefaultState:M,dispose:C,releaseStatesOfGeometry:w,releaseStatesOfProgram:R,initAttributes:S,enableAttribute:m,disableUnusedAttributes:b}}function hf(i,e,t){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,f){f!==0&&(i.drawArraysInstanced(n,c,u,f),t.update(u,n,f))}function o(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,f);let p=0;for(let _=0;_<f;_++)p+=u[_];t.update(p,n,1)}function l(c,u,f,d){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)a(c[_],u[_],d[_]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,f);let _=0;for(let S=0;S<f;S++)_+=u[S]*d[S];t.update(_,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function uf(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==Ut&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const L=R===Ii&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Gt&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==ln&&!L)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),h=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=_>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:_,maxTextureSize:S,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:b,maxVaryings:y,maxFragmentUniforms:E,vertexTextures:C,maxSamples:w}}function df(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new Ln,o=new Ue,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||n!==0||s;return s=d,n=f.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,p){const _=f.clippingPlanes,S=f.clipIntersection,m=f.clipShadows,h=i.get(f);if(!s||_===null||_.length===0||r&&!m)r?u(null):c();else{const b=r?0:n,y=b*4;let E=h.clippingState||null;l.value=E,E=u(_,d,y,p);for(let C=0;C!==y;++C)E[C]=t[C];h.clippingState=E,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,d,p,_){const S=f!==null?f.length:0;let m=null;if(S!==0){if(m=l.value,_!==!0||m===null){const h=p+S*4,b=d.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<h)&&(m=new Float32Array(h));for(let y=0,E=p;y!==S;++y,E+=4)a.copy(f[y]).applyMatrix4(b,o),a.normal.toArray(m,E),m[E+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,m}}function ff(i){let e=new WeakMap;function t(a,o){return o===Rr?a.mapping=hi:o===Cr&&(a.mapping=ui),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Rr||o===Cr)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new ch(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const ai=4,lo=[.125,.215,.35,.446,.526,.582],Nn=20,rr=new Ss,co=new Oe;let ar=null,or=0,lr=0,cr=!1;const In=(1+Math.sqrt(5))/2,ri=1/In,ho=[new N(-In,ri,0),new N(In,ri,0),new N(-ri,0,In),new N(ri,0,In),new N(0,In,-ri),new N(0,In,ri),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)],pf=new N;class uo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:o=pf}=r;ar=this._renderer.getRenderTarget(),or=this._renderer.getActiveCubeFace(),lr=this._renderer.getActiveMipmapLevel(),cr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=po(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ar,or,lr),this._renderer.xr.enabled=cr,e.scissorTest=!1,cs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===hi||e.mapping===ui?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ar=this._renderer.getRenderTarget(),or=this._renderer.getActiveCubeFace(),lr=this._renderer.getActiveMipmapLevel(),cr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Kt,minFilter:Kt,generateMipmaps:!1,type:Ii,format:Ut,colorSpace:di,depthBuffer:!1},s=fo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fo(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=mf(r)),this._blurMaterial=gf(r,e,t)}return s}_compileMaterial(e){const t=new Rt(this._lodPlanes[0],e);this._renderer.compile(t,rr)}_sceneToCubeUV(e,t,n,s,r){const l=new Ht(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,p=f.toneMapping;f.getClearColor(co),f.toneMapping=Mn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null));const S=new hl({name:"PMREM.Background",side:yt,depthWrite:!1,depthTest:!1}),m=new Rt(new mi,S);let h=!1;const b=e.background;b?b.isColor&&(S.color.copy(b),e.background=null,h=!0):(S.color.copy(co),h=!0);for(let y=0;y<6;y++){const E=y%3;E===0?(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[y],r.y,r.z)):E===1?(l.up.set(0,0,c[y]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[y],r.z)):(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[y]));const C=this._cubeSize;cs(s,E*C,y>2?C:0,C,C),f.setRenderTarget(s),h&&f.render(m,l),f.render(e,l)}m.geometry.dispose(),m.material.dispose(),f.toneMapping=p,f.autoClear=d,e.background=b}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===hi||e.mapping===ui;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=mo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=po());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Rt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;cs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,rr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=ho[(s-r-1)%ho.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Rt(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Nn-1),S=r/_,m=isFinite(r)?1+Math.floor(u*S):Nn;m>Nn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Nn}`);const h=[];let b=0;for(let R=0;R<Nn;++R){const L=R/S,M=Math.exp(-L*L/2);h.push(M),R===0?b+=M:R<m&&(b+=2*M)}for(let R=0;R<h.length;R++)h[R]=h[R]/b;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=h,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:y}=this;d.dTheta.value=_,d.mipInt.value=y-n;const E=this._sizeLods[s],C=3*E*(s>y-ai?s-y+ai:0),w=4*(this._cubeSize-E);cs(t,C,w,3*E,2*E),l.setRenderTarget(t),l.render(f,rr)}}function mf(i){const e=[],t=[],n=[];let s=i;const r=i-ai+1+lo.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>i-ai?l=lo[a-i+ai-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,_=6,S=3,m=2,h=1,b=new Float32Array(S*_*p),y=new Float32Array(m*_*p),E=new Float32Array(h*_*p);for(let w=0;w<p;w++){const R=w%3*2/3-1,L=w>2?0:-1,M=[R,L,0,R+2/3,L,0,R+2/3,L+1,0,R,L,0,R+2/3,L+1,0,R,L+1,0];b.set(M,S*_*w),y.set(d,m*_*w);const x=[w,w,w,w,w,w];E.set(x,h*_*w)}const C=new Vt;C.setAttribute("position",new Nt(b,S)),C.setAttribute("uv",new Nt(y,m)),C.setAttribute("faceIndex",new Nt(E,h)),e.push(C),s>ai&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function fo(i,e,t){const n=new hn(i,e,t);return n.texture.mapping=ys,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function cs(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function gf(i,e,t){const n=new Float32Array(Nn),s=new N(0,1,0);return new un({name:"SphericalGaussianBlur",defines:{n:Nn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ta(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Sn,depthTest:!1,depthWrite:!1})}function po(){return new un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ta(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Sn,depthTest:!1,depthWrite:!1})}function mo(){return new un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ta(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Sn,depthTest:!1,depthWrite:!1})}function Ta(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function _f(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Rr||l===Cr,u=l===hi||l===ui;if(c||u){let f=e.get(o);const d=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new uo(i)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const p=o.image;return c&&p&&p.height>0||u&&p&&s(p)?(t===null&&(t=new uo(i)),f=c?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",r),f.texture):null}}}return o}function s(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function vf(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Li("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function xf(i,e,t,n){const s={},r=new WeakMap;function a(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);d.removeEventListener("dispose",a),delete s[d.id];const p=r.get(d);p&&(e.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(f,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const p in d)e.update(d[p],i.ARRAY_BUFFER)}function c(f){const d=[],p=f.index,_=f.attributes.position;let S=0;if(p!==null){const b=p.array;S=p.version;for(let y=0,E=b.length;y<E;y+=3){const C=b[y+0],w=b[y+1],R=b[y+2];d.push(C,w,w,R,R,C)}}else if(_!==void 0){const b=_.array;S=_.version;for(let y=0,E=b.length/3-1;y<E;y+=3){const C=y+0,w=y+1,R=y+2;d.push(C,w,w,R,R,C)}}else return;const m=new(rl(d)?dl:ul)(d,1);m.version=S;const h=r.get(f);h&&e.remove(h),r.set(f,m)}function u(f){const d=r.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function Sf(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,p){i.drawElements(n,p,r,d*a),t.update(p,n,1)}function c(d,p,_){_!==0&&(i.drawElementsInstanced(n,p,r,d*a,_),t.update(p,n,_))}function u(d,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,_);let m=0;for(let h=0;h<_;h++)m+=p[h];t.update(m,n,1)}function f(d,p,_,S){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<d.length;h++)c(d[h]/a,p[h],S[h]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,S,0,_);let h=0;for(let b=0;b<_;b++)h+=p[b]*S[b];t.update(h,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function Mf(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Ef(i,e,t){const n=new WeakMap,s=new at;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let d=n.get(o);if(d===void 0||d.count!==f){let x=function(){L.dispose(),n.delete(o),o.removeEventListener("dispose",x)};var p=x;d!==void 0&&d.texture.dispose();const _=o.morphAttributes.position!==void 0,S=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,h=o.morphAttributes.position||[],b=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let E=0;_===!0&&(E=1),S===!0&&(E=2),m===!0&&(E=3);let C=o.attributes.position.count*E,w=1;C>e.maxTextureSize&&(w=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const R=new Float32Array(C*w*4*f),L=new al(R,C,w,f);L.type=ln,L.needsUpdate=!0;const M=E*4;for(let P=0;P<f;P++){const O=h[P],V=b[P],K=y[P],W=C*w*4*P;for(let q=0;q<O.count;q++){const Z=q*M;_===!0&&(s.fromBufferAttribute(O,q),R[W+Z+0]=s.x,R[W+Z+1]=s.y,R[W+Z+2]=s.z,R[W+Z+3]=0),S===!0&&(s.fromBufferAttribute(V,q),R[W+Z+4]=s.x,R[W+Z+5]=s.y,R[W+Z+6]=s.z,R[W+Z+7]=0),m===!0&&(s.fromBufferAttribute(K,q),R[W+Z+8]=s.x,R[W+Z+9]=s.y,R[W+Z+10]=s.z,R[W+Z+11]=K.itemSize===4?s.w:1)}}d={count:f,texture:L,size:new Le(C,w)},n.set(o,d),o.addEventListener("dispose",x)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const S=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(i,"morphTargetBaseInfluence",S),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function yf(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,f=e.get(l,u);if(s.get(f)!==c&&(e.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return f}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const yl=new Mt,go=new xl(1,1),Tl=new al,bl=new Yc,Al=new gl,_o=[],vo=[],xo=new Float32Array(16),So=new Float32Array(9),Mo=new Float32Array(4);function gi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=_o[s];if(r===void 0&&(r=new Float32Array(s),_o[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function ct(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function ht(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function As(i,e){let t=vo[e];t===void 0&&(t=new Int32Array(e),vo[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Tf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function bf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ct(t,e))return;i.uniform2fv(this.addr,e),ht(t,e)}}function Af(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ct(t,e))return;i.uniform3fv(this.addr,e),ht(t,e)}}function wf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ct(t,e))return;i.uniform4fv(this.addr,e),ht(t,e)}}function Rf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ct(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),ht(t,e)}else{if(ct(t,n))return;Mo.set(n),i.uniformMatrix2fv(this.addr,!1,Mo),ht(t,n)}}function Cf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ct(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),ht(t,e)}else{if(ct(t,n))return;So.set(n),i.uniformMatrix3fv(this.addr,!1,So),ht(t,n)}}function Pf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ct(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),ht(t,e)}else{if(ct(t,n))return;xo.set(n),i.uniformMatrix4fv(this.addr,!1,xo),ht(t,n)}}function Df(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Lf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ct(t,e))return;i.uniform2iv(this.addr,e),ht(t,e)}}function If(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ct(t,e))return;i.uniform3iv(this.addr,e),ht(t,e)}}function Uf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ct(t,e))return;i.uniform4iv(this.addr,e),ht(t,e)}}function Nf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Ff(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ct(t,e))return;i.uniform2uiv(this.addr,e),ht(t,e)}}function Of(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ct(t,e))return;i.uniform3uiv(this.addr,e),ht(t,e)}}function Bf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ct(t,e))return;i.uniform4uiv(this.addr,e),ht(t,e)}}function zf(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(go.compareFunction=sl,r=go):r=yl,t.setTexture2D(e||r,s)}function Hf(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||bl,s)}function Gf(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Al,s)}function Vf(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Tl,s)}function kf(i){switch(i){case 5126:return Tf;case 35664:return bf;case 35665:return Af;case 35666:return wf;case 35674:return Rf;case 35675:return Cf;case 35676:return Pf;case 5124:case 35670:return Df;case 35667:case 35671:return Lf;case 35668:case 35672:return If;case 35669:case 35673:return Uf;case 5125:return Nf;case 36294:return Ff;case 36295:return Of;case 36296:return Bf;case 35678:case 36198:case 36298:case 36306:case 35682:return zf;case 35679:case 36299:case 36307:return Hf;case 35680:case 36300:case 36308:case 36293:return Gf;case 36289:case 36303:case 36311:case 36292:return Vf}}function Wf(i,e){i.uniform1fv(this.addr,e)}function Xf(i,e){const t=gi(e,this.size,2);i.uniform2fv(this.addr,t)}function qf(i,e){const t=gi(e,this.size,3);i.uniform3fv(this.addr,t)}function Yf(i,e){const t=gi(e,this.size,4);i.uniform4fv(this.addr,t)}function Kf(i,e){const t=gi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function jf(i,e){const t=gi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Zf(i,e){const t=gi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function $f(i,e){i.uniform1iv(this.addr,e)}function Jf(i,e){i.uniform2iv(this.addr,e)}function Qf(i,e){i.uniform3iv(this.addr,e)}function ep(i,e){i.uniform4iv(this.addr,e)}function tp(i,e){i.uniform1uiv(this.addr,e)}function np(i,e){i.uniform2uiv(this.addr,e)}function ip(i,e){i.uniform3uiv(this.addr,e)}function sp(i,e){i.uniform4uiv(this.addr,e)}function rp(i,e,t){const n=this.cache,s=e.length,r=As(t,s);ct(n,r)||(i.uniform1iv(this.addr,r),ht(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||yl,r[a])}function ap(i,e,t){const n=this.cache,s=e.length,r=As(t,s);ct(n,r)||(i.uniform1iv(this.addr,r),ht(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||bl,r[a])}function op(i,e,t){const n=this.cache,s=e.length,r=As(t,s);ct(n,r)||(i.uniform1iv(this.addr,r),ht(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Al,r[a])}function lp(i,e,t){const n=this.cache,s=e.length,r=As(t,s);ct(n,r)||(i.uniform1iv(this.addr,r),ht(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Tl,r[a])}function cp(i){switch(i){case 5126:return Wf;case 35664:return Xf;case 35665:return qf;case 35666:return Yf;case 35674:return Kf;case 35675:return jf;case 35676:return Zf;case 5124:case 35670:return $f;case 35667:case 35671:return Jf;case 35668:case 35672:return Qf;case 35669:case 35673:return ep;case 5125:return tp;case 36294:return np;case 36295:return ip;case 36296:return sp;case 35678:case 36198:case 36298:case 36306:case 35682:return rp;case 35679:case 36299:case 36307:return ap;case 35680:case 36300:case 36308:case 36293:return op;case 36289:case 36303:case 36311:case 36292:return lp}}class hp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=kf(t.type)}}class up{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=cp(t.type)}}class dp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const hr=/(\w+)(\])?(\[|\.)?/g;function Eo(i,e){i.seq.push(e),i.map[e.id]=e}function fp(i,e,t){const n=i.name,s=n.length;for(hr.lastIndex=0;;){const r=hr.exec(n),a=hr.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Eo(t,c===void 0?new hp(o,i,e):new up(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new dp(o),Eo(t,f)),t=f}}}class ms{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);fp(r,a,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function yo(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const pp=37297;let mp=0;function gp(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const To=new Ue;function _p(i){ke._getMatrix(To,ke.workingColorSpace,i);const e=`mat3( ${To.elements.map(t=>t.toFixed(4))} )`;switch(ke.getTransfer(i)){case gs:return[e,"LinearTransferOETF"];case Ye:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function bo(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+gp(i.getShaderSource(e),o)}else return r}function vp(i,e){const t=_p(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function xp(i,e){let t;switch(e){case Mc:t="Linear";break;case Ec:t="Reinhard";break;case yc:t="Cineon";break;case Tc:t="ACESFilmic";break;case Ac:t="AgX";break;case wc:t="Neutral";break;case bc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const hs=new N;function Sp(){ke.getLuminanceCoefficients(hs);const i=hs.x.toFixed(4),e=hs.y.toFixed(4),t=hs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Mp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wi).join(`
`)}function Ep(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function yp(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function wi(i){return i!==""}function Ao(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function wo(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Tp=/^[ \t]*#include +<([\w\d./]+)>/gm;function ca(i){return i.replace(Tp,Ap)}const bp=new Map;function Ap(i,e){let t=Fe[e];if(t===void 0){const n=bp.get(e);if(n!==void 0)t=Fe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ca(t)}const wp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ro(i){return i.replace(wp,Rp)}function Rp(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Co(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Cp(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Yo?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===ec?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===rn&&(e="SHADOWMAP_TYPE_VSM"),e}function Pp(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case hi:case ui:e="ENVMAP_TYPE_CUBE";break;case ys:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Dp(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===ui&&(e="ENVMAP_MODE_REFRACTION"),e}function Lp(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case fa:e="ENVMAP_BLENDING_MULTIPLY";break;case xc:e="ENVMAP_BLENDING_MIX";break;case Sc:e="ENVMAP_BLENDING_ADD";break}return e}function Ip(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Up(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Cp(t),c=Pp(t),u=Dp(t),f=Lp(t),d=Ip(t),p=Mp(t),_=Ep(r),S=s.createProgram();let m,h,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(wi).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(wi).join(`
`),h.length>0&&(h+=`
`)):(m=[Co(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wi).join(`
`),h=[Co(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Mn?"#define TONE_MAPPING":"",t.toneMapping!==Mn?Fe.tonemapping_pars_fragment:"",t.toneMapping!==Mn?xp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Fe.colorspace_pars_fragment,vp("linearToOutputTexel",t.outputColorSpace),Sp(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(wi).join(`
`)),a=ca(a),a=Ao(a,t),a=wo(a,t),o=ca(o),o=Ao(o,t),o=wo(o,t),a=Ro(a),o=Ro(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",t.glslVersion===Fa?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Fa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const y=b+m+a,E=b+h+o,C=yo(s,s.VERTEX_SHADER,y),w=yo(s,s.FRAGMENT_SHADER,E);s.attachShader(S,C),s.attachShader(S,w),t.index0AttributeName!==void 0?s.bindAttribLocation(S,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(S,0,"position"),s.linkProgram(S);function R(P){if(i.debug.checkShaderErrors){const O=s.getProgramInfoLog(S)||"",V=s.getShaderInfoLog(C)||"",K=s.getShaderInfoLog(w)||"",W=O.trim(),q=V.trim(),Z=K.trim();let H=!0,re=!0;if(s.getProgramParameter(S,s.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,S,C,w);else{const ce=bo(s,C,"vertex"),Ee=bo(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(S,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+W+`
`+ce+`
`+Ee)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(q===""||Z==="")&&(re=!1);re&&(P.diagnostics={runnable:H,programLog:W,vertexShader:{log:q,prefix:m},fragmentShader:{log:Z,prefix:h}})}s.deleteShader(C),s.deleteShader(w),L=new ms(s,S),M=yp(s,S)}let L;this.getUniforms=function(){return L===void 0&&R(this),L};let M;this.getAttributes=function(){return M===void 0&&R(this),M};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(S,pp)),x},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=mp++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=C,this.fragmentShader=w,this}let Np=0;class Fp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Op(e),t.set(e,n)),n}}class Op{constructor(e){this.id=Np++,this.code=e,this.usedTimes=0}}function Bp(i,e,t,n,s,r,a){const o=new ll,l=new Fp,c=new Set,u=[],f=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,x,P,O,V){const K=O.fog,W=V.geometry,q=M.isMeshStandardMaterial?O.environment:null,Z=(M.isMeshStandardMaterial?t:e).get(M.envMap||q),H=Z&&Z.mapping===ys?Z.image.height:null,re=_[M.type];M.precision!==null&&(p=s.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const ce=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Ee=ce!==void 0?ce.length:0;let Be=0;W.morphAttributes.position!==void 0&&(Be=1),W.morphAttributes.normal!==void 0&&(Be=2),W.morphAttributes.color!==void 0&&(Be=3);let Ze,Qe,We,X;if(re){const Xe=qt[re];Ze=Xe.vertexShader,Qe=Xe.fragmentShader}else Ze=M.vertexShader,Qe=M.fragmentShader,l.update(M),We=l.getVertexShaderID(M),X=l.getFragmentShaderID(M);const $=i.getRenderTarget(),de=i.state.buffers.depth.getReversed(),Ce=V.isInstancedMesh===!0,Me=V.isBatchedMesh===!0,Ge=!!M.map,pt=!!M.matcap,A=!!Z,et=!!M.aoMap,De=!!M.lightMap,we=!!M.bumpMap,me=!!M.normalMap,tt=!!M.displacementMap,ge=!!M.emissiveMap,Ne=!!M.metalnessMap,ut=!!M.roughnessMap,ot=M.anisotropy>0,T=M.clearcoat>0,g=M.dispersion>0,F=M.iridescence>0,k=M.sheen>0,j=M.transmission>0,G=ot&&!!M.anisotropyMap,Se=T&&!!M.clearcoatMap,ne=T&&!!M.clearcoatNormalMap,_e=T&&!!M.clearcoatRoughnessMap,ve=F&&!!M.iridescenceMap,ee=F&&!!M.iridescenceThicknessMap,le=k&&!!M.sheenColorMap,Ae=k&&!!M.sheenRoughnessMap,xe=!!M.specularMap,ae=!!M.specularColorMap,Ie=!!M.specularIntensityMap,D=j&&!!M.transmissionMap,te=j&&!!M.thicknessMap,ie=!!M.gradientMap,ue=!!M.alphaMap,J=M.alphaTest>0,Y=!!M.alphaHash,pe=!!M.extensions;let Pe=Mn;M.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Pe=i.toneMapping);const $e={shaderID:re,shaderType:M.type,shaderName:M.name,vertexShader:Ze,fragmentShader:Qe,defines:M.defines,customVertexShaderID:We,customFragmentShaderID:X,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:Me,batchingColor:Me&&V._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&V.instanceColor!==null,instancingMorph:Ce&&V.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:$===null?i.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:di,alphaToCoverage:!!M.alphaToCoverage,map:Ge,matcap:pt,envMap:A,envMapMode:A&&Z.mapping,envMapCubeUVHeight:H,aoMap:et,lightMap:De,bumpMap:we,normalMap:me,displacementMap:d&&tt,emissiveMap:ge,normalMapObjectSpace:me&&M.normalMapType===Dc,normalMapTangentSpace:me&&M.normalMapType===il,metalnessMap:Ne,roughnessMap:ut,anisotropy:ot,anisotropyMap:G,clearcoat:T,clearcoatMap:Se,clearcoatNormalMap:ne,clearcoatRoughnessMap:_e,dispersion:g,iridescence:F,iridescenceMap:ve,iridescenceThicknessMap:ee,sheen:k,sheenColorMap:le,sheenRoughnessMap:Ae,specularMap:xe,specularColorMap:ae,specularIntensityMap:Ie,transmission:j,transmissionMap:D,thicknessMap:te,gradientMap:ie,opaque:M.transparent===!1&&M.blending===oi&&M.alphaToCoverage===!1,alphaMap:ue,alphaTest:J,alphaHash:Y,combine:M.combine,mapUv:Ge&&S(M.map.channel),aoMapUv:et&&S(M.aoMap.channel),lightMapUv:De&&S(M.lightMap.channel),bumpMapUv:we&&S(M.bumpMap.channel),normalMapUv:me&&S(M.normalMap.channel),displacementMapUv:tt&&S(M.displacementMap.channel),emissiveMapUv:ge&&S(M.emissiveMap.channel),metalnessMapUv:Ne&&S(M.metalnessMap.channel),roughnessMapUv:ut&&S(M.roughnessMap.channel),anisotropyMapUv:G&&S(M.anisotropyMap.channel),clearcoatMapUv:Se&&S(M.clearcoatMap.channel),clearcoatNormalMapUv:ne&&S(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&S(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&S(M.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&S(M.iridescenceThicknessMap.channel),sheenColorMapUv:le&&S(M.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&S(M.sheenRoughnessMap.channel),specularMapUv:xe&&S(M.specularMap.channel),specularColorMapUv:ae&&S(M.specularColorMap.channel),specularIntensityMapUv:Ie&&S(M.specularIntensityMap.channel),transmissionMapUv:D&&S(M.transmissionMap.channel),thicknessMapUv:te&&S(M.thicknessMap.channel),alphaMapUv:ue&&S(M.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(me||ot),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!W.attributes.uv&&(Ge||ue),fog:!!K,useFog:M.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:de,skinning:V.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:Ee,morphTextureStride:Be,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Pe,decodeVideoTexture:Ge&&M.map.isVideoTexture===!0&&ke.getTransfer(M.map.colorSpace)===Ye,decodeVideoTextureEmissive:ge&&M.emissiveMap.isVideoTexture===!0&&ke.getTransfer(M.emissiveMap.colorSpace)===Ye,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===on,flipSided:M.side===yt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:pe&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pe&&M.extensions.multiDraw===!0||Me)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return $e.vertexUv1s=c.has(1),$e.vertexUv2s=c.has(2),$e.vertexUv3s=c.has(3),c.clear(),$e}function h(M){const x=[];if(M.shaderID?x.push(M.shaderID):(x.push(M.customVertexShaderID),x.push(M.customFragmentShaderID)),M.defines!==void 0)for(const P in M.defines)x.push(P),x.push(M.defines[P]);return M.isRawShaderMaterial===!1&&(b(x,M),y(x,M),x.push(i.outputColorSpace)),x.push(M.customProgramCacheKey),x.join()}function b(M,x){M.push(x.precision),M.push(x.outputColorSpace),M.push(x.envMapMode),M.push(x.envMapCubeUVHeight),M.push(x.mapUv),M.push(x.alphaMapUv),M.push(x.lightMapUv),M.push(x.aoMapUv),M.push(x.bumpMapUv),M.push(x.normalMapUv),M.push(x.displacementMapUv),M.push(x.emissiveMapUv),M.push(x.metalnessMapUv),M.push(x.roughnessMapUv),M.push(x.anisotropyMapUv),M.push(x.clearcoatMapUv),M.push(x.clearcoatNormalMapUv),M.push(x.clearcoatRoughnessMapUv),M.push(x.iridescenceMapUv),M.push(x.iridescenceThicknessMapUv),M.push(x.sheenColorMapUv),M.push(x.sheenRoughnessMapUv),M.push(x.specularMapUv),M.push(x.specularColorMapUv),M.push(x.specularIntensityMapUv),M.push(x.transmissionMapUv),M.push(x.thicknessMapUv),M.push(x.combine),M.push(x.fogExp2),M.push(x.sizeAttenuation),M.push(x.morphTargetsCount),M.push(x.morphAttributeCount),M.push(x.numDirLights),M.push(x.numPointLights),M.push(x.numSpotLights),M.push(x.numSpotLightMaps),M.push(x.numHemiLights),M.push(x.numRectAreaLights),M.push(x.numDirLightShadows),M.push(x.numPointLightShadows),M.push(x.numSpotLightShadows),M.push(x.numSpotLightShadowsWithMaps),M.push(x.numLightProbes),M.push(x.shadowMapType),M.push(x.toneMapping),M.push(x.numClippingPlanes),M.push(x.numClipIntersection),M.push(x.depthPacking)}function y(M,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),x.gradientMap&&o.enable(22),M.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reversedDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),M.push(o.mask)}function E(M){const x=_[M.type];let P;if(x){const O=qt[x];P=pl.clone(O.uniforms)}else P=M.uniforms;return P}function C(M,x){let P;for(let O=0,V=u.length;O<V;O++){const K=u[O];if(K.cacheKey===x){P=K,++P.usedTimes;break}}return P===void 0&&(P=new Up(i,x,M,r),u.push(P)),P}function w(M){if(--M.usedTimes===0){const x=u.indexOf(M);u[x]=u[u.length-1],u.pop(),M.destroy()}}function R(M){l.remove(M)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:E,acquireProgram:C,releaseProgram:w,releaseShaderCache:R,programs:u,dispose:L}}function zp(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Hp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Po(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Do(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(f,d,p,_,S,m){let h=i[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:p,groupOrder:_,renderOrder:f.renderOrder,z:S,group:m},i[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=p,h.groupOrder=_,h.renderOrder=f.renderOrder,h.z=S,h.group=m),e++,h}function o(f,d,p,_,S,m){const h=a(f,d,p,_,S,m);p.transmission>0?n.push(h):p.transparent===!0?s.push(h):t.push(h)}function l(f,d,p,_,S,m){const h=a(f,d,p,_,S,m);p.transmission>0?n.unshift(h):p.transparent===!0?s.unshift(h):t.unshift(h)}function c(f,d){t.length>1&&t.sort(f||Hp),n.length>1&&n.sort(d||Po),s.length>1&&s.sort(d||Po)}function u(){for(let f=e,d=i.length;f<d;f++){const p=i[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function Gp(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new Do,i.set(n,[a])):s>=r.length?(a=new Do,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Vp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new Oe};break;case"SpotLight":t={position:new N,direction:new N,color:new Oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Oe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Oe,groundColor:new Oe};break;case"RectAreaLight":t={color:new Oe,position:new N,halfWidth:new N,halfHeight:new N};break}return i[e.id]=t,t}}}function kp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Wp=0;function Xp(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function qp(i){const e=new Vp,t=kp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new N);const s=new N,r=new st,a=new st;function o(c){let u=0,f=0,d=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let p=0,_=0,S=0,m=0,h=0,b=0,y=0,E=0,C=0,w=0,R=0;c.sort(Xp);for(let M=0,x=c.length;M<x;M++){const P=c[M],O=P.color,V=P.intensity,K=P.distance,W=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=O.r*V,f+=O.g*V,d+=O.b*V;else if(P.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(P.sh.coefficients[q],V);R++}else if(P.isDirectionalLight){const q=e.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const Z=P.shadow,H=t.get(P);H.shadowIntensity=Z.intensity,H.shadowBias=Z.bias,H.shadowNormalBias=Z.normalBias,H.shadowRadius=Z.radius,H.shadowMapSize=Z.mapSize,n.directionalShadow[p]=H,n.directionalShadowMap[p]=W,n.directionalShadowMatrix[p]=P.shadow.matrix,b++}n.directional[p]=q,p++}else if(P.isSpotLight){const q=e.get(P);q.position.setFromMatrixPosition(P.matrixWorld),q.color.copy(O).multiplyScalar(V),q.distance=K,q.coneCos=Math.cos(P.angle),q.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),q.decay=P.decay,n.spot[S]=q;const Z=P.shadow;if(P.map&&(n.spotLightMap[C]=P.map,C++,Z.updateMatrices(P),P.castShadow&&w++),n.spotLightMatrix[S]=Z.matrix,P.castShadow){const H=t.get(P);H.shadowIntensity=Z.intensity,H.shadowBias=Z.bias,H.shadowNormalBias=Z.normalBias,H.shadowRadius=Z.radius,H.shadowMapSize=Z.mapSize,n.spotShadow[S]=H,n.spotShadowMap[S]=W,E++}S++}else if(P.isRectAreaLight){const q=e.get(P);q.color.copy(O).multiplyScalar(V),q.halfWidth.set(P.width*.5,0,0),q.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=q,m++}else if(P.isPointLight){const q=e.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),q.distance=P.distance,q.decay=P.decay,P.castShadow){const Z=P.shadow,H=t.get(P);H.shadowIntensity=Z.intensity,H.shadowBias=Z.bias,H.shadowNormalBias=Z.normalBias,H.shadowRadius=Z.radius,H.shadowMapSize=Z.mapSize,H.shadowCameraNear=Z.camera.near,H.shadowCameraFar=Z.camera.far,n.pointShadow[_]=H,n.pointShadowMap[_]=W,n.pointShadowMatrix[_]=P.shadow.matrix,y++}n.point[_]=q,_++}else if(P.isHemisphereLight){const q=e.get(P);q.skyColor.copy(P.color).multiplyScalar(V),q.groundColor.copy(P.groundColor).multiplyScalar(V),n.hemi[h]=q,h++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=se.LTC_FLOAT_1,n.rectAreaLTC2=se.LTC_FLOAT_2):(n.rectAreaLTC1=se.LTC_HALF_1,n.rectAreaLTC2=se.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=d;const L=n.hash;(L.directionalLength!==p||L.pointLength!==_||L.spotLength!==S||L.rectAreaLength!==m||L.hemiLength!==h||L.numDirectionalShadows!==b||L.numPointShadows!==y||L.numSpotShadows!==E||L.numSpotMaps!==C||L.numLightProbes!==R)&&(n.directional.length=p,n.spot.length=S,n.rectArea.length=m,n.point.length=_,n.hemi.length=h,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=E+C-w,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=R,L.directionalLength=p,L.pointLength=_,L.spotLength=S,L.rectAreaLength=m,L.hemiLength=h,L.numDirectionalShadows=b,L.numPointShadows=y,L.numSpotShadows=E,L.numSpotMaps=C,L.numLightProbes=R,n.version=Wp++)}function l(c,u){let f=0,d=0,p=0,_=0,S=0;const m=u.matrixWorldInverse;for(let h=0,b=c.length;h<b;h++){const y=c[h];if(y.isDirectionalLight){const E=n.directional[f];E.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),f++}else if(y.isSpotLight){const E=n.spot[p];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),p++}else if(y.isRectAreaLight){const E=n.rectArea[_];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(m),a.identity(),r.copy(y.matrixWorld),r.premultiply(m),a.extractRotation(r),E.halfWidth.set(y.width*.5,0,0),E.halfHeight.set(0,y.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){const E=n.point[d];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){const E=n.hemi[S];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(m),S++}}}return{setup:o,setupView:l,state:n}}function Lo(i){const e=new qp(i),t=[],n=[];function s(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Yp(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Lo(i),e.set(s,[o])):r>=a.length?(o=new Lo(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Kp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Zp(i,e,t){let n=new Ma;const s=new Le,r=new Le,a=new at,o=new _h({depthPacking:Pc}),l=new vh,c={},u=t.maxTextureSize,f={[yn]:yt,[yt]:yn,[on]:on},d=new un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Le},radius:{value:4}},vertexShader:Kp,fragmentShader:jp}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const _=new Vt;_.setAttribute("position",new Nt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new Rt(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yo;let h=this.type;this.render=function(w,R,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const M=i.getRenderTarget(),x=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),O=i.state;O.setBlending(Sn),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const V=h!==rn&&this.type===rn,K=h===rn&&this.type!==rn;for(let W=0,q=w.length;W<q;W++){const Z=w[W],H=Z.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const re=H.getFrameExtents();if(s.multiply(re),r.copy(H.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/re.x),s.x=r.x*re.x,H.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/re.y),s.y=r.y*re.y,H.mapSize.y=r.y)),H.map===null||V===!0||K===!0){const Ee=this.type!==rn?{minFilter:St,magFilter:St}:{};H.map!==null&&H.map.dispose(),H.map=new hn(s.x,s.y,Ee),H.map.texture.name=Z.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();const ce=H.getViewportCount();for(let Ee=0;Ee<ce;Ee++){const Be=H.getViewport(Ee);a.set(r.x*Be.x,r.y*Be.y,r.x*Be.z,r.y*Be.w),O.viewport(a),H.updateMatrices(Z,Ee),n=H.getFrustum(),E(R,L,H.camera,Z,this.type)}H.isPointLightShadow!==!0&&this.type===rn&&b(H,L),H.needsUpdate=!1}h=this.type,m.needsUpdate=!1,i.setRenderTarget(M,x,P)};function b(w,R){const L=e.update(S);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new hn(s.x,s.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(R,null,L,d,S,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(R,null,L,p,S,null)}function y(w,R,L,M){let x=null;const P=L.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)x=P;else if(x=L.isPointLight===!0?l:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const O=x.uuid,V=R.uuid;let K=c[O];K===void 0&&(K={},c[O]=K);let W=K[V];W===void 0&&(W=x.clone(),K[V]=W,R.addEventListener("dispose",C)),x=W}if(x.visible=R.visible,x.wireframe=R.wireframe,M===rn?x.side=R.shadowSide!==null?R.shadowSide:R.side:x.side=R.shadowSide!==null?R.shadowSide:f[R.side],x.alphaMap=R.alphaMap,x.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,x.map=R.map,x.clipShadows=R.clipShadows,x.clippingPlanes=R.clippingPlanes,x.clipIntersection=R.clipIntersection,x.displacementMap=R.displacementMap,x.displacementScale=R.displacementScale,x.displacementBias=R.displacementBias,x.wireframeLinewidth=R.wireframeLinewidth,x.linewidth=R.linewidth,L.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const O=i.properties.get(x);O.light=L}return x}function E(w,R,L,M,x){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&x===rn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,w.matrixWorld);const V=e.update(w),K=w.material;if(Array.isArray(K)){const W=V.groups;for(let q=0,Z=W.length;q<Z;q++){const H=W[q],re=K[H.materialIndex];if(re&&re.visible){const ce=y(w,re,M,x);w.onBeforeShadow(i,w,R,L,V,ce,H),i.renderBufferDirect(L,null,V,ce,w,H),w.onAfterShadow(i,w,R,L,V,ce,H)}}}else if(K.visible){const W=y(w,K,M,x);w.onBeforeShadow(i,w,R,L,V,W,null),i.renderBufferDirect(L,null,V,W,w,null),w.onAfterShadow(i,w,R,L,V,W,null)}}const O=w.children;for(let V=0,K=O.length;V<K;V++)E(O[V],R,L,M,x)}function C(w){w.target.removeEventListener("dispose",C);for(const L in c){const M=c[L],x=w.target.uuid;x in M&&(M[x].dispose(),delete M[x])}}}const $p={[Mr]:Er,[yr]:Ar,[Tr]:wr,[ci]:br,[Er]:Mr,[Ar]:yr,[wr]:Tr,[br]:ci};function Jp(i,e){function t(){let D=!1;const te=new at;let ie=null;const ue=new at(0,0,0,0);return{setMask:function(J){ie!==J&&!D&&(i.colorMask(J,J,J,J),ie=J)},setLocked:function(J){D=J},setClear:function(J,Y,pe,Pe,$e){$e===!0&&(J*=Pe,Y*=Pe,pe*=Pe),te.set(J,Y,pe,Pe),ue.equals(te)===!1&&(i.clearColor(J,Y,pe,Pe),ue.copy(te))},reset:function(){D=!1,ie=null,ue.set(-1,0,0,0)}}}function n(){let D=!1,te=!1,ie=null,ue=null,J=null;return{setReversed:function(Y){if(te!==Y){const pe=e.get("EXT_clip_control");Y?pe.clipControlEXT(pe.LOWER_LEFT_EXT,pe.ZERO_TO_ONE_EXT):pe.clipControlEXT(pe.LOWER_LEFT_EXT,pe.NEGATIVE_ONE_TO_ONE_EXT),te=Y;const Pe=J;J=null,this.setClear(Pe)}},getReversed:function(){return te},setTest:function(Y){Y?$(i.DEPTH_TEST):de(i.DEPTH_TEST)},setMask:function(Y){ie!==Y&&!D&&(i.depthMask(Y),ie=Y)},setFunc:function(Y){if(te&&(Y=$p[Y]),ue!==Y){switch(Y){case Mr:i.depthFunc(i.NEVER);break;case Er:i.depthFunc(i.ALWAYS);break;case yr:i.depthFunc(i.LESS);break;case ci:i.depthFunc(i.LEQUAL);break;case Tr:i.depthFunc(i.EQUAL);break;case br:i.depthFunc(i.GEQUAL);break;case Ar:i.depthFunc(i.GREATER);break;case wr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ue=Y}},setLocked:function(Y){D=Y},setClear:function(Y){J!==Y&&(te&&(Y=1-Y),i.clearDepth(Y),J=Y)},reset:function(){D=!1,ie=null,ue=null,J=null,te=!1}}}function s(){let D=!1,te=null,ie=null,ue=null,J=null,Y=null,pe=null,Pe=null,$e=null;return{setTest:function(Xe){D||(Xe?$(i.STENCIL_TEST):de(i.STENCIL_TEST))},setMask:function(Xe){te!==Xe&&!D&&(i.stencilMask(Xe),te=Xe)},setFunc:function(Xe,Jt,kt){(ie!==Xe||ue!==Jt||J!==kt)&&(i.stencilFunc(Xe,Jt,kt),ie=Xe,ue=Jt,J=kt)},setOp:function(Xe,Jt,kt){(Y!==Xe||pe!==Jt||Pe!==kt)&&(i.stencilOp(Xe,Jt,kt),Y=Xe,pe=Jt,Pe=kt)},setLocked:function(Xe){D=Xe},setClear:function(Xe){$e!==Xe&&(i.clearStencil(Xe),$e=Xe)},reset:function(){D=!1,te=null,ie=null,ue=null,J=null,Y=null,pe=null,Pe=null,$e=null}}}const r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let u={},f={},d=new WeakMap,p=[],_=null,S=!1,m=null,h=null,b=null,y=null,E=null,C=null,w=null,R=new Oe(0,0,0),L=0,M=!1,x=null,P=null,O=null,V=null,K=null;const W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,Z=0;const H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(H)[1]),q=Z>=1):H.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),q=Z>=2);let re=null,ce={};const Ee=i.getParameter(i.SCISSOR_BOX),Be=i.getParameter(i.VIEWPORT),Ze=new at().fromArray(Ee),Qe=new at().fromArray(Be);function We(D,te,ie,ue){const J=new Uint8Array(4),Y=i.createTexture();i.bindTexture(D,Y),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let pe=0;pe<ie;pe++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(te,0,i.RGBA,1,1,ue,0,i.RGBA,i.UNSIGNED_BYTE,J):i.texImage2D(te+pe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,J);return Y}const X={};X[i.TEXTURE_2D]=We(i.TEXTURE_2D,i.TEXTURE_2D,1),X[i.TEXTURE_CUBE_MAP]=We(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),X[i.TEXTURE_2D_ARRAY]=We(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),X[i.TEXTURE_3D]=We(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),$(i.DEPTH_TEST),a.setFunc(ci),we(!1),me(Da),$(i.CULL_FACE),et(Sn);function $(D){u[D]!==!0&&(i.enable(D),u[D]=!0)}function de(D){u[D]!==!1&&(i.disable(D),u[D]=!1)}function Ce(D,te){return f[D]!==te?(i.bindFramebuffer(D,te),f[D]=te,D===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=te),D===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=te),!0):!1}function Me(D,te){let ie=p,ue=!1;if(D){ie=d.get(te),ie===void 0&&(ie=[],d.set(te,ie));const J=D.textures;if(ie.length!==J.length||ie[0]!==i.COLOR_ATTACHMENT0){for(let Y=0,pe=J.length;Y<pe;Y++)ie[Y]=i.COLOR_ATTACHMENT0+Y;ie.length=J.length,ue=!0}}else ie[0]!==i.BACK&&(ie[0]=i.BACK,ue=!0);ue&&i.drawBuffers(ie)}function Ge(D){return _!==D?(i.useProgram(D),_=D,!0):!1}const pt={[Un]:i.FUNC_ADD,[nc]:i.FUNC_SUBTRACT,[ic]:i.FUNC_REVERSE_SUBTRACT};pt[sc]=i.MIN,pt[rc]=i.MAX;const A={[ac]:i.ZERO,[oc]:i.ONE,[lc]:i.SRC_COLOR,[xr]:i.SRC_ALPHA,[pc]:i.SRC_ALPHA_SATURATE,[dc]:i.DST_COLOR,[hc]:i.DST_ALPHA,[cc]:i.ONE_MINUS_SRC_COLOR,[Sr]:i.ONE_MINUS_SRC_ALPHA,[fc]:i.ONE_MINUS_DST_COLOR,[uc]:i.ONE_MINUS_DST_ALPHA,[mc]:i.CONSTANT_COLOR,[gc]:i.ONE_MINUS_CONSTANT_COLOR,[_c]:i.CONSTANT_ALPHA,[vc]:i.ONE_MINUS_CONSTANT_ALPHA};function et(D,te,ie,ue,J,Y,pe,Pe,$e,Xe){if(D===Sn){S===!0&&(de(i.BLEND),S=!1);return}if(S===!1&&($(i.BLEND),S=!0),D!==tc){if(D!==m||Xe!==M){if((h!==Un||E!==Un)&&(i.blendEquation(i.FUNC_ADD),h=Un,E=Un),Xe)switch(D){case oi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case La:i.blendFunc(i.ONE,i.ONE);break;case Ia:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ua:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case oi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case La:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ia:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ua:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}b=null,y=null,C=null,w=null,R.set(0,0,0),L=0,m=D,M=Xe}return}J=J||te,Y=Y||ie,pe=pe||ue,(te!==h||J!==E)&&(i.blendEquationSeparate(pt[te],pt[J]),h=te,E=J),(ie!==b||ue!==y||Y!==C||pe!==w)&&(i.blendFuncSeparate(A[ie],A[ue],A[Y],A[pe]),b=ie,y=ue,C=Y,w=pe),(Pe.equals(R)===!1||$e!==L)&&(i.blendColor(Pe.r,Pe.g,Pe.b,$e),R.copy(Pe),L=$e),m=D,M=!1}function De(D,te){D.side===on?de(i.CULL_FACE):$(i.CULL_FACE);let ie=D.side===yt;te&&(ie=!ie),we(ie),D.blending===oi&&D.transparent===!1?et(Sn):et(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);const ue=D.stencilWrite;o.setTest(ue),ue&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),ge(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?$(i.SAMPLE_ALPHA_TO_COVERAGE):de(i.SAMPLE_ALPHA_TO_COVERAGE)}function we(D){x!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),x=D)}function me(D){D!==Jl?($(i.CULL_FACE),D!==P&&(D===Da?i.cullFace(i.BACK):D===Ql?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):de(i.CULL_FACE),P=D}function tt(D){D!==O&&(q&&i.lineWidth(D),O=D)}function ge(D,te,ie){D?($(i.POLYGON_OFFSET_FILL),(V!==te||K!==ie)&&(i.polygonOffset(te,ie),V=te,K=ie)):de(i.POLYGON_OFFSET_FILL)}function Ne(D){D?$(i.SCISSOR_TEST):de(i.SCISSOR_TEST)}function ut(D){D===void 0&&(D=i.TEXTURE0+W-1),re!==D&&(i.activeTexture(D),re=D)}function ot(D,te,ie){ie===void 0&&(re===null?ie=i.TEXTURE0+W-1:ie=re);let ue=ce[ie];ue===void 0&&(ue={type:void 0,texture:void 0},ce[ie]=ue),(ue.type!==D||ue.texture!==te)&&(re!==ie&&(i.activeTexture(ie),re=ie),i.bindTexture(D,te||X[D]),ue.type=D,ue.texture=te)}function T(){const D=ce[re];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function g(){try{i.compressedTexImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function F(){try{i.compressedTexImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function k(){try{i.texSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function j(){try{i.texSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function G(){try{i.compressedTexSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Se(){try{i.compressedTexSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ne(){try{i.texStorage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function _e(){try{i.texStorage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ve(){try{i.texImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ee(){try{i.texImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function le(D){Ze.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),Ze.copy(D))}function Ae(D){Qe.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),Qe.copy(D))}function xe(D,te){let ie=c.get(te);ie===void 0&&(ie=new WeakMap,c.set(te,ie));let ue=ie.get(D);ue===void 0&&(ue=i.getUniformBlockIndex(te,D.name),ie.set(D,ue))}function ae(D,te){const ue=c.get(te).get(D);l.get(te)!==ue&&(i.uniformBlockBinding(te,ue,D.__bindingPointIndex),l.set(te,ue))}function Ie(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},re=null,ce={},f={},d=new WeakMap,p=[],_=null,S=!1,m=null,h=null,b=null,y=null,E=null,C=null,w=null,R=new Oe(0,0,0),L=0,M=!1,x=null,P=null,O=null,V=null,K=null,Ze.set(0,0,i.canvas.width,i.canvas.height),Qe.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:$,disable:de,bindFramebuffer:Ce,drawBuffers:Me,useProgram:Ge,setBlending:et,setMaterial:De,setFlipSided:we,setCullFace:me,setLineWidth:tt,setPolygonOffset:ge,setScissorTest:Ne,activeTexture:ut,bindTexture:ot,unbindTexture:T,compressedTexImage2D:g,compressedTexImage3D:F,texImage2D:ve,texImage3D:ee,updateUBOMapping:xe,uniformBlockBinding:ae,texStorage2D:ne,texStorage3D:_e,texSubImage2D:k,texSubImage3D:j,compressedTexSubImage2D:G,compressedTexSubImage3D:Se,scissor:le,viewport:Ae,reset:Ie}}function Qp(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Le,u=new WeakMap;let f;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(T,g){return p?new OffscreenCanvas(T,g):vs("canvas")}function S(T,g,F){let k=1;const j=ot(T);if((j.width>F||j.height>F)&&(k=F/Math.max(j.width,j.height)),k<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const G=Math.floor(k*j.width),Se=Math.floor(k*j.height);f===void 0&&(f=_(G,Se));const ne=g?_(G,Se):f;return ne.width=G,ne.height=Se,ne.getContext("2d").drawImage(T,0,0,G,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+G+"x"+Se+")."),ne}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),T;return T}function m(T){return T.generateMipmaps}function h(T){i.generateMipmap(T)}function b(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(T,g,F,k,j=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let G=g;if(g===i.RED&&(F===i.FLOAT&&(G=i.R32F),F===i.HALF_FLOAT&&(G=i.R16F),F===i.UNSIGNED_BYTE&&(G=i.R8)),g===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(G=i.R8UI),F===i.UNSIGNED_SHORT&&(G=i.R16UI),F===i.UNSIGNED_INT&&(G=i.R32UI),F===i.BYTE&&(G=i.R8I),F===i.SHORT&&(G=i.R16I),F===i.INT&&(G=i.R32I)),g===i.RG&&(F===i.FLOAT&&(G=i.RG32F),F===i.HALF_FLOAT&&(G=i.RG16F),F===i.UNSIGNED_BYTE&&(G=i.RG8)),g===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(G=i.RG8UI),F===i.UNSIGNED_SHORT&&(G=i.RG16UI),F===i.UNSIGNED_INT&&(G=i.RG32UI),F===i.BYTE&&(G=i.RG8I),F===i.SHORT&&(G=i.RG16I),F===i.INT&&(G=i.RG32I)),g===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(G=i.RGB8UI),F===i.UNSIGNED_SHORT&&(G=i.RGB16UI),F===i.UNSIGNED_INT&&(G=i.RGB32UI),F===i.BYTE&&(G=i.RGB8I),F===i.SHORT&&(G=i.RGB16I),F===i.INT&&(G=i.RGB32I)),g===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(G=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(G=i.RGBA16UI),F===i.UNSIGNED_INT&&(G=i.RGBA32UI),F===i.BYTE&&(G=i.RGBA8I),F===i.SHORT&&(G=i.RGBA16I),F===i.INT&&(G=i.RGBA32I)),g===i.RGB&&(F===i.UNSIGNED_INT_5_9_9_9_REV&&(G=i.RGB9_E5),F===i.UNSIGNED_INT_10F_11F_11F_REV&&(G=i.R11F_G11F_B10F)),g===i.RGBA){const Se=j?gs:ke.getTransfer(k);F===i.FLOAT&&(G=i.RGBA32F),F===i.HALF_FLOAT&&(G=i.RGBA16F),F===i.UNSIGNED_BYTE&&(G=Se===Ye?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(G=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(G=i.RGB5_A1)}return(G===i.R16F||G===i.R32F||G===i.RG16F||G===i.RG32F||G===i.RGBA16F||G===i.RGBA32F)&&e.get("EXT_color_buffer_float"),G}function E(T,g){let F;return T?g===null||g===zn||g===Ci?F=i.DEPTH24_STENCIL8:g===ln?F=i.DEPTH32F_STENCIL8:g===Ri&&(F=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===zn||g===Ci?F=i.DEPTH_COMPONENT24:g===ln?F=i.DEPTH_COMPONENT32F:g===Ri&&(F=i.DEPTH_COMPONENT16),F}function C(T,g){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==St&&T.minFilter!==Kt?Math.log2(Math.max(g.width,g.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?g.mipmaps.length:1}function w(T){const g=T.target;g.removeEventListener("dispose",w),L(g),g.isVideoTexture&&u.delete(g)}function R(T){const g=T.target;g.removeEventListener("dispose",R),x(g)}function L(T){const g=n.get(T);if(g.__webglInit===void 0)return;const F=T.source,k=d.get(F);if(k){const j=k[g.__cacheKey];j.usedTimes--,j.usedTimes===0&&M(T),Object.keys(k).length===0&&d.delete(F)}n.remove(T)}function M(T){const g=n.get(T);i.deleteTexture(g.__webglTexture);const F=T.source,k=d.get(F);delete k[g.__cacheKey],a.memory.textures--}function x(T){const g=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(g.__webglFramebuffer[k]))for(let j=0;j<g.__webglFramebuffer[k].length;j++)i.deleteFramebuffer(g.__webglFramebuffer[k][j]);else i.deleteFramebuffer(g.__webglFramebuffer[k]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[k])}else{if(Array.isArray(g.__webglFramebuffer))for(let k=0;k<g.__webglFramebuffer.length;k++)i.deleteFramebuffer(g.__webglFramebuffer[k]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let k=0;k<g.__webglColorRenderbuffer.length;k++)g.__webglColorRenderbuffer[k]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[k]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const F=T.textures;for(let k=0,j=F.length;k<j;k++){const G=n.get(F[k]);G.__webglTexture&&(i.deleteTexture(G.__webglTexture),a.memory.textures--),n.remove(F[k])}n.remove(T)}let P=0;function O(){P=0}function V(){const T=P;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),P+=1,T}function K(T){const g=[];return g.push(T.wrapS),g.push(T.wrapT),g.push(T.wrapR||0),g.push(T.magFilter),g.push(T.minFilter),g.push(T.anisotropy),g.push(T.internalFormat),g.push(T.format),g.push(T.type),g.push(T.generateMipmaps),g.push(T.premultiplyAlpha),g.push(T.flipY),g.push(T.unpackAlignment),g.push(T.colorSpace),g.join()}function W(T,g){const F=n.get(T);if(T.isVideoTexture&&Ne(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&F.__version!==T.version){const k=T.image;if(k===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(F,T,g);return}}else T.isExternalTexture&&(F.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+g)}function q(T,g){const F=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&F.__version!==T.version){X(F,T,g);return}t.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+g)}function Z(T,g){const F=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&F.__version!==T.version){X(F,T,g);return}t.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+g)}function H(T,g){const F=n.get(T);if(T.version>0&&F.__version!==T.version){$(F,T,g);return}t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+g)}const re={[Pr]:i.REPEAT,[Fn]:i.CLAMP_TO_EDGE,[Dr]:i.MIRRORED_REPEAT},ce={[St]:i.NEAREST,[Rc]:i.NEAREST_MIPMAP_NEAREST,[zi]:i.NEAREST_MIPMAP_LINEAR,[Kt]:i.LINEAR,[Ds]:i.LINEAR_MIPMAP_NEAREST,[On]:i.LINEAR_MIPMAP_LINEAR},Ee={[Lc]:i.NEVER,[Bc]:i.ALWAYS,[Ic]:i.LESS,[sl]:i.LEQUAL,[Uc]:i.EQUAL,[Oc]:i.GEQUAL,[Nc]:i.GREATER,[Fc]:i.NOTEQUAL};function Be(T,g){if(g.type===ln&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Kt||g.magFilter===Ds||g.magFilter===zi||g.magFilter===On||g.minFilter===Kt||g.minFilter===Ds||g.minFilter===zi||g.minFilter===On)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,re[g.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,re[g.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,re[g.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,ce[g.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,ce[g.minFilter]),g.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,Ee[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===St||g.minFilter!==zi&&g.minFilter!==On||g.type===ln&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");i.texParameterf(T,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function Ze(T,g){let F=!1;T.__webglInit===void 0&&(T.__webglInit=!0,g.addEventListener("dispose",w));const k=g.source;let j=d.get(k);j===void 0&&(j={},d.set(k,j));const G=K(g);if(G!==T.__cacheKey){j[G]===void 0&&(j[G]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,F=!0),j[G].usedTimes++;const Se=j[T.__cacheKey];Se!==void 0&&(j[T.__cacheKey].usedTimes--,Se.usedTimes===0&&M(g)),T.__cacheKey=G,T.__webglTexture=j[G].texture}return F}function Qe(T,g,F){return Math.floor(Math.floor(T/F)/g)}function We(T,g,F,k){const G=T.updateRanges;if(G.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,g.width,g.height,F,k,g.data);else{G.sort((ee,le)=>ee.start-le.start);let Se=0;for(let ee=1;ee<G.length;ee++){const le=G[Se],Ae=G[ee],xe=le.start+le.count,ae=Qe(Ae.start,g.width,4),Ie=Qe(le.start,g.width,4);Ae.start<=xe+1&&ae===Ie&&Qe(Ae.start+Ae.count-1,g.width,4)===ae?le.count=Math.max(le.count,Ae.start+Ae.count-le.start):(++Se,G[Se]=Ae)}G.length=Se+1;const ne=i.getParameter(i.UNPACK_ROW_LENGTH),_e=i.getParameter(i.UNPACK_SKIP_PIXELS),ve=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,g.width);for(let ee=0,le=G.length;ee<le;ee++){const Ae=G[ee],xe=Math.floor(Ae.start/4),ae=Math.ceil(Ae.count/4),Ie=xe%g.width,D=Math.floor(xe/g.width),te=ae,ie=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ie),i.pixelStorei(i.UNPACK_SKIP_ROWS,D),t.texSubImage2D(i.TEXTURE_2D,0,Ie,D,te,ie,F,k,g.data)}T.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ne),i.pixelStorei(i.UNPACK_SKIP_PIXELS,_e),i.pixelStorei(i.UNPACK_SKIP_ROWS,ve)}}function X(T,g,F){let k=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(k=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(k=i.TEXTURE_3D);const j=Ze(T,g),G=g.source;t.bindTexture(k,T.__webglTexture,i.TEXTURE0+F);const Se=n.get(G);if(G.version!==Se.__version||j===!0){t.activeTexture(i.TEXTURE0+F);const ne=ke.getPrimaries(ke.workingColorSpace),_e=g.colorSpace===xn?null:ke.getPrimaries(g.colorSpace),ve=g.colorSpace===xn||ne===_e?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);let ee=S(g.image,!1,s.maxTextureSize);ee=ut(g,ee);const le=r.convert(g.format,g.colorSpace),Ae=r.convert(g.type);let xe=y(g.internalFormat,le,Ae,g.colorSpace,g.isVideoTexture);Be(k,g);let ae;const Ie=g.mipmaps,D=g.isVideoTexture!==!0,te=Se.__version===void 0||j===!0,ie=G.dataReady,ue=C(g,ee);if(g.isDepthTexture)xe=E(g.format===Di,g.type),te&&(D?t.texStorage2D(i.TEXTURE_2D,1,xe,ee.width,ee.height):t.texImage2D(i.TEXTURE_2D,0,xe,ee.width,ee.height,0,le,Ae,null));else if(g.isDataTexture)if(Ie.length>0){D&&te&&t.texStorage2D(i.TEXTURE_2D,ue,xe,Ie[0].width,Ie[0].height);for(let J=0,Y=Ie.length;J<Y;J++)ae=Ie[J],D?ie&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,ae.width,ae.height,le,Ae,ae.data):t.texImage2D(i.TEXTURE_2D,J,xe,ae.width,ae.height,0,le,Ae,ae.data);g.generateMipmaps=!1}else D?(te&&t.texStorage2D(i.TEXTURE_2D,ue,xe,ee.width,ee.height),ie&&We(g,ee,le,Ae)):t.texImage2D(i.TEXTURE_2D,0,xe,ee.width,ee.height,0,le,Ae,ee.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){D&&te&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ue,xe,Ie[0].width,Ie[0].height,ee.depth);for(let J=0,Y=Ie.length;J<Y;J++)if(ae=Ie[J],g.format!==Ut)if(le!==null)if(D){if(ie)if(g.layerUpdates.size>0){const pe=oo(ae.width,ae.height,g.format,g.type);for(const Pe of g.layerUpdates){const $e=ae.data.subarray(Pe*pe/ae.data.BYTES_PER_ELEMENT,(Pe+1)*pe/ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,Pe,ae.width,ae.height,1,le,$e)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,ae.width,ae.height,ee.depth,le,ae.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,J,xe,ae.width,ae.height,ee.depth,0,ae.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?ie&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,ae.width,ae.height,ee.depth,le,Ae,ae.data):t.texImage3D(i.TEXTURE_2D_ARRAY,J,xe,ae.width,ae.height,ee.depth,0,le,Ae,ae.data)}else{D&&te&&t.texStorage2D(i.TEXTURE_2D,ue,xe,Ie[0].width,Ie[0].height);for(let J=0,Y=Ie.length;J<Y;J++)ae=Ie[J],g.format!==Ut?le!==null?D?ie&&t.compressedTexSubImage2D(i.TEXTURE_2D,J,0,0,ae.width,ae.height,le,ae.data):t.compressedTexImage2D(i.TEXTURE_2D,J,xe,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?ie&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,ae.width,ae.height,le,Ae,ae.data):t.texImage2D(i.TEXTURE_2D,J,xe,ae.width,ae.height,0,le,Ae,ae.data)}else if(g.isDataArrayTexture)if(D){if(te&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ue,xe,ee.width,ee.height,ee.depth),ie)if(g.layerUpdates.size>0){const J=oo(ee.width,ee.height,g.format,g.type);for(const Y of g.layerUpdates){const pe=ee.data.subarray(Y*J/ee.data.BYTES_PER_ELEMENT,(Y+1)*J/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Y,ee.width,ee.height,1,le,Ae,pe)}g.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,le,Ae,ee.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,xe,ee.width,ee.height,ee.depth,0,le,Ae,ee.data);else if(g.isData3DTexture)D?(te&&t.texStorage3D(i.TEXTURE_3D,ue,xe,ee.width,ee.height,ee.depth),ie&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,le,Ae,ee.data)):t.texImage3D(i.TEXTURE_3D,0,xe,ee.width,ee.height,ee.depth,0,le,Ae,ee.data);else if(g.isFramebufferTexture){if(te)if(D)t.texStorage2D(i.TEXTURE_2D,ue,xe,ee.width,ee.height);else{let J=ee.width,Y=ee.height;for(let pe=0;pe<ue;pe++)t.texImage2D(i.TEXTURE_2D,pe,xe,J,Y,0,le,Ae,null),J>>=1,Y>>=1}}else if(Ie.length>0){if(D&&te){const J=ot(Ie[0]);t.texStorage2D(i.TEXTURE_2D,ue,xe,J.width,J.height)}for(let J=0,Y=Ie.length;J<Y;J++)ae=Ie[J],D?ie&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,le,Ae,ae):t.texImage2D(i.TEXTURE_2D,J,xe,le,Ae,ae);g.generateMipmaps=!1}else if(D){if(te){const J=ot(ee);t.texStorage2D(i.TEXTURE_2D,ue,xe,J.width,J.height)}ie&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,le,Ae,ee)}else t.texImage2D(i.TEXTURE_2D,0,xe,le,Ae,ee);m(g)&&h(k),Se.__version=G.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function $(T,g,F){if(g.image.length!==6)return;const k=Ze(T,g),j=g.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+F);const G=n.get(j);if(j.version!==G.__version||k===!0){t.activeTexture(i.TEXTURE0+F);const Se=ke.getPrimaries(ke.workingColorSpace),ne=g.colorSpace===xn?null:ke.getPrimaries(g.colorSpace),_e=g.colorSpace===xn||Se===ne?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const ve=g.isCompressedTexture||g.image[0].isCompressedTexture,ee=g.image[0]&&g.image[0].isDataTexture,le=[];for(let Y=0;Y<6;Y++)!ve&&!ee?le[Y]=S(g.image[Y],!0,s.maxCubemapSize):le[Y]=ee?g.image[Y].image:g.image[Y],le[Y]=ut(g,le[Y]);const Ae=le[0],xe=r.convert(g.format,g.colorSpace),ae=r.convert(g.type),Ie=y(g.internalFormat,xe,ae,g.colorSpace),D=g.isVideoTexture!==!0,te=G.__version===void 0||k===!0,ie=j.dataReady;let ue=C(g,Ae);Be(i.TEXTURE_CUBE_MAP,g);let J;if(ve){D&&te&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ue,Ie,Ae.width,Ae.height);for(let Y=0;Y<6;Y++){J=le[Y].mipmaps;for(let pe=0;pe<J.length;pe++){const Pe=J[pe];g.format!==Ut?xe!==null?D?ie&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,pe,0,0,Pe.width,Pe.height,xe,Pe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,pe,Ie,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,pe,0,0,Pe.width,Pe.height,xe,ae,Pe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,pe,Ie,Pe.width,Pe.height,0,xe,ae,Pe.data)}}}else{if(J=g.mipmaps,D&&te){J.length>0&&ue++;const Y=ot(le[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ue,Ie,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(ee){D?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,le[Y].width,le[Y].height,xe,ae,le[Y].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Ie,le[Y].width,le[Y].height,0,xe,ae,le[Y].data);for(let pe=0;pe<J.length;pe++){const $e=J[pe].image[Y].image;D?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,pe+1,0,0,$e.width,$e.height,xe,ae,$e.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,pe+1,Ie,$e.width,$e.height,0,xe,ae,$e.data)}}else{D?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,xe,ae,le[Y]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Ie,xe,ae,le[Y]);for(let pe=0;pe<J.length;pe++){const Pe=J[pe];D?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,pe+1,0,0,xe,ae,Pe.image[Y]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,pe+1,Ie,xe,ae,Pe.image[Y])}}}m(g)&&h(i.TEXTURE_CUBE_MAP),G.__version=j.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function de(T,g,F,k,j,G){const Se=r.convert(F.format,F.colorSpace),ne=r.convert(F.type),_e=y(F.internalFormat,Se,ne,F.colorSpace),ve=n.get(g),ee=n.get(F);if(ee.__renderTarget=g,!ve.__hasExternalTextures){const le=Math.max(1,g.width>>G),Ae=Math.max(1,g.height>>G);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?t.texImage3D(j,G,_e,le,Ae,g.depth,0,Se,ne,null):t.texImage2D(j,G,_e,le,Ae,0,Se,ne,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),ge(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,k,j,ee.__webglTexture,0,tt(g)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,k,j,ee.__webglTexture,G),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ce(T,g,F){if(i.bindRenderbuffer(i.RENDERBUFFER,T),g.depthBuffer){const k=g.depthTexture,j=k&&k.isDepthTexture?k.type:null,G=E(g.stencilBuffer,j),Se=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ne=tt(g);ge(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ne,G,g.width,g.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,ne,G,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,G,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Se,i.RENDERBUFFER,T)}else{const k=g.textures;for(let j=0;j<k.length;j++){const G=k[j],Se=r.convert(G.format,G.colorSpace),ne=r.convert(G.type),_e=y(G.internalFormat,Se,ne,G.colorSpace),ve=tt(g);F&&ge(g)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ve,_e,g.width,g.height):ge(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ve,_e,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,_e,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Me(T,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const k=n.get(g.depthTexture);k.__renderTarget=g,(!k.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),W(g.depthTexture,0);const j=k.__webglTexture,G=tt(g);if(g.depthTexture.format===Pi)ge(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0,G):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0);else if(g.depthTexture.format===Di)ge(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0,G):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Ge(T){const g=n.get(T),F=T.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==T.depthTexture){const k=T.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),k){const j=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,k.removeEventListener("dispose",j)};k.addEventListener("dispose",j),g.__depthDisposeCallback=j}g.__boundDepthTexture=k}if(T.depthTexture&&!g.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");const k=T.texture.mipmaps;k&&k.length>0?Me(g.__webglFramebuffer[0],T):Me(g.__webglFramebuffer,T)}else if(F){g.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[k]),g.__webglDepthbuffer[k]===void 0)g.__webglDepthbuffer[k]=i.createRenderbuffer(),Ce(g.__webglDepthbuffer[k],T,!1);else{const j=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,G=g.__webglDepthbuffer[k];i.bindRenderbuffer(i.RENDERBUFFER,G),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,G)}}else{const k=T.texture.mipmaps;if(k&&k.length>0?t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),Ce(g.__webglDepthbuffer,T,!1);else{const j=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,G=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,G),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,G)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function pt(T,g,F){const k=n.get(T);g!==void 0&&de(k.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&Ge(T)}function A(T){const g=T.texture,F=n.get(T),k=n.get(g);T.addEventListener("dispose",R);const j=T.textures,G=T.isWebGLCubeRenderTarget===!0,Se=j.length>1;if(Se||(k.__webglTexture===void 0&&(k.__webglTexture=i.createTexture()),k.__version=g.version,a.memory.textures++),G){F.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(g.mipmaps&&g.mipmaps.length>0){F.__webglFramebuffer[ne]=[];for(let _e=0;_e<g.mipmaps.length;_e++)F.__webglFramebuffer[ne][_e]=i.createFramebuffer()}else F.__webglFramebuffer[ne]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){F.__webglFramebuffer=[];for(let ne=0;ne<g.mipmaps.length;ne++)F.__webglFramebuffer[ne]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(Se)for(let ne=0,_e=j.length;ne<_e;ne++){const ve=n.get(j[ne]);ve.__webglTexture===void 0&&(ve.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&ge(T)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ne=0;ne<j.length;ne++){const _e=j[ne];F.__webglColorRenderbuffer[ne]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[ne]);const ve=r.convert(_e.format,_e.colorSpace),ee=r.convert(_e.type),le=y(_e.internalFormat,ve,ee,_e.colorSpace,T.isXRRenderTarget===!0),Ae=tt(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ae,le,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ne,i.RENDERBUFFER,F.__webglColorRenderbuffer[ne])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),Ce(F.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(G){t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture),Be(i.TEXTURE_CUBE_MAP,g);for(let ne=0;ne<6;ne++)if(g.mipmaps&&g.mipmaps.length>0)for(let _e=0;_e<g.mipmaps.length;_e++)de(F.__webglFramebuffer[ne][_e],T,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,_e);else de(F.__webglFramebuffer[ne],T,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);m(g)&&h(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){for(let ne=0,_e=j.length;ne<_e;ne++){const ve=j[ne],ee=n.get(ve);let le=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(le=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(le,ee.__webglTexture),Be(le,ve),de(F.__webglFramebuffer,T,ve,i.COLOR_ATTACHMENT0+ne,le,0),m(ve)&&h(le)}t.unbindTexture()}else{let ne=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ne=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ne,k.__webglTexture),Be(ne,g),g.mipmaps&&g.mipmaps.length>0)for(let _e=0;_e<g.mipmaps.length;_e++)de(F.__webglFramebuffer[_e],T,g,i.COLOR_ATTACHMENT0,ne,_e);else de(F.__webglFramebuffer,T,g,i.COLOR_ATTACHMENT0,ne,0);m(g)&&h(ne),t.unbindTexture()}T.depthBuffer&&Ge(T)}function et(T){const g=T.textures;for(let F=0,k=g.length;F<k;F++){const j=g[F];if(m(j)){const G=b(T),Se=n.get(j).__webglTexture;t.bindTexture(G,Se),h(G),t.unbindTexture()}}}const De=[],we=[];function me(T){if(T.samples>0){if(ge(T)===!1){const g=T.textures,F=T.width,k=T.height;let j=i.COLOR_BUFFER_BIT;const G=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Se=n.get(T),ne=g.length>1;if(ne)for(let ve=0;ve<g.length;ve++)t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer);const _e=T.texture.mipmaps;_e&&_e.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let ve=0;ve<g.length;ve++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),ne){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Se.__webglColorRenderbuffer[ve]);const ee=n.get(g[ve]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ee,0)}i.blitFramebuffer(0,0,F,k,0,0,F,k,j,i.NEAREST),l===!0&&(De.length=0,we.length=0,De.push(i.COLOR_ATTACHMENT0+ve),T.depthBuffer&&T.resolveDepthBuffer===!1&&(De.push(G),we.push(G),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,we)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,De))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ne)for(let ve=0;ve<g.length;ve++){t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,Se.__webglColorRenderbuffer[ve]);const ee=n.get(g[ve]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,ee,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const g=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function tt(T){return Math.min(s.maxSamples,T.samples)}function ge(T){const g=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function Ne(T){const g=a.render.frame;u.get(T)!==g&&(u.set(T,g),T.update())}function ut(T,g){const F=T.colorSpace,k=T.format,j=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||F!==di&&F!==xn&&(ke.getTransfer(F)===Ye?(k!==Ut||j!==Gt)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),g}function ot(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=O,this.setTexture2D=W,this.setTexture2DArray=q,this.setTexture3D=Z,this.setTextureCube=H,this.rebindTextures=pt,this.setupRenderTarget=A,this.updateRenderTargetMipmap=et,this.updateMultisampleRenderTarget=me,this.setupDepthRenderbuffer=Ge,this.setupFrameBufferTexture=de,this.useMultisampledRTT=ge}function em(i,e){function t(n,s=xn){let r;const a=ke.getTransfer(s);if(n===Gt)return i.UNSIGNED_BYTE;if(n===ma)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ga)return i.UNSIGNED_SHORT_5_5_5_1;if(n===$o)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Jo)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===jo)return i.BYTE;if(n===Zo)return i.SHORT;if(n===Ri)return i.UNSIGNED_SHORT;if(n===pa)return i.INT;if(n===zn)return i.UNSIGNED_INT;if(n===ln)return i.FLOAT;if(n===Ii)return i.HALF_FLOAT;if(n===Qo)return i.ALPHA;if(n===el)return i.RGB;if(n===Ut)return i.RGBA;if(n===Pi)return i.DEPTH_COMPONENT;if(n===Di)return i.DEPTH_STENCIL;if(n===tl)return i.RED;if(n===_a)return i.RED_INTEGER;if(n===nl)return i.RG;if(n===va)return i.RG_INTEGER;if(n===xa)return i.RGBA_INTEGER;if(n===us||n===ds||n===fs||n===ps)if(a===Ye)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===us)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ds)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===fs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ps)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===us)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ds)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===fs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ps)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Lr||n===Ir||n===Ur||n===Nr)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Lr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ir)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ur)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Nr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Fr||n===Or||n===Br)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Fr||n===Or)return a===Ye?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Br)return a===Ye?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===zr||n===Hr||n===Gr||n===Vr||n===kr||n===Wr||n===Xr||n===qr||n===Yr||n===Kr||n===jr||n===Zr||n===$r||n===Jr)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===zr)return a===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Hr)return a===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Gr)return a===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Vr)return a===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===kr)return a===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Wr)return a===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Xr)return a===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===qr)return a===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Yr)return a===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Kr)return a===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===jr)return a===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Zr)return a===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===$r)return a===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Jr)return a===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Qr||n===ea||n===ta)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Qr)return a===Ye?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ea)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ta)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===na||n===ia||n===sa||n===ra)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===na)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ia)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===sa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ra)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ci?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const tm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,nm=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class im{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Sl(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new un({vertexShader:tm,fragmentShader:nm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Rt(new Fi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class sm extends pi{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,d=null,p=null,_=null;const S=typeof XRWebGLBinding<"u",m=new im,h={},b=t.getContextAttributes();let y=null,E=null;const C=[],w=[],R=new Le;let L=null;const M=new Ht;M.viewport=new at;const x=new Ht;x.viewport=new at;const P=[M,x],O=new yh;let V=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let $=C[X];return $===void 0&&($=new er,C[X]=$),$.getTargetRaySpace()},this.getControllerGrip=function(X){let $=C[X];return $===void 0&&($=new er,C[X]=$),$.getGripSpace()},this.getHand=function(X){let $=C[X];return $===void 0&&($=new er,C[X]=$),$.getHandSpace()};function W(X){const $=w.indexOf(X.inputSource);if($===-1)return;const de=C[$];de!==void 0&&(de.update(X.inputSource,X.frame,c||a),de.dispatchEvent({type:X.type,data:X.inputSource}))}function q(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",Z);for(let X=0;X<C.length;X++){const $=w[X];$!==null&&(w[X]=null,C[X].disconnect($))}V=null,K=null,m.reset();for(const X in h)delete h[X];e.setRenderTarget(y),p=null,d=null,f=null,s=null,E=null,We.stop(),n.isPresenting=!1,e.setPixelRatio(L),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f===null&&S&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(y=e.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",q),s.addEventListener("inputsourceschange",Z),b.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(R),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let de=null,Ce=null,Me=null;b.depth&&(Me=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=b.stencil?Di:Pi,Ce=b.stencil?Ci:zn);const Ge={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:r};f=this.getBinding(),d=f.createProjectionLayer(Ge),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),E=new hn(d.textureWidth,d.textureHeight,{format:Ut,type:Gt,depthTexture:new xl(d.textureWidth,d.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const de={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,de),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new hn(p.framebufferWidth,p.framebufferHeight,{format:Ut,type:Gt,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),We.setContext(s),We.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Z(X){for(let $=0;$<X.removed.length;$++){const de=X.removed[$],Ce=w.indexOf(de);Ce>=0&&(w[Ce]=null,C[Ce].disconnect(de))}for(let $=0;$<X.added.length;$++){const de=X.added[$];let Ce=w.indexOf(de);if(Ce===-1){for(let Ge=0;Ge<C.length;Ge++)if(Ge>=w.length){w.push(de),Ce=Ge;break}else if(w[Ge]===null){w[Ge]=de,Ce=Ge;break}if(Ce===-1)break}const Me=C[Ce];Me&&Me.connect(de)}}const H=new N,re=new N;function ce(X,$,de){H.setFromMatrixPosition($.matrixWorld),re.setFromMatrixPosition(de.matrixWorld);const Ce=H.distanceTo(re),Me=$.projectionMatrix.elements,Ge=de.projectionMatrix.elements,pt=Me[14]/(Me[10]-1),A=Me[14]/(Me[10]+1),et=(Me[9]+1)/Me[5],De=(Me[9]-1)/Me[5],we=(Me[8]-1)/Me[0],me=(Ge[8]+1)/Ge[0],tt=pt*we,ge=pt*me,Ne=Ce/(-we+me),ut=Ne*-we;if($.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(ut),X.translateZ(Ne),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Me[10]===-1)X.projectionMatrix.copy($.projectionMatrix),X.projectionMatrixInverse.copy($.projectionMatrixInverse);else{const ot=pt+Ne,T=A+Ne,g=tt-ut,F=ge+(Ce-ut),k=et*A/T*ot,j=De*A/T*ot;X.projectionMatrix.makePerspective(g,F,k,j,ot,T),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function Ee(X,$){$===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices($.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let $=X.near,de=X.far;m.texture!==null&&(m.depthNear>0&&($=m.depthNear),m.depthFar>0&&(de=m.depthFar)),O.near=x.near=M.near=$,O.far=x.far=M.far=de,(V!==O.near||K!==O.far)&&(s.updateRenderState({depthNear:O.near,depthFar:O.far}),V=O.near,K=O.far),O.layers.mask=X.layers.mask|6,M.layers.mask=O.layers.mask&3,x.layers.mask=O.layers.mask&5;const Ce=X.parent,Me=O.cameras;Ee(O,Ce);for(let Ge=0;Ge<Me.length;Ge++)Ee(Me[Ge],Ce);Me.length===2?ce(O,M,x):O.projectionMatrix.copy(M.projectionMatrix),Be(X,O,Ce)};function Be(X,$,de){de===null?X.matrix.copy($.matrixWorld):(X.matrix.copy(de.matrixWorld),X.matrix.invert(),X.matrix.multiply($.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy($.projectionMatrix),X.projectionMatrixInverse.copy($.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=oa*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(X){l=X,d!==null&&(d.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function(X){return h[X]};let Ze=null;function Qe(X,$){if(u=$.getViewerPose(c||a),_=$,u!==null){const de=u.views;p!==null&&(e.setRenderTargetFramebuffer(E,p.framebuffer),e.setRenderTarget(E));let Ce=!1;de.length!==O.cameras.length&&(O.cameras.length=0,Ce=!0);for(let A=0;A<de.length;A++){const et=de[A];let De=null;if(p!==null)De=p.getViewport(et);else{const me=f.getViewSubImage(d,et);De=me.viewport,A===0&&(e.setRenderTargetTextures(E,me.colorTexture,me.depthStencilTexture),e.setRenderTarget(E))}let we=P[A];we===void 0&&(we=new Ht,we.layers.enable(A),we.viewport=new at,P[A]=we),we.matrix.fromArray(et.transform.matrix),we.matrix.decompose(we.position,we.quaternion,we.scale),we.projectionMatrix.fromArray(et.projectionMatrix),we.projectionMatrixInverse.copy(we.projectionMatrix).invert(),we.viewport.set(De.x,De.y,De.width,De.height),A===0&&(O.matrix.copy(we.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Ce===!0&&O.cameras.push(we)}const Me=s.enabledFeatures;if(Me&&Me.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&S){f=n.getBinding();const A=f.getDepthInformation(de[0]);A&&A.isValid&&A.texture&&m.init(A,s.renderState)}if(Me&&Me.includes("camera-access")&&S){e.state.unbindTexture(),f=n.getBinding();for(let A=0;A<de.length;A++){const et=de[A].camera;if(et){let De=h[et];De||(De=new Sl,h[et]=De);const we=f.getCameraImage(et);De.sourceTexture=we}}}}for(let de=0;de<C.length;de++){const Ce=w[de],Me=C[de];Ce!==null&&Me!==void 0&&Me.update(Ce,$,c||a)}Ze&&Ze(X,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),_=null}const We=new El;We.setAnimationLoop(Qe),this.setAnimationLoop=function(X){Ze=X},this.dispose=function(){}}}const Dn=new $t,rm=new st;function am(i,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function n(m,h){h.color.getRGB(m.fogColor.value,fl(i)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function s(m,h,b,y,E){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(m,h):h.isMeshToonMaterial?(r(m,h),f(m,h)):h.isMeshPhongMaterial?(r(m,h),u(m,h)):h.isMeshStandardMaterial?(r(m,h),d(m,h),h.isMeshPhysicalMaterial&&p(m,h,E)):h.isMeshMatcapMaterial?(r(m,h),_(m,h)):h.isMeshDepthMaterial?r(m,h):h.isMeshDistanceMaterial?(r(m,h),S(m,h)):h.isMeshNormalMaterial?r(m,h):h.isLineBasicMaterial?(a(m,h),h.isLineDashedMaterial&&o(m,h)):h.isPointsMaterial?l(m,h,b,y):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===yt&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===yt&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const b=e.get(h),y=b.envMap,E=b.envMapRotation;y&&(m.envMap.value=y,Dn.copy(E),Dn.x*=-1,Dn.y*=-1,Dn.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Dn.y*=-1,Dn.z*=-1),m.envMapRotation.value.setFromMatrix4(rm.makeRotationFromEuler(Dn)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function a(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function o(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,b,y){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*b,m.scale.value=y*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function d(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,b){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===yt&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,h){h.matcap&&(m.matcap.value=h.matcap)}function S(m,h){const b=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function om(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,y){const E=y.program;n.uniformBlockBinding(b,E)}function c(b,y){let E=s[b.id];E===void 0&&(_(b),E=u(b),s[b.id]=E,b.addEventListener("dispose",m));const C=y.program;n.updateUBOMapping(b,C);const w=e.render.frame;r[b.id]!==w&&(d(b),r[b.id]=w)}function u(b){const y=f();b.__bindingPointIndex=y;const E=i.createBuffer(),C=b.__size,w=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,C,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,E),E}function f(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const y=s[b.id],E=b.uniforms,C=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let w=0,R=E.length;w<R;w++){const L=Array.isArray(E[w])?E[w]:[E[w]];for(let M=0,x=L.length;M<x;M++){const P=L[M];if(p(P,w,M,C)===!0){const O=P.__offset,V=Array.isArray(P.value)?P.value:[P.value];let K=0;for(let W=0;W<V.length;W++){const q=V[W],Z=S(q);typeof q=="number"||typeof q=="boolean"?(P.__data[0]=q,i.bufferSubData(i.UNIFORM_BUFFER,O+K,P.__data)):q.isMatrix3?(P.__data[0]=q.elements[0],P.__data[1]=q.elements[1],P.__data[2]=q.elements[2],P.__data[3]=0,P.__data[4]=q.elements[3],P.__data[5]=q.elements[4],P.__data[6]=q.elements[5],P.__data[7]=0,P.__data[8]=q.elements[6],P.__data[9]=q.elements[7],P.__data[10]=q.elements[8],P.__data[11]=0):(q.toArray(P.__data,K),K+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(b,y,E,C){const w=b.value,R=y+"_"+E;if(C[R]===void 0)return typeof w=="number"||typeof w=="boolean"?C[R]=w:C[R]=w.clone(),!0;{const L=C[R];if(typeof w=="number"||typeof w=="boolean"){if(L!==w)return C[R]=w,!0}else if(L.equals(w)===!1)return L.copy(w),!0}return!1}function _(b){const y=b.uniforms;let E=0;const C=16;for(let R=0,L=y.length;R<L;R++){const M=Array.isArray(y[R])?y[R]:[y[R]];for(let x=0,P=M.length;x<P;x++){const O=M[x],V=Array.isArray(O.value)?O.value:[O.value];for(let K=0,W=V.length;K<W;K++){const q=V[K],Z=S(q),H=E%C,re=H%Z.boundary,ce=H+re;E+=re,ce!==0&&C-ce<Z.storage&&(E+=C-ce),O.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=E,E+=Z.storage}}}const w=E%C;return w>0&&(E+=C-w),b.__size=E,b.__cache={},this}function S(b){const y={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(y.boundary=4,y.storage=4):b.isVector2?(y.boundary=8,y.storage=8):b.isVector3||b.isColor?(y.boundary=16,y.storage=12):b.isVector4?(y.boundary=16,y.storage=16):b.isMatrix3?(y.boundary=48,y.storage=48):b.isMatrix4?(y.boundary=64,y.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),y}function m(b){const y=b.target;y.removeEventListener("dispose",m);const E=a.indexOf(y.__bindingPointIndex);a.splice(E,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function h(){for(const b in s)i.deleteBuffer(s[b]);a=[],s={},r={}}return{bind:l,update:c,dispose:h}}class lm{constructor(e={}){const{canvas:t=Hc(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const _=new Uint32Array(4),S=new Int32Array(4);let m=null,h=null;const b=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Mn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let C=!1;this._outputColorSpace=Lt;let w=0,R=0,L=null,M=-1,x=null;const P=new at,O=new at;let V=null;const K=new Oe(0);let W=0,q=t.width,Z=t.height,H=1,re=null,ce=null;const Ee=new at(0,0,q,Z),Be=new at(0,0,q,Z);let Ze=!1;const Qe=new Ma;let We=!1,X=!1;const $=new st,de=new N,Ce=new at,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ge=!1;function pt(){return L===null?H:1}let A=n;function et(v,I){return t.getContext(v,I)}try{const v={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${da}`),t.addEventListener("webglcontextlost",ie,!1),t.addEventListener("webglcontextrestored",ue,!1),t.addEventListener("webglcontextcreationerror",J,!1),A===null){const I="webgl2";if(A=et(I,v),A===null)throw et(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let De,we,me,tt,ge,Ne,ut,ot,T,g,F,k,j,G,Se,ne,_e,ve,ee,le,Ae,xe,ae,Ie;function D(){De=new vf(A),De.init(),xe=new em(A,De),we=new uf(A,De,e,xe),me=new Jp(A,De),we.reversedDepthBuffer&&d&&me.buffers.depth.setReversed(!0),tt=new Mf(A),ge=new zp,Ne=new Qp(A,De,me,ge,we,xe,tt),ut=new ff(E),ot=new _f(E),T=new Ah(A),ae=new cf(A,T),g=new xf(A,T,tt,ae),F=new yf(A,g,T,tt),ee=new Ef(A,we,Ne),ne=new df(ge),k=new Bp(E,ut,ot,De,we,ae,ne),j=new am(E,ge),G=new Gp,Se=new Yp(De),ve=new lf(E,ut,ot,me,F,p,l),_e=new Zp(E,F,we),Ie=new om(A,tt,we,me),le=new hf(A,De,tt),Ae=new Sf(A,De,tt),tt.programs=k.programs,E.capabilities=we,E.extensions=De,E.properties=ge,E.renderLists=G,E.shadowMap=_e,E.state=me,E.info=tt}D();const te=new sm(E,A);this.xr=te,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){const v=De.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=De.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(v){v!==void 0&&(H=v,this.setSize(q,Z,!1))},this.getSize=function(v){return v.set(q,Z)},this.setSize=function(v,I,B=!0){if(te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=v,Z=I,t.width=Math.floor(v*H),t.height=Math.floor(I*H),B===!0&&(t.style.width=v+"px",t.style.height=I+"px"),this.setViewport(0,0,v,I)},this.getDrawingBufferSize=function(v){return v.set(q*H,Z*H).floor()},this.setDrawingBufferSize=function(v,I,B){q=v,Z=I,H=B,t.width=Math.floor(v*B),t.height=Math.floor(I*B),this.setViewport(0,0,v,I)},this.getCurrentViewport=function(v){return v.copy(P)},this.getViewport=function(v){return v.copy(Ee)},this.setViewport=function(v,I,B,z){v.isVector4?Ee.set(v.x,v.y,v.z,v.w):Ee.set(v,I,B,z),me.viewport(P.copy(Ee).multiplyScalar(H).round())},this.getScissor=function(v){return v.copy(Be)},this.setScissor=function(v,I,B,z){v.isVector4?Be.set(v.x,v.y,v.z,v.w):Be.set(v,I,B,z),me.scissor(O.copy(Be).multiplyScalar(H).round())},this.getScissorTest=function(){return Ze},this.setScissorTest=function(v){me.setScissorTest(Ze=v)},this.setOpaqueSort=function(v){re=v},this.setTransparentSort=function(v){ce=v},this.getClearColor=function(v){return v.copy(ve.getClearColor())},this.setClearColor=function(){ve.setClearColor(...arguments)},this.getClearAlpha=function(){return ve.getClearAlpha()},this.setClearAlpha=function(){ve.setClearAlpha(...arguments)},this.clear=function(v=!0,I=!0,B=!0){let z=0;if(v){let U=!1;if(L!==null){const Q=L.texture.format;U=Q===xa||Q===va||Q===_a}if(U){const Q=L.texture.type,oe=Q===Gt||Q===zn||Q===Ri||Q===Ci||Q===ma||Q===ga,fe=ve.getClearColor(),he=ve.getClearAlpha(),be=fe.r,Re=fe.g,ye=fe.b;oe?(_[0]=be,_[1]=Re,_[2]=ye,_[3]=he,A.clearBufferuiv(A.COLOR,0,_)):(S[0]=be,S[1]=Re,S[2]=ye,S[3]=he,A.clearBufferiv(A.COLOR,0,S))}else z|=A.COLOR_BUFFER_BIT}I&&(z|=A.DEPTH_BUFFER_BIT),B&&(z|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ie,!1),t.removeEventListener("webglcontextrestored",ue,!1),t.removeEventListener("webglcontextcreationerror",J,!1),ve.dispose(),G.dispose(),Se.dispose(),ge.dispose(),ut.dispose(),ot.dispose(),F.dispose(),ae.dispose(),Ie.dispose(),k.dispose(),te.dispose(),te.removeEventListener("sessionstart",kt),te.removeEventListener("sessionend",ba),Tn.stop()};function ie(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function ue(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const v=tt.autoReset,I=_e.enabled,B=_e.autoUpdate,z=_e.needsUpdate,U=_e.type;D(),tt.autoReset=v,_e.enabled=I,_e.autoUpdate=B,_e.needsUpdate=z,_e.type=U}function J(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Y(v){const I=v.target;I.removeEventListener("dispose",Y),pe(I)}function pe(v){Pe(v),ge.remove(v)}function Pe(v){const I=ge.get(v).programs;I!==void 0&&(I.forEach(function(B){k.releaseProgram(B)}),v.isShaderMaterial&&k.releaseShaderCache(v))}this.renderBufferDirect=function(v,I,B,z,U,Q){I===null&&(I=Me);const oe=U.isMesh&&U.matrixWorld.determinant()<0,fe=ql(v,I,B,z,U);me.setMaterial(z,oe);let he=B.index,be=1;if(z.wireframe===!0){if(he=g.getWireframeAttribute(B),he===void 0)return;be=2}const Re=B.drawRange,ye=B.attributes.position;let ze=Re.start*be,qe=(Re.start+Re.count)*be;Q!==null&&(ze=Math.max(ze,Q.start*be),qe=Math.min(qe,(Q.start+Q.count)*be)),he!==null?(ze=Math.max(ze,0),qe=Math.min(qe,he.count)):ye!=null&&(ze=Math.max(ze,0),qe=Math.min(qe,ye.count));const rt=qe-ze;if(rt<0||rt===1/0)return;ae.setup(U,z,fe,B,he);let Je,je=le;if(he!==null&&(Je=T.get(he),je=Ae,je.setIndex(Je)),U.isMesh)z.wireframe===!0?(me.setLineWidth(z.wireframeLinewidth*pt()),je.setMode(A.LINES)):je.setMode(A.TRIANGLES);else if(U.isLine){let Te=z.linewidth;Te===void 0&&(Te=1),me.setLineWidth(Te*pt()),U.isLineSegments?je.setMode(A.LINES):U.isLineLoop?je.setMode(A.LINE_LOOP):je.setMode(A.LINE_STRIP)}else U.isPoints?je.setMode(A.POINTS):U.isSprite&&je.setMode(A.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Li("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),je.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(De.get("WEBGL_multi_draw"))je.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Te=U._multiDrawStarts,nt=U._multiDrawCounts,Ve=U._multiDrawCount,Tt=he?T.get(he).bytesPerElement:1,Gn=ge.get(z).currentProgram.getUniforms();for(let bt=0;bt<Ve;bt++)Gn.setValue(A,"_gl_DrawID",bt),je.render(Te[bt]/Tt,nt[bt])}else if(U.isInstancedMesh)je.renderInstances(ze,rt,U.count);else if(B.isInstancedBufferGeometry){const Te=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,nt=Math.min(B.instanceCount,Te);je.renderInstances(ze,rt,nt)}else je.render(ze,rt)};function $e(v,I,B){v.transparent===!0&&v.side===on&&v.forceSinglePass===!1?(v.side=yt,v.needsUpdate=!0,Bi(v,I,B),v.side=yn,v.needsUpdate=!0,Bi(v,I,B),v.side=on):Bi(v,I,B)}this.compile=function(v,I,B=null){B===null&&(B=v),h=Se.get(B),h.init(I),y.push(h),B.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(h.pushLight(U),U.castShadow&&h.pushShadow(U))}),v!==B&&v.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(h.pushLight(U),U.castShadow&&h.pushShadow(U))}),h.setupLights();const z=new Set;return v.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const Q=U.material;if(Q)if(Array.isArray(Q))for(let oe=0;oe<Q.length;oe++){const fe=Q[oe];$e(fe,B,U),z.add(fe)}else $e(Q,B,U),z.add(Q)}),h=y.pop(),z},this.compileAsync=function(v,I,B=null){const z=this.compile(v,I,B);return new Promise(U=>{function Q(){if(z.forEach(function(oe){ge.get(oe).currentProgram.isReady()&&z.delete(oe)}),z.size===0){U(v);return}setTimeout(Q,10)}De.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let Xe=null;function Jt(v){Xe&&Xe(v)}function kt(){Tn.stop()}function ba(){Tn.start()}const Tn=new El;Tn.setAnimationLoop(Jt),typeof self<"u"&&Tn.setContext(self),this.setAnimationLoop=function(v){Xe=v,te.setAnimationLoop(v),v===null?Tn.stop():Tn.start()},te.addEventListener("sessionstart",kt),te.addEventListener("sessionend",ba),this.render=function(v,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),te.enabled===!0&&te.isPresenting===!0&&(te.cameraAutoUpdate===!0&&te.updateCamera(I),I=te.getCamera()),v.isScene===!0&&v.onBeforeRender(E,v,I,L),h=Se.get(v,y.length),h.init(I),y.push(h),$.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Qe.setFromProjectionMatrix($,jt,I.reversedDepth),X=this.localClippingEnabled,We=ne.init(this.clippingPlanes,X),m=G.get(v,b.length),m.init(),b.push(m),te.enabled===!0&&te.isPresenting===!0){const Q=E.xr.getDepthSensingMesh();Q!==null&&Cs(Q,I,-1/0,E.sortObjects)}Cs(v,I,0,E.sortObjects),m.finish(),E.sortObjects===!0&&m.sort(re,ce),Ge=te.enabled===!1||te.isPresenting===!1||te.hasDepthSensing()===!1,Ge&&ve.addToRenderList(m,v),this.info.render.frame++,We===!0&&ne.beginShadows();const B=h.state.shadowsArray;_e.render(B,v,I),We===!0&&ne.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=m.opaque,U=m.transmissive;if(h.setupLights(),I.isArrayCamera){const Q=I.cameras;if(U.length>0)for(let oe=0,fe=Q.length;oe<fe;oe++){const he=Q[oe];wa(z,U,v,he)}Ge&&ve.render(v);for(let oe=0,fe=Q.length;oe<fe;oe++){const he=Q[oe];Aa(m,v,he,he.viewport)}}else U.length>0&&wa(z,U,v,I),Ge&&ve.render(v),Aa(m,v,I);L!==null&&R===0&&(Ne.updateMultisampleRenderTarget(L),Ne.updateRenderTargetMipmap(L)),v.isScene===!0&&v.onAfterRender(E,v,I),ae.resetDefaultState(),M=-1,x=null,y.pop(),y.length>0?(h=y[y.length-1],We===!0&&ne.setGlobalState(E.clippingPlanes,h.state.camera)):h=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function Cs(v,I,B,z){if(v.visible===!1)return;if(v.layers.test(I.layers)){if(v.isGroup)B=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(I);else if(v.isLight)h.pushLight(v),v.castShadow&&h.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||Qe.intersectsSprite(v)){z&&Ce.setFromMatrixPosition(v.matrixWorld).applyMatrix4($);const oe=F.update(v),fe=v.material;fe.visible&&m.push(v,oe,fe,B,Ce.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||Qe.intersectsObject(v))){const oe=F.update(v),fe=v.material;if(z&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Ce.copy(v.boundingSphere.center)):(oe.boundingSphere===null&&oe.computeBoundingSphere(),Ce.copy(oe.boundingSphere.center)),Ce.applyMatrix4(v.matrixWorld).applyMatrix4($)),Array.isArray(fe)){const he=oe.groups;for(let be=0,Re=he.length;be<Re;be++){const ye=he[be],ze=fe[ye.materialIndex];ze&&ze.visible&&m.push(v,oe,ze,B,Ce.z,ye)}}else fe.visible&&m.push(v,oe,fe,B,Ce.z,null)}}const Q=v.children;for(let oe=0,fe=Q.length;oe<fe;oe++)Cs(Q[oe],I,B,z)}function Aa(v,I,B,z){const U=v.opaque,Q=v.transmissive,oe=v.transparent;h.setupLightsView(B),We===!0&&ne.setGlobalState(E.clippingPlanes,B),z&&me.viewport(P.copy(z)),U.length>0&&Oi(U,I,B),Q.length>0&&Oi(Q,I,B),oe.length>0&&Oi(oe,I,B),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function wa(v,I,B,z){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[z.id]===void 0&&(h.state.transmissionRenderTarget[z.id]=new hn(1,1,{generateMipmaps:!0,type:De.has("EXT_color_buffer_half_float")||De.has("EXT_color_buffer_float")?Ii:Gt,minFilter:On,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ke.workingColorSpace}));const Q=h.state.transmissionRenderTarget[z.id],oe=z.viewport||P;Q.setSize(oe.z*E.transmissionResolutionScale,oe.w*E.transmissionResolutionScale);const fe=E.getRenderTarget(),he=E.getActiveCubeFace(),be=E.getActiveMipmapLevel();E.setRenderTarget(Q),E.getClearColor(K),W=E.getClearAlpha(),W<1&&E.setClearColor(16777215,.5),E.clear(),Ge&&ve.render(B);const Re=E.toneMapping;E.toneMapping=Mn;const ye=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),h.setupLightsView(z),We===!0&&ne.setGlobalState(E.clippingPlanes,z),Oi(v,B,z),Ne.updateMultisampleRenderTarget(Q),Ne.updateRenderTargetMipmap(Q),De.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let qe=0,rt=I.length;qe<rt;qe++){const Je=I[qe],je=Je.object,Te=Je.geometry,nt=Je.material,Ve=Je.group;if(nt.side===on&&je.layers.test(z.layers)){const Tt=nt.side;nt.side=yt,nt.needsUpdate=!0,Ra(je,B,z,Te,nt,Ve),nt.side=Tt,nt.needsUpdate=!0,ze=!0}}ze===!0&&(Ne.updateMultisampleRenderTarget(Q),Ne.updateRenderTargetMipmap(Q))}E.setRenderTarget(fe,he,be),E.setClearColor(K,W),ye!==void 0&&(z.viewport=ye),E.toneMapping=Re}function Oi(v,I,B){const z=I.isScene===!0?I.overrideMaterial:null;for(let U=0,Q=v.length;U<Q;U++){const oe=v[U],fe=oe.object,he=oe.geometry,be=oe.group;let Re=oe.material;Re.allowOverride===!0&&z!==null&&(Re=z),fe.layers.test(B.layers)&&Ra(fe,I,B,he,Re,be)}}function Ra(v,I,B,z,U,Q){v.onBeforeRender(E,I,B,z,U,Q),v.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),U.onBeforeRender(E,I,B,z,v,Q),U.transparent===!0&&U.side===on&&U.forceSinglePass===!1?(U.side=yt,U.needsUpdate=!0,E.renderBufferDirect(B,I,z,U,v,Q),U.side=yn,U.needsUpdate=!0,E.renderBufferDirect(B,I,z,U,v,Q),U.side=on):E.renderBufferDirect(B,I,z,U,v,Q),v.onAfterRender(E,I,B,z,U,Q)}function Bi(v,I,B){I.isScene!==!0&&(I=Me);const z=ge.get(v),U=h.state.lights,Q=h.state.shadowsArray,oe=U.state.version,fe=k.getParameters(v,U.state,Q,I,B),he=k.getProgramCacheKey(fe);let be=z.programs;z.environment=v.isMeshStandardMaterial?I.environment:null,z.fog=I.fog,z.envMap=(v.isMeshStandardMaterial?ot:ut).get(v.envMap||z.environment),z.envMapRotation=z.environment!==null&&v.envMap===null?I.environmentRotation:v.envMapRotation,be===void 0&&(v.addEventListener("dispose",Y),be=new Map,z.programs=be);let Re=be.get(he);if(Re!==void 0){if(z.currentProgram===Re&&z.lightsStateVersion===oe)return Pa(v,fe),Re}else fe.uniforms=k.getUniforms(v),v.onBeforeCompile(fe,E),Re=k.acquireProgram(fe,he),be.set(he,Re),z.uniforms=fe.uniforms;const ye=z.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(ye.clippingPlanes=ne.uniform),Pa(v,fe),z.needsLights=Kl(v),z.lightsStateVersion=oe,z.needsLights&&(ye.ambientLightColor.value=U.state.ambient,ye.lightProbe.value=U.state.probe,ye.directionalLights.value=U.state.directional,ye.directionalLightShadows.value=U.state.directionalShadow,ye.spotLights.value=U.state.spot,ye.spotLightShadows.value=U.state.spotShadow,ye.rectAreaLights.value=U.state.rectArea,ye.ltc_1.value=U.state.rectAreaLTC1,ye.ltc_2.value=U.state.rectAreaLTC2,ye.pointLights.value=U.state.point,ye.pointLightShadows.value=U.state.pointShadow,ye.hemisphereLights.value=U.state.hemi,ye.directionalShadowMap.value=U.state.directionalShadowMap,ye.directionalShadowMatrix.value=U.state.directionalShadowMatrix,ye.spotShadowMap.value=U.state.spotShadowMap,ye.spotLightMatrix.value=U.state.spotLightMatrix,ye.spotLightMap.value=U.state.spotLightMap,ye.pointShadowMap.value=U.state.pointShadowMap,ye.pointShadowMatrix.value=U.state.pointShadowMatrix),z.currentProgram=Re,z.uniformsList=null,Re}function Ca(v){if(v.uniformsList===null){const I=v.currentProgram.getUniforms();v.uniformsList=ms.seqWithValue(I.seq,v.uniforms)}return v.uniformsList}function Pa(v,I){const B=ge.get(v);B.outputColorSpace=I.outputColorSpace,B.batching=I.batching,B.batchingColor=I.batchingColor,B.instancing=I.instancing,B.instancingColor=I.instancingColor,B.instancingMorph=I.instancingMorph,B.skinning=I.skinning,B.morphTargets=I.morphTargets,B.morphNormals=I.morphNormals,B.morphColors=I.morphColors,B.morphTargetsCount=I.morphTargetsCount,B.numClippingPlanes=I.numClippingPlanes,B.numIntersection=I.numClipIntersection,B.vertexAlphas=I.vertexAlphas,B.vertexTangents=I.vertexTangents,B.toneMapping=I.toneMapping}function ql(v,I,B,z,U){I.isScene!==!0&&(I=Me),Ne.resetTextureUnits();const Q=I.fog,oe=z.isMeshStandardMaterial?I.environment:null,fe=L===null?E.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:di,he=(z.isMeshStandardMaterial?ot:ut).get(z.envMap||oe),be=z.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Re=!!B.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),ye=!!B.morphAttributes.position,ze=!!B.morphAttributes.normal,qe=!!B.morphAttributes.color;let rt=Mn;z.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(rt=E.toneMapping);const Je=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,je=Je!==void 0?Je.length:0,Te=ge.get(z),nt=h.state.lights;if(We===!0&&(X===!0||v!==x)){const _t=v===x&&z.id===M;ne.setState(z,v,_t)}let Ve=!1;z.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==nt.state.version||Te.outputColorSpace!==fe||U.isBatchedMesh&&Te.batching===!1||!U.isBatchedMesh&&Te.batching===!0||U.isBatchedMesh&&Te.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Te.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Te.instancing===!1||!U.isInstancedMesh&&Te.instancing===!0||U.isSkinnedMesh&&Te.skinning===!1||!U.isSkinnedMesh&&Te.skinning===!0||U.isInstancedMesh&&Te.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Te.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Te.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Te.instancingMorph===!1&&U.morphTexture!==null||Te.envMap!==he||z.fog===!0&&Te.fog!==Q||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==ne.numPlanes||Te.numIntersection!==ne.numIntersection)||Te.vertexAlphas!==be||Te.vertexTangents!==Re||Te.morphTargets!==ye||Te.morphNormals!==ze||Te.morphColors!==qe||Te.toneMapping!==rt||Te.morphTargetsCount!==je)&&(Ve=!0):(Ve=!0,Te.__version=z.version);let Tt=Te.currentProgram;Ve===!0&&(Tt=Bi(z,I,U));let Gn=!1,bt=!1,_i=!1;const it=Tt.getUniforms(),Ct=Te.uniforms;if(me.useProgram(Tt.program)&&(Gn=!0,bt=!0,_i=!0),z.id!==M&&(M=z.id,bt=!0),Gn||x!==v){me.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),it.setValue(A,"projectionMatrix",v.projectionMatrix),it.setValue(A,"viewMatrix",v.matrixWorldInverse);const Et=it.map.cameraPosition;Et!==void 0&&Et.setValue(A,de.setFromMatrixPosition(v.matrixWorld)),we.logarithmicDepthBuffer&&it.setValue(A,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&it.setValue(A,"isOrthographic",v.isOrthographicCamera===!0),x!==v&&(x=v,bt=!0,_i=!0)}if(U.isSkinnedMesh){it.setOptional(A,U,"bindMatrix"),it.setOptional(A,U,"bindMatrixInverse");const _t=U.skeleton;_t&&(_t.boneTexture===null&&_t.computeBoneTexture(),it.setValue(A,"boneTexture",_t.boneTexture,Ne))}U.isBatchedMesh&&(it.setOptional(A,U,"batchingTexture"),it.setValue(A,"batchingTexture",U._matricesTexture,Ne),it.setOptional(A,U,"batchingIdTexture"),it.setValue(A,"batchingIdTexture",U._indirectTexture,Ne),it.setOptional(A,U,"batchingColorTexture"),U._colorsTexture!==null&&it.setValue(A,"batchingColorTexture",U._colorsTexture,Ne));const Pt=B.morphAttributes;if((Pt.position!==void 0||Pt.normal!==void 0||Pt.color!==void 0)&&ee.update(U,B,Tt),(bt||Te.receiveShadow!==U.receiveShadow)&&(Te.receiveShadow=U.receiveShadow,it.setValue(A,"receiveShadow",U.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Ct.envMap.value=he,Ct.flipEnvMap.value=he.isCubeTexture&&he.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&I.environment!==null&&(Ct.envMapIntensity.value=I.environmentIntensity),bt&&(it.setValue(A,"toneMappingExposure",E.toneMappingExposure),Te.needsLights&&Yl(Ct,_i),Q&&z.fog===!0&&j.refreshFogUniforms(Ct,Q),j.refreshMaterialUniforms(Ct,z,H,Z,h.state.transmissionRenderTarget[v.id]),ms.upload(A,Ca(Te),Ct,Ne)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(ms.upload(A,Ca(Te),Ct,Ne),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&it.setValue(A,"center",U.center),it.setValue(A,"modelViewMatrix",U.modelViewMatrix),it.setValue(A,"normalMatrix",U.normalMatrix),it.setValue(A,"modelMatrix",U.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const _t=z.uniformsGroups;for(let Et=0,Ps=_t.length;Et<Ps;Et++){const bn=_t[Et];Ie.update(bn,Tt),Ie.bind(bn,Tt)}}return Tt}function Yl(v,I){v.ambientLightColor.needsUpdate=I,v.lightProbe.needsUpdate=I,v.directionalLights.needsUpdate=I,v.directionalLightShadows.needsUpdate=I,v.pointLights.needsUpdate=I,v.pointLightShadows.needsUpdate=I,v.spotLights.needsUpdate=I,v.spotLightShadows.needsUpdate=I,v.rectAreaLights.needsUpdate=I,v.hemisphereLights.needsUpdate=I}function Kl(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(v,I,B){const z=ge.get(v);z.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),ge.get(v.texture).__webglTexture=I,ge.get(v.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:B,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,I){const B=ge.get(v);B.__webglFramebuffer=I,B.__useDefaultFramebuffer=I===void 0};const jl=A.createFramebuffer();this.setRenderTarget=function(v,I=0,B=0){L=v,w=I,R=B;let z=!0,U=null,Q=!1,oe=!1;if(v){const he=ge.get(v);if(he.__useDefaultFramebuffer!==void 0)me.bindFramebuffer(A.FRAMEBUFFER,null),z=!1;else if(he.__webglFramebuffer===void 0)Ne.setupRenderTarget(v);else if(he.__hasExternalTextures)Ne.rebindTextures(v,ge.get(v.texture).__webglTexture,ge.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const ye=v.depthTexture;if(he.__boundDepthTexture!==ye){if(ye!==null&&ge.has(ye)&&(v.width!==ye.image.width||v.height!==ye.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ne.setupDepthRenderbuffer(v)}}const be=v.texture;(be.isData3DTexture||be.isDataArrayTexture||be.isCompressedArrayTexture)&&(oe=!0);const Re=ge.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Re[I])?U=Re[I][B]:U=Re[I],Q=!0):v.samples>0&&Ne.useMultisampledRTT(v)===!1?U=ge.get(v).__webglMultisampledFramebuffer:Array.isArray(Re)?U=Re[B]:U=Re,P.copy(v.viewport),O.copy(v.scissor),V=v.scissorTest}else P.copy(Ee).multiplyScalar(H).floor(),O.copy(Be).multiplyScalar(H).floor(),V=Ze;if(B!==0&&(U=jl),me.bindFramebuffer(A.FRAMEBUFFER,U)&&z&&me.drawBuffers(v,U),me.viewport(P),me.scissor(O),me.setScissorTest(V),Q){const he=ge.get(v.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+I,he.__webglTexture,B)}else if(oe){const he=I;for(let be=0;be<v.textures.length;be++){const Re=ge.get(v.textures[be]);A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0+be,Re.__webglTexture,B,he)}}else if(v!==null&&B!==0){const he=ge.get(v.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,he.__webglTexture,B)}M=-1},this.readRenderTargetPixels=function(v,I,B,z,U,Q,oe,fe=0){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let he=ge.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&oe!==void 0&&(he=he[oe]),he){me.bindFramebuffer(A.FRAMEBUFFER,he);try{const be=v.textures[fe],Re=be.format,ye=be.type;if(!we.textureFormatReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!we.textureTypeReadable(ye)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=v.width-z&&B>=0&&B<=v.height-U&&(v.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+fe),A.readPixels(I,B,z,U,xe.convert(Re),xe.convert(ye),Q))}finally{const be=L!==null?ge.get(L).__webglFramebuffer:null;me.bindFramebuffer(A.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(v,I,B,z,U,Q,oe,fe=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let he=ge.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&oe!==void 0&&(he=he[oe]),he)if(I>=0&&I<=v.width-z&&B>=0&&B<=v.height-U){me.bindFramebuffer(A.FRAMEBUFFER,he);const be=v.textures[fe],Re=be.format,ye=be.type;if(!we.textureFormatReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!we.textureTypeReadable(ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ze=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,ze),A.bufferData(A.PIXEL_PACK_BUFFER,Q.byteLength,A.STREAM_READ),v.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+fe),A.readPixels(I,B,z,U,xe.convert(Re),xe.convert(ye),0);const qe=L!==null?ge.get(L).__webglFramebuffer:null;me.bindFramebuffer(A.FRAMEBUFFER,qe);const rt=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await Gc(A,rt,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,ze),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,Q),A.deleteBuffer(ze),A.deleteSync(rt),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,I=null,B=0){const z=Math.pow(2,-B),U=Math.floor(v.image.width*z),Q=Math.floor(v.image.height*z),oe=I!==null?I.x:0,fe=I!==null?I.y:0;Ne.setTexture2D(v,0),A.copyTexSubImage2D(A.TEXTURE_2D,B,0,0,oe,fe,U,Q),me.unbindTexture()};const Zl=A.createFramebuffer(),$l=A.createFramebuffer();this.copyTextureToTexture=function(v,I,B=null,z=null,U=0,Q=null){Q===null&&(U!==0?(Li("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Q=U,U=0):Q=0);let oe,fe,he,be,Re,ye,ze,qe,rt;const Je=v.isCompressedTexture?v.mipmaps[Q]:v.image;if(B!==null)oe=B.max.x-B.min.x,fe=B.max.y-B.min.y,he=B.isBox3?B.max.z-B.min.z:1,be=B.min.x,Re=B.min.y,ye=B.isBox3?B.min.z:0;else{const Pt=Math.pow(2,-U);oe=Math.floor(Je.width*Pt),fe=Math.floor(Je.height*Pt),v.isDataArrayTexture?he=Je.depth:v.isData3DTexture?he=Math.floor(Je.depth*Pt):he=1,be=0,Re=0,ye=0}z!==null?(ze=z.x,qe=z.y,rt=z.z):(ze=0,qe=0,rt=0);const je=xe.convert(I.format),Te=xe.convert(I.type);let nt;I.isData3DTexture?(Ne.setTexture3D(I,0),nt=A.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(Ne.setTexture2DArray(I,0),nt=A.TEXTURE_2D_ARRAY):(Ne.setTexture2D(I,0),nt=A.TEXTURE_2D),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,I.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,I.unpackAlignment);const Ve=A.getParameter(A.UNPACK_ROW_LENGTH),Tt=A.getParameter(A.UNPACK_IMAGE_HEIGHT),Gn=A.getParameter(A.UNPACK_SKIP_PIXELS),bt=A.getParameter(A.UNPACK_SKIP_ROWS),_i=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,Je.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Je.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,be),A.pixelStorei(A.UNPACK_SKIP_ROWS,Re),A.pixelStorei(A.UNPACK_SKIP_IMAGES,ye);const it=v.isDataArrayTexture||v.isData3DTexture,Ct=I.isDataArrayTexture||I.isData3DTexture;if(v.isDepthTexture){const Pt=ge.get(v),_t=ge.get(I),Et=ge.get(Pt.__renderTarget),Ps=ge.get(_t.__renderTarget);me.bindFramebuffer(A.READ_FRAMEBUFFER,Et.__webglFramebuffer),me.bindFramebuffer(A.DRAW_FRAMEBUFFER,Ps.__webglFramebuffer);for(let bn=0;bn<he;bn++)it&&(A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,ge.get(v).__webglTexture,U,ye+bn),A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,ge.get(I).__webglTexture,Q,rt+bn)),A.blitFramebuffer(be,Re,oe,fe,ze,qe,oe,fe,A.DEPTH_BUFFER_BIT,A.NEAREST);me.bindFramebuffer(A.READ_FRAMEBUFFER,null),me.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else if(U!==0||v.isRenderTargetTexture||ge.has(v)){const Pt=ge.get(v),_t=ge.get(I);me.bindFramebuffer(A.READ_FRAMEBUFFER,Zl),me.bindFramebuffer(A.DRAW_FRAMEBUFFER,$l);for(let Et=0;Et<he;Et++)it?A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Pt.__webglTexture,U,ye+Et):A.framebufferTexture2D(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Pt.__webglTexture,U),Ct?A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,_t.__webglTexture,Q,rt+Et):A.framebufferTexture2D(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,_t.__webglTexture,Q),U!==0?A.blitFramebuffer(be,Re,oe,fe,ze,qe,oe,fe,A.COLOR_BUFFER_BIT,A.NEAREST):Ct?A.copyTexSubImage3D(nt,Q,ze,qe,rt+Et,be,Re,oe,fe):A.copyTexSubImage2D(nt,Q,ze,qe,be,Re,oe,fe);me.bindFramebuffer(A.READ_FRAMEBUFFER,null),me.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else Ct?v.isDataTexture||v.isData3DTexture?A.texSubImage3D(nt,Q,ze,qe,rt,oe,fe,he,je,Te,Je.data):I.isCompressedArrayTexture?A.compressedTexSubImage3D(nt,Q,ze,qe,rt,oe,fe,he,je,Je.data):A.texSubImage3D(nt,Q,ze,qe,rt,oe,fe,he,je,Te,Je):v.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,Q,ze,qe,oe,fe,je,Te,Je.data):v.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,Q,ze,qe,Je.width,Je.height,je,Je.data):A.texSubImage2D(A.TEXTURE_2D,Q,ze,qe,oe,fe,je,Te,Je);A.pixelStorei(A.UNPACK_ROW_LENGTH,Ve),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Tt),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Gn),A.pixelStorei(A.UNPACK_SKIP_ROWS,bt),A.pixelStorei(A.UNPACK_SKIP_IMAGES,_i),Q===0&&I.generateMipmaps&&A.generateMipmap(nt),me.unbindTexture()},this.initRenderTarget=function(v){ge.get(v).__webglFramebuffer===void 0&&Ne.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?Ne.setTextureCube(v,0):v.isData3DTexture?Ne.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?Ne.setTexture2DArray(v,0):Ne.setTexture2D(v,0),me.unbindTexture()},this.resetState=function(){w=0,R=0,L=null,me.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return jt}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=ke._getUnpackColorSpace()}}const Xt=160,an=90,ur=Xt/an,dr=320,fr=180,cm=1/60,hm=.1,Io=0,um=-.5,dm=-.8,fm=-1,Uo=-.9,wl=80,pm=1,mm=.12,pr=2.5,mr=.25,gm=.04,gr=.08,No=20,Fo=45,Oo=65,Rl=10,Cl=6,Bo=3,_m=2,vm=.1,xm=.16,zo=6,Ho=154,Go=5,Vo=85,Sm=150,ha=4,ua=2,Pl=60,Mm=165,Em=1,Dl=35,ym=100,Ll=8,Il=6,vn=170,Tm=-15,bm=2,Am=28,wm=200,Rm=10,Cm=8,Pm=1,Dm=42,Lm=250,Im=10,Um=7,Nm=3,Fm=22,Om=350,Bm=12,zm=10,Hm=3,Gm=3,Vm=-10,Ul=30,km=1.3,_r=50,Nl=32,Fl=24,Wm=28,Xm=20,qm=5e3,ko=9615264,Ym=993821,Wo=2513983,Km=5410661,Xo="starfall84_high_score";class jm{ctx=null;masterGain=null;noiseBuffer=null;muted=!1;volume=.3;constructor(){}initContext(){if(this.ctx)return this.ctx.state==="suspended"&&this.ctx.resume(),!0;try{const e=window.AudioContext||window.webkitAudioContext;if(!e)return!1;this.ctx=new e,this.masterGain=this.ctx.createGain(),this.masterGain.gain.setValueAtTime(this.muted?0:this.volume,this.ctx.currentTime),this.masterGain.connect(this.ctx.destination);const t=this.ctx.sampleRate;this.noiseBuffer=this.ctx.createBuffer(1,t,this.ctx.sampleRate);const n=this.noiseBuffer.getChannelData(0);for(let s=0;s<t;s++)n[s]=Math.random()*2-1;return!0}catch{return!1}}unlock(){this.initContext()}playShoot(){if(!this.initContext()||!this.ctx||!this.masterGain||this.muted)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="square",t.frequency.setValueAtTime(460,e),t.frequency.exponentialRampToValueAtTime(220,e+.07),n.gain.setValueAtTime(.12,e),n.gain.exponentialRampToValueAtTime(.001,e+.07),t.connect(n),n.connect(this.masterGain),t.start(e),t.stop(e+.07)}playEnemyShoot(){if(!this.initContext()||!this.ctx||!this.masterGain||this.muted)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="sawtooth",t.frequency.setValueAtTime(260,e),t.frequency.exponentialRampToValueAtTime(120,e+.08),n.gain.setValueAtTime(.09,e),n.gain.exponentialRampToValueAtTime(.001,e+.08),t.connect(n),n.connect(this.masterGain),t.start(e),t.stop(e+.08)}playImpact(){if(!this.initContext()||!this.ctx||!this.masterGain||this.muted)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="triangle",t.frequency.setValueAtTime(550,e),t.frequency.exponentialRampToValueAtTime(200,e+.035),n.gain.setValueAtTime(.15,e),n.gain.exponentialRampToValueAtTime(.001,e+.035),t.connect(n),n.connect(this.masterGain),t.start(e),t.stop(e+.035)}playExplosion(){if(!this.initContext()||!this.ctx||!this.masterGain||!this.noiseBuffer||this.muted)return;const e=this.ctx.currentTime,t=this.ctx.createBufferSource();t.buffer=this.noiseBuffer;const n=this.ctx.createBiquadFilter();n.type="lowpass",n.frequency.setValueAtTime(750,e),n.frequency.exponentialRampToValueAtTime(80,e+.22);const s=this.ctx.createGain();s.gain.setValueAtTime(.28,e),s.gain.exponentialRampToValueAtTime(.001,e+.22),t.connect(n),n.connect(s),s.connect(this.masterGain),t.start(e),t.stop(e+.22)}playPlayerHit(){if(!this.initContext()||!this.ctx||!this.masterGain||this.muted)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="sawtooth",t.frequency.setValueAtTime(240,e),t.frequency.exponentialRampToValueAtTime(75,e+.2),n.gain.setValueAtTime(.3,e),n.gain.exponentialRampToValueAtTime(.001,e+.2),t.connect(n),n.connect(this.masterGain),t.start(e),t.stop(e+.2)}playGameOver(){if(!this.initContext()||!this.ctx||!this.masterGain||this.muted)return;const e=this.ctx.currentTime,t=[{freq:220,duration:.15,time:e},{freq:174,duration:.15,time:e+.16},{freq:130,duration:.35,time:e+.32}];for(const n of t){const s=this.ctx.createOscillator(),r=this.ctx.createGain();s.type="square",s.frequency.setValueAtTime(n.freq,n.time),r.gain.setValueAtTime(.2,n.time),r.gain.exponentialRampToValueAtTime(.001,n.time+n.duration),s.connect(r),r.connect(this.masterGain),s.start(n.time),s.stop(n.time+n.duration)}}playWarningSiren(){if(!this.initContext()||!this.ctx||!this.masterGain||this.muted)return;const e=this.ctx.currentTime;for(let t=0;t<3;t++){const n=e+t*.35,s=this.ctx.createOscillator(),r=this.ctx.createGain();s.type="square",s.frequency.setValueAtTime(700,n),s.frequency.setValueAtTime(450,n+.16),r.gain.setValueAtTime(.12,n),r.gain.setValueAtTime(.12,n+.28),r.gain.exponentialRampToValueAtTime(.001,n+.32),s.connect(r),r.connect(this.masterGain),s.start(n),s.stop(n+.32)}}playBossShoot(){if(!this.initContext()||!this.ctx||!this.masterGain||this.muted)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="sawtooth",t.frequency.setValueAtTime(180,e),t.frequency.exponentialRampToValueAtTime(65,e+.14),n.gain.setValueAtTime(.18,e),n.gain.exponentialRampToValueAtTime(.001,e+.14),t.connect(n),n.connect(this.masterGain),t.start(e),t.stop(e+.14)}playBossHit(){if(!this.initContext()||!this.ctx||!this.masterGain||this.muted)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="triangle",t.frequency.setValueAtTime(320,e),t.frequency.exponentialRampToValueAtTime(90,e+.08),n.gain.setValueAtTime(.25,e),n.gain.exponentialRampToValueAtTime(.001,e+.08),t.connect(n),n.connect(this.masterGain),t.start(e),t.stop(e+.08)}playBossSurge(){if(!this.initContext()||!this.ctx||!this.masterGain||this.muted)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="sawtooth",t.frequency.setValueAtTime(140,e),t.frequency.exponentialRampToValueAtTime(480,e+.4),n.gain.setValueAtTime(.14,e),n.gain.exponentialRampToValueAtTime(.001,e+.4),t.connect(n),n.connect(this.masterGain),t.start(e),t.stop(e+.4)}playHeavyExplosion(){if(!this.initContext()||!this.ctx||!this.masterGain||!this.noiseBuffer||this.muted)return;const e=this.ctx.currentTime,t=this.ctx.createBufferSource();t.buffer=this.noiseBuffer;const n=this.ctx.createBiquadFilter();n.type="lowpass",n.frequency.setValueAtTime(550,e),n.frequency.exponentialRampToValueAtTime(40,e+.55);const s=this.ctx.createGain();s.gain.setValueAtTime(.38,e),s.gain.exponentialRampToValueAtTime(.001,e+.55),t.connect(n),n.connect(s),s.connect(this.masterGain),t.start(e),t.stop(e+.55)}playStageClear(){if(!this.initContext()||!this.ctx||!this.masterGain||this.muted)return;const e=this.ctx.currentTime,t=[{freq:261.63,time:e,dur:.12},{freq:329.63,time:e+.13,dur:.12},{freq:392,time:e+.26,dur:.12},{freq:523.25,time:e+.39,dur:.45}];for(const n of t){const s=this.ctx.createOscillator(),r=this.ctx.createGain();s.type="square",s.frequency.setValueAtTime(n.freq,n.time),r.gain.setValueAtTime(.2,n.time),r.gain.exponentialRampToValueAtTime(.001,n.time+n.dur),s.connect(r),r.connect(this.masterGain),s.start(n.time),s.stop(n.time+n.dur)}}playMenuMove(){if(!this.initContext()||!this.ctx||!this.masterGain||this.muted)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="square",t.frequency.setValueAtTime(880,e),n.gain.setValueAtTime(.08,e),n.gain.exponentialRampToValueAtTime(.001,e+.03),t.connect(n),n.connect(this.masterGain),t.start(e),t.stop(e+.03)}playMenuSelect(){if(!this.initContext()||!this.ctx||!this.masterGain||this.muted)return;const e=this.ctx.currentTime,t=[{freq:520,time:e,dur:.04},{freq:1040,time:e+.04,dur:.06}];for(const n of t){const s=this.ctx.createOscillator(),r=this.ctx.createGain();s.type="square",s.frequency.setValueAtTime(n.freq,n.time),r.gain.setValueAtTime(.12,n.time),r.gain.exponentialRampToValueAtTime(.001,n.time+n.dur),s.connect(r),r.connect(this.masterGain),s.start(n.time),s.stop(n.time+n.dur)}}playPause(){if(!this.initContext()||!this.ctx||!this.masterGain||this.muted)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="square",t.frequency.setValueAtTime(440,e),t.frequency.exponentialRampToValueAtTime(260,e+.07),n.gain.setValueAtTime(.12,e),n.gain.exponentialRampToValueAtTime(.001,e+.07),t.connect(n),n.connect(this.masterGain),t.start(e),t.stop(e+.07)}playUnpause(){if(!this.initContext()||!this.ctx||!this.masterGain||this.muted)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="square",t.frequency.setValueAtTime(260,e),t.frequency.exponentialRampToValueAtTime(440,e+.07),n.gain.setValueAtTime(.12,e),n.gain.exponentialRampToValueAtTime(.001,e+.07),t.connect(n),n.connect(this.masterGain),t.start(e),t.stop(e+.07)}setVolume(e){this.volume=Math.max(0,Math.min(1,e)),this.masterGain&&this.ctx&&!this.muted&&this.masterGain.gain.setValueAtTime(this.volume,this.ctx.currentTime)}setMuted(e){this.muted=e,this.masterGain&&this.ctx&&this.masterGain.gain.setValueAtTime(this.muted?0:this.volume,this.ctx.currentTime)}isMuted(){return this.muted}}class Zm{boundA={x:0,y:0,width:0,height:0};boundB={x:0,y:0,width:0,height:0};checkAABB(e,t){return e.x<t.x+t.width&&e.x+e.width>t.x&&e.y<t.y+t.height&&e.y+e.height>t.y}checkProjectileEnemyCollisions(e,t,n){const s=e.getAll(),r=t.getAll();for(let a=0;a<s.length;a++){const o=s[a];if(!(!o.active||o.owner!=="player")){o.getBounds(this.boundA);for(let l=0;l<r.length;l++){const c=r[l];if(c.active&&(c.getBounds(this.boundB),this.checkAABB(this.boundA,this.boundB))){const u=c.takeDamage(o.damage);o.destroy(),n(c,o,u);break}}}}}checkEnemyProjectilePlayerCollisions(e,t,n){if(!t.active||t.invulnerabilityTimer>0)return;t.getBounds(this.boundA);const s=e.getAll();for(let r=0;r<s.length;r++){const a=s[r];if(!(!a.active||a.owner!=="enemy")&&(a.getBounds(this.boundB),this.checkAABB(this.boundA,this.boundB))){a.destroy();const o=t.takeDamage();n(a,o);break}}}checkPlayerEnemyCollisions(e,t,n){if(!e.active||e.invulnerabilityTimer>0)return;e.getBounds(this.boundA);const s=t.getAll();for(let r=0;r<s.length;r++){const a=s[r];if(a.active&&(a.getBounds(this.boundB),this.checkAABB(this.boundA,this.boundB))){a.destroy();const o=e.takeDamage();n(a,o);break}}}checkProjectileBossCollisions(e,t,n){if(!t.active||t.isInvulnerable())return;t.getBounds(this.boundB);const s=e.getAll();for(let r=0;r<s.length;r++){const a=s[r];if(!(!a.active||a.owner!=="player")&&(a.getBounds(this.boundA),this.checkAABB(this.boundA,this.boundB))){a.destroy();const{killed:o,hit:l}=t.takeDamage(a.damage);l&&n(a,o)}}}checkPlayerBossCollision(e,t,n){if(!(!e.active||e.invulnerabilityTimer>0)&&!(!t.active||t.state==="DEFEATED")&&(e.getBounds(this.boundA),t.getBounds(this.boundB),this.checkAABB(this.boundA,this.boundB))){const s=e.takeDamage();n(s)}}}class Ol{cooldown;fireRate;constructor(e=1,t=2.5){this.fireRate=t,this.cooldown=e}reset(){this.cooldown=.9+Math.random()*.9}update(e,t,n){this.cooldown-=t,this.cooldown<=0&&(this.cooldown=this.fireRate,e.x>20&&e.x<155&&(n.spawnEnemyProjectile(e.x-4,e.y,-58.5,0),n.spawnEnemyProjectile(e.x-4,e.y+1,-58.5*.95,15),n.spawnEnemyProjectile(e.x-4,e.y-1,-58.5*.95,-15)))}}class Ms{reset(){}update(){}}class Bl{cooldown;fireRate;constructor(e=.8,t=2){this.fireRate=t,this.cooldown=e}reset(){this.cooldown=.8+Math.random()*.8}update(e,t,n){this.cooldown-=t,this.cooldown<=0&&(this.cooldown=this.fireRate,e.x>15&&e.x<155&&n.spawnEnemyProjectile(e.x-4,e.y,-65,0))}}class zl{trackSpeed;constructor(e=22){this.trackSpeed=e}reset(){}update(e,t,n,s){if(s){const r=s.playerPosition.y-e.y;if(Math.abs(r)>1.5){const a=Math.sign(r)*this.trackSpeed;t.y+=(a-t.y)*Math.min(1,n*3.5)}else t.y*=.8}e.x+=t.x*n,e.y+=t.y*n,e.y<8?(e.y=8,t.y=0):e.y>82&&(e.y=82,t.y=0)}}class Hl{hasDived=!1;diveTriggerX=125;diveVy=0;reset(){this.hasDived=!1,this.diveTriggerX=115+Math.random()*20,this.diveVy=0}update(e,t,n,s){if(!this.hasDived&&e.x<=this.diveTriggerX){this.hasDived=!0;const a=(s?s.playerPosition.y:45)-e.y;this.diveVy=Math.sign(a)*40,t.x*=1.2}e.x+=t.x*n,this.hasDived?e.y+=this.diveVy*n:e.y+=t.y*n,e.y<6?(e.y=6,this.diveVy=-this.diveVy*.4):e.y>84&&(e.y=84,this.diveVy=-this.diveVy*.4)}}class Gl{initialY=45;time=0;amplitude;frequency;constructor(e=18,t=2.8){this.amplitude=e,this.frequency=t}reset(e){this.initialY=e,this.time=0}update(e,t,n){this.time+=n,e.x+=t.x*n,e.y=this.initialY+Math.sin(this.time*this.frequency)*this.amplitude,e.y<8?e.y=8:e.y>82&&(e.y=82)}}class Vl{update(e,t,n){e.x+=t.x*n,e.y+=t.y*n}}const $m={scout:{archetype:"scout",width:Ll,height:Il,hp:Em,speed:Dl,score:ym,createMovement:()=>new Vl,createAttack:()=>new Ms},weaver:{archetype:"weaver",width:Rm,height:Cm,hp:bm,speed:Am,score:wm,createMovement:()=>new Gl(16,3),createAttack:()=>new Bl(.8,1.8)},swooper:{archetype:"swooper",width:Im,height:Um,hp:Pm,speed:Dm,score:Lm,createMovement:()=>new Hl,createAttack:()=>new Ms},chaser:{archetype:"chaser",width:Bm,height:zm,hp:Nm,speed:Fm,score:Om,createMovement:()=>new zl(24),createAttack:()=>new Ol(1,2.4)}};class Jm{id;type="scout";active=!1;position={x:0,y:0};velocity={x:0,y:0};width=8;height=6;hp=1;maxHp=1;scoreValue=100;movements={scout:new Vl,weaver:new Gl(16,2.8),swooper:new Hl,chaser:new zl(22)};attacks={scout:new Ms,weaver:new Bl(.8,1.8),swooper:new Ms,chaser:new Ol(1,2.4)};movement=this.movements.scout;attack=this.attacks.scout;constructor(e){this.id=e}spawn(e,t,n,s,r,a){const o=$m[e];this.type=e,this.position.x=t,this.position.y=n;const l=s??o.speed;this.velocity.x=-l,this.velocity.y=0,this.width=o.width,this.height=o.height,this.hp=r??o.hp,this.maxHp=this.hp,this.scoreValue=a??o.score,this.movement=this.movements[e],this.attack=this.attacks[e],this.movement.reset&&this.movement.reset(n),this.attack.reset&&this.attack.reset(),this.active=!0}spawnScout(e,t,n=Dl,s,r){this.spawn("scout",e,t,n,s,r)}update(e,t){this.active&&(this.movement.update(this.position,this.velocity,e,t),t&&this.attack.update(this.position,e,t),this.position.x<Tm&&this.destroy())}takeDamage(e){return this.active?(this.hp-=e,this.hp<=0?(this.destroy(),!0):!1):!1}getBounds(e){e.x=this.position.x-this.width/2,e.y=this.position.y-this.height/2,e.width=this.width,e.height=this.height}destroy(){this.active=!1}}class Qm{pool=[];constructor(e=Ul){for(let t=0;t<e;t++)this.pool.push(new Jm(t))}spawn(e,t,n,s,r,a){for(let o=0;o<this.pool.length;o++){const l=this.pool[o];if(!l.active)return l.spawn(e,t,n,s,r,a),l}return null}spawnScout(e,t,n,s,r){return this.spawn("scout",e,t,n,s,r)}update(e,t){for(let n=0;n<this.pool.length;n++){const s=this.pool[n];s.active&&s.update(e,t)}}getAll(){return this.pool}clear(){for(let e=0;e<this.pool.length;e++)this.pool[e].destroy()}getActiveCount(){let e=0;for(let t=0;t<this.pool.length;t++)this.pool[t].active&&e++;return e}}class eg{x=0;y=0;vx=0;vy=0;life=0;maxLife=0;size=2;active=!1;spawn(e,t,n,s,r,a=2){this.x=e,this.y=t,this.vx=n,this.vy=s,this.life=r,this.maxLife=r,this.size=a,this.active=!0}update(e){this.active&&(this.x+=this.vx*e,this.y+=this.vy*e,this.vx*=.92,this.vy*=.92,this.life-=e,this.life<=0&&(this.active=!1))}getNormalizedLife(){return this.maxLife<=0?0:Math.max(0,this.life/this.maxLife)}}class tg{pool=[];constructor(e=wl){for(let t=0;t<e;t++)this.pool.push(new eg)}acquire(){for(let e=0;e<this.pool.length;e++)if(!this.pool[e].active)return this.pool[e];return null}emitExplosion(e,t,n=10,s=45){for(let r=0;r<n;r++){const a=this.acquire();if(!a)break;const o=Math.PI*2*r/n+(Math.random()-.5)*.4,l=s*(.6+Math.random()*.8),c=Math.cos(o)*l,u=Math.sin(o)*l,f=.2+Math.random()*.18,d=Math.random()>.4?2.5:1.5;a.spawn(e,t,c,u,f,d)}}emitImpact(e,t,n=4){for(let s=0;s<n;s++){const r=this.acquire();if(!r)break;const a=Math.PI+(Math.random()-.5)*1.4,o=30+Math.random()*35,l=Math.cos(a)*o,c=Math.sin(a)*o,u=.08+Math.random()*.08;r.spawn(e,t,l,c,u,1.5)}}update(e){for(let t=0;t<this.pool.length;t++)this.pool[t].active&&this.pool[t].update(e)}getAll(){return this.pool}clear(){for(let e=0;e<this.pool.length;e++)this.pool[e].active=!1}}class ng{id=0;active=!0;position={x:No,y:Fo};velocity={x:0,y:0};width=Rl;height=Cl;lives=Bo;invulnerabilityTimer=0;blinkTimer=0;visible=!0;fireCooldown=0;updateWithInput(e,t,n){if(!this.active)return!1;let s=0,r=0;if(t.left&&(s-=1),t.right&&(s+=1),t.up&&(r+=1),t.down&&(r-=1),s!==0&&r!==0){const o=1/Math.SQRT2;s*=o,r*=o}this.velocity.x=s*Oo,this.velocity.y=r*Oo,this.position.x+=this.velocity.x*e,this.position.y+=this.velocity.y*e,this.position.x<zo&&(this.position.x=zo),this.position.x>Ho&&(this.position.x=Ho),this.position.y<Go&&(this.position.y=Go),this.position.y>Vo&&(this.position.y=Vo);let a=!1;if(this.fireCooldown>0&&(this.fireCooldown-=e),t.fire&&this.fireCooldown<=0){const o=this.position.x+this.width/2,l=this.position.y;n.acquire(o,l,Sm,0)&&(this.fireCooldown=xm,a=!0)}return this.invulnerabilityTimer>0?(this.invulnerabilityTimer-=e,this.blinkTimer+=e,this.blinkTimer>=vm&&(this.blinkTimer=0,this.visible=!this.visible),this.invulnerabilityTimer<=0&&(this.invulnerabilityTimer=0,this.visible=!0)):this.visible=!0,a}update(e){this.invulnerabilityTimer>0&&(this.invulnerabilityTimer-=e)}takeDamage(){return this.invulnerabilityTimer>0||!this.active?!1:(this.lives-=1,this.invulnerabilityTimer=_m,this.blinkTimer=0,this.visible=!1,this.lives<=0?(this.lives=0,this.active=!1,this.visible=!1,!0):!1)}getBounds(e){e.x=this.position.x-this.width/2,e.y=this.position.y-this.height/2,e.width=this.width,e.height=this.height}reset(){this.position.x=No,this.position.y=Fo,this.velocity.x=0,this.velocity.y=0,this.lives=Bo,this.invulnerabilityTimer=0,this.blinkTimer=0,this.visible=!0,this.fireCooldown=0,this.active=!0}destroy(){this.active=!1,this.visible=!1}}class ig{id;active=!1;owner="player";position={x:0,y:0};velocity={x:0,y:0};width=ha;height=ua;damage=1;constructor(e){this.id=e}spawn(e,t,n,s,r="player"){this.owner=r,this.position.x=e,this.position.y=t,this.velocity.x=n,this.velocity.y=s,this.width=r==="player"?ha:Hm,this.height=r==="player"?ua:Gm,this.active=!0}update(e){this.active&&(this.position.x+=this.velocity.x*e,this.position.y+=this.velocity.y*e,this.owner==="player"?this.position.x>Mm&&this.destroy():(this.position.x<Vm||this.position.y<-5||this.position.y>95)&&this.destroy())}getBounds(e){e.x=this.position.x-this.width/2,e.y=this.position.y-this.height/2,e.width=this.width,e.height=this.height}destroy(){this.active=!1}}class sg{pool=[];constructor(e=Pl){for(let t=0;t<e;t++)this.pool.push(new ig(t))}acquire(e,t,n,s,r="player"){for(let a=0;a<this.pool.length;a++){const o=this.pool[a];if(!o.active)return o.spawn(e,t,n,s,r),o}return null}update(e){for(let t=0;t<this.pool.length;t++){const n=this.pool[t];n.active&&n.update(e)}}getAll(){return this.pool}clear(){for(let e=0;e<this.pool.length;e++)this.pool[e].destroy()}getActiveCount(){let e=0;for(let t=0;t<this.pool.length;t++)this.pool[t].active&&e++;return e}}class rg{id=999;active=!1;position={x:180,y:45};width=Nl;height=Fl;hitboxWidth=Wm;hitboxHeight=Xm;hp=_r;maxHp=_r;scoreValue=qm;state="INACTIVE";flashTimer=0;isEnraged=!1;stateTimer=0;hoverTime=0;cannonTimer=0;spreadTimer=0;surgeCooldown=5;surgePhase="NONE";surgeTimer=0;defeatTimer=0;defeatExplosionCooldown=0;onDefeatedCallback;onSurgeTelegraphCallback;onBossShootCallback;onHeavyExplosionCallback;spawn(e=180,t=45,n=_r,s){this.position.x=e,this.position.y=t,this.hp=n,this.maxHp=n,this.active=!0,this.state="INTRO",this.stateTimer=0,this.hoverTime=0,this.cannonTimer=0,this.spreadTimer=1,this.surgeCooldown=6,this.surgePhase="NONE",this.surgeTimer=0,this.flashTimer=0,this.isEnraged=!1,this.defeatTimer=0,this.defeatExplosionCooldown=0,s&&(this.onDefeatedCallback=s.onDefeated,this.onSurgeTelegraphCallback=s.onSurgeTelegraph,this.onBossShootCallback=s.onBossShoot,this.onHeavyExplosionCallback=s.onHeavyExplosion)}getBounds(e){e.width=this.hitboxWidth,e.height=this.hitboxHeight,e.x=this.position.x-this.hitboxWidth/2,e.y=this.position.y-this.hitboxHeight/2}getHpPercent(){return Math.max(0,this.hp/this.maxHp)}isInvulnerable(){return this.state==="INTRO"||this.state==="DEFEATED"||!this.active}takeDamage(e=1){return this.isInvulnerable()?{killed:!1,hit:!1}:(this.hp-=e,this.flashTimer=.08,this.hp<=0?(this.hp=0,this.triggerDefeat(),{killed:!0,hit:!0}):(this.hp<=this.maxHp*.25&&this.state!=="ENRAGED"?(this.state="ENRAGED",this.isEnraged=!0):this.hp<=this.maxHp*.6&&this.state==="PHASE_1"&&(this.state="PHASE_2"),{killed:!1,hit:!0}))}triggerDefeat(){this.state="DEFEATED",this.defeatTimer=0,this.defeatExplosionCooldown=0}update(e,t,n,s){if(!this.active)return;const r=t??{playerPosition:{x:20,y:45},spawnEnemyProjectile:()=>{}},a=n??(()=>{}),o=s??(()=>{});switch(this.stateTimer+=e,this.flashTimer>0&&(this.flashTimer-=e),this.state){case"INTRO":this.updateIntro(e);break;case"PHASE_1":this.updatePhase1(e,r);break;case"PHASE_2":this.updatePhase2(e,r);break;case"ENRAGED":this.updateEnraged(e,r);break;case"DEFEATED":this.updateDefeated(e,a,o);break}}updateIntro(e){this.position.x>135?this.position.x-=28*e:(this.position.x=135,this.state="PHASE_1",this.stateTimer=0,this.hoverTime=0,this.cannonTimer=.8,this.spreadTimer=2.2)}updatePhase1(e,t){if(this.hoverTime+=e,this.position.y=45+18*Math.sin(this.hoverTime*1.3),this.cannonTimer-=e,this.cannonTimer<=0){this.cannonTimer=1.3;const n=Math.sin(this.hoverTime*2.5)>0,s=this.position.y+(n?6:-6);t.spawnEnemyProjectile(this.position.x-14,s,-75,0),this.onBossShootCallback?.()}this.spreadTimer-=e,this.spreadTimer<=0&&(this.spreadTimer=3.6,this.fireSpreadSalvo(t,3,65,.28),this.onBossShootCallback?.())}updatePhase2(e,t){if(this.hoverTime+=e,this.surgePhase!=="NONE"){this.updateSurge(e);return}if(this.surgeCooldown-=e,this.surgeCooldown<=0){this.surgeCooldown=7.5,this.surgePhase="TELEGRAPH",this.surgeTimer=.6,this.onSurgeTelegraphCallback?.();return}if(this.position.y=45+24*Math.sin(this.hoverTime*1.7),this.position.x=133+4*Math.sin(this.hoverTime*.9),this.cannonTimer-=e,this.cannonTimer<=0){this.cannonTimer=.95;const n=this.position.y+(Math.sin(this.hoverTime*3)>0?6:-6);t.spawnEnemyProjectile(this.position.x-14,n,-85,0),this.onBossShootCallback?.()}this.spreadTimer-=e,this.spreadTimer<=0&&(this.spreadTimer=3.2,this.fireSpreadSalvo(t,5,70,.42),this.onBossShootCallback?.())}updateSurge(e){switch(this.surgePhase){case"TELEGRAPH":this.surgeTimer-=e,this.position.x=135+(Math.random()-.5)*1.5,this.surgeTimer<=0&&(this.surgePhase="RUSH",this.surgeTimer=.45);break;case"RUSH":this.position.x-=110*e,this.position.x<=85&&(this.position.x=85,this.surgePhase="RETURN");break;case"RETURN":this.position.x+=35*e,this.position.x>=134&&(this.position.x=134,this.surgePhase="NONE");break}}updateEnraged(e,t){this.hoverTime+=e;const s=Math.max(16,Math.min(74,t.playerPosition.y))-this.position.y;this.position.y+=Math.sign(s)*Math.min(Math.abs(s),38*e),this.cannonTimer-=e,this.cannonTimer<=0&&(this.cannonTimer=.7,t.spawnEnemyProjectile(this.position.x-14,this.position.y+6,-95,0),t.spawnEnemyProjectile(this.position.x-14,this.position.y-6,-95,0),this.onBossShootCallback?.()),this.spreadTimer-=e,this.spreadTimer<=0&&(this.spreadTimer=1.8,this.fireSpreadSalvo(t,3,80,.32),this.onBossShootCallback?.())}updateDefeated(e,t,n){if(this.defeatTimer+=e,this.defeatExplosionCooldown-=e,this.defeatExplosionCooldown<=0&&this.defeatTimer<2.3){this.defeatExplosionCooldown=.14;const s=this.position.x+(Math.random()-.5)*(this.width-4),r=this.position.y+(Math.random()-.5)*(this.height-4);t(s,r,8),n(1.2,.12),this.onHeavyExplosionCallback?.()}this.defeatTimer>=2.4&&(t(this.position.x,this.position.y,25),n(3.5,.5),this.onHeavyExplosionCallback?.(),this.active=!1,this.onDefeatedCallback?.())}fireSpreadSalvo(e,t,n,s){if(t<=1){e.spawnEnemyProjectile(this.position.x-14,this.position.y,-n,0);return}const r=s*2/(t-1);for(let a=0;a<t;a++){const o=-s+a*r,l=-n*Math.cos(o),c=n*Math.sin(o);e.spawnEnemyProjectile(this.position.x-14,this.position.y,l,c)}}destroy(){this.active=!1,this.state="INACTIVE"}}const ag="level01",og="STAGE 1",lg="VERDANT ORBIT",cg=[{time:.5,type:"stage_title",title:"STAGE 1",subtitle:"VERDANT ORBIT",duration:3},{time:3.8,type:"banner",text:"VANGUARD PATROL DETECTED",duration:2.2},{time:5.5,type:"wave",baseX:170,baseY:45,enemies:[{archetype:"scout",offsetX:0,offsetY:0}]},{time:8.5,type:"wave",baseX:170,baseY:45,enemies:[{archetype:"scout",offsetX:0,offsetY:-16},{archetype:"scout",offsetX:0,offsetY:16}]},{time:12,type:"wave",baseX:170,baseY:45,enemies:[{archetype:"scout",offsetX:0,offsetY:0},{archetype:"scout",offsetX:14,offsetY:-18},{archetype:"scout",offsetX:14,offsetY:18}]},{time:16,type:"banner",text:"BIOMECHANICAL WEAVERS INBOUND",duration:2.2},{time:18,type:"wave",baseX:170,baseY:45,enemies:[{archetype:"weaver",offsetX:0,offsetY:0}]},{time:22,type:"wave",baseX:170,baseY:45,enemies:[{archetype:"weaver",offsetX:0,offsetY:-14},{archetype:"weaver",offsetX:16,offsetY:14}]},{time:26.5,type:"banner",text:"SWOOPER DIVE-BOMBERS APPROACHING",duration:2},{time:28.5,type:"wave",baseX:170,baseY:45,enemies:[{archetype:"swooper",offsetX:0,offsetY:28},{archetype:"swooper",offsetX:12,offsetY:-26}]},{time:33,type:"wave",baseX:170,baseY:45,enemies:[{archetype:"weaver",offsetX:0,offsetY:0},{archetype:"scout",offsetX:12,offsetY:-20},{archetype:"scout",offsetX:12,offsetY:20}]},{time:38,type:"recovery",duration:4,message:"SECTOR CLEAR // SENSORS RECHARGING"},{time:42.5,type:"banner",text:"HEAVY ASSAULT CHASER DETECTED",duration:2.2},{time:44.5,type:"wave",baseX:170,baseY:45,enemies:[{archetype:"chaser",offsetX:0,offsetY:0}]},{time:50,type:"wave",baseX:170,baseY:45,enemies:[{archetype:"chaser",offsetX:0,offsetY:12},{archetype:"swooper",offsetX:16,offsetY:-28}]},{time:56,type:"wave",baseX:170,baseY:45,enemies:[{archetype:"weaver",offsetX:0,offsetY:-12},{archetype:"weaver",offsetX:14,offsetY:12},{archetype:"scout",offsetX:28,offsetY:0}]},{time:62,type:"elite",archetype:"chaser",baseX:170,baseY:45,hp:8,speed:18,score:1e3,message:"ELITE GUNSHIP TITAN-01"},{time:73,type:"boss_warning",warningText:"WARNING // MASSIVE SIGNATURE DETECTED",duration:5},{time:78,type:"boss",bossId:"titan_warden",name:"TITAN WARDEN",hp:50}],qo={id:ag,title:og,subtitle:lg,events:cg};class hg{currentLevel=qo;elapsedTime=0;nextEventIndex=0;active=!1;startLevel(e=qo){this.currentLevel=e,this.elapsedTime=0,this.nextEventIndex=0,this.active=!0}update(e,t,n,s){if(!this.active)return;this.elapsedTime+=e;const r=this.currentLevel.events;for(;this.nextEventIndex<r.length&&this.elapsedTime>=r[this.nextEventIndex].time;){const a=r[this.nextEventIndex];switch(this.nextEventIndex++,a.type){case"stage_title":n.showStageTitle(a.title,a.subtitle,a.duration);break;case"banner":n.showBanner(a.text,a.duration);break;case"wave":{const o=a.baseX??170,l=a.baseY??45;for(const c of a.enemies){const u=o+(c.offsetX??0),f=Math.max(10,Math.min(80,l+(c.offsetY??0)));t.spawn(c.archetype,u,f,c.speed,c.hp,c.score)}break}case"recovery":a.message&&n.showBanner(a.message,a.duration);break;case"elite":{const o=a.baseX??170,l=a.baseY??45;a.message&&n.showBanner(a.message,3),t.spawn(a.archetype,o,l,a.speed,a.hp,a.score);break}case"boss_warning":n.showBossWarning(a.warningText,a.duration),s.playWarningSiren();break;case"boss":n.spawnBoss?.(a.bossId,a.name,a.hp);break}}if(this.nextEventIndex>=r.length){const a=r[r.length-1];a.type!=="boss"&&this.elapsedTime>=a.time+8&&(this.elapsedTime=16,this.nextEventIndex=3)}}reset(){this.elapsedTime=0,this.nextEventIndex=0,this.active=!1}seekTime(e){this.elapsedTime=e;const t=this.currentLevel.events.findIndex(n=>n.time>=e);this.nextEventIndex=t===-1?this.currentLevel.events.length:t}getElapsedTime(){return this.elapsedTime}}class ug{score=0;highScore=0;constructor(){this.loadHighScore()}getScore(){return this.score}getHighScore(){return this.highScore}addScore(e){e<=0||(this.score+=e,this.score>this.highScore&&(this.highScore=this.score,this.saveHighScore()))}reset(){this.score=0}loadHighScore(){try{const e=localStorage.getItem(Xo);if(e!==null){const t=parseInt(e,10);!isNaN(t)&&t>=0&&(this.highScore=t)}}catch{}}saveHighScore(){try{localStorage.setItem(Xo,this.highScore.toString())}catch{}}}class Es{static STORAGE_KEY="starfall84_settings";settings={muted:!1,volume:.5,screenShake:"full",bezelFrame:!1};listeners=[];constructor(){this.load()}load(){try{const e=localStorage.getItem(Es.STORAGE_KEY);if(e){const t=JSON.parse(e);typeof t.muted=="boolean"&&(this.settings.muted=t.muted),typeof t.volume=="number"&&(this.settings.volume=Math.max(0,Math.min(1,t.volume))),["full","reduced","off"].includes(t.screenShake)&&(this.settings.screenShake=t.screenShake),typeof t.bezelFrame=="boolean"&&(this.settings.bezelFrame=t.bezelFrame)}}catch{}}save(){try{localStorage.setItem(Es.STORAGE_KEY,JSON.stringify(this.settings))}catch{}this.notify()}getSettings(){return this.settings}setMuted(e){this.settings.muted=e,this.save()}toggleMute(){return this.settings.muted=!this.settings.muted,this.save(),this.settings.muted}setVolume(e){this.settings.volume=Math.max(0,Math.min(1,e)),this.save()}cycleVolume(){const e=[.25,.5,.75,1],n=(e.findIndex(s=>Math.abs(s-this.settings.volume)<.05)+1)%e.length;return this.settings.volume=e[n],this.settings.muted&&(this.settings.muted=!1),this.save(),this.settings.volume}cycleScreenShake(){const e=["full","reduced","off"],t=e.indexOf(this.settings.screenShake);return this.settings.screenShake=e[(t+1)%e.length],this.save(),this.settings.screenShake}toggleBezel(){return this.settings.bezelFrame=!this.settings.bezelFrame,this.save(),this.settings.bezelFrame}subscribe(e){return this.listeners.push(e),e(this.settings),()=>{this.listeners=this.listeners.filter(t=>t!==e)}}notify(){for(const e of this.listeners)e(this.settings)}}class dg{timer=.4;interval=km;waveIndex=0;minY=14;maxY=76;update(e,t){this.timer+=e,this.timer>=this.interval&&(this.timer-=this.interval,this.spawnNextWave(t))}spawnNextWave(e){const t=this.waveIndex%6;switch(this.waveIndex++,t){case 0:e.spawn("scout",vn,this.randY());break;case 1:e.spawn("weaver",vn,this.randY(25,65));break;case 2:e.spawn("scout",vn,this.randY(16,42)),e.spawn("scout",vn+14,this.randY(48,74));break;case 3:e.spawn("swooper",vn,Math.random()>.5?74:18);break;case 4:e.spawn("chaser",vn,this.randY(25,65));break;case 5:e.spawn("weaver",vn,45),e.spawn("swooper",vn+15,70);break}}randY(e=this.minY,t=this.maxY){return e+Math.random()*(t-e)}reset(){this.timer=.4,this.waveIndex=0}}class fg{accumulator=0;fixedDt=cm;state="TITLE";hitStopTimer=0;input;player;projectiles;enemies;boss;particles;collisions;spawner;scoreSystem;levelDirector;levelDispatcher;behaviorContext;audio;settings;shotsFired=0;shotsHit=0;enemiesDestroyed=0;stageElapsedTime=0;onShakeCallback;constructor(e){this.input=e,this.player=new ng,this.projectiles=new sg,this.enemies=new Qm,this.boss=new rg,this.particles=new tg,this.collisions=new Zm,this.spawner=new dg,this.scoreSystem=new ug,this.levelDirector=new hg,this.audio=new jm,this.settings=new Es,this.settings.subscribe(t=>{this.audio.setMuted(t.muted),this.audio.setVolume(t.volume)}),this.behaviorContext={playerPosition:this.player.position,spawnEnemyProjectile:(t,n,s,r)=>{this.projectiles.acquire(t,n,s,r,"enemy")&&this.audio.playEnemyShoot()}}}setLevelDispatcher(e){this.levelDispatcher=e,e.spawnBoss=(t,n,s)=>{this.spawnBoss(t,n,s)}}spawnBoss(e,t,n){this.boss.spawn(180,45,n,{onDefeated:()=>{this.scoreSystem.addScore(5e3),this.state="VICTORY",this.audio.playStageClear()},onSurgeTelegraph:()=>{this.audio.playBossSurge(),this.triggerScreenShake(.8,.4)},onBossShoot:()=>{this.audio.playBossShoot()},onHeavyExplosion:()=>{this.audio.playHeavyExplosion()}})}triggerScreenShake(e,t){const n=this.settings.getSettings().screenShake;if(n==="off")return;const s=n==="reduced"?.35:1;this.onShakeCallback?.(e*s,t*s)}getSettings(){return this.settings}getCombatStats(){const e=this.shotsFired>0?this.shotsHit/this.shotsFired:0,t=this.getScore();let n="C";return t>=6e3&&e>=.4?n="S":t>=4500&&e>=.25?n="A":t>=2500&&(n="B"),{shotsFired:this.shotsFired,shotsHit:this.shotsHit,enemiesDestroyed:this.enemiesDestroyed,totalEnemiesSpawned:Math.max(this.enemiesDestroyed,15),elapsedTime:this.stageElapsedTime,rank:n}}pauseGame(){this.state==="PLAYING"&&(this.state="PAUSED",this.audio.playPause())}resumeGame(){this.state==="PAUSED"&&(this.state="PLAYING",this.audio.playUnpause())}togglePause(){this.state==="PLAYING"?this.pauseGame():this.state==="PAUSED"&&this.resumeGame()}getState(){return this.state}getPlayer(){return this.player}getProjectiles(){return this.projectiles}getEnemies(){return this.enemies}getBoss(){return this.boss}getScore(){return this.scoreSystem.getScore()}getHighScore(){return this.scoreSystem.getHighScore()}getParticles(){return this.particles}getAudio(){return this.audio}getLevelDirector(){return this.levelDirector}setOnShake(e){this.onShakeCallback=e}triggerHitStop(e){this.hitStopTimer=Math.max(this.hitStopTimer,e)}updateFrame(e){const t=Math.min(e,hm);for(this.accumulator+=t;this.accumulator>=this.fixedDt;)this.update(this.fixedDt),this.accumulator-=this.fixedDt}update(e){const t=this.input.getState();if((t.fire||t.start||t.left||t.right||t.up||t.down)&&this.audio.unlock(),this.particles.update(e),this.hitStopTimer>0){this.hitStopTimer-=e;return}if(this.state==="TITLE"){this.input.consumeAction("start")&&this.startGame(),this.input.clearJustPressed();return}if(this.state==="PAUSED"){this.input.consumeAction("pause")&&this.resumeGame(),this.input.clearJustPressed();return}if(this.state==="GAME_OVER"){this.input.consumeAction("start")&&this.startGame(),this.input.clearJustPressed();return}if(this.state==="VICTORY"){this.input.consumeAction("start")&&this.startGame(),this.input.clearJustPressed();return}if(this.input.consumeAction("pause")){this.pauseGame(),this.input.clearJustPressed();return}this.stageElapsedTime+=e,this.levelDispatcher&&this.levelDirector.update(e,this.enemies,this.levelDispatcher,this.audio),this.player.updateWithInput(e,t,this.projectiles)&&(this.shotsFired++,this.audio.playShoot()),this.enemies.update(e,this.behaviorContext),this.boss.active&&this.boss.update(e,this.behaviorContext,(s,r,a)=>this.particles.emitExplosion(s,r,a),(s,r)=>this.triggerScreenShake(s,r)),this.projectiles.update(e),this.collisions.checkProjectileEnemyCollisions(this.projectiles,this.enemies,(s,r,a)=>{this.shotsHit++,a?(this.enemiesDestroyed++,this.scoreSystem.addScore(s.scoreValue),this.audio.playExplosion(),this.particles.emitExplosion(s.position.x,s.position.y,10),this.triggerHitStop(gm),this.triggerScreenShake(pm,mm)):(this.audio.playImpact(),this.particles.emitImpact(s.position.x,s.position.y,3))}),this.collisions.checkEnemyProjectilePlayerCollisions(this.projectiles,this.player,(s,r)=>{this.audio.playPlayerHit(),this.particles.emitExplosion(this.player.position.x,this.player.position.y,12),this.triggerHitStop(gr),this.triggerScreenShake(pr,mr),r&&(this.audio.playGameOver(),this.gameOver())}),this.collisions.checkPlayerEnemyCollisions(this.player,this.enemies,(s,r)=>{this.audio.playPlayerHit(),this.particles.emitExplosion(this.player.position.x,this.player.position.y,16),this.particles.emitExplosion(s.position.x,s.position.y,8),this.triggerHitStop(gr),this.triggerScreenShake(pr,mr),r&&(this.audio.playGameOver(),this.gameOver())}),this.boss.active&&this.collisions.checkProjectileBossCollisions(this.projectiles,this.boss,(s,r)=>{this.shotsHit++,r?(this.enemiesDestroyed++,this.scoreSystem.addScore(this.boss.scoreValue),this.audio.playHeavyExplosion(),this.triggerHitStop(.08),this.triggerScreenShake(2.5,.35)):(this.audio.playBossHit(),this.particles.emitImpact(this.boss.position.x-14,this.boss.position.y,4),this.triggerHitStop(.02),this.triggerScreenShake(.6,.08))}),this.boss.active&&this.collisions.checkPlayerBossCollision(this.player,this.boss,s=>{this.audio.playPlayerHit(),this.particles.emitExplosion(this.player.position.x,this.player.position.y,16),this.triggerHitStop(gr),this.triggerScreenShake(pr,mr),s&&(this.audio.playGameOver(),this.gameOver())}),this.input.clearJustPressed()}startGame(){this.audio.unlock(),this.player.reset(),this.projectiles.clear(),this.enemies.clear(),this.boss.destroy(),this.particles.clear(),this.shotsFired=0,this.shotsHit=0,this.enemiesDestroyed=0,this.stageElapsedTime=0,this.levelDirector.startLevel(),this.scoreSystem.reset(),this.hitStopTimer=0,this.state="PLAYING"}gameOver(){this.levelDirector.reset(),this.boss.destroy(),this.state="GAME_OVER"}resetToTitle(){this.levelDirector.reset(),this.boss.destroy(),this.projectiles.clear(),this.enemies.clear(),this.particles.clear(),this.state="TITLE"}triggerBossEncounter(){this.levelDirector.seekTime(77)}}class pg{group=new Ai;starGeometry;starPoints;starPositions;starCount=60;starSpeed=3;planet;planetSpeed=5;asteroids=[];asteroidSpeed=16;debrisList=[];debrisSpeed=32;starMaterial;planetMaterial;asteroidMaterial;debrisMaterial;ambientLight;dirLight;constructor(e){e.add(this.group),this.ambientLight=new Eh(9222294,1.4),this.group.add(this.ambientLight),this.dirLight=new Mh(16777215,2.2),this.dirLight.position.set(50,60,40),this.group.add(this.dirLight),this.starPositions=new Float32Array(this.starCount*3);for(let n=0;n<this.starCount;n++)this.starPositions[n*3]=(Math.random()-.1)*(Xt+40),this.starPositions[n*3+1]=Math.random()*an,this.starPositions[n*3+2]=-12;this.starGeometry=new Vt,this.starGeometry.setAttribute("position",new Nt(this.starPositions,3)),this.starMaterial=new vl({color:Wo,size:2,sizeAttenuation:!1}),this.starPoints=new mh(this.starGeometry,this.starMaterial),this.group.add(this.starPoints);const t=new ya(18,1);this.planetMaterial=new ir({color:Km,flatShading:!0}),this.planet=new Rt(t,this.planetMaterial),this.planet.position.set(130,60,-9),this.group.add(this.planet),this.asteroidMaterial=new ir({color:Wo,flatShading:!0});for(let n=0;n<7;n++){const s=2.5+Math.random()*3,r=new Ea(s,0),a=new Rt(r,this.asteroidMaterial);a.position.set(Math.random()*(Xt+60),10+Math.random()*(an-20),-6);const o=new N((Math.random()-.5)*1.5,(Math.random()-.5)*1.5,(Math.random()-.5)*1.5);this.asteroids.push({mesh:a,rotSpeed:o}),this.group.add(a)}this.debrisMaterial=new ir({color:Ym,flatShading:!0});for(let n=0;n<4;n++){const s=12+Math.random()*12,r=1.5+Math.random()*1.5,a=new mi(s,r,r),o=new Rt(a,this.debrisMaterial);o.position.set(Math.random()*(Xt+80),8+Math.random()*(an-16),-3),o.rotation.z=Math.random()*Math.PI,this.debrisList.push({mesh:o,rotSpeedZ:(Math.random()-.5)*.4}),this.group.add(o)}}update(e){const t=this.starPositions;for(let n=0;n<this.starCount;n++)t[n*3]-=this.starSpeed*e,t[n*3]<-10&&(t[n*3]+=Xt+30,t[n*3+1]=Math.random()*an);this.starGeometry.attributes.position.needsUpdate=!0,this.planet.position.x-=this.planetSpeed*e,this.planet.rotation.y+=e*.08,this.planet.rotation.z+=e*.03,this.planet.position.x<-30&&(this.planet.position.x=Xt+40,this.planet.position.y=25+Math.random()*45);for(let n=0;n<this.asteroids.length;n++){const s=this.asteroids[n];s.mesh.position.x-=this.asteroidSpeed*e,s.mesh.rotation.x+=s.rotSpeed.x*e,s.mesh.rotation.y+=s.rotSpeed.y*e,s.mesh.rotation.z+=s.rotSpeed.z*e,s.mesh.position.x<-20&&(s.mesh.position.x=Xt+25+Math.random()*30,s.mesh.position.y=10+Math.random()*(an-20))}for(let n=0;n<this.debrisList.length;n++){const s=this.debrisList[n];s.mesh.position.x-=this.debrisSpeed*e,s.mesh.rotation.z+=s.rotSpeedZ*e,s.mesh.position.x<-30&&(s.mesh.position.x=Xt+30+Math.random()*40,s.mesh.position.y=8+Math.random()*(an-16))}}dispose(){this.starGeometry.dispose(),this.starMaterial.dispose(),this.planet.geometry.dispose(),this.planetMaterial.dispose();for(const e of this.asteroids)e.mesh.geometry.dispose();this.asteroidMaterial.dispose();for(const e of this.debrisList)e.mesh.geometry.dispose();this.debrisMaterial.dispose()}}const vr={uniforms:{tDiffuse:{value:null},tPrevious:{value:null},uResolution:{value:new Le(320,180)},uGhosting:{value:.14},uGridIntensity:{value:.12},uVignette:{value:.22},uColorInk:{value:new Oe(993821)},uColorDark:{value:new Oe(2513983)},uColorMid:{value:new Oe(5410661)},uColorLight:{value:new Oe(9615264)}},vertexShader:`
    varying vec2 vUv;

    void main() {
      vUv = uv;
      gl_Position = vec4(position, 1.0);
    }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform sampler2D tPrevious;
    uniform vec2 uResolution;
    uniform float uGhosting;
    uniform float uGridIntensity;
    uniform float uVignette;
    uniform vec3 uColorInk;
    uniform vec3 uColorDark;
    uniform vec3 uColorMid;
    uniform vec3 uColorLight;

    varying vec2 vUv;

    void main() {
      // 1. Texture sampling
      vec4 curSample = texture2D(tDiffuse, vUv);
      vec4 prevSample = texture2D(tPrevious, vUv);

      // 2. Liquid-crystal response persistence (ghosting)
      vec3 blended = mix(curSample.rgb, prevSample.rgb, uGhosting);

      // 3. Luminance calculation
      float lum = dot(blended, vec3(0.299, 0.587, 0.114));

      // 4. Monochrome 4-level quantization with accent retention
      float maxC = max(blended.r, max(blended.g, blended.b));
      float minC = min(blended.r, min(blended.g, blended.b));
      float sat = maxC > 0.001 ? (maxC - minC) / maxC : 0.0;

      vec3 lcdCol;
      // Retain warm amber / red accents for powerups or warning indicators
      if (sat > 0.4 && blended.r > blended.g * 1.15) {
        lcdCol = blended;
      } else {
        if (lum < 0.04) {
          lcdCol = uColorInk;
        } else if (lum < 0.13) {
          lcdCol = uColorDark;
        } else if (lum < 0.30) {
          lcdCol = uColorMid;
        } else {
          lcdCol = uColorLight;
        }
      }

      // 5. Subtle subpixel LCD grid boundary lines
      vec2 cell = fract(vUv * uResolution);
      float cellBorder = step(0.08, cell.x) * step(0.08, cell.y);
      lcdCol = mix(lcdCol * (1.0 - uGridIntensity), lcdCol, cellBorder);

      // 6. Restrained handheld LCD vignette
      vec2 uvOffset = (vUv - 0.5) * 1.35;
      float vig = 1.0 - dot(uvOffset, uvOffset) * uVignette;
      lcdCol *= clamp(vig, 0.0, 1.0);

      gl_FragColor = vec4(lcdCol, 1.0);
    }
  `};class Wt{static makeTexture(e,t,n){const s=document.createElement("canvas");s.width=e,s.height=t;const r=s.getContext("2d");if(!r)throw new Error("Unable to create 2d canvas context");r.imageSmoothingEnabled=!1,n(r);const a=new gh(s);return a.magFilter=St,a.minFilter=St,a.generateMipmaps=!1,a.needsUpdate=!0,a}static createPlayerTexture(){return this.makeTexture(12,8,e=>{const t="#0f2a1d",n="#265c3f";e.clearRect(0,0,12,8);const s=[[0,0,0,0,0,0,0,0,0,0,0,0],[1,1,0,0,0,0,0,0,0,0,0,0],[1,2,1,1,1,0,0,0,0,0,0,0],[1,1,2,2,1,1,1,1,1,1,0,0],[1,1,2,2,2,2,1,1,1,1,1,1],[1,1,2,2,1,1,1,1,1,1,0,0],[1,2,1,1,1,0,0,0,0,0,0,0],[1,1,0,0,0,0,0,0,0,0,0,0]];for(let r=0;r<8;r++)for(let a=0;a<12;a++){const o=s[r][a];o===1?(e.fillStyle=t,e.fillRect(a,r,1,1)):o===2&&(e.fillStyle=n,e.fillRect(a,r,1,1))}})}static createScoutTexture(){return this.makeTexture(10,8,e=>{const t="#0f2a1d",n="#265c3f";e.clearRect(0,0,10,8);const s=[[0,0,0,1,1,1,1,0,0,0],[0,0,1,1,2,2,1,1,0,0],[0,1,1,2,2,2,2,1,1,0],[1,1,2,2,1,1,2,2,1,1],[1,1,2,2,1,1,2,2,1,1],[0,1,1,2,2,2,2,1,1,0],[0,0,1,1,2,2,1,1,0,0],[0,0,0,1,1,1,1,0,0,0]];for(let r=0;r<8;r++)for(let a=0;a<10;a++){const o=s[r][a];o===1?(e.fillStyle=t,e.fillRect(a,r,1,1)):o===2&&(e.fillStyle=n,e.fillRect(a,r,1,1))}})}static createWeaverTexture(){return this.makeTexture(10,8,e=>{const t="#0f2a1d",n="#265c3f",s="#528f65";e.clearRect(0,0,10,8);const r=[[0,0,1,1,0,0,1,1,0,0],[0,1,2,2,1,1,2,2,1,0],[1,1,2,3,2,2,3,2,1,1],[1,2,2,1,3,3,1,2,2,1],[1,2,2,1,3,3,1,2,2,1],[1,1,2,3,2,2,3,2,1,1],[0,1,2,2,1,1,2,2,1,0],[0,0,1,1,0,0,1,1,0,0]];for(let a=0;a<8;a++)for(let o=0;o<10;o++){const l=r[a][o];l===1?(e.fillStyle=t,e.fillRect(o,a,1,1)):l===2?(e.fillStyle=n,e.fillRect(o,a,1,1)):l===3&&(e.fillStyle=s,e.fillRect(o,a,1,1))}})}static createSwooperTexture(){return this.makeTexture(10,8,e=>{const t="#0f2a1d",n="#265c3f",s="#528f65";e.clearRect(0,0,10,8);const r=[[0,0,0,0,0,0,0,1,1,0],[0,0,0,0,0,1,1,2,1,0],[0,0,1,1,1,2,2,1,1,1],[1,1,2,2,3,2,1,1,0,1],[1,1,2,2,3,2,1,1,0,1],[0,0,1,1,1,2,2,1,1,1],[0,0,0,0,0,1,1,2,1,0],[0,0,0,0,0,0,0,1,1,0]];for(let a=0;a<8;a++)for(let o=0;o<10;o++){const l=r[a][o];l===1?(e.fillStyle=t,e.fillRect(o,a,1,1)):l===2?(e.fillStyle=n,e.fillRect(o,a,1,1)):l===3&&(e.fillStyle=s,e.fillRect(o,a,1,1))}})}static createChaserTexture(){return this.makeTexture(12,10,e=>{const t="#0f2a1d",n="#265c3f",s="#528f65";e.clearRect(0,0,12,10);const r=[[0,0,0,0,1,1,1,1,0,0,0,0],[0,1,1,1,2,2,2,2,1,1,1,0],[1,1,2,2,2,3,3,2,2,2,1,1],[1,2,1,1,2,2,2,2,1,1,2,1],[1,1,0,1,3,1,1,3,1,0,1,1],[1,1,0,1,3,1,1,3,1,0,1,1],[1,2,1,1,2,2,2,2,1,1,2,1],[1,1,2,2,2,3,3,2,2,2,1,1],[0,1,1,1,2,2,2,2,1,1,1,0],[0,0,0,0,1,1,1,1,0,0,0,0]];for(let a=0;a<10;a++)for(let o=0;o<12;o++){const l=r[a][o];l===1?(e.fillStyle=t,e.fillRect(o,a,1,1)):l===2?(e.fillStyle=n,e.fillRect(o,a,1,1)):l===3&&(e.fillStyle=s,e.fillRect(o,a,1,1))}})}static createProjectileTexture(){return this.makeTexture(4,2,e=>{e.clearRect(0,0,4,2),e.fillStyle="#265c3f",e.fillRect(0,0,4,2),e.fillStyle="#0f2a1d",e.fillRect(1,0,2,2)})}static createEnemyProjectileTexture(){return this.makeTexture(4,4,e=>{e.clearRect(0,0,4,4),e.fillStyle="#0f2a1d",e.fillRect(1,0,2,4),e.fillRect(0,1,4,2),e.fillStyle="#265c3f",e.fillRect(1,1,2,2)})}static createParticleTexture(){return this.makeTexture(2,2,e=>{e.fillStyle="#0f2a1d",e.fillRect(0,0,2,2)})}static createTitanWardenTexture(e=!1){return this.makeTexture(32,24,t=>{const n="#0f2a1d",s="#265c3f",r="#528f65",a=e?"#d48b30":"#92b7a0",o=e?"#f59e0b":"#528f65";t.clearRect(0,0,32,24);const l=(c,u,f,d,p)=>{t.fillStyle=p,t.fillRect(c,u,f,d)};l(6,8,23,8,n),l(4,9,26,6,n),l(2,10,29,4,n),l(2,5,14,3,n),l(2,16,14,3,n),l(12,2,16,6,n),l(12,16,16,6,n),l(15,1,12,2,n),l(15,21,12,2,n),l(7,9,21,6,s),l(3,11,27,2,s),l(3,6,12,1,s),l(3,17,12,1,s),l(13,3,14,4,s),l(13,17,14,4,s),l(16,2,10,1,s),l(16,21,10,1,s),l(14,4,10,1,r),l(14,19,10,1,r),l(1,5,2,3,r),l(1,16,2,3,r),l(3,11,2,2,r),l(8,10,1,4,r),l(10,11,3,2,n),l(11,11,2,1,r),l(28,4,3,2,n),l(28,18,3,2,n),l(29,10,3,4,n),l(30,11,2,2,r),l(16,8,7,8,n),l(17,9,5,6,o),l(18,10,3,4,a),l(19,11,1,2,e?"#ffffff":"#0f2a1d")})}}class mg{scene;camera;renderer;playerSprite;projectileSprites=[];enemySprites=[];particleSprites=[];environment;projPlayerMat;projEnemyMat;enemyMaterials;bossSprite;bossMat;bossEnragedMat;renderTargetA;renderTargetB;currentRenderTarget;previousRenderTarget;postScene;postCamera;postMaterial;postQuad;shakeIntensity=0;shakeDuration=0;shakeTimer=0;constructor(e){this.scene=new eo,this.scene.background=new Oe(ko);const t=Xt/2,n=an/2;this.camera=new Ss(-t,t,n,-n,.1,100),this.camera.position.set(t,n,20),this.camera.lookAt(t,n,0),this.renderer=new lm({antialias:!1,alpha:!1,powerPreference:"high-performance"}),this.renderer.setPixelRatio(1),this.renderer.setClearColor(ko,1),e.appendChild(this.renderer.domElement),this.environment=new pg(this.scene);const s=Wt.createPlayerTexture(),r=Wt.createScoutTexture(),a=Wt.createWeaverTexture(),o=Wt.createSwooperTexture(),l=Wt.createChaserTexture(),c=Wt.createProjectileTexture(),u=Wt.createEnemyProjectileTexture(),f=new zt({map:s,transparent:!0});this.playerSprite=new bi(f),this.playerSprite.scale.set(Rl,Cl,1),this.playerSprite.position.set(0,0,Io),this.scene.add(this.playerSprite),this.projPlayerMat=new zt({map:c,transparent:!0}),this.projEnemyMat=new zt({map:u,transparent:!0});for(let b=0;b<Pl;b++){const y=new bi(this.projPlayerMat);y.scale.set(ha,ua,1),y.visible=!1,this.projectileSprites.push(y),this.scene.add(y)}this.enemyMaterials={scout:new zt({map:r,transparent:!0}),weaver:new zt({map:a,transparent:!0}),swooper:new zt({map:o,transparent:!0}),chaser:new zt({map:l,transparent:!0})};for(let b=0;b<Ul;b++){const y=new bi(this.enemyMaterials.scout);y.scale.set(Ll,Il,1),y.visible=!1,this.enemySprites.push(y),this.scene.add(y)}const d=Wt.createParticleTexture(),p=new zt({map:d,transparent:!0});for(let b=0;b<wl;b++){const y=new bi(p.clone());y.scale.set(2,2,1),y.visible=!1,this.particleSprites.push(y),this.scene.add(y)}const _=Wt.createTitanWardenTexture(),S=Wt.createTitanWardenTexture(!0);this.bossMat=new zt({map:_,transparent:!0}),this.bossEnragedMat=new zt({map:S,transparent:!0}),this.bossSprite=new bi(this.bossMat),this.bossSprite.scale.set(Nl,Fl,1),this.bossSprite.position.set(0,0,Uo),this.bossSprite.visible=!1,this.scene.add(this.bossSprite);const m={minFilter:St,magFilter:St,format:Ut,type:Gt,generateMipmaps:!1};this.renderTargetA=new hn(dr,fr,m),this.renderTargetB=new hn(dr,fr,m),this.currentRenderTarget=this.renderTargetA,this.previousRenderTarget=this.renderTargetB,this.postScene=new eo,this.postCamera=new Ss(-1,1,1,-1,0,1),this.postMaterial=new un({uniforms:pl.clone(vr.uniforms),vertexShader:vr.vertexShader,fragmentShader:vr.fragmentShader,depthTest:!1,depthWrite:!1}),this.postMaterial.uniforms.uResolution.value.set(dr,fr);const h=new Fi(2,2);this.postQuad=new Rt(h,this.postMaterial),this.postScene.add(this.postQuad),this.resize()}triggerShake(e,t){this.shakeIntensity=Math.max(this.shakeIntensity,e),this.shakeDuration=Math.max(this.shakeDuration,t),this.shakeTimer=this.shakeDuration}resize(){const e=Math.max(1,window.innerWidth),t=Math.max(1,window.innerHeight),n=e/t;let s,r;n>ur?(r=t,s=t*ur):(s=e,r=e/ur),this.renderer.setSize(s,r,!1),this.renderer.domElement.style.width=`${Math.floor(s)}px`,this.renderer.domElement.style.height=`${Math.floor(r)}px`}render(e,t){const n=Xt/2,s=an/2;if(this.shakeTimer>0){this.shakeTimer-=t;const d=Math.max(0,this.shakeTimer/this.shakeDuration),p=this.shakeIntensity*d,_=(Math.random()*2-1)*p,S=(Math.random()*2-1)*p;this.camera.position.set(n+_,s+S,20)}else this.shakeIntensity=0,this.shakeDuration=0,this.camera.position.set(n,s,20);this.environment.update(t);const r=e.getPlayer();r.active&&r.visible&&e.getState()==="PLAYING"?(this.playerSprite.visible=!0,this.playerSprite.position.set(r.position.x,r.position.y,Io)):this.playerSprite.visible=!1;const a=e.getProjectiles().getAll(),o=e.getState()==="PLAYING";for(let d=0;d<a.length;d++){const p=a[d],_=this.projectileSprites[d];if(p.active&&o){_.visible=!0,_.position.set(p.position.x,p.position.y,um);const S=p.owner==="enemy"?this.projEnemyMat:this.projPlayerMat;_.material!==S&&(_.material=S),_.scale.set(p.width,p.height,1)}else _.visible=!1}const l=e.getEnemies().getAll();for(let d=0;d<l.length;d++){const p=l[d],_=this.enemySprites[d];if(p.active&&o){_.visible=!0,_.position.set(p.position.x,p.position.y,fm);const S=this.enemyMaterials[p.type];_.material!==S&&(_.material=S),_.scale.set(p.width,p.height,1)}else _.visible=!1}const c=e.getBoss();c.active&&o?(this.bossSprite.visible=!0,this.bossSprite.position.set(c.position.x,c.position.y,Uo),c.flashTimer>0?this.bossSprite.material=this.bossEnragedMat:this.bossSprite.material=c.isEnraged?this.bossEnragedMat:this.bossMat,this.bossSprite.scale.set(c.width,c.height,1)):this.bossSprite.visible=!1;const u=e.getParticles().getAll();for(let d=0;d<u.length;d++){const p=u[d],_=this.particleSprites[d];if(p.active){_.visible=!0,_.position.set(p.x,p.y,dm);const S=Math.max(.5,p.size*p.getNormalizedLife());_.scale.set(S,S,1)}else _.visible=!1}this.renderer.setRenderTarget(this.currentRenderTarget),this.renderer.clear(),this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(null),this.postMaterial.uniforms.tDiffuse.value=this.currentRenderTarget.texture,this.postMaterial.uniforms.tPrevious.value=this.previousRenderTarget.texture,this.renderer.render(this.postScene,this.postCamera);const f=this.currentRenderTarget;this.currentRenderTarget=this.previousRenderTarget,this.previousRenderTarget=f}dispose(){this.renderTargetA.dispose(),this.renderTargetB.dispose(),this.environment.dispose(),this.playerSprite.material.dispose(),this.projPlayerMat.dispose(),this.projEnemyMat.dispose();for(const e of Object.keys(this.enemyMaterials))this.enemyMaterials[e].dispose();this.bossMat.dispose(),this.bossEnragedMat.dispose(),this.postMaterial.dispose(),this.postQuad.geometry.dispose(),this.renderer.dispose()}}class gg{state={left:!1,right:!1,up:!1,down:!1,fire:!1,special:!1,pause:!1,start:!1};justPressed={left:!1,right:!1,up:!1,down:!1,fire:!1,special:!1,pause:!1,start:!1};onKeyDown=e=>{this.handleKey(e.code,e.key,!0)};onKeyUp=e=>{this.handleKey(e.code,e.key,!1)};onBlur=()=>{this.resetAll()};constructor(){window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp),window.addEventListener("blur",this.onBlur)}getState(){return this.state}isActionJustPressed(e){return this.justPressed[e]}consumeAction(e){const t=this.justPressed[e];return this.justPressed[e]=!1,t}clearJustPressed(){for(const e in this.justPressed)this.justPressed[e]=!1}handleKey(e,t,n){const s=a=>{n&&!this.state[a]&&(this.justPressed[a]=!0),this.state[a]=n},r=t?t.toLowerCase():"";e==="ArrowLeft"||e==="KeyA"||r==="arrowleft"||r==="a"?s("left"):e==="ArrowRight"||e==="KeyD"||r==="arrowright"||r==="d"?s("right"):e==="ArrowUp"||e==="KeyW"||r==="arrowup"||r==="w"?s("up"):e==="ArrowDown"||e==="KeyS"||r==="arrowdown"||r==="s"?s("down"):e==="Space"||r===" "?(s("fire"),s("start")):e==="KeyZ"||e==="KeyJ"||r==="z"||r==="j"?s("fire"):e==="KeyX"||e==="KeyK"||r==="x"||r==="k"?s("special"):e==="Enter"||r==="enter"?s("start"):(e==="Escape"||e==="KeyP"||r==="escape"||r==="p")&&s("pause")}resetAll(){for(const e in this.state)this.state[e]=!1,this.justPressed[e]=!1}dispose(){window.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("keyup",this.onKeyUp),window.removeEventListener("blur",this.onBlur)}}class _g{container;titleScreen;playingScreen;gameOverScreen;victoryScreen;pauseScreen;howToPlayModal;settingsModal;livesEl;scoreEl;hiScoreEl;titleHiScoreEl;finalScoreEl;finalHiScoreEl;victoryScoreEl;victoryHiScoreEl;victoryRankEl;victoryKillsEl;victoryAccuracyEl;victoryTimeEl;quickMuteBtn;quickPauseBtn;stageTitleEl;stageTitleMainEl;stageTitleSubEl;bannerEl;warningEl;warningBodyEl;bossContainerEl;bossBarFillEl;bossNameLabelEl;bossStatusLabelEl;settingSoundBtns=[];settingVolumeBtns=[];settingShakeBtns=[];settingBezelBtns=[];stageTitleTimer=0;bannerTimer=0;warningTimer=0;lastState=null;lastScore=-1;lastLives=-1;lastHiScore=-1;game=null;settingsUnsubscribe=null;constructor(e,t){this.container=document.createElement("div"),this.container.className="hud-overlay",this.titleScreen=document.createElement("div"),this.titleScreen.className="screen title-screen",this.titleScreen.innerHTML=`
      <div class="logo">STARFALL 84</div>
      <div class="sublogo">2.5D MONOCHROME ARCADE SHOOTER</div>
      <div class="menu-list">
        <button class="menu-btn start-mission-btn">START MISSION</button>
        <button class="menu-btn how-to-play-btn">HOW TO PLAY</button>
        <button class="menu-btn title-settings-btn">SETTINGS</button>
      </div>
      <div class="prompt blink">PRESS ENTER OR SPACE TO START</div>
      <div class="hi-score-display title-hi-score">HI-SCORE: 000000</div>
      <div class="controls-guide">
        <span>MOVE: WASD / ARROW KEYS</span>
        <span>FIRE: SPACE / Z | PAUSE: ESC / P</span>
      </div>
    `,this.playingScreen=document.createElement("div"),this.playingScreen.className="screen playing-hud",this.playingScreen.innerHTML=`
      <div class="hud-bar">
        <div class="hud-lives">LIVES: <span class="lives-val">♥♥♥</span></div>
        <div class="hud-hiscore">HI: <span class="hiscore-val">000000</span></div>
        <div class="hud-score">SCORE: <span class="score-val">000000</span></div>
        <div class="hud-quick-controls">
          <button class="hud-icon-btn mute-icon-btn" title="Toggle Sound (M)">🔊</button>
          <button class="hud-icon-btn pause-icon-btn" title="Pause Game (ESC / P)">⏸</button>
        </div>
      </div>
      <div class="stage-title-banner" style="display: none;">
        <div class="stage-title-main">STAGE 1</div>
        <div class="stage-title-sub">VERDANT ORBIT</div>
      </div>
      <div class="tactical-banner" style="display: none;">VANGUARD PATROL DETECTED</div>
      <div class="boss-warning-banner" style="display: none;">
        <div class="warning-header">⚠ WARNING ⚠</div>
        <div class="warning-body">MASSIVE SIGNATURE DETECTED</div>
      </div>
      <div class="boss-health-container" style="display: none;">
        <div class="boss-name-line">
          <span class="boss-name-label">TITAN WARDEN</span>
          <span class="boss-status-label">// ARMORED COMMAND DRONE</span>
        </div>
        <div class="boss-bar-track">
          <div class="boss-bar-fill"></div>
        </div>
      </div>
    `,this.pauseScreen=document.createElement("div"),this.pauseScreen.className="screen pause-screen",this.pauseScreen.innerHTML=`
      <div class="pause-title">PAUSED</div>
      <div class="pause-box">
        <button class="menu-btn pause-resume-btn">RESUME MISSION [P]</button>
        <button class="menu-btn pause-sound-btn">SOUND: ON</button>
        <button class="menu-btn pause-volume-btn">VOL: 50%</button>
        <button class="menu-btn pause-shake-btn">SHAKE: FULL</button>
        <button class="menu-btn pause-bezel-btn">BEZEL: OFF</button>
        <button class="menu-btn pause-restart-btn">RESTART MISSION</button>
        <button class="menu-btn pause-quit-btn">ABORT TO TITLE</button>
      </div>
    `,this.gameOverScreen=document.createElement("div"),this.gameOverScreen.className="screen game-over-screen",this.gameOverScreen.innerHTML=`
      <div class="game-over-title">GAME OVER</div>
      <div class="final-score-line">FINAL SCORE: <span class="final-score-val">000000</span></div>
      <div class="final-hiscore-line">HIGH SCORE: <span class="final-hiscore-val">000000</span></div>
      <div class="prompt blink">PRESS ENTER OR SPACE TO RESTART</div>
    `,this.victoryScreen=document.createElement("div"),this.victoryScreen.className="screen victory-screen",this.victoryScreen.innerHTML=`
      <div class="victory-banner-badge">MISSION ACCOMPLISHED</div>
      <div class="victory-title">STAGE 1 CLEAR</div>
      <div class="victory-sub">VERDANT ORBIT SECURED</div>
      <div class="victory-stats">
        <div class="stat-row"><span>COMBAT EVALUATION:</span><span class="rank-val victory-rank-val">RANK S</span></div>
        <div class="stat-row"><span>ENEMIES NEUTRALIZED:</span><span class="victory-kills-val">0 / 0</span></div>
        <div class="stat-row"><span>FIRING ACCURACY:</span><span class="victory-accuracy-val">0%</span></div>
        <div class="stat-row"><span>MISSION TIME:</span><span class="victory-time-val">00:00</span></div>
        <div class="stat-row"><span>STAGE BONUS:</span><span class="bonus-val">+5000</span></div>
        <div class="stat-row"><span>TOTAL SCORE:</span><span class="victory-score-val">000000</span></div>
        <div class="stat-row"><span>HIGH SCORE:</span><span class="victory-hiscore-val">000000</span></div>
      </div>
      <div class="prompt blink">PRESS ENTER OR SPACE TO CONTINUE</div>
    `,this.howToPlayModal=document.createElement("div"),this.howToPlayModal.className="modal how-to-play-modal",this.howToPlayModal.style.display="none",this.howToPlayModal.innerHTML=`
      <div class="modal-box">
        <div class="modal-header">TACTICAL BRIEFING // FLIGHT MANUAL</div>
        <div class="modal-body">
          <div class="guide-item"><span>FLIGHT CONTROLS:</span><span>WASD / ARROW KEYS</span></div>
          <div class="guide-item"><span>PRIMARY WEAPON:</span><span>SPACE / Z</span></div>
          <div class="guide-item"><span>TACTICAL PAUSE:</span><span>ESC / P</span></div>
          <div class="guide-item"><span>AUDIO TOGGLE:</span><span>M</span></div>
          <div class="guide-briefing">
            INFILTRATE VERDANT ORBIT. NEUTRALIZE HOSTILE VANGUARD SQUADRONS. PREPARE FOR ENCOUNTER WITH THE TITAN WARDEN ARMORED DRONE PLATFORM.
          </div>
        </div>
        <button class="menu-btn modal-close-btn how-to-play-close-btn">CLOSE [ESC]</button>
      </div>
    `,this.settingsModal=document.createElement("div"),this.settingsModal.className="modal settings-modal",this.settingsModal.style.display="none",this.settingsModal.innerHTML=`
      <div class="modal-box">
        <div class="modal-header">SYSTEM CONFIGURATION</div>
        <div class="modal-body">
          <div class="guide-item">
            <span>AUDIO:</span>
            <button class="menu-btn modal-sound-btn">SOUND: ON</button>
          </div>
          <div class="guide-item">
            <span>VOLUME:</span>
            <button class="menu-btn modal-volume-btn">VOL: 50%</button>
          </div>
          <div class="guide-item">
            <span>SCREEN SHAKE:</span>
            <button class="menu-btn modal-shake-btn">SHAKE: FULL</button>
          </div>
          <div class="guide-item">
            <span>LCD BEZEL HOUSING:</span>
            <button class="menu-btn modal-bezel-btn">BEZEL: OFF</button>
          </div>
        </div>
        <button class="menu-btn modal-close-btn settings-close-btn">CLOSE [ESC]</button>
      </div>
    `,this.container.appendChild(this.titleScreen),this.container.appendChild(this.playingScreen),this.container.appendChild(this.pauseScreen),this.container.appendChild(this.gameOverScreen),this.container.appendChild(this.victoryScreen),this.container.appendChild(this.howToPlayModal),this.container.appendChild(this.settingsModal),e.appendChild(this.container),this.livesEl=this.playingScreen.querySelector(".lives-val"),this.scoreEl=this.playingScreen.querySelector(".score-val"),this.hiScoreEl=this.playingScreen.querySelector(".hiscore-val"),this.titleHiScoreEl=this.titleScreen.querySelector(".title-hi-score"),this.finalScoreEl=this.gameOverScreen.querySelector(".final-score-val"),this.finalHiScoreEl=this.gameOverScreen.querySelector(".final-hiscore-val"),this.victoryScoreEl=this.victoryScreen.querySelector(".victory-score-val"),this.victoryHiScoreEl=this.victoryScreen.querySelector(".victory-hiscore-val"),this.victoryRankEl=this.victoryScreen.querySelector(".victory-rank-val"),this.victoryKillsEl=this.victoryScreen.querySelector(".victory-kills-val"),this.victoryAccuracyEl=this.victoryScreen.querySelector(".victory-accuracy-val"),this.victoryTimeEl=this.victoryScreen.querySelector(".victory-time-val"),this.quickMuteBtn=this.playingScreen.querySelector(".mute-icon-btn"),this.quickPauseBtn=this.playingScreen.querySelector(".pause-icon-btn"),this.stageTitleEl=this.playingScreen.querySelector(".stage-title-banner"),this.stageTitleMainEl=this.playingScreen.querySelector(".stage-title-main"),this.stageTitleSubEl=this.playingScreen.querySelector(".stage-title-sub"),this.bannerEl=this.playingScreen.querySelector(".tactical-banner"),this.warningEl=this.playingScreen.querySelector(".boss-warning-banner"),this.warningBodyEl=this.playingScreen.querySelector(".warning-body"),this.bossContainerEl=this.playingScreen.querySelector(".boss-health-container"),this.bossBarFillEl=this.playingScreen.querySelector(".boss-bar-fill"),this.bossNameLabelEl=this.playingScreen.querySelector(".boss-name-label"),this.bossStatusLabelEl=this.playingScreen.querySelector(".boss-status-label");const n=this.pauseScreen.querySelector(".pause-sound-btn"),s=this.settingsModal.querySelector(".modal-sound-btn");n&&this.settingSoundBtns.push(n),s&&this.settingSoundBtns.push(s);const r=this.pauseScreen.querySelector(".pause-volume-btn"),a=this.settingsModal.querySelector(".modal-volume-btn");r&&this.settingVolumeBtns.push(r),a&&this.settingVolumeBtns.push(a);const o=this.pauseScreen.querySelector(".pause-shake-btn"),l=this.settingsModal.querySelector(".modal-shake-btn");o&&this.settingShakeBtns.push(o),l&&this.settingShakeBtns.push(l);const c=this.pauseScreen.querySelector(".pause-bezel-btn"),u=this.settingsModal.querySelector(".modal-bezel-btn");c&&this.settingBezelBtns.push(c),u&&this.settingBezelBtns.push(u),this.setupEvents(),t&&this.attachGame(t)}setupEvents(){this.titleScreen.querySelector(".start-mission-btn")?.addEventListener("click",()=>{this.game?.getAudio().playMenuSelect(),this.game?.startGame()}),this.titleScreen.querySelector(".how-to-play-btn")?.addEventListener("click",()=>{this.game?.getAudio().playMenuSelect(),this.howToPlayModal.style.display="flex"}),this.titleScreen.querySelector(".title-settings-btn")?.addEventListener("click",()=>{this.game?.getAudio().playMenuSelect(),this.settingsModal.style.display="flex"}),this.howToPlayModal.querySelector(".how-to-play-close-btn")?.addEventListener("click",()=>{this.game?.getAudio().playMenuSelect(),this.howToPlayModal.style.display="none"}),this.settingsModal.querySelector(".settings-close-btn")?.addEventListener("click",()=>{this.game?.getAudio().playMenuSelect(),this.settingsModal.style.display="none"}),this.quickMuteBtn.addEventListener("click",()=>{this.game?.getAudio().playMenuMove(),this.game?.getSettings().toggleMute()}),this.quickPauseBtn.addEventListener("click",()=>{this.game?.togglePause()}),this.pauseScreen.querySelector(".pause-resume-btn")?.addEventListener("click",()=>{this.game?.resumeGame()}),this.pauseScreen.querySelector(".pause-restart-btn")?.addEventListener("click",()=>{this.game?.getAudio().playMenuSelect(),this.game?.startGame()}),this.pauseScreen.querySelector(".pause-quit-btn")?.addEventListener("click",()=>{this.game?.getAudio().playMenuSelect(),this.game?.resetToTitle()});for(const c of this.settingSoundBtns)c.addEventListener("click",()=>{this.game?.getAudio().playMenuMove(),this.game?.getSettings().toggleMute()});for(const c of this.settingVolumeBtns)c.addEventListener("click",()=>{this.game?.getAudio().playMenuMove(),this.game?.getSettings().cycleVolume()});for(const c of this.settingShakeBtns)c.addEventListener("click",()=>{this.game?.getAudio().playMenuMove(),this.game?.getSettings().cycleScreenShake()});for(const c of this.settingBezelBtns)c.addEventListener("click",()=>{this.game?.getAudio().playMenuMove(),this.game?.getSettings().toggleBezel()});window.addEventListener("keydown",c=>{if(c.code==="Escape"){if(this.howToPlayModal.style.display==="flex"){this.howToPlayModal.style.display="none",this.game?.getAudio().playMenuSelect();return}if(this.settingsModal.style.display==="flex"){this.settingsModal.style.display="none",this.game?.getAudio().playMenuSelect();return}}c.code==="KeyM"&&(c.repeat||(this.game?.getAudio().playMenuMove(),this.game?.getSettings().toggleMute()))})}attachGame(e){this.game!==e&&(this.game=e,this.settingsUnsubscribe&&this.settingsUnsubscribe(),this.settingsUnsubscribe=e.getSettings().subscribe(t=>{this.applySettingsUI(t)}))}applySettingsUI(e){const t=`SOUND: ${e.muted?"OFF":"ON"}`;for(const o of this.settingSoundBtns)o.textContent=t;this.quickMuteBtn.textContent=e.muted?"🔇":"🔊";const n=`VOL: ${Math.round(e.volume*100)}%`;for(const o of this.settingVolumeBtns)o.textContent=n;const s=`SHAKE: ${e.screenShake.toUpperCase()}`;for(const o of this.settingShakeBtns)o.textContent=s;const r=`BEZEL: ${e.bezelFrame?"ON":"OFF"}`;for(const o of this.settingBezelBtns)o.textContent=r;(this.container.closest(".game-container")||document.querySelector(".game-container"))?.classList.toggle("bezel-mode",e.bezelFrame)}showStageTitle(e,t,n=3){this.stageTitleMainEl.textContent=e,this.stageTitleSubEl.textContent=t,this.stageTitleEl.style.display="flex",this.stageTitleEl.style.opacity="1",this.stageTitleTimer=n}showBanner(e,t=2){this.bannerEl.textContent=e,this.bannerEl.style.display="block",this.bannerEl.style.opacity="1",this.bannerTimer=t}showBossWarning(e,t=4){this.warningBodyEl.textContent=e,this.warningEl.style.display="flex",this.warningTimer=t}clearBanners(){this.stageTitleTimer=0,this.bannerTimer=0,this.warningTimer=0,this.stageTitleEl.style.display="none",this.bannerEl.style.display="none",this.warningEl.style.display="none"}update(e,t=0){this.game||this.attachGame(e);const n=e.getState(),s=e.getScore(),r=e.getHighScore(),a=e.getPlayer().lives;if(n!==this.lastState){if(this.titleScreen.style.display=n==="TITLE"?"flex":"none",this.playingScreen.style.display=n==="PLAYING"||n==="PAUSED"?"block":"none",this.pauseScreen.style.display=n==="PAUSED"?"flex":"none",this.gameOverScreen.style.display=n==="GAME_OVER"?"flex":"none",this.victoryScreen.style.display=n==="VICTORY"?"flex":"none",n!=="PLAYING"&&n!=="PAUSED"&&(this.clearBanners(),this.bossContainerEl.style.display="none"),n==="VICTORY"){const o=e.getCombatStats();this.victoryRankEl.textContent=`RANK ${o.rank}`,this.victoryKillsEl.textContent=`${o.enemiesDestroyed} / ${o.totalEnemiesSpawned}`;const l=o.shotsFired>0?Math.round(o.shotsHit/o.shotsFired*100):0;this.victoryAccuracyEl.textContent=`${l}%`,this.victoryTimeEl.textContent=this.formatTime(o.elapsedTime)}this.lastState=n}if(n==="TITLE")r!==this.lastHiScore&&(this.titleHiScoreEl.textContent=`HI-SCORE: ${this.formatScore(r)}`);else if(n==="PLAYING"||n==="PAUSED"){s!==this.lastScore&&(this.scoreEl.textContent=this.formatScore(s),this.lastScore=s),r!==this.lastHiScore&&(this.hiScoreEl.textContent=this.formatScore(r)),a!==this.lastLives&&(this.livesEl.textContent="♥".repeat(Math.max(0,a)),this.lastLives=a);const o=e.getBoss();if(o&&o.active){this.bossContainerEl.style.display="flex";const l=Math.round(o.getHpPercent()*100);this.bossBarFillEl.style.width=`${l}%`,this.bossContainerEl.classList.toggle("enraged",o.isEnraged)}else this.bossContainerEl.style.display="none";n==="PLAYING"&&(this.stageTitleTimer>0&&(this.stageTitleTimer-=t,this.stageTitleTimer<=0&&(this.stageTitleEl.style.display="none")),this.bannerTimer>0&&(this.bannerTimer-=t,this.bannerTimer<=0&&(this.bannerEl.style.display="none")),this.warningTimer>0&&(this.warningTimer-=t,this.warningTimer<=0&&(this.warningEl.style.display="none")))}else n==="GAME_OVER"?(this.finalScoreEl.textContent=this.formatScore(s),this.finalHiScoreEl.textContent=this.formatScore(r)):n==="VICTORY"&&(this.victoryScoreEl.textContent=this.formatScore(s),this.victoryHiScoreEl.textContent=this.formatScore(r));this.lastHiScore=r}formatScore(e){return e.toString().padStart(6,"0")}formatTime(e){const t=Math.floor(e/60),n=Math.floor(e%60);return`${t.toString().padStart(2,"0")}:${n.toString().padStart(2,"0")}`}}const kl=document.querySelector("#app");if(!kl)throw new Error("Missing #app root element.");const ws=document.createElement("div");ws.className="game-container";kl.appendChild(ws);const vg=new gg,Bn=new fg(vg),Rs=new mg(ws),Wl=new _g(ws,Bn);Bn.setOnShake((i,e)=>{Rs.triggerShake(i,e)});Bn.setLevelDispatcher(Wl);window.__game=Bn;const xg=new Th;function Xl(){requestAnimationFrame(Xl);const i=Math.min(xg.getDelta(),.1);Bn.updateFrame(i),Rs.render(Bn,i),Wl.update(Bn,i)}window.addEventListener("resize",()=>{Rs.resize()});Rs.resize();Xl();
