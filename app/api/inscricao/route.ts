import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { id_curso, nome_aluno, contato_whatsapp, telefone, email_contato, cpf } = body;

    // Sanitização e Validação no Servidor
    const cpfLimpo = cpf ? String(cpf).replace(/\D/g, "") : "";
    const whatsLimpo = contato_whatsapp ? String(contato_whatsapp).replace(/\D/g, "") : "";
    const telLimpo = telefone ? String(telefone).replace(/\D/g, "") : "";

    if (!idCursoValido(id_curso) || !nome_aluno || cpfLimpo.length !== 11 || whatsLimpo.length < 10 || !email_contato) {
      return NextResponse.json(
        { error: "Dados incompletos ou inválidos." },
        { status: 400 }
      );
    }

    const payloadSeguro = {
      id_curso: Number(id_curso),
      nome_aluno: String(nome_aluno).trim().slice(0, 150),
      contato_whatsapp: whatsLimpo,
      telefone: telLimpo,
      email_contato: String(email_contato).trim().toLowerCase().slice(0, 150),
      cpf: cpfLimpo,
      // data_inscricao deve ser gerada no Go, não confie no cliente!
    };

    const backendUrl = process.env.BACKENDURL;

    const response = await fetch(`${backendUrl}/inscricao/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "CEEP-TOKEN": process.env.CEEPTOKEN || "",
      },
      body: JSON.stringify(payloadSeguro),
    });

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

function idCursoValido(id: any): boolean {
  const cursosPermitidos = [4, 5, 6, 7, 8];
  return cursosPermitidos.includes(Number(id));
}
