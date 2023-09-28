import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: NextRequest, res: NextResponse) {
    const { type: eventType, data: eventData } = await req.json();
    console.log(eventData, eventType);
    switch (eventType) {
        case "video.asset.created": {
            await prisma.videos.update({
                where: {
                    id: eventData.passthrough
                },
                data: {
                    playback_id: eventData.playback_ids[0].id,
                }
            });
            break;
        }
        
        case 'video.asset.ready': {
            await prisma.videos.update({
                where: {
                    id: eventData.passthrough
                },
                data: {
                    done: true,
                }
            });
            break;
        };

        case 'video.upload.cancelled': {
            await prisma.videos.delete({
                where: {
                    id: eventData.passthrough
                }
            });
            break;            
        }
    }

    return NextResponse.json({})
}