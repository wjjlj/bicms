layui.use(['form','layer'],function () {
    var form = layui.form,
        layer = parent.layer === undefined ? layui.layer : top.layer,
        $ = layui.jquery;
    $(".qyhxDetails").click(function () {
        parent.tab.tabAdd($(this));
    })
    $(".search_btn").click(function () {
        if($(".searchVal").val() === ''){
            layer.msg("请输入搜索的内容");
        } else {
            parent.tab.tabAdd($(this));
        }
    })
});