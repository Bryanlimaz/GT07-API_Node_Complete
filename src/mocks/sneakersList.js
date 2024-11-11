const produtos = [
    {
        "id": 1,
        "nome": "Nike",
        "imagem": "https://cdn.vnda.com.br/780x/pardalsneakers/2023/08/21/22_10_44_549_tenis_nike_air_vapormax_360_racer_blue_1613_1_078c6835ff714b6f499b2e182c3d1fb8_20210812081446.png?v=1692666644",
        "Descricao": "Nike 360 - Branco e Azul",
        "preco": 299.50
    },
    {
        "id": 2,
        "nome": "Puma",
        "imagem": "https://images.tcdn.com.br/img/img_prod/311840/tenis_puma_flyer_runner_mesh_bdp_feminino_preto_119322_6_44ae5f31e723774d8941ff5736568728.png",
        "Descricao": "Puma - Preto",
        "preco": 399.90
    },
    {
        "id": 3,
        "nome": "Adidas",
        "imagem": "https://images.tcdn.com.br/img/img_prod/311840/tenis_adidas_response_runner_azul_e_preto_114793_6_a9135d0fb1adf94853df1dc720cb4e83.png",
        "Descricao": "Adidas - Azul",
        "preco": 99.90
    },
    {
        "id": 4,
        "nome": "Reebok",
        "imagem": "https://images.tcdn.com.br/img/img_prod/311840/tenis_reebok_classic_leather_branco_116789_6_2e0f2c23e1f84a3f9e5a2b19104c84e5.png",
        "Descricao": "Reebok Classic - Branco",
        "preco": 249.90
    },
    {
        "id": 5,
        "nome": "New Balance",
        "imagem": "https://cdn.vnda.com.br/780x/pardalsneakers/2023/09/15/12_45_36_327_tenis_new_balance_574_cinza_e_preto_1186_1_7c3c300e700f4e3c88c80e8a8075fc2a.png?v=1694789137",
        "Descricao": "New Balance 574 - Cinza e Preto",
        "preco": 349.90
    },
    {
        "id": 6,
        "nome": "Asics",
        "imagem": "https://cdn.vnda.com.br/780x/pardalsneakers/2023/07/10/14_30_15_876_tenis_asics_gel_excite_8_azul_e_verde_1109_1_bff3f5e7e4bb4d3d9c1c1b8d249e56b5.png?v=1689013815",
        "Descricao": "Asics Gel Excite 8 - Azul e Verde",
        "preco": 499.90
    },
    {
        "id": 7,
        "nome": "Vans",
        "imagem": "https://cdn.vnda.com.br/780x/pardalsneakers/2023/06/12/11_50_25_415_tenis_vans_old_skool_preto_e_branco_1234_1_a09c301de1c34212b0c29cbf420ef75e.png?v=1686595225",
        "Descricao": "Vans Old Skool - Preto e Branco",
        "preco": 199.90
    },
    {
        "id": 8,
        "nome": "Under Armour",
        "imagem": "https://cdn.vnda.com.br/780x/pardalsneakers/2023/10/05/15_20_33_991_tenis_under_armour_hovr_rise_3_azul_1190_1_54b295e67a9b4b68a97f72464d71a3b9.png?v=1696530033",
        "Descricao": "Under Armour HOVR Rise 3 - Azul",
        "preco": 399.90
    },
    {
        "id": 9,
        "nome": "Fila",
        "imagem": "https://cdn.vnda.com.br/780x/pardalsneakers/2023/08/15/14_30_20_111_tenis_fila_disruptor_ii_branco_1245_1_ae1d38f39e514bc49f3b69c5e7b04a8b.png?v=1692091820",
        "Descricao": "Fila Disruptor II - Branco",
        "preco": 249.90
    },
    {
        "id": 10,
        "nome": "Saucony",
        "imagem": "https://cdn.vnda.com.br/780x/pardalsneakers/2023/09/25/12_15_33_201_tenis_saucony_guide_14_preto_e_cinza_1187_1_a0f6eaf96e054ee09d086d847da15c77.png?v=1695657334",
        "Descricao": "Saucony Guide 14 - Preto e Cinza",
        "preco": 399.90
    },
    {
        "id": 11,
        "nome": "On",
        "imagem": "https://cdn.vnda.com.br/780x/pardalsneakers/2023/10/10/10_45_20_444_tenis_on_cloudstratus_azul_1192_1_bda5b5b42d5e4d1a87f6d41d0c96592b.png?v=1696937120",
        "Descricao": "On Cloudstratus - Azul",
        "preco": 649.90
    },
    {
        "id": 12,
        "nome": "Havaianas",
        "imagem": "https://cdn.vnda.com.br/780x/pardalsneakers/2023/07/15/15_20_18_111_chinelo_havaianas_top_preto_1000_1_43f1c67f20d64ec489e7e3cb6fbe85d0.png?v=1689344400",
        "Descricao": "Havaianas Top - Preto",
        "preco": 49.90
    },
    {
        "id": 13,
        "nome": "Skechers",
        "imagem": "https://cdn.vnda.com.br/780x/pardalsneakers/2023/09/05/14_15_42_542_tenis_skechers_go_walk_5_feminino_rosa_1108_1_f6f61c0c9f054aa597b9f01b5f858024.png?v=1693930143",
        "Descricao": "Skechers Go Walk 5 - Rosa",
        "preco": 299.90
    },
    {
        "id": 14,
        "nome": "Columbia",
        "imagem": "https://cdn.vnda.com.br/780x/pardalsneakers/2023/08/20/12_10_25_882_tenis_columbia_peakfreak_azul_1188_1_4f84572f1b8e4ff3aa1b5146cdbd6224.png?v=1692544220",
        "Descricao": "Columbia Peakfreak - Azul",
        "preco": 499.90
    },
    {
        "id": 15,
        "nome": "Brooks",
        "imagem": "https://cdn.vnda.com.br/780x/pardalsneakers/2023/06/25/09_15_12_435_tenis_brooks_ghost_14_preto_e_verde_1168_1_c3b2ef49a66c45888c2ef29d68636a94.png?v=1687719312",
        "Descricao": "Brooks Ghost 14 - Preto e Verde",
        "preco": 499.90
    },
    {
        "id": 16,
        "nome": "Diadora",
        "imagem": "https://cdn.vnda.com.br/780x/pardalsneakers/2023/09/30/10_50_30_244_tenis_diadora_campagnolo_branco_1161_1_2ffbc18423354029b1ed55a15a4b43e9.png?v=1696050600",
        "Descricao": "Diadora Campagnolo - Branco",
        "preco": 269.90
    },
    {
        "id": 17,
        "nome": "Kappa",
        "imagem": "https://cdn.vnda.com.br/780x/pardalsneakers/2023/05/30/15_40_15_122_tenis_kappa_2050_preto_1155_1_d0c0c88f7a9f49e38c7b2b1c9241e493.png?v=1685504411",
        "Descricao": "Kappa 2050 - Preto",
        "preco": 159.90
    },
    {
        "id": 18,
        "nome": "Mizuno",
        "imagem": "https://cdn.vnda.com.br/780x/pardalsneakers/2023/10/01/14_20_32_577_tenis_mizuno_wave_rider_25_azul_1185_1_aa243e50a84f4978b37a34b36c84110c.png?v=1696165238",
        "Descricao": "Mizuno Wave Rider 25 - Azul",
        "preco": 579.90
    },
    {
        "id": 19,
        "nome": "Native",
        "imagem": "https://cdn.vnda.com.br/780x/pardalsneakers/2023/09/12/15_35_28_973_tenis_native_jefferson_azul_1191_1_d1c788e3e8434aa4a622e2bb00de399c.png?v=1694537726",
        "Descricao": "Native Jefferson - Azul",
        "preco": 199.90
    },
    {
        "id": 20,
        "nome": "Timberland",
        "imagem": "https://cdn.vnda.com.br/780x/pardalsneakers/2023/06/18/14_10_15_771_bota_timberland_classic_6_inch_amarelo_1182_1_e6d8c617b3e64b9cbefb45a45e51b25b.png?v=1687010615",
        "Descricao": "Timberland Classic 6 Inch - Amarelo",
        "preco": 799.90
    }
]

module.exports = produtos;