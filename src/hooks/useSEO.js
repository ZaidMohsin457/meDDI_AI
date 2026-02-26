import { useEffect } from 'react'

const SITE_NAME = 'meDDI AI'
const DEFAULT_TITLE = 'meDDI AI — Prescription Safety, Powered by AI'
const DEFAULT_DESC =
  "Pakistan's first AI-powered prescription safety platform. Reads handwritten prescriptions with 95%+ accuracy and detects drug-drug interactions in real time."
const SITE_URL = 'https://meddiai.com'
const OG_IMAGE = `${SITE_URL}/og-image.png`

function setMeta(attr, name, content) {
  let el = document.querySelector(`meta[${attr}="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setLink(rel, href) {
  let el = document.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

/**
 * Sets page <title>, meta description, Open Graph, Twitter Card, and canonical link.
 *
 * @param {{ title?: string, description?: string, canonical?: string, ogImage?: string }} opts
 */
export function useSEO({ title, description, canonical, ogImage } = {}) {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${SITE_NAME}` : DEFAULT_TITLE
    const desc = description || DEFAULT_DESC
    const url = canonical ? `${SITE_URL}${canonical}` : SITE_URL
    const img = ogImage || OG_IMAGE

    document.title = fullTitle

    // Standard
    setMeta('name', 'description', desc)

    // Open Graph
    setMeta('property', 'og:type',        'website')
    setMeta('property', 'og:site_name',   SITE_NAME)
    setMeta('property', 'og:title',       fullTitle)
    setMeta('property', 'og:description', desc)
    setMeta('property', 'og:url',         url)
    setMeta('property', 'og:image',       img)

    // Twitter Card
    setMeta('name', 'twitter:card',        'summary_large_image')
    setMeta('name', 'twitter:title',       fullTitle)
    setMeta('name', 'twitter:description', desc)
    setMeta('name', 'twitter:image',       img)

    // Canonical
    setLink('canonical', url)

    return () => {
      document.title = DEFAULT_TITLE
    }
  }, [title, description, canonical, ogImage])
}
