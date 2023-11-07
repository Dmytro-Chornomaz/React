
function Parent(props) {

    console.log(props);
    console.log(props.varA);
    console.log(props.varB);
    console.log(props.woman);

    let x = 123;

    props.func(x);

    return (
        <>
            <p>My name is {props.data.name}</p>
            <p style={{ color: 'green' }}>Child component</p>
        </>
    );
}

export default Parent;