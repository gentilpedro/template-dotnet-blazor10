# GentilPedro.Templates.Blazor10

Template `dotnet new` de um **Blazor Web App (.NET 10)** com interatividade `Auto` (Server no primeiro acesso, depois WebAssembly) e **Serilog** (Console + File) já configurado.

## Instalar

O pacote é publicado no feed NuGet do GitHub Packages a cada push na `main` (veja `.github/workflows/publish.yml`). Para instalar, primeiro adicione o feed como fonte NuGet (uma vez só, nesta máquina):

```bash
dotnet nuget add source https://nuget.pkg.github.com/gentilpedro/index.json \
  -n github-gentilpedro \
  -u gentilpedro \
  -p <SEU_TOKEN_COM_read:packages> \
  --store-password-in-clear-text
```

Depois instale o template:

```bash
dotnet new install GentilPedro.Templates.Blazor10
```

## Usar

```bash
dotnet new blazor10 -n MeuApp
```

## Atualizar

```bash
dotnet new update
```

Isso verifica e atualiza automaticamente os pacotes de template instalados a partir da fonte NuGet configurada.

## O que vem incluído

- Blazor Web App .NET 10, `InteractiveAuto` (projeto principal + projeto `.Client` para os componentes WebAssembly)
- Serilog.AspNetCore com sinks de Console e File
- Estrutura padrão de Components/Layout/Pages

## Licença

MIT — veja [LICENSE](./LICENSE).
