export async function POST(req) {
  try {
    const body = await req.json();

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        access_key: process.env.WEB3FORMS_ACCESS_KEY,
        subject: "New Contact Form Submission",
        from_name: body.name,
        name: body.name,
        email: body.email,
        phone: body.phone,
        message: body.message,
        redirect: "https://yourdomain.com/thank-you", // Optional
      }),
    });

    const data = await res.json();

    if (data.success) {
      return Response.json({ success: true, message: "Form submitted successfully." });
    } else {
      return Response.json({ success: false, message: data.message || "Submission failed." }, { status: 400 });
    }
  } catch (err) {
    console.error(err);
    return Response.json({ success: false, message: "Something went wrong." }, { status: 500 });
  }
}
