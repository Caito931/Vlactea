# VMath - Biblioteca de Gráficos 
<img src="VlacteaLogo.png" style="width:200px">
**VMath** é uma biblioteca em TypeScript que permite a criação e visualização de gráficos diretamente no terminal. Ela oferece funcionalidades para criar gráficos de barras, histogramas, gráficos de linha e gráficos de pontos, permitindo uma visualização simples e eficaz dos dados em ambientes de linha de comando (CLI).

# Link Do Site
- https://caito931.github.io/Vlactea/

## Índice

- [Instalação](#instalação)
- [Uso](#uso)
  - [Funções Principais](#funções-principais)
- [Exemplos de Uso](#exemplos-de-uso)
- [Licença](#licença)

## Instalação

1. Clone o repositório ou faça o download do arquivo `Vlactea.ts`.
2. Inclua o arquivo no seu projeto TypeScript.
3. Importe a biblioteca onde deseja utilizá-la:

    ```typescript
    import VMath from './Vlactea';
    ```

## Uso

VMath foi projetada para ser usada em projetos de TypeScript/Node.js e exibe gráficos diretamente no terminal.

### Funções Principais

Abaixo estão as principais funções oferecidas pela biblioteca:

- **DesenharGrafico**: Cria um gráfico de barras vertical a partir de um array de números.
- **DesenharGraficoHorizontal**: Gera um gráfico de barras horizontal.
- **DesenharGraficoPontos**: Desenha um gráfico de pontos (scatter plot) mostrando a posição de cada ponto na linha.
- **DesenharGraficoDeLinha**: Desenha um gráfico de linha que conecta os pontos de dados.
- **DesenharHistograma**: Cria um histograma a partir dos dados fornecidos, com controle sobre o número de intervalos (bins).
- **CriarTabela**: Gera uma tabela formatada com cabeçalhos e dados, adequada para visualização tabular no terminal.

Cada função utiliza o terminal para exibir gráficos e tabelas, ajustando a escala para uma visualização adequada.

## Exemplos de Uso

Aqui estão alguns exemplos básicos para ajudar a começar:

### Gráfico de Barras Vertical

```typescript
let dados = [1, 2, 3, 4, 5];
VMath.DesenharGrafico(dados);
