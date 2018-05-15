layui.use(['form','layer','laydate','table','upload'],function(){
    var form = layui.form,
        layer = parent.layer === undefined ? layui.layer : top.layer,
        $ = layui.jquery,
        laydate = layui.laydate,
        upload = layui.upload,
        table = layui.table;

    //点击添加页卡
    $(".rwcy").click(function () {
        parent.tab.tabAdd($(this));
    });

    //任务实例表格列表
    var tableIns = table.render({
        elem: '#linkList',
        url : 'rwsl.json',
        page : true,
        cellMinWidth : 95,
        height : "full-108",
        limit : 20,
        limits : [10,15,20,25],
        id : "linkListTab",
        cols : [[
            {type: "checkbox", width:50},
            {field: 't1', title: '名称', align:'left'},
            {field: 't2', title: '优先级', width:100, align:'center'},
            {field: 't3', title: '任务类型', width:100, align:'center'},
            {field: 't4', title: '提交人', width:100, align:'center'},
            {field: 't5', title: '提交时间', width:130, align:'center'},
            {field: 't6', title: '开始时间', width:130, align:'center'},
            {field: 't7', title: '结束时间', width:130, align:'center'},
            {field: 't8', title: '状态', width:100, align:'center'},
            {title: '操作', width:130, templet:'#linkListBar', align:'center'}
        ]]
    });

    //任务成员表格列表
    table.render({
        elem: '#linkRwcy',
        url : 'rwcy.json',
        page : true,
        cellMinWidth : 95,
        height : "full-108",
        limit : 20,
        limits : [10,15,20,25],
        cols : [[
            {type: "checkbox", width:50},
            {field: 't1', title: '名称', align:'left'},
            {field: 't2', title: '类型', align:'center'},
            {field: 't3', title: '数据源', align:'center'},
            {field: 't4', title: '运行状态', align:'center'},
            {field: 't5', title: '开始时间', align:'center'},
            {field: 't6', title: '结束时间', align:'center'},
            {title: '操作', width:200, templet:'#linkRwcyBar', align:'center'}
        ]]
    });

    //搜索任务实例
    $(".search_btn").on("click",function(){
        if($(".searchVal").val() == ''){
            layer.msg("请输入搜索的内容");
        }
    });

    //搜索任务成员
    $(".search_btnRwcy").on("click",function(){
        if($(".ztVal").val() == ''){
            layer.msg("请输入搜索的内容");
        }
    });

    //任务成员查看日志
    function rwcyCkrz(){
        var index = layer.open({
            title : "查看日志",
            type : 2,
            area : ["620px","440px"],
            content: ['/bicms/page/rwgl/rwcyCkrz.html']
        })
    }
    $(".btnCkrz").click(function(){
        rwcyCkrz();
    });

    //任务实例列表操作
    table.on('tool(linkList)', function(obj){
        var layEvent = obj.event,
            data = obj.data;

        if (layEvent === 'rwcy') { //详情
            parent.tab.tabAdd($(this));
        }
    });

    //任务成员列表操作
    table.on('tool(linkRwcy)', function(obj){
        var layEvent = obj.event,
            data = obj.data;

        if (layEvent === 'eventCx') { //详情
            layer.open({
                title: '参数'
                ,content: '任务成员事件'
            });
        }
    });

    //执行一个laydate实例
    laydate.render({
        elem: '#time1' //指定元素
    });
    laydate.render({
        elem: '#time2' //指定元素
    });
});