---
layout: page
title: Board of Trustees and Officers
---

{% for trustee in site.data.board.trustees %}
- <span lang="zh-HK">{{ trustee.name.zh }}{% if trustee.role %}（{{ trustee.role.zh }}）{% endif %}</span><br />
  {{ trustee.name.en }} {% if trustee.role %}({{ trustee.role.en }}){% endif %}
{% endfor %}
