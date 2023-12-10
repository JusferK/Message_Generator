// this will defined what type of quotes we wanted to 
let quotesWanted = ''; // you can choose in beetwen stoic, bible
// stoic quotes
const senecaQ = [
    "We suffer more often in imagination than in reality.",
    "Ignorance is the cause of fear.",
    "While we wait for life, life passes.",
    "Life is long, if you know how to use it",
    "Hurry up and live.",
    "ease to hope and you will cease to fear.",
    "Wealth is the slave of a wise man and the master of a fool.",
    "Only time can heal what reason cannot.",
    "While we are postponing, life speeds by.",
    "Life, if well lived, is long enough."
];

const marcusQ = [
    "The best answer to anger is silence.",
    "The more we value things outside our control, the less control we have.",
    "How ridiculous and how strange to be surprised at anything which happens in life.",
    "You have power over your mind – not outside events. Realize this, and you will find strength.",
    "The best revenge is not to be like your enemy.",
    "Accept the things to which fate binds you, and love the people with whom fate brings you together, but do so with all your heart.",
    "Confine yourself to the present.",
    "When you arise in the morning, think of what a precious privilege it is to be alive – to breathe, to think, to enjoy, to love.",
    "You can commit injustice by doing nothing.",
    "Waste no more time arguing about what a good man should be. Be one."
];

const epictetusQ = [
    "We have two ears and one mouth so that we can listen twice as much as we speak.",
    "No man is free who is not master of himself.",
    "Man are disturbed not by things, but by the view which they take them.",
    "It is difficulties that show what men are.",
    "Make the best use of what is in your power, and take the rest as it happens.",
    "A ship should not ride on a single anchor, nor life on a single hope.",
    "No great thing is created suddenly.",
    "Know, first, who you are, and then adorn yourself accordingly.",
    "It is the nature of the wise to resist pleasures, but the foolish to be a slave to them.",
    "First learn the meaning of what you say, and then speak.",
    "If you want something good, get it yourself."
];

const zenoQ = [
    "All the good are friends of one another.",
    "No loss should be more regrettable to us than losing our time, for it’s irretrievable.",
    "Extravagance is its own destroyer",
    "Man conquers the world by conquering himself.",
    "Steel your sensibilities, so that life shall hurt you as little as possible.",
    "Better to trip with the feet than with the tongue",
    "A bad feeling is a commotion of the mind repugnant to reason, and against nature."
];

const musoniusQ = [
    "We begin to lose our hesitation to do immoral things when we lose our hesitation to speak of them.",
    "Humanity must seek what is NOT simple and obvious using the simple and obvious.",
    "Since every man dies, it is better to die with distinction than to live long.",
    "Only by exhibiting actions in harmony with the sound words which he has received will anyone be helped by philosophy.",
    "Thus whoever destroys human marriage destroys the home, the city-the whole human race.",
];

const diogenesQ = [
    "He with the most who is content with the least.",
    "The foundation of every state is the education of its youth.",
    "Blushing is the color of virtue.",
    "Dogs and philosophers do the greatest good and get the fewest rewards.",
    "I am not an Athenian or a Greek, but a citizen of the world.",
    "The mob is the mother of tyrants.",
    "Poverty is a virtue which one can teach oneself."
];

// bible quotes
const romansQ = [
    "Romans 15:13- May the God of hope fill you with all joy and peace as you trust in him, so that you may overflow with hope by the power of the Holy Spirit.",
    "Romans 8:38-39 - For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord.",
    "Romans 8:31 - What, then, shall we say in response to these things? If God is for us, who can be against us?",
    "Romans 8:28 - And we know that in all things God works for the good of those who love him, who have been called according to his purpose."
];

const psalmQ = [
    "Psalm 27:1 - The Lord is my light and my salvation; whom shall I fear? The Lord is the stronghold of my life; of whom shall I be afraid?",
    "Psalm 31:24 - Be strong, and let your heart take courage, all you who wait for the Lord!",
    "Psalm 107:1 - Give thanks to the Lord, for He is good; his love endures forever.",
    "Psalm 34:8 - Taste and see that the Lord is good; blessed is the one who takes refuge in him.",
    "Psalm 3:3 - But you, Lord, are a shield around me, my glory, the One who lifts my head high.",
    "Psalm 96: 1-3 - Sing to the Lord a new song; sing to the Lord, all the earth. Sing to the Lord, praise his name; proclaim his salvation day after day. Declare his glory among the nations, his marvelous deeds among all peoples."
];

const isaiahQ = [
    "41:10 - Fear not, for I am with you; be not dismayed, for I am your God; I will strengthen you, I will help you, I will uphold you with my righteous right hand.",
    "Isaiah 40:31 - But they who wait for the Lord shall renew their strength; they shall mount up with wings like eagles; they shall run and not be weary; they shall walk and not faint.",
    "Isaiah 66:13 - As a mother comforts her child, so will I comfort you; and you will be comforted over Jerusalem."
];

const matthewQ = [
    'Matthew 11;28 - Come to Me, all you who are weary and burdened, and I will give you rest.',
    'Matthew 17:20 - Our faith can move mountains.',
    'Matthew 19:26 - But Jesus looked at them and said, "With man this is impossible, but with God all things are possible."'
];

const corinthiansQ = [
    '1 Corinthians 16:13-14 - Be watchful, stand firm in the faith, act like men, be strong. Let all that you do be done in love.',
    '1 Corinthians 15:58 - Therefore, my beloved brothers, be steadfast, immovable, always abounding in the work of the Lord, knowing that in the Lord your labor is not in vain.',
    '2 Corinthians 4:16-18 - So we do not lose heart. Though our outer self is wasting away, our inner self is being renewed day by day. For this light momentary affliction is preparing for us an eternal weight of glory beyond all comparison, as we look not to the things that are seen but to the things that are unseen.'
];

const johnQ = [
    "John 15:13 - Greater love has no one than this: to lay down one's life for one's friends.",
    "John 16:33 - I have told you all this so that you may have peace in me. Here on earth you will have many trials and sorrows. But take heart, because I have overcome the world.",
    "1 John 4:18 - There is no fear in love. But perfect love drives out fear, because fear has to do with punishment. The one who fears is not made perfect in love."
];



const allStoicQuotes = [senecaQ, marcusQ, epictetusQ, zenoQ, musoniusQ, diogenesQ];

const randomQuote = array => {
    let arrayRandomPick = Math.floor(Math.random() * array.length);
    let randomQuote = Math.floor(Math.random() * array[arrayRandomPick].length);

    return array[arrayRandomPick][randomQuote];
}

