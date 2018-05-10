layui.use(['form', 'layer', 'table'], function () {
    var form = layui.form,
        layer = parent.layer === undefined ? layui.layer : top.layer,
        $ = layui.jquery,
        table = layui.table;

    //搜索列表
    table.render({
        elem: '#newsList',
        url : 'qyhxList.json',
        cellMinWidth : 95,
        page : true,
        height : "full-68",
        limit : 20,
        limits : [10,15,20,25],
        id : "newsListTable",
        cols : [[
            {field: 'qyhxName', title: '客户名称', align:"center"},
            {field: 'qyhxHy', title: '所属行业', align:"center"},
            {field: 'qyhxDm', title: '组织机构代码', align:"center"},
            {field: 'qyhxBh', title: '客户统一编号', align:"center"},
            {title: '操作', templet:'#newsListBar', align:'center'}
        ]]
    });

    //列表操作
    table.on('tool(newsList)', function (obj) {
        console.log(obj);
        var layEvent = obj.event, //获得 lay-event 对应的值（也可以是表头的 event 参数对应的值）
            data = obj.data; //获得当前行数据

        if (layEvent === 'edit') { //详情
            parent.tab.tabAdd($(this));
        }
    });

    $(".search_btn").click(function () {
        if($(".searchVala").val() === '' && $(".searchValb").val() === ''){
            layer.msg("请输入搜索的内容");
        }
    })
});
