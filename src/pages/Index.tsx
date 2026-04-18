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

export default function Index() {
  const [page, setPage] = useState<Page>("home");

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => setPage("home")}
            className="font-display text-lg font-medium hover:text-accent transition-colors"
          >
            Профессиональная коммуникация
          </button>
          <div className="flex items-center gap-8">
            <button
              onClick={() => setPage("home")}
              className={`font-body text-sm transition-colors ${
                page === "home"
                  ? "text-foreground font-medium border-b border-foreground pb-0.5"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Главная
            </button>
            <button
              onClick={() => setPage("lectures")}
              className={`font-body text-sm transition-colors ${
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

      {/* HOME PAGE — оформлена как вводная лекция */}
      {page === "home" && (
        <main className="max-w-3xl mx-auto px-6 py-16">
          {/* Шапка темы */}
          <div className="mb-12 pb-8 border-b border-border">
            <p className="font-body text-xs text-muted-foreground uppercase tracking-widest mb-3">Вводное занятие</p>
            <h1 className="font-display text-5xl font-light leading-tight mb-5">
              Профессиональная коммуникация
            </h1>
            <div className="flex items-center gap-5 text-muted-foreground">
              <span className="font-body text-sm flex items-center gap-1.5">
                <Icon name="Clock" size={13} /> 6 лекций
              </span>
              <span className="font-body text-sm flex items-center gap-1.5">
                <Icon name="BookOpen" size={13} /> Учебный курс
              </span>
            </div>
          </div>

          {/* Введение */}
          <section className="mb-12">
            <h2 className="font-display text-2xl font-medium mb-4">О курсе</h2>
            <div className="space-y-4 font-body text-base text-foreground leading-relaxed">
              <p>
                Коммуникация — это не просто обмен информацией. Это инструмент, который определяет, как нас воспринимают коллеги, партнёры и руководство. От того, как мы говорим, пишем и слушаем, зависит эффективность совместной работы и профессиональный рост.
              </p>
              <p>
                Данный курс охватывает ключевые аспекты профессионального общения — от деловой переписки и публичных выступлений до межкультурного взаимодействия и навыков конструктивной обратной связи.
              </p>
            </div>
          </section>

          {/* Цели курса */}
          <section className="mb-12">
            <h2 className="font-display text-2xl font-medium mb-4">Цели курса</h2>
            <ul className="space-y-3">
              {[
                "Освоить базовые принципы эффективного профессионального общения",
                "Научиться грамотно выстраивать деловую переписку и устную речь",
                "Развить навыки публичных выступлений и презентаций",
                "Изучить техники ведения переговоров и разрешения конфликтов",
                "Понять культурные особенности международной коммуникации",
              ].map((goal, i) => (
                <li key={i} className="flex items-start gap-3 font-body text-base leading-relaxed">
                  <span className="font-display text-accent text-lg leading-none mt-0.5">—</span>
                  <span>{goal}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Структура курса */}
          <section className="mb-12">
            <h2 className="font-display text-2xl font-medium mb-6">Структура курса</h2>
            <div className="space-y-0">
              {lectures.map((lecture, i) => (
                <div
                  key={i}
                  onClick={() => setPage("lectures")}
                  className="group flex items-start gap-5 py-4 border-t border-border hover:bg-secondary/30 -mx-3 px-3 transition-colors cursor-pointer"
                >
                  <span className="font-display text-lg text-muted-foreground/40 w-7 shrink-0">{lecture.number}</span>
                  <div className="flex-1 min-w-0 flex items-baseline justify-between gap-4">
                    <span className="font-body text-base">{lecture.title}</span>
                    <span className="font-body text-xs text-muted-foreground whitespace-nowrap shrink-0">{lecture.duration}</span>
                  </div>
                </div>
              ))}
              <div className="border-t border-border" />
            </div>
          </section>

          {/* Методические рекомендации */}
          <section className="mb-12">
            <h2 className="font-display text-2xl font-medium mb-4">Методические рекомендации</h2>
            <div className="space-y-4 font-body text-base text-foreground leading-relaxed">
              <p>
                Рекомендуется проходить лекции последовательно: каждая тема опирается на знания, полученные в предыдущих разделах. Для более глубокого освоения материала обращайтесь к дополнительной литературе, указанной в конце каждой лекции.
              </p>
              <p>
                Особое внимание уделяйте практическим примерам — они отражают реальные ситуации из профессиональной среды и помогают закрепить теоретические знания.
              </p>
            </div>
          </section>

          {/* Переход к лекциям */}
          <div className="border-t border-border pt-8">
            <button
              onClick={() => setPage("lectures")}
              className="inline-flex items-center gap-2 font-body text-sm text-accent hover:underline"
            >
              Перейти к лекциям <Icon name="ArrowRight" size={14} />
            </button>
          </div>
        </main>
      )}

      {/* LECTURES PAGE */}
      {page === "lectures" && (
        <main className="max-w-3xl mx-auto px-6 py-16">
          <div className="mb-10 pb-8 border-b border-border">
            <p className="font-body text-xs text-muted-foreground uppercase tracking-widest mb-3">Учебный курс</p>
            <h1 className="font-display text-5xl font-light leading-tight">Лекции</h1>
          </div>

          <div>
            {lectures.map((lecture, i) => (
              <div
                key={i}
                className="lecture-card group flex items-start gap-6 py-8 border-t border-border hover:bg-secondary/30 px-3 -mx-3 transition-colors cursor-pointer"
              >
                <span className="lecture-number font-display text-2xl text-muted-foreground/40 w-9 shrink-0 pt-0.5 transition-colors">
                  {lecture.number}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-6 mb-2">
                    <h3 className="font-display text-2xl font-medium leading-snug">{lecture.title}</h3>
                    <span className="font-body text-xs text-muted-foreground bg-muted px-2.5 py-1 whitespace-nowrap shrink-0 mt-1">
                      {lecture.topic}
                    </span>
                  </div>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed mb-3">
                    {lecture.description}
                  </p>
                  <span className="font-body text-xs text-muted-foreground/60 flex items-center gap-1.5">
                    <Icon name="Clock" size={12} /> {lecture.duration}
                  </span>
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity pt-2 shrink-0">
                  <Icon name="ChevronRight" size={16} className="text-accent" />
                </div>
              </div>
            ))}
            <div className="border-t border-border" />
          </div>
        </main>
      )}

      {/* Footer */}
      <footer className="border-t border-border mt-8">
        <div className="max-w-3xl mx-auto px-6 py-6">
          <p className="font-body text-xs text-muted-foreground">Профессиональная коммуникация · Учебный курс · 2026</p>
        </div>
      </footer>
    </div>
  );
}
