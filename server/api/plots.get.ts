export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const category = query.category as string | undefined

  const allPlots = [
    {
      id: 'PL-101',
      title: '3 Katha Prime Residential Plot',
      category: 'residential-land',
      sector: 'Sector 1 (Ready Handover)',
      sizeKatha: 3,
      sizeSqFt: 2160,
      pricePerKatha: 18.5,
      totalPrice: 55.5,
      downPayment: 11.1,
      monthlyEMI: 74000,
      status: 'available',
      facing: 'South',
      roadWidth: '40 Feet Wide Road',
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80',
      features: ['Immediate Registration', 'Electricity & Gas Line Ready', 'Next to Central Mosque', 'Demarcated Boundary']
    },
    {
      id: 'PL-102',
      title: '5 Katha Lakefront Premium Plot',
      category: 'residential-land',
      sector: 'Sector 2 (Developing)',
      sizeKatha: 5,
      sizeSqFt: 3600,
      pricePerKatha: 19.5,
      totalPrice: 97.5,
      downPayment: 19.5,
      monthlyEMI: 129000,
      status: 'available',
      facing: 'Lakefront',
      roadWidth: '60 Feet Boulevard',
      image: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=800&q=80',
      features: ['Panoramic Lake View', 'Walking Track Access', 'Corner Location', 'Eco Park Facing']
    },
    {
      id: 'PL-103',
      title: '10 Katha VIP Executive Estate',
      category: 'residential-land',
      sector: 'Sector 3 (Lake Zone)',
      sizeKatha: 10,
      sizeSqFt: 7200,
      pricePerKatha: 22.0,
      totalPrice: 220.0,
      downPayment: 44.0,
      monthlyEMI: 293000,
      status: 'available',
      facing: 'Corner',
      roadWidth: '80 Feet Avenue',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80',
      features: ['Ideal for Luxury Duplex Villa', 'Private Garden Boundary', 'Smart Security Hub', 'Near Club House']
    },
    {
      id: 'PL-104',
      title: '20 Katha Commercial Highway Plot',
      category: 'commercial-land',
      sector: 'Highway Commercial Zone',
      sizeKatha: 20,
      sizeSqFt: 14400,
      pricePerKatha: 35.0,
      totalPrice: 700.0,
      downPayment: 140.0,
      monthlyEMI: 933000,
      status: 'available',
      facing: 'North',
      roadWidth: '120 Feet 4-Lane Highway',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
      features: ['Dhaka-Savar Highway Frontage', 'Approved for High-Rise Mall/Hospital', 'Uninterrupted Power Substation', 'High ROI']
    }
  ]

  if (category && category !== 'all') {
    return allPlots.filter(p => p.category === category)
  }

  return allPlots
})
