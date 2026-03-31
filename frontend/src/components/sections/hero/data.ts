export type HeroImage = {
  src: string
  alt: string
}

export type HeroCategory = {
  id: string
  tagline: string
  title: string
  description: string
  images: HeroImage[]
}

export const heroData: HeroCategory[] = [
  {
    id: 'wedding',
    tagline: 'Moments uniques',
    title: 'Mariages',
    description:
      'Des regards échangés aux éclats de rire, chaque instant compte. Je capture l’émotion brute, les détails invisibles et la magie de votre journée pour en faire des souvenirs intemporels.',

    images: [
      { src: '/images/wedding1.jpg', alt: 'Mariage – échange de regards' },
      { src: '/images/wedding2.jpg', alt: 'Mariage – moment de joie' },
      { src: '/images/wedding3.jpg', alt: 'Mariage – détail de cérémonie' }
    ]
  },

  {
    id: 'studio',
    tagline: 'Portrait & identité',
    title: 'Photos Studio',
    description:
      'Dans un environnement maîtrisé, chaque lumière sculpte votre image. Portrait artistique, professionnel ou créatif : révélez votre personnalité avec élégance et précision.',

    images: [
      { src: '/images/studio1.jpg', alt: 'Portrait studio éclairage doux' },
      { src: '/images/studio2.jpg', alt: 'Portrait studio artistique' },
      { src: '/images/studio3.jpg', alt: 'Portrait studio professionnel' }
    ]
  },

  {
    id: 'macro',
    tagline: "L'invisible révélé",
    title: 'Photos Macro',
    description:
      'Explorer l’invisible, révéler l’inattendu. Chaque texture, chaque détail devient une œuvre. Une immersion fascinante dans un monde que l’on ne prend jamais le temps de regarder.',

    images: [
      { src: '/images/macro1.jpg', alt: 'Macro – texture naturelle' },
      { src: '/images/macro2.jpg', alt: 'Macro – détail floral' },
      { src: '/images/macro3.jpg', alt: 'Macro – matière en gros plan' }
    ]
  }
]
