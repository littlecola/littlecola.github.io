var getSelNews = function() {
    var curr_Page = $('#currPage').val();
    var per_Page = $('#prePage').val();
    var urlSrc = 'http://news.housefun.com.tw/api/partner/GetNewsListByPage/-/1/' + per_Page + '/' + curr_Page;
    $.ajax({
        url: urlSrc,
        type: "GET",
        dataType: "jsonp",
        jsonpCallback: "getSelNewsCallback"
    });
};

var getSelNewsCallback = function(data) {
    $('.content').html("");
    if (data.code === 200) {
        for (var i = 0; i < data.result.length; i++) {
            $('.content').append('<div>[' + (i + 1) + ']新聞標題:' +
                data.result[i].title +
                '<br><br>' + data.result[i].brief +
                '<br>-----------------------------------</div>');
        }
    }
};
$('#getNewsBtn').on('click', function() {
    getSelNews();
});
