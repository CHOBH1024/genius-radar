import React, { useState } from 'react';
import { BookOpen, ChevronDown, ChevronUp } from 'lucide-react';

interface Column {
  title: string;
  category: string;
  content: string;
}

const columnsData: Column[] = [
  {
    title: '하워드 가드너의 다차원 지능 이론 — 나만의 숨겨진 천재성 찾기',
    category: '다차원 지능',
    content: '전통적인 학업 성취 중심의 IQ 지표는 인간이 가진 무궁무진한 재능과 역량을 일면만 평가하는 한계를 지니고 있습니다. 심리학자 하워드 가드너(Howard Gardner)가 제안한 "다차원 지능 이론(Theory of Multiple Intelligences)"은 언어, 논리수학, 공간, 신체운동, 음악, 대인관계, 개인성찰, 자연친화 등 최소 8가지 이상의 독립된 지능이 존재한다고 주장합니다. 이는 모든 인간이 자신만의 고유한 뇌 기능적 강점 영역, 즉 "1%의 천재성"을 타고난다는 과학적 근거가 됩니다. 예를 들어 학창 시절 수학 점수가 낮았더라도, 타인의 감정을 본능적으로 해독하고 신뢰를 얻어내는 대인관계 지능이 극도로 발달한 사람은 훌륭한 비즈니스 협상가나 리더로 대성할 수 있습니다. 지능 분석을 통해 자신이 어떤 정보 영역에서 가장 빠르고 효율적으로 연산하는지 파악하는 것은 진정한 재능 활성화의 첫걸음입니다.'
  },
  {
    title: '창의적 사고를 극대화하는 뇌 훈련법과 몰입(Flow) 상태 진입법',
    category: '뇌 과학',
    content: '창의성은 타고난 천재들만의 전유물이 아니라, 적절한 자극과 훈련을 통해 진화하는 뇌 신경망의 활성화 상태입니다. 심리학자 미하이 칙센트미하이(Mihaly Csikszentmihalyi)가 주창한 "몰입(Flow)" 상태는 자신의 역량 한계치에 딱 부합하는 적절한 도전적 과제를 수행할 때, 시간의 흐름조차 잊은 채 고도의 집중력을 발휘하는 뇌의 최적화 단계입니다. 몰입에 도달하기 위해서는 우선 스마트폰 등 모든 주의 분산 요소를 완벽히 통제하고, 명확하고 달성 가능한 단위의 마이크로 목표를 수립해야 합니다. 또한, 완전히 다른 이질적인 지식 분야(예: 예술과 코딩, 인문학과 데이터)를 머릿속에서 의도적으로 충돌시켜 시냅스의 새로운 연결망을 자극하는 방법도 효과적입니다. 이러한 뇌 훈련은 창의적 아이디어 구상 속도를 가속하며, 성취 감각과 내적 즐거움을 충전하여 개인의 업무 전문성을 극적인 경지로 이끌어 줍니다.'
  },
  {
    title: '잠재력을 가치로 바꾸는 5단계 자기 계발 로드맵',
    category: '자기계발',
    content: '숨겨진 원석 상태의 잠재력을 시장에서 검증된 강력한 비즈니스 가치로 가꾸기 위해서는 체계적인 자기 계발 시스템을 내면화해야 합니다. 첫 단계는 "메타인지를 통한 자기 탐색"으로, 나의 재능 영역과 인격 성향을 정밀 짚어내는 작업입니다. 두 번째는 "스킬 컬렉션(Skill Collection)"인데, 내 핵심 무기를 보좌해 줄 수 있는 부가 역량들(예: 개발자의 스피치 역량, 마케터의 데이터 역량)을 영리하게 수집하는 과정입니다. 세 번째는 "작은 피드백 루프 작동"으로, 머릿속 공상이 아닌 작은 프로덕트나 글을 필드에 노출해 타인의 즉각적인 비판과 피드백을 축적하는 일입니다. 네 번째는 "오답 노트를 통한 자기 교정"으로, 시행착오 속에서 배운 학습 데이터를 체계적인 매뉴얼로 자산화하는 것입니다. 마지막 다섯 번째는 "전문성 생태계 구축"으로, 확보된 내 지식을 동료들과 아낌없이 공유하며 집단 리더십을 확보하는 궁극의 성장 단계입니다.'
  },
  {
    title: '실패를 학습 데이터로 전환하는 회복탄력성 키우기',
    category: '회복탄력성',
    content: '자기계발과 도전의 여정에서 실패는 피할 수 없는 동반자입니다. 성장의 천재라 불리는 사람들의 진짜 특징은 실패하지 않는 것이 아니라, 실패했을 때 뇌가 받는 부정적 스트레스를 "귀중한 학습 데이터의 획득"으로 즉시 재정의(Reframing)하는 회복탄력성(Resilience)입니다. 이들은 예상치 못한 실수를 겪어도 감정적으로 자책하며 주저앉기보다, "가설이 틀렸음을 입증했으니 이제 다음 더 높은 확률의 플랜B로 피보팅할 타이밍"이라며 매우 차분하게 대응합니다. 이러한 강철 마음 근육을 기르기 위해서는 일의 실패와 나 자신의 가치를 이성적으로 분리수거해야 합니다. 내가 겪은 장애물의 구체적 맥락을 일지 형태로 객관화해 적어내려가는 메타인지 복기법은 정서적 불안감을 해소하고 오답을 성공 공식으로 빠르게 치환하는 든든한 디딤돌 역할을 해 줍니다.'
  },
  {
    title: '융합형 인재(폴리매스)가 21세기 비즈니스를 주도하는 이유',
    category: '비즈니스 트렌드',
    content: '하나의 직무 전문성만으로는 급변하는 AI 혁신 시대에 생존하기 어렵습니다. 오늘날 시장이 가장 강력하게 요구하는 인재는 깊이 있는 하나의 직무 무기 위에 여러 이종 영역의 안목을 T자형으로 결합한 "융합형 인재(Polymath)"입니다. 이들은 개발자처럼 논리적으로 사상하되 디자이너처럼 유려하게 시각화할 수 있고, 기획자처럼 비전을 기획하되 마케터처럼 정교한 타겟 스나이핑을 날립니다. 서로 안 맞아 보이는 독립된 자원들을 결합해 새로운 가치를 연금술처럼 캐내는 융합형 역량은 조직 내부의 사일로(Silo)를 박살내고 강력한 혁신 솔루션을 도출합니다. 다양한 직무의 스킬셋을 지속적으로 수집하고 결합하는 지식 융합 모험은 개인의 커리어 대체 불가능성을 극한으로 높이며, 기하급수적으로 다변화하는 현대 핀테크 및 비즈니스 전쟁터의 최종 승리자가 되는 지름길입니다.'
  }
];

export const AdsensePassSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-4xl mx-auto my-12 px-6 py-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-left">
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
        <BookOpen className="w-6 h-6 text-violet-400" />
        <h2 className="text-xl font-bold text-white tracking-wide">
          Knowledge Hub &amp; 전문가 칼럼
        </h2>
      </div>
      
      <p className="text-sm text-gray-400 mb-6 leading-relaxed">
        본 진단 시스템은 다차원 잠재력 지능 분석과 개인의 고유 강점 진단을 제공하며, 
        아래 칼럼 섹션은 창의성 훈련 및 인적 자원 역량 고도화를 위해 정기적으로 업데이트되는 지식 아카이브입니다.
      </p>

      <div className="space-y-4">
        {columnsData.map((column, index) => {
          const isOpen = openIndex === index;
          return (
            <div 
              key={index}
              className="rounded-xl border border-white/5 bg-white/5 overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-5 py-4 flex items-center justify-between gap-4 text-left transition-colors duration-200 hover:bg-white/5"
              >
                <div className="flex-1">
                  <span className="inline-block px-2 py-0.5 mb-1.5 text-xs font-semibold rounded bg-violet-500/20 text-violet-300">
                    {column.category}
                  </span>
                  <h3 className="text-base font-semibold text-white leading-snug">
                    {column.title}
                  </h3>
                </div>
                <div>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-violet-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </div>
              </button>

              <div 
                className={`transition-all duration-300 ease-in-out ${
                  isOpen ? 'max-h-[800px] border-t border-white/5 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
                }`}
              >
                <div className="p-5 text-sm text-gray-300 leading-relaxed font-light whitespace-pre-line">
                  {column.content}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
