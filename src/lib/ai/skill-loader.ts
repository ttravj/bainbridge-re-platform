import fs from "fs";
import path from "path";
import type { LoadedSkill, SkillName } from "./types";

const SKILLS_DIR = path.join(process.cwd(), "skills");
const skillCache = new Map<SkillName, LoadedSkill>();

export function loadSkill(skillName: SkillName): LoadedSkill {
  const cached = skillCache.get(skillName);
  if (cached) return cached;

  const skillDir = path.join(SKILLS_DIR, skillName);
  const skillMdPath = path.join(skillDir, "SKILL.md");

  if (!fs.existsSync(skillMdPath)) {
    throw new Error(`Skill not found: ${skillName} at ${skillMdPath}`);
  }

  const content = fs.readFileSync(skillMdPath, "utf-8");

  // Parse YAML frontmatter for description
  const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
  const frontmatterBody = frontmatterMatch?.[1] ?? "";
  const descriptionMatch = frontmatterBody.match(/description:\s*"([^"]+)"/);
  const description = descriptionMatch?.[1] ?? "";

  // Load reference files
  const references: Record<string, string> = {};
  const refsDir = path.join(skillDir, "references");
  if (fs.existsSync(refsDir)) {
    for (const file of fs.readdirSync(refsDir)) {
      if (file.endsWith(".md")) {
        references[file] = fs.readFileSync(path.join(refsDir, file), "utf-8");
      }
    }
  }

  const skill: LoadedSkill = { name: skillName, description, content, references };
  skillCache.set(skillName, skill);
  return skill;
}

export function loadSkills(skillNames: SkillName[]): LoadedSkill[] {
  return skillNames.map(loadSkill);
}

export function getAllSkillNames(): SkillName[] {
  if (!fs.existsSync(SKILLS_DIR)) return [];
  return fs
    .readdirSync(SKILLS_DIR)
    .filter((d) => fs.statSync(path.join(SKILLS_DIR, d)).isDirectory()) as SkillName[];
}

export function clearSkillCache(): void {
  skillCache.clear();
}
