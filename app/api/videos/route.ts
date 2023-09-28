import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
    const prisma = new PrismaClient();
    return NextResponse.json(await prisma.videos.findMany());
}

export async function POST(req: NextRequest) {
    const prisma = new PrismaClient();
    const video = await prisma.videos.create({
        data: {
            playback_id: ""
        }
    });

    return NextResponse.json({
        uuid: video.id
    });
}