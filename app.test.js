const { task1, task2, task3 } = require('./app.js')
let array

describe('Tasks from Sprint 9', () => {

    beforeEach(() => {
        array = [5, 2, -9, 1.4]
    })

    test('Should be defined', () => {
        expect(task1(array)).not.toBeUndefined()
        expect(task2(array)).toBeDefined()
        expect(task3(array)).not.toBeUndefined()
    })

    test('Task 187', () => {
        expect(task1(array)).toEqual([0.1, 0.1, -8.5, 0.1])
    })

    test('Task 205', () => {
        
        expect(task2(array)).toBe(Math.max.apply(null, array.map(Math.abs)))
        expect(task3(array)).toEqual(array.reduce((a, b) => Math.sqrt(Math.pow(a,2) + Math.pow(b,2) , 0)))
    })
})