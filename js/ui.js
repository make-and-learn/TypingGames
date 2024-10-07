/**
 * UI操作を管理するオブジェクト
 */
const ui = {
    // HTML要素への参照
    wordElement: document.getElementById('word'),
    inputElement: document.getElementById('input'),
    timerElement: document.getElementById('timer'),
    scoreElement: document.getElementById('score'),
    startButton: document.getElementById('startButton'),

    /**
     * 単語を画面に表示する
     * @param {string} word - 表示する単語
     */
    displayWord(word) {
        this.wordElement.textContent = word;
    },

    /**
     * タイマーを更新する
     * @param {number} time - 残り時間
     */
    updateTimer(time) {
        this.timerElement.textContent = `残り時間: ${time}秒`;
    },

    /**
     * スコアを更新する
     * @param {number} score - 現在のスコア
     */
    updateScore(score) {
        this.scoreElement.textContent = `スコア: ${score}`;
    },

    /**
     * ゲームの状態に応じてUI要素を設定する
     * @param {boolean} isPlaying - ゲームがプレイ中かどうか
     */
    setGameState(isPlaying) {
        this.inputElement.disabled = !isPlaying;
        this.startButton.disabled = isPlaying;
        if (!isPlaying) {
            this.inputElement.value = '';
        }
    },

    /**
     * ゲーム結果を表示する
     * @param {number} score - 最終スコア
     */
    showResult(score) {
        alert(`ゲーム終了！あなたのスコアは ${score} です！`);
    }
};