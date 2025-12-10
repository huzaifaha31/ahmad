import { Remedy } from './types';

export const APP_NAME = "Malay Medical Manuscript Exploration";

// ==========================================
// CHANGE WEBSITE IMAGES HERE
// ==========================================

// 1. The main big image on the home page
export const HERO_IMAGE_URL = 'https://images.unsplash.com/photo-1461360370896-922624d12aa1?auto=format&fit=crop&w=800&q=80';

// 2. The background texture pattern
export const BACKGROUND_PATTERN_URL = 'https://www.transparenttextures.com/patterns/cream-paper.png';

// 3. Team Member Images (You can replace these URLs with actual photo links)
export const TEAM_MEMBERS = [
  {
    name: "Assoc. Prof. Dr. Nurulwahidah Fauzi",
    role: "Supervisor",
    // Placeholder image
    imageUrl: "https://huzaitx.wordpress.com/wp-content/uploads/2025/12/1-1.png?w=1440" 
  },
  {
    name: "Ahmad Huzaifah Seri Buana",
    role: "Website Developer and Researcher",
    imageUrl: "https://huzaitx.wordpress.com/wp-content/uploads/2025/12/5-1.png?w=1440"
  },
  {
    name: "Fakhriatul Ainnuha Hussin",
    role: "Researcher, Translator, Data Manager",
    imageUrl: "https://huzaitx.wordpress.com/wp-content/uploads/2025/12/2-1.png?w=1440"
  },
  {
    name: "Intan Nur Sakinah Mohd Nor",
    role: "Researcher, Translator, Data Manager",
    imageUrl: "https://huzaitx.wordpress.com/wp-content/uploads/2025/12/3-1.png?w=1440"
  },
  {
    name: "Nurul 'Asyirah Shamsuddin",
    role: "Researcher, Translator, Data Manager",
    imageUrl: "https://huzaitx.wordpress.com/wp-content/uploads/2025/12/4-1.png?w=1440"
  }
];

// 4. Images for specific remedies
export const REMEDIES: Remedy[] = [
  {
    id: '1',
    diseaseName: 'Demam Kepialu (Typhoid Fever)',
    category: 'Fever',
    symptoms: 'High fever, headache, weakness, and stomach pain.',
    ingredients: [
      'Daun Setawar (Costus speciosus)',
      'Akar Cerita (Andrographis paniculata)',
      'Air Tepung Tawar'
    ],
    preparationMethod: 'Grind the leaves and roots together until fine. Mix with fresh rice water (Air Tepung Tawar).',
    methodOfUse: 'Apply the mixture as a cooling paste (bedak sejuk) over the entire body, focusing on the forehead and abdomen.',
    spiritualElements: 'Recite Surah Al-Fatiha 3 times and blow gently onto the mixture before application.',
    sourceManuscript: 'MSS 2999, Kitab Tib',
    imageUrl: 'https://images.unsplash.com/photo-1515543766344-83db25d54d3f?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '2',
    diseaseName: 'Kayap (Shingles)',
    category: 'Skin',
    symptoms: 'Painful rash, blisters wrapping around the torso.',
    ingredients: [
      'Daun Gelenggang (Cassia alata)',
      'Kapur Barus (Camphor)',
      'Minyak Kelapa (Coconut Oil)'
    ],
    preparationMethod: 'Pound the Daun Gelenggang until lumpy. Mix with crushed camphor and coconut oil.',
    methodOfUse: 'Rub gently onto the affected skin area twice a day, morning and evening.',
    spiritualElements: 'Mantra: "Turun bisa, naik tawar, berkat doa La ilaha illallah".',
    sourceManuscript: 'MSS 2999, Kitab Tib',
    imageUrl: 'https://images.unsplash.com/photo-1628102377466-231cb027985a?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '3',
    diseaseName: 'Sakit Kepala (Migraine)',
    category: 'Internal',
    symptoms: 'Throbbing pain on one side of the head, sensitivity to light.',
    ingredients: [
      'Bunga Raya (Hibiscus)',
      'Limau Nipis (Key Lime)',
      'Air Embun (Dew Water)'
    ],
    preparationMethod: 'Crush the hibiscus flowers. Squeeze lime juice over them and leave in a bowl exposed to morning dew.',
    methodOfUse: 'Use the water to wet the head and place the crushed flowers as a poultice on the forehead.',
    spiritualElements: 'Recite Salawat upon the Prophet (PBUH) 7 times.',
    sourceManuscript: 'MSS 2999, Kitab Tib',
    imageUrl: 'https://images.unsplash.com/photo-1565063660384-e4c194514333?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '4',
    diseaseName: 'Batuk Kering (Dry Cough)',
    category: 'Internal',
    symptoms: 'Persistent dry cough, sore throat.',
    ingredients: [
      'Madu Lebah (Honey)',
      'Halia Bara (Red Ginger)',
      'Lada Hitam (Black Pepper)'
    ],
    preparationMethod: 'Extract juice from ginger. Mix with honey and a pinch of crushed black pepper.',
    methodOfUse: 'Drink one tablespoon slowly, three times a day.',
    sourceManuscript: 'MSS 2999, Kitab Tib',
    imageUrl: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '5',
    diseaseName: 'Gangguan Semangat (Spiritual Disturbance)',
    category: 'Spiritual',
    symptoms: 'Restlessness, bad dreams, feeling of heaviness.',
    ingredients: [
      'Limau Purut (Kaffir Lime)',
      'Garam Kasar (Coarse Salt)',
      'Air Kolah Masjid (Mosque Well Water)'
    ],
    preparationMethod: 'Cut the limes into quarters (do not sever completely). Mix salt into the water.',
    methodOfUse: 'Perform a mandi bunga (flower bath) or rinse the body with the mixture just before Maghrib prayers.',
    sourceManuscript: 'MSS 2999, Kitab Tib',
    spiritualElements: 'Recite Ayat Al-Kursi 7 times while preparing the water.',
    imageUrl: 'https://images.unsplash.com/photo-1555449909-082260682859?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '6',
    diseaseName: 'Luka & Kudis (Wounds & Scabies)',
    category: 'Skin',
    symptoms: 'Open wounds or itchy scabs.',
    ingredients: [
      'Kunyit Hidup (Turmeric)',
      'Minyak Bijan (Sesame Oil)'
    ],
    preparationMethod: 'Pound the turmeric into a paste. Heat slightly with sesame oil.',
    methodOfUse: 'Apply directly to the wound while warm.',
    sourceManuscript: 'MSS 2999, Kitab Tib',
    imageUrl: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '7',
    diseaseName: 'Sakit Gigi (Toothache)',
    category: 'Internal',
    symptoms: 'Sharp, throbbing pain in the tooth or jaw.',
    ingredients: [
      'Bunga Cengkih (Clove)',
      'Garam Bukit (Rock Salt)',
      'Bawang Putih (Garlic)'
    ],
    preparationMethod: 'Crush the clove and garlic into a paste. Mix with a pinch of salt.',
    methodOfUse: 'Place the paste directly into the cavity or on the gum of the aching tooth.',
    sourceManuscript: 'MSS 2999, Kitab Tib',
    imageUrl: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '8',
    diseaseName: 'Sakit Perut / Cirit-Birit (Diarrhea)',
    category: 'Internal',
    symptoms: 'Stomach cramping, loose stools.',
    ingredients: [
      'Pucuk Jambu Batu (Guava Shoot)',
      'Garam (Salt)'
    ],
    preparationMethod: 'Boil the guava shoots in water until the water turns brownish. Add a pinch of salt.',
    methodOfUse: 'Drink the decoction while warm.',
    sourceManuscript: 'MSS 2999, Kitab Tib',
    imageUrl: 'https://images.unsplash.com/photo-1598512752271-33f913a5af13?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '9',
    diseaseName: 'Bisul (Boil)',
    category: 'Skin',
    symptoms: 'Painful, pus-filled bump under the skin.',
    ingredients: [
      'Beras (Raw Rice)',
      'Kunyit Hidup (Turmeric)',
      'Bawang Merah (Shallot)'
    ],
    preparationMethod: 'Soak rice, then grind with turmeric and shallot into a thick paste.',
    methodOfUse: 'Apply around the boil (avoiding the "eye" or center) to draw out pus.',
    sourceManuscript: 'MSS 2999, Kitab Tib',
    imageUrl: 'https://images.unsplash.com/photo-1600627225432-69ebeb7d5717?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '10',
    diseaseName: 'Resdung (Sinusitis)',
    category: 'General',
    symptoms: 'Blocked nose, facial pain, frequent sneezing.',
    ingredients: [
      'Limau Nipis (Key Lime)',
      'Daun Pandan (Pandan Leaves)',
      'Bunga Cengkih (Cloves)'
    ],
    preparationMethod: 'Slice limes and pandan leaves. Boil them with cloves.',
    methodOfUse: 'Inhale the steam from the boiling mixture (Wap Resdung) with a towel over the head.',
    sourceManuscript: 'MSS 2999, Kitab Tib',
    imageUrl: 'https://images.unsplash.com/photo-1606923829579-0cb981a83e2e?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '11',
    diseaseName: 'Senggugut (Menstrual Pain)',
    category: 'Internal',
    symptoms: 'Severe cramps in the lower abdomen during menstruation.',
    ingredients: [
      'Halia (Ginger)',
      'Serai (Lemongrass)',
      'Gula Melaka (Palm Sugar)'
    ],
    preparationMethod: 'Boil crushed ginger and lemongrass. Sweeten with palm sugar.',
    methodOfUse: 'Drink warm once a day during the cycle.',
    sourceManuscript: 'MSS 210, Kitab Wanita',
    imageUrl: 'https://images.unsplash.com/photo-1635928187428-c1c4f5536551?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '12',
    diseaseName: 'Sakit Mata (Eye Infection)',
    category: 'General',
    symptoms: 'Red, itchy, or watery eyes.',
    ingredients: [
      'Daun Sirih (Betel Leaf)',
      'Air Suam (Warm Water)'
    ],
    preparationMethod: 'Soak clean betel leaves in warm water for 15 minutes.',
    methodOfUse: 'Use the water to gently rinse the eyes or place the damp leaf over the eyelid.',
    sourceManuscript: 'MSS 15, Obat Mata',
    imageUrl: 'https://images.unsplash.com/photo-1590422749847-7592967dfb63?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '13',
    diseaseName: 'Demam Kura (Intermittent Fever)',
    category: 'Fever',
    symptoms: 'Chills and fever that come and go, enlarged spleen.',
    ingredients: [
      'Akar Tengkuk Biawak',
      'Lada Hitam (Black Pepper)',
      'Bawang Putih (Garlic)'
    ],
    preparationMethod: 'Boil the root with crushed pepper and garlic.',
    methodOfUse: 'Drink the decoction morning and night.',
    spiritualElements: 'Recite "Bismillah ash-Shafi" 7 times.',
    sourceManuscript: 'MSS 55, Kitab Racun & Penawar',
    imageUrl: 'https://images.unsplash.com/photo-1616339031737-128a39a778e3?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '14',
    diseaseName: 'Angin Ahmar (Stroke/Paralysis)',
    category: 'Internal',
    symptoms: 'Sudden numbness, weakness on one side of body.',
    ingredients: [
      'Minyak Zaitun (Olive Oil)',
      'Habbatussauda (Black Seed)',
      'Akar Kayu Manis (Cinnamon Root)'
    ],
    preparationMethod: 'Mix black seed oil with olive oil and crushed cinnamon root.',
    methodOfUse: 'Massage the affected limbs gently upwards.',
    spiritualElements: 'Recite Ayatul Kursi and the 3 Quls continuously during massage.',
    sourceManuscript: 'MSS 90, Tibb Nabawi Melayu',
    imageUrl: 'https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '15',
    diseaseName: 'Bisa Ular & Serangga (Snake/Insect Bite)',
    category: 'Skin',
    symptoms: 'Pain, swelling, and redness at the bite site.',
    ingredients: [
      'Asam Jawa (Tamarind)',
      'Garam (Salt)'
    ],
    preparationMethod: 'Mix tamarind pulp with salt to form a thick paste.',
    methodOfUse: 'Apply directly to the bite area to neutralize toxins.',
    sourceManuscript: 'MSS 33, Penawar Bisa',
    imageUrl: 'https://images.unsplash.com/photo-1606914440660-1250b7193b06?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '16',
    diseaseName: 'Gila Meroyan (Postpartum Depression)',
    category: 'Spiritual',
    symptoms: 'Emotional instability, crying without reason after childbirth.',
    ingredients: [
      'Bunga 7 Jenis (7 Types of Flowers)',
      'Limau Purut (Kaffir Lime)',
      'Air Mawar (Rose Water)'
    ],
    preparationMethod: 'Prepare a flower bath mixture with lime slices and rose water.',
    methodOfUse: 'Bathe at dusk (Asar time) for 3 consecutive days.',
    spiritualElements: 'Chant specific prayers for emotional restoration.',
    sourceManuscript: 'MSS 22, Kitab Beranak',
    imageUrl: 'https://images.unsplash.com/photo-1596707323530-9de1886131c7?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '17',
    diseaseName: 'Sakit Pinggang (Backache)',
    category: 'General',
    symptoms: 'Stiffness or pain in the lower back.',
    ingredients: [
      'Akar Tongkat Ali',
      'Madu (Honey)'
    ],
    preparationMethod: 'Boil the root slices for 1 hour.',
    methodOfUse: 'Drink the water mixed with a spoonful of honey.',
    sourceManuscript: 'MSS 11, Rahsia Lelaki',
    imageUrl: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '18',
    diseaseName: 'Sawan Tangis (Excessive Crying in Infants)',
    category: 'Spiritual',
    symptoms: 'Baby cries uncontrollably, especially at night.',
    ingredients: [
      'Lada Hitam (Black Pepper)',
      'Minyak Celak',
      'Bawang Putih (Garlic)'
    ],
    preparationMethod: 'Wrap ingredients in a small black cloth (Bunjut).',
    methodOfUse: 'Pin securely to the baby\'s clothing or cradle.',
    spiritualElements: 'Recite "Al-Falaq" and "An-Nas" over the child.',
    sourceManuscript: 'MSS 202, Penjagaan Bayi',
    imageUrl: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '19',
    diseaseName: 'Luka Bakar (Burn Wounds)',
    category: 'Skin',
    symptoms: 'Red, stinging skin from fire or hot water.',
    ingredients: [
      'Lidah Buaya (Aloe Vera)',
      'Putih Telur (Egg White)'
    ],
    preparationMethod: 'Extract the gel from Aloe Vera or beat an egg white.',
    methodOfUse: 'Apply the cooling gel/liquid gently over the burn.',
    sourceManuscript: 'MSS 10, Kitab Rumah',
    imageUrl: 'https://images.unsplash.com/photo-1629196914375-f7e48f477b6d?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '20',
    diseaseName: 'Asma / Lelah (Asthma)',
    category: 'Internal',
    symptoms: 'Difficulty breathing, wheezing.',
    ingredients: [
      'Hati Unta Kering (Dried Camel Liver)',
      'Madu (Honey)'
    ],
    preparationMethod: 'Roast the dried liver and grind into powder. Mix with honey.',
    methodOfUse: 'Swallow a teaspoon of the mixture daily.',
    sourceManuscript: 'MSS 66, Tibb Purba',
    imageUrl: 'https://images.unsplash.com/photo-1564242699320-b30f823d47d6?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '21',
    diseaseName: 'Panau (Tinea Versicolor)',
    category: 'Skin',
    symptoms: 'White or dark patches on the skin, itchy.',
    ingredients: [
      'Lengkuas (Galangal)',
      'Cuka (Vinegar)'
    ],
    preparationMethod: 'Cut the galangal and dip the cut end into vinegar.',
    methodOfUse: 'Rub the cut end vigorously onto the skin patches.',
    sourceManuscript: 'MSS 70, Penyakit Kulit',
    imageUrl: 'https://images.unsplash.com/photo-1610452395568-154b0e527787?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '22',
    diseaseName: 'Beguk (Mumps)',
    category: 'Skin',
    symptoms: 'Swollen neck glands.',
    ingredients: [
      'Nila (Indigo Blue)',
      'Limau Nipis (Key Lime)'
    ],
    preparationMethod: 'Mix indigo powder with lime juice to make a blue paste.',
    methodOfUse: 'Paint the swollen area with the blue paste.',
    sourceManuscript: 'MSS 19, Penyakit Kanak-kanak',
    imageUrl: 'https://images.unsplash.com/photo-1596386461350-326ea77c3c79?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '23',
    diseaseName: 'Sakit Telinga (Earache)',
    category: 'General',
    symptoms: 'Pain inside the ear.',
    ingredients: [
      'Bawang Putih (Garlic)',
      'Minyak Kelapa (Coconut Oil)'
    ],
    preparationMethod: 'Warm the oil with crushed garlic.',
    methodOfUse: 'Drop 1-2 drops of the cooled oil into the ear.',
    sourceManuscript: 'MSS 50, Rawatan Umum',
    imageUrl: 'https://images.unsplash.com/photo-1516205651411-a416745265dd?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '24',
    diseaseName: 'Patah Tulang (Bone Fracture)',
    category: 'General',
    symptoms: 'Broken bone, severe pain, swelling.',
    ingredients: [
      'Kulit Kayu Manis (Cinnamon Bark)',
      'Kapur Makan (Limestone Paste)',
      'Putih Telur'
    ],
    preparationMethod: 'Grind bark, mix with lime paste and egg white to make a plaster.',
    methodOfUse: 'Apply around the set bone and wrap with cloth and splints.',
    spiritualElements: 'Recite "Ya Jabar" (The Restorer) 21 times.',
    sourceManuscript: 'MSS 99, Ilmu Tabib',
    imageUrl: 'https://images.unsplash.com/photo-1623855519808-c89b8893d56f?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '25',
    diseaseName: 'Sembelit (Constipation)',
    category: 'Internal',
    symptoms: 'Difficulty passing stool.',
    ingredients: [
      'Betik Masak (Ripe Papaya)',
      'Air Suam (Warm Water)'
    ],
    preparationMethod: 'Eat ripe papaya and drink plenty of warm water.',
    methodOfUse: 'Consumue in the morning before breakfast.',
    sourceManuscript: 'MSS 12, Diet & Pemakanan',
    imageUrl: 'https://images.unsplash.com/photo-1517260739337-6799d2eb9ce0?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '26',
    diseaseName: 'Darah Tinggi (Hypertension)',
    category: 'Internal',
    symptoms: 'Headache, dizziness, neck stiffness.',
    ingredients: [
      'Belimbing Buluh (Bilimbi)',
      'Air'
    ],
    preparationMethod: 'Blend 3 bilimbis with a cup of water.',
    methodOfUse: 'Drink the juice once daily.',
    sourceManuscript: 'MSS 24, Penyakit Orang Tua',
    imageUrl: 'https://images.unsplash.com/photo-1615485925763-867862f802d2?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '27',
    diseaseName: 'Kencing Manis (Diabetes)',
    category: 'Internal',
    symptoms: 'Frequent urination, excessive thirst.',
    ingredients: [
      'Peria Katak (Bitter Gourd)',
      'Teh Hijau (Green Tea)'
    ],
    preparationMethod: 'Slice bitter gourd and dry it. Boil as tea.',
    methodOfUse: 'Drink a cup daily.',
    sourceManuscript: 'MSS 44, Penawar Mujarab',
    imageUrl: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '28',
    diseaseName: 'Lemah Tenaga Batin (Low Libido)',
    category: 'Internal',
    symptoms: 'Lack of energy and desire.',
    ingredients: [
      'Kacip Fatimah (Labisia pumila) - Women',
      'Tongkat Ali (Eurycoma longifolia) - Men'
    ],
    preparationMethod: 'Boil the whole plant (roots and leaves).',
    methodOfUse: 'Drink the extract regularly.',
    sourceManuscript: 'MSS 101, Rahsia Rumahtangga',
    imageUrl: 'https://images.unsplash.com/photo-1546842931-886c185b4c8c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '29',
    diseaseName: 'Muntah Darah (Vomiting Blood)',
    category: 'Internal',
    symptoms: 'Vomiting blood due to internal injury or sorcery.',
    ingredients: [
      'Akar Senduduk',
      'Air Kelapa Muda'
    ],
    preparationMethod: 'Boil the root and mix with coconut water.',
    methodOfUse: 'Drink slowly to cool the internal organs.',
    spiritualElements: 'Recite verses of healing (Ayat Syifa).',
    sourceManuscript: 'MSS 13, Kitab Darurat',
    imageUrl: 'https://images.unsplash.com/photo-1599305090598-fe179d501227?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '30',
    diseaseName: 'Seriawan (Mouth Ulcer)',
    category: 'Internal',
    symptoms: 'Painful white sores in the mouth.',
    ingredients: [
      'Saga (Abrus precatorius) Leaves',
      'Santan (Coconut Milk)'
    ],
    preparationMethod: 'Chew the Saga leaves or gargle with coconut milk.',
    methodOfUse: 'Apply twice daily.',
    sourceManuscript: 'MSS 05, Mulut & Gigi',
    imageUrl: 'https://images.unsplash.com/photo-1601051515286-63d123d46777?auto=format&fit=crop&w=800&q=80',
  }
];
