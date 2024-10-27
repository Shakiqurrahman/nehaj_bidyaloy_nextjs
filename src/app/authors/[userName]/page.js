'use client'
import { useParams } from "next/navigation";

const AuthorDeatils = ({ params }) => {
    const paramsss = useParams();
    console.log(paramsss);

    // const { userName } = await params;
    return <div>hello {paramsss.userName}</div>;
};

export default AuthorDeatils;
