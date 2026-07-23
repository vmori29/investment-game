// ESTADO DO JOGO
        let gameState = {
            mesTotal: 1,
            idade: 18,
            saldo: 5000.00,
            historicoPatrimonio: [{ mes: 1, patrimonio: 5000 }],
            selic: 10.75, // % ao ano
            inflacao: 4.50, // % ao ano
            historicoEconomia: [{ mes: 1, selic: 10.75, inflacao: 4.50 }],
            
            // Carreira
            curriculo: 1,
            cargoId: null,
            salario: 0,
            cursoSuperior: null,
            faculdadeEmAndamento: false,
            faculdadeConcluida: false,
            faculdadeMesesCursados: 0,
            experienciaProfissional: 0,
            experienciaNoCargo: 0,
            ultimaCandidaturaMes: 0,
            posGraduacao: false,
            
            // Empresas
            empresas: [], // { id, nome, ramo, nivel, saudeFinanceira, mesesSemPrejuizo, mesesVida, valorMercado, ipo }
            
            // Investimentos — cotações de referência em 23/07/2026
            investimentos: {
                acoes: [
                    { id: "vale3", codigo: "VALE3", nome: "Vale", preco: 76.84, quantidade: 0, volatilidade: 0.10, proventoPorAcao: 2.34 },
                    { id: "petr4", codigo: "PETR4", nome: "Petrobras PN", preco: 43.34, quantidade: 0, volatilidade: 0.12, proventoPorAcao: 0.70097272 },
                    { id: "itub4", codigo: "ITUB4", nome: "Itaú Unibanco PN", preco: 42.56, quantidade: 0, volatilidade: 0.08, proventoPorAcao: 0.0182 },
                    { id: "prio3", codigo: "PRIO3", nome: "PRIO", preco: 58.18, quantidade: 0, volatilidade: 0.15, proventoPorAcao: 0 },
                    { id: "bbas3", codigo: "BBAS3", nome: "Banco do Brasil", preco: 20.95, quantidade: 0, volatilidade: 0.11, proventoPorAcao: 0.2163 }
                ],
                fiis: [
                    { id: "hglg11", codigo: "HGLG11", nome: "Pátria Log", preco: 147.57, quantidade: 0, volatilidade: 0.045, dividendoPorCota: 1.10 },
                    { id: "kncr11", codigo: "KNCR11", nome: "Kinea Rendimentos", preco: 104.20, quantidade: 0, volatilidade: 0.025, dividendoPorCota: 1.10 },
                    { id: "mxrf11", codigo: "MXRF11", nome: "Maxi Renda", preco: 9.72, quantidade: 0, volatilidade: 0.04, dividendoPorCota: 0.10 },
                    { id: "xpml11", codigo: "XPML11", nome: "XP Malls", preco: 106.50, quantidade: 0, volatilidade: 0.05, dividendoPorCota: 0.92 },
                    { id: "btlg11", codigo: "BTLG11", nome: "BTG Pactual Logística", preco: 103.80, quantidade: 0, volatilidade: 0.045, dividendoPorCota: 0.81 }
                ],
                etfs: [
                    { id: "bova11", codigo: "BOVA11", nome: "iShares Ibovespa", preco: 164.80, quantidade: 0, volatilidade: 0.075 },
                    { id: "ivvb11", codigo: "IVVB11", nome: "iShares S&P 500", preco: 475.40, quantidade: 0, volatilidade: 0.065 },
                    { id: "smal11", codigo: "SMAL11", nome: "iShares Small Cap", preco: 139.60, quantidade: 0, volatilidade: 0.11 },
                    { id: "gold11", codigo: "GOLD11", nome: "Trend ETF Ouro", preco: 25.10, quantidade: 0, volatilidade: 0.07 },
                    { id: "hash11", codigo: "HASH11", nome: "Hashdex Nasdaq Crypto", preco: 51.80, quantidade: 0, volatilidade: 0.18 }
                ],
                rendaFixa: [
                    { id: "cdb-ipca-24", nome: "CDB IPCA+", indice: "IPCA", taxaAdicional: 0.0625, prazoMeses: 24, mesesRestantes: 24, aporteMinimo: 100, saldo: 0 },
                    { id: "lci-ipca-36", nome: "LCI IPCA+", indice: "IPCA", taxaAdicional: 0.0675, prazoMeses: 36, mesesRestantes: 36, aporteMinimo: 500, saldo: 0 },
                    { id: "deb-ipca-60", nome: "Debênture Incentivada IPCA+", indice: "IPCA", taxaAdicional: 0.072, prazoMeses: 60, mesesRestantes: 60, aporteMinimo: 1000, saldo: 0 },
                    { id: "cdb-cdi-100", nome: "CDB Pós-fixado", indice: "CDI", percentualCDI: 100, prazoMeses: 12, mesesRestantes: 12, aporteMinimo: 100, saldo: 0 },
                    { id: "cdb-cdi-110", nome: "CDB Pós-fixado Premium", indice: "CDI", percentualCDI: 110, prazoMeses: 24, mesesRestantes: 24, aporteMinimo: 500, saldo: 0 },
                    { id: "cdb-cdi-120", nome: "CDB Pós-fixado Master", indice: "CDI", percentualCDI: 120, prazoMeses: 36, mesesRestantes: 36, aporteMinimo: 1000, saldo: 0 },
                    { id: "cdb-pre-12", nome: "CDB Prefixado", indice: "PREFIXADO", taxaPrefixada: 0.125, prazoMeses: 12, mesesRestantes: 12, aporteMinimo: 100, saldo: 0 },
                    { id: "lci-pre-24", nome: "LCI Prefixada", indice: "PREFIXADO", taxaPrefixada: 0.118, prazoMeses: 24, mesesRestantes: 24, aporteMinimo: 500, saldo: 0 },
                    { id: "deb-pre-48", nome: "Debênture Prefixada", indice: "PREFIXADO", taxaPrefixada: 0.132, prazoMeses: 48, mesesRestantes: 48, aporteMinimo: 1000, saldo: 0 }
                ],
                tesouroDireto: [
                    { id: "selic-2029", nome: "Tesouro Selic 2029", indice: "SELIC", aporteMinimo: 30, saldo: 0 },
                    { id: "selic-2031", nome: "Tesouro Selic 2031", indice: "SELIC", aporteMinimo: 30, saldo: 0 },
                    { id: "ipca-2029", nome: "Tesouro IPCA+ 2029", indice: "IPCA", taxaAdicional: 0.07, aporteMinimo: 30, saldo: 0 },
                    { id: "ipca-2035", nome: "Tesouro IPCA+ 2035", indice: "IPCA", taxaAdicional: 0.071, aporteMinimo: 30, saldo: 0 },
                    { id: "ipca-2040", nome: "Tesouro IPCA+ 2040", indice: "IPCA", taxaAdicional: 0.069, aporteMinimo: 30, saldo: 0 },
                    { id: "pre-2029", nome: "Tesouro Prefixado 2029", indice: "PREFIXADO", taxaPrefixada: 0.128, aporteMinimo: 30, saldo: 0 },
                    { id: "pre-2032", nome: "Tesouro Prefixado 2032", indice: "PREFIXADO", taxaPrefixada: 0.13, aporteMinimo: 30, saldo: 0 },
                    { id: "pre-js-2035", nome: "Tesouro Prefixado com Juros Semestrais 2035", indice: "PREFIXADO", taxaPrefixada: 0.131, aporteMinimo: 30, saldo: 0 }
                ]
            },

            emprestimos: [],
            consorcios: [],
            
            // Bens
            carros: [], // { id, nome, preco, custoMensal, financiado, parcela, parcelasRestantes }
            imoveis: [], // { id, nome, valorAtual, taxaValorizacaoExtra, taxaAluguelBase, financiado, parcela, parcelasRestantes, status }
            
            // Seguros
            seguroSaude: false,
            seguroResidencial: false,
            
            // Vida Pessoal
            parceiro: false,
            filhos: [], // { nome, idadeMeses }
            felicidade: 90,
            ultimaFeriasMes: 0,
            aposentado: false,
            taxaAposentadoria: 0,
            jogoEncerrado: false,
            finalExibido: false
        };

        const areasProfissionais = {
            financeiro: { nome: "Financeiro", mensalidade: 1500, duracaoMeses: 48, salarios: [3400, 6200, 10500, 17000, 23000] },
            tech: { nome: "Tech", mensalidade: 2000, duracaoMeses: 48, salarios: [4000, 7500, 12500, 20000, 28000] },
            marketing: { nome: "Marketing", mensalidade: 500, duracaoMeses: 48, salarios: [3200, 5800, 9500, 15500, 20000] },
            direito: { nome: "Direito", mensalidade: 5000, duracaoMeses: 60, salarios: [4200, 7800, 13000, 21000, 29000] },
            medicina: { nome: "Medicina", mensalidade: 10000, duracaoMeses: 72, salarios: [7000, 11000, 18000, 28000, 40000] }
        };

        const niveisEscolaridade = ["Ensino Médio", "Curso Técnico", "Ensino Superior", "Pós-graduação", "Especialização"];
        const cargosGerais = [
            { id: "jovem-aprendiz", titulo: "Jovem Aprendiz", nivel: 0, req: 1, experienciaMinima: 0, salario: 1200, requisito: "Currículo nível 1" },
            { id: "assistente", titulo: "Assistente Administrativo", nivel: 1, req: 2, experienciaMinima: 6, salario: 2800 }
        ];
        let categoriaInvestimentoAtual = "rendaFixa";

        // Preços de referência para o simulador, consultados em julho de 2026.
        const catalogoVeiculos = [
            { id: "argo", nome: "Fiat Argo", preco: 89990 },
            { id: "hb20", nome: "Hyundai HB20", preco: 88990 },
            { id: "civic", nome: "Honda Civic Advanced Hybrid", preco: 220906 },
            { id: "hrv", nome: "Honda HR-V EXL", preco: 169900 },
            { id: "tcoross", nome: "Volkswagen T-Cross", preco: 154990 },
            { id: "bmw-x1", nome: "BMW X1 sDrive20i GP", preco: 330950 },
            { id: "cayenne", nome: "Porsche Cayenne E-Hybrid", preco: 690000 },
            { id: "porsche-911-turbo", nome: "Porsche 911 Turbo", preco: 2300000 }
        ];
        const financiamentoVeiculo = { entradaPercentual: 0.20, taxaMensal: 0.012, prazoMeses: 48 };
        const catalogoImoveis = [
            { id: "kitnet", nome: "Kitnet urbana", preco: 180000, taxaValorizacaoExtra: 0.030, taxaAluguelBase: 0.0080 },
            { id: "apartamento", nome: "Apartamento residencial", preco: 380000, taxaValorizacaoExtra: 0.022, taxaAluguelBase: 0.0065 },
            { id: "casa", nome: "Casa em condomínio", preco: 650000, taxaValorizacaoExtra: 0.018, taxaAluguelBase: 0.0055 },
            { id: "sala-comercial", nome: "Sala comercial", preco: 520000, taxaValorizacaoExtra: 0.040, taxaAluguelBase: 0.0085 },
            { id: "cobertura", nome: "Cobertura premium", preco: 1250000, taxaValorizacaoExtra: 0.026, taxaAluguelBase: 0.0050 },
            { id: "mansao-jardins", nome: "Mansão Jardins", preco: 3000000, taxaValorizacaoExtra: 0.030, taxaAluguelBase: 0.0040, somenteVista: true },
            { id: "mansao-lago", nome: "Mansão Vista do Lago", preco: 5000000, taxaValorizacaoExtra: 0.032, taxaAluguelBase: 0.0040, somenteVista: true },
            { id: "mansao-praia", nome: "Mansão Pé na Areia", preco: 7500000, taxaValorizacaoExtra: 0.035, taxaAluguelBase: 0.0045, somenteVista: true },
            { id: "mansao-campo", nome: "Mansão Fazenda Boutique", preco: 10000000, taxaValorizacaoExtra: 0.028, taxaAluguelBase: 0.0035, somenteVista: true },
            { id: "mansao-penhouse", nome: "Mansão Sky Penthouse", preco: 15000000, taxaValorizacaoExtra: 0.038, taxaAluguelBase: 0.0045, somenteVista: true }
        ];
        const financiamentoImovel = { entradaPercentual: 0.20, taxaMensal: 0.008, prazoMeses: 180 };
        catalogoImoveis.push(
            { id: "faria-lima", nome: "Conjunto corporativo na Faria Lima", preco: 30000000, taxaValorizacaoExtra: 0.045, taxaAluguelBase: 0.0065, somenteVista: true },
            { id: "predio-inteiro", nome: "Prédio comercial inteiro", preco: 80000000, taxaValorizacaoExtra: 0.040, taxaAluguelBase: 0.0075, somenteVista: true },
            { id: "aeroporto", nome: "Aeroporto regional privado", preco: 250000000, taxaValorizacaoExtra: 0.032, taxaAluguelBase: 0.0085, somenteVista: true }
        );
        const ramosStartup = {
            tech: { nome: "Tecnologia", multiplicador: 1.35, risco: 1.30 },
            fintech: { nome: "Fintech", multiplicador: 1.25, risco: 1.20 },
            saude: { nome: "Saúde", multiplicador: 1.05, risco: 0.85 },
            marketing: { nome: "Marketing", multiplicador: 1.10, risco: 1.10 },
            ecommerce: { nome: "E-commerce", multiplicador: 1.18, risco: 1.15 }
        };

        const detalhesCategoriasInvestimento = {
            rendaFixa: {
                titulo: "Renda Fixa", descricao: "Títulos com vencimento definido: IPCA+, CDI entre 100% e 120% e opções prefixadas.",
                risco: "Baixo a médio", rentabilidade: "Previsível pela taxa contratada ou pelo índice", 
                comoFunciona: "Você empresta recursos a bancos ou empresas e recebe juros. Prefixados travam uma taxa; pós-fixados acompanham CDI ou IPCA + uma taxa adicional.",
                atencao: "CDB, LCI e LCA podem ter cobertura do FGC dentro dos limites aplicáveis; debêntures não. Liquidez e risco de crédito variam por emissor."
            },
            acoes: {
                titulo: "Ações B3", descricao: "Ações representam pequenas partes de empresas; os preços oscilam mensalmente no simulador.",
                risco: "Alto", rentabilidade: "Maior potencial, sem garantia", 
                comoFunciona: "Ao comprar uma ação, você se torna sócio da empresa. O retorno pode vir da valorização do preço e de dividendos ou JCP quando a companhia decide distribuir resultados.",
                atencao: "O preço pode cair bastante no curto prazo e empresas não são obrigadas a pagar proventos regularmente. Diversificação e horizonte longo ajudam a lidar com a volatilidade."
            },
            fiis: {
                titulo: "Fundos Imobiliários", descricao: "Os FIIs distribuem dividendos de referência por cota; os valores podem ser revisados com o mercado.",
                risco: "Médio a alto", rentabilidade: "Renda mensal variável + oscilação da cota", 
                comoFunciona: "Você compra cotas de fundos que investem em imóveis, recebíveis ou outros ativos imobiliários. Parte do resultado pode ser distribuída aos cotistas como rendimento.",
                atencao: "Dividendos não são garantidos e a cota pode cair. Vacância, juros, inadimplência e qualidade dos imóveis ou créditos influenciam os resultados."
            },
            etfs: {
                titulo: "ETFs", descricao: "ETFs negociados na B3 dão exposição a índices, exterior, small caps, ouro e cripto.",
                risco: "Médio a alto", rentabilidade: "Acompanha o índice ou ativo de referência", 
                comoFunciona: "Um ETF reúne vários ativos em uma única cota e busca seguir um índice ou tema. Ele facilita a diversificação, mas o preço ainda acompanha as oscilações do mercado.",
                atencao: "Diversificar reduz o risco específico de uma empresa, mas não elimina risco de mercado, câmbio, setor ou classe de ativos."
            }
        };

        function criarCargosArea(areaId) {
            const area = areasProfissionais[areaId];
            return [
                { id: `${areaId}-estagio`, titulo: `Estagiário de ${area.nome}`, area: areaId, nivel: 2, req: 2, experienciaMinima: 0, salario: Math.max(3000, Math.round(area.salarios[0] * 0.8)), requerFaculdadeEmAndamento: true, requisito: "Faculdade da área em andamento" },
                { id: `${areaId}-junior`, titulo: `Analista Júnior de ${area.nome}`, area: areaId, nivel: 3, req: 3, experienciaMinima: 0, salario: area.salarios[0], requisito: "Graduação concluída" },
                { id: `${areaId}-pleno`, titulo: `Analista Pleno de ${area.nome}`, area: areaId, nivel: 4, req: 3, experienciaMinima: 12, salario: area.salarios[1], requisito: "Graduação + 12 meses de experiência" },
                { id: `${areaId}-especialista`, titulo: `Especialista de ${area.nome}`, area: areaId, nivel: 5, req: 3, experienciaMinima: 30, salario: area.salarios[2], requisito: "Graduação + 30 meses de experiência" },
                { id: `${areaId}-gerente`, titulo: `Gerente de ${area.nome}`, area: areaId, nivel: 6, req: 4, experienciaMinima: 48, salario: area.salarios[3], requerPos: true, requisito: "Pós-graduação + 48 meses de experiência" },
                { id: `${areaId}-diretor`, titulo: `Diretor de ${area.nome}`, area: areaId, nivel: 7, req: 4, experienciaMinima: 72, salario: area.salarios[4], requerPos: true, requisito: "Pós-graduação + 72 meses de experiência" }
            ];
        }

        function obterTabelaCargos() {
            if (gameState.faculdadeEmAndamento) {
                const estagio = criarCargosArea(gameState.cursoSuperior).find(cargo => cargo.requerFaculdadeEmAndamento);
                return cargosGerais.concat(estagio);
            }
            if (!gameState.faculdadeConcluida) return cargosGerais;
            return cargosGerais.concat(criarCargosArea(gameState.cursoSuperior).filter(cargo => !cargo.requerFaculdadeEmAndamento));
        }

        function renderizarPossibilidadesCargos() {
            const cursos = gameState.cursoSuperior ? [gameState.cursoSuperior] : Object.keys(areasProfissionais);
            const cargos = cargosGerais.concat(cursos.flatMap(criarCargosArea));
            document.getElementById("lista-cargos").innerHTML = cargos.map(cargo => {
                const requisito = cargo.requisito || "Currículo nível 2 + 6 meses de experiência";
                return `<div class="career-item"><strong>${cargo.titulo}</strong><strong class="asset-price">${formatMoney(cargo.salario)}/mês</strong><small>Requisitos: ${requisito}</small></div>`;
            }).join("");
        }

        function obterCargoAtual() {
            return obterTabelaCargos().find(cargo => cargo.id === gameState.cargoId) || null;
        }

        function obterProximaVaga() {
            const vagasDisponiveis = obterTabelaCargos().filter(cargo => cargo.req <= gameState.curriculo && (!cargo.requerPos || gameState.posGraduacao) && (!cargo.requerFaculdadeEmAndamento || gameState.faculdadeEmAndamento));
            const cargoAtual = obterCargoAtual();

            if (!cargoAtual) {
                return gameState.faculdadeEmAndamento
                    ? vagasDisponiveis.find(cargo => cargo.id === `${gameState.cursoSuperior}-estagio`)
                    : gameState.faculdadeConcluida
                        ? vagasDisponiveis.find(cargo => cargo.id === `${gameState.cursoSuperior}-junior`)
                    : vagasDisponiveis[vagasDisponiveis.length - 1];
            }

            return vagasDisponiveis.find(cargo => cargo.nivel > cargoAtual.nivel) || null;
        }

        function calcularChanceDeContratacao(vaga) {
            const cargoAtual = obterCargoAtual();
            const experienciaRelevante = cargoAtual && cargoAtual.area === vaga.area
                ? gameState.experienciaNoCargo
                : gameState.experienciaProfissional;
            const mesesFaltantes = Math.max(0, vaga.experienciaMinima - experienciaRelevante);
            let chance = 0.82 - (mesesFaltantes * 0.05);

            if (!cargoAtual) chance -= 0.20;
            if (vaga.nivel >= 2) chance -= 0.08;

            chance += Math.min(gameState.experienciaProfissional, 24) * 0.005;
            return Math.max(0.12, Math.min(0.88, chance));
        }

        // TROCAR ABAS
        function switchTab(tabId) {
            document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
            document.querySelectorAll('.tab-btn').forEach(el => el.classList.remove('active'));
            document.getElementById(`tab-${tabId}`).classList.add('active');
            const botaoDaAba = Array.from(document.querySelectorAll('.tab-btn'))
                .find(botao => botao.getAttribute('onclick').includes(`'${tabId}'`));
            if (botaoDaAba) botaoDaAba.classList.add('active');
        }

        // FORMATAR MOEDA
        function formatMoney(val) {
            return val.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        }

        function calcularInvestimentos() {
            const rendaVariavel = ["acoes", "fiis", "etfs"].reduce((total, categoria) => {
                return total + gameState.investimentos[categoria]
                    .reduce((subtotal, ativo) => subtotal + (ativo.quantidade * ativo.preco), 0);
            }, 0);
            const rendaFixa = ["rendaFixa", "tesouroDireto"].reduce((total, categoria) => {
                return total + gameState.investimentos[categoria].reduce((subtotal, titulo) => subtotal + titulo.saldo, 0);
            }, 0);
            return rendaVariavel + rendaFixa;
        }

        function obterAtivo(categoria, id) {
            return gameState.investimentos[categoria].find(ativo => ativo.id === id);
        }

        function descreverRentabilidade(titulo) {
            if (titulo.indice === "IPCA") return `IPCA + ${(titulo.taxaAdicional * 100).toFixed(2)}% a.a.`;
            if (titulo.indice === "CDI") return `${titulo.percentualCDI}% do CDI`;
            if (titulo.indice === "SELIC") return "100% da SELIC";
            return `${(titulo.taxaPrefixada * 100).toFixed(2)}% a.a. prefixado`;
        }

        function mostrarCategoriaInvestimento(categoria) {
            categoriaInvestimentoAtual = categoria;
            renderizarInvestimentos();
        }

        function renderizarInvestimentos() {
            const detalhes = detalhesCategoriasInvestimento[categoriaInvestimentoAtual];
            document.getElementById("titulo-categoria-investimento").innerText = detalhes.titulo;
            document.getElementById("descricao-categoria-investimento").innerText = detalhes.descricao;
            document.getElementById("risco-categoria-investimento").innerText = detalhes.risco;
            document.getElementById("rentabilidade-categoria-investimento").innerText = detalhes.rentabilidade;
            document.getElementById("como-funciona-categoria-investimento").innerText = detalhes.comoFunciona;
            document.getElementById("atencao-categoria-investimento").innerText = detalhes.atencao;

            document.querySelectorAll(".investment-category").forEach(botao => {
                botao.classList.toggle("active", botao.dataset.category === categoriaInvestimentoAtual);
            });

            const lista = document.getElementById("lista-investimentos");
            if (categoriaInvestimentoAtual === "rendaFixa") {
                lista.innerHTML = gameState.investimentos.rendaFixa.map(titulo => {
                    const vencimento = titulo.mesesRestantes === 0 ? "Título vencido: resgate disponível" : `Vencimento em ${titulo.mesesRestantes} de ${titulo.prazoMeses} meses`;
                    return `<article class="card-item investment-card">
                        <h4>${titulo.nome}</h4>
                        <p class="asset-price">${descreverRentabilidade(titulo)}</p>
                        <p>${vencimento}</p>
                        <p>Aplicação mínima: ${formatMoney(titulo.aporteMinimo)}</p>
                        <p>Saldo aplicado: ${formatMoney(titulo.saldo)}</p>
                        <div class="investment-actions"><div class="investment-control"><label class="investment-input-label" for="aporte-${titulo.id}">Valor para investir</label>
                        <input class="investment-input" id="aporte-${titulo.id}" type="number" min="${titulo.aporteMinimo}" step="10" value="${titulo.aporteMinimo}"></div><button class="btn-action" onclick="investirRendaFixa('${titulo.id}', 'aporte-${titulo.id}')">Aplicar</button>
                        <div class="investment-control"><label class="investment-input-label" for="resgate-${titulo.id}">Valor para resgatar</label><input class="investment-input" id="resgate-${titulo.id}" type="number" min="0" step="10" value="${titulo.saldo.toFixed(2)}" ${titulo.mesesRestantes > 0 ? "disabled" : ""}></div><button class="btn-action btn-danger" onclick="resgatarRendaFixa('${titulo.id}', 'resgate-${titulo.id}')" ${titulo.mesesRestantes > 0 ? "disabled" : ""}>Resgatar</button></div>
                    </article>`;
                }).join("");
                return;
            }

            lista.innerHTML = gameState.investimentos[categoriaInvestimentoAtual].map(ativo => {
                const campoValor = `valor-${categoriaInvestimentoAtual}-${ativo.id}`;
                const campoCotas = `cotas-${ativo.id}`;
                const estimativaCotas = ["acoes", "fiis"].includes(categoriaInvestimentoAtual)
                    ? `<p id="${campoCotas}" class="investment-estimate">Cotas estimadas: 1</p>`
                    : "";
                const dividendoFII = categoriaInvestimentoAtual === "fiis"
                    ? `<p>Dividendo de referência: ${formatMoney(ativo.dividendoPorCota)} por cota/mês</p>`
                    : "";
                const proventoAcao = categoriaInvestimentoAtual === "acoes"
                    ? `<p>Provento de referência: ${formatMoney(ativo.proventoPorAcao)} por ação</p>`
                    : "";
                return `<article class="card-item investment-card">
                <h4>${ativo.nome} <small>(${ativo.codigo})</small></h4>
                <p class="asset-price">${formatMoney(ativo.preco)} por cota</p>
                <p>Quantidade em carteira: ${ativo.quantidade}</p>
                ${estimativaCotas}
                ${dividendoFII}
                ${proventoAcao}
                <div class="investment-actions"><div class="investment-control"><label class="investment-input-label" for="${campoValor}">Valor para investir</label>
                <input class="investment-input" id="${campoValor}" type="number" min="${ativo.preco.toFixed(2)}" step="1" value="${ativo.preco.toFixed(2)}" oninput="calcularCotas('${categoriaInvestimentoAtual}', '${ativo.id}', '${campoValor}', '${campoCotas}')"></div><button class="btn-action" onclick="comprarAtivo('${categoriaInvestimentoAtual}', '${ativo.id}', '${campoValor}')">Investir</button>
                <div class="investment-control"><label class="investment-input-label" for="venda-${categoriaInvestimentoAtual}-${ativo.id}">Cotas para vender</label><input class="investment-input" id="venda-${categoriaInvestimentoAtual}-${ativo.id}" type="number" min="1" step="1" value="1"></div><button class="btn-action btn-danger" onclick="venderAtivo('${categoriaInvestimentoAtual}', '${ativo.id}', 'venda-${categoriaInvestimentoAtual}-${ativo.id}')">Vender</button></div>
            </article>`;
            }).join("");
        }

        function investirRendaFixa(id, campoValor) {
            const titulo = obterAtivo("rendaFixa", id);
            if (titulo.mesesRestantes === 0 && titulo.saldo > 0) {
                log("Resgate o título vencido antes de fazer uma nova aplicação.", "warn");
            } else {
                const valor = Number(document.getElementById(campoValor).value);
                if (valor < titulo.aporteMinimo) {
                    log(`A aplicação mínima para este título é ${formatMoney(titulo.aporteMinimo)}.`, "warn");
                } else if (gameState.saldo >= valor) {
                    gameState.saldo -= valor;
                    titulo.saldo += valor;
                    log(`Aplicação de ${formatMoney(valor)} em ${titulo.nome} realizada.`, "pos");
                } else {
                    log("Saldo insuficiente para essa aplicação.", "neg");
                }
            }
            updateUI();
        }

        function resgatarRendaFixa(id, campoValor) {
            const titulo = obterAtivo("rendaFixa", id);
            if (titulo.mesesRestantes > 0) {
                log("Este título ainda está no período de vigência.", "warn");
            } else {
                const valor = Number(document.getElementById(campoValor).value);
                if (valor <= 0 || valor > titulo.saldo) {
                    log("Informe um valor de resgate disponível no título.", "warn");
                } else {
                    gameState.saldo += valor;
                    titulo.saldo -= valor;
                    log(`Resgate de ${formatMoney(valor)} do ${titulo.nome} efetuado.`, "info");
                    if (titulo.saldo < 0.01) {
                        titulo.saldo = 0;
                        titulo.mesesRestantes = titulo.prazoMeses;
                    }
                }
            }
            updateUI();
        }

        function renderizarTesouroDireto() {
            const lista = document.getElementById("lista-tesouro-direto");
            lista.innerHTML = gameState.investimentos.tesouroDireto.map(titulo => `<article class="card-item investment-card">
                <h4>${titulo.nome}</h4>
                <p class="asset-price">${descreverRentabilidade(titulo)}</p>
                <p>Aplicação mínima: ${formatMoney(titulo.aporteMinimo)}</p>
                <p>Saldo aplicado: ${formatMoney(titulo.saldo)}</p>
                <div class="investment-actions"><div class="investment-control"><label class="investment-input-label" for="tesouro-${titulo.id}">Valor para investir</label>
                <input class="investment-input" id="tesouro-${titulo.id}" type="number" min="${titulo.aporteMinimo}" step="10" value="${titulo.aporteMinimo}"></div><button class="btn-action" onclick="investirTesouro('${titulo.id}', 'tesouro-${titulo.id}')">Investir</button>
                <div class="investment-control"><label class="investment-input-label" for="resgate-tesouro-${titulo.id}">Valor para resgatar</label><input class="investment-input" id="resgate-tesouro-${titulo.id}" type="number" min="0" step="10" value="${titulo.saldo.toFixed(2)}"></div><button class="btn-action btn-danger" onclick="resgatarTesouro('${titulo.id}', 'resgate-tesouro-${titulo.id}')">Resgatar</button></div>
            </article>`).join("");
        }

        function investirTesouro(id, campoValor) {
            const titulo = obterAtivo("tesouroDireto", id);
            const valor = Number(document.getElementById(campoValor).value);
            if (valor < titulo.aporteMinimo) log(`A aplicação mínima é ${formatMoney(titulo.aporteMinimo)}.`, "warn");
            else if (gameState.saldo >= valor) {
                gameState.saldo -= valor;
                titulo.saldo += valor;
                log(`Aplicação de ${formatMoney(valor)} em ${titulo.nome}.`, "pos");
            } else log("Saldo insuficiente para essa aplicação.", "neg");
            updateUI();
        }

        function resgatarTesouro(id, campoValor) {
            const titulo = obterAtivo("tesouroDireto", id);
            const valor = Number(document.getElementById(campoValor).value);
            if (valor <= 0 || valor > titulo.saldo) log("Informe um valor disponível para resgate.", "warn");
            else {
                gameState.saldo += valor;
                titulo.saldo -= valor;
                log(`Resgate de ${formatMoney(valor)} do ${titulo.nome}.`, "info");
            }
            updateUI();
        }

        function atualizarValoresCredito() {
            document.getElementById("valor-emprestimo-label").innerText = formatMoney(Number(document.getElementById("valor-emprestimo").value));
            document.getElementById("valor-consorcio-label").innerText = formatMoney(Number(document.getElementById("valor-consorcio").value));
        }

        function solicitarEmprestimo() {
            const valor = Number(document.getElementById("valor-emprestimo").value);
            const prazo = Number(document.getElementById("prazo-emprestimo").value);
            const jurosMensal = prazo === 12 ? 0.025 : prazo === 24 ? 0.03 : 0.035;
            const parcela = (valor * (1 + (jurosMensal * prazo))) / prazo;
            gameState.saldo += valor;
            gameState.emprestimos.push({ descricao: `Empréstimo de ${formatMoney(valor)}`, parcela, parcelasRestantes: prazo });
            log(`Empréstimo aprovado: ${formatMoney(valor)} entrou na conta.`, "info");
            updateUI();
        }

        function aderirConsorcio() {
            const valor = Number(document.getElementById("valor-consorcio").value);
            const prazo = Number(document.getElementById("prazo-consorcio").value);
            const parcela = (valor * 1.12) / prazo;
            gameState.consorcios.push({ descricao: `Consórcio de carta de ${formatMoney(valor)}`, valorCarta: valor, parcela, parcelasRestantes: prazo, contemplado: false, lancesAcumulados: 0 });
            log(`Você entrou em um consórcio de ${formatMoney(valor)}.`, "info");
            updateUI();
        }

        function renderizarCreditos() {
            const lista = document.getElementById("lista-creditos");
            const contratos = [
                ...gameState.emprestimos.map(contrato => ({ ...contrato, tipo: "Empréstimo" })),
                ...gameState.consorcios.map(contrato => ({ ...contrato, tipo: "Consórcio" }))
            ];
            lista.innerHTML = contratos.length
                ? contratos.map(contrato => `<div class="card-item"><strong>${contrato.tipo}</strong> — ${contrato.descricao}<br>Parcela: ${formatMoney(contrato.parcela)} | Restam: ${contrato.parcelasRestantes} meses${contrato.tipo === "Consórcio" ? ` | ${contrato.contemplado ? "Contemplado" : "Aguardando contemplação"}` : ""}</div>`).join("")
                : "<p>Nenhum contrato ativo.</p>";
        }

        function calcularParcelaVeiculo(preco) {
            const valorFinanciado = preco * (1 - financiamentoVeiculo.entradaPercentual);
            const { taxaMensal, prazoMeses } = financiamentoVeiculo;
            return valorFinanciado * ((taxaMensal * Math.pow(1 + taxaMensal, prazoMeses)) / (Math.pow(1 + taxaMensal, prazoMeses) - 1));
        }

        function renderizarLojaVeiculos() {
            const lista = document.getElementById("lista-veiculos-disponiveis");
            lista.innerHTML = catalogoVeiculos.map(modelo => {
                const manutencao = modelo.preco * 0.05;
                const entrada = modelo.preco * financiamentoVeiculo.entradaPercentual;
                const parcela = calcularParcelaVeiculo(modelo.preco);
                return `<div class="card-item vehicle-card">
                    <h4>${modelo.nome}</h4>
                    <p class="asset-price">${formatMoney(modelo.preco)}</p>
                    <p class="hint">Gasto mensal obrigatório: <strong>${formatMoney(manutencao)}</strong> (5% do valor).</p>
                    <div class="vehicle-actions">
                        <button class="btn-action" onclick="comprarCarro('${modelo.id}', 'vista')">Comprar à vista</button>
                        <button class="btn-action btn-blue" onclick="comprarCarro('${modelo.id}', 'financiado')">Financiar: entrada ${formatMoney(entrada)} + 48x ${formatMoney(parcela)}</button>
                    </div>
                </div>`;
            }).join("");
        }

        function calcularParcelaImovel(preco) {
            const valorFinanciado = preco * (1 - financiamentoImovel.entradaPercentual);
            const { taxaMensal, prazoMeses } = financiamentoImovel;
            return valorFinanciado * ((taxaMensal * Math.pow(1 + taxaMensal, prazoMeses)) / (Math.pow(1 + taxaMensal, prazoMeses) - 1));
        }

        function calcularAluguelMensal(imovel) {
            const aluguelReajustado = imovel.valorAtual * imovel.taxaAluguelBase * (1 + (gameState.inflacao / 100));
            return Math.min(imovel.valorAtual * 0.10, aluguelReajustado);
        }

        function renderizarLojaImoveis() {
            const lista = document.getElementById("lista-imoveis-disponiveis");
            lista.innerHTML = catalogoImoveis.map(modelo => {
                const entrada = modelo.preco * financiamentoImovel.entradaPercentual;
                const parcela = calcularParcelaImovel(modelo.preco);
                const aluguelInicial = calcularAluguelMensal({ ...modelo, valorAtual: modelo.preco });
                return `<div class="card-item property-card">
                    <h4>${modelo.nome}</h4>
                    <p class="asset-price">${formatMoney(modelo.preco)}</p>
                    <p class="hint">Valorização: IPCA + ${(modelo.taxaValorizacaoExtra * 100).toFixed(1)}% a.a.</p>
                    <p class="hint">Aluguel inicial estimado: ${formatMoney(aluguelInicial)}/mês, reajustado pelo IPCA.</p>
                    <div class="vehicle-actions">
                        <button class="btn-action" onclick="comprarImovel('${modelo.id}', 'vista')">Comprar à vista</button>
                        ${modelo.somenteVista ? '<span class="hint">Financiamento indisponível para esta mansão.</span>' : `<button class="btn-action btn-blue" onclick="comprarImovel('${modelo.id}', 'financiado')">Financiar: entrada ${formatMoney(entrada)} + 180x ${formatMoney(parcela)}</button>`}
                    </div>
                </div>`;
            }).join("");
        }

        function obterFilhosDependentes() {
            return gameState.filhos.filter(filho => filho.idadeMeses < 21 * 12);
        }

        function calcularCustoFilho(filho) {
            if (filho.idadeMeses < 6 * 12) return 600;
            if (filho.idadeMeses < 12 * 12) return 850;
            if (filho.idadeMeses < 18 * 12) return 1150;
            return 1500;
        }

        function calcularCustoAlimentacaoFilhos() {
            return obterFilhosDependentes().reduce((total, filho) => {
                if (filho.idadeMeses < 6 * 12) return total + 250;
                if (filho.idadeMeses < 12 * 12) return total + 330;
                if (filho.idadeMeses < 18 * 12) return total + 430;
                return total + 550;
            }, 0);
        }

        function formatarIdadeFilho(filho) {
            const anos = Math.floor(filho.idadeMeses / 12);
            const meses = filho.idadeMeses % 12;
            return `${anos} ano(s) e ${meses} mês(es)`;
        }

        function calcularPremiosSeguros() {
            const pessoas = 1 + (gameState.parceiro ? 1 : 0) + gameState.filhos.length;
            const quantidadeImoveis = gameState.imoveis.length;
            const valorImoveis = gameState.imoveis.reduce((total, imovel) => total + imovel.valorAtual, 0);
            const valorVeiculos = gameState.carros.reduce((total, carro) => total + carro.preco, 0);
            const imoveisEmMilhoes = valorImoveis / 1000000;
            const veiculosEmMilhoes = valorVeiculos / 1000000;

            return {
                saude: 250
                    * Math.pow(1.20, pessoas - 1)
                    * Math.pow(1.08, quantidadeImoveis)
                    * Math.pow(1.07, imoveisEmMilhoes)
                    * Math.pow(1.04, veiculosEmMilhoes),
                residencial: 100
                    * Math.pow(1.18, pessoas - 1)
                    * Math.pow(1.32, quantidadeImoveis)
                    * Math.pow(1.13, imoveisEmMilhoes)
                    * Math.pow(1.05, veiculosEmMilhoes)
            };
        }

        function obterDetalhamentoCustosMensais() {
            const premios = calcularPremiosSeguros();
            const possuiMoradiaPropria = gameState.imoveis.some(imovel => imovel.status === "morando");
            const custoMoradia = possuiMoradiaPropria ? 250 : 900;
            const filhosDependentes = obterFilhosDependentes();
            const custoAlimentacao = 600 + calcularCustoAlimentacaoFilhos();
            const custoFilhos = filhosDependentes.reduce((total, filho) => total + calcularCustoFilho(filho), 0) - calcularCustoAlimentacaoFilhos();
            const mensalidadeFaculdade = gameState.faculdadeEmAndamento
                ? areasProfissionais[gameState.cursoSuperior].mensalidade
                : 0;
            return [
                { descricao: possuiMoradiaPropria ? "Contas do imóvel próprio" : "Aluguel e contas básicas", valor: custoMoradia },
                { descricao: `Alimentação${filhosDependentes.length ? ` (inclui ${filhosDependentes.length} filho(s))` : ""}`, valor: custoAlimentacao },
                { descricao: "Educação e cuidados com filhos", valor: custoFilhos },
                { descricao: "Manutenção de veículos", valor: gameState.carros.reduce((total, carro) => total + carro.custoMensal, 0) },
                { descricao: "Parcelas de veículos", valor: gameState.carros.reduce((total, carro) => total + (carro.financiado && carro.parcelasRestantes > 0 ? carro.parcela : 0), 0) },
                { descricao: "Plano de saúde", valor: gameState.seguroSaude ? premios.saude : 0 },
                { descricao: "Seguro residencial", valor: gameState.seguroResidencial ? premios.residencial : 0 },
                { descricao: "Financiamentos imobiliários", valor: gameState.imoveis.reduce((total, imovel) => total + (imovel.financiado && imovel.parcelasRestantes > 0 ? imovel.parcela : 0), 0) },
                { descricao: "Mensalidade da faculdade", valor: mensalidadeFaculdade },
                { descricao: "Parcelas de empréstimos", valor: gameState.emprestimos.reduce((total, contrato) => total + contrato.parcela, 0) },
                { descricao: "Parcelas de consórcios", valor: gameState.consorcios.reduce((total, contrato) => total + contrato.parcela, 0) }
            ].filter(custo => custo.valor > 0);
        }

        function calcularCustosMensais() {
            return obterDetalhamentoCustosMensais().reduce((total, custo) => total + custo.valor, 0);
        }

        function renderizarCustosMensais() {
            const custos = obterDetalhamentoCustosMensais();
            document.getElementById("custos-total-mensais").innerText = formatMoney(calcularCustosMensais());
            document.getElementById("lista-custos-mensais").innerHTML = custos
                .map(custo => `<div class="cost-item"><span>${custo.descricao}</span><strong>${formatMoney(custo.valor)}/mês</strong></div>`)
                .join("");
            renderizarAcoesCustos();
        }

        function valorQuitacao(contrato) {
            return contrato.parcela * contrato.parcelasRestantes;
        }

        function renderizarAcoesCustos() {
            const acoes = [];
            if (gameState.faculdadeEmAndamento) {
                const curso = areasProfissionais[gameState.cursoSuperior];
                const restante = (curso.duracaoMeses - gameState.faculdadeMesesCursados) * curso.mensalidade;
                acoes.push(`<div class="cost-action"><p><strong>Quitar faculdade de ${curso.nome}</strong><br>Restam ${curso.duracaoMeses - gameState.faculdadeMesesCursados} mensalidades.</p><button class="btn-action" onclick="quitarFaculdade()">Quitar por ${formatMoney(restante)}</button></div>`);
            }
            gameState.emprestimos.forEach((emprestimo, indice) => {
                const quitacao = valorQuitacao(emprestimo);
                acoes.push(`<div class="cost-action"><p><strong>Quitar ${emprestimo.descricao}</strong><br>Restam ${emprestimo.parcelasRestantes} parcelas.</p><button class="btn-action" onclick="quitarEmprestimo(${indice})">Quitar por ${formatMoney(quitacao)}</button></div>`);
            });
            gameState.carros.forEach((carro, indice) => {
                if (!carro.financiado || carro.parcelasRestantes <= 0) return;
                const quitacao = valorQuitacao(carro);
                acoes.push(`<div class="cost-action"><p><strong>Quitar financiamento: ${carro.nome}</strong><br>Restam ${carro.parcelasRestantes} parcelas.</p><button class="btn-action" onclick="quitarFinanciamentoVeiculo(${indice})">Quitar por ${formatMoney(quitacao)}</button></div>`);
            });
            gameState.imoveis.forEach((imovel, indice) => {
                if (!imovel.financiado || imovel.parcelasRestantes <= 0) return;
                const quitacao = valorQuitacao(imovel);
                acoes.push(`<div class="cost-action"><p><strong>Quitar financiamento: ${imovel.nome}</strong><br>Restam ${imovel.parcelasRestantes} parcelas.</p><button class="btn-action" onclick="quitarFinanciamentoImovel(${indice})">Quitar por ${formatMoney(quitacao)}</button></div>`);
            });
            gameState.consorcios.forEach((consorcio, indice) => {
                if (consorcio.contemplado) return;
                const campo = `lance-consorcio-${indice}`;
                acoes.push(`<div class="cost-action"><p><strong>Dar lance: ${consorcio.descricao}</strong><br>Lances acumulados: ${formatMoney(consorcio.lancesAcumulados || 0)}.</p><div class="vehicle-actions"><input class="investment-input" id="${campo}" type="number" min="1" step="100" placeholder="Valor do lance"><button class="btn-action btn-blue" onclick="darLanceConsorcio(${indice}, '${campo}')">Dar lance</button></div></div>`);
            });
            document.getElementById("acoes-custos").innerHTML = acoes.length
                ? acoes.join("")
                : "<p class=\"hint\">Não há dívidas, mensalidades ou consórcios pendentes para administrar.</p>";
        }

        function quitarEmprestimo(indice) {
            const emprestimo = gameState.emprestimos[indice];
            if (!emprestimo) return;
            const valor = valorQuitacao(emprestimo);
            if (gameState.saldo < valor) {
                log("Saldo insuficiente para quitar este empréstimo.", "neg");
            } else {
                gameState.saldo -= valor;
                gameState.emprestimos.splice(indice, 1);
                log(`Você quitou ${emprestimo.descricao} por ${formatMoney(valor)}.`, "pos");
            }
            updateUI();
        }

        function quitarFinanciamentoVeiculo(indice) {
            const carro = gameState.carros[indice];
            if (!carro || !carro.financiado) return;
            const valor = valorQuitacao(carro);
            if (gameState.saldo < valor) {
                log("Saldo insuficiente para quitar o financiamento do veículo.", "neg");
            } else {
                gameState.saldo -= valor;
                carro.financiado = false;
                carro.parcelasRestantes = 0;
                carro.parcela = 0;
                log(`Você quitou o financiamento de ${carro.nome} por ${formatMoney(valor)}.`, "pos");
            }
            updateUI();
        }

        function quitarFinanciamentoImovel(indice) {
            const imovel = gameState.imoveis[indice];
            if (!imovel || !imovel.financiado) return;
            const valor = valorQuitacao(imovel);
            if (gameState.saldo < valor) {
                log("Saldo insuficiente para quitar o financiamento do imóvel.", "neg");
            } else {
                gameState.saldo -= valor;
                imovel.financiado = false;
                imovel.parcelasRestantes = 0;
                imovel.parcela = 0;
                log(`Você quitou o financiamento de ${imovel.nome} por ${formatMoney(valor)}.`, "pos");
            }
            updateUI();
        }

        function quitarFaculdade() {
            if (!gameState.faculdadeEmAndamento) return;
            const curso = areasProfissionais[gameState.cursoSuperior];
            const mesesRestantes = curso.duracaoMeses - gameState.faculdadeMesesCursados;
            const valor = mesesRestantes * curso.mensalidade;
            if (gameState.saldo < valor) {
                log("Saldo insuficiente para quitar a faculdade.", "neg");
            } else {
                gameState.saldo -= valor;
                gameState.faculdadeMesesCursados = curso.duracaoMeses;
                gameState.faculdadeEmAndamento = false;
                gameState.faculdadeConcluida = true;
                gameState.curriculo = Math.max(gameState.curriculo, 3);
                log(`Você quitou e concluiu a faculdade de ${curso.nome} por ${formatMoney(valor)}.`, "pos");
            }
            updateUI();
        }

        function darLanceConsorcio(indice, campoValor) {
            const consorcio = gameState.consorcios[indice];
            const valor = Number(document.getElementById(campoValor).value);
            if (!consorcio || consorcio.contemplado || !Number.isFinite(valor) || valor <= 0) {
                log("Informe um lance válido para o consórcio.", "warn");
            } else if (gameState.saldo < valor) {
                log("Saldo insuficiente para dar este lance.", "neg");
            } else {
                gameState.saldo -= valor;
                consorcio.lancesAcumulados = (consorcio.lancesAcumulados || 0) + valor;
                const valorCarta = consorcio.valorCarta || (consorcio.parcela * consorcio.parcelasRestantes / 1.12);
                const chanceContemplacao = Math.min(0.90, 0.05 + (consorcio.lancesAcumulados / valorCarta));
                if (Math.random() < chanceContemplacao) {
                    consorcio.contemplado = true;
                    log(`Seu lance de ${formatMoney(valor)} contemplou o ${consorcio.descricao}!`, "pos");
                } else {
                    log(`Lance de ${formatMoney(valor)} registrado. Chance atual de contemplação: ${Math.round(chanceContemplacao * 100)}%.`, "info");
                }
            }
            updateUI();
        }

        function formatarDataJogo(mes) {
            const meses = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
            const indice = mes - 1;
            return `${meses[indice % 12]}/${2026 + Math.floor(indice / 12)}`;
        }

        function renderizarGraficoPatrimonio() {
            const grafico = document.getElementById("grafico-patrimonio");
            const historico = gameState.historicoPatrimonio;
            const largura = 560;
            const altura = 270;
            const margem = { superior: 20, direita: 18, inferior: 42, esquerda: 76 };
            const larguraInterna = largura - margem.esquerda - margem.direita;
            const alturaInterna = altura - margem.superior - margem.inferior;
            const valores = historico.map(registro => registro.patrimonio);
            const minimo = Math.min(0, ...valores);
            const maximoOriginal = Math.max(...valores, 1);
            const intervalo = Math.max(maximoOriginal - minimo, Math.abs(maximoOriginal) * 0.15, 1000);
            const maximo = maximoOriginal + (intervalo * 0.1);
            const minimoEscala = minimo < 0 ? minimo - (intervalo * 0.1) : 0;
            const escalaY = valor => margem.superior + ((maximo - valor) / (maximo - minimoEscala)) * alturaInterna;
            const escalaX = indice => margem.esquerda + (historico.length === 1 ? larguraInterna / 2 : (indice / (historico.length - 1)) * larguraInterna);
            const pontos = historico.map((registro, indice) => `${escalaX(indice).toFixed(1)},${escalaY(registro.patrimonio).toFixed(1)}`);
            const baseArea = escalaY(minimoEscala).toFixed(1);
            const area = `${margem.esquerda},${baseArea} ${pontos.join(" ")} ${margem.esquerda + larguraInterna},${baseArea}`;
            const linhasGuia = [0, 0.5, 1].map(fracao => {
                const valor = maximo - ((maximo - minimoEscala) * fracao);
                const y = escalaY(valor).toFixed(1);
                return `<line class="chart-grid" x1="${margem.esquerda}" y1="${y}" x2="${largura - margem.direita}" y2="${y}" /><text class="chart-axis-label" x="${margem.esquerda - 8}" y="${Number(y) + 4}" text-anchor="end">${formatMoney(valor)}</text>`;
            }).join("");
            const passoRotulo = Math.max(1, Math.ceil(historico.length / 6));
            const rotulosAno = historico.map((registro, indice) => {
                if (indice % passoRotulo !== 0 && indice !== historico.length - 1) return "";
                const texto = formatarDataJogo(registro.mes);
                return `<text class="chart-axis-label" x="${escalaX(indice)}" y="${altura - 12}" text-anchor="middle">${texto}</text>`;
            }).join("");
            const circulos = historico.map((registro, indice) => `<circle class="chart-point" cx="${escalaX(indice)}" cy="${escalaY(registro.patrimonio)}" r="4"><title>${formatarDataJogo(registro.mes)}: ${formatMoney(registro.patrimonio)}</title></circle>`).join("");

            grafico.setAttribute("viewBox", `0 0 ${largura} ${altura}`);
            grafico.innerHTML = `<title>Evolução mensal do patrimônio</title><desc>O gráfico acompanha o patrimônio total desde janeiro de 2026.</desc>${linhasGuia}<polygon class="chart-area" points="${area}" /><polyline class="chart-line" points="${pontos.join(" ")}" />${circulos}${rotulosAno}`;
            document.getElementById("geral-patrimonio-atual").innerText = formatMoney(calcularPatrimonio());
            document.getElementById("descricao-grafico-patrimonio").innerText = historico.length === 1
                ? "Avance um mês para registrar o próximo ponto da evolução."
                : `${historico.length - 1} mês(es) simulados desde janeiro de 2026.`;
        }

        function renderizarGraficoEconomia() {
            const grafico = document.getElementById("grafico-economia");
            const historico = gameState.historicoEconomia;
            const largura = 560, altura = 260, esquerda = 52, direita = 18, topo = 20, base = 42;
            const internoX = largura - esquerda - direita, internoY = altura - topo - base;
            const maximo = Math.max(15, ...historico.flatMap(item => [item.selic, item.inflacao])) + 1;
            const x = indice => esquerda + (historico.length === 1 ? internoX / 2 : (indice / (historico.length - 1)) * internoX);
            const y = valor => topo + ((maximo - valor) / maximo) * internoY;
            const pontos = chave => historico.map((item, indice) => `${x(indice).toFixed(1)},${y(item[chave]).toFixed(1)}`).join(" ");
            const guia = [0, 0.5, 1].map(fracao => {
                const valor = maximo * (1 - fracao), posicao = y(valor);
                return `<line class="chart-grid" x1="${esquerda}" y1="${posicao}" x2="${largura - direita}" y2="${posicao}" /><text class="chart-axis-label" x="${esquerda - 7}" y="${posicao + 4}" text-anchor="end">${valor.toFixed(1)}%</text>`;
            }).join("");
            const passo = Math.max(1, Math.ceil(historico.length / 6));
            const rotulos = historico.map((item, indice) => (indice % passo === 0 || indice === historico.length - 1) ? `<text class="chart-axis-label" x="${x(indice)}" y="${altura - 12}" text-anchor="middle">${formatarDataJogo(item.mes)}</text>` : "").join("");
            grafico.setAttribute("viewBox", `0 0 ${largura} ${altura}`);
            grafico.innerHTML = `<title>SELIC e IPCA por mês</title><desc>Linha roxa representa SELIC; linha dourada representa IPCA.</desc>${guia}<polyline class="chart-line" points="${pontos("selic")}" /><polyline fill="none" stroke="var(--warning)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" points="${pontos("inflacao")}" /><text class="chart-axis-label" x="${largura - direita}" y="${topo + 4}" text-anchor="end">SELIC (roxo) · IPCA (dourado)</text>${rotulos}`;
        }

        // LOG DE EVENTOS
        function log(msg, type = 'info') {
            const box = document.getElementById('log-box');
            const item = document.createElement('div');
            item.className = `log-msg log-${type}`;
            let mesAtual = (gameState.mesTotal % 12) || 12;
            item.innerText = `[Mês ${mesAtual} - ${gameState.idade} anos] ${msg}`;
            box.prepend(item);
        }

        // CÁLCULO DO PATRIMÔNIO TOTAL
        function calcularPatrimonio() {
            let total = gameState.saldo + calcularInvestimentos();
            total += gameState.carros.reduce((subtotal, carro) => subtotal + carro.preco, 0);
            total += gameState.imoveis.reduce((subtotal, imovel) => subtotal + imovel.valorAtual, 0);
            total += gameState.empresas
                .filter(empresa => !empresa.ipo)
                .reduce((subtotal, empresa) => subtotal + empresa.valorMercado, 0);
            return total;
        }

        function formatarTempoVidaEmpresa(empresa) {
            const meses = empresa.mesesVida || 0;
            const anos = Math.floor(meses / 12);
            const mesesRestantes = meses % 12;
            return anos > 0 ? `${anos} ano(s) e ${mesesRestantes} mês(es)` : `${mesesRestantes} mês(es)`;
        }

        function renderizarResumoGeral() {
            const resumoFilhos = document.getElementById("geral-filhos");
            const resumoEmpresas = document.getElementById("geral-empresas");
            resumoFilhos.innerHTML = gameState.filhos.length
                ? gameState.filhos.map(filho => `<div class="general-list-item"><strong>${filho.nome}</strong><span>${formatarIdadeFilho(filho)}</span></div>`).join("")
                : '<p class="hint">Nenhum filho cadastrado.</p>';
            resumoEmpresas.innerHTML = gameState.empresas.length
                ? gameState.empresas.map(empresa => `<div class="general-list-item"><strong>${empresa.nome}</strong><span>${empresa.ipo ? "Listada em bolsa" : "Privada"} • ${formatarTempoVidaEmpresa(empresa)}</span></div>`).join("")
                : '<p class="hint">Nenhuma empresa aberta.</p>';
        }

        function renderizarEmpresas() {
            const lista = document.getElementById("lista-empresas");
            const totalEmpresas = gameState.empresas.length;
            document.getElementById("ui-empresa-status").innerText = totalEmpresas
                ? `${totalEmpresas} empresa(s) no portfólio`
                : "Nenhuma";
            if (!totalEmpresas) {
                lista.innerHTML = '<p class="hint">Você pode abrir várias startups, inclusive no mesmo ramo. Após 6 meses sem prejuízo, uma empresa pode abrir capital.</p>';
                return;
            }
            lista.innerHTML = gameState.empresas.map((empresa, indice) => {
                const perfil = ramosStartup[empresa.ramo];
                const acaoIPO = empresa.ipo ? gameState.investimentos.acoes.find(acao => acao.empresaId === empresa.id) : null;
                const status = empresa.ipo
                    ? '<span class="company-listed">Listada em bolsa</span>'
                    : empresa.mesesSemPrejuizo >= 6
                        ? '<span class="company-ready">Elegível para IPO</span>'
                        : `${empresa.mesesSemPrejuizo}/6 meses sem prejuízo`;
                const acoes = empresa.ipo ? '<small>Após o IPO, o mercado passa a definir a saúde financeira e os rendimentos da empresa.</small>' : `<div class="vehicle-actions">
                    <button class="btn-action btn-blue" onclick="expandirEmpresa(${indice})">Expandir (R$ 100.000)</button>
                    ${empresa.mesesSemPrejuizo >= 6 ? `<button class="btn-action" onclick="abrirIPO(${indice})">Fazer IPO</button>` : ''}
                    <button class="btn-action btn-danger" onclick="venderEmpresa(${indice})">Vender empresa</button>
                </div>`;
                return `<div class="card-item company-card">
                    <strong>${empresa.nome}</strong> — ${perfil.nome}, nível ${empresa.nivel}<br>
                    <small>${status}</small>
                    <div class="company-health"><span style="width:${empresa.saudeFinanceira}%"></span></div>
                    <small>Saúde financeira: ${Math.round(empresa.saudeFinanceira)}% • Valor de mercado: ${formatMoney(empresa.valorMercado)} • Tempo de vida: ${formatarTempoVidaEmpresa(empresa)}${acaoIPO ? ` • Provento atual: ${formatMoney(acaoIPO.proventoPorAcao)}/ação` : ""}</small>${acoes}
                </div>`;
            }).join("");
        }

        // ATUALIZAR INTERFACE (UI)
        function updateUI() {
            let anos = 18 + Math.floor((gameState.mesTotal - 1) / 12);
            gameState.idade = anos;
            let mesDoAno = ((gameState.mesTotal - 1) % 12) + 1;

            document.getElementById('ui-tempo').innerText = `${anos} anos (${formatarDataJogo(gameState.mesTotal)})`;
            document.getElementById('ui-saldo').innerText = formatMoney(gameState.saldo);
            document.getElementById('ui-patrimonio').innerText = formatMoney(calcularPatrimonio());
            document.getElementById('ui-selic').innerText = `${gameState.selic.toFixed(2)}% a.a.`;
            document.getElementById('ui-inflacao').innerText = `${gameState.inflacao.toFixed(2)}% a.a.`;
            document.getElementById('ui-felicidade-topo').innerText = `${gameState.felicidade}%`;
            document.getElementById('btn-avancar').disabled = gameState.jogoEncerrado;

            // Carreira
            const cargoAtual = obterCargoAtual();
            const vagaSeguinte = obterProximaVaga();
            const formacao = niveisEscolaridade[gameState.curriculo - 1];
            const aposentadoriaEstimada = gameState.aposentado ? calcularPatrimonio() * gameState.taxaAposentadoria : 0;
            document.getElementById('ui-cargo').innerText = gameState.aposentado ? "Aposentado(a)" : (cargoAtual ? cargoAtual.titulo : "Desempregado");
            document.getElementById('ui-salario').innerText = formatMoney(gameState.aposentado ? aposentadoriaEstimada : gameState.salario);
            document.getElementById('ui-curriculo').innerText = `${formacao} (Nível ${gameState.curriculo})`;
            document.getElementById('ui-curso-superior').innerText = gameState.cursoSuperior
                ? `${areasProfissionais[gameState.cursoSuperior].nome}${gameState.faculdadeConcluida ? " (Graduação concluída)" : " (Em andamento)"}${gameState.posGraduacao ? " + Pós-graduação" : ""}`
                : "Ainda não escolhido";
            const cursoSelecionado = gameState.cursoSuperior ? areasProfissionais[gameState.cursoSuperior] : null;
            document.getElementById('ui-faculdade').innerText = !cursoSelecionado
                ? "Não iniciada"
                : gameState.faculdadeConcluida
                    ? `Concluída — ${cursoSelecionado.nome}`
                    : `${cursoSelecionado.nome}: ${gameState.faculdadeMesesCursados}/${cursoSelecionado.duracaoMeses} meses • ${formatMoney(cursoSelecionado.mensalidade)}/mês`;
            document.getElementById('ui-experiencia-cargo').innerText = `${gameState.experienciaNoCargo} meses`;
            document.getElementById('painel-curso-superior').hidden = gameState.curriculo < 2 || Boolean(gameState.cursoSuperior);
            document.getElementById('painel-pos-graduacao').hidden = !gameState.faculdadeConcluida || gameState.posGraduacao;
            document.getElementById('ui-chance-emprego').innerText = vagaSeguinte
                ? `Próxima vaga: ${vagaSeguinte.titulo}. Chance atual de aprovação: ${Math.round(calcularChanceDeContratacao(vagaSeguinte) * 100)}%.`
                : "Você alcançou o topo de carreira disponível para sua formação.";
            const candidaturaFeitaNoMes = gameState.ultimaCandidaturaMes === gameState.mesTotal;
            document.getElementById('btn-procurar-emprego').disabled = candidaturaFeitaNoMes || gameState.aposentado;
            if (gameState.aposentado) {
                document.getElementById('ui-chance-emprego').innerText = `Aposentadoria ativa: ${(gameState.taxaAposentadoria * 100).toFixed(2)}% do patrimônio por mês.`;
            } else if (candidaturaFeitaNoMes) {
                document.getElementById('ui-chance-emprego').innerText = "Você já se candidatou neste mês. Avance para o próximo mês para tentar novamente.";
            }

            document.getElementById('geral-saldo').innerText = formatMoney(gameState.saldo);
            document.getElementById('geral-investimentos').innerText = formatMoney(calcularInvestimentos());
            document.getElementById('geral-patrimonio').innerText = formatMoney(calcularPatrimonio());
            document.getElementById('geral-custos').innerText = formatMoney(calcularCustosMensais());
            renderizarCustosMensais();
            document.getElementById('geral-cargo').innerText = gameState.aposentado ? "Aposentado(a)" : (cargoAtual ? cargoAtual.titulo : "Desempregado");
            document.getElementById('geral-formacao').innerText = gameState.faculdadeConcluida ? `${formacao} em ${areasProfissionais[gameState.cursoSuperior].nome}` : formacao;
            document.getElementById('geral-experiencia').innerText = `${gameState.experienciaProfissional} meses`;
            document.getElementById('geral-renda').innerText = formatMoney(gameState.aposentado ? aposentadoriaEstimada : gameState.salario);
            renderizarPossibilidadesCargos();
            renderizarGraficoPatrimonio();
            renderizarGraficoEconomia();

            // Empresas
            renderizarEmpresas();
            renderizarResumoGeral();

            // Investimentos
            renderizarInvestimentos();
            renderizarTesouroDireto();
            renderizarCreditos();
            renderizarLojaVeiculos();
            renderizarLojaImoveis();
            atualizarValoresCredito();

            // Seguros
            const premiosSeguros = calcularPremiosSeguros();
            document.getElementById('st-saude').innerText = gameState.seguroSaude ? "Ativo" : "Não contratado";
            document.getElementById('st-saude').style.color = gameState.seguroSaude ? "var(--accent)" : "var(--danger)";
            document.getElementById('st-residencial').innerText = gameState.seguroResidencial ? "Ativo" : "Não contratado";
            document.getElementById('st-residencial').style.color = gameState.seguroResidencial ? "var(--accent)" : "var(--danger)";
            document.getElementById('custo-saude').innerText = `${formatMoney(premiosSeguros.saude)} / mês`;
            document.getElementById('custo-residencial').innerText = `${formatMoney(premiosSeguros.residencial)} / mês`;
            document.getElementById('detalhe-seguros').innerText = `Prêmios exponenciais por família (${1 + (gameState.parceiro ? 1 : 0) + gameState.filhos.length} pessoa(s)), ${gameState.imoveis.length} imóvel(is), ${formatMoney(gameState.imoveis.reduce((total, imovel) => total + imovel.valorAtual, 0))} em imóveis e ${formatMoney(gameState.carros.reduce((total, carro) => total + carro.preco, 0))} em veículos.`;

            // Família
            document.getElementById('ui-relacionamento').innerText = gameState.parceiro ? "Casado(a)" : "Solteiro(a)";
            document.getElementById('ui-filhos').innerText = gameState.filhos.length;
            const listaFilhos = document.getElementById('lista-filhos');
            listaFilhos.innerHTML = gameState.filhos.length
                ? gameState.filhos.map(filho => `<div class="child-item"><strong>${filho.nome}</strong><span>${formatarIdadeFilho(filho)} ${filho.idadeMeses < 252 ? `• custo mensal: ${formatMoney(calcularCustoFilho(filho))}` : "• independente financeiramente"}</span></div>`).join("")
                : '<p class="hint">Cada filho tem nome, idade e custos próprios até completar 21 anos.</p>';
            document.getElementById('ui-felicidade').innerText = `${gameState.felicidade}%`;
            document.getElementById('barra-felicidade').style.width = `${gameState.felicidade}%`;
            const podeTirarFerias = Boolean(cargoAtual) && gameState.experienciaProfissional >= 12 && (gameState.mesTotal - gameState.ultimaFeriasMes) >= 12;
            document.getElementById('btn-ferias').disabled = !podeTirarFerias;
            document.getElementById('ui-status-ferias').innerText = !cargoAtual
                ? "Férias estão disponíveis apenas para quem está empregado."
                : gameState.experienciaProfissional < 12
                    ? `Faltam ${12 - gameState.experienciaProfissional} mês(es) de trabalho para suas primeiras férias.`
                    : (gameState.mesTotal - gameState.ultimaFeriasMes) < 12
                        ? `Próximas férias disponíveis em ${12 - (gameState.mesTotal - gameState.ultimaFeriasMes)} mês(es).`
                        : "Você já pode tirar férias.";

            // Lista de Bens
            let htmlBens = "";
            gameState.carros.forEach((carro, idx) => {
                const financiamento = carro.financiado && carro.parcelasRestantes > 0
                    ? `Financiado (${carro.parcelasRestantes}x de ${formatMoney(carro.parcela)} restantes)`
                    : "Quitado";
                htmlBens += `<div class="card-item">🚗 <strong>${carro.nome}</strong> — ${financiamento}<br>
                    Valor: ${formatMoney(carro.preco)} | Gasto mensal: ${formatMoney(carro.custoMensal)} (5% do valor)</div>`;
            });
            gameState.imoveis.forEach((imv, idx) => {
                const financiamento = imv.financiado && imv.parcelasRestantes > 0
                    ? `Financiado (${imv.parcelasRestantes}x de ${formatMoney(imv.parcela)} restantes)`
                    : "Quitado";
                const aluguel = calcularAluguelMensal(imv);
                htmlBens += `<div class="card-item">
                    🏡 <strong>${imv.nome}</strong> — ${financiamento}<br>
                    Valor atual: ${formatMoney(imv.valorAtual)} | Valorização: IPCA + ${(imv.taxaValorizacaoExtra * 100).toFixed(1)}% a.a.<br>
                    Status: ${imv.status === "alugado" ? `<span style="color:var(--accent)">Alugado (${formatMoney(aluguel)}/mês)</span>` : imv.status === "morando" ? '<span style="color:var(--accent)">Morando no imóvel</span>' : 'Desocupado'}
                    <div class="vehicle-actions">
                        <button class="btn-action" onclick="definirUsoImovel(${idx}, 'morando')">Morar nele</button>
                        <button class="btn-action btn-blue" onclick="definirUsoImovel(${idx}, 'desocupado')">Desocupar</button>
                        <button class="btn-action" onclick="definirUsoImovel(${idx}, 'alugado')">Alugar</button>
                    </div>
                </div>`;
            });
            if (htmlBens === "") htmlBens = "<p>Nenhum bem cadastrado.</p>";
            document.getElementById('lista-bens').innerHTML = htmlBens;
        }

        // --- AÇÕES DO JOGADOR ---

        function melhorarCurriculo() {
            if (gameState.saldo < 1200) {
                log("Saldo insuficiente para pagar o curso.", "neg");
            } else if (!gameState.cursoSuperior && gameState.curriculo >= 2) {
                log("Escolha uma faculdade para avançar sua formação.", "warn");
            } else if (gameState.faculdadeEmAndamento) {
                log("Sua faculdade já está em andamento; avance os meses para pagar as mensalidades.", "warn");
            } else if (gameState.curriculo < 5) {
                gameState.saldo -= 1200;
                gameState.curriculo++;
                log("Você concluiu um curso de aperfeiçoamento e subiu seu nível de currículo!", "pos");
            } else {
                log("Seu currículo já está no topo!", "warn");
            }
            updateUI();
        }

        function escolherCursoSuperior() {
            if (gameState.curriculo < 2) {
                log("Conclua ao menos um curso técnico antes de iniciar a faculdade.", "warn");
            } else {
                const cursoSelecionado = document.getElementById('curso-superior').value;
                if (!cursoSelecionado) {
                    log("Escolha uma área de formação para continuar.", "warn");
                } else {
                    gameState.cursoSuperior = cursoSelecionado;
                    gameState.faculdadeEmAndamento = true;
                    gameState.faculdadeConcluida = false;
                    gameState.faculdadeMesesCursados = 0;
                    const curso = areasProfissionais[cursoSelecionado];
                    log(`Você iniciou a faculdade de ${curso.nome}: ${curso.duracaoMeses} meses de ${formatMoney(curso.mensalidade)}.`, "pos");
                }
            }
            updateUI();
        }

        function alterarFelicidade(valor, motivo) {
            const anterior = gameState.felicidade;
            gameState.felicidade = Math.max(0, Math.min(100, gameState.felicidade + valor));
            if (motivo && gameState.felicidade !== anterior) {
                log(`${motivo} Felicidade: ${gameState.felicidade}%.`, valor >= 0 ? "pos" : "warn");
            }
        }

        function fazerPosGraduacao() {
            if (!gameState.faculdadeConcluida) {
                log("Conclua uma graduação antes de iniciar a pós-graduação.", "warn");
            } else if (gameState.posGraduacao) {
                log("Você já concluiu uma pós-graduação.", "warn");
            } else if (gameState.saldo < 6500) {
                log("Saldo insuficiente para a pós-graduação.", "neg");
            } else {
                gameState.saldo -= 6500;
                gameState.posGraduacao = true;
                gameState.curriculo = Math.max(gameState.curriculo, 4);
                log("Pós-graduação concluída! Empresas passarão a observar seu perfil.", "pos");
            }
            updateUI();
        }

        function avaliarDemissaoPorFelicidade() {
            const cargoAtual = obterCargoAtual();
            if (!cargoAtual || gameState.felicidade >= 10) return;

            const chanceDemissao = 0.12 + ((10 - gameState.felicidade) * 0.06);
            if (Math.random() >= chanceDemissao) return;

            gameState.cargoId = null;
            gameState.salario = 0;
            gameState.experienciaNoCargo = 0;
            log(`Você foi demitido(a) de ${cargoAtual.titulo} devido à baixa satisfação no trabalho.`, "neg");
        }

        function avaliarDemissaoAleatoria() {
            const cargoAtual = obterCargoAtual();
            if (!cargoAtual || gameState.aposentado) return;
            const chanceDemissao = 0.015;
            if (Math.random() >= chanceDemissao) return;
            gameState.cargoId = null;
            gameState.salario = 0;
            gameState.experienciaNoCargo = 0;
            log(`Você foi demitido(a) de ${cargoAtual.titulo} por uma reestruturação da empresa.`, "neg");
        }

        function procurarEmprego() {
            if (gameState.aposentado) {
                log("Você já está aposentado(a) e recebe sua aposentadoria mensal.", "warn");
                updateUI();
                return;
            }
            if (gameState.ultimaCandidaturaMes === gameState.mesTotal) {
                log("Você já realizou uma candidatura neste mês. Tente novamente no próximo mês.", "warn");
                updateUI();
                return;
            }

            gameState.ultimaCandidaturaMes = gameState.mesTotal;
            const proximaVaga = obterProximaVaga();
            if (!proximaVaga) {
                log("Não há uma nova vaga disponível. Invista em escolaridade ou experiência.", "warn");
            } else {
                const chance = calcularChanceDeContratacao(proximaVaga);
                if (Math.random() < chance) {
                    gameState.cargoId = proximaVaga.id;
                    gameState.salario = proximaVaga.salario;
                    gameState.experienciaNoCargo = 0;
                    log(`Você passou para ${proximaVaga.titulo}! Salário: ${formatMoney(proximaVaga.salario)}/mês.`, "pos");
                } else {
                    log(`A vaga de ${proximaVaga.titulo} não deu certo. A experiência exigida ainda torna a seleção difícil.`, "warn");
                }
            }
            updateUI();
        }

        function abrirEmpresa() {
            const ramo = document.getElementById('ramo-startup').value;
            const campoNome = document.getElementById('nome-startup');
            const nome = campoNome.value.trim();
            if (!ramo) {
                log("Escolha o ramo da startup antes de abri-la.", "warn");
            } else if (!nome) {
                log("Escolha um nome para a startup antes de abri-la.", "warn");
            } else if (gameState.empresas.some(empresa => empresa.nome.toLocaleLowerCase() === nome.toLocaleLowerCase())) {
                log("Já existe uma startup com esse nome.", "warn");
            } else if (gameState.saldo >= 500000) {
                gameState.saldo -= 500000;
                gameState.empresas.push({
                    id: `startup-${ramo}-${gameState.mesTotal}-${gameState.empresas.length + 1}`,
                    nome,
                    ramo,
                    nivel: 1,
                    saudeFinanceira: 60,
                    mesesSemPrejuizo: 0,
                    mesesVida: 0,
                    valorMercado: 500000,
                    ipo: false
                });
                campoNome.value = "";
                alterarFelicidade(15, "Você realizou o sonho de abrir uma startup.");
                log(`Você abriu ${nome}, uma startup de ${ramosStartup[ramo].nome}. Ela pode gerar lucros ou prejuízos a cada mês.`, "pos");
            } else { log("Saldo insuficiente para investir R$ 500.000 na startup.", "neg"); }
            updateUI();
        }

        function expandirEmpresa(indice) {
            const empresa = gameState.empresas[indice];
            if (!empresa || empresa.ipo) return;
            if (gameState.saldo >= 100000) {
                gameState.saldo -= 100000;
                empresa.nivel++;
                empresa.saudeFinanceira = Math.min(100, empresa.saudeFinanceira + 8);
                empresa.valorMercado += 120000;
                log(`${empresa.nome} expandiu para o nível ${empresa.nivel}!`, "pos");
            } else { log("Saldo insuficiente para expandir a startup.", "neg"); }
            updateUI();
        }

        function abrirIPO(indice) {
            const empresa = gameState.empresas[indice];
            if (!empresa || empresa.ipo || empresa.mesesSemPrejuizo < 6) return;
            const codigo = `IPO${String(indice + 1).padStart(2, "0")}${empresa.ramo.slice(0, 2).toUpperCase()}`;
            const preco = 100;
            const quantidade = Math.max(1000, Math.floor(empresa.valorMercado / preco));
            gameState.investimentos.acoes.push({
                id: `acao-${empresa.id}`,
                codigo,
                nome: `${empresa.nome} (IPO)`,
                preco,
                quantidade,
                volatilidade: 0.14,
                proventoPorAcao: Number((preco * (0.0015 + (empresa.saudeFinanceira / 100) * 0.006)).toFixed(2)),
                empresaId: empresa.id
            });
            empresa.ipo = true;
            log(`${empresa.nome} fez IPO. ${quantidade} ações de ${codigo} foram adicionadas ao seu portfólio.`, "pos");
            updateUI();
        }

        function venderEmpresa(indice) {
            const empresa = gameState.empresas[indice];
            if (!empresa || empresa.ipo) return;
            gameState.saldo += empresa.valorMercado;
            gameState.empresas.splice(indice, 1);
            alterarFelicidade(-5, "A venda da startup marcou o fim de um ciclo empreendedor.");
            log(`Você vendeu ${empresa.nome} por ${formatMoney(empresa.valorMercado)}.`, "pos");
            updateUI();
        }

        // INVESTIMENTOS
        function calcularCotas(categoria, id, campoValor, campoCotas) {
            if (!["acoes", "fiis"].includes(categoria)) return;
            const ativo = obterAtivo(categoria, id);
            const valor = Number(document.getElementById(campoValor).value) || 0;
            const cotas = Math.floor(valor / ativo.preco);
            document.getElementById(campoCotas).innerText = `Cotas estimadas: ${cotas}`;
        }

        function comprarAtivo(categoria, id, campoValor) {
            const ativo = obterAtivo(categoria, id);
            const valorDesejado = Number(document.getElementById(campoValor).value);
            const quantidade = Math.floor(valorDesejado / ativo.preco);
            const valorAplicado = quantidade * ativo.preco;
            if (quantidade < 1) {
                log(`Informe ao menos ${formatMoney(ativo.preco)} para comprar uma cota de ${ativo.codigo}.`, "warn");
            } else if (gameState.saldo >= valorAplicado) {
                gameState.saldo -= valorAplicado;
                ativo.quantidade += quantidade;
                log(`Comprou ${quantidade} cota(s) de ${ativo.codigo} por ${formatMoney(valorAplicado)}.`, "pos");
            } else {
                log("Saldo insuficiente para esse investimento.", "neg");
            }
            updateUI();
        }

        function venderAtivo(categoria, id, campoQuantidade) {
            const ativo = obterAtivo(categoria, id);
            const quantidade = Number(document.getElementById(campoQuantidade).value);
            if (!Number.isInteger(quantidade) || quantidade < 1 || quantidade > ativo.quantidade) {
                log("Informe uma quantidade de cotas disponível para venda.", "warn");
            } else {
                const valorVenda = quantidade * ativo.preco;
                gameState.saldo += valorVenda;
                ativo.quantidade -= quantidade;
                log(`Vendeu ${quantidade} cota(s) de ${ativo.codigo} por ${formatMoney(valorVenda)}.`, "info");
            }
            updateUI();
        }

        // BENS & IMÓVEIS
        function comprarCarro(modeloId, modalidade) {
            const modelo = catalogoVeiculos.find(carro => carro.id === modeloId);
            if (!modelo) return;

            const financiado = modalidade === "financiado";
            const entrada = financiado ? modelo.preco * financiamentoVeiculo.entradaPercentual : modelo.preco;
            if (gameState.saldo < entrada) {
                log(`Saldo insuficiente para ${financiado ? "a entrada" : "a compra"} do ${modelo.nome}.`, "neg");
                updateUI();
                return;
            }

            const parcela = financiado ? calcularParcelaVeiculo(modelo.preco) : 0;
            gameState.saldo -= entrada;
            gameState.carros.push({
                id: modelo.id,
                nome: modelo.nome,
                preco: modelo.preco,
                custoMensal: modelo.preco * 0.05,
                financiado,
                parcela,
                parcelasRestantes: financiado ? financiamentoVeiculo.prazoMeses : 0
            });
            alterarFelicidade(8, "A compra de um novo veículo melhorou seu bem-estar.");
            log(financiado
                ? `Você financiou um ${modelo.nome}: entrada de ${formatMoney(entrada)} e ${financiamentoVeiculo.prazoMeses} parcelas de ${formatMoney(parcela)}.`
                : `Você comprou um ${modelo.nome} à vista por ${formatMoney(modelo.preco)}.`, "pos");
            updateUI();
        }

        function comprarImovel(modeloId, modalidade) {
            const modelo = catalogoImoveis.find(imovel => imovel.id === modeloId);
            if (!modelo) return;
            if (modelo.somenteVista && modalidade === "financiado") {
                log(`${modelo.nome} está disponível somente para compra à vista.`, "warn");
                updateUI();
                return;
            }

            const financiado = modalidade === "financiado";
            const entrada = financiado ? modelo.preco * financiamentoImovel.entradaPercentual : modelo.preco;
            if (gameState.saldo < entrada) {
                log(`Saldo insuficiente para ${financiado ? "a entrada" : "a compra"} de ${modelo.nome}.`, "neg");
                updateUI();
                return;
            }

            const parcela = financiado ? calcularParcelaImovel(modelo.preco) : 0;
            gameState.saldo -= entrada;
            gameState.imoveis.push({
                id: modelo.id,
                nome: modelo.nome,
                valorAtual: modelo.preco,
                taxaValorizacaoExtra: modelo.taxaValorizacaoExtra,
                taxaAluguelBase: modelo.taxaAluguelBase,
                financiado,
                parcela,
                parcelasRestantes: financiado ? financiamentoImovel.prazoMeses : 0,
                status: "desocupado"
            });
            alterarFelicidade(modelo.preco >= 3000000 ? 22 : 12, "A aquisição de um imóvel aumentou sua felicidade.");
            log(financiado
                ? `Você financiou ${modelo.nome}: entrada de ${formatMoney(entrada)} e ${financiamentoImovel.prazoMeses} parcelas de ${formatMoney(parcela)}.`
                : `Você adquiriu ${modelo.nome} à vista por ${formatMoney(modelo.preco)}.`, "pos");
            updateUI();
        }

        function definirUsoImovel(index, status) {
            const imovel = gameState.imoveis[index];
            if (!imovel) return;
            if (status === "morando") {
                gameState.imoveis.forEach((outro, indice) => {
                    if (indice !== index && outro.status === "morando") outro.status = "desocupado";
                });
                imovel.status = "morando";
                log(`${imovel.nome} agora é sua moradia. O custo de aluguel foi reduzido.`, "pos");
            } else if (status === "alugado") {
                imovel.status = "alugado";
                log(`${imovel.nome} agora está alugado, com renda inicial de ${formatMoney(calcularAluguelMensal(imovel))}/mês.`, "info");
            } else {
                imovel.status = "desocupado";
                log(`${imovel.nome} ficou desocupado.`, "info");
            }
            updateUI();
        }

        function toggleSeguro(tipo) {
            if (tipo === 'saude') gameState.seguroSaude = !gameState.seguroSaude;
            if (tipo === 'residencial') gameState.seguroResidencial = !gameState.seguroResidencial;
            log(`Status do seguro de ${tipo} alterado.`, "info");
            updateUI();
        }

        function buscarParceiro() {
            if (!gameState.parceiro) {
                if (Math.random() < 0.5) {
                    gameState.parceiro = true;
                    log("Você encontrou um(a) parceiro(a) e decidiram morar juntos!", "pos");
                } else { log("Você saiu em alguns encontros, mas não engrenou.", "warn"); }
            } else { log("Você já possui um relacionamento.", "warn"); }
            updateUI();
        }

        function terFilho() {
            if (gameState.parceiro) {
                const campoNome = document.getElementById("nome-filho");
                const nome = campoNome.value.trim();
                if (!nome) {
                    log("Dê um nome ao seu filho(a) antes de continuar.", "warn");
                } else if (gameState.filhos.some(filho => filho.nome.toLocaleLowerCase() === nome.toLocaleLowerCase())) {
                    log("Já existe um filho cadastrado com esse nome.", "warn");
                } else {
                    gameState.filhos.push({ nome, idadeMeses: 0 });
                    campoNome.value = "";
                    log(`Parabéns! ${nome} nasceu. Os gastos mensais aumentarão conforme a idade.`, "pos");
                }
            } else { log("Recomendado ter um parceiro(a) primeiro.", "warn"); }
            updateUI();
        }

        function viajar() {
            if (gameState.saldo >= 8000) {
                gameState.saldo -= 8000;
                alterarFelicidade(50, "A viagem internacional renovou suas energias.");
                log("Você viajou nas férias! Experiência inesquecível.", "pos");
            } else { log("Saldo insuficiente para viajar.", "neg"); }
            updateUI();
        }

        function tirarFerias() {
            const cargoAtual = obterCargoAtual();
            const tempoDesdeUltimaFerias = gameState.mesTotal - gameState.ultimaFeriasMes;
            if (!cargoAtual) {
                log("Você precisa estar empregado para tirar férias.", "warn");
            } else if (gameState.experienciaProfissional < 12) {
                log("Complete 12 meses de trabalho antes de tirar férias.", "warn");
            } else if (tempoDesdeUltimaFerias < 12) {
                log(`Suas próximas férias estarão disponíveis em ${12 - tempoDesdeUltimaFerias} mês(es).`, "warn");
            } else {
                gameState.ultimaFeriasMes = gameState.mesTotal;
                alterarFelicidade(30, "As férias trouxeram descanso e qualidade de vida.");
                log("Você tirou férias e voltou ao trabalho mais descansado(a).", "pos");
            }
            updateUI();
        }

        function renderizarItensRelatorio(itens, tipo) {
            if (itens.length === 0) return '<p class="report-empty">Nenhum lançamento neste mês.</p>';
            const sinal = tipo === "ganho" ? "+" : "−";
            return itens.map(item => `<div class="report-item"><span>${item.descricao}</span><span class="${tipo === "ganho" ? "report-positive" : "report-negative"}">${sinal} ${formatMoney(item.valor)}</span></div>`).join("");
        }

        function mostrarRelatorioMensal({ ganhos, gastos, saldoInicial }) {
            const totalGanhos = ganhos.reduce((total, item) => total + item.valor, 0);
            const totalGastos = gastos.reduce((total, item) => total + item.valor, 0);
            const mesDoAno = ((gameState.mesTotal - 1) % 12) + 1;
            const dialogo = document.getElementById("relatorio-mensal");

            document.getElementById("relatorio-titulo").innerText = `Mês ${mesDoAno} — ${gameState.idade} anos`;
            document.getElementById("relatorio-total-ganhos").innerText = formatMoney(totalGanhos);
            document.getElementById("relatorio-total-gastos").innerText = formatMoney(totalGastos);
            document.getElementById("relatorio-saldo-final").innerText = formatMoney(gameState.saldo);
            document.getElementById("relatorio-ganhos").innerHTML = renderizarItensRelatorio(ganhos, "ganho");
            document.getElementById("relatorio-gastos").innerHTML = renderizarItensRelatorio(gastos, "gasto");
            document.getElementById("relatorio-resultado").innerText = `Saldo inicial: ${formatMoney(saldoInicial)} • Resultado do mês: ${formatMoney(totalGanhos - totalGastos)}.`;

            if (!dialogo.open) dialogo.showModal();
        }

        function calcularResultadoFinal() {
            const patrimonio = calcularPatrimonio();
            const saldoPositivo = Math.max(0, gameState.saldo);
            const investimentosAtivos = Object.values(gameState.investimentos).reduce((total, categoria) => {
                return total + categoria.filter(ativo => (ativo.quantidade || 0) > 0 || (ativo.saldo || 0) > 0).length;
            }, 0);
            const quantidadeBens = gameState.carros.length + gameState.imoveis.length + gameState.empresas.length + investimentosAtivos;
            const quantidadeFilhos = gameState.filhos.length;
            const pontuacao = (patrimonio * 0.70) + (saldoPositivo * 0.15) + (quantidadeBens * 80000) + (quantidadeFilhos * 50000);
            const faixas = [
                { limite: 100000, titulo: "Morreu pobre", mensagem: "A jornada terminou com poucos recursos e pouca margem de segurança financeira." },
                { limite: 500000, titulo: "Morreu classe média baixa", mensagem: "Você construiu alguma estabilidade, mas deixou um patrimônio limitado." },
                { limite: 1500000, titulo: "Morreu classe média", mensagem: "Você encerrou a vida com uma base financeira equilibrada." },
                { limite: 5000000, titulo: "Morreu classe média alta", mensagem: "Disciplina, bens e investimentos garantiram uma vida confortável." },
                { limite: 15000000, titulo: "Morreu classe alta", mensagem: "Você acumulou um patrimônio robusto e uma herança relevante." },
                { limite: Infinity, titulo: "Primo rico", mensagem: "Sua estratégia transformou a jornada em uma fortuna extraordinária." }
            ];
            const classificacao = gameState.saldo < -100000 || patrimonio < 0
                ? faixas[0]
                : faixas.find(faixa => pontuacao < faixa.limite);
            return { patrimonio, saldo: gameState.saldo, quantidadeBens, quantidadeFilhos, pontuacao, classificacao };
        }

        function mostrarFinalJogo() {
            if (gameState.finalExibido) return;
            gameState.finalExibido = true;
            const resultado = calcularResultadoFinal();
            document.getElementById("final-classificacao").innerText = resultado.classificacao.titulo;
            document.getElementById("final-mensagem").innerText = resultado.classificacao.mensagem;
            document.getElementById("final-estatisticas").innerHTML = `
                <div><span>Patrimônio total</span><strong>${formatMoney(resultado.patrimonio)}</strong></div>
                <div><span>Saldo em conta</span><strong>${formatMoney(resultado.saldo)}</strong></div>
                <div><span>Filhos</span><strong>${resultado.quantidadeFilhos}</strong></div>
                <div><span>Bens e posições</span><strong>${resultado.quantidadeBens}</strong></div>`;
            const dialogo = document.getElementById("final-jogo");
            if (!dialogo.open) dialogo.showModal();
        }

        function fecharRelatorioMensal() {
            const dialogo = document.getElementById("relatorio-mensal");
            if (dialogo.open) dialogo.close();
            if (gameState.jogoEncerrado) mostrarFinalJogo();
        }

        // --- ENGINE PRINCIPAL: CICLO MENSAL ---
        function avancarMes() {
            if (gameState.jogoEncerrado) {
                mostrarFinalJogo();
                return;
            }
            gameState.mesTotal++;
            gameState.idade = 18 + Math.floor((gameState.mesTotal - 1) / 12);
            if (!gameState.aposentado && gameState.idade >= 60) {
                gameState.aposentado = true;
                gameState.taxaAposentadoria = 0.005 + (Math.random() * 0.005);
                gameState.cargoId = null;
                gameState.salario = 0;
                gameState.experienciaNoCargo = 0;
                log(`Você completou 60 anos e se aposentou. Sua renda será ${(gameState.taxaAposentadoria * 100).toFixed(2)}% do patrimônio por mês.`, "pos");
            }
            const saldoInicial = gameState.saldo;
            const ganhos = [];
            const gastos = [];
            const adicionarGanho = (descricao, valor) => {
                if (valor > 0) ganhos.push({ descricao, valor });
            };
            const adicionarGasto = (descricao, valor) => {
                if (valor > 0) gastos.push({ descricao, valor });
            };

            // 1. Receber Salário
            let receitas = 0;
            let prejuizoEmpresa = 0;
            if (gameState.salario > 0) {
                receitas += gameState.salario;
                adicionarGanho("Salário", gameState.salario);
            }

            if (gameState.aposentado) {
                const aposentadoria = calcularPatrimonio() * gameState.taxaAposentadoria;
                receitas += aposentadoria;
                adicionarGanho("Aposentadoria", aposentadoria);
            }

            // 2. Receber resultado das empresas privadas
            gameState.empresas.forEach(empresa => { empresa.mesesVida = (empresa.mesesVida || 0) + 1; });
            const empresasFalidas = [];
            gameState.empresas.filter(empresa => !empresa.ipo).forEach(empresa => {
                const perfilStartup = ramosStartup[empresa.ramo];
                const resultadoEmpresa = ((Math.random() * 120000 * perfilStartup.risco) - 40000) * perfilStartup.multiplicador * empresa.nivel;
                if (resultadoEmpresa < 0) {
                    const prejuizo = Math.abs(resultadoEmpresa);
                    prejuizoEmpresa += prejuizo;
                    empresa.saudeFinanceira = Math.max(0, empresa.saudeFinanceira - (8 + Math.random() * 8));
                    empresa.mesesSemPrejuizo = 0;
                    empresa.valorMercado = Math.max(100000, empresa.valorMercado - (prejuizo * 1.15));
                    adicionarGasto(`Prejuízo operacional: ${empresa.nome}`, prejuizo);
                    log(`${empresa.nome} teve prejuízo de ${formatMoney(prejuizo)}. Saúde financeira: ${Math.round(empresa.saudeFinanceira)}%.`, "neg");
                } else {
                    receitas += resultadoEmpresa;
                    empresa.saudeFinanceira = Math.min(100, empresa.saudeFinanceira + (4 + Math.random() * 5));
                    empresa.mesesSemPrejuizo++;
                    empresa.valorMercado += resultadoEmpresa * (1 + (empresa.saudeFinanceira / 100));
                    adicionarGanho(`Lucro distribuído: ${empresa.nome}`, resultadoEmpresa);
                    log(`${empresa.nome} gerou ${formatMoney(resultadoEmpresa)} de lucro.`, "pos");
                }
                if (empresa.saudeFinanceira <= 15) {
                    const chanceFalencia = 0.08 + ((15 - empresa.saudeFinanceira) * 0.035);
                    if (Math.random() < chanceFalencia) empresasFalidas.push(empresa);
                }
            });
            if (empresasFalidas.length) {
                const idsFalidos = new Set(empresasFalidas.map(empresa => empresa.id));
                gameState.empresas = gameState.empresas.filter(empresa => !idsFalidos.has(empresa.id));
                empresasFalidas.forEach(empresa => {
                    log(`${empresa.nome} faliu após ${formatarTempoVidaEmpresa(empresa)} de operação. O valor de mercado foi perdido.`, "neg");
                });
            }

            // 3. Eventos positivos passivos
            if (Math.random() < 0.04) {
                const sorteioPositivo = Math.random();
                let descricao;
                let valor;
                if (sorteioPositivo < 0.55) {
                    valor = Math.round((10000 + Math.random() * 90000) / 100) * 100;
                    descricao = "Herança recebida";
                    log(`EVENTO POSITIVO: Você recebeu uma herança de ${formatMoney(valor)}.`, "pos");
                } else if (sorteioPositivo < 0.90) {
                    valor = Math.round((20000 + Math.random() * 130000) / 100) * 100;
                    descricao = "Processo judicial ganho";
                    log(`EVENTO POSITIVO: Você venceu um processo e recebeu ${formatMoney(valor)}.`, "pos");
                } else {
                    valor = Math.round((50000 + Math.random() * 450000) / 100) * 100;
                    descricao = "Prêmio de loteria";
                    log(`EVENTO POSITIVO: Você foi premiado(a) na loteria e recebeu ${formatMoney(valor)}!`, "pos");
                }
                receitas += valor;
                adicionarGanho(descricao, valor);
                alterarFelicidade(10, "A boa notícia melhorou seu ânimo.");
            }

            // 4. Receber Aluguéis de Imóveis Propríos
            const alugueis = gameState.imoveis
                .filter(imv => imv.status === "alugado")
                .reduce((total, imv) => total + calcularAluguelMensal(imv), 0);
            receitas += alugueis;
            adicionarGanho("Aluguéis de imóveis", alugueis);

            // 5. Empresas listadas: o mercado define saúde e dividendos, sem intervenção do jogador.
            gameState.empresas.filter(empresa => empresa.ipo).forEach(empresa => {
                const variacaoSaude = (Math.random() * 12) - 6;
                empresa.saudeFinanceira = Math.max(5, Math.min(100, empresa.saudeFinanceira + variacaoSaude));
                const acaoIPO = gameState.investimentos.acoes.find(acao => acao.empresaId === empresa.id);
                if (acaoIPO) {
                    const rendimentoMensal = 0.0015 + ((empresa.saudeFinanceira / 100) * 0.006);
                    acaoIPO.proventoPorAcao = Number((acaoIPO.preco * rendimentoMensal).toFixed(2));
                }
            });

            // 5. Receber rendimentos dos FIIs
            const dividendosFII = gameState.investimentos.fiis.reduce((total, fundo) => {
                return total + (fundo.quantidade * fundo.dividendoPorCota);
            }, 0);
            receitas += dividendosFII;
            adicionarGanho("Rendimentos de FIIs", dividendosFII);

            const proventosAcoes = gameState.investimentos.acoes.reduce((total, acao) => {
                return total + (acao.quantidade * acao.proventoPorAcao);
            }, 0);
            receitas += proventosAcoes;
            adicionarGanho("Proventos de ações", proventosAcoes);

            // 6. Atualizar títulos de renda fixa conforme IPCA ou CDI
            gameState.investimentos.rendaFixa.forEach(titulo => {
                if (titulo.saldo <= 0 || titulo.mesesRestantes <= 0) return;

                const taxaAnual = titulo.indice === "IPCA"
                    ? (gameState.inflacao / 100) + titulo.taxaAdicional
                    : titulo.indice === "CDI"
                        ? (gameState.selic / 100) * (titulo.percentualCDI / 100)
                        : titulo.taxaPrefixada;
                const saldoAnterior = titulo.saldo;
                titulo.saldo *= 1 + (taxaAnual / 12);
                adicionarGanho(`Rendimento reinvestido: ${titulo.nome}`, titulo.saldo - saldoAnterior);
                titulo.mesesRestantes--;

                if (titulo.mesesRestantes === 0) {
                    log(`${titulo.nome} venceu. O resgate está disponível na aba Investimentos.`, "pos");
                }
            });

            gameState.investimentos.tesouroDireto.forEach(titulo => {
                if (titulo.saldo <= 0) return;
                const taxaAnual = titulo.indice === "SELIC"
                    ? gameState.selic / 100
                    : titulo.indice === "IPCA"
                        ? (gameState.inflacao / 100) + titulo.taxaAdicional
                        : titulo.taxaPrefixada;
                titulo.saldo *= 1 + (taxaAnual / 12);
            });

            gameState.imoveis.forEach(imovel => {
                const taxaMensalValorizacao = ((gameState.inflacao / 100) + imovel.taxaValorizacaoExtra) / 12;
                imovel.valorAtual *= 1 + taxaMensalValorizacao;
            });

            let mensalidadeFaculdade = 0;
            if (gameState.faculdadeEmAndamento) {
                const curso = areasProfissionais[gameState.cursoSuperior];
                if (gameState.saldo + receitas >= curso.mensalidade) {
                    mensalidadeFaculdade = curso.mensalidade;
                    gameState.faculdadeMesesCursados++;
                    if (gameState.faculdadeMesesCursados >= curso.duracaoMeses) {
                        gameState.faculdadeEmAndamento = false;
                        gameState.faculdadeConcluida = true;
                        gameState.curriculo = Math.max(gameState.curriculo, 3);
                        log(`Você concluiu a graduação em ${curso.nome}. As vagas da área foram liberadas!`, "pos");
                    }
                } else {
                    log(`A mensalidade de ${formatMoney(curso.mensalidade)} da faculdade de ${curso.nome} não pôde ser paga neste mês.`, "warn");
                }
            }

            // 6. Dedução dos Custos Fixos Mensais
            const possuiMoradiaPropria = gameState.imoveis.some(imovel => imovel.status === "morando");
            const custoMoradia = possuiMoradiaPropria ? 250 : 900;
            const custoAlimentacao = 600 + calcularCustoAlimentacaoFilhos();
            let custoVidaBase = custoMoradia + custoAlimentacao;
            let custoFilhos = obterFilhosDependentes().reduce((total, filho) => total + calcularCustoFilho(filho), 0) - calcularCustoAlimentacaoFilhos();
            let custoCarros = gameState.carros.reduce((total, carro) => total + carro.custoMensal, 0);
            const premiosSeguros = calcularPremiosSeguros();
            let custoSeguroSaude = gameState.seguroSaude ? premiosSeguros.saude : 0;
            let custoSeguroResidencial = gameState.seguroResidencial ? premiosSeguros.residencial : 0;
            let custoSeguros = custoSeguroSaude + custoSeguroResidencial;
            let parcelasFinanciamento = 0;

            gameState.imoveis.forEach(imv => {
                if (imv.financiado && imv.parcelasRestantes > 0) {
                    parcelasFinanciamento += imv.parcela;
                    imv.parcelasRestantes--;
                    if (imv.parcelasRestantes === 0) imv.financiado = false;
                }
            });

            let parcelasVeiculos = 0;
            gameState.carros.forEach(carro => {
                if (carro.financiado && carro.parcelasRestantes > 0) {
                    parcelasVeiculos += carro.parcela;
                    carro.parcelasRestantes--;
                    if (carro.parcelasRestantes === 0) carro.financiado = false;
                }
            });

            const parcelasEmprestimos = gameState.emprestimos.reduce((total, contrato) => total + contrato.parcela, 0);
            const parcelasConsorcios = gameState.consorcios.reduce((total, contrato) => total + contrato.parcela, 0);
            gameState.emprestimos.forEach(contrato => contrato.parcelasRestantes--);
            gameState.consorcios.forEach(contrato => {
                contrato.parcelasRestantes--;
                if (!contrato.contemplado && Math.random() < 0.04) {
                    contrato.contemplado = true;
                    log(`${contrato.descricao} foi contemplado!`, "pos");
                }
            });
            gameState.emprestimos = gameState.emprestimos.filter(contrato => contrato.parcelasRestantes > 0);
            gameState.consorcios = gameState.consorcios.filter(contrato => contrato.parcelasRestantes > 0);

            adicionarGasto(possuiMoradiaPropria ? "Contas do imóvel próprio" : "Aluguel e contas básicas", custoMoradia);
            adicionarGasto("Alimentação", custoAlimentacao);
            adicionarGasto("Educação e cuidados com filhos", custoFilhos);
            adicionarGasto("Manutenção de veículos", custoCarros);
            adicionarGasto("Parcelas de veículos", parcelasVeiculos);
            adicionarGasto("Mensalidade da faculdade", mensalidadeFaculdade);
            adicionarGasto("Plano de saúde", custoSeguroSaude);
            adicionarGasto("Seguro residencial", custoSeguroResidencial);
            adicionarGasto("Parcelas de financiamento", parcelasFinanciamento);
            adicionarGasto("Parcelas de empréstimos", parcelasEmprestimos);
            adicionarGasto("Parcelas de consórcios", parcelasConsorcios);

            let despesasTotais = custoVidaBase + custoFilhos + custoCarros + custoSeguros + parcelasFinanciamento + parcelasVeiculos + mensalidadeFaculdade + parcelasEmprestimos + parcelasConsorcios + prejuizoEmpresa;

            // Atualiza Saldo
            gameState.saldo += (receitas - despesasTotais);

            if (gameState.salario > 0) {
                gameState.experienciaProfissional++;
                gameState.experienciaNoCargo++;
            }
            alterarFelicidade(obterCargoAtual() ? -0.5 : -0.25);
            avaliarDemissaoPorFelicidade();
            avaliarDemissaoAleatoria();
            gameState.filhos.forEach(filho => { filho.idadeMeses++; });

            // 7. Flutuação mensal do mercado (renda variável)
            ["acoes", "fiis", "etfs"].forEach(categoria => {
                gameState.investimentos[categoria].forEach(ativo => {
                    const oscilacao = (Math.random() * ativo.volatilidade * 2) - ativo.volatilidade;
                    ativo.preco = Math.max(1, ativo.preco * (1 + oscilacao));
                });
            });
            gameState.empresas.filter(empresa => empresa.ipo).forEach(empresa => {
                const acaoIPO = gameState.investimentos.acoes.find(acao => acao.empresaId === empresa.id);
                if (acaoIPO) empresa.valorMercado = acaoIPO.preco * acaoIPO.quantidade;
            });

            // Revisão econômica trimestral
            if (gameState.mesTotal % 3 === 0) {
                gameState.selic = Math.max(5.0, Math.min(18.0, gameState.selic + (Math.random() - 0.5)));
                gameState.inflacao = Math.max(2.0, Math.min(12.0, gameState.inflacao + ((Math.random() - 0.5) * 0.7)));
                log(`Revisão trimestral: SELIC ${gameState.selic.toFixed(2)}% | IPCA ${gameState.inflacao.toFixed(2)}%.`, "info");
            }

            // 8. SIMULAÇÃO DE IMPREVISTOS (EVENTOS CLIMÁTICOS E EMERGÊNCIAS)
            if (Math.random() < 0.15) { // 15% de chance de evento por mês
                let sorteio = Math.random();
                
                if (sorteio < 0.4) {
                    // EVENTO CLIMÁTICO / CATASTRÓFICO
                    if (gameState.imoveis.length > 0) {
                        if (gameState.seguroResidencial) {
                            alterarFelicidade(-4, "O dano residencial afetou seu bem-estar.");
                            log("CATASTRÓFE: Uma tempestade severa danificou o telhado da sua casa. O Seguro Residencial cobriu 100% dos custos!", "pos");
                        } else {
                            let prejuizo = 12000;
                            gameState.saldo -= prejuizo;
                            adicionarGasto("Conserto por dano climático", prejuizo);
                            alterarFelicidade(-10, "O imprevisto residencial afetou seu bem-estar.");
                            log(`IMPREVISTO CLIMÁTICO: Um furacão/tempestade causou grandes estragos na sua casa! Custo do conserto: ${formatMoney(prejuizo)}`, "neg");
                        }
                    }
                } else if (sorteio < 0.7) {
                    // EMERGÊNCIA MÉDICA
                    if (gameState.seguroSaude) {
                        alterarFelicidade(-6, "A emergência de saúde afetou seu bem-estar.");
                        log("SAÚDE: Você precisou de atendimento médico de emergência, totalmente coberto pelo Plano de Saúde.", "pos");
                    } else {
                        let prejuizo = 4500;
                        gameState.saldo -= prejuizo;
                        adicionarGasto("Emergência médica", prejuizo);
                        alterarFelicidade(-15, "A emergência de saúde afetou seu bem-estar.");
                        log(`EMERGÊNCIA MÉDICA: Gastos inesperados com internação e remédios! Custo: ${formatMoney(prejuizo)}`, "neg");
                    }
                } else {
                    // MANUTENÇÃO / OUTROS IMPREVISTOS
                    let prejuizo = 1800;
                    gameState.saldo -= prejuizo;
                    adicionarGasto("Manutenção e imprevistos", prejuizo);
                    alterarFelicidade(-8, "O imprevisto com eletrônicos ou manutenção afetou seu bem-estar.");
                    log(`IMPREVISTO: Problemas mecânicos ou eletrônicos quebrados. Gastos inesperados de ${formatMoney(prejuizo)}.`, "neg");
                }
            }

            gameState.historicoPatrimonio.push({ mes: gameState.mesTotal, patrimonio: calcularPatrimonio() });
            gameState.historicoEconomia.push({ mes: gameState.mesTotal, selic: gameState.selic, inflacao: gameState.inflacao });

            if (gameState.idade >= 80 && !gameState.jogoEncerrado) {
                gameState.jogoEncerrado = true;
                log("Você completou 80 anos. A jornada chegou ao fim e sua classificação final será calculada.", "info");
            }

            // Checagem de Falência
            if (gameState.saldo < -15000) {
                alert("GAME OVER! Seu saldo acumulou dívidas impagáveis e você decretou falência.");
            }

            updateUI();
            mostrarRelatorioMensal({ ganhos, gastos, saldoInicial });
        }

        // Inicializar
        updateUI();
        switchTab('geral');
