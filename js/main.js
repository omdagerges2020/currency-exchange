// select elements

// result input
const myResultInput = document.querySelector("input");
// revert button
const myRevBtn = document.querySelector(".rev-btn");
// flage image
const myFlageImage = document.querySelector(".image-from");
// to select flage image
const myToSelectFlageImg = document.querySelector(".image-to");
// from select
const myFromSelect = document.querySelector(".from");
// to select
const myToSelect = document.querySelector(".to");
// convert button
const myConvertBtn = document.querySelector(".conv-btn");
// result div
const myResult = document.querySelector(".result-span");

// Country Names Object
const COUNTRY_NAMES = {
  AED: "United Arab Emirates Dirham",
  AFN: "Afghan Afghani",
  ALL: "Albanian Lek",
  AMD: "Armenian Dram",
  ANG: "Dutch Guilders",
  AOA: "Angolan Kwanza",
  ARS: "Argentine Peso",
  AUD: "Australian Dollar",
  AWG: "Aruban Florin",
  AZN: "Azerbaijani Manat",
  BAM: "Bosnia-Herzegovina Convertible Mark",
  BBD: "Barbadian Dollar",
  BDT: "Bangladeshi Taka",
  BGN: "Bulgarian Lev",
  BHD: "Bahraini Dinar",
  BIF: "Burundian Franc",
  BMD: "Bermudian Dollar",
  BND: "Bruneian Dollar",
  BOB: "Bolivian Boliviano",
  BRL: "Brazilian Real",
  BSD: "Bahamian Dollar",
  BTN: "Bhutanese Ngultrum",
  BWP: "Botswanan Pula",
  BZD: "Belizean Dollar",
  CAD: "Canadian Dollar",
  CDF: "Congolese Franc",
  CHF: "Swiss Franc",
  CLF: "Chilean Unit of Account UF",
  CLP: "Chilean Peso",
  CNH: "Chinese Yuan Offshore",
  CNY: "Chinese Yuan",
  COP: "Colombian Peso",
  CUP: "Cuban Peso",
  CVE: "Cape Verdean Escudo",
  CZK: "Czech Republic Koruna",
  DJF: "Djiboutian Franc",
  DKK: "Danish Krone",
  DOP: "Dominican Peso",
  DZD: "Algerian Dinar",
  EGP: "Egyptian Pound",
  ERN: "Eritrean Nakfa",
  ETB: "Ethiopian Birr",
  EUR: "Euro",
  FJD: "Fijian Dollar",
  FKP: "Falkland Islands Pound",
  GBP: "British Pound Sterling",
  GEL: "Georgian Lari",
  GHS: "Ghanaian Cedi",
  GIP: "Gibraltar Pound",
  GMD: "Gambian Dalasi",
  GNF: "Guinean Franc",
  GTQ: "Guatemalan Quetzal",
  GYD: "Guyanaese Dollar",
  HKD: "Hong Kong Dollar",
  HNL: "Honduran Lempira",
  HRK: "Croatian Kuna",
  HTG: "Haitian Gourde",
  HUF: "Hungarian Forint",
  IDR: "Indonesian Rupiah",
  ILS: "Israeli New Sheqel",
  INR: "Indian Rupee",
  IQD: "Iraqi Dinar",
  IRR: "Iranian Rial",
  ISK: "Icelandic Krona",
  JMD: "Jamaican Dollar",
  JOD: "Jordanian Dinar",
  JPY: "Japanese Yen",
  KES: "Kenyan Shilling",
  KGS: "Kyrgystani Som",
  KHR: "Cambodian Riel",
  KMF: "Comorian Franc",
  KPW: "North Korean Won",
  KRW: "South Korean Won",
  KWD: "Kuwaiti Dinar",
  KYD: "Caymanian Dollar",
  KZT: "Kazakhstani Tenge",
  LAK: "Laotian Kip",
  LBP: "Lebanese Pound",
  LKR: "Sri Lankan Rupee",
  LRD: "Liberian Dollar",
  LSL: "Basotho Maloti",
  LYD: "Libyan Dinar",
  MAD: "Moroccan Dirham",
  MDL: "Moldovan Leu",
  MGA: "Malagasy Ariary",
  MKD: "Macedonian Denar",
  MMK: "Myanma Kyat",
  MNT: "Mongolian Tugrik",
  MOP: "Macanese Pataca",
  MRU: "Mauritanian Ouguiya",
  MUR: "Mauritian Rupee",
  MVR: "Maldivian Rufiyaa",
  MWK: "Malawian Kwacha",
  MXN: "Mexican Peso",
  MYR: "Malaysian Ringgit",
  MZN: "Mozambican Metical",
  NAD: "Namibian Dollar",
  NGN: "Nigerian Naira",
  NOK: "Norwegian Krone",
  NPR: "Nepalese Rupee",
  NZD: "New Zealand Dollar",
  OMR: "Omani Rial",
  PAB: "Panamanian Balboa",
  PEN: "Peruvian Nuevo Sol",
  PGK: "Papua New Guinean Kina",
  PHP: "Philippine Peso",
  PKR: "Pakistani Rupee",
  PLN: "Polish Zloty",
  PYG: "Paraguayan Guarani",
  QAR: "Qatari Rial",
  RON: "Romanian Leu",
  RSD: "Serbian Dinar",
  RUB: "Russian Ruble",
  RWF: "Rwandan Franc",
  SAR: "Saudi Arabian Riyal",
  SCR: "Seychellois Rupee",
  SDG: "Sudanese Pound",
  SEK: "Swedish Krona",
  SGD: "Singapore Dollar",
  SHP: "Saint Helena Pound",
  SLL: "Sierra Leonean Leone",
  SOS: "Somali Shilling",
  SRD: "Surinamese Dollar",
  SYP: "Syrian Pound",
  SZL: "Swazi Emalangeni",
  THB: "Thai Baht",
  TJS: "Tajikistani Somoni",
  TMT: "Turkmenistani Manat",
  TND: "Tunisian Dinar",
  TOP: "Tongan Pa'anga",
  TRY: "Turkish Lira",
  TTD: "Trinidad and Tobago Dollar",
  TWD: "Taiwan New Dollar",
  TZS: "Tanzanian Shilling",
  UAH: "Ukrainian Hryvnia",
  UGX: "Ugandan Shilling",
  USD: "United States Dollar",
  UYU: "Uruguayan Peso",
  UZS: "Uzbekistan Som",
  VND: "Vietnamese Dong",
  VUV: "Ni-Vanuatu Vatu",
  WST: "Samoan Tala",
  XAF: "CFA Franc BEAC",
  XCD: "East Caribbean Dollar",
  XDR: "Special Drawing Rights",
  XOF: "CFA Franc BCEAO",
  XPF: "CFP Franc",
  YER: "Yemeni Rial",
  ZAR: "South African Rand",
  ZMW: "Zambian Kwacha",
};

// country keys  (ex: AED, EGP)
const countryKeys = Object.keys(COUNTRY_NAMES);
// console.log(countryKeys);

// Country names  (ex: united arab emirates)
const countryNames = Object.values(COUNTRY_NAMES);
// console.log(countryNames);

// fill-in from select and to select
countryKeys.map((k) => {
  const resultSelect = `<option value=${k}>${k} || ${COUNTRY_NAMES[k]}</option>`;
  myFromSelect.innerHTML += resultSelect;
  myToSelect.innerHTML += resultSelect;
});

// from select onchange event
myFromSelect.addEventListener("change", () => {
  // console.log("change from select");
  const selectValue = myFromSelect.value.slice(0, 2);
  // image
  const img = `<img src=https://flagsapi.com/${selectValue}/shiny/32.png>`;
  // image div
  myFlageImage.innerHTML = img;
});

// to select onchange event
myToSelect.addEventListener("change", () => {
  // console.log("change to select");
  const selectValue = myToSelect.value.slice(0, 2);
  // image
  const img = `<img src=https://flagsapi.com/${selectValue}/shiny/32.png>`;
  // image div
  myToSelectFlageImg.innerHTML = img;
});

// convert Event
myConvertBtn.addEventListener("click", () => {
  // console.log("convert");
  fetch(
    `https://v6.exchangerate-api.com/v6/4d8d548089953ad52dac91b2/latest/${myFromSelect.value}`
  )
    .then((res) => res.json())
    .then(
      (data) =>
        (myResult.innerHTML = `${
          myResultInput.value == "" ? 1 : myResultInput.value
        } ${myFromSelect.value} = ${myResultInput.value == "" ? (1 * data.conversion_rates[myToSelect.value]).toFixed(2) : (myResultInput.value * data.conversion_rates[myToSelect.value]).toFixed(2)} ${myToSelect.value}`)
    );
});

// revert event
myRevBtn.addEventListener("click", ()=>{
    // console.log("revert");
    const myToFlage = myToSelectFlageImg.innerHTML;
    const myFromFlage = myFlageImage.innerHTML;
    const myTo = myToSelect.value
    const myFrom = myFromSelect.value
    myToSelectFlageImg.innerHTML = myFromFlage;
    myFlageImage.innerHTML = myToFlage;
    myFromSelect.value = myTo;
    myToSelect.value = myFrom;
    fetch(
        `https://v6.exchangerate-api.com/v6/4d8d548089953ad52dac91b2/latest/${myFromSelect.value}`
      )
        .then((res) => res.json())
        .then(
          (data) =>
            (myResult.innerHTML = `${
              myResultInput.value == "" ? 1 : myResultInput.value
            } ${myFromSelect.value} = ${myResultInput.value == "" ? (1 * data.conversion_rates[myToSelect.value]).toFixed(2) : (myResultInput.value * data.conversion_rates[myToSelect.value]).toFixed(2)} ${myToSelect.value}`)
        );
})

