import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const cpfLimpo = body?.cpf ? body.cpf.replace(/\D/g, "") : "";

    if (!cpfLimpo || cpfLimpo.length !== 11) {
      return NextResponse.json(
        { error: "CPF inválido." },
        { status: 400 }
      );
    }

    const backendUrl = process.env.BACKENDURL;

    const response = await fetch(`${backendUrl}/aluno/bycpf`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "CEEP-TOKEN": process.env.CEEPTOKEN || "",
      },
      body: JSON.stringify({ cpf: cpfLimpo }),
      cache: "no-store",
    });

    if (response.status === 404) {
      return NextResponse.json({ existe: false }, { status: 200 });
    }

    if (!response.ok) {
      return NextResponse.json({ error: "Erro no servidor" }, { status: response.status });
    }

    return NextResponse.json({ existe: true }, { status: 200 });
  } catch (error) {
    console.error("Erro ao buscar CPF:", error);
    return NextResponse.json(
      { error: "Erro interno ao buscar CPF" },
      { status: 500 }
    );
  }
}
