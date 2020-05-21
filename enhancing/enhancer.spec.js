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
    describe('tests for fail function', () => {
        // makes sure we get error message if the item has an incorrect structure
        it('returns error message if the item has wrong structure', () => {
            const flawedItem = { bad: true }
            expect(enhancer.fail(flawedItem)).toBe(enhancer.flawedItemMessage)
        })
        // makes sure durability is decreased by 10 when enhancement is 15 or greater and enhancement is decreased by 1 when its initial value is greater than 16
        it('returns decreased by 10 durability and by 1 decreased enhancement', () => {
            const item = {
                name: 'test-item',
                durability: 40,
                enhancement: 17
            }
            const returnedItem = enhancer.fail(item)
            expect(returnedItem.durability).toBe(30)
            expect(returnedItem.name).toBe('test-item')
            expect(returnedItem.enhancement).toBe(16)
        })
        // makes sure durability is decreased by 5 when enhancement is less than 15 and enhancement is same when its initial value is 16 or lesser.
        it('returns decreased by 5 durability and same enhancement', () => {
            const item = {
                name: 'test-item',
                durability: 40,
                enhancement: 10
            }
            const returnedItem = enhancer.fail(item)
            expect(returnedItem.durability).toBe(35)
            expect(returnedItem.name).toBe('test-item')
            expect(returnedItem.enhancement).toBe(10)
        })
    })
})