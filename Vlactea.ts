class VMath {
    // Função para desenhar gráfico de barras vertical
    static DesenharGrafico(arr: number[]): void {
        const maxVal = this.Maximo(arr);
        const scale = 50 / maxVal; // Escala para que o gráfico caiba na linha

        for (let v of arr) {
            const barLength = Math.floor(v * scale);
            process.stdout.write(`${v.toString().padStart(2, ' ')} | `); // Formata a saída para alinhar os números
            for (let j = 0; j < barLength; j++) {
                process.stdout.write('*');
            }
            console.log(); // Nova linha após cada barra
        }
        console.log('   +', '-'.repeat(50)); // Linha de base do gráfico
        console.log('   ', arr.join(' ')); // Impressão dos valores
    }

    // Função para encontrar o máximo em um array
    static Maximo(arr: number[]): number {
        return Math.max(...arr);
    }

    // Função para criar tabela
    static CriarTabela(titulo: string, cabecalhos: string[], dados: (string | number)[][]): void {
        console.log(titulo);
        console.log(cabecalhos.join('\t')); // Imprime os cabeçalhos da tabela

        for (let linha of dados) {
            // Aqui vamos verificar se linha é um array
            if (Array.isArray(linha)) {
                console.log(linha.join('\t')); // Imprime cada linha de dados
            } else {
                console.error("Erro: Linha não é um array", linha);
            }
        }
    }

    // Função para desenhar gráfico de barras horizontal
    static DesenharGraficoHorizontal(arr: number[]): void {
        const maxVal = this.Maximo(arr);
        const scale = 50 / maxVal; // Escala para o gráfico

        for (let v of arr) {
            const barLength = Math.floor(v * scale);
            process.stdout.write(`${v.toString().padStart(2, ' ')} | `);
            console.log('*'.repeat(barLength)); // Nova linha com a barra
        }
    }

    // Função para desenhar gráfico de pontos
    static DesenharGraficoPontos(arr: number[]): void {
        const maxVal = this.Maximo(arr);
        const scale = 50 / maxVal;

        console.log('Gráfico de Pontos:');
        for (let i = 0; i < arr.length; i++) {
            const position = Math.floor(arr[i] * scale);
            console.log(`${i + 1}: ${' '.repeat(position)}*`); // Ponto na posição correspondente
        }
    }

    // Função para desenhar gráfico de linha
    static DesenharGraficoDeLinha(arr: number[]): void {
        const maxVal = this.Maximo(arr);
        const scale = 50 / maxVal;

        console.log('Gráfico de Linha:');
        const points = arr.map(v => Math.floor(v * scale)); // Mapear valores escalados
        for (let i = 0; i < points.length; i++) {
            if (i > 0) {
                const prevPoint = points[i - 1];
                const currentPoint = points[i];
                const line = '-'.repeat(Math.abs(currentPoint - prevPoint)); // Calcular a linha entre os pontos
                console.log(`${' '.repeat(prevPoint)}*${line}${' '.repeat(currentPoint - prevPoint - 1)}*`);
            } else {
                console.log(`${' '.repeat(points[i])}*`);
            }
        }
        console.log('   +', '-'.repeat(50)); // Linha de base
        console.log('   ', arr.join(' ')); // Impressão dos valores
    }

    // Função para desenhar histograma
    static DesenharHistograma(arr: number[], intervals: number): void {
        const maxVal = this.Maximo(arr);
        const scale = 50 / maxVal; // Escala para o histograma
        const bins: number[] = Array(intervals).fill(0);
        const binSize = Math.ceil(maxVal / intervals);

        for (let v of arr) {
            const binIndex = Math.min(Math.floor(v / binSize), intervals - 1);
            bins[binIndex]++;
        }

        console.log('Histograma:');
        for (let i = 0; i < bins.length; i++) {
            process.stdout.write(`${(i * binSize).toString().padStart(2, ' ')}-${((i + 1) * binSize).toString().padStart(2, ' ')} | `);
            for (let j = 0; j < bins[i]; j++) {
                process.stdout.write('*');
            }
            console.log(); // Nova linha após cada barra do histograma
        }
        console.log('   +', '-'.repeat(50)); // Linha de base
        console.log('   ', bins.join(' ')); // Impressão dos valores do histograma
    }
}

export default VMath;
