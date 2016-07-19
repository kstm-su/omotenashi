export default {
  weeks: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
  periods: [1, 2, 3, 4],
  courses: [
    {
      id: 1000,
      title: 'コンピュータデバイス',
      label: 'コンデバ',
      schedules: [{
        week: 0,
        period: 0,
        location: '第1講義室',
      }, {
        week: 1,
        period: 3,
        location: '第1講義室',
      }],
    }, {
      id: 2000,
      title: '論理回路Ⅰ',
      label: '論理回路Ⅰ',
      schedules: [{
        week: 0,
        period: 1,
        location: '第2講義室',
      }, {
        week: 2,
        period: 2,
        location: '4F実験室',
      }],
    }, {
      id: 3000,
      title: '画像処理',
      label: '画像処理',
      schedules: [{
        week: 0,
        period: 2,
        location: '第1講義室',
      }, {
        week: 1,
        period: 1,
        location: '第1講義室',
      }],
    }, {
      id: 4000,
      title: 'ヒューマンコンピュータインタラクション',
      label: 'HCI',
      schedules: [{
        week: 0,
        period: 3,
        location: '第1講義室',
      }, {
        week: 1,
        period: 2,
        location: '第1講義室',
      }],
    }, {
      id: 5000,
      title: 'プログラミング言語論',
      label: 'プロ言論',
      schedules: [{
        week: 2,
        period: 3,
        location: '第1講義室',
      }, {
        week: 3,
        period: 0,
        location: '第1講義室',
      }],
    }, {
      id: 6000,
      title: '論理回路Ⅱ',
      label: '論理回路Ⅱ',
      schedules: [{
        week: 3,
        period: 1,
        location: '第1講義室',
      }, {
        week: 4,
        period: 2,
        location: '4F実験室',
      }],
    }, {
      id: 7000,
      title: 'ソフトウェア工学',
      label: 'ソフ工',
      schedules: [{
        week: 2,
        period: 1,
        location: '第1講義室',
      }, {
        week: 2,
        period: 2,
        location: '第1講義室',
      }],
    }, {
      id: 8000,
      title: '微分積分学Ⅰ',
      label: '微積',
      schedules: [{
        week: 2,
        period: 2,
        location: '第2講義室',
      }],
    }, {
      id: 9000,
      title: 'ネットワークコンピューティング',
      label: 'ネトコン',
      schedules: [{
        week: 4,
        period: 0,
        location: '第1講義室',
      }, {
        week: 4,
        period: 1,
        location: '第1講義室',
      }],
    },
  ],
  events: [
    {
      id: 1,
      title: '課題1',
      deadline: '2016-07-15T00:00:00.000Z',
    }, {
      id: 2,
      title: '課題2',
      deadline: '2016-07-18T00:00:00.000Z',
    }, {
      id: 3,
      title: '課題3',
      deadline: '2016-07-120T00:00:00.000Z',
    },
  ],
};
