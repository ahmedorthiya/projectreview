import uuid from 'uuid/v1';

export default [
  {
    id: uuid(),
    title: 'Facebook',
    slug:'fetch-fb-reviews',
    description:
      'Import and manage all of your Facebook page users recommendations',
    imageUrl: '/images/products/icon-facebook.png',
    updatedAt: '27/03/2019'
  },
  {
    id: uuid(),
    title: 'Google',
    slug:'fetch-google-reviews',
    description:
      'Import and manage Google My Business reviews',
    imageUrl: '/images/products/icon-google.png',
    createdAt: '31/03/2019',
    connected: true
  },
  {
    id: uuid(),
    title: 'TrustPilot',
    slug:'fetch-trust-pilot-reviews',
    description:
      'Import and manage all of your Trust Pilot reviews',
    imageUrl: '/images/products/icon-trustpilot.png',
    createdAt: '03/04/2019',
    connected: true
  },
  {
    id: uuid(),
    title: 'G2',
    description:
      'Import and manage all of your G2 reviews',
    imageUrl: '/images/products/icon-g2.jpg',
    createdAt: '04/04/2019',
    connected: true
  },
  {
    id: uuid(),
    title: 'Yelp',
    description:
    'Import and manage all of your Yelp reviews',
    imageUrl: '/images/products/icon-yelp.png',
    createdAt: '04/04/2019',
    connected: true
  },
  {
    id: uuid(),
    title: 'Trip Advisor',
    description:
    'Import and manage all of your Trip Advisor reviews',
    imageUrl: '/images/products/icon-tripadvisor.png',
    createdAt: '04/04/2019',
    connected: true
  }
];
