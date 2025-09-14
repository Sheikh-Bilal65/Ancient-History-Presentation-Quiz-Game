// Ancient Indian History Presentation App
class PresentationApp {
    constructor() {
        this.currentSlide = 0;
        this.totalSlides = 0;
        this.slides = [];
        this.quizData = [];
        this.currentQuiz = null;
        this.selectedAnswer = null;
        
        // Data from JSON
        this.presentationData = {
            "topics": [
                {
                    "name": "Prehistoric and Indus Valley",
                    "slides": [
                        {
                            "title": "Stone Age Periods",
                            "content": [
                                "Paleolithic (Old Stone Age): Handaxes, choppers, cleavers",
                                "Mesolithic (Middle Stone Age): Microliths, animal domestication",
                                "Neolithic (New Stone Age): Pottery, farming, celt tools",
                                "Chalcolithic (Copper Age): First metal usage"
                            ],
                            "keyFacts": [
                                "Bhimbetka: Rock paintings in Madhya Pradesh",
                                "Bagor: Evidence of animal domestication in Rajasthan",
                                "Mehrgarh: Early farming evidence in Balochistan"
                            ]
                        },
                        {
                            "title": "Major Indus Valley Sites",
                            "content": [
                                "Rakhigarhi: Largest Indus site in India (Haryana)",
                                "Mohenjo-Daro: Great Bath, Dancing Girl (Pakistan)",
                                "Harappa: First discovered site (Pakistan)",
                                "Dholavira: Three-part city, water systems (Gujarat)",
                                "Lothal: Dockyard, port town (Gujarat)"
                            ],
                            "keyFacts": [
                                "Bronze Age civilization (2500-1500 BCE)",
                                "Grid city planning with covered drains",
                                "No evidence of horses",
                                "Seals made of steatite"
                            ]
                        }
                    ],
                    "quiz": [
                        {
                            "question": "Which is the largest Indus Valley site in India?",
                            "options": ["Harappa", "Rakhigarhi", "Dholavira", "Lothal"],
                            "correct": 1,
                            "explanation": "Rakhigarhi in Haryana is the largest Indus Valley site in India."
                        },
                        {
                            "question": "The Great Bath was found at which site?",
                            "options": ["Harappa", "Lothal", "Mohenjo-Daro", "Dholavira"],
                            "correct": 2,
                            "explanation": "The Great Bath was discovered at Mohenjo-Daro and was made watertight with natural tar."
                        }
                    ]
                },
                {
                    "name": "Vedic Age",
                    "slides": [
                        {
                            "title": "Four Vedas",
                            "content": [
                                "Rigveda: Hymns of praise (1,028 hymns, 10 mandalas)",
                                "Samaveda: Music and chants, basis of Indian music",
                                "Yajurveda: Sacrificial formulas (Krishna & Shukla)",
                                "Atharvaveda: Magic spells, healing, Ayurveda"
                            ],
                            "keyFacts": [
                                "Composed in Sanskrit",
                                "Rigveda is the oldest (1500-1000 BCE)",
                                "Gayatri Mantra from Rigveda Mandala 3",
                                "Composed by Sage Vishwamitra"
                            ]
                        },
                        {
                            "title": "Varna System & Society",
                            "content": [
                                "Brahmin: Priests (from Purusha's mouth)",
                                "Kshatriya: Warriors (from Purusha's arms)",
                                "Vaishya: Traders (from Purusha's thighs)",
                                "Shudra: Laborers (from Purusha's feet)"
                            ],
                            "keyFacts": [
                                "Four Ashramas: Brahmacharya, Grihastha, Vanaprastha, Sanyasa",
                                "Sabha and Samiti: Early assemblies",
                                "Vedic Aryans lived in Sapta-Sindhu region"
                            ]
                        }
                    ],
                    "quiz": [
                        {
                            "question": "Which Veda contains the Gayatri Mantra?",
                            "options": ["Samaveda", "Yajurveda", "Rigveda", "Atharvaveda"],
                            "correct": 2,
                            "explanation": "The Gayatri Mantra is found in Rigveda, Mandala 3, composed by Sage Vishwamitra."
                        }
                    ]
                },
                {
                    "name": "Jainism",
                    "slides": [
                        {
                            "title": "Jain Tirthankaras",
                            "content": [
                                "Total 24 Tirthankaras",
                                "1st: Rishabhanatha (Bull symbol)",
                                "23rd: Parshvanath (Snake symbol)", 
                                "24th: Vardhamana Mahavira (Lion symbol)"
                            ],
                            "keyFacts": [
                                "Born in Kundagram, Vaishali (6th century BC)",
                                "Left home at age 30 for enlightenment",
                                "Attained nirvana at Pavapuri"
                            ]
                        },
                        {
                            "title": "Jain Principles",
                            "content": [
                                "Triratna (Three Gems):",
                                "• Right Faith (Samyak Darshan)",
                                "• Right Knowledge (Samyak Gyan)",
                                "• Right Conduct (Samyak Charitra)"
                            ],
                            "keyFacts": [
                                "Two main sects: Digambara & Svetambara",
                                "Ahimsa: Non-violence principle",
                                "Sallekhana: Fasting unto death",
                                "Jain texts compiled at Vallabhi"
                            ]
                        }
                    ],
                    "quiz": [
                        {
                            "question": "What is the symbol of Mahavira?",
                            "options": ["Bull", "Lion", "Snake", "Elephant"],
                            "correct": 1,
                            "explanation": "Lion is the symbol of Mahavira, the 24th Tirthankara of Jainism."
                        }
                    ]
                },
                {
                    "name": "Buddhism",
                    "slides": [
                        {
                            "title": "Life of Buddha",
                            "content": [
                                "Born: Lumbini (Nepal), 623 BCE as Siddhartha",
                                "Enlightenment: Bodh Gaya under Bodhi tree",
                                "First Sermon: Sarnath (Dhammachakra Pravartana)",
                                "Death: Kushinagar (Mahaparinirvana)"
                            ],
                            "keyFacts": [
                                "Belonged to Sakya gana, Kshatriya varna",
                                "Mother: Maya, Father: Suddhodana",
                                "Spoke in Prakrit language"
                            ]
                        },
                        {
                            "title": "Buddhist Teachings",
                            "content": [
                                "Four Noble Truths",
                                "Eightfold Path (Ashtangika Marga)",
                                "Three Jewels: Buddha, Dhamma, Sangha",
                                "Two main sects: Hinayana & Mahayana"
                            ],
                            "keyFacts": [
                                "Buddhist Councils: 4 major councils held",
                                "Texts written in Pali language",
                                "Tripitaka: Three baskets of teachings"
                            ]
                        }
                    ],
                    "quiz": [
                        {
                            "question": "Where did Buddha attain enlightenment?",
                            "options": ["Lumbini", "Sarnath", "Bodh Gaya", "Kushinagar"],
                            "correct": 2,
                            "explanation": "Buddha attained enlightenment at Bodh Gaya under the Bodhi tree."
                        }
                    ]
                },
                {
                    "name": "Mahajanapadas",
                    "slides": [
                        {
                            "title": "16 Mahajanapadas",
                            "content": [
                                "Magadha: Rajagriha → Pataliputra (Bihar)",
                                "Kosala: Sravasti (Eastern UP)",
                                "Avanti: Ujjain (Madhya Pradesh)",
                                "Gandhara: Taxila (Pakistan)"
                            ],
                            "keyFacts": [
                                "Most powerful: Magadha",
                                "Rulers collected 1/6th tax on crops",
                                "Rise of iron technology",
                                "Beginning of coined money"
                            ]
                        },
                        {
                            "title": "Rise of Magadha",
                            "content": [
                                "Rulers: Bimbisara → Ajatashatru → Nandas",
                                "Capital shift: Rajagriha → Pataliputra",
                                "Last Nanda ruler: Dhana Nanda",
                                "Advantages: Iron deposits, fertile land, river transport"
                            ],
                            "keyFacts": [
                                "Bimbisara: Founder of Haryanka dynasty",
                                "Ajatashatru: Founded Pataliputra",
                                "Mahapadma Nanda: 'Destroyer of all Kshatriyas'"
                            ]
                        }
                    ],
                    "quiz": [
                        {
                            "question": "What was the capital of Magadha before Pataliputra?",
                            "options": ["Vaishali", "Rajagriha", "Ujjain", "Taxila"],
                            "correct": 1,
                            "explanation": "Rajagriha was the first capital of Magadha before it was shifted to Pataliputra."
                        }
                    ]
                },
                {
                    "name": "Mauryan Dynasty",
                    "slides": [
                        {
                            "title": "Mauryan Rulers",
                            "content": [
                                "Chandragupta Maurya (321-297 BCE): Founder",
                                "Bindusara (297-273 BCE): 'Amitrochates'",
                                "Ashoka (273-232 BCE): Greatest ruler",
                                "Decline after Ashoka's death"
                            ],
                            "keyFacts": [
                                "First pan-Indian empire",
                                "Capital: Pataliputra",
                                "Helped by Chanakya (Kautilya)",
                                "Arthashastra: Political treatise"
                            ]
                        },
                        {
                            "title": "Ashoka the Great",
                            "content": [
                                "Kalinga War (8th year): Turning point",
                                "Embraced Buddhism and Dhamma",
                                "Edicts in Prakrit, Greek, Aramaic",
                                "Sent missionaries to spread Buddhism"
                            ],
                            "keyFacts": [
                                "Lion Capital at Sarnath (National Emblem)",
                                "14 Major Rock Edicts",
                                "Sanchi Stupa construction",
                                "Dhamma Mahamattas appointed"
                            ]
                        }
                    ],
                    "quiz": [
                        {
                            "question": "After which war did Ashoka embrace Buddhism?",
                            "options": ["Hydaspes", "Kalinga", "Kurukshetra", "Tarain"],
                            "correct": 1,
                            "explanation": "Ashoka embraced Buddhism after the brutal Kalinga War in the 8th year of his reign."
                        }
                    ]
                },
                {
                    "name": "Gupta Dynasty",
                    "slides": [
                        {
                            "title": "Golden Age Rulers",
                            "content": [
                                "Chandragupta I (320-335 CE): Gupta Era founder",
                                "Samudragupta (335-375 CE): 'Napoleon of India'",
                                "Chandragupta II (375-415 CE): 'Vikramaditya'",
                                "Kumaragupta I: Founded Nalanda University"
                            ],
                            "keyFacts": [
                                "Peak of art, literature, science",
                                "Gold coins (Dinaras) issued",
                                "Iron Pillar of Delhi",
                                "Chinese traveler Fa Xian visited"
                            ]
                        },
                        {
                            "title": "Cultural Achievements",
                            "content": [
                                "Literature: Kalidasa's works (Shakuntala, Meghaduta)",
                                "Science: Aryabhata's astronomy",
                                "Mathematics: Decimal system, zero concept",
                                "Architecture: Ajanta-Ellora caves"
                            ],
                            "keyFacts": [
                                "Nagarasreshti: Chief merchant",
                                "Prayag Prashasti: Samudragupta's achievements",
                                "Nine gems (Navratna) in Chandragupta II's court"
                            ]
                        }
                    ],
                    "quiz": [
                        {
                            "question": "Who is known as the 'Napoleon of India'?",
                            "options": ["Chandragupta I", "Samudragupta", "Chandragupta II", "Skandagupta"],
                            "correct": 1,
                            "explanation": "Samudragupta is called the 'Napoleon of India' due to his military conquests and expansion of the empire."
                        }
                    ]
                },
                {
                    "name": "Chola Dynasty",
                    "slides": [
                        {
                            "title": "Great Chola Kings",
                            "content": [
                                "Vijayalaya (850 CE): Founder, captured Thanjavur",
                                "Rajaraja I (985-1014 CE): Built Brihadeshwara Temple",
                                "Rajendra I (1014-1044 CE): 'Gangaikonda Cholapuram'",
                                "Maritime expansion to Southeast Asia"
                            ],
                            "keyFacts": [
                                "Royal emblem: Tiger",
                                "Efficient naval power",
                                "Trade with China and Southeast Asia",
                                "Village self-governance system"
                            ]
                        },
                        {
                            "title": "Chola Administration",
                            "content": [
                                "Village assemblies: Sabha and Ur",
                                "Land classifications: Brahmadeya, Shalabhoga",
                                "Bronze sculpture techniques",
                                "Temple-centered economy"
                            ],
                            "keyFacts": [
                                "Vetti: Forced labor tax",
                                "Muvendavelan: Military officers",
                                "Dravidian temple architecture peak",
                                "Tanjore paintings originated"
                            ]
                        }
                    ],
                    "quiz": [
                        {
                            "question": "Which Chola king built the Brihadeshwara Temple?",
                            "options": ["Vijayalaya", "Rajaraja I", "Rajendra I", "Rajaraja II"],
                            "correct": 1,
                            "explanation": "Rajaraja I built the magnificent Brihadeshwara Temple at Thanjavur, a masterpiece of Dravidian architecture."
                        }
                    ]
                }
            ]
        };

        // Wait for DOM to be fully loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.init());
        } else {
            this.init();
        }
    }

    init() {
        this.generateSlides();
        this.bindEvents();
        this.updateUI();
        this.animateCurrentSlide();
    }

    generateSlides() {
        const slideContainer = document.querySelector('.slide-container');
        let slideIndex = 2; // Start after title and TOC slides

        // Generate content slides for each topic
        this.presentationData.topics.forEach((topic, topicIndex) => {
            // Topic overview slide
            const overviewSlide = this.createOverviewSlide(topic, slideIndex++);
            slideContainer.appendChild(overviewSlide);

            // Content slides for each topic
            topic.slides.forEach(slideData => {
                const contentSlide = this.createContentSlide(slideData, slideIndex++);
                slideContainer.appendChild(contentSlide);
            });

            // Quiz slide for the topic
            if (topic.quiz && topic.quiz.length > 0) {
                const quizSlide = this.createQuizSlide(topic, slideIndex++, topicIndex);
                slideContainer.appendChild(quizSlide);
            }
        });

        // Summary slide
        const summarySlide = this.createSummarySlide(slideIndex++);
        slideContainer.appendChild(summarySlide);

        this.slides = document.querySelectorAll('.slide');
        this.totalSlides = this.slides.length;
        document.getElementById('totalSlides').textContent = this.totalSlides;
    }

    createOverviewSlide(topic, index) {
        const slide = document.createElement('div');
        slide.className = 'slide';
        slide.dataset.slide = index;

        slide.innerHTML = `
            <div class="slide-content">
                <h1 class="slide-title">${topic.name}</h1>
                <div class="content-grid">
                    <div class="content-section animate-fade-in">
                        <h3>📚 What You'll Learn</h3>
                        <ul class="content-list">
                            ${topic.slides.map(s => `<li>${s.title}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="content-section animate-fade-in delay-1">
                        <h3>🎯 Key Highlights</h3>
                        <ul class="content-list">
                            ${topic.slides[0].keyFacts.slice(0, 3).map(fact => `<li class="fact-item" data-fact="${fact}">${fact.split(':')[0]}</li>`).join('')}
                        </ul>
                    </div>
                </div>
                ${topic.quiz && topic.quiz.length > 0 ? '<div class="quiz-indicator animate-fade-in delay-2">🧠 Quiz available at the end of this section</div>' : ''}
            </div>
        `;

        return slide;
    }

    createContentSlide(slideData, index) {
        const slide = document.createElement('div');
        slide.className = 'slide';
        slide.dataset.slide = index;

        slide.innerHTML = `
            <div class="slide-content">
                <h1 class="slide-title">${slideData.title}</h1>
                <div class="content-grid">
                    <div class="content-section animate-slide-up">
                        <h3>📖 Main Content</h3>
                        <ul class="content-list">
                            ${slideData.content.map(item => `<li class="animate-fade-in">${item}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="key-facts animate-slide-up delay-1">
                        <h4>💡 Key Facts</h4>
                        ${slideData.keyFacts.map(fact => `<div class="fact-item" data-fact="${fact}">${fact}</div>`).join('')}
                    </div>
                </div>
            </div>
        `;

        return slide;
    }

    createQuizSlide(topic, index, topicIndex) {
        const slide = document.createElement('div');
        slide.className = 'slide quiz-slide';
        slide.dataset.slide = index;

        slide.innerHTML = `
            <div class="slide-content">
                <h1 class="slide-title">🧠 ${topic.name} - Quiz Time!</h1>
                <div class="quiz-intro animate-fade-in">
                    <p>Test your knowledge about ${topic.name} with these questions:</p>
                    <button class="btn btn--primary start-quiz-btn" data-topic-index="${topicIndex}">Start Quiz</button>
                </div>
            </div>
        `;

        return slide;
    }

    createSummarySlide(index) {
        const slide = document.createElement('div');
        slide.className = 'slide';
        slide.dataset.slide = index;

        slide.innerHTML = `
            <div class="slide-content title-slide">
                <h1 class="slide-title">🎉 Congratulations!</h1>
                <h2 class="slide-subtitle">You've completed the Ancient Indian History presentation</h2>
                <div class="title-highlights">
                    <div class="highlight-item animate-fade-in">
                        <h3>📚 Topics Covered</h3>
                        <p>8 major periods from Stone Age to Medieval</p>
                    </div>
                    <div class="highlight-item animate-fade-in delay-1">
                        <h3>🧠 Knowledge Gained</h3>
                        <p>Key facts, dates, and historical significance</p>
                    </div>
                    <div class="highlight-item animate-fade-in delay-2">
                        <h3>🏆 Ready for Exams</h3>
                        <p>Well-prepared for history assessments</p>
                    </div>
                </div>
            </div>
        `;

        return slide;
    }

    bindEvents() {
        // Navigation buttons
        const nextBtn = document.getElementById('nextBtn');
        const prevBtn = document.getElementById('prevBtn');
        
        if (nextBtn) {
            nextBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.nextSlide();
            });
        }
        
        if (prevBtn) {
            prevBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.prevSlide();
            });
        }

        // Menu controls
        const menuBtn = document.getElementById('menuBtn');
        const closeMenu = document.getElementById('closeMenu');
        
        if (menuBtn) {
            menuBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.showMenu();
            });
        }
        
        if (closeMenu) {
            closeMenu.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.hideMenu();
            });
        }

        // Topic navigation
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('topic-btn')) {
                e.preventDefault();
                e.stopPropagation();
                const topicIndex = parseInt(e.target.dataset.topic);
                this.jumpToTopic(topicIndex);
            }
        });

        // Quiz controls
        const submitAnswer = document.getElementById('submitAnswer');
        const nextQuestion = document.getElementById('nextQuestion');
        const closeQuiz = document.getElementById('closeQuiz');
        
        if (submitAnswer) {
            submitAnswer.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.submitQuizAnswer();
            });
        }
        
        if (nextQuestion) {
            nextQuestion.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.nextQuizQuestion();
            });
        }
        
        if (closeQuiz) {
            closeQuiz.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.closeQuiz();
            });
        }

        // Fact modal
        const closeFact = document.getElementById('closeFact');
        if (closeFact) {
            closeFact.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.closeFact();
            });
        }

        // Start quiz buttons (dynamically created)
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('start-quiz-btn')) {
                e.preventDefault();
                e.stopPropagation();
                const topicIndex = parseInt(e.target.dataset.topicIndex);
                const quizData = this.presentationData.topics[topicIndex].quiz;
                this.startQuiz(quizData);
            }
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowRight') {
                e.preventDefault();
                this.nextSlide();
            }
            if (e.key === 'ArrowLeft') {
                e.preventDefault();
                this.prevSlide();
            }
            if (e.key === 'Escape') {
                this.hideMenu();
                this.closeQuiz();
                this.closeFact();
            }
        });

        // Fact item clicks
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('fact-item')) {
                e.preventDefault();
                e.stopPropagation();
                this.showFactDetail(e.target.dataset.fact);
            }
        });

        // TOC item clicks
        document.addEventListener('click', (e) => {
            if (e.target.closest('.toc-item')) {
                e.preventDefault();
                e.stopPropagation();
                const index = Array.from(document.querySelectorAll('.toc-item')).indexOf(e.target.closest('.toc-item'));
                this.jumpToTopic(index);
            }
        });
    }

    nextSlide() {
        if (this.currentSlide < this.totalSlides - 1) {
            this.currentSlide++;
            this.updateSlide();
        }
    }

    prevSlide() {
        if (this.currentSlide > 0) {
            this.currentSlide--;
            this.updateSlide();
        }
    }

    updateSlide() {
        this.slides.forEach((slide, index) => {
            slide.classList.remove('active', 'prev');
            if (index === this.currentSlide) {
                slide.classList.add('active');
            } else if (index < this.currentSlide) {
                slide.classList.add('prev');
            }
        });

        this.updateUI();
        this.animateCurrentSlide();
    }

    updateUI() {
        document.getElementById('currentSlide').textContent = this.currentSlide + 1;
        
        // Update progress bar
        const progress = ((this.currentSlide + 1) / this.totalSlides) * 100;
        document.getElementById('progressBar').style.width = `${progress}%`;

        // Update navigation buttons
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        
        if (prevBtn) prevBtn.disabled = this.currentSlide === 0;
        if (nextBtn) nextBtn.disabled = this.currentSlide === this.totalSlides - 1;
    }

    animateCurrentSlide() {
        const currentSlideElement = this.slides[this.currentSlide];
        const animatedElements = currentSlideElement.querySelectorAll('.animate-fade-in, .animate-slide-up');
        
        animatedElements.forEach((element, index) => {
            element.style.animationDelay = `${index * 0.2}s`;
            element.classList.add('animate-fade-in');
        });
    }

    jumpToTopic(topicIndex) {
        // Calculate slide index for topic (2 base slides + slides per topic)
        let slideIndex = 2; // Title and TOC
        for (let i = 0; i < topicIndex; i++) {
            slideIndex += 1; // Overview slide
            slideIndex += this.presentationData.topics[i].slides.length; // Content slides
            if (this.presentationData.topics[i].quiz && this.presentationData.topics[i].quiz.length > 0) {
                slideIndex += 1; // Quiz slide
            }
        }
        
        this.currentSlide = slideIndex;
        this.updateSlide();
        this.hideMenu();
    }

    showMenu() {
        const menu = document.getElementById('topicMenu');
        if (menu) {
            menu.classList.remove('hidden');
        }
    }

    hideMenu() {
        const menu = document.getElementById('topicMenu');
        if (menu) {
            menu.classList.add('hidden');
        }
    }

    startQuiz(quizData) {
        this.quizData = quizData;
        this.currentQuiz = 0;
        this.selectedAnswer = null;
        this.showQuizQuestion();
        const quizModal = document.getElementById('quizModal');
        if (quizModal) {
            quizModal.classList.remove('hidden');
        }
    }

    showQuizQuestion() {
        const quiz = this.quizData[this.currentQuiz];
        const quizTitle = document.getElementById('quizTitle');
        const quizQuestion = document.getElementById('quizQuestion');
        
        if (quizTitle) {
            quizTitle.textContent = `Question ${this.currentQuiz + 1} of ${this.quizData.length}`;
        }
        if (quizQuestion) {
            quizQuestion.textContent = quiz.question;
        }
        
        const optionsContainer = document.getElementById('quizOptions');
        if (optionsContainer) {
            optionsContainer.innerHTML = '';
            
            quiz.options.forEach((option, index) => {
                const button = document.createElement('button');
                button.className = 'quiz-option';
                button.textContent = option;
                button.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    this.selectAnswer(index, button);
                });
                optionsContainer.appendChild(button);
            });
        }

        const quizFeedback = document.getElementById('quizFeedback');
        const submitAnswer = document.getElementById('submitAnswer');
        const nextQuestion = document.getElementById('nextQuestion');
        
        if (quizFeedback) quizFeedback.classList.add('hidden');
        if (submitAnswer) submitAnswer.classList.add('hidden');
        if (nextQuestion) nextQuestion.classList.add('hidden');
        
        this.selectedAnswer = null;
    }

    selectAnswer(index, buttonElement) {
        document.querySelectorAll('.quiz-option').forEach(btn => btn.classList.remove('selected'));
        buttonElement.classList.add('selected');
        this.selectedAnswer = index;
        
        const submitAnswer = document.getElementById('submitAnswer');
        if (submitAnswer) {
            submitAnswer.classList.remove('hidden');
        }
    }

    submitQuizAnswer() {
        if (this.selectedAnswer === null) return;

        const quiz = this.quizData[this.currentQuiz];
        const options = document.querySelectorAll('.quiz-option');
        
        options.forEach((option, index) => {
            if (index === quiz.correct) {
                option.classList.add('correct');
            } else if (index === this.selectedAnswer && index !== quiz.correct) {
                option.classList.add('incorrect');
            }
        });

        const isCorrect = this.selectedAnswer === quiz.correct;
        const feedbackText = document.getElementById('feedbackText');
        const explanationText = document.getElementById('explanationText');
        const quizFeedback = document.getElementById('quizFeedback');
        const submitAnswer = document.getElementById('submitAnswer');
        const nextQuestion = document.getElementById('nextQuestion');
        
        if (feedbackText) {
            feedbackText.textContent = isCorrect ? '✅ Correct!' : '❌ Incorrect';
        }
        if (explanationText) {
            explanationText.textContent = quiz.explanation;
        }
        if (quizFeedback) {
            quizFeedback.classList.remove('hidden');
        }
        if (submitAnswer) {
            submitAnswer.classList.add('hidden');
        }
        
        if (this.currentQuiz < this.quizData.length - 1) {
            if (nextQuestion) {
                nextQuestion.classList.remove('hidden');
            }
        }
    }

    nextQuizQuestion() {
        this.currentQuiz++;
        if (this.currentQuiz < this.quizData.length) {
            this.showQuizQuestion();
        }
    }

    closeQuiz() {
        const quizModal = document.getElementById('quizModal');
        if (quizModal) {
            quizModal.classList.add('hidden');
        }
    }

    showFactDetail(factText) {
        const [title, ...contentParts] = factText.split(':');
        const factTitle = document.getElementById('factTitle');
        const factContent = document.getElementById('factContent');
        const factModal = document.getElementById('factModal');
        
        if (factTitle) {
            factTitle.textContent = title;
        }
        if (factContent) {
            factContent.textContent = contentParts.join(':').trim() || 'Additional information about this topic.';
        }
        if (factModal) {
            factModal.classList.remove('hidden');
        }
    }

    closeFact() {
        const factModal = document.getElementById('factModal');
        if (factModal) {
            factModal.classList.add('hidden');
        }
    }
}

// Initialize the application
const app = new PresentationApp();