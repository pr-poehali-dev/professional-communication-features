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

      {/* HOME PAGE — лекция о терминологии */}
      {page === "home" && (
        <main className="max-w-3xl mx-auto px-6 py-16">

          {/* Шапка лекции */}
          <div className="mb-12 pb-8 border-b border-border">
            <p className="font-body text-xs text-muted-foreground uppercase tracking-widest mb-3">Лекция</p>
            <h1 className="font-display text-5xl font-light leading-tight mb-5">
              Терминология и профессиональная лексика
            </h1>
            <div className="flex items-center gap-5 text-muted-foreground">
              <span className="font-body text-sm flex items-center gap-1.5">
                <Icon name="BookOpen" size={13} /> Профессиональная коммуникация
              </span>
            </div>
          </div>

          {/* 1. Что такое терминология */}
          <section className="mb-12">
            <h2 className="font-display text-2xl font-medium mb-4">1. Что такое терминология</h2>
            <div className="space-y-4 font-body text-base text-foreground leading-relaxed">
              <p>
                <strong>Терминология</strong> — это совокупность терминов, используемых в определённой области знаний или профессиональной деятельности. В отличие от слов общеупотребительного языка, термин обладает строго определённым, однозначным значением в рамках своей дисциплины.
              </p>
              <p>
                Термин выполняет несколько функций: номинативную (называет понятие), дефинитивную (раскрывает его содержание) и коммуникативную (обеспечивает точное взаимопонимание между специалистами).
              </p>
              <p>
                Важно различать <strong>термин</strong> и <strong>профессионализм</strong>. Термин — официально закреплённое слово, зафиксированное в нормативных документах и словарях. Профессионализм — неофициальное слово или выражение, бытующее в среде специалистов, но не имеющее нормативного статуса (например, «дебиторка» вместо «дебиторская задолженность»).
              </p>
            </div>
          </section>

          <div className="border-t border-border mb-12" />

          {/* 2. Профессиональная лексика */}
          <section className="mb-12">
            <h2 className="font-display text-2xl font-medium mb-4">2. Профессиональная лексика</h2>
            <div className="space-y-4 font-body text-base text-foreground leading-relaxed">
              <p>
                <strong>Профессиональная лексика</strong> — более широкое понятие, включающее все слова и выражения, характерные для речи специалистов определённой области: термины, профессионализмы, аббревиатуры, клише и устойчивые обороты делового общения.
              </p>
              <p>
                Профессиональная лексика делится на несколько пластов:
              </p>
            </div>
            <ul className="mt-4 space-y-3">
              {[
                { term: "Общенаучная лексика", def: "слова, используемые во всех научных и профессиональных текстах: «анализ», «система», «метод», «концепция»." },
                { term: "Общепрофессиональная лексика", def: "слова, общие для нескольких смежных отраслей: «менеджмент», «логистика», «бюджет»." },
                { term: "Узкоспециальная лексика", def: "термины конкретной дисциплины или отрасли, понятные только специалистам данной области." },
                { term: "Профессиональные жаргонизмы", def: "неформальная лексика, используемая в разговорной речи внутри профессионального сообщества." },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 font-body text-base leading-relaxed">
                  <span className="font-display text-accent text-lg leading-none mt-0.5 shrink-0">—</span>
                  <span><strong>{item.term}</strong> — {item.def}</span>
                </li>
              ))}
            </ul>
          </section>

          <div className="border-t border-border mb-12" />

          {/* 3. Язык специальности */}
          <section className="mb-12">
            <h2 className="font-display text-2xl font-medium mb-4">3. Язык специальности</h2>
            <div className="space-y-4 font-body text-base text-foreground leading-relaxed">
              <p>
                <strong>Язык специальности</strong> (LSP — Language for Special Purposes) — особая разновидность языка, обслуживающая профессиональную сферу общения. Он включает не только лексику, но и специфические грамматические конструкции, жанры текстов, стилистические нормы, принятые в данной области.
              </p>
              <p>
                Язык специальности формируется исторически вместе с развитием той или иной профессии или науки. Его освоение — обязательная часть профессиональной подготовки специалиста: без владения языком специальности невозможно читать профессиональную литературу, участвовать в деловой коммуникации и создавать профессиональные тексты.
              </p>
              <p>
                Ключевые характеристики языка специальности: точность и однозначность, системность, стилистическая нейтральность, насыщенность терминами, использование стандартизированных жанровых форм (отчёт, заключение, протокол, инструкция).
              </p>
            </div>
          </section>

          <div className="border-t border-border mb-12" />

          {/* 4. Отраслевые терминологические словари */}
          <section className="mb-12">
            <h2 className="font-display text-2xl font-medium mb-4">4. Отраслевые терминологические словари</h2>
            <div className="space-y-4 font-body text-base text-foreground leading-relaxed">
              <p>
                <strong>Терминологический словарь</strong> — нормативный справочник, фиксирующий термины определённой области знаний, их толкования и, в двуязычных изданиях, переводные эквиваленты. Терминологические словари являются главным инструментом стандартизации профессиональной лексики.
              </p>
              <p>
                По охвату словари делятся на:
              </p>
            </div>
            <ul className="mt-4 space-y-3">
              {[
                { term: "Универсальные", def: "охватывают несколько смежных дисциплин или всю область науки и техники." },
                { term: "Отраслевые", def: "посвящены одной конкретной отрасли: медицине, праву, строительству, финансам и т. д." },
                { term: "Одноязычные", def: "содержат термины и их определения на одном языке." },
                { term: "Двуязычные и многоязычные", def: "приводят термины и их эквиваленты на нескольких языках, незаменимы в международной профессиональной коммуникации." },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 font-body text-base leading-relaxed">
                  <span className="font-display text-accent text-lg leading-none mt-0.5 shrink-0">—</span>
                  <span><strong>{item.term}</strong> — {item.def}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 space-y-4 font-body text-base text-foreground leading-relaxed">
              <p>
                В России стандартизация терминологии осуществляется через систему государственных стандартов (ГОСТ). Многие отрасли имеют собственные ГОСТы на термины и определения — например, ГОСТ Р ИСО серий для технических и управленческих дисциплин.
              </p>
              <p>
                Умение пользоваться терминологическими словарями — важный профессиональный навык. Обращение к авторитетному словарю позволяет избежать терминологических ошибок, обеспечить единообразие документации и правильно использовать заимствованную лексику.
              </p>
            </div>
          </section>

          <div className="border-t border-border mb-12" />

          {/* Выводы */}
          <section className="mb-12">
            <h2 className="font-display text-2xl font-medium mb-4">Выводы</h2>
            <ul className="space-y-3">
              {[
                "Терминология обеспечивает точность и однозначность профессионального общения.",
                "Профессиональная лексика шире понятия «термин» и включает весь пласт слов, характерных для речи специалистов.",
                "Язык специальности — это целостная языковая система, которую необходимо осваивать наравне с предметными знаниями.",
                "Отраслевые терминологические словари служат нормативной базой для унификации профессиональной речи.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 font-body text-base leading-relaxed">
                  <span className="font-display text-accent text-lg leading-none mt-0.5 shrink-0">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Переход к лекциям */}
          <div className="border-t border-border pt-8">
            <button
              onClick={() => setPage("lectures")}
              className="inline-flex items-center gap-2 font-body text-sm text-accent hover:underline"
            >
              Список лекций <Icon name="ArrowRight" size={14} />
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
