/**
 * TIP Documentation Page
 *
 * Translation Integrity Principles
 * 意図を実装に翻訳する時、品質を保つための15原則
 */

import Link from "next/link";

export default function TipPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="container-base py-16 md:py-24 bg-gray-900 text-white">
        <div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4 font-montserrat">
            TIP
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 mb-4">
            Translation Integrity Principles
          </p>
          <p className="text-xl text-gray-400">
            意図を実装に「翻訳」する時、品質を保つための15原則
          </p>
        </div>
      </section>

      {/* Why TIP */}
      <section className="container-base py-16">
        <div>
          <h2 className="text-2xl md:text-3xl font-black tracking-tighter text-gray-900 mb-6 font-montserrat">
            なぜ必要か
          </h2>
          <div className="bg-gray-50 rounded-none p-8 border border-gray-200">
            <pre className="text-gray-700 font-mono text-sm md:text-base">
              {`意図 ──────→ 実装
       ↑
    ここで起きること：
    ・意図が失われる
    ・品質が劣化する
    ・乖離が生じる
    ・でも創発も起きる`}
            </pre>
            <p className="mt-6 text-gray-600">
              TIPは<strong>「失われる」を防ぎ</strong>、
              <strong>「創発」を促す</strong>。
            </p>
          </div>
        </div>
      </section>

      {/* Core 4 Principles */}
      <section className="container-base py-16 bg-gray-50">
        <div>
          <h2 className="text-2xl md:text-3xl font-black tracking-tighter text-gray-900 mb-2 font-montserrat">
            核心4原則
          </h2>
          <p className="text-gray-600 mb-8">C1→C2→C3→C4（この順序で適用）</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-none p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl font-bold text-gray-900 font-montserrat">
                  C1
                </span>
                <span className="text-lg font-medium text-gray-700">
                  制約による解放
                </span>
              </div>
              <p className="text-gray-600">何を禁止すれば可能性が広がるか？</p>
            </div>
            <div className="bg-white rounded-none p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl font-bold text-gray-900 font-montserrat">
                  C2
                </span>
                <span className="text-lg font-medium text-gray-700">
                  結合規約の単純さ
                </span>
              </div>
              <p className="text-gray-600">最小の約束事は何か？</p>
            </div>
            <div className="bg-white rounded-none p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl font-bold text-gray-900 font-montserrat">
                  C3
                </span>
                <span className="text-lg font-medium text-gray-700">
                  構造に検証を埋め込む
                </span>
              </div>
              <p className="text-gray-600">どうすれば間違いに気づけるか？</p>
            </div>
            <div className="bg-white rounded-none p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl font-bold text-gray-900 font-montserrat">
                  C4
                </span>
                <span className="text-lg font-medium text-gray-700">
                  創発の余地を残す
                </span>
              </div>
              <p className="text-gray-600">想定外を許容するか？</p>
            </div>
          </div>
        </div>
      </section>

      {/* Auxiliary 11 Principles */}
      <section className="container-base py-16">
        <div>
          <h2 className="text-2xl md:text-3xl font-black tracking-tighter text-gray-900 mb-2 font-montserrat">
            補助11原則
          </h2>
          <p className="text-gray-600 mb-8">フェーズ別に適用</p>
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-none p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-3">
                A 形式化（意図→仕様）
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>A1 本質保存 — 翻訳で失われないものを特定する</li>
                <li>A2 圧縮 — 冗長性を排除し、本質を凝縮する</li>
                <li>A3 先行固定 — 変わらない部分を先に確定する</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-none p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-3">
                B 構造化（仕様→設計）
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>B1 階層 — 適切な抽象度の階層を作る</li>
                <li>B2 次元変換 — 概念を実装可能な形に変換する</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-none p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-3">
                I 実装（設計→動作）
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>I1 小反復 — 小さく作って確認する</li>
                <li>I2 意図発見 — 実装を通じて意図を発見する</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-none p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-3">
                E 進化（実装→改善）
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>E1 透明可逆 — 変更が追跡可能で、戻せる</li>
                <li>E2 段階習熟 — 段階的に理解を深める</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-none p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-3">
                X 横断（全フェーズ）
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>X1 文脈一回性 — 同じ文脈は一度だけ定義する</li>
                <li>X2 関係性符号化 — 関係性を構造に埋め込む</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Meta Principles */}
      <section className="container-base py-16 bg-gray-900 text-white">
        <div>
          <h2 className="text-2xl md:text-3xl font-black tracking-tighter mb-8 font-montserrat">
            3つのメタ原則
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-800 rounded-none p-6">
              <h3 className="font-bold text-white mb-2">M1 意図の優位性</h3>
              <p className="text-gray-400">ルールより目標を優先</p>
            </div>
            <div className="bg-gray-800 rounded-none p-6">
              <h3 className="font-bold text-white mb-2">M2 次元的効率性</h3>
              <p className="text-gray-400">本質を失わずに圧縮・変換</p>
            </div>
            <div className="bg-gray-800 rounded-none p-6">
              <h3 className="font-bold text-white mb-2">
                M3 関係性エンコーディング
              </h3>
              <p className="text-gray-400">構造はコミュニケーションに従う</p>
            </div>
          </div>
        </div>
      </section>

      {/* Origin */}
      <section className="container-base py-16">
        <div>
          <h2 className="text-2xl md:text-3xl font-black tracking-tighter text-gray-900 mb-6 font-montserrat">
            出典
          </h2>
          <div className="bg-gray-50 rounded-none p-8 border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-4">美しい現物から逆算</h3>
            <div className="flex flex-wrap gap-3 mb-6">
              <Link
                href="/case/unix"
                className="px-4 py-2 bg-white border border-gray-200 rounded-full hover:border-gray-400 transition-colors"
              >
                Unix哲学
              </Link>
              <Link
                href="/case/git"
                className="px-4 py-2 bg-white border border-gray-200 rounded-full hover:border-gray-400 transition-colors"
              >
                Git
              </Link>
              <Link
                href="/case/katsura"
                className="px-4 py-2 bg-white border border-gray-200 rounded-full hover:border-gray-400 transition-colors"
              >
                桂離宮
              </Link>
              <Link
                href="/case/dna"
                className="px-4 py-2 bg-white border border-gray-200 rounded-full hover:border-gray-400 transition-colors"
              >
                DNA複製
              </Link>
              <Link
                href="/case/category-theory"
                className="px-4 py-2 bg-white border border-gray-200 rounded-full hover:border-gray-400 transition-colors"
              >
                圏論
              </Link>
            </div>
            <p className="text-gray-600 text-sm">
              これらの「美しい実装」から4原則を逆算して発見し、
              順序（C1→C2→C3→C4）の有効性を複数のプロジェクトで確認した。
            </p>
          </div>
        </div>
      </section>

      {/* Docs Links */}
      <section className="container-base py-16 bg-gray-50">
        <div>
          <h2 className="text-2xl md:text-3xl font-black tracking-tighter text-gray-900 mb-8 font-montserrat">
            ドキュメント
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <a
              href="https://github.com/seediv/real/blob/main/docs/TIP-quickstart.md"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white rounded-none p-6 border border-gray-200 hover:border-gray-400 hover:shadow-lg transition-all"
            >
              <h3 className="font-bold text-gray-900 mb-2">Quick Start</h3>
              <p className="text-gray-600 text-sm">
                今すぐ試したい方へ。5分で始めるTIP。
              </p>
            </a>
            <a
              href="https://github.com/seediv/real/blob/main/docs/TIP-reference.md"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white rounded-none p-6 border border-gray-200 hover:border-gray-400 hover:shadow-lg transition-all"
            >
              <h3 className="font-bold text-gray-900 mb-2">Reference</h3>
              <p className="text-gray-600 text-sm">
                深掘りしたい方へ。全15原則の詳細。
              </p>
            </a>
            <a
              href="https://github.com/seediv/real/blob/main/docs/TIP-cheatsheet.md"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white rounded-none p-6 border border-gray-200 hover:border-gray-400 hover:shadow-lg transition-all"
            >
              <h3 className="font-bold text-gray-900 mb-2">Cheatsheet</h3>
              <p className="text-gray-600 text-sm">
                手元に置きたい方へ。1ページ要約。
              </p>
            </a>
            <div className="block bg-gray-100 rounded-none p-6 border border-gray-200 opacity-60">
              <h3 className="font-bold text-gray-700 mb-2">Summary</h3>
              <p className="text-gray-500 text-sm">30秒で理解する概要</p>
              <span className="text-xs text-gray-400 mt-2 inline-block">
                Coming Soon
              </span>
            </div>
            <div className="block bg-gray-100 rounded-none p-6 border border-gray-200 opacity-60">
              <h3 className="font-bold text-gray-700 mb-2">Patterns Catalog</h3>
              <p className="text-gray-500 text-sm">適用パターン集</p>
              <span className="text-xs text-gray-400 mt-2 inline-block">
                Coming Soon
              </span>
            </div>
            <div className="block bg-gray-100 rounded-none p-6 border border-gray-200 opacity-60">
              <h3 className="font-bold text-gray-700 mb-2">
                Integration Guide
              </h3>
              <p className="text-gray-500 text-sm">プロジェクト統合ガイド</p>
              <span className="text-xs text-gray-400 mt-2 inline-block">
                Coming Soon
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="container-base py-16">
        <div>
          <h2 className="text-2xl md:text-3xl font-black tracking-tighter text-gray-900 mb-8 font-montserrat">
            ツール
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-none p-6 border border-gray-200 opacity-60">
              <h3 className="font-bold text-gray-700 mb-2">TIP Template</h3>
              <p className="text-gray-500 text-sm">
                Cursor / Claude Code 用テンプレート
              </p>
              <span className="text-xs text-gray-400 mt-2 inline-block">
                Coming Soon
              </span>
            </div>
            <div className="bg-gray-50 rounded-none p-6 border border-gray-200 opacity-60">
              <h3 className="font-bold text-gray-700 mb-2">TIP GPT</h3>
              <p className="text-gray-500 text-sm">TIPを適用するカスタムGPT</p>
              <span className="text-xs text-gray-400 mt-2 inline-block">
                Coming Soon
              </span>
            </div>
            <div className="bg-gray-50 rounded-none p-6 border border-gray-200 opacity-60">
              <h3 className="font-bold text-gray-700 mb-2">TIP Linter</h3>
              <p className="text-gray-500 text-sm">
                AIへの指示をTIP観点でチェック
              </p>
              <span className="text-xs text-gray-400 mt-2 inline-block">
                Coming Soon
              </span>
            </div>
            <div className="bg-gray-50 rounded-none p-6 border border-gray-200 opacity-60">
              <h3 className="font-bold text-gray-700 mb-2">TIP IDE Plugin</h3>
              <p className="text-gray-500 text-sm">VSCode / Cursor 拡張機能</p>
              <span className="text-xs text-gray-400 mt-2 inline-block">
                Coming Soon
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Community */}
      <section className="container-base py-16 bg-gray-50">
        <div>
          <h2 className="text-2xl md:text-3xl font-black tracking-tighter text-gray-900 mb-8 font-montserrat">
            教育・コミュニティ
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-none p-6 border border-gray-200 opacity-60">
              <h3 className="font-bold text-gray-700 mb-2">TIP認定研修</h3>
              <p className="text-gray-500 text-sm">
                Practitioner / Master / Trainer
              </p>
              <span className="text-xs text-gray-400 mt-2 inline-block">
                Coming Soon
              </span>
            </div>
            <div className="bg-white rounded-none p-6 border border-gray-200 opacity-60">
              <h3 className="font-bold text-gray-700 mb-2">TIP Meetup</h3>
              <p className="text-gray-500 text-sm">月1回のオンライン勉強会</p>
              <span className="text-xs text-gray-400 mt-2 inline-block">
                Coming Soon
              </span>
            </div>
            <div className="bg-white rounded-none p-6 border border-gray-200 opacity-60">
              <h3 className="font-bold text-gray-700 mb-2">TIP Conference</h3>
              <p className="text-gray-500 text-sm">年1回のカンファレンス</p>
              <span className="text-xs text-gray-400 mt-2 inline-block">
                Coming Soon
              </span>
            </div>
            <div className="bg-white rounded-none p-6 border border-gray-200 opacity-60">
              <h3 className="font-bold text-gray-700 mb-2">TIP協会</h3>
              <p className="text-gray-500 text-sm">認定・研究・ブランド管理</p>
              <span className="text-xs text-gray-400 mt-2 inline-block">
                Coming Soon
              </span>
            </div>
            <div className="bg-white rounded-none p-6 border border-gray-200 opacity-60">
              <h3 className="font-bold text-gray-700 mb-2">論文・書籍</h3>
              <p className="text-gray-500 text-sm">学術論文・一般書籍</p>
              <span className="text-xs text-gray-400 mt-2 inline-block">
                Coming Soon
              </span>
            </div>
            <div className="bg-white rounded-none p-6 border border-gray-200 opacity-60">
              <h3 className="font-bold text-gray-700 mb-2">TIP診断</h3>
              <p className="text-gray-500 text-sm">組織のTIP成熟度診断</p>
              <span className="text-xs text-gray-400 mt-2 inline-block">
                Coming Soon
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="container-base py-12">
        <div className="flex justify-end">
          <Link
            href="/case"
            className="px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors"
          >
            事例を見る →
          </Link>
        </div>
      </section>
    </main>
  );
}
