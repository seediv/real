# REAL 移行チェックリスト（GOOD → REAL 推奨手順）

ブランド名を GOOD から REAL に変更したあと、外部サービス側の設定を進めるための手順です。

---

## 1. GitHub

### オプション A: 既存リポジトリのリネーム（推奨）

1. **GitHub** → `seediv/good` リポジトリを開く
2. **Settings** → **General** → **Repository name**
3. `good` を `real` に変更 → **Rename**
4. ローカルの remote を更新（必要なら）:
   ```bash
   cd work/real
   git remote set-url origin https://github.com/seediv/real.git
   ```

### オプション B: 新規リポジトリを作成

1. **GitHub** → **New repository** → 名前: `real`、オーナー: `seediv`
2. ローカルで remote を追加して push:
   ```bash
   cd work/real
   git remote add origin https://github.com/seediv/real.git
   git push -u origin main
   ```

**確認**: コード内の参照はすべて `https://github.com/seediv/real` に更新済みです。

---

## 2. Vercel

### オプション A: 既存プロジェクトのリネーム

1. **Vercel Dashboard** → プロジェクト `good-seediv` を開く
2. **Settings** → **General** → **Project Name**
3. `good-seediv` を `real-seediv` に変更して保存

### オプション B: 新規プロジェクトとしてデプロイ

1. **Vercel Dashboard** → **Add New** → **Project**
2. **Import** で `seediv/real` を選択（GitHub リネーム or 新規作成後）
3. プロジェクト名: `real-seediv`
4. **Deploy**

**確認**: `mirror/data/projects.yaml` および生成ファイルの vercel URL は `https://real-seediv.vercel.app` に更新済みです。

---

## 3. DNS（seehub.org）

`real.seehub.org` が REAL サイトを指すようにする。

1. **DNS 管理**（seehub.org を管理しているプロバイダ）にログイン
2. **CNAME** または **A レコード** を追加・更新:
   - **名前**: `real`（または `real.seehub.org`  depending on provider）
   - **値**: Vercel のドメイン（例: `cname.vercel-dns.com`）または Vercel が案内する値
3. Vercel 側で **Domains** に `real.seehub.org` を追加し、案内に従って検証

**旧ドメイン**: `good.seehub.org` はリダイレクト設定するか、レコードを削除して `real.seehub.org` に統一。

---

## 4. 完了確認

- [ ] GitHub: `https://github.com/seediv/real` でアクセスできる
- [ ] Vercel: `https://real-seediv.vercel.app` でデプロイが成功している
- [ ] DNS: `https://real.seehub.org` で REAL サイトが開く
- [ ] seehub サイトのサービスリンクが REAL / real.seehub.org を指している（更新済み）
- [ ] mirror の TIP ページ・プロジェクト一覧が REAL を指している（更新済み）

---

## 参照

- ブランド方針: GOOD → REAL（単独で覚えられる名前、本物の実装を世界へ）
- ローカル・mirror・seehub のコード・ドキュメント上の GOOD→REAL 変更は実施済み
