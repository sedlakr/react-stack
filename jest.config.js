/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    reporters: [
        "default"
        /*, "jest-junit"*/ //uncomment to run junit reporter
    ]
};