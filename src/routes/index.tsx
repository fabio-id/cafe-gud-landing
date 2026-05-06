import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  Zap,
  Ban,
  MapPin,
  Sparkles,
  TrendingUp,
  Frown,
  Store,
  Award,
  ShieldCheck,
  AlertTriangle,
  Minus,
  Plus,
  Instagram,
  MessageCircle,
  Check,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Café Gud — Café de especialidad peruano endulzado con alulosa" },
      {
        name: "description",
        content:
          "Café peruano de especialidad endulzado con alulosa: cero calorías, energía limpia y el sabor de cafetería en tu taza diaria.",
      },
      { property: "og:title", content: "Café Gud — Café peruano con alulosa" },
      {
        property: "og:description",
        content:
          "Especialidad peruana endulzada con alulosa. Energía limpia, buen café, cero culpa.",
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Problema />
      <Solucion />
      <Origen />
      <Preorder />
      <Footer />
    </div>
  );
}

/* ---------- NAVBAR ---------- */
function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#top" className="text-base font-medium tracking-tight">
          Café <span className="text-primary">Gud</span>
        </a>
        <a
          href="#solucion"
          className="rounded-xl border border-border px-4 py-2 text-sm font-medium transition hover:bg-muted"
        >
          Más información
        </a>
      </div>
    </header>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  const tags = [
    { icon: Zap, label: "Energía limpia" },
    { icon: Ban, label: "Cero calorías" },
    { icon: MapPin, label: "Origen trazable" },
    { icon: Sparkles, label: "Sin acidez" },
  ];
  return (
    <section id="top" className="px-5 pt-16 pb-20 sm:pt-24 sm:pb-28">
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <span className="mb-5 text-xs font-medium tracking-[0.18em] text-muted-foreground">
          CAFÉ DE ESPECIALIDAD PERUANO
        </span>
        <h1 className="text-[32px] font-semibold leading-[1.1] tracking-tight sm:text-5xl">
          Amas el café.
          <br />
          <span className="text-primary">Tu cuerpo, no tanto.</span>
        </h1>
        <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
          Café Gud es especialidad peruana, endulzado con{" "}
          <span className="font-medium text-foreground">alulosa</span>: un azúcar natural
          sin calorías. Energía limpia, buen café, cero culpa.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {tags.map(({ icon: Icon, label }) => (
            <span
              key={label}
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground"
            >
              <Icon className="h-3.5 w-3.5 text-primary" strokeWidth={2.2} />
              {label}
            </span>
          ))}
        </div>

        <div className="mt-10 flex w-full flex-col items-center gap-3">
          {/* TRACKING: hero_cta_primary_click */}
          <a
            href="#preorder"
            className="inline-flex h-12 w-full max-w-[280px] items-center justify-center rounded-2xl bg-primary px-6 text-sm font-medium text-primary-foreground transition hover:scale-[1.02] hover:bg-primary/95 active:scale-[0.99]"
          >
            Separar mi lata — primer lote
          </a>
          {/* TRACKING: hero_cta_secondary_click */}
          <a
            href="#solucion"
            className="inline-flex h-12 w-full max-w-[280px] items-center justify-center rounded-2xl border border-border bg-background px-6 text-sm font-medium transition hover:bg-muted"
          >
            Ver cómo funciona
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------- PROBLEMA ---------- */
function Problema() {
  return (
    <section className="px-5 py-20 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeader eyebrow="EL PROBLEMA" title="Si tomas café todos los días, esto te suena." />
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          <ProblemCard
            icon={TrendingUp}
            title="Café con azúcar"
            text="Glucosa alta, bajón a las 11am y culpa después de cada taza."
          />
          <ProblemCard
            icon={Frown}
            title="Café negro puro"
            text="Tendrías que renunciar al sabor que te gusta. No es para todos."
          />
          <div className="sm:col-span-2">
            <ProblemCard
              icon={Store}
              title="Cafetería de especialidad"
              text="El nivel de calidad que mereces existe — pero a S/15 la taza no es para todos los días."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ProblemCard({
  icon: Icon,
  title,
  text,
}: {
  icon: any;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-border bg-background p-6">
      <Icon className="h-6 w-6 text-muted-foreground" strokeWidth={1.8} />
      <h3 className="mt-4 text-lg font-medium">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
    </div>
  );
}

/* ---------- SOLUCIÓN ---------- */
function Solucion() {
  return (
    <section id="solucion" className="bg-cream px-5 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <SectionHeader eyebrow="LA SOLUCIÓN" title="Así es diferente Café Gud." />
        <div className="mt-12 space-y-6">
          <SolutionRow
            icon={Award}
            title="Café de especialidad peruano"
            text="Granos trazables, tostados con perfil. Notas a caramelo, cuerpo redondo. La calidad de cafetería en tu taza diaria."
          />
          <SolutionRow
            icon={Sparkles}
            highlight
            title="Endulzado con alulosa — único en Perú"
            text={
              <>
                La <strong className="font-semibold text-foreground">alulosa</strong> es un azúcar
                natural complejo que carameliza igual que el azúcar de mesa, pero no tiene
                calorías significativas y no eleva la glucosa en sangre. Sin regusto raro. Es
                lo que hace a Café Gud diferente a cualquier otro café que hayas probado.
              </>
            }
          />
          <SolutionRow
            icon={Zap}
            title="Energía limpia, sin problemas de acidez"
            text={
              <>
                Cafeína que mantiene tu energía estable toda la mañana, sin temblor, sin bajón
                y sin ardor de estómago.
                <span className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-accent px-2.5 py-1 text-xs font-medium text-accent-foreground">
                  <ShieldCheck className="h-3.5 w-3.5" /> Sin acidez
                </span>
              </>
            }
          />
        </div>
      </div>
    </section>
  );
}

function SolutionRow({
  icon: Icon,
  title,
  text,
  highlight,
}: {
  icon: any;
  title: string;
  text: React.ReactNode;
  highlight?: boolean;
}) {
  return (
    <div
      className={`relative flex gap-5 rounded-2xl bg-background p-6 sm:p-7 ${
        highlight ? "border-2 border-primary" : "border border-border"
      }`}
    >
      {highlight && (
        <span className="absolute -top-3 left-6 rounded-full bg-primary px-2.5 py-1 text-[10px] font-semibold tracking-wider text-primary-foreground">
          EXCLUSIVO
        </span>
      )}
      <div
        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${
          highlight ? "bg-primary text-primary-foreground" : "bg-accent text-primary"
        }`}
      >
        <Icon className="h-6 w-6" strokeWidth={2} />
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-medium">{title}</h3>
        <div className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</div>
      </div>
    </div>
  );
}

/* ---------- ORIGEN ---------- */
function Origen() {
  return (
    <section className="px-5 py-20">
      <div className="mx-auto max-w-3xl">
        <div className="rounded-2xl border border-border border-l-[3px] border-l-primary bg-background p-7 sm:p-9">
          <h3 className="text-xl font-medium sm:text-2xl">
            Desarrollado por un caficultor peruano
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Café directo de fincas del Perú. Cada lata tiene origen trazable — sabes
            exactamente de dónde viene lo que tomas. No es una marca más, es café hecho por
            quien lo cultiva.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------- PREORDER ---------- */
function Preorder() {
  const [option, setOption] = useState<"reserve" | "notify">("reserve");
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [cans, setCans] = useState("1");
  const [errors, setErrors] = useState<{ name?: string; whatsapp?: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const [p1, setP1] = useState<number | null>(null);
  const [p2, setP2] = useState<number | null>(null);
  const [p3, setP3] = useState<number | null>(null);
  const [p4, setP4] = useState<number | null>(null);

  const ctaLabel = useMemo(
    () => (option === "reserve" ? "Separar mi lata" : "Avisarme al lanzar"),
    [option],
  );

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const err: typeof errors = {};
    if (!name.trim()) err.name = "Ingresa tu nombre";
    if (!whatsapp.trim() || whatsapp.replace(/\D/g, "").length < 8)
      err.whatsapp = "Ingresa un WhatsApp válido";
    setErrors(err);
    if (Object.keys(err).length) return;
    // TRACKING: preorder_form_submit
    console.log("Preorder submit", {
      option,
      name,
      whatsapp,
      cans,
      pricing: { tooCheap: p1, bargain: p2, expensive: p3, tooExpensive: p4 },
    });
    setSubmitted(true);
  }

  return (
    <section id="preorder" className="bg-cream px-5 py-20 sm:py-28">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Reserva tu lata — primer lote
        </h2>
        <p className="mt-4 text-base text-muted-foreground">
          Estamos lanzando. Déjanos tus datos y te separamos las primeras latas de 300ml.
          Sin pago ahora — solo cuando confirmemos producción.
        </p>

        {submitted ? (
          <div className="mt-10 rounded-2xl border border-primary bg-background p-8 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Check className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-xl font-medium">¡Listo!</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Te contactamos pronto por WhatsApp.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-10 space-y-6">
            {/* Option selector */}
            <div className="grid gap-3 sm:grid-cols-2">
              <OptionCard
                active={option === "reserve"}
                title="Separar mi lata"
                subtitle="Te guardamos unidad del primer lote"
                onClick={() => {
                  // TRACKING: preorder_option_reserve
                  setOption("reserve");
                }}
              />
              <OptionCard
                active={option === "notify"}
                title="Avísame al lanzar"
                subtitle="Sin reserva, solo notificación"
                onClick={() => {
                  // TRACKING: preorder_option_notify
                  setOption("notify");
                }}
              />
            </div>

            {option === "notify" && (
              <div className="flex gap-3 rounded-xl bg-warning p-4 text-warning-foreground">
                <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0" />
                <p className="text-sm leading-relaxed">
                  Primer lote limitado. Los que separan tienen prioridad garantizada. Si solo
                  pides aviso, el stock puede agotarse antes de que llegue tu turno.
                </p>
              </div>
            )}

            {/* Basic fields */}
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Nombre" error={errors.name}>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="h-11 w-full rounded-xl border border-border bg-background px-3.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                  placeholder="Tu nombre"
                />
              </Field>
              <Field label="WhatsApp" error={errors.whatsapp}>
                <input
                  type="tel"
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  className="h-11 w-full rounded-xl border border-border bg-background px-3.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                  placeholder="+51 9XX XXX XXX"
                />
              </Field>
            </div>

            <Field label="¿Cuántas latas reservarías?">
              <select
                value={cans}
                onChange={(e) => setCans(e.target.value)}
                className="h-11 w-full rounded-xl border border-border bg-background px-3.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
              >
                <option value="1">1 lata (300ml)</option>
                <option value="3">3 latas</option>
                <option value="6">6 latas</option>
                <option value="12">12 latas</option>
              </select>
            </Field>

            {/* Pricing validation */}
            <div className="rounded-2xl border border-border bg-background p-6">
              <h3 className="text-lg font-medium">Ayúdanos a definir el precio justo</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                ¿Cuánto pagarías por una lata de 300ml de Café Gud?
              </p>
              <div className="mt-5 divide-y divide-border">
                <PriceStepper
                  label="¿A qué precio te parecería tan barata que dudarías de la calidad?"
                  value={p1}
                  onChange={setP1}
                />
                <PriceStepper
                  label="¿A qué precio te parecería una buena oferta?"
                  value={p2}
                  onChange={setP2}
                />
                <PriceStepper
                  label="¿A qué precio te parecería cara, pero aún la considerarías?"
                  value={p3}
                  onChange={setP3}
                />
                <PriceStepper
                  label="¿A qué precio te parecería tan cara que no la comprarías?"
                  value={p4}
                  onChange={setP4}
                />
              </div>
            </div>

            <button
              type="submit"
              className="inline-flex h-12 w-full items-center justify-center rounded-2xl bg-primary px-6 text-sm font-medium text-primary-foreground transition hover:scale-[1.01] hover:bg-primary/95 active:scale-[0.99]"
            >
              {ctaLabel}
            </button>
            <p className="text-center text-xs text-muted-foreground">
              Sin pago ahora. Te contactamos por WhatsApp cuando el lote esté listo.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}

function Field({
  label,
  children,
  error,
}: {
  label: string;
  children: React.ReactNode;
  error?: string;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium">{label}</span>
      {children}
      {error && <span className="mt-1 block text-xs text-destructive">{error}</span>}
    </label>
  );
}

function OptionCard({
  active,
  title,
  subtitle,
  onClick,
}: {
  active: boolean;
  title: string;
  subtitle: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-2xl border-2 bg-background p-4 text-left transition ${
        active ? "border-primary" : "border-border hover:border-foreground/20"
      }`}
    >
      <div className="flex items-start justify-between gap-2">
        <div>
          <div className="text-sm font-medium">{title}</div>
          <div className="mt-1 text-xs text-muted-foreground">{subtitle}</div>
        </div>
        <span
          className={`mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2 ${
            active ? "border-primary" : "border-border"
          }`}
        >
          {active && <span className="h-1.5 w-1.5 rounded-full bg-primary" />}
        </span>
      </div>
    </button>
  );
}

function PriceStepper({
  label,
  value,
  onChange,
}: {
  label: string;
  value: number | null;
  onChange: (v: number | null) => void;
}) {
  const dec = () => {
    if (value === null) onChange(0);
    else if (value > 0) onChange(value - 1);
  };
  const inc = () => {
    if (value === null) onChange(1);
    else if (value < 20) onChange(value + 1);
  };
  return (
    <div className="py-4 first:pt-0 last:pb-0">
      <p className="text-sm text-foreground">{label}</p>
      <div className="mt-3 flex items-center gap-3">
        <button
          type="button"
          onClick={dec}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-border transition hover:bg-muted"
          aria-label="Disminuir"
        >
          <Minus className="h-4 w-4" />
        </button>
        <div className="flex h-10 min-w-[88px] items-center justify-center rounded-xl bg-muted px-4 text-base font-medium tabular-nums">
          {value === null ? (
            <span className="text-muted-foreground">S/ —</span>
          ) : (
            <span>S/ {value}</span>
          )}
        </div>
        <button
          type="button"
          onClick={inc}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-border transition hover:bg-muted"
          aria-label="Aumentar"
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

/* ---------- FOOTER ---------- */
function Footer() {
  return (
    <footer className="border-t border-border px-5 py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 text-center">
        <div className="flex items-center gap-4">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border transition hover:bg-muted"
            aria-label="Instagram"
          >
            <Instagram className="h-4 w-4" />
          </a>
          <a
            href="https://wa.me/51900000000"
            target="_blank"
            rel="noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border transition hover:bg-muted"
            aria-label="WhatsApp"
          >
            <MessageCircle className="h-4 w-4" />
          </a>
        </div>
        <p className="text-xs text-muted-foreground">
          Café Gud — Café de especialidad peruano · 2026
        </p>
      </div>
    </footer>
  );
}

/* ---------- SHARED ---------- */
function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="max-w-2xl">
      <span className="text-xs font-medium tracking-[0.18em] text-muted-foreground">
        {eyebrow}
      </span>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
    </div>
  );
}
