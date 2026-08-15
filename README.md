# EURO SCHOOL landing page

EURO SCHOOL uchun responsiv, statik va Netlify'ga tayyor landing page.

## Eng ko'p o'zgartiriladigan ma'lumotlar

Telefon, ijtimoiy tarmoqlar, qabul holati va tadbir sanasi:

`app/site-config.ts`

Teskari sanoq `event.dateTime` qiymatidan ishlaydi. Masalan:

```ts
dateTime: "2026-08-18T09:00:00+05:00"
```

`+05:00` — Toshkent vaqt mintaqasi.

Asosiy sahifa matnlari va bo'limlari:

`app/page.tsx`

Ranglar, o'lchamlar va mobil dizayn:

`app/globals.css`

Rahbar yoki asoschi bo'limi uchun tayyor ma'lumot maydonlari `app/site-config.ts` ichida bor. Ma'lumotlar tayyor bo'lganda `leader.show` qiymatini `true` qilish va sahifada kerakli blokni yoqish mumkin.

## Lokal ishga tushirish

Node.js 22 yoki undan yangi versiya kerak.

```bash
npm install
npm run dev
```

## Tekshirish

```bash
npm run build
npm run lint
npm test
```

## Netlify'ga yuklash

Loyihani GitHub'ga joylang va Netlify'da `Import from Git` orqali ulang. `netlify.toml` build sozlamalarini avtomatik beradi:

- Build command: `npm run build`
- Publish directory: `dist/client`
- Node version: `22`

Yoki Netlify'ga qo'lda yuklash uchun avval `npm run build` buyrug'ini ishga tushirib, `dist/client` papkasini drag-and-drop qiling.
