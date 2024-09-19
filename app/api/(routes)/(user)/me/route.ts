import {User, currentUser} from "@clerk/nextjs/server"

import { NextRequest, NextResponse } from "next/server"

export async function GET(req : NextRequest){
    try{
        const user : User | null = await currentUser();
        if(!user){
            return new NextResponse("Please Login", {status:400});
        }
        return NextResponse.json({user});
    }catch(e){
        console.log(e);
        return new NextResponse("Internal Error", {status : 500});
    }
}