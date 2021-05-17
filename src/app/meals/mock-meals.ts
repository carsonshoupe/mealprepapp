import { Meal } from './meal';

export const MEALS: Set<Meal> = new Set([
    { id: '1', name: 'Chicken Fried Rice', description: 'Rice Fried with Chicken', keywords: new Set(['chicken', 'rice']) },
    { id: '2', name: 'Shrimp Fried Rice', description: 'Rice Fried with Shrimp', keywords: new Set(['shrimp', 'rice']) },
    { id: '3', name: 'Veggie Fried Rice', description: 'Rice Fried with Veggies', keywords: new Set(['veggie', 'rice']) },
    { id: '4', name: 'Chicken Noodle Soup', description: 'Soup with chicken and noodles', keywords: new Set(['chicken', 'noodle', 'soup']) },
    { id: '5', name: 'Garlic Flank Steak', description: 'Flank steak seared in garlic', keywords: new Set(['flank', 'steak', 'garlic']) },
    { id: '6', name: 'Tropical Porkchops', description: 'Porkchops fried in pineapple', keywords: new Set(['prokchops', 'pineapple']) }
])