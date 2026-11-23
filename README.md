# GTA 6 Clipper — Lucia Bebas

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/Falken21/gta6-clipper-01-entry/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/Falken21/gta6-clipper-01-entry/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

Entri untuk kompetisi [gta6-clipper-01](https://make.fun/bounty/gta6-clipper-01) ($500):
memotong momen GTA 6 menjadi klip vertikal untuk YouTube.

## Klipnya

Klip vertikal 9:16 (1080x1920, ~26 detik) yang dipotong dari
**GTA VI Trailer 2** resmi Rockstar Games. Alurnya mengikuti busur
cerita yang paling emosional di trailer itu:

1. Menara penjara Leonida — Lucia masih di dalam.
2. Jason menjenguk ke penjara.
3. Lucia berjalan keluar dari gerbang penjara dan bertemu Jason lagi.
4. Penutup aksi: Lucia bertopeng tengkorak dalam sebuah heist.
5. Kartu akhir 6 detik: *"Make clips like this with AI and earn money
   on make.fun"* (+ `make.fun/bounty/gta6-clipper-01`).

Kenapa momen ini: "Lucia akhirnya bebas" adalah ketegangan cerita
Trailer 2 yang paling mudah dikenali penggemar — penjara, kebebasan,
reuni — lalu ditutup aksi heist supaya penonton bertahan sampai pitch
make.fun. Teks hook *"LUCIA IS FINALLY FREE"* tampil di awal klip.
Format mengikuti pola Shorts: video sumber di tengah dengan latar blur,
teks terbaca jelas, audio asli trailer.

## Cara menjalankan

Program `main.ts` (Node 22, standard library saja) hanya menyalin
`VIDEO.json` dari root repo ke direktori output — video dibaca langsung
oleh make.fun lewat YouTube Data API.

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`VIDEO.json` saat ini masih placeholder (`https://www.youtube.com/shorts/<id>`)
dan akan diisi alamat Shorts yang sebenarnya setelah klip diunggah ke
YouTube sebagai video publik.
