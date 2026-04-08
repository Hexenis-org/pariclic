export type HeroImage = {
  src: string
  alt: string
}

export type HeroCategory = {
  id: string
  tagline: string
  title: string
  description: string

  startingPrice?: string
  subServices?: string[]

  cta?: {
    label: string
    href: string
  }

  images: HeroImage[]
}

export const heroData: HeroCategory[] = [
  {
    id: 'wedding',
    tagline: 'Moments uniques',
    title: 'Mariages & Cérémonies',

    startingPrice: 'Sur devis / à partir de 500€',

    description:
      'Des regards échangés aux éclats de rire, chaque instant compte. Je capture l’émotion brute et la magie de votre journée pour en faire des souvenirs intemporels.',

    cta: {
      label: 'Découvrir',
      href: '/prestations/wedding'
    },

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

    startingPrice: 'À partir de 90€',

    subServices: ['Studio', 'Portrait', 'Identité'],

    description:
      'Dans un environnement maîtrisé, chaque lumière sculpte votre image et révèle votre personnalité avec élégance et précision.',

    cta: {
      label: 'Voir les offres',
      href: '/prestations/studio'
    },

    images: [
      { src: '/images/studio1.jpg', alt: 'Portrait studio éclairage doux' },
      { src: '/images/studio2.jpg', alt: 'Portrait studio artistique' },
      { src: '/images/studio3.jpg', alt: 'Portrait studio professionnel' }
    ]
  },

  {
    id: 'auto',
    tagline: 'Puissance & esthétique',
    title: 'Auto / Moto',

    startingPrice: 'À partir de 50€',

    description:
      'Chaque ligne, chaque reflet, chaque détail compte. Un shooting pensé pour révéler toute la personnalité de votre véhicule.',

    cta: {
      label: 'Voir le shooting',
      href: '/prestations/auto'
    },

    images: [
      { src: '/hero/vehicles/bike/bike1.png', alt: 'Auto' },
      { src: '/hero/vehicles/car/auto2.jpeg', alt: 'Auto' },
      { src: '/hero/vehicles/car/auto3.jpeg', alt: 'Auto' }
    ]
  },

  {
    id: 'animaux',
    tagline: 'Authenticité & émotion',
    title: 'Animaux',

    startingPrice: 'À partir de 80€',

    description:
      'Chaque animal a son caractère, son énergie et son regard. Une approche douce et patiente pour capturer leur véritable nature.',

    cta: {
      label: 'Découvrir',
      href: '/prestations/animaux'
    },

    images: [
      { src: '/images/animal1.jpg', alt: 'Animal – portrait naturel' },
      { src: '/images/animal2.jpg', alt: 'Animal – regard' },
      { src: '/images/animal3.jpg', alt: 'Animal – mouvement' }
    ]
  },

  {
    id: 'macro',
    tagline: "L'invisible révélé",
    title: 'Macro & détails',

    startingPrice: 'À partir de 110€',

    description:
      'Explorer les textures, révéler les détails, transformer l’invisible en œuvre visuelle. Une immersion fascinante dans un monde oublié.',

    cta: {
      label: 'Explorer',
      href: '/prestations/macro'
    },

    images: [
      { src: '/images/macro1.jpg', alt: 'Macro – texture naturelle' },
      { src: '/images/macro2.jpg', alt: 'Macro – détail floral' },
      { src: '/images/macro3.jpg', alt: 'Macro – matière en gros plan' }
    ]
  }
]
