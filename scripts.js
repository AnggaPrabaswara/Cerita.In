// =====================
// Cerita.In Main Script
// =====================

// Data dummy konselor sebaya
const konselors = [
  {
    id: '1',
    nama: 'Melda Yogiani',
    foto: 'Foto/Melda.jpg',
    minat: 'Self-love, Kecemasan, Persahabatan',
    bio: 'Melda adalah konselor sebaya yang dikenal hangat dan penuh empati. Ia senang menjadi pendengar yang baik dan hadir untuk membantu remaja melewati berbagai tantangan hidup. Bagi Melda, setiap orang berhak merasa didengar, dimengerti, dan meraih kebahagiaan dalam hidupnya.',
    usia: 20,
    instagram: 'yogimelda'
  },
  {
    id: '2',
    nama: 'Angga Prabaswara',
    foto: 'Foto/Angga.jpg',
    minat: 'Motivasi, Keluarga, Percaya Diri',
    bio: 'Angga aktif di forum GenRe Buleleng dan senang berbagi tips seputar membangun kepercayaan diri. Ia dikenal sebagai pribadi yang ramah, mudah diajak bicara, dan selalu berusaha menjadi pendengar yang baik. Angga siap menjadi teman cerita yang suportif, hadir untuk mendengarkan tanpa menghakimi dan menemani dengan tulus.',
    usia: 20,
    instagram: 'ib_angga11'
  },
  {
    id: '3',
    nama: 'Listia Prasetya',
    foto: 'Foto/Listya.jpg',
    minat: 'Overthinking, Akademik, Hubungan',
    bio: 'Listia memahami betul tantangan yang sering dihadapi remaja, mulai dari tekanan akademik hingga masalah dalam hubungan pertemanan atau asmara. Ia ingin menjadi tempat bercerita yang nyaman dan membantu remaja menemukan solusi yang sehat, positif, dan sesuai dengan diri mereka sendiri.',
    usia: 19,
    instagram: 'listyaprastya_'
  }
];

// Data dummy artikel
const artikels = [
  {
    id: 'a1',
    judul: '6 Cara Mengatasi Stres yang Mudah dan Efektif',
    gambar: 'Foto/Mengelola Stress.jpeg',
    deskripsi: 'Stres adalah hal yang wajar, tapi bisa dikelola dengan langkah sederhana. Yuk, simak tipsnya!',
    link: 'https://www.alodokter.com/ternyata-tidak-sulit-mengatasi-stres'
  },
  {
    id: 'a2',
    judul: 'Mengenal Self-Love, Cara Mencintai Diri agar Lebih Bahagia',
    gambar: 'Foto/Self Love.jpeg',
    deskripsi: 'Self-love penting untuk kesehatan mental. Bagaimana cara memulainya? Baca selengkapnya di sini.',
    link: 'https://www.siloamhospitals.com/informasi-siloam/artikel/apa-itu-self-love'
  },
  {
    id: 'a3',
    judul: 'Mengenal Overthinking, Memahami Dampak, dan Cara Mengatasinya',
    gambar: 'Foto/OverThinking.jpeg',
    deskripsi: 'Overthinking sering dialami remaja. Berikut tips sederhana untuk mengatasinya.',
    link: 'https://www.idionline.org/article/mengenal-overthinking-memahami-dampak-dan-cara-mengatasinya'
  }
];

// Data quotes motivasi
const quotes = [
  'Kamu berharga, bahkan saat kamu merasa tidak demikian.',
  'Setiap hari adalah kesempatan baru untuk menjadi lebih baik.',
  'Jangan takut gagal, karena kegagalan adalah bagian dari proses belajar.',
  'Kamu tidak sendirian. Selalu ada harapan.',
  'Berani bicara, berani bahagia.',
  'Hargai dirimu, cintai prosesmu.',
  'Setiap masalah pasti ada jalan keluarnya, percayalah pada proses.',
  'Tidak apa-apa untuk beristirahat, kamu juga butuh waktu untuk dirimu sendiri.',
  'Kegagalan bukan akhir dari segalanya, tapi awal dari sesuatu yang baru.',
  'Jangan bandingkan dirimu dengan orang lain, perjalananmu unik dan berharga.',
  'Terkadang, hal kecil yang kamu lakukan hari ini bisa berdampak besar di masa depan.',
  'Kamu lebih kuat dari yang kamu kira.',
  'Tidak ada yang salah dengan meminta bantuan.',
  'Kesehatan mental sama pentingnya dengan kesehatan fisik.',
  'Setiap langkah kecil menuju kebaikan adalah kemenangan.',
  'Jadilah teman terbaik untuk dirimu sendiri.',
  'Kamu tidak harus sempurna untuk dicintai dan dihargai.',
  'Hari ini mungkin berat, tapi besok bisa jadi lebih baik.',
  'Jangan menyerah, kamu sudah sejauh ini.',
  'Kamu pantas mendapatkan kebahagiaan dan ketenangan.'
];
// Emoji lucu untuk quotes
const quotesEmojis = ['😺','😸','😻','😽','😹','😆','😎','🤩','😇','🥳','😋','😜','🤗','🦄','🐧','🐼','🐣','🦊','🐻','🐶','🐱','🐰','🐵','🦥','🦙','🦩','🦋','🌈','⭐','🍀','🍉','🍦','🍩','🍕','🍔','🍟','🍿','🎉','🎈','🎵','🎨','🧸'];
// Helper: ambil elemen by id
function $(id) {
  return document.getElementById(id);
}

// =====================
// Konselor List Page
// =====================
if (window.location.pathname.includes('konselor.html')) {
  const list = $("konselor-list");
  if (list) {
    list.innerHTML = konselors.map(k => `
      <div class="card-konselor fade-in">
        <img src="${k.foto}" alt="${k.nama}" class="card-img-konselor" loading="lazy">
        <div class="card-title-konselor">${k.nama}</div>
        <div class="card-minat">${k.minat}</div>
        <div class="card-bio">${k.bio}</div>
        <div class="card-btn-konselor"><button class="btn btn-secondary" onclick="lihatProfil('${k.id}')">Lihat Profil</button></div>
      </div>
    `).join('');
  }
}

// Fungsi untuk simpan id konselor ke localStorage dan redirect
function lihatProfil(id) {
  localStorage.setItem('konselorId', id);
  window.location.href = 'profil-konselor.html?id=' + id;
}

// =====================
// Konselor Profile Page
// =====================
if (window.location.pathname.includes('profil-konselor.html')) {
  const detail = $("profil-konselor-detail");
  let id = new URLSearchParams(window.location.search).get('id') || localStorage.getItem('konselorId');
  const konselor = konselors.find(k => k.id === id);
  // Dummy detail tambahan
  const pengalaman = {
    '1': 'Winner Putri Duta GenRe Undiksha 2024, RU I Duta GenRe Buleleng Putri 2025, Konselor Sebaya Forum Genre Buleleng.',
    '2': 'RU I Putra Duta GenRe Undiksha 2024, RU I Duta GenRe Buleleng Putra 2025.',
    '3': 'RU I Putri Duta GenRe Undiksha 2024, RU II Duta GenRe Buleleng Putri 2025.',
  };
  const testimoni = {
    '1': '“Melda sangat sabar dan selalu membuat setiap orang merasa didengar.”',
    '2': '“Angga selalu memberi motivasi yang membangun dan positif!”',
    '3': '“Listia siap membantu menghadapi tekanan sekolah dengan cara yang sehat.”',
  };
  const wa = {
    '1': '6289697251038',
    '2': '628873195039',
    '3': '6285738151143',
  };
  if (detail && konselor) {
    const pesanWA = `Halo ${konselor.nama}, saya ingin bercerita atau konsultasi seputar kesehatan mental. Apakah bisa membantu saya?`;
    detail.innerHTML = `
      <div class="profil-konselor-card fade-in">
        <img src="${konselor.foto}" alt="${konselor.nama}" class="profil-img" loading="lazy">
        <div class="profil-title">${konselor.nama}</div>
        <div class="profil-minat">Minat: ${konselor.minat}</div>
        <div class="profil-detail"><b>Usia:</b> ${konselor.usia} tahun</div>
        <div class="profil-bio">${konselor.bio}</div>
        <div class="profil-detail"><b>Pengalaman:</b> ${pengalaman[konselor.id]}</div>
        <div class="profil-ig-info">Instagram: <span class='profil-ig-username'>@${konselor.instagram}</span></div>
        <div class="profil-testimoni">${testimoni[konselor.id]}</div>
        <div class="profil-btn-group">
          <button class="btn btn-primary profil-btn" onclick="window.location.href='konselor.html'">Kembali</button>
          <a class="profil-wa" href="https://wa.me/${wa[konselor.id]}?text=${encodeURIComponent(pesanWA)}" target="_blank" rel="noopener">
            <svg viewBox="0 0 32 32"><path d="M16 3C9.373 3 4 8.373 4 15c0 2.637.86 5.08 2.36 7.09L4 29l7.18-2.31A12.93 12.93 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.98 0-3.91-.52-5.6-1.5l-.4-.23-4.32 1.39 1.41-4.19-.26-.42A9.93 9.93 0 0 1 6 15c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.07-7.75c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.62-.47-.16-.01-.35-.01-.54-.01-.19 0-.5.07-.76.36-.26.28-1 1-.97 2.43.03 1.43 1.03 2.81 1.18 3.01.14.2 2.03 3.1 4.93 4.22.69.3 1.23.48 1.65.61.69.22 1.32.19 1.82.12.56-.08 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z"/></svg>
            Cerita via WhatsApp
          </a>
        </div>
        <div class="profil-privasi">🔒 Cerita yang kamu bagikan bersifat <b>rahasia</b> dan tidak akan disebarluaskan. Konselor kami berkomitmen menjaga privasi dan kenyamananmu.</div>
      </div>
    `;
  } else if (detail) {
    detail.innerHTML = '<p>Konselor tidak ditemukan.</p>';
  }
}

// =====================
// Artikel & Tips Page
// =====================
if (window.location.pathname.includes('artikel.html')) {
  const list = $("artikel-list");
  if (list) {
    list.innerHTML = artikels.map(a => `
      <div class="card fade-in">
        <img src="${a.gambar}" alt="${a.judul}" class="card-img" style="width:100px;height:100px;border-radius:16px;object-fit:cover;">
        <div class="card-title">${a.judul}</div>
        <div class="card-desc">${a.deskripsi}</div>
        <a href="${a.link}" class="btn btn-secondary card-btn" target="_blank" rel="noopener">Baca Selengkapnya</a>
      </div>
    `).join('');
  }
}

// =====================
// Quotes Page
// =====================
if (window.location.pathname.includes('quotes.html')) {
  const quoteText = $("quote-text");
  const btn = $("new-quote-btn");
  const emoji = $("quotes-emoji");
  function tampilkanQuote() {
    const idx = Math.floor(Math.random() * quotes.length);
    const eidx = Math.floor(Math.random() * quotesEmojis.length);
    // Animasi keluar
    quoteText.style.opacity = 0;
    emoji.style.opacity = 0;
    setTimeout(() => {
      quoteText.textContent = quotes[idx];
      emoji.textContent = quotesEmojis[eidx];
      // Animasi masuk
      quoteText.classList.remove('quotes-text-anim');
      void quoteText.offsetWidth;
      quoteText.classList.add('quotes-text-anim');
      emoji.classList.remove('quotes-emoji-anim');
      void emoji.offsetWidth;
      emoji.classList.add('quotes-emoji-anim');
      quoteText.style.opacity = 1;
      emoji.style.opacity = 1;
    }, 180);
  }
  if (quoteText && btn && emoji) {
    tampilkanQuote();
    btn.onclick = () => {
      tampilkanQuote();
    };
  }
}

// =====================
// Animasi Scroll Ringan
// =====================
// Fade-in saat elemen masuk viewport
function handleScrollAnim() {
  const faders = document.querySelectorAll('.fade-in');
  const trigger = window.innerHeight * 0.92;
  faders.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < trigger) {
      el.style.animationPlayState = 'running';
    }
  });
}
window.addEventListener('scroll', handleScrollAnim);
window.addEventListener('DOMContentLoaded', handleScrollAnim); 