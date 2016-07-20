export default {
  weeks: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
  periods: [1, 2, 3, 4],
  courses: [
    {
      id: 1000,
      title: 'コンピュータデバイス',
      label: 'コンデバ',
      instructors: [
        {
          name: 'LIU XIAOXI',
        },
      ],
      schedules: [{
        week: 0,
        period: 0,
        location: '工W1-115教室',
      }, {
        week: 1,
        period: 3,
        location: '工W1-115教室',
      }],
    }, {
      id: 2000,
      title: '論理回路Ⅰ',
      label: '論理回路Ⅰ',
      instructors: [
        {
          name: '井澤 裕司',
        }, {
          name: '上口 光',
          image: 'http://www.cs.shinshu-u.ac.jp/labs/staff/johguchi.jpg',
        },
      ],
      schedules: [{
        week: 0,
        period: 1,
        location: '工W1-215教室',
      }, {
        week: 2,
        period: 2,
        location: '工W1-215教室',
      }],
    }, {
      id: 3000,
      title: '画像処理',
      label: '画像処理',
      instructors: [
        {
          name: '丸山 稔',
        }, {
          name: '白井 啓一郎',
          image: 'http://www.cs.shinshu-u.ac.jp/labs/staff/shirai.jpg',
        }
      ],
      schedules: [{
        week: 0,
        period: 2,
        location: '工W1-115教室',
      }, {
        week: 1,
        period: 1,
        location: '工W1-115教室',
      }],
    }, {
      id: 4000,
      title: 'ヒューマンコンピュータインタラクション',
      label: 'HCI',
      instructors: [
        {
          name: '小林 一樹',
        },
      ],
      schedules: [{
        week: 0,
        period: 3,
        location: '工W1-115教室',
      }, {
        week: 1,
        period: 2,
        location: '工W1-115教室',
      }],
    }, {
      id: 5000,
      title: 'プログラミング言語論',
      label: 'プロ言論',
      instructors: [
        {
          name: '藤原 洋志',
          image: 'http://www.cs.shinshu-u.ac.jp/labs/staff/fujiwara.jpg',
        },
      ],
      schedules: [{
        week: 2,
        period: 3,
        location: '工W1-115教室',
      }, {
        week: 3,
        period: 0,
        location: '工W1-115教室',
      }],
    }, {
      id: 6000,
      title: '論理回路Ⅱ',
      label: '論理回路Ⅱ',
      instructors: [
        {
          name: '井澤 裕司',
        }, {
          name: '上口 光',
        },
      ],
      schedules: [{
        week: 3,
        period: 1,
        location: '工W1-115教室',
      }, {
        week: 4,
        period: 2,
        location: '工W1-115教室',
      }],
    }, {
      id: 7000,
      title: 'ソフトウェア工学',
      label: 'ソフ工',
      instructors: [
        {
          name: '岡野 浩三',
          image: 'http://www.cs.shinshu-u.ac.jp/labs/staff/okano.jpg',
        }, {
          name: '小形 真平',
          image: 'http://www.cs.shinshu-u.ac.jp/labs/staff/ogata.jpg',
        },
      ],
      schedules: [{
        week: 2,
        period: 1,
        location: '工W1-115教室',
      }, {
        week: 2,
        period: 2,
        location: '工W1-115教室',
      }],
    }, {
      id: 8000,
      title: '微分積分学Ⅰ',
      label: '微積',
      instructors: [
        {
          name: '師玉 康成',
        }, {
          name: '山﨑 浩',
        },
      ],
      schedules: [{
        week: 2,
        period: 2,
        location: '工W1-215教室',
      }],
    }, {
      id: 9000,
      title: 'ネットワークコンピューティング',
      label: 'ネトコン',
      instructors: [
        {
          name: '和﨑 克己',
        },
      ],
      schedules: [{
        week: 4,
        period: 0,
        location: '工W1-115教室',
      }, {
        week: 4,
        period: 1,
        location: '工W1-115教室',
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
