import { ClassNames } from 'shared/lib/classNames/classNames'

describe('classNames', () => {
    test('only classes', () => {
        const expected = 'class1 class2'
        expect(ClassNames('class1 class2')).toBe(expected)
    })

    test('classes with mods', () => {
        const expected = 'class1 class2 first'
        expect(ClassNames('class1 class2', { first: true, last: false })).toBe(expected)
    })

    test('classes with additional', () => {
        const expected = 'class1 class2 additional'
        expect(ClassNames('class1 class2', {}, ['additional'])).toBe(expected)
    })
})
