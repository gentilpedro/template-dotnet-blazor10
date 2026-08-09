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

## Licença

MIT — veja [LICENSE](./LICENSE).
