layui.use(['form','layer','laydate','table','upload'],function(){
    var form = layui.form,
        layer = parent.layer === undefined ? layui.layer : top.layer,
        $ = layui.jquery,
        laydate = layui.laydate,
        upload = layui.upload,
        table = layui.table;

    //数据列表
    var tableIns = table.render({
        elem: '#linkList',
        url : 'list.json',
        page : true,
        cellMinWidth : 95,
        height : "full-108",
        limit : 20,
        limits : [10,15,20,25],
        cols : [[
            {type: "checkbox", width:50},
            {field: 't1', title: '标题1', align:'left'},
            {field: 't2', title: '标题2', align:'center'},
            {field: 't2', title: '标题3', align:'center'},
            {field: 't2', title: '标题4', align:'center'},
            {field: 't3', title: '标题5', align:'center'},
            {title: '操作', width:180, templet:'#linkListBar', align:'center'}
        ]]
    });

    //数据列表事件操作
    table.on('tool(linkList)', function(obj){
        var layEvent = obj.event,
            data = obj.data;
        if (layEvent === 'mod') {
            layer.open({
                title : "修改",
                type : 2,
                area : ["360px","240px"],
                content: ['/bicms/page/xtgl/listModify.html','no']
            });
        }
        if (layEvent === 'del') {
            layer.confirm('确定要删除选中的模型么？', {
                icon: 3,
                title: '提示信息',
                btn: ['确定','取消']
            }, function(){
                layer.msg('删除模型成功', {icon: 1});
            }, function(){
                layer.msg('您点击了取消', {icon: 1});
            });
        }
    });

    //搜索
    $(".search_btn").on("click",function(){
        if($(".searchVal").val() == ''){
            layer.msg("请输入搜索的内容");
        }
    });

    //删除
    $(".del").on("click",function(){
        layer.confirm('确定要删除选中的部门么？', {
            icon: 3,
            title: '提示信息',
            btn: ['确定','取消']
        }, function(){
            layer.msg('删除成功', {icon: 1});
        }, function(){
            layer.msg('取消成功', {icon: 1});
        });
    });

    //新建1
    $(".newBuildOne").click(function(){
        layer.open({
            title : "新建",
            type : 2,
            area : ["360px","240px"],
            content: ['/bicms/page/xtgl/listNew1.html','no']
        })
    });

    //新建2
    $(".newBuildTwo").click(function(){
        layer.open({
            title : "新建",
            type : 2,
            area : ["360px","334px"],
            content: ['/bicms/page/xtgl/listNew2.html','no']
        })
    });

    //修改
    $(".modify").click(function(){
        layer.open({
            title : "修改",
            type : 2,
            area : ["360px","240px"],
            content: ['/bicms/page/xtgl/listModify.html','no']
        })
    });

    //样式1
    $(".ys1").click(function(){
        layer.open({
            title : "样式1",
            type : 2,
            area : ["350px","350px"],
            content: ['/bicms/page/xtgl/listYs1.html','no']
        })
    });
    //样式2
    $(".ys2").click(function(){
        layer.open({
            title : "样式2",
            type : 2,
            area : ["440px","400px"],
            content: ['/bicms/page/xtgl/listYs2.html','no']
        })
    });
})