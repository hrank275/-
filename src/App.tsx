import { useState } from 'react';
import {
  Phone,
  Smartphone,
  ChevronDown,
  Menu,
  X,
  ArrowUpRight,
  Copy,
  Check,
} from 'lucide-react';
import {
  INSTITUTE_INFO,
  ABOUT_COPY,
  SERVICES,
  CONSULTATION_GUIDE,
  FAQ_ITEMS,
  ServiceCategory,
  ConsultationService,
} from './data/instituteData';
import { ResilientImage } from './components/ResilientImage';
import { ConsultationModal } from './components/ConsultationModal';

import heroDeskImg from './assets/images/hero_scholar_desk_1794544744833.jpg';
import aboutSealImg from './assets/images/about_hanji_seal_1794544746040.jpg';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory>('all');
  const [openFaqId, setOpenFaqId] = useState<string>(FAQ_ITEMS[0].id);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeService, setActiveService] = useState<ConsultationService | null>(null);
  const [copiedDirect, setCopiedDirect] = useState<'main' | 'mobile' | null>(null);

  const filteredServices =
    selectedCategory === 'all'
      ? SERVICES
      : SERVICES.filter((service) => service.category === selectedCategory);

  const openConsultationModal = (service: ConsultationService | null) => {
    setActiveService(service);
    setModalOpen(true);
  };

  const handleCopyNumber = async (num: string, target: 'main' | 'mobile') => {
    try {
      await navigator.clipboard.writeText(num);
      setCopiedDirect(target);
      window.setTimeout(() => {
        setCopiedDirect((curr) => (curr === target ? null : curr));
      }, 2000);
    } catch {
      // Clipboard fallback ignored
    }
  };

  const navLinks = [
    { href: '#about', label: '소개' },
    { href: '#services', label: '상담 분야' },
    { href: '#consultation', label: '상담 안내' },
    { href: '#faq', label: '자주 묻는 질문' },
  ];

  return (
    <div id="top" className="min-h-screen flex flex-col bg-[#FAF8F4] text-[#18181B]">
      {/* Header: Strict 3-zone Top Bar Contract */}
      <header className="sticky top-0 z-40 bg-[#FAF8F4]/95 backdrop-blur-sm border-b border-[#E5E0D8]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
          {/* Zone 1: Single-line Wordmark */}
          <a
            href="#top"
            className="font-serif text-lg font-semibold tracking-tight text-[#18181B] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9A2B26]"
          >
            {INSTITUTE_INFO.name}
          </a>

          {/* Zone 2: Concise single-line navigation links */}
          <nav
            aria-label="주요 메뉴"
            className="hidden md:flex items-center gap-7 text-sm font-medium text-[#52525B]"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="py-1 border-b border-transparent hover:border-[#18181B] hover:text-[#18181B] transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9A2B26]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Single primary action */}
          <div className="flex items-center gap-2 shrink-0">
            <a
              href={INSTITUTE_INFO.phoneMainHref}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 min-h-[40px] text-xs font-medium text-white bg-[#9A2B26] hover:bg-[#7F221E] transition-colors duration-150 whitespace-nowrap shrink-0 tabular-nums focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9A2B26]"
            >
              <Phone className="w-3.5 h-3.5" aria-hidden="true" />
              <span>전화 상담 {INSTITUTE_INFO.phoneMain}</span>
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
              className="md:hidden min-w-[44px] min-h-[44px] flex items-center justify-center text-[#18181B] hover:bg-[#EFEBE3] transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9A2B26]"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" aria-hidden="true" />
              ) : (
                <Menu className="w-5 h-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#E5E0D8] bg-[#FAF8F4] px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block min-h-[44px] flex items-center px-2 text-sm font-medium text-[#18181B] hover:bg-[#EFEBE3] transition-colors duration-150"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-[#E5E0D8]">
              <a
                href={INSTITUTE_INFO.phoneMainHref}
                className="w-full min-h-[44px] px-4 py-2.5 text-sm font-medium text-white bg-[#9A2B26] hover:bg-[#7F221E] flex items-center justify-center gap-2 transition-colors duration-150 tabular-nums"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                <span>전화 상담 {INSTITUTE_INFO.phoneMain}</span>
              </a>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-10 pb-14 lg:pt-16 lg:pb-20 border-b border-[#E5E0D8]">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
              <div className="lg:col-span-6 flex flex-col justify-between py-2">
                <div>
                  <p className="text-xs font-medium tracking-wider text-[#52525B] mb-4">
                    전통 명리학 <span aria-hidden="true">·</span> 대표 {INSTITUTE_INFO.director}{' '}
                    <span aria-hidden="true">·</span> 1:1 맞춤 상담
                  </p>
                  <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.35rem] font-semibold tracking-tight text-[#18181B] leading-[1.2] mb-5">
                    {INSTITUTE_INFO.heroTitle}
                  </h1>
                  <p className="font-serif text-lg sm:text-xl text-[#27272A] leading-relaxed mb-4 max-w-xl">
                    {INSTITUTE_INFO.tagline}
                  </p>
                  <p className="text-[15px] sm:text-base text-[#52525B] leading-relaxed mb-3 max-w-xl">
                    {INSTITUTE_INFO.heroSubtitle}
                  </p>
                  <p className="text-[15px] sm:text-base text-[#52525B] leading-relaxed max-w-xl">
                    {INSTITUTE_INFO.heroDescription}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-[#E5E0D8] flex flex-wrap items-center gap-4">
                  <a
                    href={INSTITUTE_INFO.phoneMainHref}
                    className="min-h-[44px] px-6 py-3 text-sm font-medium text-white bg-[#9A2B26] hover:bg-[#7F221E] inline-flex items-center gap-2.5 transition-colors duration-150 whitespace-nowrap shrink-0 tabular-nums focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9A2B26]"
                  >
                    <Phone className="w-4 h-4" aria-hidden="true" />
                    <span>전화 상담 {INSTITUTE_INFO.phoneMain}</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => openConsultationModal(null)}
                    className="min-h-[44px] px-5 py-3 text-sm font-medium text-[#18181B] bg-white hover:bg-[#F3EFE8] border border-[#D8D1C4] inline-flex items-center gap-1.5 transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9A2B26]"
                  >
                    <span>상담 절차 안내</span>
                    <ArrowUpRight className="w-4 h-4 text-[#52525B]" aria-hidden="true" />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="h-full min-h-[300px] lg:min-h-[460px] border border-[#DFD8CC] bg-[#EFEBE3] overflow-hidden">
                  <ResilientImage
                    src={heroDeskImg}
                    alt="한지와 벼루, 대나무 붓이 정갈하게 놓인 해정철학원 작명연구원의 전통 서재"
                    className="w-full h-full object-cover object-center"
                    fallbackTitle="해정철학원 작명연구원"
                    fallbackSubtitle="전통 명리학의 원리와 정성"
                  />
                </div>
              </div>
            </div>

            {/* Full-width 4-column summary strip below hero split */}
            <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 border border-[#E5E0D8] bg-white">
              <div className="p-5 sm:p-6 border-b lg:border-b-0 border-r border-[#E5E0D8]">
                <p className="text-xs text-[#52525B] mb-1">연구원 대표</p>
                <p className="font-serif text-base sm:text-lg font-semibold text-[#18181B]">
                  {INSTITUTE_INFO.director} 원장
                </p>
              </div>
              <div className="p-5 sm:p-6 border-b lg:border-b-0 lg:border-r border-[#E5E0D8]">
                <p className="text-xs text-[#52525B] mb-1">작명 상담 분야</p>
                <p className="font-serif text-base sm:text-lg font-semibold text-[#18181B]">
                  아기 이름 · 개명 · 상호
                </p>
              </div>
              <div className="p-5 sm:p-6 border-r border-[#E5E0D8]">
                <p className="text-xs text-[#52525B] mb-1">명리 상담 분야</p>
                <p className="font-serif text-base sm:text-lg font-semibold text-[#18181B]">
                  사주 · 궁합 · 택일
                </p>
              </div>
              <div className="p-5 sm:p-6">
                <p className="text-xs text-[#52525B] mb-1">대표 상담 전화</p>
                <a
                  href={INSTITUTE_INFO.phoneMainHref}
                  className="font-serif text-base sm:text-lg font-semibold text-[#9A2B26] hover:underline tabular-nums inline-block"
                >
                  {INSTITUTE_INFO.phoneMain}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Section 1: 해정철학원 소개 */}
        <section id="about" className="py-16 lg:py-24 border-b border-[#E5E0D8] bg-white">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              <div className="lg:col-span-5 order-2 lg:order-1">
                <figure>
                  <div className="aspect-[4/3] border border-[#E5E0D8] bg-[#F3EFE8] overflow-hidden">
                    <ResilientImage
                      src={aboutSealImg}
                      alt="전통 한지와 조각된 석재 낙관, 고서적이 놓여 있는 모습"
                      className="w-full h-full object-cover object-center"
                      fallbackTitle="전통 명리학의 원리"
                      fallbackSubtitle="정성과 깊은 고민으로 빚는 이름"
                    />
                  </div>
                  <figcaption className="text-xs font-serif text-[#52525B] mt-3">
                    전통 명리학의 원리를 바탕으로 한 분 한 분의 이름을 깊이 고민합니다.
                  </figcaption>
                </figure>
              </div>

              <div className="lg:col-span-7 order-1 lg:order-2">
                <p className="text-xs font-medium tracking-wider text-[#9A2B26] mb-3">
                  {ABOUT_COPY.sectionTitle}
                </p>
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#18181B] leading-[1.35] mb-6 max-w-2xl">
                  {ABOUT_COPY.headline}
                </h2>
                <div className="space-y-4 text-[15px] sm:text-base text-[#3F3F46] leading-[1.8] max-w-2xl">
                  {ABOUT_COPY.paragraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-[#E5E0D8] flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-[#52525B]">
                  <span>대표 {INSTITUTE_INFO.director}</span>
                  <span aria-hidden="true">·</span>
                  <span>전통 명리학 기반 정통 작명</span>
                  <span aria-hidden="true">·</span>
                  <span className="tabular-nums">대표전화 {INSTITUTE_INFO.phoneMain}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: 주요 상담 서비스 */}
        <section id="services" className="py-16 lg:py-24 border-b border-[#E5E0D8] bg-[#FAF8F4]">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#E5E0D8]">
              <div>
                <p className="text-xs font-medium tracking-wider text-[#9A2B26] mb-2">
                  상담 분야 안내
                </p>
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#18181B]">
                  주요 상담 서비스
                </h2>
              </div>

              {/* Interactive filter tabs */}
              <div
                role="tablist"
                aria-label="상담 분야 분류"
                className="inline-flex items-center gap-1 p-1 bg-[#EFEBE3] border border-[#E0DAD0] self-start md:self-auto"
              >
                <button
                  type="button"
                  role="tab"
                  aria-selected={selectedCategory === 'all'}
                  onClick={() => setSelectedCategory('all')}
                  className={`min-h-[40px] px-4 py-1.5 text-xs font-medium transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#9A2B26] ${
                    selectedCategory === 'all'
                      ? 'bg-white text-[#18181B] shadow-xs'
                      : 'text-[#52525B] hover:text-[#18181B]'
                  }`}
                >
                  전체 보기
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={selectedCategory === 'naming'}
                  onClick={() => setSelectedCategory('naming')}
                  className={`min-h-[40px] px-4 py-1.5 text-xs font-medium transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#9A2B26] ${
                    selectedCategory === 'naming'
                      ? 'bg-white text-[#18181B] shadow-xs'
                      : 'text-[#52525B] hover:text-[#18181B]'
                  }`}
                >
                  작명 상담
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={selectedCategory === 'destiny'}
                  onClick={() => setSelectedCategory('destiny')}
                  className={`min-h-[40px] px-4 py-1.5 text-xs font-medium transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#9A2B26] ${
                    selectedCategory === 'destiny'
                      ? 'bg-white text-[#18181B] shadow-xs'
                      : 'text-[#52525B] hover:text-[#18181B]'
                  }`}
                >
                  사주 · 궁합 · 택일
                </button>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredServices.map((service, index) => {
                const isLeadFeature =
                  selectedCategory === 'all' && index === 0;
                return (
                  <article
                    key={service.id}
                    className={`bg-white border border-[#E5E0D8] p-6 sm:p-8 flex flex-col justify-between transition-colors duration-150 hover:border-[#C9C0B1] ${
                      isLeadFeature ? 'md:col-span-2' : ''
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-4 mb-4 pb-3 border-b border-[#F1EDE6]">
                        <span className="font-serif text-base font-semibold text-[#9A2B26] tabular-nums">
                          {service.number}
                        </span>
                        <span className="text-xs text-[#52525B]">
                          {service.categoryLabel}
                        </span>
                      </div>

                      <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#18181B] mb-2">
                        {service.title}
                      </h3>
                      <p className="font-serif text-base text-[#27272A] mb-3">
                        {service.lead}
                      </p>
                      <div className="space-y-2 text-[15px] text-[#52525B] leading-relaxed max-w-2xl">
                        {service.paragraphs.map((p, idx) => (
                          <p key={idx}>{p}</p>
                        ))}
                      </div>
                    </div>

                    <div className="mt-7 pt-5 border-t border-[#F1EDE6] flex flex-wrap items-center justify-between gap-3">
                      <button
                        type="button"
                        onClick={() => openConsultationModal(service)}
                        className="min-h-[44px] px-5 py-2.5 text-sm font-medium text-[#18181B] bg-[#FAF8F4] hover:bg-[#9A2B26] hover:text-white border border-[#D8D1C4] hover:border-[#9A2B26] inline-flex items-center gap-2 transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9A2B26]"
                      >
                        <Phone className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>{service.ctaLabel}</span>
                      </button>

                      <a
                        href={INSTITUTE_INFO.phoneMainHref}
                        className="text-xs font-medium text-[#52525B] hover:text-[#18181B] tabular-nums py-2 whitespace-nowrap shrink-0"
                      >
                        바로 전화: {INSTITUTE_INFO.phoneMain}
                      </a>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section 3: 상담 안내 */}
        <section id="consultation" className="py-16 lg:py-24 bg-[#1C1917] text-[#FAF8F4]">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              <div className="lg:col-span-6">
                <p className="text-xs font-medium tracking-wider text-[#D6CEBE] mb-3">
                  {CONSULTATION_GUIDE.sectionTitle}
                </p>
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#FAF8F4] leading-[1.35] mb-4">
                  {CONSULTATION_GUIDE.lead}
                </h2>
                <p className="text-[15px] sm:text-base text-[#D6D3D1] leading-relaxed max-w-xl mb-8">
                  {CONSULTATION_GUIDE.description}
                </p>

                <button
                  type="button"
                  onClick={() => openConsultationModal(null)}
                  className="min-h-[48px] px-6 py-3 text-sm font-medium text-white bg-[#9A2B26] hover:bg-[#B2342E] inline-flex items-center gap-2.5 transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  <Phone className="w-4 h-4" aria-hidden="true" />
                  <span>{CONSULTATION_GUIDE.ctaLabel}</span>
                </button>
              </div>

              <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-[#262320] border border-[#3A3531] p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-[#D6CEBE] mb-3">
                      <span className="text-xs tracking-wide">대표 상담 전화</span>
                      <Phone className="w-4 h-4" aria-hidden="true" />
                    </div>
                    <a
                      href={INSTITUTE_INFO.phoneMainHref}
                      className="font-serif text-2xl sm:text-[1.65rem] font-semibold text-white hover:text-[#F5EBE0] tabular-nums block"
                    >
                      {INSTITUTE_INFO.phoneMain}
                    </a>
                  </div>
                  <div className="mt-6 pt-4 border-t border-[#3A3531] flex items-center justify-between gap-2">
                    <a
                      href={INSTITUTE_INFO.phoneMainHref}
                      className="text-xs font-medium text-[#F5EBE0] hover:underline whitespace-nowrap"
                    >
                      전화 연결하기
                    </a>
                    <button
                      type="button"
                      onClick={() => handleCopyNumber(INSTITUTE_INFO.phoneMain, 'main')}
                      className="min-h-[36px] px-2.5 py-1 text-xs text-[#D6D3D1] hover:text-white inline-flex items-center gap-1 transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-white"
                    >
                      {copiedDirect === 'main' ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-[#86EFAC]" aria-hidden="true" />
                          <span>복사됨</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                          <span>번호 복사</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                <div className="bg-[#262320] border border-[#3A3531] p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-[#D6CEBE] mb-3">
                      <span className="text-xs tracking-wide">휴대전화 상담</span>
                      <Smartphone className="w-4 h-4" aria-hidden="true" />
                    </div>
                    <a
                      href={INSTITUTE_INFO.phoneMobileHref}
                      className="font-serif text-2xl sm:text-[1.65rem] font-semibold text-white hover:text-[#F5EBE0] tabular-nums block"
                    >
                      {INSTITUTE_INFO.phoneMobile}
                    </a>
                  </div>
                  <div className="mt-6 pt-4 border-t border-[#3A3531] flex items-center justify-between gap-2">
                    <a
                      href={INSTITUTE_INFO.phoneMobileHref}
                      className="text-xs font-medium text-[#F5EBE0] hover:underline whitespace-nowrap"
                    >
                      휴대전화 연결
                    </a>
                    <button
                      type="button"
                      onClick={() => handleCopyNumber(INSTITUTE_INFO.phoneMobile, 'mobile')}
                      className="min-h-[36px] px-2.5 py-1 text-xs text-[#D6D3D1] hover:text-white inline-flex items-center gap-1 transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-white"
                    >
                      {copiedDirect === 'mobile' ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-[#86EFAC]" aria-hidden="true" />
                          <span>복사됨</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                          <span>번호 복사</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: 자주 묻는 질문 */}
        <section id="faq" className="py-16 lg:py-24 bg-white border-b border-[#E5E0D8]">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
              <div className="lg:col-span-4">
                <p className="text-xs font-medium tracking-wider text-[#9A2B26] mb-2">
                  자주 묻는 질문
                </p>
                <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#18181B] mb-3">
                  상담 전 궁금한 점을 확인해 보세요
                </h2>
                <p className="text-sm text-[#52525B] leading-relaxed">
                  더 자세한 상담 절차와 방문 안내는 대표전화({INSTITUTE_INFO.phoneMain})로
                  문의해 주시면 성실히 답변해 드립니다.
                </p>
              </div>

              <div className="lg:col-span-8 border-t border-[#E5E0D8]">
                {FAQ_ITEMS.map((item) => {
                  const isOpen = openFaqId === item.id;
                  return (
                    <div key={item.id} className="border-b border-[#E5E0D8]">
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        onClick={() =>
                          setOpenFaqId((prev) => (prev === item.id ? '' : item.id))
                        }
                        className="w-full min-h-[56px] py-5 text-left flex items-center justify-between gap-4 group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9A2B26]"
                      >
                        <span className="font-serif text-base sm:text-lg font-medium text-[#18181B] group-hover:text-[#9A2B26] transition-colors duration-150">
                          <span className="text-[#9A2B26] mr-2">Q.</span>
                          {item.question}
                        </span>
                        <ChevronDown
                          className={`w-5 h-5 text-[#52525B] shrink-0 transition-transform duration-150 ${
                            isOpen ? 'rotate-180 text-[#9A2B26]' : ''
                          }`}
                          aria-hidden="true"
                        />
                      </button>

                      {isOpen && (
                        <div className="pb-5 pr-8 text-[15px] text-[#3F3F46] leading-relaxed">
                          <span className="font-serif font-semibold text-[#18181B] mr-2">
                            A.
                          </span>
                          {item.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Quiet Institutional Footer */}
      <footer className="bg-[#FAF8F4] py-12 lg:py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-[#E5E0D8]">
            <div className="md:col-span-6">
              <p className="font-serif text-xl font-semibold text-[#18181B] mb-2">
                {INSTITUTE_INFO.name}
              </p>
              <p className="text-sm text-[#52525B] max-w-md leading-relaxed">
                {INSTITUTE_INFO.closingMessage}
              </p>
            </div>

            <div className="md:col-span-6 md:text-right space-y-1.5 text-sm text-[#3F3F46]">
              <p>
                <span className="text-[#52525B] mr-2">대표</span>
                <span className="font-medium text-[#18181B]">{INSTITUTE_INFO.director}</span>
              </p>
              <p className="tabular-nums">
                <span className="text-[#52525B] mr-2">대표전화</span>
                <a
                  href={INSTITUTE_INFO.phoneMainHref}
                  className="font-medium text-[#18181B] hover:text-[#9A2B26] transition-colors"
                >
                  {INSTITUTE_INFO.phoneMain}
                </a>
              </p>
              <p className="tabular-nums">
                <span className="text-[#52525B] mr-2">휴대전화</span>
                <a
                  href={INSTITUTE_INFO.phoneMobileHref}
                  className="font-medium text-[#18181B] hover:text-[#9A2B26] transition-colors"
                >
                  {INSTITUTE_INFO.phoneMobile}
                </a>
              </p>
              <p className="tabular-nums">
                <span className="text-[#52525B] mr-2">팩스</span>
                <span>{INSTITUTE_INFO.fax}</span>
              </p>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-[#52525B]">
            <p>© {new Date().getFullYear()} {INSTITUTE_INFO.name}. All rights reserved.</p>
            <div className="flex items-center gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="hover:text-[#18181B] transition-colors whitespace-nowrap"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      <ConsultationModal
        isOpen={modalOpen}
        service={activeService}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
}
