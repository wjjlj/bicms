layui.use(['form', 'layer','element','table'], function () {
    var form = layui.form,
        layer = parent.layer === undefined ? layui.layer : top.layer,
        $ = layui.jquery,
        element = layui.element, //Tab的切换功能，切换事件监听等，需要依赖element模块
        table = layui.table;

    //银行职位信息
    table.render({
        elem: '#yhhxYhzwxx',
        url: 'yhhxYhzwxx.json',
        cellMinWidth: 95,
        page: true,
        // height: "full-105",
        limit: 20,
        limits: [10, 15, 20, 25],
        cols: [[
            {field: 't1', title: '姓名', align: "center"},
            {field: 't2', title: '身份证号', align: "center"},
            {field: 't3', title: '所属部门', align: "center"},
            {field: 't4', title: '职位', align: "center"},
            {field: 't5', title: '员工状态', align: "center"}
        ]]
    });

    //股东关系
    table.render({
        elem: '#yhhxGdgx',
        url: 'yhhxGdgx.json',
        cellMinWidth: 95,
        page: true,
        // height: "full-105",
        limit: 20,
        limits: [10, 15, 20, 25],
        cols: [[
            {field: 't1', title: '股东名称', align: "center"},
            {field: 't2', title: '股东证件号码', align: "center"},
            {field: 't3', title: '股东状态', align: "center"},
            {field: 't4', title: '股东持股比例', align: "center"},
            {field: 't5', title: '入股时间', align: "center"}
        ]]
    });

    //同业信息
    table.render({
        elem: '#yhhxTyxx',
        url: 'yhhxTyxx.json',
        cellMinWidth: 95,
        page: true,
        // height: "full-105",
        limit: 20,
        limits: [10, 15, 20, 25],
        cols: [[
            {field: 't1', title: '同业存放', align: "center"},
            {field: 't2', title: '存放同业', align: "center"},
            {field: 't3', title: '同业授信', align: "center"},
            {field: 't4', title: '同业交易量', align: "center"},
            {field: 't5', title: '同业交易金额', align: "center"}
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
