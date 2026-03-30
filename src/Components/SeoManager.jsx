import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const siteUrl = 'https://private-swimming-lessons.com'
const defaultImage = `${siteUrl}/images/private-swimming-lessons-instructors-preview.jpg`

const seoByPath = {
  '/': {
    title: 'Confidence-Building Private Swimming Lessons in Northeast Georgia | Christin Mitchell',
    description:
      'Book personalized private swimming lessons with Christin Mitchell in Northeast Georgia. Patient instruction for infants, kids, and adults who want to conquer fear, improve technique, and feel confident in the water.',
  },
  '/reviews': {
    title: 'Private Swimming Lesson Reviews in Northeast Georgia | Christin Mitchell',
    description:
      'Read real private swimming lesson reviews from families and adult swimmers across Northeast Georgia. See how Christin Mitchell helps swimmers conquer fear and gain confidence.',
  },
  '/videos': {
    title: 'Private Swim Lesson Videos | Christin Mitchell Northeast Georgia',
    description:
      'Watch private swim lesson videos featuring kids and adults building water confidence and stroke skills with Christin Mitchell in Northeast Georgia.',
  },
  '/contact': {
    title: 'Contact Christin Mitchell for Private Swim Lessons | Northeast Georgia',
    description:
      'Contact Christin Mitchell to ask questions and schedule private swim lessons in Northeast Georgia for infants, kids, teens, and adults.',
  },
}

const ensureMeta = (selector, attribute, value) => {
  let element = document.head.querySelector(selector)

  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, value)
    document.head.appendChild(element)
  }

  return element
}

const SeoManager = () => {
  const location = useLocation()

  useEffect(() => {
    const current = seoByPath[location.pathname] ?? seoByPath['/']
    const canonicalUrl = location.pathname === '/' ? siteUrl : `${siteUrl}${location.pathname}`

    document.title = current.title

    const descriptionMeta = ensureMeta('meta[name="description"]', 'name', 'description')
    descriptionMeta.setAttribute('content', current.description)

    const robotsMeta = ensureMeta('meta[name="robots"]', 'name', 'robots')
    robotsMeta.setAttribute('content', 'index, follow')

    let canonicalLink = document.head.querySelector('link[rel="canonical"]')
    if (!canonicalLink) {
      canonicalLink = document.createElement('link')
      canonicalLink.setAttribute('rel', 'canonical')
      document.head.appendChild(canonicalLink)
    }
    canonicalLink.setAttribute('href', canonicalUrl)

    const ogTitle = ensureMeta('meta[property="og:title"]', 'property', 'og:title')
    const ogDescription = ensureMeta('meta[property="og:description"]', 'property', 'og:description')
    const ogUrl = ensureMeta('meta[property="og:url"]', 'property', 'og:url')
    const ogType = ensureMeta('meta[property="og:type"]', 'property', 'og:type')
    const ogImage = ensureMeta('meta[property="og:image"]', 'property', 'og:image')

    ogTitle.setAttribute('content', current.title)
    ogDescription.setAttribute('content', current.description)
    ogUrl.setAttribute('content', canonicalUrl)
    ogType.setAttribute('content', 'website')
    ogImage.setAttribute('content', defaultImage)

    const twitterTitle = ensureMeta('meta[name="twitter:title"]', 'name', 'twitter:title')
    const twitterDescription = ensureMeta('meta[name="twitter:description"]', 'name', 'twitter:description')
    const twitterImage = ensureMeta('meta[name="twitter:image"]', 'name', 'twitter:image')

    twitterTitle.setAttribute('content', current.title)
    twitterDescription.setAttribute('content', current.description)
    twitterImage.setAttribute('content', defaultImage)
  }, [location.pathname])

  return null
}

export default SeoManager
