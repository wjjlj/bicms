layui.use(['form','layer','laydate','table','upload'],function(){
    var form = layui.form,
        layer = parent.layer === undefined ? layui.layer : top.layer,
        $ = layui.jquery,
        laydate = layui.laydate,
        upload = layui.upload,
        table = layui.table;

    //友链列表
    var tableIns = table.render({
        elem: '#linkList',
        url : 'mxpz.json',
        page : true,
        cellMinWidth : 95,
        height : "full-108",
        limit : 20,
        limits : [10,15,20,25],
        id : "linkListTab",
        cols : [[
            {type: "checkbox", width:50},
            {field: 't1', title: '模型名称', align:'left'},
            {field: 't2', title: '模型类型', width:150, align:'left'},
            {field: 't3', title: '创建人', width:100, align:'center'},
            {field: 't4', title: '创建日期', width:120, align:'center'},
            {field: 't5', title: '审批状态', width:120, align:'center'},
            {field: 't6', title: '启用状态', width:100, align:'center'},
            {field: 't7', title: '最新版本', width:100, align:'center'},
            {field: 't8', title: '操作', width:240, align:'center', templet:function(){
                    return '<a href="javascript:;" style="margin-right: 10px;color:#3498db"><i class="fa fa-pencil"></i> 修改</a><a href="javascript:;" lay-event="del" style="margin-right: 10px;color:#3498db"><i class="fa fa-trash-o"></i> 删除</a><a href="javascript:;" style="color:#3498db"><i class="fa fa-history"></i> 历史版本</a>';
            }}
        ]]
    });

    //搜索【此功能需要后台配合，所以暂时没有动态效果演示】
    $(".search_btn").on("click",function(){
        if($(".searchVal").val() != ''){
            table.reload("linkListTab",{
                page: {
                    curr: 1 //重新从第 1 页开始
                },
                where: {
                    key: $(".searchVal").val()  //搜索的关键字
                }
            })
        }else{
            layer.msg("请输入搜索的内容");
        }
    });

    //添加友链
    function addLink(edit){
        var index = layer.open({
            title : "新建",
            type : 2,
            area : ["380px","483px"],
            content : "/bicms/page/mxgl/mxpzNew.html",
            success : function(layero, index){
                var body = $($(".layui-layer-iframe",parent.document).find("iframe")[0].contentWindow.document.body);
                if(edit){
                    body.find(".linkLogo").css("background","#fff");
                    body.find(".linkLogoImg").attr("src",edit.logo);
                    body.find(".linkName").val(edit.websiteName);
                    body.find(".linkUrl").val(edit.websiteUrl);
                    body.find(".masterEmail").val(edit.masterEmail);
                    body.find(".showAddress").prop("checked",edit.showAddress);
                    form.render();
                }
                // setTimeout(function(){
                //     layui.layer.tips('点击此处返回友链列表', '.layui-layer-setwin .layui-layer-close', {
                //         tips: 3
                //     });
                // },500)
            }
        })
    }
    $(".addLink_btn").click(function(){
        addLink();
    })

    //批量删除
    $(".delAll_btn").click(function(){
        var checkStatus = table.checkStatus('linkListTab'),
            data = checkStatus.data,
            linkId = [];
        if(data.length > 0) {
            for (var i in data) {
                linkId.push(data[i].newsId);
            }
            layer.confirm('确定删除选中的友链？', {icon: 3, title: '提示信息'}, function (index) {
                // $.get("删除友链接口",{
                //     linkId : linkId  //将需要删除的linkId作为参数传入
                // },function(data){
                tableIns.reload();
                layer.close(index);
                // })
            })
        }else{
            layer.msg("请选择需要删除的文章");
        }
    })

    //列表操作
    table.on('tool(linkList)', function(obj){
        var layEvent = obj.event,
            data = obj.data;

        if(layEvent === 'edit'){ //编辑
            addLink(data);
        } else if(layEvent === 'del'){ //删除
            layer.confirm('确定删除此记录吗？',{icon:3, title:'提示信息'},function(index){
                // $.get("删除友链接口",{
                //     linkId : data.linkId  //将需要删除的linkId作为参数传入
                // },function(data){
                    tableIns.reload();
                    layer.close(index);
                // })
            });
        }
    });

    //上传logo
    upload.render({
        elem: '.linkLogo',
        url: '../../json/linkLogo.json',
        method : "get",  //此处是为了演示之用，实际使用中请将此删除，默认用post方式提交
        done: function(res, index, upload){
            var num = parseInt(4*Math.random());  //生成0-4的随机数，随机显示一个头像信息
            $('.linkLogoImg').attr('src',res.data[num].src);
            $('.linkLogo').css("background","#fff");
        }
    });

    //格式化时间
    function filterTime(val){
        if(val < 10){
            return "0" + val;
        }else{
            return val;
        }
    }
    //添加时间
    var time = new Date();
    var submitTime = time.getFullYear()+'-'+filterTime(time.getMonth()+1)+'-'+filterTime(time.getDate())+' '+filterTime(time.getHours())+':'+filterTime(time.getMinutes())+':'+filterTime(time.getSeconds());

    form.on("submit(addLink)",function(data){
        //弹出loading
        var index = top.layer.msg('数据提交中，请稍候',{icon: 16,time:false,shade:0.8});
        // 实际使用时的提交信息
        // $.post("上传路径",{
        //     linkLogoImg : $(".linkLogo").attr("src"),  //logo
        //     linkName : $(".linkName").val(),  //网站名称
        //     linkUrl : $(".linkUrl").val(),    //网址
        //     masterEmail : $('.masterEmail').val(),    //站长邮箱
        //     showAddress : data.filed.showAddress == "on" ? "checked" : "",    //展示位置
        //     newsTime : submitTime,    //发布时间
        // },function(res){
        //
        // })
        setTimeout(function(){
            top.layer.close(index);
            top.layer.msg("文章添加成功！");
            layer.closeAll("iframe");
            //刷新父页面
            $(".layui-tab-item.layui-show",parent.document).find("iframe")[0].contentWindow.location.reload();
        },500);
        return false;
    })

})