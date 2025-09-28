'use client';

import { useRouter } from 'next/navigation';

const HomePage = () => {
    const router = useRouter();

    const handleDashboardClick = () => {
        router.push('/dashboard');
    };

    return (
        <div className='text-center mt-10'>
            <h1 className='text-3xl font-bold'>Welcome to Our Website</h1>
            <p className='mt-4'>
                We are glad to have you here. Explore our content and enjoy your
                stay!
            </p>
            <button onClick={handleDashboardClick}>DashBoard</button>
        </div>
    );
};

export default HomePage;
