import type { Metadata } from "next";
import Image from "next/image";
import { HistoryTimeline, type TimelineEntry } from "@/components/about/history-timeline";
import { JPCtaSection } from "@/components/jp/cta-section";

export const metadata: Metadata = {
  title: "About",
  description:
    "Tally is a world-leading cloud-native software platform and ecosystem enabling decarbonisation, digitisation and decentralisation for energy retailers globally.",
};

const clientCommitments = [
  { icon: "tune", text: "堅牢で柔軟に構成できるソリューション" },
  { icon: "auto_awesome", text: "実務で効くAI機能" },
  { icon: "task_alt", text: "納期・予算どおりの導入" },
  { icon: "verified_user", text: "世界水準のサポート" },
  { icon: "route", text: "お客様のニーズを軸にした開発ロードマップ" },
];

const endUserCommitments = [
  { icon: "favorite", text: "卓越した顧客体験" },
  { icon: "how_to_reg", text: "契約・利用開始がしやすいこと" },
  { icon: "receipt_long", text: "正確な請求と多様な支払いオプション" },
  { icon: "support_agent", text: "知識に裏打ちされたカスタマーサポート" },
  { icon: "forum", text: "明確で有用なコミュニケーション" },
];

const staffCommitments = [
  { icon: "school", text: "学びと成長を後押しする、働きがいのある環境" },
  { icon: "public", text: "グローバルな拠点" },
  { icon: "workspace_premium", text: "実績のあるキャリアパス" },
  { icon: "emoji_events", text: "顧客期待を超えた成果への評価と報酬" },
  { icon: "payments", text: "競争力のある報酬と福利厚生" },
];

const jpHistoryTimeline: TimelineEntry[] = [
  {
    year: "2018",
    description:
      "オーストラリアの市場専門家によりTally ITが創設され、小売事業者がレガシープロバイダーに抱える課題に応える、顧客中心の請求およびデジタルソリューションのニーズに応えました。",
  },
  {
    year: "2020",
    description:
      "AgilityはZnalyticsおよびWebtools Energyを取得。Tallyの主導により、買収と統合が強みとなり、日本および米国での収益成長加速を牽引しています。",
  },
  {
    year: "2021",
    description:
      "AgilityとTallyの合併によりTally Groupが誕生。主要なエンタープライズ向けマス市場プラットフォーム移行の実績と市場専門性を示しています。",
  },
  {
    year: "2023",
    description:
      "Tally GroupはオーストラリアにおいてIFM Investorsおよびクリーンエネルギー金融公社（CEFC）から大規模な出資を受けました。",
  },
  {
    year: "2024",
    description:
      "TallyはAlinta Energyの請求プラットフォーム「CORE」を取得しました。一般家庭向けマス市場および産業向け（C&I）顧客を支援します。",
  },
  {
    year: "2026",
    description:
      "Tally Groupはスキッピングストーンを買収し、米国および日本を中心にアドバイザリー・コンサルティング機能を拡充しました。",
  },
];

const jpHistoryLead =
  "Tally Groupは2021年、クラウド請求ソリューションのリーディングプロバイダーであるAgility CISと、成長著しいエネルギー小売向けSaaSプロバイダーであるTallyの合併により誕生しました。グループには、いずれも2020年にAgility CISが買収したZnalytics（米国・日本）およびWebtools Energy（オーストラリア・ニュージーランド）が含まれます。2022年5月、当社はグローバルブランドとしてTally Groupへ刷新しました。2026年、当社はエネルギーコンサルティング会社スキッピングストーンを買収し、グローバル成長における重要な一歩としました。";

const japanLeaders = [
  {
    name: "ピーター ウェイガンド",
    role: "最高事業成長責任者（CGO）",
    bio: "タリーグループの最高事業成長責任者（CGO）として、米国および日本市場における事業拡大を統括。Tally参画以前には、エネルギー関連企業4社でCEOを歴任し、複数のエネルギースタートアップ企業で取締役を務めるなど、グローバルなエネルギー業界において豊富な経営経験を有する。現在は、タリーグループ傘下のエネルギーコンサルティング会社であるスキッピングストーンのCEOも兼任。コンサルティングサービスとタリーの先進的なソリューションを組み合わせたパートナーシップの構築を通じ、タリーのグローバル成長を推進している。",
    photo: "Peter Weigand.jpg",
  },
  {
    name: "山口 元久",
    role: "Sales Manager",
    bio: "タリー日本市場における事業開発およびGo-to-Market戦略を担当。ClickSoftware／Salesforce、IFS、Kraken Technologiesなどにおいて、20年以上にわたり電力・ガス業界および製造業向けエンタープライズソリューションの提案・新規事業開発に従事。フィールドサービス、アフターサービス、エネルギー業務DXに関する豊富な知見を有し、日本の電力小売市場におけるRetail 3.0への移行支援と、タリーの日本市場での成長を推進している。",
    photo: "Motohisa Yamaguchi.jpg",
  },
  {
    name: "TBD",
    role: "Presales & Product Manager",
    bio: "タリーグループ日本市場におけるプリセールスおよび製品戦略を担当。10年以上にわたり、電力・ガス自由化、法的分離、発送電分離関連ソリューション領域において、ビジネス開発からサービス提供まで幅広く従事。大手ソフトウェアベンダーで培った、多岐にわたるソリューションに関する豊富な知見を有する。直近では、大手小売事業者向けプロジェクトにおいて、オーストラリアおよびインドのチームと連携し、プロジェクトの立て直しから運用定着化までを推進。これまでの顧客支援経験を活かし、日本市場での展開を推進している。",
  },
  {
    name: "ミラーあつよ",
    role: "マーケティングディレクター",
    bio: "2026年にマーケティングディレクターとしてTallyに参画し、米国および日本市場をリード。以前はエネルギー系コンサルティング会社でマーケティング副社長（VP）を務め、Microsoftや東芝などフォーチュン・グローバル500企業での経験を有する。エネルギーおよびテクノロジー分野の専門性に加え、異文化・職能を横断するチームを率いる経験を持つ。",
    photo: "Atsuyo Miller.jpg",
  },
];

const leaders = [
  {
    name: "アンドリュー・ダンカン",
    role: "最高経営責任者（CEO）",
    bio: "タリーの創業者兼会長で、2022年のタリーグループ設立に伴う統合後、CEOに就任。30年以上にわたりオーストラリアのエネルギー業界に携わり、テクノロジーを活用し、小売エネルギー分野の変革をリードしてきた。サービスワークスを創業し、2011年にはコンピュータシェアへの売却を成功させるとともに、オーストラリアの自由化エネルギー市場における初のBPOサービスプロバイダーを確立。創業者および投資家として豊富な実績を有し、業界に対する深い知見と、業務効率化および顧客価値向上を重視した実行力のあるリーダーシップを強みとしている。",
    photo: "Andrew.jpg",
  },
  {
    name: "トラヴィス・リーマン",
    role: "最高執行責任者（COO）",
    bio: "2019年にAgility CISへトランスフォーメーション・ディレクターとして参画し、M&Aを含むバリュー・クリエーション・プログラムをリード。事業の成長と統合が進む中で、成長戦略の推進に貢献する。戦略立案、M&A、事業推進にわたる幅広い経験を持ち、複数のグローバル市場でテクノロジー企業の成長支援に携わる。Tally参画以前には、デロイト コンサルティング（サンフランシスコ）のM&A部門で約10年間従事。スタンフォード大学経営大学院にてMBAを取得。戦略を着実な実行につなげ、持続的な成長を支える、冷静かつ課題解決志向のリーダーシップを強みとしている。",
    photo: "Travis Lehman.jpg",
  },
  {
    name: "ジャネット・リー",
    role: "最高商務責任者（CCO）",
    bio: "テクノロジー分野において14年以上にわたり、事業戦略や成長戦略、企業価値向上に携わる。2025年にタリーグループの経営陣に参画。コンパス・エデュケーションおよびシーク・リミテッドでは上級管理職を歴任し、複数の市場をまたぐ事業環境の中で、グローバル展開、ポートフォリオマネジメント、M&Aを推進。PwCの監査部門からキャリアをスタートし、ビジネス全体を俯瞰する視点と、協調性を重視したリーダーシップスタイルを培う。事業の拡張性を高める仕組みづくりを通じてグローバル成長を支援し、顧客への持続的な価値提供に注力している。",
    photo: "Janet Le.jpg",
  },
  {
    name: "Eric Yilmaz",
    role: "最高技術責任者（CTO）",
    bio: "2023年に最高技術責任者として参画。SortedおよびEY Innovationの元CTO。戦略、デジタル、インフラ、オペレーション、プロダクト開発にわたり20年以上の経験を有する。",
    photo: "Eric Yilmaz.jpg",
  },
  {
    name: "Roger Barnes",
    role: "グローバル最高プロダクト責任者",
    bio: "Tally GroupのAU/NZ代表を経て、グローバル最高プロダクト責任者に就任。エネルギーおよび公益事業市場で15年以上にわたりデジタル・プロダクトイノベーションを牽引。BillcapのCEO、Red Energy・Lumo Energy・BTグループでのプログラムマネージャーなどを歴任。",
    photo: "Roger Barnes.jpg",
  },
  {
    name: "ティム・サカックス",
    role: "オーストラリア・ニュージーランド統括責任者（EGM／President）",
    bio: "2021年にグローバル最高プロダクト責任者としてタリーに参画し、その後、オーストラリア・ニュージーランド地域の統括責任者に就任。経営幹部および取締役としての豊富な経験を有し、プロダクトリーダーシップ、オペレーション、マーケット開発にわたる幅広い専門性を持つ。また、国際的なエネルギー市場に関する深い知見を有する。急速に変化する市場環境において、電力・ガスなどのユーティリティ事業者が直面する複雑な規制要件およびオペレーション要件に対応しながら、オーストラリア・ニュージーランド地域における事業成長とパフォーマンス向上を、実務的かつ安定したアプローチで推進している。",
    photo: "Tim Szakacs.jpg",
  },
];

export default function JPAboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-[120px] pb-[48px] lg:pt-[160px] lg:pb-[64px]" style={{
        background: "radial-gradient(ellipse 900px 500px at 15% 0%, rgba(0,210,162,0.06), transparent 60%), linear-gradient(to bottom, #F9F9FB 0%, #FFFFFF 100%)"
      }}>
        <div className="max-w-[1240px] mx-auto px-8">
          <h1 className="text-[44px] lg:text-[64px] font-light leading-[1.15] tracking-[-0.025em] text-navy">
            世界水準の顧客体験と顧客管理ソリューションを提供します
          </h1>

          <div className="mt-[20px] text-[19px] leading-[1.7] text-fg2 max-w-[60ch] flex flex-col gap-[16px]">
            <p className="m-0">
              Tally Groupは、世界各地で実績のあるソリューションにより、ユーティリティ、エネルギー小売事業者、エネルギー転換サービス企業に対し、エンドツーエンドの顧客体験および顧客管理ソリューションを提供します。
            </p>
            <p className="m-0">
              Tally+のポッドおよびモジュールは、お客様の要件に合わせて構成できます。標準のパッケージ製品としてもご利用いただけます。
            </p>
            <p className="m-0">
              さらに、当社のAIツールであるTally Glassは、ポッドおよびモジュールと連携し、Tally+の最適化とユーザーの生産性向上を支援します。
            </p>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <HistoryTimeline
        eyebrow="会社情報"
        heading="沿革"
        lead={jpHistoryLead}
        entries={jpHistoryTimeline}
        scrollLeftLabel="沿革を左にスクロール"
        scrollRightLabel="沿革を右にスクロール"
      />

      {/* Company overview (Japan entity) */}
      <section
        id="company-overview"
        className="scroll-mt-[88px] py-[96px] border-b border-stroke1"
        style={{
          background:
            "linear-gradient(to bottom, #FFFFFF 0%, #F9F9FB 100%)",
        }}
      >
        <div className="max-w-[1240px] mx-auto px-8">
          <div className="max-w-[820px] mb-[48px]">
            <div className="text-xs font-medium text-fg2 uppercase tracking-[0.1em] mb-[12px] inline-flex items-center gap-2">
              <span className="w-[18px] h-[1px] bg-turquoise inline-block" />
              会社情報
            </div>
            <h2 className="text-[30px] lg:text-[48px] font-light leading-[1.15] tracking-[-0.02em] text-navy">
              会社概要
            </h2>
            <p className="mt-[16px] text-[17px] leading-[1.7] text-fg2 m-0">
              日本法人の登記情報および基本情報の概要です。
            </p>
          </div>

          <div className="max-w-[820px]">
            <p className="text-[15px] leading-[1.75] text-fg2 m-0 mb-[24px]">
              グループ全体の紹介や沿革については会社情報をご覧ください。本ページでは日本における法人の概要をまとめています。
            </p>

            <div className="bg-white border border-stroke1 rounded-2xl overflow-hidden">
              <dl className="divide-y divide-stroke1 m-0">
                {[
                  { label: "商号", value: "（準備中）" },
                  { label: "所在地", value: "（準備中）" },
                  { label: "代表者", value: "（準備中）" },
                  { label: "設立", value: "（準備中）" },
                  {
                    label: "事業内容",
                    value:
                      "エネルギー業界向けの顧客管理・顧客体験ソリューションに関するソフトウェアの提供、関連コンサルティング等",
                  },
                ].map((row) => (
                  <div
                    key={row.label}
                    className="grid grid-cols-1 sm:grid-cols-[10rem_1fr]"
                  >
                    <dt className="bg-bg2 text-navy font-semibold text-[14px] px-[20px] py-[16px] leading-[1.55] sm:border-r sm:border-stroke1">
                      {row.label}
                    </dt>
                    <dd className="m-0 text-fg1 text-[15px] px-[20px] py-[16px] leading-[1.7]">
                      {row.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section id="leadership" className="scroll-mt-[88px] py-[96px] border-b border-stroke1" style={{
        background: "linear-gradient(to bottom, #F9F9FB 0%, #FFFFFF 100%)"
      }}>
        <div className="max-w-[1240px] mx-auto px-8">
          <div id="japan-leadership" className="scroll-mt-[88px]">
            <div className="mb-[40px] max-w-[720px]">
              <div className="text-xs font-medium text-fg2 uppercase tracking-[0.1em] mb-[12px] inline-flex items-center gap-2">
                <span className="w-[18px] h-[1px] bg-turquoise inline-block" />
                日本リーダーシップ
              </div>
              <h2 className="text-[30px] lg:text-[48px] font-light leading-[1.1] tracking-[-0.02em] text-navy">
                日本市場における事業成長とお客様支援を担う、日本チームのリーダーをご紹介します。
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
              {japanLeaders.map((leader) => (
                <LeaderCard
                  key={`${leader.name}-${leader.role}`}
                  leader={leader}
                  photoSrc={leader.photo ? `/us/${leader.photo}` : undefined}
                />
              ))}
            </div>
          </div>
          <div
            id="global-leadership"
            className="scroll-mt-[88px] mt-[80px] pt-[80px] border-t border-stroke1"
          >
          <div className="mb-[48px] max-w-[720px]">
            <div className="text-xs font-medium text-fg2 uppercase tracking-[0.1em] mb-[12px] inline-flex items-center gap-2">
              <span className="w-[18px] h-[1px] bg-turquoise inline-block" />
              グローバルリーダーシップ
            </div>
            <h2 className="text-[30px] lg:text-[48px] font-light leading-[1.1] tracking-[-0.02em] text-navy">
              長期的な価値創出にコミットするグローバル経営陣です。
            </h2>
            <p className="mt-[16px] text-sm leading-[1.55] text-fg2 m-0 max-w-[52ch]">
              Tally Groupの経営リーダーをご紹介します。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
            {leaders.map((leader) => (
              <article
                key={leader.name}
                className="bg-white border border-stroke1 rounded-xl p-[24px] flex flex-col gap-[16px] transition-all hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)]"
              >
                <div className="flex items-center gap-[14px]">
                  <div className="w-[88px] h-[88px] rounded-full overflow-hidden shrink-0 border border-stroke1 bg-bg2">
                    <Image
                      src={`/corporate/${leader.photo}`}
                      alt={`Portrait of ${leader.name}`}
                      width={88}
                      height={88}
                      className="w-full h-full object-cover object-[center_top]"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h3 className="m-0 mb-[2px] text-base font-semibold text-navy tracking-tight leading-tight">
                      {leader.name}
                    </h3>
                    <p className="m-0 text-sm text-fg2">
                      {leader.role}
                    </p>
                  </div>
                </div>
                <p className="m-0 text-sm leading-[1.55] text-fg2">
                  {leader.bio}
                </p>
              </article>
            ))}
          </div>
          </div>
        </div>
      </section>

      {/* Commitments */}
      <section id="mission-values" className="scroll-mt-[88px] py-[96px] border-b border-stroke1" style={{
        background: "linear-gradient(to bottom, #F9F9FB 0%, #FFFFFF 100%)"
      }}>
        <div className="max-w-[1240px] mx-auto px-8">
          <div className="mb-[48px] max-w-[820px]">
            <div className="text-xs font-medium text-fg2 uppercase tracking-[0.1em] mb-[12px] inline-flex items-center gap-2">
              <span className="w-[18px] h-[1px] bg-turquoise inline-block" />
              企業理念
            </div>
            <h2 className="text-[30px] lg:text-[48px] font-light leading-[1.1] tracking-[-0.02em] text-navy">
              お客様、お客様のエンドユーザー、そして従業員へのコミットメントを大切にしています。
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[40px]">
            <CommitmentColumn
              title="お客様へのコミットメント"
              accent="お客様"
              items={clientCommitments}
            />
            <CommitmentColumn
              title="お客様のエンドユーザーへのコミットメント"
              accent="お客様のエンドユーザー"
              items={endUserCommitments}
            />
            <CommitmentColumn
              title="社員へのコミットメント"
              accent="社員"
              items={staffCommitments}
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <JPCtaSection />
    </>
  );
}

type LeaderProfile = {
  name: string;
  role: string;
  bio: string;
  photo?: string;
};

function LeaderCard({
  leader,
  photoSrc,
}: {
  leader: LeaderProfile;
  photoSrc?: string;
}) {
  const photo = photoSrc ? (
    <div className="w-[88px] h-[88px] rounded-full overflow-hidden shrink-0 border border-stroke1 bg-bg2">
      <Image
        src={photoSrc}
        alt={`Portrait of ${leader.name}`}
        width={88}
        height={88}
        className="w-full h-full object-cover object-[center_top]"
        loading="lazy"
      />
    </div>
  ) : (
    <div
      className="w-[88px] h-[88px] rounded-full shrink-0 border border-stroke1 bg-bg2"
      aria-hidden
    />
  );

  return (
    <article className="bg-white border border-stroke1 rounded-xl p-[24px] flex flex-col gap-[16px] transition-all hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)]">
      <div className="flex items-center gap-[14px]">
        {photo}
        <div>
          <h3 className="m-0 mb-[2px] text-base font-semibold text-navy tracking-tight leading-tight">
            {leader.name}
          </h3>
          <p className="m-0 text-sm text-fg2">{leader.role}</p>
        </div>
      </div>
      <p className="m-0 text-sm leading-[1.55] text-fg2">{leader.bio}</p>
    </article>
  );
}

function CommitmentColumn({
  title,
  accent,
  items,
}: {
  title: string;
  accent?: string;
  items: { icon: string; text: string }[];
}) {
  const renderTitle = () => {
    if (!accent || !title.includes(accent)) {
      return title;
    }
    const [before, ...rest] = title.split(accent);
    const after = rest.join(accent);
    return (
      <>
        {before}
        <span className="text-turquoise">{accent}</span>
        {after}
      </>
    );
  };

  return (
    <div className="bg-bg2 rounded-xl p-[28px] h-full">
      <h3 className="text-lg font-semibold text-navy mb-[24px] leading-[1.4] tracking-[0.01em]">
        {renderTitle()}
      </h3>
      <ul className="flex flex-col gap-[16px]">
        {items.map((item) => (
          <li key={item.text} className="flex items-start gap-[12px]">
            <div className="w-9 h-9 shrink-0 rounded-[8px] bg-[#F0F9FF] border border-navy/[0.08] grid place-items-center text-navy">
              <span className="material-symbols-outlined text-[18px]">{item.icon}</span>
            </div>
            <span className="text-sm text-fg2 leading-[1.55] pt-[6px]">{item.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
