"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const pillars: Array<{
  title: string;
  body: string;
  image: string;
  alt: string;
}> = [
  {
    title: "خفّض تكلفة الخدمة",
    body: "تُحسّن Tally+ الكفاءة التشغيلية عبر أتمتة العمليات المعقّدة، وتقليل الضغط على مراكز الاتصال من خلال أدوات الخدمة الذاتية الحدسية والاتصالات الاستباقية، وتزويد المشغّلين برؤى آنية لحلّ المشكلات بسرعة أكبر.",
    image:
      "https://images.unsplash.com/photo-1758526214018-a746f9554b8b?auto=format&fit=crop&w=1600&q=90",
    alt: "امرأة شابة تبتسم وهي تدفع فاتورة من هاتفها باستخدام بطاقتها الائتمانية",
  },
  {
    title: "اقتنص الفرص القادمة",
    body: "تُمكّن Tally+ شركات المرافق من الابتكار بسرعة أكبر عبر طرح منتجات وخدمات جديدة في السوق، والتكيّف مع نماذج الطاقة الناشئة، وفتح مصادر إيرادات جديدة على منصّة مرنة وجاهزة للمستقبل.",
    image: "/home/capture-opportunities.png",
    alt: "رجل أعمال يعمل بتركيز على حاسوب محمول في مكتب حديث",
  },
  {
    title: "مكّن فريقك",
    body: "تقدّم Tally+ أدوات أذكى للعملاء والمشغّلين على حدّ سواء، تتيح الخدمة الذاتية، وحلولًا أسرع، وتفاعلات أكثر سلاسة وتخصيصًا. من إدارة الحسابات إلى تبنّي خدمات الطاقة الجديدة، اخلق تجربة أفضل عند كل نقطة تواصل.",
    image: "/shutterstock_2748143915.jpg",
    alt: "موظفة مركز اتصال سعيدة ترتدي سمّاعة أمام جهاز الكمبيوتر",
  },
];

export function ValuePillarsSectionAE() {
  return (
    <section className="px-4 sm:px-6 pt-2 pb-[24px] sm:pb-[32px]">
      <div className="relative overflow-hidden rounded-2xl bg-bg2 py-[72px] lg:py-[112px] px-6 sm:px-10 lg:px-16">
        <div className="max-w-[1280px] mx-auto space-y-[72px] lg:space-y-[120px]">
          {pillars.map((pillar, i) => {
            const imageOnLeft = i % 2 === 0;
            return (
              <motion.div
                key={pillar.title}
                className="grid grid-cols-1 lg:grid-cols-2 gap-[32px] lg:gap-[80px] items-center"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div
                  className={`relative aspect-square w-full rounded-2xl overflow-hidden bg-bg3 ${
                    imageOnLeft ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <Image
                    src={pillar.image}
                    alt={pillar.alt}
                    fill
                    quality={95}
                    sizes="(min-width: 1024px) 560px, (min-width: 640px) 90vw, 100vw"
                    className="object-cover"
                    unoptimized={pillar.image.startsWith("/")}
                  />
                </div>
                <div
                  className={`${imageOnLeft ? "lg:order-2" : "lg:order-1"}`}
                >
                  <h3 className="text-[28px] sm:text-[32px] lg:text-[44px] font-light leading-[1.3] tracking-[-0.02em] text-navy mb-[20px] lg:mb-[24px]">
                    {pillar.title}
                  </h3>
                  <p className="text-[16px] sm:text-[17px] lg:text-[18px] leading-[1.85] text-fg2 max-w-[52ch]">
                    {pillar.body}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
