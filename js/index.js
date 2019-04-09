$(function () {
    //0.监听按钮的实时输入
    //change
    //当用于 text field 或 text area 时，该事件会在元素失去焦点时发生。
    //不能实时监听
    // $('.comment').change(function () {
    //     console.log($(this).val());;
    // });
    $('.comment').keyup(function () {
        console.log($(this).val());
        if ($(this).val().length>0){
        //    让按钮可用
            $('.send').prop('disabled',false);
        }else{
            //    让按钮不可用
            $('.send').prop('disabled',true);
        }
    });
    //1.监听发布按钮的点击
    $('.send').click(function () {
        // alert('aa');
    //    拿到用户输入的内容
        var $text = $('.comment').val();
        //清空输入框的内容
        $('.comment').val('');
        //让发布按钮重新不可用
        $(this).prop('disabled',true);
    //    根据内容创建节点
        var $weibo = createEle($text);
        $('.messageList').prepend($weibo);
    });
    
    //监听顶点击
    $('body').delegate('.infoTop','click',function () {
        //text()或取的是字符串，不能进行计数，所以转化为整数
        // console.log(typeof $(this).text());
        $(this).text(parseInt($(this).text()) + 1);

    });
    //监听踩点击
    $('body').delegate('.infoDown','click',function () {
        $(this).text(parseInt($(this).text()) + 1);
    });
    //监听删除点击
    $('body').delegate('.infoDel','click',function () {
        $(this).parents('.info').remove();
    });
    //创建节点方法
    function createEle(text) {
        var $weibo = $('<div class="info">\n'+
            '<p class="infoText">'+text+'</p>\n'+
        '<p class="infoOperation">\n'+
            '<span class="infoTime">'+formatTime()+'</span>\n'+
        '<span class="infoHandle">\n'+
        '<a href="javascript:;" class="infoTop">0</a>\n'+
            '<a href="javascript:;" class="infoDown">0</a>\n'+
            '<a href="javascript:;" class="infoDel">删除</a>\n'+
            '</span>\n'+
            '</p>\n'+
            '</div>');
        return $weibo;
    }
//    生成时间方法
    function formatTime() {
        var date = new Date();
        var arr = [date.getFullYear()+'-'+
        date.getMonth()+1+'-'+
        date.getDate()+','+
        date.getHours()+':'+
        date.getMinutes()+':'+
        date.getSeconds()];
        // console.log(date.getFullYear());
        // console.log(date.getMonth()+1);
        // console.log(date.getDate());
        // console.log(date.getHours());
        // console.log(date.getMinutes());
        // console.log(date.getSeconds());
        //将数组转化为字符串
        return arr.join('');
    }

});
