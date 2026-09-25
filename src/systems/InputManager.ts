import type { InputState } from "../core/Types";

export class InputManager {
  private readonly state: InputState = {
    left: false,
    right: false,
    up: false,
    down: false,
    fire: false,
    special: false,
    pause: false,
    start: false,
  };

  private readonly justPressed: Record<keyof InputState, boolean> = {
    left: false,
    right: false,
    up: false,
    down: false,
    fire: false,
    special: false,
    pause: false,
    start: false,
  };

  private readonly onKeyDown = (e: KeyboardEvent): void => {
    this.handleKey(e.code, e.key, true);
  };

  private readonly onKeyUp = (e: KeyboardEvent): void => {
    this.handleKey(e.code, e.key, false);
  };

  private readonly onBlur = (): void => {
    this.resetAll();
  };

  constructor() {
    window.addEventListener("keydown", this.onKeyDown);
    window.addEventListener("keyup", this.onKeyUp);
    window.addEventListener("blur", this.onBlur);
  }

  getState(): Readonly<InputState> {
    return this.state;
  }

  isActionJustPressed(action: keyof InputState): boolean {
    return this.justPressed[action];
  }

  consumeAction(action: keyof InputState): boolean {
    const pressed = this.justPressed[action];
    this.justPressed[action] = false;
    return pressed;
  }

  clearJustPressed(): void {
    for (const key in this.justPressed) {
      this.justPressed[key as keyof InputState] = false;
    }
  }

  private handleKey(code: string, key: string, isDown: boolean): void {
    const mapAction = (action: keyof InputState): void => {
      if (isDown && !this.state[action]) {
        this.justPressed[action] = true;
      }
      this.state[action] = isDown;
    };

    const k = key ? key.toLowerCase() : "";

    if (code === "ArrowLeft" || code === "KeyA" || k === "arrowleft" || k === "a") {
      mapAction("left");
    } else if (code === "ArrowRight" || code === "KeyD" || k === "arrowright" || k === "d") {
      mapAction("right");
    } else if (code === "ArrowUp" || code === "KeyW" || k === "arrowup" || k === "w") {
      mapAction("up");
    } else if (code === "ArrowDown" || code === "KeyS" || k === "arrowdown" || k === "s") {
      mapAction("down");
    } else if (code === "Space" || k === " ") {
      mapAction("fire");
      mapAction("start");
    } else if (code === "KeyZ" || code === "KeyJ" || k === "z" || k === "j") {
      mapAction("fire");
    } else if (code === "KeyX" || code === "KeyK" || k === "x" || k === "k") {
      mapAction("special");
    } else if (code === "Enter" || k === "enter") {
      mapAction("start");
    } else if (code === "Escape" || code === "KeyP" || k === "escape" || k === "p") {
      mapAction("pause");
    }
  }

  private resetAll(): void {
    for (const key in this.state) {
      this.state[key as keyof InputState] = false;
      this.justPressed[key as keyof InputState] = false;
    }
  }

  dispose(): void {
    window.removeEventListener("keydown", this.onKeyDown);
    window.removeEventListener("keyup", this.onKeyUp);
    window.removeEventListener("blur", this.onBlur);
  }
}
