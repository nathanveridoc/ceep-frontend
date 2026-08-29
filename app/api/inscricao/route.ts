import { NextResponse } from "next/server";

// IDs atuais cadastrados no banco
const CURSOS_PERMITIDOS = [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22];

function idCursoValido(id: any): boolean {
  return CURSOS_PERMITIDOS.includes(Number(id));
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const id_curso1 = body.id_curso1 ?? body.id_curso_1 ?? body.id_curso;
    const id_curso2 = body.id_curso2 ?? body.id_curso_2 ?? null;
    const nome_aluno = body.nome_aluno ?? body.nome;
    const cpf_aluno = body.cpf_aluno ?? body.cpf;
    const numero_celular = body.numero_celular_aluno ?? body.contato_whatsapp ?? body.whatsapp;
    const numero_telefone = body.numero_telefone_aluno ?? body.telefone ?? body.outroTelefone ?? "";
    const email_aluno = body.email_aluno ?? body.email_contato ?? body.email;

    const cpfLimpo = cpf_aluno ? String(cpf_aluno).replace(/\D/g, "") : "";
    const whatsLimpo = numero_celular ? String(numero_celular).replace(/\D/g, "") : "";
    const telLimpo = numero_telefone ? String(numero_telefone).replace(/\D/g, "") : "";

    if (!idCursoValido(id_curso1)) {
      return NextResponse.json(
        { error: "1ª opção de curso inválida ou não selecionada." },
        { status: 400 }
      );
    }

    if (id_curso2 && (!idCursoValido(id_curso2) || Number(id_curso1) === Number(id_curso2))) {
      return NextResponse.json(
        { error: "2ª opção de curso inválida ou repetida." },
        { status: 400 }
      );
    }

    if (!nome_aluno || cpfLimpo.length !== 11 || whatsLimpo.length < 10 || !email_aluno) {
      return NextResponse.json(
        { error: "Dados pessoais incompletos ou inválidos." },
        { status: 400 }
      );
    }

    const payloadSeguro = {
      id_curso1: Number(id_curso1),
      id_curso2: id_curso2 ? Number(id_curso2) : null,
      cpf_aluno: cpfLimpo,
      nome_aluno: String(nome_aluno).trim().slice(0, 150),
      numero_celular_aluno: whatsLimpo,
      numero_telefone_aluno: telLimpo,
      email_aluno: String(email_aluno).trim().slice(0, 150),
    };

    const backendUrl = process.env.BACKENDURL;

    const response = await fetch(`${backendUrl}/inscricao/frontend`, {
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
