const LEVELS = [
    {
        id: 1,
        name: "Easy - Basics",
        timerSeconds: 12,
        rounds: [
            {
                sceneBg: "linear-gradient(180deg, #87CEEB 60%, #228B22 100%)",
                objects: [
                    { emoji: "🌳", x: "10%", y: "30%", size: "2.5rem" },
                    { emoji: "🏠", x: "60%", y: "25%", size: "3rem" },
                    { emoji: "☁️", x: "30%", y: "5%", size: "2rem" },
                    { emoji: "☁️", x: "70%", y: "8%", size: "1.5rem" },
                ],
                original: { emoji: "🚲", x: "35%", y: "55%", size: "2.8rem" },
                changed:  { emoji: "🛴", x: "35%", y: "55%", size: "2.8rem" },
                hitbox: { x: "30%", y: "48%", w: "20%", h: "35%" },
                correctCategory: "Vehicle",
                categories: ["Vehicle", "Animal", "Food", "Plant"]
            },
            {
                sceneBg: "linear-gradient(180deg, #FDB813 20%, #8B4513 100%)",
                objects: [
                    { emoji: "🏖️", x: "10%", y: "35%", size: "2.5rem" },
                    { emoji: "🌴", x: "75%", y: "20%", size: "3rem" },
                    { emoji: "☀️", x: "80%", y: "3%", size: "2.5rem" },
                ],
                original: { emoji: "🐕", x: "40%", y: "55%", size: "2.8rem" },
                changed:  { emoji: "🐈", x: "40%", y: "55%", size: "2.8rem" },
                hitbox: { x: "35%", y: "48%", w: "20%", h: "35%" },
                correctCategory: "Animal",
                categories: ["Animal", "Vehicle", "Electronics", "Furniture"]
            },
            {
                sceneBg: "linear-gradient(180deg, #2c3e50 30%, #34495e 100%)",
                objects: [
                    { emoji: "🪑", x: "15%", y: "45%", size: "2.2rem" },
                    { emoji: "📚", x: "70%", y: "30%", size: "2rem" },
                    { emoji: "🖼️", x: "50%", y: "10%", size: "2rem" },
                ],
                original: { emoji: "💻", x: "42%", y: "50%", size: "2.8rem" },
                changed:  { emoji: "📺", x: "42%", y: "50%", size: "2.8rem" },
                hitbox: { x: "37%", y: "43%", w: "20%", h: "35%" },
                correctCategory: "Electronics",
                categories: ["Electronics", "Food", "Animal", "Vehicle"]
            },
            {
                sceneBg: "linear-gradient(180deg, #87CEEB 50%, #90EE90 100%)",
                objects: [
                    { emoji: "🌳", x: "5%", y: "25%", size: "3rem" },
                    { emoji: "🌳", x: "80%", y: "28%", size: "2.8rem" },
                    { emoji: "⛅", x: "50%", y: "5%", size: "2rem" },
                ],
                original: { emoji: "🍎", x: "45%", y: "58%", size: "2.5rem" },
                changed:  { emoji: "🍕", x: "45%", y: "58%", size: "2.5rem" },
                hitbox: { x: "40%", y: "50%", w: "18%", h: "32%" },
                correctCategory: "Food",
                categories: ["Food", "Animal", "Plant", "Electronics"]
            },
            {
                sceneBg: "linear-gradient(180deg, #4a90d9 40%, #2c3e50 100%)",
                objects: [
                    { emoji: "🏢", x: "10%", y: "15%", size: "3.5rem" },
                    { emoji: "🏢", x: "70%", y: "18%", size: "3rem" },
                    { emoji: "🌙", x: "85%", y: "3%", size: "1.5rem" },
                ],
                original: { emoji: "🚗", x: "38%", y: "62%", size: "2.8rem" },
                changed:  { emoji: "🚌", x: "38%", y: "62%", size: "2.8rem" },
                hitbox: { x: "33%", y: "55%", w: "20%", h: "30%" },
                correctCategory: "Vehicle",
                categories: ["Vehicle", "Building", "Animal", "Food"]
            }
        ]
    },
    {
        id: 2,
        name: "Easy - Nature",
        timerSeconds: 11,
        rounds: [
            {
                sceneBg: "linear-gradient(180deg, #87CEEB 50%, #228B22 100%)",
                objects: [
                    { emoji: "🌻", x: "15%", y: "50%", size: "2rem" },
                    { emoji: "🌻", x: "75%", y: "52%", size: "2.2rem" },
                    { emoji: "⛅", x: "40%", y: "5%", size: "2rem" },
                ],
                original: { emoji: "🐄", x: "42%", y: "55%", size: "3rem" },
                changed:  { emoji: "🐎", x: "42%", y: "55%", size: "3rem" },
                hitbox: { x: "36%", y: "47%", w: "22%", h: "36%" },
                correctCategory: "Animal",
                categories: ["Animal", "Plant", "Food", "Vehicle"]
            },
            {
                sceneBg: "linear-gradient(180deg, #1a1a2e 30%, #16213e 100%)",
                objects: [
                    { emoji: "⭐", x: "20%", y: "8%", size: "1rem" },
                    { emoji: "⭐", x: "60%", y: "12%", size: "0.8rem" },
                    { emoji: "⭐", x: "80%", y: "5%", size: "1.2rem" },
                    { emoji: "🌙", x: "75%", y: "8%", size: "2rem" },
                ],
                original: { emoji: "🦉", x: "40%", y: "40%", size: "3rem" },
                changed:  { emoji: "🦇", x: "40%", y: "40%", size: "3rem" },
                hitbox: { x: "34%", y: "33%", w: "22%", h: "35%" },
                correctCategory: "Animal",
                categories: ["Animal", "Electronics", "Building", "Vehicle"]
            },
            {
                sceneBg: "linear-gradient(180deg, #87CEEB 55%, #c2b280 100%)",
                objects: [
                    { emoji: "🌵", x: "15%", y: "40%", size: "2.5rem" },
                    { emoji: "🌵", x: "80%", y: "45%", size: "2rem" },
                    { emoji: "☀️", x: "50%", y: "3%", size: "2.5rem" },
                ],
                original: { emoji: "🌹", x: "45%", y: "55%", size: "2.8rem" },
                changed:  { emoji: "🌻", x: "45%", y: "55%", size: "2.8rem" },
                hitbox: { x: "39%", y: "48%", w: "20%", h: "33%" },
                correctCategory: "Plant",
                categories: ["Plant", "Food", "Animal", "Electronics"]
            },
            {
                sceneBg: "linear-gradient(180deg, #00CED1 50%, #20B2AA 100%)",
                objects: [
                    { emoji: "🐚", x: "20%", y: "65%", size: "1.5rem" },
                    { emoji: "🌊", x: "50%", y: "40%", size: "2rem" },
                    { emoji: "☀️", x: "80%", y: "5%", size: "2rem" },
                ],
                original: { emoji: "🐟", x: "40%", y: "55%", size: "2.8rem" },
                changed:  { emoji: "🐙", x: "40%", y: "55%", size: "2.8rem" },
                hitbox: { x: "34%", y: "48%", w: "22%", h: "34%" },
                correctCategory: "Animal",
                categories: ["Animal", "Food", "Plant", "Vehicle"]
            },
            {
                sceneBg: "linear-gradient(180deg, #87CEEB 45%, #228B22 100%)",
                objects: [
                    { emoji: "🌳", x: "10%", y: "25%", size: "3rem" },
                    { emoji: "🏡", x: "70%", y: "30%", size: "2.5rem" },
                    { emoji: "⛅", x: "45%", y: "5%", size: "2rem" },
                ],
                original: { emoji: "🍎", x: "20%", y: "50%", size: "2.5rem" },
                changed:  { emoji: "🍄", x: "20%", y: "50%", size: "2.5rem" },
                hitbox: { x: "14%", y: "43%", w: "20%", h: "35%" },
                correctCategory: "Food",
                categories: ["Food", "Animal", "Plant", "Vehicle"]
            }
        ]
    },
    {
        id: 3,
        name: "Medium - Urban",
        timerSeconds: 10,
        rounds: [
            {
                sceneBg: "linear-gradient(180deg, #4a90d9 35%, #6b7280 100%)",
                objects: [
                    { emoji: "🏬", x: "10%", y: "15%", size: "3rem" },
                    { emoji: "🏢", x: "75%", y: "12%", size: "3.5rem" },
                    { emoji: "🚦", x: "55%", y: "55%", size: "2rem" },
                ],
                original: { emoji: "🚕", x: "35%", y: "62%", size: "2.8rem" },
                changed:  { emoji: "🚑", x: "35%", y: "62%", size: "2.8rem" },
                hitbox: { x: "29%", y: "55%", w: "22%", h: "30%" },
                correctCategory: "Vehicle",
                categories: ["Vehicle", "Building", "Electronics", "Food"]
            },
            {
                sceneBg: "linear-gradient(180deg, #2c3e50 40%, #1a1a2e 100%)",
                objects: [
                    { emoji: "🪑", x: "10%", y: "50%", size: "2.5rem" },
                    { emoji: "🛋️", x: "65%", y: "45%", size: "2.8rem" },
                    { emoji: "🖼️", x: "40%", y: "10%", size: "2rem" },
                ],
                original: { emoji: "📱", x: "38%", y: "55%", size: "2.8rem" },
                changed:  { emoji: "📷", x: "38%", y: "55%", size: "2.8rem" },
                hitbox: { x: "32%", y: "48%", w: "20%", h: "34%" },
                correctCategory: "Electronics",
                categories: ["Electronics", "Furniture", "Food", "Animal"]
            },
            {
                sceneBg: "linear-gradient(180deg, #f5f5dc 40%, #8B4513 100%)",
                objects: [
                    { emoji: "🍽️", x: "50%", y: "30%", size: "2rem" },
                    { emoji: "🧂", x: "70%", y: "35%", size: "1.5rem" },
                    { emoji: "💡", x: "30%", y: "8%", size: "1.8rem" },
                ],
                original: { emoji: "🍔", x: "40%", y: "50%", size: "3rem" },
                changed:  { emoji: "🍣", x: "40%", y: "50%", size: "3rem" },
                hitbox: { x: "34%", y: "43%", w: "22%", h: "35%" },
                correctCategory: "Food",
                categories: ["Food", "Animal", "Plant", "Electronics"]
            },
            {
                sceneBg: "linear-gradient(180deg, #87CEEB 50%, #6b7280 100%)",
                objects: [
                    { emoji: "🏫", x: "15%", y: "20%", size: "3rem" },
                    { emoji: "🌳", x: "80%", y: "35%", size: "2.5rem" },
                    { emoji: "☁️", x: "55%", y: "5%", size: "2rem" },
                ],
                original: { emoji: "🪑", x: "50%", y: "58%", size: "2.5rem" },
                changed:  { emoji: "🛒", x: "50%", y: "58%", size: "2.5rem" },
                hitbox: { x: "44%", y: "50%", w: "20%", h: "34%" },
                correctCategory: "Object",
                categories: ["Object", "Vehicle", "Animal", "Building"]
            },
            {
                sceneBg: "linear-gradient(180deg, #ff7e5f 30%, #feb47b 100%)",
                objects: [
                    { emoji: "🌅", x: "50%", y: "15%", size: "3rem" },
                    { emoji: "🏖️", x: "20%", y: "55%", size: "2rem" },
                    { emoji: "🌴", x: "80%", y: "35%", size: "2.5rem" },
                ],
                original: { emoji: "⛵", x: "45%", y: "45%", size: "2.8rem" },
                changed:  { emoji: "🚢", x: "45%", y: "45%", size: "2.8rem" },
                hitbox: { x: "39%", y: "38%", w: "22%", h: "35%" },
                correctCategory: "Vehicle",
                categories: ["Vehicle", "Animal", "Building", "Plant"]
            }
        ]
    },
    {
        id: 4,
        name: "Medium - Tricky",
        timerSeconds: 9,
        rounds: [
            {
                sceneBg: "linear-gradient(180deg, #2c3e50 30%, #3d5a80 100%)",
                objects: [
                    { emoji: "📖", x: "15%", y: "40%", size: "2rem" },
                    { emoji: "🖊️", x: "75%", y: "50%", size: "1.5rem" },
                    { emoji: "💡", x: "50%", y: "5%", size: "2rem" },
                ],
                original: { emoji: "🎸", x: "42%", y: "50%", size: "3rem" },
                changed:  { emoji: "🎺", x: "42%", y: "50%", size: "3rem" },
                hitbox: { x: "36%", y: "43%", w: "22%", h: "36%" },
                correctCategory: "Instrument",
                categories: ["Instrument", "Electronics", "Food", "Animal"]
            },
            {
                sceneBg: "linear-gradient(180deg, #1a1a2e 30%, #0f0f23 100%)",
                objects: [
                    { emoji: "🖥️", x: "20%", y: "30%", size: "2.5rem" },
                    { emoji: "⌨️", x: "20%", y: "55%", size: "2rem" },
                    { emoji: "💡", x: "80%", y: "10%", size: "1.5rem" },
                ],
                original: { emoji: "🖱️", x: "55%", y: "55%", size: "2.5rem" },
                changed:  { emoji: "🎮", x: "55%", y: "55%", size: "2.5rem" },
                hitbox: { x: "49%", y: "48%", w: "20%", h: "34%" },
                correctCategory: "Electronics",
                categories: ["Electronics", "Instrument", "Vehicle", "Furniture"]
            },
            {
                sceneBg: "linear-gradient(180deg, #87CEEB 50%, #228B22 100%)",
                objects: [
                    { emoji: "🌳", x: "10%", y: "28%", size: "3rem" },
                    { emoji: "🏡", x: "70%", y: "25%", size: "2.5rem" },
                    { emoji: "🌤️", x: "45%", y: "5%", size: "2rem" },
                ],
                original: { emoji: "🐓", x: "40%", y: "58%", size: "2.8rem" },
                changed:  { emoji: "🦆", x: "40%", y: "58%", size: "2.8rem" },
                hitbox: { x: "34%", y: "50%", w: "22%", h: "34%" },
                correctCategory: "Animal",
                categories: ["Animal", "Food", "Plant", "Vehicle"]
            },
            {
                sceneBg: "linear-gradient(180deg, #f5f0e1 40%, #d4a373 100%)",
                objects: [
                    { emoji: "🏺", x: "15%", y: "40%", size: "2.5rem" },
                    { emoji: "🖼️", x: "65%", y: "15%", size: "2rem" },
                    { emoji: "🕯️", x: "80%", y: "40%", size: "1.8rem" },
                ],
                original: { emoji: "🪴", x: "42%", y: "50%", size: "2.8rem" },
                changed:  { emoji: "💐", x: "42%", y: "50%", size: "2.8rem" },
                hitbox: { x: "36%", y: "43%", w: "20%", h: "35%" },
                correctCategory: "Plant",
                categories: ["Plant", "Food", "Animal", "Furniture"]
            },
            {
                sceneBg: "linear-gradient(180deg, #4a90d9 35%, #2c3e50 100%)",
                objects: [
                    { emoji: "🏬", x: "15%", y: "15%", size: "3rem" },
                    { emoji: "🏪", x: "65%", y: "18%", size: "2.8rem" },
                    { emoji: "🌙", x: "85%", y: "5%", size: "1.5rem" },
                ],
                original: { emoji: "🍦", x: "40%", y: "60%", size: "2.5rem" },
                changed:  { emoji: "🧁", x: "40%", y: "60%", size: "2.5rem" },
                hitbox: { x: "34%", y: "53%", w: "20%", h: "32%" },
                correctCategory: "Food",
                categories: ["Food", "Building", "Vehicle", "Electronics"]
            }
        ]
    },
    {
        id: 5,
        name: "Hard - Speed",
        timerSeconds: 7,
        rounds: [
            {
                sceneBg: "linear-gradient(180deg, #0d1b2a 30%, #1b263b 100%)",
                objects: [
                    { emoji: "🔬", x: "15%", y: "35%", size: "2.5rem" },
                    { emoji: "🧪", x: "75%", y: "40%", size: "2rem" },
                    { emoji: "💡", x: "45%", y: "8%", size: "1.5rem" },
                ],
                original: { emoji: "🔭", x: "45%", y: "55%", size: "2.8rem" },
                changed:  { emoji: "🔦", x: "45%", y: "55%", size: "2.8rem" },
                hitbox: { x: "39%", y: "48%", w: "22%", h: "34%" },
                correctCategory: "Tool",
                categories: ["Tool", "Electronics", "Instrument", "Vehicle"]
            },
            {
                sceneBg: "linear-gradient(180deg, #87CEEB 45%, #c8e6c9 100%)",
                objects: [
                    { emoji: "🌳", x: "8%", y: "25%", size: "3rem" },
                    { emoji: "🌳", x: "85%", y: "28%", size: "2.5rem" },
                    { emoji: "🦋", x: "50%", y: "20%", size: "1.8rem" },
                ],
                original: { emoji: "🐕", x: "35%", y: "55%", size: "2.8rem" },
                changed:  { emoji: "🐺", x: "35%", y: "55%", size: "2.8rem" },
                hitbox: { x: "29%", y: "48%", w: "22%", h: "34%" },
                correctCategory: "Animal",
                categories: ["Animal", "Plant", "Food", "Object"]
            },
            {
                sceneBg: "linear-gradient(180deg, #2c3e50 35%, #4a5568 100%)",
                objects: [
                    { emoji: "🛋️", x: "10%", y: "45%", size: "2.5rem" },
                    { emoji: "📚", x: "80%", y: "35%", size: "2rem" },
                    { emoji: "🖼️", x: "50%", y: "10%", size: "2.5rem" },
                ],
                original: { emoji: "🪑", x: "45%", y: "55%", size: "2.5rem" },
                changed:  { emoji: "🪣", x: "45%", y: "55%", size: "2.5rem" },
                hitbox: { x: "39%", y: "48%", w: "20%", h: "34%" },
                correctCategory: "Object",
                categories: ["Object", "Furniture", "Electronics", "Animal"]
            },
            {
                sceneBg: "linear-gradient(180deg, #ff9a9e 30%, #fecfef 100%)",
                objects: [
                    { emoji: "🎂", x: "45%", y: "25%", size: "2.5rem" },
                    { emoji: "🎈", x: "20%", y: "15%", size: "2rem" },
                    { emoji: "🎈", x: "75%", y: "18%", size: "1.8rem" },
                ],
                original: { emoji: "🎁", x: "40%", y: "55%", size: "2.8rem" },
                changed:  { emoji: "🧸", x: "40%", y: "55%", size: "2.8rem" },
                hitbox: { x: "34%", y: "48%", w: "22%", h: "34%" },
                correctCategory: "Object",
                categories: ["Object", "Food", "Animal", "Clothing"]
            },
            {
                sceneBg: "linear-gradient(180deg, #667eea 35%, #764ba2 100%)",
                objects: [
                    { emoji: "🎭", x: "15%", y: "20%", size: "2.5rem" },
                    { emoji: "🎪", x: "70%", y: "15%", size: "3rem" },
                    { emoji: "✨", x: "50%", y: "5%", size: "1.5rem" },
                ],
                original: { emoji: "🎻", x: "42%", y: "55%", size: "2.8rem" },
                changed:  { emoji: "🥁", x: "42%", y: "55%", size: "2.8rem" },
                hitbox: { x: "36%", y: "48%", w: "22%", h: "34%" },
                correctCategory: "Instrument",
                categories: ["Instrument", "Object", "Electronics", "Vehicle"]
            }
        ]
    },
    {
        id: 6,
        name: "Hard - Expert",
        timerSeconds: 6,
        rounds: [
            {
                sceneBg: "linear-gradient(180deg, #0d1b2a 30%, #1b263b 100%)",
                objects: [
                    { emoji: "🌌", x: "30%", y: "5%", size: "2rem" },
                    { emoji: "⭐", x: "15%", y: "10%", size: "1rem" },
                    { emoji: "⭐", x: "70%", y: "8%", size: "0.8rem" },
                ],
                original: { emoji: "🚀", x: "42%", y: "45%", size: "3rem" },
                changed:  { emoji: "🛸", x: "42%", y: "45%", size: "3rem" },
                hitbox: { x: "36%", y: "38%", w: "22%", h: "36%" },
                correctCategory: "Vehicle",
                categories: ["Vehicle", "Electronics", "Animal", "Object"]
            },
            {
                sceneBg: "linear-gradient(180deg, #e0c3fc 30%, #8ec5fc 100%)",
                objects: [
                    { emoji: "🧊", x: "15%", y: "45%", size: "2rem" },
                    { emoji: "🏔️", x: "70%", y: "20%", size: "3rem" },
                    { emoji: "❄️", x: "50%", y: "10%", size: "1.5rem" },
                ],
                original: { emoji: "🐧", x: "40%", y: "55%", size: "2.8rem" },
                changed:  { emoji: "🦭", x: "40%", y: "55%", size: "2.8rem" },
                hitbox: { x: "34%", y: "48%", w: "22%", h: "34%" },
                correctCategory: "Animal",
                categories: ["Animal", "Object", "Food", "Plant"]
            },
            {
                sceneBg: "linear-gradient(180deg, #434343 30%, #000000 100%)",
                objects: [
                    { emoji: "🎤", x: "20%", y: "30%", size: "2rem" },
                    { emoji: "🔊", x: "75%", y: "35%", size: "2.5rem" },
                    { emoji: "💡", x: "50%", y: "8%", size: "1.5rem" },
                ],
                original: { emoji: "🎹", x: "42%", y: "55%", size: "2.8rem" },
                changed:  { emoji: "🎧", x: "42%", y: "55%", size: "2.8rem" },
                hitbox: { x: "36%", y: "48%", w: "22%", h: "34%" },
                correctCategory: "Electronics",
                categories: ["Electronics", "Instrument", "Object", "Vehicle"]
            },
            {
                sceneBg: "linear-gradient(180deg, #ffecd2 40%, #fcb69f 100%)",
                objects: [
                    { emoji: "🍴", x: "20%", y: "35%", size: "2rem" },
                    { emoji: "🥤", x: "70%", y: "40%", size: "2rem" },
                    { emoji: "🕯️", x: "50%", y: "10%", size: "1.5rem" },
                ],
                original: { emoji: "🍝", x: "42%", y: "52%", size: "2.8rem" },
                changed:  { emoji: "🍜", x: "42%", y: "52%", size: "2.8rem" },
                hitbox: { x: "36%", y: "45%", w: "22%", h: "34%" },
                correctCategory: "Food",
                categories: ["Food", "Object", "Animal", "Plant"]
            },
            {
                sceneBg: "linear-gradient(180deg, #a8e063 30%, #56ab2f 100%)",
                objects: [
                    { emoji: "🌿", x: "10%", y: "40%", size: "2rem" },
                    { emoji: "🌿", x: "85%", y: "45%", size: "1.8rem" },
                    { emoji: "🦋", x: "60%", y: "15%", size: "1.5rem" },
                ],
                original: { emoji: "🐸", x: "42%", y: "55%", size: "2.8rem" },
                changed:  { emoji: "🐢", x: "42%", y: "55%", size: "2.8rem" },
                hitbox: { x: "36%", y: "48%", w: "22%", h: "34%" },
                correctCategory: "Animal",
                categories: ["Animal", "Plant", "Food", "Object"]
            }
        ]
    }
];
