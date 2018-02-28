$(function(){
    // 登录
    $('#login').click(function(){
        var data = $("form").serialize();
        $.ajax({
            type:"post",
            dataType:"json",
            data:data,
            success:function(res){
                if(res.code == 1){
                    window.location.href = res.result;
                }else{
                    alert(res.message);
                    $('#message').text(res.message);
                }
            }
        });
    });

    // // 设置用户信息
    // if($("id").size() == 0){
    //     $.ajax({
    //         type:"post",
    //         dataType:"json",
    //         data:data,
    //         success:function(res){
    //             if(res.code == 1){
    //                 window.location.href = res.result;
    //             }else{
    //                 alert(res.message);
    //                 $('#message').text(res.message);
    //             }
    //         }
    //     });
    // }

    // 表单提交
    $('.form-submit').click(function(){
        var form     = $(this).parents('form');
        var formData = form.serialize();
        var action   = form.attr('action');
        var method   = form.attr('method');
        $.ajax({
            url      : action,
            type     : method,
            dataType : "json",
            data     : formData,
            success  : function(res){
                if(res.code == 1){
                    window.location.href = res.result;
                }else{
                    alert(res.message);
                    $('#message').text(res.message);
                }
            }
        });
    });
});