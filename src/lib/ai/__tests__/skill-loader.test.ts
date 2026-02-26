import { describe, it, expect, beforeEach } from "vitest";
import { loadSkill, getAllSkillNames, clearSkillCache } from "../skill-loader";

describe("SkillLoader", () => {
  beforeEach(() => clearSkillCache());

  it("loads commission-strategy skill", () => {
    const skill = loadSkill("commission-strategy");
    expect(skill.name).toBe("commission-strategy");
    expect(skill.content).toContain("commission");
    expect(skill.content.length).toBeGreaterThan(100);
  });

  it("loads skill references for commission-strategy", () => {
    const skill = loadSkill("commission-strategy");
    expect(Object.keys(skill.references).length).toBeGreaterThan(0);
  });

  it("caches skills after first load", () => {
    const first = loadSkill("buyer-representation");
    const second = loadSkill("buyer-representation");
    expect(first).toBe(second);
  });

  it("returns all 26 skill names", () => {
    const names = getAllSkillNames();
    expect(names.length).toBe(26);
    expect(names).toContain("commission-strategy");
    expect(names).toContain("onboarding-training");
  });

  it("throws for unknown skill", () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect(() => loadSkill("nonexistent-skill" as any)).toThrow();
  });
});
