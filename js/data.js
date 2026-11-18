/**
 * CỔNG THÔNG TIN ĐIỆN TỬ ĐOÀN TNCS HỒ CHÍ MINH XÃ MƯỜNG LẦM
 * Tỉnh Sơn La
 * 
 * Toàn bộ cơ sở dữ liệu:
 * - Thông tin định danh & liên hệ
 * - 15 Chi đoàn bản, 01 Đoàn trường THPT, 06 Chi đoàn cơ sở
 * - Ban Chấp hành Đoàn xã Mường Lầm
 * - Tin tức & Sự kiện hoạt động (ít nhất 6 bài mẫu)
 * - Các chiến dịch tình nguyện & sự kiện sắp diễn ra
 * - Kho biểu mẫu & văn bản Đoàn vụ
 * - Học phần tập huấn AI & 12 tháng sinh hoạt chi đoàn
 */

// 1. THÔNG TIN LIÊN HỆ & ĐỊNH DANH CƠ QUAN
const CONTACT_INFO = {
    organization: "ĐOÀN TNCS HỒ CHÍ MINH XÃ MƯỜNG LẦM",
    term: "Khóa I, nhiệm kỳ 2025 - 2030",
    parentOrg: "Tỉnh đoàn Sơn La",
    hotline: "035.444.2054",
    hotlineTel: "tel:0354442054",
    email: "doanxamuonglam@gmail.com",
    fanpage: "ĐOÀN XÃ MƯỜNG LẦM",
    fanpageUrl: "https://www.facebook.com/profile.php?id=100064651183971",
    address: "Trụ sở UBND xã Mường Lầm, tỉnh Sơn La"
};

// 2. BAN THƯỜNG VỤ & BAN CHẤP HÀNH ĐOÀN XÃ MƯỜNG LẦM (KHÓA I, NHIỆM KỲ 2025 - 2030)
// Gồm 15 đồng chí: 05 Thường trực & Ban Thường vụ, 10 Ủy viên Ban Chấp hành
const EXECUTIVE_COMMITTEE = [
    // A. Thường trực & Ban Thường vụ Đoàn xã (05 đồng chí):
    {
        id: "bch-1",
        name: "Đ/c Lò Mạnh Quyền",
        birthYear: 1993,
        ethnicity: "Thái",
        role: "Bí thư Đoàn xã",
        isStanding: true,
        title: "Đảng ủy viên, Phó Chủ tịch UBMTTQ VN xã, Bí thư Đoàn xã Mường Lầm, Chủ tịch Hội LHTN Việt Nam xã",
        education: "Đại học Luật hành chính, Trung cấp LLCT",
        phone: "035.444.2054",
        email: "doanxamuonglam@gmail.com",
        avatarIcon: "fas fa-user-tie"
    },
    {
        id: "bch-2",
        name: "Đ/c Lò Văn Hoản",
        birthYear: 1994,
        ethnicity: "Thái",
        role: "Phó Bí thư Đoàn xã",
        isStanding: true,
        title: "Phó Bí thư Đoàn xã Mường Lầm",
        education: "Đại học Lâm sinh, Trung cấp LLCT",
        phone: "035.444.2054",
        email: "doanxamuonglam@gmail.com",
        avatarIcon: "fas fa-user-graduate"
    },
    {
        id: "bch-3",
        name: "Đ/c Lò Văn Hồng",
        birthYear: 1992,
        ethnicity: "Thái",
        role: "Phó Bí thư Đoàn xã",
        isStanding: true,
        title: "Phó Bí thư Đoàn xã, Bí thư Chi đoàn Công an xã",
        education: "Đại học, Sơ cấp LLCT",
        phone: "035.444.2054",
        email: "doanxamuonglam@gmail.com",
        avatarIcon: "fas fa-user-shield"
    },
    {
        id: "bch-4",
        name: "Đ/c Lò Thị Thanh Nhàn",
        birthYear: 1998,
        ethnicity: "Thái",
        role: "Ủy viên Ban Thường vụ",
        isStanding: true,
        title: "Ủy viên Ban Thường vụ Đoàn xã, Bí thư Đoàn trường THPT Mường Lầm",
        education: "Đại học Sư phạm Tiếng Anh",
        phone: "035.444.2054",
        email: "doanxamuonglam@gmail.com",
        avatarIcon: "fas fa-chalkboard-teacher"
    },
    {
        id: "bch-5",
        name: "Đ/c Lò Văn Trong",
        birthYear: 2000,
        ethnicity: "Thái",
        role: "Ủy viên Ban Thường vụ",
        isStanding: true,
        title: "Ủy viên Ban Thường vụ Đoàn xã, Bí thư Chi đoàn bản Mường Tợ",
        education: "Đại học",
        phone: "035.444.2054",
        email: "doanxamuonglam@gmail.com",
        avatarIcon: "fas fa-user-check"
    },

    // B. Ủy viên Ban Chấp hành Đoàn xã (10 đồng chí):
    {
        id: "bch-6",
        name: "Đ/c Lường Văn Soi",
        birthYear: 1993,
        ethnicity: "Thái",
        role: "Ủy viên Ban Chấp hành",
        isStanding: false,
        title: "UV BCH Đoàn xã, Bí thư Chi đoàn Trường TH&THCS Mường Lầm",
        education: "Đại học Sư phạm",
        phone: "035.444.2054",
        email: "doanxamuonglam@gmail.com",
        avatarIcon: "fas fa-user-edit"
    },
    {
        id: "bch-7",
        name: "Đ/c Mùa A Nủ",
        birthYear: 1998,
        ethnicity: "Mông",
        role: "Ủy viên Ban Chấp hành",
        isStanding: false,
        title: "UV BCH Đoàn xã, Bí thư Chi đoàn bản Lốm Hỏm",
        education: "Cán bộ Đoàn người Mông tiêu biểu",
        phone: "035.444.2054",
        email: "doanxamuonglam@gmail.com",
        avatarIcon: "fas fa-mountain"
    },
    {
        id: "bch-8",
        name: "Đ/c Lèo Thị Thoái",
        birthYear: 1997,
        ethnicity: "Thái",
        role: "Ủy viên Ban Chấp hành",
        isStanding: false,
        title: "UV BCH Đoàn xã, Bí thư Chi đoàn bản Phèn Sàng",
        education: "ĐVTN nữ tiêu biểu",
        phone: "035.444.2054",
        email: "doanxamuonglam@gmail.com",
        avatarIcon: "fas fa-female"
    },
    {
        id: "bch-9",
        name: "Đ/c Lường Văn Công",
        birthYear: 2000,
        ethnicity: "Thái",
        role: "Ủy viên Ban Chấp hành",
        isStanding: false,
        title: "UV BCH Đoàn xã, Bí thư Chi đoàn bản Tỉa Pặt",
        education: "ĐVTN xung kích số",
        phone: "035.444.2054",
        email: "doanxamuonglam@gmail.com",
        avatarIcon: "fas fa-user"
    },
    {
        id: "bch-10",
        name: "Đ/c Giàng A Dia",
        birthYear: 1993,
        ethnicity: "Mông",
        role: "Ủy viên Ban Chấp hành",
        isStanding: false,
        title: "UV BCH Đoàn xã, Bí thư Chi đoàn bản Núa Cốc",
        education: "Cán bộ Đoàn vùng cao tiêu biểu",
        phone: "035.444.2054",
        email: "doanxamuonglam@gmail.com",
        avatarIcon: "fas fa-user-friends"
    },
    {
        id: "bch-11",
        name: "Đ/c Lò Thị Luyến",
        birthYear: 1994,
        ethnicity: "Thái",
        role: "Ủy viên Ban Chấp hành",
        isStanding: false,
        title: "UV BCH Đoàn xã, Bí thư Chi đoàn Trường Mầm non Tuổi Hoa",
        education: "Đại học Sư phạm Mầm non",
        phone: "035.444.2054",
        email: "doanxamuonglam@gmail.com",
        avatarIcon: "fas fa-seedling"
    },
    {
        id: "bch-12",
        name: "Đ/c Lò Văn Thứ",
        birthYear: 1994,
        ethnicity: "Thái",
        role: "Ủy viên Ban Chấp hành",
        isStanding: false,
        title: "UV BCH Đoàn xã, Bí thư Chi đoàn bản Đứa Lốc",
        education: "Cán bộ Đoàn cơ sở tiêu biểu",
        phone: "035.444.2054",
        email: "doanxamuonglam@gmail.com",
        avatarIcon: "fas fa-user"
    },
    {
        id: "bch-13",
        name: "Đ/c Vì Thị Xiên",
        birthYear: 1992,
        ethnicity: "Mường",
        role: "Ủy viên Ban Chấp hành",
        isStanding: false,
        title: "UV BCH Đoàn xã, Bí thư Chi đoàn Trường Mầm non Hoa Cúc",
        education: "Đại học Sư phạm Mầm non",
        phone: "035.444.2054",
        email: "doanxamuonglam@gmail.com",
        avatarIcon: "fas fa-child"
    },
    {
        id: "bch-14",
        name: "Đ/c Lò Văn Nghị",
        birthYear: 1993,
        ethnicity: "Thái",
        role: "Ủy viên Ban Chấp hành",
        isStanding: false,
        title: "UV BCH Đoàn xã, Bí thư Chi đoàn bản Củ Luông",
        education: "Cán bộ Đoàn cơ sở tiêu biểu",
        phone: "035.444.2054",
        email: "doanxamuonglam@gmail.com",
        avatarIcon: "fas fa-user"
    },
    {
        id: "bch-15",
        name: "Đ/c Lò Văn Theo",
        birthYear: 1996,
        ethnicity: "Thái",
        role: "Ủy viên Ban Chấp hành",
        isStanding: false,
        title: "UV BCH Đoàn xã, Bí thư Chi đoàn Trường PTDTBT Tiểu học & THCS Đứa Mòn",
        education: "Đại học Sư phạm",
        phone: "035.444.2054",
        email: "doanxamuonglam@gmail.com",
        avatarIcon: "fas fa-book-reader"
    }
];

// 3. DANH SÁCH KHỐI CHI ĐOÀN BẢN (15 CHI ĐOÀN - 506 ĐOÀN VIÊN)
const MUONG_LAM_VILLAGES = [
    { id: "ban-dua-loc", name: "Chi đoàn bản Đứa Lốc", secretary: "Lò Văn Thứ", youthCount: 72, households: 88, phone: "035.444.2054" },
    { id: "ban-cu-luong", name: "Chi đoàn bản Củ Luông", secretary: "Lò Văn Nghị", youthCount: 62, households: 115, phone: "035.444.2054" },
    { id: "ban-nua-coc", name: "Chi đoàn bản Núa Cốc", secretary: "Giàng A Dia", youthCount: 55, households: 95, phone: "035.444.2054" },
    { id: "ban-na-tau", name: "Chi đoàn bản Nà Tấu", secretary: "Lò Văn Vạt", youthCount: 55, households: 120, phone: "035.444.2054" },
    { id: "ban-pha-thong", name: "Chi đoàn bản Phá Thóng", secretary: "Lò Văn Dưng", youthCount: 45, households: 102, phone: "035.444.2054" },
    { id: "ban-hin-phang", name: "Chi đoàn bản Hin Phẩng", secretary: "Vì Văn Đông", youthCount: 40, households: 78, phone: "035.444.2054" },
    { id: "ban-tia-pat", name: "Chi đoàn bản Tỉa Pặt", secretary: "Lường Văn Công", youthCount: 34, households: 82, phone: "035.444.2054" },
    { id: "ban-tang-son", name: "Chi đoàn bản Tặng Sỏn", secretary: "Vàng A Cụ", youthCount: 29, households: 92, phone: "035.444.2054" },
    { id: "ban-huoi-lech", name: "Chi đoàn bản Huổi Lếch", secretary: "Sộng A Mang", youthCount: 28, households: 85, phone: "035.444.2054" },
    { id: "ban-muong-nua", name: "Chi đoàn bản Mường Nưa", secretary: "Lò Văn Nam", youthCount: 20, households: 145, phone: "035.444.2054" },
    { id: "ban-muong-to", name: "Chi đoàn bản Mường Tợ", secretary: "Lò Văn Trong", youthCount: 19, households: 130, phone: "035.444.2054" },
    { id: "ban-phen-sang", name: "Chi đoàn bản Phèn Sàng", secretary: "Lèo Thị Thoái", youthCount: 14, households: 105, phone: "035.444.2054" },
    { id: "ban-lau-ngay", name: "Chi đoàn bản Lấu Ngày", secretary: "Quàng Văn Quảng", youthCount: 12, households: 98, phone: "035.444.2054" },
    { id: "ban-lom-hom", name: "Chi đoàn bản Lốm Hỏm", secretary: "Mùa A Nủ", youthCount: 11, households: 125, phone: "035.444.2054" },
    { id: "ban-hia", name: "Chi đoàn bản Hịa", secretary: "Lò Văn Hưng", youthCount: 10, households: 110, phone: "035.444.2054" }
];

// 4. DANH SÁCH KHỐI CHI ĐOÀN TRƯỜNG HỌC (05 ĐƠN VỊ - 512 ĐOÀN VIÊN)
const MUONG_LAM_SCHOOL_BRANCHES = [
    { id: "truong-thpt", name: "Đoàn trường THPT Mường Lầm", secretary: "Lò Thị Thanh Nhàn", youthCount: 459, detail: "01 chi đoàn giáo viên và 23 chi đoàn lớp học", phone: "035.444.2054" },
    { id: "truong-ptdtbt-dua-mon", name: "Chi đoàn Trường PTDTBT Tiểu học & THCS Đứa Mòn", secretary: "Lò Văn Theo", youthCount: 23, detail: "Đoàn viên giáo viên trường bán trú vùng sâu", phone: "035.444.2054" },
    { id: "truong-mn-hoa-cuc", name: "Chi đoàn Trường Mầm non Hoa Cúc", secretary: "Vì Thị Xiên", youthCount: 19, detail: "Đoàn viên giáo viên mầm non Đứa Mòn", phone: "035.444.2054" },
    { id: "truong-mn-tuoi-hoa", name: "Chi đoàn Trường Mầm non Tuổi Hoa", secretary: "Lò Thị Luyến", youthCount: 8, detail: "Đoàn viên giáo viên mầm non trung tâm xã", phone: "035.444.2054" },
    { id: "truong-th-thcs-ml", name: "Chi đoàn Trường TH&THCS Mường Lầm", secretary: "Lường Văn Soi", youthCount: 3, detail: "Đoàn viên giáo viên trường TH&THCS Mường Lầm", phone: "035.444.2054" }
];

// 5. DANH SÁCH KHỐI CHI ĐOÀN CƠ QUAN & LỰC LƯỢNG VŨ TRANG (02 CHI ĐOÀN - 10 ĐOÀN VIÊN)
const MUONG_LAM_AGENCY_BRANCHES = [
    { id: "cd-cong-an", name: "Chi đoàn Công an xã Mường Lầm", secretary: "Lò Văn Hồng", youthCount: 5, detail: "Lực lượng Công an chính quy xã Mường Lầm", phone: "035.444.2054" },
    { id: "cd-co-quan", name: "Chi đoàn Cơ quan xã Mường Lầm", secretary: "Lường Thị Huệ (Chuyên viên Ban Xây dựng Đảng Đảng ủy xã)", youthCount: 5, detail: "Cán bộ, công chức xã (Thành viên tiêu biểu: Đ/c Giàng A Cao – Trợ lý Quân lực Ban CHQS xã)", phone: "035.444.2054" }
];

// Danh sách hợp nhất 22 cơ sở Đoàn / Chi đoàn trực thuộc (1.028 đoàn viên)
const MUONG_LAM_ALL_22_BRANCHES = [
    ...MUONG_LAM_VILLAGES.map(v => ({ ...v, group: "ban", groupName: "Khối Chi đoàn Bản (15 đơn vị - 506 ĐV)" })),
    ...MUONG_LAM_SCHOOL_BRANCHES.map(s => ({ ...s, group: "truong-hoc", groupName: "Khối Chi đoàn Trường học (05 đơn vị - 512 ĐV)" })),
    ...MUONG_LAM_AGENCY_BRANCHES.map(a => ({ ...a, group: "co-quan", groupName: "Khối Cơ quan & Lực lượng vũ trang (02 Chi đoàn - 10 ĐV)" }))
];

// Tương thích ngược với các hàm gọi cũ
const MUONG_LAM_HIGH_SCHOOL = MUONG_LAM_SCHOOL_BRANCHES[0];
const MUONG_LAM_BASE_BRANCHES = [
    MUONG_LAM_AGENCY_BRANCHES[0],
    MUONG_LAM_AGENCY_BRANCHES[1],
    MUONG_LAM_SCHOOL_BRANCHES[3],
    MUONG_LAM_SCHOOL_BRANCHES[4],
    MUONG_LAM_SCHOOL_BRANCHES[2],
    MUONG_LAM_SCHOOL_BRANCHES[1]
];

// 6. THỐNG KÊ DASHBOARD TOÀN CỔNG THÔNG TIN (KHÓA I, NHIỆM KỲ 2025 - 2030)
const DASHBOARD_STATS = {
    term: "Khóa I, nhiệm kỳ 2025 - 2030",
    totalBranches: 22, // 22 cơ sở Đoàn / Chi đoàn trực thuộc
    villageBranches: 15, // 15 chi đoàn bản
    schoolBranches: 5, // 05 chi đoàn trường học
    agencyBranches: 2, // 02 chi đoàn cơ quan & LLVT
    totalYouth: "1.028", // 1.028 đoàn viên đang sinh hoạt
    youthVillage: 506, // 506 đoàn viên khối bản
    youthSchool: 512, // 512 đoàn viên khối trường học
    youthAgency: 10, // 10 đoàn viên khối cơ quan/LLVT
    migrantYouth: "310+",
    digitalTeamsActive: 15,
    completedAITrainings: "560+",
    campaignsHeld: "48+"
};

// ===================================================================
// 7. HỆ THỐNG TIN TỨC & BÀI VIẾT HOẠT ĐỘNG (HÌNH ẢNH THANH NIÊN TÌNH NGUYỆN TÂY BẮC)
// ===================================================================
const INITIAL_NEWS_ARTICLES = [
    {
        id: "news-1",
        category: "tinh-nguyen",
        categoryName: "Phong trào Tình nguyện",
        title: "Tuổi trẻ Mường Lầm sôi nổi ra quân 'Ngày Chủ nhật xanh', chỉnh trang 5km tuyến đường tại Bản Lốm Hỏm và Bản Mường Nưa",
        date: "16/11/2026",
        author: "Ban Biên tập Đoàn xã",
        views: 428,
        thumbnail: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&auto=format&fit=crop&q=80",
        summary: "Hơn 120 đoàn viên thanh niên từ các chi đoàn bản Lốm Hỏm, Mường Nưa và Đoàn trường THPT Mường Lầm đã đồng loạt ra quân nạo vét kênh mương, phát quang bụi rậm và thu gom rác thải nông nghiệp.",
        content: `Sáng ngày 16/11/2026, Đoàn TNCS Hồ Chí Minh xã Mường Lầm đã phát động đợt ra quân cao điểm "Ngày Chủ nhật xanh" hưởng ứng phong trào xây dựng Nông thôn mới nâng cao.
        
Tại buổi ra quân, hơn 120 đoàn viên thanh niên thuộc các chi đoàn Bản Lốm Hỏm, Bản Mường Nưa cùng lực lượng thanh niên tình nguyện Đoàn trường THPT Mường Lầm đã tiến hành:
1. Phát quang hơn 5km đường liên bản, khơi thông dòng chảy các đoạn mương dẫn nước tưới tiêu.
2. Thu gom và xử lý tiêu hủy đúng quy định hơn 250kg vỏ bao bì thuốc bảo vệ thực vật trên các nương đồi cây ăn quả.
3. Trồng mới 150 cây hoa ban dọc theo tuyến đường thanh niên tự quản dẫn vào nhà văn hóa bản Lốm Hỏm.

Phát biểu tại buổi lễ, đồng chí Bí thư Đoàn xã nhấn mạnh: "Mỗi hành động nhỏ của đoàn viên thanh niên hôm nay không chỉ làm sạch đẹp cảnh quan bản làng mà còn lan tỏa ý thức giữ gìn môi trường sống bền vững cho toàn thể nhân dân xã Mường Lầm".`
    },
    {
        id: "news-2",
        category: "chuyen-doi-so",
        categoryName: "Tuổi trẻ Sáng tạo & Số hóa",
        title: "Khai mạc lớp tập huấn 'Ứng dụng AI và kỹ năng bán nông sản Mường Lầm trên sàn thương mại điện tử' cho thanh niên",
        date: "14/11/2026",
        author: "Tổ Công nghệ số Thanh niên",
        views: 615,
        thumbnail: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&auto=format&fit=crop&q=80",
        summary: "Chương trình tập huấn thực chiến giúp gần 80 đoàn viên làm chủ công nghệ trí tuệ nhân tạo (AI) để viết bài quảng bá nhãn chín muộn, xoài da xanh và mật ong hoa rừng Mường Lầm trên các nền tảng số.",
        content: `Nhằm trang bị kỹ năng kinh tế số cho đoàn viên thanh niên, ngày 14/11/2026, Đoàn xã Mường Lầm đã phối hợp với các chuyên gia kỹ thuật tổ chức lớp tập huấn chuyên đề: "Ứng dụng AI trong truyền thông và bán nông sản địa phương".
        
Tại lớp học, các bạn trẻ được:
- Hướng dẫn thực hành viết câu lệnh (Prompt) bằng ChatGPT và Google Gemini để soạn thảo bài viết bán hàng chân thực, lôi cuốn.
- Thực hành quay video ngắn giới thiệu quy trình chăm sóc vườn nhãn sạch đạt chuẩn VietGAP tại các bản Mường Tợ, Lấu Ngày.
- Thiết lập gian hàng trực tuyến trên TikTok Shop, Zalo Official Account và Cổng thông tin nông sản số Sơn La.

Nhiều bạn đoàn viên sau khi học đã tự tin đăng những bài viết đầu tiên và nhận được sự quan tâm, đặt hàng ủng hộ từ đông đảo khách hàng tại Hà Nội và các khu công nghiệp.`
    },
    {
        id: "news-3",
        category: "an-ninh-so",
        categoryName: "Lá chắn số & Pháp luật",
        title: "Chi đoàn Công an xã phối hợp cùng Đoàn xã tuyên truyền phòng chống bẫy lừa đảo trực tuyến tại Bản Phèn Sàng và Củ Luông",
        date: "11/11/2026",
        author: "Chi đoàn Công an xã",
        views: 512,
        thumbnail: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&auto=format&fit=crop&q=80",
        summary: "Cảnh báo thủ đoạn giả danh cơ quan tư pháp gọi điện đe dọa, lừa đảo tuyển dụng việc nhẹ lương cao và cài app giả mạo VNeID có mã độc đánh cắp tài khoản ngân hàng.",
        content: `Trước diễn biến phức tạp của tội phạm lừa đảo công nghệ cao nhắm vào vùng nông thôn, Chi đoàn Công an xã Mường Lầm đã phối hợp với Ban Thường vụ Đoàn xã tổ chức các buổi truyền thông trực tiếp tại nhà văn hóa Bản Phèn Sàng và Bản Củ Luông.
        
Nội dung tuyên truyền tập trung vào các chiêu trò:
1. Cuộc gọi mạo danh cán bộ Công an, Viện kiểm sát yêu cầu chuyển tiền vào "tài khoản an toàn".
2. Bẫy tuyển dụng "việc nhẹ lương cao 25 - 30 triệu/tháng tại Campuchia hoặc qua mạng".
3. Gửi link cài file .APK giả danh ứng dụng định danh điện tử VNeID để chiếm quyền điều khiển điện thoại.

Đồng chí đại diện Chi đoàn Công an xã khuyến cáo: Lực lượng Công an không bao giờ làm việc qua điện thoại hay yêu cầu người dân chuyển tiền. Khi có nghi vấn, bà con và thanh niên cần liên hệ ngay Hotline Đoàn xã 035.444.2054 hoặc trực ban Công an xã Mường Lầm.`
    },
    {
        id: "news-4",
        category: "dong-hanh-lap-nghiep",
        categoryName: "Đồng hành Khởi nghiệp",
        title: "Gương thanh niên tiêu biểu Bản Nà Tấu vươn lên làm giàu chính đáng từ mô hình kinh tế tổng hợp Vườn - Ao - Chuồng",
        date: "08/11/2026",
        author: "Ban Tuyên giáo Đoàn xã",
        views: 730,
        thumbnail: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&auto=format&fit=crop&q=80",
        summary: "Đoàn viên Lò Văn Nam (sinh năm 1997, Bản Nà Tấu) đã mạnh dạn vay vốn Ngân hàng Chính sách qua kênh ủy thác Đoàn Thanh niên để đầu tư trang trại bò vỗ béo và vườn nhãn ghép cành thu nhập trên 200 triệu đồng/năm.",
        content: `Sinh ra và lớn lên trên mảnh đất Mường Lầm, anh Lò Văn Nam từng có thời gian đi làm công nhân tại Bắc Ninh nhưng quyết định trở về quê hương tìm hướng lập thân lập nghiệp.
        
Được sự hỗ trợ tư vấn và tín chấp nguồn vốn vay ưu đãi 100 triệu đồng từ Đoàn xã Mường Lầm, anh Nam đã:
- Cải tạo hơn 1,5ha đất đồi dốc sang trồng giống cỏ voi VA06 phục vụ nuôi 15 con bò thịt nhốt chuồng vỗ béo.
- Ghép mắt cải tạo hơn 200 gốc nhãn cũ sang giống nhãn chín muộn năng suất cao, quả to đều ngọt thanh.
- Tận dụng chất thải ủ phân hữu cơ vi sinh bón cho vườn cây, vừa bảo vệ môi trường vừa giảm 40% chi phí phân bón.

Mô hình của anh Nam không chỉ đem lại thu nhập bền vững cho gia đình mà còn tạo việc làm thời vụ cho 4 đoàn viên trẻ trong bản, trở thành điểm tham quan học tập kinh nghiệm tiêu biểu của tuổi trẻ xã Mường Lầm.`
    },
    {
        id: "news-5",
        category: "truong-hoc",
        categoryName: "Thanh niên Trường học",
        title: "Đoàn Trường THPT Mường Lầm phát động phong trào 'Hoa điểm tốt dâng thầy cô' và Hội thi Sáng tạo Robot số",
        date: "05/11/2026",
        author: "Đoàn Trường THPT Mường Lầm",
        views: 580,
        thumbnail: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&auto=format&fit=crop&q=80",
        summary: "Hơn 650 đoàn viên, học sinh thuộc 24 chi đoàn trường THPT Mường Lầm sôi nổi thi đua học tốt, rèn luyện kỹ năng số chào mừng kỷ niệm Ngày Nhà giáo Việt Nam 20/11.",
        content: `Hướng tới kỷ niệm 44 năm Ngày Nhà giáo Việt Nam (20/11/1982 - 20/11/2026), Đoàn Trường THPT Mường Lầm đã tổ chức đợt thi đua đặc biệt thu hút sự tham gia của 01 chi đoàn giáo viên và 23 chi đoàn lớp học.
        
Các hoạt động trọng tâm diễn ra sôi nổi:
- Tuần lễ học tốt, giờ học kiểu mẫu, giành hoa điểm 9, điểm 10 dâng tặng các thầy cô giáo tận tụy cắm bản.
- Hội thi "Ứng dụng Trí tuệ nhân tạo (AI) thiết kế thiệp tri ân điện tử và clip ngắn nói lời cảm ơn thầy cô".
- Giao lưu thể thao bóng chuyền nam - nữ giữa các chi đoàn tạo không khí vui tươi, đoàn kết lành mạnh.

Hoạt động đã giáo dục sâu sắc đạo lý "Tôn sư trọng đạo" và khích lệ tinh thần thi đua học tập trong học sinh vùng cao.`
    },
    {
        id: "news-6",
        category: "xa-que",
        categoryName: "Kết nối Thanh niên Xa quê",
        title: "'Chi đoàn số xa quê': Gần 200 đoàn viên Mường Lầm tại KCN Bắc Ninh, Bắc Giang tham gia buổi sinh hoạt trực tuyến tháng 11",
        date: "01/11/2026",
        author: "Tổ Công tác Xa quê",
        views: 890,
        thumbnail: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&auto=format&fit=crop&q=80",
        summary: "Diễn đàn trực tuyến kết nối ấm áp tình đồng hương, hỗ trợ pháp lý hồ sơ hôn nhân và bảo vệ quyền lợi lao động cho các bạn trẻ Mường Lầm đi làm ăn xa nhà.",
        content: `Tối ngày 01/11/2026, Đoàn xã Mường Lầm đã tổ chức buổi sinh hoạt chuyên đề trực tuyến qua Google Meet với chủ đề: "Ấm tình quê Mường - Vững bước lao động nơi xa".
        
Buổi sinh hoạt thu hút gần 200 đoàn viên thanh niên đang làm việc tại các nhà máy ở Bắc Ninh, Bắc Giang, Hà Nội và Bình Dương tham gia.
Tại chương trình:
- Ban Thường vụ Đoàn xã đã thông tin tình hình phát triển kinh tế, nương rẫy và các công trình thanh niên mới xây dựng tại 15 bản làng.
- Hướng dẫn giải đáp thắc mắc về thủ tục đăng ký nghĩa vụ quân sự, cấp trích lục khai sinh, xác nhận tình trạng hôn nhân qua cổng Dịch vụ công Quốc gia từ xa mà không cần phải tốn kém về quê.
- Thành lập Ban liên lạc đồng hương thanh niên Mường Lầm tại Bắc Ninh để kịp thời hỗ trợ nhau khi có đoàn viên gặp ốm đau, hoạn nạn.

Nhiều bạn đoàn viên xúc động chia sẻ: Nhờ có Chi đoàn số mà dù ở trọ xa xôi hàng trăm cây số, chúng em vẫn luôn cảm nhận được sự đồng hành ấm áp của tổ chức Đoàn quê nhà.`
    }
];

// ===================================================================
// 8. CỔNG ĐĂNG KÝ HOẠT ĐỘNG / CHIẾN DỊCH TÌNH NGUYỆN SẮP DIỄN RA
// ===================================================================
const VOLUNTEER_CAMPAIGNS = [
    {
        id: "camp-01",
        title: "Chiến Dịch 'Xuân Ấm Bản Mường 2026' - Thăm và Tặng Quà Gia Đình Chính Sách",
        category: "An sinh xã hội",
        date: "Chủ nhật, 28/12/2026",
        location: "Nhà văn hóa 15 Bản xã Mường Lầm",
        quota: 80,
        registered: 58,
        status: "Đang mở đăng ký",
        badgeColor: "success",
        thumbnail: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&auto=format&fit=crop&q=80",
        description: "Tổ chức các đoàn tình nguyện đến sửa sang nhà cửa, tặng chăn ấm, bánh chưng và quà Tết cho các hộ gia đình chính sách, cựu TNXP và trẻ em có hoàn cảnh đặc biệt khó khăn.",
        requirements: "Đoàn viên thanh niên 15 bản, giáo viên trẻ, học sinh THPT có tinh thần nhiệt huyết, tương thân tương ái."
    },
    {
        id: "camp-02",
        title: "Ngày Hội 'Thanh Niên Mường Lầm Tiên Phong Chuyển Đổi Số Bản Làng'",
        category: "Chuyển đổi số",
        date: "Thứ Bảy, 05/12/2026",
        location: "Sân vận động Trung tâm xã Mường Lầm",
        quota: 100,
        registered: 76,
        status: "Đang mở đăng ký",
        badgeColor: "info",
        thumbnail: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&auto=format&fit=crop&q=80",
        description: "Ngày hội phổ cập kỹ năng số cộng đồng: Tổ chức gian hàng trải nghiệm AI miễn phí, chuẩn hóa thông tin thuê bao di động, cài đặt ví điện tử và hướng dẫn bán hàng nông sản trên mạng xã hội.",
        requirements: "Ưu tiên thành viên Tổ công nghệ số thanh niên 15 bản và các bạn am hiểu sử dụng smartphone."
    },
    {
        id: "camp-03",
        title: "Giải Bóng Đá Nam Thanh Niên Xã Mường Lầm Chào Năm Mới",
        category: "Thể dục thể thao",
        date: "Ngày 15/12 - 20/12/2026",
        location: "Sân thể thao Trường THPT Mường Lầm",
        quota: 16, // 16 đội bóng
        registered: 12,
        status: "Sắp hết chỉ tiêu",
        badgeColor: "warning",
        thumbnail: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&auto=format&fit=crop&q=80",
        description: "Giải đấu giao lưu gắn kết thể thao lành mạnh giữa 15 chi đoàn bản, Đoàn trường THPT Mường Lầm, Chi đoàn Công an và Chi đoàn Cơ quan xã.",
        requirements: "Mỗi chi đoàn cử 01 đội hình chính thức 7 người tham gia thi đấu theo điều lệ giải."
    },
    {
        id: "camp-04",
        title: "Chiến Dịch 'Tiếp Sức Đến Trường' & Phòng Chống Đuối Nước Mùa Khô Lũ",
        category: "Đồng hành cùng em",
        date: "Thường xuyên trong quý",
        location: "Điểm trường cắm bản Đứa Mòn và các bến suối",
        quota: 50,
        registered: 32,
        status: "Đang mở đăng ký",
        badgeColor: "success",
        thumbnail: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&auto=format&fit=crop&q=80",
        description: "Lắp đặt biển cảnh báo nguy cơ đuối nước tại các vùng nước sâu, suối nguy hiểm; quyên góp sách vở và đồ ấm cho học sinh mầm non, tiểu học bán trú vùng cao.",
        requirements: "Có sức khỏe tốt, biết bơi lội an toàn và yêu thích các hoạt động chăm sóc thiếu nhi."
    }
];

// ===================================================================
// 9. KHO BIỂU MẪU & VĂN BẢN ĐOÀN VỤ THIẾT YẾU
// ===================================================================
const YOUTH_FORMS_AND_DOCS = [
    {
        id: "doc-01",
        code: "BM-01/ĐX",
        name: "Mẫu Đơn xin vào Đoàn TNCS Hồ Chí Minh",
        type: "DOCX / PDF",
        size: "95 KB",
        category: "Đoàn viên mới",
        desc: "Dành cho thanh niên ưu tú từ 16 tuổi trở lên làm đơn tự nguyện rèn luyện đứng vào hàng ngũ của Đoàn.",
        content: `ĐOÀN TNCS HỒ CHÍ MINH
ĐƠN XIN VÀO ĐOÀN TNCS HỒ CHÍ MINH

Kính gửi: Ban Chấp hành Chi đoàn: .......................................
Ban Chấp hành Đoàn TNCS Hồ Chí Minh xã Mường Lầm.

Tôi tên là: ..............................................................
Sinh ngày: ..... tháng ..... năm ..... Tại: .............................
Dân tộc: .................... Quê quán: Bản .............................
Nơi ở hiện nay: ........................................................
Trình độ học vấn: ......................................................

Sau khi được học Điều lệ Đoàn và tìm hiểu về mục đích, lý tưởng cao đẹp của Đoàn TNCS Hồ Chí Minh, tôi nhận thấy Đoàn là tổ chức tiên phong của tuổi trẻ Việt Nam do Đảng Cộng sản Việt Nam và Chủ tịch Hồ Chí Minh sáng lập và rèn luyện.

Tôi làm đơn này tha thiết xin được kết nạp vào Đoàn TNCS Hồ Chí Minh.
Tôi xin hứa:
1. Suốt đời phấn đấu vì lý tưởng của Đảng và Bác Hồ;
2. Nghiêm chỉnh chấp hành Điều lệ Đoàn, tích cực học tập, lao động và rèn luyện;
3. Luôn gương mẫu, gắn bó mật thiết với thanh niên và nhân dân bản làng.

Mường Lầm, ngày ..... tháng ..... năm 2026
Người làm đơn
(Ký và ghi rõ họ tên)`
    },
    {
        id: "doc-02",
        code: "BM-02/ĐX",
        name: "Giấy giới thiệu chuyển sinh hoạt Đoàn (dành cho đi làm ăn xa/học tập)",
        type: "DOCX",
        size: "115 KB",
        category: "Quản lý đoàn viên",
        desc: "Mẫu giới thiệu sinh hoạt đoàn viên khi đi làm việc tại các khu công nghiệp hoặc chuyển trường học.",
        content: `TỈNH ĐOÀN SƠN LA
ĐOÀN XÃ MƯỜNG LẦM
***
Số: ......-GGT/ĐX

GIẤY GIỚI THIỆU CHUYỂN SINH HOẠT ĐOÀN

Ban Chấp hành Đoàn xã Mường Lầm trân trọng giới thiệu:
Đồng chí: ................................................................
Sinh ngày: ..... tháng ..... năm .....
Được kết nạp vào Đoàn ngày: ...../...../......... Tại: ....................
Số thẻ đoàn viên: ....................... Đã đóng đoàn phí đến tháng: ....
Hiện đang sinh hoạt tại Chi đoàn: ........................................

Được chuyển sinh hoạt Đoàn đến: ..........................................
Lý do: Đi làm ăn xa / Chuyển nơi cư trú / Học tập.
Đề nghị Ban Chấp hành Đoàn cơ sở nơi tiếp nhận tiếp nhận và bố trí sinh hoạt cho đồng chí theo quy định của Điều lệ Đoàn.

Mường Lầm, ngày ..... tháng ..... năm 2026
TM. BAN CHẤP HÀNH ĐOÀN XÃ
BÍ THƯ
(Ký tên, đóng dấu)`
    },
    {
        id: "doc-03",
        code: "NQ-01/ĐX",
        name: "Nghị quyết Đại hội Đoàn TNCS Hồ Chí Minh xã Mường Lầm",
        type: "PDF",
        size: "340 KB",
        category: "Nghị quyết chỉ đạo",
        desc: "Mục tiêu, phương hướng và các chỉ tiêu trọng tâm công tác Đoàn và phong trào thanh thiếu nhi xã Mường Lầm.",
        content: `NGHỊ QUYẾT ĐẠI HỘI ĐẠI BIỂU ĐOÀN TNCS HỒ CHÍ MINH XÃ MƯỜNG LẦM
MỤC TIÊU VÀ CÁC CHỈ TIÊU TRỌNG TÂM:
1. 100% cán bộ, đoàn viên và thanh niên được học tập, quán triệt các Nghị quyết của Đảng, của Đoàn.
2. 100% Chi đoàn 15 bản duy trì hoạt động Tổ công nghệ số thanh niên xung kích.
3. Hàng năm mỗi chi đoàn đảm nhận ít nhất 01 công trình/phần việc thanh niên tham gia xây dựng nông thôn mới.
4. Kết nối bền chặt trên 300 thanh niên đi làm ăn xa tại các khu công nghiệp qua mô hình Chi đoàn số.
5. Hỗ trợ ít nhất 05 mô hình thanh niên khởi nghiệp phát triển kinh tế nông sản.`
    },
    {
        id: "doc-04",
        code: "HD-01/ĐX",
        name: "Sổ tay Hướng dẫn quy trình tổ chức Sinh hoạt Chi đoàn định kỳ",
        type: "DOCX",
        size: "210 KB",
        category: "Kỹ năng cán bộ Đoàn",
        desc: "Cẩm nang hướng dẫn Bí thư Chi đoàn 15 bản và cơ sở tổ chức sinh hoạt vui tươi, đúng điều lệ, kết hợp chuyển đổi số.",
        content: `HƯỚNG DẪN QUY TRÌNH TỔ CHỨC BUỔI SINH HOẠT CHI ĐOÀN ĐỊNH KỲ:
Bước 1: Ban Chấp hành chi đoàn họp trù bị phân công nhiệm vụ và chuẩn bị nội dung tài liệu.
Bước 2: Phát thông báo sinh hoạt qua loa bản và nhóm Zalo chi đoàn trước 03 ngày.
Bước 3: Tiến hành sinh hoạt: Chào cờ - Báo cáo công tác tháng - Sinh hoạt chuyên đề - Thảo luận số - Bế mạc.
Bước 4: Ghi biên bản sinh hoạt chi đoàn vào sổ chi đoàn điện tử.`
    }
];


// ==========================================
// 10. DỮ LIỆU TẬP HUẤN KỸ NĂNG AI CƠ BẢN
// ==========================================
const AI_TRAINING_MODULES = [
    {
        id: "ai-mod-1",
        category: "can-bo-doan",
        categoryName: "Cán bộ Đoàn & Soạn thảo",
        level: "Cơ bản",
        icon: "fas fa-feather-alt",
        title: "Soạn thảo kịch bản sinh hoạt chi đoàn & Báo cáo công tác Đoàn trong 3 phút",
        description: "Ứng dụng AI giúp Bí thư Chi đoàn 15 bản và các Chi đoàn cơ sở nhanh chóng phác thảo kế hoạch tổ chức sinh hoạt, nghị quyết chuyên đề sát với thực tiễn.",
        steps: [
            "Bước 1: Mở công cụ AI miễn phí (như ChatGPT, Google Gemini hoặc Claude trên trình duyệt điện thoại/máy tính).",
            "Bước 2: Xác định rõ tháng sinh hoạt, chủ đề trọng tâm và đặc thù riêng của chi đoàn mình (ví dụ: Bản Lốm Hỏm, Bản Mường Nưa, Chi đoàn trường học...).",
            "Bước 3: Sao chép câu lệnh (prompt) mẫu bên dưới, thay thế các thông tin trong ngoặc vuông và gửi cho AI.",
            "Bước 4: Đọc lại kết quả, tinh chỉnh cho hợp văn phong địa phương và lưu vào ghi chú điện thoại hoặc in ra."
        ],
        prompt: `Bạn là một chuyên gia công tác thanh niên của Đoàn TNCS Hồ Chí Minh tỉnh Sơn La. Hãy giúp tôi (Bí thư Chi đoàn [Bản Mường Nưa, xã Mường Lầm]) soạn thảo 01 kịch bản chi tiết cho buổi sinh hoạt chi đoàn định kỳ [Tháng 3 - Tháng Thanh niên].

Yêu cầu cụ thể:
1. Địa điểm sinh hoạt: Nhà văn hóa bản, kết hợp nhóm Zalo cho đoàn viên đi làm ăn xa tại Bắc Ninh theo dõi.
2. Thời lượng: Khoảng 60 phút.
3. Nội dung chính: Tuyên truyền ngày thành lập Đoàn 26/3; Hướng dẫn đoàn viên cài đặt VNeID và cảnh báo lừa đảo qua mạng; Bàn kế hoạch dọn vệ sinh tuyến đường thanh niên tự quản bản.
4. Văn phong: Trang trọng nhưng mộc mạc, gần gũi với đoàn viên thanh niên vùng cao, dễ hiểu, dễ điều hành.`,
        expectedResult: "AI sẽ tạo ra một văn bản kịch bản hoàn chỉnh gồm: Phân công dẫn chương trình, Lời mở đầu, Phần tuyên truyền ngắn gọn, Câu hỏi thảo luận tương tác và Kế hoạch phân công cụ thể.",
        tips: "Nên yêu cầu AI chèn thêm các câu hỏi thảo luận vui để đoàn viên không bị buồn ngủ trong buổi sinh hoạt."
    },
    {
        id: "ai-mod-2",
        category: "nong-san",
        categoryName: "Quảng bá Nông sản & Khởi nghiệp",
        level: "Ứng dụng thực tế",
        icon: "fas fa-store-alt",
        title: "Tạo bài viết bán nhãn Mường Lầm, xoài tròn, mật ong rừng trên Zalo/Facebook/TikTok",
        description: "Hỗ trợ đoàn viên thanh niên làm kinh tế nông nghiệp viết bài quảng bá nông sản chân thực, cuốn hút khách hàng cả nước, tăng thu nhập.",
        steps: [
            "Bước 1: Chụp 3-4 bức ảnh rõ nét tại vườn nhãn/đồi xoài của gia đình ở Mường Lầm.",
            "Bước 2: Dùng prompt mẫu, điền loại quả, giá bán dự kiến và cam kết chất lượng (quả ngọt mọng nước, hái tại cây chuyển ngay trong ngày).",
            "Bước 3: Yêu cầu AI đưa thêm các thẻ hashtag phù hợp (#NhanMuongLam #NongSanSonLa #ThanhNienMuongLam).",
            "Bước 4: Đăng bài kèm số điện thoại liên hệ để bà con nội thành dễ dàng đặt hàng."
        ],
        prompt: `Đóng vai là một bạn trẻ người Thái ở xã Mường Lầm, tỉnh Sơn La đang khởi nghiệp đưa nông sản quê hương đến mọi miền Tổ quốc. Hãy viết 01 bài đăng Facebook/Zalo thật chân thực, ấm áp và truyền cảm hứng để bán [Nhãn chín muộn cùi dày mọng nước] được hái tận vườn tại [Bản Lốm Hỏm, xã Mường Lầm].

Thông tin nông sản:
- Sản phẩm: Nhãn tươi Mường Lầm loại 1, quả to đều, cùi dày, ngọt thanh, không chất bảo quản.
- Đóng gói: Thùng xốp 10kg/20kg gửi xe khách về Hà Nội, Hải Phòng, Bắc Ninh trong ngày.
- Giá bán ưu đãi ủng hộ thanh niên khởi nghiệp: [Điền giá]/kg.
- Cam kết: Hái tươi sáng sớm, đền bù 100% nếu dập nát hoặc không ngọt.

Giọng văn: Chân thành, mộc mạc của người con vùng cao Tây Bắc, có cảm xúc tự hào về sản vật quê mình, khéo léo kêu gọi anh chị em xa quê ủng hộ.`,
        expectedResult: "Một bài viết thu hút, giàu hình ảnh miêu tả, tạo niềm tin lớn cho khách hàng và gợi nhớ hương vị ngọt ngào của nhãn Mường Lầm, Sơn La.",
        tips: "Có thể bảo AI chuyển bài viết này thành kịch bản video ngắn 30 giây để quay clip TikTok tự nhiên tại gốc nhãn."
    },
    {
        id: "ai-mod-3",
        category: "phong-chong-lua-dao",
        categoryName: "Lá chắn số & An toàn mạng",
        level: "Quan trọng sống còn",
        icon: "fas fa-shield-virus",
        title: "Nhận diện tin giả, phát hiện bẫy lừa đảo tuyển dụng & app giả mạo",
        description: "Bảo vệ thanh niên và gia đình trước các chiêu trò lừa đảo tinh vi: 'Việc nhẹ lương cao', giả mạo công an gọi điện, yêu cầu quét mã QR lạ.",
        steps: [
            "Bước 1: Khi nhận được tin nhắn hoặc cuộc gọi khả nghi (tuyển lao động lương 25 triệu/tháng không cần bằng cấp, cài app VNeID lạ qua link đuôi .apk).",
            "Bước 2: Không vội làm theo hướng dẫn! Sao chép nội dung tin nhắn hoặc tóm tắt lời người gọi.",
            "Bước 3: Dùng prompt mẫu gửi cho AI để phân tích các dấu hiệu bất thường.",
            "Bước 4: Chia sẻ cảnh báo ngay cho người thân trong bản và báo cho Chi đoàn Công an xã hoặc Bí thư Chi đoàn."
        ],
        prompt: `Tôi nhận được tin nhắn qua mạng xã hội với nội dung như sau:
"[Dán đoạn tin nhắn mời gọi việc làm, trúng thưởng hoặc yêu cầu cài app lạ vào đây]"

Hãy phân tích giúp tôi với tư cách là chuyên gia an ninh mạng:
1. Tin nhắn trên có phải dấu hiệu lừa đảo trực tuyến không? Thuộc thủ đoạn nào thường gặp?
2. Kẻ lừa đảo thường nhắm vào tâm lý gì của người dân vùng cao và thanh niên mới đi làm ăn xa?
3. Nếu ai đó đã lỡ bấm vào đường link hoặc chuyển tiền thì phải làm ngay 3 việc khẩn cấp nào?
4. Hãy tóm tắt 3 câu cảnh báo cực ngắn gọn bằng ngôn ngữ dễ hiểu để tôi gửi lên nhóm Zalo của bản cảnh báo bà con.`,
        expectedResult: "AI phân tích rõ các cạm bẫy tâm lý, chỉ ra các dấu hiệu lừa đảo kinh điển và cung cấp hướng xử lý khẩn cấp bảo vệ tài khoản.",
        tips: "Ghi nhớ quy tắc 3 KHÔNG: Không chuyển tiền cho người lạ - Không tải ứng dụng ngoài kho CH Play/App Store - Không cung cấp mã OTP/mật khẩu."
    },
    {
        id: "ai-mod-4",
        category: "truyen-thong",
        categoryName: "Thiết kế & Truyền thông trực quan",
        level: "Sáng tạo",
        icon: "fas fa-paint-brush",
        title: "Tạo ý tưởng thiết kế Poster, Infographic tuyên truyền bản làng",
        description: "Học cách ra lệnh cho AI mô tả chi tiết bố cục, màu sắc và nội dung ngắn gọn để đưa vào Canva làm tranh cổ động, avatar sự kiện Đoàn.",
        steps: [
            "Bước 1: Chọn chủ đề cần tuyên truyền (như: Phòng chống tảo hôn, Thanh niên bảo vệ rừng đầu nguồn, Ngày hội chuyển đổi số).",
            "Bước 2: Yêu cầu AI đưa ra bố cục trực quan (Tiêu đề lớn, 3 ý chính, màu sắc chủ đạo xanh thanh niên kết hợp hoa văn thổ cẩm).",
            "Bước 3: Mở ứng dụng Canva (bản miễn phí trên điện thoại), chọn mẫu Poster rồi copy các câu ngắn từ AI vào.",
            "Bước 4: Xuất ảnh định dạng JPG/PNG dung lượng nhẹ gửi vào nhóm Zalo các bản."
        ],
        prompt: `Hãy lên ý tưởng thiết kế một tấm Infographic tuyên truyền cho thanh niên xã Mường Lầm với chủ đề: "Tuổi trẻ Mường Lầm nói KHÔNG với tảo hôn và hôn nhân cận huyết thống".

Hãy cung cấp:
1. Tiêu đề ấn tượng, vần điệu, dễ nhớ đối với thanh niên dân tộc thiểu số vùng cao.
2. 4 thông điệp cốt lõi cực ngắn (mỗi ý dưới 15 từ) nói rõ hệ lụy về sức khỏe con cái, tương lai kinh tế và pháp luật.
3. Gợi ý hình ảnh minh họa phù hợp với bản làng Mường Lầm (hình ảnh nam nữ thanh niên mặc trang phục truyền thống rạng rỡ đến trường, học nghề).
4. Phối màu đề xuất: Tươi sáng, thân thiện, mang hơi thở Tây Bắc.`,
        expectedResult: "Một khung dàn ý thiết kế đồ họa trực quan, câu từ súc tích, đắt giá, giúp cán bộ Đoàn chỉ cần ráp vào mẫu ảnh là có sản phẩm truyền thông chuyên nghiệp.",
        tips: "Nội dung cho đồng bào vùng cao cần hình ảnh lớn, chữ thật to và ngắn gọn, tránh viết văn bản dài dòng."
    },
    {
        id: "ai-mod-5",
        category: "hoc-tap-khoi-nghiep",
        categoryName: "Học tập & Hướng nghiệp",
        level: "Nâng cao năng lực",
        icon: "fas fa-graduation-cap",
        title: "Gia sư AI: Ôn thi THPT, học nghề cơ khí, điện dân dụng, dịch tài liệu",
        description: "Tận dụng AI làm người thầy 24/7 giải đáp mọi thắc mắc học tập cho học sinh THPT Mường Lầm, thanh niên học nghề và hướng dẫn chăn nuôi, trồng trọt.",
        steps: [
            "Bước 1: Gặp câu hỏi khó hoặc kỹ thuật nông nghiệp chưa rõ, chụp ảnh hoặc gõ câu hỏi vào ứng dụng AI.",
            "Bước 2: Yêu cầu AI giải thích từng bước cặn kẽ như một người anh/người thầy kiên nhẫn.",
            "Bước 3: Yêu cầu AI cho bài tập tương tự hoặc ví dụ minh họa thực tế ở Sơn La để hiểu sâu bản chất.",
            "Bước 4: Ghi chép lại các mẹo hay vào sổ tay số."
        ],
        prompt: `Tôi là đoàn viên thanh niên tại xã Mường Lầm, tỉnh Sơn La. Gia đình tôi đang muốn phát triển mô hình [Chăn nuôi bò thịt nhốt chuồng vỗ béo kết hợp trồng cỏ voi].

Hãy hướng dẫn tôi chi tiết và thực tế nhất:
1. Cách thiết kế chuồng trại thoáng mát mùa hè, kín gió mùa đông tại vùng núi cao Sơn La.
2. Công thức phối trộn thức ăn tận dụng phụ phẩm nông nghiệp sẵn có tại địa phương (thân ngô, rơm rạ, bã sắn, cỏ voi).
3. Lịch tiêm phòng các bệnh truyền nhiễm thường gặp theo mùa ở Tây Bắc.
4. Ước tính chi phí đầu tư ban đầu và cách luân chuyển vốn an toàn cho thanh niên nông thôn mới khởi nghiệp.`,
        expectedResult: "Hướng dẫn kỹ thuật bài bản, khoa học nhưng cực kỳ sát với thực tế miền núi, giúp thanh niên tự tin lập thân lập nghiệp.",
        tips: "Có thể hỏi tiếp AI về kinh nghiệm làm hồ sơ vay vốn Ngân hàng Chính sách Xã hội ủy thác qua Đoàn Thanh niên."
    },
    {
        id: "ai-mod-6",
        category: "can-bo-doan",
        categoryName: "Cán bộ Đoàn & Soạn thảo",
        level: "Cơ bản",
        icon: "fas fa-bullhorn",
        title: "Tóm tắt văn bản chỉ đạo & Chuyển thành lời phát thanh loa bản thân thuộc",
        description: "Biến các Nghị quyết, Kế hoạch hàng chục trang từ Đoàn cấp trên thành bản tin phát thanh 3 phút bằng tiếng phổ thông dễ hiểu cho loa truyền thanh 15 bản.",
        steps: [
            "Bước 1: Copy toàn bộ nội dung công văn hoặc nghị quyết dài cần tuyên truyền.",
            "Bước 2: Dùng prompt chuyển thể phong cách dưới đây.",
            "Bước 3: AI sẽ lọc ra 3-5 việc đoàn viên và bà con cần biết nhất.",
            "Bước 4: Phát thanh trên loa nhà văn hóa bản vào khung giờ chiều tối khi bà con đi nương về."
        ],
        prompt: `Dưới đây là nội dung công văn/kế hoạch về [Chiến dịch Thanh niên tình nguyện Hè và Ngày Chủ nhật xanh]:
"[Dán nội dung công văn tại đây]"

Hãy đóng vai là Bí thư Chi đoàn bản người Thái, viết lại nội dung trên thành một bản tin phát thanh truyền thanh bản dài khoảng 300 từ:
- Mở đầu bằng lời chào bà con, anh chị em đoàn viên trong bản thân thương.
- Dùng từ ngữ bình dị, gần gũi, ấm áp, tránh dùng quá nhiều thuật ngữ hành chính khó nhớ.
- Nêu rõ thời gian tập trung, địa điểm, công cụ cần mang theo (cuốc, xẻng, chổi) và ý nghĩa làm đẹp bản làng.
- Kết thúc bằng lời kêu gọi nhiệt huyết của tuổi trẻ.`,
        expectedResult: "Một bài phát thanh truyền cảm, mộc mạc, thúc giục tinh thần xung kích của đoàn viên và nhân dân.",
        tips: "Bí thư chi đoàn có thể ghi âm lại vào điện thoại rồi kết nối Bluetooth phát trực tiếp qua loa kéo của bản."
    }
];

// ==========================================
// 11. DỮ LIỆU GIẢI PHÁP SỐ & KẾT NỐI THANH NIÊN
// ==========================================
const DIGITAL_SOLUTIONS = [
    {
        id: "sol-migrant",
        targetGroup: "Thanh niên đi làm ăn xa (KCN Bắc Ninh, Bắc Giang, Hà Nội, Bình Dương...)",
        badge: "Đoàn kết - Gắn bó quê hương",
        icon: "fas fa-plane-departure",
        challenge: "Toàn xã có hơn 310 thanh niên đi làm xa nhà. Do áp lực tăng ca và khoảng cách địa lý, đoàn viên ít có điều kiện tham gia sinh hoạt trực tiếp tại bản, thông tin quê hương bị gián đoạn, nhiều bạn gặp khó khăn khi làm giấy tờ hành chính hoặc dễ rơi vào cạm bẫy lừa đảo lao động.",
        solutions: [
            {
                title: "Mô hình 'Chi đoàn số xa quê' & Sinh hoạt định kỳ trực tuyến",
                desc: "Thành lập nhóm Zalo 'Tuổi trẻ Mường Lầm xa quê' theo từng cụm tỉnh. Tổ chức họp mặt trực tuyến qua Google Meet vào tối Chủ nhật tuần thứ 3 mỗi tháng; phát phiếu khảo sát số và biểu dương tinh thần lao động.",
                actionText: "Tham gia nhóm Zalo kết nối",
                actionLink: "#connect-form"
            },
            {
                title: "Chuyên mục số 'Bản tin Quê Mường cuối tuần'",
                desc: "Đoàn xã sản xuất bản tin ngắn (dạng ảnh infographic và podcast 2 phút) gửi vào nhóm xa quê: Cập nhật tình hình mùa màng, mùa thu hoạch nhãn Mường Lầm, các công trình thanh niên mới làm tại 15 bản.",
                actionText: "Xem bản tin mẫu",
                actionLink: "#monthly-docs"
            },
            {
                title: "Bàn tư vấn Dịch vụ công & Pháp lý trực tuyến",
                desc: "Tổ chức đường dây nóng (035.444.2054) hỗ trợ thanh niên xa quê giải quyết thủ tục hành chính online: Xác nhận sơ yếu lý lịch, làm hồ sơ VNeID mức 2, thủ tục đăng ký nghĩa vụ quân sự từ xa.",
                actionText: "Gửi yêu cầu hỗ trợ",
                actionLink: "#connect-form"
            },
            {
                title: "Mạng lưới bảo vệ & Giới thiệu việc làm an toàn",
                desc: "Đoàn xã liên kết với các Trung tâm Dịch vụ việc làm của Tỉnh đoàn Sơn La và doanh nghiệp uy tín để thẩm định thông tin tuyển dụng, loại bỏ hoàn toàn bẫy 'việc nhẹ lương cao' lừa đảo.",
                actionText: "Xem thông tin việc làm",
                actionLink: "#ai-training"
            }
        ]
    },
    {
        id: "sol-local-villages",
        targetGroup: "Thanh niên sinh sống phân tán tại 15 bản và các cơ sở trường học",
        badge: "Tiên phong - Xung kích bản làng",
        icon: "fas fa-mountain",
        challenge: "Địa bàn xã Mường Lầm rộng với 15 bản (Lốm Hỏm, Bản Hịa, Mường Nưa, Mường Tợ, Lấu Ngày, Phèn Sàng, Củ Luông, Đứa Lốc, Tặng Sỏn, Huổi Lếch, Núa Cốc, Phá Thóng, Hin Phẩng, Tỉa Pặt, Nà Tấu) địa hình chia cắt, sóng di động tại một số bản lõm chập chờn.",
        solutions: [
            {
                title: "Mô hình 'Tổ công nghệ số thanh niên xung kích' tại 15 bản",
                desc: "Mỗi bản thành lập 01 tổ gồm 3-5 đoàn viên am hiểu công nghệ nhất. Hàng tuần đến từng hộ gia đình hỗ trợ bà con cài đặt tài khoản Dịch vụ công, tạo mã QR thanh toán tiền điện thoại, sổ sức khỏe điện tử.",
                actionText: "Xem danh sách 15 Tổ công nghệ",
                actionLink: "#village-modal"
            },
            {
                title: "Điểm quét mã QR tri thức số tại Nhà văn hóa 15 bản",
                desc: "Triển khai bảng mã QR dán tại Nhà văn hóa 15 bản: Đoàn viên chỉ cần quét mã bằng Zalo là đọc được kịch bản sinh hoạt chi đoàn, lịch thời vụ gieo trồng, kỹ thuật chăm sóc cây nhãn mà không cần in giấy.",
                actionText: "Kho tài liệu quét mã QR",
                actionLink: "#monthly-docs"
            },
            {
                title: "Truyền thông 'Số hóa thị giác' siêu nhẹ cho mạng 3G/4G yếu",
                desc: "Thiết kế toàn bộ ấn phẩm số dưới 300KB hoặc tin nhắn ảnh Zalo để thanh niên ở các bản xa vẫn xem được nhanh chóng, không tốn dung lượng data.",
                actionText: "Học cách làm ảnh nhẹ bằng AI",
                actionLink: "#ai-training"
            },
            {
                title: "Hòm thư sáng kiến số & Góp ý xây dựng quê hương",
                desc: "Biểu mẫu trực tuyến để mọi đoàn viên dù ở bản xa nhất hay đang học tại trường THPT Mường Lầm đều gửi được ý tưởng cải tiến mô hình sản xuất nông nghiệp, đề xuất mở lớp dạy nghề.",
                actionText: "Gửi sáng kiến số",
                actionLink: "#connect-form"
            }
        ]
    }
];

// ==========================================
// 12. KHO TÀI LIỆU SINH HOẠT CHI ĐOÀN 12 THÁNG
// LƯU Ý: Đã có từ Tháng 1 đến Tháng 11; Tháng 12 để trống
// ==========================================
// KHO TÀI LIỆU SINH HOẠT CHI ĐOÀN 12 THÁNG (NĂM 2026) - TỈNH ĐOÀN SƠN LA
const MONTHLY_ACTIVITIES = [
    {
        month: 1,
        isBlank: false,
        statusBadge: "Đã ban hành - Tài liệu chính thức Tỉnh đoàn Sơn La",
        statusClass: "status-official",
        title: "Tuổi trẻ Sơn La tự hào vững tin theo Đảng",
        tagline: "Phát huy truyền thống 80 năm Quốc hội Việt Nam, rèn luyện bản lĩnh dám nghĩ, dám làm vì cộng đồng",
        officialRef: "Văn bản định hướng sinh hoạt chi đoàn định kỳ Tháng 01/2026 - Ban Thường vụ Tỉnh đoàn Sơn La",
        part1: {
            title: "Phần I: Học tập & làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh",
            topic: "Học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh về dám nghĩ, dám nói, dám làm, dám chịu trách nhiệm, dám đổi mới sáng tạo, dám đương đầu với khó khăn, thử thách và dám hành động vì lợi ích chung",
            content: "Nêu cao tinh thần thực hành nêu gương trong cán bộ, đoàn viên thanh niên; duy trì và lan tỏa hiệu quả cuộc vận động 'Mỗi ngày một tin tốt, mỗi tuần một câu chuyện đẹp' trên các nền tảng số.",
            actionPoints: [
                "Đoàn viên thanh niên 15 bản tiên phong đảm nhận công trình, phần việc thanh niên gắn với chỉnh trang nông thôn mới và đón Tết an toàn.",
                "Thực hành nêu gương trong lối sống, kiên quyết nói không với tệ nạn xã hội, không mê tín dị đoan, không vi phạm trật tự ATGT.",
                "Lan tỏa thông tin tích cực, chia sẻ câu chuyện đẹp về nghĩa cử nhân ái, gương người tốt việc tốt của đồng bào các dân tộc Sơn La."
            ]
        },
        part2: {
            title: "Phần II: Theo dòng lịch sử & Ngày này năm xưa",
            events: [
                {
                    date: "06/01/1946 – 06/01/2026",
                    name: "Kỷ niệm 80 năm Ngày Tổng tuyển cử đầu tiên bầu Quốc hội Việt Nam",
                    desc: "Mốc son chói lọi trong lịch sử thể chế dân chủ nhân dân, khẳng định quyền làm chủ thiêng liêng của nhân dân ta đối với vận mệnh đất nước."
                },
                {
                    date: "07/01/1979 – 07/01/2026",
                    name: "Kỷ niệm 47 năm Ngày Chiến thắng chiến tranh bảo vệ biên giới Tây Nam",
                    desc: "Cùng quân dân Campuchia lật đổ chế độ diệt chủng Pôn Pốt tàn bạo, thể hiện nghĩa vụ quốc tế cao cả và sáng ngời chính nghĩa của Quân đội nhân dân Việt Nam."
                },
                {
                    date: "09/01/1950 – 09/01/2026",
                    name: "Kỷ niệm 76 năm Ngày truyền thống Học sinh - Sinh viên Việt Nam",
                    desc: "Noi gương Anh hùng liệt sĩ Trần Văn Ơn, tuổi trẻ học đường Đoàn trường THPT Mường Lầm thi đua học tập tốt, rèn luyện nghiêm, làm chủ công nghệ số."
                },
                {
                    date: "28/01/1941 – 28/01/2026",
                    name: "Kỷ niệm 85 năm Ngày Bác Hồ về nước trực tiếp lãnh đạo cách mạng Việt Nam",
                    desc: "Sự kiện bước ngoặt lịch sử mở ra con đường đi tới độc lập, tự do cho dân tộc, gắn liền với truyền thống cách mạng kiên trung của Đảng bộ và nhân dân các dân tộc tỉnh Sơn La."
                }
            ]
        },
        part3: {
            title: "Phần III: Chính sách, pháp luật mới có hiệu lực từ Tháng 01/2026",
            policies: [
                {
                    code: "Nghị định 318/2025/NĐ-CP",
                    title: "Quy định chi tiết về đăng ký lao động theo Luật Việc làm",
                    desc: "Hướng dẫn người lao động, đoàn viên thanh niên nông thôn đăng ký tìm kiếm việc làm, học nghề và kết nối tuyển dụng qua cổng dịch vụ số quốc gia."
                },
                {
                    code: "Nghị quyết 254/2025/QH15",
                    title: "Áp dụng bảng giá đất mới theo Luật Đất đai 2024",
                    desc: "Tăng cường tính minh bạch trong quản lý đất đai nông thôn, bảo vệ quyền lợi hợp pháp của người dân và thanh niên khởi nghiệp nông nghiệp."
                },
                {
                    code: "Nghị định 293/2025/NĐ-CP",
                    title: "Điều chỉnh tăng mức lương tối thiểu vùng",
                    desc: "Bảo đảm quyền lợi thiết thực cho thanh niên Mường Lầm đang làm việc tại các doanh nghiệp, hợp tác xã và các khu công nghiệp."
                },
                {
                    code: "Nghị định 319/2025/NĐ-CP",
                    title: "Chuyển giao công nghệ dự án đường sắt hiện đại",
                    desc: "Mở ra cơ hội nghề nghiệp kỹ thuật cao cho thanh niên trong các dự án hạ tầng giao thông trọng điểm quốc gia."
                },
                {
                    code: "Nghị định 343/2025/NĐ-CP",
                    title: "Quy định chế độ đối với sĩ quan Quân đội nhân dân nghỉ hưu",
                    desc: "Chính sách hậu phương quân đội vững chắc, động viên thanh niên ưu tú yên tâm lên đường thực hiện nghĩa vụ quân sự bảo vệ Tổ quốc."
                },
                {
                    code: "Nghị định 296/2025/NĐ-CP",
                    title: "Cưỡng chế thi hành quyết định xử phạt vi phạm hành chính",
                    desc: "Nâng cao tính nghiêm minh và ý thức chấp hành pháp luật của công dân trong cộng đồng bản làng."
                }
            ]
        },
        part4: {
            title: "Phần IV: Chuyên đề đặc biệt & Định hướng tuyên truyền của Tỉnh đoàn Sơn La",
            highlights: [
                "Tuyên truyền sâu rộng ý nghĩa, tầm vóc lịch sử của Đại hội đại biểu toàn quốc lần thứ XIV của Đảng và Kỳ họp thứ 10 Quốc hội khóa XV.",
                "Triển khai chiến dịch 'Thanh niên tình nguyện mùa xuân biên giới': Thăm hỏi, trao quà Tết cho gia đình chính sách, cựu TNXP và trẻ em có hoàn cảnh khó khăn tại 15 bản.",
                "Tuyên truyền bộ quy tắc ứng xử văn minh trên không gian mạng; cảnh báo thủ đoạn lừa đảo qua mạng viễn thông dịp giáp Tết Nguyên đán.",
                "Vận động 100% đoàn viên ký cam kết không tàng trữ, buôn bán, đốt pháo nổ; chấp hành nghiêm an toàn giao thông và phòng cháy chữa cháy."
            ]
        },
        part5: {
            title: "Phần V: Khung kịch bản điều hành sinh hoạt chi đoàn & Gợi ý thảo luận",
            agenda: `KHUNG TIẾN TRÌNH 60 PHÚT BUỔI SINH HOẠT CHI ĐOÀN THÁNG 1/2026:
1. Phần mở đầu (10 phút):
   - Chào cờ, hát vang bài Quốc ca và Đoàn ca.
   - Bí thư Chi đoàn tuyên bố lý do, thông qua nội dung chương trình.
2. Học tập tư tưởng Bác & Đánh giá công tác tháng (20 phút):
   - Sinh hoạt chuyên đề tinh thần '7 dám' của thanh niên.
   - Đánh giá công trình thanh niên và phân công đoàn viên giúp đỡ hộ khó khăn sửa nhà đón Tết.
   - Điểm danh và gửi lời chúc Tết đến đoàn viên đi làm ăn xa qua nhóm Zalo.
3. Phổ biến chính sách mới & Thảo luận (20 phút):
   - Tóm tắt Bảng giá đất mới, tăng lương tối thiểu và đăng ký việc làm.
   - Thảo luận câu hỏi tương tác của chi đoàn.
4. Triển khai kế hoạch trực an ninh Tết & Bế mạc (10 phút):
   - Ký cam kết an toàn giao thông, tuyệt đối không đốt pháo nổ.
   - Bế mạc buổi sinh hoạt.`,
            discussionQuestions: [
                "Đoàn viên chi đoàn bản chúng ta cần làm gì để phát huy tinh thần '7 dám' trong phát triển kinh tế đồi rừng và nương rẫy?",
                "Làm thế nào để kết nối các bạn đoàn viên đi làm ăn xa về quê ăn Tết tham gia tích cực các hoạt động văn nghệ, thể thao đầu xuân của bản?"
            ],
            aiTip: "Prompt AI thực chiến: 'Bạn là chuyên gia Đoàn vụ tỉnh Sơn La. Hãy gợi ý cho tôi 03 trò chơi tập thể dân gian gắn với múa sạp và ném còn để tổ chức cho thanh niên bản trong buổi sinh hoạt đầu xuân 2026'."
        },
        documents: [
            { name: "Đề cương tuyên truyền Kỷ niệm 80 năm Ngày Tổng tuyển cử Quốc hội", type: "PDF", size: "260 KB" },
            { name: "Kịch bản mẫu sinh hoạt chi đoàn Tháng 1/2026 (bản in)", type: "DOCX", size: "135 KB" },
            { name: "Bản cam kết không đốt pháo nổ & an toàn giao thông Tết 2026", type: "DOCX", size: "90 KB" }
        ],
        historicalSignificance: "Kỷ niệm 80 năm Ngày Tổng tuyển cử Quốc hội (06/01/1946 – 06/01/2026); 47 năm Chiến thắng biên giới Tây Nam (07/01/1979); 76 năm Ngày truyền thống HSSV (09/01/1950); 85 năm Bác Hồ về nước trực tiếp lãnh đạo cách mạng (28/01/1941) gắn với truyền thống Sơn La.",
        keyFocus: [
            "Học tập và làm theo Bác về tinh thần '7 dám': dám nghĩ, dám làm, dám chịu trách nhiệm vì lợi ích chung.",
            "Tuyên truyền Đại hội XIV của Đảng, phong trào 'Thanh niên tình nguyện mùa xuân biên giới' tại 15 bản.",
            "Phổ biến các chính sách mới có hiệu lực từ 01/2026: Luật Việc làm, Bảng giá đất Luật Đất đai 2024, Lương tối thiểu.",
            "Cam kết không đốt pháo nổ trái phép, ứng xử văn minh mạng xã hội và thanh toán số dịp Tết."
        ],
        meetingAgenda: `KHUNG TIẾN TRÌNH 60 PHÚT BUỔI SINH HOẠT CHI ĐOÀN THÁNG 1/2026:
1. Phần mở đầu (10 phút): Chào cờ, hát Quốc ca, Đoàn ca; Bí thư Chi đoàn tuyên bố lý do.
2. Sinh hoạt chuyên đề '7 dám' & Đánh giá công tác (20 phút): Phân công giúp đỡ hộ nghèo đón Tết; kết nối đoàn viên xa quê.
3. Phổ biến chính sách mới hiệu lực từ 01/2026 & Thảo luận (20 phút): Bảng giá đất mới, tăng lương tối thiểu, đăng ký lao động.
4. Triển khai kế hoạch trực an ninh Tết & Ký cam kết không pháo nổ (10 phút).`,
        discussionQuestions: [
            "Đoàn viên chi đoàn bản chúng ta cần làm gì để phát huy tinh thần '7 dám' trong phát triển kinh tế đồi rừng và nương rẫy?",
            "Làm thế nào để kết nối các bạn đoàn viên đi làm ăn xa về quê ăn Tết tham gia tích cực các hoạt động văn nghệ, thể thao đầu xuân của bản?"
        ],
        aiTip: "Prompt AI: 'Bạn là chuyên gia Đoàn vụ tỉnh Sơn La. Hãy gợi ý cho tôi 03 trò chơi tập thể dân gian gắn với múa sạp và ném còn để tổ chức cho thanh niên bản trong buổi sinh hoạt đầu xuân 2026'."
    },
    {
        month: 2,
        isBlank: false,
        statusBadge: "Đã ban hành - Tài liệu chính thức Tỉnh đoàn Sơn La",
        statusClass: "status-official",
        title: "Tuổi trẻ Sơn La sắt son niềm tin với Đảng",
        tagline: "Thực hành dân chủ theo gương Bác, nắm vững 18 điểm đột phá Đại hội XIV và tiếp lửa thanh niên tòng quân",
        officialRef: "Văn bản định hướng sinh hoạt chi đoàn định kỳ Tháng 02/2026 - Ban Thường vụ Tỉnh đoàn Sơn La",
        part1: {
            title: "Phần I: Học tập & làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh",
            topic: "Thực hành dân chủ trong Đảng theo tư tưởng Hồ Chí Minh - Ý nghĩa đối với công cuộc xây dựng, chỉnh đốn Đảng hiện nay",
            content: "Thấm nhuần lời dạy của Người: 'Dân chủ là của quý báu nhất của nhân dân'. Phát huy dân chủ rộng rãi trong sinh hoạt chi đoàn, khuyến khích đoàn viên thanh niên mạnh dạn đóng góp ý kiến xây dựng Chi bộ bản và tổ chức Đoàn vững mạnh.",
            actionPoints: [
                "Tạo môi trường cởi mở, chân thành để mọi đoàn viên đều được bày tỏ tâm tư, nguyện vọng trong các kỳ sinh hoạt định kỳ.",
                "Đề cao tinh thần tự phê bình và phê bình chân thành, xây dựng tình đồng chí, đoàn kết giúp đỡ nhau cùng tiến bộ.",
                "Tích cực tham gia đóng góp ý kiến xây dựng Đảng, giới thiệu đoàn viên ưu tú cho Đảng ủy xã Mường Lầm xem xét kết nạp."
            ]
        },
        part2: {
            title: "Phần II: Theo dòng lịch sử & Ngày này năm xưa",
            events: [
                {
                    date: "03/02/1930 – 03/02/2026",
                    name: "Kỷ niệm 96 năm Ngày thành lập Đảng Cộng sản Việt Nam",
                    desc: "Tôn vinh vai trò lãnh đạo vĩ đại của Đảng quang vinh, củng cố niềm tin tuyệt đối của tuổi trẻ vào con đường đi lên CNXH."
                },
                {
                    date: "09/02/1907 – 09/02/2026",
                    name: "Kỷ niệm 119 năm Ngày sinh Tổng Bí thư Trường Chinh",
                    desc: "Người học trò xuất sắc của Chủ tịch Hồ Chí Minh, nhà lãnh đạo kiệt xuất với tư duy đổi mới mang tính bước ngoặt của cách mạng Việt Nam."
                },
                {
                    date: "15/02/1943 – 15/02/2026",
                    name: "Kỷ niệm 78 năm Ngày mất của Anh hùng liệt sĩ Kim Đồng (Nông Văn Dền)",
                    desc: "Tấm gương sáng ngời về lòng yêu nước, quả cảm, người Đội trưởng đầu tiên của Đội Nhi đồng cứu quốc (nay là Đội TNTP Hồ Chí Minh)."
                },
                {
                    date: "17/02/1979 – 17/02/2026",
                    name: "Kỷ niệm 47 năm Cuộc chiến đấu bảo vệ biên giới phía Bắc của Tổ quốc",
                    desc: "Tri ân sâu sắc các anh hùng liệt sĩ, đồng bào và chiến sĩ đã dũng cảm hy sinh bảo vệ từng tấc đất thiêng liêng nơi biên cương Tổ quốc."
                },
                {
                    date: "27/02/1955 – 27/02/2026",
                    name: "Kỷ niệm 71 năm Ngày Thầy thuốc Việt Nam",
                    desc: "Khắc ghi lời dạy 'Lương y như từ mẫu', tri ân đội ngũ y bác sĩ, nhân viên y tế cắm bản ngày đêm chăm sóc sức khỏe cho bà con vùng cao."
                }
            ]
        },
        part3: {
            title: "Phần III: Chính sách, pháp luật mới có hiệu lực từ Tháng 02/2026",
            policies: [
                {
                    code: "Nghị định 340/2025/NĐ-CP",
                    title: "Tăng cường xử phạt vi phạm hành chính trong kinh doanh vàng miếng",
                    desc: "Chấn chỉnh thị trường tài chính, phòng ngừa đầu cơ tích trữ và lừa đảo vàng giả qua mạng xã hội."
                },
                {
                    code: "Nghị định 373/2025/NĐ-CP",
                    title: "Miễn xử phạt vi phạm chậm nộp hồ sơ khai thuế do thay đổi kỳ tính thuế",
                    desc: "Chính sách tháo gỡ khó khăn thiết thực cho các hộ kinh doanh cá thể, hợp tác xã thanh niên mới thành lập."
                },
                {
                    code: "Nghị định 342/2025/NĐ-CP",
                    title: "Quy định chi tiết thi hành một số điều của Luật Quảng cáo",
                    desc: "Siết chặt quản lý quảng cáo trên không gian mạng, cấm quảng cáo sai sự thật đối với nông sản, thực phẩm bảo vệ sức khỏe."
                },
                {
                    code: "Nghị định 349/2025/NĐ-CP",
                    title: "Chế độ dinh dưỡng và đãi ngộ đặc thù đối với vận động viên thể thao",
                    desc: "Động viên các tài năng trẻ tham gia phong trào thể dục thể thao quần chúng và thi đấu thành tích cao."
                },
                {
                    code: "Nghị định 350/2025/NĐ-CP",
                    title: "Chính sách khuyến khích và hỗ trợ phát triển các tác phẩm văn học",
                    desc: "Bảo tồn và phát huy giá trị văn học dân gian, làn điệu dân ca Thái, Mông đặc sắc của vùng núi Tây Bắc."
                }
            ]
        },
        part4: {
            title: "Phần IV: Chuyên đề đặc biệt - 18 Điểm mới đột phá của Dự thảo Văn kiện Đại hội XIV",
            highlights: [
                "Mô hình chính quyền địa phương 2 cấp (tinh gọn bộ máy, phân cấp phân quyền triệt để cho cấp cơ sở xã, phường).",
                "Phát triển kinh tế xanh, kinh tế tuần hoàn, quyết tâm đạt mục tiêu trung hòa các-bon (Net Zero) vào năm 2050.",
                "Khẳng định kinh tế tư nhân thực sự là một động lực quan trọng nhất của nền kinh tế quốc gia.",
                "Đột phá chiến lược về khoa học công nghệ, đổi mới sáng tạo và chuyển đổi số toàn diện; coi nguồn nhân lực trẻ là trung tâm."
            ]
        },
        part5: {
            title: "Phần V: Khung kịch bản điều hành sinh hoạt chi đoàn & Gợi ý thảo luận",
            agenda: `KHUNG TIẾN TRÌNH 60 PHÚT BUỔI SINH HOẠT CHI ĐOÀN THÁNG 2/2026:
1. Khai mạc & Tuyên truyền truyền thống 96 năm vẻ vang của Đảng (15 phút):
   - Chào cờ, hát Quốc ca, Đoàn ca.
   - Bí thư Chi đoàn quán triệt ý nghĩa Ngày thành lập Đảng 3/2.
2. Sinh hoạt chuyên đề '18 điểm mới Đại hội XIV của Đảng' (20 phút):
   - Thảo luận về mô hình chính quyền 2 cấp và cơ hội khởi nghiệp của thanh niên nông thôn.
   - Lắng nghe ý kiến đóng góp của đoàn viên vào công tác xây dựng Đảng.
3. Gặp mặt, động viên thanh niên ưu tú trúng tuyển nghĩa vụ quân sự (15 phút):
   - Chi đoàn tặng quà lưu niệm, dặn dò các tân binh vững bước lên đường nhập ngũ.
   - Giao lưu văn nghệ hát về người lính và quê hương đất nước.
4. Triển khai công tác chuẩn bị Tháng Thanh niên 2026 & Bế mạc (10 phút).`,
            discussionQuestions: [
                "Thanh niên chi đoàn bản có thể đóng góp ý kiến gì vào việc xây dựng Chi bộ bản và chính quyền xã ngày càng vững mạnh?",
                "Là thanh niên vùng cao, chúng ta cần chuẩn bị những kỹ năng gì để nắm bắt thời cơ khi chuyển đổi số và kinh tế xanh phát triển?"
            ],
            aiTip: "Prompt AI: 'Hãy viết cho tôi 01 bài phát biểu ngắn gọn (300 từ) đầy nhiệt huyết của Bí thư Chi đoàn bản để động viên các tân binh trúng tuyển nghĩa vụ quân sự năm 2026'."
        },
        documents: [
            { name: "Đề cương tuyên truyền Kỷ niệm 96 năm Ngày thành lập Đảng (3/2)", type: "PDF", size: "320 KB" },
            { name: "Tài liệu tóm lược 18 điểm mới Dự thảo Văn kiện Đại hội XIV", type: "PDF", size: "480 KB" },
            { name: "Kịch bản buổi gặp mặt, tặng quà tân binh lên đường nhập ngũ", type: "DOCX", size: "110 KB" }
        ],
        historicalSignificance: "Kỷ niệm 96 năm Ngày thành lập Đảng (03/02/1930 – 03/02/2026); 119 năm Ngày sinh Tổng Bí thư Trường Chinh (09/02); 78 năm Ngày mất Anh hùng Kim Đồng (15/02); 47 năm Chiến đấu bảo vệ biên giới phía Bắc (17/02); 71 năm Ngày Thầy thuốc Việt Nam (27/02).",
        keyFocus: [
            "Thực hành dân chủ theo gương Bác, tham gia xây dựng chỉnh đốn Đảng.",
            "Nắm vững 18 điểm mới, đột phá của Dự thảo Văn kiện Đại hội XIV của Đảng.",
            "Gặp mặt, động viên tân binh trúng tuyển nghĩa vụ quân sự và nghĩa vụ công an.",
            "Phổ biến chính sách mới: Luật Quảng cáo, quản lý vàng, ưu đãi thuế hộ kinh doanh."
        ],
        meetingAgenda: `KHUNG TIẾN TRÌNH 60 PHÚT BUỔI SINH HOẠT CHI ĐOÀN THÁNG 2/2026:
1. Khai mạc & Tuyên truyền 96 năm Ngày thành lập Đảng (15 phút).
2. Sinh hoạt chuyên đề '18 điểm mới Đại hội XIV của Đảng' & Thực hành dân chủ theo gương Bác (20 phút).
3. Gặp mặt, tặng quà động viên tân binh lên đường nhập ngũ năm 2026 (15 phút).
4. Chuẩn bị kế hoạch Tháng Thanh niên 2026 & Bế mạc (10 phút).`,
        discussionQuestions: [
            "Thanh niên chi đoàn bản có thể đóng góp ý kiến gì vào việc xây dựng Chi bộ bản và chính quyền xã ngày càng vững mạnh?",
            "Là thanh niên vùng cao, chúng ta cần chuẩn bị những kỹ năng gì để nắm bắt thời cơ khi chuyển đổi số và kinh tế xanh phát triển?"
        ],
        aiTip: "Prompt AI: 'Hãy viết cho tôi 01 bài phát biểu ngắn gọn (300 từ) đầy nhiệt huyết của Bí thư Chi đoàn bản để động viên các tân binh trúng tuyển nghĩa vụ quân sự năm 2026'."
    },
    {
        month: 3,
        isBlank: false,
        statusBadge: "Đã ban hành - Tài liệu chính thức Tỉnh đoàn Sơn La",
        statusClass: "status-official",
        title: "Tháng Thanh niên năm 2026 – Chào mừng kỷ niệm 95 năm Ngày thành lập Đoàn TNCS Hồ Chí Minh",
        tagline: "Thi đua lập công chào mừng 95 năm thành lập Đoàn (26/3/1931 - 26/3/2026), kết nạp lớp đoàn viên mới",
        officialRef: "Văn bản định hướng sinh hoạt chi đoàn định kỳ Tháng 03/2026 - Ban Thường vụ Tỉnh đoàn Sơn La",
        part1: {
            title: "Phần I: Học tập & làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh",
            topic: "Đoàn viên, thanh niên làm gì để học tập và làm theo tấm gương Bác Hồ? (05 nhiệm vụ rèn luyện đạo đức, vừa 'hồng' vừa 'chuyên')",
            content: "Thực hiện lời dạy của Bác đối với thanh niên: 'Đâu cần thanh niên có, việc gì khó có thanh niên'. Đoàn viên xã Mường Lầm rèn luyện 5 nhiệm vụ: Trung thành với lý tưởng cách mạng; Tích cực học tập nâng cao trình độ; Cần cù sáng tạo trong lao động; Gương mẫu chấp hành pháp luật; Đoàn kết thương yêu giúp đỡ đồng bào.",
            actionPoints: [
                "Đăng ký đảm nhận các công trình thanh niên chào mừng 95 năm Ngày thành lập Đoàn tại 15 bản.",
                "Rèn luyện phẩm chất người đoàn viên thời kỳ mới: Bản lĩnh, trí tuệ, trách nhiệm, văn minh.",
                "Bồi dưỡng, kết nạp lớp đoàn viên 26/3 đảm bảo chất lượng, trang trọng, ý nghĩa."
            ]
        },
        part2: {
            title: "Phần II: Theo dòng lịch sử & Ngày này năm xưa",
            events: [
                {
                    date: "01/03/1906 – 01/03/2026",
                    name: "Kỷ niệm 120 năm Ngày sinh Cố Thủ tướng Phạm Văn Đồng",
                    desc: "Nhà ngoại giao tài ba, người học trò xuất sắc, người bạn chiến đấu thân thiết của Chủ tịch Hồ Chí Minh."
                },
                {
                    date: "03/03/1959 – 03/03/2026",
                    name: "Kỷ niệm 67 năm Ngày truyền thống Bộ đội Biên phòng & 37 năm Ngày Biên phòng toàn dân",
                    desc: "Gắn kết tình quân dân nơi biên cương, thanh niên xung kích giữ gìn đường biên, cột mốc thiêng liêng của Tổ quốc."
                },
                {
                    date: "08/03/1910 – 08/03/2026",
                    name: "Kỷ niệm 116 năm Ngày Quốc tế Phụ nữ",
                    desc: "Tôn vinh và phát huy vai trò to lớn của nữ đoàn viên thanh niên trong học tập, lao động và xây dựng gia đình hạnh phúc."
                },
                {
                    date: "26/03/1931 – 26/03/2026",
                    name: "Kỷ niệm 95 năm Ngày thành lập Đoàn TNCS Hồ Chí Minh",
                    desc: "Mốc son lịch sử vẻ vang 95 năm rèn luyện, cống hiến và trưởng thành của thế hệ trẻ Việt Nam dưới ngọn cờ của Đảng quang vinh."
                },
                {
                    date: "27/03/1946 – 27/03/2026",
                    name: "Kỷ niệm 80 năm Ngày Thể thao Việt Nam",
                    desc: "Lời kêu gọi toàn dân tập thể dục của Bác Hồ: 'Giữ gìn dân chủ, xây dựng nước nhà, gây đời sống mới, việc gì cũng cần có sức khỏe'."
                }
            ]
        },
        part3: {
            title: "Phần III: Chính sách, pháp luật mới có hiệu lực từ Tháng 03/2026",
            policies: [
                {
                    code: "Nghị định 357/2025/NĐ-CP",
                    title: "Quản lý dữ liệu bất động sản bằng mã định danh điện tử",
                    desc: "Số hóa quản lý nhà đất, ngăn chặn tình trạng mua bán đất dự án ảo, bảo vệ quyền lợi người dân."
                },
                {
                    code: "Nghị định 03/2026/NĐ-CP",
                    title: "Bắt buộc công khai thu chi quỹ từ thiện xã hội trước ngày 31/3 hàng năm",
                    desc: "Tăng cường tính công khai, minh bạch trong các hoạt động từ thiện, an sinh xã hội vì cộng đồng."
                },
                {
                    code: "Nghị định 336/2025/NĐ-CP",
                    title: "Tăng mức xử phạt vi phạm hành chính lĩnh vực giao thông đường bộ tới 150 triệu đồng",
                    desc: "Xử lý nghiêm hành vi cơi nới thùng xe, chở quá tải trọng và phá hoại kết cấu hạ tầng giao thông."
                },
                {
                    code: "Nghị định 31/2026/NĐ-CP",
                    title: "Xử phạt vi phạm hành chính trong lĩnh vực lưu trữ tài liệu",
                    desc: "Bảo vệ an toàn tài liệu lưu trữ lịch sử, văn bản hồ sơ Đoàn vụ tại các cơ quan, đơn vị."
                },
                {
                    code: "Nghị định 58/2026/NĐ-CP",
                    title: "Quy định đăng ký cư trú và cấp giấy tờ cho người chưa thành niên",
                    desc: "Đơn giản hóa thủ tục hành chính, bảo vệ quyền được khai sinh và học tập của trẻ em vùng sâu."
                }
            ]
        },
        part4: {
            title: "Phần IV: Chuyên đề đặc biệt & Định hướng tuyên truyền của Tỉnh đoàn Sơn La",
            highlights: [
                "Tuyên truyền kết quả Đại hội XIV của Đảng gắn với công tác chuẩn bị bầu cử đại biểu Quốc hội khóa XVI và HĐND các cấp nhiệm kỳ 2026–2031.",
                "Cao điểm Tháng Thanh niên 2026: Tổ chức đồng loạt 'Ngày Chủ nhật xanh' đợt 1 (22/3/2026) chỉnh trang đường liên bản.",
                "Tổ chức Lễ kết nạp 'Lớp đoàn viên 95 năm Ngày thành lập Đoàn' tại các địa chỉ đỏ cách mạng trên địa bàn xã.",
                "Phát động Hội thi Sáng tạo AI, thiết kế Infographic và kỹ năng bán nông sản Mường Lầm trên các sàn thương mại điện tử."
            ]
        },
        part5: {
            title: "Phần V: Khung kịch bản điều hành sinh hoạt chi đoàn & Gợi ý thảo luận",
            agenda: `KHUNG TIẾN TRÌNH 60 PHÚT BUỔI SINH HOẠT CHI ĐOÀN THÁNG 3/2026:
1. Lễ kỷ niệm 95 năm Ngày thành lập Đoàn (20 phút):
   - Chào cờ, hát vang bài Quốc ca và Đoàn ca.
   - Bí thư Chi đoàn đọc diễn văn ôn lại truyền thống 95 năm vinh quang của Đoàn TNCS Hồ Chí Minh.
   - Chiếu phóng sự ngắn 'Tuổi trẻ Sơn La - 95 năm tiếp lửa truyền thống'.
2. Lễ Kết nạp Đoàn viên mới (Lớp đoàn viên 26/3) (15 phút):
   - Báo cáo quá trình rèn luyện của thanh niên ưu tú.
   - Trao Quyết định kết nạp, gắn Huy hiệu Đoàn và trao Sổ đoàn viên.
   - Đoàn viên mới đọc lời hứa danh dự.
3. Phổ biến chính sách mới & Phát động phong trào Tháng Thanh niên (15 phút):
   - Quán triệt quy định quản lý bất động sản định danh và quỹ từ thiện.
   - Phân công đội hình ra quân Ngày Chủ nhật xanh đợt 1 (22/3).
4. Thảo luận & Bế mạc (10 phút):
   - Đăng ký công trình thanh niên gắn biển chào mừng kỷ niệm 95 năm Ngày thành lập Đoàn.`,
            discussionQuestions: [
                "Thế hệ trẻ chúng ta cần làm gì để xứng đáng với truyền thống vẻ vang 95 năm của Đoàn TNCS Hồ Chí Minh?",
                "Chi đoàn bản có thể triển khai phần việc thanh niên cụ thể nào để vừa làm đẹp cảnh quan bản làng vừa giúp đỡ các hộ gia đình neo đơn?"
            ],
            aiTip: "Prompt AI: 'Hãy viết cho tôi 01 kịch bản điều hành Lễ kết nạp đoàn viên mới ngày 26/3 thật trang trọng, thiêng liêng, tạo ấn tượng sâu sắc cho thanh niên vùng cao'."
        },
        documents: [
            { name: "Đề cương tuyên truyền 95 năm Ngày thành lập Đoàn TNCS Hồ Chí Minh", type: "PDF", size: "520 KB" },
            { name: "Kế hoạch tổ chức Tháng Thanh niên năm 2026 của Đoàn xã", type: "DOCX", size: "210 KB" },
            { name: "Mẫu Quyết định kết nạp đoàn viên mới và nghị quyết chi đoàn", type: "DOCX", size: "95 KB" }
        ],
        historicalSignificance: "Kỷ niệm 120 năm Ngày sinh Cố Thủ tướng Phạm Văn Đồng (01/03); 67 năm Biên phòng (03/3); 116 năm Quốc tế Phụ nữ (08/3); 95 năm Ngày thành lập Đoàn TNCS Hồ Chí Minh (26/3); 80 năm Thể thao Việt Nam (27/3).",
        keyFocus: [
            "Đợt sinh hoạt chính trị kỷ niệm 95 năm Ngày thành lập Đoàn (26/3/1931 - 26/3/2026).",
            "5 nhiệm vụ rèn luyện đạo đức theo gương Bác, vừa 'hồng' vừa 'chuyên'.",
            "Tuyên truyền kết quả Đại hội XIV của Đảng gắn với bầu cử ĐBQH khóa XVI và HĐND các cấp.",
            "Ra quân cao điểm Tháng Thanh niên 2026 và Ngày Chủ nhật xanh đợt 1 (22/3)."
        ],
        meetingAgenda: `KHUNG TIẾN TRÌNH 60 PHÚT BUỔI SINH HOẠT CHI ĐOÀN THÁNG 3/2026:
1. Lễ kỷ niệm 95 năm Ngày thành lập Đoàn TNCS Hồ Chí Minh (20 phút).
2. Lễ Kết nạp đoàn viên mới Lớp đoàn viên 26/3 (15 phút).
3. Phổ biến chính sách mới hiệu lực từ 03/2026 & Ra quân Tháng Thanh niên (15 phút).
4. Đăng ký phần việc thanh niên & Bế mạc (10 phút).`,
        discussionQuestions: [
            "Thế hệ trẻ chúng ta cần làm gì để xứng đáng với truyền thống vẻ vang 95 năm của Đoàn TNCS Hồ Chí Minh?",
            "Chi đoàn bản có thể triển khai phần việc thanh niên cụ thể nào để vừa làm đẹp cảnh quan bản làng vừa giúp đỡ các hộ gia đình neo đơn?"
        ],
        aiTip: "Prompt AI: 'Hãy viết cho tôi 01 kịch bản điều hành Lễ kết nạp đoàn viên mới ngày 26/3 thật trang trọng, thiêng liêng, tạo ấn tượng sâu sắc cho thanh niên vùng cao'."
    },
    {
        month: 4,
        isBlank: false,
        statusBadge: "Đã ban hành - Tài liệu chính thức Tỉnh đoàn Sơn La",
        statusClass: "status-official",
        title: "Kỷ niệm 51 năm Giải phóng miền Nam, thống nhất đất nước (30/04/1975 – 30/04/2026)",
        tagline: "Khắc ghi công lao giải phóng non sông, tự hào Trường Sa ngàn đời thiêng liêng của Tổ quốc",
        officialRef: "Văn bản định hướng sinh hoạt chi đoàn định kỳ Tháng 04/2026 - Ban Thường vụ Tỉnh đoàn Sơn La",
        part1: {
            title: "Phần I: Học tập & làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh",
            topic: "Câu chuyện về Bác: 'Miền Nam ở trong trái tim tôi' & Nội dung cốt lõi tư tưởng Hồ Chí Minh về quyền độc lập tự do của dân tộc",
            content: "Bác luôn đau đáu với đồng bào miền Nam ruột thịt: 'Miền Nam là máu của máu Việt Nam, là thịt của thịt Việt Nam'. Tư tưởng của Người khẳng định chân lý ngời sáng: 'Không có gì quý hơn độc lập, tự do'. Mỗi đoàn viên thanh niên hôm nay phải có trách nhiệm giữ gìn nền độc lập và xây dựng quê hương giàu đẹp.",
            actionPoints: [
                "Giáo dục lòng yêu nước, niềm tự hào dân tộc và lòng biết ơn vô hạn đối với các thế hệ cha anh đã hy sinh xương máu vì độc lập non sông.",
                "Chăm lo đời sống vật chất, tinh thần cho các gia đình thương binh, liệt sĩ, người có công với cách mạng tại các bản làng.",
                "Nâng cao tinh thần cảnh giác cách mạng, bảo vệ chủ quyền biên giới, biển đảo thiêng liêng."
            ]
        },
        part2: {
            title: "Phần II: Theo dòng lịch sử & Ngày này năm xưa",
            events: [
                {
                    date: "Mồng 10/3 Âm lịch (26/04/2026)",
                    name: "Ngày Giỗ Tổ Hùng Vương",
                    desc: "Khắc ghi lời căn dặn thiêng liêng của Bác Hồ: 'Các Vua Hùng đã có công dựng nước, Bác cháu ta phải cùng nhau giữ lấy nước'."
                },
                {
                    date: "24/04/1906 – 24/04/2026",
                    name: "Kỷ niệm 120 năm Ngày sinh Tổng Bí thư Hà Huy Tập",
                    desc: "Nhà lãnh đạo kiên trung, bất khuất của Đảng ta, tấm gương trọn đời chiến đấu, hy sinh vì độc lập dân tộc và hạnh phúc nhân dân."
                },
                {
                    date: "29/04/1975 – 29/04/2026",
                    name: "Kỷ niệm 51 năm Ngày Giải phóng quần đảo Trường Sa",
                    desc: "Chiến công hiển hách của Hải quân nhân dân Việt Nam, khẳng định chủ quyền bất khả xâm phạm đối với biển đảo Tổ quốc."
                },
                {
                    date: "30/04/1975 – 30/04/2026",
                    name: "Kỷ niệm 51 năm Ngày Giải phóng miền Nam, thống nhất đất nước",
                    desc: "Đại thắng mùa Xuân 1975 lịch sử, non sông thu về một mối, mở ra kỷ nguyên độc lập, thống nhất và đi lên CNXH."
                }
            ]
        },
        part3: {
            title: "Phần III: Chính sách, pháp luật mới có hiệu lực từ Tháng 04/2026",
            policies: [
                {
                    code: "Thông tư 30/2025/TT-NHNN",
                    title: "Tài khoản thanh toán ngân hàng bắt buộc phải dùng tên thật khớp với dữ liệu CCCD gắn chip",
                    desc: "Xóa bỏ tình trạng thuê mượn tài khoản ngân hàng, ngăn chặn triệt để dòng tiền lừa đảo trực tuyến."
                },
                {
                    code: "Nghị định 61/2026/NĐ-CP",
                    title: "Người dân được gửi video, hình ảnh phản ánh vi phạm giao thông trực tiếp qua ứng dụng VNeID",
                    desc: "Phát huy vai trò giám sát của thanh niên và nhân dân trong việc giữ gìn trật tự an toàn giao thông."
                },
                {
                    code: "Thông tư 10/2026/TT-BGDĐT",
                    title: "Hiệu trưởng trực tiếp cấp bằng tốt nghiệp THPT và chính thức áp dụng văn bằng số",
                    desc: "Tạo thuận lợi cho học sinh, đoàn viên trường học tra cứu văn bằng trực tuyến, chống làm giả văn bằng chứng chỉ."
                },
                {
                    code: "Nghị định 69/2026/NĐ-CP",
                    title: "Tăng mức xử phạt tới 40 triệu đồng đối với vi phạm trang bị phương tiện PCCC",
                    desc: "Nâng cao trách nhiệm phòng cháy chữa cháy tại các cơ sở sản xuất, kho bãi và hộ gia đình kinh doanh."
                },
                {
                    code: "Thông tư 18/2026/TT-BTC",
                    title: "Hộ kinh doanh cá thể phải thông báo tài khoản ngân hàng dùng cho kinh doanh cho cơ quan thuế",
                    desc: "Chuẩn hóa công tác quản lý thuế điện tử, tạo môi trường kinh doanh bình đẳng, minh bạch."
                }
            ]
        },
        part4: {
            title: "Phần IV: Chuyên đề đặc biệt & Định hướng tuyên truyền của Tỉnh đoàn Sơn La",
            highlights: [
                "Hướng dẫn đoàn viên gửi thông điệp và sáng kiến hành động tới Đại hội Đoàn các cấp thông qua Chatbot AI của Trung ương Đoàn.",
                "Hưởng ứng Cuộc thi ảnh nghệ thuật 'Tự hào một dải biên cương' lần thứ IV do Ban Tuyên giáo Trung ương và Tỉnh đoàn phát động.",
                "Triển khai sâu rộng Cuộc thi Sáng tạo thanh thiếu niên nhi đồng toàn quốc lần thứ 22 đến 100% học sinh các trường trên địa bàn xã.",
                "Chăm lo đối tượng thanh niên khuyết tật, yếu thế trên địa bàn xã nhân Ngày Người khuyết tật Việt Nam (18/4)."
            ]
        },
        part5: {
            title: "Phần V: Khung kịch bản điều hành sinh hoạt chi đoàn & Gợi ý thảo luận",
            agenda: `KHUNG TIẾN TRÌNH 60 PHÚT BUỔI SINH HOẠT CHI ĐOÀN THÁNG 4/2026:
1. Mở đầu & Kể chuyện về Bác 'Miền Nam ở trong trái tim tôi' (15 phút).
2. Tuyên truyền Kỷ niệm 51 năm Đại thắng mùa Xuân 30/4 & Giải phóng Trường Sa (15 phút).
3. Phổ biến chính sách mới hiệu lực từ 04/2026: Tài khoản tên thật CCCD, văn bằng số, phản ánh qua VNeID (15 phút).
4. Thảo luận tương tác, hướng dẫn gửi sáng kiến qua Chatbot Trung ương Đoàn & Bế mạc (15 phút).`,
            discussionQuestions: [
                "Thế hệ trẻ sinh ra trong hòa bình cần thể hiện lòng biết ơn các anh hùng liệt sĩ bằng những hành động thực tế nào?",
                "Mỗi đoàn viên có thể làm gì để chung tay lan tỏa hình ảnh đẹp về biên cương, biển đảo quê hương trên mạng xã hội?"
            ],
            aiTip: "Prompt AI: 'Hãy viết đoạn văn 250 từ thể hiện niềm tự hào của thanh niên các dân tộc Sơn La hướng về ngày hội thống nhất non sông 30/4 và bảo vệ chủ quyền biển đảo Trường Sa'."
        },
        documents: [
            { name: "Tài liệu tuyên truyền Kỷ niệm 51 năm Giải phóng miền Nam 30/4", type: "PDF", size: "390 KB" },
            { name: "Đề cương tuyên truyền 51 năm Ngày Giải phóng quần đảo Trường Sa", type: "PDF", size: "310 KB" },
            { name: "Thể lệ Cuộc thi Sáng tạo thanh thiếu niên nhi đồng toàn quốc lần thứ 22", type: "DOCX", size: "155 KB" }
        ],
        historicalSignificance: "Ngày Giỗ Tổ Hùng Vương (10/3 Âm lịch); 120 năm Ngày sinh Tổng Bí thư Hà Huy Tập (24/04); 51 năm Giải phóng Trường Sa (29/04); 51 năm Giải phóng miền Nam, thống nhất đất nước (30/04/1975 – 30/04/2026).",
        keyFocus: [
            "Học tập câu chuyện 'Miền Nam ở trong trái tim tôi' và tư tưởng quyền độc lập tự do.",
            "Tuyên truyền Kỷ niệm 51 năm Giải phóng miền Nam và Giải phóng quần đảo Trường Sa.",
            "Chính sách mới: Tài khoản ngân hàng tên thật trên CCCD, phản ánh giao thông qua VNeID, văn bằng số.",
            "Gửi thông điệp qua Chatbot Đoàn và tham gia Cuộc thi Sáng tạo TTN-NĐ toàn quốc lần thứ 22."
        ],
        meetingAgenda: `KHUNG TIẾN TRÌNH 60 PHÚT BUỔI SINH HOẠT CHI ĐOÀN THÁNG 4/2026:
1. Mở đầu & Kể chuyện về Bác 'Miền Nam ở trong trái tim tôi' (15 phút).
2. Tuyên truyền Kỷ niệm 51 năm Đại thắng 30/4 và Giải phóng Trường Sa (15 phút).
3. Phổ biến chính sách mới hiệu lực từ 04/2026 (15 phút).
4. Thảo luận tương tác & Hướng dẫn thi đua (15 phút).`,
        discussionQuestions: [
            "Thế hệ trẻ sinh ra trong hòa bình cần thể hiện lòng biết ơn các anh hùng liệt sĩ bằng những hành động thực tế nào?",
            "Mỗi đoàn viên có thể làm gì để chung tay lan tỏa hình ảnh đẹp về biên cương, biển đảo quê hương trên mạng xã hội?"
        ],
        aiTip: "Prompt AI: 'Hãy viết đoạn văn 250 từ thể hiện niềm tự hào của thanh niên các dân tộc Sơn La hướng về ngày hội thống nhất non sông 30/4 và bảo vệ chủ quyền biển đảo Trường Sa'."
    },
    {
        month: 5,
        isBlank: false,
        statusBadge: "Đã ban hành - Tài liệu chính thức Tỉnh đoàn Sơn La",
        statusClass: "status-official",
        title: "Kỷ niệm 136 năm Ngày sinh Chủ tịch Hồ Chí Minh (19/5/1890 – 19/5/2026)",
        tagline: "Nhớ ơn Bác Hồ kính yêu, nêu cao ý chí tự lực tự cường, quyết thắng như Điện Biên Phủ năm xưa",
        officialRef: "Văn bản định hướng sinh hoạt chi đoàn định kỳ Tháng 05/2026 - Ban Thường vụ Tỉnh đoàn Sơn La",
        part1: {
            title: "Phần I: Học tập & làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh",
            topic: "Câu chuyện 'Chiếc đồng hồ' & Chuyên đề Tư tưởng Hồ Chí Minh về ý chí tự lực, tự cường",
            content: "Qua câu chuyện 'Chiếc đồng hồ', Bác dạy: Trong một tập thể, mỗi người là một bộ phận, dù ở cương vị nào cũng đều quan trọng, phải hoàn thành tốt phần việc của mình. Tinh thần tự lực, tự cường nhắc nhở thanh niên Mường Lầm không trông chờ ỷ lại, chủ động vượt khó vươn lên làm giàu chính đáng trên chính mảnh đất quê hương.",
            actionPoints: [
                "Tự giác, trách nhiệm trong công việc được giao; tôn trọng và phối hợp chặt chẽ với các đoàn viên khác trong chi đoàn.",
                "Phát huy nội lực, chủ động học nghề, áp dụng tiến bộ khoa học kỹ thuật vào sản xuất nông nghiệp, chăn nuôi.",
                "Tích cực tham gia các phong trào 'Tuổi trẻ sáng tạo', hiến kế phát triển kinh tế bản làng."
            ]
        },
        part2: {
            title: "Phần II: Theo dòng lịch sử & Ngày này năm xưa",
            events: [
                {
                    date: "01/05/1886 – 01/05/2026",
                    name: "Kỷ niệm 140 năm Ngày Quốc tế Lao động",
                    desc: "Tôn vinh giá trị cao quý của lao động, biểu dương tinh thần đoàn kết quốc tế của giai cấp công nhân và nhân dân lao động."
                },
                {
                    date: "07/05/1954 – 07/05/2026",
                    name: "Kỷ niệm 72 năm Ngày Chiến thắng Điện Biên Phủ",
                    desc: "Chiến thắng 'Lừng lẫy năm châu, chấn động địa cầu', gắn liền với sự chi viện to lớn của quân và dân Tây Bắc - Sơn La."
                },
                {
                    date: "15/05/1941 – 15/05/2026",
                    name: "Kỷ niệm 85 năm Ngày thành lập Đội TNTP Hồ Chí Minh",
                    desc: "Tự hào truyền thống vẻ vang của tổ chức Đội, phụ trách chăm sóc, giáo dục thiếu niên nhi đồng tại 15 bản và các trường học."
                },
                {
                    date: "19/05/1890 – 19/05/2026",
                    name: "Kỷ niệm 136 năm Ngày sinh Chủ tịch Hồ Chí Minh vĩ đại",
                    desc: "Vị lãnh tụ thiên tài, Người Cha già kính yêu của các lực lượng vũ trang và thế hệ trẻ Việt Nam, Anh hùng giải phóng dân tộc, Danh nhân văn hóa kiệt xuất."
                }
            ]
        },
        part3: {
            title: "Phần III: Chính sách, pháp luật mới có hiệu lực từ Tháng 05/2026",
            policies: [
                {
                    code: "Nghị định 75/2026/NĐ-CP",
                    title: "Cơ chế tự chủ kinh phí quản lý hành chính trong các cơ quan nhà nước",
                    desc: "Nâng cao hiệu quả sử dụng ngân sách, gắn với cải cách hành chính và chuyển đổi số."
                },
                {
                    code: "Nghị định 85/2026/NĐ-CP",
                    title: "Quy định chi tiết về bảo hiểm hưu trí bổ sung tự nguyện",
                    desc: "Mở rộng cơ hội tích lũy an sinh xã hội cho người lao động tự do và thanh niên nông thôn khi về già."
                },
                {
                    code: "Nghị định 133/2026/NĐ-CP",
                    title: "Xử phạt nghiêm hành vi thu tiền điện người thuê nhà trọ sai quy định",
                    desc: "Bảo vệ quyền lợi chính đáng cho hàng trăm thanh niên Mường Lầm đang làm việc và ở trọ tại các KCN Bắc Ninh, Bắc Giang."
                },
                {
                    code: "Nghị định 110/2026/NĐ-CP",
                    title: "Thực hiện trách nhiệm mở rộng của nhà sản xuất (EPR) về tái chế bao bì",
                    desc: "Thúc đẩy các doanh nghiệp thu gom, xử lý vỏ chai, bao bì thuốc BVTV, bảo vệ môi trường nông thôn."
                },
                {
                    code: "Nghị định 76/2026/NĐ-CP",
                    title: "Xử phạt hành vi cản trở thành viên gia đình tạo thu nhập vì định kiến giới tính",
                    desc: "Bảo đảm bình đẳng giới thực chất, bảo vệ quyền lao động và khởi nghiệp của nữ thanh niên vùng cao."
                },
                {
                    code: "Nghị định 90/2026/NĐ-CP",
                    title: "Phạt tới 5 triệu đồng người có hành vi sử dụng thuốc lá điện tử từ ngày 15/5/2026",
                    desc: "Quy định quyết liệt bảo vệ sức khỏe giống nòi, ngăn chặn thuốc lá mới xâm nhập vào trường học và giới trẻ."
                },
                {
                    code: "Nghị định 88/2026/NĐ-CP",
                    title: "Tích hợp hồ sơ học tập suốt đời của công dân trên ứng dụng VNeID",
                    desc: "Số hóa quá trình học tập, đào tạo nghề nghiệp và chứng chỉ kỹ năng số của thanh niên trên nền tảng số quốc gia."
                }
            ]
        },
        part4: {
            title: "Phần IV: Chuyên đề đặc biệt & Định hướng tuyên truyền của Tỉnh đoàn Sơn La",
            highlights: [
                "Tổ chức đợt sinh hoạt chính trị sâu rộng 'Nhớ về Bác - Lòng ta trong sáng hơn' nhân Kỷ niệm 136 năm Ngày sinh của Người (19/5).",
                "Tổ chức Lễ kết nạp đoàn viên mới (Lớp đoàn viên 19/5) tại Khu di tích lịch sử cách mạng xã Mường Lầm.",
                "Ra quân đồng loạt 'Ngày Chủ nhật xanh' đợt 2 (24/5/2026): Thu gom rác thải nhựa tại khu vực chợ và dọc các tuyến suối tự quản.",
                "Tập huấn kỹ năng phòng chống tai nạn thương tích, đuối nước cho trẻ em bước vào kỳ nghỉ hè 2026."
            ]
        },
        part5: {
            title: "Phần V: Khung kịch bản điều hành sinh hoạt chi đoàn & Gợi ý thảo luận",
            agenda: `KHUNG TIẾN TRÌNH 60 PHÚT BUỔI SINH HOẠT CHI ĐOÀN THÁNG 5/2026:
1. Sinh hoạt chuyên đề 136 năm Ngày sinh Bác Hồ & Kể chuyện 'Chiếc đồng hồ' (20 phút).
2. Ôn lại truyền thống 72 năm Chiến thắng Điện Biên Phủ (07/5) và 85 năm Đội TNTP (15 phút).
3. Phổ biến chính sách mới: Cấm thuốc lá điện tử, bảo vệ người thuê trọ, tích hợp VNeID (15 phút).
4. Phân công đội hình Ngày Chủ nhật xanh đợt 2 (24/5) & Bế mạc (10 phút).`,
            discussionQuestions: [
                "Bài học từ câu chuyện 'Chiếc đồng hồ' của Bác có ý nghĩa như thế nào đối với tinh thần đoàn kết nội bộ trong chi đoàn bản ta?",
                "Chi đoàn bản cần làm gì để kiên quyết ngăn chặn tình trạng hút thuốc lá điện tử trong lứa tuổi học sinh, thiếu niên?"
            ],
            aiTip: "Prompt AI: 'Kể cho tôi một câu chuyện ngắn có ý nghĩa giáo dục sâu sắc về Bác Hồ với đồng bào và thanh thiếu nhi các dân tộc Tây Bắc để làm tư liệu sinh hoạt chi đoàn Tháng 5'."
        },
        documents: [
            { name: "Đề cương tuyên truyền Kỷ niệm 136 năm Ngày sinh Chủ tịch Hồ Chí Minh", type: "PDF", size: "450 KB" },
            { name: "Tài liệu tuyên truyền Kỷ niệm 72 năm Chiến thắng Điện Biên Phủ", type: "PDF", size: "380 KB" },
            { name: "Cẩm nang phòng chống tai nạn đuối nước và kỹ năng sơ cấp cứu hè 2026", type: "DOCX", size: "190 KB" }
        ],
        historicalSignificance: "Kỷ niệm 140 năm Quốc tế Lao động (01/5); 72 năm Chiến thắng Điện Biên Phủ (07/5); 85 năm Đội TNTP Hồ Chí Minh (15/5); 136 năm Ngày sinh Chủ tịch Hồ Chí Minh (19/5/1890 – 19/5/2026).",
        keyFocus: [
            "Học tập câu chuyện 'Chiếc đồng hồ' và ý chí tự lực, tự cường theo gương Bác.",
            "Tuyên truyền Kỷ niệm 136 năm Ngày sinh Bác Hồ và 72 năm Chiến thắng Điện Biên Phủ.",
            "Chính sách mới: Cấm thuốc lá điện tử (phạt tới 5 triệu), bảo vệ người ở trọ, tích hợp học tập VNeID.",
            "Đợt ra quân Ngày Chủ nhật xanh đợt 2 (24/5) và phòng chống đuối nước hè 2026."
        ],
        meetingAgenda: `KHUNG TIẾN TRÌNH 60 PHÚT BUỔI SINH HOẠT CHI ĐOÀN THÁNG 5/2026...`,
        discussionQuestions: [
            "Bài học từ câu chuyện 'Chiếc đồng hồ' của Bác có ý nghĩa như thế nào đối với tinh thần đoàn kết nội bộ trong chi đoàn bản ta?",
            "Chi đoàn bản cần làm gì để kiên quyết ngăn chặn tình trạng hút thuốc lá điện tử trong lứa tuổi học sinh, thiếu niên?"
        ],
        aiTip: "Prompt AI: 'Kể cho tôi một câu chuyện ngắn có ý nghĩa giáo dục sâu sắc về Bác Hồ với đồng bào và thanh thiếu nhi các dân tộc Tây Bắc để làm tư liệu sinh hoạt chi đoàn Tháng 5'."
    },
    {
        month: 6,
        isBlank: false,
        statusBadge: "Đã ban hành - Tài liệu chính thức Tỉnh đoàn Sơn La",
        statusClass: "status-official",
        title: "Kỷ niệm 78 năm Ngày Chủ tịch Hồ Chí Minh ra Lời kêu gọi thi đua ái quốc (11/6/1948 – 11/6/2026)",
        tagline: "Thi đua là yêu nước, yêu nước thì phải thi đua – Tuổi trẻ xung kích trong Chiến dịch Thanh niên tình nguyện Hè 2026",
        officialRef: "Văn bản định hướng sinh hoạt chi đoàn định kỳ Tháng 06/2026 - Ban Thường vụ Tỉnh đoàn Sơn La",
        part1: {
            title: "Phần I: Học tập & làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh",
            topic: "Học tập và làm theo tư tưởng Hồ Chí Minh về đạo đức cách mạng 'Cần, Kiệm, Liêm, Chính'",
            content: "Bác dạy: 'Cần, Kiệm, Liêm, Chính là bốn đức tính của con người, thiếu một đức thì không thành người'. Cán bộ, đoàn viên thanh niên phải cần cù chịu khó trong lao động; tiết kiệm của công, thời gian và tiền bạc; liêm khiết trong sáng; chính trực ngay thẳng, dũng cảm đấu tranh với thói hư tật xấu.",
            actionPoints: [
                "Đoàn viên gương mẫu thực hành tiết kiệm trong việc cưới, việc tang, không phô trương lãng phí.",
                "Rèn luyện tác phong làm việc khoa học, đúng giờ, nói đi đôi với làm.",
                "Giữ gìn phẩm chất trong sáng, bảo vệ tài sản công cộng và các công trình thanh niên tại bản làng."
            ]
        },
        part2: {
            title: "Phần II: Theo dòng lịch sử & Ngày này năm xưa",
            events: [
                {
                    date: "01/06/1942 – 01/06/2026",
                    name: "Ngày Quốc tế Thiếu nhi",
                    desc: "Toàn xã hội và tổ chức Đoàn chung tay chăm lo, bảo vệ và dành những điều tốt đẹp nhất cho trẻ em vùng cao."
                },
                {
                    date: "05/06/1911 – 05/06/2026",
                    name: "Kỷ niệm 115 năm Ngày Bác Hồ ra đi tìm đường cứu nước",
                    desc: "Từ Bến Nhà Rồng, người thanh niên yêu nước Nguyễn Tất Thành mang khát vọng cháy bỏng tìm lại độc lập tự do cho Tổ quốc."
                },
                {
                    date: "11/06/1948 – 11/06/2026",
                    name: "Kỷ niệm 78 năm Ngày Chủ tịch Hồ Chí Minh ra Lời kêu gọi thi đua ái quốc",
                    desc: "Lời hiệu triệu thiêng liêng động viên toàn Đảng, toàn quân, toàn dân ta vượt qua muôn vàn gian khó, làm nên những thắng lợi vĩ đại."
                },
                {
                    date: "21/06/1925 – 21/06/2026",
                    name: "Kỷ niệm 101 năm Ngày Báo chí Cách mạng Việt Nam",
                    desc: "Do Bác Hồ sáng lập tờ Báo Thanh Niên, ngọn cờ dẫn đường cho công tác tuyên truyền cách mạng của tuổi trẻ."
                },
                {
                    date: "26/06/2026",
                    name: "Tháng hành động và Ngày toàn dân phòng, chống ma túy",
                    desc: "Tuổi trẻ xung kích quyết tâm giữ vững địa bàn không ma túy, bài trừ tệ nạn xã hội khỏi bản làng."
                },
                {
                    date: "28/06/2001 – 28/06/2026",
                    name: "Ngày Gia đình Việt Nam",
                    desc: "Tôn vinh giá trị văn hóa gia đình truyền thống tốt đẹp, xây dựng gia đình trẻ ấm no, tiến bộ, hạnh phúc."
                }
            ]
        },
        part3: {
            title: "Phần III: Chính sách, pháp luật mới có hiệu lực từ Tháng 06/2026",
            policies: [
                {
                    code: "Nghị định 144/2026/NĐ-CP",
                    title: "Bảo hiểm nông nghiệp chính thức không thuộc đối tượng chịu thuế GTGT",
                    desc: "Chính sách ưu đãi đặc biệt hỗ trợ nông dân, thanh niên an tâm đầu tư trồng nhãn, xoài và chăn nuôi đại gia súc."
                },
                {
                    code: "Nghị định 146/2026/NĐ-CP",
                    title: "Tăng mức phạt vi phạm hành chính tới 80 triệu đồng đối với hành vi lấn chiếm rừng",
                    desc: "Siết chặt quản lý rừng đầu nguồn, bảo vệ tài nguyên rừng và nguồn nước sinh hoạt cho nhân dân."
                },
                {
                    code: "Thông tư 50/2025/TT-BCT",
                    title: "Quy chuẩn kỹ thuật áp dụng bán đại trà xăng sinh học E10 trên toàn quốc từ 01/6/2026",
                    desc: "Giảm phát thải khí nhà kính, khuyến khích sử dụng năng lượng sinh học thân thiện với môi trường."
                },
                {
                    code: "Thông tư 37/2026/TT-BCA",
                    title: "Chính thức cho phép nhận chứng nhận đăng ký xe điện tử trên VNeID và VNeTraffic",
                    desc: "Tạo thuận lợi cho người dân khi tham gia giao thông không cần mang theo giấy tờ giấy tờ bản cứng."
                },
                {
                    code: "Thông tư 40/2026/TT-BGDĐT",
                    title: "Quy định mới về đánh giá kết quả rèn luyện của sinh viên",
                    desc: "Tăng cường đánh giá các hoạt động tình nguyện vì cộng đồng và kỹ năng số của người học."
                }
            ]
        },
        part4: {
            title: "Phần IV: Chuyên đề đặc biệt & Định hướng tuyên truyền của Tỉnh đoàn Sơn La",
            highlights: [
                "Lễ ra quân Chiến dịch Thanh niên tình nguyện Hè năm 2026: Thành lập các đội hình 'Tiếp sức mùa thi', 'Mùa hè xanh' và 'Hành quân xanh'.",
                "Khảo sát và cắm 15 biển cảnh báo nguy cơ đuối nước có sơn phản quang tại các khúc suối sâu, mó nước thuộc 15 bản làng.",
                "Tuyên truyền Tháng hành động phòng chống ma túy: Ký cam kết 100% chi đoàn bản không có đoàn viên nghiện ma túy.",
                "Hỗ trợ tiếp nhận sinh hoạt hè cho học sinh, đội viên về nghỉ hè tại các thôn bản an toàn, bổ ích."
            ]
        },
        part5: {
            title: "Phần V: Khung kịch bản điều hành sinh hoạt chi đoàn & Gợi ý thảo luận",
            agenda: `KHUNG TIẾN TRÌNH 60 PHÚT BUỔI SINH HOẠT CHI ĐOÀN THÁNG 6/2026:
1. Tuyên truyền tư tưởng thi đua ái quốc và đạo đức cách mạng 'Cần, Kiệm, Liêm, Chính' (15 phút).
2. Tuyên truyền phòng chống ma túy nhân ngày 26/6 và Kỷ niệm 115 năm Ngày Bác ra đi tìm đường cứu nước (15 phút).
3. Phổ biến chính sách: Đăng ký xe trên VNeID, ưu đãi bảo hiểm nông nghiệp, bảo vệ rừng (15 phút).
4. Phân công đội tình nguyện cắm biển cảnh báo đuối nước & Quản lý học sinh hè tại bản (15 phút).`,
            discussionQuestions: [
                "Đoàn viên thanh niên bản ta cần làm gì để bảo vệ rừng và giữ gìn nguồn mó nước ngọt cho bản làng?",
                "Chi đoàn có sáng kiến gì để tổ chức các hoạt động sinh hoạt hè, dạy bơi an toàn cho các em thiếu nhi trong bản?"
            ],
            aiTip: "Prompt AI: 'Viết cho tôi một thông điệp tuyên truyền ngắn (150 từ) cảnh báo phụ huynh và các em học sinh vùng núi tuyệt đối không đi tắm suối sâu một mình trong mùa mưa lũ'."
        },
        documents: [
            { name: "Đề cương tuyên truyền 78 năm Ngày Chủ tịch Hồ Chí Minh ra Lời kêu gọi thi đua ái quốc", type: "PDF", size: "340 KB" },
            { name: "Kế hoạch Chiến dịch Thanh niên tình nguyện Hè 2026 của Đoàn xã", type: "DOCX", size: "230 KB" },
            { name: "Bản cam kết Chi đoàn bản không có tệ nạn ma túy và chấp hành ATGT", type: "DOCX", size: "85 KB" }
        ],
        historicalSignificance: "Ngày Quốc tế Thiếu nhi (01/6); 115 năm Ngày Bác Hồ tìm đường cứu nước (05/6/1911); 78 năm Lời kêu gọi thi đua ái quốc (11/6/1948); 101 năm Báo chí Cách mạng VN (21/6); Ngày phòng chống ma túy (26/6); Ngày Gia đình VN (28/6).",
        keyFocus: [
            "Học tập tư tưởng đạo đức 'Cần, Kiệm, Liêm, Chính' theo gương Bác.",
            "Phát động Chiến dịch Thanh niên tình nguyện Hè 2026 và cắm 15 biển cảnh báo đuối nước.",
            "Tuyên truyền phòng chống ma túy nhân ngày 26/6.",
            "Chính sách mới: Bán xăng E10 toàn quốc, đăng ký xe trên VNeID, bảo vệ rừng."
        ],
        meetingAgenda: `KHUNG TIẾN TRÌNH 60 PHÚT BUỔI SINH HOẠT CHI ĐOÀN THÁNG 6/2026...`,
        discussionQuestions: [
            "Đoàn viên thanh niên bản ta cần làm gì để bảo vệ rừng và giữ gìn nguồn mó nước ngọt cho bản làng?",
            "Chi đoàn có sáng kiến gì để tổ chức các hoạt động sinh hoạt hè, dạy bơi an toàn cho các em thiếu nhi trong bản?"
        ],
        aiTip: "Prompt AI: 'Viết cho tôi một thông điệp tuyên truyền ngắn (150 từ) cảnh báo phụ huynh và các em học sinh vùng núi tuyệt đối không đi tắm suối sâu một mình trong mùa mưa lũ'."
    },
    {
        month: 7,
        isBlank: false,
        statusBadge: "Đã ban hành - Tài liệu chính thức Tỉnh đoàn Sơn La",
        statusClass: "status-official",
        title: "Tuổi trẻ các dân tộc tỉnh Sơn La thắp lửa tri ân – Kỷ niệm 79 năm Ngày Thương binh - Liệt sỹ",
        tagline: "Đền ơn đáp nghĩa, uống nước nhớ nguồn, rèn luyện giá trị hình mẫu thanh niên 'Tâm trong - Trí sáng - Hoài bão lớn'",
        officialRef: "Văn bản định hướng sinh hoạt chi đoàn định kỳ Tháng 07/2026 - Ban Thường vụ Tỉnh đoàn Sơn La",
        part1: {
            title: "Phần I: Học tập & làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh",
            topic: "Thanh niên Việt Nam học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh gắn với tu dưỡng đạo đức suốt đời",
            content: "Bác dạy: 'Đạo đức cách mạng không phải trên trời sa xuống. Nó do đấu tranh, rèn luyện bền bỉ hàng ngày mà phát triển và củng cố. Cũng như ngọc càng mài càng sáng, vàng càng luyện càng trong'. Thanh niên Mường Lầm kiên trì phấn đấu theo tiêu chí 'Tâm trong - Trí sáng - Hoài bão lớn' và các phong trào 'Học sinh 3 tốt', 'Ba trách nhiệm'.",
            actionPoints: [
                "Nuôi dưỡng tâm trong: Sống nhân ái, trung thực, có nghĩa có tình với đồng chí, đồng bào.",
                "Rèn luyện trí sáng: Ham học hỏi, tích lũy kiến thức khoa học công nghệ, vươn lên làm chủ kỹ thuật số.",
                "Xây hoài bão lớn: Khát vọng thoát nghèo, làm giàu cho bản thân, gia đình và xây dựng quê hương Mường Lầm giàu đẹp."
            ]
        },
        part2: {
            title: "Phần II: Theo dòng lịch sử & Ngày này năm xưa",
            events: [
                {
                    date: "02/07/1976 – 02/07/2026",
                    name: "Kỷ niệm 50 năm Quốc hội khóa VI quyết định đổi tên nước thành CHXHCN Việt Nam & đổi tên TP. Hồ Chí Minh",
                    desc: "Khẳng định sự toàn vẹn non sông và vị thế quốc tế vẻ vang của đất nước Việt Nam thống nhất."
                },
                {
                    date: "15/07/1950 – 15/07/2026",
                    name: "Kỷ niệm 76 năm Ngày truyền thống lực lượng Thanh niên xung phong Việt Nam",
                    desc: "Tượng đài bất tử của chủ nghĩa anh hùng cách mạng, tinh thần 'Không có việc gì khó, chỉ sợ lòng không bền'."
                },
                {
                    date: "20/07/1954 – 20/07/2026",
                    name: "Kỷ niệm 72 năm Ngày ký Hiệp định Giơ-ne-vơ về đình chỉ chiến sự ở Việt Nam",
                    desc: "Thắng lợi to lớn của nền ngoại giao cách mạng Việt Nam sau chín năm trường kỳ kháng chiến chống thực dân Pháp."
                },
                {
                    date: "27/07/1947 – 27/07/2026",
                    name: "Kỷ niệm 79 năm Ngày Thương binh - Liệt sỹ",
                    desc: "Ngày thiêng liêng toàn dân tộc tưởng nhớ, tri ân hàng triệu người con ưu tú đã ngã xuống vì độc lập, tự do của Tổ quốc."
                }
            ]
        },
        part3: {
            title: "Phần III: Chính sách, pháp luật mới có hiệu lực từ Tháng 07/2026",
            policies: [
                {
                    code: "Luật Quản lý thuế 2025 & Luật Thuế TNCN 2025",
                    title: "Chính thức có hiệu lực thi hành từ ngày 01/7/2026",
                    desc: "Nâng mức giảm trừ gia cảnh cho người nộp thuế, đơn giản hóa kê khai thuế điện tử cá nhân."
                },
                {
                    code: "Nghị định 162/2026/NĐ-CP",
                    title: "Điều chỉnh tăng lương hưu, trợ cấp BHXH và trợ cấp hằng tháng thêm 8%",
                    desc: "Cải thiện đời sống cho các đối tượng nghỉ hưu, cựu cán bộ và gia đình người có công."
                },
                {
                    code: "Nghị định 161/2026/NĐ-CP",
                    title: "Chính thức điều chỉnh mức lương cơ sở lên 2,53 triệu đồng/tháng từ 01/7/2026",
                    desc: "Tăng thu nhập cho cán bộ công chức, lực lượng vũ trang và các chính sách an sinh gắn với lương cơ sở."
                },
                {
                    code: "Thông tư 12/2026/TT-BKHCN",
                    title: "Quy định điều kiện chặt chẽ khi sử dụng các từ 'nhất', 'số một' trong quảng cáo thương mại",
                    desc: "Bảo vệ quyền lợi người tiêu dùng, chống các hành vi gian lận thương mại và quảng cáo thổi phồng."
                },
                {
                    code: "Nghị định 174/2026/NĐ-CP (Luật An ninh mạng)",
                    title: "Xử phạt tới 70 triệu đồng hành vi chia sẻ tin giả mạo, dùng AI giả mạo hình ảnh, giọng nói lừa đảo",
                    desc: "Chế tài nghiêm khắc bảo vệ danh dự, nhân phẩm công dân và an ninh trật tự trên không gian mạng."
                },
                {
                    code: "Luật Dân số 2025",
                    title: "Quy định lao động nữ sinh con thứ hai được nghỉ chế độ thai sản trọn vẹn 7 tháng",
                    desc: "Chính sách nhân văn khuyến khích mức sinh thay thế bền vững và chăm sóc sức khỏe bà mẹ trẻ em."
                }
            ]
        },
        part4: {
            title: "Phần IV: Chuyên đề đặc biệt & Định hướng tuyên truyền của Tỉnh đoàn Sơn La",
            highlights: [
                "Tổ chức Tuần lễ 'Đền ơn đáp nghĩa - Uống nước nhớ nguồn': Thăm hỏi, chăm sóc các Mẹ Việt Nam anh hùng, gia đình liệt sĩ tại 15 bản.",
                "Tổ chức Lễ thắp nến tri ân đồng loạt lúc 19h30 ngày 26/7/2026 tại Đài tưởng niệm liệt sĩ xã Mường Lầm.",
                "Ra quân đồng loạt 'Ngày Chủ nhật xanh' đợt 3 (26/7/2026): Vệ sinh, chỉnh trang các nghĩa trang, đài tưởng niệm và khuôn viên nhà văn hóa bản.",
                "Cảnh báo thủ đoạn dùng công nghệ AI Deepfake giả mạo giọng nói người thân gọi điện vay tiền lừa đảo."
            ]
        },
        part5: {
            title: "Phần V: Khung kịch bản điều hành sinh hoạt chi đoàn & Gợi ý thảo luận",
            agenda: `KHUNG TIẾN TRÌNH 60 PHÚT BUỔI SINH HOẠT CHI ĐOÀN THÁNG 7/2026:
1. Sinh hoạt chuyên đề 'Thắp lửa tri ân' và tiêu chí 'Tâm trong - Trí sáng - Hoài bão lớn' (20 phút).
2. Ôn lại truyền thống 76 năm lực lượng TNXP và 50 năm đổi tên nước CHXHCN Việt Nam (10 phút).
3. Phổ biến chính sách mới: Tăng lương cơ sở lên 2,53 triệu, phạt tin giả AI tới 70 triệu (15 phút).
4. Phân công đoàn viên tham gia Lễ thắp nến tri ân 26/7 và Ngày Chủ nhật xanh đợt 3 (15 phút).`,
            discussionQuestions: [
                "Đoàn viên chi đoàn bản chúng ta cần tu dưỡng những hành vi cụ thể nào để rèn luyện 'Tâm trong - Trí sáng - Hoài bão lớn'?",
                "Chi đoàn có kế hoạch giúp đỡ ngày công lao động cụ thể nào cho gia đình chính sách, người già neo đơn trong bản tháng này?"
            ],
            aiTip: "Prompt AI: 'Hãy viết cho tôi 01 bài cảm nghĩ xúc động (300 từ) của tuổi trẻ xã Mường Lầm dâng lên hương hồn các anh hùng liệt sĩ trong đêm Lễ thắp nến tri ân 26/7'."
        },
        documents: [
            { name: "Đề cương tuyên truyền Kỷ niệm 79 năm Ngày Thương binh - Liệt sỹ (27/7)", type: "PDF", size: "410 KB" },
            { name: "Kế hoạch tổ chức Lễ thắp nến tri ân và Ngày Chủ nhật xanh đợt 3", type: "DOCX", size: "175 KB" },
            { name: "Tài liệu phổ biến Luật An ninh mạng và các thủ đoạn lừa đảo Deepfake AI", type: "PDF", size: "360 KB" }
        ],
        historicalSignificance: "50 năm đổi tên nước thành CHXHCN Việt Nam (02/7/1976); 76 năm Ngày truyền thống TNXP (15/7/1950); 72 năm Hiệp định Giơ-ne-vơ (20/7/1954); 79 năm Ngày Thương binh - Liệt sỹ (27/7/1947 – 27/7/2026).",
        keyFocus: [
            "Đợt sinh hoạt chính trị 'Thắp lửa tri ân' nhân kỷ niệm 79 năm Ngày Thương binh - Liệt sỹ.",
            "Rèn luyện đạo đức suốt đời, xây dựng hình mẫu thanh niên 'Tâm trong - Trí sáng - Hoài bão lớn'.",
            "Chính sách mới hiệu lực từ 01/7/2026: Lương cơ sở 2,53 triệu, phạt tin giả AI tới 70 triệu, nghỉ thai sản 7 tháng.",
            "Ra quân Ngày Chủ nhật xanh đợt 3 (26/7) và Lễ thắp nến tri ân tối 26/7."
        ],
        meetingAgenda: `KHUNG TIẾN TRÌNH 60 PHÚT BUỔI SINH HOẠT CHI ĐOÀN THÁNG 7/2026...`,
        discussionQuestions: [
            "Đoàn viên chi đoàn bản chúng ta cần tu dưỡng những hành vi cụ thể nào để rèn luyện 'Tâm trong - Trí sáng - Hoài bão lớn'?",
            "Chi đoàn có kế hoạch giúp đỡ ngày công lao động cụ thể nào cho gia đình chính sách, người già neo đơn trong bản tháng này?"
        ],
        aiTip: "Prompt AI: 'Hãy viết cho tôi 01 bài cảm nghĩ xúc động (300 từ) của tuổi trẻ xã Mường Lầm dâng lên hương hồn các anh hùng liệt sĩ trong đêm Lễ thắp nến tri ân 26/7'."
    },
    {
        month: 8,
        isBlank: false,
        statusBadge: "Đã ban hành - Tài liệu chính thức Tỉnh đoàn Sơn La",
        statusClass: "status-official",
        title: "Kỷ niệm 81 năm Cách mạng Tháng Tám thành công (19/8/1945 – 19/8/2026) & 115 năm Ngày sinh Đại tướng Võ Nguyên Giáp",
        tagline: "Phát huy hào khí Cách mạng Tháng Tám, khát vọng cống hiến xây dựng đất nước phồn vinh, hạnh phúc",
        officialRef: "Văn bản định hướng sinh hoạt chi đoàn định kỳ Tháng 08/2026 - Ban Thường vụ Tỉnh đoàn Sơn La",
        part1: {
            title: "Phần I: Học tập & làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh",
            topic: "Đoàn viên, thanh niên tích cực học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh về khát vọng cống hiến xây dựng đất nước",
            content: "Bác luôn căn dặn: 'Thanh niên phải có chí tự lập, tự cường, không sợ khó, không sợ khổ; phải có tinh thần xung phong, dũng cảm'. Khát vọng cống hiến của tuổi trẻ Mường Lầm hôm nay được cụ thể hóa bằng hành động thi đua làm kinh tế giỏi, bảo tồn văn hóa truyền thống, giữ vững quốc phòng an ninh bản làng.",
            actionPoints: [
                "Nuôi dưỡng tinh thần lập thân, lập nghiệp, chủ động học tập kỹ năng công nghệ mới và thương mại điện tử.",
                "Tích cực tham gia xây dựng đời sống văn hóa mới ở khu dân cư, đẩy lùi các hủ tục lạc hậu.",
                "Sẵn sàng nhận và hoàn thành xuất sắc mọi nhiệm vụ khi Tổ quốc và địa phương cần đến."
            ]
        },
        part2: {
            title: "Phần II: Theo dòng lịch sử & Ngày này năm xưa",
            events: [
                {
                    date: "01/08/1930 – 01/08/2026",
                    name: "Kỷ niệm 96 năm Ngày truyền thống Ngành Tuyên giáo của Đảng",
                    desc: "Vũ khí sắc bén trên mặt trận tư tưởng, giáo dục lý tưởng cách mạng cho cán bộ, đảng viên và thế hệ trẻ."
                },
                {
                    date: "10/08/1961 – 10/08/2026",
                    name: "Kỷ niệm 65 năm Ngày Vì nạn nhân chất độc da cam Việt Nam",
                    desc: "Xoa dịu nỗi đau chiến tranh, tuổi trẻ chung tay chia sẻ, ủng hộ các nạn nhân và gia đình bị nhiễm chất độc da cam."
                },
                {
                    date: "19/08/1945 – 19/08/2026",
                    name: "Kỷ niệm 81 năm Cách mạng Tháng Tám thành công & Ngày truyền thống CAND Việt Nam",
                    desc: "Cuộc quật khởi vĩ đại đập tan xiềng xích nô lệ; 81 năm lực lượng Công an nhân dân anh hùng vì nước quên thân, vì dân phục vụ."
                },
                {
                    date: "20/08/1888 – 20/08/2026",
                    name: "Kỷ niệm 138 năm Ngày sinh Chủ tịch Tôn Đức Thắng",
                    desc: "Người chiến sĩ cách mạng tiền bối kiên cường, tấm gương mẫu mực về đạo đức cần, kiệm, liêm, chính."
                },
                {
                    date: "25/08/1911 – 25/08/2026",
                    name: "Kỷ niệm 115 năm Ngày sinh Đại tướng Võ Nguyên Giáp",
                    desc: "Người Anh Cả của Quân đội nhân dân Việt Nam, thiên tài quân sự kiệt xuất, vị tướng huyền thoại của nhân dân."
                }
            ]
        },
        part3: {
            title: "Phần III: Chính sách, pháp luật mới có hiệu lực từ Tháng 08/2026",
            policies: [
                {
                    code: "Nghị định 185/2026/NĐ-CP",
                    title: "Quy định quy trình tiếp nhận và giải quyết khiếu nại, phản ánh đất đai số hóa",
                    desc: "Bảo đảm người dân có thể gửi kiến nghị về đất đai ngay trên điện thoại thông minh, giám sát tiến độ xử lý minh bạch."
                },
                {
                    code: "Nghị định 190/2026/NĐ-CP",
                    title: "Tăng cường cơ chế giám sát an toàn thông tin và bảo vệ hạ tầng số tại vùng sâu vùng xa",
                    desc: "Bảo đảm an toàn hệ thống mạng viễn thông, bảo vệ dữ liệu công dân tại các trạm phát sóng miền núi."
                },
                {
                    code: "Thông tư 25/2026/TT-BLĐTBXH",
                    title: "Hỗ trợ đào tạo nghề gắn với giải quyết việc làm cho thanh niên nông thôn, miền núi",
                    desc: "Hỗ trợ 100% học phí học nghề ngắn hạn cho thanh niên dân tộc thiểu số và thanh niên hoàn thành nghĩa vụ quân sự."
                },
                {
                    code: "Nghị quyết 45/2026/NQ-HĐND",
                    title: "Hỗ trợ lãi suất vay vốn phát triển kinh tế tập thể, HTX và mô hình trang trại của thanh niên",
                    desc: "Nguồn vốn ưu đãi trực tiếp tiếp sức cho thanh niên Mường Lầm mở rộng diện tích nhãn sạch và nuôi bò vỗ béo."
                }
            ]
        },
        part4: {
            title: "Phần IV: Chuyên đề đặc biệt & Định hướng tuyên truyền của Tỉnh đoàn Sơn La",
            highlights: [
                "Tuyên truyền đợt sinh hoạt chính trị kỷ niệm Cách mạng Tháng Tám (19/8) và hướng tới Kỷ niệm Quốc khánh (2/9).",
                "Đẩy mạnh chiến dịch hỗ trợ thanh niên kết nối tiêu thụ nhãn chín muộn và nông sản Mường Lầm trên các sàn thương mại điện tử.",
                "Tổng kết Chiến dịch Thanh niên tình nguyện Hè 2026 và phong trào 'Tiếp sức mùa thi'.",
                "Tuyên truyền Ngày hội Toàn dân bảo vệ an ninh Tổ quốc (19/8), phối hợp chặt chẽ với Chi đoàn Công an xã."
            ]
        },
        part5: {
            title: "Phần V: Khung kịch bản điều hành sinh hoạt chi đoàn & Gợi ý thảo luận",
            agenda: `KHUNG TIẾN TRÌNH 60 PHÚT BUỔI SINH HOẠT CHI ĐOÀN THÁNG 8/2026:
1. Tuyên truyền 81 năm Cách mạng Tháng Tám và 115 năm Ngày sinh Đại tướng Võ Nguyên Giáp (20 phút).
2. Sinh hoạt chuyên đề 'Khát vọng cống hiến xây dựng quê hương' (15 phút).
3. Phổ biến chính sách hỗ trợ vốn vay HTX và học nghề miễn phí cho thanh niên (15 phút).
4. Phân công đội tình nguyện hỗ trợ ngày hội bảo vệ an ninh bản và thu hoạch nông sản (10 phút).`,
            discussionQuestions: [
                "Tinh thần quả cảm của Cách mạng Tháng Tám nhắc nhở mỗi thanh niên cần có quyết tâm gì trong phát triển kinh tế gia đình?",
                "Chi đoàn bản có thể hỗ trợ các đoàn viên xuất ngũ trở về địa phương lập nghiệp bằng những cách làm nào?"
            ],
            aiTip: "Prompt AI: 'Hãy viết cho tôi 01 bài thuyết trình ngắn gọn (250 từ) về cuộc đời và sự nghiệp thiên tài quân sự của Đại tướng Võ Nguyên Giáp để thuyết minh cho đoàn viên chi đoàn bản'."
        },
        documents: [
            { name: "Đề cương tuyên truyền 81 năm Cách mạng Tháng Tám và Quốc khánh 2/9", type: "PDF", size: "430 KB" },
            { name: "Tài liệu Kỷ niệm 115 năm Ngày sinh Đại tướng Võ Nguyên Giáp (25/8)", type: "PDF", size: "390 KB" },
            { name: "Hướng dẫn thủ tục vay vốn ưu đãi thanh niên phát triển kinh tế", type: "DOCX", size: "125 KB" }
        ],
        historicalSignificance: "Kỷ niệm 81 năm Cách mạng Tháng Tám (19/8); 96 năm Ngày truyền thống Tuyên giáo (01/8); 65 năm Ngày Vì nạn nhân da cam (10/8); 81 năm Ngày truyền thống CAND (19/8); 138 năm Ngày sinh Bác Tôn (20/8); 115 năm Ngày sinh Đại tướng Võ Nguyên Giáp (25/8).",
        keyFocus: [
            "Học tập tư tưởng khát vọng cống hiến xây dựng đất nước theo gương Bác.",
            "Kỷ niệm 81 năm Cách mạng Tháng Tám và 115 năm Ngày sinh Đại tướng Võ Nguyên Giáp.",
            "Chính sách mới: Hỗ trợ học nghề miễn phí, hỗ trợ lãi suất vay vốn phát triển HTX thanh niên.",
            "Chiến dịch đưa nông sản nhãn Mường Lầm lên sàn TMĐT và tổng kết TNTN Hè 2026."
        ],
        meetingAgenda: `KHUNG TIẾN TRÌNH 60 PHÚT BUỔI SINH HOẠT CHI ĐOÀN THÁNG 8/2026...`,
        discussionQuestions: [
            "Tinh thần quả cảm của Cách mạng Tháng Tám nhắc nhở mỗi thanh niên cần có quyết tâm gì trong phát triển kinh tế gia đình?",
            "Chi đoàn bản có thể hỗ trợ các đoàn viên xuất ngũ trở về địa phương lập nghiệp bằng những cách làm nào?"
        ],
        aiTip: "Prompt AI: 'Hãy viết cho tôi 01 bài thuyết trình ngắn gọn (250 từ) về cuộc đời và sự nghiệp thiên tài quân sự của Đại tướng Võ Nguyên Giáp để thuyết minh cho đoàn viên chi đoàn bản'."
    },
        {
        month: 9,
        isBlank: false,
        statusBadge: "Đã ban hành - Tài liệu chính thức Tỉnh đoàn Sơn La",
        statusClass: "status-official",
        title: "Thanh niên học tập và làm theo tinh thần học tập suốt đời của Chủ tịch Hồ Chí Minh",
        tagline: "Phát huy tinh thần tự học làm cốt, lấy chuyên cần làm đầu, rèn luyện toàn diện vì ngày mai lập thân lập nghiệp",
        officialRef: "Văn bản định hướng sinh hoạt chi đoàn định kỳ Tháng 09/2026 - Ban Thường vụ Tỉnh đoàn Sơn La",
        part1: {
            title: "Phần I – Học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh",
            badge: "TƯ TƯỞNG HỒ CHÍ MINH",
            topic: "Chuyên đề: Học tập và làm theo tinh thần học tập suốt đời của Chủ tịch Hồ Chí Minh",
            content: "Chủ tịch Hồ Chí Minh là tấm gương sáng ngời, mẫu mực về tinh thần tự học và học tập suốt đời. Người từng căn dặn: 'Học hành là vô cùng. Học càng nhiều, biết càng nhiều càng tốt'. Người yêu cầu việc học phải toàn diện cả về chuyên môn nghề nghiệp, lý luận chính trị, kinh tế, văn hóa và rèn luyện thể chất; nguyên tắc cốt lõi là 'Học đi đôi với hành, lý luận gắn liền với thực tiễn'. Người chỉ rõ phương pháp: 'Lấy tự học làm cốt', học ở trường lớp, qua sách vở, học lẫn nhau và học hỏi từ nhân dân, với thái độ cần cù, chịu khó, kiên trì, không giấu dốt, không tự mãn.",
            actionPoints: [
                "Đoàn viên thanh niên 15 bản và khối trường học nêu cao tinh thần tự học, tự rèn, xác định học tập suốt đời là chìa khóa để lập thân, lập nghiệp vững vàng.",
                "Tích cực tham gia các lớp tập huấn kỹ năng số, trí tuệ nhân tạo (AI), học ngoại ngữ, học nghề và ứng dụng tiến bộ khoa học kỹ thuật vào sản xuất nông nghiệp tại Mường Lầm.",
                "Xây dựng Chi đoàn học tập, duy trì hiệu quả Tủ sách thanh niên tại Nhà văn hóa bản, đẩy mạnh phong trào đọc sách và tự bồi dưỡng chuyên môn nghiệp vụ trong cán bộ, đoàn viên."
            ]
        },
        part2: {
            title: "Phần II – Theo dòng lịch sử, những ngày đáng nhớ tháng 09",
            badge: "TRUYỀN THỐNG VẺ VANG",
            events: [
                {
                    date: "02/9/1945 – 02/9/2026",
                    name: "Kỷ niệm 81 năm Ngày Quốc khánh nước Cộng hòa xã hội chủ nghĩa Việt Nam",
                    desc: "Mốc son chói lọi trong lịch sử dân tộc khi Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập tại Quảng trường Ba Đình, khai sinh ra nước Việt Nam Dân chủ Cộng hòa (nay là CHXHCN Việt Nam)."
                },
                {
                    date: "06/9/1902 – 06/9/2026",
                    name: "Kỷ niệm 124 năm Ngày sinh Tổng Bí thư Lê Hồng Phong",
                    desc: "Nhà lãnh đạo xuất sắc của Đảng và cách mạng Việt Nam, người chiến sĩ cộng sản kiên cường, tấm gương sáng ngời về lòng tận tụy, hy sinh trọn đời vì độc lập, tự do của Tổ quốc."
                },
                {
                    date: "07/9/1945 – 07/9/2026",
                    name: "Kỷ niệm 81 năm Ngày thành lập Đài Tiếng nói Việt Nam",
                    desc: "Cơ quan truyền thông quốc gia đóng vai trò xung kích trên mặt trận tư tưởng, văn hóa, đưa tiếng nói của Đảng và Chính phủ đến với đồng bào cả nước và bạn bè quốc tế."
                },
                {
                    date: "10/9/1955 – 10/9/2026",
                    name: "Kỷ niệm 71 năm Ngày thành lập Mặt trận Tổ quốc Việt Nam",
                    desc: "Biểu tượng sinh động của khối đại đoàn kết toàn dân tộc, tập hợp mọi tầng lớp nhân dân thực hiện thắng lợi các nhiệm vụ cách mạng xây dựng và bảo vệ Tổ quốc."
                }
            ]
        },
        part3: {
            title: "Phần III – Chính sách mới có hiệu lực từ tháng 09/2026",
            badge: "CHÍNH SÁCH MỚI",
            shortTitle: "Phần III: Chính sách",
            policies: [
                {
                    code: "NĐ 283/2026/NĐ-CP",
                    name: "Doanh nghiệp chậm trả lương, trả thiếu lương có thể bị phạt tới 100 triệu đồng",
                    desc: "Nghị định 283/2026/NĐ-CP (hiệu lực từ 10/9/2026): Xử phạt nghiêm khắc hành vi chậm trả lương, nợ lương, trả lương không đúng quy định nhằm bảo vệ quyền và lợi ích hợp pháp của người lao động."
                },
                {
                    code: "NĐ 284/2026/NĐ-CP",
                    name: "Xử phạt giao dịch tài sản mã hóa sai quy định tới 200 triệu đồng đối với tổ chức và 100 triệu đồng đối với cá nhân",
                    desc: "Nghị định 284/2026/NĐ-CP (hiệu lực từ 01/9/2026): Tăng cường quản lý nhà nước đối với các giao dịch tài sản ảo, tài sản mã hóa không được pháp luật công nhận, ngăn chặn rủi ro tài chính cho thanh niên."
                },
                {
                    code: "NĐ 320/2026/NĐ-CP",
                    name: "Chi trả lương hưu, trợ cấp an sinh xã hội qua tài khoản định danh trên ứng dụng VNeID",
                    desc: "Nghị định 320/2026/NĐ-CP (hiệu lực từ 28/9/2026): Toàn diện số hóa phương thức nhận an sinh xã hội, giúp người dân và người cao tuổi nhận trợ cấp minh bạch, an toàn không dùng tiền mặt."
                },
                {
                    code: "NĐ 301/2026/NĐ-CP",
                    name: "Trẻ em dưới 6 tuổi được đăng ký cấp thẻ Căn cước ngay trong quy trình đăng ký khai sinh liên thông điện tử",
                    desc: "Nghị định 301/2026/NĐ-CP (hiệu lực từ 01/9/2026): Đơn giản hóa thủ tục hành chính, phụ huynh đăng ký khai sinh liên thông được cấp thẻ Căn cước số cho trẻ em mà không cần đến cơ quan công an."
                },
                {
                    code: "TT 126/2026/TT-BCA",
                    name: "Hỗ trợ tối đa 10 triệu đồng/trường hợp cho cá nhân, tổ chức trực tiếp tham gia cứu giúp, đưa người bị tai nạn giao thông đi cấp cứu",
                    desc: "Thông tư 126/2026/TT-BCA (hiệu lực từ 01/9/2026): Kịp thời động viên, khen thưởng và hỗ trợ kinh phí thiết thực cho các cá nhân, thanh niên dũng cảm cứu giúp nạn nhân TNGT đi cấp cứu."
                },
                {
                    code: "NĐ 283/2026/NĐ-CP",
                    name: "Phạt tiền từ 50 – 75 triệu đồng đối với hành vi lôi kéo, dụ dỗ, quảng cáo gian dối để lừa gạt, cưỡng bức người lao động",
                    desc: "Nghị định 283/2026/NĐ-CP (hiệu lực từ 10/9/2026): Kiên quyết đấu tranh triệt phá các đường dây lừa đảo tuyển dụng 'việc nhẹ lương cao', bẫy việc làm qua mạng xã hội nhắm vào thanh niên vùng cao."
                }
            ]
        },
        part4: {
            title: "Phần IV – Định hướng công tác Đoàn & Phong trào thanh thiếu nhi tháng 09/2026",
            badge: "ĐỊNH HƯỚNG HÀNH ĐỘNG",
            shortTitle: "Phần IV: Định hướng",
            highlights: [
                "Tổ chức đợt sinh hoạt chính trị sâu rộng kỷ niệm 81 năm Quốc khánh 2/9 tại 15 Chi đoàn bản và cụm trường học, giáo dục lòng yêu nước và niềm tự hào dân tộc cho thế hệ trẻ.",
                "Ra quân Chiến dịch 'Tiếp sức đến trường năm học 2026 - 2027', vận động nguồn lực xã hội hóa hỗ trợ sách vở, đồ dùng học tập cho học sinh có hoàn cảnh khó khăn tại các bản vùng cao.",
                "Triển khai mô hình 'Cổng trường an toàn giao thông', phân công đoàn viên xung kích tham gia hướng dẫn trật tự ATGT trong Tháng cao điểm ATGT cho học sinh đến trường.",
                "Tổ chức diễn đàn 'Thanh niên Mường Lầm với tinh thần tự học số', mở các buổi tập huấn ứng dụng trí tuệ nhân tạo (AI) cơ bản vào học tập và tìm kiếm việc làm cho ĐVTN.",
                "Phát động 'Ngày Chủ nhật xanh đợt 4/2026' gắn với chỉnh trang cảnh quan bản làng sạch đẹp, vệ sinh khu vực xung quanh trường mầm non, tiểu học và THCS xã."
            ]
        },
        part5: {
            title: "Phần V – Khung kịch bản điều hành sinh hoạt chi đoàn mẫu (60 phút)",
            agenda: `TIẾN TRÌNH 60 PHÚT SINH HOẠT CHI ĐOÀN THÁNG 09/2026
Chủ đề: "Thanh niên học tập và làm theo tinh thần học tập suốt đời của Chủ tịch Hồ Chí Minh"
---------------------------------------------------------------------------------
[00:00 - 05:00] KHỞI ĐỘNG & NGHI THỨC:
- Tập hợp đoàn viên, kiểm diện sĩ số (ghi rõ số ĐVTN có mặt, vắng mặt có lý do/không lý do).
- Toàn thể Chi đoàn thực hiện nghi thức Chào cờ, hát vang bài "Tiến quân ca" và "Thanh niên làm theo lời Bác".
- Bí thư Chi đoàn tuyên bố lý do buổi sinh hoạt, thông qua chương trình và mục tiêu buổi họp.

[05:00 - 18:00] PHẦN 1: HỌC TẬP TƯ TƯỞNG BÁC VỀ HỌC TẬP SUỐT ĐỜI & LỊCH SỬ THÁNG 9:
- Bí thư Chi đoàn quán triệt Chuyên đề: Tinh thần học tập suốt đời và phương châm "Lấy tự học làm cốt" của Bác Hồ.
- Điểm lại ý nghĩa lịch sử 81 năm Quốc khánh 2/9, 124 năm Ngày sinh đ/c Lê Hồng Phong, 81 năm VOV và 71 năm Mặt trận Tổ quốc VN.
- Liên hệ với phong trào học tập, nâng cao trình độ văn hóa, tay nghề và kỹ năng số của ĐVTN trong bản.

[18:00 - 30:00] PHẦN 2: PHỔ BIẾN 6 CHÍNH SÁCH MỚI CÓ HIỆU LỰC TỪ THÁNG 09/2026:
- Tuyên truyền mức phạt chậm trả lương (NĐ 283), xử phạt giao dịch tài sản mã hóa sai quy định (NĐ 284).
- Hướng dẫn nhận an sinh xã hội qua VNeID (NĐ 320) và cấp Căn cước cho trẻ dưới 6 tuổi liên thông (NĐ 301).
- Cảnh báo các thủ đoạn lôi kéo, dụ dỗ lao động "việc nhẹ lương cao" (NĐ 283) và chính sách hỗ trợ cứu người bị TNGT (TT 126).

[30:00 - 45:00] PHẦN 3: THẢO LUẬN & ĐĂNG KÝ HÀNH ĐỘNG CỤ THỂ TẠI BẢN:
- Đoàn viên thảo luận sôi nổi về các câu hỏi gợi mở: Làm thế nào để tự học công nghệ số và áp dụng vào phát triển kinh tế gia đình?
- Thống nhất lịch ra quân hỗ trợ học sinh khó khăn đầu năm học mới và vệ sinh cổng trường ATGT.

[45:00 - 55:00] PHẦN 4: ĐÁNH GIÁ CÔNG TÁC ĐOÀN THÁNG 8 & TRIỂN KHAI NHIỆM VỤ THÁNG 9:
- Đánh giá kết quả tham gia Chiến dịch TNTN Hè và các hoạt động bảo vệ môi trường trong tháng qua.
- Phân công nhiệm vụ cụ thể cho các tổ thanh niên xung kích, tổ công nghệ số cộng đồng của bản.

[55:00 - 60:00] TỔNG KẾT & BẾ MẠC:
- Bí thư Chi đoàn kết luận, biểu dương các đồng chí có tinh thần tự học tốt.
- Thư ký đọc thông qua Nghị quyết buổi họp chi đoàn và bế mạc.`,
            discussionQuestions: [
                "Mỗi đoàn viên thanh niên trong bản cần xây dựng kế hoạch tự học như thế nào để vừa làm kinh tế giỏi, vừa nâng cao hiểu biết pháp luật?",
                "Chi đoàn chúng ta có thể làm những phần việc cụ thể gì để giúp đỡ các em học sinh có hoàn cảnh khó khăn bước vào năm học mới 2026 - 2027?",
                "Cần làm gì để cảnh giác, không để thanh niên trong bản bị lừa đảo qua mạng xã hội về 'việc nhẹ lương cao'?"
            ],
            aiTip: "Sử dụng Gemini hoặc ChatGPT với câu lệnh: 'Hãy gợi ý cho Bí thư Chi đoàn nông thôn 5 ý tưởng tổ chức buổi sinh hoạt chuyên đề về Tự học công nghệ số và AI hấp dẫn, lôi cuốn thanh niên bản vùng cao'.",
            note: "Các Chi đoàn bản kết hợp sinh hoạt chi đoàn với việc hỗ trợ người dân cài đặt, cập nhật thông tin trên ứng dụng VNeID."
        },
        historicalSignificance: "Kỷ niệm 81 năm Ngày Quốc khánh nước CHXHCN Việt Nam (02/9/1945 - 02/9/2026), 124 năm Ngày sinh Tổng Bí thư Lê Hồng Phong, 81 năm Ngày thành lập VOV và 71 năm Ngày thành lập Mặt trận Tổ quốc Việt Nam.",
        keyFocus: [
            "Học tập và làm theo tư tưởng Hồ Chí Minh về tinh thần tự học và học tập suốt đời.",
            "Tổ chức đợt sinh hoạt chính trị sâu rộng chào mừng 81 năm Ngày Quốc khánh 2/9.",
            "Phổ biến 6 chính sách mới có hiệu lực từ tháng 09/2026 (NĐ 283, NĐ 284, NĐ 320, NĐ 301, TT 126).",
            "Ra quân Chiến dịch 'Tiếp sức đến trường' và đảm bảo trật tự ATGT cổng trường học đầu năm học mới."
        ],
        meetingAgenda: `TIẾN TRÌNH 60 PHÚT SINH HOẠT CHI ĐOÀN THÁNG 09/2026
Chủ đề: "Thanh niên học tập và làm theo tinh thần học tập suốt đời của Chủ tịch Hồ Chí Minh"
---------------------------------------------------------------------------------
[00:00 - 05:00] Khởi động, kiểm diện đoàn viên, chào cờ, hát Đoàn ca.
[05:00 - 18:00] Phần 1: Học tập tư tưởng Bác về học tập suốt đời & Ôn lại lịch sử tháng 9.
[18:00 - 30:00] Phần 2: Phổ biến 6 chính sách mới có hiệu lực từ tháng 09/2026.
[30:00 - 45:00] Phần 3: Thảo luận tự học công nghệ số và phát triển kinh tế bản làng.
[45:00 - 55:00] Phần 4: Đánh giá hoạt động tháng 8, triển khai công tác Đoàn tháng 9/2026.
[55:00 - 60:00] Bí thư Chi đoàn kết luận, thư ký thông qua Nghị quyết buổi họp.`,
        discussionQuestions: [
            "Mỗi đoàn viên thanh niên trong bản cần xây dựng kế hoạch tự học như thế nào để vừa làm kinh tế giỏi, vừa nâng cao hiểu biết pháp luật?",
            "Chi đoàn chúng ta có thể làm những phần việc cụ thể gì để giúp đỡ các em học sinh có hoàn cảnh khó khăn bước vào năm học mới 2026 - 2027?",
            "Cần làm gì để cảnh giác, không để thanh niên trong bản bị lừa đảo qua mạng xã hội về 'việc nhẹ lương cao'?"
        ],
        aiTip: "Sử dụng Gemini hoặc ChatGPT với câu lệnh: 'Hãy gợi ý cho Bí thư Chi đoàn nông thôn 5 ý tưởng tổ chức buổi sinh hoạt chuyên đề về Tự học công nghệ số và AI hấp dẫn, lôi cuốn thanh niên bản vùng cao'.",
        documents: [
            { name: "Đề cương tuyên truyền 81 năm Quốc khánh nước CHXHCN Việt Nam (02/9/1945 - 02/9/2026)", size: "1.4 MB", type: "PDF" },
            { name: "Tài liệu chuyên đề học tập tinh thần tự học suốt đời của Chủ tịch Hồ Chí Minh", size: "950 KB", type: "DOCX" },
            { name: "Sổ tay tuyên truyền phòng chống lừa đảo lao động việc làm qua mạng xã hội cho thanh niên", size: "2.1 MB", type: "PDF" }
        ]
    },
    {
        month: 10,
        isBlank: false,
        statusBadge: "Đã ban hành - Tài liệu chính thức Tỉnh đoàn Sơn La",
        statusClass: "status-official",
        title: "Sáng mãi lý tưởng cách mạng của thanh niên",
        tagline: "Nói đi đôi với làm, thực hành 23 tiêu chí tư cách người cách mạng, vững bước dưới ngọn cờ 70 năm Hội LHTN Việt Nam",
        officialRef: "Văn bản định hướng sinh hoạt chi đoàn định kỳ Tháng 10/2026 - Ban Thường vụ Tỉnh đoàn Sơn La",
        part1: {
            title: "Phần I – Học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh",
            badge: "TƯ TƯỞNG HỒ CHÍ MINH",
            topic: "Chuyên đề: Học tập và làm theo phong cách Hồ Chí Minh về “Nói đi đôi với làm”",
            content: "Sinh thời, Chủ tịch Hồ Chí Minh luôn căn dặn cán bộ, đảng viên và thanh niên phải coi trọng phương châm 'Nói đi đôi với làm'. Đây là biểu hiện cao đẹp nhất của sự thống nhất, nhất quán giữa nhận thức và hành động cách mạng. Người yêu cầu thực hành nghiêm túc 23 tiêu chí về tư cách người cách mạng được đúc kết trong tác phẩm kinh điển 'Đường Kách mệnh'. Bác nhấn mạnh phải kiên quyết đấu tranh chống bệnh chủ quan, bệnh hẹp hòi, bệnh ba hoa, nói nhiều làm ít, hứa mà không làm; quét sạch 'giặc nội xâm' chủ nghĩa cá nhân để giữ trọn niềm tin yêu của nhân dân.",
            actionPoints: [
                "Cán bộ Đoàn, Bí thư Chi đoàn thực hiện nghiêm phương châm 'Nói đi đôi với làm', nói ít làm nhiều, làm đến nơi đến chốn, không hứa suông.",
                "Thực hành 23 tiêu chí tư cách người cách mạng trong công việc hàng ngày và đời sống tại bản làng, nêu gương sáng cho thanh thiếu nhi noi theo.",
                "Kiên quyết đấu tranh bài trừ bệnh ba hoa, bệnh hình thức, thói quan liêu; nêu cao tinh thần tự phê bình và phê bình chân thành, mang tính xây dựng."
            ]
        },
        part2: {
            title: "Phần II – Theo dòng lịch sử, những ngày đáng nhớ tháng 10",
            badge: "TRUYỀN THỐNG VẺ VANG",
            events: [
                {
                    date: "01/10/1876 – 01/10/2026",
                    name: "Kỷ niệm 150 năm Ngày sinh Cụ Huỳnh Thúc Kháng",
                    desc: "Nhà chí sĩ yêu nước tiêu biểu, nguyên Quyền Chủ tịch nước Việt Nam Dân chủ Cộng hòa, biểu tượng ngời sáng của tinh thần đại đoàn kết và đức tính 'dĩ công vi thượng'."
                },
                {
                    date: "13/10/2004 – 13/10/2026",
                    name: "Kỷ niệm 22 năm Ngày Doanh nhân Việt Nam",
                    desc: "Tôn vinh vai trò tiên phong của đội ngũ doanh nhân, hợp tác xã và các mô hình thanh niên khởi nghiệp đổi mới sáng tạo trong công cuộc phát triển kinh tế đất nước."
                },
                {
                    date: "14/10/1930 – 14/10/2026",
                    name: "Kỷ niệm 94 năm Ngày thành lập Hội Nông dân Việt Nam",
                    desc: "Khẳng định vai trò trung tâm và nòng cốt của giai cấp nông dân trong phong trào xây dựng nông thôn mới, bảo tồn và phát huy bản sắc văn hóa các dân tộc."
                },
                {
                    date: "15/10/1956 – 15/10/2026",
                    name: "Kỷ niệm 70 năm Ngày truyền thống Hội Liên hiệp Thanh niên Việt Nam",
                    desc: "Chặng đường 70 năm vẻ vang của tổ chức xã hội rộng rãi tập hợp các tầng lớp thanh niên Việt Nam yêu nước, thắp sáng ngọn lửa nhiệt huyết cống hiến vì Tổ quốc."
                },
                {
                    date: "20/10/1930 – 20/10/2026",
                    name: "Kỷ niệm 96 năm Ngày thành lập Hội Liên hiệp Phụ nữ Việt Nam & Ngày Phụ nữ Việt Nam",
                    desc: "Tôn vinh truyền thống vẻ vang 'Anh hùng, bất khuất, trung hậu, đảm đang' của phụ nữ Việt Nam, phát huy vai trò nữ thanh niên trong thời kỳ chuyển đổi số."
                }
            ]
        },
        part3: {
            title: "Phần III – Định hướng tuyên truyền miệng tháng 10/2026",
            badge: "TUYÊN TRUYỀN MIỆNG",
            shortTitle: "Phần III: Tuyên truyền",
            highlights: [
                "Tuyên truyền sức lan tỏa mạnh mẽ của Chiến dịch 'Tôi yêu Tổ quốc tôi' (thu hút hơn 250 triệu lượt xem trên các nền tảng mạng xã hội), khơi dậy lòng tự hào dân tộc trong giới trẻ.",
                "Đôn đốc 100% cán bộ Đoàn và đoàn viên thanh niên toàn xã hoàn thành kiểm tra học tập Nghị quyết Đại hội Đoàn toàn quốc lần thứ XIII (nhiệm kỳ 2026–2031) trên ứng dụng Thanh niên Việt Nam trong tháng 10/2026.",
                "Tuyên truyền kết quả Hội nghị tổng kết Chiến dịch Thanh niên tình nguyện Hè năm 2026 của Tỉnh đoàn Sơn La và các mô hình, điển hình tiên tiến của tuổi trẻ Mường Lầm.",
                "Triển khai đồng bộ chủ trương xây dựng 'Chi đoàn mạnh', thực hiện nghiêm túc chế độ tự học tập của cán bộ Đoàn và xây dựng mô hình Đoàn cơ sở '3 chủ động' giai đoạn 2026–2031.",
                "Tuyên truyền và tổ chức chu đáo các hoạt động chăm lo thiếu nhi nhân dịp khai giảng năm học mới 2026–2027 và Chương trình 'Trung thu cho em' ấm áp tại các điểm trường cắm bản vùng cao."
            ]
        },
        part4: {
            title: "Phần IV – Chính sách mới có hiệu lực từ tháng 10/2026",
            badge: "CHÍNH SÁCH MỚI",
            shortTitle: "Phần IV: Chính sách",
            policies: [
                {
                    code: "NĐ 321/2026/NĐ-CP",
                    name: "Tăng mức chuẩn trợ cấp ưu đãi người có công với cách mạng từ 2.789.000 đồng lên 3.012.000 đồng",
                    desc: "Nghị định 321/2026/NĐ-CP (hiệu lực từ 01/10/2026): Nâng cao đời sống vật chất và tinh thần cho người có công, thể hiện sâu sắc đạo lý 'Uống nước nhớ nguồn' của Đảng, Nhà nước và nhân dân ta."
                },
                {
                    code: "NĐ 335/2026/NĐ-CP",
                    name: "Tăng mức chuẩn trợ giúp xã hội và trợ cấp hưu trí xã hội lên 540.000 đồng/tháng",
                    desc: "Nghị định 335/2026/NĐ-CP (hiệu lực từ 05/10/2026): Mở rộng diện bao phủ an sinh xã hội, bảo đảm người cao tuổi, đối tượng yếu thế và hộ đặc biệt khó khăn vùng đồng bào dân tộc thiểu số được trợ cấp kịp thời."
                },
                {
                    code: "NĐ 317/2026/NĐ-CP",
                    name: "Quy định quản lý, sử dụng Quỹ Học bổng Quốc gia, ưu tiên học sinh vùng đồng bào dân tộc thiểu số và miền núi",
                    desc: "Nghị định 317/2026/NĐ-CP (hiệu lực từ 01/10/2026): Tạo nguồn lực hỗ trợ tài chính bền vững cho học sinh nghèo vượt khó học giỏi, tiếp sức cho con em bản làng vươn lên thành tài."
                },
                {
                    code: "NĐ 368/2026/NĐ-CP",
                    name: "Thời gian nghỉ thai sản được tính là thời gian công tác để xét danh hiệu thi đua, khen thưởng; giảm 1/3 thời gian giữ chức vụ xét khen thưởng cống hiến cho nữ lãnh đạo, quản lý",
                    desc: "Nghị định 368/2026/NĐ-CP (hiệu lực từ 01/10/2026): Chính sách nhân văn vượt trội bảo đảm bình đẳng giới và khuyến khích cán bộ nữ, nữ thanh niên cống hiến lâu dài trong hệ thống chính trị."
                }
            ]
        },
        part5: {
            title: "Phần V – Khung kịch bản điều hành sinh hoạt chi đoàn mẫu (60 phút)",
            agenda: `TIẾN TRÌNH 60 PHÚT SINH HOẠT CHI ĐOÀN THÁNG 10/2026
Chủ đề: "Sáng mãi lý tưởng cách mạng của thanh niên"
---------------------------------------------------------------------------------
[00:00 - 05:00] NGHI THỨC KHỞI ĐỘNG:
- Điểm danh ĐVTN (chú trọng kiểm tra đoàn viên tham gia sinh hoạt trực tiếp và trực tuyến nếu đi học/làm ăn xa).
- Chào cờ, hát Đoàn ca trang nghiêm; Bí thư Chi đoàn tuyên bố mục đích buổi sinh hoạt tháng 10.

[05:00 - 20:00] PHẦN 1: HỌC TẬP TƯ TƯỞNG BÁC VỀ "NÓI ĐI ĐÔI VỚI LÀM" & TRUYỀN THỐNG THÁNG 10:
- Bí thư Chi đoàn trình bày Chuyên đề: Học tập phong cách "Nói đi đôi với làm" của Bác Hồ và thực hành 23 tiêu chí tư cách người cách mạng.
- Ôn lại truyền thống vẻ vang: Kỷ niệm 70 năm Ngày truyền thống Hội LHTN Việt Nam (15/10), 150 năm Ngày sinh Cụ Huỳnh Thúc Kháng, 94 năm Ngày thành lập Hội Nông dân VN và 96 năm Ngày Phụ nữ VN 20/10.

[20:00 - 32:00] PHẦN 2: QUÁN TRIỆT 5 ĐỊNH HƯỚNG TUYÊN TRUYỀN MIỆNG TRỌNG TÂM:
- Lan tỏa phong trào "Tôi yêu Tổ quốc tôi"; kiểm tra 100% đoàn viên thi trực tuyến Nghị quyết Đại hội Đoàn toàn quốc lần thứ XIII trên App Thanh niên Việt Nam.
- Quán triệt tiêu chí xây dựng "Chi đoàn mạnh" và mô hình Đoàn cơ sở "3 chủ động".

[32:00 - 42:00] PHẦN 3: PHỔ BIẾN CÁC CHÍNH SÁCH MỚI CÓ HIỆU LỰC TỪ THÁNG 10:
- Phổ biến chính sách tăng trợ cấp người có công (NĐ 321), tăng chuẩn trợ giúp xã hội lên 540.000đ/tháng (NĐ 335).
- Tuyên truyền chính sách Quỹ Học bổng Quốc gia ưu tiên học sinh dân tộc thiểu số (NĐ 317) và chế độ thai sản thi đua (NĐ 368).

[42:00 - 52:00] PHẦN 4: THẢO LUẬN & ĐĂNG KÝ CÔNG TRÌNH THANH NIÊN CHÀO MỪNG 70 NĂM HỘI LHTN:
- Đoàn viên trao đổi: Làm gì để chi đoàn ta thực hiện đúng tinh thần "Nói đi đôi với làm"?
- Biểu quyết thông qua công trình thanh niên: Đảm nhận đoạn đường hoa hoặc tu sửa sân chơi thể thao tại nhà văn hóa bản.

[52:00 - 60:00] TỔNG KẾT & KẾ HOẠCH THÁNG 11:
- Đánh giá xếp loại thi đua tháng 10; nhắc nhở đoàn viên cài đặt và hoàn thành kiểm tra trên App Thanh niên Việt Nam.
- Bí thư Chi đoàn kết luận buổi sinh hoạt.`,
            discussionQuestions: [
                "Chi đoàn ta cần khắc phục những biểu hiện nào còn mang tính 'nói nhiều làm ít' hoặc hứa hẹn hình thức trong sinh hoạt bản làng?",
                "Để chào mừng 70 năm Ngày truyền thống Hội LHTN Việt Nam (15/10), mỗi thanh niên trong bản có thể đóng góp phần việc cụ thể gì?",
                "Làm thế nào để hỗ trợ 100% đoàn viên trong chi đoàn hoàn thành bài kiểm tra Nghị quyết Đại hội Đoàn XIII trên điện thoại thông minh?"
            ],
            aiTip: "Sử dụng công cụ AI (Canva Magic Studio hoặc Leonardo) tạo infographic tuyên truyền kỷ niệm 70 năm Ngày truyền thống Hội LHTN Việt Nam mang đậm dấu ấn tuổi trẻ Sơn La.",
            note: "Yêu cầu 100% đoàn viên mang điện thoại thông minh đến buổi sinh hoạt để được hướng dẫn thi Nghị quyết Đoàn XIII trên App Thanh niên Việt Nam."
        },
        historicalSignificance: "Kỷ niệm 150 năm Ngày sinh Cụ Huỳnh Thúc Kháng (01/10/1876), 22 năm Ngày Doanh nhân VN (13/10), 94 năm Ngày thành lập Hội Nông dân VN (14/10), 70 năm Ngày truyền thống Hội LHTN Việt Nam (15/10/1956) và 96 năm Ngày Phụ nữ VN (20/10/1930).",
        keyFocus: [
            "Học tập phong cách Hồ Chí Minh về 'Nói đi đôi với làm' và thực hành 23 tiêu chí tư cách người cách mạng.",
            "Chào mừng 70 năm Ngày truyền thống Hội Liên hiệp Thanh niên Việt Nam (15/10/1956 - 15/10/2026).",
            "Đôn đốc 100% đoàn viên hoàn thành kiểm tra Nghị quyết Đại hội Đoàn toàn quốc lần thứ XIII trên App Thanh niên VN.",
            "Phổ biến 4 chính sách an sinh xã hội mới có hiệu lực từ tháng 10/2026 (NĐ 321, NĐ 335, NĐ 317, NĐ 368)."
        ],
        meetingAgenda: `TIẾN TRÌNH 60 PHÚT SINH HOẠT CHI ĐOÀN THÁNG 10/2026
Chủ đề: "Sáng mãi lý tưởng cách mạng của thanh niên"
---------------------------------------------------------------------------------
[00:00 - 05:00] Khởi động, kiểm diện đoàn viên, chào cờ, hát Đoàn ca.
[05:00 - 20:00] Phần 1: Học tập tư tưởng Bác về "Nói đi đôi với làm" & Ôn lại lịch sử tháng 10.
[20:00 - 32:00] Phần 2: Quán triệt 5 định hướng tuyên truyền miệng trọng tâm tháng 10.
[32:00 - 42:00] Phần 3: Phổ biến 4 chính sách mới có hiệu lực từ tháng 10/2026.
[42:00 - 52:00] Phần 4: Thảo luận, đăng ký công trình thanh niên chào mừng 70 năm Hội LHTN.
[52:00 - 60:00] Đánh giá thi đua, phân công nhiệm vụ và bế mạc buổi sinh hoạt.`,
        discussionQuestions: [
            "Chi đoàn ta cần khắc phục những biểu hiện nào còn mang tính 'nói nhiều làm ít' hoặc hứa hẹn hình thức trong sinh hoạt bản làng?",
            "Để chào mừng 70 năm Ngày truyền thống Hội LHTN Việt Nam (15/10), mỗi thanh niên trong bản có thể đóng góp phần việc cụ thể gì?",
            "Làm thế nào để hỗ trợ 100% đoàn viên trong chi đoàn hoàn thành bài kiểm tra Nghị quyết Đại hội Đoàn XIII trên điện thoại thông minh?"
        ],
        aiTip: "Sử dụng công cụ AI (Canva Magic Studio hoặc Leonardo) tạo infographic tuyên truyền kỷ niệm 70 năm Ngày truyền thống Hội LHTN Việt Nam mang đậm dấu ấn tuổi trẻ Sơn La.",
        documents: [
            { name: "Đề cương tuyên truyền 70 năm Ngày truyền thống Hội LHTN Việt Nam (15/10/1956 - 15/10/2026)", size: "2.3 MB", type: "PDF" },
            { name: "Hướng dẫn kiểm tra học tập Nghị quyết Đại hội Đoàn toàn quốc lần thứ XIII trên App Thanh niên VN", size: "1.1 MB", type: "DOCX" },
            { name: "Bộ tài liệu 23 tiêu chí tư cách người cách mạng theo tác phẩm Đường Kách mệnh", size: "850 KB", type: "PDF" }
        ]
    },
    {
        month: 11,
        isBlank: false,
        statusBadge: "Đã ban hành - Tài liệu chính thức Tỉnh đoàn Sơn La",
        statusClass: "status-official",
        title: "Thanh niên với pháp luật",
        tagline: "Gương mẫu chấp hành pháp luật, tri ân thầy cô cắm bản, phát huy sức mạnh khối Đại đoàn kết toàn dân tộc",
        officialRef: "Văn bản định hướng sinh hoạt chi đoàn định kỳ Tháng 11/2026 - Ban Thường vụ Tỉnh đoàn Sơn La",
        part1: {
            title: "Phần I – Học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh",
            badge: "TƯ TƯỞNG HỒ CHÍ MINH",
            topic: "Chuyên đề: Tư tưởng Hồ Chí Minh về bồi dưỡng thanh niên",
            content: "Chủ tịch Hồ Chí Minh khẳng định: 'Tuổi trẻ là mùa xuân của xã hội', thanh niên là người chủ tương lai của nước nhà, nước nhà thịnh hay suy, yếu hay mạnh một phần lớn là do các thanh niên. Người yêu cầu công tác bồi dưỡng thanh niên phải mang tính toàn diện, trước hết là giáo dục lý tưởng cách mạng, trau dồi phẩm chất đạo đức ('Trung với nước, hiếu với dân; cần, kiệm, liêm, chính; chí công vô tư'); nâng cao trình độ văn hóa, khoa học - kỹ thuật và rèn luyện thể chất dẻo dai. Phương châm giáo dục phải kết hợp chặt chẽ giữa nhà trường, gia đình và xã hội, đặc biệt coi trọng tinh thần tự giác rèn luyện, tự giáo dục của mỗi đoàn viên thanh niên.",
            actionPoints: [
                "Thanh niên Mường Lầm tích cực tu dưỡng đạo đức cách mạng, sống có lý tưởng cao đẹp, trung với nước, hiếu với dân, hiếu thảo với cha mẹ.",
                "Gương mẫu đi đầu trong việc chấp hành Hiến pháp và pháp luật, tham gia giữ gìn an ninh trật tự, bài trừ tệ nạn ma túy và cờ bạc tại bản làng.",
                "Thanh niên trong độ tuổi sẵn sàng tham gia khám tuyển và thực hiện Luật Nghĩa vụ quân sự năm 2027 với tinh thần xung kích bảo vệ Tổ quốc."
            ]
        },
        part2: {
            title: "Phần II – Theo dòng lịch sử, những ngày đáng nhớ tháng 11",
            badge: "TRUYỀN THỐNG VẺ VANG",
            events: [
                {
                    date: "07/11/1917 – 07/11/2026",
                    name: "Kỷ niệm 109 năm Ngày Cách mạng Tháng Mười Nga thành công",
                    desc: "Cuộc cách mạng vô sản vĩ đại mở ra thời đại mới trong lịch sử loài người, cổ vũ mạnh mẽ phong trào giải phóng dân tộc của các nước thuộc địa, trong đó có cách mạng Việt Nam."
                },
                {
                    date: "09/11/2013 – 09/11/2026",
                    name: "Kỷ niệm 13 năm Ngày Pháp luật nước Cộng hòa xã hội chủ nghĩa Việt Nam",
                    desc: "Khẳng định vị trí, vai trò của Hiến pháp và pháp luật trong quản lý nhà nước và đời sống xã hội; nâng cao ý thức tôn trọng, bảo vệ và nghiêm chỉnh chấp hành pháp luật trong thanh niên."
                },
                {
                    date: "18/11/1930 – 18/11/2026",
                    name: "Kỷ niệm 96 năm Ngày truyền thống Mặt trận Tổ quốc Việt Nam – Ngày hội Đại đoàn kết toàn dân tộc",
                    desc: "Dịp sinh hoạt chính trị sâu rộng nhằm củng cố và phát huy sức mạnh khối đại đoàn kết toàn dân tộc tại các bản làng Tây Bắc, tăng cường tình làng nghĩa xóm."
                },
                {
                    date: "20/11/1982 – 20/11/2026",
                    name: "Kỷ niệm 44 năm Ngày Nhà giáo Việt Nam",
                    desc: "Phát huy truyền thống 'Tôn sư trọng đạo', tri ân sâu sắc công lao to lớn của các thầy giáo, cô giáo cắm bản tận tụy gieo chữ nơi non cao Mường Lầm."
                },
                {
                    date: "23/11/1940 – 23/11/2026",
                    name: "Kỷ niệm 83 năm Ngày Nam Kỳ khởi nghĩa",
                    desc: "Khúc tráng ca bất diệt của tinh thần quật khởi, bất khuất của nhân dân miền Nam, nơi lần đầu tiên lá cờ đỏ sao vàng xuất hiện tung bay kiêu hãnh."
                },
                {
                    date: "23/11/2005 – 23/11/2026",
                    name: "Kỷ niệm 18 năm Ngày Di sản Văn hóa Việt Nam",
                    desc: "Gắn với việc bảo tồn và phát huy các giá trị di sản văn hóa vật thể, phi vật thể độc đáo của các dân tộc Thái, Mông, Mường, Dao, Khơ Mú trên quê hương Sơn La."
                }
            ]
        },
        part3: {
            title: "Phần III – Chính sách mới có hiệu lực từ tháng 11/2026",
            badge: "CHÍNH SÁCH MỚI",
            shortTitle: "Phần III: Chính sách",
            policies: [
                {
                    code: "NĐ 353/2026/NĐ-CP",
                    name: "Quy định về phổ cập giáo dục mầm non cho trẻ 5–6 tuổi, giáo dục tiểu học và THCS bắt buộc",
                    desc: "Nghị định 353/2026/NĐ-CP (hiệu lực từ 01/11/2026): Nâng cao mặt bằng dân trí, bảo đảm mọi trẻ em vùng cao đều được đến trường học tập đầy đủ, không để tình trạng học sinh bỏ học giữa chừng."
                },
                {
                    code: "NĐ 371/2026/NĐ-CP",
                    name: "Tổ chức, cá nhân nước ngoài tuyển dụng lao động Việt Nam bắt buộc phải đăng tải thông tin công khai trên Sàn giao dịch việc làm quốc gia vieclam.gov.vn",
                    desc: "Nghị định 371/2026/NĐ-CP (hiệu lực từ 15/11/2026): Đảm bảo tính minh bạch thị trường lao động, bảo vệ quyền lợi hợp pháp cho người lao động và thanh niên đi làm việc có yếu tố nước ngoài."
                },
                {
                    code: "TT 81/2026/TT-BGDĐT",
                    name: "Bỏ quy định họp toàn thể cha mẹ học sinh cố định 3 lần/năm học, cho phép tổ chức họp và biểu quyết trực tuyến",
                    desc: "Thông tư 81/2026/TT-BGDĐT (hiệu lực từ 15/11/2026): Linh hoạt hình thức liên lạc giữa nhà trường và phụ huynh, ứng dụng công nghệ thông tin giúp phụ huynh đi làm xa vẫn theo dõi sát việc học của con."
                },
                {
                    code: "NQ 45/2026/NQ-CP",
                    name: "Điều chỉnh giảm thuế suất thuế tiêu thụ đặc biệt đối với các loại xăng xuống mức 0% từ ngày 01/11/2026 đến hết ngày 31/03/2027",
                    desc: "Nghị quyết 45/2026/NQ-CP (hiệu lực từ 01/11/2026 đến 31/03/2027): Hỗ trợ giảm chi phí vận tải, bình ổn thị trường giá cả và thúc đẩy lưu thông hàng hóa, nông sản của bà con nhân dân trong dịp cao điểm cuối năm."
                },
                {
                    code: "NĐ 389/2026/NĐ-CP",
                    name: "Xử phạt vi phạm hành chính trong lĩnh vực kinh doanh xổ số tối đa 100 triệu đồng với cá nhân và 200 triệu đồng với tổ chức",
                    desc: "Nghị định 389/2026/NĐ-CP (hiệu lực từ 30/11/2026): Chấn chỉnh hoạt động kinh doanh xổ số, kiên quyết xử lý các hành vi lợi dụng phát hành vé số trái phép, cờ bạc trá hình núp bóng."
                }
            ]
        },
        part4: {
            title: "Phần IV – Định hướng công tác Đoàn & Phong trào thanh thiếu nhi tháng 11/2026",
            badge: "ĐỊNH HƯỚNG HÀNH ĐỘNG",
            shortTitle: "Phần IV: Định hướng",
            highlights: [
                "Tổ chức chuỗi hoạt động hưởng ứng Ngày Pháp luật Việt Nam (09/11) tại các Chi đoàn bản và cụm trường học với chủ đề 'Thanh niên Mường Lầm sống và làm việc theo Hiến pháp và Pháp luật'.",
                "Phát động phong trào 'Hoa điểm mười dâng thầy cô' và chuỗi hoạt động 'Tri ân người gieo chữ nơi non cao' nhân kỷ niệm 44 năm Ngày Nhà giáo Việt Nam (20/11) tại các trường trên địa bàn xã.",
                "Đoàn viên thanh niên 15 bản tích cực tham gia các tiết mục văn nghệ, trò chơi dân gian mừng Ngày hội Đại đoàn kết toàn dân tộc (18/11) tại Nhà văn hóa bản.",
                "Phối hợp với Ban CHQS xã rà soát, nắm chắc nguồn thanh niên sẵn sàng nhập ngũ, tổ chức gặp gỡ động viên thanh niên ưu tú chuẩn bị tham gia nghĩa vụ quân sự năm 2027.",
                "Rà soát, tự kiểm tra và hoàn thành các chỉ tiêu thi đua công tác Đoàn năm 2026 theo Quyết định số 05 của Tỉnh đoàn và Công văn 18 của Đoàn xã Mường Lầm."
            ]
        },
        part5: {
            title: "Phần V – Khung kịch bản điều hành sinh hoạt chi đoàn mẫu (60 phút)",
            agenda: `TIẾN TRÌNH 60 PHÚT SINH HOẠT CHI ĐOÀN THÁNG 11/2026
Chủ đề: "Thanh niên với pháp luật"
---------------------------------------------------------------------------------
[00:00 - 05:00] KHỞI ĐỘNG & NGHI THỨC:
- Tập hợp lực lượng, ổn định tổ chức; kiểm tra sĩ số đoàn viên.
- Toàn thể chi đoàn thực hiện nghi thức Chào cờ, hát vang bài "Tiến quân ca" và "Thanh niên làm theo lời Bác".
- Bí thư Chi đoàn tuyên bố lý do sinh hoạt tháng 11 gắn với Ngày Pháp luật Việt Nam và tri ân thầy cô.

[05:00 - 18:00] PHẦN 1: HỌC TẬP TƯ TƯỞNG BÁC VỀ BỒI DƯỠNG THANH NIÊN & LỊCH SỬ THÁNG 11:
- Quán triệt tư tưởng Hồ Chí Minh: "Tuổi trẻ là mùa xuân của xã hội", thanh niên phải rèn đức, luyện tài.
- Điểm lại ý nghĩa lịch sử: 109 năm CM Tháng Mười Nga, 13 năm Ngày Pháp luật VN (9/11), 96 năm Ngày Đại đoàn kết (18/11), 44 năm Ngày Nhà giáo VN (20/11), 83 năm Nam Kỳ khởi nghĩa và 18 năm Ngày Di sản Văn hóa VN (23/11).

[18:00 - 30:00] PHẦN 2: PHỔ BIẾN 5 CHÍNH SÁCH MỚI CÓ HIỆU LỰC TỪ THÁNG 11/2026:
- Tuyên truyền phổ cập GD mầm non và THCS bắt buộc (NĐ 353); công khai việc làm có yếu tố nước ngoài (NĐ 371).
- Bỏ quy định họp phụ huynh cố định (TT 81); chính sách giảm thuế xăng về 0% (NQ 45) và xử phạt vé số trá hình (NĐ 389).

[30:00 - 45:00] PHẦN 3: THẢO LUẬN THANH NIÊN VỚI PHÁP LUẬT & NGHĨA VỤ QUÂN SỰ:
- Thảo luận chủ đề: Thanh niên bản ta cần làm gì để không vi phạm luật giao thông, không mắc vào tệ nạn ma túy và sẵn sàng tòng quân?
- Đoàn viên chia sẻ ý kiến, ký cam kết chi đoàn không có đoàn viên vi phạm pháp luật.

[45:00 - 55:00] PHẦN 4: TRIỂN KHAI HOẠT ĐỘNG TRI ÂN THẦY CÔ & CHUẨN BỊ TỔNG KẾT NĂM:
- Phân công lực lượng chi đoàn thăm hỏi, tặng hoa chúc mừng các thầy cô giáo cắm bản nhân ngày 20/11.
- Rà soát lại việc ghi sổ chi đoàn, chấm điểm thi đua và đánh giá xếp loại đoàn viên cuối năm trên App Thanh niên Việt Nam.

[55:00 - 60:00] TỔNG KẾT & BẾ MẠC:
- Bí thư Chi đoàn đúc kết nhiệm vụ tháng 11, phát động phong trào thi đua nước rút hoàn thành xuất sắc nhiệm vụ năm 2026.
- Bế mạc buổi sinh hoạt.`,
            discussionQuestions: [
                "Mỗi đoàn viên thanh niên trong bản cần thể hiện tinh thần 'Thượng tôn pháp luật' như thế nào trong đời sống hàng ngày?",
                "Chi đoàn ta sẽ tổ chức hoạt động tri ân các thầy giáo, cô giáo cắm bản dịp 20/11 như thế nào cho ấm áp, thiết thực?",
                "Làm thế nào để động viên các bạn thanh niên trong bản hăng hái tham gia sơ tuyển nghĩa vụ quân sự năm 2027?"
            ],
            aiTip: "Sử dụng AI để soạn thảo các lời chúc tri ân thầy cô giáo cắm bản bằng tiếng Việt và tiếng Thái song ngữ, hoặc thiết kế thiệp chúc mừng 20/11 độc đáo.",
            note: "Các Chi đoàn chuẩn bị đầy đủ sổ tay sinh hoạt chi đoàn và danh sách đoàn viên để phục vụ công tác kiểm tra, chấm điểm cuối năm của Đoàn cấp trên."
        },
        historicalSignificance: "Kỷ niệm 109 năm Cách mạng Tháng Mười Nga (07/11), 13 năm Ngày Pháp luật VN (09/11), 96 năm Ngày truyền thống Mặt trận Tổ quốc VN - Ngày hội Đại đoàn kết toàn dân tộc (18/11), 44 năm Ngày Nhà giáo Việt Nam (20/11), 83 năm Nam Kỳ khởi nghĩa (23/11) và 18 năm Ngày Di sản Văn hóa VN (23/11).",
        keyFocus: [
            "Học tập và làm theo tư tưởng Hồ Chí Minh về bồi dưỡng lý tưởng cách mạng cho thanh niên.",
            "Tổ chức chuỗi hoạt động hưởng ứng Ngày Pháp luật Việt Nam (09/11) và tri ân thầy cô cắm bản (20/11).",
            "Phổ biến 5 chính sách mới có hiệu lực từ tháng 11/2026 (NĐ 353, NĐ 371, TT 81, NQ 45, NĐ 389).",
            "Rà soát nguồn nghĩa vụ quân sự năm 2027 và hoàn thành các chỉ tiêu thi đua công tác Đoàn năm 2026."
        ],
        meetingAgenda: `TIẾN TRÌNH 60 PHÚT SINH HOẠT CHI ĐOÀN THÁNG 11/2026
Chủ đề: "Thanh niên với pháp luật"
---------------------------------------------------------------------------------
[00:00 - 05:00] Khởi động, kiểm diện đoàn viên, chào cờ, hát Đoàn ca.
[05:00 - 18:00] Phần 1: Học tập tư tưởng Bác về bồi dưỡng thanh niên & Lịch sử tháng 11.
[18:00 - 30:00] Phần 2: Phổ biến 5 chính sách mới có hiệu lực từ tháng 11/2026.
[30:00 - 45:00] Phần 3: Thảo luận Thanh niên với Pháp luật & Nghĩa vụ quân sự.
[45:00 - 55:00] Phần 4: Triển khai hoạt động tri ân thầy cô và chuẩn bị tổng kết năm.
[55:00 - 60:00] Bí thư Chi đoàn đúc kết nhiệm vụ, thư ký thông qua Nghị quyết buổi họp.`,
        discussionQuestions: [
            "Mỗi đoàn viên thanh niên trong bản cần thể hiện tinh thần 'Thượng tôn pháp luật' như thế nào trong đời sống hàng ngày?",
            "Chi đoàn ta sẽ tổ chức hoạt động tri ân các thầy giáo, cô giáo cắm bản dịp 20/11 như thế nào cho ấm áp, thiết thực?",
            "Làm thế nào để động viên các bạn thanh niên trong bản hăng hái tham gia sơ tuyển nghĩa vụ quân sự năm 2027?"
        ],
        aiTip: "Sử dụng AI để soạn thảo các lời chúc tri ân thầy cô giáo cắm bản bằng tiếng Việt và tiếng Thái song ngữ, hoặc thiết kế thiệp chúc mừng 20/11 độc đáo.",
        documents: [
            { name: "Đề cương tuyên truyền Ngày Pháp luật nước CHXHCN Việt Nam (09/11/2026)", size: "1.8 MB", type: "PDF" },
            { name: "Kế hoạch tổ chức các hoạt động tri ân thầy cô giáo cắm bản nhân ngày Nhà giáo Việt Nam 20/11", size: "900 KB", type: "DOCX" },
            { name: "Tài liệu tuyên truyền Luật Nghĩa vụ quân sự và Luật Di sản văn hóa cho thanh niên", size: "2.4 MB", type: "PDF" }
        ]
    },
{
        month: 12,
        isBlank: true,
        statusBadge: "Đang chờ ban hành từ Tỉnh đoàn Sơn La",
        statusClass: "status-pending",
        title: "Tháng 12/2026 (Đang chờ ban hành từ Tỉnh đoàn Sơn La)",
        tagline: "Nội dung đang được để trống chờ định hướng, chỉ đạo chính thức về công tác tổng kết năm từ Ban Thường vụ Tỉnh đoàn Sơn La",
        officialRef: "Chờ văn bản hướng dẫn tổng kết công tác Đoàn năm 2026 của Ban Thường vụ Tỉnh đoàn Sơn La",
        part1: {
            title: "Phần I: Học tập & làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh",
            topic: "[Nội dung đang chờ ban hành từ Tỉnh đoàn Sơn La]",
            content: "Nội dung học tập và làm theo Bác chuyên đề Tháng 12 đang chờ định hướng chính thức từ Tỉnh đoàn Sơn La.",
            actionPoints: [
                "Chờ văn bản hướng dẫn chính thức từ Tỉnh đoàn Sơn La và Đoàn cấp trên.",
                "Cán bộ Đoàn có thể nhấp nút 'Bổ sung tài liệu Tháng 12' ở góc trên để cập nhật sớm."
            ]
        },
        part2: {
            title: "Phần II: Theo dòng lịch sử & Ngày này năm xưa",
            events: [
                {
                    date: "Tháng 12/2026",
                    name: "Kỷ niệm 82 năm Ngày thành lập Quân đội nhân dân Việt Nam (22/12/1944 – 22/12/2026) & 37 năm Ngày hội Quốc phòng toàn dân",
                    desc: "Nội dung chi tiết theo định hướng tuyên truyền của Tỉnh đoàn Sơn La sẽ được cập nhật ngay khi ban hành."
                }
            ]
        },
        part3: {
            title: "Phần III: Chính sách, pháp luật mới có hiệu lực",
            policies: [
                {
                    code: "Chính sách mới",
                    title: "Đang tổng hợp các văn bản chính sách có hiệu lực từ Tháng 12/2026",
                    desc: "Hệ thống sẽ tự động cập nhật danh mục chính sách mới ngay khi có thông báo chính thức."
                }
            ]
        },
        part4: {
            title: "Phần IV: Chuyên đề đặc biệt & Định hướng tuyên truyền",
            highlights: [
                "Tổng kết công tác Đoàn và phong trào thanh thiếu nhi năm 2026.",
                "Đánh giá, xếp loại thi đua các chi đoàn bản, chi đoàn trường học và chi đoàn cơ quan.",
                "Phát động đợt thi đua cao điểm chào mừng kỷ niệm Ngày thành lập Đảng và đón Tết Nguyên đán 2027.",
                "Chăm lo các hoạt động tình nguyện mùa đông và an sinh xã hội cuối năm cho bà con bản nghèo."
            ]
        },
        part5: {
            title: "Phần V: Khung kịch bản điều hành sinh hoạt chi đoàn & Gợi ý thảo luận",
            agenda: `[NỘI DUNG ĐANG ĐỂ TRỐNG - CHỜ BAN HÀNH TỪ TỈNH ĐOÀN SƠN LA]
Khung kịch bản sinh hoạt chi đoàn Tháng 12/2026 hiện đang để trống.
Bí thư Chi đoàn và cán bộ Đoàn vui lòng:
- Theo dõi các thông báo trên Fanpage chính thức: "ĐOÀN XÃ MƯỜNG LẦM"
- Hoặc liên hệ Thường trực Đoàn xã qua Hotline: 035.444.2054
- Địa chỉ Gmail tiếp nhận thông tin: doanxamuonglam@gmail.com
- Cán bộ Đoàn / Admin có thể nhấp nút "Bổ sung tài liệu Tháng 12" ở phía trên để nạp kịch bản cập nhật.`,
            discussionQuestions: [
                "Đang cập nhật câu hỏi thảo luận cho Tháng 12/2026..."
            ],
            aiTip: "Chờ cập nhật mẹo ứng dụng AI cho Tháng 12..."
        },
        documents: [],
        historicalSignificance: "Đang chờ cập nhật văn bản định hướng tuyên truyền Tháng 12 từ Tỉnh đoàn Sơn La...",
        keyFocus: [
            "Nội dung chuyên đề Tháng 12 đang được Ban Thường vụ Đoàn xã Mường Lầm tổng hợp và cập nhật trong thời gian tới.",
            "Nội dung trọng tâm dự kiến: Tổng kết công tác Đoàn năm 2026, đánh giá xếp loại thi đua chi đoàn và phát động đợt thi đua năm mới.",
            "Các chi đoàn cơ sở và chi đoàn bản vui lòng liên hệ Thường trực Đoàn xã để nhận văn bản hướng dẫn trực tiếp khi có thông báo mới."
        ],
        meetingAgenda: `[NỘI DUNG ĐANG ĐỂ TRỐNG - ĐANG CẬP NHẬT]
Khung kịch bản sinh hoạt chi đoàn Tháng 12 đang chờ định hướng, chỉ đạo chính thức của Đoàn cấp trên và Tỉnh đoàn Sơn La.
Hotline Thường trực Đoàn xã: 035.444.2054 | Gmail: doanxamuonglam@gmail.com`,
        discussionQuestions: [
            "Đang cập nhật câu hỏi thảo luận cho Tháng 12..."
        ],
        aiTip: "Chờ cập nhật mẹo ứng dụng AI cho Tháng 12...",
        documents: []
    }
];



// ===================================================================
// 13. CHUYÊN MỤC MINH CHỨNG CÔNG TÁC ĐOÀN & PHONG TRÀO TTN NĂM 2026
// Căn cứ Quyết định số 05-QĐ/TĐTN-CTĐ&TTN của Tỉnh đoàn Sơn La
// và Công văn đăng ký số 18-CV/ĐTN của BCH Đoàn xã Mường Lầm
// Người ký duyệt: TM. BAN CHẤP HÀNH ĐOÀN XÃ - BÍ THƯ LÒ MẠNH QUYỀN
// ===================================================================

const PROOF_CRITERIA_LIST = [
    { id: "all", name: "Tất cả 12 Tiêu chí minh chứng", count: 14 },
    { id: "bat-buoc", name: "A. Điều kiện bắt buộc (3 Tiêu chí - 5 Link)", count: 5 },
    { id: "chu-dong", name: "B. 11 Nhóm giải pháp chủ động (9 Tiêu chí)", count: 9 }
];

const INITIAL_PROOF_ARTICLES = [
    {
        id: "mc-tc-2-2",
        slug: "ngay-chu-nhat-xanh-dong-loat-4-dot-2026",
        group: "bat-buoc",
        groupName: "Điều kiện bắt buộc (Phần 1)",
        criteriaCode: "Tiêu chí 2.2",
        criteriaName: "Ngày Chủ nhật xanh đồng loạt toàn quốc",
        points: "4.0 điểm",
        legalRef: "Quyết định số 05-QĐ/TĐTN-CTĐ&TTN & Công văn 18-CV/ĐTN Đoàn xã Mường Lầm",
        title: "Minh chứng tổ chức ra quân đồng loạt 04 đợt 'Ngày Chủ nhật xanh' năm 2026 trên địa bàn 15 bản xã Mường Lầm",
        date: "Đợt 1 (22/3) • Đợt 2 (24/5) • Đợt 3 (26/7) • Đợt 4 (20/9/2026)",
        location: "15 Bản làng và các tuyến suối tự quản xã Mường Lầm",
        leadUnit: "Ban Chấp hành Đoàn xã Mường Lầm",
        coUnit: "Chi đoàn Công an xã, Đoàn Trường THPT Mường Lầm, Cấp ủy Chi bộ 15 bản",
        participantCount: "485 lượt đoàn viên, thanh thiếu nhi tham gia",
        reachRate: "Đạt 38.8% tổng số đoàn viên, thanh niên toàn xã (vượt chỉ tiêu quy định)",
        signer: "TM. BCH ĐOÀN XÃ - BÍ THƯ LÒ MẠNH QUYỀN",
        keHoachDoc: "Kế hoạch số 08-KH/ĐTN ngày 10/3/2026 về tổ chức ra quân Ngày Chủ nhật xanh năm 2026",
        baoCaoDoc: "Báo cáo số 22-BC/ĐTN ngày 22/9/2026 có xác nhận của Cấp ủy - UBND xã Mường Lầm",
        thumbnail: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&auto=format&fit=crop&q=80",
        summary: "Đoàn xã Mường Lầm đã tổ chức đồng loạt 4/4 đợt Ngày Chủ nhật xanh trong năm 2026 vào các ngày 22/3, 24/5, 26/7 và 20/9; thu dọn hơn 18km đường liên bản, nạo vét kênh mương và khơi thông dòng suối.",
        content: `Căn cứ Quyết định số 05-QĐ/TĐTN-CTĐ&TTN của Ban Thường vụ Tỉnh đoàn Sơn La và Công văn đăng ký số 18-CV/ĐTN của Đoàn xã Mường Lầm;
        
Đoàn TNCS Hồ Chí Minh xã Mường Lầm đã xây dựng Kế hoạch và chỉ đạo 15 chi đoàn bản, 01 Đoàn trường THPT và 06 chi đoàn cơ sở tổ chức đồng loạt 04 đợt "Ngày Chủ nhật xanh" trong năm 2026:
- Đợt 1 (Ngày 22/3/2026): Ra quân cao điểm Tháng Thanh niên tại Bản Lốm Hỏm, Bản Mường Nưa; phát quang 5.5km đường giao thông, nạo vét 2.8km mương dẫn nước.
- Đợt 2 (Ngày 24/5/2026): Hưởng ứng Tuần lễ Quốc gia Nước sạch và Vệ sinh môi trường; thu gom hơn 450kg rác thải nhựa tại chợ trung tâm xã và dọc bến suối.
- Đợt 3 (Ngày 26/7/2026): Đợt cao điểm "Đền ơn đáp nghĩa - Uống nước nhớ nguồn"; vệ sinh đài tưởng niệm liệt sĩ xã và khuôn viên nhà văn hóa 15 bản.
- Đợt 4 (Ngày 20/9/2026): Hưởng ứng Chiến dịch Làm cho thế giới sạch hơn; khơi thông các điểm sạt lở mùa mưa tại Bản Co Mạ, Bản Hua Mường, Bản Đứa Lốc.

KẾT QUẢ ĐẠT ĐƯỢC:
- Tổng số ĐVTN tham gia qua 4 đợt: 485 lượt đoàn viên, thanh niên (đạt 38.8% tổng số ĐVTN toàn xã).
- Tổng khối lượng rác thải thu gom xử lý: 1.8 tấn.
- Trồng mới 350 cây xanh và hoa ban dọc tuyến đường thanh niên tự quản.`
    },
    {
        id: "mc-tc-4-8-1",
        slug: "giai-phap-cong-nghe-so-tap-hop-thanh-nien",
        group: "bat-buoc",
        groupName: "Điều kiện bắt buộc (Phần 1)",
        criteriaCode: "Tiêu chí 4.8.1",
        criteriaName: "Ứng dụng công nghệ số trong tuyên truyền & tập hợp thanh niên",
        points: "4.0 điểm",
        legalRef: "Quyết định số 05-QĐ/TĐTN-CTĐ&TTN & Công văn 18-CV/ĐTN Đoàn xã Mường Lầm",
        title: "Minh chứng Cổng thông tin điện tử Đoàn xã Mường Lầm và lớp tập huấn AI tập hợp trên 30% ĐVTN",
        date: "Thường xuyên từ Tháng 3 đến Tháng 11/2026",
        location: "Cổng thông tin số Đoàn xã & Nhà văn hóa 15 Bản làng",
        leadUnit: "Ban Chấp hành Đoàn xã Mường Lầm",
        coUnit: "Tổ Công nghệ số Thanh niên 15 bản & Đoàn trường THPT Mường Lầm",
        participantCount: "560+ lượt ĐVTN tiếp cận và học kỹ năng AI",
        reachRate: "Đạt 44.8% tổng số đoàn viên toàn xã (chỉ tiêu Tỉnh đoàn yêu cầu: > 30%)",
        signer: "TM. BCH ĐOÀN XÃ - BÍ THƯ LÒ MẠNH QUYỀN",
        keHoachDoc: "Kế hoạch số 12-KH/ĐTN ngày 15/3/2026 về Chuyển đổi số trong công tác Đoàn và tập huấn AI",
        baoCaoDoc: "Báo cáo số 25-BC/ĐTN ngày 10/11/2026 về kết quả ứng dụng công nghệ số tập hợp thanh niên",
        thumbnail: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&auto=format&fit=crop&q=80",
        summary: "Xây dựng Cổng thông tin điện tử chính thức, phổ cập kỹ năng AI cơ bản và sổ tay chi đoàn số hóa, thu hút 560+ ĐVTN (đạt 44.8%) tham gia học tập, tra cứu tài liệu và đăng ký trực tuyến.",
        content: `Thực hiện Tiêu chí 4.8.1 theo Quyết định số 05-QĐ/TĐTN-CTĐ&TTN của Tỉnh đoàn Sơn La; Ban Chấp hành Đoàn xã Mường Lầm đã chủ động nghiên cứu và triển khai giải pháp chuyển đổi số toàn diện:
1. Xây dựng Cổng Thông Tin Điện Tử chính thức chạy mượt mà trên nền tảng mạng di động 3G/4G yếu của vùng cao, tích hợp đầy đủ các phân hệ tin tức, thư viện prompt AI, đăng ký tình nguyện và kho tài liệu chi đoàn.
2. Tổ chức 04 lớp tập huấn kỹ năng AI thực chiến (ChatGPT, Google Gemini, Canva) giúp đoàn viên thanh niên biết cách viết prompt bán nhãn Mường Lầm, tạo bài truyền thông phòng chống lừa đảo và soạn thảo văn kiện.
3. Số hóa 100% tài liệu sinh hoạt chi đoàn 12 tháng qua mã QR niêm yết tại Nhà văn hóa 15 bản.

SỐ LIỆU MINH CHỨNG:
- Số lượng ĐVTN tiếp cận, tra cứu Cổng thông tin và tham gia tập huấn: 560 lượt người.
- Tỷ lệ tiếp cận: 560 / 1.250 ĐVTN = 44.8% (vượt xa chỉ tiêu Tỉnh đoàn giao là trên 30%).`
    },
    {
        id: "mc-tc-4-8-2-kt",
        slug: "hoat-dong-thanh-nien-khuyet-tat-yeu-the",
        group: "bat-buoc",
        groupName: "Điều kiện bắt buộc (Phần 1 - Link độc lập 1/3)",
        criteriaCode: "Tiêu chí 4.8.2.a",
        criteriaName: "Hoạt động cho đối tượng thanh niên khuyết tật, yếu thế",
        points: "2.0 điểm",
        legalRef: "Quyết định số 05-QĐ/TĐTN-CTĐ&TTN & Công văn 18-CV/ĐTN Đoàn xã Mường Lầm",
        title: "Minh chứng Chương trình 'Vòng tay nhân ái - Đồng hành cùng thanh niên khuyết tật, yếu thế vươn lên hòa nhập'",
        date: "Ngày 18/04/2026 (Hưởng ứng Ngày Người khuyết tật Việt Nam)",
        location: "Bản Lốm Hỏm, Bản Mường Tợ và Bản Huổi Lếch",
        leadUnit: "Ban Chấp hành Đoàn xã Mường Lầm",
        coUnit: "Hội Chữ thập đỏ xã, Trạm Y tế xã Mường Lầm",
        participantCount: "28 đoàn viên, thanh niên tình nguyện & 12 thanh niên khuyết tật",
        reachRate: "100% thanh niên khuyết tật trên địa bàn xã được thăm hỏi, tặng quà và hỗ trợ",
        signer: "TM. BCH ĐOÀN XÃ - BÍ THƯ LÒ MẠNH QUYỀN",
        keHoachDoc: "Kế hoạch số 15-KH/ĐTN ngày 05/4/2026 về Chăm lo đồng hành với thanh niên khuyết tật",
        baoCaoDoc: "Báo cáo số 19-BC/ĐTN ngày 20/4/2026 có xác nhận của Cấp ủy - UBND xã Mường Lầm",
        thumbnail: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&auto=format&fit=crop&q=80",
        summary: "Đoàn xã đã tổ chức chương trình thăm hỏi, tặng quà, hỗ trợ sinh kế và hướng dẫn sử dụng điện thoại thông minh tiếp cận thông tin cho 12/12 thanh niên khuyết tật trên địa bàn.",
        content: `Nhằm đảm bảo quyền lợi và hỗ trợ thanh niên yếu thế, ngày 18/4/2026, Đoàn xã Mường Lầm đã tổ chức chương trình tình nguyện chuyên biệt cho thanh niên khuyết tật:
- Trao tặng 12 suất quà (mỗi suất trị giá 500.000 đồng) gồm nhu yếu phẩm và tiền mặt cho 12 thanh niên khuyết tật tại các bản Lốm Hỏm, Mường Tợ, Huổi Lếch.
- Cử đoàn viên Chi đoàn Y tế hỗ trợ khám bệnh, cấp phát thuốc miễn phí tại nhà.
- Tổ công nghệ số thanh niên hướng dẫn thanh niên khuyết tật vận động cách sử dụng các ứng dụng đọc báo, nghe tin tức trên smartphone để hòa nhập cộng đồng số.

Hoạt động mang tính nhân văn sâu sắc, thể hiện tinh thần "Không để bất kỳ thanh niên nào bị bỏ lại phía sau".`
    },
    {
        id: "mc-tc-4-8-2-dt",
        slug: "hoat-dong-thanh-nien-dan-toc-thieu-so-ton-giao",
        group: "bat-buoc",
        groupName: "Điều kiện bắt buộc (Phần 1 - Link độc lập 2/3)",
        criteriaCode: "Tiêu chí 4.8.2.b",
        criteriaName: "Hoạt động cho thanh niên dân tộc thiểu số, tín đồ tôn giáo",
        points: "2.0 điểm",
        legalRef: "Quyết định số 05-QĐ/TĐTN-CTĐ&TTN & Công văn 18-CV/ĐTN Đoàn xã Mường Lầm",
        title: "Minh chứng Ngày hội 'Tuổi trẻ Mường Lầm giữ gìn bản sắc văn hóa dân tộc Thái, Mông và sống tốt đời đẹp đạo'",
        date: "Ngày 15/10/2026 (Kỷ niệm Ngày truyền thống Hội LHTN Việt Nam)",
        location: "Sân vận động Trung tâm xã Mường Lầm",
        leadUnit: "Ban Chấp hành Đoàn xã Mường Lầm",
        coUnit: "Ủy ban MTTQ Việt Nam xã, Ban Văn hóa xã Mường Lầm",
        participantCount: "320 đoàn viên thanh niên dân tộc thiểu số và tín đồ tôn giáo",
        reachRate: "Đạt 45% tổng số ĐVTN khối nông thôn vùng đồng bào DTTS",
        signer: "TM. BCH ĐOÀN XÃ - BÍ THƯ LÒ MẠNH QUYỀN",
        keHoachDoc: "Kế hoạch số 26-KH/ĐTN ngày 28/9/2026 về Tổ chức Ngày hội Thanh niên dân tộc thiểu số",
        baoCaoDoc: "Báo cáo số 31-BC/ĐTN ngày 18/10/2026 có xác nhận của Cấp ủy - UBND xã Mường Lầm",
        thumbnail: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800&auto=format&fit=crop&q=80",
        summary: "Hội thi trình diễn trang phục dân tộc Thái - Mông, thi ẩm thực truyền thống, giao lưu thể thao dân gian (ném còn, tó má lẹ) và tuyên truyền sống tốt đời đẹp đạo, chấp hành pháp luật.",
        content: `Chương trình được tổ chức quy mô lớn nhằm thắt chặt khối đại đoàn kết các dân tộc trên địa bàn xã Mường Lầm:
- Thu hút 320 đoàn viên thanh niên đến từ 15 bản, bao gồm cả đồng bào dân tộc Thái, Mông và thanh niên có đạo.
- Tổ chức thi đấu các môn thể thao dân tộc: Đẩy gậy, kéo co, bắn nỏ, ném còn; thi trình diễn trang phục truyền thống và ẩm thực xôi ngũ sắc, cá nướng Pa pỉnh tộp.
- Tuyên truyền chủ trương, chính sách dân tộc, tôn giáo của Đảng, Nhà nước; vận động thanh niên không nghe theo lời kẻ xấu kích động, giữ gìn an ninh trật tự bản làng.`
    },
    {
        id: "mc-tc-4-8-2-xq",
        slug: "hoat-dong-thanh-nien-di-lam-an-xa-kcn",
        group: "bat-buoc",
        groupName: "Điều kiện bắt buộc (Phần 1 - Link độc lập 3/3)",
        criteriaCode: "Tiêu chí 4.8.2.c",
        criteriaName: "Hoạt động cho đối tượng thanh niên đi làm ăn xa tại các KCN",
        points: "2.0 điểm",
        legalRef: "Quyết định số 05-QĐ/TĐTN-CTĐ&TTN & Công văn 18-CV/ĐTN Đoàn xã Mường Lầm",
        title: "Minh chứng Diễn đàn trực tuyến 'Nhịp cầu Tuổi trẻ Mường Lầm xa quê - Hướng về bản làng thân yêu'",
        date: "Ngày 01/11/2026 (Sinh hoạt chuyên đề quý IV)",
        location: "Trực tuyến qua Google Meet và nhóm Zalo Cầu nối xa quê",
        leadUnit: "Ban Chấp hành Đoàn xã Mường Lầm",
        coUnit: "Tổ Công tác Thanh niên xa quê & Chi đoàn Công an xã",
        participantCount: "195 đoàn viên thanh niên làm việc tại Bắc Ninh, Bắc Giang, Hà Nội",
        reachRate: "Đạt 62.9% tổng số thanh niên Mường Lầm đi làm ăn xa (195 / 310 thanh niên)",
        signer: "TM. BCH ĐOÀN XÃ - BÍ THƯ LÒ MẠNH QUYỀN",
        keHoachDoc: "Kế hoạch số 29-KH/ĐTN ngày 15/10/2026 về Tổ chức diễn đàn trực tuyến cho thanh niên xa quê",
        baoCaoDoc: "Báo cáo số 34-BC/ĐTN ngày 03/11/2026 có xác nhận của Cấp ủy - UBND xã Mường Lầm",
        thumbnail: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&auto=format&fit=crop&q=80",
        summary: "Buổi sinh hoạt trực tuyến kết nối gần 200 đoàn viên Mường Lầm tại các KCN, hỗ trợ thủ tục Dịch vụ công trực tuyến, hướng dẫn VNeID mức 2 và thành lập Quỹ tương trợ đồng hương.",
        content: `Mô hình "Chi đoàn số xa quê" được Đoàn xã duy trì định kỳ:
- Họp mặt trực tuyến 195 bạn trẻ đang làm công nhân tại các KCN Yên Phong (Bắc Ninh), Quang Châu (Bắc Giang), Thăng Long (Hà Nội).
- Thông tin về tình hình phát triển của quê hương xã Mường Lầm, giá bán nông sản vụ nhãn, các chính sách ưu đãi của địa phương.
- Hướng dẫn giải quyết thủ tục đăng ký nghĩa vụ quân sự, cấp giấy xác nhận tình trạng hôn nhân qua cổng Dịch vụ công Quốc gia từ xa.
- Cảnh báo bẫy lừa đảo việc làm và cho vay nặng lãi qua app đen.`
    },
    {
        id: "mc-nhom-1",
        slug: "nhom-1-tang-ty-le-doan-ket-tap-hop-thanh-nien",
        group: "chu-dong",
        groupName: "11 Nhóm giải pháp đăng ký chủ động (Phần 2)",
        criteriaCode: "Nhóm 1",
        criteriaName: "Tăng tỷ lệ đoàn kết tập hợp thanh niên",
        points: "10.0 điểm",
        legalRef: "Quyết định số 05-QĐ/TĐTN-CTĐ&TTN & Công văn 18-CV/ĐTN Đoàn xã Mường Lầm",
        title: "Minh chứng Ngày hội Văn hóa - Thể thao thanh niên các dân tộc xã Mường Lầm & Điểm danh QR Code tăng trên 5% tỷ lệ tập hợp",
        date: "Ngày 26/03/2026 (Chào mừng Ngày thành lập Đoàn TNCS Hồ Chí Minh)",
        location: "Khu liên hợp Thể thao - Văn hóa xã Mường Lầm",
        leadUnit: "Ban Chấp hành Đoàn xã Mường Lầm",
        coUnit: "UBND xã Mường Lầm & Đoàn Trường THPT Mường Lầm",
        participantCount: "420 đoàn viên thanh niên tham gia chính thức",
        reachRate: "Tỷ lệ tập hợp thanh niên toàn xã tăng 5.8% so với đầu năm 2026",
        signer: "TM. BCH ĐOÀN XÃ - BÍ THƯ LÒ MẠNH QUYỀN",
        keHoachDoc: "Kế hoạch số 09-KH/ĐTN ngày 01/3/2026 về Ngày hội Văn hóa Thể thao thanh niên 26/3",
        baoCaoDoc: "Báo cáo số 16-BC/ĐTN ngày 30/3/2026 kèm Bảng đối chiếu số liệu điểm danh số QR Code",
        thumbnail: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&auto=format&fit=crop&q=80",
        summary: "Ứng dụng quét mã QR điểm danh tự động, tổ chức thi bóng đá nam, kéo co, văn nghệ múa xòe kết hợp kết nạp lớp đoàn viên 26/3, đưa tỷ lệ đoàn kết tập hợp thanh niên xã tăng 5.8%.",
        content: `Báo cáo thực hiện giải pháp đăng ký Nhóm 1 theo Công văn 18-CV/ĐTN:
- Tổ chức Ngày hội thanh niên quy tụ 420 ĐVTN từ 15 bản và 7 cơ sở Đoàn.
- 100% đoàn viên tham gia được điểm danh bằng mã QR cá nhân trên hệ thống Cổng thông tin Đoàn xã, xuất dữ liệu đối chiếu chính xác.
- Tỷ lệ đoàn kết tập hợp thanh niên toàn xã được nâng từ 61.2% (tháng 12/2025) lên 67.0% (tháng 10/2026), đạt mức tăng 5.8% (vượt chỉ tiêu đăng ký > 5%).`
    },
    {
        id: "mc-nhom-2",
        slug: "nhom-2-phong-chong-toi-pham-nq-66-hom-thu-dien-tu",
        group: "chu-dong",
        groupName: "11 Nhóm giải pháp đăng ký chủ động (Phần 2)",
        criteriaCode: "Nhóm 2",
        criteriaName: "Phòng chống tội phạm, tệ nạn xã hội (Nghị quyết 66-NQ/TW)",
        points: "10.0 điểm",
        legalRef: "Quyết định số 05-QĐ/TĐTN-CTĐ&TTN & Công văn 18-CV/ĐTN Đoàn xã Mường Lầm",
        title: "Minh chứng Mô hình 'Hòm thư tố giác tội phạm điện tử qua mã QR' và 02 buổi tuyên truyền pháp luật phối hợp Công an xã",
        date: "Đợt 1 (18/5) • Đợt 2 (19/8/2026)",
        location: "Nhà văn hóa 15 Bản làng và Trường THPT Mường Lầm",
        leadUnit: "BCH Đoàn xã Mường Lầm & Chi đoàn Công an xã Mường Lầm",
        coUnit: "Công an xã Mường Lầm, Đội CSĐT Công an",
        participantCount: "680 lượt ĐVTN, học sinh và nhân dân tham gia",
        reachRate: "Tiếp nhận và xử lý an toàn 14 tin báo phản ánh tội phạm, ma túy",
        signer: "TM. BCH ĐOÀN XÃ - BÍ THƯ LÒ MẠNH QUYỀN",
        keHoachDoc: "Kế hoạch phối hợp số 04-KHPH/ĐTN-CA ngày 10/4/2026 về Phòng chống tội phạm ma túy",
        baoCaoDoc: "Báo cáo số 24-BC/ĐTN ngày 25/8/2026 có xác nhận của Công an xã Mường Lầm",
        thumbnail: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=80",
        summary: "Triển khai bảng mã QR 'Hòm thư số tố giác tội phạm ẩn danh' dán tại 15 bản và tổ chức 2 hội nghị tuyên truyền phòng chống ma túy, tệ nạn cờ bạc qua mạng cho 680 lượt thanh thiếu nhi.",
        content: `Giải pháp đột phá ứng dụng công nghệ thực hiện Nghị quyết số 66-NQ/TW:
- Tạo biểu mẫu Google Form mã hóa bảo mật kèm mã QR "Hòm thư tố giác tội phạm số" dán tại Nhà văn hóa 15 bản. Người dân và thanh niên có thể gửi tin báo hình ảnh, video ẩn danh mà không sợ bị trả thù.
- Đã tiếp nhận 14 nguồn tin có giá trị, chuyển Công an xã xử lý 02 vụ việc liên quan đến mua bán trái phép chất ma túy và 01 vụ đánh bạc trực tuyến.
- Tổ chức 02 buổi ký cam kết "Chi đoàn bản không có đoàn viên vướng vào tệ nạn ma túy và vi phạm an toàn giao thông".`
    },
    {
        id: "mc-nhom-3",
        slug: "nhom-3-hoi-nhap-quoc-te-nq-59-tieng-anh-cong-dong",
        group: "chu-dong",
        groupName: "11 Nhóm giải pháp đăng ký chủ động (Phần 2)",
        criteriaCode: "Nhóm 3",
        criteriaName: "Nâng cao năng lực hội nhập quốc tế (Nghị quyết 59-NQ/TW)",
        points: "10.0 điểm",
        legalRef: "Quyết định số 05-QĐ/TĐTN-CTĐ&TTN & Công văn 18-CV/ĐTN Đoàn xã Mường Lầm",
        title: "Minh chứng 'Ngày hội giao lưu văn hóa quốc tế & Câu lạc bộ Tiếng Anh cộng đồng' cho thanh thiếu nhi vùng cao",
        date: "Ngày 20/07/2026 (Trong Chiến dịch Thanh niên tình nguyện Hè)",
        location: "Điểm trường Bản Đứa Mòn và Trường THPT Mường Lầm",
        leadUnit: "Ban Chấp hành Đoàn xã Mường Lầm",
        coUnit: "Chi đoàn GV Trường THPT Mường Lầm & Đội SV Tình nguyện Đại học",
        participantCount: "145 học sinh, thanh thiếu nhi dân tộc thiểu số",
        reachRate: "100% học sinh tham gia được trang bị tài liệu giao tiếp cơ bản",
        signer: "TM. BCH ĐOÀN XÃ - BÍ THƯ LÒ MẠNH QUYỀN",
        keHoachDoc: "Kế hoạch số 18-KH/ĐTN ngày 01/7/2026 về Nâng cao năng lực ngoại ngữ cho TTN Mường Lầm",
        baoCaoDoc: "Báo cáo số 23-BC/ĐTN ngày 28/7/2026 có xác nhận của Ban Giám hiệu trường học",
        thumbnail: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop&q=80",
        summary: "Thành lập CLB Tiếng Anh cộng đồng, tổ chức học phát âm qua ứng dụng AI trên điện thoại và ngày hội tìm hiểu văn hóa các nước ASEAN cho học sinh vùng cao.",
        content: `Thực hiện giải pháp nâng cao năng lực hội nhập quốc tế theo Nghị quyết 59-NQ/TW:
- Đoàn xã đã thành lập "Câu lạc bộ Tiếng Anh bản làng" sinh hoạt định kỳ vào sáng thứ Bảy hàng tuần.
- Hướng dẫn các em học sinh cài đặt ứng dụng Elsa Speak và ChatGPT phiên bản miễn phí để luyện phát âm và giao tiếp hàng ngày.
- Tổ chức Ngày hội giao lưu văn hóa ASEAN: Triển lãm tranh vẽ, thi đố vui tiếng Anh và giới thiệu trang phục văn hóa các nước Đông Nam Á.`
    },
    {
        id: "mc-nhom-4",
        slug: "nhom-4-doi-moi-phuong-thuc-hoat-dong-ai-infographic",
        group: "chu-dong",
        groupName: "11 Nhóm giải pháp đăng ký chủ động (Phần 2)",
        criteriaCode: "Nhóm 4",
        criteriaName: "Đổi mới phương thức hoạt động của Đoàn cơ sở",
        points: "10.0 điểm",
        legalRef: "Quyết định số 05-QĐ/TĐTN-CTĐ&TTN & Công văn 18-CV/ĐTN Đoàn xã Mường Lầm",
        title: "Minh chứng Lớp tập huấn kỹ năng AI (ChatGPT, Canva, CapCut) cho Bí thư Chi đoàn 15 bản và số hóa 100% tài liệu Infographic",
        date: "Ngày 12/03/2026 & duy trì xuyên suốt năm 2026",
        location: "Hội trường UBND xã Mường Lầm & Nền tảng số",
        leadUnit: "Ban Chấp hành Đoàn xã Mường Lầm",
        coUnit: "Tổ Công nghệ số Thanh niên xã",
        participantCount: "22/22 Bí thư Chi đoàn trực thuộc tham dự đầy đủ",
        reachRate: "100% Chi đoàn chuyển đổi phương thức họp từ giấy sang Infographic số",
        signer: "TM. BCH ĐOÀN XÃ - BÍ THƯ LÒ MẠNH QUYỀN",
        keHoachDoc: "Kế hoạch số 07-KH/ĐTN ngày 25/2/2026 về Đổi mới phương thức sinh hoạt Đoàn thời đại 4.0",
        baoCaoDoc: "Báo cáo số 15-BC/ĐTN ngày 20/3/2026 có xác nhận của Cấp ủy xã Mường Lầm",
        thumbnail: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&auto=format&fit=crop&q=80",
        summary: "100% Bí thư chi đoàn 15 bản làm chủ kỹ năng soạn thảo kịch bản bằng AI, thiết kế Infographic bằng Canva và phát tài liệu sinh hoạt qua mã QR Zalo, tiết kiệm 85% chi phí in ấn giấy tờ.",
        content: `Đổi mới mang tính bước ngoặt trong lề lối làm việc của Đoàn cơ sở:
- Đoàn xã tổ chức tập huấn "cầm tay chỉ việc" cho đội ngũ Bí thư Chi đoàn 15 bản: Hướng dẫn cài app ChatGPT, Canva trên smartphone.
- 100% tài liệu sinh hoạt từ Tháng 1 đến Tháng 11 được thiết kế trực quan dạng ảnh Infographic (dưới 300KB) thay vì văn bản Word dài dòng hàng chục trang.
- Bí thư chi đoàn chỉ cần trình chiếu trên điện thoại hoặc gửi vào nhóm Zalo bản trước giờ họp 15 phút, giúp buổi sinh hoạt chi đoàn sôi nổi, ngắn gọn, cuốn hút.`
    },
    {
        id: "mc-nhom-5",
        slug: "nhom-5-giao-duc-ly-tuong-cach-mang-ban-tin-ai-dia-chi-do",
        group: "chu-dong",
        groupName: "11 Nhóm giải pháp đăng ký chủ động (Phần 2)",
        criteriaCode: "Nhom 5",
        criteriaName: "Giáo dục lý tưởng cách mạng, đạo đức lối sống cho TTN",
        points: "10.0 điểm",
        legalRef: "Quyết định số 05-QĐ/TĐTN-CTĐ&TTN & Công văn 18-CV/ĐTN Đoàn xã Mường Lầm",
        title: "Minh chứng Chuyên mục 'Bản tin số Tuổi trẻ Mường Lầm' video AI và Lễ kết nạp Đoàn viên tại Khu di tích lịch sử địa chỉ đỏ",
        date: "Ngày 19/05/2026 (Kỷ niệm 136 năm Ngày sinh Chủ tịch Hồ Chí Minh)",
        location: "Khu di tích lịch sử cách mạng & Kênh truyền thông số Đoàn xã",
        leadUnit: "Ban Chấp hành Đoàn xã Mường Lầm",
        coUnit: "Hội Cựu chiến binh xã & Đoàn trường THPT Mường Lầm",
        participantCount: "390 đoàn viên thanh niên tham gia trực tiếp và trực tuyến",
        reachRate: "Đạt 31.2% tổng số ĐVTN toàn xã (chỉ tiêu đăng ký: > 30%)",
        signer: "TM. BCH ĐOÀN XÃ - BÍ THƯ LÒ MẠNH QUYỀN",
        keHoachDoc: "Kế hoạch số 14-KH/ĐTN ngày 25/4/2026 về Giáo dục truyền thống và Kết nạp đoàn viên mới",
        baoCaoDoc: "Báo cáo số 21-BC/ĐTN ngày 22/5/2026 có xác nhận của Cấp ủy Chi bộ xã Mường Lầm",
        thumbnail: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=800&auto=format&fit=crop&q=80",
        summary: "Sản xuất chuỗi video 'Bản tin số Tuổi trẻ Mường Lầm' ứng dụng AI kể chuyện lịch sử Bác Hồ với Tây Bắc và tổ chức Lễ kết nạp 45 đoàn viên mới tại địa chỉ đỏ trang trọng, thiêng liêng.",
        content: `Giải pháp giáo dục lý tưởng cách mạng hiện đại bám sát tâm lý thế hệ Gen Z:
- Đoàn xã ứng dụng AI tạo giọng đọc truyền cảm và đồ họa số dựng 6 tập phim ngắn "Bác Hồ trong lòng đồng bào bản Mường", phát trên Cổng thông tin và mạng xã hội đạt hơn 3.500 lượt xem.
- Ngày 19/5/2026, tổ chức hành trình về địa chỉ đỏ và kết nạp 45 thanh niên ưu tú (Lớp đoàn viên 19/5).
- Tỷ lệ ĐVTN tham gia các hoạt động giáo dục truyền thống đạt 31.2% tổng số ĐVTN toàn xã, vượt chỉ tiêu đăng ký trong Công văn 18-CV/ĐTN.`
    },
    {
        id: "mc-nhom-6",
        slug: "nhom-6-xay-dung-tinh-ban-dep-chong-bao-luc-hoc-duong",
        group: "chu-dong",
        groupName: "11 Nhóm giải pháp đăng ký chủ động (Phần 2)",
        criteriaCode: "Nhóm 6",
        criteriaName: "Chiến dịch Xây dựng tình bạn đẹp - Nói không với bạo lực học đường",
        points: "10.0 điểm",
        legalRef: "Quyết định số 05-QĐ/TĐTN-CTĐ&TTN & Công văn 18-CV/ĐTN Đoàn xã Mường Lầm",
        title: "Minh chứng Diễn đàn 'Xây dựng tình bạn đẹp - Nói không với bạo lực học đường' và chiến dịch thay Avatar đạt trên 75% học sinh",
        date: "Ngày 25/09/2026 (Đầu năm học mới 2026 - 2027)",
        location: "Trường THPT Mường Lầm & Trường PTDTBT THCS Đứa Mòn",
        leadUnit: "BCH Đoàn xã & Đoàn Trường THPT Mường Lầm",
        coUnit: "Chi đoàn TH & THCS Mường Lầm, Chi đoàn Công an xã",
        participantCount: "525 học sinh tham gia diễn đàn và thay khung avatar",
        reachRate: "Đạt 80.7% tổng số học sinh THCS và THPT toàn xã (vượt chỉ tiêu > 75%)",
        signer: "TM. BCH ĐOÀN XÃ - BÍ THƯ LÒ MẠNH QUYỀN",
        keHoachDoc: "Kế hoạch số 24-KH/ĐTN ngày 10/9/2026 về Phòng chống bạo lực học đường năm học 2026-2027",
        baoCaoDoc: "Báo cáo số 28-BC/ĐTN ngày 30/9/2026 có xác nhận của Ban Giám hiệu 2 trường học",
        thumbnail: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&auto=format&fit=crop&q=80",
        summary: "Tổ chức phiên tòa giả định, diễn đàn kỹ năng ứng xử văn minh học đường và phát động chiến dịch thay avatar số 'Tôi chọn tình bạn đẹp' đạt 80.7% học sinh tham gia.",
        content: `Giải pháp bảo vệ học sinh và tạo môi trường học đường thân thiện:
- Phối hợp Chi đoàn Công an xã tổ chức tiểu phẩm tình huống và phiên tòa giả định cảnh báo hậu quả pháp lý của hành vi bạo lực học đường và xúc phạm nhau trên mạng xã hội.
- Phát động chiến dịch thay khung ảnh đại diện (avatar frame) trên Facebook/Zalo với thông điệp: "Tuổi trẻ Mường Lầm lan tỏa yêu thương - Nói không với bạo lực".
- Tổng số học sinh tham gia thay avatar và ký cam kết: 525/650 học sinh, đạt tỷ lệ 80.7% (vượt mức 75% theo yêu cầu Tiêu chí chấm điểm của Tỉnh đoàn).`
    },
    {
        id: "mc-nhom-7",
        slug: "nhom-7-phong-chong-duoi-nuoc-tre-em-cam-bien-canh-bao",
        group: "chu-dong",
        groupName: "11 Nhóm giải pháp đăng ký chủ động (Phần 2)",
        criteriaCode: "Nhóm 7",
        criteriaName: "Phòng chống tai nạn thương tích, đuối nước cho trẻ em",
        points: "10.0 điểm",
        legalRef: "Quyết định số 05-QĐ/TĐTN-CTĐ&TTN & Công văn 18-CV/ĐTN Đoàn xã Mường Lầm",
        title: "Minh chứng Lớp dạy bơi an toàn, sơ cấp cứu và cắm 15 biển cảnh báo tại các mó nước, khe suối nguy hiểm",
        date: "Tháng 06/2026 (Tháng hành động vì trẻ em)",
        location: "15 Bản làng và các bến suối nguy hiểm trên địa bàn xã",
        leadUnit: "Ban Chấp hành Đoàn xã Mường Lầm",
        coUnit: "Trạm Y tế xã Mường Lầm & Chi đoàn các trường Mầm non, Tiểu học",
        participantCount: "210 thiếu nhi và 45 đoàn viên thanh niên xung kích",
        reachRate: "100% các điểm suối sâu nguy hiểm được cắm biển cảnh báo có phản quang",
        signer: "TM. BCH ĐOÀN XÃ - BÍ THƯ LÒ MẠNH QUYỀN",
        keHoachDoc: "Kế hoạch số 16-KH/ĐTN ngày 20/5/2026 về Phòng chống đuối nước và tai nạn thương tích trẻ em",
        baoCaoDoc: "Báo cáo số 22-BC/ĐTN ngày 05/7/2026 có xác nhận của UBND xã Mường Lầm",
        thumbnail: "https://images.unsplash.com/photo-1519791883288-dc8bd696e667?w=800&auto=format&fit=crop&q=80",
        summary: "Đoàn xã gia công và cắm 15 biển báo nguy hiểm tại các bến suối, tổ chức 2 lớp tập huấn kỹ năng sơ cấp cứu hô hấp nhân tạo cho 210 em thiếu nhi và phụ huynh.",
        content: `Hành động thiết thực bảo vệ tính mạng trẻ em vùng cao trong mùa mưa lũ:
- Đoàn xã khảo sát và lắp đặt 15 biển báo nguy cơ đuối nước có sơn phản quang tại các khúc suối sâu, mó nước thuộc Bản Hin Phẩng, Bản Tỉa Pặt, Bản Mường Nưa, Bản Phá Thóng...
- Mở lớp dạy kỹ năng bơi sinh tồn và kỹ năng thoát hiểm khi gặp nước xoáy.
- Tổ chức tập huấn trực quan thao tác hô hấp nhân tạo, ép tim ngoài lồng ngực cho 210 em học sinh và phụ huynh.
- Trong năm 2026, trên địa bàn xã Mường Lầm KHÔNG xảy ra bất kỳ vụ việc đuối nước trẻ em nào.`
    },
    {
        id: "mc-nhom-8",
        slug: "nhom-8-chuyen-doi-so-nq-57-doi-tntn-vneid-ai-podcast",
        group: "chu-dong",
        groupName: "11 Nhóm giải pháp đăng ký chủ động (Phần 2)",
        criteriaCode: "Nhóm 8",
        criteriaName: "Chuyển đổi số toàn diện (Nghị quyết 57-NQ/TW)",
        points: "10.0 điểm",
        legalRef: "Quyết định số 05-QĐ/TĐTN-CTĐ&TTN & Công văn 18-CV/ĐTN Đoàn xã Mường Lầm",
        title: "Minh chứng 'Đội TNTN Chuyển đổi số cộng đồng' hỗ trợ cài VNeID mức 2 và mô hình 'Bản tin phát thanh số giọng đọc AI'",
        date: "Duy trì xuyên suốt các ngày cuối tuần năm 2026",
        location: "15 Bản làng và Bộ phận tiếp nhận Một cửa xã Mường Lầm",
        leadUnit: "BCH Đoàn xã & Chi đoàn Công an xã Mường Lầm",
        coUnit: "Chi đoàn Cơ quan xã & 15 Tổ công nghệ số bản",
        participantCount: "1.420 lượt người dân và đoàn viên được hỗ trợ số",
        reachRate: "92% người dân trong độ tuổi tại 15 bản đã kích hoạt thành công VNeID mức 2",
        signer: "TM. BCH ĐOÀN XÃ - BÍ THƯ LÒ MẠNH QUYỀN",
        keHoachDoc: "Kế hoạch số 05-KH/ĐTN ngày 10/2/2026 về Phát huy vai trò Tổ công nghệ số thanh niên",
        baoCaoDoc: "Báo cáo số 27-BC/ĐTN ngày 15/9/2026 có xác nhận của Công an xã & UBND xã",
        thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop&q=80",
        summary: "15 Tổ công nghệ số thanh niên xung kích 'đi từng ngõ, gõ từng nhà' kích hoạt VNeID mức 2 cho 1.420 người dân; ứng dụng AI sản xuất 24 bản tin phát thanh phát qua loa kéo Bluetooth.",
        content: `Thực hiện thắng lợi Nghị quyết số 57-NQ/TW về đột phá chuyển đổi số:
- Thành lập 15 Đội hình thanh niên tình nguyện chuyển đổi số tại 15 bản với 65 thành viên nòng cốt.
- Trực tiếp hỗ trợ 1.420 công dân cài đặt và kích hoạt thành công tài khoản định danh điện tử VNeID mức 2; hướng dẫn thanh toán tiền điện qua quét mã QR không dùng tiền mặt.
- Mô hình "Bản tin phát thanh số thanh niên": Đoàn xã dùng công nghệ chuyển văn bản thành giọng đọc AI tự nhiên (Text-to-Speech) phát vào các buổi tối cuối tuần qua hệ thống loa kéo của bản.`
    },
    {
        id: "mc-nhom-10-11",
        slug: "nhom-10-11-kinh-te-tu-nhan-nq-68-va-cong-truong-an-toan",
        group: "chu-dong",
        groupName: "11 Nhóm giải pháp đăng ký chủ động (Phần 2)",
        criteriaCode: "Nhóm 10 & 11",
        criteriaName: "Phát triển kinh tế tư nhân (NQ 68) & Dự án cộng đồng trường học",
        points: "10.0 điểm",
        legalRef: "Quyết định số 05-QĐ/TĐTN-CTĐ&TTN & Công văn 18-CV/ĐTN Đoàn xã Mường Lầm",
        title: "Minh chứng Tập huấn vốn vay NHCSXH, đưa nông sản Mường Lầm lên sàn TMĐT & Dự án 'Cổng trường an toàn giao thông' tại 100% trường học",
        date: "Tháng 04 và Tháng 09/2026",
        location: "15 Bản làng và 100% các cổng trường học trên địa bàn xã",
        leadUnit: "Ban Chấp hành Đoàn xã Mường Lầm",
        coUnit: "Ngân hàng Chính sách Xã hội, Ban ATGT xã, Các nhà trường",
        participantCount: "Dư nợ thanh niên quản lý trên 6.8 tỷ đồng; 100% trường học có mô hình ATGT",
        reachRate: "Hỗ trợ 85 hộ thanh niên vay vốn; 100% cổng trường an toàn, không ùn tắc",
        signer: "TM. BCH ĐOÀN XÃ - BÍ THƯ LÒ MẠNH QUYỀN",
        keHoachDoc: "Kế hoạch số 11-KH/ĐTN ngày 05/4/2026 về Đồng hành thanh niên phát triển kinh tế và ATGT",
        baoCaoDoc: "Báo cáo số 29-BC/ĐTN ngày 10/10/2026 có xác nhận của UBND xã Mường Lầm",
        thumbnail: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=800&auto=format&fit=crop&q=80",
        summary: "Đoàn xã quản lý 3 Tổ tiết kiệm & vay vốn NHCSXH với dư nợ 6.8 tỷ đồng giúp thanh niên khởi nghiệp nhãn, bò; triển khai mô hình 'Cổng trường an toàn giao thông' sơn vạch kẻ và phân luồng tại 100% điểm trường.",
        content: `Minh chứng tích hợp thực hiện hiệu quả 2 nhóm giải pháp trọng tâm:
1. Phát triển kinh tế tư nhân (Nghị quyết 68-NQ/TW):
- Đoàn xã nhận ủy thác quản lý 3 Tổ tiết kiệm và vay vốn Ngân hàng Chính sách Xã hội với tổng dư nợ đạt trên 6.8 tỷ đồng cho 85 hộ thanh niên vay phát triển chăn nuôi bò thịt và trồng nhãn chín muộn sạch.
- Hỗ trợ tạo mã QR truy xuất nguồn gốc và đưa sản phẩm quả tươi Mường Lầm lên các sàn TMĐT và mạng xã hội.

2. Dự án cộng đồng trường học (Cổng trường an toàn giao thông):
- Triển khai lắp đặt biển báo, kẻ vạch dừng đỗ xe cho phụ huynh đón con tại 100% trường học: Trường THPT Mường Lầm, Trường TH&THCS Mường Lầm, Mầm non Tuổi Hoa, Mầm non Hoa Cúc Đứa Mòn, PTDTBT THCS Đứa Mòn.
- Đội thanh niên tình nguyện trực chốt hướng dẫn giao thông trong giờ cao điểm tan học, xóa bỏ hoàn toàn tình trạng ùn tắc giao thông.`
    }
];

// ===================================================================
// DỮ LIỆU PHÂN HỆ: NẮM BẮT TƯ TƯỞNG, DƯ LUẬN XÃ HỘI & HÒM THƯ SỐ THANH NIÊN
// Ban hành bởi Ban Chấp hành Đoàn TNCS Hồ Chí Minh xã Mường Lầm
// ===================================================================

const OPINION_GROUPS = [
    { id: "tam-tu", name: "Tâm tư, nguyện vọng về học tập, nghề nghiệp, việc làm & khởi nghiệp", icon: "fa-graduation-cap" },
    { id: "doi-song", name: "Tình hình đời sống, sản xuất, an sinh xã hội tại các bản", icon: "fa-seedling" },
    { id: "tin-xau", name: "Phản ánh thông tin xấu độc, tin giả, lừa đảo trên không gian mạng", icon: "fa-shield-alt" },
    { id: "to-giac", name: "Tố giác tội phạm, tệ nạn xã hội, vi phạm pháp luật (Hòm thư tố giác điện tử)", icon: "fa-user-secret" },
    { id: "hien-ke", name: "Hiến kế, đề xuất sáng kiến đổi mới hoạt động Đoàn – Hội – Đội xã Mường Lầm", icon: "fa-lightbulb" }
];

const INITIAL_OPINIONS = [
    {
        id: "DLXH-ML-2026-01",
        date: "12/10/2026",
        group: "tam-tu",
        groupName: "Tâm tư, nguyện vọng về học tập, nghề nghiệp, việc làm & khởi nghiệp",
        village: "Thanh niên đi làm ăn xa (KCN Quế Võ - Bắc Ninh)",
        urgency: "normal",
        isAnonymous: false,
        senderName: "Lò Văn Thuận",
        senderPhone: "0984.321.xxx",
        content: "Chúng em là nhóm 18 thanh niên bản Mường Tợ và bản Hịa đang làm việc tại KCN Quế Võ. Cuối năm nay chúng em có nguyện vọng trở về bản phát triển mô hình ghép nhãn chín muộn và nuôi bò nhốt chuồng. Kính mong Đoàn xã phối hợp với Ngân hàng CSXH hướng dẫn thủ tục hồ sơ vay vốn ưu đãi thanh niên khởi nghiệp.",
        proofLink: "https://doanxamuonglam.gov.vn/assets/tailieu/khoi_nghiep_2026.pdf",
        status: "resolved",
        statusText: "Đã phối hợp giải quyết",
        response: "Ban Thường vụ Đoàn xã đã kết nối với Tổ chức tín dụng CSXH xã Mường Lầm, gửi cẩm nang hướng dẫn gói vay ưu đãi 100 triệu đồng cho thanh niên qua nhóm Zalo 'Thanh niên Mường Lầm xa quê' và tiếp nhận hồ sơ xét duyệt đợt 1.",
        officer: "Bí thư Lò Mạnh Quyền"
    },
    {
        id: "DLXH-ML-2026-02",
        date: "28/10/2026",
        group: "tin-xau",
        groupName: "Phản ánh thông tin xấu độc, tin giả, lừa đảo trên không gian mạng",
        village: "Bản Nà Tấu",
        urgency: "urgent",
        isAnonymous: true,
        senderName: "Người dân gửi ẩn danh",
        senderPhone: "Bảo mật",
        content: "Phát hiện một số tài khoản mạng xã hội ẩn danh đang đăng tải tuyển dụng lao động 'việc nhẹ lương cao 25-30 triệu/tháng' tại khu vực giáp biên, nhưng có dấu hiệu lừa đảo buôn bán người, nhắm vào các em học sinh nữ vừa tốt nghiệp lớp 9 và thanh niên nhàn rỗi trong bản.",
        proofLink: "Ảnh chụp màn hình các bài viết lừa đảo trên Facebook",
        status: "escalated",
        statusText: "Đã tổng hợp báo cáo Cấp ủy & Công an xã",
        response: "Đoàn xã đã xác minh thông tin, lập Báo cáo nhanh số 09-BC/ĐTN gửi Thường trực Đảng ủy và Công an xã Mường Lầm; đồng thời phát đi thông báo khẩn trên loa truyền thanh 15 bản cảnh báo nhân dân.",
        officer: "Phó Bí thư Lò Văn Hồng (Công an xã)"
    },
    {
        id: "DLXH-ML-2026-03",
        date: "05/11/2026",
        group: "hien-ke",
        groupName: "Hiến kế, đề xuất sáng kiến đổi mới hoạt động Đoàn – Hội – Đội xã Mường Lầm",
        village: "Đoàn trường THPT Mường Lầm",
        urgency: "normal",
        isAnonymous: false,
        senderName: "Vì Thị Mai",
        senderPhone: "0368.552.xxx",
        content: "Đề xuất Đoàn xã phối hợp với Đoàn trường THPT Mường Lầm mở Cuộc thi 'Sáng tạo video ngắn ứng dụng AI quảng bá nét đẹp văn hóa Thái - Mông và nông sản nhãn Sông Mã' trên nền tảng TikTok và Facebook Reels nhằm thu hút học sinh, đoàn viên trẻ tham gia chuyển đổi số.",
        proofLink: "Bản đề xuất kế hoạch chi tiết gửi kèm",
        status: "processing",
        statusText: "Đang tiếp nhận & Lên kế hoạch",
        response: "Đoàn xã ghi nhận sáng kiến rất thiết thực của đồng chí. Nội dung này đã được đưa vào Kế hoạch Tháng Thanh niên năm 2027 và Cuộc thi Sáng tạo TTN-NĐ toàn xã.",
        officer: "UV BTV Lò Thị Thanh Nhàn"
    },
    {
        id: "DLXH-ML-2026-04",
        date: "15/11/2026",
        group: "to-giac",
        groupName: "Tố giác tội phạm, tệ nạn xã hội, vi phạm pháp luật (Hòm thư tố giác điện tử)",
        village: "Bản Đứa Lốc",
        urgency: "urgent",
        isAnonymous: true,
        senderName: "Người dân gửi ẩn danh",
        senderPhone: "Bảo mật tuyệt đối",
        content: "Tại khu vực chòi nương vắng giáp ranh khe suối cuối bản Đứa Lốc thường có một nhóm đối tượng lạ mặt đi xe máy không biển kiểm soát tụ tập lúc nhá nhem tối, có dấu hiệu tàng trữ và sử dụng trái phép chất ma túy.",
        proofLink: "Tọa độ khu vực chòi nương cuối bản",
        status: "escalated",
        statusText: "Đã chuyển tin báo tố giác tới Công an xã",
        response: "Thông tin đã được chuyển bảo mật tuyệt đối tới đồng chí Lò Văn Hồng - Phó Bí thư Đoàn xã, Trưởng Công an xã Mường Lầm để tổ chức trinh sát, tuần tra và xử lý dứt điểm điểm nóng.",
        officer: "Thường trực Đoàn xã & Công an xã"
    },
    {
        id: "DLXH-ML-2026-05",
        date: "17/11/2026",
        group: "doi-song",
        groupName: "Tình hình đời sống, sản xuất, an sinh xã hội tại các bản",
        village: "Bản Huổi Lếch",
        urgency: "normal",
        isAnonymous: false,
        senderName: "Sùng A Páo",
        senderPhone: "0971.668.xxx",
        content: "Tuyến đường nhánh từ bản ra khu sản xuất sau đợt mưa lớn bị xói lở một đoạn rãnh thoát nước, xe máy chở nông sản đi lại khó khăn. Đề nghị Chi đoàn bản Huổi Lếch tổ chức Ngày thứ Bảy tình nguyện khơi thông và đắp phụ gia cố đường.",
        proofLink: "Ảnh hiện trạng đoạn đường xói lở",
        status: "resolved",
        statusText: "Đã phối hợp giải quyết",
        response: "Đoàn xã đã điều động Đội Thanh niên tình nguyện xung kích phối hợp với 28 đoàn viên Chi đoàn bản Huổi Lếch ra quân san gạt 35m đường, rải đá mạt hoàn thành ngày 18/11/2026.",
        officer: "Bí thư Chi đoàn Sộng A Mang"
    }
];

const INITIAL_POLLS = {
    poll1: {
        id: "poll-support-needs",
        question: "Nhu cầu hỗ trợ thiết thực nhất hiện nay của thanh niên xã Mường Lầm là gì?",
        totalVotes: 352,
        options: [
            { id: "opt1", text: "Vay vốn ưu đãi phát triển kinh tế & khởi nghiệp nông nghiệp", votes: 148, percent: 42 },
            { id: "opt2", text: "Tập huấn kỹ năng số, AI & TMĐT tiêu thụ nông sản", votes: 109, percent: 31 },
            { id: "opt3", text: "Tư vấn, giới thiệu việc làm tại các KCN trong và ngoài tỉnh", votes: 63, percent: 18 },
            { id: "opt4", text: "Xây dựng sân chơi thể thao, điểm sinh hoạt văn hóa bản làng", votes: 32, percent: 9 }
        ]
    },
    poll2: {
        id: "poll-doc-satisfaction",
        question: "Mức độ hài lòng của đoàn viên với việc số hóa tài liệu sinh hoạt Chi đoàn hằng tháng trên Cổng thông tin?",
        totalVotes: 350,
        options: [
            { id: "opt1", text: "Rất hài lòng - Rất tiện lợi cho sinh hoạt bản làng", votes: 238, percent: 68 },
            { id: "opt2", text: "Hài lòng - Dễ tra cứu trên điện thoại di động", votes: 84, percent: 24 },
            { id: "opt3", text: "Bình thường - Cần thêm tài liệu dạng video/audio", votes: 21, percent: 6 },
            { id: "opt4", text: "Cần cải tiến thêm giao diện và tốc độ tải", votes: 7, percent: 2 }
        ]
    }
};
