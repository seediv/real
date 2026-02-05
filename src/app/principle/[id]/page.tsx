/**
 * REAL Principle Detail Page
 *
 * 各原則の横断的比較 — 20事例を通して原則の本質を浮かび上がらせる
 */

import Link from "next/link";
import { notFound } from "next/navigation";

type PrincipleId = "c1" | "c2" | "c3" | "c4";

interface CaseEntry {
  slug: string;
  title: string;
  titleEn: string;
  domain: string;
  text: string;
}

interface PrincipleData {
  label: string;
  name: string;
  description: string;
  featured: CaseEntry[];
  underlying: CaseEntry[];
  crossDomainInsight: string;
}

const principlesData: Record<PrincipleId, PrincipleData> = {
  c1: {
    label: "C1",
    name: "制約による解放",
    description: "意図的に選択肢を減らすことで、本質的な自由を得る",
    featured: [
      {
        slug: "unix",
        title: "Unix哲学",
        titleEn: "Unix Philosophy",
        domain: "ソフトウェア",
        text: "「一つのことをうまくやれ（Do one thing well）」という制約が、無限の組み合わせを可能にした。",
      },
      {
        slug: "git",
        title: "Git",
        titleEn: "Git Version Control",
        domain: "ソフトウェア",
        text: "不変データ（Immutability）という制約が、信頼性と単純さを生んだ。一度記録したら変わらない。",
      },
      {
        slug: "tcp-ip",
        title: "TCP/IP",
        titleEn: "TCP/IP Protocol Suite",
        domain: "ソフトウェア",
        text: "4層の階層化と「各層は上下の層のみと対話する」という制約が、爆発的なイノベーションを可能にした。",
      },
      {
        slug: "katsura",
        title: "桂離宮",
        titleEn: "Katsura Imperial Villa",
        domain: "建築",
        text: "引き算の設計。装飾を排し、必要なものだけを残すことで、無限の奥行きを生んだ。",
      },
      {
        slug: "haiku",
        title: "俳句",
        titleEn: "Haiku Poetry",
        domain: "言語",
        text: "5-7-5という17音の厳格な制約が、無限の表現可能性を開いた。制約がなければ、何を削ぎ落とすべきかわからない。",
      },
      {
        slug: "tps",
        title: "トヨタ生産方式",
        titleEn: "Toyota Production System",
        domain: "組織",
        text: "「在庫を持たない」というジャストインタイムの制約が、問題を即座に顕在化させ、継続的改善を強制する。",
      },
      {
        slug: "category-theory",
        title: "圏論",
        titleEn: "Category Theory",
        domain: "数学",
        text: "対象の内部構造を見ないという制約。この抽象化により、分野を超えた普遍的なパターンが見えるようになった。",
      },
      {
        slug: "container",
        title: "コンテナ輸送",
        titleEn: "Intermodal Container",
        domain: "物流",
        text: "20フィートまたは40フィートという箱の寸法制約が、船・トラック・鉄道・クレーンの全てを統一し、物流全体を解放した。",
      },
      {
        slug: "igo",
        title: "囲碁",
        titleEn: "Go (Board Game)",
        domain: "ゲーム",
        text: "19×19の盤面、白と黒の石、交互に置く、囲んだら取る。これだけのルールから、10の170乗を超える局面が生まれる。",
      },
      {
        slug: "constitution",
        title: "憲法",
        titleEn: "Constitution",
        domain: "法律",
        text: "権力への制約（検閲の禁止、不当逮捕の禁止など）が、国民の表現の自由・身体の自由を構造的に保障する。制約される対象が「権力」であることが本質。",
      },
      {
        slug: "jazz",
        title: "ジャズ",
        titleEn: "Jazz Improvisation",
        domain: "音楽",
        text: "12小節のブルース進行、II-V-Iのコード進行、4/4拍子。これらの制約が「何を弾くか」の選択肢を絞り、即興の質を高める。制約がなければ即興は散漫になる。",
      },
      {
        slug: "relativity",
        title: "相対性理論",
        titleEn: "Theory of Relativity",
        domain: "物理学",
        text: "「光速不変」という直観に反する制約を受け入れることで、ニュートン力学では説明できなかった現象（時間の遅れ、質量とエネルギーの等価性）が統一的に説明可能になった。",
      },
      {
        slug: "chado",
        title: "茶道",
        titleEn: "Tea Ceremony (Chadō)",
        domain: "文化",
        text: "点前（てまえ）の手順は厳密に定められている。しかしその制約が「何をするか」の判断から解放し、「いま、ここ」への集中を可能にする。",
      },
    ],
    underlying: [
      {
        slug: "ise",
        title: "伊勢神宮",
        titleEn: "Ise Grand Shrine",
        domain: "建築",
        text: "20年という周期の制約が、「今この世代で伝えなければ失われる」という切迫感を生み、技術伝承を強制する。",
      },
      {
        slug: "dna",
        title: "DNA複製機構",
        titleEn: "DNA Replication",
        domain: "生物学",
        text: "4種の塩基（A, T, G, C）だけという制約が、遺伝暗号の普遍性と単純さを生んだ。",
      },
      {
        slug: "lego",
        title: "LEGO",
        titleEn: "LEGO Building System",
        domain: "デザイン",
        text: "8mmグリッドという寸法制約が、どのブロックも確実に嵌合する信頼性を保証している。",
      },
      {
        slug: "immune",
        title: "免疫システム",
        titleEn: "Immune System",
        domain: "生物学",
        text: "「自己を攻撃しない」という制約が、未知の脅威への対応力を構造的に保障している。",
      },
      {
        slug: "periodic-table",
        title: "周期表",
        titleEn: "Periodic Table",
        domain: "化学",
        text: "原子番号順という1つの制約が、118元素の多様な性質に秩序を与えた。",
      },
      {
        slug: "wikipedia",
        title: "Wikipedia",
        titleEn: "Wikipedia",
        domain: "知識共有",
        text: "「中立的な観点」という編集方針の制約が、特定の立場に偏らない百科事典を可能にした。",
      },
      {
        slug: "coral-reef",
        title: "サンゴ礁",
        titleEn: "Coral Reef Ecosystem",
        domain: "生態学",
        text: "水温26-28℃という狭い生存条件の制約が、熱帯の特定海域に生態系を集中させ、密度が多様性を生んだ。",
      },
    ],
    crossDomainInsight:
      "13/20の事例がC1を特徴的に持つ。ソフトウェア（Unix, Git）、建築（桂離宮）、言語（俳句）、生物学（なし）、法律（憲法）\u2014\u2014領域を問わず、「何をしないか」の決定が設計の起点になっている。制約は外部から課されるものではなく、設計者が意図的に選ぶもの。選ばれた制約だけが解放を生む。",
  },
  c2: {
    label: "C2",
    name: "結合規約の単純さ",
    description:
      "部品同士の接続ルールを単純にすることで、全体の組み合わせ可能性を最大化する",
    featured: [
      {
        slug: "unix",
        title: "Unix哲学",
        titleEn: "Unix Philosophy",
        domain: "ソフトウェア",
        text: "テキストストリームという単純なインターフェースが、全てのプログラムを繋ぐ共通語となった。",
      },
      {
        slug: "tcp-ip",
        title: "TCP/IP",
        titleEn: "TCP/IP Protocol Suite",
        domain: "ソフトウェア",
        text: "IPパケットという単一の抽象化が、異なるネットワーク技術（Ethernet、Wi-Fi、衛星）を統一する共通語になった。",
      },
      {
        slug: "dna",
        title: "DNA複製機構",
        titleEn: "DNA Replication",
        domain: "生物学",
        text: "相補的塩基対（A-T, G-C）という極めて単純な規約。4文字のアルファベットで全生命の情報を記述。",
      },
      {
        slug: "lego",
        title: "LEGO",
        titleEn: "LEGO Building System",
        domain: "デザイン",
        text: "スタッドとチューブという単一の結合規約が、1958年以来のすべてのブロックの互換性を保証している。",
      },
      {
        slug: "category-theory",
        title: "圏論",
        titleEn: "Category Theory",
        domain: "数学",
        text: "射の合成（composition）と恒等射（identity）という2つの規約だけで、あらゆる構造を記述できる。",
      },
      {
        slug: "container",
        title: "コンテナ輸送",
        titleEn: "Intermodal Container",
        domain: "物流",
        text: "コーナーキャスティング（角の金具）という単一の結合規約が、世界中のどの港でも積み替え可能にした。ISO 668として国際標準化。",
      },
      {
        slug: "periodic-table",
        title: "周期表",
        titleEn: "Periodic Table",
        domain: "化学",
        text: "原子番号順に並べ、性質の類似する元素を縦に配置するという単純な規約が、118元素の関係性を一覧可能にした。",
      },
      {
        slug: "wikipedia",
        title: "Wikipedia",
        titleEn: "Wikipedia",
        domain: "知識共有",
        text: "Wikiマークアップという単純な記法と「誰でも編集できる」という規約が、数百万人の貢献者を結びつけた。専門知識なしに参加できる。",
      },
      {
        slug: "coral-reef",
        title: "サンゴ礁",
        titleEn: "Coral Reef Ecosystem",
        domain: "生態学",
        text: "サンゴと褐虫藻の共生は「住処と栄養の交換」という単純な規約。この規約が熱帯の貧栄養海域に栄養循環を生み出し、多様な生態系の基盤となった。",
      },
    ],
    underlying: [
      {
        slug: "git",
        title: "Git",
        titleEn: "Git Version Control",
        domain: "ソフトウェア",
        text: "blob、tree、commitの3オブジェクトだけで全ての履歴を表現する。",
      },
      {
        slug: "katsura",
        title: "桂離宮",
        titleEn: "Katsura Imperial Villa",
        domain: "建築",
        text: "畳のモジュール寸法が空間構成の基本規約となり、全体の調和を支えている。",
      },
      {
        slug: "ise",
        title: "伊勢神宮",
        titleEn: "Ise Grand Shrine",
        domain: "建築",
        text: "師弟の口伝と実践という単純な伝承規約が、文書なしに1300年の技術を繋いでいる。",
      },
      {
        slug: "haiku",
        title: "俳句",
        titleEn: "Haiku Poetry",
        domain: "言語",
        text: "季語という共有知の規約が、最小限の言葉で読者と情景を共有する仕組みとなっている。",
      },
      {
        slug: "tps",
        title: "トヨタ生産方式",
        titleEn: "Toyota Production System",
        domain: "組織",
        text: "かんばんという紙1枚の規約が、前工程と後工程を繋ぐ唯一のインターフェースとなっている。",
      },
      {
        slug: "immune",
        title: "免疫システム",
        titleEn: "Immune System",
        domain: "生物学",
        text: "抗原と抗体の鍵と鍵穴という単純な結合規約が、10億種類以上の認識を可能にしている。",
      },
      {
        slug: "igo",
        title: "囲碁",
        titleEn: "Go (Board Game)",
        domain: "ゲーム",
        text: "石の生死は「呼吸点があるかないか」の一つのルールで決まる。例外がない。",
      },
      {
        slug: "constitution",
        title: "憲法",
        titleEn: "Constitution",
        domain: "法律",
        text: "三権分立という単純な分割規約が、権力間の相互監視を構造化している。",
      },
      {
        slug: "jazz",
        title: "ジャズ",
        titleEn: "Jazz Improvisation",
        domain: "音楽",
        text: "コード進行という共有規約が、初対面の演奏者同士でもセッションを可能にする。",
      },
      {
        slug: "relativity",
        title: "相対性理論",
        titleEn: "Theory of Relativity",
        domain: "物理学",
        text: "テンソル方程式という統一的な記法が、異なる座標系間の物理法則を単一の規約で繋ぐ。",
      },
      {
        slug: "chado",
        title: "茶道",
        titleEn: "Tea Ceremony (Chadō)",
        domain: "文化",
        text: "点前の手順という共有規約が、流派を超えて亭主と客の間合いを成立させている。",
      },
    ],
    crossDomainInsight:
      "結合規約は「見えにくい」原則。Unix（テキストストリーム）、DNA（塩基対）、LEGO（スタッド）、コンテナ（角金具）\u2014\u2014いずれも部品そのものより接続点に本質がある。優れた設計は部品の性能ではなく、部品間の約束事で決まる。",
  },
  c3: {
    label: "C3",
    name: "構造に検証を埋め込む",
    description: "正しさを人の注意力ではなく、構造そのものに保証させる",
    featured: [
      {
        slug: "git",
        title: "Git",
        titleEn: "Git Version Control",
        domain: "ソフトウェア",
        text: "SHA-1ハッシュによる内容アドレス格納。内容が同じなら同一と判定され、整合性が自動的に保証される。",
      },
      {
        slug: "ise",
        title: "伊勢神宮",
        titleEn: "Ise Grand Shrine",
        domain: "建築",
        text: "20年ごとの式年遷宮が、技術伝承の検証機構として機能する。「作れなくなった」時点で問題が顕在化する。",
      },
      {
        slug: "dna",
        title: "DNA複製機構",
        titleEn: "DNA Replication",
        domain: "生物学",
        text: "二重らせん構造自体がバックアップ。片方が壊れても、相補鎖から復元可能。検証が構造に組み込まれている。",
      },
      {
        slug: "tps",
        title: "トヨタ生産方式",
        titleEn: "Toyota Production System",
        domain: "組織",
        text: "自働化（Jidoka）により、異常が発生したら機械が自動停止する。検査工程ではなく、製造工程自体が品質を保証する。",
      },
      {
        slug: "immune",
        title: "免疫システム",
        titleEn: "Immune System",
        domain: "生物学",
        text: "胸腺でのT細胞の選別（正の選択と負の選択）。自己を攻撃するT細胞は成熟前に排除される。検証が発達過程に埋め込まれている。",
      },
      {
        slug: "periodic-table",
        title: "周期表",
        titleEn: "Periodic Table",
        domain: "化学",
        text: "空欄が検証機構として機能した。メンデレーエフはエカアルミニウム、エカシリコンなど未発見元素の性質を予測し、後の発見で正確さが確認された。",
      },
      {
        slug: "constitution",
        title: "憲法",
        titleEn: "Constitution",
        domain: "法律",
        text: "違憲審査制度（司法による法律の合憲性チェック）が検証機構として構造に埋め込まれている。法律が憲法に違反していれば無効になる。",
      },
      {
        slug: "relativity",
        title: "相対性理論",
        titleEn: "Theory of Relativity",
        domain: "物理学",
        text: "理論自身が具体的な予測を内包する。水星の近日点移動、光の重力による曲がり、重力波の存在。これらは理論の構造から自動的に導かれ、後に全て観測で確認された。",
      },
    ],
    underlying: [
      {
        slug: "unix",
        title: "Unix哲学",
        titleEn: "Unix Philosophy",
        domain: "ソフトウェア",
        text: "パイプラインの各段でエラーが即座に検出される。exit codeによるエラー伝搬が構造に組み込まれている。",
      },
      {
        slug: "tcp-ip",
        title: "TCP/IP",
        titleEn: "TCP/IP Protocol Suite",
        domain: "ソフトウェア",
        text: "TCPのチェックサムとシーケンス番号が、データの完全性と順序を構造的に保証する。",
      },
      {
        slug: "katsura",
        title: "桂離宮",
        titleEn: "Katsura Imperial Villa",
        domain: "建築",
        text: "自然光と影の変化が空間の質を常に映し出す。素材を隠さないから、劣化も美も見える。",
      },
      {
        slug: "haiku",
        title: "俳句",
        titleEn: "Haiku Poetry",
        domain: "言語",
        text: "切れ字（「や」「かな」「けり」）が句の構造を規定し、余韻が成立しているかを形式が検証する。",
      },
      {
        slug: "lego",
        title: "LEGO",
        titleEn: "LEGO Building System",
        domain: "デザイン",
        text: "物理的な嵌合が検証そのもの。繋がらなければ即座に分かる。検査工程は不要。",
      },
      {
        slug: "category-theory",
        title: "圏論",
        titleEn: "Category Theory",
        domain: "数学",
        text: "可換図式が定理の検証手段。図式が可換であることを示せば、証明が構造的に完了する。",
      },
      {
        slug: "container",
        title: "コンテナ輸送",
        titleEn: "Intermodal Container",
        domain: "物流",
        text: "コンテナの密封性が中身の品質を物理的に保証する。開封しなければ破損・盗難がないことが構造で検証される。",
      },
      {
        slug: "igo",
        title: "囲碁",
        titleEn: "Go (Board Game)",
        domain: "ゲーム",
        text: "地（領域）の計算が盤面の状態から一意に決まる。勝敗の判定が構造に埋め込まれている。",
      },
      {
        slug: "wikipedia",
        title: "Wikipedia",
        titleEn: "Wikipedia",
        domain: "知識共有",
        text: "「出典を明記せよ」という方針が検証機構。出典のない記述は誰でも疑問を呈せる。",
      },
      {
        slug: "jazz",
        title: "ジャズ",
        titleEn: "Jazz Improvisation",
        domain: "音楽",
        text: "アンサンブルでの相互傾聴が検証機構。不協和が即座に聞こえ、演奏者同士がリアルタイムで修正する。",
      },
      {
        slug: "coral-reef",
        title: "サンゴ礁",
        titleEn: "Coral Reef Ecosystem",
        domain: "生態学",
        text: "共生関係の崩壊（白化現象）が環境悪化の検証機構として機能する。構造が異常を可視化する。",
      },
      {
        slug: "chado",
        title: "茶道",
        titleEn: "Tea Ceremony (Chadō)",
        domain: "文化",
        text: "亭主の所作と客の応答が相互検証として機能する。礼の作法が「場が成立しているか」を常に映し出す。",
      },
    ],
    crossDomainInsight:
      "検証を人の注意力に委ねた瞬間、システムは劣化し始める。Git（ハッシュ）、DNA（相補性）、免疫（自己/非自己）、相対性理論（光速不変からの予測）\u2014\u2014構造そのものが「間違いを許さない」ように設計されている。これは信頼の技術である。",
  },
  c4: {
    label: "C4",
    name: "創発の余地を残す",
    description: "設計者が予測しなかった価値が生まれる余地を意図的に残す",
    featured: [
      {
        slug: "katsura",
        title: "桂離宮",
        titleEn: "Katsura Imperial Villa",
        domain: "建築",
        text: "月の動き、季節の変化、訪問者の歩み方によって、無限の体験が創発する。設計者が想定しなかった美しさが生まれる。",
      },
      {
        slug: "ise",
        title: "伊勢神宮",
        titleEn: "Ise Grand Shrine",
        domain: "建築",
        text: "1300年にわたり、時代ごとの職人が微細な改良を加え続けている。同一でありながら進化する。",
      },
      {
        slug: "haiku",
        title: "俳句",
        titleEn: "Haiku Poetry",
        domain: "言語",
        text: "「言わないこと」「余白」が本質。読者の想像力が詩を完成させる。作者が全てを語らない。",
      },
      {
        slug: "lego",
        title: "LEGO",
        titleEn: "LEGO Building System",
        domain: "デザイン",
        text: "設計者が想定しなかった創造物が無限に生まれる。ブロック自体は「何も意味しない」からこそ、何にでもなれる。",
      },
      {
        slug: "immune",
        title: "免疫システム",
        titleEn: "Immune System",
        domain: "生物学",
        text: "V(D)J遺伝子再構成により、10億種類以上の抗体を生成可能。遺伝子にないパターンを、遺伝子の組み合わせから創発させる。",
      },
      {
        slug: "igo",
        title: "囲碁",
        titleEn: "Go (Board Game)",
        domain: "ゲーム",
        text: "石自体に固有の能力はない。配置と関係性から「厚み」「模様」「生き死に」が創発する。部分の和を超えた全体が生まれる。",
      },
      {
        slug: "wikipedia",
        title: "Wikipedia",
        titleEn: "Wikipedia",
        domain: "知識共有",
        text: "個々の編集は小さな修正に過ぎない。しかし集積すると、6000万以上の記事を持つ人類最大の百科事典が創発した。誰も全体を設計していない。",
      },
      {
        slug: "jazz",
        title: "ジャズ",
        titleEn: "Jazz Improvisation",
        domain: "音楽",
        text: "同じスタンダード曲でも、演奏するたびに異なる音楽が生まれる。演奏者同士の相互作用から、誰も予測しなかったフレーズやグルーヴが創発する。",
      },
      {
        slug: "coral-reef",
        title: "サンゴ礁",
        titleEn: "Coral Reef Ecosystem",
        domain: "生態学",
        text: "サンゴが作る三次元構造（裂け目、穴、段差）が無数のニッチを提供し、魚類、甲殻類、軟体動物など多様な種の共存を可能にした。設計者はいない。",
      },
      {
        slug: "chado",
        title: "茶道",
        titleEn: "Tea Ceremony (Chadō)",
        domain: "文化",
        text: "一期一会。同じ茶室、同じ道具、同じ手順でも、その日の天気、客の表情、季節の移ろいにより、二度と同じ茶会は生まれない。型の中から一回性が創発する。",
      },
    ],
    underlying: [
      {
        slug: "unix",
        title: "Unix哲学",
        titleEn: "Unix Philosophy",
        domain: "ソフトウェア",
        text: "grep | sort | uniq -c のように、設計者が想定しなかった組み合わせが日常的に生まれる。",
      },
      {
        slug: "git",
        title: "Git",
        titleEn: "Git Version Control",
        domain: "ソフトウェア",
        text: "ブランチが軽量なポインタだから、実験的な開発フローが自由に生まれる。",
      },
      {
        slug: "tcp-ip",
        title: "TCP/IP",
        titleEn: "TCP/IP Protocol Suite",
        domain: "ソフトウェア",
        text: "End-to-End原則により、Web、動画配信、IoTなど予測不可能な上位サービスが次々に生まれた。",
      },
      {
        slug: "dna",
        title: "DNA複製機構",
        titleEn: "DNA Replication",
        domain: "生物学",
        text: "複製時の低確率な変異が進化の原動力。完璧でないことが、40億年の多様性を創発させた。",
      },
      {
        slug: "tps",
        title: "トヨタ生産方式",
        titleEn: "Toyota Production System",
        domain: "組織",
        text: "現場のカイゼン提案が日常的に生まれる。管理者が設計しない改善が、現場から創発し続ける。",
      },
      {
        slug: "category-theory",
        title: "圏論",
        titleEn: "Category Theory",
        domain: "数学",
        text: "異なる数学分野に同じ構造（関手、自然変換）を発見することで、新しい数学が創発する。",
      },
      {
        slug: "container",
        title: "コンテナ輸送",
        titleEn: "Intermodal Container",
        domain: "物流",
        text: "規格統一が想定外のサプライチェーン革新を生んだ。グローバリゼーションの物理的基盤となった。",
      },
      {
        slug: "periodic-table",
        title: "周期表",
        titleEn: "Periodic Table",
        domain: "化学",
        text: "表の空欄が未発見元素の存在を予測させ、新しい発見への道筋を創発させた。",
      },
      {
        slug: "constitution",
        title: "憲法",
        titleEn: "Constitution",
        domain: "法律",
        text: "判例法の蓄積により、制定時に想定されなかった状況への適用が創発的に生まれ続ける。",
      },
      {
        slug: "relativity",
        title: "相対性理論",
        titleEn: "Theory of Relativity",
        domain: "物理学",
        text: "場の方程式からブラックホール、膨張宇宙、重力レンズなど、アインシュタイン自身が予想しなかった帰結が創発した。",
      },
    ],
    crossDomainInsight:
      "設計者が「ここは決めない」と決めた場所から創発が生まれる。桂離宮（回遊式の経路）、囲碁（盤面の可能性）、Wikipedia（編集の開放）、ジャズ（即興の余白）\u2014\u2014創発は放任ではなく、C1〜C3が整った上で初めて可能になる。4原則の順序（C1→C2→C3→C4）はこの依存関係を表している。",
  },
};

const validIds: PrincipleId[] = ["c1", "c2", "c3", "c4"];

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function PrincipleDetailPage({ params }: PageProps) {
  const { id } = await params;

  if (!validIds.includes(id as PrincipleId)) {
    notFound();
  }

  const principle = principlesData[id as PrincipleId];

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="container-base py-12 md:py-16 border-b border-gray-200">
        <div>
          <Link
            href="/principle"
            className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
          >
            ← 4原則 × 20事例
          </Link>
          <div className="mt-4">
            <span className="text-5xl md:text-6xl font-black text-gray-900 font-montserrat">
              {principle.label}
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mt-2">
              {principle.name}
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              {principle.description}
            </p>
            <div className="mt-4 flex gap-3 text-sm text-gray-500">
              <span className="px-3 py-1 bg-gray-900 text-white font-bold rounded">
                Featured {principle.featured.length}
              </span>
              <span className="px-3 py-1 border border-dashed border-gray-300 text-gray-400 font-bold rounded">
                Underlying {principle.underlying.length}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Cases */}
      <section className="container-base py-12">
        <div>
          <h2 className="text-2xl font-black tracking-tighter text-gray-900 mb-2 font-montserrat">
            特徴的に現れる事例
          </h2>
          <p className="text-sm text-gray-500 mb-8">
            この原則が際立って表れている {principle.featured.length} 事例
          </p>
          <div className="space-y-4">
            {principle.featured.map((c) => (
              <Link
                key={c.slug}
                href={`/case/${c.slug}`}
                className="block bg-gray-50 rounded-none p-6 border border-gray-200 hover:border-gray-400 hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <span className="text-xs text-gray-500 uppercase tracking-wider">
                      {c.domain}
                    </span>
                    <h3 className="text-lg font-bold text-gray-900">
                      {c.title}
                    </h3>
                    <p className="text-sm text-gray-500 font-montserrat">
                      {c.titleEn}
                    </p>
                  </div>
                  <span className="px-2 py-0.5 bg-gray-900 text-white text-xs font-bold rounded flex-shrink-0">
                    {principle.label}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mt-2">{c.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Underlying Cases */}
      <section className="container-base py-12 bg-gray-50">
        <div>
          <h2 className="text-2xl font-black tracking-tighter text-gray-900 mb-2 font-montserrat">
            通底する事例
          </h2>
          <p className="text-xs text-gray-400 mb-8">
            この原則が基盤として存在している {principle.underlying.length}{" "}
            事例。目立たないが、確かにそこにある。
          </p>
          <div className="space-y-3">
            {principle.underlying.map((c) => (
              <Link
                key={c.slug}
                href={`/case/${c.slug}`}
                className="block rounded-none p-4 border border-dashed border-gray-300 bg-white hover:border-gray-500 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-start justify-between mb-1">
                  <div>
                    <span className="text-xs text-gray-400 uppercase tracking-wider">
                      {c.domain}
                    </span>
                    <h3 className="text-base font-bold text-gray-700">
                      {c.title}
                    </h3>
                    <p className="text-xs text-gray-400 font-montserrat">
                      {c.titleEn}
                    </p>
                  </div>
                  <span className="px-2 py-0.5 border border-gray-300 text-gray-400 text-xs font-bold rounded flex-shrink-0">
                    {principle.label}
                  </span>
                </div>
                <p className="text-sm text-gray-500 mt-1">{c.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-domain Insight */}
      <section className="container-base py-12 bg-gray-900 text-white">
        <div>
          <h2 className="text-2xl font-black tracking-tighter mb-6 font-montserrat">
            横断的洞察
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            {principle.crossDomainInsight}
          </p>
        </div>
      </section>

      {/* Navigation */}
      <section className="container-base py-12 border-t border-gray-200">
        <div className="flex justify-between">
          <Link
            href="/principle"
            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-full hover:border-gray-400 transition-colors"
          >
            ← 4原則一覧
          </Link>
          <Link
            href="/case"
            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-full hover:border-gray-400 transition-colors"
          >
            Cases →
          </Link>
        </div>
      </section>
    </main>
  );
}
