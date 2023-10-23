import { addit } from "../src/my-code";

describe("my-code.ts", () => {
  describe("test01", () => {
    it("should return 3 when a=1 and b=2", () => {
      const ret = addit(1, 2);
      expect(ret).toBe(3);
    });
  });
});
