import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { cpf } = body;

    const cpfLimpo = cpf ? String(cpf).replace(/\D/g, "") : "";

    if (cpfLimpo.length !== 11) {
      return NextResponse.json(
        { error: "CPF inválido." },
        { status: 400 }
      );
    }

    const backendUrl = process.env.BACKENDURL;

    const response = await fetch(`${backendUrl}/inscricao/bycpfandyear`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "CEEP-TOKEN": process.env.CEEPTOKEN || "",
      },
      body: JSON.stringify({
        cpf: cpfLimpo,
      }),
    });

    const data = await response.json();

    if (response.status === 404) {
      return NextResponse.json({ exists: false }, { status: 404 });
    }

    if (!response.ok) {
      return NextResponse.json(data, { status: response.status });
    }

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("Erro no Route Handler bycpfandyear:", error);
    return NextResponse.json(
      { error: "Erro interno ao consultar inscrição." },
      { status: 500 }
    );
  }
}
