let assert = require("assert");

// let add = require("./add.js").add;
// let addOne = require("./add").addOne;
import { add, addOne } from "./add";

describe("add function testing", function () {
    it("1 + 2 should be 3", function () {
        assert.equal(add(1, 2), 3);
    });

    it("1 + 1 should be 2", function () {
        assert.equal(addOne(1), 2);
    });
});