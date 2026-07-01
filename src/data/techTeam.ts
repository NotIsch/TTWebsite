export interface TeamMember {
  id: number;
  name: string;
  role: string;
  photo: string;
  expertise: string[];
  favouriteEquipment: string[];
  certifications: string[];
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Alex Thompson",
    role: "Head of Tech",
    photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
    expertise: ["Lighting Design", "Sound Engineering", "Network Setup"],
    favouriteEquipment: ["ETC EOS Ion", "Yamaha CL5"],
    certifications: ["ETC Certified", "DBS Checked"]
  },
  {
    id: 2,
    name: "Samira Patel",
    role: "Lighting Specialist",
    photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Samira",
    expertise: ["ETC Programming", "BlenderDMX", "Rigging"],
    favouriteEquipment: ["ETC EOS Ion", "Martin MAC Aura"],
    certifications: ["ETC Programming Level 2"]
  },
  {
    id: 3,
    name: "James Wilson",
    role: "Sound Engineer",
    photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
    expertise: ["Live Sound", "Recording", "Radio Mics"],
    favouriteEquipment: ["Yamaha CL5", "Shure ULX-D"],
    certifications: ["Audio Engineering Diploma"]
  },
  {
    id: 4,
    name: "Emily Chen",
    role: "Stage Manager",
    photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
    expertise: ["Stage Management", "Production Planning", "Health & Safety"],
    favouriteEquipment: ["QLab", "Clear-Com"],
    certifications: ["Stage Management Certified"]
  },
  {
    id: 5,
    name: "Marcus Brown",
    role: "AV Technician",
    photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus",
    expertise: ["Projectors", "Streaming", "LED Walls"],
    favouriteEquipment: ["Blackmagic ATEM", "Epson Projectors"],
    certifications: ["AVIXA Certified"]
  },
  {
    id: 6,
    name: "Olivia Taylor",
    role: "Tech Team Trainee",
    photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Olivia",
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
