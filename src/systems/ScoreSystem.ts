import { STORAGE_KEY_HIGH_SCORE } from "../core/Constants";

export class ScoreSystem {
  private score = 0;
  private highScore = 0;

  constructor() {
    this.loadHighScore();
  }

  getScore(): number {
    return this.score;
  }

  getHighScore(): number {
    return this.highScore;
  }

  addScore(points: number): void {
    if (points <= 0) return;
    this.score += points;
    if (this.score > this.highScore) {
      this.highScore = this.score;
      this.saveHighScore();
    }
  }

  reset(): void {
    this.score = 0;
  }

  private loadHighScore(): void {
    try {
      const stored = localStorage.getItem(STORAGE_KEY_HIGH_SCORE);
      if (stored !== null) {
        const parsed = parseInt(stored, 10);
        if (!isNaN(parsed) && parsed >= 0) {
          this.highScore = parsed;
        }
      }
    } catch {
      // localStorage may fail in restricted sandbox/iframes; fail silently
    }
  }

  private saveHighScore(): void {
    try {
      localStorage.setItem(STORAGE_KEY_HIGH_SCORE, this.highScore.toString());
    } catch {
      // Fail silently
    }
  }
}
