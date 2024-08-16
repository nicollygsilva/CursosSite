'use client'
import React, { useState } from 'react'
import './MarketCarPages.css'

interface Itenis {
    id: number,
    titulo: string,
    preco: number,
    imagem: string,
    descricao: string // Nova propriedade para a descrição do curso
}

interface IShoppingItem {
    produto: Itenis,
    quantidade: number
}

// Atualize a lista de cursos com mais 10 cursos e adicione URLs de imagens e descrições
const tenis: Itenis[] = [
    {id: 1, titulo: "DESENVOLVIMENTO DE SISTEMAS", preco: 1200.00, imagem: "https://blog.xpeducacao.com.br/wp-content/uploads/2022/07/analise-e-desenvolvimento-de-sistemas-o-que-faz.jpg", descricao: "Aprenda a desenvolver sistemas completos com as mais modernas técnicas e ferramentas."},
    {id: 2, titulo: "MULTIMIDIA", preco: 420.00, imagem: "https://noticias.unisanta.br/wp-content/uploads/2015/12/2-credito-Marcio-Dias-800x551.jpg", descricao: "Curso de multimídia focado em design, edição de vídeo e áudio."},
    {id: 3, titulo: "ELETROTECNICA", preco: 360.00, imagem: "https://escolatecnicansa.com.br/wp-content/uploads/2023/02/eletrotecnica.jpg", descricao: "Estude a instalação, manutenção e reparo de sistemas elétricos e eletrônicos."},
    {id: 4, titulo: "PETROLEO E GAS", preco: 300.00, imagem: "https://static.portaldaindustria.com.br/portaldaindustria/noticias/media/imagem_plugin_91bed9dc-c1ec-42fd-a2bb-2decaf7b5ff1.jpg", descricao: "Explore o setor de petróleo e gás, aprendendo sobre extração, processamento e comercialização."},
    {id: 5, titulo: "INFORMATICA BASICA", preco: 850.00, imagem: "https://cfis.com.br/site/wp-content/uploads/2022/06/imagem-informatica-basica-e-avancada.png", descricao: "Curso introdutório que cobre os fundamentos da informática e o uso de software básico."},
    {id: 6, titulo: "EDIFICAÇÃO", preco: 1100.00, imagem: "https://www.condominioemordem.com.br/wp-content/uploads/2016/11/reforma1.jpg", descricao: "Aprenda sobre construção civil, incluindo técnicas de edificação e reformas."},
    {id: 7, titulo: "MARKETING DIGITAL", preco: 500.00, imagem: "https://www.salesforce.com/br/blog/wp-content/uploads/sites/6/2023/06/por-que-investir-em-marketing-digital.jpg", descricao: "Curso focado em estratégias e ferramentas de marketing digital para promover negócios online."},
    {id: 8, titulo: "DESIGN GRÁFICO", preco: 750.00, imagem: "https://s2-g1.glbimg.com/z7O63Q01CUicvJYsjZjVr05aRCs=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2021/m/D/DFYKn5QbSfiHCv21vUTA/foto-1-destaque-g1-unifor-design-grafico-e-digital.jpg", descricao: "Curso de design gráfico que ensina a criar layouts e visuais impactantes para mídia impressa e digital."},
    {id: 9, titulo: "ENGENHARIA DE SOFTWARE", preco: 1300.00, imagem: "https://www.undb.edu.br/hubfs/eng-software-curso-undb.jpg", descricao: "Desenvolva habilidades para projetar e implementar softwares complexos."},
    {id: 10, titulo: "ANÁLISE DE SISTEMAS", preco: 900.00, imagem: "https://wordpress-cms-gc-prod-assets.quero.space/uploads/2019/01/analise-e-desenvolvimento-de-sistemas-o-que-faz-2.jpg", descricao: "Curso que aborda a análise e o design de sistemas, focando na criação de soluções eficientes para problemas de negócios."},
    {id: 11, titulo: "REDES DE COMPUTADORES", preco: 550.00, imagem: "https://mediamanager.com.br/wp-content/uploads/2023/04/O-que-e-rede-de-computadores.png", descricao: "Estude a configuração, manutenção e segurança de redes de computadores."},
    {id: 12, titulo: "INTELIGÊNCIA ARTIFICIAL", preco: 1100.00, imagem: "https://s4.static.brasilescola.uol.com.br/be/2023/05/mao-humana-e-mao-robotica-tocando-um-grafico-digital-em-alusao-a-inteligencia-artificial.jpg", descricao: "Aprenda sobre algoritmos e técnicas de inteligência artificial para criar sistemas inteligentes."},
    {id: 13, titulo: "BIG DATA", preco: 1200.00, imagem: "https://www.dataex.com.br/wp-content/uploads/2021/04/big-data-o-qu-e-para-que-serve-e-suas-aplicacoes.jpg", descricao: "Curso sobre a gestão e análise de grandes volumes de dados para obter insights valiosos."},
    {id: 14, titulo: "DESENVOLVIMENTO WEB", preco: 800.00, imagem: "https://roimine.com/wp-content/uploads/2021/06/Confira-a-importancia-de-ter-um-site-otimizado-para-mobile.jpg", descricao: "Aprenda a construir e otimizar sites e aplicações web."},
    {id: 15, titulo: "CIBERSEGURANÇA", preco: 950.00, imagem: "https://horizontes.sbc.org.br/wp-content/uploads/2021/06/cybersecurity-lock.jpeg", descricao: "Estude as práticas e ferramentas necessárias para proteger sistemas e dados contra ameaças cibernéticas."},
    {id: 16, titulo: "AUTOMAÇÃO INDUSTRIAL", preco: 1000.00, imagem: "https://b2678692.smushcdn.com/2678692/wp-content/uploads/2023/03/Tudo-sobre-automacao-industrial-o-que-e-objetivos-e-vantagens-900x600.jpg?lossy=0&strip=1&webp=1", descricao: "Curso sobre automação de processos industriais para aumentar a eficiência e reduzir custos."},
    {id: 17, titulo: "DESENVOLVIMENTO MOBILE", preco: 900.00, imagem: "https://blog.kxptech.com/wp-content/uploads/2023/09/image1-min.jpg", descricao: "Aprenda a desenvolver aplicativos móveis para iOS e Android."},
    {id: 18, titulo: "ADMINISTRAÇÃO DE BANCO DE DADOS", preco: 700.00, imagem: "https://esr.rnp.br/wp-content/uploads/2020/07/cuales-son-las-funciones-de-un-administrador-de-base-de-datos.jpg.webp", descricao: "Curso focado em técnicas e ferramentas para gerenciar e manter bancos de dados."}
]

const MarketCarPages = () => {
    const [shoppingTenis, setShoppingTenis] = useState<IShoppingItem[]>([])

    const handleAddTenis = (id: number) => {
        const teni = tenis.find((teni) => teni.id === id)
        const ExisteShoppingTenis = shoppingTenis.find((item) => item.produto.id === id)

        if (ExisteShoppingTenis) {
            const newShoppingTenis: IShoppingItem[] = shoppingTenis.map(item => {
                if (item.produto.id === id) {
                    return {
                        ...item,
                        quantidade: item.quantidade + 1
                    }
                }
                return item
            })
            setShoppingTenis(newShoppingTenis)
            return
        }

        const carItem: IShoppingItem = {
            produto: teni!,
            quantidade: 1
        }

        const newShoppingTenis: IShoppingItem[] = [...shoppingTenis, carItem]
        setShoppingTenis(newShoppingTenis)
    }

    const handleRemoveTenis = (id: number) => {
        const newShoppingTenis = shoppingTenis.map(item => {
            if (item.produto.id === id) {
                const newQuantity = item.quantidade > 0 ? item.quantidade - 1 : 0
                return {
                    ...item,
                    quantidade: newQuantity
                }
            }
            return item
        }).filter(item => item.quantidade > 0)
        
        setShoppingTenis(newShoppingTenis)
    }

    const handleClearCart = () => {
        setShoppingTenis([]) // Limpa todos os itens do carrinho
    }

    // Calcular o total do carrinho
    const calculateTotal = () => {
        return shoppingTenis.reduce((total, item) => total + (item.quantidade * item.produto.preco), 0).toFixed(2)
    }

    // Gerar a nota fiscal
    const generateInvoice = () => {
        const invoiceContent = `
            <html>
            <head>
                <title>Nota Fiscal</title>
                <style>
                    body { font-family: Arial, sans-serif; margin: 20px; }
                    .invoice-header { margin-bottom: 20px; }
                    .invoice-item { margin-bottom: 10px; }
                    .invoice-item img { max-width: 100px; height: auto; }
                    .total-amount { font-weight: bold; }
                </style>
            </head>
            <body>
                <h1>Nota Fiscal</h1>
                <div class="invoice-header">
                    <p><strong>Data:</strong> ${new Date().toLocaleDateString()}</p>
                    <p><strong>Itens Comprados:</strong></p>
                </div>
                ${shoppingTenis.map(item => `
                    <div class="invoice-item">
                        <img src="${item.produto.imagem}" alt="${item.produto.titulo}" />
                        <p><strong>Produto:</strong> ${item.produto.titulo}</p>
                        <p><strong>Preço:</strong> R$ ${item.produto.preco.toFixed(2)}</p>
                        <p><strong>Quantidade:</strong> ${item.quantidade}</p>
                        <p><strong>Total:</strong> R$ ${(item.quantidade * item.produto.preco).toFixed(2)}</p>
                    </div>
                `).join('')}
                <div class="total-amount">
                    <p><strong>Total Geral:</strong> R$ ${calculateTotal()}</p>
                </div>
            </body>
            </html>
        `;

        const newWindow = window.open('', '', 'height=600,width=800');
        newWindow?.document.write(invoiceContent);
        newWindow?.document.close();
        newWindow?.focus();
        newWindow?.print();
    }

    return (
        <div>
            <h1>Cursos SENAI </h1>
            <div className="grid-container">
                {tenis.map(teni => (
                    <div className="grid-item" key={teni.id}>
                        <img src={teni.imagem} alt={teni.titulo} className="course-image" />
                        <p>{teni.titulo}</p>
                        <p>R$ {teni.preco.toFixed(2)}</p>
                        <p>{teni.descricao}</p>
                        <button onClick={() => handleAddTenis(teni.id)}>Adicionar</button>
                    </div>
                ))}
            </div>
            <div className="carrinho-container">
                <div>
                    <h1>Carrinho de Compras</h1>
                    <ul>
                        {shoppingTenis.map(item => (
                            <li key={item.produto.id}>
                                <p>Produto: {item.produto.titulo}</p>
                                <p>Preço: R$ {item.produto.preco.toFixed(2)}</p>
                                <p>Quantidade: {item.quantidade}</p>
                                <p>Total: R$ {(item.quantidade * item.produto.preco).toFixed(2)}</p>
                                <button onClick={() => handleRemoveTenis(item.produto.id)}>Remover</button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="total-container">
                    <h2>Total do Carrinho</h2>
                    <p className="total-amount">R$ {calculateTotal()}</p>
                    <button className="clear-cart-button" onClick={handleClearCart}>Remover Todos</button>
                    <button className="print-invoice-button" onClick={generateInvoice}>Imprimir Nota Fiscal</button>
                </div>
            </div>
        </div>
    )
}

export default MarketCarPages
