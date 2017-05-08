var _MYCHART_ = _MYCHART_ || ""
  , _OPTIONS_ = _OPTIONS_ || {};
;(function($,doc,win){
var EC = function(obj,opt){
  this.obj = obj;
  this.setting = {
    echartObj: "",
    option   : null
  };
  $.extend(this.setting,opt);
  // 初始化
  this.init(this.setting);
};
EC.prototype = {
  echarts : function(opt){
    var self = this;
    // 环境依赖
    require.config({
      paths:{ 
        'echarts' : './js/echarts/echarts'
      }
    });
    require([
      'echarts'
    ],function(ec) {
      _MYCHART_ = ec.init(document.getElementById(opt.echartObj));
      _MYCHART_.setOption(opt.option);
    }); 
  }
};
EC.prototype.init = function(option){
  this.echarts(option);
}
window.EC = EC;
})(jQuery,document,window);