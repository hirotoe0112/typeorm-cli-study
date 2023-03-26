import { AppDataSource } from "./data-source"
import { Material } from "./entity/Material"
import { StudyRecord } from "./entity/StudyRecord"
import { User } from "./entity/User"

AppDataSource.initialize().then(async () => {
    // ユーザデータを確認
    const users = await AppDataSource.manager.find(User)

    // ない場合はinsertする
    if(users.length === 0){
        await insertUserData()
    }

    // 教材データを確認
    const materials = await AppDataSource.manager.find(Material)

    // ない場合はinsertする
    if(materials.length === 0){
        await insertMaterialData()
    }

    // 勉強履歴テーブルに登録
    await insertStudyRecord()

}).catch(error => console.log(error))

const insertUserData = async() => {
    const FIRST_NAMES = [
        "大翔", "翔太", "陽菜", "優希", "莉子", "樹", "愛菜", "芽衣", "蓮", "莉愛",
        "凜", "陸", "悠真", "莉緒", "花梨", "琉璃", "葵", "陽向", "悠希", "葵",
        "海翔", "愛梨", "瞳", "樹里", "怜", "佳奈", "恵", "大和", "沙耶香", "優",
        "慶太", "美咲", "美羽", "心愛", "桃子", "結菜", "遥", "彩花", "悠斗", "海音",
        "駿", "美月", "瑠奈", "和也", "和希", "麻衣", "雅人", "愛", "瑞希", "詩織"
    ];

    const LAST_NAMES = [
        "佐藤", "鈴木", "高橋", "田中", "渡辺", "伊藤", "山本", "中村", "小林", "加藤",
        "吉田", "山田", "佐々木", "山口", "松本", "井上", "木村", "林", "清水", "斎藤",
        "山崎", "坂本", "中島", "前田", "藤田", "岡田", "後藤", "長谷川", "石川", "森",
        "竹内", "中川", "原田", "小川", "小野", "村上", "太田", "金子", "田村", "中野",
        "和田", "池田", "川口", "菅原", "横山", "野口", "杉山", "村田", "久保", "千葉"
    ];
    const users = []
    for(let i = 0; i < 100; i++){
        const user = new User()
        user.firstName = FIRST_NAMES[Math.floor(Math.random() * FIRST_NAMES.length)]
        user.lastName = LAST_NAMES[Math.floor(Math.random() * LAST_NAMES.length)]
        user.age = Math.floor(Math.random() * 54) + 6
        users.push(user)
    }
    await AppDataSource.manager.save(users, {chunk: 100})
}

const insertMaterialData = async() => {
    const MATERIALS: string[] = [
        "算数のひみつ",
  "ふしぎな国語",
  "英語のコツ",
  "科学のちから",
  "歴史を旅しよう",
  "理科っておもしろい！",
  "こどもの哲学",
  "思考力トレーニング",
  "宇宙にいどう！",
  "おもしろビジュアル図鑑",
  "簡単プログラミング",
  "かんたん化学",
  "動物の不思議",
  "地球ってすごい！",
  "いっしょにドラマをつくろう",
  "まんがでわかる算数",
  "探究！地球環境",
  "科学の世界を冒険しよう",
  "ワクワク社会科見学",
  "へんしん！ちからの科学",
  "もっと知りたい！世界史",
  "ぼくの思考の翼",
  "楽しい工作で理科を学ぼう",
  "たのしいドイツ語",
  "絵でわかる物理",
  "わくわく人体図鑑",
  "旅して学ぼう！世界地理",
  "自然と科学のおもしろ図鑑",
  "つくって学ぶ！ロボット工学",
  "もののふの勉強帳",
  "英語で考える力",
  "ゲームで学ぶ物理",
  "小学生のためのプログラミング入門",
  "世界の文化を知ろう！",
  "ぼくの地図帳",
  "もっと楽しむ化学",
  "まるごとフランス語",
  "はじめての昆虫図鑑",
  "自分で創る！科学の実験",
  "かんたん体育科学",
  "語学がおもしろい！",
  "図解でわかる自然現象",
  "トリビアで楽しむ世界地理",
  "かんたんロボットプログラミング",
  "いきものの謎に迫る！",
  "物語で学ぶ世界史",
  "きょうりゅう時代の旅",
  "みんなでつくる！宇宙探査団",
  "はじめての実験工作",
  "ビジュアルで学ぶ天文学",
  "わくわく英語会話",
  "わくわく考古学",
  '数学1A基礎からの応用',
  '英文法完全マスター',
  '物理基礎問題集',
  '化学レベル別問題集',
  '日本史年表まるわかり',
  '世界史用語集',
  '地理の常識大全',
  '生物総合問題集',
  '英単語 1000days',
  '数学パズル入門',
  '物理実験テクニック',
  '化学反応式暗記ノート',
  '世界の名言365',
  '人類史年表図鑑',
  '地理の難問攻略',
  '文系数学のすべて',
  '理系数学のすべて',
  '基礎からの英作文',
  '英単語で学ぶ化学',
  '機械の仕組み図鑑',
  '経済用語マスター',
  '国語作文入門',
  'プログラミング入門',
  '物理解法攻略',
  '化学実験テクニック',
  '世界の国旗辞典',
  '人類史の流れ図鑑',
  '地理の裏側',
  '総合英語トレーニング',
  '中学復習ドリル',
  '基礎からの化学',
  '数学ミス集中回避法',
  '英語表現問題集',
  '物理の常識大全',
  '化学の常識大全',
  '日本史の流れ図解',
  '世界の国々図鑑',
  '地理用語集',
  '生物の常識大全',
  '国語読解力アップ',
  '英語リスニング完全マスター',
  '数学論理問題集',
  '英語長文読解マスター',
  '物理公式集',
  '化学反応式問題集',
  '世界の七不思議',
  '地理の用語大辞典',
  '生物の全知識',
  '日本史年表図鑑',
  '英単語で学ぶ物理',
  '経営学総論',
  '税理士試験 公認会計士法',
  '心理学研究法入門',
  '証券アナリスト 全科目対策',
  '金融機関融資ハンドブック',
  '不動産鑑定士 評価基準解説',
  '情報セキュリティスペシャリスト攻略ガイド',
  '公務員試験 法律科目対策',
  '宅建士 過去問題集',
  '土地家屋調査士 重要ポイント集',
  '証券外務員 合格対策',
  '社会保険労務士法改正ポイント',
  '財務諸表解析入門',
  '英語ビジネスメール 作成マニュアル',
  '日商簿記2級 全科目攻略',
  '実践ビジネスマナー',
  '労働法入門',
  '公務員試験 行政法対策',
  '税理士試験 財務諸表分析',
  '経営戦略入門',
  '社会保険労務士 過去問題集',
  '金融機関の信用リスク管理',
  '企業法務ポイント解説',
  '公認会計士 証券市場法',
  'FP技能士 過去問題集',
  '消費者金融の法律と実務',
  'システム監査技術者 試験問題集',
  '現代経営戦略の原理',
  '国家公務員試験 実戦演習',
  '簿記検定1級 最新対策',
  '社会保険労務士法改正ポイント',
  '公務員試験 統計科目対策',
  '株式投資のテクニカル分析',
  '会計士試験 税理士法',
  '生産管理入門',
  '金融工学入門',
  '経営戦略のフレームワーク',
    ]

    const materials = []
    for(let i = 0; i < MATERIALS.length; i++){
        const material = new Material()
        material.name = MATERIALS[i]
        materials.push(material)
    }
    await AppDataSource.manager.save(materials, {chunk: 100})
}

const insertStudyRecord = async() => {
    // ユーザデータと教材データの取得
    const users = await AppDataSource.manager.find(User)
    const materials = await AppDataSource.manager.find(Material)

    const studyRecords = []
    for(let i = 0; i < 100; i++){
        const studyRecord = new StudyRecord()
        studyRecord.user = users[Math.floor(Math.random() * users.length)]
        studyRecord.material = materials[Math.floor(Math.random() * materials.length)]
        studyRecord.minutes = Math.floor(Math.random() * 111) + 10
        studyRecords.push(studyRecord)
    }
    await AppDataSource.manager.save(studyRecords, {chunk: 100})
}