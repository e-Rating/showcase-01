/**
 * ============================================================================
 * e-Rating Showcase Presentation Engine
 * Pure Vanilla JavaScript (Offline Ready, No Dependencies)
 * ============================================================================
 */

(function () {
  'use strict';

  // ──────────────────────────────────────────────────────────────────────────
  // 1. Slide Data Configuration
  // ──────────────────────────────────────────────────────────────────────────
  const SLIDES_CONFIG = [
    {
      id: 1,
      hash: 'title',
      title: 'e-Rating',
      pill: 'Project Showcase',
      subtitle: 'A Privacy-Preserving, Verifiable Module Feedback System for University Students',
      duration: 10,
      fragmentsCount: 0,
      diagramHighlight: { nodes: [], flows: [] },
      render() {
        return `
          <div class="title-hero">
            <div class="title-tag-row">
              <span class="title-pill featured">🎓 Information Security Project</span>
              <span class="title-pill">SECP256k1</span>
              <span class="title-pill">LSAG Ring Signatures</span>
              <span class="title-pill">Merkle Trees</span>
            </div>

            <h1 class="title-main-h1">e-Rating</h1>
            <p class="title-tagline">
              A privacy-preserving, verifiable module feedback system enabling students to submit honest course reviews without fear of identification.
            </p>

            <div class="title-brief-box">
              Standard online rating systems link user accounts to submitted reviews or rely on centralized database admins, exposing students to retaliation and tampering. <strong>e-Rating</strong> decouples student identity from feedback using elliptic-curve ring signatures, key image nullifiers, and public Merkle proofs.
            </div>

            <div class="title-tag-row" style="margin-bottom: 24px;">
              <span class="title-pill">🛡️ Anonymous ratings</span>
              <span class="title-pill">🎯 One rating per student</span>
              <span class="title-pill">🌳 Tamper-evident records</span>
              <span class="title-pill">⚖️ No single point of trust</span>
            </div>

            <div class="title-footer-row">
              <button class="btn-primary" id="btn-start-presentation">
                <span>Start Walkthrough</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
              <button class="btn-secondary" id="btn-open-full-desc">
                <span>Read Full Abstract</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
              </button>
              <div class="title-hashtags">
                <span class="hashtag-item">#AnonymousFeedback</span>
                <span class="hashtag-item">#OneStudentOneRating</span>
                <span class="hashtag-item">#VerifiableIntegrity</span>
              </div>
            </div>
          </div>
        `;
      }
    },
    {
      id: 2,
      hash: 'problem',
      pill: 'The Dilemma',
      title: 'Why University Feedback Systems Fail',
      subtitle: 'Traditional course evaluation platforms suffer from a fundamental lack of trust, anonymity, and auditability.',
      duration: 9,
      fragmentsCount: 3,
      diagramHighlight: { nodes: [], flows: [] },
      render() {
        return `
          <div class="problem-grid">
            <div class="problem-card fragment fragment-1" data-fragment="1">
              <div class="problem-icon-wrap">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
              </div>
              <h3>Fear of Retaliation</h3>
              <p>Students self-censor reviews because login accounts or student IDs are tied to feedback. Fear of grading penalty stifles genuine critique.</p>
              <div class="problem-stat">⚠️ Most students withhold critical feedback</div>
            </div>

            <div class="problem-card fragment fragment-2" data-fragment="2">
              <div class="problem-icon-wrap">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>
              </div>
              <h3>Centralized DB Vulnerability</h3>
              <p>Traditional databases entrust everything to single administrators. Unfavorable feedback can be deleted, altered, or suppressed with zero detection.</p>
              <div class="problem-stat">❌ Zero mathematical tamper evidence</div>
            </div>

            <div class="problem-card fragment fragment-3" data-fragment="3">
              <div class="problem-icon-wrap">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg>
              </div>
              <h3>The Security Trilemma</h3>
              <p>Existing solutions force an impossible tradeoff: open anonymous forums get flooded with bot spam, while authenticated forms strip anonymity.</p>
              <div class="problem-stat">⚖️ Anonymity vs Accountability vs Integrity</div>
            </div>
          </div>
        `;
      }
    },
    {
      id: 3,
      hash: 'solution',
      pill: 'Core Concept',
      title: 'The e-Rating Solution',
      subtitle: 'A privacy-preserving architecture that harmonizes anonymity, accountability, and independent verifiability.',
      duration: 8,
      fragmentsCount: 3,
      diagramHighlight: { nodes: [], flows: [] },
      render() {
        return `
          <div class="solution-container">
            <div class="solution-hero-banner">
              <div style="font-size: 2.2rem; line-height: 1;">💡</div>
              <blockquote>
                "Cryptographic separation of duties enables students to prove enrollment and submit honest ratings anonymously, while mathematically preventing duplicate votes and proving tamper-proof integrity."
              </blockquote>
            </div>

            <div class="solution-pillars">
              <div class="pillar-card fragment fragment-1" data-fragment="1">
                <div class="pillar-header">
                  <div class="pillar-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/></svg>
                  </div>
                  <h4>Mathematical Anonymity</h4>
                </div>
                <p>Public key rings hide the student in a crowd of enrolled peers. No observer can identify which student signed.</p>
                <span class="pillar-tech-badge">LSAG Ring Signatures</span>
              </div>

              <div class="pillar-card fragment fragment-2" data-fragment="2">
                <div class="pillar-header">
                  <div class="pillar-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M16 12l-4-4-4 4M12 16V9"/></svg>
                  </div>
                  <h4>Anti-Sybil Nullifiers</h4>
                </div>
                <p>Deterministic key images prevent duplicate votes per module without storing personal tracking metadata.</p>
                <span class="pillar-tech-badge">Key Image Nullifier (I = x·H(R))</span>
              </div>

              <div class="pillar-card fragment fragment-3" data-fragment="3">
                <div class="pillar-header">
                  <div class="pillar-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                  </div>
                  <h4>Universal Verifiability</h4>
                </div>
                <p>Every submission produces a receipt audited against a Merkle root by an independent third-party server.</p>
                <span class="pillar-tech-badge">Merkle Inclusion Proofs</span>
              </div>
            </div>
          </div>
        `;
      }
    },
    {
      id: 4,
      hash: 'features',
      pill: 'Key Features',
      title: 'Four Cryptographic Pillars',
      subtitle: 'Engineered from first principles with zero administrative trust assumptions.',
      duration: 9,
      fragmentsCount: 4,
      diagramHighlight: { nodes: [], flows: [] },
      render() {
        return `
          <div class="features-grid-4">
            <div class="feature-box fragment fragment-1" data-fragment="1">
              <div class="feature-box-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              </div>
              <div class="feature-box-text">
                <h4>1. Anonymous Ring Signatures</h4>
                <p>Signatures spontaneously form a ring over SECP256k1 public keys. Verifiers verify course enrollment while identity remains mathematically hidden.</p>
                <span class="feature-tag-pill">LSAG Protocol</span>
              </div>
            </div>

            <div class="feature-box fragment fragment-2" data-fragment="2">
              <div class="feature-box-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
              </div>
              <div class="feature-box-text">
                <h4>2. Strict One Rating Per Student</h4>
                <p>Each student's private key deterministically generates a key image $I$. Resubmission triggers immediate rejection via database constraint.</p>
                <span class="feature-tag-pill">Double-Submitting Prevention</span>
              </div>
            </div>

            <div class="feature-box fragment fragment-3" data-fragment="3">
              <div class="feature-box-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
              </div>
              <div class="feature-box-text">
                <h4>3. End-to-End Hybrid Encryption</h4>
                <p>Feedback is encrypted with ephemeral AES-256 keys wrapped via ECIES under the module public key. Feedback server never sees plaintext.</p>
                <span class="feature-tag-pill">ECIES + AES-256 CTR</span>
              </div>
            </div>

            <div class="feature-box fragment fragment-4" data-fragment="4">
              <div class="feature-box-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
              </div>
              <div class="feature-box-text">
                <h4>4. Tamper-Evident Merkle Receipts</h4>
                <p>Submissions are committed to a per-module Merkle tree. Students hold cryptographic receipts to prove feedback was recorded without alteration.</p>
                <span class="feature-tag-pill">Independent Audit Engine</span>
              </div>
            </div>
          </div>
        `;
      }
    },
    {
      id: 5,
      hash: 'architecture',
      pill: 'Architecture Overview',
      title: 'Decoupled Multi-Service Architecture',
      subtitle: 'Strict separation of duties between LMS, Feedback Collector, and Third-Party Verifier.',
      duration: 10,
      fragmentsCount: 3,
      diagramHighlight: {
        dimOthers: true,
        nodes: ['admin', 'lecturer', 'student', 'moodle', 'feedback', 'verifier'],
        flows: ['flow-admin-moodle', 'flow-lecturer-moodle', 'flow-student-moodle', 'flow-moodle-feedback', 'flow-student-feedback', 'flow-student-verifier', 'flow-feedback-verifier']
      },
      render() {
        return `
          <div class="flow-walkthrough-layout">
            <div class="flow-step-sidebar">
              <div class="step-card-header">
                <span class="step-number-pill">System Topology</span>
                <h3>3 Independent Realms</h3>
              </div>

              <ul class="step-detail-list">
                <li class="step-detail-item fragment fragment-1" data-fragment="1">
                  <div class="step-item-bullet"></div>
                  <div><strong>Institutional LMS Realm</strong>: Admin manages modules; Lecturer inspects reports; Student enrolls and generates SECP256k1 public points.</div>
                </li>
                <li class="step-detail-item fragment fragment-2" data-fragment="2">
                  <div class="step-item-bullet"></div>
                  <div><strong>Cryptographic Realm</strong>: Feedback Server (:8002) collects anonymous ciphertexts and Verifier (:8003) conducts independent audits.</div>
                </li>
                <li class="step-detail-item fragment fragment-3" data-fragment="3">
                  <div class="step-item-bullet"></div>
                  <div><strong>Trust Boundary (Dashed Line)</strong>: Prevents identity correlation. No single compromised server can deanonymize students.</div>
                </li>
              </ul>

              <div class="step-code-preview">
                <span class="comment"># Zero Direct Cross-DB Connections</span><br/>
                <span class="keyword">moodle_db.sqlite3</span> &harr; Moodle Only<br/>
                <span class="keyword">feedback_db.sqlite3</span> &harr; Feedback Only<br/>
                <span class="keyword">verifier_db.sqlite3</span> &harr; Verifier Only
              </div>
            </div>

            <div class="diagram-canvas-wrap" id="diagram-container-5">
              <!-- SVG diagram dynamically injected -->
            </div>
          </div>
        `;
      }
    },
    {
      id: 6,
      hash: 'flow-enroll',
      pill: 'Step 1 of 5',
      title: 'Enrollment & Public Key Upload',
      subtitle: 'Student authenticates to Moodle, generates local SECP256k1 keypair, and uploads public point.',
      duration: 8,
      fragmentsCount: 0,
      diagramHighlight: {
        dimOthers: true,
        nodes: ['student', 'moodle'],
        flows: ['flow-student-moodle'],
        activePacket: 'flow-student-moodle'
      },
      render() {
        return `
          <div class="flow-walkthrough-layout">
            <div class="flow-step-sidebar">
              <div class="step-card-header">
                <span class="step-number-pill">Protocol Step 01</span>
                <h3>Student &rarr; Moodle Server</h3>
              </div>

              <ul class="step-detail-list">
                <li class="step-detail-item">
                  <div class="step-item-bullet"></div>
                  <div>Student signs into Moodle using standard university JWT credentials.</div>
                </li>
                <li class="step-detail-item">
                  <div class="step-item-bullet"></div>
                  <div>Client generates private scalar <code>x &in; [1, n-1]</code> and public curve point <code>P = x &middot; G</code>.</div>
                </li>
                <li class="step-detail-item">
                  <div class="step-item-bullet"></div>
                  <div>Public point is uploaded to Moodle via <code>PATCH /api/moodle/enrollments/&lt;id&gt;/public-key/</code>.</div>
                </li>
                <li class="step-detail-item">
                  <div class="step-item-bullet"></div>
                  <div><strong>Key Isolation</strong>: Private scalar <code>x</code> never leaves student's local browser or device!</div>
                </li>
              </ul>

              <div class="step-code-preview">
                <span class="comment">// Client keygen over SECP256k1</span><br/>
                <span class="keyword">const</span> x = crypto.getRandomValues();<br/>
                <span class="keyword">const</span> P = secp256k1.Point.fromPrivateKey(x);<br/>
                <span class="function">uploadKey</span>(enrollmentId, P.toHex());
              </div>
            </div>

            <div class="diagram-canvas-wrap" id="diagram-container-6"></div>
          </div>
        `;
      }
    },
    {
      id: 7,
      hash: 'flow-sync',
      pill: 'Step 2 of 5',
      title: 'Key Ring Synchronization',
      subtitle: 'Moodle aggregates enrolled public keys and syncs with Feedback Server over M2M API.',
      duration: 8,
      fragmentsCount: 0,
      diagramHighlight: {
        dimOthers: true,
        nodes: ['moodle', 'feedback'],
        flows: ['flow-moodle-feedback'],
        activePacket: 'flow-moodle-feedback'
      },
      render() {
        return `
          <div class="flow-walkthrough-layout">
            <div class="flow-step-sidebar">
              <div class="step-card-header">
                <span class="step-number-pill">Protocol Step 02</span>
                <h3>Moodle &rarr; Feedback Server</h3>
              </div>

              <ul class="step-detail-list">
                <li class="step-detail-item">
                  <div class="step-item-bullet"></div>
                  <div>Moodle compiles enrolled public keys: <code>R = [P₁, P₂, ..., Pₖ]</code>.</div>
                </li>
                <li class="step-detail-item">
                  <div class="step-item-bullet"></div>
                  <div>Feedback Server queries Moodle using OAuth2 Client Credentials (M2M bearer token).</div>
                </li>
                <li class="step-detail-item">
                  <div class="step-item-bullet"></div>
                  <div>Synchronizes anonymous public keys via <code>/api/moodle/internal/modules/&lt;id&gt;/ring-keys/</code>.</div>
                </li>
                <li class="step-detail-item">
                  <div class="step-item-bullet"></div>
                  <div><strong>Trust Boundary Cross</strong>: Only public EC points travel across; zero student IDs or names are shared!</div>
                </li>
              </ul>

              <div class="step-code-preview">
                <span class="comment"># M2M Bearer Sync Payload</span><br/>
                GET /internal/modules/1/ring-keys/<br/>
                <span class="string">{ "ring": ["02a1b4...", "03c8e9..."] }</span>
              </div>
            </div>

            <div class="diagram-canvas-wrap" id="diagram-container-7"></div>
          </div>
        `;
      }
    },
    {
      id: 8,
      hash: 'flow-submit',
      pill: 'Step 3 of 5',
      title: 'Encrypted Submission & Receipt',
      subtitle: 'Student submits hybrid-encrypted feedback signed with LSAG and gets a Merkle receipt.',
      duration: 9,
      fragmentsCount: 0,
      diagramHighlight: {
        dimOthers: true,
        nodes: ['student', 'feedback'],
        flows: ['flow-student-feedback'],
        activePacket: 'flow-student-feedback'
      },
      render() {
        return `
          <div class="flow-walkthrough-layout">
            <div class="flow-step-sidebar">
              <div class="step-card-header">
                <span class="step-number-pill">Protocol Step 03</span>
                <h3>Student &harr; Feedback Server</h3>
              </div>

              <ul class="step-detail-list">
                <li class="step-detail-item">
                  <div class="step-item-bullet"></div>
                  <div>Student encrypts review with ephemeral symmetric key; wraps key via module public key (ECIES).</div>
                </li>
                <li class="step-detail-item">
                  <div class="step-item-bullet"></div>
                  <div>Generates LSAG ring signature &sigma; = (I, c₀, s) with nullifier <code>I = x &middot; H(R)</code>.</div>
                </li>
                <li class="step-detail-item">
                  <div class="step-item-bullet"></div>
                  <div>Posts to <code>/api/feedback/submit/</code> with <strong>zero cookies/auth tokens</strong>.</div>
                </li>
                <li class="step-detail-item">
                  <div class="step-item-bullet"></div>
                  <div>Feedback Server verifies LSAG, checks nullifier uniqueness, appends leaf to Merkle tree, returns <code>receipt_token</code>.</div>
                </li>
              </ul>

              <div class="step-code-preview">
                <span class="comment">// Receipt Returned</span><br/>
                {<br/>
                &nbsp;&nbsp;<span class="string">"receipt_token"</span>: <span class="keyword">"a3f1c2d4-..."</span>,<br/>
                &nbsp;&nbsp;<span class="string">"leaf_hash"</span>: <span class="function">"7f83b165..."</span><br/>
                }
              </div>
            </div>

            <div class="diagram-canvas-wrap" id="diagram-container-8"></div>
          </div>
        `;
      }
    },
    {
      id: 9,
      hash: 'flow-decrypt',
      pill: 'Step 4 of 5',
      title: 'Decoupled Lecturer Decryption',
      subtitle: 'Lecturer accesses evaluations via Moodle; Feedback Server never possesses module private keys.',
      duration: 8,
      fragmentsCount: 0,
      diagramHighlight: {
        dimOthers: true,
        nodes: ['lecturer', 'moodle', 'feedback'],
        flows: ['flow-lecturer-moodle', 'flow-moodle-feedback'],
        activePacket: 'flow-lecturer-moodle'
      },
      render() {
        return `
          <div class="flow-walkthrough-layout">
            <div class="flow-step-sidebar">
              <div class="step-card-header">
                <span class="step-number-pill">Protocol Step 04</span>
                <h3>Lecturer &rarr; Moodle Server</h3>
              </div>

              <ul class="step-detail-list">
                <li class="step-detail-item">
                  <div class="step-item-bullet"></div>
                  <div>Course lecturer logs into Moodle dashboard to inspect course feedback.</div>
                </li>
                <li class="step-detail-item">
                  <div class="step-item-bullet"></div>
                  <div>Moodle requests ciphertext batch from Feedback Server via internal token.</div>
                </li>
                <li class="step-detail-item">
                  <div class="step-item-bullet"></div>
                  <div>Moodle uses the module's private key <code>d</code> to decrypt symmetric keys and unwrap ratings.</div>
                </li>
                <li class="step-detail-item">
                  <div class="step-item-bullet"></div>
                  <div><strong>Zero-Knowledge Storage</strong>: Feedback Server holds only ciphertexts, never able to read feedback!</div>
                </li>
              </ul>

              <div class="step-code-preview">
                <span class="comment"># Decryption Formula</span><br/>
                K_sym = ECIES_decrypt(priv_key=d, ciphertext=c)<br/>
                plaintext = AES_decrypt(K_sym, enc_feedback)
              </div>
            </div>

            <div class="diagram-canvas-wrap" id="diagram-container-9"></div>
          </div>
        `;
      }
    },
    {
      id: 10,
      hash: 'flow-verify',
      pill: 'Step 5 of 5',
      title: 'Independent Receipt Verification',
      subtitle: 'Student audits receipt with third-party Verifier Server via Merkle proof and LSAG validation.',
      duration: 9,
      fragmentsCount: 0,
      diagramHighlight: {
        dimOthers: true,
        nodes: ['student', 'verifier', 'feedback'],
        flows: ['flow-student-verifier', 'flow-feedback-verifier'],
        activePacket: 'flow-student-verifier'
      },
      render() {
        return `
          <div class="flow-walkthrough-layout">
            <div class="flow-step-sidebar">
              <div class="step-card-header">
                <span class="step-number-pill">Protocol Step 05</span>
                <h3>Student &rarr; Verifier Server</h3>
              </div>

              <ul class="step-detail-list">
                <li class="step-detail-item">
                  <div class="step-item-bullet"></div>
                  <div>Student submits <code>receipt_token</code> to Verifier Server (<code>POST /api/verify/receipt/</code>).</div>
                </li>
                <li class="step-detail-item">
                  <div class="step-item-bullet"></div>
                  <div>Verifier Server fetches audit payload and Merkle proof from Feedback Server over public REST.</div>
                </li>
                <li class="step-detail-item">
                  <div class="step-item-bullet"></div>
                  <div>Fetches anonymous public keys from Moodle public API.</div>
                </li>
                <li class="step-detail-item">
                  <div class="step-item-bullet"></div>
                  <div>Verifies 3 points: <strong>(1) Valid LSAG signature, (2) Leaf hash consistency, (3) Merkle tree inclusion</strong>.</div>
                </li>
              </ul>

              <div class="step-code-preview">
                <span class="comment">// 3-Step Verification Checklist</span><br/>
                &check; signature_valid: <span class="function">true</span><br/>
                &check; leaf_valid: <span class="function">true</span><br/>
                &check; proof_valid: <span class="function">true</span>
              </div>
            </div>

            <div class="diagram-canvas-wrap" id="diagram-container-10"></div>
          </div>
        `;
      }
    },
    {
      id: 11,
      hash: 'merkle-verification',
      pill: 'Verification · Under the hood',
      title: 'From Your Receipt to the Merkle Root',
      subtitle: 'Prove one feedback submission is included using only its leaf and a short path of sibling hashes.',
      duration: 14,
      fragmentsCount: 3,
      diagramHighlight: { nodes: [], flows: [] },
      render() {
        return `
          <div class="merkle-layout">
            <figure class="merkle-tree">
              <figcaption>FOUR-SUBMISSION EXAMPLE · VERIFY LEAF B</figcaption>
              <div class="merkle-level merkle-root"><div class="merkle-node merkle-computed"><small>Compare with supplied root</small><strong>R = H(AB || CD)</strong></div></div>
              <div class="merkle-branches" aria-hidden="true"><span>↗</span><span>↖</span></div>
              <div class="merkle-level merkle-parents">
                <div class="merkle-node merkle-computed"><small>Computed parent</small><strong>AB = H(A || B)</strong></div>
                <div class="merkle-node merkle-sibling"><small>Proof sibling · right</small><strong>CD = H(C || D)</strong></div>
              </div>
              <div class="merkle-branches merkle-four" aria-hidden="true"><span>↗</span><span>↖</span><span>↗</span><span>↖</span></div>
              <div class="merkle-level merkle-leaves">
                <div class="merkle-node merkle-sibling"><strong>A</strong><small>Sibling · left</small></div>
                <div class="merkle-node merkle-target"><strong>B</strong><small>Your leaf</small></div>
                <div class="merkle-node"><strong>C</strong><small>Other leaf</small></div>
                <div class="merkle-node"><strong>D</strong><small>Other leaf</small></div>
              </div>
              <p class="merkle-caption">Proof for B: <code>[A (left), CD (right)]</code><br>Only sibling hashes are needed, not the other feedback payloads.</p>
            </figure>
            <div class="merkle-explanation">
              <section class="merkle-step fragment fragment-1" data-fragment="1">
                <span class="merkle-step-number">01</span><div><h3>Recompute your leaf</h3><p>Hash the module ID, encrypted feedback, and canonical LSAG signature hash. Compare with the recorded leaf B.</p></div>
              </section>
              <section class="merkle-step fragment fragment-2" data-fragment="2">
                <span class="merkle-step-number">02</span><div><h3>Climb the proof path</h3><p>Hash A on the left of B to get AB. Then hash CD on the right of AB. Left/right order matters.</p><code>H(H(A || B) || CD)</code></div>
              </section>
              <section class="merkle-step fragment fragment-3" data-fragment="3">
                <span class="merkle-step-number">03</span><div><h3>Compare the roots</h3><p>Equal roots confirm inclusion against that root. A changed leaf or incorrect sibling path fails the comparison.</p><code>computed_root === expected_root</code></div>
              </section>
              <p class="merkle-note"><strong>What this proves:</strong> inclusion against the supplied root. LSAG validity is checked separately; detecting a rewritten history requires a trusted or independently retained root.</p>
              <p class="merkle-notation">H = SHA-256 · || = concatenate hash strings · Proof size: O(log n)</p>
            </div>
          </div>
        `;
      }
    },
    {
      id: 12,
      hash: 'security',
      pill: 'Threat Model',
      title: 'Security & Privacy Guarantees',
      subtitle: 'Comprehensive mathematical resilience against insider threats and infrastructure compromise.',
      duration: 9,
      fragmentsCount: 4,
      diagramHighlight: { nodes: [], flows: [] },
      render() {
        return `
          <div class="security-matrix-grid">
            <div class="security-card fragment fragment-1" data-fragment="1">
              <div class="security-card-header">
                <div class="security-threat-title">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  <span>Compromised Moodle LMS</span>
                </div>
                <span class="threat-badge critical">Insider Threat</span>
              </div>
              <p>Moodle administrators or rogue staff possess student identities and public keys, but have zero access to private keys or the Feedback Server database.</p>
              <div class="security-guarantee-box">
                <strong>Guarantee</strong>: Cannot correlate submissions to students; cannot forge LSAG signatures without private scalar <code>x</code>.
              </div>
            </div>

            <div class="security-card fragment fragment-2" data-fragment="2">
              <div class="security-card-header">
                <div class="security-threat-title">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                  <span>Compromised Feedback Server</span>
                </div>
                <span class="threat-badge critical">Server Breach</span>
              </div>
              <p>An attacker dumps the feedback database containing ciphertexts, LSAG signatures, and key images.</p>
              <div class="security-guarantee-box">
                <strong>Guarantee</strong>: Discrete logarithm hardness prevents identifying signers; ECIES prevents decrypting feedback without module key <code>d</code>.
              </div>
            </div>

            <div class="security-card fragment fragment-3" data-fragment="3">
              <div class="security-card-header">
                <div class="security-threat-title">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
                  <span>Malicious / Rogue Student</span>
                </div>
                <span class="threat-badge shield">Sybil Attack</span>
              </div>
              <p>A student attempts to cast multiple ratings to sway module score or ballot stuff.</p>
              <div class="security-guarantee-box">
                <strong>Guarantee</strong>: Deterministic key image <code>I = x &middot; H(R)</code> duplicates upon re-signing, triggering instant DB rejection.
              </div>
            </div>

            <div class="security-card fragment fragment-4" data-fragment="4">
              <div class="security-card-header">
                <div class="security-threat-title">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                  <span>Malicious Third-Party Verifier</span>
                </div>
                <span class="threat-badge shield">Audit Privacy</span>
              </div>
              <p>Auditor attempts to deanonymize students or harvest feedback contents during verification requests.</p>
              <div class="security-guarantee-box">
                <strong>Guarantee</strong>: Verifier only sees public REST commitments and ciphertext; learns zero plaintext and zero identities.
              </div>
            </div>
          </div>
        `;
      }
    },
    {
      id: 13,
      hash: 'techstack',
      pill: 'Engineering',
      title: 'Tech Stack & Codebase Highlights',
      subtitle: 'Real details pulled directly from the Django backend and React frontend repositories.',
      duration: 9,
      fragmentsCount: 3,
      diagramHighlight: { nodes: [], flows: [] },
      render() {
        return `
          <div class="tech-stack-container">
            <div class="tech-column fragment fragment-1" data-fragment="1">
              <div class="tech-col-header">
                <div class="tech-col-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 17l6-6-6-6M12 19h8"/></svg>
                </div>
                <h3>Decoupled Backend</h3>
              </div>
              <ul class="tech-items-list">
                <li class="tech-item-row">
                  <div class="tech-item-name">
                    <span>Python 3.12 &amp; Django 5</span>
                    <span class="tech-tag">DRF</span>
                  </div>
                  <div class="tech-item-desc">3 decoupled service runners with independent SQLite databases.</div>
                </li>
                <li class="tech-item-row">
                  <div class="tech-item-name">
                    <span>M2M OAuth2 Shared Secret</span>
                    <span class="tech-tag">Client Credentials</span>
                  </div>
                  <div class="tech-item-desc">Automated secret provisioning via <code>setup_services.py</code>.</div>
                </li>
                <li class="tech-item-row">
                  <div class="tech-item-name">
                    <span>Multi-Port Deployment</span>
                    <span class="tech-tag">8001 / 8002 / 8003</span>
                  </div>
                  <div class="tech-item-desc">Docker Compose &amp; Nginx proxy with Let's Encrypt SSL.</div>
                </li>
              </ul>
            </div>

            <div class="tech-column fragment fragment-2" data-fragment="2">
              <div class="tech-col-header">
                <div class="tech-col-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                </div>
                <h3>Cryptographic Engine</h3>
              </div>
              <ul class="tech-items-list">
                <li class="tech-item-row">
                  <div class="tech-item-name">
                    <span>erating_crypto Library</span>
                    <span class="tech-tag">Pure Python</span>
                  </div>
                  <div class="tech-item-desc">Zero external C-library dependency; built on standard <code>ecdsa</code>.</div>
                </li>
                <li class="tech-item-row">
                  <div class="tech-item-name">
                    <span>SECP256k1 Curve Math</span>
                    <span class="tech-tag">y² = x³ + 7</span>
                  </div>
                  <div class="tech-item-desc">Same secure elliptic curve powering Bitcoin and Ethereum.</div>
                </li>
                <li class="tech-item-row">
                  <div class="tech-item-name">
                    <span>CLI Signing Utility</span>
                    <span class="tech-tag">sign_feedback.py</span>
                  </div>
                  <div class="tech-item-desc">Offline student signing tool generating payload files.</div>
                </li>
              </ul>
            </div>

            <div class="tech-column fragment fragment-3" data-fragment="3">
              <div class="tech-col-header">
                <div class="tech-col-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                </div>
                <h3>Frontend Monorepo</h3>
              </div>
              <ul class="tech-items-list">
                <li class="tech-item-row">
                  <div class="tech-item-name">
                    <span>React 18 &amp; TypeScript</span>
                    <span class="tech-tag">Vite 5</span>
                  </div>
                  <div class="tech-item-desc">Yarn PnP monorepo serving 3 isolated web portals.</div>
                </li>
                <li class="tech-item-row">
                  <div class="tech-item-name">
                    <span>Portals: :5173, :5174, :5175</span>
                    <span class="tech-tag">Decoupled UX</span>
                  </div>
                  <div class="tech-item-desc">Moodle LMS Portal, Anonymous Feedback Portal, Verifier Portal.</div>
                </li>
                <li class="tech-item-row">
                  <div class="tech-item-name">
                    <span>TanStack Query v5</span>
                    <span class="tech-tag">Axios + Tailwind</span>
                  </div>
                  <div class="tech-item-desc">Optimistic caching, cryptographic receipt downloads, and checks.</div>
                </li>
              </ul>
            </div>
          </div>
        `;
      }
    },
    {
      id: 14,
      hash: 'demo',
      pill: 'App Showcase',
      title: 'Live Portal Demonstrations',
      subtitle: 'Experience the real user workflows across Moodle, Feedback, and Verifier portals.',
      duration: 11,
      fragmentsCount: 0,
      diagramHighlight: { nodes: [], flows: [] },
      render() {
        return `
          <div class="demo-showcase-container">
            <div class="demo-tabs-bar">
              <button class="demo-tab-btn active" data-tab="moodle">
                <span>Moodle Portal (:5173)</span>
              </button>
              <button class="demo-tab-btn" data-tab="feedback">
                <span>Feedback Portal (:5174)</span>
              </button>
              <button class="demo-tab-btn" data-tab="verifier">
                <span>Verifier Portal (:5175)</span>
              </button>
            </div>

            <div class="demo-browser-window">
              <div class="demo-browser-chrome">
                <div class="demo-traffic-lights">
                  <div class="traffic-dot red"></div>
                  <div class="traffic-dot yellow"></div>
                  <div class="traffic-dot green"></div>
                </div>
                <div class="demo-url-bar" id="mock-browser-url">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                  <span id="mock-url-text">http://localhost:5173/moodle/modules/1</span>
                </div>
                <span class="demo-portal-badge" id="mock-portal-badge">Authenticated Moodle Realm</span>
              </div>

              <!-- Moodle Tab Content -->
              <div class="demo-content-body active" id="demo-tab-content-moodle">
                <div class="mock-ui-header">
                  <div>
                    <h4 class="mock-ui-title">CS4219 — Information Security &amp; Applied Cryptography</h4>
                    <p style="font-size: 0.8rem; color: var(--text-muted);">Semester 1 &bull; Lecturer: Prof. Alan Turing</p>
                  </div>
                  <div style="display: flex; gap: 8px; align-items: center;">
                    <span class="mock-status-pill" id="mock-feedback-status-pill">&bull; Feedback Window Open</span>
                    <button class="btn-secondary" id="btn-mock-toggle-feedback" style="padding: 3px 8px; font-size: 0.72rem;">Toggle</button>
                  </div>
                </div>

                <div class="mock-card-list">
                  <div class="mock-card">
                    <div class="mock-card-info">
                      <h5>Enrolled Public Key Ring (k = 5)</h5>
                      <p id="mock-keys-desc">SECP256k1 public points uploaded by enrolled students</p>
                    </div>
                    <button class="btn-secondary" id="btn-mock-view-keys" style="padding: 4px 10px; font-size: 0.75rem;">Inspect 5 Keys</button>
                  </div>
                  <div id="mock-keys-list-container" style="display: none; background: rgba(0,0,0,0.3); padding: 8px 12px; border-radius: 6px; font-family: var(--font-mono); font-size: 0.72rem; color: #a78bfa;">
                    0: 02c3a8...:8f12a9...<br/>
                    1: 03f19e...:5b271d...<br/>
                    2: 029bb1...:41a0ce...<br/>
                    3: 03102a...:98cf33...<br/>
                    4: 02de45...:12eb78...
                  </div>

                  <div class="mock-card">
                    <div class="mock-card-info">
                      <h5>Decrypted Lecturer Feedback Dashboard</h5>
                      <p>Ciphertexts decrypted locally using module private key d</p>
                    </div>
                    <div style="display: flex; gap: 8px; align-items: center;">
                      <span style="color: #fbbf24; font-weight: 700;">★ 4.8 / 5.0</span>
                      <span class="mock-badge-tag">14 Reviews</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Feedback Tab Content -->
              <div class="demo-content-body" id="demo-tab-content-feedback">
                <div class="mock-ui-header">
                  <div>
                    <h4 class="mock-ui-title">Submit Anonymous Feedback</h4>
                    <p style="font-size: 0.8rem; color: var(--text-muted);">Zero Cookies &bull; Zero User Tokens &bull; Cryptographically Sealed</p>
                  </div>
                  <span class="mock-status-pill" style="background: rgba(139, 92, 246, 0.2); color: #c4b5fd; border-color: var(--accent-border);">&bull; Anonymous Session</span>
                </div>

                <div class="mock-card-list">
                  <div class="mock-card">
                    <div class="mock-card-info" style="flex: 1;">
                      <h5>Module: CS4219 — Information Security</h5>
                      <div style="display: flex; align-items: center; gap: 10px; margin-top: 4px;">
                        <span style="font-size: 0.82rem; color: var(--text-muted);">Your Rating:</span>
                        <div id="mock-star-selector" style="cursor: pointer; color: #fbbf24; font-size: 1.15rem; letter-spacing: 2px;">★★★★★</div>
                        <span id="mock-star-val" style="font-size: 0.8rem; color: #fbbf24; font-weight: 700;">5/5</span>
                      </div>
                    </div>
                    <span class="mock-badge-tag">AES-256 CTR</span>
                  </div>

                  <div class="mock-card">
                    <div class="mock-card-info" style="flex: 1;">
                      <h5>LSAG Ring Signature Loaded</h5>
                      <p style="font-family: var(--font-mono); font-size: 0.72rem; color: #a78bfa;">Nullifier I: 7b83ef12:4c90ab12... (1-Vote-Guaranteed)</p>
                    </div>
                    <button class="btn-primary" id="btn-mock-submit-feedback" style="padding: 6px 14px; font-size: 0.78rem;">Submit Feedback</button>
                  </div>

                  <div id="mock-feedback-receipt-box" style="display: none; background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.3); border-radius: 8px; padding: 10px 14px; font-size: 0.82rem; color: #6ee7b7;">
                    <strong>&check; Receipt Issued!</strong> Token: <code>a3f1c2d4-89ab-4def-bcde-123456789abc</code> &bull; Leaf Hash: <code>7f83b165...</code>
                  </div>
                </div>
              </div>

              <!-- Verifier Tab Content -->
              <div class="demo-content-body" id="demo-tab-content-verifier">
                <div class="mock-ui-header">
                  <div>
                    <h4 class="mock-ui-title">Independent Third-Party Receipt Verifier</h4>
                    <p style="font-size: 0.8rem; color: var(--text-muted);">Receipt Token: <code>a3f1c2d4-89ab-4def-bcde-123456789abc</code></p>
                  </div>
                  <button class="btn-primary" id="btn-mock-run-verify" style="padding: 4px 12px; font-size: 0.76rem;">Re-verify Audit</button>
                </div>

                <div class="verify-checklist" id="mock-verify-checklist">
                  <div class="check-item">
                    <div class="check-left">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                      <span>1. LSAG Ring Signature Authenticity</span>
                    </div>
                    <span class="check-pill-ok">VERIFIED (1-of-k)</span>
                  </div>

                  <div class="check-item">
                    <div class="check-left">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                      <span>2. Leaf Hash Integrity Commitment</span>
                    </div>
                    <span class="check-pill-ok">MATCHED SHA256</span>
                  </div>

                  <div class="check-item">
                    <div class="check-left">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                      <span>3. Merkle Tree Inclusion Proof</span>
                    </div>
                    <span class="check-pill-ok">ROOT VERIFIED</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `;
      }
    },
    {
      id: 15,
      hash: 'conclusion',
      pill: 'Future Horizons',
      title: 'Future Work & Open Discussion',
      subtitle: 'Advancing privacy-preserving governance and auditable university metrics.',
      duration: 10,
      fragmentsCount: 0,
      diagramHighlight: { nodes: [], flows: [] },
      render() {
        return `
          <div class="future-grid">
            <div class="future-roadmap-box">
              <div class="future-item">
                <div class="future-item-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
                </div>
                <div class="future-item-content">
                  <h4>zk-SNARKs for Constant-Size Proofs</h4>
                  <p>Replacing linear $O(k)$ ring signatures with succinct zero-knowledge arguments to support course cohorts with 1,000+ students without performance degradation.</p>
                </div>
              </div>

              <div class="future-item">
                <div class="future-item-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
                </div>
                <div class="future-item-content">
                  <h4>Public Blockchain Root Anchoring</h4>
                  <p>Periodically committing Merkle roots to Ethereum or Polygon smart contracts, eliminating any trust in server clock or historical root retention.</p>
                </div>
              </div>

              <div class="future-item">
                <div class="future-item-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20v-6M6 20V10M18 20V4"/></svg>
                </div>
                <div class="future-item-content">
                  <h4>Differential Privacy for Small Cohorts</h4>
                  <p>Adding calibrated Laplace noise to aggregated score distributions in modules with fewer than 10 students to prevent subtle statistical inference.</p>
                </div>
              </div>
            </div>

            <div class="qa-card">
              <h3>Questions &amp; Discussion</h3>
              <p>Thank you for exploring e-Rating. Ready to answer technical questions regarding protocols, threat models, and code implementation.</p>
              <div class="qa-actions">
                <button class="btn-primary" id="btn-replay-showcase">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 4v6h6M23 20v-6h-6"/><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"/></svg>
                  <span>Replay Showcase</span>
                </button>
              </div>
            </div>
          </div>
        `;
      }
    }
  ];

  // ──────────────────────────────────────────────────────────────────────────
  // 2. High Fidelity SVG Architecture Diagram Template
  // ──────────────────────────────────────────────────────────────────────────
  function generateArchitectureSvg() {
    return `
      <svg class="arch-svg-root" viewBox="0 0 960 620" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <!-- Arrow Markers -->
          <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 1 L 9 5 L 0 9 z" fill="#64748b" />
          </marker>
          <marker id="arrow-active" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M 0 1 L 9 5 L 0 9 z" fill="#8b5cf6" />
          </marker>

          <!-- Gradients -->
          <linearGradient id="moodle-glow" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#1e1b4b" />
            <stop offset="100%" stop-color="#0f172a" />
          </linearGradient>
        </defs>

        <!-- Trust Boundary Line & Label -->
        <g id="trust-boundary-group">
          <line class="trust-boundary-line" x1="530" y1="20" x2="530" y2="590" />
          <text class="trust-label" x="300" y="25">Institutional LMS Realm (Authenticated)</text>
          <text class="trust-label" x="730" y="25">Cryptographic Realm (Anonymous / Audited)</text>
          <text class="trust-label" x="530" y="605" style="fill: #a78bfa; font-size: 10px;">&larr; TRUST BOUNDARY &rarr;</text>
        </g>

        <!-- FLOW ARROWS & LABELS -->

        <!-- 1. Admin -> Moodle Server -->
        <g class="flow-group" id="flow-admin-moodle">
          <path class="flow-path" id="path-admin-moodle" d="M 400 95 L 400 190" marker-end="url(#arrow)" />
          <rect class="flow-label-bg" x="340" y="132" width="120" height="20" />
          <text class="flow-label" x="400" y="146">Manage Modules</text>
        </g>

        <!-- 2. Lecturer -> Moodle Server -->
        <g class="flow-group" id="flow-lecturer-moodle">
          <path class="flow-path" id="path-lecturer-moodle" d="M 220 95 L 320 190" marker-end="url(#arrow)" />
          <rect class="flow-label-bg" x="170" y="140" width="170" height="20" />
          <text class="flow-label" x="255" y="154">View decrypted Feedbacks</text>
        </g>

        <!-- 3. Student -> Moodle Server -->
        <g class="flow-group" id="flow-student-moodle">
          <path class="flow-path" id="path-student-moodle" d="M 180 430 L 330 270" marker-end="url(#arrow)" />
          <rect class="flow-label-bg" x="120" y="340" width="230" height="20" />
          <text class="flow-label" x="235" y="354">Enroll &amp; upload public key</text>
        </g>

        <!-- 4. Moodle Server -> Feedback Server (Crosses dashed line) -->
        <g class="flow-group" id="flow-moodle-feedback">
          <path class="flow-path" id="path-moodle-feedback" d="M 480 230 L 620 230" marker-end="url(#arrow)" />
          <rect class="flow-label-bg" x="485" y="205" width="130" height="20" />
          <text class="flow-label" x="550" y="219">Sync Key Ring</text>
        </g>

        <!-- 5. Student -> Feedback Server (Crosses dashed line, feedback + receipt) -->
        <g class="flow-group" id="flow-student-feedback">
          <path class="flow-path" id="path-student-feedback" d="M 220 460 L 580 460 L 680 270" marker-end="url(#arrow)" />
          <rect class="flow-label-bg" x="290" y="445" width="260" height="22" />
          <text class="flow-label" x="420" y="460">Submit encrypted feedback / Get receipt</text>
        </g>

        <!-- 6. Student -> Verifier Server (Crosses dashed line) -->
        <g class="flow-group" id="flow-student-verifier">
          <path class="flow-path" id="path-student-verifier" d="M 220 495 L 620 495" marker-end="url(#arrow)" />
          <rect class="flow-label-bg" x="300" y="505" width="240" height="20" />
          <text class="flow-label" x="420" y="519">Send receipt to verify integrity</text>
        </g>

        <!-- 7. Feedback Server <-> Verifier Server -->
        <g class="flow-group" id="flow-feedback-verifier">
          <path class="flow-path" id="path-feedback-verifier" d="M 710 270 L 710 455" marker-end="url(#arrow)" />
          <rect class="flow-label-bg" x="650" y="350" width="120" height="30" />
          <text class="flow-label" x="710" y="364">Merkle Tree Proof</text>
          <text class="flow-label" x="710" y="376" style="font-size: 9px; fill: #6ee7b7;">&uarr;&darr; Audit Protocol</text>
        </g>

        <!-- NODES / ACTORS -->

        <!-- Admin Node -->
        <g class="node-box" id="node-admin" transform="translate(330, 35)">
          <rect class="node-rect" width="140" height="60" />
          <text class="node-title" x="70" y="30">Admin</text>
          <text class="node-subtitle" x="70" y="46">Manage Courses</text>
        </g>

        <!-- Lecturer Node -->
        <g class="node-box" id="node-lecturer" transform="translate(90, 35)">
          <rect class="node-rect" width="150" height="60" />
          <text class="node-title" x="75" y="30">Lecturer</text>
          <text class="node-subtitle" x="75" y="46">Module Decryption</text>
        </g>

        <!-- Student Node -->
        <g class="node-box" id="node-student" transform="translate(80, 430)">
          <rect class="node-rect" width="140" height="75" />
          <text class="node-title" x="70" y="34">Student</text>
          <text class="node-subtitle" x="70" y="50">Local SECP256k1</text>
          <text class="node-subtitle" x="70" y="64" style="fill: #a78bfa;">LSAG Signer</text>
        </g>

        <!-- Moodle Server Node -->
        <g class="node-box" id="node-moodle" transform="translate(310, 190)">
          <rect class="node-rect" width="170" height="80" style="stroke-dasharray: 4 2;" />
          <text class="node-title" x="85" y="34">Moodle Server</text>
          <text class="node-subtitle" x="85" y="50">LMS Port :8001</text>
          <text class="node-subtitle" x="85" y="64" style="fill: #38bdf8;">Rosters &amp; Key Rings</text>
        </g>

        <!-- Feedback Server Node -->
        <g class="node-box" id="node-feedback" transform="translate(620, 190)">
          <rect class="node-rect" width="180" height="80" />
          <text class="node-title" x="90" y="34">Feedback Server</text>
          <text class="node-subtitle" x="90" y="50">Collector Port :8002</text>
          <text class="node-subtitle" x="90" y="64" style="fill: #a78bfa;">Nullifiers &amp; Merkle Tree</text>
        </g>

        <!-- Verifier Server Node -->
        <g class="node-box" id="node-verifier" transform="translate(620, 455)">
          <rect class="node-rect" width="180" height="80" />
          <text class="node-title" x="90" y="34">Verifier Server</text>
          <text class="node-subtitle" x="90" y="50">Third Party :8003</text>
          <text class="node-subtitle" x="90" y="64" style="fill: #6ee7b7;">Public Audit Engine</text>
        </g>

        <!-- Animated Packet Dot -->
        <circle id="animated-packet-dot" class="packet-dot" r="6" cx="-50" cy="-50" style="display: none;">
          <animate attributeName="opacity" values="0.7;1;0.7" dur="1s" repeatCount="indefinite" />
        </circle>
      </svg>
    `;
  }

  // ──────────────────────────────────────────────────────────────────────────
  // 3. Presentation State & Engine
  // ──────────────────────────────────────────────────────────────────────────
  const state = {
    currentIndex: 0,
    currentFragment: 0,
    isAutoPlay: false,
    isPaused: false,
    durationMs: 9000,
    elapsedMs: 0,
    timerRafId: null,
    lastTimestamp: null,
    touchStartX: 0,
    touchStartY: 0
  };

  // DOM Elements cache
  const el = {};

  function initElements() {
    el.app = document.getElementById('presentation-app');
    el.stageOuter = document.querySelector('.stage-outer');
    el.stageViewport = document.querySelector('.stage-viewport');
    el.slidesTrack = document.getElementById('slides-track');
    el.prevBtn = document.getElementById('btn-prev');
    el.nextBtn = document.getElementById('btn-next');
    el.playPauseBtn = document.getElementById('btn-play-pause');
    el.restartBtn = document.getElementById('btn-restart');
    el.fullscreenBtn = document.getElementById('btn-fullscreen');
    el.helpBtn = document.getElementById('btn-help');
    el.autoplayToggle = document.getElementById('btn-autoplay-toggle');
    el.progressBarFill = document.getElementById('progress-bar-fill');
    el.progressContainer = document.getElementById('progress-bar-container');
    el.slideCounter = document.getElementById('slide-counter');
    el.slideTitleMini = document.getElementById('header-slide-title');
    el.timerRingFill = document.getElementById('timer-ring-fill');
    el.timerStatusText = document.getElementById('timer-status-text');
    el.dotsRow = document.getElementById('slide-dots-row');
    el.modalOverlay = document.getElementById('modal-overlay');
    el.modalCard = document.getElementById('modal-card');
    el.modalTitle = document.getElementById('modal-title');
    el.modalBody = document.getElementById('modal-body');
    el.modalClose = document.getElementById('modal-close-btn');
  }

  // ──────────────────────────────────────────────────────────────────────────
  // 4. Slide Rendering & Mounting
  // ──────────────────────────────────────────────────────────────────────────
  function renderAllSlides() {
    el.slidesTrack.innerHTML = '';
    el.dotsRow.innerHTML = '';

    SLIDES_CONFIG.forEach((slide, idx) => {
      // 1. Create slide panel container
      const panel = document.createElement('div');
      panel.className = `slide-panel ${idx === 0 ? 'active' : ''}`;
      panel.id = `slide-panel-${slide.id}`;
      panel.setAttribute('data-slide-index', idx);

      let headerHtml = '';
      if (slide.id !== 1) {
        headerHtml = `
          <div class="slide-top">
            <div class="slide-pill-bar">
              <span class="slide-pill">${slide.pill}</span>
            </div>
            <h2 class="slide-headline">${slide.title}</h2>
            <p class="slide-subline">${slide.subtitle}</p>
          </div>
        `;
      }

      panel.innerHTML = `
        ${headerHtml}
        <div class="slide-body">
          ${slide.render()}
        </div>
      `;

      el.slidesTrack.appendChild(panel);

      // 2. Create dot navigation button
      const dot = document.createElement('button');
      dot.className = `slide-dot ${idx === 0 ? 'active' : ''}`;
      dot.setAttribute('data-slide-index', idx);
      dot.setAttribute('data-tooltip', `${slide.id}. ${slide.title}`);
      dot.setAttribute('aria-label', `Go to slide ${slide.id}: ${slide.title}`);
      dot.addEventListener('click', () => {
        goToSlide(idx);
      });
      el.dotsRow.appendChild(dot);
    });

    // Populate architecture SVG in any slide that needs it (slides 5 to 10)
    for (let i = 5; i <= 10; i++) {
      const diagWrap = document.getElementById(`diagram-container-${i}`);
      if (diagWrap) {
        diagWrap.innerHTML = generateArchitectureSvg();
      }
    }
  }

  // ──────────────────────────────────────────────────────────────────────────
  // 5. Navigation Logic & Fragment Steps
  // ──────────────────────────────────────────────────────────────────────────
  function updateSlideView(index, animate = true) {
    state.currentIndex = index;
    const currentSlide = SLIDES_CONFIG[index];

    // Reset fragment counter
    state.currentFragment = 0;

    // Toggle active slide panel
    const panels = el.slidesTrack.querySelectorAll('.slide-panel');
    panels.forEach((p, idx) => {
      if (idx === index) {
        p.classList.add('active');
      } else {
        p.classList.remove('active');
      }
    });

    // Reset fragments visibility inside the newly active panel
    const currentPanel = panels[index];
    if (currentPanel) {
      const fragments = currentPanel.querySelectorAll('.fragment');
      fragments.forEach(f => {
        f.classList.remove('revealed');
        f.classList.remove('highlighted');
      });
    }

    // Update Dots
    const dots = el.dotsRow.querySelectorAll('.slide-dot');
    dots.forEach((d, idx) => {
      d.classList.toggle('active', idx === index);
    });

    // Update Counter & Titles
    const slideNumberStr = String(index + 1).padStart(2, '0');
    const totalNumberStr = String(SLIDES_CONFIG.length).padStart(2, '0');
    el.slideCounter.textContent = `${slideNumberStr} / ${totalNumberStr}`;
    el.slideTitleMini.textContent = `${index + 1}. ${currentSlide.title}`;

    // Update Progress Bar
    const progressPercent = ((index + 1) / SLIDES_CONFIG.length) * 100;
    el.progressBarFill.style.width = `${progressPercent}%`;

    // Disable/Enable Nav Buttons
    el.prevBtn.disabled = (index === 0 && state.currentFragment === 0);
    // nextBtn is always enabled unless at very end with no fragments
    el.nextBtn.disabled = (index === SLIDES_CONFIG.length - 1 && currentSlide.fragmentsCount === 0);

    // Apply Diagram Highlights
    applyDiagramHighlights(currentSlide);

    // Update URL Hash without triggering reload loop
    window.location.hash = `/slide/${index + 1}`;

    // Reset Slide Timer
    resetTimerForCurrentSlide();
  }

  function advanceNext() {
    const currentSlide = SLIDES_CONFIG[state.currentIndex];
    const currentPanel = el.slidesTrack.querySelector(`.slide-panel[data-slide-index="${state.currentIndex}"]`);

    // Check if current slide has unrevealed fragments
    if (currentSlide.fragmentsCount > 0 && state.currentFragment < currentSlide.fragmentsCount) {
      state.currentFragment += 1;
      revealFragment(currentPanel, state.currentFragment);
      resetTimerForCurrentSlide();
      return;
    }

    // Otherwise, move to the next slide
    if (state.currentIndex < SLIDES_CONFIG.length - 1) {
      goToSlide(state.currentIndex + 1);
    } else {
      // Loop or stop
      if (state.isAutoPlay) {
        goToSlide(0);
      }
    }
  }

  function stepBack() {
    const currentSlide = SLIDES_CONFIG[state.currentIndex];
    const currentPanel = el.slidesTrack.querySelector(`.slide-panel[data-slide-index="${state.currentIndex}"]`);

    // If fragments are active, rewind one fragment
    if (currentSlide.fragmentsCount > 0 && state.currentFragment > 0) {
      unrevealFragment(currentPanel, state.currentFragment);
      state.currentFragment -= 1;
      applyDiagramHighlights(currentSlide);
      resetTimerForCurrentSlide();
      return;
    }

    // Otherwise, jump to previous slide
    if (state.currentIndex > 0) {
      const prevIdx = state.currentIndex - 1;
      const prevSlide = SLIDES_CONFIG[prevIdx];
      goToSlide(prevIdx);
      // Replay all fragments in previous slide so it doesn't appear empty when going backwards
      if (prevSlide.fragmentsCount > 0) {
        state.currentFragment = prevSlide.fragmentsCount;
        const prevPanel = el.slidesTrack.querySelector(`.slide-panel[data-slide-index="${prevIdx}"]`);
        if (prevPanel) {
          for (let f = 1; f <= prevSlide.fragmentsCount; f++) {
            const target = prevPanel.querySelector(`.fragment-${f}`);
            if (target) target.classList.add('revealed');
          }
        }
        applyDiagramHighlights(prevSlide);
      }
    }
  }

  function goToSlide(index) {
    if (index < 0 || index >= SLIDES_CONFIG.length) return;
    updateSlideView(index);
  }

  function revealFragment(panel, fragmentNum) {
    const target = panel.querySelector(`.fragment-${fragmentNum}`);
    if (target) {
      target.classList.add('revealed');
      target.classList.add('highlighted');
      setTimeout(() => target.classList.remove('highlighted'), 800);
    }
    const currentSlide = SLIDES_CONFIG[state.currentIndex];
    applyDiagramHighlights(currentSlide);
  }

  function unrevealFragment(panel, fragmentNum) {
    const target = panel.querySelector(`.fragment-${fragmentNum}`);
    if (target) {
      target.classList.remove('revealed');
      target.classList.remove('highlighted');
    }
    const currentSlide = SLIDES_CONFIG[state.currentIndex];
    applyDiagramHighlights(currentSlide);
  }

  // ──────────────────────────────────────────────────────────────────────────
  // 6. SVG Architecture Diagram Dynamic Highlighter
  // ──────────────────────────────────────────────────────────────────────────
  function applyDiagramHighlights(slide) {
    const currentPanel = el.slidesTrack.querySelector(`.slide-panel[data-slide-index="${state.currentIndex}"]`);
    if (!currentPanel) return;

    const svg = currentPanel.querySelector('.arch-svg-root');
    if (!svg) return;

    const cfg = slide.diagramHighlight;
    const allNodes = svg.querySelectorAll('.node-box');
    const allFlows = svg.querySelectorAll('.flow-group');
    const packetDot = svg.querySelector('#animated-packet-dot');

    let nodesToHighlight = cfg ? (cfg.nodes || []) : [];
    let flowsToHighlight = cfg ? (cfg.flows || []) : [];

    // Progressive appearance for Slide 5 (Actors appear step by step)
    if (slide.id === 5) {
      if (state.currentFragment === 1) {
        nodesToHighlight = ['admin', 'lecturer', 'student', 'moodle'];
        flowsToHighlight = ['flow-admin-moodle', 'flow-lecturer-moodle', 'flow-student-moodle'];
      } else if (state.currentFragment === 2) {
        nodesToHighlight = ['admin', 'lecturer', 'student', 'moodle', 'feedback', 'verifier'];
        flowsToHighlight = ['flow-admin-moodle', 'flow-lecturer-moodle', 'flow-student-moodle', 'flow-feedback-verifier'];
      } else if (state.currentFragment >= 3) {
        nodesToHighlight = ['admin', 'lecturer', 'student', 'moodle', 'feedback', 'verifier'];
        flowsToHighlight = ['flow-admin-moodle', 'flow-lecturer-moodle', 'flow-student-moodle', 'flow-moodle-feedback', 'flow-student-feedback', 'flow-student-verifier', 'flow-feedback-verifier'];
      } else {
        nodesToHighlight = [];
        flowsToHighlight = [];
      }
    }

    if (cfg && cfg.dimOthers) {
      svg.classList.add('diagram-dimmed');
    } else {
      svg.classList.remove('diagram-dimmed');
    }

    // Reset classes
    allNodes.forEach(n => n.classList.remove('highlighted'));
    allFlows.forEach(f => {
      f.classList.remove('highlighted');
      const p = f.querySelector('.flow-path');
      if (p) p.setAttribute('marker-end', 'url(#arrow)');
    });

    nodesToHighlight.forEach(nodeId => {
      const nodeEl = svg.querySelector(`#node-${nodeId}`);
      if (nodeEl) nodeEl.classList.add('highlighted');
    });

    flowsToHighlight.forEach(flowId => {
      const flowEl = svg.querySelector(`#${flowId}`);
      if (flowEl) {
        flowEl.classList.add('highlighted');
        const p = flowEl.querySelector('.flow-path');
        if (p) p.setAttribute('marker-end', 'url(#arrow-active)');
      }
    });

    // Animate Packet along active path
    if (cfg && cfg.activePacket && packetDot) {
      const activePath = svg.querySelector(`#path-${cfg.activePacket.replace('flow-', '')}`);
      if (activePath) {
        packetDot.style.display = 'block';
        animatePacketOnPath(packetDot, activePath);
      } else {
        packetDot.style.display = 'none';
      }
    } else if (packetDot) {
      packetDot.style.display = 'none';
    }
  }

  function animatePacketOnPath(dot, path) {
    const totalLength = path.getTotalLength();
    let startTimestamp = null;
    const duration = 2200; // ms for one loop

    function step(timestamp) {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = ((timestamp - startTimestamp) % duration) / duration;
      const point = path.getPointAtLength(progress * totalLength);
      dot.setAttribute('cx', point.x);
      dot.setAttribute('cy', point.y);

      // Only continue if this diagram is still active
      if (dot.style.display !== 'none') {
        requestAnimationFrame(step);
      }
    }
    requestAnimationFrame(step);
  }

  // ──────────────────────────────────────────────────────────────────────────
  // 7. Auto-Play & Timer Engine
  // ──────────────────────────────────────────────────────────────────────────
  function resetTimerForCurrentSlide() {
    const slide = SLIDES_CONFIG[state.currentIndex];
    state.durationMs = (slide.duration || 9) * 1000;
    state.elapsedMs = 0;
    state.lastTimestamp = null;
    updateTimerVisuals(0);
  }

  function startTimerLoop() {
    if (state.timerRafId) cancelAnimationFrame(state.timerRafId);

    function loop(timestamp) {
      if (state.isAutoPlay && !state.isPaused) {
        if (!state.lastTimestamp) state.lastTimestamp = timestamp;
        const delta = timestamp - state.lastTimestamp;
        state.lastTimestamp = timestamp;

        state.elapsedMs += delta;
        const ratio = Math.min(state.elapsedMs / state.durationMs, 1);
        updateTimerVisuals(ratio);

        if (state.elapsedMs >= state.durationMs) {
          state.elapsedMs = 0;
          state.lastTimestamp = null;
          advanceNext();
        }
      } else {
        state.lastTimestamp = null;
      }

      state.timerRafId = requestAnimationFrame(loop);
    }

    state.timerRafId = requestAnimationFrame(loop);
  }

  function updateTimerVisuals(ratio) {
    // Ring circumference: 2 * pi * r = 2 * 3.14159 * 9 = ~56.54
    const circumference = 56.54;
    const offset = circumference * (1 - ratio);
    if (el.timerRingFill) {
      el.timerRingFill.style.strokeDashoffset = offset;
    }

    if (el.timerStatusText) {
      if (!state.isAutoPlay) {
        el.timerStatusText.textContent = 'Manual';
      } else if (state.isPaused) {
        el.timerStatusText.textContent = 'Paused';
      } else {
        const remainingSec = Math.max(0, Math.ceil((state.durationMs - state.elapsedMs) / 1000));
        el.timerStatusText.textContent = `${remainingSec}s`;
      }
    }
  }

  function toggleAutoPlay(forcedState) {
    if (typeof forcedState === 'boolean') {
      state.isAutoPlay = forcedState;
    } else {
      state.isAutoPlay = !state.isAutoPlay;
    }

    if (state.isAutoPlay) {
      state.isPaused = false;
      el.autoplayToggle.classList.add('autoplay-active');
      el.playPauseBtn.classList.add('active');
      el.playPauseBtn.setAttribute('title', 'Pause (Space)');
      el.playPauseBtn.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>
        </svg>
      `;
    } else {
      el.autoplayToggle.classList.remove('autoplay-active');
      el.playPauseBtn.classList.remove('active');
      el.playPauseBtn.setAttribute('title', 'Play (Space)');
      el.playPauseBtn.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polygon points="5 3 19 12 5 21 5 3"/>
        </svg>
      `;
    }

    updateTimerVisuals(state.elapsedMs / state.durationMs);
  }

  function togglePlayPause() {
    if (!state.isAutoPlay) {
      toggleAutoPlay(true);
      return;
    }

    state.isPaused = !state.isPaused;
    if (state.isPaused) {
      el.playPauseBtn.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polygon points="5 3 19 12 5 21 5 3"/>
        </svg>
      `;
    } else {
      el.playPauseBtn.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>
        </svg>
      `;
    }
    updateTimerVisuals(state.elapsedMs / state.durationMs);
  }

  // ──────────────────────────────────────────────────────────────────────────
  // 8. Event Listeners & Keyboard / Touch
  // ──────────────────────────────────────────────────────────────────────────
  function setupEvents() {
    // Nav Buttons
    el.prevBtn.addEventListener('click', () => stepBack());
    el.nextBtn.addEventListener('click', () => advanceNext());
    el.restartBtn.addEventListener('click', () => goToSlide(0));
    el.playPauseBtn.addEventListener('click', () => togglePlayPause());
    el.autoplayToggle.addEventListener('click', () => toggleAutoPlay());

    // Progress Bar click to jump
    el.progressContainer.addEventListener('click', (e) => {
      const rect = el.progressContainer.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const ratio = clickX / rect.width;
      const targetSlideIndex = Math.min(
        SLIDES_CONFIG.length - 1,
        Math.max(0, Math.floor(ratio * SLIDES_CONFIG.length))
      );
      goToSlide(targetSlideIndex);
    });

    // Pause on Stage Hover
    el.stageViewport.addEventListener('mouseenter', () => {
      if (state.isAutoPlay && !state.isPaused) {
        state.isPaused = true;
        updateTimerVisuals(state.elapsedMs / state.durationMs);
      }
    });

    el.stageViewport.addEventListener('mouseleave', () => {
      if (state.isAutoPlay && state.isPaused) {
        state.isPaused = false;
        state.lastTimestamp = null;
        updateTimerVisuals(state.elapsedMs / state.durationMs);
      }
    });

    // Keyboard Shortcuts
    window.addEventListener('keydown', (e) => {
      // Don't intercept if modal is open and hitting Escape
      if (el.modalOverlay.classList.contains('open')) {
        if (e.key === 'Escape') closeModal();
        return;
      }

      switch (e.key) {
        case 'ArrowRight':
        case 'PageDown':
          e.preventDefault();
          advanceNext();
          break;
        case 'ArrowLeft':
        case 'PageUp':
          e.preventDefault();
          stepBack();
          break;
        case ' ': // Space bar
          e.preventDefault();
          togglePlayPause();
          break;
        case 'Home':
          e.preventDefault();
          goToSlide(0);
          break;
        case 'End':
          e.preventDefault();
          goToSlide(SLIDES_CONFIG.length - 1);
          break;
        case 'f':
        case 'F':
          e.preventDefault();
          toggleFullscreen();
          break;
        case '?':
          e.preventDefault();
          openShortcutsModal();
          break;
      }
    });

    // Touch Swipe Support
    el.stageViewport.addEventListener('touchstart', (e) => {
      state.touchStartX = e.changedTouches[0].screenX;
      state.touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });

    el.stageViewport.addEventListener('touchend', (e) => {
      const touchEndX = e.changedTouches[0].screenX;
      const touchEndY = e.changedTouches[0].screenY;
      const diffX = touchEndX - state.touchStartX;
      const diffY = touchEndY - state.touchStartY;

      // Only horizontal swipes
      if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 45) {
        if (diffX < 0) {
          advanceNext();
        } else {
          stepBack();
        }
      }
    }, { passive: true });

    // URL Hash Routing
    window.addEventListener('hashchange', () => {
      parseUrlHash();
    });

    // Fullscreen Toggle
    el.fullscreenBtn.addEventListener('click', toggleFullscreen);

    // Help & Abstract Modals
    el.helpBtn.addEventListener('click', openShortcutsModal);
    el.modalClose.addEventListener('click', closeModal);
    el.modalOverlay.addEventListener('click', (e) => {
      if (e.target === el.modalOverlay) closeModal();
    });

    // Dynamic delegate for slide buttons (Start Walkthrough, etc.)
    document.addEventListener('click', (e) => {
      if (e.target.closest('#btn-start-presentation')) {
        goToSlide(1);
      }
      if (e.target.closest('#btn-open-full-desc')) {
        openFullDescriptionModal();
      }
      if (e.target.closest('#btn-replay-showcase')) {
        goToSlide(0);
      }

      // Theme Switcher Click
      const themeDot = e.target.closest('.theme-color-dot');
      if (themeDot) {
        document.querySelectorAll('.theme-color-dot').forEach(d => d.classList.remove('active'));
        themeDot.classList.add('active');
        const color = themeDot.getAttribute('data-color');
        applyAccentTheme(color);
      }

      // Slide 13: Moodle Toggle Feedback Window
      if (e.target.closest('#btn-mock-toggle-feedback')) {
        const pill = document.getElementById('mock-feedback-status-pill');
        if (pill) {
          const isOpen = pill.textContent.includes('Open');
          if (isOpen) {
            pill.textContent = '• Feedback Window Closed';
            pill.style.background = 'rgba(245, 158, 11, 0.15)';
            pill.style.color = '#fcd34d';
            pill.style.borderColor = 'rgba(245, 158, 11, 0.3)';
          } else {
            pill.textContent = '• Feedback Window Open';
            pill.style.background = 'var(--emerald-subtle)';
            pill.style.color = '#6ee7b7';
            pill.style.borderColor = 'rgba(16, 185, 129, 0.3)';
          }
        }
      }

      // Slide 13: Moodle View Keys
      if (e.target.closest('#btn-mock-view-keys')) {
        const box = document.getElementById('mock-keys-list-container');
        if (box) {
          box.style.display = box.style.display === 'none' ? 'block' : 'none';
        }
      }

      // Slide 13: Feedback Star Rating
      if (e.target.closest('#mock-star-selector')) {
        const starEl = document.getElementById('mock-star-selector');
        const valEl = document.getElementById('mock-star-val');
        if (starEl && valEl) {
          const current = valEl.textContent.charAt(0);
          const next = current === '5' ? '4' : (current === '4' ? '3' : '5');
          valEl.textContent = `${next}/5`;
          starEl.textContent = '★'.repeat(parseInt(next, 10)) + '☆'.repeat(5 - parseInt(next, 10));
        }
      }

      // Slide 13: Submit Feedback Mock
      if (e.target.closest('#btn-mock-submit-feedback')) {
        const btn = document.getElementById('btn-mock-submit-feedback');
        const box = document.getElementById('mock-feedback-receipt-box');
        if (btn && box) {
          btn.textContent = 'Submitting...';
          btn.disabled = true;
          setTimeout(() => {
            btn.textContent = 'Submitted!';
            box.style.display = 'block';
          }, 400);
        }
      }

      // Slide 13: Verifier Re-run Audit Mock
      if (e.target.closest('#btn-mock-run-verify')) {
        const btn = document.getElementById('btn-mock-run-verify');
        const checklist = document.getElementById('mock-verify-checklist');
        if (btn && checklist) {
          btn.textContent = 'Auditing...';
          checklist.style.opacity = '0.35';
          setTimeout(() => {
            btn.textContent = 'Re-verify Audit';
            checklist.style.opacity = '1';
          }, 500);
        }
      }

      // Demo Tabs in Slide 13
      const tabBtn = e.target.closest('.demo-tab-btn');
      if (tabBtn) {
        const tabKey = tabBtn.getAttribute('data-tab');
        switchDemoTab(tabKey);
      }
    });
  }

  function applyAccentTheme(color) {
    const root = document.documentElement;
    root.style.setProperty('--accent-primary', color);
    if (color === '#8b5cf6') {
      root.style.setProperty('--accent-hover', '#7c3aed');
      root.style.setProperty('--accent-glow', 'rgba(139, 92, 246, 0.35)');
      root.style.setProperty('--accent-subtle', 'rgba(139, 92, 246, 0.12)');
      root.style.setProperty('--accent-border', 'rgba(139, 92, 246, 0.3)');
    } else if (color === '#3b82f6') {
      root.style.setProperty('--accent-hover', '#2563eb');
      root.style.setProperty('--accent-glow', 'rgba(59, 130, 246, 0.35)');
      root.style.setProperty('--accent-subtle', 'rgba(59, 130, 246, 0.12)');
      root.style.setProperty('--accent-border', 'rgba(59, 130, 246, 0.3)');
    } else if (color === '#10b981') {
      root.style.setProperty('--accent-hover', '#059669');
      root.style.setProperty('--accent-glow', 'rgba(16, 185, 129, 0.35)');
      root.style.setProperty('--accent-subtle', 'rgba(16, 185, 129, 0.12)');
      root.style.setProperty('--accent-border', 'rgba(16, 185, 129, 0.3)');
    } else if (color === '#f59e0b') {
      root.style.setProperty('--accent-hover', '#d97706');
      root.style.setProperty('--accent-glow', 'rgba(245, 158, 11, 0.35)');
      root.style.setProperty('--accent-subtle', 'rgba(245, 158, 11, 0.12)');
      root.style.setProperty('--accent-border', 'rgba(245, 158, 11, 0.3)');
    }
  }

  // ──────────────────────────────────────────────────────────────────────────
  // 9. Slide 13 Demo Tab Switcher
  // ──────────────────────────────────────────────────────────────────────────
  function switchDemoTab(tabKey) {
    const tabBtns = document.querySelectorAll('.demo-tab-btn');
    const tabContents = document.querySelectorAll('.demo-content-body');
    const urlText = document.getElementById('mock-url-text');
    const badge = document.getElementById('mock-portal-badge');

    tabBtns.forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-tab') === tabKey);
    });

    tabContents.forEach(content => {
      content.classList.toggle('active', content.id === `demo-tab-content-${tabKey}`);
    });

    if (tabKey === 'moodle') {
      if (urlText) urlText.textContent = 'http://localhost:5173/moodle/modules/1';
      if (badge) {
        badge.textContent = 'Authenticated Moodle Realm';
        badge.style.color = '#c4b5fd';
      }
    } else if (tabKey === 'feedback') {
      if (urlText) urlText.textContent = 'http://localhost:5174/submit/1';
      if (badge) {
        badge.textContent = 'Anonymous Feedback Realm';
        badge.style.color = '#a78bfa';
      }
    } else if (tabKey === 'verifier') {
      if (urlText) urlText.textContent = 'http://localhost:5175/verify?token=a3f1c2d4-89ab...';
      if (badge) {
        badge.textContent = 'Public Audit Realm';
        badge.style.color = '#6ee7b7';
      }
    }
  }

  // ──────────────────────────────────────────────────────────────────────────
  // 10. Modals & Fullscreen Helpers
  // ──────────────────────────────────────────────────────────────────────────
  function openModal(title, htmlContent) {
    el.modalTitle.textContent = title;
    el.modalBody.innerHTML = htmlContent;
    el.modalOverlay.classList.add('open');
  }

  function closeModal() {
    el.modalOverlay.classList.remove('open');
  }

  function openFullDescriptionModal() {
    openModal(
      'e-Rating: Project Abstract & Technical Description',
      `
      <div style="margin-bottom: 16px;">
        <span class="brand-badge" style="margin-right: 8px;">Architecture Reference</span>
        <span class="brand-badge">Information Security Project</span>
      </div>

      <p>
        <strong>Standard online rating systems</strong> typically link user accounts directly to submitted feedback and rely on centralized databases with complete administrative trust to prevent duplicate submissions and preserve integrity, leaving them exposed to insider tampering, silent alteration, and identity correlation via metadata or database leaks.
      </p>

      <p>
        <strong>The e-Rating platform</strong> overcomes these limitations through a cryptographically secure, privacy-preserving architecture. Students authenticate anonymously using <em>Linkable Spontaneous Anonymous Group (LSAG)</em> signatures, proving module enrollment without revealing identity, while per-module nullifiers cryptographically enforce a strict one-rating-per-student rule without tracking personal metadata.
      </p>

      <p>
        <strong>Data integrity</strong> is guaranteed through <em>Merkle tree commitments</em>, offering mathematically verifiable, tamper-evident storage instead of relying on administrator trust. Strict separation of duties among the LMS server, feedback server, and verifier further ensures no single compromised component can deanonymize students or falsify outcomes.
      </p>

      <p>
        Together, these mechanisms let e-Rating achieve <strong>anonymity, accountability, integrity, and independent verifiability</strong> properties that standard systems must otherwise trade off against each other.
      </p>

      <div style="background: rgba(255, 255, 255, 0.04); border: 1px solid var(--border-subtle); border-radius: 8px; padding: 14px; margin-top: 16px;">
        <h5 style="color: #fff; margin-bottom: 8px;">Source Architecture Diagram</h5>
        <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 12px;">Reference diagram uploaded by project author:</p>
        <img src="assets/architecture-diagram.png" alt="Architecture Diagram" style="width: 100%; border-radius: 6px; border: 1px solid var(--border-subtle);" />
      </div>
      `
    );
  }

  function openShortcutsModal() {
    openModal(
      'Keyboard & Navigation Shortcuts',
      `
      <p style="color: var(--text-muted); margin-bottom: 14px;">Use your keyboard or touch gestures to smoothly control the showcase:</p>
      <div class="shortcuts-badge-list">
        <div class="shortcut-row">
          <span>Next Slide / Build Step</span>
          <kbd>&rarr; / PageDown</kbd>
        </div>
        <div class="shortcut-row">
          <span>Previous Slide / Step</span>
          <kbd>&larr; / PageUp</kbd>
        </div>
        <div class="shortcut-row">
          <span>Play / Pause Auto-play</span>
          <kbd>Space</kbd>
        </div>
        <div class="shortcut-row">
          <span>Jump to First Slide</span>
          <kbd>Home</kbd>
        </div>
        <div class="shortcut-row">
          <span>Jump to Last Slide</span>
          <kbd>End</kbd>
        </div>
        <div class="shortcut-row">
          <span>Toggle Fullscreen</span>
          <kbd>F</kbd>
        </div>
        <div class="shortcut-row">
          <span>Close Modal / Drawer</span>
          <kbd>Esc</kbd>
        </div>
        <div class="shortcut-row">
          <span>Touch Swiping</span>
          <span style="font-size: 0.8rem; color: #a78bfa;">Swipe Left / Right</span>
        </div>
      </div>
      `
    );
  }

  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      el.fullscreenBtn.classList.add('active');
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
      el.fullscreenBtn.classList.remove('active');
    }
  }

  function parseUrlHash() {
    const hash = window.location.hash;
    const match = hash.match(/\/slide\/(\d+)/);
    if (match) {
      const slideNum = parseInt(match[1], 10);
      if (slideNum >= 1 && slideNum <= SLIDES_CONFIG.length) {
        const targetIdx = slideNum - 1;
        if (targetIdx !== state.currentIndex) {
          updateSlideView(targetIdx, false);
        }
      }
    }
  }

  // ──────────────────────────────────────────────────────────────────────────
  // 11. Initialization
  // ──────────────────────────────────────────────────────────────────────────
  function init() {
    initElements();
    renderAllSlides();
    setupEvents();

    // Check initial hash
    const hash = window.location.hash;
    const match = hash.match(/\/slide\/(\d+)/);
    let initialIndex = 0;
    if (match) {
      const slideNum = parseInt(match[1], 10);
      if (slideNum >= 1 && slideNum <= SLIDES_CONFIG.length) {
        initialIndex = slideNum - 1;
      }
    }

    updateSlideView(initialIndex, false);
    startTimerLoop();
  }

  // Bootstrap when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
