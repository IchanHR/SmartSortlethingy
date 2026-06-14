const LEVELS = [
    {
        id: 1,
        name: "Daily Life",
        description: "Everyday scenes with obvious changes",
        timerSeconds: 12,
        rounds: [
            {
                originalImg: "images/p1-original.png",
                changedImg: "images/p1-changed.png",
                hitbox: { x: "30%", y: "48%", w: "22%", h: "30%" },
                correctCategory: "Vehicle",
                categories: ["Vehicle", "Animal", "Food", "Plant"]
            },
            {
                originalImg: "images/p2-original.png",
                changedImg: "images/p2-changed.png",
                hitbox: { x: "62%", y: "22%", w: "18%", h: "18%" },
                correctCategory: "Animal",
                categories: ["Animal", "Vehicle", "Building", "Electronics"]
            }
        ]
    },
    {
        id: 2,
        name: "Indoor Spaces",
        description: "Objects swapped inside rooms",
        timerSeconds: 11,
        rounds: [
            {
                originalImg: "images/p3-original.png",
                changedImg: "images/p3-changed.png",
                hitbox: { x: "2%", y: "55%", w: "28%", h: "30%" },
                correctCategory: "Electronics",
                categories: ["Electronics", "Furniture", "Food", "Animal"]
            },
            {
                originalImg: "images/p4-original.png",
                changedImg: "images/p4-changed.png",
                hitbox: { x: "32%", y: "35%", w: "22%", h: "22%" },
                correctCategory: "Electronics",
                categories: ["Electronics", "Food", "Furniture", "Animal"]
            }
        ]
    },
    {
        id: 3,
        name: "Food & Nature",
        description: "Trickier swaps in outdoor settings",
        timerSeconds: 10,
        rounds: [
            {
                originalImg: "images/p5-original.png",
                changedImg: "images/p5-changed.png",
                hitbox: { x: "30%", y: "48%", w: "18%", h: "28%" },
                correctCategory: "Beverage",
                categories: ["Beverage", "Food", "Furniture", "Electronics"]
            },
            {
                originalImg: "images/p6-original.png",
                changedImg: "images/p6-changed.png",
                hitbox: { x: "60%", y: "2%", w: "22%", h: "38%" },
                correctCategory: "Animal",
                categories: ["Animal", "Plant", "Vehicle", "Electronics"]
            }
        ]
    },
    {
        id: 4,
        name: "On the Move",
        description: "Vehicles and transport scenes",
        timerSeconds: 9,
        rounds: [
            {
                originalImg: "images/p7-original.png",
                changedImg: "images/p7-changed.png",
                hitbox: { x: "2%", y: "55%", w: "35%", h: "35%" },
                correctCategory: "Vehicle",
                categories: ["Vehicle", "Building", "Animal", "Food"]
            },
            {
                originalImg: "images/p8-original.png",
                changedImg: "images/p8-changed.png",
                hitbox: { x: "58%", y: "2%", w: "28%", h: "28%" },
                correctCategory: "Vehicle",
                categories: ["Vehicle", "Building", "Animal", "Electronics"]
            },
            {
                originalImg: "images/p9-original.png",
                changedImg: "images/p9-changed.png",
                hitbox: { x: "2%", y: "58%", w: "35%", h: "35%" },
                correctCategory: "Vehicle",
                categories: ["Vehicle", "Animal", "Building", "Food"]
            }
        ]
    },
    {
        id: 5,
        name: "Eagle Eye",
        description: "Subtle details, less time",
        timerSeconds: 8,
        rounds: [
            {
                originalImg: "images/p10-original.png",
                changedImg: "images/p10-changed.png",
                hitbox: { x: "30%", y: "35%", w: "30%", h: "35%" },
                correctCategory: "Food",
                categories: ["Food", "Animal", "Plant", "Furniture"]
            },
            {
                originalImg: "images/p11-original.png",
                changedImg: "images/p11-changed.png",
                hitbox: { x: "22%", y: "30%", w: "20%", h: "25%" },
                correctCategory: "Electronics",
                categories: ["Electronics", "Furniture", "Food", "Vehicle"]
            }
        ]
    }
];
