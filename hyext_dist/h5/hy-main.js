
//Runtime环境下面需要先加载adapter_base.js
console.log('navigator.userAgent:',navigator.userAgent);
if (window['navigator'] == undefined || window['navigator'] == null || navigator.userAgent.toLowerCase().indexOf('huya') >=0 ) {
    require('hy-adapter/adapter_base.js');
}

    
//加载资源
hyAdapterLoader.loadImages([]);
        
//加载脚本
hyAdapterLoader.loadScripts(["./lib/pixi.js", "./lib/unsafe-eval.min.js", "./util.js", "./component/pixel-conversion.js", "./component/joystick.js", "./component/health-bar.js", "./component/button.js", "./index.js"]);
        