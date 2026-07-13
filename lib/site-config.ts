export const site = {
  name: "Mistora Estate Villa",
  tagline: "A private estate in the coffee hills of Coorg",
  location: "Suntikoppa, Coorg (Kodagu), Karnataka, India",
  domain: "https://www.mistoraestatevilla.com",
  host: "Nahim",
  phone: "+91 8073713857",
  phoneHref: "+918073713857",
  email: "Nahimsh22@gmail.com",
  whatsappBase: "https://wa.me/918073713857",
};

export const whatsappLink = (text: string) =>
  `${site.whatsappBase}?text=${encodeURIComponent(text)}`;

export const navLinks = [
  { label: "The Villa", href: "#villa" },
  { label: "Experiences", href: "#experiences" },
  { label: "Amenities", href: "#amenities" },
  { label: "Gallery", href: "#gallery" },
  { label: "Nearby", href: "#nearby" },
  { label: "Location", href: "#location" },
  { label: "Enquire", href: "#enquire" },
];

export const villaRows = [
  {
    id: "estate",
    eyebrow: "The Estate",
    title: "A whole villa, entirely yours",
    copy: "Set among coffee and spice plantations in Suntikoppa, Mistora is not a room in a resort — it is a private estate, taken in full. One party, one villa, one quiet corner of Coorg for the length of your stay.",
    image: "/images/villa.jpg",
    alt: "Mistora Estate Villa exterior with private pool at dusk",
  },
  {
    id: "rest",
    eyebrow: "The Rooms",
    title: "Restful, considered, unhurried",
    copy: "Each bedroom is dressed in warm wood and soft linen, built for long, unhurried mornings. Wardrobes carved in local teak, marble underfoot, and windows that open onto green.",
    image: "/images/bedroom1.jpg",
    alt: "Master bedroom with warm wooden furnishings at Mistora Estate Villa",
  },
  {
    id: "gather",
    eyebrow: "The Living Room",
    title: "Space to gather, or to disappear",
    copy: "A living room built for shared evenings — and quiet corners for those who'd rather read. The estate holds both without asking you to choose.",
    image: "/images/livingroom.jpg",
    alt: "Living room with sofas at Mistora Estate Villa",
  },
  {
    id: "together",
    eyebrow: "For Groups & Families",
    title: "Built to hold everyone, comfortably",
    copy: "Multiple bedrooms, shared verandas, and a garden that doesn't feel crowded even when the whole family is home. Mistora scales quietly from a couple's retreat to a full reunion.",
    image: "/images/family-suite.jpg",
    alt: "Family suite with twin beds and private balcony at Mistora Estate Villa",
  },
];

export const experiences = [
  {
    id: "pool",
    title: "The Pool",
    copy: "A private pool set against the estate's greenery, held for you alone.",
    image: "/images/pool.jpg",
    alt: "Private swimming pool at Mistora Estate Villa",
  },
  {
    id: "walks",
    title: "Coffee Estate Walks",
    copy: "Wander the plantation paths at first light, coffee cherries overhead.",
    image: "/images/pathway.jpg",
    alt: "Lit pathway through the coffee estate at Mistora Estate Villa",
  },
  {
    id: "dining",
    title: "Private Dining",
    copy: "Home-cooked Coorg cuisine, served under the veranda as evening falls.",
    image: "/images/outdoor-dining.jpg",
    alt: "Private outdoor dining area at Mistora Estate Villa",
  },
  {
    id: "bonfire",
    title: "Bonfire Evenings",
    copy: "Stories, quiet, and a fire lit against the hill air after dark.",
    image: "/images/campfire.svg",
    alt: "Evening bonfire setup at Mistora Estate Villa",
  },
];

export const amenities = [
  { label: "Private Villa", icon: "villa" },
  { label: "Swimming Pool", icon: "pool" },
  { label: "Estate View", icon: "estate-view" },
  { label: "Free Parking", icon: "parking" },
  { label: "High-Speed Wi-Fi", icon: "wifi" },
  { label: "Home-Cooked Food", icon: "food" },
  { label: "Campfire", icon: "campfire" },
  { label: "BBQ Area", icon: "bbq" },
  { label: "Garden", icon: "garden" },
  { label: "Balcony", icon: "balcony" },
  { label: "Family Friendly", icon: "family" },
  { label: "Group Stay", icon: "group" },
  { label: "Power Backup", icon: "power" },
  { label: "Hot Water", icon: "hot-water" },
  { label: "24×7 Support", icon: "support" },
  { label: "Outdoor Seating", icon: "outdoor-seating" },
];

export const whyStay = [
  { num: "01", title: "Scenic Estate Location", copy: "Surrounded by coffee plantations and rolling hills, every window frames a postcard view." },
  { num: "02", title: "Peaceful Atmosphere", copy: "No traffic, no noise — just birdsong, breeze, and the calm of the estate." },
  { num: "03", title: "Clean & Comfortable Rooms", copy: "Thoughtfully maintained interiors with cosy beds and modern comforts." },
  { num: "04", title: "Friendly Hospitality", copy: "Nahim and the team treat every guest like family, not a booking number." },
  { num: "05", title: "Perfect for Families", copy: "Spacious layouts and a safe, green environment for kids to explore." },
  { num: "06", title: "Great for Group Trips", copy: "Multiple rooms and shared spaces built for celebrations and reunions." },
  { num: "07", title: "Memorable Experiences", copy: "Campfires, home-cooked meals, and quiet mornings you'll want to repeat." },
  { num: "08", title: "Value for Money", copy: "Boutique comfort at a price that respects your travel budget." },
];

export const galleryImages = [
  { src: "/images/villa.jpg", alt: "Mistora Estate Villa exterior with private pool", caption: "The Villa" },
  { src: "/images/bedroom1.jpg", alt: "Master bedroom with warm, comfortable furnishings", caption: "Master Bedroom" },
  { src: "/images/livingroom.jpg", alt: "Spacious living room with sofas and TV", caption: "Living Room" },
  { src: "/images/garden.svg", alt: "Lush private garden within the estate", caption: "The Garden" },
  { src: "/images/bedroom2.jpg", alt: "Twin bedroom with warm wooden furnishings", caption: "Twin Bedroom" },
  { src: "/images/campfire.svg", alt: "Evening campfire setup for guests", caption: "Campfire Evenings" },
  { src: "/images/food.svg", alt: "Home-cooked authentic Coorg cuisine", caption: "Home-Cooked Coorg Cuisine" },
  { src: "/images/view.jpg", alt: "Estate grounds overlooking the swimming pool and cottages", caption: "The Estate Grounds" },
  { src: "/images/sunrise.svg", alt: "Sunrise over the Coorg hills", caption: "Coorg Sunrise" },
  { src: "/images/pool.jpg", alt: "Private swimming pool at Mistora Estate Villa", caption: "The Pool" },
  { src: "/images/dusk.jpg", alt: "Mistora Estate Villa's cottages and pool at dusk", caption: "The Estate at Dusk" },
  { src: "/images/pathway.jpg", alt: "Lit garden pathway leading through the estate at night", caption: "Evening Pathway" },
  { src: "/images/driveway.jpg", alt: "Villa entrance with driveway, parking and flowering plants", caption: "Driveway & Parking" },
  { src: "/images/family-suite.jpg", alt: "Family suite with twin beds, sofa and private balcony", caption: "Family Suite" },
  { src: "/images/suite-lounge.jpg", alt: "Bedroom suite with a private sitting area", caption: "Suite with Sitting Area" },
  { src: "/images/bedroom3.jpg", alt: "Guest bedroom with wooden wardrobe", caption: "Guest Bedroom" },
  { src: "/images/bedroom4.jpg", alt: "Deluxe bedroom with leather headboard", caption: "Deluxe Bedroom" },
  { src: "/images/outdoor-dining.jpg", alt: "Outdoor dining area on the porch lit up in the evening", caption: "Alfresco Evenings" },
];

export const nearbyAttractions = [
  { name: "Abbey Falls", copy: "A cascading waterfall framed by spice and coffee plantations, especially breathtaking after the monsoon.", image: "/images/abbeyfalls.svg" },
  { name: "Raja's Seat", copy: "A garden viewpoint famous for its sweeping sunset views over the valley.", image: "/images/rajaseat.svg" },
  { name: "Dubare Elephant Camp", copy: "Meet, feed and bathe with gentle elephants on the banks of the River Kaveri.", image: "/images/dubare.svg" },
  { name: "Golden Temple (Namdroling Monastery)", copy: "A vibrant Tibetan monastery with golden statues, prayer wheels and peaceful courtyards.", image: "/images/goldentemple.svg" },
  { name: "Mandalpatti", copy: "A rugged viewpoint offering panoramic views of mist-covered peaks — best reached by jeep.", image: "/images/mandalpatti.svg" },
  { name: "Nisargadhama", copy: "A forested river island with bamboo groves, hanging bridges and a deer park.", image: "/images/nisargadhama.svg" },
  { name: "Coffee Plantations", copy: "Guided walks through fragrant coffee and spice estates, right in Mistora's neighbourhood.", image: "/images/coffeeplantation.svg" },
];

export const testimonials = [
  { quote: "We booked Mistora for a long weekend and it exceeded every expectation. The villa was spotless, the balcony view was unreal, and Nahim made check-in so easy over WhatsApp.", name: "Ananya & Rohit Sharma", place: "Bengaluru", rating: 5 },
  { quote: "The campfire evening with home-cooked Coorg food was the highlight of our trip. Our kids loved the garden and we loved the quiet. Already planning our next visit.", name: "The Devaraj Family", place: "Chennai", rating: 5 },
  { quote: "Beautifully maintained property with a genuinely peaceful setting. Communication with Nahim before and during the stay was quick and friendly throughout.", name: "Priya Nair", place: "Kochi", rating: 4.5 },
  { quote: "Went with a big group of friends and there was room for everyone. The BBQ set up in the garden made for the best evening of our trip. Highly recommend for group stays.", name: "Arjun & Friends", place: "Mumbai", rating: 5 },
  { quote: "Exactly what we needed after a stressful few months at work — misty mornings, quiet afternoons, and the friendliest host. Mistora feels like a well-kept secret.", name: "Kavya Reddy", place: "Hyderabad", rating: 5 },
  { quote: "Loved the little details — hot water, good Wi-Fi for our work calls, and a garden that made mornings so peaceful. Great value for what you get.", name: "Meera Iyer", place: "Bengaluru", rating: 4.5 },
];
