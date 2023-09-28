import { NextRequest, NextResponse } from "next/server";
import Mux from '@mux/mux-node';

export async function POST(req: NextRequest, res: NextResponse) {
    const reqBody = await req.json();
    const { Video } = new Mux(process.env.MUX_TOKEN_ID!, process.env.MUX_TOKEN_SECRET!);
    
    const upload = await Video.Uploads.create({
      cors_origin: 'http://localhost:3000', 
      new_asset_settings: {
        passthrough: reqBody.uuid,
        playback_policy: 'public'
      },
    });
    
    return NextResponse.json({
      uploadUrl: upload.url
    });
}