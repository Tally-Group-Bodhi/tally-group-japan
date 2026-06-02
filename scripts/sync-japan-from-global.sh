#!/usr/bin/env bash
# Sync Japan marketing routes from the global TallyWebsite repo into this Japan-only repo.
# Usage: ./scripts/sync-japan-from-global.sh /path/to/TallyWebsite

set -euo pipefail

GLOBAL_REPO="${1:-}"
MARKETING_DIR="src/app/(marketing)"

if [[ -z "$GLOBAL_REPO" || ! -d "$GLOBAL_REPO/src/app/jp" ]]; then
  echo "Usage: $0 /path/to/TallyWebsite"
  echo "  Global repo must contain src/app/jp/"
  exit 1
fi

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

mkdir -p "$MARKETING_DIR"
rsync -a --delete \
  --exclude 'services-old/' \
  "$GLOBAL_REPO/src/app/jp/" \
  "$MARKETING_DIR/"

# Japan-only layout: root basePath, no duplicate metadata in marketing layout
cat > "$MARKETING_DIR/layout.tsx" << 'EOF'
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { JPLayoutCta } from "@/components/jp/jp-layout-cta";
import { MarketingRegionProvider } from "@/contexts/marketing-region";

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <MarketingRegionProvider basePath="">
      <div lang="ja" className="font-jp contents">
        <Header />
        <main className="flex-1">{children}</main>
        <JPLayoutCta />
        <Footer />
      </div>
    </MarketingRegionProvider>
  );
}
EOF

rsync -a "$GLOBAL_REPO/src/components/jp/" "src/components/jp/"
rsync -a "$GLOBAL_REPO/src/components/home/jp/" "src/components/home/jp/"

echo "Synced from $GLOBAL_REPO"
echo "Review header.tsx, footer.tsx, and root layout if shared components changed."
