// Builds the four language pages from the single multilingual source.
//
//   Edit:  src/site.html
//   Run:   node build.mjs
//   Out:   index.html (de), en/index.html, fr/index.html, ru/index.html
//
// Source conventions:
//   • Translated text: sibling elements with a language class, e.g.
//       <span class="de">Kontakt</span><span class="en">Contact</span>
//     Each page keeps only its own language (class token removed) and drops
//     the others entirely, so search engines see exactly one language per URL.
//   • Translated attributes: data-i18n-<attr>-<lang>="…"  →  <attr>="…"
//   • Translated <option> text: data-i18n-text-<lang>="…"
//   • Per-language <head> values: {{placeholders}} filled from PAGES below.

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const SITE = 'https://kanzlei-hausmann.berlin';
const LANGS = ['de', 'en', 'fr', 'ru'];
const OG_LOCALE = { de: 'de_DE', en: 'en_GB', fr: 'fr_FR', ru: 'ru_RU' };
const VOID = new Set(['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'source', 'track', 'wbr']);

export const PAGES = {
  de: {
    out: 'index.html',
    path: '/',
    inLanguage: 'de-DE',
    title: 'Kanzlei Dr. Dr. Hausmann: Steuerberatung & Steuerrecht Berlin | Fachanwalt',
    description: 'Kanzlei Dr. Dr. Hausmann: Steuerberatung & Steuerrecht in Berlin. Fachanwalt für Steuerrecht, Steuerstrafrecht und Steuergestaltung für Unternehmen. Über 20 Jahre Erfahrung. Jetzt Beratung anfragen.',
    keywords: 'Steuerberatung Berlin, Fachanwalt Steuerrecht Berlin, Steuerstrafrecht Berlin, Steuergestaltung Unternehmen, Rechtsanwalt Steuerrecht Berlin, Dr. Hausmann Steuerberatung',
    ogTitle: 'Kanzlei Dr. Dr. Hausmann: Steuerberatung & Steuerrecht Berlin',
    ogDescription: 'Steuerberatung & Steuerrecht in Berlin. Fachanwalt für Steuerrecht, Steuerstrafrecht und Steuergestaltung für Unternehmen. Über 20 Jahre Erfahrung.',
    twitterDescription: 'Steuerberatung & Steuerrecht in Berlin. Fachanwalt für Steuerrecht, Steuerstrafrecht und Steuergestaltung für Unternehmen.',
    schemaDescription: 'Berliner Rechtsanwalts- und Steuerkanzlei mit Schwerpunkt Steuerrecht, Steuerstrafrecht, Steuerberatung und Steuergestaltung für Unternehmen.',
  },
  en: {
    out: 'en/index.html',
    path: '/en/',
    inLanguage: 'en-GB',
    title: 'Kanzlei Dr. Dr. Hausmann: Tax Law & Legal Counsel Berlin | Attorney',
    description: 'Kanzlei Dr. Dr. Hausmann: Tax law and legal counsel in Berlin. Attorney specialising in tax law, criminal tax law and tax planning for businesses. Over 20 years of experience. Arrange a consultation now.',
    keywords: 'tax advisory Berlin, tax law attorney Berlin, criminal tax law Berlin, tax planning for businesses, Berlin law firm tax law, Dr. Hausmann tax advisory',
    ogTitle: 'Kanzlei Dr. Dr. Hausmann: Tax Law & Legal Counsel Berlin',
    ogDescription: 'Tax law and legal counsel in Berlin. Attorney specialising in tax law, criminal tax law and tax planning for businesses. Over 20 years of experience.',
    twitterDescription: 'Tax law and legal counsel in Berlin. Attorney specialising in tax law, criminal tax law and tax planning for businesses.',
    schemaDescription: 'Berlin-based law and tax firm specialising in tax law, criminal tax law, tax advisory, and tax planning for businesses.',
  },
  fr: {
    out: 'fr/index.html',
    path: '/fr/',
    inLanguage: 'fr-FR',
    title: 'Kanzlei Dr. Dr. Hausmann : Droit Fiscal & Conseil Juridique Berlin | Avocat',
    description: "Kanzlei Dr. Dr. Hausmann : droit fiscal et conseil juridique à Berlin. Avocat spécialisé en droit fiscal, droit pénal fiscal et planification fiscale pour entreprises. Plus de 20 ans d'expérience. Demandez une consultation dès maintenant.",
    keywords: "conseil fiscal Berlin, avocat droit fiscal Berlin, droit pénal fiscal Berlin, planification fiscale entreprises, cabinet d'avocats Berlin droit fiscal, Dr. Hausmann conseil fiscal",
    ogTitle: 'Kanzlei Dr. Dr. Hausmann : Droit Fiscal & Conseil Juridique Berlin',
    ogDescription: "Droit fiscal et conseil juridique à Berlin. Avocat spécialisé en droit fiscal, droit pénal fiscal et planification fiscale pour entreprises. Plus de 20 ans d'expérience.",
    twitterDescription: 'Droit fiscal et conseil juridique à Berlin. Avocat spécialisé en droit fiscal, droit pénal fiscal et planification fiscale pour entreprises.',
    schemaDescription: "Cabinet d'avocats fiscalistes berlinois spécialisé en droit fiscal, droit pénal fiscal, conseil fiscal et planification fiscale pour entreprises.",
  },
  ru: {
    out: 'ru/index.html',
    path: '/ru/',
    inLanguage: 'ru-RU',
    title: 'Kanzlei Dr. Dr. Hausmann: Налоговое право и юридические консультации в Берлине | Адвокат',
    description: 'Kanzlei Dr. Dr. Hausmann: налоговое право и юридические консультации в Берлине. Адвокат, специализирующийся на налоговом праве, налоговом уголовном праве и налоговом планировании для бизнеса. Более 20 лет опыта. Запишитесь на консультацию прямо сейчас.',
    keywords: 'налоговое консультирование Берлин, адвокат по налоговому праву Берлин, налоговое уголовное право Берлин, налоговое планирование для бизнеса, юридическая фирма Берлин налоговое право, Dr. Hausmann налоговое консультирование',
    ogTitle: 'Kanzlei Dr. Dr. Hausmann: Налоговое право и юридические консультации в Берлине',
    ogDescription: 'Налоговое право и юридические консультации в Берлине. Адвокат, специализирующийся на налоговом праве, налоговом уголовном праве и налоговом планировании для бизнеса. Более 20 лет опыта.',
    twitterDescription: 'Налоговое право и юридические консультации в Берлине. Адвокат, специализирующийся на налоговом праве, налоговом уголовном праве и налоговом планировании для бизнеса.',
    schemaDescription: 'Берлинская юридическая и налоговая фирма, специализирующаяся на налоговом праве, уголовном налоговом праве, налоговом консультировании и налоговом планировании для бизнеса.',
  },
};

function fail(msg) {
  throw new Error('build failed: ' + msg);
}

function fillPlaceholders(src, lang) {
  const page = PAGES[lang];
  const eol = src.includes('\r\n') ? '\r\n' : '\n';
  const values = {
    ...page,
    lang,
    url: SITE + page.path,
    ogLocales: [lang, ...LANGS.filter(l => l !== lang)]
      .map((l, i) => `  <meta property="og:locale${i ? ':alternate' : ''}" content="${OG_LOCALE[l]}" />`)
      .join(eol),
  };
  return src.replace(/\{\{(\w+)\}\}/g, (all, key) => {
    if (!(key in values)) fail(`unknown placeholder ${all}`);
    return values[key];
  });
}

// Walks the markup, dropping elements tagged with another language and
// stripping the language token from elements tagged with this one.
// <script>/<style> contents are copied through untouched.
export function stripOtherLanguages(src, lang) {
  const tagRe = /<!--[\s\S]*?-->|<(\/?)([a-zA-Z][a-zA-Z0-9-]*)((?:[^>"']|"[^"]*"|'[^']*')*)>/g;
  let out = '';
  let pos = 0;
  let skip = null; // { tag, depth } while inside a dropped element
  let m;
  while ((m = tagRe.exec(src))) {
    const [full, close, rawTag, attrs = ''] = m;
    const start = m.index;
    const end = tagRe.lastIndex;
    const tag = rawTag && rawTag.toLowerCase();

    if (tag === 'script' || tag === 'style') {
      if (close) fail(`stray </${tag}> at ${start}`);
      const closeAt = src.indexOf(`</${tag}>`, end);
      if (closeAt < 0) fail(`unclosed <${tag}> at ${start}`);
      const blockEnd = closeAt + tag.length + 3;
      if (!skip) out += src.slice(pos, blockEnd);
      pos = tagRe.lastIndex = blockEnd;
      continue;
    }

    if (skip) {
      if (tag === skip.tag && !VOID.has(tag)) skip.depth += close ? -1 : 1;
      if (skip.depth === 0) { skip = null; pos = end; }
      continue;
    }

    out += src.slice(pos, start);
    pos = end;
    if (!tag || close) { out += full; continue; }

    const cls = attrs.match(/\sclass="([^"]*)"/);
    const tokens = cls ? cls[1].split(/\s+/).filter(Boolean) : [];
    const langTokens = tokens.filter(t => LANGS.includes(t));
    if (langTokens.length && !langTokens.includes(lang)) {
      if (!VOID.has(tag)) skip = { tag, depth: 1 };
      continue;
    }
    if (!langTokens.length) { out += full; continue; }
    const kept = tokens.filter(t => !LANGS.includes(t)).join(' ');
    out += `<${rawTag}${attrs.replace(/\sclass="[^"]*"/, kept ? ` class="${kept}"` : '')}>`;
  }
  if (skip) fail(`unclosed <${skip.tag}> while removing another language`);
  return out + src.slice(pos);
}

function localizeAttributes(src, lang) {
  return src
    .replace(/<option((?:[^>"]|"[^"]*")*)>([^<]*)<\/option>/g, (all, attrs) => {
      const text = attrs.match(new RegExp(`\\sdata-i18n-text-${lang}="([^"]*)"`));
      if (!text) return all;
      return `<option${attrs.replace(/\sdata-i18n-text-(?:de|en|fr|ru)="[^"]*"/g, '')}>${text[1]}</option>`;
    })
    .replace(/\sdata-i18n-([a-z-]+?)-(de|en|fr|ru)="([^"]*)"/g, (all, name, l, value) =>
      l === lang ? ` ${name}="${value}"` : '');
}

export function markActiveLanguage(src, lang) {
  return src.replace(
    /(<a href="(\/(?:en\/|fr\/|ru\/)?)" class="(?:mob-hdr-lang|lang-btn|mobile-lang-btn))(?: active)?"/g,
    (all, head, href) => `${head}${href === PAGES[lang].path ? ' active' : ''}"`);
}

function check(html, lang) {
  if (/\{\{\w+\}\}/.test(html)) fail(`${lang}: unfilled placeholder`);
  if (html.includes('data-i18n-')) fail(`${lang}: untranslated data-i18n attribute`);
  const others = LANGS.filter(l => l !== lang).join('|');
  if (new RegExp(`class="(?:[^"]*\\s)?(?:${others})(?:\\s[^"]*)?"`).test(html)) fail(`${lang}: another language's element survived`);
  if (lang !== 'ru' && /[Ѐ-ӿ]/.test(html)) fail(`${lang}: contains Cyrillic text`);
}

export function buildPage(source, lang) {
  let html = fillPlaceholders(source, lang);
  html = stripOtherLanguages(html, lang);
  html = localizeAttributes(html, lang);
  html = markActiveLanguage(html, lang);
  check(html, lang);
  return html;
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try {
    const source = fs.readFileSync(path.join(ROOT, 'src/site.html'), 'utf8');
    for (const lang of LANGS) {
      const html = buildPage(source, lang);
      const outPath = path.join(ROOT, PAGES[lang].out);
      fs.mkdirSync(path.dirname(outPath), { recursive: true });
      fs.writeFileSync(outPath, html);
      console.log(`built ${PAGES[lang].out} (${(Buffer.byteLength(html) / 1024).toFixed(0)} KB)`);
    }
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
}
