import { expect } from "chai";
import { assert } from "console";
import { normalizeRedirect, parseShortName } from "./validators";

describe("normalizeRedirect", () => {
    it("is empty string", () => {
        const result = normalizeRedirect("");
        expect(result).equal("");
    });

    it("is already normalized", () => {
        const result = normalizeRedirect("abc");
        expect(result).equal("abc");
    });

    it("is uppercase", () => {
        const result = normalizeRedirect("ABC");
        expect(result).equal("abc");
    });

    it("has surrounding whitespace", () => {
        const result = normalizeRedirect(" abc\t ");
        expect(result).equal("abc");
    });

    it("contains whitespace", () => {
        const result = normalizeRedirect("theQuick brown  Cow ran\t fast");
        expect(result).equal("thequick-brown-cow-ran-fast");
    });

    it("has special characters", () => {
        const result = normalizeRedirect("$$abc#$%^AA%^&*");
        expect(result).equal("abcaa");
    });

    it("has special characters and hyphens", () => {
        const result = normalizeRedirect("$$abc- #$%^A--A-%^&*");
        expect(result).equal("abc-a-a-");
    });
});

describe("parseShortName", () => {
    it("is a string", () => {
        const result = parseShortName("abc");
        expect(result).equal("abc");
    });

    it("is a string that needs normalization", () => {
        const result = parseShortName("aB c");
        expect(result).equal("ab-c");
    });

    const errorCases = [
        null,
        undefined,
        true,
        false,
        0,
        1,
        new Error("test"),
        {},
    ];
    errorCases.forEach((x) => {
        it(`is ${x}`, () => {
            const result = parseShortName(x);
            assert(result instanceof Error);
            expect(result.toString()).equal(
                "Error: shortName must be a string"
            );
        });
    });
});
