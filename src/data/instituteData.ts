export type ServiceCategory = 'all' | 'naming' | 'destiny';

export interface ConsultationService {
  id: string;
  number: string;
  category: Exclude<ServiceCategory, 'all'>;
  categoryLabel: string;
  title: string;
  lead: string;
  paragraphs: string[];
  ctaLabel: string;
  prepGuide: string[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const INSTITUTE_INFO = {
  name: '해정철학원 작명연구원',
  director: '이춘자',
  phoneMain: '032-652-8531',
  phoneMainHref: 'tel:032-652-8531',
  phoneMobile: '010-5844-0833',
  phoneMobileHref: 'tel:010-5844-0833',
  fax: '032-652-8533',
  tagline: '전통 명리학의 지혜로 소중한 이름과 인생의 방향을 함께합니다.',
  heroTitle: '소중한 이름, 새로운 시작.',
  heroSubtitle: '이름에는 사람의 소망과 가족의 사랑이 담겨 있습니다.',
  heroDescription:
    '해정철학원 작명연구원은 전통 명리학을 바탕으로 아기 이름, 개명, 상호·회사명 작명부터 사주, 궁합, 택일까지 다양한 상담을 진행합니다.',
  closingMessage:
    '소중한 이름과 인생의 중요한 선택, 정성을 다해 상담하겠습니다.',
};

export const ABOUT_COPY = {
  sectionTitle: '해정철학원 소개',
  headline: '이름을 짓는 일에는 정성과 깊은 고민이 필요합니다.',
  paragraphs: [
    '소중한 자녀의 이름부터 새로운 출발을 위한 개명, 사업의 첫걸음이 되는 상호 작명까지.',
    '해정철학원 작명연구원에서 전통 명리학의 원리를 바탕으로 정성껏 상담해 드립니다.',
    '고객 한 분 한 분의 소중한 고민에 귀 기울이며 필요한 상담을 안내해 드립니다.',
  ],
};

export const SERVICES: ConsultationService[] = [
  {
    id: 'baby-naming',
    number: '01.',
    category: 'naming',
    categoryLabel: '작명 상담',
    title: '아기 이름 작명',
    lead: '새로운 생명의 탄생을 축복하는 소중한 이름.',
    paragraphs: [
      '아이의 출생 정보와 이름에 담고 싶은 의미를 고려하여 정성껏 작명 상담을 진행합니다.',
      '우리 아이에게 어울리는 특별한 이름을 상담해 보세요.',
    ],
    ctaLabel: '아기 이름 전화 문의',
    prepGuide: [
      '아기의 성별 및 출생 연·월·일·시 (양력/음력 여부)',
      '부모님 성함 및 항렬자·선호하는 발음이나 의미',
      '전화 문의 시 상담 절차와 소요 일정을 상세히 안내해 드립니다.',
    ],
  },
  {
    id: 'renaming',
    number: '02.',
    category: 'naming',
    categoryLabel: '작명 상담',
    title: '개명 상담',
    lead: '새로운 이름으로 시작하는 새로운 마음.',
    paragraphs: [
      '현재 이름과 변경을 희망하는 이름에 대해 상담하고 개명 관련 안내를 도와드립니다.',
      '소중한 새로운 시작을 함께 고민합니다.',
    ],
    ctaLabel: '개명 전화 문의',
    prepGuide: [
      '현재 성명(한자 포함) 및 생년월일시',
      '개명을 고려하시는 이유와 바라는 이름의 방향',
      '전화 상담 시 개명 신청 및 진행 절차를 안내해 드립니다.',
    ],
  },
  {
    id: 'business-naming',
    number: '03.',
    category: 'naming',
    categoryLabel: '작명 상담',
    title: '상호·회사명 작명',
    lead: '사업의 시작을 알리는 중요한 이름.',
    paragraphs: [
      '사업의 성격과 방향, 원하는 이미지 등을 고려하여 상호 및 회사명 작명 상담을 진행합니다.',
      '오랫동안 기억될 수 있는 의미 있는 이름을 고민합니다.',
    ],
    ctaLabel: '상호·회사명 전화 문의',
    prepGuide: [
      '대표자 생년월일시 및 업종·사업 분야',
      '개인사업자 상호 또는 법인 회사명 구분',
      '희망하시는 브랜드 이미지나 한글·영문·한자 선호 여부',
    ],
  },
  {
    id: 'saju-compatibility',
    number: '04.',
    category: 'destiny',
    categoryLabel: '명리·택일',
    title: '사주·궁합 상담',
    lead: '전통 명리학으로 살펴보는 나의 사주와 인연.',
    paragraphs: [
      '개인의 사주와 궁합에 관한 궁금한 점을 상담해 드립니다.',
      '나와 소중한 인연에 대해 알아보는 시간.',
    ],
    ctaLabel: '사주·궁합 전화 문의',
    prepGuide: [
      '상담 대상자의 생년월일시 (양력/음력 구분)',
      '궁합 상담 시 상대방의 출생 정보',
      '현재 고민 중인 진로·인연·시기 등 주요 질문 사항',
    ],
  },
  {
    id: 'auspicious-date',
    number: '05.',
    category: 'destiny',
    categoryLabel: '명리·택일',
    title: '택일 상담',
    lead: '인생의 중요한 순간, 날짜를 선택하는 고민.',
    paragraphs: [
      '결혼, 출산, 개업 등 특별한 날을 앞두고 전통적인 택일 상담을 진행합니다.',
      '소중한 날을 더욱 뜻깊게 준비하세요.',
    ],
    ctaLabel: '택일 전화 문의',
    prepGuide: [
      '택일 목적 (결혼, 출산, 개업, 이사 등)',
      '당사자 및 주요 가족의 생년월일시',
      '희망하시는 대략적인 시기 또는 기간 범위',
    ],
  },
];

export const CONSULTATION_GUIDE = {
  sectionTitle: '상담 안내',
  lead: '궁금하신 사항은 전화로 편하게 문의하세요.',
  description: '서비스별 상담 내용과 신청 방법, 진행 절차 등을 친절하게 안내해 드립니다.',
  ctaLabel: '지금 전화 상담하기',
};

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    question: '아기 이름 작명은 어떻게 신청하나요?',
    answer: '전화로 문의해 주시면 작명에 필요한 정보와 상담 절차를 안내해 드립니다.',
  },
  {
    id: 'faq-2',
    question: '개명 상담도 가능한가요?',
    answer: '네. 개명 관련 상담 및 진행 절차를 전화로 안내해 드립니다.',
  },
  {
    id: 'faq-3',
    question: '상호나 회사명도 작명할 수 있나요?',
    answer: '네. 개인사업자 상호부터 회사명까지 상담 가능합니다.',
  },
  {
    id: 'faq-4',
    question: '사주와 궁합, 택일도 상담할 수 있나요?',
    answer: '네. 사주, 궁합, 결혼 및 개업 택일 등 다양한 상담을 진행합니다.',
  },
  {
    id: 'faq-5',
    question: '방문 주소는 어디인가요?',
    answer: '자세한 위치와 상담 방법은 전화로 문의해 주시면 안내해 드립니다.',
  },
];
