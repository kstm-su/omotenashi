module.exports = {
  weeks: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
  periods: [1, 2, 3, 4],
  courses: [
    {
      title: 'コンピュータデバイス',
      label: 'コンデバ',
      schedules: [{
        week: 0,
        period: 0,
        location: '第2講義室',
      }, {
        week: 1,
        period: 3,
        location: '第2講義室',
      }],
    }, {
      title: '画像処理',
      label: '画像処理',
      schedules: [{
        week: 0,
        period: 1,
        location: '第2講義室',
      }, {
        week: 1,
        period: 1,
        location: '第2講義室',
      }],
    }, {
      title: 'ヒューマンコンピュータインタラクション',
      label: 'HCI',
      schedules: [{
        week: 0,
        period: 2,
        location: '第2講義室',
      }, {
        week: 0,
        period: 3,
        location: '第2講義室',
      }],
    }, {
      title: 'プログラミング言語論',
      label: 'プロ言論',
      schedules: [{
        week: 2,
        period: 3,
        location: '第2講義室',
      }, {
        week: 3,
        period: 0,
        location: '第2講義室',
      }],
    }, {
      title: '論理回路Ⅱ',
      label: '論理回路Ⅱ',
      schedules: [{
        week: 3,
        period: 1,
        location: '第2講義室',
      }, {
        week: 4,
        period: 3,
        location: '4F実験室',
      }],
    }, {
      title: 'アカデミックイングリッシュ',
      label: 'AE',
      schedules: [{
        week: 1,
        period: 3,
        location: '物理のどっか',
      }],
    }
  ],
  todo: [
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
