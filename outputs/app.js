const STORAGE_KEY = "ss-autolight-pos";

const fallbackThumb = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='320' height='220' viewBox='0 0 320 220'%3E%3Crect width='320' height='220' fill='%23eef3f6'/%3E%3Cpath d='M57 139h206l-29-58H86z' fill='%230f766e'/%3E%3Ccircle cx='109' cy='147' r='18' fill='%2317252f'/%3E%3Ccircle cx='220' cy='147' r='18' fill='%2317252f'/%3E%3Cpath d='M92 81h83l22 32H76z' fill='%23f2b705'/%3E%3Ctext x='160' y='50' text-anchor='middle' font-family='Arial' font-size='24' font-weight='700' fill='%2317252f'%3ESS Autolight%3C/text%3E%3C/svg%3E";

const seedData = {
  user: null,
  warehouses: [
    { id: "wh-utama", code: "GD-UTM", name: "Gudang Utama" },
    { id: "wh-cabang", code: "GD-CBG", name: "Gudang Cabang" }
  ],
  suppliers: [
    { id: "sup-shopee", code: "SUP-SHP", name: "Shopee" },
    { id: "sup-bullaes", code: "SUP-BUL", name: "BullAES" },
    { id: "sup-china", code: "SUP-CHN", name: "Import dari China" },
    { id: "sup-lain", code: "SUP-OTH", name: "Lainnya" }
  ],
  categories: [
    { id: "cat-led", code: "KT-LED", name: "LED Headlamp" },
    { id: "cat-projector", code: "KT-PRJ", name: "Projector" },
    { id: "cat-drl", code: "KT-DRL", name: "DRL" },
    { id: "cat-accessory", code: "KT-AKS", name: "Aksesoris" }
  ],
  customerTypes: [
    { id: "ctype-reseller-1", code: "JP-R1", name: "Reseller Kelas 1", priceKey: "price1" },
    { id: "ctype-online-shop", code: "JP-OS", name: "Online Shop/ Shopee", priceKey: "price2" },
    { id: "ctype-toko", code: "JP-TK", name: "Toko", priceKey: "price3" },
    { id: "ctype-reseller-2", code: "JP-R2", name: "Reseller Kelas 2", priceKey: "price4" }
  ],
  products: [
    { id: "prd-1", code: "LED-H4", name: "LED Headlamp H4 80W", thumbnail: fallbackThumb, supplierId: "sup-shopee", categoryId: "cat-led", warehouseId: "wh-utama", cost: 320000, price1: 450000, price2: 425000, price3: 400000, price4: 380000, stock: 12, minStock: 3 },
    { id: "prd-2", code: "PRJ-25", name: "Projector Bi-LED 2.5 inch", thumbnail: fallbackThumb, supplierId: "sup-bullaes", categoryId: "cat-projector", warehouseId: "wh-utama", cost: 900000, price1: 1250000, price2: 1180000, price3: 1100000, price4: 1050000, stock: 5, minStock: 2 },
    { id: "prd-3", code: "DRL-AQ", name: "DRL Acrylic Custom", thumbnail: fallbackThumb, supplierId: "sup-lain", categoryId: "cat-drl", warehouseId: "wh-utama", cost: 210000, price1: 350000, price2: 330000, price3: 315000, price4: 300000, stock: 8, minStock: 2 },
    { id: "prd-4", code: "FGL-YLW", name: "Foglamp Yellow Lens", thumbnail: fallbackThumb, supplierId: "sup-shopee", categoryId: "cat-led", warehouseId: "wh-cabang", cost: 470000, price1: 650000, price2: 620000, price3: 590000, price4: 560000, stock: 4, minStock: 2 },
    { id: "prd-5", code: "ANG-RGB", name: "Angel Eyes RGB", thumbnail: fallbackThumb, supplierId: "sup-lain", categoryId: "cat-drl", warehouseId: "wh-cabang", cost: 160000, price1: 275000, price2: 255000, price3: 240000, price4: 225000, stock: 2, minStock: 3 },
    { id: "prd-6", code: "WRP-HAR", name: "Wiring Harness Relay", thumbnail: fallbackThumb, supplierId: "sup-lain", categoryId: "cat-accessory", warehouseId: "wh-utama", cost: 70000, price1: 125000, price2: 115000, price3: 105000, price4: 95000, stock: 18, minStock: 5 },
    { id: "prd-7", code: "SEAL-BT", name: "Sealant Butyl Lampu", thumbnail: fallbackThumb, supplierId: "sup-china", categoryId: "cat-accessory", warehouseId: "wh-cabang", cost: 52000, price1: 95000, price2: 88000, price3: 80000, price4: 75000, stock: 9, minStock: 4 },
    { id: "prd-8", code: "CAN-H11", name: "Canbus Decoder H11", thumbnail: fallbackThumb, supplierId: "sup-bullaes", categoryId: "cat-accessory", warehouseId: "wh-utama", cost: 115000, price1: 180000, price2: 168000, price3: 155000, price4: 145000, stock: 7, minStock: 3 }
  ],
  transactions: [
    {
      id: "trx-1",
      invoice: "SSA-20260616-001",
      date: new Date().toISOString(),
      customer: "Pak Reza",
      customerType: "Toko",
      cashier: "Kasir",
      payment: "QRIS",
      status: "Paid",
      serviceFee: 450000,
      discount: 50000,
      items: [
        { type: "product", productId: "prd-2", code: "PRJ-25", name: "Projector Bi-LED 2.5 inch", thumbnail: fallbackThumb, price: 1250000, qty: 1 }
      ]
    },
    {
      id: "trx-2",
      invoice: "SSA-20260616-002",
      date: new Date().toISOString(),
      customer: "Bu Lina",
      customerType: "Online",
      cashier: "Owner",
      payment: "Tunai",
      status: "Paid",
      serviceFee: 100000,
      discount: 0,
      items: [
        { type: "product", productId: "prd-1", code: "LED-H4", name: "LED Headlamp H4 80W", thumbnail: fallbackThumb, price: 450000, qty: 1 }
      ]
    }
  ],
  customers: [
    { id: "cust-reza", name: "Pak Reza", type: "Toko", transactionCount: 1, totalSpend: 1650000, lastTransaction: new Date().toISOString() },
    { id: "cust-lina", name: "Bu Lina", type: "Online Shop/ Shopee", transactionCount: 1, totalSpend: 550000, lastTransaction: new Date().toISOString() },
    { id: "cust-robi", name: "Robi Motor", type: "Toko", transactionCount: 0, totalSpend: 0, lastTransaction: null },
    { id: "cust-rori", name: "Bengkel Rori Motor", type: "Reseller Kelas 1", transactionCount: 0, totalSpend: 0, lastTransaction: null },
    { id: "cust-maros", name: "Maros Motor", type: "Online Shop/ Shopee", transactionCount: 0, totalSpend: 0, lastTransaction: null }
  ],
  expenses: [
    { id: "exp-1", date: new Date().toISOString(), category: "Biaya Listrik", description: "Token listrik workshop", amount: 350000 },
    { id: "exp-2", date: new Date().toISOString(), category: "Belanja Barang", description: "Belanja stok LED Headlamp H4", amount: 1280000 },
    { id: "exp-3", date: new Date().toISOString(), category: "Pajak/Beacukai", description: "Beacukai barang import", amount: 500000 }
  ],
  settings: {
    receiptPrinter: "browser",
    barcodePrinter: "roll-76x30",
    reportPrinter: "browser",
    scannerMode: "enter",
    scannerPrefix: ""
  }
};

let state = normalizeState(loadState());
let cart = [];
let lastReceipt = null;
let currentCustomerTypeName = null;
let currentReportMode = "detail";
let currentExpenseReportMode = "detail";
let barcodeScanTimer = null;
let dashboardSalesChart = null;

const money = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  maximumFractionDigits: 0
});

const els = {
  body: document.body,
  loginScreen: document.querySelector("#loginScreen"),
  appShell: document.querySelector("#appShell"),
  sidebar: document.querySelector("#sidebar"),
  sidebarBackdrop: document.querySelector("#sidebarBackdrop"),
  mobileMenuBtn: document.querySelector("#mobileMenuBtn"),
  loginForm: document.querySelector("#loginForm"),
  roleSelect: document.querySelector("#roleSelect"),
  pinInput: document.querySelector("#pinInput"),
  currentUser: document.querySelector("#currentUser"),
  pageTitle: document.querySelector("#pageTitle"),
  logoutBtn: document.querySelector("#logoutBtn"),
  navItems: document.querySelectorAll(".nav-item"),
  views: document.querySelectorAll(".view"),
  managerOnly: document.querySelectorAll(".manager-only"),
  costOnly: document.querySelectorAll(".cost-only, .cost-field"),
  todayRevenue: document.querySelector("#todayRevenue"),
  lowStockCount: document.querySelector("#lowStockCount"),
  totalStock: document.querySelector("#totalStock"),
  recentTransactions: document.querySelector("#recentTransactions"),
  dashboardMonthInput: document.querySelector("#dashboardMonthInput"),
  dashboardChartCaption: document.querySelector("#dashboardChartCaption"),
  dashboardSalesChart: document.querySelector("#dashboardSalesChart"),
  inventoryWarehouseFilter: document.querySelector("#inventoryWarehouseFilter"),
  inventoryTable: document.querySelector("#inventoryTable"),
  warehouseForm: document.querySelector("#warehouseForm"),
  warehouseIdInput: document.querySelector("#warehouseIdInput"),
  warehouseNameInput: document.querySelector("#warehouseNameInput"),
  brandForm: document.querySelector("#brandForm"),
  brandNameInput: document.querySelector("#brandNameInput"),
  brandList: document.querySelector("#brandList"),
  masterBrandForm: document.querySelector("#masterBrandForm"),
  masterBrandCodeInput: document.querySelector("#masterBrandCodeInput"),
  masterBrandNameInput: document.querySelector("#masterBrandNameInput"),
  masterBrandGrid: document.querySelector("#masterBrandGrid"),
  categoryForm: document.querySelector("#categoryForm"),
  categoryNameInput: document.querySelector("#categoryNameInput"),
  categoryList: document.querySelector("#categoryList"),
  masterCategoryForm: document.querySelector("#masterCategoryForm"),
  masterCategoryCodeInput: document.querySelector("#masterCategoryCodeInput"),
  masterCategoryNameInput: document.querySelector("#masterCategoryNameInput"),
  masterCategoryGrid: document.querySelector("#masterCategoryGrid"),
  masterWarehouseForm: document.querySelector("#masterWarehouseForm"),
  masterWarehouseCodeInput: document.querySelector("#masterWarehouseCodeInput"),
  masterWarehouseNameInput: document.querySelector("#masterWarehouseNameInput"),
  masterWarehouseGrid: document.querySelector("#masterWarehouseGrid"),
  masterCustomerTypeForm: document.querySelector("#masterCustomerTypeForm"),
  masterCustomerTypeCodeInput: document.querySelector("#masterCustomerTypeCodeInput"),
  masterCustomerTypeNameInput: document.querySelector("#masterCustomerTypeNameInput"),
  masterCustomerTypePriceInput: document.querySelector("#masterCustomerTypePriceInput"),
  masterCustomerTypeGrid: document.querySelector("#masterCustomerTypeGrid"),
  customerSearchInput: document.querySelector("#customerSearchInput"),
  customerTypeFilter: document.querySelector("#customerTypeFilter"),
  customerCount: document.querySelector("#customerCount"),
  customerRevenue: document.querySelector("#customerRevenue"),
  customerTable: document.querySelector("#customerTable"),
  productForm: document.querySelector("#productForm"),
  productModalTitle: document.querySelector("#productModalTitle"),
  productIdInput: document.querySelector("#productIdInput"),
  productWarehouseInput: document.querySelector("#productWarehouseInput"),
  productBrandInput: document.querySelector("#productBrandInput"),
  productCategoryInput: document.querySelector("#productCategoryInput"),
  productThumbnailInput: document.querySelector("#productThumbnailInput"),
  productThumbnailDataInput: document.querySelector("#productThumbnailDataInput"),
  thumbnailDropzone: document.querySelector("#thumbnailDropzone"),
  thumbnailPreview: document.querySelector("#thumbnailPreview"),
  productPrice2Input: document.querySelector("#productPrice2Input"),
  productPrice3Input: document.querySelector("#productPrice3Input"),
  productPrice4Input: document.querySelector("#productPrice4Input"),
  productProfit1Input: document.querySelector("#productProfit1Input"),
  productProfit2Input: document.querySelector("#productProfit2Input"),
  productProfit3Input: document.querySelector("#productProfit3Input"),
  productProfit4Input: document.querySelector("#productProfit4Input"),
  stockForm: document.querySelector("#stockForm"),
  stockProductInput: document.querySelector("#stockProductInput"),
  stockProductInfo: document.querySelector("#stockProductInfo"),
  stockQtyInput: document.querySelector("#stockQtyInput"),
  stockCostInput: document.querySelector("#stockCostInput"),
  stockPrice1Input: document.querySelector("#stockPrice1Input"),
  stockPrice2Input: document.querySelector("#stockPrice2Input"),
  stockPrice3Input: document.querySelector("#stockPrice3Input"),
  stockPrice4Input: document.querySelector("#stockPrice4Input"),
  stockProfit1Input: document.querySelector("#stockProfit1Input"),
  stockProfit2Input: document.querySelector("#stockProfit2Input"),
  stockProfit3Input: document.querySelector("#stockProfit3Input"),
  stockProfit4Input: document.querySelector("#stockProfit4Input"),
  stockNoteInput: document.querySelector("#stockNoteInput"),
  expenseForm: document.querySelector("#expenseForm"),
  expenseDateInput: document.querySelector("#expenseDateInput"),
  expenseCategoryInput: document.querySelector("#expenseCategoryInput"),
  expenseDescriptionInput: document.querySelector("#expenseDescriptionInput"),
  expenseAmountInput: document.querySelector("#expenseAmountInput"),
  expenseTotal: document.querySelector("#expenseTotal"),
  expenseStockTotal: document.querySelector("#expenseStockTotal"),
  netCashflow: document.querySelector("#netCashflow"),
  expenseTable: document.querySelector("#expenseTable"),
  productCardGrid: document.querySelector("#productCardGrid"),
  productSearchInput: document.querySelector("#productSearchInput"),
  transactionCategoryFilter: document.querySelector("#transactionCategoryFilter"),
  barcodeScanInput: document.querySelector("#barcodeScanInput"),
  barcodeScanBtn: document.querySelector("#barcodeScanBtn"),
  cartTable: document.querySelector("#cartTable"),
  checkoutPanel: document.querySelector(".checkout-panel"),
  checkoutDrawerToggle: document.querySelector("#checkoutDrawerToggle"),
  checkoutDrawerClose: document.querySelector("#checkoutDrawerClose"),
  mobileCheckoutTotal: document.querySelector("#mobileCheckoutTotal"),
  productSubtotal: document.querySelector("#productSubtotal"),
  servicePriceInput: document.querySelector("#servicePriceInput"),
  discountInput: document.querySelector("#discountInput"),
  grandTotal: document.querySelector("#grandTotal"),
  payTransactionBtn: document.querySelector("#payTransactionBtn"),
  holdTransactionBtn: document.querySelector("#holdTransactionBtn"),
  cancelTransactionBtn: document.querySelector("#cancelTransactionBtn"),
  printReceiptBtn: document.querySelector("#printReceiptBtn"),
  modalPrintReceiptBtn: document.querySelector("#modalPrintReceiptBtn"),
  receiptArea: document.querySelector("#receiptArea"),
  barcodeArea: document.querySelector("#barcodeArea"),
  invoiceNumber: document.querySelector("#invoiceNumber"),
  customerName: document.querySelector("#customerName"),
  customerSuggestions: document.querySelector("#customerSuggestions"),
  customerSuggestionPanel: document.querySelector("#customerSuggestionPanel"),
  customerType: document.querySelector("#customerType"),
  dateFrom: document.querySelector("#dateFrom"),
  dateTo: document.querySelector("#dateTo"),
  reportStatusFilter: document.querySelector("#reportStatusFilter"),
  reportSaleFilter: document.querySelector("#reportSaleFilter"),
  reportWarehouseFilter: document.querySelector("#reportWarehouseFilter"),
  printReportBtn: document.querySelector("#printReportBtn"),
  resetReportFilter: document.querySelector("#resetReportFilter"),
  reportRevenue: document.querySelector("#reportRevenue"),
  reportCount: document.querySelector("#reportCount"),
  reportService: document.querySelector("#reportService"),
  reportItemQty: document.querySelector("#reportItemQty"),
  reportTabs: document.querySelectorAll("[data-report-mode]"),
  reportTableHead: document.querySelector("#reportTableHead"),
  reportTable: document.querySelector("#reportTable"),
  expenseReportDateFrom: document.querySelector("#expenseReportDateFrom"),
  expenseReportDateTo: document.querySelector("#expenseReportDateTo"),
  expenseReportCategoryFilter: document.querySelector("#expenseReportCategoryFilter"),
  printExpenseReportBtn: document.querySelector("#printExpenseReportBtn"),
  resetExpenseReportFilter: document.querySelector("#resetExpenseReportFilter"),
  expenseReportTotal: document.querySelector("#expenseReportTotal"),
  expenseReportCount: document.querySelector("#expenseReportCount"),
  expenseReportCategoryCount: document.querySelector("#expenseReportCategoryCount"),
  expenseReportAverage: document.querySelector("#expenseReportAverage"),
  expenseReportTabs: document.querySelectorAll("[data-expense-report-mode]"),
  expenseReportTableHead: document.querySelector("#expenseReportTableHead"),
  expenseReportTable: document.querySelector("#expenseReportTable"),
  settingsForm: document.querySelector("#settingsForm"),
  receiptPrinterInput: document.querySelector("#receiptPrinterInput"),
  barcodePrinterInput: document.querySelector("#barcodePrinterInput"),
  reportPrinterInput: document.querySelector("#reportPrinterInput"),
  scannerModeInput: document.querySelector("#scannerModeInput"),
  scannerPrefixInput: document.querySelector("#scannerPrefixInput"),
  settingsStatus: document.querySelector("#settingsStatus"),
  paymentSuccessModal: document.querySelector("#paymentSuccessModal")
};

function loadState() {
  const saved = localStorage.getItem(STORAGE_KEY);
  return saved ? JSON.parse(saved) : structuredClone(seedData);
}

function normalizeState(rawState) {
  const normalized = {
    ...structuredClone(seedData),
    ...rawState
  };
  normalized.warehouses = (rawState.warehouses?.length ? rawState.warehouses : seedData.warehouses)
    .map((warehouse, index) => ({ ...warehouse, code: warehouse.code || `GD-${String(index + 1).padStart(3, "0")}` }));
  normalized.suppliers = (rawState.suppliers?.length ? rawState.suppliers : rawState.brands?.length ? rawState.brands : seedData.suppliers)
    .map((supplier, index) => ({ ...supplier, code: supplier.code || `SUP-${String(index + 1).padStart(3, "0")}` }));
  normalized.brands = normalized.suppliers;
  normalized.categories = (rawState.categories?.length ? rawState.categories : seedData.categories)
    .map((category, index) => ({ ...category, code: category.code || `KT-${String(index + 1).padStart(3, "0")}` }));
  normalized.customerTypes = (rawState.customerTypes?.length ? rawState.customerTypes : seedData.customerTypes)
    .map((type, index) => ({
      ...type,
      code: type.code || `JP-${String(index + 1).padStart(3, "0")}`,
      priceKey: type.priceKey || ["price1", "price2", "price3", "price4"][index % 4]
    }));
  const normalizeCustomerTypeName = (name) => {
    if (normalized.customerTypes.some((type) => type.name === name)) return name;
    const onlineType = normalized.customerTypes.find((type) => type.name.toLowerCase().includes("online"));
    if (name === "Online" && onlineType) return onlineType.name;
    return name || normalized.customerTypes[0]?.name || "Online";
  };
  normalized.transactions = rawState.transactions || [];
  normalized.products = (rawState.products || seedData.products).map((product, index) => {
    const basePrice = Number(product.price1 ?? product.price ?? 0);
    return {
      ...product,
      thumbnail: product.thumbnail || fallbackThumb,
      supplierId: product.supplierId || product.brandId || normalized.suppliers[index % normalized.suppliers.length]?.id,
      brandId: product.supplierId || product.brandId || normalized.suppliers[index % normalized.suppliers.length]?.id,
      categoryId: product.categoryId || normalized.categories[index % normalized.categories.length]?.id,
      cost: Number(product.cost ?? Math.round(Number(product.price || basePrice) * 0.7)),
      price1: basePrice,
      price2: Number(product.price2 ?? Math.round(basePrice * 0.95)),
      price3: Number(product.price3 ?? Math.round(basePrice * 0.9)),
      price4: Number(product.price4 ?? Math.round(basePrice * 0.85)),
      price: basePrice,
      stock: Number(product.stock || 0),
      minStock: Number(product.minStock || 0)
    };
  });
  const productsById = new Map(normalized.products.map((product) => [product.id, product]));
  normalized.transactions = normalized.transactions.map((transaction) => ({
    ...transaction,
    customerType: normalizeCustomerTypeName(transaction.customerType),
    status: transaction.status || "Paid",
    serviceFee: Number(transaction.serviceFee ?? serviceTotalFromItems(transaction)),
    discount: Number(transaction.discount || 0),
    items: (transaction.items || [])
      .filter((item) => item.type !== "service")
      .map((item) => ({
        ...item,
        thumbnail: item.thumbnail || fallbackThumb,
        code: item.code || productsById.get(item.productId)?.code || "-",
        warehouseId: item.warehouseId || productsById.get(item.productId)?.warehouseId || ""
      }))
  }));
  const customerSource = [...(rawState.customers?.length ? rawState.customers : seedData.customers)];
  seedData.customers.forEach((seedCustomer) => {
    if (!customerSource.some((customer) => customer.name.toLowerCase() === seedCustomer.name.toLowerCase())) {
      customerSource.push(seedCustomer);
    }
  });
  normalized.customers = mergeCustomers(customerSource.map((customer) => ({
    ...customer,
    type: normalizeCustomerTypeName(customer.type)
  })), normalized.transactions);
  normalized.expenses = (rawState.expenses || seedData.expenses).map((expense) => ({
    ...expense,
    amount: Number(expense.amount || 0),
    date: expense.date || new Date().toISOString()
  }));
  normalized.settings = {
    ...seedData.settings,
    ...(rawState.settings || {})
  };
  return normalized;
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function formatMoney(value) {
  return money.format(Number(value || 0));
}

function formatShortMoney(value) {
  const number = Number(value || 0);
  if (number >= 1000000000) return `Rp${(number / 1000000000).toLocaleString("id-ID", { maximumFractionDigits: 1 })} M`;
  if (number >= 1000000) return `Rp${(number / 1000000).toLocaleString("id-ID", { maximumFractionDigits: 1 })} jt`;
  if (number >= 1000) return `Rp${(number / 1000).toLocaleString("id-ID", { maximumFractionDigits: 0 })} rb`;
  return formatMoney(number);
}

function canManageCost() {
  return state.user === "Super Admin" || state.user === "Owner";
}

function warehouseName(id) {
  return state.warehouses.find((warehouse) => warehouse.id === id)?.name || "Gudang tidak dikenal";
}

function brandName(id) {
  return state.suppliers.find((supplier) => supplier.id === id)?.name || "Tanpa supplier";
}

function categoryName(id) {
  return state.categories.find((category) => category.id === id)?.name || "Tanpa kategori";
}

function priceLabel(priceKey) {
  return {
    price1: "Harga Jual 1",
    price2: "Harga Jual 2",
    price3: "Harga Jual 3",
    price4: "Harga Jual 4"
  }[priceKey] || "Harga Jual 1";
}

function customerTypeByName(name) {
  return state.customerTypes.find((type) => type.name === name) || state.customerTypes[0];
}

function selectedCustomerTypeName() {
  const isValidType = (name) => state.customerTypes.some((type) => type.name === name);
  if (window.jQuery?.fn?.select2) {
    const select2Value = window.jQuery(els.customerType).val();
    if (isValidType(select2Value)) {
      currentCustomerTypeName = select2Value;
      return select2Value;
    }
  }
  if (isValidType(els.customerType.value)) {
    currentCustomerTypeName = els.customerType.value;
    return els.customerType.value;
  }
  if (isValidType(currentCustomerTypeName)) return currentCustomerTypeName;
  currentCustomerTypeName = state.customerTypes[0]?.name || "";
  return currentCustomerTypeName;
}

function selectedCustomerType() {
  return customerTypeByName(selectedCustomerTypeName());
}

function priceForCustomer(product, type = selectedCustomerType()) {
  const key = type?.priceKey || "price1";
  return Number(product[key] ?? product.price1 ?? product.price ?? 0);
}

function formatLabelPrice(value) {
  return formatMoney(value).replace("Rp", "Rp ");
}

function slugify(value) {
  return value.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") || crypto.randomUUID();
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#39;"
  }[char]));
}

function productById(id) {
  return state.products.find((product) => product.id === id);
}

function productHasTransactions(productId) {
  return state.transactions.some((transaction) => (transaction.items || [])
    .some((item) => item.productId === productId));
}

function serviceTotalFromItems(transaction) {
  return (transaction.items || [])
    .filter((item) => item.type === "service")
    .reduce((sum, item) => sum + item.price * item.qty, 0);
}

function transactionProductSubtotal(transaction) {
  return transaction.items.reduce((sum, item) => sum + item.price * item.qty, 0);
}

function transactionTotal(transaction) {
  return transactionProductSubtotal(transaction) + Number(transaction.serviceFee || 0) - Number(transaction.discount || 0);
}

function paidRevenue(transactions = state.transactions) {
  return transactions
    .filter((transaction) => transaction.status === "Paid")
    .reduce((sum, transaction) => sum + transactionTotal(transaction), 0);
}

const priceProfitBindings = {
  product: {
    cost: () => Number(document.querySelector("#productCostInput").value || 0),
    prices: () => [
      document.querySelector("#productPriceInput"),
      els.productPrice2Input,
      els.productPrice3Input,
      els.productPrice4Input
    ],
    profits: () => [
      els.productProfit1Input,
      els.productProfit2Input,
      els.productProfit3Input,
      els.productProfit4Input
    ]
  },
  stock: {
    cost: () => Number(els.stockCostInput.value || 0),
    prices: () => [
      els.stockPrice1Input,
      els.stockPrice2Input,
      els.stockPrice3Input,
      els.stockPrice4Input
    ],
    profits: () => [
      els.stockProfit1Input,
      els.stockProfit2Input,
      els.stockProfit3Input,
      els.stockProfit4Input
    ]
  }
};

function profitPercent(cost, price) {
  if (!cost || cost <= 0 || !price) return "";
  const percent = ((Number(price) - cost) / cost) * 100;
  return Number.isFinite(percent) ? Number(percent.toFixed(2)) : "";
}

function priceFromProfit(cost, percent) {
  if (!cost || cost <= 0 || percent === "") return "";
  return Math.round(cost * (1 + Number(percent) / 100));
}

function syncProfitFromPrices(group) {
  const binding = priceProfitBindings[group];
  const cost = binding.cost();
  const prices = binding.prices();
  const profits = binding.profits();
  prices.forEach((priceInput, index) => {
    profits[index].value = profitPercent(cost, Number(priceInput.value || 0));
  });
}

function syncPriceFromProfit(group, index) {
  const binding = priceProfitBindings[group];
  const cost = binding.cost();
  const price = priceFromProfit(cost, binding.profits()[index].value);
  if (price !== "") binding.prices()[index].value = price;
}

function syncPricesFromProfits(group) {
  const binding = priceProfitBindings[group];
  binding.profits().forEach((profitInput, index) => {
    if (profitInput.value !== "") syncPriceFromProfit(group, index);
  });
  syncProfitFromPrices(group);
}

function wirePriceProfitSync(group) {
  const binding = priceProfitBindings[group];
  binding.prices().forEach((priceInput) => {
    priceInput.addEventListener("input", () => syncProfitFromPrices(group));
  });
  binding.profits().forEach((profitInput, index) => {
    profitInput.addEventListener("input", () => {
      syncPriceFromProfit(group, index);
      syncProfitFromPrices(group);
    });
  });
}

function mergeCustomers(existingCustomers, transactions) {
  const customerMap = new Map();
  existingCustomers.forEach((customer) => {
    customerMap.set(customer.name.toLowerCase(), {
      id: customer.id || `cust-${slugify(customer.name)}`,
      name: customer.name,
      type: customer.type || "Online",
      transactionCount: 0,
      totalSpend: 0,
      lastTransaction: customer.lastTransaction || null
    });
  });

  transactions.forEach((transaction) => {
    const name = transaction.customer || "Pelanggan umum";
    const key = name.toLowerCase();
    const current = customerMap.get(key) || {
      id: `cust-${slugify(name)}`,
      name,
      type: transaction.customerType || "Online",
      transactionCount: 0,
      totalSpend: 0,
      lastTransaction: null
    };
    current.type = transaction.customerType || current.type;
    current.transactionCount += 1;
    current.totalSpend += transactionTotal(transaction);
    if (!current.lastTransaction || new Date(transaction.date) > new Date(current.lastTransaction)) {
      current.lastTransaction = transaction.date;
    }
    customerMap.set(key, current);
  });

  return [...customerMap.values()];
}

function todayKey(date = new Date()) {
  return date.toISOString().slice(0, 10);
}

function nextInvoice() {
  const datePart = todayKey().replaceAll("-", "");
  const todayCount = state.transactions.filter((transaction) => transaction.invoice.includes(datePart)).length + 1;
  return `SSA-${datePart}-${String(todayCount).padStart(3, "0")}`;
}

function setCurrentInvoice() {
  els.invoiceNumber.textContent = nextInvoice();
}

function stockStatus(product) {
  if (product.stock <= 0) return { label: "Habis", className: "text-bg-danger" };
  if (product.stock <= product.minStock) return { label: "Menipis", className: "text-bg-warning" };
  return { label: "Aman", className: "text-bg-success" };
}

function renderAll() {
  updateRoleAccess();
  renderWarehouseOptions();
  renderMasterLists();
  renderMasterPages();
  renderStockOptions();
  initSearchableSelects();
  renderExpenses();
  renderCustomers();
  renderSettings();
  renderCustomerSuggestions();
  renderDashboard();
  renderInventory();
  renderProductCards();
  renderCart();
  renderReports();
  renderExpenseReports();
  setCurrentInvoice();
}

function updateRoleAccess() {
  const canManage = canManageCost();
  document.querySelectorAll(".manager-only").forEach((element) => element.classList.toggle("d-none", !canManage));
  document.querySelectorAll(".cost-only, .cost-field").forEach((element) => element.classList.toggle("d-none", !canManage));
}

function renderWarehouseOptions() {
  const warehouseOptions = state.warehouses.map((warehouse) => `<option value="${warehouse.id}">${warehouse.name}</option>`).join("");
  const brandOptions = state.suppliers.map((supplier) => `<option value="${supplier.id}">${supplier.name}</option>`).join("");
  const categoryOptions = state.categories.map((category) => `<option value="${category.id}">${category.name}</option>`).join("");
  els.inventoryWarehouseFilter.innerHTML = `<option value="all">Semua Gudang</option>${warehouseOptions}`;
  els.productWarehouseInput.innerHTML = warehouseOptions;
  els.productBrandInput.innerHTML = `<option value=""></option>${brandOptions}`;
  els.productCategoryInput.innerHTML = `<option value=""></option>${categoryOptions}`;
  els.transactionCategoryFilter.innerHTML = `<option value="all">Semua Kategori</option>${categoryOptions}`;
  const previousReportWarehouse = els.reportWarehouseFilter.value || "all";
  els.reportWarehouseFilter.innerHTML = `<option value="all">Semua Gudang/Cabang</option>${warehouseOptions}`;
  els.reportWarehouseFilter.value = state.warehouses.some((warehouse) => warehouse.id === previousReportWarehouse)
    ? previousReportWarehouse
    : "all";
  const previousCustomerType = selectedCustomerTypeName();
  const previousCustomerTypeFilter = els.customerTypeFilter.value;
  const customerTypeOptions = state.customerTypes.map((type) => `<option value="${type.name}">${type.name} - ${priceLabel(type.priceKey)}</option>`).join("");
  els.customerType.innerHTML = customerTypeOptions;
  els.customerTypeFilter.innerHTML = `<option value="all">Semua Jenis</option>${customerTypeOptions}`;
  els.customerType.value = state.customerTypes.some((type) => type.name === previousCustomerType)
    ? previousCustomerType
    : state.customerTypes[0]?.name || "";
  currentCustomerTypeName = els.customerType.value;
  els.customerTypeFilter.value = previousCustomerTypeFilter || "all";
}

function renderStockOptions() {
  els.stockProductInput.innerHTML = `<option value="">-- Pilih Barang --</option>` + state.products
    .map((product) => `<option value="${product.id}">${product.code} - ${product.name}</option>`)
    .join("");
  if (window.jQuery?.fn?.select2) {
    window.jQuery(els.stockProductInput).val("").trigger("change.select2");
  }
  clearStockProductInfo();
}

function initSearchableSelects() {
  if (!window.jQuery?.fn?.select2) return;
  const $ = window.jQuery;
  [
    [els.productBrandInput, "Pilih Supplier", "#productModal", false],
    [els.productCategoryInput, "Pilih Kategori", "#productModal", false],
    [els.stockProductInput, "-- Pilih Barang --", "#stockModal", true],
    [els.customerType, "Pilih Jenis Pelanggan", null, false]
  ].forEach(([element, placeholder, modal, allowClear]) => {
    const select = $(element);
    if (!select.hasClass("select2-hidden-accessible")) {
      select.select2({
        allowClear,
        dropdownParent: modal ? $(modal) : undefined,
        placeholder,
        width: "100%"
      });
    }
    select.trigger("change.select2");
  });
  $(els.stockProductInput)
    .off("change.ssAutolightStock")
    .on("change.ssAutolightStock", updateStockProductInfo);
  $(els.customerType)
    .off("change.ssAutolightCustomerType")
    .off("select2:select.ssAutolightCustomerType")
    .on("change.ssAutolightCustomerType select2:select.ssAutolightCustomerType", handleCustomerTypeChange);
}

function updateStockProductInfo() {
  const product = productById(els.stockProductInput.value);
  if (!product) {
    clearStockProductInfo();
    return;
  }
  els.stockProductInfo.innerHTML = `
    <strong>${product.code} - ${product.name}</strong>
    <span>Supplier: ${brandName(product.brandId)} / Gudang: ${warehouseName(product.warehouseId)}</span>
    <span>Stok saat ini: ${product.stock} / Modal: ${formatMoney(product.cost)}</span>
  `;
  els.stockCostInput.value = product.cost;
  els.stockPrice1Input.value = product.price1;
  els.stockPrice2Input.value = product.price2;
  els.stockPrice3Input.value = product.price3;
  els.stockPrice4Input.value = product.price4;
  syncProfitFromPrices("stock");
}

function clearStockProductInfo() {
  els.stockProductInfo.textContent = "Pilih barang untuk melihat informasi stok dan supplier.";
  els.stockCostInput.value = "";
  els.stockQtyInput.value = "";
  els.stockPrice1Input.value = "";
  els.stockPrice2Input.value = "";
  els.stockPrice3Input.value = "";
  els.stockPrice4Input.value = "";
  els.stockProfit1Input.value = "";
  els.stockProfit2Input.value = "";
  els.stockProfit3Input.value = "";
  els.stockProfit4Input.value = "";
}

function resetStockForm() {
  els.stockForm.reset();
  if (window.jQuery?.fn?.select2) {
    window.jQuery(els.stockProductInput).val("").trigger("change");
  } else {
    els.stockProductInput.value = "";
  }
  clearStockProductInfo();
}

function renderExpenses() {
  if (!els.expenseDateInput.value) els.expenseDateInput.value = todayKey();
  const expenses = state.expenses.slice().sort((a, b) => new Date(b.date) - new Date(a.date));
  const totalExpense = expenses.reduce((sum, expense) => sum + Number(expense.amount || 0), 0);
  const stockExpense = expenses
    .filter((expense) => expense.category === "Belanja Barang")
    .reduce((sum, expense) => sum + Number(expense.amount || 0), 0);
  els.expenseTotal.textContent = formatMoney(totalExpense);
  els.expenseStockTotal.textContent = formatMoney(stockExpense);
  els.netCashflow.textContent = formatMoney(paidRevenue() - totalExpense);
  els.expenseTable.innerHTML = expenses.map((expense) => `
    <tr>
      <td>${new Date(expense.date).toLocaleDateString("id-ID")}</td>
      <td>${expense.category}</td>
      <td>${expense.description}</td>
      <td class="text-end">${formatMoney(expense.amount)}</td>
      <td class="text-end">
        <button class="btn btn-sm btn-outline-danger manager-only" data-delete-expense="${expense.id}" type="button" title="Hapus pengeluaran"><i class="bi bi-trash"></i></button>
      </td>
    </tr>
  `).join("") || `<tr><td colspan="5" class="text-center text-muted py-4">Belum ada pengeluaran.</td></tr>`;
  updateRoleAccess();
}

function renderSettings() {
  els.receiptPrinterInput.value = state.settings.receiptPrinter || "browser";
  els.barcodePrinterInput.value = state.settings.barcodePrinter || "roll-76x30";
  els.reportPrinterInput.value = state.settings.reportPrinter || "browser";
  els.scannerModeInput.value = state.settings.scannerMode || "enter";
  els.scannerPrefixInput.value = state.settings.scannerPrefix || "";
}

function saveSettings(event) {
  event.preventDefault();
  state.settings = {
    receiptPrinter: els.receiptPrinterInput.value,
    barcodePrinter: els.barcodePrinterInput.value,
    reportPrinter: els.reportPrinterInput.value,
    scannerMode: els.scannerModeInput.value,
    scannerPrefix: els.scannerPrefixInput.value.trim()
  };
  saveState();
  els.settingsStatus.textContent = "Pengaturan tersimpan.";
  setTimeout(() => {
    els.settingsStatus.textContent = "";
  }, 1800);
}

function renderMasterLists() {
  els.brandList.innerHTML = state.suppliers.map((brand) => `
    <div class="master-item">
      <span>${brand.name}</span>
      <button class="btn btn-sm btn-outline-danger" data-delete-brand="${brand.id}" type="button" title="Hapus supplier"><i class="bi bi-trash"></i></button>
    </div>
  `).join("");
  els.categoryList.innerHTML = state.categories.map((category) => `
    <div class="master-item">
      <span>${category.name}</span>
      <button class="btn btn-sm btn-outline-danger" data-delete-category="${category.id}" type="button" title="Hapus kategori"><i class="bi bi-trash"></i></button>
    </div>
  `).join("");
}

function renderMasterPages() {
  els.masterBrandGrid.innerHTML = state.suppliers.map((brand) => {
    const stock = state.products
      .filter((product) => product.brandId === brand.id)
      .reduce((sum, product) => sum + product.stock, 0);
    return `
      <tr>
        <td><strong>${brand.code}</strong></td>
        <td>${brand.name}</td>
        <td class="text-end">${stock}</td>
        <td class="text-end">
          <button class="btn btn-sm btn-outline-primary manager-only" data-edit-master="brand" data-master-id="${brand.id}" type="button" title="Edit supplier"><i class="bi bi-pencil"></i></button>
          <button class="btn btn-sm btn-outline-danger manager-only" data-delete-brand="${brand.id}" type="button" title="Hapus supplier"><i class="bi bi-trash"></i></button>
        </td>
      </tr>
    `;
  }).join("");

  els.masterCategoryGrid.innerHTML = state.categories.map((category) => {
    const stock = state.products
      .filter((product) => product.categoryId === category.id)
      .reduce((sum, product) => sum + product.stock, 0);
    return `
      <tr>
        <td><strong>${category.code}</strong></td>
        <td>${category.name}</td>
        <td class="text-end">${stock}</td>
        <td class="text-end">
          <button class="btn btn-sm btn-outline-primary manager-only" data-edit-master="category" data-master-id="${category.id}" type="button" title="Edit kategori"><i class="bi bi-pencil"></i></button>
          <button class="btn btn-sm btn-outline-danger manager-only" data-delete-category="${category.id}" type="button" title="Hapus kategori"><i class="bi bi-trash"></i></button>
        </td>
      </tr>
    `;
  }).join("");

  els.masterWarehouseGrid.innerHTML = state.warehouses.map((warehouse) => {
    const products = state.products.filter((product) => product.warehouseId === warehouse.id);
    const stock = products.reduce((sum, product) => sum + product.stock, 0);
    return `
      <tr>
        <td><strong>${warehouse.code}</strong></td>
        <td>${warehouse.name}</td>
        <td class="text-end">${stock}</td>
        <td class="text-end">
          <button class="btn btn-sm btn-outline-primary manager-only" data-edit-master="warehouse" data-master-id="${warehouse.id}" type="button" title="Edit gudang"><i class="bi bi-pencil"></i></button>
          <button class="btn btn-sm btn-outline-danger manager-only" data-delete-warehouse="${warehouse.id}" type="button" title="Hapus gudang"><i class="bi bi-trash"></i></button>
        </td>
      </tr>
    `;
  }).join("");
  els.masterCustomerTypeGrid.innerHTML = state.customerTypes.map((type) => `
    <tr>
      <td><strong>${type.code}</strong></td>
      <td>${type.name}</td>
      <td>${priceLabel(type.priceKey)}</td>
      <td class="text-end">
        <button class="btn btn-sm btn-outline-primary manager-only" data-edit-customer-type="${type.id}" type="button" title="Edit jenis pelanggan"><i class="bi bi-pencil"></i></button>
        <button class="btn btn-sm btn-outline-danger manager-only" data-delete-customer-type="${type.id}" type="button" title="Hapus jenis pelanggan"><i class="bi bi-trash"></i></button>
      </td>
    </tr>
  `).join("");
  updateRoleAccess();
}

function renderCustomers() {
  const filter = els.customerTypeFilter?.value || "all";
  const query = els.customerSearchInput.value.trim().toLowerCase();
  const customers = state.customers
    .filter((customer) => filter === "all" || customer.type === filter)
    .filter((customer) => !query || customer.name.toLowerCase().includes(query))
    .sort((a, b) => new Date(b.lastTransaction || 0) - new Date(a.lastTransaction || 0));

  els.customerCount.textContent = customers.length;
  els.customerRevenue.textContent = formatMoney(customers.reduce((sum, customer) => sum + Number(customer.totalSpend || 0), 0));
  els.customerTable.innerHTML = customers.map((customer) => `
    <tr>
      <td><strong>${customer.name}</strong></td>
      <td>${customer.type}</td>
      <td class="text-end">${customer.transactionCount}</td>
      <td class="text-end">${formatMoney(customer.totalSpend)}</td>
      <td>${customer.lastTransaction ? new Date(customer.lastTransaction).toLocaleDateString("id-ID") : "-"}</td>
    </tr>
  `).join("") || `<tr><td colspan="5" class="text-center text-muted py-4">Tidak ada pelanggan pada filter ini.</td></tr>`;
}

function renderCustomerSuggestions() {
  if (!els.customerSuggestions) return;
  const query = els.customerName.value.trim().toLowerCase();
  if (query.length < 2) {
    els.customerSuggestions.innerHTML = "";
    els.customerSuggestionPanel.innerHTML = "";
    els.customerSuggestionPanel.classList.add("d-none");
    return;
  }
  const customers = state.customers
    .map((customer) => ({
      ...customer,
      matchIndex: customer.name.toLowerCase().indexOf(query)
    }))
    .filter((customer) => customer.matchIndex >= 0)
    .sort((a, b) => a.matchIndex - b.matchIndex || a.name.localeCompare(b.name, "id"))
    .slice(0, 8);

  els.customerSuggestions.innerHTML = customers
    .map((customer) => `<option value="${escapeHtml(customer.name)}">${escapeHtml(customer.type)}</option>`)
    .join("");
  els.customerSuggestionPanel.innerHTML = customers.map((customer) => `
    <button class="customer-suggestion-item" data-select-customer="${escapeHtml(customer.id)}" type="button">
      <strong>${escapeHtml(customer.name)}</strong>
      <span>${escapeHtml(customer.type)} / ${customer.transactionCount || 0} transaksi</span>
    </button>
  `).join("");
  els.customerSuggestionPanel.classList.toggle("d-none", customers.length === 0);
}

function applyCustomerAutocomplete() {
  renderCustomerSuggestions();
  const name = els.customerName.value.trim().toLowerCase();
  const customer = state.customers.find((entry) => entry.name.toLowerCase() === name);
  if (!customer || !state.customerTypes.some((type) => type.name === customer.type)) return;
  els.customerSuggestionPanel.classList.add("d-none");
  setCustomerTypeValue(customer.type);
}

function renderDashboard() {
  const todayTransactions = state.transactions.filter((transaction) => todayKey(new Date(transaction.date)) === todayKey() && transaction.status === "Paid");
  const revenue = todayTransactions.reduce((sum, transaction) => sum + transactionTotal(transaction), 0);
  els.todayRevenue.textContent = formatMoney(revenue);
  els.lowStockCount.textContent = state.products.filter((product) => product.stock <= product.minStock).length;
  els.totalStock.textContent = state.products.reduce((sum, product) => sum + product.stock, 0);

  els.recentTransactions.innerHTML = state.transactions.slice(-5).reverse().map((transaction) => `
    <tr>
      <td><strong>${transaction.invoice}</strong></td>
      <td>${transaction.customer || "Pelanggan umum"}</td>
      <td><span class="badge ${transaction.status === "Hold" ? "text-bg-secondary" : "text-bg-success"}">${transaction.status}</span></td>
      <td class="text-end">${formatMoney(transactionTotal(transaction))}</td>
    </tr>
  `).join("") || `<tr><td colspan="4" class="text-center text-muted py-4">Belum ada transaksi.</td></tr>`;

  renderDashboardSalesChart();
  updateRoleAccess();
}

function monthKey(date = new Date()) {
  return date.toISOString().slice(0, 7);
}

function monthLabel(value) {
  const [year, month] = value.split("-").map(Number);
  return new Date(year, month - 1, 1).toLocaleDateString("id-ID", { month: "long", year: "numeric" });
}

function renderDashboardSalesChart() {
  if (!els.dashboardMonthInput.value) els.dashboardMonthInput.value = monthKey();
  const [year, month] = els.dashboardMonthInput.value.split("-").map(Number);
  const daysInMonth = new Date(year, month, 0).getDate();
  const dayTotals = Array.from({ length: daysInMonth }, () => ({ count: 0, total: 0 }));
  state.transactions
    .filter((transaction) => transaction.status === "Paid")
    .filter((transaction) => todayKey(new Date(transaction.date)).startsWith(els.dashboardMonthInput.value))
    .forEach((transaction) => {
      const day = new Date(transaction.date).getDate() - 1;
      dayTotals[day].count += 1;
      dayTotals[day].total += transactionTotal(transaction);
    });

  const maxTotal = Math.max(...dayTotals.map((day) => day.total), 1);
  const monthTotal = dayTotals.reduce((sum, day) => sum + day.total, 0);
  const monthCount = dayTotals.reduce((sum, day) => sum + day.count, 0);
  els.dashboardChartCaption.textContent = `${monthLabel(els.dashboardMonthInput.value)} / ${monthCount} transaksi / ${formatMoney(monthTotal)}`;
  const categories = dayTotals.map((_, index) => String(index + 1));
  const seriesData = dayTotals.map((day) => ({
    y: day.total,
    custom: { count: day.count }
  }));

  if (window.Highcharts) {
    if (dashboardSalesChart) dashboardSalesChart.destroy();
    dashboardSalesChart = window.Highcharts.chart(els.dashboardSalesChart, {
      chart: {
        type: "line",
        height: 320,
        backgroundColor: "transparent",
        spacing: [18, 0, 8, 0],
        marginLeft: 0,
        marginRight: 0,
        reflow: true
      },
      title: { text: null },
      credits: { enabled: false },
      legend: { enabled: false },
      xAxis: {
        categories,
        min: 0,
        max: daysInMonth - 1,
        minPadding: 0,
        maxPadding: 0,
        startOnTick: false,
        endOnTick: false,
        tickInterval: Math.max(Math.ceil(daysInMonth / 10), 1),
        lineColor: "#d9e0e7",
        tickColor: "#d9e0e7",
        labels: { style: { color: "#667085", fontSize: "11px" } }
      },
      yAxis: {
        min: 0,
        title: { text: null },
        gridLineColor: "#d9e0e7",
        labels: {
          enabled: false,
          formatter() {
            return formatShortMoney(this.value);
          },
          style: { color: "#667085", fontSize: "11px" }
        }
      },
      tooltip: {
        useHTML: true,
        formatter() {
          return `<strong>Tanggal ${this.x}</strong><br>${formatMoney(this.y)}<br>${this.point.custom.count} transaksi`;
        }
      },
      plotOptions: {
        series: {
          pointPlacement: "on"
        },
        line: {
          marker: {
            enabled: true,
            radius: 4,
            symbol: "circle"
          },
          dataLabels: {
            enabled: true,
            formatter() {
              return formatShortMoney(this.y);
            },
            style: {
              color: "#17212b",
              fontSize: "10px",
              fontWeight: "800",
              textOutline: "none"
            },
            y: -8,
            crop: false,
            overflow: "allow",
            allowOverlap: true
          }
        }
      },
      series: [{
        name: "Omzet",
        color: "#0f766e",
        lineWidth: 3,
        data: seriesData
      }]
    });
    return;
  }

  renderFallbackSalesLineChart(dayTotals, maxTotal);
}

function renderFallbackSalesLineChart(dayTotals, maxTotal) {
  const width = 760;
  const height = 300;
  const padding = { top: 28, right: 18, bottom: 34, left: 54 };
  const plotWidth = width - padding.left - padding.right;
  const plotHeight = height - padding.top - padding.bottom;
  const points = dayTotals.map((day, index) => {
    const x = padding.left + (dayTotals.length === 1 ? 0 : (index / (dayTotals.length - 1)) * plotWidth);
    const y = padding.top + plotHeight - (day.total / maxTotal) * plotHeight;
    return { x, y, day: index + 1, total: day.total, count: day.count };
  });
  const path = points.map((point, index) => `${index === 0 ? "M" : "L"} ${point.x.toFixed(2)} ${point.y.toFixed(2)}`).join(" ");
  const labels = points.map((point) => `
    <g>
      <circle cx="${point.x}" cy="${point.y}" r="4"></circle>
      <text x="${point.x}" y="${Math.max(point.y - 10, 12)}" text-anchor="middle">${formatShortMoney(point.total)}</text>
      <text class="axis-label" x="${point.x}" y="${height - 10}" text-anchor="middle">${point.day}</text>
    </g>
  `).join("");

  els.dashboardSalesChart.innerHTML = `
    <svg class="sales-line-fallback" viewBox="0 0 ${width} ${height}" role="img" aria-label="Grafik penjualan bulanan">
      <line class="axis-line" x1="${padding.left}" y1="${height - padding.bottom}" x2="${width - padding.right}" y2="${height - padding.bottom}"></line>
      <line class="axis-line" x1="${padding.left}" y1="${padding.top}" x2="${padding.left}" y2="${height - padding.bottom}"></line>
      <path d="${path}" fill="none"></path>
      ${labels}
    </svg>
  `;
}

function renderInventory() {
  const filter = els.inventoryWarehouseFilter.value || "all";
  const products = filter === "all" ? state.products : state.products.filter((product) => product.warehouseId === filter);
  els.inventoryTable.innerHTML = products.map((product) => {
    const status = stockStatus(product);
    return `
      <tr>
        <td><strong>${product.code}</strong></td>
        <td><img class="thumb thumb-sm" src="${product.thumbnail || fallbackThumb}" alt="${product.name}" onerror="this.src='${fallbackThumb}'"></td>
        <td>${product.name}</td>
        <td>${brandName(product.brandId)}</td>
        <td>${categoryName(product.categoryId)}</td>
        <td>${warehouseName(product.warehouseId)}</td>
        <td class="text-end cost-only">${formatMoney(product.cost)}</td>
        <td class="text-end">${formatMoney(product.price1)}</td>
        <td class="text-end">${formatMoney(product.price2)}</td>
        <td class="text-end">${formatMoney(product.price3)}</td>
        <td class="text-end">${formatMoney(product.price4)}</td>
        <td class="text-end">${product.stock}</td>
        <td class="text-end">${product.minStock}</td>
        <td><span class="badge badge-stock ${status.className}">${status.label}</span></td>
        <td class="text-end">
          <div class="inventory-actions">
            <button class="btn btn-sm btn-outline-primary manager-only" data-edit-product="${product.id}" type="button" title="Edit barang"><i class="bi bi-pencil"></i></button>
            <button class="btn btn-sm btn-outline-dark" data-print-barcode="${product.id}" type="button" title="Cetak label kode batang"><i class="bi bi-upc-scan"></i></button>
            <button class="btn btn-sm btn-outline-danger manager-only" data-delete-product="${product.id}" type="button" title="${productHasTransactions(product.id) ? "Tidak bisa hapus, barang sudah pernah transaksi" : "Hapus barang"}" ${productHasTransactions(product.id) ? "disabled" : ""}><i class="bi bi-trash"></i></button>
          </div>
        </td>
      </tr>
    `;
  }).join("") || `<tr><td colspan="15" class="text-center text-muted py-4">Tidak ada barang pada filter ini.</td></tr>`;
  updateRoleAccess();
}

function filteredProductsForTransaction() {
  const query = els.productSearchInput.value.trim().toLowerCase();
  const category = els.transactionCategoryFilter.value || "all";
  return state.products.filter((product) => {
    const haystack = `${product.code} ${product.name} ${brandName(product.brandId)} ${categoryName(product.categoryId)}`.toLowerCase();
    return product.stock > 0 && (category === "all" || product.categoryId === category) && (!query || haystack.includes(query));
  });
}

function renderProductCards() {
  const products = filteredProductsForTransaction();
  const type = selectedCustomerType();
  els.productCardGrid.innerHTML = products.map((product) => `
    <button class="product-card" data-add-product="${product.id}" type="button">
      <img class="thumb" src="${product.thumbnail || fallbackThumb}" alt="${product.name}" onerror="this.src='${fallbackThumb}'">
      <span class="product-code">${product.code}</span>
      <strong>${product.name}</strong>
      <span>${brandName(product.brandId)} / ${categoryName(product.categoryId)}</span>
      <div class="product-card-meta">
        <b>${formatMoney(priceForCustomer(product, type))}</b>
        <small>Stok ${product.stock}</small>
      </div>
    </button>
  `).join("") || `<div class="empty-state">Tidak ada item yang cocok.</div>`;
}

function renderCart() {
  els.cartTable.innerHTML = cart.map((item, index) => `
    <div class="cart-item">
      <img class="thumb thumb-xs" src="${item.thumbnail || fallbackThumb}" alt="${item.name}" onerror="this.src='${fallbackThumb}'">
      <div>
        <strong>${item.name}</strong>
        <span>${item.code} / ${formatMoney(item.price)}</span>
      </div>
      <div class="qty-control">
        <button class="btn btn-sm btn-light" data-decrease-cart="${index}" type="button" title="Kurangi"><i class="bi bi-dash"></i></button>
        <b>${item.qty}</b>
        <button class="btn btn-sm btn-light" data-increase-cart="${index}" type="button" title="Tambah"><i class="bi bi-plus"></i></button>
      </div>
      <button class="btn btn-sm btn-outline-danger" data-remove-cart="${index}" type="button" title="Hapus"><i class="bi bi-trash"></i></button>
    </div>
  `).join("") || `<div class="empty-state small">Belum ada item.</div>`;

  const productSubtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const serviceFee = Number(els.servicePriceInput.value || 0);
  const discount = Number(els.discountInput.value || 0);
  const grandTotal = Math.max(productSubtotal + serviceFee - discount, 0);
  els.productSubtotal.textContent = formatMoney(productSubtotal);
  els.grandTotal.textContent = formatMoney(grandTotal);
  const itemCount = cart.reduce((sum, item) => sum + item.qty, 0);
  els.mobileCheckoutTotal.textContent = `${itemCount} item / ${formatMoney(grandTotal)}`;
}

function refreshCartPricesForCustomerType() {
  const type = selectedCustomerType();
  cart = cart.map((item) => {
    const product = productById(item.productId);
    if (!product) return item;
    return {
      ...item,
      price: priceForCustomer(product, type),
      priceLevel: type?.priceKey || "price1",
      customerType: type?.name || selectedCustomerTypeName()
    };
  });
  renderProductCards();
  renderCart();
}

function handleCustomerTypeChange() {
  currentCustomerTypeName = selectedCustomerTypeName();
  refreshCartPricesForCustomerType();
}

function setCustomerTypeValue(value, shouldRefresh = true) {
  const nextValue = state.customerTypes.some((type) => type.name === value)
    ? value
    : state.customerTypes[0]?.name || "";
  currentCustomerTypeName = nextValue;
  els.customerType.value = nextValue;
  if (window.jQuery?.fn?.select2) {
    window.jQuery(els.customerType).val(nextValue).trigger("change.select2");
  }
  if (shouldRefresh) refreshCartPricesForCustomerType();
}

function filteredTransactions() {
  const from = els.dateFrom.value;
  const to = els.dateTo.value;
  const status = els.reportStatusFilter.value || "all";
  const saleType = els.reportSaleFilter.value || "all";
  const warehouse = els.reportWarehouseFilter.value || "all";
  return state.transactions.filter((transaction) => {
    const date = todayKey(new Date(transaction.date));
    const hasProduct = transaction.items.some((item) => item.productId);
    const hasService = Number(transaction.serviceFee || 0) > 0;
    const inWarehouse = warehouse === "all" || transaction.items.some((item) => item.warehouseId === warehouse);
    return (!from || date >= from)
      && (!to || date <= to)
      && (status === "all" || transaction.status === status)
      && (saleType === "all" || (saleType === "product" ? hasProduct : hasService))
      && inWarehouse;
  });
}

function renderReports() {
  const transactions = filteredTransactions();
  const paidTransactions = transactions.filter((transaction) => transaction.status === "Paid");
  els.reportRevenue.textContent = formatMoney(paidTransactions.reduce((sum, transaction) => sum + transactionTotal(transaction), 0));
  els.reportCount.textContent = transactions.length;
  els.reportService.textContent = formatMoney(transactions.reduce((sum, transaction) => sum + Number(transaction.serviceFee || 0), 0));
  els.reportItemQty.textContent = transactions.reduce((sum, transaction) => sum + transaction.items.reduce((itemSum, item) => itemSum + Number(item.qty || 0), 0), 0);
  els.reportTabs.forEach((tab) => tab.classList.toggle("active", tab.dataset.reportMode === currentReportMode));

  const renderers = {
    detail: renderReportDetail,
    summary: renderReportSummary,
    warehouse: renderReportWarehouse,
    product: renderReportProduct,
    customer: renderReportCustomer
  };
  renderers[currentReportMode](transactions);
}

function setReportHead(columns) {
  els.reportTableHead.innerHTML = `<tr>${columns.map((column) => `<th class="${column.className || ""}">${column.label}</th>`).join("")}</tr>`;
}

function emptyReportRow(colspan) {
  return `<tr><td colspan="${colspan}" class="text-center text-muted py-4">Tidak ada data pada filter ini.</td></tr>`;
}

function renderReportDetail(transactions) {
  setReportHead([
    { label: "Tanggal" },
    { label: "No Nota" },
    { label: "Pelanggan" },
    { label: "Jenis" },
    { label: "Gudang" },
    { label: "Status" },
    { label: "Total", className: "text-end" },
    { label: "", className: "text-end" }
  ]);
  els.reportTable.innerHTML = transactions.slice().reverse().map((transaction) => {
    const warehouses = [...new Set(transaction.items.map((item) => warehouseName(item.warehouseId)).filter(Boolean))].join(", ") || "-";
    return `
      <tr>
        <td>${new Date(transaction.date).toLocaleDateString("id-ID")}</td>
        <td><strong>${transaction.invoice}</strong></td>
        <td>${transaction.customer || "Pelanggan umum"}</td>
        <td>${transaction.customerType}</td>
        <td>${warehouses}</td>
        <td><span class="badge ${transaction.status === "Hold" ? "text-bg-secondary" : "text-bg-success"}">${transaction.status}</span></td>
        <td class="text-end">${formatMoney(transactionTotal(transaction))}</td>
        <td class="text-end">
          <button class="btn btn-sm btn-outline-dark no-print" data-print-transaction="${transaction.id}" type="button" title="Cetak struk">
            <i class="bi bi-printer"></i>
          </button>
        </td>
      </tr>
    `;
  }).join("") || emptyReportRow(8);
}

function renderReportSummary(transactions) {
  setReportHead([
    { label: "Tanggal" },
    { label: "Paid", className: "text-end" },
    { label: "Hold", className: "text-end" },
    { label: "Barang", className: "text-end" },
    { label: "Jasa", className: "text-end" },
    { label: "Omzet", className: "text-end" }
  ]);
  const groups = new Map();
  transactions.forEach((transaction) => {
    const date = todayKey(new Date(transaction.date));
    const current = groups.get(date) || { paid: 0, hold: 0, qty: 0, service: 0, omzet: 0 };
    current[transaction.status === "Hold" ? "hold" : "paid"] += 1;
    current.qty += transaction.items.reduce((sum, item) => sum + Number(item.qty || 0), 0);
    current.service += Number(transaction.serviceFee || 0);
    if (transaction.status === "Paid") current.omzet += transactionTotal(transaction);
    groups.set(date, current);
  });
  els.reportTable.innerHTML = [...groups.entries()].sort((a, b) => b[0].localeCompare(a[0])).map(([date, group]) => `
    <tr>
      <td>${new Date(date).toLocaleDateString("id-ID")}</td>
      <td class="text-end">${group.paid}</td>
      <td class="text-end">${group.hold}</td>
      <td class="text-end">${group.qty}</td>
      <td class="text-end">${formatMoney(group.service)}</td>
      <td class="text-end">${formatMoney(group.omzet)}</td>
    </tr>
  `).join("") || emptyReportRow(6);
}

function renderReportWarehouse(transactions) {
  setReportHead([
    { label: "Gudang/Cabang" },
    { label: "Transaksi", className: "text-end" },
    { label: "Barang", className: "text-end" },
    { label: "Omzet Barang", className: "text-end" }
  ]);
  const groups = new Map();
  transactions.forEach((transaction) => {
    transaction.items.forEach((item) => {
      const key = item.warehouseId || "unknown";
      const current = groups.get(key) || { transactions: new Set(), qty: 0, total: 0 };
      current.transactions.add(transaction.id);
      current.qty += Number(item.qty || 0);
      if (transaction.status === "Paid") current.total += Number(item.price || 0) * Number(item.qty || 0);
      groups.set(key, current);
    });
  });
  els.reportTable.innerHTML = [...groups.entries()].sort((a, b) => warehouseName(a[0]).localeCompare(warehouseName(b[0]), "id")).map(([warehouseId, group]) => `
    <tr>
      <td><strong>${warehouseName(warehouseId)}</strong></td>
      <td class="text-end">${group.transactions.size}</td>
      <td class="text-end">${group.qty}</td>
      <td class="text-end">${formatMoney(group.total)}</td>
    </tr>
  `).join("") || emptyReportRow(4);
}

function renderReportProduct(transactions) {
  setReportHead([
    { label: "Kode" },
    { label: "Barang" },
    { label: "Gudang" },
    { label: "Qty", className: "text-end" },
    { label: "Omzet", className: "text-end" }
  ]);
  const groups = new Map();
  transactions.forEach((transaction) => {
    transaction.items.forEach((item) => {
      const product = productById(item.productId);
      const current = groups.get(item.productId) || {
        code: item.code || product?.code || "-",
        name: item.name || product?.name || "-",
        warehouseId: item.warehouseId || product?.warehouseId || "",
        qty: 0,
        total: 0
      };
      current.qty += Number(item.qty || 0);
      if (transaction.status === "Paid") current.total += Number(item.price || 0) * Number(item.qty || 0);
      groups.set(item.productId, current);
    });
  });
  els.reportTable.innerHTML = [...groups.values()].sort((a, b) => b.total - a.total).map((group) => `
    <tr>
      <td><strong>${group.code}</strong></td>
      <td>${group.name}</td>
      <td>${warehouseName(group.warehouseId)}</td>
      <td class="text-end">${group.qty}</td>
      <td class="text-end">${formatMoney(group.total)}</td>
    </tr>
  `).join("") || emptyReportRow(5);
}

function renderReportCustomer(transactions) {
  setReportHead([
    { label: "Pelanggan" },
    { label: "Jenis" },
    { label: "Transaksi", className: "text-end" },
    { label: "Barang", className: "text-end" },
    { label: "Total Belanja", className: "text-end" },
    { label: "Terakhir" }
  ]);
  const groups = new Map();
  transactions.forEach((transaction) => {
    const key = (transaction.customer || "Pelanggan umum").toLowerCase();
    const current = groups.get(key) || {
      name: transaction.customer || "Pelanggan umum",
      type: transaction.customerType,
      count: 0,
      qty: 0,
      total: 0,
      last: transaction.date
    };
    current.type = transaction.customerType || current.type;
    current.count += 1;
    current.qty += transaction.items.reduce((sum, item) => sum + Number(item.qty || 0), 0);
    if (transaction.status === "Paid") current.total += transactionTotal(transaction);
    if (new Date(transaction.date) > new Date(current.last)) current.last = transaction.date;
    groups.set(key, current);
  });
  els.reportTable.innerHTML = [...groups.values()].sort((a, b) => b.total - a.total).map((group) => `
    <tr>
      <td><strong>${group.name}</strong></td>
      <td>${group.type}</td>
      <td class="text-end">${group.count}</td>
      <td class="text-end">${group.qty}</td>
      <td class="text-end">${formatMoney(group.total)}</td>
      <td>${new Date(group.last).toLocaleDateString("id-ID")}</td>
    </tr>
  `).join("") || emptyReportRow(6);
}

function expenseReportCategories() {
  return [...new Set([
    "Biaya Listrik",
    "Gaji Karyawan",
    "Belanja Barang",
    "Pajak/Beacukai",
    "Lainnya",
    ...state.expenses.map((expense) => expense.category)
  ].filter(Boolean))];
}

function renderExpenseReportOptions() {
  const current = els.expenseReportCategoryFilter.value || "all";
  els.expenseReportCategoryFilter.innerHTML = `<option value="all">Semua Kategori</option>${expenseReportCategories()
    .map((category) => `<option value="${category}">${category}</option>`)
    .join("")}`;
  els.expenseReportCategoryFilter.value = expenseReportCategories().includes(current) ? current : "all";
}

function filteredExpenseReports() {
  const from = els.expenseReportDateFrom.value;
  const to = els.expenseReportDateTo.value;
  const category = els.expenseReportCategoryFilter.value || "all";
  return state.expenses.filter((expense) => {
    const date = todayKey(new Date(expense.date));
    return (!from || date >= from)
      && (!to || date <= to)
      && (category === "all" || expense.category === category);
  });
}

function renderExpenseReports() {
  renderExpenseReportOptions();
  const expenses = filteredExpenseReports();
  const total = expenses.reduce((sum, expense) => sum + Number(expense.amount || 0), 0);
  const categoryCount = new Set(expenses.map((expense) => expense.category)).size;
  els.expenseReportTotal.textContent = formatMoney(total);
  els.expenseReportCount.textContent = expenses.length;
  els.expenseReportCategoryCount.textContent = categoryCount;
  els.expenseReportAverage.textContent = formatMoney(expenses.length ? total / expenses.length : 0);
  els.expenseReportTabs.forEach((tab) => tab.classList.toggle("active", tab.dataset.expenseReportMode === currentExpenseReportMode));

  const renderers = {
    detail: renderExpenseReportDetail,
    summary: renderExpenseReportSummary,
    category: renderExpenseReportCategory
  };
  renderers[currentExpenseReportMode](expenses);
}

function setExpenseReportHead(columns) {
  els.expenseReportTableHead.innerHTML = `<tr>${columns.map((column) => `<th class="${column.className || ""}">${column.label}</th>`).join("")}</tr>`;
}

function renderExpenseReportDetail(expenses) {
  setExpenseReportHead([
    { label: "Tanggal" },
    { label: "Kategori" },
    { label: "Keterangan" },
    { label: "Nominal", className: "text-end" }
  ]);
  els.expenseReportTable.innerHTML = expenses.slice().sort((a, b) => new Date(b.date) - new Date(a.date)).map((expense) => `
    <tr>
      <td>${new Date(expense.date).toLocaleDateString("id-ID")}</td>
      <td><span class="badge text-bg-light">${expense.category}</span></td>
      <td>${expense.description}</td>
      <td class="text-end">${formatMoney(expense.amount)}</td>
    </tr>
  `).join("") || emptyExpenseReportRow(4);
}

function renderExpenseReportSummary(expenses) {
  setExpenseReportHead([
    { label: "Tanggal" },
    { label: "Jumlah Catatan", className: "text-end" },
    { label: "Kategori", className: "text-end" },
    { label: "Total", className: "text-end" }
  ]);
  const groups = new Map();
  expenses.forEach((expense) => {
    const date = todayKey(new Date(expense.date));
    const current = groups.get(date) || { count: 0, categories: new Set(), total: 0 };
    current.count += 1;
    current.categories.add(expense.category);
    current.total += Number(expense.amount || 0);
    groups.set(date, current);
  });
  els.expenseReportTable.innerHTML = [...groups.entries()].sort((a, b) => b[0].localeCompare(a[0])).map(([date, group]) => `
    <tr>
      <td>${new Date(date).toLocaleDateString("id-ID")}</td>
      <td class="text-end">${group.count}</td>
      <td class="text-end">${group.categories.size}</td>
      <td class="text-end">${formatMoney(group.total)}</td>
    </tr>
  `).join("") || emptyExpenseReportRow(4);
}

function renderExpenseReportCategory(expenses) {
  setExpenseReportHead([
    { label: "Kategori" },
    { label: "Jumlah Catatan", className: "text-end" },
    { label: "Rata-rata", className: "text-end" },
    { label: "Total", className: "text-end" }
  ]);
  const groups = new Map();
  expenses.forEach((expense) => {
    const current = groups.get(expense.category) || { count: 0, total: 0 };
    current.count += 1;
    current.total += Number(expense.amount || 0);
    groups.set(expense.category, current);
  });
  els.expenseReportTable.innerHTML = [...groups.entries()].sort((a, b) => b[1].total - a[1].total).map(([category, group]) => `
    <tr>
      <td><strong>${category}</strong></td>
      <td class="text-end">${group.count}</td>
      <td class="text-end">${formatMoney(group.count ? group.total / group.count : 0)}</td>
      <td class="text-end">${formatMoney(group.total)}</td>
    </tr>
  `).join("") || emptyExpenseReportRow(4);
}

function emptyExpenseReportRow(colspan) {
  return `<tr><td colspan="${colspan}" class="text-center text-muted py-4">Tidak ada pengeluaran pada filter ini.</td></tr>`;
}

function switchView(viewId) {
  els.views.forEach((view) => view.classList.toggle("active-view", view.id === viewId));
  els.navItems.forEach((item) => item.classList.toggle("active", item.dataset.view === viewId));
  const activeButton = [...els.navItems].find((item) => item.dataset.view === viewId);
  els.pageTitle.textContent = activeButton?.dataset.title || activeButton?.textContent.trim() || "Dashboard";
  els.body.classList.toggle("transaction-active", viewId === "transactionView");
  closeMobileSidebar();
  closeCheckoutDrawer();
}

function openMobileSidebar() {
  els.body.classList.add("sidebar-open");
}

function closeMobileSidebar() {
  els.body.classList.remove("sidebar-open");
}

function openCheckoutDrawer() {
  els.body.classList.add("checkout-open");
}

function closeCheckoutDrawer() {
  els.body.classList.remove("checkout-open");
}

function resetWarehouseForm() {
  els.warehouseIdInput.value = "";
  els.warehouseNameInput.value = "";
}

function openWarehouseEditor(id) {
  const warehouse = state.warehouses.find((item) => item.id === id);
  if (!warehouse) return;
  els.warehouseIdInput.value = warehouse.id;
  els.warehouseNameInput.value = warehouse.name;
  bootstrap.Modal.getOrCreateInstance(document.querySelector("#warehouseModal")).show();
}

function saveWarehouse(event) {
  event.preventDefault();
  const id = els.warehouseIdInput.value || `wh-${crypto.randomUUID()}`;
  const name = els.warehouseNameInput.value.trim();
  const existing = state.warehouses.find((warehouse) => warehouse.id === id);
  if (existing) {
    existing.name = name;
  } else {
    state.warehouses.push({ id, name });
  }
  saveState();
  bootstrap.Modal.getInstance(document.querySelector("#warehouseModal")).hide();
  resetWarehouseForm();
  renderAll();
}

function addWarehouse(code, name) {
  const trimmedCode = code.trim().toUpperCase();
  const trimmed = name.trim();
  if (!trimmedCode || !trimmed) return;
  state.warehouses.push({ id: `wh-${crypto.randomUUID()}`, code: trimmedCode, name: trimmed });
  saveState();
  renderAll();
}

function addMaster(type, code, name) {
  if (!name) {
    name = code;
    code = `${type === "brand" ? "SUP" : "KT"}-${String((type === "brand" ? state.suppliers : state.categories).length + 1).padStart(3, "0")}`;
  }
  const trimmedCode = code.trim().toUpperCase();
  const trimmed = name.trim();
  if (!trimmedCode || !trimmed) return;
  const collection = type === "brand" ? state.suppliers : state.categories;
  collection.push({ id: `${type}-${crypto.randomUUID()}`, code: trimmedCode, name: trimmed });
  state.brands = state.suppliers;
  saveState();
  renderAll();
}

function editMaster(type, id) {
  const collection = type === "brand" ? state.suppliers : type === "category" ? state.categories : state.warehouses;
  const item = collection.find((entry) => entry.id === id);
  if (!item) return;
  const code = prompt("Kode", item.code || "");
  if (code === null) return;
  const name = prompt("Nama", item.name);
  if (name === null) return;
  item.code = code.trim().toUpperCase();
  item.name = name.trim();
  state.brands = state.suppliers;
  saveState();
  renderAll();
}

function deleteMaster(type, id) {
  const inUse = state.products.some((product) => type === "brand" ? product.brandId === id : product.categoryId === id);
  if (inUse) {
    alert("Master data ini masih dipakai barang.");
    return;
  }
  if (!confirm("Hapus master data ini?")) return;
  if (type === "brand") {
    state.suppliers = state.suppliers.filter((supplier) => supplier.id !== id);
    state.brands = state.suppliers;
  } else {
    state.categories = state.categories.filter((category) => category.id !== id);
  }
  saveState();
  renderAll();
}

function deleteWarehouse(id) {
  const inUse = state.products.some((product) => product.warehouseId === id);
  if (inUse) {
    alert("Gudang ini masih dipakai barang.");
    return;
  }
  if (!confirm("Hapus gudang ini?")) return;
  state.warehouses = state.warehouses.filter((warehouse) => warehouse.id !== id);
  saveState();
  renderAll();
}

function addCustomerType(code, name, priceKey) {
  const trimmedCode = code.trim().toUpperCase();
  const trimmedName = name.trim();
  if (!trimmedCode || !trimmedName) return;
  state.customerTypes.push({
    id: `ctype-${crypto.randomUUID()}`,
    code: trimmedCode,
    name: trimmedName,
    priceKey
  });
  saveState();
  renderAll();
}

function editCustomerType(id) {
  const type = state.customerTypes.find((entry) => entry.id === id);
  if (!type) return;
  const code = prompt("Kode", type.code || "");
  if (code === null) return;
  const name = prompt("Nama", type.name);
  if (name === null) return;
  const priceKey = prompt("Harga jual yang dipakai: price1, price2, price3, atau price4", type.priceKey || "price1");
  if (priceKey === null) return;
  const allowed = ["price1", "price2", "price3", "price4"];
  type.code = code.trim().toUpperCase();
  type.name = name.trim();
  type.priceKey = allowed.includes(priceKey.trim()) ? priceKey.trim() : "price1";
  saveState();
  renderAll();
}

function deleteCustomerType(id) {
  const type = state.customerTypes.find((entry) => entry.id === id);
  if (!type) return;
  const inUse = state.transactions.some((transaction) => transaction.customerType === type.name)
    || state.customers.some((customer) => customer.type === type.name)
    || els.customerType.value === type.name;
  if (inUse) {
    alert("Jenis pelanggan ini masih dipakai transaksi atau pelanggan.");
    return;
  }
  if (!confirm("Hapus jenis pelanggan ini?")) return;
  state.customerTypes = state.customerTypes.filter((entry) => entry.id !== id);
  saveState();
  renderAll();
}

function addExpense({ date, category, description, amount }) {
  state.expenses.push({
    id: `exp-${crypto.randomUUID()}`,
    date: new Date(date || new Date()).toISOString(),
    category,
    description,
    amount: Number(amount || 0)
  });
  saveState();
  renderAll();
}

function saveExpense(event) {
  event.preventDefault();
  addExpense({
    date: els.expenseDateInput.value,
    category: els.expenseCategoryInput.value,
    description: els.expenseDescriptionInput.value.trim(),
    amount: els.expenseAmountInput.value
  });
  els.expenseDescriptionInput.value = "";
  els.expenseAmountInput.value = "";
}

function deleteExpense(id) {
  if (!confirm("Hapus data pengeluaran ini?")) return;
  state.expenses = state.expenses.filter((expense) => expense.id !== id);
  saveState();
  renderAll();
}

function saveStockAddition(event) {
  event.preventDefault();
  const product = productById(els.stockProductInput.value);
  if (!product) {
    alert("Pilih barang terlebih dahulu.");
    return;
  }
  const qty = Number(els.stockQtyInput.value || 0);
  const cost = Number(els.stockCostInput.value || 0);
  if (qty <= 0) {
    alert("Jumlah stok harus lebih dari 0.");
    return;
  }
  product.stock += qty;
  product.cost = cost;
  product.price1 = Number(els.stockPrice1Input.value || 0);
  product.price2 = Number(els.stockPrice2Input.value || 0);
  product.price3 = Number(els.stockPrice3Input.value || 0);
  product.price4 = Number(els.stockPrice4Input.value || 0);
  product.price = product.price1;
  const amount = qty * cost;
  state.expenses.push({
    id: `exp-${crypto.randomUUID()}`,
    date: new Date().toISOString(),
    category: "Belanja Barang",
    description: els.stockNoteInput.value.trim() || `Belanja stok ${product.code} - ${product.name} dari ${brandName(product.brandId)}`,
    amount
  });
  saveState();
  bootstrap.Modal.getInstance(document.querySelector("#stockModal")).hide();
  resetStockForm();
  renderAll();
  alert(`Stok ${product.name} bertambah ${qty}. Pengeluaran ${formatMoney(amount)} tercatat.`);
}

function resetProductForm() {
  els.productForm.reset();
  els.productIdInput.value = "";
  els.productThumbnailDataInput.value = "";
  els.thumbnailPreview.src = "";
  els.thumbnailPreview.classList.remove("show");
  els.productProfit1Input.value = "";
  els.productProfit2Input.value = "";
  els.productProfit3Input.value = "";
  els.productProfit4Input.value = "";
  els.productModalTitle.textContent = "Input Inventori Barang";
  if (window.jQuery?.fn?.select2) {
    window.jQuery(els.productBrandInput).val("").trigger("change");
    window.jQuery(els.productCategoryInput).val("").trigger("change");
  }
}

function setThumbnailPreview(src) {
  els.productThumbnailDataInput.value = src || "";
  els.thumbnailPreview.src = src || "";
  els.thumbnailPreview.classList.toggle("show", Boolean(src));
}

function editProduct(id) {
  const product = productById(id);
  if (!product) return;
  els.productModalTitle.textContent = "Edit Inventori Barang";
  els.productIdInput.value = product.id;
  document.querySelector("#productCodeInput").value = product.code;
  document.querySelector("#productNameInput").value = product.name;
  setThumbnailPreview(product.thumbnail || fallbackThumb);
  els.productBrandInput.value = product.brandId;
  els.productCategoryInput.value = product.categoryId;
  els.productWarehouseInput.value = product.warehouseId;
  document.querySelector("#productCostInput").value = product.cost;
  document.querySelector("#productPriceInput").value = product.price1;
  els.productPrice2Input.value = product.price2;
  els.productPrice3Input.value = product.price3;
  els.productPrice4Input.value = product.price4;
  syncProfitFromPrices("product");
  document.querySelector("#productStockInput").value = product.stock;
  document.querySelector("#productMinInput").value = product.minStock;
  if (window.jQuery?.fn?.select2) {
    window.jQuery(els.productBrandInput).trigger("change");
    window.jQuery(els.productCategoryInput).trigger("change");
  }
  bootstrap.Modal.getOrCreateInstance(document.querySelector("#productModal")).show();
}

function readThumbnailFile(file) {
  if (!file) return;
  if (!file.type.startsWith("image/")) {
    alert("File thumbnail harus berupa gambar.");
    return;
  }
  const reader = new FileReader();
  reader.addEventListener("load", () => setThumbnailPreview(reader.result));
  reader.readAsDataURL(file);
}

function saveProduct(event) {
  event.preventDefault();
  const existing = productById(els.productIdInput.value);
  const product = {
    id: existing?.id || `prd-${crypto.randomUUID()}`,
    code: document.querySelector("#productCodeInput").value.trim().toUpperCase(),
    name: document.querySelector("#productNameInput").value.trim(),
    thumbnail: els.productThumbnailDataInput.value || existing?.thumbnail || fallbackThumb,
    supplierId: els.productBrandInput.value,
    brandId: els.productBrandInput.value,
    categoryId: els.productCategoryInput.value,
    warehouseId: els.productWarehouseInput.value,
    cost: canManageCost() ? Number(document.querySelector("#productCostInput").value || 0) : Number(existing?.cost || 0),
    price1: Number(document.querySelector("#productPriceInput").value || 0),
    price2: Number(els.productPrice2Input.value || 0),
    price3: Number(els.productPrice3Input.value || 0),
    price4: Number(els.productPrice4Input.value || 0),
    price: Number(document.querySelector("#productPriceInput").value || 0),
    stock: Number(document.querySelector("#productStockInput").value || 0),
    minStock: Number(document.querySelector("#productMinInput").value || 0)
  };
  if (existing) {
    Object.assign(existing, product);
  } else {
    state.products.push(product);
  }
  saveState();
  bootstrap.Modal.getInstance(document.querySelector("#productModal")).hide();
  resetProductForm();
  renderAll();
}

function addProductToCart(productId) {
  const product = productById(productId);
  if (!product || product.stock <= 0) return;
  const type = selectedCustomerType();
  const salePrice = priceForCustomer(product, type);
  const existing = cart.find((item) => item.productId === product.id);
  if (existing) {
    if (existing.qty >= product.stock) {
      alert(`Stok ${product.name} hanya ${product.stock}.`);
      return;
    }
    existing.price = salePrice;
    existing.priceLevel = type?.priceKey || "price1";
    existing.customerType = type?.name || selectedCustomerTypeName();
    existing.qty += 1;
  } else {
    cart.push({
      type: "product",
      productId: product.id,
      code: product.code,
      warehouseId: product.warehouseId,
      thumbnail: product.thumbnail,
      name: product.name,
      price: salePrice,
      priceLevel: type?.priceKey || "price1",
      customerType: type?.name || selectedCustomerTypeName(),
      qty: 1
    });
  }
  renderCart();
}

function cleanScannedCode(value) {
  const prefix = state.settings.scannerPrefix || "";
  let code = String(value || "").trim().replace(/^\*|\*$/g, "");
  if (prefix && code.toUpperCase().startsWith(prefix.toUpperCase())) {
    code = code.slice(prefix.length);
  }
  return normalizeBarcodeCode(code);
}

function findProductByBarcode(value) {
  const scannedCode = cleanScannedCode(value);
  return state.products.find((product) => normalizeBarcodeCode(product.code) === scannedCode);
}

function scanBarcode() {
  const code = els.barcodeScanInput.value.trim();
  if (!code) return;
  const product = findProductByBarcode(code);
  if (!product) {
    alert(`Barcode ${code} tidak ditemukan di inventori.`);
    els.barcodeScanInput.select();
    return;
  }
  if (product.stock <= 0) {
    alert(`Stok ${product.name} habis.`);
    els.barcodeScanInput.select();
    return;
  }
  addProductToCart(product.id);
  els.barcodeScanInput.value = "";
  els.barcodeScanInput.focus();
}

function scheduleBarcodeScan() {
  if ((state.settings.scannerMode || "enter") !== "delay") return;
  clearTimeout(barcodeScanTimer);
  barcodeScanTimer = setTimeout(scanBarcode, 350);
}

function clearCheckout() {
  cart = [];
  els.customerName.value = "";
  setCustomerTypeValue(state.customerTypes[0]?.name || "", false);
  els.servicePriceInput.value = 0;
  els.discountInput.value = 0;
  renderCustomerSuggestions();
  renderProductCards();
  renderCart();
  setCurrentInvoice();
}

function validateCheckout() {
  if (cart.length === 0 && Number(els.servicePriceInput.value || 0) <= 0) {
    alert("Tambahkan item atau biaya jasa terlebih dahulu.");
    return false;
  }
  for (const item of cart) {
    const product = productById(item.productId);
    if (!product || product.stock < item.qty) {
      alert(`Stok ${item.name} tidak cukup.`);
      return false;
    }
  }
  return true;
}

function selectedPayment() {
  return document.querySelector("input[name='paymentMethod']:checked")?.value || "Tunai";
}

function createTransaction(status) {
  if (!validateCheckout()) return null;

  if (status === "Paid") {
    cart.forEach((item) => {
      productById(item.productId).stock -= item.qty;
    });
  }

  const transaction = {
    id: `trx-${crypto.randomUUID()}`,
    invoice: nextInvoice(),
    date: new Date().toISOString(),
    customer: els.customerName.value.trim() || "Pelanggan umum",
    customerType: selectedCustomerTypeName(),
    cashier: state.user,
    payment: selectedPayment(),
    status,
    serviceFee: Number(els.servicePriceInput.value || 0),
    discount: Number(els.discountInput.value || 0),
    items: cart.map((item) => ({ ...item }))
  };

  state.transactions.push(transaction);
  state.customers = mergeCustomers(state.customers, state.transactions);
  lastReceipt = transaction;
  saveState();
  buildReceipt(transaction);
  clearCheckout();
  renderAll();
  return transaction;
}

function payTransaction() {
  const transaction = createTransaction("Paid");
  if (!transaction) return;
  bootstrap.Modal.getOrCreateInstance(els.paymentSuccessModal).show();
}

function holdTransaction() {
  const transaction = createTransaction("Hold");
  if (!transaction) return;
  alert(`Transaksi ${transaction.invoice} berhasil di-hold.`);
}

function cancelTransaction() {
  if (cart.length === 0 && Number(els.servicePriceInput.value || 0) === 0 && !els.customerName.value.trim()) {
    clearCheckout();
    return;
  }
  const confirmed = confirm("Batalkan transaksi saat ini? Semua item di ringkasan akan dikosongkan.");
  if (!confirmed) return;
  clearCheckout();
}

function buildReceipt(transaction) {
  const rows = transaction.items.map((item) => `
    <div class="receipt-line">
      <span>${item.qty}x ${item.name}</span>
      <span>${formatMoney(item.price * item.qty)}</span>
    </div>
  `).join("");

  els.receiptArea.innerHTML = `
    <div class="receipt-title">
      <strong>SS AUTOLIGHT</strong><br>
      Custom Lamp Workshop<br>
      ${transaction.invoice}
    </div>
    <div>Tanggal: ${new Date(transaction.date).toLocaleString("id-ID")}</div>
    <div>Pelanggan: ${transaction.customer}</div>
    <div>Jenis: ${transaction.customerType}</div>
    <div>Kasir: ${transaction.cashier}</div>
    <div>Pembayaran: ${transaction.payment}</div>
    <div>Status: ${transaction.status}</div>
    <br>
    ${rows || "<div>Tanpa item barang</div>"}
    <div class="receipt-line">
      <span>Biaya Jasa</span>
      <span>${formatMoney(transaction.serviceFee)}</span>
    </div>
    <div class="receipt-line">
      <span>Diskon</span>
      <span>${formatMoney(transaction.discount)}</span>
    </div>
    <div class="receipt-line receipt-total">
      <span>Total</span>
      <span>${formatMoney(transactionTotal(transaction))}</span>
    </div>
    <br>
    <div class="text-center">Terima kasih sudah mempercayakan lampu kendaraan Anda.</div>
  `;
}

function printTransaction(id) {
  const transaction = state.transactions.find((entry) => entry.id === id)
    || lastReceipt
    || state.transactions.at(-1);
  if (!transaction) {
    alert("Belum ada struk untuk dicetak.");
    return;
  }
  buildReceipt(transaction);
  els.body.classList.remove("printing-label");
  window.print();
}

function printReport() {
  els.body.classList.add("printing-report");
  const cleanup = () => els.body.classList.remove("printing-report");
  window.addEventListener("afterprint", cleanup, { once: true });
  window.print();
}

function printExpenseReport() {
  els.body.classList.add("printing-expense-report");
  const cleanup = () => els.body.classList.remove("printing-expense-report");
  window.addEventListener("afterprint", cleanup, { once: true });
  window.print();
}

const code39Patterns = {
  "0": "nnnwwnwnn",
  "1": "wnnwnnnnw",
  "2": "nnwwnnnnw",
  "3": "wnwwnnnnn",
  "4": "nnnwwnnnw",
  "5": "wnnwwnnnn",
  "6": "nnwwwnnnn",
  "7": "nnnwnnwnw",
  "8": "wnnwnnwnn",
  "9": "nnwwnnwnn",
  A: "wnnnnwnnw",
  B: "nnwnnwnnw",
  C: "wnwnnwnnn",
  D: "nnnnwwnnw",
  E: "wnnnwwnnn",
  F: "nnwnwwnnn",
  G: "nnnnnwwnw",
  H: "wnnnnwwnn",
  I: "nnwnnwwnn",
  J: "nnnnwwwnn",
  K: "wnnnnnnww",
  L: "nnwnnnnww",
  M: "wnwnnnnwn",
  N: "nnnnwnnww",
  O: "wnnnwnnwn",
  P: "nnwnwnnwn",
  Q: "nnnnnnwww",
  R: "wnnnnnwwn",
  S: "nnwnnnwwn",
  T: "nnnnwnwwn",
  U: "wwnnnnnnw",
  V: "nwwnnnnnw",
  W: "wwwnnnnnn",
  X: "nwnnwnnnw",
  Y: "wwnnwnnnn",
  Z: "nwwnwnnnn",
  "-": "nwnnnnwnw",
  ".": "wwnnnnwnn",
  " ": "nwwnnnwnn",
  "$": "nwnwnwnnn",
  "/": "nwnwnnnwn",
  "+": "nwnnnwnwn",
  "%": "nnnwnwnwn",
  "*": "nwnnwnwnn"
};

function normalizeBarcodeCode(value) {
  const cleaned = String(value || "")
    .toUpperCase()
    .replace(/[^0-9A-Z .$/+%-]/g, "-")
    .slice(0, 24);
  return cleaned || "SS-AUTOLIGHT";
}

function code39Svg(value) {
  const code = `*${normalizeBarcodeCode(value)}*`;
  let x = 0;
  const rects = [];
  [...code].forEach((char) => {
    const pattern = code39Patterns[char] || code39Patterns["-"];
    [...pattern].forEach((size, unitIndex) => {
      const width = size === "w" ? 3 : 1;
      if (unitIndex % 2 === 0) rects.push(`<rect x="${x}" y="0" width="${width}" height="64"></rect>`);
      x += width;
    });
    x += 1;
  });
  return `
    <svg class="barcode-svg" viewBox="0 0 ${x} 64" preserveAspectRatio="none" role="img" aria-label="${escapeHtml(code)}" xmlns="http://www.w3.org/2000/svg">
      ${rects.join("")}
    </svg>
  `;
}

function buildBarcodeLabel(product) {
  const code = normalizeBarcodeCode(product.code);
  els.barcodeArea.innerHTML = `
    <div class="barcode-label">
      <div class="label-side">SS AUTOLIGHT</div>
      <div class="label-main">
        <div class="label-name">${escapeHtml(product.name.toUpperCase())}</div>
        <div class="barcode-bars">${code39Svg(code)}</div>
        <div class="label-code">${escapeHtml(code)}</div>
        <div class="label-price">${formatLabelPrice(product.price1)} / PCS</div>
      </div>
    </div>
  `;
}

function printBarcodeLabel(id) {
  const product = productById(id);
  if (!product) return;
  buildBarcodeLabel(product);
  els.body.classList.add("printing-label");
  const cleanup = () => els.body.classList.remove("printing-label");
  window.addEventListener("afterprint", cleanup, { once: true });
  window.print();
}

function deleteProduct(id) {
  const product = productById(id);
  if (!product) return;
  if (productHasTransactions(id)) {
    alert("Barang ini sudah pernah dipakai transaksi, jadi tidak bisa dihapus.");
    return;
  }
  const confirmed = confirm(`Hapus ${product.name}? Stok barang ini juga akan keluar dari inventori.`);
  if (!confirmed) return;
  state.products = state.products.filter((item) => item.id !== id);
  cart = cart.filter((item) => item.productId !== id);
  saveState();
  renderAll();
}

els.loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (els.pinInput.value !== "1234") {
    alert("PIN demo salah.");
    return;
  }
  state.user = els.roleSelect.value;
  saveState();
  els.currentUser.textContent = state.user;
  els.loginScreen.classList.add("d-none");
  els.appShell.classList.remove("d-none");
  renderAll();
});

els.logoutBtn.addEventListener("click", () => {
  state.user = null;
  saveState();
  closeMobileSidebar();
  closeCheckoutDrawer();
  els.appShell.classList.add("d-none");
  els.loginScreen.classList.remove("d-none");
});

els.mobileMenuBtn.addEventListener("click", openMobileSidebar);
els.sidebarBackdrop.addEventListener("click", closeMobileSidebar);
els.checkoutDrawerToggle.addEventListener("click", openCheckoutDrawer);
els.checkoutDrawerClose.addEventListener("click", closeCheckoutDrawer);
els.navItems.forEach((item) => item.addEventListener("click", () => switchView(item.dataset.view)));
els.inventoryWarehouseFilter.addEventListener("change", renderInventory);
els.dashboardMonthInput.addEventListener("change", renderDashboard);
els.productSearchInput.addEventListener("input", renderProductCards);
els.transactionCategoryFilter.addEventListener("change", renderProductCards);
els.barcodeScanBtn.addEventListener("click", scanBarcode);
els.barcodeScanInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    scanBarcode();
  }
});
els.barcodeScanInput.addEventListener("input", scheduleBarcodeScan);
els.warehouseForm.addEventListener("submit", saveWarehouse);
els.masterWarehouseForm.addEventListener("submit", (event) => {
  event.preventDefault();
  addWarehouse(els.masterWarehouseCodeInput.value, els.masterWarehouseNameInput.value);
  els.masterWarehouseCodeInput.value = "";
  els.masterWarehouseNameInput.value = "";
});
els.productForm.addEventListener("submit", saveProduct);
els.brandForm.addEventListener("submit", (event) => {
  event.preventDefault();
  addMaster("brand", els.brandNameInput.value);
  els.brandNameInput.value = "";
});
els.masterBrandForm.addEventListener("submit", (event) => {
  event.preventDefault();
  addMaster("brand", els.masterBrandCodeInput.value, els.masterBrandNameInput.value);
  els.masterBrandCodeInput.value = "";
  els.masterBrandNameInput.value = "";
});
els.categoryForm.addEventListener("submit", (event) => {
  event.preventDefault();
  addMaster("category", els.categoryNameInput.value);
  els.categoryNameInput.value = "";
});
els.masterCategoryForm.addEventListener("submit", (event) => {
  event.preventDefault();
  addMaster("category", els.masterCategoryCodeInput.value, els.masterCategoryNameInput.value);
  els.masterCategoryCodeInput.value = "";
  els.masterCategoryNameInput.value = "";
});
els.masterCustomerTypeForm.addEventListener("submit", (event) => {
  event.preventDefault();
  addCustomerType(
    els.masterCustomerTypeCodeInput.value,
    els.masterCustomerTypeNameInput.value,
    els.masterCustomerTypePriceInput.value
  );
  els.masterCustomerTypeCodeInput.value = "";
  els.masterCustomerTypeNameInput.value = "";
  els.masterCustomerTypePriceInput.value = "price1";
});
els.customerTypeFilter.addEventListener("change", renderCustomers);
els.customerSearchInput.addEventListener("input", renderCustomers);
els.customerName.addEventListener("input", applyCustomerAutocomplete);
els.customerName.addEventListener("focus", renderCustomerSuggestions);
els.customerType.addEventListener("change", handleCustomerTypeChange);
els.settingsForm.addEventListener("submit", saveSettings);
els.stockProductInput.addEventListener("change", updateStockProductInfo);
els.stockForm.addEventListener("submit", saveStockAddition);
els.expenseForm.addEventListener("submit", saveExpense);
wirePriceProfitSync("product");
wirePriceProfitSync("stock");
document.querySelector("#productCostInput").addEventListener("input", () => syncPricesFromProfits("product"));
els.stockCostInput.addEventListener("input", () => syncPricesFromProfits("stock"));
els.productThumbnailInput.addEventListener("change", () => readThumbnailFile(els.productThumbnailInput.files[0]));
els.thumbnailDropzone.addEventListener("click", () => els.productThumbnailInput.click());
els.thumbnailDropzone.addEventListener("dragover", (event) => {
  event.preventDefault();
  els.thumbnailDropzone.classList.add("dragging");
});
els.thumbnailDropzone.addEventListener("dragleave", () => els.thumbnailDropzone.classList.remove("dragging"));
els.thumbnailDropzone.addEventListener("drop", (event) => {
  event.preventDefault();
  els.thumbnailDropzone.classList.remove("dragging");
  readThumbnailFile(event.dataTransfer.files[0]);
});
els.servicePriceInput.addEventListener("input", renderCart);
els.discountInput.addEventListener("input", renderCart);
els.payTransactionBtn.addEventListener("click", payTransaction);
els.holdTransactionBtn.addEventListener("click", holdTransaction);
els.cancelTransactionBtn.addEventListener("click", cancelTransaction);
els.printReceiptBtn.addEventListener("click", () => printTransaction(lastReceipt?.id));
els.modalPrintReceiptBtn.addEventListener("click", () => printTransaction(lastReceipt?.id));
els.dateFrom.addEventListener("change", renderReports);
els.dateTo.addEventListener("change", renderReports);
els.reportStatusFilter.addEventListener("change", renderReports);
els.reportSaleFilter.addEventListener("change", renderReports);
els.reportWarehouseFilter.addEventListener("change", renderReports);
els.printReportBtn.addEventListener("click", printReport);
els.reportTabs.forEach((tab) => tab.addEventListener("click", () => {
  currentReportMode = tab.dataset.reportMode;
  renderReports();
}));
els.expenseReportDateFrom.addEventListener("change", renderExpenseReports);
els.expenseReportDateTo.addEventListener("change", renderExpenseReports);
els.expenseReportCategoryFilter.addEventListener("change", renderExpenseReports);
els.printExpenseReportBtn.addEventListener("click", printExpenseReport);
els.expenseReportTabs.forEach((tab) => tab.addEventListener("click", () => {
  currentExpenseReportMode = tab.dataset.expenseReportMode;
  renderExpenseReports();
}));
els.resetReportFilter.addEventListener("click", () => {
  els.dateFrom.value = "";
  els.dateTo.value = "";
  els.reportStatusFilter.value = "all";
  els.reportSaleFilter.value = "all";
  els.reportWarehouseFilter.value = "all";
  renderReports();
});
els.resetExpenseReportFilter.addEventListener("click", () => {
  els.expenseReportDateFrom.value = "";
  els.expenseReportDateTo.value = "";
  els.expenseReportCategoryFilter.value = "all";
  renderExpenseReports();
});

document.addEventListener("click", (event) => {
  const warehouseButton = event.target.closest("[data-edit-warehouse]");
  const removeButton = event.target.closest("[data-remove-cart]");
  const increaseButton = event.target.closest("[data-increase-cart]");
  const decreaseButton = event.target.closest("[data-decrease-cart]");
  const printButton = event.target.closest("[data-print-transaction]");
  const productButton = event.target.closest("[data-add-product]");
  const editProductButton = event.target.closest("[data-edit-product]");
  const printBarcodeButton = event.target.closest("[data-print-barcode]");
  const deleteProductButton = event.target.closest("[data-delete-product]");
  const selectCustomerButton = event.target.closest("[data-select-customer]");
  const editMasterButton = event.target.closest("[data-edit-master]");
  const editCustomerTypeButton = event.target.closest("[data-edit-customer-type]");
  const deleteBrandButton = event.target.closest("[data-delete-brand]");
  const deleteCategoryButton = event.target.closest("[data-delete-category]");
  const deleteWarehouseButton = event.target.closest("[data-delete-warehouse]");
  const deleteCustomerTypeButton = event.target.closest("[data-delete-customer-type]");
  const deleteExpenseButton = event.target.closest("[data-delete-expense]");

  if (warehouseButton) openWarehouseEditor(warehouseButton.dataset.editWarehouse);
  if (productButton) addProductToCart(productButton.dataset.addProduct);
  if (editProductButton) editProduct(editProductButton.dataset.editProduct);
  if (printBarcodeButton) printBarcodeLabel(printBarcodeButton.dataset.printBarcode);
  if (deleteProductButton) deleteProduct(deleteProductButton.dataset.deleteProduct);
  if (selectCustomerButton) {
    const customer = state.customers.find((entry) => entry.id === selectCustomerButton.dataset.selectCustomer);
    if (customer) {
      els.customerName.value = customer.name;
      els.customerSuggestionPanel.classList.add("d-none");
      if (state.customerTypes.some((type) => type.name === customer.type)) setCustomerTypeValue(customer.type);
    }
  }
  if (editMasterButton) editMaster(editMasterButton.dataset.editMaster, editMasterButton.dataset.masterId);
  if (editCustomerTypeButton) editCustomerType(editCustomerTypeButton.dataset.editCustomerType);
  if (removeButton) {
    cart.splice(Number(removeButton.dataset.removeCart), 1);
    renderCart();
  }
  if (increaseButton) {
    const index = Number(increaseButton.dataset.increaseCart);
    const item = cart[index];
    const product = productById(item.productId);
    if (item.qty >= product.stock) {
      alert(`Stok ${item.name} hanya ${product.stock}.`);
      return;
    }
    item.qty += 1;
    renderCart();
  }
  if (decreaseButton) {
    const index = Number(decreaseButton.dataset.decreaseCart);
    cart[index].qty -= 1;
    if (cart[index].qty <= 0) cart.splice(index, 1);
    renderCart();
  }
  if (printButton) printTransaction(printButton.dataset.printTransaction);
  if (deleteBrandButton) deleteMaster("brand", deleteBrandButton.dataset.deleteBrand);
  if (deleteCategoryButton) deleteMaster("category", deleteCategoryButton.dataset.deleteCategory);
  if (deleteWarehouseButton) deleteWarehouse(deleteWarehouseButton.dataset.deleteWarehouse);
  if (deleteCustomerTypeButton) deleteCustomerType(deleteCustomerTypeButton.dataset.deleteCustomerType);
  if (deleteExpenseButton) deleteExpense(deleteExpenseButton.dataset.deleteExpense);
  if (!event.target.closest("#customerName") && !event.target.closest("#customerSuggestionPanel")) {
    els.customerSuggestionPanel.classList.add("d-none");
  }
});

document.querySelector("#warehouseModal").addEventListener("hidden.bs.modal", resetWarehouseForm);
document.querySelector("#productModal").addEventListener("hidden.bs.modal", resetProductForm);
document.querySelector("#stockModal").addEventListener("hidden.bs.modal", resetStockForm);

saveState();

if (state.user) {
  els.currentUser.textContent = state.user;
  els.loginScreen.classList.add("d-none");
  els.appShell.classList.remove("d-none");
  els.body.classList.toggle("transaction-active", document.querySelector("#transactionView").classList.contains("active-view"));
  renderAll();
}
