import { checkForURL } from "../src/client/js/urlChecker";

describe("Testing if URL has a correct syntax", () => {
  test("Testing the checkForName() function", () => {
    expect(checkForURL("https://bestlifeonline.com/random-fun-facts/")).toBe(
      true
    );
    expect(checkForURL("https://jamesclear.com/getting-simple")).toBe(true);
    expect(checkForURL("test")).toBe(false);
  });
});
