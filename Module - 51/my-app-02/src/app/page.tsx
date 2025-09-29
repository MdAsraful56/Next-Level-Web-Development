import Link from 'next/link';

const HomePage = () => {
    return (
        <div className='text-center mt-10'>
            <h1>Welcome to Our Website</h1>
            <p>
                We are glad to have you here. Explore our services and
                offerings.
            </p>
            <div className='flex justify-center space-x-4 mt-6'>
                <Link href='/about'>Learn More About Us</Link>
                <Link href='/contact'>Contact Us</Link>
            </div>
        </div>
    );
};

export default HomePage;
