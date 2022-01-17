export default [
    {
        class: "Area",
        obj: {
            label: "Los Angeles International Airport (LAX)",
            lat: 33.942449,
            lng: -118.410452,
        },
    },
    {
        class: "Transportation",
        obj: {
            mode: "Car",
            distance: 20,
            distanceUnit: "mi",
            estimatedDurationInMinutes: 0.2,
            departureTime: new Date(), // Local time at departure
            fromTimezone: "America/Los_Angeles", // From tz database
            arrivalTime: new Date(), // Local time at destination
            toTimezone: "America/Phoenix",
        },
    },
    {
        class: "Area",
        obj: {
            
        },
    },
    {
        class: "Area",
        obj: {
            
        },
    },
    {
        class: "Transportation",
        obj: {
            
        },
    },
];