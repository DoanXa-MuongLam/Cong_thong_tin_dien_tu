/**
 * CỔNG THÔNG TIN ĐIỆN TỬ ĐOÀN TNCS HỒ CHÍ MINH XÃ MƯỜNG LẦM, TỈNH SƠN LA
 * Logic Điều Hành & Tương Tác Số Toàn Diện
 * 
 * Các phân hệ:
 * 1. Điều khiển trợ năng (Data-saver, Cỡ chữ lớn)
 * 2. Menu di động 7 chuyên mục
 * 3. Dashboard chỉ số & Số liệu ấn tượng
 * 4. Hệ thống Tin tức & Đăng bài viết mới (bảo mật mật khẩu cán bộ)
 * 5. Cổng Đăng ký Hoạt động Tình nguyện & Xuất Thẻ Điện Tử (E-Badge)
 * 6. Giới thiệu Ban Chấp hành & Kho Biểu mẫu Đoàn vụ tải về
 * 7. Tập huấn Kỹ năng AI & Trợ lý tạo Prompt
 * 8. Giải pháp số & Kết nối Thanh niên xa quê (Xuất CSV/JSON)
 * 9. Sổ tay Tài liệu Chi đoàn 12 Tháng (T1-T11 có sẵn, T12 để trống)
 */

document.addEventListener("DOMContentLoaded", function () {
    initAccessibilityControls();
    initMobileNav();
    initDashboardStats();
    initNewsSection();
    initProofSection();
    initVolunteerSection();
    initOrganizationAndBCH();
    initYouthFormsSection();
    initAITrainingSection();
    initPromptGenerator();
    initDigitalSolutionsSection();
    initMonthlyActivitiesSection();
    initOpinionAndMailboxSection();
    initConnectFormAndAdmin();
    initOrganizationModal();
    initScrollSpy();
    checkProofUrlHash();
    checkNewsUrlHash();
    window.addEventListener("hashchange", function () {
        checkProofUrlHash();
        checkNewsUrlHash();
    });

    // Tự động kiểm tra và gắn cờ chống lỗi ảnh cho tất cả thẻ <img> trên trang
    document.querySelectorAll("img").forEach(img => {
        if (!img.getAttribute("onerror")) {
            img.setAttribute("onerror", "handleImgError(this)");
        }
        if (!img.hasAttribute("loading")) {
            img.setAttribute("loading", "lazy");
        }
    });
});

// ===================================================================
// HỆ THỐNG AUTO-FALLBACK ẢNH TÂY BẮC & THANH NIÊN SỐ (OFFLINE-READY)
// ===================================================================
const DEFAULT_NORTHWEST_FALLBACK_SVG = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="800" height="450">
  <defs>
    <linearGradient id="mlBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0054A6"/>
      <stop offset="55%" stop-color="#003B75"/>
      <stop offset="100%" stop-color="#091E3A"/>
    </linearGradient>
    <linearGradient id="mlGold" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FDE047"/>
      <stop offset="100%" stop-color="#EAB308"/>
    </linearGradient>
  </defs>
  <rect width="800" height="450" fill="url(#mlBg)"/>
  <!-- Dãy núi Tây Bắc trập trùng hùng vĩ -->
  <path d="M0 320 L130 235 L270 285 L440 185 L590 265 L710 205 L800 255 L800 450 L0 450 Z" fill="#002D5A" opacity="0.6"/>
  <path d="M0 355 L160 275 L330 325 L510 245 L670 315 L800 275 L800 450 L0 450 Z" fill="#002244" opacity="0.8"/>
  <path d="M0 395 L210 335 L430 375 L610 325 L800 365 L800 450 L0 450 Z" fill="#001730" opacity="0.95"/>
  <!-- Huy hiệu / Vòng tròn Đoàn Thanh niên & Sao vàng -->
  <circle cx="400" cy="130" r="55" fill="#FFFFFF" opacity="0.12"/>
  <circle cx="400" cy="130" r="45" fill="none" stroke="#EAB308" stroke-width="2.5" opacity="0.8" stroke-dasharray="6,3"/>
  <polygon points="400,98 408,119 430,119 412,132 419,153 400,140 381,153 388,132 370,119 392,119" fill="url(#mlGold)"/>
  <!-- Huy hiệu Thanh niên Tình nguyện Tây Bắc -->
  <rect x="210" y="195" width="380" height="32" rx="16" fill="#F37021" opacity="0.95"/>
  <text x="400" y="217" font-family="'Segoe UI', Arial, sans-serif" font-size="12" font-weight="800" fill="#FFFFFF" text-anchor="middle" letter-spacing="2">THANH NIÊN TÌNH NGUYỆN VÙNG CAO TÂY BẮC</text>
  <!-- Văn bản định danh chính thống -->
  <text x="400" y="265" font-family="'Segoe UI', Arial, sans-serif" font-size="20" font-weight="800" fill="#FFFFFF" text-anchor="middle" letter-spacing="2">ĐOÀN TNCS HỒ CHÍ MINH</text>
  <text x="400" y="295" font-family="'Segoe UI', Arial, sans-serif" font-size="16" font-weight="700" fill="#FDE047" text-anchor="middle" letter-spacing="3">XÃ MƯỜNG LẦM • TỈNH SƠN LA</text>
  <text x="400" y="325" font-family="'Segoe UI', Arial, sans-serif" font-size="13" font-weight="600" fill="#93C5FD" text-anchor="middle">Tiên phong • Bản lĩnh • Đoàn kết • Sáng tạo • Phát triển</text>
</svg>
`);

window.handleImgError = function(img) {
    if (!img) return;
    img.onerror = null;
    img.src = DEFAULT_NORTHWEST_FALLBACK_SVG;
    img.classList.add("img-fallback-applied");
};

// ===================================================================
// 1. ĐIỀU KHIỂN TRỢ NĂNG (TIẾT KIỆM DATA & CỠ CHỮ LỚN CHO BÀ CON)
// ===================================================================
function initAccessibilityControls() {
    const btnDataSaver = document.getElementById("toggle-data-saver");
    const btnFontZoom = document.getElementById("toggle-font-zoom");

    if (localStorage.getItem("muonglam_datasaver") === "true") {
        document.body.classList.add("data-saver");
        if (btnDataSaver) btnDataSaver.classList.add("active");
    }

    if (localStorage.getItem("muonglam_fontlarge") === "true") {
        document.body.classList.add("font-large");
        if (btnFontZoom) btnFontZoom.classList.add("active");
    }

    if (btnDataSaver) {
        btnDataSaver.addEventListener("click", function () {
            const isSaver = document.body.classList.toggle("data-saver");
            btnDataSaver.classList.toggle("active", isSaver);
            localStorage.setItem("muonglam_datasaver", isSaver);
            showToast(isSaver ? "Đã bật chế độ Tiết kiệm 3G/4G" : "Đã tắt chế độ Tiết kiệm");
        });
    }

    if (btnFontZoom) {
        btnFontZoom.addEventListener("click", function () {
            const isLarge = document.body.classList.toggle("font-large");
            btnFontZoom.classList.toggle("active", isLarge);
            localStorage.setItem("muonglam_fontlarge", isLarge);
            showToast(isLarge ? "Đã bật chế độ Cỡ chữ lớn dễ đọc" : "Đã chuyển về Cỡ chữ chuẩn");
        });
    }
}

// ===================================================================
// 2. MENU ĐIỀU HƯỚNG DI ĐỘNG (MOBILE NAVIGATION)
// ===================================================================
function initMobileNav() {
    const mobileToggle = document.getElementById("mobile-toggle");
    const mainNav = document.getElementById("main-nav");
    const navLinks = document.querySelectorAll(".nav-link");

    if (mobileToggle && mainNav) {
        mobileToggle.addEventListener("click", function () {
            mainNav.classList.toggle("active");
            const isOpen = mainNav.classList.contains("active");
            mobileToggle.innerHTML = isOpen ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
        });

        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                if (mainNav.classList.contains("active")) {
                    mainNav.classList.remove("active");
                    mobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
                }
            });
        });
    }
}

// ===================================================================
// 3. HIỂN THỊ CHỈ SỐ DASHBOARD NỔI BẬT
// ===================================================================
function initDashboardStats() {
    const statVillages = document.getElementById("stat-villages");
    const statYouth = document.getElementById("stat-youth");
    const statMigrant = document.getElementById("stat-migrant");
    const statTrainings = document.getElementById("stat-trainings");
    const statCampaigns = document.getElementById("stat-campaigns");

    if (statVillages) statVillages.textContent = DASHBOARD_STATS.totalBranches; // 22 cơ sở / chi đoàn
    if (statYouth) statYouth.textContent = DASHBOARD_STATS.totalYouth; // 1.028 đoàn viên
    if (statMigrant) statMigrant.textContent = DASHBOARD_STATS.migrantYouth;
    if (statTrainings) statTrainings.textContent = DASHBOARD_STATS.completedAITrainings;
    if (statCampaigns) statCampaigns.textContent = DASHBOARD_STATS.campaignsHeld;
}

// ===================================================================
// 4. PHÂN HỆ: TIN TỨC & BÀI VIẾT HOẠT ĐỘNG
// ===================================================================
const NEWS_STORAGE_KEY = "muonglam_portal_news_v3";

function getNewsArticles() {
    const stored = localStorage.getItem(NEWS_STORAGE_KEY);
    if (!stored) {
        localStorage.setItem(NEWS_STORAGE_KEY, JSON.stringify(INITIAL_NEWS_ARTICLES));
        return INITIAL_NEWS_ARTICLES;
    }
    try {
        return JSON.parse(stored);
    } catch (e) {
        return INITIAL_NEWS_ARTICLES;
    }
}

function initNewsSection() {
    const container = document.getElementById("news-grid-container");
    const filterBtns = document.querySelectorAll(".news-filter-btn");
    const btnOpenPostModal = document.getElementById("btn-open-post-modal");

    if (!container) return;

    let currentCategory = "all";

    function renderNews(category = "all") {
        const articles = getNewsArticles();
        const filtered = category === "all" ? articles : articles.filter(a => a.category === category);

        container.innerHTML = "";
        if (filtered.length === 0) {
            container.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-muted); background: #ffffff; border-radius: var(--radius-md); border: 1px dashed var(--border-color);">
                <i class="far fa-newspaper" style="font-size: 2.5rem; margin-bottom: 0.8rem; display: block; color: var(--primary-blue);"></i>
                Chưa có tin bài nào trong chuyên mục này. Cán bộ Đoàn có thể bấm <strong>"Đăng bài viết mới"</strong> ở góc trên.
            </div>`;
            return;
        }

        filtered.forEach(article => {
            const card = document.createElement("article");
            card.className = "news-card";
            card.innerHTML = `
                <div class="news-thumb-wrap">
                    <img src="${article.thumbnail || DEFAULT_NORTHWEST_FALLBACK_SVG}" alt="${escapeHtml(article.title)}" class="news-thumb-img object-cover" loading="lazy" onerror="handleImgError(this)">
                    <span class="news-category-tag">${escapeHtml(article.categoryName || 'Tin tức')}</span>
                </div>
                <div class="news-body">
                    <div>
                        <div class="news-meta">
                            <span><i class="far fa-calendar-alt"></i> ${article.date}</span>
                            <span><i class="far fa-eye"></i> ${article.views || 100} lượt xem</span>
                        </div>
                        <h3 class="news-title" title="${escapeHtml(article.title)}">${escapeHtml(article.title)}</h3>
                        <p class="news-desc">${escapeHtml(article.summary || article.content.substring(0, 120) + '...')}</p>
                    </div>
                    <div class="news-footer-read">
                        <span>Xem chi tiết bài viết</span> <i class="fas fa-arrow-right"></i>
                    </div>
                </div>
            `;
            card.addEventListener("click", () => openArticleDetail(article.id));
            container.appendChild(card);
        });
    }

    renderNews("all");
    window.renderNewsGlobal = renderNews;

    // Lắng nghe bộ lọc chuyên mục
    filterBtns.forEach(btn => {
        btn.addEventListener("click", function () {
            filterBtns.forEach(b => b.classList.remove("active"));
            this.classList.add("active");
            currentCategory = this.getAttribute("data-category");
            renderNews(currentCategory);
        });
    });

    // Mở Modal Đăng Bài Viết (Bảo vệ bằng mật khẩu Cán bộ)
    if (btnOpenPostModal) {
        btnOpenPostModal.addEventListener("click", function () {
            const pass = prompt("Nhập mã xác thực Cán bộ Đoàn (Mã demo: muonglam2026):");
            if (pass === "muonglam2026" || pass === "doanxamuonglam") {
                openPostNewsModal();
            } else if (pass !== null) {
                alert("Mã xác thực không chính xác! Vui lòng liên hệ Thường trực Đoàn xã (035.444.2054).");
            }
        });
    }

    initPostNewsForm(renderNews);
}

// Mở Modal Xem Chi Tiết Tin Bài
function openArticleDetail(articleId) {
    const articles = getNewsArticles();
    const article = articles.find(a => a.id === articleId);
    if (!article) return;

    // Tăng lượt xem
    article.views = (article.views || 100) + 1;
    localStorage.setItem(NEWS_STORAGE_KEY, JSON.stringify(articles));

    const modal = document.getElementById("article-detail-modal");
    const container = document.getElementById("article-detail-content");
    if (!modal || !container) return;

    container.innerHTML = `
        <div class="article-header">
            <span class="article-category-badge"><i class="fas fa-tag"></i> ${escapeHtml(article.categoryName)}</span>
            <h2 class="article-title-full">${escapeHtml(article.title)}</h2>
            <div class="article-meta-row">
                <span><i class="fas fa-user-edit" style="color:var(--primary-blue);"></i> Tác giả / Nguồn: <strong>${escapeHtml(article.author || 'Đoàn xã Mường Lầm')}</strong></span>
                <span><i class="far fa-calendar-alt"></i> Ngày đăng: <strong>${article.date}</strong></span>
                <span><i class="far fa-eye"></i> Lượt xem: <strong>${article.views}</strong></span>
            </div>
        </div>

        <img src="${article.thumbnail || DEFAULT_NORTHWEST_FALLBACK_SVG}" alt="${escapeHtml(article.title)}" class="article-cover-img object-cover" loading="lazy" onerror="handleImgError(this)">

        <div class="article-content-text">${escapeHtml(article.content)}</div>

        <div class="article-share-bar">
            <span style="font-size:0.85rem; font-weight:700; color:var(--text-secondary);">
                <i class="fas fa-share-alt"></i> Chia sẻ & Báo cáo:
            </span>
            <div class="share-btns-group">
                <button class="btn-share btn-share-fb" onclick="shareArticle('facebook', '${escapeHtml(article.title)}')">
                    <i class="fab fa-facebook-f"></i> Facebook
                </button>
                <button class="btn-share btn-share-zalo" onclick="shareArticle('zalo', '${escapeHtml(article.title)}')">
                    <i class="fas fa-comment"></i> Zalo
                </button>
                <button class="btn-share" onclick="copyNewsLink('${article.id}')" style="color:var(--primary-blue); font-weight:700;">
                    <i class="fas fa-link"></i> Sao chép Link độc lập gửi Tỉnh đoàn
                </button>
            </div>
        </div>
    `;

    modal.classList.add("active");
}

// Sao chép link tin tức độc lập (phục vụ gửi Tỉnh đoàn kiểm tra, chấm điểm)
window.copyNewsLink = function (articleId) {
    const url = `${window.location.origin}${window.location.pathname}#tin-tuc=${articleId}`;
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(url).then(() => {
            showToast("Đã sao chép link tin bài độc lập gửi Tỉnh đoàn Sơn La chấm điểm!");
        }).catch(() => {
            prompt("Sao chép link tin tức độc lập gửi Tỉnh đoàn:", url);
        });
    } else {
        prompt("Sao chép link tin tức độc lập gửi Tỉnh đoàn:", url);
    }
};

window.shareArticle = function (platform, title) {
    const url = window.location.href;
    if (platform === "facebook") {
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, "_blank");
    } else if (platform === "zalo") {
        window.open(`https://sp.zalo.me/share_inline?url=${encodeURIComponent(url)}`, "_blank");
    } else {
        navigator.clipboard.writeText(url).then(() => {
            showToast("Đã sao chép liên kết bài viết vào bộ nhớ tạm!");
        });
    }
};

// Khởi tạo Form Đăng bài viết mới của Cán bộ Đoàn
function openPostNewsModal() {
    const modal = document.getElementById("post-news-modal");
    if (modal) modal.classList.add("active");
}

function initPostNewsForm(refreshCallback) {
    const modal = document.getElementById("post-news-modal");
    const closeBtn = document.getElementById("btn-close-post-modal");
    
    if (closeBtn && modal) {
        closeBtn.addEventListener("click", () => modal.classList.remove("active"));
    }

    // Xử lý các nút chọn nhanh ảnh Thanh niên tình nguyện Tây Bắc
    document.querySelectorAll(".btn-img-pick").forEach(btn => {
        btn.addEventListener("click", function () {
            const targetId = this.getAttribute("data-target");
            const url = this.getAttribute("data-url");
            const targetInput = document.getElementById(targetId);
            if (targetInput && url) {
                targetInput.value = url;
                showToast("Đã chọn ảnh Thanh niên tình nguyện Tây Bắc thành công!");
            }
        });
    });

    // Bật/tắt trường minh chứng mở rộng của Form Đăng bài
    const manualIsProof = document.getElementById("post-is-proof");
    const manualProofFields = document.getElementById("proof-extended-fields");
    if (manualIsProof && manualProofFields) {
        manualIsProof.addEventListener("change", function () {
            manualProofFields.style.display = this.checked ? "block" : "none";
        });
    }

    // Xử lý Gửi Form Đăng Bài Viết
    const formManual = document.getElementById("form-post-news");
    if (formManual) {
        formManual.addEventListener("submit", function (e) {
            e.preventDefault();

            const title = document.getElementById("post-title").value.trim();
            const categorySelect = document.getElementById("post-category");
            const category = categorySelect.value;
            const categoryName = categorySelect.options[categorySelect.selectedIndex].text;
            const author = document.getElementById("post-author").value.trim() || "Cán bộ Đoàn xã Mường Lầm";
            const thumbnail = document.getElementById("post-thumb").value.trim() || "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&auto=format&fit=crop&q=80";
            const summary = document.getElementById("post-summary").value.trim();
            const content = document.getElementById("post-content").value.trim();

            if (!title || !content) {
                showToast("Vui lòng điền đầy đủ tiêu đề và nội dung bài viết.");
                return;
            }

            const newArticle = {
                id: "news-" + Date.now(),
                category,
                categoryName,
                title,
                date: new Date().toLocaleDateString("vi-VN"),
                author,
                views: 1,
                thumbnail,
                summary: summary || content.substring(0, 140) + "...",
                content
            };

            const articles = getNewsArticles();
            articles.unshift(newArticle);
            localStorage.setItem(NEWS_STORAGE_KEY, JSON.stringify(articles));

            // Xử lý nếu cán bộ chọn gắn nhãn làm Minh chứng Chấm điểm 2026
            const isProof = manualIsProof ? manualIsProof.checked : false;
            if (isProof) {
                const criteriaSelect = document.getElementById("post-proof-criteria");
                const criteriaVal = criteriaSelect ? criteriaSelect.value : "mc-tc-2-2";
                const criteriaText = criteriaSelect ? criteriaSelect.options[criteriaSelect.selectedIndex].text : "Tiêu chí";
                const participants = document.getElementById("post-proof-participants").value.trim() || "120 lượt ĐVTN";
                const rate = document.getElementById("post-proof-rate").value.trim() || "Đạt trên 30% ĐVTN";
                const kehoach = document.getElementById("post-proof-kehoach").value.trim() || "Kế hoạch tổ chức số 15-KH/ĐTN ngày 10/4/2026";
                const baocao = document.getElementById("post-proof-baocao").value.trim() || "Báo cáo kết quả số 28-BC/ĐTN có xác nhận Cấp ủy - UBND xã";

                const newProof = {
                    id: "mc-custom-" + Date.now(),
                    slug: "minh-chung-" + Date.now(),
                    group: criteriaVal.startsWith("mc-tc-") ? "bat-buoc" : "chu-dong",
                    groupName: criteriaVal.startsWith("mc-tc-") ? "Điều kiện bắt buộc" : "Nhóm giải pháp chủ động",
                    criteriaCode: criteriaText.split(":")[0].trim(),
                    criteriaName: criteriaText.split(":")[1] ? criteriaText.split(":")[1].split("(")[0].trim() : criteriaText,
                    points: criteriaText.includes("(") ? criteriaText.split("(")[1].replace(")", "") : "3.0 điểm",
                    legalRef: "Quyết định số 05-QĐ/TĐTN-CTĐ&TTN & Công văn 18-CV/ĐTN Đoàn xã Mường Lầm",
                    title: title,
                    date: new Date().toLocaleDateString("vi-VN"),
                    location: "Xã Mường Lầm, tỉnh Sơn La",
                    leadUnit: author || "Ban Chấp hành Đoàn xã Mường Lầm",
                    coUnit: "Các chi đoàn bản và Đoàn trường THPT Mường Lầm",
                    participantCount: participants,
                    reachRate: rate,
                    signer: "TM. BCH ĐOÀN XÃ - BÍ THƯ LÒ MẠNH QUYỀN",
                    keHoachDoc: kehoach,
                    baoCaoDoc: baocao,
                    thumbnail: thumbnail,
                    summary: summary || content.substring(0, 140) + "...",
                    content: content
                };

                const proofs = getProofArticles();
                proofs.unshift(newProof);
                localStorage.setItem(PROOF_STORAGE_KEY, JSON.stringify(proofs));

                if (window.renderProofListGlobal) {
                    window.renderProofListGlobal();
                }
            }

            formManual.reset();
            if (manualProofFields) manualProofFields.style.display = "none";
            modal.classList.remove("active");
            showToast(isProof ? "Đã đăng bài viết và tích hợp vào Bảng minh chứng chấm điểm 2026!" : "Đã đăng bài viết thành công lên Cổng thông tin Đoàn xã!");
            if (refreshCallback) refreshCallback();
            if (window.renderNewsGlobal) window.renderNewsGlobal();
        });
    }
}

// Kiểm tra Hash URL tin tức độc lập (#tin-tuc=news-...)
function checkNewsUrlHash() {
    const hash = window.location.hash;
    if (hash && hash.startsWith("#tin-tuc=")) {
        const articleId = hash.replace("#tin-tuc=", "").trim();
        if (articleId) {
            const newsSection = document.getElementById("news-section");
            if (newsSection) {
                newsSection.scrollIntoView({ behavior: "smooth" });
            }
            setTimeout(() => {
                openArticleDetail(articleId);
            }, 300);
        }
    }
}

// ===================================================================
// 5. CỔNG ĐĂNG KÝ HOẠT ĐỘNG & CHIẾN DỊCH TÌNH NGUYỆN (E-BADGE)
// ===================================================================
const VOLUNTEER_STORAGE_KEY = "muonglam_volunteer_registrations";

function initVolunteerSection() {
    const container = document.getElementById("campaigns-grid-container");
    if (!container) return;

    // Nạp dữ liệu các chiến dịch và số lượng đã đăng ký từ localStorage
    const storedRegs = JSON.parse(localStorage.getItem(VOLUNTEER_STORAGE_KEY) || "[]");

    function renderCampaigns() {
        container.innerHTML = "";
        VOLUNTEER_CAMPAIGNS.forEach(camp => {
            // Đếm số lượt đã đăng ký thêm
            const countAdditional = storedRegs.filter(r => r.campaignId === camp.id).length;
            const currentRegistered = camp.registered + countAdditional;
            const percent = Math.min(100, Math.round((currentRegistered / camp.quota) * 100));

            const card = document.createElement("div");
            card.className = "campaign-card";
            card.innerHTML = `
                <div>
                    ${camp.thumbnail ? `
                    <div style="position:relative; height:150px; overflow:hidden; border-radius:var(--radius-md); margin-bottom:0.8rem; background:#003B75;">
                        <img src="${camp.thumbnail}" alt="${escapeHtml(camp.title)}" class="object-cover" style="width:100%; height:100%;" loading="lazy" onerror="handleImgError(this)">
                    </div>` : ''}
                    <div class="campaign-top">
                        <span class="campaign-badge ${camp.badgeColor}">${camp.status}</span>
                        <span style="font-size:0.75rem; font-weight:700; color:var(--primary-blue);"><i class="fas fa-flag"></i> ${camp.category}</span>
                    </div>
                    <h3 class="campaign-title">${escapeHtml(camp.title)}</h3>
                    <ul class="campaign-info-list">
                        <li><i class="far fa-calendar-check"></i> <strong>Thời gian:</strong> ${camp.date}</li>
                        <li><i class="fas fa-map-marker-alt"></i> <strong>Địa điểm:</strong> ${camp.location}</li>
                        <li><i class="fas fa-user-check"></i> <strong>Đối tượng:</strong> ${camp.requirements}</li>
                    </ul>
                    <p class="campaign-desc">${escapeHtml(camp.description)}</p>
                </div>

                <div>
                    <div class="progress-wrap">
                        <div class="progress-header">
                            <span>Đã đăng ký: <strong>${currentRegistered}/${camp.quota}</strong> đồng chí</span>
                            <span>${percent}%</span>
                        </div>
                        <div class="progress-bar-bg">
                            <div class="progress-bar-fill" style="width: ${percent}%;"></div>
                        </div>
                    </div>
                    <button class="btn-primary btn-join-campaign" onclick="openCampaignRegisterModal('${camp.id}')">
                        <i class="fas fa-hand-holding-heart"></i> Đăng Ký Tham Gia Ngay
                    </button>
                </div>
            `;
            container.appendChild(card);
        });
    }

    renderCampaigns();
    initVolunteerModalForm(renderCampaigns);
}

// Mở Form Đăng ký chiến dịch
let activeCampaignId = null;
window.openCampaignRegisterModal = function (campaignId) {
    const camp = VOLUNTEER_CAMPAIGNS.find(c => c.id === campaignId);
    if (!camp) return;

    activeCampaignId = campaignId;
    const modal = document.getElementById("volunteer-register-modal");
    const titleSpan = document.getElementById("reg-campaign-name");
    if (titleSpan) titleSpan.textContent = camp.title;

    // Điền danh sách 22 đơn vị vào ô chọn
    const unitSelect = document.getElementById("reg-unit");
    if (unitSelect) {
        let opts = `<option value="">-- Chọn Chi đoàn Bản hoặc Đơn vị trực thuộc (22 đơn vị) --</option>`;
        opts += `<optgroup label="Khối Chi đoàn Bản (15 Chi đoàn - 506 đoàn viên)">`;
        MUONG_LAM_VILLAGES.forEach(v => {
            opts += `<option value="${v.name}">${v.name} (Bí thư: ${v.secretary} - ${v.youthCount} ĐV)</option>`;
        });
        opts += `</optgroup>`;
        opts += `<optgroup label="Khối Chi đoàn Trường học (05 đơn vị - 512 đoàn viên)">`;
        MUONG_LAM_SCHOOL_BRANCHES.forEach(s => {
            opts += `<option value="${s.name}">${s.name} (Bí thư: ${s.secretary} - ${s.youthCount} ĐV)</option>`;
        });
        opts += `</optgroup>`;
        opts += `<optgroup label="Khối Chi đoàn Cơ quan & LLVT (02 Chi đoàn - 10 đoàn viên)">`;
        MUONG_LAM_AGENCY_BRANCHES.forEach(a => {
            opts += `<option value="${a.name}">${a.name} (Bí thư: ${a.secretary} - ${a.youthCount} ĐV)</option>`;
        });
        opts += `</optgroup>`;
        unitSelect.innerHTML = opts;
    }

    if (modal) modal.classList.add("active");
};

function initVolunteerModalForm(refreshCallback) {
    const form = document.getElementById("form-register-volunteer");
    const modal = document.getElementById("volunteer-register-modal");
    const closeBtn = document.getElementById("btn-close-volunteer-modal");

    if (closeBtn && modal) {
        closeBtn.addEventListener("click", () => modal.classList.remove("active"));
    }

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const fullname = document.getElementById("reg-fullname").value.trim();
            const birthday = document.getElementById("reg-birthday").value;
            const unit = document.getElementById("reg-unit").value;
            const phone = document.getElementById("reg-phone").value.trim();
            const note = document.getElementById("reg-note").value.trim();

            if (!fullname || !unit || !phone) {
                showToast("Vui lòng điền đầy đủ các thông tin bắt buộc!");
                return;
            }

            const camp = VOLUNTEER_CAMPAIGNS.find(c => c.id === activeCampaignId) || VOLUNTEER_CAMPAIGNS[0];
            const registrationId = "TN-ML-" + Date.now().toString().slice(-5);

            const registrationData = {
                id: registrationId,
                campaignId: camp.id,
                campaignTitle: camp.title,
                fullname,
                birthday,
                unit,
                phone,
                note,
                registeredAt: new Date().toLocaleDateString("vi-VN") + " " + new Date().toLocaleTimeString("vi-VN", { hour: "2-digit", minute: "2-digit" })
            };

            const stored = JSON.parse(localStorage.getItem(VOLUNTEER_STORAGE_KEY) || "[]");
            stored.unshift(registrationData);
            localStorage.setItem(VOLUNTEER_STORAGE_KEY, JSON.stringify(stored));

            form.reset();
            modal.classList.remove("active");
            if (refreshCallback) refreshCallback();

            // Hiển thị Thẻ Xác Nhận Đăng Ký Điện Tử (E-Badge)
            showEBadgeModal(registrationData);
        });
    }
}

// Hiển thị Thẻ Điện Tử E-Badge
function showEBadgeModal(regData) {
    const modal = document.getElementById("ebadge-modal");
    const content = document.getElementById("ebadge-card-render");
    if (!modal || !content) return;

    content.innerHTML = `
        <div class="e-badge-container">
            <div class="badge-top-row">
                <img src="assets/logo-doan.png" alt="Huy hiệu Đoàn" class="badge-logo-img">
                <div class="badge-org-title">
                    <h4>ĐOÀN TNCS HỒ CHÍ MINH XÃ MƯỜNG LẦM</h4>
                    <p><i class="fas fa-check-circle"></i> THẺ XÁC NHẬN ĐOÀN VIÊN TÌNH NGUYỆN ĐIỆN TỬ</p>
                </div>
            </div>

            <div class="badge-event-title">${escapeHtml(regData.campaignTitle)}</div>

            <div class="badge-detail-grid">
                <div class="badge-field">
                    <label>Họ và tên đoàn viên:</label>
                    <span style="font-size:1.05rem; color:#fef08a;">${escapeHtml(regData.fullname)}</span>
                </div>
                <div class="badge-field">
                    <label>Chi đoàn / Đơn vị:</label>
                    <span>${escapeHtml(regData.unit)}</span>
                </div>
                <div class="badge-field">
                    <label>Số điện thoại / Zalo:</label>
                    <span>${escapeHtml(regData.phone)}</span>
                </div>
                <div class="badge-field">
                    <label>Thời gian đăng ký:</label>
                    <span>${regData.registeredAt}</span>
                </div>
            </div>

            <div class="badge-footer-qr">
                <div>
                    <div style="font-size:0.7rem; color:#cbd5e1; text-transform:uppercase;">Mã định danh tham gia:</div>
                    <div class="badge-id-box">${regData.id}</div>
                </div>
                <div style="text-align:right;">
                    <div style="background:#ffffff; color:#0f172a; padding:0.2rem 0.5rem; border-radius:4px; font-weight:800; font-size:0.75rem; display:inline-block;">
                        <i class="fas fa-qrcode"></i> ĐÃ XÁC NHẬN SỐ
                    </div>
                </div>
            </div>
        </div>
    `;

    modal.classList.add("active");
    showToast("Chúc mừng đồng chí đã đăng ký tham gia thành công!");
}

// In thẻ điện tử
window.printEBadge = function () {
    window.print();
};

// ===================================================================
// 6. GIỚI THIỆU BAN CHẤP HÀNH & KHO VĂN BẢN BIỂU MẪU ĐOÀN VỤ
// ===================================================================
function getMemberAvatarHtml(person) {
    let cleanName = person.name.replace(/^Đ\/c\s+/i, "").trim();
    let parts = cleanName.split(/\s+/);
    let initials = "";
    if (parts.length >= 2) {
        initials = (parts[parts.length - 2][0] + parts[parts.length - 1][0]).toUpperCase();
    } else if (parts.length === 1) {
        initials = parts[0].substring(0, 2).toUpperCase();
    } else {
        initials = "ĐN";
    }

    const isStanding = person.isStanding;
    return `
        <div class="bch-avatar-wrap">
            <div class="bch-avatar-box ${isStanding ? 'standing-officer' : ''}" title="${escapeHtml(person.name)} - ${escapeHtml(person.role)}">
                <span>${initials}</span>
            </div>
            <div class="bch-badge-mini" title="Huy hiệu Đoàn TNCS Hồ Chí Minh">
                <img src="assets/logo-doan.png" alt="Huy hiệu Đoàn" loading="lazy" onerror="this.style.display='none'">
            </div>
        </div>
    `;
}

function initOrganizationAndBCH() {
    const container = document.getElementById("bch-grid-container");
    if (!container) return;

    const standingMembers = EXECUTIVE_COMMITTEE.filter(m => m.isStanding);
    const committeeMembers = EXECUTIVE_COMMITTEE.filter(m => !m.isStanding);

    let html = `
        <div style="grid-column: 1 / -1; margin-bottom: 0.6rem;">
            <div style="background: linear-gradient(135deg, var(--primary-blue) 0%, var(--primary-blue-dark) 100%); color: #ffffff; padding: 0.85rem 1.2rem; border-radius: var(--radius-md); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.6rem; box-shadow: 0 2px 6px rgba(0,84,166,0.2);">
                <span style="font-weight: 800; font-size: 0.95rem; text-transform: uppercase; letter-spacing: 0.5px; display:flex; align-items:center; gap:8px;">
                    <i class="fas fa-star" style="color: var(--star-gold);"></i> A. Thường trực & Ban Thường vụ Đoàn xã (05 đồng chí)
                </span>
                <span style="background: rgba(255,255,255,0.2); padding: 4px 12px; border-radius: 12px; font-size: 0.78rem; font-weight: 700;">
                    Khóa I, Nhiệm kỳ 2025 - 2030
                </span>
            </div>
        </div>
    `;

    html += standingMembers.map(person => `
        <div class="bch-card" style="border-top: 3px solid var(--primary-blue); background:#ffffff;">
            ${getMemberAvatarHtml(person)}
            <h4 class="bch-name">${escapeHtml(person.name)}</h4>
            <div style="font-size: 0.75rem; color: #64748b; margin-bottom: 0.3rem; font-weight:600;">
                Sinh năm ${person.birthYear} • Dân tộc ${person.ethnicity}
            </div>
            <div class="bch-role">${escapeHtml(person.role)}</div>
            <p class="bch-desc"><strong>Nhiệm vụ:</strong> ${escapeHtml(person.title)}</p>
            ${person.education ? `<p style="font-size:0.73rem; color:#0369a1; background:#f0f9ff; padding:4px 8px; border-radius:4px; margin-bottom:0.6rem; border:1px solid #e0f2fe;"><strong>Trình độ:</strong> ${escapeHtml(person.education)}</p>` : ''}
            <a href="tel:0354442054" class="bch-contact-link">
                <i class="fas fa-phone-alt"></i> Hotline: ${person.phone}
            </a>
        </div>
    `).join("");

    html += `
        <div style="grid-column: 1 / -1; margin-top: 1.5rem; margin-bottom: 0.6rem;">
            <div style="background: #ffffff; border: 1px solid #cbd5e1; border-left: 4px solid var(--doan-orange); color: #1e293b; padding: 0.85rem 1.2rem; border-radius: var(--radius-md); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.6rem;">
                <span style="font-weight: 800; font-size: 0.95rem; text-transform: uppercase; color: var(--primary-blue-dark); display:flex; align-items:center; gap:8px;">
                    <i class="fas fa-users" style="color: var(--doan-orange);"></i> B. Ủy viên Ban Chấp hành Đoàn xã (10 đồng chí)
                </span>
                <span style="background: #f1f5f9; color: #475569; padding: 4px 12px; border-radius: 12px; font-size: 0.78rem; font-weight: 700; border:1px solid #e2e8f0;">
                    10 đồng chí phụ trách cơ sở
                </span>
            </div>
        </div>
    `;

    html += committeeMembers.map(person => `
        <div class="bch-card" style="background:#ffffff;">
            ${getMemberAvatarHtml(person)}
            <h4 class="bch-name" style="font-size: 0.95rem;">${escapeHtml(person.name)}</h4>
            <div style="font-size: 0.72rem; color: #64748b; margin-bottom: 0.2rem; font-weight:600;">
                Sinh năm ${person.birthYear} • Dân tộc ${person.ethnicity}
            </div>
            <div class="bch-role" style="font-size: 0.72rem;">${escapeHtml(person.role)}</div>
            <p class="bch-desc" style="font-size: 0.74rem;"><strong>Nhiệm vụ:</strong> ${escapeHtml(person.title)}</p>
            ${person.education ? `<p style="font-size:0.7rem; color:#475569; margin-bottom:0.5rem;"><em>Trình độ: ${escapeHtml(person.education)}</em></p>` : ''}
            <a href="tel:0354442054" class="bch-contact-link">
                <i class="fas fa-phone-alt"></i> Hotline: ${person.phone}
            </a>
        </div>
    `).join("");

    container.innerHTML = html;
}

function initYouthFormsSection() {
    const tbody = document.getElementById("youth-docs-tbody");
    if (!tbody) return;

    tbody.innerHTML = YOUTH_FORMS_AND_DOCS.map((doc, idx) => `
        <tr>
            <td><strong>${doc.code}</strong></td>
            <td>
                <strong>${escapeHtml(doc.name)}</strong>
                <div style="font-size:0.75rem; color:var(--text-muted); margin-top:2px;">${escapeHtml(doc.desc)}</div>
            </td>
            <td><span class="ai-category-badge">${doc.category}</span></td>
            <td><span style="font-weight:600; color:var(--primary-blue);">${doc.type}</span> (${doc.size})</td>
            <td>
                <button class="btn-sm" onclick="downloadYouthDoc('${doc.id}')" title="Tải văn bản về máy">
                    <i class="fas fa-file-download" style="color:var(--primary-blue);"></i> Tải mẫu
                </button>
            </td>
        </tr>
    `).join("");
}

window.downloadYouthDoc = function (docId) {
    const doc = YOUTH_FORMS_AND_DOCS.find(d => d.id === docId);
    if (!doc) return;

    const content = `${doc.content}\n\n--------------------------------------------\nCổng Thông Tin Điện Tử Đoàn TNCS Hồ Chí Minh Xã Mường Lầm\nHotline: 035.444.2054 • Email: doanxamuonglam@gmail.com`;
    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${doc.code.replace(/[\/\\]/g, "_")}_${doc.name.replace(/\s+/g, "_")}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast(`Đang tải biểu mẫu: ${doc.name}`);
};

// ===================================================================
// 7. TẬP HUẤN KỸ NĂNG AI CƠ BẢN & SAO CHÉP PROMPT
// ===================================================================
function initAITrainingSection() {
    const container = document.getElementById("ai-modules-container");
    const filterButtons = document.querySelectorAll(".filter-btn");
    if (!container) return;

    function renderModules(filterCategory = "all") {
        container.innerHTML = "";
        const filtered = filterCategory === "all" ? AI_TRAINING_MODULES : AI_TRAINING_MODULES.filter(m => m.category === filterCategory);

        if (filtered.length === 0) {
            container.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 2rem; color: var(--text-muted);">
                Chưa có bài học nào trong danh mục này. Vui lòng chọn danh mục khác.
            </div>`;
            return;
        }

        filtered.forEach(module => {
            const card = document.createElement("div");
            card.className = "ai-card";
            card.innerHTML = `
                <div class="ai-card-top">
                    <div class="ai-card-meta">
                        <span class="ai-category-badge">${module.categoryName}</span>
                        <span class="ai-level-badge"><i class="fas fa-signal"></i> ${module.level}</span>
                    </div>
                    <h4 class="ai-card-title">
                        <i class="${module.icon}"></i>
                        <span>${module.title}</span>
                    </h4>
                    <p class="ai-card-desc">${module.description}</p>

                    <div class="ai-steps-box">
                        <h5><i class="fas fa-list-ol"></i> Hướng dẫn thực hiện từng bước:</h5>
                        <ul>
                            ${module.steps.map(s => `<li>${s}</li>`).join("")}
                        </ul>
                    </div>

                    <div class="prompt-box">
                        <div class="prompt-box-header">
                            <span><i class="fas fa-terminal"></i> Câu lệnh (Prompt) mẫu thực tế</span>
                            <button class="btn-copy-prompt" data-prompt="${encodeURIComponent(module.prompt)}">
                                <i class="far fa-copy"></i> Sao chép Prompt
                            </button>
                        </div>
                        <code>${escapeHtml(module.prompt)}</code>
                    </div>
                </div>

                <div class="ai-card-footer">
                    <div class="ai-tip-text">
                        <i class="fas fa-lightbulb"></i> Mẹo: ${module.tips}
                    </div>
                </div>
            `;
            container.appendChild(card);
        });

        container.querySelectorAll(".btn-copy-prompt").forEach(btn => {
            btn.addEventListener("click", function () {
                const textToCopy = decodeURIComponent(this.getAttribute("data-prompt"));
                navigator.clipboard.writeText(textToCopy).then(() => {
                    const originalHtml = this.innerHTML;
                    this.innerHTML = '<i class="fas fa-check"></i> Đã sao chép!';
                    this.classList.add("copied");
                    showToast("Đã sao chép prompt vào bộ nhớ tạm! Dán vào ChatGPT hoặc Gemini để dùng ngay.");

                    setTimeout(() => {
                        this.innerHTML = originalHtml;
                        this.classList.remove("copied");
                    }, 2500);
                }).catch(() => {
                    showToast("Lỗi khi sao chép. Vui lòng copy thủ công.");
                });
            });
        });
    }

    renderModules("all");

    filterButtons.forEach(btn => {
        btn.addEventListener("click", function () {
            filterButtons.forEach(b => b.classList.remove("active"));
            this.classList.add("active");
            renderModules(this.getAttribute("data-category"));
        });
    });
}

// Trợ lý tạo Prompt tự động
function initPromptGenerator() {
    const purposeSelect = document.getElementById("gen-purpose");
    const topicInput = document.getElementById("gen-topic");
    const targetSelect = document.getElementById("gen-target");
    const btnGenerate = document.getElementById("btn-run-generator");
    const resultBox = document.getElementById("generator-result-container");
    const resultText = document.getElementById("generator-prompt-output");
    const btnCopyResult = document.getElementById("btn-copy-generated-prompt");

    if (!btnGenerate) return;

    btnGenerate.addEventListener("click", function () {
        const purpose = purposeSelect.value;
        const topic = topicInput.value.trim() || "Nhãn chín muộn Mường Lầm tươi ngon";
        const target = targetSelect.value;

        let generatedPrompt = "";

        if (purpose === "ban-nong-san") {
            generatedPrompt = `Bạn là một đoàn viên thanh niên người Thái tại xã Mường Lầm, tỉnh Sơn La đang đưa nông sản quê mình lên mạng xã hội.
Hãy viết 01 bài đăng ngắn bán [${topic}] hướng đến khách hàng là [${target}].
- Nêu bật hương vị ngọt thanh, cùi dày, quả sạch hái tại vườn sáng sớm chuyển xe khách trong ngày.
- Giá cả hợp lý ủng hộ thanh niên nông thôn khởi nghiệp.
- Giọng văn chân thành, ấm áp, đậm bản sắc Tây Bắc, có lời mời gọi thân thương và 3 hashtag phù hợp.`;
        } else if (purpose === "kich-ban-chi-doan") {
            generatedPrompt = `Bạn là cán bộ Đoàn giàu kinh nghiệm tại xã Mường Lầm, tỉnh Sơn La.
Hãy soạn giúp tôi một khung kịch bản sinh hoạt chi đoàn bản ngắn gọn (khoảng 45 phút) về chủ đề [${topic}] dành cho đối tượng [${target}].
- Gồm: Chào cờ, 3 ý tuyên truyền then chốt dễ nhớ, 2 câu hỏi thảo luận vui nhộn không gây nhàm chán và phân công công việc cụ thể.
- Ngôn ngữ mộc mạc, gần gũi, khích lệ tinh thần thanh niên vùng cao.`;
        } else if (purpose === "canh-bao-lua-dao") {
            generatedPrompt = `Đóng vai là chuyên gia an toàn thông tin và cán bộ Đoàn xã Mường Lầm.
Hãy viết một bản tin cảnh báo ngắn (khoảng 150 từ) về thủ đoạn lừa đảo [${topic}] nhằm bảo vệ [${target}].
- Chỉ rõ 2 dấu hiệu lừa đảo phổ biến nhất (ví dụ: đòi phí trước, gọi video mạo danh công an, cài app ngoài cửa hàng).
- Đưa ra 3 nguyên tắc phòng ngừa bằng câu ngắn dễ thuộc.
- Cung cấp số điện thoại liên hệ xác minh của Công an xã Mường Lầm hoặc Hotline Đoàn xã: 035.444.2054.`;
        } else {
            generatedPrompt = `Hãy đóng vai là Bí thư Đoàn xã Mường Lầm nhiệt huyết. Viết một lời kêu gọi ngắn gọn, truyền cảm hứng về [${topic}] gửi tới [${target}], động viên tinh thần xung kích, đoàn kết xây dựng quê hương bản Mường giàu đẹp, văn minh.`;
        }

        resultText.textContent = generatedPrompt;
        resultBox.style.display = "block";
        showToast("Đã tạo câu lệnh thành công! Bạn có thể xem và sao chép ngay.");
    });

    if (btnCopyResult) {
        btnCopyResult.addEventListener("click", function () {
            const text = resultText.textContent;
            navigator.clipboard.writeText(text).then(() => {
                showToast("Đã sao chép prompt được tạo vào bộ nhớ tạm!");
            });
        });
    }
}

// ===================================================================
// 8. GIẢI PHÁP SỐ & KẾT NỐI THANH NIÊN XA QUÊ
// ===================================================================
function initDigitalSolutionsSection() {
    const tabButtons = document.querySelectorAll(".sol-tab-btn");
    const panels = document.querySelectorAll(".sol-panel");

    tabButtons.forEach(btn => {
        btn.addEventListener("click", function () {
            tabButtons.forEach(b => b.classList.remove("active"));
            panels.forEach(p => p.classList.remove("active"));

            this.classList.add("active");
            const targetId = this.getAttribute("data-target");
            const targetPanel = document.getElementById(targetId);
            if (targetPanel) {
                targetPanel.classList.add("active");
            }
        });
    });
}

function initConnectFormAndAdmin() {
    const form = document.getElementById("youth-connect-form");
    const villageSelect = document.getElementById("form-village");
    const tableBody = document.getElementById("admin-table-body");
    const btnExportCsv = document.getElementById("btn-export-csv");
    const btnExportJson = document.getElementById("btn-export-json");
    const btnClearData = document.getElementById("btn-clear-data");
    const recordCountSpan = document.getElementById("record-count");

    if (villageSelect) {
        let optionsHtml = `<option value="">-- Chọn Chi đoàn Bản hoặc Đơn vị trực thuộc tại Mường Lầm (22 đơn vị) --</option>`;
        optionsHtml += `<optgroup label="Khối Chi đoàn Bản (15 Chi đoàn - 506 đoàn viên)">`;
        MUONG_LAM_VILLAGES.forEach(v => {
            optionsHtml += `<option value="${v.name}">${v.name} (Bí thư: ${v.secretary})</option>`;
        });
        optionsHtml += `</optgroup>`;
        optionsHtml += `<optgroup label="Khối Chi đoàn Trường học (05 đơn vị - 512 đoàn viên)">`;
        MUONG_LAM_SCHOOL_BRANCHES.forEach(s => {
            optionsHtml += `<option value="${s.name}">${s.name} (Bí thư: ${s.secretary})</option>`;
        });
        optionsHtml += `</optgroup>`;
        optionsHtml += `<optgroup label="Khối Chi đoàn Cơ quan & LLVT (02 Chi đoàn - 10 đoàn viên)">`;
        MUONG_LAM_AGENCY_BRANCHES.forEach(a => {
            optionsHtml += `<option value="${a.name}">${a.name} (Bí thư: ${a.secretary})</option>`;
        });
        optionsHtml += `</optgroup>`;
        villageSelect.innerHTML = optionsHtml;
    }

    const STORAGE_KEY = "muonglam_youth_connections";
    let storedData = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");

    if (storedData.length === 0) {
        storedData = [
            {
                id: "ML-001",
                fullname: "Lò Văn Tuấn",
                phone: "0354.112.345",
                village: "Bản Lốm Hỏm",
                currentLocation: "KCN Yên Phong, Bắc Ninh",
                youthRole: "Thanh niên đi làm ăn xa",
                skills: "Cơ khí, lái xe nâng, mong muốn kết nối hội đồng hương Mường Lầm",
                suggestion: "Đoàn xã duy trì họp trực tuyến hàng tháng để thanh niên xa quê nắm tình hình nương rẫy, mùa màng.",
                date: "15/11/2026"
            },
            {
                id: "ML-002",
                fullname: "Cà Thị Mây",
                phone: "0354.443.901",
                village: "Bản Mường Nưa",
                currentLocation: "Tại bản (Sinh hoạt tại chỗ)",
                youthRole: "Bí thư Chi đoàn bản",
                skills: "Biết sử dụng Canva, phụ trách Tổ công nghệ số của bản",
                suggestion: "Xin hỗ trợ thêm loa cầm tay Bluetooth để tổ chức sinh hoạt ngoài trời cho thiếu nhi.",
                date: "16/11/2026"
            },
            {
                id: "ML-003",
                fullname: "Quàng Văn Nam",
                phone: "0354.889.012",
                village: "Bản Hịa",
                currentLocation: "KCN Quang Châu, Bắc Giang",
                youthRole: "Thanh niên đi làm ăn xa",
                skills: "Lắp ráp linh kiện điện tử",
                suggestion: "Cần hỗ trợ hướng dẫn làm thủ tục cấp giấy xác nhận tình trạng hôn nhân qua cổng Dịch vụ công để kết hôn.",
                date: "17/11/2026"
            }
        ];
        localStorage.setItem(STORAGE_KEY, JSON.stringify(storedData));
    }

    function renderAdminTable() {
        if (!tableBody) return;
        const currentData = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
        if (recordCountSpan) recordCountSpan.textContent = currentData.length;

        if (currentData.length === 0) {
            tableBody.innerHTML = `<tr><td colspan="7" style="text-align:center; padding: 1.5rem; color: var(--text-muted);">Chưa có dữ liệu đăng ký.</td></tr>`;
            return;
        }

        tableBody.innerHTML = currentData.map((item, index) => `
            <tr>
                <td><strong>${index + 1}</strong></td>
                <td><strong>${escapeHtml(item.fullname)}</strong><br><small style="color:var(--text-muted);">${escapeHtml(item.phone)}</small></td>
                <td><span style="font-weight:600; color:var(--primary-blue);">${escapeHtml(item.village)}</span></td>
                <td><span class="ai-category-badge">${escapeHtml(item.currentLocation)}</span></td>
                <td>${escapeHtml(item.skills)}</td>
                <td style="max-width: 220px;" title="${escapeHtml(item.suggestion)}">${escapeHtml(item.suggestion)}</td>
                <td>
                    <button class="btn-sm btn-danger-sm" onclick="deleteConnectionRecord('${item.id}')" title="Xóa dòng này">
                        <i class="fas fa-trash-alt"></i>
                    </button>
                </td>
            </tr>
        `).join("");
    }

    renderAdminTable();

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const fullname = document.getElementById("form-fullname").value.trim();
            const phone = document.getElementById("form-phone").value.trim();
            const village = document.getElementById("form-village").value;
            const currentLocation = document.getElementById("form-location").value.trim();
            const youthRole = document.getElementById("form-role").value;
            const skills = document.getElementById("form-skills").value.trim();
            const suggestion = document.getElementById("form-suggestion").value.trim();

            if (!fullname || !phone || !village || !currentLocation) {
                showToast("Vui lòng điền đầy đủ các thông tin bắt buộc có dấu (*)");
                return;
            }

            const newRecord = {
                id: "ML-" + Date.now().toString().slice(-4),
                fullname,
                phone,
                village,
                currentLocation,
                youthRole,
                skills: skills || "Thành viên mạng lưới",
                suggestion: suggestion || "Mong muốn kết nối cùng tuổi trẻ Mường Lầm",
                date: new Date().toLocaleDateString("vi-VN")
            };

            const dataList = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
            dataList.unshift(newRecord);
            localStorage.setItem(STORAGE_KEY, JSON.stringify(dataList));

            form.reset();
            renderAdminTable();
            showToast("Đã gửi đăng ký kết nối thành công! Đoàn xã sẽ liên hệ sớm nhất.");
        });
    }

    window.deleteConnectionRecord = function (id) {
        if (!confirm("Bạn có chắc chắn muốn xóa bản ghi này?")) return;
        let dataList = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
        dataList = dataList.filter(item => item.id !== id);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(dataList));
        renderAdminTable();
        showToast("Đã xóa bản ghi thành công.");
    };

    if (btnExportCsv) {
        btnExportCsv.addEventListener("click", function () {
            const dataList = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
            if (dataList.length === 0) {
                showToast("Không có dữ liệu để xuất file!");
                return;
            }

            const headers = ["STT", "Mã", "Họ và tên", "Số điện thoại", "Bản/Đơn vị", "Nơi sinh sống/làm việc", "Vai trò/Đối tượng", "Kỹ năng/Nguyện vọng", "Đề xuất sáng kiến", "Ngày đăng ký"];
            const rows = dataList.map((d, i) => [
                i + 1,
                `"${d.id}"`,
                `"${d.fullname.replace(/"/g, '""')}"`,
                `"${d.phone}"`,
                `"${d.village.replace(/"/g, '""')}"`,
                `"${d.currentLocation.replace(/"/g, '""')}"`,
                `"${d.youthRole.replace(/"/g, '""')}"`,
                `"${d.skills.replace(/"/g, '""')}"`,
                `"${d.suggestion.replace(/"/g, '""')}"`,
                `"${d.date}"`
            ]);

            const csvContent = "\uFEFF" + [headers.join(","), ...rows.map(r => r.join(","))].join("\r\n");
            const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = `Danh_sach_Thanh_nien_Muong_Lam_${new Date().toISOString().slice(0, 10)}.csv`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
            showToast("Đã xuất danh sách thanh niên thành file CSV!");
        });
    }

    if (btnExportJson) {
        btnExportJson.addEventListener("click", function () {
            const dataList = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
            const jsonString = JSON.stringify(dataList, null, 2);
            const blob = new Blob([jsonString], { type: "application/json;charset=utf-8;" });
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = `Du_lieu_Thanh_nien_Muong_Lam_${new Date().toISOString().slice(0, 10)}.json`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
            showToast("Đã xuất dữ liệu định dạng JSON thành công!");
        });
    }

    if (btnClearData) {
        btnClearData.addEventListener("click", function () {
            if (confirm("Lưu ý: Thao tác này sẽ xóa toàn bộ danh sách đăng ký hiện có trong trình duyệt. Bạn có chắc không?")) {
                localStorage.removeItem(STORAGE_KEY);
                renderAdminTable();
                showToast("Đã làm sạch dữ liệu!");
            }
        });
    }
}

// ===================================================================
// 9. SỔ TAY TÀI LIỆU SINH HOẠT CHI ĐOÀN 12 THÁNG (CHUẨN HÓA NĂM 2026)
// Ban hành chính thức bởi Ban Thường vụ Tỉnh đoàn Sơn La & Đoàn xã Mường Lầm
// ===================================================================
const MONTHLY_STORAGE_KEY = "muonglam_monthly_activities_v4";
let currentMonthlyFontScale = 100; // 85% - 140%
let activeSelectedMonth = 9; // Tự động mở xem Tháng 9 hoặc tháng đang được chọn

function getMonthlyActivitiesList() {
    try {
        const raw = localStorage.getItem(MONTHLY_STORAGE_KEY);
        if (raw) {
            const parsed = JSON.parse(raw);
            if (Array.isArray(parsed) && parsed.length >= 12) {
                const m9 = parsed.find(item => item.month === 9);
                if (m9 && m9.title && m9.title.includes("Thanh niên học tập")) {
                    return parsed;
                }
            }
        }
    } catch (e) {
        console.error("Lỗi đọc dữ liệu sinh hoạt chi đoàn từ localStorage:", e);
    }
    const defaults = JSON.parse(JSON.stringify(MONTHLY_ACTIVITIES));
    saveMonthlyActivitiesList(defaults);
    return defaults;
}

function saveMonthlyActivitiesList(list) {
    try {
        localStorage.setItem(MONTHLY_STORAGE_KEY, JSON.stringify(list));
    } catch (e) {
        console.error("Lỗi lưu dữ liệu sinh hoạt chi đoàn:", e);
    }
}

function initMonthlyActivitiesSection() {
    const selectorBar = document.getElementById("month-selector-bar");
    const detailContainer = document.getElementById("month-detail-container");
    if (!selectorBar || !detailContainer) return;

    let activitiesList = getMonthlyActivitiesList();

    function renderSelectorButtons() {
        selectorBar.innerHTML = "";
        for (let m = 1; m <= 12; m++) {
            const itemData = activitiesList.find(item => item.month === m) || MONTHLY_ACTIVITIES.find(item => item.month === m);
            const isBlank = itemData ? itemData.isBlank : false;

            const btn = document.createElement("button");
            btn.type = "button";
            btn.className = `month-btn ${m === activeSelectedMonth ? "active" : ""} ${isBlank ? "month-blank" : ""}`;
            btn.setAttribute("data-month", m);
            btn.setAttribute("aria-label", `Xem tài liệu Tháng ${m}`);

            btn.innerHTML = `
                <span class="month-num">T${m}</span>
                <span class="month-label">Tháng ${m}</span>
                <span class="month-btn-tag ${isBlank ? "pending" : "official"}">
                    <i class="fas ${isBlank ? "fa-clock" : "fa-check"}"></i> ${isBlank ? "Đang chờ" : "Đã ban hành"}
                </span>
            `;

            btn.addEventListener("click", function () {
                activeSelectedMonth = m;
                document.querySelectorAll(".month-btn").forEach(b => b.classList.remove("active"));
                btn.classList.add("active");
                renderMonthDetail(m);
            });

            selectorBar.appendChild(btn);
        }
    }

    function renderMonthDetail(monthNumber) {
        activitiesList = getMonthlyActivitiesList();
        const data = activitiesList.find(item => item.month === monthNumber) || MONTHLY_ACTIVITIES.find(item => item.month === monthNumber);
        if (!data) return;

        // TRƯỜNG HỢP: THÁNG ĐANG ĐỂ TRỐNG (THÁNG 12 CHỜ TỈNH ĐOÀN BAN HÀNH)
        if (data.isBlank) {
            detailContainer.innerHTML = `
                <div class="month-reader-card" id="month-reader-card">
                    <div class="month-reader-header header-pending">
                        <div class="header-top-row">
                            <div style="display:flex; align-items:center; gap:0.6rem; flex-wrap:wrap;">
                                <span class="month-badge-pill"><img src="assets/logo-doan.png" alt="Huy hiệu Đoàn" style="width:18px;height:18px;vertical-align:middle;margin-right:4px;"> THÁNG ${data.month}/2026</span>
                                <span class="month-status-badge pending"><i class="fas fa-clock"></i> Đang chờ ban hành từ Tỉnh đoàn Sơn La</span>
                            </div>
                            <div class="reader-toolbar">
                                <button class="btn-tool-action btn-tool-admin" id="btn-open-upload-m12" title="Cán bộ Đoàn xã cập nhật tài liệu Tháng 12">
                                    <i class="fas fa-file-upload"></i> Bổ sung tài liệu Tháng 12
                                </button>
                            </div>
                        </div>

                        <div class="header-main-title">
                            <h2 class="month-title-text">${escapeHtml(data.title)}</h2>
                            <p class="month-tagline-text"><i class="fas fa-info-circle"></i> ${escapeHtml(data.tagline)}</p>
                            <div class="month-legal-ref">
                                <i class="fas fa-file-signature"></i> ${escapeHtml(data.officialRef || "Chờ văn bản hướng dẫn tổng kết công tác Đoàn năm 2026 của Ban Thường vụ Tỉnh đoàn Sơn La")}
                            </div>
                        </div>
                    </div>

                    <div class="month-pending-container">
                        <div class="pending-hero-box">
                            <i class="fas fa-hourglass-half pending-hero-icon"></i>
                            <h3 class="pending-hero-title">Đang Chờ Ban Hành Tài Liệu Chính Thức</h3>
                            <p class="pending-hero-desc">
                                Nội dung sinh hoạt và đề cương định hướng công tác Đoàn <strong>Tháng 12/2026</strong> đang chờ văn bản chỉ đạo tổng kết năm chính thức từ <strong>Ban Thường vụ Tỉnh đoàn Sơn La</strong>. 
                                Đoàn xã Mường Lầm sẽ cập nhật toàn văn ngay khi văn bản được ký ban hành.
                            </p>
                            <div style="display:flex; justify-content:center; gap:0.8rem; flex-wrap:wrap;">
                                <button type="button" class="btn-primary" id="btn-hero-upload-m12" style="background:var(--primary-blue); font-size:0.9rem;">
                                    <i class="fas fa-upload"></i> Cán bộ Đoàn xã: Bổ sung tài liệu Tháng 12
                                </button>
                                <a href="tel:0354442054" class="btn-secondary" style="font-size:0.9rem; text-decoration:none;">
                                    <i class="fas fa-phone-alt"></i> Hotline Thường trực: 035.444.2054
                                </a>
                            </div>
                        </div>

                        <!-- Khung dự kiến các sự kiện lịch sử & định hướng tháng 12 -->
                        <div style="max-width:860px; margin:0 auto; text-align:left;">
                            <div class="part-box" style="margin-bottom:1.5rem;">
                                <div class="part-box-header">
                                    <h3><i class="fas fa-calendar-check" style="color:var(--star-gold);"></i> Dự kiến các ngày kỷ niệm & sự kiện chính trị trọng tâm Tháng 12</h3>
                                    <span class="part-box-badge badge-part-2">DỰ KIẾN LỊCH SỬ</span>
                                </div>
                                <div class="part-box-body">
                                    <div class="events-timeline-grid">
                                        ${(data.part2 && data.part2.events ? data.part2.events : []).map(ev => `
                                            <div class="event-timeline-card">
                                                <span class="event-date-badge"><i class="fas fa-calendar-day"></i> ${escapeHtml(ev.date)}</span>
                                                <h4 class="event-card-title">${escapeHtml(ev.name)}</h4>
                                                <p class="event-card-desc">${escapeHtml(ev.desc)}</p>
                                            </div>
                                        `).join("")}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;

            const btnUpload1 = document.getElementById("btn-open-upload-m12");
            const btnUpload2 = document.getElementById("btn-hero-upload-m12");
            const modalM12 = document.getElementById("modal-upload-month12");

            const openM12Modal = () => {
                if (modalM12) {
                    modalM12.classList.add("active");
                    const passInput = document.getElementById("m12-pass");
                    if (passInput) passInput.focus();
                }
            };
            if (btnUpload1) btnUpload1.addEventListener("click", openM12Modal);
            if (btnUpload2) btnUpload2.addEventListener("click", openM12Modal);
            return;
        }

        // TRƯỜNG HỢP: ĐÃ CÓ TÀI LIỆU CHÍNH THỨC (THÁNG 1 ĐẾN THÁNG 11 HOẶC T12 ĐÃ BỔ SUNG)
        const p1 = data.part1 || {};
        const p2 = data.part2 || {};
        const p3 = data.part3 || {};
        const p4 = data.part4 || {};
        const p5 = data.part5 || {};

        detailContainer.innerHTML = `
            <div class="month-reader-card" id="month-reader-card">
                <!-- HEADER CHUẨN CỔNG THÔNG TIN -->
                <div class="month-reader-header">
                    <div class="header-top-row">
                        <div style="display:flex; align-items:center; gap:0.6rem; flex-wrap:wrap;">
                            <span class="month-badge-pill"><img src="assets/logo-doan.png" alt="Huy hiệu Đoàn" style="width:18px;height:18px;vertical-align:middle;margin-right:4px;"> THÁNG ${data.month}/2026</span>
                            <span class="month-status-badge official">
                                <i class="fas fa-check-circle"></i> ${escapeHtml(data.statusBadge || "Đã ban hành - Tài liệu chính thức Tỉnh đoàn Sơn La")}
                            </span>
                        </div>

                        <!-- THANH CÔNG CỤ ĐIỀU KHIỂN & ĐỌC TIỆN ÍCH -->
                        <div class="reader-toolbar">
                            <div class="font-resizer-tool" title="Điều chỉnh cỡ chữ dễ đọc trên điện thoại">
                                <span class="tool-label"><i class="fas fa-text-height"></i> Chữ:</span>
                                <button type="button" class="btn-resizer" id="btn-font-dec" title="Giảm cỡ chữ (A-)">A-</button>
                                <span class="font-current-val" id="font-val-indicator">${currentMonthlyFontScale}%</span>
                                <button type="button" class="btn-resizer" id="btn-font-inc" title="Tăng cỡ chữ (A+)">A+</button>
                            </div>

                            <button type="button" class="btn-tool-action btn-tool-doc" id="btn-download-month-doc" title="Tải toàn văn đề cương sinh hoạt (.doc)">
                                <i class="fas fa-file-word"></i> Tải về (.doc)
                            </button>

                            <button type="button" class="btn-tool-action btn-tool-print" id="btn-print-month-a4" title="In đề cương sinh hoạt chuẩn A4">
                                <i class="fas fa-print"></i> In đề cương (A4)
                            </button>

                            <button type="button" class="btn-tool-action btn-tool-zalo" id="btn-copy-month-zalo" title="Sao chép nhanh định dạng Zalo gửi Bí thư Chi đoàn">
                                <i class="fas fa-share-alt"></i> Gửi Zalo
                            </button>

                            ${data.month === 12 ? `
                                <button type="button" class="btn-tool-action btn-tool-admin" id="btn-open-upload-m12" title="Chỉnh sửa tài liệu Tháng 12">
                                    <i class="fas fa-edit"></i> Cập nhật T12
                                </button>
                            ` : ""}
                        </div>
                    </div>

                    <div class="header-main-title">
                        <h2 class="month-title-text">${escapeHtml(data.title)}</h2>
                        <p class="month-tagline-text"><i class="fas fa-quote-left"></i> ${escapeHtml(data.tagline)} <i class="fas fa-quote-right"></i></p>
                        <div class="month-legal-ref">
                            <i class="fas fa-balance-scale"></i> ${escapeHtml(data.officialRef || "Tài liệu sinh hoạt chi đoàn định kỳ - Ban Thường vụ Tỉnh đoàn Sơn La")}
                        </div>
                    </div>
                </div>

                <!-- THANH MỤC LỤC CHUYỂN NHANH (STICKY TOC) -->
                <div class="month-toc-sticky-bar">
                    <span class="toc-title"><i class="fas fa-list-ol"></i> Mục lục:</span>
                    <a href="#toc-part1" class="toc-jump-link"><i class="fas fa-star" style="color:#eab308;"></i> Phần I: Học Bác</a>
                    <a href="#toc-part2" class="toc-jump-link"><i class="fas fa-history" style="color:#0284c7;"></i> Phần II: Lịch sử</a>
                    <a href="#toc-part3" class="toc-jump-link"><i class="fas ${p3.highlights && !p3.policies ? 'fa-bullhorn' : 'fa-gavel'}" style="color:#9333ea;"></i> ${escapeHtml(p3.shortTitle || (p3.highlights && !p3.policies ? "Phần III: Tuyên truyền" : "Phần III: Chính sách"))}</a>
                    <a href="#toc-part4" class="toc-jump-link"><i class="fas ${p4.policies && !p4.highlights ? 'fa-gavel' : 'fa-compass'}" style="color:#ea580c;"></i> ${escapeHtml(p4.shortTitle || (p4.policies && !p4.highlights ? "Phần IV: Chính sách" : "Phần IV: Định hướng"))}</a>
                    <a href="#toc-part5" class="toc-jump-link"><i class="fas fa-clipboard-list" style="color:#16a34a;"></i> Phần V: Kịch bản 60p</a>
                    <a href="#toc-docs" class="toc-jump-link"><i class="fas fa-paperclip" style="color:#dc2626;"></i> Tài liệu kèm</a>
                </div>

                <!-- NỘI DUNG 5 PHẦN CHI TIẾT (ĐIỀU CHỈNH ĐƯỢC CỠ CHỮ) -->
                <div class="month-reader-content" id="month-reader-content-body" style="font-size: ${currentMonthlyFontScale}%;">
                    <!-- PHẦN I: HỌC TẬP VÀ LÀM THEO BÁC -->
                    <div class="part-box" id="toc-part1">
                        <div class="part-box-header">
                            <h3><i class="fas fa-star" style="color:var(--star-gold);"></i> ${escapeHtml(p1.title || "Phần I – Học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh")}</h3>
                            <span class="part-box-badge badge-part-1">${escapeHtml(p1.badge || "TƯ TƯỞNG HỒ CHÍ MINH")}</span>
                        </div>
                        <div class="part-box-body">
                            <div class="lotus-quote-callout">
                                <div class="quote-heading"><i class="fas fa-bookmark"></i> Chuyên đề trọng tâm tháng:</div>
                                <div class="quote-body">
                                    <strong style="color:#92400e;">${escapeHtml(p1.topic || "")}</strong>
                                    <p style="margin-top:0.6rem; color:#78350f;">${escapeHtml(p1.content || "")}</p>
                                </div>
                            </div>

                            <h4 class="action-points-heading">
                                <i class="fas fa-check-circle"></i> Trọng tâm hành động của Đoàn viên thanh niên xã Mường Lầm:
                            </h4>
                            <ul class="action-points-list">
                                ${(p1.actionPoints || []).map(pt => `<li>${escapeHtml(pt)}</li>`).join("")}
                            </ul>
                        </div>
                    </div>

                    <!-- PHẦN II: THEO DÒNG LỊCH SỬ & NGÀY NÀY NĂM XƯA -->
                    <div class="part-box" id="toc-part2">
                        <div class="part-box-header">
                            <h3><i class="fas fa-landmark" style="color:var(--primary-blue);"></i> ${escapeHtml(p2.title || "Phần II – Theo dòng lịch sử, những ngày đáng nhớ")}</h3>
                            <span class="part-box-badge badge-part-2">${escapeHtml(p2.badge || "TRUYỀN THỐNG VẺ VANG")}</span>
                        </div>
                        <div class="part-box-body">
                            <div class="events-timeline-grid">
                                ${(p2.events || []).map(ev => `
                                    <div class="event-timeline-card">
                                        <span class="event-date-badge"><i class="fas fa-calendar-day"></i> ${escapeHtml(ev.date)}</span>
                                        <h4 class="event-card-title">${escapeHtml(ev.name)}</h4>
                                        <p class="event-card-desc">${escapeHtml(ev.desc)}</p>
                                    </div>
                                `).join("")}
                            </div>
                        </div>
                    </div>

                    <!-- PHẦN III: CHÍNH SÁCH HOẶC ĐỊNH HƯỚNG TUYÊN TRUYỀN -->
                    <div class="part-box" id="toc-part3">
                        <div class="part-box-header">
                            <h3><i class="fas ${p3.highlights && !p3.policies ? 'fa-bullhorn' : 'fa-gavel'}" style="color:#9333ea;"></i> ${escapeHtml(p3.title || "Phần III – Chính sách mới - Pháp luật cần biết")}</h3>
                            <span class="part-box-badge badge-part-3">${escapeHtml(p3.badge || (p3.highlights && !p3.policies ? "TUYÊN TRUYỀN MIỆNG" : "CHÍNH SÁCH MỚI"))}</span>
                        </div>
                        <div class="part-box-body">
                            ${p3.policies && p3.policies.length > 0 ? `
                                <div class="policies-modern-grid">
                                    ${p3.policies.map(pol => `
                                        <div class="policy-modern-card">
                                            <span class="policy-code-badge"><i class="fas fa-file-contract"></i> ${escapeHtml(pol.code)}</span>
                                            <h4 class="policy-card-title">${escapeHtml(pol.name)}</h4>
                                            <p class="policy-card-desc">${escapeHtml(pol.desc)}</p>
                                        </div>
                                    `).join("")}
                                </div>
                            ` : ""}
                            ${p3.highlights && p3.highlights.length > 0 ? `
                                <ul class="highlights-modern-list">
                                    ${p3.highlights.map(hl => `
                                        <li>
                                            <i class="fas fa-chevron-circle-right"></i>
                                            <div>${escapeHtml(hl)}</div>
                                        </li>
                                    `).join("")}
                                </ul>
                            ` : ""}
                        </div>
                    </div>

                    <!-- PHẦN IV: ĐỊNH HƯỚNG CÔNG TÁC ĐOÀN HOẶC CHÍNH SÁCH MỚI -->
                    <div class="part-box" id="toc-part4">
                        <div class="part-box-header">
                            <h3><i class="fas ${p4.policies && !p4.highlights ? 'fa-gavel' : 'fa-compass'}" style="color:var(--doan-orange);"></i> ${escapeHtml(p4.title || "Phần IV – Định hướng công tác Đoàn & Phong trào thanh thiếu nhi")}</h3>
                            <span class="part-box-badge badge-part-4">${escapeHtml(p4.badge || (p4.policies && !p4.highlights ? "CHÍNH SÁCH MỚI" : "ĐỊNH HƯỚNG HÀNH ĐỘNG"))}</span>
                        </div>
                        <div class="part-box-body">
                            ${p4.policies && p4.policies.length > 0 ? `
                                <div class="policies-modern-grid">
                                    ${p4.policies.map(pol => `
                                        <div class="policy-modern-card">
                                            <span class="policy-code-badge"><i class="fas fa-file-contract"></i> ${escapeHtml(pol.code)}</span>
                                            <h4 class="policy-card-title">${escapeHtml(pol.name)}</h4>
                                            <p class="policy-card-desc">${escapeHtml(pol.desc)}</p>
                                        </div>
                                    `).join("")}
                                </div>
                            ` : ""}
                            ${p4.highlights && p4.highlights.length > 0 ? `
                                <ul class="highlights-modern-list">
                                    ${p4.highlights.map(hl => `
                                        <li>
                                            <i class="fas fa-chevron-circle-right"></i>
                                            <div>${escapeHtml(hl)}</div>
                                        </li>
                                    `).join("")}
                                </ul>
                            ` : ""}
                        </div>
                    </div>

                    <!-- PHẦN V: KHUNG KỊCH BẢN ĐIỀU HÀNH BUỔI HỌP (60 PHÚT) & TÀI LIỆU -->
                    <div class="part-box" id="toc-part5">
                        <div class="part-box-header">
                            <h3><i class="fas fa-clipboard-check" style="color:#166534;"></i> ${escapeHtml(p5.title || "Phần V – Khung kịch bản điều hành sinh hoạt chi đoàn mẫu (60 phút)")}</h3>
                            <div style="display:flex; align-items:center; gap:0.5rem;">
                                <button type="button" class="btn-tool-action" id="btn-copy-agenda-box" style="background:#166534; color:#ffffff; border:none; font-size:0.75rem;">
                                    <i class="far fa-copy"></i> Sao chép kịch bản
                                </button>
                                <span class="part-box-badge badge-part-5">THỜI LƯỢNG: 60 PHÚT</span>
                            </div>
                        </div>
                        <div class="part-box-body">
                            <div class="part5-layout-grid">
                                <div>
                                    <h4 style="font-size:0.92rem; font-weight:800; color:var(--text-primary); margin-bottom:0.6rem;">
                                        <i class="fas fa-stopwatch" style="color:var(--primary-blue);"></i> Tiến trình điều hành chi tiết dành cho Bí thư Chi đoàn:
                                    </h4>
                                    <div class="agenda-modern-box" id="meeting-agenda-pre">${escapeHtml(p5.agenda || data.meetingAgenda || "")}</div>
                                    ${p5.note ? `
                                        <p style="font-size:0.8rem; color:var(--text-secondary); margin-top:0.6rem; font-style:italic;">
                                            <i class="fas fa-info-circle" style="color:var(--primary-blue);"></i> <strong>Lưu ý:</strong> ${escapeHtml(p5.note)}
                                        </p>
                                    ` : ""}
                                </div>

                                <div>
                                    <div class="discussion-qa-card">
                                        <h4><i class="fas fa-comments" style="color:var(--primary-blue);"></i> Gợi ý câu hỏi thảo luận tại bản:</h4>
                                        <ul class="discussion-qa-list">
                                            ${(p5.discussionQuestions || data.discussionQuestions || []).map(q => `<li>${escapeHtml(q)}</li>`).join("")}
                                        </ul>
                                    </div>

                                    <div class="ai-prompt-callout">
                                        <strong><i class="fas fa-robot"></i> Ứng dụng AI sáng tạo tháng này:</strong>
                                        <p style="margin:0;">${escapeHtml(p5.aiTip || data.aiTip || "")}</p>
                                    </div>

                                    <div class="side-box" id="toc-docs" style="margin-top:1rem;">
                                        <h4 style="font-size:0.88rem; font-weight:800; color:var(--text-primary); margin-bottom:0.6rem;">
                                            <i class="fas fa-paperclip" style="color:var(--doan-red);"></i> Danh mục tài liệu đính kèm mẫu:
                                        </h4>
                                        <ul class="docs-list">
                                            ${(data.documents || []).map(doc => `
                                                <li class="doc-item">
                                                    <div class="doc-info">
                                                        <i class="far fa-file-alt doc-icon"></i>
                                                        <div>
                                                            <div class="doc-name">${escapeHtml(doc.name)}</div>
                                                            <div class="doc-size">Định dạng: ${escapeHtml(doc.type)} • Dung lượng: ${escapeHtml(doc.size)}</div>
                                                        </div>
                                                    </div>
                                                    <button type="button" class="btn-download-doc" onclick="downloadSampleDoc('${escapeHtml(doc.name)}', ${data.month})">
                                                        <i class="fas fa-download"></i> Tải về
                                                    </button>
                                                </li>
                                            `).join("")}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // GẮN CÁC SỰ KIỆN TƯƠNG TÁC CỦA READER
        // 1. Điều chỉnh cỡ chữ
        const btnFontDec = document.getElementById("btn-font-dec");
        const btnFontInc = document.getElementById("btn-font-inc");
        const fontIndicator = document.getElementById("font-val-indicator");
        const readerContent = document.getElementById("month-reader-content-body");

        if (btnFontDec && btnFontInc && fontIndicator && readerContent) {
            btnFontDec.addEventListener("click", () => {
                if (currentMonthlyFontScale > 85) {
                    currentMonthlyFontScale -= 10;
                    fontIndicator.textContent = currentMonthlyFontScale + "%";
                    readerContent.style.fontSize = currentMonthlyFontScale + "%";
                }
            });
            btnFontInc.addEventListener("click", () => {
                if (currentMonthlyFontScale < 140) {
                    currentMonthlyFontScale += 10;
                    fontIndicator.textContent = currentMonthlyFontScale + "%";
                    readerContent.style.fontSize = currentMonthlyFontScale + "%";
                }
            });
        }

        // 2. Tải toàn văn đề cương sinh hoạt (.doc)
        const btnDownloadDoc = document.getElementById("btn-download-month-doc");
        if (btnDownloadDoc) {
            btnDownloadDoc.addEventListener("click", () => downloadMeetingAgendaFile(data));
        }

        // 3. In đề cương chuẩn A4
        const btnPrint = document.getElementById("btn-print-month-a4");
        if (btnPrint) {
            btnPrint.addEventListener("click", () => {
                window.print();
            });
        }

        // 4. Gửi Zalo / Sao chép nhanh cho Bí thư Chi đoàn
        const btnCopyZalo = document.getElementById("btn-copy-month-zalo");
        if (btnCopyZalo) {
            btnCopyZalo.addEventListener("click", () => copyMonthlyZalo(data));
        }

        // 5. Sao chép khung kịch bản 60 phút
        const btnCopyAgendaBox = document.getElementById("btn-copy-agenda-box");
        if (btnCopyAgendaBox) {
            btnCopyAgendaBox.addEventListener("click", () => {
                const textToCopy = p5.agenda || data.meetingAgenda || "";
                navigator.clipboard.writeText(textToCopy).then(() => {
                    showToast(`Đã sao chép kịch bản điều hành Tháng ${data.month}! Dán ngay vào Zalo gửi Bí thư Chi đoàn.`);
                }).catch(() => {
                    showToast("Vui lòng bôi đen và sao chép thủ công.");
                });
            });
        }

        // 6. Nút mở modal upload Tháng 12 nếu đang xem tháng 12
        const btnAdminM12 = document.getElementById("btn-open-upload-m12");
        if (btnAdminM12) {
            btnAdminM12.addEventListener("click", () => {
                const modalM12 = document.getElementById("modal-upload-month12");
                if (modalM12) {
                    modalM12.classList.add("active");
                    const passInput = document.getElementById("m12-pass");
                    if (passInput) passInput.focus();
                }
            });
        }
    }

    // KHỞI TẠO BỘ NÚT VÀ HIỂN THỊ THÁNG ĐẦU TIÊN
    renderSelectorButtons();
    renderMonthDetail(activeSelectedMonth);

    // XỬ LÝ FORM UPLOAD TÀI LIỆU THÁNG 12 (MODAL 8)
    const formUploadM12 = document.getElementById("form-upload-month12");
    if (formUploadM12) {
        formUploadM12.addEventListener("submit", function (e) {
            e.preventDefault();
            const pass = document.getElementById("m12-pass").value.trim();
            if (pass !== "muonglam2026") {
                showToast("Mật khẩu xác thực Cán bộ Đoàn không đúng! (Mã demo: muonglam2026)");
                return;
            }

            const titleVal = document.getElementById("m12-title").value.trim();
            const taglineVal = document.getElementById("m12-tagline").value.trim() || "Tổng kết công tác Đoàn năm 2026 và phong trào thanh thiếu nhi";
            const part1Val = document.getElementById("m12-part1").value.trim();
            const agendaVal = document.getElementById("m12-agenda").value.trim();
            const isOfficial = document.getElementById("m12-mark-official").checked;

            const list = getMonthlyActivitiesList();
            const m12Index = list.findIndex(item => item.month === 12);
            if (m12Index !== -1) {
                list[m12Index].isBlank = false;
                list[m12Index].title = titleVal;
                list[m12Index].tagline = taglineVal;
                list[m12Index].statusBadge = isOfficial ? "Đã ban hành - Tài liệu chính thức Tỉnh đoàn Sơn La" : "Đã bổ sung bởi Đoàn xã Mường Lầm";
                list[m12Index].statusClass = "status-official";

                if (part1Val) {
                    list[m12Index].part1.content = part1Val;
                    list[m12Index].part1.topic = "Học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh về tự phê bình và phê bình, nêu cao tinh thần trách nhiệm phụng sự nhân dân";
                }
                if (agendaVal) {
                    list[m12Index].part5.agenda = agendaVal;
                    list[m12Index].meetingAgenda = agendaVal;
                }

                saveMonthlyActivitiesList(list);
                activitiesList = list;

                // Ẩn modal và làm sạch form
                document.getElementById("modal-upload-month12").classList.remove("active");
                formUploadM12.reset();

                // Cập nhật giao diện
                activeSelectedMonth = 12;
                renderSelectorButtons();
                renderMonthDetail(12);

                showToast("Đã lưu và xuất bản tài liệu sinh hoạt Chi đoàn Tháng 12/2026 thành công!");
            }
        });
    }
}

// ===================================================================
// HÀM XUẤT FILE VĂN BẢN WORD (.DOC) TOÀN VĂN ĐỀ CƯƠNG SINH HOẠT
// Chuẩn thể thức văn bản Đoàn TNCS Hồ Chí Minh
// ===================================================================
function downloadMeetingAgendaFile(monthData) {
    const p1 = monthData.part1 || {};
    const p2 = monthData.part2 || {};
    const p3 = monthData.part3 || {};
    const p4 = monthData.part4 || {};
    const p5 = monthData.part5 || {};

    const wordHtml = `
<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
<head>
    <meta charset='utf-8'>
    <title>Đề Cương Sinh Hoạt Chi Đoàn Tháng ${monthData.month}/2026 - Xã Mường Lầm</title>
    <style>
        body { font-family: 'Times New Roman', serif; font-size: 13pt; line-height: 1.5; color: #000000; margin: 2cm 2cm 2cm 2.5cm; }
        .header-table { width: 100%; border-collapse: collapse; margin-bottom: 20pt; }
        .header-table td { vertical-align: top; text-align: center; font-size: 11pt; }
        .org-title { font-weight: bold; text-transform: uppercase; }
        .doc-title { text-align: center; font-size: 16pt; font-weight: bold; color: #003399; margin: 15pt 0 5pt 0; text-transform: uppercase; }
        .doc-subtitle { text-align: center; font-size: 13pt; font-weight: bold; font-style: italic; margin-bottom: 15pt; }
        .part-head { font-size: 13.5pt; font-weight: bold; color: #003399; margin-top: 15pt; margin-bottom: 5pt; text-transform: uppercase; }
        .sub-head { font-size: 13pt; font-weight: bold; margin-top: 8pt; margin-bottom: 4pt; }
        ul { margin-top: 4pt; margin-bottom: 8pt; padding-left: 20pt; }
        li { margin-bottom: 4pt; text-align: justify; }
        p { text-align: justify; margin: 4pt 0; }
        .box-quote { background-color: #f8fafc; border-left: 3pt solid #0054A6; padding: 8pt 12pt; margin: 8pt 0; font-style: italic; }
        .agenda-pre { font-family: 'Times New Roman', serif; font-size: 12.5pt; white-space: pre-wrap; background-color: #fdfdfd; border: 1pt solid #dddddd; padding: 10pt; }
        .footer-table { width: 100%; border-collapse: collapse; margin-top: 30pt; }
        .footer-table td { text-align: center; vertical-align: top; font-size: 12pt; }
    </style>
</head>
<body>
    <table class="header-table">
        <tr>
            <td style="width: 45%;">
                ĐOÀN TNCS HỒ CHÍ MINH TỈNH SƠN LA<br>
                <strong>BCH ĐOÀN XÃ MƯỜNG LẦM</strong><br>
                ***<br>
                Số: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/ĐC-ĐTN
            </td>
            <td style="width: 55%;">
                <strong>CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</strong><br>
                <strong>Độc lập - Tự do - Hạnh phúc</strong><br>
                -------------------------<br>
                <em>Mường Lầm, ngày &nbsp;&nbsp;&nbsp;&nbsp; tháng ${monthData.month < 10 ? "0" + monthData.month : monthData.month} năm 2026</em>
            </td>
        </tr>
    </table>

    <div class="doc-title">TÀI LIỆU VÀ ĐỀ CƯƠNG SINH HOẠT CHI ĐOÀN ĐỊNH KỲ</div>
    <div class="doc-subtitle">THÁNG ${monthData.month} NĂM 2026</div>
    <p style="text-align: center; font-weight: bold; color: #cc0000; font-size: 13pt; margin-bottom: 15pt;">
        CHỦ ĐỀ: "${escapeHtml(monthData.title.toUpperCase())}"<br>
        <em>Khẩu hiệu hành động: "${escapeHtml(monthData.tagline)}"</em>
    </p>

    <div class="part-head">${escapeHtml(p1.title || "PHẦN I: HỌC TẬP VÀ LÀM THEO TƯ TƯỞNG, ĐẠO ĐỨC, PHONG CÁCH HỒ CHÍ MINH")}</div>
    <div class="box-quote">
        <strong>Chuyên đề học Bác:</strong> ${escapeHtml(p1.topic || "")}<br><br>
        ${escapeHtml(p1.content || "")}
    </div>
    <div class="sub-head">Trọng tâm hành động tại Chi đoàn:</div>
    <ul>
        ${(p1.actionPoints || []).map(pt => `<li>${escapeHtml(pt)}</li>`).join("")}
    </ul>

    <div class="part-head">${escapeHtml(p2.title || "PHẦN II: THEO DÒNG LỊCH SỬ & NGÀY NÀY NĂM XƯA")}</div>
    <ul>
        ${(p2.events || []).map(ev => `
            <li>
                <strong>${escapeHtml(ev.date)} - ${escapeHtml(ev.name)}:</strong> ${escapeHtml(ev.desc)}
            </li>
        `).join("")}
    </ul>

    <div class="part-head">${escapeHtml(p3.title || "PHẦN III")}</div>
    ${p3.policies && p3.policies.length > 0 ? `
    <ul>
        ${p3.policies.map(pol => `
            <li>
                <strong>[${escapeHtml(pol.code)}] ${escapeHtml(pol.name)}:</strong> ${escapeHtml(pol.desc)}
            </li>
        `).join("")}
    </ul>
    ` : ""}
    ${p3.highlights && p3.highlights.length > 0 ? `
    <ul>
        ${p3.highlights.map(hl => `<li>${escapeHtml(hl)}</li>`).join("")}
    </ul>
    ` : ""}

    <div class="part-head">${escapeHtml(p4.title || "PHẦN IV")}</div>
    ${p4.policies && p4.policies.length > 0 ? `
    <ul>
        ${p4.policies.map(pol => `
            <li>
                <strong>[${escapeHtml(pol.code)}] ${escapeHtml(pol.name)}:</strong> ${escapeHtml(pol.desc)}
            </li>
        `).join("")}
    </ul>
    ` : ""}
    ${p4.highlights && p4.highlights.length > 0 ? `
    <ul>
        ${p4.highlights.map(hl => `<li>${escapeHtml(hl)}</li>`).join("")}
    </ul>
    ` : ""}

    <div class="part-head">${escapeHtml(p5.title || "PHẦN V: KHUNG KỊCH BẢN ĐIỀU HÀNH BUỔI HỌP CHI ĐOÀN (60 PHÚT)")}</div>
    <div class="sub-head">1. Khung tiến trình điều hành chi tiết:</div>
    <div class="agenda-pre">${escapeHtml(p5.agenda || monthData.meetingAgenda || "")}</div>

    <div class="sub-head" style="margin-top: 10pt;">2. Gợi ý câu hỏi thảo luận:</div>
    <ul>
        ${(p5.discussionQuestions || monthData.discussionQuestions || []).map(q => `<li>${escapeHtml(q)}</li>`).join("")}
    </ul>

    <div class="sub-head">3. Gợi ý ứng dụng công nghệ và trí tuệ nhân tạo (AI):</div>
    <p><em>${escapeHtml(p5.aiTip || monthData.aiTip || "")}</em></p>

    <table class="footer-table">
        <tr>
            <td style="width: 50%;">
                <strong>Nơi nhận:</strong><br>
                <div style="text-align: left; font-size: 10.5pt; padding-left: 20pt;">
                    - Thường trực Đảng ủy xã (b/c);<br>
                    - BTV Tỉnh đoàn Sơn La (b/c);<br>
                    - 22 Chi đoàn trực thuộc (t/h);<br>
                    - Lưu: VT, Cổng TTĐT.
                </div>
            </td>
            <td style="width: 50%;">
                <strong>TM. BAN CHẤP HÀNH ĐOÀN XÃ</strong><br>
                <strong>BÍ THƯ</strong><br><br><br><br>
                <strong>Lò Mạnh Quyền</strong>
            </td>
        </tr>
    </table>
</body>
</html>`;

    const blob = new Blob([wordHtml], { type: "application/msword;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `De_cuong_sinh_hoat_Chi_doan_Thang_${monthData.month}_Muong_Lam.doc`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast(`Đã xuất đề cương sinh hoạt Tháng ${monthData.month} thành công sang định dạng Word (.doc)!`);
}

// ===================================================================
// HÀM SAO CHÉP NHANH ĐỊNH DẠNG ZALO GỬI BÍ THƯ CHI ĐOÀN
// ===================================================================
function copyMonthlyZalo(monthData) {
    const p1 = monthData.part1 || {};
    const p2 = monthData.part2 || {};
    const p3 = monthData.part3 || {};
    const p4 = monthData.part4 || {};

    const p3Highlights = p3.highlights ? p3.highlights.slice(0, 2).map(hl => `✓ ${hl}`).join("\n") : (p3.policies || []).slice(0, 2).map(pol => `✓ [${pol.code}] ${pol.name}`).join("\n");
    const p4Highlights = p4.highlights ? p4.highlights.slice(0, 2).map(hl => `✓ ${hl}`).join("\n") : (p4.policies || []).slice(0, 2).map(pol => `✓ [${pol.code}] ${pol.name}`).join("\n");

    const zaloText = `[ĐOÀN XÃ MƯỜNG LẦM - TÀI LIỆU SINH HOẠT THÁNG ${monthData.month}/2026]
🇻🇳 CHỦ ĐỀ: ${monthData.title.toUpperCase()}
✨ Khẩu hiệu: "${monthData.tagline}"

⭐ PHẦN 1: HỌC TẬP VÀ LÀM THEO BÁC
- ${p1.topic || ""}
${(p1.actionPoints || []).slice(0, 2).map(pt => `+ ${pt}`).join("\n")}

🏛️ PHẦN 2: KỶ NIỆM LỊCH SỬ NỔI BẬT
${(p2.events || []).slice(0, 3).map(ev => `• ${ev.date}: ${ev.name}`).join("\n")}

🎯 TRỌNG TÂM CÔNG TÁC & CHÍNH SÁCH MỚI
${p3Highlights}
${p4Highlights}

⏱️ Kịch bản họp 60 phút và tài liệu toàn văn xem chi tiết tại Cổng thông tin:
🌐 Website: Đoàn xã Mường Lầm
📞 Hotline Thường trực: 035.444.2054
📧 Email: doanxamuonglam@gmail.com`;

    navigator.clipboard.writeText(zaloText).then(() => {
        showToast(`Đã sao chép nội dung tóm tắt Tháng ${monthData.month}! Mở Zalo và dán ngay gửi Bí thư Chi đoàn.`);
    }).catch(() => {
        showToast("Không thể tự động sao chép. Vui lòng thử lại.");
    });
}

window.downloadSampleDoc = function (docName, month) {
    const text = `CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM
Độc lập - Tự do - Hạnh phúc
-----------------------------
ĐOÀN TNCS HỒ CHÍ MINH XÃ MƯỜNG LẦM, TỈNH SƠN LA

TÀI LIỆU ĐÍNH KÈM: ${docName.toUpperCase()}
Phục vụ sinh hoạt Chi đoàn Tháng ${month}/2026

1. Căn cứ Chương trình công tác Đoàn và phong trào thanh thiếu nhi năm 2026 của Đoàn xã Mường Lầm;
2. Nhằm nâng cao chất lượng sinh hoạt chi đoàn, phát huy vai trò xung kích chuyển đổi số và bảo vệ an ninh trật tự bản làng.

NỘI DUNG CHI TIẾT:
- Xem xét tình hình đoàn viên thanh niên tại bản và các bạn đi làm ăn xa.
- Quán triệt thực hiện nghiêm các quy định của Đảng, Nhà nước và tổ chức Đoàn.
- Phát động các phong trào thi đua sản xuất, bảo vệ môi trường nông thôn mới.

Mọi ý kiến thắc mắc liên hệ Thường trực Đoàn xã qua Hotline: 035.444.2054
Gmail: doanxamuonglam@gmail.com

Mường Lầm, ngày sinh hoạt chi đoàn định kỳ.
TM. BAN CHẤP HÀNH ĐOÀN XÃ MƯỜNG LẦM
BÍ THƯ: LÒ MẠNH QUYỀN`;

    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${docName.replace(/\s+/g, "_")}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast(`Đang tải tài liệu: ${docName}`);
};


// ===================================================================
// 10. MODAL CƠ CẤU TỔ CHỨC: 22 ĐƠN VỊ TRỰC THUỘC (KHÓA I: 2025 - 2030)
// ===================================================================
function initOrganizationModal() {
    const modal = document.getElementById("village-modal");
    const openBtns = document.querySelectorAll(".btn-open-village-modal");
    const closeBtn = document.getElementById("btn-close-modal");
    const container = document.getElementById("village-cards-container");

    if (!modal || !container) return;

    let html = `
        <div style="background: #f8fafc; border: 1px solid #cbd5e1; border-radius: var(--radius-md); padding: 1rem 1.2rem; margin-bottom: 1.5rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.8rem;">
            <div>
                <h4 style="color: var(--primary-blue-dark); font-size: 1.05rem; font-weight: 800; margin: 0 0 4px 0;">
                    Đoàn TNCS Hồ Chí Minh <span class="whitespace-nowrap">xã Mường Lầm</span> (Khóa I, nhiệm kỳ 2025 - 2030)
                </h4>
                <p style="font-size: 0.82rem; color: #64748b; margin: 0;">
                    Tổng số: <strong>22 cơ sở Đoàn / Chi đoàn trực thuộc</strong> với <strong>1.028 đoàn viên</strong> đang sinh hoạt.
                </p>
            </div>
            <div style="display:flex; gap:0.5rem; flex-wrap:wrap;">
                <span style="background: #e0f2fe; color: #0284c7; padding: 4px 10px; border-radius: 6px; font-size: 0.75rem; font-weight: 700;">
                    Bản: 15 CĐ (506 ĐV)
                </span>
                <span style="background: #dcfce7; color: #15803d; padding: 4px 10px; border-radius: 6px; font-size: 0.75rem; font-weight: 700;">
                    Trường học: 05 ĐV (512 ĐV)
                </span>
                <span style="background: #fee2e2; color: #dc2626; padding: 4px 10px; border-radius: 6px; font-size: 0.75rem; font-weight: 700;">
                    Cơ quan & LLVT: 02 CĐ (10 ĐV)
                </span>
            </div>
        </div>

        <!-- 1. KHỐI CHI ĐOÀN BẢN (15 CHI ĐOÀN - 506 ĐOÀN VIÊN) -->
        <div style="margin-bottom: 1.8rem;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.8rem; border-bottom:2px solid var(--star-gold); padding-bottom:0.4rem; flex-wrap:wrap; gap:0.5rem;">
                <div style="display:flex; align-items:center; gap:0.5rem;">
                    <i class="fas fa-mountain" style="color:#ca8a04; font-size:1.1rem;"></i>
                    <h4 style="color:#854d0e; font-size:1rem; font-weight:800; text-transform:uppercase; margin:0;">
                        1. Khối Chi Đoàn Bản (15 Chi Đoàn - 506 Đoàn Viên)
                    </h4>
                </div>
                <span style="font-size:0.75rem; color:#854d0e; font-weight:700; background:#fef9c3; padding:2px 8px; border-radius:4px;">
                    100% có Tổ Công nghệ số Thanh niên
                </span>
            </div>
            <div class="village-cards-grid">
                ${MUONG_LAM_VILLAGES.map((v, i) => `
                    <div class="village-mini-card">
                        <h5>
                            <span style="color:#64748b; font-size:0.75rem; margin-right:4px;">#${i + 1}</span>
                            <i class="fas fa-home" style="color:var(--primary-blue);"></i> ${escapeHtml(v.name)}
                        </h5>
                        <p><strong>Bí thư Chi đoàn:</strong> <span style="color:var(--primary-blue-dark); font-weight:700;">${escapeHtml(v.secretary)}</span></p>
                        <p><strong>Số đoàn viên:</strong> <span style="color:#15803d; font-weight:800; font-size:0.88rem;">${v.youthCount} đồng chí</span></p>
                        <p><strong>Hộ dân cư bản:</strong> ${v.households} hộ</p>
                        <p><strong>Hotline liên hệ:</strong> <span style="color:var(--primary-blue); font-weight:600;">035.444.2054</span></p>
                    </div>
                `).join("")}
            </div>
        </div>

        <!-- 2. KHỐI CHI ĐOÀN TRƯỜNG HỌC (05 ĐƠN VỊ - 512 ĐOÀN VIÊN) -->
        <div style="margin-bottom: 1.8rem;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.8rem; border-bottom:2px solid var(--primary-blue); padding-bottom:0.4rem; flex-wrap:wrap; gap:0.5rem;">
                <div style="display:flex; align-items:center; gap:0.5rem;">
                    <i class="fas fa-school" style="color:var(--primary-blue); font-size:1.1rem;"></i>
                    <h4 style="color:var(--primary-blue-dark); font-size:1rem; font-weight:800; text-transform:uppercase; margin:0;">
                        2. Khối Chi Đoàn Trường Học (05 Đơn Vị - 512 Đoàn Viên)
                    </h4>
                </div>
                <span style="font-size:0.75rem; color:#1e40af; font-weight:700; background:#dbeafe; padding:2px 8px; border-radius:4px;">
                    Giáo viên & Học sinh
                </span>
            </div>
            <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(280px, 1fr)); gap:0.9rem;">
                ${MUONG_LAM_SCHOOL_BRANCHES.map(s => `
                    <div class="village-mini-card" style="border-left: 3px solid var(--primary-blue); background:#f0f9ff;">
                        <h5 style="color:#0369a1;"><i class="fas fa-graduation-cap"></i> ${escapeHtml(s.name)}</h5>
                        <p><strong>Bí thư:</strong> <span style="color:#0c4a6e; font-weight:700;">${escapeHtml(s.secretary)}</span></p>
                        <p><strong>Đoàn viên:</strong> <span style="color:#0284c7; font-weight:800; font-size:0.88rem;">${s.youthCount} đoàn viên</span></p>
                        <p style="font-size:0.75rem; color:#475569;">${escapeHtml(s.detail)}</p>
                    </div>
                `).join("")}
            </div>
        </div>

        <!-- 3. KHỐI CHI ĐOÀN CƠ QUAN & LỰC LƯỢNG VŨ TRANG (02 CHI ĐOÀN - 10 ĐOÀN VIÊN) -->
        <div>
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.8rem; border-bottom:2px solid var(--doan-red); padding-bottom:0.4rem; flex-wrap:wrap; gap:0.5rem;">
                <div style="display:flex; align-items:center; gap:0.5rem;">
                    <i class="fas fa-shield-alt" style="color:var(--doan-red); font-size:1.1rem;"></i>
                    <h4 style="color:var(--doan-red); font-size:1rem; font-weight:800; text-transform:uppercase; margin:0;">
                        3. Khối Cơ Quan & Lực Lượng Vũ Trang (02 Chi Đoàn - 10 Đoàn Viên)
                    </h4>
                </div>
                <span style="font-size:0.75rem; color:#b91c1c; font-weight:700; background:#fee2e2; padding:2px 8px; border-radius:4px;">
                    An ninh & Cải cách hành chính
                </span>
            </div>
            <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(320px, 1fr)); gap:0.9rem;">
                ${MUONG_LAM_AGENCY_BRANCHES.map(a => `
                    <div class="village-mini-card" style="border-left: 3px solid var(--doan-red); background:#fff5f5;">
                        <h5 style="color:#b91c1c;"><i class="fas fa-star" style="color:var(--doan-red);"></i> ${escapeHtml(a.name)}</h5>
                        <p><strong>Bí thư:</strong> <span style="color:#7f1d1d; font-weight:700;">${escapeHtml(a.secretary)}</span></p>
                        <p><strong>Đoàn viên:</strong> <span style="color:#dc2626; font-weight:800; font-size:0.88rem;">${a.youthCount} đoàn viên</span></p>
                        <p style="font-size:0.75rem; color:#475569;">${escapeHtml(a.detail)}</p>
                    </div>
                `).join("")}
            </div>
        </div>
    `;

    container.innerHTML = html;

    openBtns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            modal.classList.add("active");
        });
    });

    if (closeBtn) {
        closeBtn.addEventListener("click", () => modal.classList.remove("active"));
    }

    modal.addEventListener("click", (e) => {
        if (e.target === modal) modal.classList.remove("active");
    });
}

// ===================================================================
// 11. SCROLL SPY - THEO DÕI VỊ TRÍ CUỘN ĐỂ ACTIVE MENU
// ===================================================================
function initScrollSpy() {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-link");

    window.addEventListener("scroll", () => {
        let current = "";
        const scrollPosition = window.pageYOffset + 150;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${current}`) {
                link.classList.add("active");
            }
        });
    });
}

// ===================================================================
// HÀM TIỆN ÍCH DÙNG CHUNG
// ===================================================================
function showToast(message, isSuccess = true) {
    let container = document.getElementById("toast-container");
    if (!container) {
        container = document.createElement("div");
        container.id = "toast-container";
        container.className = "toast-container";
        document.body.appendChild(container);
    }

    const toast = document.createElement("div");
    toast.className = `toast ${isSuccess ? "toast-success" : ""}`;
    toast.innerHTML = `<i class="fas fa-info-circle"></i> <span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = "0";
        toast.style.transform = "translateY(10px)";
        toast.style.transition = "all 0.3s ease";
        setTimeout(() => toast.remove(), 300);
    }, 3200);
}

function escapeHtml(str) {
    if (!str) return "";
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

// ===================================================================
// PHÂN HỆ CHUYÊN BIỆT: MINH CHỨNG CÔNG TÁC ĐOÀN & PHONG TRÀO TTN 2026
// Bám sát Quyết định số 05-QĐ/TĐTN-CTĐ&TTN & Công văn 18-CV/ĐTN
// Người ký duyệt: TM. BAN CHẤP HÀNH ĐOÀN XÃ - BÍ THƯ LÒ MẠNH QUYỀN
// ===================================================================
const PROOF_STORAGE_KEY = "muonglam_portal_proofs_v3";

function getProofArticles() {
    const stored = localStorage.getItem(PROOF_STORAGE_KEY);
    if (!stored) {
        localStorage.setItem(PROOF_STORAGE_KEY, JSON.stringify(INITIAL_PROOF_ARTICLES));
        return INITIAL_PROOF_ARTICLES;
    }
    try {
        return JSON.parse(stored);
    } catch (e) {
        return INITIAL_PROOF_ARTICLES;
    }
}

function initProofSection() {
    const cardsContainer = document.getElementById("proof-cards-container");
    const tableContainer = document.getElementById("proof-table-container");
    const tableBody = document.getElementById("proof-table-body");
    const filterBtns = document.querySelectorAll(".proof-filter-btn");
    const searchInput = document.getElementById("proof-search-input");
    const btnViewCards = document.getElementById("btn-view-cards");
    const btnViewTable = document.getElementById("btn-view-table");
    const btnOpenExportModal = document.getElementById("btn-open-export-modal");
    const btnCopyAllLinks = document.getElementById("btn-copy-all-proof-links");

    if (!cardsContainer || !tableContainer) return;

    let currentFilter = "all";
    let searchQuery = "";

    function filterAndRender() {
        const proofs = getProofArticles();
        let filtered = proofs;

        if (currentFilter !== "all") {
            filtered = filtered.filter(p => p.group === currentFilter);
        }

        if (searchQuery.trim() !== "") {
            const q = searchQuery.toLowerCase().trim();
            filtered = filtered.filter(p => 
                (p.title && p.title.toLowerCase().includes(q)) ||
                (p.criteriaCode && p.criteriaCode.toLowerCase().includes(q)) ||
                (p.criteriaName && p.criteriaName.toLowerCase().includes(q)) ||
                (p.summary && p.summary.toLowerCase().includes(q)) ||
                (p.location && p.location.toLowerCase().includes(q)) ||
                (p.content && p.content.toLowerCase().includes(q))
            );
        }

        renderProofCards(filtered);
        renderProofTable(filtered);
    }

    window.renderProofListGlobal = filterAndRender;

    function renderProofCards(proofs) {
        cardsContainer.innerHTML = "";
        if (proofs.length === 0) {
            cardsContainer.innerHTML = `
                <div style="grid-column: 1/-1; text-align: center; padding: 3rem; background: #ffffff; border-radius: 8px; border: 1px dashed #cbd5e1; color: var(--text-muted);">
                    <i class="fas fa-clipboard-check" style="font-size: 2.5rem; color: var(--primary-blue); margin-bottom: 0.8rem; display: block;"></i>
                    Không tìm thấy bài viết minh chứng nào phù hợp với bộ lọc hiện tại.
                </div>
            `;
            return;
        }

        proofs.forEach(proof => {
            const card = document.createElement("article");
            card.className = "proof-card";
            card.innerHTML = `
                <div class="proof-card-thumb-wrap">
                    <img src="${proof.thumbnail || DEFAULT_NORTHWEST_FALLBACK_SVG}" alt="${escapeHtml(proof.title)}" class="proof-card-thumb object-cover" loading="lazy" onerror="handleImgError(this)">
                    <div class="proof-card-tag-top">
                        <span class="proof-badge-code">${escapeHtml(proof.criteriaCode)}</span>
                        <span class="proof-badge-pts">${escapeHtml(proof.points)}</span>
                    </div>
                    <span class="proof-badge-status-top"><i class="fas fa-check-circle"></i> Đầy đủ hồ sơ</span>
                </div>
                <div class="proof-card-body">
                    <div class="proof-criteria-label">
                        <i class="fas fa-bookmark"></i> ${escapeHtml(proof.criteriaName)}
                    </div>
                    <h3 class="proof-card-title" title="${escapeHtml(proof.title)}">${escapeHtml(proof.title)}</h3>
                    <p class="proof-card-desc">${escapeHtml(proof.summary || '')}</p>

                    <div class="proof-card-meta-list">
                        <div class="proof-card-meta-item">
                            <i class="far fa-calendar-alt"></i> <span><strong>Thời gian:</strong> ${escapeHtml(proof.date)}</span>
                        </div>
                        <div class="proof-card-meta-item">
                            <i class="fas fa-map-marker-alt"></i> <span><strong>Địa bàn:</strong> ${escapeHtml(proof.location)}</span>
                        </div>
                        <div class="proof-card-meta-item">
                            <i class="fas fa-users"></i> <span><strong>Quy mô:</strong> ${escapeHtml(proof.participantCount)}</span>
                        </div>
                        <div class="proof-card-meta-item">
                            <i class="fas fa-chart-pie"></i> <span><strong>Tỷ lệ:</strong> <span style="color:#15803d; font-weight:700;">${escapeHtml(proof.reachRate)}</span></span>
                        </div>
                    </div>

                    <div class="proof-card-actions">
                        <button class="btn-proof-view" onclick="openProofDetailModal('${proof.id}')">
                            <i class="fas fa-eye"></i> Xem minh chứng
                        </button>
                        <button class="btn-copy-proof-link" onclick="copyProofLink('${proof.id}')">
                            <i class="fas fa-copy"></i> Sao chép Link
                        </button>
                    </div>
                </div>
            `;
            cardsContainer.appendChild(card);
        });
    }

    function renderProofTable(proofs) {
        if (!tableBody) return;
        tableBody.innerHTML = "";

        if (proofs.length === 0) {
            tableBody.innerHTML = `
                <tr>
                    <td colspan="7" style="text-align:center; padding: 2.5rem; color: #64748b;">
                        Không có tiêu chí minh chứng nào phù hợp với điều kiện tìm kiếm.
                    </td>
                </tr>
            `;
            return;
        }

        proofs.forEach((proof, idx) => {
            const tr = document.createElement("tr");
            tr.innerHTML = `
                <td style="text-align:center; font-weight:700; color:#64748b;">${idx + 1}</td>
                <td>
                    <span class="td-code">${escapeHtml(proof.criteriaCode)}</span><br>
                    <span style="font-size:0.72rem; color:#64748b;">${escapeHtml(proof.groupName || '')}</span>
                </td>
                <td>
                    <strong style="color:var(--text-primary);">${escapeHtml(proof.title)}</strong><br>
                    <span style="font-size:0.75rem; color:var(--primary-blue);"><i class="fas fa-shield-alt"></i> ${escapeHtml(proof.criteriaName)}</span><br>
                    <span style="font-size:0.72rem; color:#64748b;"><i class="fas fa-map-marker-alt"></i> ${escapeHtml(proof.location)}</span>
                </td>
                <td class="td-pts">${escapeHtml(proof.points)}</td>
                <td>
                    <span style="font-size:0.8rem; font-weight:600;"><i class="fas fa-users"></i> ${escapeHtml(proof.participantCount)}</span><br>
                    <span style="font-size:0.75rem; color:#15803d; font-weight:700;"><i class="fas fa-chart-line"></i> ${escapeHtml(proof.reachRate)}</span>
                </td>
                <td class="td-status">
                    <span class="badge-proof-complete"><i class="fas fa-check-circle"></i> Đầy đủ 2 văn bản</span><br>
                    <span style="font-size:0.72rem; color:#b91c1c; font-weight:700;"><i class="fas fa-file-signature"></i> Bí thư Lò Mạnh Quyền</span>
                </td>
                <td>
                    <div class="proof-table-actions">
                        <button class="btn-table-action view" onclick="openProofDetailModal('${proof.id}')">
                            <i class="fas fa-eye"></i> Xem
                        </button>
                        <button class="btn-table-action copy" onclick="copyProofLink('${proof.id}')" title="Sao chép link gửi Tỉnh đoàn">
                            <i class="fas fa-link"></i> Link
                        </button>
                    </div>
                </td>
            `;
            tableBody.appendChild(tr);
        });
    }

    // Lắng nghe bộ lọc
    filterBtns.forEach(btn => {
        btn.addEventListener("click", function () {
            filterBtns.forEach(b => b.classList.remove("active"));
            this.classList.add("active");
            currentFilter = this.getAttribute("data-filter");
            filterAndRender();
        });
    });

    // Lắng nghe ô tìm kiếm
    if (searchInput) {
        searchInput.addEventListener("input", function (e) {
            searchQuery = e.target.value;
            filterAndRender();
        });
    }

    // Chuyển đổi View: Thẻ vs Bảng
    if (btnViewCards && btnViewTable) {
        btnViewCards.addEventListener("click", () => {
            btnViewCards.classList.add("active");
            btnViewTable.classList.remove("active");
            cardsContainer.style.display = "grid";
            tableContainer.style.display = "none";
        });

        btnViewTable.addEventListener("click", () => {
            btnViewTable.classList.add("active");
            btnViewCards.classList.remove("active");
            cardsContainer.style.display = "none";
            tableContainer.style.display = "block";
        });
    }

    // Mở Modal Xuất Báo Cáo
    if (btnOpenExportModal) {
        btnOpenExportModal.addEventListener("click", openExportProofsModal);
    }

    // Nút Sao chép toàn bộ danh sách 14 đường link
    if (btnCopyAllLinks) {
        btnCopyAllLinks.addEventListener("click", copyAllProofLinksToClipboard);
    }

    // Render ban đầu
    filterAndRender();
}

// Sao chép Link độc lập của từng Minh chứng
window.copyProofLink = function (proofId) {
    const url = `${window.location.origin}${window.location.pathname}#minh-chung=${proofId}`;
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(url).then(() => {
            showToast(`Đã sao chép link minh chứng ${proofId}! Sẵn sàng gửi Tỉnh đoàn Sơn La thẩm định.`);
        }).catch(() => {
            prompt("Sao chép đường link minh chứng dưới đây để gửi Tỉnh đoàn:", url);
        });
    } else {
        prompt("Sao chép đường link minh chứng dưới đây để gửi Tỉnh đoàn:", url);
    }
};

// Mở Modal Xem Chi Tiết Minh Chứng
window.openProofDetailModal = function (proofId) {
    const proofs = getProofArticles();
    const proof = proofs.find(p => p.id === proofId || p.slug === proofId);
    if (!proof) return;

    const proofUrl = `${window.location.origin}${window.location.pathname}#minh-chung=${proof.id}`;

    // Cập nhật hash trên URL mà không reload trang để người kiểm tra có thể lưu bookmark
    if (window.history && window.history.replaceState) {
        window.history.replaceState(null, null, `#minh-chung=${proof.id}`);
    }

    const modal = document.getElementById("proof-detail-modal");
    const container = document.getElementById("proof-detail-body");
    if (!modal || !container) return;

    container.innerHTML = `
        <div class="proof-modal-copy-bar">
            <div class="proof-modal-copy-info">
                <i class="fas fa-link" style="color:var(--primary-blue);"></i> 
                Đường dẫn minh chứng kiểm tra trực tuyến: <strong id="proof-current-link">${proofUrl}</strong>
            </div>
            <button class="btn-copy-proof-link" onclick="copyProofLink('${proof.id}')">
                <i class="fas fa-copy"></i> Sao chép Link gửi Tỉnh đoàn
            </button>
        </div>

        <!-- KHUNG THÔNG TIN ĐỊNH DANH HOẠT ĐỘNG (METADATA BOX) -->
        <div class="proof-metadata-box">
            <div class="proof-meta-banner-top">
                <div class="proof-meta-headline">
                    <i class="fas fa-clipboard-check"></i> KHUNG ĐỊNH DANH HOẠT ĐỘNG MINH CHỨNG • CHẤM ĐIỂM NĂM 2026
                </div>
                <div class="proof-meta-badge-qđ">
                    <i class="fas fa-gavel"></i> Quyết định số 05-QĐ/TĐTN-CTĐ&TTN
                </div>
            </div>

            <div class="proof-meta-grid">
                <div class="proof-meta-cell">
                    <label>Tiêu chí / Nhóm giải pháp</label>
                    <div class="value" style="color:var(--primary-blue);">${escapeHtml(proof.criteriaCode)}: ${escapeHtml(proof.criteriaName)} (${escapeHtml(proof.points)})</div>
                </div>
                <div class="proof-meta-cell">
                    <label>Căn cứ văn bản đăng ký</label>
                    <div class="value">${escapeHtml(proof.legalRef)}</div>
                </div>
                <div class="proof-meta-cell">
                    <label>Thời gian tổ chức</label>
                    <div class="value">${escapeHtml(proof.date)}</div>
                </div>
                <div class="proof-meta-cell">
                    <label>Địa điểm tổ chức</label>
                    <div class="value">${escapeHtml(proof.location)}</div>
                </div>
                <div class="proof-meta-cell">
                    <label>Đơn vị chủ trì</label>
                    <div class="value">${escapeHtml(proof.leadUnit || 'Ban Chấp hành Đoàn xã Mường Lầm')}</div>
                </div>
                <div class="proof-meta-cell">
                    <label>Đơn vị phối hợp</label>
                    <div class="value">${escapeHtml(proof.coUnit || 'Chi đoàn Công an xã, Đoàn Trường THPT Mường Lầm, Cấp ủy 15 bản')}</div>
                </div>
                <div class="proof-meta-cell">
                    <label>Quy mô số lượng ĐVTN tham gia</label>
                    <div class="value">${escapeHtml(proof.participantCount)}</div>
                </div>
                <div class="proof-meta-cell">
                    <label>Tỷ lệ % tiếp cận / chỉ tiêu</label>
                    <div class="value highlight-rate">${escapeHtml(proof.reachRate)}</div>
                </div>
                <div class="proof-meta-cell" style="grid-column: 1 / -1;">
                    <label>Người ký duyệt hồ sơ</label>
                    <div class="value signer-highlight">
                        <i class="fas fa-file-signature"></i> ${escapeHtml(proof.signer || 'TM. BAN CHẤP HÀNH ĐOÀN XÃ - BÍ THƯ LÒ MẠNH QUYỀN')}
                    </div>
                </div>
            </div>

            <!-- KHU VỰC ĐÍNH KÈM HỒ SƠ & TẢI VĂN BẢN XÁC NHẬN -->
            <div class="proof-docs-box">
                <div class="proof-docs-title">
                    <i class="fas fa-folder-open" style="color:var(--primary-blue);"></i> Hồ sơ minh chứng đính kèm (Có xác nhận của Cấp ủy - Chính quyền):
                </div>
                <div class="proof-docs-list">
                    <a href="javascript:void(0)" onclick="downloadProofDoc('${escapeHtml(proof.keHoachDoc)}', 'ke-hoach')" class="proof-doc-btn">
                        <i class="fas fa-file-pdf"></i>
                        <span><strong>1. Kế hoạch tổ chức:</strong> ${escapeHtml(proof.keHoachDoc)}</span>
                    </a>
                    <a href="javascript:void(0)" onclick="downloadProofDoc('${escapeHtml(proof.baoCaoDoc)}', 'bao-cao')" class="proof-doc-btn">
                        <i class="fas fa-file-signature" style="color:#15803d;"></i>
                        <span><strong>2. Báo cáo kết quả Cấp ủy duyệt:</strong> ${escapeHtml(proof.baoCaoDoc)}</span>
                    </a>
                </div>
            </div>
        </div>

        <h2 style="font-size:1.3rem; font-weight:800; color:var(--text-primary); margin-bottom:1rem; line-height:1.4;">
            ${escapeHtml(proof.title)}
        </h2>

        <img src="${proof.thumbnail || DEFAULT_NORTHWEST_FALLBACK_SVG}" alt="${escapeHtml(proof.title)}" class="article-cover-img object-cover" loading="lazy" onerror="handleImgError(this)">

        <div class="article-content-text" style="margin-top:1.2rem; white-space:pre-line;">
            ${escapeHtml(proof.content)}
        </div>

        <div class="article-share-bar" style="margin-top:1.5rem;">
            <span style="font-size:0.85rem; font-weight:700; color:var(--text-secondary);">
                <i class="fas fa-share-alt"></i> Chia sẻ đường link minh chứng này:
            </span>
            <div class="share-btns-group">
                <button class="btn-share btn-share-zalo" onclick="shareArticle('zalo', '${escapeHtml(proof.title)}')">
                    <i class="fas fa-comment"></i> Zalo
                </button>
                <button class="btn-share btn-share-fb" onclick="shareArticle('facebook', '${escapeHtml(proof.title)}')">
                    <i class="fab fa-facebook-f"></i> Facebook
                </button>
                <button class="btn-share" onclick="copyProofLink('${proof.id}')">
                    <i class="fas fa-copy"></i> Sao chép Link gửi Tỉnh đoàn
                </button>
            </div>
        </div>
    `;

    modal.classList.add("active");
};

// Tải / Mở văn bản xác nhận số
window.downloadProofDoc = function (docName, type) {
    showToast(`Đang mở văn bản xác nhận: ${docName}...`);
    const win = window.open("", "_blank");
    if (win) {
        win.document.write(`
            <!DOCTYPE html>
            <html lang="vi">
            <head>
                <meta charset="UTF-8">
                <title>${docName} - Đoàn Xã Mường Lầm</title>
                <style>
                    body { font-family: "Times New Roman", Times, serif; padding: 40px; max-width: 820px; margin: auto; line-height: 1.6; color: #000000; }
                    .header { display: flex; justify-content: space-between; text-align: center; margin-bottom: 25px; border-bottom: 1px solid #000; padding-bottom: 15px; }
                    .title { text-align: center; font-size: 19px; font-weight: bold; margin: 25px 0 15px; text-transform: uppercase; }
                    .meta-info { margin: 20px 0; font-size: 15px; }
                    .content-box { margin: 20px 0; text-align: justify; }
                    .seal-box { border: 2px dashed #b91c1c; color: #b91c1c; border-radius: 8px; padding: 12px; display: block; font-weight: bold; margin: 30px 0; text-align: center; }
                    .footer-signers { display: flex; justify-content: space-between; margin-top: 40px; text-align: center; }
                    .signer-col { width: 260px; }
                    .btn-print { background: #0054A6; color: #fff; border: none; padding: 10px 20px; font-size: 14px; font-weight: bold; border-radius: 6px; cursor: pointer; }
                </style>
            </head>
            <body>
                <div class="header">
                    <div>
                        <strong>ĐOÀN TNCS HỒ CHÍ MINH TỈNH SƠN LA</strong><br>
                        <strong>BAN CHẤP HÀNH ĐOÀN XÃ MƯỜNG LẦM</strong><br>
                        <span style="font-size: 13px;">Số: 18-CV/ĐTN</span>
                    </div>
                    <div>
                        <strong>CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</strong><br>
                        <strong style="text-decoration: underline;">Độc lập - Tự do - Hạnh phúc</strong><br>
                        <em>Mường Lầm, năm 2026</em>
                    </div>
                </div>

                <div class="title">${escapeHtml(docName)}</div>

                <div class="content-box">
                    <p><strong>Căn cứ:</strong></p>
                    <ul>
                        <li>Quyết định số 05-QĐ/TĐTN-CTĐ&TTN của Ban Thường vụ Tỉnh đoàn Sơn La về ban hành Bộ Tiêu chí đánh giá công tác Đoàn và phong trào thanh thiếu nhi năm 2026.</li>
                        <li>Công văn đăng ký thi đua số 18-CV/ĐTN của Ban Chấp hành Đoàn TNCS Hồ Chí Minh xã Mường Lầm.</li>
                    </ul>
                    <p>Hồ sơ và số liệu tổ chức hoạt động đã được Ban Chấp hành Đoàn xã Mường Lầm tổng hợp trung thực, đầy đủ hình ảnh, số lượt đoàn viên thanh niên tham gia và được Cấp ủy - Chính quyền địa phương thẩm định, phê duyệt.</p>
                </div>

                <div class="seal-box">
                    ✓ HỒ SƠ ĐÃ ĐƯỢC XÁC THỰC SỐ PHỤC VỤ CÔNG TÁC THẨM ĐỊNH CỦA BAN THƯỜNG VỤ TỈNH ĐOÀN SƠN LA
                </div>

                <div class="footer-signers">
                    <div class="signer-col">
                        <strong>XÁC NHẬN CỦA ĐẢNG ỦY - UBND XÃ MƯỜNG LẦM</strong><br>
                        <em>(Đã ký tên và đóng dấu)</em>
                    </div>
                    <div class="signer-col">
                        <strong>TM. BAN CHẤP HÀNH ĐOÀN XÃ</strong><br>
                        <strong>BÍ THƯ</strong><br><br><br><br>
                        <strong style="color:#b91c1c; font-size:16px;">Lò Mạnh Quyền</strong>
                    </div>
                </div>

                <div style="text-align: center; margin-top: 40px;" class="no-print">
                    <button class="btn-print" onclick="window.print()">In văn bản này / Lưu PDF gửi Tỉnh đoàn</button>
                </div>
            </body>
            </html>
        `);
        win.document.close();
    }
};

// Mở Modal Xuất Báo Cáo Danh Mục 14 Đường Link
function openExportProofsModal() {
    const proofs = getProofArticles();
    const modal = document.getElementById("export-proofs-modal");
    const container = document.getElementById("export-proofs-render");
    if (!modal || !container) return;

    const baseOrigin = window.location.origin + window.location.pathname;

    let rowsHtml = proofs.map((p, idx) => {
        const link = `${baseOrigin}#minh-chung=${p.id}`;
        return `
            <tr>
                <td style="text-align:center; font-weight:bold;">${idx + 1}</td>
                <td style="font-weight:bold; color:#0054a6;">${escapeHtml(p.criteriaCode)}</td>
                <td>
                    <strong>${escapeHtml(p.title)}</strong><br>
                    <span style="font-size:0.8rem; color:#475569;">• Địa điểm: ${escapeHtml(p.location)}</span><br>
                    <span style="font-size:0.8rem; color:#15803d; font-weight:bold;">• Quy mô & tỷ lệ: ${escapeHtml(p.participantCount)} (${escapeHtml(p.reachRate)})</span>
                </td>
                <td style="text-align:center; font-weight:bold; color:#b45309;">${escapeHtml(p.points)}</td>
                <td class="url-cell">
                    <a href="${link}" target="_blank" style="color:#0054a6; text-decoration:underline;">${link}</a>
                </td>
            </tr>
        `;
    }).join("");

    container.innerHTML = `
        <div class="export-official-header">
            <div style="text-align:left;">
                <strong>ĐOÀN TNCS HỒ CHÍ MINH TỈNH SƠN LA</strong><br>
                <strong>BAN CHẤP HÀNH ĐOÀN XÃ MƯỜNG LẦM</strong><br>
                <span style="font-size:0.85rem;">Số: 18-CV/ĐTN</span>
            </div>
            <div style="text-align:right;">
                <strong>CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</strong><br>
                <strong style="text-decoration:underline;">Độc lập - Tự do - Hạnh phúc</strong><br>
                <em>Mường Lầm, ngày 15 tháng 11 năm 2026</em>
            </div>
        </div>

        <div class="export-official-title">
            BẢNG TỔNG HỢP DANH MỤC ĐƯỜNG LINK MINH CHỨNG PHỤC VỤ KIỂM TRA, CHẤM ĐIỂM<br>
            CÔNG TÁC ĐOÀN VÀ PHONG TRÀO THANH THIẾU NHI NĂM 2026<br>
            <span style="font-size:0.9rem; font-weight:normal; text-transform:none;">
                (Ban hành kèm theo Công văn số 18-CV/ĐTN theo Bộ Tiêu chí tại Quyết định số 05-QĐ/TĐTN-CTĐ&TTN của BTV Tỉnh đoàn Sơn La)
            </span>
        </div>

        <table class="export-table">
            <thead>
                <tr>
                    <th style="width:35px;">TT</th>
                    <th style="width:110px;">Mã Tiêu Chí</th>
                    <th>Nội dung hoạt động minh chứng & Số liệu tiếp cận</th>
                    <th style="width:75px;">Điểm QĐ 05</th>
                    <th>Đường link kiểm tra trực tuyến trên Cổng thông tin</th>
                </tr>
            </thead>
            <tbody>
                ${rowsHtml}
            </tbody>
        </table>

        <div class="export-official-footer">
            <div class="export-signer-box">
                <strong>TM. BAN CHẤP HÀNH ĐOÀN XÃ</strong><br>
                <strong>BÍ THƯ</strong><br><br><br><br>
                <strong style="color:#b91c1c; font-size:1.05rem;">Lò Mạnh Quyền</strong>
            </div>
        </div>
    `;

    modal.classList.add("active");
}

// Sao chép toàn bộ danh sách 14 link vào Clipboard để dán vào Zalo/Email
function copyAllProofLinksToClipboard() {
    const proofs = getProofArticles();
    const baseOrigin = window.location.origin + window.location.pathname;

    let text = `ĐOÀN TNCS HỒ CHÍ MINH XÃ MƯỜNG LẦM, TỈNH SƠN LA\n`;
    text += `DANH MỤC ĐƯỜNG LINK MINH CHỨNG CHẤM ĐIỂM NĂM 2026\n`;
    text += `(Bám sát Quyết định số 05-QĐ/TĐTN-CTĐ&TTN & Công văn số 18-CV/ĐTN)\n`;
    text += `Người ký duyệt: TM. BAN CHẤP HÀNH ĐOÀN XÃ - BÍ THƯ LÒ MẠNH QUYỀN\n`;
    text += `====================================================\n\n`;

    text += `A. ĐIỀU KIỆN BẮT BUỘC (03 TIÊU CHÍ - 05 ĐƯỜNG LINK RIÊNG BIỆT):\n`;
    const requiredProofs = proofs.filter(p => p.group === "bat-buoc");
    requiredProofs.forEach((p, i) => {
        text += `${i + 1}. [${p.criteriaCode}] ${p.title}\n`;
        text += `   - Điểm tối đa: ${p.points} | Quy mô: ${p.participantCount} (${p.reachRate})\n`;
        text += `   - Link kiểm tra: ${baseOrigin}#minh-chung=${p.id}\n\n`;
    });

    text += `B. 11 NHÓM GIẢI PHÁP CHỦ ĐỘNG THEO ĐỊNH HƯỚNG (09 ĐƯỜNG LINK MINH CHỨNG):\n`;
    const optionalProofs = proofs.filter(p => p.group !== "bat-buoc");
    optionalProofs.forEach((p, i) => {
        text += `${i + 1}. [${p.criteriaCode}] ${p.title}\n`;
        text += `   - Điểm tối đa: ${p.points} | Quy mô: ${p.participantCount} (${p.reachRate})\n`;
        text += `   - Link kiểm tra: ${baseOrigin}#minh-chung=${p.id}\n\n`;
    });

    text += `Hotline điều hành Đoàn xã: 035.444.2054 | Email: doanxamuonglam@gmail.com`;

    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => {
            showToast("Đã sao chép toàn bộ danh mục 14 link minh chứng! Sẵn sàng dán vào Zalo/Email gửi BTV Tỉnh đoàn Sơn La.");
        }).catch(() => {
            prompt("Sao chép danh sách minh chứng dưới đây:", text);
        });
    } else {
        prompt("Sao chép danh sách minh chứng dưới đây:", text);
    }
}

// Bắt sự kiện Hash trên URL để mở trực tiếp bài viết minh chứng
function checkProofUrlHash() {
    const hash = window.location.hash;
    if (hash && hash.startsWith("#minh-chung=")) {
        const proofId = hash.replace("#minh-chung=", "");
        if (proofId) {
            setTimeout(() => {
                openProofDetailModal(proofId);
            }, 300);
        }
    }
}


// ===================================================================
// PHÂN HỆ: NẮM BẮT TƯ TƯỞNG, DƯ LUẬN XÃ HỘI & HÒM THƯ SỐ THANH NIÊN
// Ban hành bởi Ban Chấp hành Đoàn TNCS Hồ Chí Minh xã Mường Lầm
// ===================================================================

const OPINIONS_STORAGE_KEY = "muonglam_public_opinions_v1";
const POLLS_STORAGE_KEY = "muonglam_public_polls_v1";

function getOpinionsList() {
    try {
        const raw = localStorage.getItem(OPINIONS_STORAGE_KEY);
        if (raw) {
            const parsed = JSON.parse(raw);
            if (Array.isArray(parsed) && parsed.length > 0) {
                return parsed;
            }
        }
    } catch (e) {
        console.error("Lỗi đọc dữ liệu dư luận xã hội:", e);
    }
    const defaults = typeof INITIAL_OPINIONS !== "undefined" ? JSON.parse(JSON.stringify(INITIAL_OPINIONS)) : [];
    saveOpinionsList(defaults);
    return defaults;
}

function saveOpinionsList(list) {
    try {
        localStorage.setItem(OPINIONS_STORAGE_KEY, JSON.stringify(list));
    } catch (e) {
        console.error("Lỗi lưu dữ liệu dư luận xã hội:", e);
    }
}

function getPollsData() {
    try {
        const raw = localStorage.getItem(POLLS_STORAGE_KEY);
        if (raw) {
            const parsed = JSON.parse(raw);
            if (parsed && parsed.poll1 && parsed.poll2) {
                return parsed;
            }
        }
    } catch (e) {
        console.error("Lỗi đọc dữ liệu thăm dò dư luận:", e);
    }
    const defaults = typeof INITIAL_POLLS !== "undefined" ? JSON.parse(JSON.stringify(INITIAL_POLLS)) : {
        poll1: { totalVotes: 352, options: [] },
        poll2: { totalVotes: 350, options: [] }
    };
    savePollsData(defaults);
    return defaults;
}

function savePollsData(polls) {
    try {
        localStorage.setItem(POLLS_STORAGE_KEY, JSON.stringify(polls));
    } catch (e) {
        console.error("Lỗi lưu dữ liệu thăm dò:", e);
    }
}

function initOpinionAndMailboxSection() {
    const form = document.getElementById("form-opinion-feedback");
    const chkAnonymous = document.getElementById("chk-opinion-anonymous");
    const contactFields = document.getElementById("opinion-contact-fields");
    const btnLookup = document.getElementById("btn-do-lookup");
    const inputLookup = document.getElementById("input-lookup-code");
    const lookupContainer = document.getElementById("lookup-result-container");

    // 1. Chế độ ẩn danh / công khai
    if (chkAnonymous && contactFields) {
        chkAnonymous.addEventListener("change", function () {
            contactFields.style.display = this.checked ? "none" : "block";
            const senderNameInput = document.getElementById("opinion-sender-name");
            if (!this.checked && senderNameInput) {
                senderNameInput.focus();
            }
        });
    }

    // 2. Xử lý gửi biểu mẫu phản ánh
    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const groupSelect = document.getElementById("opinion-group-select");
            const villageSelect = document.getElementById("opinion-village-select");
            const contentText = document.getElementById("opinion-content-text");
            const proofLink = document.getElementById("opinion-proof-link");
            const isAnonymous = chkAnonymous ? chkAnonymous.checked : true;
            const urgencyRadio = document.querySelector('input[name="opinion-urgency"]:checked');
            const urgencyVal = urgencyRadio ? urgencyRadio.value : "normal";

            const senderName = isAnonymous ? "Người dân gửi ẩn danh" : (document.getElementById("opinion-sender-name").value.trim() || "Đoàn viên thanh niên");
            const senderPhone = isAnonymous ? "Bảo mật tuyệt đối" : (document.getElementById("opinion-sender-phone").value.trim() || "Không cung cấp");

            const list = getOpinionsList();
            const seqNumber = list.length + 1;
            const newId = `DLXH-ML-2026-${String(seqNumber).padStart(2, "0")}`;

            const now = new Date();
            const dateStr = `${String(now.getDate()).padStart(2, "0")}/${String(now.getMonth() + 1).padStart(2, "0")}/${now.getFullYear()}`;

            const newOpinion = {
                id: newId,
                date: dateStr,
                group: groupSelect.value,
                groupName: groupSelect.options[groupSelect.selectedIndex].text,
                village: villageSelect.value,
                urgency: urgencyVal,
                isAnonymous: isAnonymous,
                senderName: senderName,
                senderPhone: senderPhone,
                content: contentText.value.trim(),
                proofLink: proofLink ? proofLink.value.trim() : "",
                status: "processing",
                statusText: "Đang tiếp nhận",
                response: "Ban Thường vụ Đoàn xã Mường Lầm đã tiếp nhận thông tin và đang chuyển bộ phận chuyên môn xác minh, phối hợp giải quyết.",
                officer: "Thường trực Đoàn xã"
            };

            list.unshift(newOpinion);
            saveOpinionsList(list);

            // Làm sạch biểu mẫu
            form.reset();
            if (chkAnonymous) chkAnonymous.checked = true;
            if (contactFields) contactFields.style.display = "none";

            // Thông báo thành công và kích hoạt tra cứu ngay
            showToast(`Gửi phản ánh thành công! Mã phiếu tra cứu của bạn là: ${newId}`);

            if (inputLookup) {
                inputLookup.value = newId;
                renderLookupResult(newOpinion);
                if (lookupContainer) {
                    lookupContainer.scrollIntoView({ behavior: "smooth", block: "nearest" });
                }
            }
        });
    }

    // 3. Tra cứu trạng thái phiếu phản ánh
    function renderLookupResult(item) {
        if (!lookupContainer) return;

        if (!item) {
            lookupContainer.className = "lookup-result-card active";
            lookupContainer.innerHTML = `
                <div style="text-align:center; padding:1.2rem; color:var(--text-secondary);">
                    <i class="fas fa-search-minus" style="font-size:2rem; color:#94a3b8; margin-bottom:0.6rem; display:block;"></i>
                    <strong style="color:var(--text-primary); font-size:0.92rem; display:block; margin-bottom:0.3rem;">Không tìm thấy mã phiếu phản ánh này!</strong>
                    <p style="font-size:0.82rem; margin:0;">
                        Vui lòng kiểm tra lại mã phiếu (Ví dụ: <code>DLXH-ML-2026-01</code>) hoặc liên hệ Hotline Thường trực Đoàn xã: <strong>035.444.2054</strong>.
                    </p>
                </div>
            `;
            return;
        }

        let statusClass = "received";
        let statusIcon = "fa-clock";
        if (item.status === "escalated") {
            statusClass = "escalated";
            statusIcon = "fa-exclamation-triangle";
        } else if (item.status === "resolved") {
            statusClass = "resolved";
            statusIcon = "fa-check-circle";
        }

        lookupContainer.className = "lookup-result-card active";
        lookupContainer.innerHTML = `
            <div class="lookup-result-header">
                <div style="display:flex; align-items:center; gap:0.5rem; flex-wrap:wrap;">
                    <span class="lookup-id-badge"><i class="fas fa-barcode"></i> ${escapeHtml(item.id)}</span>
                    <span class="status-tag ${statusClass}">
                        <i class="fas ${statusIcon}"></i> ${escapeHtml(item.statusText || "Đang xử lý")}
                    </span>
                    ${item.urgency === "urgent" ? `
                        <span class="pulse-red-badge"><i class="fas fa-fire"></i> Vụ việc nóng</span>
                    ` : ""}
                </div>
                <span style="font-size:0.75rem; color:var(--text-muted);"><i class="far fa-calendar-alt"></i> Ngày gửi: ${escapeHtml(item.date)}</span>
            </div>

            <div style="font-size:0.85rem; line-height:1.55; margin-bottom:0.8rem;">
                <p style="margin:0 0 0.4rem 0;"><strong>Địa bàn:</strong> <span style="color:var(--primary-blue); font-weight:700;">${escapeHtml(item.village)}</span></p>
                <p style="margin:0 0 0.4rem 0;"><strong>Nhóm vấn đề:</strong> ${escapeHtml(item.groupName || item.group)}</p>
                <p style="margin:0 0 0.6rem 0;"><strong>Người gửi:</strong> ${escapeHtml(item.senderName)} ${item.isAnonymous ? `<span style="color:#d97706; font-size:0.75rem;">(Bảo mật danh tính)</span>` : ""}</p>
                <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:var(--radius-sm); padding:0.75rem; color:var(--text-primary); font-style:italic;">
                    "${escapeHtml(item.content)}"
                </div>
                ${item.proofLink ? `
                    <p style="margin:0.4rem 0 0 0; font-size:0.78rem; color:var(--text-muted);">
                        <i class="fas fa-paperclip"></i> Minh chứng kèm: <em>${escapeHtml(item.proofLink)}</em>
                    </p>
                ` : ""}
            </div>

            <!-- Phản hồi chính thức từ Đoàn xã -->
            <div style="background:#ecfdf5; border-left:4px solid #10b981; border-radius:var(--radius-sm); padding:0.8rem 1rem;">
                <h5 style="color:#065f46; font-size:0.82rem; font-weight:800; margin:0 0 0.35rem 0; display:flex; align-items:center; gap:0.4rem;">
                    <i class="fas fa-comment-dots"></i> Phản hồi chính thức từ Ban Thường vụ Đoàn xã:
                </h5>
                <p style="font-size:0.82rem; color:#047857; margin:0; line-height:1.5;">
                    ${escapeHtml(item.response || "Đoàn xã đang xử lý.")}
                </p>
                <p style="font-size:0.72rem; color:#059669; margin:0.35rem 0 0 0; text-align:right;">
                    <em>Cán bộ xử lý: ${escapeHtml(item.officer || "Thường trực Đoàn xã")}</em>
                </p>
            </div>
        `;
    }

    if (btnLookup && inputLookup) {
        const doLookup = () => {
            const code = inputLookup.value.trim().toUpperCase();
            if (!code) {
                showToast("Vui lòng nhập mã phiếu phản ánh!");
                return;
            }
            const list = getOpinionsList();
            const found = list.find(item => item.id.toUpperCase() === code);
            renderLookupResult(found);
        };

        btnLookup.addEventListener("click", doLookup);
        inputLookup.addEventListener("keypress", (e) => {
            if (e.key === "Enter") doLookup();
        });
    }

    // 4. Khảo sát nhanh dư luận thanh niên (Quick Polls)
    function renderPolls() {
        const pollsData = getPollsData();

        // POLL 1
        const p1Container = document.getElementById("poll-1-options");
        const p1TotalCount = document.getElementById("poll-1-total-count");
        if (p1Container && pollsData.poll1) {
            const p1 = pollsData.poll1;
            if (p1TotalCount) p1TotalCount.innerHTML = `<i class="fas fa-users"></i> Tổng lượt bình chọn: <strong>${p1.totalVotes}</strong>`;

            p1Container.innerHTML = p1.options.map(opt => `
                <label class="poll-option-row">
                    <div class="poll-bar-fill" style="width: ${opt.percent}%;"></div>
                    <div class="poll-option-content">
                        <span class="poll-option-text">
                            <input type="radio" name="poll-1-choice" value="${opt.id}" class="poll-option-radio">
                            ${escapeHtml(opt.text)}
                        </span>
                        <span class="poll-option-stats">${opt.percent}% (${opt.votes})</span>
                    </div>
                </label>
            `).join("");
        }

        // POLL 2
        const p2Container = document.getElementById("poll-2-options");
        const p2TotalCount = document.getElementById("poll-2-total-count");
        if (p2Container && pollsData.poll2) {
            const p2 = pollsData.poll2;
            if (p2TotalCount) p2TotalCount.innerHTML = `<i class="fas fa-users"></i> Tổng lượt bình chọn: <strong>${p2.totalVotes}</strong>`;

            p2Container.innerHTML = p2.options.map(opt => `
                <label class="poll-option-row">
                    <div class="poll-bar-fill" style="width: ${opt.percent}%; background:linear-gradient(90deg, rgba(126, 34, 206, 0.12) 0%, rgba(147, 51, 234, 0.22) 100%); border-right-color:#9333ea;"></div>
                    <div class="poll-option-content">
                        <span class="poll-option-text">
                            <input type="radio" name="poll-2-choice" value="${opt.id}" class="poll-option-radio">
                            ${escapeHtml(opt.text)}
                        </span>
                        <span class="poll-option-stats" style="color:#7e22ce;">${opt.percent}% (${opt.votes})</span>
                    </div>
                </label>
            `).join("");
        }
    }

    renderPolls();

    // Xử lý vote Poll 1
    const btnVote1 = document.getElementById("btn-vote-poll-1");
    if (btnVote1) {
        btnVote1.addEventListener("click", function () {
            const selected = document.querySelector('input[name="poll-1-choice"]:checked');
            if (!selected) {
                showToast("Vui lòng chọn 1 ý kiến trước khi bình chọn!");
                return;
            }
            const pollsData = getPollsData();
            const opt = pollsData.poll1.options.find(o => o.id === selected.value);
            if (opt) {
                opt.votes += 1;
                pollsData.poll1.totalVotes += 1;
                pollsData.poll1.options.forEach(o => {
                    o.percent = Math.round((o.votes / pollsData.poll1.totalVotes) * 100);
                });
                savePollsData(pollsData);
                renderPolls();
                showToast("Cảm ơn bạn đã tham gia bình chọn Khảo sát 1!");
            }
        });
    }

    // Xử lý vote Poll 2
    const btnVote2 = document.getElementById("btn-vote-poll-2");
    if (btnVote2) {
        btnVote2.addEventListener("click", function () {
            const selected = document.querySelector('input[name="poll-2-choice"]:checked');
            if (!selected) {
                showToast("Vui lòng chọn 1 ý kiến trước khi bình chọn!");
                return;
            }
            const pollsData = getPollsData();
            const opt = pollsData.poll2.options.find(o => o.id === selected.value);
            if (opt) {
                opt.votes += 1;
                pollsData.poll2.totalVotes += 1;
                pollsData.poll2.options.forEach(o => {
                    o.percent = Math.round((o.votes / pollsData.poll2.totalVotes) * 100);
                });
                savePollsData(pollsData);
                renderPolls();
                showToast("Cảm ơn bạn đã tham gia bình chọn Khảo sát 2!");
            }
        });
    }

    // 5. Vẽ Mã QR Truy Cập Nhanh trên Canvas (Offline-ready 100%)
    function drawOpinionQRCode() {
        const canvas = document.getElementById("opinion-qr-canvas");
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        const size = 160;
        canvas.width = size;
        canvas.height = size;

        // Nền trắng
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, size, size);

        // Viền thanh nhã
        ctx.strokeStyle = "#cbd5e1";
        ctx.lineWidth = 2;
        ctx.strokeRect(1, 1, size - 2, size - 2);

        // Hàm vẽ 3 ô định vị góc chuẩn QR Code
        function drawFinder(x, y, sz) {
            ctx.fillStyle = "#003B75";
            ctx.fillRect(x, y, sz, sz);
            ctx.fillStyle = "#ffffff";
            ctx.fillRect(x + 5, y + 5, sz - 10, sz - 10);
            ctx.fillStyle = "#0054A6";
            ctx.fillRect(x + 9, y + 9, sz - 18, sz - 18);
        }

        drawFinder(10, 10, 36);
        drawFinder(size - 46, 10, 36);
        drawFinder(10, size - 46, 36);

        // Các khối điểm dữ liệu QR giả lập sắc nét
        ctx.fillStyle = "#003B75";
        const cellSize = 4;
        const patternSeed = [
            [1,0,1,1,0,1,0,0,1,1,0,1,0,1],
            [0,1,1,0,1,0,1,1,0,0,1,1,1,0],
            [1,1,0,1,0,0,1,0,1,1,0,1,0,1],
            [0,0,1,1,1,0,1,1,0,1,1,0,1,0],
            [1,0,1,0,0,1,0,1,1,0,0,1,1,1],
            [0,1,0,1,1,0,1,0,0,1,1,0,1,0],
            [1,1,1,0,0,1,1,1,0,1,0,1,0,1],
            [0,0,1,1,0,1,0,0,1,0,1,1,1,0],
            [1,0,0,1,1,0,1,1,0,1,0,0,1,1],
            [0,1,1,0,0,1,0,1,1,0,1,1,0,1],
            [1,1,0,1,1,0,1,0,0,1,0,1,1,0],
            [0,0,1,0,1,1,0,1,1,0,1,0,0,1]
        ];

        const startX = 52;
        const startY = 14;
        for (let r = 0; r < patternSeed.length; r++) {
            for (let c = 0; c < patternSeed[r].length; c++) {
                if (patternSeed[r][c] === 1) {
                    ctx.fillRect(startX + c * cellSize, startY + r * cellSize, cellSize - 1, cellSize - 1);
                }
            }
        }

        // Cột dữ liệu góc dưới
        const btmStartX = 52;
        const btmStartY = 76;
        for (let r = 0; r < patternSeed.length; r++) {
            for (let c = 0; c < patternSeed[r].length; c++) {
                if ((r + c) % 2 === 0) {
                    ctx.fillRect(btmStartX + c * cellSize, btmStartY + r * cellSize, cellSize - 1, cellSize - 1);
                }
            }
        }

        // Ô huy hiệu Đoàn ở tâm QR
        const centerSz = 34;
        const centerX = (size - centerSz) / 2;
        const centerY = (size - centerSz) / 2;
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(centerX - 3, centerY - 3, centerSz + 6, centerSz + 6);
        ctx.strokeStyle = "#0054A6";
        ctx.lineWidth = 1.5;
        ctx.strokeRect(centerX - 3, centerY - 3, centerSz + 6, centerSz + 6);

        // Vẽ biểu tượng sao vàng Đoàn ở giữa
        ctx.fillStyle = "#0054A6";
        ctx.beginPath();
        ctx.arc(size / 2, size / 2, 14, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = "#F37021";
        ctx.font = "bold 9px Arial";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText("ĐTN", size / 2, size / 2);
    }

    drawOpinionQRCode();

    // Nút tải ảnh mã QR
    const btnDownloadQR = document.getElementById("btn-download-qr-img");
    if (btnDownloadQR) {
        btnDownloadQR.addEventListener("click", function () {
            const canvas = document.getElementById("opinion-qr-canvas");
            if (!canvas) return;

            // Tạo canvas in ấn lớn hơn có nhãn tiêu đề
            const exportCanvas = document.createElement("canvas");
            exportCanvas.width = 400;
            exportCanvas.height = 480;
            const expCtx = exportCanvas.getContext("2d");

            // Nền trắng
            expCtx.fillStyle = "#ffffff";
            expCtx.fillRect(0, 0, 400, 480);

            // Viền ngoài
            expCtx.strokeStyle = "#0054A6";
            expCtx.lineWidth = 4;
            expCtx.strokeRect(6, 6, 388, 468);

            // Header chữ
            expCtx.fillStyle = "#003B75";
            expCtx.font = "bold 15px Arial";
            expCtx.textAlign = "center";
            expCtx.fillText("ĐOÀN TNCS HỒ CHÍ MINH XÃ MƯỜNG LẦM", 200, 38);

            expCtx.fillStyle = "#b91c1c";
            expCtx.font = "bold 18px Arial";
            expCtx.fillText("HÒM THƯ SỐ THANH NIÊN", 200, 68);

            expCtx.fillStyle = "#475569";
            expCtx.font = "italic 12px Arial";
            expCtx.fillText("Tiếp nhận phản ánh dư luận, tố giác & hiến kế", 200, 90);

            // Vẽ QR code phóng to vào giữa
            expCtx.drawImage(canvas, 75, 115, 250, 250);

            // Footer chữ
            expCtx.fillStyle = "#003B75";
            expCtx.font = "bold 13px Arial";
            expCtx.fillText("QUÉT MÃ QR BẰNG CAMERA ĐIỆN THOẠI HOẶC ZALO", 200, 395);

            expCtx.fillStyle = "#64748b";
            expCtx.font = "11px Arial";
            expCtx.fillText("Bảo mật tuyệt đối danh tính người gửi • Hotline: 035.444.2054", 200, 420);
            expCtx.fillText("UBND xã Mường Lầm, tỉnh Sơn La (2025 - 2030)", 200, 442);

            const link = document.createElement("a");
            link.download = "Ma_QR_Hom_thu_so_Doan_xa_Muong_Lam.png";
            link.href = exportCanvas.toDataURL("image/png");
            link.click();
            showToast("Đã tải ảnh Mã QR in ấn dán tại Nhà văn hóa bản!");
        });
    }

    // Nút sao chép link Zalo
    const btnCopyLink = document.getElementById("btn-copy-opinion-link");
    if (btnCopyLink) {
        btnCopyLink.addEventListener("click", function () {
            const url = window.location.href.split("#")[0] + "#opinion-section";
            const message = `[ĐOÀN XÃ MƯỜNG LẦM - HÒM THƯ SỐ THANH NIÊN]
Kính gửi đoàn viên, thanh niên và bà con nhân dân xã Mường Lầm:
Ban Thường vụ Đoàn xã mở kênh trực tuyến tiếp nhận tâm tư, phản ánh đời sống, tố giác tệ nạn và hiến kế xây dựng bản làng.
Cam kết bảo mật danh tính tuyệt đối 100%.
Gửi ý kiến và phản ánh trực tiếp tại liên kết:
${url}
Hotline Thường trực Đoàn xã: 035.444.2054`;

            navigator.clipboard.writeText(message).then(() => {
                showToast("Đã sao chép liên kết Hòm thư số! Mở Zalo dán ngay vào nhóm bản.");
            }).catch(() => {
                showToast("Không thể tự động sao chép. Vui lòng thử lại.");
            });
        });
    }

    // 6. Modal Quản lý Dư luận xã hội & Báo cáo Định kỳ (Admin Bí thư Đoàn xã)
    initAdminOpinionModal();
}

function initAdminOpinionModal() {
    const modal = document.getElementById("modal-admin-opinion");
    const triggerBtn = document.getElementById("btn-open-admin-opinion-modal");
    const authForm = document.getElementById("form-auth-admin-opinion");
    const authBox = document.getElementById("admin-opinion-auth-box");
    const panel = document.getElementById("admin-opinion-panel");
    const tableBody = document.getElementById("table-admin-opinions-body");

    let currentFilter = "all";

    if (triggerBtn && modal) {
        triggerBtn.addEventListener("click", function () {
            modal.classList.add("active");
            if (authBox) authBox.style.display = "block";
            if (panel) panel.style.display = "none";
            const passInput = document.getElementById("admin-opinion-pass");
            if (passInput) {
                passInput.value = "";
                passInput.focus();
            }
        });
    }

    if (authForm) {
        authForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const pass = document.getElementById("admin-opinion-pass").value.trim();
            if (pass === "muonglam2026") {
                if (authBox) authBox.style.display = "none";
                if (panel) panel.style.display = "block";
                renderAdminOpinionsTable();
                showToast("Xác thực quyền quản trị Đoàn xã thành công!");
            } else {
                showToast("Mật khẩu bảo mật không chính xác! (Mã demo: muonglam2026)");
            }
        });
    }

    function renderAdminOpinionsTable() {
        if (!tableBody) return;
        const list = getOpinionsList();

        // Cập nhật thẻ thống kê
        const totalOpinions = list.length;
        const urgentCount = list.filter(item => item.urgency === "urgent").length;
        const escalatedCount = list.filter(item => item.status === "escalated").length;
        const resolvedCount = list.filter(item => item.status === "resolved").length;

        const statTotal = document.getElementById("stat-total-opinions");
        const statUrgent = document.getElementById("stat-urgent-opinions");
        const statEscalated = document.getElementById("stat-escalated-opinions");
        const statResolved = document.getElementById("stat-resolved-opinions");

        if (statTotal) statTotal.textContent = totalOpinions;
        if (statUrgent) statUrgent.textContent = urgentCount;
        if (statEscalated) statEscalated.textContent = escalatedCount;
        if (statResolved) statResolved.textContent = resolvedCount;

        // Lọc dữ liệu theo chip
        let filtered = list;
        if (currentFilter === "urgent") {
            filtered = list.filter(item => item.urgency === "urgent");
        } else if (currentFilter === "escalated") {
            filtered = list.filter(item => item.status === "escalated");
        } else if (currentFilter === "resolved") {
            filtered = list.filter(item => item.status === "resolved");
        }

        if (filtered.length === 0) {
            tableBody.innerHTML = `<tr><td colspan="8" style="text-align:center; padding:1.5rem; color:var(--text-muted);">Không có phản ánh nào trong danh mục này.</td></tr>`;
            return;
        }

        tableBody.innerHTML = filtered.map(item => {
            let statusBadge = `<span class="status-tag received"><i class="fas fa-clock"></i> Tiếp nhận</span>`;
            if (item.status === "escalated") {
                statusBadge = `<span class="status-tag escalated"><i class="fas fa-exclamation-triangle"></i> Đã báo Cấp ủy</span>`;
            } else if (item.status === "resolved") {
                statusBadge = `<span class="status-tag resolved"><i class="fas fa-check-circle"></i> Đã giải quyết</span>`;
            }

            const isUrgent = item.urgency === "urgent";
            const urgencyHtml = isUrgent 
                ? `<span class="pulse-red-badge"><i class="fas fa-fire"></i> KHẨN CẤP</span>`
                : `<span style="font-size:0.75rem; color:#64748b;"><i class="fas fa-clock"></i> Định kỳ</span>`;

            return `
                <tr style="${isUrgent ? 'background:#fff1f2;' : ''}">
                    <td style="padding:8px 10px; font-weight:800; color:var(--primary-blue);">${escapeHtml(item.id)}</td>
                    <td style="padding:8px 10px; white-space:nowrap; color:var(--text-muted);">${escapeHtml(item.date)}</td>
                    <td style="padding:8px 10px; white-space:nowrap;">
                        <strong>${escapeHtml(item.senderName)}</strong><br>
                        <small style="color:var(--text-muted);">${escapeHtml(item.senderPhone)}</small>
                    </td>
                    <td style="padding:8px 10px; font-weight:700;">${escapeHtml(item.village)}</td>
                    <td style="padding:8px 10px; max-width:260px;">
                        <span style="font-size:0.72rem; color:#0284c7; display:block; margin-bottom:2px;">[${escapeHtml(item.groupName || item.group)}]</span>
                        <div style="line-height:1.4;">${escapeHtml(item.content)}</div>
                    </td>
                    <td style="padding:8px 10px; text-align:center;">${urgencyHtml}</td>
                    <td style="padding:8px 10px; text-align:center;">${statusBadge}</td>
                    <td style="padding:8px 10px; text-align:center; white-space:nowrap;">
                        <button type="button" class="btn-sm" onclick="handleUpdateOpinionStatus('${item.id}')" style="background:#0284c7; color:#fff; border:none; padding:4px 8px; font-size:0.75rem; border-radius:4px;" title="Cập nhật trạng thái xử lý">
                            <i class="fas fa-edit"></i> Xử lý
                        </button>
                    </td>
                </tr>
            `;
        }).join("");
    }

    // Bộ lọc chip
    const filterButtons = document.querySelectorAll(".admin-opinion-filters .filter-chip-btn");
    filterButtons.forEach(btn => {
        btn.addEventListener("click", function () {
            filterButtons.forEach(b => b.classList.remove("active"));
            this.classList.add("active");
            currentFilter = this.getAttribute("data-filter") || "all";
            renderAdminOpinionsTable();
        });
    });

    // Cập nhật trạng thái từ window
    window.handleUpdateOpinionStatus = function (opinionId) {
        const list = getOpinionsList();
        const item = list.find(it => it.id === opinionId);
        if (!item) return;

        const nextStatus = item.status === "processing" ? "escalated" : (item.status === "escalated" ? "resolved" : "processing");
        const statusPrompt = nextStatus === "escalated" ? "Đã tổng hợp báo cáo Cấp ủy & Công an xã" : (nextStatus === "resolved" ? "Đã phối hợp giải quyết xong" : "Đang tiếp nhận");

        const responseText = prompt(`Cập nhật trạng thái cho phiếu ${item.id}:\nTrạng thái mới: [${statusPrompt}]\nNhập nội dung phản hồi chính thức tới đoàn viên/nhân dân:`, item.response || "");

        if (responseText !== null) {
            item.status = nextStatus;
            item.statusText = statusPrompt;
            if (responseText.trim()) {
                item.response = responseText.trim();
            }
            saveOpinionsList(list);
            renderAdminOpinionsTable();
            showToast(`Đã cập nhật trạng thái phiếu ${item.id} thành [${statusPrompt}]!`);
        }
    };

    // Xuất báo cáo định kỳ Word (.doc)
    const btnExportReport = document.getElementById("btn-export-opinion-report-doc");
    const btnPreviewReport = document.getElementById("btn-preview-opinion-report");
    const previewBox = document.getElementById("opinion-report-preview-box");

    function generateOpinionReportHtml() {
        const list = getOpinionsList();
        const pollsData = getPollsData();
        const urgentItems = list.filter(it => it.urgency === "urgent");
        const now = new Date();
        const dateStr = `ngày ${String(now.getDate()).padStart(2, "0")} tháng ${String(now.getMonth() + 1).padStart(2, "0")} năm ${now.getFullYear()}`;

        return `
<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
<head>
    <meta charset='utf-8'>
    <title>Báo Cáo Tổng Hợp Tình Hình Tư Tưởng, Dư Luận Xã Hội - Xã Mường Lầm</title>
    <style>
        body { font-family: 'Times New Roman', serif; font-size: 13pt; line-height: 1.5; color: #000; margin: 2cm; }
        .head-table { width: 100%; border-collapse: collapse; margin-bottom: 15pt; }
        .head-table td { text-align: center; vertical-align: top; font-size: 11pt; }
        .doc-title { text-align: center; font-size: 15pt; font-weight: bold; color: #003399; margin: 15pt 0 5pt 0; text-transform: uppercase; }
        .doc-sub { text-align: center; font-size: 13pt; font-weight: bold; margin-bottom: 15pt; }
        h3 { font-size: 13.5pt; font-weight: bold; color: #003399; margin-top: 14pt; margin-bottom: 4pt; }
        p { text-align: justify; margin: 4pt 0; }
        ul { margin: 4pt 0 8pt 0; padding-left: 20pt; }
        li { margin-bottom: 4pt; text-align: justify; }
        .data-tbl { width: 100%; border-collapse: collapse; margin: 10pt 0; font-size: 11pt; }
        .data-tbl th, .data-tbl td { border: 1pt solid #333; padding: 6pt; }
        .data-tbl th { background: #f1f5f9; text-align: center; font-weight: bold; }
        .footer-tbl { width: 100%; border-collapse: collapse; margin-top: 25pt; }
        .footer-tbl td { text-align: center; vertical-align: top; font-size: 12pt; }
    </style>
</head>
<body>
    <table class="head-table">
        <tr>
            <td style="width: 45%;">
                ĐOÀN TNCS HỒ CHÍ MINH TỈNH SƠN LA<br>
                <strong>BCH ĐOÀN XÃ MƯỜNG LẦM</strong><br>
                ***<br>
                Số: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-BC/ĐTN
            </td>
            <td style="width: 55%;">
                <strong>CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</strong><br>
                <strong>Độc lập - Tự do - Hạnh phúc</strong><br>
                -------------------------<br>
                <em>Mường Lầm, ${dateStr}</em>
            </td>
        </tr>
    </table>

    <div class="doc-title">BÁO CÁO TỔNG HỢP NHANH</div>
    <div class="doc-sub">TÌNH HÌNH TƯ TƯỞNG, DƯ LUẬN XÃ HỘI VÀ KIẾN NGHỊ CỦA THANH THIẾU NHI & NHÂN DÂN XÃ MƯỜNG LẦM</div>

    <p>Kính gửi: 
        <br>&nbsp;&nbsp;&nbsp;&nbsp;- Thường trực Đảng ủy xã Mường Lầm;
        <br>&nbsp;&nbsp;&nbsp;&nbsp;- Ban Tuyên giáo Tỉnh đoàn Sơn La;
        <br>&nbsp;&nbsp;&nbsp;&nbsp;- Thường trực HĐND - UBND xã Mường Lầm.
    </p>

    <p>Căn cứ Quy chế nắm bắt và phản ánh tình hình tư tưởng, dư luận xã hội trong đoàn viên thanh thiếu nhi; thực hiện chỉ đạo của Ban Thường vụ Tỉnh đoàn Sơn La và Thường trực Đảng ủy xã, Ban Chấp hành Đoàn TNCS Hồ Chí Minh xã Mường Lầm báo cáo tổng hợp tình hình tư tưởng, dư luận xã hội định kỳ qua hệ thống Hòm thư số Cổng thông tin điện tử như sau:</p>

    <h3>I. TÌNH HÌNH CHUNG & SỐ LIỆU TIẾP NHẬN</h3>
    <p>- Tổng số lượt phản ánh, kiến nghị và hiến kế tiếp nhận qua Hòm thư số Cổng thông tin: <strong>${list.length} lượt</strong>.</p>
    <p>- Trong đó:</p>
    <ul>
        <li>Tâm tư nguyện vọng học tập, việc làm, vay vốn khởi nghiệp: ${list.filter(it => it.group === "tam-tu").length} lượt.</li>
        <li>Tình hình đời sống, sản xuất nông nghiệp, đường giao thông bản làng: ${list.filter(it => it.group === "doi-song").length} lượt.</li>
        <li>Phát hiện thông tin xấu độc, lừa đảo lao động qua mạng xã hội: ${list.filter(it => it.group === "tin-xau").length} lượt.</li>
        <li>Tin báo tố giác tội phạm, tệ nạn ma túy (Hòm thư tố giác điện tử): ${list.filter(it => it.group === "to-giac").length} lượt.</li>
        <li>Hiến kế sáng tạo đổi mới hoạt động Đoàn - Hội - Đội: ${list.filter(it => it.group === "hien-ke").length} lượt.</li>
    </ul>

    <h3>II. CÁC VỤ VIỆC NÓNG / PHÁT SINH ĐỘT XUẤT CẦN XỬ LÝ NGAY</h3>
    <p>Trong kỳ báo cáo, hệ thống ghi nhận <strong>${urgentItems.length} vụ việc có tính chất khẩn cấp</strong>:</p>
    <ul>
        ${urgentItems.map((u, i) => `
            <li>
                <strong>Vụ việc ${i + 1} [Mã ${u.id} - ${u.village}]:</strong> ${u.content}<br>
                <em>- Biện pháp đã thực hiện:</em> ${u.response} (Cán bộ phụ trách: ${u.officer}).
            </li>
        `).join("")}
    </ul>

    <h3>III. KẾT QUẢ KHẢO SÁT DƯ LUẬN THANH NIÊN TRỰC TUYẾN</h3>
    <p><strong>1. Khảo sát về nhu cầu hỗ trợ thiết thực nhất (Tổng số ${pollsData.poll1.totalVotes} lượt bình chọn):</strong></p>
    <ul>
        ${pollsData.poll1.options.map(o => `<li>${o.text}: <strong>${o.percent}%</strong> (${o.votes} phiếu).</li>`).join("")}
    </ul>

    <p><strong>2. Khảo sát mức độ hài lòng về số hóa tài liệu sinh hoạt Chi đoàn (Tổng số ${pollsData.poll2.totalVotes} lượt bình chọn):</strong></p>
    <ul>
        ${pollsData.poll2.options.map(o => `<li>${o.text}: <strong>${o.percent}%</strong> (${o.votes} phiếu).</li>`).join("")}
    </ul>

    <h3>IV. ĐỀ XUẤT, KIẾN NGHỊ VỚI CẤP ỦY & CƠ QUAN CHỨC NĂNG</h3>
    <ol>
        <li>Kính đề nghị Thường trực Đảng ủy, UBND xã chỉ đạo Công an xã tăng cường tuần tra tại các chòi nương vắng giáp ranh bản Đứa Lốc và Nà Tấu để ngăn chặn triệt để tệ nạn ma túy và lừa đảo qua mạng xã hội.</li>
        <li>Đề nghị Phòng giao dịch Ngân hàng CSXH tạo điều kiện ưu tiên nguồn vốn tín dụng chính sách giải quyết việc làm cho nhóm thanh niên xã Mường Lầm đi làm ăn xa trở về khởi nghiệp tại bản.</li>
        <li>Đề nghị Ban Tuyên giáo Tỉnh đoàn Sơn La tiếp tục duy trì cung cấp các tài liệu định hướng sinh hoạt chi đoàn định kỳ và nhân rộng mô hình Hòm thư số Cổng thông tin điện tử Đoàn xã Mường Lầm.</li>
    </ol>

    <table class="footer-tbl">
        <tr>
            <td style="width: 50%;">
                <strong>Nơi nhận:</strong><br>
                <div style="text-align: left; font-size: 10.5pt; padding-left: 20pt;">
                    - Như trên (b/c);<br>
                    - Lãnh đạo UBND xã (p/h);<br>
                    - Công an xã Mường Lầm (p/h);<br>
                    - 22 Chi đoàn trực thuộc (t/h);<br>
                    - Lưu: VP Đoàn xã.
                </div>
            </td>
            <td style="width: 50%;">
                <strong>TM. BAN CHẤP HÀNH ĐOÀN XÃ</strong><br>
                <strong>BÍ THƯ</strong><br><br><br><br>
                <strong>Lò Mạnh Quyền</strong>
            </td>
        </tr>
    </table>
</body>
</html>`;
    }

    if (btnExportReport) {
        btnExportReport.addEventListener("click", function () {
            const wordHtml = generateOpinionReportHtml();
            const blob = new Blob([wordHtml], { type: "application/msword;charset=utf-8" });
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = "Bao_cao_Du_luan_xa_hoi_Doan_xa_Muong_Lam.doc";
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
            showToast("Đã xuất Báo cáo tổng hợp Dư luận xã hội thành công sang file Word (.doc)!");
        });
    }

    if (btnPreviewReport && previewBox) {
        btnPreviewReport.addEventListener("click", function () {
            if (previewBox.style.display === "none") {
                previewBox.style.display = "block";
                previewBox.innerHTML = generateOpinionReportHtml();
                previewBox.scrollIntoView({ behavior: "smooth" });
            } else {
                previewBox.style.display = "none";
            }
        });
    }
}
