/**
 * GOOD Case Detail Page
 *
 * 美しい実装の詳細分析
 * 各現物からTIP核心4原則を逆算
 */

import Link from "next/link";
import { notFound } from "next/navigation";

interface CaseData {
  title: string;
  titleEn: string;
  domain: string;
  principles: {
    id: string;
    name: string;
    evidence: string;
  }[];
  implementation: {
    label: string;
    items: string[];
  };
  intermediateRepresentation: {
    label: string;
    items: string[];
  };
  intent: string;
  connection: {
    label: string;
    items: string[];
  };
  insight: string;
}

const casesData: Record<string, CaseData> = {
  unix: {
    title: "Unix哲学",
    titleEn: "Unix Philosophy",
    domain: "ソフトウェア",
    principles: [
      {
        id: "C1",
        name: "制約による解放",
        evidence:
          "「一つのことをうまくやれ（Do one thing well）」という制約が、無限の組み合わせを可能にした。",
      },
      {
        id: "C2",
        name: "結合規約の単純さ",
        evidence:
          "テキストストリームという単純なインターフェースが、全てのプログラムを繋ぐ共通語となった。",
      },
    ],
    implementation: {
      label: "実装（現物）",
      items: [
        "パイプ（|）で繋ぐ小さなコマンド群",
        "全てがファイル（/dev, /proc含む）",
        "テキストストリームが共通インターフェース",
        "一つのことをうまくやるプログラム",
      ],
    },
    intermediateRepresentation: {
      label: "中間表現（原則）",
      items: [
        "一つのことをうまくやれ（Do one thing well）",
        "組み合わせ可能にせよ（Composability）",
        "テキストを共通語にせよ（Text as universal interface）",
        "早く作って見せろ（Prototyping）",
      ],
    },
    intent: "複雑な問題を、単純な部品の組み合わせで解きたい",
    connection: {
      label: "意図→実装を繋いだもの",
      items: [
        "分解の粒度: 「一つのこと」という制約",
        "結合の規約: テキストストリームという契約",
        "検証の容易さ: 小さいから単体で試せる",
        "創発の許容: 組み合わせで想定外の用途が生まれる",
      ],
    },
    insight:
      "50年以上生き残った設計。制約（一つのこと）と規約（テキスト）の単純さが、予測不可能な創発（パイプラインの多様な使い方）を許容している。",
  },
  git: {
    title: "Git",
    titleEn: "Git Version Control",
    domain: "ソフトウェア",
    principles: [
      {
        id: "C1",
        name: "制約による解放",
        evidence:
          "不変データ（Immutability）という制約が、信頼性と単純さを生んだ。一度記録したら変わらない。",
      },
      {
        id: "C3",
        name: "構造に検証を埋め込む",
        evidence:
          "SHA-1ハッシュによる内容アドレス格納。内容が同じなら同一と判定され、整合性が自動的に保証される。",
      },
    ],
    implementation: {
      label: "実装（現物）",
      items: [
        "内容アドレス格納（SHA-1ハッシュ）",
        "スナップショット、差分ではない",
        "ブランチはポインタに過ぎない",
        "分散、中央サーバー不要",
      ],
    },
    intermediateRepresentation: {
      label: "中間表現（原則）",
      items: [
        "不変データ（Immutability）",
        "内容で識別（Content-addressable）",
        "単純なデータ構造（blob, tree, commit）",
        "複雑さは組み合わせで生む",
      ],
    },
    intent: "変更履歴を、確実に追跡・統合したい",
    connection: {
      label: "意図→実装を繋いだもの",
      items: [
        "不変性: 一度記録したら変わらない → 信頼できる",
        "単純な構造: 3種のオブジェクトだけ → 理解できる",
        "ハッシュ: 内容が同じなら同一 → 重複排除、整合性保証",
        "組み合わせ: 単純な操作の組み合わせで複雑なワークフロー",
      ],
    },
    insight:
      "Linusが「バージョン管理の問題」ではなく「データ整合性の問題」として設計した。検証がハッシュ構造に埋め込まれているため、後からのテストが不要になった。",
  },
  katsura: {
    title: "桂離宮",
    titleEn: "Katsura Imperial Villa",
    domain: "建築",
    principles: [
      {
        id: "C1",
        name: "制約による解放",
        evidence:
          "引き算の設計。装飾を排し、必要なものだけを残すことで、無限の奥行きを生んだ。",
      },
      {
        id: "C4",
        name: "創発の余地を残す",
        evidence:
          "月の動き、季節の変化、訪問者の歩み方によって、無限の体験が創発する。設計者が想定しなかった美しさが生まれる。",
      },
    ],
    implementation: {
      label: "実装（現物）",
      items: [
        "雁行配置（斜めにずらした建物群）",
        "月見台",
        "見え隠れする庭園",
        "素材の簡素さ（白木、土壁）",
      ],
    },
    intermediateRepresentation: {
      label: "中間表現（原則）",
      items: [
        "引き算（必要なものだけ）",
        "見え隠れ（全てを見せない）",
        "自然との対話（借景、月の動き）",
        "動きの中で体験（回遊式）",
      ],
    },
    intent: "無限を有限の中に感じさせたい",
    connection: {
      label: "意図→実装を繋いだもの",
      items: [
        "制約の活用: 狭い敷地 → 見え隠れで奥行きを生む",
        "時間の設計: 歩く順序、月の位置、季節",
        "余白の設計: 「ない」ことで想像を誘発",
        "素材の正直さ: 装飾で隠さない → 経年で美しくなる",
      ],
    },
    insight:
      "ブルーノ・タウトが「泣きたくなるほど美しい」と評した。完成された設計ではなく、時間と訪問者によって完成し続ける設計。有限の物理空間が無限の体験を生むのは、創発を許容する余白があるから。",
  },
  dna: {
    title: "DNA複製機構",
    titleEn: "DNA Replication",
    domain: "生物学",
    principles: [
      {
        id: "C2",
        name: "結合規約の単純さ",
        evidence:
          "相補的塩基対（A-T, G-C）という極めて単純な規約。4文字のアルファベットで全生命の情報を記述。",
      },
      {
        id: "C3",
        name: "構造に検証を埋め込む",
        evidence:
          "二重らせん構造自体がバックアップ。片方が壊れても、相補鎖から復元可能。検証が構造に組み込まれている。",
      },
    ],
    implementation: {
      label: "実装（現物）",
      items: [
        "二重らせん",
        "相補的塩基対（A-T, G-C）",
        "半保存的複製",
        "エラー訂正機構",
      ],
    },
    intermediateRepresentation: {
      label: "中間表現（原則）",
      items: [
        "冗長性（二重らせん、両方に情報）",
        "相補性（一方から他方が決まる）",
        "局所的操作（一箇所ずつ複製）",
        "誤り検出と修正",
      ],
    },
    intent: "情報を確実に複製し、たまに変異を許したい（進化が見つけた解）",
    connection: {
      label: "意図→実装を繋いだもの",
      items: [
        "冗長性: 片方が壊れても復元可能",
        "相補性: 検証が構造に埋め込まれている",
        "局所性: 全体を一度に扱わない → スケール可能",
        "変異許容: 完璧でないことが進化を可能に",
      ],
    },
    insight:
      "設計者がいないにもかかわらず、40億年間機能し続けている。「完璧な複製」ではなく「十分に正確な複製と適度な変異」というバランス。検証を構造に埋め込むことで、外部監視なしに品質を維持している。",
  },
  "category-theory": {
    title: "圏論",
    titleEn: "Category Theory",
    domain: "数学",
    principles: [
      {
        id: "C1",
        name: "制約による解放",
        evidence:
          "対象の内部構造を見ないという制約。この抽象化により、分野を超えた普遍的なパターンが見えるようになった。",
      },
      {
        id: "C2",
        name: "結合規約の単純さ",
        evidence:
          "射の合成（composition）と恒等射（identity）という2つの規約だけで、あらゆる構造を記述できる。",
      },
    ],
    implementation: {
      label: "実装（現物）",
      items: [
        "対象（object）と射（morphism）",
        "合成（composition）",
        "恒等射（identity）",
        "可換図式",
      ],
    },
    intermediateRepresentation: {
      label: "中間表現（原則）",
      items: [
        "関係性で定義（内部構造ではなく）",
        "合成可能性が本質",
        "普遍性（最も一般的な特徴付け）",
        "図式で考える",
      ],
    },
    intent: "構造の本質を、構造を捨てて捉えたい",
    connection: {
      label: "意図→実装を繋いだもの",
      items: [
        "抽象化: 対象の中身を見ない → 構造だけを扱う",
        "関係性優先: 「何であるか」より「何と繋がるか」",
        "普遍的構成: 同じパターンが異なる分野に現れる",
        "言語の提供: 異分野を繋ぐ共通語",
      ],
    },
    insight:
      "「数学の数学」と呼ばれる。具体的な対象を捨てることで、逆に全ての対象に適用可能な言語になった。プログラミング（関数型言語）、物理学（量子力学）、言語学など、異分野に同じパターンを発見する道具となっている。",
  },
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function CaseDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const caseData = casesData[slug];

  if (!caseData) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="container-base py-12 md:py-16 border-b border-gray-200">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/case"
            className="text-gray-500 hover:text-gray-700 mb-4 inline-block text-sm"
          >
            ← Cases
          </Link>
          <div className="flex items-start justify-between">
            <div>
              <span className="text-sm text-gray-500 uppercase tracking-wider">
                {caseData.domain}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 font-montserrat">
                {caseData.title}
              </h1>
              <p className="text-xl text-gray-500 font-montserrat">
                {caseData.titleEn}
              </p>
            </div>
            <div className="flex gap-2">
              {caseData.principles.map((p) => (
                <span
                  key={p.id}
                  className="px-3 py-1 bg-gray-900 text-white text-sm font-bold rounded"
                >
                  {p.id}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Principles Found */}
      <section className="container-base py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 font-montserrat">
            発見された原則
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {caseData.principles.map((principle) => (
              <div
                key={principle.id}
                className="bg-gray-50 rounded-xl p-6 border border-gray-200"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl font-bold text-gray-900 font-montserrat">
                    {principle.id}
                  </span>
                  <span className="text-lg font-medium text-gray-700">
                    {principle.name}
                  </span>
                </div>
                <p className="text-gray-600">{principle.evidence}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reverse Engineering Structure */}
      <section className="container-base py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 font-montserrat">
            逆算の構造
          </h2>

          {/* Implementation */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">
              {caseData.implementation.label}
            </h3>
            <ul className="bg-white rounded-xl p-6 border border-gray-200 space-y-2">
              {caseData.implementation.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700">
                  <span className="text-gray-400">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center justify-center text-gray-400 text-2xl mb-8">
            ↓
          </div>

          {/* Intermediate Representation */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">
              {caseData.intermediateRepresentation.label}
            </h3>
            <ul className="bg-white rounded-xl p-6 border border-gray-200 space-y-2">
              {caseData.intermediateRepresentation.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700">
                  <span className="text-gray-400 font-mono">{i + 1}.</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center justify-center text-gray-400 text-2xl mb-8">
            ↓
          </div>

          {/* Intent */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">
              意図（逆算）
            </h3>
            <div className="bg-gray-900 text-white rounded-xl p-6">
              <p className="text-xl font-medium">「{caseData.intent}」</p>
            </div>
          </div>
        </div>
      </section>

      {/* Connection */}
      <section className="container-base py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 font-montserrat">
            {caseData.connection.label}
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {caseData.connection.items.map((item, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-lg p-4 border border-gray-200"
              >
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insight */}
      <section className="container-base py-12 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 font-montserrat">洞察</h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            {caseData.insight}
          </p>
        </div>
      </section>

      {/* Navigation */}
      <section className="container-base py-12">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link
            href="/case"
            className="text-gray-500 hover:text-gray-700 text-sm"
          >
            ← Back to Cases
          </Link>
          <Link
            href="/"
            className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            GOOD Project
          </Link>
        </div>
      </section>
    </main>
  );
}
