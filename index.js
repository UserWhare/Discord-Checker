import fs from 'fs/promises';
import fsSync from 'fs'; // para ler config.json de forma síncrona
import path from 'path';
import Bot from './bot.js';

const config = JSON.parse(fsSync.readFileSync('./config.json', 'utf-8'));

const pastaSaida = 'output';

async function iniciar() {
  // Cria a pasta de saída caso não exista
  try {
    await fs.mkdir(pastaSaida);
  } catch (err) {
    if (err.code !== 'EEXIST') {
      console.error('Erro ao criar a pasta de saída:', err);
      process.exit(1);
    }
  }

  // Limpa os arquivos de saída
  await Promise.all([
    fs.writeFile(path.join(pastaSaida, 'invalidos.txt'), ''),
    fs.writeFile(path.join(pastaSaida, 'verificados.txt'), ''),
    fs.writeFile(path.join(pastaSaida, 'naoVerificados.txt'), '')
  ]);

  // Lê os tokens do arquivo e filtra linhas vazias
  let conteudo;
  try {
    conteudo = await fs.readFile('tokens.txt', 'utf-8');
  } catch (err) {
    console.error('Erro ao ler o arquivo tokens.txt:', err);
    process.exit(1);
  }
  const tokens = conteudo.replace(/\r/g, '').split('\n').filter(t => t.trim() !== '');

  console.log(`Iniciando a verificação de ${tokens.length} tokens...`);

  let i = 0;
  const intervalo = setInterval(async () => {
    if (i >= tokens.length) {
      console.log('✅ Verificação concluída!');
      clearInterval(intervalo);
      return;
    }

    const token = tokens[i];
    await Bot.checar(token);
    i++;
  }, config.timeout);
}

iniciar();
