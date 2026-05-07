import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  Zap,
  Ban,
  MapPin,
  Sparkles,
  Bolt,
  Coffee,
  Award,
  ShieldCheck,
  AlertTriangle,
  Minus,
  Plus,
  Instagram,
  MessageCircle,
  Check,
} from "lucide-react";
import logoGud from "@/assets/logo-gud.png";
import canGud from "@/assets/can-gud.png";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Café Gud — Café de especialidad peruano con alulosa y 160mg de cafeína" },
      {
        name: "description",
        content:
          "Café peruano de especialidad caramelizado con alulosa: 160mg de cafeína natural, cero calorías y energía limpia sin crash.",
      },
      { property: "og:title", content: "Café Gud — Sabor real, energía limpia" },
      {
        property: "og:description",
        content:
          "Especialidad peruana con alulosa. 160mg de cafeína natural — más que un Red Bull, sin química ni crash.",
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <TaglineBand />
      <Problema />
      <Solucion />
      <StatStrip />
      <CaffeineCompare />
      <Origen />
      <Preorder />
      <Footer />
    </div>
  );
}

/* ---------- NAVBAR ---------- */
function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-gold/20 bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#top" className="flex items-center gap-2">
          <img src={logoGud} alt="Café Gud" className="h-9 w-auto" />
          <span className="sr-only">Café Gud</span>
        </a>
        <a
          href="#solucion"
          // TODO analytics: navbar_more_info_click
          onClick={() => console.log("[track] navbar_more_info_click")}
          className="rounded-xl border border-gold px-4 py-2 text-sm font-semibold text-gold transition hover:bg-gold/10"
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
    { icon: Bolt, label: "160mg de cafeína" },
    { icon: Zap, label: "Energía limpia" },
    { icon: Ban, label: "Cero calorías" },
    { icon: ShieldCheck, label: "Sin acidez" },
    { icon: MapPin, label: "Origen trazable" },
  ];
  return (
    <section id="top" className="px-5 pt-14 pb-20 sm:pt-24 sm:pb-28">
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <span className="mb-6 text-xs font-bold tracking-[0.25em] text-gold">
          CAFÉ DE ESPECIALIDAD PERUANO
        </span>
        <h1 className="font-display text-[42px] leading-[0.95] sm:text-7xl">
          AMAS EL CAFÉ.
          <br />
          <span className="text-gold">TU CUERPO, NO TANTO.</span>
        </h1>
        <p className="mt-7 max-w-[540px] text-[17px] leading-[1.6] text-foreground sm:text-lg">
          Café Gud es especialidad peruana{" "}
          <strong className="font-bold text-gold">caramelizada con alulosa</strong>: un
          azúcar natural sin calorías.{" "}
          <strong className="font-bold text-gold">Sabor real</strong>,{" "}
          <strong className="font-bold text-gold">energía limpia</strong>, cero culpa.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {tags.map(({ icon: Icon, label }) => (
            <span
              key={label}
              className="inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-background/40 px-3 py-1.5 text-xs font-medium text-foreground"
            >
              <Icon className="h-3.5 w-3.5 text-gold" strokeWidth={2.4} />
              {label}
            </span>
          ))}
        </div>

        <div className="mt-10 flex w-full flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a
            href="#preorder"
            // TODO analytics: hero_cta_primary_click
            onClick={() => console.log("[track] hero_cta_primary_click")}
            className="inline-flex h-13 w-full max-w-[300px] items-center justify-center rounded-2xl bg-gold px-6 py-4 text-sm font-bold uppercase tracking-wide text-background transition hover:scale-[1.02] active:scale-[0.99]"
          >
            Separar mi lata — primer lote
          </a>
          <a
            href="#solucion"
            // TODO analytics: hero_cta_secondary_click
            onClick={() => console.log("[track] hero_cta_secondary_click")}
            className="inline-flex h-13 w-full max-w-[300px] items-center justify-center rounded-2xl border-2 border-gold bg-transparent px-6 py-4 text-sm font-bold uppercase tracking-wide text-gold transition hover:bg-gold/10"
          >
            Ver cómo funciona
          </a>
        </div>

        <div className="mt-12">
          <img
            src={canGud}
            alt="Lata de Café Gud 300ml"
            width={1024}
            height={1024}
            className="mx-auto h-72 w-auto drop-shadow-2xl sm:h-96"
          />
        </div>
      </div>
    </section>
  );
}

/* ---------- TAGLINE BAND ---------- */
function TaglineBand() {
  return (
    <section className="border-y border-gold/20 bg-[oklch(0.27_0.04_45)] px-5 py-14 sm:py-20">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-6 text-center sm:flex-row sm:flex-wrap sm:gap-5">
        <span className="rounded-full border-2 border-gold bg-transparent px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-gold sm:text-base">
          Café de especialidad
        </span>
        <span className="font-display text-3xl text-gold sm:text-4xl">+</span>
        <span className="rounded-full bg-gold px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-background sm:text-base">
          Alulosa
        </span>
        <span className="font-display text-3xl text-gold sm:text-4xl">=</span>
        <span className="text-sm font-bold uppercase tracking-wide text-gold sm:text-base">
          Sabor real <span className="opacity-50">·</span> Energía limpia{" "}
          <span className="opacity-50">·</span> Cero calorías
        </span>
      </div>
    </section>
  );
}

/* ---------- PROBLEMA ---------- */
function Problema() {
  return (
    <section
      onMouseEnter={() => console.log("[track] scroll_problem_section")}
      className="bg-[oklch(0.27_0.04_45)] px-5 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          eyebrow="EL DILEMA"
          title="Quieres energía rica de verdad. Pero las opciones que hay no convencen."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <ProblemCard
            icon={Coffee}
            title="Los cafés que encuentras no convencen"
            text="Café instantáneo, de máquina o con azúcar de mesa. Sabor mediocre, glucosa por las nubes y bajón a media mañana. Lo tomas porque no hay opción mejor a la mano — no porque te guste."
          />
          <ProblemCard
            icon={Zap}
            title="Los energizantes son tu plan B obligado"
            text="Red Bull, Monster, gaseosas con cafeína. Los tomas porque necesitas energía y no hay alternativa real. Pero sabes que es química rara, crash garantizado y factura a la salud."
          />
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
    <div className="rounded-2xl border border-gold/20 bg-background/60 p-7 sm:p-9">
      <Icon className="h-8 w-8 text-gold" strokeWidth={2} />
      <h3 className="mt-5 font-display text-xl text-foreground sm:text-2xl">{title}</h3>
      <p className="mt-3 text-base leading-relaxed text-muted-foreground sm:text-lg">
        {text}
      </p>
    </div>
  );
}

/* ---------- SOLUCIÓN ---------- */
function Solucion() {
  return (
    <section
      id="solucion"
      onMouseEnter={() => console.log("[track] scroll_solution_section")}
      className="px-5 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-3xl">
        <SectionHeader
          eyebrow="LA SOLUCIÓN"
          title="Café Gud: sabor real, energía limpia, cero compromiso."
        />
        <div className="mt-12 space-y-5">
          <SolutionRow
            icon={Award}
            title="Café de especialidad peruano"
            text={
              <>
                <strong className="font-bold text-gold">Granos trazables</strong>, tostados
                con perfil. Notas a caramelo, cuerpo redondo. La{" "}
                <strong className="font-bold text-gold">calidad de cafetería</strong> en
                cada lata.
              </>
            }
          />
          <SolutionRow
            icon={Sparkles}
            highlight
            title="Caramelizado con alulosa"
            text={
              <>
                La <strong className="font-bold text-gold">alulosa</strong> es un azúcar
                natural que{" "}
                <strong className="font-bold text-gold">
                  carameliza igual que el azúcar
                </strong>{" "}
                de mesa: mismo dulzor, mismas notas tostadas, sin regusto raro. La
                diferencia es que tiene{" "}
                <strong className="font-bold text-gold">cero calorías</strong> y{" "}
                <strong className="font-bold text-gold">no eleva la glucosa</strong> en
                sangre.
              </>
            }
          />
          <SolutionRow
            icon={Bolt}
            highlight
            title="160mg de cafeína natural — más que un energizante"
            text={
              <>
                <strong className="font-bold text-gold">160mg de cafeína natural</strong>,{" "}
                <strong className="font-bold text-gold">más que un Red Bull</strong> (80mg)
                y al nivel de un Monster (160mg), pero de café de especialidad real, no
                química.{" "}
                <strong className="font-bold text-gold">Energía estable</strong> que te
                dura toda la mañana, sin temblor, sin acidez y{" "}
                <strong className="font-bold text-gold">sin el crash</strong> típico de los
                energizantes.
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
      className={`flex gap-5 rounded-2xl bg-background/60 p-6 sm:p-8 ${
        highlight ? "border-[1.5px] border-gold" : "border border-gold/20"
      }`}
    >
      <div className="shrink-0">
        <Icon className="h-8 w-8 text-gold" strokeWidth={2} />
      </div>
      <div className="flex-1">
        <h3 className="font-display text-lg text-foreground sm:text-xl">{title}</h3>
        <div className="mt-2 text-base leading-relaxed text-muted-foreground">{text}</div>
      </div>
    </div>
  );
}

/* ---------- STAT STRIP ---------- */
function StatStrip() {
  return (
    <section className="bg-[oklch(0.27_0.04_45)] px-5 py-14 sm:py-20">
      <div className="mx-auto grid max-w-5xl grid-cols-1 divide-y divide-gold/15 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        <StatBlock number="160mg" label="cafeína natural por lata" />
        <StatBlock number="0" label="calorías" />
        <StatBlock number="100%" label="café peruano trazable" />
      </div>
    </section>
  );
}

function StatBlock({ number, label }: { number: string; label: string }) {
  return (
    <div className="px-4 py-8 text-center">
      <div className="font-display text-5xl text-gold sm:text-6xl">{number}</div>
      <div className="mt-3 text-sm font-medium tracking-wide text-foreground sm:text-base">
        {label}
      </div>
    </div>
  );
}

/* ---------- CAFFEINE COMPARISON ---------- */
function CaffeineCompare() {
  const rows = [
    { label: "Red Bull (250ml)", mg: 80, pct: 50, hero: false },
    { label: "Monster (473ml)", mg: 160, pct: 100, hero: false },
    { label: "Café Gud (300ml)", mg: 160, pct: 100, hero: true },
  ];
  return (
    <section className="px-5 py-20 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeader
          eyebrow="MÁS ENERGÍA, MEJOR ENERGÍA"
          title="Compara la cafeína."
        />
        <div className="mt-10 space-y-5">
          {rows.map((r) => (
            <div key={r.label} className="grid grid-cols-[140px_1fr_70px] items-center gap-4 sm:grid-cols-[180px_1fr_90px]">
              <span
                className={`text-sm sm:text-base ${
                  r.hero ? "font-bold text-gold" : "text-foreground"
                }`}
              >
                {r.label}
              </span>
              <div
                className={`relative overflow-hidden rounded-full ${
                  r.hero ? "h-7 border-2 border-gold" : "h-6 border border-gold/40 bg-background/40"
                }`}
              >
                <div
                  className={r.hero ? "h-full bg-gold" : "h-full bg-gold/20"}
                  style={{ width: `${r.pct}%` }}
                />
              </div>
              <span
                className={`text-right font-bold text-gold ${
                  r.hero ? "text-lg sm:text-xl" : "text-sm sm:text-base"
                }`}
              >
                {r.mg}mg
              </span>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-sm italic text-muted-foreground">
          Misma potencia que un Monster, pero en café real con sabor caramelizado y cero
          crash.
        </p>
      </div>
    </section>
  );
}

/* ---------- ORIGEN ---------- */
function Origen() {
  return (
    <section className="bg-[oklch(0.27_0.04_45)] px-5 py-20">
      <div className="mx-auto max-w-3xl">
        <div className="rounded-2xl border border-gold/20 border-l-[3px] border-l-gold bg-background/60 p-7 sm:p-10">
          <span className="text-xs font-bold tracking-[0.22em] text-gold">ORIGEN</span>
          <h3 className="mt-3 font-display text-2xl text-foreground sm:text-3xl">
            Hecho por un caficultor peruano, no por una marca.
          </h3>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Café Gud nace de fincas peruanas reales. Cada lata tiene origen trazable —
            sabes exactamente de dónde viene lo que tomas. Esto no es café industrial con
            etiqueta bonita.{" "}
            <strong className="font-bold text-gold">Es café de quien lo cultiva.</strong>
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
    // TODO analytics: preorder_form_submit (track option separately)
    console.log("[track] preorder_form_submit", { option });
    console.log("Preorder data", {
      option,
      name,
      whatsapp,
      cans,
      pricing: { tooCheap: p1, bargain: p2, expensive: p3, tooExpensive: p4 },
    });
    setSubmitted(true);
  }

  return (
    <section
      id="preorder"
      onMouseEnter={() => console.log("[track] scroll_preorder_section")}
      className="px-5 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-2xl">
        <div className="rounded-3xl border border-gold/30 bg-[oklch(0.27_0.04_45)] p-7 sm:p-10">
          <h2 className="font-display text-3xl sm:text-4xl">
            Reserva tu lata — primer lote
          </h2>
          <p className="mt-4 max-w-[540px] text-base text-muted-foreground">
            Estamos lanzando. Déjanos tus datos y te separamos las primeras latas de
            300ml. Sin pago ahora — solo cuando confirmemos producción.
          </p>

          {submitted ? (
            <div className="mt-10 rounded-2xl border border-gold bg-background/60 p-8 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gold text-background">
                <Check className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-display text-2xl">¡Listo!</h3>
              <p className="mt-2 text-base text-muted-foreground">
                Te contactamos pronto por WhatsApp.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div className="grid gap-3 sm:grid-cols-2">
                <OptionCard
                  active={option === "reserve"}
                  title="Separar mi lata"
                  subtitle="Te guardamos unidad del primer lote"
                  onClick={() => {
                    console.log("[track] preorder_option_reserve");
                    setOption("reserve");
                  }}
                />
                <OptionCard
                  active={option === "notify"}
                  title="Avísame al lanzar"
                  subtitle="Sin reserva, solo notificación"
                  onClick={() => {
                    console.log("[track] preorder_option_notify");
                    setOption("notify");
                  }}
                />
              </div>

              {option === "notify" && (
                <div className="flex gap-3 rounded-xl border border-gold/40 bg-gold/10 p-4 text-foreground">
                  <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <p className="text-sm leading-relaxed">
                    Primer lote limitado. Los que separan tienen prioridad garantizada.
                    Si solo pides aviso, el stock puede agotarse antes de que llegue tu
                    turno.
                  </p>
                </div>
              )}

              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Nombre" error={errors.name}>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="h-11 w-full rounded-xl border border-gold/30 bg-background/60 px-3.5 text-sm text-foreground outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/30"
                    placeholder="Tu nombre"
                  />
                </Field>
                <Field label="WhatsApp" error={errors.whatsapp}>
                  <input
                    type="tel"
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    className="h-11 w-full rounded-xl border border-gold/30 bg-background/60 px-3.5 text-sm text-foreground outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/30"
                    placeholder="+51 9XX XXX XXX"
                  />
                </Field>
              </div>

              <Field label="¿Cuántas latas reservarías?">
                <select
                  value={cans}
                  onChange={(e) => setCans(e.target.value)}
                  className="h-11 w-full rounded-xl border border-gold/30 bg-background/60 px-3.5 text-sm text-foreground outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/30"
                >
                  <option value="1">1 lata (300ml)</option>
                  <option value="3">3 latas</option>
                  <option value="6">6 latas</option>
                  <option value="12">12 latas</option>
                </select>
              </Field>

              <div className="rounded-2xl border border-gold/20 bg-background/40 p-6">
                <h3 className="font-display text-xl">Ayúdanos a definir el precio justo</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  ¿Cuánto pagarías por una lata de 300ml de Café Gud?
                </p>
                <div className="mt-5 divide-y divide-gold/15">
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
                className="inline-flex h-13 w-full items-center justify-center rounded-2xl bg-gold px-6 py-4 text-sm font-bold uppercase tracking-wide text-background transition hover:scale-[1.01] active:scale-[0.99]"
              >
                {ctaLabel}
              </button>
              <p className="text-center text-xs text-muted-foreground">
                Sin pago ahora. Te contactamos por WhatsApp cuando el lote esté listo.
              </p>
            </form>
          )}
        </div>
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
      <span className="mb-1.5 block text-sm font-semibold text-foreground">{label}</span>
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
      className={`rounded-2xl bg-background/60 p-4 text-left transition ${
        active ? "border-[1.5px] border-gold" : "border border-gold/25 hover:border-gold/60"
      }`}
    >
      <div className="flex items-start justify-between gap-2">
        <div>
          <div className="text-sm font-bold text-foreground">{title}</div>
          <div className="mt-1 text-xs text-muted-foreground">{subtitle}</div>
        </div>
        <span
          className={`mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2 ${
            active ? "border-gold" : "border-gold/40"
          }`}
        >
          {active && <span className="h-1.5 w-1.5 rounded-full bg-gold" />}
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
    // TODO analytics: price_stepper_interaction
    console.log("[track] price_stepper_dec");
    if (value === null) onChange(0);
    else if (value > 0) onChange(value - 1);
  };
  const inc = () => {
    console.log("[track] price_stepper_inc");
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
          className="flex h-10 w-10 items-center justify-center rounded-lg border-2 border-gold text-gold transition hover:bg-gold/10"
          aria-label="Disminuir"
        >
          <Minus className="h-4 w-4" />
        </button>
        <div className="flex h-10 min-w-[100px] items-center justify-center rounded-lg border border-gold/20 bg-background/40 px-4 text-base font-medium tabular-nums text-foreground">
          {value === null ? (
            <span className="text-muted-foreground">S/ —</span>
          ) : (
            <span>S/ {value}</span>
          )}
        </div>
        <button
          type="button"
          onClick={inc}
          className="flex h-10 w-10 items-center justify-center rounded-lg border-2 border-gold text-gold transition hover:bg-gold/10"
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
    <footer className="border-t border-gold/20 px-5 py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 text-center">
        <div className="flex items-center gap-4">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gold text-gold transition hover:bg-gold/10"
            aria-label="Instagram"
          >
            <Instagram className="h-4 w-4" />
          </a>
          <a
            href="https://wa.me/51900000000"
            target="_blank"
            rel="noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gold text-gold transition hover:bg-gold/10"
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
    <div className="max-w-3xl">
      <span className="text-xs font-bold tracking-[0.22em] text-gold">{eyebrow}</span>
      <h2 className="mt-3 font-display text-3xl leading-[1.05] sm:text-5xl">{title}</h2>
    </div>
  );
}
