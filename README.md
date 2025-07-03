# Discord Token Checker

Ferramenta simples para verificar tokens do Discord, categorizando-os em:

- Tokens válidos e verificados  
- Tokens válidos mas não verificados  
- Tokens inválidos

---

## Como usar

### Pré-requisitos

- Ter o **Node.js** instalado (recomendo a versão 18 ou superior).  
  Você pode baixar em https://nodejs.org.  
- Ter o **npm** instalado (normalmente já vem com o Node.js).

---

### Passo 1: Preparar os arquivos

- Clone este repositório ou baixe os arquivos para sua máquina.  
- Certifique-se que o arquivo `tokens.txt` está na raiz do projeto, no mesmo nível do `index.js`.  
- No arquivo `tokens.txt`, coloque os tokens que deseja verificar, **um token por linha**.  

---

### Passo 2: Instalar dependências

No terminal, dentro da pasta do projeto, execute o comando:

npm install

Isso vai instalar as bibliotecas necessárias (`node-fetch` e `chalk`).

---

### Passo 3: Configurar (opcional)

Você pode ajustar o tempo entre as verificações modificando o valor `timeout` no arquivo `config.json` (em milissegundos).  
Exemplo:  
{
  "timeout": 250
}

O padrão é 250ms entre cada verificação.

---

### Passo 4: Executar o verificador

Ainda no terminal, execute o comando:

npm start

ou

node index.js

---

### Passo 5: Acompanhar resultados

- Durante a execução, a tela mostrará o número atualizado de tokens verificados, não verificados e inválidos.  
- Ao terminar, o programa criará a pasta `output` com 3 arquivos:

| Arquivo             | Conteúdo                                |
|---------------------|----------------------------------------|
| `verificados.txt`   | Tokens válidos e verificados            |
| `naoVerificados.txt`| Tokens válidos, mas não verificados     |
| `invalidos.txt`     | Tokens inválidos                        |

---

### Atenção

- Use somente tokens que você tem permissão para verificar.  
- Não compartilhe seus tokens com outras pessoas.  
- Evite abusar da API do Discord para não correr risco de banimento ou bloqueio.

---

## Licença

MIT © YskAsWhere