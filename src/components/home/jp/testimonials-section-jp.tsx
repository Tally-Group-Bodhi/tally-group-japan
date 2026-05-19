"use client";

import { motion } from "framer-motion";

export function TestimonialsSectionJP() {
  return (
    <section className="py-[96px] lg:py-[120px]">
      <div className="max-w-[1600px] mx-auto px-8">
        <motion.div
          className="max-w-[720px] mx-auto text-center mb-[56px]"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[28px] sm:text-[36px] lg:text-[60px] font-light leading-[1.3] tracking-[-0.02em] text-navy">
            エネルギー小売事業者・運営者・コンタクトセンターから最も信頼されるプラットフォーム
          </h2>
        </motion.div>

        <motion.div
          className="max-w-[860px] mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className="bg-white border border-stroke1 rounded-2xl p-[40px] lg:p-[56px] shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
            <div className="text-xs font-semibold text-fg2 uppercase tracking-[0.1em] mb-[24px]">
              お客様の声
            </div>

            <div className="mb-[28px]">
              <div className="text-[20px] lg:text-[24px] font-bold text-navy leading-[1.4] tracking-[-0.01em]">
                Alinta Energy
              </div>
              <div className="text-[15px] text-fg2 mt-[4px]">
                オーストラリア大手エネルギー小売事業者
              </div>
            </div>

            <blockquote className="m-0 p-0 text-[17px] lg:text-[19px] leading-[1.8] text-fg1 tracking-[-0.005em]">
              Glass Visionの導入により、最初の1か月で平均処理時間が38秒短縮されました。エージェントは請求書に関する質問に答えるために4つのタブを切り替える必要がなくなりました。NMI、組み込みネットワーク、ライフサポートフラグなど、エネルギー業界の専門用語にも標準で対応しています。CRMにビジネスを説明するためにコンサルタントに料金を払う必要がなくなりました。
            </blockquote>

            <div className="flex items-center gap-[14px] mt-[32px]">
              <div
                className="w-12 h-12 rounded-full text-white text-sm font-semibold grid place-items-center"
                style={{
                  background: "linear-gradient(135deg, #2C365D, #1E2840)",
                }}
              >
                AP
              </div>
              <div>
                <div className="text-[15px] font-semibold text-fg1">
                  Anika Phan
                </div>
                <div className="text-[13px] text-fg2">
                  カスタマーオペレーション責任者
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
