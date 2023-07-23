import {Offer} from '../types/offers.ts';

const offers: Offer[] = [
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f00',
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
    price: 120,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8
      }
    },
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    isFavorite: false,
    isPremium: false,
    rating: 4,
    previewImage: 'https://www.travelandleisure.com/thmb/_3nQ1ivxrnTKVphdp9ZYvukADKQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/amsterdam-nl-AMSTERDAMTG0521-6d2bfaac29704667a950bcf219680640.jpg',
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    bedrooms: 3,
    goods: [
      'Heating'
    ],
    host: {
      name: 'Oliver Conner',
      avatarUrl: 'https://url-to-image/image.png',
      isPro: false,
    },
    images: [
      'https://www.travelandleisure.com/thmb/_3nQ1ivxrnTKVphdp9ZYvukADKQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/amsterdam-nl-AMSTERDAMTG0521-6d2bfaac29704667a950bcf219680640.jpg'
    ],
    maxAdults: 4
  },
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f01',
    title: 'The best in Paris',
    type: 'hotel',
    price: 120,
    city: {
      name: 'Paris',
      location: {
        latitude: 43.576249,
        longitude: 39.725785,
        zoom: 8
      }
    },
    location: {
      latitude: 43.576249,
      longitude: 39.725785,
      zoom: 8
    },
    isFavorite: false,
    isPremium: false,
    rating: 4,
    previewImage: 'https://avatars.mds.yandex.net/get-altay/5486790/2a0000017cbda4bfdaed0c302de5e8a34d9d/XXXL',
    description: 'The best in Paris',
    bedrooms: 1,
    goods: [
      'Bathroom', 'AC'
    ],
    host: {
      name: 'Alex Turkov',
      avatarUrl: 'https://url-to-image/image.png',
      isPro: false,
    },
    images: [
      'https://avatars.mds.yandex.net/get-altay/5486790/2a0000017cbda4bfdaed0c302de5e8a34d9d/XXXL'
    ],
    maxAdults: 2
  },
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f02',
    title: 'The best in Cologne',
    type: 'hotel',
    price: 70,
    city: {
      name: 'Cologne',
      location: {
        latitude: 55.797358,
        longitude: 49.111292,
        zoom: 8
      }
    },
    location: {
      latitude: 55.797358,
      longitude: 49.111292,
      zoom: 8
    },
    isFavorite: true,
    isPremium: false,
    rating: 3,
    previewImage: 'https://avatars.mds.yandex.net/get-altay/223006/2a0000015b0b67bae566f7ddcfcfb0bc599e/XXXL',
    description: 'The best in Cologne',
    bedrooms: 1,
    goods: [
      'Bathroom', 'AC', 'Free Wi-Fi'
    ],
    host: {
      name: 'Sergey Nemirov',
      avatarUrl: 'https://url-to-image/image.png',
      isPro: false,
    },
    images: [
      'https://avatars.mds.yandex.net/get-altay/223006/2a0000015b0b67bae566f7ddcfcfb0bc599e/XXXL'
    ],
    maxAdults: 3
  },
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f03',
    title: 'The best in Brussels',
    type: 'apartment',
    price: 300,
    city: {
      name: 'Brussels',
      location: {
        latitude: 55.748165,
        longitude: 37.536727,
        zoom: 8
      }
    },
    location: {
      latitude: 55.748165,
      longitude: 37.536727,
      zoom: 8
    },
    isFavorite: true,
    isPremium: true,
    rating: 5,
    previewImage: 'https://avatars.mds.yandex.net/get-altay/5527230/2a0000018399492a5d7927e5d6f44f9a7e35/XXXL',
    description: 'The best in Brussels',
    bedrooms: 3,
    goods: [
      'Bathroom', 'AC', 'Wi-Fi'
    ],
    host: {
      name: 'Ivan Ivanov',
      avatarUrl: 'https://url-to-image/image.png',
      isPro: false,
    },
    images: [
      'https://avatars.mds.yandex.net/get-altay/5527230/2a0000018399492a5d7927e5d6f44f9a7e35/XXXL'
    ],
    maxAdults: 4
  },
];

export {offers};
