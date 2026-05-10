# SCUM 人渣生存攻略网站

一个全面的SCUM游戏攻略网站，包含新手入门、地图资源、生存技巧等内容。

## 📁 项目结构

```
scum-guide/
├── index.html          # 首页
├── sitemap.xml         # 网站地图
├── robots.txt          # 搜索引擎配置
├── scum-hero.jpg       # 首页背景图
├── css/
│   └── styles.css      # 主样式文件
├── js/
│   └── main.js         # 主脚本文件
├── images/
│   └── favicon.svg     # 网站图标
└── pages/
    ├── weapons.html    # 武器详解
    ├── crafting.html   # 制作配方
    ├── enemies.html    # 敌人图鉴
    ├── privacy.html    # 隐私政策
    └── disclaimer.html # 免责声明
```

## 🚀 部署到 GitHub Pages

### 方法一：直接上传

1. 在 GitHub 上创建新仓库（如 `scum-guide`）
2. 上传整个 `scum-guide` 文件夹的内容
3. 进入仓库 Settings → Pages
4. Source 选择 `Deploy from a branch`
5. Branch 选择 `main`，文件夹选择 `/ (root)`
6. 点击 Save，等待部署完成

### 方法二：使用 Git 命令

```bash
# 初始化仓库
cd scum-guide
git init
git add .
git commit -m "Initial commit: SCUM Guide website"

# 添加远程仓库
git remote add origin https://github.com/你的用户名/scum-guide.git
git branch -M main
git push -u origin main

# 启用 GitHub Pages
# 在 GitHub 网页端 Settings → Pages 中配置
```

## ✅ 部署前检查清单

- [ ] 更新 `sitemap.xml` 中的域名（将 `yourusername` 替换为你的 GitHub 用户名）
- [ ] 更新 `robots.txt` 中的域名
- [ ] 检查所有页面链接是否正确
- [ ] 测试移动端响应式布局
- [ ] 验证所有图片是否正确加载

## 📝 自定义域名（可选）

如果你有自己的域名：

1. 在仓库根目录创建 `CNAME` 文件，内容为你的域名
2. 在域名服务商处添加 CNAME 记录指向 `你的用户名.github.io`
3. 等待 DNS 生效

## 🔧 本地预览

```bash
# 使用 Python 简易服务器
cd scum-guide
python3 -m http.server 8080

# 然后在浏览器访问 http://localhost:8080
```

## 📄 许可证

本网站内容仅供学习和参考使用。SCUM™ 是 Gamepires 的注册商标。

---

如有问题或建议，欢迎在 GitHub 上提交 Issue。
