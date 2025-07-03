import fetch from 'node-fetch';
import fs from 'fs/promises';
import chalk from 'chalk';

const pastaSaida = 'output';

let invalidos = [];
let verificados = [];
let naoVerificados = [];

async function checar(token) {
  try {
    const resposta = await fetch('https://discord.com/api/v10/users/@me', {
      method: 'GET',
      headers: {
        authorization: token
      }
    });

    if (resposta.status === 401) {
      // Token inválido
      invalidos.push(token);
      await fs.appendFile(`${pastaSaida}/invalidos.txt`, token + '\n');
    } else if (resposta.ok) {
      const dados = await resposta.json();
      if (!dados.verified) {
        naoVerificados.push(token);
        await fs.appendFile(`${pastaSaida}/naoVerificados.txt`, token + '\n');
      } else {
        verificados.push(token);
        await fs.appendFile(`${pastaSaida}/verificados.txt`, token + '\n');
      }
    } else {
      // Resposta inesperada, considerar inválido
      invalidos.push(token);
      await fs.appendFile(`${pastaSaida}/invalidos.txt`, token + '\n');
    }

    mostrarStatus();
  } catch (error) {
    console.error(chalk.red('Erro ao verificar o token:'), error);
  }
}

function mostrarStatus() {
  const texto = 
    chalk.green(`Verificados: ${verificados.length}`) + chalk.blue(' | ') +
    chalk.yellow(`Não Verificados: ${naoVerificados.length}`) + chalk.blue(' | ') +
    chalk.red(`Inválidos: ${invalidos.length}`);

  const titulo = `Verificados: ${verificados.length} | Não Verificados: ${naoVerificados.length} | Inválidos: ${invalidos.length}`;

  if (process.platform === 'win32') {
    process.title = titulo;
  } else {
    process.stdout.write('\x1b]2;' + titulo + '\x1b\x5c');
  }

  console.clear();
  console.log(texto);
}

export default { checar };
