import { between } from "./bramoso_esercizio_js_58.js";
import fs from 'fs';

describe("ESERCIZIO 58", () => {
    test('TEST 01', () => {
        expect(between(
            Array.from(Array(20).keys()), 15, 18
        ).toString()).toBe([15, 16, 17, 18].toString());
    });

    test('TEST 02', () => {
        expect(between(
            Array.from(Array(69).keys()), 20, 36
        ).toString()).toBe(Array.from(Array(17).keys()).map(e => e + 20).toString());
    });

    test('TEST 03', () => {
        expect(between(Array.from(Array(10).keys()), 4, 1).toString()).toBe("");
    });
});