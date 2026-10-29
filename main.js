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
    "hero.title": "Light. Dry.<br>Out late.",
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
    "about.title": "Made for the Portuguese night.",
    "about.p1": "Portugal knows how to stay out late. From rooftop bars in Lisbon to beach clubs in the Algarve, the night runs long and the sun comes up warm. São is the drink for all of it: light enough for one more, cold enough for the heat.",
    "about.p2": "Our name means healthy, whole, sound. It is also the word in front of every saint Lisbon parties for in June. Both feel right to us.",
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
    "hero.title": "Leve. Seco.<br>Até tarde.",
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
    "about.title": "Feito para a noite portuguesa.",
    "about.p1": "Portugal sabe ficar até tarde. Dos rooftops de Lisboa aos beach clubs do Algarve, a noite é longa e o sol nasce quente. São é a bebida para tudo isso: leve o suficiente para mais uma, fresca o suficiente para o calor.",
    "about.p2": "O nosso nome quer dizer saudável, inteiro, são. É também a palavra à frente de cada santo que Lisboa festeja em junho. As duas coisas fazem sentido para nós.",
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
document.querySelectorAll(".ticker__track, .band__track").forEach(t => {
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
