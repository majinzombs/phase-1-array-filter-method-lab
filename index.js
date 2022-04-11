// Code your solution here
// const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, name) {
    const driversNames = drivers.filter(driver => driver.toUpperCase() === name.toUpperCase())
    return driversNames
}

function fuzzyMatch(drivers, name) {
    const driverInitial = drivers.filter(driver => driver.charAt(0) === name.charAt(0))
    return driverInitial
}

function matchName(drivers, string) {
    const nameChecker = drivers.filter(driver => driver.name === string)
    return nameChecker
}