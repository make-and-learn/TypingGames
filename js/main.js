// ゲームインスタンスを作成
const game = new Game();

// スタートボタンにクリックイベントリスナーを追加
ui.startButton.addEventListener('click', () => {
    game.start();
    ui.inputElement.focus(); // 入力フィールドにフォーカスを当てる
});

// 入力フィールドに入力イベントリスナーを追加
ui.inputElement.addEventListener('input', (e) => {
    const input = e.target.value;
    if (game.checkInput(input)) {
        e.target.value = ''; // 入力が正しければ入力フィールドをクリア
    }
});