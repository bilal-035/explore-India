export type Destination = {
  slug: string;
  name: string;
  region: string;
  state: string;
  tagline: string;
  description: string;
  image: string;
  price: number;
  duration: string;
  rating: string;
  reviews: string;
  bestTime: string;
  groupSize: string;
  highlight: string;
  includes: string[];
  itinerary: { day: string; title: string; text: string }[];
};

export const destinations: Destination[] = [
  {
    slug: "agra-taj-mahal",
    name: "Agra & the Taj Mahal",
    region: "NORTH INDIA",
    state: "Uttar Pradesh",
    tagline: "A love story carved in marble.",
    description: "Watch sunrise turn the Taj Mahal soft gold, wander the red-sandstone courtyards of Agra Fort, and dine beside the Yamuna on a thoughtfully paced heritage escape.",
    image: "https://images.pexels.com/photos/11948442/pexels-photo-11948442.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=1800",
    price: 12800,
    duration: "3 days · 2 nights",
    rating: "4.9",
    reviews: "248 reviews",
    bestTime: "Oct — Mar",
    groupSize: "2 — 12 guests",
    highlight: "Private sunrise entry at the Taj Mahal",
    includes: ["Boutique stay with breakfast", "AC transfers from Delhi or Agra", "Expert local storyteller", "All monument entry tickets"],
    itinerary: [
      { day: "DAY 01", title: "Arrive in the City of Love", text: "Meet your local host, settle in, and spend the evening on a Mughal food walk through old Agra." },
      { day: "DAY 02", title: "The Taj at first light", text: "Enter the Taj Mahal at sunrise, followed by Agra Fort and a quiet evening by the river." },
      { day: "DAY 03", title: "Mughal treasures", text: "Explore Itimad-ud-Daulah before a comfortable departure with memories in your carry-on." },
    ],
  },
  {
    slug: "kerala-backwaters",
    name: "Kerala Backwaters",
    region: "SOUTH INDIA",
    state: "Kerala",
    tagline: "Drift into a greener rhythm.",
    description: "Slow down on palm-lined waterways, sleep aboard a traditional houseboat, and taste the spice-laced warmth of Kerala at its most serene.",
    image: "https://images.pexels.com/photos/12950219/pexels-photo-12950219.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=1800",
    price: 16700,
    duration: "4 days · 3 nights",
    rating: "4.8",
    reviews: "192 reviews",
    bestTime: "Sep — Mar",
    groupSize: "2 — 10 guests",
    highlight: "Overnight houseboat cruise on Vembanad Lake",
    includes: ["Premium houseboat cabin", "Daily Kerala breakfast & dinner", "Airport transfers from Kochi", "Village canoe experience"],
    itinerary: [
      { day: "DAY 01", title: "Welcome to Kochi", text: "A relaxed arrival followed by a walk through Fort Kochi’s colourful heritage lanes." },
      { day: "DAY 02", title: "Board your houseboat", text: "Cruise through coconut groves, watch village life go by, and dine under an open sky." },
      { day: "DAY 03", title: "Canoes & cardamom", text: "Paddle quiet canals, meet local artisans, and enjoy an unhurried waterfront sunset." },
    ],
  },
  {
    slug: "jaipur-royal-rajasthan",
    name: "Royal Rajasthan",
    region: "WEST INDIA",
    state: "Jaipur, Rajasthan",
    tagline: "Palaces, pigment, and desert skies.",
    description: "Step inside Jaipur’s royal past with a stay in a heritage haveli, a guided Amber Fort walk, and an evening full of Rajasthan’s famous colour and flavour.",
    image: "https://images.pexels.com/photos/18881278/pexels-photo-18881278.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=1800",
    price: 14200,
    duration: "4 days · 3 nights",
    rating: "4.9",
    reviews: "314 reviews",
    bestTime: "Oct — Feb",
    groupSize: "2 — 14 guests",
    highlight: "Golden hour at Amber Fort with a local historian",
    includes: ["Heritage haveli accommodation", "Breakfast and two dinners", "Private Jaipur airport transfer", "Amber Fort & City Palace entries"],
    itinerary: [
      { day: "DAY 01", title: "The Pink City welcomes you", text: "Check into your haveli and begin with a food-filled stroll through Jaipur’s old bazaar." },
      { day: "DAY 02", title: "Fortress in the hills", text: "Follow a historian around Amber Fort before visiting hand-block printers in Sanganer." },
      { day: "DAY 03", title: "Jaipur in living colour", text: "Find the Hawa Mahal, City Palace, and a private crafts session with a local family." },
    ],
  },
  {
    slug: "goa-slow-escape",
    name: "Goa Slow Escape",
    region: "WEST COAST",
    state: "Goa",
    tagline: "Salt air and unhurried days.",
    description: "Find your own sunny corner of Goa with boutique stays, secret beach trails, Portuguese-era lanes, and plenty of time simply to be by the sea.",
    image: "https://images.pexels.com/photos/4428274/pexels-photo-4428274.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=1800",
    price: 11600,
    duration: "4 days · 3 nights",
    rating: "4.7",
    reviews: "176 reviews",
    bestTime: "Nov — Mar",
    groupSize: "2 — 10 guests",
    highlight: "Sunset picnic on a secluded North Goa beach",
    includes: ["Design-led coastal stay", "Breakfast every day", "Airport pick-up & drop", "Curated beach and heritage trail"],
    itinerary: [
      { day: "DAY 01", title: "Ease into the coast", text: "Settle into your boutique hideaway and enjoy a sunset welcome picnic by the Arabian Sea." },
      { day: "DAY 02", title: "Goa beyond the beach", text: "Ride through colourful Fontainhas and explore tiny bakeries, galleries, and old churches." },
      { day: "DAY 03", title: "A day at your own pace", text: "Choose a sea kayak, market browse, yoga session, or a blissfully empty day on the sand." },
    ],
  },
  {
    slug: "ladakh-highlands",
    name: "Ladakh Highlands",
    region: "HIMALAYAS",
    state: "Ladakh",
    tagline: "Where the mountains feel infinite.",
    description: "Travel from Leh’s prayer-flagged monasteries to the astonishing blue of Pangong Lake on a small-group journey through India’s high Himalayas.",
    image: "https://images.pexels.com/photos/18014614/pexels-photo-18014614.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=1800",
    price: 24500,
    duration: "6 days · 5 nights",
    rating: "4.9",
    reviews: "128 reviews",
    bestTime: "Jun — Sep",
    groupSize: "2 — 8 guests",
    highlight: "Camp beside the changing blue of Pangong Lake",
    includes: ["Mountain lodge & camp stays", "All meals after arrival", "Acclimatisation-friendly route", "Experienced mountain trip leader"],
    itinerary: [
      { day: "DAY 01", title: "Land in Leh", text: "Rest and acclimatise in the crisp mountain air at your comfortable Leh lodge." },
      { day: "DAY 02", title: "Monasteries & old Leh", text: "Gently explore Shanti Stupa, local markets, and one of Ladakh’s peaceful monasteries." },
      { day: "DAY 03", title: "Toward Pangong", text: "Cross high mountain passes on a magnificent drive to the blue waters of Pangong Lake." },
    ],
  },
];

export function getDestination(slug: string) {
  return destinations.find((destination) => destination.slug === slug);
}

export function formatINR(value: number) {
  return new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(value);
}
