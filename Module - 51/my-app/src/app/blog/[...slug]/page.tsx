const CatchAllRoute = async ({
    params,
}: {
    params: Promise<{ slug: string[] }>;
}) => {
    console.log(await params);
    console.log('Hello from the catch-all route');

    return (
        <div>
            <h1>Catch-All Route</h1>
            <p>This route matches all blog posts.</p>
        </div>
    );
};

export default CatchAllRoute;
