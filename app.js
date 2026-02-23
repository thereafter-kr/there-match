// ===== There Match — app.js =====

// ===== PASSWORD GATE =====
(function() {
  const GATE_PW = 'thereafter2026';
  const gate = document.getElementById('gate');
  const gateInput = document.getElementById('gate-input');
  const gateBtn = document.getElementById('gate-btn');
  const gateError = document.getElementById('gate-error');

  document.body.classList.add('locked');

  function tryUnlock() {
    if (gateInput.value === GATE_PW) {
      gate.classList.add('hidden');
      document.body.classList.remove('locked');
    } else {
      gateError.textContent = '비밀번호가 올바르지 않습니다.';
      gateInput.value = '';
      gateInput.focus();
    }
  }

  gateBtn.addEventListener('click', tryUnlock);
  gateInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') tryUnlock();
  });
  gateInput.focus();
})();

// ===== DATA =====

const STORIES = [
  { id: 'S1', name: '1.비교 대비형', desc: '가장 많이 사용. A방식 문제→전환→B방식 인사이트→우리 선택', fit: '경쟁PT, 차별화, 명확한 대안' },
  { id: 'S2', name: '2.충격 후 논리형', desc: '극적 데이터→원인→관점→인사이트→솔루션', fit: '임팩트 필요, 위기, 빠른 어텐션' },
  { id: 'S3', name: '3.클래식 논리형', desc: '배경/문제/목표→분석→인사이트→시사점→제안', fit: '보수적 분위기, 안정적 설득' },
  { id: 'S4', name: '4.과거-현재-미래형', desc: '타임라인→과거→현재 전환점→인사이트→미래 비전', fit: '리브랜딩, 중장기 전략' },
  { id: 'S5', name: '5.문제-해법 집중형', desc: '핵심 문제→심화→해법 인사이트→작동 원리→실행', fit: '문제 해결, 실행 중심' }
];

const OPENINGS = [
  { id: 'O1', name: '1.장면 묘사', desc: '토요일 오후, LG 경험공간에서…', fit: '현장감, 공감' },
  { id: 'O2', name: '2.고객 목소리', desc: '고객이 가장 많이 묻는 질문', fit: '진정성, 부드러운 진입' },
  { id: 'O3', name: '3.데이터 발견', desc: '6개월 데이터 분석 결과', fit: '객관성, 신뢰' },
  { id: 'O4', name: '4.변화 시작', desc: '최근 눈에 띄는 변화가 있습니다', fit: '트렌드, 맥락' },
  { id: 'O5', name: '5.사례에서 시작', desc: '유니클로 강남점에 다녀왔습니다', fit: '스토리텔링, 호기심' },
  { id: 'O6', name: '6.숫자 하나', desc: '하나의 숫자만 보여줌', fit: '미니멀, 집중, 강렬' },
  { id: 'O7', name: '7.역설 제시', desc: '더 많이 보여줄수록 덜 팔립니다', fit: '인지부조화, 뒤집기' },
  { id: 'O8', name: '8.극단 대비', desc: '8분 vs 3시간', fit: '충격, 격차, 위기감' },
  { id: 'O9', name: '9.비유로 시작', desc: '레스토랑 메뉴판을 떠올려보세요', fit: '이해 쉬움, 친근' },
  { id: 'O10', name: '10.선언형', desc: '오늘 한 가지만 기억해주세요', fit: '명확성, 확신' }
];

const LAWS = [
  { id: 'L1', name: '#1 선택 피로', desc: '선택지 많으면 결정 못함. 3개가 최적.', insights: [9,12,15,16,21] },
  { id: 'L2', name: '#2 재정의', desc: 'A가 아니라 B로 정의 = 카테고리 창조', insights: [5,6,7,22,23,27,30,33,50] },
  { id: 'L3', name: '#3 본질 우선', desc: '겉모습 < 기능. 트렌드 < 본질', insights: [8,10,11,13] },
  { id: 'L4', name: '#4 희소성', desc: '확장 거부 = 목적지. 숨김 = 발견', insights: [3,4,18] },
  { id: 'L5', name: '#5 투명성', desc: '보여줄수록 믿음. 과정 공개 = 신뢰', insights: [1,24] },
  { id: 'L6', name: '#6 집중', desc: '안 하는 것이 전략. 좁은 타겟.', insights: [17,20,49] },
  { id: 'L7', name: '#7 공감', desc: '특별함 < 평범함. 가르침 < 응원', insights: [32,34] },
  { id: 'L8', name: '#8 관찰', desc: '발명 < 발견. 이미 하던 것 포착', insights: [35] },
  { id: 'L9', name: '#9 역발상', desc: '업계 상식 반대로', insights: [26,48] },
  { id: 'L10', name: '#10 세계관', desc: '스타 의존 < 세계 구축', insights: [14] }
];

const CONCEPTS = [
  { id: 'C1', name: '1.핵심 3요소 전개형', desc: '3가지 도출 → 공간/경험/운영 번역 → 통합', fit: '복합 솔루션, 체계적' },
  { id: 'C2', name: '2.전환 로드맵형', desc: '현재→목표→단계별 전환', fit: '변화 관리, 실행 중심' },
  { id: 'C3', name: '3.단일 컨셉 관통형', desc: '하나의 컨셉 선언 → 5가지 발현', fit: '일관성 극대화, 강력한 방향' },
  { id: 'C4', name: '4.문제-해법-증명형', desc: '문제 재정의 → 통합 해법 → 실행 가능성', fit: '논리적 설득, 리스크 해소' },
  { id: 'C5', name: '5.경험 여정 설계형', desc: '고객 여정 재설계 → 터치포인트별 경험', fit: '고객 중심, 경험 설계' },
  { id: 'C6', name: '6.차별화 시스템형', desc: '경쟁사 vs 우리 → 차별화 5대 요소', fit: '경쟁PT, 포지셔닝' },
  { id: 'C7', name: '7.단계별 가치 창출형', desc: 'Phase별 진화 → 공간→경험→문화', fit: '장기 전략, 비전' },
  { id: 'C8', name: '8.통합 운영 시스템형', desc: '운영 철학 → 5대 운영 체계', fit: '운영 중심, 지속 가능' },
  { id: 'C9', name: '9.숫자로 증명형', desc: '핵심 지표 3개 → 실행 → 측정', fit: '성과 중심, 정량' },
  { id: 'C10', name: '10.예산 최적화형', desc: '제약 내 컨셉 → 비용 효율 → ROI', fit: '예산 제약, 경영진 설득' }
];

const INSIGHTS_DATA = {
  1: { name: '지울 수 없는 진심 (안성기의 손편지)', keywords: '#손편지 #진심', track: 'Track1' },
  2: { name: '셀프 환대 (최화정)', keywords: '#리추얼 #셀프환대', track: 'Track2' },
  3: { name: '로컬의 중력', keywords: '#결핍의미학 #목적지브랜드 #성심당', track: 'Track1' },
  4: { name: '지금 아니면 없다', keywords: '#긴박한경험 #시간제한 #자라', track: 'Track3' },
  5: { name: "먹는 곳이 아니라 '있는' 곳", keywords: '#체류형공간 #런던베이글뮤지엄', track: 'Track3' },
  6: { name: "평범한 것을 '뮤지엄'이라 부르는 순간", keywords: '#네이밍의힘 #경험격상', track: 'Track3' },
  7: { name: "매장이 아니라 '사건'", keywords: '#드롭컬처 #오픈런 #ZARA', track: 'Track3' },
  8: { name: '완벽한 기본', keywords: '#본질의완성 #유니클로 #장인정신', track: 'Track1' },
  9: { name: "옷장이 아니라 '유니폼'", keywords: '#보편성 #선택단순화 #유니클로', track: 'Track2' },
  10: { name: '보이지 않는 기술', keywords: '#숨겨진혁신 #유니클로', track: 'Track1' },
  11: { name: '계절을 파는 가게', keywords: '#기능이스타일 #에어리즘 #히트텍', track: 'Track1' },
  12: { name: '빠지는 것의 미학', keywords: '#극단적단순 #노로고 #미니멀', track: 'Track1' },
  13: { name: '못생긴 밑창의 역습', keywords: '#기능주의 #엔지니어링 #온', track: 'Track1' },
  14: { name: '주인공을 죽여도 세계는 산다', keywords: '#세계관 #유니버스 #주토피아', track: 'Track1' },
  15: { name: '선택지가 3개밖에 없는 마트', keywords: '#결정피로 #코스트코 #큐레이션', track: 'Track2' },
  16: { name: '메뉴가 3개밖에 없는 버거집', keywords: '#단순함 #인앤아웃 #집중', track: 'Track1' },
  17: { name: '안 하는 버거집', keywords: '#거부 #원칙 #인앤아웃', track: 'Track2' },
  18: { name: '시크릿 메뉴가 더 유명한 가게', keywords: '#숨김 #시크릿메뉴 #인앤아웃', track: 'Track2' },
  19: { name: '컨시어지가 있는 서점', keywords: '#맞춤서비스 #츠타야 #큐레이션', track: 'Track2' },
  20: { name: '50대만 오는 서점', keywords: '#선택과집중 #시니어 #츠타야', track: 'Track2' },
  21: { name: '3개의 법칙', keywords: '#결정피로 #선택축소 #심리학', track: 'Track1' },
  22: { name: '신발이 아니라 선수를 팝니다', keywords: '#꿈 #나이키 #스토리', track: 'Track2' },
  23: { name: '집도 아니고 회사도 아닌 곳', keywords: '#스타벅스 #제3의공간 #카테고리창조', track: 'Track1' },
  24: { name: '주방이 카운터 앞에 있습니다', keywords: '#오픈키친 #치폴레 #투명성', track: 'Track1' },
  25: { name: '종이봉투에 철학을 쓰는 식당', keywords: '#문화 #치폴레 #콘텐츠', track: 'Track2' },
  26: { name: '집주인이 고객보다 중요한 회사', keywords: '#공급중심 #에어비앤비 #역발상', track: 'Track2' },
  27: { name: '호텔이 아니라 경험을 팝니다', keywords: '#경험판매 #에어비앤비 #로컬', track: 'Track1' },
  28: { name: '영상 속 남자가 튀어나왔습니다', keywords: '#디지털소환 #온오프통합', track: 'Track3' },
  29: { name: '상 못 받았는데 가장 화제', keywords: '#기억승리 #화제성', track: 'Track2' },
  30: { name: '숫자가 아니라, 구름', keywords: '#감각의언어 #스펙을느낌으로 #온', track: 'Track3' },
  31: { name: '완벽하게 통역되자, 아무것도 통하지 않았습니다', keywords: '#AI통역 #기술의역설', track: 'Track3' },
  32: { name: '"나도 저래" - 네 글자로 끝나는 공감', keywords: '#나도저래 #평범의보편 #러브미', track: 'Track2' },
  33: { name: '물인데, 맥주캔', keywords: '#리퀴드데스 #정체성디자인 #포장의힘', track: 'Track3' },
  34: { name: '선생님이 아니라, 초록 올빼미', keywords: '#두올링고 #응원의교육', track: 'Track2' },
  35: { name: '새로운 게 아니라, 이미 하던 거', keywords: '#관찰의힘 #크래프트하인즈 #소비자가만든다', track: 'Track3' },
  36: { name: '잠만 자도 사게 됩니다 (MUJI Hotel)', keywords: '#무지호텔 #체험형쇼룸 #살아보는경험', track: 'Track3' },
  37: { name: '쓰레기가 20만원입니다 (FREITAG)', keywords: '#업사이클링 #유일무이 #프라이탁', track: 'Track1' },
  38: { name: '사지 마세요, 가 가장 잘 팔렸습니다 (Patagonia)', keywords: '#역설의브랜딩 #진정성 #파타고니아', track: 'Track1' },
  39: { name: '화면 밖으로 나왔습니다 (Netflix House)', keywords: '#넷플릭스하우스 #LBE #콘텐츠가공간이되는순간', track: 'Track3' },
  40: { name: '빈 종이 한 장이 13조 원입니다 (Notion)', keywords: '#노션 #락인전략 #빈캔버스', track: 'Track3' },
  41: { name: '10시간 29분 통화, 신발 한 켤레 (Zappos)', keywords: '#비효율의감동 #자포스 #매뉴얼없는콜센터', track: 'Track2' },
  42: { name: '카페가 있는 옷가게가 아닙니다 (ARKET)', keywords: '#노르딕라이프스타일 #SPA의진화 #아르켓', track: 'Track3' },
  43: { name: '비싼 가격이 콘텐츠입니다 (Erewhon)', keywords: '#가격이콘텐츠 #셀럽스무디 #에레원', track: 'Track3' },
  44: { name: '좌석을 없앴더니 3만 개가 됐습니다 (Luckin Coffee)', keywords: '#경험을뺀전략 #루이싱커피 #앱퍼스트', track: 'Track3' },
  45: { name: '백화점이 화성으로 갔습니다 (SKP-S)', keywords: '#세계관리테일 #젠틀몬스터 #비상업공간', track: 'Track3' },
  46: { name: '뭐가 들었는지 모릅니다. 그래서 삽니다 (POP MART)', keywords: '#블라인드박스 #팝마트 #불확실성이상품', track: 'Track3' },
  47: { name: '메뉴판이 없습니다 (% Arabica)', keywords: '#미니멀카페 #여백의디자인 #퍼센트아라비카', track: 'Track3' },
  48: { name: '차 의식을 없앤 찻집 (Tea\'stone)', keywords: '#전통차MZ #티스톤 #역발상', track: 'Track3' },
  49: { name: 'IT 표준화로 3㎡에서도 품질 일관성 (Fisheye)', keywords: '#시스템화 #피쉬아이 #데이터표준화', track: 'Track3' },
  50: { name: '이벤트 시스템 (Moncler Genius)', keywords: '#몽클레르 #이벤트시스템 #반복구조', track: 'Track3' }
};

// ===== MATCHING RULES =====

const STORY_RULES = {
  '리뉴얼':     { primary: 'S1', secondary: ['S5','S3'] },
  '신규 오픈':  { primary: 'S4', secondary: ['S3','S5'] },
  '팝업':       { primary: 'S2', secondary: ['S5','S1'] },
  '이벤트':     { primary: 'S2', secondary: ['S5','S4'] },
  '전시/체험관':{ primary: 'S5', secondary: ['S1','S3'] },
  '컨설팅':     { primary: 'S3', secondary: ['S1','S5'] }
};

const STORY_OPENING_FIT = {
  'S1': { best: ['O8','O7','O6'], avoid: ['O1'] },
  'S2': { best: ['O6','O8','O3'], avoid: ['O9'] },
  'S3': { best: ['O3','O4','O1'], avoid: ['O7'] },
  'S4': { best: ['O4','O5','O1'], avoid: ['O6'] },
  'S5': { best: ['O2','O3','O7'], avoid: ['O10'] }
};

const CONCEPT_RULES = {
  '신규 오픈':  { primary: 'C5', secondary: ['C3','C7'] },
  '리뉴얼':     { primary: 'C2', secondary: ['C4','C1'] },
  '팝업':       { primary: 'C3', secondary: ['C1','C5'] },
  '이벤트':     { primary: 'C5', secondary: ['C7','C3'] },
  '전시/체험관':{ primary: 'C5', secondary: ['C6','C1'] },
  '컨설팅':     { primary: 'C9', secondary: ['C4','C8'] }
};

const BUDGET_CONCEPT_OVERRIDE = {
  '~5천만':     ['C10','C4'],
  '5천만~2억':  ['C10','C4','C1']
};

const INDUSTRY_LAW = {
  '가전/전자':   ['L1','L3','L6'],
  '패션/뷰티':   ['L2','L4','L10'],
  'F&B':         ['L4','L2','L6'],
  '자동차':      ['L3','L2','L5'],
  '유통/리테일': ['L1','L6','L8'],
  'IT/통신':     ['L2','L10','L7'],
  '라이프스타일':['L7','L2','L9']
};

const TARGET_LAW = {
  'MZ':         ['L2','L7','L9'],
  '3040가족':   ['L1','L3','L5'],
  '5060시니어': ['L6','L3','L5'],
  '프리미엄':   ['L4','L3','L10'],
  '전연령':     ['L1','L2','L7']
};

const OBJ_LAW = {
  '매출':   ['L1','L6'],
  '인지도': ['L2','L10'],
  '체류':   ['L7','L5'],
  '유입':   ['L4','L9'],
  '재방문': ['L7','L5'],
  '체험':   ['L3','L8'],
  '바이럴': ['L4','L2']
};

const RECIPES = [
  { name: 'Recipe A: 위기감 + 전환', cond: (p,i,t,o) => p==='리뉴얼' && o.includes('매출'), m5:'S1',m1:'O8',m2:'L1',m4:'C4' },
  { name: 'Recipe B: 재정의 + 비전', cond: (p,i,t,o) => p==='신규 오픈' && o.includes('인지도'), m5:'S4',m1:'O5',m2:'L2',m4:'C3' },
  { name: 'Recipe C: 데이터 + 실행', cond: (p,i,t,o) => p==='컨설팅', m5:'S3',m1:'O3',m2:'L3',m4:'C9' },
  { name: 'Recipe D: 고객 공감 + 경험', cond: (p,i,t,o) => (p==='팝업'||p==='이벤트') && o.includes('체험'), m5:'S5',m1:'O2',m2:'L7',m4:'C5' },
  { name: 'Recipe E: 희소성 + 프리미엄', cond: (p,i,t,o) => t==='프리미엄', m5:'S2',m1:'O6',m2:'L4',m4:'C6' }
];

// ===== STATE =====
let internalMode = false;

// ===== DOM =====
const lockBtn = document.getElementById('lock-btn');
const runBtn = document.getElementById('runBtn');
const resetBtn = document.getElementById('resetBtn');
const backBtn = document.getElementById('backBtn');
const copyBtn = document.getElementById('copyBtn');
const downloadBtn = document.getElementById('downloadBtn');
const clearHistoryBtn = document.getElementById('clearHistoryBtn');

// ===== PASSWORD =====
lockBtn.addEventListener('click', () => {
  if (internalMode) {
    internalMode = false;
    document.body.classList.remove('internal-mode');
    lockBtn.classList.remove('active');
    lockBtn.textContent = '내부 모드';
    return;
  }
  const pw = prompt('내부 모드 비밀번호를 입력하세요.');
  if (pw === null) return;
  if (pw !== 'thereafter2026') {
    alert('접근 권한이 없습니다.');
    return;
  }
  internalMode = true;
  document.body.classList.add('internal-mode');
  lockBtn.classList.add('active');
  lockBtn.textContent = '내부 모드 ON';
});

// ===== TAG LOGIC =====
document.querySelectorAll('.tags').forEach(group => {
  const isMulti = group.classList.contains('multi');
  group.querySelectorAll('.tag').forEach(tag => {
    tag.addEventListener('click', () => {
      if (tag.classList.contains('excluded')) return;
      if (isMulti) {
        tag.classList.toggle('active');
      } else {
        group.querySelectorAll('.tag').forEach(t => t.classList.remove('active'));
        tag.classList.toggle('active');
      }
    });
  });
});

function getVal(id) {
  const t = document.querySelector(`#${id} .tag.active`);
  return t ? t.dataset.val : '';
}

function getVals(id) {
  return Array.from(document.querySelectorAll(`#${id} .tag.active`)).map(t => t.dataset.val);
}

// ===== HISTORY (localStorage) =====
const HISTORY_KEY = 'thereMatchHistory';

function getHistory() {
  try {
    return JSON.parse(localStorage.getItem(HISTORY_KEY)) || [];
  } catch { return []; }
}

function saveHistory(entry) {
  const history = getHistory();
  history.unshift(entry);
  localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
}

function clearHistory() {
  localStorage.removeItem(HISTORY_KEY);
  renderHistory();
}

function getExcludedModules(clientName) {
  if (!clientName) return { m1: [], m3: [] };
  const history = getHistory();
  const clientHistory = history.filter(h => h.client === clientName);
  const m1Set = new Set();
  const m3Set = new Set();
  clientHistory.forEach(h => {
    if (h.m1) m1Set.add(h.m1);
    if (h.m3) h.m3.forEach(n => m3Set.add(n));
  });
  return { m1: [...m1Set], m3: [...m3Set] };
}

function renderHistory() {
  const list = document.getElementById('historyList');
  const history = getHistory();
  if (history.length === 0) {
    list.innerHTML = '<div class="history-empty">PT 이력이 없습니다.</div>';
    return;
  }
  list.innerHTML = history.map(h => `
    <div class="history-item">
      <div>
        <span class="history-client">${h.client || '(미입력)'}</span>
        <span class="history-date">${h.date}</span>
        <div class="history-modules">
          <span class="history-mod">M1:${h.m1 || '-'}</span>
          <span class="history-mod">M3:${(h.m3 || []).map(n => '#'+n).join(',') || '-'}</span>
          <span class="history-mod">M5:${h.m5 || '-'}</span>
        </div>
      </div>
    </div>
  `).join('');
}

// ===== MAIN MATCH =====
function runMatch() {
  const pType = getVal('projectType');
  const industry = getVal('industry');
  const target = getVal('target');
  const objectives = getVals('objective');
  const budget = getVal('budget');
  const keywords = document.getElementById('keywords').value;
  const clientName = document.getElementById('clientName').value.trim();

  if (!pType) { alert('프로젝트 유형을 선택해주세요.'); return; }

  // Non-repeat tracking
  const excluded = getExcludedModules(clientName);

  // 1. M5 Story
  const storyRule = STORY_RULES[pType] || STORY_RULES['리뉴얼'];
  let m5id = storyRule.primary;
  if (objectives.includes('매출') && storyRule.secondary.includes('S1')) m5id = 'S1';
  const m5 = STORIES.find(s => s.id === m5id);
  const m5alts = storyRule.secondary.map(id => STORIES.find(s => s.id === id));

  // 2. M1 Opening (exclude previously used for same client)
  const openFit = STORY_OPENING_FIT[m5id] || STORY_OPENING_FIT['S1'];
  let m1Candidates = openFit.best.filter(id => !excluded.m1.includes(id));
  if (m1Candidates.length === 0) m1Candidates = openFit.best;
  const m1 = OPENINGS.find(o => o.id === m1Candidates[0]);
  const m1alts = m1Candidates.slice(1).map(id => OPENINGS.find(o => o.id === id));

  // 3. M2 Law — score-based
  const lawScores = {};
  LAWS.forEach(l => lawScores[l.id] = 0);

  const indLaws = INDUSTRY_LAW[industry] || [];
  indLaws.forEach((lid, i) => lawScores[lid] += (3 - i));

  const tarLaws = TARGET_LAW[target] || [];
  tarLaws.forEach((lid, i) => lawScores[lid] += (3 - i));

  objectives.forEach(obj => {
    const oLaws = OBJ_LAW[obj] || [];
    oLaws.forEach((lid, i) => lawScores[lid] += (2 - i));
  });

  const sortedLaws = Object.entries(lawScores).sort((a,b) => b[1] - a[1]);
  const m2id = sortedLaws[0][0];
  const m2 = LAWS.find(l => l.id === m2id);
  const m2alts = sortedLaws.slice(1,3).map(([id]) => LAWS.find(l => l.id === id));

  // 4. M3 Insights — exclude previously used for same client
  let primaryInsights = m2.insights.filter(n => !excluded.m3.includes(n)).slice(0, 3);
  if (primaryInsights.length < 3) {
    const extra = m2.insights.filter(n => !primaryInsights.includes(n)).slice(0, 3 - primaryInsights.length);
    primaryInsights = [...primaryInsights, ...extra];
  }
  const secLaw = LAWS.find(l => l.id === sortedLaws[1][0]);
  let secInsights = secLaw ? secLaw.insights.filter(n => !excluded.m3.includes(n) && !primaryInsights.includes(n)).slice(0, 1) : [];
  if (secInsights.length === 0 && secLaw) secInsights = secLaw.insights.filter(n => !primaryInsights.includes(n)).slice(0, 1);
  const allInsightNums = [...primaryInsights, ...secInsights];

  // 5. M4 Concept
  const conceptRule = CONCEPT_RULES[pType] || CONCEPT_RULES['리뉴얼'];
  let m4id = conceptRule.primary;
  if (budget === '~5천만' || budget === '5천만~2억') {
    const overrides = BUDGET_CONCEPT_OVERRIDE[budget];
    if (overrides && overrides.length) m4id = overrides[0];
  }
  const m4 = CONCEPTS.find(c => c.id === m4id);
  const m4alts = conceptRule.secondary.map(id => CONCEPTS.find(c => c.id === id));

  // Recipe check
  let matchedRecipe = null;
  for (const r of RECIPES) {
    if (r.cond(pType, industry, target, objectives)) { matchedRecipe = r; break; }
  }

  // Save to history
  saveHistory({
    client: clientName,
    date: new Date().toISOString().split('T')[0],
    rfp: { type: pType, industry, target, objectives, budget },
    m1: m1.id,
    m3: allInsightNums,
    m5: m5.id
  });

  // Render
  renderResults({ pType, industry, target, objectives, budget, keywords, clientName, m5, m5alts, m1, m1alts, m2, m2alts, m4, m4alts, allInsightNums, matchedRecipe, excluded });
}

// ===== RENDER =====
function renderResults(d) {
  // Summary bar
  document.getElementById('summaryBar').innerHTML = `
    <div class="sb-title">추천 조합${d.clientName ? ' — ' + d.clientName : ''}</div>
    <div class="summary-flow">
      <span class="sf-module">${d.m1.name.split('.')[1] || d.m1.name}</span>
      <span class="sf-arrow">→</span>
      <span class="sf-module">${d.m2.name}</span>
      <span class="sf-arrow">→</span>
      <span class="sf-module">인사이트 ${d.allInsightNums.length}개</span>
      <span class="sf-arrow">→</span>
      <span class="sf-module">${d.m4.name.split('.')[1] || d.m4.name}</span>
    </div>
  `;

  // Recipe
  const recipeEl = document.getElementById('recipeMatch');
  recipeEl.innerHTML = d.matchedRecipe ? `<div class="recipe-tag">${d.matchedRecipe.name} 패턴 매칭</div>` : '';

  // M5
  document.getElementById('resM5').innerHTML = `
    <div class="result-label">M5 — 스토리 패턴 (전체 뼈대)</div>
    ${renderModuleCard(d.m5, '추천', 'badge-primary')}
    ${d.m5alts.map(a => renderModuleCard(a, '대안', 'badge-secondary')).join('')}
  `;

  // M1
  const m1ExcludeNote = d.excluded.m1.length > 0 ? `<div style="font-size:11px;color:var(--muted);margin-bottom:8px;">(${d.clientName} 이전 사용 제외: ${d.excluded.m1.join(', ')})</div>` : '';
  document.getElementById('resM1').innerHTML = `
    <div class="result-label">M1 — 오프닝 패턴 (01~03P)</div>
    ${m1ExcludeNote}
    ${renderModuleCard(d.m1, '추천', 'badge-primary')}
    ${d.m1alts.map(a => renderModuleCard(a, '대안', 'badge-secondary')).join('')}
  `;

  // M2
  document.getElementById('resM2').innerHTML = `
    <div class="result-label">M2 — 관점 / 문제정의 (04~08P)</div>
    ${renderModuleCard(d.m2, '주 관점', 'badge-primary')}
    ${d.m2alts.map(a => renderModuleCard(a, '보조 관점', 'badge-secondary')).join('')}
  `;

  // M3
  const m3ExcludeNote = d.excluded.m3.length > 0 ? `<div style="font-size:11px;color:var(--muted);margin-bottom:8px;">(${d.clientName} 이전 사용 제외: #${d.excluded.m3.join(', #')})</div>` : '';
  const insightCards = d.allInsightNums.map((num, i) => {
    const ins = INSIGHTS_DATA[num];
    if (!ins) return '';
    const isPrimary = i < 3;
    return `
      <div class="insight-card">
        <div class="insight-num">#${String(num).padStart(2,'0')}</div>
        <div class="insight-content">
          <div class="insight-name">${ins.name}</div>
          <div class="insight-tags">
            ${ins.keywords.split(' ').map(k => `<span class="insight-tag">${k}</span>`).join('')}
            <span class="insight-tag">${ins.track}</span>
            <span class="insight-tag ${isPrimary ? 'badge-match' : ''}">${isPrimary ? '주관점' : '보조'}</span>
          </div>
        </div>
      </div>
    `;
  }).join('');

  document.getElementById('resM3').innerHTML = `
    <div class="result-label">M3 — 추천 인사이트 (09~15P)</div>
    ${m3ExcludeNote}
    <div class="insight-grid">${insightCards}</div>
  `;

  // M4
  document.getElementById('resM4').innerHTML = `
    <div class="result-label">M4 — 컨셉개발 패턴 (16~20P)</div>
    ${renderModuleCard(d.m4, '추천', 'badge-primary')}
    ${d.m4alts.map(a => renderModuleCard(a, '대안', 'badge-secondary')).join('')}
  `;

  // Copy box
  const copyText = [
    '[There Match 추천 결과]',
    `클라이언트: ${d.clientName || '-'}`,
    `RFP: ${d.pType} / ${d.industry} / ${d.target} / ${d.objectives.join(',')} / ${d.budget}`,
    `키워드: ${d.keywords || '-'}`,
    '',
    `M5 스토리: ${d.m5.name}`,
    `M1 오프닝: ${d.m1.name}`,
    `M2 관점: ${d.m2.name} (보조: ${d.m2alts.map(a=>a.name).join(', ')})`,
    `M3 인사이트: ${d.allInsightNums.map(n => '#'+String(n).padStart(2,'0')+' '+((INSIGHTS_DATA[n]||{}).name||'')).join(' / ')}`,
    `M4 컨셉: ${d.m4.name}`,
    d.matchedRecipe ? `\n매칭 레시피: ${d.matchedRecipe.name}` : ''
  ].join('\n');

  document.getElementById('copyBox').textContent = copyText;
  window._matchResult = {
    client: d.clientName,
    rfp: { type: d.pType, industry: d.industry, target: d.target, objectives: d.objectives, budget: d.budget, keywords: d.keywords },
    recommendation: { m5: d.m5.name, m1: d.m1.name, m2: d.m2.name, m3: d.allInsightNums, m4: d.m4.name, recipe: d.matchedRecipe ? d.matchedRecipe.name : null }
  };

  renderHistory();
  document.getElementById('results').classList.add('show');
  document.getElementById('results').scrollIntoView({ behavior: 'smooth' });
}

function renderModuleCard(mod, badge, badgeClass) {
  return `
    <div class="module-card">
      <div class="mc-name">${mod.name}</div>
      <div class="mc-desc">${mod.desc}</div>
      <span class="mc-badge ${badgeClass}">${badge}</span>
      ${mod.fit ? `<span class="mc-badge badge-secondary" style="margin-left:4px">${mod.fit}</span>` : ''}
    </div>
  `;
}

// ===== ACTIONS =====
runBtn.addEventListener('click', runMatch);

resetBtn.addEventListener('click', () => {
  document.querySelectorAll('.tag').forEach(t => t.classList.remove('active'));
  document.getElementById('keywords').value = '';
  document.getElementById('clientName').value = '';
  document.getElementById('results').classList.remove('show');
});

backBtn.addEventListener('click', () => {
  document.getElementById('results').classList.remove('show');
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

copyBtn.addEventListener('click', () => {
  const text = document.getElementById('copyBox').textContent;
  navigator.clipboard.writeText(text).then(() => {
    const t = document.getElementById('toast');
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 2000);
  });
});

downloadBtn.addEventListener('click', () => {
  if (!window._matchResult) return;
  const json = JSON.stringify(window._matchResult, null, 2);
  const blob = new Blob([json], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `there-match_${new Date().toISOString().split('T')[0]}.json`;
  a.click();
  URL.revokeObjectURL(url);
});

clearHistoryBtn.addEventListener('click', () => {
  if (confirm('PT 이력을 모두 삭제하시겠습니까?')) {
    clearHistory();
  }
});

// ===== INIT =====
renderHistory();
