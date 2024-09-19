import './Hello.css'; 
export default function Hello({firstname,lastname="PDC",age=20}){
    return(
        <>
            <h1>Hello world {firstname} {lastname} {age}</h1>
        </>
    );
}