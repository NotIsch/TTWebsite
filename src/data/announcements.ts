export interface Announcement {
  id: number;
  title: string;
  date: string;
  category: 'production' | 'equipment' | 'resources' | 'training';
  content: string;
  author: string;
}

export const announcements: Announcement[] = [
  {
    id: 1,
    title: "Summer Concert Tech Schedule Published",
    date: "2026-07-01",
    category: "production",
    content: "The tech schedule for the Summer Concert on July 15th is now live. All tech team members please check your assigned roles and call times.",
    author: "Alex Thompson"
  },
  {
    id: 2,
    title: "New EOS Show File Template Available",
    date: "2026-06-28",
    category: "resources",
    content: "An updated show file template with pre-patched fixture library and standard cue structure is now available in Resources.",
    author: "Samira Patel"
  },
  {
    id: 3,
    title: "Main Hall Projector Maintenance",
    date: "2026-06-25",
    category: "equipment",
    content: "The main hall projector will be serviced on July 8th. Please plan alternative arrangements for any events that day.",
    author: "Marcus Brown"
  },
  {
    id: 4,
    title: "ETC Training Session - Friday",
    date: "2026-06-22",
    category: "training",
    content: "Advanced EOS programming workshop this Friday at 3:30 PM. Focus on effects and magic sheets. All tech team welcome.",
    author: "Alex Thompson"
  },
  {
    id: 5,
    title: "New BlenderDMX Guide Published",
    date: "2026-06-20",
    category: "resources",
    content: "The complete BlenderDMX visualiser guide is now available in Technical Guides. Includes setup, programming, and troubleshooting.",
    author: "Samira Patel"
  },
  {
    id: 6,
    title: "Year-End Production Planning",
    date: "2026-06-18",
    category: "production",
    content: "Planning meeting for year-end productions on July 12th. All department leads must attend with preliminary requirements.",
    author: "Emily Chen"
  }
];
