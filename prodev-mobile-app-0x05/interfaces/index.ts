export interface PropertyListingProps {
    propertyName: string,
    rate: number,
    currency: string,
    amount: number,
    location: PropertyLocationProps,
    favorite: boolean,
    image?: any
}

export interface PropertyLocationProps {
    street: string,
    city: string,
    country: string
}

export interface PropertyListing {
    listings: PropertyListingProps []
}