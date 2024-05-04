---
layout: page
title: Board of Honorary Advisors
---

{% for advisor in site.data.board.advisors %}
- <span lang="zh-HK">{{ advisor.name.zh }}</span><br />
  {{ advisor.name.en }}
{% endfor %}

## Honorary Legal Advisor

{% for advisor in site.data.board.legal_advisors %}
- <span lang="zh-HK">{{ advisor.name.zh }}</span><br />
  {{ advisor.name.en }}
{% endfor %}

## Honorary Auditor

{% for auditor in site.data.board.auditors %}
- <span lang="zh-HK">{{ auditor.name.zh }}</span><br />
  {{ auditor.name.en }}
{% endfor %}

## Honorary Financial Advisor

{% for advisor in site.data.board.financial_advisors %}
- <span lang="zh-HK">{{ advisor.name.zh }}</span><br />
  {{ advisor.name.en }}
{% endfor %}

## Honorary Editor

{% for editor in site.data.board.editors %}
- <span lang="zh-HK">{{ editor.name.zh }}</span><br />
  {{ editor.name.en }}
{% endfor %}
