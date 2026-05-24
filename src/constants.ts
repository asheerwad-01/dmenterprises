export interface Product {
  id: string;
  title: string;
  category: string;
  price: number;
  image: string;
  rating?: number;
}

export interface Category {
  id: string;
  title: string;
  subtitle?: string;
  image: string;
  path: string;
}

export const CATEGORIES: Category[] = [
  {
    id: '1',
    title: 'Trophies & Awards',
    subtitle: 'Wooden, MDF, Acrylic',
    image: '/Trophies/12.jpeg',
    path: '/trophies'
  },
  {
    id: '2',
    title: 'Mementos',
    subtitle: 'Corporate & Personalized',
    image: '/Trophies/PW1070BR.jpeg',
    path: '/trophies'
  },
  {
    id: '3',
    title: 'Customized Gifts',
    subtitle: 'Unique & Personal',
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=800&auto=format&fit=crop',
    path: '/gifts'
  },
  {
    id: '4',
    title: 'Keyrings',
    subtitle: 'Acrylic, Metal, Wooden',
    image: 'https://www.promotionsinternational.com.au/wp-content/uploads/ym002-Metal-Keyring.jpg',
    path: '/gifts'
  },
  {
    id: '5',
    title: 'T-Shirt Print',
    subtitle: 'Custom Printed',
    image: 'https://wittee.in/wp-content/uploads/2025/07/front-6867f06261931-Melange_Grey_S_Men_Round.jpg',
    path: '/gifts'
  },
  {
    id: '6',
    title: 'Mug Print',
    subtitle: 'Custom Printed',
    image: 'https://www.wisholize.com/cdn/shop/products/White_Mug_325ml_bf246f52-976d-45b7-8491-13fe654169df.jpg?v=1463038984',
    path: '/gifts'
  },
  {
    id: '7',
    title: 'Rubber Stamps',
    subtitle: 'All Types Available',
    image: 'https://printo-s3.dietpixels.net/site/2024/Rubber%20stamp/PLA/1280_1712676829.jpg?quality=70&format=webp&w=640',
    path: '/stamps'
  }
];

export const PRODUCTS: Product[] = [
  // 38 Local Trophies
  {
    id: '1',
    title: 'Classic Achievement Trophy',
    category: 'Classic Trophy',
    price: 890,
    image: '/Trophies/12.jpeg'
  },
  {
    id: '2',
    title: 'Victory Classic Trophy',
    category: 'Classic Trophy',
    price: 950,
    image: '/Trophies/13.jpeg'
  },
  {
    id: '3',
    title: 'Star Champion Trophy',
    category: 'Star Trophy',
    price: 1050,
    image: '/Trophies/22.jpeg'
  },
  {
    id: '4',
    title: 'Golden Star Award',
    category: 'Star Trophy',
    price: 1100,
    image: '/Trophies/23.jpeg'
  },
  {
    id: '5',
    title: 'Prestige Star Trophy',
    category: 'Star Trophy',
    price: 1150,
    image: '/Trophies/24.jpeg'
  },
  {
    id: '6',
    title: 'Gold Star Achievement',
    category: 'Star Trophy',
    price: 1200,
    image: '/Trophies/25.jpeg'
  },
  {
    id: '7',
    title: 'Shining Star Trophy',
    category: 'Star Trophy',
    price: 1250,
    image: '/Trophies/26.jpeg'
  },
  {
    id: '8',
    title: 'Triumph Cup Trophy',
    category: 'Classic Trophy',
    price: 1300,
    image: '/Trophies/32.jpeg'
  },
  {
    id: '9',
    title: 'Championship Gold Cup',
    category: 'Classic Trophy',
    price: 1350,
    image: '/Trophies/33.jpeg'
  },
  {
    id: '10',
    title: 'Apex Victory Cup',
    category: 'Classic Trophy',
    price: 1400,
    image: '/Trophies/36.jpeg'
  },
  {
    id: '11',
    title: 'Corporate Crystal Award',
    category: 'Corporate Acrylic Trophy',
    price: 1450,
    image: '/Trophies/CP1595.jpeg'
  },
  {
    id: '12',
    title: 'Diamond Crystal Award',
    category: 'Corporate Acrylic Trophy',
    price: 1500,
    image: '/Trophies/CP1778.jpeg'
  },
  {
    id: '13',
    title: 'Corporate Excellence Award',
    category: 'Corporate Acrylic Trophy',
    price: 1550,
    image: '/Trophies/CP1822.jpeg'
  },
  {
    id: '14',
    title: 'Excellence Crystal Green',
    category: 'Corporate Acrylic Trophy',
    price: 1600,
    image: '/Trophies/CP1822GR.jpeg'
  },
  {
    id: '15',
    title: 'Green Border Acrylic Award',
    category: 'Corporate Acrylic Trophy',
    price: 1650,
    image: '/Trophies/CP1911GR.jpeg'
  },
  {
    id: '16',
    title: 'Corporate Prestige Acrylic',
    category: 'Corporate Acrylic Trophy',
    price: 1700,
    image: '/Trophies/CP2313.jpeg'
  },
  {
    id: '17',
    title: 'Premium Golden Shield',
    category: 'Wooden Trophy',
    price: 1750,
    image: '/Trophies/PR1421GB.jpeg'
  },
  {
    id: '18',
    title: 'Premium Rosewood Shield',
    category: 'Wooden Trophy',
    price: 1800,
    image: '/Trophies/PR1421GR.jpeg'
  },
  {
    id: '19',
    title: 'Prestige Gold Shield',
    category: 'Wooden Trophy',
    price: 1850,
    image: '/Trophies/PR1422GB.jpeg'
  },
  {
    id: '20',
    title: 'Prestige Classic Shield',
    category: 'Wooden Trophy',
    price: 1900,
    image: '/Trophies/PR1422GR.jpeg'
  },
  {
    id: '21',
    title: 'Luxe Wooden Memento',
    category: 'Wooden Memento',
    price: 1950,
    image: '/Trophies/PW1070BR.jpeg'
  },
  {
    id: '22',
    title: 'Golden Wooden Memento',
    category: 'Wooden Memento',
    price: 2000,
    image: '/Trophies/WG3581.jpeg'
  },
  {
    id: '23',
    title: 'Luxe Wooden Trophy WL4508',
    category: 'Wooden Trophy',
    price: 2050,
    image: '/Trophies/WL4508.jpeg'
  },
  {
    id: '24',
    title: 'Luxe Wooden Trophy WL4527',
    category: 'Wooden Trophy',
    price: 2100,
    image: '/Trophies/WL4527.jpeg'
  },
  {
    id: '25',
    title: 'Luxe Wooden Trophy WL4529',
    category: 'Wooden Trophy',
    price: 2150,
    image: '/Trophies/WL4529.jpeg'
  },
  {
    id: '26',
    title: 'Luxe Wooden Trophy WL4531',
    category: 'Wooden Trophy',
    price: 2200,
    image: '/Trophies/WL4531.jpeg'
  },
  {
    id: '27',
    title: 'Luxe Wooden Trophy WL4533',
    category: 'Wooden Trophy',
    price: 2250,
    image: '/Trophies/WL4533.jpeg'
  },
  {
    id: '28',
    title: 'Luxe Wooden Trophy WL4547',
    category: 'Wooden Trophy',
    price: 2300,
    image: '/Trophies/WL4547.jpeg'
  },
  {
    id: '29',
    title: 'Luxe Wooden Trophy WL4559',
    category: 'Wooden Trophy',
    price: 2350,
    image: '/Trophies/WL4559.jpeg'
  },
  {
    id: '30',
    title: 'Luxe Wooden Trophy WL4563',
    category: 'Wooden Trophy',
    price: 2400,
    image: '/Trophies/WL4563.jpeg'
  },
  {
    id: '31',
    title: 'Luxe Wooden Trophy WL4592',
    category: 'Wooden Trophy',
    price: 2450,
    image: '/Trophies/WL4592.jpeg'
  },
  {
    id: '32',
    title: 'Luxe Wooden Trophy WL4594',
    category: 'Wooden Trophy',
    price: 2500,
    image: '/Trophies/WL4594.jpeg'
  },
  {
    id: '33',
    title: 'Luxe Wooden Trophy WL4657',
    category: 'Wooden Trophy',
    price: 2550,
    image: '/Trophies/WL4657.jpeg'
  },
  {
    id: '34',
    title: 'Luxe Wooden Trophy WL4658',
    category: 'Wooden Trophy',
    price: 2600,
    image: '/Trophies/WL4658.jpeg'
  },
  {
    id: '35',
    title: 'Golden Wooden Trophy WLG3801',
    category: 'Wooden Trophy',
    price: 2650,
    image: '/Trophies/WLG3801.jpeg'
  },
  {
    id: '36',
    title: 'Golden Wooden Trophy WLG3811',
    category: 'Wooden Trophy',
    price: 2700,
    image: '/Trophies/WLG3811.jpeg'
  },
  {
    id: '37',
    title: 'Golden Wooden Trophy WLG3831R',
    category: 'Wooden Trophy',
    price: 2750,
    image: '/Trophies/WLG3831R.jpeg'
  },
  {
    id: '38',
    title: 'Golden Wooden Trophy WLG3838R',
    category: 'Wooden Trophy',
    price: 2800,
    image: '/Trophies/WLG3838R.jpeg'
  },

  // 5 Original Non-Trophy Products
  {
    id: '39',
    title: 'Personalized Gift Set',
    category: 'Customized Gift',
    price: 1499,
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '40',
    title: 'Self Inking Stamp',
    category: 'Printer Stamp',
    price: 450,
    image: 'https://www.thestampmaker.com/Images/products/TRODAT_PRINTY_4910.jpg.ashx?width=600&height=600&quality=90&format=webp&scale=canvas'
  },
  {
    id: '41',
    title: 'Custom Metal Keyring',
    category: 'Metal Keyring',
    price: 199,
    image: 'https://www.promotionsinternational.com.au/wp-content/uploads/ym002-Metal-Keyring.jpg'
  },
  {
    id: '42',
    title: 'Printed T-Shirt',
    category: 'T-Shirt Print',
    price: 499,
    image: 'https://wittee.in/wp-content/uploads/2025/07/front-6867f06261931-Melange_Grey_S_Men_Round.jpg'
  },
  {
    id: '43',
    title: 'Custom Printed Mug',
    category: 'Mug Print',
    price: 299,
    image: 'https://www.wisholize.com/cdn/shop/products/White_Mug_325ml_bf246f52-976d-45b7-8491-13fe654169df.jpg?v=1463038984'
  }
];

// Assign deterministic ratings to products if they don't have one
PRODUCTS.forEach((product, idx) => {
  if (product.rating === undefined) {
    // Generate a rating between 4.0 and 5.0
    product.rating = parseFloat((4.0 + ((idx * 7) % 11) * 0.1).toFixed(1));
  }
});
