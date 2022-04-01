'use strict';

window.addEventListener('DOMContentLoaded', () => {
  const setupsDB = [
    {
      id: 1,
      carName: 'Subaru Impreza S4 WRX',
      img: 'img/car-img/subimpr.png',
      setup: [
        {
          country: 'Argentina',
          tyres: 'soft',
          conditions: 'dry',
          alignment: {
            toeAngleFront: '-0.20',
            camberAngleFront: '-1.25',
            toeAngleRear: '0.00',
            camberAngleRear: '-1.13',
          },
          brakes: {
            brakingForce: '3.484',
            // add N-m
            brakeBias: '59',
            // add %
          },
          differential: {
            frontLSDDrivingLock: 'not used',
            frontLSDBrakingLock: 'not used',
            // add N-m
            frontLSDPreload: 'not used',
            frontVisDif: '24',
            centerVisDif: '22',
            rearVisDif: '24',
            // kgf-m/100rpm
          },
          gearing: {
            gear1: '0.311',
            gear2: '0.402',
            gear3: '0.538',
            gear4: '0.700',
            gear5: '0.887',
            gear6: '1.099',
            finalDrive: '0.210',
            note: 'Final drive: Minimum ',
            optimalShift: '6500 rpm',
          },
          damping: {
            slowBumpFront: '0.00',
            fastBumpFront: '+3.00',
            bumpZoneDivFront: '0.96',
            //ms
            slowReboundFront: '+2.00',
            slowBumpRear: '0.00',
            fastBumpRear: '+3.00',
            bumpZoneDivRear: '0.96',
            //ms
            slowReboundRear: '+2.0',
          },
          springs: {
            rideHeightFront: '30.00',
            // add mm
            springRateFront: '86.30',
            // add N/mm
            rollBarFront: '10.00',
            //add N/mm
            rideHeightRear: '30.00',
            // add mm
            springRateRear: '70.22',
            // add N/mm
            rollBarRear: '23.69',
            // N/mm
          },
        },
        {
          country: 'Australia',
          tyres: 'soft',
          conditions: 'dry',
          alignment: {
            toeAngleFront: '-0.20',
            camberAngleFront: '-1.75',
            toeAngleRear: '0.00',
            camberAngleRear: '-1.63',
          },
          brakes: {
            brakingForce: '3.484',
            // add N-m
            brakeBias: '66',
            // add %
          },
          differential: {
            frontLSDDrivingLock: 'not used',
            frontLSDBrakingLock: 'not used',
            // add N-m
            frontLSDPreload: 'not used',
            frontVisDif: '18',
            centerVisDif: '12',
            rearVisDif: '18',
            // kgf-m/100rpm
          },
          gearing: {
            gear1: '0.336',
            gear2: '0.451',
            gear3: '0.612',
            gear4: '0.800',
            gear5: '1.011',
            gear6: '1.247',
            finalDrive: '0.210',
            note: 'Final drive: Minimum ',
            optimalShift: '6500 rpm',
          },
          damping: {
            slowBumpFront: '+1.00',
            fastBumpFront: '+3.0',
            bumpZoneDivFront: '0.96',
            //mps
            slowReboundFront: '+2.00',
            slowBumpRear: '+1.00',
            fastBumpRear: '+3.00',
            bumpZoneDivRear: '0.96',
            //mps
            slowReboundRear: '+2.00',
          },
          springs: {
            rideHeightFront: '20.00',
            // add mm
            springRateFront: '89.73',
            // add N/mm
            rollBarFront: '10.00',
            //add N/mm
            rideHeightRear: '20.00',
            // add mm
            springRateRear: '73.01',
            // add N/mm
            rollBarRear: '23.69',
            // N/mm
          },
        },
        {
          country: 'Finland',
          tyres: 'soft',
          conditions: 'dry',
          alignment: {
            toeAngleFront: '-0.20',
            camberAngleFront: '-1.75',
            toeAngleRear: '0.00',
            camberAngleRear: '-1.63',
          },
          brakes: {
            brakingForce: '3.484',
            // add N-m
            brakeBias: '66',
            // add %
          },
          differential: {
            frontLSDDrivingLock: 'not used',
            frontLSDBrakingLock: 'not used',
            // add N-m
            frontLSDPreload: 'not used',
            frontVisDif: '24',
            centerVisDif: '22',
            rearVisDif: '24',
            // kgf-m/100rpm
          },
          gearing: {
            gear1: '0.286',
            gear2: '0.411',
            gear3: '0.582',
            gear4: '0.780',
            gear5: '1.001',
            gear6: '1.247',
            finalDrive: '0.240',
            note: 'Final drive: highest 0.240 ',
            optimalShift: '6500 rpm',
          },
          damping: {
            slowBumpFront: '+5.00',
            fastBumpFront: '+5.00',
            bumpZoneDivFront: '0.96',
            //mps
            slowReboundFront: '+4.00',
            slowBumpRear: '+5.00',
            fastBumpRear: '+5.00',
            bumpZoneDivRear: '0.96',
            //mps
            slowReboundRear: '+4.00',
          },
          springs: {
            rideHeightFront: '30.00',
            // add mm
            springRateFront: '117.09',
            // add N/mm
            rollBarFront: '18.00',
            //add N/mm
            rideHeightRear: '30.00',
            // add mm
            springRateRear: '95.28',
            // add N/mm
            rollBarRear: '40.92',
            // N/mm
          },
        },
        {
          country: 'Germany/dry',
          tyres: 'soft',
          conditions: 'dry',
          alignment: {
            toeAngleFront: '-0.20',
            camberAngleFront: '-1.95',
            toeAngleRear: '0.00',
            camberAngleRear: '-1.83',
          },
          brakes: {
            brakingForce: '3.906',
            // add N-m
            brakeBias: '58',
            // add %
          },
          differential: {
            frontLSDDrivingLock: 'not used',
            frontLSDBrakingLock: 'not used',
            // add N-m
            frontLSDPreload: 'not used',
            frontVisDif: '24',
            centerVisDif: '18',
            rearVisDif: '24',
            // kgf-m/100rpm
          },
          gearing: {
            gear1: '0.286',
            gear2: '0.411',
            gear3: '0.582',
            gear4: '0.780',
            gear5: '1.001',
            gear6: '1.247',
            finalDrive: '0.225',
            note: 'Final drive: highest 0.225 ',
            optimalShift: '6500 rpm',
          },
          damping: {
            slowBumpFront: '+3.00',
            fastBumpFront: '+4.00',
            bumpZoneDivFront: '0.14',
            //mps
            slowReboundFront: '+4.00',
            slowBumpRear: '+3.00',
            fastBumpRear: '+4.00',
            bumpZoneDivRear: '0.14',
            //mps
            slowReboundRear: '+4.00',
          },
          springs: {
            rideHeightFront: '-40.00',
            // add mm
            springRateFront: '196.09',
            // add N/mm
            rollBarFront: '18.11',
            //add N/mm
            rideHeightRear: '-40.00',
            // add mm
            springRateRear: '159.49',
            // add N/mm
            rollBarRear: '42.08',
            // N/mm
          },
        },
        {
          country: 'Germany/wet',
          tyres: 'soft',
          conditions: 'wet',
          alignment: {
            toeAngleFront: '-0.2',
            camberAngleFront: '-1.65',
            toeAngleRear: '0.00',
            camberAngleRear: '-1.50',
          },
          brakes: {
            brakingForce: '3.627',
            // add N-m
            brakeBias: '58',
            // add %
          },
          differential: {
            frontLSDDrivingLock: 'not used',
            frontLSDBrakingLock: 'not used',
            // add N-m
            frontLSDPreload: 'not used',
            frontVisDif: '16',
            centerVisDif: '14',
            rearVisDif: '16',
            // kgf-m/100rpm
          },
          gearing: {
            gear1: '0.286',
            gear2: '0.411',
            gear3: '0.582',
            gear4: '0.780',
            gear5: '1.001',
            gear6: '1.247',
            finalDrive: '0.225',
            note: 'Final drive: highest 0.225 ',
            optimalShift: '6500 rpm',
          },
          damping: {
            slowBumpFront: '+2.00',
            fastBumpFront: '+3.00',
            bumpZoneDivFront: '0.14',
            //mps
            slowReboundFront: '+3.00',
            slowBumpRear: '+2.00',
            fastBumpRear: '+3.00',
            bumpZoneDivRear: '0.14',
            //mps
            slowReboundRear: '+3.00',
          },
          springs: {
            rideHeightFront: '-36.00',
            // add mm
            springRateFront: '183.83',
            // add N/mm
            rollBarFront: '14.23',
            //add N/mm
            rideHeightRear: '-36.00',
            // add mm
            springRateRear: '149.59',
            // add N/mm
            rollBarRear: '34.65',
            // N/mm
          },
        },
        {
          country: 'Greece',
          tyres: 'soft',
          conditions: 'dry',
          alignment: {
            toeAngleFront: '-0.20',
            camberAngleFront: '-1.50',
            toeAngleRear: '0.00',
            camberAngleRear: '-1.38',
          },
          brakes: {
            brakingForce: '3.484',
            // add N-m
            brakeBias: '59',
            // add %
          },
          differential: {
            frontLSDDrivingLock: 'not used',
            frontLSDBrakingLock: 'not used',
            // add N-m
            frontLSDPreload: 'not used',
            frontVisDif: '24',
            centerVisDif: '18',
            rearVisDif: '24',
            // kgf-m/100rpm
          },
          gearing: {
            gear1: '0.301',
            gear2: '0.392',
            gear3: '0.528',
            gear4: '0.691',
            gear5: '0.877',
            gear6: '1.089',
            finalDrive: '0.210',
            note: 'Final drive: Minimum',
            optimalShift: '6500 rpm',
          },
          damping: {
            slowBumpFront: '+2.00',
            fastBumpFront: '+4.00',
            bumpZoneDivFront: '0.96',
            //mps
            slowReboundFront: '+3.00',
            slowBumpRear: '+2.00',
            fastBumpRear: '+4.00',
            bumpZoneDivRear: '0.96',
            //mps
            slowReboundRear: '+3.00',
          },
          springs: {
            rideHeightFront: '20.00',
            // add mm
            springRateFront: '95.56',
            // add N/mm
            rollBarFront: '12.00',
            //add N/mm
            rideHeightRear: '20.00',
            // add mm
            springRateRear: '78.57',
            // add N/mm
            rollBarRear: '28.00',
            // N/mm
          },
        },
        {
          country: 'Monaco Asphalt',
          tyres: 'soft',
          conditions: 'dry',
          alignment: {
            toeAngleFront: '-0.20',
            camberAngleFront: '-1.95',
            toeAngleRear: '0.00',
            camberAngleRear: '-1.83',
          },
          brakes: {
            brakingForce: '3.829',
            // add N-m
            brakeBias: '58',
            // add %
          },
          differential: {
            frontLSDDrivingLock: 'not used',
            frontLSDBrakingLock: 'not used',
            // add N-m
            frontLSDPreload: 'not used',
            frontVisDif: '24',
            centerVisDif: '22',
            rearVisDif: '24',
            // kgf-m/100rpm
          },
          gearing: {
            gear1: '0.311',
            gear2: '0.416',
            gear3: '0.543',
            gear4: '0.696',
            gear5: '0.872',
            gear6: '1.074',
            finalDrive: '0.210',
            note: 'Final drive: Minimum',
            optimalShift: '6500 rpm',
          },
          damping: {
            slowBumpFront: '+3.00',
            fastBumpFront: '+4.00',
            bumpZoneDivFront: '0.14',
            //mps
            slowReboundFront: '+4.00',
            slowBumpRear: '+3.00',
            fastBumpRear: '+4.00',
            bumpZoneDivRear: '0.14',
            //mps
            slowReboundRear: '+4.00',
          },
          springs: {
            rideHeightFront: '-26.25',
            // add mm
            springRateFront: '196.00',
            // add N/mm
            rollBarFront: '18.11',
            //add N/mm
            rideHeightRear: '-26.25',
            // add mm
            springRateRear: '159.49',
            // add N/mm
            rollBarRear: '42.08',
            // N/mm
          },
        },
        {
          country: 'Monaco Mixed Short',
          tyres: 'winters/asphalt',
          conditions: '50% Asphalt/ 50% Snow/Ice',
          alignment: {
            toeAngleFront: '-0.20',
            camberAngleFront: '-1.35',
            toeAngleRear: '0.00',
            camberAngleRear: '-1.00',
          },
          brakes: {
            brakingForce: '3.282',
            // add N-m
            brakeBias: '58',
            // add %
          },
          differential: {
            frontLSDDrivingLock: 'not used',
            frontLSDBrakingLock: 'not used',
            // add N-m
            frontLSDPreload: 'not used',
            frontVisDif: '16',
            centerVisDif: '10',
            rearVisDif: '16',
            // kgf-m/100rpm
          },
          gearing: {
            gear1: '0.311',
            gear2: '0.416',
            gear3: '0.543',
            gear4: '0.696',
            gear5: '0.872',
            gear6: '1.074',
            finalDrive: '0.210',
            note: 'Final drive: Minimum',
            optimalShift: '6500 rpm',
          },
          damping: {
            slowBumpFront: '+1.00',
            fastBumpFront: '+3.00',
            bumpZoneDivFront: '0.14',
            //mps
            slowReboundFront: '+2.00',
            slowBumpRear: '+1.00',
            fastBumpRear: '+3.00',
            bumpZoneDivRear: '0.14',
            //mps
            slowReboundRear: '+2.00',
          },
          springs: {
            rideHeightFront: '-19.25',
            // add mm
            springRateFront: '171.67',
            // add N/mm
            rollBarFront: '12.94',
            //add N/mm
            rideHeightRear: '-19.25',
            // add mm
            springRateRear: '139.69',
            // add N/mm
            rollBarRear: '29.70',
            // N/mm
          },
        },
        {
          country: 'Monaco Mixed Long',
          tyres: 'winter',
          conditions: '75% Asphalt/ 25% Snow/Ice',
          alignment: {
            toeAngleFront: '-0.20',
            camberAngleFront: '-1.50',
            toeAngleRear: '0.00',
            camberAngleRear: '-1.17',
          },
          brakes: {
            brakingForce: '3.555.50',
            // add N-m
            brakeBias: '58',
            // add %
          },
          differential: {
            frontLSDDrivingLock: 'not used',
            frontLSDBrakingLock: 'not used',
            // add N-m
            frontLSDPreload: 'not used',
            frontVisDif: '14',
            centerVisDif: '12',
            rearVisDif: '14',
            // kgf-m/100rpm
          },
          gearing: {
            gear1: '0.311',
            gear2: '0.416',
            gear3: '0.543',
            gear4: '0.696',
            gear5: '0.872',
            gear6: '1.074',
            finalDrive: '0.210',
            note: 'Final drive: Minimum',
            optimalShift: '6500 rpm',
          },
          damping: {
            slowBumpFront: '+2.00',
            fastBumpFront: '+3.00',
            bumpZoneDivFront: '0.14',
            //mps
            slowReboundFront: '+3.00',
            slowBumpRear: '+2.00',
            fastBumpRear: '+3.00',
            bumpZoneDivRear: '0.14',
            //mps
            slowReboundRear: '+3.00',
          },
          springs: {
            rideHeightFront: '-22.75',
            // add mm
            springRateFront: '183.83',
            // add N/mm
            rollBarFront: '16.82',
            //add N/mm
            rideHeightRear: '-22.75',
            // add mm
            springRateRear: '149.59',
            // add N/mm
            rollBarRear: '37.13',
            // N/mm
          },
        },
        {
          country: 'New Zealand',
          tyres: 'soft',
          conditions: 'dry',
          alignment: {
            toeAngleFront: '-0.20',
            camberAngleFront: '-1.63',
            toeAngleRear: '0.00',
            camberAngleRear: '-1.50',
          },
          brakes: {
            brakingForce: '3.484',
            // add N-m
            brakeBias: '59',
            // add %
          },
          differential: {
            frontLSDDrivingLock: 'not used',
            frontLSDBrakingLock: 'not used',
            // add N-m
            frontLSDPreload: 'not used',
            frontVisDif: '18',
            centerVisDif: '14',
            rearVisDif: '18',
            // kgf-m/100rpm
          },
          gearing: {
            gear1: '0.336',
            gear2: '0.451',
            gear3: '0.612',
            gear4: '0.800',
            gear5: '1.011',
            gear6: '1.247',
            finalDrive: '0.210',
            note: 'Final drive: Minimum',
            optimalShift: '6500 rpm',
          },
          damping: {
            slowBumpFront: '+1.00',
            fastBumpFront: '+3.00',
            bumpZoneDivFront: '0.84',
            //mps
            slowReboundFront: '+3.00',
            slowBumpRear: '+1.00',
            fastBumpRear: '+3.00',
            bumpZoneDivRear: '0.84',
            //mps
            slowReboundRear: '+3.00',
          },
          springs: {
            rideHeightFront: '10.00',
            // add mm
            springRateFront: '89.72',
            // add N/mm
            rollBarFront: '10.00',
            //add N/mm
            rideHeightRear: '10.00',
            // add mm
            springRateRear: '73.01',
            // add N/mm
            rollBarRear: '23.69',
            // N/mm
          },
        },
        {
          country: 'Poland',
          tyres: 'soft',
          conditions: 'dry',
          alignment: {
            toeAngleFront: '-0.20',
            camberAngleFront: '-1.75',
            toeAngleRear: '0.00',
            camberAngleRear: '-1.63',
          },
          brakes: {
            brakingForce: '3.484',
            // add N-m
            brakeBias: '66',
            // add %
          },
          differential: {
            frontLSDDrivingLock: 'not used',
            frontLSDBrakingLock: 'not used',
            // add N-m
            frontLSDPreload: 'not used',
            frontVisDif: '24',
            centerVisDif: '20',
            rearVisDif: '24',
            // kgf-m/100rpm
          },
          gearing: {
            gear1: '0.286',
            gear2: '0.411',
            gear3: '0.592',
            gear4: '0.780',
            gear5: '1.001',
            gear6: '1.247',
            finalDrive: '0.245',
            note: 'Final drive: highest 0.245',
            optimalShift: '6500 rpm',
          },
          damping: {
            slowBumpFront: '+3.00',
            fastBumpFront: '+5.00',
            bumpZoneDivFront: '1.08',
            //mps
            slowReboundFront: '+4.00',
            slowBumpRear: '+3.00',
            fastBumpRear: '+5.00',
            bumpZoneDivRear: '1.08',
            //mps
            slowReboundRear: '+4.00',
          },
          springs: {
            rideHeightFront: '20.00',
            // add mm
            springRateFront: '103.41',
            // add N/mm
            rollBarFront: '14.00',
            //add N/mm
            rideHeightRear: '20.00',
            // add mm
            springRateRear: '84.14',
            // add N/mm
            rollBarRear: '23.31',
            // N/mm
          },
        },
        {
          country: 'Spain',
          tyres: 'soft',
          conditions: 'dry',
          alignment: {
            toeAngleFront: '-0.20',
            camberAngleFront: '-1.95',
            toeAngleRear: '0.00',
            camberAngleRear: '-1.83',
          },
          brakes: {
            brakingForce: '4.185',
            // add N-m
            brakeBias: '66',
            // add %
          },
          differential: {
            frontLSDDrivingLock: 'not used',
            frontLSDBrakingLock: 'not used',
            // add N-m
            frontLSDPreload: 'not used',
            frontVisDif: '24',
            centerVisDif: '24',
            rearVisDif: '24',
            // kgf-m/100rpm
          },
          gearing: {
            gear1: '0.286',
            gear2: '0.411',
            gear3: '0.592',
            gear4: '0.780',
            gear5: '1.001',
            gear6: '1.247',
            finalDrive: '0.215',
            note: 'Final drive: highest 0.225',
            optimalShift: '6500 rpm',
          },
          damping: {
            slowBumpFront: '+4.00',
            fastBumpFront: '+5.00',
            bumpZoneDivFront: '0.14',
            //mps
            slowReboundFront: '+4.00',
            slowBumpRear: '+4.00',
            fastBumpRear: '+5.00',
            bumpZoneDivRear: '0.14',
            //mps
            slowReboundRear: '+4.00',
          },
          springs: {
            rideHeightFront: '-40.00',
            // add mm
            springRateFront: '208.16',
            // add N/mm
            rollBarFront: '20.70',
            //add N/mm
            rideHeightRear: '-40.00',
            // add mm
            springRateRear: '169.39',
            // add N/mm
            rollBarRear: '44.55',
            // N/mm
          },
        },
        {
          country: 'Spain',
          tyres: 'soft',
          conditions: 'wet',
          alignment: {
            toeAngleFront: '-0.20',
            camberAngleFront: '-1.65',
            toeAngleRear: '0.00',
            camberAngleRear: '-1.50',
          },
          brakes: {
            brakingForce: '3.906',
            // add N-m
            brakeBias: '66',
            // add %
          },
          differential: {
            frontLSDDrivingLock: 'not used',
            frontLSDBrakingLock: 'not used',
            // add N-m
            frontLSDPreload: 'not used',
            frontVisDif: '16',
            centerVisDif: '14',
            rearVisDif: '16',
            // kgf-m/100rpm
          },
          gearing: {
            gear1: '0.286',
            gear2: '0.411',
            gear3: '0.592',
            gear4: '0.780',
            gear5: '1.001',
            gear6: '1.247',
            finalDrive: '0.215',
            note: 'Final drive: highest 0.225',
            optimalShift: '6500 rpm',
          },
          damping: {
            slowBumpFront: '+3.00',
            fastBumpFront: '+4.00',
            bumpZoneDivFront: '0.14',
            //mps
            slowReboundFront: '+3.00',
            slowBumpRear: '+3.00',
            fastBumpRear: '+4.00',
            bumpZoneDivRear: '0.14',
            //mps
            slowReboundRear: '+3.00',
          },
          springs: {
            rideHeightFront: '-36.00',
            // add mm
            springRateFront: '189.91',
            // add N/mm
            rollBarFront: '16.82',
            //add N/mm
            rideHeightRear: '-36.00',
            // add mm
            springRateRear: '154.54',
            // add N/mm
            rollBarRear: '37.13',
            // N/mm
          },
        },
        {
          country: 'Sweden',
          tyres: 'snow',
          conditions: 'snow',
          alignment: {
            toeAngleFront: '-0.20',
            camberAngleFront: '-1.38',
            toeAngleRear: '0.00',
            camberAngleRear: '-1.25',
          },
          brakes: {
            brakingForce: '3.261',
            // add N-m
            brakeBias: '59',
            // add %
          },
          differential: {
            frontLSDDrivingLock: 'not used',
            frontLSDBrakingLock: 'not used',
            // add N-m
            frontLSDPreload: 'not used',
            frontVisDif: '22',
            centerVisDif: '18',
            rearVisDif: '22',
            // kgf-m/100rpm
          },
          gearing: {
            gear1: '0.361',
            gear2: '0.491',
            gear3: '0.642',
            gear4: '0.819',
            gear5: '1.021',
            gear6: '1.247',
            finalDrive: '0.210',
            note: 'Final drive: Minimum',
            optimalShift: '6500 rpm',
          },
          damping: {
            slowBumpFront: '+1.00',
            fastBumpFront: '+3.00',
            bumpZoneDivFront: '0.96',
            //mps
            slowReboundFront: '+2.00',
            slowBumpRear: '+1.00',
            fastBumpRear: '+3.00',
            bumpZoneDivRear: '0.96',
            //mps
            slowReboundRear: '+2.00',
          },
          springs: {
            rideHeightFront: '40.00',
            // add mm
            springRateFront: '89.72',
            // add N/mm
            rollBarFront: '8.00',
            //add N/mm
            rideHeightRear: '40.00',
            // add mm
            springRateRear: '73.01',
            // add N/mm
            rollBarRear: '19.38',
            // N/mm
          },
        },
        {
          country: 'USA',
          tyres: 'soft',
          conditions: 'dry',
          alignment: {
            toeAngleFront: '-0.20',
            camberAngleFront: '-1.75',
            toeAngleRear: '0.00',
            camberAngleRear: '-1.63',
          },
          brakes: {
            brakingForce: '3.484',
            // add N-m
            brakeBias: '59',
            // add %
          },
          differential: {
            frontLSDDrivingLock: 'not used',
            frontLSDBrakingLock: 'not used',
            // add N-m
            frontLSDPreload: 'not used',
            frontVisDif: '22',
            centerVisDif: '18',
            rearVisDif: '22',
            // kgf-m/100rpm
          },
          gearing: {
            gear1: '0.286',
            gear2: '0.411',
            gear3: '0.582',
            gear4: '0.780',
            gear5: '1.001',
            gear6: '1.247',
            finalDrive: '0.235',
            note: 'Final drive: highest 0.235',
            optimalShift: '6500 rpm',
          },
          damping: {
            slowBumpFront: '+3.00',
            fastBumpFront: '+5.00',
            bumpZoneDivFront: '1.08',
            //mps
            slowReboundFront: '+4.00',
            slowBumpRear: '+3.00',
            fastBumpRear: '+5.00',
            bumpZoneDivRear: '1.08',
            //mps
            slowReboundRear: '+4.00',
          },
          springs: {
            rideHeightFront: '20.00',
            // add mm
            springRateFront: '110.25',
            // add N/mm
            rollBarFront: '16.00',
            //add N/mm
            rideHeightRear: '20.00',
            // add mm
            springRateRear: '89.71',
            // add N/mm
            rollBarRear: '36.62',
            // N/mm
          },
        },
        {
          country: 'Wales',
          tyres: 'soft',
          conditions: 'dry',
          alignment: {
            toeAngleFront: '-0.20',
            camberAngleFront: '-1.75',
            toeAngleRear: '0.00',
            camberAngleRear: '-1.63',
          },
          brakes: {
            brakingForce: '3.484',
            // add N-m
            brakeBias: '66',
            // add %
          },
          differential: {
            frontLSDDrivingLock: 'not used',
            frontLSDBrakingLock: 'not used',
            // add N-m
            frontLSDPreload: 'not used',
            frontVisDif: '24',
            centerVisDif: '18',
            rearVisDif: '24',
            // kgf-m/100rpm
          },
          gearing: {
            gear1: '0.336',
            gear2: '0.451',
            gear3: '0.612',
            gear4: '0.800',
            gear5: '1.011',
            gear6: '1.247',
            finalDrive: '0.210',
            note: 'Final drive: Minimum',
            optimalShift: '6500 rpm',
          },
          damping: {
            slowBumpFront: '+2.00',
            fastBumpFront: '+4.00',
            bumpZoneDivFront: '1.08',
            //mps
            slowReboundFront: '+3.00',
            slowBumpRear: '+2.00',
            fastBumpRear: '+4.00',
            bumpZoneDivRear: '1.08',
            //mps
            slowReboundRear: '+3.00',
          },
          springs: {
            rideHeightFront: '40.00',
            // add mm
            springRateFront: '96.56',
            // add N/mm
            rollBarFront: '11.00',
            //add N/mm
            rideHeightRear: '40.00',
            // add mm
            springRateRear: '78.57',
            // add N/mm
            rollBarRear: '25.85',
            // N/mm
          },
        },
        {
          country: 'Scotland',
          tyres: 'soft',
          conditions: 'dry',
          alignment: {
            toeAngleFront: '-0.20',
            camberAngleFront: '-1.75',
            toeAngleRear: '0.00',
            camberAngleRear: '-1.63',
          },
          brakes: {
            brakingForce: '3.216',
            // add N-m
            brakeBias: '66',
            // add %
          },
          differential: {
            frontLSDDrivingLock: 'not used',
            frontLSDBrakingLock: 'not used',
            // add N-m
            frontLSDPreload: 'not used',
            frontVisDif: '24',
            centerVisDif: '22',
            rearVisDif: '24',
            // kgf-m/100rpm
          },
          gearing: {
            gear1: '0.311',
            gear2: '0.431',
            gear3: '0.597',
            gear4: '0.790',
            gear5: '1.006',
            gear6: '1.247',
            finalDrive: '0.235',
            note: 'Final drive: highest 0.235',
            optimalShift: '6500 rpm',
          },
          damping: {
            slowBumpFront: '+2.00',
            fastBumpFront: '+4.00',
            bumpZoneDivFront: '0.96',
            //mps
            slowReboundFront: '+3.00',
            slowBumpRear: '+2.00',
            fastBumpRear: '+4.00',
            bumpZoneDivRear: '0.96',
            //mps
            slowReboundRear: '+3.00',
          },
          springs: {
            rideHeightFront: '30.00',
            // add mm
            springRateFront: '103.41',
            // add N/mm
            rollBarFront: '14.00',
            //add N/mm
            rideHeightRear: '30.00',
            // add mm
            springRateRear: '84.14',
            // add N/mm
            rollBarRear: '32.31',
            // N/mm
          },
        },
        //setups impreza
      ],
    },
    {
      id: 2,
      car: 'Ford Focus ST',
      img: 'img/car-img/ffocus.png',

      setup: [
        {
          country: 'Argentina',
          tyres: 'soft',
          conditions: 'dry',
          alignment: {
            toeAngleFront: -0.2,
            camberAngleFront: -0.9,
            toeAngleRear: -0,
            camberAngleRear: -0.97,
          },
          brakes: {
            // add N-m
            brakingForce: 1.298,
            // add %
            brakeBias: 58,
          },
          differential: {
            // add %
            frontLSDDrivingLock: 36,
            frontLSDBrakingLock: 40,
            // add N-m
            frontLSDPreload: 100,
          },
          gearing: {
            fstGear: 0.393,
            sndGear: 0.524,
            thrdGear: 0.73,
            forthGear: 1.009,
            finalDrive: 0.21,
            note: 'Final drive: Minimum ',
            optimalShift: 'Redline',
          },
          damping: {
            slowBumpFront: -2,
            slowReboundFront: -1,
            slowBumpRear: -2,
            slowRebound: -1,
          },
          springs: {
            // add mm
            rideHeightFront: -20,
            // add N/mm
            springRateFront: 102.26,
            // add mm
            rideHeightRear: -20,
            // add N/mm
            springRateRear: 12.5,
          },
        },

        {
          country: 'Finland',
          tyres: 'soft',
          conditions: 'wet',
          alignment: {
            toeAngleFront: -0.2,
            camberAngleFront: -0.9,
            toeAngleRear: -0,
            camberAngleRear: -0.97,
          },
          brakes: {
            // add N-m
            brakingForce: 1.298,
            // add %
            brakeBias: 58,
          },
          differential: {
            // add %
            frontLSDDrivingLock: 36,
            frontLSDBrakingLock: 40,
            // add N-m
            frontLSDPreload: 100,
          },
          gearing: {
            fstGear: 0.393,
            sndGear: 0.524,
            thrdGear: 0.73,
            forthGear: 1.009,
            finalDrive: 0.21,
            note: 'Final drive: Minimum ',
            optimalShift: 'Redline',
          },
          damping: {
            slowBumpFront: -2,
            slowReboundFront: -1,
            slowBumpRear: -2,
            slowRebound: -1,
          },
          springs: {
            // add mm
            rideHeightFront: -20,
            // add N/mm
            springRateFront: 102.26,
            // add mm
            rideHeightRear: -20,
            // add N/mm
            springRateRear: 12.5,
          },
        },

        {
          country: 'Scotland',
          tyres: 'soft',
          conditions: 'wet',
          alignment: {
            toeAngleFront: -0.2,
            camberAngleFront: -0.9,
            toeAngleRear: -0,
            camberAngleRear: -0.97,
          },
          brakes: {
            // add N-m
            brakingForce: 1.298,
            // add %
            brakeBias: 58,
          },
          differential: {
            // add %
            frontLSDDrivingLock: 36,
            frontLSDBrakingLock: 40,
            // add N-m
            frontLSDPreload: 100,
          },
          gearing: {
            fstGear: 0.393,
            sndGear: 0.524,
            thrdGear: 0.73,
            forthGear: 1.009,
            finalDrive: 0.21,
            note: 'Final drive: Minimum ',
            optimalShift: 'Redline',
          },
          damping: {
            slowBumpFront: -2,
            slowReboundFront: -1,
            slowBumpRear: -2,
            slowRebound: -1,
          },
          springs: {
            // add mm
            rideHeightFront: -20,
            // add N/mm
            springRateFront: 102.26,
            // add mm
            rideHeightRear: -20,
            // add N/mm
            springRateRear: 12.5,
          },
        },
      ],
    },
    {
      id: 3,
      car: 'Mitsubishi Lancer VII',
      img: 'img/car-img/mitslancer.png',

      setup: [
        {
          country: 'Wales',
          tyres: 'hard',
          conditions: 'dry',
          alignment: {
            toeAngleFront: -0.2,
            camberAngleFront: -0.9,
            toeAngleRear: -0,
            camberAngleRear: -0.97,
          },
          brakes: {
            // add N-m
            brakingForce: 1.298,
            // add %
            brakeBias: 58,
          },
          differential: {
            // add %
            frontLSDDrivingLock: 36,
            frontLSDBrakingLock: 40,
            // add N-m
            frontLSDPreload: 100,
          },
          gearing: {
            fstGear: 0.393,
            sndGear: 0.524,
            thrdGear: 0.73,
            forthGear: 1.009,
            finalDrive: 0.21,
            note: 'Final drive: Minimum ',
            optimalShift: 'Redline',
          },
          damping: {
            slowBumpFront: -2,
            slowReboundFront: -1,
            slowBumpRear: -2,
            slowRebound: -1,
          },
          springs: {
            // add mm
            rideHeightFront: -20,
            // add N/mm
            springRateFront: 102.26,
            // add mm
            rideHeightRear: -20,
            // add N/mm
            springRateRear: 12.5,
          },
        },
        {
          country: 'USA',
          tyres: 'not hard',
          conditions: 'dry',
          alignment: {
            toeAngleFront: -0.2,
            camberAngleFront: -0.9,
            toeAngleRear: -0,
            camberAngleRear: -0.97,
          },
          brakes: {
            // add N-m
            brakingForce: 1.298,
            // add %
            brakeBias: 58,
          },
          differential: {
            // add %
            frontLSDDrivingLock: 36,
            frontLSDBrakingLock: 40,
            // add N-m
            frontLSDPreload: 100,
          },
          gearing: {
            fstGear: 0.393,
            sndGear: 0.524,
            thrdGear: 0.73,
            forthGear: 1.009,
            finalDrive: 0.21,
            note: 'Final drive: Minimum ',
            optimalShift: 'Redline',
          },
          damping: {
            slowBumpFront: -2,
            slowReboundFront: -1,
            slowBumpRear: -2,
            slowRebound: -1,
          },
          springs: {
            // add mm
            rideHeightFront: -20,
            // add N/mm
            springRateFront: 102.26,
            // add mm
            rideHeightRear: -20,
            // add N/mm
            springRateRear: 12.5,
          },
        },
      ],
    },
  ];

  let tree = document.querySelector('.main');

  //create cards with cars and setups
  function createCarCard(dataBase) {
    dataBase.forEach((car) => {
      const carCard = document.createElement('div');
      carCard.classList.add('car-card');
      carCard.innerHTML = `
        <div class="car-card__title"><span>${car.carName}</span></div>
        <div class='car-card__image'>
            <img src="${car.img}" alt="">
        </div>
        <div class="car-card__setups setups"></div>
  `;
      tree.append(carCard);

      let setups = document.querySelectorAll('.car-card__setups');

      car.setup.forEach((setup) => {
        const el = document.createElement('div');
        el.classList.add('setup-country');
        el.innerHTML = `
        ${setup.country}
    
        <div class="setup-country__item">
            <div class="item__tyres">
                <span>Tyres</span>
                <span>${setup.tyres}</span>
            </div>
            
            <div class="item__conditions">
                <span>Conditions</span>
                <span>${setup.conditions}</span>
            </div>

            <div class="item__alignment">
                <span>Alignment</span> 
                <div>Toe Angle Front: ${setup.alignment.toeAngleFront} °</div>
                <div>Camber Angle Front: ${setup.alignment.camberAngleFront} °</div>
                <div>Toe Angle Rear: ${setup.alignment.toeAngleRear} °</div>
                <div>Camber Angle Rear: ${setup.alignment.camberAngleRear} °</div>
            </div>

            <div class="item__brakes">
                <span>Brakes</span> 
                <div>Brake Bias: ${setup.brakes.brakingForce} N-m</div>
                <div>Braking force: ${setup.brakes.brakeBias} %</div>
            </div>

            <div class="item__dif">
                <span>Differential</span>
                <div>Front LSD Driving lock: ${setup.differential.frontLSDDrivingLock} %</div>
                <div>Front LSD Braking Lock: ${setup.differential.frontLSDBrakingLock} %</div>
                <div>Front LSD Preload: ${setup.differential.frontLSDPreload} N-m</div>
                <div>Front Viscous Differential: ${setup.differential.frontVisDif} kgf-m/100 rpm</div>
                <div>Centre Viscous Differential: ${setup.differential.centerVisDif} kgf-m/100 rpm</div>
                <div>Rear Viscous Differential: ${setup.differential.rearVisDif} kgf-m/100 rpm</div>
            </div>

            <div class="item__gear">Gearing
                <div>1st Gear: ${setup.gearing.gear1}</div>
                <div>2nt Gear: ${setup.gearing.gear2}</div>
                <div>3rd Gear: ${setup.gearing.gear3}</div>
                <div>4th Gear: ${setup.gearing.gear4}</div>
                <div>4th Gear: ${setup.gearing.gear5}</div>
                <div>4th Gear: ${setup.gearing.gear6}</div>
                <div>Final Drive: ${setup.gearing.finalDrive}</div>
                <div>Note: ${setup.gearing.note}</div>
                <div>Optimal Shift: ${setup.gearing.optimalShift}</div>
            </div>

            <div class="item__damp">Damping
                <div>Slow Bump Front: ${setup.damping.slowBumpFront}</div>
                <div>Fast Bump Front: ${setup.damping.fastBumpFront}</div>
                <div>Bump Zone Division Front: ${setup.damping.bumpZoneDivFront}</div>
                <div>Slow Rebound Front: ${setup.damping.slowReboundFront}</div>

                <div>Slow Bump Rear: ${setup.damping.slowBumpRear}</div>
                <div>Fast Bump Rear: ${setup.damping.fastBumpRear}</div>
                <div>Bump Zone Division Rear: ${setup.damping.bumpZoneDivRear}</div>
                <div>Slow Rebound FroRearnt: ${setup.damping.slowReboundRear}</div>
            </div>

            <div class="item__springs">Springs
                <div>Ride Height Front: ${setup.springs.rideHeightFront} mm</div>
                <div>Spring Rate Front: ${setup.springs.springRateFront} N/mm</div>
                <div>Ride Height Rear: ${setup.springs.rideHeightRear} mm</div>
                <div>Spring Rate Rear: ${setup.springs.springRateRear} N/mm</div>
            </div>
        </div>
        `;
        setups.forEach((item) => {
          item.appendChild(el);
        });
      });
    });
  }
  createCarCard(setupsDB);

  const carCards = document.querySelectorAll('.car-card'),
    cardsParent = document.querySelector('.main');

  //click on the class main (event delegations)
  cardsParent.addEventListener('click', (e) => {
    const target = e.target;
    if (target.tagName == 'IMG') {
      carCards.forEach((item, i) => {
        if (target.parentElement.parentNode == item) {
          console.log(item);
          hide();
          show(i);
        }
      });
    }
  });

  const setupsParent = document.querySelectorAll('.car-card__setups'),
    setupItems = document.querySelectorAll('.setup-country');
  // click on the class setups
  setupsParent.forEach((item) => {
    item.addEventListener('click', (e) => {
      const t = e.target;
      //   console.log(t);
      if (t && t.classList.contains('setup-country')) {
        setupItems.forEach((item, i) => {
          if (t == item) {
            h();
            s(i);
          }
        });
      }
    });
  });

  // remove class selected and class setups--active
  function hide() {
    carCards.forEach((item) => {
      item.classList.remove('hide');
      item.classList.remove('selected');
      item.lastElementChild.classList.remove('car-card__setups-active');
    });
    h();
  }

  // add class 'selected' to car card
  // and class 'setup--active' to car-card__setups
  function show(item) {
    carCards[item].classList.add('selected');
    carCards[item].lastElementChild.classList.add('car-card__setups-active');
    carCards.forEach((card) => {
      if (!card.classList.contains('selected')) {
        card.classList.add('hide');
      }
    });
  }

  // remove class selected and setup__item--active
  function h() {
    setupItems.forEach((item) => {
      item.classList.remove('selected');
      item.lastElementChild.classList.remove('setup-country__item--active');
    });
  }

  // add class selected and clas setup__item--active
  function s(item) {
    setupItems[item].classList.add('selected');
    setupItems[item].lastElementChild.classList.add(
      'setup-country__item--active'
    );
  }

  //click on background closes each car card
  cardsParent.addEventListener('click', (e) => {
    if (e.target.classList.contains('main')) {
      hide();
    }
  });

  ///////// ENTER SCREEN /; //////
  const enterBtn = document.querySelector('.enter-screen__title');
  const enterScreen = document.querySelector('.enter-screen');
  const main = document.querySelector('.main__bg');

  enterBtn.addEventListener('click', () => {
    loadSelectionPage();
  });

  function loadSelectionPage() {
    addHide();
    removeHide();
    changeBG();
  }

  function addHide() {
    enterScreen.classList.add('hide');
  }

  function removeHide() {
    main.classList.remove('hide');
  }

  function changeBG() {
    document.querySelector('.main').style.backgroundImage =
      'url(../img/selectionPage-bg.jpg)';
  }
});
