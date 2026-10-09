# 🎓 e-Rating — Project Showcase & Architecture Walkthrough

A self-running, interactive project showcase presentation for **e-Rating**: a privacy-preserving, verifiable module feedback system for university students.

Built entirely with standard **HTML5, CSS3, and modern Vanilla JavaScript**, this presentation runs completely offline in any web browser with zero dependencies, build steps, or external network requests.

---

## 🚀 How to Run

### Option 1: Direct File Open (Offline)
Simply open the HTML file directly in any modern web browser (Google Chrome, Safari, Firefox, Microsoft Edge, Brave):
```bash
open showcase/index.html    # macOS
xdg-open showcase/index.html # Linux
start showcase/index.html    # Windows
```

### Option 2: Local HTTP Server (Optional)
If you prefer running through a local web server:
```bash
# Using Python 3
python3 -m http.server 8080 -d showcase
# Then visit http://localhost:8080 in your browser
```

---

## 🎮 Playback & Navigation

The showcase supports two primary operating modes: **Manual** (default) and **Auto-Play**.

### 1. Presentation Modes
- **Manual Mode (Default)**: Advance through slides and build fragments at your own pace using keyboard, mouse, or touch gestures.
- **Auto-Play Mode**: Slides automatically transition after their configured duration (default: 8–10 seconds). Auto-play automatically pauses when you hover over the stage or press Space, and smoothly resumes from the exact millisecond when leaving or unpausing.

### 2. Controls & Keyboard Shortcuts

| Action | Keyboard | UI Control |
|---|---|---|
| **Next Step / Slide** | `→` / `PageDown` / `Space` (in manual) | `Next >` Button |
| **Previous Step / Slide** | `←` / `PageUp` | `< Prev` Button |
| **Play / Pause Auto-Play** | `Space` | Header Play/Pause Icon or Bottom Auto-Play Pill |
| **Jump to Start** | `Home` | Restart Icon (`↺`) |
| **Jump to End** | `End` | Click Slide 14 on Progress Bar |
| **Toggle Fullscreen** | `F` | Header Fullscreen Icon |
| **Close Modal / Fullscreen** | `Esc` | Modal `×` or backdrop click |
| **Shortcuts Cheat-Sheet** | `?` | Header Help Icon (`?`) |
| **Touch Navigation** | Swipe Left (Next) / Swipe Right (Back) | Responsive on tablets and mobile |
| **Direct Slide Jump** | URL Hash (e.g. `#/slide/5`) | Click anywhere on the progress bar or slide dots |

---

## 🎨 Theme Customization

The presentation features a sleek modern dark theme with an easily customizable accent color.

### Quick Switcher:
Click the four color dots in the top header bar to instantly preview different palettes:
1. 🟣 **Purple / Violet** (`#8b5cf6` — Default theme)
2. 🔵 **Ocean Blue** (`#3b82f6`)
3. 🟢 **Emerald Green** (`#10b981`)
4. 🟡 **Amber Gold** (`#f59e0b`)

### Permanent CSS Variable Customization:
In `showcase/style.css`, edit `:root`:
```css
:root {
  --accent-primary: #8b5cf6;       /* Main brand accent */
  --accent-hover: #7c3aed;         /* Button hover */
  --accent-glow: rgba(139, 92, 246, 0.35);
  --accent-subtle: rgba(139, 92, 246, 0.12);
  --accent-border: rgba(139, 92, 246, 0.3);
}
```

---

## 🛠️ How to Edit Slides, Content & Timings

All slide data, text, timings, fragments, and diagram states are configured inside a single data structure in **`showcase/app.js`**:

```javascript
const SLIDES_CONFIG = [
  {
    id: 1,                          // 1 to 14
    hash: 'title',                  // URL hash slug
    pill: 'Project Showcase',       // Small badge label
    title: 'e-Rating',              // Main headline
    subtitle: '...',                // Sub-headline text
    duration: 10,                   // Auto-play countdown in seconds
    fragmentsCount: 0,              // Number of substeps/builds within slide
    diagramHighlight: {             // Active nodes and flows on the architecture diagram
      dimOthers: true,
      nodes: ['student', 'moodle'],
      flows: ['flow-student-moodle'],
      activePacket: 'flow-student-moodle' // Animated moving data packet
    },
    render() {                      // Returns slide HTML template
      return `...`;
    }
  },
  // ...
];
```

### To Adjust Slide Timing:
Change `duration: 8` (seconds) on any slide in `SLIDES_CONFIG`. The top SVG circular timer ring will automatically calculate and countdown accordingly.

### To Add Build Steps (Fragments):
1. Set `fragmentsCount: 3` in the slide config.
2. Add class `fragment fragment-1` (and `data-fragment="1"`) to elements in `render()`.
3. Pressing `Next` will reveal `fragment-1`, then `fragment-2`, then `fragment-3` sequentially before advancing to the next slide. Stepping backward unwinds fragments in reverse order without breaking animations.

---

## 📐 Slide Structure & Flow Walkthrough

1. **Title & Tagline**: Project name, brief intro, feature pills, hashtags (`#AnonymousFeedback #OneStudentOneRating #VerifiableIntegrity`).
2. **The Problem**: Fear of retaliation, centralized database manipulation, identity correlation, and the security trilemma.
3. **The e-Rating Solution**: Core thesis statement and 3 foundations (Mathematical Anonymity, Anti-Sybil Nullifiers, Universal Verifiability).
4. **Key Features**: LSAG ring signatures, strict double-submitting prevention, hybrid ECIES encryption, Merkle audit receipts.
5. **Decoupled Architecture Overview**: System topology showing Moodle LMS, Feedback Server, and Verifier Server across the trust boundary, with animated actors appearing step-by-step.
6. **Protocol Step 1 — Enrollment & Public Key Upload**: Student generates local SECP256k1 keypair ($P = x \cdot G$) and uploads public point to Moodle.
7. **Protocol Step 2 — Key Ring Synchronization**: Moodle syncs enrolled public keys ($R = [P_1, \dots, P_k]$) with Feedback Server over M2M OAuth2 API.
8. **Protocol Step 3 — Encrypted Submission & Receipt**: Student hybrid-encrypts review, computes LSAG signature with nullifier $I = x \cdot \mathcal{H}(R)$, submits with zero cookies/tokens, receives Merkle receipt.
9. **Protocol Step 4 — Decoupled Lecturer Decryption**: Lecturer logs into Moodle; Moodle fetches ciphertext and decrypts locally using module private key $d$ (Feedback Server never sees private key).
10. **Protocol Step 5 — Independent Receipt Verification**: Student sends receipt token to Third-Party Verifier; Verifier audits signature, leaf hash, and Merkle path proof.
11. **Security & Threat Model Matrix**: Resilience against compromised Moodle, compromised Feedback Server, rogue students, and untrusted verifiers.
12. **Tech Stack & Implementation**: Python 3.12, Django 5, DRF, 3 decoupled SQLite databases, React 18, TypeScript, Vite 5, Tailwind CSS, custom `erating_crypto` engine.
13. **Live App Walkthrough**: Interactive simulated browser showing the 3 actual web portals (:5173, :5174, :5175) with live clickable actions.
14. **Future Horizons & Q&A**: zk-SNARKs for constant-size ring proofs, public blockchain root anchoring, differential privacy, and open discussion.

---

## 📁 Showcase File Structure

```
showcase/
├── index.html                  # Accessible HTML5 presentation stage & controls
├── style.css                   # Responsive 16:9 styles, dark theme, animations
├── app.js                      # Presentation engine, timer, SVG diagram controller
├── README.md                   # Instructions, shortcuts, and architecture guide
└── assets/
    └── architecture-diagram.png# Reference architecture diagram image
```
