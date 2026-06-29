import { useState } from 'react';
import { Sparkles, FileText, BarChart3, CheckCircle, ChevronRight } from 'lucide-react';
import { SurveyConfig } from '../types';
import { surveys } from '../data/surveys';
import { seoBio, mirrorIntros } from '../data/seoContent';

interface DashboardProps {
  onSelectSurvey: (config: SurveyConfig) => void;
  onNavigate?: (route: 'team' | 'admin' | 'columns') => void;
}

export const Dashboard = ({ onSelectSurvey, onNavigate }: DashboardProps) => {

  const triggerHaptic = (pattern: number | number[]) => {
    if (navigator.vibrate) navigator.vibrate(pattern);
  };

  const handleSelectSurvey = (id: string, mode: 'standard' | 'master' | 'column') => {
    triggerHaptic(20);
    const survey = surveys.find(s => s.id === id);
    if (survey && mode !== 'column') {
      onSelectSurvey(survey);
    } else {
      if (onNavigate) onNavigate('columns');
    }
  };

  return (
    <div className="bg-brand-bg min-h-[100dvh] pb-20 font-sans text-brand-text selection:bg-brand-accent/30">
      
      {/* ── 상단 네비게이션 ── */}
      <header className="sticky top-0 z-50 bg-brand-card/80 backdrop-blur-xl border-b border-white/5 px-6 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm font-bold text-brand-text-muted">
          <span className="text-brand-text flex items-center gap-1.5 text-base">
            Genius Radar <CheckCircle size={16} className="text-brand-accent animate-pulse" />
          </span>
          <div className="flex gap-6">
            <a href="#about" className="hover:text-brand-accent transition-colors">About</a>
            <a href="#contact" className="hover:text-brand-accent transition-colors">Contact</a>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24">
        
        {/* ── 1. Hero Section ── */}
        <section className="text-center space-y-6 pt-8 pb-12">
          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-brand-text flex flex-col md:flex-row items-center justify-center gap-4">
            <span className="text-6xl md:text-8xl">🧠</span> Genius Radar
          </h1>
          <p className="text-brand-text-muted text-lg md:text-xl leading-relaxed max-w-3xl mx-auto word-keep font-medium">
            {seoBio}
          </p>
        </section>

        {/* ── 2. Survey Start Card ── */}
        <section className="max-w-3xl mx-auto">
          {surveys.map((survey) => (
            <article key={survey.id} className="glass-card rounded-3xl p-8 lg:p-12 hover:-translate-y-1 transition-all duration-300 flex flex-col text-center">
              <span className="text-6xl mb-6">{survey.icon}</span>
              <h2 className="text-3xl font-black text-brand-text tracking-tight mb-4">{survey.title}</h2>
              <p className="text-brand-text-muted mb-8">{survey.subtitle}</p>
              
              <div className="bg-brand-bg/50 rounded-2xl p-6 mb-8 border border-white/5">
                <p className="text-sm font-bold text-brand-text-muted mb-4">9가지 천재성 페르소나 거울</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {mirrorIntros.map(mirror => (
                    <span key={mirror.id} className="text-xs font-bold text-brand-text bg-brand-card px-3 py-1.5 rounded-full border border-white/5 shadow-sm">
                      {mirror.emoji} {mirror.title}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button 
                  onClick={() => handleSelectSurvey(survey.id, 'standard')}
                  className="bg-brand-primary text-white font-bold py-4 px-6 rounded-xl text-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-md"
                >
                  <FileText size={20} /> 나의 천재성 발견하기
                </button>
                <button 
                  onClick={() => handleSelectSurvey(survey.id, 'column')}
                  className="bg-brand-card text-brand-text font-bold py-4 px-6 rounded-xl text-lg flex items-center justify-center gap-2 border border-white/10 hover:bg-brand-card/80 transition-colors"
                >
                  <BarChart3 size={20} /> 천재성 분석 칼럼
                </button>
              </div>
            </article>
          ))}
        </section>

        {/* ── 3. Science Behind ── */}
        <section className="space-y-8 pb-10">
          <div className="glass-card rounded-3xl p-10 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary rounded-full mix-blend-screen filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-accent rounded-full mix-blend-screen filter blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2"></div>
            
            <div className="relative z-10 text-center">
              <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tight">
                The Science Behind Genius Radar
              </h2>
              <p className="text-brand-text-muted mb-0 max-w-2xl mx-auto word-keep">
                단순한 흥미 위주의 테스트가 아닙니다. 하워드 가드너의 다중 지능 이론과 현대 직무 역량 모델을 융합하여 당신의 가장 뾰족하고 압도적인 무기를 분석합니다.
              </p>
            </div>
          </div>
        </section>

        {/* ── 푸터 ── */}
        <footer className="pt-16 pb-8 text-center border-t border-white/5">
          <nav className="flex flex-wrap justify-center gap-6 text-sm font-bold text-brand-text-muted mb-6">
            <a href="#about" className="hover:text-brand-text transition-colors">About Us</a>
            <a href="#contact" className="hover:text-brand-text transition-colors">Contact</a>
            <a href="/privacy.html" className="hover:text-brand-text transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-brand-text transition-colors">Terms of Service</a>
          </nav>
          <p className="text-xs text-brand-text-muted/60">
            © 2026 Genius Radar System. All rights reserved.
          </p>
        </footer>

      </main>
    </div>
  );
};
