---
id: IDEA-0004
status: draft
last-verified: 2026-11-04
---
# Save recipes, show favorites, turn YouTube/Instagram/TikTok video links into step-by-step recipes with AI

## Summary
A personal cookbook: paste a YouTube, Instagram or TikTok link and get clean ingredients and numbered steps back, then save it, mark favorites and find it again.
Market review: [[video-recipe-market]].

## Decision
- Worth building: no — 18+ apps already do all three parts, and the leader has 327k ratings, funding and about $2M a year (estimate). See [[video-recipe-market]].
- Kill reason checked: "someone already does it well, for free or cheap". The review found it: ReciMe, Deglaze, Pestle and Flavorish each cover save, favorites, video import and cook mode.
- For the owner's own use: use the free tier of an existing app (Pestle or Deglaze). hamburg stays the cookbook of dishes that were cooked and liked ([[growth-rule]]).
- Revisit if: a test shows these apps fail on Hindi or Hinglish cooking videos, or on Indian vegetarian dishes. Test it by importing 10 such links into each of the top 3 apps and counting the wrong imports.

## Decided in discussion (2026-11-04)
- Output format: text only. Inputs are a video link and the user's own voice in a regional language. No video is stored.
- When to convert: on save, keep the free text (captions, post caption, description), or the speech-to-text transcript when there is none, because a video can go down. Run the text → recipe step when the user opens it to cook.
- Cost order: free text first, then Groq Whisper (Hindi/English, ~₹0.06/min), Sarvam only for regional audio (~₹0.50/min). On-device Whisper or IndicConformer is the ₹0 option, not tested.
- Same video saved by many users: convert once and reuse the text.
- Plans: unlimited saves; 5 conversions a month free; Pro unlimited (fair use 200/month) at ₹79–99/month or ₹499–599/year, $2.99/month or $19.99/year. No lifetime purchase.
- Home: a separate app, not AskCal (AskCal is a calorie logger and the marketing focus). Its only link to AskCal: send a recipe's calories there. hamburg only if its growth rule gains a separate "to try" list.
- Different because: voice → text in regional languages; none of the top 4 apps offers it in its store description.

## Open
- Market: global, not India only (company rule). Rework the pricing and the "different because" line for a global market.
- App name: not chosen. Global options: Recipe Echo, Saywhisk, Cookspoken, Reel to Meal, Hearth Notes; availability not checked.
- Paused 2026-11-04 by the owner: "we will comeback later".
- Pipeline: research is done ([[video-recipe-market]]). Next is an experiment: 10 Hindi/Marathi reels and 10 voice notes, Sarvam vs Whisper and Haiku vs Sonnet, counting wrong ingredients and quantities. Then options → plan (gated) → design.
- Copyright: whether recipe text shared across users is allowed.
- Payment: whether Sarvam, Groq and the Anthropic API take UPI or prepaid credits without a credit card.

## If yes (only if the revisit test shows a gap)
- MVP features: paste a link → ingredients and steps; save; favorites. Left out: meal plan, grocery list, nutrition, sharing.
- Different because: Hindi and Hinglish videos, vegetarian only, no import limit. Ties to the "paywall and import limit" and "wrong import" complaints.
- Earning chance: low. Indian users pay little (₹99/month × 1% of maybe 10k installs is about ₹10k a month), and every import costs an AI call.
- Timeline: about 6 weeks for the MVP, beside a day job.
- Resources: have one person, free tiers, the Expo and RevenueCat setup. Missing: a free or cheap way to read Instagram and TikTok videos, and an AI budget.
- Challenges: Instagram and TikTok have no public API to read a video, and downloading breaks their terms. Many videos are music only, with text on screen. Every import has an AI cost. Store review may object to downloading content.

## Verdict
- 2026-11-04 · do-it-differently · stopped · C-02, C-04, C-05, C-14 · Save recipes, show favorites, turn YouTube/Instagram/TikTok video links into step-by-step recipes with AI
- 2026-11-04 · push-back · stopped · C-05, C-06, C-07, C-14 · Video link to step-by-step recipe app, after market review
