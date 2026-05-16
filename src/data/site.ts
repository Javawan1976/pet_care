export type PetType = "dog" | "cat";
export type SizeKey = "small" | "medium" | "large";
export type ServiceKey = "bath" | "spa" | "style" | "care";

export interface BookingSelection {
  pet: PetType;
  size: SizeKey;
  service: ServiceKey;
  petLabel: string;
  sizeLabel: string;
  serviceLabel: string;
  price: number;
  priceText: string;
}

export interface BookingFormPayload {
  owner: string;
  phone: string;
  date: string;
  time: string;
  note: string;
}

export const petOptions: Array<{ value: PetType; label: string }> = [
  { value: "dog", label: "狗狗" },
  { value: "cat", label: "猫咪" }
];

export const sizeOptions: Array<{ value: SizeKey; label: string }> = [
  { value: "small", label: "小型 / 10kg 内" },
  { value: "medium", label: "中型 / 10-25kg" },
  { value: "large", label: "大型 / 25kg 以上" }
];

export const serviceOptions: Array<{ value: ServiceKey; label: string }> = [
  { value: "bath", label: "基础洗护" },
  { value: "spa", label: "泡泡 SPA" },
  { value: "style", label: "精修造型" },
  { value: "care", label: "口腔耳爪护理" }
];

export const prices: Record<ServiceKey, Record<SizeKey | "cat", number>> = {
  bath: { small: 128, medium: 188, large: 268, cat: 168 },
  spa: { small: 198, medium: 288, large: 398, cat: 238 },
  style: { small: 258, medium: 368, large: 528, cat: 328 },
  care: { small: 68, medium: 88, large: 128, cat: 98 }
};

export const timeSlots = ["10:00-12:00", "12:00-15:00", "15:00-18:00", "18:00-21:00"];

export const services = [
  {
    icon: "ShowerHead",
    title: "基础洗护",
    copy: "深层清洁、护毛素、吹干梳顺、脚底毛和肛门腺基础处理。",
    duration: "60-90 分钟",
    price: "¥128 起"
  },
  {
    icon: "Scissors",
    title: "精修造型",
    copy: "按品种和日常习惯设计造型，保留可爱轮廓也方便打理。",
    duration: "120 分钟",
    price: "¥258 起"
  },
  {
    icon: "Sparkle",
    title: "泡泡 SPA",
    copy: "微泡浴、皮毛舒缓、局部打结护理，适合换毛季和敏感皮。",
    duration: "90 分钟",
    price: "¥198 起"
  },
  {
    icon: "ShieldCheck",
    title: "耳爪口腔",
    copy: "耳道清洁、指甲修剪、肉垫护理、口腔清新，做完更清爽。",
    duration: "30 分钟",
    price: "¥68 起"
  }
] as const;

export const carouselSlides = [
  {
    title: "前台接待与零售等候区",
    copy: "弧形木质前台、可视化洗护间和主人等候座椅，进店第一眼就能看到专业与安心。",
    image: "/assets/store-reception.png",
    alt: "高端宠物洗护店前台接待与零售等候区"
  },
  {
    title: "独立洗护水疗区",
    copy: "不锈钢升降浴缸、防滑地面和分区洗护设备，适合不同体型犬只安全清洁。",
    image: "/assets/store-bathing.png",
    alt: "高端宠物洗护店独立洗护水疗区"
  },
  {
    title: "低噪烘干与精修造型区",
    copy: "独立烘干舱、专业造型台和有序工具墙，猫犬分区等待，减少互相打扰。",
    image: "/assets/store-grooming.png",
    alt: "高端宠物洗护店低噪烘干与精修造型区"
  }
] as const;

export const careItems = [
  {
    icon: "ScanHeart",
    title: "入店状态检查",
    copy: "记录皮肤、耳朵、毛结和情绪状态，洗前先确认可护理范围。"
  },
  {
    icon: "Volume2",
    title: "低噪独立烘干",
    copy: "怕风、怕声响的宠物可使用慢速烘干箱和人工补吹组合。"
  },
  {
    icon: "MessageCircleHeart",
    title: "护理报告同步",
    copy: "完成后发送照片、护理记录和居家梳毛建议，方便持续照顾。"
  }
] as const;

export const serviceProofs = [
  {
    title: "泡泡 SPA",
    copy: "微泡浴包裹皮毛，搭配水疗设备和舒缓手法，适合换毛季、干燥毛质和敏感皮肤。",
    image: "/assets/service-spa.png",
    alt: "宠物在高端洗护店接受泡泡 SPA 水疗",
    tag: "深层舒缓",
    price: "¥198 起"
  },
  {
    title: "精修造型",
    copy: "按体型、脸型和日常梳毛习惯设计轮廓，剪刀、排梳和细节修饰耗时更长。",
    image: "/assets/service-styling.png",
    alt: "宠物在高端洗护店接受精修造型",
    tag: "专属轮廓",
    price: "¥258 起"
  },
  {
    title: "耳爪口腔护理",
    copy: "耳道、指甲、肉垫和口腔分项处理，工具独立消毒，降低异味和居家抓挠风险。",
    image: "/assets/service-care.png",
    alt: "宠物在高端洗护店接受耳爪口腔护理",
    tag: "细节护理",
    price: "¥68 起"
  }
] as const;

export const priceRows = [
  ["基础洗护", "¥128", "¥188-268"],
  ["泡泡 SPA", "¥198", "¥288-398"],
  ["精修造型", "¥258", "¥368-528"],
  ["耳爪口腔护理", "¥68", "¥88-128"],
  ["3 公里接送", "¥20", "¥30"]
] as const;

export const reviews = [
  {
    copy: "我家柯基很怕吹风，这次洗完没有炸毛也没有崩溃，回家还香了好几天。",
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=160&q=80",
    name: "布丁主人"
  },
  {
    copy: "猫咪洗护前会先摸状态，洗后还发了耳朵和指甲的照片，细节很让人放心。",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&q=80",
    name: "年糕主人"
  },
  {
    copy: "造型不是剪成统一模板，会问平时运动和梳毛频率，剪完很精神也好打理。",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80",
    name: "阿柴主人"
  }
] as const;

export const storeInfo = [
  { icon: "MapPin", label: "地址", value: "上海市长宁区虹桥路1889弄24号202室" },
  { icon: "Clock4", label: "营业时间", value: "周一至周日 10:00 - 21:00" },
  { icon: "PhoneCall", label: "电话", value: "400-618-0920" },
  { icon: "MessageCircle", label: "微信", value: "BubblePawSpa" }
] as const;

export const bookingPreparations = [
  { icon: "ClipboardCheck", copy: "按体型预留洗护台和护理时长" },
  { icon: "Sparkles", copy: "按服务准备香波、SPA 或造型工具" },
  { icon: "MessageCircleHeart", copy: "提前记录敏感皮、胆小、接送等备注" }
] as const;

export function getSelection(pet: PetType, size: SizeKey, service: ServiceKey): BookingSelection {
  const price = pet === "cat" ? prices[service].cat : prices[service][size];

  return {
    pet,
    size,
    service,
    petLabel: petOptions.find((option) => option.value === pet)?.label ?? pet,
    sizeLabel: sizeOptions.find((option) => option.value === size)?.label ?? size,
    serviceLabel: serviceOptions.find((option) => option.value === service)?.label ?? service,
    price,
    priceText: `¥${price}`
  };
}

export function todayIso(): string {
  const today = new Date();
  today.setMinutes(today.getMinutes() - today.getTimezoneOffset());
  return today.toISOString().slice(0, 10);
}
