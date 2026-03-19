export interface SpellCardProps {
  spell: Spell;
}

export interface Spell {
  index: string;
  name: string;
  desc: string[];
  higher_level?: string[];
  range: string;
  components: string[];
  material?: string;
  ritual: boolean;
  duration: string;
  concentration: boolean;
  casting_time: string;
  level: number;
  area_of_effect?: {
    type: string;
    size: number;
  }
  attack_type?: string;
  damage: {
    damage_type: {
      name: string;
    }
  }
  damage_at_slot_level?: string[];
  dc?: {
    dc_type: {
      index: string;
      name: string;
    }
    dc_success: string;
    desc: string;
  }
  heal_at_slot_level?: string[];
  school: {
    name: string;
    index: string;
  }
}