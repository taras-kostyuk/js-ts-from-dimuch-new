import {CityType, GovernmentBuildingsType} from "../02/02_02";

export function demolishHouseOnTheStreet(city: CityType, street: string) {
    city.houses = city.houses.filter( h => h.address.street.title !== street)
}

export function getBuildingsWithStaffCountGreaterThen(buildings: Array<GovernmentBuildingsType>, number: number) {
    return buildings.filter(b => b.staffCount > number)
}