import {redirect} from "next/navigation";


export default function Page() {
    redirect('/');

    return <div>
        <h1>No contents found</h1>
    </div>;
}