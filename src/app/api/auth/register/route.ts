import { prisma } from "@/lib/prisma";

import bcrypt from "bcrypt";

import { NextResponse } from "next/server";

export async function POST(
  req: Request
) {
  try {
    const {
      name,
      username,
      email,
      password,
    } = await req.json();

    const existingUser =
      await prisma.user.findUnique({
        where: {
          email,
        },
      });

    if (existingUser) {
      return NextResponse.json(
        {
          error:
            "User already exists",
        },
        {
          status: 400,
        }
      );
    }

    const hashedPassword =
      await bcrypt.hash(
        password,
        10
      );

    const user =
      await prisma.user.create({
        data: {
          name,
          username,
          email,
          password:
            hashedPassword,
        },
      });

    return NextResponse.json(
      user,
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error:
          "Something went wrong",
      },
      {
        status: 500,
      }
    );
  }
}