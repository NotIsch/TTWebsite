export interface TeamMember {
  id: number;
  name: string;
  role: string;
  rank: 'Veteran' | 'Rookie';
  photo: string;
  expertise: string[];
  favouriteEquipment: string[];
  certifications: string[];
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Will Cr",
    role: "Tech Team Member",
    rank: "Rookie",
    photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Will",
    expertise: ["Lighting"],
    favouriteEquipment: ["ETC EOS Ion"],
    certifications: ["In-House Training"]
  },
  {
    id: 2,
    name: "Noah T",
    role: "Tech Team Member",
    rank: "Veteran",
    photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Noah",
    expertise: ["Lighting Design", "Sound Engineering", "Network Setup"],
    favouriteEquipment: ["ETC EOS Ion", "Yamaha CL5"],
    certifications: ["ETC Certified", "Sound Engineering Level 1"]
  },
  {
    id: 3,
    name: "Daniel S",
    role: "Tech Team Member",
    rank: "Rookie",
    photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Daniel",
    expertise: ["Sound", "Stage Crew"],
    favouriteEquipment: ["Yamaha CL5"],
    certifications: ["In-House Training"]
  },
  {
    id: 4,
    name: "Lizzie",
    role: "Tech Team Member",
    rank: "Veteran",
    photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lizzie",
    expertise: ["Lighting Programming", "Stage Management", "Production Planning"],
    favouriteEquipment: ["ETC EOS Ion", "QLab"],
    certifications: ["ETC Programming Level 1", "Stage Management Certified"]
  },
  {
    id: 5,
    name: "Alfie",
    role: "Tech Team Member",
    rank: "Rookie",
    photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alfie",
    expertise: ["Lighting", "Stage Crew"],
    favouriteEquipment: ["ETC EOS Ion"],
    certifications: ["In-House Training"]
  },
  {
    id: 6,
    name: "Mya",
    role: "Tech Team Member",
    rank: "Rookie",
    photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mya",
    expertise: ["Sound", "Stage Crew"],
    favouriteEquipment: ["Shure ULX-D"],
    certifications: ["In-House Training"]
  },
  {
    id: 7,
    name: "Lochlan F",
    role: "Tech Team Member",
    rank: "Rookie",
    photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lochlan",
    expertise: ["Lighting", "Sound", "Stage Crew"],
    favouriteEquipment: ["ETC EOS Ion"],
    certifications: ["In-House Training"]
  }
];

export interface Booking {
  id: number;
  eventName: string;
  date: string;
  startTime: string;
  endTime: string;
  location: string;
  eventType: string;
  microphones: number;
  lighting: boolean;
  projector: boolean;
  specialRequirements: string;
  status: 'pending' | 'approved' | 'rejected';
  teacherName: string;
  createdAt: string;
}

export const bookings: Booking[] = [
  {
    id: 1,
    eventName: "Summer Concert",
    date: "2026-07-15",
    startTime: "18:00",
    endTime: "21:00",
    location: "Main Hall",
    eventType: "Concert",
    microphones: 6,
    lighting: true,
    projector: false,
    specialRequirements: "Need follow spots",
    status: 'approved',
    teacherName: "Mrs. Johnson",
    createdAt: "2026-06-20"
  },
  {
    id: 2,
    eventName: "Year 7 Assembly",
    date: "2026-07-18",
    startTime: "09:00",
    endTime: "10:00",
    location: "Assembly Hall",
    eventType: "Assembly",
    microphones: 2,
    lighting: false,
    projector: true,
    specialRequirements: "",
    status: 'pending',
    teacherName: "Mr. Davis",
    createdAt: "2026-07-01"
  }
];

export interface CalendarEvent {
  id: number;
  title: string;
  date: string;
  type: 'production' | 'concert' | 'rehearsal' | 'meeting' | 'training' | 'booking';
}

export const calendarEvents: CalendarEvent[] = [
  { id: 1, title: "Summer Concert", date: "2026-07-15", type: "concert" },
  { id: 2, title: "Tech Team Meeting", date: "2026-07-08", type: "meeting" },
  { id: 3, title: "Drama Rehearsal", date: "2026-07-10", type: "rehearsal" },
  { id: 4, title: "School Production", date: "2026-07-22", type: "production" },
  { id: 5, title: "ETC Training Session", date: "2026-07-12", type: "training" },
  { id: 6, title: "Open Evening", date: "2026-07-25", type: "booking" }
];
