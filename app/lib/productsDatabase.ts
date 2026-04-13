// // // 模拟数据库数据保持不变...
// // const productsDatabase = {
// //   bamboo: [
// //     {
// //       id: "1",
// //       title: "V-fold hand Paper Towel",
// //       img: "/images/v-fold-hand-paper-towel.jpg",
// //     },
// //     {
// //       id: "2",
// //       title: "Hand Paper Towel",
// //       img: "/images/hand-paper-towel.jpg",
// //     },
// //     {
// //       id: "3",
// //       title: "Lunch Napkins",
// //       img: "/images/lunch-napkins.jpg",
// //     },
// //     {
// //       id: "4",
// //       title: "V-fold Kitchen Paper",
// //       img: "/images/v-fold-kitchen-paper.jpg",
// //     },
// //     {
// //       id: "5",
// //       title: "Ample Kitchen Roll",
// //       img: "/images/ample-kitchen-roll.jpg",
// //     },
// //     {
// //       id: "6",
// //       title: "Plastic Free Kitchen Paper Towel",
// //       img: "/images/plastic-free-kitchen-paper-towel.jpg",
// //     },
// //     {
// //       id: "7",
// //       title: "Commercial Facial Tissue",
// //       img: "/images/commercial-facial-tissue.jpg",
// //     },
// //     {
// //       id: "8",
// //       title: "Ultra Soft Facial Tissue",
// //       img: "/images/ultra-soft-facial-tissue.jpg",
// //     },
// //     {
// //       id: "9",
// //       title: "Ultra Soft Toilet Paper",
// //       img: "/images/ultra-soft-toilet-paper.jpg",
// //     },
// //     {
// //       id: "10",
// //       title: "2ply Mini Jumbo Toilet Roll",
// //       img: "/images/2ply-mini-jumbo-toilet-roll.jpg",
// //     },
// //     // 👇 这是从第二页挪过来的两个新商品 👇
// //     { id: "29", title: "Toilet Paper", img: "/images/toilet-paper.jpg" },
// //     {
// //       id: "30",
// //       title: "Bamboo Dissolvable Toilet Paper",
// //       img: "/images/virgin-dissolvable-toilet-paper.jpg",
// //     },
// //   ],
// //   virgin: [
// //     {
// //       id: "11",
// //       title: "V-fold hand Paper Towel",
// //       img: "/images/v-fold-hand-paper-towel.jpg",
// //     },
// //     {
// //       id: "12",
// //       title: "Hand Paper Towel",
// //       img: "/images/hand-paper-towel-1.jpg",
// //     }, // 名字重复1
// //     {
// //       id: "13",
// //       title: "Hand Paper Towel",
// //       img: "/images/hand-paper-towel.jpg",
// //     }, // 名字重复2
// //     { id: "14", title: "Lunch Napkins", img: "/images/lunch-napkins.jpg" },
// //     {
// //       id: "15",
// //       title: "Plastic Free Kitchen Paper Towel",
// //       img: "/images/plastic-free-kitchen-paper-towel.jpg",
// //     },
// //     {
// //       id: "16",
// //       title: "Ultra Soft Facial Tissue",
// //       img: "/images/ultra-soft-facial-tissue.jpg",
// //     },
// //     {
// //       id: "17",
// //       title: "2ply Mini Jumbo Toilet Roll",
// //       img: "/images/2ply-mini-jumbo-toilet-roll.jpg",
// //     },
// //     {
// //       id: "18",
// //       title: "Virgin Dissolvable Toilet Paper",
// //       img: "/images/virgin-dissolvable-toilet-paper.jpg",
// //     },
// //   ],
// //   recycle: [
// //     {
// //       id: "19",
// //       title: "V-fold hand Paper Towel",
// //       img: "/images/v-fold-hand-paper-towel.jpg",
// //     },
// //     {
// //       id: "20",
// //       title: "Ample Kitchen Roll",
// //       img: "/images/ample-kitchen-roll.jpg",
// //     },
// //     {
// //       id: "21",
// //       title: "Hand Paper Towel",
// //       img: "/images/hand-paper-towel.jpg",
// //     },
// //     {
// //       id: "22",
// //       title: "2ply Mini Jumbo Toilet Roll",
// //       img: "/images/2ply-mini-jumbo-toilet-roll.jpg",
// //     },
// //     {
// //       id: "23",
// //       title: "Recycle Dissolvable Toilet Paper",
// //       img: "/images/virgin-dissolvable-toilet-paper.jpg",
// //     },
// //   ],
// //   mixed: [
// //     {
// //       id: "24",
// //       title: "V-fold hand Paper Towel",
// //       img: "/images/v-fold-hand-paper-towel.jpg",
// //     },
// //     {
// //       id: "25",
// //       title: "Ample Kitchen Roll",
// //       img: "/images/ample-kitchen-roll.jpg",
// //     },
// //     {
// //       id: "26",
// //       title: "Hand Paper Towel",
// //       img: "/images/hand-paper-towel.jpg",
// //     },
// //     {
// //       id: "27",
// //       title: "2ply Mini Jumbo Toilet Roll",
// //       img: "/images/2ply-mini-jumbo-toilet-roll.jpg",
// //     },
// //     {
// //       id: "28",
// //       title: "Mixed Dissolvable Toilet Paper",
// //       img: "/images/virgin-dissolvable-toilet-paper.jpg",
// //     },
// //   ],
// // };


// // 统一的详情内容
// const commonFeatures = [
//   "Eco friendly 100% bamboo toilet paper.",
//   "100% Bamboo toilet paper",
//   "Biodegradable paper tissue",
//   "Silky touch",
//   "Brand Customize",
//   "Water soluble",
//   "Plastic free",
//   "Responsible Forestry Certified",
// ];

// const commonSpecs = {
//   "Product": "Premium Paper Series",
//   "Material": "Sustainable Virgin Pulp",
//   "GSM": "14.5gsm",
//   "Layer": "3ply",
//   "Sheet size": "101*120mm(4'*4.8')",
//   "Sheets": "220 sheets",
//   "Weight": "120g/roll",
//   "Feature": "DISSOLVABLE",
//   "Certifications": "FSC, BSI, SGS",
// };

// export const productsDatabase: any = {
//   bamboo: [
//     { id: "1", title: "V-fold hand Paper Towel", img: "/images/v-fold-hand-paper-towel.jpg", features: commonFeatures, specs: commonSpecs },
//     { id: "2", title: "Hand Paper Towel", img: "/images/hand-paper-towel.jpg", features: commonFeatures, specs: commonSpecs },
//     { id: "3", title: "Lunch Napkins", img: "/images/lunch-napkins.jpg", features: commonFeatures, specs: commonSpecs },
//     { id: "4", title: "V-fold Kitchen Paper", img: "/images/v-fold-kitchen-paper.jpg", features: commonFeatures, specs: commonSpecs },
//     { id: "5", title: "Ample Kitchen Roll", img: "/images/ample-kitchen-roll.jpg", features: commonFeatures, specs: commonSpecs },
//     { id: "6", title: "Plastic Free Kitchen Paper Towel", img: "/images/plastic-free-kitchen-paper-towel.jpg", features: commonFeatures, specs: commonSpecs },
//     { id: "7", title: "Commercial Facial Tissue", img: "/images/commercial-facial-tissue.jpg", features: commonFeatures, specs: commonSpecs },
//     { id: "8", title: "Ultra Soft Facial Tissue", img: "/images/ultra-soft-facial-tissue.jpg", features: commonFeatures, specs: commonSpecs },
//     { id: "9", title: "Ultra Soft Toilet Paper", img: "/images/ultra-soft-toilet-paper.jpg", features: commonFeatures, specs: commonSpecs },
//     { id: "10", title: "2ply Mini Jumbo Toilet Roll", img: "/images/2ply-mini-jumbo-toilet-roll.jpg", features: commonFeatures, specs: commonSpecs },
//     { id: "29", title: "Toilet Paper", img: "/images/toilet-paper.jpg", features: commonFeatures, specs: commonSpecs },
//     { id: "30", title: "Bamboo Dissolvable Toilet Paper", img: "/images/virgin-dissolvable-toilet-paper.jpg", features: commonFeatures, specs: commonSpecs },
//   ],
//   virgin: [
//     { id: "11", title: "V-fold hand Paper Towel", img: "/images/v-fold-hand-paper-towel.jpg", features: commonFeatures, specs: commonSpecs },
//     { id: "12", title: "Hand Paper Towel", img: "/images/hand-paper-towel-1.jpg", features: commonFeatures, specs: commonSpecs },
//     { id: "13", title: "Hand Paper Towel", img: "/images/hand-paper-towel.jpg", features: commonFeatures, specs: commonSpecs },
//     { id: "14", title: "Lunch Napkins", img: "/images/lunch-napkins.jpg", features: commonFeatures, specs: commonSpecs },
//     { id: "15", title: "Plastic Free Kitchen Paper Towel", img: "/images/plastic-free-kitchen-paper-towel.jpg", features: commonFeatures, specs: commonSpecs },
//     { id: "16", title: "Ultra Soft Facial Tissue", img: "/images/ultra-soft-facial-tissue.jpg", features: commonFeatures, specs: commonSpecs },
//     { id: "17", title: "2ply Mini Jumbo Toilet Roll", img: "/images/2ply-mini-jumbo-toilet-roll.jpg", features: commonFeatures, specs: commonSpecs },
//     { id: "18", title: "Virgin Dissolvable Toilet Paper", img: "/images/virgin-dissolvable-toilet-paper.jpg", features: commonFeatures, specs: commonSpecs },
//   ],
//   recycle: [
//     { id: "19", title: "V-fold hand Paper Towel", img: "/images/v-fold-hand-paper-towel.jpg", features: commonFeatures, specs: commonSpecs },
//     { id: "20", title: "Ample Kitchen Roll", img: "/images/ample-kitchen-roll.jpg", features: commonFeatures, specs: commonSpecs },
//     { id: "21", title: "Hand Paper Towel", img: "/images/hand-paper-towel.jpg", features: commonFeatures, specs: commonSpecs },
//     { id: "22", title: "2ply Mini Jumbo Toilet Roll", img: "/images/2ply-mini-jumbo-toilet-roll.jpg", features: commonFeatures, specs: commonSpecs },
//     { id: "23", title: "Recycle Dissolvable Toilet Paper", img: "/images/virgin-dissolvable-toilet-paper.jpg", features: commonFeatures, specs: commonSpecs },
//   ],
//   mixed: [
//     { id: "24", title: "V-fold hand Paper Towel", img: "/images/v-fold-hand-paper-towel.jpg", features: commonFeatures, specs: commonSpecs },
//     { id: "25", title: "Ample Kitchen Roll", img: "/images/ample-kitchen-roll.jpg", features: commonFeatures, specs: commonSpecs },
//     { id: "26", title: "Hand Paper Towel", img: "/images/hand-paper-towel.jpg", features: commonFeatures, specs: commonSpecs },
//     { id: "27", title: "2ply Mini Jumbo Toilet Roll", img: "/images/2ply-mini-jumbo-toilet-roll.jpg", features: commonFeatures, specs: commonSpecs },
//     { id: "28", title: "Mixed Dissolvable Toilet Paper", img: "/images/virgin-dissolvable-toilet-paper.jpg", features: commonFeatures, specs: commonSpecs },
//   ],
// };

// ============================================================
// 📌 核心产品数据库 - 已根据最新提取数据精准匹配
// ============================================================

export const productsDatabase: any = {
  bamboo: [
    {
      id: "1",
      title: "V-fold hand Paper Towel",
      img: "/images/v-fold-hand-paper-towel.jpg",
      features: ["Disposable hand drying paper", "Strong and tear resistant", "Biodegradable paper tissue", "High water absorbent"],
      specs: { "Product": "V-FOLD HAND PAPER TOWEL", "Material": "Virgin pulp", "GSM": "42gsm", "Layer": "1ply", "Sheet size": "220*225mm", "Sheets": "200sheets", "Weight": "420g/PACK", "Feature": "Strong water absorption", "Packing": "20packs/carton" }
    },
    {
      id: "2",
      title: "Hand Paper Towel",
      img: "/images/hand-paper-towel.jpg",
      features: ["Disposable hand drying paper", "Strong and tear resistant", "Biodegradable paper tissue", "High water absorbent"],
      specs: { "Product": "HAND PAPER TOWEL", "Material": "Virgin pulp", "GSM": "21gsm", "Layer": "2ply", "Sheet size": "200*225mm", "Sheets": "800sheets (180m)", "Core": "42mm", "Weight": "1.4kg/roll", "Feature": "DISSOLVABLE", "Packing": "8 rolls/carton" }
    },
    {
      id: "3",
      title: "Lunch Napkins",
      img: "/images/lunch-napkins.jpg",
      features: ["Colorful design", "Party and holiday decoration", "OEM available", "Oil absorption"],
      specs: { "Product": "LUNCH NAPKINS", "Material": "Virgin wood pulp", "GSM": "17gsm", "Layer": "2ply", "Sheet size": "230*230mm", "Sheets": "6sheets", "Fold": "1/4 fold", "Weight": "90g/pack", "Feature": "Oil absorption, clean" }
    },
    {
      id: "4",
      title: "V-fold Kitchen Paper",
      img: "/images/v-fold-kitchen-paper.jpg",
      features: ["100% bamboo kitchen paper", "High water absorbent", "Oil cleaning", "Washable for dishes"],
      specs: { "Product": "V-FOLD KITCHEN PAPER", "Material": "Virgin bamboo pulp", "GSM": "26gsm", "Layer": "2ply", "Sheet size": "220*270mm", "Sheets": "50 sheets", "Embossed": "Panda embossed", "Weight": "160g/roll", "Feature": "Strong water & oil absorption" }
    },
    {
      id: "5",
      title: "Ample Kitchen Roll",
      img: "/images/ample-kitchen-roll.jpg",
      features: ["100% bamboo kitchen paper", "Biodegradable", "High water absorbent", "Oil cleaning"],
      specs: { "Product": "AMPLE KITCHEN ROLL", "Material": "Virgin wood pulp", "GSM": "21gsm", "Layer": "2ply", "Sheet size": "220*225mm", "Sheets": "75 sheets", "Core": "45mm", "Weight": "175g/roll", "Feature": "Strong water & oil absorption" }
    },
    {
      id: "6",
      title: "Plastic Free Kitchen Paper Towel",
      img: "/images/plastic-free-kitchen-paper-towel.jpg",
      features: ["100% bamboo kitchen paper", "Plastic free", "Biodegradable", "High water absorbent"],
      specs: { "Product": "Plastic Free Kitchen Paper Towel", "Material": "Virgin bamboo pulp", "GSM": "24.5 gsm", "Layer": "2ply", "Sheet size": "220*225mm", "Sheets": "100 sheets", "Weight": "260g/roll", "Feature": "Plastic free" }
    },
    {
      id: "7",
      title: "Commercial Facial Tissue",
      img: "/images/commercial-facial-tissue.jpg",
      features: ["Portable pack", "Sensitive skin friendly", "Silky touch", "FSC approved"],
      specs: { "Product": "COMMERCIAL FACIAL TISSUE", "Material": "Virgin bamboo pulp", "GSM": "15gsm", "Layer": "2ply", "Sheet size": "200*204mm", "Sheets": "80 sheets (160pcs)", "Weight": "100g/pack", "Feature": "COMMERCIAL" }
    },
    {
      id: "8",
      title: "Ultra Soft Facial Tissue",
      img: "/images/ultra-soft-facial-tissue.jpg",
      features: ["Portable pack", "Super soft for baby care", "Biodegradable", "High water absorbent"],
      specs: { "Product": "ULTRA SOFT FACIAL TISSUE", "Material": "Virgin wood pulp", "GSM": "12.5gsm", "Layer": "3ply", "Sheet size": "188*190mm", "Sheets": "190 sheets (570pcs)", "Weight": "260g/pack", "Feature": "Super soft" }
    },
    {
      id: "9",
      title: "Ultra Soft Toilet Paper",
      img: "/images/ultra-soft-toilet-paper.jpg",
      features: ["Eco friendly 100% bamboo", "Biodegradable", "Water soluble", "Plastic free"],
      specs: { "Product": "ULTRA SOFT TOILET PAPER", "Material": "Virgin wood pulp", "GSM": "14.5gsm", "Layer": "4ply", "Sheet size": "101*115mm", "Sheets": "240sheets", "Weight": "170g/roll", "Feature": "Super soft" }
    },
    {
      id: "10",
      title: "2ply Mini Jumbo Toilet Roll",
      img: "/images/2ply-mini-jumbo-toilet-roll.jpg",
      features: ["Bamboo toilet paper", "Water soluble", "Biodegradable"],
      specs: { "Product": "2PLY MINI JUMBO TOILET ROLL", "Material": "Virgin mix pulp", "GSM": "19gsm", "Layer": "2ply", "Length": "183m", "Roll diameter": "230mm", "Weight": "750g/roll" }
    },
    {
      id: "29",
      title: "Toilet Paper",
      img: "/images/toilet-paper.jpg",
      features: ["Eco friendly 100% bamboo", "Silky touch", "Water soluble", "Responsible Forestry"],
      specs: { "Product": "TOILET PAPER", "Material": "Virgin bamboo pulp", "GSM": "14.5gsm", "Layer": "3ply", "Sheets": "240 sheets", "Weight": "140g/roll", "Feature": "Environmental protection" }
    },
    {
      id: "30",
      title: "Bamboo Dissolvable Toilet Paper",
      img: "/images/virgin-dissolvable-toilet-paper.jpg",
      features: ["Eco friendly 100% bamboo", "Water soluble", "Plastic free", "Butterflies embossed"],
      specs: { "Product": "Bamboo Dissolvable Toilet Paper", "Material": "Virgin bamboo pulp", "GSM": "14.5gsm", "Layer": "3ply", "Sheet size": "101*120mm", "Sheets": "220 sheets", "Weight": "120g/roll", "Feature": "DISSOLVABLE" }
    }
  ],
  virgin: [
    // 之前没有详细数据的 Virgin 产品暂时保留 ID 18 的精准数据
    {
      id: "18",
      title: "Virgin Dissolvable Toilet Paper",
      img: "/images/virgin-dissolvable-toilet-paper.jpg",
      features: ["100% Virgin toilet paper", "Water soluble", "Biodegradable", "Silky touch"],
      specs: { "Product": "Virgin DISSOLVABLE TOILET PAPER", "Material": "Virgin bamboo pulp", "GSM": "14.5gsm", "Layer": "3ply", "Sheets": "220 sheets", "Weight": "120g/roll", "Feature": "DISSOLVABLE" }
    },
    // ID 11-17 建议按需后续补充
  ],
  recycle: [
    {
      id: "23",
      title: "Recycle Dissolvable Toilet Paper",
      img: "/images/virgin-dissolvable-toilet-paper.jpg",
      features: ["100% Recycle toilet paper", "Water soluble", "Eco friendly"],
      specs: { "Product": "Recycle DISSOLVABLE TOILET PAPER", "Material": "Recycle pulp", "GSM": "14.5gsm", "Layer": "3ply", "Sheets": "220 sheets", "Weight": "120g/roll", "Feature": "DISSOLVABLE" }
    }
  ],
  mixed: [
    {
      id: "28",
      title: "Mixed Dissolvable Toilet Paper",
      img: "/images/virgin-dissolvable-toilet-paper.jpg",
      features: ["100% Mixed toilet paper", "Water soluble", "Silky touch"],
      specs: { "Product": "Mixed DISSOLVABLE TOILET PAPER", "Material": "Mixed pulp", "GSM": "14.5gsm", "Layer": "3ply", "Sheets": "220 sheets", "Weight": "120g/roll", "Feature": "DISSOLVABLE" }
    }
  ]
};