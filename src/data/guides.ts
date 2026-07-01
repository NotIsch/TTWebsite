export interface GuideSection {
  id: string;
  title: string;
  content: string;
  subsections?: { title: string; content: string }[];
}

export const lightingGuides: GuideSection[] = [
  {
    id: "console-setup",
    title: "Console Setup",
    content: "The ETC EOS Ion is our primary lighting console. Power on the console and wait for the EOS software to fully load. Verify the network connection by checking the network status indicator in the top-right corner.",
    subsections: [
      { title: "Initial Power-On", content: "Press the power button on the back of the console. Wait for the boot sequence to complete. The console will automatically load the last used show file." },
      { title: "Network Configuration", content: "Navigate to Settings > Network. Set the console IP to 10.0.0.2 with subnet 255.255.255.0. Ensure Art-Net is enabled for DMX output." },
      { title: "Touch Screen Calibration", content: "If the touch screen is unresponsive, hold the 'Tools' key during boot to enter calibration mode." }
    ]
  },
  {
    id: "patch-management",
    title: "Patch Management",
    content: "Patching connects your lighting fixtures to the console's control channels. Each fixture requires a unique DMX address.",
    subsections: [
      { title: "Opening Patch View", content: "Press [Patch] on the command line, then [Enter]. This opens the patch display showing all currently patched fixtures." },
      { title: "Adding Fixtures", content: "Type [Channel] [1] [Thru] [10] [Enter] to create channels 1-10. Then select fixture type from the library and assign DMX addresses." },
      { title: "Fixture Profiles", content: "We maintain custom fixture profiles for all our inventory. These are stored in the 'KingsSchool' library folder." }
    ]
  },
  {
    id: "cue-lists",
    title: "Cue Lists",
    content: "Cue lists are the backbone of any show. They store lighting states and transitions in sequence.",
    subsections: [
      { title: "Recording Cues", content: "Set your lights as desired, press [Record] [Cue] [1] [Enter]. The console stores all current intensity, position, and colour values." },
      { title: "Editing Cues", content: "Use [Cue] [1] [Enter] to recall a cue. Make changes and press [Record] [Cue] [1] [Enter] again to update." },
      { title: "Cue Timing", content: "Set fade times with [Cue] [1] [Time] [5] [Enter] for a 5-second fade. Separate up/down times with [Cue] [1] [Time] [3] [/] [5]." }
    ]
  },
  {
    id: "magic-sheets",
    title: "Magic Sheets",
    content: "Magic Sheets provide a visual, graphical interface to control your lighting rig. They can be customised to show your stage layout.",
    subsections: [
      { title: "Creating Magic Sheets", content: "In the Magic Sheet editor, drag fixtures from the fixture tree onto the canvas. Position them to match your stage layout." },
      { title: "Adding Controls", content: "Add encoder maps, colour pickers, and group masters to your Magic Sheet for quick access during performances." },
      { title: "Exporting Magic Sheets", content: "Magic Sheets are saved within the show file. Export them separately via File > Export > Magic Sheet for sharing." }
    ]
  },
  {
    id: "effects",
    title: "Effects",
    content: "The EOS effects engine allows creation of dynamic light shows with movement, colour changes, and intensity effects.",
    subsections: [
      { title: "Creating an Effect", content: "Select fixtures, press [Effect] [1] [Enter]. Use the Effects Editor to choose effect type (color chase, intensity bump, position move)." },
      { title: "Effect Parameters", content: "Adjust rate, size, and spread to control how the effect behaves. Rate = speed, Size = intensity, Spread = offset between fixtures." },
      { title: "Recording Effects", content: "Once configured, record the effect into a cue with [Record] [Cue] [X] [Enter]. The effect will play back when the cue is fired." }
    ]
  },
  {
    id: "submasters",
    title: "Submasters",
    content: "Submasters allow manual control of fixture groups via physical faders on the console.",
    subsections: [
      { title: "Assigning Submasters", content: "Select fixtures, hold [Submaster] and press a fader page button. The submaster now controls those fixtures." },
      { title: "Submaster Timing", content: "Double-tap a submaster to set its fade time. This is useful for bump effects or timed fades." }
    ]
  },
  {
    id: "show-files",
    title: "Show Files",
    content: "Show files contain all programming for a production. We maintain a structured backup system.",
    subsections: [
      { title: "Saving Show Files", content: "File > Save As. Use naming convention: [EventName]_[Date].esf2. Save to both local storage and the shared drive." },
      { title: "Opening Show Files", content: "File > Open. The console will ask if you want to save changes to the current show. Always confirm before switching." },
      { title: "Backup Protocol", content: "After each programming session, save to: (1) Console hard drive, (2) USB drive in the tech drawer, (3) Teams shared files." }
    ]
  },
  {
    id: "network",
    title: "Network Configuration",
    content: "The lighting network uses Art-Net protocol over a dedicated network switch.",
    subsections: [
      { title: "Network Topology", content: "Console connected to network switch via ethernet. Switch connects to all DMX nodes and the visualiser computer." },
      { title: "IP Addressing", content: "Console: 10.0.0.2, Visualiser PC: 10.0.0.3, DMX Nodes: 10.0.0.10-20. All use subnet 255.255.255.0." },
      { title: "Testing Connectivity", content: "Use the shell command 'ping 10.0.0.3' from the console to verify connection to the visualiser." }
    ]
  },
  {
    id: "osc-midi",
    title: "OSC and MIDI Basics",
    content: "OSC and MIDI allow external control of the EOS console from tablets, computers, or other devices.",
    subsections: [
      { title: "OSC Setup", content: "Enable OSC in Settings > Network > OSC. Default port is 8000. Use apps like TouchOSC to create custom control surfaces." },
      { title: "MIDI Control", content: "Connect a USB MIDI interface. In Settings > MIDI, map MIDI notes to cue numbers for triggering via MIDI controller." }
    ]
  },
  {
    id: "backup",
    title: "Backup Procedures",
    content: "Regular backups prevent data loss. Follow these procedures before and after every session.",
    subsections: [
      { title: "Automatic Backups", content: "The console auto-saves every 15 minutes. Manual saves override auto-save timers." },
      { title: "Emergency Recovery", content: "If the console crashes during a show, reboot and load the most recent auto-save file from the backup directory." }
    ]
  }
];

export const visualiserGuides: GuideSection[] = [
  {
    id: "getting-started",
    title: "Getting Started",
    content: "BlenderDMX transforms Blender into a powerful lighting visualiser. This guide walks through setup and configuration.",
    subsections: [
      { title: "Installing Blender", content: "Download Blender 4.0+ from blender.org. Install with default settings. We recommend keeping version consistent across all team computers." },
      { title: "Installing BlenderDMX", content: "Download the BlenderDMX add-on from the Resources section. In Blender, go to Edit > Preferences > Add-ons > Install. Select the .zip file." },
      { title: "School Venue Model", content: "Download the Kings School venue model from Resources > Venue Models. Open it in Blender to get the accurate stage and auditorium layout." }
    ]
  },
  {
    id: "network-setup",
    title: "Connecting to EOS",
    content: "Art-Net or sACN protocol connects BlenderDMX to the ETC EOS Ion console over the network.",
    subsections: [
      { title: "Art-Net Configuration", content: "In BlenderDMX settings, set protocol to Art-Net. Universe 1 corresponds to DMX universe 1 on the console. Enable 'Receive' mode." },
      { title: "Universe Configuration", content: "Map EOS output universes to BlenderDMX input universes. Typically Universe 1 = house lights, Universe 2 = stage fixtures." },
      { title: "Testing Communication", content: "On the console, bump a channel. In BlenderDMX, the DMX input monitor should show the value changing. If not, check network cables and firewall settings." }
    ]
  },
  {
    id: "building-visualiser",
    title: "Building the Visualiser",
    content: "Create a realistic 3D representation of your lighting rig inside the venue model.",
    subsections: [
      { title: "Importing Stage Models", content: "File > Append to add the venue model elements. The model includes stage, rigging positions, and seating." },
      { title: "Adding Fixtures", content: "In BlenderDMX panel, click 'Add Fixture'. Select fixture type from our library. Position it on the rig using Blender's transform tools." },
      { title: "Fixture Patching", content: "Each added fixture needs a DMX address and universe assigned in the BlenderDMX fixture properties. Match these to the console patch." },
      { title: "Beam Settings", content: "Adjust beam angle, intensity, and colour in fixture properties. Enable 'Show Beam' to see the light cone in the viewport." },
      { title: "Gobos", content: "Load custom gobo images or use BlenderDMX's built-in library. Gobo rotation and indexing are controlled via DMX." },
      { title: "Colour Mixing", content: "BlenderDMX supports CMY and RGB colour mixing. The visualiser accurately renders the mixed colour output." },
      { title: "Focus Points", content: "Create empty objects as focus targets. Parent fixtures to target empty objects for automated focus positions." }
    ]
  },
  {
    id: "show-programming",
    title: "Show Programming",
    content: "Program cues in EOS while viewing them live in BlenderDMX for real-time visual feedback.",
    subsections: [
      { title: "Recording Cues in EOS", content: "Set levels on the console, record cues as normal. BlenderDMX shows the result instantly in 3D." },
      { title: "Camera Creation", content: "Set up multiple cameras in Blender for different views: audience view, tech desk view, top-down. Switch between them during programming." },
      { title: "Animation Rendering", content: "Use Blender's animation tools to render video previews of cue sequences. Great for pre-visualisation before tech rehearsals." },
      { title: "Exporting", content: "Render screenshots with F3. Export animations as MP4 via Render > Render Animation. Share on Teams for review." }
    ]
  },
  {
    id: "troubleshooting",
    title: "Troubleshooting",
    content: "Common issues and their solutions when using BlenderDMX with EOS.",
    subsections: [
      { title: "No Fixtures Responding", content: "Check universe mapping: confirm EOS output universe matches BlenderDMX input universe. Verify Art-Net is enabled on both ends." },
      { title: "Network Issues", content: "Windows Firewall may block Art-Net. Add an inbound rule for UDP port 6454. Try disabling other network adapters." },
      { title: "Incorrect Fixture Profiles", content: "If fixture behaviour doesn't match real life, check the DMX mode is correct. Update fixture profiles from manufacturer's website." },
      { title: "Performance Optimisation", content: "Reduce beam draw distance, disable shadows, and limit visible fixtures in the viewport for better performance on laptops." },
      { title: "Common BlenderDMX Errors", content: "'No DMX Data' - check console is outputting. 'Timeout' - increase timeout in settings. 'Libary Error' - reinstall fixture profiles." }
    ]
  }
];
