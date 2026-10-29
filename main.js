// São — brand site behaviour: age check + EN/PT language switch.

// Set this to your contact address to show the "Email us" button.
const CONTACT_EMAIL = "info@drinksao.com";
// Set this to your Instagram URL to show the "Follow on Instagram" button.
const INSTAGRAM_URL = "";

const T = {
  en: {
    "tz.title": "Lisbon, soon.",
    "tz.line": "A new hard seltzer is landing on Lisbon's rooftops, bars and clubs at the end of 2026. That's all we can say. For now.",
    "tz.cta": "Be the first to know",
    "tz.band1": "Coming soon",
    "tz.band2": "End of 2026",
    "tz.list.title": "Be the first to know.",
    "tz.list.body": "The launch date and the first places to find us, straight to your inbox. No spam.",
    "tz.list.consent": "I'm 18 or older and I'd like to receive news from São by email.",
    "tz.list.submit": "Keep me posted",
    "tz.list.done": "You're on the list.",
    "tz.list.done2": "We'll let you know the moment São lands in Lisbon.",
    "tz.venue.title": "Run a venue? Taste it first.",
    "tz.venue.body": "Bars, clubs and beach clubs in Lisbon get a free tasting kit before launch. No obligation.",
    "tz.venue.consent": "I'm 18 or older, I represent this venue and São may contact me about a tasting kit.",
    "tz.venue.submit": "Request a tasting kit",
    "tz.venue.done2": "We'll be in touch before launch to arrange your tasting kit.",
    "title.teaser": "São — Lisbon, soon",
    "kit.title": "Taste it first.<br>It's on us.",
    "kit.line": "Run a bar, club, beach club or festival in Portugal? Request a free tasting kit with both flavours. No obligation, no sales pitch you didn't ask for.",
    "kit.cta": "Request your kit",
    "steps.title": "How it works",
    "steps.1.t": "Request a kit",
    "steps.1.p": "Tell us about your venue. It takes two minutes.",
    "steps.2.t": "We bring it over",
    "steps.2.p": "We get in touch to set a time and drop off Lime and Maracujá for you and your team.",
    "steps.3.t": "You decide",
    "steps.3.p": "Like it? We'll talk pricing and delivery. Not for you? No hard feelings.",
    "form.title": "Request your free tasting kit",
    "form.f1": "Both flavours: Lime and Maracujá",
    "form.f2": "Delivered in Lisbon and the Algarve",
    "form.f3": "Free and without obligation",
    "form.g1": "Your venue",
    "form.venue": "Venue name",
    "form.type": "Type of venue",
    "form.choose": "Choose one",
    "form.t.bar": "Bar",
    "form.t.club": "Club",
    "form.t.beach": "Beach club",
    "form.t.rest": "Restaurant",
    "form.t.hotel": "Hotel",
    "form.t.fest": "Festival or event",
    "form.t.other": "Other",
    "form.region": "Region",
    "form.r.other": "Elsewhere in Portugal",
    "form.address": "Venue address",
    "form.g2": "You",
    "form.name": "Your name",
    "form.role": "Your role <span class=\"opt\">(optional)</span>",
    "form.role.ph": "Owner, bar manager, buyer…",
    "form.email": "Email",
    "form.phone": "Phone or WhatsApp <span class=\"opt\">(optional)</span>",
    "form.msg": "Anything we should know? <span class=\"opt\">(optional)</span>",
    "form.msg.ph": "Opening hours, best time to drop by, what you serve now…",
    "form.c1": "I'm 18 or older and I represent this business.",
    "form.c2": "São may contact me about this request. We only use your details for this.",
    "form.submit": "Request my free kit",
    "form.sending": "Sending…",
    "form.err.fields": "Please fill in the highlighted fields.",
    "form.err.send": "Your request didn't go through. Check your connection and try again, or email us at info@drinksao.com.",
    "done.title": "Request sent. Obrigado!",
    "done.body": "We'll be in touch within a few days to arrange your tasting kit.",
    "done.back": "Back to the homepage",
    "venues.kit": "Request a free tasting kit",
    "form.mail": "Prefer email? Write to <a href=\"mailto:info@drinksao.com\">info@drinksao.com</a>",
    "title.venues": "Free tasting kit for venues — São",
    "ticker": "Coming soon to Lisbon and the Algarve",
    "nav.where": "Find us",
    "nav.about": "Our story",
    "hero.kicker": "Hard seltzer from Portugal",
    "hero.title": "Light. Fresh.<br>Out late.",
    "hero.line": "Lime and maracujá hard seltzer in a slim, ice-cold can. Made for rooftops, dance floors and the beach at sunrise.",
    "hero.cta2": "Stock São",
    "sticker": "new hard seltzer — new hard seltzer — ",
    "band.1": "Ice cold",
    "band.2": "Light and bubbly",
    "flavours.title": "Two flavours. Pick a side.",
    "flavours.intro": "Both come in a slim 250 ml can. Both are best straight from the ice bucket.",
    "tag.zesty": "Zesty", "tag.crisp": "Crisp", "tag.tropical": "Tropical", "tag.tart": "Tart",
    "facts.title": "What São is",
    "f1.t": "Slim 250 ml can",
    "f1.p": "Easy to hold on a crowded dance floor. Easy to finish while it's still cold.",
    "f2.t": "Real fruit flavours",
    "f2.p": "Lime and maracujá, two tastes that already belong to a Portuguese summer.",
    "f3.t": "Best ice cold",
    "f3.p": "Light and bubbly, made for hot nights rather than heavy cocktails.",
    "f4.t": "Born for Portugal",
    "f4.p": "A brand built for Lisbon's bars and the Algarve's beach clubs, not imported from somewhere else.",
    "where.title": "Find us this summer",
    "where.intro": "Our first venues will be listed here as they sign on.",
    "where.lis": "Rooftop bars, late-night clubs and the city's running crowd.",
    "where.alg": "Beach clubs, pool parties and long nights on the strip.",
    "where.fest.t": "Festivals",
    "where.fest": "Look for the São bar at summer festivals across Portugal.",
    "where.soon": "Venues coming soon",
    "where.lis.s": "Rooftops and clubs",
    "vibe.title": "Rooftops. Beach clubs. Long summer nights.",
    "badge.ring": "zero sugar — 250 ml — zero sugar — ",
    "facts.sugar": "sugar",
    "facts.kcal": "kcal per can",
    "facts.can": "slim can",
    "where.title2": "Where to find us",
    "where.intro2": "We're starting in Lisbon and the Algarve. Venues appear on the map as they sign on.",
    "where.fest.l": "Dates announced soon",
    "where.alg.s": "Beach clubs",
    "where.fest.s": "All summer",
    "social.title": "Follow the night",
    "social.cta": "Follow on Instagram",
    "gate.q": "Are you 18 or older?",
    "gate.yes": "Yes, I'm 18+",
    "gate.no": "No",
    "gate.denied": "You need to be 18 or older to visit this site. See you later.",
    "gate.small": "By entering you agree to enjoy São responsibly.",
    "nav.flavours": "Flavours",
    "nav.venues": "For venues",
    "hero.cta": "See the flavours",
    "lime.name": "Lime",
    "lime.body": "Sharp, clean and cold. Fresh lime over sparkling water, with nothing sticky left behind.",
    "mara.name": "Maracujá",
    "mara.body": "Tart passion fruit with a soft, sunny finish. The one you order a second round of.",
    "can.meta": "Slim can, 250 ml",
    "about.title": "Active days.<br>Social nights.",
    "about.p1": "We're two friends in Lisbon who like to keep moving. Surfing, training, cycling, walking the hills all day. And at the end of it, we love a drink with friends just as much. We wanted one that fits that life: light, cold, nothing heavy. Portugal's bars and beach clubs weren't pouring it yet. So we made it.",
    "about.p2": "São is Portuguese for healthy, whole. It's how we like to live: busy days, good company, long evenings.",
    "venues.title": "Pour São at your venue",
    "venues.body": "We're launching in Lisbon and the Algarve. Run a bar, club, beach club or festival? Let's talk about getting São on your menu.",
    "venues.cta": "Email us",
    "venues.l1": "Bars",
    "venues.l2": "Clubs",
    "venues.l3": "Beach clubs",
    "venues.l4": "Festivals",
    "foot.resp": "Enjoy responsibly. Not for sale to persons under 18.",
    "title": "São — Hard seltzer from Portugal"
  },
  pt: {
    "tz.title": "Lisboa, em breve.",
    "tz.line": "Um novo hard seltzer está a chegar aos rooftops, bares e discotecas de Lisboa no fim de 2026. Por agora, é tudo o que podemos dizer.",
    "tz.cta": "Quero saber primeiro",
    "tz.band1": "Brevemente",
    "tz.band2": "Fim de 2026",
    "tz.list.title": "Saiba primeiro.",
    "tz.list.body": "A data de lançamento e os primeiros sítios onde nos encontrar, diretamente no seu email. Sem spam.",
    "tz.list.consent": "Tenho 18 anos ou mais e quero receber novidades da São por email.",
    "tz.list.submit": "Quero saber",
    "tz.list.done": "Já está na lista.",
    "tz.list.done2": "Avisamos assim que a São chegar a Lisboa.",
    "tz.venue.title": "Tem um espaço? Prove primeiro.",
    "tz.venue.body": "Bares, discotecas e beach clubs em Lisboa recebem um kit de degustação gratuito antes do lançamento. Sem compromisso.",
    "tz.venue.consent": "Tenho 18 anos ou mais, represento este espaço e a São pode contactar-me sobre um kit de degustação.",
    "tz.venue.submit": "Pedir um kit de degustação",
    "tz.venue.done2": "Entraremos em contacto antes do lançamento para combinar o seu kit.",
    "title.teaser": "São — Lisboa, em breve",
    "kit.title": "Prove primeiro.<br>Nós oferecemos.",
    "kit.line": "Tem um bar, discoteca, beach club ou festival em Portugal? Peça um kit de degustação gratuito com os dois sabores. Sem compromisso.",
    "kit.cta": "Pedir o kit",
    "steps.title": "Como funciona",
    "steps.1.t": "Peça um kit",
    "steps.1.p": "Fale-nos do seu espaço. Demora dois minutos.",
    "steps.2.t": "Nós levamos",
    "steps.2.p": "Entramos em contacto para combinar a hora e deixamos Lima e Maracujá para si e para a sua equipa.",
    "steps.3.t": "Decida",
    "steps.3.p": "Gostou? Falamos de preços e entregas. Não é para si? Sem problema.",
    "form.title": "Peça o seu kit de degustação gratuito",
    "form.f1": "Os dois sabores: Lima e Maracujá",
    "form.f2": "Entrega em Lisboa e no Algarve",
    "form.f3": "Gratuito e sem compromisso",
    "form.g1": "O seu espaço",
    "form.venue": "Nome do espaço",
    "form.type": "Tipo de espaço",
    "form.choose": "Escolha uma opção",
    "form.t.bar": "Bar",
    "form.t.club": "Discoteca",
    "form.t.beach": "Beach club",
    "form.t.rest": "Restaurante",
    "form.t.hotel": "Hotel",
    "form.t.fest": "Festival ou evento",
    "form.t.other": "Outro",
    "form.region": "Região",
    "form.r.other": "Outro sítio em Portugal",
    "form.address": "Morada do espaço",
    "form.g2": "Os seus dados",
    "form.name": "O seu nome",
    "form.role": "A sua função <span class=\"opt\">(opcional)</span>",
    "form.role.ph": "Proprietário, gerente de bar, comprador…",
    "form.email": "Email",
    "form.phone": "Telefone ou WhatsApp <span class=\"opt\">(opcional)</span>",
    "form.msg": "Algo que devamos saber? <span class=\"opt\">(opcional)</span>",
    "form.msg.ph": "Horário, melhor altura para passarmos, o que serve agora…",
    "form.c1": "Tenho 18 anos ou mais e represento este negócio.",
    "form.c2": "A São pode contactar-me sobre este pedido. Só usamos os seus dados para isso.",
    "form.submit": "Pedir o meu kit gratuito",
    "form.sending": "A enviar…",
    "form.err.fields": "Preencha os campos assinalados.",
    "form.err.send": "O pedido não foi enviado. Verifique a ligação e tente de novo, ou escreva-nos para info@drinksao.com.",
    "done.title": "Pedido enviado. Obrigado!",
    "done.body": "Entraremos em contacto nos próximos dias para combinar o seu kit de degustação.",
    "done.back": "Voltar à página inicial",
    "venues.kit": "Pedir um kit de degustação gratuito",
    "form.mail": "Prefere email? Escreva para <a href=\"mailto:info@drinksao.com\">info@drinksao.com</a>",
    "title.venues": "Kit de degustação gratuito para espaços — São",
    "ticker": "Brevemente em Lisboa e no Algarve",
    "nav.where": "Onde estamos",
    "nav.about": "A nossa história",
    "hero.kicker": "Hard seltzer de Portugal",
    "hero.title": "Leve. Fresco.<br>Até tarde.",
    "hero.line": "Hard seltzer de lima e maracujá numa lata slim, bem gelada. Feito para rooftops, pistas de dança e a praia ao nascer do sol.",
    "hero.cta2": "Venda São",
    "sticker": "novo hard seltzer — novo hard seltzer — ",
    "band.1": "Bem gelado",
    "band.2": "Leve e com gás",
    "flavours.title": "Dois sabores. Escolha o seu.",
    "flavours.intro": "Ambos numa lata slim de 250 ml. Ambos melhores diretamente do balde de gelo.",
    "tag.zesty": "Cítrico", "tag.crisp": "Fresco", "tag.tropical": "Tropical", "tag.tart": "Ácido",
    "facts.title": "O que é São",
    "f1.t": "Lata slim de 250 ml",
    "f1.p": "Fácil de segurar numa pista cheia. Fácil de acabar enquanto ainda está fresca.",
    "f2.t": "Sabores de fruta",
    "f2.p": "Lima e maracujá, dois sabores que já fazem parte do verão português.",
    "f3.t": "Melhor bem gelado",
    "f3.p": "Leve e com gás, feito para noites quentes em vez de cocktails pesados.",
    "f4.t": "Feito para Portugal",
    "f4.p": "Uma marca pensada para os bares de Lisboa e os beach clubs do Algarve, não importada de outro lado.",
    "where.title": "Encontre-nos este verão",
    "where.intro": "Os primeiros espaços aparecem aqui assim que se juntarem.",
    "where.lis": "Rooftops, discotecas até tarde e a comunidade de corrida da cidade.",
    "where.alg": "Beach clubs, pool parties e noites longas na strip.",
    "where.fest.t": "Festivais",
    "where.fest": "Procure o bar São nos festivais de verão por todo o país.",
    "where.soon": "Espaços em breve",
    "where.lis.s": "Rooftops e discotecas",
    "vibe.title": "Rooftops. Beach clubs. Longas noites de verão.",
    "badge.ring": "zero açúcar — 250 ml — zero açúcar — ",
    "facts.sugar": "de açúcar",
    "facts.kcal": "kcal por lata",
    "facts.can": "lata slim",
    "where.title2": "Onde nos encontrar",
    "where.intro2": "Começamos em Lisboa e no Algarve. Os espaços aparecem no mapa assim que se juntarem.",
    "where.fest.l": "Datas em breve",
    "where.alg.s": "Beach clubs",
    "where.fest.s": "Todo o verão",
    "social.title": "Siga a noite",
    "social.cta": "Siga no Instagram",
    "gate.q": "Tem 18 anos ou mais?",
    "gate.yes": "Sim, tenho 18+",
    "gate.no": "Não",
    "gate.denied": "Precisa de ter 18 anos ou mais para visitar este site. Até breve.",
    "gate.small": "Ao entrar, compromete-se a beber São com moderação.",
    "nav.flavours": "Sabores",
    "nav.venues": "Para espaços",
    "hero.cta": "Ver os sabores",
    "lime.name": "Lima",
    "lime.body": "Fresco, limpo e bem gelado. Lima fresca com água com gás, sem nada pegajoso no fim.",
    "mara.name": "Maracujá",
    "mara.body": "Maracujá ácido com um final suave e solarengo. Aquele que pede outra rodada.",
    "can.meta": "Lata slim, 250 ml",
    "about.title": "Dias ativos.<br>Noites com amigos.",
    "about.p1": "Somos dois amigos em Lisboa que gostam de se mexer. Surf, treino, bicicleta, subir e descer as colinas o dia todo. E, no fim, gostamos tanto de uma bebida com os amigos. Queríamos uma que encaixasse nessa vida: leve, fresca, nada pesada. Os bares e beach clubs de Portugal ainda não a serviam. Por isso, criámo-la.",
    "about.p2": "São quer dizer saudável, inteiro. É assim que gostamos de viver: dias cheios, boa companhia, noites longas.",
    "venues.title": "Sirva São no seu espaço",
    "venues.body": "Vamos lançar em Lisboa e no Algarve. Tem um bar, discoteca, beach club ou festival? Fale connosco para pôr São no seu menu.",
    "venues.cta": "Envie-nos um email",
    "venues.l1": "Bares",
    "venues.l2": "Discotecas",
    "venues.l3": "Beach clubs",
    "venues.l4": "Festivais",
    "foot.resp": "Seja responsável. Beba com moderação. Venda proibida a menores de 18 anos.",
    "title": "São — Hard seltzer de Portugal"
  }
};

const store = {
  get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
  set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
};

function setLang(lang) {
  if (!T[lang]) lang = "en";
  const dict = T[lang];
  document.documentElement.lang = lang === "pt" ? "pt-PT" : "en";
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const v = dict[el.dataset.i18n];
    if (v != null) el.innerHTML = v;
  });
  document.querySelectorAll("[data-i18n-ph]").forEach(el => {
    const v = dict[el.dataset.i18nPh];
    if (v != null) el.placeholder = v;
  });
  const page = document.body.dataset.page;
  document.title = (page && dict["title." + page]) || dict.title;
  document.querySelectorAll('input[name="language"]').forEach(i => { i.value = lang; });
  document.querySelectorAll(".lang button").forEach(b => {
    b.setAttribute("aria-pressed", String(b.dataset.lang === lang));
  });
  store.set("sao-lang", lang);
}

document.querySelectorAll(".lang button").forEach(b => {
  b.addEventListener("click", () => setLang(b.dataset.lang));
});

// Running bars: repeat the content once so the loop is seamless.
document.querySelectorAll(".band__track").forEach(t => {
  t.innerHTML = t.innerHTML.repeat(2);
  t.innerHTML += t.innerHTML;
});

// Default English; remember the visitor's choice.
setLang(store.get("sao-lang") || "en");

// Contact button
const contact = document.getElementById("contact-link");
if (contact) {
  if (CONTACT_EMAIL) contact.href = "mailto:" + CONTACT_EMAIL;
  else contact.hidden = true;
}
const insta = document.getElementById("insta-link");
if (insta) {
  if (INSTAGRAM_URL) { insta.href = INSTAGRAM_URL; insta.target = "_blank"; insta.rel = "noopener"; }
  else insta.hidden = true;
}

// Age check
const gate = document.getElementById("gate");
if (store.get("sao-age") !== "ok") {
  gate.hidden = false;
  document.body.classList.add("locked");
  document.getElementById("gate-yes").focus({ focusVisible: false });
}
document.getElementById("gate-yes").addEventListener("click", () => {
  store.set("sao-age", "ok");
  document.body.classList.remove("locked");
  gate.classList.add("leaving");
  setTimeout(() => { gate.hidden = true; }, 520);
});
document.getElementById("gate-no").addEventListener("click", () => {
  document.getElementById("gate-actions").hidden = true;
  document.getElementById("gate-denied").hidden = false;
});

document.getElementById("year").textContent = new Date().getFullYear();

// Flavour panels: gentle scroll movement (skipped when reduced motion is on)
(function () {
  const panels = document.querySelectorAll(".fl");
  if (!panels.length || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  let ticking = false;
  function update() {
    const vh = window.innerHeight;
    panels.forEach(p => {
      const r = p.getBoundingClientRect();
      const t = ((r.top + r.height / 2) - vh / 2) / vh; // 0 when centred
      p.style.setProperty("--p", Math.max(-1, Math.min(1, t)).toFixed(3));
    });
    ticking = false;
  }
  window.addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
  window.addEventListener("resize", update);
  update();
})();

// Map: venues (add real venues here as they sign on) and list <-> pin highlighting
const VENUES = [
  // { name: "Bar name", city: "lisboa", lat: 38.711, lon: -9.143 },
];
(function () {
  const map = document.querySelector(".map");
  if (!map) return;
  // Same projection as the map drawing
  const K = 0.771625, MINX = -7.328945, MAXY = 42.143375, PAD = 0.05, SC = 151.8849;
  const proj = (lon, lat) => [(lon * K - MINX + PAD) * SC, (MAXY - lat + PAD) * SC];
  const g = document.getElementById("map-venues");
  VENUES.forEach(v => {
    const [x, y] = proj(v.lon, v.lat);
    const c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c.setAttribute("cx", x.toFixed(1)); c.setAttribute("cy", y.toFixed(1)); c.setAttribute("r", "6");
    c.setAttribute("class", "map__venue");
    const t = document.createElementNS("http://www.w3.org/2000/svg", "title"); t.textContent = v.name; c.appendChild(t);
    g.appendChild(c);
  });
  ["lisboa", "algarve"].forEach(city => {
    const names = VENUES.filter(v => v.city === city).map(v => v.name);
    const el = document.querySelector('.where__venues[data-city="' + city + '"]');
    if (el && names.length) { el.removeAttribute("data-i18n"); el.textContent = names.join(", "); }
  });
  const items = document.querySelectorAll("#where-list li");
  const set = place => {
    map.dataset.active = place || "";
    items.forEach(li => li.classList.toggle("is-active", li.dataset.place === place));
  };
  items.forEach(li => {
    ["mouseenter", "focus"].forEach(ev => li.addEventListener(ev, () => set(li.dataset.place)));
    ["mouseleave", "blur"].forEach(ev => li.addEventListener(ev, () => set("")));
  });
  document.querySelectorAll(".pin").forEach(p => {
    p.addEventListener("mouseenter", () => set(p.dataset.place));
    p.addEventListener("mouseleave", () => set(""));
  });
})();

// Netlify forms: any <form data-netlify> with a [data-done] panel and a .form__error line
document.querySelectorAll("form[data-netlify]").forEach(form => {
  const err = form.querySelector(".form__error");
  const done = document.getElementById(form.dataset.done);
  const btn = form.querySelector(".form__submit");
  const t = k => T[document.documentElement.lang === "pt-PT" ? "pt" : "en"][k];

  form.addEventListener("submit", async e => {
    e.preventDefault();
    err.hidden = true;
    form.querySelectorAll(".is-invalid").forEach(el => el.classList.remove("is-invalid"));
    const invalid = [...form.querySelectorAll("[required]")].filter(el => !el.checkValidity());
    if (invalid.length) {
      invalid.forEach(el => (el.closest(".field, .check") || el).classList.add("is-invalid"));
      err.textContent = t("form.err.fields");
      err.hidden = false;
      invalid[0].focus();
      return;
    }
    const label = btn.innerHTML;
    btn.disabled = true;
    btn.textContent = t("form.sending");
    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(new FormData(form)).toString()
      });
      if (!res.ok) throw new Error(res.status);
      form.hidden = true;
      done.hidden = false;
      done.focus();
    } catch (x) {
      err.textContent = t("form.err.send");
      err.hidden = false;
      btn.disabled = false;
      btn.innerHTML = label;
    }
  });
  form.addEventListener("input", e => {
    const f = e.target.closest(".field, .check");
    if (f && e.target.checkValidity()) f.classList.remove("is-invalid");
  });
});
