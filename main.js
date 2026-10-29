// São — brand site behaviour: age check + EN/PT language switch.

// Set this to your contact address to show the "Email us" button.
const CONTACT_EMAIL = "";

const T = {
  en: {
    "gate.q": "Are you 18 or older?",
    "gate.yes": "Yes, I'm 18+",
    "gate.no": "No",
    "gate.denied": "You need to be 18 or older to visit this site. See you later.",
    "gate.small": "By entering you agree to enjoy São responsibly.",
    "nav.flavours": "Flavours",
    "nav.about": "About",
    "nav.venues": "For venues",
    "hero.line": "Hard seltzer from Portugal.<br>Light, dry and made for long nights.",
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
    "gate.q": "Tem 18 anos ou mais?",
    "gate.yes": "Sim, tenho 18+",
    "gate.no": "Não",
    "gate.denied": "Precisa de ter 18 anos ou mais para visitar este site. Até breve.",
    "gate.small": "Ao entrar, compromete-se a beber São com moderação.",
    "nav.flavours": "Sabores",
    "nav.about": "Sobre nós",
    "nav.venues": "Para espaços",
    "hero.line": "Hard seltzer de Portugal.<br>Leve, seco e feito para noites longas.",
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

// Default English; remember the visitor's choice.
setLang(store.get("sao-lang") || "en");

// Contact button
const contact = document.getElementById("contact-link");
if (CONTACT_EMAIL) contact.href = "mailto:" + CONTACT_EMAIL;
else contact.hidden = true;

// Age check
const gate = document.getElementById("gate");
if (store.get("sao-age") !== "ok") {
  gate.hidden = false;
  document.body.classList.add("locked");
  document.getElementById("gate-yes").focus();
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
