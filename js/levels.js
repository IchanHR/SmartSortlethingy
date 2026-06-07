const LEVELS = [
    {
        id: 1,
        name: "Park",
        timerSeconds: 12,
        rounds: [
            {
                // Park — scooter → bicycle
                originalImg: "images/p1-original.png",
                changedImg: "images/p1-changed.png",
                hitbox: { x: "30%", y: "48%", w: "22%", h: "30%" },
                correctCategory: "Vehicle",
                categories: ["Vehicle", "Animal", "Food", "Plant"]
            }
        ]
    },
    {
        id: 2,
        name: "City Street",
        timerSeconds: 12,
        rounds: [
            {
                // City street — dog → cat (background right)
                originalImg: "images/p2-original.png",
                changedImg: "images/p2-changed.png",
                hitbox: { x: "62%", y: "22%", w: "18%", h: "18%" },
                correctCategory: "Animal",
                categories: ["Animal", "Vehicle", "Building", "Electronics"]
            }
        ]
    },
    {
        id: 3,
        name: "Office Desk",
        timerSeconds: 11,
        rounds: [
            {
                // Office desk — phone → calculator
                originalImg: "images/p3-original.png",
                changedImg: "images/p3-changed.png",
                hitbox: { x: "2%", y: "55%", w: "28%", h: "30%" },
                correctCategory: "Electronics",
                categories: ["Electronics", "Furniture", "Food", "Animal"]
            }
        ]
    },
    {
        id: 4,
        name: "Kitchen",
        timerSeconds: 11,
        rounds: [
            {
                // Kitchen — kettle → microwave
                originalImg: "images/p4-original.png",
                changedImg: "images/p4-changed.png",
                hitbox: { x: "32%", y: "35%", w: "22%", h: "22%" },
                correctCategory: "Electronics",
                categories: ["Electronics", "Food", "Furniture", "Animal"]
            }
        ]
    },
    {
        id: 5,
        name: "Restaurant",
        timerSeconds: 10,
        rounds: [
            {
                // Restaurant — soda can → juice glass
                originalImg: "images/p5-original.png",
                changedImg: "images/p5-changed.png",
                hitbox: { x: "30%", y: "48%", w: "18%", h: "28%" },
                correctCategory: "Beverage",
                categories: ["Beverage", "Food", "Furniture", "Electronics"]
            }
        ]
    },
    {
        id: 6,
        name: "Winter Birds",
        timerSeconds: 10,
        rounds: [
            {
                // Winter birds — white dove → grey pigeon
                originalImg: "images/p6-original.png",
                changedImg: "images/p6-changed.png",
                hitbox: { x: "60%", y: "2%", w: "22%", h: "38%" },
                correctCategory: "Animal",
                categories: ["Animal", "Plant", "Vehicle", "Electronics"]
            }
        ]
    },
    {
        id: 7,
        name: "Downtown",
        timerSeconds: 9,
        rounds: [
            {
                // City street — bus → truck
                originalImg: "images/p7-original.png",
                changedImg: "images/p7-changed.png",
                hitbox: { x: "2%", y: "55%", w: "35%", h: "35%" },
                correctCategory: "Vehicle",
                categories: ["Vehicle", "Building", "Animal", "Food"]
            }
        ]
    },
    {
        id: 8,
        name: "Airport",
        timerSeconds: 9,
        rounds: [
            {
                // Airport — airplane → drone (flying top-right)
                originalImg: "images/p8-original.png",
                changedImg: "images/p8-changed.png",
                hitbox: { x: "58%", y: "2%", w: "28%", h: "28%" },
                correctCategory: "Vehicle",
                categories: ["Vehicle", "Building", "Animal", "Electronics"]
            }
        ]
    },
    {
        id: 9,
        name: "Harbor",
        timerSeconds: 8,
        rounds: [
            {
                // Harbor — motorboat → sailboat
                originalImg: "images/p9-original.png",
                changedImg: "images/p9-changed.png",
                hitbox: { x: "2%", y: "58%", w: "35%", h: "35%" },
                correctCategory: "Vehicle",
                categories: ["Vehicle", "Animal", "Building", "Food"]
            }
        ]
    },
    {
        id: 10,
        name: "Picnic",
        timerSeconds: 8,
        rounds: [
            {
                // Picnic — subtle food change
                originalImg: "images/p10-original.png",
                changedImg: "images/p10-changed.png",
                hitbox: { x: "30%", y: "35%", w: "30%", h: "35%" },
                correctCategory: "Food",
                categories: ["Food", "Animal", "Plant", "Furniture"]
            }
        ]
    },
    {
        id: 11,
        name: "Studio",
        timerSeconds: 7,
        rounds: [
            {
                // Office top-down — item → calculator on desk
                originalImg: "images/p11-original.png",
                changedImg: "images/p11-changed.png",
                hitbox: { x: "22%", y: "30%", w: "20%", h: "25%" },
                correctCategory: "Electronics",
                categories: ["Electronics", "Furniture", "Food", "Vehicle"]
            }
        ]
    }
];
