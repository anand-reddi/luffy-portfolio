import {
  PersonalInfo,
  Project,
  SideProject,
  SocialLink,
  NavItem,
  Skill,
} from "./types";
// Updated icon imports: Added GithubIcon, removed TwitterIcon, DribbbleIcon
// Added icons for skills
// Removed FiTerminal, FiCheckSquare, FiImage as they are aliased or not directly exported.
// CommandLineIcon (FiTerminal), CheckBadgeIcon (FiCheckCircle, used as FiCheckSquare), PuzzlePieceIcon (FiImage) are already imported.
import {
  HomeIcon,
  UserIcon,
  Squares2X2Icon,
  ShoppingBagIcon,
  CpuChipIcon,
  PaintBrushIcon,
  RocketLaunchIcon,
  PuzzlePieceIcon,
  PencilIcon,
  CheckBadgeIcon,
  ServerStackIcon,
  LinkedinIcon,
  InstagramIcon,
  GithubIcon,
  FiShield,
  FiWind,
  FiCoffee,
  FiHexagon,
  FiRefreshCw,
  FiFeather,
  DocumentDuplicateIcon,
} from "./components/icons";

// Import assets properly for Vite to process them
// import vaLogoCircle from "./assets/";
// import vickeyAppsProject from "./assets/";
// import superbScorerLogo from "./assets/";
// import superbScorer from "./assets/";
// import oohoFav from "./assets/";
// import oohoProject from "./assets/";
// import oohoLogin from "./assets/";

// TODO: Replace with your own Web3Forms Access Key
// You can get one for free at https://web3forms.com/
export const WEB3FORMS_ACCESS_KEY = ""; // TODO: Replace with your own Web3Forms Access Key

/** Template author credit in the footer (clickable) */
export const DEVELOPER_CREDIT = {
  name: "Anand Krishna",
  animatedNameEnglish: "Krishna",
  animatedNameJapanese: "クリシュナ",
  url: "https://instagram.com/krishhnahere",
};

/**
 * Visitor count shown on the home hero.
 *
 * Default: STATIC demo number (no Firebase / no personal data needed).
 * Live count: set enableLiveCount to true AND add your own Firebase keys in .env
 * (see VISITOR_COUNTER_SETUP.md).
 */
export const VISITOR_STATS = {
  /** Shown when live Firebase counting is off or not configured */
  staticCount: 10000800,
  /**
   * false = always show staticCount (recommended for the open-source template)
   * true  = use your own Firebase Firestore counter when .env is filled in
   */
  enableLiveCount: false,
};

export const PERSONAL_INFO: PersonalInfo = {
  name: "Monkey D. Luffy",
  title: "Future Pirate King",
  bio: "Captain of the Straw Hat Pirates, adventurer, and lover of meat. Sailing the Grand Line in search of the One Piece!",
  imageUrl:
    "https://i.pinimg.com/736x/17/f8/9a/17f89aeae95b7293d61dfd79c102cbc7.jpg", // Luffy's anime portrait
  email: "luffy@strawhats.com",
  githubUsername: "octocat",
  // Text rotating around the profile photo on the home page
  circularText: "MONKEY D. LUFFY • PIRATE KING • STRAW HAT • ",
  // Gap between letters on the circular text (try "0.5em", "0.9em", "1.2em")
  circularTextLetterSpacing: "0.9em",
  // Name swap animation (home hero, About "It's Me", footer only)
  animatedNameEnglish: "Luffy",
  animatedNameJapanese: "ルフィ",
  // Opening intro animation (full-screen splash before the site)
  introLetter1: "L",
  introLetter2: "U",
  introTagline: "Pirate • Dream Chaser",
  aboutMeIntro:
    "Hi! I'm Monkey D. Luffy, captain of the Straw Hat Pirates and future King of the Pirates! I love adventure, my friends, and especially meat. I ate the Gum-Gum Devil Fruit, so my body stretches like rubber! I'm sailing the Grand Line with my amazing crew, searching for the legendary One Piece treasure. I believe in freedom, friendship, and never giving up on your dreams. If you want to join my crew, you better have a dream and be ready for the adventure of a lifetime! Shishishi!",
  aboutMeDetailed: [
    "Luffy set sail from Foosha Village to find the legendary treasure, One Piece. Along the way, he gathered a loyal crew, defeated powerful enemies, and made friends all over the world.",
    "When not fighting Marines or rival pirates, Luffy enjoys eating, napping, and having fun with his crew. He believes in freedom, friendship, and never giving up on his dreams!",
    "Luffy possesses the power of the Gum-Gum Fruit, making his body stretch like rubber. He's also mastered all three types of Haki, making him one of the most formidable pirates on the seas.",
    "He has a knack for turning enemies into allies, inspiring others with his unwavering spirit and simple honesty.",
    "Luffy has a bounty that keeps rising, currently one of the highest in the world, and is recognized as one of the Worst Generation.",
    "He has led the Straw Hat Pirates through legendary battles at places like Alabasta, Enies Lobby, Marineford, Dressrosa, Whole Cake Island, and Wano.",
    "Luffy's dream is not just to find the One Piece, but to live a life of complete freedom and help his friends achieve their dreams too.",
    "Favorite foods: Meat (all kinds), fish, and anything Sanji cooks!",
    "Famous catchphrases: 'I'm gonna be King of the Pirates!' and 'I want to eat meat!'",
  ],
  aboutPageImageUrl:
    "https://i.pinimg.com/736x/2c/e0/6b/2ce06b2cd9ab54ccb23f4f50359b6acc.jpg", // Luffy's anime portrait
  projectsPageIntro:
    "Check out my greatest adventures and pirate achievements! Each project brought me closer to my dream of becoming Pirate King.",
  sideProjectsPageIntro:
    "Some of the wild side quests and inventions my crew and I have tackled on our journey!",
  productsPageIntro:
    "Explore the unique gadgets, ships, and treasures we've collected or built during our adventures!",
  hireMePageTitle: "Join My Crew!",
  hireMePageSubtitle:
    "Got a dream? Want to sail the Grand Line? Send me a message and maybe you can join the Straw Hat Pirates!",
};

export const NAV_ITEMS_MAIN: NavItem[] = [
  { id: "home", name: "Home", href: "#home", icon: HomeIcon },
  { id: "about", name: "About", href: "#about", icon: UserIcon },
  {
    id: "projects",
    name: "Projects",
    href: "#projects-page",
    icon: Squares2X2Icon,
  },
  {
    id: "products",
    name: "Products",
    href: "#products-page",
    icon: ShoppingBagIcon,
  }, // New Products Nav Item
];

export const PROJECTS: Project[] = [
  {
    id: "project-going-merry",
    iconComponent: RocketLaunchIcon,
    iconBgColor: "bg-yellow-500 dark:bg-yellow-600",
    name: "Going Merry Ship Upgrade",
    description:
      "Major upgrades and repairs to the Straw Hats' first pirate ship, the Going Merry.",
    technologies: [
      "Woodworking",
      "Engineering",
      "Friendship",
      "Sniper King Magic",
    ],
    cardImageUrl:
      "https://preview.redd.it/going-merry-or-thousand-sunny-v0-zwgzn343tqzb1.jpg?width=562&format=pjpg&auto=webp&s=e9ecd2766cd1fd9953efae2622abad1abd1c5f8d",
    logoImageUrl:
      "https://preview.redd.it/going-merry-or-thousand-sunny-v0-zwgzn343tqzb1.jpg?width=562&format=pjpg&auto=webp&s=e9ecd2766cd1fd9953efae2622abad1abd1c5f8d",
    client: "Straw Hat Pirates",
    company: "Water 7 Shipwrights",
    projectType: "Ship Repair, Adventure",
    year: "Grand Line Era",
    tagline:
      "The Going Merry carried us through countless adventures. She was more than a ship—she was our friend!",
    overview:
      "After many battles and storms, the Going Merry needed serious repairs. With the help of the Water 7 shipwrights (and Usopp's determination), we gave her one last epic journey.",
    liveLink: "https://onepiece.fandom.com/wiki/Going_Merry",
    images: [
      "https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/12/67a971cb-baf1-4821-8e0e-f6a221e77f6d.jpeg",
    ],
    problemStatement: {
      title: "Ship in Trouble!",
      description:
        "Our beloved ship was falling apart after so many adventures. We needed to fix her or risk losing our way to the Grand Line!",
    },
  },
  {
    id: "project-meat-inventory",
    iconComponent: ShoppingBagIcon,
    iconBgColor: "bg-red-500 dark:bg-red-600",
    name: "Meat Inventory App",
    description:
      "A handy app to track all the meat supplies on the Thousand Sunny.",
    technologies: ["React", "Meat Tracking", "Sanji's Recipes", "QR Code"],
    cardImageUrl:
      "https://preview.redd.it/if-sanji-tells-you-that-he-will-cook-any-dish-for-you-that-v0-txrdpkzu2fqb1.jpg?auto=webp&s=3cecbad31936393ee734a95dab67cfe30d77cb94",
    logoImageUrl:
      "https://preview.redd.it/if-sanji-tells-you-that-he-will-cook-any-dish-for-you-that-v0-txrdpkzu2fqb1.jpg?auto=webp&s=3cecbad31936393ee734a95dab67cfe30d77cb94",
    client: "Luffy (for Sanji)",
    company: "Straw Hat Pirates",
    projectType: "Food Management, App",
    year: "Grand Line Era",
    tagline: "Never run out of meat again!",
    overview:
      "Sanji was tired of Luffy eating all the meat, so we built an app to keep track of supplies. Now, everyone gets their fair share (except when I get hungry).",
    liveLink: "https://onepiece.fandom.com/wiki/Sanji",
    images: [
      "https://i.pinimg.com/736x/23/5f/15/235f15beabf134c30e3dc437a22ec884.jpg",
    ],
    problemStatement: {
      title: "Where's the Meat?",
      description:
        "Meat kept disappearing from the kitchen. We needed a way to track it and keep Luffy honest!",
    },
  },
  {
    id: "project-crew-recruitment",
    iconComponent: UserIcon,
    iconBgColor: "bg-blue-600 dark:bg-blue-700",
    name: "Pirate Crew Recruitment Portal",
    description:
      "A portal for recruiting new Straw Hat Pirates with big dreams.",
    technologies: [
      "React",
      "Dream Detection",
      "Wanted Posters",
      "Grand Line Map",
    ],
    cardImageUrl:
      "https://logowik.com/content/uploads/images/straw-hat-pirates3177.logowik.com.webp",
    logoImageUrl:
      "https://logowik.com/content/uploads/images/straw-hat-pirates3177.logowik.com.webp",
    client: "Monkey D. Luffy",
    company: "Straw Hat Pirates",
    projectType: "Recruitment, Adventure",
    year: "Grand Line Era",
    tagline: "Got a dream? Join my crew!",
    overview:
      "We needed more nakama for our journey. This portal lets dreamers from all over the world apply to join the Straw Hat Pirates. Only those with true spirit make the cut!",
    liveLink: "https://onepiece.fandom.com/wiki/Straw_Hat_Pirates",
    images: [
      "https://i.pinimg.com/736x/dc/e6/72/dce67240d40184611e1ee2d301b6d9ab.jpg",
    ],
    problemStatement: {
      title: "Need More Nakama!",
      description:
        "The Grand Line is tough. We need strong, loyal friends to help us reach the end!",
    },
  },
  {
    id: "project-grand-line-map",
    iconComponent: ServerStackIcon,
    iconBgColor: "bg-green-600 dark:bg-green-700",
    name: "Grand Line Navigation System",
    description:
      "A high-tech map and log pose tracker for navigating the Grand Line.",
    technologies: [
      "Log Pose",
      "Weather Science",
      "Nami's Cartography",
      "React",
    ],
    cardImageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/3/39/Onepiece-welt_(2).png",
    logoImageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/3/39/Onepiece-welt_(2).png",
    client: "Nami",
    company: "Straw Hat Pirates",
    projectType: "Navigation, Mapping",
    year: "Grand Line Era",
    tagline: "Never get lost again! (Unless Luffy's steering)",
    overview:
      "Nami built a navigation system to help us survive the Grand Line's crazy weather and islands. Now we only get lost when Luffy ignores her directions!",
    liveLink: "https://onepiece.fandom.com/wiki/Nami",
    images: [
      "https://preview.redd.it/one-piece-world-map-v0-phf7wbld54zc1.jpeg?width=1080&crop=smart&auto=webp&s=540c62ca48e64cade0d16c251b1e46d6ebe3197c",
    ],
    problemStatement: {
      title: "Lost at Sea",
      description:
        "The Grand Line is full of surprises. We needed a way to track our journey and avoid danger!",
    },
  },
];

export const SIDE_PROJECTS: SideProject[] = [
  {
    id: "side-1",
    iconComponent: PaintBrushIcon,
    iconBgColor: "bg-pink-500 dark:bg-pink-600",
    name: "Wanted Poster Generator",
    tag: "OPEN SOURCE",
    link: "#",
    linkText: "Try Now",
    description:
      "Create your own pirate wanted poster! Upload a photo and get your bounty.",
    cardImageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcRNIzKewfHkPM_RztQBv_NA4JyRlgVi6cgA&s",
    year: "2024",
    projectType: "Web App",
    tagline: "Make yourself look dangerous — even if you just ate meat.",
    overview:
      "A fun demo product page showing how side projects can open a full details view in this portfolio template.",
    technologies: ["React", "Canvas", "Typography"],
    keyFeatures: [
      "Upload a face and generate a poster",
      "Customize bounty text",
      "Export as image",
    ],
  },
  {
    id: "side-2",
    iconComponent: CpuChipIcon,
    iconBgColor: "bg-teal-500 dark:bg-teal-600",
    name: "Devil Fruit Encyclopedia",
    tag: "LIVE DEMO",
    link: "#",
    linkText: "Explore",
    description:
      "Browse all known Devil Fruits and their powers. Beware of side effects!",
    cardImageUrl:
      "https://static.vecteezy.com/system/resources/previews/046/805/836/non_2x/devil-fruits-gomu-gomu-no-monkey-d-luffy-one-piece-free-png.png",
    year: "2025",
    projectType: "Web App",
    tagline: "Know every fruit before you bite it.",
    overview: "Example product with richer metadata for the details page.",
    technologies: ["React", "Search", "Content"],
  },
  {
    id: "side-3",
    iconComponent: PencilIcon,
    iconBgColor: "bg-yellow-500 dark:bg-yellow-600",
    name: "Zoro's Sword Tracker",
    tag: "Live on Play Store",
    playStoreStats: {
      downloads: "1K+",
      rating: "4.5",
    },
    link: "#",
    linkText: "Play Store",
    description: "Keep track of all swords Zoro has owned (and lost).",
    cardImageUrl:
      "https://image.made-in-china.com/202f0j00wtkMBPJAMEqi/104cm-Roronoa-Zoro-Carbon-Steel-One-Piece-Anime-Cartoon-Cosplay-Sword-Purple.webp",
    year: "2026",
    projectType: "Android App",
    tagline: "Never lose a sword again (or do, and still track it).",
    overview:
      "Demo of Play Store metrics badges (downloads + average rating) on product cards and detail pages.",
    technologies: ["Android", "Flutter"],
    keyFeatures: [
      "Log every sword in the collection",
      "Mark lost / found status",
      "Share bounty-ready screenshots",
    ],
  },
  {
    id: "side-4",
    iconComponent: PuzzlePieceIcon,
    iconBgColor: "bg-indigo-500 dark:bg-indigo-600",
    name: "Chopper's Medical Kit",
    tag: "HOBBY PROJECT",
    link: "#",
    linkText: "View Kit",
    description:
      "A digital guide to Chopper's favorite remedies and medicines.",
    cardImageUrl: "https://s1.zerochan.net/Tony.Tony.Chopper.600.2356091.jpg",
    year: "2023",
    projectType: "Web Tool",
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "Instagram",
    url: "https://instagram.com/monkeydluffy",
    icon: InstagramIcon,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/",
    icon: LinkedinIcon,
  },
  { name: "GitHub", url: "https://github.com/", icon: GithubIcon },
];

export const SKILLS: Skill[] = [
  {
    name: "Gum-Gum Powers",
    backgroundColor: "bg-yellow-400",
    textColor: "text-black",
    icon: FiRefreshCw, // reuse React icon for stretching
  },
  {
    name: "Haki",
    backgroundColor: "bg-indigo-700",
    textColor: "text-white",
    icon: FiShield, // shield for protection
  },
  {
    name: "Navigation",
    backgroundColor: "bg-blue-500",
    textColor: "text-white",
    icon: FiWind, // wind for sailing
  },
  {
    name: "Swordsmanship",
    backgroundColor: "bg-green-600",
    textColor: "text-white",
    icon: PencilIcon, // pencil as a sword (closest match)
  },
  {
    name: "Cooking",
    backgroundColor: "bg-red-500",
    textColor: "text-white",
    icon: FiCoffee, // coffee for food
  },
  {
    name: "Medical Skills",
    backgroundColor: "bg-pink-400",
    textColor: "text-white",
    icon: PuzzlePieceIcon, // puzzle for Chopper's medical kit
  },
  {
    name: "Sniping",
    backgroundColor: "bg-yellow-500",
    textColor: "text-black",
    icon: DocumentDuplicateIcon, // document icon for Usopp
  },
  {
    name: "Shipwright",
    backgroundColor: "bg-blue-700",
    textColor: "text-white",
    icon: ServerStackIcon, // server stack for building
  },
  {
    name: "Archaeology",
    backgroundColor: "bg-purple-500",
    textColor: "text-white",
    icon: DocumentDuplicateIcon, // document icon for Robin
  },
  {
    name: "Music",
    backgroundColor: "bg-indigo-500",
    textColor: "text-white",
    icon: FiFeather, // feather for music (closest match)
  },
  {
    name: "Fishman Karate",
    backgroundColor: "bg-teal-500",
    textColor: "text-white",
    icon: FiHexagon, // hexagon for Jinbe
  },
  {
    name: "Dream Chasing",
    backgroundColor: "bg-orange-400",
    textColor: "text-white",
    icon: RocketLaunchIcon, // rocket for dreams
  },
  {
    name: "Meat Eating",
    backgroundColor: "bg-red-600",
    textColor: "text-white",
    icon: ShoppingBagIcon, // shopping bag for food
  },
  {
    name: "Friendship",
    backgroundColor: "bg-green-400",
    textColor: "text-white",
    icon: CheckBadgeIcon, // badge for friendship
  },
];
