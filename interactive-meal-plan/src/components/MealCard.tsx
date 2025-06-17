import React from 'react';
import Button from './Button';

export interface Option {
  name: string;
}

export interface Group {
  title: string;
  options: Option[];
}

export interface Meal {
  id: string | number;
  groups: Group[];
}

export interface MealCardProps {
  meal: Meal;
  onSelect: (mealId: string | number, groupTitle: string, option: Option) => void;
}

const MealCard: React.FC<MealCardProps> = ({ meal, onSelect }) => (
  <div className="space-y-4">
    {meal.groups.map(group => (
      <div key={group.title} className="space-y-2">
        <h3 className="font-semibold">{group.title}</h3>
        <div className="grid gap-2">
          {group.options.map(option => (
            <Button
              key={option.name}
              variant="outline"
              className="justify-start"
              onClick={() => onSelect(meal.id, group.title, option)}
            >
              {option.name}
            </Button>
          ))}
        </div>
      </div>
    ))}
  </div>
);

export default MealCard;
