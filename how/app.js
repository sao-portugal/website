/* House of Waves — gedeelde logica: winkelwagen, drawer, productkaarten, reveal */
(function () {
  const P = window.HOW_PRODUCTS || [];
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
  const total = () => cart.reduce((a, l) => a + l.q * variant(l).p, 0);
  function add(h, id, q) {
    const l = cart.find(x => x.id === id);
    if (l) l.q += q; else cart.push({ h, id, q });
    save(); openDrawer();
  }
  function setQ(id, q) { const l = cart.find(x => x.id === id); if (!l) return; l.q = Math.max(0, Math.min(20, q)); cart = cart.filter(x => x.q > 0); save(); }
  function checkoutUrl() { return "https://houseofwaves.nl/cart/" + cart.map(l => l.id + ":" + l.q).join(","); }
  window.HOW = { add, setQ, cart: () => cart, total, count, euro, byH, P, checkoutUrl, FREE, variant, reduce };

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
      '<div class="qty" role="group" aria-label="Aantal"><button type="button" data-q="' + l.id + '" data-d="-1" aria-label="Eén minder">−</button><span>' + l.q + '</span><button type="button" data-q="' + l.id + '" data-d="1" aria-label="Eén meer">+</button></div></div>' +
      '<div class="line-r"><span class="line-p">' + euro(v.p * l.q) + '</span><button type="button" class="rm" data-rm="' + l.id + '">verwijder</button></div></li>';
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
    const tag = p.h.includes("bundle") ? '<span class="tag">bundel · voordeel</span>' : sold ? '<span class="tag">uitverkocht</span>' : "";
    const quick = p.v.length === 1 && !sold ? '<button class="quick" type="button" data-add="' + p.h + '" aria-label="' + p.t + ' in winkelwagen">+ in winkelwagen</button>' : "";
    return '<article class="item' + (opts.big ? " big" : "") + '"><div class="phw"><a class="ph" href="product.html?p=' + p.h + '">' + tag +
      '<img src="' + p.img[0] + '" alt="' + p.t + '" loading="lazy">' + (p.img[1] ? '<img src="' + p.img[1] + '" alt="" loading="lazy">' : "") + '</a>' + quick + '</div>' +
      '<a class="meta" href="product.html?p=' + p.h + '"><h3>' + p.t.replace(" - ", " · ") + '</h3><span class="price">' + (p.v.length > 1 && p.v.some(v => v.p !== min) ? "vanaf " : "") + euro(min) + '</span></a></article>';
  };
  document.addEventListener("click", e => {
    const b = e.target.closest("[data-add]"); if (!b) return;
    const p = byH[b.dataset.add]; add(p.h, p.v[0].id, 1);
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

  /* ---------- FAQ: golfje dat wegspoelt als je een vraag opent ---------- */
  const WAVE = '<svg class="surfy" viewBox="0 0 40 24" aria-hidden="true"><path class="flat" d="M4 17.5 C10 17 16 18 22 17.4 S32 17 36 17.5"/><g class="roll"><path d="M2 17.5 C7 17.5 9.5 15 12 11 C15 6 18.5 3.2 23.5 3.2 C28.5 3.2 31 6.8 29.2 9.8 C27.6 12.2 24.4 11.6 24.6 9.1"/><path class="tail" d="M25 17.5 C28 17.5 29.5 15.8 32 15.8 C34.5 15.8 35.8 17.5 38 17.5"/><circle cx="31.5" cy="4.5" r=".9"/><circle cx="34" cy="7.5" r=".7"/></g></svg>';
  document.querySelectorAll(".acc summary").forEach(s => s.insertAdjacentHTML("beforeend", WAVE));

  /* ---------- Mobiel menu ---------- */
  const mBtn = document.getElementById("menuBtn"), mNav = document.getElementById("mobileNav");
  if (mBtn) mBtn.addEventListener("click", () => { const o = mNav.hidden; mNav.hidden = !o; mBtn.setAttribute("aria-expanded", String(o)); });

  render();
  document.addEventListener("DOMContentLoaded", () => window.HOW.reveal());
})();
