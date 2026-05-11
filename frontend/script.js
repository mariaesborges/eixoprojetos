const projetos = [
  // id=0
  {
    title:'Residencial Serra Verde', cat:'Loteamento', loc:'São Roque de Minas, MG', year:'2025',
    img:'img/serraverde_01.jpg',
    imgs:["img/serraverde_01.jpg","img/serraverde_02.jpg","img/serraverde_03.jpg","img/serraverde_04.jpg","img/serraverde_05.jpg","img/serraverde_06.jpg","img/serraverde_07.jpg","img/serraverde_08.jpg","img/serraverde_09.jpg","img/serraverde_10.jpg","img/serraverde_11.jpg","img/serraverde_12.jpg"],
    desc:'Projeto de loteamento urbanizado com infraestrutura completa, contemplando pavimentação, redes de água e esgoto, iluminação pública e acessos planejados. O empreendimento foi desenvolvido em conformidade com todas as exigências municipais e ambientais, garantindo qualidade de vida para os futuros moradores.',
    delivs:['Projeto urbanístico completo','Infraestrutura de água e esgoto','Sistema de drenagem pluvial','Pavimentação asfáltica','Iluminação pública LED','Projeto paisagístico'],
    sidebar:[['Cliente','Construtora Serra Verde'],['Área Total','42 hectares'],['Lotes','348 unidades'],['Prazo','18 meses'],['Status','Concluído'],['Norma','NBR 6118']],
  },
  // id=1
  {
    title:'Obra D|M', cat:'Residencial', loc:'São Roque de Minas, MG', year:'2026',
    img:'img/dm_01.jpg',
    imgs:["img/dm_01.jpg", "img/dm_02.jpg", "img/dm_03.jpg", "img/dm_04.jpg", "img/dm_05.jpg", "img/dm_06.jpg", "img/dm_07.jpg", "img/dm_08.jpg", "img/dm_09.jpg", "img/dm_10.jpg", "img/dm_11.jpg", "img/dm_12.jpg"],
    desc:'Projeto residencial contemporâneo desenvolvido para unir sofisticação, conforto e funcionalidade em cada ambiente. A residência possui 198,08 m² de área construída, com 3 dormitórios, sendo 1 suíte, ambientes integrados entre sala e cozinha, área gourmet ampla, lavanderia, banheiro social e garagem. O projeto priorizou iluminação natural, circulação fluida e acabamentos modernos, resultando em uma residência elegante e acolhedora para toda a família.',
    delivs:['Projeto arquitetônico residencial completo','Execução estrutural da residência','Instalações elétricas e hidrossanitárias','Construção da área gourmet integrada','Execução de lavanderia e garagem','Acabamentos internos e externos','Paisagismo e organização da área externa','Entrega final da obra pronta para moradia'],
    sidebar:[['Área Construída','198,08 m²'],['Quartos','3 dormitórios (1 suíte)'],['Ambientes','Área gourmet, lavanderia e garagem'],['Prazo','8 meses'],['Status','Entregue']],
  },
  // id=2
  {
    title:'Obra Avelino', cat:'Residencial', loc:'São Roque de Minas, MG', year:'2026',
    img:'img/avelino_01.jpg',
    imgs:["img/avelino_01.jpg", "img/avelino_02.jpg", "img/avelino_03.jpg", "img/avelino_04.jpg", "img/avelino_05.jpg"],
    desc:'A Obra Avelino foi desenvolvida com foco em modernidade, conforto e alto padrão de acabamento. A residência possui ambientes integrados e funcionais, valorizando amplitude e iluminação natural através do pé-direito duplo na sala e cozinha conjugadas. O projeto conta com garagem para 2 carros, área gourmet com churrasqueira, 3 dormitórios — sendo 1 suíte com closet — além de lavanderia e banheiro social. Cada detalhe foi pensado para oferecer praticidade, sofisticação e qualidade construtiva em todos os ambientes.',
    delivs:['Projeto residencial contemporâneo completo','Execução estrutural e fundações','Sala e cozinha integradas com pé-direito duplo','Construção da área gourmet com churrasqueira','Garagem coberta para 2 veículos','Instalações elétricas e hidrossanitárias','Execução de suíte com closet','Acabamentos premium internos e externos','Entrega final da residência pronta para moradia'],
    sidebar:[['Localização','R. Avelino Soares de Faria, 28 — Bela Vista'],['Terreno','6 × 25,90 m'],['Área Construída','137,55 m²'],['Configuração','3 quartos (1 suíte com closet)'],['Diferenciais','Pé-direito duplo e área gourmet integrada'],['Prazo','10 meses'],['Status','Disponível para venda']],
  },
  // id=3
  {
    title:'Obra Maria Rodart – Casa 03', cat:'Residencial', loc:'São Roque de Minas, MG', year:'2025',
    img:'img/rodart3_01.jpg',
    imgs:["img/rodart3_01.jpg", "img/rodart3_02.jpg", "img/rodart3_03.jpg", "img/rodart3_04.jpg", "img/rodart3_05.jpg", "img/rodart3_06.jpg", "img/rodart3_07.jpg"],
    desc:'A Obra Maria Rodart – Casa 03 foi desenvolvida com foco em funcionalidade, conforto e excelente aproveitamento do terreno. Com um projeto moderno e compacto, a residência oferece ambientes integrados que proporcionam praticidade e sensação de amplitude no dia a dia. A casa conta com 2 quartos, banheiro social, sala conjugada com cozinha e garagem descoberta para 2 veículos. O imóvel ainda possui área externa com espaço ideal para horta e futuras ampliações, agregando versatilidade e valorização ao projeto.',
    delivs:['Projeto residencial moderno e funcional','Sala e cozinha integradas','Execução estrutural em laje','Construção de varanda e lavanderia','Garagem descoberta para 2 veículos','Instalações elétricas e hidrossanitárias','Espaço planejado para futuras ampliações','Área externa para horta e lazer','Acabamentos internos e externos','Entrega pronta para moradia'],
    sidebar:[['Cliente','Residência Particular'],['Terreno','6 × 26 m'],['Área Construída','45,53 m² + varanda'],['Configuração','2 quartos e 1 banheiro social'],['Garagem','2 vagas descobertas'],['Diferenciais','Espaço para ampliação e horta residencial'],['Status','Disponível para venda']],
  },
  // id=4
  {
    title:'Obra Maria Rodart – Casa 04', cat:'Residencial', loc:'São Roque de Minas, MG', year:'2025',
    img:'img/rodart4_01.jpg',
    imgs:["img/rodart4_01.jpg", "img/rodart4_02.jpg", "img/rodart4_03.jpg", "img/rodart4_04.jpg"],
    desc:'A Obra Maria Rodart – Casa 04 foi projetada para oferecer conforto, praticidade e excelente aproveitamento dos espaços em um conceito moderno e acolhedor. Com 73 m² de puro aconchego, a residência conta com 2 quartos, sala e cozinha integradas, banheiro social, área gourmet e lavanderia, proporcionando ambientes funcionais e ideais para o dia a dia. O projeto ainda possui espaço planejado para futuras ampliações, trazendo mais liberdade e valorização ao imóvel ao longo do tempo.',
    delivs:['Projeto residencial moderno e funcional','Sala e cozinha integradas','Execução estrutural completa','Área gourmet integrada','Lavanderia funcional','Instalações elétricas e hidrossanitárias','Espaço planejado para futuras ampliações','Acabamentos internos e externos','Entrega pronta para moradia'],
    sidebar:[['Cliente','Residência Particular'],['Terreno','6 × 27 m'],['Área Construída','73 m²'],['Configuração','2 quartos e 1 banheiro social'],['Ambientes','Sala e cozinha integradas'],['Diferenciais','Área gourmet e possibilidade de ampliação'],['Status','Disponível para venda']],
  },
  // id=5
  {
    title:'Obra Arizona', cat:'Residencial', loc:'São Roque de Minas, MG', year:'2024',
    img:'img/arizona_01.jpg',
    imgs:["img/arizona_01.jpg", "img/arizona_02.jpg", "img/arizona_03.jpg", "img/arizona_04.jpg"],
    desc:'A Obra Arizona foi desenvolvida com um conceito moderno e funcional, priorizando conforto, sofisticação e excelente padrão construtivo. Com 113,40 m² de área construída, a residência conta com sala e cozinha conjugadas em um ambiente integrado com pé-direito duplo, proporcionando maior amplitude, iluminação natural e elegância ao projeto. A casa possui 2 quartos, banheiro social, lavanderia, jardim e espaço destinado para futura área gourmet, além de garagem para 2 veículos.',
    delivs:['Projeto residencial moderno e funcional','Sala e cozinha integradas com pé-direito duplo','Garagem para 2 veículos','Execução estrutural completa','Instalações elétricas e hidrossanitárias','Jardim e área externa planejada','Espaço destinado para futura área gourmet','Acabamentos premium internos e externos','Instalação de portão eletrônico','Entrega com cooktop e acessórios dos banheiros','Sistema de iluminação moderna'],
    sidebar:[['Cliente','Residência Particular'],['Área Construída','113,40 m²'],['Configuração','2 quartos e 1 banheiro social'],['Diferenciais','Pé-direito duplo e acabamento premium'],['Garagem','2 vagas'],['Acabamentos','Piso retificado polido e tintas emborrachadas'],['Itens Inclusos','Portão eletrônico, cooktop e acessórios dos banheiros'],['Status','Casa vendida']],
  },
];