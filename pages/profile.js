
import Head from "next/head";
import { MdOutlineAccountCircle } from "react-icons/md";
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from "next/router";
import Loading from "@/components/Loading";

export default function profile() {

    const { data: session, status } = useSession();
    const router = useRouter();

    if (status === "loading") {
        return <Loading />
    }


    return <>
        <Head>
            <title>Profile page</title>
        </Head>

        <div className="container">
            <div className="profilesettings">
                <div className="leftprofile_details flex">
                    <img src="/img/profileimg_rk.png" alt="coder" />
                    <div className="w-100">
                        <div className="flex flex-sb flex-left mt-2">
                            <h2>My Profile </h2>
                            <h3> Rk <br /> Owner Of MegaWatch </h3>
                        </div>
                        <div className="flex flex-sb mt-2">
                            <h3>Phone:</h3>
                            <input type="text" defaultValue='+91 - 0123456789' />
                        </div>
                        <div className="mt-3">
                            <input type="email" defaultValue="megawatchhelpline@gmail.com" />
                        </div>
                        <div className="flex flex-center w-100 mt-2">
                            <button>Save</button>
                        </div>
                    </div>
                </div>
                    <div className="rightlogoutsec">
                        <div className="topaccoutnbox">
                            <h2 className="flex flex-sb">My Account <MdOutlineAccountCircle /></h2>
                            <hr />
                            <div className="flex flex-sb mt-1">
                                <h3>Activate Account <br /> <span> </span></h3>
                                {session ? <button onClick={signOut}>Log Out</button> : <button onClick={signIn}>Login</button>}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        

    </>
}