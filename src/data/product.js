const allProducts = [
  {
    id: 1,
    nama_product: "Samsung Galaxy S21",
    gambar_product:
      "https://imgsrv2.voi.id/033b4zx2G8g7HREWbCKSyNMV1mpRJWcB8khPYAlaijQ/auto/1200/675/sm/1/bG9jYWw6Ly8vcHVibGlzaGVycy8yNjg2OS8yMDIxMDExNDEzMjgtbWFpbi5jcm9wcGVkXzE2MTA2MDU3MDcuanBlZw.jpg",
    kategori: "handphone",
    deskripsi: "Handphone Samsung terbaru dengan kamera canggih.",
    harga: 12000000,
  },
  {
    id: 2,
    nama_product: "iPhone 13 Pro",
    gambar_product:
      "https://fin.co.id/upload/f2c6386de39d7d4cc5cab1c74fdf804b.jpeg",
    kategori: "handphone",
    deskripsi: "Handphone iPhone terbaru dengan layar OLED.",
    harga: 15000000,
  },
  {
    id: 3,
    nama_product: "Dell XPS 13",
    gambar_product:
      "https://cdn.vox-cdn.com/thumbor/w04N5QkSampQOIatmlLAGplofws=/0x0:2040x1360/2400x1356/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/24432609/236524_Dell_XPS_13_AKrales_0016.jpg",
    kategori: "laptop",
    deskripsi: "Laptop Dell dengan prosesor Intel Core i7.",
    harga: 18000000,
  },
  {
    id: 4,
    nama_product: "MacBook Air",
    gambar_product:
      "https://cdn.eraspace.com/pub/media/mageplaza/blog/post/m/a/macbookairm2-gambar_utama.jpg",
    kategori: "laptop",
    deskripsi: "Laptop MacBook ringan dan tipis dengan M1 chip.",
    harga: 20000000,
  },
  {
    id: 5,
    nama_product: "HP Pavilion",
    gambar_product:
      "https://gadgetren.com/wp-content/uploads/2022/04/HP-Pavilion-14-ec0008AU-6-700x525.jpg",
    kategori: "laptop",
    deskripsi: "Laptop HP dengan layar sentuh dan AMD Ryzen.",
    harga: 16000000,
  },
  {
    id: 6,
    nama_product: "PC Gaming Alienware",
    gambar_product:
      "https://images.hothardware.com/contentimages/article/3285/content/small_alienware-aurora-r15-with-keyboard-mouse-monitor.jpg",
    kategori: "komputer",
    deskripsi: "Komputer gaming Alienware dengan kartu grafis NVIDIA.",
    harga: 25000000,
  },
  {
    id: 7,
    nama_product: "iMac 27-inch",
    gambar_product:
      "https://cdn.vox-cdn.com/thumbor/PCYktUAEETrt1V0hIITkfoEzNyc=/0x0:2040x1360/1400x1050/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/21700151/DSC01539.jpg",
    kategori: "komputer",
    deskripsi: "Komputer iMac dengan layar Retina 5K.",
    harga: 22000000,
  },
  {
    id: 8,
    nama_product: "Asus ROG Strix",
    gambar_product:
      "https://asset-a.grid.id/crop/0x0:0x0/x/photo/2020/11/17/2944198047.jpg",
    kategori: "komputer",
    deskripsi: "Komputer gaming Asus ROG dengan prosesor Intel Core i9.",
    harga: 28000000,
  },
  {
    id: 9,
    nama_product: "Google Pixel 6",
    gambar_product:
      "https://hips.hearstapps.com/hmg-prod/images/google-pixel-6-pro-review-1635280722.jpg?crop=0.5xw:1xh;center,top&resize=640:*",
    kategori: "handphone",
    deskripsi: "Handphone Google Pixel dengan kamera AI.",
    harga: 13000000,
  },
  {
    id: 10,
    nama_product: "Lenovo ThinkPad X1 Carbon",
    gambar_product:
      "https://www.harapanrakyat.com/wp-content/uploads/2020/07/11.-Lenovo-ThinkPad-X1-Carbon-Untuk-Menunjang-Kinerja-Profesional.jpg",
    kategori: "laptop",
    deskripsi: "Laptop Lenovo dengan layar 4K dan keyboard ergonomis.",
    harga: 22000000,
  },
  {
    id: 11,
    nama_product: "Custom Gaming PC",
    gambar_product:
      "https://5.imimg.com/data5/SELLER/Default/2022/8/JZ/DV/WI/74097097/ultimate-gaming-computer-pc-custom-hardline-liqu-id-cooled-gaming-pc-i9-11900k-rtx-3080-64gb-ram-rgb-500x500.jpg",
    kategori: "komputer",
    deskripsi: "Komputer gaming kustom dengan berbagai pilihan komponen.",
    harga: 30000000,
  },
  {
    id: 12,
    nama_product: "OnePlus 9",
    gambar_product:
      "https://s.yimg.com/uu/api/res/1.2/y4mXr6DXh3ZbrkWHQT2RbQ--~B/Zmk9ZmlsbDtoPTEzOTA7dz0yNDcwO2FwcGlkPXl0YWNoeW9u/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2021-03/74a70b90-8b93-11eb-97ff-131bee72ccf2.cf.jpg",
    kategori: "handphone",
    deskripsi: "Handphone OnePlus dengan layar Fluid AMOLED.",
    harga: 14000000,
  },
  {
    id: 13,
    nama_product: "Acer Predator Helios 300",
    gambar_product:
      "https://www.acerid.com/wp-content/uploads/2021/05/helios-300-Predator-Helios-300-RTX-3070-Cara-Keren-Main-Game-Jadi-Lebih-Maksimal.jpg",
    kategori: "laptop",
    deskripsi: "Laptop gaming Acer Predator dengan NVIDIA GeForce GTX.",
    harga: 17000000,
  },
  {
    id: 14,
    nama_product: "HP Envy x360",
    gambar_product:
      "https://www.jagatreview.com/wp-content/uploads/2022/09/HP-Envy-x360-13-bf0042TU-2026.png",
    kategori: "laptop",
    deskripsi: "Laptop HP Envy dengan layar sentuh dan AMD Ryzen 7.",
    harga: 19000000,
  },
  {
    id: 15,
    nama_product: "Custom Workstation PC",
    gambar_product: "https://cdn.originpc.com/img/gaming-desktops-2.jpg",
    kategori: "komputer",
    deskripsi: "Komputer workstation kustom untuk tugas-tugas berat.",
    harga: 35000000,
  },
  {
    id: 16,
    nama_product: "Xiaomi Mi 11",
    gambar_product:
      "https://img.tek.id/img/content/2021/06/11/41763/menjajal-xiaomi-mi-11-lite-yang-akan-rilis-di-indonesia-vkAH9eXdF3.jpg",
    kategori: "handphone",
    deskripsi: "Handphone Xiaomi Mi dengan prosesor Snapdragon.",
    harga: 11000000,
  },
  {
    id: 17,
    nama_product: "Microsoft Surface Laptop 4",
    gambar_product:
      "https://pemmzchannel.com/wp-content/uploads/2021/04/Surface-Laptop-4_2.jpg",
    kategori: "laptop",
    deskripsi:
      "Laptop Microsoft dengan layar PixelSense dan pilihan Intel/AMD.",
    harga: 24000000,
  },
  {
    id: 18,
    nama_product: "Custom Home Theater PC",
    gambar_product:
      "https://i.pinimg.com/736x/b2/75/29/b27529c7778d6ae1d2bd3eb9f0718229.jpg",
    kategori: "komputer",
    deskripsi: "Komputer khusus untuk hiburan di rumah.",
    harga: 28000000,
  },
  {
    id: 19,
    nama_product: "Sony Xperia 1 III",
    gambar_product:
      "https://asset.kompas.com/crops/9ALb0E5-QcspvzQfBAnpGwxuIcY=/103x0:1246x762/750x500/data/photo/2021/04/15/6077b931cb572.png",
    kategori: "handphone",
    deskripsi: "Handphone Sony Xperia dengan layar 4K HDR OLED.",
    harga: 16000000,
  },
  {
    id: 20,
    nama_product: "Lenovo Yoga C940",
    gambar_product:
      "https://helios-i.mashable.com/imagery/articles/06qxhkR6EQBCBty1rYdCiiI/hero-image.fill.size_1200x1200.v1623388003.jpg",
    kategori: "laptop",
    deskripsi: "Laptop Lenovo Yoga dengan layar sentuh 2-in-1.",
    harga: 21000000,
  },
  {
    id: 21,
    nama_product: "HP Omen Gaming PC",
    gambar_product:
      "https://assets-prd.ignimgs.com/2023/04/07/hpomen2-1680892435458.jpg",
    kategori: "komputer",
    deskripsi: "Komputer gaming HP Omen dengan RGB lighting.",
    harga: 32000000,
  },
  {
    id: 22,
    nama_product: "Google Pixel 5a",
    gambar_product:
      "https://sarjanatua.com/wp-content/uploads/2023/06/pixel_5a_with_5g_cover83.png",
    kategori: "handphone",
    deskripsi: "Handphone Google Pixel 5a dengan kamera kualitas tinggi.",
    harga: 12500000,
  },
  {
    id: 23,
    nama_product: "Asus ZenBook Pro Duo",
    gambar_product:
      "https://images.tokopedia.net/img/cache/500-square/product-1/2019/12/18/4262763/4262763_67d392f2-2d7c-4c69-b24e-5b146ea6cba5_700_700",
    kategori: "laptop",
    deskripsi: "Laptop Asus ZenBook Pro Duo dengan layar OLED sekunder.",
    harga: 26000000,
  },
  {
    id: 24,
    nama_product: "Alienware Aurora Gaming PC",
    gambar_product: "https://i.ytimg.com/vi/M0gcYsemxEc/maxresdefault.jpg",
    kategori: "komputer",
    deskripsi: "Komputer gaming Alienware Aurora dengan prosesor AMD Ryzen.",
    harga: 29000000,
  },
  {
    id: 25,
    nama_product: "OnePlus 9 Pro",
    gambar_product:
      "https://fdn.gsmarena.com/imgroot/reviews/21/oneplus-9-pro/lifestyle/-1200w5/gsmarena_024.jpg",
    kategori: "handphone",
    deskripsi: "Handphone OnePlus 9 Pro dengan kamera Hasselblad.",
    harga: 16000000,
  },
  {
    id: 26,
    nama_product: "Apple MacBook Pro 16-inch",
    gambar_product:
      "https://www.itworks.id/wp-content/uploads/2020/03/150265-laptops-review-macbook-pro-16-inch-review-a-typing-power-house-image1-ga7cf05o2j.jpg",
    kategori: "laptop",
    deskripsi:
      "Laptop Apple MacBook Pro dengan layar besar dan performa tinggi.",
    harga: 28000000,
  },
  {
    id: 27,
    nama_product: "MSI Gaming Desktop",
    gambar_product:
      "https://storage-asset.msi.com/global/picture/news/2019/desktop/infinite-s9th-20190419-5.jpg",
    kategori: "komputer",
    deskripsi: "Komputer gaming MSI dengan kartu grafis NVIDIA RTX.",
    harga: 33000000,
  },
  {
    id: 28,
    nama_product: "Xiaomi Redmi Note 10",
    gambar_product:
      "https://dorangadget.com/wp-content/uploads/2021/03/xiaomi-redmi-note-10-vs-Xiaomi-redmi-note-10-pro-2.jpg",
    kategori: "handphone",
    deskripsi: "Handphone Xiaomi Redmi dengan baterai tahan lama.",
    harga: 9000000,
  },
  {
    id: 29,
    nama_product: "Acer Aspire 5",
    gambar_product:
      "https://www.jagatreview.com/wp-content/uploads/2022/12/Review-Acer-Aspire-5-Slim-2022-12-1280x720.jpg",
    kategori: "laptop",
    deskripsi: "Laptop Acer Aspire dengan harga terjangkau dan performa baik.",
    harga: 13000000,
  },
  {
    id: 30,
    nama_product: "Custom Streaming PC",
    gambar_product:
      "https://static.tweaktown.com/news/7/2/72052_01_insane-dual-system-custom-water-cooled-gaming_full.png",
    kategori: "komputer",
    deskripsi: "Komputer khusus untuk streaming dan konten kreatif.",
    harga: 27000000,
  },
];

export default allProducts;
