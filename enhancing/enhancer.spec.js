const enhancer = require('./enhancer.js')
// test away!
describe('tests for enhancer functions', () => {
    describe('tests for repair function', () => {
        // makes sure we get error message if the item has an incorrect structure
        it('returns error message if the item has wrong structure', () => {
            const flawedItem = { bad: true }
            expect(enhancer.repair(flawedItem)).toBe(enhancer.flawedItemMessage)
        })
        // makes sure durability is set to 100 after repair
        it('returns an item object with 100 durability', () => {
            const item = {
                name: 'test-item',
                durability: 10,
                enhancement: 0
            }
            const returnedItem = enhancer.repair(item)
            expect(returnedItem.durability).toBe(100)
            expect(returnedItem.name).toBe('test-item')
            expect(returnedItem.enhancement).toBe(0)
        })
    })
    describe('tests for success function', () => {
        // makes sure we get error message if the item has an incorrect structure
        it('returns error message if the item has wrong structure', () => {
            const flawedItem = { bad: true }
            expect(enhancer.succeed(flawedItem)).toBe(enhancer.flawedItemMessage)
        })
        // makes sure enhancement is not increased if it's equal to 20
        it('returns same enhancement if its value is already equal to 20', () => {
            const item = {
                name: 'test-item',
                durability: 40,
                enhancement: 20
            }
            const returnedItem = enhancer.succeed(item)
            expect(returnedItem.durability).toBe(40)
            expect(returnedItem.name).toBe('test-item')
            expect(returnedItem.enhancement).toBe(20)
        })
        // makes sure enhancement is increased if it's initial value is less than 20
        it('returns an enhancement value increased by 1 if the initial value is less than 20', () => {
            const item = {
                name: 'test-item',
                durability: 40,
                enhancement: 10
            }
            const returnedItem = enhancer.succeed(item)
            expect(returnedItem.durability).toBe(40)
            expect(returnedItem.name).toBe('test-item')
            expect(returnedItem.enhancement).toBe(11)
        })
    })
})