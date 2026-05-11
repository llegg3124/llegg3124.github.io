export interface MinistryItem {
  id: string;
  title: string;
  coreMessage: string;
  description: string;
  details: string[];
  category: 'church' | 'family' | 'workplace';
}

export const ministryData: MinistryItem[] = [
  {
    id: 'cojourner',
    title: '코저너 (Cojourner)',
    category: 'church',
    coreMessage: '전도자의 정체성을 일깨우고 준비시키다.',
    description: '크리스천들이 일상 속에서 전도 대상자를 기록하고, 기억하며, 지속적으로 기도할 수 있도록 돕는 카카오톡 웹 기반 프로그램입니다.',
    details: [
      '정체성: 참여자들에게 전도자로서의 사명을 상기시킵니다.',
      '방법: 하나님께 과정을 맡기며 타인과 동역하는 지속적인 전도.',
      '기능: 대상자 입력, 알람 설정, 대상자 공유, 영상 전도 기능.',
      '교육: 2시간 압축 강의 및 실습 포함.',
      '성과: 2021년 이후 2,000개 이상의 교회 참여, 35만 회 이상의 방문 기록.'
    ]
  },
  {
    id: 'thefour',
    title: 'THE FOUR (더포)',
    category: 'church',
    coreMessage: '심볼 너머의 이야기.',
    description: '4가지 단순한 심볼을 통해 복음의 핵심 메시지를 전달하는 방법입니다. 글보다 이미지에 익숙한 세대를 위해 디자인되었습니다.',
    details: [
      '도구: 소책자, 팔찌, 셔플 카드 게임, 디지털 콘텐츠.',
      '교육: 복음을 내면화한 성숙한 전도자 양성.',
      '활용: 노방 전도, 캠퍼스 사역, 단기 선교에 최적.',
      '일정: 1일 세미나(오후) 또는 2일 세미나(강의 및 실습).'
    ]
  },
  {
    id: 'edi-platform',
    title: 'EDI 더플랫폼',
    category: 'church',
    coreMessage: '뉴노멀 시대의 하이브리드 전도 시스템.',
    description: 'IT 기술과 전도 훈련을 결합하여 시간과 장소에 구애받지 않고 복음을 전할 수 있는 디지털 전도 생태계입니다.',
    details: [
      'KNOCK 플랫폼: 전도 대상자 관리부터 양육 연결까지 디지털로 관리.',
      '디지털 콘텐츠: 영상, 웹툰, 카드뉴스 등 세대별 맞춤형 복음 콘텐츠 제공.',
      '교회 맞춤형: 참여 교회에 독자적인 플랫폼 구축 및 전도 전략 지원.',
      '관계 중심: SNS를 활용해 자연스러운 복음 제시 브릿지 역할.'
    ]
  },
  {
    id: 'pcs',
    title: 'PCS 관계전도훈련',
    category: 'church',
    coreMessage: '기도와 돌봄을 통한 전도의 회복.',
    description: '전도자에게는 부담이 없고, 비신자에게는 거부감이 없는 관계 중심의 전도 훈련 프로그램입니다.',
    details: [
      'P (Prayer): 전도 대상자를 마음에 품고 그들의 필요를 위해 기도.',
      'C (Care): 파악된 필요를 바탕으로 사랑과 서비스, 친절 실천.',
      'S (Share): 돌봄을 통해 마음이 열린 이들에게 복음 공유.',
      '교육: 9주 과정, 주 1회 2시간 (온/오프라인).'
    ]
  },
  {
    id: 'familylife',
    title: '패밀리라이프 (FamilyLife)',
    category: 'family',
    coreMessage: '건강하고 거룩한 가정 세우기. 오늘을 위한 도움, 내일을 위한 희망!',
    description: '1993년부터 시작된 CCC 협력 사역으로, 결혼 예비 학교부터 노년기까지 전 생애 주기에 걸쳐 가정을 강화하는 사역입니다.',
    details: [
      '활동: 결혼 준비 및 부부 관계 강화 세미나.',
      '자원: 자녀 양육(AOP) 및 생애 주기별 사역 콘텐츠 제공.',
      '확산: 국내외 교회들이 가정 중심 사역을 도입하도록 지원.'
    ]
  },
  {
    id: 'p2p',
    title: 'P2P (Passport to Purity)',
    category: 'family',
    coreMessage: '자녀를 위한 성경적 성교육; 뻔뻔(Fun Fun)한 성교육.',
    description: '청소년들이 성경적 관점에서 성적 건강과 순결을 준비하도록 돕는 커리큘럼입니다.',
    details: [
      '방법: 부모(모-딸, 부-아들)나 리더가 재미있는 교구를 활용해 직접 교육.',
      '커리큘럼: 여행 테마의 5개 세션 (경계 설정, 데이트, 동행 등).',
      '구성: 자녀용 다이어리, 부모용 가이드북, 활동 키트 박스.',
      '프로그램: 부모/리더 세미나 및 가족 원데이 캠프.'
    ]
  },
  {
    id: 'fwia-bucket',
    title: 'FIWA Bucket (일터)',
    category: 'workplace',
    coreMessage: '일과 신앙이 하나 되는 교회의 버킷.',
    description: '일터 선교사로서의 정체성을 회복하고, 신앙과 전문직업인의 삶을 통합하도록 돕는 훈련입니다.',
    details: [
      '6대 주제: 일, 돈, 성공, 관계, 윤리, 갈증 해소(영적 재충전).',
      '구조: 소그룹(6-8명), 8주 기초 과정 (주 1회 2시간).',
      '방법: 말씀 묵상, 실제 업무 사례 공유, 주간 실천 목표 설정.',
      '대상: 2030 청년부부터 4050 장년부 및 교회 리더십.'
    ]
  }
];

export const categories = [
  { id: 'church', title: '교회', description: '공동체를 위한 전도 세미나 및 훈련' },
  { id: 'family', title: '가정', description: '건강하고 거룩한 가정을 세우기 위한 프로그램' },
  { id: 'workplace', title: '일터', description: '신앙 정체성 확립과 영향력 있는 리더로의 성장' }
];
