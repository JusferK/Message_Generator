// this will defined what type of quotes we wanted to 
let quotesWanted = ''; // you can choose in beetwen stoic, bible 
// stoic quotes
const senecaQ = [
    "We suffer more often in imagination than in reality. - Seneca",
    "Ignorance is the cause of fear. - Seneca",
    "While we wait for life, life passes. - Seneca",
    "Life is long, if you know how to use it - Seneca",
    "Hurry up and live. - Seneca",
    "ease to hope and you will cease to fear. - Seneca",
    "Wealth is the slave of a wise man and the master of a fool. - Seneca",
    "Only time can heal what reason cannot. - Seneca",
    "While we are postponing, life speeds by. - Seneca",
    "Life, if well lived, is long enough. - Seneca"
];

const marcusQ = [
    "The best answer to anger is silence. - Marcus A.",
    "The more we value things outside our control, the less control we have. - Marcus A.",
    "How ridiculous and how strange to be surprised at anything which happens in life. - Marcus A.",
    "You have power over your mind – not outside events. Realize this, and you will find strength. - Marcus A.",
    "The best revenge is not to be like your enemy. - Marcus A.",
    "Accept the things to which fate binds you, and love the people with whom fate brings you together, but do so with all your heart. - Marcus A.",
    "Confine yourself to the present. - Marcus A.",
    "When you arise in the morning, think of what a precious privilege it is to be alive – to breathe, to think, to enjoy, to love. - Marcus A.",
    "You can commit injustice by doing nothing. - Marcus A.",
    "Waste no more time arguing about what a good man should be. Be one. - Marcus A."
];

const epictetusQ = [
    "We have two ears and one mouth so that we can listen twice as much as we speak. - Epictetus",
    "No man is free who is not master of himself. - Epictetus",
    "Man are disturbed not by things, but by the view which they take them. - Epictetus",
    "It is difficulties that show what men are. - Epictetus",
    "Make the best use of what is in your power, and take the rest as it happens. - Epictetus",
    "A ship should not ride on a single anchor, nor life on a single hope. - Epictetus",
    "No great thing is created suddenly. - Epictetus",
    "Know, first, who you are, and then adorn yourself accordingly. - Epictetus",
    "It is the nature of the wise to resist pleasures, but the foolish to be a slave to them. - Epictetus",
    "First learn the meaning of what you say, and then speak. - Epictetus",
    "If you want something good, get it yourself. - Epictetus"
];

const zenoQ = [
    "All the good are friends of one another. - Zeno",
    "No loss should be more regrettable to us than losing our time, for it’s irretrievable. - Zeno",
    "Extravagance is its own destroyer - Zeno",
    "Man conquers the world by conquering himself. - Zeno",
    "Steel your sensibilities, so that life shall hurt you as little as possible. - Zeno",
    "Better to trip with the feet than with the tongue - Zeno",
    "A bad feeling is a commotion of the mind repugnant to reason, and against nature. - Zeno"
];

const musoniusQ = [
    "We begin to lose our hesitation to do immoral things when we lose our hesitation to speak of them. - Musonius",
    "Humanity must seek what is NOT simple and obvious using the simple and obvious. - Musonius",
    "Since every man dies, it is better to die with distinction than to live long. - Musonius",
    "Only by exhibiting actions in harmony with the sound words which he has received will anyone be helped by philosophy. - Musonius",
    "Thus whoever destroys human marriage destroys the home, the city-the whole human race. - Musonius",
];

const diogenesQ = [
    "He with the most who is content with the least. - Diogenes",
    "The foundation of every state is the education of its youth. - Diogenes",
    "Blushing is the color of virtue. - Diogenes",
    "Dogs and philosophers do the greatest good and get the fewest rewards. - Diogenes",
    "I am not an Athenian or a Greek, but a citizen of the world. - Diogenes",
    "The mob is the mother of tyrants. - Diogenes",
    "Poverty is a virtue which one can teach oneself. - Diogenes"
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

// scientific quotes

const einsteingQ = [
    "The most incomprehensible thing about the world is that it is comprehensible. - Albert Einsteing",
    "Where the world ceases to be the scene of our personal hopes and wishes, where we face it as free beings admiring, asking, observing, there we enter the realm of art and science. - Albert Einsteing",
    'A human being is a part of the whole, called by us "universe", a part limited in time and space. - Albert Einsteing',
    "If I were not a physicist, I would probably be a musician. I often think in music. I live my daydreams in music. I see my life in terms of music ... I cannot tell if I would have done any creative work of importance in music, but I do know that I get most joy in life out of my violin. - Albert Einsteing",
    "The greatest scientists are artists as well. - Albert Einsteing",
    "Life is like riding a bicycle. To keep your balance you must keep moving. - Albert Einsteing",
    "I believe in one thing — that only a life lived for others is a life worth living. - Albert Einsteing",
    "I am enough of an artist to draw freely upon my imagination. Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world. - Albert Einsteing",
    "Why does this magnificent applied science which saves work and makes life easier bring us so little happiness? The simple answer runs: Because we have not yet learned to make sensible use of it. - Albert Einsteing",
    "One thing I have learned in a long life: that all our science, measured against reality, is primitive and childlike — and yet it is the most precious thing we have. - Albert Einsteing"
];

const oppenheimerQ = [
    "Science is not everything, but science is very beautiful. - Oppen Heimer",
    "There is no place for dogma in science. The scientist is free, and must be free to ask any question, to doubt any assertion, to seek for any evidence, to correct any errors - Oppen Heimer",
    "It is a profound and necessary truth that the deep things in science are not found because they are useful; they are found because it was possible to find them. - Oppen Heimer",
    "Science starts with a preconception, with common sense. It moves on to observation, is marked by the discovery of paradox, and is then concerned with the correction of preconception. It moves then to further observation and for more refined experiment. - Oppen Heimer"
];

const isaacNewtonQ = [
    "Truth is ever to be found in the simplicity, and not in the multiplicity and confusion of things. - Isaac Newton",
    "No great discovery was ever made without a bold guess. - Isaac Newton",
    "If I have ever made any valuable discoveries, it has been due more to patient attention, than to any other talent. - Isaac Newton",
    "If I have seen farther than others, it is because I was standing on the shoulders of giants. - Isaac Newton",
    "To every action there is always an equal and opposite or contrary, reaction. - Isaac Newton",
    "Live your life as an exclamation rather than an explanation. - Isaac Newton",
    "If others would think as hard as I did, then they would get similar results. - Isaac Newton",
    "What goes up must come down. - Isaac Newton"
];

const teslaQ = [
    "If you want to find the secrets of the universe, think in terms of energy, frequency and vibration.",
    "I don't care that they stole my idea . . I care that they don't have any of their own",
    "The day science begins to study non-physical phenomena, it will make more progress in one decade than in all the previous centuries of its existence.",
    "The scientists of today think deeply instead of clearly. One must be sane to think clearly, but one can think deeply and be quite insane.",
    "My brain is only a receiver, in the Universe there is a core from which we obtain knowledge, strength and inspiration. I have not penetrated into the secrets of this core, but I know that it exists."
]

const allRandomQuotes = [senecaQ, marcusQ, epictetusQ, zenoQ, musoniusQ, diogenesQ, romansQ, psalmQ, isaiahQ, matthewQ, corinthiansQ, johnQ, einsteingQ, oppenheimerQ, isaacNewtonQ, teslaQ];
const allStoicQuotes = [senecaQ, marcusQ, epictetusQ, zenoQ, musoniusQ, diogenesQ];
const allbibleQuotes = [romansQ, psalmQ, isaiahQ, matthewQ, corinthiansQ, johnQ];
const allCientificQuotes = [einsteingQ, oppenheimerQ, isaacNewtonQ, teslaQ];

const randomQuote = array => {
    let arrayRandomPick = Math.floor(Math.random() * array.length);
    let randomQuote = Math.floor(Math.random() * array[arrayRandomPick].length);

    return array[arrayRandomPick][randomQuote];
}

