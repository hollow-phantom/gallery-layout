$(function () {

    // 
    $('.hamburger').click(function () {
        hamburger();
    });

    // メニューのリンクをクリックした時
    $('#navi a').on('click', function () {
        // ハンバーガーメニューの共通処理を呼び出す
        hamburger();
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

        // 
        // サイドボタン表示
        // 
        // 画面下から#galleryまでの距離を取得
        let gallery_position = $('#gallery').offset().top - $(window).height();
        let access_position = $('#access').offset().top - $(window).height();

        // PC画面サイズのみ
        if (window.innerWidth > 900) {
            // ギャラリー手前まで到達したら表示
            if (scroll > gallery_position) {
                // アクセス手前まで到達したら非表示
                if (scroll < access_position) {
                    console.log("test");
                    $('#side-btn').css({ 'transform': 'rotate(-90deg) translateY(0)' });
                } else {
                    $('#side-btn').css({ 'transform': 'rotate(-90deg) translateY(60px)' });
                }
            } else {
                $('#side-btn').css({ 'transform': 'rotate(-90deg) translateY(60px)' });
            }
        }

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

// 
// ハンバーガーメニュークリック時の処理
// 
const hamburger = () => {
    // toggleClassを使用することで、hamburgerクラスにactiveクラスが存在する場合は削除、
    // 存在しない場合を追加する処理を自動で行ってくれる
    $('.hamburger').toggleClass('active');

    if ($('.hamburger').hasClass('active')) {
        // hamburgerクラスにactiveクラスが存在する場合は、naviにもactiveクラスを追加する
        $('#navi').addClass('active');
    } else {
        // hamburgerクラスにactiveクラスが存在しない場合は、naviからactiveクラスを削除する
        $('#navi').removeClass('active');
    }
}