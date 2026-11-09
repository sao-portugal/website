/* House of Waves — gedeelde logica: winkelwagen, drawer, productkaarten, reveal */
(function () {
  const P = window.HOW_PRODUCTS || [];
  /* ---------- Sale: alle kleding 40% (zet on op false als de sale voorbij is) ---------- */
  /* ---------- Black Friday: 70% op de volledige sportset (top + shorts in dezelfde kleur) ---------- */
  const BF = { pct: 70, code: "BLACKFRIDAY70", start: "2026-11-27T00:00:00+01:00", end: "2026-11-30T23:59:59+01:00",
    sets: { "ocean-blue": ["sport-top-ocean-blue", "shorts-ocean-blue"], "flowy-green": ["sport-top-flowy-green", "shorts-flowy-green"] } };
  // op de concept-site kun je de actie bekijken met ?bf=preview in de url
  try { if (/[?&]bf=preview/.test(location.search)) sessionStorage.setItem("how-bf", "1"); } catch (e) {}
  const bfLive = () => { const n = Date.now(); let pv = false; try { pv = sessionStorage.getItem("how-bf") === "1"; } catch (e) {} return pv || (n >= Date.parse(BF.start) && n <= Date.parse(BF.end)); };
  const SALE = { on: true, pct: 40, code: "KLEDING40", h: ["hoodie-blue-sunset", "hoodie-green-eye", "sweater-stargazer", "zip-jacket-flowy-green", "t-shirt-sunset-aura", "t-shirt-ocean-aura", "sport-top-ocean-blue", "shorts-ocean-blue", "sport-top-flowy-green", "shorts-flowy-green", "bucket-hat-house-of-waves"] };
  if (SALE.on) P.forEach(p => { if (SALE.h.includes(p.h)) { p.sale = true; p.v.forEach(v => { v.was = v.p; v.p = Math.round(v.p * (100 - SALE.pct)) / 100; }); } });
  const byH = Object.fromEntries(P.map(p => [p.h, p]));
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const FREE = 100;
  const euro = n => "€" + n.toFixed(2).replace(".", ",");
  document.documentElement.classList.add("js");

  /* ---------- Winkelwagen (per browser bewaard) ---------- */
  const KEY = "how-cart";
  let cart = [];
  try { cart = JSON.parse(localStorage.getItem(KEY) || "[]"); } catch (e) { cart = []; }
  cart = cart.filter(l => byH[l.h] && byH[l.h].v.some(v => v.id === l.id));
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(cart)); } catch (e) {} render(); };
  const variant = l => byH[l.h].v.find(v => v.id === l.id);
  const count = () => cart.reduce((a, l) => a + l.q, 0);
  // hoeveel stuks van een regel horen bij een complete set (top + shorts van dezelfde kleur)
  function setAlloc() {
    const m = {}; if (!bfLive()) return m;
    Object.entries(BF.sets).forEach(([k, mem]) => {
      const pairs = Math.min(...mem.map(h => cart.filter(l => l.set === k && l.h === h).reduce((a, l) => a + l.q, 0)));
      mem.forEach(h => { let r = pairs; cart.filter(l => l.set === k && l.h === h).forEach(l => { const d = Math.min(l.q, r); m[l.id] = d; r -= d; }); });
    });
    return m;
  }
  const bfUnit = v => Math.round((v.was || v.p) * (100 - BF.pct)) / 100;
  function lineTotal(l, a) { a = a || setAlloc(); const v = variant(l), d = a[l.id] || 0; return d * bfUnit(v) + (l.q - d) * v.p; }
  function lineWas(l) { const v = variant(l); return (v.was || v.p) * l.q; }
  const total = () => { const a = setAlloc(); return cart.reduce((s, l) => s + lineTotal(l, a), 0); };
  function add(h, id, q, quiet, set) {
    const l = cart.find(x => x.id === id);
    if (l) { l.q += q; if (set) l.set = set; } else cart.push(set ? { h, id, q, set } : { h, id, q });
    save();
    if (quiet) document.dispatchEvent(new CustomEvent("added", { detail: { h, id } })); else openDrawer();
  }
  function setQ(id, q) { const l = cart.find(x => x.id === id); if (!l) return; l.q = Math.max(0, Math.min(20, q)); cart = cart.filter(x => x.q > 0); save(); }
  function checkoutUrl() {
    const a = setAlloc(), hasSet = Object.values(a).some(d => d > 0);
    const code = hasSet ? BF.code : SALE.on && cart.some(l => byH[l.h].sale) ? SALE.code : "";
    return "https://houseofwaves.nl/cart/" + cart.map(l => l.id + ":" + l.q).join(",") + (code ? "?discount=" + code : "");
  }
  window.HOW = { SALE, BF, bfLive, bfUnit, setAlloc, lineTotal, lineWas, add, openDrawer: () => openDrawer(), setQ, cart: () => cart, total, count, euro, byH, P, checkoutUrl, FREE, variant, reduce };

  /* ---------- Drawer ---------- */
  const drawer = document.getElementById("drawer"), scrim = document.getElementById("scrim");
  function openDrawer() { if (!drawer) return; drawer.hidden = false; scrim.hidden = false; requestAnimationFrame(() => { drawer.classList.add("open"); scrim.classList.add("open"); }); drawer.querySelector(".x").focus(); }
  function closeDrawer() { if (!drawer) return; drawer.classList.remove("open"); scrim.classList.remove("open"); setTimeout(() => { drawer.hidden = true; scrim.hidden = true; }, reduce ? 0 : 400); }
  document.querySelectorAll("[data-open-cart]").forEach(b => b.addEventListener("click", e => { e.preventDefault(); openDrawer(); }));
  if (drawer) { drawer.querySelector(".x").addEventListener("click", closeDrawer); scrim.addEventListener("click", closeDrawer); addEventListener("keydown", e => { if (e.key === "Escape" && drawer.classList.contains("open")) closeDrawer(); }); }

  function shipBar(el) {
    const t = total(), left = Math.max(0, FREE - t), pct = Math.min(100, t / FREE * 100);
    el.innerHTML = '<p>' + (left > 0 ? 'Nog <b>' + euro(left) + '</b> tot gratis verzending' : '<b>Je verzending is gratis</b> 🌊') + '</p><div class="ship-track"><i style="width:' + pct + '%"></i></div>';
  }
  function lineHTML(l) {
    const p = byH[l.h], v = variant(l);
    return '<li class="line"><a href="product.html?p=' + p.h + '"><img src="' + p.img[0] + '" alt=""></a><div class="line-info"><a href="product.html?p=' + p.h + '" class="line-t">' + p.t.replace(" - ", " · ") + '</a>' +
      (v.t !== "Default Title" ? '<span class="line-v">maat ' + v.t + '</span>' : '') +
      ((setAlloc()[l.id] || 0) > 0 ? '<span class="line-v" style="color:#E8573A;font-weight:700">black friday set −' + BF.pct + '%</span>' : '') +
      '<div class="qty" role="group" aria-label="Aantal"><button type="button" data-q="' + l.id + '" data-d="-1" aria-label="Eén minder">−</button><span>' + l.q + '</span><button type="button" data-q="' + l.id + '" data-d="1" aria-label="Eén meer">+</button></div></div>' +
      '<div class="line-r"><span class="line-p">' + (lineWas(l) > lineTotal(l) ? '<s>' + euro(lineWas(l)) + '</s>' : '') + euro(lineTotal(l)) + '</span><button type="button" class="rm" data-rm="' + l.id + '">verwijder</button></div></li>';
  }
  function bindLines(root) {
    root.querySelectorAll("[data-q]").forEach(b => b.addEventListener("click", () => { const l = cart.find(x => x.id == b.dataset.q); setQ(l.id, l.q + +b.dataset.d); }));
    root.querySelectorAll("[data-rm]").forEach(b => b.addEventListener("click", () => setQ(+b.dataset.rm, 0)));
  }
  function render() {
    document.querySelectorAll("[data-count]").forEach(el => { const c = count(); el.textContent = c; el.hidden = c === 0; });
    if (drawer) {
      const body = drawer.querySelector(".d-body"), foot = drawer.querySelector(".d-foot");
      shipBar(drawer.querySelector(".ship"));
      if (!cart.length) {
        body.innerHTML = '<div class="empty"><p class="hand">nog leeg hier</p><p>Begin bij de journal essentials, daar starten de meeste waves.</p><a class="btn solid" href="shop.html?c=journal-essentials">naar de journal essentials</a></div>';
        foot.hidden = true;
      } else {
        body.innerHTML = '<ul class="lines">' + cart.map(lineHTML).join("") + '</ul>';
        bindLines(body);
        foot.hidden = false;
        foot.querySelector("[data-sub]").textContent = euro(total());
        foot.querySelector("[data-checkout]").href = checkoutUrl();
      }
    }
    document.dispatchEvent(new CustomEvent("cart"));
  }
  window.HOW.lineHTML = lineHTML; window.HOW.bindLines = bindLines; window.HOW.shipBar = shipBar;

  /* ---------- Productkaart ---------- */
  window.HOW.card = function (p, opts) {
    opts = opts || {};
    const v0 = p.v[0], min = Math.min(...p.v.map(v => v.p)), sold = p.v.every(v => !v.a);
    const tag = sold ? '<span class="tag">uitverkocht</span>' : p.sale ? '<span class="tag">−' + SALE.pct + '%</span>' : p.h.includes("bundle") ? '<span class="tag">bundel · voordeel</span>' : "";
    const quick = p.v.length === 1 && !sold ? '<button class="quick" type="button" data-add="' + p.h + '" aria-label="' + p.t + ' in winkelwagen">+ in winkelwagen</button>' : "";
    return '<article class="item' + (opts.big ? " big" : "") + '"><div class="phw"><a class="ph" href="product.html?p=' + p.h + '">' + tag +
      '<img src="' + p.img[0] + '" alt="' + p.t + '" loading="lazy">' + (p.img[1] ? '<img src="' + p.img[1] + '" alt="" loading="lazy">' : "") + '</a>' + quick + '</div>' +
      '<a class="meta" href="product.html?p=' + p.h + '"><h3>' + p.t.replace(" - ", " · ") + '</h3><span class="price">' + (p.v.length > 1 && p.v.some(v => v.p !== min) ? "vanaf " : "") + (p.sale ? '<s>' + euro(Math.min(...p.v.map(v => v.was))) + '</s>' : '') + euro(min) + '</span></a>' + (p.sale && !sold ? (function () { const left = p.v.filter(v => v.a).length, save = Math.max(...p.v.map(v => v.was - v.p)); return '<p class="save">je bespaart ' + euro(save) + (p.v.length > 1 && left === 1 ? ' · <b>nog maar 1 maat</b>' : '') + '</p>'; })() : '') + (opts.sizes && p.v.length > 1 ? '<div class="sz" role="group" aria-label="Kies je maat">' + p.v.map(v => '<button type="button" ' + (v.a ? 'data-addv="' + p.h + '|' + v.id + '"' : 'disabled') + ' aria-label="' + p.t + ' maat ' + v.t + (v.a ? '' : ', uitverkocht') + '">' + v.t.charAt(0) + '</button>').join("") + '</div>' : '') + '</article>';
  };
  document.addEventListener("click", e => {
    const b = e.target.closest("[data-add]"); if (!b) return;
    const p = byH[b.dataset.add]; add(p.h, p.v[0].id, 1);
  });
  document.addEventListener("click", e => {
    const b = e.target.closest("[data-addv]"); if (!b) return;
    const [h, id] = b.dataset.addv.split("|"); add(h, +id, 1, b.hasAttribute("data-quiet"));
  });

  /* ---------- Reveal ---------- */
  window.HOW.reveal = function () {
    const rv = document.querySelectorAll(".rv:not(.in)");
    if ("IntersectionObserver" in window && !reduce) {
      const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: .1, rootMargin: "0px 0px -40px 0px" });
      rv.forEach(el => io.observe(el));
      setTimeout(() => rv.forEach(el => el.classList.add("in")), 1200);
    } else rv.forEach(el => el.classList.add("in"));
  };

  /* ---------- FAQ: het golfje gaat liggen tot vlak water bij openen, en komt weer op bij sluiten ---------- */
  // dezelfde lijn in twee standen; we schuiven geleidelijk tussen de punten, zodat de golf echt gaat liggen
  const UP   = [2,18, 7,18, 9.5,15.5, 12,11.5, 15,6.5, 18.5,3.5, 23.5,3.5, 28.5,3.5, 31,7, 29.2,10, 27.6,12.4, 24.4,11.8, 24.6,9.3];
  const FLAT = [2,18, 7,18, 10,18, 13,18, 17,18, 20,18, 24,18, 28,18, 31,18, 34,18, 36,18, 37,18, 38,18];
  const pathAt = h => { // h = 1 golf, 0 vlak
    const k = 1 - h, p = UP.map((v, i) => FLAT[i] + (v - FLAT[i]) * h + (i % 2 ? 0 : Math.sin(k * Math.PI) * 3 * (i / UP.length)));
    return "M" + p[0] + " " + p[1] + " C" + p.slice(2, 8).join(" ") + " C" + p.slice(8, 14).join(" ") + " C" + p.slice(14, 20).join(" ") + " C" + p.slice(20, 26).join(" ");
  };
  const ease = t => t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  function setWave(svg, h) { svg.firstChild.setAttribute("d", pathAt(h)); svg.lastChild.style.opacity = h; svg.dataset.h = h; }
  function animWave(svg, to, delay) {
    const from = +svg.dataset.h, t0 = performance.now() + (delay || 0), dur = 700;
    cancelAnimationFrame(svg._raf);
    if (reduce) return setWave(svg, to);
    const step = now => { const t = Math.min(1, Math.max(0, (now - t0) / dur)); setWave(svg, from + (to - from) * ease(t)); if (t < 1) svg._raf = requestAnimationFrame(step); };
    svg._raf = requestAnimationFrame(step);
  }
  document.querySelectorAll(".acc details").forEach(d => {
    const s = d.querySelector("summary");
    s.insertAdjacentHTML("beforeend", '<svg class="surfy" viewBox="0 0 40 24" aria-hidden="true"><path/><path class="tail" d="M25 18 C28 18 29.5 16.3 32 16.3 C34.5 16.3 35.8 18 38 18"/></svg>');
    const svg = s.lastElementChild; setWave(svg, d.open ? 0 : 1);
    d.addEventListener("toggle", () => animWave(svg, d.open ? 0 : 1));
  });
  // bij binnenscrollen komen de golfjes één voor één op
  if ("IntersectionObserver" in window && !reduce) {
    const closed = [...document.querySelectorAll(".acc details:not([open]) .surfy")];
    closed.forEach(svg => setWave(svg, 0));
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (!e.isIntersecting) return; io.unobserve(e.target);
      e.target.querySelectorAll("details:not([open]) .surfy").forEach((svg, i) => animWave(svg, 1, i * 110));
    }), { threshold: .3 });
    document.querySelectorAll(".acc").forEach(a => io.observe(a));
  }

  /* ---------- Mobiel menu ---------- */
  const mBtn = document.getElementById("menuBtn"), mNav = document.getElementById("mobileNav");
  if (mBtn) mBtn.addEventListener("click", () => { const o = mNav.hidden; mNav.hidden = !o; mBtn.setAttribute("aria-expanded", String(o)); });

  // tijdens Black Friday wijst de aankondigingsbalk naar de actiepagina
  if (bfLive()) document.querySelectorAll(".sale-bar").forEach(a => { a.href = "black-friday.html"; a.textContent = "black friday: 70% op de volledige sportset 🌊"; });
  render();
  document.addEventListener("DOMContentLoaded", () => window.HOW.reveal());
})();
