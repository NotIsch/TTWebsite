import { DiscordWidget } from './DiscordWidget';
import { TeamsWidget } from './TeamsWidget';

export function DiscordPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold gradient-text">Discord</h1>
        <p className="text-sm text-white/50 mt-1">Tech Team communication hub</p>
      </div>
      <div className="max-w-md">
        <DiscordWidget />
      </div>
    </div>
  );
}

export function TeamsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold gradient-text">Microsoft Teams</h1>
        <p className="text-sm text-white/50 mt-1">Collaboration and document management</p>
      </div>
      <div className="max-w-md">
        <TeamsWidget />
      </div>
    </div>
  );
}
