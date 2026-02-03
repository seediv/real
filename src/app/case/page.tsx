/**
 * REAL Cases Index Page
 *
 * 美しい実装の事例一覧
 * TIP核心4原則を逆算で発見した現物たち
 */

import Link from "next/link";

type PrincipleId = "C1" | "C2" | "C3" | "C4";

interface CaseItem {
  slug: string;
  title: string;
  titleEn: string;
  domain: string;
  featured: [PrincipleId, PrincipleId];
  underlying: [PrincipleId, PrincipleId];
  summary: string;
}

const cases: CaseItem[] = [
  {
    slug: "unix",
    title: "Unix哲学",
    titleEn: "Unix Philosophy",
    domain: "ソフトウェア",
    featured: ["C1", "C2"],
    underlying: ["C3", "C4"],
    summary:
      "50年生き残った設計哲学。「一つのことをうまくやれ」と「テキストストリーム」という2つの原則が、無限の組み合わせを生んだ。",
  },
  {
    slug: "git",
    title: "Git",
    titleEn: "Git Version Control",
    domain: "ソフトウェア",
    featured: ["C1", "C3"],
    underlying: ["C2", "C4"],
    summary:
      "不変データとSHA-1ハッシュ。複雑な問題を単純な構造で解決し、検証が構造に埋め込まれている。",
  },
  {
    slug: "tcp-ip",
    title: "TCP/IP",
    titleEn: "TCP/IP Protocol Suite",
    domain: "ソフトウェア",
    featured: ["C1", "C2"],
    underlying: ["C3", "C4"],
    summary:
      "インターネットの基盤。4層の階層化と「各層は下層を知らない」という制約が、爆発的なイノベーションを可能にした。",
  },
  {
    slug: "katsura",
    title: "桂離宮",
    titleEn: "Katsura Imperial Villa",
    domain: "建築",
    featured: ["C1", "C4"],
    underlying: ["C2", "C3"],
    summary:
      "日本美の極致。引き算の設計と「見え隠れ」が、有限の空間に無限の体験を生む。",
  },
  {
    slug: "ise",
    title: "伊勢神宮",
    titleEn: "Ise Grand Shrine",
    domain: "建築",
    featured: ["C3", "C4"],
    underlying: ["C1", "C2"],
    summary:
      "1300年続く式年遷宮。20年ごとの建て替えが、技術伝承と永続性を同時に実現する。",
  },
  {
    slug: "haiku",
    title: "俳句",
    titleEn: "Haiku Poetry",
    domain: "言語",
    featured: ["C1", "C4"],
    underlying: ["C2", "C3"],
    summary:
      "5-7-5という厳格な制約が、無限の表現と余白を生む。制約による解放の極致。",
  },
  {
    slug: "dna",
    title: "DNA複製機構",
    titleEn: "DNA Replication",
    domain: "生物学",
    featured: ["C2", "C3"],
    underlying: ["C1", "C4"],
    summary:
      "40億年の実装。相補的塩基対（A-T, G-C）という単純な規約が、検証を構造に埋め込んでいる。",
  },
  {
    slug: "tps",
    title: "トヨタ生産方式",
    titleEn: "Toyota Production System",
    domain: "組織",
    featured: ["C1", "C3"],
    underlying: ["C2", "C4"],
    summary:
      "ジャストインタイムと自働化。ムダを省く制約と、異常を即座に検知する構造が、世界の製造業を変えた。",
  },
  {
    slug: "lego",
    title: "LEGO",
    titleEn: "LEGO Building System",
    domain: "デザイン",
    featured: ["C2", "C4"],
    underlying: ["C1", "C3"],
    summary:
      "スタッドとチューブという単一の結合規約が、無限の創造性を解放する。",
  },
  {
    slug: "category-theory",
    title: "圏論",
    titleEn: "Category Theory",
    domain: "数学",
    featured: ["C1", "C2"],
    underlying: ["C3", "C4"],
    summary:
      "構造の構造を扱う。対象の内部を見ず、関係性だけで定義する。合成可能性が本質。",
  },
  {
    slug: "container",
    title: "コンテナ輸送",
    titleEn: "Intermodal Container",
    domain: "物流",
    featured: ["C1", "C2"],
    underlying: ["C3", "C4"],
    summary:
      "1つの箱の寸法と角金具の規格統一が、世界貿易のコストを96%下げた。技術革新ではなく、規約の革新。",
  },
  {
    slug: "immune",
    title: "免疫システム",
    titleEn: "Immune System",
    domain: "生物学",
    featured: ["C3", "C4"],
    underlying: ["C1", "C2"],
    summary:
      "「敵を知る」のではなく「自分を知る」ことで未知の脅威に対応する。検証と創発の生物学的実装。",
  },
  {
    slug: "periodic-table",
    title: "周期表",
    titleEn: "Periodic Table",
    domain: "化学",
    featured: ["C2", "C3"],
    underlying: ["C1", "C4"],
    summary:
      "元素を並べるという単純な規約が、「空欄」として未発見元素の存在と性質を予測した。整理が発見の道具になった。",
  },
  {
    slug: "igo",
    title: "囲碁",
    titleEn: "Go (Board Game)",
    domain: "ゲーム",
    featured: ["C1", "C4"],
    underlying: ["C2", "C3"],
    summary:
      "5分で覚えられるルールから、宇宙の原子数より多い局面が生まれる。単純さの極致が複雑さの極致を生む。",
  },
  {
    slug: "wikipedia",
    title: "Wikipedia",
    titleEn: "Wikipedia",
    domain: "知識共有",
    featured: ["C2", "C4"],
    underlying: ["C1", "C3"],
    summary:
      "「完璧な記事」ではなく「修正可能な記事」を目指した。誰も全体を設計していないのに、人類最大の百科事典が創発した。",
  },
  {
    slug: "constitution",
    title: "憲法",
    titleEn: "Constitution",
    domain: "法律",
    featured: ["C1", "C3"],
    underlying: ["C2", "C4"],
    summary:
      "国民を縛る法律ではなく、国家権力を縛る法律。制約の対象が逆転する、社会最大のスケールの「制約による解放」。",
  },
  {
    slug: "jazz",
    title: "ジャズ",
    titleEn: "Jazz Improvisation",
    domain: "音楽",
    featured: ["C1", "C4"],
    underlying: ["C2", "C3"],
    summary:
      "コード進行という制約の上で、毎回異なる音楽を即興で創造する。制約がなければ即興はノイズになる。",
  },
  {
    slug: "coral-reef",
    title: "サンゴ礁",
    titleEn: "Coral Reef Ecosystem",
    domain: "生態学",
    featured: ["C2", "C4"],
    underlying: ["C1", "C3"],
    summary:
      "海の0.1%の面積に25%の種が集中する。サンゴと褐虫藻の共生規約が、地球最大の生態系を創発させた。",
  },
  {
    slug: "relativity",
    title: "相対性理論",
    titleEn: "Theory of Relativity",
    domain: "物理学",
    featured: ["C1", "C3"],
    underlying: ["C2", "C4"],
    summary:
      "「光速は不変」という1つの制約からE=mc²が導かれ、理論自身が検証可能な予測を内包する。",
  },
  {
    slug: "chado",
    title: "茶道",
    titleEn: "Tea Ceremony (Chadō)",
    domain: "文化",
    featured: ["C1", "C4"],
    underlying: ["C2", "C3"],
    summary:
      "茶碗の回し方から歩数まで決められた型が、一期一会の創発を生む。最も厳格な型が最も自由な瞬間を作る。",
  },
];

export default function CasesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="container-base py-16 md:py-24">
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4 font-montserrat">
            美しい現物たち
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            TIP核心4原則は、これらの「美しい実装」を逆算して発見された。
            <br />
            発見ではなく、既知の知恵の統合と順序の明示。
          </p>
          <p className="text-sm text-gray-400 mb-8">
            ※
            どの事例にも4原則すべてが見出せる。ここでは特に際立つ2つを濃く、残り2つを薄く示している。
          </p>
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
            <h2 className="font-black tracking-tighter text-gray-900 mb-3">
              逆算アプローチ
            </h2>
            <p className="text-gray-600 text-sm mb-4">
              前向き設計（意図→???→実装）ではなく、
              <br />
              後ろ向き逆算（美しい実装→原則の発見→意図との関係）
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-gray-900 text-white text-xs rounded-full">
                C1 制約による解放
              </span>
              <span className="px-3 py-1 bg-gray-700 text-white text-xs rounded-full">
                C2 結合規約の単純さ
              </span>
              <span className="px-3 py-1 bg-gray-500 text-white text-xs rounded-full">
                C3 構造に検証を埋め込む
              </span>
              <span className="px-3 py-1 bg-gray-300 text-gray-800 text-xs rounded-full">
                C4 創発の余地を残す
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Cases Grid */}
      <section className="container-base py-8 pb-16">
        <div>
          <div className="grid md:grid-cols-2 gap-6">
            {cases.map((caseItem) => (
              <Link
                key={caseItem.slug}
                href={`/case/${caseItem.slug}`}
                className="group block bg-white border border-gray-200 rounded-xl p-6 hover:border-gray-400 hover:shadow-lg transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <span className="text-xs text-gray-500 uppercase tracking-wider">
                      {caseItem.domain}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-gray-700">
                      {caseItem.title}
                    </h3>
                    <p className="text-sm text-gray-500 font-montserrat">
                      {caseItem.titleEn}
                    </p>
                  </div>
                  <div className="flex gap-1">
                    {caseItem.featured.map((p) => (
                      <span
                        key={p}
                        className="px-2 py-1 bg-gray-900 text-white text-xs font-bold rounded"
                      >
                        {p}
                      </span>
                    ))}
                    {caseItem.underlying.map((p) => (
                      <span
                        key={p}
                        className="px-2 py-1 border border-gray-300 text-gray-400 text-xs font-bold rounded"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 text-sm">{caseItem.summary}</p>
                <div className="mt-4 text-sm text-gray-500 group-hover:text-gray-700">
                  詳細を見る →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Cases */}
      <section className="container-base py-8 md:py-16 bg-gray-100">
        <div>
          <h2 className="text-xl md:text-2xl font-black tracking-tighter text-gray-900 mb-4 md:mb-8 font-montserrat">
            今後の候補
          </h2>
          <p className="text-gray-600 mb-6 md:mb-8 text-sm md:text-base">
            以下の事例も、TIP核心4原則との関連で分析を予定している。
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {/* ソフトウェア */}
            <div className="bg-white rounded-lg p-3 md:p-4 border border-gray-200">
              <span className="text-xs text-gray-400 uppercase tracking-wider">
                ソフトウェア
              </span>
              <h3 className="font-bold text-gray-700 mt-1 text-sm md:text-base">
                REST API
              </h3>
              <p className="text-gray-500 text-xs mt-1 hidden md:block">
                制約による統一インターフェース
              </p>
            </div>
            <div className="bg-white rounded-lg p-3 md:p-4 border border-gray-200">
              <span className="text-xs text-gray-400 uppercase tracking-wider">
                ソフトウェア
              </span>
              <h3 className="font-bold text-gray-700 mt-1 text-sm md:text-base">
                Lisp
              </h3>
              <p className="text-gray-500 text-xs mt-1 hidden md:block">
                コードとデータの同一性
              </p>
            </div>
            <div className="bg-white rounded-lg p-3 md:p-4 border border-gray-200">
              <span className="text-xs text-gray-400 uppercase tracking-wider">
                ソフトウェア
              </span>
              <h3 className="font-bold text-gray-700 mt-1 text-sm md:text-base">
                Kubernetes
              </h3>
              <p className="text-gray-500 text-xs mt-1 hidden md:block">
                宣言的構成管理
              </p>
            </div>
            <div className="bg-white rounded-lg p-3 md:p-4 border border-gray-200">
              <span className="text-xs text-gray-400 uppercase tracking-wider">
                ソフトウェア
              </span>
              <h3 className="font-bold text-gray-700 mt-1 text-sm md:text-base">
                SQLite
              </h3>
              <p className="text-gray-500 text-xs mt-1 hidden md:block">
                単一ファイルという制約
              </p>
            </div>

            {/* デザイン・建築 */}
            <div className="bg-white rounded-lg p-3 md:p-4 border border-gray-200">
              <span className="text-xs text-gray-400 uppercase tracking-wider">
                デザイン
              </span>
              <h3 className="font-bold text-gray-700 mt-1 text-sm md:text-base">
                Bauhaus
              </h3>
              <p className="text-gray-500 text-xs mt-1 hidden md:block">
                形態は機能に従う
              </p>
            </div>
            <div className="bg-white rounded-lg p-3 md:p-4 border border-gray-200">
              <span className="text-xs text-gray-400 uppercase tracking-wider">
                デザイン
              </span>
              <h3 className="font-bold text-gray-700 mt-1 text-sm md:text-base">
                Dieter Rams
              </h3>
              <p className="text-gray-500 text-xs mt-1 hidden md:block">
                Less but better
              </p>
            </div>
            <div className="bg-white rounded-lg p-3 md:p-4 border border-gray-200">
              <span className="text-xs text-gray-400 uppercase tracking-wider">
                都市設計
              </span>
              <h3 className="font-bold text-gray-700 mt-1 text-sm md:text-base">
                都市の路地
              </h3>
              <p className="text-gray-500 text-xs mt-1 hidden md:block">
                計画外からの創発
              </p>
            </div>
            <div className="bg-white rounded-lg p-3 md:p-4 border border-gray-200">
              <span className="text-xs text-gray-400 uppercase tracking-wider">
                インフラ
              </span>
              <h3 className="font-bold text-gray-700 mt-1 text-sm md:text-base">
                鉄道時刻表
              </h3>
              <p className="text-gray-500 text-xs mt-1 hidden md:block">
                制約の中の最適化
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Note */}
      <section className="container-base py-16 bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-black tracking-tighter text-gray-900 mb-4 font-montserrat">
            注記
          </h2>
          <div className="text-gray-600 space-y-4">
            <p>
              これらの事例から抽出した4原則は、各々が既知の概念である。
              <br />
              Unix哲学、Design by
              Contract、創発的デザインなど、先人が既に言語化している。
            </p>
            <p>
              価値があるとすれば、
              <strong>4つの統合と順序（C1→C2→C3→C4）の明示</strong>にある。
              <br />
              順序を逆にすると混乱が生じやすいことを、複数のプロジェクトで確認した。
            </p>
            <p className="text-sm text-gray-500">
              「発見」ではなく「整理」。ただし、使える手順として機能する。
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
