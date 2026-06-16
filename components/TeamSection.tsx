'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const team = [
  {
    name: 'Mr. Prakash Kumar Shrestha',
    name_jp: '',
    role: 'Founder/Principal',
    role_jp: '創設者・校長',
    image: '/team/Prakash Kumar Shrestha.jpeg',
    content: [
      "Welcome to our Japanese language Consultancy.",
      "It gives me great pleasure to welcome you to our website and share our vision with you. For more than 20 years, I have dedicated my career in helping students pursue quality education, international exposure and rewarding career opportunities through study in Japan. I have witnessed how language education can transform lives, opening doors to higher education, career advancement, cultural exchange and personal growth. That’s why, I believe Japan is the perfect education destination for Nepalese Students.",
      "Our consultancy was founded with a simple yet powerful vision: to promote Japanese language education in Nepal that prepares students not only for study in Japan, but also for meaningful careers and long-term success. We believe that learning Japanese is not about acquiring linguistic skills but also about understanding the values, culture and opportunities that Japan offers.",
      "My journey began with a simple belief: to provide high quality Japanese language education and guidance that empowers individuals to achieve their dreams of study in Japan. Every student deserves access to the right guidance and opportunities to achieve their dreams. Over the years, I have seen how studying in Japan can transform lives by providing world-class education, valuable skills, cultural understanding and global career prospects. I have had the privilege of guiding countless learners on their paths to success. Their achievements continue to inspire our commitment to excellence, innovation and personalized support. Every student had unique goals and we strive to create an environment where each learner receives the attention, encouragement and resources needed to succeed.",
      "Our consultancy was established to bridge the gap between aspiring students and the excellent educational opportunities available in Japan. We are dedicated to providing honest advice, professional support and personalized guidance throughout every stage of the journey-from language preparation and school/college selection to admissions, visa procedures and life in Japan.",
      "We understand that studying abroad is one of the most important decisions a student and family can make. That is why we place integrity, transparency and student success at the heart of everything we do. Our greatest achievement is seeing our students thrive academically, professionally and personally.",
      "As Japan continues to offer exciting opportunities for international students, we remain committed to helping the next generation turn their aspirations into reality. We are honored to be part of your journey and look forward to helping you achieve your goals.",
      "As we look to the future, our mission remains clear: to bridge cultures, create opportunities and help our students confidently navigate a global world through the Japanese language. We proudly send students to different cities of Japan such as Tokyo, Chiba, Yokohama, Osaka, Kobe, Kyoto, Nagoya, Fukuoka, Kurume, Hiroshima, Okinawa where students can get excellent educational opportunities.",
      "At Yokohama, we have always believed that we are not simply teaching a language — we are shaping futures. Our commitment is to continue building an institution that values integrity, professionalism and development, while creating opportunities for young people to build prosperous and dignified lives.",
      "We try to introduce our students with various Japanese culture and food as much as possible. Every year we celebrate Tanabata festival in July 7, sushi making programme, Origami, Kanji quiz, wearing Japanese dress, Japanese tea ceremony and many more.",
      "Thank you for visiting our website and for considering us as your partner in your Japanese language and study in Japan journey. We look forward to supporting your aspirations and celebrating your success.",
      "“Learning a language is not just about communication-it is about creating opportunities and building bridges between people, nation and culture. So, I warmly welcome you to be part of the Yokohama family and to take the first step toward your future in Japan” - Prakash Kumar Shrestha"
    ],
    content_jp: [
      "当日本語学習学院へ、ようこそ。",
      "当学院のウェブサイトをご訪問いただき、私たちの理念をご紹介できることを大変嬉しく思います。私は20年以上にわたり、質の高い教育、国際的な視野、そして将来性のあるキャリアを目指す学生たちを支援してまいりました。これまで、語学教育が人々の人生を大きく変え、高等教育、キャリア形成、異文化交流、そして個人の成長への扉を開く姿を数多く見てきました。そのため私は、日本がネパールの学生にとって理想的な留学先であると確信しています。",
      "当学院は、「日本語教育を通じてネパールの学生たちの未来を切り拓く」という明確な理念のもと設立されました。私たちは、学生が日本で学ぶだけでなく、充実したキャリアと長期的な成功を実現できるよう支援しています。日本語学習は単なる言語習得ではなく、日本の価値観や文化、そしてさまざまな可能性を理解することでもあると考えています。",
      "私の歩みは、「質の高い日本語教育と適切な指導を提供し、日本留学という夢の実現を支援する」という信念から始まりました。すべての学生には、自らの夢を実現するための正しい指導と機会を得る権利があります。長年にわたり、日本での学びが世界水準の教育、貴重なスキル、異文化理解、そしてグローバルなキャリアの可能性を通じて、学生たちの人生をいかに変革できるかを目の当たりにしてきました。私はこれまで数え切れないほど多くの学習者を成功へ導く機会に恵まれました。彼らの成果は、私たちが卓越性、革新性、そして一人ひとりに寄り添った支援を追求し続ける原動力となっています。学生それぞれが異なる目標を持っており、私たちは学習者それぞれが成功するために必要な関心、激励、そしてリソースを受けられる環境づくりに努めています。",
      "当学院は、日本にある優れた教育機会と、それを目指す学生たちとの架け橋となるために設立されました。私たちは、語学準備から学校・大学選び、入学およびビザ取得手続き、そして日本での生活に至るまで、あらゆる段階で誠実なアドバイス、専門的なサポート、そして個別指導を提供しています。",
      "留学が学生本人だけでなく、ご家族にとっても人生の中で非常に重要な決断であることを私たちは理解しています。そのため私たちは、誠実さ、透明性、そして学生の成功をすべての活動の中心に据えています。私たちにとって最大の喜びは、学生たちが学業面・職業面・人格面で成長し、活躍する姿を見ることです。",
      "日本は今もなお留学生に多くの魅力的な機会を提供し続けています。私たちは次世代の若者たちが夢を現実に変えられるよう、今後も支援を続けてまいります。皆様の人生の歩みの一部となれることを光栄に思い、目標達成のお手伝いができることを楽しみにしています。",
      "私たちの使命は今後も変わらず明確です。それは、日本語を通じて文化をつなぎ、新たな機会を創出し、学生たちが自信を持ってグローバル社会を歩んでいけるよう支援することです。私たちは、学生たちが優れた教育機会を得られるよう、誇りを持って東京、千葉、横浜、大阪、神戸、京都、名古屋、福岡、久留米、広島、沖縄など、日本各地へ学生を送り出しています。",
      "Yokohamaでは、私たちは単に言語を教えているのではなく、未来を創っていると考えています。誠実さ、専門性、成長を重視する教育機関として発展し続けるとともに、若者たちが豊かで尊厳ある人生を築くための機会を提供することに尽力しています。",
      "私たちは生徒たちにできる限り多くの日本の文化や食に触れてもらうよう努めています。毎年7月7日の七夕祭りをはじめ、寿司作り体験、折り紙、漢字クイズ、日本の伝統衣装の着付け体験、茶道体験など、さまざまな文化イベントを実施しています。",
      "当学院のウェブサイトをご覧いただき、また日本語学習および日本留学のパートナーとして私たちをご検討いただき、誠にありがとうございます。皆様の夢の実現を支援し、その成功をともに祝えることを心より願っています。",
      "「言語学習とは単なるコミュニケーション手段を身につけることではありません。それは人々、国家、文化を結びつけ、新たな機会を生み出す架け橋を築くことです。皆様をYokohamaファミリーの一員として温かくお迎えし、日本での未来へ向けた第一歩を踏み出されることを心より歓迎いたします。」― Prakash Kumar Shrestha"
    ]
  },
  {
    name: 'Ms. Sushma Shrestha',
    name_jp: '',
    role: 'Vice-Principal/Counselor',
    role_jp: '副校長／カウンセラー',
    image: '/team/Sushma Shrestha.jpeg',
    content: [
      "It is an absolute honor to be a part of an institution that empowers students to pursue their dreams and explore new opportunities in Japan. For the past 14 years, I have had the privilege of working closely with students who aspire to study, work and build successful futures in Japan. Throughout this journey, I have witnessed countless success stories and each one has reinforced my belief that the right guidance, quality education and determination can transform dreams into reality.",
      "Our consultancy was established with a clear vision: to provide students with not only Japanese language education but also the knowledge, confidence and support necessary to succeed in a new academic and cultural environment. We understand that choosing to pursue opportunities in Japan is an important life decision and we are committed to making that journey as smooth and rewarding as possible.",
      "Over the years, I have seen Japan continue to offer outstanding opportunities for international students. It provides access to world-class education, innovative technologies, global career opportunities and a rich cultural experience that shapes students into confident and capable global citizens. However, success begins with strong language skills and a deep understanding of Japanese culture. At our consultancy, we believe that every student has unique potential. Our mission is to provide personalized counseling, effective Japanese language training and comprehensive support throughout every stage of the journey—from language preparation and school/college applications to visa processing and life in Japan. Our dedicated team works tirelessly to ensure that every student receives personalized attention, professional guidance and the highest standard of education.",
      "As Vice Principal, I am passionate about helping young people transform their ambitions into achievements through quality education, guidance and support. I take great pride in the achievements of our students who have gone on to excel in language schools/colleges and professional careers throughout Japan. Their success inspires us to continually improve and uphold our commitment to excellence.",
      "As a counselor, I have had the opportunity to guide many students on their journey to Japan. Each student comes with unique goals, aspirations and challenges, and it is our responsibility to help them find the best path toward a successful future. Japan is more than just a study destination. It is a country that offers world-class education, advanced technology, a safe and welcoming environment and countless opportunities for personal and professional growth.",
      "Our mission is to provide honest guidance and personalized support throughout the entire process. From Japanese language preparation and school selection to documentation, visa application and pre-departure orientation, we are committed to ensuring that every student feels confident and well-prepared for life in Japan. Over the years, we have proudly helped students enroll in language schools and colleges across different cities of Japan. Seeing our students succeed in their studies, careers and personal lives is our greatest achievement and motivation.",
      "Many students wonder whether studying in Japan is the right choice for them. My answer is simple: if you are willing to learn, work hard and embrace new experiences, then it is a big yes. Japan can provide life-changing opportunities. Studying in Japan allows you to gain international exposure, improve your Japanese language skills and develop the confidence needed to succeed in a global environment.",
      "As a young educator and leader, I understand the aspirations, challenges and excitement that come with planning an international education journey. My goal is to create a supportive environment where students feel motivated, confident and prepared to achieve their goals.",
      "We are proud to be a trusted partner for students and families who dream of a brighter future in Japan. Together, let us open the door to new opportunities and a brighter future in Japan. We will turn opportunities into achievements and dreams into reality.",
      "To all aspiring students, I encourage you to believe in your potential and pursue your goals with determination. With proper preparation, dedication and the right guidance, studying in Japan can become a life-changing experience that opens doors to a brighter future. Thank you for trusting us with your dreams. We look forward to supporting you every step of the way and celebrating your success in Japan.",
      "Thank you for visiting our website. I look forward to welcoming you to our learning community and supporting you on your journey to success."
    ],
    content_jp: [
      "日本語を学ぶことは、単に言語を習得することではありません。それは独自の文化を理解し、世界水準の教育機会にアクセスし、日本で成功する未来を築くための入り口です。",
      "　日本語学科長として、私は献身的な講師陣を率いて学生たちの日本語能力向上を支援できることを誇りに思っています。当学科では、話す・聞く・読む・書くといったコミュニケーションスキルをバランスよく向上させる重点を置きながら、日本の文化、習慣、価値観への深い理解を育むことを目指しています。授業では、文法や語彙、会話力だけでなく、日本を特別な国たらしめている伝統や価値観、生活様式を理解することにも力を入れています。日本で夢を実現するための第一歩を踏み出す学生の皆さんを指導できることを光栄に思います。",
      "　日本語学習は、最初、特にひらがな、カタカナ、漢字に出会ったばかりの頃は難しく感じるかもしれません。しかし、正しいアプローチと継続的な努力があれば、誰でも習得できます。私は学生たちに、毎日の読み書きの練習を通して、ひらがな・カタカナ・漢字を学ぶよう勧めています。定期的な読書練習は、認識速度の向上に役立ちます。日本語学習には忍耐と段階的な積み重ねが必要です。私からのアドバイスは、最初からしっかりとした基礎を築くことです。授業に真面目に出席し、毎日復習し、自信を持って話す練習をしてください。また、分からないことがあれば遠慮せず質問してください。今日の小さな努力が、明日の大きな成功につながります。失敗を恐れないでください。失敗は学習過程の一部です。継続することこそが成果への近道です。日々の小さな努力が大きな成果につながります。",
      "　日本語学習は旅であり、競争ではないということを忘れないでください。努力と忍耐、そして継続的な練習によって、少しずつ自信と流暢さを身につけることができます。学んだ一文字一文字が、日本での勉学、就労、生活という夢の実現へ近づく一歩となります。「ひらがな・カタカナ・漢字を習得する鍵は継続である。」ということを常に心に留めておきましょう。",
      "　私たちは、効果的な語学学習には学問的な優秀さと実践的な応用力の両方が必要であると考えています。そのため、私たちの教授法は、学生が日本での実生活に対応できるよう設計されています。皆さんの目標が留学であれ、就職であれ、日本で長期的なキャリアを築くことであれ、私たちは皆さんの成功に必要な指導、支援、そして質の高い教育を提供することをお約束します。",
      "　私自身、日本で留学し生活した経験から、日本は単に教育水準が高いだけの国ではなく、それ以上のもとを提供してくれると自信を持って言えます。日本は規律、責任感、時間厳守、そして他者への敬意といった価値観を教えてくれる国であり、それらの価値観は皆さんの人生とキャリアの両方に大きな力となるでしょう。",
      "　日本留学を目指す学生の皆さんには、早めの準備を勧めます。真剣に日本語学習に取り組んでください。それは学業面だけでなく、自信を持ったコミュニケーションや、より多くの機会を得ることにもつながります。また、新しい経験や異文化、さまざまな挑戦に積極的に向き合いましょう。それらは皆さんの成長にとって非常に重要な要素です。",
      "　日本で成功するのは、勤勉で忍耐強く、変化に柔軟に対応しようとする人です。道のりは決して平坦ではありませんが、そこで得られる知識、技能、そして国際的な経験は、将来の人生とキャリアにとってかけがえのない財産となるでしょう。",
      "　皆さんには、大きな夢を持って、その目標に向かって努力し続け、あらゆる機会を最大限に活かしてほしいと思っています。日本は努力と決意が報われる場所です。日本への旅路を歩むすべての学生の皆さんに、素晴らしい未来が訪れることを心から願っています。",
      "　私たちの学習コミュニティに皆さんをお迎えできることを大変嬉しく思います。皆さんが日本での夢を実現する旅の一員になれることを楽しみにしています。信頼できる日本語教育のパートナーとして私たちを選んでいただき、ありがとうございます。"
    ]
  },
  {
    name: 'Mr. Sujan Shrestha',
    name_jp: '',
    role: 'Head of Japanese Language Department',
    role_jp: '日本語学科長',
    image: '/team/Sujan Shrestha.jpeg',
    content: [
      "Learning Japanese is more than mastering a language—it is the gateway to understanding a unique culture, accessing world-class educational opportunities and building a successful future in Japan.",
      "As the Head of the Japanese Language Department, I am proud to lead a team of dedicated instructors committed to helping our students achieve excellence in Japanese language proficiency. Our department focuses on developing strong communication skills in speaking, listening, reading and writing while fostering a deep understanding of Japanese culture, customs and values. I am honored to guide students as they take their first steps toward achieving their dreams in Japan. In our classes, we focus not only on grammar, vocabulary and communication skills but also on understanding the values, traditions and way of life that make Japan unique.",
      "Learning Japanese may seem challenging at first, especially when you encounter Hiragana, Katakana and Kanji, but with the right approach and consistent practice, anyone can master them. I always encourage our students to learn Hiragana, Katakana and Kanji by practicing, reading and writing every day. Regular reading practice helps improve recognition speed. Learning Japanese requires patience and gradual learning. My advice to every student is to focus on building a strong foundation in the Japanese language from the beginning. Attend classes regularly, review lessons daily, practice speaking confidently, and never hesitate to ask questions. Every small effort you make today will contribute to your success tomorrow. Don’t be afraid of making mistakes, they are part of the learning process. Stay consistent; small daily efforts lead to great results.",
      "Remember, learning Japanese is a journey, not a race. With dedication, patience and regular practice, you will gradually gain confidence and fluency. Every character you learn brings you one step closer to achieving your dream of studying, working or living in Japan. Always Keep in mind that “Consistency is the key to mastering Hiragana, Katakana, and Kanji.”",
      "We believe that effective language learning requires both academic excellence and practical application, which is why our teaching methods are designed to prepare students for real-life situations in Japan. Whether your goal is to study, work or build a long-term career in Japan, we are committed to providing the guidance, support and quality education necessary for your success.",
      "Having studied and lived in Japan by myself, I can confidently say that Japan offers much more than just quality education. It is a country that teaches discipline, responsibility, punctuality and respect for others—values that help shape your future both personally and professionally.",
      "My advice to every student planning to study in Japan is to start preparing early. Focus on learning the Japanese language seriously, as it will help you succeed academically, communicate confidently and create more opportunities during your stay. Be open to new experiences, different cultures and challenges, as they are an important part of your growth.",
      "Success in Japan comes to those who are hardworking, patient and willing to adapt. The journey may not always be easy, but the knowledge, skills and international exposure you gain will be invaluable for your future career and life.",
      "I encourage you all to dream big, stay dedicated to your goals and make the most of every opportunity that comes your way. Japan is a place where determination and effort are truly rewarded. I wish all aspiring students the very best for their journey to Japan and a bright future ahead.",
      "I am delighted to welcome you to our learning community and look forward to being part of your journey toward achieving your dreams in Japan. Thank you for choosing us as your trusted partner in Japanese language education."
    ],
    content_jp: [
      "日本語を学ぶことは、単に言語を習得すること以上のものです。それは、独自の文化を理解し、世界クラスの教育機会にアクセスし、日本で成功する未来を築くための入り口です。",
      "日本語学科長として、私は学生が日本語能力の向上において卓越した成果を達成できるよう尽力する献身的な講師チームを率いていることを誇りに思います。私たちの学科は、日本の文化、習慣、価値観への深い理解を育みながら、話す、聞く、読む、書くという強力なコミュニケーションスキルの開発に焦点を当てています。日本で夢を実現するための第一歩を踏み出す学生を導くことができることを光栄に思います。私たちのクラスでは、文法、語彙、コミュニケーションスキルだけでなく、日本を独自のものにしている価値観、伝統、生活様式の理解にも重点を置いています。",
      "日本語の学習は、特にひらがな、カタカナ、漢字に出会うと、最初は難しく感じるかもしれませんが、適切なアプローチと継続的な練習により、誰でも習得することができます。私は常に、毎日練習し、読み、書くことで、ひらがな、カタカナ、漢字を学ぶことを学生に勧めています。定期的な読書の練習は、認識速度を向上させるのに役立ちます。日本語の学習には忍耐と段階的な学習が必要です。すべての学生に対する私のアドバイスは、最初から日本語の強力な基礎を築くことに集中することです。定期的にクラスに出席し、毎日レッスンを復習し、自信を持って話す練習をし、質問することを決してためらわないでください。あなたが今日行うすべての小さな努力は、明日のあなたの成功に貢献します。間違いを恐れないでください、それらは学習プロセスの一部です。一貫性を保ちましょう。小さな毎日の努力が大きな結果につながります。",
      "覚えておいてください、日本語を学ぶことは競争ではなく、旅です。献身、忍耐、そして定期的な練習により、あなたは徐々に自信と流暢さを得るでしょう。あなたが学ぶ各文字は、日本で学び、働き、生活するというあなたの夢を達成することに一歩近づきます。常に「一貫性が、ひらがな、カタカナ、そして漢字を習得するための鍵である」ことを心に留めておいてください。",
      "効果的な語学学習には、学問的な卓越性と実践的な応用の両方が必要であると私たちは信じています。そのため、私たちの教授法は、学生が日本での実生活の状況に対応できるように準備するように設計されています。あなたの目標が日本で学ぶこと、働くこと、または長期的なキャリアを築くことのいずれであっても、私たちはあなたの成功に必要な指導、サポート、および質の高い教育を提供することに尽力しています。",
      "私自身が日本で学び生活した経験から、日本は質の高い教育以上のものをはるかに多く提供していると自信を持って言えます。規律、責任、時間厳守、他者への敬意といった、個人的および職業的にあなたの未来を形作るのに役立つ価値観を教える国です。",
      "日本への留学を計画しているすべての学生への私のアドバイスは、早く準備を始めることです。日本語を真剣に学ぶことに集中してください。それは学業で成功し、自信を持ってコミュニケーションを取り、滞在中にさらに多くの機会を創出するのに役立つからです。新しい経験、異なる文化、そして課題に対してオープンになってください。それらはあなたの成長の重要な一部だからです。",
      "日本での成功は、勤勉で、忍耐強く、適応する意欲のある人々にもたらされます。その旅は常に容易ではないかもしれませんが、あなたが得る知識、スキル、そして国際的な経験は、あなたの将来のキャリアと人生にとってかけがえのないものになるでしょう。",
      "私は皆さん全員に、大きな夢を持ち、目標に専念し、訪れるすべての機会を最大限に活用することをお勧めします。日本は決意と努力が真に報われる場所です。すべての志ある学生が、日本への旅で最高の結果を出し、明るい未来が待っていることを願っています。",
      "私たちの学習コミュニティにあなたをお迎えできることを嬉しく思い、日本での夢の実現に向けたあなたの旅の一部になれることを楽しみにしています。日本語教育における信頼できるパートナーとして私たちを選んでいただきありがとうございます。"
    ]
  },
  {
    name: 'Ms. Sabitri Shrestha',
    name_jp: '',
    role: 'Japanese Language Instructor',
    role_jp: '日本語講師',
    image: '/team/Sabitri Shrestha.jpeg',
    content: [
      "Having an experience of teaching Japanese language for nearly 2 decades, I have had the privilege of teaching Japanese language to Nepalese students who aspire to study, work and build successful careers in Japan. Throughout my teaching journey, I have witnessed countless students transform from beginners who could not read a single Japanese character into confident individuals living and succeeding in Japan.",
      "One of the most rewarding aspects of my career has been seeing students overcome challenges through dedication and perseverance. Learning Japanese is not always easy. Hiragana, Katakana, Kanji, grammar and conversation skills require time and consistent practice. However, I have learned that students who remain disciplined and practice regularly achieve remarkable progress. My suggestions for successful Japanese language learning are practicing reading and writing every day, even if only for 30–40 minutes. Expand your vocabulary and study Kanji step by step. Listen to Japanese audio and try reading along.",
      "Nepalese students are hardworking, adaptable and eager to learn. With proper guidance and a positive attitude, they can excel not only in language studies but also in academics, employment and daily life in Japan. Over the years, many of my former students have successfully enrolled in Japanese language schools, colleges, universities and professional institutions across Japan. Japan offers excellent opportunities, but success there depends greatly on your language ability, commitment and willingness to embrace a new culture.",
      "As a teacher, my goal is not only to teach the language but also to prepare students for a successful and meaningful life in Japan. I am proud of the achievements of our students and look forward to guiding many more young people toward their dreams. I encourage all aspiring students to stay motivated, work hard and believe in their potential.",
      "Throughout this journey, I have witnessed countless students transform their aspirations into achievements through dedication, perseverance and quality education. Japanese is more than a language—it is a bridge to new opportunities, cultural understanding and personal growth. My goal as a teacher has always been to make learning enjoyable, practical and meaningful. I believe that every student has the potential to succeed when provided with the right guidance, encouragement and learning environment.",
      "Over the years, I have learned that confidence is just as important as language proficiency. Therefore, I encourage my students not only to master grammar and vocabulary but also to develop the communication skills and cultural awareness needed to thrive in Japan. I take great pride in seeing my students succeed in colleges, language schools and workplaces across Japan. Their achievements continue to inspire me and strengthen my commitment to education.",
      "As you begin your journey with us, I assure you that our team will support you every step of the way. I look forward to sharing my experience, knowledge and passion for the Japanese language with you and helping you achieve your goals. Thank you for your trust and confidence in our institution."
    ],
    content_jp: [
      "日本語を学ぶことは、単に言語を習得することではありません。それは独自の文化を理解し、世界水準の教育機会にアクセスし、日本で成功する未来を築くための入り口です。",
      "　日本語学科長として、私は献身的な講師陣を率いて学生たちの日本語能力向上を支援できることを誇りに思っています。当学科では、話す・聞く・読む・書くといったコミュニケーションスキルをバランスよく向上させる重点を置きながら、日本の文化、習慣、価値観への深い理解を育むことを目指しています。授業では、文法や語彙、会話力だけでなく、日本を特別な国たらしめている伝統や価値観、生活様式を理解することにも力を入れています。日本で夢を実現するための第一歩を踏み出す学生の皆さんを指導できることを光栄に思います。",
      "　日本語学習は、最初、特にひらがな、カタカナ、漢字に出会ったばかりの頃は難しく感じるかもしれません。しかし、正しいアプローチと継続的な努力があれば、誰でも習得できます。私は学生たちに、毎日の読み書きの練習を通して、ひらがな・カタカナ・漢字を学ぶよう勧めています。定期的な読書練習は、認識速度の向上に役立ちます。日本語学習には忍耐と段階的な積み重ねが必要です。私からのアドバイスは、最初からしっかりとした基礎を築くことです。授業に真面目に出席し、毎日復習し、自信を持って話す練習をしてください。また、分からないことがあれば遠慮せず質問してください。今日の小さな努力が、明日の大きな成功につながります。失敗を恐れないでください。失敗は学習過程の一部です。継続することこそが成果への近道です。日々の小さな努力が大きな成果につながります。",
      "　日本語学習は旅であり、競争ではないということを忘れないでください。努力と忍耐、そして継続的な練習によって、少しずつ自信と流暢さを身につけることができます。学んだ一文字一文字が、日本での勉学、就労、生活という夢の実現へ近づく一歩となります。「ひらがな・カタカナ・漢字を習得する鍵は継続である。」ということを常に心に留めておきましょう。",
      "　私たちは、効果的な語学学習には学問的な優秀さと実践的な応用力の両方が必要であると考えています。そのため、私たちの教授法は、学生が日本での実生活に対応できるよう設計されています。皆さんの目標が留学であれ、就職であれ、日本で長期的なキャリアを築くことであれ、私たちは皆さんの成功に必要な指導、支援、そして質の高い教育を提供することをお約束します。",
      "　私自身、日本で留学し生活した経験から、日本は単に教育水準が高いだけの国ではなく、それ以上のもとを提供してくれると自信を持って言えます。日本は規律、責任感、時間厳守、そして他者への敬意といった価値観を教えてくれる国であり、それらの価値観は皆さんの人生とキャリアの両方に大きな力となるでしょう。",
      "　日本留学を目指す学生の皆さんには、早めの準備を勧めます。真剣に日本語学習に取り組んでください。それは学業面だけでなく、自信を持ったコミュニケーションや、より多くの機会を得ることにもつながります。また、新しい経験や異文化、さまざまな挑戦に積極的に向き合いましょう。それらは皆さんの成長にとって非常に重要な要素です。",
      "　日本で成功するのは、勤勉で忍耐強く、変化に柔軟に対応しようとする人です。道のりは決して平坦ではありませんが、そこで得られる知識、技能、そして国際的な経験は、将来の人生とキャリアにとってかけがえのない財産となるでしょう。",
      "　皆さんには、大きな夢を持って、その目標に向かって努力し続け、あらゆる機会を最大限に活かしてほしいと思っています。日本は努力と決意が報われる場所です。日本への旅路を歩むすべての学生の皆さんに、素晴らしい未来が訪れることを心から願っています。",
      "　私たちの学習コミュニティに皆さんをお迎えできることを大変嬉しく思います。皆さんが日本での夢を実現する旅の一員になれることを楽しみにしています。信頼できる日本語教育のパートナーとして私たちを選んでいただき、ありがとうございます。"
    ]
  }
];

function TeamMemberCard({ member, index, shortVersion }: { member: any, index: number, shortVersion?: boolean }) {
  const [language, setLanguage] = useState<'en' | 'jp'>('en');
  const contentToDisplay = language === 'en' ? member.content : member.content_jp;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className={`flex flex-col lg:flex-row gap-10 items-start ${
        index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
      }`}
    >
      {/* Image Section */}
      <div className="w-full lg:w-1/3 flex-shrink-0">
        <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h3 className="text-2xl font-bold mb-1">{language === 'jp' && member.name_jp ? member.name_jp : member.name}</h3>
            <p className="font-medium text-yokohama-red-light">{language === 'jp' && member.role_jp ? member.role_jp : member.role}</p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full lg:w-2/3 bg-white p-8 rounded-2xl shadow-xl border border-gray-100 relative">
        <div className="absolute top-0 left-0 w-2 h-full bg-yokohama-red rounded-l-2xl"></div>
        
        <div className="flex justify-between items-start mb-6">
          <div className="hidden lg:block">
            <h3 className="text-2xl font-bold mb-2 text-yokohama-dark-text">{language === 'jp' && member.name_jp ? member.name_jp : member.name}</h3>
            <p className="font-semibold text-yokohama-red">{language === 'jp' && member.role_jp ? member.role_jp : member.role}</p>
          </div>
          <div className="flex bg-gray-100 rounded-lg p-1 ml-auto">
            <button
              onClick={() => setLanguage('en')}
              className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
                language === 'en' 
                  ? 'bg-white shadow-sm text-yokohama-red' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              English
            </button>
            <button
              onClick={() => setLanguage('jp')}
              className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
                language === 'jp' 
                  ? 'bg-white shadow-sm text-yokohama-red' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              日本語
            </button>
          </div>
        </div>

        <div className="space-y-4 text-gray-700 leading-relaxed max-h-[500px] overflow-y-auto pr-4 custom-scrollbar">
          {shortVersion ? (
            <>
              <p>{contentToDisplay[0]}</p>
              {contentToDisplay.length > 1 && (
                <p>{contentToDisplay[1].substring(0, 150)}...</p>
              )}
              <div className="mt-6 pt-4 border-t border-gray-100">
                <Link 
                  href="/about" 
                  className="inline-flex items-center text-yokohama-red font-semibold hover:text-yokohama-red-dark transition-colors"
                >
                  Read Full Message <span className="ml-2">→</span>
                </Link>
              </div>
            </>
          ) : (
            contentToDisplay.map((paragraph: string, pIndex: number) => (
              <p key={pIndex}>{paragraph}</p>
            ))
          )}
        </div>
      </div>
    </motion.div>
  );
}

export function TeamSection({ shortVersion = false }: { shortVersion?: boolean }) {
  return (
    <section className="py-20 bg-yokohama-light-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-yokohama-dark-text">
            Meet Our Team
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our dedicated team of professionals committed to your success in Japan.
          </p>
        </div>

        <div className="space-y-20">
          {team.map((member, index) => (
            <TeamMemberCard 
              key={index} 
              member={member} 
              index={index} 
              shortVersion={shortVersion} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
