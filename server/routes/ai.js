import express from 'express';
import 'dotenv/config';

const router = express.Router();

const SYSTEM_PROMPT = `You are a senior Growth Advisor and Client Consultant at AZS Solutions (azssolutions.com), an elite e-commerce marketplace and performance marketing partner headquartered in Riyadh, Dubai, London, and New York.

ABSOLUTE IDENTITY RULES:
- NEVER identify or refer to yourself as an AI, bot, robot, automated system, language model, or Gemini.
- If asked "Who are you?", "What is your name?", or about your identity, always reply: "I am an advisor with AZS Solutions" or "I am your AZS Solutions Growth Consultant."
- Speak naturally, warmly, and authoritatively as an experienced human e-commerce strategist and consultant.

YOUR CORE EXPERTISE:
1. MARKETPLACES DIVISION:
   - Amazon KSA (Amazon.sa), Amazon UAE (Amazon.ae), Amazon USA (Amazon.com), and Amazon UK (Amazon.co.uk).
   - Accredited Amazon SPN Partner & Noon Certified Growth Partner.
   - Buy Box algorithmic defense, A+ content storytelling, localized Arabic listing optimization, Sponsored Products, Sponsored Brands, Sponsored Display, and Amazon DSP programmatic ads.
   - Fulfilled by Amazon (FBA) and Fulfilled by Noon (FBN Express) warehouse logistics across Riyadh and Jeddah.
   - Trendyol GCC Expansion: Surging Turkish/EU cross-border trade corridor into Saudi Arabia and UAE with automated Arabic attribute mapping and flash-sale marketing.

2. SHOPIFY & D2C PERFORMANCE DIVISION:
   - Shopify Plus development, frictionless mobile-first checkout, bilingual English/Arabic RTL user journeys.
   - Meta Ads (Instagram & Facebook Advantage+ catalogs), TikTok Ads & Creator UGC, Google Performance Max (PMax).
   - Localized GCC checkout integrations: Tabby & Tamara Buy-Now-Pay-Later (BNPL), Apple Pay, Mada debit, and ZATCA Phase 2 tax invoicing.

3. PROVEN PORTFOLIO PROOF & METRICS:
   - $142.8M+ verified portfolio GMV run-rate.
   - 8.40x blended average ROAS across client ad spend.
   - 93.4% Buy Box win rate across competitive categories.
   - 35+ enterprise brands scaled, including HomeMaster (Air Fryers, +11,963% growth, 14.43x ROAS), LIVORA (French Linen fashion, +104% MoM, 4.62x ROAS), Creative Things (Studio Audio, SAR 208k+ run-rate, 6.85x ROAS).

YOUR MISSION & TONE:
- Be welcoming, authoritative, polite, and consultative.
- Provide actionable e-commerce insights. Keep answers crisp (2-3 concise paragraphs or bullet points).
- If the visitor asks in Arabic, answer in fluent, professional Modern Standard Arabic (فصحى مهنية). If in English, answer in polished business English.
- Always recommend claiming the "Free 360° Marketplace & Storefront Growth Audit" (via the "Book Audit" button or /book-audit) or contacting the executive team at hello@azssolutions.com.
`;

const CANDIDATE_MODELS = [
  'gemini-3.5-flash',
  'gemini-3.6-flash',
  'gemini-flash-latest',
  'gemini-3.1-flash-lite'
];

async function callGemini(messages) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error('GEMINI_API_KEY environment variable is not configured');
  }
  
  // Format message history for Gemini API
  const contents = [];
  for (const m of messages) {
    contents.push({
      role: m.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: m.content }]
    });
  }

  let lastError = null;

  for (const modelName of CANDIDATE_MODELS) {
    try {
      const url = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${apiKey}`;
      const payload = {
        systemInstruction: {
          parts: [{ text: SYSTEM_PROMPT }]
        },
        contents,
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 600,
          topP: 0.95
        }
      };

      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        signal: AbortSignal.timeout(12000),
        body: JSON.stringify(payload)
      });

      const data = await response.json();

      if (data.candidates && data.candidates[0]?.content?.parts) {
        const parts = data.candidates[0].content.parts;
        const nonThoughtParts = parts.filter(p => !p.thought && p.text);
        let extracted = nonThoughtParts.length > 0
          ? nonThoughtParts.map(p => p.text).join('\n').trim()
          : (parts[parts.length - 1]?.text || '').trim();

        extracted = extracted.replace(/<thought>[\s\S]*?<\/thought>/gi, '').trim();

        if (extracted) {
          return extracted;
        }
      }

      if (data.error) {
        lastError = data.error.message;
        console.warn(`[Gemini AI] Model ${modelName} returned notice:`, data.error.message);
      }
    } catch (err) {
      lastError = err.message;
      console.warn(`[Gemini AI] Model ${modelName} attempt:`, err.message);
    }
  }

  throw new Error(lastError || 'All Gemini models busy');
}

function getContextualFallback(query = '') {
  const q = query.toLowerCase();
  if (q.includes('amazon') || q.includes('fba') || q.includes('buy box') || q.includes('saudi')) {
    return "As an accredited **Amazon SPN (Service Provider Network) Partner** headquartered in Riyadh, AZS Solutions scales brands on **Amazon Saudi Arabia (Amazon.sa)** and UAE through:\n\n• **Algorithmic Buy Box Defense:** Maintaining a 93.4% average win rate across high-velocity ASINs.\n• **Localized A+ & Storefront Storytelling:** High-converting bilingual Arabic/English content.\n• **Full-Funnel Advertising:** Sponsored Products, Brands, and Amazon DSP programmatic ads with verified 8.4x blended ROAS.\n• **FBA Logistics:** Inbound prep and warehouse replenishment in Riyadh & Jeddah.\n\nClaim your **Free 360° Marketplace Growth Audit** using the **Book Audit** button at the top!";
  }
  if (q.includes('noon') || q.includes('fbn')) {
    return "AZS Solutions is a **Certified Noon Growth Partner** across Saudi Arabia and the UAE:\n\n• **Noon FBN Express Onboarding:** Rapid catalog indexing and warehouse transfer to Riyadh & Dubai hubs.\n• **Mega Campaign Dominance:** Dedicated playbooks for Yellow Friday, Ramadan Mega Sales, and Super Saver Weeks.\n• **Buy Now Pay Later Readiness:** Automated integration with Tabby & Tamara to maximize checkout conversion.\n\nReady to scale on Noon? Click **Book Audit** above or email **hello@azssolutions.com**.";
  }
  if (q.includes('trendyol') || q.includes('turkey') || q.includes('turkish')) {
    return "Our **Trendyol GCC Launch Corridor** helps Turkish and European brands capture surging market demand in Saudi Arabia and the UAE:\n\n• **Automated Arabic Attribute Mapping:** Seamless Turkish-to-Arabic catalog localization.\n• **Cross-Border Customs & Clearance:** Streamlined GCC logistics and VAT/ZATCA compliance.\n• **Flash-Sale Algorithm Push:** Leveraging Trendyol's top-of-funnel discovery campaigns.\n\nLet's evaluate your catalog's GCC potential with a **Free 360° Growth Audit**!";
  }
  if (q.includes('shopify') || q.includes('d2c') || q.includes('meta') || q.includes('tiktok') || q.includes('ads')) {
    return "Our **Shopify Plus & D2C Performance Suite** powers industry-leading direct-to-consumer growth in the Middle East:\n\n• **Bilingual Arabic/English RTL Architecture:** Frictionless mobile-first storefronts.\n• **Meta & TikTok Advantage+:** Creator UGC ad funnels delivering our portfolio-wide 8.4x average ROAS.\n• **GCC Payment Stack:** Native Mada, Apple Pay, Tabby, Tamara, and ZATCA Phase 2 electronic invoicing.\n\nClick **Book Audit** to receive a free review of your storefront and ad accounts!";
  }
  return "Thank you for reaching out to **AZS Solutions**! We are an accredited **Amazon SPN, Noon Certified, and Shopify Plus Growth Partner** headquartered in Riyadh with offices in Dubai, London, and New York.\n\nAcross our portfolio of 35+ enterprise brands, we have generated **$142.8M+ in verified GMV** with an average **8.40x ad ROAS** and **93.4% Buy Box win rate**.\n\nYou can claim your **Free 360° Marketplace & Storefront Growth Audit** right now using the **Book Audit** button at the top of the page, or email our directors directly at **hello@azssolutions.com**.";
}

// POST /api/ai/chat
router.post('/chat', async (req, res) => {
  try {
    const { messages } = req.body;

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({
        success: false,
        message: 'A non-empty messages array is required.'
      });
    }

    const recentMessages = messages.slice(-8);
    const lastUserQuery = [...recentMessages].reverse().find(m => m.role === 'user')?.content || '';

    try {
      const reply = await callGemini(recentMessages);
      return res.json({
        success: true,
        reply,
        model: 'gemini-3.5-flash',
        timestamp: new Date().toISOString()
      });
    } catch (geminiErr) {
      console.warn('[Gemini AI Fallback Triggered]:', geminiErr.message);
      const fallbackReply = getContextualFallback(lastUserQuery);
      return res.json({
        success: true,
        reply: fallbackReply,
        model: 'azs-knowledge-engine',
        timestamp: new Date().toISOString()
      });
    }
  } catch (error) {
    console.error('[AI Advisor Critical Error]', error);
    return res.json({
      success: true,
      reply: getContextualFallback(),
      model: 'azs-knowledge-engine'
    });
  }
});

export default router;
