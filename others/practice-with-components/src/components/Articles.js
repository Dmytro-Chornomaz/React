function Articles(props) {

    const definitions = props.data;

    return (
        <>
            {definitions.map((item, index) =>
                <section key={index}>
                    <h2>{item.title}</h2>
                    <div><p>{item.body}</p></div>
                </section>
            )}
        </>);
}

export default Articles;