# SBTI-test-cn
for my driend can not visit sbti.unun.dev
# SBTI-test-cn
for my driend can not visit sbti.unun.dev
SBTI 趣味人格测试网站

纯前端静态版，可本地运行、国内部署分享

项目说明

• 复刻热门 SBTI 人格测试，无后端、无数据库

• 纯 HTML + CSS + JavaScript，双击即可打开

• 界面简洁、移动端适配，国内访问无压力

文件结构
sbti-test/
├─ index.html    # 主页面（开始/答题/结果）
├─ style.css      # 页面样式
├─ script.js      # 题目、答题逻辑、结果计算
└─ README.md      # 说明文档
本地使用方法

1. 下载或新建文件夹，将三个文件放入

2. 直接双击打开 index.html

3. 开始答题 → 查看人格类型

部署分享（国内可访问）

方法1：Gitee Pages（推荐）

1. 注册/登录 Gitee

2. 新建仓库，上传所有静态文件

3. 进入仓库「服务」→「Gitee Pages」开启

4. 生成网址后即可发给朋友

方法2：阿里云 OSS / 腾讯云 COS

1. 新建存储桶，开启「静态网站」

2. 上传所有文件

3. 使用默认域名或绑定自己的域名分享

功能介绍

• 单选题答题，支持上一题/下一题

• 自动记录选择，防止漏选

• 按选项频次统计最终人格类型

• 支持重新测试

自定义修改

• 在 script.js 中修改 questions 增删题目

• 在 resultMap 中修改人格名称与描述

• 在 style.css 中调整颜色、背景、字体

注意事项

• 本项目仅为娱乐用途，非专业心理测试

• 请勿用于商业用途，尊重原创意版权

• 部署时无需任何服务器环境，纯静态即可运行
