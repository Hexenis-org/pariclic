import type { IconName } from '../common/icons/icons'

export type SocialLink = {
  name: string
  url: string
  icon: IconName
}

export type FooterSection = {
  title: string
  links: {
    label: string
    url: string
  }[]
}

export type FooterData = {
  brand: {
    name: string
    description: string
  }
  socials: SocialLink[]
  navigation: FooterSection
  legal: FooterSection
  contact: {
    email: string
  }
}

export const footerData: FooterData = {
  brand: {
    name: "Pari'Clic",
    description:
      'Photographe professionnelle spécialisée dans la capture d’émotions et de détails uniques.'
  },

  socials: [
    { name: 'Instagram', url: '#', icon: 'instagram' },
    { name: 'Facebook', url: '#', icon: 'facebook' },
    { name: 'TikTok', url: '#', icon: 'tiktok' },
    { name: 'Snapchat', url: '#', icon: 'snapchat' }
  ],

  navigation: {
    title: 'Navigation',
    links: [
      { label: 'Accueil', url: '#' },
      { label: 'Portfolio', url: '#' },
      { label: 'Prestations', url: '#' },
      { label: 'Contact', url: '#' }
    ]
  },

  contact: {
    email: 'parisote5@gmail.com'
  },

  legal: {
    title: 'Légal',
    links: [
      { label: 'Mentions légales', url: '#' },
      { label: 'CGU', url: '#' },
      { label: 'Politique de confidentialité', url: '#' }
    ]
  }
}
