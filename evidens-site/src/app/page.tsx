'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  // Phase 1: 5 Columns opening
  const [columnsOpened, setColumnsOpened] = useState(false);
  // Phase 2: Bottom rock & jar rising from bottom
  const [heroAnimated, setHeroAnimated] = useState(false);
  // Phase 3: Left & Right rocks + "Evidens.png" wordmark appearing
  const [secondaryRevealed, setSecondaryRevealed] = useState(false);
  // Phase 4: Rocks & wordmark recede, showing closed jar in spotlight
  const [productOnlyStage, setProductOnlyStage] = useState(false);
  // Phase 5 (4th Animation): Lid opens and 4 ingredients emerge
  const [lidOpened, setLidOpened] = useState(false);
  // Phase 5B: Lid closes again and ingredients retract
  const [lidClosing, setLidClosing] = useState(false);
  // Phase 6 (5th Animation): 3 Floating Rocks with 3 Products & "RICH CREAM" + "EVIDENS" text
  const [trioShowcaseStage, setTrioShowcaseStage] = useState(false);
  // Phase 7: Middle product moves to hand palm (Palm Section)
  const [palmStage, setPalmStage] = useState(false);
  // Phase 8: Botanical Luxury Section with Palm Leaves & Rocks & BUY NOW
  const [botanicalHeroStage, setBotanicalHeroStage] = useState(false);
  // Overlay clean removal from DOM
  const [overlayRemoved, setOverlayRemoved] = useState(false);

  useEffect(() => {
    // 1. Columns open after icon shrink (at 3.0s)
    const timer1 = setTimeout(() => {
      setColumnsOpened(true);
      setHeroAnimated(true);
    }, 3000);

    // 2. Second stage: Left rock, right rock, and Evidens wordmark appear (at 4.6s)
    const timer2 = setTimeout(() => {
      setSecondaryRevealed(true);
    }, 4600);

    // 3. Remove overlay from DOM (at 4.8s)
    const timerOverlay = setTimeout(() => {
      setOverlayRemoved(true);
    }, 4800);

    // 4. Third animation: Remove all rocks and text, display product in spotlight (at 7.0s)
    const timer3 = setTimeout(() => {
      setProductOnlyStage(true);
    }, 7000);

    // 5. Fourth animation: Lid opens and 4 ingredients emerge (at 8.8s)
    const timer4 = setTimeout(() => {
      setLidOpened(true);
    }, 8800);

    // 5B. Lid closes again and ingredients retract (at 12.0s)
    const timerClose = setTimeout(() => {
      setLidClosing(true);
      setLidOpened(false);
    }, 12000);

    // 6. Fifth animation: Move to center small rock with 3 products showcase (at 13.5s)
    const timer5 = setTimeout(() => {
      setTrioShowcaseStage(true);
    }, 13500);

    // 7. Sixth animation: Middle product moves onto the palm of the hand (at 18.0s)
    const timer6 = setTimeout(() => {
      setPalmStage(true);
    }, 18000);

    // 8. Seventh animation: Botanical Luxury Hero section with Palm leaves & rocks (at 23.5s)
    const timer7 = setTimeout(() => {
      setBotanicalHeroStage(true);
    }, 23500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timerOverlay);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timerClose);
      clearTimeout(timer5);
      clearTimeout(timer6);
      clearTimeout(timer7);
    };
  }, []);

  const handleManualSkip = () => {
    if (!columnsOpened) {
      setColumnsOpened(true);
      setHeroAnimated(true);
      setTimeout(() => setSecondaryRevealed(true), 1000);
      setTimeout(() => setProductOnlyStage(true), 2000);
      setTimeout(() => setLidOpened(true), 3000);
      setTimeout(() => {
        setLidClosing(true);
        setLidOpened(false);
      }, 4200);
      setTimeout(() => setTrioShowcaseStage(true), 5200);
      setTimeout(() => setPalmStage(true), 6800);
      setTimeout(() => setBotanicalHeroStage(true), 8400);
      setTimeout(() => setOverlayRemoved(true), 1200);
    } else if (!secondaryRevealed) {
      setSecondaryRevealed(true);
      setTimeout(() => setProductOnlyStage(true), 1200);
      setTimeout(() => setLidOpened(true), 2200);
      setTimeout(() => {
        setLidClosing(true);
        setLidOpened(false);
      }, 3400);
      setTimeout(() => setTrioShowcaseStage(true), 4400);
      setTimeout(() => setPalmStage(true), 6000);
      setTimeout(() => setBotanicalHeroStage(true), 7600);
    } else if (!productOnlyStage) {
      setProductOnlyStage(true);
      setTimeout(() => setLidOpened(true), 1000);
      setTimeout(() => {
        setLidClosing(true);
        setLidOpened(false);
      }, 2200);
      setTimeout(() => setTrioShowcaseStage(true), 3200);
      setTimeout(() => setPalmStage(true), 4800);
      setTimeout(() => setBotanicalHeroStage(true), 6400);
    } else if (!lidOpened && !lidClosing) {
      setLidOpened(true);
      setTimeout(() => {
        setLidClosing(true);
        setLidOpened(false);
      }, 1800);
      setTimeout(() => setTrioShowcaseStage(true), 2800);
      setTimeout(() => setPalmStage(true), 4400);
      setTimeout(() => setBotanicalHeroStage(true), 6000);
    } else if (lidOpened) {
      setLidClosing(true);
      setLidOpened(false);
      setTimeout(() => setTrioShowcaseStage(true), 1200);
      setTimeout(() => setPalmStage(true), 2800);
      setTimeout(() => setBotanicalHeroStage(true), 4400);
    } else if (!trioShowcaseStage) {
      setTrioShowcaseStage(true);
      setTimeout(() => setPalmStage(true), 1800);
      setTimeout(() => setBotanicalHeroStage(true), 3400);
    } else if (!palmStage) {
      setPalmStage(true);
      setTimeout(() => setBotanicalHeroStage(true), 1800);
    } else if (!botanicalHeroStage) {
      setBotanicalHeroStage(true);
    }
  };

  return (
    <div className={styles.pageWrapper}>
      {/* ── 5-COLUMN GRADUAL REVEAL OVERLAY ── */}
      {!overlayRemoved && (
        <div className={`${styles.columnOverlay} ${columnsOpened ? styles.overlayInactive : ''}`}>
          {/* 5 Black Curtain Columns */}
          <div className={`${styles.column} ${styles.col1} ${columnsOpened ? styles.colOpened : ''}`} />
          <div className={`${styles.column} ${styles.col2} ${columnsOpened ? styles.colOpened : ''}`} />
          <div className={`${styles.column} ${styles.col3} ${columnsOpened ? styles.colOpened : ''}`} />
          <div className={`${styles.column} ${styles.col4} ${columnsOpened ? styles.colOpened : ''}`} />
          <div className={`${styles.column} ${styles.col5} ${columnsOpened ? styles.colOpened : ''}`} />

          {/* Brand Icon */}
          <div className={`${styles.iconContainer} ${columnsOpened ? styles.iconHidden : ''}`}>
            <Image
              src="/assets/icon.png"
              alt="EviDenS de Beauté Icon"
              width={180}
              height={295}
              className={styles.brandIcon}
              priority
            />
          </div>

          {/* Prompt line */}
          <div className={`${styles.overlayPrompt} ${columnsOpened ? styles.promptHidden : ''}`}>
            <span className={styles.promptText}>EviDenS de Beauté</span>
            <span className={styles.promptLine} />
          </div>
        </div>
      )}

      {/* ── MAIN HERO & INTERACTIVE SECTION ── */}
      <main
        className={`${styles.heroSection} ${
          palmStage && !botanicalHeroStage ? styles.palmStageActive : ''
        } ${botanicalHeroStage ? styles.botanicalStageActive : ''}`}
        onClick={handleManualSkip}
      >
        {/* Top Navbar */}
        <nav className={styles.navbar}>
          <div className={styles.navLinks}>
            <Link href="/" className={`${styles.navItem} ${styles.activeNavItem}`}>
              Home
            </Link>
            <Link href="/products" className={styles.navItem}>
              Products
            </Link>
            <Link href="/about" className={styles.navItem}>
              About
            </Link>
            <Link href="/reviews" className={styles.navItem}>
              Reviews
            </Link>
            <Link href="/contact" className={styles.contactBtn}>
              Contact
            </Link>
          </div>
        </nav>

        {/* Studio Lighting Background */}
        <div
          className={`${styles.studioLighting} ${
            palmStage && !botanicalHeroStage ? styles.studioLightingPalm : ''
          } ${botanicalHeroStage ? styles.studioLightingBotanical : ''}`}
        />

        {/* 1. Left Rock Layer (Recedes in Phase 4) */}
        <div
          className={`${styles.rockLeftWrapper} ${
            secondaryRevealed ? styles.rockLeftVisible : ''
          } ${productOnlyStage ? styles.rockLeftDismissed : ''}`}
        >
          <Image
            src="/assets/rock_layer2.png"
            alt="Rock cliff left behind"
            width={720}
            height={720}
            className={styles.rockLeftImg}
            priority
          />
        </div>

        {/* 2. Official Evidens.png Wordmark (Recedes in Phase 4) */}
        <div
          className={`${styles.brandWordings} ${
            secondaryRevealed ? styles.wordingsVisible : ''
          } ${productOnlyStage ? styles.wordingsDismissed : ''}`}
        >
          <Image
            src="/assets/Evidens.png"
            alt="EVIDENS"
            width={1200}
            height={260}
            className={styles.evidensImage}
            priority
          />
        </div>

        {/* 3. Bottom Rock Mountain Layer (Recedes down in Phase 4) */}
        <div
          className={`${styles.rockBaseWrapper} ${
            heroAnimated ? styles.rockBaseRise : ''
          } ${productOnlyStage ? styles.rockBaseDismissed : ''}`}
        >
          <Image
            src="/assets/rock_layer1.png"
            alt="Rock mountain base on top"
            fill
            className={styles.rockBaseImg}
            priority
          />
        </div>

        {/* 4. Right Rock Layer (Recedes in Phase 4) */}
        <div
          className={`${styles.rockRightWrapper} ${
            secondaryRevealed ? styles.rockRightVisible : ''
          } ${productOnlyStage ? styles.rockRightDismissed : ''}`}
        >
          <Image
            src="/assets/rock_layer3.png"
            alt="Rock cliff on top right"
            width={580}
            height={820}
            className={styles.rockRightImg}
            priority
          />
        </div>

        {/* ── 4 INGREDIENT FLOATING ORBS (4th Animation - retracts when lid closes) ── */}
        <div
          className={`${styles.ingredientsContainer} ${
            trioShowcaseStage || lidClosing ? styles.ingredientsDismissed : ''
          }`}
        >
          {/* Ingredient 3: Collagen (Top Left) */}
          <div
            className={`${styles.ingredientOrb} ${styles.ingTopLeft} ${
              lidOpened && !lidClosing ? styles.ingVisible : ''
            }`}
          >
            <div className={styles.ingCard}>
              <Image
                src="/assets/ingredient3.png"
                alt="Collagen"
                width={120}
                height={120}
                className={styles.ingImage}
                priority
              />
            </div>
          </div>

          {/* Ingredient 4: Olive Oil (Bottom Left) */}
          <div
            className={`${styles.ingredientOrb} ${styles.ingBottomLeft} ${
              lidOpened && !lidClosing ? styles.ingVisible : ''
            }`}
          >
            <div className={styles.ingCard}>
              <Image
                src="/assets/ingredient4.png"
                alt="Olive Extract"
                width={120}
                height={120}
                className={styles.ingImage}
                priority
              />
            </div>
          </div>

          {/* Ingredient 1: Argan / Almond Oil (Top Right) */}
          <div
            className={`${styles.ingredientOrb} ${styles.ingTopRight} ${
              lidOpened && !lidClosing ? styles.ingVisible : ''
            }`}
          >
            <div className={styles.ingCard}>
              <Image
                src="/assets/ingredient1.png"
                alt="Argan Oil"
                width={120}
                height={120}
                className={styles.ingImage}
                priority
              />
            </div>
          </div>

          {/* Ingredient 2: Golden Droplet (Bottom Right) */}
          <div
            className={`${styles.ingredientOrb} ${styles.ingBottomRight} ${
              lidOpened && !lidClosing ? styles.ingVisible : ''
            }`}
          >
            <div className={styles.ingCard}>
              <Image
                src="/assets/ingredient2.png"
                alt="Golden Elixir"
                width={120}
                height={120}
                className={styles.ingImage}
                priority
              />
            </div>
          </div>
        </div>

        {/* ── 5TH ANIMATION: TRIO SHOWCASE (3 FLOATING ROCKS & 3 PRODUCTS) ── */}
        <div
          className={`${styles.trioShowcaseContainer} ${
            trioShowcaseStage && !palmStage && !botanicalHeroStage ? styles.trioVisible : ''
          } ${palmStage || botanicalHeroStage ? styles.trioDismissedForPalm : ''}`}
        >
          {/* Background Typography: "RICH CREAM" + "evidens image.png" */}
          <div className={styles.trioHeaderBackground}>
            <div className={styles.richCreamText}>RICH CREAM</div>
            <div className={styles.evidensHeaderImageWrapper}>
              <Image
                src="/assets/evidens image.png"
                alt="EVIDENS"
                width={200}
                height={40}
                className={styles.evidensHeaderImg}
                priority
              />
            </div>
          </div>

          {/* TRIO STAGE: Left, Center, Right Products on Floating Rocks */}
          <div className={styles.trioProductsGrid}>
            {/* LEFT: Product 2 (La Crème Spéciale) on Floating Rock */}
            <div className={`${styles.trioProductCard} ${styles.trioLeft}`}>
              <div className={styles.trioProductJar}>
                <Image
                  src="/assets/product2.png"
                  alt="La Crème Spéciale"
                  width={290}
                  height={220}
                  className={styles.product2Img}
                  priority
                />
              </div>
              <div className={styles.trioFloatingRock}>
                <Image
                  src="/assets/smallrock.png"
                  alt="Floating rock pedestal"
                  width={340}
                  height={220}
                  className={styles.smallRockImg}
                  priority
                />
              </div>
            </div>

            {/* CENTER: Product 1 (La Crème Riche - Gold/Black) on Center Floating Rock */}
            <div className={`${styles.trioProductCard} ${styles.trioCenter}`}>
              <div className={styles.trioProductJar}>
                <div className={styles.trioCapFrame}>
                  <Image
                    src="/assets/cap.png"
                    alt="EviDenS Gold Cap"
                    width={260}
                    height={92}
                    className={styles.trioCapImg}
                    priority
                  />
                </div>
                <div className={styles.trioBottleFrame}>
                  <Image
                    src="/assets/bottle.png"
                    alt="La Crème Riche"
                    width={260}
                    height={210}
                    className={styles.trioBottleImg}
                    priority
                  />
                </div>
              </div>
              <div className={styles.trioFloatingRock}>
                <Image
                  src="/assets/smallrock.png"
                  alt="Floating rock pedestal"
                  width={360}
                  height={240}
                  className={styles.smallRockImg}
                  priority
                />
              </div>
            </div>

            {/* RIGHT: Product 3 (RéVive Renewal Cream) on Floating Rock */}
            <div className={`${styles.trioProductCard} ${styles.trioRight}`}>
              <div className={styles.trioProductJar}>
                <Image
                  src="/assets/product3.png"
                  alt="RéVive Moisturizing Renewal Cream"
                  width={290}
                  height={220}
                  className={styles.product3Img}
                  priority
                />
              </div>
              <div className={styles.trioFloatingRock}>
                <Image
                  src="/assets/smallrock.png"
                  alt="Floating rock pedestal"
                  width={340}
                  height={220}
                  className={styles.smallRockImg}
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* ── 6TH ANIMATION (NEXT SECTION): PALM HAND HOLDING MIDDLE PRODUCT & FEATURES ── */}
        <div
          className={`${styles.palmShowcaseContainer} ${
            palmStage && !botanicalHeroStage ? styles.palmStageVisible : ''
          } ${botanicalHeroStage ? styles.palmDismissedForBotanical : ''}`}
        >
          {/* Left Features List (Animates in from left) */}
          <div className={styles.palmFeaturesList}>
            <div className={`${styles.palmFeatureItem} ${styles.feat1}`}>
              <div className={styles.featIconBox}>
                <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="22" cy="22" r="19" stroke="#1a1a1a" strokeWidth="1.7" />
                  <path d="M18 12H26M22 12V19L15 30H29L22 19" stroke="#1a1a1a" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M18 26C19.5 25 24.5 25 26 26" stroke="#1a1a1a" strokeWidth="1.4" strokeLinecap="round" />
                  <circle cx="19.5" cy="28" r="1" fill="#1a1a1a" />
                  <circle cx="24" cy="27.5" r="1.2" fill="#1a1a1a" />
                </svg>
              </div>
              <span className={styles.featLabel}>Free from toxic chemicals</span>
            </div>

            <div className={`${styles.palmFeatureItem} ${styles.feat2}`}>
              <div className={styles.featIconBox}>
                <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="22" cy="22" r="19" stroke="#1a1a1a" strokeWidth="1.7" />
                  <circle cx="22" cy="22" r="11" stroke="#1a1a1a" strokeWidth="1.4" />
                  <ellipse cx="22" cy="22" rx="5.5" ry="11" stroke="#1a1a1a" strokeWidth="1.3" />
                  <line x1="11" y1="22" x2="33" y2="22" stroke="#1a1a1a" strokeWidth="1.3" />
                  <path d="M9 13C12 11 15 14 15 17C12 17 10 15 9 13Z" stroke="#1a1a1a" strokeWidth="1.4" strokeLinejoin="round" />
                  <path d="M12 30C14 33 17 32 18 29C15 28 13 29 12 30Z" stroke="#1a1a1a" strokeWidth="1.4" strokeLinejoin="round" />
                </svg>
              </div>
              <span className={styles.featLabel}>Good for you and the planet</span>
            </div>

            <div className={`${styles.palmFeatureItem} ${styles.feat3}`}>
              <div className={styles.featIconBox}>
                <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="22" cy="22" r="19" stroke="#1a1a1a" strokeWidth="1.7" />
                  <path d="M13 24C13 29 17 31.5 22 31.5C27 31.5 31 29 31 24H13Z" stroke="#1a1a1a" strokeWidth="1.7" strokeLinejoin="round" />
                  <path d="M18 21C17 17 19.5 14 22 14C24.5 14 27 17 26 21" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" />
                  <circle cx="18" cy="19.5" r="1.1" fill="#1a1a1a" />
                  <circle cx="22" cy="18.5" r="1.3" fill="#1a1a1a" />
                  <circle cx="26" cy="19.5" r="1.1" fill="#1a1a1a" />
                </svg>
              </div>
              <span className={styles.featLabel}>Sustainably sourced ingredients</span>
            </div>

            <div className={`${styles.palmFeatureItem} ${styles.feat4}`}>
              <div className={styles.featIconBox}>
                <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="22" cy="22" r="19" stroke="#1a1a1a" strokeWidth="1.7" />
                  <path d="M17 19C17 15 19 13 22 13C25 13 27 15 27 19C27 23 23 26 22 27C21 26 17 23 17 19Z" stroke="#1a1a1a" strokeWidth="1.5" />
                  <circle cx="22" cy="19" r="3" stroke="#1a1a1a" strokeWidth="1.4" />
                  <path d="M24 25L29 30" stroke="#1a1a1a" strokeWidth="1.9" strokeLinecap="round" />
                </svg>
              </div>
              <span className={styles.featLabel}>improves overall skin health</span>
            </div>
          </div>

          {/* Background BEAUTE watermark across the lower section */}
          <div className={styles.palmBeauteWatermark}>
            B E A U T E
          </div>

          {/* Hand & Product Composition on Right */}
          <div className={styles.palmComposition}>
            {/* Hand asset */}
            <Image
              src="/assets/hand.png"
              alt="Hand holding EviDenS Cream"
              width={1000}
              height={739}
              className={styles.palmHandAsset}
              priority
            />

            {/* Center Product nestled directly in the palm */}
            <div className={styles.palmProductContainer}>
              <div className={styles.palmCapFrame}>
                <Image
                  src="/assets/cap.png"
                  alt="EviDenS Gold Cap"
                  width={280}
                  height={98}
                  className={styles.palmCapImg}
                  priority
                />
              </div>
              <div className={styles.palmBottleFrame}>
                <Image
                  src="/assets/bottle.png"
                  alt="La Crème Riche The Rich Cream"
                  width={280}
                  height={225}
                  className={styles.palmBottleImg}
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* ── 7TH ANIMATION (NEW SECTION): BOTANICAL LUXURY HERO (PALM LEAVES + ROCKS + BUY NOW) ── */}
        <div
          className={`${styles.botanicalHeroContainer} ${
            botanicalHeroStage ? styles.botanicalHeroVisible : ''
          }`}
        >
          {/* Left Text & CTA Box */}
          <div className={styles.botanicalTextBox}>
            <div className={styles.botanicalHeadingWrapper}>
              <Image
                src="/assets/Evidens.png"
                alt="EVIDENS"
                width={500}
                height={110}
                className={styles.botanicalHeadingImg}
                priority
              />
            </div>
            <p className={styles.botanicalParagraph}>
              Evidens Face Cream — where science meets pure luxury. A silky touch that melts into your skin, bringing deep hydration, youthful radiance, and effortless confidence. Glow isn’t an option... it’s a lifestyle.
            </p>
            <div className={styles.botanicalCtaWrapper}>
              <Link href="/products" className={styles.buyNowBtn}>
                BUY NOW
              </Link>
            </div>
          </div>

          {/* Bottom-Left Palm Frond with Shadows */}
          <div className={styles.palmLeftWrapper}>
            <Image
              src="/assets/palm.png"
              alt="Botanical Palm Fronds Left"
              width={560}
              height={620}
              className={styles.palmLeftImg}
              priority
            />
          </div>

          {/* Bottom-Right Palm Frond */}
          <div className={styles.palmRightWrapper}>
            <Image
              src="/assets/palm2.png"
              alt="Botanical Palm Fronds Right"
              width={520}
              height={580}
              className={styles.palmRightImg}
              priority
            />
          </div>

          {/* Rock Formation Base & Tilted Product Jar */}
          <div className={styles.botanicalRockProductGroup}>
            {/* Charcoal Rock Pedestal */}
            <div className={styles.botanicalRockBase}>
              <Image
                src="/assets/botanical_rock.png"
                alt="Volcanic Charcoal Rock Base"
                width={2484}
                height={1772}
                className={styles.botanicalRockImg}
                priority
              />
            </div>

            {/* Contact Shadow on the Rock Base */}
            <div className={styles.botanicalRockShadow} />

            {/* Product Jar Resting Tilted on the Rock */}
            <div className={styles.botanicalProductJar}>
              <div className={styles.botanicalCapFrame}>
                <Image
                  src="/assets/cap.png"
                  alt="EviDenS Gold Cap"
                  width={340}
                  height={120}
                  className={styles.botanicalCapImg}
                  priority
                />
              </div>
              <div className={styles.botanicalBottleFrame}>
                <Image
                  src="/assets/bottle.png"
                  alt="La Crème Riche The Rich Cream"
                  width={340}
                  height={270}
                  className={styles.botanicalBottleImg}
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* ── STAGE 2-5: INITIAL SINGLE CENTER JAR (Opens, Closes, then Transitions to Rock) ── */}
        <div
          className={`${styles.productJarContainer} ${
            heroAnimated ? styles.productJarRise : ''
          } ${productOnlyStage ? styles.productJarCentered : ''} ${
            trioShowcaseStage || palmStage || botanicalHeroStage
              ? styles.productJarDismissed
              : ''
          }`}
        >
          {/* Ambient Glow */}
          <div className={styles.productJarGlow} />

          {/* Cast Ground Shadow */}
          <div
            className={`${styles.groundShadow} ${
              productOnlyStage ? styles.groundShadowVisible : ''
            }`}
          />

          {/* Gold Metallic Cap / Lid (Opens then cleanly closes back) */}
          <div
            className={`${styles.capFrame} ${
              lidOpened && !lidClosing ? styles.capOpened : styles.capClosed
            }`}
          >
            <Image
              src="/assets/cap.png"
              alt="EviDenS Gold Cap"
              width={280}
              height={100}
              className={styles.capImage}
              priority
            />
          </div>

          {/* Cream Top / Opening Rim (Hidden when lid closes) */}
          <div
            className={`${styles.jarCreamRim} ${
              lidOpened && !lidClosing ? styles.creamRimVisible : ''
            }`}
          >
            <div className={styles.creamSwirl} />
            <div className={styles.silverThread} />
          </div>

          {/* Black Cosmetic Jar Body */}
          <div className={styles.bottleFrame}>
            <Image
              src="/assets/bottle.png"
              alt="EviDenS de Beauté La Crème Riche"
              width={280}
              height={225}
              className={styles.bottleImage}
              priority
            />
          </div>
        </div>
      </main>
    </div>
  );
}
