/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  ERC20,
  ERC20Interface,
} from "../../../contracts/ZksToken.sol/ERC20";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x00020000000000020002000000000002000100000001035500000060011002700000012a0010019d0000008001000039000000400010043f0000000101200190000000370000c13d0000000001000031000000040110008c000001130000413d0000000101000367000000000101043b000000e0011002700000012e0210009c000000820000613d0000012f0210009c000000970000613d000001300210009c000000a40000613d000001310210009c000000b30000613d000001320210009c000000c00000613d000001330210009c000000cc0000613d000001340210009c000000d90000613d000001350210009c000000e70000613d000001360210009c000000f90000613d000001370210009c000001060000613d000001380110009c000001130000c13d0000000001000416000000000110004c000001130000c13d000000000100003104a3024a0000040f000000030100003904a302ee0000040f000200000001001d000000000100001904a302d90000040f000100000001001d000000020200002904a302c10000040f000000010300002900000000023100490000000001030019000000000300001904a301270000040f0000000001000416000000000110004c000001130000c13d0000000001000031000200000001001d04a301750000040f00000002080000290000001f0280018f0000000103000367000000000701001900000005018002720000004c0000613d000000000400001900000005054002100000000006570019000000000553034f000000000505043b00000000005604350000000104400039000000000514004b000000440000413d000000000420004c0000005b0000613d0000000501100210000000000313034f00000000011700190000000302200210000000000401043300000000042401cf000000000424022f000000000303043b0000010002200089000000000323022f00000000022301cf000000000242019f00000000002104350000012b01000041000000400280008c000000000200001900000000020140190000012b03800197000000000430004c000000000100a0190000012b0330009c000000000102c019000000000110004c000001130000c13d00000000010704330000012c0210009c000001130000213d00000000028700190000000001710019000100000002001d000200000007001d04a3013a0000040f00000002030000290000000004010019000000200130003900000000010104330000012c0210009c000001130000213d00000000013100190000000102000029000200000004001d04a3013a0000040f0000000002010019000000020100002904a3018a0000040f000000200100003900000100001004430000012000000443000001000100003900000040020000390000012d0300004104a301270000040f0000000001000416000000000110004c000001130000c13d000000000100003104a302730000040f0000000003010019000200000002001d0000000101000039000000000203001904a304930000040f000000020200002904a304930000040f000000000101041a000200000001001d000000000100001904a302d90000040f000000020200002900000000002104350000002002000039000000000300001904a301270000040f0000000001000416000000000110004c000001130000c13d000000000100003104a302a90000040f04a303ff0000040f000000000100001904a302d90000040f000000010200003900000000002104350000002002000039000000000300001904a301270000040f0000000001000416000000000110004c000001130000c13d000000000100003104a3024a0000040f0000000201000039000000000101041a000200000001001d000000000100001904a302d90000040f000000020200002900000000002104350000002002000039000000000300001904a301270000040f0000000001000416000000000110004c000001130000c13d000000000100003104a3028d0000040f04a304590000040f000000000100001904a302d90000040f000000010200003900000000002104350000002002000039000000000300001904a301270000040f0000000001000416000000000110004c000001130000c13d000000000100003104a3024a0000040f000000000100001904a302d90000040f000000120200003900000000002104350000002002000039000000000300001904a301270000040f0000000001000416000000000110004c000001130000c13d000000000100003104a302a90000040f04a304360000040f000000000100001904a302d90000040f000000010200003900000000002104350000002002000039000000000300001904a301270000040f0000000001000416000000000110004c000001130000c13d000000000100003104a3025d0000040f04a304040000040f000200000001001d000000000100001904a302d90000040f000000020200002900000000002104350000002002000039000000000300001904a301270000040f0000000001000416000000000110004c000001130000c13d000000000100003104a3024a0000040f000000040100003904a302ee0000040f000200000001001d000000000100001904a302d90000040f000100000001001d000000020200002904a302c10000040f000000010300002900000000023100490000000001030019000000000300001904a301270000040f0000000001000416000000000110004c000001130000c13d000000000100003104a302a90000040f04a3040b0000040f000000000100001904a302d90000040f000000010200003900000000002104350000002002000039000000000300001904a301270000040f0000000001000416000000000110004c000001130000c13d000000000100003104a302a90000040f04a3048e0000040f000000000100001904a302d90000040f000000010200003900000000002104350000002002000039000000000300001904a301270000040f0000000001000019000000000200001904a301310000040f0000012a0200004100000000030004140000012a0430009c0000000002034019000000c002200210000000600110021000000000012100190000013901100041000080100200003904a3049e0000040f0000000102200190000001240000613d000000000101043b000000000001042d0000000001000019000000000200001904a301310000040f0000012a040000410000012a0510009c0000000001048019000000400110021000000000013100190000012a0320009c000000000204801900000060022002100000000001210019000004a40001042e0000012a030000410000012a0420009c00000000020380190000012a0410009c000000000103801900000040011002100000006002200210000000000112019f000004a50001043000030000000000020000001f051000390000012b07000041000000000325004b000000000300001900000000030740190000012b042001970000012b06500197000000000546004b00000000050000190000000005072019000000000446013f0000012b0440009c0000000003056019000000000330004c0000016b0000613d000300000002001d00000000030104330000013a0230009c000200000001001d0000016e0000813d0000003f01300039000000200200008a000000000121016f000100000003001d04a301750000040f000000010600002900000000006104350000000205000029000000000265001900000020022000390000000303000029000000000232004b0000016b0000213d0000000002000019000000000362004b000001650000813d000000200220003900000000031200190000000004520019000000000404043300000000004304350000015d0000013d000000000262004b0000016a0000a13d000000000216001900000020022000390000000000020435000000000001042d0000000001000019000000000200001904a301310000040f0000013b0100004100000000001004350000004101000039000000040010043f0000002402000039000000000100001904a301310000040f0000001f01100039000000200200008a000000000221016f000000400100043d0000000002210019000000000312004b000000000300001900000001030040390000012c0420009c000001830000213d0000000103300190000001830000c13d000000400020043f000000000001042d0000013b0100004100000000001004350000004101000039000000040010043f0000002402000039000000000100001904a301310000040f0005000000000002000500000002001d000200000001001d0000000001010433000400000001001d0000013a0110009c000002310000813d0000000301000039000300000001001d000000000101041a04a302380000040f00000000040100190000000407000029000000000174019f000000200110008c0000000001000019000001a20000413d000000030100002900000000001004350000002001000039000100000004001d04a301160000040f000000010400002900000004070000290000001f0240008c00000005060000290000000208000029000001b50000213d0000001f0270008c000001c40000a13d000000200200008a000000000227016f00000020030000390000000004000019000000000524004b0000000005830019000001d00000813d0000000005050433000000000051041b000000200440003900000020033000390000000101100039000001ac0000013d0000001f027000390000013c022001970000000502200270000000200370008c000000000302001900000000030040190000001f02400039000000050220027000000000022100190000000003310019000000000423004b000001a60000813d000000000003041b0000000103300039000001bf0000013d000000000170004c0000000001000019000001c90000613d000000200180003900000000010104330000000302700210000000010300008a000000000223022f000000000232013f000000000221016f0000000101700210000001dc0000013d000000000272004b000001da0000813d0000000302700210000000f80220018f000000010300008a000000000223022f000000000232013f0000000003050433000000000223016f000000000021041b00000001010000390000000102700210000000000112019f0000000302000029000000000012041b0000000001060433000400000001001d0000012c0110009c000002310000213d0000000401000039000300000001001d000000000101041a04a302380000040f00000000040100190000000407000029000000000174019f000000200110008c0000000001000019000001f40000413d000000030100002900000000001004350000002001000039000200000004001d04a301160000040f000000020400002900000004070000290000001f0240008c0000000506000029000002060000213d0000001f0270008c000002150000a13d000000200200008a000000000227016f00000020030000390000000004000019000000000524004b0000000005630019000002210000813d0000000005050433000000000051041b000000200440003900000020033000390000000101100039000001fd0000013d0000001f027000390000013c022001970000000502200270000000200370008c000000000302001900000000030040190000001f02400039000000050220027000000000022100190000000003310019000000000423004b000001f70000813d000000000003041b0000000103300039000002100000013d000000000170004c00000000010000190000021a0000613d000000200160003900000000010104330000000302700210000000010300008a000000000223022f000000000232013f000000000221016f00000001017002100000022d0000013d000000000272004b0000022b0000813d0000000302700210000000f80220018f000000010300008a000000000223022f000000000232013f0000000003050433000000000223016f000000000021041b00000001010000390000000102700210000000000112019f0000000302000029000000000012041b000000000001042d0000013b0100004100000000001004350000004101000039000000040010043f0000002402000039000000000100001904a301310000040f000000010210019000000001011002700000007f0310018f00000000010360190000001f0310008c00000000030000190000000103002039000000010330018f000000000232004b000002430000c13d000000000001042d0000013b0100004100000000001004350000002201000039000000040010043f0000002402000039000000000100001904a301310000040f000000040110008a000000010200008a0000012b03000041000000000221004b000000000200001900000000020320190000012b011001970000012b0410009c00000000030080190000012b011001670000012b0110009c00000000010200190000000001036019000000000110004c0000025a0000613d000000000001042d0000000001000019000000000200001904a301310000040f000000040110008a0000012b020000410000001f0310008c000000000300001900000000030220190000012b01100197000000000410004c00000000020080190000012b0110009c00000000010300190000000001026019000000000110004c000002700000613d00000004010000390000000101100367000000000101043b0000013d0210009c000002700000213d000000000001042d0000000001000019000000000200001904a301310000040f000000040110008a0000012b020000410000003f0310008c000000000300001900000000030220190000012b01100197000000000410004c00000000020080190000012b0110009c00000000010300190000000001026019000000000110004c0000028a0000613d00000001020003670000000401200370000000000101043b0000013d0310009c0000028a0000213d0000002402200370000000000202043b0000013d0320009c0000028a0000213d000000000001042d0000000001000019000000000200001904a301310000040f000000040110008a0000012b020000410000005f0310008c000000000300001900000000030220190000012b01100197000000000410004c00000000020080190000012b0110009c00000000010300190000000001026019000000000110004c000002a60000613d00000001030003670000000401300370000000000101043b0000013d0210009c000002a60000213d0000002402300370000000000202043b0000013d0420009c000002a60000213d0000004403300370000000000303043b000000000001042d0000000001000019000000000200001904a301310000040f000000040110008a0000012b020000410000003f0310008c000000000300001900000000030220190000012b01100197000000000410004c00000000020080190000012b0110009c00000000010300190000000001026019000000000110004c000002be0000613d00000001020003670000000401200370000000000101043b0000013d0310009c000002be0000213d0000002402200370000000000202043b000000000001042d0000000001000019000000000200001904a301310000040f0000002003000039000000000031043500000000030204330000002004100039000000000034043500000040011000390000000004000019000000000534004b000002d00000813d00000000054100190000002004400039000000000624001900000000060604330000000000650435000002c80000013d000000000234004b000002d40000a13d000000000231001900000000000204350000001f02300039000000200300008a000000000232016f0000000001210019000000000001042d0000001f01100039000000200200008a000000000221016f000000400100043d0000000002210019000000000312004b000000000300001900000001030040390000012c0420009c000002e70000213d0000000103300190000002e70000c13d000000400020043f000000000001042d0000013b0100004100000000001004350000004101000039000000040010043f0000002402000039000000000100001904a301310000040f0003000000000002000000000201041a000000010320019000000001042002700000007f0540018f000000000604001900000000060560190000001f0460008c00000000040000190000000104002039000000010440018f000000000443004b000003240000c13d000000400500043d00000000006504350000002004500039000000000330004c000003120000613d00000000001004350000002001000039000300000005001d000200000006001d000100000004001d04a301160000040f0000000107000029000000020600002900000003050000290000000002000019000000000362004b000003160000813d0000000003720019000000000401041a0000000000430435000000200220003900000001011000390000030a0000013d000001000100008a000000000112016f000000000014043500000020020000390000003f01200039000000200200008a000000000221016f0000000001520019000000000221004b000000000200001900000001020040390000012c0310009c0000032b0000213d00000001022001900000032b0000c13d000000400010043f0000000001050019000000000001042d0000013b0100004100000000001004350000002201000039000000040010043f0000002402000039000000000100001904a301310000040f0000013b0100004100000000001004350000004101000039000000040010043f0000002402000039000000000100001904a301310000040f00050000000000020000013d041001980000035d0000613d000300000003001d000400000001001d000500000002001d0000013d01200198000200000001001d0000036e0000613d00000000004004350000000101000039000000200010043f0000004001000039000100000001001d04a301160000040f00000002020000290000000000200435000000200010043f000000010100002904a301160000040f0000000302000029000000000021041b000000400100043d00000000002104350000012a0200004100000000030004140000012a0430009c00000000030280190000012a0410009c00000000010280190000004001100210000000c002300210000000000112019f0000013e011001c70000800d0200003900000003030000390000013f040000410000000405000029000000050600002904a304990000040f00000001012001900000037f0000613d000000000001042d000000400100043d00000064021000390000014303000041000000000032043500000044021000390000014403000041000000000032043500000024021000390000002403000039000000000032043500000142020000410000000000210435000000040210003900000020030000390000000000320435000000840200003904a301310000040f000000400100043d00000064021000390000014003000041000000000032043500000044021000390000014103000041000000000032043500000024021000390000002203000039000000000032043500000142020000410000000000210435000000040210003900000020030000390000000000320435000000840200003904a301310000040f0000000001000019000000000200001904a301310000040f00060000000000020000013d04100198000003c20000613d000600000003001d000100000001001d000200000002001d0000013d01200198000500000001001d000003d30000613d0000000000400435000000200000043f0000004001000039000300000004001d04a301160000040f000000000201041a0000000601000029000400000002001d000000000112004b000003e40000413d00000003010000290000000000100435000000200000043f0000004001000039000300000001001d04a301160000040f000000060300002900000004020000290000000002320049000000000021041b00000005010000290000000000100435000000200000043f000000030100002904a301160000040f000000010200008a0000000604000029000000000324013f000000000201041a000000000332004b0000000003040019000003f50000213d0000000002320019000000000021041b000000400100043d00000000003104350000012a0200004100000000030004140000012a0430009c00000000030280190000012a0410009c00000000010280190000004001100210000000c002300210000000000112019f0000013e011001c70000800d02000039000000030300003900000145040000410000000105000029000000020600002904a304990000040f0000000101200190000003fc0000613d000000000001042d000000400100043d00000064021000390000014a03000041000000000032043500000044021000390000014b03000041000000000032043500000024021000390000002503000039000000000032043500000142020000410000000000210435000000040210003900000020030000390000000000320435000000840200003904a301310000040f000000400100043d00000064021000390000014803000041000000000032043500000044021000390000014903000041000000000032043500000024021000390000002303000039000000000032043500000142020000410000000000210435000000040210003900000020030000390000000000320435000000840200003904a301310000040f000000400100043d00000064021000390000014603000041000000000032043500000044021000390000014703000041000000000032043500000024021000390000002603000039000000000032043500000142020000410000000000210435000000040210003900000020030000390000000000320435000000840200003904a301310000040f0000013b0100004100000000001004350000001101000039000000040010043f0000002402000039000000000100001904a301310000040f0000000001000019000000000200001904a301310000040f00000000030200190000000002010019000000000100041104a303320000040f000000000001042d0000013d011001970000000000100435000000200000043f000000400100003904a301160000040f000000000101041a000000000001042d0004000000000002000300000002001d000400000001001d0000000001000411000100000001001d00000000001004350000000101000039000000200010043f0000004001000039000200000001001d04a301160000040f00000004020000290000013d022001970000000000200435000000200010043f000000020100002904a301160000040f0000000303000029000000000101041a000000000231004b000004250000413d00000000033100490000000101000029000000040200002904a303320000040f000000000001042d000000400100043d00000064021000390000014c03000041000000000032043500000044021000390000014d03000041000000000032043500000024021000390000002503000039000000000032043500000142020000410000000000210435000000040210003900000020030000390000000000320435000000840200003904a301310000040f0004000000000002000300000002001d000400000001001d0000000001000411000100000001001d00000000001004350000000101000039000000200010043f0000004001000039000200000001001d04a301160000040f00000004020000290000013d022001970000000000200435000000200010043f000000020100002904a301160000040f0000000303000029000000010200008a000000000223013f000000000101041a000000000221004b000004520000213d00000000033100190000000101000029000000040200002904a303320000040f000000000001042d0000013b0100004100000000001004350000001101000039000000040010043f0000002402000039000000000100001904a301310000040f0005000000000002000500000003001d000200000002001d000400000001001d0000013d0110019700000000001004350000000101000039000000200010043f0000004001000039000300000001001d04a301160000040f0000000002000411000100000002001d0000013d022001970000000000200435000000200010043f000000030100002904a301160000040f000000000101041a000000010200008a000000000221004b000004780000613d00000004040000290000000502000029000000000221004b0000047d0000413d000000050200002900000000032100490000000001040019000000010200002904a303320000040f00000004010000290000000202000029000000050300002904a303820000040f000000000001042d000000400100043d00000064021000390000014e03000041000000000032043500000044021000390000014f03000041000000000032043500000024021000390000002803000039000000000032043500000142020000410000000000210435000000040210003900000020030000390000000000320435000000840200003904a301310000040f00000000030200190000000002010019000000000100041104a303820000040f000000000001042d0000013d022001970000000000200435000000200010043f000000400100003904a301160000040f000000000001042d0000049c002104210000000102000039000000000001042d00000000020000190000049b0000013d000004a1002104230000000102000039000000000001042d0000000002000019000004a00000013d000004a300000432000004a40001042e000004a5000104300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ffffffff8000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ffffffffffffffff000000020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000dd62ed3e00000000000000000000000000000000000000000000000000000000095ea7b30000000000000000000000000000000000000000000000000000000018160ddd0000000000000000000000000000000000000000000000000000000023b872dd00000000000000000000000000000000000000000000000000000000313ce56700000000000000000000000000000000000000000000000000000000395093510000000000000000000000000000000000000000000000000000000070a082310000000000000000000000000000000000000000000000000000000095d89b4100000000000000000000000000000000000000000000000000000000a457c2d700000000000000000000000000000000000000000000000000000000a9059cbb0000000000000000000000000000000000000000000000000000000006fdde03020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000004e487b710000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ffffffffffffffffffffffffffffffe0000000000000000000000000ffffffffffffffffffffffffffffffffffffffff02000000000000000000000000000000000000200000000000000000000000008c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925737300000000000000000000000000000000000000000000000000000000000045524332303a20617070726f766520746f20746865207a65726f20616464726508c379a000000000000000000000000000000000000000000000000000000000726573730000000000000000000000000000000000000000000000000000000045524332303a20617070726f76652066726f6d20746865207a65726f20616464ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef616c616e6365000000000000000000000000000000000000000000000000000045524332303a207472616e7366657220616d6f756e7420657863656564732062657373000000000000000000000000000000000000000000000000000000000045524332303a207472616e7366657220746f20746865207a65726f2061646472647265737300000000000000000000000000000000000000000000000000000045524332303a207472616e736665722066726f6d20746865207a65726f206164207a65726f00000000000000000000000000000000000000000000000000000045524332303a2064656372656173656420616c6c6f77616e63652062656c6f776c6c6f77616e636500000000000000000000000000000000000000000000000045524332303a207472616e7366657220616d6f756e74206578636565647320610000000000000000000000000000000000000000000000000000000000000000";

type ERC20ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC20ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC20__factory extends ContractFactory {
  constructor(...args: ERC20ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    name_: PromiseOrValue<string>,
    symbol_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC20> {
    return super.deploy(name_, symbol_, overrides || {}) as Promise<ERC20>;
  }
  override getDeployTransaction(
    name_: PromiseOrValue<string>,
    symbol_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name_, symbol_, overrides || {});
  }
  override attach(address: string): ERC20 {
    return super.attach(address) as ERC20;
  }
  override connect(signer: Signer): ERC20__factory {
    return super.connect(signer) as ERC20__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC20Interface {
    return new utils.Interface(_abi) as ERC20Interface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ERC20 {
    return new Contract(address, _abi, signerOrProvider) as ERC20;
  }
}
