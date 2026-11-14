"use strict";var p=function(r,a){return function(){try{return a||r((a={exports:{}}).exports,a),a.exports}catch(e){throw (a=0, e)}};};var M=p(function(F,h){
function k(r,a,e,v,q){var o,i,f,u,c,t,n,s,x;for(o=e.data,i=e.accessors[0],s=r-a,u=q,f=i(o,u),u+=v,c=0,t=0,x=1;x<r;x++)n=i(o,u)-f,c+=n*n,t+=n,u+=v;return c/s-t/r*(t/s)}h.exports=k
});var y=p(function(G,d){
var O=require('@stdlib/array-base-arraylike2object/dist'),P=M();function R(r,a,e,v,q){var o,i,f,u,c,t,n,s;if(t=r-a,r<=0||t<=0)return NaN;if(r===1||v===0)return 0;if(n=O(e),n.accessorProtocol)return P(r,a,n,v,q);for(i=q,o=e[i],i+=v,f=0,u=0,s=1;s<r;s++)c=e[i]-o,f+=c*c,u+=c,i+=v;return f/t-u/r*(u/t)}d.exports=R
});var m=p(function(H,l){
var w=require('@stdlib/strided-base-stride2offset/dist'),z=y();function A(r,a,e,v){return z(r,a,e,v,w(r,v))}l.exports=A
});var j=p(function(I,g){
var B=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),b=m(),C=y();B(b,"ndarray",C);g.exports=b
});var D=j();module.exports=D;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
