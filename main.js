// São — brand site behaviour: age check + EN/PT language switch.

// Set this to your contact address to show the "Email us" button.
const CONTACT_EMAIL = "";
// Set this to your Instagram URL to show the "Follow on Instagram" button.
const INSTAGRAM_URL = "";

const T = {
  en: {
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
    "badge.ring": "slim can — slim can — slim can — ",
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
    "about.title": "Run in the morning.<br>Out at night.",
    "about.p1": "We're two friends in Lisbon. One of us runs a running club here. Between 7am runs and 2am rooftops, we wanted the same drink: light, cold and good. Portugal's bars and beach clubs weren't pouring it yet. So we made it.",
    "about.p2": "São means healthy in Portuguese. Light enough for the long night, fresh enough for the morning after.",
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
    "badge.ring": "lata slim — lata slim — lata slim — ",
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
    "about.title": "Corrida de manhã.<br>Festa à noite.",
    "about.p1": "Somos dois amigos em Lisboa. Uma de nós lidera um clube de corrida na cidade. Entre corridas às 7h e rooftops às 2h, queríamos a mesma bebida: leve, fresca e boa. Os bares e beach clubs de Portugal ainda não a serviam. Por isso, criámo-la.",
    "about.p2": "São quer dizer saudável. Leve o suficiente para a noite longa, fresca o suficiente para a manhã seguinte.",
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
  document.title = dict.title;
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
if (CONTACT_EMAIL) contact.href = "mailto:" + CONTACT_EMAIL;
else contact.hidden = true;
const insta = document.getElementById("insta-link");
if (INSTAGRAM_URL) { insta.href = INSTAGRAM_URL; insta.target = "_blank"; insta.rel = "noopener"; }
else insta.hidden = true;

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
