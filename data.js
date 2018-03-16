const data = [
    {
        id: 1,
        marvelId: 1009610,
        name: "Spider-Man",
        alterEgo: 'Peter Parker',
        friends: [{ id: 3 }, { id: 5 }],
        birthdate: '1918-07-04'
    },
    {
        id: 2,
        marvelId: 1009664,
        name: "Thor",
        friends: [{ id: 3 }, { id: 5 }, { id: 7 }, { id: 8 }, { id: 11 }, { id: 12 }]
    },
    {
        id: 3,
        marvelId: 1009368,
        name: "Iron Man",
        alterEgo: 'Tony Stark',
        friends: [{ id: 2 }, { id: 5 }, { id: 7 }]
    },
    {
        id: 4,
        marvelId: 1010733,
        name: "Star-Lord",
        alterEgo: 'Peter Quill',
        friends: [{ id: 9 }, { id: 10 }, { id: 13 }, { id: 14 }]
    },
    {
        id: 5,
        marvelId: 1009220,
        name: "Captain America",
        alterEgo: 'Steve Rogers',
        friends: [{ id: 3 }, { id: 7 }]
    },
    {
        id: 6,
        marvelId: 1009652,
        name: "Thanos",
        friends: []
    },
    {
        id: 7,
        marvelId: 1009189,
        name: "Black Widow",
        alterEgo: 'Natasha Romanova',
        friends: [{ id: 2 }, { id: 3 }, { id: 5 }]
    },
    {
        id: 8,
        marvelId: 1009282,
        name: "Doctor Strange",
        alterEgo: "Doctor Stephen Strange",
        friends: [{ id: 2 }]
    },
    {
        id: 9,
        marvelId: 1010763,
        name: "Gamora",
        friends: [{ id: 4 }, { id: 10 }]
    },
    {
        id: 10,
        marvelId: 1010365,
        name: "Nebula",
        friends: [{ id: 4 }, { id: 9 }]
    },
    {
        id: 11,
        marvelId: 1009351,
        name: "Hulk",
        alterEgo: 'Bruce Banner',
        friends: [{ id: 2 }, { id: 3 }, { id: 5 }]
    },
    {
        id: 12,
        marvelId: 1010809,
        name: "Clint Barton",
        friends: [{ id: 2 }, { id: 3 }, { id: 7 }]
    },
    {
        id: 13,
        marvelId: 1010743,
        name: "Groot",
        friends: [{ id: 4 }]
    },
    {
        id: 14,
        marvelId: 1010735,
        name: "Drax",
        friends: [{ id: 4 }, { id: 13 }]
    },
    {
        id: 15,
        marvelId: 1009697,
        name: "Vision",
        friends: [{ id: 3 }]
    },
    {
        id: 16,
        marvelId: 1009211,
        name: "Bucky",
        alterEgo: 'James Barnes',
        friends: [{ id: 5 }]
    },
    {
        id: 17,
        marvelId: 1009407,
        name: "Loki",
        friends: [{ id: 2 }]
    },
    {
        id: 18,
        marvelId: 1009187,
        name: "Black Panther",
        alterEgo: 'T\'Challa',
        friends: [{ id: 3 }, { id: 16 }]
    },
    {
        id: 19,
        marvelId: 1010801,
        name: "Ant-Man",
        alterEgo: 'Scott Lang',
        friends: [{ id: 3 }, { id: 23 }]
    },
    {
        id: 20,
        marvelId: 1009471,
        name: "Nick Fury",
        friends: [
            { id: 1 },
            { id: 2 },
            { id: 3 },
            { id: 4 },
            { id: 5 },
            { id: 6 },
            { id: 7 },
            { id: 8 },
            { id: 9 },
            { id: 10 },
            { id: 11 },
            { id: 12 },
            { id: 13 },
            { id: 14 },
            { id: 15 },
            { id: 16 },
            { id: 17 },
            { id: 18 },
            { id: 19 },
            { id: 21 },
            { id: 22 },
            { id: 23 },
            { id: 24 }
        ]
    },
    {
        id: 21,
        marvelId: 1011335,
        name: "Maria Hill",
        friends: [{ id: 20 }, { id: 22 }]
    },
    {
        id: 22,
        marvelId: 1017839,
        name: "Phil Coulson",
        friends: [{ id: 2 }, { id: 20 }, { id: 21 }]
    },
    {
        id: 23,
        marvelId: 1009707,
        name: "Wasp",
        alterEgo: 'Janet van Dyne',
        friends: [{ id: 19 }]
    },
    {
        id: 24,
        marvelId: 1009224,
        name: "Captain Marvel",
        alterEgo: 'Mar-Vell',
        friends: []
    },
]

module.exports = data