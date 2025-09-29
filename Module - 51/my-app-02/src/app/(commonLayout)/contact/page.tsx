const ContactPage = () => {
    return (
        <div className='p-4'>
            <h1>Contact Us</h1>
            <form className='flex flex-col space-y-4 max-w-md'>
                <label>
                    Name:
                    <input type='text' name='name' />
                </label>
                <label>
                    Email:
                    <input type='email' name='email' />
                </label>
                <label>
                    Message:
                    <textarea name='message' />
                </label>
                <button
                    className='bg-blue-500 text-white py-2 px-4 rounded'
                    type='submit'
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default ContactPage;
