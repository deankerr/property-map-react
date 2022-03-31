import { render, screen } from '@testing-library/react'
// import TestUtils from 'react-dom'
import Map from './Map'

const fakeListings = [
  {
    type: 'PropertyListing',
    listing: {
      listingType: 'Sale',
      id: 2017633357,
      advertiser: {
        type: 'Agency',
        id: 3709,
        name: 'Jellis Craig Fitzroy',
        logoUrl: 'https://images.domain.com.au/img/Agencys/3709/logo_3709.png',
        preferredColourHex: '#1c252e',
        bannerUrl: 'https://images.domain.com.au/img/Agencys/3709/banner_3709.png',
        contacts: [
          {
            name: 'Lee Muddle',
            photoUrl: 'https://images.domain.com.au/img/3709/contact_1328065.JPG?mod=220304-123020',
          },
          {
            name: 'Angus Greene',
            photoUrl: 'https://images.domain.com.au/img/3709/contact_1783994.jpeg?mod=220304-122907',
          },
        ],
      },
      priceDetails: {
        displayPrice: '$1,300,000 - $1,400,000',
      },
      media: [
        {
          category: 'Image',
          url: 'https://bucket-api.domain.com.au/v1/bucket/image/2017633357_1_1_220302_040451-w1600-h1067',
        },
        {
          category: 'Image',
          url: 'https://bucket-api.domain.com.au/v1/bucket/image/2017633357_2_1_220302_040451-w1067-h1600',
        },
        {
          category: 'Image',
          url: 'https://bucket-api.domain.com.au/v1/bucket/image/2017633357_3_1_220302_040451-w1600-h1067',
        },
        {
          category: 'Image',
          url: 'https://bucket-api.domain.com.au/v1/bucket/image/2017633357_4_1_220302_040451-w1600-h1067',
        },
        {
          category: 'Image',
          url: 'https://bucket-api.domain.com.au/v1/bucket/image/2017633357_5_1_220302_040451-w1600-h1067',
        },
      ],
      propertyDetails: {
        state: 'VIC',
        features: ['Floorboards', 'Gas', 'SwimmingPool', 'CityViews', 'Heating', 'Shed'],
        propertyType: 'House',
        allPropertyTypes: ['House'],
        bathrooms: 2,
        bedrooms: 5,
        carspaces: 1,
        unitNumber: '',
        streetNumber: '62',
        street: 'Alexandra Parade',
        area: 'Yarra City Council - Greater Area',
        region: 'Melbourne Region',
        suburb: 'FITZROY',
        postcode: '3065',
        displayableAddress: '62 Alexandra Parade, Fitzroy',
        latitude: -37.7934837,
        longitude: 144.977859,
        isRural: false,
        isNew: false,
        tags: [],
      },
      headline: "'Ormond'  poised for perfection with city views",
      summaryDescription:
        "<b></b><br />A magnificent façade, city skyline views and easy rear access highlight the outstanding appeal of 'Ormond', a spacious balcony terrace in the exciting Brunswick Street precinct. Secluded beyond a captivating profile of timeless beauty, thi...",
      hasFloorplan: true,
      hasVideo: false,
      labels: ['New'],
      auctionSchedule: {
        time: '2022-03-26T15:30:00',
        auctionLocation: 'On Site',
      },
      dateListed: '2022-03-02T15:04:52',
      inspectionSchedule: {
        byAppointment: false,
        recurring: false,
        times: [
          {
            openingTime: '2022-03-05T16:00:00',
            closingTime: '2022-03-05T16:30:00',
          },
          {
            openingTime: '2022-03-09T14:00:00',
            closingTime: '2022-03-09T14:30:00',
          },
          {
            openingTime: '2022-03-12T10:30:00',
            closingTime: '2022-03-12T11:00:00',
          },
          {
            openingTime: '2022-03-17T12:00:00',
            closingTime: '2022-03-17T12:30:00',
          },
          {
            openingTime: '2022-03-19T11:30:00',
            closingTime: '2022-03-19T12:00:00',
          },
        ],
      },
      listingSlug: '62-alexandra-parade-fitzroy-vic-3065-2017633357',
    },
  },
  {
    type: 'PropertyListing',
    listing: {
      listingType: 'Sale',
      id: 2017630671,
      advertiser: {
        type: 'Agency',
        id: 4718,
        name: 'Nelson Alexander Fitzroy',
        logoUrl: 'https://images.domain.com.au/img/Agencys/4718/logo_4718.jpeg',
        preferredColourHex: '#1e0f14',
        bannerUrl: 'https://images.domain.com.au/img/Agencys/4718/banner_4718.jpeg',
        contacts: [
          {
            name: 'Rick Daniel',
            photoUrl: 'https://images.domain.com.au/img/4718/contact_972465.jpeg?mod=220304-095421',
          },
          {
            name: 'Andrew Melilli',
            photoUrl: 'https://images.domain.com.au/img/4718/contact_1532052.jpeg?mod=220304-095421',
          },
        ],
      },
      priceDetails: {
        displayPrice: 'Auction $2,750,000 - $2,950,000',
      },
      media: [
        {
          category: 'Image',
          url: 'https://bucket-api.domain.com.au/v1/bucket/image/2017630671_1_1_220301_062130-w1600-h1068',
        },
        {
          category: 'Image',
          url: 'https://bucket-api.domain.com.au/v1/bucket/image/2017630671_2_1_220301_062130-w1600-h1068',
        },
        {
          category: 'Image',
          url: 'https://bucket-api.domain.com.au/v1/bucket/image/2017630671_3_1_220301_062130-w1600-h1068',
        },
        {
          category: 'Image',
          url: 'https://bucket-api.domain.com.au/v1/bucket/image/2017630671_4_1_220301_062130-w1600-h1068',
        },
        {
          category: 'Image',
          url: 'https://bucket-api.domain.com.au/v1/bucket/image/2017630671_5_1_220301_062130-w1600-h1068',
        },
      ],
      propertyDetails: {
        state: 'VIC',
        features: [
          'BuiltInWardrobes',
          'Ensuite',
          'Floorboards',
          'Gas',
          'SecureParking',
          'Bath',
          'Heating',
          'Dishwasher',
        ],
        propertyType: 'House',
        allPropertyTypes: ['House'],
        bathrooms: 3,
        bedrooms: 3,
        carspaces: 1,
        unitNumber: '',
        streetNumber: '182',
        street: 'Fitzroy Street',
        area: 'Yarra City Council - Greater Area',
        region: 'Melbourne Region',
        suburb: 'FITZROY',
        postcode: '3065',
        displayableAddress: '182 Fitzroy Street, Fitzroy',
        latitude: -37.8036423,
        longitude: 144.976547,
        isRural: false,
        isNew: false,
        tags: [],
      },
      headline: 'Fitzroy Landmark Property: Once in a Lifetime Opportunity!',
      summaryDescription:
        '<b></b><br />Be part of living history in this intriguing statement home interwoven with the rich cultural fabric of inner-city Fitzroy. Both remarkable and highly recognisable, "Independent Hall" has been luxuriously renovated within its commanding co...',
      hasFloorplan: true,
      hasVideo: true,
      labels: ['New'],
      auctionSchedule: {
        time: '2022-03-26T12:30:00',
        auctionLocation: 'On Site',
      },
      dateListed: '2022-03-01T17:21:31',
      inspectionSchedule: {
        byAppointment: false,
        recurring: false,
        times: [
          {
            openingTime: '2022-03-05T12:15:00',
            closingTime: '2022-03-05T12:45:00',
          },
        ],
      },
      listingSlug: '182-fitzroy-street-fitzroy-vic-3065-2017630671',
    },
  },
  {
    type: 'PropertyListing',
    listing: {
      listingType: 'Sale',
      id: 2017581425,
      advertiser: {
        type: 'Agency',
        id: 4718,
        name: 'Nelson Alexander Fitzroy',
        logoUrl: 'https://images.domain.com.au/img/Agencys/4718/logo_4718.jpeg',
        preferredColourHex: '#1e0f14',
        bannerUrl: 'https://images.domain.com.au/img/Agencys/4718/banner_4718.jpeg',
        contacts: [
          {
            name: 'David Sanguinedo',
            photoUrl: 'https://images.domain.com.au/img/4718/contact_1312730.jpeg?mod=220304-144906',
          },
          {
            name: 'Ricky Walker',
            photoUrl: 'https://images.domain.com.au/img/4718/contact_1720029.jpeg?mod=220304-144906',
          },
        ],
      },
      priceDetails: {
        displayPrice: 'Private Sale $509,000',
      },
      media: [
        {
          category: 'Image',
          url: 'https://bucket-api.domain.com.au/v1/bucket/image/2017581425_1_1_220209_012534-w1600-h1067',
        },
        {
          category: 'Image',
          url: 'https://bucket-api.domain.com.au/v1/bucket/image/2017581425_2_1_220209_012534-w1600-h1067',
        },
        {
          category: 'Image',
          url: 'https://bucket-api.domain.com.au/v1/bucket/image/2017581425_3_1_220209_012534-w1600-h1067',
        },
        {
          category: 'Image',
          url: 'https://bucket-api.domain.com.au/v1/bucket/image/2017581425_4_1_220209_012534-w1600-h1067',
        },
        {
          category: 'Image',
          url: 'https://bucket-api.domain.com.au/v1/bucket/image/2017581425_5_1_220209_012534-w1600-h1067',
        },
      ],
      propertyDetails: {
        state: 'VIC',
        features: ['AirConditioning', 'BuiltInWardrobes', 'GroundFloor', 'Dishwasher'],
        propertyType: 'ApartmentUnitFlat',
        allPropertyTypes: ['ApartmentUnitFlat'],
        bathrooms: 1,
        bedrooms: 1,
        unitNumber: '',
        streetNumber: '2/70',
        street: 'Nicholson Street',
        area: 'Yarra City Council - Greater Area',
        region: 'Melbourne Region',
        suburb: 'FITZROY',
        postcode: '3065',
        displayableAddress: '2/70 Nicholson Street, Fitzroy',
        latitude: -37.7967262,
        longitude: 144.975388,
        isRural: false,
        isNew: false,
        tags: [],
      },
      headline: "Renovated one-bedroom apartment in the historic 'Fontaine' building",
      summaryDescription:
        "<b></b><br />Embracing a blue ribbon address in the boutique heritage-listed 'Fontaine' building, this marvellous ground floor apartment offers a city-fringe sanctuary with enviable lifestyle appeal. Boasting its own street frontage, the functional des...",
      hasFloorplan: true,
      hasVideo: false,
      labels: ['Updated'],
      dateListed: '2022-02-09T12:25:36',
      inspectionSchedule: {
        byAppointment: false,
        recurring: false,
        times: [
          {
            openingTime: '2022-03-05T12:30:00',
            closingTime: '2022-03-05T13:00:00',
          },
        ],
      },
      listingSlug: '2-70-nicholson-street-fitzroy-vic-3065-2017581425',
    },
  },
]

// ? Unable to test if the GoogleMapReact component loads without executing external scripts "dangerously"
// it('renders GoogleMapReact component', () => {
//   render(<Map />)
//   const mapComponent = screen.getByRole('map')
// })

// ! if this randomly starts failing the test listing images may have disappeared?
it('renders Marker props in the map div', () => {
  render(<Map listings={fakeListings} />)
  const searchMarkers = screen.getAllByTestId('marker')
  expect(searchMarkers).toHaveLength(3)
})
