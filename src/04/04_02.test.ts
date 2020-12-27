import {CityType} from "../02/02_02";
import {demolishHouseOnTheStreet, getBuildingsWithStaffCountGreaterThen, getHousesOnTheStreet} from "./04_02";

let city: CityType;
beforeEach(() => {
    city = {
        title: "New York",
        houses: [{
            id: 1,
            builtAt: 2012, repaired: false,
            address: {
                number: 100,
                street: {title: "White street"}
            }
        },
            {id: 2,
                builtAt: 2008, repaired: false,
                address: {
                    number: 100,
                    street: {title: "Happy Street"}
                }
            },
            {id: 3,
                builtAt: 2020, repaired: false,
                address: {
                    number: 101,
                    street: {title: "Happy Street"}
                }
            }
        ],
        governmentBuildings: [
            {type:"HOSPITAL",budget:200000, staffCount:200,
                address: {
                    number: 100,
                    street: {title: "Central Street"}
                }},
            {type:"FIRE-STATION",budget:500000, staffCount:1000,
                address: {
                    number: 100,
                    street: {title: "South Street"}
                }}],
        citizensNumber: 100000
    }
})


//01.  доповните тип HouseType (добавьте порядковий id от 1 и по возрастанию )
// 02. создайте в том же файле еще одну функцию чтоб тести прошли


test("Houses S=should be destroyed", () => {
    demolishHouseOnTheStreet(city, "Happy Street")
    expect(city.houses.length).toBe(1)
    expect(city.houses[0].id).toBe(1)
})

/*
test ("list of street title of houses ", ( ) => {
    let happyHouse = getHousesOnTheStreet(city.houses, "Happy Street");
    let whiteHouses = getHousesOnTheStreet(city.houses, "White Street");

    expect(happyHouse.length).toBe(2)
    expect(happyHouse.length).toBe(1)
})*/


test ("buildings with correct staff count ", ( ) => {
    let buildings = getBuildingsWithStaffCountGreaterThen(city.governmentBuildings, 500)

    expect(buildings.length).toBe(1)
    expect(buildings[0].type).toBe("FIRE-STATION")
})