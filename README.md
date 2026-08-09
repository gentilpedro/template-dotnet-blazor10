# GentilPedro.Templates.Blazor10

Template `dotnet new` de um **Blazor Web App (.NET 10)** com interatividade `Auto` (Server no primeiro acesso, depois WebAssembly) e **Serilog** (Console + File) já configurado.

## Como criar um projeto novo

**1. Configure o GitHub Packages como fonte NuGet** (uma vez só, nesta máquina — precisa de um token seu com escopo `read:packages`):

```bash
dotnet nuget add source https://nuget.pkg.github.com/gentilpedro/index.json \
  -n github-gentilpedro \
  -u gentilpedro \
  -p <SEU_TOKEN_COM_read:packages> \
  --store-password-in-clear-text
```

**2. Instale o template:**

```bash
dotnet new install GentilPedro.Templates.Blazor10
```

**3. Crie o projeto:**

```bash
dotnet new blazor10 -n MeuApp
```

### Atualizar para a versão mais nova

O pacote é republicado a cada push na `main` deste repositório. Pra pegar a versão mais recente:

```bash
dotnet new update
```

## O que vem incluído

- Blazor Web App .NET 10, `InteractiveAuto` (projeto principal + projeto `.Client` para os componentes WebAssembly)
- Serilog.AspNetCore com sinks de Console e File
- Estrutura padrão de Components/Layout/Pages
- Tema claro/escuro pronto (ver abaixo)

## Tema claro/escuro

O botão de troca de tema fica na barra superior do `MainLayout`. Como funciona:

- O tema é o `data-bs-theme` do `<html>`, que é o mecanismo nativo do **Bootstrap 5.3** — todos os componentes do Bootstrap se adaptam sozinhos.
- `wwwroot/js/theme.js` é carregado de forma **bloqueante no `<head>`** (`Components/App.razor`), então o tema é aplicado antes do primeiro paint e não há flash de tela clara.
- Sem escolha salva, segue o tema do sistema (`prefers-color-scheme`); ao clicar no botão a preferência é fixada em `localStorage` (chave `theme`).
- O botão é HTML puro chamando `appTheme.toggle()`, de propósito: funciona em páginas com render mode estático, sem exigir circuito Server nem baixar o runtime WebAssembly só para trocar o tema.
- A navegação aprimorada do Blazor sincroniza o DOM com o HTML do servidor e reverteria o atributo do `<html>`; por isso `App.razor` reaplica o tema no evento `enhancedload`.
- Nos seus estilos, prefira as variáveis do Bootstrap (`var(--bs-body-bg)`, `var(--bs-body-color)`, `var(--bs-border-color)`, …) a cores fixas — elas já trocam com o tema.

API disponível no browser: `appTheme.current()`, `appTheme.set('light' | 'dark' | null)`, `appTheme.toggle()`.

## Licença

MIT — veja [LICENSE](./LICENSE).
