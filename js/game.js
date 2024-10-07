/**
 * ゲームクラス
 */
class Game {
    constructor() {
        this.score = 0;
        this.currentWord = '';
        // 60秒のタイマーを作成
        this.timer = new Timer(60, this.updateTimer.bind(this), this.endGame.bind(this));
    }

    /**
     * ゲームを開始する
     */
    start() {
        this.score = 0;
        this.updateScore();
        this.nextWord();
        this.timer.start();
        ui.setGameState(true);
    }

    /**
     * 次の単語を設定する
     */
    nextWord() {
        this.currentWord = getRandomWord();
        ui.displayWord(this.currentWord);
    }

    /**
     * ユーザーの入力をチェックする
     * @param {string} input - ユーザーの入力
     * @returns {boolean} 入力が正しければtrue、そうでなければfalse
     */
    checkInput(input) {
        if (input === this.currentWord) {
            this.score++;
            this.updateScore();
            this.nextWord();
            return true;
        }
        return false;
    }

    /**
     * タイマーを更新する
     * @param {number} remaining - 残り時間
     */
    updateTimer(remaining) {
        ui.updateTimer(remaining);
    }

    /**
     * スコアを更新する
     */
    updateScore() {
        ui.updateScore(this.score);
    }

    /**
     * ゲームを終了する
     */
    endGame() {
        ui.setGameState(false);
        ui.showResult(this.score);
    }
}