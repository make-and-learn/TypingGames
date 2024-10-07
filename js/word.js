// タイピングゲームで使用する単語のリスト
const words = [
    'Hello', 'World', 'JavaScript', 'Programming', 'Computer',
    'Algorithm', 'Database', 'Network', 'Security', 'Framework'
];

/**
 * ランダムな単語を取得する関数
 * @returns {string} ランダムに選ばれた単語
 */
function getRandomWord() {
    // Math.random()で0以上1未満の乱数を生成し、
    // words.lengthを掛けて配列のインデックス範囲内の数値にする
    // Math.floor()で小数点以下を切り捨てて整数にする
    return words[Math.floor(Math.random() * words.length)];
}