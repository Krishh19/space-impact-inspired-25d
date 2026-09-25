import type { SkinDefinition, StageInfo, ThemeId } from "./Types";

// Viewport and coordinate space
export const GAME_WIDTH = 160;
export const GAME_HEIGHT = 90;
export const ASPECT_RATIO = GAME_WIDTH / GAME_HEIGHT;
export const RENDER_TARGET_WIDTH = 320;
export const RENDER_TARGET_HEIGHT = 180;

// Simulation loop
export const FIXED_DT = 1 / 60;
export const MAX_FRAME_DELTA = 0.1;

// 2.5D Depth layers (Three.js Z-axis)
export const DEPTH_UI = 2;
export const DEPTH_PLAYER = 0;
export const DEPTH_PROJECTILES = -0.5;
export const DEPTH_ITEMS = -0.6;
export const DEPTH_PARTICLES = -0.8;
export const DEPTH_ENEMIES = -1;
export const DEPTH_BOSS = -0.9;
export const DEPTH_BACKGROUND = -5;

// Feel & Juice settings
export const PARTICLE_POOL_SIZE = 80;
export const SHAKE_ENEMY_DESTROY_INTENSITY = 1.0;
export const SHAKE_ENEMY_DESTROY_DURATION = 0.12;
export const SHAKE_PLAYER_DAMAGE_INTENSITY = 2.5;
export const SHAKE_PLAYER_DAMAGE_DURATION = 0.25;
export const HIT_STOP_ENEMY_DESTROY = 0.04;
export const HIT_STOP_PLAYER_DAMAGE = 0.08;

// Player settings
export const PLAYER_START_X = 20;
export const PLAYER_START_Y = 45;
export const PLAYER_SPEED = 65;
export const PLAYER_WIDTH = 12;
export const PLAYER_HEIGHT = 8;
export const PLAYER_START_LIVES = 3;
export const PLAYER_INVULNERABILITY_TIME = 2.0;
export const PLAYER_BLINK_INTERVAL = 0.1;
export const PLAYER_FIRE_COOLDOWN = 0.16;
export const PLAYER_MIN_X = 6;
export const PLAYER_MAX_X = 154;
export const PLAYER_MIN_Y = 5;
export const PLAYER_MAX_Y = 85;

// Projectile settings
export const PROJECTILE_SPEED = 150;
export const PROJECTILE_WIDTH = 4;
export const PROJECTILE_HEIGHT = 2;
export const PROJECTILE_POOL_SIZE = 80;
export const PROJECTILE_DESPAWN_X = 165;

// Collectibles & Power-up settings
export const ITEM_POOL_SIZE = 25;
export const ITEM_DRIFT_SPEED = 24;
export const ITEM_LIFETIME = 10.0;
export const ITEM_WIDTH = 6;
export const ITEM_HEIGHT = 6;
export const COIN_DROP_CHANCE = 0.45;
export const POWERUP_DROP_CHANCE = 0.18;
export const POWERUP_SPREAD_DURATION = 10.0;
export const POWERUP_RAPID_DURATION = 8.0;
export const POWERUP_BOMB_DAMAGE = 15;

// Enemy Scout settings
export const SCOUT_HP = 1;
export const SCOUT_SPEED = 35;
export const SCOUT_SCORE = 100;
export const SCOUT_WIDTH = 8;
export const SCOUT_HEIGHT = 6;
export const SCOUT_SPAWN_X = 170;
export const SCOUT_DESPAWN_X = -15;

// Enemy Weaver settings (sinusoidal path, straight shots)
export const WEAVER_HP = 2;
export const WEAVER_SPEED = 28;
export const WEAVER_SCORE = 200;
export const WEAVER_WIDTH = 10;
export const WEAVER_HEIGHT = 8;

// Enemy Swooper settings (horizontal then aggressive diagonal dive)
export const SWOOPER_HP = 1;
export const SWOOPER_SPEED = 42;
export const SWOOPER_SCORE = 250;
export const SWOOPER_WIDTH = 10;
export const SWOOPER_HEIGHT = 7;

// Enemy Chaser settings (heavy tracking gunship, burst fire)
export const CHASER_HP = 3;
export const CHASER_SPEED = 22;
export const CHASER_SCORE = 350;
export const CHASER_WIDTH = 12;
export const CHASER_HEIGHT = 10;

// Enemy Projectile settings
export const ENEMY_PROJECTILE_SPEED = 65;
export const ENEMY_PROJECTILE_WIDTH = 3;
export const ENEMY_PROJECTILE_HEIGHT = 3;
export const ENEMY_PROJECTILE_DESPAWN_X = -10;
export const ENEMY_POOL_SIZE = 40;
export const SPAWN_INTERVAL = 1.3;

// Boss 1 — Titan Warden settings
export const TITAN_WARDEN_HP = 50;
export const TITAN_WARDEN_WIDTH = 32;
export const TITAN_WARDEN_HEIGHT = 24;
export const TITAN_WARDEN_HITBOX_WIDTH = 28;
export const TITAN_WARDEN_HITBOX_HEIGHT = 20;
export const TITAN_WARDEN_SCORE = 5000;

// Default LCD Monochrome Palette (Verdant)
export const COLOR_BG = 0x92b7a0;
export const COLOR_INK = 0x0f2a1d;
export const COLOR_DARK_GREEN = 0x265c3f;
export const COLOR_MID_GREEN = 0x528f65;
export const COLOR_ACCENT = 0xd4a340;

// Palette definitions for Themes
export interface ThemePalette {
  name: string;
  ink: number;
  dark: number;
  mid: number;
  light: number;
  bg: number;
  accent: number;
}

export const THEME_PALETTES: Record<ThemeId, ThemePalette> = {
  verdant: {
    name: "VERDANT ORBIT",
    ink: 0x0f2a1d,
    dark: 0x265c3f,
    mid: 0x528f65,
    light: 0x92b7a0,
    bg: 0x92b7a0,
    accent: 0xd4a340,
  },
  amber: {
    name: "IRON FORGE",
    ink: 0x221303,
    dark: 0x5c3308,
    mid: 0xa66014,
    light: 0xf3a84b,
    bg: 0xf3a84b,
    accent: 0xffdd66,
  },
  ice: {
    name: "CYBER ABYSS",
    ink: 0x071520,
    dark: 0x153c52,
    mid: 0x32789c,
    light: 0x8ac4df,
    bg: 0x8ac4df,
    accent: 0x5ce6e6,
  },
  obsidian: {
    name: "OBSIDIAN VOID",
    ink: 0x080808,
    dark: 0x3a3a3a,
    mid: 0x7c7c7c,
    light: 0xd4d4d4,
    bg: 0xd4d4d4,
    accent: 0xffffff,
  },
};

// Ship Hangar Definitions
export const SHIP_SKINS: SkinDefinition[] = [
  {
    id: "alpha",
    name: "ALPHA DART",
    cost: 0,
    description: "Standard tactical patrol fighter. Well-balanced flight and baseline dual cannons.",
    perk: "BALANCED",
    speedMultiplier: 1.0,
  },
  {
    id: "valkyrie",
    name: "VALKYRIE",
    cost: 50,
    description: "Lightweight swept-wing interceptor built for high-speed evasion and rapid flanking maneuvers.",
    perk: "+20% SPEED",
    speedMultiplier: 1.2,
  },
  {
    id: "phantom",
    name: "ONYX PHANTOM",
    cost: 100,
    description: "Stealth delta-wing reconnaissance dreadfighter equipped with a pre-charged kinetic barrier.",
    perk: "STARTING SHIELD",
    speedMultiplier: 1.0,
    hasStartingShield: true,
  },
  {
    id: "solaris",
    name: "SOLARIS",
    cost: 200,
    description: "Heavy dreadnought assault gunship with reinforced titanium plating and high-yield twin plasma discharges.",
    perk: "TWIN CANNON",
    speedMultiplier: 0.92,
  },
];

// Campaign Stage Definitions
export const CAMPAIGN_STAGES: StageInfo[] = [
  {
    stageNumber: 1,
    title: "STAGE 1",
    subtitle: "VERDANT ORBIT",
    theme: "verdant",
    description: "Infiltrate orbital defense grid. Neutralize reconnaissance drones and armored patrol units.",
  },
  {
    stageNumber: 2,
    title: "STAGE 2",
    subtitle: "IRON FOUNDRY",
    theme: "amber",
    description: "Navigate dense asteroid mining fields and high-density industrial factory defense fleets.",
  },
  {
    stageNumber: 3,
    title: "STAGE 3",
    subtitle: "CYBER ABYSS",
    theme: "ice",
    description: "Assault dreadnought graveyard in deep space. Engage command fleet flagship.",
  },
];

// Persistence keys
export const STORAGE_KEY_HIGH_SCORE = "starfall84_high_score";
export const STORAGE_KEY_SAVE_DATA = "starfall84_save_data";
