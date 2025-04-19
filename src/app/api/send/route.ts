import { EmailTemplate } from "@/components/partials";
import { Resend } from "resend";
import * as React from "react";
import { NextResponse, NextRequest } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      fullName,
      email,
      phoneNumber,
      preferredTime,
      consultationType,
      preferredDate,
      healthConcerns,
    } = body;

    const { data, error } = await resend.emails.send({
      from: "homeopathicwebsite@umairshah.dev",
      to: ["homeopathiccare97@gmail.com"],
      subject: `New Appointment Request from ${fullName}`,
      react: EmailTemplate({
        fullName,
        email,
        phoneNumber,
        preferredTime,
        consultationType,
        preferredDate,
        healthConcerns,
      }) as React.ReactElement,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ message: "Email sent successfully", data });
  } catch (error) {
    console.error("Error in POST /api/send:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
