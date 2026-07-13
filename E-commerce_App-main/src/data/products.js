export const CATEGORIES = [
    { slug: "electronics", name: "Electronics", icon: "Cpu" },
    { slug: "fashion", name: "Fashion", icon: "Shirt" },
    { slug: "shoes", name: "Shoes", icon: "Footprints" },
    { slug: "watches", name: "Watches", icon: "Watch" },
    { slug: "beauty", name: "Beauty", icon: "Sparkles" },
    { slug: "books", name: "Books", icon: "BookOpen" },
    { slug: "grocery", name: "Grocery", icon: "ShoppingBasket" },
    { slug: "home-kitchen", name: "Home & Kitchen", icon: "CookingPot" },
    { slug: "furniture", name: "Furniture", icon: "Armchair" },
    { slug: "toys", name: "Toys", icon: "ToyBrick" },
    { slug: "sports", name: "Sports", icon: "Dumbbell" },
    { slug: "mobiles", name: "Mobiles", icon: "Smartphone" },
    { slug: "laptops", name: "Laptops", icon: "Laptop" },
    { slug: "accessories", name: "Accessories", icon: "Backpack" },
    { slug: "health", name: "Health", icon: "HeartPulse" },
    { slug: "pet-supplies", name: "Pet Supplies", icon: "PawPrint" },
];
const img = (seed, w = 800) => `https://images.unsplash.com/${seed}?auto=format&fit=crop&w=${w}&q=80`;
// Curated Unsplash photo IDs per category
const PHOTOS = {
    electronics: [
        "photo-1518770660439-4636190af475",
        "photo-1519389950473-47ba0277781c",
        "photo-1526738549149-8e07eca6c147",
        "photo-1550009158-9ebf69173e03",
        "photo-1583394838336-acd977736f90",
        "photo-1580894732444-8ecded7900cd",
    ],
    fashion: [
        "photo-1520975916090-3105956dac38",
        "photo-1515886657613-9f3515b0c78f",
        "photo-1490481651871-ab68de25d43d",
        "photo-1483985988355-763728e1935b",
        "photo-1479064555552-3ef4979f8908",
        "photo-1495121605193-b116b5b9c5fe",
    ],
    shoes: [
        "photo-1542291026-7eec264c27ff",
        "photo-1600185365483-26d7a4cc7519",
        "photo-1595950653106-6c9ebd614d3a",
        "photo-1449505278894-297fdb3edbc1",
        "photo-1460353581641-37baddab0fa2",
        "photo-1552346154-21d32810aba3",
    ],
    watches: [
        "photo-1524805444758-089113d48a6d",
        "photo-1523170335258-f5ed11844a49",
        "photo-1495856458515-0637185db551",
        "photo-1533139502658-0198f920d8e8",
        "photo-1547996160-81dfa63595aa",
    ],
    beauty: [
        "photo-1522337360788-8b13dee7a37e",
        "photo-1596462502278-27bfdc403348",
        "photo-1512496015851-a90fb38ba796",
        "photo-1571781926291-c477ebfd024b",
        "photo-1586495777744-4413f21062fa",
    ],
    books: [
        "photo-1544947950-fa07a98d237f",
        "photo-1512820790803-83ca734da794",
        "photo-1495446815901-a7297e633e8d",
        "photo-1524995997946-a1c2e315a42f",
        "photo-1541963463532-d68292c34b19",
    ],
    grocery: [
        "photo-1542838132-92c53300491e",
        "photo-1506617564039-2f3b650b7010",
        "photo-1543168256-418811576931",
        "photo-1580913428023-02c695666d61",
        "photo-1490474418585-ba9bad8fd0ea",
    ],
    "home-kitchen": [
        "photo-1556909114-f6e7ad7d3136",
        "photo-1522708323590-d24dbb6b0267",
        "photo-1584346133934-a3a4db9e05cf",
        "photo-1583778176476-4a8b02a64c01",
        "photo-1590794056226-79ef3a8147e1",
    ],
    furniture: [
        "photo-1555041469-a586c61ea9bc",
        "photo-1567538096630-e0c55bd6374c",
        "photo-1493663284031-b7e3aefcae8e",
        "photo-1540574163026-643ea20ade25",
        "photo-1519710164239-da123dc03ef4",
    ],
    toys: [
        "photo-1558877385-8c1a13583c14",
        "photo-1596461404969-9ae70f2830c1",
        "photo-1584824486539-53bb4646bdbc",
        "photo-1587654780291-39c9404d746b",
        "photo-1618842676088-c4d48a6a7c9d",
    ],
    sports: [
        "photo-1517649763962-0c623066013b",
        "photo-1554284126-aa88f22d8b74",
        "photo-1461896836934-ffe607ba8211",
        "photo-1517836357463-d25dfeac3438",
        "photo-1526506118085-60ce8714f8c5",
    ],
    mobiles: [
        "photo-1511707171634-5f897ff02aa9",
        "photo-1580910051074-3eb694886505",
        "photo-1512054502232-10a0a035d672",
        "photo-1585060544812-6b45742d762f",
        "photo-1533228876829-65c94e7b5025",
    ],
    laptops: [
        "photo-1496181133206-80ce9b88a853",
        "photo-1517336714731-489689fd1ca8",
        "photo-1541807084-5c52b6b3adef",
        "photo-1531297484001-80022131f5a1",
        "photo-1484788984921-03950022c9ef",
    ],
    accessories: [
        "photo-1553062407-98eeb64c6a62",
        "photo-1548036328-c9fa89d128fa",
        "photo-1591561954557-26941169b49e",
        "photo-1590874103328-eac38a683ce7",
        "photo-1584917865442-de89df76afd3",
    ],
    health: [
        "photo-1584308666744-24d5c474f2ae",
        "photo-1550572017-edd951b55104",
        "photo-1559757148-5c350d0d3c56",
        "photo-1505751172876-fa1923c5c528",
        "photo-1571019613454-1cb2f99b2d8b",
    ],
    "pet-supplies": [
        "photo-1583337130417-3346a1be7dee",
        "photo-1548199973-03cce0bbc87b",
        "photo-1450778869180-41d0601e046e",
        "photo-1601758064955-9c88b52c8ac0",
        "photo-1587300003388-59208cc962cb",
    ],
};
const BRANDS = {
    electronics: ["Sonique", "Voltix", "NimbusTech", "PulseWave"],
    fashion: ["Loomly", "NorthKnit", "AtelierM", "Verona"],
    shoes: ["StrideCo", "Trailhaus", "Kicksmith", "Runwell"],
    watches: ["Chronova", "Meridian", "TicToq", "Halcyon"],
    beauty: ["Bloomé", "GlowLab", "Petalia", "Auréa"],
    books: ["Foliant", "Papercrane", "Inkwell", "Kestrel Press"],
    grocery: ["Harvest & Co", "Pantry Row", "Rootline", "Field Basket"],
    "home-kitchen": ["Hearthly", "Copperpot", "Nordwood", "Kitchenary"],
    furniture: ["Oakhaus", "Formely", "Lumen Living", "Sable Studio"],
    toys: ["Playtoft", "Wonderworks", "Tinytown", "BrickJoy"],
    sports: ["Peakforge", "Kineticz", "Halfcourt", "Ridgeline"],
    mobiles: ["Nexora", "Fonique", "Aurabit", "Pixelo"],
    laptops: ["Cortexa", "Bitforge", "Slateworks", "Neurolab"],
    accessories: ["Carryall", "Threadbind", "Loop&Co", "Nomadix"],
    health: ["Vitalis", "Nourivo", "Zenroot", "Purelab"],
    "pet-supplies": ["Paws&Co", "Furrio", "Nuzzle", "Barkham"],
};
const NAMES = {
    electronics: ["Wireless Earbuds Pro", "Smart Speaker Mini", "4K Action Camera", "Noise-Cancel Headphones", "Portable Projector", "Bluetooth Turntable"],
    fashion: ["Merino Overshirt", "Linen Trousers", "Oversized Trench", "Signature Denim", "Silk Scarf", "Ribbed Knit Sweater"],
    shoes: ["Trail Runner 02", "Everyday Sneaker", "Suede Chelsea Boot", "Studio Loafer", "Court Classic", "Alpine Hiker"],
    watches: ["Field Watch 38", "Chrono Diver", "Minimalist Auto", "Vintage Square", "Sports GMT"],
    beauty: ["Hydra-Bloom Serum", "Velvet Lip Butter", "Silk Cleansing Balm", "Petal Mist Toner", "Radiance Eye Cream"],
    books: ["The Golden Hour", "Atlas of Small Places", "Wildflower Almanac", "Letters from Nowhere", "A Quiet Craft"],
    grocery: ["Wildflower Honey Jar", "Cold-Pressed Olive Oil", "Heirloom Pasta", "Single-Origin Coffee", "Stone-Ground Flour"],
    "home-kitchen": ["Enamel Dutch Oven", "Copper Kettle", "Cedar Cutting Board", "Ceramic Dinner Set", "French Press"],
    furniture: ["Nordic Lounge Chair", "Oak Coffee Table", "Bouclé Ottoman", "Slatted Bookcase", "Linen Headboard"],
    toys: ["Wooden Building Set", "Plush Bee Family", "Marble Run Grand", "Storybook Puzzle", "Art Studio Kit"],
    sports: ["Yoga Mat Studio", "Trail Backpack 24L", "Cork Foam Roller", "Bamboo Bottle 1L", "Resistance Band Set"],
    mobiles: ["Nexora X12 Pro", "Fonique Air", "Aurabit Fold", "Pixelo Note 9", "Nexora Lite 6"],
    laptops: ["Cortexa Book 14", "Bitforge Studio 15", "Slateworks Air 13", "Neurolab Pro 16", "Cortexa Flex 2-in-1"],
    accessories: ["Everyday Tote", "Weekender Duffel", "Woven Belt", "Leather Card Wallet", "Canvas Cap"],
    health: ["Sleep Support Drops", "Daily Multivitamin", "Magnesium Glycinate", "Immunity Elixir", "Collagen Peptides"],
    "pet-supplies": ["Braided Rope Toy", "Cozy Cave Bed", "Grain-Free Kibble", "Slow Feeder Bowl", "Reflective Harness"],
};
const COLORS = ["Honey", "Charcoal", "Ivory", "Sage", "Terracotta", "Midnight", "Blush"];
const SIZES_APPAREL = ["XS", "S", "M", "L", "XL"];
const SIZES_SHOES = ["6", "7", "8", "9", "10", "11", "12"];
function pick(arr, i) { return arr[i % arr.length]; }
function rand(seed, min, max) {
    const x = Math.sin(seed) * 10000;
    return min + Math.floor((x - Math.floor(x)) * (max - min + 1));
}
function makeProducts() {
    const list = [];
    let id = 1;
    for (const cat of CATEGORIES) {
        const photos = PHOTOS[cat.slug];
        const brands = BRANDS[cat.slug];
        const names = NAMES[cat.slug];
        const count = 7; // ~112 total
        for (let i = 0; i < count; i++) {
            const brand = pick(brands, i);
            const name = pick(names, i);
            const seed = id * 31;
            const price = rand(seed, 15, 899) + 0.99;
            const discount = rand(seed + 1, 0, 45);
            const rating = 3.5 + (rand(seed + 2, 0, 15) / 10);
            const reviewCount = rand(seed + 3, 12, 2400);
            const stock = rand(seed + 4, 0, 120);
            const images = [pick(photos, i), pick(photos, i + 1), pick(photos, i + 2), pick(photos, i + 3)].map((p) => img(p));
            const sizes = cat.slug === "shoes" ? SIZES_SHOES : ["fashion"].includes(cat.slug) ? SIZES_APPAREL : undefined;
            const colors = COLORS.slice(0, 3 + (i % 3));
            const tags = [];
            if (i === 0)
                tags.push("flash");
            if (i === 1)
                tags.push("trending");
            if (i === 2)
                tags.push("new");
            if (i === 3)
                tags.push("best");
            if (discount > 30)
                tags.push("flash");
            list.push({
                id: `p-${id}`,
                name: `${brand} ${name}`,
                brand,
                category: cat.slug,
                description: `The ${brand} ${name} blends everyday craft with a refined finish. Designed for people who care about the small details, it's built to last and finished with a touch of warmth.`,
                features: [
                    "Premium sustainable materials",
                    "Independently tested for durability",
                    "1-year BuyBee guarantee",
                    "Free carbon-neutral shipping over $49",
                ],
                price: Math.round(price * 100) / 100,
                discount,
                rating: Math.round(rating * 10) / 10,
                reviewCount,
                stock,
                colors,
                sizes,
                images,
                specs: {
                    Brand: brand,
                    Category: cat.name,
                    Material: pick(["Recycled cotton", "Aluminum + glass", "Full-grain leather", "Bamboo composite", "Merino wool"], i),
                    Warranty: "12 months",
                    Origin: pick(["Portugal", "Italy", "Japan", "USA", "Vietnam"], i),
                },
                tags,
            });
            id++;
        }
    }
    return list;
}
export const PRODUCTS = makeProducts();
export function getProduct(id) {
    return PRODUCTS.find((p) => p.id === id);
}
export function byCategory(slug) {
    return PRODUCTS.filter((p) => p.category === slug);
}
export function byTag(tag) {
    return PRODUCTS.filter((p) => p.tags?.includes(tag));
}
export function finalPrice(p) {
    return Math.round(p.price * (1 - p.discount / 100) * 100) / 100;
}
