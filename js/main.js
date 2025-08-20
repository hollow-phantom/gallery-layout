$(function () {

    $('.hamburger').click(function () {
        $(this).toggleClass("open");
    });

    //スクロールイベント
    $(window).scroll(function () {
        let scroll = $(this).scrollTop();

        //メインビジュアルの拡大・縮小
        mv_scale(scroll);

        // 
        // ロゴ、ハンバーガーメニューの表示
        // 
        if (scroll > 520) {
            $(".logo").fadeIn(500);
            $(".hamburger").fadeIn(500);
        } else {
            $(".logo").fadeOut(500);
            $(".hamburger").fadeOut(500);
        }


        let access_position = $('#access').offset().top - $(window).height();

        // 
        // Access背景画像表示
        // 
        let contact_position = $('#contact').offset().top - $(window).height();

        if (scroll > access_position) {

            if (scroll < contact_position) {
                $(".bg").fadeIn(500);
            } else {
                $(".bg").fadeOut(500);
            }
        } else {
            $(".bg").fadeOut(500);
        }

        // 
        // フェード表示(Inviewプラグイン使用)
        // 
        $(".inview").on("inview", function (event, isInView) {
            if (isInView) {
                $(this).stop().addClass("show");
            } else {
                $(this).stop().removeClass("show");
            }
        });
    });
});

//
// メインビジュアルの拡大・縮小
//
const mv_scale = (scroll) => {
    // 画面サイズに応じた処理
    // PCサイトの場合
    if (window.innerWidth > 900) {
        // CSSの書き換えでwidthの幅を増やす
        $("#mainvisual img").css({
            'width': 100 / 3 + scroll / 10 + "%"
        });
    } else {
        $("#mainvisual img").css({
            'width': 100 - scroll / 10 + "%"
        });
    }
}