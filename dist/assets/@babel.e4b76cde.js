function c(){return c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},c.apply(this,arguments)}function f(t,e){if(t==null)return{};var n={},r=Object.keys(t),o,i;for(i=0;i<r.length;i++)o=r[i],!(e.indexOf(o)>=0)&&(n[o]=t[o]);return n}function a(t,e){return a=Object.setPrototypeOf||function(r,o){return r.__proto__=o,r},a(t,e)}function p(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,a(t,e)}function u(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}export{c as _,f as a,p as b,u as c};