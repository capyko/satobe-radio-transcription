// =========================================================
// さとべぇRADIO Transcript Archive - Swipe Navigation
// bodyタグの data-prev / data-next を見て、左右スワイプで移動します。
// =========================================================

(function () {
    const prevPage = document.body.dataset.prev || "";
    const nextPage = document.body.dataset.next || "";

    let touchStartX = 0;
    let touchStartY = 0;
    let touchEndX = 0;
    let touchEndY = 0;

    document.addEventListener("touchstart", function (event) {
        if (!event.changedTouches || event.changedTouches.length === 0) return;
        touchStartX = event.changedTouches[0].screenX;
        touchStartY = event.changedTouches[0].screenY;
    }, { passive: true });

    document.addEventListener("touchend", function (event) {
        if (!event.changedTouches || event.changedTouches.length === 0) return;
        touchEndX = event.changedTouches[0].screenX;
        touchEndY = event.changedTouches[0].screenY;
        handleSwipe();
    }, { passive: true });

    function handleSwipe() {
        const diffX = touchEndX - touchStartX;
        const diffY = touchEndY - touchStartY;

        // 縦スクロール中の誤作動を防ぐ
        if (Math.abs(diffY) > Math.abs(diffX)) return;

        // 右スワイプ：前の日へ
        if (diffX > 90 && prevPage) {
            window.location.href = prevPage;
            return;
        }

        // 左スワイプ：次の日へ
        if (diffX < -90 && nextPage) {
            window.location.href = nextPage;
        }
    }
})();
