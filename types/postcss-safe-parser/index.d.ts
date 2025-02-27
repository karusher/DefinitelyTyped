// Type definitions for postcss-safe-parser 5.0
// Project: https://github.com/postcss/postcss-safe-parser#readme
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
//                 Fabian van der Veen <https://github.com/fvanderveen>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.6

import { Parser, Root } from "postcss";

/**
 * A fault-tolerant CSS parser for PostCSS, which will find & fix syntax errors, capable of parsing any input.
 * It is useful for:
 * Parse legacy code with many hacks. For example, it can parse all examples from {@link http://browserhacks.com/|Browserhacks}.
 * Works with demo tools with live input like {@link http://simevidas.jsbin.com/gufoko/quiet|Autoprefixer demo}.
 */
declare namespace safeParser {
    type PostCssSafeParser = Parser<Root>;
}

declare const safeParser: safeParser.PostCssSafeParser;

export = safeParser;
