(self.webpackChunk_shippo_feron=self.webpackChunk_shippo_feron||[]).push([[8307],{"./node_modules/color-name/index.js":module=>{"use strict";module.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},"./node_modules/color-string/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{var colorNames=__webpack_require__("./node_modules/color-name/index.js"),swizzle=__webpack_require__("./node_modules/simple-swizzle/index.js"),hasOwnProperty=Object.hasOwnProperty,reverseNames=Object.create(null);for(var name in colorNames)hasOwnProperty.call(colorNames,name)&&(reverseNames[colorNames[name]]=name);var cs=module.exports={to:{},get:{}};function clamp(num,min,max){return Math.min(Math.max(min,num),max)}function hexDouble(num){var str=Math.round(num).toString(16).toUpperCase();return str.length<2?"0"+str:str}cs.get=function(string){var val,model;switch(string.substring(0,3).toLowerCase()){case"hsl":val=cs.get.hsl(string),model="hsl";break;case"hwb":val=cs.get.hwb(string),model="hwb";break;default:val=cs.get.rgb(string),model="rgb"}return val?{model,value:val}:null},cs.get.rgb=function(string){if(!string)return null;var match,i,hexAlpha,rgb=[0,0,0,1];if(match=string.match(/^#([a-f0-9]{6})([a-f0-9]{2})?$/i)){for(hexAlpha=match[2],match=match[1],i=0;i<3;i++){var i2=2*i;rgb[i]=parseInt(match.slice(i2,i2+2),16)}hexAlpha&&(rgb[3]=parseInt(hexAlpha,16)/255)}else if(match=string.match(/^#([a-f0-9]{3,4})$/i)){for(hexAlpha=(match=match[1])[3],i=0;i<3;i++)rgb[i]=parseInt(match[i]+match[i],16);hexAlpha&&(rgb[3]=parseInt(hexAlpha+hexAlpha,16)/255)}else if(match=string.match(/^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/)){for(i=0;i<3;i++)rgb[i]=parseInt(match[i+1],0);match[4]&&(match[5]?rgb[3]=.01*parseFloat(match[4]):rgb[3]=parseFloat(match[4]))}else{if(!(match=string.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/)))return(match=string.match(/^(\w+)$/))?"transparent"===match[1]?[0,0,0,0]:hasOwnProperty.call(colorNames,match[1])?((rgb=colorNames[match[1]])[3]=1,rgb):null:null;for(i=0;i<3;i++)rgb[i]=Math.round(2.55*parseFloat(match[i+1]));match[4]&&(match[5]?rgb[3]=.01*parseFloat(match[4]):rgb[3]=parseFloat(match[4]))}for(i=0;i<3;i++)rgb[i]=clamp(rgb[i],0,255);return rgb[3]=clamp(rgb[3],0,1),rgb},cs.get.hsl=function(string){if(!string)return null;var match=string.match(/^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/);if(match){var alpha=parseFloat(match[4]);return[(parseFloat(match[1])%360+360)%360,clamp(parseFloat(match[2]),0,100),clamp(parseFloat(match[3]),0,100),clamp(isNaN(alpha)?1:alpha,0,1)]}return null},cs.get.hwb=function(string){if(!string)return null;var match=string.match(/^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/);if(match){var alpha=parseFloat(match[4]);return[(parseFloat(match[1])%360+360)%360,clamp(parseFloat(match[2]),0,100),clamp(parseFloat(match[3]),0,100),clamp(isNaN(alpha)?1:alpha,0,1)]}return null},cs.to.hex=function(){var rgba=swizzle(arguments);return"#"+hexDouble(rgba[0])+hexDouble(rgba[1])+hexDouble(rgba[2])+(rgba[3]<1?hexDouble(Math.round(255*rgba[3])):"")},cs.to.rgb=function(){var rgba=swizzle(arguments);return rgba.length<4||1===rgba[3]?"rgb("+Math.round(rgba[0])+", "+Math.round(rgba[1])+", "+Math.round(rgba[2])+")":"rgba("+Math.round(rgba[0])+", "+Math.round(rgba[1])+", "+Math.round(rgba[2])+", "+rgba[3]+")"},cs.to.rgb.percent=function(){var rgba=swizzle(arguments),r=Math.round(rgba[0]/255*100),g=Math.round(rgba[1]/255*100),b=Math.round(rgba[2]/255*100);return rgba.length<4||1===rgba[3]?"rgb("+r+"%, "+g+"%, "+b+"%)":"rgba("+r+"%, "+g+"%, "+b+"%, "+rgba[3]+")"},cs.to.hsl=function(){var hsla=swizzle(arguments);return hsla.length<4||1===hsla[3]?"hsl("+hsla[0]+", "+hsla[1]+"%, "+hsla[2]+"%)":"hsla("+hsla[0]+", "+hsla[1]+"%, "+hsla[2]+"%, "+hsla[3]+")"},cs.to.hwb=function(){var hwba=swizzle(arguments),a="";return hwba.length>=4&&1!==hwba[3]&&(a=", "+hwba[3]),"hwb("+hwba[0]+", "+hwba[1]+"%, "+hwba[2]+"%"+a+")"},cs.to.keyword=function(rgb){return reverseNames[rgb.slice(0,3)]}},"./node_modules/color/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var colorString=__webpack_require__("./node_modules/color-string/index.js"),convert=__webpack_require__("./node_modules/color/node_modules/color-convert/index.js"),_slice=[].slice,skippedModels=["keyword","gray","hex"],hashedModelKeys={};Object.keys(convert).forEach((function(model){hashedModelKeys[_slice.call(convert[model].labels).sort().join("")]=model}));var limiters={};function Color(obj,model){if(!(this instanceof Color))return new Color(obj,model);if(model&&model in skippedModels&&(model=null),model&&!(model in convert))throw new Error("Unknown model: "+model);var i,channels;if(null==obj)this.model="rgb",this.color=[0,0,0],this.valpha=1;else if(obj instanceof Color)this.model=obj.model,this.color=obj.color.slice(),this.valpha=obj.valpha;else if("string"==typeof obj){var result=colorString.get(obj);if(null===result)throw new Error("Unable to parse color from string: "+obj);this.model=result.model,channels=convert[this.model].channels,this.color=result.value.slice(0,channels),this.valpha="number"==typeof result.value[channels]?result.value[channels]:1}else if(obj.length){this.model=model||"rgb",channels=convert[this.model].channels;var newArr=_slice.call(obj,0,channels);this.color=zeroArray(newArr,channels),this.valpha="number"==typeof obj[channels]?obj[channels]:1}else if("number"==typeof obj)obj&=16777215,this.model="rgb",this.color=[obj>>16&255,obj>>8&255,255&obj],this.valpha=1;else{this.valpha=1;var keys=Object.keys(obj);"alpha"in obj&&(keys.splice(keys.indexOf("alpha"),1),this.valpha="number"==typeof obj.alpha?obj.alpha:0);var hashedKeys=keys.sort().join("");if(!(hashedKeys in hashedModelKeys))throw new Error("Unable to parse color from object: "+JSON.stringify(obj));this.model=hashedModelKeys[hashedKeys];var labels=convert[this.model].labels,color=[];for(i=0;i<labels.length;i++)color.push(obj[labels[i]]);this.color=zeroArray(color)}if(limiters[this.model])for(channels=convert[this.model].channels,i=0;i<channels;i++){var limit=limiters[this.model][i];limit&&(this.color[i]=limit(this.color[i]))}this.valpha=Math.max(0,Math.min(1,this.valpha)),Object.freeze&&Object.freeze(this)}function getset(model,channel,modifier){return(model=Array.isArray(model)?model:[model]).forEach((function(m){(limiters[m]||(limiters[m]=[]))[channel]=modifier})),model=model[0],function(val){var result;return arguments.length?(modifier&&(val=modifier(val)),(result=this[model]()).color[channel]=val,result):(result=this[model]().color[channel],modifier&&(result=modifier(result)),result)}}function maxfn(max){return function(v){return Math.max(0,Math.min(max,v))}}function zeroArray(arr,length){for(var i=0;i<length;i++)"number"!=typeof arr[i]&&(arr[i]=0);return arr}Color.prototype={toString:function(){return this.string()},toJSON:function(){return this[this.model]()},string:function(places){var self=this.model in colorString.to?this:this.rgb(),args=1===(self=self.round("number"==typeof places?places:1)).valpha?self.color:self.color.concat(this.valpha);return colorString.to[self.model](args)},percentString:function(places){var self=this.rgb().round("number"==typeof places?places:1),args=1===self.valpha?self.color:self.color.concat(this.valpha);return colorString.to.rgb.percent(args)},array:function(){return 1===this.valpha?this.color.slice():this.color.concat(this.valpha)},object:function(){for(var result={},channels=convert[this.model].channels,labels=convert[this.model].labels,i=0;i<channels;i++)result[labels[i]]=this.color[i];return 1!==this.valpha&&(result.alpha=this.valpha),result},unitArray:function(){var rgb=this.rgb().color;return rgb[0]/=255,rgb[1]/=255,rgb[2]/=255,1!==this.valpha&&rgb.push(this.valpha),rgb},unitObject:function(){var rgb=this.rgb().object();return rgb.r/=255,rgb.g/=255,rgb.b/=255,1!==this.valpha&&(rgb.alpha=this.valpha),rgb},round:function(places){return places=Math.max(places||0,0),new Color(this.color.map(function roundToPlace(places){return function(num){return function roundTo(num,places){return Number(num.toFixed(places))}(num,places)}}(places)).concat(this.valpha),this.model)},alpha:function(val){return arguments.length?new Color(this.color.concat(Math.max(0,Math.min(1,val))),this.model):this.valpha},red:getset("rgb",0,maxfn(255)),green:getset("rgb",1,maxfn(255)),blue:getset("rgb",2,maxfn(255)),hue:getset(["hsl","hsv","hsl","hwb","hcg"],0,(function(val){return(val%360+360)%360})),saturationl:getset("hsl",1,maxfn(100)),lightness:getset("hsl",2,maxfn(100)),saturationv:getset("hsv",1,maxfn(100)),value:getset("hsv",2,maxfn(100)),chroma:getset("hcg",1,maxfn(100)),gray:getset("hcg",2,maxfn(100)),white:getset("hwb",1,maxfn(100)),wblack:getset("hwb",2,maxfn(100)),cyan:getset("cmyk",0,maxfn(100)),magenta:getset("cmyk",1,maxfn(100)),yellow:getset("cmyk",2,maxfn(100)),black:getset("cmyk",3,maxfn(100)),x:getset("xyz",0,maxfn(100)),y:getset("xyz",1,maxfn(100)),z:getset("xyz",2,maxfn(100)),l:getset("lab",0,maxfn(100)),a:getset("lab",1),b:getset("lab",2),keyword:function(val){return arguments.length?new Color(val):convert[this.model].keyword(this.color)},hex:function(val){return arguments.length?new Color(val):colorString.to.hex(this.rgb().round().color)},rgbNumber:function(){var rgb=this.rgb().color;return(255&rgb[0])<<16|(255&rgb[1])<<8|255&rgb[2]},luminosity:function(){for(var rgb=this.rgb().color,lum=[],i=0;i<rgb.length;i++){var chan=rgb[i]/255;lum[i]=chan<=.03928?chan/12.92:Math.pow((chan+.055)/1.055,2.4)}return.2126*lum[0]+.7152*lum[1]+.0722*lum[2]},contrast:function(color2){var lum1=this.luminosity(),lum2=color2.luminosity();return lum1>lum2?(lum1+.05)/(lum2+.05):(lum2+.05)/(lum1+.05)},level:function(color2){var contrastRatio=this.contrast(color2);return contrastRatio>=7.1?"AAA":contrastRatio>=4.5?"AA":""},isDark:function(){var rgb=this.rgb().color;return(299*rgb[0]+587*rgb[1]+114*rgb[2])/1e3<128},isLight:function(){return!this.isDark()},negate:function(){for(var rgb=this.rgb(),i=0;i<3;i++)rgb.color[i]=255-rgb.color[i];return rgb},lighten:function(ratio){var hsl=this.hsl();return hsl.color[2]+=hsl.color[2]*ratio,hsl},darken:function(ratio){var hsl=this.hsl();return hsl.color[2]-=hsl.color[2]*ratio,hsl},saturate:function(ratio){var hsl=this.hsl();return hsl.color[1]+=hsl.color[1]*ratio,hsl},desaturate:function(ratio){var hsl=this.hsl();return hsl.color[1]-=hsl.color[1]*ratio,hsl},whiten:function(ratio){var hwb=this.hwb();return hwb.color[1]+=hwb.color[1]*ratio,hwb},blacken:function(ratio){var hwb=this.hwb();return hwb.color[2]+=hwb.color[2]*ratio,hwb},grayscale:function(){var rgb=this.rgb().color,val=.3*rgb[0]+.59*rgb[1]+.11*rgb[2];return Color.rgb(val,val,val)},fade:function(ratio){return this.alpha(this.valpha-this.valpha*ratio)},opaquer:function(ratio){return this.alpha(this.valpha+this.valpha*ratio)},rotate:function(degrees){var hsl=this.hsl(),hue=hsl.color[0];return hue=(hue=(hue+degrees)%360)<0?360+hue:hue,hsl.color[0]=hue,hsl},mix:function(mixinColor,weight){if(!mixinColor||!mixinColor.rgb)throw new Error('Argument to "mix" was not a Color instance, but rather an instance of '+typeof mixinColor);var color1=mixinColor.rgb(),color2=this.rgb(),p=void 0===weight?.5:weight,w=2*p-1,a=color1.alpha()-color2.alpha(),w1=((w*a==-1?w:(w+a)/(1+w*a))+1)/2,w2=1-w1;return Color.rgb(w1*color1.red()+w2*color2.red(),w1*color1.green()+w2*color2.green(),w1*color1.blue()+w2*color2.blue(),color1.alpha()*p+color2.alpha()*(1-p))}},Object.keys(convert).forEach((function(model){if(-1===skippedModels.indexOf(model)){var channels=convert[model].channels;Color.prototype[model]=function(){if(this.model===model)return new Color(this);if(arguments.length)return new Color(arguments,model);var newAlpha="number"==typeof arguments[channels]?channels:this.valpha;return new Color(function assertArray(val){return Array.isArray(val)?val:[val]}(convert[this.model][model].raw(this.color)).concat(newAlpha),model)},Color[model]=function(color){return"number"==typeof color&&(color=zeroArray(_slice.call(arguments),channels)),new Color(color,model)}}})),module.exports=Color},"./node_modules/color/node_modules/color-convert/conversions.js":(module,__unused_webpack_exports,__webpack_require__)=>{var cssKeywords=__webpack_require__("./node_modules/color/node_modules/color-name/index.js"),reverseKeywords={};for(var key in cssKeywords)cssKeywords.hasOwnProperty(key)&&(reverseKeywords[cssKeywords[key]]=key);var convert=module.exports={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};for(var model in convert)if(convert.hasOwnProperty(model)){if(!("channels"in convert[model]))throw new Error("missing channels property: "+model);if(!("labels"in convert[model]))throw new Error("missing channel labels property: "+model);if(convert[model].labels.length!==convert[model].channels)throw new Error("channel and label counts mismatch: "+model);var channels=convert[model].channels,labels=convert[model].labels;delete convert[model].channels,delete convert[model].labels,Object.defineProperty(convert[model],"channels",{value:channels}),Object.defineProperty(convert[model],"labels",{value:labels})}convert.rgb.hsl=function(rgb){var h,l,r=rgb[0]/255,g=rgb[1]/255,b=rgb[2]/255,min=Math.min(r,g,b),max=Math.max(r,g,b),delta=max-min;return max===min?h=0:r===max?h=(g-b)/delta:g===max?h=2+(b-r)/delta:b===max&&(h=4+(r-g)/delta),(h=Math.min(60*h,360))<0&&(h+=360),l=(min+max)/2,[h,100*(max===min?0:l<=.5?delta/(max+min):delta/(2-max-min)),100*l]},convert.rgb.hsv=function(rgb){var rdif,gdif,bdif,h,s,r=rgb[0]/255,g=rgb[1]/255,b=rgb[2]/255,v=Math.max(r,g,b),diff=v-Math.min(r,g,b),diffc=function(c){return(v-c)/6/diff+.5};return 0===diff?h=s=0:(s=diff/v,rdif=diffc(r),gdif=diffc(g),bdif=diffc(b),r===v?h=bdif-gdif:g===v?h=1/3+rdif-bdif:b===v&&(h=2/3+gdif-rdif),h<0?h+=1:h>1&&(h-=1)),[360*h,100*s,100*v]},convert.rgb.hwb=function(rgb){var r=rgb[0],g=rgb[1],b=rgb[2];return[convert.rgb.hsl(rgb)[0],100*(1/255*Math.min(r,Math.min(g,b))),100*(b=1-1/255*Math.max(r,Math.max(g,b)))]},convert.rgb.cmyk=function(rgb){var k,r=rgb[0]/255,g=rgb[1]/255,b=rgb[2]/255;return[100*((1-r-(k=Math.min(1-r,1-g,1-b)))/(1-k)||0),100*((1-g-k)/(1-k)||0),100*((1-b-k)/(1-k)||0),100*k]},convert.rgb.keyword=function(rgb){var reversed=reverseKeywords[rgb];if(reversed)return reversed;var currentClosestKeyword,x,y,currentClosestDistance=1/0;for(var keyword in cssKeywords)if(cssKeywords.hasOwnProperty(keyword)){var value=cssKeywords[keyword],distance=(x=rgb,y=value,Math.pow(x[0]-y[0],2)+Math.pow(x[1]-y[1],2)+Math.pow(x[2]-y[2],2));distance<currentClosestDistance&&(currentClosestDistance=distance,currentClosestKeyword=keyword)}return currentClosestKeyword},convert.keyword.rgb=function(keyword){return cssKeywords[keyword]},convert.rgb.xyz=function(rgb){var r=rgb[0]/255,g=rgb[1]/255,b=rgb[2]/255;return[100*(.4124*(r=r>.04045?Math.pow((r+.055)/1.055,2.4):r/12.92)+.3576*(g=g>.04045?Math.pow((g+.055)/1.055,2.4):g/12.92)+.1805*(b=b>.04045?Math.pow((b+.055)/1.055,2.4):b/12.92)),100*(.2126*r+.7152*g+.0722*b),100*(.0193*r+.1192*g+.9505*b)]},convert.rgb.lab=function(rgb){var xyz=convert.rgb.xyz(rgb),x=xyz[0],y=xyz[1],z=xyz[2];return y/=100,z/=108.883,x=(x/=95.047)>.008856?Math.pow(x,1/3):7.787*x+16/116,[116*(y=y>.008856?Math.pow(y,1/3):7.787*y+16/116)-16,500*(x-y),200*(y-(z=z>.008856?Math.pow(z,1/3):7.787*z+16/116))]},convert.hsl.rgb=function(hsl){var t1,t2,t3,rgb,val,h=hsl[0]/360,s=hsl[1]/100,l=hsl[2]/100;if(0===s)return[val=255*l,val,val];t1=2*l-(t2=l<.5?l*(1+s):l+s-l*s),rgb=[0,0,0];for(var i=0;i<3;i++)(t3=h+1/3*-(i-1))<0&&t3++,t3>1&&t3--,val=6*t3<1?t1+6*(t2-t1)*t3:2*t3<1?t2:3*t3<2?t1+(t2-t1)*(2/3-t3)*6:t1,rgb[i]=255*val;return rgb},convert.hsl.hsv=function(hsl){var h=hsl[0],s=hsl[1]/100,l=hsl[2]/100,smin=s,lmin=Math.max(l,.01);return s*=(l*=2)<=1?l:2-l,smin*=lmin<=1?lmin:2-lmin,[h,100*(0===l?2*smin/(lmin+smin):2*s/(l+s)),100*((l+s)/2)]},convert.hsv.rgb=function(hsv){var h=hsv[0]/60,s=hsv[1]/100,v=hsv[2]/100,hi=Math.floor(h)%6,f=h-Math.floor(h),p=255*v*(1-s),q=255*v*(1-s*f),t=255*v*(1-s*(1-f));switch(v*=255,hi){case 0:return[v,t,p];case 1:return[q,v,p];case 2:return[p,v,t];case 3:return[p,q,v];case 4:return[t,p,v];case 5:return[v,p,q]}},convert.hsv.hsl=function(hsv){var lmin,sl,l,h=hsv[0],s=hsv[1]/100,v=hsv[2]/100,vmin=Math.max(v,.01);return l=(2-s)*v,sl=s*vmin,[h,100*(sl=(sl/=(lmin=(2-s)*vmin)<=1?lmin:2-lmin)||0),100*(l/=2)]},convert.hwb.rgb=function(hwb){var i,v,f,n,r,g,b,h=hwb[0]/360,wh=hwb[1]/100,bl=hwb[2]/100,ratio=wh+bl;switch(ratio>1&&(wh/=ratio,bl/=ratio),f=6*h-(i=Math.floor(6*h)),1&i&&(f=1-f),n=wh+f*((v=1-bl)-wh),i){default:case 6:case 0:r=v,g=n,b=wh;break;case 1:r=n,g=v,b=wh;break;case 2:r=wh,g=v,b=n;break;case 3:r=wh,g=n,b=v;break;case 4:r=n,g=wh,b=v;break;case 5:r=v,g=wh,b=n}return[255*r,255*g,255*b]},convert.cmyk.rgb=function(cmyk){var c=cmyk[0]/100,m=cmyk[1]/100,y=cmyk[2]/100,k=cmyk[3]/100;return[255*(1-Math.min(1,c*(1-k)+k)),255*(1-Math.min(1,m*(1-k)+k)),255*(1-Math.min(1,y*(1-k)+k))]},convert.xyz.rgb=function(xyz){var r,g,b,x=xyz[0]/100,y=xyz[1]/100,z=xyz[2]/100;return g=-.9689*x+1.8758*y+.0415*z,b=.0557*x+-.204*y+1.057*z,r=(r=3.2406*x+-1.5372*y+-.4986*z)>.0031308?1.055*Math.pow(r,1/2.4)-.055:12.92*r,g=g>.0031308?1.055*Math.pow(g,1/2.4)-.055:12.92*g,b=b>.0031308?1.055*Math.pow(b,1/2.4)-.055:12.92*b,[255*(r=Math.min(Math.max(0,r),1)),255*(g=Math.min(Math.max(0,g),1)),255*(b=Math.min(Math.max(0,b),1))]},convert.xyz.lab=function(xyz){var x=xyz[0],y=xyz[1],z=xyz[2];return y/=100,z/=108.883,x=(x/=95.047)>.008856?Math.pow(x,1/3):7.787*x+16/116,[116*(y=y>.008856?Math.pow(y,1/3):7.787*y+16/116)-16,500*(x-y),200*(y-(z=z>.008856?Math.pow(z,1/3):7.787*z+16/116))]},convert.lab.xyz=function(lab){var x,y,z,l=lab[0];x=lab[1]/500+(y=(l+16)/116),z=y-lab[2]/200;var y2=Math.pow(y,3),x2=Math.pow(x,3),z2=Math.pow(z,3);return y=y2>.008856?y2:(y-16/116)/7.787,x=x2>.008856?x2:(x-16/116)/7.787,z=z2>.008856?z2:(z-16/116)/7.787,[x*=95.047,y*=100,z*=108.883]},convert.lab.lch=function(lab){var h,l=lab[0],a=lab[1],b=lab[2];return(h=360*Math.atan2(b,a)/2/Math.PI)<0&&(h+=360),[l,Math.sqrt(a*a+b*b),h]},convert.lch.lab=function(lch){var hr,l=lch[0],c=lch[1];return hr=lch[2]/360*2*Math.PI,[l,c*Math.cos(hr),c*Math.sin(hr)]},convert.rgb.ansi16=function(args){var r=args[0],g=args[1],b=args[2],value=1 in arguments?arguments[1]:convert.rgb.hsv(args)[2];if(0===(value=Math.round(value/50)))return 30;var ansi=30+(Math.round(b/255)<<2|Math.round(g/255)<<1|Math.round(r/255));return 2===value&&(ansi+=60),ansi},convert.hsv.ansi16=function(args){return convert.rgb.ansi16(convert.hsv.rgb(args),args[2])},convert.rgb.ansi256=function(args){var r=args[0],g=args[1],b=args[2];return r===g&&g===b?r<8?16:r>248?231:Math.round((r-8)/247*24)+232:16+36*Math.round(r/255*5)+6*Math.round(g/255*5)+Math.round(b/255*5)},convert.ansi16.rgb=function(args){var color=args%10;if(0===color||7===color)return args>50&&(color+=3.5),[color=color/10.5*255,color,color];var mult=.5*(1+~~(args>50));return[(1&color)*mult*255,(color>>1&1)*mult*255,(color>>2&1)*mult*255]},convert.ansi256.rgb=function(args){if(args>=232){var c=10*(args-232)+8;return[c,c,c]}var rem;return args-=16,[Math.floor(args/36)/5*255,Math.floor((rem=args%36)/6)/5*255,rem%6/5*255]},convert.rgb.hex=function(args){var string=(((255&Math.round(args[0]))<<16)+((255&Math.round(args[1]))<<8)+(255&Math.round(args[2]))).toString(16).toUpperCase();return"000000".substring(string.length)+string},convert.hex.rgb=function(args){var match=args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!match)return[0,0,0];var colorString=match[0];3===match[0].length&&(colorString=colorString.split("").map((function(char){return char+char})).join(""));var integer=parseInt(colorString,16);return[integer>>16&255,integer>>8&255,255&integer]},convert.rgb.hcg=function(rgb){var hue,r=rgb[0]/255,g=rgb[1]/255,b=rgb[2]/255,max=Math.max(Math.max(r,g),b),min=Math.min(Math.min(r,g),b),chroma=max-min;return hue=chroma<=0?0:max===r?(g-b)/chroma%6:max===g?2+(b-r)/chroma:4+(r-g)/chroma+4,hue/=6,[360*(hue%=1),100*chroma,100*(chroma<1?min/(1-chroma):0)]},convert.hsl.hcg=function(hsl){var s=hsl[1]/100,l=hsl[2]/100,c=1,f=0;return(c=l<.5?2*s*l:2*s*(1-l))<1&&(f=(l-.5*c)/(1-c)),[hsl[0],100*c,100*f]},convert.hsv.hcg=function(hsv){var s=hsv[1]/100,v=hsv[2]/100,c=s*v,f=0;return c<1&&(f=(v-c)/(1-c)),[hsv[0],100*c,100*f]},convert.hcg.rgb=function(hcg){var h=hcg[0]/360,c=hcg[1]/100,g=hcg[2]/100;if(0===c)return[255*g,255*g,255*g];var mg,pure=[0,0,0],hi=h%1*6,v=hi%1,w=1-v;switch(Math.floor(hi)){case 0:pure[0]=1,pure[1]=v,pure[2]=0;break;case 1:pure[0]=w,pure[1]=1,pure[2]=0;break;case 2:pure[0]=0,pure[1]=1,pure[2]=v;break;case 3:pure[0]=0,pure[1]=w,pure[2]=1;break;case 4:pure[0]=v,pure[1]=0,pure[2]=1;break;default:pure[0]=1,pure[1]=0,pure[2]=w}return mg=(1-c)*g,[255*(c*pure[0]+mg),255*(c*pure[1]+mg),255*(c*pure[2]+mg)]},convert.hcg.hsv=function(hcg){var c=hcg[1]/100,v=c+hcg[2]/100*(1-c),f=0;return v>0&&(f=c/v),[hcg[0],100*f,100*v]},convert.hcg.hsl=function(hcg){var c=hcg[1]/100,l=hcg[2]/100*(1-c)+.5*c,s=0;return l>0&&l<.5?s=c/(2*l):l>=.5&&l<1&&(s=c/(2*(1-l))),[hcg[0],100*s,100*l]},convert.hcg.hwb=function(hcg){var c=hcg[1]/100,v=c+hcg[2]/100*(1-c);return[hcg[0],100*(v-c),100*(1-v)]},convert.hwb.hcg=function(hwb){var w=hwb[1]/100,v=1-hwb[2]/100,c=v-w,g=0;return c<1&&(g=(v-c)/(1-c)),[hwb[0],100*c,100*g]},convert.apple.rgb=function(apple){return[apple[0]/65535*255,apple[1]/65535*255,apple[2]/65535*255]},convert.rgb.apple=function(rgb){return[rgb[0]/255*65535,rgb[1]/255*65535,rgb[2]/255*65535]},convert.gray.rgb=function(args){return[args[0]/100*255,args[0]/100*255,args[0]/100*255]},convert.gray.hsl=convert.gray.hsv=function(args){return[0,0,args[0]]},convert.gray.hwb=function(gray){return[0,100,gray[0]]},convert.gray.cmyk=function(gray){return[0,0,0,gray[0]]},convert.gray.lab=function(gray){return[gray[0],0,0]},convert.gray.hex=function(gray){var val=255&Math.round(gray[0]/100*255),string=((val<<16)+(val<<8)+val).toString(16).toUpperCase();return"000000".substring(string.length)+string},convert.rgb.gray=function(rgb){return[(rgb[0]+rgb[1]+rgb[2])/3/255*100]}},"./node_modules/color/node_modules/color-convert/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{var conversions=__webpack_require__("./node_modules/color/node_modules/color-convert/conversions.js"),route=__webpack_require__("./node_modules/color/node_modules/color-convert/route.js"),convert={};Object.keys(conversions).forEach((function(fromModel){convert[fromModel]={},Object.defineProperty(convert[fromModel],"channels",{value:conversions[fromModel].channels}),Object.defineProperty(convert[fromModel],"labels",{value:conversions[fromModel].labels});var routes=route(fromModel);Object.keys(routes).forEach((function(toModel){var fn=routes[toModel];convert[fromModel][toModel]=function wrapRounded(fn){var wrappedFn=function(args){if(null==args)return args;arguments.length>1&&(args=Array.prototype.slice.call(arguments));var result=fn(args);if("object"==typeof result)for(var len=result.length,i=0;i<len;i++)result[i]=Math.round(result[i]);return result};return"conversion"in fn&&(wrappedFn.conversion=fn.conversion),wrappedFn}(fn),convert[fromModel][toModel].raw=function wrapRaw(fn){var wrappedFn=function(args){return null==args?args:(arguments.length>1&&(args=Array.prototype.slice.call(arguments)),fn(args))};return"conversion"in fn&&(wrappedFn.conversion=fn.conversion),wrappedFn}(fn)}))})),module.exports=convert},"./node_modules/color/node_modules/color-convert/route.js":(module,__unused_webpack_exports,__webpack_require__)=>{var conversions=__webpack_require__("./node_modules/color/node_modules/color-convert/conversions.js");function deriveBFS(fromModel){var graph=function buildGraph(){for(var graph={},models=Object.keys(conversions),len=models.length,i=0;i<len;i++)graph[models[i]]={distance:-1,parent:null};return graph}(),queue=[fromModel];for(graph[fromModel].distance=0;queue.length;)for(var current=queue.pop(),adjacents=Object.keys(conversions[current]),len=adjacents.length,i=0;i<len;i++){var adjacent=adjacents[i],node=graph[adjacent];-1===node.distance&&(node.distance=graph[current].distance+1,node.parent=current,queue.unshift(adjacent))}return graph}function link(from,to){return function(args){return to(from(args))}}function wrapConversion(toModel,graph){for(var path=[graph[toModel].parent,toModel],fn=conversions[graph[toModel].parent][toModel],cur=graph[toModel].parent;graph[cur].parent;)path.unshift(graph[cur].parent),fn=link(conversions[graph[cur].parent][cur],fn),cur=graph[cur].parent;return fn.conversion=path,fn}module.exports=function(fromModel){for(var graph=deriveBFS(fromModel),conversion={},models=Object.keys(graph),len=models.length,i=0;i<len;i++){var toModel=models[i];null!==graph[toModel].parent&&(conversion[toModel]=wrapConversion(toModel,graph))}return conversion}},"./node_modules/color/node_modules/color-name/index.js":module=>{"use strict";module.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},"./node_modules/simple-swizzle/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var isArrayish=__webpack_require__("./node_modules/simple-swizzle/node_modules/is-arrayish/index.js"),concat=Array.prototype.concat,slice=Array.prototype.slice,swizzle=module.exports=function swizzle(args){for(var results=[],i=0,len=args.length;i<len;i++){var arg=args[i];isArrayish(arg)?results=concat.call(results,slice.call(arg)):results.push(arg)}return results};swizzle.wrap=function(fn){return function(){return fn(swizzle(arguments))}}},"./node_modules/simple-swizzle/node_modules/is-arrayish/index.js":module=>{module.exports=function isArrayish(obj){return!(!obj||"string"==typeof obj)&&(obj instanceof Array||Array.isArray(obj)||obj.length>=0&&(obj.splice instanceof Function||Object.getOwnPropertyDescriptor(obj,obj.length-1)&&"String"!==obj.constructor.name))}}}]);