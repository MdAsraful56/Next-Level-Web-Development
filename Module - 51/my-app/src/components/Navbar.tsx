import Link from 'next/link';

const Navbar = () => {
    return (
        <div className=''>
            <nav className='w-full bg-gray-900 text-white px-6 py-3 flex items-center justify-between'>
                <h1 className='text-3xl font-bold underline'>Next.js</h1>
                <div className='flex space-x-6'>
                    <Link href='/' className='hover:text-gray-400'>
                        Home
                    </Link>
                    <Link href='/about' className='hover:text-gray-400'>
                        About
                    </Link>
                    <Link href='/counter' className='hover:text-gray-400'>
                        Counter
                    </Link>
                    <Link href='/profile' className='hover:text-gray-400'>
                        Profile
                    </Link>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
