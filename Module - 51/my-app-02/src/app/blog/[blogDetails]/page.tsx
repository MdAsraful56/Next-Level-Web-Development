const BlogDetailsPage = async ({
    params,
}: {
    params: { blogDetails: string };
}) => {
    const { blogDetails } = await params;
    console.log('Blog Details Param:', blogDetails);
    return (
        <div>
            <h1>Blog Post Title</h1>
            <p>
                This is the content of the blog post. BlogDetailsPage{' '}
                {blogDetails}
            </p>
        </div>
    );
};

export default BlogDetailsPage;
