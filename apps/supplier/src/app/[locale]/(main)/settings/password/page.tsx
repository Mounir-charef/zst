import { Separator } from '@mono/ui';
import PasswordForm from './PasswordForm';

export default function SettingsNotificationsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Password Management</h3>
        <p className="text-muted-foreground text-sm">
          Manage your Store settings and set e-mail preferences.
        </p>
      </div>
      <Separator />
      <PasswordForm />
    </div>
  );
}
