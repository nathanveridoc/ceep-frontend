import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const cpfLimpo = body?.cpf ? body.cpf.replace(/\D/g, "") : "";

    if (!cpfLimpo) {
      return NextResponse.json(
        { error: "CPF não informado ou inválido" },
        { status: 400 }
      );
    }

    const backendUrl = process.env.BACKENDURL || process.env.BACKEND_URL;

    // Dispara POST para o endpoint do backend Go no Render
    const response = await fetch(`${backendUrl}/inscricao/bycpf`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "CEEP-TOKEN": process.env.CEEPTOKEN || "",
      },
      body: JSON.stringify({ cpf: cpfLimpo }),
      cache: "no-store",
    });

    // Se o backend Go retornar 404 (inscrição não encontrada), repassa
    if (response.status === 404) {
      return NextResponse.json({ existe: false }, { status: 404 });
    }

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(data, { status: response.status });
    }

    // Retorna os dados da inscrição encontrada
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("Erro ao buscar CPF no Route Handler:", error);
    return NextResponse.json(
      { error: "Erro interno ao buscar CPF" },
      { status: 500 }
    );
  }
}
