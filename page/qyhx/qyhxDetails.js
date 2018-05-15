layui.use(['form', 'layer', 'table', 'element'], function () {
    var form = layui.form,
        layer = parent.layer === undefined ? layui.layer : top.layer,
        $ = layui.jquery,
        element = layui.element,
        table = layui.table;

    //担保信息
    table.render({
        elem: '#qyhxDbxx',
        url: 'qyhxDbxx.json',
        page: true,
        cellMinWidth: 95,
        // height: "full-200",
        limit: 20,
        limits: [10, 15, 20, 25],
        cols: [[
            {field: 't1', title: '担保合同号', align: "center"},
            {field: 't2', title: '被担保合同号', align: "center"},
            {field: 't3', title: '被担保人证件号码', align: "center"},
            {field: 't4', title: '担保币种', align: "center"},
            {field: 't5', title: '担保总金额', align: "center"},
            {field: 't6', title: '担保类型', align: "center"},
            {field: 't7', title: '担保起始日期', align: "center"},
            {field: 't8', title: '担保到期日期', align: "center"}
        ]]
    });

    //信贷信息->贷款展期
    table.render({
        elem: '#qyhxXdxx_dkzq',
        url: 'qyhxXdxx_dkzq.json',
        page: true,
        cellMinWidth: 95,
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

    //信贷信息->贷款核销
    table.render({
        elem: '#qyhxXdxx_dkhx',
        url: 'qyhxXdxx_dkhx.json',
        page: true,
        cellMinWidth: 95,
        // height: "full-200",
        limit: 20,
        limits: [10, 15, 20, 25],
        cols: [[
            {field: 't1', title: '信贷借据号', align: "center"},
            {field: 't2', title: '币种', align: "center"},
            {field: 't3', title: '实核贷款本金', align: "center"},
            {field: 't4', title: '实核表内利息', align: "center"},
            {field: 't5', title: '实核表外利息', align: "center"},
            {field: 't6', title: '核销收回本金', align: "center"},
            {field: 't7', title: '核销收回表内利息', align: "center"},
            {field: 't8', title: '核销收回表外利息', align: "center"},
            {field: 't9', title: '核销日期', align: "center"}
        ]]
    });

    //信贷信息->委托贷款
    table.render({
        elem: '#qyhxXdxx_wtdk',
        url: 'qyhxXdxx_wtdk.json',
        page: true,
        cellMinWidth: 95,
        // height: "full-200",
        limit: 20,
        limits: [10, 15, 20, 25],
        cols: [[
            {field: 't1', title: '信贷借据号', align: "center"},
            {field: 't2', title: '信贷合同号', align: "center"},
            {field: 't3', title: '客户统一编号', align: "center"},
            {field: 't4', title: '委托人客户统一编号', align: "center"},
            {field: 't5', title: '委托人客户名称', align: "center"},
            {field: 't6', title: '实际委托贷款金额', align: "center"},
            {field: 't7', title: '协议起始日期', align: "center"},
            {field: 't8', title: '协议到期日期', align: "center"}
        ]]
    });

    //信贷信息->银团贷款
    table.render({
        elem: '#qyhxXdxx_ytdk',
        url: 'qyhxXdxx_ytdk.json',
        page: true,
        cellMinWidth: 95,
        // height: "full-200",
        limit: 20,
        limits: [10, 15, 20, 25],
        cols: [[
            {field: 't1', title: '信贷合同号', align: "center"},
            {field: 't2', title: '协议类型', align: "center"},
            {field: 't3', title: '主办行行名', align: "center"},
            {field: 't4', title: '参办行行名', align: "center"},
            {field: 't5', title: '代理行行名', align: "center"},
            {field: 't6', title: '实际承担贷款金额', align: "center"},
            {field: 't7', title: '已发放贷款金额', align: "center"},
            {field: 't8', title: '已发放承担贷款金额', align: "center"},
            {field: 't9', title: '协议起始日期', align: "center"},
            {field: 't10', title: '协议终止日期', align: "center"}
        ]]
    });

    //信贷信息->信贷业务质或抵押物
    table.render({
        elem: '#qyhxXdxx_xdyw',
        url: 'qyhxXdxx_xdyw.json',
        page: true,
        cellMinWidth: 95,
        // height: "full-200",
        limit: 20,
        limits: [10, 15, 20, 25],
        cols: [[
            {field: 't1', title: '质或抵押物编号', align: "center"},
            {field: 't2', title: '质或抵押物名称', align: "center"},
            {field: 't3', title: '质或抵押物类型', align: "center"},
            {field: 't4', title: '质或抵押物账面价值', align: "center"},
            {field: 't5', title: '币种', align: "center"},
            {field: 't6', title: '评估价值', align: "center"},
            {field: 't7', title: '评估日期', align: "center"},
            {field: 't8', title: '担保起始日期', align: "center"},
            {field: 't9', title: '担保到期日期', align: "center"},
            {field: 't10', title: '核保人一姓名', align: "center"},
            {field: 't11', title: '核保人二姓名', align: "center"}
        ]]
    });
});
