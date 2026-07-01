export interface Resource {
  id: number;
  title: string;
  description: string;
  icon: string;
  fileSize: string;
  category: string;
}

export const resources: Resource[] = [
  { id: 1, title: "EOS Show File Template", description: "Blank show file with pre-patched fixture library", icon: "FileText", fileSize: "2.4 MB", category: "Show Files" },
  { id: 2, title: "BlenderDMX Project Template", description: "Ready-to-use visualiser project with venue model", icon: "Cube", fileSize: "45 MB", category: "Templates" },
  { id: 3, title: "Fixture Library - Kings School", description: "Complete fixture profiles for all school inventory", icon: "Lamp", fileSize: "1.8 MB", category: "Fixtures" },
  { id: 4, title: "Main Hall Venue Model", description: "3D model of Main Hall for BlenderDMX", icon: "Building2", fileSize: "32 MB", category: "Venue Models" },
  { id: 5, title: "Assembly Hall Stage Plan", description: "CAD drawing with dimensions and power points", icon: "Ruler", fileSize: "0.5 MB", category: "Stage Plans" },
  { id: 6, title: "Production Paperwork Pack", description: "Risk assessments, cue sheets, and contact sheets", icon: "ClipboardList", fileSize: "3.2 MB", category: "Paperwork" },
  { id: 7, title: "Yamaha CL5 Manual", description: "Quick reference guide for sound console", icon: "BookOpen", fileSize: "12 MB", category: "Manuals" },
  { id: 8, title: "Cue Sheet Template", description: "Printable cue sheet for show documentation", icon: "Table", fileSize: "0.1 MB", category: "Templates" },
  { id: 9, title: "ETC EOS Quick Reference", description: "Command cheat sheet for common operations", icon: "Zap", fileSize: "0.3 MB", category: "Manuals" },
  { id: 10, title: "Radio Mic Frequency Chart", description: "Current frequency allocations for Shure ULX-D", icon: "Radio", fileSize: "0.2 MB", category: "Paperwork" }
];
