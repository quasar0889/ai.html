//蜴ｳ譬ｼ繝｢繝ｼ繝峨√▽縺ｾ繧翫∫噪遒ｺ縺ｪ繧ｨ繝ｩ繝ｼ繝√ぉ繝�け縺瑚｡後ｏ繧後ｋ
'use strict';

/*
縲占｣懆ｶｳ縲�
- 繝√Ε繝�ヨ縺ｮ逕ｻ髱｢縺ｫ縺ゅｋ縲蛍l縲阪↓JavaScript縺ｧ縲畦i縲阪ｒ霑ｽ蜉�縺励※縺�￥莉慕ｵ�∩縺ｧ縺吶�
- 繝ｭ繝懊ャ繝医′霑比ｿ｡縺吶ｋ蠎ｦ縺ｫ縲√罫obotCount縲阪ｒ1縺壹▽雜ｳ縺励※縺�″縺ｾ縺吶ゅ％縺ｮ蛟､縺後Ο繝懊ャ繝医′隧ｱ縺吝�螳ｹ繧偵∪縺ｨ繧√◆縲慶hatList縲阪が繝悶ず繧ｧ繧ｯ繝医�謨ｰ蛟､縺ｫ蟇ｾ蠢懊＠縺ｾ縺吶り�蛻�′繝�く繧ｹ繝医ｒ蜈･蜉帙＠縲�∽ｿ｡繝懊ち繝ｳ繧呈款縺励◆迸ｬ髢薙�縲罫obotCount縲阪�蛟､縺ｫ蠢懊§縺ｦ縲��蛻励°繧画ｬ｡縺ｮ繝｡繝�そ繝ｼ繧ｸ繧帝∈縺ｳ霑比ｿ｡縺輔○縺ｾ縺吶�
- 莉雁屓菴懊▲縺滄未謨ｰ縺ｯ縲√Ο繝懊ャ繝医�謚慕ｨｿ繧偵☆繧九罫obotOutput()縲阪→縲∬�蛻�′騾∽ｿ｡繝懊ち繝ｳ繧呈款縺励◆縺ｨ縺阪�髢｢謨ｰ�育┌蜷埼未謨ｰ�峨〒縺吶�


縲宣幕逋ｺ迥ｶ豕√�
[笨転 繝ｭ繝懊ャ繝医°繧峨�謚慕ｨｿ 20190918螳梧�
[笨転 閾ｪ蛻��謚慕ｨｿ 20190918螳梧�
[笨転 option.normal 蜃ｦ逅�
[笨転 option.random 蜃ｦ逅�
[笨転 option.select 蜃ｦ逅� 蛻ｩ逕ｨ 20210524螳梧�
[笨転 continue 蜃ｦ逅�
[笨転 save 蜃ｦ逅�ｼ慶hatDataList 蛻ｩ逕ｨ 20210524螳梧�
[ﾃ余 縺輔ｉ縺ｪ繧倶ｼ夊ｩｱ縺ｮ蛻�ｲ� 
[笨転 繝ｭ繝懊ャ繝医°繧峨�繝ｪ繝ｳ繧ｯ縺ｮ騾∽ｿ｡
[ﾃ余 豁｣隗｣縺ｪ縺苓ｳｪ蝠上↓蠢懊§縺溯ｿ皮ｭ�
[ﾃ余 繝�く繧ｹ繝医�繧､繝九Φ繧ｰ
[笨転 繝ｭ繝懊ャ繝医�閠�∴荳ｭ縺ｮ繧｢繝九Γ繝ｼ繧ｷ繝ｧ繝ｳ
[ﾃ余 繝ｭ繝懊ャ繝医�繧｢繧､繧ｳ繝ｳ
[ﾃ余 縲御ｻ悶↓遏･繧翫◆縺�％縺ｨ縺ｯ縺ゅｊ縺ｾ縺吶°�溘阪→縺�≧繧医≧縺ｪ繝ｫ繝ｼ繝�
[ﾃ余 縲後阪→縺�≧繧医≧縺ｪ繝ｫ繝ｼ繝�
[ﾃ余 繝ｭ繝懊ャ繝医�雉ｪ蝠冗分蜿ｷ縺ｮ閾ｪ蜍募喧


縲宣幕逋ｺ謐墓拷縲�
笆� chatList 縺ｮoption縺ｮ遞ｮ鬘�
- chatList[n].option = ['normal', 'random', 'select'];

笆� chatList 縺ｮ繝励Ο繝代ユ繧｣縺ｮ遞ｮ鬘�
- text -> 繝ｭ繝懊ャ繝医′陦ｨ遉ｺ縺吶ｋ譁�ｭ�
- continue -> 谺｡繧ゅΟ繝懊ャ繝医′騾｣邯壹〒謚慕ｨｿ縺吶ｋ縺ｨ縺阪� true 繧呈欠螳壹☆繧�
- option -> normal 縺ｯ譎ｮ騾夲ｼ罫andom 縺ｯ驟榊�迥ｶ諷九� text 繧偵Λ繝ｳ繝繝�縺ｧ荳縺､謚慕ｨｿ縺吶ｋ�茎elect 縺ｯ驕ｸ謚櫁い�亥区焚縺ｫ髯仙ｮ壹↑縺暦ｼ峨ｒ謠千､ｺ縺吶ｋ
- link: true縺ｧ繝ｪ繝ｳ繧ｯ蛹�
*/


// 繝ｭ繝懊ャ繝医°繧峨�謚慕ｨｿ荳隕ｧ縺ｮ繧ｪ繝悶ず繧ｧ繧ｯ繝�
// text縺ｫ縺ｯ謚慕ｨｿ譁�ｼ慶ontinue縺ｯ谺｡繧る｣邯壹〒謚慕ｨｿ縺吶ｋ縺九←縺�°�経ption縺ｯ譎ｮ騾壹�謚慕ｨｿor驕ｸ謚櫁いor繝ｩ繝ｳ繝繝�謚慕ｨｿ縺ｪ縺ｩ
const chatList = {
    1: {text: '繧医≧縺薙◎縲窟I chatbot縲阪∈��', continue: true, option: 'normal'},
    2: {text: '莨夊ｩｱ蜀�ｮｹ縺ｯ邂｡逅��∈騾∽ｿ｡縺輔ｌ縺ｾ縺帙ｓ縺ｮ縺ｧ縲√＃螳牙ｿ�￥縺�縺輔＞縲�', continue: true, option: 'normal'},
    3: {text: {title: 'Q1', question: '菴輔ｒ遏･繧翫◆縺�〒縺吶°��', choices: ['髢狗匱閠�↓縺､縺�※', '蜿り�↓縺励◆繝√Ε繝�ヨ繝懊ャ繝�', 'Flutter 繝�Δ繧｢繝励Μ', '蟲ｶ譬ｹ逵檎ｾ朱�逕ｺ HP']}, continue: false, option: 'choices', questionNextSupport: true}, // questionNextSupport縺ｯ谺｡縺ｫ雉ｪ蝠上↓蟇ｾ縺吶ｋ隧ｳ邏ｰ繧呈兜遞ｿ縺吶ｋ縺九←縺�°
    // userCount1�壹Θ繝ｼ繧ｶ繝ｼ縺梧昴≧荳也阜荳鬮倥＞螻ｱ
    4: {text: ['https://mf3px.sakura.ne.jp/', 'https://www.hubspot.jp/', 'https://gallery.flutter.dev/', 'https://www.town.shimane-misato.lg.jp/misatoto/'], continue: true, option: 'normal', link: true},
    5: {text: '縺薙■繧峨�譁�ｭ励ｒ繧ｯ繝ｪ繝�け縺励※縺上□縺輔＞縲�', continue: true, option: 'normal'},
    6: {text: '縺ゅ↑縺溘�縺雁錐蜑阪�菴輔〒縺吶°��', continue: false, option: 'normal'},
    // userCount2�壼錐蜑�
    7: {text: '', continue: true, option: 'normal'},
    8: {text: '莉頑律縺ｮ菴楢ｪｿ縺ｯ縺�°縺後〒縺吶°��', continue: false, option: 'normal'},
    // userCount3�壻ｽ楢ｪｿ
    9: {text: ['縺昴≧縺ｧ縺吶°��', '繧上°繧翫∪縺励◆��', '謇ｿ遏･閾ｴ縺励∪縺励◆��'], continue: true, option: 'random'},
    10: {text: '縺薙％縺ｧ蝠城｡後〒縺呻ｼ�', continue: true, option: 'normal'},
    11: {text: {title: 'Q2', question: '縺ｩ縺ｮ螻ｱ縺御ｸ也阜荳鬮倥＞縺ｧ縺励ｇ縺�ｼ�', choices: ['繧ｨ繝吶Ξ繧ｹ繝�', 'K2', '蟇悟｣ｫ螻ｱ'], answer: '0'}, continue: false, option: 'choices'},
    // userCount4�壹Θ繝ｼ繧ｶ繝ｼ縺梧昴≧荳也阜荳鬮倥＞螻ｱ
    12: {text: {qTrue: '', qFalse:'谿句ｿｵ�∵ｭ｣隗｣縺ｯ縲後お繝吶Ξ繧ｹ繝医阪〒縺励◆縲�'}, continue: true, option: 'normal'},
    13: {text: '', continue: true, option: 'normal'},
    14: {text: {title: '貅雜ｳ蠎ｦ隱ｿ譟ｻ', question: '縺薙�AI繝√Ε繝�ヨ繝懊ャ繝医�貅雜ｳ蠎ｦ繧�5谿ｵ髫弱〒謨吶∴縺ｦ縺上□縺輔＞�域焚蟄励′螟ｧ縺阪＞縺ｻ縺ｩ貅雜ｳ蠎ｦ縺碁ｫ倥＞繧ゅ�縺ｨ縺励∪縺吶ゑｼ峨�', choices: ['5', '4', '3', '2', '1']}, continue: false, option: 'choices'},
    // userCount5�壽ｺ雜ｳ蠎ｦ
    15: {text: '縺ゅｊ縺後→縺�＃縺悶＞縺ｾ縺吶よ怙蠕後↓縲√＃諢滓Φ繧偵♀閨槭°縺帙￥縺�縺輔＞縲�', continue: false, option: 'normal'},
    // userCount6�壽─諠ｳ
    16: {text: '', continue: false, option: 'normal'}
};


// 謚慕ｨｿ譁�ｼ育ｩｺ縺ｮ縲荊ext縲搾ｼ峨ｒ蜉�蟾･縺吶ｋ髢｢謨ｰ�井ｸｭ縺ｫ逶ｸ謇九�蜷榊燕縺ｪ縺ｩ繧呈諺蜈･縺吶ｋ髫帙↓逕ｨ縺�ｋ��
// userData === ["菴輔ｒ遏･繧翫◆縺�〒縺吶°��", 蜷榊燕","菴楢ｪｿ","螻ｱ縺ｮ雉ｪ蝠�","貅雜ｳ蠎ｦ","諢滓Φ"];
// userData 縺ｯ繝ｦ繝ｼ繧ｶ繝ｼ縺ｮ蝗樒ｭ泌�螳ｹ縺ｮ蜈ｨ縺ｦ繧定ｨ俶�
function textSpecial() {
    chatList[7].text = `縺薙ｓ縺ｫ縺｡縺ｯ��${userData[1]}縺輔ｓ�～;
    chatList[12].text.qTrue = `豁｣隗｣��${userData[1]}縺輔ｓ縲√☆縺斐＞縺ｧ縺吶��～;
    chatList[13].text = `${userData[1]}縺輔ｓ縲√≠繧翫′縺ｨ縺�＃縺悶＞縺ｾ縺励◆縲ゆｻ頑律縺ｯ縺薙％縺ｧ邨ゆｺ�→縺輔○縺ｦ縺�◆縺�縺阪∪縺吶Ａ; 
    chatList[16].text = `${userData[1]}縺輔ｓ縺ｮ貅雜ｳ蠎ｦ縺ｯ縲�${userData[4]}縲搾ｼ後＃諢滓Φ縺ｯ縲�${userData[5]}縲阪〒縺吶��√≠繧翫′縺ｨ縺�＃縺悶＞縺ｾ縺励◆縲Ａ;
}

// 縲蛍serCount縲阪�螳溯ｳｪ蠢�ｦ√↑縺�′縲∫ｮ｡逅�＠繧�☆縺上☆繧九◆繧√↓蟆主�縺吶ｋ�医慶hatList縲阪�繧ｳ繝｡繝ｳ繝医い繧ｦ繝茨ｼ梧怙蠕後�繧�∪縺ｳ縺難ｼ御ｻ雁ｾ後�髢狗匱��
let userCount = 0;
// 繝ｦ繝ｼ繧ｶ繝ｼ縺ｮ蝗樒ｭ泌�螳ｹ縺ｮ蜈ｨ縺ｦ繧定ｨ俶�縺吶ｋ驟榊�
let userData = [];

// 荳逡ｪ荳九∈
function chatToBottom() {
    const chatField = document.getElementById('chatbot-body');
    chatField.scroll(0, chatField.scrollHeight - chatField.clientHeight);
}

const userText = document.getElementById('chatbot-text');
const chatSubmitBtn = document.getElementById('chatbot-submit');

// 繝ｭ繝懊ャ繝医′謚慕ｨｿ繧偵☆繧句ｺｦ縺ｫ繧ｫ繧ｦ繝ｳ繝医＠縺ｦ縺�″縲∵兜遞ｿ繧堤ｮ｡逅�☆繧�
let robotCount = 0;
// 驕ｸ謚櫁い縺ｮ豁｣隗｣蛟区焚
let qPoint = 0;

// 驕ｸ謚櫁い繝懊ち繝ｳ繧呈款縺励◆縺ｨ縺阪�谺｡縺ｮ驕ｸ謚櫁い��text縺ｮa�恵縺ｪ縺ｩ��
let nextTextOption = '';

// 驕ｸ謚櫁い繝懊ち繝ｳ繧呈款縺励◆縺ｨ縺搾ｼ亥ｿ�ｦ√′縺ゅｌ縺ｰ縲∵ｭ｣隗｣蛻､蛻･��
function pushChoice(e) {
    userCount ++;
    console.log(`userCount: ${userCount}`);

    const choicedId = e.getAttribute('id'); // 驕ｸ謚槭＠縺滄∈謚櫁い縺ｮid
    // 蝗樒ｭ泌�螳ｹ縺ｮ菫晏ｭ�
    userData.push(document.getElementById(choicedId).textContent);
    if (chatList[robotCount].text.answer) {
        // 豁｣隗｣�御ｸ肴ｭ｣隗｣縺ｮ縺ゅｋ驕ｸ謚櫁い
        const trueChoice = `q-${robotCount}-${chatList[robotCount].text.answer}`// 豁｣隗｣驕ｸ謚櫁い縺ｮid
        if (choicedId === trueChoice) {
            // 豁｣隗｣
            nextTextOption = 'qTrue';
            qPoint ++;
        } else {
            // 荳肴ｭ｣隗｣
            nextTextOption = 'qFalse';
        }
    } else {
        // 豁｣隗｣縺ｮ縺ｪ縺�ｳｪ蝠�
        if(chatList[robotCount].questionNextSupport) {
            if (String(robotCount).length === 1) {
                // robotCount縺ｮ譯∵焚縺�1譯√�譎�
                nextTextOption = choicedId.slice(4);
            } else if (String(robotCount).length === 2) {
                // robotCount縺ｮ譯∵焚縺�2譯√�譎�
                nextTextOption = choicedId.slice(5);
            } else if (String(robotCount).length === 3) {
                // robotCount縺ｮ譯∵焚縺�3譯√�譎�
                nextTextOption = choicedId.slice(6);
            }
        }
    }
    for (let i = 0; i < chatList[robotCount].text.choices.length; i ++) {
        document.getElementById('q-' + robotCount + '-' + i).disabled = true;
        document.getElementById('q-' + robotCount + '-' + i).classList.add('choice-button-disabled');
        document.getElementById(choicedId).classList.remove('choice-button-disabled');
    }

  縲robotOutput();

    console.log(userData);
}

// 諡｡螟ｧ繝懊ち繝ｳ
let chatbotZoomState = 'none';
const chatbot = document.getElementById('chatbot');
const chatbotBody = document.getElementById('chatbot-body');
const chatbotFooter = document.getElementById('chatbot-footer');
const chatbotZoomIcon = document.getElementById('chatbot-zoom-icon');


// --------------------繝ｭ繝懊ャ繝医�謚慕ｨｿ--------------------
function robotOutput() {
    // 逶ｸ謇九�霑比ｿ｡縺檎ｵゅｏ繧九∪縺ｧ縲√◎縺ｮ髢薙�霑比ｿ｡荳榊庄縺ｫ縺吶ｋ
    // 縺ｪ縺懊↑繧峨∬�蛻��霑比ｿ｡繧定､�焚蜿励￠蜿悶▲縺溘％縺ｨ縺ｫ縺ｪ繧翫√◎縺ｮ蜈ｨ縺ｦ縺ｫ霑比ｿ｡縺励※縺阪※縺励∪縺�°繧�
    // 萓具ｼ�"Hi!縲��!"繧定､�焚縺ｪ縺ｩ
      
    robotCount ++;
    console.log('robotCount��' + robotCount);

    chatSubmitBtn.disabled = true;
    
	// ul縺ｨli繧剃ｽ懊ｊ縲∝ｷｦ蟇�○縺ｮ繧ｹ繧ｿ繧､繝ｫ繧帝←逕ｨ縺玲兜遞ｿ縺吶ｋ
    const ul = document.getElementById('chatbot-ul');
    const li = document.createElement('li');
    li.classList.add('left');
    ul.appendChild(li);
    
    // 閠�∴荳ｭ繧｢繝九Γ繝ｼ繧ｷ繝ｧ繝ｳ縺薙％縺九ｉ
    const robotLoadingDiv = document.createElement('div');

    setTimeout( ()=> {
        li.appendChild(robotLoadingDiv);
        robotLoadingDiv.classList.add('chatbot-left');
        robotLoadingDiv.innerHTML = '<div id= "robot-loading-field"><span id= "robot-loading-circle1" class="material-icons">circle</span> <span id= "robot-loading-circle2" class="material-icons">circle</span> <span id= "robot-loading-circle3" class="material-icons">circle</span>';
        console.log('閠�∴荳ｭ');
        // 閠�∴荳ｭ繧｢繝九Γ繝ｼ繧ｷ繝ｧ繝ｳ縺薙％縺ｾ縺ｧ

        // 荳逡ｪ荳九∪縺ｧ繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ
        chatToBottom();
    }, 800);

    setTimeout( ()=> {

        // 閠�∴荳ｭ繧｢繝九Γ繝ｼ繧ｷ繝ｧ繝ｳ蜑企勁
        robotLoadingDiv.remove();

        if (chatList[robotCount].option === 'choices') {
            const qAnswer = `q-${robotCount}-${chatList[robotCount].text.answer}`;
            const choiceField = document.createElement('div');
            choiceField.id = `q-${robotCount}`;
            choiceField.classList.add('chatbot-left-rounded');
            li.appendChild(choiceField);
          
            // 雉ｪ蝠上ち繧､繝医Ν
            const choiceTitle = document.createElement('div');
            choiceTitle.classList.add('choice-title');
            choiceTitle.textContent = chatList[robotCount].text.title;
            choiceField.appendChild(choiceTitle);
            // 雉ｪ蝠乗枚
            const choiceQ = document.createElement('div');
            choiceQ.textContent = chatList[robotCount].text.question;
            choiceQ.classList.add('choice-q');
            choiceField.appendChild(choiceQ);
          
            // 驕ｸ謚櫁い菴懈�
            for (let i = 0; i < chatList[robotCount].text.choices.length; i ++) {
                const choiceButton = document.createElement('button');
                choiceButton.id = `${choiceField.id}-${i}`; // id險ｭ螳�
                choiceButton.setAttribute('onclick', 'pushChoice(this)'); // 繝懊ち繝ｳ繧呈款縺励◆髫帙�蜷亥峙
                choiceButton.classList.add('choice-button');
                choiceField.appendChild(choiceButton);
                choiceButton.textContent = chatList[robotCount].text.choices[i];
            }
          
        } else {
            // 縺薙�div縺ｫ繝�く繧ｹ繝医ｒ謖�ｮ�
            const div = document.createElement('div');
            li.appendChild(div);
            div.classList.add('chatbot-left');
            
            // 繝�く繧ｹ繝医ｒ蜉�蟾･縺吶ｋ蝣ｴ蜷茨ｼ域ｬ｡縺ｮ蝗樒ｭ斐′驕ｸ謚槫梛縺ｧ繧ゆｽｿ縺医ｋ繧医≧縺ｫ縺薙％縺ｫ險ｭ鄂ｮ��
            textSpecial();  
          
            switch(chatList[robotCount].option) {
                case 'normal':
                    if (chatList[robotCount].text.qTrue) {
                        // 隍�焚縺ｮ繝�く繧ｹ繝医�縺�■迚ｹ螳壹�繧ゅ�繧定ｨｭ螳壹☆繧九→縺�
                        if(chatList[robotCount].link) {
                            div.innerHTML = `<a href= "${chatList[robotCount].text[nextTextOption]}" onclick= "chatbotLinkClick()">${chatList[robotCount].text[nextTextOption]}</a>`;
                        } else {
                            div.textContent = chatList[robotCount].text[nextTextOption];
                        }
                    } else if (robotCount > 1 && chatList[robotCount - 1].questionNextSupport) {
                        console.log('谺｡縺ｮ蝗樒ｭ斐�驕ｸ謚櫁い縺ｯ' + nextTextOption);
                        // 遲斐∴縺ｮ縺ｪ縺�ｳｪ蝠擾ｼ域ｬ｡縺ｫ繧ｵ繝昴�繝医≠繧奇ｼ�
                        if(chatList[robotCount].link) {
                            div.innerHTML = `<a href= "${String(chatList[robotCount].text[nextTextOption])}" onclick= "chatbotLinkClick()">${String(chatList[robotCount].text[nextTextOption])}</a>`;
                        } else {
                            div.textContent = String(chatList[robotCount].text[nextTextOption]);
                        }
                    } else {
                        // 騾壼ｸｸ
                        if(chatList[robotCount].link) {
                            div.innerHTML = `<a href= "${chatList[robotCount].text}" onclick= "chatbotLinkClick()">${chatList[robotCount].text}</a>`;
                        } else {
                            div.textContent = chatList[robotCount].text;
                        }
                    }
                break;

                case 'random':
                    if(chatList[robotCount].link) {
                        div.innerHTML = `<a href= "${chatList[robotCount].text[Math.floor(Math.random() * chatList[robotCount].text.length)]}" onclick= "chatbotLinkClick()">${chatList[robotCount].text[Math.floor(Math.random() * chatList[robotCount].text.length)]}</a>`;
                    } else {
                        div.textContent = chatList[robotCount].text[Math.floor(Math.random() * chatList[robotCount].text.length)];
                    }
                    
                break;
            }
            chatSubmitBtn.disabled = false;
        }

        // 荳逡ｪ荳九∪縺ｧ繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ
        chatToBottom();

        // 騾｣邯壽兜遞ｿ
        if (chatList[robotCount].continue) {
            robotOutput();
        }
    }, 2000);

    if(chatbotZoomState === 'large' && window.matchMedia('(min-width:700px)').matches) {
        document.querySelectorAll('.chatbot-left').forEach((cl) => {
            cl.style.maxWidth = '52vw';
        });
        document.querySelectorAll('.chatbot-right').forEach((cr) => {
            cr.style.maxWidth = '52vw';
        });
        document.querySelectorAll('.chatbot-left-rounded').forEach((cr) => {
            cr.style.maxWidth = '52vw';
        });
    }
}

// 譛蛻昴↓繝ｭ繝懊ャ繝医°繧芽ｩｱ縺励°縺代ｋ
robotOutput();


// --------------------閾ｪ蛻��謚慕ｨｿ�磯∽ｿ｡繝懊ち繝ｳ繧呈款縺励◆譎ゅ�蜃ｦ逅�ｼ�--------------------
chatSubmitBtn.addEventListener('click', () => {
  
	// 遨ｺ陦後�蝣ｴ蜷磯∽ｿ｡荳榊庄
	if (!userText.value || !userText.value.match(/\S/g)) return false;

	userCount ++;

	console.log(`userCount: ${userCount}`);

	// 謚慕ｨｿ蜀�ｮｹ繧貞ｾ後↓豢ｻ逕ｨ縺吶ｋ縺溘ａ縺ｫ縲��蛻励↓菫晏ｭ倥＠縺ｦ縺翫￥
	userData.push(userText.value);
	console.log(userData);

	// ul縺ｨli繧剃ｽ懊ｊ縲∝承蟇�○縺ｮ繧ｹ繧ｿ繧､繝ｫ繧帝←逕ｨ縺玲兜遞ｿ縺吶ｋ
	const ul = document.getElementById('chatbot-ul');
	const li = document.createElement('li');
	// 縺薙�div縺ｫ繝�く繧ｹ繝医ｒ謖�ｮ�
	const div = document.createElement('div');

	li.classList.add('right');
	ul.appendChild(li);
	li.appendChild(div);
	div.classList.add('chatbot-right');
	div.textContent = userText.value;

	if(robotCount < Object.keys(chatList).length) {
		robotOutput();
	} else {
		// repeatRobotOutput(userText.value);
		repeatRobotOutput();
	}

	// 荳逡ｪ荳九∪縺ｧ繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ
	chatToBottom();

	// 繝�く繧ｹ繝亥�蜉帶ｬ�ｒ遨ｺ逋ｽ縺ｫ縺吶ｋ
	userText.value = '';
});


// 譛蠕後ｄ縺ｾ縺ｳ縺�
function repeatRobotOutput() {
    robotCount ++;
    console.log(robotCount);

    chatSubmitBtn.disabled = true;
                   
    const ul = document.getElementById('chatbot-ul');
    const li = document.createElement('li');
    li.classList.add('left');
    ul.appendChild(li);

    // 閠�∴荳ｭ繧｢繝九Γ繝ｼ繧ｷ繝ｧ繝ｳ縺薙％縺九ｉ
    const robotLoadingDiv = document.createElement('div');

    setTimeout( ()=> {
        li.appendChild(robotLoadingDiv);
        robotLoadingDiv.classList.add('chatbot-left');
        robotLoadingDiv.innerHTML = '<div id= "robot-loading-field"><span id= "robot-loading-circle1" class="material-icons">circle</span> <span id= "robot-loading-circle2" class="material-icons">circle</span> <span id= "robot-loading-circle3" class="material-icons">circle</span>';
        console.log('閠�∴荳ｭ');
        // 閠�∴荳ｭ繧｢繝九Γ繝ｼ繧ｷ繝ｧ繝ｳ縺薙％縺ｾ縺ｧ

        // 荳逡ｪ荳九∪縺ｧ繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ
        chatToBottom();
    }, 800);
    
    setTimeout( ()=> {

        // 閠�∴荳ｭ繧｢繝九Γ繝ｼ繧ｷ繝ｧ繝ｳ蜑企勁
        robotLoadingDiv.remove();
      
        // 縺薙�div縺ｫ繝�く繧ｹ繝医ｒ謖�ｮ�
        const div = document.createElement('div');
        li.appendChild(div);
        div.classList.add('chatbot-left');

        div.textContent = userData[userCount - 1];
      
        // 荳逡ｪ荳九∪縺ｧ繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ
        chatToBottom();

        chatSubmitBtn.disabled = false;

    }, 2000);

    if(chatbotZoomState === 'large') {
        document.querySelectorAll('.chatbot-left').forEach((cl) => {
            cl.style.maxWidth = '52vw';
        });
        document.querySelectorAll('.chatbot-right').forEach((cr) => {
            cr.style.maxWidth = '52vw';
        });
        document.querySelectorAll('.chatbot-left-rounded').forEach((cr) => {
            cr.style.maxWidth = '52vw';
        });
    }
}




// PC逕ｨ縺ｮ諡｡螟ｧ邵ｮ蟆乗ｩ溯�
function chatbotZoomShape() {
    chatbotZoomState = 'large';
    console.log(chatbotZoomState);
    
    chatbot.classList.add('chatbot-zoom');
    chatbotBody.classList.add('chatbot-body-zoom');
    chatbotFooter.classList.add('chatbot-footer-zoom');
    // 邵ｮ蟆上い繧､繧ｳ繝ｳ縺ｫ螟画峩
    chatbotZoomIcon.textContent = 'fullscreen_exit';
    chatbotZoomIcon.setAttribute('onclick', 'chatbotZoomOff()');

    if (window.matchMedia('(min-width:700px)').matches) {
        //PC蜃ｦ逅�
        document.querySelectorAll('.chatbot-left').forEach((cl) => {
            cl.style.maxWidth = '52vw';
        });
        document.querySelectorAll('.chatbot-right').forEach((cr) => {
            cr.style.maxWidth = '52vw';
        });
        document.querySelectorAll('.chatbot-left-rounded').forEach((cr) => {
            cr.style.maxWidth = '52vw';
        });
    }
}
function chatbotZoom() {
    // 諡｡螟ｧ縺吶ｋ
    chatbotZoomShape();
    window.location.href = '#chatbot';
    // 繝輔Ν繧ｹ繧ｯ繝ｪ繝ｼ繝ｳ
    // document.body.requestFullscreen();
}
function chatbotZoomOffShape() {
    chatbotZoomState = 'middle';
    console.log(chatbotZoomState);

    chatbot.classList.remove('chatbot-zoom');
    chatbotBody.classList.remove('chatbot-body-zoom');
    chatbotFooter.classList.remove('chatbot-footer-zoom');
    // 諡｡螟ｧ繧｢繧､繧ｳ繝ｳ縺ｫ螟画峩
    chatbotZoomIcon.textContent = 'fullscreen';
    chatbotZoomIcon.setAttribute('onclick', 'chatbotZoom()');

    document.querySelectorAll('.chatbot-left').forEach((cl) => {
        cl.style.maxWidth = '70%';
    });
    document.querySelectorAll('.chatbot-right').forEach((cr) => {
        cr.style.maxWidth = '70%';
    });
    document.querySelectorAll('.chatbot-left-rounded').forEach((cr) => {
        cr.style.maxWidth = '70%';
    });
}
function chatbotZoomOff() {
    // 邵ｮ蟆上☆繧�
    chatbotZoomOffShape();
    window.history.back();
    // 繝輔Ν繧ｹ繧ｯ繝ｪ繝ｼ繝ｳ隗｣髯､
    // document.exitFullscreen();
}


// 繝√Ε繝�ヨ繝懊ャ繝亥�縺ｮ繝ｪ繝ｳ繧ｯ縺梧款縺輔ｌ縺溘→縺�
function chatbotLinkClick() {
    chatbotZoomOffShape();
    // 謚倥ｊ縺溘◆繧
    document.getElementById('chatbot').classList.add('chatbot-none');
    document.getElementById('chatbot-back').classList.add('none');
    document.getElementById('chatbot-start-button-icon').textContent = 'question_answer';
}
