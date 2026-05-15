export interface User {
  id: string;
  name: string;
}

export interface Manual {
  id: string;
  slug: string;
  title: string;
  file: string;
}

export interface Activity {
  id: string;
  title: string;
  description: string;
  category: 'movement' | 'cleaning' | 'supplies' | 'cooking' | 'procurement' | 'laundry' | 'reset';
  time?: string;
  day: 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';
}

export interface Assignment {
  id: string;
  userId: string;
  activityId?: string;
  manualId?: string;
}
