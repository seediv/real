/**
 * GOOD Cases Index Page
 *
 * 美しい実装の事例一覧
 * TIP核心4原則を逆算で発見した現物たち
 */

import Link from "next/link";

interface CaseItem {
  slug: string;
  title: string;
  titleEn: string;
  domain: string;
  principles: string[];
  summary: string;
}

const cases: CaseItem[] = [
  {
    slug: "unix",
    title: "Unix哲学",
    titleEn: "Unix Philosophy",
    domain: "ソフトウェア",
    principles: ["C1", "C2"],
    summary:
      "50年生き残った設計哲学。「一つのことをうまくやれ」と「テキストストリーム」という2つの原則が、無限の組み合わせを生んだ。",
  },
  {
    slug: "git",
    title: "Git",
    titleEn: "Git Version Control",
    domain: "ソフトウェア",
    principles: ["C1", "C3"],
    summary:
      "不変データとSHA-1ハッシュ。複雑な問題を単純な構造で解決し、検証が構造に埋め込まれている。",
  },
  {
    slug: "katsura",
    title: "桂離宮",
    titleEn: "Katsura Imperial Villa",
    domain: "建築",
    principles: ["C1", "C4"],
    summary:
      "日本美の極致。引き算の設計と「見え隠れ」が、有限の空間に無限の体験を生む。",
  },
  {
    slug: "dna",
    title: "DNA複製機構",
    titleEn: "DNA Replication",
    domain: "生物学",
    principles: ["C2", "C3"],
    summary:
      "40億年の実装。相補的塩基対（A-T, G-C）という単純な規約が、検証を構造に埋め込んでいる。",
  },
  {
    slug: "category-theory",
    title: "圏論",
    titleEn: "Category Theory",
    domain: "数学",
    principles: ["C1", "C2"],
    summary:
      "構造の構造を扱う。対象の内部を見ず、関係性だけで定義する。合成可能性が本質。",
  },
];

export default function CasesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="container-base py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/"
            className="text-gray-500 hover:text-gray-700 mb-4 inline-block"
          >
            ← GOOD Project
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-montserrat">
            美しい現物たち
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            TIP核心4原則は、これらの「美しい実装」を逆算して発見された。
            <br />
            発見ではなく、既知の知恵の統合と順序の明示。
          </p>
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
            <h2 className="font-bold text-gray-900 mb-3">逆算アプローチ</h2>
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
        <div className="max-w-5xl mx-auto">
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
                    {caseItem.principles.map((p) => (
                      <span
                        key={p}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-bold rounded"
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
      <section className="container-base py-16 bg-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 font-montserrat">
            候補ケース
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* ソフトウェア */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 opacity-60">
              <span className="text-xs text-gray-400 uppercase tracking-wider">
                ソフトウェア
              </span>
              <h3 className="font-bold text-gray-700 mt-1">TCP/IP</h3>
              <p className="text-gray-500 text-sm mt-2">
                階層化による複雑性の分離
              </p>
              <span className="text-xs text-gray-400 mt-3 inline-block">
                Coming Soon
              </span>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200 opacity-60">
              <span className="text-xs text-gray-400 uppercase tracking-wider">
                ソフトウェア
              </span>
              <h3 className="font-bold text-gray-700 mt-1">REST API</h3>
              <p className="text-gray-500 text-sm mt-2">
                制約による統一インターフェース
              </p>
              <span className="text-xs text-gray-400 mt-3 inline-block">
                Coming Soon
              </span>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200 opacity-60">
              <span className="text-xs text-gray-400 uppercase tracking-wider">
                ソフトウェア
              </span>
              <h3 className="font-bold text-gray-700 mt-1">Lisp</h3>
              <p className="text-gray-500 text-sm mt-2">
                コードとデータの同一性
              </p>
              <span className="text-xs text-gray-400 mt-3 inline-block">
                Coming Soon
              </span>
            </div>

            {/* 建築・デザイン */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 opacity-60">
              <span className="text-xs text-gray-400 uppercase tracking-wider">
                建築
              </span>
              <h3 className="font-bold text-gray-700 mt-1">伊勢神宮</h3>
              <p className="text-gray-500 text-sm mt-2">式年遷宮による永続性</p>
              <span className="text-xs text-gray-400 mt-3 inline-block">
                Coming Soon
              </span>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200 opacity-60">
              <span className="text-xs text-gray-400 uppercase tracking-wider">
                デザイン
              </span>
              <h3 className="font-bold text-gray-700 mt-1">LEGO</h3>
              <p className="text-gray-500 text-sm mt-2">
                単純な結合規約による無限の表現
              </p>
              <span className="text-xs text-gray-400 mt-3 inline-block">
                Coming Soon
              </span>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200 opacity-60">
              <span className="text-xs text-gray-400 uppercase tracking-wider">
                デザイン
              </span>
              <h3 className="font-bold text-gray-700 mt-1">Bauhaus</h3>
              <p className="text-gray-500 text-sm mt-2">形態は機能に従う</p>
              <span className="text-xs text-gray-400 mt-3 inline-block">
                Coming Soon
              </span>
            </div>

            {/* 自然・科学 */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 opacity-60">
              <span className="text-xs text-gray-400 uppercase tracking-wider">
                生物学
              </span>
              <h3 className="font-bold text-gray-700 mt-1">免疫システム</h3>
              <p className="text-gray-500 text-sm mt-2">自己と非自己の識別</p>
              <span className="text-xs text-gray-400 mt-3 inline-block">
                Coming Soon
              </span>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200 opacity-60">
              <span className="text-xs text-gray-400 uppercase tracking-wider">
                物理学
              </span>
              <h3 className="font-bold text-gray-700 mt-1">相対性理論</h3>
              <p className="text-gray-500 text-sm mt-2">光速不変という制約</p>
              <span className="text-xs text-gray-400 mt-3 inline-block">
                Coming Soon
              </span>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200 opacity-60">
              <span className="text-xs text-gray-400 uppercase tracking-wider">
                生態学
              </span>
              <h3 className="font-bold text-gray-700 mt-1">サンゴ礁</h3>
              <p className="text-gray-500 text-sm mt-2">共生による創発</p>
              <span className="text-xs text-gray-400 mt-3 inline-block">
                Coming Soon
              </span>
            </div>

            {/* 組織・社会 */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 opacity-60">
              <span className="text-xs text-gray-400 uppercase tracking-wider">
                組織
              </span>
              <h3 className="font-bold text-gray-700 mt-1">トヨタ生産方式</h3>
              <p className="text-gray-500 text-sm mt-2">
                ムダの排除と継続的改善
              </p>
              <span className="text-xs text-gray-400 mt-3 inline-block">
                Coming Soon
              </span>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200 opacity-60">
              <span className="text-xs text-gray-400 uppercase tracking-wider">
                社会
              </span>
              <h3 className="font-bold text-gray-700 mt-1">憲法</h3>
              <p className="text-gray-500 text-sm mt-2">制約による権力の解放</p>
              <span className="text-xs text-gray-400 mt-3 inline-block">
                Coming Soon
              </span>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200 opacity-60">
              <span className="text-xs text-gray-400 uppercase tracking-wider">
                言語
              </span>
              <h3 className="font-bold text-gray-700 mt-1">俳句</h3>
              <p className="text-gray-500 text-sm mt-2">
                5-7-5の制約による無限の表現
              </p>
              <span className="text-xs text-gray-400 mt-3 inline-block">
                Coming Soon
              </span>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200 opacity-60">
              <span className="text-xs text-gray-400 uppercase tracking-wider">
                音楽
              </span>
              <h3 className="font-bold text-gray-700 mt-1">ジャズ</h3>
              <p className="text-gray-500 text-sm mt-2">
                コード進行という制約の上の即興
              </p>
              <span className="text-xs text-gray-400 mt-3 inline-block">
                Coming Soon
              </span>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200 opacity-60">
              <span className="text-xs text-gray-400 uppercase tracking-wider">
                音楽
              </span>
              <h3 className="font-bold text-gray-700 mt-1">楽譜</h3>
              <p className="text-gray-500 text-sm mt-2">
                音から記号への次元変換
              </p>
              <span className="text-xs text-gray-400 mt-3 inline-block">
                Coming Soon
              </span>
            </div>

            {/* インフラ・都市 */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 opacity-60">
              <span className="text-xs text-gray-400 uppercase tracking-wider">
                ソフトウェア
              </span>
              <h3 className="font-bold text-gray-700 mt-1">Kubernetes</h3>
              <p className="text-gray-500 text-sm mt-2">
                階層的抽象化によるオーケストレーション
              </p>
              <span className="text-xs text-gray-400 mt-3 inline-block">
                Coming Soon
              </span>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200 opacity-60">
              <span className="text-xs text-gray-400 uppercase tracking-wider">
                ソフトウェア
              </span>
              <h3 className="font-bold text-gray-700 mt-1">ZFS</h3>
              <p className="text-gray-500 text-sm mt-2">
                Copy-on-Writeによる圧縮と余白
              </p>
              <span className="text-xs text-gray-400 mt-3 inline-block">
                Coming Soon
              </span>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200 opacity-60">
              <span className="text-xs text-gray-400 uppercase tracking-wider">
                インフラ
              </span>
              <h3 className="font-bold text-gray-700 mt-1">インターネット</h3>
              <p className="text-gray-500 text-sm mt-2">
                End-to-End原則による創発
              </p>
              <span className="text-xs text-gray-400 mt-3 inline-block">
                Coming Soon
              </span>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200 opacity-60">
              <span className="text-xs text-gray-400 uppercase tracking-wider">
                都市設計
              </span>
              <h3 className="font-bold text-gray-700 mt-1">都市の路地</h3>
              <p className="text-gray-500 text-sm mt-2">
                計画されない空間からの創発
              </p>
              <span className="text-xs text-gray-400 mt-3 inline-block">
                Coming Soon
              </span>
            </div>

            {/* 文化 */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 opacity-60">
              <span className="text-xs text-gray-400 uppercase tracking-wider">
                文化
              </span>
              <h3 className="font-bold text-gray-700 mt-1">茶道/一期一会</h3>
              <p className="text-gray-500 text-sm mt-2">
                二度と同じ瞬間はない文脈の一回性
              </p>
              <span className="text-xs text-gray-400 mt-3 inline-block">
                Coming Soon
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Note */}
      <section className="container-base py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 font-montserrat">
            謙虚な位置づけ
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
              順序を逆にするとカオスになることを、実験で検証した。
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
