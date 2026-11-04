import { ref, computed } from 'vue'

export interface PlotItem {
  id: string
  title: string
  category: 'residential-land' | 'commercial-land' | 'flat' | 'hotel-suite'
  sector: string
  sizeKatha: number
  sizeSqFt: number
  pricePerKatha: number // in BDT Lakhs
  totalPrice: number // in BDT Lakhs
  downPayment: number // in BDT Lakhs
  monthlyEMI: number // in BDT
  status: 'available' | 'reserved' | 'sold'
  facing: 'North' | 'South' | 'East' | 'West' | 'Lakefront' | 'Corner'
  roadWidth: string
  dimensions?: string
  image: string
  features: string[]
  isFeatured?: boolean
}

export const usePlotInventory = () => {
  const plots = ref<PlotItem[]>([
    {
      id: 'DWV-S1-3K',
      title: '3 Katha Ready Residential Plot (Sector 1)',
      category: 'residential-land',
      sector: 'Sector 1 (100% Ready Handover)',
      sizeKatha: 3,
      sizeSqFt: 2160,
      pricePerKatha: 16.5,
      totalPrice: 49.5,
      downPayment: 9.9,
      monthlyEMI: 66000,
      status: 'available',
      facing: 'South',
      roadWidth: '40 Feet Wide Paved Road',
      dimensions: "30' x 72'",
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80',
      features: [
        'Immediate Spot Sub-Registry Deed',
        'Direct 4-Lane Highway Link',
        'Electricity, Gas & Water Connection Ready',
        'Demarcated Boundary Pillars Set'
      ],
      isFeatured: true
    },
    {
      id: 'DWV-S1-5K',
      title: '5 Katha Premium Family Plot (Sector 1)',
      category: 'residential-land',
      sector: 'Sector 1 (100% Ready Handover)',
      sizeKatha: 5,
      sizeSqFt: 3600,
      pricePerKatha: 17.5,
      totalPrice: 87.5,
      downPayment: 17.5,
      monthlyEMI: 116000,
      status: 'available',
      facing: 'Corner',
      roadWidth: '60 Feet Avenue Road',
      dimensions: "50' x 72'",
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80',
      features: [
        'Adjacent to Central Jame Mosque',
        'Corner Plot with Dual Frontage',
        'Underground Stormwater Canal',
        'Ready for Duplex Construction'
      ],
      isFeatured: true
    },
    {
      id: 'DWV-S2-5K',
      title: '5 Katha Developing Residential Plot (Sector 2)',
      category: 'residential-land',
      sector: 'Sector 2 (Active Development)',
      sizeKatha: 5,
      sizeSqFt: 3600,
      pricePerKatha: 15.0,
      totalPrice: 75.0,
      downPayment: 15.0,
      monthlyEMI: 100000,
      status: 'available',
      facing: 'East',
      roadWidth: '50 Feet Paved Road',
      dimensions: "50' x 72'",
      image: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=800&q=80',
      features: [
        'High Investment Appreciation Zone',
        '60-Month Zero-Interest Installments',
        'Trenching for Fiber Optic & Power',
        'Handover within 12 Months'
      ],
      isFeatured: true
    },
    {
      id: 'DWV-S3-10K',
      title: '10 Katha Lakefront Executive Estate (Sector 3)',
      category: 'residential-land',
      sector: 'Sector 3 (Lakefront VIP Enclave)',
      sizeKatha: 10,
      sizeSqFt: 7200,
      pricePerKatha: 21.0,
      totalPrice: 210.0,
      downPayment: 42.0,
      monthlyEMI: 280000,
      status: 'available',
      facing: 'Lakefront',
      roadWidth: '80 Feet Lakeside Boulevard',
      dimensions: "60' x 120'",
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
      features: [
        'Uninterrupted Panoramic Eco-Lake View',
        'Private Lakeside Promenade Access',
        'VIP Security Checkpost at Entrance',
        'Designed for Luxury Architectural Villa'
      ],
      isFeatured: true
    },
    {
      id: 'DWV-COM-20K',
      title: '20 Katha (1 Bigha) 4-Lane Highway Commercial Plot',
      category: 'commercial-land',
      sector: 'Highway Commercial Zone',
      sizeKatha: 20,
      sizeSqFt: 14400,
      pricePerKatha: 32.0,
      totalPrice: 640.0,
      downPayment: 128.0,
      monthlyEMI: 853000,
      status: 'available',
      facing: 'North',
      roadWidth: '120 Feet 4-Lane Highway Frontage',
      dimensions: "120' x 120'",
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
      features: [
        'Direct Dhaka-Savar Highway Frontage',
        'Approved for Commercial Mall, Hospital, or High-Rise',
        'Dedicated 33/11kV Substation Power Feed',
        'Exceptional Commercial ROI & Footfall'
      ],
      isFeatured: true
    },
    {
      id: 'DWV-FLAT-201',
      title: 'Western Heights Luxury Duplex Flat (2,850 Sq.Ft)',
      category: 'flat',
      sector: 'Sector 1 (Valley Heights)',
      sizeKatha: 3.95,
      sizeSqFt: 2850,
      pricePerKatha: 0,
      totalPrice: 185.0,
      downPayment: 37.0,
      monthlyEMI: 246000,
      status: 'available',
      facing: 'South',
      roadWidth: '60 Feet Road',
      dimensions: '4 Bed + 5 Bath + Servant Room',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      features: [
        'Private Terrace Sky Garden',
        'Imported Spanish Porcelain & Marble Finish',
        '2 Covered Basement Car Parkings',
        'Rooftop Infinity Swimming Pool & Gym'
      ],
      isFeatured: true
    },
    {
      id: 'DWV-HOTEL-301',
      title: 'Western Grand Hotel Luxury Suite Share',
      category: 'hotel-suite',
      sector: 'Resort & Hospitality Hub',
      sizeKatha: 1.2,
      sizeSqFt: 850,
      pricePerKatha: 0,
      totalPrice: 65.0,
      downPayment: 13.0,
      monthlyEMI: 86000,
      status: 'available',
      facing: 'Lakefront',
      roadWidth: '100 Feet Boulevard',
      dimensions: '5-Star Studio Suite Layout',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
      features: [
        'Guaranteed 14% Annual Rental ROI Yield',
        '30 Days Free Stay Per Year for Owner',
        '5-Star Managed Hospitality Service',
        'Fully Furnished Designer Interior'
      ],
      isFeatured: true
    }
  ])

  // Unit Converter Helpers
  const convertUnits = (value: number, fromUnit: 'katha' | 'decimal' | 'sqft' | 'bigha') => {
    let katha = 0
    if (fromUnit === 'katha') katha = value
    if (fromUnit === 'decimal') katha = value / 1.65
    if (fromUnit === 'sqft') katha = value / 720
    if (fromUnit === 'bigha') katha = value * 20

    return {
      katha: Number(katha.toFixed(2)),
      decimal: Number((katha * 1.65).toFixed(2)),
      sqft: Number((katha * 720).toFixed(0)),
      bigha: Number((katha / 20).toFixed(3))
    }
  }

  // EMI Calculator Helper
  const calculateEMI = (totalPriceLakhs: number, downPaymentPercent: number, tenureMonths: number, interestRatePercent: number = 0) => {
    const safePrice = Number(totalPriceLakhs) || 0
    const safeDown = Number(downPaymentPercent) || 0
    const safeTenure = Number(tenureMonths) || 1

    const principalBDT = (safePrice * (1 - safeDown / 100)) * 100000
    const downPaymentBDT = (safePrice * (safeDown / 100)) * 100000
    const monthlyRate = (interestRatePercent / 12) / 100

    if (monthlyRate === 0) {
      const emi = Math.round(principalBDT / safeTenure)
      return {
        monthlyEMI: emi,
        downPaymentBDT: Math.round(downPaymentBDT),
        principalBDT: Math.round(principalBDT),
        totalPayableBDT: Math.round(principalBDT + downPaymentBDT),
        totalInterestBDT: 0
      }
    }

    const emi = (principalBDT * monthlyRate * Math.pow(1 + monthlyRate, safeTenure)) / (Math.pow(1 + monthlyRate, safeTenure) - 1)

    return {
      monthlyEMI: Math.round(emi),
      downPaymentBDT: Math.round(downPaymentBDT),
      principalBDT: Math.round(principalBDT),
      totalPayableBDT: Math.round((emi * safeTenure) + downPaymentBDT),
      totalInterestBDT: Math.round((emi * safeTenure) - principalBDT)
    }
  }

  return {
    plots,
    convertUnits,
    calculateEMI
  }
}
