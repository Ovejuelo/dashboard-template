import { DashboardLayout1 } from '@/layouts/dashboard';
import { getUser } from '@/lib/dal';

export default async function AuthLayout({ children }: { children: React.ReactNode }) {
  await getUser();

  return <DashboardLayout1>{children}</DashboardLayout1>;
}
