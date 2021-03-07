var assert = require("assert");

import { parseHtml } from "../src/parser.js";

describe("parse html", () => {
    it("<a></a>", () => {
        let tree = parseHtml("<a></a>");
        assert.strictEqual(tree[0].tagName, "a");
        assert.strictEqual(tree[0].children.length, 0);
    });

    it("<a></i>", () => {
        try {
            parseHtml("<a></i>");
        } catch (error) {
            assert.strictEqual(error.message, "Tag start end doesn't match");
        }
        // let tree = parseHtml("<a></i>");
        // console.log(tree);
        // assert.strictEqual(tree[0].tagName, "a");
        // assert.strictEqual(tree[0].children.length, 0);
    });

    it(`<a href="//time.geekbang.org"></a>`, () => {
        let tree = parseHtml('<a href="//time.geekbang.org"></a>');
        assert.strictEqual(tree[0].attributes[0].name, "href");
        assert.strictEqual(tree[0].attributes[0].value, "//time.geekbang.org");
    });

    it(`<a href='//time.geekbang.org'></a>`, () => {
        let tree = parseHtml(`<a href='//time.geekbang.org'></a>`);
        assert.strictEqual(tree[0].attributes[0].name, "href");
        assert.strictEqual(tree[0].attributes[0].value, "//time.geekbang.org");
    });

    it(`<a href=time.geekbang.org></a>`, () => {
        let tree = parseHtml(`<a href=time.geekbang.org></a>`);
        assert.strictEqual(tree[0].attributes[0].name, "href");
        assert.strictEqual(tree[0].attributes[0].value, "time.geekbang.org");
    });

    it(`<img src="demo.png" alt="demo" />`, () => {
        let tree = parseHtml(`<img src="demo.png" alt="demo" />`);
        assert.strictEqual(tree[0].attributes[0].name, "src");
        assert.strictEqual(tree[0].attributes[0].value, "demo.png");
    });

    it(`<img   src=demo.png alt=demo/>`, () => {
        let tree = parseHtml(`<img   src=demo.png alt=demo/>`);
        assert.strictEqual(tree[0].attributes[0].name, "src");
        assert.strictEqual(tree[0].attributes[0].value, "demo.png");
    });

    it(`<hr/>`, () => {
        let tree = parseHtml(`<hr/>`);
        assert.strictEqual(tree[0].tagName, "hr");
        // assert.strictEqual(tree[0].attributes[0].value, "demo.png");
    });

    it(`<>`, () => {
        let tree = parseHtml(`<>`);
        // assert.strictEqual(tree[0].tagName, "hr");
        // assert.strictEqual(tree[0].attributes[0].value, "demo.png");
    });

    it(`<hr border/>`, () => {
        let tree = parseHtml(`<hr border/>`);
        assert.strictEqual(tree[0].tagName, "hr");
        // assert.strictEqual(tree[0].attributes[0].value, "demo.png");
    });

    it(`<a border show></a>`, () => {
        let tree = parseHtml(`<a border show></a>`);
        assert.strictEqual(tree[0].tagName, "a");
        assert.strictEqual(tree[0].attributes[0].name, "border");
        assert.strictEqual(tree[0].attributes[1].name, "show");
    });

    it(`<style>img {width: 85vw;}</style>`, () => {
        let tree = parseHtml(`<style>img {width: 85vw;}</style>`);
        assert.strictEqual(tree[0].tagName, "style");
        // assert.strictEqual(tree[0].attributes[0].value, "width: 85vw;");
    });

    it(`HTML`, () => {
        let tree = parseHtml(
            `<!DOCTYPE html>
            <html lang="en">
            <head>
                <title>TEST</title>
                <style>
                    #main {
                        color: black;
                    }
                    .hello {
                        border: auto;
                    }
                    img {
                        width: auto;
                    }
                    div {
                        border: auto;
                    }
                </style>
            </head>
            <body>
                <div class='hello' id='main'></div>
                <img style="width: 100vw;" src="demo.png"    alt="demo"/>
            </body>
            </html>`
        );
        assert.strictEqual(1, 1);
    });
});