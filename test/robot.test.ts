import { Robot } from "../src/robot";

describe("robot", () => {
  const minX = 0;
  const minY = 0;
  const maxX = 9;
  const maxY = 9;

  it("shall reside at 0,0 when instantiated", () => {
    const robot = new Robot(0, 0);
    expect(robot.x).toEqual(0);
    expect(robot.y).toEqual(0);
  });

  const testData = [
    [0, 0, "N", 0, 1, "move North"],
    [0, 0, "S", 0, 0, "from zero reach lower limit of world"],
    [0, 0, "W", 0, 0, "from zero reach lower limit of world"],
    [9, 9, "N", 9, 9, "reach max limit of world"],
    [9, 9, "E", 9, 9, "reach max limit of world"],
    [0, 0, "N E N E N E N E", 4, 4, "manage multiple commands"],
  ];

  it.each(testData)(
    "%s %s %s %s %s %s ",
    (x0, y0, cmd, xEnd, yEnd, description) => {
      const robot = new Robot(x0 as number, y0 as number);
      robot.move(cmd as string);
      expect(robot.x).toEqual(xEnd);
      expect(robot.y).toEqual(yEnd);
    }
  );
});
