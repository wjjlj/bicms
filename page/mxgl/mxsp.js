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
        url : 'mxsp.json',
        page : true,
        cellMinWidth : 95,
        height : "full-108",
        limit : 20,
        limits : [10,15,20,25],
        cols : [[
            {type: "checkbox", width:50},
            {field: 't1', title: '模型名称', align:'left'},
            {field: 't2', title: '模型类型', align:'left'},
            {field: 't3', title: '创建人', width:100, align:'center'},
            {field: 't4', title: '创建日期', width:120, align:'center'},
            {field: 't5', title: '审批状态', width:120, align:'center'},
            {field: 't6', title: '启用状态', width:120, align:'center'},
            {field: 't7', title: '最新版本', width:120, align:'center'},
            {title: '操作', width:180, templet:'#linkListBar', align:'center'}
        ]]
    });

    //数据列表事件操作
    table.on('tool(linkList)', function(obj){
        var layEvent = obj.event,
            data = obj.data;
        if (layEvent === 'mod') {
            layer.msg('数据为空');
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
})