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
        url : 'mxpz.json',
        page : true,
        cellMinWidth : 95,
        height : "full-108",
        limit : 20,
        limits : [10,15,20,25],
        cols : [[
            {type: "checkbox", width:50},
            {field: 't1', title: '模型名称', align:'left'},
            {field: 't2', title: '模型类型', width:150, align:'left'},
            {field: 't3', title: '创建人', width:100, align:'center'},
            {field: 't4', title: '创建日期', width:120, align:'center'},
            {field: 't5', title: '审批状态', width:120, align:'center'},
            {field: 't6', title: '启用状态', width:100, align:'center'},
            {field: 't7', title: '最新版本', width:100, align:'center'},
            {title: '操作', width:240, templet:'#linkListBar', align:'center'}
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
                area : ["640px","300px"],
                content: ['/bicms/page/mxgl/mxpzModify.html','no']
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
        if (layEvent === 'history') {
            layer.open({
                title : "历史版本",
                type : 2,
                area : ["440px","400px"],
                    content: ['/bicms/page/mxgl/mxpzLsbb.html']
            })
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
        layer.confirm('确定要删除选中的模型么？', {
            icon: 3,
            title: '提示信息',
            btn: ['确定','取消']
        }, function(){
            layer.msg('删除模型成功', {icon: 1});
        }, function(){
            layer.msg('您点击了取消', {icon: 1});
        });
    });

    //调整分类
    $(".mxpzTzfl").on("click",function(){
        layer.open({
            title : "调整模型分类",
            type : 2,
            area : ["350px","350px"],
            content: ['/bicms/page/mxgl/mxpzTzfl.html']
        })
    });

    //新建
    function mxpzNew(){
        var index = layer.open({
            title : "新建",
            type : 2,
            area : ["640px","300px"],
            content: ['/bicms/page/mxgl/mxpzNew.html','no']
        })
    }
    $(".newBuild").click(function(){
        mxpzNew();
    });

    //修改
    $(".modify").click(function(){
        layer.open({
            title : "修改",
            type : 2,
            area : ["640px","300px"],
            content: ['/bicms/page/mxgl/mxpzModify.html','no']
        })
    });

    //提交审批
    $(".mxpzTjsp").click(function(){
        layer.open({
            title : "选择审批人",
            type : 2,
            area : ["440px","400px"],
            content: ['/bicms/page/mxgl/mxpzTjsp.html','no']
        })
    });

    //审批意见
    $(".mxpzSpyj").click(function(){
        layer.open({
            title : "审批意见",
            type : 2,
            area : ["440px","400px"],
            content: ['/bicms/page/mxgl/mxpzSpyj.html']
        })
    });
})