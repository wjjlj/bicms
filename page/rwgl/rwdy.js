layui.use(['element','form','layer','laydate','table','upload'],function(){
    var form = layui.form,
        layer = parent.layer === undefined ? layui.layer : top.layer,
        $ = layui.jquery,
        laydate = layui.laydate,
        upload = layui.upload,
        element = layui.element,
        table = layui.table;

    //表格列表
    var tableIns = table.render({
        elem: '#linkList',
        url : 'rwdy.json',
        page : true,
        cellMinWidth : 95,
        height : "full-108",
        limit : 20,
        limits : [10,15,20,25],
        id : "linkListTab",
        cols : [[
            {type: "checkbox", width:50},
            {field: 't1', title: '模型名称', align:'left'},
            {field: 't2', title: '优先级', width:100, align:'center'},
            {field: 't3', title: '执行频度', width:100, align:'center'},
            {field: 't4', title: '开始执行时间', width:200, align:'center'},
            {field: 't5', title: '创建人', width:100, align:'center'},
            {field: 't6', title: '创建时间', width:200, align:'center'},
            {field: 't7', title: '发布状态', width:100, align:'center'},
            {field: 't8', title: '启用状态', width:100, align:'center'},
            {field: 't9', title: '操作', width:160, align:'center', templet:function(){
                    return '<a href="javascript:;" style="margin-right: 10px;color:#3498db"><i class="fa fa-pencil"></i> 修改</a><a href="javascript:;" lay-event="del" style="color:#3498db"><i class="fa fa-trash-o"></i> 删除</a>';
            }}
        ]]
    });

    //内部顺序调整
    table.render({
        elem: '#rwdyNbsxtz',
        url : 'rwdyNbsxtz.json',
        page : true,
        cellMinWidth : 95,
        limit : 20,
        limits : [10,15,20,25],
        cols : [[
            {field: 't1', title: '名称', align:'center'},
            {field: 't2', title: '类型', align:'center'},
            {field: 't3', title: '操作', align:'center'},
        ]]
    });

    //搜索
    $(".search_btn").on("click",function(){
        if($(".searchVal").val() == ''){
            layer.msg("请输入搜索的内容");
        }
    });

    //添加新建
    function newBuild(){
        var index = layer.open({
            title : "新建",
            type : 2,
            area : ["400px","440px"],
            content: ['/bicms/page/rwgl/rwdyNew.html', 'no']
        })
    }
    $(".btnNew").click(function(){
        newBuild();
    });

    //添加成员维护
    function rwdyCywh(){
        var index = layer.open({
            title : "成员维护",
            type : 2,
            area : ["440px","440px"],
            content: ['/bicms/page/rwgl/rwdyCywh.html', 'no']
        })
    }
    $(".btnCywh").click(function(){
        rwdyCywh();
    });

    //添加参数设置
    function rwdyCssz(){
        var index = layer.open({
            title : "参数设置",
            type : 2,
            area: ["500px","400px"],
            content: '/bicms/page/rwgl/rwdyCssz.html'
        })
    }
    $(".btnCssz").click(function(){
        rwdyCssz();
    });

    //内部顺序调整
    function rwdyNbsxtz(){
        var index = layer.open({
            title : "内部顺序调整",
            type : 2,
            area : ["440px","400px"],
            content: '/bicms/page/rwgl/rwdyNbsxtz.html'
        })
    }
    $(".btnNbsxtz").click(function(){
        rwdyNbsxtz();
    });

    //选项卡切换
    $(".btnToggle").click(function(){
        layer.open({
            title: '选项卡切换',
            content: '内容',
            yes: function(index){
                parent.tab.myTabChange(parent.tab.getLayId("任务实例"),parent.tab.hasTab("任务实例"),'任务实例','swsl888','/page/rwgl/rwsl.html');
                layer.close(index);
            }
        });
    });

    $("#csqhiframe").on("click",function(){
        parent.tab.myTabChange(parent.tab.getLayId("任务实例"),parent.tab.hasTab("任务实例"),'任务实例','swsl888','/page/rwgl/rwsl.html');
    });

    //列表操作
    table.on('tool(linkList)', function(obj){
        var layEvent = obj.event,
            data = obj.data;

        if(layEvent === 'del'){ //删除
            layer.confirm('确定删除此记录吗？',{icon:3, title:'提示信息'});
        }
    });
});