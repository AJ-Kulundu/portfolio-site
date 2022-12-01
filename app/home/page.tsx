import TextEffect from "@components/TextEffect";

export default function HomePage(){
    return(
        <div className="mx-auto max-w-2xl p-5">
            <h1>AJ Kulundu</h1>
            <p className="text-2xl font-bold text-black"> A&nbsp;<TextEffect texts={["Software Developer", "Technical Writer", "Cloud Practitioner"]}/> </p>
        </div>
    )
}