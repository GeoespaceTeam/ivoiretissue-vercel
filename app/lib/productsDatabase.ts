// // 模拟数据库数据保持不变...
// const productsDatabase = {
//   bamboo: [
//     {
//       id: "1",
//       title: "V-fold hand Paper Towel",
//       img: "/images/v-fold-hand-paper-towel.jpg",
//     },
//     {
//       id: "2",
//       title: "Hand Paper Towel",
//       img: "/images/hand-paper-towel.jpg",
//     },
//     {
//       id: "3",
//       title: "Lunch Napkins",
//       img: "/images/lunch-napkins.jpg",
//     },
//     {
//       id: "4",
//       title: "V-fold Kitchen Paper",
//       img: "/images/v-fold-kitchen-paper.jpg",
//     },
//     {
//       id: "5",
//       title: "Ample Kitchen Roll",
//       img: "/images/ample-kitchen-roll.jpg",
//     },
//     {
//       id: "6",
//       title: "Plastic Free Kitchen Paper Towel",
//       img: "/images/plastic-free-kitchen-paper-towel.jpg",
//     },
//     {
//       id: "7",
//       title: "Commercial Facial Tissue",
//       img: "/images/commercial-facial-tissue.jpg",
//     },
//     {
//       id: "8",
//       title: "Ultra Soft Facial Tissue",
//       img: "/images/ultra-soft-facial-tissue.jpg",
//     },
//     {
//       id: "9",
//       title: "Ultra Soft Toilet Paper",
//       img: "/images/ultra-soft-toilet-paper.jpg",
//     },
//     {
//       id: "10",
//       title: "2ply Mini Jumbo Toilet Roll",
//       img: "/images/2ply-mini-jumbo-toilet-roll.jpg",
//     },
//     // 👇 这是从第二页挪过来的两个新商品 👇
//     { id: "29", title: "Toilet Paper", img: "/images/toilet-paper.jpg" },
//     {
//       id: "30",
//       title: "Bamboo Dissolvable Toilet Paper",
//       img: "/images/virgin-dissolvable-toilet-paper.jpg",
//     },
//   ],
//   virgin: [
//     {
//       id: "11",
//       title: "V-fold hand Paper Towel",
//       img: "/images/v-fold-hand-paper-towel.jpg",
//     },
//     {
//       id: "12",
//       title: "Hand Paper Towel",
//       img: "/images/hand-paper-towel-1.jpg",
//     }, // 名字重复1
//     {
//       id: "13",
//       title: "Hand Paper Towel",
//       img: "/images/hand-paper-towel.jpg",
//     }, // 名字重复2
//     { id: "14", title: "Lunch Napkins", img: "/images/lunch-napkins.jpg" },
//     {
//       id: "15",
//       title: "Plastic Free Kitchen Paper Towel",
//       img: "/images/plastic-free-kitchen-paper-towel.jpg",
//     },
//     {
//       id: "16",
//       title: "Ultra Soft Facial Tissue",
//       img: "/images/ultra-soft-facial-tissue.jpg",
//     },
//     {
//       id: "17",
//       title: "2ply Mini Jumbo Toilet Roll",
//       img: "/images/2ply-mini-jumbo-toilet-roll.jpg",
//     },
//     {
//       id: "18",
//       title: "Virgin Dissolvable Toilet Paper",
//       img: "/images/virgin-dissolvable-toilet-paper.jpg",
//     },
//   ],
//   recycle: [
//     {
//       id: "19",
//       title: "V-fold hand Paper Towel",
//       img: "/images/v-fold-hand-paper-towel.jpg",
//     },
//     {
//       id: "20",
//       title: "Ample Kitchen Roll",
//       img: "/images/ample-kitchen-roll.jpg",
//     },
//     {
//       id: "21",
//       title: "Hand Paper Towel",
//       img: "/images/hand-paper-towel.jpg",
//     },
//     {
//       id: "22",
//       title: "2ply Mini Jumbo Toilet Roll",
//       img: "/images/2ply-mini-jumbo-toilet-roll.jpg",
//     },
//     {
//       id: "23",
//       title: "Recycle Dissolvable Toilet Paper",
//       img: "/images/virgin-dissolvable-toilet-paper.jpg",
//     },
//   ],
//   mixed: [
//     {
//       id: "24",
//       title: "V-fold hand Paper Towel",
//       img: "/images/v-fold-hand-paper-towel.jpg",
//     },
//     {
//       id: "25",
//       title: "Ample Kitchen Roll",
//       img: "/images/ample-kitchen-roll.jpg",
//     },
//     {
//       id: "26",
//       title: "Hand Paper Towel",
//       img: "/images/hand-paper-towel.jpg",
//     },
//     {
//       id: "27",
//       title: "2ply Mini Jumbo Toilet Roll",
//       img: "/images/2ply-mini-jumbo-toilet-roll.jpg",
//     },
//     {
//       id: "28",
//       title: "Mixed Dissolvable Toilet Paper",
//       img: "/images/virgin-dissolvable-toilet-paper.jpg",
//     },
//   ],
// };


// 统一的详情内容
const commonFeatures = [
  "Eco friendly 100% bamboo toilet paper.",
  "100% Bamboo toilet paper",
  "Biodegradable paper tissue",
  "Silky touch",
  "Brand Customize",
  "Water soluble",
  "Plastic free",
  "Responsible Forestry Certified",
];

const commonSpecs = {
  "Product": "Premium Paper Series",
  "Material": "Sustainable Virgin Pulp",
  "GSM": "14.5gsm",
  "Layer": "3ply",
  "Sheet size": "101*120mm(4'*4.8')",
  "Sheets": "220 sheets",
  "Weight": "120g/roll",
  "Feature": "DISSOLVABLE",
  "Certifications": "FSC, BSI, SGS",
};

export const productsDatabase: any = {
  bamboo: [
    { id: "1", title: "V-fold hand Paper Towel", img: "/images/v-fold-hand-paper-towel.jpg", features: commonFeatures, specs: commonSpecs },
    { id: "2", title: "Hand Paper Towel", img: "/images/hand-paper-towel.jpg", features: commonFeatures, specs: commonSpecs },
    { id: "3", title: "Lunch Napkins", img: "/images/lunch-napkins.jpg", features: commonFeatures, specs: commonSpecs },
    { id: "4", title: "V-fold Kitchen Paper", img: "/images/v-fold-kitchen-paper.jpg", features: commonFeatures, specs: commonSpecs },
    { id: "5", title: "Ample Kitchen Roll", img: "/images/ample-kitchen-roll.jpg", features: commonFeatures, specs: commonSpecs },
    { id: "6", title: "Plastic Free Kitchen Paper Towel", img: "/images/plastic-free-kitchen-paper-towel.jpg", features: commonFeatures, specs: commonSpecs },
    { id: "7", title: "Commercial Facial Tissue", img: "/images/commercial-facial-tissue.jpg", features: commonFeatures, specs: commonSpecs },
    { id: "8", title: "Ultra Soft Facial Tissue", img: "/images/ultra-soft-facial-tissue.jpg", features: commonFeatures, specs: commonSpecs },
    { id: "9", title: "Ultra Soft Toilet Paper", img: "/images/ultra-soft-toilet-paper.jpg", features: commonFeatures, specs: commonSpecs },
    { id: "10", title: "2ply Mini Jumbo Toilet Roll", img: "/images/2ply-mini-jumbo-toilet-roll.jpg", features: commonFeatures, specs: commonSpecs },
    { id: "29", title: "Toilet Paper", img: "/images/toilet-paper.jpg", features: commonFeatures, specs: commonSpecs },
    { id: "30", title: "Bamboo Dissolvable Toilet Paper", img: "/images/virgin-dissolvable-toilet-paper.jpg", features: commonFeatures, specs: commonSpecs },
  ],
  virgin: [
    { id: "11", title: "V-fold hand Paper Towel", img: "/images/v-fold-hand-paper-towel.jpg", features: commonFeatures, specs: commonSpecs },
    { id: "12", title: "Hand Paper Towel", img: "/images/hand-paper-towel-1.jpg", features: commonFeatures, specs: commonSpecs },
    { id: "13", title: "Hand Paper Towel", img: "/images/hand-paper-towel.jpg", features: commonFeatures, specs: commonSpecs },
    { id: "14", title: "Lunch Napkins", img: "/images/lunch-napkins.jpg", features: commonFeatures, specs: commonSpecs },
    { id: "15", title: "Plastic Free Kitchen Paper Towel", img: "/images/plastic-free-kitchen-paper-towel.jpg", features: commonFeatures, specs: commonSpecs },
    { id: "16", title: "Ultra Soft Facial Tissue", img: "/images/ultra-soft-facial-tissue.jpg", features: commonFeatures, specs: commonSpecs },
    { id: "17", title: "2ply Mini Jumbo Toilet Roll", img: "/images/2ply-mini-jumbo-toilet-roll.jpg", features: commonFeatures, specs: commonSpecs },
    { id: "18", title: "Virgin Dissolvable Toilet Paper", img: "/images/virgin-dissolvable-toilet-paper.jpg", features: commonFeatures, specs: commonSpecs },
  ],
  recycle: [
    { id: "19", title: "V-fold hand Paper Towel", img: "/images/v-fold-hand-paper-towel.jpg", features: commonFeatures, specs: commonSpecs },
    { id: "20", title: "Ample Kitchen Roll", img: "/images/ample-kitchen-roll.jpg", features: commonFeatures, specs: commonSpecs },
    { id: "21", title: "Hand Paper Towel", img: "/images/hand-paper-towel.jpg", features: commonFeatures, specs: commonSpecs },
    { id: "22", title: "2ply Mini Jumbo Toilet Roll", img: "/images/2ply-mini-jumbo-toilet-roll.jpg", features: commonFeatures, specs: commonSpecs },
    { id: "23", title: "Recycle Dissolvable Toilet Paper", img: "/images/virgin-dissolvable-toilet-paper.jpg", features: commonFeatures, specs: commonSpecs },
  ],
  mixed: [
    { id: "24", title: "V-fold hand Paper Towel", img: "/images/v-fold-hand-paper-towel.jpg", features: commonFeatures, specs: commonSpecs },
    { id: "25", title: "Ample Kitchen Roll", img: "/images/ample-kitchen-roll.jpg", features: commonFeatures, specs: commonSpecs },
    { id: "26", title: "Hand Paper Towel", img: "/images/hand-paper-towel.jpg", features: commonFeatures, specs: commonSpecs },
    { id: "27", title: "2ply Mini Jumbo Toilet Roll", img: "/images/2ply-mini-jumbo-toilet-roll.jpg", features: commonFeatures, specs: commonSpecs },
    { id: "28", title: "Mixed Dissolvable Toilet Paper", img: "/images/virgin-dissolvable-toilet-paper.jpg", features: commonFeatures, specs: commonSpecs },
  ],
};