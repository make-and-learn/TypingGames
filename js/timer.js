/**
 * タイマークラス
 */
class Timer {
    /**
     * @param {number} duration - タイマーの継続時間（秒）
     * @param {function} onTick - 毎秒呼び出されるコールバック関数
     * @param {function} onComplete - タイマー終了時に呼び出されるコールバック関数
     */
    constructor(duration, onTick, onComplete) {
        this.duration = duration;
        this.remaining = duration;
        this.onTick = onTick;
        this.onComplete = onComplete;
        this.timerId = null;
    }

    /**
     * タイマーを開始する
     */
    start() {
        this.timerId = setInterval(() => {
            this.remaining--;
            this.onTick(this.remaining);
            if (this.remaining <= 0) {
                this.stop();
                this.onComplete();
            }
        }, 1000); // 1000ミリ秒 = 1秒ごとに実行
    }

    /**
     * タイマーを停止する
     */
    stop() {
        if (this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    /**
     * タイマーをリセットする
     */
    reset() {
        this.stop();
        this.remaining = this.duration;
    }
}