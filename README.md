# 🔍 Discord Token Checker

Ferramenta simples para verificar tokens do Discord e classificá-los como:

- ✅ Tokens **válidos e verificados**  
- ⚠️ Tokens **válidos mas não verificados**  
- ❌ Tokens **inválidos**

---

## ⚙️ Requisitos

- [Node.js](https://nodejs.org) (recomendado: versão 18 ou superior)  
- **npm** (já vem incluso com o Node.js)

---

## 🚀 Como Usar

### 1. Prepare os Arquivos

- Baixe ou clone o repositório:
```bash
git clone https://github.com/UserWhare/discord-token-checker.git
cd discord-token-checker
```

- Adicione os tokens no arquivo `tokens.txt`, **um por linha**.

### 2. Instale as Dependências

```bash
npm install
```

> Instala: [`node-fetch`](https://www.npmjs.com/package/node-fetch) e [`chalk`](https://www.npmjs.com/package/chalk)

### 3. (Opcional) Ajuste o Intervalo

Edite o `config.json` para mudar o tempo entre verificações (em milissegundos):

```json
{
  "timeout": 250
}
```

### 4. Execute o Verificador

```bash
npm start
```
ou

```bash
node index.js
```

### 5. Resultados

Durante a execução, será exibido o progresso no terminal.  
Ao final, será criada a pasta `output/` com os seguintes arquivos:

| Arquivo               | Conteúdo                             |
|-----------------------|--------------------------------------|
| `verificados.txt`     | Tokens válidos e verificados         |
| `naoVerificados.txt`  | Tokens válidos, mas não verificados  |
| `invalidos.txt`       | Tokens inválidos                     |

---

## ⚠️ Atenção

- Use **apenas tokens sob sua responsabilidade**.  
- **Nunca compartilhe seus tokens** com outras pessoas.  
- Evite abusar da API do Discord para não ser banido.

---

## 📄 Licença

MIT © [YskAsWhere](https://github.com/UserWhare)
