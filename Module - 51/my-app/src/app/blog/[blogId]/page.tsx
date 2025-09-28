const DynamicPage = async ({
    params,
}: {
    params: Promise<{ blogId: string }>;
}) => {
    const { blogId } = await params;

    return (
        <div>
            <h1>Dynamic Blog Post</h1>
            <p>Blog ID: {blogId}</p>
        </div>
    );
};

export default DynamicPage;
