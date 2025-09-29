// Make sure the Sidebar component exists at the correct path.
// If Sidebar.tsx or Sidebar/index.tsx is in 'src/components', use the following import:
import Sidebar from '@/components/Sidebar';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='flex'>
            <Sidebar />
            <main className='flex-1 p-6'>{children}</main>
        </div>
    );
};

export default DashboardLayout;
