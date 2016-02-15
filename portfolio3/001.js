window.onload = function() {

    var N = 1; //宣告一個變數用來濟助圖片在第幾張
    var TT; //宣告一個變數設定給計時器用
    var BIG = document.getElementById("BIG");

    //==設定圖片輪播的動作========================
    function GOGO() {
        if (N < 6) {
            N += 1;
        } else {
            N = 1;
        }
        BIG.src = "images/00" + N + ".jpg";

        TT = setTimeout(GOGO, 2000);
    }
    GOGO();
    //==滑鼠碰到時清除計時器=======================

    BIG.onmouseover = doSTOP;
    BIG.onmouseout = doSTART;

    function doSTOP() {
        clearTimeout(TT);
    }

    function doSTART() {
        TT = setTimeout(GOGO, 2000);
    }

    //==滑鼠按上面鈕換一張=======================
    for (var i = 1; i <= 6; i++) {
        document.getElementById('SS' + i).onclick = SHOW;
    };

    function SHOW() {
        if (this.id == 'SS1') {
            BIG.src = "images/001.jpg";
        }

        if (this.id == 'SS2') {
            BIG.src = "images/002.jpg";
        }

        if (this.id == 'SS3') {
            BIG.src = "images/003.jpg";
        }

        if (this.id == 'SS4') {
            BIG.src = "images/004.jpg";
        }

        if (this.id == 'SS5') {
            BIG.src = "images/005.jpg";
        }

        if (this.id == 'SS6') {
            BIG.src = "images/006.jpg";
        }
    }
}


/*
        switch (this.id) {
            case 'SS2':
                BIG.src = "images/002.jpg";
                break;
            case 'SS3':
                BIG.src = "images/003.jpg";
                break;
            case 'SS4':
                BIG.src = "images/004.jpg";
                break;
            case 'SS5':
                BIG.src = "images/005.jpg";
                break;
            case 'SS6':
                BIG.src = "images/006.jpg";
                break;
            case 'SS1':
            default:
                BIG.src = "images/001.jpg";
                break;
        }
*/
