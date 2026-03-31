// portfolio/data.ts

export type PortfolioBlock = {
  id: string
  title: string
  description: string
  highlight?: string
  images: {
    main: string
    secondary: string[]
  }
}

export const portfolioBlocks: PortfolioBlock[] = [
  {
    id: 'wedding',
    title: 'Mariages',
    highlight: 'Des instants qui ne se rejouent jamais',
    description:
      'Chaque regard, chaque geste, chaque émotion mérite d’être capturé avec justesse. Une approche discrète pour raconter votre histoire telle qu’elle se vit.',
    images: {
      main: '/images/wedding1.jpg',
      secondary: ['/images/wedding2.jpg', '/images/wedding3.jpg']
    }
  },
  {
    id: 'studio',
    title: 'Studio',
    highlight: 'L’élégance dans sa forme la plus pure',
    description:
      'Une maîtrise de la lumière et des contrastes pour sublimer chaque visage. Des portraits intemporels, entre force et délicatesse.',
    images: {
      main: '/images/studio1.jpg',
      secondary: ['/images/studio2.jpg', '/images/studio3.jpg']
    }
  },
  {
    id: 'macro',
    title: 'Macro',
    highlight: 'L’invisible révélé',
    description:
      'Explorer les textures, révéler les détails, transformer l’infime en spectaculaire. Une immersion dans un monde que l’on oublie trop souvent.',
    images: {
      main: '/images/macro1.jpg',
      secondary: ['/images/macro2.jpg', '/images/macro3.jpg']
    }
  }
]
