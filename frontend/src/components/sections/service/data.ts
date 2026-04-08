export type ServiceData = {
  id: string
  title: string
  tagline: string

  heroImage: string
  startingPrice: string

  description: string

  includes: string[]

  packages?: {
    name: string
    price: string
    details: string[]
  }[]

  gallery: string[]
}
export const services: Record<string, ServiceData> = {
  studio: {
    id: 'studio',
    title: 'Photos Studio',
    tagline: 'Révélez votre image',

    heroImage: '/images/studio1.jpg',
    startingPrice: 'À partir de 90€',

    description:
      'Dans un environnement maîtrisé, chaque lumière sculpte votre image et révèle votre personnalité avec précision et élégance.',

    includes: ['Shooting guidé', '3 photos retouchées', 'Livraison HD', 'Conseils personnalisés'],

    packages: [
      {
        name: 'Essentiel',
        price: '90€',
        details: ['3 photos', '1 tenue', 'Retouches incluses']
      }
    ],

    gallery: ['/images/studio1.jpg', '/images/studio2.jpg', '/images/studio3.jpg']
  },

  auto: {
    id: 'auto',
    title: 'Auto / Moto',
    tagline: 'Sublimer votre véhicule',

    heroImage: '/images/auto1.jpg',
    startingPrice: 'À partir de 50€',

    description:
      'Chaque ligne, chaque reflet, chaque détail compte. Un shooting pensé pour révéler toute la personnalité de votre véhicule.',

    includes: [
      'Shooting extérieur',
      '5 photos retouchées',
      'Mise en valeur des détails',
      'Livraison HD'
    ],

    packages: [
      {
        name: 'Pack standard',
        price: '50€',
        details: ['5 photos', 'Retouches incluses']
      }
    ],

    gallery: ['/images/auto1.jpg', '/images/auto2.jpg', '/images/auto3.jpg']
  },

  animaux: {
    id: 'animaux',
    title: 'Animaux',
    tagline: 'Capturer leur personnalité',

    heroImage: '/images/animal1.jpg',
    startingPrice: 'À partir de 80€',

    description:
      'Chaque animal a son caractère, son énergie, son regard. Une approche patiente et adaptée pour capturer leur authenticité.',

    includes: [
      'Shooting adapté à l’animal',
      '10 photos retouchées',
      'Approche douce et naturelle',
      'Livraison HD'
    ],

    packages: [
      {
        name: 'Pack animal',
        price: '80€',
        details: ['10 photos', 'Retouches incluses']
      }
    ],

    gallery: ['/images/animal1.jpg', '/images/animal2.jpg', '/images/animal3.jpg']
  },

  macro: {
    id: 'macro',
    title: 'Macro & détails',
    tagline: "L'invisible révélé",

    heroImage: '/images/macro1.jpg',
    startingPrice: 'À partir de 110€',

    description:
      'Explorer les textures, révéler les détails, transformer l’invisible en œuvre visuelle. Une immersion fascinante dans un autre monde.',

    includes: [
      'Shooting macro spécialisé',
      '15 photos retouchées',
      'Travail sur textures et lumière',
      'Livraison HD'
    ],

    packages: [
      {
        name: 'Pack macro',
        price: '110€',
        details: ['15 photos', 'Retouches incluses']
      }
    ],

    gallery: ['/images/macro1.jpg', '/images/macro2.jpg', '/images/macro3.jpg']
  },

  wedding: {
    id: 'wedding',
    title: 'Mariages & Cérémonies',
    tagline: 'Des instants qui ne se rejouent jamais',

    heroImage: '/images/wedding1.jpg',
    startingPrice: 'Sur devis / à partir de 500€',

    description:
      'Chaque moment compte. Des préparatifs aux instants les plus intenses, je capture votre journée avec discrétion et sensibilité pour en raconter toute l’histoire.',

    includes: [
      'Présence sur la journée',
      'Captation des moments clés',
      'Photos retouchées',
      'Livraison galerie privée'
    ],

    packages: [
      {
        name: 'Petit budget',
        price: '500€',
        details: ['Couverture journée', 'Photos retouchées', 'Galerie en ligne']
      },
      {
        name: 'Sur mesure',
        price: 'Sur devis',
        details: ['Prestation personnalisée', 'Options flexibles', 'Accompagnement complet']
      }
    ],

    gallery: ['/images/wedding1.jpg', '/images/wedding2.jpg', '/images/wedding3.jpg']
  }
}
