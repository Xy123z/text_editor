function About(props){
    return(
        <>
        <h1 className={`text-start mt-4 text-${props.mode === 'dark' ? 'light' : 'dark'}`}>About goes heres</h1>
        </>
    )
}
export default About;
