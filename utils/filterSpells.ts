import { Spell } from "../types/spell";

export function filterSpells(
  spells: Spell[],
  search: string,
  school: string,
  level: string,
): Spell[] {
    return spells.filter(spell => {
      const matchSearch = spell.index?.toLowerCase().includes(search.toLowerCase())

      const matchSchool = school === "all" || spell.school?.index === school

      const matchLevel = level === "all" || spell.level === Number(level)

      return matchSearch && matchSchool && matchLevel
    });
}