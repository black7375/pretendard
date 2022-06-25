const { FONTFAMILY, getFontList, subsets } = require("@black7375/subset-utils");

const fontList = getFontList(FONTFAMILY.PretendardStd);
subsets(
  ["static",    "woff",  fontList],
  ["static",    "woff2", fontList],
  ["variable",  "woff2", fontList],
  ["dynamic",   "woff",  fontList],
  ["dynamic",   "woff2", fontList]
);
