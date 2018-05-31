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
        url : 'listOne.json',
        page : true,
        cellMinWidth : 95,
        height : "full-108",
        limit : 20,
        limits : [10,15,20,25],
        cols : [[
            {type: "checkbox", width:50},
            {field: 't1', title: '名称', align:'left'},
            {field: 't2', title: '备注', align:'center'},
            {field: 't3', title: '序号', align:'center'},
            {title: '操作', width:270, templet:'#linkListBar', align:'center'}
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
                area : ["360px","238px"],
                content: ['/bicms/page/fxkgl/listOneModify.html','no']
            });
        }
        if (layEvent === 'data') {
            parent.tab.tabAdd($(this));
        }
        if (layEvent === 'del') {
            layer.confirm('确定要删除选中的数据表集么？', {
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

    //数据列表(数据表管理)
    var tableIns = table.render({
        elem: '#linkList_1',
        url : 'listOne_1.json',
        page : true,
        cellMinWidth : 95,
        height : "full-108",
        limit : 20,
        limits : [10,15,20,25],
        cols : [[
            {type: "checkbox", width:50},
            {field: 't1', title: '数据表集', align:'left'},
            {field: 't2', title: '表名称', align:'center'},
            {field: 't3', title: '表标签', align:'center'},
            {field: 't4', title: '备注', align:'center'},
            {title: '操作', width:270, templet:'#linkList_1Bar', align:'center'}
        ]]
    });

    //数据列表事件操作(数据表管理)
    table.on('tool(linkList_1)', function(obj){
        var layEvent = obj.event,
            data = obj.data;
        if (layEvent === 'mod') {
            layer.open({
                title : "修改",
                type : 2,
                area : ["360px","286px"],
                content: ['/bicms/page/fxkgl/listOneModify_1.html','no']
            });
        }
        if (layEvent === 'del') {
            layer.confirm('确定要删除选中的数据表么？', {
                icon: 3,
                title: '提示信息',
                btn: ['确定','取消']
            }, function(){
                layer.msg('删除成功', {icon: 1});
            }, function(){
                layer.msg('您点击了取消', {icon: 1});
            });
        }
    });

    //数据列表(列管理)
    var tableIns = table.render({
        elem: '#linkList_2',
        url : 'listOne_2.json',
        page : true,
        cellMinWidth : 95,
        height : "full-108",
        limit : 20,
        limits : [10,15,20,25],
        cols : [[
            {type: "checkbox", width:50},
            {field: 't1', title: '序号', width: 60, align:'center'},
            {field: 't2', title: '列名称', align:'left'},
            {field: 't3', title: '列标签', align:'left'},
            {field: 't4', title: '类型', align:'center'},
            {field: 't5', title: '长度', align:'center'},
            {field: 't6', title: '备注', align:'left'},
            {title: '操作', width:270, templet:'#linkList_2Bar', align:'center'}
        ]]
    });

    //数据列表事件操作(列管理)
    table.on('tool(linkList_2)', function(obj){
        var layEvent = obj.event,
            data = obj.data;
        if (layEvent === 'mod') {
            layer.open({
                title : "修改",
                type : 2,
                area : ["360px","396px"],
                content: ['/bicms/page/fxkgl/listOneModify_2.html','no']
            });
        }
        if (layEvent === 'del') {
            layer.confirm('确定要删除选中的数据列么？', {
                icon: 3,
                title: '提示信息',
                btn: ['确定','取消']
            }, function(){
                layer.msg('删除成功', {icon: 1});
            }, function(){
                layer.msg('您点击了取消', {icon: 1});
            });
        }
        if (layEvent === 'up') {
            layer.msg('上移事件')
        }
        if (layEvent === 'dn') {
            layer.msg('下移事件')
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
        layer.confirm('确定要删除选中的数据表集么？', {
            icon: 3,
            title: '提示信息',
            btn: ['确定','取消']
        }, function(){
            layer.msg('删除成功', {icon: 1});
        }, function(){
            layer.msg('取消成功', {icon: 1});
        });
    });

    //新建
    $(".newBuild").click(function(){
        layer.open({
            title : "新建",
            type : 2,
            area : ["360px","238px"],
            content: ['/bicms/page/fxkgl/listOneNew.html','no']
        })
    });

    //新建(数据表管理)
    $(".newBuild_1").click(function(){
        layer.open({
            title : "新建",
            type : 2,
            area : ["360px","286px"],
            content: ['/bicms/page/fxkgl/listOneNew_1.html','no']
        })
    });

    //新建(列管理)
    $(".newBuild_2").click(function(){
        layer.open({
            title : "新建",
            type : 2,
            area : ["360px","396px"],
            content: ['/bicms/page/fxkgl/listOneNew_2.html','no']
        })
    });

    //修改
    $(".modify").click(function(){
        layer.open({
            title : "修改",
            type : 2,
            area : ["360px","238px"],
            content: ['/bicms/page/fxkgl/listOneModify.html','no']
        })
    });

    //修改(数据表管理)
    $(".modify_1").click(function(){
        layer.open({
            title : "修改",
            type : 2,
            area : ["360px","286px"],
            content: ['/bicms/page/fxkgl/listOneModify_1.html','no']
        })
    });

    //修改(列管理)
    $(".modify_2").click(function(){
        layer.open({
            title : "修改",
            type : 2,
            area : ["360px","396px"],
            content: ['/bicms/page/fxkgl/listOneModify_2.html','no']
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