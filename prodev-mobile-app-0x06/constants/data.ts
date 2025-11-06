import { PropertyListingProps } from "@/interfaces";

const SAMPLE_DATA : PropertyListingProps[] = [
    {
      propertyName: "Villa Arrciffee Beach House",
      location: {
        street: "123 Ocean Drive",
        city: "Miami",
        country: "USA"
      },
      rate: 4.76,
      currency: "$",
      amount: 620,
      favorite: false,
      image: require("@/assets/images/mansion.jpg")
    },
    {
      propertyName: "Sunset Paradise Villa",
      location: {
        street: "456 Beachfront Lane",
        city: "Cancun",
        country: "Mexico"
      },
      rate: 4.85,
      currency: "$",
      amount: 750,
      favorite: true,
      image: require("@/assets/images/Villa.jpg")
    },
    {
      propertyName: "Golden Sands Retreat",
      location: {
        street: "789 Coastal Road",
        city: "Gold Coast",
        country: "Australia"
      },
      rate: 4.92,
      currency: "$",
      amount: 900,
      favorite: false,
      image: require("@/assets/images/Beachfront.jpg")
    },
    {
      propertyName: "Azure Horizon Cottage",
      location: {
        street: "321 Seaside Avenue",
        city: "Nice",
        country: "France"
      },
      rate: 4.78,
      currency: "$",
      amount: 680,
      favorite: false,
      image: require("@/assets/images/Countryside.jpg")
    },
    {
      propertyName: "Palm Haven Villa",
      location: {
        street: "654 Palm Street",
        city: "Bali",
        country: "Indonesia"
      },
      rate: 4.88,
      currency: "$",
      amount: 1200,
      favorite: true,
      image: require("@/assets/images/Tropical.jpg")
    },
    {
      propertyName: "Ocean Breeze Mansion",
      location: {
        street: "987 Marina Drive",
        city: "Dubai",
        country: "UAE"
      },
      rate: 4.95,
      currency: "$",
      amount: 2500,
      favorite: false,
      image: require("@/assets/images/mansion.jpg")
    },
    {
      propertyName: "Seaside Serenity House",
      location: {
        street: "147 Ocean View Road",
        city: "Phuket",
        country: "Thailand"
      },
      rate: 4.81,
      currency: "$",
      amount: 1500,
      favorite: false,
      image: require("@/assets/images/Secluded.jpg")
    },
    {
      propertyName: "Coral Reef Villa",
      location: {
        street: "258 Coral Lane",
        city: "Maldives",
        country: "Maldives"
      },
      rate: 4.89,
      currency: "$",
      amount: 850,
      favorite: false,
      image: require("@/assets/images/Tropical.jpg")
    },
    {
      propertyName: "Tropical Bliss Retreat",
      location: {
        street: "369 Palm Beach Road",
        city: "Maui",
        country: "USA"
      },
      rate: 4.83,
      currency: "$",
      amount: 720,
      favorite: false,
      image: require("@/assets/images/Beachfront.jpg")
    },
    {
      propertyName: "Emerald Bay Cottage",
      location: {
        street: "741 Bayfront Avenue",
        city: "Santorini",
        country: "Greece"
      },
      rate: 4.90,
      currency: "$",
      amount: 780,
      favorite: true,
      image: require("@/assets/images/Villa.jpg")
    }
  ];


const FILTERS: string [] = [
    "Mansion",
    "CountrySide",
    "Villa",
    "Tropical",
    "New",
    "Amazing",
    "Beachfront",
    "Luxury",
    "Family-Friendly",
    "Pet-Friendly",
    "Secluded"
  ];

// Image mapping for each filter
const FILTER_IMAGES: { [key: string]: any } = {
  "Mansion": require("@/assets/images/mansion.jpg"),
  "CountrySide": require("@/assets/images/Countryside.jpg"),
  "Villa": require("@/assets/images/Villa.jpg"),
  "Tropical": require("@/assets/images/Tropical.jpg"),
  "New": require("@/assets/images/Logo.png"),
  "Amazing": require("@/assets/images/logo-green.png"),
  "Beachfront": require("@/assets/images/Beachfront.jpg"),
  "Luxury": require("@/assets/images/mansion.jpg"),
  "Family-Friendly": require("@/assets/images/Family-Friendly.jpg"),
  "Pet-Friendly": require("@/assets/images/Pet-Friendly.jpg"),
  "Secluded": require("@/assets/images/Secluded.jpg")
};

export { SAMPLE_DATA, FILTERS, FILTER_IMAGES }