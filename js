/*!
 * Autolinker.js
 * 3.11.1
 *
 * Copyright(c) 2019 Gregory Jacobs <greg@greg-jacobs.com>
 * MIT License
 *
 * https://github.com/gregjacobs/Autolinker.js
 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).Autolinker=t()}(this,function(){"use strict";function s(e,t){if(Array.prototype.indexOf)return e.indexOf(t);for(var u=0,n=e.length;u<n;u++)if(e[u]===t)return u;return-1}function t(e,t){for(var u=e.length-1;0<=u;u--)!0===t(e[u])&&e.splice(u,1)}function U(e){throw new Error("Unhandled case for value: '"+e+"'")}var u=function(){function e(e){void 0===e&&(e={}),this.tagName="",this.attrs={},this.innerHTML="",this.whitespaceRegex=/\s+/,this.tagName=e.tagName||"",this.attrs=e.attrs||{},this.innerHTML=e.innerHtml||e.innerHTML||""}return e.prototype.setTagName=function(e){return this.tagName=e,this},e.prototype.getTagName=function(){return this.tagName||""},e.prototype.setAttr=function(e,t){return this.getAttrs()[e]=t,this},e.prototype.getAttr=function(e){return this.getAttrs()[e]},e.prototype.setAttrs=function(e){return Object.assign(this.getAttrs(),e),this},e.prototype.getAttrs=function(){return this.attrs||(this.attrs={})},e.prototype.setClass=function(e){return this.setAttr("class",e)},e.prototype.addClass=function(e){for(var t,u=this.getClass(),n=this.whitespaceRegex,r=u?u.split(n):[],a=e.split(n);t=a.shift();)-1===s(r,t)&&r.push(t);return this.getAttrs().class=r.join(" "),this},e.prototype.removeClass=function(e){for(var t,u=this.getClass(),n=this.whitespaceRegex,r=u?u.split(n):[],a=e.split(n);r.length&&(t=a.shift());){var i=s(r,t);-1!==i&&r.splice(i,1)}return this.getAttrs().class=r.join(" "),this},e.prototype.getClass=function(){return this.getAttrs().class||""},e.prototype.hasClass=function(e){return-1!==(" "+this.getClass()+" ").indexOf(" "+e+" ")},e.prototype.setInnerHTML=function(e){return this.innerHTML=e,this},e.prototype.setInnerHtml=function(e){return this.setInnerHTML(e)},e.prototype.getInnerHTML=function(){return this.innerHTML||""},e.prototype.getInnerHtml=function(){return this.getInnerHTML()},e.prototype.toAnchorString=function(){var e=this.getTagName(),t=this.buildAttrsStr();return["<",e,t=t?" "+t:"",">",this.getInnerHtml(),"</",e,">"].join("")},e.prototype.buildAttrsStr=function(){if(!this.attrs)return"";var e=this.getAttrs(),t=[];for(var u in e)e.hasOwnProperty(u)&&t.push(u+'="'+e[u]+'"');return t.join(" ")},e}();var r=function(){function e(e){void 0===e&&(e={}),this.newWindow=!1,this.truncate={},this.className="",this.newWindow=e.newWindow||!1,this.truncate=e.truncate||{},this.className=e.className||""}return e.prototype.build=function(e){return new u({tagName:"a",attrs:this.createAttrs(e),innerHtml:this.processAnchorText(e.getAnchorText())})},e.prototype.createAttrs=function(e){var t={href:e.getAnchorHref()},u=this.createCssClass(e);return u&&(t.class=u),this.newWindow&&(t.target="_blank",t.rel="noopener noreferrer"),this.truncate&&this.truncate.length&&this.truncate.length<e.getAnchorText().length&&(t.title=e.getAnchorHref()),t},e.prototype.createCssClass=function(e){var t=this.className;if(t){for(var u=[t],n=e.getCssClassSuffixes(),r=0,a=n.length;r<a;r++)u.push(t+"-"+n[r]);return u.join(" ")}return""},e.prototype.processAnchorText=function(e){return e=this.doTruncate(e)},e.prototype.doTruncate=function(e){var t=this.truncate;if(!t||!t.length)return e;var u,n,r,a,i,s=t.length,o=t.location;return"smart"===o?function(e,t,i){var u,n;u=null==i?(i="&hellip;",n=3,8):(n=i.length,i.length);var r=function(e){var t="";return e.scheme&&e.host&&(t+=e.scheme+"://"),e.host&&(t+=e.host),e.path&&(t+="/"+e.path),e.query&&(t+="?"+e.query),e.fragment&&(t+="#"+e.fragment),t},a=function(e,t){var u=t/2,n=Math.ceil(u),r=-1*Math.floor(u),a="";return r<0&&(a=e.substr(r)),e.substr(0,n)+i+a};if(e.length<=t)return e;var s,o,c,h=t-n,l=(s={},(c=(o=e).match(/^([a-z]+):\/\//i))&&(s.scheme=c[1],o=o.substr(c[0].length)),(c=o.match(/^(.*?)(?=(\?|#|\/|$))/i))&&(s.host=c[1],o=o.substr(c[0].length)),(c=o.match(/^\/(.*?)(?=(\?|#|$))/i))&&(s.path=c[1],o=o.substr(c[0].length)),(c=o.match(/^\?(.*?)(?=(#|$))/i))&&(s.query=c[1],o=o.substr(c[0].length)),(c=o.match(/^#(.*?)$/i))&&(s.fragment=c[1]),s);if(l.query){var p=l.query.match(/^(.*?)(?=(\?|\#))(.*?)$/i);p&&(l.query=l.query.substr(0,p[1].length),e=r(l))}if(e.length<=t)return e;if(l.host&&(l.host=l.host.replace(/^www\./,""),e=r(l)),e.length<=t)return e;var g="";if(l.host&&(g+=l.host),g.length>=h)return l.host.length==t?(l.host.substr(0,t-n)+i).substr(0,h+u):a(g,h).substr(0,h+u);var f="";if(l.path&&(f+="/"+l.path),l.query&&(f+="?"+l.query),f){if(h<=(g+f).length)return(g+f).length==t?(g+f).substr(0,t):(g+a(f,h-g.length)).substr(0,h+u);g+=f}if(l.fragment){var d="#"+l.fragment;if(h<=(g+d).length)return(g+d).length==t?(g+d).substr(0,t):(g+a(d,h-g.length)).substr(0,h+u);g+=d}if(l.scheme&&l.host){var m=l.scheme+"://";if((g+m).length<h)return(m+g).substr(0,t)}if(g.length<=t)return g;var A="";return 0<h&&(A=g.substr(-1*Math.floor(h/2))),(g.substr(0,Math.ceil(h/2))+i+A).substr(0,h+u)}(e,s):"middle"===o?function(e,t,u){if(e.length<=t)return e;var n,r=t-(null==u?(u="&hellip;",n=8,3):(n=u.length,u.length)),a="";return 0<r&&(a=e.substr(-1*Math.floor(r/2))),(e.substr(0,Math.ceil(r/2))+u+a).substr(0,r+n)}(e,s):(r=s,a=u,(n=e).length>r&&(i=null==a?(a="&hellip;",3):a.length,n=n.substring(0,r-i)+a),n)},e}(),e=function(){function e(e){this.__jsduckDummyDocProp=null,this.matchedText="",this.offset=0,this.tagBuilder=e.tagBuilder,this.matchedText=e.matchedText,this.offset=e.offset}return e.prototype.getMatchedText=function(){return this.matchedText},e.prototype.setOffset=function(e){this.offset=e},e.prototype.getOffset=function(){return this.offset},e.prototype.getCssClassSuffixes=function(){return[this.getType()]},e.prototype.buildTag=function(){return this.tagBuilder.build(this)},e}(),n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var u in t)t.hasOwnProperty(u)&&(e[u]=t[u])})(e,t)};function a(e,t){function u(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(u.prototype=t.prototype,new u)}var _=function(){return(_=Object.assign||function(e){for(var t,u=1,n=arguments.length;u<n;u++)for(var r in t=arguments[u])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},w=function(u){function e(e){var t=u.call(this,e)||this;return t.email="",t.email=e.email,t}return a(e,u),e.prototype.getType=function(){return"email"},e.prototype.getEmail=function(){return this.email},e.prototype.getAnchorHref=function(){return"mailto:"+this.email},e.prototype.getAnchorText=function(){return this.email},e}(e),l=function(u){function e(e){var t=u.call(this,e)||this;return t.serviceName="",t.hashtag="",t.serviceName=e.serviceName,t.hashtag=e.hashtag,t}return a(e,u),e.prototype.getType=function(){return"hashtag"},e.prototype.getServiceName=function(){return this.serviceName},e.prototype.getHashtag=function(){return this.hashtag},e.prototype.getAnchorHref=function(){var e=this.serviceName,t=this.hashtag;switch(e){case"twitter":return"https://twitter.com/hashtag/"+t;case"facebook":return"https://www.facebook.com/hashtag/"+t;case"instagram":return"https://instagram.com/explore/tags/"+t;default:throw new Error("Unknown service name to point hashtag to: "+e)}},e.prototype.getAnchorText=function(){return"#"+this.hashtag},e}(e),p=function(u){function e(e){var t=u.call(this,e)||this;return t.serviceName="twitter",t.mention="",t.mention=e.mention,t.serviceName=e.serviceName,t}return a(e,u),e.prototype.getType=function(){return"mention"},e.prototype.getMention=function(){return this.mention},e.prototype.getServiceName=function(){return this.serviceName},e.prototype.getAnchorHref=function(){switch(this.serviceName){case"twitter":return"https://twitter.com/"+this.mention;case"instagram":return"https://instagram.com/"+this.mention;case"soundcloud":return"https://soundcloud.com/"+this.mention;default:throw new Error("Unknown service name to point mention to: "+this.serviceName)}},e.prototype.getAnchorText=function(){return"@"+this.mention},e.prototype.getCssClassSuffixes=function(){var e=u.prototype.getCssClassSuffixes.call(this),t=this.getServiceName();return t&&e.push(t),e},e}(e),g=function(u){function e(e){var t=u.call(this,e)||this;return t.number="",t.plusSign=!1,t.number=e.number,t.plusSign=e.plusSign,t}return a(e,u),e.prototype.getType=function(){return"phone"},e.prototype.getPhoneNumber=function(){return this.number},e.prototype.getNumber=function(){return this.getPhoneNumber()},e.prototype.getAnchorHref=function(){return"tel:"+(this.plusSign?"+":"")+this.number},e.prototype.getAnchorText=function(){return this.matchedText},e}(e),F=function(u){function e(e){var t=u.call(this,e)||this;return t.url="",t.urlMatchType="scheme",t.protocolUrlMatch=!1,t.protocolRelativeMatch=!1,t.stripPrefix={scheme:!0,www:!0},t.stripTrailingSlash=!0,t.decodePercentEncoding=!0,t.schemePrefixRegex=/^(https?:\/\/)?/i,t.wwwPrefixRegex=/^(https?:\/\/)?(www\.)?/i,t.protocolRelativeRegex=/^\/\//,t.protocolPrepended=!1,t.urlMatchType=e.urlMatchType,t.url=e.url,t.protocolUrlMatch=e.protocolUrlMatch,t.protocolRelativeMatch=e.protocolRelativeMatch,t.stripPrefix=e.stripPrefix,t.stripTrailingSlash=e.stripTrailingSlash,t.decodePercentEncoding=e.decodePercentEncoding,t}return a(e,u),e.prototype.getType=function(){return"url"},e.prototype.getUrlMatchType=function(){return this.urlMatchType},e.prototype.getUrl=function(){var e=this.url;return this.protocolRelativeMatch||this.protocolUrlMatch||this.protocolPrepended||(e=this.url="http://"+e,this.protocolPrepended=!0),e},e.prototype.getAnchorHref=function(){return this.getUrl().replace(/&amp;/g,"&")},e.prototype.getAnchorText=function(){var e=this.getMatchedText();return this.protocolRelativeMatch&&(e=this.stripProtocolRelativePrefix(e)),this.stripPrefix.scheme&&(e=this.stripSchemePrefix(e)),this.stripPrefix.www&&(e=this.stripWwwPrefix(e)),this.stripTrailingSlash&&(e=this.removeTrailingSlash(e)),this.decodePercentEncoding&&(e=this.removePercentEncoding(e)),e},e.prototype.stripSchemePrefix=function(e){return e.replace(this.schemePrefixRegex,"")},e.prototype.stripWwwPrefix=function(e){return e.replace(this.wwwPrefixRegex,"$1")},e.prototype.stripProtocolRelativePrefix=function(e){return e.replace(this.protocolRelativeRegex,"")},e.prototype.removeTrailingSlash=function(e){return"/"===e.charAt(e.length-1)&&(e=e.slice(0,-1)),e},e.prototype.removePercentEncoding=function(e){var t=e.replace(/%22/gi,"&quot;").replace(/%26/gi,"&amp;").replace(/%27/gi,"&#39;").replace(/%3C/gi,"&lt;").replace(/%3E/gi,"&gt;");try{return decodeURIComponent(t)}catch(e){return t}},e}(e),i=function(e){this.__jsduckDummyDocProp=null,this.tagBuilder=e.tagBuilder},W=/[A-Za-z]/,I=/[0-9]/,L=/\s/,$=/['"]/,Z=/[\x00-\x1F\x7F]/,o=/A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC/.source,c=o+/\u2700-\u27bf\udde6-\uddff\ud800-\udbff\udc00-\udfff\ufe0e\ufe0f\u0300-\u036f\ufe20-\ufe23\u20d0-\u20f0\ud83c\udffb-\udfff\u200d\u3299\u3297\u303d\u3030\u24c2\ud83c\udd70-\udd71\udd7e-\udd7f\udd8e\udd91-\udd9a\udde6-\uddff\ude01-\ude02\ude1a\ude2f\ude32-\ude3a\ude50-\ude51\u203c\u2049\u25aa-\u25ab\u25b6\u25c0\u25fb-\u25fe\u00a9\u00ae\u2122\u2139\udc04\u2600-\u26FF\u2b05\u2b06\u2b07\u2b1b\u2b1c\u2b50\u2b55\u231a\u231b\u2328\u23cf\u23e9-\u23f3\u23f8-\u23fa\udccf\u2935\u2934\u2190-\u21ff/.source+/\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D4-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C03\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D01-\u0D03\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF8\u1CF9\u1DC0-\u1DF5\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F/.source,h=/0-9\u0660-\u0669\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0BE6-\u0BEF\u0C66-\u0C6F\u0CE6-\u0CEF\u0D66-\u0D6F\u0DE6-\u0DEF\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F29\u1040-\u1049\u1090-\u1099\u17E0-\u17E9\u1810-\u1819\u1946-\u194F\u19D0-\u19D9\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\uA620-\uA629\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uA9F0-\uA9F9\uAA50-\uAA59\uABF0-\uABF9\uFF10-\uFF19/.source,f=c+h,d=c+h,m="(?:["+h+"]{1,3}\\.){3}["+h+"]{1,3}",A="["+d+"](?:["+d+"\\-]{0,61}["+d+"])?",b=function(e){return"(?=("+A+"))\\"+e},x=function(e){return"(?:"+b(e)+"(?:\\."+b(e+1)+"){0,126}|"+m+")"},B=new RegExp("["+d+"]"),y=/(?:xn--vermgensberatung-pwb|xn--vermgensberater-ctb|xn--clchc0ea0b2g2a9gcd|xn--w4r85el8fhu5dnra|northwesternmutual|travelersinsurance|vermögensberatung|xn--3oq18vl8pn36a|xn--5su34j936bgsg|xn--bck1b9a5dre4c|xn--mgbai9azgqp6j|xn--mgberp4a5d4ar|xn--xkc2dl3a5ee0h|vermögensberater|xn--fzys8d69uvgm|xn--mgba7c0bbn0a|xn--xkc2al3hye2a|americanexpress|kerryproperties|sandvikcoromant|xn--i1b6b1a6a2e|xn--kcrx77d1x4a|xn--lgbbat1ad8j|xn--mgba3a4f16a|xn--mgbaakc7dvf|xn--mgbc0a9azcg|xn--nqv7fs00ema|afamilycompany|americanfamily|bananarepublic|cancerresearch|cookingchannel|kerrylogistics|weatherchannel|xn--54b7fta0cc|xn--6qq986b3xl|xn--80aqecdr1a|xn--b4w605ferd|xn--fiq228c5hs|xn--h2breg3eve|xn--jlq61u9w7b|xn--mgba3a3ejt|xn--mgbaam7a8h|xn--mgbayh7gpa|xn--mgbb9fbpob|xn--mgbbh1a71e|xn--mgbca7dzdo|xn--mgbi4ecexp|xn--mgbx4cd0ab|xn--rvc1e0am3e|international|lifeinsurance|spreadbetting|travelchannel|wolterskluwer|xn--eckvdtc9d|xn--fpcrj9c3d|xn--fzc2c9e2c|xn--h2brj9c8c|xn--tiq49xqyj|xn--yfro4i67o|xn--ygbi2ammx|construction|lplfinancial|scholarships|versicherung|xn--3e0b707e|xn--45br5cyl|xn--80adxhks|xn--80asehdb|xn--8y0a063a|xn--gckr3f0f|xn--mgb9awbf|xn--mgbab2bd|xn--mgbgu82a|xn--mgbpl2fh|xn--mgbt3dhd|xn--mk1bu44c|xn--ngbc5azd|xn--ngbe9e0a|xn--ogbpf8fl|xn--qcka1pmc|accountants|barclaycard|blackfriday|blockbuster|bridgestone|calvinklein|contractors|creditunion|engineering|enterprises|foodnetwork|investments|kerryhotels|lamborghini|motorcycles|olayangroup|photography|playstation|productions|progressive|redumbrella|rightathome|williamhill|xn--11b4c3d|xn--1ck2e1b|xn--1qqw23a|xn--2scrj9c|xn--3bst00m|xn--3ds443g|xn--3hcrj9c|xn--42c2d9a|xn--45brj9c|xn--55qw42g|xn--6frz82g|xn--80ao21a|xn--9krt00a|xn--cck2b3b|xn--czr694b|xn--d1acj3b|xn--efvy88h|xn--estv75g|xn--fct429k|xn--fjq720a|xn--flw351e|xn--g2xx48c|xn--gecrj9c|xn--gk3at1e|xn--h2brj9c|xn--hxt814e|xn--imr513n|xn--j6w193g|xn--jvr189m|xn--kprw13d|xn--kpry57d|xn--kpu716f|xn--mgbbh1a|xn--mgbtx2b|xn--mix891f|xn--nyqy26a|xn--otu796d|xn--pbt977c|xn--pgbs0dh|xn--q9jyb4c|xn--rhqv96g|xn--rovu88b|xn--s9brj9c|xn--ses554g|xn--t60b56a|xn--vuq861b|xn--w4rs40l|xn--xhq521b|xn--zfr164b|சிங்கப்பூர்|accountant|apartments|associates|basketball|bnpparibas|boehringer|capitalone|consulting|creditcard|cuisinella|eurovision|extraspace|foundation|healthcare|immobilien|industries|management|mitsubishi|nationwide|newholland|nextdirect|onyourside|properties|protection|prudential|realestate|republican|restaurant|schaeffler|swiftcover|tatamotors|technology|telefonica|university|vistaprint|vlaanderen|volkswagen|xn--30rr7y|xn--3pxu8k|xn--45q11c|xn--4gbrim|xn--55qx5d|xn--5tzm5g|xn--80aswg|xn--90a3ac|xn--9dbq2a|xn--9et52u|xn--c2br7g|xn--cg4bki|xn--czrs0t|xn--czru2d|xn--fiq64b|xn--fiqs8s|xn--fiqz9s|xn--io0a7i|xn--kput3i|xn--mxtq1m|xn--o3cw4h|xn--pssy2u|xn--unup4y|xn--wgbh1c|xn--wgbl6a|xn--y9a3aq|accenture|alfaromeo|allfinanz|amsterdam|analytics|aquarelle|barcelona|bloomberg|christmas|community|directory|education|equipment|fairwinds|financial|firestone|fresenius|frontdoor|fujixerox|furniture|goldpoint|hisamitsu|homedepot|homegoods|homesense|honeywell|institute|insurance|kuokgroup|ladbrokes|lancaster|landrover|lifestyle|marketing|marshalls|melbourne|microsoft|panasonic|passagens|pramerica|richardli|scjohnson|shangrila|solutions|statebank|statefarm|stockholm|travelers|vacations|xn--90ais|xn--c1avg|xn--d1alf|xn--e1a4c|xn--fhbei|xn--j1aef|xn--j1amh|xn--l1acc|xn--ngbrx|xn--nqv7f|xn--p1acf|xn--tckwe|xn--vhquv|yodobashi|abudhabi|airforce|allstate|attorney|barclays|barefoot|bargains|baseball|boutique|bradesco|broadway|brussels|budapest|builders|business|capetown|catering|catholic|chrysler|cipriani|cityeats|cleaning|clinique|clothing|commbank|computer|delivery|deloitte|democrat|diamonds|discount|discover|download|engineer|ericsson|esurance|etisalat|everbank|exchange|feedback|fidelity|firmdale|football|frontier|goodyear|grainger|graphics|guardian|hdfcbank|helsinki|holdings|hospital|infiniti|ipiranga|istanbul|jpmorgan|lighting|lundbeck|marriott|maserati|mckinsey|memorial|merckmsd|mortgage|movistar|observer|partners|pharmacy|pictures|plumbing|property|redstone|reliance|saarland|samsclub|security|services|shopping|showtime|softbank|software|stcgroup|supplies|symantec|training|uconnect|vanguard|ventures|verisign|woodside|xn--90ae|xn--node|xn--p1ai|xn--qxam|yokohama|السعودية|abogado|academy|agakhan|alibaba|android|athleta|auction|audible|auspost|avianca|banamex|bauhaus|bentley|bestbuy|booking|brother|bugatti|capital|caravan|careers|cartier|channel|charity|chintai|citadel|clubmed|college|cologne|comcast|company|compare|contact|cooking|corsica|country|coupons|courses|cricket|cruises|dentist|digital|domains|exposed|express|farmers|fashion|ferrari|ferrero|finance|fishing|fitness|flights|florist|flowers|forsale|frogans|fujitsu|gallery|genting|godaddy|grocery|guitars|hamburg|hangout|hitachi|holiday|hosting|hoteles|hotmail|hyundai|iselect|ismaili|jewelry|juniper|kitchen|komatsu|lacaixa|lancome|lanxess|lasalle|latrobe|leclerc|liaison|limited|lincoln|markets|metlife|monster|netbank|netflix|network|neustar|okinawa|oldnavy|organic|origins|philips|pioneer|politie|realtor|recipes|rentals|reviews|rexroth|samsung|sandvik|schmidt|schwarz|science|shiksha|shriram|singles|staples|starhub|storage|support|surgery|systems|temasek|theater|theatre|tickets|tiffany|toshiba|trading|walmart|wanggou|watches|weather|website|wedding|whoswho|windows|winners|xfinity|yamaxun|youtube|zuerich|католик|اتصالات|الجزائر|العليان|پاکستان|كاثوليك|موبايلي|இந்தியா|abarth|abbott|abbvie|active|africa|agency|airbus|airtel|alipay|alsace|alstom|anquan|aramco|author|bayern|beauty|berlin|bharti|blanco|bostik|boston|broker|camera|career|caseih|casino|center|chanel|chrome|church|circle|claims|clinic|coffee|comsec|condos|coupon|credit|cruise|dating|datsun|dealer|degree|dental|design|direct|doctor|dunlop|dupont|durban|emerck|energy|estate|events|expert|family|flickr|futbol|gallup|garden|george|giving|global|google|gratis|health|hermes|hiphop|hockey|hotels|hughes|imamat|insure|intuit|jaguar|joburg|juegos|kaufen|kinder|kindle|kosher|lancia|latino|lawyer|lefrak|living|locker|london|luxury|madrid|maison|makeup|market|mattel|mobile|mobily|monash|mormon|moscow|museum|mutual|nagoya|natura|nissan|nissay|norton|nowruz|office|olayan|online|oracle|orange|otsuka|pfizer|photos|physio|piaget|pictet|quebec|racing|realty|reisen|repair|report|review|rocher|rogers|ryukyu|safety|sakura|sanofi|school|schule|search|secure|select|shouji|soccer|social|stream|studio|supply|suzuki|swatch|sydney|taipei|taobao|target|tattoo|tennis|tienda|tjmaxx|tkmaxx|toyota|travel|unicom|viajes|viking|villas|virgin|vision|voting|voyage|vuelos|walter|warman|webcam|xihuan|yachts|yandex|zappos|москва|онлайн|ابوظبي|ارامكو|الاردن|المغرب|امارات|فلسطين|مليسيا|भारतम्|இலங்கை|ファッション|actor|adult|aetna|amfam|amica|apple|archi|audio|autos|azure|baidu|beats|bible|bingo|black|boats|bosch|build|canon|cards|chase|cheap|cisco|citic|click|cloud|coach|codes|crown|cymru|dabur|dance|deals|delta|dodge|drive|dubai|earth|edeka|email|epost|epson|faith|fedex|final|forex|forum|gallo|games|gifts|gives|glade|glass|globo|gmail|green|gripe|group|gucci|guide|homes|honda|horse|house|hyatt|ikano|intel|irish|iveco|jetzt|koeln|kyoto|lamer|lease|legal|lexus|lilly|linde|lipsy|lixil|loans|locus|lotte|lotto|lupin|macys|mango|media|miami|money|mopar|movie|nadex|nexus|nikon|ninja|nokia|nowtv|omega|osaka|paris|parts|party|phone|photo|pizza|place|poker|praxi|press|prime|promo|quest|radio|rehab|reise|ricoh|rocks|rodeo|rugby|salon|sener|seven|sharp|shell|shoes|skype|sling|smart|smile|solar|space|sport|stada|store|study|style|sucks|swiss|tatar|tires|tirol|tmall|today|tokyo|tools|toray|total|tours|trade|trust|tunes|tushu|ubank|vegas|video|vodka|volvo|wales|watch|weber|weibo|works|world|xerox|yahoo|zippo|ایران|بازار|بھارت|سودان|سورية|همراه|भारोत|संगठन|বাংলা|భారత్|ഭാരതം|嘉里大酒店|aarp|able|adac|aero|aigo|akdn|ally|amex|arab|army|arpa|arte|asda|asia|audi|auto|baby|band|bank|bbva|beer|best|bike|bing|blog|blue|bofa|bond|book|buzz|cafe|call|camp|care|cars|casa|case|cash|cbre|cern|chat|citi|city|club|cool|coop|cyou|data|date|dclk|deal|dell|desi|diet|dish|docs|doha|duck|duns|dvag|erni|fage|fail|fans|farm|fast|fiat|fido|film|fire|fish|flir|food|ford|free|fund|game|gbiz|gent|ggee|gift|gmbh|gold|golf|goog|guge|guru|hair|haus|hdfc|help|here|hgtv|host|hsbc|icbc|ieee|imdb|immo|info|itau|java|jeep|jobs|jprs|kddi|kiwi|kpmg|kred|land|lego|lgbt|lidl|life|like|limo|link|live|loan|loft|love|ltda|luxe|maif|meet|meme|menu|mini|mint|mobi|moda|moto|name|navy|news|next|nico|nike|ollo|open|page|pars|pccw|pics|ping|pink|play|plus|pohl|porn|post|prod|prof|qpon|raid|read|reit|rent|rest|rich|rmit|room|rsvp|ruhr|safe|sale|sarl|save|saxo|scor|scot|seat|seek|sexy|shaw|shia|shop|show|silk|sina|site|skin|sncf|sohu|song|sony|spot|star|surf|talk|taxi|team|tech|teva|tiaa|tips|town|toys|tube|vana|visa|viva|vivo|vote|voto|wang|weir|wien|wiki|wine|work|xbox|yoga|zara|zero|zone|дети|сайт|بارت|بيتك|ڀارت|تونس|شبكة|عراق|عمان|موقع|भारत|ভারত|ভাৰত|ਭਾਰਤ|ભારત|ଭାରତ|ಭಾರತ|ලංකා|グーグル|クラウド|ポイント|大众汽车|组织机构|電訊盈科|香格里拉|aaa|abb|abc|aco|ads|aeg|afl|aig|anz|aol|app|art|aws|axa|bar|bbc|bbt|bcg|bcn|bet|bid|bio|biz|bms|bmw|bnl|bom|boo|bot|box|buy|bzh|cab|cal|cam|car|cat|cba|cbn|cbs|ceb|ceo|cfa|cfd|com|crs|csc|dad|day|dds|dev|dhl|diy|dnp|dog|dot|dtv|dvr|eat|eco|edu|esq|eus|fan|fit|fly|foo|fox|frl|ftr|fun|fyi|gal|gap|gdn|gea|gle|gmo|gmx|goo|gop|got|gov|hbo|hiv|hkt|hot|how|ibm|ice|icu|ifm|inc|ing|ink|int|ist|itv|jcb|jcp|jio|jll|jmp|jnj|jot|joy|kfh|kia|kim|kpn|krd|lat|law|lds|llc|lol|lpl|ltd|man|map|mba|med|men|mil|mit|mlb|mls|mma|moe|moi|mom|mov|msd|mtn|mtr|nab|nba|nec|net|new|nfl|ngo|nhk|now|nra|nrw|ntt|nyc|obi|off|one|ong|onl|ooo|org|ott|ovh|pay|pet|phd|pid|pin|pnc|pro|pru|pub|pwc|qvc|red|ren|ril|rio|rip|run|rwe|sap|sas|sbi|sbs|sca|scb|ses|sew|sex|sfr|ski|sky|soy|srl|srt|stc|tab|tax|tci|tdk|tel|thd|tjx|top|trv|tui|tvs|ubs|uno|uol|ups|vet|vig|vin|vip|wed|win|wme|wow|wtc|wtf|xin|xxx|xyz|you|yun|zip|бел|ком|қаз|мкд|мон|орг|рус|срб|укр|հայ|קום|عرب|قطر|كوم|مصر|कॉम|नेट|คอม|ไทย|ストア|セール|みんな|中文网|天主教|我爱你|新加坡|淡马锡|诺基亚|飞利浦|ac|ad|ae|af|ag|ai|al|am|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cu|cv|cw|cx|cy|cz|de|dj|dk|dm|do|dz|ec|ee|eg|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|st|su|sv|sx|sy|sz|tc|td|tf|tg|th|tj|tk|tl|tm|tn|to|tr|tt|tv|tw|tz|ua|ug|uk|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|za|zm|zw|ελ|бг|ею|рф|გე|닷넷|닷컴|삼성|한국|コム|世界|中信|中国|中國|企业|佛山|信息|健康|八卦|公司|公益|台湾|台灣|商城|商店|商标|嘉里|在线|大拿|娱乐|家電|工行|广东|微博|慈善|手机|手表|招聘|政务|政府|新闻|时尚|書籍|机构|游戏|澳門|点看|珠宝|移动|网址|网店|网站|网络|联通|谷歌|购物|通販|集团|食品|餐厅|香港)/,v=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.localPartCharRegex=new RegExp("["+d+"!#$%&'*+/=?^_`{|}~-]"),e.strictTldRegex=new RegExp("^"+y.source+"$"),e}return a(e,t),e.prototype.parseMatches=function(n){for(var r=this.tagBuilder,u=this.localPartCharRegex,a=this.strictTldRegex,i=[],e=n.length,t=new C,s={m:"a",a:"i",i:"l",l:"t",t:"o",o:":"},o=0,c=0,h=t;o<e;){var l=n.charAt(o);switch(c){case 0:p(l);break;case 1:g(n.charAt(o-1),l);break;case 2:f(l);break;case 3:d(l);break;case 4:m(l);break;case 5:A(l);break;case 6:b(l);break;case 7:x(l);break;default:U(c)}o++}return v(),i;function p(e){"m"===e?y(1):u.test(e)&&y()}function g(e,t){":"===e?u.test(t)?(c=2,h=new C(_({},h,{hasMailtoPrefix:!0}))):F():s[e]===t||(u.test(t)?c=2:"."===t?c=3:"@"===t?c=4:F())}function f(e){"."===e?c=3:"@"===e?c=4:u.test(e)||F()}function d(e){"."===e?F():"@"===e?F():u.test(e)?c=2:F()}function m(e){B.test(e)?c=5:F()}function A(e){"."===e?c=7:"-"===e?c=6:B.test(e)||v()}function b(e){"-"===e||"."===e?v():B.test(e)?c=5:v()}function x(e){"."===e||"-"===e?v():B.test(e)?(c=5,h=new C(_({},h,{hasDomainDot:!0}))):v()}function y(e){void 0===e&&(e=2),c=e,h=new C({idx:o})}function F(){c=0,h=t}function v(){if(h.hasDomainDot){var e=n.slice(h.idx,o);/[-.]$/.test(e)&&(e=e.slice(0,-1));var t=h.hasMailtoPrefix?e.slice("mailto:".length):e;u=(t.split(".").pop()||"").toLowerCase(),a.test(u)&&i.push(new w({tagBuilder:r,matchedText:e,offset:h.idx,email:t}))}var u;F()}},e}(i),C=function(e){void 0===e&&(e={}),this.idx=void 0!==e.idx?e.idx:-1,this.hasMailtoPrefix=!!e.hasMailtoPrefix,this.hasDomainDot=!!e.hasDomainDot},D=function(){function e(){}return e.isValid=function(e,t){return!(t&&!this.isValidUriScheme(t)||this.urlMatchDoesNotHaveProtocolOrDot(e,t)||this.urlMatchDoesNotHaveAtLeastOneWordChar(e,t)&&!this.isValidIpAddress(e)||this.containsMultipleDots(e))},e.isValidIpAddress=function(e){var t=new RegExp(this.hasFullProtocolRegex.source+this.ipRegex.source);return null!==e.match(t)},e.containsMultipleDots=function(e){var t=e;return this.hasFullProtocolRegex.test(e)&&(t=e.split("://")[1]),-1<t.split("/")[0].indexOf("..")},e.isValidUriScheme=function(e){var t=e.match(this.uriSchemeRegex),u=t&&t[0].toLowerCase();return"javascript:"!==u&&"vbscript:"!==u},e.urlMatchDoesNotHaveProtocolOrDot=function(e,t){return!(!e||t&&this.hasFullProtocolRegex.test(t)||-1!==e.indexOf("."))},e.urlMatchDoesNotHaveAtLeastOneWordChar=function(e,t){return!(!e||!t)&&!this.hasWordCharAfterProtocolRegex.test(e)},e.hasFullProtocolRegex=/^[A-Za-z][-.+A-Za-z0-9]*:\/\//,e.uriSchemeRegex=/^[A-Za-z][-.+A-Za-z0-9]*:/,e.hasWordCharAfterProtocolRegex=new RegExp(":[^\\s]*?["+o+"]"),e.ipRegex=/[0-9][0-9]?[0-9]?\.[0-9][0-9]?[0-9]?\.[0-9][0-9]?[0-9]?\.[0-9][0-9]?[0-9]?(:[0-9]*)?\/?$/,e}(),E=function(n){function e(e){var t,u=n.call(this,e)||this;return u.stripPrefix={scheme:!0,www:!0},u.stripTrailingSlash=!0,u.decodePercentEncoding=!0,u.matcherRegex=(t=new RegExp("[/?#](?:["+d+"\\-+&@#/%=~_()|'$*\\[\\]?!:,.;✓]*["+d+"\\-+&@#/%=~_()|'$*\\[\\]✓])?"),new RegExp(["(?:","(",/(?:[A-Za-z][-.+A-Za-z0-9]{0,63}:(?![A-Za-z][-.+A-Za-z0-9]{0,63}:\/\/)(?!\d+\/?)(?:\/\/)?)/.source,x(2),")","|","(","(//)?",/(?:www\.)/.source,x(6),")","|","(","(//)?",x(10)+"\\.",y.source,"(?![-"+f+"])",")",")","(?::[0-9]+)?","(?:"+t.source+")?"].join(""),"gi")),u.wordCharRegExp=new RegExp("["+d+"]"),u.stripPrefix=e.stripPrefix,u.stripTrailingSlash=e.stripTrailingSlash,u.decodePercentEncoding=e.decodePercentEncoding,u}return a(e,n),e.prototype.parseMatches=function(g){for(var f,e=this.matcherRegex,d=this.stripPrefix,m=this.stripTrailingSlash,A=this.decodePercentEncoding,b=this.tagBuilder,x=[],t=function(){var e=f[0],t=f[1],u=f[4],n=f[5],r=f[9],a=f.index,i=n||r,s=g.charAt(a-1);if(!D.isValid(e,t))return"continue";if(0<a&&"@"===s)return"continue";if(0<a&&i&&y.wordCharRegExp.test(s))return"continue";if(/\?$/.test(e)&&(e=e.substr(0,e.length-1)),y.matchHasUnbalancedClosingParen(e))e=e.substr(0,e.length-1);else{var o=y.matchHasInvalidCharAfterTld(e,t);-1<o&&(e=e.substr(0,o))}var c=["http://","https://"].find(function(e){return!!t&&-1!==t.indexOf(e)});if(c){var h=e.indexOf(c);e=e.substr(h),t=t.substr(h),a+=h}var l=t?"scheme":u?"www":"tld",p=!!t;x.push(new F({tagBuilder:b,matchedText:e,offset:a,urlMatchType:l,url:e,protocolUrlMatch:p,protocolRelativeMatch:!!i,stripPrefix:d,stripTrailingSlash:m,decodePercentEncoding:A}))},y=this;null!==(f=e.exec(g));)t();return x},e.prototype.matchHasUnbalancedClosingParen=function(e){var t,u=e.charAt(e.length-1);if(")"===u)t="(";else{if("]"!==u)return!1;t="["}for(var n=0,r=0,a=e.length-1;r<a;r++){var i=e.charAt(r);i===t?n++:i===u&&(n=Math.max(n-1,0))}return 0===n},e.prototype.matchHasInvalidCharAfterTld=function(e,t){if(!e)return-1;var u=0;t&&(u=e.indexOf(":"),e=e.slice(u));var n=new RegExp("^((.?//)?[-."+d+"]*[-"+d+"]\\.[-"+d+"]+)").exec(e);return null===n?-1:(u+=n[1].length,e=e.slice(n[1].length),/^[^-.A-Za-z0-9:\/?#]/.test(e)?u:-1)},e}(i),k=function(u){function e(e){var t=u.call(this,e)||this;return t.serviceName="twitter",t.matcherRegex=new RegExp("#[_"+d+"]{1,139}(?![_"+d+"])","g"),t.nonWordCharRegex=new RegExp("[^"+d+"]"),t.serviceName=e.serviceName,t}return a(e,u),e.prototype.parseMatches=function(e){for(var t,u=this.matcherRegex,n=this.nonWordCharRegex,r=this.serviceName,a=this.tagBuilder,i=[];null!==(t=u.exec(e));){var s=t.index,o=e.charAt(s-1);if(0===s||n.test(o)){var c=t[0],h=t[0].slice(1);i.push(new l({tagBuilder:a,matchedText:c,offset:s,serviceName:r,hashtag:h}))}}return i},e}(i),T=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.matcherRegex=/(?:(?:(?:(\+)?\d{1,3}[-\040.]?)?\(?\d{3}\)?[-\040.]?\d{3}[-\040.]?\d{4})|(?:(\+)(?:9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)[-\040.]?(?:\d[-\040.]?){6,12}\d+))([,;]+[0-9]+#?)*/g,e}return a(e,t),e.prototype.parseMatches=function(e){for(var t,u=this.matcherRegex,n=this.tagBuilder,r=[];null!==(t=u.exec(e));){var a=t[0],i=a.replace(/[^0-9,;#]/g,""),s=!(!t[1]&&!t[2]),o=0==t.index?"":e.substr(t.index-1,1),c=e.substr(t.index+a.length,1),h=!o.match(/\d/)&&!c.match(/\d/);this.testMatch(t[3])&&this.testMatch(a)&&h&&r.push(new g({tagBuilder:n,matchedText:a,offset:t.index,number:i,plusSign:s}))}return r},e.prototype.testMatch=function(e){return/\D/.test(e)},e}(i),M=function(u){function e(e){var t=u.call(this,e)||this;return t.serviceName="twitter",t.matcherRegexes={twitter:new RegExp("@[_"+d+"]{1,50}(?![_"+d+"])","g"),instagram:new RegExp("@[_."+d+"]{1,30}(?![_"+d+"])","g"),soundcloud:new RegExp("@[-_."+d+"]{1,50}(?![-_"+d+"])","g")},t.nonWordCharRegex=new RegExp("[^"+d+"]"),t.serviceName=e.serviceName,t}return a(e,u),e.prototype.parseMatches=function(e){var t,u=this.serviceName,n=this.matcherRegexes[this.serviceName],r=this.nonWordCharRegex,a=this.tagBuilder,i=[];if(!n)return i;for(;null!==(t=n.exec(e));){var s=t.index,o=e.charAt(s-1);if(0===s||r.test(o)){var c=t[0].replace(/\.+$/g,""),h=c.slice(1);i.push(new p({tagBuilder:a,matchedText:c,offset:s,serviceName:u,mention:h}))}}return i},e}(i);function P(t,e){for(var u,n=e.onOpenTag,r=e.onCloseTag,a=e.onText,i=e.onComment,s=e.onDoctype,o=new V,c=0,h=t.length,l=0,p=0,g=o;c<h;){var f=t.charAt(c);switch(l){case 0:d(f);break;case 1:m(f);break;case 2:b(f);break;case 3:A(f);break;case 4:x(f);break;case 5:y(f);break;case 6:F(f);break;case 7:v(f);break;case 8:w(f);break;case 9:B(f);break;case 10:C(f);break;case 11:D(f);break;case 12:E(f);break;case 13:k(f);break;case 14:T(f);break;case 15:M(f);break;case 16:P(f);break;case 17:j(f);break;case 18:z(f);break;case 19:R(f);break;case 20:q(f);break;default:U(l)}c++}function d(e){"<"===e&&S()}function m(e){"!"===e?l=13:"/"===e?(l=2,g=new V(_({},g,{isClosing:!0}))):"<"===e?S():g=W.test(e)?(l=3,new V(_({},g,{isOpening:!0}))):(l=0,o)}function A(e){L.test(e)?(g=new V(_({},g,{name:H()})),l=4):"<"===e?S():"/"===e?(g=new V(_({},g,{name:H()})),l=12):">"===e?(g=new V(_({},g,{name:H()})),O()):W.test(e)||I.test(e)||":"===e||N()}function b(e){">"===e?N():W.test(e)?l=3:N()}function x(e){L.test(e)||("/"===e?l=12:">"===e?O():"<"===e?S():"="===e||$.test(e)||Z.test(e)?N():l=5)}function y(e){L.test(e)?l=6:"/"===e?l=12:"="===e?l=7:">"===e?O():"<"===e?S():$.test(e)&&N()}function F(e){L.test(e)||("/"===e?l=12:"="===e?l=7:">"===e?O():"<"===e?S():$.test(e)?N():l=5)}function v(e){L.test(e)||('"'===e?l=8:"'"===e?l=9:/[>=`]/.test(e)?N():"<"===e?S():l=10)}function w(e){'"'===e&&(l=11)}function B(e){"'"===e&&(l=11)}function C(e){L.test(e)?l=4:">"===e?O():"<"===e&&S()}function D(e){L.test(e)?l=4:"/"===e?l=12:">"===e?O():"<"===e?S():(l=4,c--)}function E(e){">"===e?(g=new V(_({},g,{isClosing:!0})),O()):l=4}function k(e){"--"===t.substr(c,2)?(c+=2,g=new V(_({},g,{type:"comment"})),l=14):"DOCTYPE"===t.substr(c,7).toUpperCase()?(c+=7,g=new V(_({},g,{type:"doctype"})),l=20):N()}function T(e){"-"===e?l=15:">"===e?N():l=16}function M(e){"-"===e?l=18:">"===e?N():l=16}function P(e){"-"===e&&(l=17)}function j(e){l="-"===e?18:16}function z(e){">"===e?O():"!"===e?l=19:"-"===e||(l=16)}function R(e){"-"===e?l=17:">"===e?O():l=16}function q(e){">"===e?O():"<"===e&&S()}function N(){l=0,g=o}function S(){l=1,g=new V({idx:c})}function O(){var e=t.slice(p,g.idx);e&&a(e,p),"comment"===g.type?i(g.idx):"doctype"===g.type?s(g.idx):(g.isOpening&&n(g.name,g.idx),g.isClosing&&r(g.name,g.idx)),N(),p=c+1}function H(){var e=g.idx+(g.isClosing?2:1);return t.slice(e,c).toLowerCase()}p<c&&(u=t.slice(p,c),a(u,p),p=c+1)}var V=function(e){void 0===e&&(e={}),this.idx=void 0!==e.idx?e.idx:-1,this.type=e.type||"tag",this.name=e.name||"",this.isOpening=!!e.isOpening,this.isClosing=!!e.isClosing};return function(){function n(e){void 0===e&&(e={}),this.version=n.version,this.urls={},this.email=!0,this.phone=!0,this.hashtag=!1,this.mention=!1,this.newWindow=!0,this.stripPrefix={scheme:!0,www:!0},this.stripTrailingSlash=!0,this.decodePercentEncoding=!0,this.truncate={length:0,location:"end"},this.className="",this.replaceFn=null,this.context=void 0,this.matchers=null,this.tagBuilder=null,this.urls=this.normalizeUrlsCfg(e.urls),this.email="boolean"==typeof e.email?e.email:this.email,this.phone="boolean"==typeof e.phone?e.phone:this.phone,this.hashtag=e.hashtag||this.hashtag,this.mention=e.mention||this.mention,this.newWindow="boolean"==typeof e.newWindow?e.newWindow:this.newWindow,this.stripPrefix=this.normalizeStripPrefixCfg(e.stripPrefix),this.stripTrailingSlash="boolean"==typeof e.stripTrailingSlash?e.stripTrailingSlash:this.stripTrailingSlash,this.decodePercentEncoding="boolean"==typeof e.decodePercentEncoding?e.decodePercentEncoding:this.decodePercentEncoding;var t=this.mention;if(!1!==t&&"twitter"!==t&&"instagram"!==t&&"soundcloud"!==t)throw new Error("invalid `mention` cfg - see docs");var u=this.hashtag;if(!1!==u&&"twitter"!==u&&"facebook"!==u&&"instagram"!==u)throw new Error("invalid `hashtag` cfg - see docs");this.truncate=this.normalizeTruncateCfg(e.truncate),this.className=e.className||this.className,this.replaceFn=e.replaceFn||this.replaceFn,this.context=e.context||this}return n.link=function(e,t){return new n(t).link(e)},n.parse=function(e,t){return new n(t).parse(e)},n.prototype.normalizeUrlsCfg=function(e){return null==e&&(e=!0),"boolean"==typeof e?{schemeMatches:e,wwwMatches:e,tldMatches:e}:{schemeMatches:"boolean"!=typeof e.schemeMatches||e.schemeMatches,wwwMatches:"boolean"!=typeof e.wwwMatches||e.wwwMatches,tldMatches:"boolean"!=typeof e.tldMatches||e.tldMatches}},n.prototype.normalizeStripPrefixCfg=function(e){return null==e&&(e=!0),"boolean"==typeof e?{scheme:e,www:e}:{scheme:"boolean"!=typeof e.scheme||e.scheme,www:"boolean"!=typeof e.www||e.www}},n.prototype.normalizeTruncateCfg=function(e){return"number"==typeof e?{length:e,location:"end"}:function(e,t){for(var u in t)t.hasOwnProperty(u)&&void 0===e[u]&&(e[u]=t[u]);return e}(e||{},{length:Number.POSITIVE_INFINITY,location:"end"})},n.prototype.parse=function(e){var r=this,t=["a","style","script"],a=0,i=[];return P(e,{onOpenTag:function(e){0<=t.indexOf(e)&&a++},onText:function(e,t){if(0===a){var u=function(e,t){if(!t.global)throw new Error("`splitRegex` must have the 'g' flag set");for(var u,n=[],r=0;u=t.exec(e);)n.push(e.substring(r,u.index)),n.push(u[0]),r=u.index+u[0].length;return n.push(e.substring(r)),n}(e,/(&nbsp;|&#160;|&lt;|&#60;|&gt;|&#62;|&quot;|&#34;|&#39;)/gi),n=t;u.forEach(function(e,t){if(t%2==0){var u=r.parseText(e,n);i.push.apply(i,u)}n+=e.length})}},onCloseTag:function(e){0<=t.indexOf(e)&&(a=Math.max(a-1,0))},onComment:function(e){},onDoctype:function(e){}}),i=this.compactMatches(i),i=this.removeUnwantedMatches(i)},n.prototype.compactMatches=function(e){e.sort(function(e,t){return e.getOffset()-t.getOffset()});for(var t=0;t<e.length-1;t++){var u=e[t],n=u.getOffset(),r=u.getMatchedText().length,a=n+r;if(t+1<e.length){if(e[t+1].getOffset()===n){var i=e[t+1].getMatchedText().length>r?t:t+1;e.splice(i,1);continue}e[t+1].getOffset()<a&&e.splice(t+1,1)}}return e},n.prototype.removeUnwantedMatches=function(e){return this.hashtag||t(e,function(e){return"hashtag"===e.getType()}),this.email||t(e,function(e){return"email"===e.getType()}),this.phone||t(e,function(e){return"phone"===e.getType()}),this.mention||t(e,function(e){return"mention"===e.getType()}),this.urls.schemeMatches||t(e,function(e){return"url"===e.getType()&&"scheme"===e.getUrlMatchType()}),this.urls.wwwMatches||t(e,function(e){return"url"===e.getType()&&"www"===e.getUrlMatchType()}),this.urls.tldMatches||t(e,function(e){return"url"===e.getType()&&"tld"===e.getUrlMatchType()}),e},n.prototype.parseText=function(e,t){void 0===t&&(t=0),t=t||0;for(var u=this.getMatchers(),n=[],r=0,a=u.length;r<a;r++){for(var i=u[r].parseMatches(e),s=0,o=i.length;s<o;s++)i[s].setOffset(t+i[s].getOffset());n.push.apply(n,i)}return n},n.prototype.link=function(e){if(!e)return"";for(var t=this.parse(e),u=[],n=0,r=0,a=t.length;r<a;r++){var i=t[r];u.push(e.substring(n,i.getOffset())),u.push(this.createMatchReturnVal(i)),n=i.getOffset()+i.getMatchedText().length}return u.push(e.substring(n)),u.join("")},n.prototype.createMatchReturnVal=function(e){var t;return this.replaceFn&&(t=this.replaceFn.call(this.context,e)),"string"==typeof t?t:!1===t?e.getMatchedText():t instanceof u?t.toAnchorString():e.buildTag().toAnchorString()},n.prototype.getMatchers=function(){if(this.matchers)return this.matchers;var e=this.getTagBuilder(),t=[new k({tagBuilder:e,serviceName:this.hashtag}),new v({tagBuilder:e}),new T({tagBuilder:e}),new M({tagBuilder:e,serviceName:this.mention}),new E({tagBuilder:e,stripPrefix:this.stripPrefix,stripTrailingSlash:this.stripTrailingSlash,decodePercentEncoding:this.decodePercentEncoding})];return this.matchers=t},n.prototype.getTagBuilder=function(){var e=this.tagBuilder;return e||(e=this.tagBuilder=new r({newWindow:this.newWindow,truncate:this.truncate,className:this.className})),e},n.version="3.11.1",n.AnchorTagBuilder=r,n.HtmlTag=u,n.matcher={Email:v,Hashtag:k,Matcher:i,Mention:M,Phone:T,Url:E},n.match={Email:w,Hashtag:l,Match:e,Mention:p,Phone:g,Url:F},n}()});
//# sourceMappingURL=Autolinker.min.js.map

(function(L){if(typeof L==='undefined'){throw new Error('Leaflet must be included first');}
L.Control.Layers.Tree=L.Control.Layers.extend({options:{closedSymbol:'+',openedSymbol:'&minus;',spaceSymbol:' ',selectorBack:false,namedToggle:false,collapseAll:'',expandAll:'',labelIsSelector:'both',},_initClassesNames:function(){this.cls={children:'leaflet-layerstree-children',childrenNopad:'leaflet-layerstree-children-nopad',hide:'leaflet-layerstree-hide',closed:'leaflet-layerstree-closed',opened:'leaflet-layerstree-opened',space:'leaflet-layerstree-header-space',pointer:'leaflet-layerstree-header-pointer',header:'leaflet-layerstree-header',neverShow:'leaflet-layerstree-nevershow',node:'leaflet-layerstree-node',name:'leaflet-layerstree-header-name',label:'leaflet-layerstree-header-label',selAllCheckbox:'leaflet-layerstree-sel-all-checkbox',};},initialize:function(baseTree,overlaysTree,options){this._scrollTop=0;this._initClassesNames();this._baseTree=null;this._overlaysTree=null;L.Util.setOptions(this,options);L.Control.Layers.prototype.initialize.call(this,null,null,options);this._setTrees(baseTree,overlaysTree);},setBaseTree:function(tree){return this._setTrees(tree);},setOverlayTree:function(tree){return this._setTrees(undefined,tree);},addBaseLayer:function(layer,name){throw'addBaseLayer is disabled';},addOverlay:function(layer,name){throw'addOverlay is disabled';},removeLayer:function(layer){throw'removeLayer is disabled';},collapse:function(){this._scrollTop=this._sect().scrollTop;return L.Control.Layers.prototype.collapse.call(this);},expand:function(){var ret=L.Control.Layers.prototype.expand.call(this);this._sect().scrollTop=this._scrollTop;},onAdd:function(map){function changeName(layer){if(layer._layersTreeName){toggle.innerHTML=layer._layersTreeName;}}
var ret=L.Control.Layers.prototype.onAdd.call(this,map);if(this.options.namedToggle){var toggle=this._container.getElementsByClassName('leaflet-control-layers-toggle')[0];L.DomUtil.addClass(toggle,'leaflet-layerstree-named-toggle');map.eachLayer(function(layer){changeName(layer);});map.on('baselayerchange',function(e){changeName(e.layer);},this);}
return ret;},expandTree:function(overlay){var container=overlay?this._overlaysList:this._baseLayersList;if(container){this._applyOnTree(container,false);}
return this._localExpand();},collapseTree:function(overlay){var container=overlay?this._overlaysList:this._baseLayersList;if(container){this._applyOnTree(container,true);}
return this._localExpand();},expandSelected:function(overlay){function iter(el){var p=el.parentElement;if(p){if(L.DomUtil.hasClass(p,that.cls.children)&&!L.DomUtil.hasClass(el,that.cls.childrenNopad)){L.DomUtil.removeClass(p,hide);}
if(L.DomUtil.hasClass(p,that.cls.node)){var h=p.getElementsByClassName(that.cls.header)[0];that._applyOnTree(h,false);}
iter(p);}}
var that=this;var container=overlay?this._overlaysList:this._baseLayersList;if(!container)return this;var hide=this.cls.hide;var inputs=this._layerControlInputs||container.getElementsByTagName('input');for(var i=0;i<inputs.length;i++){var input=inputs[i];if(this._getLayer&&!!this._getLayer(input.layerId).overlay!=!!overlay)continue
if(input.checked){iter(input.parentElement.parentElement.parentElement.parentElement);}}
return this._localExpand();},_sect:function(){return this._section||this._form;},_setTrees:function(base,overlays){var id=0;function iterate(tree,output,overlays){if(tree&&tree.layer){if(!overlays){tree.layer._layersTreeName=tree.name||tree.label;}
output[id++]=tree.layer;}
if(tree&&tree.children&&tree.children.length){tree.children.forEach(function(child){iterate(child,output,overlays);});}
return output;}
function forArrays(input){if(Array.isArray(input)){return{noShow:true,children:input};}else{return input}}
if(this._layerControlInputs){this._layerControlInputs=[];}
for(var i=0;i<this._layers.length;++i){this._layers[i].layer.off('add remove',this._onLayerChange,this);}
this._layers=[];if(base!==undefined)this._baseTree=forArrays(base);if(overlays!==undefined)this._overlaysTree=forArrays(overlays);var bflat=iterate(this._baseTree,{});for(var i in bflat){this._addLayer(bflat[i],i);}
var oflat=iterate(this._overlaysTree,{},true);for(i in oflat){this._addLayer(oflat[i],i,true);}
return(this._map)?this._update():this;},_localExpand:function(){if(this._map&&L.DomUtil.hasClass(this._container,'leaflet-control-layers-expanded')){var top=this._sect().scrollTop;this.expand();this._sect().scrollTop=top;this._scrollTop=top;}
return this;},_applyOnTree:function(container,collapse){var iters=[{cls:this.cls.children,hide:collapse},{cls:this.cls.opened,hide:collapse},{cls:this.cls.closed,hide:!collapse},];iters.forEach(function(it){var els=container.getElementsByClassName(it.cls);for(var i=0;i<els.length;i++){var el=els[i];if(L.DomUtil.hasClass(el,this.cls.childrenNopad)){}else if(it.hide){L.DomUtil.addClass(el,this.cls.hide);}else{L.DomUtil.removeClass(el,this.cls.hide);}}},this);},_addItem:function(obj){},_update:function(){if(!this._container){return this;}
L.Control.Layers.prototype._update.call(this);this._addTreeLayout(this._baseTree,false);this._addTreeLayout(this._overlaysTree,true);return this._localExpand();},_addTreeLayout:function(tree,overlay){if(!tree)return;var container=overlay?this._overlaysList:this._baseLayersList;this._expandCollapseAll(overlay,this.options.collapseAll,this.collapseTree);this._expandCollapseAll(overlay,this.options.expandAll,this.expandTree);this._iterateTreeLayout(tree,container,overlay,[],tree.noShow)
if(this._checkDisabledLayers){this._checkDisabledLayers();}},_expandCollapseAll:function(overlay,text,fn,ctx){var container=overlay?this._overlaysList:this._baseLayersList;ctx=ctx?ctx:this;if(text){var o=document.createElement('div');o.className='leaflet-layerstree-expand-collapse';container.appendChild(o);o.innerHTML=text;o.tabIndex=0;L.DomEvent.on(o,'click keydown',function(e){if(e.type!=='keydown'||e.keyCode===32){o.blur()
fn.call(ctx,overlay);this._localExpand();}},this);}},_iterateTreeLayout:function(tree,container,overlay,selAllNodes,noShow){if(!tree)return;function creator(type,cls,append,innerHTML){var obj=L.DomUtil.create(type,cls,append);if(innerHTML)obj.innerHTML=innerHTML;return obj;}
var header=creator('div',this.cls.header,container);var sel=creator('span');var entry=creator('span');var closed=creator('span',this.cls.closed,sel,this.options.closedSymbol);var opened=creator('span',this.cls.opened,sel,this.options.openedSymbol);var space=creator('span',this.cls.space,null,this.options.spaceSymbol);if(this.options.selectorBack){sel.insertBefore(space,closed);header.appendChild(entry);header.appendChild(sel);}else{sel.appendChild(space);header.appendChild(sel);header.appendChild(entry);}
function updateSelAllCheckbox(ancestor){var selector=ancestor.querySelector('input[type=checkbox]')
var selectedAll=true;var selectedNone=true;var inputs=ancestor.querySelectorAll('input[type=checkbox]');[].forEach.call(inputs,function(inp){if(inp===selector){}else if(inp.indeterminate){selectedAll=false;selectedNone=false;}else if(inp.checked){selectedNone=false;}else if(!inp.checked){selectedAll=false;}});if(selectedAll){selector.indeterminate=false
selector.checked=true;}else if(selectedNone){selector.indeterminate=false
selector.checked=false;}else{selector.indeterminate=true;selector.checked=false;}}
function manageSelectorsAll(input,ctx){selAllNodes.forEach(function(ancestor){L.DomEvent.on(input,'click',function(ev){updateSelAllCheckbox(ancestor)},ctx)},ctx);}
var selAll;if(tree.selectAllCheckbox){selAll=this._createCheckboxElement(false);selAll.className+=' '+this.cls.selAllCheckbox;}
var hide=this.cls.hide;if(tree.children){var children=creator('div',this.cls.children,container);var sensible=tree.layer?sel:header;L.DomUtil.addClass(sensible,this.cls.pointer);sensible.tabIndex=0;L.DomEvent.on(sensible,'click keydown',function(e){if(this._preventClick){return;}
if(e.type==='keydown'&&e.keyCode!==32){return}
sensible.blur();if(L.DomUtil.hasClass(opened,hide)){L.DomUtil.addClass(closed,hide);L.DomUtil.removeClass(opened,hide);L.DomUtil.removeClass(children,hide);}else{L.DomUtil.removeClass(closed,hide);L.DomUtil.addClass(opened,hide);L.DomUtil.addClass(children,hide);}
this._localExpand();},this);if(selAll){selAllNodes.splice(0,0,container);}
tree.children.forEach(function(child){var node=creator('div',this.cls.node,children)
this._iterateTreeLayout(child,node,overlay,selAllNodes);},this);if(selAll){selAllNodes.splice(0,1);}}else{L.DomUtil.addClass(sel,this.cls.neverShow);}
var labelType;if(tree.layer){if((this.options.labelIsSelector==='both')||(overlay&&this.options.labelIsSelector==='overlay')||(!overlay&&this.options.labelIsSelector==='base')){labelType='label'}else{labelType='span'}}else{labelType='span';}
var label=creator(labelType,this.cls.label,entry);if(tree.layer){var checked=this._map.hasLayer(tree.layer)
var input;var radioGroup=overlay?tree.radioGroup:'leaflet-base-layers_'+L.Util.stamp(this);if(radioGroup){input=this._createRadioElement(radioGroup,checked);}else{input=this._createCheckboxElement(checked);manageSelectorsAll(input,this);}
if(this._layerControlInputs){this._layerControlInputs.push(input);}
input.layerId=L.Util.stamp(tree.layer);L.DomEvent.on(input,'click',this._onInputClick,this);label.appendChild(input);}
function isText(variable){return(typeof variable==='string'||variable instanceof String);}
function isFunction(functionToCheck){return functionToCheck&&{}.toString.call(functionToCheck)==='[object Function]';}
function selectAllCheckboxes(select,ctx){var inputs=container.getElementsByTagName('input');for(var i=0;i<inputs.length;i++){var input=inputs[i];if(input.type!=='checkbox')continue;input.checked=select;input.indeterminate=false;}
ctx._onInputClick();}
if(tree.selectAllCheckbox){label.appendChild(selAll);if(isText(tree.selectAllCheckbox)){selAll.title=tree.selectAllCheckbox;}
L.DomEvent.on(selAll,'click',function(ev){ev.stopPropagation();selectAllCheckboxes(selAll.checked,this);},this);updateSelAllCheckbox(container);manageSelectorsAll(selAll,this);}
var name=creator('span',this.cls.name,label,tree.label);L.DomUtil.addClass(tree.collapsed?opened:closed,hide);tree.collapsed&&children&&L.DomUtil.addClass(children,hide);if(noShow){L.DomUtil.addClass(header,this.cls.neverShow);L.DomUtil.addClass(children,this.cls.childrenNopad);}
var eventeds=tree.eventedClasses;if(!(eventeds instanceof Array)){eventeds=[eventeds];}
for(var e=0;e<eventeds.length;e++){var evented=eventeds[e];if(evented&&evented.className){var obj=container.querySelector('.'+evented.className);if(obj){L.DomEvent.on(obj,evented.event||'click',(function(selectAll){return function(ev){ev.stopPropagation();var select=isFunction(selectAll)?selectAll(ev,container,tree,this._map):selectAll;if(select!==undefined&&select!==null){selectAllCheckboxes(select,this);}}})(evented.selectAll),this);}}}},_createCheckboxElement:function(checked){var input=document.createElement('input');input.type='checkbox';input.className='leaflet-control-layers-selector';input.defaultChecked=checked;return input;},});L.control.layers.tree=function(base,overlays,options){return new L.Control.Layers.Tree(base,overlays,options);}})(L);
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("rbush")):"function"==typeof define&&define.amd?define(["rbush"],t):"object"==typeof exports?exports.labelgun=t(require("rbush")):e.labelgun=t(e.rbush)}(this,function(e){return function(e){function t(l){if(a[l])return a[l].exports;var n=a[l]={i:l,l:!1,exports:{}};return e[l].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var a={};return t.m=e,t.c=a,t.d=function(e,a,l){t.o(e,a)||Object.defineProperty(e,a,{configurable:!1,enumerable:!0,get:l})},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,"a",a),a},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,a){"use strict";function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),i=a(1),s=function(e){return e&&e.__esModule?e:{default:e}}(i),r=function(){function e(t,a,n){l(this,e);var i=n||10;this.tree=(0,s.default)(i),this.allLabels={},this.hasChanged=[],this.allChanged=!1,this.hideLabel=t,this.showLabel=a}return n(e,[{key:"_total",value:function(e){for(var t=0,a=0,l=Object.keys(this.allLabels);a<l.length;a++)this.allLabels[l[a]].state==e&&(t+=1);return t}},{key:"totalShown",value:function(){return this._total("show")}},{key:"totalHidden",value:function(){return this._total("hide")}},{key:"_getLabelsByState",value:function(e){for(var t=[],a=0,l=Object.keys(this.allLabels);a<l.length;a++)this.allLabels[l[a]].state==e&&t.push(this.allLabels[l[a]]);return t}},{key:"getHidden",value:function(){return this._getLabelsByState("hide")}},{key:"getShown",value:function(){return this._getLabelsByState("show")}},{key:"getCollisions",value:function(e){var t=this.allLabels[e];if(void 0===t)throw Error("Label doesn't exist :"+JSON.stringify(e));var a=this.tree.search(t),l=a.indexOf(t);return void 0!==l&&a.splice(l,1),a}},{key:"getLabel",value:function(e){return this.allLabels[e]}},{key:"reset",value:function(){this.tree.clear(),this.allLabels={},this.hasChanged=[],this.allChanged=!1}},{key:"_callLabelCallbacks",value:function(e){var t=this;Object.keys(this.allLabels).forEach(function(a){t._callLabelStateCallback(t.allLabels[a],e)})}},{key:"_callLabelStateCallback",value:function(e,t){var a=t||e.state;"show"===a&&this.showLabel(e),"hide"===a&&this.hideLabel(e)}},{key:"_compareLabels",value:function(){var e=this;this.orderedLabels=Object.keys(this.allLabels).map(function(t){return e.allLabels[t]}).sort(this._compare),this.orderedLabels.forEach(function(t){var a=e.tree.search(t);(0===a.length||e._allLower(a,t)||t.isDragged)&&(e.allLabels[t.id].state="show")})}},{key:"_allLower",value:function(e,t){for(var a=void 0,l=0;l<e.length;l++)if(a=e[l],"show"===a.state||a.weight>t.weight||a.isDragged)return!1;return!0}},{key:"_compare",value:function(e,t){return e.weight>t.weight?-1:e.weight<t.weight?1:0}},{key:"_setupLabels",value:function(){var e=this;this.allChanged?(this.allChanged=!1,this.hasChanged=[],this.tree.clear(),Object.keys(this.allLabels).forEach(function(t){e._handleLabelIngestion(t)})):this.hasChanged.length>0&&(this.hasChanged.forEach(function(t){e._handleLabelIngestion(t)}),this.hasChanged=[])}},{key:"_handleLabelIngestion",value:function(e){var t=this.allLabels[e];this.ingestLabel({bottomLeft:[t.minX,t.minY],topRight:[t.maxX,t.maxY]},t.id,t.weight,t.labelObject,t.name,t.isDragged)}},{key:"update",value:function(e){this.allChanged=!e,this._setupLabels(),this._compareLabels(),this._callLabelCallbacks()}},{key:"removeLabel",value:function(e){var t=this.allLabels[e];this.tree.remove(t),delete this.allLabels[e]}},{key:"_addToTree",value:function(e){this.allLabels[e.id]=e,this.tree.insert(e)}},{key:"ingestLabel",value:function(e,t,a,l,n,i){if(void 0!==a&&null!==a||(a=0),!e||!e.bottomLeft||!e.topRight)throw Error("Bounding box must be defined with bottomLeft and topRight properties");if("string"!=typeof t&&"number"!=typeof t)throw Error("Label IDs must be a string or a number");var s=this.allLabels[t];s&&this.removeLabel(s.id);var r={minX:e.bottomLeft[0],minY:e.bottomLeft[1],maxX:e.topRight[0],maxY:e.topRight[1],state:"hide",id:t,weight:a,labelObject:l,name:n,isDragged:i};this._addToTree(r)}},{key:"labelHasChanged",value:function(e){-1===this.hasChanged.indexOf(e)&&this.hasChanged.push(e)}}]),e}();t.default=r},function(t,a){t.exports=e}])});
var hideLabel = function(label) {
    label.labelObject.style.opacity = 0;
    label.labelObject.style.transition = 'opacity 0s';
};
var showLabel = function(label) {
    label.labelObject.style.opacity = 1;
    label.labelObject.style.transition = 'opacity 1s';
};
labelEngine = new labelgun.default(hideLabel, showLabel);

var id = 0;
var labels = [];
var totalMarkers = 0;

function resetLabels(markers) {
    labelEngine.reset();
    var i = 0;
    for (var j = 0; j < markers.length; j++) {
        markers[j].eachLayer(function(label){
            addLabel(label, ++i);
        });
    }
  labelEngine.update();
}

function addLabel(layer, id) {

  // This is ugly but there is no getContainer method on the tooltip :(
  if (layer.getTooltip()) {
      var label = layer.getTooltip()._source._tooltip._container;
      if (label) {

        // We need the bounding rectangle of the label itself
        var rect = label.getBoundingClientRect();

        // We convert the container coordinates (screen space) to Lat/lng
        var bottomLeft = map.containerPointToLatLng([rect.left, rect.bottom]);
        var topRight = map.containerPointToLatLng([rect.right, rect.top]);
        var boundingBox = {
          bottomLeft : [bottomLeft.lng, bottomLeft.lat],
          topRight   : [topRight.lng, topRight.lat]
        };

        // Ingest the label into labelgun itself
        labelEngine.ingestLabel(
          boundingBox,
          id,
          parseInt(Math.random() * (5 - 1) + 1), // Weight
          label,
          "Test " + id,
          false
        );

        // If the label hasn't been added to the map already
        // add it and set the added flag to true
        if (!layer.added) {
          layer.addTo(map);
          layer.added = true;
        }
      }
  }
}
/* @preserve
 * Leaflet 1.9.4, a JS library for interactive maps. https://leafletjs.com
 * (c) 2010-2023 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).leaflet={})}(this,function(t){"use strict";function l(t){for(var e,i,n=1,o=arguments.length;n<o;n++)for(e in i=arguments[n])t[e]=i[e];return t}var R=Object.create||function(t){return N.prototype=t,new N};function N(){}function a(t,e){var i,n=Array.prototype.slice;return t.bind?t.bind.apply(t,n.call(arguments,1)):(i=n.call(arguments,2),function(){return t.apply(e,i.length?i.concat(n.call(arguments)):arguments)})}var D=0;function h(t){return"_leaflet_id"in t||(t._leaflet_id=++D),t._leaflet_id}function j(t,e,i){var n,o,s=function(){n=!1,o&&(r.apply(i,o),o=!1)},r=function(){n?o=arguments:(t.apply(i,arguments),setTimeout(s,e),n=!0)};return r}function H(t,e,i){var n=e[1],e=e[0],o=n-e;return t===n&&i?t:((t-e)%o+o)%o+e}function u(){return!1}function i(t,e){return!1===e?t:(e=Math.pow(10,void 0===e?6:e),Math.round(t*e)/e)}function W(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function F(t){return W(t).split(/\s+/)}function c(t,e){for(var i in Object.prototype.hasOwnProperty.call(t,"options")||(t.options=t.options?R(t.options):{}),e)t.options[i]=e[i];return t.options}function U(t,e,i){var n,o=[];for(n in t)o.push(encodeURIComponent(i?n.toUpperCase():n)+"="+encodeURIComponent(t[n]));return(e&&-1!==e.indexOf("?")?"&":"?")+o.join("&")}var V=/\{ *([\w_ -]+) *\}/g;function q(t,i){return t.replace(V,function(t,e){e=i[e];if(void 0===e)throw new Error("No value provided for variable "+t);return e="function"==typeof e?e(i):e})}var d=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)};function G(t,e){for(var i=0;i<t.length;i++)if(t[i]===e)return i;return-1}var K="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";function Y(t){return window["webkit"+t]||window["moz"+t]||window["ms"+t]}var X=0;function J(t){var e=+new Date,i=Math.max(0,16-(e-X));return X=e+i,window.setTimeout(t,i)}var $=window.requestAnimationFrame||Y("RequestAnimationFrame")||J,Q=window.cancelAnimationFrame||Y("CancelAnimationFrame")||Y("CancelRequestAnimationFrame")||function(t){window.clearTimeout(t)};function x(t,e,i){if(!i||$!==J)return $.call(window,a(t,e));t.call(e)}function r(t){t&&Q.call(window,t)}var tt={__proto__:null,extend:l,create:R,bind:a,get lastId(){return D},stamp:h,throttle:j,wrapNum:H,falseFn:u,formatNum:i,trim:W,splitWords:F,setOptions:c,getParamString:U,template:q,isArray:d,indexOf:G,emptyImageUrl:K,requestFn:$,cancelFn:Q,requestAnimFrame:x,cancelAnimFrame:r};function et(){}et.extend=function(t){function e(){c(this),this.initialize&&this.initialize.apply(this,arguments),this.callInitHooks()}var i,n=e.__super__=this.prototype,o=R(n);for(i in(o.constructor=e).prototype=o,this)Object.prototype.hasOwnProperty.call(this,i)&&"prototype"!==i&&"__super__"!==i&&(e[i]=this[i]);if(t.statics&&l(e,t.statics),t.includes){var s=t.includes;if("undefined"!=typeof L&&L&&L.Mixin){s=d(s)?s:[s];for(var r=0;r<s.length;r++)s[r]===L.Mixin.Events&&console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",(new Error).stack)}l.apply(null,[o].concat(t.includes))}return l(o,t),delete o.statics,delete o.includes,o.options&&(o.options=n.options?R(n.options):{},l(o.options,t.options)),o._initHooks=[],o.callInitHooks=function(){if(!this._initHooksCalled){n.callInitHooks&&n.callInitHooks.call(this),this._initHooksCalled=!0;for(var t=0,e=o._initHooks.length;t<e;t++)o._initHooks[t].call(this)}},e},et.include=function(t){var e=this.prototype.options;return l(this.prototype,t),t.options&&(this.prototype.options=e,this.mergeOptions(t.options)),this},et.mergeOptions=function(t){return l(this.prototype.options,t),this},et.addInitHook=function(t){var e=Array.prototype.slice.call(arguments,1),i="function"==typeof t?t:function(){this[t].apply(this,e)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(i),this};var e={on:function(t,e,i){if("object"==typeof t)for(var n in t)this._on(n,t[n],e);else for(var o=0,s=(t=F(t)).length;o<s;o++)this._on(t[o],e,i);return this},off:function(t,e,i){if(arguments.length)if("object"==typeof t)for(var n in t)this._off(n,t[n],e);else{t=F(t);for(var o=1===arguments.length,s=0,r=t.length;s<r;s++)o?this._off(t[s]):this._off(t[s],e,i)}else delete this._events;return this},_on:function(t,e,i,n){"function"!=typeof e?console.warn("wrong listener type: "+typeof e):!1===this._listens(t,e,i)&&(e={fn:e,ctx:i=i===this?void 0:i},n&&(e.once=!0),this._events=this._events||{},this._events[t]=this._events[t]||[],this._events[t].push(e))},_off:function(t,e,i){var n,o,s;if(this._events&&(n=this._events[t]))if(1===arguments.length){if(this._firingCount)for(o=0,s=n.length;o<s;o++)n[o].fn=u;delete this._events[t]}else"function"!=typeof e?console.warn("wrong listener type: "+typeof e):!1!==(e=this._listens(t,e,i))&&(i=n[e],this._firingCount&&(i.fn=u,this._events[t]=n=n.slice()),n.splice(e,1))},fire:function(t,e,i){if(this.listens(t,i)){var n=l({},e,{type:t,target:this,sourceTarget:e&&e.sourceTarget||this});if(this._events){var o=this._events[t];if(o){this._firingCount=this._firingCount+1||1;for(var s=0,r=o.length;s<r;s++){var a=o[s],h=a.fn;a.once&&this.off(t,h,a.ctx),h.call(a.ctx||this,n)}this._firingCount--}}i&&this._propagateEvent(n)}return this},listens:function(t,e,i,n){"string"!=typeof t&&console.warn('"string" type argument expected');var o=e,s=("function"!=typeof e&&(n=!!e,i=o=void 0),this._events&&this._events[t]);if(s&&s.length&&!1!==this._listens(t,o,i))return!0;if(n)for(var r in this._eventParents)if(this._eventParents[r].listens(t,e,i,n))return!0;return!1},_listens:function(t,e,i){if(this._events){var n=this._events[t]||[];if(!e)return!!n.length;i===this&&(i=void 0);for(var o=0,s=n.length;o<s;o++)if(n[o].fn===e&&n[o].ctx===i)return o}return!1},once:function(t,e,i){if("object"==typeof t)for(var n in t)this._on(n,t[n],e,!0);else for(var o=0,s=(t=F(t)).length;o<s;o++)this._on(t[o],e,i,!0);return this},addEventParent:function(t){return this._eventParents=this._eventParents||{},this._eventParents[h(t)]=t,this},removeEventParent:function(t){return this._eventParents&&delete this._eventParents[h(t)],this},_propagateEvent:function(t){for(var e in this._eventParents)this._eventParents[e].fire(t.type,l({layer:t.target,propagatedFrom:t.target},t),!0)}},it=(e.addEventListener=e.on,e.removeEventListener=e.clearAllEventListeners=e.off,e.addOneTimeEventListener=e.once,e.fireEvent=e.fire,e.hasEventListeners=e.listens,et.extend(e));function p(t,e,i){this.x=i?Math.round(t):t,this.y=i?Math.round(e):e}var nt=Math.trunc||function(t){return 0<t?Math.floor(t):Math.ceil(t)};function m(t,e,i){return t instanceof p?t:d(t)?new p(t[0],t[1]):null==t?t:"object"==typeof t&&"x"in t&&"y"in t?new p(t.x,t.y):new p(t,e,i)}function f(t,e){if(t)for(var i=e?[t,e]:t,n=0,o=i.length;n<o;n++)this.extend(i[n])}function _(t,e){return!t||t instanceof f?t:new f(t,e)}function s(t,e){if(t)for(var i=e?[t,e]:t,n=0,o=i.length;n<o;n++)this.extend(i[n])}function g(t,e){return t instanceof s?t:new s(t,e)}function v(t,e,i){if(isNaN(t)||isNaN(e))throw new Error("Invalid LatLng object: ("+t+", "+e+")");this.lat=+t,this.lng=+e,void 0!==i&&(this.alt=+i)}function w(t,e,i){return t instanceof v?t:d(t)&&"object"!=typeof t[0]?3===t.length?new v(t[0],t[1],t[2]):2===t.length?new v(t[0],t[1]):null:null==t?t:"object"==typeof t&&"lat"in t?new v(t.lat,"lng"in t?t.lng:t.lon,t.alt):void 0===e?null:new v(t,e,i)}p.prototype={clone:function(){return new p(this.x,this.y)},add:function(t){return this.clone()._add(m(t))},_add:function(t){return this.x+=t.x,this.y+=t.y,this},subtract:function(t){return this.clone()._subtract(m(t))},_subtract:function(t){return this.x-=t.x,this.y-=t.y,this},divideBy:function(t){return this.clone()._divideBy(t)},_divideBy:function(t){return this.x/=t,this.y/=t,this},multiplyBy:function(t){return this.clone()._multiplyBy(t)},_multiplyBy:function(t){return this.x*=t,this.y*=t,this},scaleBy:function(t){return new p(this.x*t.x,this.y*t.y)},unscaleBy:function(t){return new p(this.x/t.x,this.y/t.y)},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=nt(this.x),this.y=nt(this.y),this},distanceTo:function(t){var e=(t=m(t)).x-this.x,t=t.y-this.y;return Math.sqrt(e*e+t*t)},equals:function(t){return(t=m(t)).x===this.x&&t.y===this.y},contains:function(t){return t=m(t),Math.abs(t.x)<=Math.abs(this.x)&&Math.abs(t.y)<=Math.abs(this.y)},toString:function(){return"Point("+i(this.x)+", "+i(this.y)+")"}},f.prototype={extend:function(t){var e,i;if(t){if(t instanceof p||"number"==typeof t[0]||"x"in t)e=i=m(t);else if(e=(t=_(t)).min,i=t.max,!e||!i)return this;this.min||this.max?(this.min.x=Math.min(e.x,this.min.x),this.max.x=Math.max(i.x,this.max.x),this.min.y=Math.min(e.y,this.min.y),this.max.y=Math.max(i.y,this.max.y)):(this.min=e.clone(),this.max=i.clone())}return this},getCenter:function(t){return m((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,t)},getBottomLeft:function(){return m(this.min.x,this.max.y)},getTopRight:function(){return m(this.max.x,this.min.y)},getTopLeft:function(){return this.min},getBottomRight:function(){return this.max},getSize:function(){return this.max.subtract(this.min)},contains:function(t){var e,i;return(t=("number"==typeof t[0]||t instanceof p?m:_)(t))instanceof f?(e=t.min,i=t.max):e=i=t,e.x>=this.min.x&&i.x<=this.max.x&&e.y>=this.min.y&&i.y<=this.max.y},intersects:function(t){t=_(t);var e=this.min,i=this.max,n=t.min,t=t.max,o=t.x>=e.x&&n.x<=i.x,t=t.y>=e.y&&n.y<=i.y;return o&&t},overlaps:function(t){t=_(t);var e=this.min,i=this.max,n=t.min,t=t.max,o=t.x>e.x&&n.x<i.x,t=t.y>e.y&&n.y<i.y;return o&&t},isValid:function(){return!(!this.min||!this.max)},pad:function(t){var e=this.min,i=this.max,n=Math.abs(e.x-i.x)*t,t=Math.abs(e.y-i.y)*t;return _(m(e.x-n,e.y-t),m(i.x+n,i.y+t))},equals:function(t){return!!t&&(t=_(t),this.min.equals(t.getTopLeft())&&this.max.equals(t.getBottomRight()))}},s.prototype={extend:function(t){var e,i,n=this._southWest,o=this._northEast;if(t instanceof v)i=e=t;else{if(!(t instanceof s))return t?this.extend(w(t)||g(t)):this;if(e=t._southWest,i=t._northEast,!e||!i)return this}return n||o?(n.lat=Math.min(e.lat,n.lat),n.lng=Math.min(e.lng,n.lng),o.lat=Math.max(i.lat,o.lat),o.lng=Math.max(i.lng,o.lng)):(this._southWest=new v(e.lat,e.lng),this._northEast=new v(i.lat,i.lng)),this},pad:function(t){var e=this._southWest,i=this._northEast,n=Math.abs(e.lat-i.lat)*t,t=Math.abs(e.lng-i.lng)*t;return new s(new v(e.lat-n,e.lng-t),new v(i.lat+n,i.lng+t))},getCenter:function(){return new v((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new v(this.getNorth(),this.getWest())},getSouthEast:function(){return new v(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(t){t=("number"==typeof t[0]||t instanceof v||"lat"in t?w:g)(t);var e,i,n=this._southWest,o=this._northEast;return t instanceof s?(e=t.getSouthWest(),i=t.getNorthEast()):e=i=t,e.lat>=n.lat&&i.lat<=o.lat&&e.lng>=n.lng&&i.lng<=o.lng},intersects:function(t){t=g(t);var e=this._southWest,i=this._northEast,n=t.getSouthWest(),t=t.getNorthEast(),o=t.lat>=e.lat&&n.lat<=i.lat,t=t.lng>=e.lng&&n.lng<=i.lng;return o&&t},overlaps:function(t){t=g(t);var e=this._southWest,i=this._northEast,n=t.getSouthWest(),t=t.getNorthEast(),o=t.lat>e.lat&&n.lat<i.lat,t=t.lng>e.lng&&n.lng<i.lng;return o&&t},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(t,e){return!!t&&(t=g(t),this._southWest.equals(t.getSouthWest(),e)&&this._northEast.equals(t.getNorthEast(),e))},isValid:function(){return!(!this._southWest||!this._northEast)}};var ot={latLngToPoint:function(t,e){t=this.projection.project(t),e=this.scale(e);return this.transformation._transform(t,e)},pointToLatLng:function(t,e){e=this.scale(e),t=this.transformation.untransform(t,e);return this.projection.unproject(t)},project:function(t){return this.projection.project(t)},unproject:function(t){return this.projection.unproject(t)},scale:function(t){return 256*Math.pow(2,t)},zoom:function(t){return Math.log(t/256)/Math.LN2},getProjectedBounds:function(t){var e;return this.infinite?null:(e=this.projection.bounds,t=this.scale(t),new f(this.transformation.transform(e.min,t),this.transformation.transform(e.max,t)))},infinite:!(v.prototype={equals:function(t,e){return!!t&&(t=w(t),Math.max(Math.abs(this.lat-t.lat),Math.abs(this.lng-t.lng))<=(void 0===e?1e-9:e))},toString:function(t){return"LatLng("+i(this.lat,t)+", "+i(this.lng,t)+")"},distanceTo:function(t){return st.distance(this,w(t))},wrap:function(){return st.wrapLatLng(this)},toBounds:function(t){var t=180*t/40075017,e=t/Math.cos(Math.PI/180*this.lat);return g([this.lat-t,this.lng-e],[this.lat+t,this.lng+e])},clone:function(){return new v(this.lat,this.lng,this.alt)}}),wrapLatLng:function(t){var e=this.wrapLng?H(t.lng,this.wrapLng,!0):t.lng;return new v(this.wrapLat?H(t.lat,this.wrapLat,!0):t.lat,e,t.alt)},wrapLatLngBounds:function(t){var e=t.getCenter(),i=this.wrapLatLng(e),n=e.lat-i.lat,e=e.lng-i.lng;return 0==n&&0==e?t:(i=t.getSouthWest(),t=t.getNorthEast(),new s(new v(i.lat-n,i.lng-e),new v(t.lat-n,t.lng-e)))}},st=l({},ot,{wrapLng:[-180,180],R:6371e3,distance:function(t,e){var i=Math.PI/180,n=t.lat*i,o=e.lat*i,s=Math.sin((e.lat-t.lat)*i/2),e=Math.sin((e.lng-t.lng)*i/2),t=s*s+Math.cos(n)*Math.cos(o)*e*e,i=2*Math.atan2(Math.sqrt(t),Math.sqrt(1-t));return this.R*i}}),rt=6378137,rt={R:rt,MAX_LATITUDE:85.0511287798,project:function(t){var e=Math.PI/180,i=this.MAX_LATITUDE,i=Math.max(Math.min(i,t.lat),-i),i=Math.sin(i*e);return new p(this.R*t.lng*e,this.R*Math.log((1+i)/(1-i))/2)},unproject:function(t){var e=180/Math.PI;return new v((2*Math.atan(Math.exp(t.y/this.R))-Math.PI/2)*e,t.x*e/this.R)},bounds:new f([-(rt=rt*Math.PI),-rt],[rt,rt])};function at(t,e,i,n){d(t)?(this._a=t[0],this._b=t[1],this._c=t[2],this._d=t[3]):(this._a=t,this._b=e,this._c=i,this._d=n)}function ht(t,e,i,n){return new at(t,e,i,n)}at.prototype={transform:function(t,e){return this._transform(t.clone(),e)},_transform:function(t,e){return t.x=(e=e||1)*(this._a*t.x+this._b),t.y=e*(this._c*t.y+this._d),t},untransform:function(t,e){return new p((t.x/(e=e||1)-this._b)/this._a,(t.y/e-this._d)/this._c)}};var lt=l({},st,{code:"EPSG:3857",projection:rt,transformation:ht(lt=.5/(Math.PI*rt.R),.5,-lt,.5)}),ut=l({},lt,{code:"EPSG:900913"});function ct(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function dt(t,e){for(var i,n,o,s,r="",a=0,h=t.length;a<h;a++){for(i=0,n=(o=t[a]).length;i<n;i++)r+=(i?"L":"M")+(s=o[i]).x+" "+s.y;r+=e?b.svg?"z":"x":""}return r||"M0 0"}var _t=document.documentElement.style,pt="ActiveXObject"in window,mt=pt&&!document.addEventListener,n="msLaunchUri"in navigator&&!("documentMode"in document),ft=y("webkit"),gt=y("android"),vt=y("android 2")||y("android 3"),yt=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),yt=gt&&y("Google")&&yt<537&&!("AudioNode"in window),xt=!!window.opera,wt=!n&&y("chrome"),bt=y("gecko")&&!ft&&!xt&&!pt,Pt=!wt&&y("safari"),Lt=y("phantom"),o="OTransition"in _t,Tt=0===navigator.platform.indexOf("Win"),Mt=pt&&"transition"in _t,zt="WebKitCSSMatrix"in window&&"m11"in new window.WebKitCSSMatrix&&!vt,_t="MozPerspective"in _t,Ct=!window.L_DISABLE_3D&&(Mt||zt||_t)&&!o&&!Lt,Zt="undefined"!=typeof orientation||y("mobile"),St=Zt&&ft,Et=Zt&&zt,kt=!window.PointerEvent&&window.MSPointerEvent,Ot=!(!window.PointerEvent&&!kt),At="ontouchstart"in window||!!window.TouchEvent,Bt=!window.L_NO_TOUCH&&(At||Ot),It=Zt&&xt,Rt=Zt&&bt,Nt=1<(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI),Dt=function(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("testPassiveEventSupport",u,e),window.removeEventListener("testPassiveEventSupport",u,e)}catch(t){}return t}(),jt=!!document.createElement("canvas").getContext,Ht=!(!document.createElementNS||!ct("svg").createSVGRect),Wt=!!Ht&&((Wt=document.createElement("div")).innerHTML="<svg/>","http://www.w3.org/2000/svg"===(Wt.firstChild&&Wt.firstChild.namespaceURI));function y(t){return 0<=navigator.userAgent.toLowerCase().indexOf(t)}var b={ie:pt,ielt9:mt,edge:n,webkit:ft,android:gt,android23:vt,androidStock:yt,opera:xt,chrome:wt,gecko:bt,safari:Pt,phantom:Lt,opera12:o,win:Tt,ie3d:Mt,webkit3d:zt,gecko3d:_t,any3d:Ct,mobile:Zt,mobileWebkit:St,mobileWebkit3d:Et,msPointer:kt,pointer:Ot,touch:Bt,touchNative:At,mobileOpera:It,mobileGecko:Rt,retina:Nt,passiveEvents:Dt,canvas:jt,svg:Ht,vml:!Ht&&function(){try{var t=document.createElement("div"),e=(t.innerHTML='<v:shape adj="1"/>',t.firstChild);return e.style.behavior="url(#default#VML)",e&&"object"==typeof e.adj}catch(t){return!1}}(),inlineSvg:Wt,mac:0===navigator.platform.indexOf("Mac"),linux:0===navigator.platform.indexOf("Linux")},Ft=b.msPointer?"MSPointerDown":"pointerdown",Ut=b.msPointer?"MSPointerMove":"pointermove",Vt=b.msPointer?"MSPointerUp":"pointerup",qt=b.msPointer?"MSPointerCancel":"pointercancel",Gt={touchstart:Ft,touchmove:Ut,touchend:Vt,touchcancel:qt},Kt={touchstart:function(t,e){e.MSPOINTER_TYPE_TOUCH&&e.pointerType===e.MSPOINTER_TYPE_TOUCH&&O(e);ee(t,e)},touchmove:ee,touchend:ee,touchcancel:ee},Yt={},Xt=!1;function Jt(t,e,i){return"touchstart"!==e||Xt||(document.addEventListener(Ft,$t,!0),document.addEventListener(Ut,Qt,!0),document.addEventListener(Vt,te,!0),document.addEventListener(qt,te,!0),Xt=!0),Kt[e]?(i=Kt[e].bind(this,i),t.addEventListener(Gt[e],i,!1),i):(console.warn("wrong event specified:",e),u)}function $t(t){Yt[t.pointerId]=t}function Qt(t){Yt[t.pointerId]&&(Yt[t.pointerId]=t)}function te(t){delete Yt[t.pointerId]}function ee(t,e){if(e.pointerType!==(e.MSPOINTER_TYPE_MOUSE||"mouse")){for(var i in e.touches=[],Yt)e.touches.push(Yt[i]);e.changedTouches=[e],t(e)}}var ie=200;function ne(t,i){t.addEventListener("dblclick",i);var n,o=0;function e(t){var e;1!==t.detail?n=t.detail:"mouse"===t.pointerType||t.sourceCapabilities&&!t.sourceCapabilities.firesTouchEvents||((e=Ne(t)).some(function(t){return t instanceof HTMLLabelElement&&t.attributes.for})&&!e.some(function(t){return t instanceof HTMLInputElement||t instanceof HTMLSelectElement})||((e=Date.now())-o<=ie?2===++n&&i(function(t){var e,i,n={};for(i in t)e=t[i],n[i]=e&&e.bind?e.bind(t):e;return(t=n).type="dblclick",n.detail=2,n.isTrusted=!1,n._simulated=!0,n}(t)):n=1,o=e))}return t.addEventListener("click",e),{dblclick:i,simDblclick:e}}var oe,se,re,ae,he,le,ue=we(["transform","webkitTransform","OTransform","MozTransform","msTransform"]),ce=we(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),de="webkitTransition"===ce||"OTransition"===ce?ce+"End":"transitionend";function _e(t){return"string"==typeof t?document.getElementById(t):t}function pe(t,e){var i=t.style[e]||t.currentStyle&&t.currentStyle[e];return"auto"===(i=i&&"auto"!==i||!document.defaultView?i:(t=document.defaultView.getComputedStyle(t,null))?t[e]:null)?null:i}function P(t,e,i){t=document.createElement(t);return t.className=e||"",i&&i.appendChild(t),t}function T(t){var e=t.parentNode;e&&e.removeChild(t)}function me(t){for(;t.firstChild;)t.removeChild(t.firstChild)}function fe(t){var e=t.parentNode;e&&e.lastChild!==t&&e.appendChild(t)}function ge(t){var e=t.parentNode;e&&e.firstChild!==t&&e.insertBefore(t,e.firstChild)}function ve(t,e){return void 0!==t.classList?t.classList.contains(e):0<(t=xe(t)).length&&new RegExp("(^|\\s)"+e+"(\\s|$)").test(t)}function M(t,e){var i;if(void 0!==t.classList)for(var n=F(e),o=0,s=n.length;o<s;o++)t.classList.add(n[o]);else ve(t,e)||ye(t,((i=xe(t))?i+" ":"")+e)}function z(t,e){void 0!==t.classList?t.classList.remove(e):ye(t,W((" "+xe(t)+" ").replace(" "+e+" "," ")))}function ye(t,e){void 0===t.className.baseVal?t.className=e:t.className.baseVal=e}function xe(t){return void 0===(t=t.correspondingElement?t.correspondingElement:t).className.baseVal?t.className:t.className.baseVal}function C(t,e){if("opacity"in t.style)t.style.opacity=e;else if("filter"in t.style){var i=!1,n="DXImageTransform.Microsoft.Alpha";try{i=t.filters.item(n)}catch(t){if(1===e)return}e=Math.round(100*e),i?(i.Enabled=100!==e,i.Opacity=e):t.style.filter+=" progid:"+n+"(opacity="+e+")"}}function we(t){for(var e=document.documentElement.style,i=0;i<t.length;i++)if(t[i]in e)return t[i];return!1}function be(t,e,i){e=e||new p(0,0);t.style[ue]=(b.ie3d?"translate("+e.x+"px,"+e.y+"px)":"translate3d("+e.x+"px,"+e.y+"px,0)")+(i?" scale("+i+")":"")}function Z(t,e){t._leaflet_pos=e,b.any3d?be(t,e):(t.style.left=e.x+"px",t.style.top=e.y+"px")}function Pe(t){return t._leaflet_pos||new p(0,0)}function Le(){S(window,"dragstart",O)}function Te(){k(window,"dragstart",O)}function Me(t){for(;-1===t.tabIndex;)t=t.parentNode;t.style&&(ze(),le=(he=t).style.outlineStyle,t.style.outlineStyle="none",S(window,"keydown",ze))}function ze(){he&&(he.style.outlineStyle=le,le=he=void 0,k(window,"keydown",ze))}function Ce(t){for(;!((t=t.parentNode).offsetWidth&&t.offsetHeight||t===document.body););return t}function Ze(t){var e=t.getBoundingClientRect();return{x:e.width/t.offsetWidth||1,y:e.height/t.offsetHeight||1,boundingClientRect:e}}ae="onselectstart"in document?(re=function(){S(window,"selectstart",O)},function(){k(window,"selectstart",O)}):(se=we(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]),re=function(){var t;se&&(t=document.documentElement.style,oe=t[se],t[se]="none")},function(){se&&(document.documentElement.style[se]=oe,oe=void 0)});pt={__proto__:null,TRANSFORM:ue,TRANSITION:ce,TRANSITION_END:de,get:_e,getStyle:pe,create:P,remove:T,empty:me,toFront:fe,toBack:ge,hasClass:ve,addClass:M,removeClass:z,setClass:ye,getClass:xe,setOpacity:C,testProp:we,setTransform:be,setPosition:Z,getPosition:Pe,get disableTextSelection(){return re},get enableTextSelection(){return ae},disableImageDrag:Le,enableImageDrag:Te,preventOutline:Me,restoreOutline:ze,getSizedParentNode:Ce,getScale:Ze};function S(t,e,i,n){if(e&&"object"==typeof e)for(var o in e)ke(t,o,e[o],i);else for(var s=0,r=(e=F(e)).length;s<r;s++)ke(t,e[s],i,n);return this}var E="_leaflet_events";function k(t,e,i,n){if(1===arguments.length)Se(t),delete t[E];else if(e&&"object"==typeof e)for(var o in e)Oe(t,o,e[o],i);else if(e=F(e),2===arguments.length)Se(t,function(t){return-1!==G(e,t)});else for(var s=0,r=e.length;s<r;s++)Oe(t,e[s],i,n);return this}function Se(t,e){for(var i in t[E]){var n=i.split(/\d/)[0];e&&!e(n)||Oe(t,n,null,null,i)}}var Ee={mouseenter:"mouseover",mouseleave:"mouseout",wheel:!("onwheel"in window)&&"mousewheel"};function ke(e,t,i,n){var o,s,r=t+h(i)+(n?"_"+h(n):"");e[E]&&e[E][r]||(s=o=function(t){return i.call(n||e,t||window.event)},!b.touchNative&&b.pointer&&0===t.indexOf("touch")?o=Jt(e,t,o):b.touch&&"dblclick"===t?o=ne(e,o):"addEventListener"in e?"touchstart"===t||"touchmove"===t||"wheel"===t||"mousewheel"===t?e.addEventListener(Ee[t]||t,o,!!b.passiveEvents&&{passive:!1}):"mouseenter"===t||"mouseleave"===t?e.addEventListener(Ee[t],o=function(t){t=t||window.event,We(e,t)&&s(t)},!1):e.addEventListener(t,s,!1):e.attachEvent("on"+t,o),e[E]=e[E]||{},e[E][r]=o)}function Oe(t,e,i,n,o){o=o||e+h(i)+(n?"_"+h(n):"");var s,r,i=t[E]&&t[E][o];i&&(!b.touchNative&&b.pointer&&0===e.indexOf("touch")?(n=t,r=i,Gt[s=e]?n.removeEventListener(Gt[s],r,!1):console.warn("wrong event specified:",s)):b.touch&&"dblclick"===e?(n=i,(r=t).removeEventListener("dblclick",n.dblclick),r.removeEventListener("click",n.simDblclick)):"removeEventListener"in t?t.removeEventListener(Ee[e]||e,i,!1):t.detachEvent("on"+e,i),t[E][o]=null)}function Ae(t){return t.stopPropagation?t.stopPropagation():t.originalEvent?t.originalEvent._stopped=!0:t.cancelBubble=!0,this}function Be(t){return ke(t,"wheel",Ae),this}function Ie(t){return S(t,"mousedown touchstart dblclick contextmenu",Ae),t._leaflet_disable_click=!0,this}function O(t){return t.preventDefault?t.preventDefault():t.returnValue=!1,this}function Re(t){return O(t),Ae(t),this}function Ne(t){if(t.composedPath)return t.composedPath();for(var e=[],i=t.target;i;)e.push(i),i=i.parentNode;return e}function De(t,e){var i,n;return e?(n=(i=Ze(e)).boundingClientRect,new p((t.clientX-n.left)/i.x-e.clientLeft,(t.clientY-n.top)/i.y-e.clientTop)):new p(t.clientX,t.clientY)}var je=b.linux&&b.chrome?window.devicePixelRatio:b.mac?3*window.devicePixelRatio:0<window.devicePixelRatio?2*window.devicePixelRatio:1;function He(t){return b.edge?t.wheelDeltaY/2:t.deltaY&&0===t.deltaMode?-t.deltaY/je:t.deltaY&&1===t.deltaMode?20*-t.deltaY:t.deltaY&&2===t.deltaMode?60*-t.deltaY:t.deltaX||t.deltaZ?0:t.wheelDelta?(t.wheelDeltaY||t.wheelDelta)/2:t.detail&&Math.abs(t.detail)<32765?20*-t.detail:t.detail?t.detail/-32765*60:0}function We(t,e){var i=e.relatedTarget;if(!i)return!0;try{for(;i&&i!==t;)i=i.parentNode}catch(t){return!1}return i!==t}var mt={__proto__:null,on:S,off:k,stopPropagation:Ae,disableScrollPropagation:Be,disableClickPropagation:Ie,preventDefault:O,stop:Re,getPropagationPath:Ne,getMousePosition:De,getWheelDelta:He,isExternalTarget:We,addListener:S,removeListener:k},Fe=it.extend({run:function(t,e,i,n){this.stop(),this._el=t,this._inProgress=!0,this._duration=i||.25,this._easeOutPower=1/Math.max(n||.5,.2),this._startPos=Pe(t),this._offset=e.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){this._animId=x(this._animate,this),this._step()},_step:function(t){var e=+new Date-this._startTime,i=1e3*this._duration;e<i?this._runFrame(this._easeOut(e/i),t):(this._runFrame(1),this._complete())},_runFrame:function(t,e){t=this._startPos.add(this._offset.multiplyBy(t));e&&t._round(),Z(this._el,t),this.fire("step")},_complete:function(){r(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(t){return 1-Math.pow(1-t,this._easeOutPower)}}),A=it.extend({options:{crs:lt,center:void 0,zoom:void 0,minZoom:void 0,maxZoom:void 0,layers:[],maxBounds:void 0,renderer:void 0,zoomAnimation:!0,zoomAnimationThreshold:4,fadeAnimation:!0,markerZoomAnimation:!0,transform3DLimit:8388608,zoomSnap:1,zoomDelta:1,trackResize:!0},initialize:function(t,e){e=c(this,e),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this._initContainer(t),this._initLayout(),this._onResize=a(this._onResize,this),this._initEvents(),e.maxBounds&&this.setMaxBounds(e.maxBounds),void 0!==e.zoom&&(this._zoom=this._limitZoom(e.zoom)),e.center&&void 0!==e.zoom&&this.setView(w(e.center),e.zoom,{reset:!0}),this.callInitHooks(),this._zoomAnimated=ce&&b.any3d&&!b.mobileOpera&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),S(this._proxy,de,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},setView:function(t,e,i){if((e=void 0===e?this._zoom:this._limitZoom(e),t=this._limitCenter(w(t),e,this.options.maxBounds),i=i||{},this._stop(),this._loaded&&!i.reset&&!0!==i)&&(void 0!==i.animate&&(i.zoom=l({animate:i.animate},i.zoom),i.pan=l({animate:i.animate,duration:i.duration},i.pan)),this._zoom!==e?this._tryAnimatedZoom&&this._tryAnimatedZoom(t,e,i.zoom):this._tryAnimatedPan(t,i.pan)))return clearTimeout(this._sizeTimer),this;return this._resetView(t,e,i.pan&&i.pan.noMoveStart),this},setZoom:function(t,e){return this._loaded?this.setView(this.getCenter(),t,{zoom:e}):(this._zoom=t,this)},zoomIn:function(t,e){return t=t||(b.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom+t,e)},zoomOut:function(t,e){return t=t||(b.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom-t,e)},setZoomAround:function(t,e,i){var n=this.getZoomScale(e),o=this.getSize().divideBy(2),t=(t instanceof p?t:this.latLngToContainerPoint(t)).subtract(o).multiplyBy(1-1/n),n=this.containerPointToLatLng(o.add(t));return this.setView(n,e,{zoom:i})},_getBoundsCenterZoom:function(t,e){e=e||{},t=t.getBounds?t.getBounds():g(t);var i=m(e.paddingTopLeft||e.padding||[0,0]),n=m(e.paddingBottomRight||e.padding||[0,0]),o=this.getBoundsZoom(t,!1,i.add(n));return(o="number"==typeof e.maxZoom?Math.min(e.maxZoom,o):o)===1/0?{center:t.getCenter(),zoom:o}:(e=n.subtract(i).divideBy(2),n=this.project(t.getSouthWest(),o),i=this.project(t.getNorthEast(),o),{center:this.unproject(n.add(i).divideBy(2).add(e),o),zoom:o})},fitBounds:function(t,e){if((t=g(t)).isValid())return t=this._getBoundsCenterZoom(t,e),this.setView(t.center,t.zoom,e);throw new Error("Bounds are not valid.")},fitWorld:function(t){return this.fitBounds([[-90,-180],[90,180]],t)},panTo:function(t,e){return this.setView(t,this._zoom,{pan:e})},panBy:function(t,e){var i;return e=e||{},(t=m(t).round()).x||t.y?(!0===e.animate||this.getSize().contains(t)?(this._panAnim||(this._panAnim=new Fe,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),e.noMoveStart||this.fire("movestart"),!1!==e.animate?(M(this._mapPane,"leaflet-pan-anim"),i=this._getMapPanePos().subtract(t).round(),this._panAnim.run(this._mapPane,i,e.duration||.25,e.easeLinearity)):(this._rawPanBy(t),this.fire("move").fire("moveend"))):this._resetView(this.unproject(this.project(this.getCenter()).add(t)),this.getZoom()),this):this.fire("moveend")},flyTo:function(n,o,t){if(!1===(t=t||{}).animate||!b.any3d)return this.setView(n,o,t);this._stop();var s=this.project(this.getCenter()),r=this.project(n),e=this.getSize(),a=this._zoom,h=(n=w(n),o=void 0===o?a:o,Math.max(e.x,e.y)),i=h*this.getZoomScale(a,o),l=r.distanceTo(s)||1,u=1.42,c=u*u;function d(t){t=(i*i-h*h+(t?-1:1)*c*c*l*l)/(2*(t?i:h)*c*l),t=Math.sqrt(t*t+1)-t;return t<1e-9?-18:Math.log(t)}function _(t){return(Math.exp(t)-Math.exp(-t))/2}function p(t){return(Math.exp(t)+Math.exp(-t))/2}var m=d(0);function f(t){return h*(p(m)*(_(t=m+u*t)/p(t))-_(m))/c}var g=Date.now(),v=(d(1)-m)/u,y=t.duration?1e3*t.duration:1e3*v*.8;return this._moveStart(!0,t.noMoveStart),function t(){var e=(Date.now()-g)/y,i=(1-Math.pow(1-e,1.5))*v;e<=1?(this._flyToFrame=x(t,this),this._move(this.unproject(s.add(r.subtract(s).multiplyBy(f(i)/l)),a),this.getScaleZoom(h/(e=i,h*(p(m)/p(m+u*e))),a),{flyTo:!0})):this._move(n,o)._moveEnd(!0)}.call(this),this},flyToBounds:function(t,e){t=this._getBoundsCenterZoom(t,e);return this.flyTo(t.center,t.zoom,e)},setMaxBounds:function(t){return t=g(t),this.listens("moveend",this._panInsideMaxBounds)&&this.off("moveend",this._panInsideMaxBounds),t.isValid()?(this.options.maxBounds=t,this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds)):(this.options.maxBounds=null,this)},setMinZoom:function(t){var e=this.options.minZoom;return this.options.minZoom=t,this._loaded&&e!==t&&(this.fire("zoomlevelschange"),this.getZoom()<this.options.minZoom)?this.setZoom(t):this},setMaxZoom:function(t){var e=this.options.maxZoom;return this.options.maxZoom=t,this._loaded&&e!==t&&(this.fire("zoomlevelschange"),this.getZoom()>this.options.maxZoom)?this.setZoom(t):this},panInsideBounds:function(t,e){this._enforcingBounds=!0;var i=this.getCenter(),t=this._limitCenter(i,this._zoom,g(t));return i.equals(t)||this.panTo(t,e),this._enforcingBounds=!1,this},panInside:function(t,e){var i=m((e=e||{}).paddingTopLeft||e.padding||[0,0]),n=m(e.paddingBottomRight||e.padding||[0,0]),o=this.project(this.getCenter()),t=this.project(t),s=this.getPixelBounds(),i=_([s.min.add(i),s.max.subtract(n)]),s=i.getSize();return i.contains(t)||(this._enforcingBounds=!0,n=t.subtract(i.getCenter()),i=i.extend(t).getSize().subtract(s),o.x+=n.x<0?-i.x:i.x,o.y+=n.y<0?-i.y:i.y,this.panTo(this.unproject(o),e),this._enforcingBounds=!1),this},invalidateSize:function(t){if(!this._loaded)return this;t=l({animate:!1,pan:!0},!0===t?{animate:!0}:t);var e=this.getSize(),i=(this._sizeChanged=!0,this._lastCenter=null,this.getSize()),n=e.divideBy(2).round(),o=i.divideBy(2).round(),n=n.subtract(o);return n.x||n.y?(t.animate&&t.pan?this.panBy(n):(t.pan&&this._rawPanBy(n),this.fire("move"),t.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(a(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:e,newSize:i})):this},stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire("viewreset"),this._stop()},locate:function(t){var e,i;return t=this._locateOptions=l({timeout:1e4,watch:!1},t),"geolocation"in navigator?(e=a(this._handleGeolocationResponse,this),i=a(this._handleGeolocationError,this),t.watch?this._locationWatchId=navigator.geolocation.watchPosition(e,i,t):navigator.geolocation.getCurrentPosition(e,i,t)):this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(t){var e;this._container._leaflet_id&&(e=t.code,t=t.message||(1===e?"permission denied":2===e?"position unavailable":"timeout"),this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:e,message:"Geolocation error: "+t+"."}))},_handleGeolocationResponse:function(t){if(this._container._leaflet_id){var e,i,n=new v(t.coords.latitude,t.coords.longitude),o=n.toBounds(2*t.coords.accuracy),s=this._locateOptions,r=(s.setView&&(e=this.getBoundsZoom(o),this.setView(n,s.maxZoom?Math.min(e,s.maxZoom):e)),{latlng:n,bounds:o,timestamp:t.timestamp});for(i in t.coords)"number"==typeof t.coords[i]&&(r[i]=t.coords[i]);this.fire("locationfound",r)}},addHandler:function(t,e){return e&&(e=this[t]=new e(this),this._handlers.push(e),this.options[t]&&e.enable()),this},remove:function(){if(this._initEvents(!0),this.options.maxBounds&&this.off("moveend",this._panInsideMaxBounds),this._containerId!==this._container._leaflet_id)throw new Error("Map container is being reused by another instance");try{delete this._container._leaflet_id,delete this._containerId}catch(t){this._container._leaflet_id=void 0,this._containerId=void 0}for(var t in void 0!==this._locationWatchId&&this.stopLocate(),this._stop(),T(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._resizeRequest&&(r(this._resizeRequest),this._resizeRequest=null),this._clearHandlers(),this._loaded&&this.fire("unload"),this._layers)this._layers[t].remove();for(t in this._panes)T(this._panes[t]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},createPane:function(t,e){e=P("div","leaflet-pane"+(t?" leaflet-"+t.replace("Pane","")+"-pane":""),e||this._mapPane);return t&&(this._panes[t]=e),e},getCenter:function(){return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter.clone():this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var t=this.getPixelBounds();return new s(this.unproject(t.getBottomLeft()),this.unproject(t.getTopRight()))},getMinZoom:function(){return void 0===this.options.minZoom?this._layersMinZoom||0:this.options.minZoom},getMaxZoom:function(){return void 0===this.options.maxZoom?void 0===this._layersMaxZoom?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(t,e,i){t=g(t),i=m(i||[0,0]);var n=this.getZoom()||0,o=this.getMinZoom(),s=this.getMaxZoom(),r=t.getNorthWest(),t=t.getSouthEast(),i=this.getSize().subtract(i),t=_(this.project(t,n),this.project(r,n)).getSize(),r=b.any3d?this.options.zoomSnap:1,a=i.x/t.x,i=i.y/t.y,t=e?Math.max(a,i):Math.min(a,i),n=this.getScaleZoom(t,n);return r&&(n=Math.round(n/(r/100))*(r/100),n=e?Math.ceil(n/r)*r:Math.floor(n/r)*r),Math.max(o,Math.min(s,n))},getSize:function(){return this._size&&!this._sizeChanged||(this._size=new p(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(t,e){t=this._getTopLeftPoint(t,e);return new f(t,t.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},getPixelWorldBounds:function(t){return this.options.crs.getProjectedBounds(void 0===t?this.getZoom():t)},getPane:function(t){return"string"==typeof t?this._panes[t]:t},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(t,e){var i=this.options.crs;return e=void 0===e?this._zoom:e,i.scale(t)/i.scale(e)},getScaleZoom:function(t,e){var i=this.options.crs,t=(e=void 0===e?this._zoom:e,i.zoom(t*i.scale(e)));return isNaN(t)?1/0:t},project:function(t,e){return e=void 0===e?this._zoom:e,this.options.crs.latLngToPoint(w(t),e)},unproject:function(t,e){return e=void 0===e?this._zoom:e,this.options.crs.pointToLatLng(m(t),e)},layerPointToLatLng:function(t){t=m(t).add(this.getPixelOrigin());return this.unproject(t)},latLngToLayerPoint:function(t){return this.project(w(t))._round()._subtract(this.getPixelOrigin())},wrapLatLng:function(t){return this.options.crs.wrapLatLng(w(t))},wrapLatLngBounds:function(t){return this.options.crs.wrapLatLngBounds(g(t))},distance:function(t,e){return this.options.crs.distance(w(t),w(e))},containerPointToLayerPoint:function(t){return m(t).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(t){return m(t).add(this._getMapPanePos())},containerPointToLatLng:function(t){t=this.containerPointToLayerPoint(m(t));return this.layerPointToLatLng(t)},latLngToContainerPoint:function(t){return this.layerPointToContainerPoint(this.latLngToLayerPoint(w(t)))},mouseEventToContainerPoint:function(t){return De(t,this._container)},mouseEventToLayerPoint:function(t){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t))},mouseEventToLatLng:function(t){return this.layerPointToLatLng(this.mouseEventToLayerPoint(t))},_initContainer:function(t){t=this._container=_e(t);if(!t)throw new Error("Map container not found.");if(t._leaflet_id)throw new Error("Map container is already initialized.");S(t,"scroll",this._onScroll,this),this._containerId=h(t)},_initLayout:function(){var t=this._container,e=(this._fadeAnimated=this.options.fadeAnimation&&b.any3d,M(t,"leaflet-container"+(b.touch?" leaflet-touch":"")+(b.retina?" leaflet-retina":"")+(b.ielt9?" leaflet-oldie":"")+(b.safari?" leaflet-safari":"")+(this._fadeAnimated?" leaflet-fade-anim":"")),pe(t,"position"));"absolute"!==e&&"relative"!==e&&"fixed"!==e&&"sticky"!==e&&(t.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var t=this._panes={};this._paneRenderers={},this._mapPane=this.createPane("mapPane",this._container),Z(this._mapPane,new p(0,0)),this.createPane("tilePane"),this.createPane("overlayPane"),this.createPane("shadowPane"),this.createPane("markerPane"),this.createPane("tooltipPane"),this.createPane("popupPane"),this.options.markerZoomAnimation||(M(t.markerPane,"leaflet-zoom-hide"),M(t.shadowPane,"leaflet-zoom-hide"))},_resetView:function(t,e,i){Z(this._mapPane,new p(0,0));var n=!this._loaded,o=(this._loaded=!0,e=this._limitZoom(e),this.fire("viewprereset"),this._zoom!==e);this._moveStart(o,i)._move(t,e)._moveEnd(o),this.fire("viewreset"),n&&this.fire("load")},_moveStart:function(t,e){return t&&this.fire("zoomstart"),e||this.fire("movestart"),this},_move:function(t,e,i,n){void 0===e&&(e=this._zoom);var o=this._zoom!==e;return this._zoom=e,this._lastCenter=t,this._pixelOrigin=this._getNewPixelOrigin(t),n?i&&i.pinch&&this.fire("zoom",i):((o||i&&i.pinch)&&this.fire("zoom",i),this.fire("move",i)),this},_moveEnd:function(t){return t&&this.fire("zoomend"),this.fire("moveend")},_stop:function(){return r(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(t){Z(this._mapPane,this._getMapPanePos().subtract(t))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(t){this._targets={};var e=t?k:S;e((this._targets[h(this._container)]=this)._container,"click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",this._handleDOMEvent,this),this.options.trackResize&&e(window,"resize",this._onResize,this),b.any3d&&this.options.transform3DLimit&&(t?this.off:this.on).call(this,"moveend",this._onMoveEnd)},_onResize:function(){r(this._resizeRequest),this._resizeRequest=x(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var t=this._getMapPanePos();Math.max(Math.abs(t.x),Math.abs(t.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(t,e){for(var i,n=[],o="mouseout"===e||"mouseover"===e,s=t.target||t.srcElement,r=!1;s;){if((i=this._targets[h(s)])&&("click"===e||"preclick"===e)&&this._draggableMoved(i)){r=!0;break}if(i&&i.listens(e,!0)){if(o&&!We(s,t))break;if(n.push(i),o)break}if(s===this._container)break;s=s.parentNode}return n=n.length||r||o||!this.listens(e,!0)?n:[this]},_isClickDisabled:function(t){for(;t&&t!==this._container;){if(t._leaflet_disable_click)return!0;t=t.parentNode}},_handleDOMEvent:function(t){var e,i=t.target||t.srcElement;!this._loaded||i._leaflet_disable_events||"click"===t.type&&this._isClickDisabled(i)||("mousedown"===(e=t.type)&&Me(i),this._fireDOMEvent(t,e))},_mouseEvents:["click","dblclick","mouseover","mouseout","contextmenu"],_fireDOMEvent:function(t,e,i){"click"===t.type&&((a=l({},t)).type="preclick",this._fireDOMEvent(a,a.type,i));var n=this._findEventTargets(t,e);if(i){for(var o=[],s=0;s<i.length;s++)i[s].listens(e,!0)&&o.push(i[s]);n=o.concat(n)}if(n.length){"contextmenu"===e&&O(t);var r,a=n[0],h={originalEvent:t};for("keypress"!==t.type&&"keydown"!==t.type&&"keyup"!==t.type&&(r=a.getLatLng&&(!a._radius||a._radius<=10),h.containerPoint=r?this.latLngToContainerPoint(a.getLatLng()):this.mouseEventToContainerPoint(t),h.layerPoint=this.containerPointToLayerPoint(h.containerPoint),h.latlng=r?a.getLatLng():this.layerPointToLatLng(h.layerPoint)),s=0;s<n.length;s++)if(n[s].fire(e,h,!0),h.originalEvent._stopped||!1===n[s].options.bubblingMouseEvents&&-1!==G(this._mouseEvents,e))return}},_draggableMoved:function(t){return(t=t.dragging&&t.dragging.enabled()?t:this).dragging&&t.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var t=0,e=this._handlers.length;t<e;t++)this._handlers[t].disable()},whenReady:function(t,e){return this._loaded?t.call(e||this,{target:this}):this.on("load",t,e),this},_getMapPanePos:function(){return Pe(this._mapPane)||new p(0,0)},_moved:function(){var t=this._getMapPanePos();return t&&!t.equals([0,0])},_getTopLeftPoint:function(t,e){return(t&&void 0!==e?this._getNewPixelOrigin(t,e):this.getPixelOrigin()).subtract(this._getMapPanePos())},_getNewPixelOrigin:function(t,e){var i=this.getSize()._divideBy(2);return this.project(t,e)._subtract(i)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(t,e,i){i=this._getNewPixelOrigin(i,e);return this.project(t,e)._subtract(i)},_latLngBoundsToNewLayerBounds:function(t,e,i){i=this._getNewPixelOrigin(i,e);return _([this.project(t.getSouthWest(),e)._subtract(i),this.project(t.getNorthWest(),e)._subtract(i),this.project(t.getSouthEast(),e)._subtract(i),this.project(t.getNorthEast(),e)._subtract(i)])},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(t){return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint())},_limitCenter:function(t,e,i){var n,o;return!i||(n=this.project(t,e),o=this.getSize().divideBy(2),o=new f(n.subtract(o),n.add(o)),o=this._getBoundsOffset(o,i,e),Math.abs(o.x)<=1&&Math.abs(o.y)<=1)?t:this.unproject(n.add(o),e)},_limitOffset:function(t,e){var i;return e?(i=new f((i=this.getPixelBounds()).min.add(t),i.max.add(t)),t.add(this._getBoundsOffset(i,e))):t},_getBoundsOffset:function(t,e,i){e=_(this.project(e.getNorthEast(),i),this.project(e.getSouthWest(),i)),i=e.min.subtract(t.min),e=e.max.subtract(t.max);return new p(this._rebound(i.x,-e.x),this._rebound(i.y,-e.y))},_rebound:function(t,e){return 0<t+e?Math.round(t-e)/2:Math.max(0,Math.ceil(t))-Math.max(0,Math.floor(e))},_limitZoom:function(t){var e=this.getMinZoom(),i=this.getMaxZoom(),n=b.any3d?this.options.zoomSnap:1;return n&&(t=Math.round(t/n)*n),Math.max(e,Math.min(i,t))},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){z(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(t,e){t=this._getCenterOffset(t)._trunc();return!(!0!==(e&&e.animate)&&!this.getSize().contains(t))&&(this.panBy(t,e),!0)},_createAnimProxy:function(){var t=this._proxy=P("div","leaflet-proxy leaflet-zoom-animated");this._panes.mapPane.appendChild(t),this.on("zoomanim",function(t){var e=ue,i=this._proxy.style[e];be(this._proxy,this.project(t.center,t.zoom),this.getZoomScale(t.zoom,1)),i===this._proxy.style[e]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on("load moveend",this._animMoveEnd,this),this._on("unload",this._destroyAnimProxy,this)},_destroyAnimProxy:function(){T(this._proxy),this.off("load moveend",this._animMoveEnd,this),delete this._proxy},_animMoveEnd:function(){var t=this.getCenter(),e=this.getZoom();be(this._proxy,this.project(t,e),this.getZoomScale(e,1))},_catchTransitionEnd:function(t){this._animatingZoom&&0<=t.propertyName.indexOf("transform")&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(t,e,i){if(!this._animatingZoom){if(i=i||{},!this._zoomAnimated||!1===i.animate||this._nothingToAnimate()||Math.abs(e-this._zoom)>this.options.zoomAnimationThreshold)return!1;var n=this.getZoomScale(e),n=this._getCenterOffset(t)._divideBy(1-1/n);if(!0!==i.animate&&!this.getSize().contains(n))return!1;x(function(){this._moveStart(!0,i.noMoveStart||!1)._animateZoom(t,e,!0)},this)}return!0},_animateZoom:function(t,e,i,n){this._mapPane&&(i&&(this._animatingZoom=!0,this._animateToCenter=t,this._animateToZoom=e,M(this._mapPane,"leaflet-zoom-anim")),this.fire("zoomanim",{center:t,zoom:e,noUpdate:n}),this._tempFireZoomEvent||(this._tempFireZoomEvent=this._zoom!==this._animateToZoom),this._move(this._animateToCenter,this._animateToZoom,void 0,!0),setTimeout(a(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._mapPane&&z(this._mapPane,"leaflet-zoom-anim"),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom,void 0,!0),this._tempFireZoomEvent&&this.fire("zoom"),delete this._tempFireZoomEvent,this.fire("move"),this._moveEnd(!0))}});function Ue(t){return new B(t)}var B=et.extend({options:{position:"topright"},initialize:function(t){c(this,t)},getPosition:function(){return this.options.position},setPosition:function(t){var e=this._map;return e&&e.removeControl(this),this.options.position=t,e&&e.addControl(this),this},getContainer:function(){return this._container},addTo:function(t){this.remove(),this._map=t;var e=this._container=this.onAdd(t),i=this.getPosition(),t=t._controlCorners[i];return M(e,"leaflet-control"),-1!==i.indexOf("bottom")?t.insertBefore(e,t.firstChild):t.appendChild(e),this._map.on("unload",this.remove,this),this},remove:function(){return this._map&&(T(this._container),this.onRemove&&this.onRemove(this._map),this._map.off("unload",this.remove,this),this._map=null),this},_refocusOnMap:function(t){this._map&&t&&0<t.screenX&&0<t.screenY&&this._map.getContainer().focus()}}),Ve=(A.include({addControl:function(t){return t.addTo(this),this},removeControl:function(t){return t.remove(),this},_initControlPos:function(){var i=this._controlCorners={},n="leaflet-",o=this._controlContainer=P("div",n+"control-container",this._container);function t(t,e){i[t+e]=P("div",n+t+" "+n+e,o)}t("top","left"),t("top","right"),t("bottom","left"),t("bottom","right")},_clearControlPos:function(){for(var t in this._controlCorners)T(this._controlCorners[t]);T(this._controlContainer),delete this._controlCorners,delete this._controlContainer}}),B.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0,hideSingleBase:!1,sortLayers:!1,sortFunction:function(t,e,i,n){return i<n?-1:n<i?1:0}},initialize:function(t,e,i){for(var n in c(this,i),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1,this._preventClick=!1,t)this._addLayer(t[n],n);for(n in e)this._addLayer(e[n],n,!0)},onAdd:function(t){this._initLayout(),this._update(),(this._map=t).on("zoomend",this._checkDisabledLayers,this);for(var e=0;e<this._layers.length;e++)this._layers[e].layer.on("add remove",this._onLayerChange,this);return this._container},addTo:function(t){return B.prototype.addTo.call(this,t),this._expandIfNotCollapsed()},onRemove:function(){this._map.off("zoomend",this._checkDisabledLayers,this);for(var t=0;t<this._layers.length;t++)this._layers[t].layer.off("add remove",this._onLayerChange,this)},addBaseLayer:function(t,e){return this._addLayer(t,e),this._map?this._update():this},addOverlay:function(t,e){return this._addLayer(t,e,!0),this._map?this._update():this},removeLayer:function(t){t.off("add remove",this._onLayerChange,this);t=this._getLayer(h(t));return t&&this._layers.splice(this._layers.indexOf(t),1),this._map?this._update():this},expand:function(){M(this._container,"leaflet-control-layers-expanded"),this._section.style.height=null;var t=this._map.getSize().y-(this._container.offsetTop+50);return t<this._section.clientHeight?(M(this._section,"leaflet-control-layers-scrollbar"),this._section.style.height=t+"px"):z(this._section,"leaflet-control-layers-scrollbar"),this._checkDisabledLayers(),this},collapse:function(){return z(this._container,"leaflet-control-layers-expanded"),this},_initLayout:function(){var t="leaflet-control-layers",e=this._container=P("div",t),i=this.options.collapsed,n=(e.setAttribute("aria-haspopup",!0),Ie(e),Be(e),this._section=P("section",t+"-list")),o=(i&&(this._map.on("click",this.collapse,this),S(e,{mouseenter:this._expandSafely,mouseleave:this.collapse},this)),this._layersLink=P("a",t+"-toggle",e));o.href="#",o.title="Layers",o.setAttribute("role","button"),S(o,{keydown:function(t){13===t.keyCode&&this._expandSafely()},click:function(t){O(t),this._expandSafely()}},this),i||this.expand(),this._baseLayersList=P("div",t+"-base",n),this._separator=P("div",t+"-separator",n),this._overlaysList=P("div",t+"-overlays",n),e.appendChild(n)},_getLayer:function(t){for(var e=0;e<this._layers.length;e++)if(this._layers[e]&&h(this._layers[e].layer)===t)return this._layers[e]},_addLayer:function(t,e,i){this._map&&t.on("add remove",this._onLayerChange,this),this._layers.push({layer:t,name:e,overlay:i}),this.options.sortLayers&&this._layers.sort(a(function(t,e){return this.options.sortFunction(t.layer,e.layer,t.name,e.name)},this)),this.options.autoZIndex&&t.setZIndex&&(this._lastZIndex++,t.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(this._container){me(this._baseLayersList),me(this._overlaysList),this._layerControlInputs=[];for(var t,e,i,n=0,o=0;o<this._layers.length;o++)i=this._layers[o],this._addItem(i),e=e||i.overlay,t=t||!i.overlay,n+=i.overlay?0:1;this.options.hideSingleBase&&(this._baseLayersList.style.display=(t=t&&1<n)?"":"none"),this._separator.style.display=e&&t?"":"none"}return this},_onLayerChange:function(t){this._handlingClick||this._update();var e=this._getLayer(h(t.target)),t=e.overlay?"add"===t.type?"overlayadd":"overlayremove":"add"===t.type?"baselayerchange":null;t&&this._map.fire(t,e)},_createRadioElement:function(t,e){t='<input type="radio" class="leaflet-control-layers-selector" name="'+t+'"'+(e?' checked="checked"':"")+"/>",e=document.createElement("div");return e.innerHTML=t,e.firstChild},_addItem:function(t){var e,i=document.createElement("label"),n=this._map.hasLayer(t.layer),n=(t.overlay?((e=document.createElement("input")).type="checkbox",e.className="leaflet-control-layers-selector",e.defaultChecked=n):e=this._createRadioElement("leaflet-base-layers_"+h(this),n),this._layerControlInputs.push(e),e.layerId=h(t.layer),S(e,"click",this._onInputClick,this),document.createElement("span")),o=(n.innerHTML=" "+t.name,document.createElement("span"));return i.appendChild(o),o.appendChild(e),o.appendChild(n),(t.overlay?this._overlaysList:this._baseLayersList).appendChild(i),this._checkDisabledLayers(),i},_onInputClick:function(){if(!this._preventClick){var t,e,i=this._layerControlInputs,n=[],o=[];this._handlingClick=!0;for(var s=i.length-1;0<=s;s--)t=i[s],e=this._getLayer(t.layerId).layer,t.checked?n.push(e):t.checked||o.push(e);for(s=0;s<o.length;s++)this._map.hasLayer(o[s])&&this._map.removeLayer(o[s]);for(s=0;s<n.length;s++)this._map.hasLayer(n[s])||this._map.addLayer(n[s]);this._handlingClick=!1,this._refocusOnMap()}},_checkDisabledLayers:function(){for(var t,e,i=this._layerControlInputs,n=this._map.getZoom(),o=i.length-1;0<=o;o--)t=i[o],e=this._getLayer(t.layerId).layer,t.disabled=void 0!==e.options.minZoom&&n<e.options.minZoom||void 0!==e.options.maxZoom&&n>e.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this},_expandSafely:function(){var t=this._section,e=(this._preventClick=!0,S(t,"click",O),this.expand(),this);setTimeout(function(){k(t,"click",O),e._preventClick=!1})}})),qe=B.extend({options:{position:"topleft",zoomInText:'<span aria-hidden="true">+</span>',zoomInTitle:"Zoom in",zoomOutText:'<span aria-hidden="true">&#x2212;</span>',zoomOutTitle:"Zoom out"},onAdd:function(t){var e="leaflet-control-zoom",i=P("div",e+" leaflet-bar"),n=this.options;return this._zoomInButton=this._createButton(n.zoomInText,n.zoomInTitle,e+"-in",i,this._zoomIn),this._zoomOutButton=this._createButton(n.zoomOutText,n.zoomOutTitle,e+"-out",i,this._zoomOut),this._updateDisabled(),t.on("zoomend zoomlevelschange",this._updateDisabled,this),i},onRemove:function(t){t.off("zoomend zoomlevelschange",this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(t){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(t.shiftKey?3:1))},_zoomOut:function(t){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(t.shiftKey?3:1))},_createButton:function(t,e,i,n,o){i=P("a",i,n);return i.innerHTML=t,i.href="#",i.title=e,i.setAttribute("role","button"),i.setAttribute("aria-label",e),Ie(i),S(i,"click",Re),S(i,"click",o,this),S(i,"click",this._refocusOnMap,this),i},_updateDisabled:function(){var t=this._map,e="leaflet-disabled";z(this._zoomInButton,e),z(this._zoomOutButton,e),this._zoomInButton.setAttribute("aria-disabled","false"),this._zoomOutButton.setAttribute("aria-disabled","false"),!this._disabled&&t._zoom!==t.getMinZoom()||(M(this._zoomOutButton,e),this._zoomOutButton.setAttribute("aria-disabled","true")),!this._disabled&&t._zoom!==t.getMaxZoom()||(M(this._zoomInButton,e),this._zoomInButton.setAttribute("aria-disabled","true"))}}),Ge=(A.mergeOptions({zoomControl:!0}),A.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new qe,this.addControl(this.zoomControl))}),B.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0},onAdd:function(t){var e="leaflet-control-scale",i=P("div",e),n=this.options;return this._addScales(n,e+"-line",i),t.on(n.updateWhenIdle?"moveend":"move",this._update,this),t.whenReady(this._update,this),i},onRemove:function(t){t.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(t,e,i){t.metric&&(this._mScale=P("div",e,i)),t.imperial&&(this._iScale=P("div",e,i))},_update:function(){var t=this._map,e=t.getSize().y/2,t=t.distance(t.containerPointToLatLng([0,e]),t.containerPointToLatLng([this.options.maxWidth,e]));this._updateScales(t)},_updateScales:function(t){this.options.metric&&t&&this._updateMetric(t),this.options.imperial&&t&&this._updateImperial(t)},_updateMetric:function(t){var e=this._getRoundNum(t);this._updateScale(this._mScale,e<1e3?e+" m":e/1e3+" km",e/t)},_updateImperial:function(t){var e,i,t=3.2808399*t;5280<t?(i=this._getRoundNum(e=t/5280),this._updateScale(this._iScale,i+" mi",i/e)):(i=this._getRoundNum(t),this._updateScale(this._iScale,i+" ft",i/t))},_updateScale:function(t,e,i){t.style.width=Math.round(this.options.maxWidth*i)+"px",t.innerHTML=e},_getRoundNum:function(t){var e=Math.pow(10,(Math.floor(t)+"").length-1),t=t/e;return e*(t=10<=t?10:5<=t?5:3<=t?3:2<=t?2:1)}})),Ke=B.extend({options:{position:"bottomright",prefix:'<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">'+(b.inlineSvg?'<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg> ':"")+"Leaflet</a>"},initialize:function(t){c(this,t),this._attributions={}},onAdd:function(t){for(var e in(t.attributionControl=this)._container=P("div","leaflet-control-attribution"),Ie(this._container),t._layers)t._layers[e].getAttribution&&this.addAttribution(t._layers[e].getAttribution());return this._update(),t.on("layeradd",this._addAttribution,this),this._container},onRemove:function(t){t.off("layeradd",this._addAttribution,this)},_addAttribution:function(t){t.layer.getAttribution&&(this.addAttribution(t.layer.getAttribution()),t.layer.once("remove",function(){this.removeAttribution(t.layer.getAttribution())},this))},setPrefix:function(t){return this.options.prefix=t,this._update(),this},addAttribution:function(t){return t&&(this._attributions[t]||(this._attributions[t]=0),this._attributions[t]++,this._update()),this},removeAttribution:function(t){return t&&this._attributions[t]&&(this._attributions[t]--,this._update()),this},_update:function(){if(this._map){var t,e=[];for(t in this._attributions)this._attributions[t]&&e.push(t);var i=[];this.options.prefix&&i.push(this.options.prefix),e.length&&i.push(e.join(", ")),this._container.innerHTML=i.join(' <span aria-hidden="true">|</span> ')}}}),n=(A.mergeOptions({attributionControl:!0}),A.addInitHook(function(){this.options.attributionControl&&(new Ke).addTo(this)}),B.Layers=Ve,B.Zoom=qe,B.Scale=Ge,B.Attribution=Ke,Ue.layers=function(t,e,i){return new Ve(t,e,i)},Ue.zoom=function(t){return new qe(t)},Ue.scale=function(t){return new Ge(t)},Ue.attribution=function(t){return new Ke(t)},et.extend({initialize:function(t){this._map=t},enable:function(){return this._enabled||(this._enabled=!0,this.addHooks()),this},disable:function(){return this._enabled&&(this._enabled=!1,this.removeHooks()),this},enabled:function(){return!!this._enabled}})),ft=(n.addTo=function(t,e){return t.addHandler(e,this),this},{Events:e}),Ye=b.touch?"touchstart mousedown":"mousedown",Xe=it.extend({options:{clickTolerance:3},initialize:function(t,e,i,n){c(this,n),this._element=t,this._dragStartTarget=e||t,this._preventOutline=i},enable:function(){this._enabled||(S(this._dragStartTarget,Ye,this._onDown,this),this._enabled=!0)},disable:function(){this._enabled&&(Xe._dragging===this&&this.finishDrag(!0),k(this._dragStartTarget,Ye,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(t){var e,i;this._enabled&&(this._moved=!1,ve(this._element,"leaflet-zoom-anim")||(t.touches&&1!==t.touches.length?Xe._dragging===this&&this.finishDrag():Xe._dragging||t.shiftKey||1!==t.which&&1!==t.button&&!t.touches||((Xe._dragging=this)._preventOutline&&Me(this._element),Le(),re(),this._moving||(this.fire("down"),i=t.touches?t.touches[0]:t,e=Ce(this._element),this._startPoint=new p(i.clientX,i.clientY),this._startPos=Pe(this._element),this._parentScale=Ze(e),i="mousedown"===t.type,S(document,i?"mousemove":"touchmove",this._onMove,this),S(document,i?"mouseup":"touchend touchcancel",this._onUp,this)))))},_onMove:function(t){var e;this._enabled&&(t.touches&&1<t.touches.length?this._moved=!0:!(e=new p((e=t.touches&&1===t.touches.length?t.touches[0]:t).clientX,e.clientY)._subtract(this._startPoint)).x&&!e.y||Math.abs(e.x)+Math.abs(e.y)<this.options.clickTolerance||(e.x/=this._parentScale.x,e.y/=this._parentScale.y,O(t),this._moved||(this.fire("dragstart"),this._moved=!0,M(document.body,"leaflet-dragging"),this._lastTarget=t.target||t.srcElement,window.SVGElementInstance&&this._lastTarget instanceof window.SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),M(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(e),this._moving=!0,this._lastEvent=t,this._updatePosition()))},_updatePosition:function(){var t={originalEvent:this._lastEvent};this.fire("predrag",t),Z(this._element,this._newPos),this.fire("drag",t)},_onUp:function(){this._enabled&&this.finishDrag()},finishDrag:function(t){z(document.body,"leaflet-dragging"),this._lastTarget&&(z(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null),k(document,"mousemove touchmove",this._onMove,this),k(document,"mouseup touchend touchcancel",this._onUp,this),Te(),ae();var e=this._moved&&this._moving;this._moving=!1,Xe._dragging=!1,e&&this.fire("dragend",{noInertia:t,distance:this._newPos.distanceTo(this._startPos)})}});function Je(t,e,i){for(var n,o,s,r,a,h,l,u=[1,4,2,8],c=0,d=t.length;c<d;c++)t[c]._code=si(t[c],e);for(s=0;s<4;s++){for(h=u[s],n=[],c=0,o=(d=t.length)-1;c<d;o=c++)r=t[c],a=t[o],r._code&h?a._code&h||((l=oi(a,r,h,e,i))._code=si(l,e),n.push(l)):(a._code&h&&((l=oi(a,r,h,e,i))._code=si(l,e),n.push(l)),n.push(r));t=n}return t}function $e(t,e){var i,n,o,s,r,a,h;if(!t||0===t.length)throw new Error("latlngs not passed");I(t)||(console.warn("latlngs are not flat! Only the first ring will be used"),t=t[0]);for(var l=w([0,0]),u=g(t),c=(u.getNorthWest().distanceTo(u.getSouthWest())*u.getNorthEast().distanceTo(u.getNorthWest())<1700&&(l=Qe(t)),t.length),d=[],_=0;_<c;_++){var p=w(t[_]);d.push(e.project(w([p.lat-l.lat,p.lng-l.lng])))}for(_=r=a=h=0,i=c-1;_<c;i=_++)n=d[_],o=d[i],s=n.y*o.x-o.y*n.x,a+=(n.x+o.x)*s,h+=(n.y+o.y)*s,r+=3*s;u=0===r?d[0]:[a/r,h/r],u=e.unproject(m(u));return w([u.lat+l.lat,u.lng+l.lng])}function Qe(t){for(var e=0,i=0,n=0,o=0;o<t.length;o++){var s=w(t[o]);e+=s.lat,i+=s.lng,n++}return w([e/n,i/n])}var ti,gt={__proto__:null,clipPolygon:Je,polygonCenter:$e,centroid:Qe};function ei(t,e){if(e&&t.length){var i=t=function(t,e){for(var i=[t[0]],n=1,o=0,s=t.length;n<s;n++)(function(t,e){var i=e.x-t.x,e=e.y-t.y;return i*i+e*e})(t[n],t[o])>e&&(i.push(t[n]),o=n);o<s-1&&i.push(t[s-1]);return i}(t,e=e*e),n=i.length,o=new(typeof Uint8Array!=void 0+""?Uint8Array:Array)(n);o[0]=o[n-1]=1,function t(e,i,n,o,s){var r,a,h,l=0;for(a=o+1;a<=s-1;a++)h=ri(e[a],e[o],e[s],!0),l<h&&(r=a,l=h);n<l&&(i[r]=1,t(e,i,n,o,r),t(e,i,n,r,s))}(i,o,e,0,n-1);var s,r=[];for(s=0;s<n;s++)o[s]&&r.push(i[s]);return r}return t.slice()}function ii(t,e,i){return Math.sqrt(ri(t,e,i,!0))}function ni(t,e,i,n,o){var s,r,a,h=n?ti:si(t,i),l=si(e,i);for(ti=l;;){if(!(h|l))return[t,e];if(h&l)return!1;a=si(r=oi(t,e,s=h||l,i,o),i),s===h?(t=r,h=a):(e=r,l=a)}}function oi(t,e,i,n,o){var s,r,a=e.x-t.x,e=e.y-t.y,h=n.min,n=n.max;return 8&i?(s=t.x+a*(n.y-t.y)/e,r=n.y):4&i?(s=t.x+a*(h.y-t.y)/e,r=h.y):2&i?(s=n.x,r=t.y+e*(n.x-t.x)/a):1&i&&(s=h.x,r=t.y+e*(h.x-t.x)/a),new p(s,r,o)}function si(t,e){var i=0;return t.x<e.min.x?i|=1:t.x>e.max.x&&(i|=2),t.y<e.min.y?i|=4:t.y>e.max.y&&(i|=8),i}function ri(t,e,i,n){var o=e.x,e=e.y,s=i.x-o,r=i.y-e,a=s*s+r*r;return 0<a&&(1<(a=((t.x-o)*s+(t.y-e)*r)/a)?(o=i.x,e=i.y):0<a&&(o+=s*a,e+=r*a)),s=t.x-o,r=t.y-e,n?s*s+r*r:new p(o,e)}function I(t){return!d(t[0])||"object"!=typeof t[0][0]&&void 0!==t[0][0]}function ai(t){return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),I(t)}function hi(t,e){var i,n,o,s,r,a;if(!t||0===t.length)throw new Error("latlngs not passed");I(t)||(console.warn("latlngs are not flat! Only the first ring will be used"),t=t[0]);for(var h=w([0,0]),l=g(t),u=(l.getNorthWest().distanceTo(l.getSouthWest())*l.getNorthEast().distanceTo(l.getNorthWest())<1700&&(h=Qe(t)),t.length),c=[],d=0;d<u;d++){var _=w(t[d]);c.push(e.project(w([_.lat-h.lat,_.lng-h.lng])))}for(i=d=0;d<u-1;d++)i+=c[d].distanceTo(c[d+1])/2;if(0===i)a=c[0];else for(n=d=0;d<u-1;d++)if(o=c[d],s=c[d+1],i<(n+=r=o.distanceTo(s))){a=[s.x-(r=(n-i)/r)*(s.x-o.x),s.y-r*(s.y-o.y)];break}l=e.unproject(m(a));return w([l.lat+h.lat,l.lng+h.lng])}var vt={__proto__:null,simplify:ei,pointToSegmentDistance:ii,closestPointOnSegment:function(t,e,i){return ri(t,e,i)},clipSegment:ni,_getEdgeIntersection:oi,_getBitCode:si,_sqClosestPointOnSegment:ri,isFlat:I,_flat:ai,polylineCenter:hi},yt={project:function(t){return new p(t.lng,t.lat)},unproject:function(t){return new v(t.y,t.x)},bounds:new f([-180,-90],[180,90])},xt={R:6378137,R_MINOR:6356752.314245179,bounds:new f([-20037508.34279,-15496570.73972],[20037508.34279,18764656.23138]),project:function(t){var e=Math.PI/180,i=this.R,n=t.lat*e,o=this.R_MINOR/i,o=Math.sqrt(1-o*o),s=o*Math.sin(n),s=Math.tan(Math.PI/4-n/2)/Math.pow((1-s)/(1+s),o/2),n=-i*Math.log(Math.max(s,1e-10));return new p(t.lng*e*i,n)},unproject:function(t){for(var e,i=180/Math.PI,n=this.R,o=this.R_MINOR/n,s=Math.sqrt(1-o*o),r=Math.exp(-t.y/n),a=Math.PI/2-2*Math.atan(r),h=0,l=.1;h<15&&1e-7<Math.abs(l);h++)e=s*Math.sin(a),e=Math.pow((1-e)/(1+e),s/2),a+=l=Math.PI/2-2*Math.atan(r*e)-a;return new v(a*i,t.x*i/n)}},wt={__proto__:null,LonLat:yt,Mercator:xt,SphericalMercator:rt},Pt=l({},st,{code:"EPSG:3395",projection:xt,transformation:ht(bt=.5/(Math.PI*xt.R),.5,-bt,.5)}),li=l({},st,{code:"EPSG:4326",projection:yt,transformation:ht(1/180,1,-1/180,.5)}),Lt=l({},ot,{projection:yt,transformation:ht(1,0,-1,0),scale:function(t){return Math.pow(2,t)},zoom:function(t){return Math.log(t)/Math.LN2},distance:function(t,e){var i=e.lng-t.lng,e=e.lat-t.lat;return Math.sqrt(i*i+e*e)},infinite:!0}),o=(ot.Earth=st,ot.EPSG3395=Pt,ot.EPSG3857=lt,ot.EPSG900913=ut,ot.EPSG4326=li,ot.Simple=Lt,it.extend({options:{pane:"overlayPane",attribution:null,bubblingMouseEvents:!0},addTo:function(t){return t.addLayer(this),this},remove:function(){return this.removeFrom(this._map||this._mapToAdd)},removeFrom:function(t){return t&&t.removeLayer(this),this},getPane:function(t){return this._map.getPane(t?this.options[t]||t:this.options.pane)},addInteractiveTarget:function(t){return this._map._targets[h(t)]=this},removeInteractiveTarget:function(t){return delete this._map._targets[h(t)],this},getAttribution:function(){return this.options.attribution},_layerAdd:function(t){var e,i=t.target;i.hasLayer(this)&&(this._map=i,this._zoomAnimated=i._zoomAnimated,this.getEvents&&(e=this.getEvents(),i.on(e,this),this.once("remove",function(){i.off(e,this)},this)),this.onAdd(i),this.fire("add"),i.fire("layeradd",{layer:this}))}})),ui=(A.include({addLayer:function(t){var e;if(t._layerAdd)return e=h(t),this._layers[e]||((this._layers[e]=t)._mapToAdd=this,t.beforeAdd&&t.beforeAdd(this),this.whenReady(t._layerAdd,t)),this;throw new Error("The provided object is not a Layer.")},removeLayer:function(t){var e=h(t);return this._layers[e]&&(this._loaded&&t.onRemove(this),delete this._layers[e],this._loaded&&(this.fire("layerremove",{layer:t}),t.fire("remove")),t._map=t._mapToAdd=null),this},hasLayer:function(t){return h(t)in this._layers},eachLayer:function(t,e){for(var i in this._layers)t.call(e,this._layers[i]);return this},_addLayers:function(t){for(var e=0,i=(t=t?d(t)?t:[t]:[]).length;e<i;e++)this.addLayer(t[e])},_addZoomLimit:function(t){isNaN(t.options.maxZoom)&&isNaN(t.options.minZoom)||(this._zoomBoundLayers[h(t)]=t,this._updateZoomLevels())},_removeZoomLimit:function(t){t=h(t);this._zoomBoundLayers[t]&&(delete this._zoomBoundLayers[t],this._updateZoomLevels())},_updateZoomLevels:function(){var t,e=1/0,i=-1/0,n=this._getZoomSpan();for(t in this._zoomBoundLayers)var o=this._zoomBoundLayers[t].options,e=void 0===o.minZoom?e:Math.min(e,o.minZoom),i=void 0===o.maxZoom?i:Math.max(i,o.maxZoom);this._layersMaxZoom=i===-1/0?void 0:i,this._layersMinZoom=e===1/0?void 0:e,n!==this._getZoomSpan()&&this.fire("zoomlevelschange"),void 0===this.options.maxZoom&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),void 0===this.options.minZoom&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}}),o.extend({initialize:function(t,e){var i,n;if(c(this,e),this._layers={},t)for(i=0,n=t.length;i<n;i++)this.addLayer(t[i])},addLayer:function(t){var e=this.getLayerId(t);return this._layers[e]=t,this._map&&this._map.addLayer(t),this},removeLayer:function(t){t=t in this._layers?t:this.getLayerId(t);return this._map&&this._layers[t]&&this._map.removeLayer(this._layers[t]),delete this._layers[t],this},hasLayer:function(t){return("number"==typeof t?t:this.getLayerId(t))in this._layers},clearLayers:function(){return this.eachLayer(this.removeLayer,this)},invoke:function(t){var e,i,n=Array.prototype.slice.call(arguments,1);for(e in this._layers)(i=this._layers[e])[t]&&i[t].apply(i,n);return this},onAdd:function(t){this.eachLayer(t.addLayer,t)},onRemove:function(t){this.eachLayer(t.removeLayer,t)},eachLayer:function(t,e){for(var i in this._layers)t.call(e,this._layers[i]);return this},getLayer:function(t){return this._layers[t]},getLayers:function(){var t=[];return this.eachLayer(t.push,t),t},setZIndex:function(t){return this.invoke("setZIndex",t)},getLayerId:h})),ci=ui.extend({addLayer:function(t){return this.hasLayer(t)?this:(t.addEventParent(this),ui.prototype.addLayer.call(this,t),this.fire("layeradd",{layer:t}))},removeLayer:function(t){return this.hasLayer(t)?((t=t in this._layers?this._layers[t]:t).removeEventParent(this),ui.prototype.removeLayer.call(this,t),this.fire("layerremove",{layer:t})):this},setStyle:function(t){return this.invoke("setStyle",t)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var t,e=new s;for(t in this._layers){var i=this._layers[t];e.extend(i.getBounds?i.getBounds():i.getLatLng())}return e}}),di=et.extend({options:{popupAnchor:[0,0],tooltipAnchor:[0,0],crossOrigin:!1},initialize:function(t){c(this,t)},createIcon:function(t){return this._createIcon("icon",t)},createShadow:function(t){return this._createIcon("shadow",t)},_createIcon:function(t,e){var i=this._getIconUrl(t);if(i)return i=this._createImg(i,e&&"IMG"===e.tagName?e:null),this._setIconStyles(i,t),!this.options.crossOrigin&&""!==this.options.crossOrigin||(i.crossOrigin=!0===this.options.crossOrigin?"":this.options.crossOrigin),i;if("icon"===t)throw new Error("iconUrl not set in Icon options (see the docs).");return null},_setIconStyles:function(t,e){var i=this.options,n=i[e+"Size"],n=m(n="number"==typeof n?[n,n]:n),o=m("shadow"===e&&i.shadowAnchor||i.iconAnchor||n&&n.divideBy(2,!0));t.className="leaflet-marker-"+e+" "+(i.className||""),o&&(t.style.marginLeft=-o.x+"px",t.style.marginTop=-o.y+"px"),n&&(t.style.width=n.x+"px",t.style.height=n.y+"px")},_createImg:function(t,e){return(e=e||document.createElement("img")).src=t,e},_getIconUrl:function(t){return b.retina&&this.options[t+"RetinaUrl"]||this.options[t+"Url"]}});var _i=di.extend({options:{iconUrl:"marker-icon.png",iconRetinaUrl:"marker-icon-2x.png",shadowUrl:"marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(t){return"string"!=typeof _i.imagePath&&(_i.imagePath=this._detectIconPath()),(this.options.imagePath||_i.imagePath)+di.prototype._getIconUrl.call(this,t)},_stripUrl:function(t){function e(t,e,i){return(e=e.exec(t))&&e[i]}return(t=e(t,/^url\((['"])?(.+)\1\)$/,2))&&e(t,/^(.*)marker-icon\.png$/,1)},_detectIconPath:function(){var t=P("div","leaflet-default-icon-path",document.body),e=pe(t,"background-image")||pe(t,"backgroundImage");return document.body.removeChild(t),(e=this._stripUrl(e))?e:(t=document.querySelector('link[href$="leaflet.css"]'))?t.href.substring(0,t.href.length-"leaflet.css".length-1):""}}),pi=n.extend({initialize:function(t){this._marker=t},addHooks:function(){var t=this._marker._icon;this._draggable||(this._draggable=new Xe(t,t,!0)),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),M(t,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&z(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(t){var e=this._marker,i=e._map,n=this._marker.options.autoPanSpeed,o=this._marker.options.autoPanPadding,s=Pe(e._icon),r=i.getPixelBounds(),a=i.getPixelOrigin(),a=_(r.min._subtract(a).add(o),r.max._subtract(a).subtract(o));a.contains(s)||(o=m((Math.max(a.max.x,s.x)-a.max.x)/(r.max.x-a.max.x)-(Math.min(a.min.x,s.x)-a.min.x)/(r.min.x-a.min.x),(Math.max(a.max.y,s.y)-a.max.y)/(r.max.y-a.max.y)-(Math.min(a.min.y,s.y)-a.min.y)/(r.min.y-a.min.y)).multiplyBy(n),i.panBy(o,{animate:!1}),this._draggable._newPos._add(o),this._draggable._startPos._add(o),Z(e._icon,this._draggable._newPos),this._onDrag(t),this._panRequest=x(this._adjustPan.bind(this,t)))},_onDragStart:function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup&&this._marker.closePopup(),this._marker.fire("movestart").fire("dragstart")},_onPreDrag:function(t){this._marker.options.autoPan&&(r(this._panRequest),this._panRequest=x(this._adjustPan.bind(this,t)))},_onDrag:function(t){var e=this._marker,i=e._shadow,n=Pe(e._icon),o=e._map.layerPointToLatLng(n);i&&Z(i,n),e._latlng=o,t.latlng=o,t.oldLatLng=this._oldLatLng,e.fire("move",t).fire("drag",t)},_onDragEnd:function(t){r(this._panRequest),delete this._oldLatLng,this._marker.fire("moveend").fire("dragend",t)}}),mi=o.extend({options:{icon:new _i,interactive:!0,keyboard:!0,title:"",alt:"Marker",zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:"markerPane",shadowPane:"shadowPane",bubblingMouseEvents:!1,autoPanOnFocus:!0,draggable:!1,autoPan:!1,autoPanPadding:[50,50],autoPanSpeed:10},initialize:function(t,e){c(this,e),this._latlng=w(t)},onAdd:function(t){this._zoomAnimated=this._zoomAnimated&&t.options.markerZoomAnimation,this._zoomAnimated&&t.on("zoomanim",this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(t){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&t.off("zoomanim",this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},getLatLng:function(){return this._latlng},setLatLng:function(t){var e=this._latlng;return this._latlng=w(t),this.update(),this.fire("move",{oldLatLng:e,latlng:this._latlng})},setZIndexOffset:function(t){return this.options.zIndexOffset=t,this.update()},getIcon:function(){return this.options.icon},setIcon:function(t){return this.options.icon=t,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){var t;return this._icon&&this._map&&(t=this._map.latLngToLayerPoint(this._latlng).round(),this._setPos(t)),this},_initIcon:function(){var t=this.options,e="leaflet-zoom-"+(this._zoomAnimated?"animated":"hide"),i=t.icon.createIcon(this._icon),n=!1,i=(i!==this._icon&&(this._icon&&this._removeIcon(),n=!0,t.title&&(i.title=t.title),"IMG"===i.tagName&&(i.alt=t.alt||"")),M(i,e),t.keyboard&&(i.tabIndex="0",i.setAttribute("role","button")),this._icon=i,t.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&S(i,"focus",this._panOnFocus,this),t.icon.createShadow(this._shadow)),o=!1;i!==this._shadow&&(this._removeShadow(),o=!0),i&&(M(i,e),i.alt=""),this._shadow=i,t.opacity<1&&this._updateOpacity(),n&&this.getPane().appendChild(this._icon),this._initInteraction(),i&&o&&this.getPane(t.shadowPane).appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&k(this._icon,"focus",this._panOnFocus,this),T(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&T(this._shadow),this._shadow=null},_setPos:function(t){this._icon&&Z(this._icon,t),this._shadow&&Z(this._shadow,t),this._zIndex=t.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(t){this._icon&&(this._icon.style.zIndex=this._zIndex+t)},_animateZoom:function(t){t=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center).round();this._setPos(t)},_initInteraction:function(){var t;this.options.interactive&&(M(this._icon,"leaflet-interactive"),this.addInteractiveTarget(this._icon),pi&&(t=this.options.draggable,this.dragging&&(t=this.dragging.enabled(),this.dragging.disable()),this.dragging=new pi(this),t&&this.dragging.enable()))},setOpacity:function(t){return this.options.opacity=t,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var t=this.options.opacity;this._icon&&C(this._icon,t),this._shadow&&C(this._shadow,t)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_panOnFocus:function(){var t,e,i=this._map;i&&(t=(e=this.options.icon.options).iconSize?m(e.iconSize):m(0,0),e=e.iconAnchor?m(e.iconAnchor):m(0,0),i.panInside(this._latlng,{paddingTopLeft:e,paddingBottomRight:t.subtract(e)}))},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}});var fi=o.extend({options:{stroke:!0,color:"#3388ff",weight:3,opacity:1,lineCap:"round",lineJoin:"round",dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:"evenodd",interactive:!0,bubblingMouseEvents:!0},beforeAdd:function(t){this._renderer=t.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},redraw:function(){return this._map&&this._renderer._updatePath(this),this},setStyle:function(t){return c(this,t),this._renderer&&(this._renderer._updateStyle(this),this.options.stroke&&t&&Object.prototype.hasOwnProperty.call(t,"weight")&&this._updateBounds()),this},bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){this._project(),this._update()},_clickTolerance:function(){return(this.options.stroke?this.options.weight/2:0)+(this._renderer.options.tolerance||0)}}),gi=fi.extend({options:{fill:!0,radius:10},initialize:function(t,e){c(this,e),this._latlng=w(t),this._radius=this.options.radius},setLatLng:function(t){var e=this._latlng;return this._latlng=w(t),this.redraw(),this.fire("move",{oldLatLng:e,latlng:this._latlng})},getLatLng:function(){return this._latlng},setRadius:function(t){return this.options.radius=this._radius=t,this.redraw()},getRadius:function(){return this._radius},setStyle:function(t){var e=t&&t.radius||this._radius;return fi.prototype.setStyle.call(this,t),this.setRadius(e),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var t=this._radius,e=this._radiusY||t,i=this._clickTolerance(),t=[t+i,e+i];this._pxBounds=new f(this._point.subtract(t),this._point.add(t))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},_containsPoint:function(t){return t.distanceTo(this._point)<=this._radius+this._clickTolerance()}});var vi=gi.extend({initialize:function(t,e,i){if(c(this,e="number"==typeof e?l({},i,{radius:e}):e),this._latlng=w(t),isNaN(this.options.radius))throw new Error("Circle radius cannot be NaN");this._mRadius=this.options.radius},setRadius:function(t){return this._mRadius=t,this.redraw()},getRadius:function(){return this._mRadius},getBounds:function(){var t=[this._radius,this._radiusY||this._radius];return new s(this._map.layerPointToLatLng(this._point.subtract(t)),this._map.layerPointToLatLng(this._point.add(t)))},setStyle:fi.prototype.setStyle,_project:function(){var t,e,i,n,o,s=this._latlng.lng,r=this._latlng.lat,a=this._map,h=a.options.crs;h.distance===st.distance?(n=Math.PI/180,o=this._mRadius/st.R/n,t=a.project([r+o,s]),e=a.project([r-o,s]),e=t.add(e).divideBy(2),i=a.unproject(e).lat,n=Math.acos((Math.cos(o*n)-Math.sin(r*n)*Math.sin(i*n))/(Math.cos(r*n)*Math.cos(i*n)))/n,!isNaN(n)&&0!==n||(n=o/Math.cos(Math.PI/180*r)),this._point=e.subtract(a.getPixelOrigin()),this._radius=isNaN(n)?0:e.x-a.project([i,s-n]).x,this._radiusY=e.y-t.y):(o=h.unproject(h.project(this._latlng).subtract([this._mRadius,0])),this._point=a.latLngToLayerPoint(this._latlng),this._radius=this._point.x-a.latLngToLayerPoint(o).x),this._updateBounds()}});var yi=fi.extend({options:{smoothFactor:1,noClip:!1},initialize:function(t,e){c(this,e),this._setLatLngs(t)},getLatLngs:function(){return this._latlngs},setLatLngs:function(t){return this._setLatLngs(t),this.redraw()},isEmpty:function(){return!this._latlngs.length},closestLayerPoint:function(t){for(var e=1/0,i=null,n=ri,o=0,s=this._parts.length;o<s;o++)for(var r=this._parts[o],a=1,h=r.length;a<h;a++){var l,u,c=n(t,l=r[a-1],u=r[a],!0);c<e&&(e=c,i=n(t,l,u))}return i&&(i.distance=Math.sqrt(e)),i},getCenter:function(){if(this._map)return hi(this._defaultShape(),this._map.options.crs);throw new Error("Must add layer to map before using getCenter()")},getBounds:function(){return this._bounds},addLatLng:function(t,e){return e=e||this._defaultShape(),t=w(t),e.push(t),this._bounds.extend(t),this.redraw()},_setLatLngs:function(t){this._bounds=new s,this._latlngs=this._convertLatLngs(t)},_defaultShape:function(){return I(this._latlngs)?this._latlngs:this._latlngs[0]},_convertLatLngs:function(t){for(var e=[],i=I(t),n=0,o=t.length;n<o;n++)i?(e[n]=w(t[n]),this._bounds.extend(e[n])):e[n]=this._convertLatLngs(t[n]);return e},_project:function(){var t=new f;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,t),this._bounds.isValid()&&t.isValid()&&(this._rawPxBounds=t,this._updateBounds())},_updateBounds:function(){var t=this._clickTolerance(),t=new p(t,t);this._rawPxBounds&&(this._pxBounds=new f([this._rawPxBounds.min.subtract(t),this._rawPxBounds.max.add(t)]))},_projectLatlngs:function(t,e,i){var n,o,s=t[0]instanceof v,r=t.length;if(s){for(o=[],n=0;n<r;n++)o[n]=this._map.latLngToLayerPoint(t[n]),i.extend(o[n]);e.push(o)}else for(n=0;n<r;n++)this._projectLatlngs(t[n],e,i)},_clipPoints:function(){var t=this._renderer._bounds;if(this._parts=[],this._pxBounds&&this._pxBounds.intersects(t))if(this.options.noClip)this._parts=this._rings;else for(var e,i,n,o,s=this._parts,r=0,a=0,h=this._rings.length;r<h;r++)for(e=0,i=(o=this._rings[r]).length;e<i-1;e++)(n=ni(o[e],o[e+1],t,e,!0))&&(s[a]=s[a]||[],s[a].push(n[0]),n[1]===o[e+1]&&e!==i-2||(s[a].push(n[1]),a++))},_simplifyPoints:function(){for(var t=this._parts,e=this.options.smoothFactor,i=0,n=t.length;i<n;i++)t[i]=ei(t[i],e)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},_containsPoint:function(t,e){var i,n,o,s,r,a,h=this._clickTolerance();if(this._pxBounds&&this._pxBounds.contains(t))for(i=0,s=this._parts.length;i<s;i++)for(n=0,o=(r=(a=this._parts[i]).length)-1;n<r;o=n++)if((e||0!==n)&&ii(t,a[o],a[n])<=h)return!0;return!1}});yi._flat=ai;var xi=yi.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){if(this._map)return $e(this._defaultShape(),this._map.options.crs);throw new Error("Must add layer to map before using getCenter()")},_convertLatLngs:function(t){var t=yi.prototype._convertLatLngs.call(this,t),e=t.length;return 2<=e&&t[0]instanceof v&&t[0].equals(t[e-1])&&t.pop(),t},_setLatLngs:function(t){yi.prototype._setLatLngs.call(this,t),I(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return(I(this._latlngs[0])?this._latlngs:this._latlngs[0])[0]},_clipPoints:function(){var t=this._renderer._bounds,e=this.options.weight,e=new p(e,e),t=new f(t.min.subtract(e),t.max.add(e));if(this._parts=[],this._pxBounds&&this._pxBounds.intersects(t))if(this.options.noClip)this._parts=this._rings;else for(var i,n=0,o=this._rings.length;n<o;n++)(i=Je(this._rings[n],t,!0)).length&&this._parts.push(i)},_updatePath:function(){this._renderer._updatePoly(this,!0)},_containsPoint:function(t){var e,i,n,o,s,r,a,h,l=!1;if(!this._pxBounds||!this._pxBounds.contains(t))return!1;for(o=0,a=this._parts.length;o<a;o++)for(s=0,r=(h=(e=this._parts[o]).length)-1;s<h;r=s++)i=e[s],n=e[r],i.y>t.y!=n.y>t.y&&t.x<(n.x-i.x)*(t.y-i.y)/(n.y-i.y)+i.x&&(l=!l);return l||yi.prototype._containsPoint.call(this,t,!0)}});var wi=ci.extend({initialize:function(t,e){c(this,e),this._layers={},t&&this.addData(t)},addData:function(t){var e,i,n,o=d(t)?t:t.features;if(o){for(e=0,i=o.length;e<i;e++)((n=o[e]).geometries||n.geometry||n.features||n.coordinates)&&this.addData(n);return this}var s,r=this.options;return(!r.filter||r.filter(t))&&(s=bi(t,r))?(s.feature=Zi(t),s.defaultOptions=s.options,this.resetStyle(s),r.onEachFeature&&r.onEachFeature(t,s),this.addLayer(s)):this},resetStyle:function(t){return void 0===t?this.eachLayer(this.resetStyle,this):(t.options=l({},t.defaultOptions),this._setLayerStyle(t,this.options.style),this)},setStyle:function(e){return this.eachLayer(function(t){this._setLayerStyle(t,e)},this)},_setLayerStyle:function(t,e){t.setStyle&&("function"==typeof e&&(e=e(t.feature)),t.setStyle(e))}});function bi(t,e){var i,n,o,s,r="Feature"===t.type?t.geometry:t,a=r?r.coordinates:null,h=[],l=e&&e.pointToLayer,u=e&&e.coordsToLatLng||Li;if(!a&&!r)return null;switch(r.type){case"Point":return Pi(l,t,i=u(a),e);case"MultiPoint":for(o=0,s=a.length;o<s;o++)i=u(a[o]),h.push(Pi(l,t,i,e));return new ci(h);case"LineString":case"MultiLineString":return n=Ti(a,"LineString"===r.type?0:1,u),new yi(n,e);case"Polygon":case"MultiPolygon":return n=Ti(a,"Polygon"===r.type?1:2,u),new xi(n,e);case"GeometryCollection":for(o=0,s=r.geometries.length;o<s;o++){var c=bi({geometry:r.geometries[o],type:"Feature",properties:t.properties},e);c&&h.push(c)}return new ci(h);case"FeatureCollection":for(o=0,s=r.features.length;o<s;o++){var d=bi(r.features[o],e);d&&h.push(d)}return new ci(h);default:throw new Error("Invalid GeoJSON object.")}}function Pi(t,e,i,n){return t?t(e,i):new mi(i,n&&n.markersInheritOptions&&n)}function Li(t){return new v(t[1],t[0],t[2])}function Ti(t,e,i){for(var n,o=[],s=0,r=t.length;s<r;s++)n=e?Ti(t[s],e-1,i):(i||Li)(t[s]),o.push(n);return o}function Mi(t,e){return void 0!==(t=w(t)).alt?[i(t.lng,e),i(t.lat,e),i(t.alt,e)]:[i(t.lng,e),i(t.lat,e)]}function zi(t,e,i,n){for(var o=[],s=0,r=t.length;s<r;s++)o.push(e?zi(t[s],I(t[s])?0:e-1,i,n):Mi(t[s],n));return!e&&i&&0<o.length&&o.push(o[0].slice()),o}function Ci(t,e){return t.feature?l({},t.feature,{geometry:e}):Zi(e)}function Zi(t){return"Feature"===t.type||"FeatureCollection"===t.type?t:{type:"Feature",properties:{},geometry:t}}Tt={toGeoJSON:function(t){return Ci(this,{type:"Point",coordinates:Mi(this.getLatLng(),t)})}};function Si(t,e){return new wi(t,e)}mi.include(Tt),vi.include(Tt),gi.include(Tt),yi.include({toGeoJSON:function(t){var e=!I(this._latlngs);return Ci(this,{type:(e?"Multi":"")+"LineString",coordinates:zi(this._latlngs,e?1:0,!1,t)})}}),xi.include({toGeoJSON:function(t){var e=!I(this._latlngs),i=e&&!I(this._latlngs[0]),t=zi(this._latlngs,i?2:e?1:0,!0,t);return Ci(this,{type:(i?"Multi":"")+"Polygon",coordinates:t=e?t:[t]})}}),ui.include({toMultiPoint:function(e){var i=[];return this.eachLayer(function(t){i.push(t.toGeoJSON(e).geometry.coordinates)}),Ci(this,{type:"MultiPoint",coordinates:i})},toGeoJSON:function(e){var i,n,t=this.feature&&this.feature.geometry&&this.feature.geometry.type;return"MultiPoint"===t?this.toMultiPoint(e):(i="GeometryCollection"===t,n=[],this.eachLayer(function(t){t.toGeoJSON&&(t=t.toGeoJSON(e),i?n.push(t.geometry):"FeatureCollection"===(t=Zi(t)).type?n.push.apply(n,t.features):n.push(t))}),i?Ci(this,{geometries:n,type:"GeometryCollection"}):{type:"FeatureCollection",features:n})}});var Mt=Si,Ei=o.extend({options:{opacity:1,alt:"",interactive:!1,crossOrigin:!1,errorOverlayUrl:"",zIndex:1,className:""},initialize:function(t,e,i){this._url=t,this._bounds=g(e),c(this,i)},onAdd:function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(M(this._image,"leaflet-interactive"),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){T(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},setOpacity:function(t){return this.options.opacity=t,this._image&&this._updateOpacity(),this},setStyle:function(t){return t.opacity&&this.setOpacity(t.opacity),this},bringToFront:function(){return this._map&&fe(this._image),this},bringToBack:function(){return this._map&&ge(this._image),this},setUrl:function(t){return this._url=t,this._image&&(this._image.src=t),this},setBounds:function(t){return this._bounds=g(t),this._map&&this._reset(),this},getEvents:function(){var t={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},setZIndex:function(t){return this.options.zIndex=t,this._updateZIndex(),this},getBounds:function(){return this._bounds},getElement:function(){return this._image},_initImage:function(){var t="IMG"===this._url.tagName,e=this._image=t?this._url:P("img");M(e,"leaflet-image-layer"),this._zoomAnimated&&M(e,"leaflet-zoom-animated"),this.options.className&&M(e,this.options.className),e.onselectstart=u,e.onmousemove=u,e.onload=a(this.fire,this,"load"),e.onerror=a(this._overlayOnError,this,"error"),!this.options.crossOrigin&&""!==this.options.crossOrigin||(e.crossOrigin=!0===this.options.crossOrigin?"":this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),t?this._url=e.src:(e.src=this._url,e.alt=this.options.alt)},_animateZoom:function(t){var e=this._map.getZoomScale(t.zoom),t=this._map._latLngBoundsToNewLayerBounds(this._bounds,t.zoom,t.center).min;be(this._image,t,e)},_reset:function(){var t=this._image,e=new f(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),i=e.getSize();Z(t,e.min),t.style.width=i.x+"px",t.style.height=i.y+"px"},_updateOpacity:function(){C(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&void 0!==this.options.zIndex&&null!==this.options.zIndex&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){this.fire("error");var t=this.options.errorOverlayUrl;t&&this._url!==t&&(this._url=t,this._image.src=t)},getCenter:function(){return this._bounds.getCenter()}}),ki=Ei.extend({options:{autoplay:!0,loop:!0,keepAspectRatio:!0,muted:!1,playsInline:!0},_initImage:function(){var t="VIDEO"===this._url.tagName,e=this._image=t?this._url:P("video");if(M(e,"leaflet-image-layer"),this._zoomAnimated&&M(e,"leaflet-zoom-animated"),this.options.className&&M(e,this.options.className),e.onselectstart=u,e.onmousemove=u,e.onloadeddata=a(this.fire,this,"load"),t){for(var i=e.getElementsByTagName("source"),n=[],o=0;o<i.length;o++)n.push(i[o].src);this._url=0<i.length?n:[e.src]}else{d(this._url)||(this._url=[this._url]),!this.options.keepAspectRatio&&Object.prototype.hasOwnProperty.call(e.style,"objectFit")&&(e.style.objectFit="fill"),e.autoplay=!!this.options.autoplay,e.loop=!!this.options.loop,e.muted=!!this.options.muted,e.playsInline=!!this.options.playsInline;for(var s=0;s<this._url.length;s++){var r=P("source");r.src=this._url[s],e.appendChild(r)}}}});var Oi=Ei.extend({_initImage:function(){var t=this._image=this._url;M(t,"leaflet-image-layer"),this._zoomAnimated&&M(t,"leaflet-zoom-animated"),this.options.className&&M(t,this.options.className),t.onselectstart=u,t.onmousemove=u}});var Ai=o.extend({options:{interactive:!1,offset:[0,0],className:"",pane:void 0,content:""},initialize:function(t,e){t&&(t instanceof v||d(t))?(this._latlng=w(t),c(this,e)):(c(this,t),this._source=e),this.options.content&&(this._content=this.options.content)},openOn:function(t){return(t=arguments.length?t:this._source._map).hasLayer(this)||t.addLayer(this),this},close:function(){return this._map&&this._map.removeLayer(this),this},toggle:function(t){return this._map?this.close():(arguments.length?this._source=t:t=this._source,this._prepareOpen(),this.openOn(t._map)),this},onAdd:function(t){this._zoomAnimated=t._zoomAnimated,this._container||this._initLayout(),t._fadeAnimated&&C(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),t._fadeAnimated&&C(this._container,1),this.bringToFront(),this.options.interactive&&(M(this._container,"leaflet-interactive"),this.addInteractiveTarget(this._container))},onRemove:function(t){t._fadeAnimated?(C(this._container,0),this._removeTimeout=setTimeout(a(T,void 0,this._container),200)):T(this._container),this.options.interactive&&(z(this._container,"leaflet-interactive"),this.removeInteractiveTarget(this._container))},getLatLng:function(){return this._latlng},setLatLng:function(t){return this._latlng=w(t),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(t){return this._content=t,this.update(),this},getElement:function(){return this._container},update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},getEvents:function(){var t={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},isOpen:function(){return!!this._map&&this._map.hasLayer(this)},bringToFront:function(){return this._map&&fe(this._container),this},bringToBack:function(){return this._map&&ge(this._container),this},_prepareOpen:function(t){if(!(i=this._source)._map)return!1;if(i instanceof ci){var e,i=null,n=this._source._layers;for(e in n)if(n[e]._map){i=n[e];break}if(!i)return!1;this._source=i}if(!t)if(i.getCenter)t=i.getCenter();else if(i.getLatLng)t=i.getLatLng();else{if(!i.getBounds)throw new Error("Unable to get source layer LatLng.");t=i.getBounds().getCenter()}return this.setLatLng(t),this._map&&this.update(),!0},_updateContent:function(){if(this._content){var t=this._contentNode,e="function"==typeof this._content?this._content(this._source||this):this._content;if("string"==typeof e)t.innerHTML=e;else{for(;t.hasChildNodes();)t.removeChild(t.firstChild);t.appendChild(e)}this.fire("contentupdate")}},_updatePosition:function(){var t,e,i;this._map&&(e=this._map.latLngToLayerPoint(this._latlng),t=m(this.options.offset),i=this._getAnchor(),this._zoomAnimated?Z(this._container,e.add(i)):t=t.add(e).add(i),e=this._containerBottom=-t.y,i=this._containerLeft=-Math.round(this._containerWidth/2)+t.x,this._container.style.bottom=e+"px",this._container.style.left=i+"px")},_getAnchor:function(){return[0,0]}}),Bi=(A.include({_initOverlay:function(t,e,i,n){var o=e;return o instanceof t||(o=new t(n).setContent(e)),i&&o.setLatLng(i),o}}),o.include({_initOverlay:function(t,e,i,n){var o=i;return o instanceof t?(c(o,n),o._source=this):(o=e&&!n?e:new t(n,this)).setContent(i),o}}),Ai.extend({options:{pane:"popupPane",offset:[0,7],maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,closeOnEscapeKey:!0,className:""},openOn:function(t){return!(t=arguments.length?t:this._source._map).hasLayer(this)&&t._popup&&t._popup.options.autoClose&&t.removeLayer(t._popup),t._popup=this,Ai.prototype.openOn.call(this,t)},onAdd:function(t){Ai.prototype.onAdd.call(this,t),t.fire("popupopen",{popup:this}),this._source&&(this._source.fire("popupopen",{popup:this},!0),this._source instanceof fi||this._source.on("preclick",Ae))},onRemove:function(t){Ai.prototype.onRemove.call(this,t),t.fire("popupclose",{popup:this}),this._source&&(this._source.fire("popupclose",{popup:this},!0),this._source instanceof fi||this._source.off("preclick",Ae))},getEvents:function(){var t=Ai.prototype.getEvents.call(this);return(void 0!==this.options.closeOnClick?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(t.preclick=this.close),this.options.keepInView&&(t.moveend=this._adjustPan),t},_initLayout:function(){var t="leaflet-popup",e=this._container=P("div",t+" "+(this.options.className||"")+" leaflet-zoom-animated"),i=this._wrapper=P("div",t+"-content-wrapper",e);this._contentNode=P("div",t+"-content",i),Ie(e),Be(this._contentNode),S(e,"contextmenu",Ae),this._tipContainer=P("div",t+"-tip-container",e),this._tip=P("div",t+"-tip",this._tipContainer),this.options.closeButton&&((i=this._closeButton=P("a",t+"-close-button",e)).setAttribute("role","button"),i.setAttribute("aria-label","Close popup"),i.href="#close",i.innerHTML='<span aria-hidden="true">&#215;</span>',S(i,"click",function(t){O(t),this.close()},this))},_updateLayout:function(){var t=this._contentNode,e=t.style,i=(e.width="",e.whiteSpace="nowrap",t.offsetWidth),i=Math.min(i,this.options.maxWidth),i=(i=Math.max(i,this.options.minWidth),e.width=i+1+"px",e.whiteSpace="",e.height="",t.offsetHeight),n=this.options.maxHeight,o="leaflet-popup-scrolled";(n&&n<i?(e.height=n+"px",M):z)(t,o),this._containerWidth=this._container.offsetWidth},_animateZoom:function(t){var t=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center),e=this._getAnchor();Z(this._container,t.add(e))},_adjustPan:function(){var t,e,i,n,o,s,r,a;this.options.autoPan&&(this._map._panAnim&&this._map._panAnim.stop(),this._autopanning?this._autopanning=!1:(t=this._map,e=parseInt(pe(this._container,"marginBottom"),10)||0,e=this._container.offsetHeight+e,a=this._containerWidth,(i=new p(this._containerLeft,-e-this._containerBottom))._add(Pe(this._container)),i=t.layerPointToContainerPoint(i),o=m(this.options.autoPanPadding),n=m(this.options.autoPanPaddingTopLeft||o),o=m(this.options.autoPanPaddingBottomRight||o),s=t.getSize(),r=0,i.x+a+o.x>s.x&&(r=i.x+a-s.x+o.x),i.x-r-n.x<(a=0)&&(r=i.x-n.x),i.y+e+o.y>s.y&&(a=i.y+e-s.y+o.y),i.y-a-n.y<0&&(a=i.y-n.y),(r||a)&&(this.options.keepInView&&(this._autopanning=!0),t.fire("autopanstart").panBy([r,a]))))},_getAnchor:function(){return m(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}})),Ii=(A.mergeOptions({closePopupOnClick:!0}),A.include({openPopup:function(t,e,i){return this._initOverlay(Bi,t,e,i).openOn(this),this},closePopup:function(t){return(t=arguments.length?t:this._popup)&&t.close(),this}}),o.include({bindPopup:function(t,e){return this._popup=this._initOverlay(Bi,this._popup,t,e),this._popupHandlersAdded||(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,this._popup=null),this},openPopup:function(t){return this._popup&&(this instanceof ci||(this._popup._source=this),this._popup._prepareOpen(t||this._latlng)&&this._popup.openOn(this._map)),this},closePopup:function(){return this._popup&&this._popup.close(),this},togglePopup:function(){return this._popup&&this._popup.toggle(this),this},isPopupOpen:function(){return!!this._popup&&this._popup.isOpen()},setPopupContent:function(t){return this._popup&&this._popup.setContent(t),this},getPopup:function(){return this._popup},_openPopup:function(t){var e;this._popup&&this._map&&(Re(t),e=t.layer||t.target,this._popup._source!==e||e instanceof fi?(this._popup._source=e,this.openPopup(t.latlng)):this._map.hasLayer(this._popup)?this.closePopup():this.openPopup(t.latlng))},_movePopup:function(t){this._popup.setLatLng(t.latlng)},_onKeyPress:function(t){13===t.originalEvent.keyCode&&this._openPopup(t)}}),Ai.extend({options:{pane:"tooltipPane",offset:[0,0],direction:"auto",permanent:!1,sticky:!1,opacity:.9},onAdd:function(t){Ai.prototype.onAdd.call(this,t),this.setOpacity(this.options.opacity),t.fire("tooltipopen",{tooltip:this}),this._source&&(this.addEventParent(this._source),this._source.fire("tooltipopen",{tooltip:this},!0))},onRemove:function(t){Ai.prototype.onRemove.call(this,t),t.fire("tooltipclose",{tooltip:this}),this._source&&(this.removeEventParent(this._source),this._source.fire("tooltipclose",{tooltip:this},!0))},getEvents:function(){var t=Ai.prototype.getEvents.call(this);return this.options.permanent||(t.preclick=this.close),t},_initLayout:function(){var t="leaflet-tooltip "+(this.options.className||"")+" leaflet-zoom-"+(this._zoomAnimated?"animated":"hide");this._contentNode=this._container=P("div",t),this._container.setAttribute("role","tooltip"),this._container.setAttribute("id","leaflet-tooltip-"+h(this))},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(t){var e,i=this._map,n=this._container,o=i.latLngToContainerPoint(i.getCenter()),i=i.layerPointToContainerPoint(t),s=this.options.direction,r=n.offsetWidth,a=n.offsetHeight,h=m(this.options.offset),l=this._getAnchor(),i="top"===s?(e=r/2,a):"bottom"===s?(e=r/2,0):(e="center"===s?r/2:"right"===s?0:"left"===s?r:i.x<o.x?(s="right",0):(s="left",r+2*(h.x+l.x)),a/2);t=t.subtract(m(e,i,!0)).add(h).add(l),z(n,"leaflet-tooltip-right"),z(n,"leaflet-tooltip-left"),z(n,"leaflet-tooltip-top"),z(n,"leaflet-tooltip-bottom"),M(n,"leaflet-tooltip-"+s),Z(n,t)},_updatePosition:function(){var t=this._map.latLngToLayerPoint(this._latlng);this._setPosition(t)},setOpacity:function(t){this.options.opacity=t,this._container&&C(this._container,t)},_animateZoom:function(t){t=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center);this._setPosition(t)},_getAnchor:function(){return m(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}})),Ri=(A.include({openTooltip:function(t,e,i){return this._initOverlay(Ii,t,e,i).openOn(this),this},closeTooltip:function(t){return t.close(),this}}),o.include({bindTooltip:function(t,e){return this._tooltip&&this.isTooltipOpen()&&this.unbindTooltip(),this._tooltip=this._initOverlay(Ii,this._tooltip,t,e),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},unbindTooltip:function(){return this._tooltip&&(this._initTooltipInteractions(!0),this.closeTooltip(),this._tooltip=null),this},_initTooltipInteractions:function(t){var e,i;!t&&this._tooltipHandlersAdded||(e=t?"off":"on",i={remove:this.closeTooltip,move:this._moveTooltip},this._tooltip.options.permanent?i.add=this._openTooltip:(i.mouseover=this._openTooltip,i.mouseout=this.closeTooltip,i.click=this._openTooltip,this._map?this._addFocusListeners():i.add=this._addFocusListeners),this._tooltip.options.sticky&&(i.mousemove=this._moveTooltip),this[e](i),this._tooltipHandlersAdded=!t)},openTooltip:function(t){return this._tooltip&&(this instanceof ci||(this._tooltip._source=this),this._tooltip._prepareOpen(t)&&(this._tooltip.openOn(this._map),this.getElement?this._setAriaDescribedByOnLayer(this):this.eachLayer&&this.eachLayer(this._setAriaDescribedByOnLayer,this))),this},closeTooltip:function(){if(this._tooltip)return this._tooltip.close()},toggleTooltip:function(){return this._tooltip&&this._tooltip.toggle(this),this},isTooltipOpen:function(){return this._tooltip.isOpen()},setTooltipContent:function(t){return this._tooltip&&this._tooltip.setContent(t),this},getTooltip:function(){return this._tooltip},_addFocusListeners:function(){this.getElement?this._addFocusListenersOnLayer(this):this.eachLayer&&this.eachLayer(this._addFocusListenersOnLayer,this)},_addFocusListenersOnLayer:function(t){var e="function"==typeof t.getElement&&t.getElement();e&&(S(e,"focus",function(){this._tooltip._source=t,this.openTooltip()},this),S(e,"blur",this.closeTooltip,this))},_setAriaDescribedByOnLayer:function(t){t="function"==typeof t.getElement&&t.getElement();t&&t.setAttribute("aria-describedby",this._tooltip._container.id)},_openTooltip:function(t){var e;this._tooltip&&this._map&&(this._map.dragging&&this._map.dragging.moving()&&!this._openOnceFlag?(this._openOnceFlag=!0,(e=this)._map.once("moveend",function(){e._openOnceFlag=!1,e._openTooltip(t)})):(this._tooltip._source=t.layer||t.target,this.openTooltip(this._tooltip.options.sticky?t.latlng:void 0)))},_moveTooltip:function(t){var e=t.latlng;this._tooltip.options.sticky&&t.originalEvent&&(t=this._map.mouseEventToContainerPoint(t.originalEvent),t=this._map.containerPointToLayerPoint(t),e=this._map.layerPointToLatLng(t)),this._tooltip.setLatLng(e)}}),di.extend({options:{iconSize:[12,12],html:!1,bgPos:null,className:"leaflet-div-icon"},createIcon:function(t){var t=t&&"DIV"===t.tagName?t:document.createElement("div"),e=this.options;return e.html instanceof Element?(me(t),t.appendChild(e.html)):t.innerHTML=!1!==e.html?e.html:"",e.bgPos&&(e=m(e.bgPos),t.style.backgroundPosition=-e.x+"px "+-e.y+"px"),this._setIconStyles(t,"icon"),t},createShadow:function(){return null}}));di.Default=_i;var Ni=o.extend({options:{tileSize:256,opacity:1,updateWhenIdle:b.mobile,updateWhenZooming:!0,updateInterval:200,zIndex:1,bounds:null,minZoom:0,maxZoom:void 0,maxNativeZoom:void 0,minNativeZoom:void 0,noWrap:!1,pane:"tilePane",className:"",keepBuffer:2},initialize:function(t){c(this,t)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView()},beforeAdd:function(t){t._addZoomLimit(this)},onRemove:function(t){this._removeAllTiles(),T(this._container),t._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},bringToFront:function(){return this._map&&(fe(this._container),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this._map&&(ge(this._container),this._setAutoZIndex(Math.min)),this},getContainer:function(){return this._container},setOpacity:function(t){return this.options.opacity=t,this._updateOpacity(),this},setZIndex:function(t){return this.options.zIndex=t,this._updateZIndex(),this},isLoading:function(){return this._loading},redraw:function(){var t;return this._map&&(this._removeAllTiles(),(t=this._clampZoom(this._map.getZoom()))!==this._tileZoom&&(this._tileZoom=t,this._updateLevels()),this._update()),this},getEvents:function(){var t={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||(this._onMove=j(this._onMoveEnd,this.options.updateInterval,this)),t.move=this._onMove),this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},createTile:function(){return document.createElement("div")},getTileSize:function(){var t=this.options.tileSize;return t instanceof p?t:new p(t,t)},_updateZIndex:function(){this._container&&void 0!==this.options.zIndex&&null!==this.options.zIndex&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(t){for(var e,i=this.getPane().children,n=-t(-1/0,1/0),o=0,s=i.length;o<s;o++)e=i[o].style.zIndex,i[o]!==this._container&&e&&(n=t(n,+e));isFinite(n)&&(this.options.zIndex=n+t(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!b.ielt9){C(this._container,this.options.opacity);var t,e=+new Date,i=!1,n=!1;for(t in this._tiles){var o,s=this._tiles[t];s.current&&s.loaded&&(o=Math.min(1,(e-s.loaded)/200),C(s.el,o),o<1?i=!0:(s.active?n=!0:this._onOpaqueTile(s),s.active=!0))}n&&!this._noPrune&&this._pruneTiles(),i&&(r(this._fadeFrame),this._fadeFrame=x(this._updateOpacity,this))}},_onOpaqueTile:u,_initContainer:function(){this._container||(this._container=P("div","leaflet-layer "+(this.options.className||"")),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var t=this._tileZoom,e=this.options.maxZoom;if(void 0!==t){for(var i in this._levels)i=Number(i),this._levels[i].el.children.length||i===t?(this._levels[i].el.style.zIndex=e-Math.abs(t-i),this._onUpdateLevel(i)):(T(this._levels[i].el),this._removeTilesAtZoom(i),this._onRemoveLevel(i),delete this._levels[i]);var n=this._levels[t],o=this._map;return n||((n=this._levels[t]={}).el=P("div","leaflet-tile-container leaflet-zoom-animated",this._container),n.el.style.zIndex=e,n.origin=o.project(o.unproject(o.getPixelOrigin()),t).round(),n.zoom=t,this._setZoomTransform(n,o.getCenter(),o.getZoom()),u(n.el.offsetWidth),this._onCreateLevel(n)),this._level=n}},_onUpdateLevel:u,_onRemoveLevel:u,_onCreateLevel:u,_pruneTiles:function(){if(this._map){var t,e,i,n=this._map.getZoom();if(n>this.options.maxZoom||n<this.options.minZoom)this._removeAllTiles();else{for(t in this._tiles)(i=this._tiles[t]).retain=i.current;for(t in this._tiles)(i=this._tiles[t]).current&&!i.active&&(e=i.coords,this._retainParent(e.x,e.y,e.z,e.z-5)||this._retainChildren(e.x,e.y,e.z,e.z+2));for(t in this._tiles)this._tiles[t].retain||this._removeTile(t)}}},_removeTilesAtZoom:function(t){for(var e in this._tiles)this._tiles[e].coords.z===t&&this._removeTile(e)},_removeAllTiles:function(){for(var t in this._tiles)this._removeTile(t)},_invalidateAll:function(){for(var t in this._levels)T(this._levels[t].el),this._onRemoveLevel(Number(t)),delete this._levels[t];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(t,e,i,n){var t=Math.floor(t/2),e=Math.floor(e/2),i=i-1,o=new p(+t,+e),o=(o.z=i,this._tileCoordsToKey(o)),o=this._tiles[o];return o&&o.active?o.retain=!0:(o&&o.loaded&&(o.retain=!0),n<i&&this._retainParent(t,e,i,n))},_retainChildren:function(t,e,i,n){for(var o=2*t;o<2*t+2;o++)for(var s=2*e;s<2*e+2;s++){var r=new p(o,s),r=(r.z=i+1,this._tileCoordsToKey(r)),r=this._tiles[r];r&&r.active?r.retain=!0:(r&&r.loaded&&(r.retain=!0),i+1<n&&this._retainChildren(o,s,i+1,n))}},_resetView:function(t){t=t&&(t.pinch||t.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),t,t)},_animateZoom:function(t){this._setView(t.center,t.zoom,!0,t.noUpdate)},_clampZoom:function(t){var e=this.options;return void 0!==e.minNativeZoom&&t<e.minNativeZoom?e.minNativeZoom:void 0!==e.maxNativeZoom&&e.maxNativeZoom<t?e.maxNativeZoom:t},_setView:function(t,e,i,n){var o=Math.round(e),o=void 0!==this.options.maxZoom&&o>this.options.maxZoom||void 0!==this.options.minZoom&&o<this.options.minZoom?void 0:this._clampZoom(o),s=this.options.updateWhenZooming&&o!==this._tileZoom;n&&!s||(this._tileZoom=o,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),void 0!==o&&this._update(t),i||this._pruneTiles(),this._noPrune=!!i),this._setZoomTransforms(t,e)},_setZoomTransforms:function(t,e){for(var i in this._levels)this._setZoomTransform(this._levels[i],t,e)},_setZoomTransform:function(t,e,i){var n=this._map.getZoomScale(i,t.zoom),e=t.origin.multiplyBy(n).subtract(this._map._getNewPixelOrigin(e,i)).round();b.any3d?be(t.el,e,n):Z(t.el,e)},_resetGrid:function(){var t=this._map,e=t.options.crs,i=this._tileSize=this.getTileSize(),n=this._tileZoom,o=this._map.getPixelWorldBounds(this._tileZoom);o&&(this._globalTileRange=this._pxBoundsToTileRange(o)),this._wrapX=e.wrapLng&&!this.options.noWrap&&[Math.floor(t.project([0,e.wrapLng[0]],n).x/i.x),Math.ceil(t.project([0,e.wrapLng[1]],n).x/i.y)],this._wrapY=e.wrapLat&&!this.options.noWrap&&[Math.floor(t.project([e.wrapLat[0],0],n).y/i.x),Math.ceil(t.project([e.wrapLat[1],0],n).y/i.y)]},_onMoveEnd:function(){this._map&&!this._map._animatingZoom&&this._update()},_getTiledPixelBounds:function(t){var e=this._map,i=e._animatingZoom?Math.max(e._animateToZoom,e.getZoom()):e.getZoom(),i=e.getZoomScale(i,this._tileZoom),t=e.project(t,this._tileZoom).floor(),e=e.getSize().divideBy(2*i);return new f(t.subtract(e),t.add(e))},_update:function(t){var e=this._map;if(e){var i=this._clampZoom(e.getZoom());if(void 0===t&&(t=e.getCenter()),void 0!==this._tileZoom){var n,e=this._getTiledPixelBounds(t),o=this._pxBoundsToTileRange(e),s=o.getCenter(),r=[],e=this.options.keepBuffer,a=new f(o.getBottomLeft().subtract([e,-e]),o.getTopRight().add([e,-e]));if(!(isFinite(o.min.x)&&isFinite(o.min.y)&&isFinite(o.max.x)&&isFinite(o.max.y)))throw new Error("Attempted to load an infinite number of tiles");for(n in this._tiles){var h=this._tiles[n].coords;h.z===this._tileZoom&&a.contains(new p(h.x,h.y))||(this._tiles[n].current=!1)}if(1<Math.abs(i-this._tileZoom))this._setView(t,i);else{for(var l=o.min.y;l<=o.max.y;l++)for(var u=o.min.x;u<=o.max.x;u++){var c,d=new p(u,l);d.z=this._tileZoom,this._isValidTile(d)&&((c=this._tiles[this._tileCoordsToKey(d)])?c.current=!0:r.push(d))}if(r.sort(function(t,e){return t.distanceTo(s)-e.distanceTo(s)}),0!==r.length){this._loading||(this._loading=!0,this.fire("loading"));for(var _=document.createDocumentFragment(),u=0;u<r.length;u++)this._addTile(r[u],_);this._level.el.appendChild(_)}}}}},_isValidTile:function(t){var e=this._map.options.crs;if(!e.infinite){var i=this._globalTileRange;if(!e.wrapLng&&(t.x<i.min.x||t.x>i.max.x)||!e.wrapLat&&(t.y<i.min.y||t.y>i.max.y))return!1}return!this.options.bounds||(e=this._tileCoordsToBounds(t),g(this.options.bounds).overlaps(e))},_keyToBounds:function(t){return this._tileCoordsToBounds(this._keyToTileCoords(t))},_tileCoordsToNwSe:function(t){var e=this._map,i=this.getTileSize(),n=t.scaleBy(i),i=n.add(i);return[e.unproject(n,t.z),e.unproject(i,t.z)]},_tileCoordsToBounds:function(t){t=this._tileCoordsToNwSe(t),t=new s(t[0],t[1]);return t=this.options.noWrap?t:this._map.wrapLatLngBounds(t)},_tileCoordsToKey:function(t){return t.x+":"+t.y+":"+t.z},_keyToTileCoords:function(t){var t=t.split(":"),e=new p(+t[0],+t[1]);return e.z=+t[2],e},_removeTile:function(t){var e=this._tiles[t];e&&(T(e.el),delete this._tiles[t],this.fire("tileunload",{tile:e.el,coords:this._keyToTileCoords(t)}))},_initTile:function(t){M(t,"leaflet-tile");var e=this.getTileSize();t.style.width=e.x+"px",t.style.height=e.y+"px",t.onselectstart=u,t.onmousemove=u,b.ielt9&&this.options.opacity<1&&C(t,this.options.opacity)},_addTile:function(t,e){var i=this._getTilePos(t),n=this._tileCoordsToKey(t),o=this.createTile(this._wrapCoords(t),a(this._tileReady,this,t));this._initTile(o),this.createTile.length<2&&x(a(this._tileReady,this,t,null,o)),Z(o,i),this._tiles[n]={el:o,coords:t,current:!0},e.appendChild(o),this.fire("tileloadstart",{tile:o,coords:t})},_tileReady:function(t,e,i){e&&this.fire("tileerror",{error:e,tile:i,coords:t});var n=this._tileCoordsToKey(t);(i=this._tiles[n])&&(i.loaded=+new Date,this._map._fadeAnimated?(C(i.el,0),r(this._fadeFrame),this._fadeFrame=x(this._updateOpacity,this)):(i.active=!0,this._pruneTiles()),e||(M(i.el,"leaflet-tile-loaded"),this.fire("tileload",{tile:i.el,coords:t})),this._noTilesToLoad()&&(this._loading=!1,this.fire("load"),b.ielt9||!this._map._fadeAnimated?x(this._pruneTiles,this):setTimeout(a(this._pruneTiles,this),250)))},_getTilePos:function(t){return t.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(t){var e=new p(this._wrapX?H(t.x,this._wrapX):t.x,this._wrapY?H(t.y,this._wrapY):t.y);return e.z=t.z,e},_pxBoundsToTileRange:function(t){var e=this.getTileSize();return new f(t.min.unscaleBy(e).floor(),t.max.unscaleBy(e).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var t in this._tiles)if(!this._tiles[t].loaded)return!1;return!0}});var Di=Ni.extend({options:{minZoom:0,maxZoom:18,subdomains:"abc",errorTileUrl:"",zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1,referrerPolicy:!1},initialize:function(t,e){this._url=t,(e=c(this,e)).detectRetina&&b.retina&&0<e.maxZoom?(e.tileSize=Math.floor(e.tileSize/2),e.zoomReverse?(e.zoomOffset--,e.minZoom=Math.min(e.maxZoom,e.minZoom+1)):(e.zoomOffset++,e.maxZoom=Math.max(e.minZoom,e.maxZoom-1)),e.minZoom=Math.max(0,e.minZoom)):e.zoomReverse?e.minZoom=Math.min(e.maxZoom,e.minZoom):e.maxZoom=Math.max(e.minZoom,e.maxZoom),"string"==typeof e.subdomains&&(e.subdomains=e.subdomains.split("")),this.on("tileunload",this._onTileRemove)},setUrl:function(t,e){return this._url===t&&void 0===e&&(e=!0),this._url=t,e||this.redraw(),this},createTile:function(t,e){var i=document.createElement("img");return S(i,"load",a(this._tileOnLoad,this,e,i)),S(i,"error",a(this._tileOnError,this,e,i)),!this.options.crossOrigin&&""!==this.options.crossOrigin||(i.crossOrigin=!0===this.options.crossOrigin?"":this.options.crossOrigin),"string"==typeof this.options.referrerPolicy&&(i.referrerPolicy=this.options.referrerPolicy),i.alt="",i.src=this.getTileUrl(t),i},getTileUrl:function(t){var e={r:b.retina?"@2x":"",s:this._getSubdomain(t),x:t.x,y:t.y,z:this._getZoomForUrl()};return this._map&&!this._map.options.crs.infinite&&(t=this._globalTileRange.max.y-t.y,this.options.tms&&(e.y=t),e["-y"]=t),q(this._url,l(e,this.options))},_tileOnLoad:function(t,e){b.ielt9?setTimeout(a(t,this,null,e),0):t(null,e)},_tileOnError:function(t,e,i){var n=this.options.errorTileUrl;n&&e.getAttribute("src")!==n&&(e.src=n),t(i,e)},_onTileRemove:function(t){t.tile.onload=null},_getZoomForUrl:function(){var t=this._tileZoom,e=this.options.maxZoom;return(t=this.options.zoomReverse?e-t:t)+this.options.zoomOffset},_getSubdomain:function(t){t=Math.abs(t.x+t.y)%this.options.subdomains.length;return this.options.subdomains[t]},_abortLoading:function(){var t,e,i;for(t in this._tiles)this._tiles[t].coords.z!==this._tileZoom&&((i=this._tiles[t].el).onload=u,i.onerror=u,i.complete||(i.src=K,e=this._tiles[t].coords,T(i),delete this._tiles[t],this.fire("tileabort",{tile:i,coords:e})))},_removeTile:function(t){var e=this._tiles[t];if(e)return e.el.setAttribute("src",K),Ni.prototype._removeTile.call(this,t)},_tileReady:function(t,e,i){if(this._map&&(!i||i.getAttribute("src")!==K))return Ni.prototype._tileReady.call(this,t,e,i)}});function ji(t,e){return new Di(t,e)}var Hi=Di.extend({defaultWmsParams:{service:"WMS",request:"GetMap",layers:"",styles:"",format:"image/jpeg",transparent:!1,version:"1.1.1"},options:{crs:null,uppercase:!1},initialize:function(t,e){this._url=t;var i,n=l({},this.defaultWmsParams);for(i in e)i in this.options||(n[i]=e[i]);var t=(e=c(this,e)).detectRetina&&b.retina?2:1,o=this.getTileSize();n.width=o.x*t,n.height=o.y*t,this.wmsParams=n},onAdd:function(t){this._crs=this.options.crs||t.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var e=1.3<=this._wmsVersion?"crs":"srs";this.wmsParams[e]=this._crs.code,Di.prototype.onAdd.call(this,t)},getTileUrl:function(t){var e=this._tileCoordsToNwSe(t),i=this._crs,i=_(i.project(e[0]),i.project(e[1])),e=i.min,i=i.max,e=(1.3<=this._wmsVersion&&this._crs===li?[e.y,e.x,i.y,i.x]:[e.x,e.y,i.x,i.y]).join(","),i=Di.prototype.getTileUrl.call(this,t);return i+U(this.wmsParams,i,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+e},setParams:function(t,e){return l(this.wmsParams,t),e||this.redraw(),this}});Di.WMS=Hi,ji.wms=function(t,e){return new Hi(t,e)};var Wi=o.extend({options:{padding:.1},initialize:function(t){c(this,t),h(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),M(this._container,"leaflet-zoom-animated")),this.getPane().appendChild(this._container),this._update(),this.on("update",this._updatePaths,this)},onRemove:function(){this.off("update",this._updatePaths,this),this._destroyContainer()},getEvents:function(){var t={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(t.zoomanim=this._onAnimZoom),t},_onAnimZoom:function(t){this._updateTransform(t.center,t.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(t,e){var i=this._map.getZoomScale(e,this._zoom),n=this._map.getSize().multiplyBy(.5+this.options.padding),o=this._map.project(this._center,e),n=n.multiplyBy(-i).add(o).subtract(this._map._getNewPixelOrigin(t,e));b.any3d?be(this._container,n,i):Z(this._container,n)},_reset:function(){for(var t in this._update(),this._updateTransform(this._center,this._zoom),this._layers)this._layers[t]._reset()},_onZoomEnd:function(){for(var t in this._layers)this._layers[t]._project()},_updatePaths:function(){for(var t in this._layers)this._layers[t]._update()},_update:function(){var t=this.options.padding,e=this._map.getSize(),i=this._map.containerPointToLayerPoint(e.multiplyBy(-t)).round();this._bounds=new f(i,i.add(e.multiplyBy(1+2*t)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),Fi=Wi.extend({options:{tolerance:0},getEvents:function(){var t=Wi.prototype.getEvents.call(this);return t.viewprereset=this._onViewPreReset,t},_onViewPreReset:function(){this._postponeUpdatePaths=!0},onAdd:function(){Wi.prototype.onAdd.call(this),this._draw()},_initContainer:function(){var t=this._container=document.createElement("canvas");S(t,"mousemove",this._onMouseMove,this),S(t,"click dblclick mousedown mouseup contextmenu",this._onClick,this),S(t,"mouseout",this._handleMouseOut,this),t._leaflet_disable_events=!0,this._ctx=t.getContext("2d")},_destroyContainer:function(){r(this._redrawRequest),delete this._ctx,T(this._container),k(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){for(var t in this._redrawBounds=null,this._layers)this._layers[t]._update();this._redraw()}},_update:function(){var t,e,i,n;this._map._animatingZoom&&this._bounds||(Wi.prototype._update.call(this),t=this._bounds,e=this._container,i=t.getSize(),n=b.retina?2:1,Z(e,t.min),e.width=n*i.x,e.height=n*i.y,e.style.width=i.x+"px",e.style.height=i.y+"px",b.retina&&this._ctx.scale(2,2),this._ctx.translate(-t.min.x,-t.min.y),this.fire("update"))},_reset:function(){Wi.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(t){this._updateDashArray(t);t=(this._layers[h(t)]=t)._order={layer:t,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=t),this._drawLast=t,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(t){this._requestRedraw(t)},_removePath:function(t){var e=t._order,i=e.next,e=e.prev;i?i.prev=e:this._drawLast=e,e?e.next=i:this._drawFirst=i,delete t._order,delete this._layers[h(t)],this._requestRedraw(t)},_updatePath:function(t){this._extendRedrawBounds(t),t._project(),t._update(),this._requestRedraw(t)},_updateStyle:function(t){this._updateDashArray(t),this._requestRedraw(t)},_updateDashArray:function(t){if("string"==typeof t.options.dashArray){for(var e,i=t.options.dashArray.split(/[, ]+/),n=[],o=0;o<i.length;o++){if(e=Number(i[o]),isNaN(e))return;n.push(e)}t.options._dashArray=n}else t.options._dashArray=t.options.dashArray},_requestRedraw:function(t){this._map&&(this._extendRedrawBounds(t),this._redrawRequest=this._redrawRequest||x(this._redraw,this))},_extendRedrawBounds:function(t){var e;t._pxBounds&&(e=(t.options.weight||0)+1,this._redrawBounds=this._redrawBounds||new f,this._redrawBounds.extend(t._pxBounds.min.subtract([e,e])),this._redrawBounds.extend(t._pxBounds.max.add([e,e])))},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var t,e=this._redrawBounds;e?(t=e.getSize(),this._ctx.clearRect(e.min.x,e.min.y,t.x,t.y)):(this._ctx.save(),this._ctx.setTransform(1,0,0,1,0,0),this._ctx.clearRect(0,0,this._container.width,this._container.height),this._ctx.restore())},_draw:function(){var t,e,i=this._redrawBounds;this._ctx.save(),i&&(e=i.getSize(),this._ctx.beginPath(),this._ctx.rect(i.min.x,i.min.y,e.x,e.y),this._ctx.clip()),this._drawing=!0;for(var n=this._drawFirst;n;n=n.next)t=n.layer,(!i||t._pxBounds&&t._pxBounds.intersects(i))&&t._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(t,e){if(this._drawing){var i,n,o,s,r=t._parts,a=r.length,h=this._ctx;if(a){for(h.beginPath(),i=0;i<a;i++){for(n=0,o=r[i].length;n<o;n++)s=r[i][n],h[n?"lineTo":"moveTo"](s.x,s.y);e&&h.closePath()}this._fillStroke(h,t)}}},_updateCircle:function(t){var e,i,n,o;this._drawing&&!t._empty()&&(e=t._point,i=this._ctx,n=Math.max(Math.round(t._radius),1),1!=(o=(Math.max(Math.round(t._radiusY),1)||n)/n)&&(i.save(),i.scale(1,o)),i.beginPath(),i.arc(e.x,e.y/o,n,0,2*Math.PI,!1),1!=o&&i.restore(),this._fillStroke(i,t))},_fillStroke:function(t,e){var i=e.options;i.fill&&(t.globalAlpha=i.fillOpacity,t.fillStyle=i.fillColor||i.color,t.fill(i.fillRule||"evenodd")),i.stroke&&0!==i.weight&&(t.setLineDash&&t.setLineDash(e.options&&e.options._dashArray||[]),t.globalAlpha=i.opacity,t.lineWidth=i.weight,t.strokeStyle=i.color,t.lineCap=i.lineCap,t.lineJoin=i.lineJoin,t.stroke())},_onClick:function(t){for(var e,i,n=this._map.mouseEventToLayerPoint(t),o=this._drawFirst;o;o=o.next)(e=o.layer).options.interactive&&e._containsPoint(n)&&(("click"===t.type||"preclick"===t.type)&&this._map._draggableMoved(e)||(i=e));this._fireEvent(!!i&&[i],t)},_onMouseMove:function(t){var e;!this._map||this._map.dragging.moving()||this._map._animatingZoom||(e=this._map.mouseEventToLayerPoint(t),this._handleMouseHover(t,e))},_handleMouseOut:function(t){var e=this._hoveredLayer;e&&(z(this._container,"leaflet-interactive"),this._fireEvent([e],t,"mouseout"),this._hoveredLayer=null,this._mouseHoverThrottled=!1)},_handleMouseHover:function(t,e){if(!this._mouseHoverThrottled){for(var i,n,o=this._drawFirst;o;o=o.next)(i=o.layer).options.interactive&&i._containsPoint(e)&&(n=i);n!==this._hoveredLayer&&(this._handleMouseOut(t),n&&(M(this._container,"leaflet-interactive"),this._fireEvent([n],t,"mouseover"),this._hoveredLayer=n)),this._fireEvent(!!this._hoveredLayer&&[this._hoveredLayer],t),this._mouseHoverThrottled=!0,setTimeout(a(function(){this._mouseHoverThrottled=!1},this),32)}},_fireEvent:function(t,e,i){this._map._fireDOMEvent(e,i||e.type,t)},_bringToFront:function(t){var e,i,n=t._order;n&&(e=n.next,i=n.prev,e&&((e.prev=i)?i.next=e:e&&(this._drawFirst=e),n.prev=this._drawLast,(this._drawLast.next=n).next=null,this._drawLast=n,this._requestRedraw(t)))},_bringToBack:function(t){var e,i,n=t._order;n&&(e=n.next,(i=n.prev)&&((i.next=e)?e.prev=i:i&&(this._drawLast=i),n.prev=null,n.next=this._drawFirst,this._drawFirst.prev=n,this._drawFirst=n,this._requestRedraw(t)))}});function Ui(t){return b.canvas?new Fi(t):null}var Vi=function(){try{return document.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(t){return document.createElement("<lvml:"+t+' class="lvml">')}}catch(t){}return function(t){return document.createElement("<"+t+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}}(),zt={_initContainer:function(){this._container=P("div","leaflet-vml-container")},_update:function(){this._map._animatingZoom||(Wi.prototype._update.call(this),this.fire("update"))},_initPath:function(t){var e=t._container=Vi("shape");M(e,"leaflet-vml-shape "+(this.options.className||"")),e.coordsize="1 1",t._path=Vi("path"),e.appendChild(t._path),this._updateStyle(t),this._layers[h(t)]=t},_addPath:function(t){var e=t._container;this._container.appendChild(e),t.options.interactive&&t.addInteractiveTarget(e)},_removePath:function(t){var e=t._container;T(e),t.removeInteractiveTarget(e),delete this._layers[h(t)]},_updateStyle:function(t){var e=t._stroke,i=t._fill,n=t.options,o=t._container;o.stroked=!!n.stroke,o.filled=!!n.fill,n.stroke?(e=e||(t._stroke=Vi("stroke")),o.appendChild(e),e.weight=n.weight+"px",e.color=n.color,e.opacity=n.opacity,n.dashArray?e.dashStyle=d(n.dashArray)?n.dashArray.join(" "):n.dashArray.replace(/( *, *)/g," "):e.dashStyle="",e.endcap=n.lineCap.replace("butt","flat"),e.joinstyle=n.lineJoin):e&&(o.removeChild(e),t._stroke=null),n.fill?(i=i||(t._fill=Vi("fill")),o.appendChild(i),i.color=n.fillColor||n.color,i.opacity=n.fillOpacity):i&&(o.removeChild(i),t._fill=null)},_updateCircle:function(t){var e=t._point.round(),i=Math.round(t._radius),n=Math.round(t._radiusY||i);this._setPath(t,t._empty()?"M0 0":"AL "+e.x+","+e.y+" "+i+","+n+" 0,23592600")},_setPath:function(t,e){t._path.v=e},_bringToFront:function(t){fe(t._container)},_bringToBack:function(t){ge(t._container)}},qi=b.vml?Vi:ct,Gi=Wi.extend({_initContainer:function(){this._container=qi("svg"),this._container.setAttribute("pointer-events","none"),this._rootGroup=qi("g"),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){T(this._container),k(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_update:function(){var t,e,i;this._map._animatingZoom&&this._bounds||(Wi.prototype._update.call(this),e=(t=this._bounds).getSize(),i=this._container,this._svgSize&&this._svgSize.equals(e)||(this._svgSize=e,i.setAttribute("width",e.x),i.setAttribute("height",e.y)),Z(i,t.min),i.setAttribute("viewBox",[t.min.x,t.min.y,e.x,e.y].join(" ")),this.fire("update"))},_initPath:function(t){var e=t._path=qi("path");t.options.className&&M(e,t.options.className),t.options.interactive&&M(e,"leaflet-interactive"),this._updateStyle(t),this._layers[h(t)]=t},_addPath:function(t){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(t._path),t.addInteractiveTarget(t._path)},_removePath:function(t){T(t._path),t.removeInteractiveTarget(t._path),delete this._layers[h(t)]},_updatePath:function(t){t._project(),t._update()},_updateStyle:function(t){var e=t._path,t=t.options;e&&(t.stroke?(e.setAttribute("stroke",t.color),e.setAttribute("stroke-opacity",t.opacity),e.setAttribute("stroke-width",t.weight),e.setAttribute("stroke-linecap",t.lineCap),e.setAttribute("stroke-linejoin",t.lineJoin),t.dashArray?e.setAttribute("stroke-dasharray",t.dashArray):e.removeAttribute("stroke-dasharray"),t.dashOffset?e.setAttribute("stroke-dashoffset",t.dashOffset):e.removeAttribute("stroke-dashoffset")):e.setAttribute("stroke","none"),t.fill?(e.setAttribute("fill",t.fillColor||t.color),e.setAttribute("fill-opacity",t.fillOpacity),e.setAttribute("fill-rule",t.fillRule||"evenodd")):e.setAttribute("fill","none"))},_updatePoly:function(t,e){this._setPath(t,dt(t._parts,e))},_updateCircle:function(t){var e=t._point,i=Math.max(Math.round(t._radius),1),n="a"+i+","+(Math.max(Math.round(t._radiusY),1)||i)+" 0 1,0 ",e=t._empty()?"M0 0":"M"+(e.x-i)+","+e.y+n+2*i+",0 "+n+2*-i+",0 ";this._setPath(t,e)},_setPath:function(t,e){t._path.setAttribute("d",e)},_bringToFront:function(t){fe(t._path)},_bringToBack:function(t){ge(t._path)}});function Ki(t){return b.svg||b.vml?new Gi(t):null}b.vml&&Gi.include(zt),A.include({getRenderer:function(t){t=(t=t.options.renderer||this._getPaneRenderer(t.options.pane)||this.options.renderer||this._renderer)||(this._renderer=this._createRenderer());return this.hasLayer(t)||this.addLayer(t),t},_getPaneRenderer:function(t){var e;return"overlayPane"!==t&&void 0!==t&&(void 0===(e=this._paneRenderers[t])&&(e=this._createRenderer({pane:t}),this._paneRenderers[t]=e),e)},_createRenderer:function(t){return this.options.preferCanvas&&Ui(t)||Ki(t)}});var Yi=xi.extend({initialize:function(t,e){xi.prototype.initialize.call(this,this._boundsToLatLngs(t),e)},setBounds:function(t){return this.setLatLngs(this._boundsToLatLngs(t))},_boundsToLatLngs:function(t){return[(t=g(t)).getSouthWest(),t.getNorthWest(),t.getNorthEast(),t.getSouthEast()]}});Gi.create=qi,Gi.pointsToPath=dt,wi.geometryToLayer=bi,wi.coordsToLatLng=Li,wi.coordsToLatLngs=Ti,wi.latLngToCoords=Mi,wi.latLngsToCoords=zi,wi.getFeature=Ci,wi.asFeature=Zi,A.mergeOptions({boxZoom:!0});var _t=n.extend({initialize:function(t){this._map=t,this._container=t._container,this._pane=t._panes.overlayPane,this._resetStateTimeout=0,t.on("unload",this._destroy,this)},addHooks:function(){S(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){k(this._container,"mousedown",this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){T(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){0!==this._resetStateTimeout&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(t){if(!t.shiftKey||1!==t.which&&1!==t.button)return!1;this._clearDeferredResetState(),this._resetState(),re(),Le(),this._startPoint=this._map.mouseEventToContainerPoint(t),S(document,{contextmenu:Re,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(t){this._moved||(this._moved=!0,this._box=P("div","leaflet-zoom-box",this._container),M(this._container,"leaflet-crosshair"),this._map.fire("boxzoomstart")),this._point=this._map.mouseEventToContainerPoint(t);var t=new f(this._point,this._startPoint),e=t.getSize();Z(this._box,t.min),this._box.style.width=e.x+"px",this._box.style.height=e.y+"px"},_finish:function(){this._moved&&(T(this._box),z(this._container,"leaflet-crosshair")),ae(),Te(),k(document,{contextmenu:Re,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(t){1!==t.which&&1!==t.button||(this._finish(),this._moved&&(this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(a(this._resetState,this),0),t=new s(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point)),this._map.fitBounds(t).fire("boxzoomend",{boxZoomBounds:t})))},_onKeyDown:function(t){27===t.keyCode&&(this._finish(),this._clearDeferredResetState(),this._resetState())}}),Ct=(A.addInitHook("addHandler","boxZoom",_t),A.mergeOptions({doubleClickZoom:!0}),n.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(t){var e=this._map,i=e.getZoom(),n=e.options.zoomDelta,i=t.originalEvent.shiftKey?i-n:i+n;"center"===e.options.doubleClickZoom?e.setZoom(i):e.setZoomAround(t.containerPoint,i)}})),Zt=(A.addInitHook("addHandler","doubleClickZoom",Ct),A.mergeOptions({dragging:!0,inertia:!0,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0}),n.extend({addHooks:function(){var t;this._draggable||(t=this._map,this._draggable=new Xe(t._mapPane,t._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on("predrag",this._onPreDragLimit,this),t.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDragWrap,this),t.on("zoomend",this._onZoomEnd,this),t.whenReady(this._onZoomEnd,this))),M(this._map._container,"leaflet-grab leaflet-touch-drag"),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){z(this._map._container,"leaflet-grab"),z(this._map._container,"leaflet-touch-drag"),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var t,e=this._map;e._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity?(t=g(this._map.options.maxBounds),this._offsetLimit=_(this._map.latLngToContainerPoint(t.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(t.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))):this._offsetLimit=null,e.fire("movestart").fire("dragstart"),e.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(t){var e,i;this._map.options.inertia&&(e=this._lastTime=+new Date,i=this._lastPos=this._draggable._absPos||this._draggable._newPos,this._positions.push(i),this._times.push(e),this._prunePositions(e)),this._map.fire("move",t).fire("drag",t)},_prunePositions:function(t){for(;1<this._positions.length&&50<t-this._times[0];)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var t=this._map.getSize().divideBy(2),e=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=e.subtract(t).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(t,e){return t-(t-e)*this._viscosity},_onPreDragLimit:function(){var t,e;this._viscosity&&this._offsetLimit&&(t=this._draggable._newPos.subtract(this._draggable._startPos),e=this._offsetLimit,t.x<e.min.x&&(t.x=this._viscousLimit(t.x,e.min.x)),t.y<e.min.y&&(t.y=this._viscousLimit(t.y,e.min.y)),t.x>e.max.x&&(t.x=this._viscousLimit(t.x,e.max.x)),t.y>e.max.y&&(t.y=this._viscousLimit(t.y,e.max.y)),this._draggable._newPos=this._draggable._startPos.add(t))},_onPreDragWrap:function(){var t=this._worldWidth,e=Math.round(t/2),i=this._initialWorldOffset,n=this._draggable._newPos.x,o=(n-e+i)%t+e-i,n=(n+e+i)%t-e-i,t=Math.abs(o+i)<Math.abs(n+i)?o:n;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=t},_onDragEnd:function(t){var e,i,n,o,s=this._map,r=s.options,a=!r.inertia||t.noInertia||this._times.length<2;s.fire("dragend",t),!a&&(this._prunePositions(+new Date),t=this._lastPos.subtract(this._positions[0]),a=(this._lastTime-this._times[0])/1e3,e=r.easeLinearity,a=(t=t.multiplyBy(e/a)).distanceTo([0,0]),i=Math.min(r.inertiaMaxSpeed,a),t=t.multiplyBy(i/a),n=i/(r.inertiaDeceleration*e),(o=t.multiplyBy(-n/2).round()).x||o.y)?(o=s._limitOffset(o,s.options.maxBounds),x(function(){s.panBy(o,{duration:n,easeLinearity:e,noMoveStart:!0,animate:!0})})):s.fire("moveend")}})),St=(A.addInitHook("addHandler","dragging",Zt),A.mergeOptions({keyboard:!0,keyboardPanDelta:80}),n.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(t){this._map=t,this._setPanDelta(t.options.keyboardPanDelta),this._setZoomDelta(t.options.zoomDelta)},addHooks:function(){var t=this._map._container;t.tabIndex<=0&&(t.tabIndex="0"),S(t,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),k(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){var t,e,i;this._focused||(i=document.body,t=document.documentElement,e=i.scrollTop||t.scrollTop,i=i.scrollLeft||t.scrollLeft,this._map._container.focus(),window.scrollTo(i,e))},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanDelta:function(t){for(var e=this._panKeys={},i=this.keyCodes,n=0,o=i.left.length;n<o;n++)e[i.left[n]]=[-1*t,0];for(n=0,o=i.right.length;n<o;n++)e[i.right[n]]=[t,0];for(n=0,o=i.down.length;n<o;n++)e[i.down[n]]=[0,t];for(n=0,o=i.up.length;n<o;n++)e[i.up[n]]=[0,-1*t]},_setZoomDelta:function(t){for(var e=this._zoomKeys={},i=this.keyCodes,n=0,o=i.zoomIn.length;n<o;n++)e[i.zoomIn[n]]=t;for(n=0,o=i.zoomOut.length;n<o;n++)e[i.zoomOut[n]]=-t},_addHooks:function(){S(document,"keydown",this._onKeyDown,this)},_removeHooks:function(){k(document,"keydown",this._onKeyDown,this)},_onKeyDown:function(t){if(!(t.altKey||t.ctrlKey||t.metaKey)){var e,i,n=t.keyCode,o=this._map;if(n in this._panKeys)o._panAnim&&o._panAnim._inProgress||(i=this._panKeys[n],t.shiftKey&&(i=m(i).multiplyBy(3)),o.options.maxBounds&&(i=o._limitOffset(m(i),o.options.maxBounds)),o.options.worldCopyJump?(e=o.wrapLatLng(o.unproject(o.project(o.getCenter()).add(i))),o.panTo(e)):o.panBy(i));else if(n in this._zoomKeys)o.setZoom(o.getZoom()+(t.shiftKey?3:1)*this._zoomKeys[n]);else{if(27!==n||!o._popup||!o._popup.options.closeOnEscapeKey)return;o.closePopup()}Re(t)}}})),Et=(A.addInitHook("addHandler","keyboard",St),A.mergeOptions({scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60}),n.extend({addHooks:function(){S(this._map._container,"wheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){k(this._map._container,"wheel",this._onWheelScroll,this)},_onWheelScroll:function(t){var e=He(t),i=this._map.options.wheelDebounceTime,e=(this._delta+=e,this._lastMousePos=this._map.mouseEventToContainerPoint(t),this._startTime||(this._startTime=+new Date),Math.max(i-(+new Date-this._startTime),0));clearTimeout(this._timer),this._timer=setTimeout(a(this._performZoom,this),e),Re(t)},_performZoom:function(){var t=this._map,e=t.getZoom(),i=this._map.options.zoomSnap||0,n=(t._stop(),this._delta/(4*this._map.options.wheelPxPerZoomLevel)),n=4*Math.log(2/(1+Math.exp(-Math.abs(n))))/Math.LN2,i=i?Math.ceil(n/i)*i:n,n=t._limitZoom(e+(0<this._delta?i:-i))-e;this._delta=0,this._startTime=null,n&&("center"===t.options.scrollWheelZoom?t.setZoom(e+n):t.setZoomAround(this._lastMousePos,e+n))}})),kt=(A.addInitHook("addHandler","scrollWheelZoom",Et),A.mergeOptions({tapHold:b.touchNative&&b.safari&&b.mobile,tapTolerance:15}),n.extend({addHooks:function(){S(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){k(this._map._container,"touchstart",this._onDown,this)},_onDown:function(t){var e;clearTimeout(this._holdTimeout),1===t.touches.length&&(e=t.touches[0],this._startPos=this._newPos=new p(e.clientX,e.clientY),this._holdTimeout=setTimeout(a(function(){this._cancel(),this._isTapValid()&&(S(document,"touchend",O),S(document,"touchend touchcancel",this._cancelClickPrevent),this._simulateEvent("contextmenu",e))},this),600),S(document,"touchend touchcancel contextmenu",this._cancel,this),S(document,"touchmove",this._onMove,this))},_cancelClickPrevent:function t(){k(document,"touchend",O),k(document,"touchend touchcancel",t)},_cancel:function(){clearTimeout(this._holdTimeout),k(document,"touchend touchcancel contextmenu",this._cancel,this),k(document,"touchmove",this._onMove,this)},_onMove:function(t){t=t.touches[0];this._newPos=new p(t.clientX,t.clientY)},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_simulateEvent:function(t,e){t=new MouseEvent(t,{bubbles:!0,cancelable:!0,view:window,screenX:e.screenX,screenY:e.screenY,clientX:e.clientX,clientY:e.clientY});t._simulated=!0,e.target.dispatchEvent(t)}})),Ot=(A.addInitHook("addHandler","tapHold",kt),A.mergeOptions({touchZoom:b.touch,bounceAtZoomLimits:!0}),n.extend({addHooks:function(){M(this._map._container,"leaflet-touch-zoom"),S(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){z(this._map._container,"leaflet-touch-zoom"),k(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(t){var e,i,n=this._map;!t.touches||2!==t.touches.length||n._animatingZoom||this._zooming||(e=n.mouseEventToContainerPoint(t.touches[0]),i=n.mouseEventToContainerPoint(t.touches[1]),this._centerPoint=n.getSize()._divideBy(2),this._startLatLng=n.containerPointToLatLng(this._centerPoint),"center"!==n.options.touchZoom&&(this._pinchStartLatLng=n.containerPointToLatLng(e.add(i)._divideBy(2))),this._startDist=e.distanceTo(i),this._startZoom=n.getZoom(),this._moved=!1,this._zooming=!0,n._stop(),S(document,"touchmove",this._onTouchMove,this),S(document,"touchend touchcancel",this._onTouchEnd,this),O(t))},_onTouchMove:function(t){if(t.touches&&2===t.touches.length&&this._zooming){var e=this._map,i=e.mouseEventToContainerPoint(t.touches[0]),n=e.mouseEventToContainerPoint(t.touches[1]),o=i.distanceTo(n)/this._startDist;if(this._zoom=e.getScaleZoom(o,this._startZoom),!e.options.bounceAtZoomLimits&&(this._zoom<e.getMinZoom()&&o<1||this._zoom>e.getMaxZoom()&&1<o)&&(this._zoom=e._limitZoom(this._zoom)),"center"===e.options.touchZoom){if(this._center=this._startLatLng,1==o)return}else{i=i._add(n)._divideBy(2)._subtract(this._centerPoint);if(1==o&&0===i.x&&0===i.y)return;this._center=e.unproject(e.project(this._pinchStartLatLng,this._zoom).subtract(i),this._zoom)}this._moved||(e._moveStart(!0,!1),this._moved=!0),r(this._animRequest);n=a(e._move,e,this._center,this._zoom,{pinch:!0,round:!1},void 0);this._animRequest=x(n,this,!0),O(t)}},_onTouchEnd:function(){this._moved&&this._zooming?(this._zooming=!1,r(this._animRequest),k(document,"touchmove",this._onTouchMove,this),k(document,"touchend touchcancel",this._onTouchEnd,this),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))):this._zooming=!1}})),Xi=(A.addInitHook("addHandler","touchZoom",Ot),A.BoxZoom=_t,A.DoubleClickZoom=Ct,A.Drag=Zt,A.Keyboard=St,A.ScrollWheelZoom=Et,A.TapHold=kt,A.TouchZoom=Ot,t.Bounds=f,t.Browser=b,t.CRS=ot,t.Canvas=Fi,t.Circle=vi,t.CircleMarker=gi,t.Class=et,t.Control=B,t.DivIcon=Ri,t.DivOverlay=Ai,t.DomEvent=mt,t.DomUtil=pt,t.Draggable=Xe,t.Evented=it,t.FeatureGroup=ci,t.GeoJSON=wi,t.GridLayer=Ni,t.Handler=n,t.Icon=di,t.ImageOverlay=Ei,t.LatLng=v,t.LatLngBounds=s,t.Layer=o,t.LayerGroup=ui,t.LineUtil=vt,t.Map=A,t.Marker=mi,t.Mixin=ft,t.Path=fi,t.Point=p,t.PolyUtil=gt,t.Polygon=xi,t.Polyline=yi,t.Popup=Bi,t.PosAnimation=Fe,t.Projection=wt,t.Rectangle=Yi,t.Renderer=Wi,t.SVG=Gi,t.SVGOverlay=Oi,t.TileLayer=Di,t.Tooltip=Ii,t.Transformation=at,t.Util=tt,t.VideoOverlay=ki,t.bind=a,t.bounds=_,t.canvas=Ui,t.circle=function(t,e,i){return new vi(t,e,i)},t.circleMarker=function(t,e){return new gi(t,e)},t.control=Ue,t.divIcon=function(t){return new Ri(t)},t.extend=l,t.featureGroup=function(t,e){return new ci(t,e)},t.geoJSON=Si,t.geoJson=Mt,t.gridLayer=function(t){return new Ni(t)},t.icon=function(t){return new di(t)},t.imageOverlay=function(t,e,i){return new Ei(t,e,i)},t.latLng=w,t.latLngBounds=g,t.layerGroup=function(t,e){return new ui(t,e)},t.map=function(t,e){return new A(t,e)},t.marker=function(t,e){return new mi(t,e)},t.point=m,t.polygon=function(t,e){return new xi(t,e)},t.polyline=function(t,e){return new yi(t,e)},t.popup=function(t,e){return new Bi(t,e)},t.rectangle=function(t,e){return new Yi(t,e)},t.setOptions=c,t.stamp=h,t.svg=Ki,t.svgOverlay=function(t,e,i){return new Oi(t,e,i)},t.tileLayer=ji,t.tooltip=function(t,e){return new Ii(t,e)},t.transformation=ht,t.version="1.9.4",t.videoOverlay=function(t,e,i){return new ki(t,e,i)},window.L);t.noConflict=function(){return window.L=Xi,this},window.L=t});
//# sourceMappingURL=leaflet.js.map
{"version":3,"file":"dist/leaflet.js.map","sources":["../src/core/Util.js","../src/core/Class.js","../src/core/Events.js","../src/geometry/Point.js","../src/geometry/Bounds.js","../src/geo/LatLngBounds.js","../src/geo/LatLng.js","../src/geo/crs/CRS.js","../src/geo/crs/CRS.Earth.js","../src/geo/projection/Projection.SphericalMercator.js","../src/geometry/Transformation.js","../src/geo/crs/CRS.EPSG3857.js","../src/layer/vector/SVG.Util.js","../src/core/Browser.js","../src/dom/DomEvent.Pointer.js","../src/dom/DomEvent.DoubleTap.js","../src/dom/DomUtil.js","../src/dom/DomEvent.js","../src/dom/PosAnimation.js","../src/map/Map.js","../src/control/Control.js","../src/control/Control.Layers.js","../src/control/Control.Zoom.js","../src/control/Control.Scale.js","../src/control/Control.Attribution.js","../src/core/Handler.js","../src/control/index.js","../src/core/index.js","../src/dom/Draggable.js","../src/geometry/PolyUtil.js","../src/geometry/LineUtil.js","../src/geo/projection/Projection.LonLat.js","../src/geo/projection/Projection.Mercator.js","../src/geo/crs/CRS.EPSG3395.js","../src/geo/crs/CRS.EPSG4326.js","../src/geo/crs/CRS.Simple.js","../src/layer/Layer.js","../src/geo/crs/index.js","../src/layer/LayerGroup.js","../src/layer/FeatureGroup.js","../src/layer/marker/Icon.js","../src/layer/marker/Icon.Default.js","../src/layer/marker/Marker.Drag.js","../src/layer/marker/Marker.js","../src/layer/vector/Path.js","../src/layer/vector/CircleMarker.js","../src/layer/vector/Circle.js","../src/layer/vector/Polyline.js","../src/layer/vector/Polygon.js","../src/layer/GeoJSON.js","../src/layer/ImageOverlay.js","../src/layer/VideoOverlay.js","../src/layer/SVGOverlay.js","../src/layer/DivOverlay.js","../src/layer/Popup.js","../src/layer/Tooltip.js","../src/layer/marker/DivIcon.js","../src/layer/marker/index.js","../src/layer/tile/GridLayer.js","../src/layer/tile/TileLayer.js","../src/layer/tile/TileLayer.WMS.js","../src/layer/tile/index.js","../src/layer/vector/Renderer.js","../src/layer/vector/Canvas.js","../src/layer/vector/SVG.VML.js","../src/layer/vector/SVG.js","../src/layer/vector/Renderer.getRenderer.js","../src/layer/vector/Rectangle.js","../src/layer/vector/index.js","../src/layer/index.js","../src/map/handler/Map.BoxZoom.js","../src/map/handler/Map.DoubleClickZoom.js","../src/map/handler/Map.Drag.js","../src/map/handler/Map.Keyboard.js","../src/map/handler/Map.ScrollWheelZoom.js","../src/map/handler/Map.TapHold.js","../src/map/handler/Map.TouchZoom.js","../src/map/index.js"],"names":["extend","dest","i","src","j","len","arguments","length","create","Object","proto","F","prototype","bind","fn","obj","args","slice","Array","apply","call","concat","lastId","stamp","_leaflet_id","throttle","time","context","lock","later","wrapperFn","setTimeout","wrapNum","x","range","includeMax","max","min","d","falseFn","formatNum","num","precision","pow","Math","undefined","round","trim","str","replace","splitWords","split","setOptions","options","hasOwnProperty","getParamString","existingUrl","uppercase","params","push","encodeURIComponent","toUpperCase","indexOf","join","templateRe","template","data","key","value","Error","isArray","toString","array","el","emptyImageUrl","getPrefixed","name","window","lastTime","timeoutDefer","Date","timeToCall","requestFn","requestAnimationFrame","cancelFn","cancelAnimationFrame","id","clearTimeout","requestAnimFrame","immediate","cancelAnimFrame","Class","props","NewClass","Util.setOptions","this","initialize","callInitHooks","parentProto","__super__","Util.create","constructor","statics","Util.extend","includes","checkDeprecatedMixinEvents","L","Mixin","Util.isArray","Events","console","warn","stack","_initHooks","_initHooksCalled","include","parentOptions","mergeOptions","addInitHook","init","on","types","type","_on","Util.splitWords","off","_off","removeAll","_events","_once","_listens","newListener","ctx","once","listeners","_firingCount","Util.falseFn","index","listener","splice","fire","propagate","listens","event","target","sourceTarget","l","_propagateEvent","_fn","_eventParents","addEventParent","Util.stamp","removeEventParent","e","layer","propagatedFrom","Evented","addEventListener","removeEventListener","clearAllEventListeners","addOneTimeEventListener","fireEvent","hasEventListeners","Point","y","trunc","v","floor","ceil","toPoint","Bounds","a","b","points","toBounds","LatLngBounds","corner1","corner2","latlngs","toLatLngBounds","LatLng","lat","lng","alt","isNaN","toLatLng","c","lon","clone","add","point","_add","subtract","_subtract","divideBy","_divideBy","multiplyBy","_multiplyBy","scaleBy","unscaleBy","_round","_floor","_ceil","_trunc","distanceTo","sqrt","equals","contains","abs","min2","max2","getCenter","getBottomLeft","getTopRight","getTopLeft","getBottomRight","getSize","intersects","bounds","xIntersects","yIntersects","overlaps","xOverlaps","yOverlaps","isValid","pad","bufferRatio","heightBuffer","widthBuffer","sw2","ne2","sw","_southWest","ne","_northEast","getSouthWest","getNorthEast","getNorthWest","getNorth","getWest","getSouthEast","getSouth","getEast","latIntersects","lngIntersects","latOverlaps","lngOverlaps","toBBoxString","maxMargin","CRS","latLngToPoint","latlng","zoom","projectedPoint","projection","project","scale","transformation","_transform","pointToLatLng","untransformedPoint","untransform","unproject","log","LN2","getProjectedBounds","infinite","s","transform","Util.formatNum","other","Earth","distance","wrap","wrapLatLng","sizeInMeters","latAccuracy","lngAccuracy","cos","PI","wrapLng","Util.wrapNum","wrapLat","wrapLatLngBounds","center","newCenter","latShift","lngShift","R","latlng1","latlng2","rad","lat1","lat2","sinDLat","sin","sinDLon","atan2","earthRadius","SphericalMercator","MAX_LATITUDE","atan","exp","Transformation","_a","_b","_c","_d","toTransformation","EPSG3857","code","EPSG900913","svgCreate","document","createElementNS","pointsToPath","rings","closed","len2","p","Browser","svg","style","documentElement","ie","ielt9","edge","navigator","webkit","userAgentContains","android","android23","webkitVer","parseInt","exec","userAgent","androidStock","opera","chrome","gecko","safari","phantom","opera12","win","platform","ie3d","webkit3d","WebKitCSSMatrix","gecko3d","any3d","L_DISABLE_3D","mobile","orientation","mobileWebkit","mobileWebkit3d","msPointer","PointerEvent","MSPointerEvent","pointer","touchNative","TouchEvent","touch","L_NO_TOUCH","mobileOpera","mobileGecko","retina","devicePixelRatio","screen","deviceXDPI","logicalXDPI","passiveEvents","supportsPassiveOption","opts","defineProperty","get","canvas","createElement","getContext","createSVGRect","inlineSvg","div","innerHTML","firstChild","namespaceURI","toLowerCase","vml","shape","behavior","adj","mac","linux","POINTER_DOWN","POINTER_MOVE","POINTER_UP","POINTER_CANCEL","pEvent","touchstart","touchmove","touchend","touchcancel","handle","handler","MSPOINTER_TYPE_TOUCH","pointerType","DomEvent.preventDefault","_handlePointer","_pointers","_pointerDocListener","addPointerListener","_globalPointerDown","_globalPointerMove","_globalPointerUp","pointerId","MSPOINTER_TYPE_MOUSE","touches","changedTouches","delay","addDoubleTapListener","detail","last","simDblclick","now","sourceCapabilities","firesTouchEvents","path","DomEvent.getPropagationPath","some","HTMLLabelElement","attributes","for","HTMLInputElement","HTMLSelectElement","prop","newEvent","isTrusted","_simulated","dblclick","_userSelect","userSelectProperty","disableTextSelection","enableTextSelection","_outlineElement","_outlineStyle","TRANSFORM","testProp","TRANSITION","TRANSITION_END","getElementById","getStyle","currentStyle","defaultView","css","getComputedStyle","tagName","className","container","appendChild","remove","parent","parentNode","removeChild","empty","toFront","lastChild","toBack","insertBefore","hasClass","classList","getClass","RegExp","test","addClass","classes","setClass","removeClass","Util.trim","baseVal","correspondingElement","setOpacity","opacity","_setOpacityIE","filter","filterName","filters","item","Enabled","Opacity","setTransform","offset","pos","setPosition","_leaflet_pos","left","top","getPosition","disableImageDrag","DomEvent.on","enableImageDrag","DomEvent.off","preventOutline","element","tabIndex","restoreOutline","outlineStyle","getSizedParentNode","offsetWidth","offsetHeight","body","getScale","rect","getBoundingClientRect","width","height","boundingClientRect","addOne","eventsKey","batchRemove","removeOne","Util.indexOf","filterFn","mouseSubst","mouseenter","mouseleave","wheel","originalHandler","passive","isExternalTarget","attachEvent","handlers","detachEvent","stopPropagation","originalEvent","_stopped","cancelBubble","disableScrollPropagation","disableClickPropagation","preventDefault","returnValue","stop","getPropagationPath","ev","composedPath","getMousePosition","clientX","clientLeft","clientY","clientTop","wheelPxFactor","getWheelDelta","wheelDeltaY","deltaY","deltaMode","deltaX","deltaZ","wheelDelta","related","relatedTarget","err","PosAnimation","run","newPos","duration","easeLinearity","_el","_inProgress","_duration","_easeOutPower","_startPos","DomUtil.getPosition","_offset","_startTime","_animate","_step","_complete","_animId","Util.requestAnimFrame","elapsed","_runFrame","_easeOut","progress","DomUtil.setPosition","Util.cancelAnimFrame","t","Map","crs","minZoom","maxZoom","layers","maxBounds","renderer","zoomAnimation","zoomAnimationThreshold","fadeAnimation","markerZoomAnimation","transform3DLimit","zoomSnap","zoomDelta","trackResize","_handlers","_layers","_zoomBoundLayers","_sizeChanged","_initContainer","_initLayout","_onResize","Util.bind","_initEvents","setMaxBounds","_zoom","_limitZoom","setView","reset","_zoomAnimated","DomUtil.TRANSITION","_createAnimProxy","_proxy","DomUtil.TRANSITION_END","_catchTransitionEnd","_addLayers","_limitCenter","_stop","_loaded","animate","pan","_tryAnimatedZoom","_tryAnimatedPan","_sizeTimer","_resetView","noMoveStart","setZoom","zoomIn","delta","zoomOut","setZoomAround","getZoomScale","viewHalf","centerOffset","latLngToContainerPoint","containerPointToLatLng","_getBoundsCenterZoom","getBounds","paddingTL","paddingTopLeft","padding","paddingBR","paddingBottomRight","getBoundsZoom","Infinity","paddingOffset","swPoint","nePoint","fitBounds","fitWorld","panTo","panBy","_panAnim","step","_onPanTransitionStep","end","_onPanTransitionEnd","DomUtil.addClass","_mapPane","_getMapPanePos","_rawPanBy","getZoom","flyTo","targetCenter","targetZoom","from","to","size","startZoom","w0","w1","u1","rho","rho2","r","sq","sinh","n","cosh","r0","u","start","S","_moveStart","frame","_flyToFrame","_move","getScaleZoom","_moveEnd","flyToBounds","_panInsideMaxBounds","setMinZoom","oldZoom","setMaxZoom","panInsideBounds","_enforcingBounds","panInside","pixelCenter","pixelPoint","pixelBounds","getPixelBounds","paddedBounds","paddedSize","invalidateSize","oldSize","newSize","_lastCenter","oldCenter","debounceMoveend","locate","onResponse","onError","_locateOptions","timeout","watch","_handleGeolocationResponse","_handleGeolocationError","_locationWatchId","geolocation","watchPosition","getCurrentPosition","message","stopLocate","clearWatch","error","_container","coords","latitude","longitude","accuracy","timestamp","addHandler","HandlerClass","enable","_containerId","DomUtil.remove","_clearControlPos","_resizeRequest","_clearHandlers","_panes","_renderer","createPane","pane","DomUtil.create","_checkIfLoaded","_moved","layerPointToLatLng","_getCenterLayerPoint","getMinZoom","_layersMinZoom","getMaxZoom","_layersMaxZoom","inside","nw","se","boundsSize","snap","scalex","scaley","_size","clientWidth","clientHeight","topLeftPoint","_getTopLeftPoint","getPixelOrigin","_pixelOrigin","getPixelWorldBounds","getPane","getPanes","getContainer","toZoom","fromZoom","latLngToLayerPoint","containerPointToLayerPoint","layerPointToContainerPoint","layerPoint","mouseEventToContainerPoint","DomEvent.getMousePosition","mouseEventToLayerPoint","mouseEventToLatLng","DomUtil.get","_onScroll","position","_fadeAnimated","DomUtil.getStyle","_initPanes","_initControlPos","panes","_paneRenderers","markerPane","shadowPane","loading","zoomChanged","supressEvent","_getNewPixelOrigin","pinch","_getZoomSpan","_targets","onOff","_handleDOMEvent","_onMoveEnd","scrollTop","scrollLeft","_findEventTargets","targets","isHover","srcElement","dragging","_draggableMoved","DomEvent.isExternalTarget","_isClickDisabled","DomUtil.preventOutline","_fireDOMEvent","_mouseEvents","canvasTargets","synth","filtered","isMarker","getLatLng","_radius","containerPoint","bubblingMouseEvents","enabled","moved","boxZoom","disable","whenReady","callback","_latLngToNewLayerPoint","topLeft","_latLngBoundsToNewLayerBounds","latLngBounds","_getCenterOffset","centerPoint","viewBounds","_getBoundsOffset","_limitOffset","newBounds","pxBounds","projectedMaxBounds","minOffset","maxOffset","_rebound","right","DomUtil.removeClass","proxy","mapPane","DomUtil.TRANSFORM","DomUtil.setTransform","_animatingZoom","_onZoomTransitionEnd","_animMoveEnd","_destroyAnimProxy","z","propertyName","_nothingToAnimate","getElementsByClassName","_animateZoom","startAnim","noUpdate","_animateToCenter","_animateToZoom","_tempFireZoomEvent","control","Control","map","_map","removeControl","addControl","addTo","onAdd","corner","_controlCorners","onRemove","_refocusOnMap","screenX","screenY","focus","Layers","corners","_controlContainer","createCorner","vSide","hSide","collapsed","autoZIndex","hideSingleBase","sortLayers","sortFunction","layerA","layerB","nameA","nameB","baseLayers","overlays","_layerControlInputs","_lastZIndex","_handlingClick","_preventClick","_addLayer","_update","_checkDisabledLayers","_onLayerChange","_expandIfNotCollapsed","addBaseLayer","addOverlay","removeLayer","_getLayer","expand","_section","acceptableHeight","offsetTop","collapse","section","setAttribute","DomEvent.disableClickPropagation","DomEvent.disableScrollPropagation","link","_expandSafely","_layersLink","href","title","keydown","keyCode","click","_baseLayersList","_separator","_overlaysList","overlay","sort","setZIndex","DomUtil.empty","baseLayersPresent","overlaysPresent","baseLayersCount","_addItem","display","_createRadioElement","checked","radioHtml","radioFragment","input","label","hasLayer","defaultChecked","layerId","_onInputClick","holder","inputs","addedLayers","removedLayers","addLayer","disabled","that","Zoom","zoomInText","zoomInTitle","zoomOutText","zoomOutTitle","zoomName","_zoomInButton","_createButton","_zoomIn","_zoomOutButton","_zoomOut","_updateDisabled","_disabled","shiftKey","html","DomEvent.stop","Scale","zoomControl","maxWidth","metric","imperial","_addScales","updateWhenIdle","_mScale","_iScale","maxMeters","_updateScales","_updateMetric","_updateImperial","meters","_getRoundNum","_updateScale","maxMiles","feet","maxFeet","miles","text","ratio","pow10","Attribution","prefix","ukrainianFlag","_attributions","attributionControl","getAttribution","addAttribution","_addAttribution","removeAttribution","setPrefix","attribs","prefixAndAttribs","Handler","attribution","_enabled","addHooks","removeHooks","START","Draggable","clickTolerance","dragStartTarget","_element","_dragStartTarget","_preventOutline","_onDown","_dragging","finishDrag","sizedParent","mouseevent","DomUtil.hasClass","which","button","DomUtil.disableImageDrag","DomUtil.disableTextSelection","_moving","first","DomUtil.getSizedParentNode","_startPoint","_parentScale","DomUtil.getScale","_onMove","_onUp","_lastTarget","SVGElementInstance","correspondingUseElement","_newPos","_lastEvent","_updatePosition","noInertia","DomUtil.enableImageDrag","DomUtil.enableTextSelection","fireDragend","clipPolygon","clippedPoints","k","edges","_code","LineUtil._getBitCode","LineUtil._getEdgeIntersection","polygonCenter","p1","p2","f","area","LineUtil.isFlat","centroidLatLng","centroid","latlngCenter","latSum","lngSum","_lastCode","simplify","tolerance","_simplifyDP","sqTolerance","reducedPoints","prev","dx","dy","markers","Uint8Array","_simplifyDPStep","sqDist","maxSqDist","_sqClosestPointOnSegment","newPoints","pointToSegmentDistance","clipSegment","useLastCode","codeOut","newCode","codeA","_getBitCode","codeB","_getEdgeIntersection","dot","isFlat","_flat","polylineCenter","halfDist","dist","segDist","LonLat","Mercator","R_MINOR","tmp","con","ts","tan","phi","dphi","EPSG3395","EPSG4326","Simple","Layer","removeFrom","_mapToAdd","addInteractiveTarget","targetEl","removeInteractiveTarget","_layerAdd","events","getEvents","LayerGroup","beforeAdd","eachLayer","method","_addZoomLimit","_updateZoomLevels","_removeZoomLimit","oldZoomSpan","getLayerId","clearLayers","invoke","methodName","getLayer","getLayers","zIndex","FeatureGroup","setStyle","bringToFront","bringToBack","Icon","popupAnchor","tooltipAnchor","crossOrigin","createIcon","oldIcon","_createIcon","createShadow","_getIconUrl","img","_createImg","_setIconStyles","sizeOption","anchor","shadowAnchor","iconAnchor","marginLeft","marginTop","IconDefault","iconUrl","iconRetinaUrl","shadowUrl","iconSize","shadowSize","imagePath","_detectIconPath","_stripUrl","strip","re","idx","match","querySelector","substring","MarkerDrag","marker","_marker","icon","_icon","_draggable","dragstart","_onDragStart","predrag","_onPreDrag","drag","_onDrag","dragend","_onDragEnd","_adjustPan","speed","autoPanSpeed","autoPanPadding","iconPos","origin","panBounds","movement","_panRequest","_oldLatLng","closePopup","autoPan","shadow","_shadow","_latlng","oldLatLng","Marker","interactive","keyboard","zIndexOffset","riseOnHover","riseOffset","autoPanOnFocus","draggable","latLng","_initIcon","update","_removeIcon","_removeShadow","viewreset","setLatLng","setZIndexOffset","getIcon","setIcon","_popup","bindPopup","getElement","_setPos","classToAdd","addIcon","newShadow","mouseover","_bringToFront","mouseout","_resetZIndex","_panOnFocus","addShadow","_updateOpacity","_initInteraction","_zIndex","_updateZIndex","opt","DomUtil.setOpacity","iconOpts","_getPopupAnchor","_getTooltipAnchor","Path","stroke","color","weight","lineCap","lineJoin","dashArray","dashOffset","fill","fillColor","fillOpacity","fillRule","getRenderer","_initPath","_reset","_addPath","_removePath","redraw","_updatePath","_updateStyle","_updateBounds","_bringToBack","_path","_project","_clickTolerance","CircleMarker","radius","setRadius","getRadius","_point","r2","_radiusY","w","_pxBounds","_updateCircle","_empty","_bounds","_containsPoint","Circle","legacyOptions","_mRadius","half","lngR","latR","bottom","acos","Polyline","smoothFactor","noClip","_setLatLngs","getLatLngs","_latlngs","setLatLngs","isEmpty","closestLayerPoint","minDistance","minPoint","closest","LineUtil._sqClosestPointOnSegment","jLen","_parts","LineUtil.polylineCenter","_defaultShape","addLatLng","_convertLatLngs","result","flat","_rings","_projectLatlngs","_rawPxBounds","projectedBounds","ring","_clipPoints","segment","parts","LineUtil.clipSegment","_simplifyPoints","LineUtil.simplify","_updatePoly","part","LineUtil.pointToSegmentDistance","LineUtil._flat","Polygon","PolyUtil.polygonCenter","pop","clipped","PolyUtil.clipPolygon","GeoJSON","geojson","addData","feature","features","geometries","geometry","coordinates","geometryToLayer","asFeature","defaultOptions","resetStyle","onEachFeature","_setLayerStyle","pointToLayer","_coordsToLatLng","coordsToLatLng","_pointToLayer","coordsToLatLngs","geoLayer","properties","featureLayer","pointToLayerFn","markersInheritOptions","levelsDeep","latLngToCoords","latLngsToCoords","getFeature","newGeometry","PointToGeoJSON","toGeoJSON","geoJSON","multi","holes","toMultiPoint","isGeometryCollection","jsons","json","geoJson","ImageOverlay","errorOverlayUrl","url","_url","_image","_initImage","styleOpts","DomUtil.toFront","DomUtil.toBack","setUrl","setBounds","zoomanim","wasElementSupplied","onselectstart","onmousemove","onload","onerror","_overlayOnError","image","errorUrl","VideoOverlay","autoplay","loop","keepAspectRatio","muted","playsInline","vid","onloadeddata","sourceElements","getElementsByTagName","sources","source","SVGOverlay","DivOverlay","content","_source","_content","openOn","close","toggle","_prepareOpen","_removeTimeout","getContent","setContent","visibility","_updateContent","_updateLayout","isOpen","node","_contentNode","hasChildNodes","_getAnchor","_containerBottom","_containerLeft","_containerWidth","Popup","_initOverlay","OverlayClass","old","minWidth","maxHeight","autoPanPaddingTopLeft","autoPanPaddingBottomRight","keepInView","closeButton","autoClose","closeOnEscapeKey","popup","DomEvent.stopPropagation","closeOnClick","closePopupOnClick","preclick","moveend","wrapper","_wrapper","_tipContainer","_tip","_closeButton","whiteSpace","scrolledClass","containerHeight","containerPos","_autopanning","marginBottom","containerWidth","layerPos","Tooltip","openPopup","_popupHandlersAdded","_openPopup","keypress","_onKeyPress","move","_movePopup","unbindPopup","togglePopup","isPopupOpen","setPopupContent","getPopup","direction","permanent","sticky","tooltip","_setPosition","subX","tooltipPoint","tooltipWidth","tooltipHeight","subY","DivIcon","openTooltip","closeTooltip","bindTooltip","_tooltip","isTooltipOpen","unbindTooltip","_initTooltipInteractions","_tooltipHandlersAdded","_moveTooltip","_openTooltip","_addFocusListeners","mousemove","_setAriaDescribedByOnLayer","toggleTooltip","setTooltipContent","getTooltip","_addFocusListenersOnLayer","moving","_openOnceFlag","bgPos","Element","backgroundPosition","Default","GridLayer","tileSize","updateWhenZooming","updateInterval","maxNativeZoom","minNativeZoom","noWrap","keepBuffer","_levels","_tiles","_removeAllTiles","_tileZoom","_setAutoZIndex","isLoading","_loading","tileZoom","_clampZoom","_updateLevels","viewprereset","_invalidateAll","Util.throttle","createTile","getTileSize","compare","children","edgeZIndex","isFinite","nextFrame","willPrune","fade","tile","current","loaded","active","_onOpaqueTile","_noPrune","_pruneTiles","_fadeFrame","Number","_onUpdateLevel","_removeTilesAtZoom","_onRemoveLevel","level","_setZoomTransform","_onCreateLevel","_level","retain","_retainParent","_retainChildren","_removeTile","x2","y2","z2","coords2","_tileCoordsToKey","animating","_setView","noPrune","tileZoomChanged","_abortLoading","_resetGrid","_setZoomTransforms","translate","_tileSize","_globalTileRange","_pxBoundsToTileRange","_wrapX","_wrapY","_getTiledPixelBounds","mapZoom","halfSize","tileRange","tileCenter","queue","margin","noPruneRange","_isValidTile","fragment","createDocumentFragment","_addTile","tileBounds","_tileCoordsToBounds","_keyToBounds","_keyToTileCoords","_tileCoordsToNwSe","nwPoint","sePoint","bp","_initTile","tilePos","_getTilePos","_wrapCoords","_tileReady","_noTilesToLoad","newCoords","TileLayer","subdomains","errorTileUrl","zoomOffset","tms","zoomReverse","detectRetina","referrerPolicy","_onTileRemove","noRedraw","done","_tileOnLoad","_tileOnError","getTileUrl","_getSubdomain","_getZoomForUrl","invertedY","Util.template","getAttribute","tilePoint","complete","Util.emptyImageUrl","tileLayer","TileLayerWMS","defaultWmsParams","service","request","styles","format","transparent","version","wmsParams","realRetina","_crs","_wmsVersion","parseFloat","projectionKey","bbox","setParams","WMS","wms","Renderer","_updatePaths","_destroyContainer","_onZoom","zoomend","_onZoomEnd","_onAnimZoom","_updateTransform","currentCenterPoint","_center","topLeftOffset","Canvas","_onViewPreReset","_postponeUpdatePaths","_draw","_onMouseMove","_onClick","_handleMouseOut","_ctx","_redrawRequest","_redrawBounds","_redraw","m","_updateDashArray","order","_order","_drawLast","next","_drawFirst","_requestRedraw","_extendRedrawBounds","dashValue","_dashArray","_clear","clearRect","save","restore","beginPath","clip","_drawing","closePath","_fillStroke","arc","globalAlpha","fillStyle","setLineDash","lineWidth","strokeStyle","clickedLayer","_fireEvent","_handleMouseHover","_hoveredLayer","_mouseHoverThrottled","candidateHoveredLayer","vmlCreate","namespaces","vmlMixin","coordsize","_stroke","_fill","stroked","filled","dashStyle","endcap","joinstyle","_setPath","SVG","_rootGroup","_svgSize","removeAttribute","_getPaneRenderer","_createRenderer","preferCanvas","Rectangle","_boundsToLatLngs","BoxZoom","_pane","overlayPane","_resetStateTimeout","_destroy","_onMouseDown","_resetState","_clearDeferredResetState","contextmenu","mouseup","_onMouseUp","_onKeyDown","_box","_finish","boxZoomBounds","DoubleClickZoom","doubleClickZoom","_onDoubleClick","Drag","inertia","inertiaDeceleration","inertiaMaxSpeed","worldCopyJump","maxBoundsViscosity","_onPreDragLimit","_onPreDragWrap","_positions","_times","_offsetLimit","_viscosity","_lastTime","_lastPos","_absPos","_prunePositions","shift","pxCenter","pxWorldCenter","_initialWorldOffset","_worldWidth","_viscousLimit","threshold","limit","worldWidth","halfWidth","newX1","newX2","newX","ease","limitedSpeed","decelerationDuration","speedVector","limitedSpeedVector","Keyboard","keyboardPanDelta","keyCodes","down","up","_setPanDelta","_setZoomDelta","_onFocus","blur","_onBlur","mousedown","_addHooks","_removeHooks","docEl","_focused","scrollTo","panDelta","keys","_panKeys","codes","_zoomKeys","altKey","ctrlKey","metaKey","newLatLng","ScrollWheelZoom","scrollWheelZoom","wheelDebounceTime","wheelPxPerZoomLevel","_onWheelScroll","_delta","DomEvent.getWheelDelta","debounce","_lastMousePos","_timer","_performZoom","d2","d3","d4","TapHold","tapHold","tapTolerance","_holdTimeout","_cancel","_isTapValid","_cancelClickPrevent","_simulateEvent","cancelClickPrevent","simulatedEvent","MouseEvent","bubbles","cancelable","view","dispatchEvent","TouchZoom","touchZoom","bounceAtZoomLimits","_onTouchStart","_zooming","_centerPoint","_startLatLng","_pinchStartLatLng","_startDist","_startZoom","_onTouchMove","_onTouchEnd","_animRequest","moveFn","video"],"mappings":"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"}
/*
 Leaflet.markercluster, Provides Beautiful Animated Marker Clustering functionality for Leaflet, a JS library for interactive maps.
 https://github.com/Leaflet/Leaflet.markercluster
 (c) 2012-2013, Dave Leaver, smartrak
*/
!function(e,t,i){L.MarkerClusterGroup=L.FeatureGroup.extend({options:{maxClusterRadius:80,iconCreateFunction:null,spiderfyOnMaxZoom:!0,showCoverageOnHover:!0,zoomToBoundsOnClick:!0,singleMarkerMode:!1,disableClusteringAtZoom:null,removeOutsideVisibleBounds:!0,animate:!0,animateAddingMarkers:!1,spiderfyDistanceMultiplier:1,spiderLegPolylineOptions:{weight:1.5,color:"#222",opacity:.5},chunkedLoading:!1,chunkInterval:200,chunkDelay:50,chunkProgress:null,polygonOptions:{}},initialize:function(e){L.Util.setOptions(this,e),this.options.iconCreateFunction||(this.options.iconCreateFunction=this._defaultIconCreateFunction),this._featureGroup=L.featureGroup(),this._featureGroup.addEventParent(this),this._nonPointGroup=L.featureGroup(),this._nonPointGroup.addEventParent(this),this._inZoomAnimation=0,this._needsClustering=[],this._needsRemoving=[],this._currentShownBounds=null,this._queue=[];var t=L.DomUtil.TRANSITION&&this.options.animate;L.extend(this,t?this._withAnimation:this._noAnimation),this._markerCluster=t?L.MarkerCluster:L.MarkerClusterNonAnimated},addLayer:function(e){if(e instanceof L.LayerGroup)return this.addLayers([e]);if(!e.getLatLng)return this._nonPointGroup.addLayer(e),this;if(!this._map)return this._needsClustering.push(e),this;if(this.hasLayer(e))return this;this._unspiderfy&&this._unspiderfy(),this._addLayer(e,this._maxZoom),this._topClusterLevel._recalculateBounds();var t=e,i=this._map.getZoom();if(e.__parent)for(;t.__parent._zoom>=i;)t=t.__parent;return this._currentShownBounds.contains(t.getLatLng())&&(this.options.animateAddingMarkers?this._animationAddLayer(e,t):this._animationAddLayerNonAnimated(e,t)),this},removeLayer:function(e){return e instanceof L.LayerGroup?this.removeLayers([e]):e.getLatLng?this._map?e.__parent?(this._unspiderfy&&(this._unspiderfy(),this._unspiderfyLayer(e)),this._removeLayer(e,!0),this._topClusterLevel._recalculateBounds(),e.off("move",this._childMarkerMoved,this),this._featureGroup.hasLayer(e)&&(this._featureGroup.removeLayer(e),e.clusterShow&&e.clusterShow()),this):this:(!this._arraySplice(this._needsClustering,e)&&this.hasLayer(e)&&this._needsRemoving.push(e),this):(this._nonPointGroup.removeLayer(e),this)},addLayers:function(e){if(!L.Util.isArray(e))return this.addLayer(e);var t,i=this._featureGroup,n=this._nonPointGroup,s=this.options.chunkedLoading,r=this.options.chunkInterval,o=this.options.chunkProgress,a=e.length,h=0,u=!0;if(this._map){var l=(new Date).getTime(),_=L.bind(function(){for(var d=(new Date).getTime();a>h;h++){if(s&&0===h%200){var c=(new Date).getTime()-d;if(c>r)break}if(t=e[h],t instanceof L.LayerGroup)u&&(e=e.slice(),u=!1),this._extractNonGroupLayers(t,e),a=e.length;else if(t.getLatLng){if(!this.hasLayer(t)&&(this._addLayer(t,this._maxZoom),t.__parent&&2===t.__parent.getChildCount())){var p=t.__parent.getAllChildMarkers(),f=p[0]===t?p[1]:p[0];i.removeLayer(f)}}else n.addLayer(t)}o&&o(h,a,(new Date).getTime()-l),h===a?(this._topClusterLevel._recalculateBounds(),this._featureGroup.eachLayer(function(e){e instanceof L.MarkerCluster&&e._iconNeedsUpdate&&e._updateIcon()}),this._topClusterLevel._recursivelyAddChildrenToMap(null,this._zoom,this._currentShownBounds)):setTimeout(_,this.options.chunkDelay)},this);_()}else for(var d=this._needsClustering;a>h;h++)t=e[h],t instanceof L.LayerGroup?(u&&(e=e.slice(),u=!1),this._extractNonGroupLayers(t,e),a=e.length):t.getLatLng?this.hasLayer(t)||d.push(t):n.addLayer(t);return this},removeLayers:function(e){var t,i,n=e.length,s=this._featureGroup,r=this._nonPointGroup,o=!0;if(!this._map){for(t=0;n>t;t++)i=e[t],i instanceof L.LayerGroup?(o&&(e=e.slice(),o=!1),this._extractNonGroupLayers(i,e),n=e.length):(this._arraySplice(this._needsClustering,i),r.removeLayer(i),this.hasLayer(i)&&this._needsRemoving.push(i));return this}if(this._unspiderfy){this._unspiderfy();var a=e.slice(),h=n;for(t=0;h>t;t++)i=a[t],i instanceof L.LayerGroup?(this._extractNonGroupLayers(i,a),h=a.length):this._unspiderfyLayer(i)}for(t=0;n>t;t++)i=e[t],i instanceof L.LayerGroup?(o&&(e=e.slice(),o=!1),this._extractNonGroupLayers(i,e),n=e.length):i.__parent?(this._removeLayer(i,!0,!0),s.hasLayer(i)&&(s.removeLayer(i),i.clusterShow&&i.clusterShow())):r.removeLayer(i);return this._topClusterLevel._recalculateBounds(),this._topClusterLevel._recursivelyAddChildrenToMap(null,this._zoom,this._currentShownBounds),s.eachLayer(function(e){e instanceof L.MarkerCluster&&e._updateIcon()}),this},clearLayers:function(){return this._map||(this._needsClustering=[],delete this._gridClusters,delete this._gridUnclustered),this._noanimationUnspiderfy&&this._noanimationUnspiderfy(),this._featureGroup.clearLayers(),this._nonPointGroup.clearLayers(),this.eachLayer(function(e){e.off("move",this._childMarkerMoved,this),delete e.__parent}),this._map&&this._generateInitialClusters(),this},getBounds:function(){var e=new L.LatLngBounds;this._topClusterLevel&&e.extend(this._topClusterLevel._bounds);for(var t=this._needsClustering.length-1;t>=0;t--)e.extend(this._needsClustering[t].getLatLng());return e.extend(this._nonPointGroup.getBounds()),e},eachLayer:function(e,t){var i,n=this._needsClustering.slice(),s=this._needsRemoving;for(this._topClusterLevel&&this._topClusterLevel.getAllChildMarkers(n),i=n.length-1;i>=0;i--)-1===s.indexOf(n[i])&&e.call(t,n[i]);this._nonPointGroup.eachLayer(e,t)},getLayers:function(){var e=[];return this.eachLayer(function(t){e.push(t)}),e},getLayer:function(e){var t=null;return e=parseInt(e,10),this.eachLayer(function(i){L.stamp(i)===e&&(t=i)}),t},hasLayer:function(e){if(!e)return!1;var t,i=this._needsClustering;for(t=i.length-1;t>=0;t--)if(i[t]===e)return!0;for(i=this._needsRemoving,t=i.length-1;t>=0;t--)if(i[t]===e)return!1;return!(!e.__parent||e.__parent._group!==this)||this._nonPointGroup.hasLayer(e)},zoomToShowLayer:function(e,t){"function"!=typeof t&&(t=function(){});var i=function(){!e._icon&&!e.__parent._icon||this._inZoomAnimation||(this._map.off("moveend",i,this),this.off("animationend",i,this),e._icon?t():e.__parent._icon&&(this.once("spiderfied",t,this),e.__parent.spiderfy()))};if(e._icon&&this._map.getBounds().contains(e.getLatLng()))t();else if(e.__parent._zoom<this._map.getZoom())this._map.on("moveend",i,this),this._map.panTo(e.getLatLng());else{var n=function(){this._map.off("movestart",n,this),n=null};this._map.on("movestart",n,this),this._map.on("moveend",i,this),this.on("animationend",i,this),e.__parent.zoomToBounds(),n&&i.call(this)}},onAdd:function(e){this._map=e;var t,i,n;if(!isFinite(this._map.getMaxZoom()))throw"Map has no maxZoom specified";for(this._featureGroup.addTo(e),this._nonPointGroup.addTo(e),this._gridClusters||this._generateInitialClusters(),this._maxLat=e.options.crs.projection.MAX_LATITUDE,t=0,i=this._needsRemoving.length;i>t;t++)n=this._needsRemoving[t],this._removeLayer(n,!0);this._needsRemoving=[],this._zoom=this._map.getZoom(),this._currentShownBounds=this._getExpandedVisibleBounds(),this._map.on("zoomend",this._zoomEnd,this),this._map.on("moveend",this._moveEnd,this),this._spiderfierOnAdd&&this._spiderfierOnAdd(),this._bindEvents(),i=this._needsClustering,this._needsClustering=[],this.addLayers(i)},onRemove:function(e){e.off("zoomend",this._zoomEnd,this),e.off("moveend",this._moveEnd,this),this._unbindEvents(),this._map._mapPane.className=this._map._mapPane.className.replace(" leaflet-cluster-anim",""),this._spiderfierOnRemove&&this._spiderfierOnRemove(),delete this._maxLat,this._hideCoverage(),this._featureGroup.remove(),this._nonPointGroup.remove(),this._featureGroup.clearLayers(),this._map=null},getVisibleParent:function(e){for(var t=e;t&&!t._icon;)t=t.__parent;return t||null},_arraySplice:function(e,t){for(var i=e.length-1;i>=0;i--)if(e[i]===t)return e.splice(i,1),!0},_removeFromGridUnclustered:function(e,t){for(var i=this._map,n=this._gridUnclustered;t>=0&&n[t].removeObject(e,i.project(e.getLatLng(),t));t--);},_childMarkerMoved:function(e){this._ignoreMove||(e.target._latlng=e.oldLatLng,this.removeLayer(e.target),e.target._latlng=e.latlng,this.addLayer(e.target))},_removeLayer:function(e,t,i){var n=this._gridClusters,s=this._gridUnclustered,r=this._featureGroup,o=this._map;t&&this._removeFromGridUnclustered(e,this._maxZoom);var a,h=e.__parent,u=h._markers;for(this._arraySplice(u,e);h&&(h._childCount--,h._boundsNeedUpdate=!0,!(h._zoom<0));)t&&h._childCount<=1?(a=h._markers[0]===e?h._markers[1]:h._markers[0],n[h._zoom].removeObject(h,o.project(h._cLatLng,h._zoom)),s[h._zoom].addObject(a,o.project(a.getLatLng(),h._zoom)),this._arraySplice(h.__parent._childClusters,h),h.__parent._markers.push(a),a.__parent=h.__parent,h._icon&&(r.removeLayer(h),i||r.addLayer(a))):i&&h._icon||h._updateIcon(),h=h.__parent;delete e.__parent},_isOrIsParent:function(e,t){for(;t;){if(e===t)return!0;t=t.parentNode}return!1},fire:function(e,t,i){if(t&&t.layer instanceof L.MarkerCluster){if(t.originalEvent&&this._isOrIsParent(t.layer._icon,t.originalEvent.relatedTarget))return;e="cluster"+e}L.FeatureGroup.prototype.fire.call(this,e,t,i)},listens:function(e,t){return L.FeatureGroup.prototype.listens.call(this,e,t)||L.FeatureGroup.prototype.listens.call(this,"cluster"+e,t)},_defaultIconCreateFunction:function(e){var t=e.getChildCount(),i=" marker-cluster-";return i+=10>t?"small":100>t?"medium":"large",new L.DivIcon({html:"<div><span>"+t+"</span></div>",className:"marker-cluster"+i,iconSize:new L.Point(40,40)})},_bindEvents:function(){var e=this._map,t=this.options.spiderfyOnMaxZoom,i=this.options.showCoverageOnHover,n=this.options.zoomToBoundsOnClick;(t||n)&&this.on("clusterclick",this._zoomOrSpiderfy,this),i&&(this.on("clustermouseover",this._showCoverage,this),this.on("clustermouseout",this._hideCoverage,this),e.on("zoomend",this._hideCoverage,this))},_zoomOrSpiderfy:function(e){for(var t=e.layer,i=t;1===i._childClusters.length;)i=i._childClusters[0];i._zoom===this._maxZoom&&i._childCount===t._childCount&&this.options.spiderfyOnMaxZoom?t.spiderfy():this.options.zoomToBoundsOnClick&&t.zoomToBounds(),e.originalEvent&&13===e.originalEvent.keyCode&&this._map._container.focus()},_showCoverage:function(e){var t=this._map;this._inZoomAnimation||(this._shownPolygon&&t.removeLayer(this._shownPolygon),e.layer.getChildCount()>2&&e.layer!==this._spiderfied&&(this._shownPolygon=new L.Polygon(e.layer.getConvexHull(),this.options.polygonOptions),t.addLayer(this._shownPolygon)))},_hideCoverage:function(){this._shownPolygon&&(this._map.removeLayer(this._shownPolygon),this._shownPolygon=null)},_unbindEvents:function(){var e=this.options.spiderfyOnMaxZoom,t=this.options.showCoverageOnHover,i=this.options.zoomToBoundsOnClick,n=this._map;(e||i)&&this.off("clusterclick",this._zoomOrSpiderfy,this),t&&(this.off("clustermouseover",this._showCoverage,this),this.off("clustermouseout",this._hideCoverage,this),n.off("zoomend",this._hideCoverage,this))},_zoomEnd:function(){this._map&&(this._mergeSplitClusters(),this._zoom=Math.round(this._map._zoom),this._currentShownBounds=this._getExpandedVisibleBounds())},_moveEnd:function(){if(!this._inZoomAnimation){var e=this._getExpandedVisibleBounds();this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds,this._zoom,e),this._topClusterLevel._recursivelyAddChildrenToMap(null,Math.round(this._map._zoom),e),this._currentShownBounds=e}},_generateInitialClusters:function(){var e=this._map.getMaxZoom(),t=this.options.maxClusterRadius,i=t;"function"!=typeof t&&(i=function(){return t}),this.options.disableClusteringAtZoom&&(e=this.options.disableClusteringAtZoom-1),this._maxZoom=e,this._gridClusters={},this._gridUnclustered={};for(var n=e;n>=0;n--)this._gridClusters[n]=new L.DistanceGrid(i(n)),this._gridUnclustered[n]=new L.DistanceGrid(i(n));this._topClusterLevel=new this._markerCluster(this,-1)},_addLayer:function(e,t){var i,n,s=this._gridClusters,r=this._gridUnclustered;for(this.options.singleMarkerMode&&this._overrideMarkerIcon(e),e.on("move",this._childMarkerMoved,this);t>=0;t--){i=this._map.project(e.getLatLng(),t);var o=s[t].getNearObject(i);if(o)return o._addChild(e),e.__parent=o,void 0;if(o=r[t].getNearObject(i)){var a=o.__parent;a&&this._removeLayer(o,!1);var h=new this._markerCluster(this,t,o,e);s[t].addObject(h,this._map.project(h._cLatLng,t)),o.__parent=h,e.__parent=h;var u=h;for(n=t-1;n>a._zoom;n--)u=new this._markerCluster(this,n,u),s[n].addObject(u,this._map.project(o.getLatLng(),n));return a._addChild(u),this._removeFromGridUnclustered(o,t),void 0}r[t].addObject(e,i)}this._topClusterLevel._addChild(e),e.__parent=this._topClusterLevel},_enqueue:function(e){this._queue.push(e),this._queueTimeout||(this._queueTimeout=setTimeout(L.bind(this._processQueue,this),300))},_processQueue:function(){for(var e=0;e<this._queue.length;e++)this._queue[e].call(this);this._queue.length=0,clearTimeout(this._queueTimeout),this._queueTimeout=null},_mergeSplitClusters:function(){var e=Math.round(this._map._zoom);this._processQueue(),this._zoom<e&&this._currentShownBounds.intersects(this._getExpandedVisibleBounds())?(this._animationStart(),this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds,this._zoom,this._getExpandedVisibleBounds()),this._animationZoomIn(this._zoom,e)):this._zoom>e?(this._animationStart(),this._animationZoomOut(this._zoom,e)):this._moveEnd()},_getExpandedVisibleBounds:function(){return this.options.removeOutsideVisibleBounds?L.Browser.mobile?this._checkBoundsMaxLat(this._map.getBounds()):this._checkBoundsMaxLat(this._map.getBounds().pad(1)):this._mapBoundsInfinite},_checkBoundsMaxLat:function(e){var t=this._maxLat;return t!==i&&(e.getNorth()>=t&&(e._northEast.lat=1/0),e.getSouth()<=-t&&(e._southWest.lat=-1/0)),e},_animationAddLayerNonAnimated:function(e,t){if(t===e)this._featureGroup.addLayer(e);else if(2===t._childCount){t._addToMap();var i=t.getAllChildMarkers();this._featureGroup.removeLayer(i[0]),this._featureGroup.removeLayer(i[1])}else t._updateIcon()},_extractNonGroupLayers:function(e,t){var i,n=e.getLayers(),s=0;for(t=t||[];s<n.length;s++)i=n[s],i instanceof L.LayerGroup?this._extractNonGroupLayers(i,t):t.push(i);return t},_overrideMarkerIcon:function(e){var t=e.options.icon=this.options.iconCreateFunction({getChildCount:function(){return 1},getAllChildMarkers:function(){return[e]}});return t}}),L.MarkerClusterGroup.include({_mapBoundsInfinite:new L.LatLngBounds(new L.LatLng(-1/0,-1/0),new L.LatLng(1/0,1/0))}),L.MarkerClusterGroup.include({_noAnimation:{_animationStart:function(){},_animationZoomIn:function(e,t){this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds,e),this._topClusterLevel._recursivelyAddChildrenToMap(null,t,this._getExpandedVisibleBounds()),this.fire("animationend")},_animationZoomOut:function(e,t){this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds,e),this._topClusterLevel._recursivelyAddChildrenToMap(null,t,this._getExpandedVisibleBounds()),this.fire("animationend")},_animationAddLayer:function(e,t){this._animationAddLayerNonAnimated(e,t)}},_withAnimation:{_animationStart:function(){this._map._mapPane.className+=" leaflet-cluster-anim",this._inZoomAnimation++},_animationZoomIn:function(e,t){var i,n=this._getExpandedVisibleBounds(),s=this._featureGroup;this._ignoreMove=!0,this._topClusterLevel._recursively(n,e,0,function(r){var o,a=r._latlng,h=r._markers;for(n.contains(a)||(a=null),r._isSingleParent()&&e+1===t?(s.removeLayer(r),r._recursivelyAddChildrenToMap(null,t,n)):(r.clusterHide(),r._recursivelyAddChildrenToMap(a,t,n)),i=h.length-1;i>=0;i--)o=h[i],n.contains(o._latlng)||s.removeLayer(o)}),this._forceLayout(),this._topClusterLevel._recursivelyBecomeVisible(n,t),s.eachLayer(function(e){e instanceof L.MarkerCluster||!e._icon||e.clusterShow()}),this._topClusterLevel._recursively(n,e,t,function(e){e._recursivelyRestoreChildPositions(t)}),this._ignoreMove=!1,this._enqueue(function(){this._topClusterLevel._recursively(n,e,0,function(e){s.removeLayer(e),e.clusterShow()}),this._animationEnd()})},_animationZoomOut:function(e,t){this._animationZoomOutSingle(this._topClusterLevel,e-1,t),this._topClusterLevel._recursivelyAddChildrenToMap(null,t,this._getExpandedVisibleBounds()),this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds,e,this._getExpandedVisibleBounds())},_animationAddLayer:function(e,t){var i=this,n=this._featureGroup;n.addLayer(e),t!==e&&(t._childCount>2?(t._updateIcon(),this._forceLayout(),this._animationStart(),e._setPos(this._map.latLngToLayerPoint(t.getLatLng())),e.clusterHide(),this._enqueue(function(){n.removeLayer(e),e.clusterShow(),i._animationEnd()})):(this._forceLayout(),i._animationStart(),i._animationZoomOutSingle(t,this._map.getMaxZoom(),this._map.getZoom())))}},_animationZoomOutSingle:function(e,t,i){var n=this._getExpandedVisibleBounds();e._recursivelyAnimateChildrenInAndAddSelfToMap(n,t+1,i);var s=this;this._forceLayout(),e._recursivelyBecomeVisible(n,i),this._enqueue(function(){if(1===e._childCount){var r=e._markers[0];this._ignoreMove=!0,r.setLatLng(r.getLatLng()),this._ignoreMove=!1,r.clusterShow&&r.clusterShow()}else e._recursively(n,i,0,function(e){e._recursivelyRemoveChildrenFromMap(n,t+1)});s._animationEnd()})},_animationEnd:function(){this._map&&(this._map._mapPane.className=this._map._mapPane.className.replace(" leaflet-cluster-anim","")),this._inZoomAnimation--,this.fire("animationend")},_forceLayout:function(){L.Util.falseFn(t.body.offsetWidth)}}),L.markerClusterGroup=function(e){return new L.MarkerClusterGroup(e)},L.MarkerCluster=L.Marker.extend({initialize:function(e,t,i,n){L.Marker.prototype.initialize.call(this,i?i._cLatLng||i.getLatLng():new L.LatLng(0,0),{icon:this}),this._group=e,this._zoom=t,this._markers=[],this._childClusters=[],this._childCount=0,this._iconNeedsUpdate=!0,this._boundsNeedUpdate=!0,this._bounds=new L.LatLngBounds,i&&this._addChild(i),n&&this._addChild(n)},getAllChildMarkers:function(e){e=e||[];for(var t=this._childClusters.length-1;t>=0;t--)this._childClusters[t].getAllChildMarkers(e);for(var i=this._markers.length-1;i>=0;i--)e.push(this._markers[i]);return e},getChildCount:function(){return this._childCount},zoomToBounds:function(){for(var e,t=this._childClusters.slice(),i=this._group._map,n=i.getBoundsZoom(this._bounds),s=this._zoom+1,r=i.getZoom();t.length>0&&n>s;){s++;var o=[];for(e=0;e<t.length;e++)o=o.concat(t[e]._childClusters);t=o}n>s?this._group._map.setView(this._latlng,s):r>=n?this._group._map.setView(this._latlng,r+1):this._group._map.fitBounds(this._bounds)},getBounds:function(){var e=new L.LatLngBounds;return e.extend(this._bounds),e},_updateIcon:function(){this._iconNeedsUpdate=!0,this._icon&&this.setIcon(this)},createIcon:function(){return this._iconNeedsUpdate&&(this._iconObj=this._group.options.iconCreateFunction(this),this._iconNeedsUpdate=!1),this._iconObj.createIcon()},createShadow:function(){return this._iconObj.createShadow()},_addChild:function(e,t){this._iconNeedsUpdate=!0,this._boundsNeedUpdate=!0,this._setClusterCenter(e),e instanceof L.MarkerCluster?(t||(this._childClusters.push(e),e.__parent=this),this._childCount+=e._childCount):(t||this._markers.push(e),this._childCount++),this.__parent&&this.__parent._addChild(e,!0)},_setClusterCenter:function(e){this._cLatLng||(this._cLatLng=e._cLatLng||e._latlng)},_resetBounds:function(){var e=this._bounds;e._southWest&&(e._southWest.lat=1/0,e._southWest.lng=1/0),e._northEast&&(e._northEast.lat=-1/0,e._northEast.lng=-1/0)},_recalculateBounds:function(){var e,t,i,n,s=this._markers,r=this._childClusters,o=0,a=0,h=this._childCount;if(0!==h){for(this._resetBounds(),e=0;e<s.length;e++)i=s[e]._latlng,this._bounds.extend(i),o+=i.lat,a+=i.lng;for(e=0;e<r.length;e++)t=r[e],t._boundsNeedUpdate&&t._recalculateBounds(),this._bounds.extend(t._bounds),i=t._wLatLng,n=t._childCount,o+=i.lat*n,a+=i.lng*n;this._latlng=this._wLatLng=new L.LatLng(o/h,a/h),this._boundsNeedUpdate=!1}},_addToMap:function(e){e&&(this._backupLatlng=this._latlng,this.setLatLng(e)),this._group._featureGroup.addLayer(this)},_recursivelyAnimateChildrenIn:function(e,t,i){this._recursively(e,0,i-1,function(e){var i,n,s=e._markers;for(i=s.length-1;i>=0;i--)n=s[i],n._icon&&(n._setPos(t),n.clusterHide())},function(e){var i,n,s=e._childClusters;for(i=s.length-1;i>=0;i--)n=s[i],n._icon&&(n._setPos(t),n.clusterHide())})},_recursivelyAnimateChildrenInAndAddSelfToMap:function(e,t,i){this._recursively(e,i,0,function(n){n._recursivelyAnimateChildrenIn(e,n._group._map.latLngToLayerPoint(n.getLatLng()).round(),t),n._isSingleParent()&&t-1===i?(n.clusterShow(),n._recursivelyRemoveChildrenFromMap(e,t)):n.clusterHide(),n._addToMap()})},_recursivelyBecomeVisible:function(e,t){this._recursively(e,0,t,null,function(e){e.clusterShow()})},_recursivelyAddChildrenToMap:function(e,t,i){this._recursively(i,-1,t,function(n){if(t!==n._zoom)for(var s=n._markers.length-1;s>=0;s--){var r=n._markers[s];i.contains(r._latlng)&&(e&&(r._backupLatlng=r.getLatLng(),r.setLatLng(e),r.clusterHide&&r.clusterHide()),n._group._featureGroup.addLayer(r))}},function(t){t._addToMap(e)})},_recursivelyRestoreChildPositions:function(e){for(var t=this._markers.length-1;t>=0;t--){var i=this._markers[t];i._backupLatlng&&(i.setLatLng(i._backupLatlng),delete i._backupLatlng)}if(e-1===this._zoom)for(var n=this._childClusters.length-1;n>=0;n--)this._childClusters[n]._restorePosition();else for(var s=this._childClusters.length-1;s>=0;s--)this._childClusters[s]._recursivelyRestoreChildPositions(e)},_restorePosition:function(){this._backupLatlng&&(this.setLatLng(this._backupLatlng),delete this._backupLatlng)},_recursivelyRemoveChildrenFromMap:function(e,t,i){var n,s;this._recursively(e,-1,t-1,function(e){for(s=e._markers.length-1;s>=0;s--)n=e._markers[s],i&&i.contains(n._latlng)||(e._group._featureGroup.removeLayer(n),n.clusterShow&&n.clusterShow())},function(e){for(s=e._childClusters.length-1;s>=0;s--)n=e._childClusters[s],i&&i.contains(n._latlng)||(e._group._featureGroup.removeLayer(n),n.clusterShow&&n.clusterShow())})},_recursively:function(e,t,i,n,s){var r,o,a=this._childClusters,h=this._zoom;if(t>h)for(r=a.length-1;r>=0;r--)o=a[r],e.intersects(o._bounds)&&o._recursively(e,t,i,n,s);else if(n&&n(this),s&&this._zoom===i&&s(this),i>h)for(r=a.length-1;r>=0;r--)o=a[r],e.intersects(o._bounds)&&o._recursively(e,t,i,n,s)},_isSingleParent:function(){return this._childClusters.length>0&&this._childClusters[0]._childCount===this._childCount}}),L.Marker.include({clusterHide:function(){return this.options.opacityWhenUnclustered=this.options.opacity||1,this.setOpacity(0)},clusterShow:function(){var e=this.setOpacity(this.options.opacity||this.options.opacityWhenUnclustered);return delete this.options.opacityWhenUnclustered,e}}),L.DistanceGrid=function(e){this._cellSize=e,this._sqCellSize=e*e,this._grid={},this._objectPoint={}},L.DistanceGrid.prototype={addObject:function(e,t){var i=this._getCoord(t.x),n=this._getCoord(t.y),s=this._grid,r=s[n]=s[n]||{},o=r[i]=r[i]||[],a=L.Util.stamp(e);this._objectPoint[a]=t,o.push(e)},updateObject:function(e,t){this.removeObject(e),this.addObject(e,t)},removeObject:function(e,t){var i,n,s=this._getCoord(t.x),r=this._getCoord(t.y),o=this._grid,a=o[r]=o[r]||{},h=a[s]=a[s]||[];for(delete this._objectPoint[L.Util.stamp(e)],i=0,n=h.length;n>i;i++)if(h[i]===e)return h.splice(i,1),1===n&&delete a[s],!0},eachObject:function(e,t){var i,n,s,r,o,a,h,u=this._grid;for(i in u){o=u[i];for(n in o)for(a=o[n],s=0,r=a.length;r>s;s++)h=e.call(t,a[s]),h&&(s--,r--)}},getNearObject:function(e){var t,i,n,s,r,o,a,h,u=this._getCoord(e.x),l=this._getCoord(e.y),_=this._objectPoint,d=this._sqCellSize,c=null;for(t=l-1;l+1>=t;t++)if(s=this._grid[t])for(i=u-1;u+1>=i;i++)if(r=s[i])for(n=0,o=r.length;o>n;n++)a=r[n],h=this._sqDist(_[L.Util.stamp(a)],e),d>h&&(d=h,c=a);return c},_getCoord:function(e){return Math.floor(e/this._cellSize)},_sqDist:function(e,t){var i=t.x-e.x,n=t.y-e.y;return i*i+n*n}},function(){L.QuickHull={getDistant:function(e,t){var i=t[1].lat-t[0].lat,n=t[0].lng-t[1].lng;return n*(e.lat-t[0].lat)+i*(e.lng-t[0].lng)},findMostDistantPointFromBaseLine:function(e,t){var i,n,s,r=0,o=null,a=[];for(i=t.length-1;i>=0;i--)n=t[i],s=this.getDistant(n,e),s>0&&(a.push(n),s>r&&(r=s,o=n));return{maxPoint:o,newPoints:a}},buildConvexHull:function(e,t){var i=[],n=this.findMostDistantPointFromBaseLine(e,t);return n.maxPoint?(i=i.concat(this.buildConvexHull([e[0],n.maxPoint],n.newPoints)),i=i.concat(this.buildConvexHull([n.maxPoint,e[1]],n.newPoints))):[e[0]]},getConvexHull:function(e){var t,i=!1,n=!1,s=!1,r=!1,o=null,a=null,h=null,u=null,l=null,_=null;for(t=e.length-1;t>=0;t--){var d=e[t];(i===!1||d.lat>i)&&(o=d,i=d.lat),(n===!1||d.lat<n)&&(a=d,n=d.lat),(s===!1||d.lng>s)&&(h=d,s=d.lng),(r===!1||d.lng<r)&&(u=d,r=d.lng)}n!==i?(_=a,l=o):(_=u,l=h);var c=[].concat(this.buildConvexHull([_,l],e),this.buildConvexHull([l,_],e));return c}}}(),L.MarkerCluster.include({getConvexHull:function(){var e,t,i=this.getAllChildMarkers(),n=[];for(t=i.length-1;t>=0;t--)e=i[t].getLatLng(),n.push(e);return L.QuickHull.getConvexHull(n)}}),L.MarkerCluster.include({_2PI:2*Math.PI,_circleFootSeparation:25,_circleStartAngle:Math.PI/6,_spiralFootSeparation:28,_spiralLengthStart:11,_spiralLengthFactor:5,_circleSpiralSwitchover:9,spiderfy:function(){if(this._group._spiderfied!==this&&!this._group._inZoomAnimation){var e,t=this.getAllChildMarkers(),i=this._group,n=i._map,s=n.latLngToLayerPoint(this._latlng);this._group._unspiderfy(),this._group._spiderfied=this,t.length>=this._circleSpiralSwitchover?e=this._generatePointsSpiral(t.length,s):(s.y+=10,e=this._generatePointsCircle(t.length,s)),this._animationSpiderfy(t,e)}},unspiderfy:function(e){this._group._inZoomAnimation||(this._animationUnspiderfy(e),this._group._spiderfied=null)},_generatePointsCircle:function(e,t){var i,n,s=this._group.options.spiderfyDistanceMultiplier*this._circleFootSeparation*(2+e),r=s/this._2PI,o=this._2PI/e,a=[];for(a.length=e,i=e-1;i>=0;i--)n=this._circleStartAngle+i*o,a[i]=new L.Point(t.x+r*Math.cos(n),t.y+r*Math.sin(n))._round();return a},_generatePointsSpiral:function(e,t){var i,n=this._group.options.spiderfyDistanceMultiplier,s=n*this._spiralLengthStart,r=n*this._spiralFootSeparation,o=n*this._spiralLengthFactor*this._2PI,a=0,h=[];for(h.length=e,i=e-1;i>=0;i--)a+=r/s+5e-4*i,h[i]=new L.Point(t.x+s*Math.cos(a),t.y+s*Math.sin(a))._round(),s+=o/a;return h},_noanimationUnspiderfy:function(){var e,t,i=this._group,n=i._map,s=i._featureGroup,r=this.getAllChildMarkers();for(i._ignoreMove=!0,this.setOpacity(1),t=r.length-1;t>=0;t--)e=r[t],s.removeLayer(e),e._preSpiderfyLatlng&&(e.setLatLng(e._preSpiderfyLatlng),delete e._preSpiderfyLatlng),e.setZIndexOffset&&e.setZIndexOffset(0),e._spiderLeg&&(n.removeLayer(e._spiderLeg),delete e._spiderLeg);i.fire("unspiderfied",{cluster:this,markers:r}),i._ignoreMove=!1,i._spiderfied=null}}),L.MarkerClusterNonAnimated=L.MarkerCluster.extend({_animationSpiderfy:function(e,t){var i,n,s,r,o=this._group,a=o._map,h=o._featureGroup,u=this._group.options.spiderLegPolylineOptions;for(o._ignoreMove=!0,i=0;i<e.length;i++)r=a.layerPointToLatLng(t[i]),n=e[i],s=new L.Polyline([this._latlng,r],u),a.addLayer(s),n._spiderLeg=s,n._preSpiderfyLatlng=n._latlng,n.setLatLng(r),n.setZIndexOffset&&n.setZIndexOffset(1e6),h.addLayer(n);this.setOpacity(.3),o._ignoreMove=!1,o.fire("spiderfied",{cluster:this,markers:e})},_animationUnspiderfy:function(){this._noanimationUnspiderfy()}}),L.MarkerCluster.include({_animationSpiderfy:function(e,t){var n,s,r,o,a,h,u=this,l=this._group,_=l._map,d=l._featureGroup,c=this._latlng,p=_.latLngToLayerPoint(c),f=L.Path.SVG,m=L.extend({},this._group.options.spiderLegPolylineOptions),g=m.opacity;for(g===i&&(g=L.MarkerClusterGroup.prototype.options.spiderLegPolylineOptions.opacity),f?(m.opacity=0,m.className=(m.className||"")+" leaflet-cluster-spider-leg"):m.opacity=g,l._ignoreMove=!0,n=0;n<e.length;n++)s=e[n],h=_.layerPointToLatLng(t[n]),r=new L.Polyline([c,h],m),_.addLayer(r),s._spiderLeg=r,f&&(o=r._path,a=o.getTotalLength()+.1,o.style.strokeDasharray=a,o.style.strokeDashoffset=a),s.setZIndexOffset&&s.setZIndexOffset(1e6),s.clusterHide&&s.clusterHide(),d.addLayer(s),s._setPos&&s._setPos(p);for(l._forceLayout(),l._animationStart(),n=e.length-1;n>=0;n--)h=_.layerPointToLatLng(t[n]),s=e[n],s._preSpiderfyLatlng=s._latlng,s.setLatLng(h),s.clusterShow&&s.clusterShow(),f&&(r=s._spiderLeg,o=r._path,o.style.strokeDashoffset=0,r.setStyle({opacity:g}));this.setOpacity(.3),l._ignoreMove=!1,setTimeout(function(){l._animationEnd(),l.fire("spiderfied",{cluster:u,markers:e})},200)},_animationUnspiderfy:function(e){var t,i,n,s,r,o,a=this,h=this._group,u=h._map,l=h._featureGroup,_=e?u._latLngToNewLayerPoint(this._latlng,e.zoom,e.center):u.latLngToLayerPoint(this._latlng),d=this.getAllChildMarkers(),c=L.Path.SVG;for(h._ignoreMove=!0,h._animationStart(),this.setOpacity(1),i=d.length-1;i>=0;i--)t=d[i],t._preSpiderfyLatlng&&(t.setLatLng(t._preSpiderfyLatlng),delete t._preSpiderfyLatlng,o=!0,t._setPos&&(t._setPos(_),o=!1),t.clusterHide&&(t.clusterHide(),o=!1),o&&l.removeLayer(t),c&&(n=t._spiderLeg,s=n._path,r=s.getTotalLength()+.1,s.style.strokeDashoffset=r,n.setStyle({opacity:0})));h._ignoreMove=!1,setTimeout(function(){var e=0;for(i=d.length-1;i>=0;i--)t=d[i],t._spiderLeg&&e++;for(i=d.length-1;i>=0;i--)t=d[i],t._spiderLeg&&(t.clusterShow&&t.clusterShow(),t.setZIndexOffset&&t.setZIndexOffset(0),e>1&&l.removeLayer(t),u.removeLayer(t._spiderLeg),delete t._spiderLeg);h._animationEnd(),h.fire("unspiderfied",{cluster:a,markers:d})},200)}}),L.MarkerClusterGroup.include({_spiderfied:null,unspiderfy:function(){this._unspiderfy.apply(this,arguments)},_spiderfierOnAdd:function(){this._map.on("click",this._unspiderfyWrapper,this),this._map.options.zoomAnimation&&this._map.on("zoomstart",this._unspiderfyZoomStart,this),this._map.on("zoomend",this._noanimationUnspiderfy,this),L.Browser.touch||this._map.getRenderer(this)},_spiderfierOnRemove:function(){this._map.off("click",this._unspiderfyWrapper,this),this._map.off("zoomstart",this._unspiderfyZoomStart,this),this._map.off("zoomanim",this._unspiderfyZoomAnim,this),this._map.off("zoomend",this._noanimationUnspiderfy,this),this._noanimationUnspiderfy()},_unspiderfyZoomStart:function(){this._map&&this._map.on("zoomanim",this._unspiderfyZoomAnim,this)},_unspiderfyZoomAnim:function(e){L.DomUtil.hasClass(this._map._mapPane,"leaflet-touching")||(this._map.off("zoomanim",this._unspiderfyZoomAnim,this),this._unspiderfy(e))},_unspiderfyWrapper:function(){this._unspiderfy()},_unspiderfy:function(e){this._spiderfied&&this._spiderfied.unspiderfy(e)},_noanimationUnspiderfy:function(){this._spiderfied&&this._spiderfied._noanimationUnspiderfy()},_unspiderfyLayer:function(e){e._spiderLeg&&(this._featureGroup.removeLayer(e),e.clusterShow&&e.clusterShow(),e.setZIndexOffset&&e.setZIndexOffset(0),this._map.removeLayer(e._spiderLeg),delete e._spiderLeg)}}),L.MarkerClusterGroup.include({refreshClusters:function(e){return e?e instanceof L.MarkerClusterGroup?e=e._topClusterLevel.getAllChildMarkers():e instanceof L.LayerGroup?e=e._layers:e instanceof L.MarkerCluster?e=e.getAllChildMarkers():e instanceof L.Marker&&(e=[e]):e=this._topClusterLevel.getAllChildMarkers(),this._flagParentsIconsNeedUpdate(e),this._refreshClustersIcons(),this.options.singleMarkerMode&&this._refreshSingleMarkerModeMarkers(e),this},_flagParentsIconsNeedUpdate:function(e){var t,i;for(t in e)for(i=e[t].__parent;i;)i._iconNeedsUpdate=!0,i=i.__parent},_refreshClustersIcons:function(){this._featureGroup.eachLayer(function(e){e instanceof L.MarkerCluster&&e._iconNeedsUpdate&&e._updateIcon()})},_refreshSingleMarkerModeMarkers:function(e){var t,i;for(t in e)i=e[t],this.hasLayer(i)&&i.setIcon(this._overrideMarkerIcon(i))}}),L.Marker.include({refreshIconOptions:function(e,t){var i=this.options.icon;return L.setOptions(i,e),this.setIcon(i),t&&this.__parent&&this.__parent._group.refreshClusters(this),this}})}(window,document);
/*
 Leaflet.pattern, Provides tools to set the backgrounds of vector shapes in Leaflet to be patterns.
 https://github.com/teastman/Leaflet.pattern
 (c) 2015, Tyler Eastman
*/
!function(t,e){L.Pattern=L.Class.extend({includes:[L.Mixin.Events],options:{x:0,y:0,width:8,height:8,patternUnits:"userSpaceOnUse",patternContentUnits:"userSpaceOnUse"},_addShapes:L.Util.falseFn,_update:L.Util.falseFn,initialize:function(t){this._shapes={},L.setOptions(this,t)},onAdd:function(t){this._map=t.target?t.target:t,this._map._initDefRoot(),this._initDom();for(var e in this._shapes)this._shapes[e].onAdd(this);this._addShapes(),this._addDom(),this.redraw(),this.getEvents&&this._map.on(this.getEvents(),this),this.fire("add"),this._map.fire("patternadd",{pattern:this})},onRemove:function(){this._removeDom()},redraw:function(){if(this._map){this._update();for(var t in this._shapes)this._shapes[t].redraw()}return this},setStyle:function(t){return L.setOptions(this,t),this._map&&(this._updateStyle(),this.redraw()),this},addTo:function(t){return t.addPattern(this),this},remove:function(){return this.removeFrom(this._map)},removeFrom:function(t){return t&&t.removePattern(this),this}}),L.Map.addInitHook(function(){this._patterns={}}),L.Map.include({addPattern:function(t){var e=L.stamp(t);return this._patterns[e]?t:(this._patterns[e]=t,this.whenReady(t.onAdd,t),this)},removePattern:function(t){var e=L.stamp(t);return this._patterns[e]?(this._loaded&&t.onRemove(this),t.getEvents&&this.off(t.getEvents(),t),delete this._patterns[e],this._loaded&&(this.fire("patternremove",{pattern:t}),t.fire("remove")),t._map=null,this):this},hasPattern:function(t){return!!t&&L.stamp(t)in this._patterns}}),L.Pattern.SVG_NS="http://www.w3.org/2000/svg",L.Pattern=L.Pattern.extend({_createElement:function(t){return e.createElementNS(L.Pattern.SVG_NS,t)},_initDom:function(){this._dom=this._createElement("pattern"),this.options.className&&L.DomUtil.addClass(this._dom,this.options.className),this._updateStyle()},_addDom:function(){this._map._defRoot.appendChild(this._dom)},_removeDom:function(){L.DomUtil.remove(this._dom)},_updateStyle:function(){var t=this._dom,e=this.options;if(t){if(t.setAttribute("id",L.stamp(this)),t.setAttribute("x",e.x),t.setAttribute("y",e.y),t.setAttribute("width",e.width),t.setAttribute("height",e.height),t.setAttribute("patternUnits",e.patternUnits),t.setAttribute("patternContentUnits",e.patternContentUnits),e.patternTransform||e.angle){var i=e.patternTransform?e.patternTransform+" ":"";i+=e.angle?"rotate("+e.angle+") ":"",t.setAttribute("patternTransform",i)}else t.removeAttribute("patternTransform");for(var s in this._shapes)this._shapes[s]._updateStyle()}}}),L.Map.include({_initDefRoot:function(){if(!this._defRoot)if("function"==typeof this.getRenderer){var t=this.getRenderer(this);this._defRoot=L.Pattern.prototype._createElement("defs"),t._container.appendChild(this._defRoot)}else this._pathRoot||this._initPathRoot(),this._defRoot=L.Pattern.prototype._createElement("defs"),this._pathRoot.appendChild(this._defRoot)}}),L.SVG?L.SVG.include({_superUpdateStyle:L.SVG.prototype._updateStyle,_updateStyle:function(t){this._superUpdateStyle(t),t.options.fill&&t.options.fillPattern&&t._path.setAttribute("fill","url(#"+L.stamp(t.options.fillPattern)+")")}}):L.Path.include({_superUpdateStyle:L.Path.prototype._updateStyle,_updateStyle:function(){this._superUpdateStyle(),this.options.fill&&this.options.fillPattern&&this._path.setAttribute("fill","url(#"+L.stamp(this.options.fillPattern)+")")}}),L.StripePattern=L.Pattern.extend({options:{weight:4,spaceWeight:4,color:"#000000",spaceColor:"#ffffff",opacity:1,spaceOpacity:0},_addShapes:function(){this._stripe=new L.PatternPath({stroke:!0,weight:this.options.weight,color:this.options.color,opacity:this.options.opacity}),this._space=new L.PatternPath({stroke:!0,weight:this.options.spaceWeight,color:this.options.spaceColor,opacity:this.options.spaceOpacity}),this.addShape(this._stripe),this.addShape(this._space),this._update()},_update:function(){this._stripe.options.d="M0 "+this._stripe.options.weight/2+" H "+this.options.width,this._space.options.d="M0 "+(this._stripe.options.weight+this._space.options.weight/2)+" H "+this.options.width},setStyle:L.Pattern.prototype.setStyle}),L.stripePattern=function(t){return new L.StripePattern(t)},L.PatternShape=L.Class.extend({options:{stroke:!0,color:"#3388ff",weight:3,opacity:1,lineCap:"round",lineJoin:"round",fillOpacity:.2,fillRule:"evenodd"},initialize:function(t){L.setOptions(this,t)},onAdd:function(t){this._pattern=t,this._pattern._dom&&(this._initDom(),this._addDom())},addTo:function(t){return t.addShape(this),this},redraw:function(){return this._pattern&&this._updateShape(),this},setStyle:function(t){return L.setOptions(this,t),this._pattern&&this._updateStyle(),this},setShape:function(t){this.options=L.extend({},this.options,t),this._updateShape()}}),L.Pattern.include({addShape:function(t){var e=L.stamp(t);return this._shapes[e]?t:(this._shapes[e]=t,t.onAdd(this),void 0)}}),L.PatternShape.SVG_NS="http://www.w3.org/2000/svg",L.PatternShape=L.PatternShape.extend({_createElement:function(t){return e.createElementNS(L.PatternShape.SVG_NS,t)},_initDom:L.Util.falseFn,_updateShape:L.Util.falseFn,_initDomElement:function(t){this._dom=this._createElement(t),this.options.className&&L.DomUtil.addClass(this._dom,this.options.className),this._updateStyle()},_addDom:function(){this._pattern._dom.appendChild(this._dom)},_updateStyle:function(){var t=this._dom,e=this.options;t&&(e.stroke?(t.setAttribute("stroke",e.color),t.setAttribute("stroke-opacity",e.opacity),t.setAttribute("stroke-width",e.weight),t.setAttribute("stroke-linecap",e.lineCap),t.setAttribute("stroke-linejoin",e.lineJoin),e.dashArray?t.setAttribute("stroke-dasharray",e.dashArray):t.removeAttribute("stroke-dasharray"),e.dashOffset?t.setAttribute("stroke-dashoffset",e.dashOffset):t.removeAttribute("stroke-dashoffset")):t.setAttribute("stroke","none"),e.fill?(e.fillPattern?t.setAttribute("fill","url(#"+L.stamp(e.fillPattern)+")"):t.setAttribute("fill",e.fillColor||e.color),t.setAttribute("fill-opacity",e.fillOpacity),t.setAttribute("fill-rule",e.fillRule||"evenodd")):t.setAttribute("fill","none"),t.setAttribute("pointer-events",e.pointerEvents||(e.interactive?"visiblePainted":"none")))}}),L.PatternPath=L.PatternShape.extend({_initDom:function(){this._initDomElement("path")},_updateShape:function(){this._dom&&this._dom.setAttribute("d",this.options.d)}}),L.PatternCircle=L.PatternShape.extend({options:{x:0,y:0,radius:0},_initDom:function(){this._initDomElement("circle")},_updateShape:function(){this._dom&&(this._dom.setAttribute("cx",this.options.x),this._dom.setAttribute("cy",this.options.y),this._dom.setAttribute("r",this.options.radius))}}),L.PatternRect=L.PatternShape.extend({options:{x:0,y:0,width:10,height:10},_initDom:function(){this._initDomElement("rect")},_updateShape:function(){this._dom&&(this._dom.setAttribute("x",this.options.x),this._dom.setAttribute("y",this.options.y),this._dom.setAttribute("width",this.options.width),this._dom.setAttribute("height",this.options.height),this.options.rx&&this._dom.setAttribute("rx",this.options.rx),this.options.ry&&this._dom.setAttribute("ry",this.options.ry))}})}(window,document);
L.PhotonBase = L.Class.extend({

    forEach: function (els, callback) {
        Array.prototype.forEach.call(els, callback);
    },

    ajax: function (callback, thisobj) {
        if (typeof this.xhr === 'object') {
            this.xhr.abort();
        }
        this.xhr = new XMLHttpRequest();
        var self = this;
        this.xhr.open('GET', this.options.url + this.buildQueryString(this.getParams()), true);

        this.xhr.onload = function(e) {
            self.fire('ajax:return');
            if (this.status === 200) {
                if (callback) {
                    var raw = this.response;
                    raw = JSON.parse(raw);
                    callback.call(thisobj || this, raw);
                }
            }
            delete this.xhr;
        };

        this.fire('ajax:send');
        this.xhr.send();
    },

    buildQueryString: function (params) {
        var queryString = [];
        for (var key in params) {
            if (params[key]) {
                queryString.push(encodeURIComponent(key) + '=' + encodeURIComponent(params[key]));
            }
        }
        return queryString.join('&');
    },

    featureToPopupContent: function (feature) {
        var container = L.DomUtil.create('div', 'leaflet-photon-popup'),
            title = L.DomUtil.create('h3', '', container);
        title.innerHTML = feature.properties.label;
        return container;
    }

});


L.PhotonBaseSearch = L.PhotonBase.extend({

    includes: ((typeof L.Evented !== 'undefined' && L.Evented.prototype) || L.Mixin.Events),

    options: {
        url: 'https://api-adresse.data.gouv.fr/search/?',
        placeholder: 'Search an address',
        minChar: 3,
        limit: 5,
        submitDelay: 1000,
        includePosition: true,
        bbox: null,
        noResultLabel: 'Pas de résultats',
        feedbackEmail: 'photon@komoot.de',  // Set to null to remove feedback box
        feedbackLabel: 'Feedback'
    },

    CACHE: '',
    RESULTS: [],
    KEYS: {
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40,
        TAB: 9,
        RETURN: 13,
        ESC: 27,
        APPLE: 91,
        SHIFT: 16,
        ALT: 17,
        CTRL: 18
    },

    initialize: function (input, options) {
        this.input = input;
        L.setOptions(this, options);
        var CURRENT = null;

        try {
            Object.defineProperty(this, 'CURRENT', {
                get: function () {
                    return CURRENT;
                },
                set: function (index) {
                    if (typeof index === 'object') {
                        index = this.resultToIndex(index);
                    }
                    CURRENT = index;
                }
            });
        } catch (e) {
            // Hello IE8
        }
        this.input.type = L.Browser.ie ? 'text' : 'search';
        this.input.placeholder = this.options.placeholder;
        this.input.autocomplete = 'off';
        this.input.autocorrect = 'off';
        L.DomEvent.disableClickPropagation(this.input);

        L.DomEvent.on(this.input, 'keydown', this.onKeyDown, this);
        L.DomEvent.on(this.input, 'input', this.onInput, this);
        L.DomEvent.on(this.input, 'blur', this.onBlur, this);
        L.DomEvent.on(this.input, 'focus', this.onFocus, this);
        this.createResultsContainer();
    },

    createResultsContainer: function () {
        this.resultsContainer = this.options.resultsContainer || L.DomUtil.create('ul', 'photon-autocomplete', document.querySelector('body'));
    },

    resizeContainer: function()
    {
        var l = this.getLeft(this.input);
        var t = this.getTop(this.input) + this.input.offsetHeight;
        this.resultsContainer.style.left = l + 'px';
        this.resultsContainer.style.top = t + 'px';
        var width = this.options.width ? this.options.width : this.input.offsetWidth - 2;
        this.resultsContainer.style.width = width + 'px';
    },

    onKeyDown: function (e) {
        switch (e.keyCode) {
            case this.KEYS.TAB:
                if(this.CURRENT !== null)
                {
                    this.setChoice();
                }
                L.DomEvent.stop(e);
                break;
            case this.KEYS.RETURN:
                L.DomEvent.stop(e);
                this.setChoice();
                break;
            case this.KEYS.ESC:
                L.DomEvent.stop(e);
                this.hide();
                this.input.blur();
                break;
            case this.KEYS.DOWN:
                if(this.RESULTS.length > 0) {
                    if(this.CURRENT !== null && this.CURRENT < this.RESULTS.length - 1) { // what if one resutl?
                        this.CURRENT++;
                        this.highlight();
                    }
                    else if(this.CURRENT === null) {
                        this.CURRENT = 0;
                        this.highlight();
                    }
                }
                break;
            case this.KEYS.UP:
                if(this.CURRENT !== null) {
                    L.DomEvent.stop(e);
                }
                if(this.RESULTS.length > 0) {
                    if(this.CURRENT > 0) {
                        this.CURRENT--;
                        this.highlight();
                    }
                    else if(this.CURRENT === 0) {
                        this.CURRENT = null;
                        this.highlight();
                    }
                }
                break;
        }
    },

    onInput: function (e) {
        if (typeof this.submitDelay === 'number') {
            window.clearTimeout(this.submitDelay);
            delete this.submitDelay;
        }
        this.submitDelay = window.setTimeout(L.Util.bind(this.search, this), this.options.submitDelay);
    },

    onBlur: function (e) {
        this.fire('blur');
        var self = this;
        setTimeout(function () {
            self.hide();
        }, 100);
    },

    onFocus: function (e) {
        this.fire('focus');
        this.input.select();
        this.search();  // In case we have a value from a previous search.
    },

    clear: function () {
        this.RESULTS = [];
        this.CURRENT = null;
        this.CACHE = '';
        this.resultsContainer.innerHTML = '';
    },

    hide: function() {
        this.fire('hide');
        this.clear();
        this.resultsContainer.style.display = 'none';
    },

    setChoice: function (choice) {
        choice = choice || this.RESULTS[this.CURRENT];
        if (choice) {
            this.hide();
            this.fire('selected', {choice: choice.feature});
            this.onSelected(choice.feature);
            // this.input.value = '';
        }
    },

    search: function() {
        var val = this.input.value;
        var minChar = typeof this.options.minChar === 'function' ? this.options.minChar(val) : val.length >= this.options.minChar;
        if (!val || !minChar) return this.clear();
        if(val + '' === this.CACHE + '') return;
        else this.CACHE = val;
        this._doSearch();
    },

    _doSearch: function () {
        this.ajax(this.handleResults, this);
    },

    _onSelected: function (feature) {
    },

    onSelected: function (choice) {
        return (this.options.onSelected || this._onSelected).call(this, choice);
    },

    _formatResult: function (feature, el) {

        var title = L.DomUtil.create('strong', '', el),
            detailsContainer = L.DomUtil.create('small', '', el),
            details = [],
            type = this.formatType(feature);
            if (feature.properties.display_name) {
                title.innerHTML = feature.properties.display_name;
            } else if (feature.properties.name) {
            title.innerHTML = feature.properties.name;
        } else if (feature.properties.housenumber) {
            title.innerHTML = feature.properties.housenumber;
            if (feature.properties.street) {
                title.innerHTML += ' ' + feature.properties.street;
            }
        }
        if (type) details.push(type);
        if (feature.properties.city && feature.properties.city !== feature.properties.name) {
            details.push(feature.properties.city);
        }
        if (feature.properties.country) details.push(feature.properties.country);
        detailsContainer.innerHTML = details.join(', ');
    },

    formatResult: function (feature, el) {
        return (this.options.formatResult || this._formatResult).call(this, feature, el);
    },

    formatType: function (feature) {
        return (this.options.formatType || this._formatType).call(this, feature);
    },

    _formatType: function (feature) {
        return feature.properties.osm_value === 'yes'
               ? feature.properties.osm_key
               : feature.properties.osm_value;
    },

    createResult: function (feature) {
        var el = L.DomUtil.create('li', '', this.resultsContainer);
        this.formatResult(feature, el);
        var result = {
            feature: feature,
            el: el
        };
        // Touch handling needed
        L.DomEvent.on(el, 'mouseover', function (e) {
            this.CURRENT = result;
            this.highlight();
        }, this);
        L.DomEvent.on(el, 'mousedown', function (e) {
            this.setChoice();
        }, this);
        return result;
    },

    resultToIndex: function (result) {
        var out = null;
        this.forEach(this.RESULTS, function (item, index) {
            if (item === result) {
                out = index;
                return;
            }
        });
        return out;
    },

    handleResults: function(geojson) {
        var self = this;
        this.clear();
        this.resultsContainer.style.display = 'block';
        this.resizeContainer();
        this.forEach(geojson.features, function (feature) {
            self.RESULTS.push(self.createResult(feature));
        });
        if (geojson.features.length === 0) {
            var noresult = L.DomUtil.create('li', 'photon-no-result', this.resultsContainer);
            noresult.innerHTML = this.options.noResultLabel;
        }
        if (this.options.feedbackEmail) {
            var feedback = L.DomUtil.create('a', 'photon-feedback', this.resultsContainer);
            feedback.href = 'mailto:' + this.options.feedbackEmail;
            feedback.innerHTML = this.options.feedbackLabel;
        }
        this.CURRENT = 0;
        this.highlight();
        if (this.options.resultsHandler) {
            this.options.resultsHandler(geojson);
        }
    },

    highlight: function () {
        var self = this;
        this.forEach(this.RESULTS, function (item, index) {
            if (index === self.CURRENT) {
                L.DomUtil.addClass(item.el, 'on');
            }
            else {
                L.DomUtil.removeClass(item.el, 'on');
            }
        });
    },

    getLeft: function (el) {
        var tmp = el.offsetLeft;
        el = el.offsetParent;
        while(el) {
            tmp += el.offsetLeft;
            el = el.offsetParent;
        }
        return tmp;
    },

    getTop: function (el) {
        var tmp = el.offsetTop;
        el = el.offsetParent;
        while(el) {
            tmp += el.offsetTop;
            el = el.offsetParent;
        }
        return tmp;
    },

    getParams: function () {
        return {
            q: this.CACHE,
            lang: this.options.lang,
            limit: this.options.limit,
            osm_tag: this.options.osm_tag
        };
    }

});

L.PhotonSearch = L.PhotonBaseSearch.extend({

    initialize: function (map, input, options) {
        this.map = map;
        L.PhotonBaseSearch.prototype.initialize.call(this, input, options);
    },

    _onSelected: function (feature) {
        this.map.setView([feature.geometry.coordinates[1], feature.geometry.coordinates[0]], 16);
    },

    getParams: function () {
        var params = L.PhotonBaseSearch.prototype.getParams.call(this);
        if (this.options.includePosition) {
            params.lat = this.map.getCenter().lat;
            params.lon = this.map.getCenter().lng;
        }
        if (this.options.bbox && this.options.bbox.length === 4) {
            params.bbox = this.options.bbox.join(',');
        }
        return params;
    }

});

L.Control.Photon = L.Control.extend({

    includes: ((typeof L.Evented !== 'undefined' && L.Evented.prototype) || L.Mixin.Events),

    onAdd: function (map, options) {
        this.map = map;
        this.container = L.DomUtil.create('div', 'leaflet-photon');

        this.options = L.Util.extend(this.options, options);

        this.input = L.DomUtil.create('input', 'photon-input', this.container);
        this.search = new L.PhotonSearch(map, this.input, this.options);
        this.search.on('blur', this.forwardEvent, this);
        this.search.on('focus', this.forwardEvent, this);
        this.search.on('hide', this.forwardEvent, this);
        this.search.on('selected', this.forwardEvent, this);
        this.search.on('ajax:send', this.forwardEvent, this);
        this.search.on('ajax:return', this.forwardEvent, this);
        return this.container;
    },

    // TODO onRemove

    forwardEvent: function (e) {
        this.fire(e.type, e);
    }

});

L.control.photon = function(options) {
    return new L.Control.Photon(options);
}

L.Map.addInitHook(function () {
    if (this.options.photonControl) {
        this.photonControl = new L.Control.Photon(this.options.photonControlOptions || {});
        this.addControl(this.photonControl);
    }
});

L.PhotonReverse = L.PhotonBase.extend({

    includes: ((typeof L.Evented !== 'undefined' && L.Evented.prototype) || L.Mixin.Events),

    options: {
        url: 'https://photon.komoot.de/reverse/?',
        limit: 1,
        handleResults: null
    },

    initialize: function (options) {
        L.setOptions(this, options);
    },

    doReverse: function (latlng) {
        latlng = L.latLng(latlng);
        this.fire('reverse', {latlng: latlng});
        this.latlng = latlng;
        this.ajax(this.handleResults, this);
    },

    _handleResults: function (data) {
        /*eslint-disable no-console */
        /*eslint-enable no-alert */
    },

    handleResults: function (data) {
        return (this.options.handleResults || this._handleResults).call(this, data);
    },

    getParams: function () {
        return {
            lang: this.options.lang,
            limit: this.options.limit,
            lat: this.latlng.lat,
            lon: this.latlng.lng,
            osm_tag: this.options.osm_tag
        };
    }

});

var obj2 = {
    value: '',
    get gcd() {
        return this.value;
    },
    set gcd(value) {
        this.value = value;
    }
}

var obj3 = {
    value: '',
    get marker() {
        return this.value;
    },
    set marker(value) {
        this.value = value;
    }
    }
(function() {
    // save these original methods before they are overwritten
    var proto_initIcon = L.Marker.prototype._initIcon;
    var proto_setPos = L.Marker.prototype._setPos;

    var oldIE = (L.DomUtil.TRANSFORM === 'msTransform');

    L.Marker.addInitHook(function () {
        var iconOptions = this.options.icon && this.options.icon.options;
        var iconAnchor = iconOptions && this.options.icon.options.iconAnchor;
        if (iconAnchor) {
            iconAnchor = (iconAnchor[0] + 'px ' + iconAnchor[1] + 'px');
        }
        this.options.rotationOrigin = this.options.rotationOrigin || iconAnchor || 'center bottom' ;
        this.options.rotationAngle = this.options.rotationAngle || 0;
    });

    L.Marker.include({
        _initIcon: function() {
            proto_initIcon.call(this);
        },

        _setPos: function (pos) {
            proto_setPos.call(this, pos);

            if(this.options.rotationAngle) {
                this._icon.style[L.DomUtil.TRANSFORM+'Origin'] = this.options.rotationOrigin;

                if(oldIE) {
                    // for IE 9, use the 2D rotation
                    this._icon.style[L.DomUtil.TRANSFORM] = 'rotate(' + this.options.rotationAngle + 'deg)';
                } else {
                    // for modern browsers, prefer the 3D accelerated version
                    this._icon.style[L.DomUtil.TRANSFORM] += ' rotateZ(' + this.options.rotationAngle + 'deg)';
                }
            }
        },

        setRotationAngle: function(angle) {
            this.options.rotationAngle = angle;
            this.update();
            return this;
        },

        setRotationOrigin: function(origin) {
            this.options.rotationOrigin = origin;
            this.update();
            return this;
        }
    });
})();

(function () {
'use strict';

function __$strToBlobUri(str, mime, isBinary) {try {return window.URL.createObjectURL(new Blob([Uint8Array.from(str.split('').map(function(c) {return c.charCodeAt(0)}))], {type: mime}));} catch (e) {return "data:" + mime + (isBinary ? ";base64," : ",") + str;}}
(function(self) {
  'use strict';

  if (self.fetch) {
    return
  }

  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob: 'FileReader' in self && 'Blob' in self && (function() {
      try {
        new Blob();
        return true
      } catch(e) {
        return false
      }
    })(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  };

  if (support.arrayBuffer) {
    var viewClasses = [
      '[object Int8Array]',
      '[object Uint8Array]',
      '[object Uint8ClampedArray]',
      '[object Int16Array]',
      '[object Uint16Array]',
      '[object Int32Array]',
      '[object Uint32Array]',
      '[object Float32Array]',
      '[object Float64Array]'
    ];

    var isDataView = function(obj) {
      return obj && DataView.prototype.isPrototypeOf(obj)
    };

    var isArrayBufferView = ArrayBuffer.isView || function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    };
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name);
    }
    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name')
    }
    return name.toLowerCase()
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value);
    }
    return value
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function() {
        var value = items.shift();
        return {done: value === undefined, value: value}
      }
    };

    if (support.iterable) {
      iterator[Symbol.iterator] = function() {
        return iterator
      };
    }

    return iterator
  }

  function Headers(headers) {
    this.map = {};

    if (headers instanceof Headers) {
      headers.forEach(function(value, name) {
        this.append(name, value);
      }, this);
    } else if (Array.isArray(headers)) {
      headers.forEach(function(header) {
        this.append(header[0], header[1]);
      }, this);
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name]);
      }, this);
    }
  }

  Headers.prototype.append = function(name, value) {
    name = normalizeName(name);
    value = normalizeValue(value);
    var oldValue = this.map[name];
    this.map[name] = oldValue ? oldValue+','+value : value;
  };

  Headers.prototype['delete'] = function(name) {
    delete this.map[normalizeName(name)];
  };

  Headers.prototype.get = function(name) {
    name = normalizeName(name);
    return this.has(name) ? this.map[name] : null
  };

  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name))
  };

  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = normalizeValue(value);
  };

  Headers.prototype.forEach = function(callback, thisArg) {
    var this$1 = this;

    for (var name in this.map) {
      if (this$1.map.hasOwnProperty(name)) {
        callback.call(thisArg, this$1.map[name], name, this$1);
      }
    }
  };

  Headers.prototype.keys = function() {
    var items = [];
    this.forEach(function(value, name) { items.push(name); });
    return iteratorFor(items)
  };

  Headers.prototype.values = function() {
    var items = [];
    this.forEach(function(value) { items.push(value); });
    return iteratorFor(items)
  };

  Headers.prototype.entries = function() {
    var items = [];
    this.forEach(function(value, name) { items.push([name, value]); });
    return iteratorFor(items)
  };

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'))
    }
    body.bodyUsed = true;
  }

  function fileReaderReady(reader) {
    return new Promise(function(resolve, reject) {
      reader.onload = function() {
        resolve(reader.result);
      };
      reader.onerror = function() {
        reject(reader.error);
      };
    })
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsArrayBuffer(blob);
    return promise
  }

  function readBlobAsText(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsText(blob);
    return promise
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf);
    var chars = new Array(view.length);

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i]);
    }
    return chars.join('')
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0)
    } else {
      var view = new Uint8Array(buf.byteLength);
      view.set(new Uint8Array(buf));
      return view.buffer
    }
  }

  function Body() {
    this.bodyUsed = false;

    this._initBody = function(body) {
      this._bodyInit = body;
      if (!body) {
        this._bodyText = '';
      } else if (typeof body === 'string') {
        this._bodyText = body;
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body;
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body;
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString();
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer);
        // IE 10-11 can't handle a DataView body.
        this._bodyInit = new Blob([this._bodyArrayBuffer]);
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body);
      } else {
        throw new Error('unsupported BodyInit type')
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8');
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type);
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
        }
      }
    };

    if (support.blob) {
      this.blob = function() {
        var rejected = consumed(this);
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob)
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob')
        } else {
          return Promise.resolve(new Blob([this._bodyText]))
        }
      };

      this.arrayBuffer = function() {
        if (this._bodyArrayBuffer) {
          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
        } else {
          return this.blob().then(readBlobAsArrayBuffer)
        }
      };
    }

    this.text = function() {
      var rejected = consumed(this);
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text')
      } else {
        return Promise.resolve(this._bodyText)
      }
    };

    if (support.formData) {
      this.formData = function() {
        return this.text().then(decode)
      };
    }

    this.json = function() {
      return this.text().then(JSON.parse)
    };

    return this
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];

  function normalizeMethod(method) {
    var upcased = method.toUpperCase();
    return (methods.indexOf(upcased) > -1) ? upcased : method
  }

  function Request(input, options) {
    options = options || {};
    var body = options.body;

    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read')
      }
      this.url = input.url;
      this.credentials = input.credentials;
      if (!options.headers) {
        this.headers = new Headers(input.headers);
      }
      this.method = input.method;
      this.mode = input.mode;
      if (!body && input._bodyInit != null) {
        body = input._bodyInit;
        input.bodyUsed = true;
      }
    } else {
      this.url = String(input);
    }

    this.credentials = options.credentials || this.credentials || 'omit';
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers);
    }
    this.method = normalizeMethod(options.method || this.method || 'GET');
    this.mode = options.mode || this.mode || null;
    this.referrer = null;

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests')
    }
    this._initBody(body);
  }

  Request.prototype.clone = function() {
    return new Request(this, { body: this._bodyInit })
  };

  function decode(body) {
    var form = new FormData();
    body.trim().split('&').forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=');
        var name = split.shift().replace(/\+/g, ' ');
        var value = split.join('=').replace(/\+/g, ' ');
        form.append(decodeURIComponent(name), decodeURIComponent(value));
      }
    });
    return form
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers();
    rawHeaders.split(/\r?\n/).forEach(function(line) {
      var parts = line.split(':');
      var key = parts.shift().trim();
      if (key) {
        var value = parts.join(':').trim();
        headers.append(key, value);
      }
    });
    return headers
  }

  Body.call(Request.prototype);

  function Response(bodyInit, options) {
    if (!options) {
      options = {};
    }

    this.type = 'default';
    this.status = 'status' in options ? options.status : 200;
    this.ok = this.status >= 200 && this.status < 300;
    this.statusText = 'statusText' in options ? options.statusText : 'OK';
    this.headers = new Headers(options.headers);
    this.url = options.url || '';
    this._initBody(bodyInit);
  }

  Body.call(Response.prototype);

  Response.prototype.clone = function() {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    })
  };

  Response.error = function() {
    var response = new Response(null, {status: 0, statusText: ''});
    response.type = 'error';
    return response
  };

  var redirectStatuses = [301, 302, 303, 307, 308];

  Response.redirect = function(url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code')
    }

    return new Response(null, {status: status, headers: {location: url}})
  };

  self.Headers = Headers;
  self.Request = Request;
  self.Response = Response;

  self.fetch = function(input, init) {
    return new Promise(function(resolve, reject) {
      var request = new Request(input, init);
      var xhr = new XMLHttpRequest();

      xhr.onload = function() {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        };
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL');
        var body = 'response' in xhr ? xhr.response : xhr.responseText;
        resolve(new Response(body, options));
      };

      xhr.onerror = function() {
        reject(new TypeError('Network request failed'));
      };

      xhr.ontimeout = function() {
        reject(new TypeError('Network request failed'));
      };

      xhr.open(request.method, request.url, true);

      if (request.credentials === 'include') {
        xhr.withCredentials = true;
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob';
      }

      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value);
      });

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
    })
  };
  self.fetch.polyfill = true;
})(typeof self !== 'undefined' ? self : undefined);

var read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var nBits = -7;
  var i = isLE ? (nBytes - 1) : 0;
  var d = isLE ? -1 : 1;
  var s = buffer[offset + i];

  i += d;

  e = s & ((1 << (-nBits)) - 1);
  s >>= (-nBits);
  nBits += eLen;
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1);
  e >>= (-nBits);
  nBits += mLen;
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen);
    e = e - eBias;
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
};

var write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0);
  var i = isLE ? 0 : (nBytes - 1);
  var d = isLE ? 1 : -1;
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0;

  value = Math.abs(value);

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0;
    e = eMax;
  } else {
    e = Math.floor(Math.log(value) / Math.LN2);
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }
    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * Math.pow(2, 1 - eBias);
    }
    if (value * c >= 2) {
      e++;
      c /= 2;
    }

    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
      e = 0;
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m;
  eLen += mLen;
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128;
};

var index$1 = {
	read: read,
	write: write
};

var index = Pbf;

var ieee754 = index$1;

function Pbf(buf) {
    this.buf = ArrayBuffer.isView && ArrayBuffer.isView(buf) ? buf : new Uint8Array(buf || 0);
    this.pos = 0;
    this.type = 0;
    this.length = this.buf.length;
}

Pbf.Varint  = 0; // varint: int32, int64, uint32, uint64, sint32, sint64, bool, enum
Pbf.Fixed64 = 1; // 64-bit: double, fixed64, sfixed64
Pbf.Bytes   = 2; // length-delimited: string, bytes, embedded messages, packed repeated fields
Pbf.Fixed32 = 5; // 32-bit: float, fixed32, sfixed32

var SHIFT_LEFT_32 = (1 << 16) * (1 << 16);
var SHIFT_RIGHT_32 = 1 / SHIFT_LEFT_32;

Pbf.prototype = {

    destroy: function() {
        this.buf = null;
    },

    // === READING =================================================================

    readFields: function(readField, result, end) {
        var this$1 = this;

        end = end || this.length;

        while (this.pos < end) {
            var val = this$1.readVarint(),
                tag = val >> 3,
                startPos = this$1.pos;

            this$1.type = val & 0x7;
            readField(tag, result, this$1);

            if (this$1.pos === startPos) { this$1.skip(val); }
        }
        return result;
    },

    readMessage: function(readField, result) {
        return this.readFields(readField, result, this.readVarint() + this.pos);
    },

    readFixed32: function() {
        var val = readUInt32(this.buf, this.pos);
        this.pos += 4;
        return val;
    },

    readSFixed32: function() {
        var val = readInt32(this.buf, this.pos);
        this.pos += 4;
        return val;
    },

    // 64-bit int handling is based on github.com/dpw/node-buffer-more-ints (MIT-licensed)

    readFixed64: function() {
        var val = readUInt32(this.buf, this.pos) + readUInt32(this.buf, this.pos + 4) * SHIFT_LEFT_32;
        this.pos += 8;
        return val;
    },

    readSFixed64: function() {
        var val = readUInt32(this.buf, this.pos) + readInt32(this.buf, this.pos + 4) * SHIFT_LEFT_32;
        this.pos += 8;
        return val;
    },

    readFloat: function() {
        var val = ieee754.read(this.buf, this.pos, true, 23, 4);
        this.pos += 4;
        return val;
    },

    readDouble: function() {
        var val = ieee754.read(this.buf, this.pos, true, 52, 8);
        this.pos += 8;
        return val;
    },

    readVarint: function(isSigned) {
        var buf = this.buf,
            val, b;

        b = buf[this.pos++]; val  =  b & 0x7f;        if (b < 0x80) { return val; }
        b = buf[this.pos++]; val |= (b & 0x7f) << 7;  if (b < 0x80) { return val; }
        b = buf[this.pos++]; val |= (b & 0x7f) << 14; if (b < 0x80) { return val; }
        b = buf[this.pos++]; val |= (b & 0x7f) << 21; if (b < 0x80) { return val; }
        b = buf[this.pos];   val |= (b & 0x0f) << 28;

        return readVarintRemainder(val, isSigned, this);
    },

    readVarint64: function() { // for compatibility with v2.0.1
        return this.readVarint(true);
    },

    readSVarint: function() {
        var num = this.readVarint();
        return num % 2 === 1 ? (num + 1) / -2 : num / 2; // zigzag encoding
    },

    readBoolean: function() {
        return Boolean(this.readVarint());
    },

    readString: function() {
        var end = this.readVarint() + this.pos,
            str = readUtf8(this.buf, this.pos, end);
        this.pos = end;
        return str;
    },

    readBytes: function() {
        var end = this.readVarint() + this.pos,
            buffer = this.buf.subarray(this.pos, end);
        this.pos = end;
        return buffer;
    },

    // verbose for performance reasons; doesn't affect gzipped size

    readPackedVarint: function(arr, isSigned) {
        var this$1 = this;

        var end = readPackedEnd(this);
        arr = arr || [];
        while (this.pos < end) { arr.push(this$1.readVarint(isSigned)); }
        return arr;
    },
    readPackedSVarint: function(arr) {
        var this$1 = this;

        var end = readPackedEnd(this);
        arr = arr || [];
        while (this.pos < end) { arr.push(this$1.readSVarint()); }
        return arr;
    },
    readPackedBoolean: function(arr) {
        var this$1 = this;

        var end = readPackedEnd(this);
        arr = arr || [];
        while (this.pos < end) { arr.push(this$1.readBoolean()); }
        return arr;
    },
    readPackedFloat: function(arr) {
        var this$1 = this;

        var end = readPackedEnd(this);
        arr = arr || [];
        while (this.pos < end) { arr.push(this$1.readFloat()); }
        return arr;
    },
    readPackedDouble: function(arr) {
        var this$1 = this;

        var end = readPackedEnd(this);
        arr = arr || [];
        while (this.pos < end) { arr.push(this$1.readDouble()); }
        return arr;
    },
    readPackedFixed32: function(arr) {
        var this$1 = this;

        var end = readPackedEnd(this);
        arr = arr || [];
        while (this.pos < end) { arr.push(this$1.readFixed32()); }
        return arr;
    },
    readPackedSFixed32: function(arr) {
        var this$1 = this;

        var end = readPackedEnd(this);
        arr = arr || [];
        while (this.pos < end) { arr.push(this$1.readSFixed32()); }
        return arr;
    },
    readPackedFixed64: function(arr) {
        var this$1 = this;

        var end = readPackedEnd(this);
        arr = arr || [];
        while (this.pos < end) { arr.push(this$1.readFixed64()); }
        return arr;
    },
    readPackedSFixed64: function(arr) {
        var this$1 = this;

        var end = readPackedEnd(this);
        arr = arr || [];
        while (this.pos < end) { arr.push(this$1.readSFixed64()); }
        return arr;
    },

    skip: function(val) {
        var type = val & 0x7;
        if (type === Pbf.Varint) { while (this.buf[this.pos++] > 0x7f) {} }
        else if (type === Pbf.Bytes) { this.pos = this.readVarint() + this.pos; }
        else if (type === Pbf.Fixed32) { this.pos += 4; }
        else if (type === Pbf.Fixed64) { this.pos += 8; }
        else { throw new Error('Unimplemented type: ' + type); }
    },

    // === WRITING =================================================================

    writeTag: function(tag, type) {
        this.writeVarint((tag << 3) | type);
    },

    realloc: function(min) {
        var length = this.length || 16;

        while (length < this.pos + min) { length *= 2; }

        if (length !== this.length) {
            var buf = new Uint8Array(length);
            buf.set(this.buf);
            this.buf = buf;
            this.length = length;
        }
    },

    finish: function() {
        this.length = this.pos;
        this.pos = 0;
        return this.buf.subarray(0, this.length);
    },

    writeFixed32: function(val) {
        this.realloc(4);
        writeInt32(this.buf, val, this.pos);
        this.pos += 4;
    },

    writeSFixed32: function(val) {
        this.realloc(4);
        writeInt32(this.buf, val, this.pos);
        this.pos += 4;
    },

    writeFixed64: function(val) {
        this.realloc(8);
        writeInt32(this.buf, val & -1, this.pos);
        writeInt32(this.buf, Math.floor(val * SHIFT_RIGHT_32), this.pos + 4);
        this.pos += 8;
    },

    writeSFixed64: function(val) {
        this.realloc(8);
        writeInt32(this.buf, val & -1, this.pos);
        writeInt32(this.buf, Math.floor(val * SHIFT_RIGHT_32), this.pos + 4);
        this.pos += 8;
    },

    writeVarint: function(val) {
        val = +val || 0;

        if (val > 0xfffffff || val < 0) {
            writeBigVarint(val, this);
            return;
        }

        this.realloc(4);

        this.buf[this.pos++] =           val & 0x7f  | (val > 0x7f ? 0x80 : 0); if (val <= 0x7f) { return; }
        this.buf[this.pos++] = ((val >>>= 7) & 0x7f) | (val > 0x7f ? 0x80 : 0); if (val <= 0x7f) { return; }
        this.buf[this.pos++] = ((val >>>= 7) & 0x7f) | (val > 0x7f ? 0x80 : 0); if (val <= 0x7f) { return; }
        this.buf[this.pos++] =   (val >>> 7) & 0x7f;
    },

    writeSVarint: function(val) {
        this.writeVarint(val < 0 ? -val * 2 - 1 : val * 2);
    },

    writeBoolean: function(val) {
        this.writeVarint(Boolean(val));
    },

    writeString: function(str) {
        str = String(str);
        this.realloc(str.length * 4);

        this.pos++; // reserve 1 byte for short string length

        var startPos = this.pos;
        // write the string directly to the buffer and see how much was written
        this.pos = writeUtf8(this.buf, str, this.pos);
        var len = this.pos - startPos;

        if (len >= 0x80) { makeRoomForExtraLength(startPos, len, this); }

        // finally, write the message length in the reserved place and restore the position
        this.pos = startPos - 1;
        this.writeVarint(len);
        this.pos += len;
    },

    writeFloat: function(val) {
        this.realloc(4);
        ieee754.write(this.buf, val, this.pos, true, 23, 4);
        this.pos += 4;
    },

    writeDouble: function(val) {
        this.realloc(8);
        ieee754.write(this.buf, val, this.pos, true, 52, 8);
        this.pos += 8;
    },

    writeBytes: function(buffer) {
        var this$1 = this;

        var len = buffer.length;
        this.writeVarint(len);
        this.realloc(len);
        for (var i = 0; i < len; i++) { this$1.buf[this$1.pos++] = buffer[i]; }
    },

    writeRawMessage: function(fn, obj) {
        this.pos++; // reserve 1 byte for short message length

        // write the message directly to the buffer and see how much was written
        var startPos = this.pos;
        fn(obj, this);
        var len = this.pos - startPos;

        if (len >= 0x80) { makeRoomForExtraLength(startPos, len, this); }

        // finally, write the message length in the reserved place and restore the position
        this.pos = startPos - 1;
        this.writeVarint(len);
        this.pos += len;
    },

    writeMessage: function(tag, fn, obj) {
        this.writeTag(tag, Pbf.Bytes);
        this.writeRawMessage(fn, obj);
    },

    writePackedVarint:   function(tag, arr) { this.writeMessage(tag, writePackedVarint, arr);   },
    writePackedSVarint:  function(tag, arr) { this.writeMessage(tag, writePackedSVarint, arr);  },
    writePackedBoolean:  function(tag, arr) { this.writeMessage(tag, writePackedBoolean, arr);  },
    writePackedFloat:    function(tag, arr) { this.writeMessage(tag, writePackedFloat, arr);    },
    writePackedDouble:   function(tag, arr) { this.writeMessage(tag, writePackedDouble, arr);   },
    writePackedFixed32:  function(tag, arr) { this.writeMessage(tag, writePackedFixed32, arr);  },
    writePackedSFixed32: function(tag, arr) { this.writeMessage(tag, writePackedSFixed32, arr); },
    writePackedFixed64:  function(tag, arr) { this.writeMessage(tag, writePackedFixed64, arr);  },
    writePackedSFixed64: function(tag, arr) { this.writeMessage(tag, writePackedSFixed64, arr); },

    writeBytesField: function(tag, buffer) {
        this.writeTag(tag, Pbf.Bytes);
        this.writeBytes(buffer);
    },
    writeFixed32Field: function(tag, val) {
        this.writeTag(tag, Pbf.Fixed32);
        this.writeFixed32(val);
    },
    writeSFixed32Field: function(tag, val) {
        this.writeTag(tag, Pbf.Fixed32);
        this.writeSFixed32(val);
    },
    writeFixed64Field: function(tag, val) {
        this.writeTag(tag, Pbf.Fixed64);
        this.writeFixed64(val);
    },
    writeSFixed64Field: function(tag, val) {
        this.writeTag(tag, Pbf.Fixed64);
        this.writeSFixed64(val);
    },
    writeVarintField: function(tag, val) {
        this.writeTag(tag, Pbf.Varint);
        this.writeVarint(val);
    },
    writeSVarintField: function(tag, val) {
        this.writeTag(tag, Pbf.Varint);
        this.writeSVarint(val);
    },
    writeStringField: function(tag, str) {
        this.writeTag(tag, Pbf.Bytes);
        this.writeString(str);
    },
    writeFloatField: function(tag, val) {
        this.writeTag(tag, Pbf.Fixed32);
        this.writeFloat(val);
    },
    writeDoubleField: function(tag, val) {
        this.writeTag(tag, Pbf.Fixed64);
        this.writeDouble(val);
    },
    writeBooleanField: function(tag, val) {
        this.writeVarintField(tag, Boolean(val));
    }
};

function readVarintRemainder(l, s, p) {
    var buf = p.buf,
        h, b;

    b = buf[p.pos++]; h  = (b & 0x70) >> 4;  if (b < 0x80) { return toNum(l, h, s); }
    b = buf[p.pos++]; h |= (b & 0x7f) << 3;  if (b < 0x80) { return toNum(l, h, s); }
    b = buf[p.pos++]; h |= (b & 0x7f) << 10; if (b < 0x80) { return toNum(l, h, s); }
    b = buf[p.pos++]; h |= (b & 0x7f) << 17; if (b < 0x80) { return toNum(l, h, s); }
    b = buf[p.pos++]; h |= (b & 0x7f) << 24; if (b < 0x80) { return toNum(l, h, s); }
    b = buf[p.pos++]; h |= (b & 0x01) << 31; if (b < 0x80) { return toNum(l, h, s); }

    throw new Error('Expected varint not more than 10 bytes');
}

function readPackedEnd(pbf) {
    return pbf.type === Pbf.Bytes ?
        pbf.readVarint() + pbf.pos : pbf.pos + 1;
}

function toNum(low, high, isSigned) {
    if (isSigned) {
        return high * 0x100000000 + (low >>> 0);
    }

    return ((high >>> 0) * 0x100000000) + (low >>> 0);
}

function writeBigVarint(val, pbf) {
    var low, high;

    if (val >= 0) {
        low  = (val % 0x100000000) | 0;
        high = (val / 0x100000000) | 0;
    } else {
        low  = ~(-val % 0x100000000);
        high = ~(-val / 0x100000000);

        if (low ^ 0xffffffff) {
            low = (low + 1) | 0;
        } else {
            low = 0;
            high = (high + 1) | 0;
        }
    }

    if (val >= 0x10000000000000000 || val < -0x10000000000000000) {
        throw new Error('Given varint doesn\'t fit into 10 bytes');
    }

    pbf.realloc(10);

    writeBigVarintLow(low, high, pbf);
    writeBigVarintHigh(high, pbf);
}

function writeBigVarintLow(low, high, pbf) {
    pbf.buf[pbf.pos++] = low & 0x7f | 0x80; low >>>= 7;
    pbf.buf[pbf.pos++] = low & 0x7f | 0x80; low >>>= 7;
    pbf.buf[pbf.pos++] = low & 0x7f | 0x80; low >>>= 7;
    pbf.buf[pbf.pos++] = low & 0x7f | 0x80; low >>>= 7;
    pbf.buf[pbf.pos]   = low & 0x7f;
}

function writeBigVarintHigh(high, pbf) {
    var lsb = (high & 0x07) << 4;

    pbf.buf[pbf.pos++] |= lsb         | ((high >>>= 3) ? 0x80 : 0); if (!high) { return; }
    pbf.buf[pbf.pos++]  = high & 0x7f | ((high >>>= 7) ? 0x80 : 0); if (!high) { return; }
    pbf.buf[pbf.pos++]  = high & 0x7f | ((high >>>= 7) ? 0x80 : 0); if (!high) { return; }
    pbf.buf[pbf.pos++]  = high & 0x7f | ((high >>>= 7) ? 0x80 : 0); if (!high) { return; }
    pbf.buf[pbf.pos++]  = high & 0x7f | ((high >>>= 7) ? 0x80 : 0); if (!high) { return; }
    pbf.buf[pbf.pos++]  = high & 0x7f;
}

function makeRoomForExtraLength(startPos, len, pbf) {
    var extraLen =
        len <= 0x3fff ? 1 :
        len <= 0x1fffff ? 2 :
        len <= 0xfffffff ? 3 : Math.ceil(Math.log(len) / (Math.LN2 * 7));

    // if 1 byte isn't enough for encoding message length, shift the data to the right
    pbf.realloc(extraLen);
    for (var i = pbf.pos - 1; i >= startPos; i--) { pbf.buf[i + extraLen] = pbf.buf[i]; }
}

function writePackedVarint(arr, pbf)   { for (var i = 0; i < arr.length; i++) { pbf.writeVarint(arr[i]); }   }
function writePackedSVarint(arr, pbf)  { for (var i = 0; i < arr.length; i++) { pbf.writeSVarint(arr[i]); }  }
function writePackedFloat(arr, pbf)    { for (var i = 0; i < arr.length; i++) { pbf.writeFloat(arr[i]); }    }
function writePackedDouble(arr, pbf)   { for (var i = 0; i < arr.length; i++) { pbf.writeDouble(arr[i]); }   }
function writePackedBoolean(arr, pbf)  { for (var i = 0; i < arr.length; i++) { pbf.writeBoolean(arr[i]); }  }
function writePackedFixed32(arr, pbf)  { for (var i = 0; i < arr.length; i++) { pbf.writeFixed32(arr[i]); }  }
function writePackedSFixed32(arr, pbf) { for (var i = 0; i < arr.length; i++) { pbf.writeSFixed32(arr[i]); } }
function writePackedFixed64(arr, pbf)  { for (var i = 0; i < arr.length; i++) { pbf.writeFixed64(arr[i]); }  }
function writePackedSFixed64(arr, pbf) { for (var i = 0; i < arr.length; i++) { pbf.writeSFixed64(arr[i]); } }

// Buffer code below from https://github.com/feross/buffer, MIT-licensed

function readUInt32(buf, pos) {
    return ((buf[pos]) |
        (buf[pos + 1] << 8) |
        (buf[pos + 2] << 16)) +
        (buf[pos + 3] * 0x1000000);
}

function writeInt32(buf, val, pos) {
    buf[pos] = val;
    buf[pos + 1] = (val >>> 8);
    buf[pos + 2] = (val >>> 16);
    buf[pos + 3] = (val >>> 24);
}

function readInt32(buf, pos) {
    return ((buf[pos]) |
        (buf[pos + 1] << 8) |
        (buf[pos + 2] << 16)) +
        (buf[pos + 3] << 24);
}

function readUtf8(buf, pos, end) {
    var str = '';
    var i = pos;

    while (i < end) {
        var b0 = buf[i];
        var c = null; // codepoint
        var bytesPerSequence =
            b0 > 0xEF ? 4 :
            b0 > 0xDF ? 3 :
            b0 > 0xBF ? 2 : 1;

        if (i + bytesPerSequence > end) { break; }

        var b1, b2, b3;

        if (bytesPerSequence === 1) {
            if (b0 < 0x80) {
                c = b0;
            }
        } else if (bytesPerSequence === 2) {
            b1 = buf[i + 1];
            if ((b1 & 0xC0) === 0x80) {
                c = (b0 & 0x1F) << 0x6 | (b1 & 0x3F);
                if (c <= 0x7F) {
                    c = null;
                }
            }
        } else if (bytesPerSequence === 3) {
            b1 = buf[i + 1];
            b2 = buf[i + 2];
            if ((b1 & 0xC0) === 0x80 && (b2 & 0xC0) === 0x80) {
                c = (b0 & 0xF) << 0xC | (b1 & 0x3F) << 0x6 | (b2 & 0x3F);
                if (c <= 0x7FF || (c >= 0xD800 && c <= 0xDFFF)) {
                    c = null;
                }
            }
        } else if (bytesPerSequence === 4) {
            b1 = buf[i + 1];
            b2 = buf[i + 2];
            b3 = buf[i + 3];
            if ((b1 & 0xC0) === 0x80 && (b2 & 0xC0) === 0x80 && (b3 & 0xC0) === 0x80) {
                c = (b0 & 0xF) << 0x12 | (b1 & 0x3F) << 0xC | (b2 & 0x3F) << 0x6 | (b3 & 0x3F);
                if (c <= 0xFFFF || c >= 0x110000) {
                    c = null;
                }
            }
        }

        if (c === null) {
            c = 0xFFFD;
            bytesPerSequence = 1;

        } else if (c > 0xFFFF) {
            c -= 0x10000;
            str += String.fromCharCode(c >>> 10 & 0x3FF | 0xD800);
            c = 0xDC00 | c & 0x3FF;
        }

        str += String.fromCharCode(c);
        i += bytesPerSequence;
    }

    return str;
}

function writeUtf8(buf, str, pos) {
    for (var i = 0, c, lead; i < str.length; i++) {
        c = str.charCodeAt(i); // code point

        if (c > 0xD7FF && c < 0xE000) {
            if (lead) {
                if (c < 0xDC00) {
                    buf[pos++] = 0xEF;
                    buf[pos++] = 0xBF;
                    buf[pos++] = 0xBD;
                    lead = c;
                    continue;
                } else {
                    c = lead - 0xD800 << 10 | c - 0xDC00 | 0x10000;
                    lead = null;
                }
            } else {
                if (c > 0xDBFF || (i + 1 === str.length)) {
                    buf[pos++] = 0xEF;
                    buf[pos++] = 0xBF;
                    buf[pos++] = 0xBD;
                } else {
                    lead = c;
                }
                continue;
            }
        } else if (lead) {
            buf[pos++] = 0xEF;
            buf[pos++] = 0xBF;
            buf[pos++] = 0xBD;
            lead = null;
        }

        if (c < 0x80) {
            buf[pos++] = c;
        } else {
            if (c < 0x800) {
                buf[pos++] = c >> 0x6 | 0xC0;
            } else {
                if (c < 0x10000) {
                    buf[pos++] = c >> 0xC | 0xE0;
                } else {
                    buf[pos++] = c >> 0x12 | 0xF0;
                    buf[pos++] = c >> 0xC & 0x3F | 0x80;
                }
                buf[pos++] = c >> 0x6 & 0x3F | 0x80;
            }
            buf[pos++] = c & 0x3F | 0x80;
        }
    }
    return pos;
}

var index$5 = Point$1;

function Point$1(x, y) {
    this.x = x;
    this.y = y;
}

Point$1.prototype = {
    clone: function() { return new Point$1(this.x, this.y); },

    add:     function(p) { return this.clone()._add(p);     },
    sub:     function(p) { return this.clone()._sub(p);     },
    mult:    function(k) { return this.clone()._mult(k);    },
    div:     function(k) { return this.clone()._div(k);     },
    rotate:  function(a) { return this.clone()._rotate(a);  },
    matMult: function(m) { return this.clone()._matMult(m); },
    unit:    function() { return this.clone()._unit(); },
    perp:    function() { return this.clone()._perp(); },
    round:   function() { return this.clone()._round(); },

    mag: function() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    },

    equals: function(p) {
        return this.x === p.x &&
               this.y === p.y;
    },

    dist: function(p) {
        return Math.sqrt(this.distSqr(p));
    },

    distSqr: function(p) {
        var dx = p.x - this.x,
            dy = p.y - this.y;
        return dx * dx + dy * dy;
    },

    angle: function() {
        return Math.atan2(this.y, this.x);
    },

    angleTo: function(b) {
        return Math.atan2(this.y - b.y, this.x - b.x);
    },

    angleWith: function(b) {
        return this.angleWithSep(b.x, b.y);
    },

    // Find the angle of the two vectors, solving the formula for the cross product a x b = |a||b|sin(?) for ?.
    angleWithSep: function(x, y) {
        return Math.atan2(
            this.x * y - this.y * x,
            this.x * x + this.y * y);
    },

    _matMult: function(m) {
        var x = m[0] * this.x + m[1] * this.y,
            y = m[2] * this.x + m[3] * this.y;
        this.x = x;
        this.y = y;
        return this;
    },

    _add: function(p) {
        this.x += p.x;
        this.y += p.y;
        return this;
    },

    _sub: function(p) {
        this.x -= p.x;
        this.y -= p.y;
        return this;
    },

    _mult: function(k) {
        this.x *= k;
        this.y *= k;
        return this;
    },

    _div: function(k) {
        this.x /= k;
        this.y /= k;
        return this;
    },

    _unit: function() {
        this._div(this.mag());
        return this;
    },

    _perp: function() {
        var y = this.y;
        this.y = this.x;
        this.x = -y;
        return this;
    },

    _rotate: function(angle) {
        var cos = Math.cos(angle),
            sin = Math.sin(angle),
            x = cos * this.x - sin * this.y,
            y = sin * this.x + cos * this.y;
        this.x = x;
        this.y = y;
        return this;
    },

    _round: function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this;
    }
};

// constructs Point from an array if necessary
Point$1.convert = function (a) {
    if (a instanceof Point$1) {
        return a;
    }
    if (Array.isArray(a)) {
        return new Point$1(a[0], a[1]);
    }
    return a;
};

var Point = index$5;

var vectortilefeature = VectorTileFeature$2;

function VectorTileFeature$2(pbf, end, extent, keys, values) {
    // Public
    this.properties = {};
    this.extent = extent;
    this.type = 0;

    // Private
    this._pbf = pbf;
    this._geometry = -1;
    this._keys = keys;
    this._values = values;

    pbf.readFields(readFeature, this, end);
}

function readFeature(tag, feature, pbf) {
    if (tag == 1) { feature.id = pbf.readVarint(); }
    else if (tag == 2) { readTag(pbf, feature); }
    else if (tag == 3) { feature.type = pbf.readVarint(); }
    else if (tag == 4) { feature._geometry = pbf.pos; }
}

function readTag(pbf, feature) {
    var end = pbf.readVarint() + pbf.pos;

    while (pbf.pos < end) {
        var key = feature._keys[pbf.readVarint()],
            value = feature._values[pbf.readVarint()];
        feature.properties[key] = value;
    }
}

VectorTileFeature$2.types = ['Unknown', 'Point', 'LineString', 'Polygon'];

VectorTileFeature$2.prototype.loadGeometry = function() {
    var pbf = this._pbf;
    pbf.pos = this._geometry;

    var end = pbf.readVarint() + pbf.pos,
        cmd = 1,
        length = 0,
        x = 0,
        y = 0,
        lines = [],
        line;

    while (pbf.pos < end) {
        if (!length) {
            var cmdLen = pbf.readVarint();
            cmd = cmdLen & 0x7;
            length = cmdLen >> 3;
        }

        length--;

        if (cmd === 1 || cmd === 2) {
            x += pbf.readSVarint();
            y += pbf.readSVarint();

            if (cmd === 1) { // moveTo
                if (line) { lines.push(line); }
                line = [];
            }

            line.push(new Point(x, y));

        } else if (cmd === 7) {

            // Workaround for https://github.com/mapbox/mapnik-vector-tile/issues/90
            if (line) {
                line.push(line[0].clone()); // closePolygon
            }

        } else {
            throw new Error('unknown command ' + cmd);
        }
    }

    if (line) { lines.push(line); }

    return lines;
};

VectorTileFeature$2.prototype.bbox = function() {
    var pbf = this._pbf;
    pbf.pos = this._geometry;

    var end = pbf.readVarint() + pbf.pos,
        cmd = 1,
        length = 0,
        x = 0,
        y = 0,
        x1 = Infinity,
        x2 = -Infinity,
        y1 = Infinity,
        y2 = -Infinity;

    while (pbf.pos < end) {
        if (!length) {
            var cmdLen = pbf.readVarint();
            cmd = cmdLen & 0x7;
            length = cmdLen >> 3;
        }

        length--;

        if (cmd === 1 || cmd === 2) {
            x += pbf.readSVarint();
            y += pbf.readSVarint();
            if (x < x1) { x1 = x; }
            if (x > x2) { x2 = x; }
            if (y < y1) { y1 = y; }
            if (y > y2) { y2 = y; }

        } else if (cmd !== 7) {
            throw new Error('unknown command ' + cmd);
        }
    }

    return [x1, y1, x2, y2];
};

VectorTileFeature$2.prototype.toGeoJSON = function(x, y, z) {
    var size = this.extent * Math.pow(2, z),
        x0 = this.extent * x,
        y0 = this.extent * y,
        coords = this.loadGeometry(),
        type = VectorTileFeature$2.types[this.type],
        i, j;

    function project(line) {
        for (var j = 0; j < line.length; j++) {
            var p = line[j], y2 = 180 - (p.y + y0) * 360 / size;
            line[j] = [
                (p.x + x0) * 360 / size - 180,
                360 / Math.PI * Math.atan(Math.exp(y2 * Math.PI / 180)) - 90
            ];
        }
    }

    switch (this.type) {
    case 1:
        var points = [];
        for (i = 0; i < coords.length; i++) {
            points[i] = coords[i][0];
        }
        coords = points;
        project(coords);
        break;

    case 2:
        for (i = 0; i < coords.length; i++) {
            project(coords[i]);
        }
        break;

    case 3:
        coords = classifyRings(coords);
        for (i = 0; i < coords.length; i++) {
            for (j = 0; j < coords[i].length; j++) {
                project(coords[i][j]);
            }
        }
        break;
    }

    if (coords.length === 1) {
        coords = coords[0];
    } else {
        type = 'Multi' + type;
    }

    var result = {
        type: "Feature",
        geometry: {
            type: type,
            coordinates: coords
        },
        properties: this.properties
    };

    if ('id' in this) {
        result.id = this.id;
    }

    return result;
};

// classifies an array of rings into polygons with outer rings and holes

function classifyRings(rings) {
    var len = rings.length;

    if (len <= 1) { return [rings]; }

    var polygons = [],
        polygon,
        ccw;

    for (var i = 0; i < len; i++) {
        var area = signedArea(rings[i]);
        if (area === 0) { continue; }

        if (ccw === undefined) { ccw = area < 0; }

        if (ccw === area < 0) {
            if (polygon) { polygons.push(polygon); }
            polygon = [rings[i]];

        } else {
            polygon.push(rings[i]);
        }
    }
    if (polygon) { polygons.push(polygon); }

    return polygons;
}

function signedArea(ring) {
    var sum = 0;
    for (var i = 0, len = ring.length, j = len - 1, p1, p2; i < len; j = i++) {
        p1 = ring[i];
        p2 = ring[j];
        sum += (p2.x - p1.x) * (p1.y + p2.y);
    }
    return sum;
}

var VectorTileFeature$1 = vectortilefeature;

var vectortilelayer = VectorTileLayer$2;

function VectorTileLayer$2(pbf, end) {
    // Public
    this.version = 1;
    this.name = null;
    this.extent = 4096;
    this.length = 0;

    // Private
    this._pbf = pbf;
    this._keys = [];
    this._values = [];
    this._features = [];

    pbf.readFields(readLayer, this, end);

    this.length = this._features.length;
}

function readLayer(tag, layer, pbf) {
    if (tag === 15) { layer.version = pbf.readVarint(); }
    else if (tag === 1) { layer.name = pbf.readString(); }
    else if (tag === 5) { layer.extent = pbf.readVarint(); }
    else if (tag === 2) { layer._features.push(pbf.pos); }
    else if (tag === 3) { layer._keys.push(pbf.readString()); }
    else if (tag === 4) { layer._values.push(readValueMessage(pbf)); }
}

function readValueMessage(pbf) {
    var value = null,
        end = pbf.readVarint() + pbf.pos;

    while (pbf.pos < end) {
        var tag = pbf.readVarint() >> 3;

        value = tag === 1 ? pbf.readString() :
            tag === 2 ? pbf.readFloat() :
            tag === 3 ? pbf.readDouble() :
            tag === 4 ? pbf.readVarint64() :
            tag === 5 ? pbf.readVarint() :
            tag === 6 ? pbf.readSVarint() :
            tag === 7 ? pbf.readBoolean() : null;
    }

    return value;
}

// return feature `i` from this layer as a `VectorTileFeature`
VectorTileLayer$2.prototype.feature = function(i) {
    if (i < 0 || i >= this._features.length) { throw new Error('feature index out of bounds'); }

    this._pbf.pos = this._features[i];

    var end = this._pbf.readVarint() + this._pbf.pos;
    return new VectorTileFeature$1(this._pbf, end, this.extent, this._keys, this._values);
};

var VectorTileLayer$1 = vectortilelayer;

var vectortile = VectorTile$1;

function VectorTile$1(pbf, end) {
    this.layers = pbf.readFields(readTile, {}, end);
}

function readTile(tag, layers, pbf) {
    if (tag === 3) {
        var layer = new VectorTileLayer$1(pbf, pbf.readVarint() + pbf.pos);
        if (layer.length) { layers[layer.name] = layer; }
    }
}

var VectorTile = vectortile;

L.SVG.Tile = L.SVG.extend({

	initialize: function (tileCoord, tileSize, options) {
		L.SVG.prototype.initialize.call(this, options);
		this._tileCoord = tileCoord;
		this._size = tileSize;

		this._initContainer();
		this._container.setAttribute('width', this._size.x);
		this._container.setAttribute('height', this._size.y);
		this._container.setAttribute('viewBox', [0, 0, this._size.x, this._size.y].join(' '));

		this._layers = {};
	},

	getCoord: function() {
		return this._tileCoord;
	},

	getContainer: function() {
		return this._container;
	},

	onAdd: L.Util.falseFn,

	addTo: function(map) {
		this._map = map;
		if (this.options.interactive) {
			for (var i in this._layers) {
				var layer = this._layers[i];
				// By default, Leaflet tiles do not have pointer events.
				layer._path.style.pointerEvents = 'auto';
				this._map._targets[L.stamp(layer._path)] = layer;
			}
		}
	},

	removeFrom: function (map) {
		if (this.options.interactive) {
			for (var i in this._layers) {
				var layer = this._layers[i];
				delete this._map._targets[L.stamp(layer._path)];
			}
		}
		delete this._map;
	},

	_initContainer: function() {
		L.SVG.prototype._initContainer.call(this);
		var rect =  L.SVG.create('rect');
	},

	/// TODO: Modify _initPath to include an extra parameter, a group name
	/// to order symbolizers by z-index

	_addPath: function (layer) {
		this._rootGroup.appendChild(layer._path);
		this._layers[L.stamp(layer)] = layer;
	},

	_updateIcon: function (layer) {
		var path = layer._path = L.SVG.create('image'),
		    icon = layer.options.icon,
		    options = icon.options,
		    size = L.point(options.iconSize),
		    anchor = options.iconAnchor ||
		        	 size && size.divideBy(2, true),
		    p = layer._point.subtract(anchor);
		path.setAttribute('x', p.x);
		path.setAttribute('y', p.y);
		path.setAttribute('width', size.x + 'px');
		path.setAttribute('height', size.y + 'px');
		path.setAttribute('href', options.iconUrl);
	}
});


L.svg.tile = function(tileCoord, tileSize, opts){
	return new L.SVG.Tile(tileCoord, tileSize, opts);
};

// ??class Symbolizer
// ??inherits Class
// The abstract Symbolizer class is mostly equivalent in concept to a `L.Path` - it's an interface for
// polylines, polygons and circles. But instead of representing leaflet Layers,
// it represents things that have to be drawn inside a vector tile.

// A vector tile *data layer* might have zero, one, or more *symbolizer definitions*
// A vector tile *feature* might have zero, one, or more *symbolizers*.
// The actual symbolizers applied will depend on filters and the symbolizer functions.

var Symbolizer = L.Class.extend({
	// ??method initialize(feature: GeoJSON, pxPerExtent: Number)
	// Initializes a new Line Symbolizer given a GeoJSON feature and the
	// pixel-to-coordinate-units ratio. Internal use only.

	// ??method render(renderer, style)
	// Renders this symbolizer in the given tiled renderer, with the given
	// `L.Path` options.  Internal use only.
	render: function(renderer, style) {
		this._renderer = renderer;
		this.options = style;
		renderer._initPath(this);
		renderer._updateStyle(this);
	},

	// ??method render(renderer, style)
	// Updates the `L.Path` options used to style this symbolizer, and re-renders it.
	// Internal use only.
	updateStyle: function(renderer, style) {
		this.options = style;
		renderer._updateStyle(this);
	},

	_getPixelBounds: function() {
		var parts = this._parts;
		var bounds = L.bounds([]);
		for (var i = 0; i < parts.length; i++) {
			var part = parts[i];
			for (var j = 0; j < part.length; j++) {
				bounds.extend(part[j]);
			}
		}

		var w = this._clickTolerance(),
		    p = new L.Point(w, w);

		bounds.min._subtract(p);
		bounds.max._add(p);

		return bounds;
	},
	_clickTolerance: L.Path.prototype._clickTolerance,
});

// Contains mixins which are common to the Line Symbolizer and the Fill Symbolizer.

var PolyBase = {
	_makeFeatureParts: function(feat, pxPerExtent) {
		var rings = feat.geometry;
		var coord;

		this._parts = [];
		for (var i = 0; i < rings.length; i++) {
			var ring = rings[i];
			var part = [];
			for (var j = 0; j < ring.length; j++) {
				coord = ring[j];
				// Protobuf vector tiles return {x: , y:}
				// Geojson-vt returns [,]
				part.push(L.point(coord).scaleBy(pxPerExtent));
			}
			this._parts.push(part);
		}
	},

	makeInteractive: function() {
		this._pxBounds = this._getPixelBounds();
	}
};

// ??class PointSymbolizer
// ??inherits CircleMarker
// A symbolizer for points.

var PointSymbolizer = L.CircleMarker.extend({
	includes: Symbolizer.prototype,

	statics: {
		iconCache: {}
	},

	initialize: function(feature, pxPerExtent) {
		this.properties = feature.properties;
		this._makeFeatureParts(feature, pxPerExtent);
	},

	render: function(renderer, style) {
		Symbolizer.prototype.render.call(this, renderer, style);
		this._radius = style.radius || L.CircleMarker.prototype.options.radius;
		this._updatePath();
	},

	_makeFeatureParts: function(feat, pxPerExtent) {
		var coord = feat.geometry[0];
		if (typeof coord[0] === 'object' && 'x' in coord[0]) {
			// Protobuf vector tiles return [{x: , y:}]
			this._point = L.point(coord[0]).scaleBy(pxPerExtent);
			this._empty = L.Util.falseFn;
		} else {
			// Geojson-vt returns [,]
			this._point = L.point(coord).scaleBy(pxPerExtent);
			this._empty = L.Util.falseFn;
		}
	},

	makeInteractive: function() {
		this._updateBounds();
	},

	updateStyle: function(renderer, style) {
		this._radius = style.radius || this._radius;
		this._updateBounds();
		return Symbolizer.prototype.updateStyle.call(this, renderer, style);
	},

	_updateBounds: function() {
		var icon = this.options.icon;
		if (icon) {
			var size = L.point(icon.options.iconSize),
			    anchor = icon.options.iconAnchor ||
			             size && size.divideBy(2, true),
			    p = this._point.subtract(anchor);
			this._pxBounds = new L.Bounds(p, p.add(icon.options.iconSize));
		} else {
			L.CircleMarker.prototype._updateBounds.call(this);
		}
	},

	_updatePath: function() {
		if (this.options.icon) {
			this._renderer._updateIcon(this);
		} else {
			L.CircleMarker.prototype._updatePath.call(this);
		}
	},

	_getImage: function () {
		if (this.options.icon) {
			var url = this.options.icon.options.iconUrl,
			    img = PointSymbolizer.iconCache[url];
			if (!img) {
				var icon = this.options.icon;
				img = PointSymbolizer.iconCache[url] = icon.createIcon();
			}
			return img;
		} else {
			return null;
		}

	},

	_containsPoint: function(p) {
		var icon = this.options.icon;
		if (icon) {
			return this._pxBounds.contains(p);
		} else {
			return L.CircleMarker.prototype._containsPoint.call(this, p);
		}
	}
});

// ??class LineSymbolizer
// ??inherits Polyline
// A symbolizer for lines. Can be applied to line and polygon features.

var LineSymbolizer = L.Polyline.extend({
	includes: [Symbolizer.prototype, PolyBase],

	initialize: function(feature, pxPerExtent) {
		this.properties = feature.properties;
		this._makeFeatureParts(feature, pxPerExtent);
	},

	render: function(renderer, style) {
		style.fill = false;
		Symbolizer.prototype.render.call(this, renderer, style);
		this._updatePath();
	},

	updateStyle: function(renderer, style) {
		style.fill = false;
		Symbolizer.prototype.updateStyle.call(this, renderer, style);
	},
});

// ??class FillSymbolizer
// ??inherits Polyline
// A symbolizer for filled areas. Applies only to polygon features.

var FillSymbolizer = L.Polygon.extend({
	includes: [Symbolizer.prototype, PolyBase],

	initialize: function(feature, pxPerExtent) {
		this.properties = feature.properties;
		this._makeFeatureParts(feature, pxPerExtent);
	},

	render: function(renderer, style) {
		Symbolizer.prototype.render.call(this, renderer, style);
		this._updatePath();
	}
});

/* ??class VectorGrid
 * ??inherits GridLayer
 *
 * A `VectorGrid` is a generic, abstract class for displaying tiled vector data.
 * it provides facilities for symbolizing and rendering the data in the vector
 * tiles, but lacks the functionality to fetch the vector tiles from wherever
 * they are.
 *
 * Extends Leaflet's `L.GridLayer`.
 */

L.VectorGrid = L.GridLayer.extend({

	options: {
		// ??option rendererFactory = L.svg.tile
		// A factory method which will be used to instantiate the per-tile renderers.
		rendererFactory: L.svg.tile,

		// ??option vectorTileLayerStyles: Object = {}
		// A data structure holding initial symbolizer definitions for the vector features.
		vectorTileLayerStyles: {},

        onEachFeature: null,

		// ??option interactive: Boolean = false
		// Whether this `VectorGrid` fires `Interactive Layer` events.
		interactive: false,

		// ??option getFeatureId: Function = undefined
		// A function that, given a vector feature, returns an unique identifier for it, e.g.
		// `function(feat) { return feat.properties.uniqueIdField; }`.
		// Must be defined for `setFeatureStyle` to work.
	},

	initialize: function(options) {
		L.setOptions(this, options);
		L.GridLayer.prototype.initialize.apply(this, arguments);
		if (this.options.getFeatureId) {
			this._vectorTiles = {};
			this._overriddenStyles = {};
		}
		this._userLayers = {};
		this.on('tileunload', function(e) {
			this._tileUnload(e);
 		}, this);
		this._dataLayerNames = {};
	},

	createTile: function(coords, done) {
		var storeFeatures = this.options.getFeatureId;
		var onEachFeature = this.options.onEachFeature;

		var tileSize = this.getTileSize();
		var renderer = this.options.rendererFactory(coords, tileSize, this.options);

		var vectorTilePromise = this._getVectorTilePromise(coords);

		if (storeFeatures) {
			this._vectorTiles[this._tileCoordsToKey(coords)] = renderer;
			renderer._features = {};
		}

		vectorTilePromise.then( function renderTile(vectorTile) {
			for (var layerName in vectorTile.layers) {
				this._dataLayerNames[layerName] = true;
				var layer = vectorTile.layers[layerName];

				var pxPerExtent = this.getTileSize().divideBy(layer.extent);

				var layerStyle = this.options.vectorTileLayerStyles[ layerName ] ||
				L.Path.prototype.options;

				for (var i = 0; i < layer.features.length; i++) {
					var feat = layer.features[i];
					var id;

					var styleOptions = layerStyle;
					if (storeFeatures) {
						id = this.options.getFeatureId(feat);
						var styleOverride = this._overriddenStyles[id];
						if (styleOverride) {
							if (styleOverride[layerName]) {
								styleOptions = styleOverride[layerName];
							} else {
								styleOptions = styleOverride;
							}
						}
					}

					if (styleOptions instanceof Function) {
						styleOptions = styleOptions(feat.properties, coords.z, feat.type);
					}

					if (!(styleOptions instanceof Array)) {
						styleOptions = [styleOptions];
					}

					if (!styleOptions.length) {
						if (onEachFeature) {
							onEachFeature.call(this, feat, null, layer, coords);
						}
						continue;
					}

					var featureLayer = this._createLayer(feat, pxPerExtent);

					if (onEachFeature) {
						onEachFeature.call(this, feat, null, layer, coords);
					}

					for (var j = 0; j < styleOptions.length; j++) {
                        if (styleOptions[j] instanceof Function) {
                            var styleOption = styleOptions[j](feat.properties, coords.z, feat.type);
                        }
						var style = L.extend({}, L.Path.prototype.options, styleOption);
						featureLayer.render(renderer, style);
						renderer._addPath(featureLayer);
					}

					if (this.options.interactive) {
						featureLayer.makeInteractive();
					}

					if (storeFeatures) {
						renderer._features[id] = {
							layerName: layerName,
							feature: featureLayer
						};
					}
				}

			}
			if (this._map != null) {
				renderer.addTo(this._map);
			}
			L.Util.requestAnimFrame(done.bind(coords, null, null));
		}.bind(this));

		return renderer.getContainer();
	},

	// ??method setFeatureStyle(id: Number, layerStyle: L.Path Options): this
	// Given the unique ID for a vector features (as per the `getFeatureId` option),
	// re-symbolizes that feature across all tiles it appears in.
	setFeatureStyle: function(id, layerStyle) {
		this._overriddenStyles[id] = layerStyle;

		for (var tileKey in this._vectorTiles) {
			var tile = this._vectorTiles[tileKey];
			var features = tile._features;
			var data = features[id];
			if (data) {
				var feat = data.feature;

				var styleOptions = layerStyle;
				if (layerStyle[data.layerName]) {
					styleOptions = layerStyle[data.layerName];
				}

				this._updateStyles(feat, tile, styleOptions);
			}
		}
		return this;
	},

	// ??method setFeatureStyle(id: Number): this
	// Reverts the effects of a previous `setFeatureStyle` call.
	resetFeatureStyle: function(id) {
		delete this._overriddenStyles[id];

		for (var tileKey in this._vectorTiles) {
			var tile = this._vectorTiles[tileKey];
			var features = tile._features;
			var data = features[id];
			if (data) {
				var feat = data.feature;
				var styleOptions = this.options.vectorTileLayerStyles[ data.layerName ] ||
				L.Path.prototype.options;
				this._updateStyles(feat, tile, styleOptions);
			}
		}
		return this;
	},

	// ??method getDataLayerNames(): Array
	// Returns an array of strings, with all the known names of data layers in
	// the vector tiles displayed. Useful for introspection.
	getDataLayerNames: function() {
		return Object.keys(this._dataLayerNames);
	},

	vtGeometryToPoint: function(geometry, vtLayer, tileCoords) {
		var pxPerExtent = this.getTileSize().x / vtLayer.extent;
		var tileSize = this.getTileSize();
		var offset = tileCoords.scaleBy(tileSize);
		var point;
		if (typeof geometry[0] === 'object' && 'x' in geometry[0]) {
			// Protobuf vector tiles return [{x: , y:}]
			point = L.point(offset.x + (geometry[0].x * pxPerExtent), offset.y + (geometry[0].y * pxPerExtent));
		} else {
			// Geojson-vt returns [,]
			point = L.point(offset.x + (geometry[0] * pxPerExtent), offset.y + (geometry[1] * pxPerExtent));
		}
		return point;
	},

	vtGeometryToLatLng: function(geometry, vtLayer, tileCoords) {
		return this._map.unproject(this.vtGeometryToPoint(geometry, vtLayer, tileCoords));
	},

	addUserLayer: function(userLayer, tileCoords) {
		var tileKey = this._tileCoordsToKey(tileCoords);
		this._userLayers[tileKey] = this._userLayers[tileKey] || [];
		this._userLayers[tileKey].push(userLayer);
		this._map.addLayer(userLayer);
	},

	_tileUnload: function(e) {
		var tileKey = this._tileCoordsToKey(e.coords);
		if (this._vectorTiles) {
			delete this._vectorTiles[tileKey];
		}
		var userLayers = this._userLayers[tileKey];
		if (!userLayers) {
			return;
		}
		for(var i = 0; i < userLayers.length; i++) {
//			console.log('remove layer');
			this._map.removeLayer(userLayers[i]);
		}
		delete this._userLayers[tileKey];
	},

	_updateStyles: function(feat, renderer, styleOptions) {
		styleOptions = (styleOptions instanceof Function) ?
			styleOptions(feat.properties, renderer.getCoord().z, feat.type) :
			styleOptions;

		if (!(styleOptions instanceof Array)) {
			styleOptions = [styleOptions];
		}

		for (var j = 0; j < styleOptions.length; j++) {

            var styleOption = (styleOptions[j] instanceof Function) ?
                styleOptions[j](feat.properties, renderer.getCoord().z, feat.type) :
                styleOptions[j];

            var style = L.extend({}, L.Path.prototype.options, styleOption);
			feat.updateStyle(renderer, style);
		}
	},

	_createLayer: function(feat, pxPerExtent, layerStyle) {
		var layer;
		switch (feat.type) {
		case 1:
			layer = new PointSymbolizer(feat, pxPerExtent);
			break;
		case 2:
			layer = new LineSymbolizer(feat, pxPerExtent);
			break;
		case 3:
			layer = new FillSymbolizer(feat, pxPerExtent);
			break;
		}

		if (this.options.interactive) {
			layer.addEventParent(this);
		}

		return layer;
	},
});

/*
 * ??section Extension methods
 *
 * Classes inheriting from `VectorGrid` **must** define the `_getVectorTilePromise` private method.
 *
 * ??method getVectorTilePromise(coords: Object): Promise
 * Given a `coords` object in the form of `{x: Number, y: Number, z: Number}`,
 * this function must return a `Promise` for a vector tile.
 *
 */
L.vectorGrid = function (options) {
	return new L.VectorGrid(options);
};

/*
 * ??class VectorGrid.Protobuf
 * ??extends VectorGrid
 *
 * A `VectorGrid` for vector tiles fetched from the internet.
 * Tiles are supposed to be protobufs (AKA "protobuffer" or "Protocol Buffers"),
 * containing data which complies with the
 * [MapBox Vector Tile Specification](https://github.com/mapbox/vector-tile-spec/tree/master/2.1).
 *
 * This is the format used by:
 * - Mapbox Vector Tiles
 * - Mapzen Vector Tiles
 * - ESRI Vector Tiles
 * - [OpenMapTiles hosted Vector Tiles](https://openmaptiles.com/hosting/)
 *
 * ??example
 *
 * You must initialize a `VectorGrid.Protobuf` with a URL template, just like in
 * `L.TileLayer`s. The difference is that the template must point to vector tiles
 * (usually `.pbf` or `.mvt`) instead of raster (`.png` or `.jpg`) tiles, and that
 * you should define the styling for all the features.
 *
 * <br><br>
 *
 * For OpenMapTiles, with a key from [https://openmaptiles.org/docs/host/use-cdn/](https://openmaptiles.org/docs/host/use-cdn/),
 * initialization looks like this:
 *
 * ```
 * L.vectorGrid.protobuf("https://free-{s}.tilehosting.com/data/v3/{z}/{x}/{y}.pbf.pict?key={key}", {
 * 	vectorTileLayerStyles: { ... },
 * 	subdomains: "0123",
 * 	key: 'abcdefghi01234567890',
 * 	maxNativeZoom: 14
 * }).addTo(map);
 * ```
 *
 * And for Mapbox vector tiles, it looks like this:
 *
 * ```
 * L.vectorGrid.protobuf("https://{s}.tiles.mapbox.com/v4/mapbox.mapbox-streets-v6/{z}/{x}/{y}.vector.pbf?access_token={token}", {
 * 	vectorTileLayerStyles: { ... },
 * 	subdomains: "abcd",
 * 	token: "pk.abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRTS.TUVWXTZ0123456789abcde"
 * }).addTo(map);
 * ```
 */
L.VectorGrid.Protobuf = L.VectorGrid.extend({

	options: {
		// ??section
		// As with `L.TileLayer`, the URL template might contain a reference to
		// any option (see the example above and note the `{key}` or `token` in the URL
		// template, and the corresponding option).
		//
		// ??option subdomains: String = 'abc'
		// Akin to the `subdomains` option for `L.TileLayer`.
		subdomains: 'abc',	// Like L.TileLayer
		//
		// ??option fetchOptions: Object = {}
		// options passed to `fetch`, e.g. {credentials: 'same-origin'} to send cookie for the current domain
		fetchOptions: {}
	},

	initialize: function(url, options) {
		// Inherits options from geojson-vt!
// 		this._slicer = geojsonvt(geojson, options);
		this._url = url;
		L.VectorGrid.prototype.initialize.call(this, options);
	},

	// ??method setUrl(url: String, noRedraw?: Boolean): this
	// Updates the layer's URL template and redraws it (unless `noRedraw` is set to `true`).
	setUrl: function(url, noRedraw) {
		this._url = url;

		if (!noRedraw) {
			this.redraw();
		}

		return this;
	},

	_getSubdomain: L.TileLayer.prototype._getSubdomain,

	_getVectorTilePromise: function(coords) {
		var data = {
			s: this._getSubdomain(coords),
			x: coords.x,
			y: coords.y,
			z: coords.z
// 			z: this._getZoomForUrl()	/// TODO: Maybe replicate TileLayer's maxNativeZoom
		};
		if (this._map && !this._map.options.crs.infinite) {
			var invertedY = this._globalTileRange.max.y - coords.y;
			if (this.options.tms) { // Should this option be available in Leaflet.VectorGrid?
				data['y'] = invertedY;
			}
			data['-y'] = invertedY;
		}

		var tileUrl = L.Util.template(this._url, L.extend(data, this.options));

		return fetch(tileUrl, this.options.fetchOptions).then(function(response){

			if (!response.ok) {
				return {layers:[]};
			}

			return response.blob().then( function (blob) {
// 				console.log(blob);

				var reader = new FileReader();
				return new Promise(function(resolve){
					reader.addEventListener("loadend", function() {
						// reader.result contains the contents of blob as a typed array

						// blob.type === 'application/x-protobuf'
						var pbf = new index( reader.result );
// 						console.log(pbf);
						return resolve(new VectorTile( pbf ));

					});
					reader.readAsArrayBuffer(blob);
				});
			});
		}).then(function(json){

// 			console.log('Vector tile:', json.layers);
// 			console.log('Vector tile water:', json.layers.water);	// Instance of VectorTileLayer

			// Normalize feature getters into actual instanced features
			for (var layerName in json.layers) {
				var feats = [];

				for (var i=0; i<json.layers[layerName].length; i++) {
					var feat = json.layers[layerName].feature(i);
					feat.geometry = feat.loadGeometry();
					feats.push(feat);
				}

				json.layers[layerName].features = feats;
			}

			return json;
		});
	}
});


// ??factory L.vectorGrid.protobuf(url: String, options)
// Instantiates a new protobuf VectorGrid with the given URL template and options
L.vectorGrid.protobuf = function (url, options) {
	return new L.VectorGrid.Protobuf(url, options);
};

var workerCode = __$strToBlobUri("'use strict';\n\nvar simplify_1 = simplify$1;\n\n// calculate simplification data using optimized Douglas-Peucker algorithm\n\nfunction simplify$1(points, tolerance) {\n\n    var sqTolerance = tolerance * tolerance,\n        len = points.length,\n        first = 0,\n        last = len - 1,\n        stack = [],\n        i, maxSqDist, sqDist, index;\n\n    // always retain the endpoints (1 is the max value)\n    points[first][2] = 1;\n    points[last][2] = 1;\n\n    // avoid recursion by using a stack\n    while (last) {\n\n        maxSqDist = 0;\n\n        for (i = first + 1; i < last; i++) {\n            sqDist = getSqSegDist(points[i], points[first], points[last]);\n\n            if (sqDist > maxSqDist) {\n                index = i;\n                maxSqDist = sqDist;\n            }\n        }\n\n        if (maxSqDist > sqTolerance) {\n            points[index][2] = maxSqDist; // save the point importance in squared pixels as a z coordinate\n            stack.push(first);\n            stack.push(index);\n            first = index;\n\n        } else {\n            last = stack.pop();\n            first = stack.pop();\n        }\n    }\n}\n\n// square distance from a point to a segment\nfunction getSqSegDist(p, a, b) {\n\n    var x = a[0], y = a[1],\n        bx = b[0], by = b[1],\n        px = p[0], py = p[1],\n        dx = bx - x,\n        dy = by - y;\n\n    if (dx !== 0 || dy !== 0) {\n\n        var t = ((px - x) * dx + (py - y) * dy) / (dx * dx + dy * dy);\n\n        if (t > 1) {\n            x = bx;\n            y = by;\n\n        } else if (t > 0) {\n            x += dx * t;\n            y += dy * t;\n        }\n    }\n\n    dx = px - x;\n    dy = py - y;\n\n    return dx * dx + dy * dy;\n}\n\nvar convert_1 = convert$1;\n\nvar simplify = simplify_1;\n\n// converts GeoJSON feature into an intermediate projected JSON vector format with simplification data\n\nfunction convert$1(data, tolerance) {\n    var features = [];\n\n    if (data.type === 'FeatureCollection') {\n        for (var i = 0; i < data.features.length; i++) {\n            convertFeature(features, data.features[i], tolerance);\n        }\n    } else if (data.type === 'Feature') {\n        convertFeature(features, data, tolerance);\n\n    } else {\n        // single geometry or a geometry collection\n        convertFeature(features, {geometry: data}, tolerance);\n    }\n    return features;\n}\n\nfunction convertFeature(features, feature, tolerance) {\n    if (feature.geometry === null) {\n        // ignore features with null geometry\n        return;\n    }\n\n    var geom = feature.geometry,\n        type = geom.type,\n        coords = geom.coordinates,\n        tags = feature.properties,\n        i, j, rings, projectedRing;\n\n    if (type === 'Point') {\n        features.push(create(tags, 1, [projectPoint(coords)]));\n\n    } else if (type === 'MultiPoint') {\n        features.push(create(tags, 1, project(coords)));\n\n    } else if (type === 'LineString') {\n        features.push(create(tags, 2, [project(coords, tolerance)]));\n\n    } else if (type === 'MultiLineString' || type === 'Polygon') {\n        rings = [];\n        for (i = 0; i < coords.length; i++) {\n            projectedRing = project(coords[i], tolerance);\n            if (type === 'Polygon') { projectedRing.outer = (i === 0); }\n            rings.push(projectedRing);\n        }\n        features.push(create(tags, type === 'Polygon' ? 3 : 2, rings));\n\n    } else if (type === 'MultiPolygon') {\n        rings = [];\n        for (i = 0; i < coords.length; i++) {\n            for (j = 0; j < coords[i].length; j++) {\n                projectedRing = project(coords[i][j], tolerance);\n                projectedRing.outer = (j === 0);\n                rings.push(projectedRing);\n            }\n        }\n        features.push(create(tags, 3, rings));\n\n    } else if (type === 'GeometryCollection') {\n        for (i = 0; i < geom.geometries.length; i++) {\n            convertFeature(features, {\n                geometry: geom.geometries[i],\n                properties: tags\n            }, tolerance);\n        }\n\n    } else {\n        throw new Error('Input data is not a valid GeoJSON object.');\n    }\n}\n\nfunction create(tags, type, geometry) {\n    var feature = {\n        geometry: geometry,\n        type: type,\n        tags: tags || null,\n        min: [2, 1], // initial bbox values;\n        max: [-1, 0]  // note that coords are usually in [0..1] range\n    };\n    calcBBox(feature);\n    return feature;\n}\n\nfunction project(lonlats, tolerance) {\n    var projected = [];\n    for (var i = 0; i < lonlats.length; i++) {\n        projected.push(projectPoint(lonlats[i]));\n    }\n    if (tolerance) {\n        simplify(projected, tolerance);\n        calcSize(projected);\n    }\n    return projected;\n}\n\nfunction projectPoint(p) {\n    var sin = Math.sin(p[1] * Math.PI / 180),\n        x = (p[0] / 360 + 0.5),\n        y = (0.5 - 0.25 * Math.log((1 + sin) / (1 - sin)) / Math.PI);\n\n    y = y < 0 ? 0 :\n        y > 1 ? 1 : y;\n\n    return [x, y, 0];\n}\n\n// calculate area and length of the poly\nfunction calcSize(points) {\n    var area = 0,\n        dist = 0;\n\n    for (var i = 0, a, b; i < points.length - 1; i++) {\n        a = b || points[i];\n        b = points[i + 1];\n\n        area += a[0] * b[1] - b[0] * a[1];\n\n        // use Manhattan distance instead of Euclidian one to avoid expensive square root computation\n        dist += Math.abs(b[0] - a[0]) + Math.abs(b[1] - a[1]);\n    }\n    points.area = Math.abs(area / 2);\n    points.dist = dist;\n}\n\n// calculate the feature bounding box for faster clipping later\nfunction calcBBox(feature) {\n    var geometry = feature.geometry,\n        min = feature.min,\n        max = feature.max;\n\n    if (feature.type === 1) { calcRingBBox(min, max, geometry); }\n    else { for (var i = 0; i < geometry.length; i++) { calcRingBBox(min, max, geometry[i]); } }\n\n    return feature;\n}\n\nfunction calcRingBBox(min, max, points) {\n    for (var i = 0, p; i < points.length; i++) {\n        p = points[i];\n        min[0] = Math.min(p[0], min[0]);\n        max[0] = Math.max(p[0], max[0]);\n        min[1] = Math.min(p[1], min[1]);\n        max[1] = Math.max(p[1], max[1]);\n    }\n}\n\nvar tile = transformTile;\nvar point = transformPoint;\n\n// Transforms the coordinates of each feature in the given tile from\n// mercator-projected space into (extent x extent) tile space.\nfunction transformTile(tile, extent) {\n    if (tile.transformed) { return tile; }\n\n    var z2 = tile.z2,\n        tx = tile.x,\n        ty = tile.y,\n        i, j, k;\n\n    for (i = 0; i < tile.features.length; i++) {\n        var feature = tile.features[i],\n            geom = feature.geometry,\n            type = feature.type;\n\n        if (type === 1) {\n            for (j = 0; j < geom.length; j++) { geom[j] = transformPoint(geom[j], extent, z2, tx, ty); }\n\n        } else {\n            for (j = 0; j < geom.length; j++) {\n                var ring = geom[j];\n                for (k = 0; k < ring.length; k++) { ring[k] = transformPoint(ring[k], extent, z2, tx, ty); }\n            }\n        }\n    }\n\n    tile.transformed = true;\n\n    return tile;\n}\n\nfunction transformPoint(p, extent, z2, tx, ty) {\n    var x = Math.round(extent * (p[0] * z2 - tx)),\n        y = Math.round(extent * (p[1] * z2 - ty));\n    return [x, y];\n}\n\nvar transform$1 = {\n	tile: tile,\n	point: point\n};\n\nvar clip_1 = clip$1;\n\n/* clip features between two axis-parallel lines:\n *     |        |\n *  ___|___     |     /\n * /   |   \____|____/\n *     |        |\n */\n\nfunction clip$1(features, scale, k1, k2, axis, intersect, minAll, maxAll) {\n\n    k1 /= scale;\n    k2 /= scale;\n\n    if (minAll >= k1 && maxAll <= k2) { return features; } // trivial accept\n    else if (minAll > k2 || maxAll < k1) { return null; } // trivial reject\n\n    var clipped = [];\n\n    for (var i = 0; i < features.length; i++) {\n\n        var feature = features[i],\n            geometry = feature.geometry,\n            type = feature.type,\n            min, max;\n\n        min = feature.min[axis];\n        max = feature.max[axis];\n\n        if (min >= k1 && max <= k2) { // trivial accept\n            clipped.push(feature);\n            continue;\n        } else if (min > k2 || max < k1) { continue; } // trivial reject\n\n        var slices = type === 1 ?\n                clipPoints(geometry, k1, k2, axis) :\n                clipGeometry(geometry, k1, k2, axis, intersect, type === 3);\n\n        if (slices.length) {\n            // if a feature got clipped, it will likely get clipped on the next zoom level as well,\n            // so there's no need to recalculate bboxes\n            clipped.push({\n                geometry: slices,\n                type: type,\n                tags: features[i].tags || null,\n                min: feature.min,\n                max: feature.max\n            });\n        }\n    }\n\n    return clipped.length ? clipped : null;\n}\n\nfunction clipPoints(geometry, k1, k2, axis) {\n    var slice = [];\n\n    for (var i = 0; i < geometry.length; i++) {\n        var a = geometry[i],\n            ak = a[axis];\n\n        if (ak >= k1 && ak <= k2) { slice.push(a); }\n    }\n    return slice;\n}\n\nfunction clipGeometry(geometry, k1, k2, axis, intersect, closed) {\n\n    var slices = [];\n\n    for (var i = 0; i < geometry.length; i++) {\n\n        var ak = 0,\n            bk = 0,\n            b = null,\n            points = geometry[i],\n            area = points.area,\n            dist = points.dist,\n            outer = points.outer,\n            len = points.length,\n            a, j, last;\n\n        var slice = [];\n\n        for (j = 0; j < len - 1; j++) {\n            a = b || points[j];\n            b = points[j + 1];\n            ak = bk || a[axis];\n            bk = b[axis];\n\n            if (ak < k1) {\n\n                if ((bk > k2)) { // ---|-----|-->\n                    slice.push(intersect(a, b, k1), intersect(a, b, k2));\n                    if (!closed) { slice = newSlice(slices, slice, area, dist, outer); }\n\n                } else if (bk >= k1) { slice.push(intersect(a, b, k1)); } // ---|-->  |\n\n            } else if (ak > k2) {\n\n                if ((bk < k1)) { // <--|-----|---\n                    slice.push(intersect(a, b, k2), intersect(a, b, k1));\n                    if (!closed) { slice = newSlice(slices, slice, area, dist, outer); }\n\n                } else if (bk <= k2) { slice.push(intersect(a, b, k2)); } // |  <--|---\n\n            } else {\n\n                slice.push(a);\n\n                if (bk < k1) { // <--|---  |\n                    slice.push(intersect(a, b, k1));\n                    if (!closed) { slice = newSlice(slices, slice, area, dist, outer); }\n\n                } else if (bk > k2) { // |  ---|-->\n                    slice.push(intersect(a, b, k2));\n                    if (!closed) { slice = newSlice(slices, slice, area, dist, outer); }\n                }\n                // | --> |\n            }\n        }\n\n        // add the last point\n        a = points[len - 1];\n        ak = a[axis];\n        if (ak >= k1 && ak <= k2) { slice.push(a); }\n\n        // close the polygon if its endpoints are not the same after clipping\n\n        last = slice[slice.length - 1];\n        if (closed && last && (slice[0][0] !== last[0] || slice[0][1] !== last[1])) { slice.push(slice[0]); }\n\n        // add the final slice\n        newSlice(slices, slice, area, dist, outer);\n    }\n\n    return slices;\n}\n\nfunction newSlice(slices, slice, area, dist, outer) {\n    if (slice.length) {\n        // we don't recalculate the area/length of the unclipped geometry because the case where it goes\n        // below the visibility threshold as a result of clipping is rare, so we avoid doing unnecessary work\n        slice.area = area;\n        slice.dist = dist;\n        if (outer !== undefined) { slice.outer = outer; }\n\n        slices.push(slice);\n    }\n    return [];\n}\n\nvar clip$2 = clip_1;\n\nvar wrap_1 = wrap$1;\n\nfunction wrap$1(features, buffer, intersectX) {\n    var merged = features,\n        left  = clip$2(features, 1, -1 - buffer, buffer,     0, intersectX, -1, 2), // left world copy\n        right = clip$2(features, 1,  1 - buffer, 2 + buffer, 0, intersectX, -1, 2); // right world copy\n\n    if (left || right) {\n        merged = clip$2(features, 1, -buffer, 1 + buffer, 0, intersectX, -1, 2); // center world copy\n\n        if (left) { merged = shiftFeatureCoords(left, 1).concat(merged); } // merge left into center\n        if (right) { merged = merged.concat(shiftFeatureCoords(right, -1)); } // merge right into center\n    }\n\n    return merged;\n}\n\nfunction shiftFeatureCoords(features, offset) {\n    var newFeatures = [];\n\n    for (var i = 0; i < features.length; i++) {\n        var feature = features[i],\n            type = feature.type;\n\n        var newGeometry;\n\n        if (type === 1) {\n            newGeometry = shiftCoords(feature.geometry, offset);\n        } else {\n            newGeometry = [];\n            for (var j = 0; j < feature.geometry.length; j++) {\n                newGeometry.push(shiftCoords(feature.geometry[j], offset));\n            }\n        }\n\n        newFeatures.push({\n            geometry: newGeometry,\n            type: type,\n            tags: feature.tags,\n            min: [feature.min[0] + offset, feature.min[1]],\n            max: [feature.max[0] + offset, feature.max[1]]\n        });\n    }\n\n    return newFeatures;\n}\n\nfunction shiftCoords(points, offset) {\n    var newPoints = [];\n    newPoints.area = points.area;\n    newPoints.dist = points.dist;\n\n    for (var i = 0; i < points.length; i++) {\n        newPoints.push([points[i][0] + offset, points[i][1], points[i][2]]);\n    }\n    return newPoints;\n}\n\nvar tile$1 = createTile$1;\n\nfunction createTile$1(features, z2, tx, ty, tolerance, noSimplify) {\n    var tile = {\n        features: [],\n        numPoints: 0,\n        numSimplified: 0,\n        numFeatures: 0,\n        source: null,\n        x: tx,\n        y: ty,\n        z2: z2,\n        transformed: false,\n        min: [2, 1],\n        max: [-1, 0]\n    };\n    for (var i = 0; i < features.length; i++) {\n        tile.numFeatures++;\n        addFeature(tile, features[i], tolerance, noSimplify);\n\n        var min = features[i].min,\n            max = features[i].max;\n\n        if (min[0] < tile.min[0]) { tile.min[0] = min[0]; }\n        if (min[1] < tile.min[1]) { tile.min[1] = min[1]; }\n        if (max[0] > tile.max[0]) { tile.max[0] = max[0]; }\n        if (max[1] > tile.max[1]) { tile.max[1] = max[1]; }\n    }\n    return tile;\n}\n\nfunction addFeature(tile, feature, tolerance, noSimplify) {\n\n    var geom = feature.geometry,\n        type = feature.type,\n        simplified = [],\n        sqTolerance = tolerance * tolerance,\n        i, j, ring, p;\n\n    if (type === 1) {\n        for (i = 0; i < geom.length; i++) {\n            simplified.push(geom[i]);\n            tile.numPoints++;\n            tile.numSimplified++;\n        }\n\n    } else {\n\n        // simplify and transform projected coordinates for tile geometry\n        for (i = 0; i < geom.length; i++) {\n            ring = geom[i];\n\n            // filter out tiny polylines & polygons\n            if (!noSimplify && ((type === 2 && ring.dist < tolerance) ||\n                                (type === 3 && ring.area < sqTolerance))) {\n                tile.numPoints += ring.length;\n                continue;\n            }\n\n            var simplifiedRing = [];\n\n            for (j = 0; j < ring.length; j++) {\n                p = ring[j];\n                // keep points with importance > tolerance\n                if (noSimplify || p[2] > sqTolerance) {\n                    simplifiedRing.push(p);\n                    tile.numSimplified++;\n                }\n                tile.numPoints++;\n            }\n\n            if (type === 3) { rewind(simplifiedRing, ring.outer); }\n\n            simplified.push(simplifiedRing);\n        }\n    }\n\n    if (simplified.length) {\n        tile.features.push({\n            geometry: simplified,\n            type: type,\n            tags: feature.tags || null\n        });\n    }\n}\n\nfunction rewind(ring, clockwise) {\n    var area = signedArea(ring);\n    if (area < 0 === clockwise) { ring.reverse(); }\n}\n\nfunction signedArea(ring) {\n    var sum = 0;\n    for (var i = 0, len = ring.length, j = len - 1, p1, p2; i < len; j = i++) {\n        p1 = ring[i];\n        p2 = ring[j];\n        sum += (p2[0] - p1[0]) * (p1[1] + p2[1]);\n    }\n    return sum;\n}\n\nvar index = geojsonvt;\n\nvar convert = convert_1;\nvar transform = transform$1;\nvar clip = clip_1;\nvar wrap = wrap_1;\nvar createTile = tile$1;     // final simplified tile generation\n\n\nfunction geojsonvt(data, options) {\n    return new GeoJSONVT(data, options);\n}\n\nfunction GeoJSONVT(data, options) {\n    options = this.options = extend(Object.create(this.options), options);\n\n    var debug = options.debug;\n\n    if (debug) { console.time('preprocess data'); }\n\n    var z2 = 1 << options.maxZoom, // 2^z\n        features = convert(data, options.tolerance / (z2 * options.extent));\n\n    this.tiles = {};\n    this.tileCoords = [];\n\n    if (debug) {\n        console.timeEnd('preprocess data');\n        console.log('index: maxZoom: %d, maxPoints: %d', options.indexMaxZoom, options.indexMaxPoints);\n        console.time('generate tiles');\n        this.stats = {};\n        this.total = 0;\n    }\n\n    features = wrap(features, options.buffer / options.extent, intersectX);\n\n    // start slicing from the top tile down\n    if (features.length) { this.splitTile(features, 0, 0, 0); }\n\n    if (debug) {\n        if (features.length) { console.log('features: %d, points: %d', this.tiles[0].numFeatures, this.tiles[0].numPoints); }\n        console.timeEnd('generate tiles');\n        console.log('tiles generated:', this.total, JSON.stringify(this.stats));\n    }\n}\n\nGeoJSONVT.prototype.options = {\n    maxZoom: 14,            // max zoom to preserve detail on\n    indexMaxZoom: 5,        // max zoom in the tile index\n    indexMaxPoints: 100000, // max number of points per tile in the tile index\n    solidChildren: false,   // whether to tile solid square tiles further\n    tolerance: 3,           // simplification tolerance (higher means simpler)\n    extent: 4096,           // tile extent\n    buffer: 64,             // tile buffer on each side\n    debug: 0                // logging level (0, 1 or 2)\n};\n\nGeoJSONVT.prototype.splitTile = function (features, z, x, y, cz, cx, cy) {\n    var this$1 = this;\n\n\n    var stack = [features, z, x, y],\n        options = this.options,\n        debug = options.debug,\n        solid = null;\n\n    // avoid recursion by using a processing queue\n    while (stack.length) {\n        y = stack.pop();\n        x = stack.pop();\n        z = stack.pop();\n        features = stack.pop();\n\n        var z2 = 1 << z,\n            id = toID(z, x, y),\n            tile = this$1.tiles[id],\n            tileTolerance = z === options.maxZoom ? 0 : options.tolerance / (z2 * options.extent);\n\n        if (!tile) {\n            if (debug > 1) { console.time('creation'); }\n\n            tile = this$1.tiles[id] = createTile(features, z2, x, y, tileTolerance, z === options.maxZoom);\n            this$1.tileCoords.push({z: z, x: x, y: y});\n\n            if (debug) {\n                if (debug > 1) {\n                    console.log('tile z%d-%d-%d (features: %d, points: %d, simplified: %d)',\n                        z, x, y, tile.numFeatures, tile.numPoints, tile.numSimplified);\n                    console.timeEnd('creation');\n                }\n                var key = 'z' + z;\n                this$1.stats[key] = (this$1.stats[key] || 0) + 1;\n                this$1.total++;\n            }\n        }\n\n        // save reference to original geometry in tile so that we can drill down later if we stop now\n        tile.source = features;\n\n        // if it's the first-pass tiling\n        if (!cz) {\n            // stop tiling if we reached max zoom, or if the tile is too simple\n            if (z === options.indexMaxZoom || tile.numPoints <= options.indexMaxPoints) { continue; }\n\n        // if a drilldown to a specific tile\n        } else {\n            // stop tiling if we reached base zoom or our target tile zoom\n            if (z === options.maxZoom || z === cz) { continue; }\n\n            // stop tiling if it's not an ancestor of the target tile\n            var m = 1 << (cz - z);\n            if (x !== Math.floor(cx / m) || y !== Math.floor(cy / m)) { continue; }\n        }\n\n        // stop tiling if the tile is solid clipped square\n        if (!options.solidChildren && isClippedSquare(tile, options.extent, options.buffer)) {\n            if (cz) { solid = z; } // and remember the zoom if we're drilling down\n            continue;\n        }\n\n        // if we slice further down, no need to keep source geometry\n        tile.source = null;\n\n        if (debug > 1) { console.time('clipping'); }\n\n        // values we'll use for clipping\n        var k1 = 0.5 * options.buffer / options.extent,\n            k2 = 0.5 - k1,\n            k3 = 0.5 + k1,\n            k4 = 1 + k1,\n            tl, bl, tr, br, left, right;\n\n        tl = bl = tr = br = null;\n\n        left  = clip(features, z2, x - k1, x + k3, 0, intersectX, tile.min[0], tile.max[0]);\n        right = clip(features, z2, x + k2, x + k4, 0, intersectX, tile.min[0], tile.max[0]);\n\n        if (left) {\n            tl = clip(left, z2, y - k1, y + k3, 1, intersectY, tile.min[1], tile.max[1]);\n            bl = clip(left, z2, y + k2, y + k4, 1, intersectY, tile.min[1], tile.max[1]);\n        }\n\n        if (right) {\n            tr = clip(right, z2, y - k1, y + k3, 1, intersectY, tile.min[1], tile.max[1]);\n            br = clip(right, z2, y + k2, y + k4, 1, intersectY, tile.min[1], tile.max[1]);\n        }\n\n        if (debug > 1) { console.timeEnd('clipping'); }\n\n        if (tl) { stack.push(tl, z + 1, x * 2,     y * 2); }\n        if (bl) { stack.push(bl, z + 1, x * 2,     y * 2 + 1); }\n        if (tr) { stack.push(tr, z + 1, x * 2 + 1, y * 2); }\n        if (br) { stack.push(br, z + 1, x * 2 + 1, y * 2 + 1); }\n    }\n\n    return solid;\n};\n\nGeoJSONVT.prototype.getTile = function (z, x, y) {\n    var this$1 = this;\n\n    var options = this.options,\n        extent = options.extent,\n        debug = options.debug;\n\n    var z2 = 1 << z;\n    x = ((x % z2) + z2) % z2; // wrap tile x coordinate\n\n    var id = toID(z, x, y);\n    if (this.tiles[id]) { return transform.tile(this.tiles[id], extent); }\n\n    if (debug > 1) { console.log('drilling down to z%d-%d-%d', z, x, y); }\n\n    var z0 = z,\n        x0 = x,\n        y0 = y,\n        parent;\n\n    while (!parent && z0 > 0) {\n        z0--;\n        x0 = Math.floor(x0 / 2);\n        y0 = Math.floor(y0 / 2);\n        parent = this$1.tiles[toID(z0, x0, y0)];\n    }\n\n    if (!parent || !parent.source) { return null; }\n\n    // if we found a parent tile containing the original geometry, we can drill down from it\n    if (debug > 1) { console.log('found parent tile z%d-%d-%d', z0, x0, y0); }\n\n    // it parent tile is a solid clipped square, return it instead since it's identical\n    if (isClippedSquare(parent, extent, options.buffer)) { return transform.tile(parent, extent); }\n\n    if (debug > 1) { console.time('drilling down'); }\n    var solid = this.splitTile(parent.source, z0, x0, y0, z, x, y);\n    if (debug > 1) { console.timeEnd('drilling down'); }\n\n    // one of the parent tiles was a solid clipped square\n    if (solid !== null) {\n        var m = 1 << (z - solid);\n        id = toID(solid, Math.floor(x / m), Math.floor(y / m));\n    }\n\n    return this.tiles[id] ? transform.tile(this.tiles[id], extent) : null;\n};\n\nfunction toID(z, x, y) {\n    return (((1 << z) * y + x) * 32) + z;\n}\n\nfunction intersectX(a, b, x) {\n    return [x, (x - a[0]) * (b[1] - a[1]) / (b[0] - a[0]) + a[1], 1];\n}\nfunction intersectY(a, b, y) {\n    return [(y - a[1]) * (b[0] - a[0]) / (b[1] - a[1]) + a[0], y, 1];\n}\n\nfunction extend(dest, src) {\n    for (var i in src) { dest[i] = src[i]; }\n    return dest;\n}\n\n// checks whether a tile is a whole-area fill after clipping; if it is, there's no sense slicing it further\nfunction isClippedSquare(tile, extent, buffer) {\n\n    var features = tile.source;\n    if (features.length !== 1) { return false; }\n\n    var feature = features[0];\n    if (feature.type !== 3 || feature.geometry.length > 1) { return false; }\n\n    var len = feature.geometry[0].length;\n    if (len !== 5) { return false; }\n\n    for (var i = 0; i < len; i++) {\n        var p = transform.point(feature.geometry[0][i], extent, tile.z2, tile.x, tile.y);\n        if ((p[0] !== -buffer && p[0] !== extent + buffer) ||\n            (p[1] !== -buffer && p[1] !== extent + buffer)) { return false; }\n    }\n\n    return true;\n}\n\nvar identity = function(x) {\n  return x;\n};\n\nvar transform$3 = function(topology) {\n  if ((transform = topology.transform) == null) { return identity; }\n  var transform,\n      x0,\n      y0,\n      kx = transform.scale[0],\n      ky = transform.scale[1],\n      dx = transform.translate[0],\n      dy = transform.translate[1];\n  return function(point, i) {\n    if (!i) { x0 = y0 = 0; }\n    point[0] = (x0 += point[0]) * kx + dx;\n    point[1] = (y0 += point[1]) * ky + dy;\n    return point;\n  };\n};\n\nvar bbox = function(topology) {\n  var bbox = topology.bbox;\n\n  function bboxPoint(p0) {\n    p1[0] = p0[0], p1[1] = p0[1], t(p1);\n    if (p1[0] < x0) { x0 = p1[0]; }\n    if (p1[0] > x1) { x1 = p1[0]; }\n    if (p1[1] < y0) { y0 = p1[1]; }\n    if (p1[1] > y1) { y1 = p1[1]; }\n  }\n\n  function bboxGeometry(o) {\n    switch (o.type) {\n      case \"GeometryCollection\": o.geometries.forEach(bboxGeometry); break;\n      case \"Point\": bboxPoint(o.coordinates); break;\n      case \"MultiPoint\": o.coordinates.forEach(bboxPoint); break;\n    }\n  }\n\n  if (!bbox) {\n    var t = transform$3(topology), p0, p1 = new Array(2), name,\n        x0 = Infinity, y0 = x0, x1 = -x0, y1 = -x0;\n\n    topology.arcs.forEach(function(arc) {\n      var i = -1, n = arc.length;\n      while (++i < n) {\n        p0 = arc[i], p1[0] = p0[0], p1[1] = p0[1], t(p1, i);\n        if (p1[0] < x0) { x0 = p1[0]; }\n        if (p1[0] > x1) { x1 = p1[0]; }\n        if (p1[1] < y0) { y0 = p1[1]; }\n        if (p1[1] > y1) { y1 = p1[1]; }\n      }\n    });\n\n    for (name in topology.objects) {\n      bboxGeometry(topology.objects[name]);\n    }\n\n    bbox = topology.bbox = [x0, y0, x1, y1];\n  }\n\n  return bbox;\n};\n\nvar reverse = function(array, n) {\n  var t, j = array.length, i = j - n;\n  while (i < --j) { t = array[i], array[i++] = array[j], array[j] = t; }\n};\n\nvar feature = function(topology, o) {\n  return o.type === \"GeometryCollection\"\n      ? {type: \"FeatureCollection\", features: o.geometries.map(function(o) { return feature$1(topology, o); })}\n      : feature$1(topology, o);\n};\n\nfunction feature$1(topology, o) {\n  var id = o.id,\n      bbox = o.bbox,\n      properties = o.properties == null ? {} : o.properties,\n      geometry = object(topology, o);\n  return id == null && bbox == null ? {type: \"Feature\", properties: properties, geometry: geometry}\n      : bbox == null ? {type: \"Feature\", id: id, properties: properties, geometry: geometry}\n      : {type: \"Feature\", id: id, bbox: bbox, properties: properties, geometry: geometry};\n}\n\nfunction object(topology, o) {\n  var transformPoint = transform$3(topology),\n      arcs = topology.arcs;\n\n  function arc(i, points) {\n    if (points.length) { points.pop(); }\n    for (var a = arcs[i < 0 ? ~i : i], k = 0, n = a.length; k < n; ++k) {\n      points.push(transformPoint(a[k].slice(), k));\n    }\n    if (i < 0) { reverse(points, n); }\n  }\n\n  function point(p) {\n    return transformPoint(p.slice());\n  }\n\n  function line(arcs) {\n    var points = [];\n    for (var i = 0, n = arcs.length; i < n; ++i) { arc(arcs[i], points); }\n    if (points.length < 2) { points.push(points[0].slice()); }\n    return points;\n  }\n\n  function ring(arcs) {\n    var points = line(arcs);\n    while (points.length < 4) { points.push(points[0].slice()); }\n    return points;\n  }\n\n  function polygon(arcs) {\n    return arcs.map(ring);\n  }\n\n  function geometry(o) {\n    var type = o.type, coordinates;\n    switch (type) {\n      case \"GeometryCollection\": return {type: type, geometries: o.geometries.map(geometry)};\n      case \"Point\": coordinates = point(o.coordinates); break;\n      case \"MultiPoint\": coordinates = o.coordinates.map(point); break;\n      case \"LineString\": coordinates = line(o.arcs); break;\n      case \"MultiLineString\": coordinates = o.arcs.map(line); break;\n      case \"Polygon\": coordinates = polygon(o.arcs); break;\n      case \"MultiPolygon\": coordinates = o.arcs.map(polygon); break;\n      default: return null;\n    }\n    return {type: type, coordinates: coordinates};\n  }\n\n  return geometry(o);\n}\n\nvar stitch = function(topology, arcs) {\n  var stitchedArcs = {},\n      fragmentByStart = {},\n      fragmentByEnd = {},\n      fragments = [],\n      emptyIndex = -1;\n\n  // Stitch empty arcs first, since they may be subsumed by other arcs.\n  arcs.forEach(function(i, j) {\n    var arc = topology.arcs[i < 0 ? ~i : i], t;\n    if (arc.length < 3 && !arc[1][0] && !arc[1][1]) {\n      t = arcs[++emptyIndex], arcs[emptyIndex] = i, arcs[j] = t;\n    }\n  });\n\n  arcs.forEach(function(i) {\n    var e = ends(i),\n        start = e[0],\n        end = e[1],\n        f, g;\n\n    if (f = fragmentByEnd[start]) {\n      delete fragmentByEnd[f.end];\n      f.push(i);\n      f.end = end;\n      if (g = fragmentByStart[end]) {\n        delete fragmentByStart[g.start];\n        var fg = g === f ? f : f.concat(g);\n        fragmentByStart[fg.start = f.start] = fragmentByEnd[fg.end = g.end] = fg;\n      } else {\n        fragmentByStart[f.start] = fragmentByEnd[f.end] = f;\n      }\n    } else if (f = fragmentByStart[end]) {\n      delete fragmentByStart[f.start];\n      f.unshift(i);\n      f.start = start;\n      if (g = fragmentByEnd[start]) {\n        delete fragmentByEnd[g.end];\n        var gf = g === f ? f : g.concat(f);\n        fragmentByStart[gf.start = g.start] = fragmentByEnd[gf.end = f.end] = gf;\n      } else {\n        fragmentByStart[f.start] = fragmentByEnd[f.end] = f;\n      }\n    } else {\n      f = [i];\n      fragmentByStart[f.start = start] = fragmentByEnd[f.end = end] = f;\n    }\n  });\n\n  function ends(i) {\n    var arc = topology.arcs[i < 0 ? ~i : i], p0 = arc[0], p1;\n    if (topology.transform) { p1 = [0, 0], arc.forEach(function(dp) { p1[0] += dp[0], p1[1] += dp[1]; }); }\n    else { p1 = arc[arc.length - 1]; }\n    return i < 0 ? [p1, p0] : [p0, p1];\n  }\n\n  function flush(fragmentByEnd, fragmentByStart) {\n    for (var k in fragmentByEnd) {\n      var f = fragmentByEnd[k];\n      delete fragmentByStart[f.start];\n      delete f.start;\n      delete f.end;\n      f.forEach(function(i) { stitchedArcs[i < 0 ? ~i : i] = 1; });\n      fragments.push(f);\n    }\n  }\n\n  flush(fragmentByEnd, fragmentByStart);\n  flush(fragmentByStart, fragmentByEnd);\n  arcs.forEach(function(i) { if (!stitchedArcs[i < 0 ? ~i : i]) { fragments.push([i]); } });\n\n  return fragments;\n};\n\nfunction extractArcs(topology, object$$1, filter) {\n  var arcs = [],\n      geomsByArc = [],\n      geom;\n\n  function extract0(i) {\n    var j = i < 0 ? ~i : i;\n    (geomsByArc[j] || (geomsByArc[j] = [])).push({i: i, g: geom});\n  }\n\n  function extract1(arcs) {\n    arcs.forEach(extract0);\n  }\n\n  function extract2(arcs) {\n    arcs.forEach(extract1);\n  }\n\n  function extract3(arcs) {\n    arcs.forEach(extract2);\n  }\n\n  function geometry(o) {\n    switch (geom = o, o.type) {\n      case \"GeometryCollection\": o.geometries.forEach(geometry); break;\n      case \"LineString\": extract1(o.arcs); break;\n      case \"MultiLineString\": case \"Polygon\": extract2(o.arcs); break;\n      case \"MultiPolygon\": extract3(o.arcs); break;\n    }\n  }\n\n  geometry(object$$1);\n\n  geomsByArc.forEach(filter == null\n      ? function(geoms) { arcs.push(geoms[0].i); }\n      : function(geoms) { if (filter(geoms[0].g, geoms[geoms.length - 1].g)) { arcs.push(geoms[0].i); } });\n\n  return arcs;\n}\n\nfunction planarRingArea(ring) {\n  var i = -1, n = ring.length, a, b = ring[n - 1], area = 0;\n  while (++i < n) { a = b, b = ring[i], area += a[0] * b[1] - a[1] * b[0]; }\n  return Math.abs(area); // Note: doubled area!\n}\n\nvar bisect = function(a, x) {\n  var lo = 0, hi = a.length;\n  while (lo < hi) {\n    var mid = lo + hi >>> 1;\n    if (a[mid] < x) { lo = mid + 1; }\n    else { hi = mid; }\n  }\n  return lo;\n};\n\nvar slicers = {};\nvar options;\n\nonmessage = function (e) {\n	if (e.data[0] === 'slice') {\n		// Given a blob of GeoJSON and some topojson/geojson-vt options, do the slicing.\n		var geojson = e.data[1];\n		options     = e.data[2];\n\n		if (geojson.type && geojson.type === 'Topology') {\n			for (var layerName in geojson.objects) {\n				slicers[layerName] = index(\n					feature(geojson, geojson.objects[layerName])\n				, options);\n			}\n		} else {\n			slicers[options.vectorTileLayerName] = index(geojson, options);\n		}\n\n	} else if (e.data[0] === 'get') {\n		// Gets the vector tile for the given coordinates, sends it back as a message\n		var coords = e.data[1];\n\n		var tileLayers = {};\n		for (var layerName in slicers) {\n			var slicedTileLayer = slicers[layerName].getTile(coords.z, coords.x, coords.y);\n\n			if (slicedTileLayer) {\n				var vectorTileLayer = {\n					features: [],\n					extent: options.extent,\n					name: options.vectorTileLayerName,\n					length: slicedTileLayer.features.length\n				};\n\n				for (var i in slicedTileLayer.features) {\n					var feat = {\n						geometry: slicedTileLayer.features[i].geometry,\n						properties: slicedTileLayer.features[i].tags,\n						type: slicedTileLayer.features[i].type	// 1 = point, 2 = line, 3 = polygon\n					};\n					vectorTileLayer.features.push(feat);\n				}\n				tileLayers[layerName] = vectorTileLayer;\n			}\n		}\n		postMessage({ layers: tileLayers, coords: coords });\n	}\n};\n//# sourceMap" + "pingURL=slicerWebWorker.js.worker.map\n", "text/plain; charset=us-ascii", false);

// The geojson/topojson is sliced into tiles via a web worker.
// This import statement depends on rollup-file-as-blob, so that the
// variable 'workerCode' is a blob URL.

/*
 * ??class VectorGrid.Slicer
 * ??extends VectorGrid
 *
 * A `VectorGrid` for slicing up big GeoJSON or TopoJSON documents in vector
 * tiles, leveraging [`geojson-vt`](https://github.com/mapbox/geojson-vt).
 *
 * ??example
 *
 * ```
 * var geoJsonDocument = {
 * 	type: 'FeatureCollection',
 * 	features: [ ... ]
 * };
 *
 * L.vectorGrid.slicer(geoJsonDocument, {
 * 	vectorTileLayerStyles: {
 * 		sliced: { ... }
 * 	}
 * }).addTo(map);
 *
 * ```
 *
 * `VectorGrid.Slicer` can also handle [TopoJSON](https://github.com/mbostock/topojson) transparently:
 * ```js
 * var layer = L.vectorGrid.slicer(topojson, options);
 * ```
 *
 * The TopoJSON format [implicitly groups features into "objects"](https://github.com/mbostock/topojson-specification/blob/master/README.md#215-objects).
 * These will be transformed into vector tile layer names when styling (the
 * `vectorTileLayerName` option is ignored when using TopoJSON).
 *
 */

L.VectorGrid.Slicer = L.VectorGrid.extend({

	options: {
		// ??section
		// Additionally to these options, `VectorGrid.Slicer` can take in any
		// of the [`geojson-vt` options](https://github.com/mapbox/geojson-vt#options).

		// ??option vectorTileLayerName: String = 'sliced'
		// Vector tiles contain a set of *data layers*, and those data layers
		// contain features. Thus, the slicer creates one data layer, with
		// the name given in this option. This is important for symbolizing the data.
		vectorTileLayerName: 'sliced',

		extent: 4096,	// Default for geojson-vt
		maxZoom: 14  	// Default for geojson-vt
	},

	initialize: function(geojson, options) {
		L.VectorGrid.prototype.initialize.call(this, options);

		// Create a shallow copy of this.options, excluding things that might
		// be functions - we only care about topojson/geojsonvt options
		var options = {};
		for (var i in this.options) {
			if (i !== 'rendererFactory' &&
				i !== 'vectorTileLayerStyles' &&
				typeof (this.options[i]) !== 'function'
			) {
				options[i] = this.options[i];
			}
		}

// 		this._worker = new Worker(window.URL.createObjectURL(new Blob([workerCode])));
		this._worker = new Worker(workerCode);

		// Send initial data to worker.
		this._worker.postMessage(['slice', geojson, options]);

	},


	_getVectorTilePromise: function(coords) {

		var _this = this;

		var p = new Promise( function waitForWorker(res) {
			_this._worker.addEventListener('message', function recv(m) {
				if (m.data.coords &&
				    m.data.coords.x === coords.x &&
				    m.data.coords.y === coords.y &&
				    m.data.coords.z === coords.z ) {

					res(m.data);
					_this._worker.removeEventListener('message', recv);
				}
			});
		});

		this._worker.postMessage(['get', coords]);

		return p;
	},

});


L.vectorGrid.slicer = function (geojson, options) {
	return new L.VectorGrid.Slicer(geojson, options);
};

L.Canvas.Tile = L.Canvas.extend({

	initialize: function (tileCoord, tileSize, options) {
		L.Canvas.prototype.initialize.call(this, options);
		this._tileCoord = tileCoord;
		this._size = tileSize;

		this._initContainer();
		this._container.setAttribute('width', this._size.x);
		this._container.setAttribute('height', this._size.y);
		this._layers = {};
		this._drawnLayers = {};
		this._drawing = true;

		if (options.interactive) {
			// By default, Leaflet tiles do not have pointer events
			this._container.style.pointerEvents = 'auto';
		}
	},

	getCoord: function() {
		return this._tileCoord;
	},

	getContainer: function() {
		return this._container;
	},

	getOffset: function() {
		return this._tileCoord.scaleBy(this._size).subtract(this._map.getPixelOrigin());
	},

	onAdd: L.Util.falseFn,

	addTo: function(map) {
		this._map = map;
	},

	removeFrom: function (map) {
		delete this._map;
	},

	_onClick: function (e) {
		var point = this._map.mouseEventToLayerPoint(e).subtract(this.getOffset()), layer, clickedLayer;

		for (var id in this._layers) {
			layer = this._layers[id];
			if (layer.options.interactive && layer._containsPoint(point) && !this._map._draggableMoved(layer)) {
				clickedLayer = layer;
			}
		}
		if (clickedLayer)  {
			L.DomEvent.fakeStop(e);
			this._fireEvent([clickedLayer], e);
		}
	},

	_onMouseMove: function (e) {
		if (!this._map || this._map.dragging.moving() || this._map._animatingZoom) { return; }

		var point = this._map.mouseEventToLayerPoint(e).subtract(this.getOffset());
		this._handleMouseHover(e, point);
	},

	/// TODO: Modify _initPath to include an extra parameter, a group name
	/// to order symbolizers by z-index

	_updateIcon: function (layer) {
		if (!this._drawing) { return; }

		var icon = layer.options.icon,
		    options = icon.options,
		    size = L.point(options.iconSize),
		    anchor = options.iconAnchor ||
		        	 size && size.divideBy(2, true),
		    p = layer._point.subtract(anchor),
		    ctx = this._ctx,
		    img = layer._getImage();

		if (img.complete) {
			ctx.drawImage(img, p.x, p.y, size.x, size.y);
		} else {
			L.DomEvent.on(img, 'load', function() {
				ctx.drawImage(img, p.x, p.y, size.x, size.y);
			});
		}

		this._drawnLayers[layer._leaflet_id] = layer;
	}
});


L.canvas.tile = function(tileCoord, tileSize, opts){
	return new L.Canvas.Tile(tileCoord, tileSize, opts);
};

// Aux file to bundle everything together, including the optional dependencies
// for protobuf tiles

}());
//# sourceMappingURL=Leaflet.VectorGrid.bundled.js.map

/*!
 * leaflet.wms.js
 * A collection of Leaflet utilities for working with Web Mapping services.
 * (c) 2014-2016, Houston Engineering, Inc.
 * MIT License
 */

(function (factory) {
    // Module systems magic dance, Leaflet edition
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['leaflet'], factory);
    } else if (typeof module !== 'undefined') {
        // Node/CommonJS
        module.exports = factory(require('leaflet'));
    } else {
        // Browser globals
        if (typeof this.L === 'undefined')
            throw 'Leaflet must be loaded first!';
        // Namespace
        this.L.WMS = this.L.wms = factory(this.L);
    }
}(function (L) {

// Module object
var wms = {};

// Quick shim for Object.keys()
if (!('keys' in Object)) {
    Object.keys = function(obj) {
        var result = [];
        for (var i in obj) {
            if (obj.hasOwnProperty(i)) {
                result.push(i);
            }
        }
        return result;
    };
}

/*
 * wms.Source
 * The Source object manages a single WMS connection.  Multiple "layers" can be
 * created with the getLayer function, but a single request will be sent for
 * each image update.  Can be used in non-tiled "overlay" mode (default), or
 * tiled mode, via an internal wms.Overlay or wms.TileLayer, respectively.
 */
wms.Source = L.Layer.extend({
    'options': {
        'untiled': true,
        'identify': true
    },

    'initialize': function(url, options) {
        L.setOptions(this, options);
        if (this.options.tiled) {
            this.options.untiled = false;
        }
        this._url = url;
        this._subLayers = {};
        this._overlay = this.createOverlay(this.options.untiled);
    },

    'createOverlay': function(untiled) {
        // Create overlay with all options other than untiled & identify
        var overlayOptions = {};
        for (var opt in this.options) {
            if (opt != 'untiled' && opt != 'identify') {
                overlayOptions[opt] = this.options[opt];
            }
        }
        if (untiled) {
            return wms.overlay(this._url, overlayOptions);
        } else {
            return wms.tileLayer(this._url, overlayOptions);
        }
    },

    'onAdd': function() {
        this.refreshOverlay();
    },

    'getEvents': function() {
        if (this.options.identify) {
            return {'click': this.identify};
        } else {
            return {};
        }
    },

    'setOpacity': function(opacity) {
         this.options.opacity = opacity;
         if (this._overlay) {
             this._overlay.setOpacity(opacity);
         }
    },
    
    'bringToBack': function() {
         this.options.isBack = true;
         if (this._overlay) {
             this._overlay.bringToBack();
         }
    },

    'bringToFront': function() {
         this.options.isBack = false;
         if (this._overlay) {
             this._overlay.bringToFront();
         }
    },

    'getLayer': function(name) {
        return wms.layer(this, name);
    },

    'addSubLayer': function(name) {
        this._subLayers[name] = true;
        this.refreshOverlay();
    },

    'removeSubLayer': function(name) {
        delete this._subLayers[name];
        this.refreshOverlay();
    },

    'refreshOverlay': function() {
        var subLayers = Object.keys(this._subLayers).join(",");
        if (!this._map) {
            return;
        }
        if (!subLayers) {
            this._overlay.remove();
        } else {
            this._overlay.setParams({'layers': subLayers});
            this._overlay.addTo(this._map);
        }
    },

    'identify': function(evt) {
        // Identify map features in response to map clicks. To customize this
        // behavior, create a class extending wms.Source and override one or
        // more of the following hook functions.

        var layers = this.getIdentifyLayers();
        if (!layers.length) {
            return;
        }
        this.getFeatureInfo(
            evt.containerPoint, evt.latlng, layers,
            this.showFeatureInfo
        );
    },

    'getFeatureInfo': function(point, latlng, layers, callback) {
        // Request WMS GetFeatureInfo and call callback with results
        // (split from identify() to faciliate use outside of map events)
        var params = this.getFeatureInfoParams(point, layers),
            url = this._url + L.Util.getParamString(params, this._url);

        this.showWaiting();
        this.ajax(url, done);

        function done(result) {
            this.hideWaiting();
            var text = this.parseFeatureInfo(result, url);
            callback.call(this, latlng, text);
        }
    },

    'ajax': function(url, callback) {
        ajax.call(this, url, callback);
    },

    'getIdentifyLayers': function() {
        // Hook to determine which layers to identify
        if (this.options.identifyLayers)
            return this.options.identifyLayers;
        return Object.keys(this._subLayers);
     },

    'getFeatureInfoParams': function(point, layers) {
        // Hook to generate parameters for WMS service GetFeatureInfo request
        var wmsParams, overlay;
        if (this.options.untiled) {
            // Use existing overlay
            wmsParams = this._overlay.wmsParams;
        } else {
            // Create overlay instance to leverage updateWmsParams
            overlay = this.createOverlay(true);
            overlay.updateWmsParams(this._map);
            wmsParams = overlay.wmsParams;
            wmsParams.layers = layers.join(',');
        }
        var infoParams = {
            'request': 'GetFeatureInfo',
            'query_layers': layers.join(','),
            'X': Math.round(point.x),
            'Y': Math.round(point.y)
        };
        return L.extend({}, wmsParams, infoParams);
    },

    'parseFeatureInfo': function(result, url) {
        // Hook to handle parsing AJAX response
        if (result == "error") {
            // AJAX failed, possibly due to CORS issues.
            // Try loading content in <iframe>.
            result = "<iframe src='" + url + "' style='border:none'>";
        }
        return result;
    },

    'showFeatureInfo': function(latlng, info) {
        // Hook to handle displaying parsed AJAX response to the user
        if (!this._map) {
            return;
        }
        this._map.openPopup(info, latlng);
    },

    'showWaiting': function() {
        // Hook to customize AJAX wait animation
        if (!this._map)
            return;
        this._map._container.style.cursor = "progress";
    },

    'hideWaiting': function() {
        // Hook to remove AJAX wait animation
        if (!this._map)
            return;
        this._map._container.style.cursor = "default";
    }
});

wms.source = function(url, options) {
    return new wms.Source(url, options);
};

/*
 * Layer
 * Leaflet "layer" with all actual rendering handled via an underlying Source
 * object.  Can be called directly with a URL to automatically create or reuse
 * an existing Source.  Note that the auto-source feature doesn't work well in
 * multi-map environments; so for best results, create a Source first and use
 * getLayer() to retrieve wms.Layer instances.
 */

wms.Layer = L.Layer.extend({
    'initialize': function(source, layerName, options) {
        L.setOptions(this, options);
        if (!source.addSubLayer) {
            // Assume source is a URL
            source = wms.getSourceForUrl(source, options);
        }
        this._source = source;
        this._name = layerName;
    },
    'onAdd': function() {
        if (!this._source._map)
            this._source.addTo(this._map);
        this._source.addSubLayer(this._name);
    },
    'onRemove': function() {
        this._source.removeSubLayer(this._name);
    },
    'setOpacity': function(opacity) {
        this._source.setOpacity(opacity);
    },
    'bringToBack': function() {
        this._source.bringToBack();
    },
    'bringToFront': function() {
        this._source.bringToFront();
    }
});

wms.layer = function(source, layerName, options) {
    return new wms.Layer(source, layerName, options);
};

// Cache of sources for use with wms.Layer auto-source option
var sources = {};
wms.getSourceForUrl = function(url, options) {
    if (!sources[url]) {
        sources[url] = wms.source(url, options);
    }
    return sources[url];
};


// Copy tiled WMS layer from leaflet core, in case we need to subclass it later
wms.TileLayer = L.TileLayer.WMS;
wms.tileLayer = L.tileLayer.wms;

/*
 * wms.Overlay:
 * "Single Tile" WMS image overlay that updates with map changes.
 * Portions of wms.Overlay are directly extracted from L.TileLayer.WMS.
 * See Leaflet license.
 */
wms.Overlay = L.Layer.extend({
    'defaultWmsParams': {
        'service': 'WMS',
        'request': 'GetMap',
        'version': '1.1.1',
        'layers': '',
        'styles': '',
        'format': 'image/jpeg',
        'transparent': false
    },

    'options': {
        'crs': null,
        'uppercase': false,
        'attribution': '',
        'opacity': 1,
        'isBack': false,
        'minZoom': 0,
        'maxZoom': 18
    },

    'initialize': function(url, options) {
        this._url = url;

        // Move WMS parameters to params object
        var params = {}, opts = {};
        for (var opt in options) {
             if (opt in this.options) {
                 opts[opt] = options[opt];
             } else {
                 params[opt] = options[opt];
             }
        }
        L.setOptions(this, opts);
        this.wmsParams = L.extend({}, this.defaultWmsParams, params);
    },

    'setParams': function(params) {
        L.extend(this.wmsParams, params);
        this.update();
    },

    'getAttribution': function() {
        return this.options.attribution;
    },

    'onAdd': function() {
        this.update();
    },

    'onRemove': function(map) {
        if (this._currentOverlay) {
            map.removeLayer(this._currentOverlay);
            delete this._currentOverlay;
        }
        if (this._currentUrl) {
            delete this._currentUrl;
        }
    },

    'getEvents': function() {
        return {
            'moveend': this.update
        };
    },

    'update': function() {
        if (!this._map) {
            return;
        }
        // Determine image URL and whether it has changed since last update
        this.updateWmsParams();
        var url = this.getImageUrl();
        if (this._currentUrl == url) {
            return;
        }
        this._currentUrl = url;

        // Keep current image overlay in place until new one loads
        // (inspired by esri.leaflet)
        var bounds = this._map.getBounds();
        var overlay = L.imageOverlay(url, bounds, {'opacity': 0});
        overlay.addTo(this._map);
        overlay.once('load', _swap, this);
        function _swap() {
            if (!this._map) {
                return;
            }
            if (overlay._url != this._currentUrl) {
                this._map.removeLayer(overlay);
                return;
            } else if (this._currentOverlay) {
                this._map.removeLayer(this._currentOverlay);
            }
            this._currentOverlay = overlay;
            overlay.setOpacity(
                this.options.opacity ? this.options.opacity : 1
            );
            if (this.options.isBack === true) {
                overlay.bringToBack();
            }
            if (this.options.isBack === false) {
                overlay.bringToFront();
            }
        }
        if ((this._map.getZoom() < this.options.minZoom) ||
            (this._map.getZoom() > this.options.maxZoom)){
            this._map.removeLayer(overlay);
        }
    },

    'setOpacity': function(opacity) {
         this.options.opacity = opacity;
         if (this._currentOverlay) {
             this._currentOverlay.setOpacity(opacity);
         }
    },

    'bringToBack': function() {
        this.options.isBack = true;
        if (this._currentOverlay) {
            this._currentOverlay.bringToBack();
        }
    },

    'bringToFront': function() {
        this.options.isBack = false;
        if (this._currentOverlay) {
            this._currentOverlay.bringToFront();
        }
    },

    // See L.TileLayer.WMS: onAdd() & getTileUrl()
    'updateWmsParams': function(map) {
        if (!map) {
            map = this._map;
        }
        // Compute WMS options
        var bounds = map.getBounds();
        var size = map.getSize();
        var wmsVersion = parseFloat(this.wmsParams.version);
        var crs = this.options.crs || map.options.crs;
        var projectionKey = wmsVersion >= 1.3 ? 'crs' : 'srs';
        var nw = crs.project(bounds.getNorthWest());
        var se = crs.project(bounds.getSouthEast());

        // Assemble WMS parameter string
        var params = {
            'width': size.x,
            'height': size.y
        };
        params[projectionKey] = crs.code;
        params.bbox = (
            wmsVersion >= 1.3 && crs === L.CRS.EPSG4326 ?
            [se.y, nw.x, nw.y, se.x] :
            [nw.x, se.y, se.x, nw.y]
        ).join(',');

        L.extend(this.wmsParams, params);
    },

    'getImageUrl': function() {
        var uppercase = this.options.uppercase || false;
        var pstr = L.Util.getParamString(this.wmsParams, this._url, uppercase);
        return this._url + pstr;
    }
});

wms.overlay = function(url, options) {
    return new wms.Overlay(url, options);
};

// Simple AJAX helper (since we can't assume jQuery etc. are present)
function ajax(url, callback) {
    var context = this,
        request = new XMLHttpRequest();
    request.onreadystatechange = change;
    request.open('GET', url);
    request.send();

    function change() {
        if (request.readyState === 4) {
            if (request.status === 200) {
                callback.call(context, request.responseText);
            } else {
                callback.call(context, "error");
            }
        }
    }
}

return wms;

}));

(function(window) {
	var HAS_HASHCHANGE = (function() {
		var doc_mode = window.documentMode;
		return ('onhashchange' in window) &&
			(doc_mode === undefined || doc_mode > 7);
	})();

	L.Hash = function(map) {
		this.onHashChange = L.Util.bind(this.onHashChange, this);

		if (map) {
			this.init(map);
		}
	};

	L.Hash.parseHash = function(hash) {
		if(hash.indexOf('#') === 0) {
			hash = hash.substr(1);
		}
		var args = hash.split("/");
		if (args.length == 3) {
			var zoom = parseInt(args[0], 10),
			lat = parseFloat(args[1]),
			lon = parseFloat(args[2]);
			if (isNaN(zoom) || isNaN(lat) || isNaN(lon)) {
				return false;
			} else {
				return {
					center: new L.LatLng(lat, lon),
					zoom: zoom
				};
			}
		} else {
			return false;
		}
	};

	L.Hash.formatHash = function(map) {
		var center = map.getCenter(),
		    zoom = map.getZoom(),
		    precision = Math.max(0, Math.ceil(Math.log(zoom) / Math.LN2));

		return "#" + [zoom,
			center.lat.toFixed(precision),
			center.lng.toFixed(precision)
		].join("/");
	},

	L.Hash.prototype = {
		map: null,
		lastHash: null,

		parseHash: L.Hash.parseHash,
		formatHash: L.Hash.formatHash,

		init: function(map) {
			this.map = map;

			// reset the hash
			this.lastHash = null;
			this.onHashChange();

			if (!this.isListening) {
				this.startListening();
			}
		},

		removeFrom: function(map) {
			if (this.changeTimeout) {
				clearTimeout(this.changeTimeout);
			}

			if (this.isListening) {
				this.stopListening();
			}

			this.map = null;
		},

		onMapMove: function() {
			// bail if we're moving the map (updating from a hash),
			// or if the map is not yet loaded

			if (this.movingMap || !this.map._loaded) {
				return false;
			}

			var hash = this.formatHash(this.map);
			if (this.lastHash != hash) {
				location.replace(hash);
				this.lastHash = hash;
			}
		},

		movingMap: false,
		update: function() {
			var hash = location.hash;
			if (hash === this.lastHash) {
				return;
			}
			var parsed = this.parseHash(hash);
			if (parsed) {
				this.movingMap = true;

				this.map.setView(parsed.center, parsed.zoom);

				this.movingMap = false;
			} else {
				this.onMapMove(this.map);
			}
		},

		// defer hash change updates every 100ms
		changeDefer: 100,
		changeTimeout: null,
		onHashChange: function() {
			// throttle calls to update() so that they only happen every
			// `changeDefer` ms
			if (!this.changeTimeout) {
				var that = this;
				this.changeTimeout = setTimeout(function() {
					that.update();
					that.changeTimeout = null;
				}, this.changeDefer);
			}
		},

		isListening: false,
		hashChangeInterval: null,
		startListening: function() {
			this.map.on("moveend", this.onMapMove, this);

			if (HAS_HASHCHANGE) {
				L.DomEvent.addListener(window, "hashchange", this.onHashChange);
			} else {
				clearInterval(this.hashChangeInterval);
				this.hashChangeInterval = setInterval(this.onHashChange, 50);
			}
			this.isListening = true;
		},

		stopListening: function() {
			this.map.off("moveend", this.onMapMove, this);

			if (HAS_HASHCHANGE) {
				L.DomEvent.removeListener(window, "hashchange", this.onHashChange);
			} else {
				clearInterval(this.hashChangeInterval);
			}
			this.isListening = false;
		}
	};
	L.hash = function(map) {
		return new L.Hash(map);
	};
	L.Map.prototype.addHash = function() {
		this._hash = L.hash(this);
	};
	L.Map.prototype.removeHash = function() {
		this._hash.removeFrom();
	};
})(window);

/*
 (c) 2014, Vladimir Agafonkin
 simpleheat, a tiny JavaScript library for drawing heatmaps with Canvas
 https://github.com/mourner/simpleheat
*/
!function(){"use strict";function t(i){return this instanceof t?(this._canvas=i="string"==typeof i?document.getElementById(i):i,this._ctx=i.getContext("2d"),this._width=i.width,this._height=i.height,this._max=1,void this.clear()):new t(i)}t.prototype={defaultRadius:25,defaultGradient:{.4:"blue",.6:"cyan",.7:"lime",.8:"yellow",1:"red"},data:function(t,i){return this._data=t,this},max:function(t){return this._max=t,this},add:function(t){return this._data.push(t),this},clear:function(){return this._data=[],this},radius:function(t,i){i=i||15;var a=this._circle=document.createElement("canvas"),s=a.getContext("2d"),e=this._r=t+i;return a.width=a.height=2*e,s.shadowOffsetX=s.shadowOffsetY=200,s.shadowBlur=i,s.shadowColor="black",s.beginPath(),s.arc(e-200,e-200,t,0,2*Math.PI,!0),s.closePath(),s.fill(),this},gradient:function(t){var i=document.createElement("canvas"),a=i.getContext("2d"),s=a.createLinearGradient(0,0,0,256);i.width=1,i.height=256;for(var e in t)s.addColorStop(e,t[e]);return a.fillStyle=s,a.fillRect(0,0,1,256),this._grad=a.getImageData(0,0,1,256).data,this},draw:function(t){this._circle||this.radius(this.defaultRadius),this._grad||this.gradient(this.defaultGradient);var i=this._ctx;i.clearRect(0,0,this._width,this._height);for(var a,s=0,e=this._data.length;e>s;s++)a=this._data[s],i.globalAlpha=Math.max(a[2]/this._max,t||.05),i.drawImage(this._circle,a[0]-this._r,a[1]-this._r);var n=i.getImageData(0,0,this._width,this._height);return this._colorize(n.data,this._grad),i.putImageData(n,0,0),this},_colorize:function(t,i){for(var a,s=3,e=t.length;e>s;s+=4)a=4*t[s],a&&(t[s-3]=i[a],t[s-2]=i[a+1],t[s-1]=i[a+2])}},window.simpleheat=t}(),/*
 (c) 2014, Vladimir Agafonkin
 Leaflet.heat, a tiny and fast heatmap plugin for Leaflet.
 https://github.com/Leaflet/Leaflet.heat
*/
L.HeatLayer=(L.Layer?L.Layer:L.Class).extend({initialize:function(t,i){this._latlngs=t,L.setOptions(this,i)},setLatLngs:function(t){return this._latlngs=t,this.redraw()},addLatLng:function(t){return this._latlngs.push(t),this.redraw()},setOptions:function(t){return L.setOptions(this,t),this._heat&&this._updateOptions(),this.redraw()},redraw:function(){return!this._heat||this._frame||this._map._animating||(this._frame=L.Util.requestAnimFrame(this._redraw,this)),this},onAdd:function(t){this._map=t,this._canvas||this._initCanvas(),t._panes.overlayPane.appendChild(this._canvas),t.on("moveend",this._reset,this),t.options.zoomAnimation&&L.Browser.any3d&&t.on("zoomanim",this._animateZoom,this),this._reset()},onRemove:function(t){t.getPanes().overlayPane.removeChild(this._canvas),t.off("moveend",this._reset,this),t.options.zoomAnimation&&t.off("zoomanim",this._animateZoom,this)},addTo:function(t){return t.addLayer(this),this},_initCanvas:function(){var t=this._canvas=L.DomUtil.create("canvas","leaflet-heatmap-layer leaflet-layer"),i=L.DomUtil.testProp(["transformOrigin","WebkitTransformOrigin","msTransformOrigin"]);t.style[i]="50% 50%";var a=this._map.getSize();t.width=a.x,t.height=a.y;var s=this._map.options.zoomAnimation&&L.Browser.any3d;L.DomUtil.addClass(t,"leaflet-zoom-"+(s?"animated":"hide")),this._heat=simpleheat(t),this._updateOptions()},_updateOptions:function(){this._heat.radius(this.options.radius||this._heat.defaultRadius,this.options.blur),this.options.gradient&&this._heat.gradient(this.options.gradient),this.options.max&&this._heat.max(this.options.max)},_reset:function(){var t=this._map.containerPointToLayerPoint([0,0]);L.DomUtil.setPosition(this._canvas,t);var i=this._map.getSize();this._heat._width!==i.x&&(this._canvas.width=this._heat._width=i.x),this._heat._height!==i.y&&(this._canvas.height=this._heat._height=i.y),this._redraw()},_redraw:function(){var t,i,a,s,e,n,h,o,r,d=[],_=this._heat._r,l=this._map.getSize(),m=new L.Bounds(L.point([-_,-_]),l.add([_,_])),c=void 0===this.options.max?1:this.options.max,u=void 0===this.options.maxZoom?this._map.getMaxZoom():this.options.maxZoom,f=1/Math.pow(2,Math.max(0,Math.min(u-this._map.getZoom(),12))),g=_/2,p=[],v=this._map._getMapPanePos(),w=v.x%g,y=v.y%g;for(t=0,i=this._latlngs.length;i>t;t++)if(a=this._map.latLngToContainerPoint(this._latlngs[t]),m.contains(a)){e=Math.floor((a.x-w)/g)+2,n=Math.floor((a.y-y)/g)+2;var x=void 0!==this._latlngs[t].alt?this._latlngs[t].alt:void 0!==this._latlngs[t][2]?+this._latlngs[t][2]:1;r=x*f,p[n]=p[n]||[],s=p[n][e],s?(s[0]=(s[0]*s[2]+a.x*r)/(s[2]+r),s[1]=(s[1]*s[2]+a.y*r)/(s[2]+r),s[2]+=r):p[n][e]=[a.x,a.y,r]}for(t=0,i=p.length;i>t;t++)if(p[t])for(h=0,o=p[t].length;o>h;h++)s=p[t][h],s&&d.push([Math.round(s[0]),Math.round(s[1]),Math.min(s[2],c)]);this._heat.data(d).draw(this.options.minOpacity),this._frame=null},_animateZoom:function(t){var i=this._map.getZoomScale(t.zoom),a=this._map._getCenterOffset(t.center)._multiplyBy(-i).subtract(this._map._getMapPanePos());L.DomUtil.setTransform?L.DomUtil.setTransform(this._canvas,a,i):this._canvas.style[L.DomUtil.TRANSFORM]=L.DomUtil.getTranslateString(a)+" scale("+i+")"}}),L.heatLayer=function(t,i){return new L.HeatLayer(t,i)};
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

},{}],2:[function(require,module,exports){
/* MIT license */

module.exports = {
  rgb2hsl: rgb2hsl,
  rgb2hsv: rgb2hsv,
  rgb2hwb: rgb2hwb,
  rgb2cmyk: rgb2cmyk,
  rgb2keyword: rgb2keyword,
  rgb2xyz: rgb2xyz,
  rgb2lab: rgb2lab,
  rgb2lch: rgb2lch,

  hsl2rgb: hsl2rgb,
  hsl2hsv: hsl2hsv,
  hsl2hwb: hsl2hwb,
  hsl2cmyk: hsl2cmyk,
  hsl2keyword: hsl2keyword,

  hsv2rgb: hsv2rgb,
  hsv2hsl: hsv2hsl,
  hsv2hwb: hsv2hwb,
  hsv2cmyk: hsv2cmyk,
  hsv2keyword: hsv2keyword,

  hwb2rgb: hwb2rgb,
  hwb2hsl: hwb2hsl,
  hwb2hsv: hwb2hsv,
  hwb2cmyk: hwb2cmyk,
  hwb2keyword: hwb2keyword,

  cmyk2rgb: cmyk2rgb,
  cmyk2hsl: cmyk2hsl,
  cmyk2hsv: cmyk2hsv,
  cmyk2hwb: cmyk2hwb,
  cmyk2keyword: cmyk2keyword,

  keyword2rgb: keyword2rgb,
  keyword2hsl: keyword2hsl,
  keyword2hsv: keyword2hsv,
  keyword2hwb: keyword2hwb,
  keyword2cmyk: keyword2cmyk,
  keyword2lab: keyword2lab,
  keyword2xyz: keyword2xyz,

  xyz2rgb: xyz2rgb,
  xyz2lab: xyz2lab,
  xyz2lch: xyz2lch,

  lab2xyz: lab2xyz,
  lab2rgb: lab2rgb,
  lab2lch: lab2lch,

  lch2lab: lch2lab,
  lch2xyz: lch2xyz,
  lch2rgb: lch2rgb
}


function rgb2hsl(rgb) {
  var r = rgb[0]/255,
      g = rgb[1]/255,
      b = rgb[2]/255,
      min = Math.min(r, g, b),
      max = Math.max(r, g, b),
      delta = max - min,
      h, s, l;

  if (max == min)
    h = 0;
  else if (r == max)
    h = (g - b) / delta;
  else if (g == max)
    h = 2 + (b - r) / delta;
  else if (b == max)
    h = 4 + (r - g)/ delta;

  h = Math.min(h * 60, 360);

  if (h < 0)
    h += 360;

  l = (min + max) / 2;

  if (max == min)
    s = 0;
  else if (l <= 0.5)
    s = delta / (max + min);
  else
    s = delta / (2 - max - min);

  return [h, s * 100, l * 100];
}

function rgb2hsv(rgb) {
  var r = rgb[0],
      g = rgb[1],
      b = rgb[2],
      min = Math.min(r, g, b),
      max = Math.max(r, g, b),
      delta = max - min,
      h, s, v;

  if (max == 0)
    s = 0;
  else
    s = (delta/max * 1000)/10;

  if (max == min)
    h = 0;
  else if (r == max)
    h = (g - b) / delta;
  else if (g == max)
    h = 2 + (b - r) / delta;
  else if (b == max)
    h = 4 + (r - g) / delta;

  h = Math.min(h * 60, 360);

  if (h < 0)
    h += 360;

  v = ((max / 255) * 1000) / 10;

  return [h, s, v];
}

function rgb2hwb(rgb) {
  var r = rgb[0],
      g = rgb[1],
      b = rgb[2],
      h = rgb2hsl(rgb)[0],
      w = 1/255 * Math.min(r, Math.min(g, b)),
      b = 1 - 1/255 * Math.max(r, Math.max(g, b));

  return [h, w * 100, b * 100];
}

function rgb2cmyk(rgb) {
  var r = rgb[0] / 255,
      g = rgb[1] / 255,
      b = rgb[2] / 255,
      c, m, y, k;

  k = Math.min(1 - r, 1 - g, 1 - b);
  c = (1 - r - k) / (1 - k) || 0;
  m = (1 - g - k) / (1 - k) || 0;
  y = (1 - b - k) / (1 - k) || 0;
  return [c * 100, m * 100, y * 100, k * 100];
}

function rgb2keyword(rgb) {
  return reverseKeywords[JSON.stringify(rgb)];
}

function rgb2xyz(rgb) {
  var r = rgb[0] / 255,
      g = rgb[1] / 255,
      b = rgb[2] / 255;

  // assume sRGB
  r = r > 0.04045 ? Math.pow(((r + 0.055) / 1.055), 2.4) : (r / 12.92);
  g = g > 0.04045 ? Math.pow(((g + 0.055) / 1.055), 2.4) : (g / 12.92);
  b = b > 0.04045 ? Math.pow(((b + 0.055) / 1.055), 2.4) : (b / 12.92);

  var x = (r * 0.4124) + (g * 0.3576) + (b * 0.1805);
  var y = (r * 0.2126) + (g * 0.7152) + (b * 0.0722);
  var z = (r * 0.0193) + (g * 0.1192) + (b * 0.9505);

  return [x * 100, y *100, z * 100];
}

function rgb2lab(rgb) {
  var xyz = rgb2xyz(rgb),
        x = xyz[0],
        y = xyz[1],
        z = xyz[2],
        l, a, b;

  x /= 95.047;
  y /= 100;
  z /= 108.883;

  x = x > 0.008856 ? Math.pow(x, 1/3) : (7.787 * x) + (16 / 116);
  y = y > 0.008856 ? Math.pow(y, 1/3) : (7.787 * y) + (16 / 116);
  z = z > 0.008856 ? Math.pow(z, 1/3) : (7.787 * z) + (16 / 116);

  l = (116 * y) - 16;
  a = 500 * (x - y);
  b = 200 * (y - z);

  return [l, a, b];
}

function rgb2lch(args) {
  return lab2lch(rgb2lab(args));
}

function hsl2rgb(hsl) {
  var h = hsl[0] / 360,
      s = hsl[1] / 100,
      l = hsl[2] / 100,
      t1, t2, t3, rgb, val;

  if (s == 0) {
    val = l * 255;
    return [val, val, val];
  }

  if (l < 0.5)
    t2 = l * (1 + s);
  else
    t2 = l + s - l * s;
  t1 = 2 * l - t2;

  rgb = [0, 0, 0];
  for (var i = 0; i < 3; i++) {
    t3 = h + 1 / 3 * - (i - 1);
    t3 < 0 && t3++;
    t3 > 1 && t3--;

    if (6 * t3 < 1)
      val = t1 + (t2 - t1) * 6 * t3;
    else if (2 * t3 < 1)
      val = t2;
    else if (3 * t3 < 2)
      val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
    else
      val = t1;

    rgb[i] = val * 255;
  }

  return rgb;
}

function hsl2hsv(hsl) {
  var h = hsl[0],
      s = hsl[1] / 100,
      l = hsl[2] / 100,
      sv, v;

  if(l === 0) {
      // no need to do calc on black
      // also avoids divide by 0 error
      return [0, 0, 0];
  }

  l *= 2;
  s *= (l <= 1) ? l : 2 - l;
  v = (l + s) / 2;
  sv = (2 * s) / (l + s);
  return [h, sv * 100, v * 100];
}

function hsl2hwb(args) {
  return rgb2hwb(hsl2rgb(args));
}

function hsl2cmyk(args) {
  return rgb2cmyk(hsl2rgb(args));
}

function hsl2keyword(args) {
  return rgb2keyword(hsl2rgb(args));
}


function hsv2rgb(hsv) {
  var h = hsv[0] / 60,
      s = hsv[1] / 100,
      v = hsv[2] / 100,
      hi = Math.floor(h) % 6;

  var f = h - Math.floor(h),
      p = 255 * v * (1 - s),
      q = 255 * v * (1 - (s * f)),
      t = 255 * v * (1 - (s * (1 - f))),
      v = 255 * v;

  switch(hi) {
    case 0:
      return [v, t, p];
    case 1:
      return [q, v, p];
    case 2:
      return [p, v, t];
    case 3:
      return [p, q, v];
    case 4:
      return [t, p, v];
    case 5:
      return [v, p, q];
  }
}

function hsv2hsl(hsv) {
  var h = hsv[0],
      s = hsv[1] / 100,
      v = hsv[2] / 100,
      sl, l;

  l = (2 - s) * v;
  sl = s * v;
  sl /= (l <= 1) ? l : 2 - l;
  sl = sl || 0;
  l /= 2;
  return [h, sl * 100, l * 100];
}

function hsv2hwb(args) {
  return rgb2hwb(hsv2rgb(args))
}

function hsv2cmyk(args) {
  return rgb2cmyk(hsv2rgb(args));
}

function hsv2keyword(args) {
  return rgb2keyword(hsv2rgb(args));
}

// http://dev.w3.org/csswg/css-color/#hwb-to-rgb
function hwb2rgb(hwb) {
  var h = hwb[0] / 360,
      wh = hwb[1] / 100,
      bl = hwb[2] / 100,
      ratio = wh + bl,
      i, v, f, n;

  // wh + bl cant be > 1
  if (ratio > 1) {
    wh /= ratio;
    bl /= ratio;
  }

  i = Math.floor(6 * h);
  v = 1 - bl;
  f = 6 * h - i;
  if ((i & 0x01) != 0) {
    f = 1 - f;
  }
  n = wh + f * (v - wh);  // linear interpolation

  switch (i) {
    default:
    case 6:
    case 0: r = v; g = n; b = wh; break;
    case 1: r = n; g = v; b = wh; break;
    case 2: r = wh; g = v; b = n; break;
    case 3: r = wh; g = n; b = v; break;
    case 4: r = n; g = wh; b = v; break;
    case 5: r = v; g = wh; b = n; break;
  }

  return [r * 255, g * 255, b * 255];
}

function hwb2hsl(args) {
  return rgb2hsl(hwb2rgb(args));
}

function hwb2hsv(args) {
  return rgb2hsv(hwb2rgb(args));
}

function hwb2cmyk(args) {
  return rgb2cmyk(hwb2rgb(args));
}

function hwb2keyword(args) {
  return rgb2keyword(hwb2rgb(args));
}

function cmyk2rgb(cmyk) {
  var c = cmyk[0] / 100,
      m = cmyk[1] / 100,
      y = cmyk[2] / 100,
      k = cmyk[3] / 100,
      r, g, b;

  r = 1 - Math.min(1, c * (1 - k) + k);
  g = 1 - Math.min(1, m * (1 - k) + k);
  b = 1 - Math.min(1, y * (1 - k) + k);
  return [r * 255, g * 255, b * 255];
}

function cmyk2hsl(args) {
  return rgb2hsl(cmyk2rgb(args));
}

function cmyk2hsv(args) {
  return rgb2hsv(cmyk2rgb(args));
}

function cmyk2hwb(args) {
  return rgb2hwb(cmyk2rgb(args));
}

function cmyk2keyword(args) {
  return rgb2keyword(cmyk2rgb(args));
}


function xyz2rgb(xyz) {
  var x = xyz[0] / 100,
      y = xyz[1] / 100,
      z = xyz[2] / 100,
      r, g, b;

  r = (x * 3.2406) + (y * -1.5372) + (z * -0.4986);
  g = (x * -0.9689) + (y * 1.8758) + (z * 0.0415);
  b = (x * 0.0557) + (y * -0.2040) + (z * 1.0570);

  // assume sRGB
  r = r > 0.0031308 ? ((1.055 * Math.pow(r, 1.0 / 2.4)) - 0.055)
    : r = (r * 12.92);

  g = g > 0.0031308 ? ((1.055 * Math.pow(g, 1.0 / 2.4)) - 0.055)
    : g = (g * 12.92);

  b = b > 0.0031308 ? ((1.055 * Math.pow(b, 1.0 / 2.4)) - 0.055)
    : b = (b * 12.92);

  r = Math.min(Math.max(0, r), 1);
  g = Math.min(Math.max(0, g), 1);
  b = Math.min(Math.max(0, b), 1);

  return [r * 255, g * 255, b * 255];
}

function xyz2lab(xyz) {
  var x = xyz[0],
      y = xyz[1],
      z = xyz[2],
      l, a, b;

  x /= 95.047;
  y /= 100;
  z /= 108.883;

  x = x > 0.008856 ? Math.pow(x, 1/3) : (7.787 * x) + (16 / 116);
  y = y > 0.008856 ? Math.pow(y, 1/3) : (7.787 * y) + (16 / 116);
  z = z > 0.008856 ? Math.pow(z, 1/3) : (7.787 * z) + (16 / 116);

  l = (116 * y) - 16;
  a = 500 * (x - y);
  b = 200 * (y - z);

  return [l, a, b];
}

function xyz2lch(args) {
  return lab2lch(xyz2lab(args));
}

function lab2xyz(lab) {
  var l = lab[0],
      a = lab[1],
      b = lab[2],
      x, y, z, y2;

  if (l <= 8) {
    y = (l * 100) / 903.3;
    y2 = (7.787 * (y / 100)) + (16 / 116);
  } else {
    y = 100 * Math.pow((l + 16) / 116, 3);
    y2 = Math.pow(y / 100, 1/3);
  }

  x = x / 95.047 <= 0.008856 ? x = (95.047 * ((a / 500) + y2 - (16 / 116))) / 7.787 : 95.047 * Math.pow((a / 500) + y2, 3);

  z = z / 108.883 <= 0.008859 ? z = (108.883 * (y2 - (b / 200) - (16 / 116))) / 7.787 : 108.883 * Math.pow(y2 - (b / 200), 3);

  return [x, y, z];
}

function lab2lch(lab) {
  var l = lab[0],
      a = lab[1],
      b = lab[2],
      hr, h, c;

  hr = Math.atan2(b, a);
  h = hr * 360 / 2 / Math.PI;
  if (h < 0) {
    h += 360;
  }
  c = Math.sqrt(a * a + b * b);
  return [l, c, h];
}

function lab2rgb(args) {
  return xyz2rgb(lab2xyz(args));
}

function lch2lab(lch) {
  var l = lch[0],
      c = lch[1],
      h = lch[2],
      a, b, hr;

  hr = h / 360 * 2 * Math.PI;
  a = c * Math.cos(hr);
  b = c * Math.sin(hr);
  return [l, a, b];
}

function lch2xyz(args) {
  return lab2xyz(lch2lab(args));
}

function lch2rgb(args) {
  return lab2rgb(lch2lab(args));
}

function keyword2rgb(keyword) {
  return cssKeywords[keyword];
}

function keyword2hsl(args) {
  return rgb2hsl(keyword2rgb(args));
}

function keyword2hsv(args) {
  return rgb2hsv(keyword2rgb(args));
}

function keyword2hwb(args) {
  return rgb2hwb(keyword2rgb(args));
}

function keyword2cmyk(args) {
  return rgb2cmyk(keyword2rgb(args));
}

function keyword2lab(args) {
  return rgb2lab(keyword2rgb(args));
}

function keyword2xyz(args) {
  return rgb2xyz(keyword2rgb(args));
}

var cssKeywords = {
  aliceblue:  [240,248,255],
  antiquewhite: [250,235,215],
  aqua: [0,255,255],
  aquamarine: [127,255,212],
  azure:  [240,255,255],
  beige:  [245,245,220],
  bisque: [255,228,196],
  black:  [0,0,0],
  blanchedalmond: [255,235,205],
  blue: [0,0,255],
  blueviolet: [138,43,226],
  brown:  [165,42,42],
  burlywood:  [222,184,135],
  cadetblue:  [95,158,160],
  chartreuse: [127,255,0],
  chocolate:  [210,105,30],
  coral:  [255,127,80],
  cornflowerblue: [100,149,237],
  cornsilk: [255,248,220],
  crimson:  [220,20,60],
  cyan: [0,255,255],
  darkblue: [0,0,139],
  darkcyan: [0,139,139],
  darkgoldenrod:  [184,134,11],
  darkgray: [169,169,169],
  darkgreen:  [0,100,0],
  darkgrey: [169,169,169],
  darkkhaki:  [189,183,107],
  darkmagenta:  [139,0,139],
  darkolivegreen: [85,107,47],
  darkorange: [255,140,0],
  darkorchid: [153,50,204],
  darkred:  [139,0,0],
  darksalmon: [233,150,122],
  darkseagreen: [143,188,143],
  darkslateblue:  [72,61,139],
  darkslategray:  [47,79,79],
  darkslategrey:  [47,79,79],
  darkturquoise:  [0,206,209],
  darkviolet: [148,0,211],
  deeppink: [255,20,147],
  deepskyblue:  [0,191,255],
  dimgray:  [105,105,105],
  dimgrey:  [105,105,105],
  dodgerblue: [30,144,255],
  firebrick:  [178,34,34],
  floralwhite:  [255,250,240],
  forestgreen:  [34,139,34],
  fuchsia:  [255,0,255],
  gainsboro:  [220,220,220],
  ghostwhite: [248,248,255],
  gold: [255,215,0],
  goldenrod:  [218,165,32],
  gray: [128,128,128],
  green:  [0,128,0],
  greenyellow:  [173,255,47],
  grey: [128,128,128],
  honeydew: [240,255,240],
  hotpink:  [255,105,180],
  indianred:  [205,92,92],
  indigo: [75,0,130],
  ivory:  [255,255,240],
  khaki:  [240,230,140],
  lavender: [230,230,250],
  lavenderblush:  [255,240,245],
  lawngreen:  [124,252,0],
  lemonchiffon: [255,250,205],
  lightblue:  [173,216,230],
  lightcoral: [240,128,128],
  lightcyan:  [224,255,255],
  lightgoldenrodyellow: [250,250,210],
  lightgray:  [211,211,211],
  lightgreen: [144,238,144],
  lightgrey:  [211,211,211],
  lightpink:  [255,182,193],
  lightsalmon:  [255,160,122],
  lightseagreen:  [32,178,170],
  lightskyblue: [135,206,250],
  lightslategray: [119,136,153],
  lightslategrey: [119,136,153],
  lightsteelblue: [176,196,222],
  lightyellow:  [255,255,224],
  lime: [0,255,0],
  limegreen:  [50,205,50],
  linen:  [250,240,230],
  magenta:  [255,0,255],
  maroon: [128,0,0],
  mediumaquamarine: [102,205,170],
  mediumblue: [0,0,205],
  mediumorchid: [186,85,211],
  mediumpurple: [147,112,219],
  mediumseagreen: [60,179,113],
  mediumslateblue:  [123,104,238],
  mediumspringgreen:  [0,250,154],
  mediumturquoise:  [72,209,204],
  mediumvioletred:  [199,21,133],
  midnightblue: [25,25,112],
  mintcream:  [245,255,250],
  mistyrose:  [255,228,225],
  moccasin: [255,228,181],
  navajowhite:  [255,222,173],
  navy: [0,0,128],
  oldlace:  [253,245,230],
  olive:  [128,128,0],
  olivedrab:  [107,142,35],
  orange: [255,165,0],
  orangered:  [255,69,0],
  orchid: [218,112,214],
  palegoldenrod:  [238,232,170],
  palegreen:  [152,251,152],
  paleturquoise:  [175,238,238],
  palevioletred:  [219,112,147],
  papayawhip: [255,239,213],
  peachpuff:  [255,218,185],
  peru: [205,133,63],
  pink: [255,192,203],
  plum: [221,160,221],
  powderblue: [176,224,230],
  purple: [128,0,128],
  rebeccapurple: [102, 51, 153],
  red:  [255,0,0],
  rosybrown:  [188,143,143],
  royalblue:  [65,105,225],
  saddlebrown:  [139,69,19],
  salmon: [250,128,114],
  sandybrown: [244,164,96],
  seagreen: [46,139,87],
  seashell: [255,245,238],
  sienna: [160,82,45],
  silver: [192,192,192],
  skyblue:  [135,206,235],
  slateblue:  [106,90,205],
  slategray:  [112,128,144],
  slategrey:  [112,128,144],
  snow: [255,250,250],
  springgreen:  [0,255,127],
  steelblue:  [70,130,180],
  tan:  [210,180,140],
  teal: [0,128,128],
  thistle:  [216,191,216],
  tomato: [255,99,71],
  turquoise:  [64,224,208],
  violet: [238,130,238],
  wheat:  [245,222,179],
  white:  [255,255,255],
  whitesmoke: [245,245,245],
  yellow: [255,255,0],
  yellowgreen:  [154,205,50]
};

var reverseKeywords = {};
for (var key in cssKeywords) {
  reverseKeywords[JSON.stringify(cssKeywords[key])] = key;
}

},{}],3:[function(require,module,exports){
var conversions = require("./conversions");

var convert = function() {
   return new Converter();
}

for (var func in conversions) {
  // export Raw versions
  convert[func + "Raw"] =  (function(func) {
    // accept array or plain args
    return function(arg) {
      if (typeof arg == "number")
        arg = Array.prototype.slice.call(arguments);
      return conversions[func](arg);
    }
  })(func);

  var pair = /(\w+)2(\w+)/.exec(func),
      from = pair[1],
      to = pair[2];

  // export rgb2hsl and ["rgb"]["hsl"]
  convert[from] = convert[from] || {};

  convert[from][to] = convert[func] = (function(func) { 
    return function(arg) {
      if (typeof arg == "number")
        arg = Array.prototype.slice.call(arguments);
      
      var val = conversions[func](arg);
      if (typeof val == "string" || val === undefined)
        return val; // keyword

      for (var i = 0; i < val.length; i++)
        val[i] = Math.round(val[i]);
      return val;
    }
  })(func);
}


/* Converter does lazy conversion and caching */
var Converter = function() {
   this.convs = {};
};

/* Either get the values for a space or
  set the values for a space, depending on args */
Converter.prototype.routeSpace = function(space, args) {
   var values = args[0];
   if (values === undefined) {
      // color.rgb()
      return this.getValues(space);
   }
   // color.rgb(10, 10, 10)
   if (typeof values == "number") {
      values = Array.prototype.slice.call(args);        
   }

   return this.setValues(space, values);
};
  
/* Set the values for a space, invalidating cache */
Converter.prototype.setValues = function(space, values) {
   this.space = space;
   this.convs = {};
   this.convs[space] = values;
   return this;
};

/* Get the values for a space. If there's already
  a conversion for the space, fetch it, otherwise
  compute it */
Converter.prototype.getValues = function(space) {
   var vals = this.convs[space];
   if (!vals) {
      var fspace = this.space,
          from = this.convs[fspace];
      vals = convert[fspace][space](from);

      this.convs[space] = vals;
   }
  return vals;
};

["rgb", "hsl", "hsv", "cmyk", "keyword"].forEach(function(space) {
   Converter.prototype[space] = function(vals) {
      return this.routeSpace(space, arguments);
   }
});

module.exports = convert;
},{"./conversions":2}],4:[function(require,module,exports){
module.exports = {
	"aliceblue": [240, 248, 255],
	"antiquewhite": [250, 235, 215],
	"aqua": [0, 255, 255],
	"aquamarine": [127, 255, 212],
	"azure": [240, 255, 255],
	"beige": [245, 245, 220],
	"bisque": [255, 228, 196],
	"black": [0, 0, 0],
	"blanchedalmond": [255, 235, 205],
	"blue": [0, 0, 255],
	"blueviolet": [138, 43, 226],
	"brown": [165, 42, 42],
	"burlywood": [222, 184, 135],
	"cadetblue": [95, 158, 160],
	"chartreuse": [127, 255, 0],
	"chocolate": [210, 105, 30],
	"coral": [255, 127, 80],
	"cornflowerblue": [100, 149, 237],
	"cornsilk": [255, 248, 220],
	"crimson": [220, 20, 60],
	"cyan": [0, 255, 255],
	"darkblue": [0, 0, 139],
	"darkcyan": [0, 139, 139],
	"darkgoldenrod": [184, 134, 11],
	"darkgray": [169, 169, 169],
	"darkgreen": [0, 100, 0],
	"darkgrey": [169, 169, 169],
	"darkkhaki": [189, 183, 107],
	"darkmagenta": [139, 0, 139],
	"darkolivegreen": [85, 107, 47],
	"darkorange": [255, 140, 0],
	"darkorchid": [153, 50, 204],
	"darkred": [139, 0, 0],
	"darksalmon": [233, 150, 122],
	"darkseagreen": [143, 188, 143],
	"darkslateblue": [72, 61, 139],
	"darkslategray": [47, 79, 79],
	"darkslategrey": [47, 79, 79],
	"darkturquoise": [0, 206, 209],
	"darkviolet": [148, 0, 211],
	"deeppink": [255, 20, 147],
	"deepskyblue": [0, 191, 255],
	"dimgray": [105, 105, 105],
	"dimgrey": [105, 105, 105],
	"dodgerblue": [30, 144, 255],
	"firebrick": [178, 34, 34],
	"floralwhite": [255, 250, 240],
	"forestgreen": [34, 139, 34],
	"fuchsia": [255, 0, 255],
	"gainsboro": [220, 220, 220],
	"ghostwhite": [248, 248, 255],
	"gold": [255, 215, 0],
	"goldenrod": [218, 165, 32],
	"gray": [128, 128, 128],
	"green": [0, 128, 0],
	"greenyellow": [173, 255, 47],
	"grey": [128, 128, 128],
	"honeydew": [240, 255, 240],
	"hotpink": [255, 105, 180],
	"indianred": [205, 92, 92],
	"indigo": [75, 0, 130],
	"ivory": [255, 255, 240],
	"khaki": [240, 230, 140],
	"lavender": [230, 230, 250],
	"lavenderblush": [255, 240, 245],
	"lawngreen": [124, 252, 0],
	"lemonchiffon": [255, 250, 205],
	"lightblue": [173, 216, 230],
	"lightcoral": [240, 128, 128],
	"lightcyan": [224, 255, 255],
	"lightgoldenrodyellow": [250, 250, 210],
	"lightgray": [211, 211, 211],
	"lightgreen": [144, 238, 144],
	"lightgrey": [211, 211, 211],
	"lightpink": [255, 182, 193],
	"lightsalmon": [255, 160, 122],
	"lightseagreen": [32, 178, 170],
	"lightskyblue": [135, 206, 250],
	"lightslategray": [119, 136, 153],
	"lightslategrey": [119, 136, 153],
	"lightsteelblue": [176, 196, 222],
	"lightyellow": [255, 255, 224],
	"lime": [0, 255, 0],
	"limegreen": [50, 205, 50],
	"linen": [250, 240, 230],
	"magenta": [255, 0, 255],
	"maroon": [128, 0, 0],
	"mediumaquamarine": [102, 205, 170],
	"mediumblue": [0, 0, 205],
	"mediumorchid": [186, 85, 211],
	"mediumpurple": [147, 112, 219],
	"mediumseagreen": [60, 179, 113],
	"mediumslateblue": [123, 104, 238],
	"mediumspringgreen": [0, 250, 154],
	"mediumturquoise": [72, 209, 204],
	"mediumvioletred": [199, 21, 133],
	"midnightblue": [25, 25, 112],
	"mintcream": [245, 255, 250],
	"mistyrose": [255, 228, 225],
	"moccasin": [255, 228, 181],
	"navajowhite": [255, 222, 173],
	"navy": [0, 0, 128],
	"oldlace": [253, 245, 230],
	"olive": [128, 128, 0],
	"olivedrab": [107, 142, 35],
	"orange": [255, 165, 0],
	"orangered": [255, 69, 0],
	"orchid": [218, 112, 214],
	"palegoldenrod": [238, 232, 170],
	"palegreen": [152, 251, 152],
	"paleturquoise": [175, 238, 238],
	"palevioletred": [219, 112, 147],
	"papayawhip": [255, 239, 213],
	"peachpuff": [255, 218, 185],
	"peru": [205, 133, 63],
	"pink": [255, 192, 203],
	"plum": [221, 160, 221],
	"powderblue": [176, 224, 230],
	"purple": [128, 0, 128],
	"rebeccapurple": [102, 51, 153],
	"red": [255, 0, 0],
	"rosybrown": [188, 143, 143],
	"royalblue": [65, 105, 225],
	"saddlebrown": [139, 69, 19],
	"salmon": [250, 128, 114],
	"sandybrown": [244, 164, 96],
	"seagreen": [46, 139, 87],
	"seashell": [255, 245, 238],
	"sienna": [160, 82, 45],
	"silver": [192, 192, 192],
	"skyblue": [135, 206, 235],
	"slateblue": [106, 90, 205],
	"slategray": [112, 128, 144],
	"slategrey": [112, 128, 144],
	"snow": [255, 250, 250],
	"springgreen": [0, 255, 127],
	"steelblue": [70, 130, 180],
	"tan": [210, 180, 140],
	"teal": [0, 128, 128],
	"thistle": [216, 191, 216],
	"tomato": [255, 99, 71],
	"turquoise": [64, 224, 208],
	"violet": [238, 130, 238],
	"wheat": [245, 222, 179],
	"white": [255, 255, 255],
	"whitesmoke": [245, 245, 245],
	"yellow": [255, 255, 0],
	"yellowgreen": [154, 205, 50]
};
},{}],5:[function(require,module,exports){
/* MIT license */
var colorNames = require('color-name');

module.exports = {
   getRgba: getRgba,
   getHsla: getHsla,
   getRgb: getRgb,
   getHsl: getHsl,
   getHwb: getHwb,
   getAlpha: getAlpha,

   hexString: hexString,
   rgbString: rgbString,
   rgbaString: rgbaString,
   percentString: percentString,
   percentaString: percentaString,
   hslString: hslString,
   hslaString: hslaString,
   hwbString: hwbString,
   keyword: keyword
}

function getRgba(string) {
   if (!string) {
      return;
   }
   var abbr =  /^#([a-fA-F0-9]{3})$/,
       hex =  /^#([a-fA-F0-9]{6})$/,
       rgba = /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,
       per = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,
       keyword = /(\D+)/;

   var rgb = [0, 0, 0],
       a = 1,
       match = string.match(abbr);
   if (match) {
      match = match[1];
      for (var i = 0; i < rgb.length; i++) {
         rgb[i] = parseInt(match[i] + match[i], 16);
      }
   }
   else if (match = string.match(hex)) {
      match = match[1];
      for (var i = 0; i < rgb.length; i++) {
         rgb[i] = parseInt(match.slice(i * 2, i * 2 + 2), 16);
      }
   }
   else if (match = string.match(rgba)) {
      for (var i = 0; i < rgb.length; i++) {
         rgb[i] = parseInt(match[i + 1]);
      }
      a = parseFloat(match[4]);
   }
   else if (match = string.match(per)) {
      for (var i = 0; i < rgb.length; i++) {
         rgb[i] = Math.round(parseFloat(match[i + 1]) * 2.55);
      }
      a = parseFloat(match[4]);
   }
   else if (match = string.match(keyword)) {
      if (match[1] == "transparent") {
         return [0, 0, 0, 0];
      }
      rgb = colorNames[match[1]];
      if (!rgb) {
         return;
      }
   }

   for (var i = 0; i < rgb.length; i++) {
      rgb[i] = scale(rgb[i], 0, 255);
   }
   if (!a && a != 0) {
      a = 1;
   }
   else {
      a = scale(a, 0, 1);
   }
   rgb[3] = a;
   return rgb;
}

function getHsla(string) {
   if (!string) {
      return;
   }
   var hsl = /^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/;
   var match = string.match(hsl);
   if (match) {
      var alpha = parseFloat(match[4]);
      var h = scale(parseInt(match[1]), 0, 360),
          s = scale(parseFloat(match[2]), 0, 100),
          l = scale(parseFloat(match[3]), 0, 100),
          a = scale(isNaN(alpha) ? 1 : alpha, 0, 1);
      return [h, s, l, a];
   }
}

function getHwb(string) {
   if (!string) {
      return;
   }
   var hwb = /^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/;
   var match = string.match(hwb);
   if (match) {
    var alpha = parseFloat(match[4]);
      var h = scale(parseInt(match[1]), 0, 360),
          w = scale(parseFloat(match[2]), 0, 100),
          b = scale(parseFloat(match[3]), 0, 100),
          a = scale(isNaN(alpha) ? 1 : alpha, 0, 1);
      return [h, w, b, a];
   }
}

function getRgb(string) {
   var rgba = getRgba(string);
   return rgba && rgba.slice(0, 3);
}

function getHsl(string) {
  var hsla = getHsla(string);
  return hsla && hsla.slice(0, 3);
}

function getAlpha(string) {
   var vals = getRgba(string);
   if (vals) {
      return vals[3];
   }
   else if (vals = getHsla(string)) {
      return vals[3];
   }
   else if (vals = getHwb(string)) {
      return vals[3];
   }
}

// generators
function hexString(rgb) {
   return "#" + hexDouble(rgb[0]) + hexDouble(rgb[1])
              + hexDouble(rgb[2]);
}

function rgbString(rgba, alpha) {
   if (alpha < 1 || (rgba[3] && rgba[3] < 1)) {
      return rgbaString(rgba, alpha);
   }
   return "rgb(" + rgba[0] + ", " + rgba[1] + ", " + rgba[2] + ")";
}

function rgbaString(rgba, alpha) {
   if (alpha === undefined) {
      alpha = (rgba[3] !== undefined ? rgba[3] : 1);
   }
   return "rgba(" + rgba[0] + ", " + rgba[1] + ", " + rgba[2]
           + ", " + alpha + ")";
}

function percentString(rgba, alpha) {
   if (alpha < 1 || (rgba[3] && rgba[3] < 1)) {
      return percentaString(rgba, alpha);
   }
   var r = Math.round(rgba[0]/255 * 100),
       g = Math.round(rgba[1]/255 * 100),
       b = Math.round(rgba[2]/255 * 100);

   return "rgb(" + r + "%, " + g + "%, " + b + "%)";
}

function percentaString(rgba, alpha) {
   var r = Math.round(rgba[0]/255 * 100),
       g = Math.round(rgba[1]/255 * 100),
       b = Math.round(rgba[2]/255 * 100);
   return "rgba(" + r + "%, " + g + "%, " + b + "%, " + (alpha || rgba[3] || 1) + ")";
}

function hslString(hsla, alpha) {
   if (alpha < 1 || (hsla[3] && hsla[3] < 1)) {
      return hslaString(hsla, alpha);
   }
   return "hsl(" + hsla[0] + ", " + hsla[1] + "%, " + hsla[2] + "%)";
}

function hslaString(hsla, alpha) {
   if (alpha === undefined) {
      alpha = (hsla[3] !== undefined ? hsla[3] : 1);
   }
   return "hsla(" + hsla[0] + ", " + hsla[1] + "%, " + hsla[2] + "%, "
           + alpha + ")";
}

// hwb is a bit different than rgb(a) & hsl(a) since there is no alpha specific syntax
// (hwb have alpha optional & 1 is default value)
function hwbString(hwb, alpha) {
   if (alpha === undefined) {
      alpha = (hwb[3] !== undefined ? hwb[3] : 1);
   }
   return "hwb(" + hwb[0] + ", " + hwb[1] + "%, " + hwb[2] + "%"
           + (alpha !== undefined && alpha !== 1 ? ", " + alpha : "") + ")";
}

function keyword(rgb) {
  return reverseNames[rgb.slice(0, 3)];
}

// helpers
function scale(num, min, max) {
   return Math.min(Math.max(min, num), max);
}

function hexDouble(num) {
  var str = num.toString(16).toUpperCase();
  return (str.length < 2) ? "0" + str : str;
}


//create a list of reverse color names
var reverseNames = {};
for (var name in colorNames) {
   reverseNames[colorNames[name]] = name;
}

},{"color-name":4}],6:[function(require,module,exports){
/* MIT license */
var convert = require("color-convert"),
    string = require("color-string");

var Color = function(obj) {
  if (obj instanceof Color) return obj;
  if (! (this instanceof Color)) return new Color(obj);

   this.values = {
      rgb: [0, 0, 0],
      hsl: [0, 0, 0],
      hsv: [0, 0, 0],
      hwb: [0, 0, 0],
      cmyk: [0, 0, 0, 0],
      alpha: 1
   }

   // parse Color() argument
   if (typeof obj == "string") {
      var vals = string.getRgba(obj);
      if (vals) {
         this.setValues("rgb", vals);
      }
      else if(vals = string.getHsla(obj)) {
         this.setValues("hsl", vals);
      }
      else if(vals = string.getHwb(obj)) {
         this.setValues("hwb", vals);
      }
      else {
        throw new Error("Unable to parse color from string \"" + obj + "\"");
      }
   }
   else if (typeof obj == "object") {
      var vals = obj;
      if(vals["r"] !== undefined || vals["red"] !== undefined) {
         this.setValues("rgb", vals)
      }
      else if(vals["l"] !== undefined || vals["lightness"] !== undefined) {
         this.setValues("hsl", vals)
      }
      else if(vals["v"] !== undefined || vals["value"] !== undefined) {
         this.setValues("hsv", vals)
      }
      else if(vals["w"] !== undefined || vals["whiteness"] !== undefined) {
         this.setValues("hwb", vals)
      }
      else if(vals["c"] !== undefined || vals["cyan"] !== undefined) {
         this.setValues("cmyk", vals)
      }
      else {
        throw new Error("Unable to parse color from object " + JSON.stringify(obj));
      }
   }
}

Color.prototype = {
   rgb: function (vals) {
      return this.setSpace("rgb", arguments);
   },
   hsl: function(vals) {
      return this.setSpace("hsl", arguments);
   },
   hsv: function(vals) {
      return this.setSpace("hsv", arguments);
   },
   hwb: function(vals) {
      return this.setSpace("hwb", arguments);
   },
   cmyk: function(vals) {
      return this.setSpace("cmyk", arguments);
   },

   rgbArray: function() {
      return this.values.rgb;
   },
   hslArray: function() {
      return this.values.hsl;
   },
   hsvArray: function() {
      return this.values.hsv;
   },
   hwbArray: function() {
      if (this.values.alpha !== 1) {
        return this.values.hwb.concat([this.values.alpha])
      }
      return this.values.hwb;
   },
   cmykArray: function() {
      return this.values.cmyk;
   },
   rgbaArray: function() {
      var rgb = this.values.rgb;
      return rgb.concat([this.values.alpha]);
   },
   hslaArray: function() {
      var hsl = this.values.hsl;
      return hsl.concat([this.values.alpha]);
   },
   alpha: function(val) {
      if (val === undefined) {
         return this.values.alpha;
      }
      this.setValues("alpha", val);
      return this;
   },

   red: function(val) {
      return this.setChannel("rgb", 0, val);
   },
   green: function(val) {
      return this.setChannel("rgb", 1, val);
   },
   blue: function(val) {
      return this.setChannel("rgb", 2, val);
   },
   hue: function(val) {
      return this.setChannel("hsl", 0, val);
   },
   saturation: function(val) {
      return this.setChannel("hsl", 1, val);
   },
   lightness: function(val) {
      return this.setChannel("hsl", 2, val);
   },
   saturationv: function(val) {
      return this.setChannel("hsv", 1, val);
   },
   whiteness: function(val) {
      return this.setChannel("hwb", 1, val);
   },
   blackness: function(val) {
      return this.setChannel("hwb", 2, val);
   },
   value: function(val) {
      return this.setChannel("hsv", 2, val);
   },
   cyan: function(val) {
      return this.setChannel("cmyk", 0, val);
   },
   magenta: function(val) {
      return this.setChannel("cmyk", 1, val);
   },
   yellow: function(val) {
      return this.setChannel("cmyk", 2, val);
   },
   black: function(val) {
      return this.setChannel("cmyk", 3, val);
   },

   hexString: function() {
      return string.hexString(this.values.rgb);
   },
   rgbString: function() {
      return string.rgbString(this.values.rgb, this.values.alpha);
   },
   rgbaString: function() {
      return string.rgbaString(this.values.rgb, this.values.alpha);
   },
   percentString: function() {
      return string.percentString(this.values.rgb, this.values.alpha);
   },
   hslString: function() {
      return string.hslString(this.values.hsl, this.values.alpha);
   },
   hslaString: function() {
      return string.hslaString(this.values.hsl, this.values.alpha);
   },
   hwbString: function() {
      return string.hwbString(this.values.hwb, this.values.alpha);
   },
   keyword: function() {
      return string.keyword(this.values.rgb, this.values.alpha);
   },

   rgbNumber: function() {
      return (this.values.rgb[0] << 16) | (this.values.rgb[1] << 8) | this.values.rgb[2];
   },

   luminosity: function() {
      // http://www.w3.org/TR/WCAG20/#relativeluminancedef
      var rgb = this.values.rgb;
      var lum = [];
      for (var i = 0; i < rgb.length; i++) {
         var chan = rgb[i] / 255;
         lum[i] = (chan <= 0.03928) ? chan / 12.92
                  : Math.pow(((chan + 0.055) / 1.055), 2.4)
      }
      return 0.2126 * lum[0] + 0.7152 * lum[1] + 0.0722 * lum[2];
   },

   contrast: function(color2) {
      // http://www.w3.org/TR/WCAG20/#contrast-ratiodef
      var lum1 = this.luminosity();
      var lum2 = color2.luminosity();
      if (lum1 > lum2) {
         return (lum1 + 0.05) / (lum2 + 0.05)
      };
      return (lum2 + 0.05) / (lum1 + 0.05);
   },

   level: function(color2) {
     var contrastRatio = this.contrast(color2);
     return (contrastRatio >= 7.1)
       ? 'AAA'
       : (contrastRatio >= 4.5)
        ? 'AA'
        : '';
   },

   dark: function() {
      // YIQ equation from http://24ways.org/2010/calculating-color-contrast
      var rgb = this.values.rgb,
          yiq = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
      return yiq < 128;
   },

   light: function() {
      return !this.dark();
   },

   negate: function() {
      var rgb = []
      for (var i = 0; i < 3; i++) {
         rgb[i] = 255 - this.values.rgb[i];
      }
      this.setValues("rgb", rgb);
      return this;
   },

   lighten: function(ratio) {
      this.values.hsl[2] += this.values.hsl[2] * ratio;
      this.setValues("hsl", this.values.hsl);
      return this;
   },

   darken: function(ratio) {
      this.values.hsl[2] -= this.values.hsl[2] * ratio;
      this.setValues("hsl", this.values.hsl);
      return this;
   },

   saturate: function(ratio) {
      this.values.hsl[1] += this.values.hsl[1] * ratio;
      this.setValues("hsl", this.values.hsl);
      return this;
   },

   desaturate: function(ratio) {
      this.values.hsl[1] -= this.values.hsl[1] * ratio;
      this.setValues("hsl", this.values.hsl);
      return this;
   },

   whiten: function(ratio) {
      this.values.hwb[1] += this.values.hwb[1] * ratio;
      this.setValues("hwb", this.values.hwb);
      return this;
   },

   blacken: function(ratio) {
      this.values.hwb[2] += this.values.hwb[2] * ratio;
      this.setValues("hwb", this.values.hwb);
      return this;
   },

   greyscale: function() {
      var rgb = this.values.rgb;
      // http://en.wikipedia.org/wiki/Grayscale#Converting_color_to_grayscale
      var val = rgb[0] * 0.3 + rgb[1] * 0.59 + rgb[2] * 0.11;
      this.setValues("rgb", [val, val, val]);
      return this;
   },

   clearer: function(ratio) {
      this.setValues("alpha", this.values.alpha - (this.values.alpha * ratio));
      return this;
   },

   opaquer: function(ratio) {
      this.setValues("alpha", this.values.alpha + (this.values.alpha * ratio));
      return this;
   },

   rotate: function(degrees) {
      var hue = this.values.hsl[0];
      hue = (hue + degrees) % 360;
      hue = hue < 0 ? 360 + hue : hue;
      this.values.hsl[0] = hue;
      this.setValues("hsl", this.values.hsl);
      return this;
   },

   mix: function(color2, weight) {
      weight = 1 - (weight == null ? 0.5 : weight);

      // algorithm from Sass's mix(). Ratio of first color in mix is
      // determined by the alphas of both colors and the weight
      var t1 = weight * 2 - 1,
          d = this.alpha() - color2.alpha();

      var weight1 = (((t1 * d == -1) ? t1 : (t1 + d) / (1 + t1 * d)) + 1) / 2;
      var weight2 = 1 - weight1;

      var rgb = this.rgbArray();
      var rgb2 = color2.rgbArray();

      for (var i = 0; i < rgb.length; i++) {
         rgb[i] = rgb[i] * weight1 + rgb2[i] * weight2;
      }
      this.setValues("rgb", rgb);

      var alpha = this.alpha() * weight + color2.alpha() * (1 - weight);
      this.setValues("alpha", alpha);

      return this;
   },

   toJSON: function() {
     return this.rgb();
   },

   clone: function() {
     return new Color(this.rgb());
   }
}


Color.prototype.getValues = function(space) {
   var vals = {};
   for (var i = 0; i < space.length; i++) {
      vals[space.charAt(i)] = this.values[space][i];
   }
   if (this.values.alpha != 1) {
      vals["a"] = this.values.alpha;
   }
   // {r: 255, g: 255, b: 255, a: 0.4}
   return vals;
}

Color.prototype.setValues = function(space, vals) {
   var spaces = {
      "rgb": ["red", "green", "blue"],
      "hsl": ["hue", "saturation", "lightness"],
      "hsv": ["hue", "saturation", "value"],
      "hwb": ["hue", "whiteness", "blackness"],
      "cmyk": ["cyan", "magenta", "yellow", "black"]
   };

   var maxes = {
      "rgb": [255, 255, 255],
      "hsl": [360, 100, 100],
      "hsv": [360, 100, 100],
      "hwb": [360, 100, 100],
      "cmyk": [100, 100, 100, 100]
   };

   var alpha = 1;
   if (space == "alpha") {
      alpha = vals;
   }
   else if (vals.length) {
      // [10, 10, 10]
      this.values[space] = vals.slice(0, space.length);
      alpha = vals[space.length];
   }
   else if (vals[space.charAt(0)] !== undefined) {
      // {r: 10, g: 10, b: 10}
      for (var i = 0; i < space.length; i++) {
        this.values[space][i] = vals[space.charAt(i)];
      }
      alpha = vals.a;
   }
   else if (vals[spaces[space][0]] !== undefined) {
      // {red: 10, green: 10, blue: 10}
      var chans = spaces[space];
      for (var i = 0; i < space.length; i++) {
        this.values[space][i] = vals[chans[i]];
      }
      alpha = vals.alpha;
   }
   this.values.alpha = Math.max(0, Math.min(1, (alpha !== undefined ? alpha : this.values.alpha) ));
   if (space == "alpha") {
      return;
   }

   // cap values of the space prior converting all values
   for (var i = 0; i < space.length; i++) {
      var capped = Math.max(0, Math.min(maxes[space][i], this.values[space][i]));
      this.values[space][i] = Math.round(capped);
   }

   // convert to all the other color spaces
   for (var sname in spaces) {
      if (sname != space) {
         this.values[sname] = convert[space][sname](this.values[space])
      }

      // cap values
      for (var i = 0; i < sname.length; i++) {
         var capped = Math.max(0, Math.min(maxes[sname][i], this.values[sname][i]));
         this.values[sname][i] = Math.round(capped);
      }
   }
   return true;
}

Color.prototype.setSpace = function(space, args) {
   var vals = args[0];
   if (vals === undefined) {
      // color.rgb()
      return this.getValues(space);
   }
   // color.rgb(10, 10, 10)
   if (typeof vals == "number") {
      vals = Array.prototype.slice.call(args);
   }
   this.setValues(space, vals);
   return this;
}

Color.prototype.setChannel = function(space, index, val) {
   if (val === undefined) {
      // color.red()
      return this.values[space][index];
   }
   // color.red(100)
   this.values[space][index] = val;
   this.setValues(space, this.values[space]);
   return this;
}

module.exports = Color;

},{"color-convert":3,"color-string":5}],7:[function(require,module,exports){
module.exports = require('./lib/geocrunch');
},{"./lib/geocrunch":12}],8:[function(require,module,exports){
// distance.js - Distance mixins for Paths

var _ = require('underscore');

var R = require('./constants').EARTHRADIUS;
var units = require('./units');
var flipCoords = require('./flipcoords');

// Area conversions (from sqmeters)
var convertFuncs = {
  sqmeters: function (a) {
    return a;
  },
  sqmiles: function (a) {
    return units.sqMeters.toSqMiles(a);
  },
  acres: function (a) {
    return units.sqMeters.toAcres(a);
  }
};

// Calculates area in square meters
// Method taken from OpenLayers API, https://github.com/openlayers/openlayers/blob/master/lib/OpenLayers/Geometry/LinearRing.js#L270
var calcArea = function (coordArray) {
  var area = 0, i, l, c1, c2;
  for (i = 0, l = coordArray.length; i < l; i += 1) {
    c1 = coordArray[i];
    c2 = coordArray[(i + 1) % coordArray.length]; // Access next item in array until last item is i, then accesses first (0)
    area = area + units.degrees.toRadians(c2[0] - c1[0]) * (2 + Math.sin(units.degrees.toRadians(c1[1])) + Math.sin(units.degrees.toRadians(c2[1])));
  }
  return Math.abs(area * R * R / 2);
};

var calcCenter = function (coordArray) {
  var offset = coordArray[0], twiceArea = 0, x = 0, y = 0, i, l, c1, c2, f;
  if (coordArray.length === 1) {
    return coordArray[0];
  }
  for (i = 0, l = coordArray.length; i < l; i += 1) {
    c1 = coordArray[i];
    c2 = coordArray[(i + 1) % coordArray.length]; // Access next item in array until last item is i, then accesses first (0)
    f = (c1[1] - offset[1]) * (c2[0] - offset[0]) - (c2[1] - offset[1]) * (c1[0] - offset[0]);
    twiceArea = twiceArea + f;
    x = x + ((c1[0] + c2[0] - 2 * offset[0]) * f);
    y = y + ((c1[1] + c2[1] - 2 * offset[1]) * f);
  }
  f = twiceArea * 3;
  return [x / f + offset[0], y / f + offset[1]];
};

module.exports = {
  _internalAreaCalc: function () {
    // If not set, set this._calcedArea to total area in UNITS
    // Checks for cache to prevent additional unnecessary calcs
    if (!this._calcedArea) {
      if (this._coords.length < 3) {
        this._calcedArea = 0;
      } else {
        this._calcedArea = calcArea(this._coords);
      }
    }
  },
  _internalCenterCalc: function () {
    if (!this._calcedCenter && this._coords.length) {
      this._calcedCenter = calcCenter(this._coords);
    }
  },
  area: function (options) {
    var opts = _.extend({
      units: 'sqmeters'
    }, options);
    this._internalAreaCalc();
    if (_.isFunction(convertFuncs[opts.units])) {
      return convertFuncs[opts.units](this._calcedArea);
    }
    // TODO. Handle non-matching units
  },
  center: function () {
    this._internalCenterCalc();
    return this._options.imBackwards === true ? flipCoords(this._calcedCenter) : this._calcedCenter;
  }
};
},{"./constants":9,"./flipcoords":11,"./units":14,"underscore":15}],9:[function(require,module,exports){
// utils/constants.js

module.exports = {
  EARTHRADIUS: 6371000 // R in meters
};
},{}],10:[function(require,module,exports){
// distance.js - Distance mixins for Paths

var _ = require('underscore');

var R = require('./constants').EARTHRADIUS;
var units = require('./units');

// Distance conversions (from meters)
var convertFuncs = {
  meters: function (d) {
    return d;
  },
  kilometers: function (d) {
    return units.meters.toKilometers(d);
  },
  feet: function (d) {
    return units.meters.toFeet(d);
  },
  miles: function (d) {
    return units.meters.toMiles(d);
  }
};

// Distance in meters
// Always positive regardless of direction
// Calculation based on Haversine Formula http://en.wikipedia.org/wiki/Haversine_formula
// Another method is @ http://www.movable-type.co.uk/scripts/latlong-vincenty.html but seems way overcomplicated
var calcDistance = function (coord1, coord2) {
  var deltaLng = units.degrees.toRadians(coord1[0] - coord2[0]),
      deltaLat = units.degrees.toRadians(coord1[1] - coord2[1]),
      lat1 = units.degrees.toRadians(coord1[1]),
      lat2 = units.degrees.toRadians(coord2[1]),
      hvsLng = Math.sin(deltaLng / 2),
      hvsLat = Math.sin(deltaLat / 2);

  var a = hvsLat * hvsLat + hvsLng * hvsLng * Math.cos(lat1) * Math.cos(lat2);
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
};

module.exports = {
  _internalDistanceCalc: function () {
    // If not set, set this._calcedDistance to total distance in meters
    // Checks for cache to prevent additional unnecessary calcs
    var distance = 0, i, l;
    if (!this._calcedDistance) {
      for (i = 0, l = this._coords.length; i < l; i += 1) {
        if (i > 0) {
          distance = distance + calcDistance(this._coords[i - 1], this._coords[i]);
        }
      }
      this._calcedDistance = distance;
    }
  },
  distance: function (options) {
    var opts = _.extend({
      units: 'meters'
    }, options);
    this._internalDistanceCalc();
    if (_.isFunction(convertFuncs[opts.units])) {
      return convertFuncs[opts.units](this._calcedDistance);
    }
    // TODO. Handle non-matching units
  }
};
},{"./constants":9,"./units":14,"underscore":15}],11:[function(require,module,exports){
// utils/flipcoords.js - Util functions for working with backwards coordinates [lat, lng]

var _ = require('underscore');

module.exports = function (backwardsCoordArray) {
  return _.map(backwardsCoordArray, function (backwardsCoord) {
    return [backwardsCoord[1], backwardsCoord[0]];
  });
};
},{"underscore":15}],12:[function(require,module,exports){
// geocrunch.js

var _ = require('underscore');

var Path = require('./path');
var distanceMixins = require('./distance'),
    areaMixins = require('./area');

_.extend(Path.prototype, distanceMixins, areaMixins);

exports.path = function (coords, options) {
  return new Path(coords, options);
};
},{"./area":8,"./distance":10,"./path":13,"underscore":15}],13:[function(require,module,exports){
// path.js - Object for working with a linear path of coordinates

var flipCoords = require('./flipcoords');

var Path = function (coords, options) {
  this._options = options || {};

  // Set this._coords... Think about flipping at time of calcs for less iterations/better perf. May risk code clarity and mixin ease.
  coords = coords || [];
  this._coords = this._options.imBackwards === true ? flipCoords(coords) : coords;
};

module.exports = Path;

},{"./flipcoords":11}],14:[function(require,module,exports){
// units.js - Standard unit conversions

exports.meters = {
  toFeet: function (m) {
    return m * 3.28084;
  },
  toKilometers: function (m) {
    return m * 0.001;
  },
  toMiles: function (m) {
    return m * 0.000621371;
  }
};

exports.sqMeters = {
  toSqMiles: function (m) {
    return m * 0.000000386102;
  },
  toAcres: function (m) {
    return m * 0.000247105;
  }
};

exports.degrees = {
  toRadians: function (d) {
    return d * Math.PI / 180;
  }
};
},{}],15:[function(require,module,exports){
//     Underscore.js 1.5.2
//     http://underscorejs.org
//     (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.

(function() {

  // Baseline setup
  // --------------

  // Establish the root object, `window` in the browser, or `exports` on the server.
  var root = this;

  // Save the previous value of the `_` variable.
  var previousUnderscore = root._;

  // Establish the object that gets returned to break out of a loop iteration.
  var breaker = {};

  // Save bytes in the minified (but not gzipped) version:
  var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

  // Create quick reference variables for speed access to core prototypes.
  var
    push             = ArrayProto.push,
    slice            = ArrayProto.slice,
    concat           = ArrayProto.concat,
    toString         = ObjProto.toString,
    hasOwnProperty   = ObjProto.hasOwnProperty;

  // All **ECMAScript 5** native function implementations that we hope to use
  // are declared here.
  var
    nativeForEach      = ArrayProto.forEach,
    nativeMap          = ArrayProto.map,
    nativeReduce       = ArrayProto.reduce,
    nativeReduceRight  = ArrayProto.reduceRight,
    nativeFilter       = ArrayProto.filter,
    nativeEvery        = ArrayProto.every,
    nativeSome         = ArrayProto.some,
    nativeIndexOf      = ArrayProto.indexOf,
    nativeLastIndexOf  = ArrayProto.lastIndexOf,
    nativeIsArray      = Array.isArray,
    nativeKeys         = Object.keys,
    nativeBind         = FuncProto.bind;

  // Create a safe reference to the Underscore object for use below.
  var _ = function(obj) {
    if (obj instanceof _) return obj;
    if (!(this instanceof _)) return new _(obj);
    this._wrapped = obj;
  };

  // Export the Underscore object for **Node.js**, with
  // backwards-compatibility for the old `require()` API. If we're in
  // the browser, add `_` as a global object via a string identifier,
  // for Closure Compiler "advanced" mode.
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = _;
    }
    exports._ = _;
  } else {
    root._ = _;
  }

  // Current version.
  _.VERSION = '1.5.2';

  // Collection Functions
  // --------------------

  // The cornerstone, an `each` implementation, aka `forEach`.
  // Handles objects with the built-in `forEach`, arrays, and raw objects.
  // Delegates to **ECMAScript 5**'s native `forEach` if available.
  var each = _.each = _.forEach = function(obj, iterator, context) {
    if (obj == null) return;
    if (nativeForEach && obj.forEach === nativeForEach) {
      obj.forEach(iterator, context);
    } else if (obj.length === +obj.length) {
      for (var i = 0, length = obj.length; i < length; i++) {
        if (iterator.call(context, obj[i], i, obj) === breaker) return;
      }
    } else {
      var keys = _.keys(obj);
      for (var i = 0, length = keys.length; i < length; i++) {
        if (iterator.call(context, obj[keys[i]], keys[i], obj) === breaker) return;
      }
    }
  };

  // Return the results of applying the iterator to each element.
  // Delegates to **ECMAScript 5**'s native `map` if available.
  _.map = _.collect = function(obj, iterator, context) {
    var results = [];
    if (obj == null) return results;
    if (nativeMap && obj.map === nativeMap) return obj.map(iterator, context);
    each(obj, function(value, index, list) {
      results.push(iterator.call(context, value, index, list));
    });
    return results;
  };

  var reduceError = 'Reduce of empty array with no initial value';

  // **Reduce** builds up a single result from a list of values, aka `inject`,
  // or `foldl`. Delegates to **ECMAScript 5**'s native `reduce` if available.
  _.reduce = _.foldl = _.inject = function(obj, iterator, memo, context) {
    var initial = arguments.length > 2;
    if (obj == null) obj = [];
    if (nativeReduce && obj.reduce === nativeReduce) {
      if (context) iterator = _.bind(iterator, context);
      return initial ? obj.reduce(iterator, memo) : obj.reduce(iterator);
    }
    each(obj, function(value, index, list) {
      if (!initial) {
        memo = value;
        initial = true;
      } else {
        memo = iterator.call(context, memo, value, index, list);
      }
    });
    if (!initial) throw new TypeError(reduceError);
    return memo;
  };

  // The right-associative version of reduce, also known as `foldr`.
  // Delegates to **ECMAScript 5**'s native `reduceRight` if available.
  _.reduceRight = _.foldr = function(obj, iterator, memo, context) {
    var initial = arguments.length > 2;
    if (obj == null) obj = [];
    if (nativeReduceRight && obj.reduceRight === nativeReduceRight) {
      if (context) iterator = _.bind(iterator, context);
      return initial ? obj.reduceRight(iterator, memo) : obj.reduceRight(iterator);
    }
    var length = obj.length;
    if (length !== +length) {
      var keys = _.keys(obj);
      length = keys.length;
    }
    each(obj, function(value, index, list) {
      index = keys ? keys[--length] : --length;
      if (!initial) {
        memo = obj[index];
        initial = true;
      } else {
        memo = iterator.call(context, memo, obj[index], index, list);
      }
    });
    if (!initial) throw new TypeError(reduceError);
    return memo;
  };

  // Return the first value which passes a truth test. Aliased as `detect`.
  _.find = _.detect = function(obj, iterator, context) {
    var result;
    any(obj, function(value, index, list) {
      if (iterator.call(context, value, index, list)) {
        result = value;
        return true;
      }
    });
    return result;
  };

  // Return all the elements that pass a truth test.
  // Delegates to **ECMAScript 5**'s native `filter` if available.
  // Aliased as `select`.
  _.filter = _.select = function(obj, iterator, context) {
    var results = [];
    if (obj == null) return results;
    if (nativeFilter && obj.filter === nativeFilter) return obj.filter(iterator, context);
    each(obj, function(value, index, list) {
      if (iterator.call(context, value, index, list)) results.push(value);
    });
    return results;
  };

  // Return all the elements for which a truth test fails.
  _.reject = function(obj, iterator, context) {
    return _.filter(obj, function(value, index, list) {
      return !iterator.call(context, value, index, list);
    }, context);
  };

  // Determine whether all of the elements match a truth test.
  // Delegates to **ECMAScript 5**'s native `every` if available.
  // Aliased as `all`.
  _.every = _.all = function(obj, iterator, context) {
    iterator || (iterator = _.identity);
    var result = true;
    if (obj == null) return result;
    if (nativeEvery && obj.every === nativeEvery) return obj.every(iterator, context);
    each(obj, function(value, index, list) {
      if (!(result = result && iterator.call(context, value, index, list))) return breaker;
    });
    return !!result;
  };

  // Determine if at least one element in the object matches a truth test.
  // Delegates to **ECMAScript 5**'s native `some` if available.
  // Aliased as `any`.
  var any = _.some = _.any = function(obj, iterator, context) {
    iterator || (iterator = _.identity);
    var result = false;
    if (obj == null) return result;
    if (nativeSome && obj.some === nativeSome) return obj.some(iterator, context);
    each(obj, function(value, index, list) {
      if (result || (result = iterator.call(context, value, index, list))) return breaker;
    });
    return !!result;
  };

  // Determine if the array or object contains a given value (using `===`).
  // Aliased as `include`.
  _.contains = _.include = function(obj, target) {
    if (obj == null) return false;
    if (nativeIndexOf && obj.indexOf === nativeIndexOf) return obj.indexOf(target) != -1;
    return any(obj, function(value) {
      return value === target;
    });
  };

  // Invoke a method (with arguments) on every item in a collection.
  _.invoke = function(obj, method) {
    var args = slice.call(arguments, 2);
    var isFunc = _.isFunction(method);
    return _.map(obj, function(value) {
      return (isFunc ? method : value[method]).apply(value, args);
    });
  };

  // Convenience version of a common use case of `map`: fetching a property.
  _.pluck = function(obj, key) {
    return _.map(obj, function(value){ return value[key]; });
  };

  // Convenience version of a common use case of `filter`: selecting only objects
  // containing specific `key:value` pairs.
  _.where = function(obj, attrs, first) {
    if (_.isEmpty(attrs)) return first ? void 0 : [];
    return _[first ? 'find' : 'filter'](obj, function(value) {
      for (var key in attrs) {
        if (attrs[key] !== value[key]) return false;
      }
      return true;
    });
  };

  // Convenience version of a common use case of `find`: getting the first object
  // containing specific `key:value` pairs.
  _.findWhere = function(obj, attrs) {
    return _.where(obj, attrs, true);
  };

  // Return the maximum element or (element-based computation).
  // Can't optimize arrays of integers longer than 65,535 elements.
  // See [WebKit Bug 80797](https://bugs.webkit.org/show_bug.cgi?id=80797)
  _.max = function(obj, iterator, context) {
    if (!iterator && _.isArray(obj) && obj[0] === +obj[0] && obj.length < 65535) {
      return Math.max.apply(Math, obj);
    }
    if (!iterator && _.isEmpty(obj)) return -Infinity;
    var result = {computed : -Infinity, value: -Infinity};
    each(obj, function(value, index, list) {
      var computed = iterator ? iterator.call(context, value, index, list) : value;
      computed > result.computed && (result = {value : value, computed : computed});
    });
    return result.value;
  };

  // Return the minimum element (or element-based computation).
  _.min = function(obj, iterator, context) {
    if (!iterator && _.isArray(obj) && obj[0] === +obj[0] && obj.length < 65535) {
      return Math.min.apply(Math, obj);
    }
    if (!iterator && _.isEmpty(obj)) return Infinity;
    var result = {computed : Infinity, value: Infinity};
    each(obj, function(value, index, list) {
      var computed = iterator ? iterator.call(context, value, index, list) : value;
      computed < result.computed && (result = {value : value, computed : computed});
    });
    return result.value;
  };

  // Shuffle an array, using the modern version of the 
  // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
  _.shuffle = function(obj) {
    var rand;
    var index = 0;
    var shuffled = [];
    each(obj, function(value) {
      rand = _.random(index++);
      shuffled[index - 1] = shuffled[rand];
      shuffled[rand] = value;
    });
    return shuffled;
  };

  // Sample **n** random values from an array.
  // If **n** is not specified, returns a single random element from the array.
  // The internal `guard` argument allows it to work with `map`.
  _.sample = function(obj, n, guard) {
    if (arguments.length < 2 || guard) {
      return obj[_.random(obj.length - 1)];
    }
    return _.shuffle(obj).slice(0, Math.max(0, n));
  };

  // An internal function to generate lookup iterators.
  var lookupIterator = function(value) {
    return _.isFunction(value) ? value : function(obj){ return obj[value]; };
  };

  // Sort the object's values by a criterion produced by an iterator.
  _.sortBy = function(obj, value, context) {
    var iterator = lookupIterator(value);
    return _.pluck(_.map(obj, function(value, index, list) {
      return {
        value: value,
        index: index,
        criteria: iterator.call(context, value, index, list)
      };
    }).sort(function(left, right) {
      var a = left.criteria;
      var b = right.criteria;
      if (a !== b) {
        if (a > b || a === void 0) return 1;
        if (a < b || b === void 0) return -1;
      }
      return left.index - right.index;
    }), 'value');
  };

  // An internal function used for aggregate "group by" operations.
  var group = function(behavior) {
    return function(obj, value, context) {
      var result = {};
      var iterator = value == null ? _.identity : lookupIterator(value);
      each(obj, function(value, index) {
        var key = iterator.call(context, value, index, obj);
        behavior(result, key, value);
      });
      return result;
    };
  };

  // Groups the object's values by a criterion. Pass either a string attribute
  // to group by, or a function that returns the criterion.
  _.groupBy = group(function(result, key, value) {
    (_.has(result, key) ? result[key] : (result[key] = [])).push(value);
  });

  // Indexes the object's values by a criterion, similar to `groupBy`, but for
  // when you know that your index values will be unique.
  _.indexBy = group(function(result, key, value) {
    result[key] = value;
  });

  // Counts instances of an object that group by a certain criterion. Pass
  // either a string attribute to count by, or a function that returns the
  // criterion.
  _.countBy = group(function(result, key) {
    _.has(result, key) ? result[key]++ : result[key] = 1;
  });

  // Use a comparator function to figure out the smallest index at which
  // an object should be inserted so as to maintain order. Uses binary search.
  _.sortedIndex = function(array, obj, iterator, context) {
    iterator = iterator == null ? _.identity : lookupIterator(iterator);
    var value = iterator.call(context, obj);
    var low = 0, high = array.length;
    while (low < high) {
      var mid = (low + high) >>> 1;
      iterator.call(context, array[mid]) < value ? low = mid + 1 : high = mid;
    }
    return low;
  };

  // Safely create a real, live array from anything iterable.
  _.toArray = function(obj) {
    if (!obj) return [];
    if (_.isArray(obj)) return slice.call(obj);
    if (obj.length === +obj.length) return _.map(obj, _.identity);
    return _.values(obj);
  };

  // Return the number of elements in an object.
  _.size = function(obj) {
    if (obj == null) return 0;
    return (obj.length === +obj.length) ? obj.length : _.keys(obj).length;
  };

  // Array Functions
  // ---------------

  // Get the first element of an array. Passing **n** will return the first N
  // values in the array. Aliased as `head` and `take`. The **guard** check
  // allows it to work with `_.map`.
  _.first = _.head = _.take = function(array, n, guard) {
    if (array == null) return void 0;
    return (n == null) || guard ? array[0] : slice.call(array, 0, n);
  };

  // Returns everything but the last entry of the array. Especially useful on
  // the arguments object. Passing **n** will return all the values in
  // the array, excluding the last N. The **guard** check allows it to work with
  // `_.map`.
  _.initial = function(array, n, guard) {
    return slice.call(array, 0, array.length - ((n == null) || guard ? 1 : n));
  };

  // Get the last element of an array. Passing **n** will return the last N
  // values in the array. The **guard** check allows it to work with `_.map`.
  _.last = function(array, n, guard) {
    if (array == null) return void 0;
    if ((n == null) || guard) {
      return array[array.length - 1];
    } else {
      return slice.call(array, Math.max(array.length - n, 0));
    }
  };

  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
  // Especially useful on the arguments object. Passing an **n** will return
  // the rest N values in the array. The **guard**
  // check allows it to work with `_.map`.
  _.rest = _.tail = _.drop = function(array, n, guard) {
    return slice.call(array, (n == null) || guard ? 1 : n);
  };

  // Trim out all falsy values from an array.
  _.compact = function(array) {
    return _.filter(array, _.identity);
  };

  // Internal implementation of a recursive `flatten` function.
  var flatten = function(input, shallow, output) {
    if (shallow && _.every(input, _.isArray)) {
      return concat.apply(output, input);
    }
    each(input, function(value) {
      if (_.isArray(value) || _.isArguments(value)) {
        shallow ? push.apply(output, value) : flatten(value, shallow, output);
      } else {
        output.push(value);
      }
    });
    return output;
  };

  // Flatten out an array, either recursively (by default), or just one level.
  _.flatten = function(array, shallow) {
    return flatten(array, shallow, []);
  };

  // Return a version of the array that does not contain the specified value(s).
  _.without = function(array) {
    return _.difference(array, slice.call(arguments, 1));
  };

  // Produce a duplicate-free version of the array. If the array has already
  // been sorted, you have the option of using a faster algorithm.
  // Aliased as `unique`.
  _.uniq = _.unique = function(array, isSorted, iterator, context) {
    if (_.isFunction(isSorted)) {
      context = iterator;
      iterator = isSorted;
      isSorted = false;
    }
    var initial = iterator ? _.map(array, iterator, context) : array;
    var results = [];
    var seen = [];
    each(initial, function(value, index) {
      if (isSorted ? (!index || seen[seen.length - 1] !== value) : !_.contains(seen, value)) {
        seen.push(value);
        results.push(array[index]);
      }
    });
    return results;
  };

  // Produce an array that contains the union: each distinct element from all of
  // the passed-in arrays.
  _.union = function() {
    return _.uniq(_.flatten(arguments, true));
  };

  // Produce an array that contains every item shared between all the
  // passed-in arrays.
  _.intersection = function(array) {
    var rest = slice.call(arguments, 1);
    return _.filter(_.uniq(array), function(item) {
      return _.every(rest, function(other) {
        return _.indexOf(other, item) >= 0;
      });
    });
  };

  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  _.difference = function(array) {
    var rest = concat.apply(ArrayProto, slice.call(arguments, 1));
    return _.filter(array, function(value){ return !_.contains(rest, value); });
  };

  // Zip together multiple lists into a single array -- elements that share
  // an index go together.
  _.zip = function() {
    var length = _.max(_.pluck(arguments, "length").concat(0));
    var results = new Array(length);
    for (var i = 0; i < length; i++) {
      results[i] = _.pluck(arguments, '' + i);
    }
    return results;
  };

  // Converts lists into objects. Pass either a single array of `[key, value]`
  // pairs, or two parallel arrays of the same length -- one of keys, and one of
  // the corresponding values.
  _.object = function(list, values) {
    if (list == null) return {};
    var result = {};
    for (var i = 0, length = list.length; i < length; i++) {
      if (values) {
        result[list[i]] = values[i];
      } else {
        result[list[i][0]] = list[i][1];
      }
    }
    return result;
  };

  // If the browser doesn't supply us with indexOf (I'm looking at you, **MSIE**),
  // we need this function. Return the position of the first occurrence of an
  // item in an array, or -1 if the item is not included in the array.
  // Delegates to **ECMAScript 5**'s native `indexOf` if available.
  // If the array is large and already in sort order, pass `true`
  // for **isSorted** to use binary search.
  _.indexOf = function(array, item, isSorted) {
    if (array == null) return -1;
    var i = 0, length = array.length;
    if (isSorted) {
      if (typeof isSorted == 'number') {
        i = (isSorted < 0 ? Math.max(0, length + isSorted) : isSorted);
      } else {
        i = _.sortedIndex(array, item);
        return array[i] === item ? i : -1;
      }
    }
    if (nativeIndexOf && array.indexOf === nativeIndexOf) return array.indexOf(item, isSorted);
    for (; i < length; i++) if (array[i] === item) return i;
    return -1;
  };

  // Delegates to **ECMAScript 5**'s native `lastIndexOf` if available.
  _.lastIndexOf = function(array, item, from) {
    if (array == null) return -1;
    var hasIndex = from != null;
    if (nativeLastIndexOf && array.lastIndexOf === nativeLastIndexOf) {
      return hasIndex ? array.lastIndexOf(item, from) : array.lastIndexOf(item);
    }
    var i = (hasIndex ? from : array.length);
    while (i--) if (array[i] === item) return i;
    return -1;
  };

  // Generate an integer Array containing an arithmetic progression. A port of
  // the native Python `range()` function. See
  // [the Python documentation](http://docs.python.org/library/functions.html#range).
  _.range = function(start, stop, step) {
    if (arguments.length <= 1) {
      stop = start || 0;
      start = 0;
    }
    step = arguments[2] || 1;

    var length = Math.max(Math.ceil((stop - start) / step), 0);
    var idx = 0;
    var range = new Array(length);

    while(idx < length) {
      range[idx++] = start;
      start += step;
    }

    return range;
  };

  // Function (ahem) Functions
  // ------------------

  // Reusable constructor function for prototype setting.
  var ctor = function(){};

  // Create a function bound to a given object (assigning `this`, and arguments,
  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
  // available.
  _.bind = function(func, context) {
    var args, bound;
    if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
    if (!_.isFunction(func)) throw new TypeError;
    args = slice.call(arguments, 2);
    return bound = function() {
      if (!(this instanceof bound)) return func.apply(context, args.concat(slice.call(arguments)));
      ctor.prototype = func.prototype;
      var self = new ctor;
      ctor.prototype = null;
      var result = func.apply(self, args.concat(slice.call(arguments)));
      if (Object(result) === result) return result;
      return self;
    };
  };

  // Partially apply a function by creating a version that has had some of its
  // arguments pre-filled, without changing its dynamic `this` context.
  _.partial = function(func) {
    var args = slice.call(arguments, 1);
    return function() {
      return func.apply(this, args.concat(slice.call(arguments)));
    };
  };

  // Bind all of an object's methods to that object. Useful for ensuring that
  // all callbacks defined on an object belong to it.
  _.bindAll = function(obj) {
    var funcs = slice.call(arguments, 1);
    if (funcs.length === 0) throw new Error("bindAll must be passed function names");
    each(funcs, function(f) { obj[f] = _.bind(obj[f], obj); });
    return obj;
  };

  // Memoize an expensive function by storing its results.
  _.memoize = function(func, hasher) {
    var memo = {};
    hasher || (hasher = _.identity);
    return function() {
      var key = hasher.apply(this, arguments);
      return _.has(memo, key) ? memo[key] : (memo[key] = func.apply(this, arguments));
    };
  };

  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  _.delay = function(func, wait) {
    var args = slice.call(arguments, 2);
    return setTimeout(function(){ return func.apply(null, args); }, wait);
  };

  // Defers a function, scheduling it to run after the current call stack has
  // cleared.
  _.defer = function(func) {
    return _.delay.apply(_, [func, 1].concat(slice.call(arguments, 1)));
  };

  // Returns a function, that, when invoked, will only be triggered at most once
  // during a given window of time. Normally, the throttled function will run
  // as much as it can, without ever going more than once per `wait` duration;
  // but if you'd like to disable the execution on the leading edge, pass
  // `{leading: false}`. To disable execution on the trailing edge, ditto.
  _.throttle = function(func, wait, options) {
    var context, args, result;
    var timeout = null;
    var previous = 0;
    options || (options = {});
    var later = function() {
      previous = options.leading === false ? 0 : new Date;
      timeout = null;
      result = func.apply(context, args);
    };
    return function() {
      var now = new Date;
      if (!previous && options.leading === false) previous = now;
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0) {
        clearTimeout(timeout);
        timeout = null;
        previous = now;
        result = func.apply(context, args);
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    };
  };

  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.
  _.debounce = function(func, wait, immediate) {
    var timeout, args, context, timestamp, result;
    return function() {
      context = this;
      args = arguments;
      timestamp = new Date();
      var later = function() {
        var last = (new Date()) - timestamp;
        if (last < wait) {
          timeout = setTimeout(later, wait - last);
        } else {
          timeout = null;
          if (!immediate) result = func.apply(context, args);
        }
      };
      var callNow = immediate && !timeout;
      if (!timeout) {
        timeout = setTimeout(later, wait);
      }
      if (callNow) result = func.apply(context, args);
      return result;
    };
  };

  // Returns a function that will be executed at most one time, no matter how
  // often you call it. Useful for lazy initialization.
  _.once = function(func) {
    var ran = false, memo;
    return function() {
      if (ran) return memo;
      ran = true;
      memo = func.apply(this, arguments);
      func = null;
      return memo;
    };
  };

  // Returns the first function passed as an argument to the second,
  // allowing you to adjust arguments, run code before and after, and
  // conditionally execute the original function.
  _.wrap = function(func, wrapper) {
    return function() {
      var args = [func];
      push.apply(args, arguments);
      return wrapper.apply(this, args);
    };
  };

  // Returns a function that is the composition of a list of functions, each
  // consuming the return value of the function that follows.
  _.compose = function() {
    var funcs = arguments;
    return function() {
      var args = arguments;
      for (var i = funcs.length - 1; i >= 0; i--) {
        args = [funcs[i].apply(this, args)];
      }
      return args[0];
    };
  };

  // Returns a function that will only be executed after being called N times.
  _.after = function(times, func) {
    return function() {
      if (--times < 1) {
        return func.apply(this, arguments);
      }
    };
  };

  // Object Functions
  // ----------------

  // Retrieve the names of an object's properties.
  // Delegates to **ECMAScript 5**'s native `Object.keys`
  _.keys = nativeKeys || function(obj) {
    if (obj !== Object(obj)) throw new TypeError('Invalid object');
    var keys = [];
    for (var key in obj) if (_.has(obj, key)) keys.push(key);
    return keys;
  };

  // Retrieve the values of an object's properties.
  _.values = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var values = new Array(length);
    for (var i = 0; i < length; i++) {
      values[i] = obj[keys[i]];
    }
    return values;
  };

  // Convert an object into a list of `[key, value]` pairs.
  _.pairs = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var pairs = new Array(length);
    for (var i = 0; i < length; i++) {
      pairs[i] = [keys[i], obj[keys[i]]];
    }
    return pairs;
  };

  // Invert the keys and values of an object. The values must be serializable.
  _.invert = function(obj) {
    var result = {};
    var keys = _.keys(obj);
    for (var i = 0, length = keys.length; i < length; i++) {
      result[obj[keys[i]]] = keys[i];
    }
    return result;
  };

  // Return a sorted list of the function names available on the object.
  // Aliased as `methods`
  _.functions = _.methods = function(obj) {
    var names = [];
    for (var key in obj) {
      if (_.isFunction(obj[key])) names.push(key);
    }
    return names.sort();
  };

  // Extend a given object with all the properties in passed-in object(s).
  _.extend = function(obj) {
    each(slice.call(arguments, 1), function(source) {
      if (source) {
        for (var prop in source) {
          obj[prop] = source[prop];
        }
      }
    });
    return obj;
  };

  // Return a copy of the object only containing the whitelisted properties.
  _.pick = function(obj) {
    var copy = {};
    var keys = concat.apply(ArrayProto, slice.call(arguments, 1));
    each(keys, function(key) {
      if (key in obj) copy[key] = obj[key];
    });
    return copy;
  };

   // Return a copy of the object without the blacklisted properties.
  _.omit = function(obj) {
    var copy = {};
    var keys = concat.apply(ArrayProto, slice.call(arguments, 1));
    for (var key in obj) {
      if (!_.contains(keys, key)) copy[key] = obj[key];
    }
    return copy;
  };

  // Fill in a given object with default properties.
  _.defaults = function(obj) {
    each(slice.call(arguments, 1), function(source) {
      if (source) {
        for (var prop in source) {
          if (obj[prop] === void 0) obj[prop] = source[prop];
        }
      }
    });
    return obj;
  };

  // Create a (shallow-cloned) duplicate of an object.
  _.clone = function(obj) {
    if (!_.isObject(obj)) return obj;
    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
  };

  // Invokes interceptor with the obj, and then returns obj.
  // The primary purpose of this method is to "tap into" a method chain, in
  // order to perform operations on intermediate results within the chain.
  _.tap = function(obj, interceptor) {
    interceptor(obj);
    return obj;
  };

  // Internal recursive comparison function for `isEqual`.
  var eq = function(a, b, aStack, bStack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
    if (a === b) return a !== 0 || 1 / a == 1 / b;
    // A strict comparison is necessary because `null == undefined`.
    if (a == null || b == null) return a === b;
    // Unwrap any wrapped objects.
    if (a instanceof _) a = a._wrapped;
    if (b instanceof _) b = b._wrapped;
    // Compare `[[Class]]` names.
    var className = toString.call(a);
    if (className != toString.call(b)) return false;
    switch (className) {
      // Strings, numbers, dates, and booleans are compared by value.
      case '[object String]':
        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
        // equivalent to `new String("5")`.
        return a == String(b);
      case '[object Number]':
        // `NaN`s are equivalent, but non-reflexive. An `egal` comparison is performed for
        // other numeric values.
        return a != +a ? b != +b : (a == 0 ? 1 / a == 1 / b : a == +b);
      case '[object Date]':
      case '[object Boolean]':
        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
        // millisecond representations. Note that invalid dates with millisecond representations
        // of `NaN` are not equivalent.
        return +a == +b;
      // RegExps are compared by their source patterns and flags.
      case '[object RegExp]':
        return a.source == b.source &&
               a.global == b.global &&
               a.multiline == b.multiline &&
               a.ignoreCase == b.ignoreCase;
    }
    if (typeof a != 'object' || typeof b != 'object') return false;
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
    var length = aStack.length;
    while (length--) {
      // Linear search. Performance is inversely proportional to the number of
      // unique nested structures.
      if (aStack[length] == a) return bStack[length] == b;
    }
    // Objects with different constructors are not equivalent, but `Object`s
    // from different frames are.
    var aCtor = a.constructor, bCtor = b.constructor;
    if (aCtor !== bCtor && !(_.isFunction(aCtor) && (aCtor instanceof aCtor) &&
                             _.isFunction(bCtor) && (bCtor instanceof bCtor))) {
      return false;
    }
    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);
    var size = 0, result = true;
    // Recursively compare objects and arrays.
    if (className == '[object Array]') {
      // Compare array lengths to determine if a deep comparison is necessary.
      size = a.length;
      result = size == b.length;
      if (result) {
        // Deep compare the contents, ignoring non-numeric properties.
        while (size--) {
          if (!(result = eq(a[size], b[size], aStack, bStack))) break;
        }
      }
    } else {
      // Deep compare objects.
      for (var key in a) {
        if (_.has(a, key)) {
          // Count the expected number of properties.
          size++;
          // Deep compare each member.
          if (!(result = _.has(b, key) && eq(a[key], b[key], aStack, bStack))) break;
        }
      }
      // Ensure that both objects contain the same number of properties.
      if (result) {
        for (key in b) {
          if (_.has(b, key) && !(size--)) break;
        }
        result = !size;
      }
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();
    return result;
  };

  // Perform a deep comparison to check if two objects are equal.
  _.isEqual = function(a, b) {
    return eq(a, b, [], []);
  };

  // Is a given array, string, or object empty?
  // An "empty" object has no enumerable own-properties.
  _.isEmpty = function(obj) {
    if (obj == null) return true;
    if (_.isArray(obj) || _.isString(obj)) return obj.length === 0;
    for (var key in obj) if (_.has(obj, key)) return false;
    return true;
  };

  // Is a given value a DOM element?
  _.isElement = function(obj) {
    return !!(obj && obj.nodeType === 1);
  };

  // Is a given value an array?
  // Delegates to ECMA5's native Array.isArray
  _.isArray = nativeIsArray || function(obj) {
    return toString.call(obj) == '[object Array]';
  };

  // Is a given variable an object?
  _.isObject = function(obj) {
    return obj === Object(obj);
  };

  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp.
  each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp'], function(name) {
    _['is' + name] = function(obj) {
      return toString.call(obj) == '[object ' + name + ']';
    };
  });

  // Define a fallback version of the method in browsers (ahem, IE), where
  // there isn't any inspectable "Arguments" type.
  if (!_.isArguments(arguments)) {
    _.isArguments = function(obj) {
      return !!(obj && _.has(obj, 'callee'));
    };
  }

  // Optimize `isFunction` if appropriate.
  if (typeof (/./) !== 'function') {
    _.isFunction = function(obj) {
      return typeof obj === 'function';
    };
  }

  // Is a given object a finite number?
  _.isFinite = function(obj) {
    return isFinite(obj) && !isNaN(parseFloat(obj));
  };

  // Is the given value `NaN`? (NaN is the only number which does not equal itself).
  _.isNaN = function(obj) {
    return _.isNumber(obj) && obj != +obj;
  };

  // Is a given value a boolean?
  _.isBoolean = function(obj) {
    return obj === true || obj === false || toString.call(obj) == '[object Boolean]';
  };

  // Is a given value equal to null?
  _.isNull = function(obj) {
    return obj === null;
  };

  // Is a given variable undefined?
  _.isUndefined = function(obj) {
    return obj === void 0;
  };

  // Shortcut function for checking if an object has a given property directly
  // on itself (in other words, not on a prototype).
  _.has = function(obj, key) {
    return hasOwnProperty.call(obj, key);
  };

  // Utility Functions
  // -----------------

  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
  // previous owner. Returns a reference to the Underscore object.
  _.noConflict = function() {
    root._ = previousUnderscore;
    return this;
  };

  // Keep the identity function around for default iterators.
  _.identity = function(value) {
    return value;
  };

  // Run a function **n** times.
  _.times = function(n, iterator, context) {
    var accum = Array(Math.max(0, n));
    for (var i = 0; i < n; i++) accum[i] = iterator.call(context, i);
    return accum;
  };

  // Return a random integer between min and max (inclusive).
  _.random = function(min, max) {
    if (max == null) {
      max = min;
      min = 0;
    }
    return min + Math.floor(Math.random() * (max - min + 1));
  };

  // List of HTML entities for escaping.
  var entityMap = {
    escape: {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#x27;'
    }
  };
  entityMap.unescape = _.invert(entityMap.escape);

  // Regexes containing the keys and values listed immediately above.
  var entityRegexes = {
    escape:   new RegExp('[' + _.keys(entityMap.escape).join('') + ']', 'g'),
    unescape: new RegExp('(' + _.keys(entityMap.unescape).join('|') + ')', 'g')
  };

  // Functions for escaping and unescaping strings to/from HTML interpolation.
  _.each(['escape', 'unescape'], function(method) {
    _[method] = function(string) {
      if (string == null) return '';
      return ('' + string).replace(entityRegexes[method], function(match) {
        return entityMap[method][match];
      });
    };
  });

  // If the value of the named `property` is a function then invoke it with the
  // `object` as context; otherwise, return it.
  _.result = function(object, property) {
    if (object == null) return void 0;
    var value = object[property];
    return _.isFunction(value) ? value.call(object) : value;
  };

  // Add your own custom functions to the Underscore object.
  _.mixin = function(obj) {
    each(_.functions(obj), function(name) {
      var func = _[name] = obj[name];
      _.prototype[name] = function() {
        var args = [this._wrapped];
        push.apply(args, arguments);
        return result.call(this, func.apply(_, args));
      };
    });
  };

  // Generate a unique integer id (unique within the entire client session).
  // Useful for temporary DOM ids.
  var idCounter = 0;
  _.uniqueId = function(prefix) {
    var id = ++idCounter + '';
    return prefix ? prefix + id : id;
  };

  // By default, Underscore uses ERB-style template delimiters, change the
  // following template settings to use alternative delimiters.
  _.templateSettings = {
    evaluate    : /<%([\s\S]+?)%>/g,
    interpolate : /<%=([\s\S]+?)%>/g,
    escape      : /<%-([\s\S]+?)%>/g
  };

  // When customizing `templateSettings`, if you don't want to define an
  // interpolation, evaluation or escaping regex, we need one that is
  // guaranteed not to match.
  var noMatch = /(.)^/;

  // Certain characters need to be escaped so that they can be put into a
  // string literal.
  var escapes = {
    "'":      "'",
    '\\':     '\\',
    '\r':     'r',
    '\n':     'n',
    '\t':     't',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };

  var escaper = /\\|'|\r|\n|\t|\u2028|\u2029/g;

  // JavaScript micro-templating, similar to John Resig's implementation.
  // Underscore templating handles arbitrary delimiters, preserves whitespace,
  // and correctly escapes quotes within interpolated code.
  _.template = function(text, data, settings) {
    var render;
    settings = _.defaults({}, settings, _.templateSettings);

    // Combine delimiters into one regular expression via alternation.
    var matcher = new RegExp([
      (settings.escape || noMatch).source,
      (settings.interpolate || noMatch).source,
      (settings.evaluate || noMatch).source
    ].join('|') + '|$', 'g');

    // Compile the template source, escaping string literals appropriately.
    var index = 0;
    var source = "__p+='";
    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
      source += text.slice(index, offset)
        .replace(escaper, function(match) { return '\\' + escapes[match]; });

      if (escape) {
        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
      }
      if (interpolate) {
        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
      }
      if (evaluate) {
        source += "';\n" + evaluate + "\n__p+='";
      }
      index = offset + match.length;
      return match;
    });
    source += "';\n";

    // If a variable is not specified, place data values in local scope.
    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

    source = "var __t,__p='',__j=Array.prototype.join," +
      "print=function(){__p+=__j.call(arguments,'');};\n" +
      source + "return __p;\n";

    try {
      render = new Function(settings.variable || 'obj', '_', source);
    } catch (e) {
      e.source = source;
      throw e;
    }

    if (data) return render(data, _);
    var template = function(data) {
      return render.call(this, data, _);
    };

    // Provide the compiled function source as a convenience for precompilation.
    template.source = 'function(' + (settings.variable || 'obj') + '){\n' + source + '}';

    return template;
  };

  // Add a "chain" function, which will delegate to the wrapper.
  _.chain = function(obj) {
    return _(obj).chain();
  };

  // OOP
  // ---------------
  // If Underscore is called as a function, it returns a wrapped object that
  // can be used OO-style. This wrapper holds altered versions of all the
  // underscore functions. Wrapped objects may be chained.

  // Helper function to continue chaining intermediate results.
  var result = function(obj) {
    return this._chain ? _(obj).chain() : obj;
  };

  // Add all of the Underscore functions to the wrapper object.
  _.mixin(_);

  // Add all mutator Array functions to the wrapper.
  each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      var obj = this._wrapped;
      method.apply(obj, arguments);
      if ((name == 'shift' || name == 'splice') && obj.length === 0) delete obj[0];
      return result.call(this, obj);
    };
  });

  // Add all accessor Array functions to the wrapper.
  each(['concat', 'join', 'slice'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      return result.call(this, method.apply(this._wrapped, arguments));
    };
  });

  _.extend(_.prototype, {

    // Start chaining a wrapped Underscore object.
    chain: function() {
      this._chain = true;
      return this;
    },

    // Extracts the result from a wrapped and chained object.
    value: function() {
      return this._wrapped;
    }

  });

}).call(this);

},{}],16:[function(require,module,exports){

(function() {

  // Baseline setup
  // --------------

  // Establish the root object, `window` in the browser, or `global` on the server.
  var root = this;

  // Save the previous value of the `humanize` variable.
  var previousHumanize = root.humanize;

  var humanize = {};

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = humanize;
    }
    exports.humanize = humanize;
  } else {
    if (typeof define === 'function' && define.amd) {
      define('humanize', function() {
        return humanize;
      });
    }
    root.humanize = humanize;
  }

  humanize.noConflict = function() {
    root.humanize = previousHumanize;
    return this;
  };

  humanize.pad = function(str, count, padChar, type) {
    str += '';
    if (!padChar) {
      padChar = ' ';
    } else if (padChar.length > 1) {
      padChar = padChar.charAt(0);
    }
    type = (type === undefined) ? 'left' : 'right';

    if (type === 'right') {
      while (str.length < count) {
        str = str + padChar;
      }
    } else {
      // default to left
      while (str.length < count) {
        str = padChar + str;
      }
    }

    return str;
  };

  // gets current unix time
  humanize.time = function() {
    return new Date().getTime() / 1000;
  };

  /**
   * PHP-inspired date
   */

                        /*  jan  feb  mar  apr  may  jun  jul  aug  sep  oct  nov  dec */
  var dayTableCommon = [ 0,   0,  31,  59,  90, 120, 151, 181, 212, 243, 273, 304, 334 ];
  var dayTableLeap   = [ 0,   0,  31,  60,  91, 121, 152, 182, 213, 244, 274, 305, 335 ];
  // var mtable_common[13] = {  0,  31,  28,  31,  30,  31,  30,  31,  31,  30,  31,  30,  31 };
  // static int ml_table_leap[13]   = {  0,  31,  29,  31,  30,  31,  30,  31,  31,  30,  31,  30,  31 };


  humanize.date = function(format, timestamp) {
    var jsdate = ((timestamp === undefined) ? new Date() : // Not provided
                  (timestamp instanceof Date) ? new Date(timestamp) : // JS Date()
                  new Date(timestamp * 1000) // UNIX timestamp (auto-convert to int)
                 );

    var formatChr = /\\?([a-z])/gi;
    var formatChrCb = function (t, s) {
      return f[t] ? f[t]() : s;
    };

    var shortDayTxt = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var monthTxt = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    var f = {
      /* Day */
      // Day of month w/leading 0; 01..31
      d: function () { return humanize.pad(f.j(), 2, '0'); },

      // Shorthand day name; Mon..Sun
      D: function () { return f.l().slice(0, 3); },

      // Day of month; 1..31
      j: function () { return jsdate.getDate(); },

      // Full day name; Monday..Sunday
      l: function () { return shortDayTxt[f.w()]; },

      // ISO-8601 day of week; 1[Mon]..7[Sun]
      N: function () { return f.w() || 7; },

      // Ordinal suffix for day of month; st, nd, rd, th
      S: function () {
        var j = f.j();
        return j > 4 && j < 21 ? 'th' : {1: 'st', 2: 'nd', 3: 'rd'}[j % 10] || 'th';
      },

      // Day of week; 0[Sun]..6[Sat]
      w: function () { return jsdate.getDay(); },

      // Day of year; 0..365
      z: function () {
        return (f.L() ? dayTableLeap[f.n()] : dayTableCommon[f.n()]) + f.j() - 1;
      },

      /* Week */
      // ISO-8601 week number
      W: function () {
        // days between midweek of this week and jan 4
        // (f.z() - f.N() + 1 + 3.5) - 3
        var midWeekDaysFromJan4 = f.z() - f.N() + 1.5;
        // 1 + number of weeks + rounded week
        return humanize.pad(1 + Math.floor(Math.abs(midWeekDaysFromJan4) / 7) + (midWeekDaysFromJan4 % 7 > 3.5 ? 1 : 0), 2, '0');
      },

      /* Month */
      // Full month name; January..December
      F: function () { return monthTxt[jsdate.getMonth()]; },

      // Month w/leading 0; 01..12
      m: function () { return humanize.pad(f.n(), 2, '0'); },

      // Shorthand month name; Jan..Dec
      M: function () { return f.F().slice(0, 3); },

      // Month; 1..12
      n: function () { return jsdate.getMonth() + 1; },

      // Days in month; 28..31
      t: function () { return (new Date(f.Y(), f.n(), 0)).getDate(); },

      /* Year */
      // Is leap year?; 0 or 1
      L: function () { return new Date(f.Y(), 1, 29).getMonth() === 1 ? 1 : 0; },

      // ISO-8601 year
      o: function () {
        var n = f.n();
        var W = f.W();
        return f.Y() + (n === 12 && W < 9 ? -1 : n === 1 && W > 9);
      },

      // Full year; e.g. 1980..2010
      Y: function () { return jsdate.getFullYear(); },

      // Last two digits of year; 00..99
      y: function () { return (String(f.Y())).slice(-2); },

      /* Time */
      // am or pm
      a: function () { return jsdate.getHours() > 11 ? 'pm' : 'am'; },

      // AM or PM
      A: function () { return f.a().toUpperCase(); },

      // Swatch Internet time; 000..999
      B: function () {
        var unixTime = jsdate.getTime() / 1000;
        var secondsPassedToday = unixTime % 86400 + 3600; // since it's based off of UTC+1
        if (secondsPassedToday < 0) { secondsPassedToday += 86400; }
        var beats = ((secondsPassedToday) / 86.4) % 1000;
        if (unixTime < 0) {
          return Math.ceil(beats);
        }
        return Math.floor(beats);
      },

      // 12-Hours; 1..12
      g: function () { return f.G() % 12 || 12; },

      // 24-Hours; 0..23
      G: function () { return jsdate.getHours(); },

      // 12-Hours w/leading 0; 01..12
      h: function () { return humanize.pad(f.g(), 2, '0'); },

      // 24-Hours w/leading 0; 00..23
      H: function () { return humanize.pad(f.G(), 2, '0'); },

      // Minutes w/leading 0; 00..59
      i: function () { return humanize.pad(jsdate.getMinutes(), 2, '0'); },

      // Seconds w/leading 0; 00..59
      s: function () { return humanize.pad(jsdate.getSeconds(), 2, '0'); },

      // Microseconds; 000000-999000
      u: function () { return humanize.pad(jsdate.getMilliseconds() * 1000, 6, '0'); },

      // Whether or not the date is in daylight savings time
      /*
      I: function () {
        // Compares Jan 1 minus Jan 1 UTC to Jul 1 minus Jul 1 UTC.
        // If they are not equal, then DST is observed.
        var Y = f.Y();
        return 0 + ((new Date(Y, 0) - Date.UTC(Y, 0)) !== (new Date(Y, 6) - Date.UTC(Y, 6)));
      },
      */

      // Difference to GMT in hour format; e.g. +0200
      O: function () {
        var tzo = jsdate.getTimezoneOffset();
        var tzoNum = Math.abs(tzo);
        return (tzo > 0 ? '-' : '+') + humanize.pad(Math.floor(tzoNum / 60) * 100 + tzoNum % 60, 4, '0');
      },

      // Difference to GMT w/colon; e.g. +02:00
      P: function () {
        var O = f.O();
        return (O.substr(0, 3) + ':' + O.substr(3, 2));
      },

      // Timezone offset in seconds (-43200..50400)
      Z: function () { return -jsdate.getTimezoneOffset() * 60; },

      // Full Date/Time, ISO-8601 date
      c: function () { return 'Y-m-d\\TH:i:sP'.replace(formatChr, formatChrCb); },

      // RFC 2822
      r: function () { return 'D, d M Y H:i:s O'.replace(formatChr, formatChrCb); },

      // Seconds since UNIX epoch
      U: function () { return jsdate.getTime() / 1000 || 0; }
    };    

    return format.replace(formatChr, formatChrCb);
  };


  /**
   * format number by adding thousands separaters and significant digits while rounding
   */
  humanize.numberFormat = function(number, decimals, decPoint, thousandsSep) {
    decimals = isNaN(decimals) ? 2 : Math.abs(decimals);
    decPoint = (decPoint === undefined) ? '.' : decPoint;
    thousandsSep = (thousandsSep === undefined) ? ',' : thousandsSep;

    var sign = number < 0 ? '-' : '';
    number = Math.abs(+number || 0);

    var intPart = parseInt(number.toFixed(decimals), 10) + '';
    var j = intPart.length > 3 ? intPart.length % 3 : 0;

    return sign + (j ? intPart.substr(0, j) + thousandsSep : '') + intPart.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + thousandsSep) + (decimals ? decPoint + Math.abs(number - intPart).toFixed(decimals).slice(2) : '');
  };


  /**
   * For dates that are the current day or within one day, return 'today', 'tomorrow' or 'yesterday', as appropriate.
   * Otherwise, format the date using the passed in format string.
   *
   * Examples (when 'today' is 17 Feb 2007):
   * 16 Feb 2007 becomes yesterday.
   * 17 Feb 2007 becomes today.
   * 18 Feb 2007 becomes tomorrow.
   * Any other day is formatted according to given argument or the DATE_FORMAT setting if no argument is given.
   */
  humanize.naturalDay = function(timestamp, format) {
    timestamp = (timestamp === undefined) ? humanize.time() : timestamp;
    format = (format === undefined) ? 'Y-m-d' : format;

    var oneDay = 86400;
    var d = new Date();
    var today = (new Date(d.getFullYear(), d.getMonth(), d.getDate())).getTime() / 1000;

    if (timestamp < today && timestamp >= today - oneDay) {
      return 'yesterday';
    } else if (timestamp >= today && timestamp < today + oneDay) {
      return 'today';
    } else if (timestamp >= today + oneDay && timestamp < today + 2 * oneDay) {
      return 'tomorrow';
    }

    return humanize.date(format, timestamp);
  };

  /**
   * returns a string representing how many seconds, minutes or hours ago it was or will be in the future
   * Will always return a relative time, most granular of seconds to least granular of years. See unit tests for more details
   */
  humanize.relativeTime = function(timestamp) {
    timestamp = (timestamp === undefined) ? humanize.time() : timestamp;

    var currTime = humanize.time();
    var timeDiff = currTime - timestamp;

    // within 2 seconds
    if (timeDiff < 2 && timeDiff > -2) {
      return (timeDiff >= 0 ? 'just ' : '') + 'now';
    }

    // within a minute
    if (timeDiff < 60 && timeDiff > -60) {
      return (timeDiff >= 0 ? Math.floor(timeDiff) + ' seconds ago' : 'in ' + Math.floor(-timeDiff) + ' seconds');
    }

    // within 2 minutes
    if (timeDiff < 120 && timeDiff > -120) {
      return (timeDiff >= 0 ? 'about a minute ago' : 'in about a minute');
    }

    // within an hour
    if (timeDiff < 3600 && timeDiff > -3600) {
      return (timeDiff >= 0 ? Math.floor(timeDiff / 60) + ' minutes ago' : 'in ' + Math.floor(-timeDiff / 60) + ' minutes');
    }

    // within 2 hours
    if (timeDiff < 7200 && timeDiff > -7200) {
      return (timeDiff >= 0 ? 'about an hour ago' : 'in about an hour');
    }

    // within 24 hours
    if (timeDiff < 86400 && timeDiff > -86400) {
      return (timeDiff >= 0 ? Math.floor(timeDiff / 3600) + ' hours ago' : 'in ' + Math.floor(-timeDiff / 3600) + ' hours');
    }

    // within 2 days
    var days2 = 2 * 86400;
    if (timeDiff < days2 && timeDiff > -days2) {
      return (timeDiff >= 0 ? '1 day ago' : 'in 1 day');
    }

    // within 29 days
    var days29 = 29 * 86400;
    if (timeDiff < days29 && timeDiff > -days29) {
      return (timeDiff >= 0 ? Math.floor(timeDiff / 86400) + ' days ago' : 'in ' + Math.floor(-timeDiff / 86400) + ' days');
    }

    // within 60 days
    var days60 = 60 * 86400;
    if (timeDiff < days60 && timeDiff > -days60) {
      return (timeDiff >= 0 ? 'about a month ago' : 'in about a month');
    }

    var currTimeYears = parseInt(humanize.date('Y', currTime), 10);
    var timestampYears = parseInt(humanize.date('Y', timestamp), 10);
    var currTimeMonths = currTimeYears * 12 + parseInt(humanize.date('n', currTime), 10);
    var timestampMonths = timestampYears * 12 + parseInt(humanize.date('n', timestamp), 10);

    // within a year
    var monthDiff = currTimeMonths - timestampMonths;
    if (monthDiff < 12 && monthDiff > -12) {
      return (monthDiff >= 0 ? monthDiff + ' months ago' : 'in ' + (-monthDiff) + ' months');
    }

    var yearDiff = currTimeYears - timestampYears;
    if (yearDiff < 2 && yearDiff > -2) {
      return (yearDiff >= 0 ? 'a year ago' : 'in a year');
    }

    return (yearDiff >= 0 ? yearDiff + ' years ago' : 'in ' + (-yearDiff) + ' years');
  };

  /**
   * Converts an integer to its ordinal as a string.
   *
   * 1 becomes 1st
   * 2 becomes 2nd
   * 3 becomes 3rd etc
   */
  humanize.ordinal = function(number) {
    number = parseInt(number, 10);
    number = isNaN(number) ? 0 : number;
    var sign = number < 0 ? '-' : '';
    number = Math.abs(number);
    var tens = number % 100;

    return sign + number + (tens > 4 && tens < 21 ? 'th' : {1: 'st', 2: 'nd', 3: 'rd'}[number % 10] || 'th');
  };

  /**
   * Formats the value like a 'human-readable' file size (i.e. '13 KB', '4.1 MB', '102 bytes', etc).
   *
   * For example:
   * If value is 123456789, the output would be 117.7 MB.
   */
  humanize.filesize = function(filesize, kilo, decimals, decPoint, thousandsSep, suffixSep) {
    kilo = (kilo === undefined) ? 1024 : kilo;
    if (filesize <= 0) { return '0 bytes'; }
    if (filesize < kilo && decimals === undefined) { decimals = 0; }
    if (suffixSep === undefined) { suffixSep = ' '; }
    return humanize.intword(filesize, ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB'], kilo, decimals, decPoint, thousandsSep, suffixSep);
  };

  /**
   * Formats the value like a 'human-readable' number (i.e. '13 K', '4.1 M', '102', etc).
   *
   * For example:
   * If value is 123456789, the output would be 117.7 M.
   */
  humanize.intword = function(number, units, kilo, decimals, decPoint, thousandsSep, suffixSep) {
    var humanized, unit;

    units = units || ['', 'K', 'M', 'B', 'T'],
    unit = units.length - 1,
    kilo = kilo || 1000,
    decimals = isNaN(decimals) ? 2 : Math.abs(decimals),
    decPoint = decPoint || '.',
    thousandsSep = thousandsSep || ',',
    suffixSep = suffixSep || '';

    for (var i=0; i < units.length; i++) {
      if (number < Math.pow(kilo, i+1)) {
        unit = i;
        break;
      }
    }
    humanized = number / Math.pow(kilo, unit);

    var suffix = units[unit] ? suffixSep + units[unit] : '';
    return humanize.numberFormat(humanized, decimals, decPoint, thousandsSep) + suffix;
  };

  /**
   * Replaces line breaks in plain text with appropriate HTML
   * A single newline becomes an HTML line break (<br />) and a new line followed by a blank line becomes a paragraph break (</p>).
   * 
   * For example:
   * If value is Joel\nis a\n\nslug, the output will be <p>Joel<br />is a</p><p>slug</p>
   */
  humanize.linebreaks = function(str) {
    // remove beginning and ending newlines
    str = str.replace(/^([\n|\r]*)/, '');
    str = str.replace(/([\n|\r]*)$/, '');

    // normalize all to \n
    str = str.replace(/(\r\n|\n|\r)/g, "\n");

    // any consecutive new lines more than 2 gets turned into p tags
    str = str.replace(/(\n{2,})/g, '</p><p>');

    // any that are singletons get turned into br
    str = str.replace(/\n/g, '<br />');
    return '<p>' + str + '</p>';
  };

  /**
   * Converts all newlines in a piece of plain text to HTML line breaks (<br />).
   */
  humanize.nl2br = function(str) {
    return str.replace(/(\r\n|\n|\r)/g, '<br />');
  };

  /**
   * Truncates a string if it is longer than the specified number of characters.
   * Truncated strings will end with a translatable ellipsis sequence ('…').
   */
  humanize.truncatechars = function(string, length) {
    if (string.length <= length) { return string; }
    return string.substr(0, length) + '…';
  };

  /**
   * Truncates a string after a certain number of words.
   * Newlines within the string will be removed.
   */
  humanize.truncatewords = function(string, numWords) {
    var words = string.split(' ');
    if (words.length < numWords) { return string; }
    return words.slice(0, numWords).join(' ') + '…';
  };

}).call(this);

},{}],17:[function(require,module,exports){
(function (process){
/**
 * @author  John Resig <jeresig@gmail.com>
 * @author  Originally by Marcus Spiegel <marcus.spiegel@gmail.com>
 * @link    https://github.com/jeresig/i18n-node
 * @license http://opensource.org/licenses/MIT
 *
 * @version 0.4.7
 */

// dependencies
var vsprintf = require("sprintf").vsprintf,
		fs = require("fs"),
		path = require("path");


function dotNotation (obj, is, value) {
	if (obj.hasOwnProperty(is)) {
		return obj[is];
	}

	if (typeof is === 'string') {
		return dotNotation(obj, is.split('.'), value);
	} else if (is.length === 1 && value !== undefined) {
		return obj[is[0]] = value;
	} else if (is.length === 0) {
		return obj;
	} else {
		if (obj.hasOwnProperty(is[0])) {
			return dotNotation(obj[is[0]], is.slice(1), value);
		} else {
			return obj[is.join('.')] = is.join('.');
		}
	}
}

var i18n = module.exports = function (opt) {
	var self = this;

	// Put into dev or production mode
	this.devMode = process.env.NODE_ENV !== "production";

	// Copy over options
	for (var prop in opt) {
		this[prop] = opt[prop];
	}

	// you may register helpers in global scope, up to you
	if (typeof this.register === "object") {
		i18n.resMethods.forEach(function (method) {
			self.register[method] = self[method].bind(self);
		});
	}

	// implicitly read all locales
	// if it's an array of locale names, read in the data
	if (opt.locales && opt.locales.forEach) {
		this.locales = {};

		opt.locales.forEach(function (locale) {
			self.readFile(locale);
		});

		this.defaultLocale = opt.locales[0];
	}

	// Set the locale to the default locale
	this.setLocale(this.defaultLocale);

	// Check the defaultLocale
	if (!this.locales[this.defaultLocale]) {
		console.error("Not a valid default locale.");
	}

	if (this.request) {
		if (this.subdomain) {
			this.setLocaleFromSubdomain(this.request);
		}

		if (this.query !== false) {
			this.setLocaleFromQuery(this.request);
		}

		if (this.session !== false) {
			this.setLocaleFromSessionVar(this.request);
		}

		this.prefLocale = this.preferredLocale();

		if (this.prefLocale !== false && this.prefLocale !== this.locale) {
			this.setLocale(this.prefLocale);
		}
	}
};

i18n.version = "0.4.7";

i18n.localeCache = {};
i18n.resMethods = ["__", "__n", "getLocale", "isPreferredLocale"];

i18n.expressBind = function (app, opt) {
	if (!app) {
		return;
	}

	app.use(function (req, res, next) {
		opt.request = req;
		req.i18n = new i18n(opt);

		// Express 3
		if (res.locals) {
			i18n.registerMethods(res.locals, req)
		}

		next();
	});

	// Express 2
	if (app.dynamicHelpers) {
		app.dynamicHelpers(i18n.registerMethods({}));
	}
};

i18n.registerMethods = function (helpers, req) {
	i18n.resMethods.forEach(function (method) {
		if (req) {
			helpers[method] = req.i18n[method].bind(req.i18n);
		} else {
			helpers[method] = function (req) {
				return req.i18n[method].bind(req.i18n);
			};
		}

	});

	return helpers;
};

i18n.prototype = {
	defaultLocale: "en",
	extension: ".js",
	directory: "./locales",
	cookieName: "lang",
	sessionVarName: "locale",
	indent: "\t",

	parse: JSON.parse,

	dump: function (data, indent) {
	  return JSON.stringify(data, null, indent);
	},

	__: function () {
		var msg = this.translate(this.locale, arguments[0]);

		if (arguments.length > 1) {
			msg = vsprintf(msg, Array.prototype.slice.call(arguments, 1));
		}

		return msg;
	},

	__n: function (pathOrSingular, countOrPlural, additionalOrCount) {
		var msg;
		if (typeof countOrPlural === 'number') {
			var path = pathOrSingular;
			var count = countOrPlural;
			msg = this.translate(this.locale, path);

			msg = vsprintf(parseInt(count, 10) > 1 ? msg.other : msg.one, Array.prototype.slice.call(arguments, 1));
		} else {
			var singular = pathOrSingular;
			var plural = countOrPlural;
			var count = additionalOrCount;
			msg = this.translate(this.locale, singular, plural);

			msg = vsprintf(parseInt(count, 10) > 1 ? msg.other : msg.one, [count]);

			if (arguments.length > 3) {
				msg = vsprintf(msg, Array.prototype.slice.call(arguments, 3));
			}
		}

		return msg;
	},

	setLocale: function (locale) {

		if (!locale) return;

		if (!this.locales[locale]) {
			if (this.devMode) {
				console.warn("Locale (" + locale + ") not found.");
			}

			locale = this.defaultLocale;
		}

		return (this.locale = locale);
	},

	getLocale: function () {
		return this.locale;
	},

	isPreferredLocale: function () {
		return !this.prefLocale ||
				this.prefLocale === this.getLocale();
	},

	setLocaleFromSessionVar: function (req) {
		req = req || this.request;

		if (!req || !req.session || !req.session[this.sessionVarName]) {		
			return;
		}

		var locale = req.session[this.sessionVarName];

		if (this.locales[locale]) {
			if (this.devMode) {
				console.log("Overriding locale from query: " + locale);
			}
			this.setLocale(locale);
		}

	},

	setLocaleFromQuery: function (req) {
		req = req || this.request;

		if (!req || !req.query || !req.query.lang) {
			return;
		}

		var locale = (req.query.lang+'').toLowerCase();

		if (this.locales[locale]) {
			if (this.devMode) {
				console.log("Overriding locale from query: " + locale);
			}

			this.setLocale(locale);
		}
	},

	setLocaleFromSubdomain: function (req) {
		req = req || this.request;

		if (!req || !req.headers || !req.headers.host) {
			return;
		}

		if (/^([^.]+)/.test(req.headers.host) && this.locales[RegExp.$1]) {
			if (this.devMode) {
				console.log("Overriding locale from host: " + RegExp.$1);
			}

			this.setLocale(RegExp.$1);
		}
	},

	setLocaleFromCookie: function (req) {
		req = req || this.request;

		if (!req || !req.cookies || !this.cookieName || !req.cookies[this.cookieName]) {
			return;
		}

		var locale = req.cookies[this.cookieName].toLowerCase();

		if (this.locales[locale]) {
			if (this.devMode) {
				console.log("Overriding locale from cookie: " + locale);
			}

			this.setLocale(locale);
		}
	},

	setLocaleFromEnvironmentVariable: function () {
		if (!process.env.LANG) {
			return;
		}
		var locale = process.env.LANG.split("_")[0];
		if (this.locales[locale]) {
			if (this.devMode) {
				console.log("Overriding locale from environment variable: " + locale);
			}

			this.setLocale(locale);
		}
	},

	preferredLocale: function (req) {
		req = req || this.request;

		if (!req || !req.headers) {
			return;
		}

		var accept = req.headers["accept-language"] || "",
				regExp = /(^|,\s*)([a-z0-9-]+)/gi,
				self = this,
				prefLocale;

		while (!prefLocale && (match = regExp.exec(accept))) {
			var locale = match[2].toLowerCase();
			var parts = locale.split("-");

			if (self.locales[locale]) {
				prefLocale = locale;
			} else if (parts.length > 1 && self.locales[parts[0]]) {
				prefLocale = parts[0];
			}
		}

		return prefLocale || this.defaultLocale;
	},

	// read locale file, translate a msg and write to fs if new
	translate: function (locale, singular, plural) {
		if (!locale || !this.locales[locale]) {
			if (this.devMode) {
				console.warn("WARN: No locale found. Using the default (" +
						this.defaultLocale + ") as current locale");
			}

			locale = this.defaultLocale;

			this.initLocale(locale, {});
		}

		if (!this.locales[locale][singular]) {
			if (this.devMode) {
				dotNotation(this.locales[locale], singular, plural ? { one: singular, other: plural } : undefined);
				this.writeFile(locale);
			}
		}

		return dotNotation(this.locales[locale], singular, plural ? { one: singular, other: plural } : undefined);
	},

	// try reading a file
	readFile: function (locale) {
		var file = this.locateFile(locale);

		if (!this.devMode && i18n.localeCache[file]) {
			this.initLocale(locale, i18n.localeCache[file]);
			return;
		}

		try {
			var localeFile = fs.readFileSync(file);
			var base;

			// reading base file if 'base' provided
			if (typeof this.base === "function") {
				var baseFilename;

				try {
					baseFilename = this.base(locale);
				} catch (e) {
					console.error('base function threw exception for locale %s', locale, e);
				}

				if (typeof baseFilename === "string") {
					try {
						base = this.parse(fs.readFileSync(this.locateFile(baseFilename)));
					} catch (e) {
						console.error('unable to read or parse base file %s for locale %s', baseFilename, locale, e);
					}
				}
			}

			try {
				// parsing file content
				var content = this.parse(localeFile);

				if (base) {
					// writing content to the base and swapping
					for (var prop in content) {
						base[prop] = content[prop];
					}
					content = base;
				}

				// putting content to locales[locale]
				this.initLocale(locale, content);
			} catch (e) {
				console.error('unable to parse locales from file (maybe ' + file +
						' is empty or invalid ' + this.extension + '?): ', e);
			}

		} catch (e) {
			// unable to read, so intialize that file
			// locales[locale] are already set in memory, so no extra read required
			// or locales[locale] are empty, which initializes an empty locale.json file
			if (!fs.existsSync(file)) {
				this.writeFile(locale);
			}
		}
	},

	// try writing a file in a created directory
	writeFile: function (locale) {
		// don't write new locale information to disk if we're not in dev mode
		if (!this.devMode) {
			// Initialize the locale if didn't exist already
			this.initLocale(locale, {});
			return;
		}

		// creating directory if necessary
		try {
			fs.lstatSync(this.directory);

		} catch (e) {
			if (this.devMode) {
				console.log('creating locales dir in: ' + this.directory);
			}

			fs.mkdirSync(this.directory, 0755);
		}

		// Initialize the locale if didn't exist already
		this.initLocale(locale, {});

		// writing to tmp and rename on success
		try {
			var target = this.locateFile(locale),
					tmp = target + ".tmp";

			fs.writeFileSync(tmp,
							 this.dump(this.locales[locale], this.indent),
							 "utf8");

			if (fs.statSync(tmp).isFile()) {
				fs.renameSync(tmp, target);

			} else {
				console.error('unable to write locales to file (either ' + tmp +
						' or ' + target + ' are not writeable?): ');
			}

		} catch (e) {
			console.error('unexpected error writing files (either ' + tmp +
					' or ' + target + ' are not writeable?): ', e);
		}
	},

	// basic normalization of filepath
	locateFile: function (locale) {
		return path.normalize(this.directory + '/' + locale + this.extension);
	},

	initLocale: function (locale, data) {
		if (!this.locales[locale]) {
			this.locales[locale] = data;

			// Only cache the files when we're not in dev mode
			if (!this.devMode) {
				var file = this.locateFile(locale);
				if (!i18n.localeCache[file]) {
					i18n.localeCache[file] = data;
				}
			}
		}
	}
};

}).call(this,require('_process'))
},{"_process":20,"fs":1,"path":19,"sprintf":21}],18:[function(require,module,exports){
module.exports = require('./i18n');

},{"./i18n":17}],19:[function(require,module,exports){
(function (process){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe =
    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
var splitPath = function(filename) {
  return splitPathRe.exec(filename).slice(1);
};

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function(path) {
  var result = splitPath(path),
      root = result[0],
      dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
};


exports.basename = function(path, ext) {
  var f = splitPath(path)[2];
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};


exports.extname = function(path) {
  return splitPath(path)[3];
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

}).call(this,require('_process'))
},{"_process":20}],20:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],21:[function(require,module,exports){
/**
sprintf() for JavaScript 0.7-beta1
http://www.diveintojavascript.com/projects/javascript-sprintf

Copyright (c) Alexandru Marasteanu <alexaholic [at) gmail (dot] com>
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:
    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above copyright
      notice, this list of conditions and the following disclaimer in the
      documentation and/or other materials provided with the distribution.
    * Neither the name of sprintf() for JavaScript nor the
      names of its contributors may be used to endorse or promote products
      derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL Alexandru Marasteanu BE LIABLE FOR ANY
DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.


Changelog:
2010.11.07 - 0.7-beta1-node
  - converted it to a node.js compatible module

2010.09.06 - 0.7-beta1
  - features: vsprintf, support for named placeholders
  - enhancements: format cache, reduced global namespace pollution

2010.05.22 - 0.6:
 - reverted to 0.4 and fixed the bug regarding the sign of the number 0
 Note:
 Thanks to Raphael Pigulla <raph (at] n3rd [dot) org> (http://www.n3rd.org/)
 who warned me about a bug in 0.5, I discovered that the last update was
 a regress. I appologize for that.

2010.05.09 - 0.5:
 - bug fix: 0 is now preceeded with a + sign
 - bug fix: the sign was not at the right position on padded results (Kamal Abdali)
 - switched from GPL to BSD license

2007.10.21 - 0.4:
 - unit test and patch (David Baird)

2007.09.17 - 0.3:
 - bug fix: no longer throws exception on empty paramenters (Hans Pufal)

2007.09.11 - 0.2:
 - feature: added argument swapping

2007.04.03 - 0.1:
 - initial release
**/

var sprintf = (function() {
	function get_type(variable) {
		return Object.prototype.toString.call(variable).slice(8, -1).toLowerCase();
	}
	function str_repeat(input, multiplier) {
		for (var output = []; multiplier > 0; output[--multiplier] = input) {/* do nothing */}
		return output.join('');
	}

	var str_format = function() {
		if (!str_format.cache.hasOwnProperty(arguments[0])) {
			str_format.cache[arguments[0]] = str_format.parse(arguments[0]);
		}
		return str_format.format.call(null, str_format.cache[arguments[0]], arguments);
	};

	// convert object to simple one line string without indentation or
	// newlines. Note that this implementation does not print array
	// values to their actual place for sparse arrays. 
	//
	// For example sparse array like this
	//    l = []
	//    l[4] = 1
	// Would be printed as "[1]" instead of "[, , , , 1]"
	// 
	// If argument 'seen' is not null and array the function will check for 
	// circular object references from argument.
	str_format.object_stringify = function(obj, depth, maxdepth, seen) {
		var str = '';
		if (obj != null) {
			switch( typeof(obj) ) {
			case 'function': 
				return '[Function' + (obj.name ? ': '+obj.name : '') + ']';
			    break;
			case 'object':
				if ( obj instanceof Error) { return '[' + obj.toString() + ']' };
				if (depth >= maxdepth) return '[Object]'
				if (seen) {
					// add object to seen list
					seen = seen.slice(0)
					seen.push(obj);
				}
				if (obj.length != null) { //array
					str += '[';
					var arr = []
					for (var i in obj) {
						if (seen && seen.indexOf(obj[i]) >= 0) arr.push('[Circular]');
						else arr.push(str_format.object_stringify(obj[i], depth+1, maxdepth, seen));
					}
					str += arr.join(', ') + ']';
				} else if ('getMonth' in obj) { // date
					return 'Date(' + obj + ')';
				} else { // object
					str += '{';
					var arr = []
					for (var k in obj) { 
						if(obj.hasOwnProperty(k)) {
							if (seen && seen.indexOf(obj[k]) >= 0) arr.push(k + ': [Circular]');
							else arr.push(k +': ' +str_format.object_stringify(obj[k], depth+1, maxdepth, seen)); 
						}
					}
					str += arr.join(', ') + '}';
				}
				return str;
				break;
			case 'string':				
				return '"' + obj + '"';
				break
			}
		}
		return '' + obj;
	}

	str_format.format = function(parse_tree, argv) {
		var cursor = 1, tree_length = parse_tree.length, node_type = '', arg, output = [], i, k, match, pad, pad_character, pad_length;
		for (i = 0; i < tree_length; i++) {
			node_type = get_type(parse_tree[i]);
			if (node_type === 'string') {
				output.push(parse_tree[i]);
			}
			else if (node_type === 'array') {
				match = parse_tree[i]; // convenience purposes only
				if (match[2]) { // keyword argument
					arg = argv[cursor];
					for (k = 0; k < match[2].length; k++) {
						if (!arg.hasOwnProperty(match[2][k])) {
							throw new Error(sprintf('[sprintf] property "%s" does not exist', match[2][k]));
						}
						arg = arg[match[2][k]];
					}
				}
				else if (match[1]) { // positional argument (explicit)
					arg = argv[match[1]];
				}
				else { // positional argument (implicit)
					arg = argv[cursor++];
				}

				if (/[^sO]/.test(match[8]) && (get_type(arg) != 'number')) {
					throw new Error(sprintf('[sprintf] expecting number but found %s "' + arg + '"', get_type(arg)));
				}
				switch (match[8]) {
					case 'b': arg = arg.toString(2); break;
					case 'c': arg = String.fromCharCode(arg); break;
					case 'd': arg = parseInt(arg, 10); break;
					case 'e': arg = match[7] ? arg.toExponential(match[7]) : arg.toExponential(); break;
					case 'f': arg = match[7] ? parseFloat(arg).toFixed(match[7]) : parseFloat(arg); break;
				    case 'O': arg = str_format.object_stringify(arg, 0, parseInt(match[7]) || 5); break;
					case 'o': arg = arg.toString(8); break;
					case 's': arg = ((arg = String(arg)) && match[7] ? arg.substring(0, match[7]) : arg); break;
					case 'u': arg = Math.abs(arg); break;
					case 'x': arg = arg.toString(16); break;
					case 'X': arg = arg.toString(16).toUpperCase(); break;
				}
				arg = (/[def]/.test(match[8]) && match[3] && arg >= 0 ? '+'+ arg : arg);
				pad_character = match[4] ? match[4] == '0' ? '0' : match[4].charAt(1) : ' ';
				pad_length = match[6] - String(arg).length;
				pad = match[6] ? str_repeat(pad_character, pad_length) : '';
				output.push(match[5] ? arg + pad : pad + arg);
			}
		}
		return output.join('');
	};

	str_format.cache = {};

	str_format.parse = function(fmt) {
		var _fmt = fmt, match = [], parse_tree = [], arg_names = 0;
		while (_fmt) {
			if ((match = /^[^\x25]+/.exec(_fmt)) !== null) {
				parse_tree.push(match[0]);
			}
			else if ((match = /^\x25{2}/.exec(_fmt)) !== null) {
				parse_tree.push('%');
			}
			else if ((match = /^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosOuxX])/.exec(_fmt)) !== null) {
				if (match[2]) {
					arg_names |= 1;
					var field_list = [], replacement_field = match[2], field_match = [];
					if ((field_match = /^([a-z_][a-z_\d]*)/i.exec(replacement_field)) !== null) {
						field_list.push(field_match[1]);
						while ((replacement_field = replacement_field.substring(field_match[0].length)) !== '') {
							if ((field_match = /^\.([a-z_][a-z_\d]*)/i.exec(replacement_field)) !== null) {
								field_list.push(field_match[1]);
							}
							else if ((field_match = /^\[(\d+)\]/.exec(replacement_field)) !== null) {
								field_list.push(field_match[1]);
							}
							else {
								throw new Error('[sprintf] ' + replacement_field);
							}
						}
					}
					else {
                        throw new Error('[sprintf] ' + replacement_field);
					}
					match[2] = field_list;
				}
				else {
					arg_names |= 2;
				}
				if (arg_names === 3) {
					throw new Error('[sprintf] mixing positional and named placeholders is not (yet) supported');
				}
				parse_tree.push(match);
			}
			else {
				throw new Error('[sprintf] ' + _fmt);
			}
			_fmt = _fmt.substring(match[0].length);
		}
		return parse_tree;
	};

	return str_format;
})();

var vsprintf = function(fmt, argv) {
	var argvClone = argv.slice();
	argvClone.unshift(fmt);
	return sprintf.apply(null, argvClone);
};

module.exports = sprintf;
sprintf.sprintf = sprintf;
sprintf.vsprintf = vsprintf;

},{}],22:[function(require,module,exports){
//     Underscore.js 1.8.3
//     http://underscorejs.org
//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.

(function() {

  // Baseline setup
  // --------------

  // Establish the root object, `window` in the browser, or `exports` on the server.
  var root = this;

  // Save the previous value of the `_` variable.
  var previousUnderscore = root._;

  // Save bytes in the minified (but not gzipped) version:
  var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

  // Create quick reference variables for speed access to core prototypes.
  var
    push             = ArrayProto.push,
    slice            = ArrayProto.slice,
    toString         = ObjProto.toString,
    hasOwnProperty   = ObjProto.hasOwnProperty;

  // All **ECMAScript 5** native function implementations that we hope to use
  // are declared here.
  var
    nativeIsArray      = Array.isArray,
    nativeKeys         = Object.keys,
    nativeBind         = FuncProto.bind,
    nativeCreate       = Object.create;

  // Naked function reference for surrogate-prototype-swapping.
  var Ctor = function(){};

  // Create a safe reference to the Underscore object for use below.
  var _ = function(obj) {
    if (obj instanceof _) return obj;
    if (!(this instanceof _)) return new _(obj);
    this._wrapped = obj;
  };

  // Export the Underscore object for **Node.js**, with
  // backwards-compatibility for the old `require()` API. If we're in
  // the browser, add `_` as a global object.
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = _;
    }
    exports._ = _;
  } else {
    root._ = _;
  }

  // Current version.
  _.VERSION = '1.8.3';

  // Internal function that returns an efficient (for current engines) version
  // of the passed-in callback, to be repeatedly applied in other Underscore
  // functions.
  var optimizeCb = function(func, context, argCount) {
    if (context === void 0) return func;
    switch (argCount == null ? 3 : argCount) {
      case 1: return function(value) {
        return func.call(context, value);
      };
      case 2: return function(value, other) {
        return func.call(context, value, other);
      };
      case 3: return function(value, index, collection) {
        return func.call(context, value, index, collection);
      };
      case 4: return function(accumulator, value, index, collection) {
        return func.call(context, accumulator, value, index, collection);
      };
    }
    return function() {
      return func.apply(context, arguments);
    };
  };

  // A mostly-internal function to generate callbacks that can be applied
  // to each element in a collection, returning the desired result — either
  // identity, an arbitrary callback, a property matcher, or a property accessor.
  var cb = function(value, context, argCount) {
    if (value == null) return _.identity;
    if (_.isFunction(value)) return optimizeCb(value, context, argCount);
    if (_.isObject(value)) return _.matcher(value);
    return _.property(value);
  };
  _.iteratee = function(value, context) {
    return cb(value, context, Infinity);
  };

  // An internal function for creating assigner functions.
  var createAssigner = function(keysFunc, undefinedOnly) {
    return function(obj) {
      var length = arguments.length;
      if (length < 2 || obj == null) return obj;
      for (var index = 1; index < length; index++) {
        var source = arguments[index],
            keys = keysFunc(source),
            l = keys.length;
        for (var i = 0; i < l; i++) {
          var key = keys[i];
          if (!undefinedOnly || obj[key] === void 0) obj[key] = source[key];
        }
      }
      return obj;
    };
  };

  // An internal function for creating a new object that inherits from another.
  var baseCreate = function(prototype) {
    if (!_.isObject(prototype)) return {};
    if (nativeCreate) return nativeCreate(prototype);
    Ctor.prototype = prototype;
    var result = new Ctor;
    Ctor.prototype = null;
    return result;
  };

  var property = function(key) {
    return function(obj) {
      return obj == null ? void 0 : obj[key];
    };
  };

  // Helper for collection methods to determine whether a collection
  // should be iterated as an array or as an object
  // Related: http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
  // Avoids a very nasty iOS 8 JIT bug on ARM-64. #2094
  var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
  var getLength = property('length');
  var isArrayLike = function(collection) {
    var length = getLength(collection);
    return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
  };

  // Collection Functions
  // --------------------

  // The cornerstone, an `each` implementation, aka `forEach`.
  // Handles raw objects in addition to array-likes. Treats all
  // sparse array-likes as if they were dense.
  _.each = _.forEach = function(obj, iteratee, context) {
    iteratee = optimizeCb(iteratee, context);
    var i, length;
    if (isArrayLike(obj)) {
      for (i = 0, length = obj.length; i < length; i++) {
        iteratee(obj[i], i, obj);
      }
    } else {
      var keys = _.keys(obj);
      for (i = 0, length = keys.length; i < length; i++) {
        iteratee(obj[keys[i]], keys[i], obj);
      }
    }
    return obj;
  };

  // Return the results of applying the iteratee to each element.
  _.map = _.collect = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length,
        results = Array(length);
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      results[index] = iteratee(obj[currentKey], currentKey, obj);
    }
    return results;
  };

  // Create a reducing function iterating left or right.
  function createReduce(dir) {
    // Optimized iterator function as using arguments.length
    // in the main function will deoptimize the, see #1991.
    function iterator(obj, iteratee, memo, keys, index, length) {
      for (; index >= 0 && index < length; index += dir) {
        var currentKey = keys ? keys[index] : index;
        memo = iteratee(memo, obj[currentKey], currentKey, obj);
      }
      return memo;
    }

    return function(obj, iteratee, memo, context) {
      iteratee = optimizeCb(iteratee, context, 4);
      var keys = !isArrayLike(obj) && _.keys(obj),
          length = (keys || obj).length,
          index = dir > 0 ? 0 : length - 1;
      // Determine the initial value if none is provided.
      if (arguments.length < 3) {
        memo = obj[keys ? keys[index] : index];
        index += dir;
      }
      return iterator(obj, iteratee, memo, keys, index, length);
    };
  }

  // **Reduce** builds up a single result from a list of values, aka `inject`,
  // or `foldl`.
  _.reduce = _.foldl = _.inject = createReduce(1);

  // The right-associative version of reduce, also known as `foldr`.
  _.reduceRight = _.foldr = createReduce(-1);

  // Return the first value which passes a truth test. Aliased as `detect`.
  _.find = _.detect = function(obj, predicate, context) {
    var key;
    if (isArrayLike(obj)) {
      key = _.findIndex(obj, predicate, context);
    } else {
      key = _.findKey(obj, predicate, context);
    }
    if (key !== void 0 && key !== -1) return obj[key];
  };

  // Return all the elements that pass a truth test.
  // Aliased as `select`.
  _.filter = _.select = function(obj, predicate, context) {
    var results = [];
    predicate = cb(predicate, context);
    _.each(obj, function(value, index, list) {
      if (predicate(value, index, list)) results.push(value);
    });
    return results;
  };

  // Return all the elements for which a truth test fails.
  _.reject = function(obj, predicate, context) {
    return _.filter(obj, _.negate(cb(predicate)), context);
  };

  // Determine whether all of the elements match a truth test.
  // Aliased as `all`.
  _.every = _.all = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length;
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      if (!predicate(obj[currentKey], currentKey, obj)) return false;
    }
    return true;
  };

  // Determine if at least one element in the object matches a truth test.
  // Aliased as `any`.
  _.some = _.any = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length;
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      if (predicate(obj[currentKey], currentKey, obj)) return true;
    }
    return false;
  };

  // Determine if the array or object contains a given item (using `===`).
  // Aliased as `includes` and `include`.
  _.contains = _.includes = _.include = function(obj, item, fromIndex, guard) {
    if (!isArrayLike(obj)) obj = _.values(obj);
    if (typeof fromIndex != 'number' || guard) fromIndex = 0;
    return _.indexOf(obj, item, fromIndex) >= 0;
  };

  // Invoke a method (with arguments) on every item in a collection.
  _.invoke = function(obj, method) {
    var args = slice.call(arguments, 2);
    var isFunc = _.isFunction(method);
    return _.map(obj, function(value) {
      var func = isFunc ? method : value[method];
      return func == null ? func : func.apply(value, args);
    });
  };

  // Convenience version of a common use case of `map`: fetching a property.
  _.pluck = function(obj, key) {
    return _.map(obj, _.property(key));
  };

  // Convenience version of a common use case of `filter`: selecting only objects
  // containing specific `key:value` pairs.
  _.where = function(obj, attrs) {
    return _.filter(obj, _.matcher(attrs));
  };

  // Convenience version of a common use case of `find`: getting the first object
  // containing specific `key:value` pairs.
  _.findWhere = function(obj, attrs) {
    return _.find(obj, _.matcher(attrs));
  };

  // Return the maximum element (or element-based computation).
  _.max = function(obj, iteratee, context) {
    var result = -Infinity, lastComputed = -Infinity,
        value, computed;
    if (iteratee == null && obj != null) {
      obj = isArrayLike(obj) ? obj : _.values(obj);
      for (var i = 0, length = obj.length; i < length; i++) {
        value = obj[i];
        if (value > result) {
          result = value;
        }
      }
    } else {
      iteratee = cb(iteratee, context);
      _.each(obj, function(value, index, list) {
        computed = iteratee(value, index, list);
        if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
          result = value;
          lastComputed = computed;
        }
      });
    }
    return result;
  };

  // Return the minimum element (or element-based computation).
  _.min = function(obj, iteratee, context) {
    var result = Infinity, lastComputed = Infinity,
        value, computed;
    if (iteratee == null && obj != null) {
      obj = isArrayLike(obj) ? obj : _.values(obj);
      for (var i = 0, length = obj.length; i < length; i++) {
        value = obj[i];
        if (value < result) {
          result = value;
        }
      }
    } else {
      iteratee = cb(iteratee, context);
      _.each(obj, function(value, index, list) {
        computed = iteratee(value, index, list);
        if (computed < lastComputed || computed === Infinity && result === Infinity) {
          result = value;
          lastComputed = computed;
        }
      });
    }
    return result;
  };

  // Shuffle a collection, using the modern version of the
  // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
  _.shuffle = function(obj) {
    var set = isArrayLike(obj) ? obj : _.values(obj);
    var length = set.length;
    var shuffled = Array(length);
    for (var index = 0, rand; index < length; index++) {
      rand = _.random(0, index);
      if (rand !== index) shuffled[index] = shuffled[rand];
      shuffled[rand] = set[index];
    }
    return shuffled;
  };

  // Sample **n** random values from a collection.
  // If **n** is not specified, returns a single random element.
  // The internal `guard` argument allows it to work with `map`.
  _.sample = function(obj, n, guard) {
    if (n == null || guard) {
      if (!isArrayLike(obj)) obj = _.values(obj);
      return obj[_.random(obj.length - 1)];
    }
    return _.shuffle(obj).slice(0, Math.max(0, n));
  };

  // Sort the object's values by a criterion produced by an iteratee.
  _.sortBy = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    return _.pluck(_.map(obj, function(value, index, list) {
      return {
        value: value,
        index: index,
        criteria: iteratee(value, index, list)
      };
    }).sort(function(left, right) {
      var a = left.criteria;
      var b = right.criteria;
      if (a !== b) {
        if (a > b || a === void 0) return 1;
        if (a < b || b === void 0) return -1;
      }
      return left.index - right.index;
    }), 'value');
  };

  // An internal function used for aggregate "group by" operations.
  var group = function(behavior) {
    return function(obj, iteratee, context) {
      var result = {};
      iteratee = cb(iteratee, context);
      _.each(obj, function(value, index) {
        var key = iteratee(value, index, obj);
        behavior(result, value, key);
      });
      return result;
    };
  };

  // Groups the object's values by a criterion. Pass either a string attribute
  // to group by, or a function that returns the criterion.
  _.groupBy = group(function(result, value, key) {
    if (_.has(result, key)) result[key].push(value); else result[key] = [value];
  });

  // Indexes the object's values by a criterion, similar to `groupBy`, but for
  // when you know that your index values will be unique.
  _.indexBy = group(function(result, value, key) {
    result[key] = value;
  });

  // Counts instances of an object that group by a certain criterion. Pass
  // either a string attribute to count by, or a function that returns the
  // criterion.
  _.countBy = group(function(result, value, key) {
    if (_.has(result, key)) result[key]++; else result[key] = 1;
  });

  // Safely create a real, live array from anything iterable.
  _.toArray = function(obj) {
    if (!obj) return [];
    if (_.isArray(obj)) return slice.call(obj);
    if (isArrayLike(obj)) return _.map(obj, _.identity);
    return _.values(obj);
  };

  // Return the number of elements in an object.
  _.size = function(obj) {
    if (obj == null) return 0;
    return isArrayLike(obj) ? obj.length : _.keys(obj).length;
  };

  // Split a collection into two arrays: one whose elements all satisfy the given
  // predicate, and one whose elements all do not satisfy the predicate.
  _.partition = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var pass = [], fail = [];
    _.each(obj, function(value, key, obj) {
      (predicate(value, key, obj) ? pass : fail).push(value);
    });
    return [pass, fail];
  };

  // Array Functions
  // ---------------

  // Get the first element of an array. Passing **n** will return the first N
  // values in the array. Aliased as `head` and `take`. The **guard** check
  // allows it to work with `_.map`.
  _.first = _.head = _.take = function(array, n, guard) {
    if (array == null) return void 0;
    if (n == null || guard) return array[0];
    return _.initial(array, array.length - n);
  };

  // Returns everything but the last entry of the array. Especially useful on
  // the arguments object. Passing **n** will return all the values in
  // the array, excluding the last N.
  _.initial = function(array, n, guard) {
    return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
  };

  // Get the last element of an array. Passing **n** will return the last N
  // values in the array.
  _.last = function(array, n, guard) {
    if (array == null) return void 0;
    if (n == null || guard) return array[array.length - 1];
    return _.rest(array, Math.max(0, array.length - n));
  };

  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
  // Especially useful on the arguments object. Passing an **n** will return
  // the rest N values in the array.
  _.rest = _.tail = _.drop = function(array, n, guard) {
    return slice.call(array, n == null || guard ? 1 : n);
  };

  // Trim out all falsy values from an array.
  _.compact = function(array) {
    return _.filter(array, _.identity);
  };

  // Internal implementation of a recursive `flatten` function.
  var flatten = function(input, shallow, strict, startIndex) {
    var output = [], idx = 0;
    for (var i = startIndex || 0, length = getLength(input); i < length; i++) {
      var value = input[i];
      if (isArrayLike(value) && (_.isArray(value) || _.isArguments(value))) {
        //flatten current level of array or arguments object
        if (!shallow) value = flatten(value, shallow, strict);
        var j = 0, len = value.length;
        output.length += len;
        while (j < len) {
          output[idx++] = value[j++];
        }
      } else if (!strict) {
        output[idx++] = value;
      }
    }
    return output;
  };

  // Flatten out an array, either recursively (by default), or just one level.
  _.flatten = function(array, shallow) {
    return flatten(array, shallow, false);
  };

  // Return a version of the array that does not contain the specified value(s).
  _.without = function(array) {
    return _.difference(array, slice.call(arguments, 1));
  };

  // Produce a duplicate-free version of the array. If the array has already
  // been sorted, you have the option of using a faster algorithm.
  // Aliased as `unique`.
  _.uniq = _.unique = function(array, isSorted, iteratee, context) {
    if (!_.isBoolean(isSorted)) {
      context = iteratee;
      iteratee = isSorted;
      isSorted = false;
    }
    if (iteratee != null) iteratee = cb(iteratee, context);
    var result = [];
    var seen = [];
    for (var i = 0, length = getLength(array); i < length; i++) {
      var value = array[i],
          computed = iteratee ? iteratee(value, i, array) : value;
      if (isSorted) {
        if (!i || seen !== computed) result.push(value);
        seen = computed;
      } else if (iteratee) {
        if (!_.contains(seen, computed)) {
          seen.push(computed);
          result.push(value);
        }
      } else if (!_.contains(result, value)) {
        result.push(value);
      }
    }
    return result;
  };

  // Produce an array that contains the union: each distinct element from all of
  // the passed-in arrays.
  _.union = function() {
    return _.uniq(flatten(arguments, true, true));
  };

  // Produce an array that contains every item shared between all the
  // passed-in arrays.
  _.intersection = function(array) {
    var result = [];
    var argsLength = arguments.length;
    for (var i = 0, length = getLength(array); i < length; i++) {
      var item = array[i];
      if (_.contains(result, item)) continue;
      for (var j = 1; j < argsLength; j++) {
        if (!_.contains(arguments[j], item)) break;
      }
      if (j === argsLength) result.push(item);
    }
    return result;
  };

  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  _.difference = function(array) {
    var rest = flatten(arguments, true, true, 1);
    return _.filter(array, function(value){
      return !_.contains(rest, value);
    });
  };

  // Zip together multiple lists into a single array -- elements that share
  // an index go together.
  _.zip = function() {
    return _.unzip(arguments);
  };

  // Complement of _.zip. Unzip accepts an array of arrays and groups
  // each array's elements on shared indices
  _.unzip = function(array) {
    var length = array && _.max(array, getLength).length || 0;
    var result = Array(length);

    for (var index = 0; index < length; index++) {
      result[index] = _.pluck(array, index);
    }
    return result;
  };

  // Converts lists into objects. Pass either a single array of `[key, value]`
  // pairs, or two parallel arrays of the same length -- one of keys, and one of
  // the corresponding values.
  _.object = function(list, values) {
    var result = {};
    for (var i = 0, length = getLength(list); i < length; i++) {
      if (values) {
        result[list[i]] = values[i];
      } else {
        result[list[i][0]] = list[i][1];
      }
    }
    return result;
  };

  // Generator function to create the findIndex and findLastIndex functions
  function createPredicateIndexFinder(dir) {
    return function(array, predicate, context) {
      predicate = cb(predicate, context);
      var length = getLength(array);
      var index = dir > 0 ? 0 : length - 1;
      for (; index >= 0 && index < length; index += dir) {
        if (predicate(array[index], index, array)) return index;
      }
      return -1;
    };
  }

  // Returns the first index on an array-like that passes a predicate test
  _.findIndex = createPredicateIndexFinder(1);
  _.findLastIndex = createPredicateIndexFinder(-1);

  // Use a comparator function to figure out the smallest index at which
  // an object should be inserted so as to maintain order. Uses binary search.
  _.sortedIndex = function(array, obj, iteratee, context) {
    iteratee = cb(iteratee, context, 1);
    var value = iteratee(obj);
    var low = 0, high = getLength(array);
    while (low < high) {
      var mid = Math.floor((low + high) / 2);
      if (iteratee(array[mid]) < value) low = mid + 1; else high = mid;
    }
    return low;
  };

  // Generator function to create the indexOf and lastIndexOf functions
  function createIndexFinder(dir, predicateFind, sortedIndex) {
    return function(array, item, idx) {
      var i = 0, length = getLength(array);
      if (typeof idx == 'number') {
        if (dir > 0) {
            i = idx >= 0 ? idx : Math.max(idx + length, i);
        } else {
            length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
        }
      } else if (sortedIndex && idx && length) {
        idx = sortedIndex(array, item);
        return array[idx] === item ? idx : -1;
      }
      if (item !== item) {
        idx = predicateFind(slice.call(array, i, length), _.isNaN);
        return idx >= 0 ? idx + i : -1;
      }
      for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) {
        if (array[idx] === item) return idx;
      }
      return -1;
    };
  }

  // Return the position of the first occurrence of an item in an array,
  // or -1 if the item is not included in the array.
  // If the array is large and already in sort order, pass `true`
  // for **isSorted** to use binary search.
  _.indexOf = createIndexFinder(1, _.findIndex, _.sortedIndex);
  _.lastIndexOf = createIndexFinder(-1, _.findLastIndex);

  // Generate an integer Array containing an arithmetic progression. A port of
  // the native Python `range()` function. See
  // [the Python documentation](http://docs.python.org/library/functions.html#range).
  _.range = function(start, stop, step) {
    if (stop == null) {
      stop = start || 0;
      start = 0;
    }
    step = step || 1;

    var length = Math.max(Math.ceil((stop - start) / step), 0);
    var range = Array(length);

    for (var idx = 0; idx < length; idx++, start += step) {
      range[idx] = start;
    }

    return range;
  };

  // Function (ahem) Functions
  // ------------------

  // Determines whether to execute a function as a constructor
  // or a normal function with the provided arguments
  var executeBound = function(sourceFunc, boundFunc, context, callingContext, args) {
    if (!(callingContext instanceof boundFunc)) return sourceFunc.apply(context, args);
    var self = baseCreate(sourceFunc.prototype);
    var result = sourceFunc.apply(self, args);
    if (_.isObject(result)) return result;
    return self;
  };

  // Create a function bound to a given object (assigning `this`, and arguments,
  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
  // available.
  _.bind = function(func, context) {
    if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
    if (!_.isFunction(func)) throw new TypeError('Bind must be called on a function');
    var args = slice.call(arguments, 2);
    var bound = function() {
      return executeBound(func, bound, context, this, args.concat(slice.call(arguments)));
    };
    return bound;
  };

  // Partially apply a function by creating a version that has had some of its
  // arguments pre-filled, without changing its dynamic `this` context. _ acts
  // as a placeholder, allowing any combination of arguments to be pre-filled.
  _.partial = function(func) {
    var boundArgs = slice.call(arguments, 1);
    var bound = function() {
      var position = 0, length = boundArgs.length;
      var args = Array(length);
      for (var i = 0; i < length; i++) {
        args[i] = boundArgs[i] === _ ? arguments[position++] : boundArgs[i];
      }
      while (position < arguments.length) args.push(arguments[position++]);
      return executeBound(func, bound, this, this, args);
    };
    return bound;
  };

  // Bind a number of an object's methods to that object. Remaining arguments
  // are the method names to be bound. Useful for ensuring that all callbacks
  // defined on an object belong to it.
  _.bindAll = function(obj) {
    var i, length = arguments.length, key;
    if (length <= 1) throw new Error('bindAll must be passed function names');
    for (i = 1; i < length; i++) {
      key = arguments[i];
      obj[key] = _.bind(obj[key], obj);
    }
    return obj;
  };

  // Memoize an expensive function by storing its results.
  _.memoize = function(func, hasher) {
    var memoize = function(key) {
      var cache = memoize.cache;
      var address = '' + (hasher ? hasher.apply(this, arguments) : key);
      if (!_.has(cache, address)) cache[address] = func.apply(this, arguments);
      return cache[address];
    };
    memoize.cache = {};
    return memoize;
  };

  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  _.delay = function(func, wait) {
    var args = slice.call(arguments, 2);
    return setTimeout(function(){
      return func.apply(null, args);
    }, wait);
  };

  // Defers a function, scheduling it to run after the current call stack has
  // cleared.
  _.defer = _.partial(_.delay, _, 1);

  // Returns a function, that, when invoked, will only be triggered at most once
  // during a given window of time. Normally, the throttled function will run
  // as much as it can, without ever going more than once per `wait` duration;
  // but if you'd like to disable the execution on the leading edge, pass
  // `{leading: false}`. To disable execution on the trailing edge, ditto.
  _.throttle = function(func, wait, options) {
    var context, args, result;
    var timeout = null;
    var previous = 0;
    if (!options) options = {};
    var later = function() {
      previous = options.leading === false ? 0 : _.now();
      timeout = null;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    };
    return function() {
      var now = _.now();
      if (!previous && options.leading === false) previous = now;
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0 || remaining > wait) {
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }
        previous = now;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    };
  };

  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.
  _.debounce = function(func, wait, immediate) {
    var timeout, args, context, timestamp, result;

    var later = function() {
      var last = _.now() - timestamp;

      if (last < wait && last >= 0) {
        timeout = setTimeout(later, wait - last);
      } else {
        timeout = null;
        if (!immediate) {
          result = func.apply(context, args);
          if (!timeout) context = args = null;
        }
      }
    };

    return function() {
      context = this;
      args = arguments;
      timestamp = _.now();
      var callNow = immediate && !timeout;
      if (!timeout) timeout = setTimeout(later, wait);
      if (callNow) {
        result = func.apply(context, args);
        context = args = null;
      }

      return result;
    };
  };

  // Returns the first function passed as an argument to the second,
  // allowing you to adjust arguments, run code before and after, and
  // conditionally execute the original function.
  _.wrap = function(func, wrapper) {
    return _.partial(wrapper, func);
  };

  // Returns a negated version of the passed-in predicate.
  _.negate = function(predicate) {
    return function() {
      return !predicate.apply(this, arguments);
    };
  };

  // Returns a function that is the composition of a list of functions, each
  // consuming the return value of the function that follows.
  _.compose = function() {
    var args = arguments;
    var start = args.length - 1;
    return function() {
      var i = start;
      var result = args[start].apply(this, arguments);
      while (i--) result = args[i].call(this, result);
      return result;
    };
  };

  // Returns a function that will only be executed on and after the Nth call.
  _.after = function(times, func) {
    return function() {
      if (--times < 1) {
        return func.apply(this, arguments);
      }
    };
  };

  // Returns a function that will only be executed up to (but not including) the Nth call.
  _.before = function(times, func) {
    var memo;
    return function() {
      if (--times > 0) {
        memo = func.apply(this, arguments);
      }
      if (times <= 1) func = null;
      return memo;
    };
  };

  // Returns a function that will be executed at most one time, no matter how
  // often you call it. Useful for lazy initialization.
  _.once = _.partial(_.before, 2);

  // Object Functions
  // ----------------

  // Keys in IE < 9 that won't be iterated by `for key in ...` and thus missed.
  var hasEnumBug = !{toString: null}.propertyIsEnumerable('toString');
  var nonEnumerableProps = ['valueOf', 'isPrototypeOf', 'toString',
                      'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];

  function collectNonEnumProps(obj, keys) {
    var nonEnumIdx = nonEnumerableProps.length;
    var constructor = obj.constructor;
    var proto = (_.isFunction(constructor) && constructor.prototype) || ObjProto;

    // Constructor is a special case.
    var prop = 'constructor';
    if (_.has(obj, prop) && !_.contains(keys, prop)) keys.push(prop);

    while (nonEnumIdx--) {
      prop = nonEnumerableProps[nonEnumIdx];
      if (prop in obj && obj[prop] !== proto[prop] && !_.contains(keys, prop)) {
        keys.push(prop);
      }
    }
  }

  // Retrieve the names of an object's own properties.
  // Delegates to **ECMAScript 5**'s native `Object.keys`
  _.keys = function(obj) {
    if (!_.isObject(obj)) return [];
    if (nativeKeys) return nativeKeys(obj);
    var keys = [];
    for (var key in obj) if (_.has(obj, key)) keys.push(key);
    // Ahem, IE < 9.
    if (hasEnumBug) collectNonEnumProps(obj, keys);
    return keys;
  };

  // Retrieve all the property names of an object.
  _.allKeys = function(obj) {
    if (!_.isObject(obj)) return [];
    var keys = [];
    for (var key in obj) keys.push(key);
    // Ahem, IE < 9.
    if (hasEnumBug) collectNonEnumProps(obj, keys);
    return keys;
  };

  // Retrieve the values of an object's properties.
  _.values = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var values = Array(length);
    for (var i = 0; i < length; i++) {
      values[i] = obj[keys[i]];
    }
    return values;
  };

  // Returns the results of applying the iteratee to each element of the object
  // In contrast to _.map it returns an object
  _.mapObject = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    var keys =  _.keys(obj),
          length = keys.length,
          results = {},
          currentKey;
      for (var index = 0; index < length; index++) {
        currentKey = keys[index];
        results[currentKey] = iteratee(obj[currentKey], currentKey, obj);
      }
      return results;
  };

  // Convert an object into a list of `[key, value]` pairs.
  _.pairs = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var pairs = Array(length);
    for (var i = 0; i < length; i++) {
      pairs[i] = [keys[i], obj[keys[i]]];
    }
    return pairs;
  };

  // Invert the keys and values of an object. The values must be serializable.
  _.invert = function(obj) {
    var result = {};
    var keys = _.keys(obj);
    for (var i = 0, length = keys.length; i < length; i++) {
      result[obj[keys[i]]] = keys[i];
    }
    return result;
  };

  // Return a sorted list of the function names available on the object.
  // Aliased as `methods`
  _.functions = _.methods = function(obj) {
    var names = [];
    for (var key in obj) {
      if (_.isFunction(obj[key])) names.push(key);
    }
    return names.sort();
  };

  // Extend a given object with all the properties in passed-in object(s).
  _.extend = createAssigner(_.allKeys);

  // Assigns a given object with all the own properties in the passed-in object(s)
  // (https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
  _.extendOwn = _.assign = createAssigner(_.keys);

  // Returns the first key on an object that passes a predicate test
  _.findKey = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = _.keys(obj), key;
    for (var i = 0, length = keys.length; i < length; i++) {
      key = keys[i];
      if (predicate(obj[key], key, obj)) return key;
    }
  };

  // Return a copy of the object only containing the whitelisted properties.
  _.pick = function(object, oiteratee, context) {
    var result = {}, obj = object, iteratee, keys;
    if (obj == null) return result;
    if (_.isFunction(oiteratee)) {
      keys = _.allKeys(obj);
      iteratee = optimizeCb(oiteratee, context);
    } else {
      keys = flatten(arguments, false, false, 1);
      iteratee = function(value, key, obj) { return key in obj; };
      obj = Object(obj);
    }
    for (var i = 0, length = keys.length; i < length; i++) {
      var key = keys[i];
      var value = obj[key];
      if (iteratee(value, key, obj)) result[key] = value;
    }
    return result;
  };

   // Return a copy of the object without the blacklisted properties.
  _.omit = function(obj, iteratee, context) {
    if (_.isFunction(iteratee)) {
      iteratee = _.negate(iteratee);
    } else {
      var keys = _.map(flatten(arguments, false, false, 1), String);
      iteratee = function(value, key) {
        return !_.contains(keys, key);
      };
    }
    return _.pick(obj, iteratee, context);
  };

  // Fill in a given object with default properties.
  _.defaults = createAssigner(_.allKeys, true);

  // Creates an object that inherits from the given prototype object.
  // If additional properties are provided then they will be added to the
  // created object.
  _.create = function(prototype, props) {
    var result = baseCreate(prototype);
    if (props) _.extendOwn(result, props);
    return result;
  };

  // Create a (shallow-cloned) duplicate of an object.
  _.clone = function(obj) {
    if (!_.isObject(obj)) return obj;
    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
  };

  // Invokes interceptor with the obj, and then returns obj.
  // The primary purpose of this method is to "tap into" a method chain, in
  // order to perform operations on intermediate results within the chain.
  _.tap = function(obj, interceptor) {
    interceptor(obj);
    return obj;
  };

  // Returns whether an object has a given set of `key:value` pairs.
  _.isMatch = function(object, attrs) {
    var keys = _.keys(attrs), length = keys.length;
    if (object == null) return !length;
    var obj = Object(object);
    for (var i = 0; i < length; i++) {
      var key = keys[i];
      if (attrs[key] !== obj[key] || !(key in obj)) return false;
    }
    return true;
  };


  // Internal recursive comparison function for `isEqual`.
  var eq = function(a, b, aStack, bStack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
    if (a === b) return a !== 0 || 1 / a === 1 / b;
    // A strict comparison is necessary because `null == undefined`.
    if (a == null || b == null) return a === b;
    // Unwrap any wrapped objects.
    if (a instanceof _) a = a._wrapped;
    if (b instanceof _) b = b._wrapped;
    // Compare `[[Class]]` names.
    var className = toString.call(a);
    if (className !== toString.call(b)) return false;
    switch (className) {
      // Strings, numbers, regular expressions, dates, and booleans are compared by value.
      case '[object RegExp]':
      // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
      case '[object String]':
        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
        // equivalent to `new String("5")`.
        return '' + a === '' + b;
      case '[object Number]':
        // `NaN`s are equivalent, but non-reflexive.
        // Object(NaN) is equivalent to NaN
        if (+a !== +a) return +b !== +b;
        // An `egal` comparison is performed for other numeric values.
        return +a === 0 ? 1 / +a === 1 / b : +a === +b;
      case '[object Date]':
      case '[object Boolean]':
        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
        // millisecond representations. Note that invalid dates with millisecond representations
        // of `NaN` are not equivalent.
        return +a === +b;
    }

    var areArrays = className === '[object Array]';
    if (!areArrays) {
      if (typeof a != 'object' || typeof b != 'object') return false;

      // Objects with different constructors are not equivalent, but `Object`s or `Array`s
      // from different frames are.
      var aCtor = a.constructor, bCtor = b.constructor;
      if (aCtor !== bCtor && !(_.isFunction(aCtor) && aCtor instanceof aCtor &&
                               _.isFunction(bCtor) && bCtor instanceof bCtor)
                          && ('constructor' in a && 'constructor' in b)) {
        return false;
      }
    }
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.

    // Initializing stack of traversed objects.
    // It's done here since we only need them for objects and arrays comparison.
    aStack = aStack || [];
    bStack = bStack || [];
    var length = aStack.length;
    while (length--) {
      // Linear search. Performance is inversely proportional to the number of
      // unique nested structures.
      if (aStack[length] === a) return bStack[length] === b;
    }

    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);

    // Recursively compare objects and arrays.
    if (areArrays) {
      // Compare array lengths to determine if a deep comparison is necessary.
      length = a.length;
      if (length !== b.length) return false;
      // Deep compare the contents, ignoring non-numeric properties.
      while (length--) {
        if (!eq(a[length], b[length], aStack, bStack)) return false;
      }
    } else {
      // Deep compare objects.
      var keys = _.keys(a), key;
      length = keys.length;
      // Ensure that both objects contain the same number of properties before comparing deep equality.
      if (_.keys(b).length !== length) return false;
      while (length--) {
        // Deep compare each member
        key = keys[length];
        if (!(_.has(b, key) && eq(a[key], b[key], aStack, bStack))) return false;
      }
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();
    return true;
  };

  // Perform a deep comparison to check if two objects are equal.
  _.isEqual = function(a, b) {
    return eq(a, b);
  };

  // Is a given array, string, or object empty?
  // An "empty" object has no enumerable own-properties.
  _.isEmpty = function(obj) {
    if (obj == null) return true;
    if (isArrayLike(obj) && (_.isArray(obj) || _.isString(obj) || _.isArguments(obj))) return obj.length === 0;
    return _.keys(obj).length === 0;
  };

  // Is a given value a DOM element?
  _.isElement = function(obj) {
    return !!(obj && obj.nodeType === 1);
  };

  // Is a given value an array?
  // Delegates to ECMA5's native Array.isArray
  _.isArray = nativeIsArray || function(obj) {
    return toString.call(obj) === '[object Array]';
  };

  // Is a given variable an object?
  _.isObject = function(obj) {
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
  };

  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp, isError.
  _.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error'], function(name) {
    _['is' + name] = function(obj) {
      return toString.call(obj) === '[object ' + name + ']';
    };
  });

  // Define a fallback version of the method in browsers (ahem, IE < 9), where
  // there isn't any inspectable "Arguments" type.
  if (!_.isArguments(arguments)) {
    _.isArguments = function(obj) {
      return _.has(obj, 'callee');
    };
  }

  // Optimize `isFunction` if appropriate. Work around some typeof bugs in old v8,
  // IE 11 (#1621), and in Safari 8 (#1929).
  if (typeof /./ != 'function' && typeof Int8Array != 'object') {
    _.isFunction = function(obj) {
      return typeof obj == 'function' || false;
    };
  }

  // Is a given object a finite number?
  _.isFinite = function(obj) {
    return isFinite(obj) && !isNaN(parseFloat(obj));
  };

  // Is the given value `NaN`? (NaN is the only number which does not equal itself).
  _.isNaN = function(obj) {
    return _.isNumber(obj) && obj !== +obj;
  };

  // Is a given value a boolean?
  _.isBoolean = function(obj) {
    return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
  };

  // Is a given value equal to null?
  _.isNull = function(obj) {
    return obj === null;
  };

  // Is a given variable undefined?
  _.isUndefined = function(obj) {
    return obj === void 0;
  };

  // Shortcut function for checking if an object has a given property directly
  // on itself (in other words, not on a prototype).
  _.has = function(obj, key) {
    return obj != null && hasOwnProperty.call(obj, key);
  };

  // Utility Functions
  // -----------------

  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
  // previous owner. Returns a reference to the Underscore object.
  _.noConflict = function() {
    root._ = previousUnderscore;
    return this;
  };

  // Keep the identity function around for default iteratees.
  _.identity = function(value) {
    return value;
  };

  // Predicate-generating functions. Often useful outside of Underscore.
  _.constant = function(value) {
    return function() {
      return value;
    };
  };

  _.noop = function(){};

  _.property = property;

  // Generates a function for a given object that returns a given property.
  _.propertyOf = function(obj) {
    return obj == null ? function(){} : function(key) {
      return obj[key];
    };
  };

  // Returns a predicate for checking whether an object has a given set of
  // `key:value` pairs.
  _.matcher = _.matches = function(attrs) {
    attrs = _.extendOwn({}, attrs);
    return function(obj) {
      return _.isMatch(obj, attrs);
    };
  };

  // Run a function **n** times.
  _.times = function(n, iteratee, context) {
    var accum = Array(Math.max(0, n));
    iteratee = optimizeCb(iteratee, context, 1);
    for (var i = 0; i < n; i++) accum[i] = iteratee(i);
    return accum;
  };

  // Return a random integer between min and max (inclusive).
  _.random = function(min, max) {
    if (max == null) {
      max = min;
      min = 0;
    }
    return min + Math.floor(Math.random() * (max - min + 1));
  };

  // A (possibly faster) way to get the current timestamp as an integer.
  _.now = Date.now || function() {
    return new Date().getTime();
  };

   // List of HTML entities for escaping.
  var escapeMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '`': '&#x60;'
  };
  var unescapeMap = _.invert(escapeMap);

  // Functions for escaping and unescaping strings to/from HTML interpolation.
  var createEscaper = function(map) {
    var escaper = function(match) {
      return map[match];
    };
    // Regexes for identifying a key that needs to be escaped
    var source = '(?:' + _.keys(map).join('|') + ')';
    var testRegexp = RegExp(source);
    var replaceRegexp = RegExp(source, 'g');
    return function(string) {
      string = string == null ? '' : '' + string;
      return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
    };
  };
  _.escape = createEscaper(escapeMap);
  _.unescape = createEscaper(unescapeMap);

  // If the value of the named `property` is a function then invoke it with the
  // `object` as context; otherwise, return it.
  _.result = function(object, property, fallback) {
    var value = object == null ? void 0 : object[property];
    if (value === void 0) {
      value = fallback;
    }
    return _.isFunction(value) ? value.call(object) : value;
  };

  // Generate a unique integer id (unique within the entire client session).
  // Useful for temporary DOM ids.
  var idCounter = 0;
  _.uniqueId = function(prefix) {
    var id = ++idCounter + '';
    return prefix ? prefix + id : id;
  };

  // By default, Underscore uses ERB-style template delimiters, change the
  // following template settings to use alternative delimiters.
  _.templateSettings = {
    evaluate    : /<%([\s\S]+?)%>/g,
    interpolate : /<%=([\s\S]+?)%>/g,
    escape      : /<%-([\s\S]+?)%>/g
  };

  // When customizing `templateSettings`, if you don't want to define an
  // interpolation, evaluation or escaping regex, we need one that is
  // guaranteed not to match.
  var noMatch = /(.)^/;

  // Certain characters need to be escaped so that they can be put into a
  // string literal.
  var escapes = {
    "'":      "'",
    '\\':     '\\',
    '\r':     'r',
    '\n':     'n',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };

  var escaper = /\\|'|\r|\n|\u2028|\u2029/g;

  var escapeChar = function(match) {
    return '\\' + escapes[match];
  };

  // JavaScript micro-templating, similar to John Resig's implementation.
  // Underscore templating handles arbitrary delimiters, preserves whitespace,
  // and correctly escapes quotes within interpolated code.
  // NB: `oldSettings` only exists for backwards compatibility.
  _.template = function(text, settings, oldSettings) {
    if (!settings && oldSettings) settings = oldSettings;
    settings = _.defaults({}, settings, _.templateSettings);

    // Combine delimiters into one regular expression via alternation.
    var matcher = RegExp([
      (settings.escape || noMatch).source,
      (settings.interpolate || noMatch).source,
      (settings.evaluate || noMatch).source
    ].join('|') + '|$', 'g');

    // Compile the template source, escaping string literals appropriately.
    var index = 0;
    var source = "__p+='";
    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
      source += text.slice(index, offset).replace(escaper, escapeChar);
      index = offset + match.length;

      if (escape) {
        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
      } else if (interpolate) {
        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
      } else if (evaluate) {
        source += "';\n" + evaluate + "\n__p+='";
      }

      // Adobe VMs need the match returned to produce the correct offest.
      return match;
    });
    source += "';\n";

    // If a variable is not specified, place data values in local scope.
    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

    source = "var __t,__p='',__j=Array.prototype.join," +
      "print=function(){__p+=__j.call(arguments,'');};\n" +
      source + 'return __p;\n';

    try {
      var render = new Function(settings.variable || 'obj', '_', source);
    } catch (e) {
      e.source = source;
      throw e;
    }

    var template = function(data) {
      return render.call(this, data, _);
    };

    // Provide the compiled source as a convenience for precompilation.
    var argument = settings.variable || 'obj';
    template.source = 'function(' + argument + '){\n' + source + '}';

    return template;
  };

  // Add a "chain" function. Start chaining a wrapped Underscore object.
  _.chain = function(obj) {
    var instance = _(obj);
    instance._chain = true;
    return instance;
  };

  // OOP
  // ---------------
  // If Underscore is called as a function, it returns a wrapped object that
  // can be used OO-style. This wrapper holds altered versions of all the
  // underscore functions. Wrapped objects may be chained.

  // Helper function to continue chaining intermediate results.
  var result = function(instance, obj) {
    return instance._chain ? _(obj).chain() : obj;
  };

  // Add your own custom functions to the Underscore object.
  _.mixin = function(obj) {
    _.each(_.functions(obj), function(name) {
      var func = _[name] = obj[name];
      _.prototype[name] = function() {
        var args = [this._wrapped];
        push.apply(args, arguments);
        return result(this, func.apply(_, args));
      };
    });
  };

  // Add all of the Underscore functions to the wrapper object.
  _.mixin(_);

  // Add all mutator Array functions to the wrapper.
  _.each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      var obj = this._wrapped;
      method.apply(obj, arguments);
      if ((name === 'shift' || name === 'splice') && obj.length === 0) delete obj[0];
      return result(this, obj);
    };
  });

  // Add all accessor Array functions to the wrapper.
  _.each(['concat', 'join', 'slice'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      return result(this, method.apply(this._wrapped, arguments));
    };
  });

  // Extracts the result from a wrapped and chained object.
  _.prototype.value = function() {
    return this._wrapped;
  };

  // Provide unwrapping proxy for some methods used in engine operations
  // such as arithmetic and JSON stringification.
  _.prototype.valueOf = _.prototype.toJSON = _.prototype.value;

  _.prototype.toString = function() {
    return '' + this._wrapped;
  };

  // AMD registration happens at the end for compatibility with AMD loaders
  // that may not enforce next-turn semantics on modules. Even though general
  // practice for AMD registration is to be anonymous, underscore registers
  // as a named module because, like jQuery, it is a base library that is
  // popular enough to be bundled in a third party lib, but not be part of
  // an AMD load request. Those cases could generate an error when an
  // anonymous define() is called outside of a loader request.
  if (typeof define === 'function' && define.amd) {
    define('underscore', [], function() {
      return _;
    });
  }
}.call(this));

},{}],23:[function(require,module,exports){
// calc.js
// measure calculations

var _ = require('underscore');
var geocrunch = require('geocrunch');

var pad = function (num) {
  return num < 10 ? '0' + num.toString() : num.toString();
};

var ddToDms = function (coordinate, posSymbol, negSymbol) {
  var dd = Math.abs(coordinate),
      d = Math.floor(dd),
      m = Math.floor((dd - d) * 60),
      s = Math.round((dd - d - (m/60)) * 3600 * 100)/100,
      directionSymbol = dd === coordinate ? posSymbol : negSymbol;
  return pad(d) + '&deg; ' + pad(m) + '\' ' + pad(s) + '" ' + directionSymbol;
};

var measure = function (latlngs) {
  var last = _.last(latlngs);
  var path = geocrunch.path(_.map(latlngs, function (latlng) {
    return [latlng.lng, latlng.lat];
  }));

  var meters = path.distance({
    units: 'meters'
  });
  var sqMeters = path.area({
    units: 'sqmeters'
  });

  return {
    lastCoord: {
      dd: {
        x: last.lng,
        y: last.lat
      },
      dms: {
        x: ddToDms(last.lng, 'E', 'W'),
        y: ddToDms(last.lat, 'N', 'S')
      }
    },
    length: meters,
    area: sqMeters
  };
};

module.exports = {
  measure: measure // `measure(latLngArray)` - returns object with calced measurements for passed points
};
},{"geocrunch":7,"underscore":22}],24:[function(require,module,exports){
// dom.js
// utility functions for managing DOM elements

var selectOne = function (selector, el) {
  if (!el) {
    el = document;
  }
  return el.querySelector(selector);
};

var selectAll = function (selector, el) {
  if (!el) {
    el = document;
  }
  return Array.prototype.slice.call(el.querySelectorAll(selector));
};

var hide = function (el) {
  if (el) {
    el.setAttribute('style', 'display:none;');
    return el;
  }
};

var show = function (el) {
  if (el) {
    el.removeAttribute('style');
    return el;
  }
};

module.exports = {
  $: selectOne,  // `$('.myclass', baseElement)` - returns selected element or undefined
  $$: selectAll, // `$$('.myclass', baseElement)` - returns array of selected elements
  hide: hide,    // `hide(someElement)` - hide passed dom element
  show: show     // `show(someElement)` - show passed dom element
};
},{}],25:[function(require,module,exports){
// ca.js
// Catalan i18n translations

module.exports = {
  'measure': 'Medir',
  'measureDistancesAndAreas': 'Medeix distancies i àreas',
  'createNewMeasurement': 'Crear nova medicio',
  'startCreating': 'Començi a crear la medicio afegint punts al mapa',
  'finishMeasurement': 'Acabar la medició',
  'lastPoint': 'Últim punt',
  'area': 'Área',
  'perimeter': 'Perómetre',
  'pointLocation': 'Localizació del punt',
  'areaMeasurement': 'Medició d\'área',
  'linearMeasurement': 'Medició lineal',
  'pathDistance': 'Distancia de ruta',
  'centerOnArea': 'Centrar en aquesta área',
  'centerOnLine': 'Centrar en aquesta línia',
  'centerOnLocation': 'Centrar en aquesta localizació',
  'cancel': 'Cancel·lar',
  'delete': 'Eliminar',
  'acres': 'Acres',
  'feet': 'Peus',
  'kilometers': 'Quilòmetres',
  'hectares': 'Hectàreas',
  'meters': 'Metros',
  'miles': 'Milles',
  'sqfeet': 'Peus cuadrats',
  'sqmeters': 'Metres cuadrats',
  'sqmiles': 'Milles cuadrades',
  'decPoint': '.',
  'thousandsSep': ' '
};

},{}],26:[function(require,module,exports){
// cn.js
// Chinese i18n translations

module.exports = {
  'measure': '测量',
  'measureDistancesAndAreas': '同时测量距离和面积',
  'createNewMeasurement': '开始一次新的测量',
  'startCreating': '点击地图加点以开始创建测量',
  'finishMeasurement': '完成测量',
  'lastPoint': '最后点的坐标',
  'area': '面积',
  'perimeter': '周长',
  'pointLocation': '点的坐标',
  'areaMeasurement': '面积测量',
  'linearMeasurement': '距离测量',
  'pathDistance': '路径长度',
  'centerOnArea': '该面积居中',
  'centerOnLine': '该线段居中',
  'centerOnLocation': '该位置居中',
  'cancel': '取消',
  'delete': '删除',
  'acres': '公亩',
  'feet': '英尺',
  'kilometers': '公里',
  'hectares': '公顷',
  'meters': '米',
  'miles': '英里',
  'sqfeet': '平方英尺',
  'sqmeters': '平方米',
  'sqmiles': '平方英里',
  'decPoint': '.',
  'thousandsSep': ','
};

},{}],27:[function(require,module,exports){
// da.js
// Danish i18n translations

module.exports = {
  'measure': 'Mål',
  'measureDistancesAndAreas': 'Mål afstande og arealer',
  'createNewMeasurement': 'Lav en ny måling',
  'startCreating': 'Begynd målingen ved at tilføje punkter på kortet',
  'finishMeasurement': 'Afslut måling',
  'lastPoint': 'Sidste punkt',
  'area': 'Areal',
  'perimeter': 'Omkreds',
  'pointLocation': 'Punkt',
  'areaMeasurement': 'Areal',
  'linearMeasurement': 'Linje',
  'pathDistance': 'Sti afstand',
  'centerOnArea': 'Centrér dette område',
  'centerOnLine': 'Centrér denne linje',
  'centerOnLocation': 'Centrér dette punkt',
  'cancel': 'Annuller',
  'delete': 'Slet',
  'acres': 'acre',
  'feet': 'fod',
  'kilometers': 'km',
  'hectares': 'ha',
  'meters': 'm',
  'miles': 'mil',
  'sqfeet': 'kvadratfod',
  'sqmeters': 'm²',
  'sqmiles': 'kvadratmil',
  'decPoint': ',',
  'thousandsSep': '.'
};

},{}],28:[function(require,module,exports){
// de.js
// German i18n translations

module.exports = {
  'measure': 'Messung',
  'measureDistancesAndAreas': 'Messung von Abständen und Flächen',
  'createNewMeasurement': 'Eine neue Messung durchführen',
  'startCreating': 'Führen Sie die Messung durch, indem Sie der Karte Punkte hinzufügen.',
  'finishMeasurement': 'Messung beenden',
  'lastPoint': 'Letzter Punkt',
  'area': 'Fläche',
  'perimeter': 'Rand',
  'pointLocation': 'Lage des Punkts',
  'areaMeasurement': 'Gemessene Fläche',
  'linearMeasurement': 'Gemessener Abstand',
  'pathDistance': 'Abstand entlang des Pfads',
  'centerOnArea': 'Auf diese Fläche zentrieren',
  'centerOnLine': 'Auf diesen Linienzug zentrieren',
  'centerOnLocation': 'Auf diesen Ort zentrieren',
  'cancel': 'Abbrechen',
  'delete': 'Löschen',
  'acres': 'Morgen',
  'feet': 'Fuß',
  'kilometers': 'Kilometer',
  'hectares': 'Hektar',
  'meters': 'Meter',
  'miles': 'Meilen',
  'sqfeet': 'Quadratfuß',
  'sqmeters': 'Quadratmeter',
  'sqmiles': 'Quadratmeilen',
  'decPoint': ',',
  'thousandsSep': '.'
};

},{}],29:[function(require,module,exports){
// de.js
// German i18n translations

module.exports = {
  'measure': 'Messung',
  'measureDistancesAndAreas': 'Abstände und Flächen messen',
  'createNewMeasurement': 'Eine neue Messung durchführen',
  'startCreating': 'Messen sie, indem Sie der Karte Punkte hinzufügen',
  'finishMeasurement': 'Messung beenden',
  'lastPoint': 'Letzter Punkt',
  'area': 'Fläche',
  'perimeter': 'Umfang',
  'pointLocation': 'Lage des Punkts',
  'areaMeasurement': 'Fläche',
  'linearMeasurement': 'Abstand',
  'pathDistance': 'Umfang',
  'centerOnArea': 'Auf diese Fläche zentrieren',
  'centerOnLine': 'Auf diese Linie zentrieren',
  'centerOnLocation': 'Auf diesen Ort zentrieren',
  'cancel': 'Abbrechen',
  'delete': 'Löschen',
  'acres': 'Morgen',
  'feet': 'Fuß',
  'kilometers': 'Kilometer',
  'hectares': 'Hektar',
  'meters': 'Meter',
  'miles': 'Meilen',
  'sqfeet': 'Quadratfuß',
  'sqmeters': 'Quadratmeter',
  'sqmiles': 'Quadratmeilen',
  'decPoint': '.',
  'thousandsSep': '\''
};

},{}],30:[function(require,module,exports){
// en.js
// English i18n translations

module.exports = {
  'measure': 'Measure',
  'measureDistancesAndAreas': 'Measure distances and areas',
  'createNewMeasurement': 'Create a new measurement',
  'startCreating': 'Start creating a measurement by adding points to the map',
  'finishMeasurement': 'Finish measurement',
  'lastPoint': 'Last point',
  'area': 'Area',
  'perimeter': 'Perimeter',
  'pointLocation': 'Point location',
  'areaMeasurement': 'Area measurement',
  'linearMeasurement': 'Linear measurement',
  'pathDistance': 'Path distance',
  'centerOnArea': 'Center on this area',
  'centerOnLine': 'Center on this line',
  'centerOnLocation': 'Center on this location',
  'cancel': 'Cancel',
  'delete': 'Delete',
  'acres': 'Acres',
  'feet': 'Feet',
  'kilometers': 'Kilometers',
  'hectares': 'Hectares',
  'meters': 'Meters',
  'miles': 'Miles',
  'sqfeet': 'Sq Feet',
  'sqmeters': 'Sq Meters',
  'sqmiles': 'Sq Miles',
  'decPoint': '.',
  'thousandsSep': ','
};

},{}],31:[function(require,module,exports){
// en_UK.js
// British English i18n translations

module.exports = {
  'measure': 'Measure',
  'measureDistancesAndAreas': 'Measure distances and areas',
  'createNewMeasurement': 'Create a new measurement',
  'startCreating': 'Start creating a measurement by adding points to the map',
  'finishMeasurement': 'Finish measurement',
  'lastPoint': 'Last point',
  'area': 'Area',
  'perimeter': 'Perimeter',
  'pointLocation': 'Point location',
  'areaMeasurement': 'Area measurement',
  'linearMeasurement': 'Linear measurement',
  'pathDistance': 'Path distance',
  'centerOnArea': 'Centre on this area',
  'centerOnLine': 'Centre on this line',
  'centerOnLocation': 'Centre on this location',
  'cancel': 'Cancel',
  'delete': 'Delete',
  'acres': 'Acres',
  'feet': 'Feet',
  'kilometers': 'Kilometres',
  'hectares': 'Hectares',
  'meters': 'Meters',
  'miles': 'Miles',
  'sqfeet': 'Sq Feet',
  'sqmeters': 'Sq Meters',
  'sqmiles': 'Sq Miles',
  'decPoint': '.',
  'thousandsSep': ','
};

},{}],32:[function(require,module,exports){
// es.js
// Spanish i18n translations

module.exports = {
  'measure': 'Medición',
  'measureDistancesAndAreas': 'Mida distancias y áreas',
  'createNewMeasurement': 'Crear nueva medición',
  'startCreating': 'Empiece a crear la medición añadiendo puntos al mapa',
  'finishMeasurement': 'Terminar medición',
  'lastPoint': 'Último punto',
  'area': 'Área',
  'perimeter': 'Perímetro',
  'pointLocation': 'Localización del punto',
  'areaMeasurement': 'Medición de área',
  'linearMeasurement': 'Medición linear',
  'pathDistance': 'Distancia de ruta',
  'centerOnArea': 'Centrar en este área',
  'centerOnLine': 'Centrar en esta línea',
  'centerOnLocation': 'Centrar en esta localización',
  'cancel': 'Cancelar',
  'delete': 'Eliminar',
  'acres': 'Acres',
  'feet': 'Pies',
  'kilometers': 'Kilómetros',
  'hectares': 'Hectáreas',
  'meters': 'Metros',
  'miles': 'Millas',
  'sqfeet': 'Pies cuadrados',
  'sqmeters': 'Metros cuadrados',
  'sqmiles': 'Millas cuadradas',
  'decPoint': '.',
  'thousandsSep': ' '
};

},{}],33:[function(require,module,exports){
// fa.js
// Persian (Farsi) i18n translations

module.exports = {
  'measure': 'اندازه گیری',
  'measureDistancesAndAreas': 'اندازه گیری فاصله و مساحت',
  'createNewMeasurement': 'ثبت اندازه گیری جدید',
  'startCreating': 'برای ثبت اندازه گیری جدید نقاطی را به نقشه اضافه کنید.',
  'finishMeasurement': 'پایان اندازه گیری',
  'lastPoint': 'آخرین نقطه',
  'area': 'مساحت',
  'perimeter': 'محیط',
  'pointLocation': 'مکان نقطه',
  'areaMeasurement': 'اندازه گیری مساحت',
  'linearMeasurement': 'اندازه گیری خطی',
  'pathDistance': 'فاصله مسیر',
  'centerOnArea': 'مرکز این سطح',
  'centerOnLine': 'مرکز این خط',
  'centerOnLocation': 'مرکز این مکان',
  'cancel': 'لغو',
  'delete': 'حذف',
  'acres': 'ایکر',
  'feet': 'پا',
  'kilometers': 'کیلومتر',
  'hectares': 'هکتار',
  'meters': 'متر',
  'miles': 'مایل',
  'sqfeet': 'پا مربع',
  'sqmeters': 'متر مربع',
  'sqmiles': 'مایل مربع',
  'decPoint': '/',
  'thousandsSep': ','
};

},{}],34:[function(require,module,exports){
// fil_PH.js
// Filipino i18n translations

module.exports = {
  'measure': 'Sukat',
  'measureDistancesAndAreas': 'Kalkulahin ang tamang distansya at sukat',
  'createNewMeasurement': 'Lumikha ng isang bagong pagsukat',
  'startCreating': 'Simulan ang paglikha ng isang pagsukat sa pamamagitan ng pagdaragdag ng mga puntos sa mapa',
  'finishMeasurement': 'Tapusin ang pagsukat',
  'lastPoint': 'Huling punto sa mapa',
  'area': 'Sukat',
  'perimeter': 'Palibot',
  'pointLocation': 'Lokasyon ng punto',
  'areaMeasurement': 'Kabuuang sukat',
  'linearMeasurement': 'Pagsukat ng guhit',
  'pathDistance': 'Distansya ng daanan',
  'centerOnArea': 'I-sentro sa lugar na ito',
  'centerOnLine': 'I-sentro sa linya na ito',
  'centerOnLocation': 'I-sentro sa lokasyong ito',
  'cancel': 'Kanselahin',
  'delete': 'Tanggalin',
  'acres': 'Acres',
  'feet': 'Talampakan',
  'kilometers': 'Kilometro',
  'hectares': 'Hektarya',
  'meters': 'Metro',
  'miles': 'Milya',
  'sqfeet': 'Talampakang Kwadrado',
  'sqmeters': 'Metro Kwadrado',
  'sqmiles': 'Milya Kwadrado',
  'decPoint': '.',
  'thousandsSep': ','
};

},{}],35:[function(require,module,exports){
// fr.js
// French i18n translations

module.exports = {
  'measure': 'Mesure',
  'measureDistancesAndAreas': 'Mesurer les distances et superficies',
  'createNewMeasurement': 'Créer une nouvelle mesure',
  'startCreating': 'Débuter la création d\'une nouvelle mesure en ajoutant des points sur la carte',
  'finishMeasurement': 'Finir la mesure',
  'lastPoint': 'Dernier point',
  'area': 'Superficie',
  'perimeter': 'Périmètre',
  'pointLocation': 'Placement du point',
  'areaMeasurement': 'Mesure de superficie',
  'linearMeasurement': 'Mesure linéaire',
  'pathDistance': 'Distance du chemin',
  'centerOnArea': 'Centrer sur cette zone',
  'centerOnLine': 'Centrer sur cette ligne',
  'centerOnLocation': 'Centrer à cet endroit',
  'cancel': 'Annuler',
  'delete': 'Supprimer',
  'acres': 'Acres',
  'feet': 'Pieds',
  'kilometers': 'Kilomètres',
  'hectares': 'Hectares',
  'meters': 'Mètres',
  'miles': 'Miles',
  'sqfeet': 'Pieds carrés',
  'sqmeters': 'Mètres carrés',
  'sqmiles': 'Miles carrés',
  'decPoint': ',',
  'thousandsSep': ' '
};

},{}],36:[function(require,module,exports){
// it.js
// Italian i18n translations

module.exports = {
  'measure': 'Misura',
  'measureDistancesAndAreas': 'Misura distanze e aree',
  'createNewMeasurement': 'Crea una nuova misurazione',
  'startCreating': 'Comincia a creare una misurazione aggiungendo punti alla mappa',
  'finishMeasurement': 'Misurazione conclusa',
  'lastPoint': 'Ultimo punto',
  'area': 'Area',
  'perimeter': 'Perimetro',
  'pointLocation': 'Posizione punto',
  'areaMeasurement': 'Misura area',
  'linearMeasurement': 'Misura lineare',
  'pathDistance': 'Distanza percorso',
  'centerOnArea': 'Centra su questa area',
  'centerOnLine': 'Centra su questa linea',
  'centerOnLocation': 'Centra su questa posizione',
  'cancel': 'Annulla',
  'delete': 'Cancella',
  'acres': 'Acri',
  'feet': 'Piedi',
  'kilometers': 'Chilometri',
  'hectares': 'Ettari',
  'meters': 'Metri',
  'miles': 'Miglia',
  'sqfeet': 'Piedi quadri',
  'sqmeters': 'Metri quadri',
  'sqmiles': 'Miglia quadre',
  'decPoint': '.',
  'thousandsSep': ','
};

},{}],37:[function(require,module,exports){
// nl.js
// Dutch i18n translations

module.exports = {
  'measure': 'Meet',
  'measureDistancesAndAreas': 'Meet afstanden en oppervlakten',
  'createNewMeasurement': 'Maak een nieuwe meting',
  'startCreating': 'Begin een meting door punten toe te voegen aan de kaart',
  'finishMeasurement': 'Beëindig meting',
  'lastPoint': 'Laatste punt',
  'area': 'Oppervlakte',
  'perimeter': 'Omtrek',
  'pointLocation': 'Locatie punt',
  'areaMeasurement': 'Oppervlakte meting',
  'linearMeasurement': 'Gemeten afstand',
  'pathDistance': 'Afstand over de lijn',
  'centerOnArea': 'Centreer op dit gebied',
  'centerOnLine': 'Centreer op deze lijn',
  'centerOnLocation': 'Centreer op deze locatie',
  'cancel': 'Annuleer',
  'delete': 'Wis',
  'acres': 'are',
  'feet': 'Voet',
  'kilometers': 'km',
  'hectares': 'ha',
  'meters': 'm',
  'miles': 'Mijl',
  'sqfeet': 'Vierkante Feet',
  'sqmeters': 'm2',
  'sqmiles': 'Vierkante Mijl',
  'decPoint': ',',
  'thousandsSep': '.'
};

},{}],38:[function(require,module,exports){
// pl.js
// Polish i18n translations

module.exports = {
  'measure': 'Pomiar',
  'measureDistancesAndAreas': 'Pomiar odległości i powierzchni',
  'createNewMeasurement': 'Utwórz nowy pomiar',
  'startCreating': 'Rozpocznij tworzenie nowego pomiaru poprzez dodanie punktów na mapie',
  'finishMeasurement': 'Zakończ pomiar',
  'lastPoint': 'Ostatni punkt',
  'area': 'Powierzchnia',
  'perimeter': 'Obwód',
  'pointLocation': 'Punkt lokalizacji',
  'areaMeasurement': 'Pomiar powierzchni',
  'linearMeasurement': 'Pomiar liniowy',
  'pathDistance': 'Długość ścieżki',
  'centerOnArea': 'Środek tego obszaru',
  'centerOnLine': 'Środek tej linii',
  'centerOnLocation': 'Środek w tej lokalizacji',
  'cancel': 'Anuluj',
  'delete': 'Skasuj',
  'acres': 'akrów',
  'feet': 'stóp',
  'kilometers': 'kilometrów',
  'hectares': 'hektarów',
  'meters': 'metrów',
  'miles': 'mil',
  'sqfeet': 'stóp kwadratowych',
  'sqmeters': 'metrów kwadratowych',
  'sqmiles': 'mil kwadratowych',
  'decPoint': ',',
  'thousandsSep': '.'
};

},{}],39:[function(require,module,exports){
// pt_BR.js
// portuguese brazillian i18n translations

module.exports = {
  'measure': 'Medidas',
  'measureDistancesAndAreas': 'Mede distâncias e áreas',
  'createNewMeasurement': 'Criar nova medida',
  'startCreating': 'Comece criando uma medida, adicionando pontos no mapa',
  'finishMeasurement': 'Finalizar medida',
  'lastPoint': 'Último ponto',
  'area': 'Área',
  'perimeter': 'Perímetro',
  'pointLocation': 'Localização do ponto',
  'areaMeasurement': 'Medida de área',
  'linearMeasurement': 'Medida linear',
  'pathDistance': 'Distância',
  'centerOnArea': 'Centralizar nesta área',
  'centerOnLine': 'Centralizar nesta linha',
  'centerOnLocation': 'Centralizar nesta localização',
  'cancel': 'Cancelar',
  'delete': 'Excluir',
  'acres': 'Acres',
  'feet': 'Pés',
  'kilometers': 'Quilômetros',
  'hectares': 'Hectares',
  'meters': 'Metros',
  'miles': 'Milhas',
  'sqfeet': 'Pés²',
  'sqmeters': 'Metros²',
  'sqmiles': 'Milhas²',
  'decPoint': ',',
  'thousandsSep': '.'
};

},{}],40:[function(require,module,exports){
// en.js
// portuguese i18n translations

module.exports = {
  'measure': 'Medições',
  'measureDistancesAndAreas': 'Medir distâncias e áreas',
  'createNewMeasurement': 'Criar uma nova medição',
  'startCreating': 'Adicione pontos no mapa, para criar uma nova medição',
  'finishMeasurement': 'Finalizar medição',
  'lastPoint': 'Último ponto',
  'area': 'Área',
  'perimeter': 'Perímetro',
  'pointLocation': 'Localização do ponto',
  'areaMeasurement': 'Medição da área',
  'linearMeasurement': 'Medição linear',
  'pathDistance': 'Distância',
  'centerOnArea': 'Centrar nesta área',
  'centerOnLine': 'Centrar nesta linha',
  'centerOnLocation': 'Centrar nesta localização',
  'cancel': 'Cancelar',
  'delete': 'Eliminar',
  'acres': 'Acres',
  'feet': 'Pés',
  'kilometers': 'Kilômetros',
  'hectares': 'Hectares',
  'meters': 'Metros',
  'miles': 'Milhas',
  'sqfeet': 'Pés²',
  'sqmeters': 'Metros²',
  'sqmiles': 'Milhas²',
  'decPoint': ',',
  'thousandsSep': '.'
};


},{}],41:[function(require,module,exports){
// ru.js
// Russian i18n translations

module.exports = {
  'measure': 'Измерение',
  'measureDistancesAndAreas': 'Измерение расстояний и площади',
  'createNewMeasurement': 'Создать новое измерение',
  'startCreating': 'Для начала измерения добавьте точку на карту',
  'finishMeasurement': 'Закончить измерение',
  'lastPoint': 'Последняя точка',
  'area': 'Область',
  'perimeter': 'Периметр',
  'pointLocation': 'Местоположение точки',
  'areaMeasurement': 'Измерение области',
  'linearMeasurement': 'Линейное измерение',
  'pathDistance': 'Расстояние',
  'centerOnArea': 'Сфокусироваться на данной области',
  'centerOnLine': 'Сфокусироваться на данной линии',
  'centerOnLocation': 'Сфокусироваться на данной местности',
  'cancel': 'Отменить',
  'delete': 'Удалить',
  'acres': 'акры',
  'feet': 'фут',
  'kilometers': 'км',
  'hectares': 'га',
  'meters': 'м',
  'miles': 'миль',
  'sqfeet': 'футов²',
  'sqmeters': 'м²',
  'sqmiles': 'миль²',
  'decPoint': '.',
  'thousandsSep': ','
};

},{}],42:[function(require,module,exports){
// sv.js
// Swedish (svenska) i18n translations

module.exports = {
  'measure': 'Mäta',
  'measureDistancesAndAreas': 'Mäta avstånd och yta',
  'createNewMeasurement': 'Skapa ny mätning',
  'startCreating': 'Börja mätning genom att lägga till punkter på kartan',
  'finishMeasurement': 'Avsluta mätning',
  'lastPoint': 'Sista punkt',
  'area': 'Yta',
  'perimeter': 'Omkrets',
  'pointLocation': 'Punktens Läge',
  'areaMeasurement': 'Arealmätning',
  'linearMeasurement': 'Längdmätning',
  'pathDistance': 'Total linjelängd',
  'centerOnArea': 'Centrera på detta område',
  'centerOnLine': 'Centrera på denna linje',
  'centerOnLocation': 'Centrera på denna punkt',
  'cancel': 'Avbryt',
  'delete': 'Radera',
  'acres': 'Tunnland',
  'feet': 'Fot',
  'kilometers': 'Kilometer',
  'hectares': 'Hektar',
  'meters': 'Meter',
  'miles': 'Miles',
  'sqfeet': 'Kvadratfot',
  'sqmeters': 'Kvadratmeter',
  'sqmiles': 'Kvadratmiles',
  'decPoint': ',',
  'thousandsSep': ' '  //space
};

},{}],43:[function(require,module,exports){
// tr.js
// Turkish i18n translations

module.exports = {
  'measure': 'Hesapla',
  'measureDistancesAndAreas': 'Uzaklık ve alan hesapla',
  'createNewMeasurement': 'Yeni hesaplama',
  'startCreating': 'Yeni nokta ekleyerek hesaplamaya başla',
  'finishMeasurement': 'Hesaplamayı bitir',
  'lastPoint': 'Son nokta',
  'area': 'Alan',
  'perimeter': 'Çevre uzunluğu',
  'pointLocation': 'Nokta yeri',
  'areaMeasurement': 'Alan hesaplaması',
  'linearMeasurement': 'Doğrusal hesaplama',
  'pathDistance': 'Yol uzunluğu',
  'centerOnArea': 'Bu alana odaklan',
  'centerOnLine': 'Bu doğtuya odaklan',
  'centerOnLocation': 'Bu yere odaklan',
  'cancel': 'Çıkış',
  'delete': 'Sil',
  'acres': 'Dönüm',
  'feet': 'Feet',
  'kilometers': 'Kilometre',
  'hectares': 'Hektar',
  'meters': 'Metre',
  'miles': 'Mil',
  'sqfeet': 'Feet kare',
  'sqmeters': 'Metre kare',
  'sqmiles': 'Mil kare',
  'decPoint': '.',
  'thousandsSep': ','
};

},{}],44:[function(require,module,exports){
(function (global){
// leaflet-measure.js

var _ = require('underscore');
var L = (typeof window !== "undefined" ? window['L'] : typeof global !== "undefined" ? global['L'] : null);
var humanize = require('humanize');

var units = require('./units');
var calc = require('./calc');
var dom = require('./dom');
var $ = dom.$;

var Symbology = require('./mapsymbology');


var controlTemplate = _.template("<a class=\"<%= model.className %>-toggle js-toggle\" href=\"#\" title=\"<%= i18n.__('measureDistancesAndAreas') %>\"><%= i18n.__('measure') %></a>\n<div class=\"<%= model.className %>-interaction js-interaction\">\n  <div class=\"js-startprompt startprompt\">\n    <h3><%= i18n.__('measureDistancesAndAreas') %></h3>\n    <ul class=\"tasks\">\n      <a href=\"#\" class=\"js-start start\"><%= i18n.__('createNewMeasurement') %></a>\n    </ul>\n  </div>\n  <div class=\"js-measuringprompt\">\n    <h3><%= i18n.__('measureDistancesAndAreas') %></h3>\n    <p class=\"js-starthelp\"><%= i18n.__('startCreating') %></p>\n    <div class=\"js-results results\"></div>\n    <ul class=\"js-measuretasks tasks\">\n      <li><a href=\"#\" class=\"js-cancel cancel\"><%= i18n.__('cancel') %></a></li>\n      <li><a href=\"#\" class=\"js-finish finish\"><%= i18n.__('finishMeasurement') %></a></li>\n    </ul>\n  </div>\n</div>");
var resultsTemplate = _.template("<div class=\"group\">\n<p class=\"lastpoint heading\"><%= i18n.__('lastPoint') %></p>\n<p><%= model.lastCoord.dms.y %> <span class=\"coorddivider\">/</span> <%= model.lastCoord.dms.x %></p>\n<p><%= humanize.numberFormat(model.lastCoord.dd.y, 6) %> <span class=\"coorddivider\">/</span> <%= humanize.numberFormat(model.lastCoord.dd.x, 6) %></p>\n</div>\n<% if (model.pointCount > 1) { %>\n<div class=\"group\">\n<p><span class=\"heading\"><%= i18n.__('pathDistance') %></span> <%= model.lengthDisplay %></p>\n</div>\n<% } %>\n<% if (model.pointCount > 2) { %>\n<div class=\"group\">\n<p><span class=\"heading\"><%= i18n.__('area') %></span> <%= model.areaDisplay %></p>\n</div>\n<% } %>");
var pointPopupTemplate = _.template("<h3><%= i18n.__('pointLocation') %></h3>\n<p><%= model.lastCoord.dms.y %> <span class=\"coorddivider\">/</span> <%= model.lastCoord.dms.x %></p>\n<p><%= humanize.numberFormat(model.lastCoord.dd.y, 6) %> <span class=\"coorddivider\">/</span> <%= humanize.numberFormat(model.lastCoord.dd.x, 6) %></p>\n<ul class=\"tasks\">\n  <li><a href=\"#\" class=\"js-zoomto zoomto\"><%= i18n.__('centerOnLocation') %></a></li>\n  <li><a href=\"#\" class=\"js-deletemarkup deletemarkup\"><%= i18n.__('delete') %></a></li>\n</ul>");
var linePopupTemplate = _.template("<h3><%= i18n.__('linearMeasurement') %></h3>\n<p><%= model.lengthDisplay %></p>\n<ul class=\"tasks\">\n  <li><a href=\"#\" class=\"js-zoomto zoomto\"><%= i18n.__('centerOnLine') %></a></li>\n  <li><a href=\"#\" class=\"js-deletemarkup deletemarkup\"><%= i18n.__('delete') %></a></li>\n</ul>");
var areaPopupTemplate = _.template("<h3><%= i18n.__('areaMeasurement') %></h3>\n<p><%= model.areaDisplay %></p>\n<p><%= model.lengthDisplay %> <%= i18n.__('perimeter') %></p>\n<ul class=\"tasks\">\n  <li><a href=\"#\" class=\"js-zoomto zoomto\"><%= i18n.__('centerOnArea') %></a></li>\n  <li><a href=\"#\" class=\"js-deletemarkup deletemarkup\"><%= i18n.__('delete') %></a></li>\n</ul>");

var i18n = new (require('i18n-2'))({
  devMode: false,
  locales: {
    'ca': require('./i18n/ca'),
    'cn': require('./i18n/cn'),
    'da': require('./i18n/da'),
    'de': require('./i18n/de'),
    'de_CH': require('./i18n/de_CH'),
    'en': require('./i18n/en'),
    'en_UK': require('./i18n/en_UK'),
    'es': require('./i18n/es'),
    'fa': require('./i18n/fa'),
    'fil_PH': require('./i18n/fil_PH'),
    'fr': require('./i18n/fr'),
    'it': require('./i18n/it'),
    'nl': require('./i18n/nl'),
    'pl': require('./i18n/pl'),
    'pt_BR': require('./i18n/pt_BR'),
    'pt_PT': require('./i18n/pt_PT'),
    'ru': require('./i18n/ru'),
    'sv': require('./i18n/sv'),
    'tr': require('./i18n/tr')
  }
});

L.Control.Measure = L.Control.extend({
  _className: 'leaflet-control-measure',
  options: {
    units: {},
    position: 'topright',
    primaryLengthUnit: 'feet',
    secondaryLengthUnit: 'miles',
    primaryAreaUnit: 'acres',
    activeColor: '#ABE67E',     // base color for map features while actively measuring
    completedColor: '#C8F2BE',  // base color for permenant features generated from completed measure
    captureZIndex: 10000,       // z-index of the marker used to capture measure events
    popupOptions: {             // standard leaflet popup options http://leafletjs.com/reference.html#popup-options
      className: 'leaflet-measure-resultpopup',
      autoPanPadding: [10, 10]
    }
  },
  initialize: function (options) {
    L.setOptions(this, options);
    this.options.units = L.extend({}, units, this.options.units);
    this._symbols = new Symbology(_.pick(this.options, 'activeColor', 'completedColor'));
    i18n.setLocale(this.options.localization);
  },
  onAdd: function (map) {
    this._map = map;
    this._latlngs = [];
    this._initLayout();
    map.on('click', this._collapse, this);
    this._layer = L.layerGroup().addTo(map);
    return this._container;
  },
  onRemove: function (map) {
    map.off('click', this._collapse, this);
    map.removeLayer(this._layer);
  },
  _initLayout: function () {
    var className = this._className, container = this._container = L.DomUtil.create('div', className);
    var $toggle, $start, $cancel, $finish;

    container.innerHTML = controlTemplate({
      model: {
        className: className
      },
      i18n: i18n
    });

    // copied from leaflet
    // https://bitbucket.org/ljagis/js-mapbootstrap/src/4ab1e9e896c08bdbc8164d4053b2f945143f4f3a/app/components/measure/leaflet-measure-control.js?at=master#cl-30
    container.setAttribute('aria-haspopup', true);
    if (!L.Browser.touch) {
      L.DomEvent.disableClickPropagation(container);
      L.DomEvent.disableScrollPropagation(container);
    } else {
      L.DomEvent.on(container, 'click', L.DomEvent.stopPropagation);
    }

    $toggle = this.$toggle = $('.js-toggle', container);         // collapsed content
    this.$interaction = $('.js-interaction', container);         // expanded content
    $start = $('.js-start', container);                          // start button
    $cancel = $('.js-cancel', container);                        // cancel button
    $finish = $('.js-finish', container);                        // finish button
    this.$startPrompt = $('.js-startprompt', container);         // full area with button to start measurment
    this.$measuringPrompt = $('.js-measuringprompt', container); // full area with all stuff for active measurement
    this.$startHelp = $('.js-starthelp', container);             // "Start creating a measurement by adding points"
    this.$results = $('.js-results', container);                 // div with coordinate, linear, area results
    this.$measureTasks = $('.js-measuretasks', container);       // active measure buttons container

    this._collapse();
    this._updateMeasureNotStarted();

    if (!L.Browser.android) {
      L.DomEvent.on(container, 'mouseenter', this._expand, this);
      L.DomEvent.on(container, 'mouseleave', this._collapse, this);
    }
    L.DomEvent.on($toggle, 'click', L.DomEvent.stop);
    if (L.Browser.touch) {
      L.DomEvent.on($toggle, 'click', this._expand, this);
    } else {
      L.DomEvent.on($toggle, 'focus', this._expand, this);
    }
    L.DomEvent.on($start, 'click', L.DomEvent.stop);
    L.DomEvent.on($start, 'click', this._startMeasure, this);
    L.DomEvent.on($cancel, 'click', L.DomEvent.stop);
    L.DomEvent.on($cancel, 'click', this._finishMeasure, this);
    L.DomEvent.on($finish, 'click', L.DomEvent.stop);
    L.DomEvent.on($finish, 'click', this._handleMeasureDoubleClick, this);
  },
  _expand: function () {
    dom.hide(this.$toggle);
    dom.show(this.$interaction);
  },
  _collapse: function () {
    if (!this._locked) {
      dom.hide(this.$interaction);
      dom.show(this.$toggle);
    }
  },
  // move between basic states:
  // measure not started, started/in progress but no points added, in progress and with points
  _updateMeasureNotStarted: function () {
    dom.hide(this.$startHelp);
    dom.hide(this.$results);
    dom.hide(this.$measureTasks);
    dom.hide(this.$measuringPrompt);
    dom.show(this.$startPrompt);
  },
  _updateMeasureStartedNoPoints: function () {
    dom.hide(this.$results);
    dom.show(this.$startHelp);
    dom.show(this.$measureTasks);
    dom.hide(this.$startPrompt);
    dom.show(this.$measuringPrompt);
  },
  _updateMeasureStartedWithPoints: function () {
    dom.hide(this.$startHelp);
    dom.show(this.$results);
    dom.show(this.$measureTasks);
    dom.hide(this.$startPrompt);
    dom.show(this.$measuringPrompt);
  },
  // get state vars and interface ready for measure
  _startMeasure: function () {
    this._locked = true;
    this._measureVertexes = L.featureGroup().addTo(this._layer);
    this._captureMarker = L.marker(this._map.getCenter(), {
      clickable: true,
      zIndexOffset: this.options.captureZIndex,
      opacity: 0
    }).addTo(this._layer);
    this._setCaptureMarkerIcon();

    this._captureMarker
      .on('mouseout', this._handleMapMouseOut, this)
      .on('dblclick', this._handleMeasureDoubleClick, this)
      .on('click', this._handleMeasureClick, this);

    this._map
      .on('mousemove', this._handleMeasureMove, this)
      .on('mouseout', this._handleMapMouseOut, this)
      .on('move', this._centerCaptureMarker, this)
      .on('resize', this._setCaptureMarkerIcon, this);

    L.DomEvent.on(this._container, 'mouseenter', this._handleMapMouseOut, this);

    this._updateMeasureStartedNoPoints();

    this._map.fire('measurestart', null, false);
  },
  // return to state with no measure in progress, undo `this._startMeasure`
  _finishMeasure: function () {
    var model = _.extend({}, this._resultsModel, {
      points: this._latlngs
    });

    this._locked = false;

    L.DomEvent.off(this._container, 'mouseover', this._handleMapMouseOut, this);

    this._clearMeasure();

    this._captureMarker
      .off('mouseout', this._handleMapMouseOut, this)
      .off('dblclick', this._handleMeasureDoubleClick, this)
      .off('click', this._handleMeasureClick, this);

    this._map
      .off('mousemove', this._handleMeasureMove, this)
      .off('mouseout', this._handleMapMouseOut, this)
      .off('move', this._centerCaptureMarker, this)
      .off('resize', this._setCaptureMarkerIcon, this);

    this._layer
      .removeLayer(this._measureVertexes)
      .removeLayer(this._captureMarker);
    this._measureVertexes = null;

    this._updateMeasureNotStarted();
    this._collapse();

    this._map.fire('measurefinish', model, false);
  },
  // clear all running measure data
  _clearMeasure: function () {
    this._latlngs = [];
    this._resultsModel = null;
    this._measureVertexes.clearLayers();
    if (this._measureDrag) {
      this._layer.removeLayer(this._measureDrag);
    }
    if (this._measureArea) {
      this._layer.removeLayer(this._measureArea);
    }
    if (this._measureBoundary) {
      this._layer.removeLayer(this._measureBoundary);
    }
    this._measureDrag = null;
    this._measureArea = null;
    this._measureBoundary = null;
  },
  // centers the event capture marker
  _centerCaptureMarker: function () {
    this._captureMarker.setLatLng(this._map.getCenter());
  },
  // set icon on the capture marker
  _setCaptureMarkerIcon: function () {
    // Use an oversized divIcon centered on the map to capture clicks.
    // In Leaflet 1.9.x the default iconAnchor for a divIcon is not centered,
    // which can shift the clickable area after zoom/pan. Anchor the icon to
    // the center so screen clicks are translated to the correct latlng.
    var mapSize = this._map.getSize();
    this._captureMarker.setIcon(L.divIcon({
      iconSize: mapSize.multiplyBy(2),
      iconAnchor: mapSize, // center the 2x-sized icon on the marker latlng (map center)
    }));
  },
  // format measurements to nice display string based on units in options
  // `{ lengthDisplay: '100 Feet (0.02 Miles)', areaDisplay: ... }`
  _getMeasurementDisplayStrings: function (measurement) {
    var unitDefinitions = this.options.units;

    return {
      lengthDisplay: buildDisplay(measurement.length, this.options.primaryLengthUnit, this.options.secondaryLengthUnit, this.options.decPoint, this.options.thousandsSep),
      areaDisplay: buildDisplay(measurement.area, this.options.primaryAreaUnit, this.options.secondaryAreaUnit, this.options.decPoint, this.options.thousandsSep)
    };

    function buildDisplay (val, primaryUnit, secondaryUnit, decPoint, thousandsSep) {
      var display;
      if (primaryUnit && unitDefinitions[primaryUnit]) {
        display = formatMeasure(val, unitDefinitions[primaryUnit], decPoint, thousandsSep);
        if (secondaryUnit && unitDefinitions[secondaryUnit]) {
          display = display + ' (' +  formatMeasure(val, unitDefinitions[secondaryUnit], decPoint, thousandsSep) + ')';
        }
      } else {
        display = formatMeasure(val, null, decPoint, thousandsSep);
      }
      return display;
    }

    function formatMeasure (val, unit, decPoint, thousandsSep) {
      return unit && unit.factor && unit.display ?
        humanize.numberFormat(val * unit.factor, unit.decimals || 0, decPoint || i18n.__('decPoint'), thousandsSep || i18n.__('thousandsSep')) + ' ' + i18n.__([unit.display]) || unit.display :
        humanize.numberFormat(val, 0, decPoint || i18n.__('decPoint'), thousandsSep || i18n.__('thousandsSep'));
    }
  },
  // update results area of dom with calced measure from `this._latlngs`
  _updateResults: function () {
    var calced = calc.measure(this._latlngs);
    var resultsModel = this._resultsModel = _.extend({}, calced, this._getMeasurementDisplayStrings(calced), {
      pointCount: this._latlngs.length
    });
    this.$results.innerHTML = resultsTemplate({
      model: resultsModel,
      humanize: humanize,
      i18n: i18n
    });
  },
  // mouse move handler while measure in progress
  // adds floating measure marker under cursor
  _handleMeasureMove: function (evt) {
    if (!this._measureDrag) {
      this._measureDrag = L.circleMarker(evt.latlng, this._symbols.getSymbol('measureDrag')).addTo(this._layer);
    } else {
      this._measureDrag.setLatLng(evt.latlng);
    }
    this._measureDrag.bringToFront();
  },
  // handler for both double click and clicking finish button
  // do final calc and finish out current measure, clear dom and internal state, add permanent map features
  _handleMeasureDoubleClick: function () {
    var latlngs = this._latlngs, calced, resultFeature, popupContainer, popupContent, zoomLink, deleteLink;

    this._finishMeasure();

    if (!latlngs.length) {
      return;
    }

    if (latlngs.length > 2) {
      latlngs.push(_.first(latlngs)); // close path to get full perimeter measurement for areas
    }

    calced = calc.measure(latlngs);

    if (latlngs.length === 1) {
      resultFeature = L.circleMarker(latlngs[0], this._symbols.getSymbol('resultPoint'));
      popupContent = pointPopupTemplate({
        model: calced,
        humanize: humanize,
        i18n: i18n
      });
    } else if (latlngs.length === 2) {
      resultFeature = L.polyline(latlngs, this._symbols.getSymbol('resultLine'));
      popupContent = linePopupTemplate({
        model: _.extend({}, calced, this._getMeasurementDisplayStrings(calced)),
        humanize: humanize,
        i18n: i18n
      });
    } else {
      resultFeature = L.polygon(latlngs, this._symbols.getSymbol('resultArea'));
      popupContent = areaPopupTemplate({
        model: _.extend({}, calced, this._getMeasurementDisplayStrings(calced)),
        humanize: humanize,
        i18n: i18n
      });
    }

    popupContainer = L.DomUtil.create('div', '');
    popupContainer.innerHTML = popupContent;

    zoomLink = $('.js-zoomto', popupContainer);
    if (zoomLink) {
      L.DomEvent.on(zoomLink, 'click', L.DomEvent.stop);
      L.DomEvent.on(zoomLink, 'click', function () {
        if (resultFeature.getBounds) {
          this._map.fitBounds(resultFeature.getBounds(), {
            padding: [20, 20],
            maxZoom: 17
          });
        } else if (resultFeature.getLatLng) {
          this._map.panTo(resultFeature.getLatLng());
        }
      }, this);
    }

    deleteLink = $('.js-deletemarkup', popupContainer);
    if (deleteLink) {
      L.DomEvent.on(deleteLink, 'click', L.DomEvent.stop);
      L.DomEvent.on(deleteLink, 'click', function () {
        // TODO. maybe remove any event handlers on zoom and delete buttons?
        this._layer.removeLayer(resultFeature);
      }, this);
    }

    resultFeature.addTo(this._layer);
    resultFeature.bindPopup(popupContainer, this.options.popupOptions);
    if (resultFeature.getBounds) {
      resultFeature.openPopup(resultFeature.getBounds().getCenter());
    } else if (resultFeature.getLatLng) {
      resultFeature.openPopup(resultFeature.getLatLng());
    }
  },
  // handle map click during ongoing measurement
  // add new clicked point, update measure layers and results ui
  _handleMeasureClick: function (evt) {
    var latlng = this._map.mouseEventToLatLng(evt.originalEvent), // get actual latlng instead of the marker's latlng from originalEvent
      lastClick = _.last(this._latlngs),
      vertexSymbol = this._symbols.getSymbol('measureVertex');

    if (!lastClick || !latlng.equals(lastClick)) { // skip if same point as last click, happens on `dblclick`
      this._latlngs.push(latlng);
      this._addMeasureArea(this._latlngs);
      this._addMeasureBoundary(this._latlngs);

      this._measureVertexes.eachLayer(function (layer) {
        layer.setStyle(vertexSymbol);
        // reset all vertexes to non-active class - only last vertex is active
        // `layer.setStyle({ className: 'layer-measurevertex'})` doesn't work. https://github.com/leaflet/leaflet/issues/2662
        // set attribute on path directly
        layer._path.setAttribute('class', vertexSymbol.className);
      });

      this._addNewVertex(latlng);

      if (this._measureBoundary) {
        this._measureBoundary.bringToFront();
      }
      this._measureVertexes.bringToFront();
    }

    this._updateResults();
    this._updateMeasureStartedWithPoints();
  },
  // handle map mouse out during ongoing measure
  // remove floating cursor vertex from map
  _handleMapMouseOut: function () {
    if (this._measureDrag) {
      this._layer.removeLayer(this._measureDrag);
      this._measureDrag = null;
    }
  },
  // add various measure graphics to map - vertex, area, boundary
  _addNewVertex: function (latlng) {
    L.circleMarker(latlng, this._symbols.getSymbol('measureVertexActive')).addTo(this._measureVertexes);
  },
  _addMeasureArea: function (latlngs) {
    if (latlngs.length < 3) {
      if (this._measureArea) {
        this._layer.removeLayer(this._measureArea);
        this._measureArea = null;
      }
      return;
    }
    if (!this._measureArea) {
      this._measureArea = L.polygon(latlngs, this._symbols.getSymbol('measureArea')).addTo(this._layer);
    } else {
      this._measureArea.setLatLngs(latlngs);
    }
  },
  _addMeasureBoundary: function (latlngs) {
    if (latlngs.length < 2) {
      if (this._measureBoundary) {
        this._layer.removeLayer(this._measureBoundary);
        this._measureBoundary = null;
      }
      return;
    }
    if (!this._measureBoundary) {
      this._measureBoundary = L.polyline(latlngs, this._symbols.getSymbol('measureBoundary')).addTo(this._layer);
    } else {
      this._measureBoundary.setLatLngs(latlngs);
    }
  }
});

L.Map.mergeOptions({
  measureControl: false
});

L.Map.addInitHook(function () {
  if (this.options.measureControl) {
    this.measureControl = (new L.Control.Measure()).addTo(this);
  }
});

L.control.measure = function (options) {
  return new L.Control.Measure(options);
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./calc":23,"./dom":24,"./i18n/ca":25,"./i18n/cn":26,"./i18n/da":27,"./i18n/de":28,"./i18n/de_CH":29,"./i18n/en":30,"./i18n/en_UK":31,"./i18n/es":32,"./i18n/fa":33,"./i18n/fil_PH":34,"./i18n/fr":35,"./i18n/it":36,"./i18n/nl":37,"./i18n/pl":38,"./i18n/pt_BR":39,"./i18n/pt_PT":40,"./i18n/ru":41,"./i18n/sv":42,"./i18n/tr":43,"./mapsymbology":45,"./units":46,"humanize":16,"i18n-2":18,"underscore":22}],45:[function(require,module,exports){
// mapsymbology.js

var _ = require('underscore');

var color = require('color');

var Symbology = function (options) {
  this.setOptions(options);
};

Symbology.DEFAULTS = {
  activeColor: '#ABE67E',    // base color for map features while actively measuring
  completedColor: '#C8F2BE'  // base color for permenant features generated from completed measure
};

_.extend(Symbology.prototype, {
  setOptions: function (options) {
    this._options = _.extend({}, Symbology.DEFAULTS, this._options, options);
    return this;
  },
  getSymbol: function (name) {
    var symbols = {
      measureDrag: {
        clickable: false,
        radius: 4,
        color: this._options.activeColor,
        weight: 2,
        opacity: 0.7,
        fillColor: this._options.activeColor,
        fillOpacity: 0.5,
        className: 'layer-measuredrag'
      },
      measureArea: {
        clickable: false,
        stroke: false,
        fillColor: this._options.activeColor,
        fillOpacity: 0.2,
        className: 'layer-measurearea'
      },
      measureBoundary: {
        clickable: false,
        color: this._options.activeColor,
        weight: 2,
        opacity: 0.9,
        fill: false,
        className: 'layer-measureboundary'
      },
      measureVertex: {
        clickable: false,
        radius: 4,
        color: this._options.activeColor,
        weight: 2,
        opacity: 1,
        fillColor: this._options.activeColor,
        fillOpacity: 0.7,
        className: 'layer-measurevertex'
      },
      measureVertexActive: {
        clickable: false,
        radius: 4,
        color: this._options.activeColor,
        weight: 2,
        opacity: 1,
        fillColor: color(this._options.activeColor).darken(0.15),
        fillOpacity: 0.7,
        className: 'layer-measurevertex active'
      },
      resultArea: {
        clickable: true,
        color: this._options.completedColor,
        weight: 2,
        opacity: 0.9,
        fillColor: this._options.completedColor,
        fillOpacity: 0.2,
        className: 'layer-measure-resultarea'
      },
      resultLine: {
        clickable: true,
        color: this._options.completedColor,
        weight: 3,
        opacity: 0.9,
        fill: false,
        className: 'layer-measure-resultline'
      },
      resultPoint: {
        clickable: true,
        radius: 4,
        color: this._options.completedColor,
        weight: 2,
        opacity: 1,
        fillColor: this._options.completedColor,
        fillOpacity: 0.7,
        className: 'layer-measure-resultpoint'
      }
    };
    return symbols[name];
  }
});

module.exports = Symbology;
},{"color":6,"underscore":22}],46:[function(require,module,exports){
// units.js
// Unit configurations
// Factor is with respect to meters/sqmeters

module.exports = {
  acres: {
    factor: 0.00024711,
    display: 'acres',
    decimals: 2
  },
  feet: {
    factor: 3.2808,
    display: 'feet',
    decimals: 0
  },
  kilometers: {
    factor: 0.001,
    display: 'kilometers',
    decimals: 2
  },
  hectares: {
    factor: 0.0001,
    display: 'hectares',
    decimals: 2
  },
  meters: {
    factor: 1,
    display: 'meters',
    decimals: 0
  },
  miles: {
    factor: 3.2808 / 5280,
    display: 'miles',
    decimals: 2
  },
  sqfeet: {
    factor: 10.7639,
    display: 'sqfeet',
    decimals: 0
  },
  sqmeters: {
    factor: 1,
    display: 'sqmeters',
    decimals: 0
  },
  sqmiles: {
    factor: 0.000000386102,
    display: 'sqmiles',
    decimals: 2
  }
};
},{}]},{},[44]);

L.SVG.include({_updateShape:function(t){var i=t._point,s=t._radius,e=t.options.shape;if("diamond"===e){var n="M"+(i.x-s)+" "+i.y+" L "+i.x+" "+(i.y-s)+" L"+(i.x+s)+" "+i.y+" L"+i.x+" "+(i.y+s)+" L"+(i.x-s)+" "+i.y;this._setPath(t,n)}if("square"===e){var n="M"+(i.x-s)+" "+(i.y-s)+" L "+(i.x+s)+" "+(i.y-s)+" L"+(i.x+s)+" "+(i.y+s)+" L"+(i.x-s)+" "+(i.y+s)+" L"+(i.x-s)+" "+(i.y-s);this._setPath(t,n)}if("triangle"===e||"triangle-up"===e){var n="M"+(i.x-s)+" "+(i.y+s)+" L"+i.x+" "+(i.y-s)+" L"+(i.x+s)+" "+(i.y+s)+" Z";this._setPath(t,n)}if("triangle-down"===e){var n="M"+(i.x-s)+" "+(i.y-s)+" L"+i.x+" "+(i.y+s)+" L"+(i.x+s)+" "+(i.y-s)+" Z";this._setPath(t,n)}if("circle"===e&&this._updateCircle(t),"x"===e){s/=2;var n="M"+(i.x+s)+","+(i.y+s)+"L"+(i.x-s)+","+(i.y-s)+"M"+(i.x-s)+","+(i.y+s)+"L"+(i.x+s)+","+(i.y-s);this._setPath(t,n)}}}),L.ShapeMarker=L.Path.extend({options:{fill:!0,shape:"triangle",radius:10},initialize:function(t,i){L.setOptions(this,i),this._latlng=L.latLng(t),this._radius=this.options.radius},setLatLng:function(t){return this._latlng=L.latLng(t),this.redraw(),this.fire("move",{latlng:this._latlng})},getLatLng:function(){return this._latlng},setRadius:function(t){return this.options.radius=this._radius=t,this.redraw()},getRadius:function(){return this._radius},setStyle:function(t){var i=t&&t.radius||this._radius;return L.Path.prototype.setStyle.call(this,t),this.setRadius(i),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var t=this._radius,i=this._radiusY||t,s=this._clickTolerance(),e=[t+s,i+s];this._pxBounds=new L.Bounds(this._point.subtract(e),this._point.add(e))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateShape(this)},_empty:function(){return this._size&&!this._renderer._bounds.intersects(this._pxBounds)},toGeoJSON:function(){return L.GeoJSON.getFeature(this,{type:"Point",coordinates:L.GeoJSON.latLngToCoords(this.getLatLng())})}}),L.shapeMarker=function(t,i){return new L.ShapeMarker(t,i)};
L.TileLayer.WMTS=L.TileLayer.extend({defaultWmtsParams:{service:"WMTS",request:"GetTile",version:"1.0.0",layer:"",style:"",tilematrixSet:"",format:"image/jpeg"},initialize:function(e,t){this._url=e;var n=L.extend({},this.defaultWmtsParams),r=t.tileSize||this.options.tileSize;if(t.detectRetina&&L.Browser.retina){n.width=n.height=r*2}else{n.width=n.height=r}for(var i in t){if(!this.options.hasOwnProperty(i)&&i!="matrixIds"){n[i]=t[i]}}this.wmtsParams=n;this.matrixIds=t.matrixIds||this.getDefaultMatrix();L.setOptions(this,t)},onAdd:function(e){L.TileLayer.prototype.onAdd.call(this,e)},getTileUrl:function(e,t){var n=this._map;crs=n.options.crs;tileSize=this.options.tileSize;nwPoint=e.multiplyBy(tileSize);nwPoint.x+=1;nwPoint.y-=1;sePoint=nwPoint.add(new L.Point(tileSize,tileSize));nw=crs.project(n.unproject(nwPoint,t));se=crs.project(n.unproject(sePoint,t));tilewidth=se.x-nw.x;t=n.getZoom();ident=this.matrixIds[t].identifier;X0=this.matrixIds[t].topLeftCorner.lng;Y0=this.matrixIds[t].topLeftCorner.lat;tilecol=Math.floor((nw.x-X0)/tilewidth);tilerow=-Math.floor((nw.y-Y0)/tilewidth);url=L.Util.template(this._url,{s:this._getSubdomain(e)});return url+L.Util.getParamString(this.wmtsParams,url)+"&tilematrix="+ident+"&tilerow="+tilerow+"&tilecol="+tilecol},setParams:function(e,t){L.extend(this.wmtsParams,e);if(!t){this.redraw()}return this},getDefaultMatrix:function(){var e=new Array(22);for(var t=0;t<22;t++){e[t]={identifier:""+t,topLeftCorner:new L.LatLng(20037508.3428,-20037508.3428)}}return e}});L.tileLayer.wmts=function(e,t){return new L.TileLayer.WMTS(e,t)}

!(function () {
    var yes = function () { return true; };

    L.GeoJSON.MultiStyle = L.GeoJSON.extend({
        options: {
            styles: [
                {color: 'black', opacity: 0.15, weight: 9},
                {color: 'white', opacity: 0.8, weight: 6},
                {color: '#444', opacity: 1, weight: 2}
            ],
            pointToLayer: function(feature, latlng) {
                return L.circleMarker(latlng, {radius: 0})
            },
            filters: [yes, yes, yes]
        },

        addData: function(data) {
            if (!this._isAdding) {
                this._isAdding = true;
                if (this.options.styles) {
                    var styler = this.options.style,
                        filter = this.options.filter;
                    this.options.styles.forEach(L.bind(function(style, i) {
                        this.options.style = style;
                        if (this.options.filters && this.options.filters[i]) {
                            this.options.filter = this.options.filters[i];
                        }
                        L.GeoJSON.prototype.addData.call(this, data);
                    }, this));
                }
                if (this.options.pointToLayers) {
                    this.options.pointToLayers.forEach(L.bind(function(pointToLayer, i) {
                        this.options.pointToLayer = pointToLayer;
                        if (this.options.filters && this.options.filters[i]) {
                            this.options.filter = this.options.filters[i];
                        }
                        L.GeoJSON.prototype.addData.call(this, data);
                    }, this));
                }
                this.options.style = styler;
                this.options.filter = filter;
                this._isAdding = false;
            } else {
                L.GeoJSON.prototype.addData.call(this, data);
            }
        }
    });

    L.geoJson.multiStyle = function(data, options) {
        return new L.GeoJSON.MultiStyle(data, options);
    }
})();

(function(ca){function S(b,a){var c=b.x-a.x,d=b.y-a.y;return c*c+d*d}function va(b){var a=b.length;if(16>a)return!1;var c,d=Infinity,f=-Infinity,e=Infinity,g=-Infinity;for(c=0;c<a-1;c+=2)d=Math.min(d,b[c]),f=Math.max(f,b[c]),e=Math.min(e,b[c+1]),g=Math.max(g,b[c+1]);c=f-d;g-=e;f=c/g;if(0.85>f||1.15<f)return!1;d={x:d+c/2,y:e+g/2};c=(c+g)/4;e=c*c;for(c=0;c<a-1;c+=2)if(g=S({x:b[c],y:b[c+1]},d),0.8>g/e||1.2<g/e)return!1;return!0}function ja(b,a){var c={};b/=T;a/=T;var d=wa,f;f=0>=a?90:1<=a?-90:(2*xa(ya(E*
(1-2*a)))-J)/E*180;c[d]=f;c[za]=360*(1===b?1:(b%1+1)%1)-180;return c}function da(b,a){var c=U(1,K(0,0.5-Aa(ka(Ba+J*b/180))/E/2));return{x:(a/360+0.5)*T<<0,y:c*T<<0}}function V(b){for(var a=B+p,c=v+n,d=0,f=b.length-3;d<f;d+=2)if(b[d]>p&&b[d]<a&&b[d+1]>n&&b[d+1]<c)return!0;return!1}function Ca(){$||($=setInterval(function(){for(var b=F.items,a=!1,c=0,d=b.length;c<d;c++)1>b[c].scale&&(b[c].scale+=0.1,1<b[c].scale&&(b[c].scale=1),a=!0);A.render();a||(clearInterval($),$=null)},33))}function ea(b){M=W+
b.x;N=v+b.y;A.render(!0)}function la(b){B=b.width;v=b.height;W=B/2<<0;fa=v/2<<0;M=W;N=v;A.setSize(B,v);ga=q-50}function ma(b){x=b;T=Da<<x;b=ja(p+W,n+fa);var a=da(b.latitude,0);na=da(b.latitude,1).x-a.x;C=oa(0.95,x-G);ha=""+H.alpha(C);aa=""+ba.alpha(C);X=""+O.alpha(C)}var u=Math,ya=u.exp,Aa=u.log,Ea=u.sin,Fa=u.cos,ka=u.tan,xa=u.atan,P=u.atan2,U=u.min,K=u.max,pa=u.sqrt,qa=u.ceil,oa=u.pow,ra=ra||Array,sa=sa||Array,u=/iP(ad|hone|od)/g.test(navigator.userAgent),t=!!~navigator.userAgent.indexOf("Trident"),
Ga=!ca.requestAnimationFrame||u||t?function(b){b()}:ca.requestAnimationFrame,I=function(b){function a(a,b,c){0>c&&(c+=1);1<c&&(c-=1);return c<1/6?a+6*(b-a)*c:0.5>c?b:c<2/3?a+(b-a)*(2/3-c)*6:a}var c={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",grey:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",orange:"#ffa500",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00"},d=function(a,b,
c,d){this.H=a;this.S=b;this.L=c;this.A=d};d.parse=function(a){var b=0,d=0,h=0,k=1,m;a=(""+a).toLowerCase();a=c[a]||a;if(m=a.match(/^#(\w{2})(\w{2})(\w{2})$/))b=parseInt(m[1],16),d=parseInt(m[2],16),h=parseInt(m[3],16);else if(m=a.match(/rgba?\((\d+)\D+(\d+)\D+(\d+)(\D+([\d.]+))?\)/))b=parseInt(m[1],10),d=parseInt(m[2],10),h=parseInt(m[3],10),k=m[4]?parseFloat(m[5]):1;else return;return this.fromRGBA(b,d,h,k)};d.fromRGBA=function(a,b,c,h){"object"===typeof a?(b=a.g/255,c=a.b/255,h=a.a,a=a.r/255):(a/=
255,b/=255,c/=255);var k=Math.max(a,b,c),m=Math.min(a,b,c),l,y=(k+m)/2,s=k-m;if(s){m=0.5<y?s/(2-k-m):s/(k+m);switch(k){case a:l=(b-c)/s+(b<c?6:0);break;case b:l=(c-a)/s+2;break;case c:l=(a-b)/s+4}l*=60}else l=m=0;return new d(l,m,y,h)};d.prototype={toRGBA:function(){var b=Math.min(360,Math.max(0,this.H)),c=Math.min(1,Math.max(0,this.S)),d=Math.min(1,Math.max(0,this.L)),h=Math.min(1,Math.max(0,this.A)),k;if(0===c)b=k=c=d;else{var m=0.5>d?d*(1+c):d+c-d*c,d=2*d-m,b=b/360,c=a(d,m,b+1/3);k=a(d,m,b);b=
a(d,m,b-1/3)}return{r:Math.round(255*c),g:Math.round(255*k),b:Math.round(255*b),a:h}},toString:function(){var a=this.toRGBA();return 1===a.a?"#"+(16777216+(a.r<<16)+(a.g<<8)+a.b).toString(16).slice(1,7):"rgba("+[a.r,a.g,a.b,a.a.toFixed(2)].join()+")"},hue:function(a){return new d(this.H*a,this.S,this.L,this.A)},saturation:function(a){return new d(this.H,this.S*a,this.L,this.A)},lightness:function(a){return new d(this.H,this.S,this.L*a,this.A)},alpha:function(a){return new d(this.H,this.S,this.L,this.A*
a)}};return d}(this),Ha=function(){var b=Math,a=b.PI,c=b.sin,d=b.cos,f=b.tan,e=b.asin,g=b.atan2,h=a/180,k=23.4397*h;return function(b,l,y){y=h*-y;l*=h;b=b.valueOf()/864E5-0.5+2440588-2451545;var s=h*(357.5291+0.98560028*b),D;D=h*(1.9148*c(s)+0.02*c(2*s)+3E-4*c(3*s));D=s+D+102.9372*h+a;s=e(c(0)*d(k)+d(0)*c(k)*c(D));D=g(c(D)*d(k)-f(0)*c(k),d(D));b=h*(280.16+360.9856235*b)-y-D;y=e(c(l)*c(s)+d(l)*d(s)*d(b));l=g(c(b),d(b)*c(l)-f(s)*d(l));return{altitude:y,azimuth:l-a/2}}}(),Ja=function(){function b(a){a=
a.toLowerCase();return"#"===a[0]?a:d[f[a]||a]||null}function a(a,b){var c,d,f,s,D=0,p,n;p=0;for(n=a.length-3;p<n;p+=2)c=a[p],d=a[p+1],f=a[p+2],s=a[p+3],D+=c*s-f*d;if((0<D/2?e:g)===b)return a;c=[];for(d=a.length-2;0<=d;d-=2)c.push(a[d],a[d+1]);return c}function c(b){var d,f,l=[],y;switch(b.type){case "GeometryCollection":l=[];d=0;for(f=b.geometries.length;d<f;d++)(y=c(b.geometries[d]))&&l.push.apply(l,y);return l;case "MultiPolygon":l=[];d=0;for(f=b.coordinates.length;d<f;d++)(y=c({type:"Polygon",
coordinates:b.coordinates[d]}))&&l.push.apply(l,y);return l;case "Polygon":b=b.coordinates;break;default:return[]}var s,p=[],n=[];s=b[0];d=0;for(f=s.length;d<f;d++)p.push(s[d][1],s[d][0]);p=a(p,e);d=0;for(f=b.length-1;d<f;d++){s=b[d+1];n[d]=[];l=0;for(y=s.length;l<y;l++)n[d].push(s[l][1],s[l][0]);n[d]=a(n[d],g)}return[{outer:p,inner:n.length?n:null}]}var d={brick:"#cc7755",bronze:"#ffeecc",canvas:"#fff8f0",concrete:"#999999",copper:"#a0e0d0",glass:"#e8f8f8",gold:"#ffcc00",plants:"#009933",metal:"#aaaaaa",
panel:"#fff8f0",plaster:"#999999",roof_tiles:"#f08060",silver:"#cccccc",slate:"#666666",stone:"#996666",tar_paper:"#333333",wood:"#deb887"},f={asphalt:"tar_paper",bitumen:"tar_paper",block:"stone",bricks:"brick",glas:"glass",glassfront:"glass",grass:"plants",masonry:"stone",granite:"stone",panels:"panel",paving_stones:"stone",plastered:"plaster",rooftiles:"roof_tiles",roofingfelt:"tar_paper",sandstone:"stone",sheet:"canvas",sheets:"canvas",shingle:"tar_paper",shingles:"tar_paper",slates:"slate",steel:"metal",
tar:"tar_paper",tent:"canvas",thatch:"plants",tile:"roof_tiles",tiles:"roof_tiles"},e="CW",g="CCW";return{read:function(a){if(!a||"FeatureCollection"!==a.type)return[];a=a.features;var d,f,e,g,p=[],n,q,t,r;d=0;for(f=a.length;d<f;d++)if(n=a[d],"Feature"===n.type&&!1!==ta(n)){e=n.properties;g={};e=e||{};g.height=e.height||(e.levels?3*e.levels:Ia);g.minHeight=e.minHeight||(e.minLevel?3*e.minLevel:0);if(q=e.material?b(e.material):e.wallColor||e.color)g.wallColor=q;if(q=e.roofMaterial?b(e.roofMaterial):
e.roofColor)g.roofColor=q;switch(e.shape){case "cylinder":case "cone":case "dome":case "sphere":g.shape=e.shape;g.isRotational=!0;break;case "pyramid":g.shape=e.shape}switch(e.roofShape){case "cone":case "dome":g.roofShape=e.roofShape;g.isRotational=!0;break;case "pyramid":g.roofShape=e.roofShape}g.roofShape&&e.roofHeight?(g.roofHeight=e.roofHeight,g.height=K(0,g.height-g.roofHeight)):g.roofHeight=0;t=g;q=c(n.geometry);e=0;for(g=q.length;e<g;e++){r=t;var w={},u=void 0;for(u in r)r.hasOwnProperty(u)&&
(w[u]=r[u]);r=w;r.footprint=q[e].outer;if(r.isRotational){for(var w=r,u=r.footprint,x=180,z=-180,v=0,A=u.length;v<A;v+=2)x=U(x,u[v+1]),z=K(z,u[v+1]);w.radius=(z-x)/2}q[e].inner&&(r.holes=q[e].inner);if(n.id||n.properties.id)r.id=n.id||n.properties.id;n.properties.relationId&&(r.relationId=n.properties.relationId);p.push(r)}}return p}}}(),E=Math.PI,J=E/2,Ba=E/4,Da=256,x,T,G=15,wa="latitude",za="longitude",B=0,v=0,W=0,fa=0,p=0,n=0,H=I.parse("rgba(200, 190, 180)"),ba=H.lightness(0.8),O=H.lightness(1.2),
ha=""+H,aa=""+ba,X=""+O,na=0,C=1,ga,Ia=5,M,N,q=450,Q,Ka=function(){function b(b,g){if(a[b])g&&g(a[b]);else{var h=new XMLHttpRequest;h.onreadystatechange=function(){if(4===h.readyState&&h.status&&!(200>h.status||299<h.status)&&g&&h.responseText){var k=h.responseText;a[b]=k;c.push({url:b,size:k.length});d+=k.length;for(g(k);d>f;)k=c.shift(),d-=k.size,delete a[k.url]}};h.open("GET",b);h.send(null);return h}}var a={},c=[],d=0,f=5242880;return{loadJSON:function(a,c){return b(a,function(a){var b;try{b=
JSON.parse(a)}catch(d){}c(b)})}}}(),F={loadedItems:{},items:[],getPixelFootprint:function(b){for(var a=new ra(b.length),c,d=0,f=b.length-1;d<f;d+=2)c=da(b[d],b[d+1]),a[d]=c.x,a[d+1]=c.y;b=a;a=b.length/2;c=new sa(a);var d=0,f=a-1,e,g,h,k,m=[],l=[],n=[];for(c[d]=c[f]=1;f;){g=0;for(e=d+1;e<f;e++){h=b[2*e];var p=b[2*e+1],q=b[2*d],r=b[2*d+1],u=b[2*f],w=b[2*f+1],t=u-q,v=w-r,x=void 0;if(0!==t||0!==v)x=((h-q)*t+(p-r)*v)/(t*t+v*v),1<x?(q=u,r=w):0<x&&(q+=t*x,r+=v*x);t=h-q;v=p-r;h=t*t+v*v;h>g&&(k=e,g=h)}2<g&&
(c[k]=1,m.push(d),l.push(k),m.push(k),l.push(f));d=m.pop();f=l.pop()}for(e=0;e<a;e++)c[e]&&n.push(b[2*e],b[2*e+1]);a=n;if(!(8>a.length))return a},resetItems:function(){this.items=[];this.loadedItems={};Y.reset()},addRenderItems:function(b,a){for(var c,d,f,e=Ja.read(b),g=0,h=e.length;g<h;g++)c=e[g],f=c.id||[c.footprint[0],c.footprint[1],c.height,c.minHeight].join(),!this.loadedItems[f]&&(d=this.scale(c))&&(d.scale=a?0:1,this.items.push(d),this.loadedItems[f]=1);Ca()},scale:function(b){var a={},c=6/
oa(2,x-G);b.id&&(a.id=b.id);a.height=U(b.height/c,ga);a.minHeight=isNaN(b.minHeight)?0:b.minHeight/c;if(!(a.minHeight>ga)&&(a.footprint=this.getPixelFootprint(b.footprint),a.footprint)){for(var d=a.footprint,f=Infinity,e=-Infinity,g=Infinity,h=-Infinity,k=0,m=d.length-3;k<m;k+=2)f=U(f,d[k]),e=K(e,d[k]),g=U(g,d[k+1]),h=K(h,d[k+1]);a.center={x:f+(e-f)/2<<0,y:g+(h-g)/2<<0};b.radius&&(a.radius=b.radius*na);b.shape&&(a.shape=b.shape);b.roofShape&&(a.roofShape=b.roofShape);"cone"!==a.roofShape&&"dome"!==
a.roofShape||a.shape||!va(a.footprint)||(a.shape="cylinder");if(b.holes){a.holes=[];for(var l,d=0,f=b.holes.length;d<f;d++)(l=this.getPixelFootprint(b.holes[d]))&&a.holes.push(l)}var n;b.wallColor&&(n=I.parse(b.wallColor))&&(n=n.alpha(C),a.altColor=""+n.lightness(0.8),a.wallColor=""+n);b.roofColor&&(n=I.parse(b.roofColor))&&(a.roofColor=""+n.alpha(C));b.relationId&&(a.relationId=b.relationId);a.hitColor=Y.idToColor(b.relationId||b.id);a.roofHeight=isNaN(b.roofHeight)?0:b.roofHeight/c;if(!(a.height+
a.roofHeight<=a.minHeight))return a}},set:function(b){this.isStatic=!0;this.resetItems();this._staticData=b;this.addRenderItems(this._staticData,!0)},load:function(b,a){this.src=b||"http://{s}.data.osmbuildings.org/0.2/{k}/tile/{z}/{x}/{y}.json".replace("{k}",a||"anonymous");this.update()},update:function(){function b(a){g.addRenderItems(a)}this.resetItems();if(!(x<G))if(this.isStatic&&this._staticData)this.addRenderItems(this._staticData);else if(this.src){var a=16<x?256<<x-16:256>>16-x,c=p/a<<0,
d=n/a<<0,f=qa((p+B)/a),a=qa((n+v)/a),e,g=this;for(e=d;e<=a;e++)for(d=c;d<=f;d++)this.loadTile(d,e,16,b)}},loadTile:function(b,a,c,d){b=this.src.replace("{s}","abcd"[(b+a)%4]).replace("{x}",b).replace("{y}",a).replace("{z}",c);return Ka.loadJSON(b,d)}},Z={draw:function(b,a,c,d,f,e,g,h){var k,m=this._extrude(b,a,d,f,e,g),l=[];if(c)for(a=0,k=c.length;a<k;a++)l[a]=this._extrude(b,c[a],d,f,e,g);b.fillStyle=h;b.beginPath();this._ring(b,m);if(c)for(a=0,k=l.length;a<k;a++)this._ring(b,l[a]);b.closePath();
b.stroke();b.fill()},_extrude:function(b,a,c,d,f,e){c=q/(q-c);for(var g=q/(q-d),h={x:0,y:0},k={x:0,y:0},m,l,y=[],s=0,t=a.length-3;s<t;s+=2)h.x=a[s]-p,h.y=a[s+1]-n,k.x=a[s+2]-p,k.y=a[s+3]-n,m=r.project(h,c),l=r.project(k,c),d&&(h=r.project(h,g),k=r.project(k,g)),(k.x-h.x)*(m.y-h.y)>(m.x-h.x)*(k.y-h.y)&&(b.fillStyle=h.x<k.x&&h.y<k.y||h.x>k.x&&h.y>k.y?e:f,b.beginPath(),this._ring(b,[k.x,k.y,h.x,h.y,m.x,m.y,l.x,l.y]),b.closePath(),b.fill()),y[s]=m.x,y[s+1]=m.y;return y},_ring:function(b,a){b.moveTo(a[0],
a[1]);for(var c=2,d=a.length-1;c<d;c+=2)b.lineTo(a[c],a[c+1])},simplified:function(b,a,c){b.beginPath();this._ringAbs(b,a);if(c){a=0;for(var d=c.length;a<d;a++)this._ringAbs(b,c[a])}b.closePath();b.stroke();b.fill()},_ringAbs:function(b,a){b.moveTo(a[0]-p,a[1]-n);for(var c=2,d=a.length-1;c<d;c+=2)b.lineTo(a[c]-p,a[c+1]-n)},shadow:function(b,a,c,d,f){for(var e=null,g={x:0,y:0},h={x:0,y:0},k,m,l=0,q=a.length-3;l<q;l+=2)g.x=a[l]-p,g.y=a[l+1]-n,h.x=a[l+2]-p,h.y=a[l+3]-n,k=z.project(g,d),m=z.project(h,
d),f&&(g=z.project(g,f),h=z.project(h,f)),(h.x-g.x)*(k.y-g.y)>(k.x-g.x)*(h.y-g.y)?(1===e&&b.lineTo(g.x,g.y),e=0,l||b.moveTo(g.x,g.y),b.lineTo(h.x,h.y)):(0===e&&b.lineTo(k.x,k.y),e=1,l||b.moveTo(k.x,k.y),b.lineTo(m.x,m.y));if(c)for(l=0,q=c.length;l<q;l++)this._ringAbs(b,c[l])},shadowMask:function(b,a,c){this._ringAbs(b,a);if(c){a=0;for(var d=c.length;a<d;a++)this._ringAbs(b,c[a])}},hitArea:function(b,a,c,d,f,e){c=null;var g={x:0,y:0},h={x:0,y:0};d=q/(q-d);var k=q/(q-f),m;b.fillStyle=e;b.beginPath();
for(var l=0,t=a.length-3;l<t;l+=2)g.x=a[l]-p,g.y=a[l+1]-n,h.x=a[l+2]-p,h.y=a[l+3]-n,e=r.project(g,d),m=r.project(h,d),f&&(g=r.project(g,k),h=r.project(h,k)),(h.x-g.x)*(e.y-g.y)>(e.x-g.x)*(h.y-g.y)?(1===c&&b.lineTo(g.x,g.y),c=0,l||b.moveTo(g.x,g.y),b.lineTo(h.x,h.y)):(0===c&&b.lineTo(e.x,e.y),c=1,l||b.moveTo(e.x,e.y),b.lineTo(m.x,m.y));b.closePath();b.fill()}},w={draw:function(b,a,c,d,f,e,g,h,k){a={x:a.x-p,y:a.y-n};var m=q/(q-f),l=q/(q-e);f=r.project(a,m);d*=m;e&&(a=r.project(a,l),c*=l);(m=this._tangents(a,
c,f,d))?(e=P(m[0].y1-a.y,m[0].x1-a.x),m=P(m[1].y1-a.y,m[1].x1-a.x)):(e=1.5*E,m=1.5*E);b.fillStyle=g;b.beginPath();b.arc(f.x,f.y,d,J,e,!0);b.arc(a.x,a.y,c,e,J);b.closePath();b.fill();b.fillStyle=h;b.beginPath();b.arc(f.x,f.y,d,m,J,!0);b.arc(a.x,a.y,c,J,m);b.closePath();b.fill();b.fillStyle=k;this._circle(b,f,d)},simplified:function(b,a,c){this._circle(b,{x:a.x-p,y:a.y-n},c)},shadow:function(b,a,c,d,f,e){a={x:a.x-p,y:a.y-n};f=z.project(a,f);var g;e&&(a=z.project(a,e));var h=this._tangents(a,c,f,d);
h?(e=P(h[0].y1-a.y,h[0].x1-a.x),g=P(h[1].y1-a.y,h[1].x1-a.x),b.moveTo(h[1].x2,h[1].y2),b.arc(f.x,f.y,d,g,e),b.arc(a.x,a.y,c,e,g)):(b.moveTo(a.x+c,a.y),b.arc(a.x,a.y,c,0,2*E))},shadowMask:function(b,a,c){var d=a.x-p;a=a.y-n;b.moveTo(d+c,a);b.arc(d,a,c,0,2*E)},hitArea:function(b,a,c,d,f,e,g){a={x:a.x-p,y:a.y-n};var h=q/(q-f),k=q/(q-e);f=r.project(a,h);d*=h;e&&(a=r.project(a,k),c*=k);e=this._tangents(a,c,f,d);b.fillStyle=g;b.beginPath();e?(g=P(e[0].y1-a.y,e[0].x1-a.x),h=P(e[1].y1-a.y,e[1].x1-a.x),b.moveTo(e[1].x2,
e[1].y2),b.arc(f.x,f.y,d,h,g),b.arc(a.x,a.y,c,g,h)):(b.moveTo(a.x+c,a.y),b.arc(a.x,a.y,c,0,2*E));b.closePath();b.fill()},_circle:function(b,a,c){b.beginPath();b.arc(a.x,a.y,c,0,2*E);b.stroke();b.fill()},_tangents:function(b,a,c,d){var f=b.x-c.x,e=b.y-c.y,g=a-d,h=f*f+e*e;if(!(h<=g*g)){var h=pa(h),f=-f/h,e=-e/h,g=g/h,h=[],k,m,l;k=pa(K(0,1-g*g));for(var n=1;-1<=n;n-=2)m=f*g-n*k*e,l=e*g+n*k*f,h.push({x1:b.x+a*m<<0,y1:b.y+a*l<<0,x2:c.x+d*m<<0,y2:c.y+d*l<<0});return h}}},R={draw:function(b,a,c,d,f,e,g){var h=
q/(q-f);c=r.project({x:c.x-p,y:c.y-n},q/(q-d));d={x:0,y:0};for(var k={x:0,y:0},m=0,l=a.length-3;m<l;m+=2)d.x=a[m]-p,d.y=a[m+1]-n,k.x=a[m+2]-p,k.y=a[m+3]-n,f&&(d=r.project(d,h),k=r.project(k,h)),(k.x-d.x)*(c.y-d.y)>(c.x-d.x)*(k.y-d.y)&&(b.fillStyle=d.x<k.x&&d.y<k.y||d.x>k.x&&d.y>k.y?g:e,b.beginPath(),this._triangle(b,d,k,c),b.closePath(),b.fill())},_triangle:function(b,a,c,d){b.moveTo(a.x,a.y);b.lineTo(c.x,c.y);b.lineTo(d.x,d.y)},_ring:function(b,a){b.moveTo(a[0]-p,a[1]-n);for(var c=2,d=a.length-1;c<
d;c+=2)b.lineTo(a[c]-p,a[c+1]-n)},shadow:function(b,a,c,d,f){var e={x:0,y:0},g={x:0,y:0};c=z.project({x:c.x-p,y:c.y-n},d);d=0;for(var h=a.length-3;d<h;d+=2)e.x=a[d]-p,e.y=a[d+1]-n,g.x=a[d+2]-p,g.y=a[d+3]-n,f&&(e=z.project(e,f),g=z.project(g,f)),(g.x-e.x)*(c.y-e.y)>(c.x-e.x)*(g.y-e.y)&&this._triangle(b,e,g,c)},shadowMask:function(b,a){this._ring(b,a)},hitArea:function(b,a,c,d,f,e){var g=q/(q-f);c=r.project({x:c.x-p,y:c.y-n},q/(q-d));d={x:0,y:0};var h={x:0,y:0};b.fillStyle=e;b.beginPath();e=0;for(var k=
a.length-3;e<k;e+=2)d.x=a[e]-p,d.y=a[e+1]-n,h.x=a[e+2]-p,h.y=a[e+3]-n,f&&(d=r.project(d,g),h=r.project(h,g)),(h.x-d.x)*(c.y-d.y)>(c.x-d.x)*(h.y-d.y)&&this._triangle(b,d,h,c);b.closePath();b.fill()}},r={project:function(b,a){return{x:(b.x-M)*a+M<<0,y:(b.y-N)*a+N<<0}},render:function(){var b=this.context;b.clearRect(0,0,B,v);if(!(x<G||Q)){var a,c,d,f={x:M+p,y:N+n},e,g,h,k,m=F.items;m.sort(function(a,b){return a.minHeight-b.minHeight||S(b.center,f)-S(a.center,f)||b.height-a.height});for(var l=0,q=m.length;l<
q;l++)if(a=m[l],!ia.isSimple(a)&&(e=a.footprint,V(e))){c=1>a.scale?a.height*a.scale:a.height;d=0;a.minHeight&&(d=1>a.scale?a.minHeight*a.scale:a.minHeight);g=a.wallColor||ha;h=a.altColor||aa;k=a.roofColor||X;b.strokeStyle=h;switch(a.shape){case "cylinder":w.draw(b,a.center,a.radius,a.radius,c,d,g,h,k);break;case "cone":w.draw(b,a.center,a.radius,0,c,d,g,h);break;case "dome":w.draw(b,a.center,a.radius,a.radius/2,c,d,g,h);break;case "sphere":w.draw(b,a.center,a.radius,a.radius,c,d,g,h,k);break;case "pyramid":R.draw(b,
e,a.center,c,d,g,h);break;default:Z.draw(b,e,a.holes,c,d,g,h,k)}switch(a.roofShape){case "cone":w.draw(b,a.center,a.radius,0,c+a.roofHeight,c,k,""+I.parse(k).lightness(0.9));break;case "dome":w.draw(b,a.center,a.radius,a.radius/2,c+a.roofHeight,c,k,""+I.parse(k).lightness(0.9));break;case "pyramid":R.draw(b,e,a.center,c+a.roofHeight,c,k,I.parse(k).lightness(0.9))}}}}},ia={maxZoom:G+2,maxHeight:5,isSimple:function(b){return x<=this.maxZoom&&b.height+b.roofHeight<this.maxHeight},render:function(){var b=
this.context;b.clearRect(0,0,B,v);if(!(x<G||Q||x>this.maxZoom))for(var a,c,d=F.items,f=0,e=d.length;f<e;f++)if(a=d[f],!(a.height>=this.maxHeight)&&(c=a.footprint,V(c)))switch(b.strokeStyle=a.altColor||aa,b.fillStyle=a.roofColor||X,a.shape){case "cylinder":case "cone":case "dome":case "sphere":w.simplified(b,a.center,a.radius);break;default:Z.simplified(b,c,a.holes)}}},z={enabled:!0,color:"#666666",blurColor:"#000000",blurSize:15,date:new Date,direction:{x:0,y:0},project:function(b,a){return{x:b.x+
this.direction.x*a,y:b.y+this.direction.y*a}},render:function(){var b=this.context,a,c,d;b.clearRect(0,0,B,v);if(!(!this.enabled||x<G||Q||(a=ja(W+p,fa+n),a=Ha(this.date,a.latitude,a.longitude),0>=a.altitude))){c=1/ka(a.altitude);d=5>c?0.75:1/c*5;this.direction.x=Fa(a.azimuth)*c;this.direction.y=Ea(a.azimuth)*c;var f,e,g,h;a=F.items;b.canvas.style.opacity=d/(2*C);b.shadowColor=this.blurColor;b.shadowBlur=C/2*this.blurSize;b.fillStyle=this.color;b.beginPath();d=0;for(c=a.length;d<c;d++)if(f=a[d],h=
f.footprint,V(h)){e=1>f.scale?f.height*f.scale:f.height;g=0;f.minHeight&&(g=1>f.scale?f.minHeight*f.scale:f.minHeight);switch(f.shape){case "cylinder":w.shadow(b,f.center,f.radius,f.radius,e,g);break;case "cone":w.shadow(b,f.center,f.radius,0,e,g);break;case "dome":w.shadow(b,f.center,f.radius,f.radius/2,e,g);break;case "sphere":w.shadow(b,f.center,f.radius,f.radius,e,g);break;case "pyramid":R.shadow(b,h,f.center,e,g);break;default:Z.shadow(b,h,f.holes,e,g)}switch(f.roofShape){case "cone":w.shadow(b,
f.center,f.radius,0,e+f.roofHeight,e);break;case "dome":w.shadow(b,f.center,f.radius,f.radius/2,e+f.roofHeight,e);break;case "pyramid":R.shadow(b,h,f.center,e+f.roofHeight,e)}}b.closePath();b.fill();b.shadowBlur=null;b.globalCompositeOperation="destination-out";b.beginPath();d=0;for(c=a.length;d<c;d++)if(f=a[d],h=f.footprint,V(h)&&!f.minHeight)switch(f.shape){case "cylinder":case "cone":case "dome":w.shadowMask(b,f.center,f.radius);break;default:Z.shadowMask(b,h,f.holes)}b.fillStyle="#00ff00";b.fill();
b.globalCompositeOperation="source-over"}}},Y={_idMapping:[null],reset:function(){this._idMapping=[null]},render:function(){if(!this._timer){var b=this;this._timer=setTimeout(function(){b._timer=null;b._render()},500)}},_render:function(){var b=this.context;b.clearRect(0,0,B,v);if(!(x<G||Q)){var a,c,d,f={x:M+p,y:N+n},e,g,h=F.items;h.sort(function(a,b){return a.minHeight-b.minHeight||S(b.center,f)-S(a.center,f)||b.height-a.height});for(var k=0,m=h.length;k<m;k++)if(a=h[k],g=a.hitColor)if(e=a.footprint,
V(e)){c=a.height;d=0;a.minHeight&&(d=a.minHeight);switch(a.shape){case "cylinder":w.hitArea(b,a.center,a.radius,a.radius,c,d,g);break;case "cone":w.hitArea(b,a.center,a.radius,0,c,d,g);break;case "dome":w.hitArea(b,a.center,a.radius,a.radius/2,c,d,g);break;case "sphere":w.hitArea(b,a.center,a.radius,a.radius,c,d,g);break;case "pyramid":R.hitArea(b,e,a.center,c,d,g);break;default:Z.hitArea(b,e,a.holes,c,d,g)}switch(a.roofShape){case "cone":w.hitArea(b,a.center,a.radius,0,c+a.roofHeight,c,g);break;
case "dome":w.hitArea(b,a.center,a.radius,a.radius/2,c+a.roofHeight,c,g);break;case "pyramid":R.hitArea(b,e,a.center,c+a.roofHeight,c,g)}}B&&v&&(this._imageData=this.context.getImageData(0,0,B,v).data)}},getIdFromXY:function(b,a){var c=this._imageData;if(c){var d=4*((a|0)*B+(b|0));return this._idMapping[c[d]|c[d+1]<<8|c[d+2]<<16]}},idToColor:function(b){var a=this._idMapping.indexOf(b);-1===a&&(this._idMapping.push(b),a=this._idMapping.length-1);return"rgb("+[a&255,a>>8&255,a>>16&255].join()+")"}},
$,A={container:document.createElement("DIV"),items:[],init:function(){this.container.style.pointerEvents="none";this.container.style.position="absolute";this.container.style.left=0;this.container.style.top=0;z.context=this.createContext(this.container);ia.context=this.createContext(this.container);r.context=this.createContext(this.container);Y.context=this.createContext()},render:function(b){Ga(function(){b||(z.render(),ia.render(),Y.render());r.render()})},createContext:function(b){var a=document.createElement("CANVAS");
a.style.transform="translate3d(0, 0, 0)";a.style.imageRendering="optimizeSpeed";a.style.position="absolute";a.style.left=0;a.style.top=0;var c=a.getContext("2d");c.lineCap="round";c.lineJoin="round";c.lineWidth=1;c.imageSmoothingEnabled=!1;this.items.push(a);b&&b.appendChild(a);return c},appendTo:function(b){b.appendChild(this.container)},remove:function(){this.container.parentNode.removeChild(this.container)},setSize:function(b,a){for(var c=0,d=this.items.length;c<d;c++)this.items[c].width=b,this.items[c].height=
a},setPosition:function(b,a){this.container.style.left=b+"px";this.container.style.top=a+"px"}};A.init();u=function(b){this.offset={x:0,y:0};b&&b.addLayer(this)};t=u.prototype=L.Layer?new L.Layer:{};t.addTo=function(b){b.addLayer(this);return this};t.onAdd=function(b){this.map=b;A.appendTo(b._panes.overlayPane);var a=this.getOffset(),c=b.getPixelOrigin();la({width:b._size.x,height:b._size.y});var d=c.y-a.y;p=c.x-a.x;n=d;ma(b._zoom);A.setPosition(-a.x,-a.y);b.on({move:this.onMove,moveend:this.onMoveEnd,
zoomstart:this.onZoomStart,zoomend:this.onZoomEnd,resize:this.onResize,viewreset:this.onViewReset,click:this.onClick},this);if(b.options.zoomAnimation)b.on("zoomanim",this.onZoom,this);b.attributionControl&&b.attributionControl.addAttribution('&copy; <a href="http://osmbuildings.org">OSM Buildings</a>');F.update()};t.onRemove=function(){var b=this.map;b.attributionControl&&b.attributionControl.removeAttribution('&copy; <a href="http://osmbuildings.org">OSM Buildings</a>');b.off({move:this.onMove,
moveend:this.onMoveEnd,zoomstart:this.onZoomStart,zoomend:this.onZoomEnd,resize:this.onResize,viewreset:this.onViewReset,click:this.onClick},this);b.options.zoomAnimation&&b.off("zoomanim",this.onZoom,this);A.remove()};t.onMove=function(b){b=this.getOffset();ea({x:this.offset.x-b.x,y:this.offset.y-b.y})};t.onMoveEnd=function(b){if(this.noMoveEnd)this.noMoveEnd=!1;else{var a=this.map;b=this.getOffset();var c=a.getPixelOrigin();this.offset=b;A.setPosition(-b.x,-b.y);ea({x:0,y:0});la({width:a._size.x,
height:a._size.y});a=c.y-b.y;p=c.x-b.x;n=a;A.render();F.update()}};t.onZoomStart=function(b){Q=!0;A.render()};t.onZoom=function(b){};t.onZoomEnd=function(b){b=this.map;var a=this.getOffset(),c=b.getPixelOrigin(),d=c.y-a.y;p=c.x-a.x;n=d;b=b._zoom;Q=!1;ma(b);F.update();A.render();this.noMoveEnd=!0};t.onResize=function(){};t.onViewReset=function(){var b=this.getOffset();this.offset=b;A.setPosition(-b.x,-b.y);ea({x:0,y:0})};t.onClick=function(b){var a=Y.getIdFromXY(b.containerPoint.x,b.containerPoint.y);
a&&ua({feature:a,lat:b.latlng.lat,lon:b.latlng.lng})};t.getOffset=function(){return L.DomUtil.getPosition(this.map._mapPane)};t.style=function(b){b=b||{};var a;if(a=b.color||b.wallColor)H=I.parse(a),ha=""+H.alpha(C),ba=H.lightness(0.8),aa=""+ba.alpha(C),O=H.lightness(1.2),X=""+O.alpha(C);b.roofColor&&(O=I.parse(b.roofColor),X=""+O.alpha(C));void 0!==b.shadows&&(z.enabled=!!b.shadows);A.render();return this};t.date=function(b){z.date=b;z.render();return this};t.load=function(b){F.load(b);return this};
t.set=function(b){F.set(b);return this};var ta=function(){};t.each=function(b){ta=function(a){return b(a)};return this};var ua=function(){};t.click=function(b){ua=function(a){return b(a)};return this};u.VERSION="0.2.2b";u.ATTRIBUTION='&copy; <a href="http://osmbuildings.org">OSM Buildings</a>';ca.OSMBuildings=u})(this);

// Aggregates

// Color

// Conditionals
function fnc_coalesce(values, context) {
    for (i = 0; i < values.length; i++) {
        if (values[i] !== null) {
            return values[i];
        }
        
    }
    return 'ERROR';
};

// Conversions

// Custom

// Date and Time

// Fields and Values

// Fuzzy Matching

// General

// Geometry
function fnc_azimuth(values, context) {
    return false;
};

function fnc_project(values, context) {
    return false;
};

// Math
function fnc_abs(values, context) {
    return Math.abs(values[0]);
};

function fnc_degrees(values, context) {
    return values[0] * (180/Math.PI);
};

function fnc_radians(values, context) {
    return values[0] * (Math.PI/180);
};

function fnc_sqrt(values, context) {
    return Math.sqrt(values[0]);
};

function fnc_cos(values, context) {
    return Math.cos(values[0]);
};

function fnc_sin(values, context) {
    return Math.sin(values[0]);
};

function fnc_tan(values, context) {
    return Math.tan(values[0]);
};

function fnc_asin(values, context) {
    return Math.asin(values[0]);
};

function fnc_acos(values, context) {
    return Math.acos(values[0]);
};

function fnc_atan(values, context) {
    return Math.atan(values[0]);
};

function fnc_atan2(values, context) {
    return Math.atan2(values[0]);
};

function fnc_exp(values, context) {
    return Math.exp(values[0]);
};

function fnc_ln(values, context) {
    return Math.log(values[0]);
};

function fnc_log10(values, context) {
    return Math.log10(values[0]);
};

function fnc_log(values, context) {
    return Math.log(values[0]) / Math.log(values[1]);
};

function fnc_round(values, context) {
    return false;
};

function fnc_rand(values, context) {
    return Math.floor(Math.random()*(values[1]-values[0]+1)+values[0]);
};

function fnc_randf(values, context) {
    return Math.random()*(values[1]-values[0]+1)+values[0];
};

function fnc_max(values, context) {
    return Math.max.apply(this, values);
};

function fnc_min(values, context) {
    return Math.min.apply(this, values);
};

function fnc_clamp(values, context) {
    return false;
};

// Operators

// Record

// String

// TimeManager

// Variables



function fnc_scale_linear(values, context) {
    return false;
};

function fnc_scale_exp(values, context) {
    return false;
};

function fnc_floor(values, context) {
    return false;
};

function fnc_ceil(values, context) {
    return false;
};

function fnc_pi(values, context) {
    return false;
};

function fnc_to_int(values, context) {
    return false;
};

function fnc_to_real(values, context) {
    return false;
};

function fnc_to_string(values, context) {
    return false;
};

function fnc_to_datetime(values, context) {
    return false;
};

function fnc_to_date(values, context) {
    return false;
};

function fnc_to_time(values, context) {
    return false;
};

function fnc_to_interval(values, context) {
    return false;
};

function fnc_if(values, context) {
    return false;
};

function fnc_aggregate(values, context) {
    return false;
};

function fnc_relation_aggregate(values, context) {
    return false;
};

function fnc_count(values, context) {
    return false;
};

function fnc_count_distinct(values, context) {
    return false;
};

function fnc_count_missing(values, context) {
    return false;
};

function fnc_minimum(values, context) {
    return false;
};

function fnc_maximum(values, context) {
    return false;
};

function fnc_sum(values, context) {
    return false;
};

function fnc_mean(values, context) {
    return false;
};

function fnc_median(values, context) {
    return false;
};

function fnc_stdev(values, context) {
    return false;
};

function fnc_range(values, context) {
    return false;
};

function fnc_minority(values, context) {
    return false;
};

function fnc_majority(values, context) {
    return false;
};

function fnc_q1(values, context) {
    return false;
};

function fnc_q3(values, context) {
    return false;
};

function fnc_iqr(values, context) {
    return false;
};

function fnc_min_length(values, context) {
    return false;
};

function fnc_max_length(values, context) {
    return false;
};

function fnc_concatenate(values, context) {
    return false;
};

function fnc_regexp_match(values, context) {
    return false;
};

function fnc_now(values, context) {
    return false;
};

function fnc_age(values, context) {
    return false;
};

function fnc_year(values, context) {
    return false;
};

function fnc_month(values, context) {
    return false;
};

function fnc_week(values, context) {
    return false;
};

function fnc_day(values, context) {
    return false;
};

function fnc_hour(values, context) {
    return false;
};

function fnc_minute(values, context) {
    return false;
};

function fnc_second(values, context) {
    return false;
};

function fnc_day_of_week(values, context) {
    return false;
};

function fnc_lower(values, context) {
    return values[0].toLowerCase();
};

function fnc_upper(values, context) {
    return false;
};

function fnc_title(values, context) {
    return false;
};

function fnc_trim(values, context) {
    return false;
};

function fnc_levenshtein(values, context) {
    return false;
};

function fnc_longest_common_substring(values, context) {
    return false;
};

function fnc_hamming_distance(values, context) {
    return false;
};

function fnc_soundex(values, context) {
    return false;
};

function fnc_char(values, context) {
    return false;
};

function fnc_wordwrap(values, context) {
    return false;
};

function fnc_length(values, context) {
    return false;
};

function fnc_replace(values, context) {
    return false;
};

function fnc_regexp_replace(values, context) {
    return false;
};

function fnc_regexp_substr(values, context) {
    return false;
};

function fnc_substr(values, context) {
    return false;
};

function fnc_concat(values, context) {
    return false;
};

function fnc_strpos(values, context) {
    return false;
};

function fnc_left(values, context) {
    return false;
};

function fnc_right(values, context) {
    return false;
};

function fnc_rpad(values, context) {
    return false;
};

function fnc_lpad(values, context) {
    return false;
};

function fnc_format(values, context) {
    return false;
};

function fnc_format_number(values, context) {
    return false;
};

function fnc_format_date(values, context) {
    return false;
};

function fnc_color_rgb(values, context) {
    return false;
};

function fnc_color_rgba(values, context) {
    return false;
};

function fnc_ramp_color(values, context) {
    return false;
};

function fnc_color_hsl(values, context) {
    return false;
};

function fnc_color_hsla(values, context) {
    return false;
};

function fnc_color_hsv(values, context) {
    return false;
};

function fnc_color_hsva(values, context) {
    return false;
};

function fnc_color_cmyk(values, context) {
    return false;
};

function fnc_color_cmyka(values, context) {
    return false;
};

function fnc_color_part(values, context) {
    return false;
};

function fnc_darker(values, context) {
    return false;
};

function fnc_lighter(values, context) {
    return false;
};

function fnc_set_color_part(values, context) {
    return false;
};

function fnc_area(values, context) {
    return false;
};

function fnc_perimeter(values, context) {
    return false;
};

function fnc_x(values, context) {
    return false;
};

function fnc_y(values, context) {
    return false;
};

function fnc_z(values, context) {
    return false;
};

function fnc_m(values, context) {
    return false;
};

function fnc_point_n(values, context) {
    return false;
};

function fnc_start_point(values, context) {
    return false;
};

function fnc_end_point(values, context) {
    return false;
};

function fnc_nodes_to_points(values, context) {
    return false;
};

function fnc_segments_to_lines(values, context) {
    return false;
};

function fnc_make_point(values, context) {
    return false;
};

function fnc_make_point_m(values, context) {
    return false;
};

function fnc_make_line(values, context) {
    return false;
};

function fnc_make_polygon(values, context) {
    return false;
};

function fnc_x_min(values, context) {
    return false;
};

function fnc_x_max(values, context) {
    return false;
};

function fnc_y_min(values, context) {
    return false;
};

function fnc_y_max(values, context) {
    return false;
};

function fnc_geom_from_wkt(values, context) {
    return false;
};

function fnc_geom_from_gml(values, context) {
    return false;
};

function fnc_relate(values, context) {
    return false;
};

function fnc_intersects_bbox(values, context) {
    return false;
};

function fnc_disjoint(values, context) {
    return false;
};

function fnc_intersects(values, context) {
    return false;
};

function fnc_touches(values, context) {
    return false;
};

function fnc_crosses(values, context) {
    return false;
};

function fnc_contains(values, context) {
    return false;
};

function fnc_overlaps(values, context) {
    return false;
};

function fnc_within(values, context) {
    return false;
};

function fnc_translate(values, context) {
    return false;
};

function fnc_buffer(values, context) {
    return false;
};

function fnc_centroid(values, context) {
    return false;
};

function fnc_point_on_surface(values, context) {
    return false;
};

function fnc_reverse(values, context) {
    return false;
};

function fnc_exterior_ring(values, context) {
    return false;
};

function fnc_interior_ring_n(values, context) {
    return false;
};

function fnc_geometry_n(values, context) {
    return false;
};

function fnc_boundary(values, context) {
    return false;
};

function fnc_line_merge(values, context) {
    return false;
};

function fnc_bounds(values, context) {
    return false;
};

function fnc_num_points(values, context) {
    return false;
};

function fnc_num_interior_rings(values, context) {
    return false;
};

function fnc_num_rings(values, context) {
    return false;
};

function fnc_num_geometries(values, context) {
    return false;
};

function fnc_bounds_width(values, context) {
    return false;
};

function fnc_bounds_height(values, context) {
    return false;
};

function fnc_is_closed(values, context) {
    return false;
};

function fnc_convex_hull(values, context) {
    return false;
};

function fnc_difference(values, context) {
    return false;
};

function fnc_distance(values, context) {
    return false;
};

function fnc_intersection(values, context) {
    return false;
};

function fnc_sym_difference(values, context) {
    return false;
};

function fnc_combine(values, context) {
    return false;
};

function fnc_union(values, context) {
    return false;
};

function fnc_geom_to_wkt(values, context) {
    return false;
};

function fnc_geometry(values, context) {
    return false;
};

function fnc_transform(values, context) {
    return false;
};

function fnc_extrude(values, context) {
    return false;
};

function fnc_order_parts(values, context) {
    return false;
};

function fnc_closest_point(values, context) {
    return false;
};

function fnc_shortest_line(values, context) {
    return false;
};

function fnc_line_interpolate_point(values, context) {
    return false;
};

function fnc_line_interpolate_angle(values, context) {
    return false;
};

function fnc_line_locate_point(values, context) {
    return false;
};

function fnc_angle_at_vertex(values, context) {
    return false;
};

function fnc_distance_to_vertex(values, context) {
    return false;
};

function fnc_uuid(values, context) {
    return false;
};

function fnc_get_feature(values, context) {
    return false;
};

function fnc_layer_property(values, context) {
    return false;
};

function fnc_var(values, context) {
    return false;
};

function fnc_eval(values, context) {
    return false;
};

function fnc_attribute(values, context) {
    return false;
};

function fnc__specialcol_(values, context) {
    return false;
};

function fnc_project_color(values, context) {
    return false;
};

!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var i;i="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,i.rbush=t()}}(function(){return function t(i,n,e){function r(h,o){if(!n[h]){if(!i[h]){var s="function"==typeof require&&require;if(!o&&s)return s(h,!0);if(a)return a(h,!0);var l=new Error("Cannot find module '"+h+"'");throw l.code="MODULE_NOT_FOUND",l}var f=n[h]={exports:{}};i[h][0].call(f.exports,function(t){var n=i[h][1][t];return r(n?n:t)},f,f.exports,t,i,n,e)}return n[h].exports}for(var a="function"==typeof require&&require,h=0;h<e.length;h++)r(e[h]);return r}({1:[function(t,i,n){"use strict";function e(t,i){return this instanceof e?(this._maxEntries=Math.max(4,t||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),i&&this._initFormat(i),void this.clear()):new e(t,i)}function r(t,i,n){if(!n)return i.indexOf(t);for(var e=0;e<i.length;e++)if(n(t,i[e]))return e;return-1}function a(t,i){h(t,0,t.children.length,i,t)}function h(t,i,n,e,r){r||(r=p(null)),r.minX=1/0,r.minY=1/0,r.maxX=-(1/0),r.maxY=-(1/0);for(var a,h=i;h<n;h++)a=t.children[h],o(r,t.leaf?e(a):a);return r}function o(t,i){return t.minX=Math.min(t.minX,i.minX),t.minY=Math.min(t.minY,i.minY),t.maxX=Math.max(t.maxX,i.maxX),t.maxY=Math.max(t.maxY,i.maxY),t}function s(t,i){return t.minX-i.minX}function l(t,i){return t.minY-i.minY}function f(t){return(t.maxX-t.minX)*(t.maxY-t.minY)}function u(t){return t.maxX-t.minX+(t.maxY-t.minY)}function c(t,i){return(Math.max(i.maxX,t.maxX)-Math.min(i.minX,t.minX))*(Math.max(i.maxY,t.maxY)-Math.min(i.minY,t.minY))}function m(t,i){var n=Math.max(t.minX,i.minX),e=Math.max(t.minY,i.minY),r=Math.min(t.maxX,i.maxX),a=Math.min(t.maxY,i.maxY);return Math.max(0,r-n)*Math.max(0,a-e)}function d(t,i){return t.minX<=i.minX&&t.minY<=i.minY&&i.maxX<=t.maxX&&i.maxY<=t.maxY}function x(t,i){return i.minX<=t.maxX&&i.minY<=t.maxY&&i.maxX>=t.minX&&i.maxY>=t.minY}function p(t){return{children:t,height:1,leaf:!0,minX:1/0,minY:1/0,maxX:-(1/0),maxY:-(1/0)}}function M(t,i,n,e,r){for(var a,h=[i,n];h.length;)n=h.pop(),i=h.pop(),n-i<=e||(a=i+Math.ceil((n-i)/e/2)*e,g(t,a,i,n,r),h.push(i,a,a,n))}i.exports=e;var g=t("quickselect");e.prototype={all:function(){return this._all(this.data,[])},search:function(t){var i=this.data,n=[],e=this.toBBox;if(!x(t,i))return n;for(var r,a,h,o,s=[];i;){for(r=0,a=i.children.length;r<a;r++)h=i.children[r],o=i.leaf?e(h):h,x(t,o)&&(i.leaf?n.push(h):d(t,o)?this._all(h,n):s.push(h));i=s.pop()}return n},collides:function(t){var i=this.data,n=this.toBBox;if(!x(t,i))return!1;for(var e,r,a,h,o=[];i;){for(e=0,r=i.children.length;e<r;e++)if(a=i.children[e],h=i.leaf?n(a):a,x(t,h)){if(i.leaf||d(t,h))return!0;o.push(a)}i=o.pop()}return!1},load:function(t){if(!t||!t.length)return this;if(t.length<this._minEntries){for(var i=0,n=t.length;i<n;i++)this.insert(t[i]);return this}var e=this._build(t.slice(),0,t.length-1,0);if(this.data.children.length)if(this.data.height===e.height)this._splitRoot(this.data,e);else{if(this.data.height<e.height){var r=this.data;this.data=e,e=r}this._insert(e,this.data.height-e.height-1,!0)}else this.data=e;return this},insert:function(t){return t&&this._insert(t,this.data.height-1),this},clear:function(){return this.data=p([]),this},remove:function(t,i){if(!t)return this;for(var n,e,a,h,o=this.data,s=this.toBBox(t),l=[],f=[];o||l.length;){if(o||(o=l.pop(),e=l[l.length-1],n=f.pop(),h=!0),o.leaf&&(a=r(t,o.children,i),a!==-1))return o.children.splice(a,1),l.push(o),this._condense(l),this;h||o.leaf||!d(o,s)?e?(n++,o=e.children[n],h=!1):o=null:(l.push(o),f.push(n),n=0,e=o,o=o.children[0])}return this},toBBox:function(t){return t},compareMinX:s,compareMinY:l,toJSON:function(){return this.data},fromJSON:function(t){return this.data=t,this},_all:function(t,i){for(var n=[];t;)t.leaf?i.push.apply(i,t.children):n.push.apply(n,t.children),t=n.pop();return i},_build:function(t,i,n,e){var r,h=n-i+1,o=this._maxEntries;if(h<=o)return r=p(t.slice(i,n+1)),a(r,this.toBBox),r;e||(e=Math.ceil(Math.log(h)/Math.log(o)),o=Math.ceil(h/Math.pow(o,e-1))),r=p([]),r.leaf=!1,r.height=e;var s,l,f,u,c=Math.ceil(h/o),m=c*Math.ceil(Math.sqrt(o));for(M(t,i,n,m,this.compareMinX),s=i;s<=n;s+=m)for(f=Math.min(s+m-1,n),M(t,s,f,c,this.compareMinY),l=s;l<=f;l+=c)u=Math.min(l+c-1,f),r.children.push(this._build(t,l,u,e-1));return a(r,this.toBBox),r},_chooseSubtree:function(t,i,n,e){for(var r,a,h,o,s,l,u,m;;){if(e.push(i),i.leaf||e.length-1===n)break;for(u=m=1/0,r=0,a=i.children.length;r<a;r++)h=i.children[r],s=f(h),l=c(t,h)-s,l<m?(m=l,u=s<u?s:u,o=h):l===m&&s<u&&(u=s,o=h);i=o||i.children[0]}return i},_insert:function(t,i,n){var e=this.toBBox,r=n?t:e(t),a=[],h=this._chooseSubtree(r,this.data,i,a);for(h.children.push(t),o(h,r);i>=0&&a[i].children.length>this._maxEntries;)this._split(a,i),i--;this._adjustParentBBoxes(r,a,i)},_split:function(t,i){var n=t[i],e=n.children.length,r=this._minEntries;this._chooseSplitAxis(n,r,e);var h=this._chooseSplitIndex(n,r,e),o=p(n.children.splice(h,n.children.length-h));o.height=n.height,o.leaf=n.leaf,a(n,this.toBBox),a(o,this.toBBox),i?t[i-1].children.push(o):this._splitRoot(n,o)},_splitRoot:function(t,i){this.data=p([t,i]),this.data.height=t.height+1,this.data.leaf=!1,a(this.data,this.toBBox)},_chooseSplitIndex:function(t,i,n){var e,r,a,o,s,l,u,c;for(l=u=1/0,e=i;e<=n-i;e++)r=h(t,0,e,this.toBBox),a=h(t,e,n,this.toBBox),o=m(r,a),s=f(r)+f(a),o<l?(l=o,c=e,u=s<u?s:u):o===l&&s<u&&(u=s,c=e);return c},_chooseSplitAxis:function(t,i,n){var e=t.leaf?this.compareMinX:s,r=t.leaf?this.compareMinY:l,a=this._allDistMargin(t,i,n,e),h=this._allDistMargin(t,i,n,r);a<h&&t.children.sort(e)},_allDistMargin:function(t,i,n,e){t.children.sort(e);var r,a,s=this.toBBox,l=h(t,0,i,s),f=h(t,n-i,n,s),c=u(l)+u(f);for(r=i;r<n-i;r++)a=t.children[r],o(l,t.leaf?s(a):a),c+=u(l);for(r=n-i-1;r>=i;r--)a=t.children[r],o(f,t.leaf?s(a):a),c+=u(f);return c},_adjustParentBBoxes:function(t,i,n){for(var e=n;e>=0;e--)o(i[e],t)},_condense:function(t){for(var i,n=t.length-1;n>=0;n--)0===t[n].children.length?n>0?(i=t[n-1].children,i.splice(i.indexOf(t[n]),1)):this.clear():a(t[n],this.toBBox)},_initFormat:function(t){var i=["return a"," - b",";"];this.compareMinX=new Function("a","b",i.join(t[0])),this.compareMinY=new Function("a","b",i.join(t[1])),this.toBBox=new Function("a","return {minX: a"+t[0]+", minY: a"+t[1]+", maxX: a"+t[2]+", maxY: a"+t[3]+"};")}}},{quickselect:2}],2:[function(t,i,n){"use strict";function e(t,i,n,a,h){for(;a>n;){if(a-n>600){var o=a-n+1,s=i-n+1,l=Math.log(o),f=.5*Math.exp(2*l/3),u=.5*Math.sqrt(l*f*(o-f)/o)*(s-o/2<0?-1:1),c=Math.max(n,Math.floor(i-s*f/o+u)),m=Math.min(a,Math.floor(i+(o-s)*f/o+u));e(t,i,c,m,h)}var d=t[i],x=n,p=a;for(r(t,n,i),h(t[a],d)>0&&r(t,n,a);x<p;){for(r(t,x,p),x++,p--;h(t[x],d)<0;)x++;for(;h(t[p],d)>0;)p--}0===h(t[n],d)?r(t,n,p):(p++,r(t,p,a)),p<=i&&(n=p+1),i<=p&&(a=p-1)}}function r(t,i,n){var e=t[i];t[i]=t[n],t[n]=e}i.exports=e},{}]},{},[1])(1)});
