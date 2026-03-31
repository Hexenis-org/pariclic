import { h } from 'vue'

export type IconName =
  | 'instagram'
  | 'facebook'
  | 'tiktok'
  | 'snapchat'
  | 'mail'
  | 'phone'
  | 'add'
  | 'remove'
  | 'check'
  | 'close'
  | 'delete'
  | 'restore'
  | 'arrowLeft'
  | 'arrowRight'
  | 'arrowUp'
  | 'arrowDown'
  | 'search'
  | 'clear'

export type IconVariant = 'fill' | 'outline'

const createIcon = (children: any[], viewBox = '0 0 24 24') => ({
  render() {
    return h(
      'svg',
      {
        viewBox,
        xmlns: 'http://www.w3.org/2000/svg',
        fill: 'none',
        'aria-hidden': 'true'
      },
      children
    )
  }
})

export const icons: Record<
  IconName,
  Partial<Record<IconVariant, ReturnType<typeof createIcon>>>
> = {
  instagram: {
    outline: createIcon([
      h('rect', {
        x: '3',
        y: '3',
        width: '18',
        height: '18',
        rx: '5',
        stroke: 'currentColor',
        'stroke-width': '1.75'
      }),
      h('circle', {
        cx: '12',
        cy: '12',
        r: '4',
        stroke: 'currentColor',
        'stroke-width': '1.75'
      }),
      h('circle', {
        cx: '17',
        cy: '7',
        r: '1.25',
        fill: 'currentColor'
      })
    ]),

    fill: createIcon([
      h('rect', {
        x: '3',
        y: '3',
        width: '18',
        height: '18',
        rx: '5',
        fill: 'currentColor'
      }),
      h('circle', {
        cx: '12',
        cy: '12',
        r: '3',
        fill: 'white'
      }),
      h('circle', {
        cx: '17',
        cy: '7',
        r: '1.2',
        fill: 'white'
      })
    ])
  },

  facebook: {
    fill: createIcon([
      h('path', {
        d: 'M13.5 22v-8h2.7l.5-3h-3.2V9.1c0-.9.3-1.6 1.6-1.6H17V4.8c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4V11H8v3h2.8v8z',
        fill: 'currentColor'
      })
    ]),

    outline: createIcon([
      h('path', {
        d: 'M13.5 22v-8h2.7l.5-3h-3.2V9.1c0-.9.3-1.6 1.6-1.6H17V4.8c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4V11H8v3h2.8v8z',
        stroke: 'currentColor',
        'stroke-width': '1.5',
        fill: 'none'
      })
    ])
  },

  tiktok: {
    fill: createIcon([
      h('path', {
        d: 'M14.8 3c.3 1.8 1.4 3.1 3.2 3.7v2.8c-1.2 0-2.3-.3-3.2-.9v5.5a4.8 4.8 0 1 1-4.8-4.8c.3 0 .6 0 .9.1v2.7a2.2 2.2 0 1 0 1.2 2V3z',
        fill: 'currentColor'
      })
    ]),

    outline: createIcon([
      h('path', {
        d: 'M14.8 3c.3 1.8 1.4 3.1 3.2 3.7v2.8c-1.2 0-2.3-.3-3.2-.9v5.5a4.8 4.8 0 1 1-4.8-4.8c.3 0 .6 0 .9.1v2.7a2.2 2.2 0 1 0 1.2 2V3z',
        stroke: 'currentColor',
        'stroke-width': '1.5',
        fill: 'none'
      })
    ])
  },

  snapchat: {
    fill: createIcon(
      [
        h('path', {
          d: 'M 46.773438 35.078125 ... 46.773438 35.078125 Z',
          fill: 'currentColor'
        })
      ],
      '0 0 50 50'
    ),

    outline: createIcon([
      h('path', {
        d: 'M12 2.5c-3.2 0-5.5 2.3-5.5 5.3 0 1 .3 2 .8 2.8-.6.4-1.3.7-2 .9-.4.1-.5.6-.1.8.7.3 1.3.5 2 .6.4 1.3 1.5 2.2 3.8 2.4 2.3-.2 3.4-1.1 3.8-2.4.7-.1 1.3-.3 2-.6.4-.2.3-.7-.1-.8-.7-.2-1.4-.5-2-.9.5-.8.8-1.8.8-2.8 0-3-2.3-5.3-5.5-5.3z',
        stroke: 'currentColor',
        'stroke-width': '1.5',
        fill: 'none'
      })
    ])
  },

  mail: {
    outline: createIcon([
      h('rect', {
        x: '3',
        y: '5',
        width: '18',
        height: '14',
        rx: '2',
        stroke: 'currentColor',
        'stroke-width': '1.5'
      }),
      h('path', { d: 'M3 7l9 6 9-6', stroke: 'currentColor', 'stroke-width': '1.5', fill: 'none' })
    ]),
    fill: createIcon([h('path', { d: 'M3 6l9 6 9-6v12H3z', fill: 'currentColor' })])
  },

  phone: {
    outline: createIcon([
      h('path', {
        d: 'M6 3h4l2 5-2 2a12 12 0 005 5l2-2 5 2v4a2 2 0 01-2 2C10 21 3 14 3 6a2 2 0 012-2z',
        stroke: 'currentColor',
        'stroke-width': '1.5',
        fill: 'none'
      })
    ]),
    fill: createIcon([
      h('path', {
        d: 'M6 3h4l2 5-2 2a12 12 0 005 5l2-2 5 2v4a2 2 0 01-2 2C10 21 3 14 3 6a2 2 0 012-2z',
        fill: 'currentColor'
      })
    ])
  },

  add: {
    outline: createIcon([
      h('path', { d: 'M12 5v14M5 12h14', stroke: 'currentColor', 'stroke-width': '1.5' })
    ]),
    fill: createIcon([h('path', { d: 'M11 5h2v14h-2zM5 11h14v2H5z', fill: 'currentColor' })])
  },

  remove: {
    outline: createIcon([
      h('path', { d: 'M5 12h14', stroke: 'currentColor', 'stroke-width': '1.5' })
    ]),
    fill: createIcon([
      h('rect', { x: '5', y: '11', width: '14', height: '2', fill: 'currentColor' })
    ])
  },

  check: {
    outline: createIcon([
      h('path', {
        d: 'M5 13l4 4L19 7',
        stroke: 'currentColor',
        'stroke-width': '1.5',
        fill: 'none'
      })
    ]),
    fill: createIcon([h('path', { d: 'M9 17l-4-4 2-2 2 2 6-6 2 2z', fill: 'currentColor' })])
  },

  close: {
    outline: createIcon([
      h('path', { d: 'M6 6l12 12M18 6L6 18', stroke: 'currentColor', 'stroke-width': '1.5' })
    ]),
    fill: createIcon([
      h('path', { d: 'M6 6l12 12M18 6L6 18', stroke: 'currentColor', 'stroke-width': '2' })
    ])
  },

  delete: {
    outline: createIcon([
      h('path', { d: 'M4 7h16M10 11v6M14 11v6', stroke: 'currentColor', 'stroke-width': '1.5' }),
      h('rect', {
        x: '6',
        y: '7',
        width: '12',
        height: '14',
        rx: '2',
        stroke: 'currentColor',
        'stroke-width': '1.5'
      })
    ]),
    fill: createIcon([
      h('rect', { x: '6', y: '7', width: '12', height: '14', rx: '2', fill: 'currentColor' })
    ])
  },

  restore: {
    outline: createIcon([
      h('path', { d: 'M4 12a8 8 0 118 8', stroke: 'currentColor', 'stroke-width': '1.5' }),
      h('path', { d: 'M4 12l4-4M4 12l4 4', stroke: 'currentColor', 'stroke-width': '1.5' })
    ]),
    fill: createIcon([
      h('path', { d: 'M4 12a8 8 0 118 8', stroke: 'currentColor', 'stroke-width': '2' })
    ])
  },

  arrowLeft: {
    outline: createIcon([
      h('path', { d: 'M15 6l-6 6 6 6', stroke: 'currentColor', 'stroke-width': '1.5' })
    ]),
    fill: createIcon([h('path', { d: 'M15 6l-6 6 6 6V6z', fill: 'currentColor' })])
  },

  arrowRight: {
    outline: createIcon([
      h('path', { d: 'M9 6l6 6-6 6', stroke: 'currentColor', 'stroke-width': '1.5' })
    ]),
    fill: createIcon([h('path', { d: 'M9 6l6 6-6 6V6z', fill: 'currentColor' })])
  },

  search: {
    outline: createIcon([
      h('circle', { cx: '11', cy: '11', r: '7', stroke: 'currentColor', 'stroke-width': '1.5' }),
      h('path', { d: 'M20 20l-3-3', stroke: 'currentColor', 'stroke-width': '1.5' })
    ]),
    fill: createIcon([h('circle', { cx: '11', cy: '11', r: '7', fill: 'currentColor' })])
  },

  clear: {
    outline: createIcon([
      h('path', { d: 'M6 6l12 12M18 6L6 18', stroke: 'currentColor', 'stroke-width': '1.5' })
    ]),
    fill: createIcon([
      h('path', { d: 'M6 6l12 12M18 6L6 18', stroke: 'currentColor', 'stroke-width': '2' })
    ])
  },

  arrowUp: {
    outline: createIcon([
      h('path', {
        d: 'M6 15l6-6 6 6',
        stroke: 'currentColor',
        'stroke-width': '1.5'
      })
    ]),
    fill: createIcon([
      h('path', {
        d: 'M6 15l6-6 6 6H6z',
        fill: 'currentColor'
      })
    ])
  },

  arrowDown: {
    outline: createIcon([
      h('path', {
        d: 'M6 9l6 6 6-6',
        stroke: 'currentColor',
        'stroke-width': '1.5'
      })
    ]),
    fill: createIcon([
      h('path', {
        d: 'M6 9l6 6 6-6H6z',
        fill: 'currentColor'
      })
    ])
  }
}
