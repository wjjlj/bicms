layui.use(['form', 'layer', 'table', 'element'], function () {
    var form = layui.form,
        layer = parent.layer === undefined ? layui.layer : top.layer,
        $ = layui.jquery,
        element = layui.element,
        table = layui.table;


    //搜索列表
    table.render({
        elem: '#xdxxList',
        url: 'xdxxList.json',
        page: true,
        cellMinWidth: 100,
        // height: "full-200",
        limit: 20,
        limits: [10, 15, 20, 25],
        cols: [[
            {field: 't1', title: '贷款展期编号', align: "center"},
            {field: 't2', title: '信贷借据号', align: "center"},
            {field: 't3', title: '展期金额', align: "center"},
            {field: 't4', title: '展期日期', align: "center"},
            {field: 't5', title: '展期到期日期金额', align: "center"}
        ]]
    });
});
