import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    // 1. Recebe os dados enviados pelo formulário do seu frontend
    const body = await request.json();

    // 2. Faz a chamada para o seu backend Go hospedado no Render
    // Certifique-se de configurar a variável BACKEND_URL no painel da Vercel
    const backendUrl = process.env.BACKENDURL

    const response = await fetch(`${backendUrl}/inscricao/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Injeta o Token de segurança salvo nas variáveis de ambiente da Vercel
        "CEEP-TOKEN": process.env.CEEPTOKEN || "",
      },
      body: JSON.stringify(body),
    });

    // 3. Captura a resposta do backend Go
    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(data, { status: response.status });
    }

    return NextResponse.json(data, { status: 200 });

  } catch (error) {
    console.error("Erro no Route Handler:", error);
    return NextResponse.json(
      { error: "Erro interno ao processar a inscrição" },
      { status: 500 }
    );
  }
}
