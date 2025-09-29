const SlugPage = async ({ params }: { params: { slug: string } }) => {
    const { slug } = await params;
    return (
        <div>
            <h1>Blog Post Title</h1>
            <p>This is the content of the blog post. SlugPage {slug}</p>
        </div>
    );
};

export default SlugPage;
