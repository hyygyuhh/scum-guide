// SCUM Guide - Main JavaScript

// Mobile menu toggle
function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('active');
}

// Dropdown toggle - works on both mobile (click) and desktop (click to close)
document.addEventListener('click', function(e) {
    const dropdown = e.target.closest('.dropdown');
    const allDropdowns = document.querySelectorAll('.dropdown');
    const isSmallScreen = window.innerWidth <= 1024;
    
    if (isSmallScreen) {
        // Mobile/tablet: click toggles dropdown
        allDropdowns.forEach(d => {
            if (d !== dropdown) d.classList.remove('active');
        });
        if (dropdown) {
            dropdown.classList.toggle('active');
        }
    } else {
        // Desktop: clicking outside closes any active dropdown
        if (!dropdown) {
            allDropdowns.forEach(d => d.classList.remove('active'));
        }
    }
});

// Scroll effects
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Fade in animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Tips data for main page (only define if not already defined by inline script)
if (typeof tipsData === 'undefined') {
const tipsData = [
    {
        title: { zh: '角色属性管理', en: 'Attribute Management' },
        content: {
            zh: `
            <p>在SCUM中，你的角色有多个需要管理的属性。了解这些属性如何工作对生存至关重要。</p>
            <h4>核心属性</h4>
            <ul>
                <li><strong>健康值</strong>：受到伤害会降低，降至0则死亡。可通过医疗用品恢复。</li>
                <li><strong>能量</strong>：影响行动能力和体力恢复速度。通过进食补充。</li>
                <li><strong>水分</strong>：脱水会导致健康下降。寻找水源保持水分充足。</li>
                <li><strong>体温</strong>：过低或过高都会影响健康。注意穿着和环境。</li>
            </ul>
            <h4>管理建议</h4>
            <ul>
                <li>定期检查属性面板，了解当前状态</li>
                <li>随身携带食物和水，随时补充</li>
                <li>根据天气调整穿着，避免中暑或冻伤</li>
                <li>受伤后及时处理，避免感染</li>
            </ul>`,
            en: `
            <p>In SCUM, your character has multiple attributes to manage. Understanding how they work is crucial for survival.</p>
            <h4>Core Attributes</h4>
            <ul>
                <li><strong>Health</strong>: Decreases when taking damage, death at 0. Recoverable with medical supplies.</li>
                <li><strong>Energy</strong>: Affects movement and stamina recovery. Replenish by eating.</li>
                <li><strong>Hydration</strong>: Dehydration lowers health. Find water sources to stay hydrated.</li>
                <li><strong>Body Temperature</strong>: Too high or low affects health. Watch your clothing and environment.</li>
            </ul>
            <h4>Management Tips</h4>
            <ul>
                <li>Check your attribute panel regularly</li>
                <li>Carry food and water at all times</li>
                <li>Adjust clothing based on weather conditions</li>
                <li>Treat wounds promptly to prevent infection</li>
            </ul>`
        }
    },
    {
        title: { zh: '战斗与潜行', en: 'Combat & Stealth' },
        content: {
            zh: `
            <p>在SCUM中，不是所有战斗都需要正面交锋。学会判断何时战斗、何时躲避是生存的艺术。</p>
            <h4>潜行技巧</h4>
            <ul>
                <li><strong>蹲伏移动</strong>：大幅降低被发现的概率</li>
                <li><strong>注意噪音</strong>：奔跑和开枪会吸引敌人</li>
                <li><strong>利用环境</strong>：草丛、建筑物都是良好的掩护</li>
                <li><strong>观察敌人</strong>：了解巡逻路线后再行动</li>
            </ul>
            <h4>战斗要点</h4>
            <ul>
                <li>保持移动，避免成为静止靶</li>
                <li>瞄准头部造成最大伤害</li>
                <li>利用掩体进行射击</li>
                <li>随时准备撤退路线</li>
            </ul>`,
            en: `
            <p>In SCUM, not every fight requires a head-on confrontation. Knowing when to fight and when to hide is the art of survival.</p>
            <h4>Stealth Tips</h4>
            <ul>
                <li><strong>Crouch movement</strong>: Greatly reduces detection chance</li>
                <li><strong>Watch noise</strong>: Running and gunning attracts enemies</li>
                <li><strong>Use environment</strong>: Bushes and buildings provide good cover</li>
                <li><strong>Observe enemies</strong>: Learn patrol routes before acting</li>
            </ul>
            <h4>Combat Essentials</h4>
            <ul>
                <li>Keep moving, don't be a sitting duck</li>
                <li>Aim for the head for maximum damage</li>
                <li>Use cover when shooting</li>
                <li>Always have an escape route ready</li>
            </ul>`
        }
    },
    {
        title: { zh: '基地建设', en: 'Base Building' },
        content: {
            zh: `
            <p>建立安全的避风港是长期生存的关键。一个好的基地可以保护你和你的物资。</p>
            <h4>选址原则</h4>
            <ul>
                <li><strong>隐蔽性</strong>：远离主要道路和热门搜刮点</li>
                <li><strong>资源便利</strong>：附近有水源和基本物资</li>
                <li><strong>易守难攻</strong>：利用地形优势</li>
                <li><strong>逃生路线</strong>：至少有两条撤离通道</li>
            </ul>
            <h4>建设建议</h4>
            <ul>
                <li>从简单的围墙和储物开始</li>
                <li>建造多层防御设施</li>
                <li>设置陷阱防止入侵者</li>
                <li>保持基地的隐蔽性</li>
            </ul>`,
            en: `
            <p>Building a safe haven is key to long-term survival. A good base protects you and your supplies.</p>
            <h4>Location Principles</h4>
            <ul>
                <li><strong>Concealment</strong>: Away from main roads and popular loot spots</li>
                <li><strong>Resource access</strong>: Nearby water and basic supplies</li>
                <li><strong>Defensibility</strong>: Use terrain advantages</li>
                <li><strong>Escape routes</strong>: At least two exit paths</li>
            </ul>
            <h4>Building Tips</h4>
            <ul>
                <li>Start with simple walls and storage</li>
                <li>Build multi-layered defenses</li>
                <li>Set up traps to deter intruders</li>
                <li>Keep your base hidden</li>
            </ul>`
        }
    },
    {
        title: { zh: '武器与装备', en: 'Weapons & Gear' },
        content: {
            zh: `
            <p>选择合适的武器和装备可以大大提升你的生存几率。不同情况需要不同的装备配置。</p>
            <h4>武器选择</h4>
            <ul>
                <li><strong>近战武器</strong>：安静、无需弹药，适合潜行</li>
                <li><strong>手枪</strong>：轻便、易携带，自卫首选</li>
                <li><strong>步枪</strong>：远程作战、高伤害</li>
                <li><strong>弓箭</strong>：可回收、安静，适合狩猎</li>
            </ul>
            <h4>装备建议</h4>
            <ul>
                <li>优先选择有储物空间的装备</li>
                <li>防弹衣在危险区域必备</li>
                <li>保持装备耐久度</li>
                <li>根据任务调整装备配置</li>
            </ul>`,
            en: `
            <p>Choosing the right weapons and gear can greatly boost your survival odds. Different situations require different loadouts.</p>
            <h4>Weapon Choices</h4>
            <ul>
                <li><strong>Melee weapons</strong>: Silent, no ammo needed, great for stealth</li>
                <li><strong>Pistols</strong>: Lightweight, easy to carry, ideal for self-defense</li>
                <li><strong>Rifles</strong>: Long-range combat, high damage</li>
                <li><strong>Bows</strong>: Recoverable arrows, silent, great for hunting</li>
            </ul>
            <h4>Gear Recommendations</h4>
            <ul>
                <li>Prioritize gear with storage space</li>
                <li>Body armor is essential in dangerous areas</li>
                <li>Maintain gear durability</li>
                <li>Adjust loadout based on your mission</li>
            </ul>`
        }
    }
];
} // end of if (typeof tipsData === 'undefined')

// Show tip detail
function showTip(index) {
    // Skip if tipsData is not available (subpages don't have it)
    if (typeof tipsData === 'undefined') return;
    
    const items = document.querySelectorAll('.tip-item');
    items.forEach((item, i) => {
        item.classList.toggle('active', i === index);
    });
    
    const titleEl = document.getElementById('tip-title');
    const contentEl = document.getElementById('tip-content');
    
    if (titleEl && contentEl) {
        const tip = tipsData[index];
        const lang = typeof currentLang !== 'undefined' ? currentLang : 'zh';
        titleEl.textContent = typeof tip.title === 'object' ? tip.title[lang] : tip.title;
        contentEl.innerHTML = typeof tip.content === 'object' ? tip.content[lang] : tip.content;
    }
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
        // Close mobile menu if open
        const navLinks = document.querySelector('.nav-links');
        if (navLinks) {
            navLinks.classList.remove('active');
        }
    });
});

// Lazy load images
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src;
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

// Language Toggle System
const translations = {
    'nav.beginner': { zh: '新手入门', en: 'Beginner Guide' },
    'nav.map': { zh: '地图资源', en: 'Map & Resources' },
    'nav.survival': { zh: '生存技巧', en: 'Survival Tips' },
    'nav.tips': { zh: '进阶攻略', en: 'Advanced' },
    'nav.weapons': { zh: '武器详解', en: 'Weapons' },
    'hero.badge': { zh: '完整生存指南', en: 'Complete Survival Guide' },
    'hero.title1': { zh: 'SCUM', en: 'SCUM' },
    'hero.title2': { zh: '人渣', en: 'Survival' },
    'hero.subtitle': { zh: '在这片残酷的荒野中生存，你需要掌握一切技能。从零开始，成为最强大的幸存者。', en: 'Survive in this harsh wasteland. Master every skill. Start from zero, become the ultimate survivor.' },
    'hero.cta1': { zh: '开始学习', en: 'Get Started' },
    'hero.cta2': { zh: '查看地图', en: 'View Map' },
    'section.beginner.tag': { zh: '新手必读', en: 'Must Read' },
    'section.beginner.title': { zh: '新手入门指南', en: 'Beginner Guide' },
    'section.beginner.desc': { zh: '掌握这些基础知识，让你在SCUM的世界中存活更久', en: 'Master these basics to survive longer in the world of SCUM' },
    'section.map.tag': { zh: '资源分布', en: 'Resource Map' },
    'section.map.title': { zh: '地图资源指南', en: 'Map & Resource Guide' },
    'section.map.desc': { zh: '了解各个区域的资源分布，规划你的搜刮路线', en: 'Learn resource distribution across regions and plan your loot route' },
    'section.survival.tag': { zh: '生存秘籍', en: 'Survival Secrets' },
    'section.survival.title': { zh: '生存技巧详解', en: 'Survival Tips Detail' },
    'section.survival.desc': { zh: '掌握这些技巧，让你在末日世界中如鱼得水', en: 'Master these tips to thrive in the post-apocalyptic world' },
    'section.tips.tag': { zh: '进阶攻略', en: 'Advanced Guide' },
    'section.tips.title': { zh: '高级生存技巧', en: 'Advanced Survival Tips' },
    'section.tips.desc': { zh: '从新手到高手的进阶之路', en: 'The path from beginner to expert' },
    'stat.map': { zh: '平方公里地图', en: 'sq km Map' },
    'stat.players': { zh: '服务器玩家上限', en: 'Max Players' },
    'stat.weapons': { zh: '武器种类', en: 'Weapon Types' },
    'stat.possibility': { zh: '生存可能性', en: 'Survival Possibilities' },
    'footer.desc': { zh: '最全面的SCUM生存攻略网站，帮助玩家在末日世界中生存下去。持续更新最新攻略和技巧。', en: 'The most comprehensive SCUM survival guide. Helping players survive in the post-apocalyptic world.' },
    'footer.quick': { zh: '快速导航', en: 'Quick Links' },
    'footer.categories': { zh: '攻略分类', en: 'Categories' },
    'footer.resources': { zh: '相关资源', en: 'Resources' },
    'footer.legal': { zh: '法律信息', en: 'Legal' },
    'card.01.title': { zh: '基础操作', en: 'Basic Controls' },
    'card.01.desc': { zh: '熟悉游戏的基本操作是生存的第一步：', en: 'Learning the basic controls is the first step to survival:' },
    'card.01.l1': { zh: '<strong>左键点击</strong>：攻击/使用物品', en: '<strong>Left Click</strong>: Attack / Use item' },
    'card.01.l2': { zh: '<strong>V键</strong>：切换攻击模式', en: '<strong>V Key</strong>: Toggle combat mode' },
    'card.01.l3': { zh: '<strong>滚轮</strong>：调整移动速度', en: '<strong>Scroll Wheel</strong>: Adjust movement speed' },
    'card.01.l4': { zh: '<strong>Tab</strong>：打开背包', en: '<strong>Tab</strong>: Open inventory' },
    'card.01.l5': { zh: '<strong>M</strong>：打开地图', en: '<strong>M</strong>: Open map' },
    'card.02.title': { zh: '制作背包', en: 'Craft Backpack' },
    'card.02.desc': { zh: '初期最重要的任务——制作背包：', en: 'The most important early task — craft a backpack:' },
    'card.02.l1': { zh: '撕碎衣服获得布条', en: 'Tear clothes into rags' },
    'card.02.l2': { zh: '用树枝或布条制作绳子', en: 'Craft rope from sticks or rags' },
    'card.02.l3': { zh: '打开制作菜单搜索"backpack"', en: 'Open crafting menu, search "backpack"' },
    'card.02.l4': { zh: '制作简易背包获得10格空间', en: 'Craft improvised backpack for 10 slots' },
    'card.03.title': { zh: '时间管理', en: 'Time Management' },
    'card.03.desc': { zh: '合理安排时间是生存关键：', en: 'Proper time management is key to survival:' },
    'card.03.l1': { zh: '白天探索和搜集资源', en: 'Explore and gather resources during daytime' },
    'card.03.l2': { zh: '夜晚避免外出，僵尸更活跃', en: 'Avoid going out at night, zombies are more active' },
    'card.03.l3': { zh: '注意体温和能量消耗', en: 'Watch your temperature and energy levels' },
    'card.03.l4': { zh: '规划好安全屋位置', en: 'Plan safe house locations' },
    'card.04.title': { zh: '避免危险', en: 'Avoid Danger' },
    'card.04.desc': { zh: '识别并避开常见威胁：', en: 'Identify and avoid common threats:' },
    'card.04.l1': { zh: '哨兵机器人：避开巡逻路线', en: 'Sentry bots: Avoid patrol routes' },
    'card.04.l2': { zh: '僵尸群：保持安静，绕行', en: 'Zombie hordes: Stay quiet, go around' },
    'card.04.l3': { zh: '其他玩家：初期避免正面冲突', en: 'Other players: Avoid direct conflict early on' },
    'card.04.l4': { zh: '野生动物：保持距离', en: 'Wild animals: Keep your distance' },
    'card.05.title': { zh: '食物与水', en: 'Food & Water' },
    'card.05.desc': { zh: '维持基本生存需求：', en: 'Maintain basic survival needs:' },
    'card.05.l1': { zh: '寻找河流获取饮用水', en: 'Find rivers for drinking water' },
    'card.05.l2': { zh: '收集蘑菇和浆果（注意辨别）', en: 'Collect mushrooms and berries (identify carefully)' },
    'card.05.l3': { zh: '打猎获取肉类，需要烹饪', en: 'Hunt for meat, needs cooking' },
    'card.05.l4': { zh: '避免食用腐烂食物', en: 'Avoid eating spoiled food' },
    'card.06.title': { zh: '生火技巧', en: 'Fire Starting' },
    'card.06.desc': { zh: '火源是生存的核心：', en: 'Fire is essential for survival:' },
    'card.06.l1': { zh: '收集树枝和树皮制作火钻', en: 'Collect sticks and bark for fire drill' },
    'card.06.l2': { zh: '用6根小树枝建造篝火', en: 'Build fireplace with 6 small sticks' },
    'card.06.l3': { zh: '靠近篝火时可以点燃', en: 'Light fire when standing near fireplace' },
    'card.06.l4': { zh: '火可以烹饪食物和取暖', en: 'Fire cooks food and provides warmth' },
    'tip.attr': { zh: '角色属性管理', en: 'Attribute Management' },
    'tip.combat': { zh: '战斗与潜行', en: 'Combat & Stealth' },
    'tip.base': { zh: '基地建设', en: 'Base Building' },
    'tip.gear': { zh: '武器与装备', en: 'Weapons & Gear' },
    'tip.attr.preview': { zh: '了解并管理你的健康、能量和水分...', en: 'Understand and manage your health, energy and hydration...' },
    'tip.combat.preview': { zh: '何时战斗，何时躲避，这是生存的艺术...', en: 'When to fight, when to hide — the art of survival...' },
    'tip.base.preview': { zh: '建立安全的避风港是长期生存的关键...', en: 'Building a safe haven is key to long-term survival...' },
    'tip.gear.preview': { zh: '选择合适的武器和装备提升生存几率...', en: 'Choose the right weapons and gear to boost survival odds...' },
    'adv.robot.title': { zh: '机器人应对策略', en: 'Sentry Bot Strategy' },
    'adv.robot.desc': { zh: '哨兵机器人是最危险的敌人：', en: 'Sentry bots are the most dangerous enemies:' },
    'adv.robot.l1': { zh: '观察巡逻路线，规划安全通道', en: 'Observe patrol routes, plan safe passages' },
    'adv.robot.l2': { zh: '蹲伏移动减少被发现概率', en: 'Crouch to reduce detection chance' },
    'adv.robot.l3': { zh: '利用建筑物作为掩护', en: 'Use buildings as cover' },
    'adv.robot.l4': { zh: '被锁定时快速寻找掩体', en: 'Find cover quickly when locked on' },
    'adv.team.title': { zh: '多人协作', en: 'Team Cooperation' },
    'adv.team.desc': { zh: '团队合作大大提升生存率：', en: 'Teamwork greatly improves survival rate:' },
    'adv.team.l1': { zh: '分工合作：搜集、建造、警戒', en: 'Divide tasks: gather, build, watch' },
    'adv.team.l2': { zh: '共享资源和信息', en: 'Share resources and information' },
    'adv.team.l3': { zh: '互相照应战斗', en: 'Watch each other\'s backs in combat' },
    'adv.team.l4': { zh: '建立团队基地', en: 'Build a team base' },
    'adv.vehicle.title': { zh: '车辆使用', en: 'Vehicle Usage' },
    'adv.vehicle.desc': { zh: '车辆是快速移动的关键：', en: 'Vehicles are key to fast travel:' },
    'adv.vehicle.l1': { zh: '寻找火花塞和电池启动车辆', en: 'Find spark plugs and battery to start vehicles' },
    'adv.vehicle.l2': { zh: '注意燃料消耗', en: 'Watch fuel consumption' },
    'adv.vehicle.l3': { zh: '车辆可存储大量物品', en: 'Vehicles can store lots of items' },
    'adv.vehicle.l4': { zh: '小心驾驶，避免损坏', en: 'Drive carefully, avoid damage' },
    'adv.pvp.title': { zh: 'PvP战术', en: 'PvP Tactics' },
    'adv.pvp.desc': { zh: '与其他玩家的对抗技巧：', en: 'Combat tips against other players:' },
    'adv.pvp.l1': { zh: '选择有利地形作战', en: 'Choose advantageous terrain' },
    'adv.pvp.l2': { zh: '保持移动，避免成为靶子', en: 'Keep moving, don\'t be a sitting duck' },
    'adv.pvp.l3': { zh: '利用声音判断敌人位置', en: 'Use sound to locate enemies' },
    'adv.pvp.l4': { zh: '懂得何时撤退保存实力', en: 'Know when to retreat' },
    'loc.military': { zh: '军事基地', en: 'Military Base' },
    'loc.military.desc': { zh: '高级武器、防弹装备', en: 'High-tier weapons, body armor' },
    'loc.police': { zh: '警察局', en: 'Police Station' },
    'loc.police.desc': { zh: '轻武器、警用装备', en: 'Light weapons, police gear' },
    'loc.bunker': { zh: '地下掩体', en: 'Underground Bunker' },
    'loc.bunker.desc': { zh: '顶级装备、大量弹药', en: 'Top-tier gear, plenty of ammo' },
    'loc.residential': { zh: '居民区', en: 'Residential Area' },
    'loc.residential.desc': { zh: '基础物资、食物衣物', en: 'Basic supplies, food & clothing' },
    'loc.airport': { zh: '机场', en: 'Airport' },
    'loc.airport.desc': { zh: '军事装备、车辆', en: 'Military gear, vehicles' },
    'loc.hospital': { zh: '医院', en: 'Hospital' },
    'loc.hospital.desc': { zh: '医疗用品、急救包', en: 'Medical supplies, first aid kits' },
    'loc.trader': { zh: '商人营地', en: 'Trader Camp' },
    'loc.trader.desc': { zh: '交易、任务、稀有物品', en: 'Trading, quests, rare items' },
    'loc.bootcamp': { zh: '训练营', en: 'Boot Camp' },
    'loc.bootcamp.desc': { zh: '新手装备、基础武器', en: 'Starter gear, basic weapons' },
    'footer.cat.weapons': { zh: '武器指南', en: 'Weapons Guide' },
    'footer.cat.base': { zh: '基地建设', en: 'Base Building' },
    'footer.cat.vehicle': { zh: '载具攻略', en: 'Vehicle Guide' },
    'footer.cat.pvp': { zh: 'PvP技巧', en: 'PvP Tips' },
    'footer.res.wiki': { zh: '官方Wiki', en: 'Official Wiki' },
    'footer.res.changelog': { zh: '更新日志', en: 'Changelog' },
    // Navigation
    'nav.guides': { zh: '攻略分类', en: 'Guides' },
    // Dropdown categories
    'dropdown.combat': { zh: '战斗', en: 'Combat' },
    'dropdown.survival': { zh: '生存', en: 'Survival' },
    'dropdown.building': { zh: '建造', en: 'Building' },
    'dropdown.world': { zh: '世界', en: 'World' },
    'dropdown.misc': { zh: '其他', en: 'Misc' },
    // Homepage new section
    'section.guides.tag': { zh: '完整导航', en: 'Full Navigation' },
    'section.guides.title': { zh: '全部攻略分类', en: 'All Guide Categories' },
    'section.guides.desc': { zh: '浏览所有21个详细攻略页面，找到你需要的信息', en: 'Browse all 21 detailed guide pages to find what you need' },
    // Subpage navigation (shared by all pages)
    'nav.home': { zh: '首页', en: 'Home' },
    'page.title.weapons': { zh: '武器详解', en: 'Weapons Guide' },
    'page.title.skills': { zh: '角色属性与技能', en: 'Character Skills' },
    'page.title.basebuilding': { zh: '基地建造详解', en: 'Base Building' },
    'page.title.crafting': { zh: '制作配方', en: 'Crafting Recipes' },
    'page.title.cooking': { zh: '烹饪与食物系统', en: 'Cooking & Food' },
    'page.title.hotkeys': { zh: '快捷键大全', en: 'Hotkeys Guide' },
    'page.title.enemies': { zh: '敌人图鉴', en: 'Enemies Guide' },
    'page.title.vehicles': { zh: '载具系统详解', en: 'Vehicles Guide' },
    'page.title.diseases': { zh: '疾病与治疗', en: 'Diseases & Treatment' },
    'page.title.armor': { zh: '护甲与穿透系统', en: 'Armor & Penetration' },
    'page.title.bunker': { zh: '地堡攻略', en: 'Bunker Guide' },
    'page.title.fame': { zh: '声望与任务系统', en: 'Fame & Missions' },
    'page.title.banking': { zh: '银行与交易系统', en: 'Banking & Trading' },
    'page.title.zones': { zh: '地图区域详解', en: 'Map Zones' },
    'page.title.tips': { zh: '实用技巧大全', en: 'Tips & Tricks' },
    'page.title.metabolism': { zh: '新陈代谢系统详解', en: 'Metabolism System' },
    'page.title.medicine': { zh: '药品大全', en: 'Medicine Guide' },
    'page.title.tools': { zh: '工具大全', en: 'Tools Guide' },
    'page.title.sniping': { zh: '狙击镜与归零', en: 'Sniping & Zeroing' },
    'page.title.server': { zh: '服务器设置与参数', en: 'Server Settings' },
    'page.title.clothing': { zh: '服装与装备系统', en: 'Clothing & Gear' },
    // Breadcrumb
    'breadcrumb.home': { zh: '首页', en: 'Home' },
    // Footer category labels (new pages)
    'footer.cat.skills': { zh: '角色属性', en: 'Character' },
    'footer.cat.crafting': { zh: '制作配方', en: 'Crafting' },
    'footer.cat.cooking': { zh: '烹饪系统', en: 'Cooking' },
    'footer.cat.hotkeys': { zh: '快捷键', en: 'Hotkeys' },
    'footer.cat.enemies': { zh: '敌人图鉴', en: 'Enemies' },
    'footer.cat.vehicles': { zh: '载具系统', en: 'Vehicles' },
    'footer.cat.diseases': { zh: '疾病治疗', en: 'Diseases' },
    'footer.cat.armor': { zh: '护甲穿透', en: 'Armor' },
    'footer.cat.bunker': { zh: '地堡攻略', en: 'Bunker' },
    'footer.cat.fame': { zh: '声望任务', en: 'Fame' },
    'footer.cat.banking': { zh: '银行交易', en: 'Banking' },
    'footer.cat.zones': { zh: '地图区域', en: 'Zones' },
    'footer.cat.tips': { zh: '实用技巧', en: 'Tips' },
    'footer.cat.metabolism': { zh: '新陈代谢', en: 'Metabolism' },
    'footer.cat.medicine': { zh: '药品大全', en: 'Medicine' },
    'footer.cat.tools': { zh: '工具大全', en: 'Tools' },
    'footer.cat.sniping': { zh: '狙击归零', en: 'Sniping' },
    'footer.cat.server': { zh: '服务器设置', en: 'Server' },
    'footer.cat.clothing': { zh: '服装装备', en: 'Clothing' },
    // Subpage translations - Common labels
    'label.damage': { zh: '伤害', en: 'Damage' },
    'label.durability': { zh: '耐久', en: 'Durability' },
    'label.attack_speed': { zh: '攻速', en: 'Attack Speed' },
    'label.obtain': { zh: '获取', en: 'Obtain' },
    'label.description': { zh: '说明', en: 'Description' },
    'label.materials': { zh: '材料', en: 'Materials' },
    'label.function': { zh: '功能', en: 'Function' },
    'label.operation': { zh: '操作', en: 'Operation' },
    'label.hotkey': { zh: '快捷键', en: 'Hotkey' },
    'label.prerequisite': { zh: '前提', en: 'Prerequisite' },
    'label.tip': { zh: '提示', en: 'Tip' },
    'label.usage': { zh: '用途', en: 'Usage' },
    'label.required_materials': { zh: '所需材料', en: 'Required Materials' },
    'label.basic': { zh: '基础', en: 'Basic' },
    'label.advanced': { zh: '进阶', en: 'Advanced' },
    'label.expert': { zh: '高级', en: 'Expert' },
    'label.special': { zh: '特殊', en: 'Special' },
    'label.magazine': { zh: '弹匣', en: 'Magazine' },
    'label.range': { zh: '射程', en: 'Range' },
    'label.bonus': { zh: '加成：', en: 'Bonus:' },
    'label.affects': { zh: '影响技能：', en: 'Affects:' },
    'label.suggestion': { zh: '建议：', en: 'Suggestion:' },
    // Common values
    'value.low': { zh: '低', en: 'Low' },
    'value.medium': { zh: '中', en: 'Medium' },
    'value.high': { zh: '高', en: 'High' },
    'value.fast': { zh: '快', en: 'Fast' },
    'value.craft': { zh: '制作', en: 'Craft' },
    'value.loot': { zh: '搜刮', en: 'Loot' },
    'value.police_station': { zh: '警察局', en: 'Police Station' },
    'value.15_rounds': { zh: '15发', en: '15 Rounds' },
    'value.50m': { zh: '50m', en: '50m' },
    'value.b_key': { zh: 'B键', en: 'B Key' },
    'value.wood': { zh: '木头', en: 'Wood' },
    'value.stone': { zh: '石头', en: 'Stone' },
    'value.metal': { zh: '金属', en: 'Metal' },
    'value.cement': { zh: '水泥', en: 'Cement' },
    'value.wood_x10': { zh: '木头x10', en: 'Wood x10' },
    'value.basic_defense': { zh: '基础防御', en: 'Basic Defense' },
    // Types
    'type.basic': { zh: '基础', en: 'Basic' },
    'type.tool': { zh: '工具', en: 'Tool' },
    'type.weapon': { zh: '武器', en: 'Weapon' },
    'type.pistol': { zh: '手枪', en: 'Pistol' },
    'type.core': { zh: '核心', en: 'Core' },
    'type.operation': { zh: '操作', en: 'Operation' },
    'type.resource': { zh: '资源', en: 'Resource' },
    'type.defense': { zh: '防御', en: 'Defense' },
    // Weapons page
    'weapons.section1.title': { zh: '近战武器', en: 'Melee Weapons' },
    'weapons.section1.desc': { zh: '近战武器是初期生存的重要工具，安静且无需弹药，适合潜行和狩猎。', en: 'Melee weapons are essential early survival tools, silent and ammo-free, perfect for stealth and hunting.' },
    'weapons.section2.title': { zh: '手枪', en: 'Pistols' },
    'weapons.section2.desc': { zh: '手枪是最常见的火器，轻便易携带，适合自卫和近距离作战。', en: 'Pistols are the most common firearms, lightweight and easy to carry, ideal for self-defense and close combat.' },
    'weapons.card1.name': { zh: '石刀', en: 'Stone Knife' },
    'weapons.card2.name': { zh: '斧头', en: 'Axe' },
    'weapons.card3.name': { zh: '砍刀', en: 'Machete' },
    'weapons.type1': { zh: '基础', en: 'Basic' },
    'weapons.type2': { zh: '工具', en: 'Tool' },
    'weapons.type3': { zh: '武器', en: 'Weapon' },
    // Skills page
    'skills.section1.title': { zh: '四大核心属性', en: 'Four Core Attributes' },
    'skills.section1.desc': { zh: 'SCUM的角色系统基于四大核心属性，每个属性直接影响角色的基础能力和对应技能的学习速度。合理分配属性点是生存的关键。', en: 'SCUM character system is based on four core attributes. Each attribute directly affects base abilities and skill learning speed. Proper allocation is key to survival.' },
    'skills.section2.title': { zh: '推荐加点方案', en: 'Recommended Builds' },
    'skills.section2.desc': { zh: '根据不同的游玩风格，以下是三种经过验证的加点方案。属性点总数有限，合理分配至关重要。', en: 'Based on different playstyles, here are three proven builds. Attribute points are limited, so allocation is crucial.' },
    'skills.guide1.title': { zh: '力量 (STR)', en: 'Strength (STR)' },
    'skills.guide2.title': { zh: '体质 (CON)', en: 'Constitution (CON)' },
    'skills.guide3.title': { zh: '敏捷 (DEX)', en: 'Dexterity (DEX)' },
    'skills.guide4.title': { zh: '智力 (INT)', en: 'Intelligence (INT)' },
    'skills.guide5.title': { zh: '独狼生存流', en: 'Solo Survival' },
    // Basebuilding page
    'base.section1.title': { zh: '建造基础', en: 'Building Basics' },
    'base.section1.desc': { zh: '在SCUM中建造一个坚固的基地是长期生存的关键。了解建造系统的基础知识，才能打造出安全可靠的庇护所。', en: 'Building a solid base in SCUM is key to long-term survival. Understanding building basics helps create a safe shelter.' },
    'base.section2.title': { zh: '建筑模块', en: 'Building Modules' },
    'base.section2.desc': { zh: '以下是在领地范围内可以建造的各种建筑模块，从基础防御到功能性设施一应俱全。', en: 'Various building modules available within territory range, from basic defense to functional facilities.' },
    'base.card1.name': { zh: '领地旗（Puppet Flag）', en: 'Territory Flag' },
    'base.card2.name': { zh: '建造模式', en: 'Build Mode' },
    'base.card3.name': { zh: '建筑材料', en: 'Building Materials' },
    'base.card4.name': { zh: '木墙', en: 'Wood Wall' },
    'base.card5.name': { zh: '石墙', en: 'Stone Wall' },
    'base.type1': { zh: '核心', en: 'Core' },
    'base.type2': { zh: '操作', en: 'Operation' },
    'base.type3': { zh: '资源', en: 'Resource' },
    'base.value1': { zh: '基地核心', en: 'Base Core' },
    'base.value2': { zh: '布条x10 金属线x2 木头x5', en: 'Rags x10, Wire x2, Wood x5' },
    'base.value3': { zh: '定义领地范围', en: 'Defines Territory' },
    'base.value4': { zh: '长按查看/修理', en: 'Hold to View/Repair' },
    'base.value5': { zh: '打开建造菜单', en: 'Open Build Menu' },
    'base.value6': { zh: '需在领地范围内', en: 'Needs Territory' },
    'base.value7': { zh: '所有建筑需领地旗', en: 'All Buildings Need Flag' },
    // Crafting page
    'crafting.section1.title': { zh: '基础制作', en: 'Basic Crafting' },
    'crafting.section1.desc': { zh: '掌握基础制作技能是生存的第一步。从简单的工具到复杂的装备，制作系统让你能够利用环境中的资源。', en: 'Mastering basic crafting is the first step to survival. From simple tools to complex gear, the crafting system lets you use environmental resources.' },
    'crafting.section2.title': { zh: '进阶配方', en: 'Advanced Recipes' },
    'crafting.section2.desc': { zh: '随着技能提升，你可以解锁更复杂的制作配方，制造更强大的装备和工具。', en: 'As skills improve, you unlock complex recipes to craft more powerful equipment and tools.' },
    // Cooking page
    'cooking.section1.title': { zh: '烹饪基础', en: 'Cooking Basics' },
    'cooking.section1.desc': { zh: '在SCUM中，食物不仅能恢复能量，还会影响你的健康状态。学会烹饪是生存的重要技能。', en: 'In SCUM, food restores energy and affects health. Learning to cook is an essential survival skill.' },
    'cooking.section2.title': { zh: '食谱大全', en: 'Recipe Collection' },
    'cooking.section2.desc': { zh: '从简单的烤肉到复杂的炖菜，掌握各种食谱让你在末日世界中也能享受美食。', en: 'From simple roasted meat to complex stews, mastering recipes lets you enjoy food even in the apocalypse.' },
    // Hotkeys page
    'hotkeys.section1.title': { zh: '基础操作', en: 'Basic Controls' },
    'hotkeys.section1.desc': { zh: '熟悉游戏的基本操作是生存的第一步。掌握这些快捷键能让你在危险情况下快速反应。', en: 'Familiarizing with basic controls is the first step to survival. Mastering these hotkeys helps you react quickly in dangerous situations.' },
    'hotkeys.section2.title': { zh: '进阶操作', en: 'Advanced Controls' },
    'hotkeys.section2.desc': { zh: '这些进阶操作能让你更高效地管理物品、使用载具和进行战斗。', en: 'These advanced controls help you manage items, use vehicles, and fight more efficiently.' },
    // Enemies page
    'enemies.section1.title': { zh: '僵尸类型', en: 'Zombie Types' },
    'enemies.section1.desc': { zh: 'SCUM世界中的僵尸有不同的类型和行为模式。了解它们的特点能帮助你更好地应对威胁。', en: 'Zombies in SCUM have different types and behaviors. Understanding them helps you better handle threats.' },
    'enemies.section2.title': { zh: '机器人哨兵', en: 'Sentry Bots' },
    'enemies.section2.desc': { zh: '机器人哨兵是游戏中最危险的敌人之一。它们装备精良，火力强大，需要特殊策略来应对。', en: 'Sentry bots are among the most dangerous enemies. Well-equipped and heavily armed, they require special strategies.' },
    // Vehicles page
    'vehicles.section1.title': { zh: '载具类型', en: 'Vehicle Types' },
    'vehicles.section1.desc': { zh: 'SCUM中有多种载具可供选择，每种都有其特点和用途。了解它们能帮助你更好地规划移动路线。', en: 'SCUM offers various vehicles, each with unique characteristics. Understanding them helps plan travel routes.' },
    'vehicles.section2.title': { zh: '载具维护', en: 'Vehicle Maintenance' },
    'vehicles.section2.desc': { zh: '载具需要定期维护才能保持最佳状态。学会修理和保养是长期使用载具的关键。', en: 'Vehicles need regular maintenance to stay optimal. Learning repairs and upkeep is key to long-term use.' },
    // Diseases page
    'diseases.section1.title': { zh: '常见疾病', en: 'Common Diseases' },
    'diseases.section1.desc': { zh: '在SCUM的恶劣环境中，角色可能会感染各种疾病。了解症状和治疗方法至关重要。', en: 'In SCUM harsh environment, characters may contract diseases. Knowing symptoms and treatments is crucial.' },
    'diseases.section2.title': { zh: '预防措施', en: 'Prevention' },
    'diseases.section2.desc': { zh: '预防胜于治疗。保持良好的卫生习惯和适当的防护措施能大大降低患病风险。', en: 'Prevention is better than cure. Good hygiene and proper protection greatly reduce disease risk.' },
    // Armor page
    'armor.section1.title': { zh: '护甲类型', en: 'Armor Types' },
    'armor.section1.desc': { zh: 'SCUM中有多种护甲可供选择，从轻型防护到重型防弹装备，每种都有其适用场景。', en: 'SCUM offers various armor types, from light protection to heavy ballistic gear, each suited for different scenarios.' },
    'armor.section2.title': { zh: '穿透系统', en: 'Penetration System' },
    'armor.section2.desc': { zh: '了解护甲穿透机制能帮助你在战斗中做出更明智的决策，无论是攻击还是防御。', en: 'Understanding armor penetration helps make better combat decisions, whether attacking or defending.' },
    // Bunker page
    'bunker.section1.title': { zh: '地堡概述', en: 'Bunker Overview' },
    'bunker.section1.desc': { zh: '地堡是SCUM中最危险的区域之一，但也是最丰厚的战利品来源。充分准备后再进入。', en: 'Bunkers are among SCUM most dangerous areas but offer the best loot. Prepare thoroughly before entering.' },
    'bunker.section2.title': { zh: '攻略策略', en: 'Raid Strategies' },
    'bunker.section2.desc': { zh: '成功攻略地堡需要周密的计划和团队协作。以下是一些经过验证的策略。', en: 'Successfully raiding bunkers requires careful planning and teamwork. Here are proven strategies.' },
    // Fame page
    'fame.section1.title': { zh: '声望系统', en: 'Fame System' },
    'fame.section1.desc': { zh: '声望代表你在SCUM世界中的知名度。高声望带来好处，但也可能引来更多危险。', en: 'Fame represents your notoriety in SCUM. High fame brings benefits but may attract more danger.' },
    'fame.section2.title': { zh: '任务类型', en: 'Mission Types' },
    'fame.section2.desc': { zh: '完成各种任务可以获得声望和奖励。了解不同任务类型能帮助你更有效地提升声望。', en: 'Completing missions earns fame and rewards. Understanding mission types helps you level up more effectively.' },
    // Banking page
    'banking.section1.title': { zh: '银行系统', en: 'Banking System' },
    'banking.section1.desc': { zh: 'SCUM的银行系统允许你安全存储财富。了解如何使用银行能保护你的资产。', en: 'SCUM banking system lets you safely store wealth. Learning to use banks protects your assets.' },
    'banking.section2.title': { zh: '交易技巧', en: 'Trading Tips' },
    'banking.section2.desc': { zh: '与商人交易是获取稀有物品的重要途径。掌握交易技巧能让你获得更好的价格。', en: 'Trading with merchants is key to obtaining rare items. Mastering trading gets you better prices.' },
    // Zones page
    'zones.section1.title': { zh: '安全区', en: 'Safe Zones' },
    'zones.section1.desc': { zh: '安全区是新手玩家的避风港。在这里你可以安心交易、休息，不用担心被攻击。', en: 'Safe zones are havens for new players. Trade and rest here without fear of attack.' },
    'zones.section2.title': { zh: '危险区域', en: 'Danger Zones' },
    'zones.section2.desc': { zh: '危险区域有高价值战利品，但也伴随着更大的风险。只有准备充分的玩家才能生存。', en: 'Danger zones have high-value loot but greater risks. Only well-prepared players can survive.' },
    // Tips page
    'tips.section1.title': { zh: '新手技巧', en: 'Beginner Tips' },
    'tips.section1.desc': { zh: '这些技巧能帮助新手玩家更快适应SCUM的世界，避免常见的错误。', en: 'These tips help new players adapt to SCUM faster and avoid common mistakes.' },
    'tips.section2.title': { zh: '高手进阶', en: 'Advanced Tips' },
    'tips.section2.desc': { zh: '这些进阶技巧能让你在游戏中获得优势，成为真正的生存专家。', en: 'These advanced tips give you an edge in the game, making you a true survival expert.' },
    // Metabolism page
    'metabolism.section1.title': { zh: '新陈代谢机制', en: 'Metabolism Mechanics' },
    'metabolism.section1.desc': { zh: 'SCUM拥有复杂的新陈代谢系统。了解营养需求能帮助你保持最佳状态。', en: 'SCUM has a complex metabolism system. Understanding nutritional needs helps maintain peak condition.' },
    'metabolism.section2.title': { zh: '营养管理', en: 'Nutrition Management' },
    'metabolism.section2.desc': { zh: '合理搭配饮食，确保摄入足够的蛋白质、碳水化合物和维生素。', en: 'Balance your diet to ensure adequate protein, carbohydrates, and vitamins.' },
    // Medicine page
    'medicine.section1.title': { zh: '常用药品', en: 'Common Medicines' },
    'medicine.section1.desc': { zh: '了解各种药品的用途和使用时机，能在关键时刻救你一命。', en: 'Knowing medicine uses and timing can save your life in critical moments.' },
    'medicine.section2.title': { zh: '急救处理', en: 'First Aid' },
    'medicine.section2.desc': { zh: '掌握基本的急救技能，能在受伤时及时处理，避免伤势恶化。', en: 'Mastering basic first aid helps treat injuries promptly and prevent worsening conditions.' },
    // Tools page
    'tools.section1.title': { zh: '基础工具', en: 'Basic Tools' },
    'tools.section1.desc': { zh: '工具是生存的基础。从简单的石刀到复杂的维修工具，每种都有其用途。', en: 'Tools are survival basics. From simple stone knives to complex repair tools, each has its use.' },
    'tools.section2.title': { zh: '专业工具', en: 'Specialized Tools' },
    'tools.section2.desc': { zh: '专业工具能帮助你完成更复杂的任务，如车辆维修、电子设备操作等。', en: 'Specialized tools help with complex tasks like vehicle repairs and electronic operations.' },
    // Sniping page
    'sniping.section1.title': { zh: '狙击镜类型', en: 'Scope Types' },
    'sniping.section1.desc': { zh: '不同的狙击镜有不同的放大倍数和特点。选择合适的瞄准镜是成功的关键。', en: 'Different scopes have varying magnification and features. Choosing the right one is key to success.' },
    'sniping.section2.title': { zh: '归零调整', en: 'Zeroing' },
    'sniping.section2.desc': { zh: '学会调整瞄准镜的归零设置，能让你在不同距离精准命中目标。', en: 'Learning to adjust scope zeroing lets you hit targets accurately at different distances.' },
    // Server page
    'server.section1.title': { zh: '服务器类型', en: 'Server Types' },
    'server.section1.desc': { zh: '不同类型的服务器有不同的规则和设置。选择适合自己的服务器能获得更好的游戏体验。', en: 'Different server types have different rules. Choosing the right one enhances your gaming experience.' },
    'server.section2.title': { zh: '常用设置', en: 'Common Settings' },
    'server.section2.desc': { zh: '了解常见的服务器设置参数，能帮助你找到最适合自己的游戏环境。', en: 'Understanding common server settings helps you find the most suitable gaming environment.' },
    // Clothing page
    'clothing.section1.title': { zh: '服装类型', en: 'Clothing Types' },
    'clothing.section1.desc': { zh: '不同的服装提供不同的防护和隐蔽效果。根据环境选择合适的服装很重要。', en: 'Different clothing offers varying protection and concealment. Choosing appropriate gear for the environment is important.' },
    'clothing.section2.title': { zh: '装备搭配', en: 'Gear Loadouts' },
    'clothing.section2.desc': { zh: '合理的装备搭配能让你在战斗和生存中更加得心应手。', en: 'Proper gear loadouts make you more effective in combat and survival.' },
};

let currentLang = localStorage.getItem('scum-lang') || 'zh';

function toggleLanguage() {
    currentLang = currentLang === 'zh' ? 'en' : 'zh';
    localStorage.setItem('scum-lang', currentLang);
    applyTranslations();
    // Re-render the currently active tip detail panel
    reRenderActiveTip();
    // Update page title
    if (currentLang === 'en') {
        document.title = 'SCUM Survival Guide | Complete Survival Handbook';
    } else {
        document.title = 'SCUM 人渣生存攻略 | 完整生存指南';
    }
}

function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[key] && translations[key][currentLang]) {
            el.innerHTML = translations[key][currentLang];
        }
    });
    // Update lang toggle text
    const langBtn = document.querySelector('.lang-toggle');
    if (langBtn) {
        langBtn.textContent = currentLang === 'zh' ? 'EN' : '中文';
    }
    document.documentElement.lang = currentLang === 'zh' ? 'zh-CN' : 'en';
}

// Re-render the active tip detail panel when language changes
function reRenderActiveTip() {
    if (typeof tipsData === 'undefined') return;
    const activeItem = document.querySelector('.tip-item.active');
    if (activeItem) {
        const items = document.querySelectorAll('.tip-item');
        const index = Array.from(items).indexOf(activeItem);
        if (index >= 0) {
            showTip(index);
        }
    }
}

// Apply translations on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyTranslations);
} else {
    // DOM already loaded (script loaded at bottom of body)
    applyTranslations();
}


