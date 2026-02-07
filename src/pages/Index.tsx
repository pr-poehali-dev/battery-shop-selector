import { useState } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CatalogSection from '@/components/CatalogSection';
import Footer from '@/components/Footer';

interface Battery {
  id: number;
  brand: string;
  model: string;
  capacity: number;
  cranking: number;
  voltage: number;
  length: number;
  width: number;
  height: number;
  price: number;
  image: string;
  rating: number;
  reviews: number;
  warranty: number;
  inStock: boolean;
}

const batteries: Battery[] = [
  {
    id: 1,
    brand: 'VARTA',
    model: 'Blue Dynamic E11',
    capacity: 74,
    cranking: 680,
    voltage: 12,
    length: 278,
    width: 175,
    height: 190,
    price: 8990,
    image: 'https://cdn.poehali.dev/projects/15ac7d55-e18d-4ac5-bc59-7f8c56916acd/files/16391dd5-0a8d-44bc-9b1b-5f25c0c406f6.jpg',
    rating: 4.8,
    reviews: 234,
    warranty: 24,
    inStock: true,
  },
  {
    id: 2,
    brand: 'BOSCH',
    model: 'S4 Silver',
    capacity: 60,
    cranking: 540,
    voltage: 12,
    length: 242,
    width: 175,
    height: 190,
    price: 7490,
    image: 'https://cdn.poehali.dev/projects/15ac7d55-e18d-4ac5-bc59-7f8c56916acd/files/cbf2ce2b-862f-4880-83cd-491c799491d4.jpg',
    rating: 4.9,
    reviews: 567,
    warranty: 36,
    inStock: true,
  },
  {
    id: 3,
    brand: 'Exide',
    model: 'Premium EA722',
    capacity: 72,
    cranking: 720,
    voltage: 12,
    length: 278,
    width: 175,
    height: 190,
    price: 9290,
    image: 'https://cdn.poehali.dev/projects/15ac7d55-e18d-4ac5-bc59-7f8c56916acd/files/9bd15642-6936-4fce-9bb8-c361c8ed0edb.jpg',
    rating: 4.7,
    reviews: 189,
    warranty: 24,
    inStock: true,
  },
  {
    id: 4,
    brand: 'Mutlu',
    model: 'Calcium Silver',
    capacity: 63,
    cranking: 550,
    voltage: 12,
    length: 242,
    width: 175,
    height: 190,
    price: 6790,
    image: 'https://cdn.poehali.dev/projects/15ac7d55-e18d-4ac5-bc59-7f8c56916acd/files/16391dd5-0a8d-44bc-9b1b-5f25c0c406f6.jpg',
    rating: 4.6,
    reviews: 423,
    warranty: 18,
    inStock: true,
  },
  {
    id: 5,
    brand: 'Topla',
    model: 'Energy',
    capacity: 66,
    cranking: 620,
    voltage: 12,
    length: 278,
    width: 175,
    height: 190,
    price: 7990,
    image: 'https://cdn.poehali.dev/projects/15ac7d55-e18d-4ac5-bc59-7f8c56916acd/files/cbf2ce2b-862f-4880-83cd-491c799491d4.jpg',
    rating: 4.5,
    reviews: 312,
    warranty: 24,
    inStock: false,
  },
  {
    id: 6,
    brand: 'Tudor',
    model: 'Technica',
    capacity: 77,
    cranking: 760,
    voltage: 12,
    length: 278,
    width: 175,
    height: 190,
    price: 10490,
    image: 'https://cdn.poehali.dev/projects/15ac7d55-e18d-4ac5-bc59-7f8c56916acd/files/9bd15642-6936-4fce-9bb8-c361c8ed0edb.jpg',
    rating: 4.9,
    reviews: 678,
    warranty: 36,
    inStock: true,
  },
];

const carBrands = ['Toyota', 'BMW', 'Mercedes-Benz', 'Volkswagen', 'Audi', 'Ford', 'Hyundai', 'Kia', 'Honda', 'Nissan'];
const carModels: Record<string, string[]> = {
  'Toyota': ['Camry', 'Corolla', 'RAV4', 'Land Cruiser'],
  'BMW': ['3 Series', '5 Series', 'X5', 'X3'],
  'Mercedes-Benz': ['C-Class', 'E-Class', 'GLC', 'GLE'],
  'Volkswagen': ['Polo', 'Golf', 'Tiguan', 'Passat'],
  'Audi': ['A4', 'A6', 'Q5', 'Q7'],
};

export default function Index() {
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [capacityRange, setCapacityRange] = useState([40, 100]);
  const [crankingRange, setCrankingRange] = useState([400, 800]);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredBatteries = batteries.filter(battery => {
    const matchesCapacity = battery.capacity >= capacityRange[0] && battery.capacity <= capacityRange[1];
    const matchesCranking = battery.cranking >= crankingRange[0] && battery.cranking <= crankingRange[1];
    const matchesSearch = battery.brand.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          battery.model.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCapacity && matchesCranking && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-muted/30">
      <Header />
      
      <HeroSection
        selectedBrand={selectedBrand}
        setSelectedBrand={setSelectedBrand}
        selectedModel={selectedModel}
        setSelectedModel={setSelectedModel}
        carBrands={carBrands}
        carModels={carModels}
      />

      <CatalogSection
        filteredBatteries={filteredBatteries}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        capacityRange={capacityRange}
        setCapacityRange={setCapacityRange}
        crankingRange={crankingRange}
        setCrankingRange={setCrankingRange}
      />

      <Footer />
    </div>
  );
}
