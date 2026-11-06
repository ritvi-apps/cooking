---
type: synthesis
last-verified: 2026-11-04
ideas: [IDEA-0004]
---

## Summary
The market is full. At least 18 apps turn a social video link into a recipe, and the leader (ReciMe) has 327k ratings and funding. The one clear gap: users hate import limits behind a paywall, and imports that come out wrong.

## Competitors

| Product | Platform | Price | Rating (count) | Last update | Earnings estimate (source) |
|---|---|---|---|---|---|
| [ReciMe](https://apps.apple.com/us/app/recime-recipes-meal-planner/id1593779280) | iOS · Android · web | free, then $6.99–$69.99 | 4.79 (327k) | 2026-11 | ~$2M a year, modeled (prospeo.io, 2026) |
| [Deglaze](https://apps.apple.com/us/app/deglaze-recipe-manager/id6443578246) | iOS · Android | free, Pro subscription | 4.87 (4.1k) | 2026-11 | unknown |
| [Pestle](https://apps.apple.com/us/app/pestle-recipe-manager/id1574776971) | iOS · macOS | free, paid tier | 4.73 (1.8k) | 2026-10 | unknown |
| [Flavorish](https://apps.apple.com/us/app/flavorish-save-any-recipe/id6478546136) | iOS · Android | free, $4.99/mo | 4.74 (1.7k) | 2026-11 | unknown |
| Eggcellent (small indie) | web | subscription | — | 2026-04 | ~$18k total, 2 subscribers (trustmrr.com) |

## Features

| Feature | ReciMe | Deglaze | Pestle | Flavorish |
|---|---|---|---|---|
| Import from IG / TikTok / YouTube | yes (limit on free) | yes (limit on free) | yes | yes (limit on free) |
| Uses audio when no transcript | yes | unknown | unknown | unknown |
| Photo / cookbook scan | yes | yes | yes | yes |
| Collections / favorites | yes | yes | yes | yes |
| Step-by-step cook mode | yes | yes | yes, hands-free | yes, many dishes at once |
| Grocery list | yes, by aisle | yes, by aisle (Pro) | yes | yes, by aisle |
| Meal plan | yes | yes (Pro) | yes, 14 days | yes |
| Scale and convert units | yes | yes (Pro) | yes | yes |
| Nutrition | yes (paid) | no | no | yes |
| Household sharing | share only | yes, free | yes | yes |
| Link to ChatGPT / Claude | no | yes (Pro) | no | no |

Every feature in the idea (save, favorites, video → steps) is already free or cheap in all four.

## What users say

**Top complaints** (ReciMe 200 + Flavorish 126 newest reviews)
- Paywall, import limit, surprise charges: "free", "trial" and "subscription" are among the top words, and 1★ is 33% and 41% of the reviews read.
- Wrong imports: steps end up in the ingredient list, and measurements come out wrong.
- Crashes and lag, mostly on iPad.

**Top praise**
- No more lost screenshots and saved TikToks.
- No ads or life stories, just ingredients and steps.
- Grocery list and meal plan from saved recipes.

Quotes: `raw/2026-11-04-video-recipe-market/reviews.md`.

## Screens and videos
- ReciMe, Flavorish, Pestle, Deglaze: two screenshots each in `.context/raw/2026-11-04-video-recipe-market/` (recime, flavorish, pestle, deglaze)
- Store page videos: the links in the table above.

## Market fit
- Who pays: home cooks who save recipes from social media. Store reviews read as mostly US parents who plan the family's meals.
- How many: ReciMe claims 15 million users (release notes, 2026-11). Not checked.
- What they use today: screenshots, saved posts, notes, and the apps above.
- Not checked: whether Hindi or Hinglish videos, or Indian vegetarian cooking, are handled badly. That is the only niche this review could not rule out.

## Sources
- `mcp-appstore` search_app, get_app_details, analyze_reviews, fetch_reviews, get_pricing_details, 2026-11-04
- https://prospeo.io/c/recime-revenue
- https://www.smartcompany.com.au/startupsmart/news/aussie-cooking-app-startup-recime-raises-1-5-million-seed/
- https://trustmrr.com/startup/eggcellent
- https://trustmrr.com/startup/citron-app
- https://techcrunch.com/2024/11/25/pestle-recipe-app-can-now-save-dishes-from-tiktok
