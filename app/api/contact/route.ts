import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    await resend.emails.send({
      from: "Alok VVS <noreply@alokvvs.dk>",
      to: ["kontakt@alokvvs.dk"],
      subject: "Ny kontaktformular",
      html: `
        <h2>Ny kontaktbesked</h2>
        <p><strong>Navn:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Telefon:</strong> ${body.phone}</p>
        <p><strong>Besked:</strong> ${body.message}</p>
      `,
    });

    return Response.json({ success: true });
  } catch {
    return Response.json({ success: false }, { status: 500 });
  }
}