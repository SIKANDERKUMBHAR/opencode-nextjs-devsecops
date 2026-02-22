export type Product = {
  id: string;
  name: string;
  slug: string;
  price: number;
  flavor: "Cola" | "Orange" | "Lemon" | "Energy";
  size: "250ml" | "500ml" | "1L";
  brand: string;
  description: string;
  nutrition: {
    calories: number;
    sugar: string;
    caffeine: string;
    sodium: string;
  };
  heroGradient: string;
  modelKey: "can" | "bottle" | "crate";
};

export const products: Product[] = [
  {
    id: "np-cola-250",
    name: "Neon Pulse Cola",
    slug: "neon-pulse-cola-250",
    price: 2.75,
    flavor: "Cola",
    size: "250ml",
    brand: "Neon Pulse",
    description:
      "Classic cola remixed with neon citrus sparkle and zero aftertaste. Built for night runs and bright days.",
    nutrition: {
      calories: 110,
      sugar: "22g",
      caffeine: "32mg",
      sodium: "60mg",
    },
    heroGradient: "from-[#FF2E63] via-[#8b2eff] to-[#08D9D6]",
    modelKey: "can",
  },
  {
    id: "np-cola-500",
    name: "Neon Pulse Cola XL",
    slug: "neon-pulse-cola-500",
    price: 3.95,
    flavor: "Cola",
    size: "500ml",
    brand: "Neon Pulse",
    description:
      "Extended charge. Same signature cola, amplified fizz, and a long-form neon finish.",
    nutrition: {
      calories: 190,
      sugar: "38g",
      caffeine: "62mg",
      sodium: "110mg",
    },
    heroGradient: "from-[#FF2E63] via-[#501b8d] to-[#08D9D6]",
    modelKey: "bottle",
  },
  {
    id: "np-orange-250",
    name: "Ion Orange Burst",
    slug: "ion-orange-burst-250",
    price: 2.6,
    flavor: "Orange",
    size: "250ml",
    brand: "Neon Pulse",
    description:
      "Bright orange with a tangy photon pop. Crisp, clean, and charged with citrus glow.",
    nutrition: {
      calories: 105,
      sugar: "21g",
      caffeine: "18mg",
      sodium: "55mg",
    },
    heroGradient: "from-[#FF8A00] via-[#FF2E63] to-[#F9ED69]",
    modelKey: "can",
  },
  {
    id: "np-lemon-250",
    name: "Lemon Nova",
    slug: "lemon-nova-250",
    price: 2.55,
    flavor: "Lemon",
    size: "250ml",
    brand: "Neon Pulse",
    description:
      "Ultra-fresh lemon lightning with a cool mint afterglow. Clean energy with a citrus edge.",
    nutrition: {
      calories: 95,
      sugar: "18g",
      caffeine: "0mg",
      sodium: "40mg",
    },
    heroGradient: "from-[#F9ED69] via-[#08D9D6] to-[#6DFFB1]",
    modelKey: "can",
  },
  {
    id: "np-energy-250",
    name: "Pulse Energy",
    slug: "pulse-energy-250",
    price: 3.1,
    flavor: "Energy",
    size: "250ml",
    brand: "Neon Pulse",
    description:
      "Electric berry-lime fusion with adaptive caffeine. Designed for peak performance sessions.",
    nutrition: {
      calories: 120,
      sugar: "26g",
      caffeine: "90mg",
      sodium: "80mg",
    },
    heroGradient: "from-[#08D9D6] via-[#4D7CFE] to-[#FF2E63]",
    modelKey: "can",
  },
  {
    id: "np-lemon-1l",
    name: "Lemon Nova Family",
    slug: "lemon-nova-1l",
    price: 5.5,
    flavor: "Lemon",
    size: "1L",
    brand: "Neon Pulse",
    description:
      "Big-batch refreshment with a neon lemon surge. Built for late-night crews and bright mornings.",
    nutrition: {
      calories: 320,
      sugar: "64g",
      caffeine: "0mg",
      sodium: "140mg",
    },
    heroGradient: "from-[#F9ED69] via-[#08D9D6] to-[#2CF6B3]",
    modelKey: "bottle",
  },
  {
    id: "np-orange-500",
    name: "Ion Orange XL",
    slug: "ion-orange-xl-500",
    price: 3.6,
    flavor: "Orange",
    size: "500ml",
    brand: "Neon Pulse",
    description:
      "Smooth orange fizz with an electric finish. Maximum glow, zero drag.",
    nutrition: {
      calories: 180,
      sugar: "36g",
      caffeine: "25mg",
      sodium: "95mg",
    },
    heroGradient: "from-[#FF8A00] via-[#FF2E63] to-[#6DFFB1]",
    modelKey: "bottle",
  },
  {
    id: "np-energy-1l",
    name: "Pulse Energy Vault",
    slug: "pulse-energy-1l",
    price: 6.2,
    flavor: "Energy",
    size: "1L",
    brand: "Neon Pulse",
    description:
      "Long range energy for studio nights and marathon quests. Clean, bright, and precise.",
    nutrition: {
      calories: 330,
      sugar: "70g",
      caffeine: "150mg",
      sodium: "160mg",
    },
    heroGradient: "from-[#08D9D6] via-[#6B6BFF] to-[#FF2E63]",
    modelKey: "bottle",
  },
];

export const flavors = ["Cola", "Orange", "Lemon", "Energy"] as const;
export const sizes = ["250ml", "500ml", "1L"] as const;
