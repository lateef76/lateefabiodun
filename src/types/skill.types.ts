export interface Skill {
  id: string;
  name: string;
  icon?: string;
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
}

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';
