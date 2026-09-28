import * as guide from '@bryllim/workout-guide';

console.log('Package keys:', Object.keys(guide));

// Try to find the exercise list
const all = guide.exercises || guide.getAllExercises?.() || guide.default;
console.log('All exercises:', all);