/*! layer demo */

;!function(){

var gather = {
  htdy: $('html, body')
};


//一睹为快
gather.demo1 = $('#demo1');
$('#chutiyan>a').on('click', function(){
  var othis = $(this), index = othis.index();
  switch(index){
    case 0:
//相册层

$.getJSON('https://cdn.jsdelivr.net/gh/cy-j/ysni@5.0.0/jcweb/ysni/photos.json?v='+new Date, function(json){
  layer.photos({
    photos: json //格式见API文档手册页
    ,anim: 5 //0-6的选择，指定弹出图片动画类型，默认随机
  });
});
    break;

  }
  
  //定位到对应的
  var p = gather.demo1.find('p').eq(index);
  var top = p.parent().position().top;
  var ol = gather.demo1.find('.layui-code-ol');
  
  gather.demo1.find('.layui-code-ol').animate({
    scrollTop: ol.scrollTop() + top
  }, 0);
});

}();