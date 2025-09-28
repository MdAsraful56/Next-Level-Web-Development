import Link from 'next/link';

const Sidebar = () => {
    return (
        <div>
            <aside className='h-screen w-64 bg-gray-800 text-white p-4'>
                <div className='p-5 text-2xl font-bold border-b border-gray-700 mb-5'>
                    Dashboard
                </div>
                <nav className=''>
                    <Link href='/' className='block hover:text-gray-300'>
                        Home
                    </Link>
                    <Link href='/profile' className='block hover:text-gray-300'>
                        Profile
                    </Link>
                    <Link
                        href='/settings'
                        className='block hover:text-gray-300'
                    >
                        Settings
                    </Link>
                </nav>
            </aside>
        </div>
    );
};

export default Sidebar;
