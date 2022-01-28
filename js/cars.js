'use sctrict';

const carsDB = [
  {
    id: 1,
    car: 'Mini Cooper S',
    setup: [
      {
        argentina: {
          tyres: 'Soft',
          conditions: 'Dry',
          alignment: {
            'Toe Angle Front': -0.2,
            'Camber Angle Front': -0.9,
            'Toe Angle Rear': -0,
            'Camber Angle Rear': -0.97,
          },
          brakes: {
            // add N-m
            'Braking Force': 1.298,
            // add %
            'Brake Bias': 58,
          },
          differential: {
            // add %
            'Front LSD Driving Lock': 36,
            'Front LSD Braking Lock': 40,
            // add N-m
            'Front LSD Preload': 100,
          },
          gearing: {
            '1st Gear': 0.393,
            '2nd Gear': 0.524,
            '3rd Gear': 0.73,
            '4th Gear': 1.009,
            'Final Drive': 0.21,
            Note: 'Final drive: Minimum ',
            'Optimal Shift': 'Redline',
          },
          damping: {
            'Slow Bump Front': -2,
            'Slow Rebound Front': -1,
            'Slow Bump Rear': -2,
            'Slow Rebound': -1,
          },
          springs: {
            // add mm
            'Ride Height Front': -20,
            // add N/mm
            'Spring Rate Front': 102.26,
            // add mm
            'ride Height Rear': -20,
            // add N/mm
            'Spring Rate Rear': 12.5,
          },
        },
      },
      {
        australia: {
          tyres: 'Medium',
          conditions: 'Wet',
        },
      },
      {
        finland: {
          tyres: 'Medium',
          conditions: 'Wet',
        },
      },
    ],
  },

  {
    id: 2,
    car: 'Lancia Fulvia HF',
  },

  {
    id: 3,
    car: 'Citroen DS 21',
  },
];
