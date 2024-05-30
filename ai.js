// ロボットからの投稿一覧のオブジェクト
// textには投稿文，continueは次も連続で投稿するかどうか，optionは普通の投稿or選択肢orランダム投稿など

const chatList = {
    1: {text: 'ようこそ「AI chat」へ！', continue: true, option: 'normal'},
    2: {text: '会話内容は管理者へ送信されませんので、ご安心ください。', continue: true, option: 'normal'},
    3: {text: {title: 'Q1', question: '何を知りたいですか？', choices: ['開発者について', '参考にしたチャットボット', 'Flutter デモアプリ', '島根県美郷町 HP']}, continue: false, option: 'choices', questionNextSupport: true} // questionNextSupportは、リンクなど次に質問に対する詳細を投稿するかどうか
    // 省略
};

// 投稿文を加工する関数（中に相手の名前などを挿入する際に用いる）
function textSpecial() {
    chatList[7].text = `こんにちは！${userData[1]}さん！`;
    chatList[12].text.qTrue = `正解！${userData[1]}さん、すごいですね！`;
    chatList[13].text = `${userData[1]}さん、ありがとうございました。今日はここで終了とさせていただきます。`; 
    chatList[16].text = `${userData[1]}さんの満足度は「${userData[4]}」，ご感想は「${userData[5]}」ですね！ありがとうございました。`;
}

// ユーザーの発言，回答内容を記憶する配列
let userData = [];

// ロボットが投稿をする度にカウントしていき、投稿を管理する
let robotCount = 0; // ロボットの投稿数

// ロボットの投稿
function robotOutput() {
    robotCount ++;
    // ulとliを作り、左寄せのスタイルを適用し投稿する
    const ul = document.getElementById('chatbot-ul');
    const li = document.createElement('li');
    li.classList.add('left');
    ul.appendChild(li);
}

// 最初にロボットから話しかける
robotOutput();

// 自分の投稿（送信ボタンを押した時）
chatSubmitBtn.addEventListener('click', () => {
    // 空行の場合送信不可
    if (!userText.value || !userText.value.match(/\S/g)) return false;
    userCount ++;
    // 投稿内容を後に活用するために、配列に保存しておく
    userData.push(userText.value); 
    // ulとliを作り、右寄せのスタイルを適用し投稿する
    const ul = document.getElementById('chatbot-ul');
    const li = document.createElement('li');
    li.classList.add('right');
    ul.appendChild(li);
}
