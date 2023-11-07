import { countTotalScore } from './bowling';
describe("Test countTotalScore function", () => {
  it("Bowling score counting for frames without strike and spares 11 11 11 11 11 11 11 11 11 11", () => {
    expect(countTotalScore('11 11 11 11 11 11 11 11 11 11')).toBe(20);
  });
  it("Bowling score counting for frames without strike and spares 9- 9- 9- 9- 9- 9- 9- 9- 9- 9-", () => {
    expect(countTotalScore('9- 9- 9- 9- 9- 9- 9- 9- 9- 9-')).toBe(90);
  });
  it("Bowling score counting for frames with strike (not last frame)", () => {
    expect(countTotalScore('X X X X X X X X X 11')).toBe(264);
  });
  it("Bowling score counting for frames with strike last frame", () => {
    expect(countTotalScore('X X X X X X X X X X X')).toBe(300);
  });
  it("Bowling score counting for frames with spare in last frame", () => {
    expect(countTotalScore('5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/')).toBe(150);
  });

 
});
