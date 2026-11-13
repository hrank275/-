import { useEffect, useState } from 'react';
import { Phone, Smartphone, Copy, Check, X } from 'lucide-react';
import { ConsultationService, INSTITUTE_INFO } from '../data/instituteData';

interface ConsultationModalProps {
  isOpen: boolean;
  service: ConsultationService | null;
  onClose: () => void;
}

export function ConsultationModal({
  isOpen,
  service,
  onClose,
}: ConsultationModalProps) {
  const [copiedKey, setCopiedKey] = useState<'main' | 'mobile' | null>(null);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopy = async (text: string, key: 'main' | 'mobile') => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedKey(key);
      window.setTimeout(() => {
        setCopiedKey((current) => (current === key ? null : current));
      }, 2000);
    } catch {
      // Fallback ignored if clipboard permissions are restricted
    }
  };

  const title = service ? `${service.title} 전화 문의` : '전화 상담 안내';
  const subtitle = service
    ? service.lead
    : '궁금하신 사항은 전화로 편하게 문의하시면 친절하게 안내해 드립니다.';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-[2px]"
      role="dialog"
      aria-modal="true"
      aria-labelledby="consultation-modal-title"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg bg-[#FAF8F4] border border-[#DED8CE] shadow-xl p-6 sm:p-8 text-[#18181B]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 pb-5 border-b border-[#E5E0D8]">
          <div>
            <p className="text-xs font-medium tracking-wider text-[#9A2B26] mb-1.5">
              {INSTITUTE_INFO.name} · 대표 {INSTITUTE_INFO.director}
            </p>
            <h3
              id="consultation-modal-title"
              className="font-serif text-xl sm:text-2xl font-semibold text-[#18181B]"
            >
              {title}
            </h3>
            <p className="text-sm text-[#52525B] mt-1.5">{subtitle}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="상담 안내 닫기"
            className="min-w-[44px] min-h-[44px] flex items-center justify-center text-[#52525B] hover:text-[#18181B] hover:bg-[#EFEBE3] transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9A2B26]"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        {service && service.prepGuide.length > 0 && (
          <div className="py-5 border-b border-[#E5E0D8]">
            <p className="text-xs font-semibold text-[#18181B] mb-2.5">
              전화 상담 시 미리 확인해 주시면 좋은 내용
            </p>
            <ul className="space-y-2 text-sm text-[#3F3F46]">
              {service.prepGuide.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="font-serif text-xs text-[#9A2B26] mt-1 tabular-nums shrink-0">
                    0{idx + 1}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="pt-5 space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-white border border-[#E5E0D8]">
            <div>
              <span className="text-xs text-[#52525B] block">대표 상담 전화</span>
              <span className="font-serif text-lg font-semibold text-[#18181B] tabular-nums">
                {INSTITUTE_INFO.phoneMain}
              </span>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={() => handleCopy(INSTITUTE_INFO.phoneMain, 'main')}
                className="min-h-[44px] px-3 py-2 text-xs font-medium text-[#3F3F46] bg-[#F5F2EC] hover:bg-[#EAE4D9] border border-[#E0DAD0] inline-flex items-center gap-1.5 transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9A2B26]"
              >
                {copiedKey === 'main' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#1B4332]" aria-hidden="true" />
                    <span>복사됨</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>번호 복사</span>
                  </>
                )}
              </button>
              <a
                href={INSTITUTE_INFO.phoneMainHref}
                className="min-h-[44px] px-4 py-2 text-xs font-medium text-white bg-[#9A2B26] hover:bg-[#7F221E] inline-flex items-center gap-1.5 transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9A2B26]"
              >
                <Phone className="w-3.5 h-3.5" aria-hidden="true" />
                <span>전화 걸기</span>
              </a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-white border border-[#E5E0D8]">
            <div>
              <span className="text-xs text-[#52525B] block">휴대전화 상담</span>
              <span className="font-serif text-lg font-semibold text-[#18181B] tabular-nums">
                {INSTITUTE_INFO.phoneMobile}
              </span>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={() => handleCopy(INSTITUTE_INFO.phoneMobile, 'mobile')}
                className="min-h-[44px] px-3 py-2 text-xs font-medium text-[#3F3F46] bg-[#F5F2EC] hover:bg-[#EAE4D9] border border-[#E0DAD0] inline-flex items-center gap-1.5 transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9A2B26]"
              >
                {copiedKey === 'mobile' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#1B4332]" aria-hidden="true" />
                    <span>복사됨</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>번호 복사</span>
                  </>
                )}
              </button>
              <a
                href={INSTITUTE_INFO.phoneMobileHref}
                className="min-h-[44px] px-4 py-2 text-xs font-medium text-[#18181B] bg-[#EFEBE3] hover:bg-[#E4DEC9] border border-[#D8D1C4] inline-flex items-center gap-1.5 transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9A2B26]"
              >
                <Smartphone className="w-3.5 h-3.5" aria-hidden="true" />
                <span>휴대전화 연결</span>
              </a>
            </div>
          </div>

          <p className="text-xs text-[#52525B] pt-1 text-center">
            팩스 {INSTITUTE_INFO.fax} · 방문 위치 및 상담 일정은 전화로 안내해 드립니다.
          </p>
        </div>
      </div>
    </div>
  );
}
