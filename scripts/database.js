const database = {
    areas: [
        {
            id: 1,
            areaName: "Cider Falls Lodge", 
        },
        {
            id: 2,
            areaName: "Lost Wolf Hiking Trail",  
        },
        {
            id: 3,
            areaName: "Chamfort River",
        },
        {
            id: 4,
            areaName: "Gander River Nature Preserve",
        },
        {
            id: 5,
            areaName: "Campgrounds", 
        },
        {
            id: 6,
            areaName: "Pine Bluffs Trail",  
        },
    ],
    services: [
        {
            id: 1,
            service: "hiking",
            areaIds: [2, 4, 6],
        },
        {
            id: 2,
            service: "canoeing",
            areaIds: [3],
        },
        {
            id: 3,
            service: "picnicking",
            areaIds: [1, 2, 6],
        },
        {
            id: 4,
            service: "lodging",
            areaIds: [1, 5],
        },
        {
            id: 5,
            service: "rock climbing",
            areaIds: [2],
        },
        {
            id: 6,
            service: "rafting",
            areaIds: [3],
        },
        {
            id: 7,
            service: "fishing",
            areaIds: [3, 4],
        },
    ],
    guests: [
        {
            id: 1,
            firstName: "Richard Parker",
            lastName: "Dutta",
            areaId: 4,
        },
        {
            id: 2,
            firstName: "Bob",
            lastName: "Smith",
            areaId: 1,
        },
        {
            id: 3,
            firstName: "Steve",
            lastName: "Burbank",
            areaId: 3,
        },
        {
            id: 4,
            firstName: "Richard",
            lastName: "Friedman",
            areaId: 6,
        },
        {
            id: 5,
            firstName: "Court",
            lastName: "Horncastle",
            areaId: 2,
        },
        {
            id: 6,
            firstName: "Clay",
            lastName: "Jones",
            areaId: 4,
        },
        {
            id: 7,
            firstName: "Yolanda",
            lastName: "Friedman",
            areaId: 6,
        },
        {
            id: 8,
            firstName: "Denise",
            lastName: "Friedman",
            areaId: 4,
        },
        {
            id: 9,
            firstName: "Pushpa",
            lastName: "Patel",
            areaId: 3,
        },
        {
            id: 10,
            firstName: "Ganesh",
            lastName: "Patel",
            areaId: 3,
        },
        {
            id: 11,
            firstName: "Casper",
            lastName: "White",
            areaId: 2,
        },
        {
            id: 12,
            firstName: "Lily",
            lastName: "Dutta",
            areaId: 5,
        },
        {
            id: 13,
            firstName: "Jane",
            lastName: "Smith",
            areaId: 1,
        },
    ]

}
//write 3 getter functions for exporting
//area is going through every object in the areas array and making a copy of the object. Map is putting all of the copied objects into a new array and returing it.
export const getAreas = () => {
    return database.areas.map((area) => ({ ...area }));
}
export const getServices = () => {
    return database.services.map((service) => ({ ...service }));
}
export const getGuests = () => {
    return database.guests.map((guest) => ({ ...guest }));
}