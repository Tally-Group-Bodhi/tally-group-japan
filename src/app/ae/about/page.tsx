import type { Metadata } from "next";
import Image from "next/image";
import { MarketingLink } from "@/components/marketing/marketing-link";
import { HistoryTimeline, type TimelineEntry } from "@/components/about/history-timeline";

export const metadata: Metadata = {
  title: "عن الشركة",
  description:
    "Tally منصة برمجيات سحابية رائدة عالميًا ومنظومة متكاملة تمكّن إزالة الكربون والرقمنة واللامركزية لشركات تجزئة الطاقة حول العالم.",
};

const storyCards = [
  {
    icon: "rocket_launch",
    title: "ثورة في حلول الطاقة",
    description:
      "في Tally Group، نوجّه طاقتنا لبناء أحدث تقنيات قطاع المرافق على مستوى العالم. نحن نعيد تشكيل كيفية تشغيل الطاقة في المنازل والأعمال من خلال إعادة ابتكار طريقة عمل شركات تجزئة الطاقة.",
  },
  {
    icon: "cloud",
    title: "مزوّد SaaS سحابي النشأة",
    description:
      "بوصفنا مزوّدًا لخدمات البرمجيات السحابية النشأة بخبرة واسعة وعملاء حول العالم، نحن في موقع متميز لمساعدة الشركات على الازدهار في سوق سريع التغيّر.",
  },
  {
    icon: "public",
    title: "تمكين العملاء عالميًا",
    description:
      "نقدّم مجموعة شاملة من الحلول المبتكرة للفوترة والتجربة الرقمية والتحليلات، مصمّمة لتلبية المتطلبات المتنوّعة للأسواق والأنظمة التنظيمية، وتمكين العملاء وخفض تكلفة الخدمة.",
  },
  {
    icon: "lightbulb",
    title: "الابتكار في مشهد متغيّر",
    description:
      "نحن ملتزمون بالابتكار في سوق تنافسي وسط تغيّر المناخ وتحوّل الشبكات وظهور التقنيات الجديدة، رغم القيود الناجمة عن التقنيات القديمة وضعف الخدمة.",
  },
  {
    icon: "handshake",
    title: "توحيد حلول الطاقة حول العالم",
    description:
      "تأسّست Tally Group في عام 2021، إثر اندماج Agility CIS الرائدة في حلول الفوترة السحابية مع Tally سريعة النمو في برمجيات SaaS لتجزئة الطاقة.",
  },
  {
    icon: "language",
    title: "حضور وأثر عالميان",
    description:
      "نمزج بين النظرة العالمية والتركيز المحلي، ويعمل فريقنا من مواقع في أستراليا ونيوزيلندا واليابان والهند ودبي والولايات المتحدة.",
  },
];

const utilityCommitments = [
  { icon: "bar_chart", text: "فوترة دقيقة وقابلة للتوسّع" },
  { icon: "trending_down", text: "خفض تكلفة الخدمة" },
  { icon: "lightbulb", text: "ابتكار سريع وفعّال من حيث التكلفة" },
  { icon: "verified_user", text: "شريك تنفيذ موثوق" },
  { icon: "group", text: "تقليل الانسحاب وتعزيز التفاعل" },
  { icon: "lock", text: "أفضل الممارسات في البيانات والتقنية" },
];

const peopleCommitments = [
  { icon: "bolt", text: "العمل في طليعة تقنيات قطاع المرافق" },
  { icon: "public", text: "مواقع عالمية" },
  { icon: "workspace_premium", text: "مسارات مهنية مثبتة" },
  { icon: "menu_book", text: "تعلّم وتطوير مصمّمان حسب الاحتياج" },
  { icon: "work", text: "عمل مرن" },
  { icon: "payments", text: "رواتب تنافسية" },
];

const consumerCommitments = [
  { icon: "favorite", text: "تجربة مخصّصة" },
  { icon: "chat", text: "تواصل واضح ومباشر" },
  { icon: "smartphone", text: "دعم متعدّد القنوات" },
  { icon: "target", text: "استراتيجية رقمية أولًا" },
  { icon: "apartment", text: "تبسيط المشاركة في السوق" },
  { icon: "location_on", text: "بناء الثقة مع مزوّدي المرافق" },
];

const aboutStats = [
  { num: "110", unit: "+", label: "عميل حول العالم" },
  { num: "450", unit: "+", label: "موظف على مستوى العالم" },
  { num: "4", unit: " مليون+", label: "نقطة عدّاد" },
  { num: "200", unit: "+", label: "تقييم بخمس نجوم" },
];

const supportingTestimonials = [
  {
    name: "Anika Phan",
    role: "رئيسة عمليات العملاء، Alinta Energy",
    initials: "AP",
    quote:
      "قلّصت Glass Vision متوسّط زمن المعالجة لدينا بـ 38 ثانية خلال الشهر الأول. تتحدّث المنصّة لغة قطاع الطاقة بشكل افتراضي — أرقام تعريف العدّادات، والشبكات المدمجة، وعلامات أجهزة دعم الحياة.",
  },
  {
    name: "James Wong",
    role: "رئيس قسم التكنولوجيا، Energy Locals",
    initials: "JW",
    quote:
      "نقلنا 400 ألف حساب إلى Tally خلال ثمانية أشهر. الفريق متجاوب وعملي، ويفهم فعلاً سوق الكهرباء الوطني.",
  },
  {
    name: "Priya Sharma",
    role: "المدير العام لعمليات العملاء، Momentum Energy",
    initials: "PS",
    quote:
      "حوّلت Tally الفوترة من صداع دائم إلى مرفق هادئ. لم نثق بأي مورد آخر ببيانات عملائنا بهذا القدر.",
  },
];

const arHistoryEntries: TimelineEntry[] = [
  {
    year: "2018",
    title: "تأسيس Tally IT",
    description:
      "أسّس خبراء السوق الأستراليون شركة Tally IT لسدّ الفجوة في حلول الفوترة والتجربة الرقمية التي تضع العميل في المركز، ومعالجة المشكلات المتراكمة من المزوّدين التقليديين.",
  },
  {
    year: "2020",
    title: "التوسّع العالمي",
    description:
      "استحوذت Agility على Znalytics وWebtools، وتحت قيادة Tally أصبحت عمليات الاندماج والاستحواذ والتكامل ركيزة أساسية لدفع النموّ في اليابان والولايات المتحدة.",
  },
  {
    year: "2021",
    title: "تأسيس Tally Group",
    description:
      "أفرز اندماج Agility وTally شركة Tally Group، مع خبرة موثّقة في نقل منصّات المؤسسات الكبرى للأسواق الجماعية.",
  },
  {
    year: "2023",
    title: "استثمار استراتيجي",
    description:
      "حصلت Tally Group على دعم كبير من IFM Investors وهيئة تمويل الطاقة النظيفة (CEFC) في أستراليا.",
  },
  {
    year: "2024",
    title: "منصّة Alinta CORE",
    description:
      "استحوذت Tally على منصّة الفوترة CORE التابعة لشركة Alinta Energy، والتي تخدم عملاء السوق الجماعية والعملاء التجاريين والصناعيين.",
  },
  {
    year: "2026",
    title: "الاستحواذ على Skipping Stone",
    description:
      "استحوذت Tally Group على Skipping Stone، موسّعةً قدراتها الاستشارية في الولايات المتحدة واليابان.",
  },
];

const leaders = [
  {
    name: "Andrew Duncan",
    role: "الرئيس التنفيذي",
    bio: "أندرو هو مؤسّس ورئيس مجلس إدارة Tally، وتولّى منصب الرئيس التنفيذي عام 2022 إثر الاندماج الذي شكّل Tally Group. بخبرة تتجاوز 30 عامًا في سوق الطاقة الأسترالية، أدّى دورًا محوريًا في قيادة التحوّل التقني عبر قطاع تجزئة الطاقة. أسّس Serviceworks وقاد بيعها بنجاح لـ Computershare في عام 2011، مؤسّسًا أوّل مزوّد خدمات مشتركة لسوق الطاقة المحرّر في أستراليا. مؤسّس ومستثمر معروف، يجلب معه فهمًا عميقًا للقطاع ونهجًا عمليًا يركّز على التنفيذ وتبسيط العمليات وتحسين تجربة العميل.",
    photo: "Andrew.jpg",
  },
  {
    name: "Travis Lehman",
    role: "رئيس العمليات",
    bio: "انضمّ ترافيس إلى Agility CIS عام 2019 مديرًا للتحوّل، وقاد برنامج خلق القيمة بما في ذلك عمليات الاندماج والاستحواذ خلال مرحلة محورية من النموّ والتكامل. بخبرة تشمل الاستراتيجية والصفقات والتنفيذ، يتخصّص في توسيع شركات التكنولوجيا في الأسواق العالمية المعقّدة. قبل Tally، قضى نحو عقد من الزمن مع Deloitte Consulting في قسم الاندماج والاستحواذ في سان فرانسيسكو، وحاصل على ماجستير في إدارة الأعمال من كلية ستانفورد للدراسات العليا. يقدّم نهجًا هادئًا يركّز على الحلول، يترجم الاستراتيجية إلى تنفيذ منضبط لدفع النموّ المستدام.",
    photo: "Travis Lehman.jpg",
  },
  {
    name: "Janet Le",
    role: "الرئيسة التجارية",
    bio: "تجلب جانيت أكثر من 14 عامًا من الخبرة في قيادة الاستراتيجية التجارية والنموّ وخلق القيمة عبر قطاع التكنولوجيا، وانضمّت لفريق الإدارة التنفيذي في Tally عام 2025. شغلت أدوارًا قيادية في Compass Education وSEEK Limited، حيث قادت التوسّع العالمي وإدارة المحفظة وأنشطة الاندماج والاستحواذ في بيئات متعدّدة الأسواق ومعقّدة. بدأت مسيرتها في قسم التدقيق بـ PwC، وتجلب رؤية تجارية قوية وأسلوب قيادة تعاوني يُعلي شأن الإنسان. تركّز على بناء قدرات تجارية قابلة للتوسّع لدعم النموّ العالمي وتحقيق قيمة دائمة للعملاء.",
    photo: "Janet Le.jpg",
  },
  {
    name: "Eric Yilmaz",
    role: "رئيس قسم التكنولوجيا",
    bio: "انضمّ إريك إلى Tally عام 2023، حاملًا أكثر من 20 عامًا من الخبرة عبر استراتيجية التكنولوجيا والمنصّات الرقمية والبنية التحتية والعمليات وتطوير المنتجات. قبل Tally، شغل منصب رئيس التكنولوجيا في Sorted وأدوارًا قيادية في الابتكار والتكنولوجيا لدى EY، عاملًا عند تقاطع التقنيات الناشئة وحجم المؤسسات. يقود وظيفة التكنولوجيا العالمية في Tally بتركيز على الهندسة الحديثة وبنية الحوسبة السحابية والذكاء الاصطناعي التطبيقي، مع التركيز على الجودة والأمان والسرعة في تحقيق القيمة. مهتمّ بعمق ببناء فرق عالية الأداء ومنصّات جاهزة للمستقبل.",
    photo: "Eric Yilmaz.jpg",
  },
  {
    name: "Roger Barnes",
    role: "رئيس قسم المنتجات",
    bio: "بخبرة تتجاوز 15 عامًا في قطاع الطاقة والمرافق، يشغل روجر منصب رئيس قسم المنتجات العالمي في Tally. شغل سابقًا منصب رئيس منطقة أستراليا ونيوزيلندا، حيث قاد نموًّا إقليميًا قويًا وتطوّرًا في المنتجات، ويتخصّص اليوم في دفع الابتكار عند تقاطع التكنولوجيا والمنتج وتغيّر السوق. شغل عدّة مناصب تنفيذية، منها الرئيس التنفيذي لـ Billcap والمدير الإداري لـ TallyIT وSleevesUp، إلى جانب أدوار قيادية متنوّعة في تقديم المنتجات في قطاعات الطاقة والاتصالات والأمن السيبراني. يصوغ رؤية وخارطة طريق منتجات Tally العالمية لتقديم عمليات أذكى وتجربة عميل أفضل.",
    photo: "Roger Barnes.jpg",
  },
  {
    name: "Timothy Szakacs",
    role: "المدير العام التنفيذي ورئيس منطقة أستراليا ونيوزيلندا",
    bio: "انضمّ تيم إلى Tally عام 2021 رئيسًا عالميًا للمنتجات قبل تعيينه مديرًا عامًا تنفيذيًا ورئيسًا لمنطقة أستراليا ونيوزيلندا. مسؤول تنفيذي وعضو مجلس إدارة ذو خبرة واسعة، يجلب خبرة عميقة في قيادة المنتجات والعمليات وتطوير السوق، إلى جانب تعرّض قوي لأسواق الطاقة الدولية. يقود الأداء والنموّ في منطقة أستراليا ونيوزيلندا بنهج عملي وثابت، مع ضمان تلبية حلول Tally للمتطلبات التنظيمية والتشغيلية المعقّدة لشركات المرافق في الأسواق سريعة التطوّر.",
    photo: "Tim Szakacs.jpg",
  },
];

const arHistoryLead =
  "تأسّست Tally Group في عام 2021 إثر اندماج Agility CIS، المزوّد الرائد لحلول الفوترة السحابية، مع Tally، مزوّد برمجيات SaaS لتجزئة الطاقة. وفي عام 2026، استحوذنا على شركة الاستشارات في قطاع الطاقة Skipping Stone، خطوةً مفصلية في توسّعنا العالمي عبر الولايات المتحدة واليابان.";

export default function AEAboutPage() {
  return (
    <div lang="ar" dir="rtl" className="font-ar contents">
      {/* Hero */}
      <section
        className="relative overflow-hidden pt-[120px] pb-[48px] lg:pt-[160px] lg:pb-[64px]"
        style={{
          background:
            "radial-gradient(ellipse 900px 500px at 15% 0%, rgba(0,210,162,0.06), transparent 60%), linear-gradient(to bottom, #F9F9FB 0%, #FFFFFF 100%)",
        }}
      >
        <div className="max-w-[1240px] mx-auto px-8">
          <h1 className="text-[44px] lg:text-[64px] font-light leading-[1.2] tracking-[-0.02em] text-navy">
            حلول تقنية ذكية لقطاع المرافق.
          </h1>

          <p className="mt-[20px] text-[19px] leading-[1.8] text-fg2 max-w-[60ch]">
            منصّة برمجيات سحابية رائدة عالميًا ومنظومة متكاملة تمكّن إزالة الكربون والرقمنة واللامركزية لشركات تجزئة الطاقة حول العالم.
          </p>
        </div>
      </section>

      {/* Who we are */}
      <section id="who-we-are" className="scroll-mt-[88px] py-[96px] border-b border-stroke1">
        <div className="max-w-[1240px] mx-auto px-8">
          <div className="mb-[48px] max-w-[720px]">
            <div className="text-xs font-medium text-fg2 uppercase tracking-[0.1em] mb-[12px] inline-flex items-center gap-2">
              <span className="w-[18px] h-[1px] bg-turquoise inline-block" />
              من نحن
            </div>
            <h2 className="text-[30px] lg:text-[60px] font-light leading-[1.2] tracking-[-0.02em] text-navy">
              نُنشّط الابتكار في تقنيات المرافق وعمليات تجزئة الطاقة.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
            {storyCards.map((card) => (
              <div key={card.title} className="bg-bg2 rounded-xl p-[28px] flex flex-col gap-[14px]">
                <div className="w-10 h-10 rounded-[10px] bg-[#F0F9FF] border border-navy/[0.08] grid place-items-center text-navy">
                  <span className="material-symbols-outlined text-[22px]">{card.icon}</span>
                </div>
                <h3 className="text-xl font-semibold leading-[1.4] tracking-[-0.01em] text-fg1">
                  {card.title}
                </h3>
                <p className="text-sm leading-[1.8] text-fg2 m-0">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <HistoryTimeline
        eyebrow="تاريخنا"
        heading="رحلة من الابتكار والنموّ."
        lead={arHistoryLead}
        entries={arHistoryEntries}
        scrollLeftLabel="تمرير الجدول الزمني إلى اليسار"
        scrollRightLabel="تمرير الجدول الزمني إلى اليمين"
      />

      {/* Metrics */}
      <section className="py-[96px] border-b border-stroke1 bg-bg2">
        <div className="max-w-[1240px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-[48px] lg:gap-[72px] items-center">
          <div>
            <div className="text-xs font-medium text-fg2 uppercase tracking-[0.1em] mb-[12px] inline-flex items-center gap-2">
              <span className="w-[18px] h-[1px] bg-turquoise inline-block" />
              عمق وخبرة لا مثيل لهما
            </div>
            <h2 className="text-[30px] lg:text-[60px] font-light leading-[1.2] tracking-[-0.02em] text-navy">
              خبرة في قطاع الطاقة الجديدة تفوق أي مزوّد آخر.
            </h2>

            <div className="grid grid-cols-2 gap-x-[48px] gap-y-[40px] mt-[56px]">
              {aboutStats.map((stat) => (
                <div key={stat.label}>
                  <div
                    className="text-[48px] lg:text-[56px] font-normal tracking-[-0.03em] leading-none tabular-nums text-navy"
                    dir="ltr"
                  >
                    {stat.num}
                    <span className="text-turquoise">{stat.unit}</span>
                  </div>
                  <div className="mt-[14px] text-[14px] leading-[1.7] text-fg2">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative aspect-[640/520] rounded-2xl overflow-hidden">
            <Image
              src="/about-metrics.png"
              alt="البنية التحتية للطاقة"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section
        id="leadership"
        className="scroll-mt-[88px] py-[96px] border-b border-stroke1"
        style={{
          background: "linear-gradient(to bottom, #F9F9FB 0%, #FFFFFF 100%)",
        }}
      >
        <div className="max-w-[1240px] mx-auto px-8">
          <div id="global-leadership" className="scroll-mt-[88px] mb-[48px] max-w-[720px]">
            <div className="text-xs font-medium text-fg2 uppercase tracking-[0.1em] mb-[12px] inline-flex items-center gap-2">
              <span className="w-[18px] h-[1px] bg-turquoise inline-block" />
              القيادة العالمية
            </div>
            <h2 className="text-[30px] lg:text-[60px] font-light leading-[1.2] tracking-[-0.02em] text-navy">
              قيادة Tally Group.
            </h2>
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
                      alt={`صورة لـ ${leader.name}`}
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
                    <p className="m-0 text-sm text-fg2">{leader.role}</p>
                  </div>
                </div>
                <p className="m-0 text-sm leading-[1.8] text-fg2">{leader.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-[96px] border-b border-stroke1">
        <div className="max-w-[1240px] mx-auto px-8">
          <div className="max-w-[720px] mb-[48px]">
            <div className="text-xs font-medium text-fg2 uppercase tracking-[0.1em] mb-[12px] inline-flex items-center gap-2">
              <span className="w-[18px] h-[1px] bg-turquoise inline-block" />
              ماذا يقول شركاؤنا
            </div>
            <h2 className="text-[30px] lg:text-[60px] font-light leading-[1.2] tracking-[-0.02em] text-navy">
              يثق بنا من يهمّ رأيهم.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-[20px] items-stretch">
            <div className="bg-bg2 rounded-xl p-[32px] lg:p-[40px] flex flex-col gap-[24px]">
              <blockquote className="m-0 p-0 text-[20px] lg:text-[26px] leading-[1.5] text-fg1 tracking-[-0.005em] font-medium">
                <span className="text-turquoise text-[48px] font-bold leading-none block mb-3">&ldquo;</span>
                يجعلون المعقّد بسيطًا، وساعدونا على تحقيق نتائج أعمال أفضل.
              </blockquote>
              <div className="flex items-center gap-[14px] mt-auto">
                <div
                  className="w-11 h-11 rounded-full text-white text-sm font-semibold grid place-items-center"
                  style={{
                    background: "linear-gradient(135deg, #2C365D, #1E2840)",
                  }}
                >
                  DH
                </div>
                <div>
                  <div className="text-sm font-semibold text-fg1">David Hayes</div>
                  <div className="text-[13px] text-fg2">الرئيس التنفيذي، Next Business Energy</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-[20px]">
              {supportingTestimonials.map((t) => (
                <div
                  key={t.name}
                  className="bg-bg2 rounded-xl p-[24px] lg:p-[28px] flex flex-col gap-[16px] flex-1"
                >
                  <blockquote className="m-0 p-0 text-[15px] leading-[1.7] text-fg1 font-medium">
                    <span className="text-turquoise text-[28px] font-bold leading-none block mb-1">&ldquo;</span>
                    {t.quote}
                  </blockquote>
                  <div className="flex items-center gap-[12px] mt-auto">
                    <div
                      className="w-9 h-9 rounded-full grid place-items-center text-white text-[11px] font-semibold shrink-0"
                      style={{
                        background: "linear-gradient(135deg, #2C365D, #1E2840)",
                      }}
                    >
                      {t.initials}
                    </div>
                    <div>
                      <div className="text-[13px] font-semibold text-fg1">{t.name}</div>
                      <div className="text-[12px] text-fg2">{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Commitments */}
      <section
        id="mission-values"
        className="scroll-mt-[88px] py-[96px] border-b border-stroke1"
        style={{
          background: "linear-gradient(to bottom, #F9F9FB 0%, #FFFFFF 100%)",
        }}
      >
        <div className="max-w-[1240px] mx-auto px-8">
          <div className="mb-[48px] max-w-[720px]">
            <div className="text-xs font-medium text-fg2 uppercase tracking-[0.1em] mb-[12px] inline-flex items-center gap-2">
              <span className="w-[18px] h-[1px] bg-turquoise inline-block" />
              التزاماتنا
            </div>
            <h2 className="text-[30px] lg:text-[60px] font-light leading-[1.2] tracking-[-0.02em] text-navy">
              ما نقف من أجله.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[40px]">
            <CommitmentColumn title="التزامنا تجاه شركات المرافق" items={utilityCommitments} />
            <CommitmentColumn title="التزامنا تجاه موظفينا" items={peopleCommitments} />
            <CommitmentColumn title="التزامنا تجاه المستهلكين" items={consumerCommitments} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-[96px] bg-navy text-white">
        <div
          className="absolute -left-[100px] -bottom-[100px] w-[500px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(0,210,162,0.18), transparent 60%)",
          }}
        />
        <div className="relative max-w-[1240px] mx-auto px-8 text-center">
          <h2 className="text-[30px] lg:text-[60px] font-light leading-[1.2] tracking-[-0.02em] text-white">
            اكتشف كيف يمكن لـ Tally Group مساعدة أعمالك.
          </h2>
          <p className="mt-[16px] text-lg text-white/75 max-w-[50ch] mx-auto leading-[1.8]">
            احجز عرضًا تجريبيًا، أو اطرح سؤالًا، أو فقط ألقِ التحية.
          </p>
          <div className="mt-[32px]">
            <MarketingLink
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-[12px] rounded-lg text-sm font-semibold bg-turquoise text-navy border border-turquoise hover:bg-turquoise-hover hover:border-turquoise-hover transition-all shadow-sm"
            >
              اطلب عرضًا تجريبيًا{" "}
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </MarketingLink>
          </div>
        </div>
      </section>
    </div>
  );
}

function CommitmentColumn({
  title,
  items,
}: {
  title: string;
  items: { icon: string; text: string }[];
}) {
  return (
    <div className="bg-bg2 rounded-xl p-[28px]">
      <h3 className="text-lg font-semibold text-navy mb-[24px]">{title}</h3>
      <ul className="flex flex-col gap-[16px]">
        {items.map((item) => (
          <li key={item.text} className="flex items-center gap-[12px]">
            <div className="w-9 h-9 shrink-0 rounded-[8px] bg-[#F0F9FF] border border-navy/[0.08] grid place-items-center text-navy">
              <span className="material-symbols-outlined text-[18px]">{item.icon}</span>
            </div>
            <span className="text-sm text-fg2 leading-[1.6]">{item.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
