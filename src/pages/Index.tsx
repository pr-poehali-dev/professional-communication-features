import { useState } from "react";
import Icon from "@/components/ui/icon";

type Page = "home" | "lectures";

const lectures = [
  {
    number: "01",
    title: "Основы деловой коммуникации",
    description: "Принципы эффективного общения в профессиональной среде. Вербальные и невербальные сигналы, активное слушание.",
    duration: "90 мин",
    topic: "Теория",
  },
  {
    number: "02",
    title: "Деловая переписка и email-этикет",
    description: "Структура делового письма, тон обращения, правила оформления. Как писать так, чтобы вас читали и отвечали.",
    duration: "75 мин",
    topic: "Письмо",
  },
  {
    number: "03",
    title: "Публичные выступления",
    description: "Подготовка к презентациям и докладам. Работа с аудиторией, управление волнением, структура речи.",
    duration: "120 мин",
    topic: "Речь",
  },
  {
    number: "04",
    title: "Переговоры и управление конфликтами",
    description: "Техники ведения переговоров, поиск компромиссов, де-эскалация конфликтных ситуаций.",
    duration: "90 мин",
    topic: "Практика",
  },
  {
    number: "05",
    title: "Межкультурная коммуникация",
    description: "Особенности общения с зарубежными партнёрами. Культурные различия в деловой среде и как их учитывать.",
    duration: "80 мин",
    topic: "Культура",
  },
  {
    number: "06",
    title: "Обратная связь и оценка результатов",
    description: "Как давать и принимать конструктивную критику. Модели обратной связи: SBI, бутерброд, STAR.",
    duration: "70 мин",
    topic: "Практика",
  },
];

const pillars = [
  { icon: "BookOpen", title: "Структурированный курс", text: "6 тематических блоков с постепенным углублением материала" },
  { icon: "Users", title: "Практический фокус", text: "Реальные кейсы и разборы ситуаций из профессиональной жизни" },
  { icon: "FileText", title: "Учебные материалы", text: "Конспекты, схемы и дополнительная литература к каждой теме" },
];

export default function Index() {
  const [page, setPage] = useState<Page>("home");

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => setPage("home")}
            className="font-display text-xl font-semibold tracking-wide hover:text-accent transition-colors"
          >
            Профкоммуникация
          </button>
          <div className="flex items-center gap-8">
            <button
              onClick={() => setPage("home")}
              className={`font-body text-sm tracking-wide transition-colors ${
                page === "home"
                  ? "text-foreground font-medium border-b border-foreground pb-0.5"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Главная
            </button>
            <button
              onClick={() => setPage("lectures")}
              className={`font-body text-sm tracking-wide transition-colors ${
                page === "lectures"
                  ? "text-foreground font-medium border-b border-foreground pb-0.5"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Лекции
            </button>
          </div>
        </div>
      </nav>

      {/* HOME PAGE */}
      {page === "home" && (
        <main>
          {/* Hero */}
          <section className="max-w-5xl mx-auto px-6 pt-24 pb-20">
            <div className="max-w-2xl animate-slide-up stagger-1">
              <p className="font-body text-sm text-accent font-medium tracking-widest uppercase mb-6">
                Учебный курс
              </p>
              <h1 className="font-display text-6xl md:text-7xl font-light leading-[1.1] mb-8 text-foreground">
                Профессиональная
                <br />
                <em className="italic">коммуникация</em>
              </h1>
              <p className="font-body text-lg text-muted-foreground leading-relaxed mb-10 max-w-lg">
                Курс для тех, кто хочет говорить убедительно, писать чётко и выстраивать продуктивные отношения в профессиональной среде.
              </p>
              <button
                onClick={() => setPage("lectures")}
                className="inline-flex items-center gap-3 bg-primary text-primary-foreground font-body text-sm font-medium px-7 py-3.5 hover:bg-primary/90 transition-colors"
              >
                Перейти к лекциям
                <Icon name="ArrowRight" size={16} />
              </button>
            </div>

            {/* Stats */}
            <div className="mt-20 grid grid-cols-3 gap-px bg-border animate-fade-in stagger-3">
              <div className="bg-background p-8 text-center">
                <p className="font-display text-4xl font-light text-foreground mb-1">6</p>
                <p className="font-body text-sm text-muted-foreground">лекций</p>
              </div>
              <div className="bg-background p-8 text-center">
                <p className="font-display text-4xl font-light text-foreground mb-1">8+</p>
                <p className="font-body text-sm text-muted-foreground">часов материала</p>
              </div>
              <div className="bg-background p-8 text-center">
                <p className="font-display text-4xl font-light text-foreground mb-1">∞</p>
                <p className="font-body text-sm text-muted-foreground">доступ к материалам</p>
              </div>
            </div>
          </section>

          <div className="border-t border-border" />

          {/* Pillars */}
          <section className="max-w-5xl mx-auto px-6 py-20">
            <h2 className="font-display text-4xl font-light mb-14">Что вы получите</h2>
            <div className="grid md:grid-cols-3 gap-10">
              {pillars.map((item, i) => (
                <div key={i}>
                  <div className="w-10 h-10 border border-border flex items-center justify-center mb-5">
                    <Icon name={item.icon} size={18} className="text-accent" />
                  </div>
                  <h3 className="font-display text-xl font-medium mb-3">{item.title}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="border-t border-border" />

          {/* Preview lectures */}
          <section className="max-w-5xl mx-auto px-6 py-20">
            <div className="flex items-end justify-between mb-2">
              <h2 className="font-display text-4xl font-light">Программа курса</h2>
              <button
                onClick={() => setPage("lectures")}
                className="font-body text-sm text-accent hover:underline flex items-center gap-1 mb-1"
              >
                Все лекции <Icon name="ChevronRight" size={14} />
              </button>
            </div>
            <div>
              {lectures.slice(0, 3).map((lecture, i) => (
                <div
                  key={i}
                  onClick={() => setPage("lectures")}
                  className="lecture-card group flex items-start gap-6 py-6 border-t border-border hover:bg-secondary/40 px-3 -mx-3 transition-colors cursor-pointer"
                >
                  <span className="lecture-number font-display text-2xl text-muted-foreground/40 w-8 shrink-0 transition-colors">
                    {lecture.number}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4">
                      <h4 className="font-display text-xl font-medium leading-tight">{lecture.title}</h4>
                      <span className="font-body text-xs text-muted-foreground bg-muted px-2 py-1 whitespace-nowrap shrink-0">
                        {lecture.topic}
                      </span>
                    </div>
                    <p className="font-body text-sm text-muted-foreground mt-1.5 leading-relaxed">{lecture.description}</p>
                  </div>
                </div>
              ))}
              <div className="border-t border-border" />
            </div>
          </section>

          {/* Footer */}
          <footer className="border-t border-border">
            <div className="max-w-5xl mx-auto px-6 py-8 flex items-center justify-between">
              <p className="font-display text-lg font-medium">Профкоммуникация</p>
              <p className="font-body text-xs text-muted-foreground">Образовательный курс · 2026</p>
            </div>
          </footer>
        </main>
      )}

      {/* LECTURES PAGE */}
      {page === "lectures" && (
        <main className="max-w-5xl mx-auto px-6 py-16">
          <div className="mb-14">
            <p className="font-body text-sm text-accent font-medium tracking-widest uppercase mb-4">Программа</p>
            <h1 className="font-display text-5xl font-light leading-tight">Лекции курса</h1>
          </div>

          <div>
            {lectures.map((lecture, i) => (
              <div
                key={i}
                className="lecture-card group flex items-start gap-6 py-8 border-t border-border hover:bg-secondary/40 px-3 -mx-3 transition-colors cursor-pointer"
              >
                <span className="lecture-number font-display text-3xl text-muted-foreground/40 w-10 shrink-0 pt-0.5 transition-colors">
                  {lecture.number}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-6 mb-2">
                    <h3 className="font-display text-2xl font-medium leading-snug">{lecture.title}</h3>
                    <span className="font-body text-xs text-muted-foreground bg-muted px-2.5 py-1 whitespace-nowrap shrink-0 mt-1">
                      {lecture.topic}
                    </span>
                  </div>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
                    {lecture.description}
                  </p>
                  <div className="flex items-center gap-1.5 text-muted-foreground/60">
                    <Icon name="Clock" size={13} />
                    <span className="font-body text-xs">{lecture.duration}</span>
                  </div>
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity pt-2 shrink-0">
                  <Icon name="ChevronRight" size={18} className="text-accent" />
                </div>
              </div>
            ))}
            <div className="border-t border-border" />
          </div>

          {/* Info block */}
          <div className="mt-16 bg-secondary/50 border border-border p-8 flex items-start gap-5">
            <div className="w-8 h-8 bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
              <Icon name="Info" size={15} className="text-accent" />
            </div>
            <div>
              <p className="font-display text-lg font-medium mb-1">Материалы к лекциям</p>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                К каждой лекции прилагаются конспекты, практические задания и список рекомендуемой литературы. Материалы доступны после просмотра соответствующей лекции.
              </p>
            </div>
          </div>
        </main>
      )}
    </div>
  );
}