(function ($) {
 $.fn.paper = function(newAtrr) { //定义插件的名称，这里为userCp
     var dft = {
     //以下为该插件的属性及其默认值
         paper: "#paper", 
         class: 'm_t'
     };
     var ops = $.extend(dft,newAtrr);
       var list = $(this).val().replace(/ +/g, "").replace(/[0-9]+、/g, "*").split("*");
    for(var i = 1; i< list.length;i++){
        var l = list[i].split("\n");
       
        var m_t=$('<div class='+ops.class+'>');
//        题目
        $('<p>'+i+'、'+l[0].replace(/\s+/g,'')+'</p>').appendTo(m_t);
//        选项
        for(var j=1;j<l.length-2;j++){
            $('<p>').text(l[j].replace(/\s+/g,'')).appendTo(m_t);
        }
//        答案
        var p = l[l.length-2].replace(/\s+/g, "").split("答案：");
        console.log(p);
        if(p[1] !=""){
        $("<p><strong>答案：<font color='#ff0000'>"+p[1].toUpperCase()+"</font></strong></p>").appendTo(m_t);
            }
//        代码插入页面
        m_t.appendTo($(ops.paper)); 
    } 
 }
})(jQuery);