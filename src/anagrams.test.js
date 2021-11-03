import { expect } from 'chai';
import { getAnagrams } from './anagrams';

describe('getAnagrams - basic functionality', () => {
    // listen = silent
    // elbow = below
    it('returns true when two known anagrams are passed in', () => {
        const expected = true;
        const actual = getAnagrams('listen', 'silent');
        expect(actual).to.equal(expected);
    });

    // elbows =/= below
    it('returns false when either of the string has extra letters', () => {
        const expected = false;
        const actual = getAnagrams('elbows', 'below');
        expect(actual).to.equal(expected);

        const actual2 = getAnagrams('below', 'elbows');
        expect(actual2).to.equal(expected);
    });

    // listens =/= silent
    it('returns false when the strings have same letter but in different quantities', () => {
        const expected = false;
        const actual = getAnagrams('listens', 'silent');
        expect(actual).to.equal(expected);

        const actual2 = getAnagrams('silent', 'listens');
        expect(actual2).to.equal(expected);
    });

})