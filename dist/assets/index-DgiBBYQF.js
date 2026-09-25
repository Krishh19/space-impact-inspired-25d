(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();const Aa="180",cc=0,Xa=1,hc=2,rl=1,uc=2,cn=3,Cn=0,Ct=1,$t=2,An=0,pi=1,qa=2,Ya=3,Ka=4,dc=5,Hn=100,fc=101,pc=102,mc=103,gc=104,_c=200,vc=201,Sc=202,xc=203,Lr=204,Ir=205,Ec=206,yc=207,Mc=208,bc=209,Tc=210,Ac=211,wc=212,Rc=213,Cc=214,Ur=0,Nr=1,Or=2,gi=3,Fr=4,Br=5,Gr=6,kr=7,wa=0,Pc=1,Dc=2,wn=0,Lc=1,Ic=2,Uc=3,Nc=4,Oc=5,Fc=6,Bc=7,al=300,_i=301,vi=302,Hr=303,zr=304,Os=306,Vr=1e3,Wn=1001,Wr=1002,Tt=1003,Gc=1004,qi=1005,Jt=1006,Vs=1007,Xn=1008,Yt=1009,ol=1010,ll=1011,Ii=1012,Ra=1013,qn=1014,dn=1015,Gi=1016,Ca=1017,Pa=1018,Ui=1020,cl=35902,hl=35899,ul=1021,dl=1022,Ht=1023,Ni=1026,Oi=1027,fl=1028,Da=1029,pl=1030,La=1031,Ia=1033,xs=33776,Es=33777,ys=33778,Ms=33779,Xr=35840,qr=35841,Yr=35842,Kr=35843,jr=36196,$r=37492,Zr=37496,Jr=37808,Qr=37809,ea=37810,ta=37811,na=37812,ia=37813,sa=37814,ra=37815,aa=37816,oa=37817,la=37818,ca=37819,ha=37820,ua=37821,da=36492,fa=36494,pa=36495,ma=36283,ga=36284,_a=36285,va=36286,kc=3200,Hc=3201,ml=0,zc=1,bn="",Bt="srgb",Si="srgb-linear",Ts="linear",je="srgb",jn=7680,ja=519,Vc=512,Wc=513,Xc=514,gl=515,qc=516,Yc=517,Kc=518,jc=519,Sa=35044,$a="300 es",Qt=2e3,As=2001;class Ei{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ws=Math.PI/180,xa=180/Math.PI;function Rn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(xt[s&255]+xt[s>>8&255]+xt[s>>16&255]+xt[s>>24&255]+"-"+xt[e&255]+xt[e>>8&255]+"-"+xt[e>>16&15|64]+xt[e>>24&255]+"-"+xt[t&63|128]+xt[t>>8&255]+"-"+xt[t>>16&255]+xt[t>>24&255]+xt[n&255]+xt[n>>8&255]+xt[n>>16&255]+xt[n>>24&255]).toLowerCase()}function ze(s,e,t){return Math.max(e,Math.min(t,s))}function $c(s,e){return(s%e+e)%e}function Xs(s,e,t){return(1-t)*s+t*e}function Zt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function $e(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Pe{constructor(e=0,t=0){Pe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ze(this.x,e.x,t.x),this.y=ze(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ze(this.x,e,t),this.y=ze(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ki{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3];const p=r[a+0],f=r[a+1],g=r[a+2],v=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(o===1){e[t+0]=p,e[t+1]=f,e[t+2]=g,e[t+3]=v;return}if(d!==v||l!==p||c!==f||h!==g){let m=1-o;const u=l*p+c*f+h*g+d*v,b=u>=0?1:-1,T=1-u*u;if(T>Number.EPSILON){const C=Math.sqrt(T),w=Math.atan2(C,u*b);m=Math.sin(m*w)/C,o=Math.sin(o*w)/C}const y=o*b;if(l=l*m+p*y,c=c*m+f*y,h=h*m+g*y,d=d*m+v*y,m===1-o){const C=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=C,c*=C,h*=C,d*=C}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=r[a],p=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+h*d+l*f-c*p,e[t+1]=l*g+h*p+c*d-o*f,e[t+2]=c*g+h*f+o*p-l*d,e[t+3]=h*g-o*d-l*p-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),d=o(r/2),p=l(n/2),f=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=p*h*d+c*f*g,this._y=c*f*d-p*h*g,this._z=c*h*g+p*f*d,this._w=c*h*d-p*f*g;break;case"YXZ":this._x=p*h*d+c*f*g,this._y=c*f*d-p*h*g,this._z=c*h*g-p*f*d,this._w=c*h*d+p*f*g;break;case"ZXY":this._x=p*h*d-c*f*g,this._y=c*f*d+p*h*g,this._z=c*h*g+p*f*d,this._w=c*h*d-p*f*g;break;case"ZYX":this._x=p*h*d-c*f*g,this._y=c*f*d+p*h*g,this._z=c*h*g-p*f*d,this._w=c*h*d+p*f*g;break;case"YZX":this._x=p*h*d+c*f*g,this._y=c*f*d+p*h*g,this._z=c*h*g-p*f*d,this._w=c*h*d-p*f*g;break;case"XZY":this._x=p*h*d-c*f*g,this._y=c*f*d-p*h*g,this._z=c*h*g+p*f*d,this._w=c*h*d+p*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],p=n+o+d;if(p>0){const f=.5/Math.sqrt(p+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-i)*f}else if(n>o&&n>d){const f=2*Math.sqrt(1+n-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+c)/f}else if(o>d){const f=2*Math.sqrt(1+o-n-d);this._w=(r-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+d-n-o);this._w=(a-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ze(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-t)*h)/c,p=Math.sin(t*h)/c;return this._w=a*d+this._w*p,this._x=n*d+this._x*p,this._y=i*d+this._y*p,this._z=r*d+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,n=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Za.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Za.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-r*i),d=2*(r*n-a*t);return this.x=t+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=i+l*d+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ze(this.x,e.x,t.x),this.y=ze(this.y,e.y,t.y),this.z=ze(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ze(this.x,e,t),this.y=ze(this.y,e,t),this.z=ze(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return qs.copy(this).projectOnVector(e),this.sub(qs)}reflect(e){return this.sub(qs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const qs=new I,Za=new ki;class Oe{constructor(e,t,n,i,r,a,o,l,c){Oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c)}set(e,t,n,i,r,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],p=n[2],f=n[5],g=n[8],v=i[0],m=i[3],u=i[6],b=i[1],T=i[4],y=i[7],C=i[2],w=i[5],R=i[8];return r[0]=a*v+o*b+l*C,r[3]=a*m+o*T+l*w,r[6]=a*u+o*y+l*R,r[1]=c*v+h*b+d*C,r[4]=c*m+h*T+d*w,r[7]=c*u+h*y+d*R,r[2]=p*v+f*b+g*C,r[5]=p*m+f*T+g*w,r[8]=p*u+f*y+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,p=o*l-h*r,f=c*r-a*l,g=t*d+n*p+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=d*v,e[1]=(i*c-h*n)*v,e[2]=(o*n-i*a)*v,e[3]=p*v,e[4]=(h*t-i*l)*v,e[5]=(i*r-o*t)*v,e[6]=f*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ys.makeScale(e,t)),this}rotate(e){return this.premultiply(Ys.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ys.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ys=new Oe;function _l(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function ws(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Zc(){const s=ws("canvas");return s.style.display="block",s}const Ja={};function Fi(s){s in Ja||(Ja[s]=!0,console.warn(s))}function Jc(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Qa=new Oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),eo=new Oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Qc(){const s={enabled:!0,workingColorSpace:Si,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===je&&(i.r=fn(i.r),i.g=fn(i.g),i.b=fn(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===je&&(i.r=mi(i.r),i.g=mi(i.g),i.b=mi(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===bn?Ts:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Fi("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Fi("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Si]:{primaries:e,whitePoint:n,transfer:Ts,toXYZ:Qa,fromXYZ:eo,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Bt},outputColorSpaceConfig:{drawingBufferColorSpace:Bt}},[Bt]:{primaries:e,whitePoint:n,transfer:je,toXYZ:Qa,fromXYZ:eo,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Bt}}}),s}const Xe=Qc();function fn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function mi(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let $n;class eh{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{$n===void 0&&($n=ws("canvas")),$n.width=e.width,$n.height=e.height;const i=$n.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=$n}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ws("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=fn(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(fn(t[n]/255)*255):t[n]=fn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let th=0;class Ua{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:th++}),this.uuid=Rn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Ks(i[a].image)):r.push(Ks(i[a]))}else r=Ks(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Ks(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?eh.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let nh=0;const js=new I;class At extends Ei{constructor(e=At.DEFAULT_IMAGE,t=At.DEFAULT_MAPPING,n=Wn,i=Wn,r=Jt,a=Xn,o=Ht,l=Yt,c=At.DEFAULT_ANISOTROPY,h=bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nh++}),this.uuid=Rn(),this.name="",this.source=new Ua(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Pe(0,0),this.repeat=new Pe(1,1),this.center=new Pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(js).x}get height(){return this.source.getSize(js).y}get depth(){return this.source.getSize(js).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==al)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Vr:e.x=e.x-Math.floor(e.x);break;case Wn:e.x=e.x<0?0:1;break;case Wr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Vr:e.y=e.y-Math.floor(e.y);break;case Wn:e.y=e.y<0?0:1;break;case Wr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}At.DEFAULT_IMAGE=null;At.DEFAULT_MAPPING=al;At.DEFAULT_ANISOTROPY=1;class lt{constructor(e=0,t=0,n=0,i=1){lt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],h=l[4],d=l[8],p=l[1],f=l[5],g=l[9],v=l[2],m=l[6],u=l[10];if(Math.abs(h-p)<.01&&Math.abs(d-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+p)<.1&&Math.abs(d+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(c+1)/2,y=(f+1)/2,C=(u+1)/2,w=(h+p)/4,R=(d+v)/4,L=(g+m)/4;return T>y&&T>C?T<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(T),i=w/n,r=R/n):y>C?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=w/i,r=L/i):C<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(C),n=R/r,i=L/r),this.set(n,i,r,t),this}let b=Math.sqrt((m-g)*(m-g)+(d-v)*(d-v)+(p-h)*(p-h));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(d-v)/b,this.z=(p-h)/b,this.w=Math.acos((c+f+u-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ze(this.x,e.x,t.x),this.y=ze(this.y,e.y,t.y),this.z=ze(this.z,e.z,t.z),this.w=ze(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ze(this.x,e,t),this.y=ze(this.y,e,t),this.z=ze(this.z,e,t),this.w=ze(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ih extends Ei{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Jt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new lt(0,0,e,t),this.scissorTest=!1,this.viewport=new lt(0,0,e,t);const i={width:e,height:t,depth:n.depth},r=new At(i);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Jt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Ua(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class pn extends ih{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class vl extends At{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Tt,this.minFilter=Tt,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class sh extends At{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Tt,this.minFilter=Tt,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Hi{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Vt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Vt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Vt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Vt):Vt.fromBufferAttribute(r,a),Vt.applyMatrix4(e.matrixWorld),this.expandByPoint(Vt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Yi.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Yi.copy(n.boundingBox)),Yi.applyMatrix4(e.matrixWorld),this.union(Yi)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Vt),Vt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ti),Ki.subVectors(this.max,Ti),Zn.subVectors(e.a,Ti),Jn.subVectors(e.b,Ti),Qn.subVectors(e.c,Ti),gn.subVectors(Jn,Zn),_n.subVectors(Qn,Jn),Ln.subVectors(Zn,Qn);let t=[0,-gn.z,gn.y,0,-_n.z,_n.y,0,-Ln.z,Ln.y,gn.z,0,-gn.x,_n.z,0,-_n.x,Ln.z,0,-Ln.x,-gn.y,gn.x,0,-_n.y,_n.x,0,-Ln.y,Ln.x,0];return!$s(t,Zn,Jn,Qn,Ki)||(t=[1,0,0,0,1,0,0,0,1],!$s(t,Zn,Jn,Qn,Ki))?!1:(ji.crossVectors(gn,_n),t=[ji.x,ji.y,ji.z],$s(t,Zn,Jn,Qn,Ki))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Vt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Vt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(nn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const nn=[new I,new I,new I,new I,new I,new I,new I,new I],Vt=new I,Yi=new Hi,Zn=new I,Jn=new I,Qn=new I,gn=new I,_n=new I,Ln=new I,Ti=new I,Ki=new I,ji=new I,In=new I;function $s(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){In.fromArray(s,r);const o=i.x*Math.abs(In.x)+i.y*Math.abs(In.y)+i.z*Math.abs(In.z),l=e.dot(In),c=t.dot(In),h=n.dot(In);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const rh=new Hi,Ai=new I,Zs=new I;class Fs{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):rh.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ai.subVectors(e,this.center);const t=Ai.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ai,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Zs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ai.copy(e.center).add(Zs)),this.expandByPoint(Ai.copy(e.center).sub(Zs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const sn=new I,Js=new I,$i=new I,vn=new I,Qs=new I,Zi=new I,er=new I;class Sl{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,sn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=sn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(sn.copy(this.origin).addScaledVector(this.direction,t),sn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Js.copy(e).add(t).multiplyScalar(.5),$i.copy(t).sub(e).normalize(),vn.copy(this.origin).sub(Js);const r=e.distanceTo(t)*.5,a=-this.direction.dot($i),o=vn.dot(this.direction),l=-vn.dot($i),c=vn.lengthSq(),h=Math.abs(1-a*a);let d,p,f,g;if(h>0)if(d=a*l-o,p=a*o-l,g=r*h,d>=0)if(p>=-g)if(p<=g){const v=1/h;d*=v,p*=v,f=d*(d+a*p+2*o)+p*(a*d+p+2*l)+c}else p=r,d=Math.max(0,-(a*p+o)),f=-d*d+p*(p+2*l)+c;else p=-r,d=Math.max(0,-(a*p+o)),f=-d*d+p*(p+2*l)+c;else p<=-g?(d=Math.max(0,-(-a*r+o)),p=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+p*(p+2*l)+c):p<=g?(d=0,p=Math.min(Math.max(-r,-l),r),f=p*(p+2*l)+c):(d=Math.max(0,-(a*r+o)),p=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+p*(p+2*l)+c);else p=a>0?-r:r,d=Math.max(0,-(a*p+o)),f=-d*d+p*(p+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Js).addScaledVector($i,p),f}intersectSphere(e,t){sn.subVectors(e.center,this.origin);const n=sn.dot(this.direction),i=sn.dot(sn)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,p=this.origin;return c>=0?(n=(e.min.x-p.x)*c,i=(e.max.x-p.x)*c):(n=(e.max.x-p.x)*c,i=(e.min.x-p.x)*c),h>=0?(r=(e.min.y-p.y)*h,a=(e.max.y-p.y)*h):(r=(e.max.y-p.y)*h,a=(e.min.y-p.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),d>=0?(o=(e.min.z-p.z)*d,l=(e.max.z-p.z)*d):(o=(e.max.z-p.z)*d,l=(e.min.z-p.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,sn)!==null}intersectTriangle(e,t,n,i,r){Qs.subVectors(t,e),Zi.subVectors(n,e),er.crossVectors(Qs,Zi);let a=this.direction.dot(er),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;vn.subVectors(this.origin,e);const l=o*this.direction.dot(Zi.crossVectors(vn,Zi));if(l<0)return null;const c=o*this.direction.dot(Qs.cross(vn));if(c<0||l+c>a)return null;const h=-o*vn.dot(er);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class at{constructor(e,t,n,i,r,a,o,l,c,h,d,p,f,g,v,m){at.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c,h,d,p,f,g,v,m)}set(e,t,n,i,r,a,o,l,c,h,d,p,f,g,v,m){const u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=i,u[1]=r,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=h,u[10]=d,u[14]=p,u[3]=f,u[7]=g,u[11]=v,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new at().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/ei.setFromMatrixColumn(e,0).length(),r=1/ei.setFromMatrixColumn(e,1).length(),a=1/ei.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const p=a*h,f=a*d,g=o*h,v=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=f+g*c,t[5]=p-v*c,t[9]=-o*l,t[2]=v-p*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){const p=l*h,f=l*d,g=c*h,v=c*d;t[0]=p+v*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=v+p*o,t[10]=a*l}else if(e.order==="ZXY"){const p=l*h,f=l*d,g=c*h,v=c*d;t[0]=p-v*o,t[4]=-a*d,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=v-p*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const p=a*h,f=a*d,g=o*h,v=o*d;t[0]=l*h,t[4]=g*c-f,t[8]=p*c+v,t[1]=l*d,t[5]=v*c+p,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const p=a*l,f=a*c,g=o*l,v=o*c;t[0]=l*h,t[4]=v-p*d,t[8]=g*d+f,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*d+g,t[10]=p-v*d}else if(e.order==="XZY"){const p=a*l,f=a*c,g=o*l,v=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=p*d+v,t[5]=a*h,t[9]=f*d-g,t[2]=g*d-f,t[6]=o*h,t[10]=v*d+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ah,e,oh)}lookAt(e,t,n){const i=this.elements;return It.subVectors(e,t),It.lengthSq()===0&&(It.z=1),It.normalize(),Sn.crossVectors(n,It),Sn.lengthSq()===0&&(Math.abs(n.z)===1?It.x+=1e-4:It.z+=1e-4,It.normalize(),Sn.crossVectors(n,It)),Sn.normalize(),Ji.crossVectors(It,Sn),i[0]=Sn.x,i[4]=Ji.x,i[8]=It.x,i[1]=Sn.y,i[5]=Ji.y,i[9]=It.y,i[2]=Sn.z,i[6]=Ji.z,i[10]=It.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],p=n[9],f=n[13],g=n[2],v=n[6],m=n[10],u=n[14],b=n[3],T=n[7],y=n[11],C=n[15],w=i[0],R=i[4],L=i[8],E=i[12],x=i[1],P=i[5],O=i[9],k=i[13],q=i[2],V=i[6],X=i[10],j=i[14],H=i[3],se=i[7],ce=i[11],Ee=i[15];return r[0]=a*w+o*x+l*q+c*H,r[4]=a*R+o*P+l*V+c*se,r[8]=a*L+o*O+l*X+c*ce,r[12]=a*E+o*k+l*j+c*Ee,r[1]=h*w+d*x+p*q+f*H,r[5]=h*R+d*P+p*V+f*se,r[9]=h*L+d*O+p*X+f*ce,r[13]=h*E+d*k+p*j+f*Ee,r[2]=g*w+v*x+m*q+u*H,r[6]=g*R+v*P+m*V+u*se,r[10]=g*L+v*O+m*X+u*ce,r[14]=g*E+v*k+m*j+u*Ee,r[3]=b*w+T*x+y*q+C*H,r[7]=b*R+T*P+y*V+C*se,r[11]=b*L+T*O+y*X+C*ce,r[15]=b*E+T*k+y*j+C*Ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],p=e[10],f=e[14],g=e[3],v=e[7],m=e[11],u=e[15];return g*(+r*l*d-i*c*d-r*o*p+n*c*p+i*o*f-n*l*f)+v*(+t*l*f-t*c*p+r*a*p-i*a*f+i*c*h-r*l*h)+m*(+t*c*d-t*o*f-r*a*d+n*a*f+r*o*h-n*c*h)+u*(-i*o*h-t*l*d+t*o*p+i*a*d-n*a*p+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],p=e[10],f=e[11],g=e[12],v=e[13],m=e[14],u=e[15],b=d*m*c-v*p*c+v*l*f-o*m*f-d*l*u+o*p*u,T=g*p*c-h*m*c-g*l*f+a*m*f+h*l*u-a*p*u,y=h*v*c-g*d*c+g*o*f-a*v*f-h*o*u+a*d*u,C=g*d*l-h*v*l-g*o*p+a*v*p+h*o*m-a*d*m,w=t*b+n*T+i*y+r*C;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/w;return e[0]=b*R,e[1]=(v*p*r-d*m*r-v*i*f+n*m*f+d*i*u-n*p*u)*R,e[2]=(o*m*r-v*l*r+v*i*c-n*m*c-o*i*u+n*l*u)*R,e[3]=(d*l*r-o*p*r-d*i*c+n*p*c+o*i*f-n*l*f)*R,e[4]=T*R,e[5]=(h*m*r-g*p*r+g*i*f-t*m*f-h*i*u+t*p*u)*R,e[6]=(g*l*r-a*m*r-g*i*c+t*m*c+a*i*u-t*l*u)*R,e[7]=(a*p*r-h*l*r+h*i*c-t*p*c-a*i*f+t*l*f)*R,e[8]=y*R,e[9]=(g*d*r-h*v*r-g*n*f+t*v*f+h*n*u-t*d*u)*R,e[10]=(a*v*r-g*o*r+g*n*c-t*v*c-a*n*u+t*o*u)*R,e[11]=(h*o*r-a*d*r-h*n*c+t*d*c+a*n*f-t*o*f)*R,e[12]=C*R,e[13]=(h*v*i-g*d*i+g*n*p-t*v*p-h*n*m+t*d*m)*R,e[14]=(g*o*i-a*v*i-g*n*l+t*v*l+a*n*m-t*o*m)*R,e[15]=(a*d*i-h*o*i+h*n*l-t*d*l-a*n*p+t*o*p)*R,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,d=o+o,p=r*c,f=r*h,g=r*d,v=a*h,m=a*d,u=o*d,b=l*c,T=l*h,y=l*d,C=n.x,w=n.y,R=n.z;return i[0]=(1-(v+u))*C,i[1]=(f+y)*C,i[2]=(g-T)*C,i[3]=0,i[4]=(f-y)*w,i[5]=(1-(p+u))*w,i[6]=(m+b)*w,i[7]=0,i[8]=(g+T)*R,i[9]=(m-b)*R,i[10]=(1-(p+v))*R,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=ei.set(i[0],i[1],i[2]).length();const a=ei.set(i[4],i[5],i[6]).length(),o=ei.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Wt.copy(this);const c=1/r,h=1/a,d=1/o;return Wt.elements[0]*=c,Wt.elements[1]*=c,Wt.elements[2]*=c,Wt.elements[4]*=h,Wt.elements[5]*=h,Wt.elements[6]*=h,Wt.elements[8]*=d,Wt.elements[9]*=d,Wt.elements[10]*=d,t.setFromRotationMatrix(Wt),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=Qt,l=!1){const c=this.elements,h=2*r/(t-e),d=2*r/(n-i),p=(t+e)/(t-e),f=(n+i)/(n-i);let g,v;if(l)g=r/(a-r),v=a*r/(a-r);else if(o===Qt)g=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===As)g=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=p,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=Qt,l=!1){const c=this.elements,h=2/(t-e),d=2/(n-i),p=-(t+e)/(t-e),f=-(n+i)/(n-i);let g,v;if(l)g=1/(a-r),v=a/(a-r);else if(o===Qt)g=-2/(a-r),v=-(a+r)/(a-r);else if(o===As)g=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=p,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ei=new I,Wt=new at,ah=new I(0,0,0),oh=new I(1,1,1),Sn=new I,Ji=new I,It=new I,to=new at,no=new ki;class en{constructor(e=0,t=0,n=0,i=en.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],d=i[2],p=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(ze(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ze(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return to.makeRotationFromQuaternion(e),this.setFromRotationMatrix(to,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return no.setFromEuler(this),this.setFromQuaternion(no,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}en.DEFAULT_ORDER="XYZ";class xl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let lh=0;const io=new I,ti=new ki,rn=new at,Qi=new I,wi=new I,ch=new I,hh=new ki,so=new I(1,0,0),ro=new I(0,1,0),ao=new I(0,0,1),oo={type:"added"},uh={type:"removed"},ni={type:"childadded",child:null},tr={type:"childremoved",child:null};class vt extends Ei{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lh++}),this.uuid=Rn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vt.DEFAULT_UP.clone();const e=new I,t=new en,n=new ki,i=new I(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new at},normalMatrix:{value:new Oe}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ti.setFromAxisAngle(e,t),this.quaternion.multiply(ti),this}rotateOnWorldAxis(e,t){return ti.setFromAxisAngle(e,t),this.quaternion.premultiply(ti),this}rotateX(e){return this.rotateOnAxis(so,e)}rotateY(e){return this.rotateOnAxis(ro,e)}rotateZ(e){return this.rotateOnAxis(ao,e)}translateOnAxis(e,t){return io.copy(e).applyQuaternion(this.quaternion),this.position.add(io.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(so,e)}translateY(e){return this.translateOnAxis(ro,e)}translateZ(e){return this.translateOnAxis(ao,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(rn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Qi.copy(e):Qi.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),wi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?rn.lookAt(wi,Qi,this.up):rn.lookAt(Qi,wi,this.up),this.quaternion.setFromRotationMatrix(rn),i&&(rn.extractRotation(i.matrixWorld),ti.setFromRotationMatrix(rn),this.quaternion.premultiply(ti.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(oo),ni.child=e,this.dispatchEvent(ni),ni.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(uh),tr.child=e,this.dispatchEvent(tr),tr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),rn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),rn.multiply(e.parent.matrixWorld)),e.applyMatrix4(rn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(oo),ni.child=e,this.dispatchEvent(ni),ni.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wi,e,ch),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wi,hh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),p=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),p.length>0&&(n.skeletons=p),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}vt.DEFAULT_UP=new I(0,1,0);vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Xt=new I,an=new I,nr=new I,on=new I,ii=new I,si=new I,lo=new I,ir=new I,sr=new I,rr=new I,ar=new lt,or=new lt,lr=new lt;class kt{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Xt.subVectors(e,t),i.cross(Xt);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Xt.subVectors(i,t),an.subVectors(n,t),nr.subVectors(e,t);const a=Xt.dot(Xt),o=Xt.dot(an),l=Xt.dot(nr),c=an.dot(an),h=an.dot(nr),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;const p=1/d,f=(c*l-o*h)*p,g=(a*h-o*l)*p;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,on)===null?!1:on.x>=0&&on.y>=0&&on.x+on.y<=1}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,on)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,on.x),l.addScaledVector(a,on.y),l.addScaledVector(o,on.z),l)}static getInterpolatedAttribute(e,t,n,i,r,a){return ar.setScalar(0),or.setScalar(0),lr.setScalar(0),ar.fromBufferAttribute(e,t),or.fromBufferAttribute(e,n),lr.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(ar,r.x),a.addScaledVector(or,r.y),a.addScaledVector(lr,r.z),a}static isFrontFacing(e,t,n,i){return Xt.subVectors(n,t),an.subVectors(e,t),Xt.cross(an).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xt.subVectors(this.c,this.b),an.subVectors(this.a,this.b),Xt.cross(an).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return kt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return kt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return kt.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return kt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return kt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;ii.subVectors(i,n),si.subVectors(r,n),ir.subVectors(e,n);const l=ii.dot(ir),c=si.dot(ir);if(l<=0&&c<=0)return t.copy(n);sr.subVectors(e,i);const h=ii.dot(sr),d=si.dot(sr);if(h>=0&&d<=h)return t.copy(i);const p=l*d-h*c;if(p<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(ii,a);rr.subVectors(e,r);const f=ii.dot(rr),g=si.dot(rr);if(g>=0&&f<=g)return t.copy(r);const v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(si,o);const m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return lo.subVectors(r,i),o=(d-h)/(d-h+(f-g)),t.copy(i).addScaledVector(lo,o);const u=1/(m+v+p);return a=v*u,o=p*u,t.copy(n).addScaledVector(ii,a).addScaledVector(si,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const El={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xn={h:0,s:0,l:0},es={h:0,s:0,l:0};function cr(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Le{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Bt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xe.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=Xe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Xe.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=Xe.workingColorSpace){if(e=$c(e,1),t=ze(t,0,1),n=ze(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=cr(a,r,e+1/3),this.g=cr(a,r,e),this.b=cr(a,r,e-1/3)}return Xe.colorSpaceToWorking(this,i),this}setStyle(e,t=Bt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Bt){const n=El[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fn(e.r),this.g=fn(e.g),this.b=fn(e.b),this}copyLinearToSRGB(e){return this.r=mi(e.r),this.g=mi(e.g),this.b=mi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Bt){return Xe.workingToColorSpace(Et.copy(this),e),Math.round(ze(Et.r*255,0,255))*65536+Math.round(ze(Et.g*255,0,255))*256+Math.round(ze(Et.b*255,0,255))}getHexString(e=Bt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Xe.workingColorSpace){Xe.workingToColorSpace(Et.copy(this),t);const n=Et.r,i=Et.g,r=Et.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Xe.workingColorSpace){return Xe.workingToColorSpace(Et.copy(this),t),e.r=Et.r,e.g=Et.g,e.b=Et.b,e}getStyle(e=Bt){Xe.workingToColorSpace(Et.copy(this),e);const t=Et.r,n=Et.g,i=Et.b;return e!==Bt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(xn),this.setHSL(xn.h+e,xn.s+t,xn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(xn),e.getHSL(es);const n=Xs(xn.h,es.h,t),i=Xs(xn.s,es.s,t),r=Xs(xn.l,es.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Et=new Le;Le.NAMES=El;let dh=0;class Yn extends Ei{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:dh++}),this.uuid=Rn(),this.name="",this.type="Material",this.blending=pi,this.side=Cn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Lr,this.blendDst=Ir,this.blendEquation=Hn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Le(0,0,0),this.blendAlpha=0,this.depthFunc=gi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ja,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=jn,this.stencilZFail=jn,this.stencilZPass=jn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==pi&&(n.blending=this.blending),this.side!==Cn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Lr&&(n.blendSrc=this.blendSrc),this.blendDst!==Ir&&(n.blendDst=this.blendDst),this.blendEquation!==Hn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==gi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ja&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==jn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==jn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==jn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class yl extends Yn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new en,this.combine=wa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ht=new I,ts=new Pe;let fh=0;class zt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:fh++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Sa,this.updateRanges=[],this.gpuType=dn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ts.fromBufferAttribute(this,t),ts.applyMatrix3(e),this.setXY(t,ts.x,ts.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix3(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix4(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyNormalMatrix(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.transformDirection(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Zt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=$e(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Zt(t,this.array)),t}setX(e,t){return this.normalized&&(t=$e(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Zt(t,this.array)),t}setY(e,t){return this.normalized&&(t=$e(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Zt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=$e(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Zt(t,this.array)),t}setW(e,t){return this.normalized&&(t=$e(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=$e(t,this.array),n=$e(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=$e(t,this.array),n=$e(n,this.array),i=$e(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=$e(t,this.array),n=$e(n,this.array),i=$e(i,this.array),r=$e(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Sa&&(e.usage=this.usage),e}}class Ml extends zt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class bl extends zt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ft extends zt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let ph=0;const Ft=new at,hr=new vt,ri=new I,Ut=new Hi,Ri=new Hi,_t=new I;class Pt extends Ei{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ph++}),this.uuid=Rn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(_l(e)?bl:Ml)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Oe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ft.makeRotationFromQuaternion(e),this.applyMatrix4(Ft),this}rotateX(e){return Ft.makeRotationX(e),this.applyMatrix4(Ft),this}rotateY(e){return Ft.makeRotationY(e),this.applyMatrix4(Ft),this}rotateZ(e){return Ft.makeRotationZ(e),this.applyMatrix4(Ft),this}translate(e,t,n){return Ft.makeTranslation(e,t,n),this.applyMatrix4(Ft),this}scale(e,t,n){return Ft.makeScale(e,t,n),this.applyMatrix4(Ft),this}lookAt(e){return hr.lookAt(e),hr.updateMatrix(),this.applyMatrix4(hr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ri).negate(),this.translate(ri.x,ri.y,ri.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ft(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Ut.setFromBufferAttribute(r),this.morphTargetsRelative?(_t.addVectors(this.boundingBox.min,Ut.min),this.boundingBox.expandByPoint(_t),_t.addVectors(this.boundingBox.max,Ut.max),this.boundingBox.expandByPoint(_t)):(this.boundingBox.expandByPoint(Ut.min),this.boundingBox.expandByPoint(Ut.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(Ut.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Ri.setFromBufferAttribute(o),this.morphTargetsRelative?(_t.addVectors(Ut.min,Ri.min),Ut.expandByPoint(_t),_t.addVectors(Ut.max,Ri.max),Ut.expandByPoint(_t)):(Ut.expandByPoint(Ri.min),Ut.expandByPoint(Ri.max))}Ut.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)_t.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(_t));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)_t.fromBufferAttribute(o,c),l&&(ri.fromBufferAttribute(e,c),_t.add(ri)),i=Math.max(i,n.distanceToSquared(_t))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new zt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let L=0;L<n.count;L++)o[L]=new I,l[L]=new I;const c=new I,h=new I,d=new I,p=new Pe,f=new Pe,g=new Pe,v=new I,m=new I;function u(L,E,x){c.fromBufferAttribute(n,L),h.fromBufferAttribute(n,E),d.fromBufferAttribute(n,x),p.fromBufferAttribute(r,L),f.fromBufferAttribute(r,E),g.fromBufferAttribute(r,x),h.sub(c),d.sub(c),f.sub(p),g.sub(p);const P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(P),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(P),o[L].add(v),o[E].add(v),o[x].add(v),l[L].add(m),l[E].add(m),l[x].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let L=0,E=b.length;L<E;++L){const x=b[L],P=x.start,O=x.count;for(let k=P,q=P+O;k<q;k+=3)u(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const T=new I,y=new I,C=new I,w=new I;function R(L){C.fromBufferAttribute(i,L),w.copy(C);const E=o[L];T.copy(E),T.sub(C.multiplyScalar(C.dot(E))).normalize(),y.crossVectors(w,E);const P=y.dot(l[L])<0?-1:1;a.setXYZW(L,T.x,T.y,T.z,P)}for(let L=0,E=b.length;L<E;++L){const x=b[L],P=x.start,O=x.count;for(let k=P,q=P+O;k<q;k+=3)R(e.getX(k+0)),R(e.getX(k+1)),R(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new zt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,f=n.count;p<f;p++)n.setXYZ(p,0,0,0);const i=new I,r=new I,a=new I,o=new I,l=new I,c=new I,h=new I,d=new I;if(e)for(let p=0,f=e.count;p<f;p+=3){const g=e.getX(p+0),v=e.getX(p+1),m=e.getX(p+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let p=0,f=t.count;p<f;p+=3)i.fromBufferAttribute(t,p+0),r.fromBufferAttribute(t,p+1),a.fromBufferAttribute(t,p+2),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)_t.fromBufferAttribute(e,t),_t.normalize(),e.setXYZ(t,_t.x,_t.y,_t.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,d=o.normalized,p=new c.constructor(l.length*h);let f=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?f=l[v]*o.data.stride+o.offset:f=l[v]*h;for(let u=0;u<h;u++)p[g++]=c[f++]}return new zt(p,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Pt,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){const p=c[h],f=e(p,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,p=c.length;d<p;d++){const f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],d=r[c];for(let p=0,f=d.length;p<f;p++)h.push(d[p].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const co=new at,Un=new Sl,ns=new Fs,ho=new I,is=new I,ss=new I,rs=new I,ur=new I,as=new I,uo=new I,os=new I;class ke extends vt{constructor(e=new Pt,t=new yl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){as.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],d=r[l];h!==0&&(ur.fromBufferAttribute(d,e),a?as.addScaledVector(ur,h):as.addScaledVector(ur.sub(t),h))}t.add(as)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ns.copy(n.boundingSphere),ns.applyMatrix4(r),Un.copy(e.ray).recast(e.near),!(ns.containsPoint(Un.origin)===!1&&(Un.intersectSphere(ns,ho)===null||Un.origin.distanceToSquared(ho)>(e.far-e.near)**2))&&(co.copy(r).invert(),Un.copy(e.ray).applyMatrix4(co),!(n.boundingBox!==null&&Un.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Un)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,p=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=p.length;g<v;g++){const m=p[g],u=a[m.materialIndex],b=Math.max(m.start,f.start),T=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let y=b,C=T;y<C;y+=3){const w=o.getX(y),R=o.getX(y+1),L=o.getX(y+2);i=ls(this,u,e,n,c,h,d,w,R,L),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let m=g,u=v;m<u;m+=3){const b=o.getX(m),T=o.getX(m+1),y=o.getX(m+2);i=ls(this,a,e,n,c,h,d,b,T,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=p.length;g<v;g++){const m=p[g],u=a[m.materialIndex],b=Math.max(m.start,f.start),T=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=b,C=T;y<C;y+=3){const w=y,R=y+1,L=y+2;i=ls(this,u,e,n,c,h,d,w,R,L),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=g,u=v;m<u;m+=3){const b=m,T=m+1,y=m+2;i=ls(this,a,e,n,c,h,d,b,T,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function mh(s,e,t,n,i,r,a,o){let l;if(e.side===Ct?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===Cn,o),l===null)return null;os.copy(o),os.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(os);return c<t.near||c>t.far?null:{distance:c,point:os.clone(),object:s}}function ls(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,is),s.getVertexPosition(l,ss),s.getVertexPosition(c,rs);const h=mh(s,e,t,n,is,ss,rs,uo);if(h){const d=new I;kt.getBarycoord(uo,is,ss,rs,d),i&&(h.uv=kt.getInterpolatedAttribute(i,o,l,c,d,new Pe)),r&&(h.uv1=kt.getInterpolatedAttribute(r,o,l,c,d,new Pe)),a&&(h.normal=kt.getInterpolatedAttribute(a,o,l,c,d,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const p={a:o,b:l,c,normal:new I,materialIndex:0};kt.getNormal(is,ss,rs,p.normal),h.face=p,h.barycoord=d}return h}class Gt extends Pt{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],d=[];let p=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new ft(c,3)),this.setAttribute("normal",new ft(h,3)),this.setAttribute("uv",new ft(d,2));function g(v,m,u,b,T,y,C,w,R,L,E){const x=y/R,P=C/L,O=y/2,k=C/2,q=w/2,V=R+1,X=L+1;let j=0,H=0;const se=new I;for(let ce=0;ce<X;ce++){const Ee=ce*P-k;for(let Ge=0;Ge<V;Ge++){const Ze=Ge*x-O;se[v]=Ze*b,se[m]=Ee*T,se[u]=q,c.push(se.x,se.y,se.z),se[v]=0,se[m]=0,se[u]=w>0?1:-1,h.push(se.x,se.y,se.z),d.push(Ge/R),d.push(1-ce/L),j+=1}}for(let ce=0;ce<L;ce++)for(let Ee=0;Ee<R;Ee++){const Ge=p+Ee+V*ce,Ze=p+Ee+V*(ce+1),Qe=p+(Ee+1)+V*(ce+1),Ie=p+(Ee+1)+V*ce;l.push(Ge,Ze,Ie),l.push(Ze,Qe,Ie),H+=6}o.addGroup(f,H,E),f+=H,p+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function xi(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function bt(s){const e={};for(let t=0;t<s.length;t++){const n=xi(s[t]);for(const i in n)e[i]=n[i]}return e}function gh(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Tl(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Xe.workingColorSpace}const _h={clone:xi,merge:bt};var vh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class mn extends Yn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vh,this.fragmentShader=Sh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xi(e.uniforms),this.uniformsGroups=gh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Al extends vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=Qt,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const En=new I,fo=new Pe,po=new Pe;class qt extends Al{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=xa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ws*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return xa*2*Math.atan(Math.tan(Ws*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){En.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(En.x,En.y).multiplyScalar(-e/En.z),En.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(En.x,En.y).multiplyScalar(-e/En.z)}getViewSize(e,t){return this.getViewBounds(e,fo,po),t.subVectors(po,fo)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ws*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ai=-90,oi=1;class xh extends vt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new qt(ai,oi,e,t);i.layers=this.layers,this.add(i);const r=new qt(ai,oi,e,t);r.layers=this.layers,this.add(r);const a=new qt(ai,oi,e,t);a.layers=this.layers,this.add(a);const o=new qt(ai,oi,e,t);o.layers=this.layers,this.add(o);const l=new qt(ai,oi,e,t);l.layers=this.layers,this.add(l);const c=new qt(ai,oi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===Qt)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===As)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,d=e.getRenderTarget(),p=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(d,p,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class wl extends At{constructor(e=[],t=_i,n,i,r,a,o,l,c,h){super(e,t,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Eh extends pn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new wl(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Gt(5,5,5),r=new mn({name:"CubemapFromEquirect",uniforms:xi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ct,blending:An});r.uniforms.tEquirect.value=t;const a=new ke(i,r),o=t.minFilter;return t.minFilter===Xn&&(t.minFilter=Jt),new xh(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}class Rt extends vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const yh={type:"move"};class dr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Rt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Rt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Rt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,n),u=this._getHandJoint(c,v);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],p=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&p>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(yh)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Rt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class mo extends vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new en,this.environmentIntensity=1,this.environmentRotation=new en,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Mh{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Sa,this.updateRanges=[],this.version=0,this.uuid=Rn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Rn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Rn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Mt=new I;class Rs{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix4(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyNormalMatrix(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.transformDirection(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Zt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=$e(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=$e(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=$e(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=$e(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=$e(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Zt(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Zt(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Zt(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Zt(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=$e(t,this.array),n=$e(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=$e(t,this.array),n=$e(n,this.array),i=$e(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=$e(t,this.array),n=$e(n,this.array),i=$e(i,this.array),r=$e(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new zt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Rs(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class ut extends Yn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Le(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let li;const Ci=new I,ci=new I,hi=new I,ui=new Pe,Pi=new Pe,Rl=new at,cs=new I,Di=new I,hs=new I,go=new Pe,fr=new Pe,_o=new Pe;class Nn extends vt{constructor(e=new ut){if(super(),this.isSprite=!0,this.type="Sprite",li===void 0){li=new Pt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Mh(t,5);li.setIndex([0,1,2,0,2,3]),li.setAttribute("position",new Rs(n,3,0,!1)),li.setAttribute("uv",new Rs(n,2,3,!1))}this.geometry=li,this.material=e,this.center=new Pe(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ci.setFromMatrixScale(this.matrixWorld),Rl.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),hi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ci.multiplyScalar(-hi.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const a=this.center;us(cs.set(-.5,-.5,0),hi,a,ci,i,r),us(Di.set(.5,-.5,0),hi,a,ci,i,r),us(hs.set(.5,.5,0),hi,a,ci,i,r),go.set(0,0),fr.set(1,0),_o.set(1,1);let o=e.ray.intersectTriangle(cs,Di,hs,!1,Ci);if(o===null&&(us(Di.set(-.5,.5,0),hi,a,ci,i,r),fr.set(0,1),o=e.ray.intersectTriangle(cs,hs,Di,!1,Ci),o===null))return;const l=e.ray.origin.distanceTo(Ci);l<e.near||l>e.far||t.push({distance:l,point:Ci.clone(),uv:kt.getInterpolation(Ci,cs,Di,hs,go,fr,_o,new Pe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function us(s,e,t,n,i,r){ui.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(Pi.x=r*ui.x-i*ui.y,Pi.y=i*ui.x+r*ui.y):Pi.copy(ui),s.copy(e),s.x+=Pi.x,s.y+=Pi.y,s.applyMatrix4(Rl)}const pr=new I,bh=new I,Th=new Oe;class Gn{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=pr.subVectors(n,t).cross(bh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(pr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Th.getNormalMatrix(e),i=this.coplanarPoint(pr).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const On=new Fs,Ah=new Pe(.5,.5),ds=new I;class Na{constructor(e=new Gn,t=new Gn,n=new Gn,i=new Gn,r=new Gn,a=new Gn){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Qt,n=!1){const i=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],p=r[6],f=r[7],g=r[8],v=r[9],m=r[10],u=r[11],b=r[12],T=r[13],y=r[14],C=r[15];if(i[0].setComponents(c-a,f-h,u-g,C-b).normalize(),i[1].setComponents(c+a,f+h,u+g,C+b).normalize(),i[2].setComponents(c+o,f+d,u+v,C+T).normalize(),i[3].setComponents(c-o,f-d,u-v,C-T).normalize(),n)i[4].setComponents(l,p,m,y).normalize(),i[5].setComponents(c-l,f-p,u-m,C-y).normalize();else if(i[4].setComponents(c-l,f-p,u-m,C-y).normalize(),t===Qt)i[5].setComponents(c+l,f+p,u+m,C+y).normalize();else if(t===As)i[5].setComponents(l,p,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),On.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),On.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(On)}intersectsSprite(e){On.center.set(0,0,0);const t=Ah.distanceTo(e.center);return On.radius=.7071067811865476+t,On.applyMatrix4(e.matrixWorld),this.intersectsSphere(On)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ds.x=i.normal.x>0?e.max.x:e.min.x,ds.y=i.normal.y>0?e.max.y:e.min.y,ds.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ds)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Cl extends Yn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Le(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const vo=new at,Ea=new Sl,fs=new Fs,ps=new I;class wh extends vt{constructor(e=new Pt,t=new Cl){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),fs.copy(n.boundingSphere),fs.applyMatrix4(i),fs.radius+=r,e.ray.intersectsSphere(fs)===!1)return;vo.copy(i).invert(),Ea.copy(e.ray).applyMatrix4(vo);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){const p=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=p,v=f;g<v;g++){const m=c.getX(g);ps.fromBufferAttribute(d,m),So(ps,m,l,i,e,t,this)}}else{const p=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let g=p,v=f;g<v;g++)ps.fromBufferAttribute(d,g),So(ps,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function So(s,e,t,n,i,r,a){const o=Ea.distanceSqToPoint(s);if(o<t){const l=new I;Ea.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Rh extends At{constructor(e,t,n,i,r,a,o,l,c){super(e,t,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Pl extends At{constructor(e,t,n=qn,i,r,a,o=Tt,l=Tt,c,h=Ni,d=1){if(h!==Ni&&h!==Oi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const p={width:e,height:t,depth:d};super(p,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ua(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Dl extends At{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class hn extends Pt{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],d=[],p=[],f=[];let g=0;const v=[],m=n/2;let u=0;b(),a===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(h),this.setAttribute("position",new ft(d,3)),this.setAttribute("normal",new ft(p,3)),this.setAttribute("uv",new ft(f,2));function b(){const y=new I,C=new I;let w=0;const R=(t-e)/n;for(let L=0;L<=r;L++){const E=[],x=L/r,P=x*(t-e)+e;for(let O=0;O<=i;O++){const k=O/i,q=k*l+o,V=Math.sin(q),X=Math.cos(q);C.x=P*V,C.y=-x*n+m,C.z=P*X,d.push(C.x,C.y,C.z),y.set(V,R,X).normalize(),p.push(y.x,y.y,y.z),f.push(k,1-x),E.push(g++)}v.push(E)}for(let L=0;L<i;L++)for(let E=0;E<r;E++){const x=v[E][L],P=v[E+1][L],O=v[E+1][L+1],k=v[E][L+1];(e>0||E!==0)&&(h.push(x,P,k),w+=3),(t>0||E!==r-1)&&(h.push(P,O,k),w+=3)}c.addGroup(u,w,0),u+=w}function T(y){const C=g,w=new Pe,R=new I;let L=0;const E=y===!0?e:t,x=y===!0?1:-1;for(let O=1;O<=i;O++)d.push(0,m*x,0),p.push(0,x,0),f.push(.5,.5),g++;const P=g;for(let O=0;O<=i;O++){const q=O/i*l+o,V=Math.cos(q),X=Math.sin(q);R.x=E*X,R.y=m*x,R.z=E*V,d.push(R.x,R.y,R.z),p.push(0,x,0),w.x=V*.5+.5,w.y=X*.5*x+.5,f.push(w.x,w.y),g++}for(let O=0;O<i;O++){const k=C+O,q=P+O;y===!0?h.push(q,q+1,k):h.push(q+1,q,k),L+=3}c.addGroup(u,L,y===!0?1:2),u+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Cs extends hn{constructor(e=1,t=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Cs(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class yi extends Pt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],a=[];o(i),c(n),h(),this.setAttribute("position",new ft(r,3)),this.setAttribute("normal",new ft(r.slice(),3)),this.setAttribute("uv",new ft(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(b){const T=new I,y=new I,C=new I;for(let w=0;w<t.length;w+=3)f(t[w+0],T),f(t[w+1],y),f(t[w+2],C),l(T,y,C,b)}function l(b,T,y,C){const w=C+1,R=[];for(let L=0;L<=w;L++){R[L]=[];const E=b.clone().lerp(y,L/w),x=T.clone().lerp(y,L/w),P=w-L;for(let O=0;O<=P;O++)O===0&&L===w?R[L][O]=E:R[L][O]=E.clone().lerp(x,O/P)}for(let L=0;L<w;L++)for(let E=0;E<2*(w-L)-1;E++){const x=Math.floor(E/2);E%2===0?(p(R[L][x+1]),p(R[L+1][x]),p(R[L][x])):(p(R[L][x+1]),p(R[L+1][x+1]),p(R[L+1][x]))}}function c(b){const T=new I;for(let y=0;y<r.length;y+=3)T.x=r[y+0],T.y=r[y+1],T.z=r[y+2],T.normalize().multiplyScalar(b),r[y+0]=T.x,r[y+1]=T.y,r[y+2]=T.z}function h(){const b=new I;for(let T=0;T<r.length;T+=3){b.x=r[T+0],b.y=r[T+1],b.z=r[T+2];const y=m(b)/2/Math.PI+.5,C=u(b)/Math.PI+.5;a.push(y,1-C)}g(),d()}function d(){for(let b=0;b<a.length;b+=6){const T=a[b+0],y=a[b+2],C=a[b+4],w=Math.max(T,y,C),R=Math.min(T,y,C);w>.9&&R<.1&&(T<.2&&(a[b+0]+=1),y<.2&&(a[b+2]+=1),C<.2&&(a[b+4]+=1))}}function p(b){r.push(b.x,b.y,b.z)}function f(b,T){const y=b*3;T.x=e[y+0],T.y=e[y+1],T.z=e[y+2]}function g(){const b=new I,T=new I,y=new I,C=new I,w=new Pe,R=new Pe,L=new Pe;for(let E=0,x=0;E<r.length;E+=9,x+=6){b.set(r[E+0],r[E+1],r[E+2]),T.set(r[E+3],r[E+4],r[E+5]),y.set(r[E+6],r[E+7],r[E+8]),w.set(a[x+0],a[x+1]),R.set(a[x+2],a[x+3]),L.set(a[x+4],a[x+5]),C.copy(b).add(T).add(y).divideScalar(3);const P=m(C);v(w,x+0,b,P),v(R,x+2,T,P),v(L,x+4,y,P)}}function v(b,T,y,C){C<0&&b.x===1&&(a[T]=b.x-1),y.x===0&&y.z===0&&(a[T]=C/2/Math.PI+.5)}function m(b){return Math.atan2(b.z,-b.x)}function u(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yi(e.vertices,e.indices,e.radius,e.details)}}class Ps extends yi{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ps(e.radius,e.detail)}}class Ds extends yi{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ds(e.radius,e.detail)}}class Ls extends yi{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ls(e.radius,e.detail)}}class zi extends Pt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,d=e/o,p=t/l,f=[],g=[],v=[],m=[];for(let u=0;u<h;u++){const b=u*p-a;for(let T=0;T<c;T++){const y=T*d-r;g.push(y,-b,0),v.push(0,0,1),m.push(T/o),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let b=0;b<o;b++){const T=b+c*u,y=b+c*(u+1),C=b+1+c*(u+1),w=b+1+c*u;f.push(T,y,w),f.push(y,C,w)}this.setIndex(f),this.setAttribute("position",new ft(g,3)),this.setAttribute("normal",new ft(v,3)),this.setAttribute("uv",new ft(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zi(e.width,e.height,e.widthSegments,e.heightSegments)}}class Oa extends Pt{constructor(e=.5,t=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],l=[],c=[],h=[];let d=e;const p=(t-e)/i,f=new I,g=new Pe;for(let v=0;v<=i;v++){for(let m=0;m<=n;m++){const u=r+m/n*a;f.x=d*Math.cos(u),f.y=d*Math.sin(u),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}d+=p}for(let v=0;v<i;v++){const m=v*(n+1);for(let u=0;u<n;u++){const b=u+m,T=b,y=b+n+1,C=b+n+2,w=b+1;o.push(T,y,w),o.push(y,C,w)}}this.setIndex(o),this.setAttribute("position",new ft(l,3)),this.setAttribute("normal",new ft(c,3)),this.setAttribute("uv",new ft(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oa(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Fa extends yi{constructor(e=1,t=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Fa(e.radius,e.detail)}}class Is extends Pt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],l=[],c=[],h=new I,d=new I,p=new I;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){const v=g/i*r,m=f/n*Math.PI*2;d.x=(e+t*Math.cos(m))*Math.cos(v),d.y=(e+t*Math.cos(m))*Math.sin(v),d.z=t*Math.sin(m),o.push(d.x,d.y,d.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),p.subVectors(d,h).normalize(),l.push(p.x,p.y,p.z),c.push(g/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){const v=(i+1)*f+g-1,m=(i+1)*(f-1)+g-1,u=(i+1)*(f-1)+g,b=(i+1)*f+g;a.push(v,m,b),a.push(m,u,b)}this.setIndex(a),this.setAttribute("position",new ft(o,3)),this.setAttribute("normal",new ft(l,3)),this.setAttribute("uv",new ft(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Is(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class ms extends Yn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ml,this.normalScale=new Pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new en,this.combine=wa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ch extends Yn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=kc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ph extends Yn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Ll extends vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Le(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const mr=new at,xo=new I,Eo=new I;class Dh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Pe(512,512),this.mapType=Yt,this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Na,this._frameExtents=new Pe(1,1),this._viewportCount=1,this._viewports=[new lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;xo.setFromMatrixPosition(e.matrixWorld),t.position.copy(xo),Eo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Eo),t.updateMatrixWorld(),mr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(mr,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(mr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Us extends Al{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Lh extends Dh{constructor(){super(new Us(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ih extends Ll{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.shadow=new Lh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Uh extends Ll{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Nh extends qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Oh{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function yo(s,e,t,n){const i=Fh(n);switch(t){case ul:return s*e;case fl:return s*e/i.components*i.byteLength;case Da:return s*e/i.components*i.byteLength;case pl:return s*e*2/i.components*i.byteLength;case La:return s*e*2/i.components*i.byteLength;case dl:return s*e*3/i.components*i.byteLength;case Ht:return s*e*4/i.components*i.byteLength;case Ia:return s*e*4/i.components*i.byteLength;case xs:case Es:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case ys:case Ms:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case qr:case Kr:return Math.max(s,16)*Math.max(e,8)/4;case Xr:case Yr:return Math.max(s,8)*Math.max(e,8)/2;case jr:case $r:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Zr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Jr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Qr:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case ea:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case ta:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case na:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case ia:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case sa:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case ra:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case aa:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case oa:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case la:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case ca:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case ha:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case ua:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case da:case fa:case pa:return Math.ceil(s/4)*Math.ceil(e/4)*16;case ma:case ga:return Math.ceil(s/4)*Math.ceil(e/4)*8;case _a:case va:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Fh(s){switch(s){case Yt:case ol:return{byteLength:1,components:1};case Ii:case ll:case Gi:return{byteLength:2,components:1};case Ca:case Pa:return{byteLength:2,components:4};case qn:case Ra:case dn:return{byteLength:4,components:1};case cl:case hl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Aa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Aa);function Il(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Bh(s){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,d=c.byteLength,p=s.createBuffer();s.bindBuffer(l,p),s.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const h=l.array,d=l.updateRanges;if(s.bindBuffer(c,o),d.length===0)s.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let p=0;for(let f=1;f<d.length;f++){const g=d[p],v=d[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++p,d[p]=v)}d.length=p+1;for(let f=0,g=d.length;f<g;f++){const v=d[f];s.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var Gh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,kh=`#ifdef USE_ALPHAHASH
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
#endif`,Hh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Wh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xh=`#ifdef USE_AOMAP
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
#endif`,qh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Yh=`#ifdef USE_BATCHING
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
#endif`,Kh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,jh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$h=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Jh=`#ifdef USE_IRIDESCENCE
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
#endif`,Qh=`#ifdef USE_BUMPMAP
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
#endif`,eu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,tu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,iu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,su=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ru=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,au=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ou=`#if defined( USE_COLOR_ALPHA )
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
#endif`,lu=`#define PI 3.141592653589793
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
} // validated`,cu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,hu=`vec3 transformedNormal = objectNormal;
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
#endif`,uu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,du=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mu="gl_FragColor = linearToOutputTexel( gl_FragColor );",gu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_u=`#ifdef USE_ENVMAP
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
#endif`,vu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Su=`#ifdef USE_ENVMAP
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
#endif`,xu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Eu=`#ifdef USE_ENVMAP
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
#endif`,yu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Mu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Tu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Au=`#ifdef USE_GRADIENTMAP
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
}`,wu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ru=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Cu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Pu=`uniform bool receiveShadow;
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
#endif`,Du=`#ifdef USE_ENVMAP
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
#endif`,Lu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Iu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Uu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Nu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ou=`PhysicalMaterial material;
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
#endif`,Fu=`struct PhysicalMaterial {
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
}`,Bu=`
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
#endif`,Gu=`#if defined( RE_IndirectDiffuse )
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
#endif`,ku=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Hu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Xu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Yu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ku=`#if defined( USE_POINTS_UV )
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
#endif`,ju=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$u=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Zu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ju=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Qu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ed=`#ifdef USE_MORPHTARGETS
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
#endif`,td=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,id=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,sd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ad=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,od=`#ifdef USE_NORMALMAP
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
#endif`,ld=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,cd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ud=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,dd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,pd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,md=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_d=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Sd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ed=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Md=`float getShadowMask() {
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
}`,bd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Td=`#ifdef USE_SKINNING
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
#endif`,Ad=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wd=`#ifdef USE_SKINNING
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
#endif`,Rd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Cd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Pd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Dd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ld=`#ifdef USE_TRANSMISSION
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
#endif`,Id=`#ifdef USE_TRANSMISSION
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
#endif`,Ud=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Od=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Bd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Gd=`uniform sampler2D t2D;
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
}`,kd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,zd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wd=`#include <common>
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
}`,Xd=`#if DEPTH_PACKING == 3200
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
}`,qd=`#define DISTANCE
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
}`,Yd=`#define DISTANCE
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
}`,Kd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,jd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$d=`uniform float scale;
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
}`,Zd=`uniform vec3 diffuse;
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
}`,Jd=`#include <common>
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
}`,Qd=`uniform vec3 diffuse;
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
}`,ef=`#define LAMBERT
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
}`,tf=`#define LAMBERT
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
}`,nf=`#define MATCAP
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
}`,sf=`#define MATCAP
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
}`,rf=`#define NORMAL
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
}`,af=`#define NORMAL
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
}`,of=`#define PHONG
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
}`,lf=`#define PHONG
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
}`,cf=`#define STANDARD
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
}`,hf=`#define STANDARD
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
}`,uf=`#define TOON
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
}`,df=`#define TOON
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
}`,ff=`uniform float size;
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
}`,pf=`uniform vec3 diffuse;
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
}`,mf=`#include <common>
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
}`,gf=`uniform vec3 color;
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
}`,_f=`uniform float rotation;
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
}`,vf=`uniform vec3 diffuse;
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
}`,Be={alphahash_fragment:Gh,alphahash_pars_fragment:kh,alphamap_fragment:Hh,alphamap_pars_fragment:zh,alphatest_fragment:Vh,alphatest_pars_fragment:Wh,aomap_fragment:Xh,aomap_pars_fragment:qh,batching_pars_vertex:Yh,batching_vertex:Kh,begin_vertex:jh,beginnormal_vertex:$h,bsdfs:Zh,iridescence_fragment:Jh,bumpmap_pars_fragment:Qh,clipping_planes_fragment:eu,clipping_planes_pars_fragment:tu,clipping_planes_pars_vertex:nu,clipping_planes_vertex:iu,color_fragment:su,color_pars_fragment:ru,color_pars_vertex:au,color_vertex:ou,common:lu,cube_uv_reflection_fragment:cu,defaultnormal_vertex:hu,displacementmap_pars_vertex:uu,displacementmap_vertex:du,emissivemap_fragment:fu,emissivemap_pars_fragment:pu,colorspace_fragment:mu,colorspace_pars_fragment:gu,envmap_fragment:_u,envmap_common_pars_fragment:vu,envmap_pars_fragment:Su,envmap_pars_vertex:xu,envmap_physical_pars_fragment:Du,envmap_vertex:Eu,fog_vertex:yu,fog_pars_vertex:Mu,fog_fragment:bu,fog_pars_fragment:Tu,gradientmap_pars_fragment:Au,lightmap_pars_fragment:wu,lights_lambert_fragment:Ru,lights_lambert_pars_fragment:Cu,lights_pars_begin:Pu,lights_toon_fragment:Lu,lights_toon_pars_fragment:Iu,lights_phong_fragment:Uu,lights_phong_pars_fragment:Nu,lights_physical_fragment:Ou,lights_physical_pars_fragment:Fu,lights_fragment_begin:Bu,lights_fragment_maps:Gu,lights_fragment_end:ku,logdepthbuf_fragment:Hu,logdepthbuf_pars_fragment:zu,logdepthbuf_pars_vertex:Vu,logdepthbuf_vertex:Wu,map_fragment:Xu,map_pars_fragment:qu,map_particle_fragment:Yu,map_particle_pars_fragment:Ku,metalnessmap_fragment:ju,metalnessmap_pars_fragment:$u,morphinstance_vertex:Zu,morphcolor_vertex:Ju,morphnormal_vertex:Qu,morphtarget_pars_vertex:ed,morphtarget_vertex:td,normal_fragment_begin:nd,normal_fragment_maps:id,normal_pars_fragment:sd,normal_pars_vertex:rd,normal_vertex:ad,normalmap_pars_fragment:od,clearcoat_normal_fragment_begin:ld,clearcoat_normal_fragment_maps:cd,clearcoat_pars_fragment:hd,iridescence_pars_fragment:ud,opaque_fragment:dd,packing:fd,premultiplied_alpha_fragment:pd,project_vertex:md,dithering_fragment:gd,dithering_pars_fragment:_d,roughnessmap_fragment:vd,roughnessmap_pars_fragment:Sd,shadowmap_pars_fragment:xd,shadowmap_pars_vertex:Ed,shadowmap_vertex:yd,shadowmask_pars_fragment:Md,skinbase_vertex:bd,skinning_pars_vertex:Td,skinning_vertex:Ad,skinnormal_vertex:wd,specularmap_fragment:Rd,specularmap_pars_fragment:Cd,tonemapping_fragment:Pd,tonemapping_pars_fragment:Dd,transmission_fragment:Ld,transmission_pars_fragment:Id,uv_pars_fragment:Ud,uv_pars_vertex:Nd,uv_vertex:Od,worldpos_vertex:Fd,background_vert:Bd,background_frag:Gd,backgroundCube_vert:kd,backgroundCube_frag:Hd,cube_vert:zd,cube_frag:Vd,depth_vert:Wd,depth_frag:Xd,distanceRGBA_vert:qd,distanceRGBA_frag:Yd,equirect_vert:Kd,equirect_frag:jd,linedashed_vert:$d,linedashed_frag:Zd,meshbasic_vert:Jd,meshbasic_frag:Qd,meshlambert_vert:ef,meshlambert_frag:tf,meshmatcap_vert:nf,meshmatcap_frag:sf,meshnormal_vert:rf,meshnormal_frag:af,meshphong_vert:of,meshphong_frag:lf,meshphysical_vert:cf,meshphysical_frag:hf,meshtoon_vert:uf,meshtoon_frag:df,points_vert:ff,points_frag:pf,shadow_vert:mf,shadow_frag:gf,sprite_vert:_f,sprite_frag:vf},re={common:{diffuse:{value:new Le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new Pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new Le(16777215)},opacity:{value:1},center:{value:new Pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},jt={basic:{uniforms:bt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:bt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Le(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:bt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Le(0)},specular:{value:new Le(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:bt([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new Le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:bt([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new Le(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:bt([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:bt([re.points,re.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:bt([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:bt([re.common,re.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:bt([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:bt([re.sprite,re.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:bt([re.common,re.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:bt([re.lights,re.fog,{color:{value:new Le(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};jt.physical={uniforms:bt([jt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new Pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new Le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new Pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new Le(0)},specularColor:{value:new Le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new Pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const gs={r:0,b:0,g:0},Fn=new en,Sf=new at;function xf(s,e,t,n,i,r,a){const o=new Le(0);let l=r===!0?0:1,c,h,d=null,p=0,f=null;function g(T){let y=T.isScene===!0?T.background:null;return y&&y.isTexture&&(y=(T.backgroundBlurriness>0?t:e).get(y)),y}function v(T){let y=!1;const C=g(T);C===null?u(o,l):C&&C.isColor&&(u(C,1),y=!0);const w=s.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(T,y){const C=g(y);C&&(C.isCubeTexture||C.mapping===Os)?(h===void 0&&(h=new ke(new Gt(1,1,1),new mn({name:"BackgroundCubeMaterial",uniforms:xi(jt.backgroundCube.uniforms),vertexShader:jt.backgroundCube.vertexShader,fragmentShader:jt.backgroundCube.fragmentShader,side:Ct,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,R,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Fn.copy(y.backgroundRotation),Fn.x*=-1,Fn.y*=-1,Fn.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Fn.y*=-1,Fn.z*=-1),h.material.uniforms.envMap.value=C,h.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Sf.makeRotationFromEuler(Fn)),h.material.toneMapped=Xe.getTransfer(C.colorSpace)!==je,(d!==C||p!==C.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,d=C,p=C.version,f=s.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new ke(new zi(2,2),new mn({name:"BackgroundMaterial",uniforms:xi(jt.background.uniforms),vertexShader:jt.background.vertexShader,fragmentShader:jt.background.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=Xe.getTransfer(C.colorSpace)!==je,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(d!==C||p!==C.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,d=C,p=C.version,f=s.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function u(T,y){T.getRGB(gs,Tl(s)),n.buffers.color.setClear(gs.r,gs.g,gs.b,y,a)}function b(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(T,y=1){o.set(T),l=y,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,u(o,l)},render:v,addToRenderList:m,dispose:b}}function Ef(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=p(null);let r=i,a=!1;function o(x,P,O,k,q){let V=!1;const X=d(k,O,P);r!==X&&(r=X,c(r.object)),V=f(x,k,O,q),V&&g(x,k,O,q),q!==null&&e.update(q,s.ELEMENT_ARRAY_BUFFER),(V||a)&&(a=!1,y(x,P,O,k),q!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function l(){return s.createVertexArray()}function c(x){return s.bindVertexArray(x)}function h(x){return s.deleteVertexArray(x)}function d(x,P,O){const k=O.wireframe===!0;let q=n[x.id];q===void 0&&(q={},n[x.id]=q);let V=q[P.id];V===void 0&&(V={},q[P.id]=V);let X=V[k];return X===void 0&&(X=p(l()),V[k]=X),X}function p(x){const P=[],O=[],k=[];for(let q=0;q<t;q++)P[q]=0,O[q]=0,k[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:O,attributeDivisors:k,object:x,attributes:{},index:null}}function f(x,P,O,k){const q=r.attributes,V=P.attributes;let X=0;const j=O.getAttributes();for(const H in j)if(j[H].location>=0){const ce=q[H];let Ee=V[H];if(Ee===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(Ee=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(Ee=x.instanceColor)),ce===void 0||ce.attribute!==Ee||Ee&&ce.data!==Ee.data)return!0;X++}return r.attributesNum!==X||r.index!==k}function g(x,P,O,k){const q={},V=P.attributes;let X=0;const j=O.getAttributes();for(const H in j)if(j[H].location>=0){let ce=V[H];ce===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(ce=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(ce=x.instanceColor));const Ee={};Ee.attribute=ce,ce&&ce.data&&(Ee.data=ce.data),q[H]=Ee,X++}r.attributes=q,r.attributesNum=X,r.index=k}function v(){const x=r.newAttributes;for(let P=0,O=x.length;P<O;P++)x[P]=0}function m(x){u(x,0)}function u(x,P){const O=r.newAttributes,k=r.enabledAttributes,q=r.attributeDivisors;O[x]=1,k[x]===0&&(s.enableVertexAttribArray(x),k[x]=1),q[x]!==P&&(s.vertexAttribDivisor(x,P),q[x]=P)}function b(){const x=r.newAttributes,P=r.enabledAttributes;for(let O=0,k=P.length;O<k;O++)P[O]!==x[O]&&(s.disableVertexAttribArray(O),P[O]=0)}function T(x,P,O,k,q,V,X){X===!0?s.vertexAttribIPointer(x,P,O,q,V):s.vertexAttribPointer(x,P,O,k,q,V)}function y(x,P,O,k){v();const q=k.attributes,V=O.getAttributes(),X=P.defaultAttributeValues;for(const j in V){const H=V[j];if(H.location>=0){let se=q[j];if(se===void 0&&(j==="instanceMatrix"&&x.instanceMatrix&&(se=x.instanceMatrix),j==="instanceColor"&&x.instanceColor&&(se=x.instanceColor)),se!==void 0){const ce=se.normalized,Ee=se.itemSize,Ge=e.get(se);if(Ge===void 0)continue;const Ze=Ge.buffer,Qe=Ge.type,Ie=Ge.bytesPerElement,Y=Qe===s.INT||Qe===s.UNSIGNED_INT||se.gpuType===Ra;if(se.isInterleavedBufferAttribute){const Z=se.data,de=Z.stride,Ce=se.offset;if(Z.isInstancedInterleavedBuffer){for(let ye=0;ye<H.locationSize;ye++)u(H.location+ye,Z.meshPerAttribute);x.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let ye=0;ye<H.locationSize;ye++)m(H.location+ye);s.bindBuffer(s.ARRAY_BUFFER,Ze);for(let ye=0;ye<H.locationSize;ye++)T(H.location+ye,Ee/H.locationSize,Qe,ce,de*Ie,(Ce+Ee/H.locationSize*ye)*Ie,Y)}else{if(se.isInstancedBufferAttribute){for(let Z=0;Z<H.locationSize;Z++)u(H.location+Z,se.meshPerAttribute);x.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Z=0;Z<H.locationSize;Z++)m(H.location+Z);s.bindBuffer(s.ARRAY_BUFFER,Ze);for(let Z=0;Z<H.locationSize;Z++)T(H.location+Z,Ee/H.locationSize,Qe,ce,Ee*Ie,Ee/H.locationSize*Z*Ie,Y)}}else if(X!==void 0){const ce=X[j];if(ce!==void 0)switch(ce.length){case 2:s.vertexAttrib2fv(H.location,ce);break;case 3:s.vertexAttrib3fv(H.location,ce);break;case 4:s.vertexAttrib4fv(H.location,ce);break;default:s.vertexAttrib1fv(H.location,ce)}}}}b()}function C(){L();for(const x in n){const P=n[x];for(const O in P){const k=P[O];for(const q in k)h(k[q].object),delete k[q];delete P[O]}delete n[x]}}function w(x){if(n[x.id]===void 0)return;const P=n[x.id];for(const O in P){const k=P[O];for(const q in k)h(k[q].object),delete k[q];delete P[O]}delete n[x.id]}function R(x){for(const P in n){const O=n[P];if(O[x.id]===void 0)continue;const k=O[x.id];for(const q in k)h(k[q].object),delete k[q];delete O[x.id]}}function L(){E(),a=!0,r!==i&&(r=i,c(r.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:L,resetDefaultState:E,dispose:C,releaseStatesOfGeometry:w,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:m,disableUnusedAttributes:b}}function yf(s,e,t){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,d){d!==0&&(s.drawArraysInstanced(n,c,h,d),t.update(h,n,d))}function o(c,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let f=0;for(let g=0;g<d;g++)f+=h[g];t.update(f,n,1)}function l(c,h,d,p){if(d===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],h[g],p[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,p,0,d);let g=0;for(let v=0;v<d;v++)g+=h[v]*p[v];t.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Mf(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(R){return!(R!==Ht&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const L=R===Gi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Yt&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==dn&&!L)}function l(R){if(R==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=t.logarithmicDepthBuffer===!0,p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),u=s.getParameter(s.MAX_VERTEX_ATTRIBS),b=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),T=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,w=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:p,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:b,maxVaryings:T,maxFragmentUniforms:y,vertexTextures:C,maxSamples:w}}function bf(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new Gn,o=new Oe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,p){const f=d.length!==0||p||n!==0||i;return i=p,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,p){t=h(d,p,0)},this.setState=function(d,p,f){const g=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,u=s.get(d);if(!i||g===null||g.length===0||r&&!m)r?h(null):c();else{const b=r?0:n,T=b*4;let y=u.clippingState||null;l.value=y,y=h(g,p,T,f);for(let C=0;C!==T;++C)y[C]=t[C];u.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,p,f,g){const v=d!==null?d.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const u=f+v*4,b=p.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<u)&&(m=new Float32Array(u));for(let T=0,y=f;T!==v;++T,y+=4)a.copy(d[T]).applyMatrix4(b,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function Tf(s){let e=new WeakMap;function t(a,o){return o===Hr?a.mapping=_i:o===zr&&(a.mapping=vi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Hr||o===zr)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Eh(l.height);return c.fromEquirectangularTexture(s,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const fi=4,Mo=[.125,.215,.35,.446,.526,.582],zn=20,gr=new Us,bo=new Le;let _r=null,vr=0,Sr=0,xr=!1;const kn=(1+Math.sqrt(5))/2,di=1/kn,To=[new I(-kn,di,0),new I(kn,di,0),new I(-di,0,kn),new I(di,0,kn),new I(0,kn,-di),new I(0,kn,di),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],Af=new I;class Ao{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,r={}){const{size:a=256,position:o=Af}=r;_r=this._renderer.getRenderTarget(),vr=this._renderer.getActiveCubeFace(),Sr=this._renderer.getActiveMipmapLevel(),xr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Co(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ro(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(_r,vr,Sr),this._renderer.xr.enabled=xr,e.scissorTest=!1,_s(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===_i||e.mapping===vi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_r=this._renderer.getRenderTarget(),vr=this._renderer.getActiveCubeFace(),Sr=this._renderer.getActiveMipmapLevel(),xr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Jt,minFilter:Jt,generateMipmaps:!1,type:Gi,format:Ht,colorSpace:Si,depthBuffer:!1},i=wo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wo(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=wf(r)),this._blurMaterial=Rf(r,e,t)}return i}_compileMaterial(e){const t=new ke(this._lodPlanes[0],e);this._renderer.compile(t,gr)}_sceneToCubeUV(e,t,n,i,r){const l=new qt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,p=d.autoClear,f=d.toneMapping;d.getClearColor(bo),d.toneMapping=wn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null));const v=new yl({name:"PMREM.Background",side:Ct,depthWrite:!1,depthTest:!1}),m=new ke(new Gt,v);let u=!1;const b=e.background;b?b.isColor&&(v.color.copy(b),e.background=null,u=!0):(v.color.copy(bo),u=!0);for(let T=0;T<6;T++){const y=T%3;y===0?(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[T],r.y,r.z)):y===1?(l.up.set(0,0,c[T]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[T],r.z)):(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[T]));const C=this._cubeSize;_s(i,y*C,T>2?C:0,C,C),d.setRenderTarget(i),u&&d.render(m,l),d.render(e,l)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=f,d.autoClear=p,e.background=b}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===_i||e.mapping===vi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Co()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ro());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new ke(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;_s(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,gr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=To[(i-r-1)%To.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new ke(this._lodPlanes[i],c),p=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*zn-1),v=r/g,m=isFinite(r)?1+Math.floor(h*v):zn;m>zn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${zn}`);const u=[];let b=0;for(let R=0;R<zn;++R){const L=R/v,E=Math.exp(-L*L/2);u.push(E),R===0?b+=E:R<m&&(b+=2*E)}for(let R=0;R<u.length;R++)u[R]=u[R]/b;p.envMap.value=e.texture,p.samples.value=m,p.weights.value=u,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);const{_lodMax:T}=this;p.dTheta.value=g,p.mipInt.value=T-n;const y=this._sizeLods[i],C=3*y*(i>T-fi?i-T+fi:0),w=4*(this._cubeSize-y);_s(t,C,w,3*y,2*y),l.setRenderTarget(t),l.render(d,gr)}}function wf(s){const e=[],t=[],n=[];let i=s;const r=s-fi+1+Mo.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>s-fi?l=Mo[a-s+fi-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,d=1+c,p=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,v=3,m=2,u=1,b=new Float32Array(v*g*f),T=new Float32Array(m*g*f),y=new Float32Array(u*g*f);for(let w=0;w<f;w++){const R=w%3*2/3-1,L=w>2?0:-1,E=[R,L,0,R+2/3,L,0,R+2/3,L+1,0,R,L,0,R+2/3,L+1,0,R,L+1,0];b.set(E,v*g*w),T.set(p,m*g*w);const x=[w,w,w,w,w,w];y.set(x,u*g*w)}const C=new Pt;C.setAttribute("position",new zt(b,v)),C.setAttribute("uv",new zt(T,m)),C.setAttribute("faceIndex",new zt(y,u)),e.push(C),i>fi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function wo(s,e,t){const n=new pn(s,e,t);return n.texture.mapping=Os,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function _s(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Rf(s,e,t){const n=new Float32Array(zn),i=new I(0,1,0);return new mn({name:"SphericalGaussianBlur",defines:{n:zn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ba(),fragmentShader:`

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
		`,blending:An,depthTest:!1,depthWrite:!1})}function Ro(){return new mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ba(),fragmentShader:`

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
		`,blending:An,depthTest:!1,depthWrite:!1})}function Co(){return new mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ba(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:An,depthTest:!1,depthWrite:!1})}function Ba(){return`

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
	`}function Cf(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Hr||l===zr,h=l===_i||l===vi;if(c||h){let d=e.get(o);const p=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==p)return t===null&&(t=new Ao(s)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const f=o.image;return c&&f&&f.height>0||h&&f&&i(f)?(t===null&&(t=new Ao(s)),d=c?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Pf(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Fi("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Df(s,e,t,n){const i={},r=new WeakMap;function a(d){const p=d.target;p.index!==null&&e.remove(p.index);for(const g in p.attributes)e.remove(p.attributes[g]);p.removeEventListener("dispose",a),delete i[p.id];const f=r.get(p);f&&(e.remove(f),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function o(d,p){return i[p.id]===!0||(p.addEventListener("dispose",a),i[p.id]=!0,t.memory.geometries++),p}function l(d){const p=d.attributes;for(const f in p)e.update(p[f],s.ARRAY_BUFFER)}function c(d){const p=[],f=d.index,g=d.attributes.position;let v=0;if(f!==null){const b=f.array;v=f.version;for(let T=0,y=b.length;T<y;T+=3){const C=b[T+0],w=b[T+1],R=b[T+2];p.push(C,w,w,R,R,C)}}else if(g!==void 0){const b=g.array;v=g.version;for(let T=0,y=b.length/3-1;T<y;T+=3){const C=T+0,w=T+1,R=T+2;p.push(C,w,w,R,R,C)}}else return;const m=new(_l(p)?bl:Ml)(p,1);m.version=v;const u=r.get(d);u&&e.remove(u),r.set(d,m)}function h(d){const p=r.get(d);if(p){const f=d.index;f!==null&&p.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function Lf(s,e,t){let n;function i(p){n=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function l(p,f){s.drawElements(n,f,r,p*a),t.update(f,n,1)}function c(p,f,g){g!==0&&(s.drawElementsInstanced(n,f,r,p*a,g),t.update(f,n,g))}function h(p,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,p,0,g);let m=0;for(let u=0;u<g;u++)m+=f[u];t.update(m,n,1)}function d(p,f,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<p.length;u++)c(p[u]/a,f[u],v[u]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,p,0,v,0,g);let u=0;for(let b=0;b<g;b++)u+=f[b]*v[b];t.update(u,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function If(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Uf(s,e,t){const n=new WeakMap,i=new lt;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let p=n.get(o);if(p===void 0||p.count!==d){let x=function(){L.dispose(),n.delete(o),o.removeEventListener("dispose",x)};var f=x;p!==void 0&&p.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],b=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let y=0;g===!0&&(y=1),v===!0&&(y=2),m===!0&&(y=3);let C=o.attributes.position.count*y,w=1;C>e.maxTextureSize&&(w=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const R=new Float32Array(C*w*4*d),L=new vl(R,C,w,d);L.type=dn,L.needsUpdate=!0;const E=y*4;for(let P=0;P<d;P++){const O=u[P],k=b[P],q=T[P],V=C*w*4*P;for(let X=0;X<O.count;X++){const j=X*E;g===!0&&(i.fromBufferAttribute(O,X),R[V+j+0]=i.x,R[V+j+1]=i.y,R[V+j+2]=i.z,R[V+j+3]=0),v===!0&&(i.fromBufferAttribute(k,X),R[V+j+4]=i.x,R[V+j+5]=i.y,R[V+j+6]=i.z,R[V+j+7]=0),m===!0&&(i.fromBufferAttribute(q,X),R[V+j+8]=i.x,R[V+j+9]=i.y,R[V+j+10]=i.z,R[V+j+11]=q.itemSize===4?i.w:1)}}p={count:d,texture:L,size:new Pe(C,w)},n.set(o,p),o.addEventListener("dispose",x)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",v),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",p.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",p.size)}return{update:r}}function Nf(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,d=e.get(l,h);if(i.get(d)!==c&&(e.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const p=l.skeleton;i.get(p)!==c&&(p.update(),i.set(p,c))}return d}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const Ul=new At,Po=new Pl(1,1),Nl=new vl,Ol=new sh,Fl=new wl,Do=[],Lo=[],Io=new Float32Array(16),Uo=new Float32Array(9),No=new Float32Array(4);function Mi(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Do[i];if(r===void 0&&(r=new Float32Array(i),Do[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function pt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function mt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Bs(s,e){let t=Lo[e];t===void 0&&(t=new Int32Array(e),Lo[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Of(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Ff(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;s.uniform2fv(this.addr,e),mt(t,e)}}function Bf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(pt(t,e))return;s.uniform3fv(this.addr,e),mt(t,e)}}function Gf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;s.uniform4fv(this.addr,e),mt(t,e)}}function kf(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(pt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,n))return;No.set(n),s.uniformMatrix2fv(this.addr,!1,No),mt(t,n)}}function Hf(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(pt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,n))return;Uo.set(n),s.uniformMatrix3fv(this.addr,!1,Uo),mt(t,n)}}function zf(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(pt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,n))return;Io.set(n),s.uniformMatrix4fv(this.addr,!1,Io),mt(t,n)}}function Vf(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Wf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;s.uniform2iv(this.addr,e),mt(t,e)}}function Xf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pt(t,e))return;s.uniform3iv(this.addr,e),mt(t,e)}}function qf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;s.uniform4iv(this.addr,e),mt(t,e)}}function Yf(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Kf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;s.uniform2uiv(this.addr,e),mt(t,e)}}function jf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pt(t,e))return;s.uniform3uiv(this.addr,e),mt(t,e)}}function $f(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;s.uniform4uiv(this.addr,e),mt(t,e)}}function Zf(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Po.compareFunction=gl,r=Po):r=Ul,t.setTexture2D(e||r,i)}function Jf(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Ol,i)}function Qf(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Fl,i)}function ep(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Nl,i)}function tp(s){switch(s){case 5126:return Of;case 35664:return Ff;case 35665:return Bf;case 35666:return Gf;case 35674:return kf;case 35675:return Hf;case 35676:return zf;case 5124:case 35670:return Vf;case 35667:case 35671:return Wf;case 35668:case 35672:return Xf;case 35669:case 35673:return qf;case 5125:return Yf;case 36294:return Kf;case 36295:return jf;case 36296:return $f;case 35678:case 36198:case 36298:case 36306:case 35682:return Zf;case 35679:case 36299:case 36307:return Jf;case 35680:case 36300:case 36308:case 36293:return Qf;case 36289:case 36303:case 36311:case 36292:return ep}}function np(s,e){s.uniform1fv(this.addr,e)}function ip(s,e){const t=Mi(e,this.size,2);s.uniform2fv(this.addr,t)}function sp(s,e){const t=Mi(e,this.size,3);s.uniform3fv(this.addr,t)}function rp(s,e){const t=Mi(e,this.size,4);s.uniform4fv(this.addr,t)}function ap(s,e){const t=Mi(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function op(s,e){const t=Mi(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function lp(s,e){const t=Mi(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function cp(s,e){s.uniform1iv(this.addr,e)}function hp(s,e){s.uniform2iv(this.addr,e)}function up(s,e){s.uniform3iv(this.addr,e)}function dp(s,e){s.uniform4iv(this.addr,e)}function fp(s,e){s.uniform1uiv(this.addr,e)}function pp(s,e){s.uniform2uiv(this.addr,e)}function mp(s,e){s.uniform3uiv(this.addr,e)}function gp(s,e){s.uniform4uiv(this.addr,e)}function _p(s,e,t){const n=this.cache,i=e.length,r=Bs(t,i);pt(n,r)||(s.uniform1iv(this.addr,r),mt(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Ul,r[a])}function vp(s,e,t){const n=this.cache,i=e.length,r=Bs(t,i);pt(n,r)||(s.uniform1iv(this.addr,r),mt(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Ol,r[a])}function Sp(s,e,t){const n=this.cache,i=e.length,r=Bs(t,i);pt(n,r)||(s.uniform1iv(this.addr,r),mt(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Fl,r[a])}function xp(s,e,t){const n=this.cache,i=e.length,r=Bs(t,i);pt(n,r)||(s.uniform1iv(this.addr,r),mt(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Nl,r[a])}function Ep(s){switch(s){case 5126:return np;case 35664:return ip;case 35665:return sp;case 35666:return rp;case 35674:return ap;case 35675:return op;case 35676:return lp;case 5124:case 35670:return cp;case 35667:case 35671:return hp;case 35668:case 35672:return up;case 35669:case 35673:return dp;case 5125:return fp;case 36294:return pp;case 36295:return mp;case 36296:return gp;case 35678:case 36198:case 36298:case 36306:case 35682:return _p;case 35679:case 36299:case 36307:return vp;case 35680:case 36300:case 36308:case 36293:return Sp;case 36289:case 36303:case 36311:case 36292:return xp}}class yp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=tp(t.type)}}class Mp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ep(t.type)}}class bp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const Er=/(\w+)(\])?(\[|\.)?/g;function Oo(s,e){s.seq.push(e),s.map[e.id]=e}function Tp(s,e,t){const n=s.name,i=n.length;for(Er.lastIndex=0;;){const r=Er.exec(n),a=Er.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Oo(t,c===void 0?new yp(o,s,e):new Mp(o,s,e));break}else{let d=t.map[o];d===void 0&&(d=new bp(o),Oo(t,d)),t=d}}}class bs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);Tp(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Fo(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const Ap=37297;let wp=0;function Rp(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Bo=new Oe;function Cp(s){Xe._getMatrix(Bo,Xe.workingColorSpace,s);const e=`mat3( ${Bo.elements.map(t=>t.toFixed(4))} )`;switch(Xe.getTransfer(s)){case Ts:return[e,"LinearTransferOETF"];case je:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Go(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Rp(s.getShaderSource(e),o)}else return r}function Pp(s,e){const t=Cp(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Dp(s,e){let t;switch(e){case Lc:t="Linear";break;case Ic:t="Reinhard";break;case Uc:t="Cineon";break;case Nc:t="ACESFilmic";break;case Fc:t="AgX";break;case Bc:t="Neutral";break;case Oc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const vs=new I;function Lp(){Xe.getLuminanceCoefficients(vs);const s=vs.x.toFixed(4),e=vs.y.toFixed(4),t=vs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ip(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Li).join(`
`)}function Up(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Np(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Li(s){return s!==""}function ko(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ho(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Op=/^[ \t]*#include +<([\w\d./]+)>/gm;function ya(s){return s.replace(Op,Bp)}const Fp=new Map;function Bp(s,e){let t=Be[e];if(t===void 0){const n=Fp.get(e);if(n!==void 0)t=Be[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ya(t)}const Gp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zo(s){return s.replace(Gp,kp)}function kp(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Vo(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Hp(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===rl?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===uc?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===cn&&(e="SHADOWMAP_TYPE_VSM"),e}function zp(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case _i:case vi:e="ENVMAP_TYPE_CUBE";break;case Os:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Vp(s){let e="ENVMAP_MODE_REFLECTION";return s.envMap&&s.envMapMode===vi&&(e="ENVMAP_MODE_REFRACTION"),e}function Wp(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case wa:e="ENVMAP_BLENDING_MULTIPLY";break;case Pc:e="ENVMAP_BLENDING_MIX";break;case Dc:e="ENVMAP_BLENDING_ADD";break}return e}function Xp(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function qp(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Hp(t),c=zp(t),h=Vp(t),d=Wp(t),p=Xp(t),f=Ip(t),g=Up(r),v=i.createProgram();let m,u,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Li).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Li).join(`
`),u.length>0&&(u+=`
`)):(m=[Vo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Li).join(`
`),u=[Vo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==wn?"#define TONE_MAPPING":"",t.toneMapping!==wn?Be.tonemapping_pars_fragment:"",t.toneMapping!==wn?Dp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,Pp("linearToOutputTexel",t.outputColorSpace),Lp(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Li).join(`
`)),a=ya(a),a=ko(a,t),a=Ho(a,t),o=ya(o),o=ko(o,t),o=Ho(o,t),a=zo(a),o=zo(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",t.glslVersion===$a?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===$a?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const T=b+m+a,y=b+u+o,C=Fo(i,i.VERTEX_SHADER,T),w=Fo(i,i.FRAGMENT_SHADER,y);i.attachShader(v,C),i.attachShader(v,w),t.index0AttributeName!==void 0?i.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function R(P){if(s.debug.checkShaderErrors){const O=i.getProgramInfoLog(v)||"",k=i.getShaderInfoLog(C)||"",q=i.getShaderInfoLog(w)||"",V=O.trim(),X=k.trim(),j=q.trim();let H=!0,se=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(H=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,v,C,w);else{const ce=Go(i,C,"vertex"),Ee=Go(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+V+`
`+ce+`
`+Ee)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(X===""||j==="")&&(se=!1);se&&(P.diagnostics={runnable:H,programLog:V,vertexShader:{log:X,prefix:m},fragmentShader:{log:j,prefix:u}})}i.deleteShader(C),i.deleteShader(w),L=new bs(i,v),E=Np(i,v)}let L;this.getUniforms=function(){return L===void 0&&R(this),L};let E;this.getAttributes=function(){return E===void 0&&R(this),E};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=i.getProgramParameter(v,Ap)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=wp++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=C,this.fragmentShader=w,this}let Yp=0;class Kp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new jp(e),t.set(e,n)),n}}class jp{constructor(e){this.id=Yp++,this.code=e,this.usedTimes=0}}function $p(s,e,t,n,i,r,a){const o=new xl,l=new Kp,c=new Set,h=[],d=i.logarithmicDepthBuffer,p=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,x,P,O,k){const q=O.fog,V=k.geometry,X=E.isMeshStandardMaterial?O.environment:null,j=(E.isMeshStandardMaterial?t:e).get(E.envMap||X),H=j&&j.mapping===Os?j.image.height:null,se=g[E.type];E.precision!==null&&(f=i.getMaxPrecision(E.precision),f!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));const ce=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Ee=ce!==void 0?ce.length:0;let Ge=0;V.morphAttributes.position!==void 0&&(Ge=1),V.morphAttributes.normal!==void 0&&(Ge=2),V.morphAttributes.color!==void 0&&(Ge=3);let Ze,Qe,Ie,Y;if(se){const qe=jt[se];Ze=qe.vertexShader,Qe=qe.fragmentShader}else Ze=E.vertexShader,Qe=E.fragmentShader,l.update(E),Ie=l.getVertexShaderID(E),Y=l.getFragmentShaderID(E);const Z=s.getRenderTarget(),de=s.state.buffers.depth.getReversed(),Ce=k.isInstancedMesh===!0,ye=k.isBatchedMesh===!0,Ve=!!E.map,St=!!E.matcap,A=!!j,nt=!!E.aoMap,Ue=!!E.lightMap,we=!!E.bumpMap,me=!!E.normalMap,it=!!E.displacementMap,ge=!!E.emissiveMap,Fe=!!E.metalnessMap,gt=!!E.roughnessMap,ct=E.anisotropy>0,M=E.clearcoat>0,_=E.dispersion>0,F=E.iridescence>0,W=E.sheen>0,$=E.transmission>0,z=ct&&!!E.anisotropyMap,xe=M&&!!E.clearcoatMap,ne=M&&!!E.clearcoatNormalMap,_e=M&&!!E.clearcoatRoughnessMap,ve=F&&!!E.iridescenceMap,ee=F&&!!E.iridescenceThicknessMap,le=W&&!!E.sheenColorMap,Ae=W&&!!E.sheenRoughnessMap,Se=!!E.specularMap,ae=!!E.specularColorMap,Ne=!!E.specularIntensityMap,D=$&&!!E.transmissionMap,te=$&&!!E.thicknessMap,ie=!!E.gradientMap,ue=!!E.alphaMap,J=E.alphaTest>0,K=!!E.alphaHash,pe=!!E.extensions;let De=wn;E.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(De=s.toneMapping);const et={shaderID:se,shaderType:E.type,shaderName:E.name,vertexShader:Ze,fragmentShader:Qe,defines:E.defines,customVertexShaderID:Ie,customFragmentShaderID:Y,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,batching:ye,batchingColor:ye&&k._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&k.instanceColor!==null,instancingMorph:Ce&&k.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:Z===null?s.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Si,alphaToCoverage:!!E.alphaToCoverage,map:Ve,matcap:St,envMap:A,envMapMode:A&&j.mapping,envMapCubeUVHeight:H,aoMap:nt,lightMap:Ue,bumpMap:we,normalMap:me,displacementMap:p&&it,emissiveMap:ge,normalMapObjectSpace:me&&E.normalMapType===zc,normalMapTangentSpace:me&&E.normalMapType===ml,metalnessMap:Fe,roughnessMap:gt,anisotropy:ct,anisotropyMap:z,clearcoat:M,clearcoatMap:xe,clearcoatNormalMap:ne,clearcoatRoughnessMap:_e,dispersion:_,iridescence:F,iridescenceMap:ve,iridescenceThicknessMap:ee,sheen:W,sheenColorMap:le,sheenRoughnessMap:Ae,specularMap:Se,specularColorMap:ae,specularIntensityMap:Ne,transmission:$,transmissionMap:D,thicknessMap:te,gradientMap:ie,opaque:E.transparent===!1&&E.blending===pi&&E.alphaToCoverage===!1,alphaMap:ue,alphaTest:J,alphaHash:K,combine:E.combine,mapUv:Ve&&v(E.map.channel),aoMapUv:nt&&v(E.aoMap.channel),lightMapUv:Ue&&v(E.lightMap.channel),bumpMapUv:we&&v(E.bumpMap.channel),normalMapUv:me&&v(E.normalMap.channel),displacementMapUv:it&&v(E.displacementMap.channel),emissiveMapUv:ge&&v(E.emissiveMap.channel),metalnessMapUv:Fe&&v(E.metalnessMap.channel),roughnessMapUv:gt&&v(E.roughnessMap.channel),anisotropyMapUv:z&&v(E.anisotropyMap.channel),clearcoatMapUv:xe&&v(E.clearcoatMap.channel),clearcoatNormalMapUv:ne&&v(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&v(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&v(E.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&v(E.iridescenceThicknessMap.channel),sheenColorMapUv:le&&v(E.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&v(E.sheenRoughnessMap.channel),specularMapUv:Se&&v(E.specularMap.channel),specularColorMapUv:ae&&v(E.specularColorMap.channel),specularIntensityMapUv:Ne&&v(E.specularIntensityMap.channel),transmissionMapUv:D&&v(E.transmissionMap.channel),thicknessMapUv:te&&v(E.thicknessMap.channel),alphaMapUv:ue&&v(E.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(me||ct),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!V.attributes.uv&&(Ve||ue),fog:!!q,useFog:E.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:de,skinning:k.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:Ee,morphTextureStride:Ge,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:De,decodeVideoTexture:Ve&&E.map.isVideoTexture===!0&&Xe.getTransfer(E.map.colorSpace)===je,decodeVideoTextureEmissive:ge&&E.emissiveMap.isVideoTexture===!0&&Xe.getTransfer(E.emissiveMap.colorSpace)===je,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===$t,flipSided:E.side===Ct,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:pe&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pe&&E.extensions.multiDraw===!0||ye)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return et.vertexUv1s=c.has(1),et.vertexUv2s=c.has(2),et.vertexUv3s=c.has(3),c.clear(),et}function u(E){const x=[];if(E.shaderID?x.push(E.shaderID):(x.push(E.customVertexShaderID),x.push(E.customFragmentShaderID)),E.defines!==void 0)for(const P in E.defines)x.push(P),x.push(E.defines[P]);return E.isRawShaderMaterial===!1&&(b(x,E),T(x,E),x.push(s.outputColorSpace)),x.push(E.customProgramCacheKey),x.join()}function b(E,x){E.push(x.precision),E.push(x.outputColorSpace),E.push(x.envMapMode),E.push(x.envMapCubeUVHeight),E.push(x.mapUv),E.push(x.alphaMapUv),E.push(x.lightMapUv),E.push(x.aoMapUv),E.push(x.bumpMapUv),E.push(x.normalMapUv),E.push(x.displacementMapUv),E.push(x.emissiveMapUv),E.push(x.metalnessMapUv),E.push(x.roughnessMapUv),E.push(x.anisotropyMapUv),E.push(x.clearcoatMapUv),E.push(x.clearcoatNormalMapUv),E.push(x.clearcoatRoughnessMapUv),E.push(x.iridescenceMapUv),E.push(x.iridescenceThicknessMapUv),E.push(x.sheenColorMapUv),E.push(x.sheenRoughnessMapUv),E.push(x.specularMapUv),E.push(x.specularColorMapUv),E.push(x.specularIntensityMapUv),E.push(x.transmissionMapUv),E.push(x.thicknessMapUv),E.push(x.combine),E.push(x.fogExp2),E.push(x.sizeAttenuation),E.push(x.morphTargetsCount),E.push(x.morphAttributeCount),E.push(x.numDirLights),E.push(x.numPointLights),E.push(x.numSpotLights),E.push(x.numSpotLightMaps),E.push(x.numHemiLights),E.push(x.numRectAreaLights),E.push(x.numDirLightShadows),E.push(x.numPointLightShadows),E.push(x.numSpotLightShadows),E.push(x.numSpotLightShadowsWithMaps),E.push(x.numLightProbes),E.push(x.shadowMapType),E.push(x.toneMapping),E.push(x.numClippingPlanes),E.push(x.numClipIntersection),E.push(x.depthPacking)}function T(E,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),x.gradientMap&&o.enable(22),E.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reversedDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),E.push(o.mask)}function y(E){const x=g[E.type];let P;if(x){const O=jt[x];P=_h.clone(O.uniforms)}else P=E.uniforms;return P}function C(E,x){let P;for(let O=0,k=h.length;O<k;O++){const q=h[O];if(q.cacheKey===x){P=q,++P.usedTimes;break}}return P===void 0&&(P=new qp(s,x,E,r),h.push(P)),P}function w(E){if(--E.usedTimes===0){const x=h.indexOf(E);h[x]=h[h.length-1],h.pop(),E.destroy()}}function R(E){l.remove(E)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:y,acquireProgram:C,releaseProgram:w,releaseShaderCache:R,programs:h,dispose:L}}function Zp(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function Jp(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Wo(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Xo(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(d,p,f,g,v,m){let u=s[e];return u===void 0?(u={id:d.id,object:d,geometry:p,material:f,groupOrder:g,renderOrder:d.renderOrder,z:v,group:m},s[e]=u):(u.id=d.id,u.object=d,u.geometry=p,u.material=f,u.groupOrder=g,u.renderOrder=d.renderOrder,u.z=v,u.group=m),e++,u}function o(d,p,f,g,v,m){const u=a(d,p,f,g,v,m);f.transmission>0?n.push(u):f.transparent===!0?i.push(u):t.push(u)}function l(d,p,f,g,v,m){const u=a(d,p,f,g,v,m);f.transmission>0?n.unshift(u):f.transparent===!0?i.unshift(u):t.unshift(u)}function c(d,p){t.length>1&&t.sort(d||Jp),n.length>1&&n.sort(p||Wo),i.length>1&&i.sort(p||Wo)}function h(){for(let d=e,p=s.length;d<p;d++){const f=s[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:h,sort:c}}function Qp(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new Xo,s.set(n,[a])):i>=r.length?(a=new Xo,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function em(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Le};break;case"SpotLight":t={position:new I,direction:new I,color:new Le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Le,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Le,groundColor:new Le};break;case"RectAreaLight":t={color:new Le,position:new I,halfWidth:new I,halfHeight:new I};break}return s[e.id]=t,t}}}function tm(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let nm=0;function im(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function sm(s){const e=new em,t=tm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);const i=new I,r=new at,a=new at;function o(c){let h=0,d=0,p=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let f=0,g=0,v=0,m=0,u=0,b=0,T=0,y=0,C=0,w=0,R=0;c.sort(im);for(let E=0,x=c.length;E<x;E++){const P=c[E],O=P.color,k=P.intensity,q=P.distance,V=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=O.r*k,d+=O.g*k,p+=O.b*k;else if(P.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(P.sh.coefficients[X],k);R++}else if(P.isDirectionalLight){const X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const j=P.shadow,H=t.get(P);H.shadowIntensity=j.intensity,H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,n.directionalShadow[f]=H,n.directionalShadowMap[f]=V,n.directionalShadowMatrix[f]=P.shadow.matrix,b++}n.directional[f]=X,f++}else if(P.isSpotLight){const X=e.get(P);X.position.setFromMatrixPosition(P.matrixWorld),X.color.copy(O).multiplyScalar(k),X.distance=q,X.coneCos=Math.cos(P.angle),X.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),X.decay=P.decay,n.spot[v]=X;const j=P.shadow;if(P.map&&(n.spotLightMap[C]=P.map,C++,j.updateMatrices(P),P.castShadow&&w++),n.spotLightMatrix[v]=j.matrix,P.castShadow){const H=t.get(P);H.shadowIntensity=j.intensity,H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,n.spotShadow[v]=H,n.spotShadowMap[v]=V,y++}v++}else if(P.isRectAreaLight){const X=e.get(P);X.color.copy(O).multiplyScalar(k),X.halfWidth.set(P.width*.5,0,0),X.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=X,m++}else if(P.isPointLight){const X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),X.distance=P.distance,X.decay=P.decay,P.castShadow){const j=P.shadow,H=t.get(P);H.shadowIntensity=j.intensity,H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,H.shadowCameraNear=j.camera.near,H.shadowCameraFar=j.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=V,n.pointShadowMatrix[g]=P.shadow.matrix,T++}n.point[g]=X,g++}else if(P.isHemisphereLight){const X=e.get(P);X.skyColor.copy(P.color).multiplyScalar(k),X.groundColor.copy(P.groundColor).multiplyScalar(k),n.hemi[u]=X,u++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=re.LTC_FLOAT_1,n.rectAreaLTC2=re.LTC_FLOAT_2):(n.rectAreaLTC1=re.LTC_HALF_1,n.rectAreaLTC2=re.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=p;const L=n.hash;(L.directionalLength!==f||L.pointLength!==g||L.spotLength!==v||L.rectAreaLength!==m||L.hemiLength!==u||L.numDirectionalShadows!==b||L.numPointShadows!==T||L.numSpotShadows!==y||L.numSpotMaps!==C||L.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=u,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=y+C-w,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=R,L.directionalLength=f,L.pointLength=g,L.spotLength=v,L.rectAreaLength=m,L.hemiLength=u,L.numDirectionalShadows=b,L.numPointShadows=T,L.numSpotShadows=y,L.numSpotMaps=C,L.numLightProbes=R,n.version=nm++)}function l(c,h){let d=0,p=0,f=0,g=0,v=0;const m=h.matrixWorldInverse;for(let u=0,b=c.length;u<b;u++){const T=c[u];if(T.isDirectionalLight){const y=n.directional[d];y.direction.setFromMatrixPosition(T.matrixWorld),i.setFromMatrixPosition(T.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),d++}else if(T.isSpotLight){const y=n.spot[f];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(T.matrixWorld),i.setFromMatrixPosition(T.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),f++}else if(T.isRectAreaLight){const y=n.rectArea[g];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(m),a.identity(),r.copy(T.matrixWorld),r.premultiply(m),a.extractRotation(r),y.halfWidth.set(T.width*.5,0,0),y.halfHeight.set(0,T.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),g++}else if(T.isPointLight){const y=n.point[p];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(m),p++}else if(T.isHemisphereLight){const y=n.hemi[v];y.direction.setFromMatrixPosition(T.matrixWorld),y.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:n}}function qo(s){const e=new sm(s),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function rm(s){let e=new WeakMap;function t(i,r=0){const a=e.get(i);let o;return a===void 0?(o=new qo(s),e.set(i,[o])):r>=a.length?(o=new qo(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const am=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,om=`uniform sampler2D shadow_pass;
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
}`;function lm(s,e,t){let n=new Na;const i=new Pe,r=new Pe,a=new lt,o=new Ch({depthPacking:Hc}),l=new Ph,c={},h=t.maxTextureSize,d={[Cn]:Ct,[Ct]:Cn,[$t]:$t},p=new mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pe},radius:{value:4}},vertexShader:am,fragmentShader:om}),f=p.clone();f.defines.HORIZONTAL_PASS=1;const g=new Pt;g.setAttribute("position",new zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new ke(g,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rl;let u=this.type;this.render=function(w,R,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const E=s.getRenderTarget(),x=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),O=s.state;O.setBlending(An),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const k=u!==cn&&this.type===cn,q=u===cn&&this.type!==cn;for(let V=0,X=w.length;V<X;V++){const j=w[V],H=j.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);const se=H.getFrameExtents();if(i.multiply(se),r.copy(H.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/se.x),i.x=r.x*se.x,H.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/se.y),i.y=r.y*se.y,H.mapSize.y=r.y)),H.map===null||k===!0||q===!0){const Ee=this.type!==cn?{minFilter:Tt,magFilter:Tt}:{};H.map!==null&&H.map.dispose(),H.map=new pn(i.x,i.y,Ee),H.map.texture.name=j.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();const ce=H.getViewportCount();for(let Ee=0;Ee<ce;Ee++){const Ge=H.getViewport(Ee);a.set(r.x*Ge.x,r.y*Ge.y,r.x*Ge.z,r.y*Ge.w),O.viewport(a),H.updateMatrices(j,Ee),n=H.getFrustum(),y(R,L,H.camera,j,this.type)}H.isPointLightShadow!==!0&&this.type===cn&&b(H,L),H.needsUpdate=!1}u=this.type,m.needsUpdate=!1,s.setRenderTarget(E,x,P)};function b(w,R){const L=e.update(v);p.defines.VSM_SAMPLES!==w.blurSamples&&(p.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,p.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new pn(i.x,i.y)),p.uniforms.shadow_pass.value=w.map.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(R,null,L,p,v,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(R,null,L,f,v,null)}function T(w,R,L,E){let x=null;const P=L.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)x=P;else if(x=L.isPointLight===!0?l:o,s.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const O=x.uuid,k=R.uuid;let q=c[O];q===void 0&&(q={},c[O]=q);let V=q[k];V===void 0&&(V=x.clone(),q[k]=V,R.addEventListener("dispose",C)),x=V}if(x.visible=R.visible,x.wireframe=R.wireframe,E===cn?x.side=R.shadowSide!==null?R.shadowSide:R.side:x.side=R.shadowSide!==null?R.shadowSide:d[R.side],x.alphaMap=R.alphaMap,x.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,x.map=R.map,x.clipShadows=R.clipShadows,x.clippingPlanes=R.clippingPlanes,x.clipIntersection=R.clipIntersection,x.displacementMap=R.displacementMap,x.displacementScale=R.displacementScale,x.displacementBias=R.displacementBias,x.wireframeLinewidth=R.wireframeLinewidth,x.linewidth=R.linewidth,L.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const O=s.properties.get(x);O.light=L}return x}function y(w,R,L,E,x){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&x===cn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,w.matrixWorld);const k=e.update(w),q=w.material;if(Array.isArray(q)){const V=k.groups;for(let X=0,j=V.length;X<j;X++){const H=V[X],se=q[H.materialIndex];if(se&&se.visible){const ce=T(w,se,E,x);w.onBeforeShadow(s,w,R,L,k,ce,H),s.renderBufferDirect(L,null,k,ce,w,H),w.onAfterShadow(s,w,R,L,k,ce,H)}}}else if(q.visible){const V=T(w,q,E,x);w.onBeforeShadow(s,w,R,L,k,V,null),s.renderBufferDirect(L,null,k,V,w,null),w.onAfterShadow(s,w,R,L,k,V,null)}}const O=w.children;for(let k=0,q=O.length;k<q;k++)y(O[k],R,L,E,x)}function C(w){w.target.removeEventListener("dispose",C);for(const L in c){const E=c[L],x=w.target.uuid;x in E&&(E[x].dispose(),delete E[x])}}}const cm={[Ur]:Nr,[Or]:Gr,[Fr]:kr,[gi]:Br,[Nr]:Ur,[Gr]:Or,[kr]:Fr,[Br]:gi};function hm(s,e){function t(){let D=!1;const te=new lt;let ie=null;const ue=new lt(0,0,0,0);return{setMask:function(J){ie!==J&&!D&&(s.colorMask(J,J,J,J),ie=J)},setLocked:function(J){D=J},setClear:function(J,K,pe,De,et){et===!0&&(J*=De,K*=De,pe*=De),te.set(J,K,pe,De),ue.equals(te)===!1&&(s.clearColor(J,K,pe,De),ue.copy(te))},reset:function(){D=!1,ie=null,ue.set(-1,0,0,0)}}}function n(){let D=!1,te=!1,ie=null,ue=null,J=null;return{setReversed:function(K){if(te!==K){const pe=e.get("EXT_clip_control");K?pe.clipControlEXT(pe.LOWER_LEFT_EXT,pe.ZERO_TO_ONE_EXT):pe.clipControlEXT(pe.LOWER_LEFT_EXT,pe.NEGATIVE_ONE_TO_ONE_EXT),te=K;const De=J;J=null,this.setClear(De)}},getReversed:function(){return te},setTest:function(K){K?Z(s.DEPTH_TEST):de(s.DEPTH_TEST)},setMask:function(K){ie!==K&&!D&&(s.depthMask(K),ie=K)},setFunc:function(K){if(te&&(K=cm[K]),ue!==K){switch(K){case Ur:s.depthFunc(s.NEVER);break;case Nr:s.depthFunc(s.ALWAYS);break;case Or:s.depthFunc(s.LESS);break;case gi:s.depthFunc(s.LEQUAL);break;case Fr:s.depthFunc(s.EQUAL);break;case Br:s.depthFunc(s.GEQUAL);break;case Gr:s.depthFunc(s.GREATER);break;case kr:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ue=K}},setLocked:function(K){D=K},setClear:function(K){J!==K&&(te&&(K=1-K),s.clearDepth(K),J=K)},reset:function(){D=!1,ie=null,ue=null,J=null,te=!1}}}function i(){let D=!1,te=null,ie=null,ue=null,J=null,K=null,pe=null,De=null,et=null;return{setTest:function(qe){D||(qe?Z(s.STENCIL_TEST):de(s.STENCIL_TEST))},setMask:function(qe){te!==qe&&!D&&(s.stencilMask(qe),te=qe)},setFunc:function(qe,tn,Kt){(ie!==qe||ue!==tn||J!==Kt)&&(s.stencilFunc(qe,tn,Kt),ie=qe,ue=tn,J=Kt)},setOp:function(qe,tn,Kt){(K!==qe||pe!==tn||De!==Kt)&&(s.stencilOp(qe,tn,Kt),K=qe,pe=tn,De=Kt)},setLocked:function(qe){D=qe},setClear:function(qe){et!==qe&&(s.clearStencil(qe),et=qe)},reset:function(){D=!1,te=null,ie=null,ue=null,J=null,K=null,pe=null,De=null,et=null}}}const r=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let h={},d={},p=new WeakMap,f=[],g=null,v=!1,m=null,u=null,b=null,T=null,y=null,C=null,w=null,R=new Le(0,0,0),L=0,E=!1,x=null,P=null,O=null,k=null,q=null;const V=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,j=0;const H=s.getParameter(s.VERSION);H.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(H)[1]),X=j>=1):H.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),X=j>=2);let se=null,ce={};const Ee=s.getParameter(s.SCISSOR_BOX),Ge=s.getParameter(s.VIEWPORT),Ze=new lt().fromArray(Ee),Qe=new lt().fromArray(Ge);function Ie(D,te,ie,ue){const J=new Uint8Array(4),K=s.createTexture();s.bindTexture(D,K),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let pe=0;pe<ie;pe++)D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY?s.texImage3D(te,0,s.RGBA,1,1,ue,0,s.RGBA,s.UNSIGNED_BYTE,J):s.texImage2D(te+pe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,J);return K}const Y={};Y[s.TEXTURE_2D]=Ie(s.TEXTURE_2D,s.TEXTURE_2D,1),Y[s.TEXTURE_CUBE_MAP]=Ie(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[s.TEXTURE_2D_ARRAY]=Ie(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Y[s.TEXTURE_3D]=Ie(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Z(s.DEPTH_TEST),a.setFunc(gi),we(!1),me(Xa),Z(s.CULL_FACE),nt(An);function Z(D){h[D]!==!0&&(s.enable(D),h[D]=!0)}function de(D){h[D]!==!1&&(s.disable(D),h[D]=!1)}function Ce(D,te){return d[D]!==te?(s.bindFramebuffer(D,te),d[D]=te,D===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=te),D===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=te),!0):!1}function ye(D,te){let ie=f,ue=!1;if(D){ie=p.get(te),ie===void 0&&(ie=[],p.set(te,ie));const J=D.textures;if(ie.length!==J.length||ie[0]!==s.COLOR_ATTACHMENT0){for(let K=0,pe=J.length;K<pe;K++)ie[K]=s.COLOR_ATTACHMENT0+K;ie.length=J.length,ue=!0}}else ie[0]!==s.BACK&&(ie[0]=s.BACK,ue=!0);ue&&s.drawBuffers(ie)}function Ve(D){return g!==D?(s.useProgram(D),g=D,!0):!1}const St={[Hn]:s.FUNC_ADD,[fc]:s.FUNC_SUBTRACT,[pc]:s.FUNC_REVERSE_SUBTRACT};St[mc]=s.MIN,St[gc]=s.MAX;const A={[_c]:s.ZERO,[vc]:s.ONE,[Sc]:s.SRC_COLOR,[Lr]:s.SRC_ALPHA,[Tc]:s.SRC_ALPHA_SATURATE,[Mc]:s.DST_COLOR,[Ec]:s.DST_ALPHA,[xc]:s.ONE_MINUS_SRC_COLOR,[Ir]:s.ONE_MINUS_SRC_ALPHA,[bc]:s.ONE_MINUS_DST_COLOR,[yc]:s.ONE_MINUS_DST_ALPHA,[Ac]:s.CONSTANT_COLOR,[wc]:s.ONE_MINUS_CONSTANT_COLOR,[Rc]:s.CONSTANT_ALPHA,[Cc]:s.ONE_MINUS_CONSTANT_ALPHA};function nt(D,te,ie,ue,J,K,pe,De,et,qe){if(D===An){v===!0&&(de(s.BLEND),v=!1);return}if(v===!1&&(Z(s.BLEND),v=!0),D!==dc){if(D!==m||qe!==E){if((u!==Hn||y!==Hn)&&(s.blendEquation(s.FUNC_ADD),u=Hn,y=Hn),qe)switch(D){case pi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case qa:s.blendFunc(s.ONE,s.ONE);break;case Ya:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ka:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case pi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case qa:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Ya:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ka:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}b=null,T=null,C=null,w=null,R.set(0,0,0),L=0,m=D,E=qe}return}J=J||te,K=K||ie,pe=pe||ue,(te!==u||J!==y)&&(s.blendEquationSeparate(St[te],St[J]),u=te,y=J),(ie!==b||ue!==T||K!==C||pe!==w)&&(s.blendFuncSeparate(A[ie],A[ue],A[K],A[pe]),b=ie,T=ue,C=K,w=pe),(De.equals(R)===!1||et!==L)&&(s.blendColor(De.r,De.g,De.b,et),R.copy(De),L=et),m=D,E=!1}function Ue(D,te){D.side===$t?de(s.CULL_FACE):Z(s.CULL_FACE);let ie=D.side===Ct;te&&(ie=!ie),we(ie),D.blending===pi&&D.transparent===!1?nt(An):nt(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);const ue=D.stencilWrite;o.setTest(ue),ue&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),ge(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Z(s.SAMPLE_ALPHA_TO_COVERAGE):de(s.SAMPLE_ALPHA_TO_COVERAGE)}function we(D){x!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),x=D)}function me(D){D!==cc?(Z(s.CULL_FACE),D!==P&&(D===Xa?s.cullFace(s.BACK):D===hc?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):de(s.CULL_FACE),P=D}function it(D){D!==O&&(X&&s.lineWidth(D),O=D)}function ge(D,te,ie){D?(Z(s.POLYGON_OFFSET_FILL),(k!==te||q!==ie)&&(s.polygonOffset(te,ie),k=te,q=ie)):de(s.POLYGON_OFFSET_FILL)}function Fe(D){D?Z(s.SCISSOR_TEST):de(s.SCISSOR_TEST)}function gt(D){D===void 0&&(D=s.TEXTURE0+V-1),se!==D&&(s.activeTexture(D),se=D)}function ct(D,te,ie){ie===void 0&&(se===null?ie=s.TEXTURE0+V-1:ie=se);let ue=ce[ie];ue===void 0&&(ue={type:void 0,texture:void 0},ce[ie]=ue),(ue.type!==D||ue.texture!==te)&&(se!==ie&&(s.activeTexture(ie),se=ie),s.bindTexture(D,te||Y[D]),ue.type=D,ue.texture=te)}function M(){const D=ce[se];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function _(){try{s.compressedTexImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function F(){try{s.compressedTexImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function W(){try{s.texSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function $(){try{s.texSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function z(){try{s.compressedTexSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xe(){try{s.compressedTexSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ne(){try{s.texStorage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function _e(){try{s.texStorage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ve(){try{s.texImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ee(){try{s.texImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function le(D){Ze.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),Ze.copy(D))}function Ae(D){Qe.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),Qe.copy(D))}function Se(D,te){let ie=c.get(te);ie===void 0&&(ie=new WeakMap,c.set(te,ie));let ue=ie.get(D);ue===void 0&&(ue=s.getUniformBlockIndex(te,D.name),ie.set(D,ue))}function ae(D,te){const ue=c.get(te).get(D);l.get(te)!==ue&&(s.uniformBlockBinding(te,ue,D.__bindingPointIndex),l.set(te,ue))}function Ne(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},se=null,ce={},d={},p=new WeakMap,f=[],g=null,v=!1,m=null,u=null,b=null,T=null,y=null,C=null,w=null,R=new Le(0,0,0),L=0,E=!1,x=null,P=null,O=null,k=null,q=null,Ze.set(0,0,s.canvas.width,s.canvas.height),Qe.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Z,disable:de,bindFramebuffer:Ce,drawBuffers:ye,useProgram:Ve,setBlending:nt,setMaterial:Ue,setFlipSided:we,setCullFace:me,setLineWidth:it,setPolygonOffset:ge,setScissorTest:Fe,activeTexture:gt,bindTexture:ct,unbindTexture:M,compressedTexImage2D:_,compressedTexImage3D:F,texImage2D:ve,texImage3D:ee,updateUBOMapping:Se,uniformBlockBinding:ae,texStorage2D:ne,texStorage3D:_e,texSubImage2D:W,texSubImage3D:$,compressedTexSubImage2D:z,compressedTexSubImage3D:xe,scissor:le,viewport:Ae,reset:Ne}}function um(s,e,t,n,i,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Pe,h=new WeakMap;let d;const p=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(M,_){return f?new OffscreenCanvas(M,_):ws("canvas")}function v(M,_,F){let W=1;const $=ct(M);if(($.width>F||$.height>F)&&(W=F/Math.max($.width,$.height)),W<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){const z=Math.floor(W*$.width),xe=Math.floor(W*$.height);d===void 0&&(d=g(z,xe));const ne=_?g(z,xe):d;return ne.width=z,ne.height=xe,ne.getContext("2d").drawImage(M,0,0,z,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+z+"x"+xe+")."),ne}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),M;return M}function m(M){return M.generateMipmaps}function u(M){s.generateMipmap(M)}function b(M){return M.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:M.isWebGL3DRenderTarget?s.TEXTURE_3D:M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function T(M,_,F,W,$=!1){if(M!==null){if(s[M]!==void 0)return s[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let z=_;if(_===s.RED&&(F===s.FLOAT&&(z=s.R32F),F===s.HALF_FLOAT&&(z=s.R16F),F===s.UNSIGNED_BYTE&&(z=s.R8)),_===s.RED_INTEGER&&(F===s.UNSIGNED_BYTE&&(z=s.R8UI),F===s.UNSIGNED_SHORT&&(z=s.R16UI),F===s.UNSIGNED_INT&&(z=s.R32UI),F===s.BYTE&&(z=s.R8I),F===s.SHORT&&(z=s.R16I),F===s.INT&&(z=s.R32I)),_===s.RG&&(F===s.FLOAT&&(z=s.RG32F),F===s.HALF_FLOAT&&(z=s.RG16F),F===s.UNSIGNED_BYTE&&(z=s.RG8)),_===s.RG_INTEGER&&(F===s.UNSIGNED_BYTE&&(z=s.RG8UI),F===s.UNSIGNED_SHORT&&(z=s.RG16UI),F===s.UNSIGNED_INT&&(z=s.RG32UI),F===s.BYTE&&(z=s.RG8I),F===s.SHORT&&(z=s.RG16I),F===s.INT&&(z=s.RG32I)),_===s.RGB_INTEGER&&(F===s.UNSIGNED_BYTE&&(z=s.RGB8UI),F===s.UNSIGNED_SHORT&&(z=s.RGB16UI),F===s.UNSIGNED_INT&&(z=s.RGB32UI),F===s.BYTE&&(z=s.RGB8I),F===s.SHORT&&(z=s.RGB16I),F===s.INT&&(z=s.RGB32I)),_===s.RGBA_INTEGER&&(F===s.UNSIGNED_BYTE&&(z=s.RGBA8UI),F===s.UNSIGNED_SHORT&&(z=s.RGBA16UI),F===s.UNSIGNED_INT&&(z=s.RGBA32UI),F===s.BYTE&&(z=s.RGBA8I),F===s.SHORT&&(z=s.RGBA16I),F===s.INT&&(z=s.RGBA32I)),_===s.RGB&&(F===s.UNSIGNED_INT_5_9_9_9_REV&&(z=s.RGB9_E5),F===s.UNSIGNED_INT_10F_11F_11F_REV&&(z=s.R11F_G11F_B10F)),_===s.RGBA){const xe=$?Ts:Xe.getTransfer(W);F===s.FLOAT&&(z=s.RGBA32F),F===s.HALF_FLOAT&&(z=s.RGBA16F),F===s.UNSIGNED_BYTE&&(z=xe===je?s.SRGB8_ALPHA8:s.RGBA8),F===s.UNSIGNED_SHORT_4_4_4_4&&(z=s.RGBA4),F===s.UNSIGNED_SHORT_5_5_5_1&&(z=s.RGB5_A1)}return(z===s.R16F||z===s.R32F||z===s.RG16F||z===s.RG32F||z===s.RGBA16F||z===s.RGBA32F)&&e.get("EXT_color_buffer_float"),z}function y(M,_){let F;return M?_===null||_===qn||_===Ui?F=s.DEPTH24_STENCIL8:_===dn?F=s.DEPTH32F_STENCIL8:_===Ii&&(F=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===qn||_===Ui?F=s.DEPTH_COMPONENT24:_===dn?F=s.DEPTH_COMPONENT32F:_===Ii&&(F=s.DEPTH_COMPONENT16),F}function C(M,_){return m(M)===!0||M.isFramebufferTexture&&M.minFilter!==Tt&&M.minFilter!==Jt?Math.log2(Math.max(_.width,_.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?_.mipmaps.length:1}function w(M){const _=M.target;_.removeEventListener("dispose",w),L(_),_.isVideoTexture&&h.delete(_)}function R(M){const _=M.target;_.removeEventListener("dispose",R),x(_)}function L(M){const _=n.get(M);if(_.__webglInit===void 0)return;const F=M.source,W=p.get(F);if(W){const $=W[_.__cacheKey];$.usedTimes--,$.usedTimes===0&&E(M),Object.keys(W).length===0&&p.delete(F)}n.remove(M)}function E(M){const _=n.get(M);s.deleteTexture(_.__webglTexture);const F=M.source,W=p.get(F);delete W[_.__cacheKey],a.memory.textures--}function x(M){const _=n.get(M);if(M.depthTexture&&(M.depthTexture.dispose(),n.remove(M.depthTexture)),M.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(_.__webglFramebuffer[W]))for(let $=0;$<_.__webglFramebuffer[W].length;$++)s.deleteFramebuffer(_.__webglFramebuffer[W][$]);else s.deleteFramebuffer(_.__webglFramebuffer[W]);_.__webglDepthbuffer&&s.deleteRenderbuffer(_.__webglDepthbuffer[W])}else{if(Array.isArray(_.__webglFramebuffer))for(let W=0;W<_.__webglFramebuffer.length;W++)s.deleteFramebuffer(_.__webglFramebuffer[W]);else s.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&s.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&s.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let W=0;W<_.__webglColorRenderbuffer.length;W++)_.__webglColorRenderbuffer[W]&&s.deleteRenderbuffer(_.__webglColorRenderbuffer[W]);_.__webglDepthRenderbuffer&&s.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const F=M.textures;for(let W=0,$=F.length;W<$;W++){const z=n.get(F[W]);z.__webglTexture&&(s.deleteTexture(z.__webglTexture),a.memory.textures--),n.remove(F[W])}n.remove(M)}let P=0;function O(){P=0}function k(){const M=P;return M>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+i.maxTextures),P+=1,M}function q(M){const _=[];return _.push(M.wrapS),_.push(M.wrapT),_.push(M.wrapR||0),_.push(M.magFilter),_.push(M.minFilter),_.push(M.anisotropy),_.push(M.internalFormat),_.push(M.format),_.push(M.type),_.push(M.generateMipmaps),_.push(M.premultiplyAlpha),_.push(M.flipY),_.push(M.unpackAlignment),_.push(M.colorSpace),_.join()}function V(M,_){const F=n.get(M);if(M.isVideoTexture&&Fe(M),M.isRenderTargetTexture===!1&&M.isExternalTexture!==!0&&M.version>0&&F.__version!==M.version){const W=M.image;if(W===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(F,M,_);return}}else M.isExternalTexture&&(F.__webglTexture=M.sourceTexture?M.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,F.__webglTexture,s.TEXTURE0+_)}function X(M,_){const F=n.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&F.__version!==M.version){Y(F,M,_);return}t.bindTexture(s.TEXTURE_2D_ARRAY,F.__webglTexture,s.TEXTURE0+_)}function j(M,_){const F=n.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&F.__version!==M.version){Y(F,M,_);return}t.bindTexture(s.TEXTURE_3D,F.__webglTexture,s.TEXTURE0+_)}function H(M,_){const F=n.get(M);if(M.version>0&&F.__version!==M.version){Z(F,M,_);return}t.bindTexture(s.TEXTURE_CUBE_MAP,F.__webglTexture,s.TEXTURE0+_)}const se={[Vr]:s.REPEAT,[Wn]:s.CLAMP_TO_EDGE,[Wr]:s.MIRRORED_REPEAT},ce={[Tt]:s.NEAREST,[Gc]:s.NEAREST_MIPMAP_NEAREST,[qi]:s.NEAREST_MIPMAP_LINEAR,[Jt]:s.LINEAR,[Vs]:s.LINEAR_MIPMAP_NEAREST,[Xn]:s.LINEAR_MIPMAP_LINEAR},Ee={[Vc]:s.NEVER,[jc]:s.ALWAYS,[Wc]:s.LESS,[gl]:s.LEQUAL,[Xc]:s.EQUAL,[Kc]:s.GEQUAL,[qc]:s.GREATER,[Yc]:s.NOTEQUAL};function Ge(M,_){if(_.type===dn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Jt||_.magFilter===Vs||_.magFilter===qi||_.magFilter===Xn||_.minFilter===Jt||_.minFilter===Vs||_.minFilter===qi||_.minFilter===Xn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(M,s.TEXTURE_WRAP_S,se[_.wrapS]),s.texParameteri(M,s.TEXTURE_WRAP_T,se[_.wrapT]),(M===s.TEXTURE_3D||M===s.TEXTURE_2D_ARRAY)&&s.texParameteri(M,s.TEXTURE_WRAP_R,se[_.wrapR]),s.texParameteri(M,s.TEXTURE_MAG_FILTER,ce[_.magFilter]),s.texParameteri(M,s.TEXTURE_MIN_FILTER,ce[_.minFilter]),_.compareFunction&&(s.texParameteri(M,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(M,s.TEXTURE_COMPARE_FUNC,Ee[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Tt||_.minFilter!==qi&&_.minFilter!==Xn||_.type===dn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");s.texParameterf(M,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,i.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Ze(M,_){let F=!1;M.__webglInit===void 0&&(M.__webglInit=!0,_.addEventListener("dispose",w));const W=_.source;let $=p.get(W);$===void 0&&($={},p.set(W,$));const z=q(_);if(z!==M.__cacheKey){$[z]===void 0&&($[z]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,F=!0),$[z].usedTimes++;const xe=$[M.__cacheKey];xe!==void 0&&($[M.__cacheKey].usedTimes--,xe.usedTimes===0&&E(_)),M.__cacheKey=z,M.__webglTexture=$[z].texture}return F}function Qe(M,_,F){return Math.floor(Math.floor(M/F)/_)}function Ie(M,_,F,W){const z=M.updateRanges;if(z.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,_.width,_.height,F,W,_.data);else{z.sort((ee,le)=>ee.start-le.start);let xe=0;for(let ee=1;ee<z.length;ee++){const le=z[xe],Ae=z[ee],Se=le.start+le.count,ae=Qe(Ae.start,_.width,4),Ne=Qe(le.start,_.width,4);Ae.start<=Se+1&&ae===Ne&&Qe(Ae.start+Ae.count-1,_.width,4)===ae?le.count=Math.max(le.count,Ae.start+Ae.count-le.start):(++xe,z[xe]=Ae)}z.length=xe+1;const ne=s.getParameter(s.UNPACK_ROW_LENGTH),_e=s.getParameter(s.UNPACK_SKIP_PIXELS),ve=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,_.width);for(let ee=0,le=z.length;ee<le;ee++){const Ae=z[ee],Se=Math.floor(Ae.start/4),ae=Math.ceil(Ae.count/4),Ne=Se%_.width,D=Math.floor(Se/_.width),te=ae,ie=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,Ne),s.pixelStorei(s.UNPACK_SKIP_ROWS,D),t.texSubImage2D(s.TEXTURE_2D,0,Ne,D,te,ie,F,W,_.data)}M.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,ne),s.pixelStorei(s.UNPACK_SKIP_PIXELS,_e),s.pixelStorei(s.UNPACK_SKIP_ROWS,ve)}}function Y(M,_,F){let W=s.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(W=s.TEXTURE_2D_ARRAY),_.isData3DTexture&&(W=s.TEXTURE_3D);const $=Ze(M,_),z=_.source;t.bindTexture(W,M.__webglTexture,s.TEXTURE0+F);const xe=n.get(z);if(z.version!==xe.__version||$===!0){t.activeTexture(s.TEXTURE0+F);const ne=Xe.getPrimaries(Xe.workingColorSpace),_e=_.colorSpace===bn?null:Xe.getPrimaries(_.colorSpace),ve=_.colorSpace===bn||ne===_e?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,_.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,_.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);let ee=v(_.image,!1,i.maxTextureSize);ee=gt(_,ee);const le=r.convert(_.format,_.colorSpace),Ae=r.convert(_.type);let Se=T(_.internalFormat,le,Ae,_.colorSpace,_.isVideoTexture);Ge(W,_);let ae;const Ne=_.mipmaps,D=_.isVideoTexture!==!0,te=xe.__version===void 0||$===!0,ie=z.dataReady,ue=C(_,ee);if(_.isDepthTexture)Se=y(_.format===Oi,_.type),te&&(D?t.texStorage2D(s.TEXTURE_2D,1,Se,ee.width,ee.height):t.texImage2D(s.TEXTURE_2D,0,Se,ee.width,ee.height,0,le,Ae,null));else if(_.isDataTexture)if(Ne.length>0){D&&te&&t.texStorage2D(s.TEXTURE_2D,ue,Se,Ne[0].width,Ne[0].height);for(let J=0,K=Ne.length;J<K;J++)ae=Ne[J],D?ie&&t.texSubImage2D(s.TEXTURE_2D,J,0,0,ae.width,ae.height,le,Ae,ae.data):t.texImage2D(s.TEXTURE_2D,J,Se,ae.width,ae.height,0,le,Ae,ae.data);_.generateMipmaps=!1}else D?(te&&t.texStorage2D(s.TEXTURE_2D,ue,Se,ee.width,ee.height),ie&&Ie(_,ee,le,Ae)):t.texImage2D(s.TEXTURE_2D,0,Se,ee.width,ee.height,0,le,Ae,ee.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){D&&te&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ue,Se,Ne[0].width,Ne[0].height,ee.depth);for(let J=0,K=Ne.length;J<K;J++)if(ae=Ne[J],_.format!==Ht)if(le!==null)if(D){if(ie)if(_.layerUpdates.size>0){const pe=yo(ae.width,ae.height,_.format,_.type);for(const De of _.layerUpdates){const et=ae.data.subarray(De*pe/ae.data.BYTES_PER_ELEMENT,(De+1)*pe/ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,J,0,0,De,ae.width,ae.height,1,le,et)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,J,0,0,0,ae.width,ae.height,ee.depth,le,ae.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,J,Se,ae.width,ae.height,ee.depth,0,ae.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?ie&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,J,0,0,0,ae.width,ae.height,ee.depth,le,Ae,ae.data):t.texImage3D(s.TEXTURE_2D_ARRAY,J,Se,ae.width,ae.height,ee.depth,0,le,Ae,ae.data)}else{D&&te&&t.texStorage2D(s.TEXTURE_2D,ue,Se,Ne[0].width,Ne[0].height);for(let J=0,K=Ne.length;J<K;J++)ae=Ne[J],_.format!==Ht?le!==null?D?ie&&t.compressedTexSubImage2D(s.TEXTURE_2D,J,0,0,ae.width,ae.height,le,ae.data):t.compressedTexImage2D(s.TEXTURE_2D,J,Se,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?ie&&t.texSubImage2D(s.TEXTURE_2D,J,0,0,ae.width,ae.height,le,Ae,ae.data):t.texImage2D(s.TEXTURE_2D,J,Se,ae.width,ae.height,0,le,Ae,ae.data)}else if(_.isDataArrayTexture)if(D){if(te&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ue,Se,ee.width,ee.height,ee.depth),ie)if(_.layerUpdates.size>0){const J=yo(ee.width,ee.height,_.format,_.type);for(const K of _.layerUpdates){const pe=ee.data.subarray(K*J/ee.data.BYTES_PER_ELEMENT,(K+1)*J/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,K,ee.width,ee.height,1,le,Ae,pe)}_.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,le,Ae,ee.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Se,ee.width,ee.height,ee.depth,0,le,Ae,ee.data);else if(_.isData3DTexture)D?(te&&t.texStorage3D(s.TEXTURE_3D,ue,Se,ee.width,ee.height,ee.depth),ie&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,le,Ae,ee.data)):t.texImage3D(s.TEXTURE_3D,0,Se,ee.width,ee.height,ee.depth,0,le,Ae,ee.data);else if(_.isFramebufferTexture){if(te)if(D)t.texStorage2D(s.TEXTURE_2D,ue,Se,ee.width,ee.height);else{let J=ee.width,K=ee.height;for(let pe=0;pe<ue;pe++)t.texImage2D(s.TEXTURE_2D,pe,Se,J,K,0,le,Ae,null),J>>=1,K>>=1}}else if(Ne.length>0){if(D&&te){const J=ct(Ne[0]);t.texStorage2D(s.TEXTURE_2D,ue,Se,J.width,J.height)}for(let J=0,K=Ne.length;J<K;J++)ae=Ne[J],D?ie&&t.texSubImage2D(s.TEXTURE_2D,J,0,0,le,Ae,ae):t.texImage2D(s.TEXTURE_2D,J,Se,le,Ae,ae);_.generateMipmaps=!1}else if(D){if(te){const J=ct(ee);t.texStorage2D(s.TEXTURE_2D,ue,Se,J.width,J.height)}ie&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,le,Ae,ee)}else t.texImage2D(s.TEXTURE_2D,0,Se,le,Ae,ee);m(_)&&u(W),xe.__version=z.version,_.onUpdate&&_.onUpdate(_)}M.__version=_.version}function Z(M,_,F){if(_.image.length!==6)return;const W=Ze(M,_),$=_.source;t.bindTexture(s.TEXTURE_CUBE_MAP,M.__webglTexture,s.TEXTURE0+F);const z=n.get($);if($.version!==z.__version||W===!0){t.activeTexture(s.TEXTURE0+F);const xe=Xe.getPrimaries(Xe.workingColorSpace),ne=_.colorSpace===bn?null:Xe.getPrimaries(_.colorSpace),_e=_.colorSpace===bn||xe===ne?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,_.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,_.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const ve=_.isCompressedTexture||_.image[0].isCompressedTexture,ee=_.image[0]&&_.image[0].isDataTexture,le=[];for(let K=0;K<6;K++)!ve&&!ee?le[K]=v(_.image[K],!0,i.maxCubemapSize):le[K]=ee?_.image[K].image:_.image[K],le[K]=gt(_,le[K]);const Ae=le[0],Se=r.convert(_.format,_.colorSpace),ae=r.convert(_.type),Ne=T(_.internalFormat,Se,ae,_.colorSpace),D=_.isVideoTexture!==!0,te=z.__version===void 0||W===!0,ie=$.dataReady;let ue=C(_,Ae);Ge(s.TEXTURE_CUBE_MAP,_);let J;if(ve){D&&te&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ue,Ne,Ae.width,Ae.height);for(let K=0;K<6;K++){J=le[K].mipmaps;for(let pe=0;pe<J.length;pe++){const De=J[pe];_.format!==Ht?Se!==null?D?ie&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,pe,0,0,De.width,De.height,Se,De.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,pe,Ne,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?ie&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,pe,0,0,De.width,De.height,Se,ae,De.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,pe,Ne,De.width,De.height,0,Se,ae,De.data)}}}else{if(J=_.mipmaps,D&&te){J.length>0&&ue++;const K=ct(le[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,ue,Ne,K.width,K.height)}for(let K=0;K<6;K++)if(ee){D?ie&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,le[K].width,le[K].height,Se,ae,le[K].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ne,le[K].width,le[K].height,0,Se,ae,le[K].data);for(let pe=0;pe<J.length;pe++){const et=J[pe].image[K].image;D?ie&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,pe+1,0,0,et.width,et.height,Se,ae,et.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,pe+1,Ne,et.width,et.height,0,Se,ae,et.data)}}else{D?ie&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Se,ae,le[K]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ne,Se,ae,le[K]);for(let pe=0;pe<J.length;pe++){const De=J[pe];D?ie&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,pe+1,0,0,Se,ae,De.image[K]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,pe+1,Ne,Se,ae,De.image[K])}}}m(_)&&u(s.TEXTURE_CUBE_MAP),z.__version=$.version,_.onUpdate&&_.onUpdate(_)}M.__version=_.version}function de(M,_,F,W,$,z){const xe=r.convert(F.format,F.colorSpace),ne=r.convert(F.type),_e=T(F.internalFormat,xe,ne,F.colorSpace),ve=n.get(_),ee=n.get(F);if(ee.__renderTarget=_,!ve.__hasExternalTextures){const le=Math.max(1,_.width>>z),Ae=Math.max(1,_.height>>z);$===s.TEXTURE_3D||$===s.TEXTURE_2D_ARRAY?t.texImage3D($,z,_e,le,Ae,_.depth,0,xe,ne,null):t.texImage2D($,z,_e,le,Ae,0,xe,ne,null)}t.bindFramebuffer(s.FRAMEBUFFER,M),ge(_)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,W,$,ee.__webglTexture,0,it(_)):($===s.TEXTURE_2D||$>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,W,$,ee.__webglTexture,z),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ce(M,_,F){if(s.bindRenderbuffer(s.RENDERBUFFER,M),_.depthBuffer){const W=_.depthTexture,$=W&&W.isDepthTexture?W.type:null,z=y(_.stencilBuffer,$),xe=_.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ne=it(_);ge(_)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ne,z,_.width,_.height):F?s.renderbufferStorageMultisample(s.RENDERBUFFER,ne,z,_.width,_.height):s.renderbufferStorage(s.RENDERBUFFER,z,_.width,_.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,xe,s.RENDERBUFFER,M)}else{const W=_.textures;for(let $=0;$<W.length;$++){const z=W[$],xe=r.convert(z.format,z.colorSpace),ne=r.convert(z.type),_e=T(z.internalFormat,xe,ne,z.colorSpace),ve=it(_);F&&ge(_)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ve,_e,_.width,_.height):ge(_)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ve,_e,_.width,_.height):s.renderbufferStorage(s.RENDERBUFFER,_e,_.width,_.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ye(M,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,M),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const W=n.get(_.depthTexture);W.__renderTarget=_,(!W.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),V(_.depthTexture,0);const $=W.__webglTexture,z=it(_);if(_.depthTexture.format===Ni)ge(_)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,$,0,z):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,$,0);else if(_.depthTexture.format===Oi)ge(_)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,$,0,z):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function Ve(M){const _=n.get(M),F=M.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==M.depthTexture){const W=M.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),W){const $=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,W.removeEventListener("dispose",$)};W.addEventListener("dispose",$),_.__depthDisposeCallback=$}_.__boundDepthTexture=W}if(M.depthTexture&&!_.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");const W=M.texture.mipmaps;W&&W.length>0?ye(_.__webglFramebuffer[0],M):ye(_.__webglFramebuffer,M)}else if(F){_.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer[W]),_.__webglDepthbuffer[W]===void 0)_.__webglDepthbuffer[W]=s.createRenderbuffer(),Ce(_.__webglDepthbuffer[W],M,!1);else{const $=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,z=_.__webglDepthbuffer[W];s.bindRenderbuffer(s.RENDERBUFFER,z),s.framebufferRenderbuffer(s.FRAMEBUFFER,$,s.RENDERBUFFER,z)}}else{const W=M.texture.mipmaps;if(W&&W.length>0?t.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=s.createRenderbuffer(),Ce(_.__webglDepthbuffer,M,!1);else{const $=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,z=_.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,z),s.framebufferRenderbuffer(s.FRAMEBUFFER,$,s.RENDERBUFFER,z)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function St(M,_,F){const W=n.get(M);_!==void 0&&de(W.__webglFramebuffer,M,M.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),F!==void 0&&Ve(M)}function A(M){const _=M.texture,F=n.get(M),W=n.get(_);M.addEventListener("dispose",R);const $=M.textures,z=M.isWebGLCubeRenderTarget===!0,xe=$.length>1;if(xe||(W.__webglTexture===void 0&&(W.__webglTexture=s.createTexture()),W.__version=_.version,a.memory.textures++),z){F.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer[ne]=[];for(let _e=0;_e<_.mipmaps.length;_e++)F.__webglFramebuffer[ne][_e]=s.createFramebuffer()}else F.__webglFramebuffer[ne]=s.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer=[];for(let ne=0;ne<_.mipmaps.length;ne++)F.__webglFramebuffer[ne]=s.createFramebuffer()}else F.__webglFramebuffer=s.createFramebuffer();if(xe)for(let ne=0,_e=$.length;ne<_e;ne++){const ve=n.get($[ne]);ve.__webglTexture===void 0&&(ve.__webglTexture=s.createTexture(),a.memory.textures++)}if(M.samples>0&&ge(M)===!1){F.__webglMultisampledFramebuffer=s.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ne=0;ne<$.length;ne++){const _e=$[ne];F.__webglColorRenderbuffer[ne]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,F.__webglColorRenderbuffer[ne]);const ve=r.convert(_e.format,_e.colorSpace),ee=r.convert(_e.type),le=T(_e.internalFormat,ve,ee,_e.colorSpace,M.isXRRenderTarget===!0),Ae=it(M);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ae,le,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ne,s.RENDERBUFFER,F.__webglColorRenderbuffer[ne])}s.bindRenderbuffer(s.RENDERBUFFER,null),M.depthBuffer&&(F.__webglDepthRenderbuffer=s.createRenderbuffer(),Ce(F.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(z){t.bindTexture(s.TEXTURE_CUBE_MAP,W.__webglTexture),Ge(s.TEXTURE_CUBE_MAP,_);for(let ne=0;ne<6;ne++)if(_.mipmaps&&_.mipmaps.length>0)for(let _e=0;_e<_.mipmaps.length;_e++)de(F.__webglFramebuffer[ne][_e],M,_,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,_e);else de(F.__webglFramebuffer[ne],M,_,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);m(_)&&u(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(xe){for(let ne=0,_e=$.length;ne<_e;ne++){const ve=$[ne],ee=n.get(ve);let le=s.TEXTURE_2D;(M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(le=M.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(le,ee.__webglTexture),Ge(le,ve),de(F.__webglFramebuffer,M,ve,s.COLOR_ATTACHMENT0+ne,le,0),m(ve)&&u(le)}t.unbindTexture()}else{let ne=s.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(ne=M.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ne,W.__webglTexture),Ge(ne,_),_.mipmaps&&_.mipmaps.length>0)for(let _e=0;_e<_.mipmaps.length;_e++)de(F.__webglFramebuffer[_e],M,_,s.COLOR_ATTACHMENT0,ne,_e);else de(F.__webglFramebuffer,M,_,s.COLOR_ATTACHMENT0,ne,0);m(_)&&u(ne),t.unbindTexture()}M.depthBuffer&&Ve(M)}function nt(M){const _=M.textures;for(let F=0,W=_.length;F<W;F++){const $=_[F];if(m($)){const z=b(M),xe=n.get($).__webglTexture;t.bindTexture(z,xe),u(z),t.unbindTexture()}}}const Ue=[],we=[];function me(M){if(M.samples>0){if(ge(M)===!1){const _=M.textures,F=M.width,W=M.height;let $=s.COLOR_BUFFER_BIT;const z=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,xe=n.get(M),ne=_.length>1;if(ne)for(let ve=0;ve<_.length;ve++)t.bindFramebuffer(s.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ve,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,xe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ve,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer);const _e=M.texture.mipmaps;_e&&_e.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,xe.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let ve=0;ve<_.length;ve++){if(M.resolveDepthBuffer&&(M.depthBuffer&&($|=s.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&($|=s.STENCIL_BUFFER_BIT)),ne){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,xe.__webglColorRenderbuffer[ve]);const ee=n.get(_[ve]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ee,0)}s.blitFramebuffer(0,0,F,W,0,0,F,W,$,s.NEAREST),l===!0&&(Ue.length=0,we.length=0,Ue.push(s.COLOR_ATTACHMENT0+ve),M.depthBuffer&&M.resolveDepthBuffer===!1&&(Ue.push(z),we.push(z),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,we)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ue))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ne)for(let ve=0;ve<_.length;ve++){t.bindFramebuffer(s.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ve,s.RENDERBUFFER,xe.__webglColorRenderbuffer[ve]);const ee=n.get(_[ve]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,xe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ve,s.TEXTURE_2D,ee,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&l){const _=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[_])}}}function it(M){return Math.min(i.maxSamples,M.samples)}function ge(M){const _=n.get(M);return M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Fe(M){const _=a.render.frame;h.get(M)!==_&&(h.set(M,_),M.update())}function gt(M,_){const F=M.colorSpace,W=M.format,$=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||F!==Si&&F!==bn&&(Xe.getTransfer(F)===je?(W!==Ht||$!==Yt)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),_}function ct(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(c.width=M.naturalWidth||M.width,c.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(c.width=M.displayWidth,c.height=M.displayHeight):(c.width=M.width,c.height=M.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=O,this.setTexture2D=V,this.setTexture2DArray=X,this.setTexture3D=j,this.setTextureCube=H,this.rebindTextures=St,this.setupRenderTarget=A,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=me,this.setupDepthRenderbuffer=Ve,this.setupFrameBufferTexture=de,this.useMultisampledRTT=ge}function dm(s,e){function t(n,i=bn){let r;const a=Xe.getTransfer(i);if(n===Yt)return s.UNSIGNED_BYTE;if(n===Ca)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Pa)return s.UNSIGNED_SHORT_5_5_5_1;if(n===cl)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===hl)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===ol)return s.BYTE;if(n===ll)return s.SHORT;if(n===Ii)return s.UNSIGNED_SHORT;if(n===Ra)return s.INT;if(n===qn)return s.UNSIGNED_INT;if(n===dn)return s.FLOAT;if(n===Gi)return s.HALF_FLOAT;if(n===ul)return s.ALPHA;if(n===dl)return s.RGB;if(n===Ht)return s.RGBA;if(n===Ni)return s.DEPTH_COMPONENT;if(n===Oi)return s.DEPTH_STENCIL;if(n===fl)return s.RED;if(n===Da)return s.RED_INTEGER;if(n===pl)return s.RG;if(n===La)return s.RG_INTEGER;if(n===Ia)return s.RGBA_INTEGER;if(n===xs||n===Es||n===ys||n===Ms)if(a===je)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===xs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Es)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ys)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ms)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===xs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Es)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ys)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ms)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Xr||n===qr||n===Yr||n===Kr)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Xr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===qr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Yr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Kr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===jr||n===$r||n===Zr)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===jr||n===$r)return a===je?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Zr)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Jr||n===Qr||n===ea||n===ta||n===na||n===ia||n===sa||n===ra||n===aa||n===oa||n===la||n===ca||n===ha||n===ua)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Jr)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Qr)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ea)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ta)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===na)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ia)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===sa)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ra)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===aa)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===oa)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===la)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ca)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ha)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ua)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===da||n===fa||n===pa)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===da)return a===je?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===fa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===pa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ma||n===ga||n===_a||n===va)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===ma)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ga)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===_a)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===va)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ui?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const fm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,pm=`
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

}`;class mm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Dl(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new mn({vertexShader:fm,fragmentShader:pm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ke(new zi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class gm extends Ei{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,p=null,f=null,g=null;const v=typeof XRWebGLBinding<"u",m=new mm,u={},b=t.getContextAttributes();let T=null,y=null;const C=[],w=[],R=new Pe;let L=null;const E=new qt;E.viewport=new lt;const x=new qt;x.viewport=new lt;const P=[E,x],O=new Nh;let k=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let Z=C[Y];return Z===void 0&&(Z=new dr,C[Y]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(Y){let Z=C[Y];return Z===void 0&&(Z=new dr,C[Y]=Z),Z.getGripSpace()},this.getHand=function(Y){let Z=C[Y];return Z===void 0&&(Z=new dr,C[Y]=Z),Z.getHandSpace()};function V(Y){const Z=w.indexOf(Y.inputSource);if(Z===-1)return;const de=C[Z];de!==void 0&&(de.update(Y.inputSource,Y.frame,c||a),de.dispatchEvent({type:Y.type,data:Y.inputSource}))}function X(){i.removeEventListener("select",V),i.removeEventListener("selectstart",V),i.removeEventListener("selectend",V),i.removeEventListener("squeeze",V),i.removeEventListener("squeezestart",V),i.removeEventListener("squeezeend",V),i.removeEventListener("end",X),i.removeEventListener("inputsourceschange",j);for(let Y=0;Y<C.length;Y++){const Z=w[Y];Z!==null&&(w[Y]=null,C[Y].disconnect(Z))}k=null,q=null,m.reset();for(const Y in u)delete u[Y];e.setRenderTarget(T),f=null,p=null,d=null,i=null,y=null,Ie.stop(),n.isPresenting=!1,e.setPixelRatio(L),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return p!==null?p:f},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(i,t)),d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(T=e.getRenderTarget(),i.addEventListener("select",V),i.addEventListener("selectstart",V),i.addEventListener("selectend",V),i.addEventListener("squeeze",V),i.addEventListener("squeezestart",V),i.addEventListener("squeezeend",V),i.addEventListener("end",X),i.addEventListener("inputsourceschange",j),b.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(R),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let de=null,Ce=null,ye=null;b.depth&&(ye=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=b.stencil?Oi:Ni,Ce=b.stencil?Ui:qn);const Ve={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:r};d=this.getBinding(),p=d.createProjectionLayer(Ve),i.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),y=new pn(p.textureWidth,p.textureHeight,{format:Ht,type:Yt,depthTexture:new Pl(p.textureWidth,p.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{const de={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,de),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new pn(f.framebufferWidth,f.framebufferHeight,{format:Ht,type:Yt,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Ie.setContext(i),Ie.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function j(Y){for(let Z=0;Z<Y.removed.length;Z++){const de=Y.removed[Z],Ce=w.indexOf(de);Ce>=0&&(w[Ce]=null,C[Ce].disconnect(de))}for(let Z=0;Z<Y.added.length;Z++){const de=Y.added[Z];let Ce=w.indexOf(de);if(Ce===-1){for(let Ve=0;Ve<C.length;Ve++)if(Ve>=w.length){w.push(de),Ce=Ve;break}else if(w[Ve]===null){w[Ve]=de,Ce=Ve;break}if(Ce===-1)break}const ye=C[Ce];ye&&ye.connect(de)}}const H=new I,se=new I;function ce(Y,Z,de){H.setFromMatrixPosition(Z.matrixWorld),se.setFromMatrixPosition(de.matrixWorld);const Ce=H.distanceTo(se),ye=Z.projectionMatrix.elements,Ve=de.projectionMatrix.elements,St=ye[14]/(ye[10]-1),A=ye[14]/(ye[10]+1),nt=(ye[9]+1)/ye[5],Ue=(ye[9]-1)/ye[5],we=(ye[8]-1)/ye[0],me=(Ve[8]+1)/Ve[0],it=St*we,ge=St*me,Fe=Ce/(-we+me),gt=Fe*-we;if(Z.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(gt),Y.translateZ(Fe),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),ye[10]===-1)Y.projectionMatrix.copy(Z.projectionMatrix),Y.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const ct=St+Fe,M=A+Fe,_=it-gt,F=ge+(Ce-gt),W=nt*A/M*ct,$=Ue*A/M*ct;Y.projectionMatrix.makePerspective(_,F,W,$,ct,M),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function Ee(Y,Z){Z===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(Z.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;let Z=Y.near,de=Y.far;m.texture!==null&&(m.depthNear>0&&(Z=m.depthNear),m.depthFar>0&&(de=m.depthFar)),O.near=x.near=E.near=Z,O.far=x.far=E.far=de,(k!==O.near||q!==O.far)&&(i.updateRenderState({depthNear:O.near,depthFar:O.far}),k=O.near,q=O.far),O.layers.mask=Y.layers.mask|6,E.layers.mask=O.layers.mask&3,x.layers.mask=O.layers.mask&5;const Ce=Y.parent,ye=O.cameras;Ee(O,Ce);for(let Ve=0;Ve<ye.length;Ve++)Ee(ye[Ve],Ce);ye.length===2?ce(O,E,x):O.projectionMatrix.copy(E.projectionMatrix),Ge(Y,O,Ce)};function Ge(Y,Z,de){de===null?Y.matrix.copy(Z.matrixWorld):(Y.matrix.copy(de.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(Z.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(Z.projectionMatrix),Y.projectionMatrixInverse.copy(Z.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=xa*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(p===null&&f===null))return l},this.setFoveation=function(Y){l=Y,p!==null&&(p.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function(Y){return u[Y]};let Ze=null;function Qe(Y,Z){if(h=Z.getViewerPose(c||a),g=Z,h!==null){const de=h.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let Ce=!1;de.length!==O.cameras.length&&(O.cameras.length=0,Ce=!0);for(let A=0;A<de.length;A++){const nt=de[A];let Ue=null;if(f!==null)Ue=f.getViewport(nt);else{const me=d.getViewSubImage(p,nt);Ue=me.viewport,A===0&&(e.setRenderTargetTextures(y,me.colorTexture,me.depthStencilTexture),e.setRenderTarget(y))}let we=P[A];we===void 0&&(we=new qt,we.layers.enable(A),we.viewport=new lt,P[A]=we),we.matrix.fromArray(nt.transform.matrix),we.matrix.decompose(we.position,we.quaternion,we.scale),we.projectionMatrix.fromArray(nt.projectionMatrix),we.projectionMatrixInverse.copy(we.projectionMatrix).invert(),we.viewport.set(Ue.x,Ue.y,Ue.width,Ue.height),A===0&&(O.matrix.copy(we.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Ce===!0&&O.cameras.push(we)}const ye=i.enabledFeatures;if(ye&&ye.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&v){d=n.getBinding();const A=d.getDepthInformation(de[0]);A&&A.isValid&&A.texture&&m.init(A,i.renderState)}if(ye&&ye.includes("camera-access")&&v){e.state.unbindTexture(),d=n.getBinding();for(let A=0;A<de.length;A++){const nt=de[A].camera;if(nt){let Ue=u[nt];Ue||(Ue=new Dl,u[nt]=Ue);const we=d.getCameraImage(nt);Ue.sourceTexture=we}}}}for(let de=0;de<C.length;de++){const Ce=w[de],ye=C[de];Ce!==null&&ye!==void 0&&ye.update(Ce,Z,c||a)}Ze&&Ze(Y,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),g=null}const Ie=new Il;Ie.setAnimationLoop(Qe),this.setAnimationLoop=function(Y){Ze=Y},this.dispose=function(){}}}const Bn=new en,_m=new at;function vm(s,e){function t(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function n(m,u){u.color.getRGB(m.fogColor.value,Tl(s)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function i(m,u,b,T,y){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(m,u):u.isMeshToonMaterial?(r(m,u),d(m,u)):u.isMeshPhongMaterial?(r(m,u),h(m,u)):u.isMeshStandardMaterial?(r(m,u),p(m,u),u.isMeshPhysicalMaterial&&f(m,u,y)):u.isMeshMatcapMaterial?(r(m,u),g(m,u)):u.isMeshDepthMaterial?r(m,u):u.isMeshDistanceMaterial?(r(m,u),v(m,u)):u.isMeshNormalMaterial?r(m,u):u.isLineBasicMaterial?(a(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?l(m,u,b,T):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,t(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===Ct&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,t(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===Ct&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,t(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,t(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const b=e.get(u),T=b.envMap,y=b.envMapRotation;T&&(m.envMap.value=T,Bn.copy(y),Bn.x*=-1,Bn.y*=-1,Bn.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Bn.y*=-1,Bn.z*=-1),m.envMapRotation.value.setFromMatrix4(_m.makeRotationFromEuler(Bn)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,m.aoMapTransform))}function a(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,b,T){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*b,m.scale.value=T*.5,u.map&&(m.map.value=u.map,t(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function d(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function p(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function f(m,u,b){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Ct&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,u){u.matcap&&(m.matcap.value=u.matcap)}function v(m,u){const b=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Sm(s,e,t,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,T){const y=T.program;n.uniformBlockBinding(b,y)}function c(b,T){let y=i[b.id];y===void 0&&(g(b),y=h(b),i[b.id]=y,b.addEventListener("dispose",m));const C=T.program;n.updateUBOMapping(b,C);const w=e.render.frame;r[b.id]!==w&&(p(b),r[b.id]=w)}function h(b){const T=d();b.__bindingPointIndex=T;const y=s.createBuffer(),C=b.__size,w=b.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,C,w),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,T,y),y}function d(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(b){const T=i[b.id],y=b.uniforms,C=b.__cache;s.bindBuffer(s.UNIFORM_BUFFER,T);for(let w=0,R=y.length;w<R;w++){const L=Array.isArray(y[w])?y[w]:[y[w]];for(let E=0,x=L.length;E<x;E++){const P=L[E];if(f(P,w,E,C)===!0){const O=P.__offset,k=Array.isArray(P.value)?P.value:[P.value];let q=0;for(let V=0;V<k.length;V++){const X=k[V],j=v(X);typeof X=="number"||typeof X=="boolean"?(P.__data[0]=X,s.bufferSubData(s.UNIFORM_BUFFER,O+q,P.__data)):X.isMatrix3?(P.__data[0]=X.elements[0],P.__data[1]=X.elements[1],P.__data[2]=X.elements[2],P.__data[3]=0,P.__data[4]=X.elements[3],P.__data[5]=X.elements[4],P.__data[6]=X.elements[5],P.__data[7]=0,P.__data[8]=X.elements[6],P.__data[9]=X.elements[7],P.__data[10]=X.elements[8],P.__data[11]=0):(X.toArray(P.__data,q),q+=j.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,O,P.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(b,T,y,C){const w=b.value,R=T+"_"+y;if(C[R]===void 0)return typeof w=="number"||typeof w=="boolean"?C[R]=w:C[R]=w.clone(),!0;{const L=C[R];if(typeof w=="number"||typeof w=="boolean"){if(L!==w)return C[R]=w,!0}else if(L.equals(w)===!1)return L.copy(w),!0}return!1}function g(b){const T=b.uniforms;let y=0;const C=16;for(let R=0,L=T.length;R<L;R++){const E=Array.isArray(T[R])?T[R]:[T[R]];for(let x=0,P=E.length;x<P;x++){const O=E[x],k=Array.isArray(O.value)?O.value:[O.value];for(let q=0,V=k.length;q<V;q++){const X=k[q],j=v(X),H=y%C,se=H%j.boundary,ce=H+se;y+=se,ce!==0&&C-ce<j.storage&&(y+=C-ce),O.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=y,y+=j.storage}}}const w=y%C;return w>0&&(y+=C-w),b.__size=y,b.__cache={},this}function v(b){const T={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(T.boundary=4,T.storage=4):b.isVector2?(T.boundary=8,T.storage=8):b.isVector3||b.isColor?(T.boundary=16,T.storage=12):b.isVector4?(T.boundary=16,T.storage=16):b.isMatrix3?(T.boundary=48,T.storage=48):b.isMatrix4?(T.boundary=64,T.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),T}function m(b){const T=b.target;T.removeEventListener("dispose",m);const y=a.indexOf(T.__bindingPointIndex);a.splice(y,1),s.deleteBuffer(i[T.id]),delete i[T.id],delete r[T.id]}function u(){for(const b in i)s.deleteBuffer(i[b]);a=[],i={},r={}}return{bind:l,update:c,dispose:u}}class xm{constructor(e={}){const{canvas:t=Zc(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:p=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,u=null;const b=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=wn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let C=!1;this._outputColorSpace=Bt;let w=0,R=0,L=null,E=-1,x=null;const P=new lt,O=new lt;let k=null;const q=new Le(0);let V=0,X=t.width,j=t.height,H=1,se=null,ce=null;const Ee=new lt(0,0,X,j),Ge=new lt(0,0,X,j);let Ze=!1;const Qe=new Na;let Ie=!1,Y=!1;const Z=new at,de=new I,Ce=new lt,ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ve=!1;function St(){return L===null?H:1}let A=n;function nt(S,U){return t.getContext(S,U)}try{const S={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Aa}`),t.addEventListener("webglcontextlost",ie,!1),t.addEventListener("webglcontextrestored",ue,!1),t.addEventListener("webglcontextcreationerror",J,!1),A===null){const U="webgl2";if(A=nt(U,S),A===null)throw nt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Ue,we,me,it,ge,Fe,gt,ct,M,_,F,W,$,z,xe,ne,_e,ve,ee,le,Ae,Se,ae,Ne;function D(){Ue=new Pf(A),Ue.init(),Se=new dm(A,Ue),we=new Mf(A,Ue,e,Se),me=new hm(A,Ue),we.reversedDepthBuffer&&p&&me.buffers.depth.setReversed(!0),it=new If(A),ge=new Zp,Fe=new um(A,Ue,me,ge,we,Se,it),gt=new Tf(y),ct=new Cf(y),M=new Bh(A),ae=new Ef(A,M),_=new Df(A,M,it,ae),F=new Nf(A,_,M,it),ee=new Uf(A,we,Fe),ne=new bf(ge),W=new $p(y,gt,ct,Ue,we,ae,ne),$=new vm(y,ge),z=new Qp,xe=new rm(Ue),ve=new xf(y,gt,ct,me,F,f,l),_e=new lm(y,F,we),Ne=new Sm(A,it,we,me),le=new yf(A,Ue,it),Ae=new Lf(A,Ue,it),it.programs=W.programs,y.capabilities=we,y.extensions=Ue,y.properties=ge,y.renderLists=z,y.shadowMap=_e,y.state=me,y.info=it}D();const te=new gm(y,A);this.xr=te,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){const S=Ue.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Ue.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(S){S!==void 0&&(H=S,this.setSize(X,j,!1))},this.getSize=function(S){return S.set(X,j)},this.setSize=function(S,U,B=!0){if(te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=S,j=U,t.width=Math.floor(S*H),t.height=Math.floor(U*H),B===!0&&(t.style.width=S+"px",t.style.height=U+"px"),this.setViewport(0,0,S,U)},this.getDrawingBufferSize=function(S){return S.set(X*H,j*H).floor()},this.setDrawingBufferSize=function(S,U,B){X=S,j=U,H=B,t.width=Math.floor(S*B),t.height=Math.floor(U*B),this.setViewport(0,0,S,U)},this.getCurrentViewport=function(S){return S.copy(P)},this.getViewport=function(S){return S.copy(Ee)},this.setViewport=function(S,U,B,G){S.isVector4?Ee.set(S.x,S.y,S.z,S.w):Ee.set(S,U,B,G),me.viewport(P.copy(Ee).multiplyScalar(H).round())},this.getScissor=function(S){return S.copy(Ge)},this.setScissor=function(S,U,B,G){S.isVector4?Ge.set(S.x,S.y,S.z,S.w):Ge.set(S,U,B,G),me.scissor(O.copy(Ge).multiplyScalar(H).round())},this.getScissorTest=function(){return Ze},this.setScissorTest=function(S){me.setScissorTest(Ze=S)},this.setOpaqueSort=function(S){se=S},this.setTransparentSort=function(S){ce=S},this.getClearColor=function(S){return S.copy(ve.getClearColor())},this.setClearColor=function(){ve.setClearColor(...arguments)},this.getClearAlpha=function(){return ve.getClearAlpha()},this.setClearAlpha=function(){ve.setClearAlpha(...arguments)},this.clear=function(S=!0,U=!0,B=!0){let G=0;if(S){let N=!1;if(L!==null){const Q=L.texture.format;N=Q===Ia||Q===La||Q===Da}if(N){const Q=L.texture.type,oe=Q===Yt||Q===qn||Q===Ii||Q===Ui||Q===Ca||Q===Pa,fe=ve.getClearColor(),he=ve.getClearAlpha(),Te=fe.r,Re=fe.g,Me=fe.b;oe?(g[0]=Te,g[1]=Re,g[2]=Me,g[3]=he,A.clearBufferuiv(A.COLOR,0,g)):(v[0]=Te,v[1]=Re,v[2]=Me,v[3]=he,A.clearBufferiv(A.COLOR,0,v))}else G|=A.COLOR_BUFFER_BIT}U&&(G|=A.DEPTH_BUFFER_BIT),B&&(G|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ie,!1),t.removeEventListener("webglcontextrestored",ue,!1),t.removeEventListener("webglcontextcreationerror",J,!1),ve.dispose(),z.dispose(),xe.dispose(),ge.dispose(),gt.dispose(),ct.dispose(),F.dispose(),ae.dispose(),Ne.dispose(),W.dispose(),te.dispose(),te.removeEventListener("sessionstart",Kt),te.removeEventListener("sessionend",Ga),Pn.stop()};function ie(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function ue(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const S=it.autoReset,U=_e.enabled,B=_e.autoUpdate,G=_e.needsUpdate,N=_e.type;D(),it.autoReset=S,_e.enabled=U,_e.autoUpdate=B,_e.needsUpdate=G,_e.type=N}function J(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function K(S){const U=S.target;U.removeEventListener("dispose",K),pe(U)}function pe(S){De(S),ge.remove(S)}function De(S){const U=ge.get(S).programs;U!==void 0&&(U.forEach(function(B){W.releaseProgram(B)}),S.isShaderMaterial&&W.releaseShaderCache(S))}this.renderBufferDirect=function(S,U,B,G,N,Q){U===null&&(U=ye);const oe=N.isMesh&&N.matrixWorld.determinant()<0,fe=ic(S,U,B,G,N);me.setMaterial(G,oe);let he=B.index,Te=1;if(G.wireframe===!0){if(he=_.getWireframeAttribute(B),he===void 0)return;Te=2}const Re=B.drawRange,Me=B.attributes.position;let He=Re.start*Te,Ke=(Re.start+Re.count)*Te;Q!==null&&(He=Math.max(He,Q.start*Te),Ke=Math.min(Ke,(Q.start+Q.count)*Te)),he!==null?(He=Math.max(He,0),Ke=Math.min(Ke,he.count)):Me!=null&&(He=Math.max(He,0),Ke=Math.min(Ke,Me.count));const ot=Ke-He;if(ot<0||ot===1/0)return;ae.setup(N,G,fe,B,he);let tt,Je=le;if(he!==null&&(tt=M.get(he),Je=Ae,Je.setIndex(tt)),N.isMesh)G.wireframe===!0?(me.setLineWidth(G.wireframeLinewidth*St()),Je.setMode(A.LINES)):Je.setMode(A.TRIANGLES);else if(N.isLine){let be=G.linewidth;be===void 0&&(be=1),me.setLineWidth(be*St()),N.isLineSegments?Je.setMode(A.LINES):N.isLineLoop?Je.setMode(A.LINE_LOOP):Je.setMode(A.LINE_STRIP)}else N.isPoints?Je.setMode(A.POINTS):N.isSprite&&Je.setMode(A.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Fi("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Je.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Ue.get("WEBGL_multi_draw"))Je.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const be=N._multiDrawStarts,st=N._multiDrawCounts,We=N._multiDrawCount,Dt=he?M.get(he).bytesPerElement:1,Kn=ge.get(G).currentProgram.getUniforms();for(let Lt=0;Lt<We;Lt++)Kn.setValue(A,"_gl_DrawID",Lt),Je.render(be[Lt]/Dt,st[Lt])}else if(N.isInstancedMesh)Je.renderInstances(He,ot,N.count);else if(B.isInstancedBufferGeometry){const be=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,st=Math.min(B.instanceCount,be);Je.renderInstances(He,ot,st)}else Je.render(He,ot)};function et(S,U,B){S.transparent===!0&&S.side===$t&&S.forceSinglePass===!1?(S.side=Ct,S.needsUpdate=!0,Xi(S,U,B),S.side=Cn,S.needsUpdate=!0,Xi(S,U,B),S.side=$t):Xi(S,U,B)}this.compile=function(S,U,B=null){B===null&&(B=S),u=xe.get(B),u.init(U),T.push(u),B.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(u.pushLight(N),N.castShadow&&u.pushShadow(N))}),S!==B&&S.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(u.pushLight(N),N.castShadow&&u.pushShadow(N))}),u.setupLights();const G=new Set;return S.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const Q=N.material;if(Q)if(Array.isArray(Q))for(let oe=0;oe<Q.length;oe++){const fe=Q[oe];et(fe,B,N),G.add(fe)}else et(Q,B,N),G.add(Q)}),u=T.pop(),G},this.compileAsync=function(S,U,B=null){const G=this.compile(S,U,B);return new Promise(N=>{function Q(){if(G.forEach(function(oe){ge.get(oe).currentProgram.isReady()&&G.delete(oe)}),G.size===0){N(S);return}setTimeout(Q,10)}Ue.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let qe=null;function tn(S){qe&&qe(S)}function Kt(){Pn.stop()}function Ga(){Pn.start()}const Pn=new Il;Pn.setAnimationLoop(tn),typeof self<"u"&&Pn.setContext(self),this.setAnimationLoop=function(S){qe=S,te.setAnimationLoop(S),S===null?Pn.stop():Pn.start()},te.addEventListener("sessionstart",Kt),te.addEventListener("sessionend",Ga),this.render=function(S,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),te.enabled===!0&&te.isPresenting===!0&&(te.cameraAutoUpdate===!0&&te.updateCamera(U),U=te.getCamera()),S.isScene===!0&&S.onBeforeRender(y,S,U,L),u=xe.get(S,T.length),u.init(U),T.push(u),Z.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Qe.setFromProjectionMatrix(Z,Qt,U.reversedDepth),Y=this.localClippingEnabled,Ie=ne.init(this.clippingPlanes,Y),m=z.get(S,b.length),m.init(),b.push(m),te.enabled===!0&&te.isPresenting===!0){const Q=y.xr.getDepthSensingMesh();Q!==null&&Hs(Q,U,-1/0,y.sortObjects)}Hs(S,U,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(se,ce),Ve=te.enabled===!1||te.isPresenting===!1||te.hasDepthSensing()===!1,Ve&&ve.addToRenderList(m,S),this.info.render.frame++,Ie===!0&&ne.beginShadows();const B=u.state.shadowsArray;_e.render(B,S,U),Ie===!0&&ne.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=m.opaque,N=m.transmissive;if(u.setupLights(),U.isArrayCamera){const Q=U.cameras;if(N.length>0)for(let oe=0,fe=Q.length;oe<fe;oe++){const he=Q[oe];Ha(G,N,S,he)}Ve&&ve.render(S);for(let oe=0,fe=Q.length;oe<fe;oe++){const he=Q[oe];ka(m,S,he,he.viewport)}}else N.length>0&&Ha(G,N,S,U),Ve&&ve.render(S),ka(m,S,U);L!==null&&R===0&&(Fe.updateMultisampleRenderTarget(L),Fe.updateRenderTargetMipmap(L)),S.isScene===!0&&S.onAfterRender(y,S,U),ae.resetDefaultState(),E=-1,x=null,T.pop(),T.length>0?(u=T[T.length-1],Ie===!0&&ne.setGlobalState(y.clippingPlanes,u.state.camera)):u=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function Hs(S,U,B,G){if(S.visible===!1)return;if(S.layers.test(U.layers)){if(S.isGroup)B=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(U);else if(S.isLight)u.pushLight(S),S.castShadow&&u.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Qe.intersectsSprite(S)){G&&Ce.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Z);const oe=F.update(S),fe=S.material;fe.visible&&m.push(S,oe,fe,B,Ce.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||Qe.intersectsObject(S))){const oe=F.update(S),fe=S.material;if(G&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ce.copy(S.boundingSphere.center)):(oe.boundingSphere===null&&oe.computeBoundingSphere(),Ce.copy(oe.boundingSphere.center)),Ce.applyMatrix4(S.matrixWorld).applyMatrix4(Z)),Array.isArray(fe)){const he=oe.groups;for(let Te=0,Re=he.length;Te<Re;Te++){const Me=he[Te],He=fe[Me.materialIndex];He&&He.visible&&m.push(S,oe,He,B,Ce.z,Me)}}else fe.visible&&m.push(S,oe,fe,B,Ce.z,null)}}const Q=S.children;for(let oe=0,fe=Q.length;oe<fe;oe++)Hs(Q[oe],U,B,G)}function ka(S,U,B,G){const N=S.opaque,Q=S.transmissive,oe=S.transparent;u.setupLightsView(B),Ie===!0&&ne.setGlobalState(y.clippingPlanes,B),G&&me.viewport(P.copy(G)),N.length>0&&Wi(N,U,B),Q.length>0&&Wi(Q,U,B),oe.length>0&&Wi(oe,U,B),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function Ha(S,U,B,G){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[G.id]===void 0&&(u.state.transmissionRenderTarget[G.id]=new pn(1,1,{generateMipmaps:!0,type:Ue.has("EXT_color_buffer_half_float")||Ue.has("EXT_color_buffer_float")?Gi:Yt,minFilter:Xn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xe.workingColorSpace}));const Q=u.state.transmissionRenderTarget[G.id],oe=G.viewport||P;Q.setSize(oe.z*y.transmissionResolutionScale,oe.w*y.transmissionResolutionScale);const fe=y.getRenderTarget(),he=y.getActiveCubeFace(),Te=y.getActiveMipmapLevel();y.setRenderTarget(Q),y.getClearColor(q),V=y.getClearAlpha(),V<1&&y.setClearColor(16777215,.5),y.clear(),Ve&&ve.render(B);const Re=y.toneMapping;y.toneMapping=wn;const Me=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),u.setupLightsView(G),Ie===!0&&ne.setGlobalState(y.clippingPlanes,G),Wi(S,B,G),Fe.updateMultisampleRenderTarget(Q),Fe.updateRenderTargetMipmap(Q),Ue.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let Ke=0,ot=U.length;Ke<ot;Ke++){const tt=U[Ke],Je=tt.object,be=tt.geometry,st=tt.material,We=tt.group;if(st.side===$t&&Je.layers.test(G.layers)){const Dt=st.side;st.side=Ct,st.needsUpdate=!0,za(Je,B,G,be,st,We),st.side=Dt,st.needsUpdate=!0,He=!0}}He===!0&&(Fe.updateMultisampleRenderTarget(Q),Fe.updateRenderTargetMipmap(Q))}y.setRenderTarget(fe,he,Te),y.setClearColor(q,V),Me!==void 0&&(G.viewport=Me),y.toneMapping=Re}function Wi(S,U,B){const G=U.isScene===!0?U.overrideMaterial:null;for(let N=0,Q=S.length;N<Q;N++){const oe=S[N],fe=oe.object,he=oe.geometry,Te=oe.group;let Re=oe.material;Re.allowOverride===!0&&G!==null&&(Re=G),fe.layers.test(B.layers)&&za(fe,U,B,he,Re,Te)}}function za(S,U,B,G,N,Q){S.onBeforeRender(y,U,B,G,N,Q),S.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),N.onBeforeRender(y,U,B,G,S,Q),N.transparent===!0&&N.side===$t&&N.forceSinglePass===!1?(N.side=Ct,N.needsUpdate=!0,y.renderBufferDirect(B,U,G,N,S,Q),N.side=Cn,N.needsUpdate=!0,y.renderBufferDirect(B,U,G,N,S,Q),N.side=$t):y.renderBufferDirect(B,U,G,N,S,Q),S.onAfterRender(y,U,B,G,N,Q)}function Xi(S,U,B){U.isScene!==!0&&(U=ye);const G=ge.get(S),N=u.state.lights,Q=u.state.shadowsArray,oe=N.state.version,fe=W.getParameters(S,N.state,Q,U,B),he=W.getProgramCacheKey(fe);let Te=G.programs;G.environment=S.isMeshStandardMaterial?U.environment:null,G.fog=U.fog,G.envMap=(S.isMeshStandardMaterial?ct:gt).get(S.envMap||G.environment),G.envMapRotation=G.environment!==null&&S.envMap===null?U.environmentRotation:S.envMapRotation,Te===void 0&&(S.addEventListener("dispose",K),Te=new Map,G.programs=Te);let Re=Te.get(he);if(Re!==void 0){if(G.currentProgram===Re&&G.lightsStateVersion===oe)return Wa(S,fe),Re}else fe.uniforms=W.getUniforms(S),S.onBeforeCompile(fe,y),Re=W.acquireProgram(fe,he),Te.set(he,Re),G.uniforms=fe.uniforms;const Me=G.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Me.clippingPlanes=ne.uniform),Wa(S,fe),G.needsLights=rc(S),G.lightsStateVersion=oe,G.needsLights&&(Me.ambientLightColor.value=N.state.ambient,Me.lightProbe.value=N.state.probe,Me.directionalLights.value=N.state.directional,Me.directionalLightShadows.value=N.state.directionalShadow,Me.spotLights.value=N.state.spot,Me.spotLightShadows.value=N.state.spotShadow,Me.rectAreaLights.value=N.state.rectArea,Me.ltc_1.value=N.state.rectAreaLTC1,Me.ltc_2.value=N.state.rectAreaLTC2,Me.pointLights.value=N.state.point,Me.pointLightShadows.value=N.state.pointShadow,Me.hemisphereLights.value=N.state.hemi,Me.directionalShadowMap.value=N.state.directionalShadowMap,Me.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Me.spotShadowMap.value=N.state.spotShadowMap,Me.spotLightMatrix.value=N.state.spotLightMatrix,Me.spotLightMap.value=N.state.spotLightMap,Me.pointShadowMap.value=N.state.pointShadowMap,Me.pointShadowMatrix.value=N.state.pointShadowMatrix),G.currentProgram=Re,G.uniformsList=null,Re}function Va(S){if(S.uniformsList===null){const U=S.currentProgram.getUniforms();S.uniformsList=bs.seqWithValue(U.seq,S.uniforms)}return S.uniformsList}function Wa(S,U){const B=ge.get(S);B.outputColorSpace=U.outputColorSpace,B.batching=U.batching,B.batchingColor=U.batchingColor,B.instancing=U.instancing,B.instancingColor=U.instancingColor,B.instancingMorph=U.instancingMorph,B.skinning=U.skinning,B.morphTargets=U.morphTargets,B.morphNormals=U.morphNormals,B.morphColors=U.morphColors,B.morphTargetsCount=U.morphTargetsCount,B.numClippingPlanes=U.numClippingPlanes,B.numIntersection=U.numClipIntersection,B.vertexAlphas=U.vertexAlphas,B.vertexTangents=U.vertexTangents,B.toneMapping=U.toneMapping}function ic(S,U,B,G,N){U.isScene!==!0&&(U=ye),Fe.resetTextureUnits();const Q=U.fog,oe=G.isMeshStandardMaterial?U.environment:null,fe=L===null?y.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Si,he=(G.isMeshStandardMaterial?ct:gt).get(G.envMap||oe),Te=G.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Re=!!B.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Me=!!B.morphAttributes.position,He=!!B.morphAttributes.normal,Ke=!!B.morphAttributes.color;let ot=wn;G.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(ot=y.toneMapping);const tt=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Je=tt!==void 0?tt.length:0,be=ge.get(G),st=u.state.lights;if(Ie===!0&&(Y===!0||S!==x)){const yt=S===x&&G.id===E;ne.setState(G,S,yt)}let We=!1;G.version===be.__version?(be.needsLights&&be.lightsStateVersion!==st.state.version||be.outputColorSpace!==fe||N.isBatchedMesh&&be.batching===!1||!N.isBatchedMesh&&be.batching===!0||N.isBatchedMesh&&be.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&be.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&be.instancing===!1||!N.isInstancedMesh&&be.instancing===!0||N.isSkinnedMesh&&be.skinning===!1||!N.isSkinnedMesh&&be.skinning===!0||N.isInstancedMesh&&be.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&be.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&be.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&be.instancingMorph===!1&&N.morphTexture!==null||be.envMap!==he||G.fog===!0&&be.fog!==Q||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==ne.numPlanes||be.numIntersection!==ne.numIntersection)||be.vertexAlphas!==Te||be.vertexTangents!==Re||be.morphTargets!==Me||be.morphNormals!==He||be.morphColors!==Ke||be.toneMapping!==ot||be.morphTargetsCount!==Je)&&(We=!0):(We=!0,be.__version=G.version);let Dt=be.currentProgram;We===!0&&(Dt=Xi(G,U,N));let Kn=!1,Lt=!1,bi=!1;const rt=Dt.getUniforms(),Nt=be.uniforms;if(me.useProgram(Dt.program)&&(Kn=!0,Lt=!0,bi=!0),G.id!==E&&(E=G.id,Lt=!0),Kn||x!==S){me.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),rt.setValue(A,"projectionMatrix",S.projectionMatrix),rt.setValue(A,"viewMatrix",S.matrixWorldInverse);const wt=rt.map.cameraPosition;wt!==void 0&&wt.setValue(A,de.setFromMatrixPosition(S.matrixWorld)),we.logarithmicDepthBuffer&&rt.setValue(A,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&rt.setValue(A,"isOrthographic",S.isOrthographicCamera===!0),x!==S&&(x=S,Lt=!0,bi=!0)}if(N.isSkinnedMesh){rt.setOptional(A,N,"bindMatrix"),rt.setOptional(A,N,"bindMatrixInverse");const yt=N.skeleton;yt&&(yt.boneTexture===null&&yt.computeBoneTexture(),rt.setValue(A,"boneTexture",yt.boneTexture,Fe))}N.isBatchedMesh&&(rt.setOptional(A,N,"batchingTexture"),rt.setValue(A,"batchingTexture",N._matricesTexture,Fe),rt.setOptional(A,N,"batchingIdTexture"),rt.setValue(A,"batchingIdTexture",N._indirectTexture,Fe),rt.setOptional(A,N,"batchingColorTexture"),N._colorsTexture!==null&&rt.setValue(A,"batchingColorTexture",N._colorsTexture,Fe));const Ot=B.morphAttributes;if((Ot.position!==void 0||Ot.normal!==void 0||Ot.color!==void 0)&&ee.update(N,B,Dt),(Lt||be.receiveShadow!==N.receiveShadow)&&(be.receiveShadow=N.receiveShadow,rt.setValue(A,"receiveShadow",N.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Nt.envMap.value=he,Nt.flipEnvMap.value=he.isCubeTexture&&he.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&U.environment!==null&&(Nt.envMapIntensity.value=U.environmentIntensity),Lt&&(rt.setValue(A,"toneMappingExposure",y.toneMappingExposure),be.needsLights&&sc(Nt,bi),Q&&G.fog===!0&&$.refreshFogUniforms(Nt,Q),$.refreshMaterialUniforms(Nt,G,H,j,u.state.transmissionRenderTarget[S.id]),bs.upload(A,Va(be),Nt,Fe)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(bs.upload(A,Va(be),Nt,Fe),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&rt.setValue(A,"center",N.center),rt.setValue(A,"modelViewMatrix",N.modelViewMatrix),rt.setValue(A,"normalMatrix",N.normalMatrix),rt.setValue(A,"modelMatrix",N.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const yt=G.uniformsGroups;for(let wt=0,zs=yt.length;wt<zs;wt++){const Dn=yt[wt];Ne.update(Dn,Dt),Ne.bind(Dn,Dt)}}return Dt}function sc(S,U){S.ambientLightColor.needsUpdate=U,S.lightProbe.needsUpdate=U,S.directionalLights.needsUpdate=U,S.directionalLightShadows.needsUpdate=U,S.pointLights.needsUpdate=U,S.pointLightShadows.needsUpdate=U,S.spotLights.needsUpdate=U,S.spotLightShadows.needsUpdate=U,S.rectAreaLights.needsUpdate=U,S.hemisphereLights.needsUpdate=U}function rc(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(S,U,B){const G=ge.get(S);G.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),ge.get(S.texture).__webglTexture=U,ge.get(S.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:B,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,U){const B=ge.get(S);B.__webglFramebuffer=U,B.__useDefaultFramebuffer=U===void 0};const ac=A.createFramebuffer();this.setRenderTarget=function(S,U=0,B=0){L=S,w=U,R=B;let G=!0,N=null,Q=!1,oe=!1;if(S){const he=ge.get(S);if(he.__useDefaultFramebuffer!==void 0)me.bindFramebuffer(A.FRAMEBUFFER,null),G=!1;else if(he.__webglFramebuffer===void 0)Fe.setupRenderTarget(S);else if(he.__hasExternalTextures)Fe.rebindTextures(S,ge.get(S.texture).__webglTexture,ge.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Me=S.depthTexture;if(he.__boundDepthTexture!==Me){if(Me!==null&&ge.has(Me)&&(S.width!==Me.image.width||S.height!==Me.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Fe.setupDepthRenderbuffer(S)}}const Te=S.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(oe=!0);const Re=ge.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Re[U])?N=Re[U][B]:N=Re[U],Q=!0):S.samples>0&&Fe.useMultisampledRTT(S)===!1?N=ge.get(S).__webglMultisampledFramebuffer:Array.isArray(Re)?N=Re[B]:N=Re,P.copy(S.viewport),O.copy(S.scissor),k=S.scissorTest}else P.copy(Ee).multiplyScalar(H).floor(),O.copy(Ge).multiplyScalar(H).floor(),k=Ze;if(B!==0&&(N=ac),me.bindFramebuffer(A.FRAMEBUFFER,N)&&G&&me.drawBuffers(S,N),me.viewport(P),me.scissor(O),me.setScissorTest(k),Q){const he=ge.get(S.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+U,he.__webglTexture,B)}else if(oe){const he=U;for(let Te=0;Te<S.textures.length;Te++){const Re=ge.get(S.textures[Te]);A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0+Te,Re.__webglTexture,B,he)}}else if(S!==null&&B!==0){const he=ge.get(S.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,he.__webglTexture,B)}E=-1},this.readRenderTargetPixels=function(S,U,B,G,N,Q,oe,fe=0){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let he=ge.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&oe!==void 0&&(he=he[oe]),he){me.bindFramebuffer(A.FRAMEBUFFER,he);try{const Te=S.textures[fe],Re=Te.format,Me=Te.type;if(!we.textureFormatReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!we.textureTypeReadable(Me)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=S.width-G&&B>=0&&B<=S.height-N&&(S.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+fe),A.readPixels(U,B,G,N,Se.convert(Re),Se.convert(Me),Q))}finally{const Te=L!==null?ge.get(L).__webglFramebuffer:null;me.bindFramebuffer(A.FRAMEBUFFER,Te)}}},this.readRenderTargetPixelsAsync=async function(S,U,B,G,N,Q,oe,fe=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let he=ge.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&oe!==void 0&&(he=he[oe]),he)if(U>=0&&U<=S.width-G&&B>=0&&B<=S.height-N){me.bindFramebuffer(A.FRAMEBUFFER,he);const Te=S.textures[fe],Re=Te.format,Me=Te.type;if(!we.textureFormatReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!we.textureTypeReadable(Me))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const He=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,He),A.bufferData(A.PIXEL_PACK_BUFFER,Q.byteLength,A.STREAM_READ),S.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+fe),A.readPixels(U,B,G,N,Se.convert(Re),Se.convert(Me),0);const Ke=L!==null?ge.get(L).__webglFramebuffer:null;me.bindFramebuffer(A.FRAMEBUFFER,Ke);const ot=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await Jc(A,ot,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,He),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,Q),A.deleteBuffer(He),A.deleteSync(ot),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,U=null,B=0){const G=Math.pow(2,-B),N=Math.floor(S.image.width*G),Q=Math.floor(S.image.height*G),oe=U!==null?U.x:0,fe=U!==null?U.y:0;Fe.setTexture2D(S,0),A.copyTexSubImage2D(A.TEXTURE_2D,B,0,0,oe,fe,N,Q),me.unbindTexture()};const oc=A.createFramebuffer(),lc=A.createFramebuffer();this.copyTextureToTexture=function(S,U,B=null,G=null,N=0,Q=null){Q===null&&(N!==0?(Fi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Q=N,N=0):Q=0);let oe,fe,he,Te,Re,Me,He,Ke,ot;const tt=S.isCompressedTexture?S.mipmaps[Q]:S.image;if(B!==null)oe=B.max.x-B.min.x,fe=B.max.y-B.min.y,he=B.isBox3?B.max.z-B.min.z:1,Te=B.min.x,Re=B.min.y,Me=B.isBox3?B.min.z:0;else{const Ot=Math.pow(2,-N);oe=Math.floor(tt.width*Ot),fe=Math.floor(tt.height*Ot),S.isDataArrayTexture?he=tt.depth:S.isData3DTexture?he=Math.floor(tt.depth*Ot):he=1,Te=0,Re=0,Me=0}G!==null?(He=G.x,Ke=G.y,ot=G.z):(He=0,Ke=0,ot=0);const Je=Se.convert(U.format),be=Se.convert(U.type);let st;U.isData3DTexture?(Fe.setTexture3D(U,0),st=A.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Fe.setTexture2DArray(U,0),st=A.TEXTURE_2D_ARRAY):(Fe.setTexture2D(U,0),st=A.TEXTURE_2D),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,U.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,U.unpackAlignment);const We=A.getParameter(A.UNPACK_ROW_LENGTH),Dt=A.getParameter(A.UNPACK_IMAGE_HEIGHT),Kn=A.getParameter(A.UNPACK_SKIP_PIXELS),Lt=A.getParameter(A.UNPACK_SKIP_ROWS),bi=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,tt.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,tt.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Te),A.pixelStorei(A.UNPACK_SKIP_ROWS,Re),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Me);const rt=S.isDataArrayTexture||S.isData3DTexture,Nt=U.isDataArrayTexture||U.isData3DTexture;if(S.isDepthTexture){const Ot=ge.get(S),yt=ge.get(U),wt=ge.get(Ot.__renderTarget),zs=ge.get(yt.__renderTarget);me.bindFramebuffer(A.READ_FRAMEBUFFER,wt.__webglFramebuffer),me.bindFramebuffer(A.DRAW_FRAMEBUFFER,zs.__webglFramebuffer);for(let Dn=0;Dn<he;Dn++)rt&&(A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,ge.get(S).__webglTexture,N,Me+Dn),A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,ge.get(U).__webglTexture,Q,ot+Dn)),A.blitFramebuffer(Te,Re,oe,fe,He,Ke,oe,fe,A.DEPTH_BUFFER_BIT,A.NEAREST);me.bindFramebuffer(A.READ_FRAMEBUFFER,null),me.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else if(N!==0||S.isRenderTargetTexture||ge.has(S)){const Ot=ge.get(S),yt=ge.get(U);me.bindFramebuffer(A.READ_FRAMEBUFFER,oc),me.bindFramebuffer(A.DRAW_FRAMEBUFFER,lc);for(let wt=0;wt<he;wt++)rt?A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Ot.__webglTexture,N,Me+wt):A.framebufferTexture2D(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Ot.__webglTexture,N),Nt?A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,yt.__webglTexture,Q,ot+wt):A.framebufferTexture2D(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,yt.__webglTexture,Q),N!==0?A.blitFramebuffer(Te,Re,oe,fe,He,Ke,oe,fe,A.COLOR_BUFFER_BIT,A.NEAREST):Nt?A.copyTexSubImage3D(st,Q,He,Ke,ot+wt,Te,Re,oe,fe):A.copyTexSubImage2D(st,Q,He,Ke,Te,Re,oe,fe);me.bindFramebuffer(A.READ_FRAMEBUFFER,null),me.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else Nt?S.isDataTexture||S.isData3DTexture?A.texSubImage3D(st,Q,He,Ke,ot,oe,fe,he,Je,be,tt.data):U.isCompressedArrayTexture?A.compressedTexSubImage3D(st,Q,He,Ke,ot,oe,fe,he,Je,tt.data):A.texSubImage3D(st,Q,He,Ke,ot,oe,fe,he,Je,be,tt):S.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,Q,He,Ke,oe,fe,Je,be,tt.data):S.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,Q,He,Ke,tt.width,tt.height,Je,tt.data):A.texSubImage2D(A.TEXTURE_2D,Q,He,Ke,oe,fe,Je,be,tt);A.pixelStorei(A.UNPACK_ROW_LENGTH,We),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Dt),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Kn),A.pixelStorei(A.UNPACK_SKIP_ROWS,Lt),A.pixelStorei(A.UNPACK_SKIP_IMAGES,bi),Q===0&&U.generateMipmaps&&A.generateMipmap(st),me.unbindTexture()},this.initRenderTarget=function(S){ge.get(S).__webglFramebuffer===void 0&&Fe.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?Fe.setTextureCube(S,0):S.isData3DTexture?Fe.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Fe.setTexture2DArray(S,0):Fe.setTexture2D(S,0),me.unbindTexture()},this.resetState=function(){w=0,R=0,L=null,me.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qt}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Xe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Xe._getUnpackColorSpace()}}class Em{ctx=null;masterGain=null;noiseBuffer=null;muted=!1;volume=.3;constructor(){}initContext(){if(this.ctx)return this.ctx.state==="suspended"&&this.ctx.resume(),!0;try{const e=window.AudioContext||window.webkitAudioContext;if(!e)return!1;this.ctx=new e,this.masterGain=this.ctx.createGain(),this.masterGain.gain.setValueAtTime(this.muted?0:this.volume,this.ctx.currentTime),this.masterGain.connect(this.ctx.destination);const t=this.ctx.sampleRate;this.noiseBuffer=this.ctx.createBuffer(1,t,this.ctx.sampleRate);const n=this.noiseBuffer.getChannelData(0);for(let i=0;i<t;i++)n[i]=Math.random()*2-1;return!0}catch{return!1}}unlock(){this.initContext()}playShoot(){if(!this.initContext()||!this.ctx||!this.masterGain||this.muted)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="square",t.frequency.setValueAtTime(460,e),t.frequency.exponentialRampToValueAtTime(220,e+.07),n.gain.setValueAtTime(.12,e),n.gain.exponentialRampToValueAtTime(.001,e+.07),t.connect(n),n.connect(this.masterGain),t.start(e),t.stop(e+.07)}playEnemyShoot(){if(!this.initContext()||!this.ctx||!this.masterGain||this.muted)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="sawtooth",t.frequency.setValueAtTime(260,e),t.frequency.exponentialRampToValueAtTime(120,e+.08),n.gain.setValueAtTime(.09,e),n.gain.exponentialRampToValueAtTime(.001,e+.08),t.connect(n),n.connect(this.masterGain),t.start(e),t.stop(e+.08)}playImpact(){if(!this.initContext()||!this.ctx||!this.masterGain||this.muted)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="triangle",t.frequency.setValueAtTime(550,e),t.frequency.exponentialRampToValueAtTime(200,e+.035),n.gain.setValueAtTime(.15,e),n.gain.exponentialRampToValueAtTime(.001,e+.035),t.connect(n),n.connect(this.masterGain),t.start(e),t.stop(e+.035)}playExplosion(){if(!this.initContext()||!this.ctx||!this.masterGain||!this.noiseBuffer||this.muted)return;const e=this.ctx.currentTime,t=this.ctx.createBufferSource();t.buffer=this.noiseBuffer;const n=this.ctx.createBiquadFilter();n.type="lowpass",n.frequency.setValueAtTime(750,e),n.frequency.exponentialRampToValueAtTime(80,e+.22);const i=this.ctx.createGain();i.gain.setValueAtTime(.28,e),i.gain.exponentialRampToValueAtTime(.001,e+.22),t.connect(n),n.connect(i),i.connect(this.masterGain),t.start(e),t.stop(e+.22)}playPlayerHit(){if(!this.initContext()||!this.ctx||!this.masterGain||this.muted)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="sawtooth",t.frequency.setValueAtTime(240,e),t.frequency.exponentialRampToValueAtTime(75,e+.2),n.gain.setValueAtTime(.3,e),n.gain.exponentialRampToValueAtTime(.001,e+.2),t.connect(n),n.connect(this.masterGain),t.start(e),t.stop(e+.2)}playGameOver(){if(!this.initContext()||!this.ctx||!this.masterGain||this.muted)return;const e=this.ctx.currentTime,t=[{freq:220,duration:.15,time:e},{freq:174,duration:.15,time:e+.16},{freq:130,duration:.35,time:e+.32}];for(const n of t){const i=this.ctx.createOscillator(),r=this.ctx.createGain();i.type="square",i.frequency.setValueAtTime(n.freq,n.time),r.gain.setValueAtTime(.2,n.time),r.gain.exponentialRampToValueAtTime(.001,n.time+n.duration),i.connect(r),r.connect(this.masterGain),i.start(n.time),i.stop(n.time+n.duration)}}playWarningSiren(){if(!this.initContext()||!this.ctx||!this.masterGain||this.muted)return;const e=this.ctx.currentTime;for(let t=0;t<3;t++){const n=e+t*.35,i=this.ctx.createOscillator(),r=this.ctx.createGain();i.type="square",i.frequency.setValueAtTime(700,n),i.frequency.setValueAtTime(450,n+.16),r.gain.setValueAtTime(.12,n),r.gain.setValueAtTime(.12,n+.28),r.gain.exponentialRampToValueAtTime(.001,n+.32),i.connect(r),r.connect(this.masterGain),i.start(n),i.stop(n+.32)}}playBossShoot(){if(!this.initContext()||!this.ctx||!this.masterGain||this.muted)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="sawtooth",t.frequency.setValueAtTime(180,e),t.frequency.exponentialRampToValueAtTime(65,e+.14),n.gain.setValueAtTime(.18,e),n.gain.exponentialRampToValueAtTime(.001,e+.14),t.connect(n),n.connect(this.masterGain),t.start(e),t.stop(e+.14)}playBossHit(){if(!this.initContext()||!this.ctx||!this.masterGain||this.muted)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="triangle",t.frequency.setValueAtTime(320,e),t.frequency.exponentialRampToValueAtTime(90,e+.08),n.gain.setValueAtTime(.25,e),n.gain.exponentialRampToValueAtTime(.001,e+.08),t.connect(n),n.connect(this.masterGain),t.start(e),t.stop(e+.08)}playBossSurge(){if(!this.initContext()||!this.ctx||!this.masterGain||this.muted)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="sawtooth",t.frequency.setValueAtTime(140,e),t.frequency.exponentialRampToValueAtTime(480,e+.4),n.gain.setValueAtTime(.14,e),n.gain.exponentialRampToValueAtTime(.001,e+.4),t.connect(n),n.connect(this.masterGain),t.start(e),t.stop(e+.4)}playHeavyExplosion(){if(!this.initContext()||!this.ctx||!this.masterGain||!this.noiseBuffer||this.muted)return;const e=this.ctx.currentTime,t=this.ctx.createBufferSource();t.buffer=this.noiseBuffer;const n=this.ctx.createBiquadFilter();n.type="lowpass",n.frequency.setValueAtTime(550,e),n.frequency.exponentialRampToValueAtTime(40,e+.55);const i=this.ctx.createGain();i.gain.setValueAtTime(.38,e),i.gain.exponentialRampToValueAtTime(.001,e+.55),t.connect(n),n.connect(i),i.connect(this.masterGain),t.start(e),t.stop(e+.55)}playStageClear(){if(!this.initContext()||!this.ctx||!this.masterGain||this.muted)return;const e=this.ctx.currentTime,t=[{freq:261.63,time:e,dur:.12},{freq:329.63,time:e+.13,dur:.12},{freq:392,time:e+.26,dur:.12},{freq:523.25,time:e+.39,dur:.45}];for(const n of t){const i=this.ctx.createOscillator(),r=this.ctx.createGain();i.type="square",i.frequency.setValueAtTime(n.freq,n.time),r.gain.setValueAtTime(.2,n.time),r.gain.exponentialRampToValueAtTime(.001,n.time+n.dur),i.connect(r),r.connect(this.masterGain),i.start(n.time),i.stop(n.time+n.dur)}}playMenuMove(){if(!this.initContext()||!this.ctx||!this.masterGain||this.muted)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="square",t.frequency.setValueAtTime(880,e),n.gain.setValueAtTime(.08,e),n.gain.exponentialRampToValueAtTime(.001,e+.03),t.connect(n),n.connect(this.masterGain),t.start(e),t.stop(e+.03)}playMenuSelect(){if(!this.initContext()||!this.ctx||!this.masterGain||this.muted)return;const e=this.ctx.currentTime,t=[{freq:520,time:e,dur:.04},{freq:1040,time:e+.04,dur:.06}];for(const n of t){const i=this.ctx.createOscillator(),r=this.ctx.createGain();i.type="square",i.frequency.setValueAtTime(n.freq,n.time),r.gain.setValueAtTime(.12,n.time),r.gain.exponentialRampToValueAtTime(.001,n.time+n.dur),i.connect(r),r.connect(this.masterGain),i.start(n.time),i.stop(n.time+n.dur)}}playPause(){if(!this.initContext()||!this.ctx||!this.masterGain||this.muted)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="square",t.frequency.setValueAtTime(440,e),t.frequency.exponentialRampToValueAtTime(260,e+.07),n.gain.setValueAtTime(.12,e),n.gain.exponentialRampToValueAtTime(.001,e+.07),t.connect(n),n.connect(this.masterGain),t.start(e),t.stop(e+.07)}playUnpause(){if(!this.initContext()||!this.ctx||!this.masterGain||this.muted)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="square",t.frequency.setValueAtTime(260,e),t.frequency.exponentialRampToValueAtTime(440,e+.07),n.gain.setValueAtTime(.12,e),n.gain.exponentialRampToValueAtTime(.001,e+.07),t.connect(n),n.connect(this.masterGain),t.start(e),t.stop(e+.07)}playCoin(){if(!this.initContext()||!this.ctx||!this.masterGain||this.muted)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="triangle",t.frequency.setValueAtTime(880,e),t.frequency.setValueAtTime(1320,e+.04),n.gain.setValueAtTime(.12,e),n.gain.exponentialRampToValueAtTime(.001,e+.1),t.connect(n),n.connect(this.masterGain),t.start(e),t.stop(e+.1)}playPowerup(){if(!this.initContext()||!this.ctx||!this.masterGain||this.muted)return;const e=this.ctx.currentTime;[330,440,554,660].forEach((n,i)=>{if(!this.ctx||!this.masterGain)return;const r=this.ctx.createOscillator(),a=this.ctx.createGain();r.type="square";const o=e+i*.04;r.frequency.setValueAtTime(n,o),a.gain.setValueAtTime(.1,o),a.gain.exponentialRampToValueAtTime(.001,o+.06),r.connect(a),a.connect(this.masterGain),r.start(o),r.stop(o+.06)})}playShieldBreak(){if(!this.initContext()||!this.ctx||!this.masterGain||this.muted)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="sawtooth",t.frequency.setValueAtTime(600,e),t.frequency.exponentialRampToValueAtTime(120,e+.15),n.gain.setValueAtTime(.15,e),n.gain.exponentialRampToValueAtTime(.001,e+.15),t.connect(n),n.connect(this.masterGain),t.start(e),t.stop(e+.15)}playEmpBomb(){if(!this.initContext()||!this.ctx||!this.masterGain||this.muted)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();if(t.type="sine",t.frequency.setValueAtTime(180,e),t.frequency.exponentialRampToValueAtTime(32,e+.35),n.gain.setValueAtTime(.25,e),n.gain.exponentialRampToValueAtTime(.001,e+.35),t.connect(n),n.connect(this.masterGain),t.start(e),t.stop(e+.35),this.noiseBuffer){const i=this.ctx.createBufferSource();i.buffer=this.noiseBuffer;const r=this.ctx.createBiquadFilter();r.type="lowpass",r.frequency.setValueAtTime(1200,e),r.frequency.exponentialRampToValueAtTime(150,e+.3);const a=this.ctx.createGain();a.gain.setValueAtTime(.2,e),a.gain.exponentialRampToValueAtTime(.001,e+.3),i.connect(r),r.connect(a),a.connect(this.masterGain),i.start(e),i.stop(e+.3)}}playAmbushAlert(){if(!this.initContext()||!this.ctx||!this.masterGain||this.muted)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="square",t.frequency.setValueAtTime(587.33,e),t.frequency.setValueAtTime(880,e+.08),t.frequency.setValueAtTime(587.33,e+.16),t.frequency.setValueAtTime(1174.66,e+.24),n.gain.setValueAtTime(.18,e),n.gain.setValueAtTime(.18,e+.3),n.gain.exponentialRampToValueAtTime(.001,e+.38),t.connect(n),n.connect(this.masterGain),t.start(e),t.stop(e+.38)}setVolume(e){this.volume=Math.max(0,Math.min(1,e)),this.masterGain&&this.ctx&&!this.muted&&this.masterGain.gain.setValueAtTime(this.volume,this.ctx.currentTime)}setMuted(e){this.muted=e,this.masterGain&&this.ctx&&this.masterGain.gain.setValueAtTime(this.muted?0:this.volume,this.ctx.currentTime)}isMuted(){return this.muted}}const un=160,Tn=90,yr=un/Tn,Mr=320,br=180,ym=.1,Tr=0,Mm=-.5,bm=-.6,Tm=-.8,Am=-1,Yo=-.9,Bl=80,wm=1,Rm=.12,Ar=2.5,wr=.25,Cm=.04,Rr=.08,Ko=20,jo=45,Pm=65,Gl=12,kl=8,$o=3,Dm=2,Lm=.1,Zo=.16,Jo=6,Qo=154,el=5,tl=85,yn=150,Ma=4,ba=2,Hl=80,Im=165,zl=25,Um=10,Nm=6,Om=6,nl=.45,Fm=.18,Bm=10,Gm=8,Ss=15,km=1,Vl=35,Hm=100,Wl=8,Xl=6,Mn=170,zm=-15,Vm=2,Wm=28,Xm=200,qm=10,Ym=8,Km=1,jm=42,$m=250,Zm=10,Jm=7,Qm=3,eg=22,tg=350,ng=12,ig=10,sg=3,rg=3,ag=-10,ql=40,og=1.3,Cr=50,Yl=32,Kl=24,lg=28,cg=20,hg=5e3,il=9615264,ug=993821,Pr=2513983,dg=5410661,Bi={verdant:{name:"VERDANT ORBIT",ink:993821,dark:2513983,mid:5410661,light:9615264,bg:9615264,accent:13935424},amber:{name:"IRON FORGE",ink:2233091,dark:6042376,mid:10903572,light:15968331,bg:15968331,accent:16768358},ice:{name:"CYBER ABYSS",ink:464160,dark:1391698,mid:3307676,light:9094367,bg:9094367,accent:6088422},obsidian:{name:"OBSIDIAN VOID",ink:526344,dark:3815994,mid:8158332,light:13948116,bg:13948116,accent:16777215}},Ta=[{id:"alpha",name:"ALPHA DART",cost:0,description:"Standard tactical patrol fighter. Well-balanced flight and baseline dual cannons.",perk:"BALANCED",speedMultiplier:1},{id:"valkyrie",name:"VALKYRIE",cost:50,description:"Lightweight swept-wing interceptor built for high-speed evasion and rapid flanking maneuvers.",perk:"+20% SPEED",speedMultiplier:1.2},{id:"phantom",name:"ONYX PHANTOM",cost:100,description:"Stealth delta-wing reconnaissance dreadfighter equipped with a pre-charged kinetic barrier.",perk:"STARTING SHIELD",speedMultiplier:1,hasStartingShield:!0},{id:"solaris",name:"SOLARIS",cost:200,description:"Heavy dreadnought assault gunship with reinforced titanium plating and high-yield twin plasma discharges.",perk:"TWIN CANNON",speedMultiplier:.92}],fg=[{stageNumber:1,title:"STAGE 1",subtitle:"VERDANT ORBIT",theme:"verdant",description:"Infiltrate orbital defense grid. Neutralize reconnaissance drones and armored patrol units."},{stageNumber:2,title:"STAGE 2",subtitle:"IRON FOUNDRY",theme:"amber",description:"Navigate dense asteroid mining fields and high-density industrial factory defense fleets."},{stageNumber:3,title:"STAGE 3",subtitle:"CYBER ABYSS",theme:"ice",description:"Assault dreadnought graveyard in deep space. Engage command fleet flagship."}],sl="starfall84_high_score";class pg{boundA={x:0,y:0,width:0,height:0};boundB={x:0,y:0,width:0,height:0};checkAABB(e,t){return e.x<t.x+t.width&&e.x+e.width>t.x&&e.y<t.y+t.height&&e.y+e.height>t.y}checkProjectileEnemyCollisions(e,t,n){const i=e.getAll(),r=t.getAll();for(let a=0;a<i.length;a++){const o=i[a];if(!(!o.active||o.owner!=="player")){o.getBounds(this.boundA);for(let l=0;l<r.length;l++){const c=r[l];if(c.active&&(c.getBounds(this.boundB),this.checkAABB(this.boundA,this.boundB))){const h=c.takeDamage(o.damage);o.destroy(),n(c,o,h);break}}}}}checkEnemyProjectilePlayerCollisions(e,t,n){if(!t.active||t.invulnerabilityTimer>0)return;t.getBounds(this.boundA);const i=e.getAll();for(let r=0;r<i.length;r++){const a=i[r];if(!(!a.active||a.owner!=="enemy")&&(a.getBounds(this.boundB),this.checkAABB(this.boundA,this.boundB))){a.destroy();const o=t.takeDamage();n(a,o);break}}}checkPlayerEnemyCollisions(e,t,n){if(!e.active||e.invulnerabilityTimer>0)return;e.getBounds(this.boundA);const i=t.getAll();for(let r=0;r<i.length;r++){const a=i[r];if(a.active&&(a.getBounds(this.boundB),this.checkAABB(this.boundA,this.boundB))){a.destroy();const o=e.takeDamage();n(a,o);break}}}checkProjectileBossCollisions(e,t,n){if(!t.active||t.isInvulnerable())return;t.getBounds(this.boundB);const i=e.getAll();for(let r=0;r<i.length;r++){const a=i[r];if(!(!a.active||a.owner!=="player")&&(a.getBounds(this.boundA),this.checkAABB(this.boundA,this.boundB))){a.destroy();const{killed:o,hit:l}=t.takeDamage(a.damage);l&&n(a,o)}}}checkPlayerBossCollision(e,t,n){if(!(!e.active||e.invulnerabilityTimer>0)&&!(!t.active||t.state==="DEFEATED")&&(e.getBounds(this.boundA),t.getBounds(this.boundB),this.checkAABB(this.boundA,this.boundB))){const i=e.takeDamage();n(i)}}checkPlayerItemCollisions(e,t,n){if(!t.active)return;t.getBounds(this.boundA);const i=e.getAll();for(let r=0;r<i.length;r++){const a=i[r];a.active&&(a.getBounds(this.boundB),this.checkAABB(this.boundA,this.boundB)&&(a.destroy(),n(a)))}}}class jl{cooldown;fireRate;constructor(e=1,t=2.5){this.fireRate=t,this.cooldown=e}reset(){this.cooldown=.9+Math.random()*.9}update(e,t,n){this.cooldown-=t,this.cooldown<=0&&(this.cooldown=this.fireRate,e.x>20&&e.x<155&&(n.spawnEnemyProjectile(e.x-4,e.y,-58.5,0),n.spawnEnemyProjectile(e.x-4,e.y+1,-58.5*.95,15),n.spawnEnemyProjectile(e.x-4,e.y-1,-58.5*.95,-15)))}}class Ns{reset(){}update(){}}class $l{cooldown;fireRate;constructor(e=.8,t=2){this.fireRate=t,this.cooldown=e}reset(){this.cooldown=.8+Math.random()*.8}update(e,t,n){this.cooldown-=t,this.cooldown<=0&&(this.cooldown=this.fireRate,e.x>15&&e.x<155&&n.spawnEnemyProjectile(e.x-4,e.y,-65,0))}}class Zl{trackSpeed;constructor(e=22){this.trackSpeed=e}reset(){}update(e,t,n,i){if(i){const r=i.playerPosition.y-e.y;if(Math.abs(r)>1.5){const a=Math.sign(r)*this.trackSpeed;t.y+=(a-t.y)*Math.min(1,n*3.5)}else t.y*=.8}e.x+=t.x*n,e.y+=t.y*n,e.y<8?(e.y=8,t.y=0):e.y>82&&(e.y=82,t.y=0)}}class Jl{hasDived=!1;diveTriggerX=125;diveVy=0;reset(){this.hasDived=!1,this.diveTriggerX=115+Math.random()*20,this.diveVy=0}update(e,t,n,i){if(!this.hasDived&&e.x<=this.diveTriggerX){this.hasDived=!0;const a=(i?i.playerPosition.y:45)-e.y;this.diveVy=Math.sign(a)*40,t.x*=1.2}e.x+=t.x*n,this.hasDived?e.y+=this.diveVy*n:e.y+=t.y*n,e.y<6?(e.y=6,this.diveVy=-this.diveVy*.4):e.y>84&&(e.y=84,this.diveVy=-this.diveVy*.4)}}class Ql{initialY=45;time=0;amplitude;frequency;constructor(e=18,t=2.8){this.amplitude=e,this.frequency=t}reset(e){this.initialY=e,this.time=0}update(e,t,n){this.time+=n,e.x+=t.x*n,e.y=this.initialY+Math.sin(this.time*this.frequency)*this.amplitude,e.y<8?e.y=8:e.y>82&&(e.y=82)}}class ec{update(e,t,n){e.x+=t.x*n,e.y+=t.y*n}}const mg={scout:{archetype:"scout",width:Wl,height:Xl,hp:km,speed:Vl,score:Hm,createMovement:()=>new ec,createAttack:()=>new Ns},weaver:{archetype:"weaver",width:qm,height:Ym,hp:Vm,speed:Wm,score:Xm,createMovement:()=>new Ql(16,3),createAttack:()=>new $l(.8,1.8)},swooper:{archetype:"swooper",width:Zm,height:Jm,hp:Km,speed:jm,score:$m,createMovement:()=>new Jl,createAttack:()=>new Ns},chaser:{archetype:"chaser",width:ng,height:ig,hp:Qm,speed:eg,score:tg,createMovement:()=>new Zl(24),createAttack:()=>new jl(1,2.4)}};class gg{id;type="scout";active=!1;position={x:0,y:0};velocity={x:0,y:0};width=8;height=6;hp=1;maxHp=1;scoreValue=100;movements={scout:new ec,weaver:new Ql(16,2.8),swooper:new Jl,chaser:new Zl(22)};attacks={scout:new Ns,weaver:new $l(.8,1.8),swooper:new Ns,chaser:new jl(1,2.4)};movement=this.movements.scout;attack=this.attacks.scout;constructor(e){this.id=e}spawn(e,t,n,i,r,a){const o=mg[e];this.type=e,this.position.x=t,this.position.y=n;const l=i??o.speed;this.velocity.x=-l,this.velocity.y=0,this.width=o.width,this.height=o.height,this.hp=r??o.hp,this.maxHp=this.hp,this.scoreValue=a??o.score,this.movement=this.movements[e],this.attack=this.attacks[e],this.movement.reset&&this.movement.reset(n),this.attack.reset&&this.attack.reset(),this.active=!0}spawnScout(e,t,n=Vl,i,r){this.spawn("scout",e,t,n,i,r)}update(e,t){this.active&&(this.movement.update(this.position,this.velocity,e,t),t&&this.attack.update(this.position,e,t),this.position.x<zm&&this.destroy())}takeDamage(e){return this.active?(this.hp-=e,this.hp<=0?(this.destroy(),!0):!1):!1}getBounds(e){e.x=this.position.x-this.width/2,e.y=this.position.y-this.height/2,e.width=this.width,e.height=this.height}destroy(){this.active=!1}}class _g{pool=[];constructor(e=ql){for(let t=0;t<e;t++)this.pool.push(new gg(t))}spawn(e,t,n,i,r,a){for(let o=0;o<this.pool.length;o++){const l=this.pool[o];if(!l.active)return l.spawn(e,t,n,i,r,a),l}return null}spawnScout(e,t,n,i,r){return this.spawn("scout",e,t,n,i,r)}update(e,t){for(let n=0;n<this.pool.length;n++){const i=this.pool[n];i.active&&i.update(e,t)}}getAll(){return this.pool}clear(){for(let e=0;e<this.pool.length;e++)this.pool[e].destroy()}getActiveCount(){let e=0;for(let t=0;t<this.pool.length;t++)this.pool[t].active&&e++;return e}}class vg{id;active=!1;position={x:0,y:0};velocity={x:0,y:0};width=Nm;height=Om;type="coin";lifetime=0;animTimer=0;visible=!0;constructor(e){this.id=e}spawn(e,t,n){this.position.x=e,this.position.y=t,this.type=n,this.velocity.x=-24,this.velocity.y=(Math.random()-.5)*12,this.lifetime=Um,this.animTimer=0,this.visible=!0,this.active=!0}update(e){this.active&&(this.position.x+=this.velocity.x*e,this.position.y+=this.velocity.y*e,this.position.y<8?(this.position.y=8,this.velocity.y=Math.abs(this.velocity.y)):this.position.y>82&&(this.position.y=82,this.velocity.y=-Math.abs(this.velocity.y)),this.lifetime-=e,this.animTimer+=e,this.lifetime<2.5?this.visible=Math.floor(this.lifetime*8)%2===0:this.visible=!0,(this.lifetime<=0||this.position.x<-10)&&this.destroy())}getBounds(e){e.x=this.position.x-this.width/2,e.y=this.position.y-this.height/2,e.width=this.width,e.height=this.height}destroy(){this.active=!1,this.visible=!1}}class Sg{pool=[];constructor(e=zl){for(let t=0;t<e;t++)this.pool.push(new vg(t))}acquire(e,t,n){for(let i=0;i<this.pool.length;i++){const r=this.pool[i];if(!r.active)return r.spawn(e,t,n),r}return null}update(e){for(let t=0;t<this.pool.length;t++){const n=this.pool[t];n.active&&n.update(e)}}clear(){for(let e=0;e<this.pool.length;e++)this.pool[e].destroy()}getAll(){return this.pool}}class xg{x=0;y=0;vx=0;vy=0;life=0;maxLife=0;size=2;active=!1;spawn(e,t,n,i,r,a=2){this.x=e,this.y=t,this.vx=n,this.vy=i,this.life=r,this.maxLife=r,this.size=a,this.active=!0}update(e){this.active&&(this.x+=this.vx*e,this.y+=this.vy*e,this.vx*=.92,this.vy*=.92,this.life-=e,this.life<=0&&(this.active=!1))}getNormalizedLife(){return this.maxLife<=0?0:Math.max(0,this.life/this.maxLife)}}class Eg{pool=[];constructor(e=Bl){for(let t=0;t<e;t++)this.pool.push(new xg)}acquire(){for(let e=0;e<this.pool.length;e++)if(!this.pool[e].active)return this.pool[e];return null}emitExplosion(e,t,n=10,i=45){for(let r=0;r<n;r++){const a=this.acquire();if(!a)break;const o=Math.PI*2*r/n+(Math.random()-.5)*.4,l=i*(.6+Math.random()*.8),c=Math.cos(o)*l,h=Math.sin(o)*l,d=.2+Math.random()*.18,p=Math.random()>.4?2.5:1.5;a.spawn(e,t,c,h,d,p)}}emitImpact(e,t,n=4){for(let i=0;i<n;i++){const r=this.acquire();if(!r)break;const a=Math.PI+(Math.random()-.5)*1.4,o=30+Math.random()*35,l=Math.cos(a)*o,c=Math.sin(a)*o,h=.08+Math.random()*.08;r.spawn(e,t,l,c,h,1.5)}}update(e){for(let t=0;t<this.pool.length;t++)this.pool[t].active&&this.pool[t].update(e)}getAll(){return this.pool}clear(){for(let e=0;e<this.pool.length;e++)this.pool[e].active=!1}}class yg{id=0;active=!0;position={x:Ko,y:jo};velocity={x:0,y:0};width=Gl;height=kl;lives=$o;invulnerabilityTimer=0;blinkTimer=0;visible=!0;fireCooldown=0;currentSkin="alpha";speedMultiplier=1;hasShield=!1;spreadTimer=0;rapidTimer=0;godMode=!1;constructor(){this.applySkin("alpha")}applySkin(e){this.currentSkin=e;const t=Ta.find(n=>n.id===e)||Ta[0];this.speedMultiplier=t.speedMultiplier,t.hasStartingShield&&(this.hasShield=!0)}activatePowerup(e){e==="spread"?this.spreadTimer=Bm:e==="rapid"?this.rapidTimer=Gm:e==="shield"&&(this.hasShield=!0)}updateWithInput(e,t,n){if(!this.active)return!1;this.spreadTimer>0&&(this.spreadTimer-=e),this.rapidTimer>0&&(this.rapidTimer-=e);let i=0,r=0;if(t.left&&(i-=1),t.right&&(i+=1),t.up&&(r+=1),t.down&&(r-=1),i!==0&&r!==0){const c=1/Math.SQRT2;i*=c,r*=c}const a=Pm*this.speedMultiplier;this.velocity.x=i*a,this.velocity.y=r*a,this.position.x+=this.velocity.x*e,this.position.y+=this.velocity.y*e,this.position.x<Jo&&(this.position.x=Jo),this.position.x>Qo&&(this.position.x=Qo),this.position.y<el&&(this.position.y=el),this.position.y>tl&&(this.position.y=tl);let o=!1;this.fireCooldown>0&&(this.fireCooldown-=e);const l=this.rapidTimer>0?Zo*.5:Zo;if(t.fire&&this.fireCooldown<=0){const c=this.position.x+this.width/2,h=this.position.y;this.spreadTimer>0?(n.acquire(c,h,yn,0),n.acquire(c,h+2,yn*.96,yn*.26),n.acquire(c,h-2,yn*.96,-yn*.26),this.fireCooldown=l,o=!0):this.currentSkin==="solaris"?(n.acquire(c,h+2.5,yn,0),n.acquire(c,h-2.5,yn,0),this.fireCooldown=l,o=!0):n.acquire(c,h,yn,0)&&(this.fireCooldown=l,o=!0)}return this.invulnerabilityTimer>0?(this.invulnerabilityTimer-=e,this.blinkTimer+=e,this.blinkTimer>=Lm&&(this.blinkTimer=0,this.visible=!this.visible),this.invulnerabilityTimer<=0&&(this.invulnerabilityTimer=0,this.visible=!0)):this.visible=!0,o}update(e){this.invulnerabilityTimer>0&&(this.invulnerabilityTimer-=e)}takeDamage(e){return this.godMode||this.invulnerabilityTimer>0||!this.active?!1:this.hasShield?(this.hasShield=!1,this.invulnerabilityTimer=1,this.blinkTimer=0,e?.(),!1):(this.lives-=1,this.invulnerabilityTimer=Dm,this.blinkTimer=0,this.visible=!1,this.lives<=0?(this.lives=0,this.active=!1,this.visible=!1,!0):!1)}getBounds(e){e.x=this.position.x-this.width/2,e.y=this.position.y-this.height/2,e.width=this.width,e.height=this.height}reset(){this.position.x=Ko,this.position.y=jo,this.velocity.x=0,this.velocity.y=0,this.lives=$o,this.invulnerabilityTimer=0,this.blinkTimer=0,this.visible=!0,this.fireCooldown=0,this.active=!0,this.spreadTimer=0,this.rapidTimer=0,this.hasShield=!1,this.applySkin(this.currentSkin)}destroy(){this.active=!1,this.visible=!1}}class Mg{id;active=!1;owner="player";position={x:0,y:0};velocity={x:0,y:0};width=Ma;height=ba;damage=1;constructor(e){this.id=e}spawn(e,t,n,i,r="player"){this.owner=r,this.position.x=e,this.position.y=t,this.velocity.x=n,this.velocity.y=i,this.width=r==="player"?Ma:sg,this.height=r==="player"?ba:rg,this.active=!0}update(e){this.active&&(this.position.x+=this.velocity.x*e,this.position.y+=this.velocity.y*e,this.owner==="player"?this.position.x>Im&&this.destroy():(this.position.x<ag||this.position.y<-5||this.position.y>95)&&this.destroy())}getBounds(e){e.x=this.position.x-this.width/2,e.y=this.position.y-this.height/2,e.width=this.width,e.height=this.height}destroy(){this.active=!1}}class bg{pool=[];constructor(e=Hl){for(let t=0;t<e;t++)this.pool.push(new Mg(t))}acquire(e,t,n,i,r="player"){for(let a=0;a<this.pool.length;a++){const o=this.pool[a];if(!o.active)return o.spawn(e,t,n,i,r),o}return null}update(e){for(let t=0;t<this.pool.length;t++){const n=this.pool[t];n.active&&n.update(e)}}getAll(){return this.pool}clear(){for(let e=0;e<this.pool.length;e++)this.pool[e].destroy()}getActiveCount(){let e=0;for(let t=0;t<this.pool.length;t++)this.pool[t].active&&e++;return e}}class Tg{id=999;active=!1;position={x:180,y:45};width=Yl;height=Kl;hitboxWidth=lg;hitboxHeight=cg;hp=Cr;maxHp=Cr;scoreValue=hg;state="INACTIVE";flashTimer=0;isEnraged=!1;stateTimer=0;hoverTime=0;cannonTimer=0;spreadTimer=0;surgeCooldown=5;surgePhase="NONE";surgeTimer=0;defeatTimer=0;defeatExplosionCooldown=0;onDefeatedCallback;onSurgeTelegraphCallback;onBossShootCallback;onHeavyExplosionCallback;spawn(e=180,t=45,n=Cr,i){this.position.x=e,this.position.y=t,this.hp=n,this.maxHp=n,this.active=!0,this.state="INTRO",this.stateTimer=0,this.hoverTime=0,this.cannonTimer=0,this.spreadTimer=1,this.surgeCooldown=6,this.surgePhase="NONE",this.surgeTimer=0,this.flashTimer=0,this.isEnraged=!1,this.defeatTimer=0,this.defeatExplosionCooldown=0,i&&(this.onDefeatedCallback=i.onDefeated,this.onSurgeTelegraphCallback=i.onSurgeTelegraph,this.onBossShootCallback=i.onBossShoot,this.onHeavyExplosionCallback=i.onHeavyExplosion)}getBounds(e){e.width=this.hitboxWidth,e.height=this.hitboxHeight,e.x=this.position.x-this.hitboxWidth/2,e.y=this.position.y-this.hitboxHeight/2}getHpPercent(){return Math.max(0,this.hp/this.maxHp)}isInvulnerable(){return this.state==="INTRO"||this.state==="DEFEATED"||!this.active}takeDamage(e=1){return this.isInvulnerable()?{killed:!1,hit:!1}:(this.hp-=e,this.flashTimer=.08,this.hp<=0?(this.hp=0,this.triggerDefeat(),{killed:!0,hit:!0}):(this.hp<=this.maxHp*.25&&this.state!=="ENRAGED"?(this.state="ENRAGED",this.isEnraged=!0):this.hp<=this.maxHp*.6&&this.state==="PHASE_1"&&(this.state="PHASE_2"),{killed:!1,hit:!0}))}triggerDefeat(){this.state="DEFEATED",this.defeatTimer=0,this.defeatExplosionCooldown=0}update(e,t,n,i){if(!this.active)return;const r=t??{playerPosition:{x:20,y:45},spawnEnemyProjectile:()=>{}},a=n??(()=>{}),o=i??(()=>{});switch(this.stateTimer+=e,this.flashTimer>0&&(this.flashTimer-=e),this.state){case"INTRO":this.updateIntro(e);break;case"PHASE_1":this.updatePhase1(e,r);break;case"PHASE_2":this.updatePhase2(e,r);break;case"ENRAGED":this.updateEnraged(e,r);break;case"DEFEATED":this.updateDefeated(e,a,o);break}}updateIntro(e){this.position.x>135?this.position.x-=28*e:(this.position.x=135,this.state="PHASE_1",this.stateTimer=0,this.hoverTime=0,this.cannonTimer=.8,this.spreadTimer=2.2)}updatePhase1(e,t){if(this.hoverTime+=e,this.position.y=45+18*Math.sin(this.hoverTime*1.3),this.cannonTimer-=e,this.cannonTimer<=0){this.cannonTimer=1.3;const n=Math.sin(this.hoverTime*2.5)>0,i=this.position.y+(n?6:-6);t.spawnEnemyProjectile(this.position.x-14,i,-75,0),this.onBossShootCallback?.()}this.spreadTimer-=e,this.spreadTimer<=0&&(this.spreadTimer=3.6,this.fireSpreadSalvo(t,3,65,.28),this.onBossShootCallback?.())}updatePhase2(e,t){if(this.hoverTime+=e,this.surgePhase!=="NONE"){this.updateSurge(e);return}if(this.surgeCooldown-=e,this.surgeCooldown<=0){this.surgeCooldown=7.5,this.surgePhase="TELEGRAPH",this.surgeTimer=.6,this.onSurgeTelegraphCallback?.();return}if(this.position.y=45+24*Math.sin(this.hoverTime*1.7),this.position.x=133+4*Math.sin(this.hoverTime*.9),this.cannonTimer-=e,this.cannonTimer<=0){this.cannonTimer=.95;const n=this.position.y+(Math.sin(this.hoverTime*3)>0?6:-6);t.spawnEnemyProjectile(this.position.x-14,n,-85,0),this.onBossShootCallback?.()}this.spreadTimer-=e,this.spreadTimer<=0&&(this.spreadTimer=3.2,this.fireSpreadSalvo(t,5,70,.42),this.onBossShootCallback?.())}updateSurge(e){switch(this.surgePhase){case"TELEGRAPH":this.surgeTimer-=e,this.position.x=135+(Math.random()-.5)*1.5,this.surgeTimer<=0&&(this.surgePhase="RUSH",this.surgeTimer=.45);break;case"RUSH":this.position.x-=110*e,this.position.x<=85&&(this.position.x=85,this.surgePhase="RETURN");break;case"RETURN":this.position.x+=35*e,this.position.x>=134&&(this.position.x=134,this.surgePhase="NONE");break}}updateEnraged(e,t){this.hoverTime+=e;const i=Math.max(16,Math.min(74,t.playerPosition.y))-this.position.y;this.position.y+=Math.sign(i)*Math.min(Math.abs(i),38*e),this.cannonTimer-=e,this.cannonTimer<=0&&(this.cannonTimer=.7,t.spawnEnemyProjectile(this.position.x-14,this.position.y+6,-95,0),t.spawnEnemyProjectile(this.position.x-14,this.position.y-6,-95,0),this.onBossShootCallback?.()),this.spreadTimer-=e,this.spreadTimer<=0&&(this.spreadTimer=1.8,this.fireSpreadSalvo(t,3,80,.32),this.onBossShootCallback?.())}updateDefeated(e,t,n){if(this.defeatTimer+=e,this.defeatExplosionCooldown-=e,this.defeatExplosionCooldown<=0&&this.defeatTimer<2.3){this.defeatExplosionCooldown=.14;const i=this.position.x+(Math.random()-.5)*(this.width-4),r=this.position.y+(Math.random()-.5)*(this.height-4);t(i,r,8),n(1.2,.12),this.onHeavyExplosionCallback?.()}this.defeatTimer>=2.4&&(t(this.position.x,this.position.y,25),n(3.5,.5),this.onHeavyExplosionCallback?.(),this.active=!1,this.onDefeatedCallback?.())}fireSpreadSalvo(e,t,n,i){if(t<=1){e.spawnEnemyProjectile(this.position.x-14,this.position.y,-n,0);return}const r=i*2/(t-1);for(let a=0;a<t;a++){const o=-i+a*r,l=-n*Math.cos(o),c=n*Math.sin(o);e.spawnEnemyProjectile(this.position.x-14,this.position.y,l,c)}}destroy(){this.active=!1,this.state="INACTIVE"}}const Ag="level01",wg="STAGE 1",Rg="VERDANT ORBIT",Cg=[{time:.5,type:"stage_title",title:"STAGE 1",subtitle:"VERDANT ORBIT",duration:3},{time:3.8,type:"banner",text:"VANGUARD PATROL DETECTED",duration:2.2},{time:5.5,type:"wave",baseX:170,baseY:45,enemies:[{archetype:"scout",offsetX:0,offsetY:0}]},{time:8.5,type:"wave",baseX:170,baseY:45,enemies:[{archetype:"scout",offsetX:0,offsetY:-16},{archetype:"scout",offsetX:0,offsetY:16}]},{time:12,type:"wave",baseX:170,baseY:45,enemies:[{archetype:"scout",offsetX:0,offsetY:0},{archetype:"scout",offsetX:14,offsetY:-18},{archetype:"scout",offsetX:14,offsetY:18}]},{time:16,type:"banner",text:"BIOMECHANICAL WEAVERS INBOUND",duration:2.2},{time:18,type:"wave",baseX:170,baseY:45,enemies:[{archetype:"weaver",offsetX:0,offsetY:0}]},{time:22,type:"wave",baseX:170,baseY:45,enemies:[{archetype:"weaver",offsetX:0,offsetY:-14},{archetype:"weaver",offsetX:16,offsetY:14}]},{time:26.5,type:"banner",text:"SWOOPER DIVE-BOMBERS APPROACHING",duration:2},{time:28.5,type:"wave",baseX:170,baseY:45,enemies:[{archetype:"swooper",offsetX:0,offsetY:28},{archetype:"swooper",offsetX:12,offsetY:-26}]},{time:33,type:"wave",baseX:170,baseY:45,enemies:[{archetype:"weaver",offsetX:0,offsetY:0},{archetype:"scout",offsetX:12,offsetY:-20},{archetype:"scout",offsetX:12,offsetY:20}]},{time:38,type:"recovery",duration:4,message:"SECTOR CLEAR // SENSORS RECHARGING"},{time:42.5,type:"banner",text:"HEAVY ASSAULT CHASER DETECTED",duration:2.2},{time:44.5,type:"wave",baseX:170,baseY:45,enemies:[{archetype:"chaser",offsetX:0,offsetY:0}]},{time:50,type:"wave",baseX:170,baseY:45,enemies:[{archetype:"chaser",offsetX:0,offsetY:12},{archetype:"swooper",offsetX:16,offsetY:-28}]},{time:56,type:"wave",baseX:170,baseY:45,enemies:[{archetype:"weaver",offsetX:0,offsetY:-12},{archetype:"weaver",offsetX:14,offsetY:12},{archetype:"scout",offsetX:28,offsetY:0}]},{time:62,type:"elite",archetype:"chaser",baseX:170,baseY:45,hp:8,speed:18,score:1e3,message:"ELITE GUNSHIP TITAN-01"},{time:73,type:"boss_warning",warningText:"WARNING // MASSIVE SIGNATURE DETECTED",duration:5},{time:78,type:"boss",bossId:"titan_warden",name:"TITAN WARDEN",hp:50}],Dr={id:Ag,title:wg,subtitle:Rg,events:Cg},Pg="level02",Dg="STAGE 2",Lg="IRON FOUNDRY",Ig=[{time:.5,type:"stage_title",title:"STAGE 2",subtitle:"IRON FOUNDRY",duration:3},{time:3.8,type:"banner",text:"ASTEROID MINING SECTOR INFILTRATED",duration:2.2},{time:5.5,type:"wave",baseX:170,baseY:45,enemies:[{archetype:"weaver",offsetX:0,offsetY:-12},{archetype:"weaver",offsetX:0,offsetY:12}]},{time:9,type:"banner",text:"SWOOPER DIVE-BOMBERS DETECTED",duration:2},{time:11,type:"wave",baseX:170,baseY:25,enemies:[{archetype:"swooper",offsetX:0,offsetY:0},{archetype:"swooper",offsetX:12,offsetY:5}]},{time:15,type:"wave",baseX:170,baseY:65,enemies:[{archetype:"swooper",offsetX:0,offsetY:0},{archetype:"swooper",offsetX:12,offsetY:-5}]},{time:19,type:"wave",baseX:170,baseY:45,enemies:[{archetype:"scout",offsetX:0,offsetY:-20},{archetype:"weaver",offsetX:10,offsetY:0},{archetype:"scout",offsetX:0,offsetY:20}]},{time:24,type:"banner",text:"WARNING: ARMORED EXCAVATOR PATROL",duration:2.2},{time:26.5,type:"elite",archetype:"chaser",speed:22,hp:4,score:400,message:"HEAVY GUNSHIP ENGAGING"},{time:32,type:"wave",baseX:170,baseY:45,enemies:[{archetype:"swooper",offsetX:0,offsetY:-18},{archetype:"weaver",offsetX:14,offsetY:0},{archetype:"swooper",offsetX:0,offsetY:18}]},{time:38,type:"recovery",message:"FOUNDRY TURBINES OVERHEATING",duration:2},{time:41,type:"wave",baseX:170,baseY:45,enemies:[{archetype:"weaver",offsetX:0,offsetY:-16},{archetype:"weaver",offsetX:8,offsetY:0},{archetype:"weaver",offsetX:16,offsetY:16}]},{time:47,type:"wave",baseX:170,baseY:45,enemies:[{archetype:"chaser",offsetX:0,offsetY:-12},{archetype:"swooper",offsetX:15,offsetY:15}]},{time:54,type:"boss_warning",warningText:"FOUNDRY GUARDIAN REACTOR ONLINE",duration:4},{time:58.5,type:"boss",bossId:"titan_warden",name:"TITAN WARDEN MK II",hp:65}],Ug={id:Pg,title:Dg,subtitle:Lg,events:Ig},Ng="level03",Og="STAGE 3",Fg="CYBER ABYSS",Bg=[{time:.5,type:"stage_title",title:"STAGE 3",subtitle:"CYBER ABYSS",duration:3},{time:3.8,type:"banner",text:"DREADNOUGHT GRAVEYARD BREACHED",duration:2.2},{time:5.5,type:"wave",baseX:170,baseY:45,enemies:[{archetype:"swooper",offsetX:0,offsetY:-15},{archetype:"chaser",offsetX:8,offsetY:0},{archetype:"swooper",offsetX:0,offsetY:15}]},{time:10.5,type:"wave",baseX:170,baseY:45,enemies:[{archetype:"weaver",offsetX:0,offsetY:-22},{archetype:"weaver",offsetX:10,offsetY:-10},{archetype:"weaver",offsetX:20,offsetY:10},{archetype:"weaver",offsetX:30,offsetY:22}]},{time:16,type:"banner",text:"TACTICAL INTERCEPTORS DETECTED",duration:2},{time:18.5,type:"wave",baseX:170,baseY:30,enemies:[{archetype:"swooper",offsetX:0,offsetY:0},{archetype:"swooper",offsetX:10,offsetY:10}]},{time:21,type:"wave",baseX:170,baseY:60,enemies:[{archetype:"swooper",offsetX:0,offsetY:0},{archetype:"swooper",offsetX:10,offsetY:-10}]},{time:25.5,type:"elite",archetype:"chaser",speed:24,hp:5,score:500,message:"COMMAND DREADNOUGHT FLANK GUARD"},{time:31,type:"wave",baseX:170,baseY:45,enemies:[{archetype:"scout",offsetX:0,offsetY:-18},{archetype:"chaser",offsetX:10,offsetY:12},{archetype:"weaver",offsetX:20,offsetY:-8}]},{time:37,type:"recovery",message:"PLASMA DISCHARGE FIELD INACTIVE",duration:2},{time:40.5,type:"wave",baseX:170,baseY:45,enemies:[{archetype:"swooper",offsetX:0,offsetY:-20},{archetype:"swooper",offsetX:10,offsetY:20},{archetype:"weaver",offsetX:20,offsetY:0}]},{time:46.5,type:"wave",baseX:170,baseY:45,enemies:[{archetype:"chaser",offsetX:0,offsetY:-15},{archetype:"chaser",offsetX:12,offsetY:15}]},{time:53,type:"boss_warning",warningText:"FLAGSHIP PRIME WEAPON ACTIVE",duration:4},{time:57.5,type:"boss",bossId:"titan_warden",name:"TITAN OVERLORD",hp:80}],Gg={id:Ng,title:Og,subtitle:Fg,events:Bg};class kg{currentLevel=Dr;elapsedTime=0;nextEventIndex=0;active=!1;startStage(e){e===2?this.startLevel(Ug):e===3?this.startLevel(Gg):this.startLevel(Dr)}startLevel(e=Dr){this.currentLevel=e,this.elapsedTime=0,this.nextEventIndex=0,this.active=!0}update(e,t,n,i){if(!this.active)return;this.elapsedTime+=e;const r=this.currentLevel.events;for(;this.nextEventIndex<r.length&&this.elapsedTime>=r[this.nextEventIndex].time;){const a=r[this.nextEventIndex];switch(this.nextEventIndex++,a.type){case"stage_title":n.showStageTitle(a.title,a.subtitle,a.duration);break;case"banner":n.showBanner(a.text,a.duration);break;case"wave":{const o=a.baseX??170,l=a.baseY??45;for(const c of a.enemies){const h=o+(c.offsetX??0),d=Math.max(10,Math.min(80,l+(c.offsetY??0)));t.spawn(c.archetype,h,d,c.speed,c.hp,c.score)}break}case"recovery":a.message&&n.showBanner(a.message,a.duration);break;case"elite":{const o=a.baseX??170,l=a.baseY??45;a.message&&n.showBanner(a.message,3),t.spawn(a.archetype,o,l,a.speed,a.hp,a.score);break}case"boss_warning":n.showBossWarning(a.warningText,a.duration),i.playWarningSiren();break;case"boss":n.spawnBoss?.(a.bossId,a.name,a.hp);break}}if(this.nextEventIndex>=r.length){const a=r[r.length-1];a.type!=="boss"&&this.elapsedTime>=a.time+8&&(this.elapsedTime=16,this.nextEventIndex=3)}}reset(){this.elapsedTime=0,this.nextEventIndex=0,this.active=!1}seekTime(e){this.elapsedTime=e;const t=this.currentLevel.events.findIndex(n=>n.time>=e);this.nextEventIndex=t===-1?this.currentLevel.events.length:t}getElapsedTime(){return this.elapsedTime}}class Hg{wave=1;waveTimer=0;spawnTimer=0;active=!1;waveDuration=14;isEliteWave=!1;start(){this.wave=1,this.waveTimer=0,this.spawnTimer=2,this.active=!0,this.isEliteWave=!1}update(e,t,n,i){if(this.active&&(this.waveTimer+=e,this.spawnTimer-=e,this.spawnTimer<=0&&(this.spawnPulse(t),this.spawnTimer=Math.max(1.6,3.2-Math.min(1.5,this.wave*.1))),this.waveTimer>=this.waveDuration))if(this.wave++,this.waveTimer=0,this.spawnTimer=2.5,this.isEliteWave=this.wave%5===0,this.isEliteWave){n.showBossWarning(`WAVE ${this.wave}: ELITE SIGNATURE`,3.5),i.playWarningSiren();const r=5+Math.floor(this.wave*.8);t.spawn("chaser",175,45,20,r,500)}else n.showBanner(`ENDLESS WAVE ${this.wave}`,2.2),i.playMenuMove()}spawnPulse(e){const t=["scout"];this.wave>=2&&t.push("weaver"),this.wave>=3&&t.push("swooper"),this.wave>=4&&t.push("chaser");const n=Math.min(4,1+Math.floor(Math.random()*2)+Math.floor(this.wave/6));for(let i=0;i<n;i++){const r=t[Math.floor(Math.random()*t.length)],a=14+Math.random()*62,o=170+i*14;let l=1,c=35,h=100;r==="weaver"?(l=this.wave>=6?3:2,c=28,h=200):r==="swooper"?(l=this.wave>=8?2:1,c=42,h=250):r==="chaser"&&(l=3+Math.floor(this.wave/5),c=22,h=350),e.spawn(r,o,a,c,l,h)}}reset(){this.wave=1,this.waveTimer=0,this.spawnTimer=0,this.active=!1,this.isEliteWave=!1}getWave(){return this.wave}}class zg{score=0;highScore=0;constructor(){this.loadHighScore()}getScore(){return this.score}getHighScore(){return this.highScore}addScore(e){e<=0||(this.score+=e,this.score>this.highScore&&(this.highScore=this.score,this.saveHighScore()))}reset(){this.score=0}loadHighScore(){try{const e=localStorage.getItem(sl);if(e!==null){const t=parseInt(e,10);!isNaN(t)&&t>=0&&(this.highScore=t)}}catch{}}saveHighScore(){try{localStorage.setItem(sl,this.highScore.toString())}catch{}}}class Vn{static STORAGE_KEY="starfall84_settings";static createDefaultSettings(){return{muted:!1,volume:.5,screenShake:"full",bezelFrame:!1,theme:"verdant",gameMode:"CAMPAIGN",difficulty:"NORMAL",selectedStage:1,unlockedStages:1,selectedSkin:"alpha",unlockedSkins:["alpha"],coins:0,highScoreEndless:0,highestEndlessWave:0}}settings=Vn.createDefaultSettings();listeners=[];constructor(){this.load()}load(){try{const e=localStorage.getItem(Vn.STORAGE_KEY);if(e){const t=JSON.parse(e);typeof t.muted=="boolean"&&(this.settings.muted=t.muted),typeof t.volume=="number"&&(this.settings.volume=Math.max(0,Math.min(1,t.volume))),["full","reduced","off"].includes(t.screenShake)&&(this.settings.screenShake=t.screenShake),typeof t.bezelFrame=="boolean"&&(this.settings.bezelFrame=t.bezelFrame),["verdant","amber","ice","obsidian"].includes(t.theme)&&(this.settings.theme=t.theme),["CAMPAIGN","ENDLESS"].includes(t.gameMode)&&(this.settings.gameMode=t.gameMode),["NORMAL","HARD"].includes(t.difficulty)&&(this.settings.difficulty=t.difficulty),typeof t.selectedStage=="number"&&(this.settings.selectedStage=Math.max(1,Math.min(3,t.selectedStage))),typeof t.unlockedStages=="number"&&(this.settings.unlockedStages=Math.max(1,Math.min(3,t.unlockedStages))),["alpha","valkyrie","phantom","solaris"].includes(t.selectedSkin)&&(this.settings.selectedSkin=t.selectedSkin),Array.isArray(t.unlockedSkins)&&(this.settings.unlockedSkins=t.unlockedSkins),typeof t.coins=="number"&&(this.settings.coins=Math.max(0,t.coins)),typeof t.highScoreEndless=="number"&&(this.settings.highScoreEndless=Math.max(0,t.highScoreEndless)),typeof t.highestEndlessWave=="number"&&(this.settings.highestEndlessWave=Math.max(0,t.highestEndlessWave))}}catch{}}save(){try{localStorage.setItem(Vn.STORAGE_KEY,JSON.stringify(this.settings))}catch{}this.notify()}getSettings(){return this.settings}setMuted(e){this.settings.muted=e,this.save()}toggleMute(){return this.settings.muted=!this.settings.muted,this.save(),this.settings.muted}setVolume(e){this.settings.volume=Math.max(0,Math.min(1,e)),this.save()}cycleVolume(){const e=[.25,.5,.75,1],n=(e.findIndex(i=>Math.abs(i-this.settings.volume)<.05)+1)%e.length;return this.settings.volume=e[n],this.settings.muted&&(this.settings.muted=!1),this.save(),this.settings.volume}cycleScreenShake(){const e=["full","reduced","off"],t=e.indexOf(this.settings.screenShake);return this.settings.screenShake=e[(t+1)%e.length],this.save(),this.settings.screenShake}toggleBezel(){return this.settings.bezelFrame=!this.settings.bezelFrame,this.save(),this.settings.bezelFrame}setTheme(e){this.settings.theme=e,this.save()}cycleTheme(){const e=["verdant","amber","ice","obsidian"],t=e.indexOf(this.settings.theme);return this.settings.theme=e[(t+1)%e.length],this.save(),this.settings.theme}setGameMode(e){this.settings.gameMode=e,this.save()}setDifficulty(e){this.settings.difficulty=e,this.save()}toggleDifficulty(){return this.settings.difficulty=this.settings.difficulty==="NORMAL"?"HARD":"NORMAL",this.save(),this.settings.difficulty}setSelectedStage(e){e<=this.settings.unlockedStages&&(this.settings.selectedStage=e,this.save())}unlockNextStage(e){e>this.settings.unlockedStages&&(this.settings.unlockedStages=Math.min(3,e),this.save())}addCoins(e){return this.settings.coins+=e,this.save(),this.settings.coins}spendCoins(e){return this.settings.coins>=e?(this.settings.coins-=e,this.save(),!0):!1}unlockSkin(e,t){return this.settings.unlockedSkins.includes(e)?(this.selectSkin(e),!0):this.spendCoins(t)?(this.settings.unlockedSkins.push(e),this.settings.selectedSkin=e,this.save(),!0):!1}selectSkin(e){this.settings.unlockedSkins.includes(e)&&(this.settings.selectedSkin=e,this.save())}updateEndlessRecord(e,t){let n=!1;return e>this.settings.highScoreEndless&&(this.settings.highScoreEndless=e,n=!0),t>this.settings.highestEndlessWave&&(this.settings.highestEndlessWave=t,n=!0),n&&this.save(),n}unlockAllContent(){this.settings.unlockedStages=3,this.settings.unlockedSkins=["alpha","valkyrie","phantom","solaris"],this.settings.coins+=5e3,this.save(),this.notify()}resetSavedData(){try{localStorage.removeItem(Vn.STORAGE_KEY)}catch{}this.settings=Vn.createDefaultSettings(),this.save(),this.notify()}subscribe(e){return this.listeners.push(e),e(this.settings),()=>{this.listeners=this.listeners.filter(t=>t!==e)}}notify(){for(const e of this.listeners)e(this.settings)}}class Vg{timer=.4;interval=og;waveIndex=0;minY=14;maxY=76;update(e,t){this.timer+=e,this.timer>=this.interval&&(this.timer-=this.interval,this.spawnNextWave(t))}spawnNextWave(e){const t=this.waveIndex%6;switch(this.waveIndex++,t){case 0:e.spawn("scout",Mn,this.randY());break;case 1:e.spawn("weaver",Mn,this.randY(25,65));break;case 2:e.spawn("scout",Mn,this.randY(16,42)),e.spawn("scout",Mn+14,this.randY(48,74));break;case 3:e.spawn("swooper",Mn,Math.random()>.5?74:18);break;case 4:e.spawn("chaser",Mn,this.randY(25,65));break;case 5:e.spawn("weaver",Mn,45),e.spawn("swooper",Mn+15,70);break}}randY(e=this.minY,t=this.maxY){return e+Math.random()*(t-e)}reset(){this.timer=.4,this.waveIndex=0}}class Wg{state="TITLE";input;player;projectiles;enemies;items;boss;particles;collisions;spawner;scoreSystem;levelDirector;endlessDirector;audio;settings;accumulator=0;fixedDt=1/60;hitStopTimer=0;timeScale=1;levelDispatcher;behaviorContext;shotsFired=0;shotsHit=0;enemiesDestroyed=0;stageElapsedTime=0;coinsCollected=0;onShakeCallback;onThemeChangeCallback;constructor(e){this.input=e,this.player=new yg,this.projectiles=new bg,this.enemies=new _g,this.items=new Sg,this.boss=new Tg,this.particles=new Eg,this.collisions=new pg,this.spawner=new Vg,this.scoreSystem=new zg,this.levelDirector=new kg,this.endlessDirector=new Hg,this.audio=new Em,this.settings=new Vn,this.settings.subscribe(t=>{this.audio.setMuted(t.muted),this.audio.setVolume(t.volume),this.player.applySkin(t.selectedSkin),this.onThemeChangeCallback?.(t.theme)}),this.behaviorContext={playerPosition:this.player.position,spawnEnemyProjectile:(t,n,i,r)=>{this.projectiles.acquire(t,n,i,r,"enemy")&&this.audio.playEnemyShoot()}}}setLevelDispatcher(e){this.levelDispatcher=e,e.spawnBoss=(t,n,i)=>{this.spawnBoss(t,n,i)}}setOnThemeChange(e){this.onThemeChangeCallback=e,e(this.settings.getSettings().theme)}spawnBoss(e,t,n){this.boss.spawn(180,45,n,{onDefeated:()=>{const i=this.settings.getSettings(),r=i.difficulty==="HARD"?7500:5e3;this.scoreSystem.addScore(r),i.gameMode==="CAMPAIGN"&&i.selectedStage<3&&this.settings.unlockNextStage(i.selectedStage+1),this.state="VICTORY",this.audio.playStageClear()},onSurgeTelegraph:()=>{this.audio.playBossSurge(),this.triggerScreenShake(.8,.4)},onBossShoot:()=>{this.audio.playBossShoot()},onHeavyExplosion:()=>{this.audio.playHeavyExplosion()}})}triggerScreenShake(e,t){const n=this.settings.getSettings().screenShake;if(n==="off")return;const i=n==="reduced"?.35:1;this.onShakeCallback?.(e*i,t*i)}getSettings(){return this.settings}getCombatStats(){const e=this.shotsFired>0?this.shotsHit/this.shotsFired:0,t=this.getScore();let n="C";return t>=6e3&&e>=.4?n="S":t>=4500&&e>=.25?n="A":t>=2500&&(n="B"),{shotsFired:this.shotsFired,shotsHit:this.shotsHit,enemiesDestroyed:this.enemiesDestroyed,totalEnemiesSpawned:Math.max(this.enemiesDestroyed,15),elapsedTime:this.stageElapsedTime,rank:n,coinsCollected:this.coinsCollected,waveReached:this.endlessDirector.getWave()}}pauseGame(){this.state==="PLAYING"&&(this.state="PAUSED",this.audio.playPause())}resumeGame(){this.state==="PAUSED"&&(this.state="PLAYING",this.audio.playUnpause())}togglePause(){this.state==="PLAYING"?this.pauseGame():this.state==="PAUSED"&&this.resumeGame()}getState(){return this.state}getPlayer(){return this.player}getProjectiles(){return this.projectiles}getEnemies(){return this.enemies}getItems(){return this.items}getBoss(){return this.boss}getScore(){return this.scoreSystem.getScore()}getHighScore(){return this.scoreSystem.getHighScore()}getParticles(){return this.particles}getAudio(){return this.audio}getLevelDirector(){return this.levelDirector}getEndlessDirector(){return this.endlessDirector}getCoinsCollected(){return this.coinsCollected}getCurrentStage(){const e=this.settings.getSettings();if(e.gameMode==="ENDLESS"){const t=this.endlessDirector.getWave();return t>=10?3:t>=5?2:1}return e.selectedStage||1}setOnShake(e){this.onShakeCallback=e}triggerHitStop(e){this.hitStopTimer=Math.max(this.hitStopTimer,e)}updateFrame(e){const t=Math.min(e*this.timeScale,ym);for(this.accumulator+=t;this.accumulator>=this.fixedDt;)this.update(this.fixedDt),this.accumulator-=this.fixedDt}update(e){const t=this.input.getState();if((t.fire||t.start||t.left||t.right||t.up||t.down)&&this.audio.unlock(),this.particles.update(e),this.hitStopTimer>0){this.hitStopTimer-=e;return}if(this.state==="TITLE"){this.input.consumeAction("start")&&this.startGame(),this.input.clearJustPressed();return}if(this.state==="PAUSED"){this.input.consumeAction("pause")&&this.resumeGame(),this.input.clearJustPressed();return}if(this.state==="GAME_OVER"||this.state==="VICTORY"){this.input.consumeAction("start")&&this.startGame(),this.input.clearJustPressed();return}if(this.input.consumeAction("pause")){this.pauseGame(),this.input.clearJustPressed();return}this.stageElapsedTime+=e;const n=this.settings.getSettings();this.levelDispatcher&&(n.gameMode==="ENDLESS"?this.endlessDirector.update(e,this.enemies,this.levelDispatcher,this.audio):this.levelDirector.update(e,this.enemies,this.levelDispatcher,this.audio)),this.player.updateWithInput(e,t,this.projectiles)&&(this.shotsFired++,this.audio.playShoot()),this.enemies.update(e,this.behaviorContext),this.items.update(e),this.boss.active&&this.boss.update(e,this.behaviorContext,(r,a,o)=>this.particles.emitExplosion(r,a,o),(r,a)=>this.triggerScreenShake(r,a)),this.projectiles.update(e),this.collisions.checkProjectileEnemyCollisions(this.projectiles,this.enemies,(r,a,o)=>{if(this.shotsHit++,o){this.enemiesDestroyed++;const l=n.difficulty==="HARD"?Math.floor(r.scoreValue*1.5):r.scoreValue;this.scoreSystem.addScore(l),this.audio.playExplosion(),this.particles.emitExplosion(r.position.x,r.position.y,10),this.triggerHitStop(Cm),this.triggerScreenShake(wm,Rm);const c=Math.random();if(c<nl)this.items.acquire(r.position.x,r.position.y,"coin");else if(c<nl+Fm){const h=["powerup_spread","powerup_rapid","powerup_shield","powerup_bomb"],d=h[Math.floor(Math.random()*h.length)];this.items.acquire(r.position.x,r.position.y,d)}}else this.audio.playImpact(),this.particles.emitImpact(r.position.x,r.position.y,3)}),this.collisions.checkPlayerItemCollisions(this.items,this.player,r=>{if(r.type==="coin"){this.coinsCollected++;const a=n.difficulty==="HARD"?2:1;this.settings.addCoins(a),this.audio.playCoin(),this.particles.emitImpact(this.player.position.x,this.player.position.y,4)}else if(this.audio.playPowerup(),r.type==="powerup_spread")this.player.activatePowerup("spread"),this.triggerPowerupAmbush("spread");else if(r.type==="powerup_rapid")this.player.activatePowerup("rapid"),this.triggerPowerupAmbush("rapid");else if(r.type==="powerup_shield")this.player.activatePowerup("shield"),this.triggerPowerupAmbush("shield");else if(r.type==="powerup_bomb"){this.audio.playEmpBomb(),this.triggerScreenShake(2.5,.4);const a=this.projectiles.getAll();for(let l=0;l<a.length;l++)a[l].active&&a[l].owner==="enemy"&&(this.particles.emitImpact(a[l].position.x,a[l].position.y,2),a[l].destroy());const o=this.enemies.getAll();for(let l=0;l<o.length;l++)if(o[l].active){const c=o[l].takeDamage(Ss);this.particles.emitExplosion(o[l].position.x,o[l].position.y,8),c&&(this.enemiesDestroyed++,this.scoreSystem.addScore(o[l].scoreValue))}this.boss.active&&(this.boss.takeDamage(Ss),this.particles.emitExplosion(this.boss.position.x,this.boss.position.y,16)),this.triggerPowerupAmbush("bomb")}}),this.collisions.checkEnemyProjectilePlayerCollisions(this.projectiles,this.player,(r,a)=>{this.particles.emitExplosion(this.player.position.x,this.player.position.y,12),this.triggerHitStop(Rr),this.triggerScreenShake(Ar,wr),a?(this.audio.playGameOver(),this.gameOver()):this.audio.playPlayerHit()}),this.collisions.checkPlayerEnemyCollisions(this.player,this.enemies,(r,a)=>{this.particles.emitExplosion(this.player.position.x,this.player.position.y,16),this.particles.emitExplosion(r.position.x,r.position.y,8),this.triggerHitStop(Rr),this.triggerScreenShake(Ar,wr),a?(this.audio.playGameOver(),this.gameOver()):this.audio.playPlayerHit()}),this.boss.active&&this.collisions.checkProjectileBossCollisions(this.projectiles,this.boss,(r,a)=>{this.shotsHit++,a?(this.enemiesDestroyed++,this.scoreSystem.addScore(this.boss.scoreValue),this.audio.playHeavyExplosion(),this.triggerHitStop(.08),this.triggerScreenShake(2.5,.35)):(this.audio.playBossHit(),this.particles.emitImpact(this.boss.position.x-14,this.boss.position.y,4),this.triggerHitStop(.02),this.triggerScreenShake(.6,.08))}),this.boss.active&&this.collisions.checkPlayerBossCollision(this.player,this.boss,r=>{this.particles.emitExplosion(this.player.position.x,this.player.position.y,16),this.triggerHitStop(Rr),this.triggerScreenShake(Ar,wr),r?(this.audio.playGameOver(),this.gameOver()):this.audio.playPlayerHit()}),this.input.clearJustPressed()}startGame(){this.audio.unlock(),this.player.reset(),this.projectiles.clear(),this.enemies.clear(),this.items.clear(),this.boss.destroy(),this.particles.clear(),this.shotsFired=0,this.shotsHit=0,this.enemiesDestroyed=0,this.coinsCollected=0,this.stageElapsedTime=0;const e=this.settings.getSettings();this.player.applySkin(e.selectedSkin),e.difficulty==="HARD"&&(this.player.lives=1),e.gameMode==="ENDLESS"?(this.endlessDirector.start(),this.levelDirector.reset()):(this.endlessDirector.reset(),this.levelDirector.startStage(e.selectedStage)),this.scoreSystem.reset(),this.hitStopTimer=0,this.state="PLAYING"}gameOver(){this.settings.getSettings().gameMode==="ENDLESS"&&this.settings.updateEndlessRecord(this.getScore(),this.endlessDirector.getWave()),this.levelDirector.reset(),this.endlessDirector.reset(),this.boss.destroy(),this.state="GAME_OVER"}resetToTitle(){this.levelDirector.reset(),this.endlessDirector.reset(),this.boss.destroy(),this.projectiles.clear(),this.enemies.clear(),this.items.clear(),this.particles.clear(),this.state="TITLE"}triggerBossEncounter(){this.levelDirector.seekTime(54)}triggerPowerupAmbush(e){this.audio.playAmbushAlert(),this.triggerScreenShake(.8,.22),e==="spread"?(this.levelDispatcher?.showBanner("SPREAD CANNON ACTIVE // INTERCEPTOR WING DETECTED!",2.2),this.enemies.spawn("scout",168,45,34,1,100),this.enemies.spawn("weaver",176,28,28,2,200),this.enemies.spawn("weaver",176,62,28,2,200),this.enemies.spawn("scout",184,16,36,1,100),this.enemies.spawn("scout",184,74,36,1,100)):e==="rapid"?(this.levelDispatcher?.showBanner("RAPID FIRE ENGAGED // ASSAULT DREADNOUGHT PATROL!",2.2),this.enemies.spawn("chaser",170,36,22,3,350),this.enemies.spawn("chaser",175,54,22,3,350),this.enemies.spawn("scout",165,22,38,1,100),this.enemies.spawn("scout",165,68,38,1,100)):e==="shield"?(this.levelDispatcher?.showBanner("BARRIER SHIELD ONLINE // DIVE-BOMBER AMBUSH FLIGHT!",2.2),this.enemies.spawn("swooper",168,68,42,1,250),this.enemies.spawn("swooper",174,48,42,1,250),this.enemies.spawn("swooper",180,26,42,1,250),this.enemies.spawn("weaver",172,45,26,2,200)):e==="bomb"&&(this.levelDispatcher?.showBanner("EMP DETONATED // HOSTILE COUNTER-STRIKE PATROL!",2.2),this.enemies.spawn("scout",166,45,40,1,100),this.enemies.spawn("scout",174,30,38,1,100),this.enemies.spawn("scout",174,60,38,1,100),this.enemies.spawn("swooper",182,45,42,1,250))}setTimeScale(e){this.timeScale=Math.max(.1,Math.min(4,e))}getTimeScale(){return this.timeScale}toggleGodMode(){return this.player.godMode=!this.player.godMode,this.player.godMode}isGodMode(){return this.player.godMode}debugGivePowerup(e){this.player.activatePowerup(e),this.audio.playPowerup(),this.particles.emitImpact(this.player.position.x,this.player.position.y,6)}debugDetonateBomb(){this.audio.playEmpBomb(),this.triggerScreenShake(2.5,.4),this.levelDispatcher?.showBanner("EMP SMART BOMB DETONATED",2);const e=this.projectiles.getAll();for(let n=0;n<e.length;n++)e[n].active&&e[n].owner==="enemy"&&(this.particles.emitImpact(e[n].position.x,e[n].position.y,2),e[n].destroy());const t=this.enemies.getAll();for(let n=0;n<t.length;n++)if(t[n].active){const i=t[n].takeDamage(Ss);this.particles.emitExplosion(t[n].position.x,t[n].position.y,8),i&&(this.enemiesDestroyed++,this.scoreSystem.addScore(t[n].scoreValue))}this.boss.active&&(this.boss.takeDamage(Ss),this.particles.emitExplosion(this.boss.position.x,this.boss.position.y,16))}debugSpawnEnemy(e){const t=15+Math.random()*60;this.enemies.spawn(e,168,t),this.audio.playEnemyShoot()}debugSpawnBoss(){this.boss.active||(this.boss.spawn(140,45),this.audio.playWarningSiren(),this.levelDispatcher?.showBossWarning("TITAN WARDEN DETECTED // COMBAT READY",3))}debugSetBossHp(e){this.boss.active&&(this.boss.hp=Math.max(1,e),e<=12?(this.boss.isEnraged=!0,this.boss.state="ENRAGED"):e<=30&&(this.boss.state="PHASE_2"))}debugClearAllEnemies(){const e=this.enemies.getAll();for(let n=0;n<e.length;n++)e[n].active&&(this.particles.emitExplosion(e[n].position.x,e[n].position.y,6),e[n].destroy());const t=this.projectiles.getAll();for(let n=0;n<t.length;n++)t[n].active&&t[n].owner==="enemy"&&t[n].destroy();this.boss.active&&this.boss.destroy(),this.audio.playShieldBreak()}debugSpawnItem(e){const t=Math.min(130,this.player.position.x+35),n=this.player.position.y;this.items.acquire(t,n,e),this.audio.playMenuMove()}debugSetStage(e){this.settings.setSelectedStage(e),this.state==="PLAYING"&&this.levelDirector.startStage(e),this.audio.playMenuSelect()}debugSetEndlessWave(e){this.settings.setGameMode("ENDLESS"),this.state!=="PLAYING"&&this.startGame(),this.endlessDirector.start(),this.endlessDirector.wave=e,this.levelDispatcher?.showBanner(`ENDLESS WAVE ${e} ENGAGED`,2.5),this.audio.playMenuSelect()}debugPlaySfx(e){const t=this.audio;typeof t[e]=="function"&&t[e]()}}class Xg{group=new Rt;debrisGroup=new Rt;planetGroup=new Rt;starGeometry;starPoints;starPositions;starCount=60;starSpeed=3;planetMesh;planetRingMesh=null;planetSpeed=4.5;asteroids=[];asteroidSpeed=16;debrisList=[];currentStage=1;currentTheme="verdant";starMaterial;planetMaterial;asteroidMaterial;debrisMaterial;ringMaterial;ambientLight;dirLight;constructor(e){e.add(this.group),this.group.add(this.planetGroup),this.group.add(this.debrisGroup),this.ambientLight=new Uh(9222294,1.4),this.group.add(this.ambientLight),this.dirLight=new Ih(16777215,2.2),this.dirLight.position.set(50,60,40),this.group.add(this.dirLight),this.starMaterial=new Cl({color:Pr,size:2,sizeAttenuation:!1}),this.planetMaterial=new ms({color:dg,flatShading:!0}),this.asteroidMaterial=new ms({color:Pr,flatShading:!0}),this.debrisMaterial=new ms({color:ug,flatShading:!0}),this.ringMaterial=new ms({color:Pr,flatShading:!0,side:$t}),this.starPositions=new Float32Array(this.starCount*3);for(let t=0;t<this.starCount;t++)this.starPositions[t*3]=(Math.random()-.1)*(un+40),this.starPositions[t*3+1]=Math.random()*Tn,this.starPositions[t*3+2]=-12;this.starGeometry=new Pt,this.starGeometry.setAttribute("position",new zt(this.starPositions,3)),this.starPoints=new wh(this.starGeometry,this.starMaterial),this.group.add(this.starPoints);for(let t=0;t<7;t++){const n=2.5+Math.random()*3,i=new Ps(n,0),r=new ke(i,this.asteroidMaterial);r.position.set(Math.random()*(un+60),10+Math.random()*(Tn-20),-6);const a=new I((Math.random()-.5)*1.5,(Math.random()-.5)*1.5,(Math.random()-.5)*1.5);this.asteroids.push({mesh:r,rotSpeed:a}),this.group.add(r)}this.buildCelestialForStage(1),this.rebuildDebrisForStage(1)}setStage(e){const t=Math.max(1,Math.min(3,e));this.currentStage===t&&this.debrisList.length>0||(this.currentStage=t,this.buildCelestialForStage(t),this.rebuildDebrisForStage(t),this.setTheme(this.currentTheme))}buildCelestialForStage(e){for(;this.planetGroup.children.length>0;){const t=this.planetGroup.children[0];this.planetGroup.remove(t),t.geometry?.dispose()}if(this.planetRingMesh=null,e===1){const t=new Ds(18,1);this.planetMesh=new ke(t,this.planetMaterial),this.planetMesh.position.set(130,58,-9),this.planetGroup.add(this.planetMesh)}else if(e===2){const t=new Ds(16,1);this.planetMesh=new ke(t,this.planetMaterial),this.planetMesh.position.set(130,56,-9);const n=new Oa(21,29,20);this.planetRingMesh=new ke(n,this.ringMaterial),this.planetRingMesh.rotation.x=Math.PI/2.6,this.planetRingMesh.rotation.y=Math.PI/6,this.planetMesh.add(this.planetRingMesh),this.planetGroup.add(this.planetMesh)}else{const t=new Ls(15,1);this.planetMesh=new ke(t,this.planetMaterial),this.planetMesh.position.set(130,55,-9);const n=new Is(21,.9,6,20);this.planetRingMesh=new ke(n,this.ringMaterial),this.planetRingMesh.rotation.x=Math.PI/4,this.planetRingMesh.rotation.y=Math.PI/3,this.planetMesh.add(this.planetRingMesh),this.planetGroup.add(this.planetMesh)}}rebuildDebrisForStage(e){for(;this.debrisGroup.children.length>0;){const n=this.debrisGroup.children[0];this.debrisGroup.remove(n),n.traverse(i=>{i instanceof ke&&i.geometry?.dispose()})}this.debrisList.length=0;const t=[25,68,112,155];if(e===1){const n=new Rt,i=new ke(new hn(1.2,1.2,3.6,6),this.debrisMaterial),r=new ke(new Gt(9,.4,2.2),this.debrisMaterial),a=new ke(new Cs(1.6,1.2,6),this.debrisMaterial);a.position.y=2.4,a.rotation.x=Math.PI,n.add(i,r,a),n.position.set(t[0],25,-3),this.addDebrisItem(n,30,new I(.3,.5,.2));const o=new Rt,l=new ke(new Gt(16,1.2,1),this.debrisMaterial),c=new ke(new Gt(1,5.5,.4),this.debrisMaterial),h=c.clone();c.position.x=-4.5,h.position.x=4.5,o.add(l,c,h),o.position.set(t[1],65,-3),this.addDebrisItem(o,32,new I(.1,.2,-.3));const d=new Rt,p=new ke(new hn(3.2,.8,1.6,8),this.debrisMaterial),f=new ke(new hn(.3,.3,3.2,4),this.debrisMaterial);f.position.y=1.6,d.add(p,f),d.position.set(t[2],40,-3),this.addDebrisItem(d,28,new I(.4,-.2,.4));const g=new Rt,v=new ke(new Gt(3,3,3),this.debrisMaterial),m=new ke(new Gt(.4,7.5,.4),this.debrisMaterial);m.rotation.z=Math.PI/4,g.add(v,m),g.position.set(t[3],72,-3),this.addDebrisItem(g,33,new I(-.2,.4,.3))}else if(e===2){const n=new Rt,i=new ke(new Gt(18,3.2,1.8),this.debrisMaterial),r=new ke(new Gt(1.8,5.4,2.2),this.debrisMaterial),a=r.clone();r.position.x=-8.5,a.position.x=8.5,n.add(i,r,a),n.position.set(t[0],30,-3),this.addDebrisItem(n,31,new I(.1,.3,-.4));const o=new Rt,l=new ke(new hn(2.4,2.4,15,8,1,!0),this.debrisMaterial);l.rotation.z=Math.PI/3;const c=new ke(new hn(2.7,2.7,1.2,8),this.debrisMaterial);c.position.y=-4,c.rotation.z=Math.PI/3;const h=c.clone();h.position.y=4,o.add(l,c,h),o.position.set(t[1],62,-3),this.addDebrisItem(o,34,new I(.3,-.2,.3));const d=new ke(new Ps(3.8,0),this.debrisMaterial);d.position.set(t[2],18,-3),this.addDebrisItem(d,27,new I(.6,.5,.3));const p=new Rt,f=new ke(new hn(4,4,1.4,8),this.debrisMaterial);f.rotation.x=Math.PI/2,p.add(f),p.position.set(t[3],48,-3),this.addDebrisItem(p,32,new I(.2,.4,.6))}else{const n=new ke(new Ls(4.5,0),this.debrisMaterial);n.position.set(t[0],28,-3),this.addDebrisItem(n,29,new I(.4,.5,.3));const i=new ke(new Is(5.6,1.2,6,14,Math.PI*.85),this.debrisMaterial);i.position.set(t[1],60,-3),this.addDebrisItem(i,33,new I(.2,-.3,.5));const r=new ke(new Cs(2.4,14,4),this.debrisMaterial);r.rotation.z=Math.PI/6,r.position.set(t[2],22,-3),this.addDebrisItem(r,30,new I(.5,.2,-.4));const a=new ke(new Fa(4.8,0),this.debrisMaterial);a.position.set(t[3],70,-3),this.addDebrisItem(a,35,new I(-.4,.6,.2))}}addDebrisItem(e,t,n){this.debrisGroup.add(e),this.debrisList.push({object:e,rotSpeed:n,speed:t})}update(e){const t=this.starPositions;for(let n=0;n<this.starCount;n++)t[n*3]-=this.starSpeed*e,t[n*3]<-10&&(t[n*3]+=un+30,t[n*3+1]=Math.random()*Tn);this.starGeometry.attributes.position.needsUpdate=!0,this.planetMesh&&(this.planetMesh.position.x-=this.planetSpeed*e,this.planetMesh.rotation.y+=e*.08,this.planetMesh.rotation.z+=e*.03,this.planetRingMesh&&(this.planetRingMesh.rotation.z+=e*.12),this.planetMesh.position.x<-35&&(this.planetMesh.position.x=un+45,this.planetMesh.position.y=25+Math.random()*45));for(let n=0;n<this.asteroids.length;n++){const i=this.asteroids[n];i.mesh.position.x-=this.asteroidSpeed*e,i.mesh.rotation.x+=i.rotSpeed.x*e,i.mesh.rotation.y+=i.rotSpeed.y*e,i.mesh.rotation.z+=i.rotSpeed.z*e,i.mesh.position.x<-20&&(i.mesh.position.x=un+25+Math.random()*30,i.mesh.position.y=10+Math.random()*(Tn-20))}for(let n=0;n<this.debrisList.length;n++){const i=this.debrisList[n];i.object.position.x-=i.speed*e,i.object.rotation.x+=i.rotSpeed.x*e,i.object.rotation.y+=i.rotSpeed.y*e,i.object.rotation.z+=i.rotSpeed.z*e,i.object.position.x<-30&&(i.object.position.x=un+30+Math.random()*40,i.object.position.y=8+Math.random()*(Tn-16))}}setTheme(e){this.currentTheme=e;const t=Bi[e]||Bi.verdant;this.ambientLight.color.setHex(t.mid),this.dirLight.color.setHex(t.accent),this.starMaterial.color.setHex(t.dark),this.planetMaterial.color.setHex(t.mid),this.asteroidMaterial.color.setHex(t.dark),this.debrisMaterial.color.setHex(t.ink),this.ringMaterial.color.setHex(t.dark)}dispose(){this.starGeometry.dispose(),this.starMaterial.dispose(),this.planetMaterial.dispose(),this.asteroidMaterial.dispose(),this.debrisMaterial.dispose(),this.ringMaterial.dispose();for(const e of this.asteroids)e.mesh.geometry.dispose();for(;this.planetGroup.children.length>0;){const e=this.planetGroup.children[0];this.planetGroup.remove(e),e.geometry?.dispose()}for(;this.debrisGroup.children.length>0;){const e=this.debrisGroup.children[0];this.debrisGroup.remove(e),e.traverse(t=>{t instanceof ke&&t.geometry?.dispose()})}}}const ln={uniforms:{uResolution:{value:new Pe(320,180)},uGhosting:{value:.14},uGridIntensity:{value:.12},uVignette:{value:.22},uColorInk:{value:new Le(993821)},uColorDark:{value:new Le(2513983)},uColorMid:{value:new Le(5410661)},uColorLight:{value:new Le(9615264)}},vertexShader:`
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
  `};class dt{static makeTexture(e,t,n){const i=document.createElement("canvas");i.width=e,i.height=t;const r=i.getContext("2d");if(!r)throw new Error("Unable to create 2d canvas context");r.imageSmoothingEnabled=!1,n(r);const a=new Rh(i);return a.magFilter=Tt,a.minFilter=Tt,a.generateMipmaps=!1,a.needsUpdate=!0,a}static createPlayerTexture(e="alpha"){return e==="valkyrie"?this.makeTexture(14,8,t=>{const n="#0f2a1d",i="#265c3f",r="#528f65";t.clearRect(0,0,14,8);const a=[[1,1,0,0,0,0,0,0,0,0,0,1,1,1],[1,2,1,1,0,0,0,0,0,1,1,3,3,0],[1,1,2,2,1,1,1,1,1,2,2,1,0,0],[1,1,3,3,2,2,3,3,2,2,1,1,1,1],[1,1,3,3,2,2,3,3,2,2,1,1,1,1],[1,1,2,2,1,1,1,1,1,2,2,1,0,0],[1,2,1,1,0,0,0,0,0,1,1,3,3,0],[1,1,0,0,0,0,0,0,0,0,0,1,1,1]];for(let o=0;o<8;o++)for(let l=0;l<14;l++){const c=a[o][l];c===1?(t.fillStyle=n,t.fillRect(l,o,1,1)):c===2?(t.fillStyle=i,t.fillRect(l,o,1,1)):c===3&&(t.fillStyle=r,t.fillRect(l,o,1,1))}}):e==="phantom"?this.makeTexture(12,10,t=>{const n="#0f2a1d",i="#1b3d2b",r="#487859",a="#8ac4df";t.clearRect(0,0,12,10);const o=[[1,1,0,0,0,0,0,0,0,0,0,0],[1,2,1,0,0,0,0,0,0,0,0,0],[1,2,2,1,1,0,0,0,0,0,0,0],[1,1,2,2,2,1,1,1,0,0,0,0],[1,1,3,3,2,2,4,4,1,1,1,1],[1,1,3,3,2,2,4,4,1,1,1,1],[1,1,2,2,2,1,1,1,0,0,0,0],[1,2,2,1,1,0,0,0,0,0,0,0],[1,2,1,0,0,0,0,0,0,0,0,0],[1,1,0,0,0,0,0,0,0,0,0,0]];for(let l=0;l<10;l++)for(let c=0;c<12;c++){const h=o[l][c];h===1?(t.fillStyle=n,t.fillRect(c,l,1,1)):h===2?(t.fillStyle=i,t.fillRect(c,l,1,1)):h===3?(t.fillStyle=r,t.fillRect(c,l,1,1)):h===4&&(t.fillStyle=a,t.fillRect(c,l,1,1))}}):e==="solaris"?this.makeTexture(16,10,t=>{const n="#0f2a1d",i="#265c3f",r="#528f65",a="#d48b30";t.clearRect(0,0,16,10);const o=[[0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0],[1,1,2,2,2,2,2,1,1,1,2,1,1,1,1,1],[1,2,2,3,3,2,2,2,1,2,2,2,1,1,0,0],[1,1,2,2,4,4,2,2,2,2,3,3,2,1,1,0],[1,1,3,2,4,4,2,2,3,3,3,3,2,2,1,1],[1,1,3,2,4,4,2,2,3,3,3,3,2,2,1,1],[1,1,2,2,4,4,2,2,2,2,3,3,2,1,1,0],[1,2,2,3,3,2,2,2,1,2,2,2,1,1,0,0],[1,1,2,2,2,2,2,1,1,1,2,1,1,1,1,1],[0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0]];for(let l=0;l<10;l++)for(let c=0;c<16;c++){const h=o[l][c];h===1?(t.fillStyle=n,t.fillRect(c,l,1,1)):h===2?(t.fillStyle=i,t.fillRect(c,l,1,1)):h===3?(t.fillStyle=r,t.fillRect(c,l,1,1)):h===4&&(t.fillStyle=a,t.fillRect(c,l,1,1))}}):this.makeTexture(12,8,t=>{const n="#0f2a1d",i="#265c3f",r="#528f65";t.clearRect(0,0,12,8);const a=[[0,0,0,0,0,0,0,0,0,0,0,0],[1,1,0,0,0,0,0,0,0,0,0,0],[1,2,1,1,1,0,0,0,0,0,0,0],[1,1,2,3,1,1,1,1,1,1,0,0],[1,1,2,3,3,2,1,1,1,1,1,1],[1,1,2,3,1,1,1,1,1,1,0,0],[1,2,1,1,1,0,0,0,0,0,0,0],[1,1,0,0,0,0,0,0,0,0,0,0]];for(let o=0;o<8;o++)for(let l=0;l<12;l++){const c=a[o][l];c===1?(t.fillStyle=n,t.fillRect(l,o,1,1)):c===2?(t.fillStyle=i,t.fillRect(l,o,1,1)):c===3&&(t.fillStyle=r,t.fillRect(l,o,1,1))}})}static createCoinTexture(){return this.makeTexture(6,6,e=>{e.clearRect(0,0,6,6);const t="#0f2a1d",n="#d4a340",i="#ffdd66",r=[[0,1,1,1,1,0],[1,2,3,3,2,1],[1,3,1,1,3,1],[1,3,1,1,3,1],[1,2,3,3,2,1],[0,1,1,1,1,0]];for(let a=0;a<6;a++)for(let o=0;o<6;o++){const l=r[a][o];l===1?(e.fillStyle=t,e.fillRect(o,a,1,1)):l===2?(e.fillStyle=n,e.fillRect(o,a,1,1)):l===3&&(e.fillStyle=i,e.fillRect(o,a,1,1))}})}static createPowerupTexture(e){return this.makeTexture(8,8,t=>{t.clearRect(0,0,8,8);const n="#0f2a1d",i="#265c3f",r="#92b7a0",a="#d48b30";t.fillStyle=n,t.fillRect(0,0,8,8),t.fillStyle=i,t.fillRect(1,1,6,6),t.fillStyle=e==="bomb"?a:r,e==="spread"?(t.fillRect(2,2,4,1),t.fillRect(2,3,1,1),t.fillRect(2,4,4,1),t.fillRect(5,5,1,1),t.fillRect(2,6,4,1)):e==="rapid"?(t.fillRect(2,2,4,1),t.fillRect(2,3,1,4),t.fillRect(5,3,1,2),t.fillRect(2,4,4,1),t.fillRect(4,5,1,1),t.fillRect(5,6,1,1)):e==="shield"?(t.fillRect(2,2,3,1),t.fillRect(2,2,1,5),t.fillRect(2,4,3,1),t.fillRect(2,6,3,1),t.fillRect(5,3,1,1),t.fillRect(5,5,1,1)):e==="bomb"&&(t.fillRect(2,2,4,1),t.fillRect(2,2,1,5),t.fillRect(2,4,3,1),t.fillRect(2,6,4,1))})}static createShieldAuraTexture(){return this.makeTexture(16,16,e=>{e.clearRect(0,0,16,16);const t="#528f65",n="#92b7a0",i=(r,a,o)=>{e.fillStyle=o,e.fillRect(r,a,1,1)};for(let r=5;r<=10;r++)i(r,1,t),i(r,14,t);for(let r=5;r<=10;r++)i(1,r,t),i(14,r,t);i(2,4,t),i(3,3,n),i(4,2,t),i(11,2,t),i(12,3,n),i(13,4,t),i(2,11,t),i(3,12,n),i(4,13,t),i(11,13,t),i(12,12,n),i(13,11,t)})}static createScoutTexture(){return this.makeTexture(10,8,e=>{const t="#0f2a1d",n="#265c3f",i="#528f65";e.clearRect(0,0,10,8);const r=[[0,0,0,1,1,1,1,0,0,0],[0,0,1,1,2,2,1,1,0,0],[0,1,1,2,3,3,2,1,1,0],[1,1,2,3,1,1,3,2,1,1],[1,1,2,3,1,1,3,2,1,1],[0,1,1,2,3,3,2,1,1,0],[0,0,1,1,2,2,1,1,0,0],[0,0,0,1,1,1,1,0,0,0]];for(let a=0;a<8;a++)for(let o=0;o<10;o++){const l=r[a][o];l===1?(e.fillStyle=t,e.fillRect(o,a,1,1)):l===2?(e.fillStyle=n,e.fillRect(o,a,1,1)):l===3&&(e.fillStyle=i,e.fillRect(o,a,1,1))}})}static createWeaverTexture(){return this.makeTexture(10,8,e=>{const t="#0f2a1d",n="#265c3f",i="#528f65";e.clearRect(0,0,10,8);const r=[[0,0,1,1,0,0,1,1,0,0],[0,1,2,2,1,1,2,2,1,0],[1,1,2,3,2,2,3,2,1,1],[1,2,2,1,3,3,1,2,2,1],[1,2,2,1,3,3,1,2,2,1],[1,1,2,3,2,2,3,2,1,1],[0,1,2,2,1,1,2,2,1,0],[0,0,1,1,0,0,1,1,0,0]];for(let a=0;a<8;a++)for(let o=0;o<10;o++){const l=r[a][o];l===1?(e.fillStyle=t,e.fillRect(o,a,1,1)):l===2?(e.fillStyle=n,e.fillRect(o,a,1,1)):l===3&&(e.fillStyle=i,e.fillRect(o,a,1,1))}})}static createSwooperTexture(){return this.makeTexture(10,8,e=>{const t="#0f2a1d",n="#265c3f",i="#528f65";e.clearRect(0,0,10,8);const r=[[0,0,0,0,0,0,0,1,1,0],[0,0,0,0,0,1,1,2,1,0],[0,0,1,1,1,2,2,1,1,1],[1,1,2,2,3,2,1,1,0,1],[1,1,2,2,3,2,1,1,0,1],[0,0,1,1,1,2,2,1,1,1],[0,0,0,0,0,1,1,2,1,0],[0,0,0,0,0,0,0,1,1,0]];for(let a=0;a<8;a++)for(let o=0;o<10;o++){const l=r[a][o];l===1?(e.fillStyle=t,e.fillRect(o,a,1,1)):l===2?(e.fillStyle=n,e.fillRect(o,a,1,1)):l===3&&(e.fillStyle=i,e.fillRect(o,a,1,1))}})}static createChaserTexture(){return this.makeTexture(12,10,e=>{const t="#0f2a1d",n="#265c3f",i="#528f65";e.clearRect(0,0,12,10);const r=[[0,0,0,0,1,1,1,1,0,0,0,0],[0,1,1,1,2,2,2,2,1,1,1,0],[1,1,2,2,2,3,3,2,2,2,1,1],[1,2,1,1,2,2,2,2,1,1,2,1],[1,1,0,1,3,1,1,3,1,0,1,1],[1,1,0,1,3,1,1,3,1,0,1,1],[1,2,1,1,2,2,2,2,1,1,2,1],[1,1,2,2,2,3,3,2,2,2,1,1],[0,1,1,1,2,2,2,2,1,1,1,0],[0,0,0,0,1,1,1,1,0,0,0,0]];for(let a=0;a<10;a++)for(let o=0;o<12;o++){const l=r[a][o];l===1?(e.fillStyle=t,e.fillRect(o,a,1,1)):l===2?(e.fillStyle=n,e.fillRect(o,a,1,1)):l===3&&(e.fillStyle=i,e.fillRect(o,a,1,1))}})}static createProjectileTexture(){return this.makeTexture(4,2,e=>{e.clearRect(0,0,4,2),e.fillStyle="#265c3f",e.fillRect(0,0,4,2),e.fillStyle="#0f2a1d",e.fillRect(1,0,2,2)})}static createEnemyProjectileTexture(){return this.makeTexture(4,4,e=>{e.clearRect(0,0,4,4),e.fillStyle="#0f2a1d",e.fillRect(1,0,2,4),e.fillRect(0,1,4,2),e.fillStyle="#265c3f",e.fillRect(1,1,2,2)})}static createParticleTexture(){return this.makeTexture(2,2,e=>{e.fillStyle="#0f2a1d",e.fillRect(0,0,2,2)})}static createTitanWardenTexture(e=!1){return this.makeTexture(32,24,t=>{const n="#0f2a1d",i="#265c3f",r="#528f65",a=e?"#d48b30":"#92b7a0",o=e?"#f59e0b":"#528f65";t.clearRect(0,0,32,24);const l=(c,h,d,p,f)=>{t.fillStyle=f,t.fillRect(c,h,d,p)};l(6,8,23,8,n),l(4,9,26,6,n),l(2,10,29,4,n),l(2,5,14,3,n),l(2,16,14,3,n),l(12,2,16,6,n),l(12,16,16,6,n),l(15,1,12,2,n),l(15,21,12,2,n),l(7,9,21,6,i),l(3,11,27,2,i),l(3,6,12,1,i),l(3,17,12,1,i),l(13,3,14,4,i),l(13,17,14,4,i),l(16,2,10,1,i),l(16,21,10,1,i),l(14,4,10,1,r),l(14,19,10,1,r),l(1,5,2,3,r),l(1,16,2,3,r),l(3,11,2,2,r),l(8,10,1,4,r),l(10,11,3,2,n),l(11,11,2,1,r),l(28,4,3,2,n),l(28,18,3,2,n),l(29,10,3,4,n),l(30,11,2,2,r),l(16,8,7,8,n),l(17,9,5,6,o),l(18,10,3,4,a),l(19,11,1,2,e?"#ffffff":"#0f2a1d")})}}class qg{scene;camera;renderer;playerSprite;shieldSprite;projectileSprites=[];enemySprites=[];particleSprites=[];itemSprites=[];environment;playerMaterials;projPlayerMat;projEnemyMat;enemyMaterials;itemMaterials;bossSprite;bossMat;bossEnragedMat;renderTargetA;renderTargetB;currentRenderTarget;previousRenderTarget;postScene;postCamera;postMaterial;postQuad;shakeIntensity=0;shakeDuration=0;shakeTimer=0;constructor(e){this.scene=new mo,this.scene.background=new Le(il);const t=un/2,n=Tn/2;this.camera=new Us(-t,t,n,-n,.1,100),this.camera.position.set(t,n,20),this.camera.lookAt(t,n,0),this.renderer=new xm({antialias:!1,alpha:!1,powerPreference:"high-performance"}),this.renderer.setPixelRatio(1),this.renderer.setClearColor(il,1),e.appendChild(this.renderer.domElement),this.environment=new Xg(this.scene),this.playerMaterials={alpha:new ut({map:dt.createPlayerTexture("alpha"),transparent:!0}),valkyrie:new ut({map:dt.createPlayerTexture("valkyrie"),transparent:!0}),phantom:new ut({map:dt.createPlayerTexture("phantom"),transparent:!0}),solaris:new ut({map:dt.createPlayerTexture("solaris"),transparent:!0})},this.playerSprite=new Nn(this.playerMaterials.alpha),this.playerSprite.scale.set(Gl,kl,1),this.playerSprite.position.set(0,0,Tr),this.scene.add(this.playerSprite);const i=dt.createShieldAuraTexture(),r=new ut({map:i,transparent:!0});this.shieldSprite=new Nn(r),this.shieldSprite.scale.set(16,16,1),this.shieldSprite.visible=!1,this.scene.add(this.shieldSprite);const a=dt.createProjectileTexture(),o=dt.createEnemyProjectileTexture();this.projPlayerMat=new ut({map:a,transparent:!0}),this.projEnemyMat=new ut({map:o,transparent:!0});for(let f=0;f<Hl;f++){const g=new Nn(this.projPlayerMat);g.scale.set(Ma,ba,1),g.visible=!1,this.projectileSprites.push(g),this.scene.add(g)}this.enemyMaterials={scout:new ut({map:dt.createScoutTexture(),transparent:!0}),weaver:new ut({map:dt.createWeaverTexture(),transparent:!0}),swooper:new ut({map:dt.createSwooperTexture(),transparent:!0}),chaser:new ut({map:dt.createChaserTexture(),transparent:!0})};for(let f=0;f<ql;f++){const g=new Nn(this.enemyMaterials.scout);g.scale.set(Wl,Xl,1),g.visible=!1,this.enemySprites.push(g),this.scene.add(g)}this.itemMaterials={coin:new ut({map:dt.createCoinTexture(),transparent:!0}),powerup_spread:new ut({map:dt.createPowerupTexture("spread"),transparent:!0}),powerup_rapid:new ut({map:dt.createPowerupTexture("rapid"),transparent:!0}),powerup_shield:new ut({map:dt.createPowerupTexture("shield"),transparent:!0}),powerup_bomb:new ut({map:dt.createPowerupTexture("bomb"),transparent:!0})};for(let f=0;f<zl;f++){const g=new Nn(this.itemMaterials.coin);g.scale.set(6,6,1),g.visible=!1,this.itemSprites.push(g),this.scene.add(g)}const l=dt.createParticleTexture(),c=new ut({map:l,transparent:!0});for(let f=0;f<Bl;f++){const g=new Nn(c.clone());g.scale.set(2,2,1),g.visible=!1,this.particleSprites.push(g),this.scene.add(g)}const h=dt.createTitanWardenTexture(),d=dt.createTitanWardenTexture(!0);this.bossMat=new ut({map:h,transparent:!0}),this.bossEnragedMat=new ut({map:d,transparent:!0}),this.bossSprite=new Nn(this.bossMat),this.bossSprite.scale.set(Yl,Kl,1),this.bossSprite.position.set(0,0,Yo),this.bossSprite.visible=!1,this.scene.add(this.bossSprite);const p={minFilter:Tt,magFilter:Tt,format:Ht,type:Yt,generateMipmaps:!1};this.renderTargetA=new pn(Mr,br,p),this.renderTargetB=new pn(Mr,br,p),this.currentRenderTarget=this.renderTargetA,this.previousRenderTarget=this.renderTargetB,this.postScene=new mo,this.postCamera=new Us(-1,1,1,-1,0,1),this.postMaterial=new mn({uniforms:{tDiffuse:{value:null},tPrevious:{value:null},uResolution:{value:new Pe(Mr,br)},uGhosting:{value:ln.uniforms.uGhosting.value},uGridIntensity:{value:ln.uniforms.uGridIntensity.value},uVignette:{value:ln.uniforms.uVignette.value},uColorInk:{value:new Le(ln.uniforms.uColorInk.value)},uColorDark:{value:new Le(ln.uniforms.uColorDark.value)},uColorMid:{value:new Le(ln.uniforms.uColorMid.value)},uColorLight:{value:new Le(ln.uniforms.uColorLight.value)}},vertexShader:ln.vertexShader,fragmentShader:ln.fragmentShader,depthTest:!1,depthWrite:!1}),this.postQuad=new ke(new zi(2,2),this.postMaterial),this.postScene.add(this.postQuad)}setTheme(e){const t=Bi[e]||Bi.verdant;this.postMaterial.uniforms.uColorInk.value.setHex(t.ink),this.postMaterial.uniforms.uColorDark.value.setHex(t.dark),this.postMaterial.uniforms.uColorMid.value.setHex(t.mid),this.postMaterial.uniforms.uColorLight.value.setHex(t.light),this.renderer.setClearColor(t.bg,1),this.scene.background=new Le(t.bg),this.environment.setTheme(e)}triggerShake(e,t){this.shakeIntensity=Math.max(this.shakeIntensity,e),this.shakeDuration=Math.max(this.shakeDuration,t),this.shakeTimer=this.shakeDuration}resize(){const e=Math.max(1,window.innerWidth),t=Math.max(1,window.innerHeight),n=e/t;let i,r;n>yr?(r=t,i=t*yr):(i=e,r=e/yr),this.renderer.setSize(i,r,!1),this.renderer.domElement.style.width=`${Math.floor(i)}px`,this.renderer.domElement.style.height=`${Math.floor(r)}px`}render(e,t){const n=un/2,i=Tn/2;if(this.shakeTimer>0){this.shakeTimer-=t;const f=Math.max(0,this.shakeTimer/this.shakeDuration),g=this.shakeIntensity*f,v=(Math.random()*2-1)*g,m=(Math.random()*2-1)*g;this.camera.position.set(n+v,i+m,20)}else this.shakeIntensity=0,this.shakeDuration=0,this.camera.position.set(n,i,20);this.environment.setStage(e.getCurrentStage()),this.environment.update(t);const r=e.getState()==="PLAYING"||e.getState()==="PAUSED",a=e.getPlayer();a.active&&a.visible&&r?(this.playerSprite.visible=!0,this.playerSprite.material=this.playerMaterials[a.currentSkin]||this.playerMaterials.alpha,this.playerSprite.position.set(a.position.x,a.position.y,Tr),a.hasShield?(this.shieldSprite.visible=!0,this.shieldSprite.position.set(a.position.x,a.position.y,Tr+.1),this.shieldSprite.material.rotation+=t*3):this.shieldSprite.visible=!1):(this.playerSprite.visible=!1,this.shieldSprite.visible=!1);const o=e.getProjectiles().getAll();for(let f=0;f<o.length;f++){const g=o[f],v=this.projectileSprites[f];g.active&&r?(v.visible=!0,v.position.set(g.position.x,g.position.y,Mm),v.material=g.owner==="player"?this.projPlayerMat:this.projEnemyMat):v.visible=!1}const l=e.getEnemies().getAll();for(let f=0;f<l.length;f++){const g=l[f],v=this.enemySprites[f];g.active&&r?(v.visible=!0,v.position.set(g.position.x,g.position.y,Am),v.material=this.enemyMaterials[g.type],v.scale.set(g.width,g.height,1)):v.visible=!1}const c=e.getItems().getAll();for(let f=0;f<c.length;f++){const g=c[f],v=this.itemSprites[f];g.active&&r?(v.visible=g.visible,v.position.set(g.position.x,g.position.y,bm),v.material=this.itemMaterials[g.type]||this.itemMaterials.coin,v.scale.set(g.width,g.height,1)):v.visible=!1}const h=e.getBoss();h.active&&r?(this.bossSprite.visible=!0,this.bossSprite.position.set(h.position.x,h.position.y,Yo),h.flashTimer>0?this.bossSprite.material=this.bossEnragedMat:this.bossSprite.material=h.isEnraged?this.bossEnragedMat:this.bossMat,this.bossSprite.scale.set(h.width,h.height,1)):this.bossSprite.visible=!1;const d=e.getParticles().getAll();for(let f=0;f<d.length;f++){const g=d[f],v=this.particleSprites[f];if(g.active){v.visible=!0,v.position.set(g.x,g.y,Tm);const m=Math.max(.5,g.size*g.getNormalizedLife());v.scale.set(m,m,1)}else v.visible=!1}this.renderer.setRenderTarget(this.currentRenderTarget),this.renderer.clear(),this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(null),this.postMaterial.uniforms.tDiffuse.value=this.currentRenderTarget.texture,this.postMaterial.uniforms.tPrevious.value=this.previousRenderTarget.texture,this.renderer.render(this.postScene,this.postCamera);const p=this.currentRenderTarget;this.currentRenderTarget=this.previousRenderTarget,this.previousRenderTarget=p}dispose(){this.renderTargetA.dispose(),this.renderTargetB.dispose(),this.environment.dispose();for(const e of Object.keys(this.playerMaterials))this.playerMaterials[e].dispose();this.shieldSprite.material.dispose(),this.projPlayerMat.dispose(),this.projEnemyMat.dispose();for(const e of Object.keys(this.enemyMaterials))this.enemyMaterials[e].dispose();for(const e of Object.keys(this.itemMaterials))this.itemMaterials[e].dispose();this.bossMat.dispose(),this.bossEnragedMat.dispose(),this.postMaterial.dispose(),this.postQuad.geometry.dispose()}}class Yg{state={left:!1,right:!1,up:!1,down:!1,fire:!1,special:!1,pause:!1,start:!1};justPressed={left:!1,right:!1,up:!1,down:!1,fire:!1,special:!1,pause:!1,start:!1};onKeyDown=e=>{this.handleKey(e.code,e.key,!0)};onKeyUp=e=>{this.handleKey(e.code,e.key,!1)};onBlur=()=>{this.resetAll()};constructor(){window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp),window.addEventListener("blur",this.onBlur)}getState(){return this.state}isActionJustPressed(e){return this.justPressed[e]}consumeAction(e){const t=this.justPressed[e];return this.justPressed[e]=!1,t}clearJustPressed(){for(const e in this.justPressed)this.justPressed[e]=!1}handleKey(e,t,n){const i=a=>{n&&!this.state[a]&&(this.justPressed[a]=!0),this.state[a]=n},r=t?t.toLowerCase():"";e==="ArrowLeft"||e==="KeyA"||r==="arrowleft"||r==="a"?i("left"):e==="ArrowRight"||e==="KeyD"||r==="arrowright"||r==="d"?i("right"):e==="ArrowUp"||e==="KeyW"||r==="arrowup"||r==="w"?i("up"):e==="ArrowDown"||e==="KeyS"||r==="arrowdown"||r==="s"?i("down"):e==="Space"||r===" "?(i("fire"),i("start")):e==="KeyZ"||e==="KeyJ"||r==="z"||r==="j"?i("fire"):e==="KeyX"||e==="KeyK"||r==="x"||r==="k"?i("special"):e==="Enter"||r==="enter"?i("start"):(e==="Escape"||e==="KeyP"||r==="escape"||r==="p")&&i("pause")}resetAll(){for(const e in this.state)this.state[e]=!1,this.justPressed[e]=!1}dispose(){window.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("keyup",this.onKeyUp),window.removeEventListener("blur",this.onBlur)}}class Kg{container;titleScreen;playingScreen;gameOverScreen;victoryScreen;pauseScreen;howToPlayModal;settingsModal;hangarModal;modeSelectModal;titleHiScoreEl;titleScrapEl;titleModeEl;livesEl;scoreEl;hiScoreEl;hudCoinsEl;finalScoreEl;finalHiScoreEl;victoryScoreEl;victoryHiScoreEl;shieldBadgeEl;spreadBadgeEl;rapidBadgeEl;endlessWaveBadgeEl;victoryRankEl;victoryKillsEl;victoryAccuracyEl;victoryTimeEl;victoryScrapEl;quickMuteBtn;quickPauseBtn;stageTitleEl;stageTitleMainEl;stageTitleSubEl;bannerEl;warningEl;warningBodyEl;bossContainerEl;bossBarFillEl;bossNameLabelEl;bossStatusLabelEl;settingSoundBtns=[];settingVolumeBtns=[];settingShakeBtns=[];settingBezelBtns=[];settingThemeBtns=[];hangarScrapEl;shipGridEl;modeToggleBtn;diffToggleBtn;stageListEl;endlessStatsEl;debugModal;debugGodModeBtn;quickDebugBtn;titleDebugBtn;pauseDebugBtn;stageTitleTimer=0;bannerTimer=0;warningTimer=0;lastState=null;lastScore=-1;lastLives=-1;lastHiScore=-1;lastCoins=-1;game=null;settingsUnsubscribe=null;constructor(e,t){this.container=document.createElement("div"),this.container.className="hud-overlay",this.titleScreen=document.createElement("div"),this.titleScreen.className="screen title-screen",this.titleScreen.innerHTML=`
      <div class="logo">STARFALL 84</div>
      <div class="sublogo">2.5D MONOCHROME ARCADE SHOOTER</div>
      <div class="scrap-display title-scrap-display">SCRAP BANK: 🪙 <span class="title-scrap-val">0000</span></div>
      <div class="title-mode-indicator">MODE: CAMPAIGN - STAGE 1 [NORMAL]</div>
      <div class="menu-list">
        <button class="menu-btn start-mission-btn">START MISSION</button>
        <button class="menu-btn mode-select-btn">STAGE & MODE SELECT</button>
        <button class="menu-btn hangar-btn">SHIP HANGAR</button>
        <button class="menu-btn how-to-play-btn">HOW TO PLAY</button>
        <button class="menu-btn title-settings-btn">SETTINGS</button>
        <button class="menu-btn title-debug-btn">🛠 DEBUG CONSOLE [F1 / ~]</button>
      </div>
      <div class="prompt blink">PRESS ENTER OR SPACE TO START</div>
      <div class="hi-score-display title-hi-score">HI-SCORE: 000000</div>
      <div class="controls-guide">
        <span>MOVE: WASD / ARROWS | FIRE: SPACE / Z</span>
        <span>PAUSE: ESC / P | SOUND: M</span>
      </div>
    `,this.playingScreen=document.createElement("div"),this.playingScreen.className="screen playing-hud",this.playingScreen.innerHTML=`
      <div class="hud-bar">
        <div class="hud-lives">LIVES: <span class="lives-val">♥♥♥</span></div>
        <div class="hud-coins">🪙 <span class="hud-coins-val">000</span></div>
        <div class="hud-hiscore">HI: <span class="hiscore-val">000000</span></div>
        <div class="hud-score">SCORE: <span class="score-val">000000</span></div>
        <div class="hud-quick-controls">
          <button class="hud-icon-btn debug-icon-btn" title="Debug Console (F1 / ~)">🛠</button>
          <button class="hud-icon-btn mute-icon-btn" title="Toggle Sound (M)">🔊</button>
          <button class="hud-icon-btn pause-icon-btn" title="Pause Game (ESC / P)">⏸</button>
        </div>
      </div>
      <div class="hud-powerup-bar">
        <span class="powerup-badge shield-badge" style="display: none;">[SHIELD]</span>
        <span class="powerup-badge spread-badge" style="display: none;">[SPREAD 10s]</span>
        <span class="powerup-badge rapid-badge" style="display: none;">[RAPID 8s]</span>
        <span class="endless-wave-badge" style="display: none;">WAVE 01</span>
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
        <button class="menu-btn pause-debug-btn">🛠 DEBUG CONSOLE [F1 / ~]</button>
        <button class="menu-btn pause-sound-btn">SOUND: ON</button>
        <button class="menu-btn pause-volume-btn">VOL: 50%</button>
        <button class="menu-btn pause-shake-btn">SHAKE: FULL</button>
        <button class="menu-btn pause-theme-btn">THEME: VERDANT</button>
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
      <div class="victory-title">STAGE CLEAR</div>
      <div class="victory-sub">ORBITAL SECTOR SECURED</div>
      <div class="victory-stats">
        <div class="stat-row"><span>COMBAT EVALUATION:</span><span class="rank-val victory-rank-val">RANK S</span></div>
        <div class="stat-row"><span>ENEMIES NEUTRALIZED:</span><span class="victory-kills-val">0 / 0</span></div>
        <div class="stat-row"><span>FIRING ACCURACY:</span><span class="victory-accuracy-val">0%</span></div>
        <div class="stat-row"><span>MISSION TIME:</span><span class="victory-time-val">00:00</span></div>
        <div class="stat-row"><span>SCRAP RECOVERED:</span><span class="bonus-val victory-scrap-val">+0 🪙</span></div>
        <div class="stat-row"><span>TOTAL SCORE:</span><span class="victory-score-val">000000</span></div>
        <div class="stat-row"><span>HIGH SCORE:</span><span class="victory-hiscore-val">000000</span></div>
      </div>
      <div class="prompt blink">PRESS ENTER OR SPACE TO CONTINUE</div>
    `,this.howToPlayModal=document.createElement("div"),this.howToPlayModal.className="modal how-to-play-modal",this.howToPlayModal.style.display="none",this.howToPlayModal.innerHTML=`
      <div class="modal-box">
        <div class="modal-header">TACTICAL BRIEFING // FLIGHT MANUAL</div>
        <div class="modal-body">
          <div class="guide-item"><span>FLIGHT CONTROLS:</span><span>WASD / ARROW KEYS</span></div>
          <div class="guide-item"><span>PRIMARY WEAPONS:</span><span>SPACE / Z</span></div>
          <div class="guide-item"><span>TACTICAL PAUSE:</span><span>ESC / P</span></div>
          <div class="guide-item"><span>AUDIO TOGGLE:</span><span>M</span></div>
          <div class="guide-item"><span>POWER-UP [S]:</span><span>3-WAY TRIPLE SPREAD SHOT</span></div>
          <div class="guide-item"><span>POWER-UP [R]:</span><span>RAPID FIRE BOOST</span></div>
          <div class="guide-item"><span>POWER-UP [B]:</span><span>KINETIC ENERGY SHIELD</span></div>
          <div class="guide-item"><span>POWER-UP [E]:</span><span>EMP SMART BOMB SCREEN-WIPE</span></div>
          <div class="guide-briefing">
            DEFEAT HOSTILE SQUADRONS TO RECOVER SCRAP COINS AND POWER-UP CAPSULES. UNLOCK ADVANCED SHIPS IN THE HANGAR!
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
            <span>LCD THEME:</span>
            <button class="menu-btn modal-theme-btn">THEME: VERDANT</button>
          </div>
          <div class="guide-item">
            <span>LCD BEZEL HOUSING:</span>
            <button class="menu-btn modal-bezel-btn">BEZEL: OFF</button>
          </div>
        </div>
        <button class="menu-btn modal-close-btn settings-close-btn">CLOSE [ESC]</button>
      </div>
    `,this.hangarModal=document.createElement("div"),this.hangarModal.className="modal hangar-modal",this.hangarModal.style.display="none",this.hangarModal.innerHTML=`
      <div class="modal-box wide">
        <div class="modal-header">HANGAR DECK // STARFIGHTER FLEET</div>
        <div class="scrap-display hangar-scrap-display">AVAILABLE SCRAP: 🪙 <span class="hangar-coins-val">0000</span></div>
        <div class="ship-grid"></div>
        <button class="menu-btn modal-close-btn hangar-close-btn">CLOSE [ESC]</button>
      </div>
    `,this.modeSelectModal=document.createElement("div"),this.modeSelectModal.className="modal mode-select-modal",this.modeSelectModal.style.display="none",this.modeSelectModal.innerHTML=`
      <div class="modal-box wide">
        <div class="modal-header">MISSION DEPLOYMENT PROTOCOL</div>
        <div class="modal-body">
          <div class="guide-item">
            <span>OPERATIONAL MODE:</span>
            <button class="menu-btn mode-toggle-btn">MODE: CAMPAIGN</button>
          </div>
          <div class="guide-item">
            <span>COMBAT DIFFICULTY:</span>
            <button class="menu-btn diff-toggle-btn">DIFFICULTY: NORMAL</button>
          </div>
          <div class="campaign-section">
            <div style="font-size: 10px; margin: 4px 0;">SELECT MISSION SECTOR:</div>
            <div class="stage-list"></div>
          </div>
          <div class="endless-section" style="display: none;">
            <div class="scrap-display endless-stats-display">
              HIGHEST WAVE: <span class="endless-wave-val">WAVE 01</span> | RECORD: <span class="endless-record-val">000000</span>
            </div>
          </div>
        </div>
        <button class="menu-btn modal-close-btn mode-select-close-btn">CONFIRM [ESC]</button>
      </div>
    `,this.debugModal=document.createElement("div"),this.debugModal.className="modal debug-modal",this.debugModal.style.display="none",this.debugModal.innerHTML=`
      <div class="modal-box debug-box">
        <div class="modal-header debug-header">
          <span>🛠 DEVELOPER & QA DEBUG CONSOLE</span>
          <button class="menu-btn debug-close-btn" style="padding: 2px 8px; font-size: 8px;">✖ CLOSE [ESC / ~]</button>
        </div>
        <div class="debug-scroll-area">
          <!-- Section 1: Player Cheats & Weapons -->
          <div class="debug-section">
            <div class="debug-section-title">⚡ PLAYER CHEATS & WEAPONS</div>
            <div class="debug-btn-grid">
              <button class="debug-btn dbg-godmode-btn">🛡 GOD MODE: OFF</button>
              <button class="debug-btn dbg-spread-btn">🔫 GIVE SPREAD (15s)</button>
              <button class="debug-btn dbg-rapid-btn">⚡ GIVE RAPID (15s)</button>
              <button class="debug-btn dbg-shield-btn">🔮 GIVE SHIELD</button>
              <button class="debug-btn dbg-emp-btn">💥 DETONATE EMP BOMB</button>
              <button class="debug-btn dbg-add-life-btn">♥ LIVES +1 (MAX 5)</button>
              <button class="debug-btn dbg-add-coins-btn">🪙 +500 SCRAP</button>
              <button class="debug-btn dbg-unlock-all-btn">🚀 UNLOCK ALL CONTENT</button>
            </div>
            <div class="debug-sub-row">
              <span>HULL:</span>
              <button class="debug-chip-btn dbg-ship-alpha">ALPHA</button>
              <button class="debug-chip-btn dbg-ship-valkyrie">VALKYRIE</button>
              <button class="debug-chip-btn dbg-ship-phantom">PHANTOM</button>
              <button class="debug-chip-btn dbg-ship-solaris">SOLARIS</button>
            </div>
          </div>

          <!-- Section 2: Ambush Waves -->
          <div class="debug-section">
            <div class="debug-section-title">⚔ TEST POWER-UP AMBUSH WAVES</div>
            <div class="debug-btn-grid">
              <button class="debug-btn dbg-ambush-spread">⚔ SPREAD AMBUSH (5 CHEVRON)</button>
              <button class="debug-btn dbg-ambush-rapid">⚔ RAPID AMBUSH (CHASERS)</button>
              <button class="debug-btn dbg-ambush-shield">⚔ SHIELD AMBUSH (SWOOPERS)</button>
              <button class="debug-btn dbg-ambush-bomb">⚔ EMP COUNTER-STRIKE</button>
            </div>
          </div>

          <!-- Section 3: Spawn Hostiles & Boss -->
          <div class="debug-section">
            <div class="debug-section-title">👾 HOSTILE ENEMY & BOSS SPAWNER</div>
            <div class="debug-btn-grid">
              <button class="debug-btn dbg-spawn-scout">👾 SPAWN SCOUT</button>
              <button class="debug-btn dbg-spawn-weaver">👾 SPAWN WEAVER</button>
              <button class="debug-btn dbg-spawn-swooper">👾 SPAWN SWOOPER</button>
              <button class="debug-btn dbg-spawn-chaser">👾 SPAWN CHASER</button>
              <button class="debug-btn dbg-spawn-boss">☠ SPAWN TITAN WARDEN</button>
              <button class="debug-btn dbg-enrage-boss">🔥 ENRAGE BOSS (HP 10)</button>
              <button class="debug-btn dbg-clear-enemies">💥 CLEAR ALL HOSTILES</button>
            </div>
          </div>

          <!-- Section 4: Spawn Collectibles -->
          <div class="debug-section">
            <div class="debug-section-title">📦 SPAWN COLLECTIBLE DROPS</div>
            <div class="debug-btn-grid">
              <button class="debug-btn dbg-spawn-coin">🪙 DROP COIN</button>
              <button class="debug-btn dbg-drop-spread">📦 DROP [S] SPREAD</button>
              <button class="debug-btn dbg-drop-rapid">📦 DROP [R] RAPID</button>
              <button class="debug-btn dbg-drop-shield">📦 DROP [B] SHIELD</button>
              <button class="debug-btn dbg-drop-bomb">📦 DROP [E] EMP BOMB</button>
            </div>
          </div>

          <!-- Section 5: Stages & Environments -->
          <div class="debug-section">
            <div class="debug-section-title">🪐 STAGE & DEBRIS ENVIRONMENT</div>
            <div class="debug-btn-grid">
              <button class="debug-btn dbg-stage-1">🪐 STAGE 1 // SATELLITES</button>
              <button class="debug-btn dbg-stage-2">🪐 STAGE 2 // GIRDERS & RING</button>
              <button class="debug-btn dbg-stage-3">🪐 STAGE 3 // CRYSTALS & VOID</button>
              <button class="debug-btn dbg-endless-w2">♾ ENDLESS WAVE 2</button>
              <button class="debug-btn dbg-endless-w5">♾ ENDLESS WAVE 5 (ELITE)</button>
              <button class="debug-btn dbg-endless-w10">♾ ENDLESS WAVE 10</button>
            </div>
          </div>

          <!-- Section 6: Themes & Speeds -->
          <div class="debug-section">
            <div class="debug-section-title">🎨 THEMES, DISPLAY & SIMULATION SPEED</div>
            <div class="debug-btn-grid">
              <button class="debug-btn dbg-theme-verdant">🌿 VERDANT (DEFAULT)</button>
              <button class="debug-btn dbg-theme-amber">🔥 AMBER FOUNDRY</button>
              <button class="debug-btn dbg-theme-ice">❄ CYBER ICE</button>
              <button class="debug-btn dbg-theme-obsidian">🌑 OBSIDIAN VOID</button>
              <button class="debug-btn dbg-toggle-bezel">📺 TOGGLE BEZEL</button>
              <button class="debug-btn dbg-speed-half">⏱ 0.5x SLOW-MO</button>
              <button class="debug-btn dbg-speed-normal">⏱ 1.0x NORMAL</button>
              <button class="debug-btn dbg-speed-double">⏱ 2.0x FAST</button>
            </div>
          </div>

          <!-- Section 7: Audio Soundboard -->
          <div class="debug-section">
            <div class="debug-section-title">🔊 AUDIO SYNTHESIZER SOUNDBOARD</div>
            <div class="debug-btn-grid">
              <button class="debug-btn dbg-sfx-shoot">🔊 SHOOT</button>
              <button class="debug-btn dbg-sfx-eshoot">🔊 ENEMY SHOOT</button>
              <button class="debug-btn dbg-sfx-expl">🔊 EXPLOSION</button>
              <button class="debug-btn dbg-sfx-hexpl">🔊 HEAVY EXPL</button>
              <button class="debug-btn dbg-sfx-coin">🔊 COIN</button>
              <button class="debug-btn dbg-sfx-powerup">🔊 POWERUP</button>
              <button class="debug-btn dbg-sfx-shield">🔊 SHIELD BREAK</button>
              <button class="debug-btn dbg-sfx-emp">🔊 EMP BOMB</button>
              <button class="debug-btn dbg-sfx-ambush">🔊 AMBUSH ALERT</button>
              <button class="debug-btn dbg-sfx-siren">🔊 BOSS SIREN</button>
              <button class="debug-btn dbg-sfx-clear">🔊 CLEAR FANFARE</button>
            </div>
          </div>
        </div>
      </div>
    `,this.container.appendChild(this.titleScreen),this.container.appendChild(this.playingScreen),this.container.appendChild(this.pauseScreen),this.container.appendChild(this.gameOverScreen),this.container.appendChild(this.victoryScreen),this.container.appendChild(this.howToPlayModal),this.container.appendChild(this.settingsModal),this.container.appendChild(this.hangarModal),this.container.appendChild(this.modeSelectModal),this.container.appendChild(this.debugModal),e.appendChild(this.container),this.titleHiScoreEl=this.titleScreen.querySelector(".title-hi-score"),this.titleScrapEl=this.titleScreen.querySelector(".title-scrap-val"),this.titleModeEl=this.titleScreen.querySelector(".title-mode-indicator"),this.livesEl=this.playingScreen.querySelector(".lives-val"),this.scoreEl=this.playingScreen.querySelector(".score-val"),this.hiScoreEl=this.playingScreen.querySelector(".hiscore-val"),this.hudCoinsEl=this.playingScreen.querySelector(".hud-coins-val"),this.shieldBadgeEl=this.playingScreen.querySelector(".shield-badge"),this.spreadBadgeEl=this.playingScreen.querySelector(".spread-badge"),this.rapidBadgeEl=this.playingScreen.querySelector(".rapid-badge"),this.endlessWaveBadgeEl=this.playingScreen.querySelector(".endless-wave-badge"),this.finalScoreEl=this.gameOverScreen.querySelector(".final-score-val"),this.finalHiScoreEl=this.gameOverScreen.querySelector(".final-hiscore-val"),this.victoryScoreEl=this.victoryScreen.querySelector(".victory-score-val"),this.victoryHiScoreEl=this.victoryScreen.querySelector(".victory-hiscore-val"),this.victoryRankEl=this.victoryScreen.querySelector(".victory-rank-val"),this.victoryKillsEl=this.victoryScreen.querySelector(".victory-kills-val"),this.victoryAccuracyEl=this.victoryScreen.querySelector(".victory-accuracy-val"),this.victoryTimeEl=this.victoryScreen.querySelector(".victory-time-val"),this.victoryScrapEl=this.victoryScreen.querySelector(".victory-scrap-val"),this.quickMuteBtn=this.playingScreen.querySelector(".mute-icon-btn"),this.quickPauseBtn=this.playingScreen.querySelector(".pause-icon-btn"),this.quickDebugBtn=this.playingScreen.querySelector(".debug-icon-btn"),this.titleDebugBtn=this.titleScreen.querySelector(".title-debug-btn"),this.pauseDebugBtn=this.pauseScreen.querySelector(".pause-debug-btn"),this.stageTitleEl=this.playingScreen.querySelector(".stage-title-banner"),this.stageTitleMainEl=this.playingScreen.querySelector(".stage-title-main"),this.stageTitleSubEl=this.playingScreen.querySelector(".stage-title-sub"),this.bannerEl=this.playingScreen.querySelector(".tactical-banner"),this.warningEl=this.playingScreen.querySelector(".boss-warning-banner"),this.warningBodyEl=this.playingScreen.querySelector(".warning-body"),this.bossContainerEl=this.playingScreen.querySelector(".boss-health-container"),this.bossBarFillEl=this.playingScreen.querySelector(".boss-bar-fill"),this.bossNameLabelEl=this.playingScreen.querySelector(".boss-name-label"),this.bossStatusLabelEl=this.playingScreen.querySelector(".boss-status-label"),this.hangarScrapEl=this.hangarModal.querySelector(".hangar-coins-val"),this.shipGridEl=this.hangarModal.querySelector(".ship-grid"),this.modeToggleBtn=this.modeSelectModal.querySelector(".mode-toggle-btn"),this.diffToggleBtn=this.modeSelectModal.querySelector(".diff-toggle-btn"),this.stageListEl=this.modeSelectModal.querySelector(".stage-list"),this.endlessStatsEl=this.modeSelectModal.querySelector(".endless-stats-display");const n=this.pauseScreen.querySelector(".pause-sound-btn"),i=this.settingsModal.querySelector(".modal-sound-btn");n&&this.settingSoundBtns.push(n),i&&this.settingSoundBtns.push(i);const r=this.pauseScreen.querySelector(".pause-volume-btn"),a=this.settingsModal.querySelector(".modal-volume-btn");r&&this.settingVolumeBtns.push(r),a&&this.settingVolumeBtns.push(a);const o=this.pauseScreen.querySelector(".pause-shake-btn"),l=this.settingsModal.querySelector(".modal-shake-btn");o&&this.settingShakeBtns.push(o),l&&this.settingShakeBtns.push(l);const c=this.pauseScreen.querySelector(".pause-bezel-btn"),h=this.settingsModal.querySelector(".modal-bezel-btn");c&&this.settingBezelBtns.push(c),h&&this.settingBezelBtns.push(h);const d=this.pauseScreen.querySelector(".pause-theme-btn"),p=this.settingsModal.querySelector(".modal-theme-btn");d&&this.settingThemeBtns.push(d),p&&this.settingThemeBtns.push(p),this.setupEvents(),t&&this.attachGame(t)}setupEvents(){this.titleScreen.querySelector(".start-mission-btn")?.addEventListener("click",()=>{this.game?.getAudio().playMenuSelect(),this.game?.startGame()}),this.titleScreen.querySelector(".mode-select-btn")?.addEventListener("click",()=>{this.game?.getAudio().playMenuSelect(),this.modeSelectModal.style.display="flex",this.renderModeSelectUI()}),this.titleScreen.querySelector(".hangar-btn")?.addEventListener("click",()=>{this.game?.getAudio().playMenuSelect(),this.hangarModal.style.display="flex",this.renderHangarUI()}),this.titleScreen.querySelector(".how-to-play-btn")?.addEventListener("click",()=>{this.game?.getAudio().playMenuSelect(),this.howToPlayModal.style.display="flex"}),this.titleScreen.querySelector(".title-settings-btn")?.addEventListener("click",()=>{this.game?.getAudio().playMenuSelect(),this.settingsModal.style.display="flex"}),this.titleDebugBtn?.addEventListener("click",()=>this.toggleDebugModal()),this.pauseDebugBtn?.addEventListener("click",()=>this.toggleDebugModal()),this.quickDebugBtn?.addEventListener("click",()=>this.toggleDebugModal()),this.setupDebugModalEvents(),this.howToPlayModal.querySelector(".how-to-play-close-btn")?.addEventListener("click",()=>{this.game?.getAudio().playMenuSelect(),this.howToPlayModal.style.display="none"}),this.settingsModal.querySelector(".settings-close-btn")?.addEventListener("click",()=>{this.game?.getAudio().playMenuSelect(),this.settingsModal.style.display="none"}),this.hangarModal.querySelector(".hangar-close-btn")?.addEventListener("click",()=>{this.game?.getAudio().playMenuSelect(),this.hangarModal.style.display="none"}),this.modeSelectModal.querySelector(".mode-select-close-btn")?.addEventListener("click",()=>{this.game?.getAudio().playMenuSelect(),this.modeSelectModal.style.display="none"}),this.modeToggleBtn.addEventListener("click",()=>{if(!this.game)return;this.game.getAudio().playMenuMove();const g=this.game.getSettings().getSettings().gameMode==="CAMPAIGN"?"ENDLESS":"CAMPAIGN";this.game.getSettings().setGameMode(g),this.renderModeSelectUI()}),this.diffToggleBtn.addEventListener("click",()=>{this.game&&(this.game.getAudio().playMenuMove(),this.game.getSettings().toggleDifficulty(),this.renderModeSelectUI())}),this.quickMuteBtn.addEventListener("click",()=>{this.game?.getAudio().playMenuMove(),this.game?.getSettings().toggleMute()}),this.quickPauseBtn.addEventListener("click",()=>{this.game?.togglePause()}),this.pauseScreen.querySelector(".pause-resume-btn")?.addEventListener("click",()=>{this.game?.resumeGame()}),this.pauseScreen.querySelector(".pause-restart-btn")?.addEventListener("click",()=>{this.game?.getAudio().playMenuSelect(),this.game?.startGame()}),this.pauseScreen.querySelector(".pause-quit-btn")?.addEventListener("click",()=>{this.game?.getAudio().playMenuSelect(),this.game?.resetToTitle()});for(const f of this.settingSoundBtns)f.addEventListener("click",()=>{this.game?.getAudio().playMenuMove(),this.game?.getSettings().toggleMute()});for(const f of this.settingVolumeBtns)f.addEventListener("click",()=>{this.game?.getAudio().playMenuMove(),this.game?.getSettings().cycleVolume()});for(const f of this.settingShakeBtns)f.addEventListener("click",()=>{this.game?.getAudio().playMenuMove(),this.game?.getSettings().cycleScreenShake()});for(const f of this.settingBezelBtns)f.addEventListener("click",()=>{this.game?.getAudio().playMenuMove(),this.game?.getSettings().toggleBezel()});for(const f of this.settingThemeBtns)f.addEventListener("click",()=>{this.game?.getAudio().playMenuMove(),this.game?.getSettings().cycleTheme()});window.addEventListener("keydown",f=>{if(f.code==="Escape"){if(this.howToPlayModal.style.display==="flex"){this.howToPlayModal.style.display="none",this.game?.getAudio().playMenuSelect();return}if(this.settingsModal.style.display==="flex"){this.settingsModal.style.display="none",this.game?.getAudio().playMenuSelect();return}if(this.hangarModal.style.display==="flex"){this.hangarModal.style.display="none",this.game?.getAudio().playMenuSelect();return}if(this.modeSelectModal.style.display==="flex"){this.modeSelectModal.style.display="none",this.game?.getAudio().playMenuSelect();return}if(this.debugModal.style.display==="flex"){this.debugModal.style.display="none",this.game?.getAudio().playMenuSelect();return}}if(f.code==="Backquote"||f.code==="F1"||f.key==="~"||f.key==="\\"){f.preventDefault(),this.toggleDebugModal();return}f.code==="KeyM"&&(f.repeat||(this.game?.getAudio().playMenuMove(),this.game?.getSettings().toggleMute()))})}toggleDebugModal(){const e=this.debugModal.style.display==="none";this.debugModal.style.display=e?"flex":"none",e?(this.game?.getAudio().playMenuSelect(),this.updateDebugUIState()):this.game?.getAudio().playMenuMove()}updateDebugUIState(){if(!this.game)return;const e=this.game.isGodMode();this.debugGodModeBtn&&(this.debugGodModeBtn.textContent=`🛡 GOD MODE: ${e?"ON":"OFF"}`,this.debugGodModeBtn.classList.toggle("active",e))}setupDebugModalEvents(){this.debugModal.querySelector(".debug-close-btn")?.addEventListener("click",()=>this.toggleDebugModal()),this.debugGodModeBtn=this.debugModal.querySelector(".dbg-godmode-btn"),this.debugGodModeBtn?.addEventListener("click",()=>{if(!this.game)return;const Ie=this.game.toggleGodMode();this.debugGodModeBtn.textContent=`🛡 GOD MODE: ${Ie?"ON":"OFF"}`,this.debugGodModeBtn.classList.toggle("active",Ie),this.showBanner(`DEBUG: GOD MODE ${Ie?"ENABLED":"DISABLED"}`,2),this.game.getAudio().playMenuSelect()}),this.debugModal.querySelector(".dbg-spread-btn")?.addEventListener("click",()=>{this.game?.debugGivePowerup("spread"),this.showBanner("DEBUG: SPREAD SHOT GIVEN (15s)",2)}),this.debugModal.querySelector(".dbg-rapid-btn")?.addEventListener("click",()=>{this.game?.debugGivePowerup("rapid"),this.showBanner("DEBUG: RAPID FIRE GIVEN (15s)",2)}),this.debugModal.querySelector(".dbg-shield-btn")?.addEventListener("click",()=>{this.game?.debugGivePowerup("shield"),this.showBanner("DEBUG: BARRIER SHIELD ONLINE",2)}),this.debugModal.querySelector(".dbg-emp-btn")?.addEventListener("click",()=>{this.game?.debugDetonateBomb()}),this.debugModal.querySelector(".dbg-add-life-btn")?.addEventListener("click",()=>{this.game&&(this.game.getPlayer().lives=Math.min(5,this.game.getPlayer().lives+1),this.showBanner(`DEBUG: LIVES = ${this.game.getPlayer().lives}`,2),this.game.getAudio().playCoin())}),this.debugModal.querySelector(".dbg-add-coins-btn")?.addEventListener("click",()=>{this.game&&(this.game.getSettings().addCoins(500),this.showBanner("DEBUG: +500 SCRAP ADDED",2),this.game.getAudio().playCoin())}),this.debugModal.querySelector(".dbg-unlock-all-btn")?.addEventListener("click",()=>{this.game&&(this.game.getSettings().unlockAllContent(),this.showBanner("DEBUG: ALL SHIPS & STAGES UNLOCKED",2.5),this.game.getAudio().playStageClear())});const c=["alpha","valkyrie","phantom","solaris"];for(const Ie of c)this.debugModal.querySelector(`.dbg-ship-${Ie}`)?.addEventListener("click",()=>{this.game&&(this.game.getSettings().selectSkin(Ie),this.game.getPlayer().applySkin(Ie),this.showBanner(`DEBUG: EQUIPPED ${Ie.toUpperCase()} STARFIGHTER`,2),this.game.getAudio().playMenuSelect())});this.debugModal.querySelector(".dbg-ambush-spread")?.addEventListener("click",()=>{this.game?.triggerPowerupAmbush("spread")}),this.debugModal.querySelector(".dbg-ambush-rapid")?.addEventListener("click",()=>{this.game?.triggerPowerupAmbush("rapid")}),this.debugModal.querySelector(".dbg-ambush-shield")?.addEventListener("click",()=>{this.game?.triggerPowerupAmbush("shield")}),this.debugModal.querySelector(".dbg-ambush-bomb")?.addEventListener("click",()=>{this.game?.triggerPowerupAmbush("bomb")}),this.debugModal.querySelector(".dbg-spawn-scout")?.addEventListener("click",()=>this.game?.debugSpawnEnemy("scout")),this.debugModal.querySelector(".dbg-spawn-weaver")?.addEventListener("click",()=>this.game?.debugSpawnEnemy("weaver")),this.debugModal.querySelector(".dbg-spawn-swooper")?.addEventListener("click",()=>this.game?.debugSpawnEnemy("swooper")),this.debugModal.querySelector(".dbg-spawn-chaser")?.addEventListener("click",()=>this.game?.debugSpawnEnemy("chaser")),this.debugModal.querySelector(".dbg-spawn-boss")?.addEventListener("click",()=>this.game?.debugSpawnBoss()),this.debugModal.querySelector(".dbg-enrage-boss")?.addEventListener("click",()=>{this.game?.debugSetBossHp(10),this.showBanner("DEBUG: BOSS ENRAGED (HP 10)",2)}),this.debugModal.querySelector(".dbg-clear-enemies")?.addEventListener("click",()=>{this.game?.debugClearAllEnemies(),this.showBanner("DEBUG: ALL HOSTILES CLEARED",2)}),this.debugModal.querySelector(".dbg-spawn-coin")?.addEventListener("click",()=>this.game?.debugSpawnItem("coin")),this.debugModal.querySelector(".dbg-drop-spread")?.addEventListener("click",()=>this.game?.debugSpawnItem("powerup_spread")),this.debugModal.querySelector(".dbg-drop-rapid")?.addEventListener("click",()=>this.game?.debugSpawnItem("powerup_rapid")),this.debugModal.querySelector(".dbg-drop-shield")?.addEventListener("click",()=>this.game?.debugSpawnItem("powerup_shield")),this.debugModal.querySelector(".dbg-drop-bomb")?.addEventListener("click",()=>this.game?.debugSpawnItem("powerup_bomb")),this.debugModal.querySelector(".dbg-stage-1")?.addEventListener("click",()=>{this.game?.debugSetStage(1),this.showBanner("DEBUG: STAGE 1 // VERDANT ORBIT (SATELLITES)",2.2)}),this.debugModal.querySelector(".dbg-stage-2")?.addEventListener("click",()=>{this.game?.debugSetStage(2),this.showBanner("DEBUG: STAGE 2 // IRON FOUNDRY (GIRDERS & RING)",2.2)}),this.debugModal.querySelector(".dbg-stage-3")?.addEventListener("click",()=>{this.game?.debugSetStage(3),this.showBanner("DEBUG: STAGE 3 // CYBER ABYSS (CRYSTALS & VOID)",2.2)}),this.debugModal.querySelector(".dbg-endless-w2")?.addEventListener("click",()=>this.game?.debugSetEndlessWave(2)),this.debugModal.querySelector(".dbg-endless-w5")?.addEventListener("click",()=>this.game?.debugSetEndlessWave(5)),this.debugModal.querySelector(".dbg-endless-w10")?.addEventListener("click",()=>this.game?.debugSetEndlessWave(10)),this.debugModal.querySelector(".dbg-theme-verdant")?.addEventListener("click",()=>this.game?.getSettings().setTheme("verdant")),this.debugModal.querySelector(".dbg-theme-amber")?.addEventListener("click",()=>this.game?.getSettings().setTheme("amber")),this.debugModal.querySelector(".dbg-theme-ice")?.addEventListener("click",()=>this.game?.getSettings().setTheme("ice")),this.debugModal.querySelector(".dbg-theme-obsidian")?.addEventListener("click",()=>this.game?.getSettings().setTheme("obsidian")),this.debugModal.querySelector(".dbg-toggle-bezel")?.addEventListener("click",()=>this.game?.getSettings().toggleBezel()),this.debugModal.querySelector(".dbg-speed-half")?.addEventListener("click",()=>{this.game?.setTimeScale(.5),this.showBanner("DEBUG: 0.5x SLOW-MO SPEED",2)}),this.debugModal.querySelector(".dbg-speed-normal")?.addEventListener("click",()=>{this.game?.setTimeScale(1),this.showBanner("DEBUG: 1.0x NORMAL SPEED",2)}),this.debugModal.querySelector(".dbg-speed-double")?.addEventListener("click",()=>{this.game?.setTimeScale(2),this.showBanner("DEBUG: 2.0x FAST SPEED",2)});const Qe=[{sel:".dbg-sfx-shoot",method:"playShoot"},{sel:".dbg-sfx-eshoot",method:"playEnemyShoot"},{sel:".dbg-sfx-expl",method:"playExplosion"},{sel:".dbg-sfx-hexpl",method:"playHeavyExplosion"},{sel:".dbg-sfx-coin",method:"playCoin"},{sel:".dbg-sfx-powerup",method:"playPowerup"},{sel:".dbg-sfx-shield",method:"playShieldBreak"},{sel:".dbg-sfx-emp",method:"playEmpBomb"},{sel:".dbg-sfx-ambush",method:"playAmbushAlert"},{sel:".dbg-sfx-siren",method:"playWarningSiren"},{sel:".dbg-sfx-clear",method:"playStageClear"}];for(const Ie of Qe)this.debugModal.querySelector(Ie.sel)?.addEventListener("click",()=>{this.game?.debugPlaySfx(Ie.method)})}attachGame(e){this.game!==e&&(this.game=e,this.settingsUnsubscribe&&this.settingsUnsubscribe(),this.settingsUnsubscribe=e.getSettings().subscribe(t=>{this.applySettingsUI(t)}))}applySettingsUI(e){const t=`SOUND: ${e.muted?"OFF":"ON"}`;for(const l of this.settingSoundBtns)l.textContent=t;this.quickMuteBtn.textContent=e.muted?"🔇":"🔊";const n=`VOL: ${Math.round(e.volume*100)}%`;for(const l of this.settingVolumeBtns)l.textContent=n;const i=`SHAKE: ${e.screenShake.toUpperCase()}`;for(const l of this.settingShakeBtns)l.textContent=i;const r=`BEZEL: ${e.bezelFrame?"ON":"OFF"}`;for(const l of this.settingBezelBtns)l.textContent=r;const a=Bi[e.theme]?.name||"VERDANT";for(const l of this.settingThemeBtns)l.textContent=`THEME: ${a}`;const o=this.container.closest(".game-container")||document.querySelector(".game-container");o?.classList.toggle("bezel-mode",e.bezelFrame),o?.classList.remove("theme-verdant","theme-amber","theme-ice","theme-obsidian"),o?.classList.add(`theme-${e.theme}`),this.titleScrapEl.textContent=this.formatNumber(e.coins,4),e.gameMode==="ENDLESS"?this.titleModeEl.textContent=`MODE: ENDLESS SURVIVAL [${e.difficulty}]`:this.titleModeEl.textContent=`MODE: CAMPAIGN - STAGE ${e.selectedStage} [${e.difficulty}]`}renderHangarUI(){if(!this.game)return;const e=this.game.getSettings().getSettings();this.hangarScrapEl.textContent=this.formatNumber(e.coins,4),this.shipGridEl.innerHTML="";for(const t of Ta){const n=document.createElement("div"),i=e.unlockedSkins.includes(t.id),r=e.selectedSkin===t.id;n.className=`ship-card ${r?"selected":""}`,n.innerHTML=`
        <div class="ship-card-header">
          <span class="ship-name">${t.name}</span>
          <span class="ship-perk">${t.perk}</span>
        </div>
        <div class="ship-desc">${t.description}</div>
        <button class="menu-btn ship-action-btn"></button>
      `;const a=n.querySelector(".ship-action-btn");r?(a.textContent="[EQUIPPED]",a.disabled=!0):i?(a.textContent="EQUIP",a.addEventListener("click",()=>{this.game?.getAudio().playMenuSelect(),this.game?.getSettings().selectSkin(t.id),this.renderHangarUI()})):(a.textContent=`UNLOCK (🪙 ${t.cost})`,a.disabled=e.coins<t.cost,a.addEventListener("click",()=>{this.game?.getSettings().unlockSkin(t.id,t.cost)&&(this.game.getAudio().playPowerup(),this.renderHangarUI())})),this.shipGridEl.appendChild(n)}}renderModeSelectUI(){if(!this.game)return;const e=this.game.getSettings().getSettings();this.modeToggleBtn.textContent=`MODE: ${e.gameMode}`,this.diffToggleBtn.textContent=`DIFFICULTY: ${e.difficulty} (${e.difficulty==="HARD"?"1 LIFE, x1.5 REWARDS":"3 LIVES, BALANCED"})`;const t=this.modeSelectModal.querySelector(".campaign-section"),n=this.modeSelectModal.querySelector(".endless-section");if(e.gameMode==="ENDLESS"){t.style.display="none",n.style.display="block";const i=this.modeSelectModal.querySelector(".endless-wave-val"),r=this.modeSelectModal.querySelector(".endless-record-val");i.textContent=`WAVE ${this.formatNumber(e.highestEndlessWave,2)}`,r.textContent=this.formatScore(e.highScoreEndless)}else{t.style.display="block",n.style.display="none",this.stageListEl.innerHTML="";for(const i of fg){const r=i.stageNumber<=e.unlockedStages,a=i.stageNumber===e.selectedStage,o=document.createElement("div");o.className=`stage-card ${a?"selected":""} ${r?"":"locked"}`,o.innerHTML=`
          <div>
            <div>${i.title}: ${i.subtitle}</div>
            <div style="font-size: 8px; opacity: 0.8;">${i.description}</div>
          </div>
          <button class="menu-btn stage-action-btn"></button>
        `;const l=o.querySelector(".stage-action-btn");r?a?(l.textContent="[SELECTED]",l.disabled=!0):(l.textContent="SELECT",l.addEventListener("click",()=>{this.game?.getAudio().playMenuSelect(),this.game?.getSettings().setSelectedStage(i.stageNumber),this.game?.getSettings().setTheme(i.theme),this.renderModeSelectUI()})):(l.textContent="[LOCKED]",l.disabled=!0),this.stageListEl.appendChild(o)}}}showStageTitle(e,t,n=3){this.stageTitleMainEl.textContent=e,this.stageTitleSubEl.textContent=t,this.stageTitleEl.style.display="flex",this.stageTitleEl.style.opacity="1",this.stageTitleTimer=n}showBanner(e,t=2){this.bannerEl.textContent=e,this.bannerEl.style.display="block",this.bannerEl.style.opacity="1",this.bannerTimer=t}showBossWarning(e,t=4){this.warningBodyEl.textContent=e,this.warningEl.style.display="flex",this.warningTimer=t}clearBanners(){this.stageTitleTimer=0,this.bannerTimer=0,this.warningTimer=0,this.stageTitleEl.style.display="none",this.bannerEl.style.display="none",this.warningEl.style.display="none"}update(e,t=0){this.game||this.attachGame(e);const n=e.getState(),i=e.getScore(),r=e.getHighScore(),a=e.getPlayer().lives,o=e.getCoinsCollected();if(n!==this.lastState){if(this.titleScreen.style.display=n==="TITLE"?"flex":"none",this.playingScreen.style.display=n==="PLAYING"||n==="PAUSED"?"block":"none",this.pauseScreen.style.display=n==="PAUSED"?"flex":"none",this.gameOverScreen.style.display=n==="GAME_OVER"?"flex":"none",this.victoryScreen.style.display=n==="VICTORY"?"flex":"none",n!=="PLAYING"&&n!=="PAUSED"&&(this.clearBanners(),this.bossContainerEl.style.display="none"),n==="VICTORY"){const l=e.getCombatStats();this.victoryRankEl.textContent=`RANK ${l.rank}`,this.victoryKillsEl.textContent=`${l.enemiesDestroyed} / ${l.totalEnemiesSpawned}`;const c=l.shotsFired>0?Math.round(l.shotsHit/l.shotsFired*100):0;this.victoryAccuracyEl.textContent=`${c}%`,this.victoryTimeEl.textContent=this.formatTime(l.elapsedTime),this.victoryScrapEl.textContent=`+${l.coinsCollected??0} 🪙`}this.lastState=n}if(n==="TITLE")r!==this.lastHiScore&&(this.titleHiScoreEl.textContent=`HI-SCORE: ${this.formatScore(r)}`);else if(n==="PLAYING"||n==="PAUSED"){i!==this.lastScore&&(this.scoreEl.textContent=this.formatScore(i),this.lastScore=i),r!==this.lastHiScore&&(this.hiScoreEl.textContent=this.formatScore(r)),a!==this.lastLives&&(this.livesEl.textContent="♥".repeat(Math.max(0,a)),this.lastLives=a),o!==this.lastCoins&&(this.hudCoinsEl.textContent=this.formatNumber(o,3),this.lastCoins=o);const l=e.getPlayer();this.shieldBadgeEl.style.display=l.hasShield?"inline-block":"none",l.spreadTimer>0?(this.spreadBadgeEl.style.display="inline-block",this.spreadBadgeEl.textContent=`[SPREAD ${Math.ceil(l.spreadTimer)}s]`):this.spreadBadgeEl.style.display="none",l.rapidTimer>0?(this.rapidBadgeEl.style.display="inline-block",this.rapidBadgeEl.textContent=`[RAPID ${Math.ceil(l.rapidTimer)}s]`):this.rapidBadgeEl.style.display="none",e.getSettings().getSettings().gameMode==="ENDLESS"?(this.endlessWaveBadgeEl.style.display="inline-block",this.endlessWaveBadgeEl.textContent=`WAVE ${this.formatNumber(e.getEndlessDirector().getWave(),2)}`):this.endlessWaveBadgeEl.style.display="none";const c=e.getBoss();if(c&&c.active){this.bossContainerEl.style.display="flex";const h=Math.round(c.getHpPercent()*100);this.bossBarFillEl.style.width=`${h}%`,this.bossContainerEl.classList.toggle("enraged",c.isEnraged)}else this.bossContainerEl.style.display="none";n==="PLAYING"&&(this.stageTitleTimer>0&&(this.stageTitleTimer-=t,this.stageTitleTimer<=0&&(this.stageTitleEl.style.display="none")),this.bannerTimer>0&&(this.bannerTimer-=t,this.bannerTimer<=0&&(this.bannerEl.style.display="none")),this.warningTimer>0&&(this.warningTimer-=t,this.warningTimer<=0&&(this.warningEl.style.display="none")))}else n==="GAME_OVER"?(this.finalScoreEl.textContent=this.formatScore(i),this.finalHiScoreEl.textContent=this.formatScore(r)):n==="VICTORY"&&(this.victoryScoreEl.textContent=this.formatScore(i),this.victoryHiScoreEl.textContent=this.formatScore(r));this.lastHiScore=r}formatScore(e){return e.toString().padStart(6,"0")}formatNumber(e,t){return e.toString().padStart(t,"0")}formatTime(e){const t=Math.floor(e/60),n=Math.floor(e%60);return`${t.toString().padStart(2,"0")}:${n.toString().padStart(2,"0")}`}}const tc=document.querySelector("#app");if(!tc)throw new Error("Missing #app root element.");const Gs=document.createElement("div");Gs.className="game-container";tc.appendChild(Gs);const jg=new Yg,Ye=new Wg(jg),Vi=new qg(Gs),ks=new Kg(Gs,Ye);Ye.setOnShake((s,e)=>{Vi.triggerShake(s,e)});Ye.setOnThemeChange(s=>{Vi.setTheme(s)});Ye.setLevelDispatcher(ks);window.__game=Ye;window.__hud=ks;window.__debug={godMode:()=>Ye.toggleGodMode(),giveSpread:()=>Ye.debugGivePowerup("spread"),giveRapid:()=>Ye.debugGivePowerup("rapid"),giveShield:()=>Ye.debugGivePowerup("shield"),detonateBomb:()=>Ye.debugDetonateBomb(),triggerAmbush:s=>Ye.triggerPowerupAmbush(s),spawnEnemy:s=>Ye.debugSpawnEnemy(s),spawnBoss:()=>Ye.debugSpawnBoss(),setBossHp:s=>Ye.debugSetBossHp(s),clearEnemies:()=>Ye.debugClearAllEnemies(),spawnItem:s=>Ye.debugSpawnItem(s),setStage:s=>Ye.debugSetStage(s),setEndlessWave:s=>Ye.debugSetEndlessWave(s),setTimeScale:s=>Ye.setTimeScale(s),unlockAll:()=>Ye.getSettings().unlockAllContent(),resetSave:()=>Ye.getSettings().resetSavedData(),addCoins:s=>Ye.getSettings().addCoins(s),selectSkin:s=>{Ye.getSettings().selectSkin(s),Ye.getPlayer().applySkin(s)},setTheme:s=>Ye.getSettings().setTheme(s),toggleBezel:()=>Ye.getSettings().toggleBezel(),playSfx:s=>Ye.debugPlaySfx(s),toggleDebugUI:()=>ks.toggleDebugModal()};const $g=new Oh;function nc(){requestAnimationFrame(nc);const s=Math.min($g.getDelta(),.1);Ye.updateFrame(s),Vi.render(Ye,s),ks.update(Ye,s)}window.addEventListener("resize",()=>{Vi.resize()});Vi.resize();nc();
