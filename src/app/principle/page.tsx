/**
 * REAL Principles Index Page
 *
 * 4原則の横断的比較への入口
 */

import Link from "next/link";

type PrincipleId = "c1" | "c2" | "c3" | "c4";

interface PrincipleCard {
  id: PrincipleId;
  label: string;
  name: string;
  description: string;
  featuredCount: number;
  totalCount: number;
}

const principles: PrincipleCard[] = [
  {
    id: "c1",
    label: "C1",
    name: "制約による解放",
    description: "意図的に選択肢を減らすことで、本質的な自由を得る",
    featuredCount: 13,
    totalCount: 20,
  },
  {
    id: "c2",
    label: "C2",
    name: "結合規約の単純さ",
    description:
      "部品同士の接続ルールを単純にすることで、全体の組み合わせ可能性を最大化する",
    featuredCount: 9,
    totalCount: 20,
  },
  {
    id: "c3",
    label: "C3",
    name: "構造に検証を埋め込む",
    description: "正しさを人の注意力ではなく、構造そのものに保証させる",
    featuredCount: 8,
    totalCount: 20,
  },
  {
    id: "c4",
    label: "C4",
    name: "創発の余地を残す",
    description: "設計者が予測しなかった価値が生まれる余地を意図的に残す",
    featuredCount: 10,
    totalCount: 20,
  },
];

export default function PrinciplesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="container-base py-16 md:py-24">
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4 font-montserrat">
            4原則 × 20事例
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            同じ原則が、異なる領域でどう現れるか。横断的に比較することで、原則の本質が浮かび上がる。
          </p>
        </div>
      </section>

      {/* Principle Cards */}
      <section className="container-base py-8 pb-16">
        <div>
          <div className="grid md:grid-cols-2 gap-6">
            {principles.map((p) => (
              <Link
                key={p.id}
                href={`/principle/${p.id}`}
                className="group block bg-white border border-gray-200 rounded-none p-6 hover:border-gray-400 hover:shadow-lg transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="text-3xl font-black text-gray-900 font-montserrat">
                    {p.label}
                  </span>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <span className="px-2 py-0.5 bg-gray-900 text-white text-xs font-bold rounded">
                      Featured {p.featuredCount}
                    </span>
                    <span className="px-2 py-0.5 border border-gray-300 text-gray-400 text-xs font-bold rounded">
                      Total {p.totalCount}
                    </span>
                  </div>
                </div>
                <h2 className="text-xl font-black tracking-tighter text-gray-900 mb-2">
                  {p.name}
                </h2>
                <p className="text-gray-600 text-sm">{p.description}</p>
                <div className="mt-4 text-sm text-gray-500 group-hover:text-gray-700">
                  横断比較を見る →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="container-base py-12 border-t border-gray-200">
        <div className="flex justify-between">
          <Link
            href="/case"
            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-full hover:border-gray-400 transition-colors"
          >
            ← Cases
          </Link>
          <Link
            href="/tip"
            className="px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors"
          >
            TIP Docs →
          </Link>
        </div>
      </section>
    </main>
  );
}
