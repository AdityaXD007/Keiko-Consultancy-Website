// lib/home/testimonials.ts

export interface Testimonial {
  /** Stable key for React lists — never use array index. */
  slug: string;
  name: string;
  location: string;
  year: string;
  credential: string;
  image: string;
  reviewEn: string;
  reviewJa: string;
}

export const TESTIMONIALS: readonly Testimonial[] = [
  {
    slug: 'madan-nepali',
    name: 'Madan Nepali (マダン・ネパール)',
    location: 'Takamatsu, Kagawa Prefecture',
    year: 'April 2014 — Japan',
    credential: 'Anabuki Gakuen / Anabuki Vocational School Graduate',
    image: '/Testimonials/Madan Nepali.webp',
    reviewJa:
      '日本留学を目指す皆様へ\n' +
      '私は、ネパール・ポカラのチプレドゥンガにある Yokohama Consultancy のサポートを受け、2014年4月に日本へ留学しました。\n' +
      '渡日前には約1年間、日本語をはじめ、日本のルールやマナー、文化、生活習慣について学びました。この研修のおかげで、日本での生活や学習をスムーズにスタートすることができました。\n' +
      '来日後は、香川県高松市の穴吹学園に入学し、日本語や日本社会について学びました。その後、2016年に穴吹専門学校ビジネス学科へ進学し、ホテル業界に関する専門知識や接客サービスについて学ぶ機会をいただきました。\n' +
      '現在はホテル業界で客室管理業務に携わっており、日本での留学経験や学校で学んだ知識を活かしながら日々仕事に取り組んでいます。\n' +
      '振り返ると、Yokohama Consultancyでの事前研修は、私の日本留学、そしてその後のキャリアの基礎となりました。日本への留学を目指している方や、将来日本で活躍したいと考えている方に、心からおすすめしたい教育機関です。\n' +
      '正しい指導と強い意志、そして努力があれば、夢や目標は必ず実現できると信じています。\n' +
      'これから日本留学を目指す皆様のご成功とご活躍を心よりお祈り申し上げます。',
    reviewEn:
      'To everyone aiming to study in Japan,\n' +
      'With the support of Yokohama Consultancy in Chipledhunga, Pokhara, Nepal, I went to Japan to study in April 2014.\n' +
      'Before going to Japan, I spent about one year learning Japanese, as well as Japanese rules, manners, culture, and lifestyle. Thanks to this training, I was able to smoothly start my life and studies in Japan.\n' +
      'After arriving in Japan, I enrolled at Anabuki Gakuen in Takamatsu, Kagawa Prefecture, where I studied Japanese and Japanese society. Then, in 2016, I advanced to the Business Department at Anabuki Vocational School, where I had the opportunity to learn specialized knowledge about the hotel industry and hospitality services.\n' +
      'Currently, I am involved in room management in the hotel industry, applying the experience from studying in Japan and the knowledge I gained at school in my daily work.\n' +
      'Looking back, the pre-departure training at Yokohama Consultancy became the foundation of my study abroad experience in Japan and my subsequent career. I wholeheartedly recommend this institution to anyone aiming to study in Japan or wanting to build a future career in Japan.\n' +
      'I believe that with proper guidance, strong determination, and effort, dreams and goals can always be achieved.\n' +
      'I sincerely wish success and prosperity to everyone aiming to study in Japan.',
  },
  {
    slug: 'bimal-gurung',
    name: 'Bimal Gurung (ビマル・グルン)',
    location: 'Fukuoka, Japan',
    year: 'April 2018 — Japan',
    credential:
      'Kurume Seminar Language School / Japanese University of Economics Graduate',
    image: '/Testimonials/Bimal Gurung.webp',
    reviewJa:
      '日本への旅 🇯🇵\n' +
      '私は幼い頃から、留学生として海外で学ぶことを夢見ていました。+2課程を修了した後、さらに勉強を続けるために日本へ来ることを決意しました。\n' +
      '日本へ来る前、私はポカラにある信頼できる教育機関の一つ、横浜日本語学習学院に入学しました。横浜を通して、多くのサポートを受けました。福岡でも有数の日本語学校として久留米ゼミナール日本語学校を紹介していただきました。また、面接対策も丁寧にサポートしていただき、日本人の先生方の指導のおかげで無事に面接に合格することができました。\n' +
      '2018年4月13日、私は留学生として日本に来ました。\n' +
      '最初の日本での生活は簡単ではありませんでした。自炊もできず、勉強、仕事、日常生活、そして規則正しい生活を両立することはとても大変でした。しかし、私は諦めず、常に努力を続けました。\n' +
      '日本での生活を通して、規律の大切さ、時間の価値、そして困難が人を強く成長させることを学びました。その経験が今の私を作ってくれました。\n' +
      '日本語学校卒業後、日本経済大学に進学しました。2020年に大学生活をスタートしました。大学生活も決して簡単ではありませんでしたが、自分で学費を払いながら家族の支援も続け、一生懸命努力しました。\n' +
      'そして2024年3月10日、大学を卒業し、その後日本企業から内定をいただきました。現在は正社員として働いています。\n' +
      '以前の自分と同じような悩みや苦労を抱える留学生を見ると、支えたい、応援したいという気持ちになります。一緒に働き、共に成長できることをとても嬉しく思っています。\n' +
      '横浜日本語学習学院皆様へ――私の人生の大切な旅路を支え、夢を叶える手助けをしてくださり、本当にありがとうございました。\n' +
      '心より感謝申し上げます。',
    reviewEn:
      'My Journey to Japan 🇯🇵\n' +
      'Since I was young, I always dreamed of going abroad as an international student. After finishing my +2, I decided to come to Japan to continue my studies.\n' +
      'Before coming to Japan, I joined Yokohama Language and Training Consultancy in Pokhara, one of the most trusted institutions. Through Yokohama, I received a lot of support. They recommended Kurume Seminar Language School, which they said was one of the best language schools in Fukuoka. They also helped me prepare for my interview, and with their support and guidance from Japanese teachers, I successfully passed the interview.\n' +
      'On April 13, 2018, I came to Japan as an international student.\n' +
      'Life in Japan was not easy for me at first. I didn\'t even know how to cook for myself. Managing studies, work, daily life, and following a strict schedule was very difficult. However, I kept doing my best and never gave up.\n' +
      'During my journey in Japan, I also learned the importance of discipline, the value of time, and how struggles can help us grow stronger. Those experiences shaped me into the person I am today.\n' +
      'After graduating from Japanese language school, I applied to the Japanese University of Economics. In 2020, I started university. University life was also challenging, but I worked hard and paid my tuition fees by myself while also supporting my family.\n' +
      'Finally, on March 10, 2024, I graduated from university and later received a job offer from a Japanese company. Now, I am working as a full-time employee.\n' +
      'When I see international students facing the same struggles I had before, I feel motivated to support and encourage them. It makes me happy to work and grow together with them.\n' +
      'To Yokohama Language and Training Consultancy — thank you for being part of my entire journey and for helping make my dream possible.\n' +
      'Thank you from the bottom of my heart.',
  },
] as const;

/** Pre-split paragraphs so the client card doesn't re-split on every render. */
export interface PreparedTestimonial extends Omit<Testimonial, 'reviewEn' | 'reviewJa'> {
  paragraphsEn: readonly string[];
  paragraphsJa: readonly string[];
}

export function prepareTestimonials(
  list: readonly Testimonial[] = TESTIMONIALS,
): PreparedTestimonial[] {
  return list.map(({ reviewEn, reviewJa, ...rest }) => ({
    ...rest,
    paragraphsEn: reviewEn.split('\n').filter(Boolean),
    paragraphsJa: reviewJa.split('\n').filter(Boolean),
  }));
}