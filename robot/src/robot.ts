export class Robot {
  private _x: number;
  private _y: number;

  constructor(x: number, y: number) {
    this._x = x;
    this._y = y;
  }

  public get x(): number {
    return this._x;
  }
  public get y(): number {
    return this._y;
  }
  public move(command: string) {
    // break up string into space delimited
    const cmds = command.split(" ");
    cmds.forEach((cmd) => {
      this.moveSingleCommand(cmd);
    });
  }
  public moveSingleCommand(command: string) {
    switch (command) {
      case "N":
        this._y += this._y == 9 ? 0 : 1;
        break;
      case "S":
        this._y -= this._y == 0 ? 0 : 1;
        break;
      case "W":
        this._x -= this._x == 0 ? 0 : 1;
        break;
      case "E":
        this._x += this._x == 9 ? 0 : 1;
        break;
      //   case "S":
      //     this._y--;
      default:
        throw new Error("unrecognised");
    }
  }
}
