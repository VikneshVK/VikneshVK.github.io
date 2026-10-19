import { n as registerCrtCanvasLayer } from "./crt.CDvFkb3O.js";

const W = 640;
const H = 400;
const HEADER_H = 34;

// Cyber Violet & Electric Magenta Theme Palette
const COL = {
  bg: "#0B0716",
  bgDark: "#06030D",
  grid: "#241740",
  violet: "#5B21B6",
  magenta: "#D946EF",
  lavender: "#C490FF",
  cream: "#F5EBFF",
  cyan: "#38BDF8",
  emerald: "#34D399",
  amber: "#FBBF24",
  danger: "#FB7185"
};

const CARTRIDGES = [
  {
    id: "worddropper",
    exe: "worddropper.exe",
    short: "1: WORD DROPPER",
    title: "WORD DROPPER MINI",
    badge: "GMTK JAM",
    status: "WORD DROPPER MINI · TYPE LETTERS OR CLICK TILES · ENTER TO SUBMIT · BACKSPACE CLEAR",
    note: "INSPIRED BY VIKNESH'S GMTK 96-HR JAM HIT · CLEAR TILES BEFORE TIMERS HIT 0.0S"
  },
  {
    id: "brickbreaker",
    exe: "brickbreaker.exe",
    short: "2: BRICK BREAKER",
    title: "CYBER BRICK BREAKER",
    badge: "ARCADE",
    status: "CYBER BRICK BREAKER · MOUSE OR ←/→ TO MOVE PADDLE · SPACE / CLICK TO LAUNCH BALL",
    note: "SHATTER NEON BRICKS · CATCH POWER CAPSULES [WIDE · MULTI · LASER · +1UP]"
  },
  {
    id: "cybersnake",
    exe: "cybersnake.exe",
    short: "3: CYBER SNAKE",
    title: "CYBER SNAKE",
    badge: "NEON GRID",
    status: "CYBER SNAKE · ARROWS / WASD OR CLICK GRID TO TURN · HOLD SPACE FOR HYPER-DASH",
    note: "COLLECT MAGENTA DATA NODES & OVERCLOCK ORBS · AVOID WALLS & TAIL TRAIL"
  }
];

// Curated common 3-to-8 letter dictionary + game/cyber terms
const DICT_WORDS = new Set((
  "ACE ACT ADD AGE AGO AID AIM AIR ALL AND ANT ANY APE APP ARC ARE ARM ART ASH ASK ATE AWE AXE " +
  "BAD BAG BAN BAR BAT BAY BED BEE BET BID BIG BIN BIT함과 BOX BOY BUG BUN BUS BUT BUY CAB CAD CAM CAN CAP CAR CAT COB COD COG COP COT COW CRY CUB CUP CUR CUT " +
  "DAB DAD DAM DAY DEN DEW DID DIE DIG DIM DIN DIP DOG DON DOT DRY DUB DUD DUE DUG DUN DUO DYE EAR EAT EEL EGG EGO ELM END ERA EVE EYE " +
  "FAB FAD FAN FAR FAT FAX FED FEE FEN FEW FIG FIN FIR FIT FIX FLY FOE FOG FOR FOX FRY FUN FUR GAB GAG GAL GAP GAS GAY GEL GEM GET GIG GIN GOD GOT GUM GUN GUT GUY GYM " +
  "HAD HAG HAM HAT HAY HEM HEN HER HEW HEX HID HIM HIP HIS HIT HOG HOP HOT HOW HUB HUE HUG HUM HUT ICE ICY ILL IMP INK INN ION IRE IRK IVY " +
  "JAB JAG JAM JAR JAW JAY JET JIG JOB JOG JOT JOY JUG JUT KEG KEN KEY KID KIN KIT LAB LAC LAD LAG LAP LAW LAX LAY LEA LED LEG LET LID LIE LIP LIT LOG LOP LOT LOW LUG " +
  "MAD MAN MAP MAR MAT MAW MAX MAY MEN MET MEW MID MIX MOB MOD MOM MOP MUD MUG MUM NAB NAG NAP NAY NET NEW NIB NIL NIP NIT NOD NOR NOT NOW NUB NUN NUT " +
  "OAK OAR OAT ODD ODE OFF OFT OIL OLD ONE OPT ORB ORE OUR OUT OWE OWL OWN PAD PAL PAN PAP PAR PAT PAW PAY PEA PEG PEN PEP PER PET PEW PIE PIG PIN PIT PLY POD POI POP POT POW PRO PRY PUB PUG PUN PUP PUS PUT " +
  "RAG RAM RAN RAP RAT RAW RAY RED REP学习 RIB RID RIG RIM RIP ROB ROD ROE ROT ROW RUB RUG RUM RUN RUT RYE SAC SAD SAG SAP SAT SAW SAY SEA SEE SET SEW SHE SHY SIN SIP SIR SIT SIX SKI SKY SLY SOB SOD SON SOP SOT SOW SOY SPA SPY STY SUB SUM SUN SUP " +
  "TAB TAD TAG TAN TAP TAR TAT TAX TEA TED TEE TEN THE THY TIC TIE TIN TIP TOE TON TOO TOP TOT TOW TOY TRY TUB TUG TWO URN USE VAN VAT VET VEX VIA VIE VOW " +
  "WAD WAG WAR WAS WAX WAY WEB WED WEE WET WHO WHY WIG WIN WIT WOE WOK WON WOO WOW YAK YAM YAP YAW YEA YES YET YEW YOU ZAP ZED ZEN ZIP ZIT ZOO " +
  "ABLE ACID ACRE AGED AIDE AIRY ALLY ALSO ALTO AMID ANEW ANTI ARCH AREA ARMY ARTS ATOM AUNT AUTO AVID AWAY AXIS BABY BACK BAIL BAIT BAKE BALD BALE BALL BAND BANE BANG BANK BARE BARK BARN BASE BASH BASS BATH BEAD PEAK BEAM BEAN BEAR BEAT BECK BEEF BEEN BEER BEET BELL BELT BEND BENT BERG BEST BETA BIAS BIKE BILE BILL BIND BIRD BITE BLAB BLIP BLOB BLOC BLOG BLOT BLOW BLUE BLUR BOAR BOAT BODY BOIL BOLD BOLT BOMB BOND BONE BOOK BOOM BOON BOOT BORE BORN BOSS BOTH BOUT BOWL BRAD BRAG BRAN BRAY BRED BREW BRIM BRIT BROW BUCK BUDD BUFF BULB BULK BULL BUMP BUNK BURN BURP BURR BURY BUSH BUSY0 BYTE " +
  "CAFE CAGE CAKE CALF CALL CALM CAME CAMP CANE CAPE CARD CARE CARP CART CASE CASH CAST CAVE CELL CENT CHAT CHEF CHEM CHEW CHIN CHIP CHOP CHOW CITE CITY CLAD CLAM CLAN CLAP CLAW CLAY CLEF CLIP CLOD CLOG CLOP PLOT CLUB CLUE COAL COAT COAX CODE COIL COIN COLD COLE COLT COMA COMB COME CONE COOK COOL COOP COPE COPY CORD CORE CORK CORN COST COZY CRAB CRAG CRAM CRAN CRAW CREW CRIB CROP CROW CRUD CRUX CUBE CUFF CULL CULT CURB CURE CURL CUTE CYAN " +
  "DAME DAMP DARE DARK DARN DART DASH DATA DATE DAWN DAYS DAZE DEAD DEAF DEAL DEAN DEAR DEBT DECK DEED DEEM DEEP DEER DEFY DELI DEMO DENT DENY DESK DIAL DICE DIED DIET DIME DINE DING DINT DIRE DIRT DISC DISH DISK DIVE DOCK DOER DOES DOLL DOME DONE DOOM DOOR DOPE DOSE DOTE DOVE DOWN DOZE DRAB DRAG DRAM DRAW DRAY DREW DRIP DROP DRUG DRUM DUAL DUCK DUCT DUEL DUET DUKE DULL DULY DUMB DUMP DUNE DUNK DUSK DUST DUTY DYED " +
  "EACH EARL EARN EARS EASE EAST EASY EAVE ECHO EDGE EDIT EELS EMIT ENVY EPIC EVEN EVER EVIL EXAM EXIT EYED EYES FACE FACT FADE FAIL FAIR FAKE FALL FAME FANG FARE FARM FAST FATE FAUX FAWN FEAR FEAT FEED FEEL FEES FEET FELL FELT FEND FERN FEST FEUD FILE FILL FILM FIND FINE FINK FIRE FIRM FISH FIST FIVE FLAG FLAK FLAP FLAT FLAW FLAX FLAY FLEA FLED FLEE FLEW FLEX FLIP FLIT FLOE FLOG FLOP FLOW FLUX FOAL FOAM FOIL FOLD FOLK FOND FONT FOOD FOOL FOOT FORD FORE FORK FORM FORT FOUL FOUR FOWL FRAY FREE FRET FROG FROM FUEL FULL FUME FUND FUNK FURY FUSE FUSS " +
  "GAIN GALA GALE GALL GAME GANG GAPE GARB GASH GASP GATE GAkE GAZE GEAR GENE GENT GERM GIFT GILD GILL GILT GIRL GIVE GLAD GLEE GLEN GLIB GLOB GLOM GLOP GLOW GLUE GLUM GLUT GNAT GNAW GOAL GOAT GODS GOLD GOLF GONE GONG GOOD GOOF GORE GORY GOSH GOUT GOWN GRAB GRAD GRAM GRAY GREW GREY GRID GRIM GRIN GRIP GRIT GROW GRUB GULF GULL GULP GUNK GURU GUSH GUST GYRO " +
  "HACK HAIL HAIR HALE HALF HALL HALO HALT HAND HANG HANK HARD HARE HARK HARM HARP HASH HASP HASTE HATE HATH HAUL HAVE HAWK HAZE HAZY HEAD HEAL HEAP HEAR HEAT HEED HEEL HEFT HEIR HELD HELL HELM HELP HEMP HERB HERD HERE HERO HERS HIDE HIGH HIKE HILL HILT HIND HINT HIRE HISN HISS HIVE HOAX HOBO HOCK HOLD HOLE HOLY HOME HONE HONK HOOD HOOF HOOK HOOP HOOT HOPE HORN HOSE HOST HOUR HOVE HOWL HUGE HULK HULL HUMP HUNG HUNK HUNT HURL HURT HUSH HUSK HYMN HYPE " +
  "ICON IDEA IDLE IDOL INCH INFO INIT INTO IOTA IRIS IRON ISLE ITCH ITEM JADE JAIL JAKE JAMB JAPE JAVA JAZZ JEAN Jass JEEP JEER JELL JERK JEST JIBE JILT JIVE JOBS JOIN JOKE JOLT JOSH JOWL JUDO JUGS JUMP JUNE JUNK JURY JUST JUTE KEEL KEEN KEEP KELP KICK KILL KILN KILO KILT KIND KING KINK KISS KITE KNEE KNEW KNIT KNOB KNOT KNOW LACE LACK LACY LADE LADY LAID LAIN LAIR LAKE LAMB LAME LAMP LAND LANE RANG LANK LARD LARK LASH LAST LATE LATH LAUD LAVA LAWN LAWS LAZY LEAD LEAF LEAK LEAN LEAP LEER LEFT LEND LENS LENT LESS LEVY LIAR LICE LICK LIFE LIFT LIKE LILT LILY LIMB LIME LIMP LINE LINK LINT LION LIPS LISP LIST LIVE LOAD LOAF LOAM LOAN LOBE LOCK LODE LOFT LOGE LOGO LOIN LONE LONG LOOK LOOM LOON LOOP LOOT LORD LORE LOSE LOSS LOST LOTH LOUD LOUT LOVE LOWS LUCK LULL LUMP LUNG LURE LURK LUSH LUST LUTE LYNX LYRE " +
  "MACE MADE MAID MAIL MAIN MAKE MALE MALL MALT MANE MANY MARE MARK MART MASH MASK MASS MAST MATE MATH MAUL MAZE MEAD MEAL MEAN MEAT MEEK MEET MELD MELT MEMO MEND MENU MERE MESH MESS META MICA MICE MILD MILE MILK MILL MIME MIND MINE MINI MINK MINT MIRE MISS MIST MITE MITT MOAN MOAT MOCK MODE MOLD MOLE MOLL MOLT MONK MOOD MOON MOOR MOOT MORE MORN MOSS MOST MOTH MOVE MUCH MUCK MULE MULL MURK MUSE MUSH MUSK MUST MUTE MYTH " +
  "NAIL NAME NAPE NAVY NEAR NEAT NECK NEED NEON NEST NEWS NEXT NICE NICK NINE NODE NONE NOOK NOON NORM NOSE NOSY NOTE NOUN NOVA NUDE NUKE NULL NUMB OAKS OARS OATH OBEY OBOE ODDS ODOR OGRE OILS OILY OKAY OMEN OMIT ONCE ONLY ONTO OOPS OOZE OPAL OPEN OPUS ORAL ORBS ARCH OUST OVAL OVEN OVER OWED OWLS PACE PACK PACT PAGE PAID PAIL PAIN PAIR PALE PALL PALM PANE PANG PANT PARA PARE PARK PART PASS PAST PATH PAVE PAWN PEAK PEAL PEAR PEAS PEAT PECK PEEK PEEL PEER PELT PEND PENT PERK PERM PERT PEST PICK PIER PIKE PILE PILL PINE PING PINK PINT PIPE PIQU PITH PLAN PLAY PLEA PLED PLOD PLOP PLOT PLOW PLOY PLUG PLUM PLUS POCK POEM POET POKE POKY POLE POLL POLO POMP POND PONY POOL POOR POPE PORE PORK PORT POSE POSH POST POUR POUT PRAY PREP PREY PRIM PROD PROP PROW PUFF PUKE PULL PULP PUMP PUNK PURE PURL PURR PUSH PUTT PYRE " +
  "QUAD QUAY QUIT QUIZ RACE RACK RAFT RAGE RAID RAIL RAIN RAKE RAMP RANG RANK RANT RARE RASH RATE RAVE RAYS RAZE READ REAL REAM REAP REAR REDO REED REEF REEK REEL REIN RELY REND RENT REST RICE RICH RIDE RIFE RIFT RILE RILL RIME RIND RING RINK RIOT RIPE RISE RISK RITE ROAD ROAM ROAR ROBE ROCK RODE ROLE ROLL ROME ROOF ROOK ROOM ROOT ROPE ROSE ROSY ROTE ROUT ROVE RUBY RUDE RUIN RULE RUMP RUNE RUNG RUNS RUNT RUSE RUSH RUST RUTH SACK SAFE SAGA SAGE SAID SAIL SAKE SALE SALT SAME SAND SANE SANG SANK SASH SAVE SAWN SCAB SCAR SCAT 듯 SEAL SEAM SEAR SEAT SECT SEED SEEK SEEM SEEN SEEP SELF SELL SEMI SEND SENT SEPT SERF SETS SEWN SHAD SHAG SHAH SHAM SHED SHIN SHIP SHIV SHOE SHOO SHOP SHOT SHOW SHUN SHUT SICK SIDE SIFT SIGH SIGN SILK SILL SILO SILT SINE SING SINK SIRE SITE SITS SIZE SKEW SKID SKIM SKIN SKIP SKIT SLAB SLAG SLAM SLAP SLAT SLAY SLED SLEW SLID SLIM SLIP SLIT SLOB SLOE SLOG SLOP SLOT SLOW SLUE SLUG SLUM SLUR SMOG SMUG SMUT SNAG SNAP SNAW SNIP SNIT SNOB SNOT SNOW SNUB SNUG SOAK SOAP SOAR SOCK SODA SOFA SOFT SOIL SOLD SOLE SOLO SOME SONG SOON SOOT SORE SORT SOUL SOUP SOUR SPAN SPAR SPEC SPED SPIN SPIT SPOT SPRY SPUD SPUN SPUR STAB STAG STAR STAT STAY STEM STEP STEW STIR STOP STOW STUB STUD STUN SUBS SUCH SUCK SUDS SUET SUIT SULK SUMO SUNG SUNK SURE SURF SWAB SWAG SWAM SWAN SWAP SWAT SWAY SWIG SWIM SWUM SYNC " +
  "TABS TACK TACT TAIL TAKE TALE TALK TALL TAME TANG TANK TAPE TAPS TARE TARN TARP TART TASK TAXI TEAK TEAL TEAM TEAR TEAT TECH TEEM TEEN TELL TEMP TEND TENT TERM TEST TEXT THAN THATM THAW THEE THEM THEN THEY THIN THIS THUD THUG THUS TICK TIDE TIDY TIED TIER TIES TILE TILL TILT TIME TINE TING TINT TINY TIRE TOAD TOED TOES TOFU TOGA TOIL TOLD TOLL TOMB TOME TONE TONG TOOK TOOL TOOT TORE TORN TORT TOSS TOTE TOUR TOWN TOYS TRAD TRAM TRAP TRAY TREE TREK TRIM TRIO TRIP TROD TROT TROY TRUE TSAR TUBA TUBE TUCK TUFT TUNA TUNE TURF TURN TUSK TUTU TWIG TWIN TWIT TYPE TYPO " +
  "UGLY ULNA UNDO UNIT UNTO UPON URGE USED USER VAIN VALE VAMP VANE VARY VASE VAST VEAL VEER VEIL VEIN VEND VENT VERB VERT VERY VEST VETO VIAL VICE VIDE VIEW VILE VINE VISA VISE VOID VOLT VOTE VOWS WADE WADI WAFT WAGE WAIL WAIT WAKE WALK WALL WAND WANE WANT WARD WARE WARM WARN WARP WARS WART WARY WASH WASP WAVE WAVY WAXY WEAK WEAL WEAN WEAR WEED WEEK WEEP WEFT WEIR WELD WELL WELT WEND WENT WERE WEST WHAT WHEN WHET WHEY WHIM WHIP WHIR WHIT WHIZ WHOM WICK WIDE WIFE WILD WILE WILL WILT WILY WIMP WIND WINE WING WINK WIPE WIRE WIRY WISE WISH WISP WITH WOKE WOLF WOMB WOOD WOOF WOOL WORD WORE WORK WORM WORN WORT GOVE WRAP WREN WRIT YARD YARN YAWL YAWN YEAR YELL YELP YOGA YOKE YOLK YORE YOUR YOWL YULE ZANY ZEAL ZERO ZEST ZINC ZINE ZONE ZOOM " +
  "UNITY SHADER PIXEL CYBER NEON LASER ORBIT MATRIX VECTOR RENDER QUEST LEVEL SCORE POWER SPARK FLASH PULSE BLITZ NEXUS PRIME HYPER ULTRA OMEGA ALPHA DELTA SIGMA FLAME STORM BLADE CROWN GHOST LIGHT NIGHT SPACE WORLD BRAIN SMART BUILD CRAFT MAGIC SOUND TRACK AUDIO VIDEO LOGIC FRAME SCENE ASSET MODEL ACTOR STAGE ARENA TOWER GUARD SHIELD SWORD ARROW SPEED BOOST TURBO DRIFT CRASH SMASH BLAST BURST SHOCK WAVE FIELD FORCE DRIVE VIKNESH CLOUD STEAM GAMER SYNTH RETRO GLITCH"
).split(/\s+/));

//Weighted letters for board spawning (good vowel/consonant balance)
const LETTER_POOL = "AAAAAAAAABBCCDDDDEEEEEEEEEEEEEFFGGGHHIIIIIIIIJKLLLLMMNNNNNNOOOOOOOOPPQRRRRRRSSSSSSTTTTTTUUUUVVWWXYYZ";
const LETTER_PTS = {
  A:10, B:30, C:30, D:20, E:10, F:40, G:20, H:40, I:10, J:80, K:50, L:10, M:30,
  N:10, O:10, P:30, Q:90, R:10, S:10, T:10, U:20, V:40, W:40, X:80, Y:40, Z:90
};

function isAcceptableWord(w) {
  if (!w || w.length < 3) return { valid: false, reason: "MIN 3 LETTERS" };
  const up = w.toUpperCase();
  if (DICT_WORDS.has(up)) return { valid: true, bonus: 1.5, tag: "DICTIONARY HIT!" };
  // Smart phonotactic check so any valid English word not in compact set is still accepted
  const hasVowel = /[AEIOUY]/.test(up);
  const hasConsonant = /[BCDFGHJKLMNPQRSTVWXZ]/.test(up);
  const noTriple = !/(.)\1\1/.test(up);
  const noFourConsonants = !/[BCDFGHJKLMNPQRSTVWXZ]{4}/.test(up);
  if (hasVowel && hasConsonant && noTriple && noFourConsonants) {
    return { valid: true, bonus: 1.0, tag: "WORD ACCEPTED!" };
  }
  return { valid: false, reason: "INVALID WORD PATTERN" };
}

// Web Audio Synth for Arcade SFX
let audioCtx = null;
function playSfx(type) {
  try {
    if (!audioCtx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return;
      audioCtx = new AC();
    }
    if (audioCtx.state === "suspended") audioCtx.resume();
    const now = audioCtx.currentTime;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);

    if (type === "type" || type === "move") {
      osc.type = "triangle";
      osc.frequency.setValueAtTime(520, now);
      osc.frequency.exponentialRampToValueAtTime(760, now + 0.045);
      gain.gain.setValueAtTime(0.06, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
      osc.start(now);
      osc.stop(now + 0.05);
    } else if (type === "clear" || type === "eat") {
      osc.type = "sine";
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.14);
      gain.gain.setValueAtTime(0.11, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
      osc.start(now);
      osc.stop(now + 0.15);
    } else if (type === "bounce") {
      osc.type = "square";
      osc.frequency.setValueAtTime(310, now);
      osc.frequency.exponentialRampToValueAtTime(460, now + 0.05);
      gain.gain.setValueAtTime(0.05, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.055);
      osc.start(now);
      osc.stop(now + 0.055);
    } else if (type === "brick") {
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(620, now);
      osc.frequency.exponentialRampToValueAtTime(240, now + 0.09);
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.095);
      osc.start(now);
      osc.stop(now + 0.095);
    } else if (type === "error") {
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(190, now);
      osc.frequency.linearRampToValueAtTime(120, now + 0.16);
      gain.gain.setValueAtTime(0.09, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.17);
      osc.start(now);
      osc.stop(now + 0.17);
    } else if (type === "gameover") {
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(340, now);
      osc.frequency.exponentialRampToValueAtTime(85, now + 0.35);
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.36);
      osc.start(now);
      osc.stop(now + 0.36);
    }
  } catch {}
}

function drawRoundedRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

export function initDoom(win) {
  const stage = win.querySelector("[data-doom-stage]");
  const statusEl = win.querySelector("[data-doom-status]");
  const noteEl = win.querySelector("[data-doom-note]");
  const titleEl = win.querySelector("[data-arcade-title]") || win.querySelector(".bar .t");
  if (!stage) return;

  const sourceCanvas = document.createElement("canvas");
  sourceCanvas.width = W;
  sourceCanvas.height = H;
  sourceCanvas.className = "doom-screen doom-screen-source";

  const posterCanvas = document.createElement("canvas");
  posterCanvas.width = W;
  posterCanvas.height = H;
  posterCanvas.className = "doom-screen doom-screen-poster";
  posterCanvas.setAttribute("aria-hidden", "true");

  stage.innerHTML = "";
  stage.append(posterCanvas, sourceCanvas);

  const ctx = sourceCanvas.getContext("2d");
  const pCtx = posterCanvas.getContext("2d");
  if (!ctx || !pCtx) return;

  pCtx.fillStyle = COL.bg;
  pCtx.fillRect(0, 0, W, H);

  const crtLayer = registerCrtCanvasLayer(sourceCanvas, posterCanvas, { pixelated: false });

  let activeCartridge = window.__vikneshCartridge || "worddropper";
  const particles = [];

  function spawnParticles(x, y, color, count = 14) {
    for (let i = 0; i < count; i++) {
      const ang = Math.random() * Math.PI * 2;
      const spd = 45 + Math.random() * 145;
      particles.push({
        x,
        y,
        vx: Math.cos(ang) * spd,
        vy: Math.sin(ang) * spd,
        life: 0.45 + Math.random() * 0.35,
        maxLife: 0.7,
        size: 2 + Math.random() * 3.5,
        color
      });
    }
  }

  function updateAndDrawParticles(dt) {
    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.x += p.vx * dt;
      p.y += p.vy * dt;
      p.vy += 160 * dt;
      p.life -= dt;
      if (p.life <= 0) {
        particles.splice(i, 1);
        continue;
      }
      ctx.save();
      ctx.globalAlpha = Math.max(0, p.life / p.maxLife);
      ctx.fillStyle = p.color;
      ctx.fillRect(p.x - p.size * 0.5, p.y - p.size * 0.5, p.size, p.size);
      ctx.restore();
    }
  }

  // =========================================================================
  // GAME 1: WORD DROPPER MINI (worddropper.exe)
  // =========================================================================
  const WD_COLS = 6;
  const WD_ROWS = 5;
  const wd = {
    grid: [], // wd.grid[col][row] = { id, ch, timer, maxTimer, hot, yOff }
    selected: [], // array of { col, row, id, ch }
    score: 0,
    highScore: Number(localStorage.getItem("vk_wd_hi") || 1250),
    wordsCleared: 0,
    combo: 1,
    feedback: "TYPE LETTERS OR CLICK TILES!",
    feedbackColor: COL.lavender,
    hintWord: "CYBER",
    gameOver: false,
    nextId: 1
  };

  function makeTile(col, row, forceChar = null, hotChance = 0.28) {
    const ch = forceChar || LETTER_POOL[Math.floor(Math.random() * LETTER_POOL.length)];
    const hot = row === 0 && Math.random() < hotChance;
    const maxTimer = hot ? Math.max(11, 21 - wd.wordsCleared * 0.35) : 0;
    return {
      id: wd.nextId++,
      ch,
      hot,
      timer: maxTimer,
      maxTimer,
      yOff: -55 - row * 18
    };
  }

  function findHintOnBoard() {
    const counts = {};
    for (let c = 0; c < WD_COLS; c++) {
      for (let r = 0; r < WD_ROWS; r++) {
        const ch = wd.grid[c]?.[r]?.ch;
        if (ch) counts[ch] = (counts[ch] || 0) + 1;
      }
    }
    let best = "";
    for (const w of DICT_WORDS) {
      if (w.length < 3 || w.length > 6) continue;
      const need = {};
      let ok = true;
      for (const ch of w) {
        need[ch] = (need[ch] || 0) + 1;
        if ((counts[ch] || 0) < need[ch]) {
          ok = false;
          break;
        }
      }
      if (ok && w.length > best.length) {
        best = w;
        if (best.length >= 5) break;
      }
    }
    wd.hintWord = best || "GAME";
  }

  function resetWordDropper() {
    wd.grid = [];
    wd.selected = [];
    wd.score = 0;
    wd.wordsCleared = 0;
    wd.combo = 1;
    wd.gameOver = false;
    wd.feedback = "FORM 3+ LETTER WORDS TO STABILIZE CORES!";
    wd.feedbackColor = COL.lavender;

    // Seed guaranteed vowels and fun starter letters
    const seed = "CYBERGAMEWORDUNITYLASERNEONSPARK";
    let sIdx = 0;
    for (let c = 0; c < WD_COLS; c++) {
      const colArr = [];
      for (let r = 0; r < WD_ROWS; r++) {
        const ch = r < 2 && sIdx < seed.length ? seed[sIdx++] : null;
        colArr.push(makeTile(c, r, ch, c % 2 === 0 ? 0.85 : 0.0));
      }
      wd.grid.push(colArr);
    }
    findHintOnBoard();
  }

  function wdSelectChar(ch) {
    if (wd.gameOver) return;
    if (wd.selected.length >= 8) return;
    const usedIds = new Set(wd.selected.map(s => s.id));
    // Prefer picking a 'hot' ticking tile first if it matches!
    let bestPick = null;
    for (let c = 0; c < WD_COLS; c++) {
      for (let r = 0; r < WD_ROWS; r++) {
        const t = wd.grid[c][r];
        if (t && t.ch === ch && !usedIds.has(t.id)) {
          if (!bestPick || (t.hot && !bestPick.tile.hot) || (t.hot && t.timer < bestPick.tile.timer)) {
            bestPick = { col: c, row: r, tile: t };
          }
        }
      }
    }
    if (bestPick) {
      wd.selected.push({
        col: bestPick.col,
        row: bestPick.row,
        id: bestPick.tile.id,
        ch: bestPick.tile.ch
      });
      playSfx("type");
    } else {
      wd.feedback = `NO '${ch}' TILE AVAILABLE ON GRID`;
      wd.feedbackColor = COL.danger;
      playSfx("error");
    }
  }

  function wdSubmitWord() {
    if (wd.gameOver) {
      resetWordDropper();
      return;
    }
    const word = wd.selected.map(s => s.ch).join("");
    const check = isAcceptableWord(word);
    if (!check.valid) {
      wd.feedback = check.reason;
      wd.feedbackColor = COL.danger;
      wd.combo = 1;
      playSfx("error");
      return;
    }

    // Valid word! Clear tiles, award points, recharge timers
    let basePts = 0;
    const removeIds = new Set(wd.selected.map(s => s.id));
    for (let c = 0; c < WD_COLS; c++) {
      for (let r = 0; r < WD_ROWS; r++) {
        const t = wd.grid[c][r];
        if (t && removeIds.has(t.id)) {
          basePts += (LETTER_PTS[t.ch] || 15) + (t.hot ? 35 : 0);
          const tx = 26 + c * 62 + 28;
          const ty = HEADER_H + 34 + (WD_ROWS - 1 - r) * 62 + 28;
          spawnParticles(tx, ty, t.hot ? COL.magenta : COL.lavender, 16);
        }
      }
    }

    const lengthMult = 1 + (word.length - 3) * 0.35;
    const earned = Math.round(basePts * lengthMult * check.bonus * wd.combo);
    wd.score += earned;
    if (wd.score > wd.highScore) {
      wd.highScore = wd.score;
      localStorage.setItem("vk_wd_hi", String(wd.highScore));
    }
    wd.wordsCleared++;
    wd.combo = Math.min(5, wd.combo + 0.5);
    wd.feedback = `${word} (+${earned} PTS) · ${check.tag}`;
    wd.feedbackColor = COL.emerald;
    playSfx("clear");

    // Collapse columns & refill
    for (let c = 0; c < WD_COLS; c++) {
      const kept = wd.grid[c].filter(t => !removeIds.has(t.id));
      // Recharge surviving hot timers slightly
      for (const t of kept) {
        if (t.hot) t.timer = Math.min(t.maxTimer, t.timer + 3.5);
      }
      while (kept.length < WD_ROWS) {
        const newRow = kept.length;
        // Ensure at least 35% vowels on refill
        const forceVowel = Math.random() < 0.36 ? "AEIOU"[Math.floor(Math.random() * 5)] : null;
        kept.push(makeTile(c, newRow, forceVowel, 0.35));
      }
      // Ensure bottom tile has a chance to become hot
      if (!kept[0].hot && Math.random() < 0.45) {
        kept[0].hot = true;
        kept[0].maxTimer = Math.max(11, 20 - wd.wordsCleared * 0.3);
        kept[0].timer = kept[0].maxTimer;
      }
      wd.grid[c] = kept;
    }
    wd.selected = [];
    findHintOnBoard();
  }

  function wdShuffleBoard() {
    if (wd.gameOver) return;
    wd.selected = [];
    for (let c = 0; c < WD_COLS; c++) {
      for (let r = 0; r < WD_ROWS; r++) {
        const forceVowel = (c + r) % 3 === 0 ? "AEIOU"[Math.floor(Math.random() * 5)] : null;
        wd.grid[c][r] = makeTile(c, r, forceVowel, r === 0 ? 0.5 : 0);
      }
    }
    wd.combo = 1;
    wd.feedback = "BOARD RE-SYNTHESIZED!";
    wd.feedbackColor = COL.cyan;
    findHintOnBoard();
    playSfx("type");
  }

  function updateAndDrawWordDropper(dt) {
    // Update tiles
    let activeHotCount = 0;
    for (let c = 0; c < WD_COLS; c++) {
      for (let r = 0; r < WD_ROWS; r++) {
        const t = wd.grid[c][r];
        if (!t) continue;
        if (t.yOff < 0) {
          t.yOff = Math.min(0, t.yOff + 320 * dt);
        }
        if (t.hot && !wd.gameOver) {
          activeHotCount++;
          t.timer -= dt * 0.78;
          if (t.timer <= 0) {
            t.timer = 0;
            wd.gameOver = true;
            wd.feedback = `CORE OVERLOAD ON TILE '${t.ch}'!`;
            wd.feedbackColor = COL.danger;
            playSfx("gameover");
          }
        }
      }
    }
    if (activeHotCount === 0 && !wd.gameOver && wd.grid[0]?.[0]) {
      wd.grid[0][0].hot = true;
      wd.grid[0][0].maxTimer = 18;
      wd.grid[0][0].timer = 18;
    }

    const selectedSet = new Set(wd.selected.map(s => s.id));

    // Left Board Frame
    ctx.strokeStyle = COL.grid;
    ctx.lineWidth = 1.5;
    drawRoundedRect(ctx, 18, HEADER_H + 12, 384, 336, 8);
    ctx.stroke();

    // Draw Tiles (6 cols x 5 rows)
    for (let c = 0; c < WD_COLS; c++) {
      for (let r = 0; r < WD_ROWS; r++) {
        const t = wd.grid[c][r];
        if (!t) continue;
        const x = 26 + c * 62;
        const y = HEADER_H + 22 + (WD_ROWS - 1 - r) * 63 + t.yOff;
        const isSel = selectedSet.has(t.id);

        ctx.save();
        drawRoundedRect(ctx, x, y, 56, 56, 7);
        if (isSel) {
          ctx.fillStyle = "#3B1578";
          ctx.strokeStyle = COL.magenta;
          ctx.lineWidth = 2.5;
        } else if (t.hot) {
          const pulse = 0.5 + 0.5 * Math.sin(performance.now() * 0.008);
          ctx.fillStyle = t.timer < 5 ? `rgba(217, 70, 239, ${0.18 + pulse * 0.22})` : "#1D1036";
          ctx.strokeStyle = t.timer < 5 ? COL.danger : COL.magenta;
          ctx.lineWidth = 1.8;
        } else {
          ctx.fillStyle = "#140B29";
          ctx.strokeStyle = COL.violet;
          ctx.lineWidth = 1.2;
        }
        ctx.fill();
        ctx.stroke();

        // Letter
        ctx.fillStyle = isSel ? COL.cream : t.hot ? "#FFD6FF" : COL.lavender;
        ctx.font = "700 24px 'Space Grotesk', sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(t.ch, x + 28, y + (t.hot ? 23 : 27));

        // Point badge top-right
        ctx.fillStyle = "rgba(196, 144, 255, 0.55)";
        ctx.font = "600 9px 'JetBrains Mono', monospace";
        ctx.textAlign = "right";
        ctx.fillText(String(LETTER_PTS[t.ch] || 10), x + 51, y + 11);

        // Hot countdown bar & timer
        if (t.hot) {
          const pct = Math.max(0, Math.min(1, t.timer / (t.maxTimer || 15)));
          ctx.fillStyle = "#090412";
          ctx.fillRect(x + 6, y + 44, 44, 6);
          ctx.fillStyle = pct < 0.3 ? COL.danger : COL.magenta;
          ctx.fillRect(x + 6, y + 44, 44 * pct, 6);

          ctx.fillStyle = pct < 0.3 ? COL.danger : COL.cream;
          ctx.font = "700 9px 'JetBrains Mono', monospace";
          ctx.textAlign = "center";
          ctx.fillText(`${t.timer.toFixed(1)}s`, x + 28, y + 38);
        }
        ctx.restore();
      }
    }

    // Right HUD Panel
    const rx = 414;
    const rw = 208;
    ctx.fillStyle = "#110924";
    ctx.strokeStyle = COL.violet;
    ctx.lineWidth = 1.5;
    drawRoundedRect(ctx, rx, HEADER_H + 12, rw, 336, 8);
    ctx.fill();
    ctx.stroke();

    // Score & High Score
    ctx.fillStyle = COL.lavender;
    ctx.font = "600 10px 'JetBrains Mono', monospace";
    ctx.textAlign = "left";
    ctx.fillText("SCORE", rx + 14, HEADER_H + 34);
    ctx.fillText("HIGH SCORE", rx + 114, HEADER_H + 34);

    ctx.fillStyle = COL.cream;
    ctx.font = "700 20px 'Space Grotesk', sans-serif";
    ctx.fillText(String(wd.score), rx + 14, HEADER_H + 56);
    ctx.fillStyle = COL.magenta;
    ctx.fillText(String(wd.highScore), rx + 114, HEADER_H + 56);

    // Current Word Box
    ctx.fillStyle = "#080411";
    ctx.strokeStyle = wd.selected.length >= 3 ? COL.magenta : COL.grid;
    ctx.lineWidth = 1.8;
    drawRoundedRect(ctx, rx + 12, HEADER_H + 72, rw - 24, 48, 6);
    ctx.fill();
    ctx.stroke();

    const curWord = wd.selected.map(s => s.ch).join("");
    ctx.fillStyle = curWord ? COL.cream : "rgba(196, 144, 255, 0.4)";
    ctx.font = "700 22px 'JetBrains Mono', monospace";
    ctx.textAlign = "center";
    ctx.fillText(curWord || "TYPE WORD", rx + rw / 2, HEADER_H + 101);

    // Action Buttons inside Canvas (Clickable!)
    // [SUBMIT (ENTER)]
    ctx.fillStyle = wd.selected.length >= 3 ? COL.magenta : COL.violet;
    drawRoundedRect(ctx, rx + 12, HEADER_H + 130, rw - 24, 34, 6);
    ctx.fill();
    ctx.fillStyle = COL.bg;
    ctx.font = "700 12px 'Space Grotesk', sans-serif";
    ctx.fillText("SUBMIT WORD [ENTER]", rx + rw / 2, HEADER_H + 151);

    // [CLEAR (BKSP)] & [SHUFFLE]
    ctx.fillStyle = "#1E113A";
    ctx.strokeStyle = COL.lavender;
    ctx.lineWidth = 1;
    drawRoundedRect(ctx, rx + 12, HEADER_H + 172, 88, 28, 5);
    ctx.fill();
    ctx.stroke();
    drawRoundedRect(ctx, rx + 108, HEADER_H + 172, 88, 28, 5);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = COL.cream;
    ctx.font = "600 10px 'JetBrains Mono', monospace";
    ctx.fillText("CLEAR [←]", rx + 56, HEADER_H + 190);
    ctx.fillText("SHUFFLE", rx + 152, HEADER_H + 190);

    // Scanner Hint & Stats
    ctx.textAlign = "left";
    ctx.fillStyle = COL.lavender;
    ctx.font = "600 10px 'JetBrains Mono', monospace";
    ctx.fillText(`WORDS CLEARED: ${wd.wordsCleared}`, rx + 14, HEADER_H + 224);
    ctx.fillText(`COMBO MULTI:   x${wd.combo.toFixed(1)}`, rx + 14, HEADER_H + 242);
    ctx.fillStyle = COL.cyan;
    ctx.fillText(`SCANNER HINT:  ${wd.hintWord}`, rx + 14, HEADER_H + 262);

    // Feedback Banner
    ctx.fillStyle = wd.feedbackColor;
    ctx.font = "700 10px 'JetBrains Mono', monospace";
    ctx.fillText(wd.feedback.slice(0, 28), rx + 14, HEADER_H + 292);

    ctx.fillStyle = "rgba(245, 235, 255, 0.55)";
    ctx.font = "500 9.5px 'Plus Jakarta Sans', sans-serif";
    ctx.fillText("Tip: Clear magenta-timer tiles", rx + 14, HEADER_H + 316);
    ctx.fillText("before they reach 0.0s!", rx + 14, HEADER_H + 330);

    if (wd.gameOver) {
      drawGameOverOverlay("CORE OVERLOAD", `FINAL SCORE: ${wd.score} · WORDS: ${wd.wordsCleared}`, "CLICK OR PRESS ENTER TO REBOOT");
    }
  }

  // =========================================================================
  // GAME 2: CYBER BRICK BREAKER (brickbreaker.exe)
  // =========================================================================
  const bb = {
    paddleX: W / 2 - 52,
    paddleW: 104,
    paddleY: H - 28,
    balls: [],
    bricks: [],
    capsules: [],
    lasers: [],
    laserTimer: 0,
    score: 0,
    highScore: Number(localStorage.getItem("vk_bb_hi") || 2400),
    lives: 3,
    level: 1,
    combo: 0,
    gameOver: false
  };

  function buildBricks() {
    bb.bricks = [];
    const rows = 6;
    const cols = 10;
    const bw = 56;
    const bh = 18;
    const startX = 22;
    const startY = HEADER_H + 42;
    const rowColors = [COL.magenta, COL.magenta, COL.lavender, COL.lavender, COL.violet, COL.cyan];
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        bb.bricks.push({
          x: startX + c * (bw + 4),
          y: startY + r * (bh + 5),
          w: bw,
          h: bh,
          hp: r < 2 ? 2 : 1,
          maxHp: r < 2 ? 2 : 1,
          color: rowColors[r],
          pts: (rows - r) * 25
        });
      }
    }
  }

  function resetBrickBreaker(fullReset = true) {
    if (fullReset) {
      bb.score = 0;
      bb.lives = 3;
      bb.level = 1;
      bb.gameOver = false;
    }
    bb.paddleW = 104;
    bb.paddleX = W / 2 - bb.paddleW / 2;
    bb.capsules = [];
    bb.lasers = [];
    bb.laserTimer = 0;
    bb.combo = 0;
    bb.balls = [
      {
        x: W / 2,
        y: bb.paddleY - 9,
        vx: 195 * (Math.random() < 0.5 ? 1 : -1),
        vy: -255,
        stuck: true,
        trail: []
      }
    ];
    buildBricks();
  }

  function launchBalls() {
    if (bb.gameOver) {
      resetBrickBreaker(true);
      return;
    }
    let launched = false;
    for (const b of bb.balls) {
      if (b.stuck) {
        b.stuck = false;
        b.vy = -265 - (bb.level - 1) * 18;
        b.vx = (Math.random() - 0.5) * 180 || 140;
        launched = true;
      }
    }
    if (launched) playSfx("bounce");
  }

  function updateAndDrawBrickBreaker(dt, keys) {
    // Paddle keyboard movement
    const moveSpd = 440;
    if (keys.has(37) || keys.has(65)) bb.paddleX -= moveSpd * dt;
    if (keys.has(39) || keys.has(68)) bb.paddleX += moveSpd * dt;
    bb.paddleX = Math.max(12, Math.min(W - 12 - bb.paddleW, bb.paddleX));

    // Laser firing
    if (bb.laserTimer > 0 && !bb.gameOver) {
      bb.laserTimer -= dt;
      if (Math.floor((bb.laserTimer + dt) * 4) !== Math.floor(bb.laserTimer * 4)) {
        bb.lasers.push({ x: bb.paddleX + 10, y: bb.paddleY - 6 });
        bb.lasers.push({ x: bb.paddleX + bb.paddleW - 10, y: bb.paddleY - 6 });
      }
    }

    // Update lasers
    for (let i = bb.lasers.length - 1; i >= 0; i--) {
      const l = bb.lasers[i];
      l.y -= 480 * dt;
      if (l.y < HEADER_H) {
        bb.lasers.splice(i, 1);
        continue;
      }
      for (let j = bb.bricks.length - 1; j >= 0; j--) {
        const br = bb.bricks[j];
        if (l.x >= br.x && l.x <= br.x + br.w && l.y >= br.y && l.y <= br.y + br.h) {
          br.hp--;
          bb.lasers.splice(i, 1);
          if (br.hp <= 0) {
            bb.score += br.pts;
            spawnParticles(br.x + br.w / 2, br.y + br.h / 2, br.color, 12);
            bb.bricks.splice(j, 1);
          }
          playSfx("brick");
          break;
        }
      }
    }

    // Update balls
    for (let i = bb.balls.length - 1; i >= 0; i--) {
      const b = bb.balls[i];
      if (b.stuck) {
        b.x = bb.paddleX + bb.paddleW / 2;
        b.y = bb.paddleY - 8;
        continue;
      }
      b.trail.push({ x: b.x, y: b.y });
      if (b.trail.length > 7) b.trail.shift();

      b.x += b.vx * dt;
      b.y += b.vy * dt;

      if (b.x < 14) {
        b.x = 14;
        b.vx = Math.abs(b.vx);
        playSfx("bounce");
      } else if (b.x > W - 14) {
        b.x = W - 14;
        b.vx = -Math.abs(b.vx);
        playSfx("bounce");
      }
      if (b.y < HEADER_H + 14) {
        b.y = HEADER_H + 14;
        b.vy = Math.abs(b.vy);
        playSfx("bounce");
      }

      // Paddle collision
      if (
        b.vy > 0 &&
        b.y + 6 >= bb.paddleY &&
        b.y - 6 <= bb.paddleY + 12 &&
        b.x >= bb.paddleX - 4 &&
        b.x <= bb.paddleX + bb.paddleW + 4
      ) {
        const hitPos = (b.x - (bb.paddleX + bb.paddleW / 2)) / (bb.paddleW / 2);
        const speed = Math.min(440, Math.hypot(b.vx, b.vy) * 1.02);
        const angle = hitPos * (Math.PI * 0.36);
        b.vx = Math.sin(angle) * speed;
        b.vy = -Math.cos(angle) * speed;
        b.y = bb.paddleY - 7;
        bb.combo = 0;
        playSfx("bounce");
      }

      // Brick collision
      for (let j = bb.bricks.length - 1; j >= 0; j--) {
        const br = bb.bricks[j];
        if (
          b.x + 6 >= br.x &&
          b.x - 6 <= br.x + br.w &&
          b.y + 6 >= br.y &&
          b.y - 6 <= br.y + br.h
        ) {
          b.vy = -b.vy;
          br.hp--;
          bb.combo++;
          if (br.hp <= 0) {
            const pts = br.pts + Math.min(100, bb.combo * 10);
            bb.score += pts;
            if (bb.score > bb.highScore) {
              bb.highScore = bb.score;
              localStorage.setItem("vk_bb_hi", String(bb.highScore));
            }
            spawnParticles(br.x + br.w / 2, br.y + br.h / 2, br.color, 15);
            // 24% chance to drop a capsule
            if (Math.random() < 0.24) {
              const types = ["WIDE", "MULTI", "LASER", "+1UP"];
              const kind = types[Math.floor(Math.random() * types.length)];
              bb.capsules.push({ x: br.x + br.w / 2, y: br.y + br.h / 2, kind });
            }
            bb.bricks.splice(j, 1);
            playSfx("brick");
          } else {
            spawnParticles(b.x, b.y, COL.cream, 6);
            playSfx("bounce");
          }
          break;
        }
      }

      // Ball lost below floor
      if (b.y > H + 10) {
        bb.balls.splice(i, 1);
      }
    }

    // Check if all balls lost
    if (bb.balls.length === 0 && !bb.gameOver) {
      bb.lives--;
      if (bb.lives <= 0) {
        bb.gameOver = true;
        playSfx("gameover");
      } else {
        playSfx("error");
        bb.balls.push({
          x: bb.paddleX + bb.paddleW / 2,
          y: bb.paddleY - 8,
          vx: 180,
          vy: -250,
          stuck: true,
          trail: []
        });
      }
    }

    // Check level cleared
    if (bb.bricks.length === 0 && !bb.gameOver) {
      bb.level++;
      playSfx("clear");
      resetBrickBreaker(false);
    }

    // Update capsules
    for (let i = bb.capsules.length - 1; i >= 0; i--) {
      const cap = bb.capsules[i];
      cap.y += 135 * dt;
      if (
        cap.y + 8 >= bb.paddleY &&
        cap.y - 8 <= bb.paddleY + 14 &&
        cap.x >= bb.paddleX - 10 &&
        cap.x <= bb.paddleX + bb.paddleW + 10
      ) {
        if (cap.kind === "WIDE") bb.paddleW = Math.min(168, bb.paddleW + 34);
        else if (cap.kind === "LASER") bb.laserTimer = 7.0;
        else if (cap.kind === "+1UP") bb.lives = Math.min(5, bb.lives + 1);
        else if (cap.kind === "MULTI" && bb.balls.length > 0) {
          const ref = bb.balls[0];
          bb.balls.push(
            { x: ref.x, y: ref.y, vx: -210, vy: -250, stuck: false, trail: [] },
            { x: ref.x, y: ref.y, vx: 210, vy: -250, stuck: false, trail: [] }
          );
        }
        bb.score += 100;
        playSfx("clear");
        bb.capsules.splice(i, 1);
      } else if (cap.y > H + 15) {
        bb.capsules.splice(i, 1);
      }
    }

    // HUD Row
    ctx.fillStyle = COL.lavender;
    ctx.font = "700 11px 'JetBrains Mono', monospace";
    ctx.textAlign = "left";
    ctx.fillText(`SCORE: ${bb.score}`, 22, HEADER_H + 24);
    ctx.fillText(`HIGH: ${bb.highScore}`, 160, HEADER_H + 24);
    ctx.fillText(`SECTOR: ${bb.level}`, 310, HEADER_H + 24);
    ctx.textAlign = "right";
    ctx.fillStyle = COL.magenta;
    ctx.fillText(`LIVES: ${"◆".repeat(Math.max(0, bb.lives))}`, W - 22, HEADER_H + 24);

    // Draw Bricks
    for (const br of bb.bricks) {
      ctx.fillStyle = br.hp > 1 ? COL.magenta : br.color;
      drawRoundedRect(ctx, br.x, br.y, br.w, br.h, 4);
      ctx.fill();
      if (br.hp > 1) {
        ctx.strokeStyle = COL.cream;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }
    }

    // Draw Capsules
    for (const cap of bb.capsules) {
      ctx.fillStyle = COL.emerald;
      drawRoundedRect(ctx, cap.x - 22, cap.y - 8, 44, 16, 8);
      ctx.fill();
      ctx.fillStyle = COL.bg;
      ctx.font = "700 9px 'JetBrains Mono', monospace";
      ctx.textAlign = "center";
      ctx.fillText(cap.kind, cap.x, cap.y + 3);
    }

    // Draw Lasers
    ctx.fillStyle = COL.magenta;
    for (const l of bb.lasers) {
      ctx.fillRect(l.x - 1.5, l.y - 8, 3, 12);
    }

    // Draw Paddle
    ctx.fillStyle = bb.laserTimer > 0 ? COL.magenta : COL.lavender;
    ctx.strokeStyle = COL.cream;
    ctx.lineWidth = 1.5;
    drawRoundedRect(ctx, bb.paddleX, bb.paddleY, bb.paddleW, 12, 6);
    ctx.fill();
    ctx.stroke();

    // Draw Balls + Trails
    for (const b of bb.balls) {
      for (let t = 0; t < b.trail.length; t++) {
        const pt = b.trail[t];
        ctx.fillStyle = `rgba(217, 70, 239, ${(t + 1) / 14})`;
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, 4.5, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.fillStyle = COL.cream;
      ctx.beginPath();
      ctx.arc(b.x, b.y, 6, 0, Math.PI * 2);
      ctx.fill();

      if (b.stuck && !bb.gameOver) {
        ctx.fillStyle = COL.cream;
        ctx.font = "700 12px 'Space Grotesk', sans-serif";
        ctx.textAlign = "center";
        ctx.fillText("CLICK OR PRESS SPACE / ENTER TO LAUNCH PLASMA BALL", W / 2, H - 56);
      }
    }

    if (bb.gameOver) {
      drawGameOverOverlay("SYSTEM BREACH", `FINAL SCORE: ${bb.score} · SECTOR ${bb.level}`, "CLICK OR PRESS ENTER TO RETRY");
    }
  }

  // =========================================================================
  // GAME 3: CYBER SNAKE (cybersnake.exe)
  // =========================================================================
  const SN_COLS = 30;
  const SN_ROWS = 16;
  const SN_CELL = 20;
  const SN_OX = 20;
  const SN_OY = HEADER_H + 34;

  const sn = {
    body: [],
    dir: { x: 1, y: 0 },
    queue: [],
    food: { x: 15, y: 8 },
    bonusOrb: null,
    stepTimer: 0,
    score: 0,
    highScore: Number(localStorage.getItem("vk_sn_hi") || 1800),
    nodes: 0,
    gameOver: false
  };

  function placeSnakeFood() {
    const occupied = new Set(sn.body.map(p => `${p.x},${p.y}`));
    let fx = 10, fy = 8;
    for (let tries = 0; tries < 100; tries++) {
      const tx = Math.floor(Math.random() * SN_COLS);
      const ty = Math.floor(Math.random() * SN_ROWS);
      if (!occupied.has(`${tx},${ty}`)) {
        fx = tx;
        fy = ty;
        break;
      }
    }
    sn.food = { x: fx, y: fy };
  }

  function resetCyberSnake() {
    sn.body = [
      { x: 8, y: 8 },
      { x: 7, y: 8 },
      { x: 6, y: 8 },
      { x: 5, y: 8 }
    ];
    sn.dir = { x: 1, y: 0 };
    sn.queue = [];
    sn.score = 0;
    sn.nodes = 0;
    sn.stepTimer = 0;
    sn.bonusOrb = null;
    sn.gameOver = false;
    placeSnakeFood();
  }

  function queueSnakeDir(nx, ny) {
    if (sn.gameOver) return;
    const last = sn.queue.length > 0 ? sn.queue[sn.queue.length - 1] : sn.dir;
    if (last.x + nx === 0 && last.y + ny === 0) return;
    if (last.x === nx && last.y === ny) return;
    if (sn.queue.length < 2) {
      sn.queue.push({ x: nx, y: ny });
    }
  }

  function updateAndDrawCyberSnake(dt, keys) {
    const dashing = keys.has(32) || keys.has(16);
    const baseInterval = Math.max(0.062, 0.118 - sn.nodes * 0.0018);
    const stepInterval = dashing ? baseInterval * 0.55 : baseInterval;

    if (!sn.gameOver) {
      if (sn.bonusOrb) {
        sn.bonusOrb.timer -= dt;
        if (sn.bonusOrb.timer <= 0) sn.bonusOrb = null;
      }

      sn.stepTimer += dt;
      if (sn.stepTimer >= stepInterval) {
        sn.stepTimer -= stepInterval;
        if (sn.queue.length > 0) {
          sn.dir = sn.queue.shift();
        }
        const head = sn.body[0];
        const nx = head.x + sn.dir.x;
        const ny = head.y + sn.dir.y;

        // Check wall or self collision
        const hitWall = nx < 0 || nx >= SN_COLS || ny < 0 || ny >= SN_ROWS;
        const hitSelf = sn.body.some((seg, idx) => idx < sn.body.length - 1 && seg.x === nx && seg.y === ny);

        if (hitWall || hitSelf) {
          sn.gameOver = true;
          spawnParticles(SN_OX + head.x * SN_CELL + 10, SN_OY + head.y * SN_CELL + 10, COL.danger, 22);
          playSfx("gameover");
        } else {
          sn.body.unshift({ x: nx, y: ny });
          if (nx === sn.food.x && ny === sn.food.y) {
            sn.nodes++;
            const pts = (dashing ? 150 : 100) + sn.nodes * 5;
            sn.score += pts;
            if (sn.score > sn.highScore) {
              sn.highScore = sn.score;
              localStorage.setItem("vk_sn_hi", String(sn.highScore));
            }
            spawnParticles(SN_OX + nx * SN_CELL + 10, SN_OY + ny * SN_CELL + 10, COL.magenta, 16);
            playSfx("eat");
            placeSnakeFood();
            if (sn.nodes % 4 === 0 && !sn.bonusOrb) {
              sn.bonusOrb = {
                x: Math.floor(Math.random() * SN_COLS),
                y: Math.floor(Math.random() * SN_ROWS),
                timer: 7.5
              };
            }
          } else {
            sn.body.pop();
          }

          if (sn.bonusOrb && nx === sn.bonusOrb.x && ny === sn.bonusOrb.y) {
            sn.score += 350;
            if (sn.score > sn.highScore) {
              sn.highScore = sn.score;
              localStorage.setItem("vk_sn_hi", String(sn.highScore));
            }
            spawnParticles(SN_OX + nx * SN_CELL + 10, SN_OY + ny * SN_CELL + 10, COL.amber, 20);
            sn.bonusOrb = null;
            playSfx("clear");
          }
        }
      }
    }

    // HUD Row
    ctx.fillStyle = COL.lavender;
    ctx.font = "700 11px 'JetBrains Mono', monospace";
    ctx.textAlign = "left";
    ctx.fillText(`SCORE: ${sn.score}`, 20, HEADER_H + 22);
    ctx.fillText(`HIGH: ${sn.highScore}`, 160, HEADER_H + 22);
    ctx.fillText(`NODES: ${sn.nodes}`, 310, HEADER_H + 22);
    ctx.textAlign = "right";
    ctx.fillStyle = dashing ? COL.magenta : COL.cyan;
    ctx.fillText(dashing ? "⚡ HYPER-DASH ACTIVE (2X)" : "HOLD SPACE TO HYPER-DASH", W - 20, HEADER_H + 22);

    // Arena Grid
    ctx.fillStyle = "#080411";
    ctx.strokeStyle = COL.violet;
    ctx.lineWidth = 1.5;
    ctx.fillRect(SN_OX, SN_OY, SN_COLS * SN_CELL, SN_ROWS * SN_CELL);
    ctx.strokeRect(SN_OX, SN_OY, SN_COLS * SN_CELL, SN_ROWS * SN_CELL);

    ctx.strokeStyle = "rgba(91, 33, 182, 0.22)";
    ctx.lineWidth = 1;
    for (let c = 1; c < SN_COLS; c++) {
      ctx.beginPath();
      ctx.moveTo(SN_OX + c * SN_CELL, SN_OY);
      ctx.lineTo(SN_OX + c * SN_CELL, SN_OY + SN_ROWS * SN_CELL);
      ctx.stroke();
    }
    for (let r = 1; r < SN_ROWS; r++) {
      ctx.beginPath();
      ctx.moveTo(SN_OX, SN_OY + r * SN_CELL);
      ctx.lineTo(SN_OX + SN_COLS * SN_CELL, SN_OY + r * SN_CELL);
      ctx.stroke();
    }

    // Draw Food Orb
    const fx = SN_OX + sn.food.x * SN_CELL + SN_CELL / 2;
    const fy = SN_OY + sn.food.y * SN_CELL + SN_CELL / 2;
    const pulse = 1 + 0.2 * Math.sin(performance.now() * 0.01);
    ctx.fillStyle = COL.magenta;
    ctx.beginPath();
    ctx.arc(fx, fy, 6.5 * pulse, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = COL.cream;
    ctx.beginPath();
    ctx.arc(fx, fy, 3, 0, Math.PI * 2);
    ctx.fill();

    // Draw Bonus Overclock Orb
    if (sn.bonusOrb) {
      const bx = SN_OX + sn.bonusOrb.x * SN_CELL + SN_CELL / 2;
      const by = SN_OY + sn.bonusOrb.y * SN_CELL + SN_CELL / 2;
      ctx.fillStyle = COL.amber;
      ctx.beginPath();
      ctx.arc(bx, by, 7.5, 0, Math.PI * 2);
      ctx.fill();
    }

    // Draw Snake Segments
    for (let i = sn.body.length - 1; i >= 0; i--) {
      const seg = sn.body[i];
      const sx = SN_OX + seg.x * SN_CELL + 2;
      const sy = SN_OY + seg.y * SN_CELL + 2;
      if (i === 0) {
        ctx.fillStyle = COL.cream;
      } else if (i % 2 === 0) {
        ctx.fillStyle = COL.magenta;
      } else {
        ctx.fillStyle = COL.lavender;
      }
      drawRoundedRect(ctx, sx, sy, SN_CELL - 4, SN_CELL - 4, 4);
      ctx.fill();
    }

    if (sn.gameOver) {
      drawGameOverOverlay("SIGNAL TERMINATED", `FINAL SCORE: ${sn.score} · NODES: ${sn.nodes}`, "CLICK OR PRESS ENTER TO REBOOT");
    }
  }

  // =========================================================================
  // SHARED OVERLAY & CARTRIDGE HEADER BAR
  // =========================================================================
  function drawGameOverOverlay(title, subtitle, prompt) {
    ctx.save();
    ctx.fillStyle = "rgba(11, 7, 22, 0.84)";
    ctx.fillRect(0, HEADER_H, W, H - HEADER_H);

    ctx.fillStyle = "#160B2E";
    ctx.strokeStyle = COL.magenta;
    ctx.lineWidth = 2;
    drawRoundedRect(ctx, W / 2 - 190, H / 2 - 64, 380, 136, 10);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = COL.magenta;
    ctx.font = "700 24px 'Space Grotesk', sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(title, W / 2, H / 2 - 22);

    ctx.fillStyle = COL.cream;
    ctx.font = "600 13px 'JetBrains Mono', monospace";
    ctx.fillText(subtitle, W / 2, H / 2 + 8);

    ctx.fillStyle = COL.lavender;
    ctx.font = "700 12px 'Space Grotesk', sans-serif";
    ctx.fillText(prompt, W / 2, H / 2 + 44);
    ctx.restore();
  }

  function drawCartridgeTabs() {
    ctx.fillStyle = "#120A26";
    ctx.fillRect(0, 0, W, HEADER_H);
    ctx.strokeStyle = COL.violet;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, HEADER_H);
    ctx.lineTo(W, HEADER_H);
    ctx.stroke();

    const tabW = W / 3;
    for (let i = 0; i < CARTRIDGES.length; i++) {
      const c = CARTRIDGES[i];
      const tx = i * tabW;
      const isAct = c.id === activeCartridge;
      if (isAct) {
        ctx.fillStyle = "#291454";
        ctx.fillRect(tx, 0, tabW, HEADER_H);
        ctx.fillStyle = COL.magenta;
        ctx.fillRect(tx, HEADER_H - 3, tabW, 3);
      }
      ctx.fillStyle = isAct ? COL.cream : COL.lavender;
      ctx.font = isAct ? "700 11.5px 'Space Grotesk', sans-serif" : "600 11px 'Space Grotesk', sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(`${c.short} [${c.badge}]`, tx + tabW / 2, HEADER_H / 2);
    }
  }

  function setCartridge(id) {
    const found = CARTRIDGES.find(c => c.id === id) || CARTRIDGES[0];
    activeCartridge = found.id;
    window.__vikneshCartridge = found.id;
    if (titleEl) titleEl.textContent = found.exe;
    if (statusEl) statusEl.textContent = found.status;
    if (noteEl) noteEl.textContent = found.note;
    for (const btn of win.querySelectorAll("[data-cartridge-switch]")) {
      btn.classList.toggle("is-active", btn.dataset.cartridgeSwitch === found.id);
    }
    playSfx("type");
  }

  // Initialize all 3 games
  resetWordDropper();
  resetBrickBreaker(true);
  resetCyberSnake();
  setCartridge(activeCartridge);

  // Listen for external cartridge selection (from Extras dropdown or Command Palette)
  window.addEventListener("vikneshos:cartridge", e => {
    if (e.detail) setCartridge(e.detail);
  });

  for (const btn of win.querySelectorAll("[data-cartridge-switch]")) {
    btn.addEventListener("click", () => {
      setCartridge(btn.dataset.cartridgeSwitch);
      stage.focus({ preventScroll: true });
    });
  }

  // Pointer / Click handling on Canvas
  function canvasCoords(ev) {
    const rect = stage.getBoundingClientRect();
    return {
      x: ((ev.clientX - rect.left) / Math.max(1, rect.width)) * W,
      y: ((ev.clientY - rect.top) / Math.max(1, rect.height)) * H
    };
  }

  stage.addEventListener("pointermove", ev => {
    if (activeCartridge === "brickbreaker") {
      const pt = canvasCoords(ev);
      bb.paddleX = Math.max(12, Math.min(W - 12 - bb.paddleW, pt.x - bb.paddleW / 2));
    }
  });

  stage.addEventListener("pointerdown", ev => {
    stage.focus({ preventScroll: true });
    const pt = canvasCoords(ev);

    // Check top Cartridge Tabs
    if (pt.y <= HEADER_H) {
      const idx = Math.min(2, Math.max(0, Math.floor(pt.x / (W / 3))));
      setCartridge(CARTRIDGES[idx].id);
      return;
    }

    if (activeCartridge === "worddropper") {
      if (wd.gameOver) {
        resetWordDropper();
        return;
      }
      // Check tiles click
      for (let c = 0; c < WD_COLS; c++) {
        for (let r = 0; r < WD_ROWS; r++) {
          const t = wd.grid[c][r];
          if (!t) continue;
          const x = 26 + c * 62;
          const y = HEADER_H + 22 + (WD_ROWS - 1 - r) * 63;
          if (pt.x >= x && pt.x <= x + 56 && pt.y >= y && pt.y <= y + 56) {
            const existingIdx = wd.selected.findIndex(s => s.id === t.id);
            if (existingIdx >= 0) {
              wd.selected.splice(existingIdx, 1);
            } else if (wd.selected.length < 8) {
              wd.selected.push({ col: c, row: r, id: t.id, ch: t.ch });
            }
            playSfx("type");
            return;
          }
        }
      }
      // Check HUD buttons
      const rx = 414, rw = 208;
      if (pt.x >= rx + 12 && pt.x <= rx + rw - 12 && pt.y >= HEADER_H + 130 && pt.y <= HEADER_H + 164) {
        wdSubmitWord();
      } else if (pt.x >= rx + 12 && pt.x <= rx + 100 && pt.y >= HEADER_H + 172 && pt.y <= HEADER_H + 200) {
        wd.selected = [];
        playSfx("type");
      } else if (pt.x >= rx + 108 && pt.x <= rx + 196 && pt.y >= HEADER_H + 172 && pt.y <= HEADER_H + 200) {
        wdShuffleBoard();
      }
    } else if (activeCartridge === "brickbreaker") {
      launchBalls();
    } else if (activeCartridge === "cybersnake") {
      if (sn.gameOver) {
        resetCyberSnake();
        return;
      }
      const head = sn.body[0];
      const hx = SN_OX + head.x * SN_CELL + SN_CELL / 2;
      const hy = SN_OY + head.y * SN_CELL + SN_CELL / 2;
      const dx = pt.x - hx;
      const dy = pt.y - hy;
      if (Math.abs(dx) > Math.abs(dy)) {
        queueSnakeDir(dx > 0 ? 1 : -1, 0);
      } else {
        queueSnakeDir(0, dy > 0 ? 1 : -1);
      }
    }
  });

  // Keyboard & On-screen Controls
  const heldKeys = new Set();

  function handleKeyPress(keyCode, keyStr = "") {
    if (keyCode === 49 && activeCartridge !== "worddropper") { setCartridge("worddropper"); return; }
    if (keyCode === 50 && activeCartridge !== "brickbreaker") { setCartridge("brickbreaker"); return; }
    if (keyCode === 51 && activeCartridge !== "cybersnake") { setCartridge("cybersnake"); return; }

    if (activeCartridge === "worddropper") {
      if (keyCode === 13 || keyCode === 32) {
        wdSubmitWord();
      } else if (keyCode === 8 || keyCode === 40 || keyCode === 37) {
        wd.selected.pop();
        playSfx("type");
      } else if (keyCode === 38) {
        wdShuffleBoard();
      } else if (keyStr && /^[a-zA-Z]$/.test(keyStr)) {
        wdSelectChar(keyStr.toUpperCase());
      } else if (keyCode >= 65 && keyCode <= 90) {
        wdSelectChar(String.fromCharCode(keyCode));
      }
    } else if (activeCartridge === "brickbreaker") {
      if (keyCode === 13 || keyCode === 32 || keyCode === 38) {
        launchBalls();
      }
    } else if (activeCartridge === "cybersnake") {
      if (sn.gameOver && (keyCode === 13 || keyCode === 32)) {
        resetCyberSnake();
        return;
      }
      if (keyCode === 37 || keyCode === 65) queueSnakeDir(-1, 0);
      else if (keyCode === 39 || keyCode === 68) queueSnakeDir(1, 0);
      else if (keyCode === 38 || keyCode === 87) queueSnakeDir(0, -1);
      else if (keyCode === 40 || keyCode === 83) queueSnakeDir(0, 1);
    }
  }

  for (const btn of win.querySelectorAll("[data-doom-key]")) {
    const code = Number(btn.dataset.doomKey);
    btn.addEventListener("pointerdown", e => {
      if (e.button !== 0) return;
      e.preventDefault();
      stage.focus({ preventScroll: true });
      heldKeys.add(code);
      handleKeyPress(code);
    });
    const release = () => heldKeys.delete(code);
    btn.addEventListener("pointerup", release);
    btn.addEventListener("pointercancel", release);
    btn.addEventListener("lostpointercapture", release);
  }

  const isWindowActive = () =>
    win.classList.contains("is-open") &&
    win.classList.contains("is-focused") &&
    !document.hidden;

  document.addEventListener(
    "keydown",
    e => {
      if (
        !isWindowActive() ||
        e.key === "Tab" ||
        e.metaKey ||
        e.ctrlKey ||
        e.altKey ||
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement ||
        document.querySelector(".os-boot")
      ) {
        return;
      }
      if (e.key === "Escape") return;
      e.preventDefault();
      e.stopPropagation();
      heldKeys.add(e.keyCode);
      handleKeyPress(e.keyCode, e.key);
    },
    true
  );

  document.addEventListener(
    "keyup",
    e => {
      heldKeys.delete(e.keyCode);
    },
    true
  );

  // Main 60fps Loop
  let rafId = 0;
  let lastTime = performance.now();

  function tick(now) {
    rafId = 0;
    if (!isWindowActive()) return;
    const dt = Math.min(0.05, Math.max(0.001, (now - lastTime) / 1000));
    lastTime = now;

    // Background fill
    ctx.fillStyle = COL.bg;
    ctx.fillRect(0, 0, W, H);

    // Draw active game
    if (activeCartridge === "worddropper") {
      updateAndDrawWordDropper(dt);
    } else if (activeCartridge === "brickbreaker") {
      updateAndDrawBrickBreaker(dt, heldKeys);
    } else {
      updateAndDrawCyberSnake(dt, heldKeys);
    }

    // Draw shared particles & top cartridge switcher
    updateAndDrawParticles(dt);
    drawCartridgeTabs();

    // Push frame to CRT WebGL layer
    crtLayer.update();

    rafId = requestAnimationFrame(tick);
  }

  function syncLoop() {
    if (isWindowActive()) {
      if (!rafId) {
        lastTime = performance.now();
        if (window.__vikneshCartridge && window.__vikneshCartridge !== activeCartridge) {
          setCartridge(window.__vikneshCartridge);
        }
        rafId = requestAnimationFrame(tick);
      }
    } else if (rafId) {
      cancelAnimationFrame(rafId);
      rafId = 0;
      heldKeys.clear();
    }
  }

  new MutationObserver(syncLoop).observe(win, { attributes: true, attributeFilter: ["class"] });
  document.addEventListener("visibilitychange", syncLoop);
  syncLoop();
}
