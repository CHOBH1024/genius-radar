export interface SurveyQuestion {
  c: number; // Category index (1-6)
  t: 'L' | 'R' | 'V'; // Question type
  q: string; // Question text
  left?: string; // Dilemma left
  right?: string; // Dilemma right
  descL?: string; // Dilemma desc left
  descR?: string; // Dilemma desc right
  isCrossValidation?: boolean;
  crossValidationTargetIndex?: number;
}

export interface AnswerData {
  value: number;
  latencyMs: number;
}

export interface PersonaMatch {
  type: string;
  emoji: string;
  description: string;
}

export interface SurveyResultContent {
  persona: string;
  emoji: string;
  hashtags: string[];
  headline: string;
  description: string;
  strengths: string[];
  weaknesses: string[];
  advice: string;
  workManual: string[];
  worstMatch: {
    type: string;
    description: string;
    handling: string;
  };
  bestMatch: {
    type: string;
    emoji: string;
    description: string;
  };
  // 커스텀 필드
  prescriptions?: string[]; // 번아웃용 4단계 처방전
  environmentCondition?: string; // 번아웃용 직장 환경 조건
  jobCombination?: string; // 다중지능용 조합 분석 결과
  jobComboTitle?: string; // 다중지능용 조합명
  jobComboJobs?: string[]; // 다중지능용 조합별 최적 직업군 3가지
  topJobs?: string[]; // 다중지능용 최적 직무 TOP 5
  learningMethods?: string[]; // 다중지능용 천재 학습법 3가지
  lossScenario?: string; // FX용 손실 시나리오
  tradingStrategies?: string[]; // FX용 3단계 편향 교정 트레이딩 전략
  mindControls?: string[]; // FX용 마인드 컨트롤 3가지 실천 수칙
  fxStyle?: string; // FX용 나에게 맞는 외환 투자 스타일
}

export interface SurveyConfig {
  id: string;
  name: string;
  title: string;
  subtitle: string;
  description: string; // rich intro description
  color: string;
  icon: string;
  keyPoints?: { icon: string; title: string; description: string }[];
  categories: string[];
  questions: SurveyQuestion[];
  getResultContent: (averageScore: number, categoryScores: number[], answers?: Record<number, AnswerData>) => SurveyResultContent;
}

export interface PersonaDetail {
  id: string;
  surveyId: string;
  name: string;
  emoji: string;
  shortDesc: string;
  longDescription: string;
}

export interface BlogPost {
  surveyId: string;
  title: string;
  subtitle: string;
  emoji: string;
  readTime: string;
  sections: BlogSection[];
  relatedPersonas: string[];
}

export interface BlogSection {
  heading: string;
  emoji: string;
  body: string;
  highlight?: string; // pull-quote
}
