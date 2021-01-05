import {CityType} from "../02/02_02";
import {createMessages, getStreetsTitlesOfGovernmentBuildings, getStreetTitleOfHouse} from "./05_02";

let city: CityType;
beforeEach(() => {
    city = {
        title: "New York",
        houses: [{
            builtAt: 2012, repaired: false,
            address: {
                number: 100,
                street: {title: "White Street"}
            }
        },
            {
                builtAt: 2008, repaired: false,
                address: {
                    number: 100,
                    street: {title: "Happy Street"}
                }
            },
            {
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
            {type:"FIRE-STATION",budget:500000, staffCount:100,
                address: {
                    number: 100,
                    street: {title: "South Street"}
                }}],
        citizensNumber: 100000
    }
})

test ("list of streets titles of government buildings", () => {
    let streetsNames = getStreetsTitlesOfGovernmentBuildings(city.governmentBuildings)
    expect(streetsNames.length).toBe(2)
    expect(streetsNames[0]).toBe("Central Street")
    expect(streetsNames[1]).toBe("South Street")
})

test("list of streets title", ( ) => {
    let street = getStreetTitleOfHouse(city.houses)

    expect(street.length).toBe(3)
    expect(street[0]).toBe("White street")
    expect(street[1]).toBe("Happy Street")
    expect(street[2]).toBe("Happy Street")
})
test ("create grating messages for street", () => {
    let messages = createMessages(city.houses)
    expect(messages.length).toBe(3)
    expect (messages[0]).toBe("Hello guys from White Street")
    expect (messages[1]).toBe("Hello guys from Happy Street")
    expect (messages[2]).toBe("Hello guys from Happy Street")
    }
)