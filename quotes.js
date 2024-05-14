const quotes = [
  {
    text: "Genius is one percent inspiration and ninety-nine percent perspiration.",
    author: "Thomas Edison ",
  },
  {
    text: "You can observe a lot just by watching.",
    author: "Yogi Berra ",
  },
  {
    text: "A house divided against itself cannot stand.",
    author: "Abraham Lincoln",
  },
  {
    text: "Difficulties increase the nearer we get to the goal.",
    author: "Johann Wolfgang von Goethe ",
  },
  {
    text: "Fate is in your hands and no one elses",
    author: "Byron Pulsifer",
  },
  {
    text: "Be the chief but never the lord.",
    author: "Lao Tzu",
  },
  {
    text: "Nothing happens unless first we dream.",
    author: "Carl Sandburg",
  },
  {
    text: "Well begun is half done.",
    author: "Aristotle",
  },
  {
    text: "Life is a learning experience, only if you learn.",
    author: "Yogi Berra",
  },
  {
    text: "Self-complacency is fatal to progress.",
    author: "Margaret Sangster",
  },
  {
    text: "Peace comes from within. Do not seek it without.",
    author: "Buddha",
  },
  {
    text: "What you give is what you get.",
    author: "Byron Pulsifer",
  },
  {
    text: "We can only learn to love by loving.",
    author: "Iris Murdoch",
  },
  {
    text: "Life is change. Growth is optional. Choose wisely.",
    author: "Karen Clark",
  },
  {
    text: "You'll see it when you believe it.",
    author: "Wayne Dyer",
  },
  {
    text: "Today is the tomorrow we worried about yesterday.",
    author: "Abhay Kumar Das",
  },
  {
    text: "I noticed that this defense attorney is a very, very intelligent man, and he's very cool and he's very knowledgeable, and I think that personally I'd like to have an attorney like him.",
    author: "Tommy Bond",
  },
  {
    text: "A girl came up to me in a bar and said she wanted to be my apple pie. I wish I'd said something cool, but I was stunned.",
    author: "Jason Biggs",
  },
  {
    text: "Be the change you wish to see in the world.",
    author: "Mahatma Gandhi",
  },
  {
    text: "I have a dream that one day this nation will rise up and live out the true meaning of its creed: 'We hold these truths to be self-evident, that all men are created equal.",
    author: "Martin Luther King Jr",
  },
  {
    text: "Float like a butterfly, sting like a bee.",
    author: "Muhammad Ali",
  },
  {
    text: "The only thing necessary for the triumph of evil is for good men to do nothing.",
    author: "Edmund Burke",
  },
  {
    text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
  {
    text: "The best way to predict the future is to create it.",
    author: "Peter Drucker",
  },
  {
    text: "In the middle of every difficulty lies opportunity.",
    author: "Albert Einstein",
  },
  {
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
  },
  {
    text: "The only limit to our realization of tomorrow will be our doubts of today.",
    author: "Franklin D. Roosevelt",
  },
  {
    text: "The journey of a thousand miles begins with a single step.",
    author: "Lao Tzu",
  },
  {
    text: "The best time to plant a tree was 20 years ago. The second best time is now.",
    author: "Chinese Proverb",
  },
  {
    text: "Difficulties in your life are intended to make you, not break you.",
    author: "Roy T. Bennett",
  },
  {
    text: "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails. Explore, Dream, Discover.",
    author: "Mark Twain",
  },
  {
    text: "It is not the mountain we conquer, but ourselves.",
    author: "Edmund Hillary",
  },
  {
    text: "The mind is everything. What you think you become.",
    author: "Buddha",
  },
  {
    text: "There is no passion to be found playing small - in settling for a life that is less than the life you are capable of living.",
    author: "Nelson Mandela",
  },
  {
    text: "Our greatest glory is not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
  },
  {
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
  },
  {
    text: "You don't have to be great to start, but you have to start to be great.",
    author: "Zig Ziglar",
  },
  {
    text: "The only person you are destined to become is the person you decide to be.",
    author: "Ralph Waldo Emerson",
  },
  {
    text: "It's not what happens to you, but how you react to what happens that matters.",
    author: "Epictetus",
  },
  {
    text: "The man who moves a mountain begins by carrying away small stones.",
    author: "Confucius",
  },
  { text: "Either you run the day or the day runs you.", author: "Jim Rohn" },
  {
    text: "Your biggest challenge may be the very thing that leads to your greatest accomplishment.",
    author: "Marienne Williamson",
  },
  {
    text: "You can't wait for inspiration to strike you. You have to go out and get it.",
    author: "Jack London",
  },
  {
    text: "Doubt kills more dreams than failure ever will.",
    author: "Suzy Kassem",
  },
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  { text: "If you can dream it, you can do it.", author: "Walt Disney" },
  {
    text: "A dream doesn't become reality through magic; it takes sweat, determination, and hard work.",
    author: "Colin Powell",
  },
  {
    text: "A friend is someone who knows you and loves you anyway.",
    author: "Elbert Hubbard",
  },
  {
    text: "It is one of the blessings of old friends that you can afford to be stupid with them.",
    author: "Ralph Waldo Emerson",
  },
  {
    text: "Friendship is born at that moment when one person says to another, 'What? You too? I thought I was the only one.'",
    author: "C.S. Lewis",
  },
  {
    text: "Silence in friendly company is more sociable than talk in unfriendly company.",
    author: "William Penn",
  },
  {
    text: "True friends are like diamonds - bright, valuable, and always in style.",
    author: "Nicole Richie",
  },
  { text: "The best mirror is an old friend.", author: "George Bernard Shaw" },
  {
    text: "One loyal friend is worth ten thousand acquaintances.",
    author: "Publilius Syrus",
  },
  {
    text: "We should all have one person who knows what we are, and loves us in spite of it.",
    author: "E.M. Forster",
  },
  { text: "Friends are the family you choose.", author: "Jess C. Scott" },
  {
    text: "Get a friend in the market; a friend at court is better; a friend in your heart is the best.",
    author: "Proverb",
  },
  {
    text: "Friendship improves happiness and abates misery by doubling our joy and dividing our grief.",
    author: "Marcus Tullius Cicero",
  },
  {
    text: "Friendship is a wise and pleasant thing, in prosperity a solace, and in adversity a support.",
    author: "Marcus Tullius Cicero",
  },
  {
    text: "It is not how much we give but how much love we put into giving that makes a gift valuable.",
    author: "Mother Teresa",
  },
  {
    text: "A friend is someone who understands your past, believes in your future, and accepts you just the way you are.",
    author: "Unknown",
  },
  {
    text: " wahre Freundschaft  (True friendship) cannot exist between people with fundamentally different values.",
    author: "Johann Wolfgang von Goethe",
  },
  {
    text: "Technology is a useful servant but a dangerous master.",
    author: "Christian Lous Lange",
  },
  {
    text: "The only constant in the technology world is change. You can't stand still or the world will pass you by.",
    author: "Marc Benioff",
  },
  {
    text: "The future is already here - it's just not very evenly distributed.",
    author: "William Gibson",
  },
  {
    text: "Technology is best when it brings people together. When it creates space, it's not such a good thing.",
    author: "Jaron Lanier",
  },
  {
    text: "We can't solve problems by using the same kind of thinking we used when we created them.",
    author: "Albert Einstein",
  },
  {
    text: "Success is not final; failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    text: "Don't be afraid to give up the good to go for the great.",
    author: "John D. Rockefeller",
  },
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    text: "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails. Explore, Dream, Discover.",
    author: "Mark Twain",
  },
  {
    text: "Your time is limited, don't waste it living someone else's life.",
    author: "Steve Jobs",
  },
  {
    text: "The ultimate test of a moral society is how it treats those who are at a disadvantage.",
    author: "John Rawls",
  },
  {
    text: "Society progresses by advancing, not by standing still.",
    author: "Winston Churchill",
  },
  {
    text: "A society that does not respect its veterans will not long flourish.",
    author: "Colin Powell",
  },
  {
    text: "Progress is impossible without change, and those who cannot change their minds cannot change anything.",
    author: "George Bernard Shaw",
  },
  {
    text: "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle.",
    author: "Steve Jobs",
  },
  {
    text: "We accept the love we think we deserve.",
    author: "Stephen Chbosky",
  },
  { text: "To love at all is to be vulnerable.", author: "C.S. Lewis" },
  {
    text: "A successful marriage requires falling in love many times, always with the same person.",
    author: "Mignon McLaughlin",
  },
  {
    text: "As we grow older, our hearts become even more susceptible to love. We lose certain inhibitions, certain defenses, and open ourselves to new experiences.",
    author: "Anaïs Nin",
  },
  {
    text: "Love is the greatest refreshment in life.",
    author: "Pablo Picasso",
  },
  {
    text: "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.",
    author: "Ralph Waldo Emerson",
  },
  {
    text: "Family is not an important thing. It's everything.",
    author: "Michael J. Fox",
  },
  {
    text: "What is a family? A little piece of heaven here on earth.",
    author: "Dona Guzman",
  },
  {
    text: "In times of need, family is your safest refuge.",
    author: "Chinese Proverb",
  },
  {
    text: "The best way to predict the future is to create it.",
    author: "Peter Drucker",
  },
  {
    text: "If you don't build your dream someone else will hire you to build theirs.",
    author: "Tony Gaskins",
  },
  {
    text: "It's hard to beat a person who never gives up.",
    author: "Babe Ruth",
  },
  {
    text: "The key is to set realistic customer expectations, and then not to just meet them, but to exceed them - preferably in unexpected and helpful ways.",
    author: "Richard Branson",
  },
  {
    text: "Good business is built on trust and integrity.",
    author: "Richard Branson",
  },
  {
    text: "Being a family means you are part of something very wonderful. It means you will love and be loved for a lifetime.",
    author: "Lisa Welchel",
  },
  { text: "Blood is thicker than water.", author: "John Ray" },
  {
    text: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
  },
  {
    text: "A successful marriage requires falling in love many times, always with the same person.",
    author: "Mignon McLaughlin",
  },
  { text: "Love is friendship that has caught fire.", author: "Ann Landers" },
  {
    text: "To love and be loved is to feel the sun from both sides.",
    author: "David Viscott",
  },
  {
    text: "A happy marriage is a long conversation which always seems too short.",
    author: "Andre Maurois",
  },
  {
    text: "Marriage is not about finding someone who can live with you; it's finding someone you can't live without.",
    author: "Rafael Ortiz",
  },
  {
    text: "You don't have to be great to start, but you have to start to be great.",
    author: "Zig Ziglar",
  },
  {
    text: "The only person you are destined to become is the person you decide to be.",
    author: "Ralph Waldo Emerson",
  },
  {
    text: "The journey of a thousand miles begins with a single step.",
    author: "Lao Tzu",
  },
  {
    text: "Love is the melody that makes life's symphony complete.",
    author: "Anonymous",
  },
  {
    text: "In the garden of love, every flower tells a story of affection.",
    author: "Unknown",
  },
  {
    text: "Love is the compass that guides the lost souls back to each other.",
    author: "Anonymous",
  },
  {
    text: "With every beat of my heart, I whisper your name in the language of love.",
    author: "Unknown",
  },
  {
    text: "Love is the poetry written on the pages of our hearts.",
    author: "Anonymous",
  },
  {
    text: "In the dance of love, two souls become one graceful rhythm.",
    author: "Unknown",
  },
  {
    text: "Love is the canvas where our emotions paint the masterpiece of togetherness.",
    author: "Anonymous",
  },
  {
    text: "In your eyes, I found the reflection of my soul's deepest desires.",
    author: "Unknown",
  },
  {
    text: "Love is the flame that ignites the darkest corners of our existence.",
    author: "Anonymous",
  },
  {
    text: "With you, every moment is a love story waiting to be written.",
    author: "Unknown",
  },
  {
    text: "Love is the miracle that turns ordinary moments into extraordinary memories.",
    author: "Anonymous",
  },
  {
    text: "In the language of love, every word is a tender caress.",
    author: "Unknown",
  },
  {
    text: "Love is the gentle breeze that soothes the storms within our hearts.",
    author: "Anonymous",
  },
  {
    text: "With you, even the silence speaks volumes of love.",
    author: "Unknown",
  },
  {
    text: "Love is the poetry of the senses, a symphony of the heart.",
    author: "Anonymous",
  },
  {
    text: "In your embrace, I find solace from the chaos of the world.",
    author: "Unknown",
  },
  {
    text: "Love is the sweetest melody that plays in the chambers of our souls.",
    author: "Anonymous",
  },
  {
    text: "With you, every sunrise is a promise of endless love.",
    author: "Unknown",
  },
  {
    text: "Love is the language that transcends all barriers, uniting hearts in harmony.",
    author: "Anonymous",
  },
  {
    text: "In your eyes, I see the reflection of forever.",
    author: "Unknown",
  },
  {
    text: "Love is the dance of two souls entwined in eternal rhythm.",
    author: "Anonymous",
  },
  {
    text: "With you, every heartbeat is a testament to our love story.",
    author: "Unknown",
  },
  {
    text: "Love is the warmth that melts the icy walls around our hearts.",
    author: "Anonymous",
  },
  {
    text: "In your smile, I find the sunshine that brightens my darkest days.",
    author: "Unknown",
  },
  {
    text: "Love is the journey where every step leads us closer to each other.",
    author: "Anonymous",
  },
  {
    text: "With you, every moment is a celebration of love's exquisite beauty.",
    author: "Unknown",
  },
  {
    text: "Love is the melody that resonates in the depths of our being.",
    author: "Anonymous",
  },
  {
    text: "In your touch, I feel the magic of love's tender embrace.",
    author: "Unknown",
  },
  {
    text: "Love is the bond that ties our souls together for eternity.",
    author: "Anonymous",
  },
  {
    text: "With you, every heartbeat is a symphony of love's sweet melody.",
    author: "Unknown",
  },
  {
    text: "Love is the masterpiece painted on the canvas of our hearts.",
    author: "Anonymous",
  },
  {
    text: "In your arms, I find the sanctuary where my soul belongs.",
    author: "Unknown",
  },
  {
    text: "Love is the sunrise that paints the sky of our existence with hues of passion.",
    author: "Anonymous",
  },
  {
    text: "With you, every day is a journey deeper into the heart of love.",
    author: "Unknown",
  },
  {
    text: "Love is the language that speaks to us in whispers of the heart.",
    author: "Anonymous",
  },
  {
    text: "In your gaze, I find the reflection of my truest self.",
    author: "Unknown",
  },
  {
    text: "Love is the symphony that plays in the silence between our breaths.",
    author: "Anonymous",
  },
  {
    text: "With you, every moment is a treasure trove of love's precious memories.",
    author: "Unknown",
  },
  {
    text: "Love is the melody that orchestrates the dance of our souls.",
    author: "Anonymous",
  },
  {
    text: "In your presence, I find the serenity that calms the storms within.",
    author: "Unknown",
  },
  {
    text: "Love is the journey where every step is a testament to our devotion.",
    author: "Anonymous",
  },
  {
    text: "With you, every heartbeat is a love song sung by our souls.",
    author: "Unknown",
  },
  {
    text: "Love is the fragrance that lingers in the air when you're near.",
    author: "Anonymous",
  },
  {
    text: "In your laughter, I find the music that fills my heart with joy.",
    author: "Unknown",
  },
  {
    text: "Love is the tapestry woven from the threads of our shared dreams.",
    author: "Anonymous",
  },
  {
    text: "With you, every moment is a whisper of eternity's embrace.",
    author: "Unknown",
  },
  {
    text: "Love is the beacon that guides us through the darkest nights.",
    author: "Anonymous",
  },
  {
    text: "In your kiss, I taste the sweetness of love's eternal promise.",
    author: "Unknown",
  },
  {
    text: "Love is the song that echoes in the chambers of our hearts.",
    author: "Anonymous",
  },
  {
    text: "With you, every day is a celebration of love's boundless magic.",
    author: "Unknown",
  },
  {
    text: "I have not failed. I've just found 10,000 ways that won't work.",
    author: "Thomas Edison",
  },
  {
    text: "The only person you should try to be better than is the person you were yesterday.",
    author: "Anonymous",
  },
  {
    text: "Success is stumbling from failure to failure with no loss of enthusiasm.",
    author: "Winston S. Churchill",
  },
  {
    text: "Love is the poetry that flows from the depths of our souls.",
    author: "Anonymous",
  },
  {
    text: "In your arms, I find the refuge where my spirit finds peace.",
    author: "Unknown",
  },
  {
    text: "Love is the constellation that maps the journey of our hearts.",
    author: "Anonymous",
  },
  {
    text: "With you, every heartbeat is a love letter written in the stars.",
    author: "Unknown",
  },
  {
    text: "The secret of getting ahead is getting started.",
    author: "Mark Twain",
  },
  {
    text: "Success usually comes to those who are too busy to be looking for it.",
    author: "Henry David Thoreau",
  },
  {
    text: "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work.",
    author: "Steve Jobs",
  },
  {
    text: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
  {
    text: "If you don't build your dream, someone else will hire you to help them build theirs.",
    author: "Dhirubhai Ambani",
  },
  {
    text: "The only place where success comes before work is in the dictionary.",
    author: "Vidal Sassoon",
  },
  {
    text: "The secret of getting ahead is getting started.",
    author: "Mark Twain",
  },
  {
    text: "Don't be afraid to give up the good to go for the great.",
    author: "John D. Rockefeller",
  },
  {
    text: "Success is walking from failure to failure with no loss of enthusiasm.",
    author: "Winston Churchill",
  },
  {
    text: "Innovation distinguishes between a leader and a follower.",
    author: "Steve Jobs",
  },
  {
    text: "Your most unhappy customers are your greatest source of learning.",
    author: "Bill Gates",
  },
  {
    text: "The only limit to our realization of tomorrow will be our doubts of today.",
    author: "Franklin D. Roosevelt",
  },
  {
    text: "The mind is everything. What you think, you become.",
    author: "Swami Vivekananda",
  },
  {
    text: "The soul is neither born, and nor does it die.",
    author: "Bhagavad Gita",
  },
  {
    text: "Realization of Truth is higher than all else. Higher still is truthful living.",
    author: "Guru Nanak",
  },
  {
    text: "He who has no faith in himself can never have faith in God.",
    author: "Guru Nanak",
  },
  {
    text: "Even Kings and emperors with heaps of wealth and vast dominion cannot compare with an ant filled with the love of God.",
    author: "Guru Nanak",
  },
  {
    text: "As fragrance abides in the flower, as the reflection is within the mirror, so does your Lord abide within you; why search for him without?",
    author: "Guru Nanak",
  },
  {
    text: "Only fools argue whether to eat meat or not. They don't understand truth, nor do they meditate on it. Who can define what is meat and what is plant? Who knows where the sin lies, being a vegetarian or a non-vegetarian?",
    author: "Guru Nanak",
  },
  {
    text: "Those who have loved are those that have found God.",
    author: "Guru Nanak",
  },
  {
    text: "The greatest comforts and lasting peace are obtained, when one eradicates selfishness from within.",
    author: "Guru Nanak",
  },
  {
    text: "Burn worldly love, rub the ashes and make ink of it, make the heart the pen, the intellect the writer, write that which has no end or limit.",
    author: "Guru Nanak",
  },
  {
    text: "Let no man in the world live in delusion. Without a Guru none can cross over to the other shore.",
    author: "Guru Nanak",
  },
  {
    text: "God is one, but he has innumerable forms. He is the creator of all and He himself takes the human form.",
    author: "Guru Nanak",
  },
  {
    text: "Dwell in peace in the home of your own being, and the Messenger of Death will not be able to touch you.",
    author: "Guru Nanak",
  },
  {
    text: "Burn worldly love, rub the ashes and make ink of it, make the heart the pen, the intellect the writer, write that which has no end or limit.",
    author: "Guru Nanak",
  },
  {
    text: "Speak only that which will bring you honor.",
    author: "Guru Nanak",
  },
  {
    text: "Asceticism doesn't lie in ascetic robes or in walking staff nor in the ashes. Asceticism doesn't lie in the earring nor in the shaven head nor blowing a conch. Asceticism lies in remaining pure amidst impurities.",
    author: "Guru Nanak",
  },
  {
    text: "As long as there is breath in the body, there is no end to karma.",
    author: "Guru Nanak",
  },
  {
    text: "Burn worldly love, rub the ashes and make ink of it, make the heart the pen, the intellect the writer, write that which has no end or limit.",
    author: "Guru Nanak",
  },
  {
    text: "There is but one God. True is His Name, creative His personality and immortal His form. He is without fear sans enmity, unborn and self-illumined. By the Guru's grace He is obtained.",
    author: "Guru Nanak",
  },
  {
    text: "He who shows the real home in this body is the Guru. He makes the five sounded word reverberate in man.",
    author: "Guru Nanak",
  },
  {
    text: "Dwell in peace in the home of your own being, and the Messenger of Death will not be able to touch you.",
    author: "Guru Nanak",
  },
  {
    text: "Let God's grace be the mosque, and devotion the prayer mat. Let the Quran be the good conduct.",
    author: "Guru Nanak",
  },
  {
    text: "Sing the songs of joy to the Lord, serve the Name of the Lord, and become the servant of His servants.",
    author: "Guru Nanak",
  },
  {
    text: "Let no man in the world live in delusion. Without a Guru none can cross over to the other shore.",
    author: "Guru Nanak",
  },
  {
    text: "There are worlds and more worlds below them, and there are a hundred thousand skies over them. No one has been able to find the limits and boundaries of God.",
    author: "Guru Nanak",
  },
  {
    text: "Through shallow intellect, the mind becomes shallow, and one eats the fly, along with the sweets.",
    author: "Guru Nanak",
  },
  {
    text: "Whatever be the qualities of the man with whom a woman is united according to the law, such qualities even she assumes, like a river, united with the ocean.",
    author: "Guru Nanak",
  },
  {
    text: "Owing to ignorance of the rope the rope appears to be a snake; owing to ignorance of the Self the transient state arises of the individualized, limited, phenomenal aspect of the Self.",
    author: "Guru Nanak",
  },
  {
    text: "He who has no faith in himself can never have faith in God.",
    author: "Guru Nanak",
  },
  {
    text: "Those who have loved are those that have found God.",
    author: "Guru Nanak",
  },
  {
    text: "I am neither a child, a young man, nor an ancient; nor am I of any caste.",
    author: "Guru Nanak",
  },
  {
    text: "The happiness which comes from long practice, which leads to the end of suffering, which at first is like poison, but at last like nectar - this kind of happiness arises from the serenity of one's own mind.",
    author: "Bhagavad Gita",
  },
  {
    text: "You have the right to work, but never to the fruit of work. You should never engage in action for the sake of reward, nor should you long for inaction.",
    author: "Bhagavad Gita",
  },
  {
    text: "The power of God is with you at all times; through the activities of mind, senses, breathing, and emotions; and is constantly doing all the work using you as a mere instrument.",
    author: "Bhagavad Gita",
  },
  {
    text: "Do your duty without attachment. That is how a man reaches the ultimate truth; by working without anxiety about results.",
    author: "Bhagavad Gita",
  },
  {
    text: "One who sees inaction in action, and action in inaction, is intelligent among men.",
    author: "Bhagavad Gita",
  },
  {
    text: "When meditation is mastered, the mind is unwavering like the flame of a lamp in a windless place.",
    author: "Bhagavad Gita",
  },
  {
    text: "Set thy heart upon thy work, but never on its reward.",
    author: "Bhagavad Gita",
  },
  {
    text: "One can become whatever one wants to be (if one constantly contemplates on the object of desire with faith).",
    author: "Srimad Bhagavatam",
  },
  {
    text: "The mind acts like an enemy for those who do not control it.",
    author: "Bhagavad Gita",
  },
  {
    text: "There is neither this world nor the world beyond nor happiness for the one who doubts.",
    author: "Bhagavad Gita",
  },
  {
    text: "Those who possess steady wisdom are indifferent to both distress and delight. Such wise persons, established in the Self, conquer fear.",
    author: "Bhagavad Gita",
  },
  {
    text: "The senses are higher than the body, the mind higher than the senses; above the mind is the intellect, and above the intellect is the Atman. Thus, knowing that which is supreme, let the Atman rule the ego. Use your mighty arms to slay the fierce enemy that is selfish desire.",
    author: "Bhagavad Gita",
  },
  {
    text: "The mind is restless and difficult to restrain, but it is subdued by practice.",
    author: "Bhagavad Gita",
  },
  {
    text: "The wise sees knowledge and action as one; they see truly.",
    author: "Bhagavad Gita",
  },
  {
    text: "Perform your obligatory duty, because action is indeed better than inaction.",
    author: "Bhagavad Gita",
  },
  {
    text: "For certain is death for the born, and certain is birth for the dead; therefore, over the inevitable, thou shouldst not grieve.",
    author: "Bhagavad Gita",
  },
  {
    text: "Fear not what is not real, never was and never will be. What is real, always was and cannot be destroyed.",
    author: "Bhagavad Gita",
  },
  {
    text: "In this world, there is nothing so sublime and pure as transcendental knowledge. Such knowledge is the mature fruit of all mysticism.",
    author: "Bhagavad Gita",
  },
  {
    text: "As the heat of a fire reduces wood to ashes, the fire of knowledge burns to ashes all karma.",
    author: "Bhagavad Gita",
  },
  {
    text: "Hell has three gates: lust, anger, and greed.",
    author: "Bhagavad Gita",
  },
  {
    text: "To those who are constantly devoted and who worship me with love, I give the understanding by which they can come to me.",
    author: "Bhagavad Gita",
  },
  {
    text: "One who has control over the mind is tranquil in heat and cold, in pleasure and pain, and in honor and dishonor; and is ever steadfast with the Supreme Self.",
    author: "Bhagavad Gita",
  },
  {
    text: "The self-controlled soul, who moves amongst sense objects, free from either attachment or repulsion, he wins eternal Peace.",
    author: "Bhagavad Gita",
  },
  {
    text: "Whatever you do, make it an offering to me -- the food you eat, the sacrifices you make, the help you give, even your suffering.",
    author: "Bhagavad Gita",
  },
  {
    text: "The embodied soul is eternal in existence, indestructible, and infinite, only the material body is factored.",
    author: "Bhagavad Gita",
  },
  {
    text: "The mind is restless and difficult to restrain, but it is subdued by practice.",
    author: "Bhagavad Gita",
  },
  {
    text: "The senses are higher than the body, the mind higher than the senses; above the mind is the intellect, and above the intellect is the Atman. Thus, knowing that which is supreme, let the Atman rule the ego. Use your mighty arms to slay the fierce enemy that is selfish desire.",
    author: "Bhagavad Gita",
  },
  {
    text: "The wise sees knowledge and action as one; they see truly.",
    author: "Bhagavad Gita",
  },
  {
    text: "Set thy heart upon thy work, but never on its reward.",
    author: "Bhagavad Gita",
  },
  {
    text: "One can become whatever one wants to be (if one constantly contemplates on the object of desire with faith).",
    author: "Srimad Bhagavatam",
  },
  {
    text: "The mind acts like an enemy for those who do not control it.",
    author: "Bhagavad Gita",
  },
  {
    text: "There is neither this world nor the world beyond nor happiness for the one who doubts.",
    author: "Bhagavad Gita",
  },
  {
    text: "Those who possess steady wisdom are indifferent to both distress and delight. Such wise persons, established in the Self, conquer fear.",
    author: "Bhagavad Gita",
  },
  {
    text: "Do your duty without attachment. That is how a man reaches the ultimate truth; by working without anxiety about results.",
    author: "Bhagavad Gita",
  },
  {
    text: "You have the right to work, but never to the fruit of work. You should never engage in action for the sake of reward, nor should you long for inaction.",
    author: "Bhagavad Gita",
  },
  {
    text: "The power of God is with you at all times; through the activities of mind, senses, breathing, and emotions; and is constantly doing all the work using you as a mere instrument.",
    author: "Bhagavad Gita",
  },
  {
    text: "The happiness which comes from long practice, which leads to the end of suffering, which at first is like poison, but at last like nectar - this kind of happiness arises from the serenity of one’s own mind.",
    author: "Bhagavad Gita",
  },
  {
    text: "The soul is neither born, and nor does it die.",
    author: "Bhagavad Gita",
  },
  {
    text: "The mind is everything. What you think, you become.",
    author: "Swami Vivekananda",
  },
  {
    text: "You don't have to be great to start, but you have to start to be great.",
    author: "Zig Ziglar",
  },
  {
    text: "Your time is limited, don't waste it living someone else's life.",
    author: "Steve Jobs",
  },
  {
    text: "The best way to predict the future is to create it.",
    author: "Peter Drucker",
  },
  {
    text: "The question isn't who is going to let me; it's who is going to stop me.",
    author: "Ayn Rand",
  },
  {
    text: "The biggest risk is not taking any risk... In a world that is changing quickly, the only strategy that is guaranteed to fail is not taking risks.",
    author: "Mark Zuckerberg",
  },
  {
    text: "Risk more than others think is safe. Dream more than others think is practical.",
    author: "Howard Schultz",
  },
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    text: "The function of leadership is to produce more leaders, not more followers.",
    author: "Ralph Nader",
  },
  {
    text: "It's not about ideas. It's about making ideas happen.",
    author: "Scott Belsky",
  },
  {
    text: "Chase the vision, not the money; the money will end up following you.",
    author: "Tony Hsieh",
  },
  {
    text: "The value of an idea lies in the using of it.",
    author: "Thomas Edison",
  },
  {
    text: "If you are not willing to risk the usual, you will have to settle for the ordinary.",
    author: "Jim Rohn",
  },
  {
    text: "The only thing worse than starting something and failing... is not starting something.",
    author: "Seth Godin",
  },
  {
    text: "I find that the harder I work, the more luck I seem to have.",
    author: "Thomas Jefferson",
  },
  {
    text: "Success is not in what you have, but who you are.",
    author: "Bo Bennett",
  },
  {
    text: "You can't use up creativity. The more you use, the more you have.",
    author: "Maya Angelou",
  },
  {
    text: "Success usually comes to those who are too busy to be looking for it.",
    author: "Henry David Thoreau",
  },
  {
    text: "I never dreamed about success, I worked for it.",
    author: "Estée Lauder",
  },
  {
    text: "I find that when you have a real interest in life and a curious life, that sleep is not the most important thing.",
    author: "Martha Stewart",
  },
  {
    text: "You may have to fight a battle more than once to win it.",
    author: "Margaret Thatcher",
  },
  {
    text: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
    author: "Albert Schweitzer",
  },
  {
    text: "The only thing worse than starting something and failing... is not starting something.",
    author: "Seth Godin",
  },
  {
    text: "I'm not lazy, I'm on energy-saving mode.",
    author: "Anonymous",
  },
  {
    text: "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    author: "Anonymous",
  },
  {
    text: "I'm not arguing, I'm just explaining why I'm right.",
    author: "Anonymous",
  },
  {
    text: "I'm not clumsy, it's just the floor hates me, the tables and chairs are bullies, and the walls get in my way.",
    author: "Anonymous",
  },
  {
    text: "I'm not short, I'm just more down to earth than most people.",
    author: "Anonymous",
  },
  {
    text: "I'm not a complete idiot, some parts are missing.",
    author: "Anonymous",
  },
  {
    text: "I don't need anger management. I need people to stop pissing me off.",
    author: "Anonymous",
  },
  {
    text: "I'm not lazy, I'm just very relaxed.",
    author: "Anonymous",
  },
  {
    text: "I don't need a hairstylist, my pillow gives me a new hairstyle every morning.",
    author: "Anonymous",
  },
  {
    text: "I'm not arguing, I'm just explaining why I'm right... Again.",
    author: "Anonymous",
  },
  {
    text: "I'm not late, everyone else is just early.",
    author: "Anonymous",
  },
  {
    text: "I don't have a bad handwriting, I have my own font.",
    author: "Anonymous",
  },
  {
    text: "I'm not shy, I'm just keeping my awesomeness inside.",
    author: "Anonymous",
  },
  {
    text: "I don't have a bucket list, but my fucket list is a mile long.",
    author: "Anonymous",
  },
  {
    text: "I'm not a vegetarian because I love animals. I'm a vegetarian because I hate plants.",
    author: "A. Whitney Brown",
  },
  {
    text: "I don't have an attitude problem. You have a perception problem.",
    author: "Anonymous",
  },
  {
    text: "I'm not a complete idiot, some parts are missing.",
    author: "Anonymous",
  },
  {
    text: "I don't suffer from insanity, I enjoy every minute of it.",
    author: "Anonymous",
  },
  {
    text: "I'm not weird, I'm limited edition.",
    author: "Anonymous",
  },
  {
    text: "I don't snore. I dream I'm a motorcycle.",
    author: "Anonymous",
  },
  {
    text: "I'm not short, I'm concentrated awesome.",
    author: "Anonymous",
  },
  {
    text: "I don't trust people who dislike dogs, but I trust a dog when it dislikes a person.",
    author: "Anonymous",
  },
  {
    text: "I'm not arguing, I'm just explaining why I'm right... Slowly and in simple words.",
    author: "Anonymous",
  },
  {
    text: "I don't need a hairstylist, my pillow gives me a new hairstyle every morning.",
    author: "Anonymous",
  },
  {
    text: "I'm not lazy, I'm on energy-saving mode.",
    author: "Anonymous",
  },
  {
    text: "I don't need anger management. I need people to stop pissing me off.",
    author: "Anonymous",
  },
  {
    text: "I'm not clumsy, it's just the floor hates me, the tables and chairs are bullies, and the walls get in my way.",
    author: "Anonymous",
  },
  {
    text: "I'm not shy, I'm just keeping my awesomeness inside.",
    author: "Anonymous",
  },
  {
    text: "I don't have an attitude problem. You have a perception problem.",
    author: "Anonymous",
  },
  {
    text: "I'm not a complete idiot, some parts are missing.",
    author: "Anonymous",
  },
  {
    text: "I don't suffer from insanity, I enjoy every minute of it.",
    author: "Anonymous",
  },
  {
    text: "I'm not a complete idiot, some parts are missing.",
    author: "Anonymous",
  },
  {
    text: "I don't have a bucket list, but my fucket list is a mile long.",
    author: "Anonymous",
  },
  {
    text: "I'm not a vegetarian because I love animals. I'm a vegetarian because I hate plants.",
    author: "A. Whitney Brown",
  },
  {
    text: "I don't have a bad handwriting, I have my own font.",
    author: "Anonymous",
  },
  {
    text: "I'm not late, everyone else is just early.",
    author: "Anonymous",
  },
  {
    text: "I'm not arguing, I'm just explaining why I'm right... Again.",
    author: "Anonymous",
  },
  {
    text: "I don't need a hairstylist, my pillow gives me a new hairstyle every morning.",
    author: "Anonymous",
  },
  {
    text: "I'm not lazy, I'm just very relaxed.",
    author: "Anonymous",
  },
  {
    text: "I'm not shy, I'm just keeping my awesomeness inside.",
    author: "Anonymous",
  },
  {
    text: "I'm not short, I'm concentrated awesome.",
    author: "Anonymous",
  },
  {
    text: "I'm not arguing, I'm just explaining why I'm right.",
    author: "Anonymous",
  },
  {
    text: "I'm not clumsy, it's just the floor hates me, the tables and chairs are bullies, and the walls get in my way.",
    author: "Anonymous",
  },
  {
    text: "I'm not late, everyone else is just early.",
    author: "Anonymous",
  },
  {
    text: "I'm not a complete idiot, some parts are missing.",
    author: "Anonymous",
  },
  {
    text: "I'm not a complete idiot, some parts are missing.",
    author: "Anonymous",
  },
  {
    text: "I'm not weird, I'm limited edition.",
    author: "Anonymous",
  },
  {
    text: "I'm not snoring, I'm just testing my lung capacity.",
    author: "Anonymous",
  },
  {
    text: "I'm not arguing, I'm just explaining why I'm right... Slowly and in simple words.",
    author: "Anonymous",
  },
  {
    text: "I'm not arguing, I'm just explaining why I'm right.",
    author: "Anonymous",
  },

  {
    text: "Opportunities don't happen, you create them.",
    author: "Chris Grosser",
  },
  {
    text: "Love is the sanctuary where our souls find solace in each other.",
    author: "Anonymous",
  },
  {
    text: "In your embrace, I find the warmth that melts away all fears.",
    author: "Unknown",
  },
  {
    text: "Love is the melody that sings in the silence between our words.",
    author: "Anonymous",
  },
  {
    text: "With you, every moment is a glimpse into the eternity of love.",
    author: "Unknown",
  },
  {
    text: "Love is the language spoken by our souls in the quiet of the night.",
    author: "Anonymous",
  },
  {
    text: "Family is not an important thing. It's everything.",
    author: "Michael J. Fox",
  },
  {
    text: "In family life, love is the oil that eases friction, the cement that binds closer together, and the music that brings harmony.",
    author: "Friedrich Nietzsche",
  },
  {
    text: "Family means no one gets left behind or forgotten.",
    author: "David Ogden Stiers",
  },
  {
    text: "The love of family is life's greatest blessing.",
    author: "Anonymous",
  },
  {
    text: "Other things may change us, but we start and end with the family.",
    author: "Anthony Brandt",
  },
  {
    text: "Family is where life begins and love never ends.",
    author: "Anonymous",
  },
  {
    text: "The most important thing in the world is family and love.",
    author: "John Wooden",
  },
  {
    text: "Family is like branches on a tree, we all grow in different directions yet our roots remain as one.",
    author: "Anonymous",
  },
  {
    text: "The family is one of nature's masterpieces.",
    author: "George Santayana",
  },
  {
    text: "Family and friends are hidden treasures, seek them and enjoy their riches.",
    author: "Wanda Hope Carter",
  },
  {
    text: "Family is the heart of a home.",
    author: "Anonymous",
  },
  {
    text: "A happy family is but an earlier heaven.",
    author: "George Bernard Shaw",
  },
  {
    text: "Family is not an important thing. It's everything.",
    author: "Michael J. Fox",
  },
  {
    text: "Family is where life begins & love never ends.",
    author: "Anonymous",
  },
  {
    text: "Rejoice with your family in the beautiful land of life.",
    author: "Albert Einstein",
  },
  {
    text: "The love of a family is life's greatest blessing.",
    author: "Anonymous",
  },
  {
    text: "Family is a life jacket in the stormy sea of life.",
    author: "J.K. Rowling",
  },
  {
    text: "Family and friendships are two of the greatest facilitators of happiness.",
    author: "John C. Maxwell",
  },
  {
    text: "Family is not an important thing, it's everything.",
    author: "Michael J. Fox",
  },
  {
    text: "Family is not an important thing. It's everything.",
    author: "Michael J. Fox",
  },
  {
    text: "In family life, love is the oil that eases friction, the cement that binds closer together, and the music that brings harmony.",
    author: "Friedrich Nietzsche",
  },
  {
    text: "A friend is someone who knows all about you and still loves you.",
    author: "Elbert Hubbard",
  },
  {
    text: "A real friend is one who walks in when the rest of the world walks out.",
    author: "Walter Winchell",
  },
  {
    text: "Friendship is born at that moment when one person says to another, 'What! You too? I thought I was the only one.'",
    author: "C.S. Lewis",
  },
  {
    text: "Friendship is the only cement that will ever hold the world together.",
    author: "Woodrow Wilson",
  },
  {
    text: "A true friend is someone who is there for you when they would rather be somewhere else.",
    author: "Len Wein",
  },
  {
    text: "A friend is someone who gives you total freedom to be yourself.",
    author: "Jim Morrison",
  },
  {
    text: "Friendship is the hardest thing in the world to explain. It's not something you learn in school. But if you haven't learned the meaning of friendship, you really haven't learned anything.",
    author: "Muhammad Ali",
  },
  {
    text: "True friendship comes when the silence between two people is comfortable.",
    author: "David Tyson Gentry",
  },
  {
    text: "Friendship is the shadow of the evening, which increases with the setting sun of life.",
    author: "Jean de La Fontaine",
  },
  {
    text: "Friendship is a single soul dwelling in two bodies.",
    author: "Aristotle",
  },
  {
    text: "A friend is what the heart needs all the time.",
    author: "Henry Van Dyke",
  },
  {
    text: "A true friend is the greatest of all blessings, and that which we take the least care of all to acquire.",
    author: "Francois de La Rochefoucauld",
  },
  {
    text: "The only way to have a friend is to be one.",
    author: "Ralph Waldo Emerson",
  },
  {
    text: "A friend is one that knows you as you are, understands where you have been, accepts what you have become, and still, gently allows you to grow.",
    author: "William Shakespeare",
  },
  {
    text: "Friends show their love in times of trouble, not in happiness.",
    author: "Euripides",
  },
  {
    text: "A true friend is someone who is there for you when he'd rather be anywhere else.",
    author: "Len Wein",
  },
  {
    text: "A friend is someone who makes it easy to believe in yourself.",
    author: "Heidi Wills",
  },
  {
    text: "Friendship is the golden thread that ties the heart of all the world.",
    author: "John Evelyn",
  },
  {
    text: "A friend is one of the nicest things you can have and one of the best things you can be.",
    author: "Winnie The Pooh",
  },
  {
    text: "A friend is someone who understands your past, believes in your future, and accepts you just the way you are.",
    author: "Unknown",
  },
  {
    text: "A friend is someone who knows the song in your heart and can sing it back to you when you have forgotten the words.",
    author: "C.S. Lewis",
  },
  {
    text: "A friend is someone who can see the truth and pain in you even when you are fooling everyone else.",
    author: "Unknown",
  },
  {
    text: "A friend is someone who gives you total freedom to be yourself.",
    author: "Jim Morrison",
  },
  {
    text: "Friendship is the only cement that will ever hold the world together.",
    author: "Woodrow Wilson",
  },
  {
    text: "Friendship is born at that moment when one person says to another, 'What! You too? I thought I was the only one.'",
    author: "C.S. Lewis",
  },
  {
    text: "A true friend is someone who is there for you when they would rather be somewhere else.",
    author: "Len Wein",
  },
  {
    text: "A real friend is one who walks in when the rest of the world walks out.",
    author: "Walter Winchell",
  },
  {
    text: "A friend is someone who knows all about you and still loves you.",
    author: "Elbert Hubbard",
  },
  {
    text: "True friendship comes when the silence between two people is comfortable.",
    author: "David Tyson Gentry",
  },
  {
    text: "Friendship is the shadow of the evening, which increases with the setting sun of life.",
    author: "Jean de La Fontaine",
  },
  {
    text: "Friendship is a single soul dwelling in two bodies.",
    author: "Aristotle",
  },
  {
    text: "A friend is what the heart needs all the time.",
    author: "Henry Van Dyke",
  },
  {
    text: "A true friend is the greatest of all blessings, and that which we take the least care of all to acquire.",
    author: "Francois de La Rochefoucauld",
  },
  {
    text: "The only way to have a friend is to be one.",
    author: "Ralph Waldo Emerson",
  },
  {
    text: "A friend is one that knows you as you are, understands where you have been, accepts what you have become, and still, gently allows you to grow.",
    author: "William Shakespeare",
  },
  {
    text: "Friends show their love in times of trouble, not in happiness.",
    author: "Euripides",
  },
  {
    text: "A true friend is someone who is there for you when he'd rather be anywhere else.",
    author: "Len Wein",
  },
  {
    text: "Your life does not get better by chance, it gets better by change.",
    author: "Jim Rohn",
  },
  {
    text: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
  },
  {
    text: "The purpose of our lives is to be happy.",
    author: "Dalai Lama",
  },
  {
    text: "Life is like riding a bicycle. To keep your balance, you must keep moving.",
    author: "Albert Einstein",
  },
  {
    text: "The biggest adventure you can take is to live the life of your dreams.",
    author: "Oprah Winfrey",
  },
  {
    text: "Life is short, and it's up to you to make it sweet.",
    author: "Sarah Louise Delany",
  },
  {
    text: "The purpose of our lives is to be happy.",
    author: "Dalai Lama",
  },
  {
    text: "Life is not a problem to be solved, but a reality to be experienced.",
    author: "Soren Kierkegaard",
  },
  {
    text: "Life is really simple, but we insist on making it complicated.",
    author: "Confucius",
  },
  {
    text: "Life is a journey that must be traveled no matter how bad the roads and accommodations.",
    author: "Oliver Goldsmith",
  },
  {
    text: "Life is 10% what happens to us and 90% how we react to it.",
    author: "Charles R. Swindoll",
  },
  {
    text: "Life is what we make it, always has been, always will be.",
    author: "Grandma Moses",
  },
  {
    text: "In three words I can sum up everything I've learned about life: it goes on.",
    author: "Robert Frost",
  },
  {
    text: "Life is a succession of lessons which must be lived to be understood.",
    author: "Helen Keller",
  },
  {
    text: "Life is not about waiting for the storm to pass but learning to dance in the rain.",
    author: "Vivian Greene",
  },
  {
    text: "Life is either a daring adventure or nothing at all.",
    author: "Helen Keller",
  },
  {
    text: "Life is a long lesson in humility.",
    author: "James M. Barrie",
  },
  {
    text: "Life is a question and how we live it is our answer.",
    author: "Gary Keller",
  },
  {
    text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
  },
  {
    text: "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.",
    author: "Ralph Waldo Emerson",
  },
  {
    text: "Life is either a daring adventure or nothing.",
    author: "Helen Keller",
  },
  {
    text: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
  },
  {
    text: "Life is like riding a bicycle. To keep your balance, you must keep moving.",
    author: "Albert Einstein",
  },
  {
    text: "The biggest adventure you can take is to live the life of your dreams.",
    author: "Oprah Winfrey",
  },
  {
    text: "Life is short, and it's up to you to make it sweet.",
    author: "Sarah Louise Delany",
  },
  {
    text: "The purpose of our lives is to be happy.",
    author: "Dalai Lama",
  },
  {
    text: "Life is not a problem to be solved, but a reality to be experienced.",
    author: "Soren Kierkegaard",
  },
  {
    text: "Life is really simple, but we insist on making it complicated.",
    author: "Confucius",
  },
  {
    text: "Life is a journey that must be traveled no matter how bad the roads and accommodations.",
    author: "Oliver Goldsmith",
  },
  {
    text: "Life is 10% what happens to us and 90% how we react to it.",
    author: "Charles R. Swindoll",
  },
  {
    text: "Life is what we make it, always has been, always will be.",
    author: "Grandma Moses",
  },
  {
    text: "In three words I can sum up everything I've learned about life: it goes on.",
    author: "Robert Frost",
  },
  {
    text: "Life is a succession of lessons which must be lived to be understood.",
    author: "Helen Keller",
  },
  {
    text: "Life is not about waiting for the storm to pass but learning to dance in the rain.",
    author: "Vivian Greene",
  },
  {
    text: "Life is either a daring adventure or nothing at all.",
    author: "Helen Keller",
  },
  {
    text: "Life is a long lesson in humility.",
    author: "James M. Barrie",
  },
  {
    text: "Life is a question and how we live it is our answer.",
    author: "Gary Keller",
  },
  {
    text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
  },
  {
    text: "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.",
    author: "Ralph Waldo Emerson",
  },
  {
    text: "Life is either a daring adventure or nothing.",
    author: "Helen Keller",
  },
  {
    text: "A friend is someone who makes it easy to believe in yourself.",
    author: "Heidi Wills",
  },
  {
    text: "Family means no one gets left behind or forgotten.",
    author: "David Ogden Stiers",
  },
  {
    text: "The love of family is life's greatest blessing.",
    author: "Anonymous",
  },
  {
    text: "Other things may change us, but we start and end with the family.",
    author: "Anthony Brandt",
  },
  {
    text: "Family is where life begins and love never ends.",
    author: "Anonymous",
  },
  {
    text: "The most important thing in the world is family and love.",
    author: "John Wooden",
  },
  {
    text: "Family is like branches on a tree, we all grow in different directions yet our roots remain as one.",
    author: "Anonymous",
  },
  {
    text: "The family is one of nature's masterpieces.",
    author: "George Santayana",
  },
  {
    text: "Family and friends are hidden treasures, seek them and enjoy their riches.",
    author: "Wanda Hope Carter",
  },
  {
    text: "Family is the heart of a home.",
    author: "Anonymous",
  },
  {
    text: "A happy family is but an earlier heaven.",
    author: "George Bernard Shaw",
  },
  {
    text: "Family is not an important thing. It's everything.",
    author: "Michael J. Fox",
  },
  {
    text: "Family is where life begins & love never ends.",
    author: "Anonymous",
  },
  {
    text: "Rejoice with your family in the beautiful land of life.",
    author: "Albert Einstein",
  },
  {
    text: "The love of a family is life's greatest blessing.",
    author: "Anonymous",
  },
  {
    text: "Family is a life jacket in the stormy sea of life.",
    author: "J.K. Rowling",
  },
  {
    text: "Family and friendships are two of the greatest facilitators of happiness.",
    author: "John C. Maxwell",
  },
  {
    text: "Family is not an important thing, it's everything.",
    author: "Michael J. Fox",
  },
  {
    text: "Family is not an important thing. It's everything.",
    author: "Michael J. Fox",
  },
  {
    text: "In family life, love is the oil that eases friction, the cement that binds closer together, and the music that brings harmony.",
    author: "Friedrich Nietzsche",
  },
  {
    text: "Family means no one gets left behind or forgotten.",
    author: "David Ogden Stiers",
  },
  {
    text: "The love of family is life's greatest blessing.",
    author: "Anonymous",
  },
  {
    text: "Other things may change us, but we start and end with the family.",
    author: "Anthony Brandt",
  },
  {
    text: "Family is where life begins and love never ends.",
    author: "Anonymous",
  },
  {
    text: "The most important thing in the world is family and love.",
    author: "John Wooden",
  },
  {
    text: "Family is like branches on a tree, we all grow in different directions yet our roots remain as one.",
    author: "Anonymous",
  },
  {
    text: "The family is one of nature's masterpieces.",
    author: "George Santayana",
  },
  {
    text: "Family and friends are hidden treasures, seek them and enjoy their riches.",
    author: "Wanda Hope Carter",
  },
  {
    text: "Family is the heart of a home.",
    author: "Anonymous",
  },
  {
    text: "A happy family is but an earlier heaven.",
    author: "George Bernard Shaw",
  },

  {
    text: "In your eyes, I find the reflection of a love that knows no bounds.",
    author: "Unknown",
  },
  {
    text: "Love is the sunrise that paints the sky of our dreams with colors of hope.",
    author: "Anonymous",
  },
  {
    text: "With you, every heartbeat is a symphony of love's sweetest serenade.",
    author: "Unknown",
  },
  {
    text: "Love is the gentle breeze that whispers secrets of the heart.",
    author: "Anonymous",
  },
  {
    text: "In your touch, I feel the electricity of love's divine spark.",
    author: "Unknown",
  },
  {
    text: "Love is the journey where every step brings us closer to forever.",
    author: "Anonymous",
  },
  {
    text: "With you, every day is a canvas painted with strokes of love's beauty.",
    author: "Unknown",
  },
  {
    text: "Love is the tapestry woven from the threads of our shared memories.",
    author: "Anonymous",
  },
  {
    text: "In your laughter, I find the ,melody that fills my soul with joy.",
    author: "Unknown",
  },
  {
    text: "Love is the symphony that plays in the silence of our embraces.",
    author: "Anonymous",
  },
  {
    text: "With you, every heartbeat is a dance to love's eternal rhythm.",
    author: "Unknown",
  },
  {
    text: "Love is the fragrance that lingers in the spaces between our breaths.",
    author: "Anonymous",
  },
  {
    text: "In your kiss, I taste the sweetness of a love that knows no end.",
    author: "Unknown",
  },
  {
    text: "Love is the melody that echoes in the chambers of our hearts.",
    author: "Anonymous",
  },
  {
    text: "With you, every moment is a symphony of love's infinite grace.",
    author: "Unknown",
  },
  {
    text: "Love is the poetry written on the pages of our intertwined souls.",
    author: "Anonymous",
  },
  {
    text: "In your arms, I find the sanctuary where my spirit finds rest.",
    author: "Unknown",
  },
  {
    text: "A mother's love is unconditional, selfless, and knows no bounds.",
    author: "Unknown",
  },
  {
    text: "Motherhood: All love begins and ends there.",
    author: "Robert Browning",
  },
  {
    text: "A mother is she who can take the place of all others but whose place no one else can take.",
    author: "Unknown",
  },
  {
    text: "A mother's arms are more comforting than anyone else's.",
    author: "Princess Diana",
  },
  {
    text: "The influence of a mother in the lives of her children is beyond calculation.",
    author: "James E. Faust",
  },
  {
    text: "A mother's happiness is like a beacon, lighting up the future but reflected also on the past in the guise of fond memories.",
    author: "Honore de Balzac",
  },
  {
    text: "A mother's love is patient and forgiving when all others are forsaking, it never fails or falters, even though the heart is breaking.",
    author: "Helen Rice",
  },
  {
    text: "A mother is not a person to lean on but a person to make leaning unnecessary.",
    author: "Dorothy Canfield Fisher",
  },
  {
    text: "Sisters may drive you crazy, get into your stuff, and irritate you. However, if anyone else dares say so, a sister will defend you to the death.",
    author: "Unknown",
  },
  {
    text: "A sister is both your mirror – and your opposite.",
    author: "Elizabeth Fishel",
  },
  {
    text: "Having a sister is like having a best friend you can’t get rid of. You know whatever you do, they’ll still be there.",
    author: "Amy Li",
  },
  {
    text: "Sisters function as safety nets in a chaotic world simply by being there for each other.",
    author: "Carol Saline",
  },
  {
    text: "A sister is a gift to the heart, a friend to the spirit, a golden thread to the meaning of life.",
    author: "Isadora James",
  },
  {
    text: "A sister is a little bit of childhood that can never be lost.",
    author: "Marion C. Garretty",
  },
  {
    text: "Sisters are different flowers from the same garden.",
    author: "Unknown",
  },
  {
    text: "A sister is someone who knows everything about you and loves you anyway.",
    author: "Unknown",
  },
  {
    text: "A sister is a forever friend.",
    author: "Unknown",
  },
  {
    text: "A sister is a gift from God, sent from above to make life worthwhile here below.",
    author: "Unknown",
  },
  {
    text: "Sisters share childhood memories and grown-up dreams.",
    author: "Unknown",
  },
  {
    text: "Sisters are the perfect best friend.",
    author: "Unknown",
  },
  {
    text: "A sister is a little bit of childhood that can never be lost.",
    author: "Marion C. Garretty",
  },
  {
    text: "Sisters are different flowers from the same garden.",
    author: "Unknown",
  },
  {
    text: "Sisters are angels who lift us up when our wings forget how to fly.",
    author: "Unknown",
  },
  {
    text: "Sisters are like flowers in the garden of life.",
    author: "Unknown",
  },
  {
    text: "A sister is a little bit of childhood that can never be lost.",
    author: "Marion C. Garretty",
  },
  {
    text: "A sister is a forever friend.",
    author: "Unknown",
  },
  {
    text: "A sister is someone who knows everything about you and loves you anyway.",
    author: "Unknown",
  },
  {
    text: "A sister is a gift from God, sent from above to make life worthwhile here below.",
    author: "Unknown",
  },
  {
    text: "Sometimes being a brother is even better than being a superhero.",
    author: "Marc Brown",
  },
  {
    text: "There is no love like the love for a brother. There is no love like the love from a brother.",
    author: "Astrid Alauda",
  },
  {
    text: "A brother is a friend given by nature.",
    author: "Jean Baptiste Legouve",
  },
  {
    text: "Leadership is not about being in charge. It is about taking care of those in your charge.",
    author: "Simon Sinek",
  },
  {
    text: "The name of the LORD is a strong tower; the righteous man runs into it and is safe.",
    author: "Proverbs 18:10 (Bible)",
  },
  {
    text: "Jesus said to him, I am the way, and the truth, and the life. No one comes to the Father except through me.",
    author: "John 14:6 (Bible)",
  },
  {
    text: "The LORD bless you and keep you; the LORD make his face to shine upon you and be gracious to you; the LORD lift up his countenance upon you and give you peace.",
    author: "Numbers 6:24-26 (Bible)",
  },
  {
    text: "And now these three remain: faith, hope and love. But the greatest of these is love.",
    author: "1 Corinthians 13:13 (Bible)",
  },
  {
    text: "And without faith it is impossible to please him, for whoever would draw near to God must believe that he exists and that he rewards those who seek him.",
    author: "Hebrews 11:6 (Bible)",
  },
  {
    text: "For God gave us a spirit not of fear but of power and love and self-control.",
    author: "2 Timothy 1:7 (Bible)",
  },
  {
    text: "For I am sure that neither death nor life, nor angels nor rulers, nor things present nor things to come, nor powers, nor height nor depth, nor anything else in all creation, will be able to separate us from the love of God in Christ Jesus our Lord.",
    author: "Romans 8:38-39 (Bible)",
  },
  {
    text: "But God shows his love for us in that while we were still sinners, Christ died for us.",
    author: "Romans 5:8 (Bible)",
  },
  {
    text: "The world is a book, and those who do not travel read only one page.",
    author: "Saint Augustine",
  },
  {
    text: "Travel is fatal to prejudice, bigotry, and narrow-mindedness.",
    author: "Mark Twain",
  },
  {
    text: "The gladdest moment in human life is a departure into unknown lands.",
    author: "Sir Richard Burton",
  },
  {
    text: "To travel is to take a journey into yourself.",
    author: "Danny Kaye",
  },
  {
    text: "A journey is best measured in friends, rather than miles.",
    author: "Tim Cahill",
  },
  {
    text: "Travel makes one modest. You see what a tiny place you occupy in the world.",
    author: "Gustave Flaubert",
  },
  {
    text: "Once a year, go someplace you've never been before.",
    author: "Dalai Lama",
  },
  {
    text: "Traveling – it leaves you speechless, then turns you into a storyteller.",
    author: "Ibn Battuta",
  },
  {
    text: "Travel far enough, you meet yourself.",
    author: "David Mitchell",
  },
  {
    text: "The real voyage of discovery consists not in seeking new landscapes, but in having new eyes.",
    author: "Marcel Proust",
  },
  {
    text: "Travel and change of place impart new vigor to the mind.",
    author: "Seneca",
  },
  {
    text: "Adventure is worthwhile.",
    author: "Aesop",
  },
  {
    text: "To travel is to discover that everyone is wrong about other countries.",
    author: "Aldous Huxley",
  },
  {
    text: "Traveling is not something you're good at. It's something you do, like breathing.",
    author: "Gayle Foreman",
  },
  {
    text: "The journey itself is my home.",
    author: "Basho",
  },
  {
    text: "Travel is never a matter of money but of courage.",
    author: "Paulo Coelho",
  },
  {
    text: "Travel is glamorous only in retrospect.",
    author: "Paul Theroux",
  },
  {
    text: "The traveler sees what he sees. The tourist sees what he has come to see.",
    author: "G.K. Chesterton",
  },
  {
    text: "Travel is more than the seeing of sights; it is a change that goes on, deep and permanent, in the ideas of living.",
    author: "Miriam Beard",
  },
  {
    text: "A good traveler has no fixed plans and is not intent on arriving.",
    author: "Lao Tzu",
  },
  {
    text: "Travel is the only thing you buy that makes you richer.",
    author: "Unknown",
  },
  {
    text: "Wherever you go becomes a part of you somehow.",
    author: "Anita Desai",
  },
  {
    text: "Travel far enough, you meet yourself.",
    author: "David Mitchell",
  },
  {
    text: "The journey not the arrival matters.",
    author: "T.S. Eliot",
  },
  {
    text: "Wanderlust: n. a strong desire for or impulse to wander or travel and explore the world.",
    author: "Unknown",
  },
  {
    text: "Travel is the only thing you buy that makes you richer.",
    author: "Unknown",
  },
  {
    text: "Traveling – it leaves you speechless, then turns you into a storyteller.",
    author: "Ibn Battuta",
  },
  {
    text: "To travel is to take a journey into yourself.",
    author: "Danny Kaye",
  },
  {
    text: "The world is a book, and those who do not travel read only one page.",
    author: "Saint Augustine",
  },
  {
    text: "Travel is fatal to prejudice, bigotry, and narrow-mindedness.",
    author: "Mark Twain",
  },
  {
    text: "A leader is one who knows the way, goes the way, and shows the way.",
    author: "John C. Maxwell",
  },
  {
    text: "The greatest leader is not necessarily the one who does the greatest things. He is the one that gets the people to do the greatest things.",
    author: "Ronald Reagan",
  },
  {
    text: "Leadership is the capacity to translate vision into reality.",
    author: "Warren Bennis",
  },
  {
    text: "The function of leadership is to produce more leaders, not more followers.",
    author: "Ralph Nader",
  },
  {
    text: "Leadership is the art of giving people a platform for spreading ideas that work.",
    author: "Seth Godin",
  },
  {
    text: "Leadership is not about titles, positions, or flowcharts. It is about one life influencing another.",
    author: "John C. Maxwell",
  },
  {
    text: "A genuine leader is not a searcher for consensus but a molder of consensus.",
    author: "Martin Luther King Jr.",
  },
  {
    text: "Leadership is the capacity to influence others through inspiration, motivated by passion, generated by vision, produced by a conviction, ignited by a purpose.",
    author: "Myles Munroe",
  },
  {
    text: "Leadership is not about being in charge. It is about taking care of those in your charge.",
    author: "Simon Sinek",
  },
  {
    text: "A leader is one who knows the way, goes the way, and shows the way.",
    author: "John C. Maxwell",
  },
  {
    text: "The greatest leader is not necessarily the one who does the greatest things. He is the one that gets the people to do the greatest things.",
    author: "Ronald Reagan",
  },
  {
    text: "Leadership is the capacity to translate vision into reality.",
    author: "Warren Bennis",
  },
  {
    text: "The function of leadership is to produce more leaders, not more followers.",
    author: "Ralph Nader",
  },
  {
    text: "Leadership is the art of giving people a platform for spreading ideas that work.",
    author: "Seth Godin",
  },
  {
    text: "Leadership is not about titles, positions, or flowcharts. It is about one life influencing another.",
    author: "John C. Maxwell",
  },
  {
    text: "A genuine leader is not a searcher for consensus but a molder of consensus.",
    author: "Martin Luther King Jr.",
  },
  {
    text: "Leadership is the capacity to influence others through inspiration, motivated by passion, generated by vision, produced by a conviction, ignited by a purpose.",
    author: "Myles Munroe",
  },
  {
    text: "Leadership is the capacity to translate vision into reality.",
    author: "Warren Bennis",
  },
  {
    text: "The function of leadership is to produce more leaders, not more followers.",
    author: "Ralph Nader",
  },
  {
    text: "Brothers are what best friends can never be.",
    author: "Unknown",
  },
  {
    text: "A brother shares childhood memories and grown-up dreams.",
    author: "Unknown",
  },
  {
    text: "A brother is a friend who is always there for you no matter what.",
    author: "Unknown",
  },
  {
    text: "A brother is a friend given by nature.",
    author: "Unknown",
  },
  {
    text: "A brother is a friend who knows all about you and still loves you.",
    author: "Unknown",
  },
  {
    text: "A brother is a built-in best friend.",
    author: "Unknown",
  },
  {
    text: "A brother is a friend who is always there for you no matter what.",
    author: "Unknown",
  },
  {
    text: "A brother is a friend who knows all about you and still loves you.",
    author: "Unknown",
  },
  {
    text: "A brother is a built-in best friend.",
    author: "Unknown",
  },
  {
    text: "Brothers are playmates in the beginning and best friends for life.",
    author: "Unknown",
  },
  {
    text: "A brother is a friend who is always there for you when you need him.",
    author: "Unknown",
  },
  {
    text: "A brother is a friend who is always there to protect you.",
    author: "Unknown",
  },
  {
    text: "Brothers may fight, but they also know each other better than anyone else.",
    author: "Unknown",
  },
  {
    text: "Brothers are like streetlights along the road, they don't make the distance any shorter, but they light up the path and make the journey worthwhile.",
    author: "Unknown",
  },
  {
    text: "A brother is a friend who is always there for you when you need him.",
    author: "Unknown",
  },
  {
    text: "A brother is a friend who is always there to protect you.",
    author: "Unknown",
  },
  {
    text: "Brothers may fight, but they also know each other better than anyone else.",
    author: "Unknown",
  },
  {
    text: "To the world, you are a mother, but to your family, you are the world.",
    author: "Unknown",
  },
  {
    text: "The love of a mother is the veil of a softer light between the heart and the heavenly Father.",
    author: "Samuel Taylor Coleridge",
  },
  {
    text: "A mother's love is the fuel that enables a normal human being to do the impossible.",
    author: "Marion C. Garretty",
  },
  {
    text: "A mother's love for her child is like nothing else in the world. It knows no law, no pity, it dates all things and crushes down remorselessly all that stands in its path.",
    author: "Agatha Christie",
  },
  {
    text: "The art of mothering is to teach the art of living to children.",
    author: "Elaine Heffner",
  },
  {
    text: "The heart of a mother is a deep abyss at the bottom of which you will always find forgiveness.",
    author: "Honore de Balzac",
  },
  {
    text: "Motherhood is the exquisite inconvenience of being another person's everything.",
    author: "Unknown",
  },
  {
    text: "A mother's love is the purest form of human affection. It knows no boundaries, no limitations, and no conditions.",
    author: "Unknown",
  },
  {
    text: "A mother's love is the greatest love of all.",
    author: "Whitney Houston",
  },
  {
    text: "A mother's love is the peace that lies deep within the heart of a child.",
    author: "Unknown",
  },
  {
    text: "A mother's love is like a beacon, guiding us through the darkest moments of life.",
    author: "Unknown",
  },
  {
    text: "A mother's love is the fuel that enables a child to do the impossible.",
    author: "Marion C. Garretty",
  },
  {
    text: "A father is someone you look up to no matter how tall you grow.",
    author: "Unknown",
  },
  {
    text: "A father carries pictures where his money used to be.",
    author: "Unknown",
  },
  {
    text: "A father is neither an anchor to hold us back nor a sail to take us there, but a guiding light whose love shows us the way.",
    author: "Unknown",
  },
  {
    text: "A father's love knows no distance.",
    author: "Unknown",
  },
  {
    text: "A father is someone who wants to catch you before you fall but instead picks you up, brushes you off, and lets you try again.",
    author: "Unknown",
  },
  {
    text: "A father is someone you can always look up to, no matter how tall you grow.",
    author: "Unknown",
  },
  {
    text: "A father is someone who carries pictures in his wallet where his money used to be.",
    author: "Unknown",
  },
  {
    text: "A father is neither an anchor to hold us back nor a sail to take us there, but a guiding light whose love shows us the way.",
    author: "Unknown",
  },
  {
    text: "A father's love knows no distance.",
    author: "Unknown",
  },
  {
    text: "A father is someone who wants to catch you before you fall but instead picks you up, brushes you off, and lets you try again.",
    author: "Unknown",
  },
  {
    text: "A father's love is forever imprinted on his child's heart.",
    author: "Unknown",
  },
  {
    text: "A father's love is a guiding force that shapes us and helps us become who we are.",
    author: "Unknown",
  },
  {
    text: "A father is someone who believes in you even when you have ceased to believe in yourself.",
    author: "Unknown",
  },
  {
    text: "A father's love is like no other. It's strong, patient, and supportive. It's a love that guides, inspires, and endures.",
    author: "Unknown",
  },
  {
    text: "A father's love is a guiding light that shines even on the darkest days.",
    author: "Unknown",
  },
  {
    text: "A father's love is the foundation upon which his children build their dreams.",
    author: "Unknown",
  },
  {
    text: "A father's love is unwavering, unconditional, and eternal.",
    author: "Unknown",
  },
  {
    text: "A father's love is like no other. It's strong, unwavering, and eternal.",
    author: "Unknown",
  },
  {
    text: "A father's love is a silent strength that guides us through life's challenges.",
    author: "Unknown",
  },
  {
    text: "A father's love is a steady hand that helps us navigate life's journey.",
    author: "Unknown",
  },
];
