import {CityType} from "../02/02_02";
import {addMoneyToBudget, createMessage, repairedHouse, toFireStaff, toHireStaff} from "./03";

let city: CityType;
beforeEach(() => {
    city = {
        title: "New York",
        houses: [{
            builtAt: 2012, repaired: false,
            address: {
                number: 100,
                street: {title: "White street"}
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


//01 создайте в отдельном файле функцию, чтобы тести прошли
test ("Budget should be change for HOSPITAL" , () => {
    addMoneyToBudget(city.governmentBuildings[0], 100000);
    expect (city.governmentBuildings[0].budget).toBe(300000)

})
// 01 Тести должны пройти
test("Budget should be change for FIRE-STATION", () => {
    addMoneyToBudget( city.governmentBuildings[1], -100000);
    expect (city.governmentBuildings[1].budget).toBe(400000)
})
//01 дополните тип HouseType ( добавьте порядковий id  от 1 и по возрастанию)
// 02 создайте в том же файле еще одну функцию, чтобы тесты прошли

// 01. Создайте в том же файле еще одну функцию, чтобы тесты прошли
test("House should be repaired" , () => {
    repairedHouse(city.houses[1]);

    expect(city.houses[1].repaired).toBeTruthy();
})
// 01. Создайте в том же файле еще одну функцию, чтобы тесты прошли
test ("staff should be increased", ( ) => {
    toFireStaff(city.governmentBuildings[0],20)

    expect (city.governmentBuildings[0].staffCount).toBe(180)
})

// 01. Создайте в том же файле еще одну функцию, чтобы тесты прошли
test ("House should be repaired1", () => {
    toHireStaff(city.governmentBuildings[0],20)

    expect(city.governmentBuildings[0].staffCount).toBe(220)
})
test ("Greeting message shpuld be correct for city ", () => {
    const message = createMessage (city)
  expect(message).toBe("Hello New York citizens. I want you be happy. All 100000 people ")
})