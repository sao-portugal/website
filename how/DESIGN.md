# House of Waves · DESIGN.md

Gebaseerd op houseofwaves.nl zelf (Shopify Dawn-thema, bekeken 8 nov 2026), niet op voorbeelden van andere sites.
Doel: hun kleuren, letters en beelden; het ontwerp en de UX mogen beter dan hun huidige thema.

## Kleur
| token | waarde | rol |
|---|---|---|
| `--how-sand` | `#F5ECDD` | achtergrond van elke pagina (hun eigen achtergrond) |
| `--how-teal` | `#305D6A` | koppen, knoppen, links, footer-vlak, aankondigingsbalk |
| `--how-text` | `rgba(48,93,106,.78)` | broodtekst (hun body staat op 75% teal) |
| `--how-white` | `#FFFFFF` | reviewkaartjes, tekst op teal en op foto's |
| `--how-sale` | `#E8573A` | **alleen** sale-prijs en sale-label; komt uit hun "are you ready for new energy"-beeld |
| `--how-line` | `rgba(48,93,106,.18)` | randen van invoervelden en maat-pills |

Contrast: teal op zand 6,3:1; wit op teal 7,4:1; sale-oranje alleen op groot/vet (≥ 18px bold).

## Typografie
- Koppen: **Gloock**, kleine letters, teal. h1 clamp(34–64px)/1.05, h2 clamp(26–40px)/1.1, h3 15–17px.
- Tekst: **Helvetica, Arial, sans-serif** (hun body), 16px/1.6, gewicht 400 en 700. Knoppen 15px bold.
- Handschrift: nooit als lettertype. Alleen hun eigen handgeschreven beelden en video.
- Koppen in hun patroon: `waves of movement: the sport collection` (collectie, dubbele punt, wat het is).

## Ruimte
4px-basis: 4, 8, 12, 16, 24, 32, 48, 64, 96. Secties 64px (mobiel 48px). Tekstbreedte 1200px; productrijen lopen van rand tot rand, net als op hun homepage.

## Vorm
- Radius: 0 voor foto's en banners van rand tot rand; 6px voor productfoto's en beelden in de tekstbreedte; 4px voor knoppen en invoer; 10px voor reviewkaartjes; 40px voor maat-pills en labels.
- Schaduw: geen. Diepte komt uit de foto's.

## Componenten
- Primaire knop: teal vlak, witte bold tekst, recht, min-hoogte 48px. Hover: 85% teal. Focus: 2px teal outline met 3px offset.
- Secundaire knop: 1px teal rand, teal tekst.
- Maat-pill: 40px radius, 1px lijn, 44×36; gekozen/hover teal vlak; uitverkocht doorgestreept op 40%.
- Productkaart: foto 4:5 zonder radius, naam in Gloock 15px, prijs Helvetica bold; bij sale: oude prijs doorgestreept op 60%, nieuwe in `--how-sale`.
- Review: wit kaartje 14px radius, cursieve bold quote in teal, naam bold, product klein.
- Aankondigingsbalk: teal, witte tekst 13px, gecentreerd.

## Beeld
- Hun eigen video's en foto's, groot en van rand tot rand. Geen illustraties, geen aura-vlekken, geen stockbeeld.
- Handgeschreven teksten alleen zoals ze in hun eigen beelden staan.
- Emoji spaarzaam zoals zij doen (🌊, <3).

## Opbouw (sinds 10 nov 2026, richting Bram's Fruit)
- Elke pagina opent met een grote foto van rand tot rand, op desktop vaak als tweeluik van twee staande foto's. Tekst klein en kort: één regel boven, een kop in Gloock, een onderstreepte link. Nooit een vlak of kader over de foto.
- Plaats de tekst waar de foto leeg is (lucht, water); anders onderaan met een zachte donkere overgang.
- Producten in rustige rijen van rand tot rand met pijlen (desktop) of vegen (mobiel), met tabs in Gloock erboven.
- Tussen productrijen: één brede foto-banner met een korte kop en link.
- Productkaarten: foto 4:5 op `--sand-2`, naam en prijs in kleine Helvetica, labels als klein pilletje met stip.
- Footer licht (`--sand-2`) met nieuwsbrief als onderstreept invoerveld.
- Stylesheet: `brand.css` (de oude `style.css` wordt niet meer gebruikt).
